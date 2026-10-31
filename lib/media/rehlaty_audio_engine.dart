import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:shared_preferences/shared_preferences.dart';

import '../games/adventure_logic.dart' show GameCue;
import '../l10n/app_locale.dart';
import 'audio.dart';
import 'audio_catalog.dart';
import 'audio_gate.dart';

export 'audio_catalog.dart';

/// How each character sounds on the phone's own voice: a small, fixed pitch and pace difference on top of the voice the
/// parent picked for that character. Adam a little lower and brisk, Nour a little higher and gentler. These are
/// starting values chosen by reasoning, NOT by listening tests; a person must listen on a real phone.
class CharacterTuning {
  final double pitchScale;
  final double rateScale;
  const CharacterTuning(this.pitchScale, this.rateScale);
  static const adam = CharacterTuning(0.92, 1.05);
  static const nour = CharacterTuning(1.12, 0.97);
  static const companion = CharacterTuning(1.0, 1.0);
  static CharacterTuning of(CharacterVoice c) => switch (c) {
        CharacterVoice.adam => adam,
        CharacterVoice.nour => nour,
        CharacterVoice.companion => companion,
      };
}

/// The parent's choices for the engine, kept on the device (`engine_prefs`).
class EnginePrefs extends ChangeNotifier {
  EnginePrefs._();
  static final EnginePrefs instance = EnginePrefs._();

  /// Master switch: off = no character voice, no effect, no music from the engine.
  bool masterOn = true;

  /// May the characters speak at all? Off: the text is on screen and nothing is said.
  bool charactersOn = true;
  bool adamOn = true;
  bool nourOn = true;

  /// Speak the instruction of every game by itself when it opens. Off by default: a child taps the speaker button.
  bool autoNarration = false;

  /// 'auto' = the interface language, or 'ar' / 'en' = the characters always speak that language.
  String languagePref = 'auto';

  /// Independent volumes, 0..1.
  double narrationVolume = 1.0;
  double musicVolume = 0.6;
  double effectsVolume = 0.8;

  /// The installed voice each character uses for each language, e.g. `adam.ar` -> name. Null = automatic.
  final Map<String, String> voiceNames = {};

  String? voiceFor(CharacterVoice c, String lang) => voiceNames['${c.name}.$lang'];

  bool characterOn(CharacterVoice c) => masterOn && charactersOn && switch (c) {
        CharacterVoice.adam => adamOn,
        CharacterVoice.nour => nourOn,
        CharacterVoice.companion => true,
      };

  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    try {
      final m = jsonDecode(p.getString('engine_prefs') ?? '{}') as Map<String, dynamic>;
      masterOn = m['m'] as bool? ?? true;
      charactersOn = m['c'] as bool? ?? true;
      adamOn = m['ad'] as bool? ?? true;
      nourOn = m['no'] as bool? ?? true;
      autoNarration = m['a'] as bool? ?? false;
      final lp = m['l'] as String? ?? 'auto';
      languagePref = const ['auto', 'ar', 'en'].contains(lp) ? lp : 'auto';
      narrationVolume = ((m['v'] as num?)?.toDouble() ?? 1.0).clamp(0.0, 1.0);
      musicVolume = ((m['mv'] as num?)?.toDouble() ?? 0.6).clamp(0.0, 1.0);
      effectsVolume = ((m['ev'] as num?)?.toDouble() ?? 0.8).clamp(0.0, 1.0);
      voiceNames
        ..clear()
        ..addAll({for (final e in ((m['n'] as Map?) ?? const {}).entries) '${e.key}': '${e.value}'});
    } catch (_) {
      // damaged: keep the defaults
    }
    notifyListeners();
  }

  Future<void> _save() async {
    notifyListeners();
    try {
      await (await SharedPreferences.getInstance()).setString(
        'engine_prefs',
        jsonEncode({'m': masterOn, 'c': charactersOn, 'ad': adamOn, 'no': nourOn, 'a': autoNarration, 'l': languagePref, 'v': narrationVolume, 'mv': musicVolume, 'ev': effectsVolume, 'n': voiceNames}),
      );
    } catch (_) {}
  }

  Future<void> setMasterOn(bool v) {
    masterOn = v;
    return _save();
  }

  Future<void> setCharactersOn(bool v) {
    charactersOn = v;
    return _save();
  }

  Future<void> setCharacter(CharacterVoice c, bool v) {
    if (c == CharacterVoice.adam) adamOn = v;
    if (c == CharacterVoice.nour) nourOn = v;
    return _save();
  }

  Future<void> setAutoNarration(bool v) {
    autoNarration = v;
    return _save();
  }

  Future<void> setLanguagePref(String v) {
    languagePref = const ['auto', 'ar', 'en'].contains(v) ? v : 'auto';
    return _save();
  }

  Future<void> setNarrationVolume(double v) {
    narrationVolume = v.clamp(0.0, 1.0);
    return _save();
  }

  Future<void> setMusicVolume(double v) {
    musicVolume = v.clamp(0.0, 1.0);
    return _save();
  }

  Future<void> setEffectsVolume(double v) {
    effectsVolume = v.clamp(0.0, 1.0);
    return _save();
  }

  Future<void> setVoice(CharacterVoice c, String lang, String? name) {
    final k = '${c.name}.$lang';
    if (name == null || name.isEmpty) {
      voiceNames.remove(k);
    } else {
      voiceNames[k] = name;
    }
    return _save();
  }

  @visibleForTesting
  void resetForTest() {
    masterOn = true;
    charactersOn = true;
    adamOn = true;
    nourOn = true;
    autoNarration = false;
    languagePref = 'auto';
    narrationVolume = 1.0;
    musicVolume = 0.6;
    effectsVolume = 0.8;
    voiceNames.clear();
  }
}

