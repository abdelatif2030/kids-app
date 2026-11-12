import 'package:just_audio/just_audio.dart';

import 'audio.dart';
import 'audio_gate.dart';

/// «أهلاً بيكم يا أبطال»: the owner's chosen greeting (Fatima, ElevenLabs v3), said once each time the app is opened,
/// when the child's home appears. It respects the parent's "voice on" switch and stays silent during a family call or
/// when the app is in the background. A missing file or a device without audio is ignored.
class WelcomeVoice {
  WelcomeVoice._();
  static const asset = 'assets/audio/voices/fatima/ar/welcome_abtal.mp3';
  static bool _played = false;
  static AudioPlayer? _p;

  /// Plays the greeting the first time it is asked for in this run of the app.
  static Future<void> playOnce() async {
    if (_played) return;
    _played = true;
    if (!AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
    try {
      final p = _p = AudioPlayer();
      await p.setAsset(asset);
      await p.play();
      await p.dispose();
      if (identical(_p, p)) _p = null;
    } catch (_) {
      // no audio output here: nothing to say
    }
  }

  static void stop() {
    _p?.stop();
  }
}
