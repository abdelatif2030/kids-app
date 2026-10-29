import '../l10n/strings.dart';
import '../progress_store.dart';
import '../skills.dart';

/// Where a child is with one skill, judged ONLY from real game rounds on this device (`skill_events`).
///
/// - notStarted: no round yet.
/// - exploring: fewer than [kMinRounds] rounds. Too little evidence to say anything: never a strength or a weakness.
/// - practising: enough rounds, and the recent first-try accuracy is under 60%. More practice would help.
/// - building: 60% or more, but not yet enough evidence of mastery.
/// - demonstrated: at least [kMasteryRounds] rounds on at least [kMasteryDays] different days AND recent first-try
///   accuracy of 80% or more. One lucky session is never enough.
/// These are estimates from a few rounds, not a diagnosis, and a child can always move in any direction.
enum SkillLevel { notStarted, exploring, practising, building, demonstrated }

const kEvidenceWindowDays = 21;
const kMinRounds = 5;
const kMasteryRounds = 8;
const kMasteryDays = 2;
const kRecentRounds = 10;
const kStruggleAccuracy = 0.6;
const kMasteryAccuracy = 0.8;

class SkillState {
  final String skill;
  final SkillLevel level;

  /// Rounds in the evidence window, and how many were right on the first try.
  final int rounds;
  final int firstTry;

  /// First-try accuracy over the most recent rounds (0..1), null with no rounds.
  final double? recentAccuracy;
  final int days; // different days with at least one round
  final String? lastDay;
  const SkillState(this.skill, this.level, this.rounds, this.firstTry, this.recentAccuracy, this.days, this.lastDay);

  bool get hasEvidence => rounds >= kMinRounds;

  /// What was observed, in plain words (a fact, not a judgement).
  String get observed => rounds == 0
      ? tr2('لا محاولات بعد', 'No rounds yet')
      : tr2('$firstTry من $rounds صحيحة من أول مرة في $days ${days == 1 ? 'يوم' : 'أيام'}', '$firstTry of $rounds right on the first try, over $days ${days == 1 ? 'day' : 'days'}');

  /// What we estimate from it, and how sure we are.
  String get estimate => switch (level) {
        SkillLevel.notStarted => tr2('لم تبدأ بعد', 'Not started yet'),
        SkillLevel.exploring => tr2('لا تكفي المحاولات للحكم بعد', 'Not enough rounds to tell yet'),
        SkillLevel.practising => tr2('قد تفيد تدريبات إضافية', 'More practice may help'),
        SkillLevel.building => tr2('تتحسّن', 'Getting there'),
        SkillLevel.demonstrated => tr2('ظهر إتقان في عدة أيام', 'Showed mastery on several days'),
      };
}

String _dayKey(DateTime d) => '${d.year.toString().padLeft(4, '0')}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

/// The state of one skill from [events] (all of one child's events, in the order they happened).
SkillState computeSkillState(String skill, Iterable<SkillEvent> events, {required DateTime now}) {
  final from = _dayKey(DateTime(now.year, now.month, now.day).subtract(const Duration(days: kEvidenceWindowDays - 1)));
  final mine = [for (final e in events) if (e.skill == skill && e.day.compareTo(from) >= 0) e];
  if (mine.isEmpty) return SkillState(skill, SkillLevel.notStarted, 0, 0, null, 0, null);
  final ok = mine.where((e) => e.ok).length;
  final days = {for (final e in mine) e.day}.length;
  final recent = mine.length <= kRecentRounds ? mine : mine.sublist(mine.length - kRecentRounds);
  final acc = recent.where((e) => e.ok).length / recent.length;
  SkillLevel level;
  if (mine.length < kMinRounds) {
    level = SkillLevel.exploring;
  } else if (mine.length >= kMasteryRounds && days >= kMasteryDays && acc >= kMasteryAccuracy) {
    level = SkillLevel.demonstrated;
  } else if (acc < kStruggleAccuracy) {
    level = SkillLevel.practising;
  } else {
    level = SkillLevel.building;
  }
  return SkillState(skill, level, mine.length, ok, acc, days, mine.last.day);
}

/// All the skills a child has any event for (and the others as notStarted when [all] is true).
Map<String, SkillState> computeSkillStates(Iterable<SkillEvent> events, {required String childId, required DateTime now, bool all = false}) {
  final mine = [for (final e in events) if (e.childId == childId) e];
  final ids = all ? [for (final s in kSkills) s.id] : {for (final e in mine) e.skill}.toList();
  return {for (final id in ids) id: computeSkillState(id, mine, now: now)};
}

Future<Map<String, SkillState>> loadSkillStates(String childId, {DateTime? now, bool all = false}) async =>
    computeSkillStates(await ProgressStore.load(), childId: childId, now: now ?? DateTime.now(), all: all);