/// Why a line was not heard, so a screen can honestly say so (the text is always on screen as well).
enum EngineProblem { none, charactersOff, silenced, noVoice, failed, duplicate }

/// Who goes first when several lines wait. A higher one interrupts a lower one that is speaking.
enum AudioPriority { low, normal, high }

class _Job {
  final CharacterVoice voice;
  final String text;
  final String lang;
  final String? lineId;
  final AudioPriority priority;
  final Completer<EngineProblem> done = Completer();

  /// Set when the line was interrupted or stopped before (or while) it was spoken; a cancelled line never starts.
  bool cancelled = false;
  _Job(this.voice, this.text, this.lang, this.lineId, this.priority);
}

/// Which lines have an APPROVED human recording. Read from `assets/audio/voices/approved.json` (a list of
/// "character/lang/id"); the file does not exist yet, so nothing is approved and every line uses the device voice.
class ApprovedRecordings {
  final Set<String> keys;
  const ApprovedRecordings(this.keys);
  static const none = ApprovedRecordings({});
  bool has(CharacterVoice c, String lang, String id) => keys.contains('${c.name}/$lang/$id');

  static Future<ApprovedRecordings> load({AssetBundleLike? bundle}) async {
    try {
      final raw = await (bundle?.loadString('assets/audio/voices/approved.json') ?? rootBundle.loadString('assets/audio/voices/approved.json'));
      return ApprovedRecordings({for (final e in jsonDecode(raw) as List<dynamic>) '$e'});
    } catch (_) {
      return none;
    }
  }
}

/// The one thing the loader needs from an asset bundle (so tests need no real bundle).
abstract interface class AssetBundleLike {
  Future<String> loadString(String key);
}

/// The shared audio engine for everything the characters say and for short sound cues and music coordination.
///
/// - One line at a time: Adam never starts while Nour is still speaking. Lines wait in order; a HIGHER priority line
///   interrupts a lower one; [interrupt] drops the queue and stops the current line.
/// - The same line id is not repeated within [repeatGap] (unless forced), so the child is not nagged.
/// - Background music is "ducked" (turned down) while a character speaks: [musicFactor] is what the music player
///   should multiply its volume by; the music comes back up when the dialogue ends.
/// - It obeys the master switch, the characters switches, the call/background gate ([AudioGate]) and silences the
///   lesson audio service before it speaks. It never resumes by itself after being silenced.
/// - A line is played from an approved recording when one exists; otherwise the phone's text-to-speech reads it (a
///   demo voice, labelled as such in the parent screens). Nothing is ever recorded from the child.
/// - Sound cues (a dice roll, a ladder...) play only when a bundled file exists for them; none are shipped yet, so
///   [playCue] returns false and nothing is claimed to play.
class RehlatyAudioEngine extends ChangeNotifier {
  RehlatyAudioEngine._({SpeechBackend Function()? speech, Future<void> Function()? stopLessons, Future<void> Function(String path, double volume)? playRecording, DateTime Function()? clock})
      : _speech = speech ?? (() => AppAudio.speech),
        _stopLessons = stopLessons ?? (() => AppAudio.service.stop()),
        _playRecording = playRecording ?? _defaultPlay,
        _clock = clock ?? DateTime.now {
    AudioGate.instance.addListener(_onGate);
  }

