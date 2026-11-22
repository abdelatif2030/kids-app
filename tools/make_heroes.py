# Cuts the main hero out of every Gemini hero sheet -> assets/games/<game>/hero.webp (transparent, <= 460 px tall)
import glob, os, sys
sys.path.insert(0, 'tools')
from PIL import Image
from cut_hero_sheet import cut
out = {}
for f in sorted(glob.glob('build/gemini_art/*__hero_sheet_gemini.jpg')):
    g = os.path.basename(f).split('__')[0]
    if len(sys.argv) > 1 and g not in sys.argv[1:]: continue
    im = Image.open(f); W, H = im.size
    parts = cut(f, f'build/cut/hero_{g}', min_area=0.0025, max_n=40, thr=52, dil=7)
    cand = []
    for p, bb in parts:
        x0, y0, x1, y1 = bb; w, h = x1 - x0, y1 - y0
        if h / max(w, 1) > 1.9: continue                   # vertical stacks of several characters
        if w < W * 0.07 or h < H * 0.12: continue          # text labels / specks
        if (x0 + x1) / 2 > W * 0.62 or (y0 + y1) / 2 > H * 0.5: continue  # keep the top-left region = the hero's idle pose
        cand.append((w * h, p))
    if not cand: print('NO HERO', g, len(parts)); continue
    cand.sort(reverse=True); p = cand[0][1]
    t = Image.open(p).convert('RGBA'); bb = t.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox(); t = t.crop(bb)
    if t.height > 460: t = t.resize((int(t.width * 460 / t.height), 460), Image.LANCZOS)
    t.save(f'assets/games/{g}/hero.webp', 'WEBP', quality=88, method=6); out[g] = t.size
    print(g, t.size)
