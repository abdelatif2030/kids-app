# Builds docs/PRO_GAMES_DESIGN_AND_PROMPTS.md: a child's-eye review of every fun game, a brand system, new original names,
# a distinct style per game family, and every prompt needed. Run from the repo root: python -X utf8 tools/build_pro_design.py
import sys, os
sys.path.insert(0, 'build')
import audit_head as A  # G (game data), levels_of, inv, info

FAM = {
 'FUNFAIR': ('Funfair Candy', 'glossy candy-plastic toys, fairground bulbs, bubblegum pink + electric blue + sunny yellow, pill-shaped chunky forms, sparkles'),
 'COAST': ('Sunny Coast', 'warm golden-hour seaside, turquoise water, palm silhouettes, orange-pink skies, smooth glossy vehicles, travel-poster feel'),
 'FOREST': ('Storybook Forest', 'hand-painted picture-book look, soft watercolour textures, warm greens and ambers, round fluffy animals, gentle light rays'),
 'OCEAN': ('Ocean Glow', 'luminous underwater scenes, teal and violet depth gradients, glowing coral and pearls, caustic light, bubbly rounded creatures'),
 'SPACE': ('Space Candy', 'pastel space and sky, soft nebula gradients, chunky rounded rockets and gadgets, candy planets, friendly glows'),
 'DESERT': ('Golden Ruins', 'warm sandstone, gold and jade accents, carved patterns, dusty light beams, adventurous but gentle'),
 'SNOW': ('Frost Fun', 'crisp snow, icy blue and white with warm orange accents, puffy clothes, sparkling ice, cosy lanterns'),
 'TOYTOWN': ('Toy Town', 'cozy miniature world, felt and wood textures, warm interiors, pastel pops, tiny details to look at'),
 'NEON': ('Neon Arcade', 'dark glossy arena, neon rim lights in magenta/cyan/lime, rounded arcade shapes, bright energetic glow'),
 'HERO': ('Little Heroes', 'bold storybook adventure, confident silhouettes, rich primary colours, medieval/ancient toy-like props, heroic skies'),
 'RACE': ('Speed Stars', 'dynamic racing poster style, strong perspective, speed streaks, glossy chunky vehicles with big expressive drivers, vivid sky'),
}

