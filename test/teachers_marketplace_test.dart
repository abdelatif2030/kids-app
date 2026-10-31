import 'dart:io';

import 'package:flutter/material.dart';
import 'package:kids_app/design/layout.dart';
import 'package:kids_app/design/rehlaty_heart.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/curriculum.dart';
import 'package:kids_app/teachers_directory.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_parent.dart';
import 'package:kids_app/teachers_teacher.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

String _label(String id) => subjectById(id)?.label ?? id;

TeacherProfile _t(
  String uid,
  String name, {
  List<String> subjects = const ['arabic'],
  List<String> languages = const ['العربية'],
  int? price,
  int? years,
  int? ageMin,
  int? ageMax,
  List<String> formats = const [],
  List<String> dialects = const [],
  String headline = '',
  bool idV = false,
  bool qualV = false,
  String cancel = '',
  String bio = 'نبذة',
  List<String> specialties = const [],
}) =>
    TeacherProfile(
      uid: uid,
      name: name,
      bio: bio,
      subjects: subjects,
      languages: languages,
      priceNote: '',
      priceEgp: price,
      experienceYears: years,
      ageMin: ageMin,
      ageMax: ageMax,
      formats: formats,
      dialects: dialects,
      headline: headline,
      identityVerified: idV,
      qualificationVerified: qualV,
      cancellationPolicy: cancel,
      specialties: specialties,
    );

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<FakeTeacherRepository> _repoWith(List<TeacherProfile> teachers) async {
  final repo = FakeTeacherRepository();
  await repo.register(email: 'mom@example.com', password: '123456', name: 'أم أحمد', role: UserRole.parent);
  for (final t in teachers) {
    repo.seed(t);
  }
  return repo;
}

void tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(900, 2400);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

