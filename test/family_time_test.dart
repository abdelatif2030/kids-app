import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/family_time/family_time.dart';
import 'package:kids_app/family_time/family_time_screen.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/notifications/notification_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  final fri = DateTime(2026, 10, 30); // a Friday

  test('ideas fit the age; everyday ideas always need a grown-up present', () {
    for (var age = 1; age <= 6; age++) {
      final ideas = familyIdeasFor(age);
      expect(ideas, isNotEmpty, reason: 'age $age');
      expect(ideaOfDay(age, fri)!.id, ideaOfDay(age, DateTime(2026, 10, 30, 22))!.id);
    }
    expect({for (var i = 0; i < 8; i++) ideaOfDay(4, fri.add(Duration(days: i)))!.id}.length, greaterThan(1));
  });

  test('planning is per child; one confirmation per day; counted for the last 7 days only', () async {
    await FamilyTimeStore.plan('a', weekday: DateTime.friday, minutes: 45);
    expect(await FamilyTimeStore.weekday('a'), 5);
    expect(await FamilyTimeStore.minutes('a'), 45);
    expect(await FamilyTimeStore.weekday('b'), isNull);
    expect(await FamilyTimeStore.minutes('b'), 30);
    await FamilyTimeStore.plan('a', weekday: null);
    expect(await FamilyTimeStore.weekday('a'), isNull);
    expect(await FamilyTimeStore.minutes('a'), 45); // length stays
    await FamilyTimeStore.plan('a', weekday: 9, minutes: 7); // out of range: clamped / ignored
    expect(await FamilyTimeStore.weekday('a'), 7);
    expect(await FamilyTimeStore.minutes('a'), 45);
    expect(await FamilyTimeStore.confirm('a', 'x', now: fri), isTrue);
    expect(await FamilyTimeStore.confirm('a', 'y', now: fri), isFalse);
    expect(await FamilyTimeStore.confirm('a', 'x', now: fri.subtract(const Duration(days: 10))), isTrue);
    expect(await FamilyTimeStore.thisWeek('a', now: fri), 1);
    expect(await FamilyTimeStore.thisWeek('b', now: fri), 0);
  });

  test('the parent reminder appears on the planned day only, once, and not after the session is recorded', () async {
    NotificationStore.instance.resetForTest();
    await FamilyTimeStore.plan('a', weekday: DateTime.friday);
    await FamilyTimeStore.remind('a', 'Lina', now: DateTime(2026, 10, 29)); // Thursday
    expect(NotificationStore.instance.listFor(NotificationAudience.parent, childId: 'a').where((n) => n.id.startsWith('ft_')), isEmpty);
    await FamilyTimeStore.remind('a', 'Lina', now: fri);
    await FamilyTimeStore.remind('a', 'Lina', now: fri);
    expect(NotificationStore.instance.listFor(NotificationAudience.parent, childId: 'a').where((n) => n.id.startsWith('ft_')), hasLength(1));
    expect(NotificationStore.instance.listFor(NotificationAudience.parent, childId: 'a').firstWhere((n) => n.id.startsWith('ft_')).audience, NotificationAudience.parent);
    NotificationStore.instance.resetForTest();
    await FamilyTimeStore.confirm('a', 'x', now: fri);
    await FamilyTimeStore.remind('a', 'Lina', now: fri);
    expect(NotificationStore.instance.listFor(NotificationAudience.parent, childId: 'a').where((n) => n.id.startsWith('ft_')), isEmpty);
  });

  test('deleting a child removes their plan and sessions only', () async {
    await FamilyTimeStore.plan('a', weekday: 2);
    await FamilyTimeStore.plan('b', weekday: 3);
    await FamilyTimeStore.confirm('a', 'x', now: fri);
    await deleteOneChild('a');
    expect(await FamilyTimeStore.weekday('a'), isNull);
    expect(await FamilyTimeStore.sessions('a'), isEmpty);
    expect(await FamilyTimeStore.weekday('b'), 3);
  });

  test('damaged storage does not crash', () async {
    SharedPreferences.setMockInitialValues({'family_time': '[1'});
    expect(await FamilyTimeStore.weekday('a'), isNull);
    expect(await FamilyTimeStore.confirm('a', 'x', now: fri), isTrue);
  });

  testWidgets('the screen works in both languages and small sizes, and planning asks the grown-up question', (t) async {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 3);
    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 568), const Size(844, 390)]) {
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        await AppLocale.instance.set(lang);
        await t.pumpWidget(MaterialApp(
          key: UniqueKey(),
          builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)), child: w!),
          home: FamilyTimeScreen(child: kid, today: fri),
        ));
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
        await t.pump();
        expect(find.byKey(const ValueKey('ft_idea')), findsOneWidget);
        expect(t.takeException(), isNull);
      }
    }
    await t.scrollUntilVisible(find.byKey(const ValueKey('ft_day_3')), 100, scrollable: find.byType(Scrollable).first);
    await t.tap(find.byKey(const ValueKey('ft_day_3')));
    await t.pumpAndSettle();
    expect(find.byType(AlertDialog), findsOneWidget);
    expect(await t.runAsync(() => FamilyTimeStore.weekday('k1')), isNull); // not answered, so not planned
    t.view.reset();
  });
}
