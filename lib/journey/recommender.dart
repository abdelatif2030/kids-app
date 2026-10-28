import 'lands.dart';
import 'models.dart';
import 'progress.dart';
import '../l10n/strings.dart';

class PlannedActivity {
  final Activity activity;

  /// Why this one was suggested, in words a parent can read.
  final String reason;
  final int minutes;
  final bool doneToday;
  const PlannedActivity(this.activity, this.reason, this.minutes, this.doneToday);
}

const kStruggleBelow = 0.6;
const kStrongFrom = 0.9;

/// "Today's adventure": a short, balanced list of activities for [child].
///
/// The rules are simple and visible (no AI):
/// - Lands the parent removed from the plan are skipped.
/// - Land by land, the next level on the map is suggested. If the last run
///   there was shaky (60% or less on the first try), the same level is offered
///   again as extra practice instead of moving on.
/// - If the last two runs in a land were 90% or better, the next level is
///   called a challenge.
/// - A land whose levels are all done with 3 stars is not repeated.
/// - To keep a balanced mix, lands with the fewest finished activities in the
///   last 7 days come first (ties follow the parent's order).
/// The list is worked out from what happened before today, so it stays the same
/// all day while activities get ticked off.
List<PlannedActivity> planToday({
  required ChildProfile child,
  required List<Attempt> attempts,
  required DateTime today,
  Set<String> hiddenLands = const {},
  Map<String, List<int>> landAges = const {},
  int? minutesOverride,
}) {
  final todayKey = dayKeyOf(today);
  final before = [for (final a in attempts) if (a.day != todayKey) a];
  final progress = computeProgress(before, today: today, dailyCount: child.dailyCount);

  final active = [
    for (final id in (child.plan.isEmpty ? [for (final l in kLands) l.id] : child.plan))
      if (!hiddenLands.contains(id) &&
          (landAges[id] == null || (child.age >= landAges[id]![0] && child.age <= landAges[id]![1])))
        id,
  ];

  final weekDays = {
    for (var i = 1; i <= 7; i++) dayKeyOf(DateTime(today.year, today.month, today.day - i)),
  };
  int weekCount(String landId) {
    final seen = <String>{};
    for (final a in before) {
      if (a.activityId.startsWith('${landId}_') && weekDays.contains(a.day)) {
        seen.add('${a.day}/${a.activityId}');
      }
    }
    return seen.length;
  }

  final candidates = <(int, int, PlannedActivity)>[]; // (week count, order, pick)
  for (var order = 0; order < active.length; order++) {
    final landId = active[order];
    final lp = progress.lands[landId]!;
    final runs = [for (final a in before) if (a.activityId.startsWith('${landId}_')) a];
    final list = activitiesOf(landId);

    Activity? pick;
    String reason = '';
    if (runs.isNotEmpty &&
        runs.last.accuracy <= kStruggleBelow &&
        lp.levels[activityById(runs.last.activityId)!.level - 1].bestStars <= 1) {
      pick = activityById(runs.last.activityId);
      reason = loc('تدريب إضافي لتثبيت المهارة');
    } else {
      final next = lp.levels.indexWhere((l) => l.unlocked && !l.completed);
      if (next >= 0) {
        pick = list[next];
        final strong = runs.length >= 2 &&
            runs[runs.length - 1].accuracy >= kStrongFrom &&
            runs[runs.length - 2].accuracy >= kStrongFrom;
        reason = strong
            ? loc('تحدٍّ جديد لأنه يتقدّم بسرعة')
            : (lp.completed == 0 ? loc('بداية جديدة') : loc('الخطوة التالية على الخريطة'));
      } else {
        // Everything is finished: only suggest levels that can still earn stars.
        final weakest = lp.levels.indexWhere((l) => l.bestStars < 3);
        if (weakest >= 0) {
          pick = list[weakest];
          reason = loc('محاولة جديدة لجمع نجوم أكثر');
        }
      }
    }
    if (pick == null) continue; // mastered: not repeated
    candidates.add((
      weekCount(landId),
      order,
      PlannedActivity(
        pick,
        reason,
        minutesOverride ?? minutesFor(child.age),
        attempts.any((a) => a.day == todayKey && a.activityId == pick!.id),
      ),
    ));
  }

  candidates.sort((a, b) => a.$1 != b.$1 ? a.$1.compareTo(b.$1) : a.$2.compareTo(b.$2));
  return [for (final c in candidates.take(child.dailyCount)) c.$3];
}

/// Land order from the first skill check, the parent's goals and the child's
/// interests: lands the child missed first, then the goals' lands, then interests.
List<String> planFromAssessment(
  Map<String, double> scores,
  List<String> goals,
  List<String> interests, {
  String learnLang = 'both',
}) {
  final goalLands = <String>[
    for (final g in kGoals)
      if (goals.contains(g.id)) ...g.lands,
  ];
  final order = <String>[];
  void add(Iterable<String> ids) {
    for (final id in ids) {
      if (!order.contains(id)) order.add(id);
    }
  }

  bool weak(String id) => (scores[id] ?? 0) < 1;
  add(goalLands.where(weak));
  add([for (final l in kLands) if (weak(l.id)) l.id]);
  add(goalLands);
  add(interests);
  add([for (final l in kLands) l.id]);
  // The language being learned decides what comes first among the language lands; the other one
  // stays available but moves to the end of the language lands.
  if (learnLang != 'both') {
    final first = learnLang == 'ar' ? 'letters' : 'english';
    final last = learnLang == 'ar' ? 'english' : 'letters';
    if (order.remove(first)) order.insert(0, first);
    if (order.remove(last)) order.add(last);
  }
  return order;
}
