import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../l10n/strings.dart';
import '../library/activity_screens.dart';
import '../library/learning_records.dart';
import '../progress_store.dart';
import 'insights.dart';

/// Parent dashboard section: what was practised, per learning area, from this device's own records.
/// "Observed" lines are counts; "estimate" lines are the app's reading of those counts and say how sure it is.
/// Nothing here is a diagnosis, and nothing is shown for an area with no data.
class ParentInsightsSection extends StatefulWidget {
  final ChildProfile child;
  final DateTime now;

  /// Tests inject the records; the app reads the local stores.
  final Future<(List<SkillEvent>, List<LearningRecord>)> Function()? loader;
  const ParentInsightsSection({super.key, required this.child, required this.now, this.loader});

  @override
  State<ParentInsightsSection> createState() => _ParentInsightsSectionState();
}

class _ParentInsightsSectionState extends State<ParentInsightsSection> {
  late Future<InsightsReport> _report = _load();

  Future<InsightsReport> _load() async {
    final data = await (widget.loader ?? _defaultLoader)();
    return buildInsights(childId: widget.child.id, events: data.$1, records: data.$2, now: widget.now);
  }

  static Future<(List<SkillEvent>, List<LearningRecord>)> _defaultLoader() async => (await ProgressStore.load(), await LearningRecords.all());

  @override
  void didUpdateWidget(ParentInsightsSection old) {
    super.didUpdateWidget(old);
    if (old.child.id != widget.child.id || old.now != widget.now) _report = _load();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<InsightsReport>(
      future: _report,
      builder: (context, snap) {
        Widget body;
        if (snap.connectionState != ConnectionState.done) {
          body = const Padding(padding: EdgeInsets.all(16), child: Center(child: CircularProgressIndicator()));
        } else if (snap.hasError) {
          body = Column(
            children: [
              Text(tr2('تعذّر قراءة البيانات المحفوظة على هذا الجهاز.', 'The data saved on this device could not be read.')),
              TextButton(onPressed: () => setState(() {
                _report = _load();
              }), child: Text(tr2('حاول مرة أخرى', 'Try again'))),
            ],
          );
        } else {
          body = _Content(report: snap.data!, child: widget.child, now: widget.now);
        }
        return Card(
          key: const Key('parent-insights'),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Semantics(header: true, child: Text(tr2('ما الذي تدرّب عليه ${widget.child.nickname}', 'What ${widget.child.nickname} practised'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800))),
                const SizedBox(height: 4),
                Text(
                  tr2('الأعداد أدناه مسجّلة فعلاً على هذا الجهاز. العبارات التقديرية مجرد قراءة تقريبية لها ولا تُعدّ حكماً على قدرات الطفل.',
                      'The numbers below were really recorded on this device. The estimate wording is only a rough reading of them, not a diagnosis.'),
                  style: const TextStyle(fontSize: 13),
                ),
                const SizedBox(height: 12),
                body,
              ],
            ),
          ),
        );
      },
    );
  }
}

class _Content extends StatelessWidget {
  final InsightsReport report;
  final ChildProfile child;
  final DateTime now;
  const _Content({required this.report, required this.child, required this.now});

