import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/journey/ui/profile_forms.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/parent_settings.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

void _tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(800, 2400);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

Future<JourneyStore> _newStore({bool withChild = false, List<Attempt> attempts = const []}) async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  if (withChild) {
    await store.addProfile(const ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5));
  }
  for (final a in attempts) {
    await store.recordAttempt(a);
  }
  JourneyStore.instance = store;
  return store;
}

Attempt _done(String activity, {int right = 5}) => Attempt(
      childId: 'kid1',
      activityId: activity,
      day: dayKeyOf(DateTime.now()),
      total: 5,
      firstTry: right,
      seconds: 30,
      stars: starsFor(5, right),
    );

/// Answers every question of a quiz by trying the options in order; a wrong
/// tap only fades that option, so this always ends on the right one.
Future<void> _answerQuiz(WidgetTester tester, int questions) async {
  for (var q = 0; q < questions; q++) {
    final options = find.descendant(of: find.byType(AnimatedOpacity), matching: find.byType(InkWell));
    final n = options.evaluate().length;
    for (var i = 0; i < n; i++) {
      await tester.tap(options.at(i), warnIfMissed: false);
      await tester.pump(const Duration(milliseconds: 50));
    }
    await tester.pump(const Duration(milliseconds: 1300));
  }
}

Finder _field(String label) => find.widgetWithText(TextField, label);

