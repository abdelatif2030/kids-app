import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/color_game.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/games_screen.dart';
import 'package:kids_app/letters_game.dart';
import 'package:kids_app/main.dart';
import 'package:kids_app/math_game.dart';
import 'package:kids_app/notes_screen.dart';
import 'package:kids_app/plan_screen.dart';
import 'package:kids_app/session_manager.dart';
import 'package:kids_app/subjects_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

/// Lets real async work (asset bundle, shared preferences) finish, then rebuilds.
Future<void> _load(WidgetTester tester) async {
  for (var i = 0; i < 50; i++) {
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
    await tester.pump(const Duration(milliseconds: 100));
    if (find.byType(CircularProgressIndicator).evaluate().isEmpty) break;
  }
  await tester.pump(const Duration(milliseconds: 100));
}

/// Taps every choice in the round; only the right one advances, the wrong
/// ones just fade.
Future<void> _playRounds(WidgetTester tester, int rounds) async {
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

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    // A string cached by an earlier test would complete in that test's dead zone.
    (rootBundle as CachingAssetBundle).clear();
  });

  for (final entry in <String, Widget Function()>{
    'color': () => const ColorGame(),
    'letters': () => const LettersGame(),
    'math age 4': () => const MathGame(age: 4),
    'math age 7': () => const MathGame(age: 7),
    'math age 9': () => const MathGame(age: 9),
    'math age 11': () => const MathGame(age: 11),
  }.entries) {
    testWidgets('${entry.key}: star only after the last round, then play again',
        (tester) async {
      await tester.pumpWidget(_app(entry.value()));
      expect(find.byIcon(Icons.star_rounded), findsNothing);

      await _playRounds(tester, 4);
      expect(find.byIcon(Icons.star_rounded), findsNothing);

      await _playRounds(tester, 1);
      expect(find.byIcon(Icons.star_rounded), findsOneWidget);

      await tester.tap(find.text('العب تاني'));
      await tester.pump();
      expect(find.byIcon(Icons.star_rounded), findsNothing);
    });
  }

  testWidgets('letters game switches language', (tester) async {
    await tester.pumpWidget(_app(const LettersGame()));
    await tester.tap(find.text('Deutsch'));
    await tester.pump();
    await _playRounds(tester, 5);
    expect(find.byIcon(Icons.star_rounded), findsOneWidget);
  });

  testWidgets('drawing: finish is disabled until something is drawn', (tester) async {
    await tester.pumpWidget(_app(const DrawingScreen()));
    FilledButton finish() => tester.widget<FilledButton>(find.byType(FilledButton));
    expect(finish().onPressed, isNull);

    await tester.drag(find.byType(GestureDetector).first, const Offset(120, 60));
    await tester.pump();
    expect(finish().onPressed, isNotNull);

    await tester.tap(find.text('خلصت'));
    await tester.pump();
    expect(find.byIcon(Icons.star_rounded), findsOneWidget);
  });

  testWidgets('games list depends on age', (tester) async {
    Future<void> show(int age) async {
      await tester.pumpWidget(_app(GamesScreen(age: age)));
      await tester.pump();
    }

    await show(1);
    expect(find.text('افرقع البالونات'), findsOneWidget);
    expect(find.text('لعبة الألوان'), findsNothing);
    await show(2);
    expect(find.text('لعبة الألوان'), findsOneWidget);
    await show(3);
    expect(find.text('لعبة الألوان'), findsOneWidget);
    expect(find.text('حروف وكلمات'), findsOneWidget);
    expect(find.text('لعبة الذاكرة'), findsOneWidget);
    await show(4);
    expect(find.text('لعبة الألوان'), findsNothing);
    expect(find.text('رياضيات'), findsOneWidget);
    await show(10);
    expect(find.text('رياضيات'), findsOneWidget);
    expect(find.text('لعبة الذاكرة'), findsNothing);
  });

  testWidgets('subjects screen lists all subjects', (tester) async {
    await tester.pumpWidget(_app(const SubjectsScreen(age: 4)));
    await _load(tester);
    for (final label in ['عربي', 'إنجليزي', 'رياضيات', 'علوم', 'دين', 'قرآن', 'رسم']) {
      expect(find.text(label), findsOneWidget);
    }
  });

  testWidgets('video list: plan button only on the all-videos list', (tester) async {
    await tester.pumpWidget(_app(const VideoListScreen(age: 4)));
    await _load(tester);
    expect(find.text('خطة اليوم'), findsOneWidget);

    await tester.pumpWidget(_app(const VideoListScreen(age: 4, subject: 'math')));
    await _load(tester);
    expect(find.text('خطة اليوم'), findsNothing);
    expect(find.textContaining('الأرقام'), findsWidgets);

    await tester.pumpWidget(_app(const VideoListScreen(age: 4, subject: 'quran')));
    await _load(tester);
    expect(find.text('لا توجد دروس بعد لهذه المادة'), findsOneWidget);
  });

  testWidgets('notes: add and delete', (tester) async {
    await tester.pumpWidget(_app(const NotesScreen()));
    await tester.pumpAndSettle();
    expect(find.text('لا توجد ملاحظات بعد'), findsOneWidget);

    await tester.tap(find.text('ملاحظة جديدة'));
    await tester.pumpAndSettle();
    await tester.enterText(find.byType(TextField), 'يحتاج مراجعة حرف ع');
    await tester.tap(find.text('حفظ'));
    await tester.pumpAndSettle();
    expect(find.text('يحتاج مراجعة حرف ع'), findsOneWidget);
    expect((await ParentNotes.load()).length, 1);

    await tester.tap(find.byIcon(Icons.delete_outline));
    await tester.pumpAndSettle();
    expect(find.text('لا توجد ملاحظات بعد'), findsOneWidget);
    expect(await ParentNotes.load(), isEmpty);
  });

  testWidgets('plan: progress counts finished lessons of the week', (tester) async {
    final today = DateTime.now();
    final day =
        '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';
    SharedPreferences.setMockInitialValues({
      'plan_target_math': 2,
      'watch_history':
          '[{"d":"$day","id":"erwj5cI2QPE","t":"x","s":60,"c":true},'
              '{"d":"$day","id":"wULx1RXADdQ","t":"y","s":60,"c":false}]',
    });
    await tester.pumpWidget(_app(const PlanScreen()));
    await _load(tester);
    expect(find.text('أكمل 1 من 2 هذا الأسبوع'), findsOneWidget);
  });

  testWidgets('time up: finishing a set goes to the rest screen', (tester) async {
    addTearDown(() => SessionManager.instance.reason.value = null);
    await tester.pumpWidget(_app(Builder(
      builder: (context) => TextButton(
        onPressed: () => Navigator.push(
          context,
          MaterialPageRoute(builder: (_) => const MathGame(age: 4)),
        ),
        child: const Text('go'),
      ),
    )));
    await tester.tap(find.text('go'));
    await tester.pumpAndSettle();

    SessionManager.instance.reason.value = RestReason.limit;
    await _playRounds(tester, 5);
    // Time is up, but the set was allowed to finish and the star is shown first.
    expect(find.byIcon(Icons.star_rounded), findsOneWidget);

    await tester.tap(find.text('العب تاني'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
    await tester.pumpAndSettle();
    expect(find.text('حان وقت الراحة'), findsOneWidget);
  });
}
