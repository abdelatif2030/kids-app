import 'dart:async';

import 'package:flutter/foundation.dart';

import 'audio.dart';
import 'audio_manifest.dart';

enum AudioStatus { idle, loading, playing, paused, completed, error }

/// Why nothing (or only a fallback) was heard. Each one has a clear message on screen.
enum AudioProblem {
  none,
  voiceOff, // the parent switched voice off
  missing, // no approved recording and the device voice may not stand in
  noVoice, // no voice for the language on this device
  recordingFailed, // a recording exists but could not be loaded
  failed, // playback stopped with an error
}

class AudioState {
  final AudioStatus status;
  final String? assetId;
  final String? text;

  /// What is really being heard: a recording or the device voice (never both).
  final AudioSource? heard;
  final AudioProblem problem;
  final bool slow;
  const AudioState({
    this.status = AudioStatus.idle,
    this.assetId,
    this.text,
    this.heard,
    this.problem = AudioProblem.none,
    this.slow = false,
  });

  bool get isPlaying => status == AudioStatus.playing;
  bool get isBusy => status == AudioStatus.loading || status == AudioStatus.playing;
  AudioState copy({AudioStatus? status, AudioSource? heard, AudioProblem? problem}) => AudioState(
        status: status ?? this.status,
        assetId: assetId,
        text: text,
        heard: heard ?? this.heard,
        problem: problem ?? this.problem,
        slow: slow,
      );
}

/// Plays the audio of learning content. One clip at a time: starting a new one
/// always stops the previous. A recording is used only when a native speaker
/// approved it; otherwise the device voice may stand in (and is labelled as a
/// demo), except for items where a synthetic voice would teach a wrong sound.
/// The state says what is really happening: never "playing" without sound.
class AudioService {
  final SpeechBackend Function() _speech;
  final FilePlayer Function() _newPlayer;
  final AudioManifest Function() _manifest;
  final AudioPrefs _prefs;

  /// Notifies listeners (buttons) of every change of state.
  final ValueNotifier<AudioState> state = ValueNotifier(const AudioState());

  FilePlayer? _player;
  StreamSubscription<void>? _doneSub;
  final Map<String, bool> _voiceOk = {};
  int _token = 0;
  AudioAsset? _last;
  bool _lastSlow = false;

  AudioService({
    required SpeechBackend Function() speech,
    required FilePlayer Function() newPlayer,
    required AudioManifest Function() manifest,
    AudioPrefs? prefs,
  })  : _speech = speech,
        _newPlayer = newPlayer,
        _manifest = manifest,
        _prefs = prefs ?? AudioPrefs.instance;

  /// Plays a manifest item by its id.
  /// [preview] plays the file of an item that is not approved yet (the review tools only).
  Future<void> play(String assetId, {bool slow = false, bool preview = false}) async {
    final asset = _manifest().byId(assetId);
    if (asset == null) {
      _set(AudioState(assetId: assetId, status: AudioStatus.error, problem: AudioProblem.missing));
      return;
    }
    return _run(asset, slow, preview: preview);
  }

  /// Plays any bundled file for comparison (the voice comparison tool). Not tied to the lesson content.
  Future<void> previewFile(String path, {String label = ''}) async {
    final my = ++_token;
    await _halt();
    if (my != _token) return;
    _set(AudioState(assetId: 'file:$path', text: label, status: AudioStatus.loading));
    try {
      final p = _player ??= _newPlayer();
      final len = await p.load(AssetAudio(path));
      if (my != _token) return;
      if (len == null) {
        _set(AudioState(assetId: 'file:$path', text: label, status: AudioStatus.error, problem: AudioProblem.recordingFailed));
        return;
      }
      await p.seek(Duration.zero);
      await p.setSpeed(1.0);
      _doneSub = p.completed.listen((_) {
        if (my == _token) _set(state.value.copy(status: AudioStatus.completed));
      });
      await p.play();
      if (my == _token && state.value.status == AudioStatus.loading) {
        _set(AudioState(assetId: 'file:$path', text: label, status: AudioStatus.playing, heard: AudioSource.generated));
      }
    } catch (_) {
      if (my == _token) _set(AudioState(assetId: 'file:$path', text: label, status: AudioStatus.error, problem: AudioProblem.failed));
    }
  }

  /// Plays a text. If the content has an asset for it, that asset is used (so a
  /// recording takes over automatically); otherwise it is an instruction or
  /// sentence read by the device voice.
  Future<void> playText(String text, {String lang = 'ar', bool slow = false}) async {
    final asset = _manifest().forText(lang, text) ??
        AudioAsset(
          id: 'adhoc.$lang.${text.hashCode}',
          lang: lang,
          locale: lang,
          kind: AudioKind.instruction,
          text: text,
          ref: 'text',
        );
    return _run(asset, slow);
  }

