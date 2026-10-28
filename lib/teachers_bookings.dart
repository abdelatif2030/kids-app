import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'curriculum.dart';
import 'teachers_models.dart';

String _statusLabel(String s) => switch (s) {
      bookingRequested => 'قيد الانتظار',
      bookingAccepted => 'تم القبول',
      bookingDeclined => 'مرفوض',
      bookingCancelled => 'ملغي',
      _ => s,
    };

/// Lesson requests: a parent's own (can cancel, sees the link once accepted),
/// or a teacher's incoming ones (accept with an https link, or decline).
class BookingsScreen extends StatefulWidget {
  final TeacherRepository repo;
  const BookingsScreen({super.key, required this.repo});

  @override
  State<BookingsScreen> createState() => _BookingsScreenState();
}

class _BookingsScreenState extends State<BookingsScreen> {
  late Future<(UserRole?, List<Booking>)> _data = _load();

  Future<(UserRole?, List<Booking>)> _load() async =>
      (await widget.repo.currentRole(), await widget.repo.myBookings());

  void _reload() {
    final data = _load();
    setState(() {
      _data = data;
    });
  }

  Future<void> _update(String id, String status, {String? link}) async {
    try {
      await widget.repo.updateBooking(id, status: status, lessonLink: link);
    } on AccountException catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
      }
    }
    if (mounted) _reload();
  }

  Future<void> _accept(Booking b) async {
    final link = await showDialog<String>(
      context: context,
      builder: (_) => const _LinkDialog(),
    );
    if (link != null) await _update(b.id, bookingAccepted, link: link);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('طلبات الحصص')),
      body: FutureBuilder<(UserRole?, List<Booking>)>(
        future: _data,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(
              child: FilledButton(onPressed: _reload, child: const Text('إعادة المحاولة')),
            );
          }
          final (role, bookings) = snapshot.data!;
          if (bookings.isEmpty) {
            return const Center(child: Text('لا توجد طلبات', style: TextStyle(fontSize: 20)));
          }
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              for (final b in bookings)
                _BookingCard(
                  booking: b,
                  asTeacher: role == UserRole.teacher,
                  onAccept: () => _accept(b),
                  onDecline: () => _update(b.id, bookingDeclined),
                  onCancel: () => _update(b.id, bookingCancelled),
                ),
            ],
          );
        },
      ),
    );
  }
}

class _BookingCard extends StatelessWidget {
  final Booking booking;
  final bool asTeacher;
  final VoidCallback onAccept;
  final VoidCallback onDecline;
  final VoidCallback onCancel;
  const _BookingCard({
    required this.booking,
    required this.asTeacher,
    required this.onAccept,
    required this.onDecline,
    required this.onCancel,
  });

  @override
  Widget build(BuildContext context) {
    final b = booking;
    final who = asTeacher ? 'ولي الأمر: ${b.parentName}' : 'المدرس: ${b.teacherName}';
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(who, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                ),
                Chip(label: Text(_statusLabel(b.status))),
              ],
            ),
            Text('المادة: ${subjectById(b.subject)?.label ?? b.subject}'),
            Text('الوقت المطلوب: ${b.whenText}'),
            if (b.childAge != null) Text('عمر الطفل: ${b.childAge}'),
            if (b.note.isNotEmpty) Text('ملاحظة: ${b.note}'),
            if (!asTeacher && b.status == bookingAccepted && b.lessonLink != null) ...[
              const SizedBox(height: 8),
              const Text('رابط الحصة (افتحه بنفسك وكن بجانب طفلك):'),
              SelectableText(
                b.lessonLink!,
                textDirection: TextDirection.ltr,
                style: const TextStyle(color: Colors.blue),
              ),
              TextButton.icon(
                onPressed: () async {
                  await Clipboard.setData(ClipboardData(text: b.lessonLink!));
                  if (context.mounted) {
                    ScaffoldMessenger.of(context)
                        .showSnackBar(const SnackBar(content: Text('تم نسخ الرابط')));
                  }
                },
                icon: const Icon(Icons.copy),
                label: const Text('نسخ الرابط'),
              ),
            ],
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              children: [
                if (asTeacher && b.status == bookingRequested) ...[
                  FilledButton(onPressed: onAccept, child: const Text('قبول')),
                  OutlinedButton(onPressed: onDecline, child: const Text('رفض')),
                ],
                if (!asTeacher &&
                    (b.status == bookingRequested || b.status == bookingAccepted))
                  OutlinedButton(onPressed: onCancel, child: const Text('إلغاء الطلب')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// The teacher pastes the https lesson link (e.g. a Google Meet or Zoom room).
class _LinkDialog extends StatefulWidget {
  const _LinkDialog();

  @override
  State<_LinkDialog> createState() => _LinkDialogState();
}

class _LinkDialogState extends State<_LinkDialog> {
  final _link = TextEditingController();
  String? _error;

  @override
  void dispose() {
    _link.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('رابط الحصة'),
      content: TextField(
        controller: _link,
        textDirection: TextDirection.ltr,
        keyboardType: TextInputType.url,
        decoration: InputDecoration(
          labelText: 'https://...',
          errorText: _error,
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('إلغاء')),
        FilledButton(
          onPressed: () {
            final link = _link.text.trim();
            if (!isValidLessonLink(link)) {
              setState(() => _error = 'اكتب رابطاً صحيحاً يبدأ بـ https');
              return;
            }
            Navigator.pop(context, link);
          },
          child: const Text('قبول الطلب'),
        ),
      ],
    );
  }
}
