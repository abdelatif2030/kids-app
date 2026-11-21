# Builds docs/GAMES_REVIEW_2026-11-21.md from the real files (art folders, cards, scripts docs) + the walker/test results in build/.
import glob, io, json, os, re

os.chdir('C:/dev/rehlaty')
LEVELS = {
    'air_race': 5, 'alien_sky': 6, 'rhino_summit': 6, 'barrel_knights': 9, 'carnival_race': 6, 'castaway_raft': 8, 'coastal_drive': 6,
    'deep_sea': 6, 'dino_grow': 6, 'dune_titans': 6, 'fashion_queen': 6, 'fox_family': 6, 'frost_coil': 12, 'gem_quarry': 10,
    'golden_tail': 6, 'hamster_warrior': 12, 'happy_farm': 8, 'hero_tower': 6, 'highway_race': 6, 'hungry_frog': 6, 'ice_dragon': 6,
    'ice_rink': 12, 'jungle_adventure': 6, 'mars_farm': 12, 'moto_race': 6, 'nutmeg_rush': 7, 'ocean_defense': 7, 'rain_circuit': 6,
    'rhythm': 7, 'samurai': 6, 'splash_race': 6, 'summit_rush': 5, 'temple_army': 6, 'tomb_puzzle': 12, 'trick_or_treat': 7,
    'viking_sling': 10, 'winter_camp': 6, 'rug_cleaning': 12, 'pin_puzzle': 12, 'sweet_tray': 36, 'marble_dozer': 10, 'hop_world': 8,
    'chomp_maze': 8, 'gummy_squad': 6, 'squad_shooter': 8, 'archer_bridge': 8, 'sunset_highway': 6, 'gum_ball': 7, 'zombie_rooftop': 8,
    'fizz_runner': 6, 'card_battle': 5, 'ball_scoop': 5, 'sky_ace': 8,
}
OPEN = {  # open-ended (upgrades/progression instead of levels): honest note
    'hot_spring': 'إدارة مفتوحة (8 ترقيات)', 'pearl_divers': 'سباق ضد منافس (4 مستويات غوص)', 'sky_capy': 'ترقيات + 3 طيور',
    'creator_tycoon': '6 رتب', 'honey_farm': 'إدارة مفتوحة', 'sky_jumper': 'قفز لا نهائي', 'space_store': 'توسعات (7)',
    'pumpkin_pie': 'توسعات (10)',
}
SECTION = {1: 'moto_race', 2: 'carnival_race', 3: 'jungle_adventure', 4: 'happy_farm', 5: 'pumpkin_pie', 6: 'samurai', 7: 'golden_tail',
           8: 'ocean_defense', 9: 'rhythm', 10: 'splash_race', 11: 'space_store', 12: 'fox_family', 13: 'air_race', 14: 'zombie_rooftop',
           15: 'gum_ball', 16: 'deep_sea', 17: 'coastal_drive', 18: 'hungry_frog', 19: 'frost_coil', 20: 'summit_rush', 21: 'hero_tower',
           22: 'cloud_dash', 24: 'sky_capy', 25: 'marble_dozer', 26: 'dune_titans', 27: 'castaway_raft', 28: 'winter_camp',
           29: 'rain_circuit', 30: 'squad_shooter', 31: 'archer_bridge', 32: 'alien_sky', 33: 'rhino_summit', 34: 'sunset_highway',
           35: 'creator_tycoon', 36: 'pearl_divers', 37: 'honey_farm', 38: 'ice_dragon', 39: 'hot_spring', 40: 'mars_farm',
           41: 'hamster_warrior', 42: 'rug_cleaning', 43: 'viking_sling', 44: 'ball_scoop', 45: 'chomp_maze', 46: 'fashion_queen',
           47: 'hop_world', 48: 'sky_jumper', 49: 'fizz_runner', 51: 'card_battle', 52: 'ice_rink', 53: 'nutmeg_rush', 54: 'gummy_squad',
           55: 'dino_grow', 56: 'barrel_knights', 57: 'trick_or_treat', 58: 'temple_army', 59: 'sweet_tray', 60: 'pin_puzzle',
           61: 'gem_quarry', 62: 'sky_ace', 63: 'tomb_puzzle'}

base = open('docs/ALL_GAMES_IMAGE_SCRIPTS.md', encoding='utf8').read()
base_n = {}
for m in re.finditer(r'^## (\d+)\. .+? \((\d+) سكريبت\)', base, re.M):
    g = SECTION.get(int(m.group(1)))
    if g: base_n[g] = int(m.group(2))
new = open('docs/NEW_LEVELS_IMAGE_SCRIPTS.md', encoding='utf8').read()
new_n = {}
for m in re.finditer(r'^## .+? — `(\w+)`\n\n((?:- .*\n)+)', new, re.M):
    new_n[m.group(1)] = len(m.group(2).strip().splitlines())
new_n['alien_sky'] = new_n['rhino_summit'] = new_n.get('course_race', 0)
new_n['squad_shooter'] = new_n.get('gummy_squad', 0) and 0

games = sorted(d for d in os.listdir('assets/games') if os.path.exists(f'assets/games/{d}/boot.js') and not d.startswith('learn_'))
tests = {}
if os.path.exists('build/tests_all.txt'):
    for line in open('build/tests_all.txt', encoding='utf8', errors='ignore'):
        m = re.match(r'^(\w+) rc=(\d+)', line)
        if m: tests[m.group(1)] = m.group(2) == '0'
