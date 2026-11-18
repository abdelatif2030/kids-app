# -*- coding: utf-8 -*-
# Image scripts for the games built on 2026-11-18/19 (executed by make_image_scripts.py, which provides game(), SPRITE, SCENE, UI, CARD).
# Games marked «لسه ما اتبنتش» are requested and planned: their scripts are here so the pictures can be made in advance.

game(24, 'سكاي كابي', 'SKY CAPY',
     "Casual mobile game art, cute 3D-rendered cartoon look, soft sky-blue and cream colors, rounded shapes, big friendly eyes, soft shadows, kid friendly.",
     [('capy_poses', 'sprite', 'A chubby cute capybara with a tiny backpack: idle, jump, glide with a leaf umbrella, bounce, win; five files.'),
      ('platforms_sheet', 'sprite', 'Six floating sky islands/clouds platforms of different sizes, top-side view, 1536x512.'),
      ('collectibles', 'sprite', 'Star coin, orange slice, shield bubble, spring boots; four files.'),
      ('sky_backdrop', 'scene', 'A tall pastel sky with clouds and floating islands, 1080x1920.'),
      ('ui_buttons_logo', 'ui', 'Round glossy pause/sound buttons and the logo «سكاي كابي».'),
      ('card_sky_capy', 'scene', CARD)])

game(25, 'جرّافة الكرات', 'Marble Dozer',
     "Colorful 3D-rendered arcade physics game art, glossy toy-like look, candy colors, soft light, kid friendly.",
     [('dozer_blade', 'sprite', 'A chunky toy bulldozer with a wide blade and two side wings, orange, top 3/4 view.'),
      ('marbles_six', 'sprite', 'Six glossy marbles in different bright colors with highlights; six files.'),
      ('hole_funnel', 'sprite', 'A round hole with a funnel rim and a glow, top view.'),
      ('arena_floor', 'scene', 'A rounded play arena floor with bright borders, top view, seamless.'),
      ('walls_bumpers', 'sprite', 'Rubber bumpers and wooden walls pieces; one sheet.'),
      ('ui_stars_timer', 'ui', 'Three gold stars, a clock and a pause button.'),
      ('card_marble_dozer', 'scene', CARD)])

game(26, 'تيتان الكثبان', 'Dune Titans',
     "3D-rendered off-road desert racing game art, warm orange sand, dramatic sunset light, glossy cartoon trucks, kid friendly, no logos.",
     [('truck_player', 'sprite', 'A chunky 6-wheel orange-and-black desert truck with roof lights, big tires, 3/4 rear view.'),
      ('truck_rivals_5', 'sprite', 'Five rival 6-wheel trucks (blue, green, pink, yellow, purple), one file each.'),
      ('truck_drift_nitro', 'sprite', 'The orange truck drifting sideways with dust, and with a blue nitro flame; two files.'),
      ('dunes_scene', 'scene', 'A desert race track between sand dunes with rocks, flags, a tent camp, an oasis pool and a helicopter, no characters.'),
      ('props_rocks_cacti_tent', 'sprite', 'Rocks, cacti, a striped tent with flags, a start/finish gantry; one sheet.'),
      ('road_texture', 'scene', 'Packed dirt road texture with tyre ruts, seamless top view.'),
      ('ui_speedo_buttons', 'ui', 'Speedometer with boost bar, round DRIFT, NITRO, left and right arrow buttons (no numbers).'),
      ('card_dune_titans', 'scene', CARD)])

game(27, 'طوف الناجي', 'Castaway Raft',
     "Casual mobile survival game art, cute 3D-rendered cartoon, bright tropical blue water, warm wood, soft foam, kid friendly.",
     [('castaway_poses', 'sprite', 'A cute castaway with a straw hat and striped shirt: idle, throwing the hook, pulling, happy, building; five files.'),
      ('raft_tiles', 'sprite', 'Log raft tiles tied with rope, top view, plus a sail mast, a fishing rod spot and a small hut; four files.'),
      ('floating_items', 'sprite', 'A plank, a barrel, a crate and a glowing golden bottle floating with foam rings; four files.'),
      ('shark_fin', 'sprite', 'A cartoon shark fin and wake, a "!" warning bubble; two files.'),
      ('island_five', 'scene', 'Five small islands seen from above (palm, sand, rock, coral, golden treasure) with an X mark; five files.'),
      ('sea_backdrop', 'scene', 'Blue sea texture with soft waves, seamless, top view.'),
      ('ui_build_buttons', 'ui', 'Four build buttons: raft tile, sail, fishing, hut; and wood, crate, bottle counters.'),
      ('card_castaway_raft', 'scene', CARD)])

