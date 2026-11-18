# -*- coding: utf-8 -*-
# Builds docs/ALL_GAMES_IMAGE_SCRIPTS.md: every picture script for every game (numbered, counted per game and in total).
# Run: python tools/make_image_scripts.py   (the data below is the single source; edit it and run again)
import io

SPRITE = "Single subject, centered, full object visible, transparent background, no text, 1024x1024."
SCENE = "Wide scene, no characters, no text, no UI, 1920x1080 landscape, soft depth of field in the far background."
UI = "Clean game UI element, glossy, rounded, transparent background, no text unless the label is quoted, 512x512."
CARD = "Game card picture for a menu: eye-catching key art of the game's hero in action over its main setting, rich colors, 1536x1229 (4:5 ratio), no text."

GAMES = []


def game(num, ar, en, style, items):
    GAMES.append((num, ar, en, style, items))


# ---------------------------------------------------------------------------------------------------------------- fun games
game(1, 'سباق الدراجات النارية', 'Moto Race',
     "Bright 3D-rendered mobile racing game art, glossy cartoon, saturated sunny colors, soft rim light, kid friendly, coastal summer circuit.",
     [('rider_player', 'sprite', 'A cheerful cartoon kid motorcycle racer in a red-white racing suit and full helmet with a clear visor, leaning forward on a red sport bike, 3/4 rear view.'),
      ('rider_rival_1..5', 'sprite', 'Five different rival riders on sport bikes (blue, green, yellow, purple, orange), each with a different cute animal-themed helmet (fox, bear, rabbit, panda, cat), 3/4 rear view; give each its own file.'),
      ('bike_lean_left_right', 'sprite', 'The red sport bike leaning hard into a left turn and into a right turn with the rider, two files.'),
      ('bike_crash_recover', 'sprite', 'The rider sliding off the bike with comic stars around, no injury, then back on foot picking up the bike, two files.'),
      ('nitro_flame', 'ui', 'A bright blue-orange nitro exhaust flame, side view.'),
      ('track_coastal_scene', 'scene', 'A sunny coastal circuit: curved asphalt road, palm trees, turquoise sea, mountains, spectator stands with cheering crowd, start gate.'),
      ('track_straight_curve_tiles', 'scene', 'A seamless asphalt road texture sheet: straight, left curve, right curve, with red-white curbs and a dashed center line, top view.'),
      ('prop_stands_gate_arch', 'sprite', 'Spectator stands, a checkered start gate and a finish arch, three files.'),
      ('prop_barriers_signs', 'sprite', 'Red-white tire barriers, curve warning signs and speed signs, one sheet.'),
      ('ui_speed_nitro_lap', 'ui', 'A speedometer dial, a round nitro button and a lap counter badge (no numbers).'),
      ('card_moto_race', 'scene', CARD)])

game(2, 'سباق ملاهي الأبطال', 'Glowfair Rally',
     "Magical 3D carnival at sunset, glowing bumper cars, neon fairy lights, glossy toy-like cartoon style, warm orange and purple sky, kid friendly.",
     [('car_player', 'sprite', 'A round glowing bumper car in bright orange with a cute bear driver, 3/4 front view.'),
      ('car_rivals_1..6', 'sprite', 'Six different animal drivers in glowing bumper cars (bunny pink, fox red, cat blue, panda white, frog green, lion yellow), one file each.'),
      ('ride_teacups', 'sprite', 'A giant spinning teacup ride with pastel cups, lights.'),
      ('ride_carousel', 'sprite', 'A carousel with animal seats and glowing canopy.'),
      ('ride_ferris_wheel', 'sprite', 'A glowing Ferris wheel with colorful gondolas.'),
      ('ride_coaster_loop', 'sprite', 'A small roller-coaster loop with a cart.'),
      ('prop_ticket_booth_balloons', 'sprite', 'A striped ticket booth, bunches of balloons and a cotton candy stand, three files.'),
      ('arena_floor_tile', 'scene', 'A bumper-car arena floor with glowing lines and shiny metal ceiling lights, top view, seamless.'),
      ('carnival_sky_skyline', 'scene', 'A sunset carnival skyline with rides and fireworks, no characters.'),
      ('garage_upgrade_icons', 'ui', 'Six upgrade icons: turbo engine, shield bumper, magnet, bigger wheels, glow paint, rocket horn.'),
      ('ticket_coin', 'ui', 'A golden carnival ticket and a star coin.'),
      ('card_glowfair_rally', 'scene', CARD)])

