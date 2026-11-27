# Uploads files to the R2 bucket (S3 API, SigV4, standard library only; the keys come from the user's environment variables, never from a file).
#   python tools/r2_put.py <key-in-bucket> <local-file> [content-type]      one file
#   python tools/r2_put.py --dir <local-dir> <prefix> [--workers 8]         every file of a folder under <prefix>/
# Env: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET (read from the Windows user environment when this process does not have them).
import datetime, hashlib, hmac, mimetypes, os, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor


def env(name):
    v = os.environ.get(name)
    if v:
        return v
    try:
        import winreg
        with winreg.OpenKey(winreg.HKEY_CURRENT_USER, 'Environment') as k:
            return winreg.QueryValueEx(k, name)[0]
    except Exception:
        return None


ACCOUNT, KEY, SECRET, BUCKET = env('R2_ACCOUNT_ID'), env('R2_ACCESS_KEY_ID'), env('R2_SECRET_ACCESS_KEY'), env('R2_BUCKET')
if not all([ACCOUNT, KEY, SECRET, BUCKET]):
    sys.exit('R2 environment variables are missing')
HOST = f'{ACCOUNT}.r2.cloudflarestorage.com'
REGION, SERVICE = 'auto', 's3'


def _sign(k, msg):
    return hmac.new(k, msg.encode(), hashlib.sha256).digest()


def put(key, data, ctype):
    now = datetime.datetime.now(datetime.timezone.utc)
    amz, day = now.strftime('%Y%m%dT%H%M%SZ'), now.strftime('%Y%m%d')
    path = '/' + BUCKET + '/' + urllib.parse.quote(key, safe='/-_.~')
    payload = hashlib.sha256(data).hexdigest()
    headers = {'host': HOST, 'x-amz-content-sha256': payload, 'x-amz-date': amz, 'content-type': ctype}
    signed = ';'.join(sorted(headers))
    canonical = 'PUT\n' + path + '\n\n' + ''.join(f'{h}:{headers[h]}\n' for h in sorted(headers)) + '\n' + signed + '\n' + payload
    scope = f'{day}/{REGION}/{SERVICE}/aws4_request'
    to_sign = 'AWS4-HMAC-SHA256\n' + amz + '\n' + scope + '\n' + hashlib.sha256(canonical.encode()).hexdigest()
    k = _sign(_sign(_sign(_sign(('AWS4' + SECRET).encode(), day), REGION), SERVICE), 'aws4_request')
    sig = hmac.new(k, to_sign.encode(), hashlib.sha256).hexdigest()
    auth = f'AWS4-HMAC-SHA256 Credential={KEY}/{scope}, SignedHeaders={signed}, Signature={sig}'
    req = urllib.request.Request('https://' + HOST + path, data=data, method='PUT', headers={**{h: v for h, v in headers.items() if h != 'host'}, 'Authorization': auth})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.status
    except urllib.error.HTTPError as e:
        return f'HTTP {e.code} {e.read()[:200]!r}'


def upload_file(key, path, ctype=None):
    ctype = ctype or mimetypes.guess_type(path)[0] or 'application/octet-stream'
    with open(path, 'rb') as f:
        return key, put(key, f.read(), ctype)


if __name__ == '__main__':
    a = sys.argv[1:]
    if a and a[0] == '--dir':
        root, prefix = a[1], a[2].strip('/')
        workers = int(a[a.index('--workers') + 1]) if '--workers' in a else 8
        jobs = []
        for r, _, fs in os.walk(root):
            for f in fs:
                p = os.path.join(r, f)
                jobs.append((prefix + '/' + os.path.relpath(p, root).replace(os.sep, '/'), p))
        bad = 0
        with ThreadPoolExecutor(workers) as ex:
            for key, st in ex.map(lambda j: upload_file(*j), jobs):
                if st != 200:
                    bad += 1
                    print('FAIL', key, st)
        print('uploaded', len(jobs) - bad, 'of', len(jobs))
    else:
        print(upload_file(a[0], a[1], a[2] if len(a) > 2 else None))
