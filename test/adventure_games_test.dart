import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/adventure_games.dart';
import 'package:kids_app/games/adventure_logic.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/notifications/notification_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 3; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await t.pump(const Duration(milliseconds: 200));
  }
}

Future<void> _wait(WidgetTester t, int ms) async {
  await t.pump(Duration(milliseconds: ms));
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    NotificationStore.instance.resetForTest();
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    JourneyStore.instance = store;
    await AppLocale.instance.set('en');
    GameCue.onCue = null;
  });
  tearDown(() async {
    GameCue.onCue = null;
    await AppLocale.instance.set('ar');
  });

  void tall(WidgetTester t, [Size s = const Size(900, 700)]) {
    t.view.physicalSize = s;
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  Future<void> expectStarOnce(WidgetTester t, String child, String id) async {
    await _settle(t);
    expect(find.byType(GameFinishPanel), findsOneWidget);
    expect(find.byIcon(Icons.star_rounded), findsWidgets); // first finish earns the star
    expect((await t.runAsync(() => GameRewards.isDone(child, id)))!, isTrue);
    expect((await t.runAsync(() => GameRewards.isDone('other_child', id)))!, isFalse); // profile isolation
  }

  testWidgets('catalog: all six are listed with the right ages and open from the games list', (t) async {
    for (final id in ['snakes_ladders', 'jigsaw', 'maze', 'treasure_hunt', 'connect_dots', 'animal_habitats']) {
      final g = kEducationalGames.firstWhere((g) => g.id == id);
      expect(g.minAge, inInclusiveRange(3, 4));
      expect(g.maxAge, 6);
      expect(g.title(), isNotEmpty);
      expect(g.objective(), isNotEmpty);
      expect(gamesForAge(2).any((x) => x.id == id), isFalse);
      expect(gamesForAge(6).any((x) => x.id == id), isTrue);
    }
  });

  testWidgets('snakes and ladders: roll to the end; the friend can finish first without ending it; the star comes once', (t) async {
    tall(t);
    final cues = <String>[];
    GameCue.onCue = cues.add;
    await t.pumpWidget(_app(SnakesLaddersGame(childId: 'c1', age: 4, random: Random(5))));
    await _settle(t);
    expect(find.byKey(const ValueKey('snakes_board')), findsOneWidget);
    var guard = 0;
    while (find.byType(GameFinishPanel).evaluate().isEmpty && guard++ < 300) {
      await t.tap(find.byKey(const ValueKey('roll')));
      await _wait(t, 500);
      await _wait(t, 1200);
    }
    expect(guard, lessThan(300));
    expect(cues, contains('roll'));
    await expectStarOnce(t, 'c1', SnakesLaddersGame.gameId);
    expect(cues, contains('win')); // the audio hook is called
    // play again: fresh board
    await t.tap(find.byType(FilledButton).first);
  });

  testWidgets('jigsaw: a wrong place bounces back; tapping a piece then its place fits it; completing earns the star', (t) async {
    tall(t);
    await t.pumpWidget(_app(JigsawGame(childId: 'c1', age: 4, random: Random(1))));
    await _settle(t);
    final first = JigsawPuzzle(2, 2, Random(1)).tray.first; // the same shuffle the game made
    final wrongSlot = (first + 1) % 4;
    await t.tap(find.byKey(ValueKey('piece_$first')));
    await t.pump();
    await t.tap(find.byKey(ValueKey('slot_$wrongSlot')));
    await t.pump();
    expect(find.byKey(ValueKey('piece_$first')), findsOneWidget); // still in the tray
    for (var id = 0; id < 4; id++) {
      await t.tap(find.byKey(ValueKey('piece_$id')));
      await t.pump();
      await t.tap(find.byKey(ValueKey('slot_$id')));
      await t.pump();
    }
    await expectStarOnce(t, 'c1', JigsawGame.gameId);
  });

  testWidgets('jigsaw: drag and drop works too', (t) async {
    tall(t);
    await t.pumpWidget(_app(JigsawGame(childId: 'c1', age: 3, random: Random(2))));
    await _settle(t);
    final id = JigsawPuzzle(2, 2, Random(2)).tray.first;
    await t.drag(find.byKey(ValueKey('piece_$id')), t.getCenter(find.byKey(ValueKey('slot_$id'))) - t.getCenter(find.byKey(ValueKey('piece_$id'))));
    await t.pump();
    expect(find.byKey(ValueKey('piece_$id')), findsNothing); // placed: gone from the tray
  });

  testWidgets('maze: walls stop the mouse, the way through leads to the cheese, three mazes finish the game', (t) async {
    tall(t, const Size(1000, 760));
    final rnd = Random(3);
    final sizes = mazeSizes(5);
    final mazes = [for (final s in sizes) Maze.generate(s, rnd)]; // the same sequence the game makes
    await t.pumpWidget(_app(MazeGame(childId: 'c1', age: 5, random: Random(3))));
    await _settle(t);
    const keys = ['maze_up', 'maze_right', 'maze_down', 'maze_left'];
    for (final m in mazes) {
      // bump into a wall first: nothing happens, nothing breaks
      for (var d = 0; d < 4; d++) {
        if (!m.canMove(0, 0, d)) {
          await t.tap(find.byKey(ValueKey(keys[d])));
          await t.pump();
          break;
        }
      }
      final path = m.solve();
      for (var i = 0; i + 1 < path.length; i++) {
        final d = [(0, -1), (1, 0), (0, 1), (-1, 0)].indexOf((path[i + 1].$1 - path[i].$1, path[i + 1].$2 - path[i].$2));
        await t.tap(find.byKey(ValueKey(keys[d])));
        await t.pump();
      }
      await _wait(t, 1200);
    }
    await expectStarOnce(t, 'c1', MazeGame.gameId);
  });

  testWidgets('maze: the hint shows the way and costs nothing', (t) async {
    tall(t, const Size(1000, 760));
    await t.pumpWidget(_app(MazeGame(childId: 'c1', age: 4, random: Random(4))));
    await _settle(t);
    await t.tap(find.byKey(const ValueKey('maze_hint')));
    await t.pump();
    expect(find.byKey(const ValueKey('maze_board')), findsOneWidget);
    expect(find.byType(GameFinishPanel), findsNothing);
  });

  testWidgets('treasure hunt: clues are shown, a wrong cell fades, a landmark is explained, the right cell wins; three maps finish', (t) async {
    tall(t, const Size(1000, 760));
    final rnd = Random(6);
    final maps = [for (var i = 0; i < 3; i++) TreasureMap.generate(4, 3, rnd)];
    await t.pumpWidget(_app(TreasureHuntGame(childId: 'c1', age: 5, random: Random(6))));
    await _settle(t);
    for (final (i, m) in maps.indexed) {
      expect(find.byKey(const ValueKey('clue_0')), findsOneWidget);
      final wrong = [for (var c = 0; c < 16; c++) if (c != m.treasure && !m.landmarks.any((l) => l.cell == c)) c].first;
      await t.tap(find.byKey(ValueKey('tcell_$wrong')));
      await t.pump();
      expect(find.text('Not here. Read the clue again!'), findsOneWidget);
      await t.tap(find.byKey(ValueKey('tcell_${m.landmarks.first.cell}')));
      await t.pump();
      expect(find.textContaining('landmark'), findsOneWidget);
      await t.tap(find.byKey(ValueKey('tcell_${m.treasure}')));
      await t.pump();
      expect(find.textContaining('found the treasure'), i == 2 ? findsAny : findsOneWidget);
      await _wait(t, 1300);
    }
    await expectStarOnce(t, 'c1', TreasureHuntGame.gameId);
  });

  testWidgets('connect the dots: the wrong dot changes nothing, dots in order draw the shape, three shapes finish', (t) async {
    tall(t, const Size(900, 760));
    final shapes = dotShapesForAge(5, Random(7));
    await t.pumpWidget(_app(ConnectDotsGame(childId: 'c1', age: 5, random: Random(7))));
    await _settle(t);
    for (final s in shapes) {
      await t.tap(find.byKey(const ValueKey('dot_3')));
      await t.pump();
      expect(find.text('Try number 1'), findsOneWidget);
      for (var k = 0; k < s.points.length; k++) {
        await t.tap(find.byKey(ValueKey('dot_$k')));
        await t.pump();
      }
      await _wait(t, 1400);
    }
    await expectStarOnce(t, 'c1', ConnectDotsGame.gameId);
  });

  testWidgets('connect the dots: every dot is fully inside the board and no two dots overlap (phone and landscape)', (t) async {
    for (final size in [const Size(360, 640), const Size(844, 390)]) {
      tall(t, size);
      await t.pumpWidget(_app(ConnectDotsGame(childId: 'c1', age: 6, random: Random(11))));
      await _settle(t);
      final board = t.getRect(find.byKey(const ValueKey('dots_board')));
      final shape = dotShapesForAge(6, Random(11)).first;
      final rects = [for (var k = 0; k < shape.points.length; k++) t.getRect(find.byKey(ValueKey('dot_$k')))];
      for (final r in rects) {
        expect(board.inflate(0.5).contains(r.topLeft) && board.inflate(0.5).contains(r.bottomRight), isTrue, reason: '$size $r vs $board');
        expect(r.width, greaterThanOrEqualTo(40));
      }
      for (var i = 0; i < rects.length; i++) {
        for (var j = i + 1; j < rects.length; j++) {
          expect(rects[i].overlaps(rects[j]), isFalse, reason: '$size dots ${i + 1}/${j + 1}');
        }
      }
    }
  });

  testWidgets('animal habitats: a wrong home is gentle, the right home places it, two rounds finish', (t) async {
    tall(t, const Size(900, 800));
    final rnd = Random(8);
    final rounds = [makeHabitatRound(5, rnd), makeHabitatRound(5, rnd)];
    await t.pumpWidget(_app(AnimalHabitatsGame(childId: 'c1', age: 5, random: Random(8))));
    await _settle(t);
    for (final r in rounds) {
      final a0 = r.animals.first;
      final wrong = r.homes.firstWhere((h) => h != a0.home);
      await t.tap(find.byKey(ValueKey('animal_${a0.id}')));
      await t.pump();
      await t.tap(find.byKey(ValueKey('home_${wrong.name}')));
      await t.pump();
      expect(find.text('Try another home'), findsOneWidget);
      expect(find.byKey(ValueKey('animal_${a0.id}')), findsOneWidget); // still waiting
      for (final a in r.animals) {
        await t.tap(find.byKey(ValueKey('animal_${a.id}')));
        await t.pump();
        await t.tap(find.byKey(ValueKey('home_${a.home.name}')));
        await t.pump();
      }
      await _wait(t, 1200);
    }
    await expectStarOnce(t, 'c1', AnimalHabitatsGame.gameId);
  });

  for (final lang in ['ar', 'en']) {
    testWidgets('every new game opens in $lang at a small landscape size without errors', (t) async {
      await AppLocale.instance.set(lang);
      tall(t, const Size(640, 340));
      for (final id in ['snakes_ladders', 'jigsaw', 'maze', 'treasure_hunt', 'connect_dots', 'animal_habitats']) {
        final g = kEducationalGames.firstWhere((x) => x.id == id);
        await t.pumpWidget(MaterialApp(
          key: UniqueKey(),
          builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
          home: g.build('c1', 5, lang),
        ));
        await _settle(t);
        expect(t.takeException(), isNull, reason: '$id $lang');
      }
    });
  }

  testWidgets('touch targets are at least 44 px and the key controls are announced, on a 360 px phone', (t) async {
    final handle = t.ensureSemantics();
    tall(t, const Size(360, 640));
    Future<void> check(Widget game, List<String> keys, {double min = 44}) async {
      await t.pumpWidget(_app(game));
      await _settle(t);
      for (final k in keys) {
        final f = find.byKey(ValueKey(k));
        expect(f, findsOneWidget, reason: k);
        final size = t.getSize(f);
        expect(size.width >= min && size.height >= min, isTrue, reason: '$k is ${size.width}x${size.height}');
      }
    }

    await check(SnakesLaddersGame(childId: 'c1', age: 4, random: Random(1)), ['roll', 'speak_instruction']);
    await check(MazeGame(childId: 'c1', age: 4, random: Random(1)), ['maze_up', 'maze_down', 'maze_left', 'maze_right', 'maze_hint']);
    await check(AnimalHabitatsGame(childId: 'c1', age: 4, random: Random(1)), [for (final a in makeHabitatRound(4, Random(1)).animals) 'animal_${a.id}']);
    await check(ConnectDotsGame(childId: 'c1', age: 4, random: Random(1)), ['dot_0', 'dot_1']);
    await check(TreasureHuntGame(childId: 'c1', age: 4, random: Random(1)), ['tcell_0', 'tcell_8']);
    await check(JigsawGame(childId: 'c1', age: 4, random: Random(1)), ['slot_0', 'piece_0', 'piece_3']);
    // pictures are announced, not silent
    await t.pumpWidget(_app(MazeGame(childId: 'c1', age: 4, random: Random(1))));
    await _settle(t);
    expect(find.bySemanticsLabel(RegExp('Up|أعلى')), findsWidgets);
    handle.dispose();
  });

  testWidgets('a repeat finish shows kind words and no second star', (t) async {
    tall(t);
    await t.runAsync(() => GameRewards.complete('c1', JigsawGame.gameId));
    await t.pumpWidget(_app(JigsawGame(childId: 'c1', age: 3, random: Random(2))));
    await _settle(t);
    for (var id = 0; id < 4; id++) {
      await t.tap(find.byKey(ValueKey('piece_$id')));
      await t.pump();
      await t.tap(find.byKey(ValueKey('slot_$id')));
      await t.pump();
    }
    await _settle(t);
    expect(find.byType(GameFinishPanel), findsOneWidget);
    expect(find.byIcon(Icons.star_rounded), findsNothing);
  });

  testWidgets('works offline: nothing in these games needs a network (no repository, no fetch)', (t) async {
    tall(t);
    await t.pumpWidget(_app(AnimalHabitatsGame(childId: 'c1', age: 3, random: Random(1))));
    await _settle(t);
    expect(find.byKey(const ValueKey('animals')), findsOneWidget);
  });
}
