import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/call_models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_screens.dart';
import 'package:kids_app/teachers_time.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  s7Tests();
  s2ClientTests();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  group('S4: booking messages cannot carry links, addresses or contact details', () {
    test('the client check is at least as strict as the proposed server rule', () {
      for (final bad in ['see https://evil.example', 'http://x', 'WWW.evil', 'a.com', 'x.NET', 'y.org', 'me@mail', 'go to ://a', 'call 01012345678', 'اتصل ٠١٠١٢٣٤٥٦٧٨', 'mail me a@b.co']) {
        expect(looksLikeContactDetails(bad), isTrue, reason: bad);
      }
      for (final ok in ['Is Tuesday at five fine?', 'See you then.', 'هل يناسبك يوم الثلاثاء؟', 'Bring the number cards, 1 2 3']) {
        expect(looksLikeContactDetails(ok), isFalse, reason: ok);
      }
    });

    test('the client pattern is the same text as the pattern in the proposed rule', () {
      final rule = File('firestore.rules').readAsStringSync(); // applied to the working tree (not published)
      expect(rule, contains('(https?:|www\\\\.|://|\\\\.com|\\\\.net|\\\\.org|@)'));
      expect(kBookingMessageLinkPattern.pattern, r'(https?:|www\.|://|\.com|\.net|\.org|@)');
    });

    test('the Firebase repository checks again before sending (defence in depth)', () {
      final src = File('lib/firebase_repository.dart').readAsStringSync();
      final i = src.indexOf('Future<void> sendMessage');
      expect(src.substring(i, i + 500), contains('looksLikeContactDetails(text)'));
    });
  });

  group('S10: password reset', () {
    Future<void> open(WidgetTester t, FakeTeacherRepository repo) async {
      t.view.physicalSize = const Size(900, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: AuthScreen(repo: repo, onSignedIn: () {})));
      await t.pump();
    }

    testWidgets('"Forgot your password?" asks for a valid address, then gives the same answer whether or not an account exists', (t) async {
      final repo = FakeTeacherRepository();
      await open(t, repo);
      await t.ensureVisible(find.byKey(const ValueKey('auth_forgot')));
      await t.tap(find.byKey(const ValueKey('auth_forgot')));
      await t.pump();
      expect(find.byKey(const ValueKey('auth_error')), findsOneWidget); // no address yet
      expect(repo.resetsSent, isEmpty);
      final email = find.byType(TextField).at(find.byType(TextField).evaluate().length - 2);
      await t.enterText(email, 'nobody@example.com'); // an address with NO account
      await t.tap(find.byKey(const ValueKey('auth_forgot')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('auth_info')), findsOneWidget);
      expect(find.textContaining('If this address has an account'), findsOneWidget);
      expect(repo.resetsSent, ['nobody@example.com']);
    });

    testWidgets('the reset link is not shown while creating an account', (t) async {
      final repo = FakeTeacherRepository();
      await open(t, repo);
      await t.tap(find.text('حساب جديد').evaluate().isNotEmpty ? find.text('حساب جديد') : find.textContaining('New'));
      await t.pump();
      expect(find.byKey(const ValueKey('auth_forgot')), findsNothing);
    });

    test('the Firebase repository sends the reset and the verification e-mails through the Firebase API and hides unknown accounts', () {
      final src = File('lib/firebase_repository.dart').readAsStringSync();
      expect(src, contains('sendPasswordResetEmail'));
      expect(src, contains('sendEmailVerification'));
      expect(src, contains("e.code == 'invalid-email'"));
      expect(src.contains("e.code == 'user-not-found'"), isFalse); // an unknown account is never reported
    });
  });

  test('the auth screen text no longer claims there are no chats (family and booking messages exist, between adults)', () {
    final s = File('lib/teachers_screens.dart').readAsStringSync();
    expect(s.contains('ولا توجد محادثات داخل التطبيق'), isFalse);
    expect(s, contains('Messages are between adults only'));
  });
}

// ---- S7 and the call setup ----
void s7Tests() {
  group('S7: relay servers are pluggable, STUN-only today, never hard-coded credentials', () {
    test('the default list has STUN only and no credentials; TURN is reported as not configured', () async {
      final list = await stunOnlyIceServers();
      expect(list, isNotEmpty);
      for (final s in list) {
        expect(s.keys, ['urls']);
        expect((s['urls'] as String).startsWith('stun:'), isTrue);
      }
      expect(kTurnConfigured, isFalse);
      expect((await iceServersLoader()).length, list.length);
    });

    test('the call engine takes its servers from the loader and the source holds no TURN address or credential', () {
      final engine = File('lib/family/call_engine.dart').readAsStringSync();
      expect(engine, contains("await iceServersLoader()"));
      for (final f in Directory('lib/family').listSync().whereType<File>()) {
        final code = f.readAsLinesSync().where((l) => !l.trimLeft().startsWith('//')).join('\n'); // comments may explain the rule
        expect(code.contains('turn:'), isFalse, reason: f.path);
        expect(code.contains('credential'), isFalse, reason: f.path);
      }
    });
  });
}

void s2ClientTests() {
  group('S2: the app side of teacher approval (matches the rules in the working tree)', () {
    test('applied: the switch is on, a new profile is pending, and the app never approves anyone or lifts a suspension', () {
      expect(kTeachersNeedOwnerApproval, isTrue);
      expect(teacherStatusToWrite(null), teacherStatusPending);
      expect(teacherStatusToWrite(teacherStatusPending), isNull);
      expect(teacherStatusToWrite(teacherStatusApproved), isNull);
      expect(teacherStatusToWrite('suspended'), isNull);
    });

    test('the old behaviour (switch off) stays available for comparison only', () {
      expect(teacherStatusToWrite(null, ownerApproval: false), teacherStatusApproved);
      expect(teacherStatusToWrite(teacherStatusPending, ownerApproval: false), teacherStatusApproved);
      expect(teacherStatusToWrite(teacherStatusApproved, ownerApproval: false), isNull);
    });

    test('the switch matches the rules file in the working tree (create as pending, status unchangeable by the teacher)', () {
      final rules = File('firestore.rules').readAsStringSync();
      expect(rules, contains("request.resource.data.status == 'pending'"));
      expect(rules, contains('request.resource.data.status == resource.data.status'));
      expect(rules.contains("resource.data.status == 'pending' && request.resource.data.status == 'approved'"), isFalse);
    });

    test('the repository uses this function for both a new and an existing profile', () {
      final src = File('lib/firebase_repository.dart').readAsStringSync();
      expect(src, contains('teacherStatusToWrite(existing[\'status\'] as String?)'));
      expect(src, contains('teacherStatusToWrite(null)!'));
    });
  });
}
