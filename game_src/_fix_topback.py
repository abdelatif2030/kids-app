import re
p = 'C:/dev/rehlaty/lib/games/web_games/web_game_screen.dart'
s = open(p, encoding='utf8').read()
# remove the three earlier aligns (left edge, right edge, top centre) and the unused top tab class
s = re.sub(r"            Align\(alignment: Alignment\.centerLeft, child: _EdgeBack\([^\n]*\n", "", s)
s = re.sub(r"            Align\(alignment: Alignment\.centerRight, child: _EdgeBack\([^\n]*\n", "", s)
s = re.sub(r"            // owner 2026-11-20: also a back button at the TOP[^\n]*\n", "", s)
s = re.sub(r"            Align\(alignment: Alignment\.topCenter, child: _TopBack\([^\n]*\n", "", s)
i = s.index("/// A small translucent tab hanging from the top edge")
s = s[:i].rstrip() + "\n"
old = "          if (!widget.game.isLearning) ...[\n"
assert old in s
s = s.replace(old, old + "            // owner 2026-11-20: ONE small back button, top left, in every fun game\n            Align(alignment: Alignment.topLeft, child: SafeArea(child: _EdgeBack(key: const ValueKey('web_game_back'), onTap: () => Navigator.maybePop(context)))),\n", 1)
s = s.replace("padding: const EdgeInsets.symmetric(horizontal: 4),", "padding: const EdgeInsets.fromLTRB(6, 6, 0, 0),", 1)
open(p, 'w', encoding='utf8').write(s)
print(s[s.index("if (!widget.game.isLearning)"):][:420])