game(3, 'مغامرة الأدغال', 'Jungle Adventure',
     "Bright cel-shaded 2D platformer art, bold dark outlines, painted lush jungle and ancient mossy ruins, warm sunset light, kid friendly.",
     [('hero_adam', 'sprite', 'A young explorer boy Adam with a safari hat, backpack and green shirt, running pose, side view; plus jump, wall-slide, stomp and win poses (five files).'),
      ('hero_nour', 'sprite', 'A young explorer girl Nour with a ponytail, safari hat, backpack and teal shirt, running, jump, wall-slide, stomp, win (five files).'),
      ('shop_outfits', 'ui', 'Six explorer outfits as icons: pith helmet, golden cape, jungle boots, scarf, goggles, crown.'),
      ('enemy_beetle', 'sprite', 'A cute shiny blue beetle walking, side view (can be stomped), two frames.'),
      ('enemy_bat', 'sprite', 'A cute purple bat flying, wings up and down, two frames.'),
      ('hazard_spikes_pit', 'sprite', 'Wooden spikes and a dark pit edge with hanging vines, two files.'),
      ('relic_jade', 'sprite', 'A glowing jade relic idol collectible, and a golden coin, two files.'),
      ('powerups_four', 'ui', 'Four power-up icons: shield bubble, coin magnet, jump boots, hourglass.'),
      ('goal_totem_altar', 'sprite', 'A carved stone totem goal post, and the glowing sun altar at the end of the last level, two files.'),
      ('level1_jungle_trail_bg', 'scene', 'Parallax layers (sky, far trees, mid trees, foreground vines) of a Jungle Trail, as separate layer files.'),
      ('level2_sunken_ruins_bg', 'scene', 'Parallax layers of Sunken Ruins: flooded temple, stone pillars, hanging roots, light shafts.'),
      ('level3_sun_temple_bg', 'scene', 'Parallax layers of the Sun Temple at golden hour with huge sun carvings.'),
      ('tiles_mossy_stone', 'sprite', 'A seamless tile set of mossy grey-green temple stone: floor, wall, ledge, pillar.'),
      ('victory_glass_panel', 'ui', 'A frosted dark glass victory panel with a gold star row frame.'),
      ('card_jungle_adventure', 'scene', CARD)])

game(4, 'مزرعتي السعيدة', 'Happy Farm',
     "Relaxing 3D low-poly-meets-glossy cartoon farm, warm golden light, soft shadows, saturated friendly colors, kid friendly.",
     [('combine_harvester_levels', 'sprite', 'A little red combine harvester with a cheerful cutter, three upgrade versions (small, medium, big golden), three files.'),
      ('trailer_tractor', 'sprite', 'A green tractor with a trailer full of golden grain.'),
      ('barn_silo_grate', 'sprite', 'A red barn with a hay loft, a silo and a metal unloading grate, three files.'),
      ('crop_wheat_corn_sunflower', 'scene', 'Three field close-ups: golden wheat, tall corn, sunflowers, each with cut stubble variant (six tiles).'),
      ('animals_herd', 'sprite', 'Cute farm animals: cow, sheep, pig, chicken, goat, horse; one file each (six).'),
      ('pens_fences_rocks', 'sprite', 'A wooden animal pen, fences and big rocks with grass, three files.'),
      ('tool_shed_upgrades', 'ui', 'A tool shed and icons for a bigger cutter, a faster tractor, a bigger trailer, a magnet and a coin boost.'),
      ('hay_bale_flour', 'sprite', 'A round hay bale, a stack of flour sacks and a coin sparkle, three files.'),
      ('farm_scenes_1..8', 'scene', 'Eight different farm backdrops: spring meadow, windmill farm, orchard farm, river farm, hill farm, autumn farm, snowy farm, sunset farm.'),
      ('card_happy_farm', 'scene', CARD)])

game(5, 'مخبز اليقطين', 'Pumpkin Pie Maker',
     "Cozy autumn 3D cartoon bakery farm, warm orange and cream palette, soft glowing light, rounded toy-like shapes, kid friendly.",
     [('baker_player', 'sprite', 'A cheerful little baker kid with a chef hat and an orange apron carrying a pumpkin, idle, walk and carry poses (three files).'),
      ('pumpkin_stages', 'sprite', 'A pumpkin growing: seed, sprout, small, ripe; and a harvested pumpkin, five files.'),
      ('oven_pie', 'sprite', 'A big stone oven with glowing fire and baked pumpkin pies on a tray, two files.'),
      ('counter_shop', 'sprite', 'A striped awning counter with a cash register and pie display.'),
      ('customers_animals', 'sprite', 'Six animal customers waiting politely: bear, rabbit, fox, raccoon, owl, deer, one file each.'),
      ('helper_robot', 'sprite', 'A small friendly pumpkin-orange helper robot carrying a crate.'),
      ('pad_expansion_icons', 'ui', 'Ten glowing expansion pad icons: new field, oven, counter, chute, helper, sign, fence, flowers, lamp, truck.'),
      ('pumpkin_chute', 'sprite', 'A wooden chute sliding pumpkins into a basket.'),
      ('farm_cafe_scene', 'scene', 'An autumn pumpkin field with a bakery cafe, fall trees and bunting.'),
      ('card_pumpkin_pie', 'scene', CARD)])

