import 'dart:async';

import 'package:flutter/foundation.dart';

import '../library/learning_records.dart';
import '../media/audio.dart';
import 'story_models.dart';
import 'story_store.dart';

enum PlayState { loading, ready, playing, paused, waitingChoice, completed, unavailable }

class Segment {
  final int chapter;
  final String text;
  final int start; // seconds from the start of the story
  final int duration;
  const Segment(this.chapter, this.text, this.start, this.duration);
  int get end => start + duration;
}

/// Splits a story into sentences with estimated times (about 2.2 words a second
/// at normal speed). Sentence by sentence reading lets a device-voice story
/// pause and resume mid-chapter and be seeked.
List<Segment> segmentsOf(Story story, {int? onlyChapter}) {
  final out = <Segment>[];
  var t = 0;
  for (var c = 0; c < story.chapters.length; c++) {
    if (onlyChapter != null && c != onlyChapter) continue;
    final parts = RegExp(r'[^.؟!]+[.؟!]?').allMatches(story.chapters[c].text).map((m) => m.group(0)!.trim());
    for (final p in parts.where((p) => p.isNotEmpty)) {
      final words = p.split(RegExp(r'\s+')).length;
      final d = (words / 2.2).ceil().clamp(1, 60);
      out.add(Segment(c, p, t, d));
      t += d;
    }
  }
  return out;
}

/// Plays one story. A recording (file audio) uses a real player with seeking;
/// a device-voice story is read sentence by sentence by the phone's text to
/// speech. Either way the controller offers play/pause, seek, skip, speed, a
/// sleep timer, an optional ambient sound, resume and listening history. It
/// never autoplays another story: at the end it stops.
class StoryPlayerController extends ChangeNotifier {
  StoryPlayerController(
    this.story, {
    required this.childId,
    SpeechBackend? speech,
    FilePlayer Function()? newPlayer,
  })  : _speech = speech ?? AppAudio.speech,
        _newPlayer = newPlayer ?? AppAudio.newPlayer,
        speed = AudioPrefs.instance.speechRate;

  static const speeds = [0.75, 1.0, 1.25];
  static const sleepChoices = [5, 10, 15, 20, 30, 45, 60]; // minutes
  static const skipSeconds = 15;

  final Story story;
  final String childId;
  final SpeechBackend _speech;
  final FilePlayer Function() _newPlayer;

  PlayState state = PlayState.loading;
  String? message; // why playback is unavailable
  double speed;
  int _chapter = 0;
  double _pos = 0; // seconds
  int _duration = 0;
  List<Segment> _segments = [];
  int _segIndex = 0;
  int _gen = 0; // bumped whenever speech is interrupted
  FilePlayer? _player;
  StreamSubscription<Duration>? _posSub;
  StreamSubscription<void>? _doneSub;
  Timer? _ticker;
  bool _disposed = false;

  // Listening accounting (exposure, never mastery).
  int _listened = 0;
  int _flushed = 0;

  // Sleep timer.
  int? sleepRemaining; // seconds, null = off
  bool sleepAtEnd = false;
  bool sleepEnded = false;

  // Ambient sound.
  String ambient = 'none';
  FilePlayer? _ambient;
  double _ambientVolume = AudioPrefs.instance.ambientVolume;

  bool get isFile => story.media is AssetAudio || story.media is RemoteAudio;
  bool get playing => state == PlayState.playing;
  int get chapterIndex => _chapter;
  int get positionSec => _pos.floor().clamp(0, _duration == 0 ? 1 << 30 : _duration);
  int get durationSec => _duration;
  int get remainingSec => (_duration - positionSec).clamp(0, 1 << 30);
  bool get canSeek => isFile || !story.branching;
  int get listenedSeconds => _listened;
  StoryChapter get chapter => story.chapters[_chapter];

