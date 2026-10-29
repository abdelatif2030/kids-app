import 'package:flutter/material.dart';
import 'adaptive/insights_ui.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'curriculum.dart';
import 'journey/home_tasks.dart';
import 'journey/lands.dart';
import 'journey/models.dart';
import 'journey/progress.dart';
import 'journey/repository.dart';
import 'journey/ui/profile_forms.dart';
import 'library/learning_records.dart';
import 'library/learning_summary.dart';
import 'literacy/adaptive.dart';
import 'literacy/mastery.dart';
import 'main.dart' show Video, loadVideos;
import 'plan_screen.dart';
import 'progress_report.dart';
import 'progress_store.dart';
import 'stories/story_store.dart';
import 'summary_screen.dart';
import 'ui.dart';
import 'watch_history.dart';
import 'l10n/strings.dart';

const _dayShort = [
  'الاثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
  'الأحد',
];

class _Data {
  final List<SkillEvent> events;
  final List<WatchEntry> watch;
  final Map<String, int> used;
  final List<Video> videos;
  final Map<String, int> targets;
  final int age;
  const _Data(
    this.events,
    this.watch,
    this.used,
    this.videos,
    this.targets,
    this.age,
  );
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
  String? _childId;

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

  void _shift(int days) =>
      setState(() => _end = _end.add(Duration(days: days)));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('لوحة متابعة الطفل'))),
      body: FutureBuilder<_Data>(
        future: _data,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          final d = snapshot.data!;
          return ListenableBuilder(
            listenable: JourneyStore.instance,
            builder: (context, _) => _body(context, d),
          );
        },
      ),
    );
  }

  Widget _body(BuildContext context, _Data d) {
    final store = JourneyStore.instance;
    final child =
        store.profileById(_childId ?? '') ??
        store.active ??
        (store.profiles.isEmpty ? null : store.profiles.first);
    // With profiles, each child's skills are separate. Time and videos are kept
    // per device, so they are the same for every child.
    final events = child == null
        ? d.events
        : [
            for (final e in d.events)
              if (e.childId == child.id) e,
          ];
    final report = buildReport(
      end: _end,
      events: events,
      watch: d.watch,
      usedSeconds: d.used,
      videos: d.videos,
      targets: d.targets,
      age: child?.age ?? d.age,
    );
    final isCurrent = !_end.isBefore(_today());
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 720),
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            if (store.profiles.length > 1)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Wrap(
                  spacing: 8,
                  children: [
                    for (final c in store.profiles)
                      ChoiceChip(
                        label: Text(
                          c.nickname,
                          style: const TextStyle(fontSize: 16),
                        ),
                        selected: c.id == child?.id,
                        onSelected: (_) => setState(() => _childId = c.id),
                      ),
                  ],
                ),
              ),
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
            if (child != null) ...[
              const SizedBox(height: 12),
              _Journey(child: child, end: _end),
            ],
            const SizedBox(height: 12),
            _Skills(report: report),
            if (child != null) ...[
              const SizedBox(height: 12),
              _LearningLibrary(childId: child.id, end: _end),
            ],
            const SizedBox(height: 12),
            _Lessons(report: report),
            const SizedBox(height: 12),
            _Recommendations(report: report),
            if (child != null) ...[
              const SizedBox(height: 12),
              ParentInsightsSection(child: child, now: _end),
            ],
            const SizedBox(height: 16),
            Wrap(
              spacing: 12,
              runSpacing: 12,
              alignment: WrapAlignment.center,
              children: [
                FilledButton.icon(
                  onPressed: () async {
                    await Clipboard.setData(
                      ClipboardData(
                        text: reportAsText(
                          report,
                          childName: child?.nickname,
                          journey: child == null
                              ? const []
                              : _journeyLines(child),
                        ),
                      ),
                    );
                    if (context.mounted) {
                      ScaffoldMessenger.of(context)
                        ..hideCurrentSnackBar()
                        ..showSnackBar(
                          SnackBar(
                            content: Text(
                              loc('تم نسخ التقرير. الصقه في واتساب أو أي تطبيق.'),
                            ),
                          ),
                        );
                    }
                  },
                  icon: const Icon(Icons.copy_rounded),
                  label: Text(loc('نسخ التقرير')),
                ),
                OutlinedButton.icon(
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const PlanScreen()),
                  ),
                  icon: const Icon(Icons.checklist_rounded),
                  label: Text(loc('الخطة الأسبوعية')),
                ),
                OutlinedButton.icon(
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => const WatchSummaryScreen(),
                    ),
                  ),
                  icon: const Icon(Icons.bar_chart),
                  label: Text(loc('تفاصيل المشاهدة')),
                ),
              ],
            ),
            Padding(
              padding: EdgeInsets.only(top: 16),
              child: Text(
                loc('تُحفظ هذه البيانات على هذا الجهاز فقط ولا تُرسل إلى أي مكان.'),
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13),
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<String> _journeyLines(ChildProfile child) {
    final store = JourneyStore.instance;
    final p = store.progressOf(child.id, today: _end);
    final week = weeklyCounts(
      store.attemptsOf(child.id),
      _end,
    ).fold<int>(0, (s, v) => s + v);
    return [
      tr2('رحلة التعلّم: $week نشاطاً هذا الأسبوع، ${p.totalStars} نجمة، المستوى ${p.explorerLevel}', 'Learning journey: $week activities this week, ${p.totalStars} stars, level ${p.explorerLevel}'),
      for (final l in kLands)
        if (p.lands[l.id]!.completed > 0)
          tr2('${l.title}: ${p.lands[l.id]!.completed}/$kLevelsPerLand مستويات', '${l.title}: ${p.lands[l.id]!.completed}/$kLevelsPerLand levels'),
    ];
  }
}

