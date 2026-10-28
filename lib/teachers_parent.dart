import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_bookings.dart';
import 'teachers_directory.dart';
import 'teachers_market.dart';
import 'teachers_requests.dart';
import 'teachers_time.dart';
import 'media_picker.dart';
import 'teachers_models.dart';
import 'teachers_widgets.dart';

String subjectLabels(List<String> ids) =>
    [for (final id in ids) subjectById(id)?.label ?? id].join('، ');

/// A parent's view: approved teachers, and "my requests".
class ParentTeachersScreen extends StatefulWidget {
  final TeacherRepository repo;
  final VoidCallback onSignOut;
  const ParentTeachersScreen({super.key, required this.repo, required this.onSignOut});

  @override
  State<ParentTeachersScreen> createState() => _ParentTeachersScreenState();
}

class _ParentTeachersScreenState extends State<ParentTeachersScreen> {
  late Future<_DirectoryData> _teachers;

  Future<_DirectoryData> _load() async {
    final teachers = await widget.repo.approvedTeachers();
    // Real reviews and each teacher's soonest open slot. If either fails the
    // directory still works, just without ratings or availability.
    var ratings = <String, RatingSummary>{};
    try {
      ratings = ratingSummaries(await widget.repo.allReviews());
    } catch (_) {}
    final earliest = <String, int>{};
    final now = DateTime.now();
    for (final t in teachers.take(40)) {
      try {
        final s = earliestOpen(await widget.repo.slotsOf(t.uid), now);
        if (s != null) earliest[t.uid] = s.startMs;
      } catch (_) {}
    }
    return _DirectoryData(teachers, ratings, earliest);
  }

  @override
  void initState() {
    super.initState();
    _teachers = _load();
  }

