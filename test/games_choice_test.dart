import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/games_choice.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/games/carnival_race/carnival_race_screen.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/journey/models.dart';
import 'package:flutter/foundation.dart';
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

  testWidgets('two big cards inside the window, each calls its own action; the back arrow works', (t) async {
    for (final size in const [Size(852, 393), Size(1366, 1024), Size(390, 760)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      var learning = 0, fun = 0, back = 0;
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: Scaffold(
            body: GamesChoiceScreen(onEducational: () => learning++, onFun: () => fun++, onBack: () => back++),
          ),
        ),
      );
      await t.pump();
      for (final k in ['choice_educational', 'choice_fun', 'choice_back']) {
        final r = t.getRect(find.byKey(ValueKey(k)));
        expect(r.left >= -1 && r.right <= size.width + 1 && r.bottom <= size.height + 1, isTrue, reason: '$k at $size');
      }
      expect(t.getRect(find.byKey(const ValueKey('choice_educational'))).width, greaterThan(size.width * 0.2));
      await t.tap(find.byKey(const ValueKey('choice_educational')));
      await t.tap(find.byKey(const ValueKey('choice_fun')));
      await t.tap(find.byKey(const ValueKey('choice_back')));
      expect((learning, fun, back), (1, 1, 1), reason: '$size');
      expect(t.takeException(), isNull);
    }
    addTearDown(t.view.reset);
  });

  testWidgets('the fun games page: the picture fills it; ages 3-6 get the race card, younger children a friendly line', (t) async {
    expect(File(kFunScenePicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kFunScenePicture));
    for (final size in const [Size(1000, 700), Size(390, 760), Size(852, 393), Size(1366, 1024)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      for (final age in [2, 3, 6]) {
        await t.pumpWidget(
          MaterialApp(
            key: UniqueKey(),
            home: FunGamesScreen(
              child: ChildProfile(id: 'k1', nickname: 'L', age: age),
            ),
          ),
        );
        await t.pump(const Duration(milliseconds: 300));
        expect(find.byKey(const ValueKey('fun_scene')), findsOneWidget);
        expect(t.getRect(find.byKey(const ValueKey('fun_scene'))).size, size, reason: 'the picture fills the page');
        final race = find.byKey(const ValueKey('fun_carnival_race'));
        if (age >= kCarnivalRaceMinAge) {
          expect(race, findsOneWidget, reason: 'age $age');
          final r = t.getRect(race);
          expect(r.left >= 0 && r.right <= size.width && r.top >= 0 && r.bottom <= size.height, isTrue, reason: 'race card inside $size: $r');
          expect(r.width, greaterThanOrEqualTo(200));
          expect(find.byKey(const ValueKey('race_card_picture')), findsOneWidget);
          expect(find.byKey(const ValueKey('fun_empty')), findsNothing);
        } else {
          expect(race, findsNothing, reason: 'age $age');
          expect(find.byKey(const ValueKey('fun_empty')), findsOneWidget);
        }
        expect(t.takeException(), isNull);
      }
    }
    addTearDown(t.view.reset);
  });

  testWidgets('tapping the race card opens the race (a desktop build shows the phones/tablets/web note)', (t) async {
    SharedPreferences.setMockInitialValues({});
    debugDefaultTargetPlatformOverride = TargetPlatform.windows;
    addTearDown(() => debugDefaultTargetPlatformOverride = null);
    await t.pumpWidget(
      const MaterialApp(
        home: FunGamesScreen(
          child: ChildProfile(id: 'k1', nickname: 'L', age: 5),
        ),
      ),
    );
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.byKey(const ValueKey('fun_carnival_race')));
    await t.pumpAndSettle();
    expect(find.byType(CarnivalRaceScreen), findsOneWidget);
    expect(find.textContaining('الموبايل والتابلت والمتصفح'), findsOneWidget);
    expect(t.takeException(), isNull);
    debugDefaultTargetPlatformOverride = null;
  });

  test('the race game files and the owner card picture are bundled and listed in pubspec', () {
    expect(File(kRaceCardPicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kRaceCardPicture));
    for (final f in ['index.html', 'boot.js', 'game.js']) {
      expect(File('assets/games/carnival_race/$f').existsSync(), isTrue, reason: f);
    }
    expect(File('pubspec.yaml').readAsStringSync(), contains('assets/games/carnival_race/'));
    // the page only loads its own files: no script or font from the internet
    final html = File('assets/games/carnival_race/index.html').readAsStringSync();
    expect(RegExp(r'(src|href)="https?:').hasMatch(html), isFalse);
  });

  test('race progress is kept per child, survives damaged data and is erased with the child', () async {
    SharedPreferences.setMockInitialValues({});
    expect(await CarnivalRaceStore.load('k1'), isNull);
    await CarnivalRaceStore.save('k1', {
      'tickets': 120,
      'owned': ['raccoon'],
    });
    await CarnivalRaceStore.save('k2', {'tickets': 5});
    expect((await CarnivalRaceStore.load('k1'))!['tickets'], 120);
    expect((await CarnivalRaceStore.load('k2'))!['tickets'], 5);
    await deleteOneChild('k1');
    expect(await CarnivalRaceStore.load('k1'), isNull);
    expect((await CarnivalRaceStore.load('k2'))!['tickets'], 5, reason: 'the other child keeps theirs');
    SharedPreferences.setMockInitialValues({'carnival_race': '{not json'});
    expect(await CarnivalRaceStore.load('k1'), isNull);
    await CarnivalRaceStore.save('k1', {'tickets': 1});
    expect((await CarnivalRaceStore.load('k1'))!['tickets'], 1);
  });
}
