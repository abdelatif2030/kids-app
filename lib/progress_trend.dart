import 'package:flutter/material.dart';

import 'l10n/strings.dart';
import 'progress_store.dart';
import 'watch_history.dart';

/// How many weeks the parent sees side by side. The device keeps watch history for 30 days, so 4 full weeks is
/// the most that is always real data.
const kTrendWeeks = 4;

/// A week with fewer recorded things than this does not count as "a week with data".
const kMinWeeksWithData = 2;

enum TrendMetric { time, lessons, rounds }

/// What was recorded in one 7-day window. Plain counts only: nothing is averaged, scored or compared.
class WeekCounts {
  final DateTime start;
  final DateTime end;
  final int seconds;
  final int lessons;
  final int rounds;
  const WeekCounts({
    required this.start,
    required this.end,
    required this.seconds,
    required this.lessons,
    required this.rounds,
  });

  bool get hasData => seconds > 0 || lessons > 0 || rounds > 0;

  int valueOf(TrendMetric m) => switch (m) {
        TrendMetric.time => (seconds / 60).round(),
        TrendMetric.lessons => lessons,
        TrendMetric.rounds => rounds,
      };
}

DateTime _day(DateTime d) => DateTime(d.year, d.month, d.day);

/// The [weeks] 7-day windows that end on [end], oldest first, so the last one is the week being looked at.
/// Pure: everything comes in as arguments, nothing is invented for days that were not recorded.
List<WeekCounts> buildTrend({
  required DateTime end,
  required List<SkillEvent> events,
  required List<WatchEntry> watch,
  required Map<String, int> usedSeconds,
  int weeks = kTrendWeeks,
}) {
  final endDay = _day(end);
  final out = <WeekCounts>[];
  for (var w = weeks - 1; w >= 0; w--) {
    final weekEnd = endDay.subtract(Duration(days: 7 * w));
    final days = [for (var i = 6; i >= 0; i--) weekEnd.subtract(Duration(days: i))];
    final keys = {for (final d in days) WatchHistory.dayKey(d)};
    final lessons = {
      for (final e in watch)
        if (e.completed && keys.contains(e.day)) e.videoId,
    };
    out.add(WeekCounts(
      start: days.first,
      end: weekEnd,
      seconds: [for (final k in keys) usedSeconds[k] ?? 0].fold<int>(0, (s, v) => s + v),
      lessons: lessons.length,
      rounds: events.where((e) => keys.contains(e.day)).length,
    ));
  }
  return out;
}

/// The chart is shown only when at least [kMinWeeksWithData] of the weeks have something recorded.
bool enoughForTrend(List<WeekCounts> weeks) => weeks.where((w) => w.hasData).length >= kMinWeeksWithData;

String _dm(DateTime d) => '${d.day}/${d.month}';

/// «الأسابيع جنباً إلى جنب»: the last four weeks next to each other for one thing at a time (time, lessons or
/// game rounds). Counts and dates only. No percentages, no verdict.
class WeeksTrendCard extends StatefulWidget {
  final List<WeekCounts> weeks;
  const WeeksTrendCard({super.key, required this.weeks});

  @override
  State<WeeksTrendCard> createState() => _WeeksTrendCardState();
}

class _WeeksTrendCardState extends State<WeeksTrendCard> {
  TrendMetric _metric = TrendMetric.time;

  String _unit(TrendMetric m) => switch (m) {
        TrendMetric.time => tr2('دقائق', 'minutes'),
        TrendMetric.lessons => tr2('دروس أُكملت', 'lessons finished'),
        TrendMetric.rounds => tr2('جولات ألعاب', 'game rounds'),
      };

  String _chip(TrendMetric m) => switch (m) {
        TrendMetric.time => tr2('الوقت', 'Time'),
        TrendMetric.lessons => tr2('الدروس', 'Lessons'),
        TrendMetric.rounds => tr2('الألعاب', 'Games'),
      };

  @override
  Widget build(BuildContext context) {
    final weeks = widget.weeks;
    return Card(
      key: const ValueKey('weeks_trend'),
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Semantics(
              header: true,
              child: Text(tr2('الأسابيع الأخيرة جنباً إلى جنب', 'The last weeks side by side'),
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            ),
            const SizedBox(height: 10),
            if (!enoughForTrend(weeks))
              Padding(
                key: const ValueKey('trend_empty'),
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Text(
                  tr2('لا توجد بيانات كافية بعد. يظهر الرسم عندما يُسجَّل نشاط في أسبوعين على الأقل.',
                      'Not enough data yet. The chart appears once at least two weeks have recorded activity.'),
                  style: const TextStyle(fontSize: 15, height: 1.4),
                ),
              )
            else ...[
              Wrap(
                spacing: 8,
                children: [
                  for (final m in TrendMetric.values)
                    ChoiceChip(
                      key: ValueKey('trend_${m.name}'),
                      label: Text(_chip(m)),
                      selected: _metric == m,
                      onSelected: (_) => setState(() => _metric = m),
                    ),
                ],
              ),
              const SizedBox(height: 4),
              Text(_unit(_metric), style: const TextStyle(fontSize: 13, color: Colors.black54)),
              const SizedBox(height: 8),
              _bars(context, weeks),
              const SizedBox(height: 10),
              Text(
                tr2('أرقام مسجّلة على هذا الجهاز فقط. الوقت والدروس لكل الأطفال على الجهاز، والجولات لهذا الطفل. يحتفظ الجهاز بأسابيع قليلة فقط.',
                    'Counts recorded on this device only. Time and lessons are for all children on the device; rounds are for this child. The device keeps only a few weeks.'),
                style: const TextStyle(fontSize: 12, color: Colors.black54, height: 1.4),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _bars(BuildContext context, List<WeekCounts> weeks) {
    final values = [for (final w in weeks) w.valueOf(_metric)];
    final maxV = values.fold<int>(0, (m, v) => v > m ? v : m);
    return SizedBox(
      height: 215,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          for (var i = 0; i < weeks.length; i++)
            Expanded(
              child: Semantics(
                label: tr2(
                  'أسبوع ${_dm(weeks[i].start)} – ${_dm(weeks[i].end)}: ${values[i]} ${_unit(_metric)}',
                  'Week ${_dm(weeks[i].start)} – ${_dm(weeks[i].end)}: ${values[i]} ${_unit(_metric)}',
                ),
                child: ExcludeSemantics(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text('${values[i]}', key: ValueKey('trend_value_$i'), style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800)),
                      const SizedBox(height: 2),
                      Container(
                        key: ValueKey('trend_bar_$i'),
                        margin: const EdgeInsets.symmetric(horizontal: 10),
                        height: maxV == 0 ? 4 : 4 + 100 * values[i] / maxV,
                        decoration: BoxDecoration(
                          color: values[i] == 0
                              ? Colors.black12
                              : (i == weeks.length - 1 ? const Color(0xFF7E57C2) : const Color(0xFFB39DDB)),
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(_dm(weeks[i].start), style: const TextStyle(fontSize: 11), maxLines: 1),
                      if (i == weeks.length - 1)
                        Text(tr2('الأسبوع المعروض', 'Shown week'), style: const TextStyle(fontSize: 10, color: Colors.black54), maxLines: 1, overflow: TextOverflow.ellipsis),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
