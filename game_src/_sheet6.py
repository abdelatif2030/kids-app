import os, glob, sys, hashlib
from PIL import Image, ImageDraw
os.chdir('C:/dev/rehlaty')
games = sys.argv[1:]
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad\sheet6.png'
files = []
for g in games:
    files += sorted(glob.glob(f'assets/games/{g}/art/*.webp'))
w, h = 190, 190
cols = 7
rows = (len(files) + cols - 1) // cols
S = Image.new('RGB', (cols * w, rows * h), (170, 70, 170))
d = ImageDraw.Draw(S)
seen = {}
for i, f in enumerate(files):
    im = Image.open(f).convert('RGBA')
    key = hashlib.md5(open(f, 'rb').read()).hexdigest()[:6]
    seen.setdefault(key, []).append(f)
    im.thumbnail((w - 6, h - 22))
    x, y = (i % cols) * w, (i // cols) * h
    S.paste(im, (x + 3, y + 3), im)
    d.text((x + 4, y + h - 16), os.path.basename(f).replace('.webp', '')[:26], fill=(255, 255, 255))
S.save(OUT)
print(len(files), 'files')
for k, v in seen.items():
    if len(v) > 1:
        print('IDENTICAL:', [os.path.relpath(x) for x in v])
