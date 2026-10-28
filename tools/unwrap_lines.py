import sys, re
f = sys.argv[1]; lines = set(int(x) for x in sys.argv[2:])
src = open(f, encoding='utf-8').read().split('\n')
for n in lines:
    l = src[n - 1]
    src[n - 1] = re.sub(r"loc\(('(?:[^'\\\n]|\\.)*')\)", r"\1", l)
open(f, 'w', encoding='utf-8').write('\n'.join(src))
