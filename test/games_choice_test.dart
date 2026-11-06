import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/games_choice.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/journey/models.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('the choice picture is bundled and the fun games live only in the fun category', () {
    expect(File(kGamesChoicePicture).existsSync(), isTrue);
    expect(
      File('pubspec.yaml').readAsStringSync(),
      contains(kGamesChoicePicture),
    );
    expect(kFunCategory.games, {for (final g in kFunGames) 'fun_${g.id}'});
    for (final c in kGameCategories) {
      expect(
        c.games.intersection(kFunCategory.games),
        isEmpty,
        reason: '${c.id} must not list a fun game',
      );
    }
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

  testWidgets(
    'the fun card leads to the four fun games for a child old enough',
    (t) async {
      SharedPreferences.setMockInitialValues({});
      t.view.physicalSize = const Size(1000, 700);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(
        MaterialApp(
          home: CategoryGamesScreen(
            category: kFunCategory,
            child: const ChildProfile(id: 'k', nickname: 'سلمى', age: 6),
          ),
        ),
      );
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byKey(const ValueKey('category_fun')), findsOneWidget);
      for (final g in kFunGames) {
        expect(find.text(g.title()), findsWidgets, reason: g.id);
      }
    },
  );
}
