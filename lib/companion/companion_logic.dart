import '../media/audio_catalog.dart';
import '../progress_store.dart';

/// How a companion talks: the age band of the child, nudged by what the child has really shown.
enum AgeBand { toddler, preschool, early } // 1-2, 3-4, 5-6 (older children use the early band)

AgeBand ageBandFor(int age) => age <= 2 ? AgeBand.toddler : (age <= 4 ? AgeBand.preschool : AgeBand.early);

enum Ability { unknown, needsSupport, steady, confident }

/// Recent first-try results of [childId] (the last [window] rounds). Fewer than [minRounds] rounds is "unknown": the
/// companion never guesses from too little. Pure: the caller loads the events.
Ability abilityOf(List<SkillEvent> events, String childId, {int window = 30, int minRounds = 8}) {
  final mine = [for (final e in events) if (e.childId == childId) e];
  if (mine.length < minRounds) return Ability.unknown;
  final recent = mine.sublist(mine.length > window ? mine.length - window : 0);
  final rate = recent.where((e) => e.ok).length / recent.length;
  if (rate >= 0.85) return Ability.confident;
  if (rate < 0.5) return Ability.needsSupport;
  return Ability.steady;
}

/// The band a child is spoken to in: age decides first, a demonstrated ability moves it by at most one step.
AgeBand effectiveBand(int age, Ability a) {
  final base = ageBandFor(age).index;
  final shift = switch (a) { Ability.confident => 1, Ability.needsSupport => -1, _ => 0 };
  return AgeBand.values[(base + shift).clamp(0, AgeBand.values.length - 1)];
}

enum CompanionMoment { greet, activityDone, placeOpened, storyDone, sticker, tap, struggle, challenge, rest }

/// The catalogue line id for a moment. Only ids of lines that exist in [kDialogue] are ever returned.
/// [challenge] is offered only to 5-6 year olds with demonstrated confidence, and only when asked for.
String? companionLineId(CompanionMoment m, CharacterVoice who, int age, Ability ability) {
  if (who == CharacterVoice.companion) return null;
  final suffix = who.name;
  final band = effectiveBand(age, ability);
  String bandKey(AgeBand b) => switch (b) { AgeBand.toddler => 'young', AgeBand.preschool => 'mid', AgeBand.early => 'old' };
  final key = switch (m) {
    CompanionMoment.greet => 'hi_${bandKey(band)}',
    CompanionMoment.activityDone => 'done_${bandKey(band)}',
    CompanionMoment.placeOpened => 'place',
    CompanionMoment.storyDone => 'story',
    CompanionMoment.sticker => 'sticker',
    CompanionMoment.tap => age <= 3 ? 'tap_young' : 'tap_old',
    CompanionMoment.struggle => 'support',
    CompanionMoment.challenge => (ageBandFor(age) == AgeBand.early && ability == Ability.confident) ? 'challenge' : null,
    CompanionMoment.rest => 'rest',
  };
  if (key == null) return null;
  final id = 'cp_${key}_$suffix';
  return kDialogue.any((l) => l.id == id) ? id : null;
}
