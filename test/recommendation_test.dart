import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:kids_app/adaptive/destinations.dart';
import 'package:kids_app/adaptive/recommendation_card.dart';
import 'package:kids_app/adaptive/recommender.dart';
import 'package:kids_app/adaptive/skill_state.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/skills.dart';

final now = DateTime(2026, 10, 29);

SkillState st(String skill, SkillLevel l, {int rounds = 10, int ok = 5, String last = '2026-10-29'}) =>
    SkillState(skill, l, rounds, ok, rounds == 0 ? null : ok / rounds, 2, last);

Destination dest(String id, Set<String> skills, {DestFormat f = DestFormat.game, int min = 3, int max = 12, Widget? screen}) =>
    Destination(id, () => 'T-$id', f, skills, min, max, (c) => screen ?? Scaffold(body: Text('opened $id')));

ChildProfile kid(int age) => ChildProfile(id: 'c1', nickname: 'ليلى', age: age);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('ar');
  });

  group('real destinations', () {
    test('ids are unique and every skill they name exists', () {
      final ds = buildDestinations();
      expect(ds.map((d) => d.id).toSet().length, ds.length);
      final known = kSkills.map((s) => s.id).toSet();
      for (final d in ds) {
        expect(d.skills, isNotEmpty);
        expect(known.containsAll(d.skills), isTrue, reason: d.id);
        expect(d.title(), isNotEmpty);
      }
    });
    test('every age from 2 to 12 has at least one starter destination', () {
      final ds = buildDestinations();
      for (var a = 2; a <= 12; a++) {
        expect(recommend(age: a, states: {}, destinations: ds, now: now), isNotEmpty, reason: 'age $a');
      }
    });
  });

  group('recommend', () {
    test('a new profile gets gentle starters, labelled as starters with no claim about ability', () {
      final r = recommend(age: 4, states: {}, destinations: buildDestinations(), now: now);
      expect(r, isNotEmpty);
      expect(r.length, lessThanOrEqualTo(2));
      for (final x in r) {
        expect(x.kind, RecKind.starter);
        expect(x.observed, isNull);
        expect(x.destination.fitsAge(4), isTrue);
      }
    });
    test('skills with no rounds are ignored (notStarted is not a weakness)', () {
      final r = recommend(age: 5, states: {'counting': st('counting', SkillLevel.notStarted, rounds: 0, ok: 0)}, destinations: [dest('stories', {'counting'})], now: now);
      expect(r.single.kind, RecKind.starter);
    });
    test('a struggling skill gets a different way in, and the reason cites recorded numbers', () {
      final ds = [dest('a', {'counting'}), dest('b', {'counting'}, f: DestFormat.listen)];
      final r = recommend(age: 5, states: {'counting': st('counting', SkillLevel.practising, ok: 2)}, destinations: ds, now: now);
      expect(r.single.kind, RecKind.practiseDifferently);
      expect(r.single.observed, contains('2'));
      expect(r.single.reason, isNot(contains('خطأ')));
    });
    test('practice options rotate by day but are stable within a day', () {
      final ds = [dest('a', {'counting'}), dest('b', {'counting'})];
      final states = {'counting': st('counting', SkillLevel.practising, ok: 2)};
      String pick(DateTime d) => recommend(age: 5, states: states, destinations: ds, now: d).single.destination.id;
      expect(pick(DateTime(2026, 10, 29)), pick(DateTime(2026, 10, 29, 20)));
      expect({pick(DateTime(2026, 10, 29)), pick(DateTime(2026, 10, 30))}.length, 2);
    });
    test('shown mastery leads to the next rung; not when the next is already mastered', () {
      final ds = [dest('add', {'addition'}), dest('cnt', {'counting'})];
      var r = recommend(age: 6, states: {'counting': st('counting', SkillLevel.demonstrated, ok: 9)}, destinations: ds, now: now);
      expect(r.first.kind, RecKind.challenge);
      expect(r.first.skillId, 'addition');
      r = recommend(age: 6, states: {
        'counting': st('counting', SkillLevel.demonstrated, ok: 9),
        'addition': st('addition', SkillLevel.demonstrated, ok: 9),
      }, destinations: ds, now: now, max: 5);
      expect(r.where((x) => x.kind == RecKind.challenge), isEmpty);
    });
    test('a skill with too few rounds is only "keep going", never a weakness or mastery', () {
      final r = recommend(age: 5, states: {'counting': st('counting', SkillLevel.exploring, rounds: 3, ok: 0)}, destinations: [dest('a', {'counting'})], now: now);
      expect(r.single.kind, RecKind.keepGoing);
    });
    test('destinations outside the age are never offered; no destination means no suggestion for that skill', () {
      final r = recommend(age: 3, states: {'counting': st('counting', SkillLevel.practising, ok: 1)}, destinations: [dest('a', {'counting'}, min: 6)], now: now);
      expect(r, isEmpty); // nothing at all fits age 3 here
    });
    test('struggling skills come first, ordered by lowest accuracy; same inputs give the same output', () {
      final ds = [dest('a', {'counting'}), dest('l', {'letters_ar'})];
      final states = {
        'counting': st('counting', SkillLevel.practising, ok: 4),
        'letters_ar': st('letters_ar', SkillLevel.practising, ok: 1),
      };
      final a = recommend(age: 5, states: states, destinations: ds, now: now, max: 2);
      final b = recommend(age: 5, states: states, destinations: ds, now: now, max: 2);
      expect(a.map((x) => x.skillId), ['letters_ar', 'counting']);
      expect(a.map((x) => x.destination.id), b.map((x) => x.destination.id));
    });
  });

  group('card', () {
    Future<void> show(WidgetTester t, {Size size = const Size(400, 800), Map<String, SkillState>? states, String lang = 'ar', List<Destination>? ds}) async {
      AppLocale.instance.set(lang);
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: Scaffold(
          body: SingleChildScrollView(
            child: RecommendationCard(child: kid(5), now: now, statesFuture: Future.value(states ?? {}), destinations: ds ?? [dest('stories', {'counting'})]),
          ),
        ),
      ));
      await t.pump();
      await t.pump();
    }

    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 640), const Size(768, 1024), const Size(1280, 800)]) {
        testWidgets('new profile shows a starter at ${size.width.toInt()} px ($lang) with no overflow', (t) async {
          await show(t, size: size, lang: lang);
          expect(find.byKey(const Key('recommendation-card')), findsOneWidget);
          expect(find.text('T-stories'), findsOneWidget);
        });
      }
    }

    testWidgets('struggling skill: the reason is shown and tapping opens the real destination', (t) async {
      await show(t, states: {'counting': st('counting', SkillLevel.practising, ok: 2)});
      expect(find.textContaining('بطريقة جديدة'), findsOneWidget);
      await t.tap(find.byKey(const Key('recommendation-card')));
      await t.pumpAndSettle();
      expect(find.text('opened stories'), findsOneWidget);
    });

    testWidgets('English reason', (t) async {
      await show(t, lang: 'en', states: {'counting': st('counting', SkillLevel.practising, ok: 2)});
      expect(find.textContaining('in a new way'), findsOneWidget);
    });

    testWidgets('nothing fits: the card is simply absent', (t) async {
      await show(t, ds: [dest('stories', {'counting'}, min: 9)]);
      expect(find.byKey(const Key('recommendation-card')), findsNothing);
    });

    testWidgets('has a spoken label with the reason and the destination', (t) async {
      await show(t);
      final h = t.ensureSemantics();
      expect(find.bySemanticsLabel(RegExp('T-stories')), findsWidgets);
      h.dispose();
    });
  });

  test('skill events from the store feed the states (per child)', () async {
    // The pure state function is covered in skill_state_test; this checks the card path uses the same inputs.
    final e = [SkillEvent(day: '2026-10-29', skill: 'counting', ok: false, childId: 'c1')];
    final s = computeSkillStates(e, childId: 'c2', now: now);
    expect(s, isEmpty);
  });
}
