import os, re
os.chdir('C:/dev/rehlaty')
p = 'tools/image_scripts_new.py'
s = open(p, encoding='utf8').read()
s = s.replace(' (لسه ما اتبنتش)', '')
s = s.replace("'ماريو (لعبة منصات كلاسيكية)'", "'عالم القفز (منصات كلاسيكية)'")
s = s.replace("'ماريو (لعبة منصات كلاسيكية) (لسه ما اتبنتش)'", "'عالم القفز (منصات كلاسيكية)'")
s = s.replace("'النطاط (Doodle-style)'", "'النطاط (قفز لا نهائي)'")
if 'Gemlode Quarry' not in s:
    s += '''

game(61, 'محجر الجواهر', 'Gemlode Quarry',
     "Casual 3D-rendered isometric idle-logistics art, sandy hill quarry with glowing purple crystals, wooden crates, chunky yellow trucks, warm sunny colors, kid friendly.",
     [('crystal_mine', 'sprite', 'A sandy mine entrance with glowing purple gem crystals and little diggers; transparent.'),
      ('crates_tower', 'sprite', 'Wooden crates of purple gems: single, stacked tower, overflowing pile with a red warning mark; transparent.'),
      ('trucks_road', 'sprite', 'A chunky yellow truck loaded with crates (3 angles), a winding sandy road piece and a depot with a loading pad; transparent.'),
      ('upgrade_pads', 'sprite', 'Glowing upgrade pads with price tags (diggers, trucks, bigger pile, polish shop, second mine); transparent.'),
      ('quarry_scene', 'scene', 'An isometric sandy hill quarry landscape, empty, portrait 1080x1920.'),
      ('ui_overflow', 'ui', 'OVERFLOW banner, crates shipped counter 60/100, coin pill, level map cards with stars.'),
      ('card_gem_quarry', 'scene', CARD)])

game(62, 'طيار السحاب', 'Sky Ace',
     "Casual 2.5D vertical shooter art, pastel cloud sky with floating islands, glossy cartoon propeller planes with goggled pilots, kid friendly, no gore.",
     [('player_plane', 'sprite', 'A cute propeller plane with a goggled pilot: straight, banking left, banking right, shield bubble, five color skins; transparent.'),
      ('enemy_planes', 'sprite', 'Red and black cartoon enemy planes, UFO drones and bombers, plus puff-and-parachute defeat frames; transparent.'),
      ('bosses_three', 'sprite', 'A giant blimp boss, a UFO boss and a flying fortress boss with damage states; transparent.'),
      ('powerups', 'sprite', 'Double shot, shield, magnet, bomb, X2 multiplier, health pack, coin; transparent.'),
      ('sky_stages', 'scene', 'Eight pastel sky backgrounds with parallax clouds and floating islands, portrait 1080x1920.'),
      ('ui_hud', 'ui', 'Health bar with percentage, score, bomb button with cooldown ring, hangar upgrade cards, tutorial hand.'),
      ('card_sky_ace', 'scene', CARD)])

game(63, 'لغز المقبرة', 'Tomb Puzzle',
     "Warm torch-lit Egyptian tomb 3D-rendered puzzle art, hieroglyph walls, red lotus carpet, golden sun-disc plates, a small explorer with a hat, kid friendly, not scary.",
     [('explorer_poses', 'sprite', 'A small explorer with a hat holding a torch: idle, walking in four directions, pushing, falling, cheering; transparent.'),
      ('tomb_objects', 'sprite', 'Pushable stone block, golden sun-disc pressure plate (up and pressed), doors A-D, golden ankh key, braziers (lit and unlit), crumbling tile; transparent.'),
      ('tomb_tiles', 'scene', 'Three tomb tile sets (sand, golden, moonlit) with hieroglyph walls and a red lotus carpet, top 3/4 view.'),
      ('ui_hints', 'ui', 'Ankh counter n/8, hint banner, undo, reset, lightbulb hint buttons, level cards with keys and stars.'),
      ('card_tomb_puzzle', 'scene', CARD)])
'''
open(p, 'w', encoding='utf8').write(s)
# which games of the app have no script entry? list kWebGames ids against titles in the generated file
print('ok')
