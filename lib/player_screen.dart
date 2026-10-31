import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

import 'main.dart' show Video, kLandscapeOrientations;
import 'related_video.dart';
import 'session_manager.dart';
import 'watch_history.dart';
import 'l10n/strings.dart';
import 'safe_player.dart';
import 'offline/connectivity.dart';

class PlayerScreen extends StatefulWidget {
  final Video video;

  /// Whitelisted videos for the child's age. When given, a related video plays after this one ends
  /// (never after the daily time is up, and never in "today's plan", which has its own order).
  final List<Video>? related;

  /// Updated with the video that is playing, so the caller knows which one was watched last.
  final ValueNotifier<Video>? current;

  /// A parent previewing a lesson: nothing is added to the watch history.
  final bool preview;
  const PlayerScreen({
    super.key,
    required this.video,
    this.related,
    this.current,
    this.preview = false,
  });

  @override
  State<PlayerScreen> createState() => _PlayerScreenState();
}

class _PlayerScreenState extends State<PlayerScreen> {
  final _session = SessionManager.instance;
  late final YoutubePlayerController _controller;
  bool _hasError = false;
  bool _closing = false;
  bool _completed = false;
  final _watch = Stopwatch();
  late Video _video = widget.video;
  final Set<String> _played = {};

  @override
  void initState() {
    super.initState();
    _controller = YoutubePlayerController.fromVideoId(
      videoId: widget.video.youtubeId,
      autoPlay: true,
      params: const YoutubePlayerParams(
        showFullscreenButton: false,
        strictRelatedVideos: true,
        enableKeyboard: false,
        interfaceLanguage: 'ar',
        captionLanguage: 'ar',
        loop: false,
      ),
    );
    applyChildSafeNavigation(_controller); // see safe_player.dart: no other video, no link out
    _controller.listen((value) {
      if (!mounted) return;
      // Count only the time the video is actually playing.
      if (value.playerState == PlayerState.playing) {
        if (!_watch.isRunning) _watch.start();
      } else {
        _watch.stop();
      }
      if (value.playerState == PlayerState.ended) _completed = true;
      if (value.hasError && !_hasError) {
        setState(() => _hasError = true);
      } else if (value.playerState == PlayerState.ended) {
        if (!_playNext()) {
          // `true` tells "Today's plan" the child finished this video.
          _close(true);
        }
      } else if (_session.reason.value != null &&
          value.playerState == PlayerState.paused) {
        // Time is up: let a playing video finish, but don't stay paused forever.
        _close();
      }
    });
    _session.reason.addListener(_onTimeUp);
  }

  /// Starts the related video in the same player. Not when time is up (the child goes to rest), not without a
  /// related video, and only once per ended video (the player may report "ended" twice).
  bool _playNext() {
    final related = widget.related;
    if (related == null || _closing || _session.reason.value != null) {
      return false;
    }
    if (_switching) return true;
    final next = pickRelatedVideo(_video, related, {
      ..._played,
      _video.youtubeId,
    });
    if (next == null) return false;
    _switching = true;
    _recordCurrent();
    _played.add(_video.youtubeId);
    _controller.loadVideoById(videoId: next.youtubeId);
    widget.current?.value = next;
    setState(() => _video = next);
    // The new video reports "playing" soon after; until then ignore a repeated "ended".
    Future<void>.delayed(const Duration(seconds: 2), () => _switching = false);
    return true;
  }

  bool _switching = false;
  bool _rotated = false;

