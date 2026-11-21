# Cuts every sheet of game_src/_chatgpt that has a name list below into build/cut/<id>/<name>.webp (transparent). Run in the background (PIL flood fill is slow).
import os, sys
sys.path.insert(0, 'tools')
from PIL import Image
from cut_sprite import cut_white, trim_ground, keep_main_rows

SHEETS = {
    'A2_highway_cars': ('highway', 4, 3, ['car_blue', 'car_red', 'car_pink', 'car_orange', 'car_black', 'car_taxi', 'car_van', 'car_truck', 'car_bus', 'car_sedan_blue', 'car_sedan_green', 'car_police'], True),
    'A3_moto': ('moto', 4, 3, ['bike_c', 'bike_l', 'bike_r', 'bike_crash', 'bike_rival1', 'bike_rival2', 'bike_rival3', 'bike_rival4', 'bike_rival5', 'bike_nitro', 'helmet_red', 'helmet_blue'], False),
    'A4_rain_cars': ('rain', 4, 3, ['car_%02d' % i for i in range(1, 13)], True),
    'A5_dune_trucks': ('dune', 4, 3, ['truck_%02d' % i for i in range(1, 13)], True),
    'A6_bumper': ('bumper', 4, 3, ['bumper_bear', 'bumper_bunny', 'bumper_cat', 'bumper_dog', 'bumper_fox', 'bumper_monkey', 'bumper_panda', 'bumper_tiger', 'bumper_pig', 'bumper_mouse', 'bumper_lion', 'bumper_penguin'], True),
    'A7_planes': ('planes', 4, 3, ['plane_%02d' % i for i in range(1, 13)], True),
}
only = sys.argv[1:] or list(SHEETS)
for sid in only:
    tag, cols, rows, names, ground = SHEETS[sid]
    sheet = Image.open(f'game_src/_chatgpt/{sid}.png').convert('RGB')
    W, H = sheet.size; cw, ch = W / cols, H / rows
    out = f'build/cut/{tag}'; os.makedirs(out, exist_ok=True)
    for i, n in enumerate(names):
        c, r = i % cols, i // cols
        cell = sheet.crop((int(c * cw), int(r * ch), int((c + 1) * cw), int((r + 1) * ch)))
        im = cut_white(cell, white=238, height=400)
        if ground: im = trim_ground(im)
        im = keep_main_rows(im)
        im.save(f'{out}/{n}.webp', 'WEBP', quality=88, method=6)
    print('done', sid, flush=True)
