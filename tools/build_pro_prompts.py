# Builds docs/PRO_GAMES_FINAL_PROMPTS.md from tools/pro_games_data.py (per-game design data) and the names in tools/build_pro_design.py.
# Every prompt is written so the picture is EASY TO CUT: sheets are exact grids on flat white, backdrops have fixed ratios and safe zones.
# Run from the repo root: python -X utf8 tools/build_pro_prompts.py
import sys, os, json, collections
sys.path.insert(0, 'build'); sys.path.insert(0, 'tools')
src = open('tools/build_pro_design.py', encoding='utf8').read().split('\nW = []')[0]
ns = {}
exec(compile(src, 'build_pro_design_head', 'exec'), ns)
N, FAM, RACING, VEH = ns['N'], ns['FAM'], ns['RACING'], ns['VEH']
import pro_games_data as P
D = P.D

TECH_SHEET = ("TECHNICAL RULES (important, the picture will be cut by machine): ONE single image. Background pure flat white #FFFFFF, no gradient, no floor, no ground line, "
              "no cast shadows, no frame, no border, no text, no numbers. Exact grid of {c} columns x {r} rows: every cell is the same size, one subject per cell, centred, "
              "the same scale, with at least 20% empty white margin inside its cell; nothing overlaps or touches another cell or the image edge. Same camera angle, "
              "same soft light from the top-left, same outline weight, same rendering style in every cell.")
TECH_PANO = ("TECHNICAL RULES: ONE single image, aspect ratio 21:9 (3360x1440), no frame, no border, no vignette, no text, no logos, no characters. Composition: sky and the landmark "
             "in the top 55%, horizon at about 55% height, the bottom 35% is a calm, uncluttered ground/water/road area (the game draws the track and characters there). "
             "Put the landmark right of centre so a menu panel can sit on the left. Soft detail, no tiny noisy patterns, left and right edges calm so they can be stretched.")
TECH_ART = "TECHNICAL RULES: ONE single image, aspect ratio 16:9 (1920x1080), no text, no letters, no logos, no frame, no watermark. Keep the centre-right 40% calm and uncluttered (buttons go there)."
TECH_SQ = "TECHNICAL RULES: ONE single image, square 1:1, subject centred with 12% margin all around, no text, no frame, no watermark."


def style(fam):
    n, d = FAM[fam]
    return f'Style "{n}": {d}. Polished kids\' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons that look real, no brands, no known cartoon characters).'


out = []
w = out.append
tot = collections.Counter()
order = [g for g in RACING if g in N] + [g for g in N if g not in RACING]
for g in D:
    if g not in order: order.append(g)

w('# Rehlaty fun games: the complete art prompt book\n')
w('Made from a real play-through of every game (menus + levels + landscape phone sizes) by `tools/build_pro_prompts.py`. '
  '**Gameplay, movement and levels stay exactly as they are; only the look changes.** Each game gets its own character sheet, its own style, '
  'a **different place for every level** (real, recognisable landmarks: the Pyramids, Sphinx, Karnak, Abu Simbel, the Nile, Qaitbay, Cairo Tower, Siwa, '
  'the Red Sea... and world places like Paris, Fuji, Santorini), and pictures that are easy to cut.\n')
w('## 0. How to work with this file\n')
w('1. Each prompt has a **code** (e.g. `moto_race-04`) and a **priority**: **MUST** (without it the game still looks unfinished), **SHOULD** (big lift), **NICE** (polish).')
w('2. Paste the prompt as is (the TECHNICAL RULES inside it are what make cutting easy). One prompt = one picture. Save it as `<code>.png` and send it back.')
w('3. **Sheets are exact grids on white**: I cut them by grid, remove the white and make transparent sprites. **Backdrops are 21:9 with a calm bottom third** so the track/characters sit on them. '
  '**Key art is 16:9 with a calm right side** for the menu buttons. Nothing is cut by hand.')
w('4. If a picture comes out wrong (extra objects, grid not respected, text inside), regenerate it; do not send it to me. A good sheet has the right number of cells and white margins.')
w('5. Titles and Arabic text are never inside the pictures: the game draws them in code on the blank ribbons from section 2.\n')

