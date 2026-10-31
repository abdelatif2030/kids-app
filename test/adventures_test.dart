import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_logic.dart';
import 'package:kids_app/adventures/adventure_screen.dart';
import 'package:kids_app/adventures/adventure_service.dart';
import 'package:kids_app/adventures/adventure_store.dart';
import 'package:kids_app/companion/companion_logic.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  final wed = DateTime(2026, 10, 28); // a Wednesday
  final stories = publishedStories();

  group('logic', () {
    test('weeks run Monday to Sunday and the theme is stable inside a week', () {
      expect(weekIdOf(wed), '2026-10-26');
      expect(weekEndIdOf(wed), '2026-11-01');
      expect(weekIdOf(DateTime(2026, 11, 1)), '2026-10-26'); // Sunday
      expect(weekIdOf(DateTime(2026, 11, 2)), '2026-11-02'); // next Monday
      expect(themeOfWeek(DateTime(2026, 10, 26)).id, themeOfWeek(DateTime(2026, 11, 1)).id);
      final ids = [for (var w = 0; w < 6; w++) themeOfWeek(wed.add(Duration(days: 7 * w))).id];
      expect(ids.toSet().length, 6);
    });

    test('every theme game id exists in the catalogue', () {
      final all = {for (final g in kEducationalGames) g.id};
      for (final t in kAdventureThemes) {
        for (final g in t.games) {
          expect(all, contains(g), reason: '${t.id}/$g');
        }
      }
    });

    test('plans only hold games that fit the age, and steps follow age and ability', () {
      for (var age = 1; age <= 6; age++) {
        for (final a in Ability.values) {
          final p = planFor(wed, age, a, stories);
          for (final s in p.steps.where((s) => s.kind == 'game')) {
            expect(kEducationalGames.firstWhere((g) => g.id == s.id).fitsAge(age), isTrue, reason: '$age ${s.id}');
          }
          expect(p.steps.where((s) => s.kind == 'game').map((s) => s.id).toSet().length, p.steps.where((s) => s.kind == 'game').length);
        }
      }
      expect(gameStepsFor(2, Ability.unknown), 2);
      expect(gameStepsFor(4, Ability.unknown), 3);
      expect(gameStepsFor(6, Ability.unknown), 4);
      expect(gameStepsFor(6, Ability.confident), 5);
      expect(gameStepsFor(3, Ability.confident), 3); // confidence adds a step only from 5
      expect(gameStepsFor(2, Ability.needsSupport), 1);
      expect(gameStepsFor(1, Ability.needsSupport), 1);
    });

    test('completion needs every step', () {
      final p = planFor(wed, 6, Ability.unknown, stories);
      final games = {for (final s in p.steps) if (s.kind == 'game') s.id};
      final story = {for (final s in p.steps) if (s.kind == 'story') s.id};
      expect(adventureComplete(p, games, story), isTrue);
      expect(adventureComplete(p, games, <String>{}), isFalse);
      expect(adventureComplete(p, {...games}..remove(games.first), story), isFalse);
      expect(adventureComplete(AdventurePlan('w', p.theme, const []), {}, {}), isFalse);
    });
  });

  group('service', () {
    test('real progress completes the adventure once; nothing counts from other weeks or other children', () async {
      final age = 6;
      final p = planFor(wed, age, Ability.unknown, stories);
      for (final s in p.steps.where((s) => s.kind == 'game')) {
        await GameRewards.complete('a', s.id, now: wed);
      }
      final before = await AdventureService.check('a', age, now: wed, stories: stories);
      expect(before.complete, isFalse); // the story is still missing
      expect(before.done.where((d) => d).length, p.steps.length - 1);
      final storyId = p.steps.firstWhere((s) => s.kind == 'story').id;
      await StoryStore.addListening('a', storyId, 60, completed: true, now: wed);
      final done = await AdventureService.check('a', age, now: wed, stories: stories);
      expect(done.complete, isTrue);
      expect(done.justCompleted, isTrue);
      expect(done.said, isNotNull);
      final again = await AdventureService.check('a', age, now: wed, stories: stories);
      expect(again.complete, isTrue);
      expect(again.justCompleted, isFalse); // cannot be claimed twice
      expect(again.said, isNull);
      expect((await AdventureStore.finished('a')).keys, ['2026-10-26']);
      final other = await AdventureService.check('b', age, now: wed, stories: stories);
      expect(other.done.any((d) => d), isFalse);
      final nextWeek = await AdventureService.check('a', age, now: wed.add(const Duration(days: 7)), stories: stories);
      expect(nextWeek.complete, isFalse); // a new week starts fresh; nothing is lost
      expect((await AdventureStore.finished('a')).length, 1);
    });

    test('deleting a child removes only that child\'s adventures', () async {
      await AdventureStore.record('a', '2026-10-26', 'letters');
      await AdventureStore.record('b', '2026-10-26', 'letters');
      await deleteOneChild('a');
      expect(await AdventureStore.finished('a'), isEmpty);
      expect(await AdventureStore.finished('b'), hasLength(1));
    });

    test('damaged storage does not crash', () async {
      SharedPreferences.setMockInitialValues({'adventures': '[[['});
      expect(await AdventureStore.finished('a'), isEmpty);
      expect(await AdventureStore.record('a', 'w', 't'), isTrue);
    });
  });

  group('screen', () {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 5);
    Future<void> open(WidgetTester t, {String lang = 'ar', Size size = const Size(360, 640), double text = 1}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: const AdventureScreen(child: kid),
      ));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
      await t.pump();
    }

    testWidgets('shows the theme and unchecked steps, in both languages, without overflow', (t) async {
      for (final lang in ['ar', 'en']) {
        for (final size in [const Size(320, 568), const Size(844, 390)]) {
          await open(t, lang: lang, size: size, text: 1.6);
          expect(find.byKey(const ValueKey('adventure_theme')), findsOneWidget);
          expect(find.byKey(const ValueKey('adventure_step_0')), findsOneWidget);
          expect(find.byIcon(Icons.check_circle_rounded), findsNothing);
          expect(t.takeException(), isNull);
        }
      }
    });

    testWidgets('a game finished this week is checked', (t) async {
      final p = planFor(DateTime.now(), 5, Ability.unknown, stories);
      await GameRewards.complete('k1', p.steps.first.id);
      await open(t);
      expect(find.byIcon(Icons.check_circle_rounded), findsOneWidget);
    });
  });
}