game(6, 'سيف الساموراي', 'Samurai Action',
     "Stylized 3D-cartoon samurai action, cherry-blossom courtyard, cel shading, vivid pink and red palette, kid friendly, no blood.",
     [('samurai_hero', 'sprite', 'A cute young samurai kid with a topknot, red-white armor and a glowing katana: idle, slash, dash, hit, victory poses (five files).'),
      ('ninja_types', 'sprite', 'Four ninja enemies: basic black ninja, fast green ninja, shield ninja, bomb-throwing ninja; one file each, facing left.'),
      ('oni_boss', 'sprite', 'A giant friendly-scary red oni with a spiked club, horns and a funny grumpy face, standing and swinging poses (two files).'),
      ('effects_slash_dash', 'ui', 'A glowing slash arc, a dash trail and a slow-motion finishing cut flash, three files.'),
      ('petals_leaves', 'ui', 'Cherry-blossom petals, falling leaves and a soft puff when ninjas vanish, three files.'),
      ('courtyard_stage_1..3', 'scene', 'Three cherry-blossom courtyard stages: day, sunset, moonlit night, with a wooden temple gate and stone lanterns.'),
      ('combo_badge', 'ui', 'A combo counter badge with a katana icon.'),
      ('card_samurai', 'scene', CARD)])

game(7, 'مغامرة الذيل الذهبي', 'Golden Tail Chase',
     "Cute plush-toy 3D cartoon playground in the treetops, soft felt textures, warm daylight, rope bridges and wooden slides, kid friendly.",
     [('dino_player', 'sprite', 'A plush green dinosaur with a red bandana, big friendly eyes, running, jumping, carrying the golden tail (three files).'),
      ('tail_holder_animal', 'sprite', 'A plush monkey carrying a shiny golden tail, running away, looking back.'),
      ('rivals_plush', 'sprite', 'Five plush rivals: fox, bunny, bear cub, raccoon, tiger; one file each.'),
      ('golden_tail', 'sprite', 'A glowing golden tail item with sparkles.'),
      ('props_bridge_slide_mushroom', 'sprite', 'A rope bridge, a wooden slide, a bouncy mushroom and a tree-house platform, four files.'),
      ('treetop_level_1..6', 'scene', 'Six treetop playground backdrops: spring, summer, autumn, snow, sunset, night lanterns.'),
      ('countdown_clock', 'ui', 'A round countdown clock with a golden tail icon.'),
      ('card_golden_tail', 'scene', CARD)])

game(8, 'دفاع القلعة البحرية', 'Ocean Defense',
     "Colorful underwater 3D cartoon, coral reef corridor, glowing bubbles, rich turquoise and coral colors, kid friendly.",
     [('hero_clownfish', 'sprite', 'A brave little crowned clownfish with a tiny golden crown, aiming pose and happy pose (two files).'),
      ('fortress_coral_wall', 'sprite', 'A coral fortress wall with shells and sea-glass towers, healthy and damaged versions (two files).'),
      ('enemies_fish', 'sprite', 'Five hostile fish: spiky pufferfish, angry piranha, grumpy swordfish, electric eel, crab; plus a jellyfish; one file each (six).'),
      ('boss_octopus', 'sprite', 'A giant purple octopus boss with a funny grumpy face and eight arms.'),
      ('powers_icons', 'ui', 'Power icons: repair hammer, spinning shell, whirlpool, more bubbles, faster bubbles.'),
      ('bubble_stream', 'ui', 'A glowing stream of bubbles projectile and an impact pop.'),
      ('reef_corridor_1..5', 'scene', 'Five reef corridor backdrops: shallow reef, kelp, shipwreck, ice reef, deep volcano vents.'),
      ('shop_reef', 'ui', 'A reef shop panel frame with a pearl currency icon.'),
      ('card_ocean_defense', 'scene', CARD)])

game(9, 'البقاء على الإيقاع', 'Rhythm Survival',
     "Playful 3D cartoon disco stage, giant vinyl record, neon pink-purple-teal lights, soft plush characters, kid friendly.",
     [('plush_animals', 'sprite', 'Four plush animal dancers: panda, bunny, penguin, cat, standing, jumping, ducking (three poses each, twelve files).'),
      ('record_vinyl', 'sprite', 'A giant glossy vinyl record top view with a bright center label and grooves.'),
      ('tonearm', 'sprite', 'A big sweeping tonearm with a needle.'),
      ('bars_gaps', 'sprite', 'A low bar to jump over and a high bar to duck under, glowing, two files.'),
      ('stage_backdrops_1..3', 'scene', 'Three disco stage backdrops: pink neon, teal ocean, golden sunset, with speakers and spotlights.'),
      ('beat_ui', 'ui', 'A beat ring indicator and heart icons.'),
      ('card_rhythm', 'scene', CARD)])

