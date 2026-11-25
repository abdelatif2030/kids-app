import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:just_audio/just_audio.dart';

import 'audio.dart';
import 'audio_gate.dart';

/// Short spoken welcomes (the owner's recordings, voice «ليدا», made by Instinct) said when a child enters a section:
/// games, fun games, learning games, cartoons and stories, drawing and coloring, educational videos.
/// Respects the parent's "voice on" switch, stays silent in a family call or when the app is in the background, says each
/// section at most once every [gap] (so going back and forth does not nag) and a missing file or no audio output is ignored.
class SectionVoice {
  SectionVoice._();
  static const gap = Duration(seconds: 45);
  static final Map<String, DateTime> _last = {};
  static AudioPlayer? _p;
  static Completer<void>? _done; // open while a welcome is being said

  /// Completes when the welcome being said has ended (at once when none is playing; never waits more than [_maxWait]).
  static Future<void> waitIdle() {
    final d = _done;
    if (d == null || d.isCompleted) return Future<void>.value();
    return d.future.timeout(_maxWait, onTimeout: () {});
  }

  static const _maxWait = Duration(seconds: 12);

  /// Another spoken welcome (the app greeting) tells the music to wait: complete the returned completer when it ends.
  static Completer<void> beginExternal() {
    _finish();
    return _done = Completer<void>();
  }

  static void _finish() {
    final d = _done;
    if (d != null && !d.isCompleted) d.complete();
  }

  /// section id -> clip. Ids: games, fun, learning, stories, coloring, videos.
  static const clips = {
    'games': 'assets/audio/voices/lida/ar/section_games.mp3',
    'fun': 'assets/audio/voices/lida/ar/section_fun.mp3',
    'learning': 'assets/audio/voices/lida/ar/section_learning.mp3',
    'stories': 'assets/audio/voices/lida/ar/section_stories.mp3',
    'coloring': 'assets/audio/voices/lida/ar/section_coloring.mp3',
    'videos': 'assets/audio/voices/lida/ar/section_videos.mp3',
  };

  static bool testing = false; // widget tests have no audio plugin

  static Future<void> say(String id) async {
    final asset = clips[id];
    if (asset == null || testing) return;
    if (!AudioPrefs.instance.voiceOn || AudioGate.instance.silenced) return;
    final now = DateTime.now();
    final last = _last[id];
    if (last != null && now.difference(last) < gap) return;
    _last[id] = now;
    _finish();
    final done = _done = Completer<void>();
    try {
      await _p?.stop();
      _p?.dispose();
      final p = _p = AudioPlayer();
      await p.setAsset(asset);
      unawaited(p.play().then((_) {}, onError: (Object _) {}));
      unawaited(p.processingStateStream.firstWhere((s) => s == ProcessingState.completed).then((_) {
        p.dispose();
        if (!done.isCompleted) done.complete();
      }, onError: (Object _) {
        if (!done.isCompleted) done.complete();
      }));
    } catch (_) {
      // no audio here: nothing to say
      if (!done.isCompleted) done.complete();
    }
  }

  static void stop() {
    _p?.stop();
    _finish();
  }
}

/// Says the section's welcome when this page first appears, and stops it when the page goes away.
class SectionVoiceOnEnter extends StatefulWidget {
  final String id;
  final Widget child;
  const SectionVoiceOnEnter(this.id, {super.key, required this.child});

  @override
  State<SectionVoiceOnEnter> createState() => _SectionVoiceOnEnterState();
}

class _SectionVoiceOnEnterState extends State<SectionVoiceOnEnter> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => SectionVoice.say(widget.id));
  }

  @override
  void dispose() {
    SectionVoice.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
