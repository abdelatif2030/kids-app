import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/activity_screen.dart';
import 'package:kids_app/journey/ui/land_map_screen.dart';
import 'package:kids_app/journey/ui/memory_view.dart';
import 'package:kids_app/journey/ui/quiz_view.dart';
import 'package:kids_app/journey/ui/sequence_view.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/session_manager.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Question _q(String prompt, List<String> options, int correct, {String skill = 'counting'}) => Question(
      prompt: prompt,
      options: [for (final o in options) Option.text(o)],
      correct: correct,
      hint: 'تلميح $prompt',
      skill: skill,
      detail: prompt,
    );

ChildProfile _child() => const ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5);

Future<JourneyStore> _store({List<Attempt> attempts = const []}) async {
  SharedPreferences.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  await store.addProfile(_child());
  for (final a in attempts) {
    await store.recordAttempt(a);
  }
  JourneyStore.instance = store;
  return store;
}

/// A tall screen, so the whole finish screen (stars, badges, buttons) is visible.
void _tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(800, 1400);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

Attempt _done(String activity, {int right = 5, int total = 5}) => Attempt(
      childId: 'kid1',
      activityId: activity,
      day: dayKeyOf(DateTime.now()),
      total: total,
      firstTry: right,
      seconds: 30,
      stars: starsFor(total, right),
    );

