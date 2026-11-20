import json, os, math
from PIL import Image, ImageDraw
os.chdir('C:/dev/rehlaty')
res = json.load(open('build/smoke/result.json'))
bad = [r['d'] for r in res if not r['ok']]
print('failed to render:', bad)
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad'
ok = [r for r in res if r['ok']]
w, h = 280, 137
cols = 5
per = 25
for part in range(0, len(ok), per):
    chunk = ok[part:part + per]
    rows = math.ceil(len(chunk) / cols)
    S = Image.new('RGB', (cols * w, rows * (h + 14)), (30, 20, 60))
    d = ImageDraw.Draw(S)
    for i, r in enumerate(chunk):
        im = Image.open(f'build/smoke/{r["d"]}.png').convert('RGB').resize((w, h))
        x, y = (i % cols) * w, (i // cols) * (h + 14)
        S.paste(im, (x, y + 14))
        d.text((x + 3, y + 1), r['d'], fill=(255, 255, 120))
    S.save(f'{OUT}\\smoke_{part // per + 1}.png')
print(len(ok), 'ok')
