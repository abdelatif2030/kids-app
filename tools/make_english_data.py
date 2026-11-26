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
 'wake up':'x_routine_wake_up','wash my face':'x_routine_wash_face','eat breakfast':'x_routine_breakfast','go to school':'x_routine_school','eat lunch':'x_routine_lunch','play':'x_routine_play','eat dinner':'x_routine_dinner',
 'have a bath':'x_routine_bath','brush my teeth':'x_routine_teeth','sleep':'x_routine_sleep',
 'blocks':'x_toy_blocks','yo-yo':'x_yo_yo','insect':'x_caterpillar',
 'on the table':'x_where_on','under the table':'x_where_under','inside the box':'x_where_inside','next to the box':'x_where_next_to_box','next to the table':'x_where_next_to_table',
 'red ball':'x_bead_red_ball','blue cube':'x_bead_blue_cube','yellow star':'x_bead_yellow_star','green heart':'x_bead_green_heart','purple ring':'x_bead_purple_ring','orange drop':'x_bead_orange_drop',
}
NEW_SHAPES = {'rectangle','oval','diamond','pentagon','hexagon','arrow','ring','cube','ball','cone','cylinder','pyramid'}
AR_TIME = {
 'saturday':'السبت','sunday':'الأحد','monday':'الاثنين','tuesday':'التلات','wednesday':'الأربع','thursday':'الخميس','friday':'الجمعة',
 'january':'يناير','february':'فبراير','march':'مارس','april':'أبريل','may':'مايو','june':'يونيو','july':'يوليو','august':'أغسطس','september':'سبتمبر','october':'أكتوبر','november':'نوفمبر','december':'ديسمبر',
 'summer':'الصيف','winter':'الشتا','spring':'الربيع','autumn':'الخريف','morning':'الصبح','noon':'الضهر','evening':'المسا','night':'الليل',
}
AR_MANUAL = {'carrot':'جزرة','grass':'حشيش','bone':'عضمة','meat':'لحمة','hay':'تبن','seeds':'حَب','strawberry':'فراولة','fire truck':'عربية مطافي',
 'sunflower':'عباد الشمس','leaf':'ورقة شجر','tang fish':'سمكة زرقا','bluebird':'عصفور أزرق','blue planet':'كوكب أزرق','cotton candy':'غزل البنات',
 'pink planet':'كوكب وردي','teddy bear':'دبدوب'}
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
        if en in NEW_SHAPES: e['thing'] = 'x_' + en
        elif en not in SHAPES: skipped.append(en); continue
        else: e['shape'] = en
    elif cat in ('days', 'months', 'seasons', 'parts of the day'):
        e['ch'] = en.capitalize()
    elif en in MANUAL and cat in ('daily routine','things of a colour','animal foods','toys and fruit (sorting)','places (where is the ball)','pattern beads'):
        e['thing'] = MANUAL[en]
    else:
        h = norm(ar[2:] if ar.startswith('ال') else ar)
        t = things.get(h)
        if not t: skipped.append(cat + ':' + en); continue
        e['thing'] = t[0]
    # the Arabic word said after the praise (the owner: the child hears what he answered in Arabic too); letters have none
    if cat in ('days','months','seasons','parts of the day'): e['ar'] = AR_TIME[en]
    elif en in AR_MANUAL and not ar: e['ar'] = AR_MANUAL[en]
    elif 'ch' not in e and 'n' not in e and ar and not ar.isdigit(): e['ar'] = ar
    out.append(e)
# ---- the expansion (docs/ENGLISH_EXPANSION_WORDS.csv): new words with the owner's new pictures (x_<word>) or pictures the app already has ----
import os
slug = lambda w: 'x_' + re.sub(r'[^a-z0-9]+', '_', w.lower()).strip('_')
CLOTHES = {'shorts','skirt','sweater','boots','sandals','t-shirt','coat','belt'}
JOBS = {'baker','dentist','mechanic','waiter','captain','scientist','astronaut','gardener','fisherman','shopkeeper','tailor','vet'}
CITY = {'garden','park','zoo','farm','beach','market','mosque','church','library','bakery','shop','bank','airport','train station','street','traffic light','river','sea','lake','island','forest','desert','hill','sky','star','volcano','cave','waterfall','school gate','playground','swimming pool','cinema','restaurant','pharmacy','supermarket','police station','post office','museum','stadium','sand'}
have = {e['en'].lower() for e in out}
added, nopic = 0, []
for r in csv.DictReader(io.open('docs/ENGLISH_EXPANSION_WORDS.csv', encoding='utf-8-sig')):
    en, lvl = r['english_word'], r['level']
    if en.lower() in have: continue
    m = re.match(r'HAS PICTURE \((.+)\)', r['picture'])
    thing = m.group(1) if m else slug(en)
    if not m and not os.path.exists('assets/games/art/%s.webp' % thing): nopic.append(en); continue
    if lvl == 'Animals': cat = 'x:animals'
    elif lvl == 'Food': cat = 'x:food'
    elif lvl == 'Me and my world': cat = 'x:school' if en in CLOTHES else 'x:world' if en in JOBS else 'x:family'
    elif lvl == 'My home and my city': cat = 'x:city' if en in CITY else 'x:home'
    else: cat = 'x:around'
    out.append({'cat': cat, 'en': en, 'w': r['clip1_word_normal'], 's': r['clip3_sentence'], 'thing': thing, 'ar': r['arabic_word']})
    have.add(en.lower()); added += 1
print('expansion: added', added, 'without picture yet', nopic)
io.open('game_src/learn_games/src/english/words.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(out, ensure_ascii=False, indent=0))
print(len(out), 'words; skipped', skipped)