# id: (new Arabic name, new English name, family, child's-eye review)
N = {
 'carnival_race': ('تصادم الفرحة', 'Joy Bumpers', 'RACE', 'The menu is a dark purple screen: no funfair feeling before you play. The karts are the best part, show them big on the menu.'),
 'moto_race': ('دراجات النجوم', 'Star Riders', 'RACE', 'Rider and menu are good but the track, bike and rivals look the same as the other racing games. Needs its own bike family and podium.'),
 'rain_circuit': ('سباق الغيمة المبلولة', 'Splash Circuit', 'RACE', 'A robot on the menu does not match a car race. Needs a rain-racer driver, glowing wet road, umbrellas and puddle splash.'),
 'dune_titans': ('عمالقة الرمال', 'Sand Giants', 'RACE', 'Big trucks are exciting for kids: show wheels bigger than the driver, dust clouds, desert gates. Menu has no key art.'),
 'coastal_drive': ('كورنيش الأبطال', 'Seaside Cruisers', 'COAST', 'Menu is a plain road. Needs a hero car in a sunny seaside scene and a garage of colourful cars.'),
 'sunset_highway': ('طريق الشمس', 'Sunset Road', 'COAST', 'Looks like Coastal Drive. Make it a golden-hour city highway with a different car type (sporty open car) and billboards (blank).'),
 'air_race': ('طيارة الجزر', 'Island Flyers', 'SPACE', 'Floating islands are lovely but the plane is plain: needs a colourful cartoon plane, rivals with faces and ring gates.'),
 'splash_race': ('سباق ماي ماي', 'Splash Pals', 'COAST', 'Otter on menu is good. Pool levels all look alike: give each its own pool (waterpark, beach, lagoon, ice pool).'),
 'summit_rush': ('سباق القمة', 'Peak Dash', 'SNOW', 'Rivals look like adults in jackets: use kid characters in bright snowsuits, fun mountain landmarks.'),
 'rhino_summit': ('وحيد القرن الصغير', 'Little Rhino Rush', 'SNOW', 'Generic blue panel, no rhino shown. Show the baby rhino and cloud mountain on the menu.'),
 'alien_sky': ('سباق ميمو الفضائي', 'Zoomi Space Dash', 'SPACE', 'Dark flat menu, tiny emoji alien. Needs a cute alien racer, floating gates, candy planets.'),
 'ball_scoop': ('شاحنة الكور', 'Ball Truck', 'FUNFAIR', 'Plain teal panel. Needs the happy kid in a big yellow shovel truck with a rain of coloured balls.'),
 'fizz_runner': ('بطل الفوّارة', 'Fizzy Hero', 'RACE', 'Menu is plain blue with no hero. Needs an original hero (not a copy of any brand), city rooftops, bouncy fizz cans.'),
 'jungle_adventure': ('أدم ونور في الأدغال', 'Adam & Nour Jungle', 'DESERT', 'Strong: the owner\'s own children as explorers. Add a title banner and temple-gate level-select.'),
 'happy_farm': ('مزرعة بيبو', 'Bebo\'s Farm', 'TOYTOWN', 'Menu screenshot was blank when the page loaded (check the loading screen: a child sees an empty blue square).'),
 'pumpkin_pie': ('مخبز دبدوب', 'Teddy\'s Bakery', 'TOYTOWN', 'Lovely bear on the menu. Name the bear, show pies and a shop that grows.'),
 'samurai': ('ساموراي الأزهار', 'Blossom Blade', 'HERO', 'Very good menu. Needs a title banner and boss-level key art.'),
 'golden_tail': ('الذيل اللامع', 'Shiny Tail', 'FOREST', 'Nice forest. The plush hero is small: bigger squirrel-like hero and a title ribbon.'),
 'ocean_defense': ('حارس القلعة', 'Reef Guardian', 'OCEAN', 'Beautiful. Hero missing from the menu: add the crowned fish king.'),
 'rhythm': ('رقصة الأسطوانة', 'Dancing Disc', 'NEON', 'Cat DJ is great but the menu is a white list. Make a glowing record stage.'),
 'space_store': ('سوبرماركت الكواكب', 'Planet Market', 'SPACE', 'Strong menu. Keep; add robot cashier characters and aisle levels.'),
 'fox_family': ('ماما ثعلب', 'Mama Fox', 'FOREST', 'Menu shows a road, not the fox family. Show mother and cubs warmly.'),
 'zombie_rooftop': ('أسطح المرح', 'Rooftop Pals', 'NEON', 'Title is hard to read. A friendly name and brighter, funnier green monsters for small kids.'),
 'gum_ball': ('كرة العلكة', 'Bubble Roller', 'FUNFAIR', 'City street with no gum feeling. Make a candy town with a giant happy gum ball.'),
 'deep_sea': ('سمكة صغيرة وكبيرة', 'Little Fish Big Sea', 'OCEAN', 'Green flat menu. Needs a cute orange fish and big friendly neighbours.'),
 'hungry_frog': ('الضفدع الجعان', 'Froggo', 'FOREST', 'Good pond. Give the frog a bigger face and personality.'),
 'frost_coil': ('تنين الثلج الصغير', 'Snowy Dragon', 'SNOW', 'Pretty winter menu but no dragon shown. Show him.'),
 'hero_tower': ('برج الفرسان', 'Knight Tower', 'HERO', 'Great key art. Keep, add title ribbon.'),
 'cloud_dash': ('جري السحاب', 'Cloud Skip', 'SPACE', 'Pastel and pleasant. Needs the cloud-scooter kid on the menu.'),
 'sky_capy': ('كابي طاير', 'Flying Capy', 'SPACE', 'Menu screenshot blank at load (check loading). Show the capybara with balloons.'),
 'marble_dozer': ('جرافة الكور', 'Marble Digger', 'FUNFAIR', 'Pastel shapes background is nice but tiny panel; show the dozer and prizes.'),
 'castaway_raft': ('طوف الجزيرة', 'Island Raft', 'OCEAN', 'Plain blue panel; the raft and the castaway kid should be visible.'),
 'winter_camp': ('مخيم الدفا', 'Cozy Camp', 'SNOW', 'Flat blue menu. Show a campfire, tent and a husky friend.'),
 'squad_shooter': ('فريق الألعاب', 'Toy Squad', 'NEON', 'Dark blue list. Needs toy-soldier squad characters, no real-weapon look.'),
 'archer_bridge': ('قوّاسو الجسر', 'Bridge Archers', 'HERO', 'Dark orange menu. Show the kid archers and the castle bridge.'),
 'creator_tycoon': ('استوديو المبدع', 'Maker Studio', 'TOYTOWN', 'Looks like an office. Make it a colourful kids\' creative studio with a robot buddy.'),
 'pearl_divers': ('صيّادو اللؤلؤ', 'Pearl Pals', 'OCEAN', 'Dark panel over a boat. Show diver kids and glowing pearls.'),
 'honey_farm': ('نحلة العسل', 'Honey Buzz', 'FOREST', 'Bare green field. Needs bees, hives and flowers.'),
 'ice_dragon': ('عرين الجليد', 'Ice Den', 'SNOW', 'List of levels on blue: make a dragon cave poster and a baby dragon.'),
 'hamster_warrior': ('هامي الشجاع', 'Brave Hammy', 'FOREST', 'No hero on the menu. Needs the nut-helmet hamster and a cute logo.'),
 'chomp_maze': ('الأكول', 'Munchy Maze', 'NEON', 'Plain blue panel. Needs the round yellow hero and glowing maze.'),
 'hot_spring': ('قرية الينابيع', 'Steam Village', 'TOYTOWN', 'Tiny panel on a map. Needs warm pools, animals bathing, lanterns.'),
 'hop_world': ('عالم القفز', 'Hop Land', 'FUNFAIR', 'Generic platform backdrop. Needs a hero and candy platforms.'),
 'mars_farm': ('مزرعة المريخ', 'Mars Garden', 'SPACE', 'Plain orange panel. Needs astronaut gardener and glass domes.'),
 'pin_puzzle': ('اسحب الدبوس', 'Pin Rescue', 'HERO', 'Brown screen. Needs the rescued hero and glowing treasure.'),
 'gem_quarry': ('منجم الجواهر', 'Gem Mine', 'DESERT', 'Purple panel only. Show miner kid, carts and sparkling gems.'),
 'sky_ace': ('بطل الغيم', 'Cloud Ace', 'SPACE', 'Murky brown screen. Needs a bright sky and a kid pilot.'),
 'nutmeg_rush': ('سكة الكورة', 'Goal Rush', 'HERO', 'Strong stadium. Needs a kid footballer character on the menu.'),
 'trick_or_treat': ('حلاوة ولا مقلب', 'Treat Street', 'TOYTOWN', 'Good Halloween street, panel is a list. Show costume kids with a candy bag.'),
 'viking_sling': ('مقلاع الفايكنج', 'Viking Fling', 'HERO', 'Needs funny viking kids, brighter sky and the fortress.'),
 'card_battle': ('معركة النيون', 'Neon Duel', 'NEON', 'Tiny panel in a big space. Show the two commanders.'),
 'dino_grow': ('ديناصور يكبر', 'Dino Grow', 'FOREST', 'Forest background good; show the baby dino big.'),
 'ice_rink': ('حلبة الجليد', 'Rink Rumble', 'SNOW', 'Cute houses; show penguin, fox and bear skaters.'),
 'tomb_puzzle': ('لغز المقبرة', 'Tomb Twist', 'DESERT', 'Screenshot blank/dark at load: a child sees nothing. Needs a menu picture.'),
 'sweet_tray': ('صينية الحلويات', 'Sweet Tray', 'TOYTOWN', 'Pink and nice. Show cakes and the baker.'),
 'barrel_knights': ('فرسان البرميل', 'Barrel Knights', 'HERO', 'Racing barrels is funny: show them rolling with faces.'),
 'gummy_squad': ('فريق الجيلي', 'Jelly Gang', 'FUNFAIR', 'Best of the candy games. Keep and add title ribbon.'),
 'fashion_queen': ('أميرة الموضة', 'Fashion Princess', 'TOYTOWN', 'Excellent. Keep.'),
 'rug_cleaning': ('سجّادة نضيفة', 'Clean Rugs', 'TOYTOWN', 'Dull beige menu. Show foam bubbles and the little cleaner.'),
 'temple_army': ('حراس المعبد', 'Temple Guards', 'DESERT', 'Green blocky field. Needs temple and guard characters.'),
 'sky_jumper': ('نطّاط الغيم', 'Cloud Hopper', 'SPACE', 'Doodle style but menu has no hero; add the hero and a rocket.'),
}


