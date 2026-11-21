# Cuts one poster (16:9 webp, 1280x720) per fun game from the generated scene pictures in game_src/_generated_images.
# The poster is shown full screen while the game loads (lib/games/web_games/web_game_screen.dart). Games that have no picture keep no poster.
import glob, os, re
from PIL import Image
os.chdir('C:/dev/rehlaty')
FOLDER = {'01_moto_race': 'moto_race', '02_glowfair_rally': 'carnival_race', '03_jungle_adventure': 'jungle_adventure', '04_happy_farm': 'happy_farm',
          '05_pumpkin_pie_maker': 'pumpkin_pie', '06_samurai_action': 'samurai', '07_golden_tail_chase': 'golden_tail', '08_ocean_defense': 'ocean_defense',
          '09_rhythm_survival': 'rhythm', '10_splash_race': 'splash_race', '11_space_store': 'space_store', '12_fox_family_rescue': 'fox_family',
          '13_air_race': 'air_race', '14_zombie_rooftop': 'zombie_rooftop', '15_gum_ball_roll': 'gum_ball', '16_deep_sea_fish': 'deep_sea',
          '17_coastal_drive': 'coastal_drive', '18_hungry_frog': 'hungry_frog', '19_frost_coil': 'frost_coil', '20_summit_rush': 'summit_rush',
          '21_hero_tower': 'hero_tower', '22_cloud_dash': 'cloud_dash', '24_sky_capy': 'sky_capy', '25_marble_dozer': 'marble_dozer',
          '26_dune_titans': 'dune_titans', '27_castaway_raft': 'castaway_raft', '28_winter_camp': 'winter_camp', '29_rain_circuit': 'rain_circuit',
          '30_squad_shooter': 'squad_shooter', '31_archer_bridge': 'archer_bridge', '32_alien_sky_race': 'alien_sky', '33_summit_race': 'rhino_summit',
          '34_sunset_highway': 'sunset_highway', '35_ai_creator': 'creator_tycoon', '36_pearl_divers': 'pearl_divers', '37_honey_farm': 'honey_farm',
          '38_ice_dragon_maze': 'ice_dragon', '39_hot_spring_village': 'hot_spring', '40_mars_farm_colony': 'mars_farm'}
PRIORITY = [r'scene', r'backdrop', r'level.*_1\b|level_.*(reef|marsh|dawn)', r'course_(lagoon|rounds_1)', r'world_', r'treetop_level_1', r'corridor_1', r'courtyard_stage_1',
            r'stage_backdrops_1', r'rooftop_scenes_1', r'farm_scenes_1', r'depth_', r'ground', r'station_interior', r'highway', r'track', r'road_night', r'office_six', r'spring_mill', r'skyline', r'level1_.*_bg', r'tower_room_castle', r'arena_floor']
n = 0
for src, game in FOLDER.items():
    if not os.path.isdir(f'assets/games/{game}'): print('no game dir', game); continue
    files = sorted(glob.glob(f'game_src/_generated_images/{src}/*.jpg') + glob.glob(f'game_src/_generated_images/{src}/*.png'))
    pick = None
    for pat in PRIORITY:
        for f in files:
            if re.search(pat, os.path.basename(f)) and 'card_' not in f: pick = f; break
        if pick: break
    if not pick: print('no scene for', game); continue
    im = Image.open(pick).convert('RGB'); w, h = im.size
    th = int(w * 9 / 16); top = int((h - th) * 0.5)
    im = im.crop((0, top, w, top + th)).resize((1280, 720), Image.LANCZOS)
    im.save(f'assets/games/{game}/poster.webp', 'WEBP', quality=78)
    n += 1; print(game, os.path.basename(pick), os.path.getsize(f'assets/games/{game}/poster.webp') // 1024, 'KB')
print(n, 'posters')
