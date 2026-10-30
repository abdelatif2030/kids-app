/// One voice the phone's speech engine offers.
class VoiceInfo {
  final String name;
  final String locale;

  /// True when the engine needs a connection to speak with this voice (then it will not work offline).
  final bool needsNetwork;

  /// The engine's own quality label when it gives one ("enhanced", "premium", "normal"...); empty when it does not.
  final String quality;
  const VoiceInfo(this.name, this.locale, {this.needsNetwork = false, this.quality = ''});

  factory VoiceInfo.fromMap(Map<dynamic, dynamic> m) => VoiceInfo(
        '${m['name'] ?? ''}',
        '${m['locale'] ?? ''}'.replaceAll('_', '-'),
        needsNetwork: '${m['network_required'] ?? m['networkRequired'] ?? '0'}' == '1' || m['network_required'] == true,
        quality: '${m['quality'] ?? ''}'.toLowerCase(),
      );

  Map<String, String> toEngineMap() => {'name': name, 'locale': locale};

  @override
  bool operator ==(Object other) => other is VoiceInfo && other.name == name && other.locale == locale;

  @override
  int get hashCode => Object.hash(name, locale);
}

/// How good a voice is likely to be for a child learning [lang], from what the engine tells us (never from a guess about
/// who the speaker is). Higher is better. This is a heuristic, not a listening test: a person must still listen
/// (the parent can pick another voice in Sound settings).
int scoreVoice(VoiceInfo v, String lang) {
  final loc = v.locale.toLowerCase();
  final n = v.name.toLowerCase();
  if (!loc.startsWith(lang.toLowerCase())) return -1000;
  var s = 0;
  if (lang == 'ar') {
    if (loc == 'ar-sa' || loc == 'ar-xa') s += 3; // Modern Standard Arabic is the language of the lessons
    if (loc == 'ar-eg') s += 1;
  } else if (lang == 'en') {
    if (loc == 'en-us' || loc == 'en-gb') s += 2;
  }
  if (v.quality == 'premium') s += 5;
  if (v.quality == 'enhanced') s += 4;
  for (final word in const ['neural', 'wavenet', 'studio', 'premium', 'enhanced', 'high']) {
    if (n.contains(word)) {
      s += 4;
      break;
    }
  }
  if (n.contains('compact') || n.contains('lite') || n.contains('low')) s -= 2;
  // A voice that works with no connection is dependable in a classroom, a car or a plane.
  s += v.needsNetwork ? -3 : 2;
  return s;
}

/// The voices for [lang], best first. Ties keep the engine's order, so the result is stable.
List<VoiceInfo> rankVoices(Iterable<VoiceInfo> all, String lang) {
  final scored = [
    for (final (i, v) in all.indexed)
      if (v.name.isNotEmpty && v.locale.toLowerCase().startsWith(lang.toLowerCase())) (v, scoreVoice(v, lang), i),
  ]..sort((a, b) {
      final c = b.$2.compareTo(a.$2);
      return c != 0 ? c : a.$3.compareTo(b.$3);
    });
  return [for (final e in scored) e.$1];
}

/// The voice to use: the parent's choice when the phone still has it, otherwise the best-ranked one.
VoiceInfo? chooseVoice(Iterable<VoiceInfo> all, String lang, {String? preferredName}) {
  final ranked = rankVoices(all, lang);
  if (ranked.isEmpty) return null;
  if (preferredName != null && preferredName.isNotEmpty) {
    for (final v in ranked) {
      if (v.name == preferredName) return v;
    }
  }
  return ranked.first;
}

/// Speech that is easy for a young child to follow: a little slower than adult speed, a touch warmer in pitch.
/// [rate] is the parent's speed setting (1.0 = normal for children).
const double kChildSpeechRate = 0.42; // flutter_tts: 0.5 is adult conversational speed
const double kChildSpeechPitch = 1.05;
