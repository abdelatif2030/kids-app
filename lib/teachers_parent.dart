import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_bookings.dart';
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
  String? _subject;

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
          final subjects = {for (final t in all) ...t.subjects};
          final shown =
              all.where((t) => _subject == null || t.subjects.contains(_subject)).toList();
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              const Card(
                child: Padding(
                  padding: EdgeInsets.all(12),
                  child: Text(
                    'المدرسون يسجّلون بأنفسهم ولا يفحصهم التطبيق، فتحقق منهم قبل الحجز. '
                    'لا توجد محادثة داخل التطبيق: عند قبول المدرس لطلبك يظهر رابط الحصة '
                    'في «طلباتي». افتح الرابط بنفسك وكن بجانب طفلك طوال الحصة.',
                  ),
                ),
              ),
              if (subjects.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  child: Wrap(
                    spacing: 8,
                    children: [
                      ChoiceChip(
                        label: const Text('الكل'),
                        selected: _subject == null,
                        onSelected: (_) => setState(() => _subject = null),
                      ),
                      for (final id in subjects)
                        ChoiceChip(
                          label: Text(subjectById(id)?.label ?? id),
                          selected: _subject == id,
                          onSelected: (_) => setState(() => _subject = id),
                        ),
                    ],
                  ),
                ),
              if (shown.isEmpty)
                const Padding(
                  padding: EdgeInsets.all(32),
                  child: Center(
                    child: Text('لا يوجد مدرسون متاحون الآن', style: TextStyle(fontSize: 20)),
                  ),
                ),
              for (final t in shown)
                Card(
                  margin: const EdgeInsets.symmetric(vertical: 6),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                  child: InkWell(
                    borderRadius: BorderRadius.circular(20),
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => TeacherDetailScreen(repo: widget.repo, teacher: t),
                      ),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(14),
                      child: Row(
                        children: [
                          TeacherAvatar(photo: t.photoBytes, radius: 34),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(t.name,
                                    style: const TextStyle(
                                        fontSize: 19, fontWeight: FontWeight.bold)),
                                const SizedBox(height: 6),
                                Wrap(spacing: 6, runSpacing: 6, children: [
                                  for (final id in t.subjects) SubjectChip(id: id),
                                ]),
                                const SizedBox(height: 6),
                                Text(t.languages.join('، '),
                                    style: const TextStyle(fontSize: 14)),
                              ],
                            ),
                          ),
                          const Icon(Icons.chevron_left),
                        ],
                      ),
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
  const TeacherDetailScreen({super.key, required this.repo, required this.teacher});

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(teacher.name)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          TeacherHeader(
            avatar: TeacherAvatar(photo: teacher.photoBytes, radius: 44),
            title: teacher.name,
            subtitle: teacher.languages.join('، '),
          ),
          const SizedBox(height: 12),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(teacher.bio, style: const TextStyle(fontSize: 17)),
                  const SizedBox(height: 12),
                  Wrap(spacing: 8, runSpacing: 8, children: [
                    for (final id in teacher.subjects) SubjectChip(id: id),
                  ]),
                  if (teacher.priceNote.isNotEmpty) ...[
                    const SizedBox(height: 12),
                    Text('السعر: ${teacher.priceNote}', style: const TextStyle(fontSize: 17)),
                  ],
                ],
              ),
            ),
          ),
          if (teacher.cvName != null)
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