# Names a 4-6 year old Egyptian child already understands (everyday words: لودر، موتوسيكل، نبلة، بلي، لبان، كورنيش، كركدن، تلج)
NAMES = {
 'carnival_race': ('عربيات الملاهي', 'Funfair Cars'), 'moto_race': ('سباق الموتوسيكل', 'Motorbike Race'),
 'rain_circuit': ('سباق المطر', 'Rain Race'), 'dune_titans': ('عربيات الصحرا', 'Desert Trucks'),
 'coastal_drive': ('سباق الكورنيش', 'Corniche Race'), 'sunset_highway': ('سباق الغروب', 'Sunset Race'),
 'air_race': ('سباق الطيارات', 'Plane Race'), 'splash_race': ('سباق السباحة', 'Swim Race'),
 'summit_rush': ('سباق التلج', 'Snow Race'), 'rhino_summit': ('الكركدن الصغير', 'Little Rhino'),
 'alien_sky': ('سباق الفضا', 'Space Race'), 'ball_scoop': ('لودر الكور', 'Ball Loader'),
 'fizz_runner': ('جري يا بطل', 'Run Hero'), 'jungle_adventure': ('أدم ونور في الغابة', 'Adam & Nour in the Jungle'),
 'happy_farm': ('مزرعتي الحلوة', 'My Sweet Farm'), 'pumpkin_pie': ('مخبز الدب', 'Bear Bakery'),
 'samurai': ('الساموراي الصغير', 'Little Samurai'), 'golden_tail': ('دينو فوق الشجر', 'Dino on the Trees'),
 'ocean_defense': ('حارس القلعة البحرية', 'Sea Castle Guard'), 'rhythm': ('الرقص على الأسطوانة', 'Dance on the Record'),
 'space_store': ('سوبر ماركت الفضا', 'Space Supermarket'), 'fox_family': ('ماما التعلب', 'Mama Fox'),
 'zombie_rooftop': ('وحوش السطح', 'Roof Monsters'), 'gum_ball': ('كورة اللبان', 'Gum Ball'),
 'deep_sea': ('السمكة الصغيرة', 'Little Fish'), 'hungry_frog': ('الضفدع الجعان', 'Hungry Froggy'),
 'frost_coil': ('تنين التلج', 'Snow Dragon'), 'hero_tower': ('برج الفارس', 'Knight Tower'),
 'cloud_dash': ('جري على السحاب', 'Run on Clouds'), 'sky_capy': ('كابي والبالونات', 'Capy and Balloons'),
 'marble_dozer': ('لعبة البلي', 'Marbles'), 'castaway_raft': ('مركبي الخشب', 'My Wooden Boat'),
 'winter_camp': ('مخيم الشتا', 'Winter Camp'), 'squad_shooter': ('جنود اللعب', 'Toy Soldiers'),
 'archer_bridge': ('حماة الكوبري', 'Bridge Guards'), 'creator_tycoon': ('استوديو المخترع', 'Inventor Studio'),
 'pearl_divers': ('غواص اللولو', 'Pearl Diver'), 'honey_farm': ('مزرعة النحل', 'Bee Farm'),
 'ice_dragon': ('متاهة التنين', 'Dragon Maze'), 'hamster_warrior': ('هامي البطل', 'Hero Hammy'),
 'chomp_maze': ('الأكول', 'Yummy Maze'), 'hot_spring': ('قرية الحمّام الدافي', 'Warm Bath Village'),
 'hop_world': ('عالم النط', 'Jump World'), 'mars_farm': ('مزرعة المريخ', 'Mars Farm'),
 'pin_puzzle': ('شد الدبوس', 'Pull the Pin'), 'gem_quarry': ('منجم الجواهر', 'Gem Mine'),
 'sky_ace': ('طيار السحاب', 'Cloud Pilot'), 'nutmeg_rush': ('ماتش الكورة', 'Football Match'),
 'trick_or_treat': ('حلاوة ولا مقلب', 'Treat or Trick'), 'viking_sling': ('نبلة الفايكنج', 'Viking Slingshot'),
 'card_battle': ('كروت النيون', 'Neon Cards'), 'dino_grow': ('ديناصور يكبر', 'Growing Dino'),
 'ice_rink': ('حلبة التزحلق', 'Skating Rink'), 'tomb_puzzle': ('لغز الهرم', 'Pyramid Puzzle'),
 'sweet_tray': ('صينية الحلويات', 'Sweets Tray'), 'barrel_knights': ('فرسان البراميل', 'Barrel Knights'),
 'gummy_squad': ('فرقة الجيلي', 'Jelly Team'), 'fashion_queen': ('أميرة الموضة', 'Fashion Princess'),
 'rug_cleaning': ('غسيل السجاد', 'Rug Wash'), 'temple_army': ('حراس المعبد', 'Temple Guards'),
 'sky_jumper': ('نطاط الغيم', 'Cloud Jumper'),
}
N = {k: (NAMES[k][0], NAMES[k][1], v[2], v[3]) for k, v in N.items()}

