# Builds game_src/learn_games/src/german/words.json: the German words of docs/GERMAN_WORDLIST.csv shown with the SAME pictures/signs as the
# English word of that row (game_src/learn_games/src/english/words.json). Nothing is invented: a row whose English word has no picture is left out.
#   python -X utf8 tools/make_german_data.py
import csv, io, json
en = json.load(io.open('game_src/learn_games/src/english/words.json', encoding='utf-8'))
by = {(e['cat'], e['en']): e for e in en}
rows = list(csv.DictReader(io.open('docs/GERMAN_WORDLIST.csv', encoding='utf-8-sig')))
out, skipped = [], []
for r in rows:
    cat, ew, de = r['category'], r['english_word'], r['german_word']
    base = by.get((cat, ew))
    if cat == 'letters (German only)':
        c = ew.split()[-1]
        e = {'cat': cat}
        e['ch'] = 'ß' if c == 'ß' else c.upper() + c.lower()
    elif base is None:
        skipped.append(cat + ':' + ew); continue
    else:
        e = {k: v for k, v in base.items() if k not in ('en', 'w', 's', 'ar', 'cat')}
        e['cat'] = cat
        if cat in ('days', 'months', 'seasons', 'parts of the day'): e['ch'] = de.capitalize()
        if base.get('ar'): e['ar'] = base['ar']
    e['en'] = de                       # the word as shown (German nouns keep their capital)
    e['eng'] = ew                      # the English word of the row (for the parent / tests)
    e['w'] = r['clip1_word_normal']; e['s'] = r['clip3_sentence']
    out.append(e)
io.open('game_src/learn_games/src/german/words.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(out, ensure_ascii=False, indent=0))
print(len(out), 'words; skipped', len(skipped), skipped[:15])
