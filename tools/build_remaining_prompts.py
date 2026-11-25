# Builds docs/REMAINING_PROMPTS_FOR_INSTINCT.md: every prompt still needed for the fun games, per game, in order, with unique places.
# Run from the repo root: python -X utf8 tools/build_remaining_prompts.py
import sys, json, collections
sys.path.insert(0, 'build'); sys.path.insert(0, 'tools')
src = open('tools/build_pro_design.py', encoding='utf8').read().split('\nW = []')[0]
ns = {}
exec(compile(src, 'x', 'exec'), ns)
import pro_games_data as P
N, FAM, VEH, A = ns['N'], ns['FAM'], ns['VEH'], ns['A']

DONE_FULL = {'moto_race', 'carnival_race', 'coastal_drive', 'sunset_highway', 'air_race', 'splash_race', 'hamster_warrior'}
PARTIAL = {
    'alien_sky': 'key art done; backdrops 1-2 generated (not installed); NEEDS backdrop 3 + UI skin + pills',
    'rhino_summit': 'key art done; NEEDS 3 backdrops + UI skin + pills',
    'summit_rush': 'key art + 3 backdrops done; NEEDS UI skin + pills',
    'rain_circuit': 'key art + UI skin done; NEEDS 6 level backdrops',
    'dune_titans': 'key art + UI skin done; NEEDS 6 level backdrops',
    'ball_scoop': 'key art done; NEEDS level backdrops + UI skin + pills',
    'fizz_runner': 'key art done (original hero); NEEDS 6 backdrops + UI skin + pills',
}
FIRST = ['alien_sky', 'rhino_summit', 'summit_rush', 'rain_circuit', 'dune_titans', 'ball_scoop', 'fizz_runner']
USED_KW = ['alexandria', 'qaitbay', 'cairo tower', 'pyramid', 'giza', 'sphinx', 'luxor', 'karnak', 'abu simbel', 'siwa', 'dahab', 'aswan', 'saint catherine', 'mount sinai',
           'matrouh', 'suez', 'ain sokhna', 'alamein', 'white desert', 'port said', 'gouna', 'airport', 'new capital', 'library of alexandria', 'montaza', 'baron', 'aqua park',
           'dream park', 'qarun', 'moses', 'kilimanjaro', 'alps', 'moqattam', 'black desert', 'eastern desert', 'paris', 'sinbad', 'wadi el-rayan', 'red sea', 'kasr el-nile',
           'nile bridge', 'grand egyptian', 'eid', 'khan el-khalili', 'philae', 'nubian']
