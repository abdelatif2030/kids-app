import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'video_fixture.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/demo/demo_mode.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/lessons/lesson_store.dart';
import 'package:kids_app/main.dart' show KidsApp, Video, loadVideos;
import 'package:kids_app/video_controls.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<JourneyStore> freshBrowser() async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final s = JourneyStore(LocalJourneyRepository());
  await s.load();
  JourneyStore.instance = s;
  return s;
}

Future<void> approve(String id) async {
  await LessonStore.markPreviewed(id);
  expect(await LessonStore.setApproved(id, true, checklist: kAllChecked), isTrue);
}

void main() {
  setUp(useArchivedVideos);
  tearDown(resetVideos);
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    DemoMode.overrideForTest(true);
    DemoMode.applyPolicies(); // the demo start-up rule
    await AppLocale.instance.set('ar');
  });
  tearDown(() async {
    DemoMode.overrideForTest(null);
    Video.honourOwnerReview = true;
    await AppLocale.instance.set('ar');
  });

  group('the demo shows only what a parent approved', () {
    test('the owner\'s pre-review flag is ignored in the demo: a new browser shows a child no video at all', () async {
      final s = await freshBrowser();
      final c = await createDemoChild(nickname: 'سلمى', age: 4);
      expect(Video.honourOwnerReview, isFalse);
      expect(await loadVideos(childId: c.id), isEmpty);
      expect(await loadVideos(), isEmpty, reason: 'the active child is the one playing');
      expect((await loadVideos(all: true)).length, greaterThan(100), reason: 'the whole library stays available to the parent');
      expect(s.profiles, hasLength(1));
    });

    test('approve → the child sees it; withdraw → gone; reject → never; reopen and approve again → back', () async {
      await freshBrowser();
      final c = await createDemoChild(nickname: 'سلمى', age: 4);
      final all = await loadVideos(all: true);
      final id = all.first.youtubeId;
      final other = all[1].youtubeId;
      expect(await LessonStore.setApproved(id, true, checklist: kAllChecked), isFalse, reason: 'no approval without a preview');
      await approve(id);
      expect((await loadVideos(childId: c.id)).map((v) => v.youtubeId), [id]);
      await LessonStore.setApproved(id, false);
      expect(await loadVideos(childId: c.id), isEmpty);
      await LessonStore.markPreviewed(other);
      expect(await LessonStore.reject(other, checklist: const [false, false, false, false, false]), isTrue);
      expect(await loadVideos(childId: c.id), isEmpty);
      await approve(id);
      expect((await loadVideos(childId: c.id)).map((v) => v.youtubeId), [id]);
    });

    test('approvals survive a restart of the browser', () async {
      await freshBrowser();
      final c = await createDemoChild(nickname: 'سلمى', age: 4);
      final id = (await loadVideos(all: true)).first.youtubeId;
      await approve(id);
      await VideoControls.setHiddenFor(c.id, 'x-other', true);
      // "restart": new in-memory objects over the same storage
      final s = JourneyStore(LocalJourneyRepository());
      await s.load();
      JourneyStore.instance = s;
      expect((await loadVideos(childId: c.id)).map((v) => v.youtubeId), [id]);
      expect((await VideoControls.hiddenByChild())[c.id], {'x-other'});
    });
  });

  group('control for each child', () {
    test('a video hidden from one child stays visible to the others, and shared hiding still hides it from everybody', () async {
      await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 4);
      final b = await createDemoChild(nickname: 'نور', age: 4);
      final id = (await loadVideos(all: true)).first.youtubeId;
      await approve(id);
      expect((await loadVideos(childId: a.id)).map((v) => v.youtubeId), [id]);
      expect((await loadVideos(childId: b.id)).map((v) => v.youtubeId), [id]);
      await VideoControls.setHiddenFor(b.id, id, true);
      expect((await loadVideos(childId: a.id)).map((v) => v.youtubeId), [id]);
      expect(await loadVideos(childId: b.id), isEmpty);
      expect(await VideoControls.hiddenFor(b.id), contains(id));
      expect(await VideoControls.hiddenFor(a.id), isNot(contains(id)));
      await VideoControls.setHiddenFor(b.id, id, false);
      expect((await loadVideos(childId: b.id)).map((v) => v.youtubeId), [id]);
      await VideoControls.setHidden(id, true);
      expect(await loadVideos(childId: a.id), isEmpty);
      expect(await loadVideos(childId: b.id), isEmpty);
    });

    test('the child who is playing is the one whose list is used', () async {
      final s = await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 4);
      final b = await createDemoChild(nickname: 'نور', age: 4);
      final id = (await loadVideos(all: true)).first.youtubeId;
      await approve(id);
      await VideoControls.setHiddenFor(b.id, id, true);
      await s.setActive(a.id);
      expect(await loadVideos(), hasLength(1));
      await s.setActive(b.id);
      expect(await loadVideos(), isEmpty);
    });

    test('hiding a video from a child can never make an unapproved video visible', () async {
      await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 4);
      final id = (await loadVideos(all: true)).first.youtubeId;
      await VideoControls.setHiddenFor(a.id, id, false);
      expect(await loadVideos(childId: a.id), isEmpty);
    });

    test('deleting a child also forgets what was hidden from them; other children keep theirs', () async {
      await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 4);
      final b = await createDemoChild(nickname: 'نور', age: 4);
      await VideoControls.setHiddenFor(a.id, 'v1', true);
      await VideoControls.setHiddenFor(b.id, 'v2', true);
      await deleteOneChild(a.id);
      final m = await VideoControls.hiddenByChild();
      expect(m.containsKey(a.id), isFalse);
      expect(m[b.id], {'v2'});
    });

    test('damaged hidden-list storage is survived', () async {
      SharedPreferences.setMockInitialValues({VideoControls.childKey: '{oops', VideoControls.key: '[[['});
      expect(await VideoControls.hiddenByChild(), isEmpty);
      expect(await VideoControls.hiddenFor('x'), isEmpty);
    });
  });

  group('the parent screen', () {
    testWidgets('with two children a parent sees "Who sees it?" for an approved video and turns one child off', (t) async {
      await t.runAsync(() async {
        await freshBrowser();
        await createDemoChild(nickname: 'آدم', age: 4);
        await createDemoChild(nickname: 'نور', age: 4);
      });
      t.view.physicalSize = const Size(1000, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final id = (await t.runAsync(() async => (await loadVideos(all: true)).first.youtubeId))!;
      await t.runAsync(() => approve(id));
      await t.pumpWidget(const MaterialApp(home: VideoReviewScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump();
      expect(find.byKey(ValueKey('status_$id')), findsOneWidget);
      final who = find.byKey(ValueKey('who_$id'));
      await t.ensureVisible(who);
      await t.tap(who);
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('who_dialog')), findsOneWidget);
      final profiles = JourneyStore.instance.profiles;
      final b = profiles[1];
      expect(t.widget<SwitchListTile>(find.byKey(ValueKey('who_${id}_${b.id}'))).value, isTrue);
      await t.tap(find.byKey(ValueKey('who_${id}_${b.id}')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pumpAndSettle();
      expect(t.widget<SwitchListTile>(find.byKey(ValueKey('who_${id}_${b.id}'))).value, isFalse);
      await t.tap(find.byKey(const ValueKey('who_done')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pumpAndSettle();
      expect(find.byKey(ValueKey('hiddenfrom_$id')), findsOneWidget);
      expect(find.textContaining(b.nickname), findsWidgets);
      final seenByA = await t.runAsync(() => loadVideos(childId: profiles[0].id));
      final seenByB = await t.runAsync(() => loadVideos(childId: b.id));
      expect(seenByA!.map((v) => v.youtubeId), [id]);
      expect(seenByB, isEmpty);
    });

    testWidgets('with one child there is no per-child button (nothing to choose)', (t) async {
      await t.runAsync(() async {
        await freshBrowser();
        await createDemoChild(nickname: 'آدم', age: 4);
      });
      t.view.physicalSize = const Size(1000, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final id = (await t.runAsync(() async => (await loadVideos(all: true)).first.youtubeId))!;
      await t.runAsync(() => approve(id));
      await t.pumpWidget(const MaterialApp(home: VideoReviewScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump();
      expect(find.byKey(ValueKey('who_$id')), findsNothing);
      expect(find.byKey(ValueKey('unapprove_$id')), findsOneWidget); // withdrawing approval is still there
    });
  });

  group('Arabic and English', () {
    test('a new browser starts in Arabic without asking; the choice is saved and restored', () async {
      SharedPreferences.setMockInitialValues({});
      await AppLocale.instance.load();
      expect(AppLocale.instance.code, 'ar');
      expect(AppLocale.instance.needsChoice, isFalse);
      await AppLocale.instance.set('en');
      expect((await SharedPreferences.getInstance()).getString('ui_lang'), 'en');
      await AppLocale.instance.set('ar'); // simulate a fresh run reading the saved value
      SharedPreferences.setMockInitialValues({'ui_lang': 'en'});
      await AppLocale.instance.load();
      expect(AppLocale.instance.code, 'en');
      await AppLocale.instance.load();
    });

    testWidgets('the demo notice has a one-tap switch that changes the language and the direction of the whole app', (t) async {
      SharedPreferences.setMockInitialValues({});
      await t.runAsync(freshBrowser);
      await t.runAsync(AppLocale.instance.load);
      t.view.physicalSize = const Size(1000, 900);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(const KidsApp());
      await t.pump(const Duration(milliseconds: 600));
      TextDirection dir() => Directionality.of(t.element(find.byKey(const ValueKey('demo_banner'))));
      expect(dir(), TextDirection.rtl);
      expect(find.text('نسخة تجريبية'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('demo_lang')));
      await t.pump(const Duration(milliseconds: 600));
      expect(dir(), TextDirection.ltr);
      expect(find.text('Demo'), findsOneWidget);
      expect(find.textContaining('this browser only'), findsOneWidget);
      expect((await t.runAsync(() => SharedPreferences.getInstance()))!.getString('ui_lang'), 'en');
      await t.tap(find.byKey(const ValueKey('demo_lang')));
      await t.pump(const Duration(milliseconds: 600));
      expect(dir(), TextDirection.rtl);
      expect(find.text('نسخة تجريبية'), findsOneWidget);
    });
  });
}