game(28, 'معسكر الشتاء', 'Winter Camp',
     "Cozy low-poly 3D cartoon winter art, chunky shapes, soft snow, snow-covered pines, warm firelight, frosty-blue glass UI, top-down view, kid friendly.",
     [('survivor_poses', 'sprite', 'A cute lone survivor in a red coat and white hat carrying logs on the back: idle, walking, chopping, carrying, cheering; five files.'),
      ('pines_stumps', 'sprite', 'Snow-covered pine trees in three sizes and a stump, top 3/4 view; four files.'),
      ('campfire', 'sprite', 'A warm campfire with logs and a glow.'),
      ('buildings_four', 'sprite', 'A log cabin, a workshop, a sawmill and a supply sled, snow roofs; four files.'),
      ('frozen_gate', 'sprite', 'A big frozen ice gate that opens, two frames.'),
      ('helper_workers', 'sprite', 'Small orange-coat helper workers chopping and carrying; three files.'),
      ('snow_ground', 'scene', 'A seamless soft snow ground texture with blue drifts, top view.'),
      ('ui_glass_buttons', 'ui', 'Frosty glass round buttons: helper, bigger bag, pause, menu; and coin and log icons.'),
      ('card_winter_camp', 'scene', CARD)])

game(29, 'سباق حلبة المطر', 'Rain Circuit',
     "3D-rendered racing game art, rainy wet asphalt reflections, green hills and palm trees, glossy sports cars, moody soft light, kid friendly, no logos.",
     [('car_player', 'sprite', 'A red high-performance race car with a rear wing, 3/4 rear view, wet shine.'),
      ('car_rivals_5', 'sprite', 'Five rival race cars (blue, yellow, green, white, purple), one file each.'),
      ('nitro_pickup', 'sprite', 'A glowing blue diamond pickup, and a blue nitro flame; two files.'),
      ('track_scene', 'scene', 'A wet circuit winding through green hills and palm trees, rain, mist, grandstands, no cars.'),
      ('rain_overlay', 'scene', 'A transparent rain streak overlay, 1080x1920.'),
      ('ui_hud', 'ui', 'Position badge, lap counter, speedometer, round NITRO and BRAKE buttons.'),
      ('card_rain_circuit', 'scene', CARD)])

game(30, 'فرقة الجنود', 'Squad Shooter',
     "Chunky 3D cartoon shooter art at night, industrial road, bright rim light, saturated colors, cute soldiers, no blood, kid friendly.",
     [('soldier_poses', 'sprite', 'A cute cartoon soldier with a green helmet and small rifle: idle, run, shoot, hurt, cheer; five files.'),
      ('enemy_thugs', 'sprite', 'Three purple cartoon enemy thugs of different sizes plus a giant boss; four files.'),
      ('gates_numbers', 'sprite', 'A glowing blue plus gate and a red minus gate, translucent panels with posts; two files.'),
      ('cage_crate', 'sprite', 'A metal cage with captive soldiers, and a weapon crate; two files.'),
      ('road_night', 'scene', 'A night industrial road with lamp posts, containers, barrels and pipes, no characters.'),
      ('ui_numbers_shop', 'ui', 'Squad counter badge, coin, rifle and rank upgrade buttons.'),
      ('card_squad_shooter', 'scene', CARD)])

game(31, 'رماة الجسر', 'Archer Bridge',
     "Chunky 3D cartoon fantasy art, stone bridge over glowing lava, warm orange light, cute archers and funny skeletons, no gore, kid friendly.",
     [('archer_poses', 'sprite', 'A cute archer with a red hood and wooden bow: idle, run, shoot, cheer; four files.'),
      ('skeletons', 'sprite', 'Three cartoon skeleton warriors of different sizes (sword, shield) and a giant skeleton boss; four files.'),
      ('gates_cages', 'sprite', 'Numbered upgrade gates (blue plus, red minus), a cage with captive archers, a bow crate; four files.'),
      ('bridge_scene', 'scene', 'A three-lane stone bridge over a lava chasm with torches and embers, no characters.'),
      ('arrow_volley', 'sprite', 'A volley of glowing arrows, and a rank badge; two files.'),
      ('card_archer_bridge', 'scene', CARD)])