w('## 1. What a child sees today: the review (from playing every game)\n')
w('I opened every game as a child would (menu, then up to 5 levels, finger movement) on a landscape phone (844x390), and checked fit on 667x375, 844x390 and 932x430.\n')
for t in [
 '**Almost every menu is the same blue/green/orange panel** on a different background: no hero, no logo, no feeling of "my own place".',
 '**Levels differ by colour only** in most games (Ball Truck levels 25-30 are identical blue spikes; Chomp Maze is one maze in three colours; Cloud Dash and Sky Ace repeat one sky).',
 '**Heroes are tiny** (Fizz, Alien, Archer, Squad, Fox, Frog, Capy, Nutmeg) or **missing** (Honey Farm, Hot Spring, Mars Farm, Pin Puzzle are a map and icons with no character to love).',
 '**Back button differs per game** (arrow right, X, "خروج" bar, left arrow) and on some menus the exit button is below the fold of a scrolling list.',
 '**Text-heavy screens** (Rug Cleaning, Deep Sea, Creator Tycoon) for children who cannot read yet: they need pictures and icons.',
 '**Racing games feel like one game** in different paint: same road, same panels, similar car; no garage, no podium, no rival personalities.',
 '**Strong ones (the quality bar):** Fashion Queen, Samurai, Hero Tower, Gummy Squad, Rhythm, Space Store, Gem Quarry, Golden Tail, Carnival Race, Coastal Drive night level.',
]: w(f'- {t}')
w('')
bad = json.load(open('build/fit_bad.json', encoding='utf8')) if os.path.exists('build/fit_bad.json') else {}
w('### Landscape-phone fit check (667x375, 844x390, 932x430; menu and first game screen of all 61 games)\n')
w('- **No game crashed or showed a blank canvas** at any of the three sizes; none scrolls the page.')
w('- **Menus where the Exit button sits below a scrolling level list** (a small child must scroll to find it): Alien Sky, Rhino Summit, Sunset Road, Ice Dragon, Hamster Warrior. Fix: pin the exit/back button outside the scrolling list (code, I will do it).')
w('- **Long level lists that scroll** (normal, but need bigger rows): Coastal Drive (levels 5-6), Rug Cleaning (levels 9-11), Rhythm (level 7).')
w('- **Tiny HUD item**: Summit Rush corner chip "c5" sits off the edge at 667x375. Ocean Defense logs one script error at 667x375 (looked at, to be fixed).')
w('- Everything else fits (buttons inside the screen, canvas fills the screen).\n')

w('## 2. The shared kit: make these first (they appear in all 61 games)\n')
SH = []
def shared(code, pr, kind, text):
    tot[pr] += 1; w(f'**{code} · {pr} · {kind}** — {text}\n')