game(10, 'سباق السباحة العجيب', 'Splash Race',
     "Tropical 3D cartoon water park obstacle course, bright turquoise water, sunny sky, glossy toy-like props, kid friendly.",
     [('otter_player', 'sprite', 'A cute otter with swim goggles: swimming stroke, diving, leaping, riding a wave (four files).'),
      ('rivals_swimmers', 'sprite', 'Five rival swimmers: duck, frog, seal, penguin, beaver, with colorful swim caps; one file each.'),
      ('props_bumpers_noodles', 'sprite', 'Round bumpers, sweeping pool noodles, floating rings and barriers, four files.'),
      ('slide_shortcut', 'sprite', 'A big curvy water slide shortcut, and a wave ramp, two files.'),
      ('course_rounds_1..4', 'scene', 'Four course backdrops: lagoon, jungle river, waterfall canyon, final stadium pool.'),
      ('breath_bar', 'ui', 'A breath bubble gauge and a stroke-timing ring.'),
      ('medals', 'ui', 'Gold, silver and bronze medals.'),
      ('card_splash_race', 'scene', CARD)])

game(11, 'متجر الفضاء الذكي', 'Space Store',
     "Cute 3D cartoon sci-fi grocery on a space station, soft glowing lights, pastel planets, rounded friendly shapes, kid friendly.",
     [('shopkeeper', 'sprite', 'A friendly kid shopkeeper in a white space suit with a store badge, idle, carrying baskets, serving (three files).'),
      ('customers', 'sprite', 'Six customers: astronaut, green alien, blue alien, robot, space cat, little martian; one file each.'),
      ('robot_cashier', 'sprite', 'A cute robot cashier at a glowing checkout.'),
      ('basket_rack_shelves', 'sprite', 'A floating shopping basket, an entrance basket rack and shelves with space snacks, three files.'),
      ('star_coin', 'ui', 'A star coin pile.'),
      ('hyper_checkout', 'sprite', 'A big glowing hyper checkout gate.'),
      ('station_interior_scene', 'scene', 'A bright space-station store interior with large windows showing planets and stars.'),
      ('expansion_pads', 'ui', 'Seven expansion pad icons: second rack, robot cashier, bigger shelf, hyper checkout, lamp, door, plant.'),
      ('card_space_store', 'scene', CARD)])

game(12, 'أم الثعلب ومغامرات العيور', 'Fox Family Rescue',
     "Cute 3D cartoon lane-hopping world, soft pastel seasons, chunky rounded blocks, friendly animals, kid friendly.",
     [('fox_mother', 'sprite', 'A kind orange fox mother, hopping, idle, scared-wobble (three files).'),
      ('cubs_parade', 'sprite', 'Four fox cubs of different shades following in a line, idle and hopping (four files).'),
      ('vehicles_road', 'sprite', 'A little car, a van, a truck and a school bus seen from the side, four files.'),
      ('train_tracks', 'sprite', 'A cute steam train and a railway crossing signal, two files.'),
      ('river_logs_lilypads', 'sprite', 'Floating logs, lily pads and a turtle platform, three files.'),
      ('den_goal', 'sprite', 'A cozy fox den entrance.'),
      ('seasons_summer_autumn_winter', 'scene', 'Three season backdrops with road, river and rails lanes: summer meadow, autumn woods, winter hills.'),
      ('berries_ui', 'ui', 'A berry icon, a cub icon and a level badge.'),
      ('card_fox_family', 'scene', CARD)])

game(13, 'سباق الطائرات الجوي', 'Air Race',
     "Bright 3D cartoon aerial racing, tropical islands, blue lagoons, glossy toy planes, soft clouds, kid friendly.",
     [('plane_player_white', 'sprite', 'A small white racing plane with red stripes and a smiling pilot, 3/4 rear view, banking left and right (three files).'),
      ('rivals', 'sprite', 'Three rival aircraft: a blue jet, a yellow biplane, a green propeller plane, one file each.'),
      ('checkpoint_ring', 'sprite', 'A glowing checkpoint ring, normal and collected (two files).'),
      ('boost_effect', 'ui', 'A boost flame and a speed streak.'),
      ('props_bridge_arch_pillar', 'sprite', 'A stone bridge, a rock arch and a tall rock pillar, three files.'),
      ('course_lagoon', 'scene', 'Tropical islands and blue lagoon from the air.'),
      ('course_glacier', 'scene', 'Icy glacier valley from the air.'),
      ('course_coral_cliffs', 'scene', 'Coral-colored cliffs and sea arches from the air.'),
      ('card_air_race', 'scene', CARD)])

