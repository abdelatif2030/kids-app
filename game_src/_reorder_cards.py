import json
p = 'tools/art_jobs/cards.json'
d = json.load(open(p, encoding='utf8'))
jobs = d['jobs']
secs = [j for j in jobs if j['kind'] == 'section']
cards = [j for j in jobs if j['kind'] == 'card']
bgs = [
    {"name": "hub", "kind": "bg", "prompt": "A magical kids' amusement park at golden hour seen from a wide hill: a giant Ferris wheel, a roller coaster loop, colorful tents, a racing track, a small castle and floating balloons in the distance, soft glowing sky, no characters in the foreground, plenty of empty space in the middle for menu buttons."},
    {"name": "racing", "kind": "bg", "prompt": "A sunny racing circuit panorama: curved asphalt road with red-white curbs, grandstands with cheering crowd, palm trees and the sea, speed banners, no vehicles, empty space in the middle."},
    {"name": "action", "kind": "bg", "prompt": "An epic cartoon battle arena panorama with stone towers, glowing crystals, banners and light beams in a purple and orange sky, no characters, empty space in the middle."},
    {"name": "runners", "kind": "bg", "prompt": "A colorful floating-islands platformer world panorama with jungle vines, golden coins, clouds and rainbow, bright cyan sky, no characters, empty space in the middle."},
    {"name": "build", "kind": "bg", "prompt": "A cozy sunny village panorama with wheat fields, a red barn, windmill, beehives, small shops and orchards, warm morning light, no characters, empty space in the middle."},
    {"name": "puzzle", "kind": "bg", "prompt": "A playful dreamy puzzle world panorama with floating colorful blocks, glowing marbles, soft pastel gradients, stars and sparkles in a blue-violet sky, no characters, empty space in the middle."},
    {"name": "girls", "kind": "bg", "prompt": "A sparkly pink princess boutique panorama with a glittering runway, curtains, hearts, ribbons, mannequins with dresses and soft bokeh lights, no characters, empty space in the middle."},
]
d['jobs'] = secs + bgs[:1] + bgs[1:] + cards
json.dump(d, open(p, 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(len(d['jobs']), 'jobs')

p = 'tools/process_art.py'
s = open(p, encoding='utf8').read()
if "k == 'bg'" not in s:
    s = s.replace("    if k in ('card', 'section'):", """    if k == 'bg':   # page backgrounds for the fun-games hub and each section: 16:9
        im = im.convert('RGB'); w, h = im.size; ch = int(w / 1.78); top = int((h - ch) * 0.5)
        im = im.crop((0, top, w, top + ch)).resize((1024, 576), Image.LANCZOS)
        dest = f'assets/games/sections/bg_{j["name"]}.webp'; os.makedirs(os.path.dirname(dest), exist_ok=True)
        im.save(dest, 'WEBP', quality=80); print('ok bg', j['name'], os.path.getsize(dest) // 1024, 'KB'); continue
    if k in ('card', 'section'):""", 1)
    open(p, 'w', encoding='utf8').write(s)
print('ok')
