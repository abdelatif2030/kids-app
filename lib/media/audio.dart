import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:just_audio/just_audio.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Where a piece of audio comes from. Content metadata only names a source;
/// the player decides how to play it, so a local file, an authorized remote
/// file, the device voice or "no recording yet" can be swapped without
/// touching the screens.
sealed class MediaRef {
  const MediaRef();
}

/// A file bundled with the app (assets/audio/...).
class AssetAudio extends MediaRef {
  final String path;
  const AssetAudio(this.path);
}

/// A file or stream on a server we are allowed to use. Needs `license`.
class RemoteAudio extends MediaRef {
  final String url;
  final String license;
  const RemoteAudio(this.url, this.license);
}

/// Text read aloud by the phone's own text-to-speech voice (on the device, no
/// upload). A stopgap until real recordings exist.
class DeviceVoice extends MediaRef {
  final String text;
  final String lang;
  const DeviceVoice(this.text, {this.lang = 'ar'});

  /// Read the owning story's own transcript, chapter by chapter.
  const DeviceVoice.transcript({this.lang = 'ar'}) : text = '';
}

/// There is no recording yet. Playback is disabled and says why.
class NoAudio extends MediaRef {
  final String reason;
  const NoAudio([this.reason = 'لم تتم إضافة التسجيل الصوتي بعد']);
}

// ---------------------------------------------------------------------------
// Reading text aloud (letters, words, story chapters).

abstract class SpeechBackend {
  Future<bool> isAvailable(String lang);

  /// Completes when the text has been spoken or [stop] was called.
  Future<void> speak(String text, {String lang = 'ar', double rate = 1.0});
  Future<void> stop();
}

class TtsSpeech implements SpeechBackend {
  final FlutterTts _tts = FlutterTts();
  bool _ready = false;

  Future<void> _init() async {
    if (_ready) return;
    await _tts.awaitSpeakCompletion(true);
    _ready = true;
  }

  @override
  Future<bool> isAvailable(String lang) async {
    try {
      await _init();
      final r = await _tts.isLanguageAvailable(lang);
      return r == true || r == 1;
    } catch (_) {
      return false;
    }
  }

  @override
  Future<void> speak(String text, {String lang = 'ar', double rate = 1.0}) async {
    await _init();
    await _tts.setLanguage(lang);
    // flutter_tts: about 0.5 is a normal speed on Android.
    await _tts.setSpeechRate((0.5 * rate).clamp(0.2, 0.9));
    await _tts.setPitch(1.0);
    await _tts.speak(text);
  }

  @override
  Future<void> stop() async {
    try {
      await _tts.stop();
    } catch (_) {}
  }
}

// ---------------------------------------------------------------------------
// Playing audio files.

abstract class FilePlayer {
  /// Loads [ref] and returns its length, or null when it cannot be played.
  Future<Duration?> load(MediaRef ref);
  Future<void> play();
  Future<void> pause();
  Future<void> seek(Duration to);
  Future<void> setSpeed(double speed);
  Future<void> setVolume(double volume);
  Future<void> setLoop(bool loop);
  Stream<Duration> get positionStream;
  Stream<void> get completed;
  Duration get position;
  Future<void> dispose();
}

class JustAudioFilePlayer implements FilePlayer {
  final AudioPlayer _p = AudioPlayer();
  final StreamController<void> _done = StreamController.broadcast();
  StreamSubscription<PlayerState>? _sub;

  JustAudioFilePlayer() {
    _sub = _p.playerStateStream.listen((s) {
      if (s.processingState == ProcessingState.completed) _done.add(null);
    });
  }

  @override
  Future<Duration?> load(MediaRef ref) async {
    try {
      return switch (ref) {
        AssetAudio(:final path) => await _p.setAsset(path),
        RemoteAudio(:final url) => await _p.setUrl(url),
        _ => null,
      };
    } catch (_) {
      return null;
    }
  }

