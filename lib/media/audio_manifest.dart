import 'dart:convert';

import 'package:flutter/services.dart';

import '../library/vocab.dart';
import '../literacy/letters_data.dart';

/// Where the audio of an item comes from.
/// recorded = a human voice; generated = a cloud text-to-speech file made offline by
/// tools/audio_gen (never in the app); deviceVoice = the phone's voice (temporary demo).
enum AudioSource { recorded, generated, deviceVoice, none }

/// One reviewer's decision.
enum Verdict { pending, approved, rejected }

/// The life of an item. Only `approved` audio may be used as the model of a pronunciation.
enum AssetStatus {
  missing, // no file
  discovered, // a candidate source was found, nothing downloaded or generated
  generated, // a file exists, nobody reviewed it yet
  awaitingAudioReview, // the language review is done, the sound quality is not
  awaitingLanguageReview, // the sound quality is fine, a language expert has not decided
  approved,
  rejected,
  needsRecheck, // approved before, but its source/voice/text changed or its license needs checking
}

enum AudioKind { letterName, letterSound, word, syllable, number, phonics, sentence, instruction }

/// One spoken item of the learning content: what must be said, in which
/// language, and which approved audio (if any) says it. The educational
/// text is the authority; an audio file is only used as a pronunciation model
/// once BOTH the audio quality and the language have been approved by people.
class AudioAsset {
  final String id;
  final String lang; // 'ar' or 'en'
  final String locale; // 'ar' = Modern Standard Arabic, 'en-US'
  final AudioKind kind;
  final String text; // what the child should hear
  final String ref; // content reference, e.g. letter:ب, word:قمر
  final String? file; // bundled path, when a file exists
  final AudioSource source;
  final String? provider; // e.g. google-cloud-tts, or a recording studio
  final String? voice; // voice id or speaker identifier, never a real name
  final String? license; // what allows the app to ship this file
  final Verdict audioReview; // clear, natural, no clipping, volume
  final Verdict languageReview; // correct pronunciation, a qualified Arabic/English reviewer
  final String? audioReviewer;
  final String? languageReviewer;
  final String? approvedAt; // ISO date
  final int? durationMs;
  final int version;
  final bool discovered;
  final bool recheck;
  final String note; // pronunciation convention for the speaker and reviewer

  /// May the phone's text-to-speech stand in while there is no approved file?
  /// False for isolated sounds: a synthetic voice cannot say them correctly.
  final bool deviceVoiceAllowed;

  const AudioAsset({
    required this.id,
    required this.lang,
    required this.locale,
    required this.kind,
    required this.text,
    required this.ref,
    this.file,
    this.source = AudioSource.none,
    this.provider,
    this.voice,
    this.license,
    this.audioReview = Verdict.pending,
    this.languageReview = Verdict.pending,
    this.audioReviewer,
    this.languageReviewer,
    this.approvedAt,
    this.durationMs,
    this.version = 1,
    this.discovered = false,
    this.recheck = false,
    this.note = '',
    this.deviceVoiceAllowed = true,
  });

  /// Where the file for this item is expected (file name for a speaker or the generator).
  String get suggestedFile {
    final folder = switch (kind) {
      AudioKind.letterName || AudioKind.letterSound || AudioKind.phonics => '$lang/letters',
      AudioKind.number => '$lang/numbers',
      _ => '$lang/words',
    };
    return 'assets/audio/$folder/$id.mp3';
  }

  /// A synthetic voice cannot be the model of an isolated sound, however good it sounds.
  bool get syntheticNotAllowed =>
      source == AudioSource.generated && (kind == AudioKind.letterSound || kind == AudioKind.phonics);

  bool get hasFile => file != null && (source == AudioSource.recorded || source == AudioSource.generated);

  /// Kept for older code: a file of a human or generated voice exists.
  bool get hasRecording => hasFile;

  /// The license that lets the app ship this file has been confirmed (not empty, not marked 'unconfirmed').
  bool get licenseConfirmed => (license ?? '').isNotEmpty && !(license!).startsWith('unconfirmed');

