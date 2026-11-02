import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/demo/demo_mode.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/online_gate.dart';
import 'package:kids_app/progress_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// A fresh run of the app on the SAME browser storage: a new store object that reads what the last run saved.
Future<JourneyStore> restart() async {
  final s = JourneyStore(LocalJourneyRepository());
  await s.load();
  JourneyStore.instance = s;
  return s;
}

Future<JourneyStore> freshBrowser([Map<String, Object> initial = const {}]) async {
  SharedPreferences.setMockInitialValues({...initial});
  FlutterSecureStorage.setMockInitialValues({});
  return restart();
}

Widget app() => MaterialApp(
      key: UniqueKey(),
      builder: (c, w) => Directionality(textDirection: TextDirection.rtl, child: w!),
      home: const StartScreen(),
    );

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    await AppLocale.instance.set('ar');
    DemoMode.overrideForTest(true);
  });
  tearDown(() async {
    DemoMode.overrideForTest(null);
    await AppLocale.instance.set('ar');
  });

  group('creating and selecting children', () {
    test('a child needs a nickname of 1 to 12 letters; the age is kept inside 1 to 6', () async {
      expect(validateDemoNickname('   '), isNotNull);
      expect(validateDemoNickname('سلمى'), isNull);
      expect(validateDemoNickname('abcdefghijklm'), isNotNull);
      final s = await freshBrowser();
      final c = await createDemoChild(nickname: '  سلمى ', age: 9, avatar: 'g1');
      expect(c.nickname, 'سلمى');
      expect(c.age, 6, reason: 'the demo is for ages 1 to 6 only');
      expect(c.avatar, 'g1');
      expect(c.hasPhoto, isFalse);
      expect(c.birth, isNull);
      expect(c.gender, isNull);
      expect(s.profiles.single.id, c.id);
      expect(s.activeId, c.id);
      expect((await createDemoChild(nickname: 'x', age: 0)).age, 1);
    });

    test('several children can be made and selected without mixing them up', () async {
      final s = await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 3);
      final b = await createDemoChild(nickname: 'نور', age: 5);
      expect(s.profiles.map((p) => p.nickname), ['آدم', 'نور']);
      expect(s.activeId, b.id, reason: 'the child just made is the one playing');
      await s.setActive(a.id);
      expect(s.active!.nickname, 'آدم');
      expect(a.id, isNot(b.id));
    });
  });

  group('what the browser keeps', () {
    test('profiles, the selected child, game stars and skill results survive a restart, and each child keeps their own', () async {
      var s = await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 3);
      final b = await createDemoChild(nickname: 'نور', age: 5);
      await s.setActive(a.id);
      expect(await GameRewards.complete(a.id, 'numerals'), isTrue);
      await GameRewards.complete(b.id, 'maze');
      await ProgressStore.record('counting', true, childId: a.id);
      await ProgressStore.record('counting', false, childId: b.id);

      s = await restart(); // close the browser and open it again
      expect(s.profiles.map((p) => p.nickname), ['آدم', 'نور']);
      expect(s.activeId, a.id);
      expect(await GameRewards.isDone(a.id, 'numerals'), isTrue);
      expect(await GameRewards.isDone(a.id, 'maze'), isFalse, reason: 'that was the other child\'s game');
      expect(await GameRewards.isDone(b.id, 'maze'), isTrue);
      final ev = await ProgressStore.load();
      expect([for (final e in ev) if (e.childId == a.id) e.ok], [true]);
      expect([for (final e in ev) if (e.childId == b.id) e.ok], [false]);
    });

    test('a first completion earns the star once, also after a restart; another child still earns theirs', () async {
      await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 4);
      final b = await createDemoChild(nickname: 'نور', age: 4);
      expect(await GameRewards.complete(a.id, 'jigsaw'), isTrue);
      expect(await GameRewards.complete(a.id, 'jigsaw'), isFalse);
      await restart();
      expect(await GameRewards.complete(a.id, 'jigsaw'), isFalse, reason: 'no duplicate star after reopening');
      expect(await GameRewards.complete(b.id, 'jigsaw'), isTrue);
      expect(await GameRewards.doneIds(a.id), {'jigsaw'});
    });

    test('a completed journey activity and its stars persist and stay with their child', () async {
      var s = await freshBrowser();
      final a = await createDemoChild(nickname: 'آدم', age: 5);
      final b = await createDemoChild(nickname: 'نور', age: 5);
      await s.recordAttempt(Attempt(childId: a.id, activityId: 'x1', day: dayKeyOf(DateTime.now()), total: 5, firstTry: 5, seconds: 30, stars: 3));
      expect(s.progressOf(a.id).totalStars, 3);
      s = await restart();
      expect(s.progressOf(a.id).totalStars, 3);
      expect(s.progressOf(b.id).totalStars, 0);
    });
  });

  group('damaged or incompatible storage', () {
    test('garbage never crashes the app: it starts empty and the stars still work', () async {
      final s = await freshBrowser({
        'rj_profiles': '{not json',
        'rj_active': 'ghost-child',
        'rj_attempts': '[1,2,"x"]',
        'game_completions': '[[[',
        'skill_events': 'null',
        'rj_settings': 'oops',
      });
      expect(s.profiles, isEmpty);
      expect(s.activeId, isNull);
      expect(await GameRewards.isDone('any', 'maze'), isFalse);
      expect(await ProgressStore.load(), isEmpty);
      final c = await createDemoChild(nickname: 'سلمى', age: 4);
      expect(await GameRewards.complete(c.id, 'maze'), isTrue);
    });

    test('one unreadable profile is skipped and the good one is kept', () async {
      final good = const ChildProfile(id: 'g', nickname: 'جيد', age: 4).toJson();
      final s = await freshBrowser({
        'rj_profiles': '[${_json(good)}, {"id": 7, "age": "old"}, "nonsense"]',
      });
      expect(s.profiles.map((p) => p.nickname), ['جيد']);
    });

    test('an active child that no longer exists is forgotten', () async {
      final s = await freshBrowser({'rj_profiles': '[${_json(const ChildProfile(id: 'g', nickname: 'جيد', age: 4).toJson())}]', 'rj_active': 'deleted'});
      expect(s.activeId, isNull);
      expect(s.profiles, hasLength(1));
    });
  });

  group('screens', () {
    testWidgets('first visit: the demo notice is shown, no PIN or account is asked, and a child is made in one short form', (t) async {
      await t.runAsync(freshBrowser);
      t.view.physicalSize = const Size(1000, 900);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(app());
      await t.pump();
      expect(find.byKey(const ValueKey('demo_banner')), findsOneWidget);
      expect(find.textContaining('في هذا المتصفح'), findsWidgets);
      await t.tap(find.byType(FilledButton).first);
      await t.pumpAndSettle(const Duration(milliseconds: 100));
      expect(find.byType(OnboardingFlow), findsNothing);
      // exactly one text field (the nickname): no e-mail, no password, no phone
      expect(find.byType(TextField), findsOneWidget);
      // an empty name is not accepted
      await t.ensureVisible(find.byKey(const ValueKey('demo_start')));
      await t.tap(find.byKey(const ValueKey('demo_start')));
      await t.pump();
      expect(find.text('اكتب اسماً مستعاراً'), findsOneWidget);
      await t.enterText(find.byKey(const ValueKey('demo_nickname')), 'سلمى');
      await t.tap(find.byKey(const ValueKey('demo_age_3')));
      await t.pump();
      await t.ensureVisible(find.byKey(const ValueKey('demo_avatar_g2')));
      await t.tap(find.byKey(const ValueKey('demo_avatar_g2')));
      await t.pump();
      await t.ensureVisible(find.byKey(const ValueKey('demo_start')));
      await t.tap(find.byKey(const ValueKey('demo_start')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump(const Duration(milliseconds: 600));
      final p = JourneyStore.instance.profiles.single;
      expect([p.nickname, p.age, p.avatar], ['سلمى', 3, 'g2']);
      expect(find.byType(ChildShell), findsOneWidget, reason: 'the child goes straight into the app');
    });

    testWidgets('a returning visitor sees the saved children, picks one, and can add another without a PIN', (t) async {
      await t.runAsync(() async {
        await freshBrowser();
        await createDemoChild(nickname: 'آدم', age: 3);
        await createDemoChild(nickname: 'نور', age: 5);
        await restart();
      });
      t.view.physicalSize = const Size(1000, 900);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(app());
      await t.pump();
      expect(find.text('آدم'), findsOneWidget);
      expect(find.text('نور'), findsOneWidget);
      expect(find.byKey(const ValueKey('demo_banner')), findsOneWidget);
      await t.tap(find.text('إضافة طفل'));
      await t.pumpAndSettle(const Duration(milliseconds: 100));
      expect(find.byKey(const ValueKey('demo_nickname')), findsOneWidget);
    });

    testWidgets('erasing the demo: a grown-up question, then a plain warning; saying no keeps everything, yes wipes it all', (t) async {
      await t.runAsync(() async {
        await freshBrowser();
        final c = await createDemoChild(nickname: 'آدم', age: 3);
        await GameRewards.complete(c.id, 'maze');
        await ProgressStore.record('counting', true, childId: c.id);
      });
      t.view.physicalSize = const Size(1000, 900);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      late BuildContext ctx;
      await t.pumpWidget(MaterialApp(home: Builder(builder: (c) {
        ctx = c;
        return const Scaffold(body: DemoBanner());
      })));
      // a wrong grown-up answer stops everything
      var done = false;
      unawaited(confirmAndResetDemo(ctx, a: 6, b: 7).then((v) => done = v));
      await t.pumpAndSettle();
      await t.enterText(find.byKey(const ValueKey('parent_answer')), '1');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pump();
      expect(find.byKey(const ValueKey('demo_reset_dialog')), findsNothing, reason: 'a wrong answer goes no further');
      await t.tapAt(const Offset(5, 5)); // dismiss
      await t.pumpAndSettle();
      expect(done, isFalse);
      // right answer, then "no, go back"
      unawaited(confirmAndResetDemo(ctx, a: 6, b: 7).then((v) => done = v));
      await t.pumpAndSettle();
      await t.enterText(find.byKey(const ValueKey('parent_answer')), '42');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('demo_reset_dialog')), findsOneWidget);
      expect(find.textContaining('لا يمكن التراجع'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('demo_reset_cancel')));
      await t.pumpAndSettle();
      expect(done, isFalse);
      expect(JourneyStore.instance.profiles, hasLength(1));
      // right answer, then yes
      unawaited(confirmAndResetDemo(ctx, a: 6, b: 7).then((v) => done = v));
      await t.pumpAndSettle();
      await t.enterText(find.byKey(const ValueKey('parent_answer')), '42');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('demo_reset_confirm')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump();
      expect(done, isTrue);
      final s = await t.runAsync(restart);
      expect(s!.profiles, isEmpty);
      expect(await t.runAsync(() => GameRewards.doneIds('x')), isEmpty);
      expect(await t.runAsync(ProgressStore.load), isEmpty);
      expect(AppLocale.instance.code, 'ar', reason: 'the chosen language stays');
    });
  });

  test('the reset also clears what the normal data deletion used to miss (game stars)', () async {
    await freshBrowser();
    final c = await createDemoChild(nickname: 'آدم', age: 3);
    await GameRewards.complete(c.id, 'maze');
    await resetDemoData();
    await restart();
    expect(await GameRewards.isDone(c.id, 'maze'), isFalse);
    expect(JourneyStore.instance.profiles, isEmpty);
  });

  test('the demo keeps every online feature off and says honestly what it is not', () {
    expect(kOnlineFeaturesIntended, isFalse);
    expect(evaluateOnlineGate(firebaseConfigured: true).open, isFalse);
    final text = demoNoticeText();
    expect(text, contains('في هذا المتصفح'));
    expect(text, contains('لا حسابات'));
    expect(text, contains('مزامنة'));
  });

  test('web/_headers keeps the deployed demo talking only to itself (plus fonts and YouTube thumbnails and frames)', () {
    final text = File('web/_headers').readAsStringSync();
    final csp = RegExp(r'Content-Security-Policy: (.*)').firstMatch(text)!.group(1)!;
    expect(csp, contains("default-src 'self'"));
    expect(csp, contains("script-src 'self' 'wasm-unsafe-eval'"), reason: 'no third-party script may run');
    expect(csp, isNot(contains('accounts.google.com')));
    expect(csp, isNot(contains('*')));
    expect(csp, contains("object-src 'none'"));
    expect(csp, contains("frame-ancestors 'none'"));
    final connect = RegExp(r"connect-src ([^;]*)").firstMatch(csp)!.group(1)!;
    expect(connect, isNot(contains('firebase')), reason: 'no backend');
    expect(connect, isNot(contains('googleapis')));
    final hosts = RegExp(r'https://[a-z0-9.-]+').allMatches(csp).map((m) => m.group(0)).toSet();
    expect(hosts, {'https://img.youtube.com', 'https://i3.ytimg.com', 'https://fonts.gstatic.com', 'https://www.youtube-nocookie.com', 'https://www.youtube.com'});
    expect(text, contains('microphone=()'), reason: 'the browser speech service would send audio to a third party');
    expect(text, contains('camera=()'));
    expect(text, contains('Referrer-Policy: no-referrer'));
  });

  test('demo login opens only the accounts door, never family chat, and is off in every normal build', () {
    expect(kDemoLogin, isFalse, reason: 'normal builds and tests never enable it');
    expect(evaluateOnlineGate(firebaseConfigured: true, demoLogin: true).open, isTrue);
    expect(evaluateOnlineGate(firebaseConfigured: false, demoLogin: true).open, isFalse, reason: 'needs real config');
    expect(evaluateOnlineGate(firebaseConfigured: true).open, isFalse);
    final src = File('lib/firebase_config.dart').readAsStringSync();
    expect(src, contains('if (!kDemoLogin) familyRepository = FirebaseFamilyRepository();'));
    expect(demoNoticeText(login: true), isNot(contains('لا حسابات')));
    expect(demoNoticeText(login: true), contains('اختياري'));
  });

  test('tool/headers_login allows only the Firebase/Google hosts login needs, no analytics, no wildcard', () {
    final text = File('tool/headers_login').readAsStringSync();
    final csp = RegExp(r'Content-Security-Policy: (.*)').firstMatch(text)!.group(1)!;
    expect(csp, isNot(contains('*')));
    expect(csp, contains("object-src 'none'"));
    expect(csp, contains("frame-ancestors 'none'"));
    expect(csp, isNot(contains('analytics')));
    expect(csp, isNot(contains('googletagmanager')));
    final headerLines = text.split('\n').where((l) => !l.trimLeft().startsWith('#')).join('\n');
    expect(headerLines, isNot(contains('Cross-Origin-Opener-Policy')), reason: 'would break the Google popup');
    expect(text, contains('microphone=()'));
    final hosts = RegExp(r'https://[a-z0-9.-]+').allMatches(csp).map((m) => m.group(0)).toSet();
    expect(hosts, {
      'https://img.youtube.com', 'https://i3.ytimg.com', 'https://lh3.googleusercontent.com', 'https://fonts.gstatic.com',
      'https://www.youtube-nocookie.com', 'https://www.youtube.com', 'https://apis.google.com', 'https://www.gstatic.com',
      'https://identitytoolkit.googleapis.com', 'https://securetoken.googleapis.com', 'https://firestore.googleapis.com',
      'https://firebaseinstallations.googleapis.com', 'https://www.googleapis.com', 'https://kids-app-2361e.firebaseapp.com',
      'https://accounts.google.com',
    });
  });

  shortScreenTests();

  test('English notice says the same, and promises no cloud backup', () async {
    await AppLocale.instance.set('en');
    final text = demoNoticeText();
    expect(text, contains('this browser only'));
    expect(text, contains('No accounts, no cloud backup'));
  });
}

