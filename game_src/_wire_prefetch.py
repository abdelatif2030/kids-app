R = 'C:/dev/rehlaty/'
p = R + 'lib/lazy_features.dart'
s = open(p, encoding='utf8').read()
a = "/// Opens the family chat (loads it first when needed)."
assert a in s
new = """/// Warms up the fun-games pages in the background a few seconds after the child's home appears (owner 2026-11-20: entering the fun games
/// felt slow because the part of the app that holds them was only downloaded when they were opened). It downloads the deferred parts of
/// the app and decodes the pictures of the hub, so that tapping «ألعاب للتسلية» opens at once. Never throws and does nothing in tests.
Future<void> prefetchGames(BuildContext context) async {
  if (WidgetsBinding.instance.runtimeType.toString().contains('Test')) return;
  try {
    await Future.wait([fun_sections_lib.loadLibrary(), games_choice_lib.loadLibrary(), games_hub_lib.loadLibrary()]);
    for (final a in ['bg_hub', 'racing', 'action', 'runners', 'build', 'puzzle', 'girls']) {
      if (!context.mounted) return;
      await precacheImage(AssetImage('assets/games/sections/$a.webp'), context, onError: (_, _) {});
      await Future<void>.delayed(const Duration(milliseconds: 40)); // one picture per beat: never a hitch on the map
    }
  } catch (_) {
    // offline or a missing part: it will simply load when it is opened
  }
}

"""
s = s.replace(a, new + a, 1)
open(p, 'w', encoding='utf8').write(s)

p = R + 'lib/journey/ui/island_home.dart'
s = open(p, encoding='utf8').read()
i = s.index('class _IslandHomeState')
j = s.index('  void initState() {', i)
k = s.index('super.initState();', j)
ins = "super.initState();\n    // warm up the fun games in the background (see prefetchGames)\n    WidgetsBinding.instance.addPostFrameCallback((_) {\n      Future<void>.delayed(const Duration(seconds: 3), () {\n        if (mounted) prefetchGames(context);\n      });\n    });"
s = s[:k] + ins + s[k + len('super.initState();'):]
if "lazy_features.dart" not in s:
    s = s.replace("import 'package:flutter/material.dart';", "import 'package:flutter/material.dart';\nimport '../../lazy_features.dart' show prefetchGames;", 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