# (name, scene, tags)
POOL = [
 ('Khan El-Khalili Bazaar', 'a glowing old Cairo bazaar with hanging brass lanterns, carpets and spice stalls at dusk', 'city night fun cozy'),
 ('Cairo Citadel', 'Salah El-Din Citadel on its hill with the Mohamed Ali Mosque domes and two slim minarets at golden hour', 'city hero temple'),
 ('Al-Azhar Park', 'a green hillside park over old Cairo with fountains, palm paths and minarets in the haze', 'nature city cozy'),
 ('Al-Muizz Street', 'a lantern-lit medieval street of carved stone gates and minarets at blue hour', 'city night hero'),
 ('Cairo Opera House', 'the Cairo Opera House gardens with warmly lit domes beside the Nile, evening sky', 'city night music'),
 ('Hanging Church', 'Coptic Cairo with the white Hanging Church, old stone lanes and palms, soft morning light', 'city cozy'),
 ('Step Pyramid of Saqqara', 'the stepped pyramid of Djoser rising over golden sand under a pale sky', 'desert temple hero'),
 ('Dendera Temple', 'the carved columns and sky-goddess ceiling of Dendera temple lit with warm light', 'temple hero'),
 ('Edfu Temple', 'the giant pylon and falcon statues of Edfu temple beside the Nile, golden morning', 'temple hero'),
 ('Kom Ombo Temple', 'the twin temple of Kom Ombo on a Nile bend at sunset with crocodile carvings', 'temple hero water'),
 ('Valley of the Kings', 'a rocky royal valley with painted tomb doors and sun-baked cliffs, clear blue sky', 'desert temple hero'),
 ('Hatshepsut Temple', 'the terraced columned temple of Hatshepsut cut into red cliffs, warm light', 'temple desert mountain'),
 ('Colossi of Memnon', 'two giant seated statues on green farmland at sunrise, mist, a hot-air balloon', 'temple fun sky'),
 ('Rosetta Nile Mouth', 'a quiet palm-lined river mouth with fishing boats and old Ottoman houses, soft light', 'water cozy'),
 ('Ismailia Lake', 'a calm blue lake with sailing boats, green lawns and a distant canal, bright day', 'water nature'),
 ('Damietta Shore', 'a sunny sandy shore with striped beach huts and wooden boats, bright sky', 'water fun sea'),
 ('Bahariya Oasis', 'hot springs and palm groves in a golden desert valley, small dark hills behind', 'desert nature'),
 ('Dakhla Oasis', 'a mud-brick old town in a palm oasis under starry violet dusk', 'desert night cozy'),
 ('Ras Mohamed Reef', 'a vivid coral reef wall with shoals of orange fish, rays of light from the surface', 'sea underwater'),
 ('Marsa Alam Bay', 'a turquoise bay with dolphins jumping and a white beach, gentle waves', 'sea nature underwater'),
 ('Nuweiba Coast', 'a quiet beach with palm huts and far mountains across a flat sea, pink dusk', 'sea desert'),
 ('Sharm Naama Bay', 'a lively bay with colourful boats, palm promenade and bright lights at twilight', 'sea city fun'),
 ('Zamalek Nile Island', 'green gardens and the Nile with felucca sails and the old Cairo skyline at sunset', 'city water'),
 ('Manial Palace', 'a colourful tiled palace garden with domes and tall palms, soft sunshine', 'city cozy'),
 ('Wadi Degla', 'a rocky canyon with soft pink cliffs and a trickle of water, clear sky', 'desert nature mountain'),
 ('Fayoum Magic Lake', 'a blue lake with white sand hills and pelicans, soft pastel evening', 'nature water'),
 ('Santorini', 'white and blue domes on cliffs over a deep blue sea at sunset', 'sea city fun'),
 ('Venice Canals', 'colourful palazzos on a glowing canal with gondolas at dusk', 'water city night'),
 ('Great Wall of China', 'the Great Wall winding over green misty mountains at sunrise', 'mountain hero'),
 ('Machu Picchu', 'ancient stone terraces on a green peak among clouds', 'mountain temple hero sky'),
 ('Taj Mahal', 'the white domed Taj Mahal with a reflecting pool and a soft pink sky', 'temple city'),
 ('Petra Treasury', 'the rose-red carved Treasury facade glowing in a narrow canyon', 'desert temple hero'),
 ('Big Ben Evening', 'Big Ben and the river Thames with a rosy sunset and red buses', 'city night'),
 ('Rome Colosseum', 'the Colosseum under a warm blue sky with pine trees', 'city hero'),
 ('Niagara Falls', 'giant thundering falls with rainbow mist and green banks', 'nature water'),
 ('Grand Canyon', 'layered red canyon walls with a winding river and golden light', 'desert mountain'),
 ('Northern Lights Fjord', 'a still fjord with snowy peaks under green and pink auroras', 'snow night nature'),
 ('Amazon Canopy', 'giant green trees, hanging vines, colourful parrots and mist', 'nature jungle'),
 ('Serengeti Plains', 'golden savanna with acacia trees, giraffes and a huge orange sun', 'nature desert jungle'),
 ('Maldives Lagoon', 'overwater huts on a turquoise lagoon with white sand islets', 'sea fun'),
 ('Halong Bay', 'emerald water with tall green limestone islands and junk boats in mist', 'sea mountain'),
 ('Cappadocia Balloons', 'fairy-chimney rocks with dozens of colourful hot-air balloons at dawn', 'desert fun sky'),
 ('Pamukkale Terraces', 'white mineral terraces filled with blue pools on a hillside', 'nature water'),
 ('Cherry Blossom Fuji', 'Mount Fuji behind pink cherry trees and a red bridge', 'mountain cozy hero'),
 ('Lapland Village', 'a snowy village of wooden cabins with reindeer and aurora', 'snow cozy night'),
 ('Moon Surface', 'a grey moon surface with Earth rising and a tiny flag', 'space'),
 ('Candy Mountain', 'a rolling land of lollipop trees and chocolate rivers (original fantasy)', 'fun candy fantasy'),
 ('Cloud Kingdom', 'a floating kingdom of pastel castles on clouds (original fantasy)', 'fun sky fantasy'),
 ('Crystal Cavern', 'a glowing cave of giant blue and pink crystals (original fantasy)', 'mountain fantasy hero'),
 ('Toy Workshop', 'a giant cosy toy workshop with building blocks and a train track (original fantasy)', 'toy cozy fantasy'),
 ('Giant Garden', 'a garden seen from an ant view with huge flowers and dewdrops (original fantasy)', 'nature cozy fantasy'),
 ('Lantern Harbour', 'a calm harbour of paper-lantern boats on a night sea (original fantasy)', 'sea night fantasy'),
 ('Sky Islands', 'floating green islands joined by rope bridges and waterfalls (original fantasy)', 'sky nature fantasy'),
 ('Snow Globe Town', 'a tiny snowy town inside a giant glass globe (original fantasy)', 'snow toy cozy fantasy'),
 ('Sunflower Hills', 'endless rolling hills of sunflowers under huge clouds', 'nature cozy'),
 ('Coral Palace', 'a palace of pink coral and shells under the sea (original fantasy)', 'sea underwater fantasy'),
 ('Volcano Island', 'a friendly smoking volcano island with palms and a lava waterfall', 'nature fantasy hero'),
 ('Giant Library', 'a giant cosy library with floating books and ladders', 'cozy fantasy'),
 ('Pirate Cove', 'a hidden cove with a wrecked ship, treasure and parrots', 'sea hero fun'),
 ('Rainbow Waterfalls', 'tall waterfalls with several rainbows in a green gorge', 'nature water'),
 ('Autumn Maple Hills', 'red and gold maple hills with a winding stream and falling leaves', 'nature cozy'),
 ('Stargazer Desert', 'a quiet golden desert under a sky full of stars and a bright Milky Way', 'desert night space'),
 ('Ice Palace', 'a shining ice palace with frozen fountains under pale pink light', 'snow fantasy hero'),
 ('Bamboo Waterworks', 'a bamboo forest with wooden water wheels and small streams', 'nature water'),
 ('Hot Air Balloon Fair', 'a green field filled with striped balloons and kites', 'fun sky'),
 ('Market Square at Noon', 'a sunny old market square with colourful awnings and fountains', 'city fun cozy'),
 ('Lighthouse Rocks', 'tall striped lighthouse on dark rocks with big waves at sunset', 'sea hero'),
 ('Moonlit Rooftops', 'warm lit rooftops of an old town under a huge moon', 'city night cozy'),
]
TG = {'jungle_adventure': 'jungle nature temple', 'happy_farm': 'nature cozy water', 'pumpkin_pie': 'cozy city', 'samurai': 'mountain cozy hero', 'golden_tail': 'jungle nature',
      'ocean_defense': 'sea underwater', 'rhythm': 'music city night', 'space_store': 'space', 'fox_family': 'nature cozy snow', 'zombie_rooftop': 'city night', 'gum_ball': 'candy fun',
      'deep_sea': 'sea underwater', 'hungry_frog': 'nature water', 'frost_coil': 'snow', 'hero_tower': 'hero mountain', 'cloud_dash': 'sky fun', 'sky_capy': 'sky fun', 'marble_dozer': 'toy fun',
      'castaway_raft': 'sea water', 'winter_camp': 'snow cozy', 'squad_shooter': 'city night', 'archer_bridge': 'hero mountain', 'creator_tycoon': 'city cozy', 'pearl_divers': 'sea underwater',
      'honey_farm': 'nature cozy', 'ice_dragon': 'snow fantasy', 'hot_spring': 'cozy snow nature', 'hop_world': 'fun sky', 'mars_farm': 'space', 'pin_puzzle': 'hero fantasy',
      'gem_quarry': 'mountain desert', 'sky_ace': 'sky', 'nutmeg_rush': 'city', 'trick_or_treat': 'city night cozy', 'viking_sling': 'snow hero', 'card_battle': 'fantasy', 'dino_grow': 'jungle nature',
      'ice_rink': 'snow', 'tomb_puzzle': 'temple desert hero', 'sweet_tray': 'cozy city', 'barrel_knights': 'hero', 'gummy_squad': 'candy fun', 'fashion_queen': 'city cozy', 'rug_cleaning': 'cozy city temple',
      'temple_army': 'temple hero', 'sky_jumper': 'sky fun', 'chomp_maze': 'fantasy', 'alien_sky': 'space', 'rhino_summit': 'mountain sky', 'summit_rush': 'snow mountain', 'rain_circuit': 'city nature',
      'dune_titans': 'desert', 'ball_scoop': 'fun city', 'fizz_runner': 'city', 'carnival_race': 'fun'}
