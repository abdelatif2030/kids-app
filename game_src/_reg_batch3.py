import subprocess, os, re
os.chdir('C:/dev/rehlaty')
for gid, glob, kn, ar, en, c1, c2, sect in [
    ('rug_cleaning', 'RugCleaning', 'kRugCleaning', 'تنظيف السجاد', 'Rug Cleaning', 'FF5AB8E8', 'FFFFF0D8', 'build'),
    ('temple_army', 'TempleArmy', 'kTempleArmy', 'جيش المعبد', 'Temple Army', 'FF3A8A4A', 'FFE8C84A', 'action'),
]:
    w = open('lib/games/web_games/web_game.dart', encoding='utf8').read()
    if "id: '%s'" % gid not in w:
        r = subprocess.run(['python', 'tools/register_game.py', gid, glob, kn, ar, en, c1, c2], capture_output=True, text=True)
        print(gid, r.stdout.strip(), r.stderr.strip()[:200])
    p = 'lib/games/fun_sections.dart'
    s = open(p, encoding='utf8').read()
    m = re.search(r"FunSection\('%s',.*?\[([^\]]*)\]\)" % sect, s, re.S)
    if "'%s'" % gid not in m.group(1):
        s = s[:m.end(1)] + ", '%s'" % gid + s[m.end(1):]
        open(p, 'w', encoding='utf8').write(s)
# the third fun page keeps its four original cards in its test; the new games are tested through the sections page
t = 'test/games_choice_test.dart'
s = open(t, encoding='utf8').read()
i = s.index("for (final (key, game) in [('fun_hero_tower', kHeroTower)")
j = s.index(']) {', i)
lst = s[i:j]
keep = lst.split(', (')
s = s[:i] + ', ('.join(keep[:4]) + s[j:]
open(t, 'w', encoding='utf8').write(s)
print('ok')
