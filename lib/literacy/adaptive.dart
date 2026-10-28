import '../l10n/strings.dart';
import 'letters_data.dart';
import 'mastery.dart';

/// What the adaptive plan asks the child to do with one letter.
enum AdaptiveAction {
  /// Spaced review: the letter is due again.
  review,

  /// The letter was missed in two sessions in a row: go back to an easier step.
  simplify,

  /// A letter not met yet, opened because nothing else is waiting.
  learnNew,

  /// A letter learned well (box 4+): a harder exercise instead of more repeating.
  challenge,
}

class AdaptiveStep {
  final String letter;
  final AdaptiveAction action;

  /// Why this step was chosen, in words a child's parent can read.
  final String reason;
  const AdaptiveStep(this.letter, this.action, this.reason);
}

class AdaptivePlan {
  final List<AdaptiveStep> steps;

  /// True when new letters are held back (the child is struggling, or too many
  /// reviews are waiting). The text says why.
  final bool newLettersPaused;
  final String? pauseReason;
  const AdaptivePlan(this.steps, this.newLettersPaused, this.pauseReason);

  List<AdaptiveStep> of(AdaptiveAction a) => [for (final s in steps) if (s.action == a) s];
}

const kAdaptiveMaxSteps = 4;
const kAdaptiveMaxReviews = 3;
const kStruggleLetters = 3; // letters with a recent miss before new ones pause
const kSimplifyAfter = 2; // sessions in a row not fully right
const kChallengeFromBox = 4;

/// The rules, in order (no AI, every decision has a visible reason):
/// 1. A letter missed in [kSimplifyAfter] sessions in a row gets the easy step.
/// 2. Letters that are due come next, the most overdue first. Reviews and easy
///    steps together stay within [kAdaptiveMaxReviews] per session.
/// 3. If [kStruggleLetters] or more letters were missed last time, or more than
///    [kAdaptiveMaxReviews] reviews are waiting, no new letter is added.
/// 4. Otherwise the first unlocked letter not met yet is offered.
/// 5. With room left, one letter at box [kChallengeFromBox]+ gets a challenge.
/// A session is never longer than [kAdaptiveMaxSteps].
AdaptivePlan planLetters({
  required Map<String, LetterState> states,
  required List<ArabicLetter> unlocked,
  required DateTime today,
  int maxSteps = kAdaptiveMaxSteps,
}) {
  final todayKey = '${today.year.toString().padLeft(4, '0')}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';
  final steps = <AdaptiveStep>[];
  final used = <String>{};

  bool isDue(LetterState s) => s.sessions > 0 && s.due.compareTo(todayKey) <= 0;
  final dueEntries = [for (final e in states.entries) if (isDue(e.value)) e]
    ..sort((a, b) => a.value.due.compareTo(b.value.due));

  // 1. Easy step for repeated misses.
  for (final e in dueEntries) {
    if (steps.length >= kAdaptiveMaxReviews) break;
    if (e.value.wrongRun >= kSimplifyAfter) {
      steps.add(AdaptiveStep(
        e.key,
        AdaptiveAction.simplify,
        tr2('أخطأ في هذا الحرف ${e.value.wrongRun} مرات متتالية، فنرجع لخطوة أسهل: اسمه وصوته فقط.',
            'Missed this letter ${e.value.wrongRun} times in a row, so we go back to an easier step: just its name and sound.'),
      ));
      used.add(e.key);
    }
  }

  // 2. Spaced review.
  for (final e in dueEntries) {
    if (steps.length >= kAdaptiveMaxReviews) break;
    if (used.contains(e.key)) continue;
    final late = _daysBetween(e.value.due, todayKey);
    steps.add(AdaptiveStep(
      e.key,
      AdaptiveAction.review,
      late <= 0
          ? tr2('حان موعد مراجعته اليوم حتى لا يُنسى.', 'It is time to review it today so it is not forgotten.')
          : tr2('تأخرت مراجعته $late يوم.', 'Its review is $late day(s) late.'),
    ));
    used.add(e.key);
  }

  // 3. Hold new letters back when the child is struggling or behind.
  final recentMisses = states.values.where((s) => s.wrongRun >= 1).length;
  String? pause;
  if (recentMisses >= kStruggleLetters) {
    pause = tr2('عدة حروف أخطأ فيها الطفل في آخر مرة، فنثبّت ما تعلّمه قبل حرف جديد.',
        'Several letters were missed last time, so we strengthen what is known before a new letter.');
  } else if (dueEntries.length > kAdaptiveMaxReviews) {
    pause = tr2('هناك مراجعات كثيرة تنتظر، فنبدأ بها قبل حرف جديد.',
        'Many reviews are waiting, so we do them before a new letter.');
  }

  // 4. A new letter.
  if (pause == null && steps.length < maxSteps) {
    for (final l in unlocked) {
      if (!states.containsKey(l.letter)) {
        steps.add(AdaptiveStep(l.letter, AdaptiveAction.learnNew,
            tr2('حرف جديد في الترتيب، ولا توجد مراجعات متأخرة.', 'The next new letter in the order, with no late reviews.')));
        break;
      }
    }
  }

  // 5. One challenge when there is room.
  if (steps.length < maxSteps) {
    for (final e in states.entries) {
      if (used.contains(e.key) || e.value.box < kChallengeFromBox || isDue(e.value)) continue;
      steps.add(AdaptiveStep(e.key, AdaptiveAction.challenge,
          tr2('أتقنه الطفل، فنجرّب تمريناً أصعب بدل التكرار.', 'The child knows it well, so we try a harder exercise instead of repeating.')));
      break;
    }
  }
  return AdaptivePlan(steps.take(maxSteps).toList(), pause != null, pause);
}

int _daysBetween(String from, String to) {
  DateTime p(String s) {
    final a = s.split('-');
    return DateTime(int.parse(a[0]), int.parse(a[1]), int.parse(a[2]));
  }

  return p(to).difference(p(from)).inDays;
}