  @override
  Widget build(BuildContext context) {
    final suggestions = suggestFamilyActivities(report, age: child.age, now: now);
    final a = report.activity;
    final trend = report.roundsThisWeek == 0 && report.roundsLastWeek == 0
        ? null
        : report.roundsThisWeek > report.roundsLastWeek
            ? tr2('جولات أكثر من الأسبوع السابق', 'More rounds than the week before')
            : report.roundsThisWeek < report.roundsLastWeek
                ? tr2('جولات أقل من الأسبوع السابق', 'Fewer rounds than the week before')
                : tr2('عدد جولات مماثل للأسبوع السابق', 'About the same number of rounds as the week before');
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (report.empty)
          _Note(
            key: const Key('insights-empty'),
            icon: Icons.hourglass_empty_rounded,
            text: tr2('لا توجد بيانات بعد. عندما يلعب ${child.nickname} ويُنهي أنشطة ستظهر هنا. لا نُظهر أرقاماً قبل أن تُسجَّل فعلاً.',
                'No data yet. When ${child.nickname} plays and finishes activities it will appear here. No numbers are shown before they are really recorded.'),
          )
        else ...[
          Text(tr2('الجولات هذا الأسبوع: ${report.roundsThisWeek} · الأسبوع السابق: ${report.roundsLastWeek}', 'Rounds this week: ${report.roundsThisWeek} · week before: ${report.roundsLastWeek}'),
              style: const TextStyle(fontWeight: FontWeight.w700)),
          if (trend != null) Text(trend),
          if (a.total > 0) ...[
            const SizedBox(height: 4),
            Text(tr2('سجلات التعلّم هذا الأسبوع: ${a.exposure} استماع/مشاهدة فقط، ${a.practice} تدريب، ${a.demonstrated} أظهر فيها فهماً.',
                'Learning records this week: ${a.exposure} listened/seen only, ${a.practice} practice, ${a.demonstrated} showed understanding.')),
          ],
          const SizedBox(height: 12),
          for (final d in report.withData) _DomainRow(insight: d),
          if (report.withoutData.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text(
                tr2('لا بيانات بعد في: ${report.withoutData.map((d) => domainTitle(d.domain)).join('، ')}.',
                    'No data yet in: ${report.withoutData.map((d) => domainTitle(d.domain)).join(', ')}.'),
                style: const TextStyle(fontSize: 13),
              ),
            ),
        ],
        const SizedBox(height: 12),
        Semantics(header: true, child: Text(tr2('أنشطة قصيرة للعائلة', 'Short family activities'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800))),
        const SizedBox(height: 4),
        if (suggestions.isEmpty)
          Text(tr2('لا توجد أنشطة عائلية مناسبة لهذا العمر في المكتبة.', 'No family activities for this age in the library.'))
        else
          for (final s in suggestions)
            ListTile(
              key: Key('family-${s.activity.id}'),
              contentPadding: EdgeInsets.zero,
              leading: const Icon(Icons.family_restroom_rounded),
              title: Text(s.activity.title),
              subtitle: Text('${s.why}\n${tr2('${s.activity.minutes} دقيقة', '${s.activity.minutes} min')}'),
              isThreeLine: true,
              onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => ActivityLibraryScreen(child: child))),
            ),
      ],
    );
  }
}

class _Note extends StatelessWidget {
  final IconData icon;
  final String text;
  const _Note({super.key, required this.icon, required this.text});

  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(icon),
        const SizedBox(width: 8),
        Expanded(child: Text(text)),
      ]);
}

class _DomainRow extends StatelessWidget {
  final DomainInsight insight;
  const _DomainRow({required this.insight});

  @override
  Widget build(BuildContext context) {
    final d = insight;
    final frac = d.rounds == 0 ? null : d.firstTry / d.rounds;
    final recent = d.practicedRecently ? tr2('تدرّب مؤخراً', 'Practised recently') : tr2('لم يتدرّب في آخر 7 أيام', 'Not practised in the last 7 days');
    final text = '${domainTitle(d.domain)}. ${tr2('المسجَّل', 'Observed')}: ${d.observed}. ${tr2('التقدير', 'Estimate')}: ${statusText(d.status)}. $recent.';
    return Semantics(
      container: true,
      label: text,
      child: ExcludeSemantics(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(domainTitle(d.domain), style: const TextStyle(fontWeight: FontWeight.w800)),
              if (frac != null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 4),
                  child: ClipRRect(borderRadius: BorderRadius.circular(6), child: LinearProgressIndicator(value: frac, minHeight: 10)),
                ),
              Text('${tr2('المسجَّل', 'Observed')}: ${d.observed}'),
              Text('${tr2('التقدير', 'Estimate')}: ${statusText(d.status)} · $recent'),
            ],
          ),
        ),
      ),
    );
  }
}