game(32, 'سباق السماء الغريبة', 'Alien Sky Race',
     "Colorful 3D cartoon sci-fi art, floating islands in an alien purple sky, glossy toy-like shapes, bright neon accents, kid friendly.",
     [('creature_poses', 'sprite', 'A cute round green space creature with antennae and a small jetpack: run, jump, jetpack burst, bumped, win; five files.'),
      ('rival_creatures_5', 'sprite', 'Five rival space creatures in different colors, one file each.'),
      ('course_pieces', 'sprite', 'A floating island platform, a spinning ring, an opening door, a meteor with a shadow, a green tube shortcut; five files.'),
      ('rocket_finish', 'sprite', 'A big red-and-white cartoon rocket at the finish.'),
      ('sky_backdrop', 'scene', 'An alien sky with colorful planets, 1080x1920.'),
      ('ui_jump_jet', 'ui', 'Round JUMP and JET buttons, jetpack charge icons.'),
      ('card_alien_sky', 'scene', CARD)])

game(33, 'سباق القمة (وحيد القرن)', 'Summit Race (Rhino)',
     "Colorful 3D cartoon obstacle-race art above the clouds, soft pastel sky, glossy shapes, kid friendly.",
     [('rhino_poses', 'sprite', 'A cute chubby rhino with a red helmet: run, jump, dive, bumped, win; five files.'),
      ('rival_runners_5', 'sprite', 'Five rival animal runners with helmets, one file each.'),
      ('obstacles', 'sprite', 'A spinning sweeper bar, a swinging hammer, a breakaway gate, a bounce pad, a power-up orb; five files.'),
      ('golden_gate', 'sprite', 'A big golden gate at the summit, two frames (closed, burst).'),
      ('course_scene', 'scene', 'Floating colorful courses above fluffy clouds, no characters.'),
      ('card_summit_race', 'scene', CARD)])

game(34, 'طريق الغروب', 'Sunset Highway',
     "3D-rendered arcade racing art, warm orange sunset, palm-lined coastal highway, glossy cartoon cars, kid friendly, no logos.",
     [('car_player', 'sprite', 'A red sports car, 3/4 rear view, sunset reflections.'),
      ('rival_car', 'sprite', 'A blue sports rival car.'),
      ('traffic_set', 'sprite', 'Five different traffic cars and three trucks; eight files.'),
      ('highway_scene', 'scene', 'A coastal highway at sunset with palms, sea, sun disc and bends, no cars.'),
      ('ui_hud', 'ui', 'Timer badge, position badge, speed readout, NITRO button.'),
      ('card_sunset_highway', 'scene', CARD)])

game(35, 'مبدع الذكاء', 'AI Creator',
     "Clean minimal glassy casual idle-game art, soft purple and blue gradients, rounded shapes, friendly modern office, no real brands or characters, kid friendly.",
     [('creator_poses', 'sprite', 'A young cartoon creator at a desk with a laptop: tapping, thinking, happy, promoted; four files.'),
      ('office_six', 'scene', 'Six office levels from a small desk to a boardroom with a glass skyline; six files.'),
      ('create_buttons', 'ui', 'Three big buttons: PHOTO, VIDEO, GAME with icons.'),
      ('quality_bar', 'ui', 'A horizontal quality bar with a green zone and a needle.'),
      ('results_icons', 'ui', 'A masterpiece star badge and a funny broken "AI slop" trash can; two files.'),
      ('shop_icons', 'ui', 'Four upgrade icons: GPU, wider zone, slower needle, richer clients.'),
      ('card_ai_creator', 'scene', CARD)])

game(36, 'غوّاصو اللؤلؤ', 'Pearl Divers',
     "Tropical cartoon underwater idle-game art, turquoise lagoon, glossy shapes, bright coral, kid friendly.",
     [('diver_poses', 'sprite', 'A cute diver with a snorkel: swimming down, opening a clam, carrying a pearl, swimming up; four files.'),
      ('clams_pearls', 'sprite', 'Open and closed clams with a glowing pearl; four files.'),
      ('boats', 'sprite', 'The player boat with a crane and a luxury rival yacht; two files.'),
      ('diving_bell_basket', 'sprite', 'A brass diving bell and a woven pearl basket; two files.'),
      ('depth_backdrops', 'scene', 'Four underwater layers: sunny shallows, coral reef, pearl cave, the deep; four files.'),
      ('card_pearl_divers', 'scene', CARD)])

