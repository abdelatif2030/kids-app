import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media_picker.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_parent.dart' show TeacherDetailScreen;
import 'package:kids_app/teachers_portfolio.dart';
import 'package:kids_app/teachers_portfolio_screens.dart';

import 'fake_teacher_repository.dart';

final _png = base64Decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');

class _Picker implements MediaPicker {
  Object? error;
  @override
  Future<Uint8List?> pickPhoto() async {
    if (error != null) throw error!;
    return _png;
  }

  @override
  Future<CvFile?> pickCv() async => null;
  @override
  Future<void> saveCv(CvFile cv) async {}
}

Widget _app(Widget home) => MaterialApp(key: UniqueKey(), home: home);

PortfolioItem _item({String id = '', String title = 'ورقة الحرف ب', String status = portfolioDraft, String? image}) =>
    PortfolioItem(id: id, teacherUid: '', type: 'worksheet', title: title, description: 'تتبع الحرف', imageB64: image, status: status);

Future<(FakeTeacherRepository, String)> _repoWithTeacher() async {
  final repo = FakeTeacherRepository();
  await repo.register(email: 't@x.com', password: '123456', name: 'Teacher', role: UserRole.teacher);
  final uid = repo.currentUser!.uid;
  await repo.saveTeacherProfile(TeacherProfile(uid: uid, name: 'Teacher', bio: 'bio', subjects: const ['arabic'], languages: const ['العربية'], priceNote: '')); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
  return (repo, uid);
}

Future<void> _asParent(FakeTeacherRepository repo) async {
  await repo.signOut();
  await repo.register(email: 'p@x.com', password: '123456', name: 'Parent', role: UserRole.parent);
}