  Future<void> init() async {
    final resume = await StoryStore.resumePoint(childId, story.id);
    if (isFile) {
      final p = _player = _newPlayer();
      final len = await p.load(story.media);
      if (len == null) {
        _unavailable('تعذّر تشغيل الملف الصوتي على هذا الجهاز.');
        return;
      }
      _duration = len.inSeconds;
      _posSub = p.positionStream.listen((d) {
        _pos = d.inMilliseconds / 1000;
        _notify();
      });
      _doneSub = p.completed.listen((_) => _finish());
      if (resume != null && resume.seconds > 0 && resume.seconds < _duration - 2) {
        _pos = resume.seconds.toDouble();
        await p.seek(Duration(seconds: resume.seconds));
      }
      state = PlayState.ready;
    } else if (story.media is DeviceVoice) {
      if (!await _speech.isAvailable('ar')) {
        _unavailable('لا يوجد صوت عربي مثبّت على هذا الجهاز. يمكنك قراءة النص، أو تثبيت صوت عربي من إعدادات الجهاز.');
        return;
      }
      if (story.branching) {
        _chapter = resume != null && resume.chapter < story.chapters.length ? resume.chapter : 0;
        _segments = segmentsOf(story, onlyChapter: _chapter);
        _duration = _segments.isEmpty ? 0 : _segments.last.end;
      } else {
        _segments = segmentsOf(story);
        _duration = _segments.isEmpty ? 0 : _segments.last.end;
        if (resume != null && resume.seconds > 0 && resume.seconds < _duration - 2) {
          _seekSegments(resume.seconds);
        }
      }
      state = PlayState.ready;
    } else {
      _unavailable((story.media as NoAudio).reason);
      return;
    }
    _notify();
  }

  void _unavailable(String why) {
    state = PlayState.unavailable;
    message = why;
    _notify();
  }

  void _notify() {
    if (!_disposed) notifyListeners();
  }

  bool get hasResume => state == PlayState.ready && _pos > 0;

  // -- play / pause ---------------------------------------------------------

  Future<void> play() async {
    if (state == PlayState.unavailable || state == PlayState.loading) return;
    if (state == PlayState.completed) {
      _pos = 0;
      _segIndex = 0;
      if (story.branching) await _gotoChapter(0, notify: false);
      if (isFile) await _player!.seek(Duration.zero);
      sleepEnded = false;
    }
    if (state == PlayState.waitingChoice) return;
    state = PlayState.playing;
    sleepEnded = false;
    _startTicker();
    _ambient?.play();
    if (isFile) {
      await _player!.setSpeed(speed);
      await _player!.play();
    } else {
      unawaited(_speakLoop());
    }
    _notify();
  }

  Future<void> pause() async {
    if (state != PlayState.playing) return;
    state = PlayState.paused;
    _gen++;
    if (isFile) {
      await _player!.pause();
    } else {
      await _speech.stop();
    }
    await _ambient?.pause();
    await _savePosition();
    await _flush();
    _notify();
  }

  Future<void> toggle() => playing ? pause() : play();

  // -- device-voice reading -------------------------------------------------

  Future<void> _speakLoop() async {
    final gen = ++_gen;
    while (_segIndex < _segments.length) {
      if (gen != _gen) return;
      final seg = _segments[_segIndex];
      _chapter = seg.chapter;
      _pos = seg.start.toDouble();
      _notify();
      try {
        await _speech.speak(seg.text, rate: speed);
      } catch (_) {
        if (gen == _gen) _unavailable('تعذّرت قراءة النص بالصوت. يمكنك قراءته على الشاشة.');
        return;
      }
      if (gen != _gen) return;
      _pos = seg.end.toDouble();
      _segIndex++;
    }
    if (gen != _gen) return;
    final c = story.chapters[_chapter];
    if (story.branching && c.choices.isNotEmpty) {
      state = PlayState.waitingChoice;
      await _ambient?.pause();
      _notify();
      return;
    }
    await _finish();
  }

  void _seekSegments(int seconds) {
    var i = _segments.indexWhere((s) => seconds < s.end);
    if (i < 0) i = _segments.length - 1;
    _segIndex = i;
    _pos = _segments[i].start.toDouble();
    _chapter = _segments[i].chapter;
  }

  // -- seeking --------------------------------------------------------------

  Future<void> seekTo(int seconds) async {
    if (state == PlayState.unavailable || state == PlayState.loading || !canSeek) return;
    final s = seconds.clamp(0, _duration);
    if (isFile) {
      _pos = s.toDouble();
      await _player!.seek(Duration(seconds: s));
    } else {
      final wasPlaying = playing;
      if (wasPlaying) {
        _gen++;
        await _speech.stop();
      }
      _seekSegments(s);
      if (wasPlaying) unawaited(_speakLoop());
    }
    if (state == PlayState.completed) state = PlayState.paused;
    _notify();
  }

  Future<void> skip(int deltaSeconds) => seekTo(positionSec + deltaSeconds);

  /// The first second of chapter [i] (stories that are not branching).
  int chapterStart(int i) {
    if (isFile || story.branching) return 0;
    final seg = _segments.where((s) => s.chapter == i);
    return seg.isEmpty ? 0 : seg.first.start;
  }

  Future<void> jumpToChapter(int i) async {
    if (story.branching) return;
    await seekTo(chapterStart(i));
    _chapter = i;
    _notify();
  }

