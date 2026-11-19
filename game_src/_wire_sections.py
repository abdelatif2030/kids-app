import os
os.chdir('C:/dev/rehlaty')
p = 'lib/games/games_choice.dart'
s = open(p, encoding='utf8').read()
if 'void openFunGame' not in s:
    s = s.replace("void _openGame(BuildContext context, ChildProfile? child, WebGame game) {", "void openFunGame(BuildContext context, ChildProfile? child, WebGame game) => _openGame(context, child, game);\n\nvoid _openGame(BuildContext context, ChildProfile? child, WebGame game) {", 1)
    open(p, 'w', encoding='utf8').write(s)
p = 'lib/lazy_features.dart'
s = open(p, encoding='utf8').read()
print([l for l in s.splitlines() if 'games_choice' in l][:4])