RACING = ['carnival_race', 'moto_race', 'rain_circuit', 'dune_titans', 'coastal_drive', 'sunset_highway', 'air_race', 'splash_race', 'summit_rush', 'rhino_summit', 'alien_sky', 'ball_scoop', 'fizz_runner']
VEH = {
 'carnival_race': 'chunky bumper karts with big round bumpers and animal drivers (raccoon, bunny, cat, bear, fox, panda)',
 'moto_race': 'sport motorbikes with kid riders in colourful helmets (bike colours: purple, green, blue, red)',
 'rain_circuit': 'low rally cars with big headlights, wet-weather tyres, roof umbrellas as a decoration',
 'dune_titans': 'monster pickup trucks with oversized tyres and roll bars, desert paint jobs',
 'coastal_drive': 'sporty convertibles in candy colours, kid driver with sunglasses',
 'sunset_highway': 'sleek coupe cars with glowing tail-lights, golden-hour reflections',
 'air_race': 'cartoon propeller planes with faces on the nose cone, 4 colour schemes (red, blue, yellow, white)',
 'splash_race': 'swimmer characters with goggles and floaties (no vehicle): body poses for dive, stroke, glide',
 'summit_rush': 'runner kids in bright snowsuits (no vehicle): run, slip, boost poses',
 'rhino_summit': 'baby rhino and rival animals running (no vehicle): run, jump, tumble poses',
 'alien_sky': 'little alien on a glowing hoverboard, rivals on comet-skates',
 'ball_scoop': 'big yellow shovel truck with a smiling driver, upgraded versions (wider shovel, magnet, armour)',
 'fizz_runner': 'original blue-suit city hero with goggles running and sliding (no vehicle)',
}

