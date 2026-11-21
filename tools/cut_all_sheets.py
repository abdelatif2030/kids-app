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
    'B1_adam': ('adam', 4, 3, ['idle', 'run1', 'run2', 'run3', 'jump', 'peak', 'fall', 'land', 'hurt', 'cheer', 'slide', 'win'], False),
    'B3_hamster': ('hamster', 4, 3, ['run1', 'run2', 'run3', 'swing', 'hit', 'shield', 'jump', 'win', 'tired', 'power', 'sleep', 'throw'], False),
    'B4_tower': ('tower', 4, 3, ['hero', 'hero_attack', 'hero_hurt', 'hero_win', 'foe_slime', 'foe_goblin', 'foe_skeleton', 'foe_imp', 'foe_orc', 'boss_troll', 'boss_sorcerer', 'boss_dragon'], False),
    'B5_zombie': ('zombie', 4, 3, ['hero_shoot', 'hero_run', 'hero_win', 'z_normal', 'z_fat', 'z_cone', 'z_bucket', 'z_small', 'z_bandage', 'z_tutu', 'z_flower', 'z_yellow'], False),
    'B6_samurai': ('samurai', 4, 3, ['hero', 'ninja_blue', 'ninja_green', 'ninja_purple', 'oni', 'petals', 'star', 'x1', 'slash', 'dash', 'win', 'idle2'], False),
    'B7_animals': ('animals', 4, 3, ['fox', 'cubs', 'frog', 'frog_big', 'raptor', 'trex', 'fish', 'shark', 'octopus', 'turtle', 'x2', 'x3'], False),
    'C1_princess_poses': ('princess', 4, 3, ['pose_stand', 'pose_wave', 'pose_twirl', 'pose_curtsy', 'pose_clap', 'pose_jump', 'pose_surprise', 'pose_kiss', 'pose_sit', 'pose_hug', 'pose_sleep', 'pose_dance'], False),
    'C2_girls4': ('girls4', 4, 3, ['doll_light', 'doll_dark', 'doll_straight', 'doll_red', None, None, None, None, None, None, None, None], False),
    'C3_dresses1': ('dress1', 4, 3, ['dress_%02d' % i for i in range(1, 13)], False),
    'C4_dresses2': ('dress2', 4, 3, ['dress_%02d' % i for i in range(13, 25)], False),
    'C5_shoes': ('shoes', 4, 3, ['shoes_%02d' % i for i in range(1, 13)], False),
    'C6_crowns': ('crowns', 4, 3, ['crown_%02d' % i for i in range(1, 13)], False),
    'C11_baby': ('baby', 4, 3, ['happy', 'hungry', 'eating', 'bottle', 'muddy', 'bath', 'towel', 'brush', 'dressed', 'yawn', 'sleep', 'hug'], False),
    'C12_kitten': ('kitten', 4, 3, ['happy', 'hungry', 'eating', 'bottle', 'muddy', 'bath', 'towel', 'brush', 'dressed', 'yawn', 'sleep', 'hug'], False),
    'C13_bunny': ('bunny', 4, 3, ['happy', 'hungry', 'eating', 'bottle', 'muddy', 'bath', 'towel', 'brush', 'dressed', 'yawn', 'sleep', 'hug'], False),
    'C14_puppy': ('puppy', 4, 3, ['happy', 'hungry', 'eating', 'bottle', 'muddy', 'bath', 'towel', 'brush', 'dressed', 'yawn', 'sleep', 'hug'], False),
    'C15_care_items': ('care', 4, 3, ['item_%02d' % i for i in range(1, 13)], False),
    'C8_hair': ('hair', 4, 2, ['hair_%02d' % i for i in range(1, 9)], False),
    'C9_tools': ('tools', 4, 3, ['brush', 'comb', 'wand_pink', 'wand_blue', 'wand_yellow', 'wand_green', 'dryer', 'scissors', 'polish', 'mirror', 'spray', 'sponge'], False),
    'C10_bows': ('bows', 4, 3, ['bow_%02d' % i for i in range(1, 13)], False),
    'C16_baker': ('baker', 4, 3, ['baker_%02d' % i for i in range(1, 13)], False),
    'C17_cupcakes': ('cupcakes', 4, 3, ['cup_%02d' % i for i in range(1, 13)], False),
    'C18_toppings': ('toppings', 4, 3, ['top_%02d' % i for i in range(1, 13)], False),
    'C19_guests': ('guests', 4, 3, ['guest_%02d' % i for i in range(1, 13)], False),
    'C20_flowers1': ('flowers1', 4, 3, ['fl1_%02d' % i for i in range(1, 13)], False),
    'C21_flowers2': ('flowers2', 4, 3, ['fl2_%02d' % i for i in range(1, 13)], False),
    'C22_butterflies': ('butterflies', 4, 3, ['bf_%02d' % i for i in range(1, 13)], False),
    'C23_garden_items': ('gitems', 4, 3, ['gi_%02d' % i for i in range(1, 13)], False),
    'C24_fairy': ('fairy', 4, 3, ['fairy_%02d' % i for i in range(1, 13)], False),
}
only = sys.argv[1:] or list(SHEETS)
for sid in only:
    tag, cols, rows, names, ground = SHEETS[sid]
    sheet = Image.open(f'game_src/_chatgpt/{sid}.png').convert('RGB')
    W, H = sheet.size; cw, ch = W / cols, H / rows
    out = f'build/cut/{tag}'; os.makedirs(out, exist_ok=True)
    for i, n in enumerate(names):
        if not n: continue
        c, r = i % cols, i // cols
        cell = sheet.crop((int(c * cw), int(r * ch), int((c + 1) * cw), int((r + 1) * ch)))
        im = cut_white(cell, white=238, height=400)
        if ground: im = trim_ground(im)
        im = keep_main_rows(im)
        im.save(f'{out}/{n}.webp', 'WEBP', quality=88, method=6)
    print('done', sid, flush=True)
