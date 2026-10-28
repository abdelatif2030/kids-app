import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/display_prefs.dart';
import 'package:kids_app/journey/content.dart';
import 'package:kids_app/journey/home_tasks.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/home_tasks_screen.dart';
import 'package:kids_app/journey/ui/kit.dart' show RCard;
import 'package:kids_app/journey/ui/lesson_flow.dart';
import 'package:kids_app/journey/ui/quiz_view.dart';
import 'package:kids_app/main.dart' show Video;
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);
const _baby = ChildProfile(id: 'b1', nickname: 'نور', age: 1);

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _settle(WidgetTester tester) async {
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
  await tester.pump(const Duration(milliseconds: 400));
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    await store.addProfile(_kid);
    JourneyStore.instance = store;
  });

  group('home tasks', () {
    test('a suggestion waits for the parent, is not duplicated, and can be confirmed', () async {
      final a = await HomeTasks.suggest('k1', 'numbers');
      final b = await HomeTasks.suggest('k1', 'numbers');
      expect(a.done, isFalse);
      expect(b.text, a.text);
      expect((await HomeTasks.all()).length, 1);
      await HomeTasks.confirm(a);
      final all = await HomeTasks.all();
      expect(all.single.done, isTrue);
      // The next suggestion for the same topic is a different task.
      final c = await HomeTasks.suggest('k1', 'numbers', now: DateTime.now());
      expect(c.text, isNot(a.text));
    });

    test('unknown topics fall back to a general task, and every land has tasks', () async {
      final t = await HomeTasks.suggest('k1', 'something_else');
      expect(t.text, isNotEmpty);
      for (final land in kLands) {
        expect(kHomeTasks[land.id], isNotEmpty, reason: land.id);
      }
    });

    testWidgets('the parent screen lists waiting tasks and marks them done', (tester) async {
      await tester.runAsync(() => HomeTasks.suggest('k1', 'colors'));
      await tester.pumpWidget(_app(const ParentHomeTasksScreen()));
      await _settle(tester);
      expect(find.text('بانتظار التأكيد (1)'), findsOneWidget);
      await tester.tap(find.text('تم'));
      await _settle(tester);
      expect(find.text('تمت (1)'), findsOneWidget);
      expect(find.text('بانتظار التأكيد (0)'), findsOneWidget);
    });
  });

  group('explore with parents', () {
    testWidgets('shows ideas for the age and records "we did it"', (tester) async {
      await tester.pumpWidget(_app(const ExploreScreen(child: _baby)));
      await _settle(tester);
      expect(find.text('أين الأنف؟'), findsOneWidget); // age 1-2 only
      expect(find.text('نصنّف الألوان'), findsNothing); // age 2-3 only
      await tester.tap(find.text('جرّبناه').first);
      await _settle(tester);
      expect(find.byIcon(Icons.check_circle_rounded), findsOneWidget);
      final saved = await tester.runAsync(HomeTasks.all);
      expect(saved!.single.done, isTrue);
      expect(saved.single.topic, 'explore');
    });
  });

  group('math help after a mistake', () {
    Question sum() => const Question(
          prompt: 'ما ناتج الجمع؟',
          bigText: '2 + 3',
          options: [Option.text('5'), Option.text('4'), Option.text('6')],
          correct: 0,
          hint: 'عُدّ للأمام.',
          skill: 'addition',
          math: MathHelp(2, 3, '+'),
        );

    testWidgets('a wrong answer shows the sum as a picture; a right one does not', (tester) async {
      await tester.pumpWidget(_app(Scaffold(body: QuizView(questions: [sum()], onFinished: (_) {}))));
      await tester.pump();
      expect(find.byType(MathPicture), findsNothing);
      await tester.tap(find.text('4'));
      await tester.pump();
      expect(find.byType(MathPicture), findsOneWidget);
      expect(find.textContaining('ضع 2 مع 3'), findsOneWidget);
      await tester.tap(find.text('5'));
      await tester.pump();
      await tester.pump(const Duration(seconds: 2));
    });

    test('generated number questions carry the numbers for the picture', () {
      final c = buildContent(const Activity('numbers', 4, ActivityKind.quiz), age: 8) as QuizContent;
      expect(c.questions.where((q) => q.math != null), isNotEmpty);
      for (final q in c.questions.where((q) => q.math != null)) {
        final m = q.math!;
        final answer = switch (m.op) { '+' => m.a + m.b, '-' => m.a - m.b, _ => m.a * m.b };
        expect(q.options[q.correct].text, '$answer');
      }
    });
  });

  group('feelings school', () {
    test('has five levels of five valid questions', () {
      for (var level = 1; level <= kLevelsPerLand; level++) {
        final c = buildContent(Activity('feelings', level, ActivityKind.quiz), age: 6) as QuizContent;
        expect(c.questions.length, 5);
        for (final q in c.questions) {
          expect(q.skill, 'feelings');
          expect(q.options.length, greaterThanOrEqualTo(3));
          expect(q.correct, inInclusiveRange(0, q.options.length - 1));
          expect(q.hint, isNotEmpty);
        }
      }
    });

    test('the right answer is never the violent or hiding option', () {
      const bad = ['أضرب', 'أركل', 'أخفي', 'أصرخ', 'أرمي', 'أذهب معه', 'أحفظ السر'];
      for (var i = 0; i < 30; i++) {
        for (var level = 1; level <= 5; level++) {
          final c = buildContent(Activity('feelings', level, ActivityKind.quiz), age: 6) as QuizContent;
          for (final q in c.questions) {
            final right = q.options[q.correct].text!;
            expect(bad.any(right.startsWith), isFalse, reason: right);
          }
        }
      }
    });
  });

  group('video lesson flow', () {
    const video = Video(
      youtubeId: 'abc12345678',
      title: 'تجربة',
      category: 'Learning',
      minAge: 3,
      maxAge: 7,
      language: 'ar',
      subject: 'math',
    );

    testWidgets('try three questions, then a home task is suggested', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(_app(const LessonFlowScreen(video: video, child: _kid)));
      await tester.pump();
      expect(find.text('السؤال 1 من 3'), findsOneWidget);
      // Wrong taps only fade an option, so tapping every option in turn always finishes a question.
      for (var q = 0; q < 3; q++) {
        final texts = [
          for (final w in tester.widgetList<Text>(find.descendant(of: find.byType(RCard), matching: find.byType(Text))))
            w.data!,
        ];
        for (final t in texts) {
          final f = find.text(t);
          if (f.evaluate().isEmpty) continue;
          await tester.tap(f.first, warnIfMissed: false);
          await tester.pump();
        }
        await tester.pump(const Duration(milliseconds: 1300));
      }
      await _settle(tester);
      expect(find.text('🏠 طبّق مع ماما وبابا'), findsOneWidget);
      expect(find.textContaining('من 3 من أول محاولة'), findsOneWidget);
      final saved = await tester.runAsync(HomeTasks.all);
      expect(saved!.single.topic, 'numbers');
    });

    testWidgets('a subject with no quiz goes straight to the home task', (tester) async {
      const v = Video(
        youtubeId: 'xyz12345678',
        title: 'رسم',
        category: 'Learning',
        minAge: 3,
        maxAge: 9,
        language: 'en',
        subject: 'drawing',
      );
      await tester.pumpWidget(_app(const LessonFlowScreen(video: v, child: _kid)));
      await _settle(tester);
      expect(find.text('🏠 طبّق مع ماما وبابا'), findsOneWidget);
      expect(find.textContaining('ارسم'), findsWidgets);
      final saved = await tester.runAsync(HomeTasks.all);
      expect(saved!.single.done, isFalse);
    });

    test('subjects map to a land or to a task topic', () {
      expect(landForSubject('math'), 'numbers');
      expect(landForSubject('quran'), isNull);
      expect(taskTopicFor('quran'), 'deen');
      expect(kHomeTasks.containsKey(taskTopicFor('science')), isTrue);
    });
  });

  group('display preferences', () {
    test('text size and reduced motion are saved and loaded', () async {
      await DisplayPrefs.instance.setTextScale(1.4);
      await DisplayPrefs.instance.setReduceMotion(true);
      DisplayPrefs.instance
        ..textScale = 1.0
        ..reduceMotion = false;
      await DisplayPrefs.instance.load();
      expect(DisplayPrefs.instance.textScale, 1.4);
      expect(DisplayPrefs.instance.reduceMotion, isTrue);
      await DisplayPrefs.instance.setTextScale(1.0);
      await DisplayPrefs.instance.setReduceMotion(false);
    });
  });
}
