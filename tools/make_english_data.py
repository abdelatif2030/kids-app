# Builds game_src/learn_games/src/english/words.json from docs/ENGLISH_WORDLIST.csv (the owner's English voice pack) and the
# pictures the app already has (tools reads /tmp-free: pass the Arabic-name -> thing json made by dumping the game data).
#   python -X utf8 tools/make_english_data.py <ar_things.json>
# Each entry: cat, en, w (word clip text), s (sentence clip text) and how it is shown: thing (3D picture), n (number), ch (letter / word sign),
# color (colour id), shape (shape id). Words with no picture or sign are left out (nothing is invented).
import csv, io, json, re, sys
norm = lambda s: re.sub('[ًٌٍَُِّْ]', '', s).replace('ة', 'ه').replace('أ', 'ا').replace('إ', 'ا').replace('ى', 'ي')
things = {norm(k): v for k, v in json.load(open(sys.argv[1], encoding='utf-8')).items()}
rows = list(csv.DictReader(io.open('docs/ENGLISH_WORDLIST.csv', encoding='utf-8-sig')))
COLORS = set('red blue yellow green orange purple pink black white brown gray skyblue navy lightgreen darkgreen turquoise gold silver beige maroon lemon peach lilac olive mustard magenta indigo crimson bronze caramel charcoal mint coral sand'.split())
SHAPES = set('circle square triangle star heart octagon crescent plus semicircle trapezoid parallelogram hexagram drop'.split())
# pictures the app has under other names (checked by hand against colors.js, animals/sim.js and HABITS)
MANUAL = {
 'strawberry':'strawberry','fire truck':'firetruck','sunflower':'sunflower_1','leaf':'j_leaf','tang fish':'u_tang','bluebird':'bird_blue',
 'blue planet':'s_blueplanet','cotton candy':'r_cotton','pink planet':'s_pinkplanet',
 'carrot':'carrot','grass':'grass','bone':'bone','meat':'o_chicken','hay':'f_haypile','seeds':'seeds','teddy bear':'teddy',
 'wake up':'h_clock','wash my face':'soap','eat breakfast':'bowl','go to school':'backpack','eat lunch':'pot','play':'teddy','eat dinner':'plate',
 'have a bath':'tub','brush my teeth':'toothbrush','sleep':'bed',
}
out, skipped = [], []
for r in rows:
    cat, en = r['category'], r['english_word']
    e = {'cat': cat, 'en': en, 'w': r['clip1_word_normal'], 's': r['clip3_sentence']}
    ar = r['arabic_hint']
    if cat.startswith('numbers') or cat.startswith('tens'):
        e['n'] = int(ar)
    elif cat.startswith('letters'):
        c = en.split()[-1]
        e['ch'] = c.upper() + c.lower()
    elif cat == 'colours':
        cid = en.replace(' ', '')
        if cid not in COLORS: skipped.append(en); continue
        e['color'] = cid
    elif cat == 'shapes':
        if en not in SHAPES: skipped.append(en); continue
        e['shape'] = en
    elif cat in ('days', 'months', 'seasons', 'parts of the day'):
        e['ch'] = en.capitalize()
    elif cat in ('places (where is the ball)', 'pattern beads'):
        continue  # phrases: later, with their own pictures
    elif en in MANUAL and cat in ('daily routine','things of a colour','animal foods','toys and fruit (sorting)'):
        e['thing'] = MANUAL[en]
    else:
        h = norm(ar[2:] if ar.startswith('ال') else ar)
        t = things.get(h)
        if not t: skipped.append(cat + ':' + en); continue
        e['thing'] = t[0]
    out.append(e)
io.open('game_src/learn_games/src/english/words.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(out, ensure_ascii=False, indent=0))
print(len(out), 'words; skipped', skipped)
