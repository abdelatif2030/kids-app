import json, glob, re
ar = json.load(open('tools/ar_all.json'))
en = {}
for f in sorted(glob.glob('tools/en/en_*.txt')):
    for line in open(f, encoding='utf-8').read().split('\n'):
        if not line.strip(): continue
        i, _, t = line.partition('|')
        en[int(i)] = t.replace('\\n', '\n')
en[980] = ', '
def lit(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('$', '\\$').replace('\n', '\\n') + "'"
rows = []
missing = []
for i, a in enumerate(ar):
    if i in en and en[i].strip():
        rows.append(f"  {lit(a)}: {lit(en[i])},")
    else:
        missing.append((i, a))
extra = {}
for line in open('tools/en/extra.txt', encoding='utf-8').read().split('\n'):
    if '|' in line:
        a, _, e = line.partition('|')
        extra[a] = e
have = set(ar)
for a, e in extra.items():
    if a in have:
        print('duplicate key (kept the first):', a)
    else:
        rows.append(f"  {lit(a)}: {lit(e)},")
out = ["/// English texts for static Arabic source strings (see `loc` in strings.dart).",
       "/// Generated from tools/ar_all.json + tools/en/*.txt; edit those and rebuild.",
       "const Map<String, String> kEnglish = {"] + rows + ["};", ""]
open('lib/l10n/en_dictionary.dart', 'w', encoding='utf-8').write('\n'.join(out))
print(len(rows), 'entries;', len(missing), 'untranslated (kept Arabic)')
json.dump(missing, open('tools/missing.json', 'w'), ensure_ascii=False)