String _dm(DateTime d) => '${d.day}/${d.month}';

class _WeekBar extends StatelessWidget {
  final DateTime start;
  final DateTime end;
  final VoidCallback onPrev;
  final VoidCallback? onNext;
  const _WeekBar({
    required this.start,
    required this.end,
    required this.onPrev,
    this.onNext,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        IconButton(
          tooltip: loc('الأسبوع السابق'),
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
          tooltip: loc('الأسبوع التالي'),
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
        ? tr2('أكمل ${r.videosFinished} دروس، وتدرّب في ${r.gameRounds} جولة', 'Finished ${r.videosFinished} lessons and practised ${r.gameRounds} game rounds')
        : loc('لا توجد نشاطات في هذا الأسبوع');
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
                Text(
                  loc('تقرير الأسبوع'),
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  text,
                  style: const TextStyle(color: Colors.white, fontSize: 16),
                ),
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
  const _StatCard({
    required this.icon,
    required this.color,
    required this.value,
    required this.label,
  });

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
                    child: Text(
                      value,
                      style: const TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
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
        label: loc('الوقت في التعلم'),
      ),
      _StatCard(
        icon: Icons.play_circle_rounded,
        color: const Color(0xFF43A047),
        value: '${r.videosFinished}',
        label: loc('دروس مكتملة'),
      ),
      _StatCard(
        icon: Icons.extension_rounded,
        color: const Color(0xFFFB8C00),
        value: '${r.gameRounds}',
        label: loc('جولات ألعاب'),
      ),
      _StatCard(
        icon: Icons.event_available_rounded,
        color: const Color(0xFFE53935),
        value: '${r.activeDays} / 7',
        label: loc('أيام النشاط'),
      ),
    ];
    return Column(
      children: [
        Row(
          children: [
            Expanded(child: cards[0]),
            const SizedBox(width: 12),
            Expanded(child: cards[1]),
          ],
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(child: cards[2]),
            const SizedBox(width: 12),
            Expanded(child: cards[3]),
          ],
        ),
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
            Text(
              title,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
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
      title: loc('الوقت يوماً بيوم'),
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
                    Text(
                      values[i] > 0 ? '${(values[i] / 60).round()}' : '',
                      style: const TextStyle(fontSize: 12),
                    ),
                    const SizedBox(height: 2),
                    Container(
                      margin: const EdgeInsets.symmetric(horizontal: 6),
                      height: maxV == 0 ? 4 : 4 + 86 * values[i] / maxV,
                      decoration: BoxDecoration(
                        color: values[i] > 0
                            ? const Color(0xFF7E57C2)
                            : Colors.black12,
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      loc(_dayShort[report.start.add(Duration(days: i)).weekday - 1]),
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

  Widget _group(
    String title,
    Color color,
    IconData icon,
    List<SkillStat> stats,
  ) {
    if (stats.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, color: color, size: 20),
              const SizedBox(width: 6),
              Text(
                title,
                style: TextStyle(
                  color: color,
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          for (final s in stats)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 3),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          s.missed.isEmpty
                              ? s.skill.label
                              : tr2('${s.skill.label} (يخطئ في: ${s.missed.join(loc('، '))})', '${s.skill.label} (often wrong in: ${s.missed.join(loc('، '))})'),
                        ),
                        Text(
                          s.level == SkillLevel.mastered
                              ? tr2('التالي: مستوى أصعب في «${s.skill.game}»', 'Next: a harder level in “${s.skill.game}”')
                              : tr2('النشاط التالي: «${s.skill.game}» (${s.attempts} جولة مسجلة)', 'Next activity: “${s.skill.game}” (${s.attempts} rounds recorded)'),
                          style: const TextStyle(fontSize: 12, color: Colors.black54),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 10,
                      vertical: 3,
                    ),
                    decoration: BoxDecoration(
                      color: color.withAlpha(30),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      s.attempts < kMinAttempts
                          ? tr2('${s.attempts} جولات', '${s.attempts} rounds')
                          : '${(s.accuracy * 100).round()}%',
                      style: TextStyle(
                        color: color,
                        fontWeight: FontWeight.bold,
                      ),
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
      title: loc('خريطة المهارات'),
      child: r.skills.isEmpty
          ? Text(
              loc('عندما يلعب طفلك ألعاب الحروف والألوان والرياضيات تظهر مهاراته هنا.'),
            )
          : Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _group(
                  loc('أتقنها'),
                  Colors.green.shade700,
                  Icons.verified_rounded,
                  r.mastered,
                ),
                _group(
                  loc('تحتاج إلى تدريب'),
                  Colors.deepOrange,
                  Icons.fitness_center_rounded,
                  r.needsPractice,
                ),
                _group(
                  loc('قيد التعلّم'),
                  Colors.blueGrey,
                  Icons.trending_up_rounded,
                  r.others,
                ),
                Text(
                  tr2('تُحسب من آخر 3 أسابيع، ولا تُحكم المهارة قبل $kMinAttempts جولات.', 'Calculated from the last 3 weeks. A skill is not judged before $kMinAttempts rounds.'),
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
            ((report.lessonsPerSubject[s.id] ?? 0) > 0 ||
                report.targets.containsKey(s.id)))
          s,
    ];
    return _Section(
      title: loc('الدروس حسب المادة'),
      child: rows.isEmpty
          ? Text(
              loc('لم يكمل طفلك دروساً في هذا الأسبوع. يمكنك وضع أهداف من «الخطة الأسبوعية».'),
            )
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
                                  value:
                                      ((report.lessonsPerSubject[s.id] ?? 0) /
                                              report.targets[s.id]!)
                                          .clamp(0.0, 1.0),
                                  color: s.color,
                                  minHeight: 8,
                                  borderRadius: BorderRadius.circular(8),
                                )
                              : const SizedBox.shrink(),
                        ),
                        const SizedBox(width: 10),
                        Text(
                          report.targets.containsKey(s.id)
                              ? tr2('${report.lessonsPerSubject[s.id] ?? 0} من ${report.targets[s.id]}', '${report.lessonsPerSubject[s.id] ?? 0} of ${report.targets[s.id]}')
                              : '${report.lessonsPerSubject[s.id] ?? 0}',
                        ),
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
      title: loc('توصيات للأسبوع القادم'),
      child: report.recommendations.isEmpty
          ? Text(loc('كل شيء يسير جيداً. استمر!'))
          : Column(
              children: [
                for (final rec in report.recommendations)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(
                          _look(rec.kind).$1,
                          color: _look(rec.kind).$2,
                          size: 24,
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            rec.text,
                            style: const TextStyle(fontSize: 15),
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
    );
  }
}

/// The learning journey of one child: levels, stars and accuracy per land, the
/// week's activities, what is suggested next, and the plan controls.
class _Journey extends StatelessWidget {
  final ChildProfile child;
  final DateTime end;
  const _Journey({required this.child, required this.end});

  @override
  Widget build(BuildContext context) {
    final store = JourneyStore.instance;
    final progress = store.progressOf(child.id, today: end);
    final week = weeklyCounts(store.attemptsOf(child.id), end);
    final plan = store.todayPlan(child.id);
    return _Section(
      title: tr2('رحلة التعلّم · ${child.nickname}', 'Learning journey · ${child.nickname}'),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap(
            spacing: 14,
            runSpacing: 6,
            children: [
              Text(tr2('⭐ ${progress.totalStars} نجمة', '⭐ ${progress.totalStars} stars')),
              Text(tr2('المستوى ${progress.explorerLevel}', 'Level ${progress.explorerLevel}')),
              Text(tr2('✅ ${progress.completedTotal} نشاطاً', '✅ ${progress.completedTotal} activities')),
              Text(tr2('🏅 ${progress.badges.length} شارة', '🏅 ${progress.badges.length} badges')),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            loc('الأنشطة المنجزة يوماً بيوم'),
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              for (var i = 0; i < 7; i++)
                Expanded(
                  child: Column(
                    children: [
                      Text(
                        week[i] > 0 ? '${week[i]}' : '',
                        style: const TextStyle(fontSize: 12),
                      ),
                      Container(
                        margin: const EdgeInsets.symmetric(horizontal: 8),
                        height: 4 + week[i].clamp(0, 6) * 8.0,
                        decoration: BoxDecoration(
                          color: week[i] > 0
                              ? const Color(0xFF43A047)
                              : Colors.black12,
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
          const SizedBox(height: 14),
          for (final land in kLands)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 5),
              child: Builder(
                builder: (context) {
                  final lp = progress.lands[land.id]!;
                  return Row(
                    children: [
                      Icon(land.icon, color: land.color),
                      const SizedBox(width: 8),
                      SizedBox(
                        width: 118,
                        child: Text(
                          land.title,
                          style: const TextStyle(fontSize: 14),
                        ),
                      ),
                      Expanded(
                        child: LinearProgressIndicator(
                          value: lp.completed / kLevelsPerLand,
                          color: land.color,
                          minHeight: 8,
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '${lp.completed}/$kLevelsPerLand',
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(width: 6),
                      SizedBox(
                        width: 44,
                        child: Text(
                          lp.started ? '${(lp.accuracy * 100).round()}%' : '—',
                          textAlign: TextAlign.end,
                          style: const TextStyle(fontSize: 13),
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),
          Text(
            loc('النسبة = الإجابات الصحيحة من أول محاولة (آخر 10 أنشطة في الأرض).'),
            style: TextStyle(fontSize: 12),
          ),
          const SizedBox(height: 14),
          Text(
            loc('الأنشطة المقترحة لهذا اليوم'),
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 4),
          if (plan.isEmpty)
            Text(loc('أنهى طفلك كل الأراضي المفعّلة.'))
          else
            for (final p in plan)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 3),
                child: Row(
                  children: [
                    Icon(
                      p.doneToday
                          ? Icons.check_circle_rounded
                          : Icons.radio_button_unchecked,
                      size: 20,
                      color: p.doneToday ? Colors.green : Colors.grey,
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        tr2('${p.activity.title} — ${p.reason} (${p.minutes} د)', '${p.activity.title} — ${p.reason} (${p.minutes} min)'),
                      ),
                    ),
                  ],
                ),
              ),
          const Divider(height: 28),
          Text(loc('الصعوبة'), style: TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 6),
          SegmentedButton<int>(
            segments: [
              ButtonSegment(value: -1, label: Text(loc('أسهل'))),
              ButtonSegment(value: 0, label: Text(loc('عادي'))),
              ButtonSegment(value: 1, label: Text(loc('أصعب'))),
            ],
            selected: {child.bias},
            onSelectionChanged: (s) =>
                store.updateProfile(child.copyWith(bias: s.first)),
          ),
          const SizedBox(height: 10),
          Text(
            loc('أنشطة مغامرة اليوم'),
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 6),
          SegmentedButton<int>(
            segments: [
              for (var n = 2; n <= 5; n++)
                ButtonSegment(value: n, label: Text('$n')),
            ],
            selected: {child.dailyCount},
            onSelectionChanged: (s) =>
                store.updateProfile(child.copyWith(dailyCount: s.first)),
          ),
          const SizedBox(height: 10),
          OutlinedButton.icon(
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => ChildEditScreen(child: child)),
            ),
            icon: const Icon(Icons.tune_rounded),
            label: Text(loc('تعديل الخطة والأراضي والبيانات')),
          ),
        ],
      ),
    );
  }
}


/// Letters, words, stories and offline activities, with the three kinds of
/// evidence kept apart: seen/heard (exposure), tried (practice) and answered
/// right at the first try (demonstrated).
class _LearningLibrary extends StatefulWidget {
  final String childId;
  final DateTime end;
  const _LearningLibrary({required this.childId, required this.end});

  @override
  State<_LearningLibrary> createState() => _LearningLibraryState();
}

class _LearningLibraryState extends State<_LearningLibrary> {
  late Future<LearningSummary> _f = _load();
  AdaptivePlan _plan = const AdaptivePlan([], false, null);

  @override
  void didUpdateWidget(_LearningLibrary old) {
    super.didUpdateWidget(old);
    if (old.childId != widget.childId || old.end != widget.end) _f = _load();
  }

  Future<LearningSummary> _load() async {
    final id = widget.childId;
    final end = DateTime(widget.end.year, widget.end.month, widget.end.day);
    final records = await LearningRecords.forChild(id, days: 7, now: end);
    final all = await LearningRecords.forChild(id, days: 21, now: end);
    final from = dayOf(end.subtract(const Duration(days: 6)));
    final tasks = await HomeTasks.all();
    final offline = tasks
        .where((t) => t.childId == id && t.done && t.day.compareTo(from) >= 0 && t.day.compareTo(dayOf(end)) <= 0)
        .length;
    final letterStates = await LiteracyStore.statesOf(id);
    _plan = planLetters(
      states: letterStates,
      unlocked: LiteracyStore.unlocked(letterStates, await LiteracyStore.config()),
      today: DateTime.now(),
    );
    return buildLearningSummary(
      records: records,
      allRecords: all,
      history: await StoryStore.history(id),
      weekFrom: from,
      favorites: await StoryStore.favorites(id),
      letterStates: letterStates,
      offlineActivities: offline,
    );
  }

  Widget _row(String label, String value) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 3),
        child: Row(
          children: [
            Expanded(child: Text(label)),
            Text(value, style: const TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) {
    return _Section(
      title: loc('الحروف والكلمات والقصص'),
      child: FutureBuilder<LearningSummary>(
        future: _f,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snap.hasError) {
            return Row(
              children: [
                Expanded(child: Text(loc('تعذّر تحميل هذا القسم.'))),
                TextButton(onPressed: () => setState(() => _f = _load()), child: Text(loc('إعادة المحاولة'))),
              ],
            );
          }
          final s = snap.data!;
          if (s.isEmpty) {
            return Text(
              loc('لم يستخدم طفلك الحروف أو الكلمات أو القصص هذا الأسبوع. عندما يفعل ستظهر هنا نتائج حقيقية فقط.'),
            );
          }
          final minutes = (s.storySeconds / 60).round();
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _row(loc('دروس مكتملة'), '${s.lessonsCompleted}'),
              const Divider(),
              Text(loc('الحروف'), style: TextStyle(fontWeight: FontWeight.bold)),
              _row(loc('اطّلع عليها (تعرّض)'), '${s.letters.exposure.length}'),
              _row(loc('تدرّب عليها'), '${s.letters.practice.length}'),
              _row(loc('أجاب صحيحاً من أول مرة'), '${s.letters.demonstrated.length}'),
              _row(loc('متقنة (مراجعة متباعدة)'), tr2('${s.masteredLetters} من 28', '${s.masteredLetters} of 28')),
              const Divider(),
              Text(loc('الكلمات'), style: TextStyle(fontWeight: FontWeight.bold)),
              _row(loc('رآها أو سمعها (تعرّض)'), '${s.words.exposure.length}'),
              _row(loc('تدرّب عليها'), '${s.words.practice.length}'),
              _row(loc('أجاب صحيحاً من أول مرة'), '${s.words.demonstrated.length}'),
              const Divider(),
              Text(loc('القصص'), style: TextStyle(fontWeight: FontWeight.bold)),
              _row(loc('قصص سمعها'), '${s.stories.length}'),
              _row(loc('وقت الاستماع (تعرّض فقط)'), tr2('$minutes د', '$minutes min')),
              for (final st in s.stories)
                Text(
                  tr2('• ${st.title}${st.completed ? loc(' (أكملها)') : ''}${st.understoodChecked ? loc(' · أجاب عن أسئلتها') : ''}', '• ${st.title}${st.completed ? ' (finished)' : ''}${st.understoodChecked ? ' · answered its questions' : ''}'),
                  style: const TextStyle(fontSize: 13),
                ),
              if (s.favoriteStories.isNotEmpty) Text(tr2('المفضلة: ${s.favoriteStories.join(loc('، '))}', 'Favorites: ${s.favoriteStories.join(loc('، '))}'), style: const TextStyle(fontSize: 13)),
              Text(loc('الاستماع لا يعني الإتقان: يُحسب الفهم من إجابات الأسئلة فقط.'), style: TextStyle(fontSize: 12)),
              const Divider(),
              _row(loc('أنشطة البيت المؤكَّدة'), '${s.offlineActivities}'),
              _row(loc('أعمال إبداعية جديدة'), '${s.creations}'),
              if (_plan.steps.isNotEmpty || _plan.pauseReason != null) ...[
                const Divider(),
                Text(loc('خطة الحروف القادمة ولماذا'), style: const TextStyle(fontWeight: FontWeight.bold)),
                for (final st in _plan.steps) Text('• ${st.letter}: ${st.reason}', style: const TextStyle(fontSize: 13)),
                if (_plan.pauseReason != null) Text('• ${_plan.pauseReason}', style: const TextStyle(fontSize: 13)),
              ],
              if (s.needsPractice.isNotEmpty) ...[
                const Divider(),
                Text(loc('يحتاج إلى مزيد من التدريب'), style: TextStyle(fontWeight: FontWeight.bold, color: Colors.deepOrange)),
                for (final n in s.needsPractice) Text('• $n', style: const TextStyle(fontSize: 13)),
              ],
              if (s.nextSteps.isNotEmpty) ...[
                const Divider(),
                Text(loc('خطوات مقترحة'), style: TextStyle(fontWeight: FontWeight.bold)),
                for (final n in s.nextSteps) Text('• $n', style: const TextStyle(fontSize: 13)),
              ],
              const SizedBox(height: 6),
              Text(
                loc('هذه أدوات للمتابعة فقط، وليست تشخيصاً أو تقييماً طبياً أو نمائياً.'),
                style: TextStyle(fontSize: 12),
              ),
            ],
          );
        },
      ),
    );
  }
}