shared('K01', 'MUST', 'APP LOGO BADGE', f"{TECH_SQ} Round sticker badge: the two cartoon children Adam (boy, curly dark brown hair, blue shirt) and Nour (girl, two ponytails with pink bows, lilac top) smiling and leaning together in front of a red map pin, thick white outline, soft glow. Pure white background outside the badge. The badge appears in the corner of every menu.")
shared('K02', 'MUST', 'ADAM & NOUR OUTFITS', TECH_SHEET.format(c=4, r=2) + " Eight cells, each with the pair Adam and Nour standing together in one outfit (cells in order): racing helmets and goggles; pilot caps with scarves; farmer straw hats; diver masks; snow suits with pompom hats; astronaut suits; explorer safari hats; chef hats with aprons. Same faces and proportions in every cell, cute 3D-cartoon.")
shared('K03', 'MUST', 'BACK BUTTON', TECH_SHEET.format(c=3, r=1) + " Three cells: the same round BACK button in three states (normal, pressed, disabled): glossy violet sphere, bold white arrow pointing left, thick white outline, soft drop shadow. Big and simple.")
shared('K04', 'MUST', 'PAUSE / SETTINGS KIT', TECH_SHEET.format(c=4, r=2) + " Eight cells: rounded pause-panel frame with an empty middle; blank ribbon banner; round icon buttons: resume, restart, home, sound on, sound off, music note. Glossy violet and white, chunky, no text or numbers.")
shared('K05', 'MUST', 'LEVEL-SELECT KIT', TECH_SHEET.format(c=4, r=2) + " Eight cells: level button open; locked with a padlock; completed with 3 stars; current glowing; long blank banner; small ribbon; star; padlock. Rounded glossy bright, no numbers, no text.")
shared('K06', 'MUST', 'CURRENCY ICONS', TECH_SHEET.format(c=4, r=2) + " Eight cells: gold coin, big star, small star, heart, gem, key, medal, gift box. Glossy, rounded, same style.")
shared('K07', 'MUST', 'LOADING SCREEN', f"{TECH_ART} Loading-screen background: soft colourful sky and hills, Adam and Nour peeking in from the bottom-left corner waving, a long blank ribbon at the bottom for a progress bar.")
shared('K08', 'SHOULD', 'RESULT PANEL KIT', TECH_SHEET.format(c=3, r=2) + " Six cells: large result-panel frame with a blank ribbon on top; three empty star slots in a row; next button (arrow); replay button (circular arrow); home button (house); trophy. Glossy, rounded, no text.")
for k, (n, d) in FAM.items():
    shared(f'K09-{k}', 'SHOULD', f'TITLE RIBBON · {n}', f"{TECH_SHEET.format(c=3, r=1)} Three cells: three blank title banners (wide ribbon, wooden sign, glowing frame) in this style: {d}. Space inside for a title, a small matching badge on each side.")

w('## 3. New names (everyday words an Egyptian child already knows)\n')
w('| Game | Old | New (AR) | New (EN) | Style family |')
w('|---|---|---|---|---|')
for g in order:
    if g not in N: continue
    ar, en, fam, note = N[g]
    old = ns['A'].G[g][0] if g in ns['A'].G else g
    w(f'| {g} | {old} | **{ar}** | {en} | {FAM[fam][0]} |')
w('\n(Old names such as «بطل الفوّارة» were dropped: a child cannot guess what they mean. Names are only proposals; nothing is renamed in the app until you choose.)\n')

