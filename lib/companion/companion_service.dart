import '../media/rehlaty_audio_engine.dart';
import '../progress_store.dart';
import 'companion_logic.dart';
import 'companion_store.dart';

/// What the companion said, so the screen can also show it as a caption.
class CompanionReaction {
  final String lineId;
  final CharacterVoice who;
  final String ar;
  final String en;
  const CompanionReaction(this.lineId, this.who, this.ar, this.en);
  String text(String lang) => lang == 'ar' ? ar : en;
}

/// Turns a real app event into one approved catalogue line, spoken through the shared [RehlatyAudioEngine].
/// There is no free text: the only things that can be said are lines in [kDialogue].
class CompanionService {
  CompanionService._();

  /// The reaction for [moment], or null when the companion is off, the event was already celebrated, or no line fits.
  /// [eventId] makes a reward moment claimable once per child; moments without one (greeting, tap) can repeat, but
  /// the engine's repeat guard stops the same line sounding twice in a row. [speak] false only returns the caption.
  static Future<CompanionReaction?> react(
    String childId,
    CompanionMoment moment, {
    String? eventId,
    int? age,
    bool speak = true,
    bool force = false,
    RehlatyAudioEngine? engine,
  }) async {
    try {
      if (!await CompanionStore.enabled()) return null;
      if (eventId != null && !await CompanionStore.claim(childId, eventId)) return null;
      final a = age ?? await CompanionStore.age(childId) ?? 5;
      final events = await ProgressStore.load();
      final ability = abilityOf(events, childId);
      final who = await CompanionStore.who(childId);
      final id = companionLineId(moment, who, a, ability);
      if (id == null) return null;
      final line = kDialogue.firstWhere((l) => l.id == id);
      if (speak) {
        (engine ?? RehlatyAudioEngine.instance).say(id, force: force);
      }
      return CompanionReaction(id, who, line.ar, line.en);
    } catch (_) {
      return null; // storage trouble: the companion simply stays quiet
    }
  }
}
