# -*- coding: utf-8 -*-
# Builds the files the owner needs to record / generate (2026-11-26):
#   docs/ENGLISH_EXPANSION_WORDS.csv       every NEW English word (voice: word, slow, sentence + the Arabic word), with its picture status
#   docs/ENGLISH_EXPANSION_SENTENCES.csv   the sentences of the new question types (numbers, colours x shapes, letters, time, praise)
#   docs/ENGLISH_EXPANSION_IMAGE_PROMPTS.md  picture-sheet prompts for the words that have no picture yet
#   docs/ENGLISH_EXPANSION_PLAN.md         the counts per level
#   python -X utf8 tools/en_expansion/build.py
import csv, io, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from data import *
NEW['Food'] += [('pancake','فطيرة حلوة'),('popcorn','فشار'),('sausage','سجق'),('tuna','تونة'),('lentil soup','شوربة عدس'),('mango juice','عصير مانجا')]
NEW['My home and my city'] += [('balcony','بلكونة'),('garage','جراج'),('lift','أسانسير'),('hall','صالة'),('toilet','تواليت'),('shower','دش'),('bathtub','بانيو'),
  ('washing machine','غسالة'),('vacuum cleaner','مكنسة كهربا'),('iron','مكواة'),('hanger','شماعة'),('shelf','رف'),('drawer','درج'),('cupboard','دولاب مطبخ'),
  ('school gate','بوابة المدرسة'),('playground','ملعب'),('swimming pool','حمام سباحة'),('cinema','سينما'),('restaurant','مطعم'),('pharmacy','صيدلية'),
  ('supermarket','سوبر ماركت'),('police station','قسم الشرطة'),('post office','مكتب البريد'),('museum','متحف'),('stadium','استاد'),('sand','رمل')]

ROOT = os.path.join(os.path.dirname(__file__), '..', '..')
D = lambda p: os.path.join(ROOT, 'docs', p)
W = json.load(io.open(os.path.join(ROOT, 'game_src/learn_games/src/english/words.json'), encoding='utf-8'))
have_now = {}
for w in W:
    have_now.setdefault(w['cat'], 0)
    have_now[w['cat']] += 1

def sentence(en):
    if en in PLURAL: return f'These are {en}.'
    if en in UNCOUNT:
        return f'I feel {en}.' if en in FEELINGS else f'This is {en}.'
    art = 'an' if en[0] in 'aeiou' else 'a'
    return f'This is {art} {en}.'

rows = []
for en, ar, thing in EXIST:
    rows.append(('Around me', 'HAS PICTURE (' + thing + ')', en, ar))
for lvl, items in NEW.items():
    for en, ar in items:
        rows.append((lvl, 'NEEDS PICTURE', en, ar))
with io.open(D('ENGLISH_EXPANSION_WORDS.csv'), 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f)
    w.writerow(['level', 'picture', 'english_word', 'arabic_word', 'clip1_word_normal', 'clip2_same_word_READ_SLOWLY', 'clip3_sentence', 'arabic_clip_text'])
    for lvl, pic, en, ar in rows:
        w.writerow([lvl, pic, en, ar, en, en, sentence(en), ar])

# ---- sentences of the new question types
S = []
add = lambda level, kind, text, note='': S.append((level, kind, text, note))
for t in ['Great job!', 'Well done!', 'Super!', 'Excellent!', 'Wow, you did it!', 'Good listening!', 'Try again!', 'Almost!', 'Look and listen!', "Let's learn English!"]:
    add('all', 'praise / help', t)
OBJ = ['apple', 'ball', 'star', 'duck', 'flower']
add('Numbers', 'question', 'How many?')
for o in OBJ:
    add('Numbers', 'plural object (said after the number)', o + 's')
add('Numbers', 'question', 'Show me the number.')
add('Numbers', 'question', 'Which number is bigger?')
add('Numbers', 'question', 'Which number is smaller?')
for n in ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']:
    pass  # the number words themselves already have the owner's clips
