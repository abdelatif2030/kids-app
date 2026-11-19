import subprocess, os, re
os.chdir('C:/dev/rehlaty')
gid, glob, kn, ar, en, c1, c2, sect = 'sky_jumper', 'SkyJumper', 'kSkyJumper', 'النطاط', 'Sky Jumper', 'FF3AB8E8', 'FFB8F0A8', 'runners'
w = open('lib/games/web_games/web_game.dart', encoding='utf8').read()
if "id: '%s'" % gid not in w:
    r = subprocess.run(['python', 'tools/register_game.py', gid, glob, kn, ar, en, c1, c2], capture_output=True, text=True)
    print(r.stdout.strip(), r.stderr.strip()[:300])
p = 'lib/games/fun_sections.dart'
s = open(p, encoding='utf8').read()
m = re.search(r"FunSection\('%s',.*?\[([^\]]*)\]\)" % sect, s, re.S)
if "'%s'" % gid not in m.group(1):
    s = s[:m.end(1)] + ", '%s'" % gid + s[m.end(1):]
    s = s.replace("'fashion_queen': '👗',", "'fashion_queen': '👗',\n  'sky_jumper': '🐸',")
    open(p, 'w', encoding='utf8').write(s)
t = 'test/games_choice_test.dart'
s = open(t, encoding='utf8').read()
if "kSkyJumper" in s:
    i = s.index("for (final (key, game) in [('fun_hero_tower', kHeroTower)")
    j = s.index(']) {', i)
    lst = s[i:j]
    keep = lst.split(', (')
    s = s[:i] + ', ('.join(keep[:4]) + s[j:]
    open(t, 'w', encoding='utf8').write(s)
print('ok')