game(14, 'البقاء على قيد الحياة (أسطح الزومبي)', 'Zombie Rooftop',
     "Goofy 3D cartoon rooftop survival, bright city skyline, cartoon zombies in green puffs, no blood, saturated colors, kid friendly.",
     [('hero_survivor', 'sprite', 'A brave kid survivor with a cap and a backpack holding a toy-like blaster: idle, run, shoot, knocked-out (four files).'),
      ('zombies', 'sprite', 'Four goofy cartoon zombies: shambler, sprinter, big brute in a white shirt, the zombie king with a crown; one file each.'),
      ('weapons', 'ui', 'Three colorful launchers: bomb, rocket, fireworks; plus a crate and a gas tank (five files).'),
      ('launch_pad', 'sprite', 'A pink launch pad for the leap to the next building.'),
      ('rooftop_scenes_1..8', 'scene', 'Eight different rooftops: dawn, noon, sunset, night, rain, snow, neon, endless.'),
      ('coin_perk_icons', 'ui', 'A coin and six perk icons.'),
      ('card_zombie_rooftop', 'scene', CARD)])

game(15, 'كرة العلكة العملاقة', 'Gum Ball Roll',
     "Candy-colored 3D cartoon city, sticky pink gum ball, terracotta plaza, glossy toy buildings, kid friendly.",
     [('gum_ball', 'sprite', 'A pink sticky gum ball with a shiny highlight, small, medium and huge with stuff stuck on it (three files).'),
      ('clutter_small', 'sprite', 'Small stickable things: candy, apple, rubber duck, hot dog, pretzel, banana, ball, teddy, cone (nine files in one sheet).'),
      ('street_props', 'sprite', 'Umbrella table, food cart, bike, bin, hydrant, red stairs (six files in one sheet).'),
      ('vehicles_city', 'sprite', 'A car, a taxi, a police car, a food truck, a red double-decker bus and a fire truck, six files.'),
      ('buildings_colorful', 'sprite', 'Five colorful buildings with billboards, from small shop to tall tower.'),
      ('city_plaza_scene', 'scene', 'A terracotta pedestrian plaza with shops, trees and a fountain.'),
      ('size_goal_ui', 'ui', 'A size meter and a stars row.'),
      ('card_gum_ball', 'scene', CARD)])

game(16, 'أسماك الأعماق', 'Deep Sea Fish',
     "Side-view underwater 3D cartoon, glowing sea light, rich blues and teals, glossy friendly sea creatures, kid friendly.",
     [('player_fish', 'sprite', 'A small blue fish with a yellow stripe, swimming, dashing and growing sizes (three files).'),
      ('prey', 'sprite', 'Prey creatures: sardine bait ball, butterflyfish, small shrimp, squid, lanternfish, mackerel; one file each.'),
      ('predators', 'sprite', 'Predators with funny grumpy faces: pufferfish, grouper, barracuda, tuna, anglerfish, a big shark; one file each (six).'),
      ('level_sunlit_reef', 'scene', 'A sunlit coral reef side-view backdrop.'),
      ('level_kelp_forest', 'scene', 'A swaying kelp forest side-view backdrop.'),
      ('level_deep_trench', 'scene', 'A dark deep trench with glowing creatures, side view.'),
      ('dash_button_warning', 'ui', 'A red dash button and a red warning mark.'),
      ('card_deep_sea', 'scene', CARD)])

game(17, 'سباق الطريق الساحلي', 'Coastal Drive',
     "Glossy 3D cartoon highway racing, vivid colors, sunny coast, neon city, kid friendly.",
     [('car_player', 'sprite', 'A red sports car seen from behind, with a smiling driver silhouette, plus nitro flames and a crash wobble (three files).'),
      ('traffic', 'sprite', 'Traffic seen from behind: small car, van, pickup, big truck, taxi, bus; one file each.'),
      ('coin_row_nitro', 'ui', 'A coin, a nitro button and a combo badge.'),
      ('world_azure_coast', 'scene', 'A four-lane coastal highway: palms, sand, sea, green hills, guard rails, street lamps.'),
      ('world_red_canyon', 'scene', 'A four-lane highway through red canyon mesas and cacti.'),
      ('world_neon_city', 'scene', 'A four-lane highway through a neon city with lit towers.'),
      ('hearts_wrecked_card', 'ui', 'Heart icons and a friendly Wrecked panel frame.'),
      ('card_coastal_drive', 'scene', CARD)])

