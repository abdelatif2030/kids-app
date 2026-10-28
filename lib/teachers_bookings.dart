import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'curriculum.dart';
import 'teachers_followup.dart';
import 'teachers_models.dart';
import 'teachers_time.dart';
import 'l10n/strings.dart';

String _statusLabel(String s) => switch (s) {
      bookingRequested => loc('قيد الانتظار'),
      bookingAccepted => loc('تم القبول'),
      bookingDeclined => loc('مرفوض'),
      bookingCancelled => loc('ملغي'),
      bookingCompleted => loc('اكتملت'),
      bookingNoShow => loc('لم تتم (غياب)'),
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
  late Future<(UserRole?, List<Booking>, Set<String>)> _data = _load();

  Future<(UserRole?, List<Booking>, Set<String>)> _load() async {
    final role = await widget.repo.currentRole();
    final bookings = await widget.repo.myBookings();
    // Which completed lessons already have a review (parents only).
    var reviewed = <String>{};
    if (role == UserRole.parent && bookings.any((b) => b.status == bookingCompleted)) {
      reviewed = {for (final r in await widget.repo.allReviews()) r.bookingId};
    }
    return (role, bookings, reviewed);
  }

  void _reload() {
    final data = _load();
    setState(() {
      _data = data;
    });
  }

  Future<void> _run(Future<void> Function() action) async {
    try {
      await action();
    } on AccountException catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
          ..hideCurrentSnackBar()
          ..showSnackBar(SnackBar(content: Text(e.message)));
      }
    }
    if (mounted) _reload();
  }

  Future<bool> _confirm(String title, String body, String yes) async =>
      await showDialog<bool>(
        context: context,
        builder: (_) => AlertDialog(
          title: Text(title),
          content: Text(body),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('رجوع'))),
            FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(yes)),
          ],
        ),
      ) ??
      false;

  Future<void> _accept(Booking b) async {
    final link = await showDialog<String>(
      context: context,
      builder: (_) => const _LinkDialog(),
    );
    if (link != null) await _run(() => widget.repo.updateBooking(b.id, status: bookingAccepted, lessonLink: link));
  }

  Future<void> _decline(Booking b) async {
    if (!await _confirm(loc('رفض الطلب؟'), loc('سيُبلَّغ ولي الأمر، ويعود الموعد متاحاً لغيره.'), loc('رفض'))) return;
    await _run(() => b.slotId != null
        ? widget.repo.cancelOrDecline(b, status: bookingDeclined)
        : widget.repo.updateBooking(b.id, status: bookingDeclined));
  }

  Future<void> _cancel(Booking b) async {
    if (!await _confirm(loc('إلغاء الحجز؟'), loc('سيعود الموعد متاحاً لغيرك. راجع سياسة إلغاء المدرس في صفحته.'), loc('إلغاء الحجز'))) return;
    await _run(() => b.slotId != null
        ? widget.repo.cancelOrDecline(b, status: bookingCancelled)
        : widget.repo.updateBooking(b.id, status: bookingCancelled));
  }

  Future<void> _finish(Booking b, String status) async {
    final done = status == bookingCompleted;
    if (!await _confirm(done ? loc('تأكيد أن الحصة تمت؟') : loc('تسجيل غياب؟'),
        done ? loc('بعد التأكيد يستطيع ولي الأمر تقييمك، وتستطيع كتابة تقرير الحصة. لا يمكن التراجع.') : loc('لن يستطيع ولي الأمر تقييم حصة لم تتم. لا يمكن التراجع.'),
        loc('تأكيد'))) {
      return;
    }
    await _run(() => widget.repo.finishLesson(b, status: status));
  }

  Future<void> _open(Widget screen) async {
    await Navigator.push(context, MaterialPageRoute(builder: (_) => screen));
    if (mounted) _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('طلبات الحصص'))),
      body: FutureBuilder<(UserRole?, List<Booking>, Set<String>)>(
        future: _data,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(
              child: FilledButton(onPressed: _reload, child: Text(loc('إعادة المحاولة'))),
            );
          }
          final (role, bookings, reviewed) = snapshot.data!;
          if (bookings.isEmpty) {
            return Center(child: Text(loc('لا توجد طلبات'), style: TextStyle(fontSize: 20)));
          }
          final asTeacher = role == UserRole.teacher;
          final active = [for (final b in bookings) if (b.status == bookingRequested || b.status == bookingAccepted) b]
            ..sort((a, b) => (a.startMs ?? 1 << 50).compareTo(b.startMs ?? 1 << 50));
          final history = [for (final b in bookings) if (b.status != bookingRequested && b.status != bookingAccepted) b];
          Widget card(Booking b) => _BookingCard(
                booking: b,
                asTeacher: asTeacher,
                reviewed: reviewed.contains(b.id),
                onAccept: () => _accept(b),
                onDecline: () => _decline(b),
                onCancel: () => _cancel(b),
                onDone: () => _finish(b, bookingCompleted),
                onNoShow: () => _finish(b, bookingNoShow),
                onMessages: () => _open(ConversationScreen(repo: widget.repo, booking: b)),
                onReport: () => _open(asTeacher
                    ? LessonReportForm(repo: widget.repo, booking: b)
                    : LessonReportView(repo: widget.repo, booking: b)),
                onReview: () async {
                  await showReviewDialog(context, widget.repo, b);
                  if (mounted) _reload();
                },
              );
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              if (active.isNotEmpty) Text(loc('القادمة والمعلّقة'), style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
              for (final b in active) card(b),
              if (history.isNotEmpty)
                Padding(
                  padding: EdgeInsets.only(top: 12),
                  child: Text(loc('السجل'), style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                ),
              for (final b in history) card(b),
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
  final bool reviewed;
  final VoidCallback onAccept;
  final VoidCallback onDecline;
  final VoidCallback onCancel;
  final VoidCallback onDone;
  final VoidCallback onNoShow;
  final VoidCallback onMessages;
  final VoidCallback onReport;
  final VoidCallback onReview;
  const _BookingCard({
    required this.booking,
    required this.asTeacher,
    required this.reviewed,
    required this.onAccept,
    required this.onDecline,
    required this.onCancel,
    required this.onDone,
    required this.onNoShow,
    required this.onMessages,
    required this.onReport,
    required this.onReview,
  });

  @override
  Widget build(BuildContext context) {
    final b = booking;
    final who = asTeacher ? tr2('ولي الأمر: ${b.parentName}', 'Parent: ${b.parentName}') : tr2('المدرس: ${b.teacherName}', 'Teacher: ${b.teacherName}');
    final canChat = b.status == bookingRequested || b.status == bookingAccepted || b.status == bookingCompleted;
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
            Text(tr2('المادة: ${subjectById(b.subject)?.label ?? b.subject}', 'Subject: ${subjectById(b.subject)?.label ?? b.subject}')),
            if (b.scheduled)
              Text(tr2('الموعد: ${fmtDateTime(b.start!)} (${b.minutes ?? ''} دقيقة، بتوقيت جهازك)', 'Time: ${fmtDateTime(b.start!)} (${b.minutes ?? ''} minutes, in your device\'s time)'))
            else
              Text(tr2('الوقت المطلوب: ${b.whenText}', 'Requested time: ${b.whenText}')),
            if (b.priceEgp != null) Text(tr2('السعر: ${b.priceEgp} جنيه للحصة (لا دفع داخل التطبيق)', 'Price: ${b.priceEgp} EGP per lesson (no payment inside the app)')),
            if (b.childAge != null) Text(tr2('عمر الطفل: ${b.childAge}', 'Child\'s age: ${b.childAge}')),
            if (b.note.isNotEmpty) Text(tr2('ملاحظة: ${b.note}', 'Note: ${b.note}')),
            if (!asTeacher && b.status == bookingAccepted && b.lessonLink != null) ...[
              const SizedBox(height: 8),
              Text(loc('رابط الحصة (افتحه بنفسك وكن بجانب طفلك):')),
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
                        .showSnackBar(SnackBar(content: Text(loc('تم نسخ الرابط'))));
                  }
                },
                icon: const Icon(Icons.copy),
                label: Text(loc('نسخ الرابط')),
              ),
            ],
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              children: [
                if (asTeacher && b.status == bookingRequested) ...[
                  FilledButton(onPressed: onAccept, child: Text(loc('قبول'))),
                  OutlinedButton(onPressed: onDecline, child: Text(loc('رفض'))),
                ],
                if (asTeacher && b.status == bookingAccepted && b.scheduled && b.started) ...[
                  FilledButton(onPressed: onDone, child: Text(loc('تمّت الحصة'))),
                  OutlinedButton(onPressed: onNoShow, child: Text(loc('لم تتم (غياب)'))),
                ],
                if (asTeacher && b.status == bookingCompleted)
                  OutlinedButton(onPressed: onReport, child: Text(loc('تقرير الحصة'))),
                if (!asTeacher && b.status == bookingCompleted) ...[
                  OutlinedButton(onPressed: onReport, child: Text(loc('تقرير الحصة'))),
                  if (!reviewed)
                    FilledButton(onPressed: onReview, child: Text(loc('قيّم المدرس')))
                  else
                    Chip(label: Text(loc('قيّمتَ هذه الحصة'))),
                ],
                if (!asTeacher && (b.status == bookingRequested || b.status == bookingAccepted))
                  OutlinedButton(onPressed: onCancel, child: Text(loc('إلغاء الحجز'))),
                if (canChat) TextButton.icon(onPressed: onMessages, icon: const Icon(Icons.chat_bubble_outline), label: Text(loc('الرسائل'))),
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
      title: Text(loc('رابط الحصة')),
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
        TextButton(onPressed: () => Navigator.pop(context), child: Text(loc('إلغاء'))),
        FilledButton(
          onPressed: () {
            final link = _link.text.trim();
            if (!isValidLessonLink(link)) {
              setState(() => _error = loc('اكتب رابطاً صحيحاً يبدأ بـ https'));
              return;
            }
            Navigator.pop(context, link);
          },
          child: Text(loc('قبول الطلب')),
        ),
      ],
    );
  }
}
