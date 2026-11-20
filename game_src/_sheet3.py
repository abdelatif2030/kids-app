import os, glob
from PIL import Image
os.chdir('C:/dev/rehlaty')
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad\art_check.png'
files = sorted(glob.glob('assets/games/sky_jumper/art/*.webp') + glob.glob('assets/games/sky_capy/art/*.webp') + glob.glob('assets/games/jungle_adventure/art/*.webp') + glob.glob('assets/games/trick_or_treat/art/*.webp'))
print(files)
w = 220
S = Image.new('RGB', (w * min(6, max(1, len(files))), 220 * ((len(files) + 5) // 6 or 1)), (200, 60, 200))
for i, f in enumerate(files):
    im = Image.open(f).convert('RGBA')
    im.thumbnail((w - 8, 212))
    S.paste(im, ((i % 6) * w + 4, (i // 6) * 220 + 4), im)
S.save(OUT)
