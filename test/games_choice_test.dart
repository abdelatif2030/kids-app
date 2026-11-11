import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/games_choice.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/games/web_games/web_game_screen.dart';
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

  testWidgets('the fun games page is the owner picture with two game cards and a back arrow, inside the window', (t) async {
    expect(File(kFunGamesPicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kFunGamesPicture));
    for (final size in const [Size(1000, 700), Size(390, 760), Size(852, 393), Size(1366, 1024)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: const FunGamesScreen(
            child: ChildProfile(id: 'k1', nickname: 'L', age: 5),
          ),
        ),
      );
      await t.pump(const Duration(milliseconds: 300));
      for (final k in ['fun_carnival_race', 'fun_jungle_adventure', 'fun_happy_farm', 'fun_pumpkin_pie', 'fun_samurai', 'fun_golden_tail', 'fun_ocean_defense', 'fun_moto_race', 'fun_rhythm', 'fun_splash_race', 'fun_space_store', 'fun_fox_family', 'fun_back']) {
        final r = t.getRect(find.byKey(ValueKey(k)));
        expect(r.left >= -1 && r.right <= size.width + 1 && r.top >= -1 && r.bottom <= size.height + 1, isTrue, reason: '$k inside $size: $r');
      }
      expect(t.getRect(find.byKey(const ValueKey('fun_happy_farm'))).width, greaterThan(size.width * 0.12));
      expect(t.takeException(), isNull);
    }
    addTearDown(t.view.reset);
  });

  testWidgets('each card opens its own game (a desktop build shows the phones/tablets/web note); too young gets a note', (t) async {
    SharedPreferences.setMockInitialValues({});
    debugDefaultTargetPlatformOverride = TargetPlatform.windows;
    addTearDown(() => debugDefaultTargetPlatformOverride = null);
    for (final (key, game) in [('fun_carnival_race', kCarnivalRace), ('fun_jungle_adventure', kJungleAdventure), ('fun_happy_farm', kHappyFarm), ('fun_pumpkin_pie', kPumpkinPie), ('fun_samurai', kSamuraiAction), ('fun_golden_tail', kGoldenTail), ('fun_ocean_defense', kOceanDefense), ('fun_moto_race', kMotoRace), ('fun_rhythm', kRhythmSurvival)]) {
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: const FunGamesScreen(
            child: ChildProfile(id: 'k1', nickname: 'L', age: 5),
          ),
        ),
      );
      await t.pump(const Duration(milliseconds: 300));
      await t.tap(find.byKey(ValueKey(key)));
      await t.pumpAndSettle();
      final screen = t.widget<WebGameScreen>(find.byType(WebGameScreen));
      expect(screen.game.id, game.id);
      expect(find.textContaining('الموبايل والتابلت والمتصفح'), findsOneWidget);
    }
    await t.pumpWidget(
      MaterialApp(
        key: UniqueKey(),
        home: const FunGamesScreen(
          child: ChildProfile(id: 'k1', nickname: 'L', age: 2),
        ),
      ),
    );
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.byKey(const ValueKey('fun_jungle_adventure')));
    await t.pump();
    expect(find.byType(WebGameScreen), findsNothing);
    expect(find.byType(SnackBar), findsOneWidget);
    expect(t.takeException(), isNull);
    debugDefaultTargetPlatformOverride = null;
  });

  test('both games are bundled and listed in pubspec, and load nothing from the internet', () {
    final pub = File('pubspec.yaml').readAsStringSync();
    for (final g in kWebGames) {
      for (final f in ['index.html', 'boot.js', 'game.js']) {
        expect(File('assets/games/${g.folder}/$f').existsSync(), isTrue, reason: '${g.folder}/$f');
      }
      expect(pub, contains('assets/games/${g.folder}/'));
      final html = File(g.page).readAsStringSync();
      expect(RegExp(r'(src|href)="https?:').hasMatch(html), isFalse);
      expect(File('assets/games/${g.folder}/boot.js').readAsStringSync(), contains('window.${g.global}.start'));
    }
  });

  test('game progress is kept per child and per game, survives damaged data and is erased with the child', () async {
    SharedPreferences.setMockInitialValues({});
    final race = WebGameStore(kCarnivalRace);
    final jungle = WebGameStore(kJungleAdventure);
    expect(await race.load('k1'), isNull);
    await race.save('k1', {'tickets': 120});
    await race.save('k2', {'tickets': 5});
    await jungle.save('k1', {'coins': 33});
    expect((await race.load('k1'))!['tickets'], 120);
    expect((await jungle.load('k1'))!['coins'], 33);
    await deleteOneChild('k1');
    expect(await race.load('k1'), isNull);
    expect(await jungle.load('k1'), isNull);
    expect((await race.load('k2'))!['tickets'], 5, reason: 'the other child keeps theirs');
    SharedPreferences.setMockInitialValues({'jungle_adventure': '{not json'});
    expect(await jungle.load('k1'), isNull);
    await jungle.save('k1', {'coins': 1});
    expect((await jungle.load('k1'))!['coins'], 1);
  });
}