String _json(Map<String, dynamic> m) => jsonEncode(m);

void shortScreenTests() {
  testWidgets('the start button of the child form is always on screen, also on a short phone held sideways', (t) async {
    DemoMode.overrideForTest(true);
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    await t.runAsync(restart);
    addTearDown(() {
      t.view.reset();
      DemoMode.overrideForTest(null);
    });
    for (final size in [const Size(640, 360), const Size(852, 393), const Size(932, 430), const Size(1024, 768)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const DemoCreateChildScreen()));
      await t.pump();
      final r = t.getRect(find.byKey(const ValueKey('demo_start')));
      expect(r.bottom, lessThanOrEqualTo(size.height), reason: 'at $size');
      expect(r.top, greaterThanOrEqualTo(0));
      expect(r.height, greaterThanOrEqualTo(56));
    }
  });

  testWidgets('on a phone held sideways the begin button is on the first screen without scrolling', (t) async {
    DemoMode.overrideForTest(true);
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    await t.runAsync(restart);
    for (final size in [const Size(640, 360), const Size(852, 393), const Size(932, 430)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(app());
      await t.pump();
      final btn = t.getRect(find.byType(FilledButton).first);
      expect(btn.bottom, lessThanOrEqualTo(size.height), reason: 'the begin button is cut off at $size');
      expect(btn.height, greaterThanOrEqualTo(56));
    }
    addTearDown(() {
      t.view.reset();
      DemoMode.overrideForTest(null);
    });
  });
}
