import 'curriculum.dart';
import 'main.dart' show Video;
import 'progress_store.dart';
import 'skills.dart';
import 'watch_history.dart';

/// A skill needs this many rounds before we say anything about it.
const kMinAttempts = 5;
const kMasteredAt = 0.8;
const kNeedsPracticeBelow = 0.6;

/// Skills are judged over the last three weeks, so a quiet week does not erase them.
const kSkillWindowDays = 21;

enum SkillLevel { mastered, progressing, needsPractice, learning }

class SkillStat {
  final Skill skill;
  final int attempts;
  final int correct;

  /// The things missed most often (letters, colors), most missed first.
  final List<String> missed;
  const SkillStat(this.skill, this.attempts, this.correct, this.missed);

  double get accuracy => attempts == 0 ? 0 : correct / attempts;

  SkillLevel get level {
    if (attempts < kMinAttempts) return SkillLevel.learning;
    if (accuracy >= kMasteredAt) return SkillLevel.mastered;
    if (accuracy < kNeedsPracticeBelow) return SkillLevel.needsPractice;
    return SkillLevel.progressing;
  }
}

enum RecKind { practice, plan, explore, next, info }

class Recommendation {
  final RecKind kind;
  final String text;
  const Recommendation(this.kind, this.text);
}

class WeekReport {
  final DateTime start;
  final DateTime end;
  final int secondsInApp;
  final int videoSeconds;
  final int videosFinished;
  final int gameRounds;
  final int activeDays;

  /// Seconds in the app for each of the 7 days, oldest first.
  final List<int> secondsPerDay;
  final List<SkillStat> skills;

  /// Lessons (videos watched to the end) per subject id, this week.
  final Map<String, int> lessonsPerSubject;
  final Map<String, int> targets;
  final List<Recommendation> recommendations;

  const WeekReport({
    required this.start,
    required this.end,
    required this.secondsInApp,
    required this.videoSeconds,
    required this.videosFinished,
    required this.gameRounds,
    required this.activeDays,
    required this.secondsPerDay,
    required this.skills,
    required this.lessonsPerSubject,
    required this.targets,
    required this.recommendations,
  });

  List<SkillStat> get mastered => [for (final s in skills) if (s.level == SkillLevel.mastered) s];
  List<SkillStat> get needsPractice =>
      [for (final s in skills) if (s.level == SkillLevel.needsPractice) s];
  List<SkillStat> get others => [
        for (final s in skills)
          if (s.level == SkillLevel.progressing || s.level == SkillLevel.learning) s,
      ];

  bool get hasActivity => secondsInApp > 0 || gameRounds > 0 || videosFinished > 0;
}

String formatDuration(int seconds) {
  final m = (seconds / 60).round();
  if (m < 1) return seconds > 0 ? 'أقل من دقيقة' : '0 د';
  if (m < 60) return '$m د';
  return '${m ~/ 60} س ${m % 60} د';
}

DateTime _dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

/// Builds the report for the 7 days ending on [end] (inclusive). Pure: all the
/// data comes in as arguments, so it can be tested without a device.
WeekReport buildReport({
  required DateTime end,
  required List<SkillEvent> events,
  required List<WatchEntry> watch,
  required Map<String, int> usedSeconds,
  required List<Video> videos,
  required Map<String, int> targets,
  required int age,
}) {
  final endDay = _dateOnly(end);
  final days = [for (var i = 6; i >= 0; i--) endDay.subtract(Duration(days: i))];
  final keys = [for (final d in days) WatchHistory.dayKey(d)];
  final week = keys.toSet();

  final secondsPerDay = [for (final k in keys) usedSeconds[k] ?? 0];
  final weekWatch = watch.where((e) => week.contains(e.day)).toList();
  final weekEvents = events.where((e) => week.contains(e.day)).toList();

  final subjectOf = {for (final v in videos) v.youtubeId: v.subject};
  final finished = <String, Set<String>>{};
  for (final e in weekWatch) {
    final subject = subjectOf[e.videoId];
    if (e.completed && subject != null) finished.putIfAbsent(subject, () => {}).add(e.videoId);
  }
  final lessons = {for (final e in finished.entries) e.key: e.value.length};

  final activeDays = [
    for (var i = 0; i < 7; i++)
      if (secondsPerDay[i] > 0 ||
          weekEvents.any((e) => e.day == keys[i]) ||
          weekWatch.any((e) => e.day == keys[i]))
        i,
  ].length;

  // Skills over the longer window.
  final windowStart =
      WatchHistory.dayKey(endDay.subtract(const Duration(days: kSkillWindowDays - 1)));
  final windowEnd = keys.last;
  final stats = <SkillStat>[];
  for (final skill in kSkills) {
    final mine = events
        .where((e) =>
            e.skill == skill.id && e.day.compareTo(windowStart) >= 0 && e.day.compareTo(windowEnd) <= 0)
        .toList();
    if (mine.isEmpty) continue;
    final misses = <String, int>{};
    for (final e in mine.where((e) => !e.ok && e.detail != null)) {
      misses[e.detail!] = (misses[e.detail!] ?? 0) + 1;
    }
    final top = (misses.entries.toList()..sort((a, b) => b.value.compareTo(a.value)))
        .take(3)
        .map((e) => e.key)
        .toList();
    stats.add(SkillStat(skill, mine.length, mine.where((e) => e.ok).length, top));
  }

  final totalVideoSeconds = weekWatch.fold<int>(0, (s, e) => s + e.seconds);
  final videosFinished = finished.values.fold<int>(0, (s, v) => s + v.length);

  return WeekReport(
    start: days.first,
    end: endDay,
    secondsInApp: secondsPerDay.fold<int>(0, (s, v) => s + v),
    videoSeconds: totalVideoSeconds,
    videosFinished: videosFinished,
    gameRounds: weekEvents.length,
    activeDays: activeDays,
    secondsPerDay: secondsPerDay,
    skills: stats,
    lessonsPerSubject: lessons,
    targets: targets,
    recommendations: _recommend(stats, lessons, targets, videos, age,
        hasActivity: secondsPerDay.any((s) => s > 0) || weekEvents.isNotEmpty || videosFinished > 0),
  );
}

