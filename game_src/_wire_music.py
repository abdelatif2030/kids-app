import re
R = 'C:/dev/rehlaty/'


def edit(path, fn):
    s = open(R + path, encoding='utf8').read()
    t = fn(s)
    assert t != s, path
    open(R + path, 'w', encoding='utf8').write(t)


# pubspec: the music folder
edit('pubspec.yaml', lambda s: s.replace('    - assets/audio/\n', '    - assets/audio/\n    - assets/audio/music/\n', 1))

# the app watches routes
def main(s):
    s = s.replace("      scrollBehavior: const AppScrollBehavior(),\n", "      scrollBehavior: const AppScrollBehavior(),\n      navigatorObservers: [kHubRouteObserver],\n", 1)
    s = s.replace("import 'package:flutter/material.dart';", "import 'package:flutter/material.dart';\nimport 'media/hub_music.dart';", 1)
    return s
edit('lib/main.dart', main)

# fun hub + section pages: the 'fun' track
def fun(s):
    s = s.replace("import '../l10n/strings.dart';", "import '../l10n/strings.dart';\nimport '../media/hub_music.dart';", 1)
    s = s.replace("    return Scaffold(\n      key: const ValueKey('fun_sections_page'),", "    return HubMusicScope(\n      track: 'fun',\n      child: Scaffold(\n      key: const ValueKey('fun_sections_page'),", 1)
    s = s.replace("    return Scaffold(\n      key: ValueKey('fun_section_page_${section.id}'),", "    return HubMusicScope(\n      track: 'fun',\n      child: Scaffold(\n      key: ValueKey('fun_section_page_${section.id}'),", 1)
    return s
edit('lib/games/fun_sections.dart', fun)
print('step1 ok')