game(18, 'لعبة الضفدع الجائع', 'Hungry Frog',
     "Bright 3D cartoon lily pond, glossy funny frogs, soft morning mist, kid friendly.",
     [('frog_player', 'sprite', 'A funny green frog sitting, hopping, leaping and with its sticky tongue out, plus evolved bigger versions (five files).'),
      ('bully_frog_boss', 'sprite', 'Big Bo the bully frog with a golden crown, grumpy and laughing (two files).'),
      ('snake_heron', 'sprite', 'A cartoon snake lashing and a heron swooping with its beak, two files.'),
      ('critters', 'sprite', 'Prey critters: fly, dragonfly, ladybug, tiny fish, bee, snail, firefly; one file each.'),
      ('lily_pads_reeds', 'sprite', 'Lily pads with flowers, reeds, a log and stepping stones, four files.'),
      ('level_misty_dawn', 'scene', 'A misty dawn pond.'),
      ('level_lily_marsh', 'scene', 'A lily marsh with big flowers.'),
      ('level_night_swamp', 'scene', 'A glowing night swamp with fireflies.'),
      ('leap_button_ui', 'ui', 'A pink leap button and hearts.'),
      ('card_hungry_frog', 'scene', CARD)])

game(19, 'طريق التنين الجليدي', 'Frost Coil',
     "Snowy-night 2D puzzle art, soft glowing ice, warm wooden tiles, deep purple-blue sky, cute and magical, kid friendly.",
     [('ice_dragon', 'sprite', 'A cute little ice dragon on a cloud: idle, sliding, happy (three files).'),
      ('portal', 'sprite', 'A swirling icy blue portal in a wooden frame with snow on top, closed and glowing (two files).'),
      ('tile_straight_curve_cross_frozen', 'sprite', 'Wooden board tiles with ice tubes: straight, curved, cross, frozen (locked) and lit versions (eight files).'),
      ('star_tile', 'sprite', 'A gold star tile and a star sparkle.'),
      ('board_frame', 'sprite', 'A wooden board frame covered in snow.'),
      ('snow_night_backdrop', 'scene', 'A snowy night sky with falling snow, distant pine trees and a moon, portrait and landscape.'),
      ('moves_bar_coin', 'ui', 'An ice-cube moves bar and a coin.'),
      ('card_frost_coil', 'scene', CARD)])

game(20, 'سباق القمة', 'Summit Rush',
     "Bright 3D cartoon snowy mountain race, crisp white snow, red warning ladders, colorful racers, kid friendly.",
     [('runner_player', 'sprite', 'A kid runner in a red jacket, running up a slope, back view, plus fall-on-back and victory poses (three files).'),
      ('rivals_three', 'sprite', 'Three rivals: a teal girl with a white beanie, a mustard-jacket bearded man, a purple girl; one file each, back view.'),
      ('hazards', 'sprite', 'A giant snowball, a boulder and a rolling log, three files, with red warning ladder marks on the snow.'),
      ('ice_pad_orbs', 'ui', 'An ice boost pad, a tailwind orb, a shield orb and a crystal, four files.'),
      ('trees_flags_arch', 'sprite', 'Pine trees with snow, colored flags and a checkered summit arch, three files.'),
      ('mountain_backdrop', 'scene', 'A snowy mountain slope with trees and flags and a bright sky.'),
      ('race_cards_ui', 'ui', 'A racer rank card frame with a badge and a heart row.'),
      ('card_summit_rush', 'scene', CARD)])

game(21, 'برج الأبطال', 'Hero Tower',
     "Casual mobile game art, cute chibi cartoon, thick dark-purple outlines, bright saturated colors, soft cel shading with a white highlight, friendly big eyes, medieval fantasy tower theme, no blood, kid friendly.",
     [('hero_idle_attack_sad_climb', 'sprite', 'A brave little knight boy: big round blue helmet with a white plume, blue armor with a golden belt, red cape, round white shield with a red emblem, small silver sword, facing right; four files: idle, sword swing, dizzy after a gentle bonk, climbing a ladder.'),
      ('foes_five', 'sprite', 'Five foes facing left: green slime, goblin with a club, skeleton with a red cap, little red imp with bat wings, strong green orc with a big axe; one file each.'),
      ('boss_troll', 'sprite', 'A giant stone troll with two horns and a wooden club, grumpy but funny, 1536x1536.'),
      ('boss_sorcerer', 'sprite', 'A dark sorcerer with a tall purple hat, white beard and a glowing magenta orb staff, 1536x1536.'),
      ('boss_dragon', 'sprite', 'A big red dragon with orange belly breathing orange fire to the left, 1536x1024.'),
      ('treasures_five', 'sprite', 'Treasure icons: silver sword, purple crystal, pink potion, golden key, treasure chest closed and open; six files.'),
      ('tower_room_castle', 'scene', 'One room of a stone tower in cross-section, 1536x640: warm brick wall, orange arched window, wall torches, bunting, wooden floor, pillars, ladder on the right; seamless horizontally.'),
      ('tower_room_ice', 'scene', 'The same room in an ice theme (pale blue ice bricks, snow).'),
      ('tower_room_fire', 'scene', 'The same room in a fire theme (dark red bricks, lava glow).'),
      ('tower_roof', 'scene', 'The open tower roof at sunset with battlements, 1536x640.'),
      ('sky_three', 'scene', 'Three tall sky backdrops 1080x1920: dusk castle, winter ice, volcanic fire.'),
      ('power_pills', 'ui', 'Three rounded power label pills (green, red, purple) with a small sword icon and space for a number.'),
      ('card_hero_tower', 'scene', CARD)])

