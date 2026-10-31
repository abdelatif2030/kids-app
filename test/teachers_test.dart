import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/media_picker.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_screens.dart';

import 'fake_teacher_repository.dart';

// A fresh key each time, so routes pushed in an earlier step do not survive.
// A 1x1 PNG, so the photo can really be decoded.
final _png = base64Decode(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');

class FakeMediaPicker implements MediaPicker {
  String? savedCvName;
  Object? photoError;

  @override
  Future<Uint8List?> pickPhoto() async {
    if (photoError != null) throw photoError!;
    return _png;
  }

  @override
  Future<CvFile?> pickCv() async => CvFile('cv.pdf', Uint8List.fromList([1, 2, 3]));

  @override
  Future<void> saveCv(CvFile cv) async => savedCvName = cv.name;
}

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Finder _field(String label) => find.widgetWithText(TextField, label);

Future<void> _open(WidgetTester tester, FakeTeacherRepository repo) async {
  await tester.pumpWidget(_app(TeachersEntryScreen(repo: repo)));
  await tester.pumpAndSettle();
}

Future<void> _register(
  WidgetTester tester, {
  required String name,
  required String email,
  required bool teacher,
}) async {
  await tester.tap(find.text('حساب جديد'));
  await tester.pumpAndSettle();
  if (teacher) {
    await tester.tap(find.byKey(const ValueKey('role_teacher')));
    await tester.pumpAndSettle();
  }
  await tester.enterText(_field('الاسم'), name);
  await tester.enterText(_field('البريد الإلكتروني'), email);
  await tester.enterText(_field('كلمة المرور'), '123456');
  await tester.tap(find.text('إنشاء الحساب'));
  await tester.pumpAndSettle();
}

void main() {
  testWidgets('not available: explains that the online service is not connected yet, and offers no sign-in', (tester) async {
    await tester.pumpWidget(_app(const TeachersEntryScreen()));
    expect(find.textContaining('غير متاح في هذا الإصدار'), findsOneWidget);
    expect(find.textContaining('ستأتي في إصدار لاحق'), findsOneWidget); // Release 1 is offline
    expect(find.byType(TextField), findsNothing);
  });

  testWidgets('sign-in validates input and shows the repository error', (tester) async {
    final repo = FakeTeacherRepository();
    await _open(tester, repo);

    await tester.tap(find.text('دخول').last);
    await tester.pump();
    expect(find.text('اكتب بريداً إلكترونياً صحيحاً'), findsOneWidget);

    await tester.enterText(_field('البريد الإلكتروني'), 'nobody@example.com');
    await tester.enterText(_field('كلمة المرور'), '123456');
    await tester.tap(find.widgetWithText(FilledButton, 'دخول'));
    await tester.pumpAndSettle();
    expect(find.text('البريد أو كلمة المرور غير صحيحة'), findsOneWidget);
  });

  testWidgets('teacher pending until the owner approves -> parent report and request -> teacher accepts -> link',
      (tester) async {
    // A tall screen so the whole profile form is on screen.
    tester.view.physicalSize = const Size(800, 2000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final repo = FakeTeacherRepository();
    final picker = FakeMediaPicker();
    mediaPicker = picker;

    // 1. A teacher registers and creates a profile. It stays pending: parents do not see it until the OWNER approves it.
    await _open(tester, repo);
    await _register(tester, name: 'أ. سارة', email: 'sara@example.com', teacher: true);
    expect(find.text('أنشئ ملفك الشخصي. يظهر للأهل بعد أن يوافق عليه صاحب التطبيق.'), findsOneWidget);

    await tester.tap(find.text('إنشاء الملف الشخصي'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('حفظ'));
    await tester.pump();
    expect(find.text('اكتب الاسم ونبذة عنك'), findsOneWidget);

    await tester.enterText(_field('نبذة عنك وخبرتك'), 'معلمة لغة إنجليزية');
    await tester.tap(find.text('حفظ'));
    await tester.pump();
    expect(find.text('اختر مادة ولغة على الأقل'), findsOneWidget);

    await tester.tap(find.widgetWithText(FilterChip, 'إنجليزي'));
    await tester.tap(find.widgetWithText(FilterChip, 'English'));
    await tester.tap(find.byTooltip('اختيار صورة'));
    await tester.tap(find.text('رفع السيرة الذاتية'));
    await tester.pump();
    expect(find.text('cv.pdf'), findsWidgets);
    await tester.tap(find.text('حفظ'));
    await tester.pumpAndSettle();
    expect(find.textContaining('ملفك بانتظار موافقة صاحب التطبيق'), findsOneWidget);
    expect(find.text('ملفك ظاهر للأهل.'), findsNothing);
    expect(await repo.approvedTeachers(), isEmpty); // parents cannot see a pending teacher
    repo.approveForTest(repo.teacherUid); // the owner approves in the console

    // 2. A parent registers and then sees the approved teacher, with a warning.
    await repo.signOut();
    await _open(tester, repo);
    await _register(tester, name: 'أم أحمد', email: 'mom@example.com', teacher: false);
    expect(find.text('أ. سارة'), findsOneWidget);
    expect(find.textContaining('ولا يفحصهم التطبيق'), findsOneWidget);

    // 3. The parent asks for a lesson.
    await tester.tap(find.text('أ. سارة'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('تنزيل السيرة الذاتية'));
    await tester.pumpAndSettle();
    expect(picker.savedCvName, 'cv.pdf');

    // A parent can report the teacher; the report goes to the owner only.
    await tester.tap(find.text('إبلاغ عن هذا المدرس'));
    await tester.pumpAndSettle();
    await tester.enterText(_field('ما المشكلة؟'), 'سلوك غير مناسب');
    await tester.tap(find.text('إرسال'));
    await tester.pumpAndSettle();
    expect(find.text('وصلنا بلاغك، شكراً لك.'), findsOneWidget);
    expect(repo.reports.single.reason, 'سلوك غير مناسب');
    expect(repo.reports.single.teacherUid, repo.teacherUid);
    await tester.tap(find.text('اطلب حصة'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('إرسال الطلب')); // needs a time first
    await tester.pumpAndSettle();
    expect(find.text('إرسال الطلب'), findsOneWidget); // dialog still open
    await tester.enterText(_field('الوقت المناسب'), 'السبت بعد العصر');
    await tester.tap(find.text('إرسال الطلب'));
    await tester.pumpAndSettle();
    expect(find.textContaining('تم إرسال طلبك'), findsOneWidget);

    await tester.pageBack();
    await tester.pumpAndSettle();
    await tester.tap(find.byTooltip('طلباتي'));
    await tester.pumpAndSettle();
    expect(find.text('قيد الانتظار'), findsOneWidget);

    // 4. The teacher accepts with an https link (http is refused).
    await repo.signOut();
    await tester.pumpWidget(_app(const SizedBox()));
    await _open(tester, repo);
    await tester.enterText(_field('البريد الإلكتروني'), 'sara@example.com');
    await tester.enterText(_field('كلمة المرور'), '123456');
    await tester.tap(find.widgetWithText(FilledButton, 'دخول'));
    await tester.pumpAndSettle();
    expect(find.text('ملفك ظاهر للأهل.'), findsOneWidget);

    await tester.tap(find.byTooltip('طلبات الحصص'));
    await tester.pumpAndSettle();
    expect(find.text('ولي الأمر: أم أحمد'), findsOneWidget);
    await tester.tap(find.text('قبول'));
    await tester.pumpAndSettle();
    await tester.enterText(find.byType(TextField), 'http://insecure.example.com/x');
    await tester.tap(find.text('قبول الطلب'));
    await tester.pumpAndSettle();
    expect(find.text('اكتب رابطاً صحيحاً يبدأ بـ https'), findsOneWidget);
    await tester.enterText(find.byType(TextField), 'https://meet.example.com/abc-defg');
    await tester.tap(find.text('قبول الطلب'));
    await tester.pumpAndSettle();
    expect(find.text('تم القبول'), findsOneWidget);

    // 5. The parent sees the link.
    await repo.signOut();
    await tester.pumpWidget(_app(const SizedBox()));
    await _open(tester, repo);
    await tester.enterText(_field('البريد الإلكتروني'), 'mom@example.com');
    await tester.enterText(_field('كلمة المرور'), '123456');
    await tester.tap(find.widgetWithText(FilledButton, 'دخول'));
    await tester.pumpAndSettle();
    await tester.tap(find.byTooltip('طلباتي'));
    await tester.pumpAndSettle();
    expect(find.text('تم القبول'), findsOneWidget);
    expect(find.text('https://meet.example.com/abc-defg'), findsOneWidget);
    expect(find.text('نسخ الرابط'), findsOneWidget);
  });

  test('lesson links must be https', () {
    expect(isValidLessonLink('https://meet.google.com/abc-defg-hij'), isTrue);
    expect(isValidLessonLink('  https://zoom.us/j/123  '), isTrue);
    expect(isValidLessonLink('http://zoom.us/j/123'), isFalse);
    expect(isValidLessonLink('javascript:alert(1)'), isFalse);
    expect(isValidLessonLink('https://localhost'), isFalse);
    expect(isValidLessonLink('hello'), isFalse);
  });

  test('a teacher cannot lift a suspension by saving their profile again', () async {
    final repo = FakeTeacherRepository();
    await repo.register(email: 't@example.com', password: '123456', name: 'T', role: UserRole.teacher);
    TeacherProfile profile(String status) => TeacherProfile(
          uid: repo.currentUser!.uid,
          name: 'T',
          bio: 'b',
          subjects: const ['math'],
          languages: const ['العربية'],
          priceNote: '',
          status: status,
        );
    await repo.saveTeacherProfile(profile(teacherStatusApproved)); // a teacher cannot create themselves as approved
    expect((await repo.myTeacherProfile())!.status, teacherStatusPending);
    expect(await repo.approvedTeachers(), isEmpty);
    await repo.saveTeacherProfile(profile(teacherStatusApproved)); // nor approve themselves by saving again
    expect((await repo.myTeacherProfile())!.approved, isFalse);
    repo.approveForTest(repo.teacherUid); // the owner approves in the console
    expect(await repo.approvedTeachers(), hasLength(1));

    repo.suspend(repo.teacherUid); // the owner hides them
    expect(await repo.approvedTeachers(), isEmpty);
    await repo.saveTeacherProfile(profile(teacherStatusApproved)); // tries to undo it
    expect((await repo.myTeacherProfile())!.suspended, isTrue);
    expect(await repo.approvedTeachers(), isEmpty);
  });

  testWidgets('a suspended teacher is told, and parents do not see them', (tester) async {
    final repo = FakeTeacherRepository();
    await repo.register(email: 't@example.com', password: '123456', name: 'T', role: UserRole.teacher);
    await repo.saveTeacherProfile(TeacherProfile(
      uid: repo.currentUser!.uid,
      name: 'T',
      bio: 'b',
      subjects: const ['math'],
      languages: const ['العربية'],
      priceNote: '',
    )); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
    repo.suspend(repo.teacherUid);
    mediaPicker = FakeMediaPicker();

    await tester.pumpWidget(_app(TeachersEntryScreen(repo: repo)));
    await tester.pumpAndSettle();
    expect(find.textContaining('تم إيقاف ظهور ملفك'), findsOneWidget);

    await repo.register(email: 'p@example.com', password: '123456', name: 'P', role: UserRole.parent);
    await tester.pumpWidget(_app(TeachersEntryScreen(repo: repo)));
    await tester.pumpAndSettle();
    expect(find.text('لا يوجد مدرسون متاحون الآن'), findsOneWidget);
  });

  testWidgets('a too-large photo shows the error and does not change the form', (tester) async {
    tester.view.physicalSize = const Size(800, 2000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final repo = FakeTeacherRepository();
    await repo.register(email: 't@example.com', password: '123456', name: 'T', role: UserRole.teacher);
    final picker = FakeMediaPicker()
      ..photoError = const AccountException('الصورة كبيرة، اختر صورة أصغر');
    mediaPicker = picker;

    await tester.pumpWidget(_app(TeachersEntryScreen(repo: repo)));
    await tester.pumpAndSettle();
    await tester.tap(find.text('إنشاء الملف الشخصي'));
    await tester.pumpAndSettle();
    await tester.tap(find.byTooltip('اختيار صورة'));
    await tester.pumpAndSettle();
    expect(find.text('الصورة كبيرة، اختر صورة أصغر'), findsOneWidget);
  });

  testWidgets('an email saved as the name is not prefilled in the profile form', (tester) async {
    tester.view.physicalSize = const Size(800, 2000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final repo = FakeTeacherRepository();
    await repo.register(
        email: 't@example.com', password: '123456', name: 't@example.com', role: UserRole.teacher);
    mediaPicker = FakeMediaPicker();

    await tester.pumpWidget(_app(TeachersEntryScreen(repo: repo)));
    await tester.pumpAndSettle();
    await tester.tap(find.text('إنشاء الملف الشخصي'));
    await tester.pumpAndSettle();
    final name = tester.widget<TextField>(_field('الاسم'));
    expect(name.controller!.text, isEmpty);
  });
}
