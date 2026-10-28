import 'lands.dart';

/// A learning plan the parent can pick. Each preset is only a set of the real
/// settings on the child's profile (activities per day and difficulty).
class PlanPreset {
  final String id; // gentle | balanced | focused
  final int dailyCount;
  final int bias;
  const PlanPreset(this.id, this.dailyCount, this.bias);

  int minutesPerDay(int age) => dailyCount * minutesFor(age);
}

const kPlanPresets = [
  PlanPreset('gentle', 2, -1),
  PlanPreset('balanced', 3, 0),
  PlanPreset('focused', 5, 1),
];

/// The preset whose settings equal these, or null for a custom plan.
PlanPreset? presetFor(int dailyCount, int bias) {
  for (final p in kPlanPresets) {
    if (p.dailyCount == dailyCount && p.bias == bias) return p;
  }
  return null;
}