void main() {
  testWidgets('a new device shows the welcome, then the picker once a child exists', (tester) async {
    _tall(tester);
    final store = await tester.runAsync(_newStore) as JourneyStore;
    await tester.pumpWidget(_app(const StartScreen()));
    await tester.pump();
    expect(find.text('رحلتي'), findsOneWidget);
    expect(find.text('ابدأ الرحلة'), findsOneWidget);
    expect(find.text('حساب الأهل والمدرسين'), findsOneWidget);

    await tester.runAsync(() => store.addProfile(const ChildProfile(id: 'a', nickname: 'ليلى', age: 4)));
    await tester.pump();
    expect(find.text('من سيلعب اليوم؟'), findsOneWidget);
    expect(find.text('ليلى'), findsOneWidget);
    expect(find.text('إضافة طفل'), findsOneWidget);
  });

  group('onboarding', () {
    testWidgets('four steps: basics, goals, skill check, plan, then the profile is saved',
        (tester) async {
      _tall(tester);
      final store = await tester.runAsync(_newStore) as JourneyStore;
      await tester.pumpWidget(_app(const OnboardingFlow()));
      expect(find.text('الخطوة 1 من 4'), findsOneWidget);

      // Step 1 needs a nickname.
      await tester.tap(find.text('التالي'));
      await tester.pump();
      expect(find.text('اكتب اسماً أو لقباً للطفل'), findsOneWidget);
      expect(find.text('الخطوة 1 من 4'), findsOneWidget);

      await tester.enterText(_field('اسم الطفل أو لقبه'), 'سلمى');
      await tester.tap(find.widgetWithText(ChoiceChip, '4'));
      await tester.pump();
      await tester.tap(find.text('التالي'));
      await tester.pump();

      // Step 2: goals and interests.
      expect(find.text('الخطوة 2 من 4'), findsOneWidget);
      expect(find.text('الأهداف والاهتمامات'), findsOneWidget);
      await tester.tap(find.widgetWithText(FilterChip, 'الإنجليزية'));
      await tester.tap(find.widgetWithText(FilterChip, 'جزيرة الألوان'));
      await tester.pump();
      await tester.tap(find.text('التالي'));
      await tester.pump();

      // Step 3: the child answers six quick questions.
      expect(find.text('الخطوة 3 من 4'), findsOneWidget);
      expect(find.text('السؤال 1 من 6'), findsOneWidget);
      await _answerQuiz(tester, 6);
      expect(find.textContaining('أحسنت يا سلمى'), findsOneWidget);
      await tester.tap(find.text('عرض الخطة المقترحة'));
      await tester.pump();

      // Step 4: review and edit the plan.
      expect(find.text('الخطوة 4 من 4'), findsOneWidget);
      expect(find.text('خطة التعلّم'), findsOneWidget);
      final checkboxes = find.byType(Checkbox);
      expect(checkboxes, findsNWidgets(6));
      await tester.tap(checkboxes.last); // leave the last land out
      await tester.pump();
      await tester.tap(find.text('4')); // four activities a day
      await tester.pump();
      await tester.tap(find.text('أصعب'));
      await tester.pump();
      await tester.tap(find.text('ابدأ الرحلة'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump();

      expect(store.profiles.length, 1);
      final p = store.profiles.single;
      expect(p.nickname, 'سلمى');
      expect(p.age, 4);
      expect(p.goals, ['english']);
      expect(p.interests, ['colors']);
      expect(p.dailyCount, 4);
      expect(p.bias, 1);
      expect(p.plan.length, 5); // one land left out
      expect(p.assessment.keys.toSet(), {for (final l in kLands) l.id}); // one score per land
      expect(store.activeId, p.id);
    });

    testWidgets('the skill check can be skipped and the plan then follows the goals', (tester) async {
      _tall(tester);
      final store = await tester.runAsync(_newStore) as JourneyStore;
      await tester.pumpWidget(_app(const OnboardingFlow()));
      await tester.enterText(_field('اسم الطفل أو لقبه'), 'عمر');
      await tester.tap(find.text('التالي'));
      await tester.pump();
      await tester.tap(find.widgetWithText(FilterChip, 'الذاكرة والتفكير'));
      await tester.tap(find.text('التالي'));
      await tester.pump();
      await tester.tap(find.text('تخطي الاختبار'));
      await tester.pump();
      expect(find.text('الخطوة 4 من 4'), findsOneWidget);
      await tester.tap(find.text('ابدأ الرحلة'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pump();
      final p = store.profiles.single;
      expect(p.assessment, isEmpty);
      expect(p.plan.first, 'brain'); // the goal's land comes first
      expect(p.age, 5); // the default age
    });

    testWidgets('going back keeps what was typed', (tester) async {
      _tall(tester);
      await tester.runAsync(_newStore);
      await tester.pumpWidget(_app(const OnboardingFlow()));
      await tester.enterText(_field('اسم الطفل أو لقبه'), 'نور');
      await tester.tap(find.text('التالي'));
      await tester.pump();
      await tester.tap(find.text('رجوع'));
      await tester.pump();
      expect(find.text('نور'), findsOneWidget);
    });
  });

  group('child shell', () {
    Future<void> openShell(WidgetTester tester, {List<Attempt> attempts = const []}) async {
      _tall(tester);
      await tester.runAsync(() => _newStore(withChild: true, attempts: attempts));
      await tester.pumpWidget(_app(const ChildShell(
        child: ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5),
      )));
      await tester.pump();
    }

    testWidgets('home: greeting, today\'s adventure with three activities, and the six lands',
        (tester) async {
      await openShell(tester);
      expect(find.text('أهلاً سلمى!'), findsOneWidget);
      expect(find.text('مغامرة اليوم'), findsOneWidget);
      expect(find.text('0 من 3 أنشطة · نحو 4 دقائق لكل نشاط'), findsOneWidget);
      expect(find.text('ابدأ رحلة اليوم'), findsOneWidget);
      for (final land in kLands) {
        expect(find.text(land.title), findsWidgets);
      }
      expect(find.text('فيديوهات تعليمية'), findsOneWidget);
    });

    testWidgets('today\'s adventure ticks off finished activities', (tester) async {
      await openShell(tester);
      final planned = JourneyStore.instance.todayPlan('kid1');
      expect(planned.length, 3);
      await tester.runAsync(() => JourneyStore.instance.recordAttempt(_done(planned.first.activity.id)));
      await tester.pump();
      expect(find.text('1 من 3 أنشطة · نحو 4 دقائق لكل نشاط'), findsOneWidget);
      expect(find.byIcon(Icons.check_circle_rounded), findsOneWidget);
    });

    testWidgets('all four tabs work', (tester) async {
      await openShell(tester);
      await tester.tap(find.text('ألعاب').last);
      await tester.pump();
      expect(find.text('لعبة الذاكرة'), findsOneWidget); // age 5

      await tester.tap(find.text('إبداع').last);
      await tester.pump();
      expect(find.text('رسم حر'), findsOneWidget);
      expect(find.text('دروس الرسم'), findsOneWidget);

      await tester.tap(find.text('أنا').last);
      await tester.pump();
      expect(find.text('سلمى'), findsOneWidget);
      expect(find.textContaining('المستوى 1'), findsOneWidget);
      expect(find.text('هدف اليوم'), findsOneWidget);
      expect(find.text('هدف الأسبوع'), findsOneWidget);
      expect(find.text('شاراتي'), findsOneWidget);

      await tester.tap(find.text('الرئيسية').last);
      await tester.pump();
      expect(find.text('أهلاً سلمى!'), findsOneWidget);
    });

    testWidgets('accessories unlock with stars and can be worn', (tester) async {
      // 6 level-completions with 3 stars = 18 stars: hat (5) and glasses (12) are open, the bow (22) is not.
      await openShell(tester, attempts: [
        for (final id in ['letters_1', 'letters_2', 'letters_3', 'numbers_1', 'numbers_2', 'colors_1']) _done(id),
      ]);
      await tester.tap(find.text('أنا').last);
      await tester.pump();
      expect(find.text('قبعة'), findsOneWidget);
      expect(find.text('نظارة'), findsOneWidget);
      expect(find.text('22 ⭐'), findsOneWidget); // locked: shows what it needs

      await tester.tap(find.text('قبعة'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
      await tester.pump();
      expect(JourneyStore.instance.profileById('kid1')!.accessory, 'hat');

      await tester.tap(find.text('22 ⭐')); // locked: nothing changes
      await tester.pump();
      expect(JourneyStore.instance.profileById('kid1')!.accessory, 'hat');

      await tester.tap(find.text('بدون'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
      await tester.pump();
      expect(JourneyStore.instance.profileById('kid1')!.accessory, isNull);
    });

    testWidgets('earned badges, goals and per-land stars are shown', (tester) async {
      await openShell(tester, attempts: [_done('letters_1'), _done('letters_2'), _done('letters_3')]);
      await tester.tap(find.text('أنا').last);
      await tester.pump();
      expect(find.text('نجم الحروف'), findsOneWidget);
      expect(find.text('الخطوة الأولى'), findsOneWidget);
      expect(find.text('3/3'), findsOneWidget); // today's goal: three activities done today
      expect(find.text('3/10'), findsOneWidget); // this week's goal: 3 of 10
      expect(find.text('3/5'), findsOneWidget); // letters: three of five levels
      expect(find.text('9 ⭐'), findsOneWidget); // ... with nine stars
      expect(find.text('المستوى 2 · 105 نقطة خبرة'), findsOneWidget); // 9 stars * 10 + 3 * 5
    });

    testWidgets('leaving needs the parent PIN when one is set', (tester) async {
      _tall(tester);
      await tester.runAsync(() => _newStore(withChild: true));
      await tester.runAsync(() => ParentSettings.instance.setPin('1234'));
      await tester.pumpWidget(_app(Builder(
        builder: (context) => TextButton(
          onPressed: () => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => const ChildShell(child: ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5)),
            ),
          ),
          child: const Text('go'),
        ),
      )));
      await tester.tap(find.text('go'));
      await tester.pumpAndSettle();
      expect(find.text('أهلاً سلمى!'), findsOneWidget);

      await tester.tap(find.byTooltip('خروج (للأهل)'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(find.text('رمز الوالدين'), findsOneWidget); // the PIN screen

      await tester.enterText(find.byType(TextField), '0000');
      await tester.tap(find.text('فتح'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(find.text('رمز خاطئ'), findsOneWidget);

      await tester.enterText(find.byType(TextField), '1234');
      await tester.tap(find.text('فتح'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(find.text('go'), findsOneWidget); // back out of child mode
    });

    testWidgets('with no PIN set, the exit button leaves straight away', (tester) async {
      _tall(tester);
      await tester.runAsync(() => _newStore(withChild: true));
      await tester.pumpWidget(_app(Builder(
        builder: (context) => TextButton(
          onPressed: () => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => const ChildShell(child: ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5)),
            ),
          ),
          child: const Text('go'),
        ),
      )));
      await tester.tap(find.text('go'));
      await tester.pumpAndSettle();
      await tester.tap(find.byTooltip('خروج (للأهل)'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(find.text('go'), findsOneWidget);
    });
  });

  group('parent area: children', () {
    testWidgets('edit a child, change the plan, and delete with their progress', (tester) async {
      _tall(tester);
      await tester.runAsync(() => _newStore(withChild: true, attempts: [_done('letters_1')]));
      await tester.pumpWidget(_app(const ChildrenScreen()));
      await tester.pump();
      expect(find.text('سلمى'), findsOneWidget);
      expect(find.text('العمر 5 · 3 نجمة'), findsOneWidget);

      await tester.tap(find.text('سلمى'));
      await tester.pumpAndSettle();
      await tester.enterText(_field('اسم الطفل أو لقبه'), 'سلمى الصغيرة');
      await tester.tap(find.widgetWithText(ChoiceChip, '7'));
      await tester.tap(find.byType(Checkbox).first); // leave the first land out of the plan
      await tester.tap(find.byTooltip('أسفل').first); // and move it down
      await tester.pump();
      await tester.tap(find.text('حفظ'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();

      final p = JourneyStore.instance.profileById('kid1')!;
      expect(p.nickname, 'سلمى الصغيرة');
      expect(p.age, 7);
      expect(p.plan.length, 5);
      expect(p.plan.contains('letters'), isFalse);

      await tester.tap(find.text('سلمى الصغيرة'));
      await tester.pumpAndSettle();
      await tester.scrollUntilVisible(find.text('حذف هذا الطفل وتقدمه'), 300,
          scrollable: find.byType(Scrollable).first);
      await tester.tap(find.text('حذف هذا الطفل وتقدمه'));
      await tester.pumpAndSettle();
      expect(find.textContaining('سيُحذف ملف «سلمى الصغيرة»'), findsOneWidget);
      await tester.tap(find.text('حذف'));
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
      await tester.pumpAndSettle();
      expect(JourneyStore.instance.profiles, isEmpty);
      expect(JourneyStore.instance.attemptsOf('kid1'), isEmpty);
      expect(find.text('لا يوجد أطفال بعد'), findsOneWidget);
    });
  });
}