  void _reload() {
    final f = _load();
    setState(() {
      _teachers = f;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('المدرسون'),
        actions: [
          IconButton(
            tooltip: 'طلب تعليمي',
            icon: const Icon(Icons.post_add_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => MyRequestsScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: 'طلباتي',
            icon: const Icon(Icons.event_note_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => BookingsScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: 'تسجيل الخروج',
            icon: const Icon(Icons.logout),
            onPressed: widget.onSignOut,
          ),
        ],
      ),
      body: FutureBuilder<_DirectoryData>(
        future: _teachers,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text('تعذر تحميل المدرسين', style: TextStyle(fontSize: 20)),
                  const SizedBox(height: 12),
                  FilledButton(onPressed: _reload, child: const Text('إعادة المحاولة')),
                ],
              ),
            );
          }
          final data = snapshot.data!;
          final all = data.teachers;
          return Column(
            children: [
              const Card(
                margin: EdgeInsets.fromLTRB(16, 8, 16, 0),
                child: Padding(
                  padding: EdgeInsets.all(12),
                  child: Text(
                    'المدرسون يسجّلون بأنفسهم ولا يفحصهم التطبيق، فتحقق منهم قبل الحجز. '
                    'شارة «تم التحقق» تظهر فقط حين يتحقق صاحب التطبيق فعلاً، ولا تظهر بمجرد اكتمال الملف. '
                    'لا توجد محادثة داخل التطبيق: عند قبول المدرس لطلبك يظهر رابط الحصة '
                    'في «طلباتي». افتح الرابط بنفسك وكن بجانب طفلك طوال الحصة.',
                    style: TextStyle(fontSize: 13),
                  ),
                ),
              ),
              Expanded(
                child: TeacherDirectory(
                  teachers: all,
                  ratings: data.ratings,
                  earliest: data.earliest,
                  onOpen: (t) => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => TeacherDetailScreen(repo: widget.repo, teacher: t)),
                  ),
                  onCompare: (list) => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => CompareTeachersScreen(teachers: list, ratings: data.ratings)),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _DirectoryData {
  final List<TeacherProfile> teachers;
  final Map<String, RatingSummary> ratings;
  final Map<String, int> earliest;
  const _DirectoryData(this.teachers, this.ratings, this.earliest);
}

class TeacherDetailScreen extends StatelessWidget {
  final TeacherRepository repo;
  final TeacherProfile teacher;

  /// A teacher looking at their own page as parents see it: no booking, report or CV buttons.
  final bool preview;
  const TeacherDetailScreen({super.key, required this.repo, required this.teacher, this.preview = false});

  Future<void> _request(BuildContext context) async {
    final user = repo.currentUser;
    if (user == null) return;
    final parentName = await repo.displayName();
    if (!context.mounted) return;
    final booking = await showDialog<Booking>(
      context: context,
      builder: (_) => BookingDialog(
        teacher: teacher,
        parentUid: user.uid,
        parentName: parentName,
      ),
    );
    if (booking == null) return;
    String message;
    try {
      await repo.requestBooking(booking);
      message = 'تم إرسال طلبك. ستجد الرد في «طلباتي».';
    } on AccountException catch (e) {
      message = e.message;
    }
    if (context.mounted) {
      // Replace any message still showing, so the newest one is always visible.
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
    }
  }

  Future<void> _report(BuildContext context) async {
    final reason = await showDialog<String>(
      context: context,
      builder: (_) => const _ReportDialog(),
    );
    if (reason == null) return;
    String message;
    try {
      await repo.reportTeacher(teacher.uid, reason);
      message = 'وصلنا بلاغك، شكراً لك.';
    } on AccountException catch (e) {
      message = e.message;
    }
    if (context.mounted) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
    }
  }

  Future<void> _downloadCv(BuildContext context) async {
    String message;
    try {
      final cv = await repo.loadCv(teacher.uid);
      if (cv == null) {
        message = 'لا توجد سيرة ذاتية';
      } else {
        await mediaPicker.saveCv(cv);
        message = 'تم حفظ السيرة الذاتية';
      }
    } on AccountException catch (e) {
      message = e.message;
    }
    if (context.mounted) {
      // Replace any message still showing, so the newest one is always visible.
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
    }
  }

  Widget _section(String title, Widget child) => Padding(
        padding: const EdgeInsets.only(top: 14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
            const SizedBox(height: 4),
            child,
          ],
        ),
      );

  Widget _chips(List<String> items) =>
      Wrap(spacing: 6, runSpacing: 6, children: [for (final i in items) Chip(label: Text(i), visualDensity: VisualDensity.compact)]);

  @override
  Widget build(BuildContext context) {
    final t = teacher;
    final facts = teacherFacts(t);
    final done = profileCompleteness(t);
    return Scaffold(
      appBar: AppBar(title: Text(t.name)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          TeacherHeader(
            avatar: TeacherAvatar(photo: t.photoBytes, radius: 44),
            title: t.name,
            subtitle: t.headline.isNotEmpty ? t.headline : t.languages.join('، '),
          ),
          const SizedBox(height: 10),
          VerificationBadges(teacher: t),
          if (!t.identityVerified && !t.qualificationVerified)
            const Text('لم يتحقق صاحب التطبيق من هوية هذا المدرس أو مؤهله. المعلومات أدناه يكتبها المدرس بنفسه.',
                style: TextStyle(fontSize: 13)),
          if (facts.isNotEmpty)
            Card(
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Wrap(
                  spacing: 16,
                  runSpacing: 6,
                  children: [for (final f in facts) Text(f, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600))],
                ),
              ),
            ),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(t.bio, style: const TextStyle(fontSize: 17)),
                  if (t.philosophy.isNotEmpty) _section('أسلوبي في التعليم', Text(t.philosophy)),
                  _section('المواد', Wrap(spacing: 8, runSpacing: 8, children: [for (final id in t.subjects) SubjectChip(id: id)])),
                  if (t.specialties.isNotEmpty) _section('التخصصات', _chips(t.specialties)),
                  if (t.curricula.isNotEmpty) _section('المناهج', _chips(t.curricula)),
                  if (t.languages.isNotEmpty || t.dialects.isNotEmpty)
                    _section('اللغة واللهجة', _chips([...t.languages, ...t.dialects])),
                  if (t.formats.isNotEmpty || t.classTypes.isNotEmpty)
                    _section('نوع الحصة', _chips([...t.formats.map(formatLabel), ...t.classTypes.map(classTypeLabel)])),
                  if (t.styles.isNotEmpty) _section('أساليب التدريس', _chips(t.styles)),
                  if (t.qualifications.isNotEmpty)
                    _section(
                      t.qualificationVerified ? 'المؤهلات (تم التحقق منها)' : 'المؤهلات (كتبها المدرس ولم يتحقق منها التطبيق)',
                      Text(t.qualifications),
                    ),
                  _section('سياسة الإلغاء',
                      Text(t.cancellationPolicy.isEmpty ? 'لم يحدد المدرس سياسة إلغاء بعد.' : t.cancellationPolicy)),
                  _section('التقييمات', ReviewsSection(repo: repo, teacher: t, canReport: !preview)),
                  _section('اكتمال الملف', Text('${done.done.length} من ${done.total} (يكتبه المدرس بنفسه، وليس شارة تحقق)')),
                ],
              ),
            ),
          ),
          if (!preview) SlotsSection(repo: repo, teacher: t),
          if (preview)
            const Padding(
              padding: EdgeInsets.only(top: 12),
              child: Text('هذه معاينة لصفحتك كما يراها الأهل.', textAlign: TextAlign.center),
            )
          else ...[
            if (t.cvName != null)
              OutlinedButton.icon(
                onPressed: () => _downloadCv(context),
                icon: const Icon(Icons.description_outlined),
                label: const Text('تنزيل السيرة الذاتية'),
              ),
            const SizedBox(height: 12),
            FilledButton.icon(
              onPressed: () => _request(context),
              icon: const Icon(Icons.event_available),
              label: const Text('اطلب حصة'),
            ),
            TextButton.icon(
              onPressed: () => _report(context),
              icon: const Icon(Icons.flag_outlined),
              label: const Text('إبلاغ عن هذا المدرس'),
            ),
          ],
        ],
      ),
    );
  }
}

