import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/teachers_availability.dart';
import 'package:kids_app/teachers_bookings.dart';
import 'package:kids_app/teachers_followup.dart';
import 'package:kids_app/teachers_market.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_parent.dart';
import 'package:kids_app/teachers_requests.dart';
import 'package:kids_app/teachers_time.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_teacher_repository.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

void tall(WidgetTester tester) {
  tester.view.physicalSize = const Size(900, 2600);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.reset);
}

const _profile = TeacherProfile(
  uid: 'x',
  name: 'أ. سارة',
  bio: 'مدرسة تأسيس',
  subjects: ['arabic'],
  languages: ['العربية'],
  priceNote: '',
  priceEgp: 200,
  cancellationPolicy: 'إلغاء مجاني قبل 24 ساعة',
);

class World {
  final repo = FakeTeacherRepository();
  late String teacherUid;
  late String parentUid;
  late String parent2Uid;

  /// Registers a teacher (with a saved profile) and two parents.
  Future<void> setUp() async {
    await repo.register(email: 't@e.com', password: '123456', name: 'أ. سارة', role: UserRole.teacher);
    teacherUid = repo.currentUser!.uid;
    await repo.saveTeacherProfile(TeacherProfile(
      uid: teacherUid, name: 'أ. سارة', bio: 'مدرسة تأسيس', subjects: const ['arabic'], languages: const ['العربية'],
      priceNote: '', priceEgp: 200, cancellationPolicy: 'إلغاء مجاني قبل 24 ساعة',
    ));
    await repo.register(email: 'p1@e.com', password: '123456', name: 'أم أحمد', role: UserRole.parent);
    parentUid = repo.currentUser!.uid;
    await repo.register(email: 'p2@e.com', password: '123456', name: 'أب نور', role: UserRole.parent);
    parent2Uid = repo.currentUser!.uid;
  }

  Future<void> as(String email) => repo.signIn(email, '123456');

  Future<Slot> addSlot({int hours = 48}) async {
    await as('t@e.com');
    final s = Slot(teacherUid: teacherUid, startMs: DateTime.now().add(Duration(hours: hours)).millisecondsSinceEpoch, minutes: 45);
    await repo.addSlots([s]);
    return s;
  }

  Booking bookingFor(Slot s, {String? parent, String id = ''}) => Booking(
        id: id,
        parentUid: parent ?? parentUid,
        teacherUid: teacherUid,
        teacherName: 'أ. سارة',
        parentName: 'أم أحمد',
        subject: 'arabic',
        whenText: fmtDateTime(s.start),
        slotId: s.id,
        startMs: s.startMs,
        minutes: s.minutes,
        priceEgp: 200,
      );

