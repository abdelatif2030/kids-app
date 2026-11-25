# Builds docs/FUN_GAMES_ART_AUDIT_AND_PROMPTS.md: for every fun game, what pictures exist, what is missing, and ready-to-paste prompts.
# Run: python -X utf8 tools/build_art_audit.py
import json, os, re

STYLE = ("Polished kids' mobile game art, cute 3D-cartoon look, soft rounded shapes, saturated friendly colours, clean lighting, "
         "family friendly, no text, no letters, no logos, no watermark.")
BG = "Wide 16:9 scenic background, no characters, no UI, no text, calm area in the centre for a menu panel, strong depth (foreground, middle, far)."
PANO = "Wide 21:9 sky-and-horizon panorama for a 3D game level, no characters, no text, no UI, one clear mood and colour palette, far mountains/city/sea at the horizon."
SHEET = "Sprite sheet on a plain flat white background, items evenly spaced in a grid, each fully visible with margin, same style and lighting, no text, no shadows on the ground."
HERO = "Hero poses sheet on a plain flat white background: the same character in 3 poses (idle, action, celebrate) side by side, full body, identical design, no text."
CARD = "Square game-menu card illustration, the hero in a dynamic pose in front of the game's signature place, bright and exciting, space left empty at the bottom, no text."

# id: (arabic title, concept, hero, things, fallback level moods)
G = {
 'carnival_race': ('سباق ملاهي الأبطال', 'bumper-car race at a funfair', 'cute animal drivers (raccoon, bunny, cat, bear, fox, panda) in bumper karts', 'teacups, ferris wheel, balloon arches, boost pads', []),
 'jungle_adventure': ('مغامرة الأدغال', '2D jungle auto-runner explorer', 'brave kid explorers Adam and Nour', 'beetles, bats, spikes, jade relics, totems, vine bridges', ['Jungle Trail', 'Sunken Ruins', 'Sun Temple']),
 'happy_farm': ('مزرعتي السعيدة', 'relaxing combine-harvester farm', 'cheerful farmer kid and a blue combine harvester', 'wheat, corn, sunflowers, barn, trailer, animal pens', []),
 'pumpkin_pie': ('مخبز اليقطين', 'cozy bakery that grows by standing on pads', 'baker kid with a chef hat and animal customers', 'pies, ovens, counters, pumpkins, helper robots', ['Tiny Bakery', 'Garden Cafe', 'Market Square', 'Cozy Mall']),
 'samurai': ('سيف الساموراي', 'friendly samurai auto-slash action', 'young samurai kid with a bright katana', 'paper-lantern oni, petals, torii gate, oni boss', ['Cherry Garden', 'Bamboo Forest', 'Moonlit Castle']),
 'golden_tail': ('الذيل الذهبي', 'treetop chase with plush animals', 'plush dino with a red bandana', 'mushroom bounce pads, slides, rope bridges, plush animals', []),
 'ocean_defense': ('دفاع القلعة البحرية', 'underwater bubble-defense of a sand castle', 'crowned clownfish-like fish king (original design)', 'purple enemy fish, octopus boss, shells, coral towers', []),
 'moto_race': ('سباق الدراجات النارية', 'coastal motorbike circuit', 'fox rider on a sport bike', 'animal rival riders, nitro flames, palm trees, barriers', []),
 'rhythm': ('البقاء على الإيقاع', 'animals on a spinning record dodging the tonearm', 'little dancing animals (bear, bunny, duck)', 'vinyl record, tonearm, notes, jukebox', []),
 'space_store': ('متجر الفضاء الذكي', 'space-station grocery store manager', 'astronaut shopkeeper kid and robot cashiers', 'baskets, shelves, checkouts, glowing fruit, airlocks', ['Starter Aisle', 'Fruit Deck', 'Robot Row', 'Galaxy Mall']),
 'splash_race': ('سباق السباحة العجيب', 'swimming race on the beat with dives', 'goggled otter swimmer', 'floaties, noodle spinners, wave walls, pool lanes', []),
 'fox_family': ('أم الثعلب ومغامرات العيور', 'fox mother crossing roads with her cubs', 'mother fox and 3 cubs', 'cars, trams, leaves, snowdrifts, crossing signs', []),
 'air_race': ('سباق الطائرات الجوي', 'air race through rings and arches', 'cheerful pilot kid with a red cartoon plane', 'boost rings, arches, bridges, rival planes (white racer, blue jet, yellow biplane)', []),
 'zombie_rooftop': ('البقاء على قيد الحياة', 'rooftop zombie shooter, no blood', 'tough kid hero with a toy blaster on a roof', 'green cartoon zombies, gas tanks, weapon crates, launch pad', []),
 'gum_ball': ('كرة العلكة العملاقة', 'giant sticky gum ball rolling through a candy town', 'a big pink gum ball with a happy face', 'candy houses, lollipop trees, ramps, wafer bridges', ['Candy Street', 'Lollipop Hill', 'Chocolate River', 'Cloud Gummies']),
 'deep_sea': ('أسماك الأعماق', 'side-view eat-and-grow fish game', 'small orange fish that grows', 'bigger and smaller fish, jellyfish, shipwreck, treasure', []),
 'coastal_drive': ('سباق الطريق الساحلي', 'coastal highway traffic race', 'kid driver in a red convertible', 'traffic cars, trucks, buses, boost pads, signs', []),
 'hungry_frog': ('لعبة الضفدع الجائع', 'frog catching flies and jumping between lily pads', 'round green frog with a long tongue', 'flies, dragonflies, lily pads, lotus flowers', []),
 'summit_rush': ('سباق القمة', 'snowy slope running race vs 3 rivals', 'kid runner in a red jacket', 'boulders, snowballs, logs, ice pads, crystals, rival runners', ['Pine Slope', 'Crystal Ridge', 'Storm Peak']),
 'frost_coil': ('طريق التنين الجليدي', 'ice-tube rotating puzzle', 'small ice dragon', 'ice tubes, portal, cross tiles, frozen tiles, snow', ['Snow Garden', 'Frozen Lake', 'Ice Palace', 'Aurora Peak']),
 'hero_tower': ('برج الأبطال', 'tower-climbing power puzzle', 'little knight hero', 'slimes, goblins, skeletons, crystals, troll/sorcerer/dragon bosses', ['Stone Tower', 'Sorcerer Spire', 'Dragon Keep']),
 'cloud_dash': ('ركضة السحاب', 'three-lane pastel cloud runner', 'cute kid on a cloud scooter', 'cloud gaps, slimes, spikes, wind, shields, stars', ['Pastel Sky', 'Sunset Clouds', 'Rainbow Peaks', 'Night Stars', 'Candy Clouds']),
 'sky_capy': ('سكاي كابي', 'capybara floating with balloons collecting stars', 'friendly capybara with a balloon bunch', 'balloons, clouds, birds, stars', ['Morning Sky', 'Golden Hour', 'Cloud Garden', 'Starry Night']),
 'marble_dozer': ('جرّافة الكرات', 'bulldozer pushing marbles off a platform', 'small yellow bulldozer', 'marbles, coins, platform, ramps, prizes', ['Toy Table', 'Candy Floor', 'Arcade Night', 'Gold Vault']),
 'castaway_raft': ('طوف الناجي', 'hook-and-build raft survival', 'castaway kid on a raft', 'planks, barrels, hooks, sharks (cute), islands, treasure chest', []),
 'winter_camp': ('معسكر الشتاء', 'cozy winter camp builder', 'kid in a puffy coat with a husky', 'tents, campfire, logs, snowmen, lanterns', ['Pine Camp', 'Frozen Lake', 'Aurora Night', 'Mountain Lodge']),
 'rain_circuit': ('سباق حلبة المطر', 'rainy-circuit kart race', 'racing animal driver in a rain slicker', 'puddles, wet road, thunder clouds, umbrellas, bridges', []),
 'squad_shooter': ('رماة الفريق', 'squad shooter on an industrial night road', 'colourful toy squad of 3 soldiers', 'toy tanks, crates, barrels, bridges', ['Night Road', 'Factory Yard', 'Harbour Dock']),
 'archer_bridge': ('رماة الجسر', 'archers defending a fiery bridge', 'kid archers in medieval costume', 'cartoon trolls, torches, arrows, bridge, castle gate', ['Stone Bridge', 'Lava Bridge', 'Ice Bridge']),
 'alien_sky': ('سباق السماء الفضائي', 'alien sky obstacle race', 'little alien racer on a hoverboard', 'floating rocks, rings, comets, space gates', ['Purple Nebula', 'Crystal Belt', 'Ring Planet']),
 'rhino_summit': ('سباق القمة (وحيد القرن)', 'cloud-mountain obstacle race', 'baby rhino runner', 'cloud steps, logs, rocks, gates, rivals', ['Meadow Ridge', 'Cloud Pass', 'Sky Summit']),
 'sunset_highway': ('الطريق عند الغروب', 'sunset highway traffic race', 'kid driver in a sporty car', 'traffic cars, trucks, boost pads, billboards (blank)', []),
 'creator_tycoon': ('مبدع الذكاء', 'AI creator tycoon: make content and grow a studio', 'young creator with a laptop', 'cameras, robots, trophies, upgrades', []),
 'pearl_divers': ('غوّاصو اللؤلؤ', 'divers collecting pearls in a cave', 'cute diver kid with a helmet', 'pearls, oysters, jellyfish, anchors', []),
 'honey_farm': ('مزرعة العسل', 'bee farm manager', 'bee keeper kid and bees', 'hives, flowers, honey jars, bears (cute)', ['Spring Meadow', 'Sunflower Field', 'Orchard', 'Candy Garden']),
 'ice_dragon': ('التنين الجليدي', 'ice-dragon maze', 'baby ice dragon', 'ice walls, snowflakes, fire crystals, portal', []),
 'ball_scoop': ('جرف الكرات', 'scoop balls on a road with a shovel truck', 'smiling kid driver of a yellow shovel truck', 'coloured balls, gates, walls, giant bank', ['Candy Road', 'City Road', 'Sunset Highway', 'Rainbow Bridge']),
 'hamster_warrior': ('الهامستر المحارب', '3-lane hamster warrior runner', 'nut-helmet hamster hero seen from behind', 'sprout monsters, card gates, bosses', []),
 'chomp_maze': ('مطاردة المتاهة', 'neon maze dot-eater', 'round yellow chomper', 'colourful friendly ghosts, fruit, power orbs', ['Neon Cube', 'Candy Maze', 'Space Maze', 'Jungle Maze']),
 'fizz_runner': ('فيزمان', 'city runner superhero', 'original blue-suited fizz hero with goggles', 'cans, obstacles, cars, coins', []),
 'hot_spring': ('قرية الينابيع الساخنة', 'hot-spring village management', 'cute bath keeper kid', 'pools, steam, animals bathing, lanterns', ['Snow Village', 'Autumn Valley', 'Sakura Hill', 'Night Lights']),
 'hop_world': ('عالم القفز', 'hop-between-platforms world', 'bouncy round hero', 'platforms, coins, springs, clouds', ['Meadow Hops', 'Candy Hops', 'Space Hops', 'Ice Hops']),
 'mars_farm': ('مستعمرة مريخ الزراعية', 'farming colony on Mars', 'little astronaut farmer', 'domes, space crops, rovers, robots', []),
 'pin_puzzle': ('اسحب الدبوس', 'pull-the-pin rescue puzzle', 'little hero to rescue', 'pins, lava, treasure, water, monsters', ['Castle Room', 'Cave Room', 'Garden Room', 'Pirate Room']),
 'gem_quarry': ('محجر الجواهر', 'gem quarry mining idle game', 'miner kid with a helmet lamp', 'gems, carts, crates, drills', []),
 'sky_ace': ('بطل السماء', 'sky ace flying game', 'kid pilot with a toy plane', 'clouds, stars, rival planes, rings', ['Blue Sky', 'Sunset Sky', 'Storm Sky', 'Star Sky']),
 'nutmeg_rush': ('كرة المراوغة', 'football dribble through defenders', 'kid footballer', 'defenders, goals, stands, cones', []),
 'trick_or_treat': ('الحلو أو المقلب', 'trick-or-treat crowd runner', 'kid in a costume with a candy bag', 'houses, dogs, candy, lanterns', []),
 'viking_sling': ('مقلاع الفايكنج', 'viking slingshot castle smashing', 'cute viking kids', 'blocks, goblins, boss fortress, axes, bombs', ['Wooden Fort', 'Stone Keep', 'Ice Fortress', 'Fire Tower']),
 'card_battle': ('معركة البطاقات', 'neon card battle', 'robot and alien commanders', 'unit cards, towers, sparks', []),
 'dino_grow': ('ديناصور يكبر', 'dinosaur eat-and-grow', 'baby raptor that grows into a giant', 'eggs, fruit, small animals, rocks', []),
 'ice_rink': ('حلبة الجليد', 'ice-rink brawl with soft bumps', 'penguin, fox and bear skaters', 'goblins (cute), pucks, ice, boards', []),
 'tomb_puzzle': ('لغز المقبرة', 'tomb sliding-block puzzle', 'little explorer', 'blocks, statues, keys, doors', ['Sand Tomb', 'Jade Tomb', 'Ice Tomb', 'Gold Tomb']),
 'sweet_tray': ('صينية الحلويات', 'sweet-tray stacking', 'cheerful baker', 'cakes, cookies, trays, ovens', ['Home Kitchen', 'Bakery', 'Wedding Hall', 'Candy Factory']),
 'barrel_knights': ('فرسان البراميل', 'barrel-rolling knights cup', 'small knight in a barrel', 'barrels, traps, castle, dragon', []),
 'gummy_squad': ('فريق الجيلي', 'gummy squad runner', 'gummy bear squad', 'gummy enemies, candy walls, gates', ['Gummy Park', 'Sugar Beach', 'Cola Cave', 'Jelly Castle']),
 'fashion_queen': ('ملكة الأزياء', 'dress-up and runway', 'smiling princess character', 'dresses, shoes, hairstyles, crowns, rooms', []),
 'rug_cleaning': ('تنظيف السجاد', 'rug cleaning satisfaction', 'young cleaner with a scrubber', 'rugs, brushes, foam, plants', []),
 'temple_army': ('جيش المعبد', 'temple army defense', 'little temple guard', 'statues, gates, scrolls, enemies', ['Sun Temple', 'Moon Temple', 'Jade Temple']),
 'sky_jumper': ('قفّاز السماء', 'doodle-style endless jumper', 'doodle kid with springs', 'platforms, monsters, rockets, clouds', []),
 'girls_world': ('عالم الأميرات', 'princess world mini-games', 'a princess and her pets', 'dresses, castle rooms, pets, jewels', []),
}