COLS = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'brown']
SHAPES = ['circle', 'square', 'triangle', 'star', 'heart', 'octagon', 'crescent', 'plus', 'semicircle', 'trapezoid', 'parallelogram', 'hexagram', 'drop']
for c in COLS:
    for s in SHAPES:
        add('Colours and shapes', 'phrase (word + slow + sentence)', f'{c} {s}', f'This is a {c} {s}.')
for i, wd in enumerate(LETTER_WORDS):
    L = chr(65 + i)
    wd2 = wd.rstrip('*')
    add('ABC', 'letter + word', f'{L} is for {wd2}.', 'picture is NEW' if wd.endswith('*') else '')
    add('ABC', 'big and small', f'Big {L}, small {L.lower()}.')
    add('ABC', 'letter sound', f'{L} says ' + {'A':'a','B':'buh','C':'kuh','D':'duh','E':'eh','F':'fff','G':'guh','H':'huh','I':'ih','J':'juh','K':'kuh','L':'lll','M':'mmm','N':'nnn','O':'oh','P':'puh','Q':'kwuh','R':'rrr','S':'sss','T':'tuh','U':'uh','V':'vvv','W':'wuh','X':'ks','Y':'yuh','Z':'zzz'}[L] + '.', 'check the pronunciation by ear')
DAYS = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
for i, d in enumerate(DAYS):
    add('Time and my day', 'question', f'What comes after {d}?')
    add('Time and my day', 'question', f'What comes before {d}?')
    add('Time and my day', 'sentence', f'Today is {d}.')
for m in MONTHS:
    add('Time and my day', 'question', f'What comes after {m}?')
    add('Time and my day', 'question', f'What comes before {m}?')
    add('Time and my day', 'sentence', f'It is {m}.')
for h in range(1, 13):
    add('Time and my day', 'clock', f"It is {h} o'clock.")
for t in ['I wake up in the morning.', 'I wash my face.', 'I eat breakfast.', 'I go to school.', 'I eat lunch.', 'I play in the afternoon.', 'I eat dinner in the evening.',
          'I have a bath.', 'I brush my teeth.', 'I sleep at night.']:
    add('Time and my day', 'routine sentence', t)
with io.open(D('ENGLISH_EXPANSION_SENTENCES.csv'), 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f)
    w.writerow(['level', 'type', 'english_text_to_say', 'note'])
    w.writerows(S)

# ---- image prompts (sheets of 12 = 4 x 3)
BASE = "Polished kids' mobile-game art, cute 3D-cartoon look, glossy, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters)."
TECH = 'TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, no cast shadows, no frame, no text, no letters, no numbers. Exact grid, every cell the same size, each item centred with a clear margin, nothing touching the cell edge.'
need = [(l, en) for l, items in NEW.items() for en, _ in items] + [('ABC', wd.rstrip('*')) for wd in LETTER_WORDS if wd.endswith('*')]
md = ['# صور الإنجليزي الجديدة — برومتات الشيتات', '', 'نفس شات ChatGPT الواحد. كل شيت 4 أعمدة × 3 صفوف = 12 صورة. **اكتب الترتيب زي ما هو** (من الشمال لليمين ومن فوق لتحت) عشان أقصّها بالاسم. الكلمات اللي ليها صورة جاهزة في اللعبة مش هنا.', '', f'**Style base:** {BASE}', '', f'**TECH (انسخها في كل شيت):** {TECH}', '', '---', '']
n = 0
for i in range(0, len(need), 12):
    chunk = need[i:i + 12]
    n += 1
    names = ', '.join(f'({k + 1}) {en}' for k, (_, en) in enumerate(chunk))
    md += [f'**EN-IMG-{n:02d}** — ' + ' / '.join(sorted({l for l, _ in chunk})), f'{BASE} {TECH} Grid of 4 columns x 3 rows. One cute glossy 3D object or character per cell, in this exact order left to right, top to bottom: {names}. Each one clearly recognisable for a 3-year-old, friendly smile on animals and people, one single subject per cell.', '']
