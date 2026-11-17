# Next picture packs (not yet drawn): the words, their diacritized readings and the ChatGPT prompts that make the sheets.
#   PYTHONUTF8=1 python tools/game_voice/make_packs.py
# Writes tools/game_voice/packs/<pack>.json (read by make_more_words.py: a pack is switched on automatically once ALL of its
# pictures exist in assets/games/art) and docs/IMAGE_SCRIPTS_NEXT.md (the prompts, in the same grid order as the pack).
import io, json, os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..', '..')
SUN = set('تثدذرزسشصضطظلن')
STYLE = ('Glossy 3D-rendered cartoon style for a children\'s learning game: soft studio lighting, smooth rounded shapes, bright saturated colors, '
         'thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no logos, nothing scary.')
SHEET = ('Image 1536x1024, pure flat white background (#FFFFFF). A grid of {cols} columns x {rows} rows = {n} items, each centered in its own invisible '
         'cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar '
         'visual size. No ground shadows, no glow beams, no light rays, no particles, no motion trails. Light or white items must have a subtle soft '
         'grey-blue shaded edge so they stay visible on the white.')

# (art name, english for the prompt, word, diacritized word, letter id, youngest age)
PACKS = {
 'veg': ('v', 'Vegetables', [
  ('tomato', 'red tomato', 'طماطم', 'طَمَاطِم', 'tah', 4), ('cucumber', 'green cucumber', 'خيار', 'خِيَار', 'khaa', 4), ('potato', 'brown potato', 'بطاطس', 'بَطَاطِس', 'baa', 4),
  ('onion', 'onion', 'بصل', 'بَصَل', 'baa', 5), ('eggplant', 'purple eggplant', 'باذنجان', 'بَاذِنْجَان', 'baa', 5), ('pepper', 'red bell pepper', 'فلفل', 'فِلْفِل', 'faa', 5),
  ('lettuce', 'lettuce head', 'خس', 'خَس', 'khaa', 5), ('broccoli', 'broccoli', 'بروكلي', 'بُرُوكْلِي', 'baa', 5), ('peas', 'open pea pod with peas', 'بسلة', 'بِسِلَّة', 'baa', 6),
  ('pumpkin', 'orange pumpkin', 'قرع', 'قَرْع', 'qaaf', 5), ('garlic', 'garlic bulb', 'ثوم', 'ثُوم', 'thaa', 6), ('mushroom', 'white mushroom', 'فطر', 'فُطْر', 'faa', 6)]),
 'fruit2': ('q', 'More fruit', [
  ('kiwi', 'kiwi fruit cut in half', 'كيوي', 'كِيوِي', 'kaaf', 5), ('melon', 'melon slice', 'شمام', 'شَمَّام', 'sheen', 5), ('dates', 'bunch of dates', 'بلح', 'بَلَح', 'baa', 5),
  ('fig', 'fig', 'تين', 'تِين', 'taa', 5), ('apricot', 'apricot', 'مشمش', 'مِشْمِش', 'meem', 5), ('berries', 'blue berries', 'توت', 'تُوت', 'taa', 4),
  ('plum', 'plum', 'برقوق', 'بَرْقُوق', 'baa', 6), ('avocado', 'avocado cut in half', 'أفوكادو', 'أَفُوكَادُو', 'alef', 6), ('peach', 'peach', 'خوخ', 'خُوخ', 'khaa', 5),
  ('cherry', 'two red cherries', 'كرز', 'كَرَز', 'kaaf', 4), ('olives', 'green olives on a branch', 'زيتون', 'زَيْتُون', 'zayn', 5), ('coconut', 'coconut cut in half', 'نارجيل', 'نَارْجِيل', 'noon', 6)]),
 'school': ('e', 'School', [
  ('pencil', 'yellow pencil', 'قلم', 'قَلَم', 'qaaf', 3), ('book', 'closed colorful book', 'كتاب', 'كِتَاب', 'kaaf', 3), ('notebook', 'spiral notebook', 'كراسة', 'كُرَّاسَة', 'kaaf', 4),
  ('scissors', 'child scissors', 'مقص', 'مَقَص', 'meem', 5), ('ruler', 'ruler', 'مسطرة', 'مِسْطَرَة', 'meem', 5), ('eraser', 'pink eraser', 'أستيكة', 'أُسْتِيكَة', 'alef', 5),
  ('crayons', 'box of crayons', 'ألوان', 'أَلْوَان', 'alef', 4), ('board', 'classroom blackboard on a stand', 'سبورة', 'سَبُّورَة', 'seen', 5), ('map', 'folded colorful map', 'خريطة', 'خَرِيطَة', 'khaa', 6),
  ('glue', 'glue bottle', 'صمغ', 'صَمْغ', 'sad', 6), ('desk', 'school desk with a chair', 'مكتب', 'مَكْتَب', 'meem', 5), ('paper', 'sheet of paper', 'ورقة', 'وَرَقَة', 'waaw', 4)]),
 'clothes': ('l', 'Clothes', [
  ('shirt', 'blue shirt', 'قميص', 'قَمِيص', 'qaaf', 4), ('trousers', 'trousers', 'بنطلون', 'بَنْطَلُون', 'baa', 4), ('dress', 'pink dress', 'فستان', 'فُسْتَان', 'faa', 4),
  ('hat', 'sun hat', 'قبعة', 'قُبَّعَة', 'qaaf', 4), ('socks', 'pair of striped socks', 'شراب', 'شُرَّاب', 'sheen', 3), ('jacket', 'jacket', 'جاكت', 'جَاكِت', 'jeem', 5),
  ('scarf', 'long scarf', 'وشاح', 'وِشَاح', 'waaw', 6), ('gloves', 'pair of gloves', 'قفاز', 'قُفَّاز', 'qaaf', 6), ('glasses', 'round glasses', 'نضارة', 'نَضَّارَة', 'noon', 5),
  ('cap', 'baseball cap', 'كاب', 'كَاب', 'kaaf', 4), ('pajamas', 'pajamas with stars', 'بيجامة', 'بِيجَامَة', 'baa', 4), ('raincoat', 'yellow raincoat', 'معطف', 'مِعْطَف', 'meem', 6)]),
 'body': ('y', 'Body parts (cute, friendly, not realistic)', [
  ('eye', 'cartoon eye', 'عين', 'عَيْن', 'ayn', 3), ('ear', 'cartoon ear', 'ودن', 'وِدْن', 'waaw', 3), ('nose', 'cartoon nose', 'أنف', 'أَنْف', 'alef', 3),
  ('mouth', 'smiling mouth', 'فم', 'فَم', 'faa', 3), ('hand', 'waving hand', 'إيد', 'إِيد', 'alef', 3), ('foot', 'bare foot', 'رجل', 'رِجْل', 'raa', 3),
  ('hair', 'brown hair tuft', 'شعر', 'شَعْر', 'sheen', 4), ('tooth', 'shiny white tooth', 'سنة', 'سِنَّة', 'seen', 4), ('head', 'child head with a happy face', 'راس', 'رَاس', 'raa', 3),
  ('finger', 'pointing finger', 'صباع', 'صُبَّاع', 'sad', 4), ('knee', 'knee', 'ركبة', 'رُكْبَة', 'raa', 5), ('belly', 'round belly', 'بطن', 'بَطْن', 'baa', 5)]),
 'jobs': ('z', 'People who help us (friendly cartoon adults, standing)', [
  ('doctor', 'doctor with a stethoscope', 'دكتور', 'دُكْتُور', 'dal', 3), ('teacher', 'teacher holding a book', 'مدرس', 'مُدَرِّس', 'meem', 4), ('police', 'police officer', 'شرطي', 'شُرْطِي', 'sheen', 4),
  ('firefighter', 'firefighter with a helmet', 'إطفائي', 'إِطْفَائِي', 'alef', 5), ('farmer', 'farmer with a straw hat', 'فلاح', 'فَلَّاح', 'faa', 5), ('cook', 'cook with a tall white hat', 'طباخ', 'طَبَّاخ', 'tah', 5),
  ('driver', 'bus driver', 'سواق', 'سَوَّاق', 'seen', 5), ('pilot', 'pilot with a cap', 'طيار', 'طَيَّار', 'tah', 5), ('nurse', 'nurse', 'ممرضة', 'مُمَرِّضَة', 'meem', 6),
  ('builder', 'builder with a yellow helmet', 'بناء', 'بَنَّاء', 'baa', 6), ('singer', 'singer with a microphone', 'مطرب', 'مُطْرِب', 'meem', 6), ('painter', 'painter with a brush and palette', 'رسام', 'رَسَّام', 'raa', 5)]),
 'weather': ('t', 'Weather and nature', [
  ('rain', 'rain cloud with raindrops', 'مطر', 'مَطَر', 'meem', 4), ('snow', 'snow pile with snowflakes', 'ثلج', 'ثَلْج', 'thaa', 4), ('wind', 'swirling wind with leaves', 'هوا', 'هَوَا', 'haa2', 5),
  ('thunder', 'cloud with a lightning bolt', 'رعد', 'رَعْد', 'raa', 6), ('lightning', 'golden lightning bolt', 'برق', 'بَرْق', 'baa', 6), ('umbrella', 'open umbrella', 'شمسية', 'شَمْسِيَّة', 'sheen', 4),
  ('flake', 'big snowflake', 'ندفة', 'نُدْفَة', 'noon', 6), ('flower', 'red flower', 'زهرة', 'زَهْرَة', 'zayn', 3), ('leaves', 'orange autumn leaves', 'أوراق', 'أَوْرَاق', 'alef', 5),
  ('hot', 'very hot sun with a thermometer', 'حر', 'حَرّ', 'haa', 5), ('cold', 'cold thermometer with ice', 'برد', 'بَرْد', 'baa', 5), ('mountain', 'green mountain', 'جبل', 'جَبَل', 'jeem', 5)]),
 'food': ('o', 'Food and drinks', [
  ('bread', 'loaf of bread', 'عيش', 'عَيْش', 'ayn', 3), ('cheese', 'cheese wedge', 'جبنة', 'جُبْنَة', 'jeem', 4), ('egg', 'boiled egg', 'بيضة', 'بَيْضَة', 'baa', 3),
  ('milk', 'milk bottle', 'لبن', 'لَبَن', 'laam', 3), ('rice', 'bowl of rice', 'رز', 'رُزّ', 'raa', 4), ('chicken', 'cooked chicken leg', 'فراخ', 'فِرَاخ', 'faa', 5),
  ('juice', 'glass of orange juice with a straw', 'عصير', 'عَصِير', 'ayn', 4), ('water', 'glass of water', 'مية', 'مَيَّة', 'meem', 3), ('cookie', 'cookie', 'بسكوت', 'بِسْكُوت', 'baa', 4),
  ('honey', 'honey jar with a dipper', 'عسل', 'عَسَل', 'ayn', 5), ('soup', 'bowl of soup', 'شوربة', 'شُورْبَة', 'sheen', 5), ('pizza', 'pizza slice', 'بيتزا', 'بِيتْزَا', 'baa', 4)]),
 'music': ('m', 'Music', [
  ('drum', 'drum with sticks', 'طبلة', 'طَبْلَة', 'tah', 4), ('guitar', 'guitar', 'جيتار', 'جِيتَار', 'jeem', 5), ('piano', 'small piano', 'بيانو', 'بِيَانُو', 'baa', 5),
  ('violin', 'violin with a bow', 'كمان', 'كَمَان', 'kaaf', 5), ('flute', 'reed flute (nay)', 'ناي', 'نَاي', 'noon', 6), ('trumpet', 'trumpet', 'بوق', 'بُوق', 'baa', 5),
  ('tambourine', 'tambourine (daff)', 'دف', 'دُفّ', 'dal', 5), ('oud', 'oud (Arabic lute)', 'عود', 'عُود', 'ayn', 6), ('mic', 'microphone', 'ميكروفون', 'مِيكْرُوفُون', 'meem', 5),
  ('headphones', 'headphones', 'سماعة', 'سَمَّاعَة', 'seen', 5), ('note', 'two music notes', 'نوتة', 'نُوتَة', 'noon', 6), ('bell', 'golden bell', 'جرس', 'جَرَس', 'jeem', 4)]),
 'insects': ('i', 'Small creatures and birds', [
  ('ant', 'friendly ant', 'نملة', 'نَمْلَة', 'noon', 4), ('fly', 'fly', 'ذبابة', 'ذُبَابَة', 'dhal', 6), ('spider', 'cute spider', 'عنكبوت', 'عَنْكَبُوت', 'ayn', 6),
  ('worm', 'green caterpillar', 'دودة', 'دُودَة', 'dal', 4), ('eagle', 'eagle', 'نسر', 'نِسْر', 'noon', 6), ('peacock', 'peacock with open tail', 'طاووس', 'طَاوُوس', 'tah', 6),
  ('flamingo', 'pink flamingo', 'فلامنجو', 'فِلَامِنْجُو', 'faa', 6), ('swan', 'white swan', 'بجعة', 'بَجَعَة', 'baa', 6), ('ostrich', 'ostrich', 'نعامة', 'نَعَامَة', 'noon', 6),
  ('sparrow', 'small sparrow', 'عصفورة', 'عُصْفُورَة', 'ayn', 4), ('bat', 'cute bat', 'خفاش', 'خُفَّاش', 'khaa', 6), ('snail', 'snail', 'حلزونة', 'حَلَزُونَة', 'haa', 5)]),
 'family': ('a', 'Family (friendly cartoon people, standing, different ages)', [
  ('mama', 'mother', 'ماما', 'مَامَا', 'meem', 3), ('baba', 'father', 'بابا', 'بَابَا', 'baa', 3), ('grandma', 'grandmother', 'تيتة', 'تِيتَة', 'taa', 3),
  ('grandpa', 'grandfather', 'جدو', 'جَدُّو', 'jeem', 3), ('baby', 'baby', 'طفل', 'طِفْل', 'tah', 3), ('brother', 'older brother', 'أخ', 'أَخ', 'alef', 4),
  ('sister', 'older sister', 'أخت', 'أُخْت', 'alef', 4), ('boy', 'boy', 'ولد', 'وَلَد', 'waaw', 3), ('girl', 'girl', 'بنت', 'بِنْت', 'baa', 3),
  ('friends', 'two friends holding hands', 'صحاب', 'صُحَاب', 'sad', 5), ('family', 'family of four together', 'عيلة', 'عِيلَة', 'ayn', 5), ('uncle', 'uncle', 'عمو', 'عَمُّو', 'ayn', 5)]),
}