info = {g['id']: g for g in json.load(open('build/games_info.json', encoding='utf8'))}


def levels_of(gid, fallback):
    g = info.get(gid) or {}
    lv = (g.get('lv') or [[]])[0] if g.get('lv') else []
    names = []
    if gid in ('jungle_adventure', 'ball_scoop', 'trick_or_treat', 'gem_quarry'):
        lv = []  # those lists are upgrades/hats/colours, not worlds
    for x in lv:
        if re.fullmatch(r"[A-Za-z][A-Za-z '\-]+", x) and not x.islower():
            names.append(x)
    names = [n for n in names if n not in ('Adam', 'Nour', 'Hats', 'Tops', 'Shorts', 'Shoes')]
    return names or list(fallback)


def inv(gid):
    d = f'assets/games/{gid}'
    if gid == 'sunset_highway': d = 'assets/games/sunset_highway'
    if not os.path.isdir(d): return None
    fl = set(os.listdir(d))
    art = sorted(os.listdir(d + '/art')) if 'art' in fl else []
    return {'poster': 'poster.webp' in fl, 'hero': 'hero.webp' in fl, 'card': 'card.webp' in fl, 'music': 'music.mp3' in fl, 'art': art, 'models': 'models' in fl}



def score(gid, iv, nlv):
    sc = 0
    if iv is None: return 20
    if not iv['poster']: sc += 4
    if not iv['hero']: sc += 3
    if not iv['music']: sc += 1
    na = len(iv['art'])
    if na < 3: sc += 5
    if nlv >= 2 and na < nlv: sc += min(nlv, 8)
    if na < 3 and not iv['models']: sc += 2  # code-drawn and no real models either
    return sc