  Future<void> setSpeed(double s) async {
    speed = s;
    if (isFile) await _player?.setSpeed(s);
    // The device voice reads the next sentence at the new speed.
    _notify();
  }

  // -- choices (interactive stories) ---------------------------------------

  Future<void> choose(StoryChoice choice) async {
    if (state != PlayState.waitingChoice) return;
    await _gotoChapter(choice.goTo);
    await play();
  }

  Future<void> _gotoChapter(int i, {bool notify = true}) async {
    _chapter = i;
    _segments = segmentsOf(story, onlyChapter: i);
    _segIndex = 0;
    _pos = 0;
    _duration = _segments.isEmpty ? 0 : _segments.last.end;
    state = PlayState.paused;
    if (notify) _notify();
  }

  // -- finishing ------------------------------------------------------------

  Future<void> _finish() async {
    if (state == PlayState.completed) return;
    state = PlayState.completed;
    _pos = _duration.toDouble();
    _gen++;
    await _ambient?.pause();
    await StoryStore.clearPosition(childId, story.id);
    await _flush(completed: true);
    if (sleepAtEnd) {
      sleepEnded = true;
      sleepAtEnd = false;
    }
    _notify();
  }

  // -- sleep timer ----------------------------------------------------------

  void startSleepTimer(int minutes) {
    sleepRemaining = minutes * 60;
    sleepAtEnd = false;
    sleepEnded = false;
    _startTicker();
    _notify();
  }

  void sleepAtEndOfStory() {
    sleepAtEnd = true;
    sleepRemaining = null;
    sleepEnded = false;
    _notify();
  }

  void cancelSleepTimer() {
    sleepRemaining = null;
    sleepAtEnd = false;
    _ambient?.setVolume(_ambientVolume);
    _notify();
  }

  // -- ambient sound --------------------------------------------------------

  Future<void> setAmbient(String key) async {
    ambient = key;
    await _ambient?.dispose();
    _ambient = null;
    final path = kAmbientSounds[key]?.$2;
    if (path != null) {
      final p = _ambient = _newPlayer();
      final len = await p.load(AssetAudio(path));
      if (len == null) {
        _ambient = null;
        ambient = 'none';
        await p.dispose();
      } else {
        await p.setLoop(true);
        await p.setVolume(_ambientVolume);
        if (playing) await p.play();
      }
    }
    _notify();
  }

  Future<void> setAmbientVolume(double v) async {
    _ambientVolume = v;
    await _ambient?.setVolume(v);
    _notify();
  }

  // -- clock ----------------------------------------------------------------

  void _startTicker() {
    _ticker ??= Timer.periodic(const Duration(seconds: 1), (_) => _tick());
  }

  Future<void> _tick() async {
    if (playing) {
      _listened++;
      if (!isFile && _segIndex < _segments.length) {
        // Move through the sentence at the chosen speed (file audio reports its own position).
        _pos = (_pos + speed).clamp(0, _segments[_segIndex].end.toDouble());
      }
    }
    final r = sleepRemaining;
    if (r != null) {
      final next = r - 1;
      sleepRemaining = next;
      if (next <= 5 && next >= 0) {
        // A gentle fade of the ambient sound over the last five seconds.
        await _ambient?.setVolume(_ambientVolume * next / 5);
      }
      if (next <= 0) {
        sleepRemaining = null;
        sleepEnded = true;
        await pause();
        await _ambient?.setVolume(_ambientVolume);
      }
    }
    if (!playing && sleepRemaining == null) {
      _ticker?.cancel();
      _ticker = null;
    }
    _notify();
  }

  // -- saving ---------------------------------------------------------------

  Future<void> _savePosition() async {
    if (state == PlayState.completed) return;
    await StoryStore.savePosition(childId, story.id, positionSec, _chapter);
  }

  Future<void> _flush({bool completed = false}) async {
    final delta = _listened - _flushed;
    _flushed = _listened;
    await StoryStore.addListening(childId, story.id, delta, completed: completed);
    if (delta > 0 || completed) {
      // Listening is exposure only: it is never counted as understanding.
      await LearningRecords.add(childId, RecordType.story, story.id, Evidence.exposure, seconds: delta);
    }
  }

  @override
  void dispose() {
    _disposed = true;
    _ticker?.cancel();
    _gen++;
    _speech.stop();
    _posSub?.cancel();
    _doneSub?.cancel();
    if (state == PlayState.playing || state == PlayState.paused) {
      _savePosition();
    }
    _flush();
    _player?.dispose();
    _ambient?.dispose();
    super.dispose();
  }
}