W = []
w = W.append
BASE = ("Polished kids' mobile-game art, cute rounded shapes, saturated friendly colours, clean readable silhouettes, "
        "family friendly, no text, no letters, no logos, no watermark.")

w('# Rehlaty fun games: child\'s-eye review, brand system, new names and every prompt\n')
w('Built by `tools/build_pro_design.py`. **One promise: gameplay, movement and levels stay exactly as they are.** Only the look changes '
  '(names, menus, art, buttons). Names below are proposals: nothing is renamed in the app until you pick.\n')

w('## 1. What a child sees today (honest review of the 60 menus)\n')
w('Method: I opened the start screen of every fun game at phone size and looked at them as a 4-6 year old would, then compared them.\n')
for t in [
 '**Most games open with the same blue/green/orange button panel** over a different background. A child cannot tell the games apart by their entrance, and nothing says "this is a special place".',
 '**No game shows the app\'s own characters.** Adam and Nour (the logo) are never seen inside the games, so the games feel like separate apps.',
 '**Many menus show no hero.** The hero is the thing a child falls in love with; about 25 menus have only a panel (Chomp Maze, Fizz Man, Ice Dragon, Alien Sky, Honey Farm, Tomb Puzzle, Mars Farm, Pin Puzzle, Sky Jumper and others).',
 '**Back/exit buttons are different in every game** (arrow top-right, round X, a long "خروج" bar, a left arrow). A child needs the same back button, in the same place, in every game.',
 '**Names are descriptive or borrowed** (Hamster Warrior, Fizz Man, Pull the Pin, Ice Rink Brawl). Kids attach to short, funny, own names with a character behind them.',
 '**Racing games look alike**: same road, same panel, similar vehicles. Cars, bikes, karts, trucks and planes each need their own garage, drivers and tracks.',
 '**Levels inside a game differ only by colour** in most games (see the earlier audit): no per-level pictures.',
 '**Three menus looked blank for a moment** (Happy Farm, Sky Capy, Tomb Puzzle): a child sees an empty square while loading. Every game needs a loading screen with Adam and Nour.',
 '**Strong ones to keep as the quality bar:** Fashion Queen, Samurai, Hero Tower, Space Store, Golden Tail, Ocean Defense, Rhythm, Gummy Squad.',
]: w(f'- {t}')
w('')