VFX = ("Sprite sheet on a plain flat white background, 4x3 grid of cute effect sprites: sparkle burst, star pop, dust puff, "
       "splash, speed lines, impact ring, confetti, heart pop, coin glint, smoke puff, glow ring, magic swirl. Soft, bright, no text.")
UI = ("Game UI kit on a plain flat white background: 3 round buttons (play, pause, back) with big simple icons, a wide rounded panel frame, "
      "a progress bar (empty and full), a heart, a star, a coin counter chip, a lock and a check mark. Chunky, glossy, one colour family matching the game, no text or numbers.")
END = "Wide 16:9 celebration scene with no text: the hero cheering with confetti, a trophy and three big stars, warm glowing background matching the game's world."
PROPS = ("Sprite sheet on a plain flat white background: 10 to 12 scenery props that belong to this level (trees, rocks, signs, buildings, plants or machines as fits), "
         "each fully visible, same style, small enough to repeat along a track, no text.")
REAL = {'carnival_race', 'happy_farm', 'zombie_rooftop', 'coastal_drive', 'sunset_highway'}

games = []
for gid, (ar, concept, hero, things, fb) in G.items():
    iv = inv(gid)
    lv = levels_of(gid, fb)
    games.append((score(gid, iv, len(lv)), gid, ar, concept, hero, things, fb, iv, lv))
