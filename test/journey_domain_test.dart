import 'dart:math';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/content.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/progress.dart';
import 'package:kids_app/journey/recommender.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _today = DateTime(2026, 10, 28);
String _day(int daysAgo) => dayKeyOf(_today.subtract(Duration(days: daysAgo)));

Attempt _run(String activity, {int total = 5, int right = 5, int daysAgo = 0, String child = 'c1'}) =>
    Attempt(
      childId: child,
      activityId: activity,
      day: _day(daysAgo),
      total: total,
      firstTry: right,
      seconds: 60,
      stars: starsFor(total, right),
    );

ChildProfile _child({List<String> plan = const [], int daily = 3, int age = 5}) => ChildProfile(
      id: 'c1',
      nickname: 'سلمى',
      age: age,
      plan: plan,
      dailyCount: daily,
    );

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('stars', () {
    test('finishing always earns at least one star', () {
      expect(starsFor(5, 5), 3);
      expect(starsFor(5, 4), 2); // 80% -> 2 stars
      expect(starsFor(10, 9), 3);
      expect(starsFor(5, 3), 2);
      expect(starsFor(5, 2), 1);
      expect(starsFor(5, 0), 1);
      expect(starsFor(0, 0), 1);
    });
  });

  group('progress', () {
    test('levels unlock one after another, only by finishing', () {
      final p = computeProgress([_run('letters_1')], today: _today);
      final levels = p.lands['letters']!.levels;
      expect(levels.map((l) => l.unlocked), [true, true, false, false, false]);
      expect(levels.map((l) => l.completed), [true, false, false, false, false]);
      // A land nobody played only has level 1 open.
      final colors = p.lands['colors']!.levels;
      expect(colors.map((l) => l.unlocked), [true, false, false, false, false]);
    });

    test('best stars count, replays do not stack', () {
      final p = computeProgress(
        [_run('numbers_1', right: 2), _run('numbers_1', right: 5), _run('numbers_1', right: 3)],
        today: _today,
      );
      expect(p.lands['numbers']!.levels.first.bestStars, 3);
      expect(p.totalStars, 3);
      expect(p.completedTotal, 1);
      expect(p.xp, 3 * 10 + 5);
      expect(p.explorerLevel, 1);
    });

    test('xp comes only from stars and finished activities', () {
      final attempts = [for (var i = 1; i <= 5; i++) _run('letters_$i')]; // 15 stars, 5 done
      final p = computeProgress(attempts, today: _today);
      expect(p.totalStars, 15);
      expect(p.xp, 15 * 10 + 5 * 5);
      expect(p.explorerLevel, 1 + 175 ~/ 100);
      expect(p.accessories.map((a) => a.id), ['hat', 'glasses']); // 5 and 12 stars
    });

    test('badges follow their rules and can be tuned', () {
      final attempts = [
        _run('letters_1'),
        _run('letters_2'),
        _run('letters_3', right: 3),
        _run('numbers_1'),
      ];
      final ids = computeProgress(attempts, today: _today).badges.map((b) => b.id).toList();
      expect(ids, containsAll(['first_step', 'letters_star', 'perfect']));
      expect(ids, isNot(contains('number_whiz')));
      expect(ids, isNot(contains('explorer')));

      final tuned = computeProgress(attempts,
          today: _today, badgeThresholds: {'letters_star': 4, 'number_whiz': 1, 'first_step': 0});
      final t = tuned.badges.map((b) => b.id);
      expect(t, isNot(contains('letters_star')));
      expect(t, contains('number_whiz'));
      expect(t, isNot(contains('first_step'))); // switched off
    });

    test('today, week and the daily goal', () {
      final attempts = [
        _run('letters_1', daysAgo: 0),
        _run('numbers_1', daysAgo: 0),
        _run('colors_1', daysAgo: 0),
        _run('english_1', daysAgo: 2),
        _run('english_1', daysAgo: 2), // same activity twice that day counts once
        _run('brain_1', daysAgo: 9), // outside the week
      ];
      final p = computeProgress(attempts, today: _today, dailyCount: 3);
      expect(p.todayDone, {'letters_1', 'numbers_1', 'colors_1'});
      expect(p.weekCompleted, 4);
      expect(p.dailyGoalDays, {_day(0)});
      expect(p.badges.map((b) => b.id), contains('daily_hero'));
      expect(weeklyCounts(attempts, _today), [0, 0, 0, 0, 1, 0, 3]);
    });

    test('no streak anywhere: nothing counts consecutive days', () {
      // Missing yesterday changes nothing about what the child has earned.
      final a = computeProgress([_run('letters_1', daysAgo: 0), _run('letters_2', daysAgo: 5)], today: _today);
      final b = computeProgress([_run('letters_1', daysAgo: 0), _run('letters_2', daysAgo: 1)], today: _today);
      expect(a.totalStars, b.totalStars);
      expect(a.xp, b.xp);
      expect(a.badges.map((x) => x.id), b.badges.map((x) => x.id));
    });
  });

  group('content', () {
    test('every activity, age and difficulty gives valid questions', () {
      final r = Random(7);
      for (final activity in kAllActivities) {
        for (var age = 1; age <= 12; age++) {
          for (final bias in [-1, 0, 1]) {
            final content = buildContent(activity, age: age, bias: bias, random: r);
            switch (content) {
              case QuizContent(:final questions):
                expect(questions.length, activity.landId == 'stories' ? 3 : 5,
                    reason: '${activity.id} age $age');
                for (final q in questions) {
                  expect(q.options.length, inInclusiveRange(2, 4), reason: q.prompt);
                  expect(q.correct, inInclusiveRange(0, q.options.length - 1));
                  final labels = q.options.map((o) => '${o.text}|${o.emoji}|${o.shape?.kind}|${o.shape?.color}|${o.color}');
                  expect(labels.toSet().length, q.options.length,
                      reason: 'duplicate options in "${q.prompt}" (${activity.id})');
                  expect(q.hint, isNotEmpty);
                  expect(q.prompt, isNotEmpty);
                }
              case MemoryContent(:final emojis):
                expect(emojis.length, inInclusiveRange(2, 8));
                expect(emojis.toSet().length, emojis.length);
              case SequenceContent(:final rounds):
                expect(rounds.length, 3);
                for (final round in rounds) {
                  expect(round.steps.length, inInclusiveRange(3, 4));
                }
            }
          }
        }
      }
    });

    test('exactly one option is right: colors+shapes questions are unambiguous', () {
      final r = Random(3);
      for (var i = 0; i < 200; i++) {
        final c = buildContent(const Activity('colors', 3, ActivityKind.quiz), age: 5, random: r) as QuizContent;
        for (final q in c.questions) {
          final right = q.options[q.correct].shape!;
          final same = q.options.where((o) => o.shape == right).length;
          expect(same, 1);
        }
      }
    });

    test('counting questions match what is shown', () {
      final r = Random(5);
      final c = buildContent(const Activity('numbers', 1, ActivityKind.quiz), age: 3, random: r) as QuizContent;
      for (final q in c.questions) {
        expect(q.options[q.correct].text, '${q.repeat}');
        expect(q.repeat, inInclusiveRange(1, 5)); // youngest children count to 5
      }
    });

    test('arithmetic answers are correct', () {
      final r = Random(11);
      for (var level = 3; level <= 5; level++) {
        for (final age in [4, 6, 8, 10]) {
          final c = buildContent(Activity('numbers', level, ActivityKind.quiz), age: age, random: r) as QuizContent;
          for (final q in c.questions) {
            final parts = q.bigText!.split(' ');
            final a = int.parse(parts[0]);
            final b = int.parse(parts[2]);
            final expected = switch (parts[1]) { '+' => a + b, '-' => a - b, _ => a * b };
            expect(q.options[q.correct].text, '$expected', reason: q.bigText);
            expect(expected, greaterThanOrEqualTo(0));
          }
        }
      }
    });

    test('letter questions: the right picture really starts with the letter', () {
      final r = Random(2);
      final c = buildContent(const Activity('letters', 1, ActivityKind.quiz), age: 6, random: r) as QuizContent;
      for (final q in c.questions) {
        final letter = q.detail!;
        final word = q.options[q.correct].caption!;
        expect(word.startsWith(letter), isTrue, reason: '$word / $letter');
      }
    });

    test('the youngest children only get the easy letters', () {
      final r = Random(4);
      final easy = {'أ', 'ب', 'ت', 'ج', 'ح', 'د', 'س', 'ش', 'ف', 'ق', 'م', 'ن'};
      for (var i = 0; i < 30; i++) {
        final c = buildContent(const Activity('letters', 2, ActivityKind.quiz), age: 3, random: r) as QuizContent;
        expect(c.questions.every((q) => easy.contains(q.detail)), isTrue);
      }
    });

    test('stories carry their passage and one question each level uses one story', () {
      final c = buildContent(const Activity('stories', 2, ActivityKind.quiz), age: 5) as QuizContent;
      expect(c.questions.every((q) => q.passage != null && q.passage!.contains('ميمي')), isTrue);
    });

    test('bias makes memory harder or easier but stays in range', () {
      final base = (buildContent(const Activity('brain', 3, ActivityKind.memory), age: 5) as MemoryContent).emojis.length;
      final hard = (buildContent(const Activity('brain', 3, ActivityKind.memory), age: 5, bias: 1) as MemoryContent).emojis.length;
      final easy = (buildContent(const Activity('brain', 3, ActivityKind.memory), age: 5, bias: -1) as MemoryContent).emojis.length;
      expect([easy, base, hard], [base - 1, base, base + 1]);
    });

    test('custom questions: published, right age and level only', () {
      const q = CustomQuestion(
        id: 'q1',
        landId: 'letters',
        prompt: 'سؤال خاص',
        options: ['أ', 'ب', 'ت'],
        correct: 1,
        minAge: 4,
        maxAge: 6,
        difficulty: 2,
      );
      bool hasCustom(Activity a, int age, List<CustomQuestion> list) {
        final c = buildContent(a, age: age, random: Random(1), custom: list) as QuizContent;
        return c.questions.any((x) => x.prompt == 'سؤال خاص');
      }

      const lvl2 = Activity('letters', 2, ActivityKind.quiz);
      expect(hasCustom(lvl2, 5, [q]), isTrue);
      expect(hasCustom(lvl2, 7, [q]), isFalse); // too old
      expect(hasCustom(const Activity('letters', 3, ActivityKind.quiz), 5, [q]), isFalse); // other level
      expect(hasCustom(lvl2, 5, [q.copyWith(published: false)]), isFalse); // draft
      expect(hasCustom(lvl2, 5, [q.copyWith(options: ['واحد'])]), isFalse); // invalid
      final c = buildContent(lvl2, age: 5, random: Random(1), custom: [q]) as QuizContent;
      expect(c.questions.length, 5);
    });

    test('the first skill check has one question per land', () {
      for (final age in [3, 5, 8]) {
        final qs = assessmentQuestions(age, random: Random(1));
        expect(qs.map((e) => e.$1).toSet(), {for (final l in kLands) l.id});
        for (final e in qs) {
          expect(e.$2.correct, inInclusiveRange(0, e.$2.options.length - 1));
        }
      }
    });
  });

  group('today\'s plan', () {
    test('a new child gets three different lands, with a reason each', () {
      final plan = planToday(child: _child(), attempts: const [], today: _today);
      expect(plan.length, 3);
      expect(plan.map((p) => p.activity.landId).toSet().length, 3);
      expect(plan.every((p) => p.activity.level == 1 && p.reason.isNotEmpty), isTrue);
      expect(plan.every((p) => p.minutes == 4 && !p.doneToday), isTrue); // age 5
    });

    test('duration follows the age', () {
      expect(planToday(child: _child(age: 3), attempts: const [], today: _today).first.minutes, 3);
      expect(planToday(child: _child(age: 8), attempts: const [], today: _today).first.minutes, 5);
    });

    test('the parent\'s order and daily count are respected', () {
      final plan = planToday(
        child: _child(plan: ['english', 'letters', 'stories', 'numbers'], daily: 2),
        attempts: const [],
        today: _today,
      );
      expect(plan.map((p) => p.activity.landId), ['english', 'letters']);
      // Lands removed from the plan are never suggested.
      final only = planToday(child: _child(plan: ['colors'], daily: 5), attempts: const [], today: _today);
      expect(only.map((p) => p.activity.landId), ['colors']);
    });

    test('a balanced mix: lands done most this week wait', () {
      final attempts = [
        _run('letters_1', daysAgo: 1),
        _run('letters_2', daysAgo: 2),
        _run('numbers_1', daysAgo: 1),
      ];
      final lands = planToday(child: _child(), attempts: attempts, today: _today)
          .map((p) => p.activity.landId)
          .toList();
      expect(lands, ['colors', 'english', 'brain']); // untouched lands first
    });

    test('the next level on the map, or a challenge after two strong runs', () {
      final normal = planToday(
        child: _child(plan: ['letters']),
        attempts: [_run('letters_1', right: 4, daysAgo: 1)],
        today: _today,
      ).single;
      expect(normal.activity.id, 'letters_2');
      expect(normal.reason, 'الخطوة التالية على الخريطة');

      final strong = planToday(
        child: _child(plan: ['letters']),
        attempts: [_run('letters_1', daysAgo: 2), _run('letters_2', daysAgo: 1)],
        today: _today,
      ).single;
      expect(strong.activity.id, 'letters_3');
      expect(strong.reason, contains('تحدٍّ'));
    });

    test('a shaky run gets extra practice instead of moving on', () {
      final plan = planToday(
        child: _child(plan: ['numbers']),
        attempts: [_run('numbers_1', right: 1, daysAgo: 1)],
        today: _today,
      ).single;
      expect(plan.activity.id, 'numbers_1');
      expect(plan.reason, contains('تدريب إضافي'));
    });

    test('mastered lands are not repeated, unfinished stars are', () {
      final mastered = [for (var i = 1; i <= 5; i++) _run('colors_$i', daysAgo: 3)];
      final skip = planToday(child: _child(plan: ['colors', 'letters']), attempts: mastered, today: _today);
      expect(skip.map((p) => p.activity.landId), ['letters']);

      final partial = [for (var i = 1; i <= 5; i++) _run('colors_$i', right: i == 2 ? 3 : 5, daysAgo: 3)];
      final again = planToday(child: _child(plan: ['colors']), attempts: partial, today: _today).single;
      expect(again.activity.id, 'colors_2');
      expect(again.reason, contains('نجوم'));
    });

    test('the plan stays the same all day and ticks activities off', () {
      final before = planToday(child: _child(), attempts: [_run('letters_1', daysAgo: 1)], today: _today);
      final first = before.first.activity;
      final after = planToday(
        child: _child(),
        attempts: [_run('letters_1', daysAgo: 1), _run(first.id, daysAgo: 0)],
        today: _today,
      );
      expect(after.map((p) => p.activity.id), before.map((p) => p.activity.id));
      expect(after.first.doneToday, isTrue);
      expect(after.skip(1).every((p) => !p.doneToday), isTrue);
    });

    test('draft lands and lands outside the age range are skipped', () {
      final plan = planToday(
        child: _child(age: 3),
        attempts: const [],
        today: _today,
        hiddenLands: {'letters'},
        landAges: {'english': [6, 9]},
      );
      final lands = plan.map((p) => p.activity.landId);
      expect(lands, isNot(contains('letters')));
      expect(lands, isNot(contains('english')));
    });

    test('assessment results decide the order', () {
      final order = planFromAssessment(
        {'letters': 1, 'numbers': 0, 'colors': 1, 'english': 0, 'brain': 1, 'stories': 1},
        ['arabic'],
        ['brain'],
      );
      expect(order.first, 'numbers'); // missed lands before goal lands
      expect(order.take(2).toSet(), {'numbers', 'english'});
      expect(order.toSet(), {for (final l in kLands) l.id}); // all six, no repeats
      expect(order.length, kLands.length);
      // Goal lands come before unrelated ones once nothing was missed.
      final allRight = planFromAssessment({for (final l in kLands) l.id: 1.0}, ['english'], []);
      expect(allRight.first, 'english');
    });
  });

  group('store', () {
    test('profiles and attempts survive a restart; reset forgets everything', () async {
      var store = JourneyStore(LocalJourneyRepository());
      await store.load();
      expect(store.profiles, isEmpty);

      final child = await store.addProfile(ChildProfile(
        id: store.newId(),
        nickname: 'سلمى',
        age: 5,
        interests: const ['colors'],
        goals: const ['arabic'],
        plan: const ['letters', 'stories'],
        assessment: const {'letters': 1.0},
        accessory: 'hat',
      ));
      await store.recordAttempt(_run('letters_1', child: child.id, daysAgo: 0));
      expect(store.active!.id, child.id);

      store = JourneyStore(LocalJourneyRepository()); // a fresh start of the app
      await store.load();
      expect(store.profiles.single.nickname, 'سلمى');
      expect(store.profiles.single.plan, ['letters', 'stories']);
      expect(store.profiles.single.accessory, 'hat');
      expect(store.profiles.single.assessment, {'letters': 1.0});
      expect(store.activeId, child.id);
      expect(store.attemptsOf(child.id).single.activityId, 'letters_1');
      expect(store.progressOf(child.id, today: _today).totalStars, 3);

      await store.deleteProfile(child.id);
      expect(store.attemptsOf(child.id), isEmpty);
      expect(store.active, isNull);

      await store.addProfile(_child());
      await store.resetAll();
      store = JourneyStore(LocalJourneyRepository());
      await store.load();
      expect(store.profiles, isEmpty);
    });

    test('settings and custom questions persist', () async {
      var store = JourneyStore(LocalJourneyRepository());
      await store.load();
      await store.saveSettings(const JourneySettings(
        draftLands: {'english'},
        badgeThresholds: {'perfect': 2},
        landAges: {'brain': [4, 8]},
      ));
      await store.saveCustom(const [
        CustomQuestion(id: 'a', landId: 'letters', prompt: 'ما هذا؟', options: ['أ', 'ب'], correct: 0),
      ]);
      store = JourneyStore(LocalJourneyRepository());
      await store.load();
      expect(store.settings.draftLands, {'english'});
      expect(store.settings.badgeThresholds, {'perfect': 2});
      expect(store.settings.landAges, {'brain': [4, 8]});
      expect(store.custom.single.prompt, 'ما هذا؟');
      expect(store.publishedLands.map((l) => l.id), isNot(contains('english')));
    });
  });
}