  /// All the evidence an approval needs: a file, a license, two different decisions made by named people.
  bool get approved =>
      hasFile &&
      !recheck &&
      !syntheticNotAllowed &&
      audioReview == Verdict.approved &&
      languageReview == Verdict.approved &&
      licenseConfirmed &&
      (audioReviewer ?? '').isNotEmpty &&
      (languageReviewer ?? '').isNotEmpty;

  AssetStatus get status {
    if (recheck && hasFile) return AssetStatus.needsRecheck;
    if (!hasFile) return discovered ? AssetStatus.discovered : AssetStatus.missing;
    if (audioReview == Verdict.rejected || languageReview == Verdict.rejected || syntheticNotAllowed) {
      return AssetStatus.rejected;
    }
    if (approved) return AssetStatus.approved;
    if (audioReview == Verdict.approved) return AssetStatus.awaitingLanguageReview;
    if (languageReview == Verdict.approved) return AssetStatus.awaitingAudioReview;
    return AssetStatus.generated;
  }

  AudioAsset withOverride(Map<String, dynamic> j) {
    Verdict v(dynamic x, Verdict old) => switch (x) {
          'approved' => Verdict.approved,
          'rejected' => Verdict.rejected,
          'pending' => Verdict.pending,
          _ => old,
        };
    final file0 = j['file'] as String? ?? file;
    return AudioAsset(
      id: id,
      lang: lang,
      locale: locale,
      kind: kind,
      text: text,
      ref: ref,
      file: file0,
      source: switch (j['source']) {
        'recorded' => AudioSource.recorded,
        'generated' => AudioSource.generated,
        _ => j['file'] != null && source == AudioSource.none ? AudioSource.recorded : source,
      },
      provider: j['provider'] as String? ?? provider,
      voice: j['voice'] as String? ?? voice,
      license: j['license'] as String? ?? license,
      audioReview: v(j['audioReview'], audioReview),
      languageReview: v(j['languageReview'], languageReview),
      audioReviewer: j['audioReviewer'] as String? ?? audioReviewer,
      languageReviewer: j['languageReviewer'] as String? ?? languageReviewer,
      approvedAt: j['approvedAt'] as String? ?? approvedAt,
      durationMs: (j['durationMs'] as num?)?.toInt() ?? durationMs,
      version: (j['version'] as num?)?.toInt() ?? version,
      discovered: j['discovered'] as bool? ?? discovered,
      recheck: j['recheck'] as bool? ?? recheck,
      note: note,
      deviceVoiceAllowed: deviceVoiceAllowed,
    );
  }
}

/// Stable id part for a text: its code points in hex.
String audioHex(String s) => [for (final r in s.runes) r.toRadixString(16).padLeft(4, '0')].join('_');

const _arabicSoundNote =
    'Isolated sound: the consonant with a short fatha (e.g. بَ = /ba/), said once, short, with NO extra long vowel '
    'and NO added syllable (not بَا, not بَهْ). Same loudness as the other letter sounds.';

const _arabicNameNote = 'The letter NAME as in the alphabet song (باء, not the sound). Modern Standard Arabic.';

const _arabicWordNote = 'Clear Modern Standard Arabic, natural pace, no dialect. Do not stress the target letter artificially.';

const _numberWords = ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];

/// English phonics: the sound a letter makes in a word (pure, without "uh").
const _phonics = {
  'A': '/æ/ as in apple', 'B': '/b/ as in ball', 'C': '/k/ as in cat', 'D': '/d/ as in dog', 'E': '/ɛ/ as in egg',
  'F': '/f/ as in fish', 'G': '/g/ as in goat', 'H': '/h/ as in hat', 'I': '/ɪ/ as in igloo', 'J': '/dʒ/ as in jam',
  'K': '/k/ as in kite', 'L': '/l/ as in lion', 'M': '/m/ as in moon', 'N': '/n/ as in nose', 'O': '/ɒ/ as in octopus',
  'P': '/p/ as in pig', 'Q': '/kw/ as in queen', 'R': '/r/ as in rain', 'S': '/s/ as in sun', 'T': '/t/ as in tap',
  'U': '/ʌ/ as in umbrella', 'V': '/v/ as in van', 'W': '/w/ as in web', 'X': '/ks/ as in box', 'Y': '/j/ as in yes',
  'Z': '/z/ as in zoo',
};

