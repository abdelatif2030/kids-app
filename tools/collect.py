import sys, glob, re, json
sys.path.insert(0, 'tools')
from tr2 import tokens
from wrap_loc import unescape, group_value
AR = re.compile(r'[؀-ۿ]')
EX = ('lib/l10n/', 'letters_data', 'literacy/exercises', 'stories/story_data', 'library/vocab.dart')
seen = {}
order = []
for f in sorted(glob.glob('lib/**/*.dart', recursive=True)):
    if any(e in f for e in EX): continue
    src = open(f, encoding='utf-8').read()
    toks = tokens(src)
    skipr = []
    if f.endswith('journey/content.dart'):
        for name in ('_letters', '_easyLetters', '_stories'):
            m = re.search(r'^const %s\b' % name, src, re.M)
            if m:
                i = m.start(); depth = 0; j = i
                while j < len(src):
                    c = src[j]
                    if c == "'":
                        j += 1
                        while src[j] != "'":
                            if src[j] == '\\': j += 1
                            j += 1
                    elif c in '([{': depth += 1
                    elif c in ')]}': depth -= 1
                    elif c == ';' and depth <= 0: break
                    j += 1
                skipr.append((i, j))
    toks = [t for t in toks if not any(a <= t[0] < b for a, b in skipr)]
    for s, e in toks:
        lit = src[s:e]
        if not AR.search(lit) or '$' in lit and re.search(r'(?<!\\)\$', lit): continue
        # skip the Arabic literal inside regexes / english arg of tr2
        # split group into parts
        parts = []; k = s
        # reuse group_value with starts/ends found by scanning adjacent literals
        starts = []; ends = []
        i = s
        while i < e:
            j = i + 1
            while src[j] != "'" or src[j-1] == '\\' and src[j-2] != '\\':
                j += 1
            starts.append(i); ends.append(j + 1)
            i = j + 1
            while i < e and src[i] in ' \t\r\n': i += 1
        val = group_value(src, starts, ends)
        if val not in seen:
            seen[val] = f; order.append(val)
json.dump(order, open('tools/ar_all.json', 'w'), ensure_ascii=False)
print(len(order))
import collections
c = collections.Counter(seen[v] for v in order)
for f, n in c.most_common(40): print(n, f)
