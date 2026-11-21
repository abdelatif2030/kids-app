"""python tools/register_girls_game.py <id> <Global> <kName> <ar> <en> <emoji> [card.png]
Registers a girls-world game in the Flutter app (WebGame entry for ages 2+, kWebGames, data_reset key, pubspec folders, girls section, emoji) and makes its card.webp."""
import os, re, sys
gid, glob, kname, ar, en, emoji = sys.argv[1:7]
card = sys.argv[7] if len(sys.argv) > 7 else None
os.chdir('C:/dev/rehlaty')
w = 'lib/games/web_games/web_game.dart'
s = open(w, encoding='utf8').read()
if f"id: '{gid}'" not in s:
    i = s.index('final List<WebGame> kWebGames = ['); j = s.index('];', i)
    s = s[:j] + f', {kname}' + s[j:]
    s = s.replace('// ---- rebuilt learning games', f'''/// «{ar}» ({en}): girls world, ages 2-4 (docs/GIRLS_SECTION_PLAN.md).
final WebGame {kname} = WebGame(
  id: '{gid}',
  folder: '{gid}',
  global: '{glob}',
  storeKey: '{gid}',
  minAge: 2,
  title: () => tr2('{ar}', '{en}'),
);

// ---- rebuilt learning games''', 1)
    open(w, 'w', encoding='utf8').write(s)
d = 'lib/data_reset.dart'
s = open(d, encoding='utf8').read()
if f"key == '{gid}'" not in s:
    s = s.replace("        key == 'fashion_queen' ||", f"        key == 'fashion_queen' ||\n        key == '{gid}' ||", 1); open(d, 'w', encoding='utf8').write(s)
p = 'pubspec.yaml'
s = open(p, encoding='utf8').read()
if f'assets/games/{gid}/\n' not in s:
    s = s.replace('    - assets/games/sunset_highway/\n', f'    - assets/games/sunset_highway/\n    - assets/games/{gid}/\n    - assets/games/{gid}/art/\n', 1); open(p, 'w', encoding='utf8').write(s)
f = 'lib/games/fun_sections.dart'
s = open(f, encoding='utf8').read()
if f"'{gid}'" not in s:
    s = s.replace("['fashion_queen']),", f"['fashion_queen', '{gid}']),", 1) if "['fashion_queen']" in s else re.sub(r"(FunSection\('girls'.*?\[)([^\]]*)(\]\))", lambda m: m.group(1) + m.group(2) + f", '{gid}'" + m.group(3), s, 1)
    s = s.replace("  'fashion_queen': '👗',", f"  'fashion_queen': '👗',\n  '{gid}': '{emoji}',", 1)
    open(f, 'w', encoding='utf8').write(s)
if card:
    from PIL import Image
    im = Image.open(card).convert('RGB'); W, H = im.size
    ch = int(W * 3 / 4); top = max(0, (H - ch) // 2)
    im.crop((0, top, W, min(H, top + ch))).resize((640, 480), Image.LANCZOS).save(f'assets/games/{gid}/card.webp', 'WEBP', quality=80)
    sz = max(W, H)
    poster = im.crop((0, int((H - W * 9 / 16) / 2) if H > W * 9 / 16 else 0, W, int((H + W * 9 / 16) / 2) if H > W * 9 / 16 else H)).resize((1280, 720), Image.LANCZOS)
    poster.save(f'assets/games/{gid}/poster.webp', 'WEBP', quality=76)
print('registered', gid)