/// A short reason for reporting a teacher. Returns the text, or null.
class _ReportDialog extends StatefulWidget {
  const _ReportDialog();

  @override
  State<_ReportDialog> createState() => _ReportDialogState();
}

class _ReportDialogState extends State<_ReportDialog> {
  final _reason = TextEditingController();

  @override
  void dispose() {
    _reason.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('إبلاغ عن مدرس'),
      content: TextField(
        controller: _reason,
        maxLines: 4,
        maxLength: 400,
        decoration: const InputDecoration(labelText: 'ما المشكلة؟'),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('إلغاء')),
        FilledButton(
          onPressed: () {
            final text = _reason.text.trim();
            if (text.isNotEmpty) Navigator.pop(context, text);
          },
          child: const Text('إرسال'),
        ),
      ],
    );
  }
}

/// Asks for the subject, a preferred time (free text), an optional child age
/// and a note. Returns the [Booking] to send, or null.
class BookingDialog extends StatefulWidget {
  final TeacherProfile teacher;
  final String parentUid;
  final String parentName;
  const BookingDialog({
    super.key,
    required this.teacher,
    required this.parentUid,
    required this.parentName,
  });

  @override
  State<BookingDialog> createState() => _BookingDialogState();
}

class _BookingDialogState extends State<BookingDialog> {
  final _when = TextEditingController();
  final _note = TextEditingController();
  late String _subject = widget.teacher.subjects.first;
  int? _age;

  @override
  void dispose() {
    _when.dispose();
    _note.dispose();
    super.dispose();
  }