game(22, 'ركضة السحاب', 'Cloud Dash',
     "Casual mobile runner game art, cute 3D-rendered cartoon look, soft pastel candy colors (mint, lilac, peach, baby blue, pink, butter yellow), smooth rounded shapes, soft shadows, glossy highlights, dreamy cloud sky candy-land theme, kid friendly.",
     [('kid_boy_poses', 'sprite', 'A cute cartoon boy runner in a blue tracksuit with an orange headband and white sneakers, back view; six files: run frame 1, run frame 2, jump, slide, bumped, wall-run, win.'),
      ('kid_girl_poses', 'sprite', 'The same outfit on a girl with a brown ponytail; the same seven poses.'),
      ('obstacles_six', 'sprite', 'Red-and-white candy-cane barrier, glossy green slime blob with googly eyes, pink-white candy spikes, overhead striped bar on posts, cracked crumbling tile, white wind gust ring; six files.'),
      ('collectibles_five', 'sprite', 'Golden coin with a star, blue shield bubble, candy-cane horseshoe magnet, purple hourglass, heart; five files.'),
      ('tiles_sheet', 'sprite', 'Six pastel floating square tiles, top view, 1536x512.'),
      ('sky_backdrop', 'scene', 'A dreamy pink-lilac-peach sky with fluffy clouds below, floating lollipops and balloons, 1080x1920.'),
      ('wall_panel', 'sprite', 'A pastel candy-striped wall panel, seamless vertically, 512x1024.'),
      ('finish_gate', 'sprite', 'A pink finish gate with a checkered banner and balloon tops on a round pink platform.'),
      ('ui_buttons_logo', 'ui', 'Round glossy blue pause and sound buttons, and the title logo «ركضة السحاب» in white bubble letters with a pink outline.'),
      ('card_cloud_dash', 'scene', CARD)])

# ---------------------------------------------------------------------------------------------------------------- learning game
LEARN_STYLE = "Friendly 3D-rendered children's learning-game art, bright saturated colors, soft light, rounded shapes, big friendly eyes, kid friendly (ages 2-6), Egyptian setting where it fits."
LEVELS = [('جسمي وعيلتي', 'body parts and family: a smiling kid pointing at eyes, ears, nose, hands; mama, baba, grandma, grandpa waving'),
          ('ملابسي وبيتي', 'clothes and home: a bright kids bedroom with a wardrobe, hanging clothes, shoes, a swing in the garden'),
          ('مهن حولي', 'jobs: doctor, teacher, firefighter, farmer, chef, pilot, builder, painter, police officer, driver smiling in a friendly town street'),
          ('أكل وحلويات', 'food and sweets: a colorful table with bread, cheese, milk, rice, juice, cookies, honey, pizza, ice cream'),
          ('مدرستي وموسيقاي', 'school and music: a classroom with a board, pencils, books, a drum, piano, flute and a microphone'),
          ('حشرات وطيور', 'insects and birds: a garden with butterflies, ladybug, bees, ants, snail, a peacock, a swan and a flamingo'),
          ('الجو والفصول', 'weather and seasons: a split scene of sun, rain with umbrella, snow with snowman, wind with kite, a rainbow'),
          ('عالم البحر', 'the sea: coral reef, clownfish, octopus, turtle, dolphin, crab, a lighthouse, a beach with a bucket and shells'),
          ('فضاء وخيال', 'space and fantasy: planets, a rocket, a friendly alien and robot, a castle with a king, queen and a friendly dragon'),
          ('حيوانات الغابة والمزرعة', 'jungle and farm animals: lion, elephant, monkey, zebra on one side; cow, goat, rooster, silo and barn on the other'),
          ('مصر والمدينة', 'Egypt and the city: pyramids, a camel, a desert oasis with palms, a bright modern city with a hospital, a school and a traffic light'),
          ('الأيام والفصول', 'days and seasons: a big friendly calendar with seven day-name cards and four season trees')]

LEARN = []
for i, (ar, desc) in enumerate(LEVELS, 1):
    LEARN.append((f'level_tile_{i:02d}', 'ui', f'A level tile icon for «{ar}» (the main subject: {desc}); rounded square, glossy, 512x512.'))
for i, (ar, desc) in enumerate(LEVELS, 1):
    LEARN.append((f'level_world_{i:02d}', 'scene', f'A learning-game world backdrop for «{ar}»: {desc}. Keep the center clear for four picture options.'))
