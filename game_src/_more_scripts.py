import os
os.chdir('C:/dev/rehlaty')
p = 'tools/image_scripts_new.py'
s = open(p, encoding='utf8').read()
if 'Neon Card Battle' not in s:
    s += '''

game(51, 'معركة الكروت النيون', 'Neon Card Battle',
     "Premium 3D-rendered neon sci-fi mobile card-battle art, glowing hex arena in space, magenta cyan and violet neon, glossy chunky robots versus friendly alien slimes, no gore, kid friendly.",
     [('robot_units', 'sprite', 'Four cute chunky robot units (small scout, shield tank, blaster, hero mech) front 3/4 view with neon accents; transparent.'),
      ('alien_units', 'sprite', 'Alien Overlord army: green slime, buzzing bug, big purple brute, plus the Alien Overlord inside a glowing UFO; transparent.'),
      ('turret_base_ufo', 'sprite', 'A robot defense turret, the player robot base and the alien UFO base with damaged states; transparent.'),
      ('spell_effects', 'sprite', 'Spell effect sheets: Plasma Wave, Black Hole, Repair Field (cyan healing ring), laser bolts, explosion sparks.'),
      ('card_frames', 'ui', 'Eight glowing card frames with energy cost gems and rarity glows, plus a NEXT slot and an energy bar of 10 pips.'),
      ('arena_floor', 'scene', 'A glowing hexagon-tiled neon space platform seen in perspective, portrait 1080x1920, empty.'),
      ('ui_hud_results', 'ui', 'Timer pill, health bars, difficulty buttons (Easy, Normal, Hard), victory and defeat panels with three stars.'),
      ('card_neon_battle', 'scene', CARD)])

game(52, 'معركة حلبة الجليد', 'Ice Rink Brawl',
     "Charming 3D-rendered winter festival game art, snowy ice rink with a festive wooden border, soft blue and warm string-light colors, cute arctic animal heroes, no gore, kid friendly.",
     [('heroes_three', 'sprite', 'Three cute arctic heroes (penguin, fox, polar bear cub) in idle, sliding and special-attack poses; transparent.'),
      ('goblins_leader', 'sprite', 'Four small goblins (club, thrower, shield, scout) and a bigger goblin leader; idle, hurt, defeated star-puff; transparent.'),
      ('ice_props', 'sprite', 'Ice crystals of three sizes, snow piles, a frozen pool, wooden fence pieces, lantern strings; transparent.'),
      ('rink_scene', 'scene', 'A snowy ice rink seen from above at a winter festival with a cheering snowy crowd, empty, portrait 1080x1920.'),
      ('ui_turn_special', 'ui', 'Hero cards with HP bars, a special meter, YOUR TURN and GOBLIN MOVE banners, aiming arrow, victory panel with stars.'),
      ('card_ice_rink', 'scene', CARD)])

game(53, 'سكة الكورة (Nutmeg Rush)', 'Nutmeg Rush',
     "Premium 3D-rendered mobile football game art at night, floodlit stadium, vivid green striped grass, chunky cartoon players (no real clubs or players), flaming comet ball, kid friendly.",
     [('ball_skins', 'sprite', 'Six ball skins (classic, flame comet, galaxy, gold, neon, rainbow) with glow; transparent.'),
      ('defenders_red', 'sprite', 'Chunky cartoon defenders in red kits: idle, chasing, slide-tackle, tumbled; transparent.'),
      ('teammate_blue', 'sprite', 'The light-blue teammate for one-two passes: idle, pass, celebrate; transparent.'),
      ('keeper_goal', 'sprite', 'A cartoon goalkeeper diving left, right and center; a goal with a net ripple; transparent.'),
      ('stadium_scene', 'scene', 'A floodlit night stadium with crowd stands, light beams and striped pitch viewed from behind the ball, portrait 1080x1920.'),
      ('ui_hud_shoot', 'ui', 'Heat meter, sliding shoot target bar, level badge, TRICK text popups (THROUGH THE LEGS, ONE-TWO), stars and coins panels, ball shop cards.'),
      ('card_nutmeg_rush', 'scene', CARD)])

game(54, 'فرقة الدببة الجيلي', 'Gummy Squad',
     "Cosy plasticine candy-land 3D art, soft clay-like materials with fingerprints, soft night palette, adorable gummy bears and sweets, kid friendly.",
     [('bears_three', 'sprite', 'Three gummy bears in plasticine style: Strawberry with a candy-cane sword, Lime with a magic lollipop staff, Blueberry with a gumball blaster; idle, attack, melted-and-revived; transparent.'),
      ('gumdrop_enemies', 'sprite', 'Sour gumdrop enemies of four kinds (round, spiky, shooter, sneaky) in angry-cute faces; transparent.'),
      ('king_donut', 'sprite', 'King Donut boss with a glaze crown: idle, rolling charge, glaze rain, crumbs; transparent.'),
      ('pickups_super', 'sprite', 'Candies, healing mints, a giant jawbreaker super drop and the SUPER button; transparent.'),
      ('candyland_night', 'scene', 'A soft night candy-land arena with lollipop trees and gumdrop hills in plasticine style, no characters, 1920x1080 and 1080x1920.'),
      ('ui_hud', 'ui', 'Three bear portraits with HP, a charging SUPER button, candy counter, win panel with three stars.'),
      ('card_gummy_squad', 'scene', CARD)])

game(55, 'ديناصور صغير يكبر', 'Dino Grow',
     "Polished 3D-rendered prehistoric adventure art, lush jungle, bubbling swamp, glowing volcano valley, chunky cartoon dinosaurs, bright saturated colors, kid friendly, no gore.",
     [('dino_evolutions', 'sprite', 'Four evolution stages of one dinosaur (baby raptor, raptor, big predator, giant) in idle, walking, stomping and chomping poses; transparent.'),
      ('prey_small', 'sprite', 'Bugs, eggs, small lizards and mid-size herbivores with simple cute faces; transparent.'),
      ('boss_giant', 'sprite', 'A giant volcano boss dinosaur with fire breath and stomp poses; transparent.'),
      ('env_jungle_swamp_volcano', 'scene', 'Three top-down 3/4 environment tiles sets: jungle, swamp, volcano valley, plus foliage and rocks props.'),
      ('ui_power_numbers', 'ui', 'Green and red power-number badges, evolution progress bar, LEVEL COMPLETE panel with three stars, pounce button.'),
      ('card_dino_grow', 'scene', CARD)])

game(56, 'فرسان البرميل', 'Barrel Knights',
     "Cheerful 3D-rendered medieval tournament game art, sand arena with wooden fences and banners, chunky cartoon knights in two team colors, a giant wooden barrel, kid friendly, no gore.",
     [('knights_teams', 'sprite', 'Chunky knights in blue and red teams: idle, running, dash, stunned with stars; transparent.'),
      ('giant_barrel', 'sprite', 'A giant wooden barrel with iron bands rolling, three frames; transparent.'),
      ('hazards', 'sprite', 'Trapdoors (closed and open), mud patches, a rolling boulder with a warning lane; transparent.'),
      ('arena_scene', 'scene', 'A medieval tournament arena with gates at both ends, crowd, banners and a castle backdrop, high angle, 1080x1920.'),
      ('ui_scoreboard', 'ui', 'Scoreboard 0-0 with timer, DASH button, goal celebration banner, rounds map.'),
      ('card_barrel_knights', 'scene', CARD)])

game(57, 'حلاوة ولا مقلب', 'Trick or Treat Crowd',
     "Hand-painted toy-like cosy Halloween neighborhood art at night, warm porch lights, pumpkins, falling leaves, friendly cut-paper UI, all characters original and friendly (not scary), kid friendly.",
     [('kids_costumes', 'sprite', 'A pack of trick-or-treating kids in homemade costumes: sheet ghost, witch, cardboard robot, pumpkin suit; running, jumping; transparent.'),
      ('porches', 'sprite', 'A friendly porch with a doorbell and glowing lamp, and a grumpy porch with a frowning pumpkin; transparent.'),
      ('hazards_street', 'sprite', 'Leaf pit, sprinkler, a dog, a rolling jack-o-lantern, a hedge; transparent.'),
      ('giant_spider', 'sprite', 'A giant inflatable spider lawn decoration boss (silly, friendly); transparent.'),
      ('street_parallax', 'scene', 'A night neighborhood street in parallax layers: sky with moon, far houses, porches, fence, ground with leaves; landscape 1920x1080.'),
      ('ui_cutpaper', 'ui', 'Cut-paper buttons and panels, candy counter, crowd counter, level cards.'),
      ('card_trick_or_treat', 'scene', CARD)])

game(58, 'جيش المعبد', 'Temple Army',
     "Epic-but-cute 3D-rendered ancient jungle temple art, mossy stone corridors, torches, glowing gates, tiny cartoon warriors in large crowds, no gore, kid friendly.",
     [('captain_warriors', 'sprite', 'A tiny warrior captain with a plume and a crowd of tiny warriors in blue; running; transparent.'),
      ('enemies_red', 'sprite', 'Red enemy horde warriors, a huge brute guard and a giant stone golem (idle, stomp, crumble); transparent.'),
      ('gates_traps', 'sprite', 'Glowing multiplier gates (x2, x3, +20, negative), spike traps, a lever, a spinning saw, a prisoner cage; transparent.'),
      ('temple_corridors', 'scene', 'A mossy stone temple maze with torches and vines viewed from a high angle, tiles sets for corridors, forks and the arena, 1080x1920.'),
      ('ui_hud', 'ui', 'Army counter, level badge, minimap frame, victory panel with stars, shop cards.'),
      ('card_temple_army', 'scene', CARD)])

game(59, 'طبق الحلويات', 'Sweet Tray',
     "Pastel bakery triple-match puzzle art, glossy cute sweets, cream pink and mint palette, lace doilies, wooden table, kid friendly.",
     [('sweets_twelve', 'sprite', 'Twelve glossy cute sweets (donut, cupcake, macaron, cookie, cake slice, candy, cherry tart, ice cream, lollipop, pretzel, muffin, strawberry); transparent.'),
      ('plate_tray', 'sprite', 'A big doily plate and a seven-slot wooden tray, empty and nearly full; transparent.'),
      ('bakery_scene', 'scene', 'A pastel bakery counter background with shelves and string lights, portrait 1080x1920.'),
      ('ui_combo_bonus', 'ui', 'LEVEL header, star score pill, COMBO x2/x3 text, bonus wand meter, helper buttons (undo, shuffle, extra slot), OUT OF SPACE panel, level map.'),
      ('card_sweet_tray', 'scene', CARD)])

game(60, 'اسحب الدبوس', 'Pull the Pin (puzzle)',
     "Glossy candy-colored 3D-rendered physics puzzle art, pastel mint background, gumballs, golden pins, kid friendly.",
     [('balls_pins', 'sprite', 'Glossy candy balls in six colors and grey gumballs, golden pins with handles; transparent.'),
      ('jars_shelves', 'sprite', 'A glass jar with fill markers, wooden shelves, a lava chute and a trash chute; transparent.'),
      ('puzzle_bg', 'scene', 'A mint-and-pink striped background with candy sprinkles, portrait 1080x1920.'),
      ('ui_buttons', 'ui', 'Undo, restart and hint (lightbulb) round buttons, level badge, coin pill, tutorial hand pointer.'),
      ('card_pull_pin', 'scene', CARD)])
'''
    open(p, 'w', encoding='utf8').write(s)
print('ok')
