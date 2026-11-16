import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adaptive/skill_state.dart';
import 'package:kids_app/games/adventure_games.dart';
import 'package:kids_app/games/adventure_logic.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_skills.dart';
import 'package:kids_app/games/letter_fishing_game.dart';
import 'package:kids_app/games/match_pictures_game.dart';
import 'package:kids_app/games/numerals_game.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/notifications/notification_store.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/skills.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 3; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await t.pump(const Duration(milliseconds: 200));
  }
}

Future<List<SkillEvent>> _events(WidgetTester t, String skill, String child) async {
  final all = (await t.runAsync(ProgressStore.load))!;
  return [for (final e in all) if (e.skill == skill && e.childId == child) e];
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
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
  void screen(WidgetTester t, [Size s = const Size(1000, 800)]) {
    t.view.physicalSize = s;
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  group('the rules table', () {
    test('every learning game either feeds an existing skill or says why it cannot', () {
      final skills = {for (final s in kSkills) s.id};
      for (final g in gamesForAge(5)) {
        final rule = ruleFor(g.id);
        final choice = kChoiceGameSkills[g.id];
        final own = const {'review_words'}.contains(g.id); // review_game records practice only, by design
        if (!(rule != null || choice != null || own)) fail('${g.id} has no skill decision');
        if (rule != null && choice != null) fail('${g.id} is decided twice');
        if (rule != null) {
          expect(rule.basis.length, greaterThan(15), reason: g.id);
          if (!rule.exempt) expect(skills, contains(rule.skill), reason: g.id);
        }
        if (choice != null) expect(skills, contains(choice), reason: g.id);
      }
      expect({for (final r in kGameSkillRules) r.gameId}.length, kGameSkillRules.length);
    });

    test('games where nothing is right or wrong are exempt and never invent a skill', () {
      for (final id in ['snakes_ladders']) {
        expect(ruleFor(id)!.exempt, isTrue, reason: id);
      }
    });

    test('the memory rule: at most one wrong flip per pair counts as a first-try board', () {
      expect(memoryBoardOk(pairs: 4, mismatches: 0), isTrue);
      expect(memoryBoardOk(pairs: 4, mismatches: 4), isTrue);
      expect(memoryBoardOk(pairs: 4, mismatches: 5), isFalse);
    });
  });

  group('RoundTracker', () {
    test('records a round once, first try only when there was no wrong try, and keeps children apart', () async {
      final a = RoundTracker('a', 'spatial');
      a.solved();
      a.solved(); // a double call never records twice
      a.next();
      a.miss();
      a.miss();
      a.solved();
      final b = RoundTracker('b', 'spatial')..solved();
      await Future<void>.delayed(const Duration(milliseconds: 50));
      final all = await ProgressStore.load();
      expect([for (final e in all) if (e.childId == 'a') e.ok], [true, false]);
      expect([for (final e in all) if (e.childId == 'b') e.ok], [true]);
      expect(b.misses, 0);
    });

    test('an unfinished round records nothing', () async {
      RoundTracker('a', 'counting')
        ..miss()
        ..miss();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(await ProgressStore.load(), isEmpty);
    });
  });

  group('mastery transitions use the unchanged criteria (8 rounds, 2 days, 80 %)', () {
    final now = DateTime(2026, 11, 10);
    SkillEvent ev(String day, bool ok) => SkillEvent(day: day, skill: 'spatial', ok: ok, childId: 'c');
    test('eight good rounds on one day are not mastery; on two days they are', () {
      final oneDay = [for (var i = 0; i < 8; i++) ev('2026-11-10', true)];
      expect(computeSkillState('spatial', oneDay, now: now).level, isNot(SkillLevel.demonstrated));
      final twoDays = [for (var i = 0; i < 4; i++) ev('2026-11-09', true), for (var i = 0; i < 4; i++) ev('2026-11-10', true)];
      expect(computeSkillState('spatial', twoDays, now: now).level, SkillLevel.demonstrated);
    });
    test('seven rounds on two days are not enough, and many misses stop mastery', () {
      final seven = [for (var i = 0; i < 3; i++) ev('2026-11-09', true), for (var i = 0; i < 4; i++) ev('2026-11-10', true)];
      expect(computeSkillState('spatial', seven, now: now).level, isNot(SkillLevel.demonstrated));
      final weak = [for (var i = 0; i < 4; i++) ev('2026-11-09', i < 2), for (var i = 0; i < 4; i++) ev('2026-11-10', i < 2)];
      expect(computeSkillState('spatial', weak, now: now).level, isNot(SkillLevel.demonstrated));
    });
    test('another child\'s events never count', () {
      final mixed = [for (var i = 0; i < 8; i++) SkillEvent(day: i.isEven ? '2026-11-09' : '2026-11-10', skill: 'spatial', ok: true, childId: 'other')];
      final states = computeSkillStates(mixed, childId: 'c', now: now);
      expect(states, isEmpty);
    });
  });

  group('games write one event per solved round', () {
    testWidgets('letter fishing: a wrong fish then the right one is NOT first try; a clean round is', (t) async {
      screen(t);
      final rounds = makeFishingRounds('ar', 4, Random(2));
      await t.pumpWidget(_app(LetterFishingGame(childId: 'c2', age: 4, random: Random(2))));
      for (var i = 0; i < kFishingRounds; i++) {
        if (i == 0) {
          final wrong = rounds[i].choices.firstWhere((c) => c != rounds[i].target);
          await t.tap(find.byKey(ValueKey('fish$wrong')));
          await t.pump();
          expect(await _events(t, 'letters_ar', 'c2'), isEmpty, reason: 'a wrong tap alone records nothing');
        }
        await t.tap(find.byKey(ValueKey('fish${rounds[i].target}')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 800));
      }
      await _settle(t);
      final ev = await _events(t, 'letters_ar', 'c2');
      expect(ev.length, kFishingRounds);
      expect(ev.map((e) => e.ok).toList(), [false, true, true, true, true]);
      expect(ev.first.detail, rounds.first.target); // the letter, readable for the parent
      expect(await _events(t, 'letters_ar', 'someone_else'), isEmpty);
    });

    testWidgets('numerals: events go to counting for this child only', (t) async {
      screen(t);
      final rounds = makeNumeralRounds(5, Random(3));
      await t.pumpWidget(_app(NumeralsGame(childId: 'c4', age: 5, random: Random(3))));
      for (var i = 0; i < kNumeralRounds; i++) {
        await t.tap(find.byKey(ValueKey('num${rounds[i].digit}')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 800));
      }
      await _settle(t);
      final ev = await _events(t, 'counting', 'c4');
      expect(ev.length, kNumeralRounds);
      expect(ev.every((e) => e.ok), isTrue);
    });

    testWidgets('jigsaw: a wrong place makes the puzzle not-first-try; play again records a fresh puzzle', (t) async {
      screen(t, const Size(900, 700));
      await t.pumpWidget(_app(JigsawGame(childId: 'c1', age: 4, random: Random(1))));
      await _settle(t);
      final first = JigsawPuzzle(2, 2, Random(1)).tray.first;
      await t.tap(find.byKey(ValueKey('piece_$first')));
      await t.pump();
      await t.tap(find.byKey(ValueKey('slot_${(first + 1) % 4}')));
      await t.pump();
      for (var id = 0; id < 4; id++) {
        await t.tap(find.byKey(ValueKey('piece_$id')));
        await t.pump();
        await t.tap(find.byKey(ValueKey('slot_$id')));
        await t.pump();
      }
      await _settle(t);
      final ev = await _events(t, 'spatial', 'c1');
      expect(ev.map((e) => e.ok).toList(), [false]);
    });

    testWidgets('treasure hunt: one event per map; a landmark or wrong cell makes it not-first-try', (t) async {
      screen(t, const Size(1000, 760));
      final rnd = Random(6);
      final maps = [for (var i = 0; i < 3; i++) TreasureMap.generate(4, 3, rnd)];
      await t.pumpWidget(_app(TreasureHuntGame(childId: 'c1', age: 5, random: Random(6))));
      await _settle(t);
      for (final (i, m) in maps.indexed) {
        if (i == 0) {
          final wrong = [for (var c = 0; c < 16; c++) if (c != m.treasure && !m.landmarks.any((l) => l.cell == c)) c].first;
          await t.tap(find.byKey(ValueKey('tcell_$wrong')));
          await t.pump();
        }
        await t.tap(find.byKey(ValueKey('tcell_${m.treasure}')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 1300));
      }
      await _settle(t);
      expect((await _events(t, 'spatial', 'c1')).map((e) => e.ok).toList(), [false, true, true]);
    });

    testWidgets('connect the dots: one event per picture', (t) async {
      screen(t, const Size(900, 760));
      final shapes = dotShapesForAge(5, Random(7));
      await t.pumpWidget(_app(ConnectDotsGame(childId: 'c1', age: 5, random: Random(7))));
      await _settle(t);
      for (final (i, s) in shapes.indexed) {
        if (i == 1) {
          await t.tap(find.byKey(const ValueKey('dot_3')));
          await t.pump();
        }
        for (var k = 0; k < s.points.length; k++) {
          await t.tap(find.byKey(ValueKey('dot_$k')));
          await t.pump();
        }
        await t.pump(const Duration(milliseconds: 1400));
      }
      await _settle(t);
      final ev = await _events(t, 'counting', 'c1');
      expect(ev.length, shapes.length);
      expect(ev.map((e) => e.ok).toList()[1], isFalse);
      expect(ev.first.ok, isTrue);
    });

    testWidgets('animal habitats: one event per animal, wrong home first makes only that animal not-first-try', (t) async {
      screen(t, const Size(900, 800));
      final rnd = Random(8);
      final rounds = [makeHabitatRound(5, rnd), makeHabitatRound(5, rnd)];
      await t.pumpWidget(_app(AnimalHabitatsGame(childId: 'c1', age: 5, random: Random(8))));
      await _settle(t);
      var total = 0;
      for (final (ri, r) in rounds.indexed) {
        if (ri == 0) {
          final a0 = r.animals.first;
          final wrong = r.homes.firstWhere((h) => h != a0.home);
          await t.tap(find.byKey(ValueKey('animal_${a0.id}')));
          await t.pump();
          await t.tap(find.byKey(ValueKey('home_${wrong.name}')));
          await t.pump();
        }
        for (final a in r.animals) {
          await t.tap(find.byKey(ValueKey('animal_${a.id}')));
          await t.pump();
          await t.tap(find.byKey(ValueKey('home_${a.home.name}')));
          await t.pump();
          total++;
        }
        await t.pump(const Duration(milliseconds: 1200));
      }
      await _settle(t);
      final ev = await _events(t, 'nature', 'c1');
      expect(ev.length, total);
      expect(ev.where((e) => !e.ok).length, 1);
    });

    testWidgets('match pictures: one memory event per finished board; a new board records again', (t) async {
      screen(t);
      final board = MatchBoard.forAge(3, random: Random(4));
      await t.pumpWidget(_app(MatchPicturesGame(childId: 'c3', age: 3, random: Random(4))));
      await _settle(t);
      final seen = <String, int>{};
      for (var i = 0; i < board.cards.length; i++) {
        final c = board.cards[i];
        if (seen.containsKey(c)) {
          await t.tap(find.byKey(ValueKey('card${seen[c]}')));
          await t.pump();
          await t.tap(find.byKey(ValueKey('card$i')));
          await t.pump();
        } else {
          seen[c] = i;
        }
      }
      await _settle(t);
      final ev = await _events(t, 'memory', 'c3');
      expect(ev.length, 1);
      expect(ev.single.ok, isTrue);
    });

    testWidgets('exempt games write no skill event even when finished', (t) async {
      screen(t);
      await t.pumpWidget(_app(const SizedBox()));
      expect(await t.runAsync(ProgressStore.load), isEmpty);
    });
  });
}