w('## 4. The games (racing first), each with review, hook, character sheet and prompts\n')
count = 0
for g in order:
    if g not in N or g not in D: continue
    count += 1
    ar, en, fam, note = N[g]
    d = D[g]
    st = style(fam)
    worlds = d['worlds']
    nl = len(worlds)
    w(f'\n### {count:02d}. {g} — {ar} / {en}  ·  style: {FAM[fam][0]}\n')
    w(f'**شوفت إيه كطفل:** {d["obs"]}\n')
    w(f'**إيه اللي يشد الطفل:** {d["hook"]}\n')
    w(f'**Hero:** {d["hero"]}.\n')
    w(f'**Supporting cast:** {d["cast"]}.\n')
    n = [0]
    def P(pr, kind, text):
        n[0] += 1; tot[pr] += 1
        w(f'**{g}-{n[0]:02d} · {pr} · {kind}** — {text}\n')
    ga = ns['A'].G.get(g)
    concept = ga[1] if ga else en
    things = ga[3] if ga else ''
    P('MUST', 'KEY ART (menu)', f"{st} {TECH_ART} Menu key art for \"{en}\", a game about {concept}: the hero ({d['hero']}) large on the left third in a happy dynamic pose, the game's most iconic place behind, small Adam and Nour peeking in the lower-left corner, a blank ribbon area at the top-centre for the title.")
    P('MUST', 'CHARACTER SHEET (hero)', f"{st} {TECH_SHEET.format(c=3, r=3)} Nine cells, model sheet of the SAME hero: {d['hero']}. Cells in order: front view, side view, back view (neutral stand); run or move; jump or main action; hurt (cute); celebrate; sad-but-cute; head close-up smiling. Identical design, colours and proportions in all nine cells.")
    P('SHOULD', 'CAST SHEET', f"{st} {TECH_SHEET.format(c=3, r=3)} Nine cells, one character each, front 3/4 view, same style as the hero: {d['cast']}. If fewer than nine characters are listed, fill the rest with colour variants of the main ones.")
    if g in VEH:
        P('MUST', 'VEHICLE / BODY SHEET', f"{st} {TECH_SHEET.format(c=4, r=2)} Eight cells: {VEH[g]}. Cells: player's one in front view, side view, back view, 3/4 view; then four rival variants in different colours with different driver faces. Same design family.")
        P('SHOULD', 'GARAGE ICONS', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve cells of customisation items for {VEH[g]}: four paint colours (swatch on a small model), three wheel or body sets, three decals/stickers without letters, a spoiler, a boost flame, a trophy.")
        P('SHOULD', 'TRACK KIT', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve cells of racing track pieces for \"{en}\": start gate, checkpoint arch, boost pad, barrier, cones, finish line, grandstand, tree, rock, sign (blank), flag, lamp.")
        P('SHOULD', 'PODIUM', f"{st} {TECH_ART} Podium scene, no text: three winners on a 1-2-3 podium with confetti, the hero ({d['hero']}) in the middle holding a trophy, backdrop from the game's first level.")
    P('MUST', 'OBJECTS', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve cells of the main things in this game ({concept}): {things}. Make them readable and bright at small size; variants in different colours where useful.")
    for i, (lname, scene) in enumerate(worlds, 1):
        P('MUST', f'BACKDROP {i}/{nl} · {lname}', f"{st} {TECH_PANO} This is LEVEL {i} of {nl} of \"{en}\" (a game about {concept}): {scene}. It must look unmistakably different from every other level of the game: its own colour palette, time of day, weather, famous landmark and one unique feature.")
    P('NICE', 'SCENERY PROPS', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve small repeatable scenery props for \"{en}\" taken from its different levels ({'; '.join(x[0] for x in worlds[:4])}): plants, rocks, signs, buildings, flags or machines as fit, each clearly from a different place.")
    P('SHOULD', 'UI SKIN', f"{st} {TECH_SHEET.format(c=4, r=2)} Eight cells in this game's own style: menu panel frame (empty middle), three big button shapes (play, levels, shop) themed to the game's world, round pause button, score chip, progress bar (empty then full), heart. No text or numbers.")
    P('SHOULD', 'WIN SCREEN', f"{st} {TECH_ART} Celebration scene, no text: the hero ({d['hero']}) cheering with confetti, a trophy and three huge stars, glowing backdrop from the game's last level.")
    P('NICE', 'EFFECTS', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve cells of cute effect sprites for this game: sparkle burst, star pop, dust puff, splash, speed lines, impact ring, confetti, heart pop, coin glint, smoke puff, glow ring, magic swirl. Soft and bright.")
    P('NICE', 'GAME ICONS', f"{st} {TECH_SHEET.format(c=4, r=3)} Twelve cells of reward and upgrade icons for \"{en}\": coin, star, gem, shield, magnet, heart, speed boost, key, chest, medal, crown, gift. Glossy and round.")
    P('NICE', 'GAME CARD', f"{st} {TECH_SQ} Game-card picture for \"{en}\": the hero in a dynamic pose in the game's signature place, bright and exciting, empty strip at the bottom.")

w('\n---\n')
w(f"## Totals\n\n- Games: {count}\n- Shared kit prompts: {sum(1 for l in out if l.startswith('**K'))}\n- Priorities: " + ', '.join(f'{k} {v}' for k, v in sorted(tot.items())) + f"\n- **All prompts: {sum(tot.values())}**\n")
w('Order of work: all K01-K09 first, then per game MUST (key art, character sheet, objects, backdrops), then SHOULD, then NICE. Racing games come first in the list because you asked for them to be the strongest.\n')
open('docs/PRO_GAMES_FINAL_PROMPTS.md', 'w', encoding='utf8').write('\n'.join(out))
print(count, 'games', dict(tot))
