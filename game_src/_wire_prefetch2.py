R = 'C:/dev/rehlaty/'
p = R + 'lib/journey/ui/island_home.dart'
s = open(p, encoding='utf8').read()
i = s.index('class _IslandHomeState')
k = s.index('  AnimationController? _c;', i)
end = k + len('  AnimationController? _c;')
ins = """

  @override
  void initState() {
    super.initState();
    // warm up the fun games in the background a few seconds after the home appears (see prefetchGames)
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Future<void>.delayed(const Duration(seconds: 3), () {
        if (mounted) prefetchGames(context);
      });
    });
  }"""
s = s[:end] + ins + s[end:]
if "lazy_features.dart" not in s:
    s = s.replace("import 'package:flutter/material.dart';", "import 'package:flutter/material.dart';\nimport '../../lazy_features.dart' show prefetchGames;", 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
