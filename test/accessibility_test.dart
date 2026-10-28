import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/activity_screen.dart';
import 'package:kids_app/journey/ui/admin_screen.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/land_map_screen.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/journey/ui/privacy_screen.dart';
import 'package:kids_app/journey/ui/profile_forms.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى الصغيرة', age: 5);

Widget _app(Widget home, double textScale) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => MediaQuery(
        data: MediaQuery.of(context).copyWith(textScaler: TextScaler.linear(textScale)),
        child: Directionality(textDirection: TextDirection.rtl, child: child!),
      ),
      home: home,
    );

Future<void> _setup({bool child = true}) async {
  final day = dayKeyOf(DateTime.now());
  SharedPreferences.setMockInitialValues({'used_$day': 600});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  if (child) {
    await store.addProfile(_kid);
    for (final id in ['letters_1', 'letters_2', 'numbers_1', 'colors_1', 'brain_1']) {
      await store.recordAttempt(Attempt(
          childId: 'k1', activityId: id, day: day, total: 5, firstTry: 4, seconds: 30, stars: 2));
    }
  }
  JourneyStore.instance = store;
}

Future<void> _settle(WidgetTester tester) async {
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 250)));
  await tester.pump(const Duration(milliseconds: 400));
}

/// A long Arabic answer, to make sure wrapping works.
ActivityContent _longQuiz() => QuizContent([
      Question(
        prompt: 'ماذا فعلت سلمى بعد أن عادت من الحديقة في ذلك اليوم الممطر الجميل؟',
        passage: 'القصة\nخرجت سلمى إلى الحديقة فبدأ المطر ينزل. فتحت مظلتها الصفراء وقفزت بين البرك. عادت إلى البيت وشربت كوب حليب دافئ ثم نامت نوماً هادئاً.',
        options: [
          Option.text('شربت كوب حليب دافئ ثم نامت نوماً هادئاً في سريرها'),
          Option.text('ذهبت إلى المدرسة'),
          Option.text('لعبت بالكرة'),
        ],
        correct: 0,
        hint: 'اقرأ القصة مرة أخرى.',
        skill: 'story',
      ),
    ]);

void main() {
  // Every screen must lay out without overflow on a small phone and with large
  // text (a Flutter overflow is an exception, so pumping is the check).
  final screens = <String, Widget Function()>{
    'welcome': () => const StartScreen(),
    'onboarding': () => const OnboardingFlow(),
    'shell': () => const ChildShell(child: _kid),
    'land map': () => LandMapScreen(land: landById('letters'), child: _kid),
    'quiz with a long story': () => ActivityScreen(
          activity: const Activity('stories', 1, ActivityKind.quiz),
          child: _kid,
          contentBuilder: _longQuiz,
        ),
    'memory': () => const ActivityScreen(
          activity: Activity('brain', 5, ActivityKind.memory),
          child: _kid,
        ),
    'sequence': () => const ActivityScreen(
          activity: Activity('brain', 4, ActivityKind.sequence),
          child: _kid,
        ),
    'dashboard': () => const DashboardScreen(),
    'children': () => const ChildrenScreen(),
    'child edit': () => const ChildEditScreen(child: _kid),
    'admin': () => const AdminScreen(),
    'privacy': () => const PrivacyScreen(),
  };

  for (final size in [const Size(320, 640), const Size(412, 915), const Size(1024, 768)]) {
    for (final scale in [1.0, 1.6]) {
      for (final entry in screens.entries) {
        testWidgets('${entry.key} fits ${size.width.toInt()}x${size.height.toInt()} at text x$scale',
            (tester) async {
          tester.view.physicalSize = size;
          tester.view.devicePixelRatio = 1;
          addTearDown(tester.view.reset);
          await tester.runAsync(_setup);
          final old = FlutterError.onError;
          FlutterError.onError = (d) {
            // ignore: avoid_print
            print('OVERFLOW ${entry.key}: ${d.toString(minLevel: DiagnosticLevel.info)}');
            old?.call(d);
          };
          addTearDown(() => FlutterError.onError = old);
          await tester.pumpWidget(_app(entry.value(), scale));
          await _settle(tester);
          // Let any auto-advance timers run out so none is left pending.
          await tester.pump(const Duration(seconds: 3));
          expect(tester.takeException(), isNull);
        });
      }
    }
  }

  testWidgets('shell tabs at large text on a small phone', (tester) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.runAsync(_setup);
    await tester.pumpWidget(_app(const ChildShell(child: _kid), 1.6));
    await _settle(tester);
    for (final tab in ['ألعاب', 'إبداع', 'أنا', 'الرئيسية']) {
      await tester.tap(find.text(tab).last);
      await _settle(tester);
      expect(tester.takeException(), isNull, reason: tab);
    }
  });

  group('keyboard and screen readers', () {
    testWidgets('the bottom tabs and the map levels can be reached with the keyboard', (tester) async {
      tester.view.physicalSize = const Size(412, 915);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(_setup);
      await tester.pumpWidget(_app(const ChildShell(child: _kid), 1.0));
      await _settle(tester);

      // Tab until the "games" tab has focus, then Enter activates it.
      var reached = false;
      for (var i = 0; i < 60 && !reached; i++) {
        await tester.sendKeyEvent(LogicalKeyboardKey.tab);
        await tester.pump();
        final focused = FocusManager.instance.primaryFocus;
        final ctx = focused?.context;
        if (ctx != null) {
          final hit = find.descendant(of: find.byWidget(ctx.widget), matching: find.text('ألعاب'));
          reached = hit.evaluate().isNotEmpty;
        }
      }
      expect(reached, isTrue, reason: 'the games tab never got keyboard focus');
      await tester.sendKeyEvent(LogicalKeyboardKey.enter);
      await _settle(tester);
      expect(find.text('لعبة الذاكرة'), findsOneWidget); // age 5 games
    });

    testWidgets('every big control has a spoken label', (tester) async {
      final handle = tester.ensureSemantics();
      tester.view.physicalSize = const Size(412, 915);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(_setup);
      await tester.pumpWidget(_app(const ChildShell(child: _kid), 1.0));
      await _settle(tester);
      for (final label in ['الرئيسية', 'ألعاب', 'إبداع', 'أنا']) {
        expect(find.bySemanticsLabel(label), findsWidgets, reason: label);
      }
      expect(find.byTooltip('خروج (للأهل)'), findsOneWidget);
      expect(find.byTooltip('إعدادات الوالدين'), findsOneWidget);
      expect(find.bySemanticsLabel(RegExp('أرض الحروف.*أنهيت')), findsOneWidget);
      handle.dispose();
    });
  });
}
