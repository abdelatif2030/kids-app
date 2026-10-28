import 'lands.dart';
import 'models.dart';

class LevelState {
  final bool completed;
  final int bestStars;
  final bool unlocked;
  const LevelState(this.completed, this.bestStars, this.unlocked);
}

class LandProgress {
  final Land land;
  final List<LevelState> levels; // 5 levels
  final double accuracy; // first-try accuracy over the last 10 runs, 0..1
  const LandProgress(this.land, this.levels, this.accuracy);

  int get completed => levels.where((l) => l.completed).length;
  int get stars => levels.fold(0, (s, l) => s + l.bestStars);
  bool get started => completed > 0;
  bool get allDone => completed == levels.length;
}

class ChildProgress {
  final int totalStars;
  final int xp;
  final int completedTotal;
  final Map<String, LandProgress> lands;
  final Set<String> todayDone; // activity ids finished today
  final int weekCompleted; // finished activities in the last 7 days
  final Set<String> dailyGoalDays;
  final List<BadgeDef> badges; // the ones earned
  final List<Accessory> accessories; // the ones unlocked

  const ChildProgress({
    required this.totalStars,
    required this.xp,
    required this.completedTotal,
    required this.lands,
    required this.todayDone,
    required this.weekCompleted,
    required this.dailyGoalDays,
    required this.badges,
    required this.accessories,
  });

  /// "Explorer level": one level per 100 XP. XP comes only from finishing
  /// activities (10 per star and 5 per finished activity), never from time.
  int get explorerLevel => 1 + xp ~/ 100;
  int get xpIntoLevel => xp % 100;
}

/// Everything shown about a child's journey, derived from their finished
/// activities. Pure: the same attempts always give the same result.
ChildProgress computeProgress(
  List<Attempt> attempts, {
  required DateTime today,
  int dailyCount = 3,
  Map<String, int> badgeThresholds = const {},
}) {
  final best = <String, int>{};
  for (final a in attempts) {
    if (a.stars > (best[a.activityId] ?? 0)) best[a.activityId] = a.stars;
  }

  final lands = <String, LandProgress>{};
  for (final land in kLands) {
    final levels = <LevelState>[];
    var previousDone = true;
    for (var n = 1; n <= kLevelsPerLand; n++) {
      final stars = best['${land.id}_$n'] ?? 0;
      levels.add(LevelState(stars > 0, stars, previousDone));
      previousDone = stars > 0;
    }
    final recent = attempts.where((a) => a.activityId.startsWith('${land.id}_')).toList();
    final last = recent.length > 10 ? recent.sublist(recent.length - 10) : recent;
    final total = last.fold<int>(0, (s, a) => s + a.total);
    final right = last.fold<int>(0, (s, a) => s + a.firstTry);
    lands[land.id] = LandProgress(land, levels, total == 0 ? 0 : right / total);
  }

  final todayKey = dayKeyOf(today);
  final todayDone = {for (final a in attempts) if (a.day == todayKey) a.activityId};

  final weekDays = {
    for (var i = 0; i < 7; i++) dayKeyOf(DateTime(today.year, today.month, today.day - i)),
  };
  final perDay = <String, Set<String>>{};
  for (final a in attempts) {
    perDay.putIfAbsent(a.day, () => {}).add(a.activityId);
  }
  final weekCompleted =
      perDay.entries.where((e) => weekDays.contains(e.key)).fold<int>(0, (s, e) => s + e.value.length);
  final dailyGoalDays = {
    for (final e in perDay.entries)
      if (e.value.length >= dailyCount) e.key,
  };

  final totalStars = best.values.fold<int>(0, (s, v) => s + v);
  final completedTotal = best.length;
  final perfect = best.values.where((v) => v == 3).length;
  final landsTried = lands.values.where((l) => l.started).length;

  bool earned(BadgeDef def) {
    final t = badgeThresholds[def.id] ?? def.threshold;
    if (t <= 0) return false; // switched off in the content admin
    return switch (def.counts) {
      'any' => completedTotal >= t,
      'perfect' => perfect >= t,
      'lands' => landsTried >= t,
      'daily' => dailyGoalDays.length >= t,
      'weekly' => weekCompleted >= t,
      final landId => (lands[landId]?.completed ?? 0) >= t,
    };
  }

  return ChildProgress(
    totalStars: totalStars,
    xp: totalStars * 10 + completedTotal * 5,
    completedTotal: completedTotal,
    lands: lands,
    todayDone: todayDone,
    weekCompleted: weekCompleted,
    dailyGoalDays: dailyGoalDays,
    badges: [for (final b in kBadges) if (earned(b)) b],
    accessories: [for (final a in kAccessories) if (a.starsNeeded <= totalStars) a],
  );
}

/// Finished activities per day for the 7 days ending on [today], oldest first.
List<int> weeklyCounts(List<Attempt> attempts, DateTime today) {
  final perDay = <String, Set<String>>{};
  for (final a in attempts) {
    perDay.putIfAbsent(a.day, () => {}).add(a.activityId);
  }
  return [
    for (var i = 6; i >= 0; i--)
      perDay[dayKeyOf(DateTime(today.year, today.month, today.day - i))]?.length ?? 0,
  ];
}