w('## 2. The brand system (made once, used in all games)\n')
w('- **Adam & Nour** (the logo children) are the app\'s mascots. In each game they appear small: peeking from a corner of the menu, on the loading screen and on the win screen, dressed for that game (pilot, farmer, diver, racer...).')
w('- **Logo badge**: a small round Adam-and-Nour-with-map-pin sticker, bottom corner of every menu and the loading screen. No words needed.')
w('- **One back button for every game**: round, same size, same place (top-left corner, 64 dp, 24 dp from the edges), glossy violet with a thick white arrow and a white outline, never hidden by the game. Same pause/settings panel in all games (sound, music, restart, home).')
w('- **Titles are drawn in code** (Arabic text on a blank ribbon the picture provides): AI pictures never contain letters.')
w('- **Every game has one of 11 style families** (below) so neighbours on the games page do not look alike, while the app still feels like one brand.\n')
w('### Style families\n')
w('| Family | Look |\n|---|---|')
for k, (n, d) in FAM.items(): w(f'| **{n}** | {d} |')
w('')

w('## 3. New names, style and what to fix, game by game\n')
w('Names use everyday Egyptian words a 4-6 year old already knows (لودر، موتوسيكل، نبلة، بلي، لبان، كورنيش، كركدن، تلج، دينو), are short, say what the game is, and carry no brand. Old names like «بطل الفوّارة» were dropped because a child cannot guess what they mean. English names are for the English interface.\n')
w('| Game id | Now | New name (AR) | New name (EN) | Style | Child\'s-eye review |')
w('|---|---|---|---|---|---|')
for gid in N:
    ar, en, fam, note = N[gid]
    now = A.G[gid][0] if gid in A.G else gid
    w(f'| {gid} | {now} | **{ar}** | {en} | {FAM[fam][0]} | {note} |')
