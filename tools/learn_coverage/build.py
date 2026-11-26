import io, json, csv, re, sys, collections
R = 'C:/dev/rehlaty/'
S = {'ar': 'الحروف', }
SEC = {  # id: (Arabic name, English name, German, French, emoji)
 'sounds': ('أصوات الحيوانات', 'Animal sounds', 'Tierstimmen', 'Les cris des animaux'),
 'action': ('أفعال', 'Actions', 'Tätigkeiten', 'Les actions'),
 'opposite': ('عكس الكلمات', 'Opposites', 'Gegensätze', 'Les contraires'),
 'where': ('فين؟', 'Where?', 'Wo?', 'Où ?'),
 'describe': ('صفات', 'Describing words', 'Eigenschaften', 'Les adjectifs'),
 'polite': ('كلمات الأدب', 'Polite words', 'Höfliche Wörter', 'Les mots polis'),
 'question': ('كلمات السؤال', 'Question words', 'Fragewörter', 'Les mots interrogatifs'),
 'people': ('أنا وإنت', 'Me and you', 'Ich und du', 'Moi et toi'),
 'bathroom': ('الحمّام', 'Bathroom', 'Badezimmer', 'La salle de bains'),
 'health': ('صحتي', 'Health', 'Gesundheit', 'La santé'),
 'safety': ('الأمان', 'Staying safe', 'Sicherheit', 'La sécurité'),
 'shop': ('الفلوس والسوق', 'Money and shop', 'Geld und Laden', "L'argent et le magasin"),
 'time': ('الوقت', 'Time', 'Zeit', 'Le temps'),
 'number2': ('الترتيب والكميات', 'Order and amounts', 'Reihenfolge und Mengen', "L'ordre et les quantités"),
 'math': ('الحساب والقياس', 'Maths and measuring', 'Mathe und Messen', 'Maths et mesures'),
 'earth': ('كوكبنا', 'Our planet', 'Unser Planet', 'Notre planète'),
 'country': ('بلاد العالم', 'Countries', 'Länder', 'Les pays'),
 'egypt': ('مصر', 'Egypt', 'Ägypten', 'Égypte'),
 'world': ('معالم العالم', 'World landmarks', 'Weltwunder', 'Monuments du monde'),
 'deen': ('ديني', 'My faith', 'Mein Glaube', 'Ma foi'),
 'nature2': ('علوم الطبيعة', 'Nature science', 'Naturwissenschaft', 'Sciences de la nature'),
 'senses': ('حواسي', 'My senses', 'Meine Sinne', 'Mes sens'),
 'inside': ('جسمي من جوه', 'Inside my body', 'In meinem Körper', 'Dans mon corps'),
 'material': ('الخامات', 'Materials', 'Materialien', 'Les matières'),
 'drink': ('مشروبات', 'Drinks', 'Getränke', 'Les boissons'),
 'sweet': ('حلويات', 'Sweets', 'Süßes', 'Les douceurs'),
 'egyfood': ('أكلات مصرية', 'Egyptian food', 'Ägyptisches Essen', 'Cuisine égyptienne'),
 'playground': ('الملعب والبحر', 'Playground and beach', 'Spielplatz und Strand', 'Aire de jeux et plage'),
 'people2': ('ناس بتساعدنا', 'People who help us', 'Menschen, die uns helfen', 'Ceux qui nous aident'),
 'instrument': ('آلات موسيقية', 'Instruments', 'Instrumente', 'Instruments'),
 'tech': ('التكنولوجيا', 'Technology', 'Technik', 'Technologie'),
 'accessory': ('إكسسوارات', 'Accessories', 'Zubehör', 'Accessoires'),
 'party': ('الحفلات', 'Parties', 'Feste', 'Les fêtes'),
}
AGE_NOTE = {'1-3': 'ages 1-3', '2-6': 'ages 2-6', '3-6': 'ages 3-6', '3-8': 'ages 3-8', '4-7': 'ages 4-7', '4-8': 'ages 4-8', '5-8': 'ages 5-8'}

# --- existing words (so nothing is asked twice)
def norm(s): return re.sub(r'[^a-z0-9 ]', '', s.lower().replace("'", '')).strip()
have = set()
for l in ['english']:
    for e in json.load(io.open(R + 'game_src/learn_games/src/english/words.json', encoding='utf-8')):
        have.add(norm(e.get('eng') or e['en']))
for fn in ['LEARN_EXPANSION_WORDS.csv']:
    for row in csv.DictReader(io.open(R + 'docs/' + fn, encoding='utf-8-sig')):
        have.add(norm(row['english']))