game(37, 'مزرعة العسل', 'Honey Farm',
     "Casual 3D cartoon farm art, sunny meadow, flowers, glossy honey, chunky shapes, kid friendly.",
     [('farmer_poses', 'sprite', 'A cute farmer with a straw hat carrying a stack of honey jars: idle, walk, carry, cheer; four files.'),
      ('beehive_stages', 'sprite', 'A wooden beehive with bees, empty and full of jars; two files.'),
      ('packing_machine_crate', 'sprite', 'A packing machine and a wooden crate of honey jars; two files.'),
      ('shop_counter_customers', 'sprite', 'A roadside shop counter with a striped awning and five different customers waiting; six files.'),
      ('conveyor_belt', 'sprite', 'A conveyor belt moving honey jars.'),
      ('farm_ground', 'scene', 'A sunny flower meadow farm ground, top view, seamless.'),
      ('card_honey_farm', 'scene', CARD)])

# ---- requested, not built yet (scripts ready in advance) ----
game(38, 'تنين الجليد (لسه ما اتبنتش)', 'Ice Dragon Maze',
     "Cute 3D fantasy art, icy maze above turquoise water, frosty blue and white, glowing runes, giant armored segmented dragon, no gore, kid friendly.",
     [('hero_poses', 'sprite', 'A small cartoon hero with a staff: idle, run, shoot, cheer; four files.'),
      ('dragon_head_segment', 'sprite', 'A giant ice dragon head and an armored body segment (intact and cracked); three files.'),
      ('shrine_barrel', 'sprite', 'A numbered stone shrine, an explosive barrel and an ally spirit; three files.'),
      ('ice_maze_scene', 'scene', 'An ice-block maze platform surrounded by turquoise water channels, top 3/4 view.'),
      ('card_ice_dragon', 'scene', CARD)])

game(39, 'ينابيع القرية (لسه ما اتبنتش)', 'Hot Spring Village',
     "Cozy 3D cartoon art, snowy mountain village hot spring, warm steam, lanterns, soft light, kid friendly.",
     [('caretaker_poses', 'sprite', 'A cute caretaker with a scarf carrying ginger slices: idle, walk, carry, cheer; four files.'),
      ('visitors_frozen', 'sprite', 'Frozen blue visitors shivering and then warm happy ones; six files.'),
      ('spring_mill_teahouse', 'sprite', 'A hot spring pool, a ginger slicing mill, a tea house; three files.'),
      ('lanterns', 'sprite', 'Unlit and lit paper lanterns; two files.'),
      ('card_hot_spring', 'scene', CARD)])

game(40, 'مزرعة المريخ (لسه ما اتبنتش)', 'Mars Farm Colony',
     "Colorful isometric cartoon art on Mars, red terrain, futuristic farm buildings, cute drones, kid friendly.",
     [('crops_three', 'sprite', 'Wheat, corn, carrots at three growth stages; nine files.'),
      ('goat_pen', 'sprite', 'A cute goat and a futuristic pen; two files.'),
      ('factories_three', 'sprite', 'A bakery, a dairy and a juice factory, isometric; three files.'),
      ('homes_spaceport', 'sprite', 'Dome homes, a spaceport and a shuttle; three files.'),
      ('drone_order', 'sprite', 'A delivery drone with a crate; one file.'),
      ('mars_ground', 'scene', 'Isometric red Mars ground tiles; one sheet.'),
      ('card_mars_farm', 'scene', CARD)])

game(41, 'الهامستر المحارب', 'Hamster Warrior',
     "Cute 3D cartoon adventure art, forest path, glossy shapes, big readable numbers, kid friendly.",
     [('hamster_poses', 'sprite', 'A little hamster warrior with a sword and shield: run, attack, absorb power, cheer; four files.'),
      ('monsters_power', 'sprite', 'Five friendly-ugly monsters of increasing size with empty number plates; five files.'),
      ('cards_gates', 'ui', 'Sword, shield, magic and multiply (x2, x3) power cards and gates; six files.'),
      ('boss_three', 'sprite', 'Three chapter bosses: a giant mushroom, a stone golem, a dragon; three files.'),
      ('forest_path', 'scene', 'A bright forest path, no characters.'),
      ('card_hamster', 'scene', CARD)])