io.open(D('ENGLISH_EXPANSION_IMAGE_PROMPTS.md'), 'w', encoding='utf-8', newline='\n').write('\n'.join(md))

# ---- plan with counts
c = lambda cat: have_now.get(cat, 0)
exist_n = len(EXIST)
plan = {
 'Animals and sea': (c('animals') + 9, len(NEW['Animals']), 'animals 64 + 9 sea animals that already have pictures'),
 'Around me (things)': (c('picture words') + c('toys and fruit (sorting)') + c('things of a colour') + c('animal foods') + exist_n - 9, 0,
                        'picture words, sorting toys, things of a colour, animal food + the app\'s existing vehicle / garden / beach / farm / castle / city / desert pictures'),
 'Me and my world': (c('picture pack: body') + c('picture pack: clothes') + c('picture pack: family') + c('picture pack: school') + c('picture pack: jobs') + c('picture pack: music'), len(NEW['Me and my world']), 'body, clothes, family, school, jobs, music + feelings, more body, clothes, jobs'),
 'Food': (c('picture pack: food') + c('picture pack: veg') + c('picture pack: fruit2') + 13 + 6, len(NEW['Food']), 'food, vegetables, fruit + fruit/sweets that have pictures + Egyptian foods'),
 'My home and my city': (c('picture pack: weather') + c('picture pack: insects'), len(NEW['My home and my city']), 'weather + insects + home things, places, nature'),
 'Numbers': (c('numbers 0-20') + c('tens to 100'), 21 * 5, '0-20 x 5 kinds of things to count ("How many?") + tens'),
 'ABC': (26, 26 + 26 + 26, '26 letter names + "A is for apple" + "Big A, small a" + letter sounds'),
 'Colours and shapes': (c('colours') + c('shapes'), len(COLS) * len(SHAPES), '34 colours + 13 shapes + 8 colours x 13 shapes'),
 'Time and my day': (c('days') + c('months') + c('seasons') + c('parts of the day') + c('daily routine'), 21 + 33 + 12 + 10, 'days, months, seasons, parts of the day, routine + before/after questions, clock, sentences'),
}
pl = ['# خطة توسيع الإنجليزي: 100+ في كل مستوى', '', 'العدد = (موجود دلوقتي أو عنده صورة جاهزة) + (جديد محتاج صوت/صورة). كل "حالة" = كلمة أو سؤال أو حرف أو رقم بيتسأل للطفل.', '',
      '| المستوى | موجود | جديد | المجموع | من إيه |', '|---|---|---|---|---|']
for k, (a, b, why) in plan.items():
    pl.append(f'| {k} | {a} | {b} | **{a + b}** | {why} |')
pl += ['', f'- كلمات جديدة بصوت (ENGLISH_EXPANSION_WORDS.csv): {len(rows)} ({len(EXIST)} عندها صورة، {sum(len(v) for v in NEW.values())} محتاجة صورة).',
       f'- جمل لأنواع الأسئلة الجديدة (ENGLISH_EXPANSION_SENTENCES.csv): {len(S)}.',
       f'- صور جديدة: {len(need)} (في {n} شيتات).',
       '', 'الصوت لكل كلمة: 3 ملفات (الكلمة، الكلمة ببطء، الجملة) + ملف عربي للكلمة (الـCSV فيه نص كل واحد).']
io.open(D('ENGLISH_EXPANSION_PLAN.md'), 'w', encoding='utf-8', newline='\n').write('\n'.join(pl) + '\n')
print(len(rows), 'words,', len(S), 'sentences,', len(need), 'images in', n, 'sheets')
for k, (a, b, _) in plan.items():
    print(f'{k:22s} {a:4d} + {b:4d} = {a + b}')
