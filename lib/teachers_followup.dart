import 'package:flutter/material.dart';

import 'teachers_market.dart';
import 'teachers_models.dart';
import 'teachers_time.dart';
import 'l10n/strings.dart';

Future<void> _showError(BuildContext context, Object e) async {
  final text = e is AccountException ? e.message : loc('تعذر إكمال العملية، حاول مرة أخرى');
  if (!context.mounted) return;
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(SnackBar(content: Text(text)));
}

/// The teacher's note after a completed lesson. It is the teacher's own
/// observation, not an assessment or a diagnosis, and the parent is told so.
class LessonReportForm extends StatefulWidget {
  final TeacherRepository repo;
  final Booking booking;
  const LessonReportForm({super.key, required this.repo, required this.booking});

  @override
  State<LessonReportForm> createState() => _LessonReportFormState();
}

class _LessonReportFormState extends State<LessonReportForm> {
  final _covered = TextEditingController();
  final _understood = TextEditingController();
  final _review = TextEditingController();
  final _home = TextEditingController();
  final _next = TextEditingController();
  bool _busy = false;
  bool _loaded = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    widget.repo.lessonReportFor(widget.booking.id).then((r) {
      if (!mounted) return;
      if (r != null) {
        _covered.text = r.covered;
        _understood.text = r.understood;
        _review.text = r.needsReview;
        _home.text = r.homeActivity;
        _next.text = r.nextLesson;
      }
      setState(() => _loaded = true);
    }).catchError((_) {
      if (mounted) setState(() => _loaded = true);
    });
  }

  @override
  void dispose() {
    for (final c in [_covered, _understood, _review, _home, _next]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _save() async {
    if (_covered.text.trim().isEmpty) {
      setState(() => _error = loc('اكتب ما تم شرحه في الحصة'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.repo.saveLessonReport(LessonReport(
        bookingId: widget.booking.id,
        teacherUid: widget.booking.teacherUid,
        parentUid: widget.booking.parentUid,
        covered: _covered.text.trim(),
        understood: _understood.text.trim(),
        needsReview: _review.text.trim(),
        homeActivity: _home.text.trim(),
        nextLesson: _next.text.trim(),
      ));
      if (mounted) Navigator.pop(context, true);
    } catch (e) {
      if (mounted) {
        setState(() => _error = e is AccountException ? e.message : loc('تعذر حفظ التقرير'));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Widget _field(TextEditingController c, String label) => Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: TextField(
          controller: c,
          maxLines: 3,
          maxLength: 600,
          decoration: InputDecoration(labelText: label, border: const OutlineInputBorder()),
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('تقرير الحصة'))),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Text(loc('يراه ولي الأمر فقط. اكتب ملاحظاتك التعليمية؛ هذا ليس تشخيصاً ولا تقييماً طبياً أو نمائياً.'),
                    style: TextStyle(fontSize: 13)),
                const SizedBox(height: 12),
                _field(_covered, loc('ما الذي تم شرحه؟')),
                _field(_understood, loc('ما الذي أظهره الطفل في الحصة؟')),
                _field(_review, loc('ما يحتاج إلى مراجعة')),
                _field(_home, loc('نشاط مقترح في البيت')),
                _field(_next, loc('الحصة القادمة')),
                if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
                FilledButton(onPressed: _busy ? null : _save, child: Text(loc('حفظ التقرير'))),
              ],
            ),
    );
  }
}

/// What a parent sees: the teacher's report for one lesson.
class LessonReportView extends StatelessWidget {
  final TeacherRepository repo;
  final Booking booking;
  const LessonReportView({super.key, required this.repo, required this.booking});

  Widget _item(String title, String text) => text.isEmpty
      ? const SizedBox.shrink()
      : Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              Text(text),
            ],
          ),
        );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('تقرير الحصة'))),
      body: FutureBuilder<LessonReport?>(
        future: repo.lessonReportFor(booking.id),
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return Center(child: Text(loc('تعذر تحميل التقرير')));
          final r = snap.data;
          if (r == null) {
            return Center(child: Text(loc('لم يكتب المدرس تقريراً لهذه الحصة بعد.'), style: TextStyle(fontSize: 18)));
          }
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Text('مع ${booking.teacherName}${booking.start == null ? '' : ' · ${fmtDateTime(booking.start!)}'}'),
              const SizedBox(height: 12),
              _item(loc('ما تم شرحه'), r.covered),
              _item(loc('ما أظهره الطفل في الحصة'), r.understood),
              _item(loc('يحتاج إلى مراجعة'), r.needsReview),
              _item(loc('نشاط مقترح في البيت'), r.homeActivity),
              _item(loc('الحصة القادمة'), r.nextLesson),
              Text(loc('هذه ملاحظات المدرس التعليمية وليست تشخيصاً.'), style: TextStyle(fontSize: 12)),
            ],
          );
        },
      ),
    );
  }
}