  @override
  Future<void> play() => _p.play();
  @override
  Future<void> pause() => _p.pause();
  @override
  Future<void> seek(Duration to) => _p.seek(to);
  @override
  Future<void> setSpeed(double speed) => _p.setSpeed(speed);
  @override
  Future<void> setVolume(double volume) => _p.setVolume(volume);
  @override
  Future<void> setLoop(bool loop) => _p.setLoopMode(loop ? LoopMode.one : LoopMode.off);
  @override
  Stream<Duration> get positionStream => _p.positionStream;
  @override
  Stream<void> get completed => _done.stream;
  @override
  Duration get position => _p.position;

  @override
  Future<void> dispose() async {
    await _sub?.cancel();
    await _done.close();
    await _p.dispose();
  }
}

/// The app's audio entry points. Screens call these; tests replace them.
class AppAudio {
  static SpeechBackend speech = TtsSpeech();
  static FilePlayer Function() newPlayer = JustAudioFilePlayer.new;

  /// Reads [text] aloud when the parent has the voice switched on. Never
  /// throws: when no voice exists the screen simply stays silent (the text is
  /// always on screen too).
  static Future<void> say(String text, {String lang = 'ar'}) async {
    if (!AudioPrefs.instance.voiceOn) return;
    try {
      await speech.stop();
      await speech.speak(text, lang: lang, rate: AudioPrefs.instance.speechRate);
    } catch (_) {}
  }

  static Future<void> stopSaying() async {
    try {
      await speech.stop();
    } catch (_) {}
  }
}

/// Parent-controlled sound settings. Stored on the device only.
class AudioPrefs extends ChangeNotifier {
  AudioPrefs._();
  static final AudioPrefs instance = AudioPrefs._();

  /// Read letters, words and instructions aloud.
  bool voiceOn = true;

  /// Small sounds when answering (none are shipped yet; the switch is kept so
  /// a parent's choice is respected once they are added).
  bool effectsOn = true;

  /// 0.75 slow, 1.0 normal, 1.25 fast.
  double speechRate = 1.0;

  /// 'none', 'rain', 'waves' or 'wind'.
  String ambient = 'none';
  double ambientVolume = 0.35;

  /// Bedtime stories may be played during quiet hours.
  bool storiesInQuietHours = true;

  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    voiceOn = p.getBool('audio_voice') ?? true;
    effectsOn = p.getBool('audio_effects') ?? true;
    speechRate = p.getDouble('audio_rate') ?? 1.0;
    ambient = p.getString('audio_ambient') ?? 'none';
    ambientVolume = p.getDouble('audio_ambient_vol') ?? 0.35;
    storiesInQuietHours = p.getBool('audio_stories_quiet') ?? true;
    notifyListeners();
  }

  Future<void> update({
    bool? voiceOn,
    bool? effectsOn,
    double? speechRate,
    String? ambient,
    double? ambientVolume,
    bool? storiesInQuietHours,
  }) async {
    this.voiceOn = voiceOn ?? this.voiceOn;
    this.effectsOn = effectsOn ?? this.effectsOn;
    this.speechRate = speechRate ?? this.speechRate;
    this.ambient = ambient ?? this.ambient;
    this.ambientVolume = ambientVolume ?? this.ambientVolume;
    this.storiesInQuietHours = storiesInQuietHours ?? this.storiesInQuietHours;
    notifyListeners();
    final p = await SharedPreferences.getInstance();
    await p.setBool('audio_voice', this.voiceOn);
    await p.setBool('audio_effects', this.effectsOn);
    await p.setDouble('audio_rate', this.speechRate);
    await p.setString('audio_ambient', this.ambient);
    await p.setDouble('audio_ambient_vol', this.ambientVolume);
    await p.setBool('audio_stories_quiet', this.storiesInQuietHours);
  }
}

/// The bundled ambient loops (real, original, synthetic noise).
const kAmbientSounds = <String, (String, String?)>{
  'none': ('بدون', null),
  'rain': ('مطر هادئ', 'assets/audio/rain.mp3'),
  'waves': ('أمواج', 'assets/audio/waves.mp3'),
  'wind': ('نسيم', 'assets/audio/wind.mp3'),
};