  void _send() {
    if (_when.text.trim().isEmpty) return;
    Navigator.pop(
      context,
      Booking(
        parentUid: widget.parentUid,
        teacherUid: widget.teacher.uid,
        teacherName: widget.teacher.name,
        parentName: widget.parentName,
        subject: _subject,
        whenText: _when.text.trim(),
        childAge: _age,
        note: _note.text.trim(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('طلب حصة'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            DropdownButton<String>(
              isExpanded: true,
              value: _subject,
              items: [
                for (final id in widget.teacher.subjects)
                  DropdownMenuItem(value: id, child: Text(subjectById(id)?.label ?? id)),
              ],
              onChanged: (v) => setState(() => _subject = v ?? _subject),
            ),
            TextField(
              controller: _when,
              decoration: const InputDecoration(
                labelText: 'الوقت المناسب',
                hintText: 'مثال: السبت بعد العصر',
              ),
            ),
            DropdownButton<int?>(
              isExpanded: true,
              value: _age,
              hint: const Text('عمر الطفل (اختياري)'),
              items: [
                const DropdownMenuItem<int?>(value: null, child: Text('بدون')),
                for (var a = 1; a <= 12; a++) DropdownMenuItem<int?>(value: a, child: Text('$a')),
              ],
              onChanged: (v) => setState(() => _age = v),
            ),
            TextField(
              controller: _note,
              maxLines: 3,
              decoration: const InputDecoration(labelText: 'ملاحظة (اختياري)'),
            ),
            const SizedBox(height: 8),
            Text(
              widget.teacher.cancellationPolicy.isEmpty
                  ? 'سياسة الإلغاء: لم يحدد المدرس سياسة بعد. اتفقا عليها قبل الحصة.'
                  : 'سياسة الإلغاء: ${widget.teacher.cancellationPolicy}',
              style: const TextStyle(fontSize: 13),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('إلغاء')),
        FilledButton(onPressed: _send, child: const Text('إرسال الطلب')),
      ],
    );
  }
}


/// A teacher's real ratings, from review records of completed lessons only.
class ReviewsSection extends StatefulWidget {
  final TeacherRepository repo;
  final TeacherProfile teacher;
  final bool canReport;
  const ReviewsSection({super.key, required this.repo, required this.teacher, this.canReport = true});

  @override
  State<ReviewsSection> createState() => _ReviewsSectionState();
}

class _ReviewsSectionState extends State<ReviewsSection> {
  late final Future<List<Review>> _reviews = widget.repo.reviewsFor(widget.teacher.uid);

  Future<void> _report(Review r) async {
    final reason = await showDialog<String>(context: context, builder: (_) => const _ReportDialog());
    if (reason == null) return;
    String message;
    try {
      await widget.repo.reportReview(r.bookingId, reason);
      message = 'وصلنا بلاغك عن التقييم.';
    } on AccountException catch (e) {
      message = e.message;
    }
    if (mounted) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
    }
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Review>>(
      future: _reviews,
      builder: (context, snap) {
        if (snap.connectionState != ConnectionState.done) return const LinearProgressIndicator();
        if (snap.hasError) return const Text('تعذر تحميل التقييمات.');
        final list = snap.data!;
        final summary = RatingSummary.of(list);
        if (list.isEmpty) {
          return const Text('لا توجد تقييمات بعد. تظهر هنا تقييمات أولياء الأمور بعد حصص مكتملة فقط.');
        }
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('★ ${summary.average.toStringAsFixed(1)} من 5 · ${summary.count} تقييم (متوسط حقيقي من تقييمات الحصص المكتملة)',
                style: const TextStyle(fontWeight: FontWeight.w600)),
            for (final r in list.where((r) => r.text.isNotEmpty).take(10))
              ListTile(
                dense: true,
                contentPadding: EdgeInsets.zero,
                title: Text('${'★' * r.rating}${'☆' * (5 - r.rating)}'),
                subtitle: Text(r.text),
                trailing: widget.canReport
                    ? IconButton(
                        tooltip: 'إبلاغ عن هذا التقييم',
                        icon: const Icon(Icons.flag_outlined, size: 18),
                        onPressed: () => _report(r),
                      )
                    : null,
              ),
          ],
        );
      },
    );
  }
}

/// Real, bookable times. Booking changes the slot and creates the request in
/// one step; the screen says "sent" only after that succeeded.
class SlotsSection extends StatefulWidget {
  final TeacherRepository repo;
  final TeacherProfile teacher;
  const SlotsSection({super.key, required this.repo, required this.teacher});

  @override
  State<SlotsSection> createState() => _SlotsSectionState();
}

class _SlotsSectionState extends State<SlotsSection> {
  late Future<List<Slot>> _slots = _load();

  Future<List<Slot>> _load() async {
    final now = DateTime.now();
    return [for (final s in await widget.repo.slotsOf(widget.teacher.uid)) if (s.isBookableAt(now)) s].take(12).toList();
  }

  void _reload() {
    final f = _load();
    setState(() {
      _slots = f;
    });
  }