game(42, 'تنظيف السجاد (لسه ما اتبنتش)', 'Rug Cleaning',
     "Cozy 3D ASMR-style art, sunny Mediterranean courtyard, whitewashed walls, limestone tiles, geraniums, glassy minimal UI, no real brands or characters.",
     [('courtyard_scene', 'scene', 'A sunny whitewashed courtyard with limestone tiles, potted geraniums and an edge drain.'),
      ('rugs_dirty_clean', 'sprite', 'Four hand-knotted rug patterns, each dirty (dust, coffee stain, muddy boot prints) and clean; eight files.'),
      ('tools_five', 'sprite', 'A carpet beater, a foam sprayer, a rotary brush, a surface jet, a squeegee; five files.'),
      ('ui_slider_stars', 'ui', 'A before/after slider handle, star rating, coin.'),
      ('card_rug_cleaning', 'scene', CARD)])

game(43, 'مقلاع الفايكنج (لسه ما اتبنتش)', 'Viking Slingshot',
     "Chunky 3D cartoon physics-game art, wooden goblin forts, stone and ice blocks, chubby vikings, no gore, kid friendly.",
     [('vikings_four', 'sprite', 'A chubby viking, a bomb thrower, a shield bouncer and a giant viking; four files.'),
      ('slingshot', 'sprite', 'A giant wooden slingshot, two frames.'),
      ('goblins', 'sprite', 'Three cute goblins and a goblin king; four files.'),
      ('blocks', 'sprite', 'Wood planks, stone blocks, ice blocks; three files.'),
      ('boss_fortress', 'sprite', 'A big boss fortress.'),
      ('card_viking_slingshot', 'scene', CARD)])

game(44, 'شاحنة الكور', 'Ball Scoop',
     "Colorful 3D-rendered hyper-casual runner art, glossy candy balls, warm wooden road, bright yellow bulldozer truck, soft shadows, kid friendly.",
     [('truck_poses', 'sprite', 'A chunky yellow bulldozer truck with a huge front shovel, 3/4 rear view; plus tilted left, tilted right and full-of-balls; four files.'),
      ('balls_sheet', 'sprite', 'Glossy balls in six candy colors (red, blue, yellow, green, purple, orange) with highlights; six files.'),
      ('gates', 'sprite', 'Translucent blue gates with posts for +10, +50, x2, x3 and red gates for -20; five files.'),
      ('walls_obstacles', 'sprite', 'A red brick wall block, a striped barrier and a rotating bar; three files.'),
      ('giant_bank', 'sprite', 'A giant golden bank building with columns and a coin slot, and a coin burst; two files.'),
      ('road_scene', 'scene', 'A wooden plank road with red and blue rails over green meadow, curves and a ramp, no characters.'),
      ('ui_hud', 'ui', 'Level badge, ball counter with a ball icon, progress bar with truck and bank icons, upgrade buttons (start balls, wider shovel, coin value).'),
      ('card_ball_scoop', 'scene', CARD)])

game(45, 'الأكول (متاهة الأشباح)', 'Chomp Maze',
     "Neon arcade maze game art, glossy 3D-rendered cartoon, deep blue background with glowing wall blocks, cute round yellow chomper hero and four friendly colored ghost blobs, kid friendly, original characters.",
     [('chomper_poses', 'sprite', 'A cute round yellow chomper character "Sunny" with big eyes: mouth closed, half open, wide open, happy win, dizzy; five files.'),
      ('ghosts_four', 'sprite', 'Four friendly ghost blobs (pink, blue, green, orange) with big eyes: normal, scared blue, flashing white, eyes only; sixteen files.'),
      ('fruit_dots', 'sprite', 'A glowing cream dot, a power cherry, a strawberry and a banana bonus; four files.'),
      ('maze_walls_four', 'scene', 'Four neon maze wall styles (blue, red, purple, teal) as seamless wall tile sheets.'),
      ('ui_hud', 'ui', 'Score badge, life icons, level badge, swipe hint hand icon.'),
      ('card_chomp_maze', 'scene', CARD)])

