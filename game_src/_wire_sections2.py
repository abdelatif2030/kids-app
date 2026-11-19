import os
os.chdir('C:/dev/rehlaty')
p = 'lib/lazy_features.dart'
s = open(p, encoding='utf8').read()
s = s.replace("import 'games/games_choice.dart' deferred as games_choice_lib;", "import 'games/fun_sections.dart' deferred as fun_sections_lib;\nimport 'games/games_choice.dart' deferred as games_choice_lib;", 1)
old = """    future: games_choice_lib.loadLibrary(),
    builder: (context, snap) =>
        snap.connectionState == ConnectionState.done && !snap.hasError ? games_choice_lib.FunGamesScreen(child: child) : Scaffold(body: _loading()),"""
new = """    future: fun_sections_lib.loadLibrary(),
    builder: (context, snap) =>
        snap.connectionState == ConnectionState.done && !snap.hasError ? fun_sections_lib.FunSectionsScreen(child: child) : Scaffold(body: _loading()),"""
assert old in s
s = s.replace(old, new, 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
