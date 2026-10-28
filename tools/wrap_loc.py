#!/usr/bin/env python3
"""One-off refactor helper: wraps Arabic string literals (without interpolation)
in loc(...) so the interface language can translate them. Prints nothing; writes
the unique source strings to tools/ar_strings.json."""
import re, glob, json, os, sys

AR = re.compile(r'[؀-ۿ]')
EXCLUDE = ('lib/l10n/', 'lib/literacy/letters_data.dart', 'lib/library/vocab.dart', 'lib/stories/story_data.dart')

def scan_string(src, i):
    """src[i]=="'" -> returns (end_index_exclusive, has_interp, has_arabic_leaf_edits, edits)
    edits: list of (start,end,text) for nested inner literals (to wrap)."""
    j = i + 1
    interp = False
    while j < len(src):
        c = src[j]
        if c == '\\':
            j += 2; continue
        if c == "'":
            return j + 1, interp
        if c == '$':
            interp = True
            if j + 1 < len(src) and src[j+1] == '{':
                # skip the balanced expression, which may contain nested strings
                depth = 1; j += 2
                while j < len(src) and depth:
                    d = src[j]
                    if d == "'":
                        j, _ = scan_string(src, j); continue
                    if d == '{': depth += 1
                    elif d == '}': depth -= 1
                    j += 1
                continue
        j += 1
    raise ValueError('unterminated')

def process(src):
    out = []; i = 0; keys = []
    n = len(src)
    def handle_expr_region(s, e):
        return transform(s)
    # transform: walk code, handling comments and strings
    def transform(code):
        res = []; p = 0; m = len(code)
        while p < m:
            c = code[p]
            if c == '/' and code.startswith('//', p):
                q = code.find('\n', p)
                q = m if q < 0 else q
                res.append(code[p:q]); p = q; continue
            if c == '/' and code.startswith('/*', p):
                q = code.find('*/', p)
                q = m if q < 0 else q + 2
                res.append(code[p:q]); p = q; continue
            if c == 'r' and p + 1 < m and code[p+1] == "'" and not (p > 0 and (code[p-1].isalnum() or code[p-1] == '_')):
                q = code.find("'", p + 2)
                res.append(code[p:q+1]); p = q + 1; continue
            if c == "'":
                if code.startswith("'''", p):
                    q = code.find("'''", p + 3)
                    res.append(code[p:q+3]); p = q + 3; continue
                # group of adjacent literals
                starts = [p]; q, it = scan_string(code, p); ends = [q]; interps = [it]
                while True:
                    k = q
                    while k < m and code[k] in ' \t\r\n': k += 1
                    if k < m and code[k] == "'" and not code.startswith("'''", k):
                        q2, it2 = scan_string(code, k)
                        starts.append(k); ends.append(q2); interps.append(it2); q = q2
                    else:
                        break
                text = code[p:q]
                if any(interps):
                    # keep as is, but recurse into ${...} for nested plain literals
                    res.append(rewrite_interp(code[p:q])); p = q; continue
                if AR.search(text):
                    res.append('loc(' + text + ')')
                    keys.append(group_value(code, starts, ends))
                else:
                    res.append(text)
                p = q; continue
            res.append(c); p += 1
        return ''.join(res)
    def rewrite_interp(text):
        # text: one or more adjacent literals with interpolation; rewrite nested expressions only
        res = []; p = 0; m = len(text)
        while p < m:
            c = text[p]
            if c == '\\': res.append(text[p:p+2]); p += 2; continue
            if c == '$' and p + 1 < m and text[p+1] == '{':
                depth = 1; q = p + 2
                while q < m and depth:
                    d = text[q]
                    if d == "'":
                        q, _ = scan_string(text, q); continue
                    if d == '{': depth += 1
                    elif d == '}': depth -= 1
                    q += 1
                inner = text[p+2:q-1]
                res.append('${' + transform(inner) + '}'); p = q; continue
            res.append(c); p += 1
        return ''.join(res)
    return transform(src), keys

def group_value(code, starts, ends):
    parts = []
    for s, e in zip(starts, ends):
        raw = code[s+1:e-1]
        parts.append(unescape(raw))
    return ''.join(parts)

def unescape(raw):
    out = []; i = 0
    while i < len(raw):
        c = raw[i]
        if c == '\\' and i + 1 < len(raw):
            d = raw[i+1]
            out.append({'n': '\n', 't': '\t', 'r': '\r'}.get(d, d)); i += 2
        else:
            out.append(c); i += 1
    return ''.join(out)

def main():
    allkeys = {}
    for f in sorted(glob.glob('lib/**/*.dart', recursive=True)):
        if any(f.startswith(e) or e in f for e in EXCLUDE): continue
        src = open(f, encoding='utf-8').read()
        if not AR.search(src): continue
        # keep untouched lines that must not change
        new, keys = process(src)
        if new == src: continue
        # fix a known comparison
        if 'lib/firebase_repository.dart' in f:
            new = new.replace("e.message == loc('ليس لديك صلاحية لهذه العملية')", "e.message == 'ليس لديك صلاحية لهذه العملية'")
        depth = f.count('/') - 1
        imp = ("../" * depth if depth else "") + "l10n/strings.dart"
        if f.startswith('lib/') and f.count('/') == 1: imp = 'l10n/strings.dart'
        else: imp = '../' * (f.count('/') - 1) + 'l10n/strings.dart'
        if 'l10n/strings.dart' not in new:
            # after the last import
            lines = new.split('\n')
            last = max([i for i, l in enumerate(lines) if l.startswith('import ')] or [-1])
            lines.insert(last + 1, "import '%s';" % imp)
            new = '\n'.join(lines)
        open(f, 'w', encoding='utf-8').write(new)
        for k in keys: allkeys.setdefault(k, []).append(f)
    json.dump(list(allkeys.keys()), open('tools/ar_strings.json', 'w'), ensure_ascii=False, indent=0)
    print(len(allkeys), 'unique strings wrapped')

main()