  Future<void> replay() async {
    final a = _last;
    if (a != null) await _run(a, _lastSlow);
  }

  Future<void> stop() async {
    _token++;
    await _halt();
    _set(const AudioState());
  }

  Future<void> pause() async {
    final s = state.value;
    if (s.status != AudioStatus.playing) return;
    if (s.heard == AudioSource.recorded || s.heard == AudioSource.generated) {
      _token++;
      await _player?.pause();
      _set(s.copy(status: AudioStatus.paused));
    } else {
      await stop(); // device voice cannot pause
    }
  }

  /// Drops the file player so the next clip creates a fresh one (used when the player factory is replaced).
  void resetPlayer() {
    _player = null;
    _doneSub?.cancel();
    _doneSub = null;
  }

  /// Forget what we learned about the device voices (after a settings change).
  void recheckVoices() => _voiceOk.clear();

  Future<void> _halt() async {
    await _doneSub?.cancel();
    _doneSub = null;
    try {
      await _speech().stop();
    } catch (_) {}
    try {
      await _player?.pause();
    } catch (_) {}
  }

  void _set(AudioState s) => state.value = s;

  AudioState _base(AudioAsset a, bool slow) => AudioState(assetId: a.id, text: a.text, slow: slow);

  Future<void> _run(AudioAsset asset, bool slow, {bool preview = false}) async {
    final my = ++_token;
    _last = asset;
    _lastSlow = slow;
    await _halt();
    if (my != _token) return;
    final base = _base(asset, slow);

    if (!_prefs.voiceOn) {
      _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.error, problem: AudioProblem.voiceOff));
      return;
    }
    _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.loading));

    if (asset.approved || (preview && asset.hasFile)) {
      if (await _playRecording(asset, slow, my)) return;
      if (my != _token) return;
      // The recording could not be loaded: fall through to the device voice if it may be used.
      if (!_deviceVoiceMayStandIn(asset)) {
        _set(AudioState(
            assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.error, problem: AudioProblem.recordingFailed));
        return;
      }
    }

    if (!_deviceVoiceMayStandIn(asset)) {
      _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.error, problem: AudioProblem.missing));
      return;
    }
    await _playDeviceVoice(asset, base, slow, my);
  }

  bool _deviceVoiceMayStandIn(AudioAsset a) => a.deviceVoiceAllowed && _prefs.allowDeviceVoice;

  Future<bool> _playRecording(AudioAsset asset, bool slow, int my) async {
    try {
      final p = _player ??= _newPlayer();
      final len = await p.load(AssetAudio(asset.file!));
      if (my != _token) return true; // superseded: nothing more to do
      if (len == null) return false;
      await p.seek(Duration.zero);
      await p.setSpeed(slow ? 0.8 : 1.0);
      _doneSub = p.completed.listen((_) {
        if (my == _token) _set(state.value.copy(status: AudioStatus.completed));
      });
      await p.play();
      if (my != _token) return true;
      if (state.value.status == AudioStatus.loading) {
        _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.playing, heard: asset.source));
      }
      return true;
    } catch (_) {
      return false;
    }
  }

  Future<void> _playDeviceVoice(AudioAsset asset, AudioState base, bool slow, int my) async {
    final speech = _speech();
    var ok = _voiceOk[asset.lang];
    if (ok == null) {
      try {
        ok = await speech.isAvailable(asset.lang);
      } catch (_) {
        ok = false;
      }
      _voiceOk[asset.lang] = ok;
    }
    if (my != _token) return;
    if (!ok) {
      _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.error, problem: AudioProblem.noVoice));
      return;
    }
    _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.playing, heard: AudioSource.deviceVoice));
    try {
      await speech.speak(asset.text, lang: asset.lang, rate: _prefs.speechRate * (slow ? 0.7 : 1.0));
      if (my == _token) {
        _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.completed, heard: AudioSource.deviceVoice));
      }
    } catch (_) {
      if (my == _token) {
        _voiceOk.remove(asset.lang); // look again next time
        _set(AudioState(assetId: asset.id, text: asset.text, slow: slow, status: AudioStatus.error, problem: AudioProblem.failed));
      }
    }
  }

  Future<void> dispose() async {
    await _doneSub?.cancel();
    await _player?.dispose();
    state.dispose();
  }
}