/// Every audio item the learning content needs, with the state of its recording.
/// The list is built from the content itself (letters, words, numbers, phonics),
/// then overridden by `assets/audio/manifest.json` where real files exist.
class AudioManifest {
  final Map<String, AudioAsset> _byId;
  final Map<String, AudioAsset> _byText;
  AudioManifest._(this._byId, this._byText);

  List<AudioAsset> get all => _byId.values.toList();
  AudioAsset? byId(String id) => _byId[id];

  /// The asset for a text spoken in [lang], when the content has one (so legacy
  /// "say this text" calls pick up a recording as soon as it exists).
  AudioAsset? forText(String lang, String text) => _byText['$lang|$text'];

  int get total => _byId.length;
  int get approvedCount => _byId.values.where((a) => a.approved).length;
  int get recordedCount => _byId.values.where((a) => a.hasFile).length;

  /// How many items are in each stage of the review.
  Map<AssetStatus, int> get byStatus {
    final m = <AssetStatus, int>{};
    for (final a in _byId.values) {
      m[a.status] = (m[a.status] ?? 0) + 1;
    }
    return m;
  }

  /// Items waiting for a recording, by kind.
  Map<AudioKind, int> get awaiting {
    final m = <AudioKind, int>{};
    for (final a in _byId.values.where((a) => !a.approved)) {
      m[a.kind] = (m[a.kind] ?? 0) + 1;
    }
    return m;
  }

  /// Problems that make the manifest unsafe: a review decision without a named reviewer, a file without a
  /// license or voice, a synthetic voice approved as an isolated sound, an unknown audio source.
  List<String> validate() {
    final problems = <String>[];
    for (final a in _byId.values) {
      if (a.audioReview == Verdict.approved && (a.audioReviewer ?? '').isEmpty) problems.add('${a.id}: audio approved without a reviewer');
      if (a.languageReview == Verdict.approved && (a.languageReviewer ?? '').isEmpty) problems.add('${a.id}: language approved without a reviewer');
      if ((a.audioReview == Verdict.approved || a.languageReview == Verdict.approved) && !a.hasFile) problems.add('${a.id}: reviewed without a file');
      if (a.hasFile && (a.license ?? '').isEmpty) problems.add('${a.id}: file without license information');
      if (a.hasFile && (a.voice ?? '').isEmpty) problems.add('${a.id}: file without a voice or speaker id');
      if (a.syntheticNotAllowed && a.audioReview == Verdict.approved) problems.add('${a.id}: a synthetic voice cannot model an isolated sound');
    }
    return problems;
  }

