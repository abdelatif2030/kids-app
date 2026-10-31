import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/connect_four_game.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/parent_screens.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_portfolio.dart';
import 'package:kids_app/teachers_portfolio_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

void _size(WidgetTester t, Size s) {
  t.view.physicalSize = s;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
}

PortfolioItem _work(String title, String type) => PortfolioItem(
    id: '', teacherUid: '', type: type, title: title, description: 'وصف $title', status: portfolioPublished);

void main() {
  setUp(() {
    AppLocale.instance.set('ar');
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
  });

  group('leave-game confirmation', () {
    Future<void> openGame(WidgetTester t) async {
      _size(t, const Size(900, 1600));
      await t.pumpWidget(MaterialApp(
        home: Builder(
          builder: (c) => Scaffold(
            body: TextButton(
              onPressed: () => Navigator.push(c, MaterialPageRoute(builder: (_) => const ConnectFourGame(childId: 'u1'))),
              child: const Text('open'),
            ),
          ),
        ),
      ));
      await t.tap(find.text('open'));
      await t.pumpAndSettle();
    }

    testWidgets('an untouched game closes at once', (t) async {
      await openGame(t);
      await t.pageBack();
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('leave_game')), findsNothing);
      expect(find.text('open'), findsOneWidget);
    });

    testWidgets('a game in progress asks first; keep playing stays, leave goes back', (t) async {
      await openGame(t);
      await t.tap(find.byKey(const ValueKey('col0')));
      await t.pump();
      await t.pageBack();
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('keep_playing')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('keep_playing')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('turn')), findsOneWidget); // still in the game

      await t.pageBack();
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('leave_game')));
      await t.pumpAndSettle();
      expect(find.text('open'), findsOneWidget);
    });

    testWidgets('Escape on the dialog keeps the child in the game', (t) async {
      await openGame(t);
      await t.tap(find.byKey(const ValueKey('col0')));
      await t.pump();
      await t.pageBack();
      await t.pumpAndSettle();
      await t.sendKeyEvent(LogicalKeyboardKey.escape);
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('leave_game')), findsNothing);
      expect(find.byKey(const ValueKey('turn')), findsOneWidget);
    });
  });

  group('grown-up question before the first PIN', () {
    Future<void> open(WidgetTester t, {required int a, required int b}) async {
      _size(t, const Size(600, 900));
      await t.pumpWidget(MaterialApp(
        home: Builder(
          builder: (c) => Scaffold(
            body: TextButton(onPressed: () => askParentQuestion(c, a: a, b: b), child: const Text('go')),
          ),
        ),
      ));
      await t.tap(find.text('go'));
      await t.pumpAndSettle();
    }

    testWidgets('the right answer passes, a wrong one does not', (t) async {
      await open(t, a: 6, b: 7);
      await t.enterText(find.byKey(const ValueKey('parent_answer')), '41');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('parent_answer')), findsOneWidget); // still asking
      await t.enterText(find.byKey(const ValueKey('parent_answer')), '42');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('parent_answer')), findsNothing);
    });
  });

  group('portfolio filter and preview', () {
    Future<FakeTeacherRepository> seeded(List<PortfolioItem> items) async {
      final repo = FakeTeacherRepository();
      await repo.register(email: 't@x.com', password: '123456', name: 'T', role: UserRole.teacher);
      final uid = repo.currentUser!.uid;
      await repo.saveTeacherProfile(TeacherProfile(uid: uid, name: 'T', bio: 'bio', subjects: const ['arabic'], languages: const ['العربية'], priceNote: '')); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
      for (final i in items) {
        await repo.savePortfolioItem(i);
      }
      return repo;
    }

    Future<void> show(WidgetTester t, FakeTeacherRepository repo) async {
      _size(t, const Size(900, 2000));
      final teacher = (await repo.myTeacherProfile())!;
      await t.pumpWidget(_app(Scaffold(body: SingleChildScrollView(child: PortfolioSection(repo: repo, teacher: teacher)))));
      await t.pumpAndSettle();
    }

    testWidgets('chips appear only when there are several kinds, and filter the list', (t) async {
      final repo = await seeded([_work('ورقة', 'worksheet'), _work('حكاية النجمة', 'story')]);
      await show(t, repo);
      expect(find.byKey(const ValueKey('portfolio_all')), findsOneWidget);
      expect(find.text('ورقة'), findsOneWidget);
      expect(find.text('حكاية النجمة'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('portfolio_story')));
      await t.pumpAndSettle();
      expect(find.text('ورقة'), findsNothing);
      expect(find.text('حكاية النجمة'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('portfolio_all')));
      await t.pumpAndSettle();
      expect(find.text('ورقة'), findsOneWidget);
    });

    testWidgets('one kind only: no chips', (t) async {
      final repo = await seeded([_work('ورقة', 'worksheet'), _work('ورقة 2', 'worksheet')]);
      await show(t, repo);
      expect(find.byKey(const ValueKey('portfolio_all')), findsNothing);
    });

    testWidgets('tapping a work opens the full preview', (t) async {
      final repo = await seeded([_work('ورقة', 'worksheet')]);
      await show(t, repo);
      await t.tap(find.text('ورقة'));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('portfolio_preview')), findsOneWidget);
      expect(find.textContaining('لم يراجعه التطبيق'), findsOneWidget);
    });
  });

  group('tablet landscape games', () {
    testWidgets('wide landscape puts the instruction in a side card; a phone keeps it on top', (t) async {
      _size(t, const Size(1280, 800));
      await t.pumpWidget(_app(const ConnectFourGame(childId: 'u2')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('game_side_instruction')), findsOneWidget);
      expect(t.takeException(), isNull);

      _size(t, const Size(390, 800));
      await t.pumpWidget(_app(const ConnectFourGame(childId: 'u2')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('game_side_instruction')), findsNothing);
    });
  });
}
