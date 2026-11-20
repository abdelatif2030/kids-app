# Turns generated pictures (game_src/_generated_images/<game>/*.jpg) into game art: assets/games/<game>/art/*.webp
# sprites: the plain white background is removed (flood fill from the edges, soft edge), cropped, scaled to <=512 px
# scenes: cropped to a wide band, scaled to 1024 px wide; cards: scaled to 768 px
# Run: python tools/process_art.py hamster_warrior   (reads tools/art_jobs/<game>.json for each picture's kind)
import json, os, sys
from collections import deque
from PIL import Image, ImageFilter

game = sys.argv[1]
spec = json.load(open(f'tools/art_jobs/{game}.json', encoding='utf8'))
src = f'game_src/_generated_images/{game}'
out = f'assets/games/{game}/art'
if game != 'cards': os.makedirs(out, exist_ok=True)


def cut_white(im, tol=34):
    im = im.convert('RGB')
    w, h = im.size
    px = im.load()
    bg = [[False] * w for _ in range(h)]
    dq = deque()

    def near(x, y):
        r, g, b = px[x, y]
        return r > 255 - tol and g > 255 - tol and b > 255 - tol

    for x in range(w):
        for y in (0, h - 1):
            if near(x, y) and not bg[y][x]: bg[y][x] = True; dq.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if near(x, y) and not bg[y][x]: bg[y][x] = True; dq.append((x, y))
    while dq:
        x, y = dq.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not bg[ny][nx] and near(nx, ny):
                bg[ny][nx] = True; dq.append((nx, ny))
    mask = Image.new('L', (w, h), 255)
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            if bg[y][x]: mp[x, y] = 0
    mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))  # shave the white halo, soften the edge
    rgba = im.convert('RGBA'); rgba.putalpha(mask)
    box = rgba.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
    return rgba.crop(box) if box else rgba


for j in spec['jobs']:
    f = f'{src}/{j["name"]}.jpg'
    if not os.path.exists(f): print('missing', f); continue
    im = Image.open(f)
    k = j['kind']
    if k == 'bg':   # page backgrounds for the fun-games hub and each section: 16:9
        im = im.convert('RGB'); w, h = im.size; ch = int(w / 1.78); top = int((h - ch) * 0.5)
        im = im.crop((0, top, w, top + ch)).resize((1024, 576), Image.LANCZOS)
        dest = f'assets/games/sections/bg_{j["name"]}.webp'; os.makedirs(os.path.dirname(dest), exist_ok=True)
        im.save(dest, 'WEBP', quality=80); print('ok bg', j['name'], os.path.getsize(dest) // 1024, 'KB'); continue
    if k in ('card', 'section'):   # menu pictures: crop to the tile's shape and save where the sections screen looks for them
        ratio, size, dest = (1.247, (480, 385), f'assets/games/{j["name"]}/card.webp') if k == 'card' else (1.7, (640, 376), f'assets/games/sections/{j["name"]}.webp')
        im = im.convert('RGB'); w, h = im.size; ch = int(w / ratio); top = int((h - ch) * 0.45)
        im = im.crop((0, top, w, top + ch)).resize(size, Image.LANCZOS)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        if k == 'card' and os.path.exists(dest) and '--keep' in sys.argv: print('keep', j['name']); continue
        im.save(dest, 'WEBP', quality=84); print('ok', k, j['name'], os.path.getsize(dest) // 1024, 'KB'); continue
    if k == 'sprite':
        im = cut_white(im); im.thumbnail((512, 512), Image.LANCZOS)
    elif j['name'].startswith('sky'):
        w, h = im.size; im = im.crop((0, int(h * 0.22), w, int(h * 0.72))); im = im.resize((1024, int(1024 * im.size[1] / w)), Image.LANCZOS)
    else:
        im.thumbnail((768, 768), Image.LANCZOS)
    im.save(f'{out}/{j["name"]}.webp', 'WEBP', quality=82, method=6)
    print('ok', j['name'], im.size, os.path.getsize(f'{out}/{j["name"]}.webp') // 1024, 'KB')