/// One rating (1-5) and an optional short comment for a completed lesson.
Future<void> showReviewDialog(BuildContext context, TeacherRepository repo, Booking booking) async {
  var rating = 0;
  final text = TextEditingController();
  String? error;
  final done = await showDialog<bool>(
    context: context,
    builder: (_) => StatefulBuilder(
      builder: (context, setState) => AlertDialog(
        title: Text('قيّم ${booking.teacherName}'),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  for (var i = 1; i <= 5; i++)
                    IconButton(
                      tooltip: '$i من 5',
                      onPressed: () => setState(() => rating = i),
                      icon: Icon(i <= rating ? Icons.star_rounded : Icons.star_outline_rounded, color: Colors.amber, size: 34),
                    ),
                ],
              ),
              TextField(
                controller: text,
                maxLines: 3,
                maxLength: 400,
                decoration: InputDecoration(labelText: loc('تعليق (اختياري)')),
              ),
              Text(loc('لا يمكن تعديل التقييم بعد إرساله، ويظهر للأهل الآخرين.'), style: TextStyle(fontSize: 12)),
              if (error != null) Text(error!, style: const TextStyle(color: Colors.red)),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('إلغاء'))),
          FilledButton(
            onPressed: () async {
              if (rating == 0) {
                setState(() => error = loc('اختر عدد النجوم'));
                return;
              }
              try {
                await repo.submitReview(Review(
                  bookingId: booking.id,
                  teacherUid: booking.teacherUid,
                  parentUid: booking.parentUid,
                  rating: rating,
                  text: text.text.trim(),
                ));
                if (context.mounted) Navigator.pop(context, true);
              } catch (e) {
                setState(() => error = e is AccountException ? e.message : loc('تعذر إرسال التقييم'));
              }
            },
            child: Text(loc('إرسال التقييم')),
          ),
        ],
      ),
    ),
  );
  if (done == true && context.mounted) {
    ScaffoldMessenger.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(SnackBar(content: Text(loc('شكراً، تم إرسال تقييمك'))));
  }
}

/// Messages between the parent and the teacher of one booking (adults only).
class ConversationScreen extends StatefulWidget {
  final TeacherRepository repo;
  final Booking booking;
  const ConversationScreen({super.key, required this.repo, required this.booking});

  @override
  State<ConversationScreen> createState() => _ConversationScreenState();
}

class _ConversationScreenState extends State<ConversationScreen> {
  late Future<List<ChatMessage>> _messages = widget.repo.messagesOf(widget.booking.id);
  final _text = TextEditingController();
  bool _sending = false;
  String? _error;

  bool get _open => [bookingRequested, bookingAccepted, bookingCompleted].contains(widget.booking.status);

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final t = _text.text.trim();
    if (t.isEmpty) return;
    if (looksLikeContactDetails(t)) {
      setState(() => _error = loc('لا ترسل أرقام هاتف أو بريداً أو روابط. التواصل يبقى داخل التطبيق.'));
      return;
    }
    setState(() {
      _sending = true;
      _error = null;
    });
    try {
      await widget.repo.sendMessage(widget.booking.id, t);
      _text.clear();
      final f = widget.repo.messagesOf(widget.booking.id);
      setState(() {
      _messages = f;
    });
    } catch (e) {
      if (mounted) setState(() => _error = e is AccountException ? e.message : loc('تعذر إرسال الرسالة'));
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final me = widget.repo.currentUser!.uid;
    return Scaffold(
      appBar: AppBar(title: Text(loc('الرسائل'))),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(12),
            child: Text(
              loc('رسائل نصية بين ولي الأمر والمدرس فقط، مرتبطة بهذا الحجز. لا تشارك أرقام هاتف أو عناوين. '
              'لا توجد رسائل مع الطفل. للإبلاغ عن مشكلة استخدم «إبلاغ عن هذا المدرس».'),
              style: TextStyle(fontSize: 12),
            ),
          ),
          Expanded(
            child: FutureBuilder<List<ChatMessage>>(
              future: _messages,
              builder: (context, snap) {
                if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
                if (snap.hasError) {
                  return Center(
                    child: FilledButton(
                      onPressed: () => setState(() => _messages = widget.repo.messagesOf(widget.booking.id)),
                      child: Text(loc('إعادة المحاولة')),
                    ),
                  );
                }
                final list = snap.data!;
                if (list.isEmpty) return Center(child: Text(loc('لا توجد رسائل بعد')));
                return ListView(
                  padding: const EdgeInsets.all(12),
                  children: [
                    for (final m in list)
                      Align(
                        alignment: m.senderUid == me ? AlignmentDirectional.centerStart : AlignmentDirectional.centerEnd,
                        child: Container(
                          margin: const EdgeInsets.symmetric(vertical: 4),
                          padding: const EdgeInsets.all(10),
                          constraints: const BoxConstraints(maxWidth: 320),
                          decoration: BoxDecoration(
                            color: m.senderUid == me ? Colors.orange.shade100 : Colors.grey.shade200,
                            borderRadius: BorderRadius.circular(14),
                          ),
                          child: Text(m.text),
                        ),
                      ),
                  ],
                );
              },
            ),
          ),
          if (_error != null) Padding(padding: const EdgeInsets.all(8), child: Text(_error!, style: const TextStyle(color: Colors.red))),
          if (_open)
            SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _text,
                        maxLength: 500,
                        decoration: InputDecoration(hintText: loc('اكتب رسالة'), counterText: '', border: OutlineInputBorder()),
                      ),
                    ),
                    IconButton.filled(
                      tooltip: loc('إرسال'),
                      onPressed: _sending ? null : _send,
                      icon: const Icon(Icons.send_rounded),
                    ),
                  ],
                ),
              ),
            )
          else
            Padding(padding: EdgeInsets.all(16), child: Text(loc('أُغلقت المحادثة لأن الحجز ملغي أو مرفوض.'))),
        ],
      ),
    );
  }
}

Future<void> showFollowupError(BuildContext context, Object e) => _showError(context, e);