BASE = "Polished kids' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons that look real, no brands, no known cartoon characters)."
def TS(c, r):
    return ("TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, no cast shadows, no frame, no text, no numbers. "
            f"Exact grid of {c} columns x {r} rows, every cell the same size, one subject per cell centred, same scale, at least 20% empty white margin in each cell, nothing touching another cell or the edge, same camera angle, light and outline style in every cell.")
PANO = "TECHNICAL RULES: ONE single image, aspect 21:9, no frame, no text, no logos, no characters. Sky and landmark in the top 55%, horizon at about 55% height, the bottom 35% calm and uncluttered (the game draws track/characters there). Landmark right of centre, calm left and right edges so it can be mirrored."
ART = "TECHNICAL RULES: ONE single image, aspect 16:9, no text, no letters, no logos, no frame. Keep the centre-right 40% calm for menu buttons."
SQ = "TECHNICAL RULES: ONE single image, square 1:1, subject centred with 12% margin, no text, no frame."
AN = "Add Adam and Nour EXACTLY like the {pair} pair of the approved outfits sheet in this chat (never redesign them), very small, waving from the lower-left corner."
PAIR = {'RACE': 'racing', 'COAST': 'explorer', 'FOREST': 'explorer', 'OCEAN': 'diver', 'SPACE': 'astronaut', 'DESERT': 'explorer', 'SNOW': 'snow suit', 'TOYTOWN': 'chef', 'NEON': 'racing', 'HERO': 'explorer', 'FUNFAIR': 'racing'}