games.sort(key=lambda t: -t[0])


def tier_of(sc):
    return 'P1' if sc >= 10 else ('P2' if sc >= 5 else 'P3')


out = []
w = out.append
w('# Fun games: full picture audit, priorities and prompts\n')
w('Built by `tools/build_art_audit.py` from the real asset folders and the level lists in each game. '
  'Goal: every game looks strong and professional, **every level is a different place**, and every screen (menu, level, win) pulls the child back in.\n')
w('## How to use this file\n')
w('1. Work **from the top**: P1 games first (the weakest), then P2, then P3. Inside a game the prompts are in the order that improves it most.\n')
w(f'2. **Style line** (paste before each prompt): _{STYLE}_\n')
w('3. Send the pictures back (any order; keep the prompt code in the file name, e.g. `P1-03-2.png`). Claude cuts them, converts to WebP, wires them in, tests every level and deploys to the demo.\n')
w('4. Kinds: MENU menu backdrop, HERO character poses, PANORAMA one per level (makes levels look different), SHEET objects/enemies/poses, PROPS per-level scenery, UI buttons and bars, VFX effects, END win scene, ICONS rewards, CARD menu card.\n')
w('5. Rules: no text or letters in pictures, no real brands, no known cartoon characters, no blood, nothing cut at the edges. Levels marked (suggested) were invented because the game has no named levels: change them if you like.\n')

