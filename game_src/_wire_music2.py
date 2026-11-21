R = 'C:/dev/rehlaty/'
p = R + 'lib/games/fun_sections.dart'
L = open(p, encoding='utf8').read().split('\n')
for n in (191, 284):
    assert L[n - 1].strip() == ');', (n, L[n - 1])
    L[n - 1] = '    ));'
open(p, 'w', encoding='utf8').write('\n'.join(L))

# the child's home (island map): the 'home' track
p = R + 'lib/journey/ui/island_home.dart'
s = open(p, encoding='utf8').read()
i = s.index('class _IslandHomeState')
j = s.index('  Widget build(BuildContext context) {', i)
k = s.index('return ', j)
print(s[k:k + 120].replace('\n', ' '))