void main() {
  setUp(() => AppLocale.instance.set('ar'));

  group('validation', () {
    test('an item needs a title and respects the limits', () {
      expect(validatePortfolioItem(_item()), isNull);
      expect(validatePortfolioItem(_item(title: '  ')), isNotNull);
      expect(validatePortfolioItem(_item(title: 'x' * (kPortfolioTitleMax + 1))), isNotNull);
      expect(validatePortfolioItem(_item().copyWith(description: 'x' * (kPortfolioDescriptionMax + 1))), isNotNull);
      expect(validatePortfolioItem(_item().copyWith(type: 'video')), isNotNull);
      expect(validatePortfolioItem(_item(status: portfolioHidden)), isNotNull); // a teacher cannot save hidden
      final big = base64Encode(Uint8List(kPortfolioImageMaxBytes + 1));
      expect(validatePortfolioItem(_item(image: big)), isNotNull);
      expect(validatePortfolioItem(_item(image: base64Encode(_png))), isNull);
    });

    test('the intro video link must be a plain https address', () {
      expect(introVideoLinkOk(''), true);
      expect(introVideoLinkOk('https://example.com/v/1'), true);
      expect(introVideoLinkOk('http://example.com/v'), false);
      expect(introVideoLinkOk('javascript:alert(1)'), false);
      expect(introVideoLinkOk('https://exa mple.com'), false);
      expect(introVideoLinkOk('https://localhost'), false);
      expect(introVideoLinkOk('https://${'a' * kIntroVideoMax}.com'), false);
    });

    test('maps round trip, and unknown values fall back safely', () {
      final i = _item(id: 'a', status: portfolioPublished, image: base64Encode(_png)).copyWith(teacherUid: 't');
      final r = PortfolioItem.fromMap('a', i.toMap());
      expect((r.type, r.title, r.status, r.imageB64, r.teacherUid), ('worksheet', i.title, portfolioPublished, i.imageB64, 't'));
      final odd = PortfolioItem.fromMap('b', {'type': 'weird', 'status': 'weird', 'title': 'x'});
      expect((odd.type, odd.status), ('other', portfolioDraft));
      expect(TeacherProfile.fromMap('u', {'name': 'n', 'introVideoUrl': 'https://a.b/c'}).introVideoUrl, 'https://a.b/c');
      expect(TeacherProfile.fromMap('u', {'name': 'n'}).introVideoUrl, '');
    });
  });

  group('repository rules (fake follows firestore.rules)', () {
    test('parents see published works only; the teacher sees all of their own', () async {
      final (repo, uid) = await _repoWithTeacher();
      await repo.savePortfolioItem(_item(title: 'draft'));
      await repo.savePortfolioItem(_item(title: 'live', status: portfolioPublished));
      expect((await repo.portfolioOf(uid)).length, 2);
      await _asParent(repo);
      expect([for (final i in await repo.portfolioOf(uid)) i.title], ['live']);
    });

    test('a parent cannot add works; one teacher cannot edit or delete another\'s work', () async {
      final (repo, uid) = await _repoWithTeacher();
      await repo.savePortfolioItem(_item(title: 'mine', status: portfolioPublished));
      final id = (await repo.portfolioOf(uid)).single.id;
      await _asParent(repo);
      expect(() => repo.savePortfolioItem(_item()), throwsA(isA<AccountException>()));
      await repo.signOut();
      await repo.register(email: 't2@x.com', password: '123456', name: 'Other', role: UserRole.teacher);
      expect(() => repo.savePortfolioItem(_item(id: id, title: 'hijack')), throwsA(isA<AccountException>()));
      await repo.deletePortfolioItem(id); // not theirs: nothing happens
      await repo.signOut();
      await repo.signIn('t@x.com', '123456');
      expect((await repo.portfolioOf(uid)).single.title, 'mine');
    });

    test('a hidden work stays hidden when the teacher saves it again', () async {
      final (repo, uid) = await _repoWithTeacher();
      await repo.savePortfolioItem(_item(status: portfolioPublished));
      final id = (await repo.portfolioOf(uid)).single.id;
      repo.hideItem(id);
      await repo.savePortfolioItem(_item(id: id, title: 'edited', status: portfolioPublished));
      expect((await repo.portfolioOf(uid)).single.status, portfolioHidden);
      await _asParent(repo);
      expect(await repo.portfolioOf(uid), isEmpty);
    });

    test('a teacher can hold at most $kPortfolioMaxItems items', () async {
      final (repo, _) = await _repoWithTeacher();
      for (var i = 0; i < kPortfolioMaxItems; i++) {
        await repo.savePortfolioItem(_item(title: 'w$i'));
      }
      expect(() => repo.savePortfolioItem(_item(title: 'one too many')), throwsA(isA<AccountException>()));
    });
  });

  group('screens', () {
    testWidgets('a teacher adds a draft, publishes it, and a parent then sees it', (tester) async {
      tester.view.physicalSize = const Size(900, 2200);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      mediaPicker = _Picker();
      addTearDown(() => mediaPicker = DeviceMediaPicker());
      final (repo, uid) = await _repoWithTeacher();

      await tester.pumpWidget(_app(TeacherPortfolioScreen(repo: repo)));
      await tester.pumpAndSettle();
      expect(find.text('لا توجد أعمال بعد.'), findsOneWidget);

      await tester.tap(find.byKey(const ValueKey('add_work')));
      await tester.pumpAndSettle();
      await tester.tap(find.byKey(const ValueKey('work_save')));
      await tester.pump();
      expect(find.text('اكتب عنواناً للعمل'), findsOneWidget); // validation, nothing saved
      await tester.enterText(find.byKey(const ValueKey('work_title')), 'ورقة الحرف ب');
      await tester.tap(find.byKey(const ValueKey('work_image')));
      await tester.pumpAndSettle();
      await tester.tap(find.byKey(const ValueKey('work_save')));
      await tester.pumpAndSettle();
      expect(find.text('ورقة الحرف ب'), findsOneWidget);
      expect(find.text('مسودة'), findsOneWidget);
      await _asParentCheck(repo, uid, expectCount: 0);

      // publish it
      await repo.signOut();
      await repo.signIn('t@x.com', '123456');
      await tester.tap(find.byIcon(Icons.edit_rounded));
      await tester.pumpAndSettle();
      await tester.tap(find.byKey(const ValueKey('work_publish')));
      await tester.pump();
      await tester.tap(find.byKey(const ValueKey('work_save')));
      await tester.pumpAndSettle();
      expect(find.text('منشور'), findsOneWidget);
      await _asParentCheck(repo, uid, expectCount: 1);
    });

    testWidgets('a picture that is too large shows the message and the work is not saved without it', (tester) async {
      final picker = _Picker()..error = const AccountException('الصورة كبيرة، اختر صورة أصغر');
      mediaPicker = picker;
      addTearDown(() => mediaPicker = DeviceMediaPicker());
      final (repo, _) = await _repoWithTeacher();
      await tester.pumpWidget(_app(PortfolioEditScreen(repo: repo)));
      await tester.tap(find.byKey(const ValueKey('work_image')));
      await tester.pump();
      await tester.pump();
      expect(find.text('الصورة كبيرة، اختر صورة أصغر'), findsOneWidget);
    });

    testWidgets('the parent page shows published works and the intro video link, and the link can be copied', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      String? copied;
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, (call) async {
        if (call.method == 'Clipboard.setData') copied = (call.arguments as Map)['text'] as String;
        return null;
      });
      addTearDown(() => tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, null));
      final (repo, uid) = await _repoWithTeacher();
      await repo.saveTeacherProfile(TeacherProfile(
        uid: uid, name: 'Teacher', bio: 'bio', subjects: const ['arabic'], languages: const ['العربية'], priceNote: '',
        introVideoUrl: 'https://example.com/intro',
      )); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
      await repo.savePortfolioItem(_item(title: 'منشور', status: portfolioPublished));
      await repo.savePortfolioItem(_item(title: 'مسودة سرية'));
      final teacher = (await repo.myTeacherProfile())!;
      await _asParent(repo);
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: repo, teacher: teacher)));
      await tester.pumpAndSettle();
      await tester.scrollUntilVisible(find.text('منشور'), 300, scrollable: find.byType(Scrollable).first);
      expect(find.text('منشور'), findsOneWidget);
      expect(find.text('مسودة سرية'), findsNothing);
      expect(find.text('https://example.com/intro'), findsOneWidget);
      await tester.tap(find.byIcon(Icons.copy_rounded));
      await tester.pump();
      expect(copied, 'https://example.com/intro');
      // (the faint background logo is an Image too; it has its own key)
      expect(find.byWidgetPredicate((w) => w is Image && w.key != const ValueKey('bg_logo')), findsNothing); // no autoplay, no player: only the text link
    });

    testWidgets('a teacher\'s preview shows the same page and no booking buttons', (tester) async {
      tester.view.physicalSize = const Size(900, 2600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final (repo, _) = await _repoWithTeacher();
      await repo.savePortfolioItem(_item(title: 'عملي', status: portfolioPublished));
      final teacher = (await repo.myTeacherProfile())!;
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: repo, teacher: teacher, preview: true)));
      await tester.pumpAndSettle();
      await tester.scrollUntilVisible(find.text('عملي'), 300, scrollable: find.byType(Scrollable).first);
      expect(find.text('عملي'), findsOneWidget);
      expect(find.text('اطلب حصة'), findsNothing);
    });
  });
}

Future<void> _asParentCheck(FakeTeacherRepository repo, String uid, {required int expectCount}) async {
  await repo.signOut();
  await repo.register(email: 'px${DateTime.now().microsecondsSinceEpoch}@x.com', password: '123456', name: 'P', role: UserRole.parent);
  expect((await repo.portfolioOf(uid)).length, expectCount);
}