def the(word, wd):
    c = wd[0]
    return 'ال' + word, ('ال' + c + 'ّ' + wd[1:]) if word[0] in SUN else ('ال' + wd)


os.makedirs(os.path.join(HERE, 'packs'), exist_ok=True)
md = ['# Next picture packs (prompts for the new ChatGPT account)', '',
      'Each pack is ONE sheet: a 4 x 3 grid read left to right, top to bottom. Send the sheets back one at a time; Claude cuts them with',
      '`python tools/art/cut_pack.py <pack> <sheet number>` and rebuilds the game (the pack switches on when all 12 pictures exist).',
      'Paste the STYLE block, then the SHEET block, then the ITEMS line of each pack. Upload any finished sheet as the style reference.', '',
      '## STYLE', '```', STYLE, '```', '', '## SHEET (12 items)', '```', SHEET.format(cols=4, rows=3, n=12), '```', '']
for name, (pre, title, rows) in PACKS.items():
    items = []
    for art, eng, word, wd, letter, age in rows:
        t, thed = the(word, wd)
        items.append(dict(id=f'{pre}_{art}', thing=f'{pre}_{art}', letter=letter, word=word, wd=wd, the=t, thed=thed, age=age))
    json.dump(dict(pack=name, prefix=pre, title=title, cols=4, rows=3, items=items), io.open(os.path.join(HERE, 'packs', name + '.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    md += [f'## Pack `{name}` — {title} (art prefix `{pre}_`)', '```',
           f'{title} sheet. The 12 items, left to right, top to bottom: ' + '; '.join(r[1] for r in rows) + '.', '```', '']
md += ['## Panoramas and floors for NEW worlds (optional, one world = panorama + floor + decor sheet + pads sheet)', '',
       'The same recipe as the 12 worlds already built (see docs/LEARNING_WORLD_HANDOVER.md). Ideas for worlds 13+: farm night, mountain camp,',
       'playground, supermarket, kitchen, bedroom, school, hospital, airport, zoo, mosque courtyard (calm, no people), Ramadan street with lanterns.']
io.open(os.path.join(ROOT, 'docs', 'IMAGE_SCRIPTS_NEXT.md'), 'w', encoding='utf-8').write('\n'.join(md) + '\n')
print(sum(len(v[2]) for v in PACKS.values()), 'words in', len(PACKS), 'packs')