rows, body, tiers = [], [], {}
total = 0
counter = {'P1': 0, 'P2': 0, 'P3': 0}
for sc, gid, ar, concept, hero, things, fb, iv, lv in games:
    tier = tier_of(sc)
    counter[tier] += 1
    gcode = f'{tier}-{counter[tier]:02d}'
    tiers.setdefault(tier, []).append(gid)
    nlv = len(lv)
    named = bool((info.get(gid) or {}).get('lv')) and gid not in ('jungle_adventure', 'ball_scoop', 'trick_or_treat', 'gem_quarry')
    suggested = '' if (named and lv and lv != list(fb)) else (' (suggested)' if nlv else '')
    miss = []
    if iv is None: miss.append('no asset folder')
    else:
        if not iv['poster']: miss.append('menu background')
        if not iv['hero']: miss.append('hero picture')
        if not iv['music']: miss.append('music')
        if len(iv['art']) < 3: miss.append('in-game art (code-drawn)')
    if nlv >= 2 and (iv is None or len(iv['art']) < nlv): miss.append(f'{nlv} level panoramas')
    rows.append((tier, sc, gid, ar, nlv, 'yes' if iv and iv['poster'] else 'NO', 'yes' if iv and iv['hero'] else 'NO', len(iv['art']) if iv else 0, '; '.join(miss) or 'only polish'))
    b = [f'\n### [{gcode}] {gid} — {ar} (score {sc})\n',
         f'_{concept}._ Hero: {hero}. Things: {things}.\n',
         f"Now: poster {'yes' if iv and iv['poster'] else 'NO'}, hero {'yes' if iv and iv['hero'] else 'NO'}, card {'yes' if iv and iv['card'] else 'NO'}, "
         f"music {'yes' if iv and iv['music'] else 'NO'}, art files {len(iv['art']) if iv else 0}" + (', real 3D models' if iv and iv['models'] else '')
         + f". Levels: {nlv or 'one continuous'}{suggested}. Missing: {'; '.join(miss) or 'only polish'}.\n"]
    cnt = [0]

    def P(kind, text):
        global total
        cnt[0] += 1
        total += 1
        b.append(f'**{gcode}-{cnt[0]} · {kind}** — {text}\n')

    if not iv or not iv['poster']:
        P('MENU', f'{BG} Main-menu backdrop for a game about {concept}; the signature place of the game; hero absent.')
    if not iv or not iv['hero']:
        P('HERO', f'{HERO} Character: {hero}.')
    if nlv:
        for i, name in enumerate(lv, 1):
            P(f'PANORAMA {i}/{nlv}', f'{PANO} Level "{name}" of a game about {concept}. It must look instantly different from the other levels (own palette, weather, time of day, landmarks). Mood: {name}.')
    else:
        for i, mood in enumerate(['bright morning', 'golden sunset', 'magical night'], 1):
            P(f'PANORAMA {i}/3', f'{PANO} Scene for a game about {concept}, {mood} version, landmarks that fit the game.')
    if not iv or len(iv['art']) < 3:
        P('SHEET', f"{SHEET} The hero's 6 animation poses (run 1, run 2, jump, hit, win, idle) of {hero}, same design in every pose.")
    P('SHEET', f'{SHEET} Main objects of the game ({concept}): {things}. 8 to 12 items, bright and readable at small size.')
    if nlv >= 2 and (iv is None or len(iv['art']) < nlv + 3):
        for i, name in enumerate(lv[:4], 1):
            P(f'PROPS {i}', f'{PROPS} Level "{name}" in a game about {concept}.')
    if not iv or len(iv['art']) < 6:
        P('UI', f'{UI} Game: {concept}.')
        P('VFX', VFX)
        P('END', f'{END} Hero: {hero}.')
    P('ICONS', f'{SHEET} 12 reward and upgrade icons for a game about {concept}: coin, star, gem, shield, magnet, heart, speed boost, key, chest, medal, crown, gift. Glossy, round.')
    P('CARD', f'{CARD} Game: {concept}. Hero: {hero}.')
    body.extend(b)

w('## Order of work\n')
for t, lab in (('P1', 'P1 — weakest: code-drawn levels, no menu or hero art'), ('P2', 'P2 — needs per-level art or missing pieces'), ('P3', 'P3 — already decent: finishing touches')):
    w(f'**{lab}** ({len(tiers.get(t, []))} games): ' + ', '.join(tiers.get(t, [])) + '\n')
w('\n## Summary table (sorted by priority)\n')
w('| Tier | Score | Game | Title | Levels | Menu bg | Hero | Art files | Missing |')
w('|---|---|---|---|---|---|---|---|---|')
for r in rows: w('| ' + ' | '.join(str(x) for x in r) + ' |')
w(f'\n**{len(rows)} games, {total} prompts.**\n')
w('\n## Prompts, in priority order\n')
out.extend(body)
open('docs/FUN_GAMES_ART_AUDIT_AND_PROMPTS.md', 'w', encoding='utf8').write('\n'.join(out))
print(len(rows), 'games', total, 'prompts', {k: len(v) for k, v in tiers.items()})
