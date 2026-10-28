import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/content.dart';
import 'package:kids_app/journey/lands.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/admin_screen.dart';
import 'package:kids_app/journey/ui/privacy_screen.dart';
import 'package:kids_app/parent_settings.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

void _tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(900, 2600);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

Future<JourneyStore> _store({bool child = false}) async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  if (child) await store.addProfile(const ChildProfile(id: 'k1', nickname: 'سلمى', age: 5));
  JourneyStore.instance = store;
  return store;
}

Future<void> _settle(WidgetTester tester) async {
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 250)));
  await tester.pumpAndSettle();
}

void main() {
  group('admin', () {
    testWidgets('says plainly that it is a development tool', (tester) async {
      _tall(tester);
      await tester.runAsync(_store);
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      expect(find.textContaining('ليست مناسبة للإنتاج'), findsOneWidget);
      expect(find.text('إدارة المحتوى (تجريبي)'), findsOneWidget);
    });

    testWidgets('lands: a draft land disappears from what children see and from the plan',
        (tester) async {
      _tall(tester);
      final store = await tester.runAsync(() => _store(child: true)) as JourneyStore;
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      expect(find.text('منشور'), findsNWidgets(kLands.length));

      // Switch the stories land to draft.
      final storiesRow = find.ancestor(of: find.text('قطار القصص'), matching: find.byType(Card)).first;
      await tester.tap(find.descendant(of: storiesRow, matching: find.byType(Switch)));
      await _settle(tester);
      expect(store.settings.draftLands, {'stories'});
      expect(store.publishedLands.map((l) => l.id), isNot(contains('stories')));
      final plan = store.todayPlan('k1');
      expect(plan.map((p) => p.activity.landId), isNot(contains('stories')));
      expect(find.text('مسودة'), findsOneWidget);

      // And back.
      await tester.tap(find.descendant(of: storiesRow, matching: find.byType(Switch)));
      await _settle(tester);
      expect(store.settings.draftLands, isEmpty);
    });

    testWidgets('lands: an age range keeps a land out of plans for other ages', (tester) async {
      _tall(tester);
      final store = await tester.runAsync(() => _store(child: true)) as JourneyStore;
      await tester.runAsync(() => store.saveSettings(const JourneySettings(landAges: {'english': [8, 12]})));
      final plan = store.todayPlan('k1'); // the child is 5
      expect(plan.map((p) => p.activity.landId), isNot(contains('english')));
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      expect(find.text('الأعمار المناسبة: 8 إلى 12'), findsOneWidget);
      expect(find.text('الأعمار المناسبة: 1 إلى 12'), findsNWidgets(kLands.length - 1));
    });

    testWidgets('questions: validation, add, edit, publish switch and delete', (tester) async {
      _tall(tester);
      final store = await tester.runAsync(_store) as JourneyStore;
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      await tester.tap(find.text('الأسئلة'));
      await tester.pumpAndSettle();
      expect(find.textContaining('لا توجد أسئلة مخصصة بعد'), findsOneWidget);

      await tester.tap(find.text('سؤال جديد'));
      await tester.pumpAndSettle();
      Finder field(String label) => find.widgetWithText(TextField, label);

      await tester.tap(find.text('حفظ السؤال'));
      await tester.pump();
      expect(find.text('اكتب نص السؤال'), findsOneWidget);

      await tester.enterText(field('نص السؤال'), 'ما لون الموزة؟');
      await tester.enterText(field('الخيار 1'), 'أصفر');
      await tester.tap(find.text('حفظ السؤال'));
      await tester.pump();
      expect(find.text('اكتب خيارين على الأقل'), findsOneWidget);

      await tester.enterText(field('الخيار 2'), 'أصفر');
      await tester.tap(find.text('حفظ السؤال'));
      await tester.pump();
      expect(find.text('الخيارات يجب أن تكون مختلفة'), findsOneWidget);

      await tester.enterText(field('الخيار 2'), 'أحمر');
      await tester.enterText(field('الخيار 4'), 'أزرق');
      // The correct answer is option 3, which is empty: refused.
      await tester.tap(find.byType(Radio<int>).at(2));
      await tester.pump();
      await tester.tap(find.text('حفظ السؤال'));
      await tester.pump();
      expect(find.text('اختر الإجابة الصحيحة من الخيارات المكتوبة'), findsOneWidget);

      // Option 4 (blue) is correct; the empty option 3 is skipped, so it becomes index 2.
      await tester.tap(find.byType(Radio<int>).at(3));
      await tester.pump();
      await tester.tap(find.text('حفظ السؤال'));
      await _settle(tester);
      expect(store.custom.length, 1);
      final q = store.custom.single;
      expect(q.prompt, 'ما لون الموزة؟');
      expect(q.options, ['أصفر', 'أحمر', 'أزرق']);
      expect(q.correct, 2);
      expect(q.published, isTrue);
      expect(find.text('ما لون الموزة؟'), findsOneWidget);
      expect(find.textContaining('✓ أزرق'), findsOneWidget);

      // Draft it, then edit it.
      await tester.tap(find.byType(Switch).first);
      await _settle(tester);
      expect(store.custom.single.published, isFalse);
      await tester.tap(find.byTooltip('تعديل'));
      await tester.pumpAndSettle();
      await tester.enterText(field('نص السؤال'), 'ما لون الموز؟');
      await tester.tap(find.text('حفظ السؤال'));
      await _settle(tester);
      expect(store.custom.single.prompt, 'ما لون الموز؟');
      expect(store.custom.single.id, q.id); // edited, not duplicated
      expect(store.custom.single.published, isFalse);

      await tester.tap(find.byTooltip('حذف'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('حذف').last);
      await _settle(tester);
      expect(store.custom, isEmpty);
    });

    testWidgets('a published custom question is used in the matching activity', (tester) async {
      final store = await tester.runAsync(_store) as JourneyStore;
      await tester.runAsync(() => store.saveCustom(const [
            CustomQuestion(
              id: 'q',
              landId: 'colors',
              prompt: 'سؤال المدير',
              options: ['أ', 'ب'],
              correct: 1,
              minAge: 4,
              maxAge: 6,
              difficulty: 2,
            ),
          ]));
      final content = buildContent(
        const Activity('colors', 2, ActivityKind.quiz),
        age: 5,
        random: Random(1),
        custom: store.custom,
      ) as QuizContent;
      final mine = content.questions.where((q) => q.prompt == 'سؤال المدير').single;
      expect(mine.options[mine.correct].text, 'ب');
      expect(content.questions.length, 5);
    });

    testWidgets('rewards: change a badge requirement or switch it off', (tester) async {
      _tall(tester);
      final store = await tester.runAsync(_store) as JourneyStore;
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      await tester.tap(find.text('المكافآت'));
      await tester.pumpAndSettle();

      final row = find.ancestor(of: find.text('نجم الحروف'), matching: find.byType(ListTile)).first;
      expect(find.descendant(of: row, matching: find.textContaining('العدد المطلوب: 3')), findsOneWidget);
      await tester.tap(find.descendant(of: row, matching: find.byTooltip('أكثر')));
      await _settle(tester);
      expect(store.settings.badgeThresholds, {'letters_star': 4});
      await tester.tap(find.descendant(of: row, matching: find.byTooltip('أقل')));
      await _settle(tester);
      expect(store.settings.badgeThresholds, isEmpty); // back to the default: no override kept

      await tester.tap(find.descendant(of: row, matching: find.byType(Switch)));
      await _settle(tester);
      expect(store.settings.badgeThresholds, {'letters_star': 0});
      expect(find.text('الشارة متوقفة'), findsOneWidget);
      expect(find.text('قبعة'), findsOneWidget); // the accessories are listed too
    });

    testWidgets('plans: every child with the order, count and difficulty', (tester) async {
      _tall(tester);
      await tester.runAsync(() => _store(child: true));
      await tester.pumpWidget(_app(const AdminScreen()));
      await tester.pump();
      await tester.tap(find.text('الخطط'));
      await tester.pumpAndSettle();
      expect(find.textContaining('سلمى · عمر 5'), findsOneWidget);
      expect(find.textContaining('3 أنشطة يومياً · عادي'), findsOneWidget);
      expect(find.textContaining('أرض الحروف ← حديقة الأرقام'), findsOneWidget);
    });
  });

  group('privacy', () {
    testWidgets('explains what is kept and what is never done, honestly', (tester) async {
      _tall(tester);
      await tester.runAsync(_store);
      await tester.pumpWidget(_app(const PrivacyScreen()));
      await tester.pump();
      expect(find.text('ما نحفظه على الجهاز'), findsOneWidget);
      expect(find.text('ما لا نفعله أبداً'), findsOneWidget);
      expect(find.textContaining('لا إعلانات ولا تتبع'), findsOneWidget);
      expect(find.textContaining('مشغّل YouTube الرسمي'), findsOneWidget); // not hidden
      expect(find.textContaining('docs/PRODUCTION.md'), findsOneWidget);
    });

    testWidgets('reset deletes the children and their data but keeps the PIN and limits',
        (tester) async {
      _tall(tester);
      final store = await tester.runAsync(() => _store(child: true)) as JourneyStore;
      final today = dayKeyOf(DateTime.now());
      await tester.runAsync(() async {
        await store.recordAttempt(Attempt(
            childId: 'k1', activityId: 'letters_1', day: today, total: 5, firstTry: 5, seconds: 30, stars: 3));
        await ParentSettings.instance.setPin('1234');
        await ParentSettings.instance.setDailyLimitMinutes(30);
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('watch_history', '[]');
        await prefs.setString('skill_events', '[]');
        await prefs.setString('parent_notes', '[]');
        await prefs.setInt('used_$today', 600);
        await prefs.setInt('bonus_$today', 900);
        await prefs.setInt('plan_target_math', 3);
        await prefs.setInt('last_age', 5);
      });
      await tester.pumpWidget(_app(const PrivacyScreen()));
      await tester.pump();

      await tester.tap(find.text('حذف بيانات الأطفال من هذا الجهاز'));
      await tester.pumpAndSettle();
      expect(find.textContaining('يبقى الرمز السري وحدود الوقت'), findsOneWidget);
      await tester.tap(find.text('إلغاء'));
      await tester.pumpAndSettle();
      expect(store.profiles.length, 1); // cancelling changes nothing

      await tester.tap(find.text('حذف بيانات الأطفال من هذا الجهاز'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('حذف كل شيء'));
      await _settle(tester);

      expect(store.profiles, isEmpty);
      expect(store.attemptsOf('k1'), isEmpty);
      final prefs = await tester.runAsync(SharedPreferences.getInstance) as SharedPreferences;
      for (final key in ['watch_history', 'skill_events', 'parent_notes', 'used_$today', 'bonus_$today', 'plan_target_math', 'last_age']) {
        expect(prefs.containsKey(key), isFalse, reason: key);
      }
      expect(await tester.runAsync(() => ParentSettings.instance.hasPin()), isTrue);
      expect(await tester.runAsync(() => ParentSettings.instance.dailyLimitMinutes()), 30);
      expect(find.text('تم حذف بيانات الأطفال من هذا الجهاز.'), findsOneWidget);

      // A fresh start of the app finds nothing.
      final again = JourneyStore(LocalJourneyRepository());
      await tester.runAsync(again.load);
      expect(again.profiles, isEmpty);
    });
  });
}
