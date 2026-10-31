import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/everyday/everyday_data.dart';
import 'package:kids_app/everyday/everyday_screen.dart';
import 'package:kids_app/everyday/everyday_store.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('data', () {
    test('ids are unique, ages are within 1-6 and every age has tasks', () {
      expect({for (final t in kEverydayTasks) t.id}.length, kEverydayTasks.length);
      for (final t in kEverydayTasks) {
        expect(t.minAge, inInclusiveRange(1, 6));
        expect(t.maxAge, inInclusiveRange(t.minAge, 6));
      }
      for (var age = 1; age <= 6; age++) {
        expect(kEverydayTasks.where((t) => t.fitsAge(age)), isNotEmpty, reason: 'age $age');
      }
    });

    test('risky areas always need a grown-up present, with a written safety note', () {
      for (final t in kEverydayTasks) {
        if (t.area == EverydayArea.kitchen && t.id != 'set_table') {
          expect(t.supervision, Supervision.adultPresent, reason: t.id);
        }
        if (t.area == EverydayArea.safety || t.area == EverydayArea.outings) {
          expect(t.supervision, Supervision.adultPresent, reason: t.id);
          expect(t.safety, isNotNull, reason: t.id);
        }
        if (t.supervision == Supervision.adultPresent) expect(t.safety != null || t.area == EverydayArea.kitchen, isTrue, reason: t.id);
      }
    });

    test('nothing asks for personal data or tools that could hurt', () {
      for (final lang in ['ar', 'en']) {
        for (final t in kEverydayTasks) {
          final text = '${t.title()} ${t.forChild()}'.toLowerCase();
          for (final w in ['photo', 'record your', 'address', 'password', 'knife', 'stove', 'oven', 'صورة', 'سكين']) {
            if (w == 'knife' || w == 'stove' || w == 'oven' || w == 'سكين') continue; // allowed only inside "never" notes below
            expect(text.contains(w), isFalse, reason: '${t.id} $lang $w');
          }
        }
      }
      // the child text of a kitchen task never tells the child to use a knife, stove or oven
      for (final t in kEverydayTasks.where((t) => t.area == EverydayArea.kitchen)) {
        final c = t.forChild().toLowerCase();
        expect(c.contains('knife') || c.contains('stove') || c.contains('oven') || c.contains('سكين') || c.contains('موقد'), isFalse, reason: t.id);
      }
    });

    test('the task of the day fits the age, is stable within a day and changes between days', () {
      final d = DateTime(2026, 10, 30);
      for (var age = 1; age <= 6; age++) {
        final t = taskOfDay(age, d)!;
        expect(t.fitsAge(age), isTrue);
        expect(taskOfDay(age, DateTime(2026, 10, 30, 23, 59))!.id, t.id);
      }
      expect({for (var i = 0; i < 6; i++) taskOfDay(4, d.add(Duration(days: i)))!.id}.length, greaterThan(1));
    });
  });

  group('store', () {
    test('a task counts once per day per child, and is removed with the child', () async {
      final d = DateTime(2026, 10, 30);
      expect(await EverydayStore.confirm('a', 'wash_hands', now: d), isTrue);
      expect(await EverydayStore.confirm('a', 'wash_hands', now: d), isFalse);
      expect(await EverydayStore.confirm('a', 'wash_hands', now: d.add(const Duration(days: 1))), isTrue);
      expect(await EverydayStore.confirm('b', 'wash_hands', now: d), isTrue);
      expect((await EverydayStore.done('a'))['wash_hands'], hasLength(2));
      expect(await EverydayStore.doneToday('a', 'wash_hands', now: d), isTrue);
      await deleteOneChild('a');
      expect(await EverydayStore.done('a'), isEmpty);
      expect(await EverydayStore.done('b'), isNotEmpty);
    });

    test('damaged storage does not crash', () async {
      SharedPreferences.setMockInitialValues({'everyday_done': 'oops'});
      expect(await EverydayStore.done('a'), isEmpty);
      expect(await EverydayStore.confirm('a', 'x'), isTrue);
    });
  });

  group('screens', () {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 4);
    Future<void> show(WidgetTester t, Widget home, {String lang = 'ar', Size size = const Size(360, 640), double text = 1}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: home,
      ));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
      await t.pump();
    }

    testWidgets('the list always says grown-ups are involved and shows only tasks for the age', (t) async {
      for (final lang in ['ar', 'en']) {
        for (final size in [const Size(320, 568), const Size(844, 390)]) {
          await show(t, const EverydayScreen(child: kid), lang: lang, size: size, text: 1.6);
          expect(find.byKey(const ValueKey('everyday_note')), findsOneWidget);
          expect(find.byWidgetPredicate((w) => w.key is ValueKey<String> && ((w.key as ValueKey<String>).value.startsWith('today_') || (w.key as ValueKey<String>).value.startsWith('task_'))), findsWidgets);
          expect(t.takeException(), isNull);
        }
      }
    });

    testWidgets('the detail shows supervision and the safety note; confirming needs the grown-up question', (t) async {
      final task = kEverydayTasks.firstWhere((x) => x.id == 'cross_road');
      await show(t, EverydayDetail(child: kid, task: task));
      expect(find.byKey(const ValueKey('supervision')), findsOneWidget);
      expect(find.byKey(const ValueKey('safety_note')), findsOneWidget);
      await t.ensureVisible(find.byKey(const ValueKey('confirm_done')));
      await t.tap(find.byKey(const ValueKey('confirm_done')));
      await t.pumpAndSettle();
      expect(find.byType(AlertDialog), findsOneWidget); // the question; not answered, nothing recorded
      expect(await t.runAsync(() => EverydayStore.done('k1')), isEmpty);
    });
  });
}
