import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/fun_sections.dart';
import 'package:kids_app/games/web_games/web_game.dart';

void main() {
  test('every section lists only real games, and no game is in two sections', () {
    final ids = {for (final g in kWebGames) g.id};
    final seen = <String>{};
    for (final s in kFunSections) {
      expect(s.games, isNotEmpty);
      for (final id in s.games) {
        expect(ids.contains(id), isTrue, reason: '${s.id} lists unknown game $id');
        expect(seen.add(id), isTrue, reason: '$id is in two sections');
      }
    }
  });

  test('every fun (non-learning) web game with a card is reachable from a section', () {
    final listed = <String>{for (final s in kFunSections) ...s.games};
    final missing = [for (final g in kWebGames) if (!g.isLearning && !listed.contains(g.id)) g.id];
    expect(missing, isEmpty, reason: 'fun games not in any section: $missing');
  });

  testWidgets('the sections page shows the tiles and a tile opens its games', (t) async {
    await t.pumpWidget(const MaterialApp(home: FunSectionsScreen()));
    await t.pump(const Duration(milliseconds: 300));
    for (final s in kFunSections) {
      expect(find.byKey(ValueKey('fun_section_${s.id}')), findsOneWidget);
    }
    await t.tap(find.byKey(const ValueKey('fun_section_racing')));
    await t.pumpAndSettle();
    expect(find.byKey(const ValueKey('fun_section_page_racing')), findsOneWidget);
    expect(find.byKey(const ValueKey('fun_game_moto_race')), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('fun_section_back')));
    await t.pumpAndSettle();
    expect(find.byKey(const ValueKey('fun_sections_page')), findsOneWidget);
  });
}
