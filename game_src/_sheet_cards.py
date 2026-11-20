import json, os
from PIL import Image
os.chdir('C:/dev/rehlaty')
d = json.load(open('tools/art_jobs/cards.json', encoding='utf8'))
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad'
secs = [j['name'] for j in d['jobs'] if j['kind'] == 'section']
bgs = [j['name'] for j in d['jobs'] if j['kind'] == 'bg']
cards = [j['name'] for j in d['jobs'] if j['kind'] == 'card']
def sheet(paths, cols, w, h, out):
    rows = (len(paths) + cols - 1) // cols
    S = Image.new('RGB', (cols * w, rows * h), (30, 20, 60))
    for i, p in enumerate(paths):
        if os.path.exists(p):
            im = Image.open(p).convert('RGB'); im = im.resize((w, h)); S.paste(im, ((i % cols) * w, (i // cols) * h))
    S.save(out)
sheet([f'assets/games/sections/{n}.webp' for n in secs], 3, 320, 188, OUT + r'\sections.png')
sheet([f'assets/games/sections/{n}.webp' for n in bgs], 4, 256, 144, OUT + r'\bgs.png')
sheet([f'assets/games/{n}/card.webp' for n in cards[:20]], 5, 240, 192, OUT + r'\cards1.png')
sheet([f'assets/games/{n}/card.webp' for n in cards[20:]], 5, 240, 192, OUT + r'\cards2.png')
print('ok', len(secs), len(bgs), len(cards))
