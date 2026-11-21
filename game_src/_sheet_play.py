import sys, os, glob
from PIL import Image, ImageDraw
d = sys.argv[1]; games = sys.argv[2].split(','); out = sys.argv[3]
w, h = 400, 195
S = Image.new('RGB', (3*w, len(games)*(h+14)), (30,20,60)); dr = ImageDraw.Draw(S)
for i, g in enumerate(games):
    for j, t in enumerate(['1after1', '2play', '3later']):
        f = f'{d}/{g}_{t}.png'
        if os.path.exists(f):
            im = Image.open(f).convert('RGB'); im.thumbnail((w, h)); S.paste(im, (j*w, i*(h+14)+14))
    dr.text((3, i*(h+14)+1), g, fill=(255,255,120))
S.save(out)