REPL = {('dino_grow', 'Giza Plains'): ('Prehistoric Savanna', 'a golden prehistoric savanna with acacia trees, a herd of friendly giants far away and a huge orange sun'),
        ('sweet_tray', 'Cairo Sweets Shop'): ('Old Sweets Shop', 'a traditional old sweets shop with glass counters, copper trays and hanging lanterns'),
        ('rug_cleaning', 'Pyramids Camp'): ('Bahariya Camp', 'a desert camp among palm trees and dark hills with colourful carpets drying on ropes')}

def used(t):
    t = t.lower()
    return any(u in t for u in USED_KW)

todo = [g for g in N if g in P.D and g not in DONE_FULL]
order = FIRST + [g for g in todo if g not in FIRST]
out = []
w = out.append
w('# باقي برومتات ألعاب التسلية — نسخة Instinct/Claude\n')
w('**الغرض:** كل لعبة تتعمل لها كل صورها لوحدها من الدخول لحد آخر مستوى (صورة الدخول، واجهة القوائم، خلفية لكل مستوى، الشخصيات، العناصر، المؤثرات، شاشة الفوز، الأيقونات). كله في **نفس الشات الواحد** في ChatGPT (آدم ونور مرجعهم متحمّل فيه). **ابدأ من أول لعبة في «أكمل من هنا» واتبع الترتيب. لا تكرر أي مكان استُخدم قبل كده.**\n')
w('## 0. قواعد ثابتة (انسخها في بداية كل برومت)\n')
w(f'- **Style base:** {BASE}')
w('- **آدم ونور:** مرجعهم في الشات (ولد بشعر مجعد غامق وهودي أزرق / بنت بضفيرتين وفيونكات وردي). في كل صورة دخول: «' + AN.format(pair='explorer') + '» وغيّر اللبس حسب اللعبة من شيت اللبس المعتمد (racing / pilot / farmer / diver / snow suit / astronaut / explorer / chef). ممنوع تغيير وجوههم.')
w('- **ممنوع:** شخصيات محمية بحقوق، ماركات، نصوص أو حروف داخل الصور، دم، أسلحة واقعية. كل عنوان يُرسم بالكود على لافتة فاضية.')
w('- **القص:** شيت = شبكة أعمدة×صفوف مضبوطة على خلفية بيضا، خلفية المستوى 21:9 والثلث السفلي فاضي، صورة الدخول 16:9 واليمين الأوسط فاضي. لو الصورة جت غلط (عناصر زيادة / شبكة مش مضبوطة / نص جواها) اعمل لها regenerate.')
w('- **التسمية:** كل صورة باسم الكود (مثل `rain_circuit-07.png`).')
w('- **الأماكن:** كل مستوى مكان مختلف عن كل ما اتعمل قبل كده ومختلف عن باقي الألعاب (الأماكن المتاحة في القسم 3 مرة واحدة فقط على مستوى كل الألعاب).\n')
w('## 1. اللي اتعمل خلاص (متعدّوش)\n')
w('**مكتملة:** سباق الموتوسيكل، عربيات الملاهي، عربيات الشاطئ، سباق الغروب، سباق الطيارات، سباق السباحة، هامي الشجاع (صورة دخول + خلفيات).')
w('**أماكن مستخدمة (ممنوع تتكرر):** إسكندرية/قايتباي، البحر الأحمر، كباري النيل، الأهرامات والأبو الهول، الأقصر/الكرنك/أبو سمبل، سيوة، دهب، أسوان/فيلة، جبل موسى/سانت كاترين، مطروح، قناة السويس/العين السخنة، العلمين، الصحرا البيضا، بورسعيد، الجونة، مطار القاهرة، العاصمة الجديدة، مكتبة إسكندرية، قصر المنتزه، قصر البارون، أكوا بارك، دريم بارك، بحيرة قارون، عيون موسى، شلالات الريان، المقطم، الصحرا السودا، الجبال الشرقية، المتحف المصري الكبير، ليلة العيد، باريس، السندباد، الألب، كليمنجارو.\n')
w('## 2. أكمل من هنا (بالترتيب)\n')
w('**المرحلة الأولى — أكمل الألعاب اللي بدأناها (الأولوية):**\n')
for i, g in enumerate(FIRST, 1):
    w(f'{i}. `{g}` — {N[g][0]} — {PARTIAL[g]}')