const _nextSkill = {
  'counting': 'addition',
  'addition': 'subtraction',
  'subtraction': 'multiplication',
};

List<Recommendation> _recommend(
  List<SkillStat> skills,
  Map<String, int> lessons,
  Map<String, int> targets,
  List<Video> videos,
  int age, {
  required bool hasActivity,
}) {
  final recs = <Recommendation>[];
  bool hasVideos(String subject) =>
      videos.any((v) => v.subject == subject && age >= v.minAge && age <= v.maxAge);

  final weak = [for (final s in skills) if (s.level == SkillLevel.needsPractice) s]
    ..sort((a, b) => a.accuracy.compareTo(b.accuracy));
  for (final s in weak.take(2)) {
    final detail = s.missed.isEmpty ? '' : ' (أكثر ما أخطأ فيه: ${s.missed.join('، ')})';
    recs.add(Recommendation(
      RecKind.practice,
      'يحتاج إلى تدريب في ${s.skill.label}$detail. جرّب لعبة «${s.skill.game}» بضع جولات كل يوم.',
    ));
  }

  for (final e in targets.entries) {
    final subject = subjectById(e.key);
    final done = lessons[e.key] ?? 0;
    if (subject == null || e.value <= done || !hasVideos(e.key)) continue;
    recs.add(Recommendation(
      RecKind.plan,
      'ينقص ${e.value - done} من الدروس في «${subject.label}» لتحقيق هدف الأسبوع (${e.value}).',
    ));
  }

  final strong = [for (final s in skills) if (s.level == SkillLevel.mastered) s];
  for (final s in strong.take(2)) {
    final next = skillById(_nextSkill[s.skill.id] ?? '');
    recs.add(Recommendation(
      RecKind.next,
      next == null
          ? 'أتقن ${s.skill.label}. ما شاء الله!'
          : 'أتقن ${s.skill.label}، ويمكنه الآن تجربة «${next.label}».',
    ));
  }

  // A subject with lessons for this age that has had none this week, and no goal.
  final untouched = [
    for (final s in kSkills.map((k) => k.subject).toSet())
      if (hasVideos(s) && (lessons[s] ?? 0) == 0 && !targets.containsKey(s) && s != 'drawing') s,
  ];
  for (final id in untouched.take(hasActivity ? 1 : 0)) {
    recs.add(Recommendation(
      RecKind.explore,
      'لم يكمل درساً في «${subjectById(id)?.label ?? id}» هذا الأسبوع. ابدأ بدرس قصير من «دروسي».',
    ));
  }

  if (!hasActivity) {
    recs.add(const Recommendation(RecKind.info, 'لا توجد نشاطات مسجّلة في هذا الأسبوع.'));
  }
  return recs.take(5).toList();
}

String _d(DateTime d) => '${d.day}/${d.month}';

/// A plain-text version of the report, for copying into WhatsApp and so on.
String reportAsText(WeekReport r, {String? childName, List<String> journey = const []}) {
  final b = StringBuffer()
    ..writeln('تقرير ${childName == null ? '' : '$childName، '}أسبوع ${_d(r.start)} – ${_d(r.end)}')
    ..writeln('الوقت في التعلم: ${formatDuration(r.secondsInApp)} (${r.activeDays} أيام نشاط)')
    ..writeln('دروس مكتملة: ${r.videosFinished}، جولات ألعاب: ${r.gameRounds}');
  for (final line in journey) {
    b.writeln(line);
  }
  if (r.mastered.isNotEmpty) {
    b.writeln('أتقن: ${r.mastered.map((s) => s.skill.label).join('، ')}');
  }
  if (r.needsPractice.isNotEmpty) {
    b.writeln('يحتاج تدريباً: ${r.needsPractice.map((s) => s.skill.label).join('، ')}');
  }
  if (r.recommendations.isNotEmpty) {
    b.writeln('توصيات:');
    for (final rec in r.recommendations) {
      b.writeln('- ${rec.text}');
    }
  }
  return b.toString().trimRight();
}
