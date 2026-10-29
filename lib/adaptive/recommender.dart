import '../l10n/strings.dart';
import '../skills.dart';
import 'destinations.dart';
import 'skill_state.dart';

enum RecKind {
  /// A new profile, or a skill with no record yet: a gentle first step. Says nothing about ability.
  starter,

  /// The recent first-try answers were mostly wrong: the same skill in a different way (never "you failed").
  practiseDifferently,

  /// Mastery was shown on several days: a slightly harder next skill.
  challenge,

  /// Some practice recorded and going fine: keep going.
  keepGoing,
}

/// One suggestion: where to go, and why in words a child (and the parent reading along) can follow.
class Recommendation {
  final RecKind kind;
  final Destination destination;
  final String? skillId;

  /// Short sentence for the child.
  final String reason;

  /// For the parent: the recorded facts behind it (null for a starter).
  final String? observed;
  const Recommendation(this.kind, this.destination, this.skillId, this.reason, this.observed);
}

/// What follows what. Used only when the earlier skill has shown mastery on several days.
const kChallengeLadder = <String, List<String>>{
  'letters_ar': ['word_building', 'reading'],
  'vocab': ['listening'],
  'counting': ['addition'],
  'addition': ['subtraction'],
  'subtraction': ['multiplication'],
  'colors': ['shapes'],
  'shapes': ['sequence'],
  'sequence': ['memory'],
  'listening': ['vocab'],
};

/// Where a brand-new profile may start, in this order (the first that fits the age).
const kStarterOrder = ['stories', 'game:listen_picture', 'color_game', 'vocab_library', 'letters', 'game:numerals', 'game:match_pictures'];

String _skillName(String id) => kSkills.firstWhere((s) => s.id == id, orElse: () => Skill(id, id, '', '')).label;

/// Deterministic, explainable recommendations from recorded rounds. The same inputs always give the same output;
/// nothing is random, and nothing is invented: every suggestion names real recorded data or says it is a first step.
List<Recommendation> recommend({
  required int age,
  required Map<String, SkillState> states,
  required List<Destination> destinations,
  required DateTime now,
  int max = 3,
}) {
  final fit = [for (final d in destinations) if (d.fitsAge(age)) d];
  final out = <Recommendation>[];
  final usedDest = <String>{};
  final dayIndex = DateTime(now.year, now.month, now.day).difference(DateTime(now.year, 1, 1)).inDays;

  List<Destination> forSkill(String skill) => [for (final d in fit) if (d.skills.contains(skill)) d];

  void add(Recommendation r) {
    if (out.length >= max || !usedDest.add(r.destination.id)) return;
    out.add(r);
  }

  final withEvidence = [for (final s in states.values) if (s.level != SkillLevel.notStarted) s];

  // 1. Skills that need a different way in. Fewest right first; ties broken by skill id so the order is stable.
  final practising = [for (final s in withEvidence) if (s.level == SkillLevel.practising) s]
    ..sort((a, b) {
      final c = (a.recentAccuracy ?? 0).compareTo(b.recentAccuracy ?? 0);
      return c != 0 ? c : a.skill.compareTo(b.skill);
    });
  for (final s in practising) {
    final options = forSkill(s.skill);
    if (options.isEmpty) continue;
    // A different format when there is one: rotate through the options by the day.
    final pick = options[(dayIndex + options.length - 1) % options.length];
    add(Recommendation(
      RecKind.practiseDifferently,
      pick,
      s.skill,
      tr2('هيا نتدرّب على «${_skillName(s.skill)}» بطريقة جديدة 🌈', 'Let\'s practise “${_skillName(s.skill)}” in a new way 🌈'),
      '${_skillName(s.skill)}: ${s.observed}',
    ));
  }

  // 2. Challenges after shown mastery.
  final demonstrated = [for (final s in withEvidence) if (s.level == SkillLevel.demonstrated) s]..sort((a, b) => a.skill.compareTo(b.skill));
  for (final s in demonstrated) {
    for (final next in kChallengeLadder[s.skill] ?? const <String>[]) {
      final ns = states[next];
      if (ns != null && ns.level == SkillLevel.demonstrated) continue;
      final options = forSkill(next);
      if (options.isEmpty) continue;
      add(Recommendation(
        RecKind.challenge,
        options.first,
        next,
        tr2('أنت بارع في «${_skillName(s.skill)}»! جرّب «${_skillName(next)}» ⭐', 'You are great at “${_skillName(s.skill)}”! Try “${_skillName(next)}” ⭐'),
        '${_skillName(s.skill)}: ${s.observed}',
      ));
      break;
    }
  }

  // 3. Keep going with what is being built.
  final building = [for (final s in withEvidence) if (s.level == SkillLevel.building || s.level == SkillLevel.exploring) s]
    ..sort((a, b) => (b.lastDay ?? '').compareTo(a.lastDay ?? '')); // most recent first
  for (final s in building) {
    final options = forSkill(s.skill);
    if (options.isEmpty) continue;
    add(Recommendation(
      RecKind.keepGoing,
      options.first,
      s.skill,
      tr2('كمّل لعب «${_skillName(s.skill)}» 👍', 'Keep playing “${_skillName(s.skill)}” 👍'),
      '${_skillName(s.skill)}: ${s.observed}',
    ));
  }

  // 4. Nothing recorded (or nothing left to suggest): gentle starters, in a fixed order, that fit the age.
  if (out.isEmpty) {
    for (final id in kStarterOrder) {
      final d = fit.where((d) => d.id == id).firstOrNull;
      if (d == null) continue;
      add(Recommendation(RecKind.starter, d, null, tr2('هيا نبدأ بشيء ممتع! 🎈', 'Let\'s start with something fun! 🎈'), null));
      if (out.length >= 2) break;
    }
  }
  return out;
}
