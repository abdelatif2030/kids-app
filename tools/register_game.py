"""Register a new web game in the Flutter app: python tools/register_game.py <id> <Global> <kName> <ar title> <en title> <c1> <c2> [card_jpg]
Adds the WebGame entry, kWebGames item, data_reset key, pubspec asset folder, third-fun-page card and the test entry."""
import sys, os, subprocess

gid, glob, kname, ar, en, c1, c2 = sys.argv[1:8]
card = sys.argv[8] if len(sys.argv) > 8 else None
os.chdir('C:/dev/rehlaty')


def sub(p, a, b):
    s = open(p, encoding='utf8').read()
    assert a in s, (p, a)
    open(p, 'w', encoding='utf8').write(s.replace(a, b, 1))


if card:
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', card, '-vf', 'crop=iw:iw*0.8:0:ih*0.12,scale=480:-1', '-q:v', '70', f'assets/games/{gid}/card.webp'], check=True)

w = 'lib/games/web_games/web_game.dart'
s = open(w, encoding='utf8').read()
i = s.index('final List<WebGame> kWebGames = [')
j = s.index('];', i)
s = s[:j] + f', {kname}' + s[j:]
s = s.replace('// ---- rebuilt learning games', f'''/// «{ar}» ({en}).
final WebGame {kname} = WebGame(
  id: '{gid}',
  folder: '{gid}',
  global: '{glob}',
  storeKey: '{gid}',
  minAge: 4,
  title: () => tr2('{ar}', '{en}'),
);

// ---- rebuilt learning games''', 1)
open(w, 'w', encoding='utf8').write(s)
sub('lib/data_reset.dart', "key == 'sunset_highway' ||", f"key == 'sunset_highway' ||\n        key == '{gid}' ||") if "key == 'sunset_highway' ||" in open('lib/data_reset.dart', encoding='utf8').read() else None
sub('pubspec.yaml', '    - assets/games/sunset_highway/\n', f'    - assets/games/sunset_highway/\n    - assets/games/{gid}/\n') if '    - assets/games/sunset_highway/\n' in open('pubspec.yaml', encoding='utf8').read() else None
g = 'lib/games/games_choice.dart'
s = open(g, encoding='utf8').read()
i = s.index("key: const ValueKey('fun_games_more2_page')")
j = s.index('            ];', i)
s = s[:j] + f"              _card(context, 'fun_{gid}', {kname}, 'assets/games/{gid}/card.webp', '{en}', const Color(0x{c1}), const Color(0x{c2})),\n" + s[j:]
open(g, 'w', encoding='utf8').write(s)
t = 'test/games_choice_test.dart'
s = open(t, encoding='utf8').read()
i = s.index("('fun_hero_tower', kHeroTower)")
j = s.index(']) {', i)
s = s[:j] + f", ('fun_{gid}', {kname})" + s[j:]
open(t, 'w', encoding='utf8').write(s)
print('registered', gid)
