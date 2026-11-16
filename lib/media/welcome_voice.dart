import 'dart:async';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/gestures.dart';
import 'package:just_audio/just_audio.dart';

import 'audio.dart';
import 'audio_gate.dart';

/// «أهلاً بيكم يا أبطال»: the owner's chosen greeting (Fatima, ElevenLabs v3), said once each time the app is opened,
/// when the child's home appears. It respects the parent's "voice on" switch and stays silent during a family call or
/// when the app is in the background. A missing file or a device without audio is ignored.
///
/// On a phone's browser (and an app added to the home screen) the browser blocks sound until the first touch, so the
/// greeting could be silent there (owner report 2026-11-12). When the sound did not start, it waits for the first touch
/// anywhere and says the greeting then.
class WelcomeVoice {
  WelcomeVoice._();
  static const asset = 'assets/audio/voices/fatima/ar/welcome_abtal.mp3';
  static bool _played = false;
  static bool _heard = false;
  static AudioPlayer? _p;
  static PointerRoute? _route;

  /// Plays the greeting the first time it is asked for in this run of the app.
  static Future<void> playOnce() async {
    if (_played) return;
    _played = true;
    if (!AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
    final started = await _play();
    if (!started && kIsWeb) _armFirstTouch();
  }

  /// Starts the clip and reports whether sound really began within a moment (a blocked browser never starts).
  static Future<bool> _play() async {
    try {
      _p?.dispose();
      final p = _p = AudioPlayer();
      await p.setAsset(asset);
      unawaited(p.play().then((_) {}, onError: (Object _) {}));
      final begun = Completer<bool>();
      final sub = p.playerStateStream.listen((s) {
        if (s.playing && s.processingState == ProcessingState.ready && !begun.isCompleted) begun.complete(true);
      });
      final ok = await begun.future.timeout(const Duration(milliseconds: 1400), onTimeout: () => false);
      await sub.cancel();
      if (ok) {
        _heard = true;
        // free the player once it has finished
        unawaited(p.processingStateStream.firstWhere((s) => s == ProcessingState.completed).then((_) => p.dispose(), onError: (Object _) {}));
      }
      return ok;
    } catch (_) {
      return false; // no audio output here: nothing to say
    }
  }

  static void _armFirstTouch() {
    if (_heard || _route != null) return;
    void onEvent(PointerEvent e) {
      if (e is! PointerUpEvent) return;
      final r = _route;
      if (r != null) GestureBinding.instance.pointerRouter.removeGlobalRoute(r);
      _route = null;
      if (_heard || !AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
      unawaited(_play());
    }

    _route = onEvent;
    GestureBinding.instance.pointerRouter.addGlobalRoute(onEvent);
  }

  static void stop() {
    _p?.stop();
  }
}
