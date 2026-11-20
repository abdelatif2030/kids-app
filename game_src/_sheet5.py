import os
from PIL import Image
os.chdir('C:/dev/rehlaty')
OUT = r'C:\Users\lenovo\AppData\Local\Temp\claude\4c420e6dc8bebc42\d15d89a8-4495-416f-ab2d-a88b962dd6c0\scratchpad\ht2.png'
S = Image.new('RGB', (900, 260), (200, 60, 200))
a = Image.open('assets/games/hero_tower/art/sky_ice.webp').convert('RGB'); a.thumbnail((600, 250)); S.paste(a, (4, 4))
b = Image.open('assets/games/hero_tower/art/foe_imp.webp').convert('RGBA'); b.thumbnail((250, 250)); S.paste(b, (640, 4), b)
S.save(OUT)