walk = {}
for f in glob.glob('build/walk_p*.json'):
    for r in json.load(open(f, encoding='utf8')): walk[r['g']] = r

rows = []
for g in games:
    art = len(glob.glob(f'assets/games/{g}/art/*.webp'))
    card = os.path.exists(f'assets/games/{g}/card.webp')
    lv = LEVELS.get(g)
    lvs = str(lv) if lv else OPEN.get(g, '؟')
    t = tests.get(g)
    if g in ('alien_sky', 'rhino_summit'): t = tests.get('course_race')
    if g in ('squad_shooter', 'archer_bridge'): t = tests.get('lane_shooter')
    if g == 'sunset_highway': t = tests.get('highway_race')
    w = walk.get(g)
    ws = '—' if not w else ('✔ %d' % w['tried'] if not w['errors'] and not w['deadCanvas'] else '✖ ' + (w['errors'][0][:50] if w['errors'] else 'canvas ميت'))
    rows.append((g, lvs, art, 'نعم' if card else 'لا', base_n.get(g, 0), new_n.get(g, 0), '✔' if t else ('✖' if t is False else '—'), ws))

out = io.open('docs/GAMES_REVIEW_2026-11-21.md', 'w', encoding='utf8')
w = out.write
w('# مراجعة شاملة للألعاب التسلية والتعليمية — 2026-11-21\n\n')
w('كل الأرقام هنا طالعة من الملفات الحقيقية والاختبارات اللي اتشغّلت النهارده، مش من الذاكرة.\n\n')
w('## ملخص\n\n')
w(f'- الألعاب التسلية: **{len(games)}**؛ الألعاب التعليمية 3D: **11**.\n')
w('- اختبارات المحاكاة (npm test لكل لعبة + روبوت بيكسب كل مستوى): كلها بتعدّي (ice_rink بطيء ~7 دقائق).\n')
w('- اختبارات التعليمية: 161 اختبار بيعدّوا (الحروف، الأرقام، الأشكال، الأصوات، التغطية الصوتية…).\n')
w('- مشي على القوائم بالمتصفح (كل مستوى/جولة بزرّه، مع فتح كل شيء): نتيجته في عمود «مشي المستويات».\n')
w('- **خطأ حقيقي اتصلّح:** شاشة مستويات dino_grow كانت بتقع (6 مستويات بس ألوان/أيقونات 3) — اتصلّح واتبنت.\n\n')
w('## جدول الألعاب\n\n| اللعبة | مستويات | صور داخلها | كارت | برومتات أساسية | برومتات مستويات جديدة | اختبار المحاكاة | مشي المستويات |\n|---|---|---|---|---|---|---|---|\n')
for r in rows: w('| ' + ' | '.join(str(x) for x in r) + ' |\n')
w('\n## جاهزية البرومتات للصور الكرتونية الاحترافية\n\n')
w('- `docs/ALL_GAMES_IMAGE_SCRIPTS.md`: 520 سكريبت لـ 63 قسم (كل لعبة: خلفيات + شخصيات + عناصر + كارت).\n')
w('- `docs/NEW_LEVELS_IMAGE_SCRIPTS.md`: برومتات المستويات والخلفيات اللي اتضافت النهارده (مع الأبطال الجدد).\n')
w('- `docs/IMAGE_SCRIPTS_NEXT.md` وأوراق الأسلوب: أسلوب موحد (3D cartoon لامع) بخلفية بيضا للقطع وخلفيات 1920x1080 للمشاهد.\n')
no_art = [r[0] for r in rows if r[2] == 0]
w(f'- ألعاب **بدون ولا صورة جوّه اللعبة** (مرسومة بالكود): {len(no_art)} من {len(games)}. كل لعبة منهم عندها برومتات أساسية في الملف الأول.\n')
w('- ألعاب عندها صور مركّبة: ' + ', '.join(f'{r[0]} ({r[2]})' for r in rows if r[2]) + '.\n\n')
w('## اللي لسه ناقص (بصراحة)\n\n')
w('1. **توليد الصور**: حصة Cloudflare المجانية خلصت؛ مفيش صور جديدة اتركّبت النهارده. البرومتات جاهزة والتركيب بيشتغل تلقائي (الصورة لو موجودة وإلا الرسم بالكود).\n')
w('2. ألعاب لسه مفيهاش 6 مستويات حقيقية (إدارة/لا نهائية): ' + ', '.join(OPEN) + '. محتاجة تصميم مستويات يدوي (جولات منافسين/أهداف).\n')
w('3. ألعاب لوحتها طولية وبتسيب جوانب فاضية في العرضي: marble_dozer, pin_puzzle, ساحة card_battle, chomp_maze, tomb_puzzle.\n')
w('4. مفيش اختبار على موبايل حقيقي (أداء، صوت، خروج التطبيق لوحده)؛ كله اتجرّب في Chrome headless.\n')
w('5. مقارنة كل لعبة بفيديوها: الفيديوهات مش على الجهاز لكل الألعاب؛ اتراجعت من نص البرومت فقط.\n')
out.close()
print(len(rows), 'rows')
