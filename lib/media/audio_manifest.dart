import 'dart:convert';

import 'package:flutter/services.dart';

import '../library/vocab.dart';
import '../literacy/letters_data.dart';

/// What the recording/voice of an item is allowed to be.
enum AudioSource { recorded, deviceVoice, none }

/// A native speaker's decision about a recording.
enum ReviewStatus { approved, pendingReview, rejected }

enum AudioKind { letterName, letterSound, word, syllable, number, phonics, sentence, instruction }

/// One spoken item of the learning content: what must be said, in which
/// language, and which approved recording (if any) says it. The educational
/// text is the authority; a recording is only used once it is approved.
class AudioAsset {
  final String id;
  final String lang; // 'ar' or 'en'
  final String locale; // 'ar' = Modern Standard Arabic, 'en-US'
  final AudioKind kind;
  final String text; // what the child should hear
  final String ref; // content reference, e.g. letter:ب, word:قمر
  final String? file; // bundled path, when a recording exists
  final AudioSource source;
  final String? voice; // speaker identifier, never a real name
  final String? license;
  final ReviewStatus review;
  final String? reviewedBy;
  final int? durationMs;
  final int version;
  final String note; // pronunciation convention for the speaker and reviewer

  /// May the phone's text-to-speech stand in while there is no recording?
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
    this.voice,
    this.license,
    this.review = ReviewStatus.pendingReview,
    this.reviewedBy,
    this.durationMs,
    this.version = 1,
    this.note = '',
    this.deviceVoiceAllowed = true,
  });

  /// Where the recording for this item is expected (file name for the speaker).
  String get suggestedFile {
    final folder = switch (kind) {
      AudioKind.letterName || AudioKind.letterSound || AudioKind.phonics => '$lang/letters',
      AudioKind.number => '$lang/numbers',
      _ => '$lang/words',
    };
    return 'assets/audio/$folder/$id.mp3';
  }

  bool get hasRecording => source == AudioSource.recorded && file != null;

  /// A recording that a native speaker approved: the only audio that may serve as
  /// the authoritative model of a pronunciation.
  bool get approved => hasRecording && review == ReviewStatus.approved;

  AudioAsset withOverride(Map<String, dynamic> j) => AudioAsset(
        id: id,
        lang: lang,
        locale: locale,
        kind: kind,
        text: text,
        ref: ref,
        file: j['file'] as String? ?? file,
        source: j['file'] != null ? AudioSource.recorded : source,
        voice: j['voice'] as String? ?? voice,
        license: j['license'] as String? ?? license,
        review: switch (j['review']) {
          'approved' => ReviewStatus.approved,
          'rejected' => ReviewStatus.rejected,
          _ => review,
        },
        reviewedBy: j['reviewedBy'] as String? ?? reviewedBy,
        durationMs: (j['durationMs'] as num?)?.toInt() ?? durationMs,
        version: (j['version'] as num?)?.toInt() ?? version,
        note: note,
        deviceVoiceAllowed: deviceVoiceAllowed,
      );
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
  int get recordedCount => _byId.values.where((a) => a.hasRecording).length;

  /// Items waiting for a recording, by kind.
  Map<AudioKind, int> get awaiting {
    final m = <AudioKind, int>{};
    for (final a in _byId.values.where((a) => !a.approved)) {
      m[a.kind] = (m[a.kind] ?? 0) + 1;
    }
    return m;
  }

  /// Problems that would make the manifest unsafe: duplicate ids, an approved item
  /// without a file, or a recording without a reviewer.
  List<String> validate() {
    final problems = <String>[];
    for (final a in _byId.values) {
      if (a.review == ReviewStatus.approved && !a.hasRecording) problems.add('${a.id}: approved without a file');
      if (a.review == ReviewStatus.approved && (a.reviewedBy ?? '').isEmpty) problems.add('${a.id}: approved without a reviewer');
      if (a.hasRecording && (a.license ?? '').isEmpty) problems.add('${a.id}: recording without license information');
      if (a.hasRecording && (a.voice ?? '').isEmpty) problems.add('${a.id}: recording without a speaker id');
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
  static Future<AudioManifest> load({AssetBundle? bundle}) async {
    try {
      final raw = await (bundle ?? rootBundle).loadString('assets/audio/manifest.json');
      return builtIn(overrides: jsonDecode(raw) as Map<String, dynamic>);
    } catch (_) {
      return builtIn();
    }
  }
}

/// Manifest ids for the letter lessons.
String letterAudioId(ArabicLetter l, String part) => 'ar.letter.${audioHex(l.letter)}.$part';
String wordAudioId(String word) => 'ar.word.${audioHex(word)}';
