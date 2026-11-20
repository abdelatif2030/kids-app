import json, os
from PIL import Image
os.chdir('C:/dev/rehlaty')
d = json.load(open('tools/art_jobs/cards2.json', encoding='utf8'))
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad\cards3.png'
paths = [f'assets/games/{j["name"]}/card.webp' if j['kind'] == 'card' else f'assets/games/sections/{j["name"]}.webp' for j in d['jobs']]
w, h = 240, 192
cols = 6
rows = (len(paths) + cols - 1) // cols
S = Image.new('RGB', (cols * w, rows * h), (30, 20, 60))
for i, p in enumerate(paths):
    if os.path.exists(p):
        S.paste(Image.open(p).convert('RGB').resize((w, h)), ((i % cols) * w, (i // cols) * h))
S.save(OUT)
print(len(paths))