w('')

# ---------- prompts
w('## 4. Prompts: shared pieces (make these first, they go into every game)\n')
w(f'**Base style line** (put before every prompt unless it already has its own style): _{BASE}_\n')
S = []
def SP(code, kind, text): S.append((code, kind, text)); w(f'**{code} · {kind}** — {text}\n')
SP('B1', 'LOGO BADGE', "Round sticker badge, the two cartoon children Adam (boy, curly dark hair, blue shirt) and Nour (girl, two ponytails with pink bows) smiling and leaning together in front of a red map pin, thick white outline, soft shadow, plain white background, no text. Square, centred.")
SP('B2', 'MASCOT SHEET', "Character sheet on plain white: Adam and Nour in 8 outfits side by side, each pair in a pose: racing helmets, pilot caps, farmer hats, diver masks, snow suits, space suits, knight armour toys, explorer hats. Same faces and proportions in every outfit, cute 3D-cartoon, no text.")
SP('B3', 'BACK BUTTON', "Game UI sheet on plain white: the same round BACK button in 3 states (normal, pressed, disabled): glossy violet sphere, thick white arrow pointing left, thick white outline, soft drop shadow. Large and simple, no text.")
SP('B4', 'PAUSE PANEL KIT', "Game UI sheet on plain white: a rounded pause panel frame (empty middle), a ribbon banner (blank), 6 round icon buttons (resume, restart, home, sound on, sound off, music), all glossy violet and white, chunky, no text or numbers.")
SP('B5', 'LEVEL SELECT KIT', "Game UI sheet on plain white: level buttons in 4 states (open, locked with padlock, completed with 3 stars, current glowing), rounded, glossy, plus a long banner and a ribbon, bright and friendly, no numbers, no text.")
SP('B6', 'CURRENCY ICONS', "Icon sheet on plain white: coin, star (3 sizes), heart, gem, key, medal, gift box, trophy, all glossy and rounded, same style, no text.")
SP('B7', 'LOADING SCREEN', "Wide 16:9 loading screen background: soft colourful sky, Adam and Nour peeking in from the bottom-left corner waving, a blank ribbon in the lower middle for a progress bar, no text.")
SP('B8', 'RESULT PANEL KIT', "Game UI sheet on plain white: a large result panel frame with a blank ribbon on top and room for three stars, buttons 'next' (arrow), 'replay' (circular arrow), 'home' (house), all glossy and rounded, no text.")
for k, (n, d) in FAM.items():
    SP(f'B9-{k}', f'TITLE RIBBON · {n}', f"Blank title banner on plain white for a game title (no text): a wide ribbon or sign in the style: {d}. Space inside for a title. Includes a small matching badge on each side.")
w('')

w('## 5. Prompts per game (vehicles and racing first)\n')
w('Order inside a game: menu key art, hero/vehicles, level panoramas, objects, UI skin, loading, win, VFX, card. Every prompt carries the game\'s style family.\n')

