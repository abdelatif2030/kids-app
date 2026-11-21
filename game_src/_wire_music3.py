R = 'C:/dev/rehlaty/'


def wrap(path, cls_marker, track_expr, import_line, import_after):
    p = R + path
    s = open(p, encoding='utf8').read()
    i = s.index(cls_marker)
    j = s.index('  Widget build(BuildContext context) {', i)
    new = f"  Widget build(BuildContext context) => HubMusicScope(track: {track_expr}, child: _buildScreen(context));\n\n  Widget _buildScreen(BuildContext context) {{"
    s = s[:j] + new + s[j + len('  Widget build(BuildContext context) {'):]
    assert import_after in s
    s = s.replace(import_after, import_after + '\n' + import_line, 1)
    open(p, 'w', encoding='utf8').write(s)
    print('ok', path)


wrap('lib/journey/ui/island_home.dart', 'class _IslandHomeState', "'home'", "import '../../media/hub_music.dart';", "import 'package:flutter/material.dart';")
wrap('lib/games/learning_page.dart', 'class _LearningGamesScreenState', "'learn'", "import '../media/hub_music.dart';", "import 'package:flutter/material.dart';")
wrap('lib/games/web_games/web_game_screen.dart', 'class _WebGameScreenState', 'null', "import '../../media/hub_music.dart';", "import 'package:flutter/material.dart';")
