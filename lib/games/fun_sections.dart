import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../l10n/strings.dart';
import 'games_choice.dart' show openFunGame;
import 'web_games/web_game.dart';

/// «ألعاب للتسلية» split into sections (owner request 2026-11-19): a page of big section tiles, each opening the games of that
/// kind. Each tile and card shows the owner's picture when it exists (assets/games/sections/ID.webp and assets/games/FOLDER/card.webp)
/// and a coloured fallback with an emoji otherwise. Prompts for the section pictures: docs/FINAL_REPORT_AND_SCRIPTS.md.
class FunSection {
  final String id;
  final String emoji;
  final String Function() title;
  final Color a;
  final Color b;
  final List<String> games;
  const FunSection(this.id, this.emoji, this.title, this.a, this.b, this.games);
}

final List<FunSection> kFunSections = [
  FunSection('racing', '🏎️', () => tr2('سباقات', 'Racing'), const Color(0xFFE8742A), const Color(0xFFFFD23A), ['moto_race', 'carnival_race', 'dune_titans', 'rain_circuit', 'sunset_highway', 'coastal_drive', 'air_race', 'splash_race', 'summit_rush']),
  FunSection('action', '⚔️', () => tr2('أكشن ومعارك', 'Action & Battles'), const Color(0xFF6A3AB0), const Color(0xFFE85A8A), ['samurai', 'squad_shooter', 'archer_bridge', 'zombie_rooftop', 'ice_dragon', 'hero_tower', 'hamster_warrior', 'ocean_defense', 'sky_ace', 'nutmeg_rush', 'viking_sling', 'card_battle', 'dino_grow', 'ice_rink', 'barrel_knights', 'gummy_squad', 'temple_army']),
  FunSection('runners', '🏃', () => tr2('جري وقفز', 'Runners & Jumpers'), const Color(0xFF2AB8D8), const Color(0xFF7AF0C8), ['jungle_adventure', 'cloud_dash', 'alien_sky', 'rhino_summit', 'fizz_runner', 'ball_scoop', 'sky_capy', 'golden_tail', 'rhythm', 'fox_family', 'hop_world', 'trick_or_treat', 'sky_jumper']),
  FunSection('build', '🏡', () => tr2('مزارع ومشاريع', 'Farms & Businesses'), const Color(0xFF5AA83A), const Color(0xFFFFE04A), ['happy_farm', 'pumpkin_pie', 'space_store', 'honey_farm', 'pearl_divers', 'winter_camp', 'castaway_raft', 'creator_tycoon', 'hot_spring', 'mars_farm', 'gem_quarry', 'rug_cleaning']),
  FunSection('puzzle', '🧩', () => tr2('ألغاز وتفكير', 'Puzzles & Brain'), const Color(0xFF3A6AE8), const Color(0xFFB8A8FF), ['marble_dozer', 'frost_coil', 'chomp_maze', 'gum_ball', 'hungry_frog', 'deep_sea', 'pin_puzzle', 'tomb_puzzle', 'sweet_tray']),
  FunSection('girls', '🎀', () => tr2('عالم البنات', 'Girls World'), const Color(0xFFFF6AA8), const Color(0xFFFFD8EC), ['fashion_queen']),
];

/// One emoji per fun game: the fallback picture of a card until the game's own picture exists.
const Map<String, String> kFunGameEmoji = {
  'moto_race': '🏍️',
  'carnival_race': '🎡',
  'dune_titans': '🏜️',
  'rain_circuit': '🌧️',
  'sunset_highway': '🌅',
  'coastal_drive': '🚗',
  'air_race': '🛩️',
  'summit_rush': '⛷️',
  'rhino_summit': '🦏',
  'alien_sky': '👽',
  'samurai': '🥷',
  'squad_shooter': '🔫',
  'archer_bridge': '🏹',
  'zombie_rooftop': '🧟',
  'ice_dragon': '🐲',
  'hero_tower': '🏰',
  'hamster_warrior': '🐹',
  'card_battle': '🃏',
  'ice_rink': '🏒',
  'viking_sling': '🪨',
  'barrel_knights': '🛡️',
  'gummy_squad': '🧸',
  'temple_army': '🏛️',
  'dino_grow': '🦖',
  'nutmeg_rush': '⚽',
  'ocean_defense': '🐠',
  'jungle_adventure': '🌴',
  'cloud_dash': '☁️',
  'fizz_runner': '🥤',
  'ball_scoop': '🚚',
  'sky_capy': '🦫',
  'hop_world': '🍄',
  'sky_ace': '✈️',
  'trick_or_treat': '🎃',
  'golden_tail': '🦕',
  'fox_family': '🦊',
  'splash_race': '🏊',
  'rhythm': '🎵',
  'happy_farm': '🚜',
  'pumpkin_pie': '🥧',
  'space_store': '🛒',
  'honey_farm': '🍯',
  'pearl_divers': '🦪',
  'winter_camp': '⛺',
  'castaway_raft': '🛶',
  'creator_tycoon': '🤖',
  'hot_spring': '♨️',
  'mars_farm': '🪐',
  'gem_quarry': '💎',
  'rug_cleaning': '🧼',
  'marble_dozer': '🔮',
  'frost_coil': '❄️',
  'chomp_maze': '😋',
  'gum_ball': '🍬',
  'hungry_frog': '🐸',
  'deep_sea': '🐟',
  'pin_puzzle': '📍',
  'tomb_puzzle': '🏺',
  'sweet_tray': '🍰',
  'fashion_queen': '👗',
  'sky_jumper': '🐸',
};

WebGame? _byId(String id) {
  for (final g in kWebGames) {
    if (g.id == id) return g;
  }
  return null;
}

Widget _backButton(BuildContext context, String key) {
  return FocusableTap(
    key: ValueKey(key),
    onTap: () => Navigator.maybePop(context),
    radius: 60,
    semanticLabel: tr2('رجوع', 'Back'),
    child: Container(
      width: 56,
      height: 56,
      decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF7A4AD8), border: Border.all(color: Colors.white, width: 3)),
      child: const Icon(Icons.arrow_back_rounded, color: Colors.white, size: 32),
    ),
  );
}

const _titleStyle = TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30, shadows: [Shadow(color: Color(0xFF2A1A5A), blurRadius: 8, offset: Offset(0, 3))]);

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