  static AudioManifest builtIn({Map<String, dynamic> overrides = const {}}) {
    final list = <AudioAsset>[];
    void add(AudioAsset a) => list.add(a);

    for (final l in kArabicLetters) {
      final h = audioHex(l.letter);
      add(AudioAsset(
        id: 'ar.letter.$h.name',
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.letterName,
        text: l.name,
        ref: 'letter:${l.letter}',
        note: _arabicNameNote,
      ));
      add(AudioAsset(
        id: 'ar.letter.$h.sound_u',
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.letterSound,
        text: l.soundDamma,
        ref: 'letter:${l.letter}',
        note: _arabicSoundNote.replaceAll('fatha', 'damma').replaceAll('بَ = /ba/', 'بُ = /bu/').replaceAll('بَا', 'بُو').replaceAll('بَهْ', 'بُهْ'),
        deviceVoiceAllowed: false,
      ));
      add(AudioAsset(
        id: 'ar.letter.$h.sound_i',
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.letterSound,
        text: l.soundKasra,
        ref: 'letter:${l.letter}',
        note: _arabicSoundNote.replaceAll('fatha', 'kasra').replaceAll('بَ = /ba/', 'بِ = /bi/').replaceAll('بَا', 'بِي').replaceAll('بَهْ', 'بِهْ'),
        deviceVoiceAllowed: false,
      ));
      add(AudioAsset(
        id: 'ar.letter.$h.sound',
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.letterSound,
        text: l.soundFatha,
        ref: 'letter:${l.letter}',
        note: _arabicSoundNote,
        deviceVoiceAllowed: false,
      ));
      for (final w in l.words) {
        final id = 'ar.word.${audioHex(w.word)}';
        if (list.any((a) => a.id == id)) continue;
        add(AudioAsset(
          id: id,
          lang: 'ar',
          locale: 'ar',
          kind: AudioKind.word,
          text: w.word,
          ref: 'word:${w.word}',
          note: _arabicWordNote,
        ));
      }
    }
    for (final w in kSyllableWords) {
      final id = 'ar.word.${audioHex(w.word)}';
      if (list.any((a) => a.id == id)) continue;
      add(AudioAsset(
        id: id,
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.word,
        text: w.word,
        ref: 'word:${w.word}',
        note: 'Fully vowelled word: read every short vowel and the sukoon exactly as written. $_arabicWordNote',
      ));
    }
    for (var n = 0; n < _numberWords.length; n++) {
      add(AudioAsset(
        id: 'ar.number.$n',
        lang: 'ar',
        locale: 'ar',
        kind: AudioKind.number,
        text: _numberWords[n],
        ref: 'number:$n',
        note: 'The number $n in Modern Standard Arabic.',
      ));
    }
    for (final c in _phonics.keys) {
      add(AudioAsset(
        id: 'en.letter.$c.name',
        lang: 'en',
        locale: 'en-US',
        kind: AudioKind.letterName,
        text: c,
        ref: 'letter:$c',
        note: 'The letter NAME ($c), as in the alphabet song.',
      ));
      add(AudioAsset(
        id: 'en.letter.$c.sound',
        lang: 'en',
        locale: 'en-US',
        kind: AudioKind.phonics,
        text: c.toLowerCase(),
        ref: 'phonics:$c',
        note: 'Phonics sound ${_phonics[c]}. Pure sound, no added "uh".',
        deviceVoiceAllowed: false,
      ));
    }
    for (final v in kVocab) {
      if (v.en == null) continue;
      final id = 'en.word.${v.id}';
      if (list.any((a) => a.id == id)) continue;
      add(AudioAsset(
        id: id,
        lang: 'en',
        locale: 'en-US',
        kind: AudioKind.word,
        text: v.en!,
        ref: 'vocab:${v.id}',
        note: 'Clear American or neutral English, natural pace.',
      ));
    }

    final over = (overrides['assets'] as Map?)?.cast<String, dynamic>() ?? const {};
    final byId = <String, AudioAsset>{};
    for (final a in list) {
      final o = over[a.id];
      byId[a.id] = o is Map ? a.withOverride(o.cast<String, dynamic>()) : a;
    }
    final byText = <String, AudioAsset>{};
    for (final a in byId.values) {
      // The first asset wins for a text (a letter name before the same word).
      byText.putIfAbsent('${a.lang}|${a.text}', () => a);
    }
    return AudioManifest._(byId, byText);
  }

  /// The built-in list with the overrides from assets/audio/manifest.json.
  static Future<AudioManifest> load({AssetBundle? bundle, Map<String, Map<String, dynamic>> reviews = const {}}) async {
    Map<String, dynamic> base = {};
    try {
      final raw = await (bundle ?? rootBundle).loadString('assets/audio/manifest.json');
      base = jsonDecode(raw) as Map<String, dynamic>;
    } catch (_) {}
    // Review decisions made on this device (the review tool) are laid over the bundled ones.
    final assets = <String, dynamic>{...((base['assets'] as Map?)?.cast<String, dynamic>() ?? {})};
    reviews.forEach((id, r) {
      assets[id] = {...((assets[id] as Map?)?.cast<String, dynamic>() ?? {}), ...r};
    });
    return builtIn(overrides: {...base, 'assets': assets});
  }
}

/// Manifest ids for the letter lessons.
String letterAudioId(ArabicLetter l, String part) => 'ar.letter.${audioHex(l.letter)}.$part';
String wordAudioId(String word) => 'ar.word.${audioHex(word)}';