for row in csv.DictReader(io.open(R + 'docs/ENGLISH_EXPANSION_WORDS.csv', encoding='utf-8-sig')):
    for k in row:
        if k and k.lower().startswith('english'): have.add(norm(row[k]))

items = []
dups = []
for ln in io.open(R + 'tools/learn_coverage/new_items.txt', encoding='utf-8'):
    ln = ln.rstrip('\n')
    if not ln or ln.startswith('#'): continue
    f = ln.split('|')
    assert len(f) == 7, ln
    sec, age, en, ar, de, fr, pic = f
    key = norm(re.sub(r'\(.*?\)', '', en))
    if key in have and sec not in ('sounds', 'opposite', 'polite', 'question', 'people', 'action', 'where', 'time', 'math', 'number2', 'senses', 'deen', 'country', 'egypt', 'world', 'earth'):
        dups.append(f'{sec}: {en}')
        continue
    items.append(dict(sec=sec, age=age, en=en, ar=ar, de=de, fr=fr, pic=pic))

# ids and sheets
for i, it in enumerate(items, 1):
    it['id'] = f"z_{re.sub(r'[^a-z0-9]+', '_', norm(it['en']).replace(' ', '_')).strip('_')[:34]}"
seen = collections.Counter()
for it in items:
    seen[it['id']] += 1
    if seen[it['id']] > 1: it['id'] += f"_{seen[it['id']]}"

out = R + 'docs/LEARN_NEW_ITEMS.csv'
with io.open(out, 'w', encoding='utf-8-sig', newline='') as fh:
    w = csv.writer(fh, quoting=csv.QUOTE_ALL)
    w.writerow(['section', 'section_ar', 'ages', 'english', 'arabic', 'german', 'french', 'picture_id', 'what_to_draw'])
    for it in items:
        w.writerow([it['sec'], SEC[it['sec']][0], it['age'], it['en'], it['ar'], it['de'], it['fr'], it['id'], it['pic']])

# image sheets: 12 per sheet (4x3), same style rules as the earlier sheets
PRE = ("Polished kids' mobile-game art, cute 3D-cartoon look, glossy, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters). "
       "TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, no cast shadows, no frame, no text, no letters, no numbers. "
       "Exact grid, every cell the same size, each item centred with a clear margin, nothing touching the cell edge. Grid of 4 columns x 3 rows. One cute glossy 3D object or character per cell, in this exact order left to right, top to bottom: ")
POST = " Each one clearly recognisable for a 3-year-old, friendly smile on animals and people, one single subject per cell."
# flags/landmarks/hieroglyph-like content: no text on flags is fine (flags are patterns); say so
bysec = collections.OrderedDict()
for it in items: bysec.setdefault(it['sec'], []).append(it)
md = ['# صور الأقسام الجديدة لوضع «اتعلّم» — برومتات الشيتات (LNW)', '',
      'نفس شات ChatGPT الواحد. كل شيت 4 أعمدة × 3 صفوف = 12 صورة بالترتيب المكتوب. اسم كل صورة (picture_id) في `docs/LEARN_NEW_ITEMS.csv`. ',
      'الأعلام: ارسم شكل العلم بألوانه بس من غير أي كلمة مكتوبة عليه. الأفعال/الصفات: مشهد طفل واحد (أو شخصية) بيعمل الحاجة. الأضداد: الاتنين جنب بعض في نفس الخانة (صورتين صغيرتين). كلمات المعالم والأماكن: مبنى/مكان واحد واضح من غير ناس كتير.', '']
sheet = 0
for sec, lst in bysec.items():
    for k in range(0, len(lst), 12):
        chunk = lst[k:k + 12]
        sheet += 1
        order = ', '.join(f"({j + 1}) {c['pic']}" for j, c in enumerate(chunk))
        ids = ', '.join(c['id'] for c in chunk)
        md += [f"**LNW-{sheet:02d}** — {SEC[sec][1]} ({len(chunk)} cells)", PRE + order + '.' + POST, f"أسماء الملفات بالترتيب: {ids}", '']
io.open(R + 'docs/LEARN_NEW_IMAGE_PROMPTS.md', 'w', encoding='utf-8').write('\n'.join(md))

# ---- parity gaps: what Arabic/English have per section that German/French do not
sys.path.insert(0, '.')
print('items', len(items), 'sheets', sheet, 'dups skipped', len(dups))
io.open(R + 'tools/learn_coverage/summary.json', 'w', encoding='utf-8').write(json.dumps({'items': len(items), 'sheets': sheet, 'dups': dups, 'bysec': {k: len(v) for k, v in bysec.items()}}, ensure_ascii=False, indent=1))