w('\n**المرحلة الثانية — باقي الألعاب بالترتيب:** ' + '، '.join(g for g in todo if g not in FIRST) + '\n')

# assign levels first (global uniqueness) then write the pool section with only what is still free
assigned = {}
used_pool = set()
used_texts = set()
for g in order:
    d = P.D[g]
    tags = set(TG.get(g, 'fun').split())
    lv = []
    for (nm, sc) in d['worlds']:
        key = nm.strip().lower()
        if (g, nm) in REPL:
            lv.append(REPL[(g, nm)]); used_pool.add(REPL[(g, nm)][0]); used_texts.add(lv[-1][0].strip().lower()); continue
        if used(nm) or used(sc) or key in used_texts:
            cand = [p for p in POOL if p[0] not in used_pool]
            cand.sort(key=lambda p: (-len(tags & set(p[2].split())), POOL.index(p)))
            p = cand[0]
            used_pool.add(p[0]); lv.append((p[0], p[1]))
        else:
            lv.append((nm, sc))
        used_texts.add(lv[-1][0].strip().lower())
    assigned[g] = lv
w('## 3. الأماكن الجديدة اللي هتتوزع (كل مكان في لعبة واحدة فقط، موزّعة تحت)\n')
w('، '.join(sorted(used_pool)) + '\n')
w('## 4. برومتات كل لعبة\n')
w('رموز: **E** الدخول، **U** واجهة القوائم، **B** الأزرار، **H** البطل، **C** المساعدين، **L** خلفية كل مستوى، **O** عناصر اللعبة، **S** عناصر ومؤثرات، **F** الفوز، **I** أيقونات، **K** كارت الكتالوج.\n')
all_prompts = collections.Counter()
for idx, g in enumerate(order, 1):
    ar, en, fam, note = N[g]
    d = P.D[g]
    fn, fd = FAM[fam]
    ga = A.G.get(g)
    concept = ga[1] if ga else en
    things = ga[3] if ga else ''
    st = f'Style "{fn}": {fd}. {BASE}'
    pair = PAIR.get(fam, 'explorer')
    w(f'\n### {idx:02d}. {g} — {ar} / {en}  ·  style: {fn}\n')
    w(f"**الحالة:** {PARTIAL.get(g, 'لسه ما اتعملش حاجة')}. **الفكرة:** {d['hook']}\n")
    w(f"**البطل:** {d['hero']}.  **المساعدين:** {d['cast']}.\n")
    k = [0]
    def PR(code, kind, text):
        k[0] += 1
        all_prompts[text] += 1
        w(f'**{g}-{k[0]:02d} · {code} · {kind}** — {text}\n')
    PR('E', 'ENTRY KEY ART', f"{st} {ART} Menu key art for \"{en}\" (a game about {concept}): the hero ({d['hero']}) large on the left third in a dynamic happy pose, the game's signature place behind, rivals/helpers behind. {AN.format(pair=pair)} Blank area top-centre for the title ribbon.")
    PR('U', 'UI SKIN SHEET', f"{st} {TS(4, 2)} Game \"{en}\". Eight cells: (1) a large menu panel frame, 4:3 rounded rectangle with a thick glossy border in this game's colours and a completely EMPTY translucent middle; (2) wide PLAY pill, glossy, white outline, white right-pointing triangle only; (3) round LEVEL button open (empty centre); (4) round LEVEL button locked with a golden padlock; (5) round LEVEL button completed with three gold stars along the bottom; (6) round LEVEL button selected (glowing, sparkles); (7) blank title ribbon banner with themed ends; (8) small round SOUND button with a white speaker icon. Themed to {concept}, no text or numbers.")
    PR('B', 'BUTTON PILLS', f"{st} {TS(3, 2)} Game \"{en}\". Six BLANK wide pill buttons (completely empty, no icon): row 1: orange, blue, green; row 2: yellow, purple, light grey (disabled); glossy with white outline and a small detail themed to {concept} at both ends.")
    PR('H', 'HERO CHARACTER SHEET', f"{st} {TS(3, 3)} Nine cells, model sheet of the SAME hero of \"{en}\": {d['hero']}. In order: front, side, back (standing); run/move; jump or main action; hurt (cute); celebrate; sad-but-cute; head close-up smiling. Identical design in all cells.")
    PR('C', 'SUPPORTING CAST SHEET', f"{st} {TS(3, 3)} Game \"{en}\". Nine cells, one character each, front 3/4 view, same style as the hero: {d['cast']}. Fill spare cells with colour variants.")
    lv = assigned[g]
    for i, (ln, ls) in enumerate(lv, 1):
        PR('L', f'LEVEL BACKDROP {i}/{len(lv)} · {ln}', f"{st} {PANO} LEVEL {i} of {len(lv)} of \"{en}\": {ls}. It must look unmistakably different from every other level of this game (palette, time of day, weather, landmark).")
    if g in VEH:
        PR('O', 'VEHICLE SHEET', f"{st} {TS(4, 2)} Game \"{en}\". Eight cells: {VEH[g]}: the player's one in front, side, back and 3/4 views; then four rival variants in different colours and driver faces.")
        PR('O', 'TRACK KIT', f"{st} {TS(4, 3)} Game \"{en}\". Twelve racing pieces: start gate, checkpoint arch, boost pad, barrier, cones, finish line, grandstand, tree, rock, blank sign, flag, lamp.")
    PR('O', 'GAME OBJECTS', f"{st} {TS(4, 3)} Game \"{en}\" ({concept}). Twelve main things: {things}. Readable at small size, colour variants where useful.")
    PR('S', 'PROPS + EFFECTS', f"{st} {TS(4, 3)} Game \"{en}\". Twelve cells: 6 small repeatable scenery props from its different levels ({'; '.join(x[0] for x in lv[:3])}), and 6 cute effects (sparkle burst, star pop, dust puff, splash, impact ring, confetti).")
    PR('F', 'WIN SCREEN', f"{st} {ART} Celebration scene of \"{en}\", no text: the hero ({d['hero']}) cheering with confetti, a trophy and three huge stars, glowing backdrop from the last level ({lv[-1][0]}).")
    PR('I', 'REWARD ICONS', f"{st} {TS(4, 3)} Twelve glossy reward/upgrade icons for \"{en}\" ({concept}): coin, star, gem, shield, magnet, heart, speed boost, key, chest, medal, crown, gift.")
    PR('K', 'CATALOG CARD', f"{st} {SQ} Game-card picture for \"{en}\": the hero in a dynamic pose in the signature place, bright and exciting, empty strip at the bottom.")
