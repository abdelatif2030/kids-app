import 'package:flutter/material.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

import 'main.dart' show Video;
import 'related_video.dart';
import 'session_manager.dart';
import 'watch_history.dart';
import 'l10n/strings.dart';

class PlayerScreen extends StatefulWidget {
  final Video video;

  /// Whitelisted videos for the child's age. When given, a related video plays after this one ends
  /// (never after the daily time is up, and never in "today's plan", which has its own order).
  final List<Video>? related;

  /// Updated with the video that is playing, so the caller knows which one was watched last.
  final ValueNotifier<Video>? current;
  const PlayerScreen({super.key, required this.video, this.related, this.current});

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
    if (related == null || _closing || _session.reason.value != null) return false;
    if (_switching) return true;
    final next = pickRelatedVideo(_video, related, {..._played, _video.youtubeId});
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

  void _recordCurrent() {
    _watch.stop();
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
    if (state != PlayerState.playing && state != PlayerState.buffering) _close();
  }

  @override
  void dispose() {
    _session.reason.removeListener(_onTimeUp);
    _recordCurrent();
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
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
            ? Padding(
                padding: EdgeInsets.all(24),
                child: Text(
                  loc('لا يمكن تشغيل هذا الفيديو الآن.'),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 24),
                ),
              )
            : LayoutBuilder(
                builder: (context, box) {
                  // The largest 16:9 box that fits both the width and the height, so the video is never wider
                  // than the screen or taller than the space under the title.
                  final w = box.maxWidth.isFinite && box.maxHeight.isFinite
                      ? (box.maxWidth < box.maxHeight * 16 / 9 ? box.maxWidth : box.maxHeight * 16 / 9)
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
}
