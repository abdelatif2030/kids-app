import 'dart:async';

import 'package:flutter/widgets.dart';

import 'audio.dart';
import 'audio_gate.dart';

/// Quiet original background music for the big pages (owner request 2026-11-20): the child's home, the fun games, the learning games.
/// One player for the whole app: a page CLAIMS the music when it is on top ([HubMusicScope]), the track keeps playing while the child
/// moves between pages that share it (the fun hub and its sections), another track takes over on another kind of page, and it goes quiet
/// on any page that claims nothing (a game, a story, the parent area). Tracks are synthesised by tools/make_music.py (no samples).
/// Off while a family call is running or the app is in the background (AudioGate). Never throws: no sound is better than a crash.
class HubMusic {
  HubMusic._();
  static final HubMusic instance = HubMusic._();

  /// Tests and tools can switch the music off.
  static bool disabled = false;
  static const double _volume = 0.26;
  static const Map<String, String> _paths = {
    'home': 'assets/audio/music/home_hub.mp3',
    'fun': 'assets/audio/music/fun_hub.mp3',
    'learn': 'assets/audio/music/learn_hub.mp3',
  };

  FilePlayer? _player;
  String? _loaded; // the track currently loaded in the player
  String? _want; // the track the page on top wants (null = silence)
  Object? _owner;
  bool _wired = false;
  Future<void> _chain = Future<void>.value();

  bool get _isTest => isTestBinding();

  /// The page [owner] is on top and wants [track] (null = it wants silence, e.g. a game).
  void claim(Object owner, String? track) {
    _owner = owner;
    _want = track;
    _schedule();
  }

  /// The page [owner] was covered or closed. If no other page claims the music right away, it goes quiet.
  void release(Object owner) {
    if (disabled || _isTest) return; // no timers in widget tests
    Timer(const Duration(milliseconds: 120), () {
      if (identical(_owner, owner)) {
        _owner = null;
        _want = null;
        _schedule();
      }
    });
  }

  void _schedule() {
    _chain = _chain.then((_) => _apply()).catchError((Object _) {});
  }

  Future<void> _apply() async {
    if (disabled || _isTest) return;
    try {
      if (!_wired) {
        _wired = true;
        AudioGate.instance.addListener(_schedule);
      }
      final want = _want;
      if (want == null || AudioGate.instance.silenced || !_paths.containsKey(want)) {
        await _player?.pause();
        return;
      }
      final p = _player ??= JustAudioFilePlayer();
      if (_loaded != want) {
        await p.load(AssetAudio(_paths[want]!));
        await p.setLoop(true);
        await p.setVolume(_volume);
        _loaded = want;
      }
      await p.play();
    } catch (_) {
      // no audio device, blocked autoplay, a missing file: stay silent
    }
  }
}

/// True inside flutter_test (no timers or audio plugins there).
bool isTestBinding() => WidgetsBinding.instance.runtimeType.toString().contains('Test');

/// Watches the page's route (see [kHubRouteObserver], registered on the app's MaterialApp).
final RouteObserver<ModalRoute<void>> kHubRouteObserver = RouteObserver<ModalRoute<void>>();

/// Put around a page that wants a track ('home', 'fun', 'learn') or silence (track null, e.g. a game).
class HubMusicScope extends StatefulWidget {
  final String? track;
  final Widget child;
  const HubMusicScope({super.key, required this.track, required this.child});

  @override
  State<HubMusicScope> createState() => _HubMusicScopeState();
}

class _HubMusicScopeState extends State<HubMusicScope> with RouteAware {
  ModalRoute<void>? _route;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) HubMusic.instance.claim(this, widget.track);
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final r = ModalRoute.of(context);
    if (r != null && r != _route) {
      if (_route != null) kHubRouteObserver.unsubscribe(this);
      _route = r;
      kHubRouteObserver.subscribe(this, r);
    }
  }

  @override
  void didPopNext() => HubMusic.instance.claim(this, widget.track); // the page above was closed: we are on top again
  @override
  void didPushNext() => HubMusic.instance.release(this); // another page was opened above us

  @override
  void dispose() {
    kHubRouteObserver.unsubscribe(this);
    HubMusic.instance.release(this);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
