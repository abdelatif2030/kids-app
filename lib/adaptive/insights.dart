import '../library/activities.dart';
import '../library/learning_records.dart';
import '../l10n/strings.dart';
import '../progress_store.dart';
import 'skill_state.dart';

/// Learning areas a parent sees. Only areas that have a real activity in the app are listed.
enum Domain { letters, vocabulary, numbers, listening, story, problemSolving, creativity }

/// Which recorded skills (lib/skills.dart) belong to which area. Creativity has no skill: it is counted from the
/// creative-studio records.
const kDomainSkills = <Domain, List<String>>{
  Domain.letters: ['letters_ar', 'letters_en', 'phonics', 'letter_position', 'syllables', 'word_building', 'reading'],
  Domain.vocabulary: ['vocab', 'english_vocab'],
  Domain.numbers: ['counting', 'addition', 'subtraction', 'multiplication'],
  Domain.listening: ['listening'],
  Domain.story: ['story'],
  Domain.problemSolving: ['sequence', 'memory', 'shapes', 'colors'],
  Domain.creativity: [],
};

String domainTitle(Domain d) => switch (d) {
      Domain.letters => tr2('الحروف والقراءة المبكرة', 'Letters and early reading'),
      Domain.vocabulary => tr2('المفردات', 'Vocabulary'),
      Domain.numbers => tr2('الأرقام والعدّ', 'Numbers and counting'),
      Domain.listening => tr2('الاستماع', 'Listening'),
      Domain.story => tr2('فهم القصة', 'Story comprehension'),
      Domain.problemSolving => tr2('حل المشكلات والتفكير', 'Problem solving'),
      Domain.creativity => tr2('الإبداع', 'Creativity'),
    };

/// How the recorded rounds in one area look. Words follow the evidence only; none of them is a diagnosis.
enum DomainStatus {
  /// Nothing recorded.
  noData,

  /// Some rounds, but too few to say anything.
  tooFew,

  /// At least one skill has enough rounds and most first tries were wrong.
  morePracticeMayHelp,

  /// Enough rounds, and recent first tries are mostly right.
  makingProgress,

  /// Every skill with enough rounds showed mastery on several days.
  showedMastery,
}

String statusText(DomainStatus s) => switch (s) {
      DomainStatus.noData => tr2('لا بيانات بعد', 'No data yet'),
      DomainStatus.tooFew => tr2('محاولات قليلة للحكم', 'Too few rounds to tell'),
      DomainStatus.morePracticeMayHelp => tr2('قد تفيد تدريبات إضافية', 'More practice may help'),
      DomainStatus.makingProgress => tr2('يتحسّن', 'Making progress'),
      DomainStatus.showedMastery => tr2('ظهر إتقان في عدة أيام', 'Showed mastery on several days'),
    };

class DomainInsight {
  final Domain domain;

  /// Skills of this area that have any recorded round, with their states.
  final List<SkillState> skills;

  /// Observed facts (not estimates): rounds, right on the first try, different days with a round.
  final int rounds;
  final int firstTry;
  final int days;

  /// At least one round in the last 7 days.
  final bool practicedRecently;
  final DomainStatus status;

  /// Skills judged `practising`, for suggesting family activities.
  final List<String> needPractice;

  /// Studio creations saved in the period (creativity only; making something is practice, never mastery).
  final int creations;
  const DomainInsight(this.domain, this.skills, this.rounds, this.firstTry, this.days, this.practicedRecently, this.status, this.needPractice, this.creations);

  bool get hasData => rounds > 0 || creations > 0;

  String get observed => domain == Domain.creativity
      ? (creations == 0 ? tr2('لا أعمال محفوظة', 'No saved creations') : tr2('$creations عمل محفوظ', '$creations saved creations'))
      : rounds == 0
          ? tr2('لا محاولات', 'No rounds')
          : tr2('$firstTry من $rounds صحيحة من أول مرة، في $days ${days == 1 ? 'يوم' : 'أيام'}', '$firstTry of $rounds right on the first try, over $days ${days == 1 ? 'day' : 'days'}');
}

/// What was done (not how well), from the learning records in the last 7 days, by kind of evidence.
class ActivityCounts {
  final Map<RecordType, int> byType;
  final int exposure, practice, demonstrated;
  const ActivityCounts(this.byType, this.exposure, this.practice, this.demonstrated);
  int get total => exposure + practice + demonstrated;
}

class InsightsReport {
  final List<DomainInsight> domains;
  final int roundsThisWeek;
  final int roundsLastWeek;
  final ActivityCounts activity;

  /// True when there is nothing at all for this child in the window.
  final bool empty;
  const InsightsReport(this.domains, this.roundsThisWeek, this.roundsLastWeek, this.activity, this.empty);

  List<DomainInsight> get withData => [for (final d in domains) if (d.hasData) d];
  List<DomainInsight> get withoutData => [for (final d in domains) if (!d.hasData) d];
}

String _dayKey(DateTime d) => dayOf(DateTime(d.year, d.month, d.day));

