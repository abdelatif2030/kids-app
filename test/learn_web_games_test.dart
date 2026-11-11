import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/games/web_games/web_game_screen.dart';
import 'package:kids_app/progress_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('every rebuilt learning game is bundled: page, boot and game, and its global is defined', () {
    for (final g in kLearnWebGames.values) {
      for (final f in ['index.html', 'boot.js', 'game.js']) {
        expect(File('assets/games/${g.folder}/$f').existsSync(), isTrue, reason: '${g.id} $f');
      }
      expect(File(g.bundle).readAsStringSync(), contains('window.${g.global}'));
      expect(File('assets/games/${g.folder}/boot.js').readAsStringSync(), contains('window.${g.global}.start'));
      expect(File('pubspec.yaml').readAsStringSync(), contains('- ${g.base}'));
      expect(g.isLearning, isTrue);
      // the same id as the old game, so stars and progress stay
      expect(kEducationalGames.map((e) => e.id), contains(g.learnId));
    }
  });

  test('the maze card in the catalog opens the new 3D maze', () {
    final maze = kEducationalGames.firstWhere((g) => g.id == 'maze');
    final w = maze.build('kid', 5, 'ar');
    expect(w, isA<WebGameScreen>());
    expect((w as WebGameScreen).game, kLearnMaze);
  });

  test('complete gives the learning star once, under the old game id', () async {
    final b = LearnBridge(kLearnMaze, 'kid');
    await b.handle({'type': 'complete'});
    await b.handle({'type': 'complete'});
    expect(await GameRewards.doneIds('kid'), contains('maze'));
  });

  test('a round is recorded for the parent dashboard; a fun game records nothing', () async {
    await LearnBridge(kLearnMaze, 'kid').handle({'type': 'round', 'skill': 'letters', 'correct': true, 'detail': 'ب'});
    await LearnBridge(kFrostCoil, 'kid').handle({'type': 'round', 'skill': 'letters', 'correct': true});
    await LearnBridge(kFrostCoil, 'kid').handle({'type': 'complete'});
    final ev = await ProgressStore.load();
    expect(ev.length, 1);
    expect(ev.single.skill, 'letters');
    expect(ev.single.ok, isTrue);
    expect(await GameRewards.doneIds('kid'), isNot(contains('frost_coil')));
  });

  test('without a child nothing is recorded', () async {
    await LearnBridge(kLearnMaze, null).handle({'type': 'complete'});
    expect(await GameRewards.doneIds('kid'), isEmpty);
  });

  testWidgets('no extra «رجوع» button over the games (each game has its own back button at the top)', (t) async {
    debugDefaultTargetPlatformOverride = TargetPlatform.windows; // no built-in browser view in tests
    addTearDown(() => debugDefaultTargetPlatformOverride = null);
    for (final g in [...kWebGames, ...kLearnWebGames.values]) {
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: WebGameScreen(game: g, age: 5)));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('web_game_back')), findsNothing, reason: g.id);
    }
    debugDefaultTargetPlatformOverride = null;
  });
}
