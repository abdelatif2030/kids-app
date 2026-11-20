p = 'C:/dev/rehlaty/lib/games/fun_sections.dart'
s = open(p, encoding='utf8').read()
i = s.index('const _titleStyle')
head = s[:i]
new = r'''const _titleStyle = TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30, shadows: [Shadow(color: Color(0xFF2A1A5A), blurRadius: 8, offset: Offset(0, 3))]);

/// Page background: the generated picture when it exists, a soft gradient otherwise, and a gentle dark veil so the tiles stay readable.
class _PageBackdrop extends StatelessWidget {
  final String asset;
  final Color a;
  final Color b;
  const _PageBackdrop({required this.asset, required this.a, required this.b});

  @override
  Widget build(BuildContext context) {
    return Stack(fit: StackFit.expand, children: [
      DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [a, b]))),
      Image.asset(asset, fit: BoxFit.cover, errorBuilder: (_, _, _) => const SizedBox.shrink()),
      const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0x66140A3C), Color(0x00140A3C), Color(0x55140A3C)]))),
    ]);
  }
}

/// The big title ribbon at the top of a page.
class _TitleRibbon extends StatelessWidget {
  final String text;
  final Color a;
  final Color b;
  const _TitleRibbon({required this.text, required this.a, required this.b});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 6),
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [a, b]),
        borderRadius: BorderRadius.circular(40),
        border: Border.all(color: Colors.white, width: 4),
        boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 12, offset: Offset(0, 6))],
      ),
      child: FittedBox(fit: BoxFit.scaleDown, child: Text(text, style: _titleStyle)),
    );
  }
}

class FunSectionsScreen extends StatelessWidget {
  final ChildProfile? child;
  const FunSectionsScreen({super.key, this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: const ValueKey('fun_sections_page'),
      backgroundColor: const Color(0xFF2A1A5A),
      body: Stack(fit: StackFit.expand, children: [
        const _PageBackdrop(asset: 'assets/games/sections/bg_hub.webp', a: Color(0xFF6A3AB0), b: Color(0xFF2A1A5A)),
        SafeArea(
          child: Stack(children: [
            LayoutBuilder(builder: (context, box) {
              final cols = box.maxWidth > 900 ? 3 : (box.maxWidth > 560 ? 2 : 1);
              return GridView.count(
                crossAxisCount: cols,
                childAspectRatio: 1.7,
                padding: const EdgeInsets.fromLTRB(20, 84, 20, 20),
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
                children: [for (final s in kFunSections) _SectionTile(section: s, child: child)],
              );
            }),
            Positioned(top: 12, left: 70, right: 70, child: Center(child: _TitleRibbon(text: '🎡 ${tr2('ألعاب للتسلية', 'Fun games')}', a: const Color(0xFFFF8A3A), b: const Color(0xFFE8452A)))),
            Positioned(top: 8, left: 8, child: _backButton(context, 'fun_sections_back')),
          ]),
        ),
      ]),
    );
  }
}

class _SectionTile extends StatelessWidget {
  final FunSection section;
  final ChildProfile? child;
  const _SectionTile({required this.section, required this.child});

  @override
  Widget build(BuildContext context) {
    final count = section.games.where((g) => _byId(g) != null).length;
    return FocusableTap(
      key: ValueKey('fun_section_${section.id}'),
      onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => FunSectionScreen(section: section, child: child))),
      radius: 32,
      semanticLabel: section.title(),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(32),
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [section.a, section.b]),
          border: Border.all(color: const Color(0xFFFFD23A), width: 5),
          boxShadow: const [BoxShadow(color: Color(0x88000000), blurRadius: 16, offset: Offset(0, 9))],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(27),
          child: Stack(fit: StackFit.expand, children: [
            Image.asset('assets/games/sections/${section.id}.webp', fit: BoxFit.cover, errorBuilder: (_, _, _) => Center(child: Padding(padding: const EdgeInsets.only(bottom: 30), child: Text(section.emoji, style: const TextStyle(fontSize: 96))))),
            const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.center, end: Alignment.bottomCenter, colors: [Color(0x00000000), Color(0x99100A30)]))),
            Positioned(
              left: 12,
              right: 12,
              bottom: 12,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: [section.a.withValues(alpha: 0.96), section.b.withValues(alpha: 0.96)]),
                  borderRadius: BorderRadius.circular(28),
                  border: Border.all(color: Colors.white, width: 3),
                  boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 6, offset: Offset(0, 3))],
                ),
                child: Row(children: [
                  Text(section.emoji, style: const TextStyle(fontSize: 28)),
                  const SizedBox(width: 10),
                  Expanded(child: FittedBox(fit: BoxFit.scaleDown, alignment: AlignmentDirectional.centerStart, child: Text(section.title(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, shadows: [Shadow(color: Color(0xFF2A1A5A), blurRadius: 5, offset: Offset(0, 2))])))),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
                    decoration: BoxDecoration(color: const Color(0xFF2A1A5A), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFFFFD23A), width: 2)),
                    child: Text('🎮 $count', style: const TextStyle(color: Color(0xFFFFD23A), fontWeight: FontWeight.w900, fontSize: 18)),
                  ),
                ]),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}

class FunSectionScreen extends StatelessWidget {
  final FunSection section;
  final ChildProfile? child;
  const FunSectionScreen({super.key, required this.section, this.child});

  @override
  Widget build(BuildContext context) {
    final games = [for (final id in section.games) if (_byId(id) != null) _byId(id)!];
    return Scaffold(
      key: ValueKey('fun_section_page_${section.id}'),
      backgroundColor: section.a,
      body: Stack(fit: StackFit.expand, children: [
        _PageBackdrop(asset: 'assets/games/sections/bg_${section.id}.webp', a: section.a, b: section.b),
        SafeArea(
          child: Stack(children: [
            LayoutBuilder(builder: (context, box) {
              final cols = box.maxWidth > 1000 ? 4 : (box.maxWidth > 700 ? 3 : 2);
              return GridView.count(
                crossAxisCount: cols,
                childAspectRatio: 1.25,
                padding: const EdgeInsets.fromLTRB(16, 84, 16, 16),
                mainAxisSpacing: 14,
                crossAxisSpacing: 14,
                children: [for (final g in games) _GameCard(game: g, section: section, child: child)],
              );
            }),
            Positioned(top: 12, left: 70, right: 70, child: Center(child: _TitleRibbon(text: '${section.emoji} ${section.title()}', a: section.a, b: Color.lerp(section.a, section.b, 0.55)!))),
            Positioned(top: 8, left: 8, child: _backButton(context, 'fun_section_back')),
          ]),
        ),
      ]),
    );
  }
}

class _GameCard extends StatelessWidget {
  final WebGame game;
  final FunSection section;
  final ChildProfile? child;
  const _GameCard({required this.game, required this.section, required this.child});

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      key: ValueKey('fun_game_${game.id}'),
      onTap: () => openFunGame(context, child, game),
      radius: 28,
      semanticLabel: game.title(),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(28),
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [section.a, section.b]),
          border: Border.all(color: const Color(0xFFFFD23A), width: 4),
          boxShadow: const [BoxShadow(color: Color(0x77000000), blurRadius: 12, offset: Offset(0, 7))],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(24),
          child: Stack(fit: StackFit.expand, children: [
            Image.asset('assets/games/${game.folder}/card.webp', fit: BoxFit.cover, errorBuilder: (_, _, _) => _CardFallback(emoji: kFunGameEmoji[game.id] ?? section.emoji)),
            const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment(0, 0.1), end: Alignment.bottomCenter, colors: [Color(0x00000000), Color(0xAA100A30)]))),
            PositionedDirectional(
              top: 8,
              start: 8,
              child: Container(
                width: 34,
                height: 34,
                decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF3AC85A), border: Border.all(color: Colors.white, width: 2.5), boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 4, offset: Offset(0, 2))]),
                child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 24),
              ),
            ),
            PositionedDirectional(
              top: 8,
              end: 8,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 2),
                decoration: BoxDecoration(color: const Color(0xCC2A1A5A), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white, width: 1.8)),
                child: Text('+${game.minAge}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
              ),
            ),
            Positioned(
              left: 8,
              right: 8,
              bottom: 8,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(color: const Color(0xDD2A1A5A), borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.white, width: 2)),
                child: FittedBox(fit: BoxFit.scaleDown, child: Text(game.title(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}

/// Used while a game has no picture of its own: a soft glow with one big emoji, so the card still looks like a game and not an empty box.
class _CardFallback extends StatelessWidget {
  final String emoji;
  const _CardFallback({required this.emoji});

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(gradient: RadialGradient(center: Alignment(0, -0.2), radius: 0.9, colors: [Color(0x55FFFFFF), Color(0x00FFFFFF)])),
      child: Center(child: Padding(padding: const EdgeInsets.only(bottom: 26), child: FittedBox(fit: BoxFit.scaleDown, child: Text(emoji, style: const TextStyle(fontSize: 84))))),
    );
  }
}
'''
open(p, 'w', encoding='utf8').write(head + new)
print('ok')