/// Builds the report for one child from local records, for the 7 days ending [now] (skills use their own 21-day window).
/// Pure: the same records always give the same report. Records after [now] are ignored.
InsightsReport buildInsights({
  required String childId,
  required Iterable<SkillEvent> events,
  required Iterable<LearningRecord> records,
  required DateTime now,
}) {
  final end = DateTime(now.year, now.month, now.day);
  final endKey = _dayKey(end);
  final weekStart = _dayKey(end.subtract(const Duration(days: 6)));
  final prevStart = _dayKey(end.subtract(const Duration(days: 13)));
  final mine = [for (final e in events) if (e.childId == childId && e.day.compareTo(endKey) <= 0) e];
  final myRecords = [for (final r in records) if (r.childId == childId && r.day.compareTo(endKey) <= 0) r];

  final domains = <DomainInsight>[];
  for (final d in Domain.values) {
    final ids = kDomainSkills[d]!;
    final states = [
      for (final id in ids)
        computeSkillState(id, mine, now: end),
    ].where((s) => s.level != SkillLevel.notStarted).toList();
    final rounds = states.fold<int>(0, (a, s) => a + s.rounds);
    final ok = states.fold<int>(0, (a, s) => a + s.firstTry);
    final days = {
      for (final e in mine)
        if (ids.contains(e.skill) && e.day.compareTo(_dayKey(end.subtract(const Duration(days: kEvidenceWindowDays - 1)))) >= 0) e.day
    }.length;
    final recent = mine.any((e) => ids.contains(e.skill) && e.day.compareTo(weekStart) >= 0);
    final creations = d == Domain.creativity
        ? {for (final r in myRecords) if (r.type == RecordType.creative && r.day.compareTo(_dayKey(end.subtract(const Duration(days: kEvidenceWindowDays - 1)))) >= 0) '${r.day}/${r.ref}/${r.type.name}'}.length
        : 0;

    DomainStatus status;
    if (rounds == 0 && creations == 0) {
      status = DomainStatus.noData;
    } else if (d == Domain.creativity) {
      status = DomainStatus.makingProgress; // only "has made things"; see [DomainInsight.creations]
    } else if (states.every((s) => s.level == SkillLevel.exploring)) {
      status = DomainStatus.tooFew;
    } else if (states.any((s) => s.level == SkillLevel.practising)) {
      status = DomainStatus.morePracticeMayHelp;
    } else if (states.where((s) => s.hasEvidence).every((s) => s.level == SkillLevel.demonstrated)) {
      status = DomainStatus.showedMastery;
    } else {
      status = DomainStatus.makingProgress;
    }
    domains.add(DomainInsight(d, states, rounds, ok, days, recent, status, [for (final s in states) if (s.level == SkillLevel.practising) s.skill], creations));
  }

  int count(String from, String to) => mine.where((e) => e.day.compareTo(from) >= 0 && e.day.compareTo(to) <= 0).length;
  final thisWeek = count(weekStart, endKey);
  final lastWeek = count(prevStart, _dayKey(end.subtract(const Duration(days: 7))));

  final week = [for (final r in myRecords) if (r.day.compareTo(weekStart) >= 0) r];
  final byType = <RecordType, int>{};
  for (final r in week) {
    byType[r.type] = (byType[r.type] ?? 0) + 1;
  }
  final activity = ActivityCounts(
    byType,
    week.where((r) => r.evidence == Evidence.exposure).length,
    week.where((r) => r.evidence == Evidence.practice).length,
    week.where((r) => r.evidence == Evidence.demonstrated).length,
  );
  return InsightsReport(domains, thisWeek, lastWeek, activity, mine.isEmpty && week.isEmpty);
}

// ---- family activities ---------------------------------------------------------------------------------------

/// The family-activity filter (lib/library/activities.dart `kSkillFilters`) that best matches an area.
const kDomainFamilyFilter = <Domain, String>{
  Domain.letters: 'اللغة والقصص',
  Domain.vocabulary: 'اللغة والقصص',
  Domain.numbers: 'العدّ والرياضيات',
  Domain.listening: 'اللغة والقصص',
  Domain.story: 'اللغة والقصص',
  Domain.problemSolving: 'الأشكال والألوان',
  Domain.creativity: 'اليدين والحركة',
};

class FamilySuggestion {
  final RealActivity activity;
  final Domain? domain;

  /// Why it is suggested, in plain words. A suggestion from a fixed rule says so; it is not "personalised intelligence".
  final String why;

  /// True when it comes from recorded practice; false when it is a general idea for the age.
  final bool basedOnRecords;
  const FamilySuggestion(this.activity, this.domain, this.why, this.basedOnRecords);
}

/// Up to [max] short real-life activities (from the approved library) for the child's age. First for areas where more practice
/// may help, then (with no such area) general ideas. Deterministic: rotates by the day, so a parent sees variety, not randomness.
List<FamilySuggestion> suggestFamilyActivities(InsightsReport report, {required int age, required DateTime now, int max = 3}) {
  final fit = [for (final a in kRealActivities) if (age >= a.minAge && age <= a.maxAge) a];
  final day = DateTime(now.year, now.month, now.day).difference(DateTime(2026, 1, 1)).inDays;
  final out = <FamilySuggestion>[];
  final used = <String>{};
  void add(RealActivity a, Domain? d, String why, bool records) {
    if (out.length < max && used.add(a.id)) out.add(FamilySuggestion(a, d, why, records));
  }

  for (final d in report.domains.where((d) => d.status == DomainStatus.morePracticeMayHelp)) {
    final pool = [for (final a in fit) if (a.skill == loc(kDomainFamilyFilter[d.domain]!)) a];
    if (pool.isEmpty) continue;
    add(pool[day % pool.length], d.domain, tr2('لأن «${domainTitle(d.domain)}» قد يحتاج تدريباً إضافياً (${d.observed})', 'Because “${domainTitle(d.domain)}” may need more practice (${d.observed})'), true);
  }
  if (out.isEmpty && fit.isNotEmpty) {
    for (var i = 0; i < fit.length && out.length < max; i++) {
      add(fit[(day + i) % fit.length], null, tr2('فكرة عامة تناسب العمر', 'A general idea for this age'), false);
    }
  }
  return out;
}
