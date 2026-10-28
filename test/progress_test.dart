import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/color_game.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/main.dart' show Video;
import 'package:kids_app/math_game.dart';
import 'package:kids_app/progress_report.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/watch_history.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _load(WidgetTester tester) async {
  for (var i = 0; i < 50; i++) {
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
    await tester.pump(const Duration(milliseconds: 100));
    if (find.byType(CircularProgressIndicator).evaluate().isEmpty) break;
  }
  await tester.pump(const Duration(milliseconds: 100));
}

String _key(DateTime d) => WatchHistory.dayKey(d);

Video _video(String id, String subject) => Video(
      youtubeId: id,
      title: id,
      category: 'Learning',
      minAge: 3,
      maxAge: 9,
      language: 'ar',
      subject: subject,
    );

List<SkillEvent> _events(String skill, String day, int ok, int bad, {String? detail}) => [
      for (var i = 0; i < ok; i++) SkillEvent(day: day, skill: skill, ok: true, detail: detail),
      for (var i = 0; i < bad; i++) SkillEvent(day: day, skill: skill, ok: false, detail: detail),
    ];

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
  });

  group('buildReport', () {
    final end = DateTime(2026, 10, 28);
    final today = _key(end);
    final videos = [_video('m1', 'math'), _video('m2', 'math'), _video('a1', 'arabic')];

    test('levels: mastered, needs practice, still learning', () {
      final r = buildReport(
        end: end,
        events: [
          ..._events('letters_ar', today, 9, 1), // 90%
          ..._events('colors', today, 3, 3, detail: 'أحمر'), // 50%
          ..._events('addition', today, 2, 0), // too few rounds
        ],
        watch: const [],
        usedSeconds: const {},
        videos: videos,
        targets: const {},
        age: 5,
      );
      expect(r.mastered.map((s) => s.skill.id), ['letters_ar']);
      expect(r.needsPractice.map((s) => s.skill.id), ['colors']);
      expect(r.needsPractice.single.missed, ['أحمر']);
      expect(r.others.map((s) => s.skill.id), ['addition']);
      expect(r.skills.firstWhere((s) => s.skill.id == 'addition').level, SkillLevel.learning);
    });

    test('time, lessons, game rounds and active days come from this week only', () {
      final lastWeek = _key(end.subtract(const Duration(days: 8)));
      final r = buildReport(
        end: end,
        events: [..._events('colors', today, 4, 1), ..._events('colors', lastWeek, 3, 0)],
        watch: [
          WatchEntry(day: today, videoId: 'm1', title: 'm1', seconds: 120, completed: true),
          WatchEntry(day: today, videoId: 'm1', title: 'm1', seconds: 60, completed: true),
          WatchEntry(day: today, videoId: 'm2', title: 'm2', seconds: 30, completed: false),
          WatchEntry(day: lastWeek, videoId: 'a1', title: 'a1', seconds: 99, completed: true),
        ],
        usedSeconds: {today: 600, _key(end.subtract(const Duration(days: 2))): 300, lastWeek: 900},
        videos: videos,
        targets: const {},
        age: 5,
      );
      expect(r.secondsInApp, 900);
      expect(r.videoSeconds, 210);
      expect(r.videosFinished, 1); // m1 twice still counts as one lesson
      expect(r.lessonsPerSubject, {'math': 1});
      expect(r.gameRounds, 5);
      expect(r.activeDays, 2);
      expect(r.secondsPerDay.length, 7);
      expect(r.secondsPerDay.last, 600);
      // The skill window (3 weeks) still counts last week's rounds.
      expect(r.skills.single.attempts, 8);
    });

    test('rounds older than three weeks no longer count toward a skill', () {
      final old = _key(end.subtract(const Duration(days: 25)));
      final r = buildReport(
        end: end,
        events: _events('colors', old, 0, 10),
        watch: const [],
        usedSeconds: const {},
        videos: videos,
        targets: const {},
        age: 5,
      );
      expect(r.skills, isEmpty);
    });

    test('recommendations: practice, goal gap, next step', () {
      final r = buildReport(
        end: end,
        events: [
          ..._events('colors', today, 2, 4, detail: 'أحمر'),
          ..._events('counting', today, 5, 0),
        ],
        watch: [WatchEntry(day: today, videoId: 'm1', title: 'm1', seconds: 120, completed: true)],
        usedSeconds: {today: 600},
        videos: videos,
        targets: const {'math': 3},
        age: 5,
      );
      final texts = r.recommendations.map((e) => e.text).join('\n');
      expect(texts, contains('الألوان'));
      expect(texts, contains('أكثر ما أخطأ فيه: أحمر'));
      expect(texts, contains('لعبة الألوان'));
      expect(texts, contains('ينقص 2 من الدروس في «رياضيات»'));
      expect(texts, contains('أتقن العدّ'));
      expect(texts, contains('الجمع')); // the next skill after counting
      expect(r.recommendations.length, lessThanOrEqualTo(5));
    });

    test('no activity at all says so, without nagging', () {
      final r = buildReport(
        end: end,
        events: const [],
        watch: const [],
        usedSeconds: const {},
        videos: videos,
        targets: const {},
        age: 5,
      );
      expect(r.hasActivity, isFalse);
      expect(r.recommendations.map((e) => e.kind), [RecKind.info]);
    });

    test('a goal for a subject with no lessons for this age is not recommended', () {
      final r = buildReport(
        end: end,
        events: _events('colors', today, 5, 0),
        watch: const [],
        usedSeconds: {today: 60},
        videos: videos,
        targets: const {'quran': 3},
        age: 5,
      );
      expect(r.recommendations.where((e) => e.kind == RecKind.plan), isEmpty);
    });

    test('text report and durations', () {
      final r = buildReport(
        end: end,
        events: [..._events('letters_ar', today, 9, 1), ..._events('colors', today, 2, 4)],
        watch: const [],
        usedSeconds: {today: 3900},
        videos: videos,
        targets: const {},
        age: 5,
      );
      final text = reportAsText(r);
      expect(text, contains('الوقت في التعلم: 1 س 5 د'));
      expect(text, contains('أتقن: الحروف العربية'));
      expect(text, contains('يحتاج تدريباً: الألوان'));
      expect(formatDuration(0), '0 د');
      expect(formatDuration(20), 'أقل من دقيقة');
      expect(formatDuration(300), '5 د');
      expect(formatDuration(7500), '2 س 5 د');
    });
  });

  group('ProgressStore', () {
    test('records and reads back events, and totals time per day', () async {
      await ProgressStore.record('colors', true, detail: 'أحمر');
      await ProgressStore.record('addition', false);
      final events = await ProgressStore.load();
      expect(events.map((e) => (e.skill, e.ok, e.detail)),
          [('colors', true, 'أحمر'), ('addition', false, null)]);

      SharedPreferences.setMockInitialValues({'used_2026-10-27': 90, 'last_age': 7});
      expect(await ProgressStore.usedSecondsByDay(), {'2026-10-27': 90});
      expect(await ProgressStore.lastAge(), 7);
    });
  });

  group('games record skills', () {
    Future<void> playRounds(WidgetTester tester, int rounds) async {
      for (var r = 0; r < rounds; r++) {
        final options = find.descendant(
          of: find.byType(AnimatedOpacity),
          matching: find.byType(GestureDetector),
        );
        final n = options.evaluate().length;
        for (var i = 0; i < n; i++) {
          await tester.tap(options.at(i), warnIfMissed: false);
          await tester.pump();
        }
        await tester.pump(const Duration(seconds: 1));
      }
    }

    testWidgets('color game: one event per round', (tester) async {
      await tester.pumpWidget(_app(const ColorGame()));
      await playRounds(tester, 5);
      final events = await tester.runAsync(ProgressStore.load);
      expect(events!.length, 5);
      expect(events.every((e) => e.skill == 'colors' && e.detail != null), isTrue);
    });

    testWidgets('math game records the skill for the child age', (tester) async {
      await tester.pumpWidget(_app(const MathGame(age: 7)));
      await playRounds(tester, 5);
      final events = await tester.runAsync(ProgressStore.load);
      expect(events!.length, 5);
      expect(events.every((e) => e.skill == 'addition'), isTrue);
    });
  });

  group('dashboard screen', () {
    testWidgets('shows skills, time, recommendations and moves between weeks', (tester) async {
      tester.view.physicalSize = const Size(800, 3000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final now = DateTime.now();
      final day = _key(now);
      SharedPreferences.setMockInitialValues({
        'used_$day': 1500,
        'last_age': 5,
        'plan_target_math': 3,
        'skill_events': _json([
          ..._events('letters_ar', day, 9, 1),
          ..._events('colors', day, 2, 4, detail: 'أحمر'),
        ]),
        'watch_history':
            '[{"d":"$day","id":"erwj5cI2QPE","t":"x","s":60,"c":true}]',
      });

      await tester.pumpWidget(_app(const DashboardScreen()));
      await _load(tester);

      expect(find.text('تقرير الأسبوع'), findsOneWidget);
      expect(find.text('25 د'), findsOneWidget);
      expect(find.text('أتقنها'), findsOneWidget);
      expect(find.text('تحتاج إلى تدريب'), findsOneWidget);
      expect(find.text('الحروف العربية'), findsOneWidget);
      expect(find.textContaining('يخطئ في: أحمر'), findsOneWidget);
      expect(find.text('توصيات للأسبوع القادم'), findsOneWidget);
      expect(find.textContaining('ينقص 2 من الدروس في «رياضيات»'), findsOneWidget);
      expect(find.text('نسخ التقرير'), findsOneWidget);

      // The next-week button is disabled on the current week.
      final next = tester.widget<IconButton>(find.widgetWithIcon(IconButton, Icons.chevron_left_rounded));
      expect(next.onPressed, isNull);

      // Last week had no activity.
      await tester.tap(find.byTooltip('الأسبوع السابق'));
      await tester.pump();
      expect(find.text('لا توجد نشاطات في هذا الأسبوع'), findsOneWidget);
      // This week's rounds are after that week ended, so they are not counted there.
      expect(find.text('أتقنها'), findsNothing);
      expect(find.textContaining('تظهر مهاراته هنا'), findsOneWidget);
    });

    testWidgets('empty state is friendly', (tester) async {
      tester.view.physicalSize = const Size(800, 3000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(_app(const DashboardScreen()));
      await _load(tester);
      expect(find.text('لا توجد نشاطات في هذا الأسبوع'), findsWidgets);
      expect(find.textContaining('تظهر مهاراته هنا'), findsOneWidget);
    });
  });
}

String _json(List<SkillEvent> events) =>
    '[${events.map((e) => '{"d":"${e.day}","k":"${e.skill}","o":${e.ok ? 1 : 0}${e.detail == null ? '' : ',"x":"${e.detail}"'}}').join(',')}]';
