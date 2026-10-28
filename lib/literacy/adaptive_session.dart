import 'dart:math';

import '../journey/models.dart';
import 'adaptive.dart';
import 'exercises.dart';
import 'letters_data.dart';

/// The questions for the practice part of [plan]: easy steps, reviews and
/// challenges. A new letter is not here; it opens its own lesson.
List<Question> questionsForPlan(AdaptivePlan plan, {Random? random}) {
  final r = random ?? Random();
  final out = <Question>[];
  for (final s in plan.steps) {
    final l = letterOf(s.letter);
    if (l == null) continue;
    switch (s.action) {
      case AdaptiveAction.simplify:
        out.addAll(simplerLetterSession(l, random: r));
      case AdaptiveAction.review:
        out.add(switch (r.nextInt(3)) {
          0 => nameQuestion(l, r),
          1 => soundQuestion(l, r),
          _ => startsWithQuestion(l, r),
        });
      case AdaptiveAction.challenge:
        out.add(syllableQuestion(l, r));
        out.add(blendQuestion(r));
      case AdaptiveAction.learnNew:
        break;
    }
  }
  return out;
}
