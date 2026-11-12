import 'dart:async';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/gestures.dart';
import 'package:just_audio/just_audio.dart';

import 'audio.dart';
import 'audio_gate.dart';

/// A short greeting said when a child opens a page: «هنلعب سوا النهارده» on the fun games page and «هنتعلم سوا النهارده»
/// on the learning games page (Fatima, ElevenLabs; owner request 2026-11-13). It respects the parent's "voice on" switch, stays
/// silent during a family call, and a missing file or a device without audio is ignored. Like the app's welcome, a phone's
/// browser may block sound until the first touch: then the greeting waits for the first touch on the page.
class PageVoice {
  PageVoice._();
  static const playToday = 'assets/audio/voices/fatima/ar/play_today.mp3';
  static const learnToday = 'assets/audio/voices/fatima/ar/learn_today.mp3';
  static AudioPlayer? _p;
  static PointerRoute? _route;

  /// Says [asset] now. Opening another page (or leaving) stops the previous greeting.
  static Future<void> say(String asset) async {
    stop();
    if (!AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
    final started = await _play(asset);
    if (!started && kIsWeb) _armFirstTouch(asset);
  }

  static Future<bool> _play(String asset) async {
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
      if (ok) unawaited(p.processingStateStream.firstWhere((s) => s == ProcessingState.completed).then((_) => p.dispose(), onError: (Object _) {}));
      return ok;
    } catch (_) {
      return false;
    }
  }

  static void _armFirstTouch(String asset) {
    _disarm();
    void onEvent(PointerEvent e) {
      if (e is! PointerUpEvent) return;
      _disarm();
      if (!AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
      unawaited(_play(asset));
    }

    _route = onEvent;
    GestureBinding.instance.pointerRouter.addGlobalRoute(onEvent);
  }

  static void _disarm() {
    final r = _route;
    if (r != null) GestureBinding.instance.pointerRouter.removeGlobalRoute(r);
    _route = null;
  }

  static void stop() {
    _disarm();
    _p?.stop();
  }
}