  static final RehlatyAudioEngine instance = RehlatyAudioEngine._();

  /// A separate engine for tests, with its own speech backend, recordings and clock.
  @visibleForTesting
  factory RehlatyAudioEngine.forTest(SpeechBackend speech, {Future<void> Function(String path, double volume)? playRecording, DateTime Function()? clock}) =>
      RehlatyAudioEngine._(speech: () => speech, stopLessons: () async {}, playRecording: playRecording ?? (_, _) async {}, clock: clock);

  static Future<void> _defaultPlay(String path, double volume) async {
    final p = AppAudio.newPlayer();
    try {
      await p.load(AssetAudio(path));
      await p.setVolume(volume);
      final done = p.completed.first;
      await p.play();
      await done;
    } finally {
      await p.dispose();
    }
  }

  final SpeechBackend Function() _speech;
  final Future<void> Function() _stopLessons;
  final Future<void> Function(String path, double volume) _playRecording;
  final DateTime Function() _clock;
  final List<_Job> _queue = [];
  _Job? _current;
  _Job? _paused;
  bool _running = false;
  bool _hold = false; // paused: nothing new starts until resume()
  final Map<String, DateTime> _lastSpoken = {};

  /// Approved human recordings (empty today).
  ApprovedRecordings recordings = ApprovedRecordings.none;

  /// The same line is not spoken again within this time unless forced.
  Duration repeatGap = const Duration(seconds: 30);

  CharacterVoice? get speaking => _current?.voice;
  String? get speakingLineId => _current?.lineId;
  bool get isSpeaking => _current != null;
  bool get isPaused => _paused != null;
  EngineProblem lastProblem = EngineProblem.none;

  /// What the last spoken line used: true = an approved recording, false = the device voice.
  bool? lastUsedRecording;

  /// Cue names that have a bundled sound file. Empty today: no sound effects are shipped.
  final Set<String> cuesWithFiles = {};

  /// The music player multiplies its own volume by this: 1 normally, lower while someone is speaking, 0 when the master
  /// switch is off. (Music volume itself is `EnginePrefs.musicVolume`.)
  double get musicFactor => !EnginePrefs.instance.masterOn ? 0 : (isSpeaking ? 0.25 : 1.0);

  /// Where background music should sit right now (the parent's music volume times [musicFactor]).
  double get effectiveMusicVolume => EnginePrefs.instance.musicVolume * musicFactor;

  /// Connects the games' sound hook to this engine.
  void attachGameCues() => GameCue.onCue = (cue) => playCue(cue);

  bool playCue(String cue) {
    if (!EnginePrefs.instance.masterOn || !AudioPrefs.instance.effectsOn || AudioGate.instance.silenced || !cuesWithFiles.contains(cue)) return false;
    // A file player for effects would start here (volume = EnginePrefs.effectsVolume) once sound files exist.
    return false;
  }

  String get _interfaceLang => AppLocale.instance.code;

  /// The language the characters speak: the parent's choice, or the interface language.
  String get lang => switch (EnginePrefs.instance.languagePref) {
        'ar' => 'ar',
        'en' => 'en',
        _ => _interfaceLang,
      };

  /// Speaks an approved catalogue line. Returns why it was not heard (or none).
  Future<EngineProblem> say(String lineId, {bool interrupt = false, AudioPriority priority = AudioPriority.normal, bool force = false}) {
    final line = kDialogue.firstWhere((l) => l.id == lineId, orElse: () => throw ArgumentError('unknown line $lineId'));
    final l = lang;
    final last = _lastSpoken['$lineId/$l'];
    final repeat = !force && last != null && _clock().difference(last) < repeatGap;
    final pending = _queue.any((j) => j.lineId == lineId) || _current?.lineId == lineId;
    final job = _Job(line.voice, line.text(l), l, line.id, priority);
    if (repeat || pending) return _finish(job, EngineProblem.duplicate);
    return _enqueue(job, interrupt);
  }

  /// Reads an on-screen instruction in [voice] (for example a game's instruction in Adam's voice). Child-initiated, so
  /// it is never dropped as a repeat.
  Future<EngineProblem> sayText(CharacterVoice voice, String text, {bool interrupt = true, AudioPriority priority = AudioPriority.high}) => _enqueue(_Job(voice, text, lang, null, priority), interrupt);

