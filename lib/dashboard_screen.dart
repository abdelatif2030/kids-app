import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'curriculum.dart';
import 'main.dart' show Video, loadVideos;
import 'plan_screen.dart';
import 'progress_report.dart';
import 'progress_store.dart';
import 'summary_screen.dart';
import 'ui.dart';
import 'watch_history.dart';

const _dayShort = ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

class _Data {
  final List<SkillEvent> events;
  final List<WatchEntry> watch;
  final Map<String, int> used;
  final List<Video> videos;
  final Map<String, int> targets;
  final int age;
  const _Data(this.events, this.watch, this.used, this.videos, this.targets, this.age);
}

/// Parent-only. What the child achieved, not just screen time: skills mastered,
/// skills that need practice, time spent, and a weekly report with ideas for
/// next week. Everything comes from data stored on this device.
class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  static DateTime _today() {
    final n = DateTime.now();
    return DateTime(n.year, n.month, n.day);
  }

  late DateTime _end = _today();
  late final Future<_Data> _data = _load();

  Future<_Data> _load() async {
    final prefs = await SharedPreferences.getInstance();
    return _Data(
      await ProgressStore.load(),
      await WatchHistory.load(),
      await ProgressStore.usedSecondsByDay(),
      await loadVideos(),
      {
        for (final s in kSubjects)
          if ((prefs.getInt('plan_target_${s.id}') ?? 0) > 0)
            s.id: prefs.getInt('plan_target_${s.id}')!,
      },
      await ProgressStore.lastAge(),
    );
  }

  void _shift(int days) => setState(() => _end = _end.add(Duration(days: days)));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('لوحة متابعة الطفل')),
      body: FutureBuilder<_Data>(
        future: _data,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          final d = snapshot.data!;
          final report = buildReport(
            end: _end,
            events: d.events,
            watch: d.watch,
            usedSeconds: d.used,
            videos: d.videos,
            targets: d.targets,
            age: d.age,
          );
          final isCurrent = !_end.isBefore(_today());
          return Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 720),
              child: ListView(
                padding: const EdgeInsets.all(16),
                children: [
                  _WeekBar(
                    start: report.start,
                    end: report.end,
                    onPrev: () => _shift(-7),
                    onNext: isCurrent ? null : () => _shift(7),
                  ),
                  const SizedBox(height: 8),
                  _Hero(report: report),
                  const SizedBox(height: 12),
                  _Stats(report: report),
                  const SizedBox(height: 12),
                  _DaysChart(report: report),
                  const SizedBox(height: 12),
                  _Skills(report: report),
                  const SizedBox(height: 12),
                  _Lessons(report: report),
                  const SizedBox(height: 12),
                  _Recommendations(report: report),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    alignment: WrapAlignment.center,
                    children: [
                      FilledButton.icon(
                        onPressed: () async {
                          await Clipboard.setData(ClipboardData(text: reportAsText(report)));
                          if (context.mounted) {
                            ScaffoldMessenger.of(context)
                              ..hideCurrentSnackBar()
                              ..showSnackBar(const SnackBar(
                                  content: Text('تم نسخ التقرير. الصقه في واتساب أو أي تطبيق.')));
                          }
                        },
                        icon: const Icon(Icons.copy_rounded),
                        label: const Text('نسخ التقرير'),
                      ),
                      OutlinedButton.icon(
                        onPressed: () => Navigator.push(
                          context,
                          MaterialPageRoute(builder: (_) => const PlanScreen()),
                        ),
                        icon: const Icon(Icons.checklist_rounded),
                        label: const Text('الخطة الأسبوعية'),
                      ),
                      OutlinedButton.icon(
                        onPressed: () => Navigator.push(
                          context,
                          MaterialPageRoute(builder: (_) => const WatchSummaryScreen()),
                        ),
                        icon: const Icon(Icons.bar_chart),
                        label: const Text('تفاصيل المشاهدة'),
                      ),
                    ],
                  ),
                  const Padding(
                    padding: EdgeInsets.only(top: 16),
                    child: Text(
                      'تُحفظ هذه البيانات على هذا الجهاز فقط ولا تُرسل إلى أي مكان.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

String _dm(DateTime d) => '${d.day}/${d.month}';

class _WeekBar extends StatelessWidget {
  final DateTime start;
  final DateTime end;
  final VoidCallback onPrev;
  final VoidCallback? onNext;
  const _WeekBar({required this.start, required this.end, required this.onPrev, this.onNext});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        IconButton(
          tooltip: 'الأسبوع السابق',
          onPressed: onPrev,
          icon: const Icon(Icons.chevron_right_rounded, size: 32),
        ),
        Expanded(
          child: Text(
            '${_dm(start)} – ${_dm(end)}',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
        ),
        IconButton(
          tooltip: 'الأسبوع التالي',
          onPressed: onNext,
          icon: const Icon(Icons.chevron_left_rounded, size: 32),
        ),
      ],
    );
  }
}

class _Hero extends StatelessWidget {
  final WeekReport report;
  const _Hero({required this.report});

  @override
  Widget build(BuildContext context) {
    final r = report;
    final text = r.hasActivity
        ? 'أكمل ${r.videosFinished} دروس، وتدرّب في ${r.gameRounds} جولة'
        : 'لا توجد نشاطات في هذا الأسبوع';
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Color(0xFF7E57C2), Color(0xFF5C6BC0)],
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
        ),
        borderRadius: BorderRadius.circular(28),
      ),
      child: Row(
        children: [
          const Mascot(size: 72),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('تقرير الأسبوع',
                    style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                Text(text, style: const TextStyle(color: Colors.white, fontSize: 16)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _StatCard extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String value;
  final String label;
  const _StatCard({required this.icon, required this.color, required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Row(
          children: [
            Icon(icon, color: color, size: 32),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(value,
                        style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                  ),
                  Text(label, style: const TextStyle(fontSize: 13)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Stats extends StatelessWidget {
  final WeekReport report;
  const _Stats({required this.report});

  @override
  Widget build(BuildContext context) {
    final r = report;
    final cards = [
      _StatCard(
          icon: Icons.schedule_rounded,
          color: const Color(0xFF5C6BC0),
          value: formatDuration(r.secondsInApp),
          label: 'الوقت في التعلم'),
      _StatCard(
          icon: Icons.play_circle_rounded,
          color: const Color(0xFF43A047),
          value: '${r.videosFinished}',
          label: 'دروس مكتملة'),
      _StatCard(
          icon: Icons.extension_rounded,
          color: const Color(0xFFFB8C00),
          value: '${r.gameRounds}',
          label: 'جولات ألعاب'),
      _StatCard(
          icon: Icons.event_available_rounded,
          color: const Color(0xFFE53935),
          value: '${r.activeDays} / 7',
          label: 'أيام النشاط'),
    ];
    return Column(
      children: [
        Row(children: [Expanded(child: cards[0]), const SizedBox(width: 12), Expanded(child: cards[1])]),
        const SizedBox(height: 12),
        Row(children: [Expanded(child: cards[2]), const SizedBox(width: 12), Expanded(child: cards[3])]),
      ],
    );
  }
}

class _Section extends StatelessWidget {
  final String title;
  final Widget child;
  const _Section({required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            child,
          ],
        ),
      ),
    );
  }
}

class _DaysChart extends StatelessWidget {
  final WeekReport report;
  const _DaysChart({required this.report});

  @override
  Widget build(BuildContext context) {
    final values = report.secondsPerDay;
    final maxV = values.fold<int>(0, (m, v) => v > m ? v : m);
    return _Section(
      title: 'الوقت يوماً بيوم',
      child: SizedBox(
        height: 150,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            for (var i = 0; i < 7; i++)
              Expanded(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(values[i] > 0 ? '${(values[i] / 60).round()}' : '',
                        style: const TextStyle(fontSize: 12)),
                    const SizedBox(height: 2),
                    Container(
                      margin: const EdgeInsets.symmetric(horizontal: 6),
                      height: maxV == 0 ? 4 : 4 + 86 * values[i] / maxV,
                      decoration: BoxDecoration(
                        color: values[i] > 0 ? const Color(0xFF7E57C2) : Colors.black12,
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      _dayShort[report.start.add(Duration(days: i)).weekday - 1],
                      style: const TextStyle(fontSize: 10),
                      maxLines: 1,
                      overflow: TextOverflow.clip,
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _Skills extends StatelessWidget {
  final WeekReport report;
  const _Skills({required this.report});

  Widget _group(String title, Color color, IconData icon, List<SkillStat> stats) {
    if (stats.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [
            Icon(icon, color: color, size: 20),
            const SizedBox(width: 6),
            Text(title, style: TextStyle(color: color, fontWeight: FontWeight.bold, fontSize: 16)),
          ]),
          const SizedBox(height: 6),
          for (final s in stats)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 3),
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      s.missed.isEmpty
                          ? s.skill.label
                          : '${s.skill.label} (يخطئ في: ${s.missed.join('، ')})',
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                    decoration: BoxDecoration(
                      color: color.withAlpha(30),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      s.attempts < kMinAttempts
                          ? '${s.attempts} جولات'
                          : '${(s.accuracy * 100).round()}%',
                      style: TextStyle(color: color, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final r = report;
    return _Section(
      title: 'المهارات',
      child: r.skills.isEmpty
          ? const Text(
              'عندما يلعب طفلك ألعاب الحروف والألوان والرياضيات تظهر مهاراته هنا.',
            )
          : Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _group('أتقنها', Colors.green.shade700, Icons.verified_rounded, r.mastered),
                _group('تحتاج إلى تدريب', Colors.deepOrange, Icons.fitness_center_rounded,
                    r.needsPractice),
                _group('قيد التعلّم', Colors.blueGrey, Icons.trending_up_rounded, r.others),
                Text(
                  'تُحسب من آخر 3 أسابيع، ولا تُحكم المهارة قبل $kMinAttempts جولات.',
                  style: const TextStyle(fontSize: 12),
                ),
              ],
            ),
    );
  }
}

class _Lessons extends StatelessWidget {
  final WeekReport report;
  const _Lessons({required this.report});

  @override
  Widget build(BuildContext context) {
    final rows = [
      for (final s in kSubjects)
        if (s.id != 'drawing' &&
            ((report.lessonsPerSubject[s.id] ?? 0) > 0 || report.targets.containsKey(s.id)))
          s,
    ];
    return _Section(
      title: 'الدروس حسب المادة',
      child: rows.isEmpty
          ? const Text('لم يكمل طفلك دروساً في هذا الأسبوع. يمكنك وضع أهداف من «الخطة الأسبوعية».')
          : Column(
              children: [
                for (final s in rows)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    child: Row(
                      children: [
                        Icon(s.icon, color: s.color),
                        const SizedBox(width: 10),
                        SizedBox(width: 70, child: Text(s.label)),
                        Expanded(
                          child: report.targets.containsKey(s.id)
                              ? LinearProgressIndicator(
                                  value: ((report.lessonsPerSubject[s.id] ?? 0) /
                                          report.targets[s.id]!)
                                      .clamp(0.0, 1.0),
                                  color: s.color,
                                  minHeight: 8,
                                  borderRadius: BorderRadius.circular(8),
                                )
                              : const SizedBox.shrink(),
                        ),
                        const SizedBox(width: 10),
                        Text(report.targets.containsKey(s.id)
                            ? '${report.lessonsPerSubject[s.id] ?? 0} من ${report.targets[s.id]}'
                            : '${report.lessonsPerSubject[s.id] ?? 0}'),
                      ],
                    ),
                  ),
              ],
            ),
    );
  }
}

class _Recommendations extends StatelessWidget {
  final WeekReport report;
  const _Recommendations({required this.report});

  static (IconData, Color) _look(RecKind k) => switch (k) {
        RecKind.practice => (Icons.fitness_center_rounded, Colors.deepOrange),
        RecKind.plan => (Icons.flag_rounded, const Color(0xFF5C6BC0)),
        RecKind.next => (Icons.trending_up_rounded, Colors.green),
        RecKind.explore => (Icons.explore_rounded, const Color(0xFF00ACC1)),
        RecKind.info => (Icons.info_outline_rounded, Colors.blueGrey),
      };

  @override
  Widget build(BuildContext context) {
    return _Section(
      title: 'توصيات للأسبوع القادم',
      child: report.recommendations.isEmpty
          ? const Text('كل شيء يسير جيداً. استمر!')
          : Column(
              children: [
                for (final rec in report.recommendations)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(_look(rec.kind).$1, color: _look(rec.kind).$2, size: 24),
                        const SizedBox(width: 10),
                        Expanded(child: Text(rec.text, style: const TextStyle(fontSize: 15))),
                      ],
                    ),
                  ),
              ],
            ),
    );
  }
}