game(46, 'استوديو الأميرات', 'Princess Studio (dress-up)',
     "Glamorous girly 3D-rendered cartoon dress-up game art, pastel pink and gold, sparkles, soft light, a cute big-eyed princess character, kid friendly, no real brands.",
     [('doll_base_skins', 'sprite', 'A cute full-body princess doll base in front view, arms slightly out, five skin tones; five files.'),
      ('gowns_ten', 'sprite', 'Ten gowns on transparent background matching the doll: white wedding gown, pink princess gown, royal blue gown, mermaid dress, yellow summer dress, red dress, purple dress, school outfit, golden gown, mint gown; ten files.'),
      ('hairstyles_nine', 'sprite', 'Nine hairstyles (long brown, long blonde, red, elegant bun, ponytail, braid, pink curls, black curls, bob), front and back layers; eighteen files.'),
      ('makeup_sets', 'sprite', 'Six lipstick colors on the lips, six eyeshadow colors on the eyes, four blush colors on the cheeks; sixteen files.'),
      ('accessories_ten', 'sprite', 'A veil, crown, tiara, flower crown, pearl necklace, earrings, bouquet, bow, sun hat, bag; ten files.'),
      ('shoes_six', 'sprite', 'White heels, pink heels, flats, sandals, boots, crystal shoes; six files.'),
      ('scenes_six', 'scene', 'Six backgrounds: wedding hall, castle, beach, school, party, picnic garden; no characters, 1080x1920.'),
      ('ui_tabs_buttons', 'ui', 'Round glossy pink category icons (dress, hair, lips, eyes, blush, extras, shoes, scene, skin), a dice surprise button, a heart save button, star rating.'),
      ('card_princess_studio', 'scene', CARD)])

game(47, 'ماريو (لعبة منصات كلاسيكية) (لسه ما اتبنتش)', 'Classic Platformer (Mario-style, original hero)',
     "Bright cheerful 2D side-scrolling platformer art, rich saturated colors, bold outlines, original cartoon hero (NOT Mario), kid friendly, no real brands or characters.",
     [('hero_poses', 'sprite', 'An original little adventurer hero with a red cap-less helmet and blue overalls: idle, run (3 frames), jump, fall, big (power-up), win; eight files.'),
      ('enemies', 'sprite', 'Three friendly-looking enemies: a walking mushroom-bug, a shell turtle, a flying bee; two frames each, plus squashed; nine files.'),
      ('blocks_pipes', 'sprite', 'Question blocks (and used), brick blocks, a green pipe, ground tiles, a floating cloud platform, a spring; ten files.'),
      ('items', 'sprite', 'A spinning coin, a power-up mushroom, a star, a fire flower, a heart; five files.'),
      ('worlds_backdrops', 'scene', 'Four parallax worlds: sunny hills, underground cave, desert pyramids, snowy castle; four layers each.'),
      ('goal_flag_castle', 'sprite', 'A goal flag pole and a small castle.'),
      ('ui_hud', 'ui', 'Coin counter, lives, timer, world badge, left/right/jump touch buttons.'),
      ('card_platformer', 'scene', CARD)])

game(48, 'النطاط (Doodle-style) (لسه ما اتبنتش)', 'Sky Jumper (Doodle-style)',
     "Cute hand-drawn style endless jumper game art, notebook-paper background, rounded doodle creatures, bright pastel platforms, kid friendly.",
     [('jumper_poses', 'sprite', 'A cute four-legged doodle creature with a long nose: idle, jump up, falling, shooting, win; five files.'),
      ('platforms', 'sprite', 'Green normal platforms, blue moving platforms, brown crumbling platform, a spring platform; six files.'),
      ('powerups', 'sprite', 'A propeller hat, a jetpack, a spring shoes, a shield bubble; four files.'),
      ('enemies', 'sprite', 'Three silly monsters: a green blob, a purple two-eyed monster, a UFO; three files.'),
      ('paper_backdrops', 'scene', 'Four graph-paper backgrounds with different pastel margin colors and doodles, 1080x1920.'),
      ('ui_hud', 'ui', 'Height score badge, pause button, game-over screen frame.'),
      ('card_sky_jumper', 'scene', CARD)])