  Future<void> _book(Slot s) async {
    final user = widget.repo.currentUser;
    if (user == null) return;
    final name = await widget.repo.displayName();
    if (!mounted) return;
    final booking = await showDialog<Booking>(
      context: context,
      builder: (_) => SlotBookingDialog(teacher: widget.teacher, slot: s, parentUid: user.uid, parentName: name),
    );
    if (booking == null) return;
    String message;
    try {
      await widget.repo.bookSlot(booking);
      message = 'تم حجز الموعد وإرسال الطلب إلى المدرس. تابعه في «طلباتي».';
    } on AccountException catch (e) {
      message = e.message;
    }
    if (mounted) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
      _reload();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('المواعيد المتاحة', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
            const Text('بتوقيت جهازك', style: TextStyle(fontSize: 12)),
            FutureBuilder<List<Slot>>(
              future: _slots,
              builder: (context, snap) {
                if (snap.connectionState != ConnectionState.done) return const LinearProgressIndicator();
                if (snap.hasError) {
                  return TextButton(onPressed: _reload, child: const Text('تعذر تحميل المواعيد. إعادة المحاولة'));
                }
                final slots = snap.data!;
                if (slots.isEmpty) {
                  return const Padding(
                    padding: EdgeInsets.only(top: 8),
                    child: Text('لا توجد مواعيد متاحة الآن. يمكنك إرسال «اطلب حصة» بوقت من اختيارك.'),
                  );
                }
                return Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    for (final s in slots)
                      ActionChip(
                        label: Text('${fmtDateTime(s.start)} · ${s.minutes} د'),
                        onPressed: () => _book(s),
                      ),
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

/// Everything a parent must see before booking: time, length, price, the
/// cancellation terms, and that nothing is paid in the app.
class SlotBookingDialog extends StatefulWidget {
  final TeacherProfile teacher;
  final Slot slot;
  final String parentUid;
  final String parentName;
  const SlotBookingDialog({
    super.key,
    required this.teacher,
    required this.slot,
    required this.parentUid,
    required this.parentName,
  });

  @override
  State<SlotBookingDialog> createState() => _SlotBookingDialogState();
}

class _SlotBookingDialogState extends State<SlotBookingDialog> {
  late String _subject = widget.teacher.subjects.first;
  final _note = TextEditingController();
  int? _age;

  @override
  void dispose() {
    _note.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final t = widget.teacher;
    final s = widget.slot;
    final price = t.priceEgp != null ? '${t.priceEgp} جنيه للحصة' : (t.priceNote.isEmpty ? 'السعر يُتفق عليه مع المدرس' : t.priceNote);
    return AlertDialog(
      title: const Text('تأكيد حجز الموعد'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('${t.name}\n${fmtDateTime(s.start)} · ${s.minutes} دقيقة', style: const TextStyle(fontWeight: FontWeight.bold)),
            Text('السعر: $price'),
            DropdownButton<String>(
              isExpanded: true,
              value: _subject,
              items: [for (final id in t.subjects) DropdownMenuItem(value: id, child: Text(subjectById(id)?.label ?? id))],
              onChanged: (v) => setState(() => _subject = v ?? _subject),
            ),
            DropdownButton<int?>(
              isExpanded: true,
              value: _age,
              hint: const Text('عمر الطفل (اختياري)'),
              items: [
                const DropdownMenuItem<int?>(value: null, child: Text('بدون')),
                for (var a = 1; a <= 12; a++) DropdownMenuItem<int?>(value: a, child: Text('$a')),
              ],
              onChanged: (v) => setState(() => _age = v),
            ),
            TextField(controller: _note, maxLines: 2, decoration: const InputDecoration(labelText: 'ملاحظة (اختياري)')),
            const SizedBox(height: 8),
            Text(
              t.cancellationPolicy.isEmpty
                  ? 'سياسة الإلغاء: لم يحدد المدرس سياسة بعد. اتفقا عليها قبل الحصة.'
                  : 'سياسة الإلغاء: ${t.cancellationPolicy}',
              style: const TextStyle(fontSize: 13),
            ),
            const Text(
              'يُرسل الطلب إلى المدرس ولا يُؤكَّد إلا بقبوله. لا يوجد دفع داخل التطبيق.',
              style: TextStyle(fontSize: 12),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('رجوع')),
        FilledButton(
          onPressed: () => Navigator.pop(
            context,
            Booking(
              parentUid: widget.parentUid,
              teacherUid: t.uid,
              teacherName: t.name,
              parentName: widget.parentName,
              subject: _subject,
              whenText: fmtDateTime(s.start),
              childAge: _age,
              note: _note.text.trim(),
              slotId: s.id,
              startMs: s.startMs,
              minutes: s.minutes,
              priceEgp: t.priceEgp,
            ),
          ),
          child: const Text('احجز'),
        ),
      ],
    );
  }
}
