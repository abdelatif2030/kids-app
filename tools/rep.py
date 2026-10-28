import sys
def rep(path, pairs):
    s = open(path, encoding='utf-8').read()
    for a, b in pairs:
        n = s.count(a)
        if n != 1:
            print(f'!! {path}: {n} matches for: {a[:70]!r}'); continue
        s = s.replace(a, b, 1)
    if 'l10n/strings.dart' not in s and ('loc(' in s or 'tr2(' in s):
        depth = path.count('/') - 1
        imp = '../' * depth + 'l10n/strings.dart'
        lines = s.split('\n')
        last = max([i for i, l in enumerate(lines) if l.startswith('import ')] or [-1])
        lines.insert(last + 1, "import '%s';" % imp); s = '\n'.join(lines)
    open(path, 'w', encoding='utf-8').write(s)
