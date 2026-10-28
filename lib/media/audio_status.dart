import 'audio_manifest.dart';

/// What a child would actually hear for one item right now. Derived from the
/// real asset data and the device-voice setting, never hard-coded.
enum HeardKind {
  /// An approved file of a human recording.
  recorded,

  /// An approved file made by a synthetic voice (never described as human).
  syntheticFile,

  /// The phone's own text-to-speech. Temporary, never approved.
  deviceVoice,

  /// Nothing can be played.
  none,
}

class AudioItemStatus {
  final AudioAsset asset;
  final HeardKind heard;

  /// A bundled audio file exists (human or synthetic).
  final bool fileExists;

  /// The file passed both reviews and has a confirmed license.
  final bool approved;

  /// A file exists but is not approved, so children do not hear it yet.
  final bool needsReview;

  /// Something can be played for the child. For the device voice this also
  /// depends on the phone having a voice for the language.
  final bool playable;
  final bool dependsOnDevice;
  const AudioItemStatus(this.asset, this.heard, this.fileExists, this.approved, this.needsReview, this.playable, this.dependsOnDevice);
}

/// The rules mirror AudioService: a file is played only when approved; otherwise
/// the device voice may stand in, unless this item is an isolated sound.
AudioItemStatus audioItemStatus(AudioAsset a, {required bool deviceVoiceEnabled}) {
  final approved = a.approved;
  final file = a.hasFile;
  if (approved) {
    return AudioItemStatus(a, a.source == AudioSource.recorded ? HeardKind.recorded : HeardKind.syntheticFile, true, true, false, true, false);
  }
  final needs = file;
  if (a.deviceVoiceAllowed && deviceVoiceEnabled) {
    return AudioItemStatus(a, HeardKind.deviceVoice, file, false, needs, true, true);
  }
  return AudioItemStatus(a, HeardKind.none, file, false, needs, false, false);
}

class AudioStatusSummary {
  final int total;
  final int recorded;
  final int syntheticFile;
  final int deviceVoice;
  final int none;
  final int filesExisting;
  final int needsReview;
  final int approved;
  const AudioStatusSummary(
      this.total, this.recorded, this.syntheticFile, this.deviceVoice, this.none, this.filesExisting, this.needsReview, this.approved);
}

AudioStatusSummary summarize(Iterable<AudioItemStatus> items) {
  var total = 0, rec = 0, syn = 0, dev = 0, none = 0, files = 0, review = 0, appr = 0;
  for (final s in items) {
    total++;
    switch (s.heard) {
      case HeardKind.recorded:
        rec++;
      case HeardKind.syntheticFile:
        syn++;
      case HeardKind.deviceVoice:
        dev++;
      case HeardKind.none:
        none++;
    }
    if (s.fileExists) files++;
    if (s.needsReview) review++;
    if (s.approved) appr++;
  }
  return AudioStatusSummary(total, rec, syn, dev, none, files, review, appr);
}

List<AudioItemStatus> statusesOf(AudioManifest m, {required bool deviceVoiceEnabled}) =>
    [for (final a in m.all) audioItemStatus(a, deviceVoiceEnabled: deviceVoiceEnabled)];

/// Status for a text that is spoken in [lang]: the manifest item for it when the content has one,
/// otherwise a text with no manifest entry, which only the device voice can read.
AudioItemStatus audioStatusForText(AudioManifest m, String lang, String text, {required bool deviceVoiceEnabled}) {
  final a = m.forText(lang, text) ??
      AudioAsset(id: 'adhoc.$lang.$text', lang: lang, locale: lang, kind: AudioKind.word, text: text, ref: 'text');
  return audioItemStatus(a, deviceVoiceEnabled: deviceVoiceEnabled);
}
