import os, glob
from PIL import Image
os.chdir('C:/dev/rehlaty')
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad\ht_check.png'
files = sorted(glob.glob('assets/games/hero_tower/art/*.webp'))
print(files)
w = 230
cols = 6
rows = (len(files) + cols - 1) // cols
S = Image.new('RGB', (w * cols, 230 * rows), (200, 60, 200))
for i, f in enumerate(files):
    im = Image.open(f).convert('RGBA')
    im.thumbnail((w - 8, 222))
    S.paste(im, ((i % cols) * w + 4, (i // cols) * 230 + 4), im)
S.save(OUT)