  /// An accepted lesson that already took place (what the owner would see after the date).
  Booking pastAccepted({String id = 'past1', String status = bookingAccepted}) {
    final b = Booking(
      id: id, parentUid: parentUid, teacherUid: teacherUid, teacherName: 'أ. سارة', parentName: 'أم أحمد',
      subject: 'arabic', whenText: 'x', status: status, slotId: 's_$id',
      startMs: DateTime.now().subtract(const Duration(hours: 3)).millisecondsSinceEpoch, minutes: 45, priceEgp: 200,
      lessonLink: 'https://meet.example.com/a',
    );
    repo.forceBooking(b);
    return b;
  }
}

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('pure marketplace logic', () {
    test('weekly hours become future slots only, on the chosen weekdays, at the chosen local time', () {
      final from = DateTime(2026, 11, 4, 17, 0); // a Wednesday evening
      final slots = generateSlots(
        teacherUid: 't', weekdays: {DateTime.wednesday, DateTime.saturday}, hour: 16, minute: 30,
        lessonMinutes: 45, weeks: 2, from: from,
      );
      // Today's 16:30 is already past, so: Sat 7th, Wed 11th, Sat 14th, Wed 18th (inside the 2 weeks window from the 4th: days 0..13)
      final days = [for (final s in slots) s.start];
      expect(days.every((d) => d.isAfter(from)), isTrue);
      expect(days.every((d) => [DateTime.wednesday, DateTime.saturday].contains(d.weekday)), isTrue);
      expect(days.every((d) => d.hour == 16 && d.minute == 30), isTrue);
      expect(days.length, 3); // Sat 7, Wed 11, Sat 14
      expect(slots.first.id, 't_${slots.first.startMs}');
      expect(generateSlots(teacherUid: 't', weekdays: {}, hour: 9, minute: 0, lessonMinutes: 30, weeks: 4, from: from), isEmpty);
    });

    test('the earliest bookable slot ignores booked, blocked and past ones', () {
      final now = DateTime(2026, 11, 4, 12);
      Slot s(int h, {String status = slotOpen}) =>
          Slot(teacherUid: 't', startMs: now.add(Duration(hours: h)).millisecondsSinceEpoch, minutes: 45, status: status);
      expect(earliestOpen([s(-2), s(1, status: slotBooked), s(2, status: slotBlocked), s(5), s(3)], now)!.startMs, s(3).startMs);
      expect(earliestOpen([s(1, status: slotBooked)], now), isNull);
      expect(earliestOpen([], now), isNull);
    });

    test('rating summaries come only from review records', () {
      Review r(String t, int stars, [String b = '']) => Review(bookingId: '$t$stars$b', teacherUid: t, parentUid: 'p', rating: stars);
      final s = ratingSummaries([r('a', 5), r('a', 4, 'x'), r('b', 3)]);
      expect(s['a']!.count, 2);
      expect(s['a']!.average, 4.5);
      expect(s['a']!.distribution, {5: 1, 4: 1});
      expect(s['b']!.label, '3.0 من 5 (1 تقييم)');
      expect(s['c'], isNull);
      expect(RatingSummary.none.label, 'لا توجد تقييمات بعد');
    });

    test('sorting by rating puts unreviewed teachers last; by earliest, teachers with no slot last', () {
      TeacherProfile t(String uid) => TeacherProfile(uid: uid, name: uid, bio: '', subjects: const ['arabic'], languages: const ['العربية'], priceNote: '');
      final all = [t('a'), t('b'), t('c'), t('d')];
      Review r(String teacher, int stars, String id) => Review(bookingId: id, teacherUid: teacher, parentUid: 'p', rating: stars);
      final ratings = ratingSummaries([r('a', 4, '1'), r('b', 5, '2'), r('b', 5, '3'), r('c', 5, '4')]);
      final byRating = searchTeachers(all, TeacherFilters.none, TeacherSort.rating, (id) => id, ratings: ratings).map((x) => x.uid).toList();
      expect(byRating, ['b', 'c', 'a', 'd']); // 5.0 (2 reviews) > 5.0 (1) > 4.0 > none
      final byEarliest = searchTeachers(all, TeacherFilters.none, TeacherSort.earliest, (id) => id, earliestStartMs: {'a': 300, 'c': 100}).map((x) => x.uid).toList();
      expect(byEarliest, ['c', 'a', 'b', 'd']);
    });

    test('contact details are recognised in Arabic and English digits, emails and links', () {
      expect(looksLikeContactDetails('كلمني على 01012345678'), isTrue);
      expect(looksLikeContactDetails('رقمي ٠١٠١٢٣٤٥٦٧٨'), isTrue);
      expect(looksLikeContactDetails('010 1234 5678'), isTrue);
      expect(looksLikeContactDetails('a.b@example.com'), isTrue);
      expect(looksLikeContactDetails('https://wa.me/123'), isTrue);
      expect(looksLikeContactDetails('www.example.com'), isTrue);
      expect(looksLikeContactDetails('الحصة الساعة 5 يوم 12'), isFalse);
      expect(looksLikeContactDetails('هل يناسبك السبت؟'), isFalse);
    });

    test('dates show in Arabic with local time', () {
      expect(fmtDateTime(DateTime(2026, 10, 31, 16, 5)), 'السبت 31/10 · 16:05');
      expect(weekdayName(DateTime.monday), 'الاثنين');
    });
  });

  group('availability and booking', () {
    testWidgets('a teacher adds weekly hours, blocks one, and deletes one; booked slots cannot be changed', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      await w.as('t@e.com');
      await tester.pumpWidget(_app(TeacherAvailabilityScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      expect(find.textContaining('لم تضف مواعيد بعد'), findsOneWidget);
      await tester.tap(find.text('إضافة مواعيد'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('إضافة')); // no day yet
      await tester.pump();
      expect(find.text('اختر يوماً واحداً على الأقل'), findsOneWidget);
      for (final d in [DateTime.monday, DateTime.thursday]) {
        await tester.tap(find.widgetWithText(FilterChip, weekdayName(d)));
      }
      await tester.pump();
      await tester.tap(find.text('إضافة'));
      await tester.pumpAndSettle();
      final slots = await w.repo.slotsOf(w.teacherUid);
      expect(slots.length, greaterThanOrEqualTo(7)); // 4 weeks x 2 days (minus past ones today)
      expect(slots.every((s) => s.minutes == 45 && s.isOpen), isTrue);
      // Block the first one.
      await tester.tap(find.byTooltip('إيقاف الموعد مؤقتاً').first);
      await tester.pumpAndSettle();
      expect((await w.repo.slotsOf(w.teacherUid)).where((s) => s.status == slotBlocked).length, 1);
      await tester.tap(find.byTooltip('حذف الموعد').first);
      await tester.pumpAndSettle();
      expect((await w.repo.slotsOf(w.teacherUid)).length, slots.length - 1);
      // Adding the same weekly hours again creates no duplicates.
      await tester.tap(find.text('إضافة مواعيد'));
      await tester.pumpAndSettle();
      await tester.tap(find.widgetWithText(FilterChip, weekdayName(DateTime.monday)));
      await tester.tap(find.text('إضافة'));
      await tester.pumpAndSettle();
      final again = await w.repo.slotsOf(w.teacherUid);
      expect(again.map((s) => s.id).toSet().length, again.length);
    });

    testWidgets('a parent books a real slot, sees terms first, and a second parent cannot take it', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot();
      await w.as('p1@e.com');
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: w.repo, teacher: _profile.copyWith().let(w.teacherUid))));
      await tester.pumpAndSettle();
      expect(find.text('المواعيد المتاحة'), findsOneWidget);
      await tester.tap(find.textContaining('45 د'));
      await tester.pumpAndSettle();
      expect(find.text('تأكيد حجز الموعد'), findsOneWidget);
      expect(find.textContaining('200 جنيه للحصة'), findsWidgets);
      expect(find.text('سياسة الإلغاء: إلغاء مجاني قبل 24 ساعة'), findsOneWidget);
      expect(find.textContaining('لا يوجد دفع داخل التطبيق'), findsOneWidget);
      await tester.tap(find.text('احجز'));
      await tester.pumpAndSettle();
      expect(find.textContaining('تم حجز الموعد وإرسال الطلب'), findsOneWidget);
      final mine = await w.repo.myBookings();
      expect(mine.single.slotId, slot.id);
      expect(mine.single.status, bookingRequested);
      // The slot is gone from the open list.
      expect(find.textContaining('45 د'), findsNothing);
      // A second parent racing for the same slot is refused by the repository, and nothing is created.
      await w.as('p2@e.com');
      expect(() => w.repo.bookSlot(w.bookingFor(slot, parent: w.parent2Uid)), throwsA(isA<AccountException>()));
      expect(await w.repo.myBookings(), isEmpty);
    });

    testWidgets('booking shows the failure honestly when the slot was taken meanwhile', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot();
      await w.as('p2@e.com');
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: w.repo, teacher: _profile.copyWith().let(w.teacherUid))));
      await tester.pumpAndSettle();
      // Someone else books it after the list was loaded.
      await w.as('p1@e.com');
      await w.repo.bookSlot(w.bookingFor(slot));
      await w.as('p2@e.com');
      await tester.tap(find.textContaining('45 د'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('احجز'));
      await tester.pumpAndSettle();
      expect(find.textContaining('لم يعد متاحاً'), findsOneWidget);
      expect(find.textContaining('تم حجز الموعد'), findsNothing);
      expect(await w.repo.myBookings(), isEmpty);
    });

    testWidgets('cancelling asks first, then frees the slot for others', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot();
      await w.as('p1@e.com');
      await w.repo.bookSlot(w.bookingFor(slot));
      await tester.pumpWidget(_app(BookingsScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      expect(find.textContaining('بتوقيت جهازك'), findsOneWidget);
      await tester.tap(find.text('إلغاء الحجز'));
      await tester.pumpAndSettle();
      expect(find.text('إلغاء الحجز؟'), findsOneWidget);
      await tester.tap(find.text('رجوع'));
      await tester.pumpAndSettle();
      expect((await w.repo.myBookings()).single.status, bookingRequested); // nothing changed
      await tester.tap(find.text('إلغاء الحجز'));
      await tester.pumpAndSettle();
      await tester.tap(find.widgetWithText(FilledButton, 'إلغاء الحجز'));
      await tester.pumpAndSettle();
      expect((await w.repo.myBookings()).single.status, bookingCancelled);
      expect((await w.repo.slotsOf(w.teacherUid)).single.isOpen, isTrue);
      // Another parent can now book it.
      await w.as('p2@e.com');
      await w.repo.bookSlot(w.bookingFor(slot, parent: w.parent2Uid));
      expect((await w.repo.myBookings()).length, 1);
    });

    testWidgets('the teacher declines a scheduled request and the slot reopens', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot();
      await w.as('p1@e.com');
      await w.repo.bookSlot(w.bookingFor(slot));
      await w.as('t@e.com');
      await tester.pumpWidget(_app(BookingsScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      await tester.tap(find.text('رفض'));
      await tester.pumpAndSettle();
      await tester.tap(find.widgetWithText(FilledButton, 'رفض'));
      await tester.pumpAndSettle();
      expect((await w.repo.myBookings()).single.status, bookingDeclined);
      expect((await w.repo.slotsOf(w.teacherUid)).single.isOpen, isTrue);
    });
  });

  group('after the lesson: completion, report, review, messages', () {
    testWidgets('the teacher confirms the lesson took place only after asking, and cannot do it for a future lesson', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final future = await w.addSlot();
      await w.as('p1@e.com');
      await w.repo.bookSlot(w.bookingFor(future));
      await w.as('t@e.com');
      await w.repo.updateBooking((await w.repo.myBookings()).single.id, status: bookingAccepted, lessonLink: 'https://meet.example.com/a');
      w.pastAccepted();
      await tester.pumpWidget(_app(BookingsScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      expect(find.text('تمّت الحصة'), findsOneWidget); // only the past one
      final futureBooking = (await w.repo.myBookings()).firstWhere((b) => b.id != 'past1');
      expect(() => w.repo.finishLesson(futureBooking, status: bookingCompleted), throwsA(isA<AccountException>()));
      await tester.tap(find.text('تمّت الحصة'));
      await tester.pumpAndSettle();
      expect(find.text('تأكيد أن الحصة تمت؟'), findsOneWidget);
      await tester.tap(find.widgetWithText(FilledButton, 'تأكيد'));
      await tester.pumpAndSettle();
      expect(w.repo.bookingById('past1').status, bookingCompleted);
      expect(find.text('تقرير الحصة'), findsOneWidget);
    });

    testWidgets('a no-show cannot be reviewed', (tester) async {
      final w = World();
      await w.setUp();
      final b = w.pastAccepted(id: 'ns');
      await w.as('t@e.com');
      await w.repo.finishLesson(b, status: bookingNoShow);
      await w.as('p1@e.com');
      expect(
        () => w.repo.submitReview(Review(bookingId: 'ns', teacherUid: w.teacherUid, parentUid: w.parentUid, rating: 5)),
        throwsA(isA<AccountException>()),
      );
    });

    testWidgets('the lesson report: written by the teacher, read by that parent only, with the "not a diagnosis" note', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final b = w.pastAccepted();
      await w.as('t@e.com');
      await w.repo.finishLesson(b, status: bookingCompleted);
      await tester.pumpWidget(_app(LessonReportForm(repo: w.repo, booking: w.repo.bookingById('past1'))));
      await tester.pumpAndSettle();
      await tester.tap(find.text('حفظ التقرير'));
      await tester.pump();
      expect(find.text('اكتب ما تم شرحه في الحصة'), findsOneWidget);
      await tester.enterText(find.widgetWithText(TextField, 'ما الذي تم شرحه؟'), 'الحروف ب ت ث');
      await tester.enterText(find.widgetWithText(TextField, 'نشاط مقترح في البيت'), 'ابحث عن 3 أشياء تبدأ بحرف ب');
      await tester.tap(find.text('حفظ التقرير'));
      await tester.pumpAndSettle();
      // The parent sees it.
      await w.as('p1@e.com');
      await tester.pumpWidget(_app(LessonReportView(repo: w.repo, booking: w.repo.bookingById('past1'))));
      await tester.pumpAndSettle();
      expect(find.text('الحروف ب ت ث'), findsOneWidget);
      expect(find.text('ابحث عن 3 أشياء تبدأ بحرف ب'), findsOneWidget);
      expect(find.textContaining('ليست تشخيصاً'), findsOneWidget);
      // Another parent cannot.
      await w.as('p2@e.com');
      expect(() => w.repo.lessonReportFor('past1'), throwsA(isA<AccountException>()));
    });

    testWidgets('a parent reviews a completed lesson once; the rating then shows from real records', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final b = w.pastAccepted();
      await w.as('t@e.com');
      await w.repo.finishLesson(b, status: bookingCompleted);
      await w.as('p1@e.com');
      await tester.pumpWidget(_app(BookingsScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      await tester.tap(find.text('قيّم المدرس'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('إرسال التقييم')); // no stars chosen
      await tester.pump();
      expect(find.text('اختر عدد النجوم'), findsOneWidget);
      await tester.tap(find.byTooltip('4 من 5'));
      await tester.pump();
      await tester.enterText(find.widgetWithText(TextField, 'تعليق (اختياري)'), 'شرح واضح');
      await tester.tap(find.text('إرسال التقييم'));
      await tester.pumpAndSettle();
      expect(find.text('قيّمتَ هذه الحصة'), findsOneWidget);
      expect(find.text('قيّم المدرس'), findsNothing);
      // The repository refuses a second review of the same booking.
      expect(
        () => w.repo.submitReview(Review(bookingId: 'past1', teacherUid: w.teacherUid, parentUid: w.parentUid, rating: 1)),
        throwsA(isA<AccountException>()),
      );
      final summary = RatingSummary.of(await w.repo.reviewsFor(w.teacherUid));
      expect([summary.count, summary.average], [1, 4.0]);
      // Another parent sees it on the teacher's page, and can report it.
      await w.as('p2@e.com');
      final teacher = (await w.repo.approvedTeachers()).single;
      await tester.pumpWidget(_app(TeacherDetailScreen(repo: w.repo, teacher: teacher)));
      await tester.pumpAndSettle();
      expect(find.textContaining('★ 4.0 من 5 · 1 تقييم'), findsOneWidget);
      expect(find.text('شرح واضح'), findsOneWidget);
      await tester.tap(find.byTooltip('إبلاغ عن هذا التقييم'));
      await tester.pumpAndSettle();
      await tester.enterText(find.widgetWithText(TextField, 'ما المشكلة؟'), 'تقييم مزيف');
      await tester.tap(find.text('إرسال'));
      await tester.pumpAndSettle();
      expect(w.repo.reviewReports.single.reason, 'تقييم مزيف');
    });

    testWidgets('messages: text between the two adults, contact details refused, closed after cancelling', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot();
      await w.as('p1@e.com');
      await w.repo.bookSlot(w.bookingFor(slot));
      final booking = (await w.repo.myBookings()).single;
      await tester.pumpWidget(_app(ConversationScreen(repo: w.repo, booking: booking)));
      await tester.pumpAndSettle();
      expect(find.text('لا توجد رسائل بعد'), findsOneWidget);
      await tester.enterText(find.byType(TextField), 'كلمني على 01012345678');
      await tester.tap(find.byTooltip('إرسال'));
      await tester.pump();
      expect(find.textContaining('لا ترسل أرقام هاتف'), findsWidgets);
      expect(await w.repo.messagesOf(booking.id), isEmpty);
      await tester.enterText(find.byType(TextField), 'هل يناسبك السبت؟');
      await tester.tap(find.byTooltip('إرسال'));
      await tester.pumpAndSettle();
      expect(find.text('هل يناسبك السبت؟'), findsOneWidget);
      // The teacher answers.
      await w.as('t@e.com');
      await w.repo.sendMessage(booking.id, 'نعم يناسبني');
      expect((await w.repo.messagesOf(booking.id)).map((m) => m.text), ['هل يناسبك السبت؟', 'نعم يناسبني']);
      // An outsider cannot read or write.
      await w.as('p2@e.com');
      expect(() => w.repo.messagesOf(booking.id), throwsA(isA<AccountException>()));
      expect(() => w.repo.sendMessage(booking.id, 'مرحباً'), throwsA(isA<AccountException>()));
      // After cancelling, the conversation is closed.
      await w.as('p1@e.com');
      await w.repo.cancelOrDecline(booking, status: bookingCancelled);
      expect(() => w.repo.sendMessage(booking.id, 'متأخر'), throwsA(isA<AccountException>()));
      final cancelled = w.repo.bookingById(booking.id);
      await tester.pumpWidget(_app(ConversationScreen(repo: w.repo, booking: cancelled)));
      await tester.pumpAndSettle();
      expect(find.textContaining('أُغلقت المحادثة'), findsOneWidget);
    });
  });

  group('requests and proposals', () {
    testWidgets('a parent publishes a request (no child identity fields), a teacher proposes, the parent accepts', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      await w.as('p1@e.com');
      await tester.pumpWidget(_app(RequestForm(repo: w.repo)));
      await tester.pumpAndSettle();
      expect(find.textContaining('لا تكتب اسم طفلك'), findsOneWidget);
      expect(find.widgetWithText(TextField, 'اسم الطفل'), findsNothing); // there is no such field
      await tester.tap(find.text('نشر الطلب'));
      await tester.pump();
      expect(find.text('اكتب هدف التعلم'), findsOneWidget);
      await tester.enterText(find.widgetWithText(TextField, 'هدف التعلم'), 'تأسيس قراءة عربي');
      await tester.enterText(find.widgetWithText(TextField, 'أقل سعر للحصة (جنيه)'), '300');
      await tester.enterText(find.widgetWithText(TextField, 'أعلى سعر للحصة (جنيه)'), '100');
      await tester.ensureVisible(find.text('نشر الطلب'));
      await tester.tap(find.text('نشر الطلب'));
      await tester.pump();
      expect(find.textContaining('تحقق من الميزانية'), findsOneWidget);
      await tester.enterText(find.widgetWithText(TextField, 'أقل سعر للحصة (جنيه)'), '100');
      await tester.enterText(find.widgetWithText(TextField, 'أعلى سعر للحصة (جنيه)'), '300');
      await tester.tap(find.text('نشر الطلب'));
      await tester.pumpAndSettle();
      final req = (await w.repo.myRequests()).single;
      expect(req.goal, 'تأسيس قراءة عربي');
      expect([req.budgetMin, req.budgetMax], [100, 300]);
      expect(req.toMap().keys.toSet().containsAll(['childName', 'school', 'phone']), isFalse);
      // The teacher sees it and proposes.
      await w.as('t@e.com');
      await tester.pumpWidget(_app(OpenRequestsScreen(repo: w.repo)));
      await tester.pumpAndSettle();
      expect(find.textContaining('تأسيس قراءة عربي'), findsOneWidget);
      expect(find.text('الميزانية: 100–300 جنيه للحصة'), findsOneWidget);
      await tester.tap(find.text('قدّم عرضاً'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('إرسال العرض'));
      await tester.pump();
      expect(find.text('اكتب عرضك والسعر (رقماً)'), findsOneWidget);
      await tester.enterText(find.widgetWithText(TextField, 'تعريف بنفسك وكيف ستساعد'), 'أقترح خطة من 8 حصص');
      await tester.enterText(find.widgetWithText(TextField, 'سعر الحصة (جنيه)'), '200');
      await tester.tap(find.text('إرسال العرض'));
      await tester.pumpAndSettle();
      expect(find.text('عرضك: بانتظار ردّك'), findsOneWidget);
      // One proposal per teacher per request.
      expect(() => w.repo.submitProposal(Proposal(requestId: req.id, parentUid: w.parentUid, teacherUid: w.teacherUid, teacherName: 'x', message: 'مرة ثانية', priceEgp: 100, minutes: 45)),
          throwsA(isA<AccountException>()));
      // The parent compares, shortlists and accepts with a summary.
      await w.as('p1@e.com');
      await tester.pumpWidget(_app(RequestDetailScreen(repo: w.repo, request: req)));
      await tester.pumpAndSettle();
      expect(find.text('أقترح خطة من 8 حصص'), findsOneWidget);
      await tester.tap(find.text('إضافة للقائمة المختصرة'));
      await tester.pumpAndSettle();
      expect(find.text('في القائمة المختصرة'), findsOneWidget);
      await tester.tap(find.text('قبول'));
      await tester.pumpAndSettle();
      expect(find.text('قبول العرض'), findsOneWidget);
      expect(find.textContaining('لا يُؤكَّد الحجز إلا بعد أن يقبل المدرس'), findsOneWidget);
      await tester.tap(find.text('رجوع')); // cancelling creates nothing
      await tester.pumpAndSettle();
      expect(await w.repo.myBookings(), isEmpty);
      await tester.tap(find.text('قبول'));
      await tester.pumpAndSettle();
      await tester.tap(find.text('قبول وإرسال الطلب'));
      await tester.pumpAndSettle();
      final booking = (await w.repo.myBookings()).single;
      expect(booking.proposalId, '${req.id}_${w.teacherUid}');
      expect(booking.status, bookingRequested); // not confirmed until the teacher accepts
      expect(booking.priceEgp, 200);
      expect(find.text('تم القبول'), findsOneWidget); // the proposal chip
    });

    testWidgets('a closed or expired request disappears for teachers and takes no proposals', (tester) async {
      final w = World();
      await w.setUp();
      await w.as('p1@e.com');
      await w.repo.createRequest(LearningRequest(
        parentUid: w.parentUid, subject: 'math', goal: 'جمع وطرح',
        expiresMs: DateTime.now().add(const Duration(days: 7)).millisecondsSinceEpoch,
      ));
      final req = (await w.repo.myRequests()).single;
      await w.as('t@e.com');
      expect((await w.repo.openRequests()).length, 1);
      await w.as('p1@e.com');
      await w.repo.closeRequest(req.id);
      await w.as('t@e.com');
      expect(await w.repo.openRequests(), isEmpty);
      expect(
        () => w.repo.submitProposal(Proposal(requestId: req.id, parentUid: w.parentUid, teacherUid: w.teacherUid, teacherName: 'x', message: 'm', priceEgp: 1, minutes: 30)),
        throwsA(isA<AccountException>()),
      );
      // A parent cannot list other people's requests as a teacher would.
      await w.as('p2@e.com');
      expect(() => w.repo.openRequests(), throwsA(isA<AccountException>()));
      expect(await w.repo.myRequests(), isEmpty);
    });

    test('invalid requests are refused: bad age, empty goal, expiry in the past or too far', () async {
      final w = World();
      await w.setUp();
      await w.as('p1@e.com');
      LearningRequest r({String goal = 'هدف', int? age, int days = 14}) => LearningRequest(
            parentUid: w.parentUid, subject: 'math', goal: goal, childAge: age,
            expiresMs: DateTime.now().add(Duration(days: days)).millisecondsSinceEpoch,
          );
      for (final bad in [r(goal: ''), r(age: 30), r(days: -1), r(days: 400)]) {
        expect(() => w.repo.createRequest(bad), throwsA(isA<AccountException>()));
      }
      await w.repo.createRequest(r(age: 6));
      expect((await w.repo.myRequests()).length, 1);
    });
  });

  group('directory with real ratings and availability', () {
    testWidgets('cards show the real rating and the earliest open slot, and the sort uses them', (tester) async {
      tall(tester);
      final w = World();
      await w.setUp();
      final slot = await w.addSlot(hours: 30);
      final past = w.pastAccepted();
      await w.as('t@e.com');
      await w.repo.finishLesson(past, status: bookingCompleted);
      await w.as('p1@e.com');
      await w.repo.submitReview(Review(bookingId: 'past1', teacherUid: w.teacherUid, parentUid: w.parentUid, rating: 5));
      await tester.pumpWidget(_app(ParentTeachersScreen(repo: w.repo, onSignOut: () {})));
      await tester.pumpAndSettle();
      expect(find.textContaining('5.0 من 5 (1 تقييم)'), findsOneWidget);
      expect(find.textContaining(fmtDateTime(slot.start)), findsOneWidget);
    });
  });
}

extension on TeacherProfile {
  TeacherProfile let(String uid) => TeacherProfile(
        uid: uid, name: name, bio: bio, subjects: subjects, languages: languages, priceNote: priceNote,
        priceEgp: priceEgp, cancellationPolicy: cancellationPolicy,
      );
}