  Future<EngineProblem> _enqueue(_Job job, bool interrupt) {
    final prefs = EnginePrefs.instance;
    if (!prefs.characterOn(job.voice)) return _finish(job, EngineProblem.charactersOff);
    if (AudioGate.instance.silenced) return _finish(job, EngineProblem.silenced);
    if (interrupt) _dropAll();
    // keep the queue ordered: higher priority first, first come first served inside a priority
    final at = _queue.indexWhere((j) => j.priority.index < job.priority.index);
    if (at < 0) {
      _queue.add(job);
    } else {
      _queue.insert(at, job);
    }
    // a higher priority line interrupts a lower one that is speaking
    final cur = _current;
    if (cur != null && job.priority.index > cur.priority.index) {
      cur.cancelled = true;
      _speech().stop();
    }
    _pump();
    return job.done.future;
  }

  Future<EngineProblem> _finish(_Job job, EngineProblem p) {
    lastProblem = p;
    if (!job.done.isCompleted) job.done.complete(p);
    return job.done.future;
  }

  Future<void> _pump() async {
    if (_running) return;
    _running = true;
    while (_queue.isNotEmpty && !_hold) {
      final job = _queue.removeAt(0);
      _current = job;
      notifyListeners(); // music ducks
      var problem = EngineProblem.none;
      try {
        await _speak(job);
      } catch (_) {
        problem = EngineProblem.failed;
      }
      if (problem == EngineProblem.none && lastProblem == EngineProblem.noVoice && lastUsedRecording == null) problem = EngineProblem.noVoice;
      if (job.lineId != null && problem == EngineProblem.none) _lastSpoken['${job.lineId}/${job.lang}'] = _clock();
      lastProblem = problem;
      if (!job.done.isCompleted) job.done.complete(problem);
      _current = null;
    }
    _running = false;
    notifyListeners(); // music comes back
  }

  Future<void> _speak(_Job job) async {
    final prefs = EnginePrefs.instance;
    final id = job.lineId;
    await _stopLessons();
    if (job.cancelled) return;
    // 1. an approved human recording, if there is one for this exact line and language
    if (id != null && recordings.has(job.voice, job.lang, id)) {
      final line = kDialogue.firstWhere((l) => l.id == id);
      lastUsedRecording = true;
      lastProblem = EngineProblem.none;
      await _playRecording(line.recordingPath(job.lang), prefs.narrationVolume);
      return;
    }
    // 2. the phone's own voice (a demo voice)
    lastUsedRecording = false;
    final sp = _speech();
    if (!await sp.isAvailable(job.lang)) {
      lastUsedRecording = null;
      lastProblem = EngineProblem.noVoice;
      return;
    }
    lastProblem = EngineProblem.none;
    if (job.cancelled) return;
    await sp.preferVoice(job.lang, prefs.voiceFor(job.voice, job.lang));
    if (sp is VoiceTunable) {
      final t = CharacterTuning.of(job.voice);
      (sp as VoiceTunable).tune(pitchScale: t.pitchScale, rateScale: t.rateScale, volume: prefs.narrationVolume);
    }
    if (job.cancelled) return;
    await sp.speak(job.text, lang: job.lang, rate: AudioPrefs.instance.speechRate);
  }

  void _dropAll() {
    for (final j in _queue) {
      if (!j.done.isCompleted) j.done.complete(EngineProblem.silenced);
    }
    _queue.clear();
    _paused = null;
    _hold = false;
    _current?.cancelled = true;
    _speech().stop();
  }

  /// Pauses: stops what is being said and remembers it. A phone voice cannot continue mid-sentence, so [resume] says
  /// the line again from its start.
  Future<void> pause() async {
    final cur = _current;
    if (cur == null) return;
    _paused = cur;
    _hold = true;
    _queue.insert(0, _Job(cur.voice, cur.text, cur.lang, cur.lineId, cur.priority));
    await _speech().stop();
  }

  /// Resumes what [pause] stopped (from the start of that line). Nothing happens if nothing was paused.
  Future<void> resume() async {
    if (_paused == null) return;
    _hold = false;
    if (AudioGate.instance.silenced) {
      _paused = null;
      _queue.clear();
      return;
    }
    _paused = null;
    _pump();
  }

  /// Stops the current line and forgets the waiting ones (leaving a screen, a call starting, the app going away).
  Future<void> stop() async {
    _dropAll();
    notifyListeners();
  }

  void _onGate() {
    if (AudioGate.instance.silenced) stop();
  }

  @visibleForTesting
  void disposeForTest() => AudioGate.instance.removeListener(_onGate);
}
