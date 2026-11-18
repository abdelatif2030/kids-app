# -*- coding: utf-8 -*-
# one-off (2026-11-18): adds «ألعاب أكتر» (page 3: Hero Tower and Cloud Dash) to lib/games/games_choice.dart. Kept for the record.
import io

p = 'lib/games/games_choice.dart'
s = io.open(p, encoding='utf8').read()
a = "          _backSpot(context, 'fun_more_back'),\n        ],\n      ),\n    );\n  }\n}"
assert s.count(a) == 1
more_button = """          _backSpot(context, 'fun_more_back'),
        ],
        overlays: (w, h) => [
          // «ألعاب أكتر»: the third page (Hero Tower and Cloud Dash), in the empty left margin of the picture
          Positioned(
            left: 0.012 * w,
            top: 0.46 * h,
            width: 0.165 * w,
            height: 0.09 * h,
            child: FocusableTap(
              key: const ValueKey('fun_more2'),
              onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => FunGamesMore2Screen(child: child))),
              radius: 60,
              semanticLabel: tr2('ألعاب أكتر', 'More games'),
              child: Container(
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(999),
                  gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9A5AF0), Color(0xFF6A2AD0)]),
                  border: Border.all(color: const Color(0xFFFFD23A), width: 3),
                  boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 8, offset: Offset(0, 4))],
                ),
                child: FittedBox(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
                    child: Text(tr2('ألعاب أكتر ◀', 'More games ▶'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// The third page of fun games: Hero Tower and Cloud Dash (cards made in code from a picture of each game, in the style of the
/// owner's cards; docs/HERO_TOWER.md, docs/CLOUD_DASH.md).
class FunGamesMore2Screen extends StatelessWidget {
  final ChildProfile? child;
  const FunGamesMore2Screen({super.key, this.child});

  Widget _card(BuildContext context, String id, WebGame game, String picture, String english, Color a, Color b) {
    return FocusableTap(
      key: ValueKey(id),
      onTap: () => _openGame(context, child, game),
      radius: 36,
      semanticLabel: game.title(),
      child: AspectRatio(
        aspectRatio: 1.25,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(36),
            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [a, b]),
            border: Border.all(color: const Color(0xFFFFD23A), width: 6),
            boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 14, offset: Offset(0, 8))],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(30),
            child: Stack(fit: StackFit.expand, children: [
              Image.asset(picture, fit: BoxFit.cover, errorBuilder: (_, __, ___) => Container(color: a)),
              Positioned(
                left: 10,
                right: 10,
                bottom: 10,
                height: 64,
                child: Container(
                  padding: const EdgeInsetsDirectional.only(start: 16, end: 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(40),
                    gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9A5AF0), Color(0xFF6A2AD0)]),
                    border: Border.all(color: Colors.white, width: 3),
                  ),
                  child: Row(children: [
                    Expanded(
                      child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.start, children: [
                        FittedBox(fit: BoxFit.scaleDown, child: Text(game.title(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22))),
                        Text(english, style: const TextStyle(color: Color(0xFFE9D8FF), fontWeight: FontWeight.w800, fontSize: 13)),
                      ]),
                    ),
                    const CircleAvatar(radius: 24, backgroundColor: Colors.white, child: Icon(Icons.play_arrow_rounded, color: Color(0xFF6A2AD0), size: 34)),
                  ]),
                ),
              ),
              PositionedDirectional(
                top: 8,
                start: 8,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                  decoration: BoxDecoration(color: const Color(0xFFE83A3A), borderRadius: BorderRadius.circular(10), border: Border.all(color: Colors.white, width: 2)),
                  child: Text(tr2('جديد', 'NEW'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                ),
              ),
            ]),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: const ValueKey('fun_games_more2_page'),
      body: Container(
        decoration: PictureStage.backdrop,
        child: SafeArea(
          child: LayoutBuilder(builder: (context, box) {
            final wide = box.maxWidth > box.maxHeight;
            final cards = [
              _card(context, 'fun_hero_tower', kHeroTower, 'assets/games/hero_tower/card.webp', 'Hero Tower', const Color(0xFF6A3AB0), const Color(0xFFC070A0)),
              _card(context, 'fun_cloud_dash', kCloudDash, 'assets/games/cloud_dash/card.webp', 'Cloud Dash', const Color(0xFF8A98F0), const Color(0xFFF0B8E8)),
            ];
            return Stack(children: [
              Center(
                child: SingleChildScrollView(
                  padding: EdgeInsets.fromLTRB(wide ? 90 : 20, 70, wide ? 90 : 20, 20),
                  child: wide
                      ? Row(children: [for (final c in cards) Expanded(child: Padding(padding: const EdgeInsets.all(12), child: c))])
                      : Column(children: [for (final c in cards) Padding(padding: const EdgeInsets.symmetric(vertical: 10), child: c)]),
                ),
              ),
              Positioned(
                top: 10,
                left: 0,
                right: 0,
                child: Center(child: Text(tr2('ألعاب التسلية', 'Fun games'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 34, shadows: [Shadow(color: Color(0xFF4A1A90), blurRadius: 8, offset: Offset(0, 3))]))),
              ),
              Positioned(
                top: 8,
                left: 8,
                child: FocusableTap(
                  key: const ValueKey('fun_more2_back'),
                  onTap: () => Navigator.maybePop(context),
                  radius: 60,
                  semanticLabel: tr2('رجوع', 'Back'),
                  child: Container(
                    width: 56,
                    height: 56,
                    decoration: BoxDecoration(shape: BoxShape.circle, gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9A5AF0), Color(0xFF6A2AD0)]), border: Border.all(color: Colors.white, width: 3)),
                    child: const Icon(Icons.arrow_back_rounded, color: Colors.white, size: 32),
                  ),
                ),
              ),
            ]);
          }),
        ),
      ),
    );
  }
}"""
s = s.replace(a, more_button)
io.open(p, 'w', encoding='utf8', newline='\n').write(s)
print('ok')
