#!/usr/bin/env python3
import re, sys, collections
errs = collections.defaultdict(list)
for l in open('/tmp/errs.txt'):
    m = re.search(r'• (lib/\S+?):(\d+):(\d+) • const_eval_method_invocation', l)
    if m: errs[m.group(1)].append((int(m.group(2)), int(m.group(3))))
unwrapped = []
decl = re.compile(r'(?:static\s+)?const\s+(?:[\w<>?, ]+\s+)?\w+\s*=')
for f, locs in errs.items():
    src = open(f, encoding='utf-8').read()
    lines = src.split('\n')
    offs = [0]
    for ln in lines: offs.append(offs[-1] + len(ln) + 1)
    edits = []  # (start,end,replacement)
    done = set()
    for (ln, col) in sorted(set(locs), reverse=True):
        pos = offs[ln - 1] + col - 1
        if not src.startswith('loc(', pos):
            continue
        # scan backwards for nearest unmatched opening bracket chain to find const
        i = pos - 1; depth = 0; found = None
        while i >= 0:
            c = src[i]
            if c in ')]}':
                depth += 1
            elif c in '([{':
                if depth == 0:
                    # look at what precedes this bracket
                    j = i - 1
                    while j >= 0 and src[j] in ' \t\n': j -= 1
                    # identifier or generic before it
                    k = j
                    while k >= 0 and (src[k].isalnum() or src[k] in '_.<>?,'): k -= 1
                    head = src[k+1:j+1]
                    # `const Name(` / `const [` / `const <T>[`
                    pre = src[max(0, k-5):k+1]
                    m = re.search(r'const\s*$', src[:k+1] if head else src[:j+1])
                    if m:
                        found = ('const', m.start(), m.end())
                        break
                    # list/map literal directly after `const`
                else:
                    depth -= 1
                if depth < 0: depth = 0
            elif src.startswith('const', i) and (i == 0 or not (src[i-1].isalnum() or src[i-1] == '_')) and not src[i+5].isalnum():
                # a `const` keyword reached while scanning: treat as enclosing only if at depth 0
                if depth == 0:
                    found = ('const', i, i + 5)
                    break
            if src[i] == ';' and depth == 0:
                break
            i -= 1
        if found is None:
            continue
        s, e = found[1], found[2]
        # declaration?
        stmt = src[s: src.find('\n', s) + 200]
        if decl.match(src[s:s + 200]) or re.match(r'const\s+\w+\s*=', src[s:s+80]) or re.match(r'const\s*\(', src[s:s+10]) is None and re.match(r'(?:const)\s+[\w<>?, ]+\s*=', src[s:s+120]):
            # data declaration: unwrap
            depth2 = 0; q = pos + 3
            while q < len(src):
                if src[q] == '(': depth2 += 1
                elif src[q] == ')':
                    depth2 -= 1
                    if depth2 == 0: break
                elif src[q] == "'":
                    # skip string
                    q += 1
                    while src[q] != "'":
                        if src[q] == '\\': q += 1
                        q += 1
                q += 1
            inner = src[pos + 4:q]
            edits.append((pos, q + 1, inner)); unwrapped.append((f, ln))
        else:
            if (s, e) not in done:
                done.add((s, e)); edits.append((s, e + (1 if src[e] == ' ' else 0), ''))
    for s, e, r in sorted(edits, reverse=True):
        src = src[:s] + r + src[e:]
    open(f, 'w', encoding='utf-8').write(src)
open('tools/unwrapped.txt', 'a').write('\n'.join(f'{f}:{l}' for f, l in unwrapped) + '\n')
print('files', len(errs), 'unwrapped', len(unwrapped))
