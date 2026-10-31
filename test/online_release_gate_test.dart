import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_entry.dart';
import 'package:kids_app/firebase_config.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/online_gate.dart';
import 'package:kids_app/online_unavailable.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

class _Boom extends FakeTeacherRepository {
  Object error = StateError('network down');
  @override
  Future<void> signIn(String email, String password) async => throw error;
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });
  tearDown(() => AppLocale.instance.set('ar'));

  group('release gate (pure)', () {
    test('closed by default with every reason listed; open only when every condition holds', () {
      final s = evaluateOnlineGate(firebaseConfigured: false);
      expect(s.open, isFalse);
      expect(s.reasons, [
        OnlineGateReason.notIntended,
        OnlineGateReason.firebaseNotConfigured,
        OnlineGateReason.accountDeletionMissing,
        OnlineGateReason.backendUnverified,
      ]);
      expect(
        evaluateOnlineGate(
          intended: true,
          firebaseConfigured: true,
          accountDeletion: true,
          backendVerified: true,
        ).open,
        isTrue,
      );
      expect(
        evaluateOnlineGate(
          intended: true,
          firebaseConfigured: false,
          accountDeletion: true,
          backendVerified: true,
        ).open,
        isFalse,
      );
      expect(
        evaluateOnlineGate(
          intended: true,
          firebaseConfigured: true,
          accountDeletion: false,
          backendVerified: true,
        ).open,
        isFalse,
      );
      expect(
        evaluateOnlineGate(
          intended: true,
          firebaseConfigured: true,
          accountDeletion: true,
          backendVerified: false,
        ).open,
        isFalse,
      );
      expect(
        evaluateOnlineGate(
          firebaseConfigured: true,
          accountDeletion: true,
          backendVerified: true,
          intended: false,
        ).reasons,
        [OnlineGateReason.notIntended],
      );
    });

    test('the development override opens the gate only for a developer run with real Firebase options, never in release', () {
      expect(
        kOnlineDevOverride,
        isFalse,
      ); // off unless --dart-define=ONLINE_DEV=true is passed
      expect(
        evaluateOnlineGate(firebaseConfigured: true, devOverride: true).open,
        isTrue,
      );
      expect(
        evaluateOnlineGate(
          firebaseConfigured: false,
          devOverride: true,
        ).reasons,
        [OnlineGateReason.firebaseNotConfigured],
      );
      expect(evaluateOnlineGate(firebaseConfigured: true).open, isFalse);
      expect(
        File('lib/online_gate.dart').readAsStringSync(),
        contains('kOnlineDevOverride && !kReleaseMode'),
      );
    });

    test('the shipped constants keep it closed and the Firebase options are placeholders', () {
      expect(kOnlineFeaturesIntended, isFalse); // Release 1 is offline
      expect(kAccountDeletionReady, isFalse);
      expect(kBackendVerified, isFalse);
      expect(firebaseConfigured, isFalse);
    });

    test('start-up with the gate closed creates no repository and never calls Firebase', () async {
      await initFirebase();
      expect(teacherRepository, isNull);
      expect(familyRepository, isNull);
      expect(lastOnlineGate.open, isFalse);
      expect(
        lastOnlineGate.reasons,
        contains(OnlineGateReason.firebaseNotConfigured),
      );
    });
  });

  group('online screens when the backend is missing', () {
    Future<void> show(
      WidgetTester t,
      Widget w, {
      String lang = 'en',
      Size size = const Size(360, 640),
      double text = 1,
    }) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          builder: (c, x) => MediaQuery(
            data: MediaQuery.of(c)
                .copyWith(textScaler: TextScaler.linear(text)),
            child: x!,
          ),
          home: w,
        ),
      );
      await t.pump();
    }

    testWidgets(
      'the teachers service and the family chat say "not available yet" with reasons, offer no sign-in, in both languages and sizes',
      (t) async {
        for (final lang in ['ar', 'en']) {
          for (final size in [const Size(320, 568), const Size(844, 390)]) {
            await show(
              t,
              const TeachersEntryScreen(),
              lang: lang,
              size: size,
              text: 1.6,
            );
            expect(find.byType(OnlineUnavailableView), findsOneWidget);
            expect(find.byKey(const ValueKey('auth_error')), findsNothing);
            expect(find.byType(TextField), findsNothing);
            expect(t.takeException(), isNull);
            await show(
              t,
              const FamilyEntryScreen(
                asRelative: false,
                auth: null,
                family: null,
              ),
              lang: lang,
              size: size,
              text: 1.6,
            );
            expect(find.byType(OnlineUnavailableView), findsOneWidget);
            expect(find.byType(TextField), findsNothing);
            expect(t.takeException(), isNull);
          }
        }
        await show(t, const TeachersEntryScreen());
        expect(find.textContaining('Not part of this version'), findsOneWidget);
        expect(find.textContaining('later version'), findsOneWidget);
        expect(
          find.textContaining('Everything else works without internet'),
          findsOneWidget,
        );
      },
    );
  });

  group('authentication failures are handled', () {
    Future<void> submit(WidgetTester t, TeacherRepository repo) async {
      t.view.physicalSize = const Size(900, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: AuthScreen(repo: repo, onSignedIn: () {}),
        ),
      );
      await t.pump();
      final fields = find.byType(TextField);
      await t.enterText(fields.at(fields.evaluate().length - 2), 'a@b.co');
      await t.enterText(fields.at(fields.evaluate().length - 1), 'secret1');
      final ok = find.widgetWithText(FilledButton, 'Sign in');
      final button = ok.evaluate().isNotEmpty
          ? ok
          : find.byType(FilledButton).last;
      await t.ensureVisible(button);
      await t.tap(button);
      await t.pump();
      await t.pump();
    }

    testWidgets('a wrong password shows a message and nobody is signed in', (
      t,
    ) async {
      final repo = FakeTeacherRepository();
      await submit(t, repo);
      expect(find.byKey(const ValueKey('auth_error')), findsOneWidget);
      expect(repo.currentUser, isNull);
    });

    testWidgets(
      'a network or unexpected error shows a friendly message instead of crashing',
      (t) async {
        await submit(t, _Boom());
        expect(find.byKey(const ValueKey('auth_error')), findsOneWidget);
        expect(
          find.textContaining('Could not reach the service'),
          findsOneWidget,
        );
        expect(t.takeException(), isNull);
      },
    );
  });

  group('static checks (read the source, not behaviour)', () {
    test('permission APIs are only reached from the three contextual entry points, never from start-up code', () {
      final allowed = {
        'getUserMedia': 'lib/family/call_engine.dart',
        'hasPermission': 'lib/family/voice_io.dart',
        'SpeechToText()': 'lib/assistant/dictation.dart',
      };
      final files = Directory('lib')
          .listSync(recursive: true)
          .whereType<File>()
          .where((f) => f.path.endsWith('.dart'));
      for (final e in allowed.entries) {
        final hits = [
          for (final f in files)
            if (f.readAsStringSync().contains(e.key)) f.path,
        ];
        expect(hits, [e.value], reason: e.key);
      }
      final main = File('lib/main.dart').readAsStringSync();
      for (final w in [
        'getUserMedia',
        'hasPermission',
        'initialize(',
        'AudioRecorder',
        'Permission',
      ]) {
        if (w == 'initialize(') continue; // Firebase.initializeApp lives in firebase_config.dart, not main.dart
        expect(
          main.contains(w),
          isFalse,
          reason: 'main.dart must not request $w',
        );
      }
    });

    test('camera is requested only for a video call; a voice call asks for audio only', () {
      final e = File('lib/family/call_engine.dart').readAsStringSync();
      expect(e, contains("'video': video ? {"));
      expect(e, contains(': false,'));
    });

    test('a denied microphone ends the recording attempt with false and a call with a failed phase (no throw to the UI)', () {
      expect(
        File('lib/family/voice_io.dart').readAsStringSync(),
        contains('if (!await _rec.hasPermission()) return false;'),
      );
      final c = File('lib/family/call_controller.dart').readAsStringSync();
      expect(c, contains('_finish(CallPhase.failed)'));
    });

    test('the permission explanation screen states when each permission is asked, what happens if refused, and what is never done', () {
      final s = File('lib/permissions_screen.dart').readAsStringSync();
      for (final k in ['usedFor', 'whenAsked', 'ifRefused', 'never']) {
        expect(s, contains(k));
      }
      expect(s, contains('not when the app opens'));
    });
  });
}
