# Builds the French world's words from tools/fr_data.py: game_src/learn_games/src/french/words.json (same pictures as the English row) and tools/fr_words.json
# (for docs/FRENCH_WORDLIST.csv, made by tools/make_french_csv.mjs).   python -X utf8 tools/make_french_data.py
import io, json, sys, os
sys.path.insert(0, 'tools')
from fr_data import CATS, SENT
en = json.load(io.open('game_src/learn_games/src/english/words.json', encoding='utf-8'))
by = {(e['cat'], e['en']): e for e in en}
def split(w):
    g = None
    if w.endswith('/m') or w.endswith('/f'): g, w = w[-1], w[:-2]
    return w, g
def sentence(cat, e, word, g):
    if (cat, e) in SENT: return SENT[(cat, e)]
    if cat in ('numbers 0-20', 'tens to 100'): return word[0].upper() + word[1:] + ' !'
    if cat == 'colours': return "C'est " + word + '.'
    if cat == 'days': return "Aujourd'hui, c'est " + word + '.'
    if cat == 'months': return 'Nous sommes en ' + word + '.'
    if cat == 'seasons': return "C'est " + word + '.'
    for art, ind in (('le ', 'un '), ('la ', 'une ')):
        if word.startswith(art): return "C'est " + ind + word[len(art):] + '.'
    if word.startswith("l'"): return "C'est " + ('un ' if g == 'm' else 'une ') + word[2:] + '.'
    if word.startswith('les '): return 'Ce sont des ' + word[4:] + '.'
    raise SystemExit('no rule: %s %s' % (cat, word))
out, plain, skipped = [], [], []
for cat, rows in CATS.items():
    for e, w in rows:
        word, g = split(w)
        s = sentence(cat, e, word, g)
        plain.append({'cat': cat, 'en': e, 'fr': word, 's': s})
        if cat == 'letters (French only)':
            c = e.split()[-1]; item = {'cat': cat, 'ch': c.upper() + c.lower()}
        else:
            base = by.get((cat, e))
            if base is None: skipped.append(cat + ':' + e); continue
            item = {k: v for k, v in base.items() if k not in ('en', 'w', 's', 'ar', 'cat')}
            item['cat'] = cat
            if cat in ('days', 'months', 'seasons', 'parts of the day'): item['ch'] = word[0].upper() + word[1:]
            if base.get('ar'): item['ar'] = base['ar']
        item['en'] = word; item['eng'] = e; item['lang'] = 'fr'; item['w'] = word; item['s'] = s
        out.append(item)
os.makedirs('game_src/learn_games/src/french', exist_ok=True)
io.open('game_src/learn_games/src/french/words.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(out, ensure_ascii=False, indent=0))
io.open('tools/fr_words.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(plain, ensure_ascii=False, indent=0))
print(len(out), 'French words; rows', len(plain), 'skipped', skipped)
