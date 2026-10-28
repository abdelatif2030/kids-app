import re, sys
sys.path.insert(0, 'tools')
from rep import rep as _rep  # noqa
import importlib.util
spec = importlib.util.spec_from_file_location('wl', 'tools/wrap_loc.py')

def tokens(code):
    """yield (start,end) of each top-level string literal group (adjacent literals merged), skipping comments."""
    i = 0; m = len(code); out = []
    def scan(p):
        j = p + 1
        while j < m:
            c = code[j]
            if c == '\\': j += 2; continue
            if c == "'": return j + 1
            if c == '$' and j + 1 < m and code[j+1] == '{':
                depth = 1; j += 2
                while j < m and depth:
                    d = code[j]
                    if d == "'": j = scan(j); continue
                    if d == '{': depth += 1
                    elif d == '}': depth -= 1
                    j += 1
                continue
            j += 1
        raise ValueError
    while i < m:
        c = code[i]
        if code.startswith('//', i):
            k = code.find('\n', i); i = m if k < 0 else k; continue
        if code.startswith('/*', i):
            k = code.find('*/', i); i = m if k < 0 else k + 2; continue
        if c == "'":
            if code.startswith("'''", i):
                k = code.find("'''", i + 3); i = k + 3; continue
            s = i; q = scan(i)
            while True:
                k = q
                while k < m and code[k] in ' \t\r\n': k += 1
                if k < m and code[k] == "'" and not code.startswith("'''", k): q = scan(k)
                else: break
            out.append((s, q)); i = q; continue
        i += 1
    return out

def esc(t):
    return "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"

def en_literal(en):
    out = []; i = 0; depth = 0
    while i < len(en):
        c = en[i]
        if depth == 0:
            if c == '$' and en[i+1:i+2] == '{': depth = 1; out.append('${'); i += 2; continue
            if c == "'": out.append("\\'")
            elif c == '\\': out.append('\\\\')
            elif c == '\n': out.append('\\n')
            else: out.append(c)
        else:
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            out.append(c)
        i += 1
    return "'" + ''.join(out) + "'"

def tr2edits(path, items):
    """items: list of (anchor, english). english is the raw text (not Dart-escaped); \n real newline allowed; use $x as in Arabic."""
    src = open(path, encoding='utf-8').read()
    toks = tokens(src)
    edits = []
    for anchor, en in items:
        poss = [m.start() for m in re.finditer(re.escape(anchor), src)]
        if not poss:
            print(f'!! {path}: 0 matches for {anchor[:60]!r}'); continue
        groups = []
        for pos in poss:
            g = [t for t in toks if t[0] <= pos < t[1]]
            if g: groups.append(g[0])
        groups = sorted(set(groups))
        if not groups:
            print(f'!! {path}: anchor not in a literal: {anchor[:50]!r}'); continue
        texts = {src[s:e] for s, e in groups}
        if len(texts) > 1:
            print(f'!! {path}: {len(texts)} different literals for {anchor[:60]!r}'); continue
        for s, e in groups:
            lit = src[s:e]
            if src[max(0, s - 4):s] in ('tr2(', 'loc(') or src[max(0, s - 5):s] == 'tr2( ':
                continue
            edits.append((s, e, f'tr2({lit}, {en_literal(en)})'))
    for s, e, r in sorted(edits, reverse=True):
        src = src[:s] + r + src[e:]
    if 'l10n/strings.dart' not in src:
        depth = path.count('/') - 1
        imp = '../' * depth + 'l10n/strings.dart'
        lines = src.split('\n')
        last = max([i for i, l in enumerate(lines) if l.startswith('import ')] or [-1])
        lines.insert(last + 1, "import '%s';" % imp); src = '\n'.join(lines)
    open(path, 'w', encoding='utf-8').write(src)