order = [g for g in RACING if g in N] + [g for g in N if g not in RACING]
total = len(S)
for gid in order:
    ar, en, fam, note = N[gid]
    fname, fdesc = FAM[fam]
    ga = A.G.get(gid)
    concept = ga[1] if ga else gid
    hero = ga[2] if ga else ''
    things = ga[3] if ga else ''
    lv = A.levels_of(gid, ga[4] if ga else [])
    style = f'Style "{fname}": {fdesc}. {BASE}'
    w(f'\n### {gid} — {ar} / {en}  ·  style: {fname}\n')
    w(f'_{concept}._ Hero: {hero}. Things: {things}.\n')
    w(f'**Child\'s-eye note:** {note}\n')
    n = [0]
    def P(kind, text):
        global total
        n[0] += 1; total += 1
        w(f'**{gid}-{n[0]} · {kind}** — {text}\n')
    P('MENU KEY ART', f'{style} Wide 16:9 menu key art for "{en}", a game about {concept}: the hero ({hero}) large in the left third, the game\'s signature place behind, Adam and Nour small in the lower corner, empty calm area in the centre-right for buttons, no text.')
    if gid in VEH:
        P('VEHICLES / CHARACTERS', f'{style} Turnaround sheet on plain white: {VEH[gid]}. Show the player\'s one in front, side, back and 3/4 views, then 5 rival variants with different colours and driver faces. Same design family, no text.')
        P('GARAGE / SHOP', f'{style} Icon sheet on plain white: 12 upgrade and customisation items for {VEH[gid]}: 4 paint colours, 3 wheel/tyre sets, 3 stickers/decals (no letters), spoiler, boost flame, trophy.')
        P('TRACK KIT', f'{style} Sprite sheet on plain white: racing track pieces for "{en}": start gate, checkpoint arch, boost pad, barrier, cones, finish line, grandstand, trees/rocks/props that fit the world, signs (blank).')
        P('PODIUM', f'{style} Wide 16:9 podium scene with no text: three winners on a 1-2-3 podium, confetti, trophy, the hero in the middle, world backdrop of "{en}".')
        P('SPEED VFX', f'{style} Sprite sheet on plain white, 4x3 grid: speed lines, drift smoke, tyre marks, boost flame, dust cloud, water splash, sparks, star burst, confetti, impact ring, glow trail, checkpoint flash. Soft and bright.')
    else:
        P('HERO / OBJECTS', f'{style} Sprite sheet on plain white: the hero ({hero}) in 6 poses (idle, move, jump or act, hit, win, sad-but-cute), same design in every pose, then a second row with the main things: {things}.')
    for i, lname in enumerate(lv, 1):
        P(f'PANORAMA {i}/{len(lv)}', f'{style} Wide 21:9 level backdrop, no characters, no text. Level "{lname}" of a game about {concept}: its own palette, weather, time of day and landmarks, instantly different from the other levels.')
    if not lv:
        for i, mood in enumerate(['bright morning', 'golden sunset', 'magical night'], 1):
            P(f'PANORAMA {i}/3', f'{style} Wide 21:9 backdrop, no characters, no text, {mood} version of the world of "{en}".')
    P('UI SKIN', f'{style} Game UI sheet on plain white in this game\'s own style: a menu panel frame, 3 big buttons (play, levels, shop) shaped like the game\'s world, a score chip, progress bar, heart and star, no text.')
    P('LOADING + WIN', f'{style} Two wide 16:9 pictures, no text: (1) loading screen with Adam and Nour dressed for "{en}" peeking from a corner of the game world; (2) a win screen with the hero cheering, confetti and three big stars.')
    P('LOGO EMBLEM', f'{style} A round emblem for "{en}" on plain white: the hero\'s face or the signature object inside a glossy ring with small stars, no text (the title is added in code).')
    P('CARD', f'Square game-card picture for "{en}": the hero in a dynamic pose in the signature place, bright, empty strip at the bottom, no text. {style}')

w(f'\n\n---\n**Totals: {len(N)} games, {total} prompts** (shared: {len(S)}). Racing games ({len(RACING)}) have the extra vehicle, garage, track, podium and effects prompts.\n')
open('docs/PRO_GAMES_DESIGN_AND_PROMPTS.md', 'w', encoding='utf8').write('\n'.join(W))
print(len(N), 'games', total, 'prompts')
