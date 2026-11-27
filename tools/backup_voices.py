# Backs up EVERY sound file of the project into one zip + a manifest (path, size, sha256), then verifies the zip.
#   python -X utf8 tools/backup_voices.py <output-dir>
# Collects all audio under assets/ (voices, clips, music): mp3 wav ogg m4a aac flac opus.
import csv, datetime, hashlib, io, os, sys, zipfile

EXT = {'.mp3', '.wav', '.ogg', '.m4a', '.aac', '.flac', '.opus'}
out = sys.argv[1]
os.makedirs(out, exist_ok=True)
stamp = datetime.date.today().isoformat()
zpath = os.path.join(out, f'rehlaty_all_voices_{stamp}.zip')
files = []
for r, _, fs in os.walk('assets'):
    for f in fs:
        if os.path.splitext(f)[1].lower() in EXT:
            files.append(os.path.join(r, f).replace(os.sep, '/'))
files.sort()
rows = [('path', 'bytes', 'sha256')]
with zipfile.ZipFile(zpath, 'w', zipfile.ZIP_STORED) as z:   # mp3 is already compressed: STORED is fastest and the same size
    for p in files:
        data = open(p, 'rb').read()
        rows.append((p, len(data), hashlib.sha256(data).hexdigest()))
        z.writestr(p, data)
    buf = io.StringIO()
    csv.writer(buf, lineterminator='\n').writerows(rows)
    z.writestr('MANIFEST.csv', buf.getvalue())
with open(os.path.join(out, f'rehlaty_all_voices_{stamp}_MANIFEST.csv'), 'w', encoding='utf-8', newline='') as m:
    csv.writer(m, lineterminator='\n').writerows(rows)
# verify
with zipfile.ZipFile(zpath) as z:
    bad = z.testzip()
    names = {i.filename for i in z.infolist()}
missing = [p for p in files if p not in names]
by = {}
for p in files:
    top = '/'.join(p.split('/')[:3])
    by[top] = by.get(top, 0) + 1
print('files', len(files), 'zip MB', round(os.path.getsize(zpath) / 1048576, 1), 'testzip', bad, 'missing in zip', len(missing))
for k, v in sorted(by.items(), key=lambda x: -x[1])[:12]:
    print(' ', k, v)
