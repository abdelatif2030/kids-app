import 'design/layout.dart';
import 'package:flutter/material.dart';

import 'teachers_market.dart';
import 'teachers_models.dart';
import 'teachers_time.dart';
import 'l10n/strings.dart';

/// A teacher's calendar: weekly hours become real, bookable slots. A booked
/// slot cannot be changed or deleted here; cancelled bookings free their slot.
class TeacherAvailabilityScreen extends StatefulWidget {
  final TeacherRepository repo;
  const TeacherAvailabilityScreen({super.key, required this.repo});

  @override
  State<TeacherAvailabilityScreen> createState() => _TeacherAvailabilityScreenState();
}

class _TeacherAvailabilityScreenState extends State<TeacherAvailabilityScreen> {
  late Future<List<Slot>> _slots = _load();

  Future<List<Slot>> _load() async {
    final all = await widget.repo.slotsOf(widget.repo.currentUser!.uid);
    final now = DateTime.now().millisecondsSinceEpoch;
    return [for (final s in all) if (s.startMs > now - 3600000) s];
  }

  void _reload() {
    final f = _load();
    setState(() {
      _slots = f;
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

  Future<void> _add() async {
    final slots = await showDialog<List<Slot>>(
      context: context,
      builder: (_) => _AddSlotsDialog(teacherUid: widget.repo.currentUser!.uid),
    );
    if (slots == null || slots.isEmpty) return;
    await _run(() async {
      await widget.repo.addSlots(slots);
      if (mounted) {
        ScaffoldMessenger.of(context)
          ..hideCurrentSnackBar()
          ..showSnackBar(SnackBar(content: Text(tr2('أُضيفت المواعيد (${slots.length})', 'Slots added (${slots.length})'))));
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('مواعيدي'))),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _add,
        icon: const Icon(Icons.add),
        label: Text(loc('إضافة مواعيد')),
      ),
      body: FutureBuilder<List<Slot>>(
        future: _slots,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) {
            return Center(child: FilledButton(onPressed: _reload, child: Text(loc('إعادة المحاولة'))));
          }
          final slots = snap.data!;
          if (slots.isEmpty) {
            return Center(
              child: Padding(
                padding: EdgeInsets.all(32),
                child: Text(
                  loc('لم تضف مواعيد بعد. أضف أيامك وساعاتك المتاحة ليحجز الأهل منها.'),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 18),
                ),
              ),
            );
          }
          return CenteredList(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 96),
            children: [
              Text(loc('الأوقات بتوقيت جهازك. لا يمكن حذف موعد محجوز؛ يتحرر موعد الحجز الملغي أو المرفوض تلقائياً.'),
                  style: TextStyle(fontSize: 13)),
              for (final s in slots)
                Card(
                  child: ListTile(
                    title: Text(fmtDateTime(s.start)),
                    subtitle: Text(tr2('${s.minutes} دقيقة', '${s.minutes} minutes')),
                    leading: Icon(
                      s.status == slotBooked ? Icons.event_busy_rounded : (s.status == slotBlocked ? Icons.block_rounded : Icons.event_available_rounded),
                      color: s.status == slotBooked ? Colors.orange : (s.status == slotBlocked ? Colors.grey : Colors.green),
                    ),
                    trailing: s.status == slotBooked
                        ? Chip(label: Text(loc('محجوز')))
                        : Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                tooltip: s.status == slotBlocked ? loc('إعادة فتح الموعد') : loc('إيقاف الموعد مؤقتاً'),
                                icon: Icon(s.status == slotBlocked ? Icons.lock_open_rounded : Icons.lock_outline_rounded),
                                onPressed: () => _run(() => widget.repo.setSlotBlocked(s.id, s.status != slotBlocked)),
                              ),
                              IconButton(
                                tooltip: loc('حذف الموعد'),
                                icon: const Icon(Icons.delete_outline_rounded),
                                onPressed: () => _run(() => widget.repo.deleteSlot(s.id)),
                              ),
                            ],
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

/// Picks weekdays, a start time, the lesson length and how many weeks to repeat.
class _AddSlotsDialog extends StatefulWidget {
  final String teacherUid;
  const _AddSlotsDialog({required this.teacherUid});

  @override
  State<_AddSlotsDialog> createState() => _AddSlotsDialogState();
}

class _AddSlotsDialogState extends State<_AddSlotsDialog> {
  final Set<int> _days = {};
  TimeOfDay _time = const TimeOfDay(hour: 16, minute: 0);
  int _minutes = 45;
  int _weeks = 4;
  String? _error;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(loc('إضافة مواعيد أسبوعية')),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(loc('الأيام')),
            Wrap(
              spacing: 6,
              children: [
                for (var d = 1; d <= 7; d++)
                  FilterChip(
                    label: Text(weekdayName(d)),
                    selected: _days.contains(d),
                    onSelected: (on) => setState(() => on ? _days.add(d) : _days.remove(d)),
                  ),
              ],
            ),
            ListTile(
              contentPadding: EdgeInsets.zero,
              title: Text(loc('وقت البدء')),
              trailing: OutlinedButton(
                onPressed: () async {
                  final t = await showTimePicker(context: context, initialTime: _time);
                  if (t != null) setState(() => _time = t);
                },
                child: Text('${_time.hour.toString().padLeft(2, '0')}:${_time.minute.toString().padLeft(2, '0')}'),
              ),
            ),
            DropdownButton<int>(
              isExpanded: true,
              value: _minutes,
              items: [for (final m in [30, 45, 60, 90]) DropdownMenuItem(value: m, child: Text(tr2('مدة الحصة $m دقيقة', 'Lesson length: $m minutes')))],
              onChanged: (v) => setState(() => _minutes = v ?? _minutes),
            ),
            DropdownButton<int>(
              isExpanded: true,
              value: _weeks,
              items: [for (final w in [1, 2, 4, 8]) DropdownMenuItem(value: w, child: Text(tr2('لمدة $w أسابيع', 'For $w weeks')))],
              onChanged: (v) => setState(() => _weeks = v ?? _weeks),
            ),
            if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: Text(loc('إلغاء'))),
        FilledButton(
          onPressed: () {
            if (_days.isEmpty) {
              setState(() => _error = loc('اختر يوماً واحداً على الأقل'));
              return;
            }
            Navigator.pop(
              context,
              generateSlots(
                teacherUid: widget.teacherUid,
                weekdays: _days,
                hour: _time.hour,
                minute: _time.minute,
                lessonMinutes: _minutes,
                weeks: _weeks,
                from: DateTime.now(),
              ),
            );
          },
          child: Text(loc('إضافة')),
        ),
      ],
    );
  }
}
