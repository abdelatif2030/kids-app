R = 'C:/dev/rehlaty/'
p = R + 'lib/media/hub_music.dart'
s = open(p, encoding='utf8').read()
s = s.replace("  bool get _isTest => WidgetsBinding.instance.runtimeType.toString().contains('Test');\n", "  bool get _isTest => isTestBinding();\n", 1)
s = s.replace("  void release(Object owner) {\n    Timer(", "  void release(Object owner) {\n    if (disabled || _isTest) return; // no timers in widget tests\n    Timer(", 1)
s = s.replace("/// Watches the page's route", "/// True inside flutter_test (no timers or audio plugins there).\nbool isTestBinding() => WidgetsBinding.instance.runtimeType.toString().contains('Test');\n\n/// Watches the page's route", 1)
open(p, 'w', encoding='utf8').write(s)
p = R + 'lib/journey/ui/island_home.dart'
s = open(p, encoding='utf8').read()
s = s.replace("    WidgetsBinding.instance.addPostFrameCallback((_) {\n      Future<void>.delayed(const Duration(seconds: 3), () {", "    if (!isTestBinding()) {\n      WidgetsBinding.instance.addPostFrameCallback((_) {\n        Future<void>.delayed(const Duration(seconds: 3), () {", 1)
s = s.replace("        if (mounted) prefetchGames(context);\n      });\n    });\n  }", "          if (mounted) prefetchGames(context);\n        });\n      });\n    }\n  }", 1)
if "hub_music.dart" not in s:
    s = s.replace("import 'package:flutter/material.dart';", "import 'package:flutter/material.dart';\nimport '../../media/hub_music.dart' show isTestBinding;", 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