LEARN += [
    ('levels_page_24', 'scene', 'The level-select page for the learning game, 1536x1280: wooden sign «عالم رحلتي التعليمي», a grid of 24 glossy tiles with icons and Arabic labels: أتعلم الحروف، كلماتي الأولى، أول حرف في الكلمة، أتعرف على الأرقام، أعدّ وأجمع، الأبجدية بالترتيب، الأشكال الهندسية، الحيوانات وأصواتها، أتعلم الألوان، فواكه وخضار صحية، وسائل المواصلات، عادات صحية ومهذبة، جسمي وعيلتي، ملابسي وبيتي، مهن حولي، أكل وحلويات، مدرستي وموسيقاي، حشرات وطيور، الجو والفصول، عالم البحر، فضاء وخيال، حيوانات الغابة والمزرعة، مصر والمدينة، الأيام والفصول; friendly owl teacher and two kids at the sides.'),
    ('my_report_page', 'scene', 'A cheerful «تقريري» report page frame: a notebook with star stickers, a sparkling trophy, empty space for a list, 1536x1024.'),
    ('welcome_back_card', 'ui', 'A «أهلاً بيك تاني» welcome-back card frame with a waving owl and two buttons area, 1024x768.'),
    ('owl_poses_4', 'sprite', 'The friendly owl teacher with a graduation cap: thinking, cheering, pointing, sleeping; four files.'),
    ('feelings_faces_6', 'sprite', 'A cute cartoon child face showing a feeling: happy, sad, angry, scared, surprised, tired; six files.'),
    ('manners_4', 'sprite', 'Kids saying thank you, saying please, sharing a toy, waiting their turn; four files.'),
    ('safety_4', 'sprite', 'A red and green traffic light, a zebra crossing, an electric plug with a no-touch sign, a hot stove with a no-touch sign; four files.'),
    ('opposites_10', 'sprite', 'Ten opposite pairs as simple pictures (a big elephant and a tiny mouse, a tall giraffe and a short bunny, a fast rabbit and a slow turtle, hot sun and cold snow, up and down arrows with a kid on a slide, inside and outside a house, open and closed door, full and empty glass, day and night, heavy and light); twenty files.'),
    ('senses_5', 'sprite', 'The five senses: an eye, an ear, a nose smelling a flower, a tongue tasting a lollipop, a hand touching a soft bunny; five files.'),
    ('positions_6', 'sprite', 'Position words with a ball and a box: on, under, inside, next to, in front, behind; six files.'),
]
game(23, 'اللعبة التعليمية (المستويات الجديدة)', 'Learning game: new levels', LEARN_STYLE, LEARN)

exec(open(__file__.replace('make_image_scripts.py', 'image_scripts_new.py'), encoding='utf8').read())

out = io.StringIO()
out.write('# كل سكريبتات الصور لكل الألعاب (%s)\n\n' % '2026-11-19')
out.write('الملف ده بيتولّد بـ `python tools/make_image_scripts.py`. كل سكريبت = برومت واحد (ممكن يطلع منه أكتر من ملف لو مكتوب «ملفات» فيه). اكتب **سطر الأسلوب** في أول كل برومت لنفس اللعبة عشان الشخصيات تبقى من نفس العيلة.\n\n')
total = 0
rows = []
for num, ar, en, style, items in GAMES:
    total += len(items)
    rows.append((num, ar, en, len(items)))
out.write('## الملخص\n\n| # | اللعبة | عدد السكريبتات |\n|---|---|---|\n')
for num, ar, en, n in rows:
    out.write('| %d | %s (%s) | %d |\n' % (num, ar, en, n))
out.write('| | **المجموع** | **%d** |\n\n' % total)
out.write('قواعد عامة: خلفية **شفافة** للشخصيات والعناصر (PNG)، من غير كلام على الصورة إلا لو مكتوب، ممنوع دم أو شيء مخيف (أطفال 1-6 سنين)، الاسم المكتوب هو اسم الملف. لو الاسم فيه `1..5` يبقى ملف لكل رقم.\n\n')
for num, ar, en, style, items in GAMES:
    out.write('---\n\n## %d. %s — %s (%d سكريبت)\n\n' % (num, ar, en, len(items)))
    out.write('**سطر الأسلوب (حطه في أول كل برومت):**\n\n```\n%s\n```\n\n' % style)
    for k, (fname, kind, desc) in enumerate(items, 1):
        suffix = {'sprite': SPRITE, 'scene': SCENE, 'ui': UI}[kind]
        if desc == CARD:
            suffix = ''
        out.write('%d. `%s.png` — %s %s\n' % (k, fname, desc, suffix))
    out.write('\n')
io.open('docs/ALL_GAMES_IMAGE_SCRIPTS.md', 'w', encoding='utf8', newline='\n').write(out.getvalue())
print('games', len(GAMES), 'scripts', total)
for num, ar, en, n in rows:
    print(num, en, n)
