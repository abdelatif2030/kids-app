# python tools/gpt_take.py <code>  -> copies the newest ChatGPT download (< 150 s old, not a duplicate) from ~/Downloads to build/gpt_art/<code>.png
import sys, os, glob, time, hashlib, shutil
code = sys.argv[1]
D = os.path.expanduser('~/Downloads')
fs = [f for f in glob.glob(D + '/*.png') + glob.glob(D + '/*.webp') + glob.glob(D + '/*.jpg') if time.time() - os.path.getmtime(f) < 150]
if not fs: print('NO NEW FILE'); sys.exit(1)
f = max(fs, key=os.path.getmtime)
h = hashlib.md5(open(f, 'rb').read()).hexdigest()
seen = {hashlib.md5(open(p, 'rb').read()).hexdigest() for p in glob.glob('build/gpt_art/*.png')}
if h in seen: print('DUPLICATE of an earlier file'); sys.exit(2)
shutil.copy(f, f'build/gpt_art/{code}.png'); os.remove(f); print('OK', code, os.path.getsize(f) if os.path.exists(f) else '')
