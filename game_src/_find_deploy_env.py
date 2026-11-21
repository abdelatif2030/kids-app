import glob, json, os, re
base = os.path.expanduser('~/.claude/projects/C--dev-rehlaty')
cfg = {}
lessons = None
for f in sorted(glob.glob(base + '/*.jsonl'), key=os.path.getmtime):
    for line in open(f, encoding='utf8'):
        if 'apiKey' in line or 'LESSONS_BASE_URL' in line:
            try:
                d = json.loads(line)
            except Exception:
                continue
            s = json.dumps(d, ensure_ascii=False)
            for k, pat in [('FIREBASE_API_KEY', r'apiKey\\?"?\s*[:=]\s*\\?"(AIza[A-Za-z0-9_\-]{30,})'), ('FIREBASE_AUTH_DOMAIN', r'authDomain\\?"?\s*[:=]\s*\\?"([a-z0-9\-\.]+firebaseapp\.com)'), ('FIREBASE_PROJECT_ID', r'projectId\\?"?\s*[:=]\s*\\?"([a-z0-9\-]+)'), ('FIREBASE_SENDER_ID', r'messagingSenderId\\?"?\s*[:=]\s*\\?"(\d+)'), ('FIREBASE_APP_ID', r'appId\\?"?\s*[:=]\s*\\?"(1:\d+:web:[a-f0-9]+)')]:
                m = re.search(pat, s)
                if m:
                    cfg[k] = m.group(1)
            m = re.search(r'LESSONS_BASE_URL\\?"?\s*[=:]\s*\\?"?(https://[A-Za-z0-9\.\-/_]+)', s)
            if m:
                lessons = m.group(1)
if lessons:
    cfg['LESSONS_BASE_URL'] = lessons
print({k: len(v) for k, v in cfg.items()})
if len(cfg) == 6:
    with open(r'C:\dev\rehlaty\build\.deploy_env', 'w', encoding='utf8') as o:
        for k, v in cfg.items():
            o.write(f'{k}={v}\n')
    print('written to build/.deploy_env (git-ignored)')