w('\n## 5. صور الكتالوج (بعد ما نخلص الألعاب)\n')
w('**CAT-1 (الخلفية):** wide 16:9 painted scene of the Nile at golden hour seen from slightly above: calm river, palm banks, desert hills and temples far away, many empty wooden sailboats (feluccas) floating, each with a blank hanging sign board and space for a small round counter badge; no text, no characters, calm centre; kid-friendly glossy 3D-cartoon, same family as the app home art.')
w('**CAT-2 (المراكب):** sheet 4 columns x 2 rows on pure white: eight different cute decorated feluccas, each with a large BLANK sign above it and a small round blank badge on its side, in eight colour themes (racing red, sky blue, snow white, candy pink, jungle green, ocean teal, space purple, farm yellow). No text.\n')
w('## 6. لعبة المتحف المصري (جديدة)\n')
w('6 قاعات = 6 مستويات، لكل قاعة خلفية 21:9 (قاعة الملوك، قاعة توت عنخ آمون، قاعة الأقنعة والحُلي، قاعة التوابيت بدون رعب، قاعة الحياة اليومية، حديقة التماثيل). شيت بطل (Kemo، طفل مستكشف بمصباح)، شيت 12 قطعة أثرية كرتونية (قناع توت، تمثال رمسيس، نفرتيتي، كليوباترا، خرطوش، جعران، قط باستت، تابوت ذهبي، ريشة ماعت، عنخ، كأس، لفافة بردي)، واجهة قوائم + أزرار + شاشة فوز + كارت. النص التاريخي يكتب بالكود ويراجعه المالك.\n')
open('docs/REMAINING_PROMPTS_FOR_INSTINCT.md', 'w', encoding='utf8').write('\n'.join(out))
dups = [t for t, c in all_prompts.items() if c > 1]
places = [x[0].lower() for g in order for x in assigned[g]]
dp = [p for p, c in collections.Counter(places).items() if c > 1]
print(len(order), 'games', sum(all_prompts.values()), 'prompts; duplicate prompt texts:', len(dups), '; places used twice across games:', dp[:10])
