# For the games whose hero came out small: take the biggest single character of the sheet and upscale it a little with a gentle sharpen.
import glob, os, sys
sys.path.insert(0, 'tools')
from PIL import Image, ImageFilter
from cut_hero_sheet import cut
for g in sys.argv[1:]:
    f = f'build/gemini_art/{g}__hero_sheet_gemini.jpg'
    im = Image.open(f); W, H = im.size
    parts = cut(f, f'build/cut/herobig_{g}', min_area=0.0025, max_n=40, thr=52, dil=7)
    best = None
    for p, bb in parts:
        w, h = bb[2] - bb[0], bb[3] - bb[1]
        if h / max(w, 1) > 1.5 or w / max(h, 1) > (1.3 if g in ('gummy_squad','jungle_adventure') else 2.6) or w < W * 0.07 or h < H * 0.12: continue
        if best is None or w * h > best[0]: best = (w * h, p)
    t = Image.open(best[1]).convert('RGBA'); bb = t.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox(); t = t.crop(bb)
    sc = min(2.0, 420 / t.height); t = t.resize((int(t.width * sc), int(t.height * sc)), Image.LANCZOS)
    t = t.filter(ImageFilter.UnsharpMask(radius=1.2, percent=70, threshold=2))
    t.save(f'assets/games/{g}/hero.webp', 'WEBP', quality=90, method=6); print(g, t.size)