Future<void> _open(WidgetTester tester, FakeTeacherRepository repo) async {
  await tester.pumpWidget(_app(ParentTeachersScreen(repo: repo, onSignOut: () {})));
  await tester.pumpAndSettle();
}

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('profile model', () {
    test('every professional field survives a save and load', () {
      const p = TeacherProfile(
        uid: 'u1',
        name: 'أ. سارة',
        bio: 'نبذة',
        subjects: ['arabic'],
        languages: ['العربية'],
        priceNote: '',
        headline: 'تأسيس القراءة',
        philosophy: 'نتعلم باللعب',
        ageMin: 4,
        ageMax: 9,
        specialties: ['تأسيس القراءة'],
        curricula: ['المنهج المصري'],
        dialects: ['مصري'],
        formats: [formatOnline],
        styles: ['ألعاب'],
        classTypes: [classIndividual],
        lessonMinutes: 45,
        priceEgp: 250,
        experienceYears: 6,
        qualifications: 'بكالوريوس تربية',
        cancellationPolicy: 'إلغاء مجاني قبل 24 ساعة',
      );
      final back = TeacherProfile.fromMap('u1', p.toMap());
      expect(back.toMap(), p.toMap());
      expect([back.ageMin, back.ageMax, back.lessonMinutes, back.priceEgp, back.experienceYears], [4, 9, 45, 250, 6]);
      expect(back.formats, [formatOnline]);
    });

    test('the verification badges are never part of what a teacher writes, only of what is read', () {
      final p = _t('u1', 'س', idV: true, qualV: true);
      expect(p.toMap().containsKey('identityVerified'), isFalse);
      expect(p.toMap().containsKey('qualificationVerified'), isFalse);
      final read = TeacherProfile.fromMap('u1', {...p.toMap(), 'identityVerified': true});
      expect(read.identityVerified, isTrue);
      expect(read.qualificationVerified, isFalse); // separate badges
      // A string is not "true".
      expect(TeacherProfile.fromMap('u1', {...p.toMap(), 'identityVerified': 'true'}).identityVerified, isFalse);
    });

    test('an old profile without the new fields still loads', () {
      final p = TeacherProfile.fromMap('u1', {
        'name': 'قديم',
        'bio': 'ب',
        'subjects': ['math'],
        'languages': ['العربية'],
        'priceNote': '100',
      });
      expect(p.headline, '');
      expect(p.priceEgp, isNull);
      expect(p.identityVerified, isFalse);
      expect(p.approved, isTrue);
    });

    test('completeness lists exactly what is missing and never counts verification', () {
      final empty = profileCompleteness(_t('u', 'س', bio: 'قصيرة'));
      expect(empty.done, containsAll(['المواد', 'اللغات']));
      expect(empty.missing, contains('صورة شخصية'));
      expect(empty.missing, contains('سياسة الإلغاء'));
      final badges = profileCompleteness(_t('u', 'س', bio: 'قصيرة', idV: true, qualV: true));
      expect(badges.done.length, empty.done.length); // a badge adds nothing
    });
  });

  group('search, filters and sorting', () {
    final teachers = [
      _t('a', 'سارة', price: 250, years: 6, ageMin: 4, ageMax: 9, formats: [formatOnline], dialects: ['مصري'], idV: true, headline: 'تأسيس القراءة بالألعاب', specialties: ['تأسيس القراءة']),
      _t('b', 'منى', subjects: ['math'], price: 150, years: 2, ageMin: 6, ageMax: 12, formats: [formatInPerson, formatOnline], dialects: ['فصحى']),
      _t('c', 'هدى', subjects: ['english'], languages: ['English', 'العربية'], price: 400, years: 10, ageMin: 8, ageMax: 12, qualV: true, idV: true),
      _t('d', 'نور'), // empty profile: no price, no ages
    ];
    List<String> names(TeacherFilters f, [TeacherSort s = TeacherSort.relevance]) =>
        [for (final t in searchTeachers(teachers, f, s, _label)) t.name];

    test('no filter shows everyone', () => expect(names(TeacherFilters.none).toSet(), {'سارة', 'منى', 'هدى', 'نور'}));

    test('filters combine, and a teacher who left a field empty does not match it', () {
      expect(names(const TeacherFilters(subject: 'math')), ['منى']);
      expect(names(const TeacherFilters(childAge: 7)).toSet(), {'سارة', 'منى'}); // نور has no ages
      expect(names(const TeacherFilters(maxPrice: 250)).toSet(), {'سارة', 'منى'}); // نور has no price
      expect(names(const TeacherFilters(format: formatOnline)).toSet(), {'سارة', 'منى'});
      expect(names(const TeacherFilters(dialect: 'مصري')), ['سارة']);
      expect(names(const TeacherFilters(language: 'English')), ['هدى']);
      expect(names(const TeacherFilters(childAge: 7, maxPrice: 200)), ['منى']);
      expect(names(const TeacherFilters(identityVerified: true)).toSet(), {'سارة', 'هدى'});
      expect(names(const TeacherFilters(qualificationVerified: true)), ['هدى']);
      expect(names(const TeacherFilters(identityVerified: true, qualificationVerified: true)), ['هدى']);
      expect(names(const TeacherFilters(subject: 'math', format: formatInPerson)), ['منى']);
      expect(names(const TeacherFilters(subject: 'math', childAge: 3)), isEmpty);
    });

    test('text search covers name, headline, specialty and subject, ignoring Arabic spelling variants', () {
      expect(names(const TeacherFilters(query: 'سارة')), ['سارة']);
      expect(names(const TeacherFilters(query: 'القراءه')), ['سارة']); // ة / ه
      expect(names(const TeacherFilters(query: 'رياضيات')), ['منى']);
      expect(names(const TeacherFilters(query: 'zzz')), isEmpty);
    });

    test('sorting: price both ways with missing prices last; experience; default by completeness then name', () {
      expect(names(TeacherFilters.none, TeacherSort.priceLow), ['منى', 'سارة', 'هدى', 'نور']);
      expect(names(TeacherFilters.none, TeacherSort.priceHigh), ['هدى', 'سارة', 'منى', 'نور']);
      expect(names(TeacherFilters.none, TeacherSort.experience), ['هدى', 'سارة', 'منى', 'نور']);
      final rel = names(TeacherFilters.none);
      expect(rel.last, 'نور'); // the emptiest profile is last
      expect(rel.first, 'سارة'); // the most complete one first
    });

    test('there is no paid ranking: the model has no such field and the order ignores verification', () {
      final a = _t('a', 'أ', idV: true, qualV: true);
      final b = _t('b', 'ب');
      final order = searchTeachers([b, a], TeacherFilters.none, TeacherSort.relevance, _label).map((t) => t.name).toList();
      expect(order, ['أ', 'ب']); // by name only, because completeness is equal
      final reversed = searchTeachers([_t('a', 'ب', idV: true), _t('b', 'أ')], TeacherFilters.none, TeacherSort.relevance, _label);
      expect(reversed.first.name, 'أ'); // the verified teacher does not jump ahead
    });

    test('active filter count and reset', () {
      const f = TeacherFilters(subject: 'math', maxPrice: 200, query: 'x');
      expect(f.activeCount, 3);
      expect(f.isEmpty, isFalse);
      expect(TeacherFilters.none.isEmpty, isTrue);
      expect(f.copyWith(subject: null).subject, isNull);
      expect(f.copyWith(maxPrice: null).maxPrice, isNull);
      expect(f.copyWith(subject: 'arabic').maxPrice, 200);
    });
  });

  group('owner-only verification', () {
    test('a teacher saving their profile cannot set, keep or lose a badge', () async {
      final repo = FakeTeacherRepository();
      await repo.register(email: 't@example.com', password: '123456', name: 'مدرس', role: UserRole.teacher);
      // Trying to claim badges on creation is ignored.
      await repo.saveTeacherProfile(_t(repo.currentUser!.uid, 'مدرس', idV: true, qualV: true)); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
      var mine = (await repo.myTeacherProfile())!;
      expect([mine.identityVerified, mine.qualificationVerified], [false, false]);
      // The owner verifies identity only.
      repo.verify(repo.currentUser!.uid, identity: true);
      // The teacher saves again and tries to add the other badge: it stays as the owner set it.
      await repo.saveTeacherProfile(_t(repo.currentUser!.uid, 'مدرس', qualV: true, bio: 'نبذة جديدة')); repo.approveForTest(repo.currentUser!.uid); // the owner approves in the console
      mine = (await repo.myTeacherProfile())!;
      expect([mine.identityVerified, mine.qualificationVerified], [true, false]);
      expect(mine.bio, 'نبذة جديدة');
    });

    test('the Firestore rules block teachers from writing the badges', () {
      final rules = File('firestore.rules').readAsStringSync();
      expect(rules, contains("!('identityVerified' in request.resource.data)"));
      expect(rules, contains("!('qualificationVerified' in request.resource.data)"));
      expect(rules, contains("request.resource.data.get('identityVerified', false) == resource.data.get('identityVerified', false)"));
      expect(rules, contains("request.resource.data.get('qualificationVerified', false) == resource.data.get('qualificationVerified', false)"));
      expect(rules, contains('profileFieldsOk(request.resource.data)'));
    });
  });

  group('the directory', () {
    testWidgets('search narrows the list, the empty state offers to clear, and clearing restores it', (tester) async {
      tall(tester);
      final repo = await _repoWith([_t('a', 'سارة', headline: 'تأسيس القراءة'), _t('b', 'منى', subjects: ['math'])]);
      await _open(tester, repo);
      expect(find.text('سارة'), findsOneWidget);
      expect(find.text('منى'), findsOneWidget);
      await tester.enterText(find.byType(TextField), 'منى');
      await tester.pump();
      expect(find.text('سارة'), findsNothing);
      await tester.enterText(find.byType(TextField), 'لا يوجد');
      await tester.pump();
      expect(find.textContaining('لا يوجد مدرس يطابق'), findsOneWidget);
      await tester.tap(find.widgetWithText(FilledButton, 'مسح التصفية'));
      await tester.pump();
      expect(find.text('سارة'), findsOneWidget);
      expect(find.text('منى'), findsOneWidget);
    });

    testWidgets('the filter sheet filters by subject and price, shows the count, sorts, and resets', (tester) async {
      tall(tester);
      final repo = await _repoWith([
        _t('a', 'سارة', price: 250),
        _t('b', 'منى', subjects: ['math'], price: 150),
        _t('c', 'هدى', subjects: ['math'], price: 400),
      ]);
      await _open(tester, repo);
      await tester.tap(find.byTooltip('تصفية وترتيب'));
      await tester.pumpAndSettle();
      expect(find.textContaining('لا توجد مواضع مدفوعة'), findsOneWidget);
      await tester.tap(find.widgetWithText(ChoiceChip, subjectById('math')!.label));
      await tester.pump();
      await tester.enterText(find.widgetWithText(TextField, 'أقصى سعر للحصة (جنيه)'), '200');
      await tester.tap(find.widgetWithText(ChoiceChip, 'السعر: الأقل أولاً'));
      await tester.pump();
      await tester.tap(find.text('عرض النتائج'));
      await tester.pumpAndSettle();
      expect(find.text('منى'), findsOneWidget);
      expect(find.text('سارة'), findsNothing);
      expect(find.text('هدى'), findsNothing);
      expect(find.byType(Badge), findsOneWidget);
      expect(find.textContaining('السعر: الأقل أولاً'), findsOneWidget);
      await tester.tap(find.text('مسح التصفية'));
      await tester.pump();
      expect(find.text('سارة'), findsOneWidget);
      expect(find.text('هدى'), findsOneWidget);
    });

    testWidgets('favourites are saved on this device and can be filtered', (tester) async {
      tall(tester);
      final repo = await _repoWith([_t('a', 'سارة'), _t('b', 'منى')]);
      await _open(tester, repo);
      await tester.tap(find.byTooltip('حفظ في المفضلة').first);
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(await tester.runAsync(TeacherFavorites.load), hasLength(1));
      await tester.tap(find.text('❤️ المفضلة فقط'));
      await tester.pump();
      expect(find.byWidgetPredicate((w) => w is RehlatyHeart && w.filled), findsOneWidget);
      expect(find.byType(Card).evaluate().length, lessThan(5));
      // Reopening keeps it.
      await _open(tester, repo);
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(find.byWidgetPredicate((w) => w is RehlatyHeart && w.filled), findsOneWidget);
    });

    testWidgets('compare up to three; the fourth is refused; the table shows honest values', (tester) async {
      tall(tester);
      final repo = await _repoWith([
        _t('a', 'سارة', price: 250, years: 6, idV: true, cancel: 'إلغاء مجاني قبل 24 ساعة'),
        _t('b', 'منى', price: 150),
        _t('c', 'هدى'),
        _t('d', 'نور'),
      ]);
      await _open(tester, repo);
      final chips = find.widgetWithText(FilterChip, 'قارن');
      await tester.tap(chips.at(0));
      await tester.pump();
      expect(find.textContaining('قارن 1'), findsNothing); // needs two
      await tester.tap(chips.at(1));
      await tester.pump();
      await tester.tap(chips.at(2));
      await tester.pump();
      await tester.tap(chips.at(3));
      await tester.pump();
      expect(find.text('يمكنك مقارنة 3 مدرسين كحد أقصى'), findsOneWidget);
      await tester.tap(find.text('قارن 3 مدرسين'));
      await tester.pumpAndSettle();
      expect(find.text('مقارنة المدرسين'), findsOneWidget);
      expect(find.text('250 جنيه'), findsOneWidget);
      expect(find.text('غير محدد'), findsWidgets);
      expect(find.text('لا توجد تقييمات بعد'), findsWidgets); // no ratings exist (the table row says so too)
      expect(find.text('تم التحقق منها'), findsOneWidget);
      expect(find.text('لم يتحقق منها التطبيق'), findsNWidgets(2));
    });

    testWidgets('more results load in pages of ten', (tester) async {
      tall(tester);
      final repo = await _repoWith([for (var i = 0; i < 14; i++) _t('t$i', 'مدرس ${i.toString().padLeft(2, '0')}')]);
      await _open(tester, repo);
      await tester.scrollUntilVisible(find.text('عرض المزيد (4)'), 300, scrollable: find.descendant(of: find.byType(CenteredList), matching: find.byType(Scrollable)).first);
      expect(find.text('عرض المزيد (4)'), findsOneWidget);
      await tester.tap(find.text('عرض المزيد (4)'));
      await tester.pump();
      expect(find.textContaining('عرض المزيد'), findsNothing);
    });

    testWidgets('verification badges appear only for verified teachers, separately, with their meaning', (tester) async {
      tall(tester);
      final repo = await _repoWith([
        _t('a', 'سارة', idV: true),
        _t('b', 'منى', qualV: true),
        _t('c', 'هدى'),
      ]);
      await _open(tester, repo);
      expect(find.text('الهوية تم التحقق منها'), findsOneWidget);
      expect(find.text('المؤهل تم التحقق منه'), findsOneWidget);
      await tester.tap(find.text('الهوية تم التحقق منها'));
      await tester.pumpAndSettle();
      expect(find.text(kIdentityBadgeMeaning), findsOneWidget);
    });
  });

  group('the teacher page', () {
    testWidgets('shows what the teacher wrote as theirs, no invented rating, and the cancellation terms', (tester) async {
      tall(tester);
      final p = TeacherProfile(
        uid: 'a',
        name: 'أ. سارة',
        bio: 'مدرسة تأسيس',
        subjects: const ['arabic'],
        languages: const ['العربية'],
        priceNote: '',
        headline: 'تأسيس القراءة بالألعاب',
        qualifications: 'بكالوريوس تربية',
        priceEgp: 250,
        experienceYears: 6,
        lessonMinutes: 45,
        ageMin: 4,
        ageMax: 9,
        cancellationPolicy: 'إلغاء مجاني قبل 24 ساعة',
        formats: const [formatOnline],
        specialties: const ['تأسيس القراءة'],
      );
      final repo = await _repoWith([p]);
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: repo, teacher: p)));
      await tester.pumpAndSettle();
      expect(find.textContaining('250 جنيه للحصة'), findsOneWidget);
      expect(find.textContaining('خبرة 6 سنوات (يذكرها المدرس)'), findsOneWidget);
      expect(find.textContaining('لم يتحقق صاحب التطبيق من هوية هذا المدرس'), findsOneWidget);
      expect(find.textContaining('كتبها المدرس ولم يتحقق منها التطبيق'), findsOneWidget);
      expect(find.textContaining('لا توجد تقييمات بعد'), findsOneWidget);
      expect(find.text('إلغاء مجاني قبل 24 ساعة'), findsOneWidget);
      expect(find.text('الهوية تم التحقق منها'), findsNothing);
      // The booking dialog repeats the terms before the parent confirms.
      await tester.ensureVisible(find.text('اطلب حصة'));
      await tester.tap(find.text('اطلب حصة'));
      await tester.pumpAndSettle();
      expect(find.text('سياسة الإلغاء: إلغاء مجاني قبل 24 ساعة'), findsOneWidget);
    });

    testWidgets('qualifications show as verified only when the owner verified them', (tester) async {
      tall(tester);
      final p = _t('a', 'سارة', qualV: true);
      final withText = TeacherProfile.fromMap('a', {...p.toMap(), 'qualifications': 'ماجستير', 'qualificationVerified': true});
      final repo = await _repoWith([withText]);
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: repo, teacher: withText)));
      await tester.pumpAndSettle();
      expect(find.textContaining('المؤهلات (تم التحقق منها)'), findsOneWidget);
      expect(find.text('المؤهل تم التحقق منه'), findsOneWidget);
    });

    testWidgets('a teacher previewing their page sees no booking, report or CV buttons', (tester) async {
      tall(tester);
      final p = _t('a', 'سارة');
      final repo = await _repoWith([p]);
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: repo, teacher: p, preview: true)));
      await tester.pumpAndSettle();
      expect(find.text('هذه معاينة لصفحتك كما يراها الأهل.'), findsOneWidget);
      expect(find.text('اطلب حصة'), findsNothing);
      expect(find.text('إبلاغ عن هذا المدرس'), findsNothing);
    });
  });

  group('the teacher side', () {
    testWidgets('the form saves the professional fields and the home shows what is still missing', (tester) async {
      tall(tester);
      final repo = FakeTeacherRepository();
      await repo.register(email: 't@example.com', password: '123456', name: 'أ. سارة', role: UserRole.teacher);
      await tester.pumpWidget(_app(TeacherHomeScreen(repo: repo, onSignOut: () {})));
      await tester.pumpAndSettle();
      await tester.tap(find.text('إنشاء الملف الشخصي'));
      await tester.pumpAndSettle();
      await tester.enterText(find.widgetWithText(TextField, 'نبذة عنك وخبرتك'), 'معلمة تأسيس قراءة وكتابة بخبرة طويلة مع الأطفال الصغار والمتوسطين في السن، بطريقة ممتعة.');
      await tester.tap(find.widgetWithText(FilterChip, subjectById('arabic')!.label));
      await tester.tap(find.widgetWithText(FilterChip, 'العربية'));
      await tester.pump();
      await tester.tap(find.text('ملف احترافي (يزيد ثقة الأهل)'));
      await tester.pumpAndSettle();
      await tester.enterText(find.widgetWithText(TextField, 'عنوان قصير'), 'تأسيس القراءة بالألعاب');
      await tester.enterText(find.widgetWithText(TextField, 'سعر الحصة (جنيه)'), '250');
      await tester.enterText(find.widgetWithText(TextField, 'سنوات الخبرة'), '6');
      await tester.enterText(find.widgetWithText(TextField, 'سياسة الإلغاء'), 'إلغاء مجاني قبل 24 ساعة');
      await tester.ensureVisible(find.widgetWithText(FilterChip, 'أونلاين'));
      await tester.tap(find.widgetWithText(FilterChip, 'أونلاين'));
      await tester.tap(find.widgetWithText(FilterChip, 'مصري'));
      await tester.pump();
      await tester.scrollUntilVisible(find.text('حفظ'), 400, scrollable: find.byType(Scrollable).first);
      await tester.tap(find.text('حفظ'));
      await tester.pumpAndSettle();
      final saved = (await repo.myTeacherProfile())!;
      expect(saved.headline, 'تأسيس القراءة بالألعاب');
      expect([saved.priceEgp, saved.experienceYears], [250, 6]);
      expect(saved.formats, [formatOnline]);
      expect(saved.dialects, ['مصري']);
      expect(saved.cancellationPolicy, 'إلغاء مجاني قبل 24 ساعة');
      expect(saved.identityVerified, isFalse);
      // The home screen's checklist names what is missing and is clear about badges.
      expect(find.textContaining('اكتمال الملف:'), findsOneWidget);
      expect(find.text('• صورة شخصية'), findsOneWidget);
      expect(find.text('• المؤهلات'), findsOneWidget);
      expect(find.text('الهوية: لم يتم التحقق بعد'), findsOneWidget);
      expect(find.textContaining('اكتمال الملف لا يمنحك شارة'), findsOneWidget);
    });

    testWidgets('bad numbers are refused with a clear message and nothing is saved', (tester) async {
      tall(tester);
      final repo = FakeTeacherRepository();
      await repo.register(email: 't@example.com', password: '123456', name: 'سارة', role: UserRole.teacher);
      await tester.pumpWidget(_app(TeacherProfileForm(repo: repo, existing: null, name: 'سارة')));
      await tester.pumpAndSettle();
      await tester.enterText(find.widgetWithText(TextField, 'نبذة عنك وخبرتك'), 'نبذة');
      await tester.tap(find.widgetWithText(FilterChip, subjectById('arabic')!.label));
      await tester.tap(find.widgetWithText(FilterChip, 'العربية'));
      await tester.tap(find.text('ملف احترافي (يزيد ثقة الأهل)'));
      await tester.pumpAndSettle();
      await tester.enterText(find.widgetWithText(TextField, 'سعر الحصة (جنيه)'), '-5');
      await tester.scrollUntilVisible(find.text('حفظ'), 400, scrollable: find.byType(Scrollable).first);
      await tester.tap(find.text('حفظ'));
      await tester.pump();
      expect(find.text('تحقق من السعر وسنوات الخبرة (أرقام صحيحة)'), findsOneWidget);
      expect(await repo.myTeacherProfile(), isNull);
    });
  });
}
