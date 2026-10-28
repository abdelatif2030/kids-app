import 'dart:math';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/literacy/adaptive.dart';
import 'package:kids_app/literacy/adaptive_session.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _today = DateTime(2026, 11, 10);
const _t = '2026-11-10';
final _unlocked = kArabicLetters.take(8).toList();
String _l(int i) => kArabicLetters[i].letter;

void main() {
  test('first day: the first letter is offered as new', () {
    final p = planLetters(states: {}, unlocked: _unlocked, today: _today);
    expect(p.steps.single.action, AdaptiveAction.learnNew);
    expect(p.steps.single.letter, _l(0));
    expect(p.newLettersPaused, false);
  });

  test('a due letter is reviewed before a new one, with a reason', () {
    final p = planLetters(states: {_l(0): const LetterState(1, '2026-11-09', 1)}, unlocked: _unlocked, today: _today);
    expect(p.steps.first.action, AdaptiveAction.review);
    expect(p.steps.first.reason, isNotEmpty);
    expect(p.of(AdaptiveAction.learnNew).single.letter, _l(1));
  });

  test('two misses in a row move to the easy step', () {
    final p = planLetters(states: {_l(0): const LetterState(0, _t, 2, 2, 1)}, unlocked: _unlocked, today: _today);
    expect(p.steps.first.action, AdaptiveAction.simplify);
    final qs = questionsForPlan(p, random: Random(1));
    expect(qs.length, 3);
    expect(qs.every((q) => q.options.length == 2), true);
  });

  test('a struggling child gets no new letter, and the reason says so', () {
    final states = {
      for (var i = 0; i < 3; i++) _l(i): const LetterState(0, '2026-11-20', 1, 1, 0),
    };
    final p = planLetters(states: states, unlocked: _unlocked, today: _today);
    expect(p.newLettersPaused, true);
    expect(p.pauseReason, isNotNull);
    expect(p.of(AdaptiveAction.learnNew), isEmpty);
  });

  test('too many reviews waiting also hold new letters back, and a session stays short', () {
    final states = {
      for (var i = 0; i < 6; i++) _l(i): LetterState(1, '2026-11-0${i + 1}', 1),
    };
    final p = planLetters(states: states, unlocked: _unlocked, today: _today);
    expect(p.newLettersPaused, true);
    expect(p.steps.length, lessThanOrEqualTo(kAdaptiveMaxSteps));
    expect(p.of(AdaptiveAction.review).length, kAdaptiveMaxReviews);
    expect(p.steps.first.letter, _l(0)); // the most overdue first
  });

  test('a well known letter gets a challenge, not more repeating', () {
    final p = planLetters(
      states: {_l(0): const LetterState(5, '2026-11-24', 6)},
      unlocked: [kArabicLetters.first],
      today: _today,
    );
    expect(p.steps.single.action, AdaptiveAction.challenge);
    expect(questionsForPlan(p, random: Random(2)).length, 2);
  });

  test('recording sessions tracks the miss streak and lapses', () async {
    SharedPreferences.setMockInitialValues({});
    final n = DateTime(2026, 11, 10);
    await LiteracyStore.record('c', 'ب', true, now: n);
    var s = await LiteracyStore.record('c', 'ب', false, now: n);
    expect((s.box, s.wrongRun, s.lapses), (0, 1, 1));
    s = await LiteracyStore.record('c', 'ب', false, now: n);
    expect((s.wrongRun, s.lapses), (2, 1)); // already at box 0: not a new lapse
    s = await LiteracyStore.record('c', 'ب', true, now: n);
    expect(s.wrongRun, 0);
    // old saved data without the new fields still loads
    expect(LetterState.fromJson({'b': 2, 'd': _t, 's': 3}).wrongRun, 0);
  });
}
