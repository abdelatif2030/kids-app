import os
os.chdir('C:/dev/rehlaty')
p = 'lib/games/web_games/web_game_screen.dart'
s = open(p, encoding='utf8').read()
old = "          // (owner 2026-11-12: no extra «رجوع» button over the games; each game has its own back button at the top)\n"
new = """          // (owner 2026-11-20: a SMALL round back button on both the left and the right edge of every FUN game, so the child can
          // always get out; learning games keep their own top bar)
          if (!widget.game.isLearning) ...[
            Align(alignment: Alignment.centerLeft, child: _EdgeBack(key: const ValueKey('web_game_back_left'), onTap: () => Navigator.maybePop(context))),
            Align(alignment: Alignment.centerRight, child: _EdgeBack(key: const ValueKey('web_game_back_right'), onTap: () => Navigator.maybePop(context))),
          ],
"""
assert old in s
s = s.replace(old, new, 1)
s += """
/// The small translucent round back button on the screen edges of a fun game.
class _EdgeBack extends StatelessWidget {
  final VoidCallback onTap;
  const _EdgeBack({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4),
      child: Semantics(
        button: true,
        label: tr2('رجوع', 'Back'),
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: onTap,
          child: Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0x887A4AD8), border: Border.all(color: const Color(0xCCFFFFFF), width: 2)),
            child: const Icon(Icons.arrow_back_rounded, color: Colors.white, size: 22),
          ),
        ),
      ),
    );
  }
}
"""
open(p, 'w', encoding='utf8').write(s)
print('ok')
