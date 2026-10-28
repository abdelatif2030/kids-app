import 'package:flutter/material.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

import 'main.dart' show Video;
import 'session_manager.dart';
import 'watch_history.dart';
import 'l10n/strings.dart';

class PlayerScreen extends StatefulWidget {
  final Video video;
  const PlayerScreen({super.key, required this.video});

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
        // `true` tells "Today's plan" the child finished this video.
        _close(true);
      } else if (_session.reason.value != null &&
          value.playerState == PlayerState.paused) {
        // Time is up: let a playing video finish, but don't stay paused forever.
        _close();
      }
    });
    _session.reason.addListener(_onTimeUp);
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
    _watch.stop();
    WatchHistory.record(
      videoId: widget.video.youtubeId,
      title: widget.video.title,
      seconds: _watch.elapsed.inSeconds,
      completed: _completed,
    );
    _controller.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.video.title)),
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
            : YoutubePlayer(
                controller: _controller,
                aspectRatio: 16 / 9,
                autoFullScreen: false,
                enableFullScreenOnVerticalDrag: false,
              ),
      ),
    );
  }
}
