import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_bookings.dart';
import 'teachers_directory.dart';
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
  late Future<List<TeacherProfile>> _teachers;
  @override
  void initState() {
    super.initState();
    _teachers = widget.repo.approvedTeachers();
  }

  void _reload() {
    final teachers = widget.repo.approvedTeachers();
    setState(() {
      _teachers = teachers;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('المدرسون'),
        actions: [
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
      body: FutureBuilder<List<TeacherProfile>>(
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
          final all = snapshot.data!;
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
                  onOpen: (t) => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => TeacherDetailScreen(repo: widget.repo, teacher: t)),
                  ),
                  onCompare: (list) => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => CompareTeachersScreen(teachers: list)),
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
                  _section('التقييمات',
                      const Text('لا توجد تقييمات بعد. ستظهر هنا تقييمات أولياء الأمور بعد حصص مكتملة فقط.')),
                  _section('اكتمال الملف', Text('${done.done.length} من ${done.total} (يكتبه المدرس بنفسه، وليس شارة تحقق)')),
                ],
              ),
            ),
          ),
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