void main() {
  group('QuizView', () {
    testWidgets('a wrong answer fades, encourages, then hints; the right one moves on',
        (tester) async {
      List<ItemResult>? finished;
      await tester.pumpWidget(_app(Scaffold(
        body: QuizView(
          questions: [
            _q('السؤال الأول', ['أ', 'ب', 'ج'], 1),
            _q('السؤال الثاني', ['س', 'ص', 'ع'], 2),
          ],
          onFinished: (r) => finished = r,
        ),
      )));
      expect(find.text('السؤال 1 من 2'), findsOneWidget);
      expect(find.textContaining('تلميح السؤال'), findsNothing);

      await tester.tap(find.text('أ')); // wrong
      await tester.pump(const Duration(milliseconds: 300));
      expect(find.textContaining('حاول مرة أخرى'), findsOneWidget);
      expect(find.textContaining('تلميح السؤال'), findsNothing); // one miss: no hint yet
      // The wrong answer is faded and cannot be chosen again.
      expect(tester.widget<AnimatedOpacity>(find.ancestor(of: find.text('أ'), matching: find.byType(AnimatedOpacity)).first).opacity, 0.25);

      await tester.tap(find.text('ج')); // wrong again
      await tester.pump(const Duration(milliseconds: 300));
      expect(find.textContaining('💡 تلميح السؤال الأول'), findsOneWidget); // hint after two misses

      await tester.tap(find.text('ب')); // right
      await tester.pump();
      expect(find.textContaining('أحسنت'), findsOneWidget);
      await tester.pump(const Duration(milliseconds: 1200));
      expect(find.text('السؤال 2 من 2'), findsOneWidget);

      await tester.tap(find.text('ع')); // right at once
      await tester.pump(const Duration(milliseconds: 1200));
      expect(finished, isNotNull);
      expect(finished!.map((r) => r.ok), [false, true]); // first needed retries, second did not
      expect(finished!.map((r) => r.detail), ['السؤال الأول', 'السؤال الثاني']);
    });

    testWidgets('the hint button shows the hint on request', (tester) async {
      await tester.pumpWidget(_app(Scaffold(
        body: QuizView(questions: [_q('سؤال', ['أ', 'ب'], 0)], onFinished: (_) {}),
      )));
      await tester.tap(find.text('تلميح'));
      await tester.pump();
      expect(find.textContaining('💡 تلميح سؤال'), findsOneWidget);
      await tester.tap(find.text('أ'));
      await tester.pump(const Duration(seconds: 2));
    });

    testWidgets('a story keeps its text on screen with the question', (tester) async {
      await tester.pumpWidget(_app(Scaffold(
        body: QuizView(questions: [
          Question(
            prompt: 'ماذا وجد الأرنب؟',
            passage: 'الأرنب والجزرة\nوجد الأرنب جزرة كبيرة.',
            options: [Option.text('جزرة'), Option.text('كرة')],
            correct: 0,
            hint: 'اقرأ',
            skill: 'story',
          ),
        ], onFinished: (_) {}),
      )));
      expect(find.textContaining('وجد الأرنب جزرة كبيرة'), findsOneWidget);
      await tester.tap(find.text('جزرة'));
      await tester.pump(const Duration(seconds: 2));
    });

    testWidgets('options can be read by a screen reader', (tester) async {
      final handle = tester.ensureSemantics();
      await tester.pumpWidget(_app(Scaffold(
        body: QuizView(questions: [
          Question(
            prompt: 'اختر اللون الأحمر',
            options: const [Option.color(0xFFE53935), Option.color(0xFF1E88E5)],
            correct: 0,
            hint: 'x',
            skill: 'colors',
          ),
        ], onFinished: (_) {}),
      )));
      expect(find.bySemanticsLabel('اللون أحمر'), findsOneWidget);
      expect(find.bySemanticsLabel('اللون أزرق'), findsOneWidget);
      await tester.tap(find.bySemanticsLabel('اللون أحمر'));
      await tester.pump(const Duration(seconds: 2));
      handle.dispose();
    });

    testWidgets('reduced motion removes the animations but keeps everything working', (tester) async {
      tester.platformDispatcher.accessibilityFeaturesTestValue =
          const FakeAccessibilityFeatures(disableAnimations: true);
      addTearDown(tester.platformDispatcher.clearAccessibilityFeaturesTestValue);
      List<ItemResult>? finished;
      await tester.pumpWidget(_app(Scaffold(
        body: QuizView(questions: [_q('سؤال', ['أ', 'ب'], 1)], onFinished: (r) => finished = r),
      )));
      await tester.tap(find.text('ب'));
      await tester.pump();
      expect(tester.widget<AnimatedScale>(find.byType(AnimatedScale).last).duration, Duration.zero);
      await tester.pump(const Duration(milliseconds: 1200));
      expect(finished, isNotNull);
    });
  });

  group('MemoryView', () {
    testWidgets('finds all pairs; mismatches just turn back over', (tester) async {
      List<ItemResult>? finished;
      await tester.pumpWidget(_app(Scaffold(
        body: MemoryView(emojis: const ['🐶', '🐱'], onFinished: (r) => finished = r),
      )));
      expect(find.text('الأزواج: 0 من 2'), findsOneWidget);
      // Try pairs of cards until everything matches (4 cards, so at most a few tries).
      final cards = find.byType(InkWell);
      for (final pair in [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]) {
        if (finished != null) break;
        await tester.tap(cards.at(pair[0]), warnIfMissed: false);
        await tester.pump();
        await tester.tap(cards.at(pair[1]), warnIfMissed: false);
        await tester.pump(const Duration(milliseconds: 1000));
      }
      await tester.pump(const Duration(seconds: 1));
      expect(finished, isNotNull);
      expect(finished!.length, 2);
      expect(finished!.every((r) => r.skill == 'memory'), isTrue);
    });

    testWidgets('the peek hint can be used once', (tester) async {
      await tester.pumpWidget(_app(Scaffold(
        body: MemoryView(emojis: const ['🐶', '🐱'], onFinished: (_) {}),
      )));
      await tester.tap(find.textContaining('تلميح'));
      await tester.pump();
      expect(find.text('🐶'), findsNWidgets(2)); // everything face up
      await tester.pump(const Duration(seconds: 2));
      expect(find.textContaining('تلميح'), findsNothing); // used up
    });
  });

  group('SequenceView', () {
    testWidgets('tapping in the right order places the steps; wrong taps just give a hint',
        (tester) async {
      List<ItemResult>? finished;
      await tester.pumpWidget(_app(Scaffold(
        body: SequenceView(
          rounds: const [
            SequenceRound('قبل النوم', ['🪥 نغسل أسناننا', '📖 نسمع قصة', '😴 ننام']),
          ],
          onFinished: (r) => finished = r,
        ),
      )));
      await tester.tap(find.text('😴 ننام')); // wrong: not first
      await tester.pump();
      expect(find.textContaining('جرّب بطاقة أخرى'), findsOneWidget);
      await tester.tap(find.text('📖 نسمع قصة')); // wrong again -> hint highlights
      await tester.pump();

      await tester.tap(find.text('🪥 نغسل أسناننا'));
      await tester.pump();
      expect(find.textContaining('صحيح'), findsOneWidget);
      await tester.tap(find.text('📖 نسمع قصة'));
      await tester.pump();
      await tester.tap(find.text('😴 ننام'));
      await tester.pump();
      expect(find.textContaining('رتّبتها كلها'), findsOneWidget);
      await tester.pump(const Duration(seconds: 2));
      expect(finished!.single.ok, isFalse); // there were misses in this round
      expect(finished!.single.skill, 'sequence');
    });

    testWidgets('a clean round counts as first try', (tester) async {
      List<ItemResult>? finished;
      await tester.pumpWidget(_app(Scaffold(
        body: SequenceView(
          rounds: const [SequenceRound('أ', ['1', '2', '3'])],
          onFinished: (r) => finished = r,
        ),
      )));
      for (final s in ['1', '2', '3']) {
        await tester.tap(find.text(s).last);
        await tester.pump();
      }
      await tester.pump(const Duration(seconds: 2));
      expect(finished!.single.ok, isTrue);
    });
  });

  group('ActivityScreen', () {
    ActivityScreen screen({Activity? activity}) => ActivityScreen(
          activity: activity ?? const Activity('numbers', 1, ActivityKind.quiz),
          child: _child(),
          contentBuilder: () => QuizContent([
            _q('السؤال الأول', ['1', '2', '3'], 0),
            _q('السؤال الثاني', ['4', '5', '6'], 1),
          ]),
        );

    testWidgets('finishing records the run, the skills, stars, xp and a badge', (tester) async {
      _tall(tester);
      final store = await tester.runAsync(_store) as JourneyStore;
      await tester.pumpWidget(_app(screen()));
      await tester.tap(find.text('1'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.tap(find.text('5'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump(const Duration(seconds: 3));

      expect(find.textContaining('ممتاز يا سلمى'), findsOneWidget); // 3 stars
      expect(find.text('أجبت 2 من 2 من أول محاولة'), findsOneWidget);
      expect(find.text('+35 نقطة خبرة'), findsOneWidget); // 3 stars * 10 + 5 for finishing
      expect(find.textContaining('شارة جديدة: الخطوة الأولى'), findsOneWidget);
      expect(find.text('المستوى التالي'), findsOneWidget);

      final attempts = store.attemptsOf('kid1');
      expect(attempts.single.activityId, 'numbers_1');
      expect(attempts.single.stars, 3);
      final events = await tester.runAsync(ProgressStore.load);
      expect(events!.map((e) => (e.skill, e.ok, e.childId)), [('counting', true, 'kid1'), ('counting', true, 'kid1')]);
      expect(store.progressOf('kid1').lands['numbers']!.levels[1].unlocked, isTrue); // level 2 opened
    });

    testWidgets('a rough run still earns a star and kind words, and can be replayed', (tester) async {
      _tall(tester);
      await tester.runAsync(_store);
      await tester.pumpWidget(_app(screen()));
      for (final wrong in ['2', '3']) {
        await tester.tap(find.text(wrong));
        await tester.pump();
      }
      await tester.tap(find.text('1'));
      await tester.pump(const Duration(milliseconds: 1200));
      for (final wrong in ['4', '6']) {
        await tester.tap(find.text(wrong));
        await tester.pump();
      }
      await tester.tap(find.text('5'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump(const Duration(seconds: 3));

      expect(find.text('أجبت 0 من 2 من أول محاولة'), findsOneWidget);
      expect(find.textContaining('أحسنت يا سلمى'), findsOneWidget); // never "you failed"
      expect(find.text('جرّب مرة أخرى لتحصل على نجوم أكثر!'), findsOneWidget);

      await tester.tap(find.text('العب تاني'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
      await tester.pump(const Duration(seconds: 1));
      expect(find.text('السؤال 1 من 2'), findsOneWidget); // back at the start
    });

    testWidgets('when the session time is up, replaying goes to the rest screen', (tester) async {
      _tall(tester);
      await tester.runAsync(_store);
      addTearDown(() => SessionManager.instance.reason.value = null);
      await tester.pumpWidget(_app(Builder(
        builder: (context) => TextButton(
          onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => screen())),
          child: const Text('go'),
        ),
      )));
      await tester.tap(find.text('go'));
      await tester.pumpAndSettle();
      SessionManager.instance.reason.value = RestReason.limit;
      await tester.tap(find.text('1'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.tap(find.text('5'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump(const Duration(seconds: 3));
      expect(find.text('العب تاني'), findsOneWidget); // the finish screen is shown first

      await tester.tap(find.text('العب تاني'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(find.text('حان وقت الراحة'), findsOneWidget);
    });

    testWidgets('the last level has no "next level" button', (tester) async {
      _tall(tester);
      await tester.runAsync(_store);
      await tester.pumpWidget(_app(screen(activity: const Activity('numbers', 5, ActivityKind.quiz))));
      await tester.tap(find.text('1'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.tap(find.text('5'));
      await tester.pump(const Duration(milliseconds: 1200));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump(const Duration(seconds: 3));
      expect(find.text('المستوى التالي'), findsNothing);
    });
  });

  group('LandMapScreen', () {
    testWidgets('shows finished, open and locked levels and enforces the unlock rule',
        (tester) async {
      await tester.runAsync(() => _store(attempts: [_done('letters_1')]));
      await tester.pumpWidget(_app(LandMapScreen(land: landById('letters'), child: _child())));
      await tester.pump();
      expect(find.text('1 من 5 مستويات'), findsOneWidget);
      expect(find.text('3/15 ⭐'), findsOneWidget);

      // Level 3 is locked until level 2 is finished.
      await tester.tap(find.byIcon(Icons.lock_rounded).first);
      await tester.pump();
      expect(find.text('أنهِ المستوى السابق أولاً 🔒'), findsOneWidget);

      // Level 2 is open and starts the activity.
      await tester.tap(find.text('2').first);
      await tester.pumpAndSettle();
      expect(find.textContaining('من 5'), findsWidgets); // the quiz progress label
      expect(find.byType(QuizView), findsOneWidget);
    });

    testWidgets('a screen reader hears each level and its state', (tester) async {
      final handle = tester.ensureSemantics();
      await tester.runAsync(() => _store(attempts: [_done('letters_1')]));
      await tester.pumpWidget(_app(LandMapScreen(land: landById('letters'), child: _child())));
      await tester.pump();
      expect(find.bySemanticsLabel(RegExp('المستوى 1.*مكتمل بـ 3 نجوم')), findsOneWidget);
      expect(find.bySemanticsLabel(RegExp('المستوى 2.*متاح الآن')), findsOneWidget);
      expect(find.bySemanticsLabel(RegExp('المستوى 3.*مغلق')), findsOneWidget);
      handle.dispose();
    });
  });
}
