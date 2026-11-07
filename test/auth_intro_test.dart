import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/auth/account_extras.dart';
import 'package:kids_app/auth/auth_pictures.dart';
import 'package:kids_app/demo/demo_mode.dart';
import 'package:kids_app/design/app_intro.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

Future<void> _show(
  WidgetTester t,
  Widget w, {
  Size size = const Size(1536, 1024),
}) async {
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(
    MaterialApp(
      builder: (c, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: w,
    ),
  );
  await t.pump(const Duration(milliseconds: 300));
}

Rect _r(WidgetTester t, String key) => t.getRect(find.byKey(ValueKey(key)));

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('the intro video', () {
    test(
      'the video and its first frame are bundled and small enough for a phone',
      () {
        final v = File(AppIntro.videoAsset);
        final p = File(AppIntro.posterAsset);
        expect(v.existsSync() && p.existsSync(), isTrue);
        expect(
          v.lengthSync(),
          lessThan(3 * 1024 * 1024),
          reason: 'compressed: the owner file was 9.4 MB',
        );
        final pub = File('pubspec.yaml').readAsStringSync();
        expect(pub, contains(AppIntro.videoAsset));
        expect(pub, contains(AppIntro.posterAsset));
        expect(pub, contains('video_player:'));
        // an MP4 starts with an "ftyp" box
        final head = v.openSync().readSync(12);
        expect(String.fromCharCodes(head.sublist(4, 8)), 'ftyp');
      },
    );

    testWidgets(
      'if the video cannot play the app is not blocked: the code-made intro takes over and then the app opens',
      (t) async {
        AppIntro.forceShow = true;
        AppIntro.resetForTest();
        addTearDown(() {
          AppIntro.forceShow = null;
          AppIntro.resetForTest();
        });
        var failed = false;
        await t.pumpWidget(
          MaterialApp(
            home: IntroVideoLayer(onDone: () {}, onFailed: () => failed = true),
          ),
        );
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 300)),
        );
        await t.pump(const Duration(milliseconds: 300));
        expect(
          failed,
          isTrue,
          reason: 'there is no video player under the test binding: it must report the failure, not hang',
        );
        await t.pumpWidget(const SizedBox());
      },
    );

    testWidgets('the skip button and a tap call onDone', (t) async {
      var done = 0;
      await t.pumpWidget(
        MaterialApp(
          home: IntroVideoLayer(onDone: () => done++, onFailed: () {}),
        ),
      );
      await t.pump();
      await t.tap(find.byKey(const ValueKey('intro_skip')));
      expect(done, 1);
      await t.pumpWidget(const SizedBox());
    });
  });

  group('the demo needs an account: no way around the sign-in', () {
    tearDown(() => DemoMode.overrideForTest(null));

    testWidgets(
      'in the demo neither «continue without an account» nor «register later» is offered',
      (t) async {
        DemoMode.overrideForTest(true);
        await _show(
          t,
          LoginPictureScreen(repo: FakeTeacherRepository(), onDone: () {}),
        );
        expect(find.byKey(const ValueKey('login_skip')), findsNothing);
        expect(find.byKey(const ValueKey('login_create')), findsOneWidget);
        await _show(t, RegisterPictureScreen(repo: FakeTeacherRepository()));
        expect(find.byKey(const ValueKey('register_later')), findsNothing);
        expect(
          find.byKey(const ValueKey('register_email_submit')),
          findsOneWidget,
          reason: 'creating the account is still possible',
        );
      },
    );

    testWidgets(
      'outside the demo both stay (they are part of the offline and test flows)',
      (t) async {
        DemoMode.overrideForTest(false);
        await _show(
          t,
          LoginPictureScreen(repo: FakeTeacherRepository(), onDone: () {}),
        );
        expect(find.byKey(const ValueKey('login_skip')), findsOneWidget);
        await _show(t, RegisterPictureScreen(repo: FakeTeacherRepository()));
        expect(find.byKey(const ValueKey('register_later')), findsOneWidget);
      },
    );
  });

  group('the sign-in page', () {
    testWidgets(
      'fills the whole page upright and sideways: every control is reachable, inside the screen width, and none overlap',
      (t) async {
        const sizes = [
          Size(390, 844),
          Size(844, 390),
          Size(1536, 1024),
          Size(820, 1180),
        ];
        const keys = [
          'login_email',
          'login_password',
          'login_submit',
          'login_google',
          'login_create',
          'login_forgot',
          'login_eye',
          'login_skip',
        ];
        for (final size in sizes) {
          await _show(
            t,
            LoginPictureScreen(repo: FakeTeacherRepository(), onDone: () {}),
            size: size,
          );
          expect(t.takeException(), isNull, reason: '$size');
          // The shell covers the screen: the scenery and the header are there, nothing is left as flat bands.
          expect(find.byKey(const ValueKey('login_picture')), findsOneWidget);
          final rects = <String, Rect>{};
          for (final k in keys) {
            await t.ensureVisible(find.byKey(ValueKey(k)));
            await t.pump();
            rects[k] = _r(t, k);
            expect(
              rects[k]!.left >= 0 && rects[k]!.right <= size.width,
              isTrue,
              reason: '$k at $size',
            );
            if (k == 'login_submit' || k == 'login_google')
              expect(
                rects[k]!.height >= 52,
                isTrue,
                reason: '$k is a big target at $size',
              );
          }
          // (The controls sit in one column inside a scroll view, so they cannot overlap; the page scrolls between them.)
          // Upright, the form uses nearly the whole width (room to look and to write).
          if (size.width < size.height && size.width < 600) {
            expect(
              _r(t, 'login_email').width,
              greaterThan(size.width * 0.58),
              reason: 'wide field upright',
            );
          }
        }
      },
    );

    testWidgets(
      'signing in with the right password calls onDone; a wrong one shows the message and stays',
      (t) async {
        final repo = FakeTeacherRepository();
        await repo.register(
          email: 'mama@example.com',
          password: 'secret1',
          name: 'Mama',
          role: UserRole.parent,
        );
        await repo.signOut();
        var done = 0;
        await _show(t, LoginPictureScreen(repo: repo, onDone: () => done++));
        await t.enterText(
          find.byKey(const ValueKey('login_email')),
          'mama@example.com',
        );
        await t.enterText(
          find.byKey(const ValueKey('login_password')),
          'wrong-password',
        );
        await t.tap(find.byKey(const ValueKey('login_submit')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 300));
        expect(done, 0);
        expect(find.text('البريد أو كلمة المرور غير صحيحة'), findsOneWidget);
        await t.enterText(
          find.byKey(const ValueKey('login_password')),
          'secret1',
        );
        await t.tap(find.byKey(const ValueKey('login_submit')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 300));
        expect(done, 1);
        expect(repo.currentUser?.email, 'mama@example.com');
      },
    );

    testWidgets('empty or malformed input is refused before any request', (
      t,
    ) async {
      final repo = FakeTeacherRepository();
      await _show(t, LoginPictureScreen(repo: repo, onDone: () {}));
      await t.tap(find.byKey(const ValueKey('login_submit')));
      await t.pump();
      expect(find.text('اكتب بريداً إلكترونياً صحيحاً'), findsOneWidget);
      await t.enterText(find.byKey(const ValueKey('login_email')), 'a@b.com');
      await t.enterText(find.byKey(const ValueKey('login_password')), '123');
      await t.tap(find.byKey(const ValueKey('login_submit')));
      await t.pump();
      expect(find.text('كلمة المرور 6 أحرف على الأقل'), findsOneWidget);
      expect(repo.currentUser, isNull);
    });

    testWidgets(
      'Google signs in as a parent; remember me keeps only the e-mail, never the password',
      (t) async {
        final repo = FakeTeacherRepository();
        var done = 0;
        await _show(t, LoginPictureScreen(repo: repo, onDone: () => done++));
        await t.tap(find.byKey(const ValueKey('login_google')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 300));
        expect(done, 1);
        expect(repo.googleSignIns, 1);

        final repo2 = FakeTeacherRepository();
        await repo2.register(
          email: 'mama@example.com',
          password: 'secret1',
          name: 'Mama',
          role: UserRole.parent,
        );
        await repo2.signOut();
        await _show(
          t,
          LoginPictureScreen(key: UniqueKey(), repo: repo2, onDone: () {}),
        );
        await t.tap(find.byKey(const ValueKey('login_remember')));
        await t.pump();
        await t.enterText(
          find.byKey(const ValueKey('login_email')),
          'mama@example.com',
        );
        await t.enterText(
          find.byKey(const ValueKey('login_password')),
          'secret1',
        );
        await t.tap(find.byKey(const ValueKey('login_submit')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 300));
        final p = await SharedPreferences.getInstance();
        expect(p.getString(LoginPictureScreen.rememberKey), 'mama@example.com');
        expect(
          p.getKeys().any(
            (k) => (p.get(k) ?? '').toString().contains('secret1'),
          ),
          isFalse,
        );
      },
    );

    testWidgets(
      'forgot password sends the reset link and says the same thing either way',
      (t) async {
        final repo = FakeTeacherRepository();
        await _show(t, LoginPictureScreen(repo: repo, onDone: () {}));
        await t.tap(find.byKey(const ValueKey('login_forgot')));
        await t.pumpAndSettle();
        await t.enterText(
          find.byKey(const ValueKey('forgot_email')),
          'nobody@example.com',
        );
        await t.tap(find.byKey(const ValueKey('forgot_send')));
        await t.pumpAndSettle();
        expect(repo.resetsSent, ['nobody@example.com']);
        expect(find.textContaining('إن كان للبريد حساب'), findsOneWidget);
      },
    );

    testWidgets(
      '«continue without an account» leaves the page; create account opens the sign-up page',
      (t) async {
        var done = 0;
        await _show(
          t,
          LoginPictureScreen(
            repo: FakeTeacherRepository(),
            onDone: () => done++,
          ),
        );
        await t.tap(find.byKey(const ValueKey('login_create')));
        await t.pumpAndSettle();
        expect(find.byKey(const ValueKey('register_picture')), findsOneWidget);
        await t.tap(find.byKey(const ValueKey('register_back')));
        await t.pumpAndSettle();
        expect(done, 0);
        await t.tap(find.byKey(const ValueKey('login_skip')));
        expect(done, 1);
      },
    );

    testWidgets(
      'with no service (accounts off) it says so instead of failing',
      (t) async {
        await _show(t, LoginPictureScreen(onDone: () {}));
        await t.enterText(find.byKey(const ValueKey('login_email')), 'a@b.com');
        await t.enterText(
          find.byKey(const ValueKey('login_password')),
          'secret1',
        );
        await t.tap(find.byKey(const ValueKey('login_submit')));
        await t.pump();
        expect(find.text('خدمة الحسابات غير متاحة الآن.'), findsOneWidget);
      },
    );
  });

  group('the sign-up page', () {
    testWidgets(
      'nothing is pre-selected; the age stays inside 1 to 6 and shows its real range',
      (t) async {
        await _show(t, RegisterPictureScreen(repo: FakeTeacherRepository()));
        expect(find.text('اختر العمر'), findsOneWidget);
        expect(
          find.text('من 1 إلى 6 سنوات'),
          findsOneWidget,
          reason: 'the painted "2 to 10" was erased: the real range is shown',
        );
        // left arrow: older; right arrow: younger
        for (var i = 0; i < 9; i++) {
          await t.tap(find.byKey(const ValueKey('register_age_up')));
        }
        await t.pump();
        expect(find.text('6 سنوات'), findsOneWidget);
        for (var i = 0; i < 9; i++) {
          await t.tap(find.byKey(const ValueKey('register_age_down')));
        }
        await t.pump();
        expect(find.text('1 سنة'), findsOneWidget);
        await t.tap(find.byKey(const ValueKey('register_age_up')));
        await t.pump();
        expect(find.text('2 سنتان'), findsOneWidget);
      },
    );

    testWidgets(
      'creating an account by e-mail needs a name, a valid e-mail and a password; extras stay on the device',
      (t) async {
        final repo = FakeTeacherRepository();
        await _show(t, RegisterPictureScreen(repo: repo));
        await t.tap(find.byKey(const ValueKey('register_email_submit')));
        await t.pump();
        expect(find.text('اكتب اسمك'), findsOneWidget);
        await t.enterText(
          find.byKey(const ValueKey('register_name')),
          'ماما سلمى',
        );
        await t.enterText(
          find.byKey(const ValueKey('register_email')),
          'salma@example.com',
        );
        await t.enterText(
          find.byKey(const ValueKey('register_password')),
          'secret1',
        );
        await t.enterText(
          find.byKey(const ValueKey('register_city')),
          'القاهرة',
        );
        await t.tap(find.byKey(const ValueKey('register_girl')));
        await t.tap(find.byKey(const ValueKey('register_age_up')));
        await t.tap(find.byKey(const ValueKey('register_age_up')));
        await t.pump();
        await t.runAsync(() async {
          await t.tap(find.byKey(const ValueKey('register_email_submit')));
          await Future<void>.delayed(const Duration(milliseconds: 200));
        });
        await t.pump(const Duration(milliseconds: 400));
        expect(repo.currentUser?.email, 'salma@example.com');
        final extras = await t.runAsync(AccountExtras.load);
        expect(extras!.gender, 'girl');
        expect(extras.age, 2);
        expect(extras.city, 'القاهرة');
      },
    );

    testWidgets(
      'a boy can be chosen, and choosing the same card again clears it',
      (t) async {
        await _show(t, RegisterPictureScreen(repo: FakeTeacherRepository()));
        await t.tap(find.byKey(const ValueKey('register_boy')));
        await t.pump();
        expect(find.byIcon(Icons.check_rounded), findsOneWidget);
        await t.tap(find.byKey(const ValueKey('register_boy')));
        await t.pump();
        expect(find.byIcon(Icons.check_rounded), findsNothing);
      },
    );

    testWidgets(
      '«register later» and the back arrow leave the page; Gmail registers a parent',
      (t) async {
        final repo = FakeTeacherRepository();
        bool? result;
        await _show(
          t,
          Builder(
            builder: (context) => TextButton(
              onPressed: () async => result = await Navigator.push<bool>(
                context,
                MaterialPageRoute<bool>(
                  builder: (_) => RegisterPictureScreen(repo: repo),
                ),
              ),
              child: const Text('open'),
            ),
          ),
        );
        await t.tap(find.text('open'));
        await t.pumpAndSettle();
        await t.tap(find.byKey(const ValueKey('register_back')));
        await t.pumpAndSettle();
        expect(result, false);
        await t.tap(find.text('open'));
        await t.pumpAndSettle();
        await t.tap(find.byKey(const ValueKey('register_later')));
        await t.pumpAndSettle();
        expect(result, true);
        expect(
          repo.currentUser,
          isNull,
          reason: 'registering later creates nothing',
        );
        await t.tap(find.text('open'));
        await t.pumpAndSettle();
        await t.tap(find.byKey(const ValueKey('register_google')));
        await t.pumpAndSettle();
        expect(result, true);
        expect(repo.googleSignIns, 1);
      },
    );
  });

  group('account extras', () {
    test('are cleaned: gender is one of two ids, age 1 to 6, city trimmed and shortened; nothing is sent anywhere', () async {
      final e = AccountExtras.clean(
        gender: 'x',
        age: 99,
        city: '  ${'م' * 80}  ',
      );
      expect(e.gender, isNull);
      expect(e.age, 6);
      expect(e.city!.runes.length, AccountExtras.maxCity);
      await e.save();
      final back = await AccountExtras.load();
      expect(back.age, 6);
      await AccountExtras.clear();
      expect((await AccountExtras.load()).isEmpty, isTrue);
      // the file only uses shared_preferences: no network package
      final src = File('lib/auth/account_extras.dart').readAsStringSync();
      expect(src.contains('http'), isFalse);
      expect(src.contains('firebase'), isFalse);
    });
  });

  group('what opens after the intro', () {
    testWidgets(
      'with accounts off (Release 1) the start screen is the first page; with accounts on and nobody signed in it is the sign-in page',
      (t) async {
        await t.pumpWidget(const MaterialApp(home: AuthGate(showLogin: false)));
        await t.pump();
        expect(find.byType(StartScreen), findsOneWidget);
        expect(find.byType(LoginPictureScreen), findsNothing);
        await t.pumpWidget(
          MaterialApp(
            home: AuthGate(
              key: UniqueKey(),
              showLogin: true,
              repo: FakeTeacherRepository(),
            ),
          ),
        );
        await t.pump();
        expect(find.byType(LoginPictureScreen), findsOneWidget);
        await t.ensureVisible(find.byKey(const ValueKey('login_skip')));
        await t.tap(find.byKey(const ValueKey('login_skip')));
        await t.pump();
        expect(find.byType(StartScreen), findsOneWidget);
      },
    );

    test('the two pictures are bundled with their placeholders erased and the right size', () {
      for (final f in ['assets/auth/login.jpg', 'assets/auth/register.jpg']) {
        final b = File(f).readAsBytesSync();
        expect(b.length, greaterThan(100 * 1024), reason: f);
        expect(File('pubspec.yaml').readAsStringSync(), contains(f));
      }
    });
  });

  group('straight to the home page after sign-in', () {
    Future<JourneyStore> store(
      WidgetTester t, {
      List<ChildProfile> children = const [],
    }) async {
      FlutterSecureStorage.setMockInitialValues({});
      final st = JourneyStore(LocalJourneyRepository());
      await t.runAsync(() async {
        await st.load();
        for (final c in children) {
          await st.addProfile(c);
        }
      });
      JourneyStore.instance = st;
      return st;
    }

    Future<void> pumpEntry(WidgetTester t, {bool autoEnter = true}) async {
      t.view.physicalSize = const Size(1000, 700);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          builder: (c, child) =>
              Directionality(textDirection: TextDirection.rtl, child: child!),
          home: HomeEntry(autoEnter: autoEnter),
        ),
      );
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 250)),
      );
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      await t.pump(const Duration(milliseconds: 400));
    }

    testWidgets(
      'one child already exists: the sign-in (or skipping it) lands in that child\'s home with nothing in between',
      (t) async {
        await store(
          t,
          children: const [ChildProfile(id: 'k1', nickname: 'سلمى', age: 4)],
        );
        await pumpEntry(t);
        expect(find.byType(ChildShell), findsOneWidget);
        expect(
          find.byKey(const ValueKey('picture_home')),
          findsOneWidget,
          reason: 'the owner home picture',
        );
      },
    );

    testWidgets(
      'no child but the sign-up gave an age: the child is made from it and the home opens',
      (t) async {
        final st = await store(t);
        await t.runAsync(
          () => const AccountExtras(gender: 'girl', age: 3).save(),
        );
        await pumpEntry(t);
        expect(st.profiles.length, 1);
        expect(st.profiles.single.age, 3);
        expect(st.profiles.single.gender, 'girl');
        expect(st.profiles.single.nickname, 'بطلتنا');
        expect(find.byType(ChildShell), findsOneWidget);
      },
    );

    testWidgets(
      'a new person with no child and no age (for example after Google sign-in): a child is made at once (age 4) and the home opens, never the old start page',
      (t) async {
        final st = await store(t);
        await pumpEntry(t);
        expect(st.profiles.length, 1);
        expect(st.profiles.single.age, 4);
        expect(find.byType(ChildShell), findsOneWidget);
        expect(find.byType(StartScreen), findsNothing);
      },
    );

    testWidgets(
      'several children: the demo opens the one played last (or the first) at once; outside the demo the start page is always first',
      (t) async {
        await store(
          t,
          children: const [
            ChildProfile(id: 'a', nickname: 'أ', age: 3),
            ChildProfile(id: 'b', nickname: 'ب', age: 5),
          ],
        );
        await pumpEntry(t);
        expect(find.byType(ChildShell), findsOneWidget);
        expect(find.byType(StartScreen), findsNothing);
        await store(
          t,
          children: const [ChildProfile(id: 'k1', nickname: 'سلمى', age: 4)],
        );
        await pumpEntry(t, autoEnter: false);
        expect(
          find.byType(ChildShell),
          findsNothing,
          reason: 'Release 1: a parent starts child mode',
        );
        expect(find.byType(StartScreen), findsOneWidget);
      },
    );

    test(
      'the nickname is friendly and the old logo is gone from the start page',
      () {
        expect(HomeEntry.nicknameFor('girl'), 'بطلتنا');
        expect(HomeEntry.nicknameFor('boy'), 'بطلنا');
        expect(HomeEntry.nicknameFor(null), 'صغيري');
        expect(
          File('lib/journey/ui/start_screen.dart')
              .readAsStringSync()
              .contains('AppLogo('),
          isFalse,
        );
        final html = File('web/index.html').readAsStringSync();
        expect(html, contains('splash.jpg'));
        expect(
          File('web/splash.js').readAsStringSync(),
          contains('flutter-first-frame'),
        );
        expect(
          html.contains('<script>'),
          isFalse,
          reason: 'the page headers forbid inline scripts',
        );
      },
    );
  });
}
