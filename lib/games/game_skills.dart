import 'dart:async';

import '../progress_store.dart';

/// Which skill (lib/skills.dart) each learning game honestly feeds, and why some games feed none.
///
/// A skill event is ONE round or ONE puzzle with a right/wrong answer: [ok] means "no wrong try before the right one".
/// Finishing a game is recorded separately as practice (GameRewards.complete). Neither is mastery: mastery is
/// judged only by lib/adaptive/skill_state.dart (>= 8 rounds, >= 2 days, >= 80 % first try).
class GameSkillRule {
  final String gameId;

  /// Null when the game has no answer that can be right or wrong; [basis] then says why.
  final String? skill;
  final String basis;
  const GameSkillRule(this.gameId, this.skill, this.basis);
  bool get exempt => skill == null;
}

const kGameSkillRules = <GameSkillRule>[
  GameSkillRule('snakes_ladders', null, 'dice luck and turn taking: no answer is right or wrong'),
  GameSkillRule('jigsaw', 'spatial', 'one event per puzzle: fitted every piece without a wrong place'),
  GameSkillRule('maze', null, 'planning a path: bumping a wall is exploration, not a wrong answer'),
  GameSkillRule('treasure_hunt', 'spatial', 'one event per map: read the clue and found the place without a wrong tap'),
  GameSkillRule('connect_dots', 'counting', 'one event per picture: tapped the numbers in order without a wrong tap'),
  GameSkillRule('animal_habitats', 'nature', 'one event per animal: chose its home without a wrong try'),
  GameSkillRule('match_pictures', 'memory', 'one event per board: found all pairs with at most one wrong flip per pair'),
  GameSkillRule('letter_fishing', 'letters_ar', 'one event per round (letters_en when the game is in English)'),
  GameSkillRule('connect_four', null, 'two-player strategy: no answer is right or wrong'),
  GameSkillRule('numerals', 'counting', 'one event per round: chose the numeral that matches'),
  GameSkillRule('trace_letters', null, 'tracing is not checked (stroke order is not validated), so there is nothing to score'),
  GameSkillRule('word_book', null, 'exposure only: looking at a word is recorded as exposure, never as skill'),
];

GameSkillRule? ruleFor(String gameId) {
  for (final r in kGameSkillRules) {
    if (r.gameId == gameId) return r;
  }
  return null;
}

/// A pair-matching board counts as one memory event: fine when the child needed at most one wrong flip per pair.
bool memoryBoardOk({required int pairs, required int mismatches}) => mismatches <= pairs;

/// Counts wrong tries inside one round and records the round once, when it is solved.
/// It never records a round that was not finished, and a wrong try never ends a round.
class RoundTracker {
  final String childId;
  final String skill;
  int misses = 0;
  bool _recorded = false;
  RoundTracker(this.childId, this.skill);

  void miss() => misses++;

  /// Records the finished round (first try = no wrong tries) and starts the next one.
  void solved({String? detail}) {
    if (_recorded) return;
    _recorded = true;
    unawaited(ProgressStore.record(skill, misses == 0, detail: detail, childId: childId));
  }

  void next() {
    misses = 0;
    _recorded = false;
  }
}
