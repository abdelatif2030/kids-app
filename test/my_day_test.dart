import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/games/word_book_game.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/my_day.dart';
import 'package:kids_app/journey/ui/home_tab.dart';
import 'package:kids_app/journey/ui/me_tab.dart';
import 'package:kids_app/journey/ui/my_day_cards.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);

DateTime _at(int h) => DateTime(2026, 11, 10, h, 30);

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('greeting', () {
    test('four parts of the day, a different greeting at night', () {
      expect(dayPartOf(_at(7)), DayPart.morning);
      expect(dayPartOf(_at(13)), DayPart.afternoon);
      expect(dayPartOf(_at(18)), DayPart.evening);
      expect(dayPartOf(_at(23)), DayPart.night);
      expect(dayPartOf(_at(3)), DayPart.night);
      expect(greetingFor(DayPart.morning), 'صباح الخير يا بطل!');
      expect(greetingFor(DayPart.night), isNot(greetingFor(DayPart.morning)));
      expect({for (final p in DayPart.values) greetingFor(p)}.length, 4);
      expect({for (final p in DayPart.values) hintFor(p)}.length, 4);
    });

    testWidgets('the home screen greets by the time of day, with the child\'s name', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      Future<void> show(DateTime t) async {
        await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: HomeTab(more: true, child: _kid, onExit: () {}, now: t))));
        await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 60)));
        await tester.pump();
      }

      await show(_at(8));
      expect(tester.widget<Text>(find.byKey(const ValueKey('greeting'))).data, 'صباح الخير يا بطل!');
      expect(find.text('Lina'), findsWidgets);
      await show(_at(22));
      expect(tester.widget<Text>(find.byKey(const ValueKey('greeting'))).data, greetingFor(DayPart.night));
    });
  });

  group('daily picks', () {
    test('the same word and story all day, new ones on other days, always suited to the age', () {
      final a = wordOfDay(_at(8), 4)!;
      expect(wordOfDay(_at(20), 4)!.id, a.id);
      expect({for (var d = 0; d < 6; d++) wordOfDay(DateTime(2026, 11, 10 + d), 4)!.id}.length, greaterThan(1));
      expect(wordOfDay(_at(8), 4)!.minAge <= 4, true);
      final s = storyOfDay(_at(8), 5)!;
      expect(s.fitsAge(5), true);
      expect(storyOfDay(_at(8), 5, heard: {s.id})?.id, isNot(s.id)); // prefers a story not heard yet
      expect(gameOfDay(_at(8), 2)?.id, WordBookGame.gameId); // the only learning game for age 2
      expect(gameOfDay(_at(8), 9), isNull);
    });
  });

  group('facts and achievements come from real activity only', () {
    test('nothing done: no achievement text and no station is done', () async {
      final f = await loadDayFacts('k1', now: _at(10));
      expect(f.isEmpty, true);
      expect(achievementText(f), isNull);
      for (final s in Station.values) {
        expect(f.done(s), false);
      }
    });

    test('a word met, a game finished and a story heard today make the stations done and the text', () async {
      final t = _at(10);
      await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.exposure, now: t);
      await LearningRecords.add('k1', RecordType.word, 'dog', Evidence.exposure, now: t);
      await GameRewards.complete('k1', 'numerals', now: t);
      await StoryStore.addListening('k1', 'moon_star', 120, completed: true, now: t);
      // another child's and another day's activity must not count
      await LearningRecords.add('k2', RecordType.word, 'cow', Evidence.exposure, now: t);
      await LearningRecords.add('k1', RecordType.word, 'fish', Evidence.exposure, now: t.subtract(const Duration(days: 1)));
      final f = await loadDayFacts('k1', now: t);
      expect(f.wordIds, {'cat', 'dog'});
      expect(f.gameIds, {'numerals'});
      expect(f.storyIds, {'moon_star'});
      expect(f.done(Station.discover), true);
      expect(f.done(Station.play), true);
      expect(f.done(Station.tell), true);
      expect(f.done(Station.learn), false);
      final text = achievementText(f)!;
      expect(text, contains('2 كلمات'));
      expect(text, contains('لعبة'));
      expect(text, contains('قصة'));
      expect(text, isNot(contains('أنشطة')));
    });

    test('yesterday is not today', () async {
      await GameRewards.complete('k1', 'numerals', now: DateTime(2026, 11, 9, 10));
      expect((await loadDayFacts('k1', now: _at(10))).gameIds, isEmpty);
    });
  });

  group('garden', () {
    test('it only grows with real completions and has clear stages', () {
      expect(gardenOf(activities: 0, games: 0, stories: 0).stage, GardenStage.seed);
      expect(gardenOf(activities: 1, games: 0, stories: 0).stage, GardenStage.sprout);
      expect(gardenOf(activities: 3, games: 1, stories: 2).stage, GardenStage.plant);
      expect(gardenOf(activities: 10, games: 0, stories: 0).stage, GardenStage.flowering);
      expect(gardenOf(activities: 20, games: 0, stories: 0).stage, GardenStage.blooming);
      expect(gardenOf(activities: 30, games: 6, stories: 8).stage, GardenStage.tree);
      var last = 0;
      for (var n = 0; n < 60; n++) {
        final g = gardenOf(activities: n, games: 0, stories: 0);
        expect(g.flowers >= last, true); // never shrinks
        last = g.flowers;
      }
      expect({for (final s in GardenStage.values) gardenStageLabel(s)}.length, GardenStage.values.length);
    });

    test('loadGarden counts finished games and completed stories', () async {
      await GameRewards.complete('k1', 'numerals');
      await GameRewards.complete('k1', 'numerals'); // a repeat is not another flower
      await StoryStore.addListening('k1', 'moon_star', 100, completed: true);
      await StoryStore.addListening('k1', 'three_apples', 100); // not completed
      final g = await loadGarden('k1');
      expect(g.flowers, 2);
      expect(g.stage, GardenStage.sprout);
    });

    testWidgets('the garden card on the Me tab shows the real count', (tester) async {
      await tester.runAsync(() => GameRewards.complete('k1', 'numerals'));
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: const Scaffold(body: SingleChildScrollView(child: GardenCard(child: _kid)))));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 60)));
      await tester.pump();
      expect(find.textContaining('1 إنجازاً'), findsOneWidget);
      expect(find.byType(MeTab), findsNothing);
    });
  });

  group('stations', () {
    testWidgets('four stations for age 5, each with a start button; a done one shows Again and the achievement card', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final t = DateTime.now();
      await tester.runAsync(() async {
        await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.exposure, now: t);
      });
      await tester.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: Scaffold(body: SingleChildScrollView(child: MyDayCard(child: _kid, onLearn: () {}, now: DateTime(t.year, t.month, t.day, 9)))),
      ));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      for (final s in Station.values) {
        expect(find.byKey(ValueKey('station_${s.name}')), findsOneWidget);
      }
      expect(find.text('ابدأ'), findsNWidgets(3));
      expect(find.text('مرة أخرى'), findsOneWidget); // the discover station is done
      expect(find.byKey(const ValueKey('achievement')), findsOneWidget);
      expect(find.textContaining('تعرّفت على 1 كلمة'), findsOneWidget);
    });

    testWidgets('with nothing done there is no achievement card and nothing says the child is behind', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: MyDayCard(child: _kid, onLearn: () {})))));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      expect(find.byKey(const ValueKey('achievement')), findsNothing);
      expect(find.text('ابدأ'), findsNWidgets(4));
      expect(find.textContaining('متأخر'), findsNothing);
      expect(find.textContaining('لم تنه'), findsNothing);
    });

    testWidgets('at night the story station comes first', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: MyDayCard(child: _kid, onLearn: () {}, now: _at(22))))));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      final tellX = tester.getTopLeft(find.byKey(const ValueKey('station_tell'))).dx;
      final learnX = tester.getTopLeft(find.byKey(const ValueKey('station_learn'))).dx;
      final tellY = tester.getTopLeft(find.byKey(const ValueKey('station_tell'))).dy;
      final learnY = tester.getTopLeft(find.byKey(const ValueKey('station_learn'))).dy;
      expect(tellY < learnY || (tellY == learnY && tellX < learnX), true); // first in reading order (this test app is left to right)
    });

    testWidgets('pressing learn calls the lesson callback', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      var opened = 0;
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: MyDayCard(child: _kid, onLearn: () => opened++)))));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      await tester.tap(find.descendant(of: find.byKey(const ValueKey('station_learn')), matching: find.byType(OutlinedButton)));
      await tester.pump();
      expect(opened, 1);
    });
  });
}
