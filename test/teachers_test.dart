import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_screens.dart';

import 'fake_teacher_repository.dart';

// A fresh key each time, so routes pushed in an earlier step do not survive.
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
    await tester.tap(find.text('مدرس'));
    await tester.pumpAndSettle();
  }
  await tester.enterText(_field('الاسم'), name);
  await tester.enterText(_field('البريد الإلكتروني'), email);
  await tester.enterText(_field('كلمة المرور'), '123456');
  await tester.tap(find.text('إنشاء الحساب'));
  await tester.pumpAndSettle();
}

void main() {
  testWidgets('not activated: explains that Firebase is not connected', (tester) async {
    await tester.pumpWidget(_app(const TeachersEntryScreen()));
    expect(find.textContaining('غير مفعّلة'), findsOneWidget);
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

  testWidgets('teacher -> approval -> parent request -> teacher accepts -> parent sees link',
      (tester) async {
    // A tall screen so the whole profile form is on screen.
    tester.view.physicalSize = const Size(800, 2000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final repo = FakeTeacherRepository();

    // 1. A teacher registers and creates a profile. It starts as pending.
    await _open(tester, repo);
    await _register(tester, name: 'أ. سارة', email: 'sara@example.com', teacher: true);
    expect(find.text('أنشئ ملفك الشخصي ليراجعه صاحب التطبيق، وبعد الموافقة يظهر للأهل.'),
        findsOneWidget);

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
    await tester.tap(find.text('حفظ'));
    await tester.pumpAndSettle();
    expect(find.textContaining('قيد المراجعة'), findsOneWidget);

    // 2. A parent registers: no teacher is visible until the owner approves.
    await repo.signOut();
    await _open(tester, repo);
    await _register(tester, name: 'أم أحمد', email: 'mom@example.com', teacher: false);
    expect(find.text('لا يوجد مدرسون متاحون الآن'), findsOneWidget);

    repo.approve(repo.teacherUid);
    await tester.tap(find.byIcon(Icons.logout));
    await tester.pumpAndSettle();
    await _open(tester, repo);
    await tester.enterText(_field('البريد الإلكتروني'), 'mom@example.com');
    await tester.enterText(_field('كلمة المرور'), '123456');
    await tester.tap(find.widgetWithText(FilledButton, 'دخول'));
    await tester.pumpAndSettle();
    expect(find.text('أ. سارة'), findsOneWidget);

    // 3. The parent asks for a lesson.
    await tester.tap(find.text('أ. سارة'));
    await tester.pumpAndSettle();
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
    expect(find.textContaining('ملفك معتمد'), findsOneWidget);

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

  test('a teacher cannot approve themselves through saving a profile', () async {
    final repo = FakeTeacherRepository();
    await repo.register(email: 't@example.com', password: '123456', name: 'T', role: UserRole.teacher);
    await repo.saveTeacherProfile(TeacherProfile(
      uid: repo.currentUser!.uid,
      name: 'T',
      bio: 'b',
      subjects: const ['math'],
      languages: const ['العربية'],
      priceNote: '',
      status: teacherStatusApproved, // trying to self-approve
    ));
    expect((await repo.myTeacherProfile())!.approved, isFalse);
    expect(await repo.approvedTeachers(), isEmpty);
  });
}
