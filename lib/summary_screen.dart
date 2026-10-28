import 'package:flutter/material.dart';

import 'watch_history.dart';

const _weekdays = ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

String _minutes(int seconds) {
  final m = (seconds / 60).round();
  return m < 1 ? 'أقل من دقيقة' : '$m دقيقة';
}

/// Parent-only: what was watched and for how long, per day, for the last 7 days.
class WatchSummaryScreen extends StatelessWidget {
  const WatchSummaryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ملخص المشاهدة')),
      body: FutureBuilder<List<WatchEntry>>(
        future: WatchHistory.load(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final entries = snapshot.data!;
          final today = DateTime.now();
          final days = [for (var i = 0; i < 7; i++) today.subtract(Duration(days: i))];
          final weekKeys = {for (final d in days) WatchHistory.dayKey(d)};
          final weekTotal = entries
              .where((e) => weekKeys.contains(e.day))
              .fold<int>(0, (sum, e) => sum + e.seconds);

          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Card(
                child: ListTile(
                  title: const Text('مجموع آخر 7 أيام', style: TextStyle(fontSize: 20)),
                  trailing: Text(
                    _minutes(weekTotal),
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              for (final day in days) _DaySection(day: day, today: today, entries: entries),
              const Padding(
                padding: EdgeInsets.only(top: 16),
                child: Text(
                  'تُحفظ هذه البيانات على هذا الجهاز فقط.',
                  textAlign: TextAlign.center,
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _DaySection extends StatelessWidget {
  final DateTime day;
  final DateTime today;
  final List<WatchEntry> entries;
  const _DaySection({required this.day, required this.today, required this.entries});

  @override
  Widget build(BuildContext context) {
    final key = WatchHistory.dayKey(day);
    // Merge several views of the same video into one line.
    final perVideo = <String, ({String title, int seconds, bool completed})>{};
    for (final e in entries.where((e) => e.day == key)) {
      final old = perVideo[e.videoId];
      perVideo[e.videoId] = (
        title: e.title,
        seconds: (old?.seconds ?? 0) + e.seconds,
        completed: (old?.completed ?? false) || e.completed,
      );
    }
    final total = perVideo.values.fold<int>(0, (sum, v) => sum + v.seconds);
    final name = key == WatchHistory.dayKey(today)
        ? 'اليوم'
        : '${_weekdays[day.weekday - 1]} ${day.day}/${day.month}';

    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(name,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              ),
              Text(perVideo.isEmpty ? '' : _minutes(total),
                  style: const TextStyle(fontSize: 18)),
            ],
          ),
          if (perVideo.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 8),
              child: Text('لا توجد مشاهدة'),
            ),
          for (final v in perVideo.values)
            ListTile(
              dense: true,
              leading: Icon(
                v.completed ? Icons.check_circle : Icons.play_circle_outline,
                color: v.completed ? Colors.green : null,
              ),
              title: Text(v.title),
              trailing: Text(_minutes(v.seconds)),
            ),
        ],
      ),
    );
  }
}