  /// On a phone a 16:9 video in portrait leaves most of the screen empty. So the player turns the phone to
  /// landscape and uses the whole screen; leaving the player puts everything back. Not on the web or tablets.
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_rotated || kIsWeb) return;
    if (MediaQuery.sizeOf(context).shortestSide >= 600) return;
    _rotated = true;
    SystemChrome.setPreferredOrientations(const [
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
  }

  void _recordCurrent() {
    _watch.stop();
    if (widget.preview) {
      _watch.reset();
      return;
    }
    WatchHistory.record(
      videoId: _video.youtubeId,
      title: _video.title,
      seconds: _watch.elapsed.inSeconds,
      completed: _completed,
    );
    _watch.reset();
    _completed = false;
  }

  /// The player can report "ended" more than once; only pop a single time.
  void _close([bool? finished]) {
    if (_closing || !mounted) return;
    _closing = true;
    Navigator.of(context).maybePop(finished);
  }

  Future<void> _onTimeUp() async {
    if (_session.reason.value == null || !mounted) return;
    final state = await _controller.playerState;
    if (state != PlayerState.playing && state != PlayerState.buffering) {
      _close();
    }
  }

  @override
  void dispose() {
    _session.reason.removeListener(_onTimeUp);
    _recordCurrent();
    _controller.close();
    if (_rotated) {
      // Back to the app's normal landscape lock (an empty list would allow portrait).
      SystemChrome.setPreferredOrientations(kLandscapeOrientations);
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    // Phone turned sideways: the video fills the whole screen, with a back button over the corner.
    final fullScreen = _rotated && size.width > size.height;
    if (fullScreen) return _fullScreen(context);
    return Scaffold(
      appBar: AppBar(title: Text(_video.title)),
      bottomNavigationBar: ValueListenableBuilder<RestReason?>(
        valueListenable: _session.reason,
        builder: (context, reason, _) => reason == null
            ? const SizedBox.shrink()
            : SafeArea(
                child: Padding(
                  padding: EdgeInsets.all(12),
                  child: Text(
                    loc('هذا آخر فيديو اليوم'),
                    textAlign: TextAlign.center,
                    textDirection: TextDirection.rtl,
                    style: TextStyle(fontSize: 20),
                  ),
                ),
              ),
      ),
      body: Center(
        child: _hasError
            ? _problem(context)
            : LayoutBuilder(
                builder: (context, box) {
                  // The largest 16:9 box that fits both the width and the height, so the video is never wider
                  // than the screen or taller than the space under the title.
                  final w = box.maxWidth.isFinite && box.maxHeight.isFinite
                      ? (box.maxWidth < box.maxHeight * 16 / 9
                            ? box.maxWidth
                            : box.maxHeight * 16 / 9)
                      : box.maxWidth;
                  return SizedBox(
                    key: const Key('player-box'),
                    width: w,
                    height: w * 9 / 16,
                    child: ClipRect(
                      // The video frame is always laid out left-to-right, whatever the page direction.
                      child: Directionality(
                        textDirection: TextDirection.ltr,
                        child: YoutubePlayer(
                          controller: _controller,
                          aspectRatio: 16 / 9,
                          autoFullScreen: false,
                          enableFullScreenOnVerticalDrag: false,
                        ),
                      ),
                    ),
                  );
                },
              ),
      ),
    );
  }

  void _retry() {
    setState(() => _hasError = false);
    try {
      _controller.loadVideoById(videoId: _video.youtubeId);
    } catch (_) {
      setState(() => _hasError = true);
    }
  }

  /// The video cannot be played: no network, or YouTube refused it (removed, private, not embeddable). Says so kindly,
  /// offers to try again and to go back, and never suggests another video.
  Widget _problem(BuildContext context) {
    final offline = ConnectivityMonitor.instance.isOffline;
    return SingleChildScrollView(
      key: const ValueKey('player_problem'),
      padding: const EdgeInsets.all(24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(offline ? Icons.wifi_off_rounded : Icons.videocam_off_rounded, size: 56, color: Colors.black54),
          const SizedBox(height: 12),
          Text(
            offline
                ? tr2('لا يوجد إنترنت الآن. الفيديو يحتاج إلى إنترنت.', 'There is no internet right now. Videos need internet.')
                : tr2('هذا الفيديو غير متاح الآن.', 'This video is not available right now.'),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 22),
          ),
          const SizedBox(height: 16),
          Wrap(
            spacing: 12,
            runSpacing: 8,
            alignment: WrapAlignment.center,
            children: [
              FilledButton.icon(key: const ValueKey('player_retry'), style: FilledButton.styleFrom(minimumSize: const Size(140, 52)), onPressed: _retry, icon: const Icon(Icons.refresh_rounded), label: Text(tr2('حاول مرة أخرى', 'Try again'))),
              OutlinedButton.icon(key: const ValueKey('player_back'), style: OutlinedButton.styleFrom(minimumSize: const Size(140, 52)), onPressed: () => _close(), icon: const Icon(Icons.arrow_back_rounded), label: Text(tr2('رجوع', 'Back'))),
            ],
          ),
        ],
      ),
    );
  }

  Widget _fullScreen(BuildContext context) {
    return Scaffold(
      key: const Key('player-fullscreen'),
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          Positioned.fill(
            child: _hasError
                ? _problem(context)
                : Directionality(
                    textDirection: TextDirection.ltr,
                    child: YoutubePlayer(
                      controller: _controller,
                      aspectRatio: 16 / 9,
                      autoFullScreen: false,
                      enableFullScreenOnVerticalDrag: false,
                    ),
                  ),
          ),
          PositionedDirectional(
            top: 4,
            start: 4,
            child: SafeArea(
              child: IconButton.filled(
                tooltip: tr2('رجوع', 'Back'),
                style: IconButton.styleFrom(
                  backgroundColor: Colors.black54,
                  foregroundColor: Colors.white,
                  minimumSize: const Size(52, 52),
                ),
                icon: const Icon(Icons.arrow_back_rounded),
                onPressed: () => Navigator.of(context).maybePop(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
