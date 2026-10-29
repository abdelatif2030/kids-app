import 'dart:async';

import 'package:kids_app/media/voice_choice.dart';
import 'package:kids_app/media/audio.dart';

/// A speech backend that records what would have been said.
class FakeSpeech implements SpeechBackend {
  final List<String> spoken = [];
  final List<double> rates = [];
  bool available = true;

  /// Makes [speak] fail, like a broken engine.
  bool fail = false;

  /// When true, [speak] waits until the test calls [finish] (or [stop] runs),
  /// like real speech that takes time.
  bool manual = false;
  Completer<void>? _current;
  int stops = 0;

  @override
  Future<bool> isAvailable(String lang) async => available;

  /// Voices the fake engine offers per language, and the last preference it was given.
  final Map<String, List<VoiceInfo>> offered = {};
  final Map<String, String?> preferred = {};

  @override
  Future<List<VoiceInfo>> voices(String lang) async => offered[lang] ?? const [];

  @override
  Future<void> preferVoice(String lang, String? name) async {
    preferred[lang] = name;
  }

  @override
  Future<void> speak(String text, {String lang = 'ar', double rate = 1.0}) async {
    if (fail) throw StateError('engine failure');
    spoken.add(text);
    rates.add(rate);
    if (!manual) return;
    final c = _current = Completer<void>();
    await c.future;
  }

  /// The current sentence ends naturally.
  void finish() {
    final c = _current;
    _current = null;
    if (c != null && !c.isCompleted) c.complete();
  }

  @override
  Future<void> stop() async {
    stops++;
    finish();
  }
}

/// A file player whose clock the test drives. [advance] moves the position
/// (only while playing), like real playback.
class FakePlayer implements FilePlayer {
  Duration? length = const Duration(seconds: 100);
  Duration _pos = Duration.zero;
  bool playing = false;
  double speed = 1.0;
  double volume = 1.0;
  bool loop = false;
  MediaRef? loaded;
  bool disposed = false;
  final _positions = StreamController<Duration>.broadcast();
  final _done = StreamController<void>.broadcast();

  @override
  Future<Duration?> load(MediaRef ref) async {
    loaded = ref;
    return length;
  }

  @override
  Future<void> play() async => playing = true;
  @override
  Future<void> pause() async => playing = false;
  @override
  Future<void> seek(Duration to) async {
    _pos = to;
    _positions.add(_pos);
  }

  @override
  Future<void> setSpeed(double s) async => speed = s;
  @override
  Future<void> setVolume(double v) async => volume = v;
  @override
  Future<void> setLoop(bool l) async => loop = l;
  @override
  Stream<Duration> get positionStream => _positions.stream;
  @override
  Stream<void> get completed => _done.stream;
  @override
  Duration get position => _pos;

  /// Moves playback forward by [d] (scaled by speed) when playing.
  void advance(Duration d) {
    if (!playing || length == null) return;
    _pos += Duration(milliseconds: (d.inMilliseconds * speed).round());
    if (_pos >= length!) {
      _pos = length!;
      playing = false;
      _positions.add(_pos);
      _done.add(null);
      return;
    }
    _positions.add(_pos);
  }

  @override
  Future<void> dispose() async => disposed = true;
}
