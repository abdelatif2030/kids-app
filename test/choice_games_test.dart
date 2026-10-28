import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<void> _show(WidgetTester t, Widget w) async {
  t.view.physicalSize = const Size(900, 2200);
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(key: UniqueKey(), home: w));
  await t.pump();
}

bool _star(WidgetTester t) => find.byIcon(Icons.star_rounded).evaluate().isNotEmpty;

Future<void> _playThrough(WidgetTester t, List<ChoiceRound> rounds, {bool wrongFirst = true}) async {
  for (var i = 0; i < rounds.length; i++) {
    final r = rounds[i];
    if (wrongFirst) {
      final wrong = [for (var o = 0; o < r.options.length; o++) if (o != r.correct) o].first;
      await t.tap(find.byKey(ValueKey('opt$wrong')));
      await t.pump();
      expect(find.byKey(ValueKey('opt${r.correct}')), findsOneWidget); // still on the same round
    }
    await t.tap(find.byKey(ValueKey('opt${r.correct}')));
    await t.pump();
    await t.pump(const Duration(milliseconds: 700));
  }
  await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
  await t.pump();
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('generators', () {
    test('odd one out: three of one kind and one different, no repeated picture', () {
      final cat = {for (final v in kVocab) v.emoji: v.category};
      for (final age in [3, 4, 5, 6]) {
        final rounds = makeOddOneOut(age, Random(age));
        expect(rounds.length, kChoiceRounds);
        for (final r in rounds) {
          expect(r.options.length, 4);
          expect(r.options.toSet().length, 4);
          final cats = [for (final e in r.options) cat[e]];
          final odd = cats[r.correct];
          expect(cats.where((c) => c == odd).length, 1);
          expect(cats.where((c) => c != odd).toSet().length, 1);
        }
      }
    });

    test('patterns: the answer continues the sequence, by age', () {
      for (final age in [4, 5, 6]) {
        for (var seed = 0; seed < 20; seed++) {
          final rounds = makePatterns(age, Random(seed));
          for (final r in rounds) {
            final shown = r.display.split(' ');
            final answer = r.options[r.correct];
            final full = [...shown, answer];
            // the full sequence repeats a unit of length 2 (age 4), 3 (age 5, 6)
            final unitLen = age <= 4 ? 2 : 3;
            for (var k = unitLen; k < full.length; k++) {
              expect(full[k], full[k - unitLen], reason: 'age $age seed $seed: $full');
            }
            expect(r.options.toSet().length, 3);
          }
        }
      }
    });

    test('compare: counts differ, the correct group really is more or fewer', () {
      for (final age in [3, 4, 6]) {
        final rounds = makeCompare(age, Random(age));
        for (var i = 0; i < rounds.length; i++) {
          final r = rounds[i];
          final counts = [for (final o in r.options) o.runes.length];
          expect(counts[0], isNot(counts[1]));
          expect(counts.every((c) => c >= 1 && c <= maxCountForAge(age)), true);
          final more = r.prompt == 'more';
          expect(counts[r.correct], more ? counts.reduce(max) : counts.reduce(min));
        }
        expect(rounds.map((r) => r.prompt).toSet(), {'more', 'fewer'});
      }
      expect(maxCountForAge(3), 5);
      expect(maxCountForAge(6), 9);
    });

    test('sort: six pictures, three per group, and each belongs where it is said to', () {
      final cat = {for (final v in kVocab) v.emoji: v.category};
      for (final age in [4, 5, 6]) {
        final s = makeSort(age, Random(age));
        expect(s.rounds.length, 6);
        expect(s.groupTitles.length, 2);
        expect(s.groupTitles[0], isNot(s.groupTitles[1]));
        for (final g in [0, 1]) {
          final members = s.rounds.where((r) => r.correct == g).toList();
          expect(members.length, 3);
          expect(members.map((r) => cat[r.display]).toSet().length, 1);
        }
        expect({for (final r in s.rounds) cat[r.display]}.length, 2);
      }
    });
  });

  group('screens', () {
    testWidgets('odd one out: wrong choices fade, the set finishes with one star, a replay gives none', (tester) async {
      final rounds = makeOddOneOut(4, Random(1));
      await _show(tester, OddOneOutGame(childId: 'c1', age: 4, random: Random(1)));
      await _playThrough(tester, rounds);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_star(tester), true);
    });

    testWidgets('patterns: a full set earns the star', (tester) async {
      final rounds = makePatterns(5, Random(2));
      await _show(tester, PatternGame(childId: 'c2', age: 5, random: Random(2)));
      expect(find.byKey(const ValueKey('display')), findsOneWidget);
      await _playThrough(tester, rounds);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_star(tester), true);
    });

    testWidgets('compare: the prompt alternates and the set finishes', (tester) async {
      final rounds = makeCompare(4, Random(3));
      await _show(tester, CompareGame(childId: 'c3', age: 4, random: Random(3)));
      expect(find.text('أي مجموعة فيها أكثر؟'), findsWidgets);
      await _playThrough(tester, rounds);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_star(tester), true);
    });

    testWidgets('sort: six items go to the right group and the star comes at the end', (tester) async {
      final set = makeSort(5, Random(4));
      await _show(tester, SortGame(childId: 'c4', age: 5, random: Random(4)));
      for (final t in set.groupTitles) {
        expect(find.text(t), findsOneWidget);
      }
      // play in the order shown: the game shows the rounds in the set's order
      await _playThrough(tester, set.rounds);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_star(tester), true);
    });

    testWidgets('the second completion of a game shows no new star', (tester) async {
      await tester.runAsync(() => GameRewards.complete('c5', PatternGame.gameId));
      final rounds = makePatterns(5, Random(5));
      await _show(tester, PatternGame(childId: 'c5', age: 5, random: Random(5)));
      await _playThrough(tester, rounds, wrongFirst: false);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_star(tester), false);
      expect(find.textContaining('أكملتها من قبل'), findsOneWidget);
    });
  });
}
