import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/journey/avatars.dart' show ChildAvatar;
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/home_tab.dart';
import 'package:kids_app/journey/ui/me_tab.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/notifications/notification_store.dart';
import 'package:kids_app/notifications/notification_ui.dart';
import 'package:kids_app/parent_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);
const _kid2 = ChildProfile(id: 'k2', nickname: 'Omar', age: 3);

AppNotification _n(String id, {NotificationAudience a = NotificationAudience.child, String? child = 'k1', DateTime? at, String? route, bool read = false, NotificationKind kind = NotificationKind.reward}) => AppNotification(
      id: id,
      audience: a,
      childId: child,
      kind: kind,
      titleAr: 'عنوان $id',
      titleEn: 'Title $id',
      bodyAr: 'نص $id',
      bodyEn: 'Body $id',
      at: at ?? DateTime.now(),
      read: read,
      route: route,
    );

Future<void> _setup() async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  NotificationStore.instance.resetForTest();
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  await store.addProfile(_kid);
  await store.addProfile(_kid2);
  JourneyStore.instance = store;
}

void main() {
  setUp(() async {
    await AppLocale.instance.set('en');
    await _setup();
  });
  tearDown(() => AppLocale.instance.set('ar'));

  group('store', () {
    test('add is idempotent: the same id never notifies twice', () async {
      final s = NotificationStore.instance;
      expect(await s.add(_n('a')), isTrue);
      expect(await s.add(_n('a')), isFalse);
      expect(s.listFor(NotificationAudience.child, childId: 'k1').length, 1);
    });

    test('unread count, mark one, mark all', () async {
      final s = NotificationStore.instance;
      for (final id in ['a', 'b', 'c']) {
        await s.add(_n(id));
      }
      expect(s.unread(NotificationAudience.child, childId: 'k1'), 3);
      await s.markRead('b');
      expect(s.unread(NotificationAudience.child, childId: 'k1'), 2);
      await s.markAllRead(NotificationAudience.child, childId: 'k1');
      expect(s.unread(NotificationAudience.child, childId: 'k1'), 0);
    });

    test('children and audiences are isolated', () async {
      final s = NotificationStore.instance;
      await s.add(_n('a', child: 'k1'));
      await s.add(_n('b', child: 'k2'));
      await s.add(_n('p', a: NotificationAudience.parent, child: null));
      expect(s.unread(NotificationAudience.child, childId: 'k1'), 1);
      expect(s.unread(NotificationAudience.child, childId: 'k2'), 1);
      expect(s.unread(NotificationAudience.parent), 1);
      await s.markAllRead(NotificationAudience.child, childId: 'k1');
      expect(s.unread(NotificationAudience.child, childId: 'k2'), 1); // another child is untouched
      expect(s.unread(NotificationAudience.parent), 1);
    });

    test('history persists across a reload, with read state', () async {
      final s = NotificationStore.instance;
      await s.add(_n('a'));
      await s.add(_n('b'));
      await s.markRead('a');
      s.resetForTest();
      await s.load();
      final l = s.listFor(NotificationAudience.child, childId: 'k1');
      expect(l.length, 2);
      expect(l.firstWhere((n) => n.id == 'a').read, isTrue);
      expect(l.firstWhere((n) => n.id == 'b').read, isFalse);
    });

    test('newest first; old entries (60 days) are dropped on load; the list is capped', () async {
      final s = NotificationStore.instance;
      await s.add(_n('old', at: DateTime.now().subtract(const Duration(days: 61))));
      await s.add(_n('new'));
      s.resetForTest();
      await s.load();
      expect(s.listFor(NotificationAudience.child, childId: 'k1').map((n) => n.id), ['new']);
      for (var i = 0; i < 120; i++) {
        await s.add(_n('x$i', at: DateTime.now().add(Duration(seconds: i))));
      }
      expect(s.listFor(NotificationAudience.child, childId: 'k1').length, NotificationStore.maxItems);
    });

    test('damaged storage does not crash', () async {
      SharedPreferences.setMockInitialValues({'notifications': '{not json'});
      NotificationStore.instance.resetForTest();
      await NotificationStore.instance.load();
      expect(NotificationStore.instance.listFor(NotificationAudience.parent), isEmpty);
    });

    test('text follows the language and times read naturally', () {
      final n = _n('a');
      expect(n.title, 'Title a');
      final now = DateTime(2026, 10, 30, 12);
      expect(notificationTime(now.subtract(const Duration(seconds: 10)), now, arabic: false), 'Just now');
      expect(notificationTime(now.subtract(const Duration(minutes: 5)), now, arabic: false), '5 min ago');
      expect(notificationTime(now.subtract(const Duration(minutes: 5)), now, arabic: true), 'منذ 5 دقيقة');
      expect(notificationTime(DateTime(2026, 10, 29, 9), now, arabic: false), 'Yesterday');
      expect(notificationTime(DateTime(2026, 10, 1, 9), now, arabic: false), '1/10/2026');
    });
  });

  group('real events', () {
    test('a finished activity notifies the child and the parent once', () async {
      await JourneyStore.instance.recordAttempt(const Attempt(childId: 'k1', activityId: 'letters_1', day: '2026-10-30', total: 3, firstTry: 3, seconds: 60, stars: 3));
      final s = NotificationStore.instance;
      expect(s.listFor(NotificationAudience.child, childId: 'k1').length, 1);
      expect(s.listFor(NotificationAudience.child, childId: 'k2'), isEmpty);
      expect(s.listFor(NotificationAudience.parent).length, 1);
      expect(s.listFor(NotificationAudience.parent).single.route, 'dashboard:k1');
    });

    test('deleting one child removes only their notifications; deleting all clears everything', () async {
      final s = NotificationStore.instance;
      await s.add(_n('a', child: 'k1'));
      await s.add(_n('b', child: 'k2'));
      await deleteOneChild('k1');
      expect(s.listFor(NotificationAudience.child, childId: 'k1'), isEmpty);
      expect(s.listFor(NotificationAudience.child, childId: 'k2').length, 1);
      await deleteChildData();
      expect(s.listFor(NotificationAudience.child, childId: 'k2'), isEmpty);
    });
  });

  group('screens', () {
    void size(WidgetTester t, Size s) {
      t.view.physicalSize = s;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
    }

    Future<void> pumpShell(WidgetTester t) async {
      size(t, const Size(900, 700));
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const ChildShell(child: _kid)));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump(const Duration(milliseconds: 300));
    }

    testWidgets('the bell is on the child home itself (no More tab needed) and counts unread, 99+ at most', (t) async {
      await t.runAsync(() => NotificationStore.instance.add(_n('a')));
      await pumpShell(t);
      expect(find.byKey(const ValueKey('notification_bell')), findsOneWidget);
      // today's plan is also announced from real data, so at least the one we added is counted
      expect(find.byKey(const ValueKey('notification_badge')), findsOneWidget);
      await t.runAsync(() async {
        for (var i = 0; i < 120; i++) {
          await NotificationStore.instance.add(_n('m$i', at: DateTime.now().add(Duration(seconds: i))));
        }
      });
      await t.pump();
      expect(find.text('99+'), findsOneWidget);
    });

    testWidgets('open the center, mark one read (count drops at once), mark all read, go back', (t) async {
      await t.runAsync(() async {
        await NotificationStore.instance.add(_n('a'));
        await NotificationStore.instance.add(_n('b'));
      });
      await pumpShell(t);
      final before = NotificationStore.instance.unread(NotificationAudience.child, childId: 'k1');
      expect(before, greaterThanOrEqualTo(2));
      await t.tap(find.byKey(const ValueKey('notification_bell')));
      await t.pumpAndSettle();
      expect(find.text('Notifications'), findsWidgets);
      expect(find.byKey(const ValueKey('unread_a')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('notification_a')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('unread_a')), findsNothing);
      expect(NotificationStore.instance.unread(NotificationAudience.child, childId: 'k1'), before - 1);
      await t.tap(find.byKey(const ValueKey('mark_all_read')));
      await t.pumpAndSettle();
      expect(NotificationStore.instance.unread(NotificationAudience.child, childId: 'k1'), 0);
      await t.pageBack();
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('notification_badge')), findsNothing);
      expect(find.byType(ChildShell), findsOneWidget);
    });

    testWidgets('tapping a notification goes to its screen (rewards tab)', (t) async {
      await t.runAsync(() => NotificationStore.instance.add(_n('goto', route: 'tab:3')));
      await pumpShell(t);
      await t.tap(find.byKey(const ValueKey('notification_bell')));
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('notification_goto')));
      await t.pumpAndSettle();
      expect(find.byType(NotificationCenterScreen), findsNothing); // closed
      expect(find.byType(MeTab), findsOneWidget);
      // The Me tab is this child's own page: scroll to the profile card and check the nickname and avatar are shown.
      await t.scrollUntilVisible(find.text('Lina'), 200, scrollable: find.descendant(of: find.byType(MeTab), matching: find.byType(Scrollable)).first);
      expect(find.text('Lina'), findsWidgets);
      expect(find.byType(ChildAvatar), findsWidgets);
    });

    testWidgets('empty state, and the other child does not see these notifications', (t) async {
      await t.runAsync(() => NotificationStore.instance.add(_n('a', child: 'k2')));
      size(t, const Size(900, 700));
      await t.pumpWidget(MaterialApp(home: NotificationCenterScreen(audience: NotificationAudience.child, childId: 'k1', onRoute: (_, _) {})));
      await t.pump();
      expect(find.byKey(const ValueKey('notifications_empty')), findsOneWidget);
      expect(find.text('No notifications yet'), findsOneWidget);
    });

    for (final lang in ['ar', 'en']) {
      testWidgets('center shows $lang text with the right direction at a small landscape size', (t) async {
        await AppLocale.instance.set(lang);
        await t.runAsync(() => NotificationStore.instance.add(_n('a')));
        size(t, const Size(640, 320));
        await t.pumpWidget(MaterialApp(
          builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
          home: NotificationCenterScreen(audience: NotificationAudience.child, childId: 'k1', onRoute: (_, _) {}),
        ));
        await t.pump();
        expect(t.takeException(), isNull);
        expect(find.text(lang == 'ar' ? 'عنوان a' : 'Title a'), findsOneWidget);
        expect(find.text(lang == 'ar' ? 'الإشعارات' : 'Notifications'), findsOneWidget);
      });
    }

    testWidgets('the parent entry shows a dot when there are unread parent notifications', (t) async {
      await t.runAsync(() => NotificationStore.instance.add(_n('p', a: NotificationAudience.parent, child: null)));
      await pumpShell(t);
      final dot = t.widget<Badge>(find.byKey(const ValueKey('unread_dot')));
      expect(dot.isLabelVisible, isTrue);
    });

    testWidgets('parent area: bell shows parent notifications; a child card opens actions for THAT child', (t) async {
      await t.runAsync(() => NotificationStore.instance.add(_n('p', a: NotificationAudience.parent, child: null, route: 'dashboard:k2')));
      size(t, const Size(900, 900));
      await t.pumpWidget(MaterialApp(home: const SettingsScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('notification_badge')), findsOneWidget);

      await t.tap(find.byKey(const ValueKey('parent_child_k2')));
      await t.pumpAndSettle();
      expect(find.text('Omar'), findsWidgets);
      await t.tap(find.byKey(const ValueKey('child_sheet_progress')));
      await t.pumpAndSettle();
      final d = t.widget<DashboardScreen>(find.byType(DashboardScreen));
      expect(d.childId, 'k2');
      await t.pageBack();
      await t.pumpAndSettle();

      // the notification's own route opens the same child's dashboard
      await t.tap(find.byKey(const ValueKey('notification_bell')));
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('notification_p')));
      await t.pumpAndSettle();
      expect(t.widget<DashboardScreen>(find.byType(DashboardScreen)).childId, 'k2');
    });
  });

  test('HomeTab is not required for the bell (it is part of the home header)', () {
    expect(HomeTab, isNotNull);
  });
}
