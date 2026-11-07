import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/games_choice.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('the choice picture is bundled; the fun card is empty and the four casual games are on the thinking-games island', () {
    expect(File(kGamesChoicePicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kGamesChoicePicture));
    expect(kFunCategory.games, isEmpty);
    final brain = kGameCategories.firstWhere((c) => c.id == 'brain');
    expect(brain.games, containsAll([for (final g in kFunGames) 'fun_${g.id}']));
    // no game is listed twice across the islands
    final seen = <String>[for (final c in kGameCategories) ...c.games];
    expect(seen.toSet().length, seen.length);
  });

  testWidgets(
    'two big cards inside the window, each calls its own action; the back arrow works',
    (t) async {
      for (final size in const [
        Size(852, 393),
        Size(1366, 1024),
        Size(390, 760),
      ]) {
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        var learning = 0, fun = 0, back = 0;
        await t.pumpWidget(
          MaterialApp(
            key: UniqueKey(),
            home: Scaffold(
              body: GamesChoiceScreen(
                onEducational: () => learning++,
                onFun: () => fun++,
                onBack: () => back++,
              ),
            ),
          ),
        );
        await t.pump();
        for (final k in ['choice_educational', 'choice_fun', 'choice_back']) {
          final r = t.getRect(find.byKey(ValueKey(k)));
          expect(
            r.left >= -1 &&
                r.right <= size.width + 1 &&
                r.bottom <= size.height + 1,
            isTrue,
            reason: '$k at $size',
          );
        }
        expect(
          t.getRect(find.byKey(const ValueKey('choice_educational'))).width,
          greaterThan(size.width * 0.2),
        );
        await t.tap(find.byKey(const ValueKey('choice_educational')));
        await t.tap(find.byKey(const ValueKey('choice_fun')));
        await t.tap(find.byKey(const ValueKey('choice_back')));
        expect((learning, fun, back), (1, 1, 1), reason: '$size');
        expect(t.takeException(), isNull);
      }
      addTearDown(t.view.reset);
    },
  );

  testWidgets('the fun games page is empty: a picture fills it, with a friendly line and a back arrow', (t) async {
    t.view.physicalSize = const Size(1000, 700);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    expect(File(kFunScenePicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kFunScenePicture));
    await t.pumpWidget(const MaterialApp(home: FunGamesScreen()));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const ValueKey('fun_scene')), findsOneWidget);
    expect(find.byKey(const ValueKey('fun_empty')), findsOneWidget);
    expect(t.getRect(find.byKey(const ValueKey('fun_scene'))).size, const Size(1000, 700), reason: 'the picture fills the page');
    expect(find.byType(GridView), findsNothing);
    expect(t.takeException(), isNull);
  });
}
