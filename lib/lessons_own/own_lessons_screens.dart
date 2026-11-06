import 'dart:async';

import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../l10n/strings.dart';
import '../rest_screen.dart';
import '../session_manager.dart';
import 'own_lessons.dart';

const _ink = Color(0xFF3A2A6E);
const _purple = Color(0xFF5B2BB8);

/// «دروس الفيديو»: the owner's own lesson videos. Big thumbnail cards, one row of category tabs, and a calm message when
/// there is nothing to show (not connected yet, no internet, or no videos). The age of the child filters the list.
class OwnLessonsScreen extends StatefulWidget {
  final ChildProfile child;

  /// Start on one category (for example `songs`).
  final String? category;

  /// Tests: load from here instead of [OwnLessons.load].
  final Future<LessonsResult> Function()? loader;
  const OwnLessonsScreen({super.key, required this.child, this.category, this.loader});

  @override
  State<OwnLessonsScreen> createState() => _OwnLessonsScreenState();
}

class _OwnLessonsScreenState extends State<OwnLessonsScreen> {
  late Future<LessonsResult> _future = (widget.loader ?? OwnLessons.load)();
  late String? _category = widget.category;
  final _session = SessionManager.instance;

  @override
  void initState() {
    super.initState();
    _session.reason.addListener(_checkRest);
  }

  @override
  void dispose() {
    _session.reason.removeListener(_checkRest);
    super.dispose();
  }

  /// Acts only while this list is the visible screen, so a video that is playing always finishes first.
  void _checkRest() {
    final reason = _session.reason.value;
    if (reason == null || !mounted) return;
    if (ModalRoute.of(context)?.isCurrent != true) return;
    goToRest(context, reason);
  }

  void _retry() => setState(() {
        _future = (widget.loader ?? OwnLessons.load)();
      });

  Future<void> _play(List<OwnLesson> list, int index) async {
    await Navigator.push<void>(context, MaterialPageRoute<void>(builder: (_) => OwnLessonPlayer(playlist: list, index: index)));
    if (mounted) _checkRest();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Colors.white,
        centerTitle: true,
        title: Text(tr2('دروس الفيديو', 'Video lessons'), style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 26, color: Colors.white, shadows: [Shadow(color: Color(0x88000000), blurRadius: 6)])),
      ),
      body: PictureBackdrop(
        child: SafeArea(
          child: FutureBuilder<LessonsResult>(
            future: _future,
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) {
                return const Center(child: CircularProgressIndicator(key: ValueKey('lessons_loading'), color: Colors.white));
              }
              final r = snap.data ?? const LessonsResult(LessonsState.failed, []);
              switch (r.state) {
                case LessonsState.notConnected:
                  return _Message(keyName: 'lessons_not_connected', icon: Icons.cloud_off_rounded, title: tr2('الفيديوهات قادمة قريباً', 'Videos are coming soon'), text: tr2('سنضيف هنا دروس الفيديو قريباً.', 'Video lessons will appear here soon.'));
                case LessonsState.failed:
                  return _Message(keyName: 'lessons_failed', icon: Icons.wifi_off_rounded, title: tr2('لا يوجد اتصال', 'No connection'), text: tr2('تحتاج الدروس إلى الإنترنت. تحقق من الاتصال وحاول مرة أخرى.', 'The lessons need the internet. Check your connection and try again.'), onRetry: _retry);
                case LessonsState.empty:
                  return _Message(keyName: 'lessons_empty', icon: Icons.video_library_outlined, title: tr2('لا توجد دروس بعد', 'No lessons yet'), text: tr2('سنضيف الدروس هنا قريباً.', 'We will add lessons here soon.'));
                case LessonsState.ready:
                  break;
              }
              final forAge = [for (final l in r.lessons) if (l.fitsAge(widget.child.age)) l];
              if (forAge.isEmpty) {
                return _Message(keyName: 'lessons_empty', icon: Icons.video_library_outlined, title: tr2('لا توجد دروس لعمرك بعد', 'No lessons for this age yet'), text: tr2('سنضيف الدروس هنا قريباً.', 'We will add lessons here soon.'));
              }
              final cats = [for (final c in kLessonCategories) if (forAge.any((l) => l.category == c)) c];
              final selected = _category != null && cats.contains(_category) ? _category : null;
              final shown = selected == null ? forAge : [for (final l in forAge) if (l.category == selected) l];
              return Column(
                children: [
                  if (cats.length > 1)
                    SizedBox(
                      height: 56,
                      child: ListView(
                        key: const ValueKey('lesson_chips'),
                        scrollDirection: Axis.horizontal,
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                        children: [
                          _Chip(keyName: 'chip_all', label: tr2('الكل', 'All'), count: forAge.length, on: selected == null, onTap: () => setState(() => _category = null)),
                          for (final c in cats) _Chip(keyName: 'chip_$c', label: '${lessonCategoryEmoji(c)} ${lessonCategoryLabel(c)}', count: forAge.where((l) => l.category == c).length, on: selected == c, onTap: () => setState(() => _category = c)),
                        ],
                      ),
                    ),
                  if (r.fromCache)
                    Container(
                      key: const ValueKey('lessons_cached'),
                      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(color: Colors.white.withAlpha(225), borderRadius: BorderRadius.circular(14)),
                      child: Text(tr2('لا يوجد اتصال الآن: هذه القائمة المحفوظة.', 'No connection right now: this is the saved list.'), style: const TextStyle(fontSize: 13, color: _ink, fontWeight: FontWeight.w700)),
                    ),
                  Expanded(
                    child: GridView.builder(
                      key: const ValueKey('lesson_grid'),
                      padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
                      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 300, mainAxisSpacing: 16, crossAxisSpacing: 16, childAspectRatio: 1.12),
                      itemCount: shown.length,
                      itemBuilder: (context, i) => _LessonCard(lesson: shown[i], onTap: () => _play(shown, i)),
                    ),
                  ),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}

class _Chip extends StatelessWidget {
  final String keyName;
  final String label;
  final int count;
  final bool on;
  final VoidCallback onTap;
  const _Chip({required this.keyName, required this.label, required this.count, required this.on, required this.onTap});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsetsDirectional.only(end: 8),
        child: FocusableTap(
          key: ValueKey(keyName),
          radius: 24,
          selected: on,
          semanticLabel: '$label ($count)',
          onTap: onTap,
          child: Container(
            alignment: Alignment.center,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              color: on ? _purple : Colors.white.withAlpha(235),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: on ? Colors.white : _purple, width: 2),
              boxShadow: const [BoxShadow(color: Color(0x33000000), blurRadius: 4, offset: Offset(0, 2))],
            ),
            child: Text('$label  $count', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: on ? Colors.white : _purple)),
          ),
        ),
      );
}

class _LessonCard extends StatelessWidget {
  final OwnLesson lesson;
  final VoidCallback onTap;
  const _LessonCard({required this.lesson, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      key: ValueKey('lesson_${lesson.id}'),
      radius: 22,
      semanticLabel: '${lesson.title}, ${lesson.durationLabel}',
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(22),
          boxShadow: const [BoxShadow(color: Color(0x44000000), blurRadius: 8, offset: Offset(0, 4))],
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            AspectRatio(
              aspectRatio: 16 / 9,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  ColoredBox(
                    color: const Color(0xFFE6DAFB),
                    child: ExcludeSemantics(
                      child: Image.network(
                        lesson.poster.toString(),
                        fit: BoxFit.cover,
                        loadingBuilder: (c, child, p) => p == null ? child : const Center(child: Icon(Icons.image_rounded, color: Color(0xFFB9A4EA), size: 36)),
                        errorBuilder: (_, _, _) => const Center(child: Icon(Icons.movie_rounded, color: Color(0xFFB9A4EA), size: 44)),
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                      width: 52,
                      height: 52,
                      decoration: BoxDecoration(color: _purple.withAlpha(215), shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 3)),
                      child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 36),
                    ),
                  ),
                  if (lesson.durationSec > 0)
                    PositionedDirectional(
                      bottom: 6,
                      end: 6,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(color: Colors.black.withAlpha(170), borderRadius: BorderRadius.circular(10)),
                        child: Text(lesson.durationLabel, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w800)),
                      ),
                    ),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: Align(
                  alignment: AlignmentDirectional.centerStart,
                  child: Text(lesson.title, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, height: 1.25, fontWeight: FontWeight.w900, color: _ink)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Message extends StatelessWidget {
  final String keyName;
  final IconData icon;
  final String title;
  final String text;
  final VoidCallback? onRetry;
  const _Message({required this.keyName, required this.icon, required this.title, required this.text, this.onRetry});

  @override
  Widget build(BuildContext context) => Center(
        child: SingleChildScrollView(
          child: Container(
            key: ValueKey(keyName),
            margin: const EdgeInsets.all(24),
            padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 22),
            constraints: const BoxConstraints(maxWidth: 460),
            decoration: BoxDecoration(color: Colors.white.withAlpha(235), borderRadius: BorderRadius.circular(28), border: Border.all(color: const Color(0xFF8A52E8), width: 3)),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, size: 56, color: _purple),
              const SizedBox(height: 10),
              Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: _ink)),
              const SizedBox(height: 6),
              Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 17, color: _ink)),
              if (onRetry != null) ...[
                const SizedBox(height: 14),
                FilledButton.icon(key: const ValueKey('lessons_retry'), onPressed: onRetry, icon: const Icon(Icons.refresh_rounded), label: Text(tr2('حاول مرة أخرى', 'Try again'))),
              ],
            ]),
          ),
        ),
      );
}

/// Plays one lesson (and can go to the next or the previous one in the list). Big play/pause, a seek bar, replay at the
/// end. A playing video is never cut off by the daily limit; a paused or finished one closes when the time is up.
class OwnLessonPlayer extends StatefulWidget {
  final List<OwnLesson> playlist;
  final int index;
  const OwnLessonPlayer({super.key, required this.playlist, required this.index});

  @override
  State<OwnLessonPlayer> createState() => _OwnLessonPlayerState();
}

class _OwnLessonPlayerState extends State<OwnLessonPlayer> {
  VideoPlayerController? _c;
  late int _i = widget.index;
  bool _failed = false;
  bool _closing = false;
  final _session = SessionManager.instance;

  OwnLesson get _lesson => widget.playlist[_i];

  @override
  void initState() {
    super.initState();
    _session.reason.addListener(_timeUp);
    _open();
  }

  Future<void> _open() async {
    final old = _c;
    setState(() {
      _c = null;
      _failed = false;
    });
    old?.removeListener(_tick);
    unawaited(old?.dispose());
    try {
      final c = VideoPlayerController.networkUrl(_lesson.video, videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true));
      _c = c;
      await c.initialize().timeout(const Duration(seconds: 20));
      if (!mounted || _c != c) return;
      c.addListener(_tick);
      setState(() {});
      try {
        await c.play();
      } catch (_) {
        await c.setVolume(0); // a browser that refuses sound before a tap: start muted, the child can tap to continue
        await c.play();
      }
    } catch (_) {
      if (mounted) setState(() => _failed = true);
    }
  }

  void _tick() {
    if (!mounted) return;
    setState(() {});
    final v = _c?.value;
    if (v != null && v.hasError) setState(() => _failed = true);
    if (_session.reason.value != null && v != null && !v.isPlaying) _timeUp();
  }

  /// Time is up: a playing video finishes first; once it is paused or has ended the player closes.
  void _timeUp() {
    if (_closing || !mounted || _session.reason.value == null) return;
    final v = _c?.value;
    if (v != null && v.isPlaying && !v.isCompleted) return;
    _closing = true;
    Navigator.of(context).maybePop();
  }

  @override
  void dispose() {
    _session.reason.removeListener(_timeUp);
    _c?.removeListener(_tick);
    _c?.dispose();
    super.dispose();
  }

  void _go(int delta) {
    final n = _i + delta;
    if (n < 0 || n >= widget.playlist.length) return;
    setState(() => _i = n);
    _open();
  }

  String _t(Duration d) => '${d.inMinutes}:${(d.inSeconds % 60).toString().padLeft(2, '0')}';

  @override
  Widget build(BuildContext context) {
    final c = _c;
    final v = c?.value;
    final ready = v != null && v.isInitialized;
    final ended = ready && v.duration > Duration.zero && v.position >= v.duration;
    return Scaffold(
      backgroundColor: const Color(0xFF1B1238),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        elevation: 0,
        title: Text(_lesson.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.white)),
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: Center(
                child: _failed
                    ? Padding(
                        key: const ValueKey('player_failed'),
                        padding: const EdgeInsets.all(24),
                        child: Column(mainAxisSize: MainAxisSize.min, children: [
                          const Icon(Icons.wifi_off_rounded, color: Colors.white, size: 56),
                          const SizedBox(height: 10),
                          Text(tr2('تعذّر تشغيل الفيديو. تحقق من الإنترنت.', 'The video could not play. Check the internet.'), textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 18)),
                          const SizedBox(height: 14),
                          FilledButton.icon(key: const ValueKey('player_retry'), onPressed: _open, icon: const Icon(Icons.refresh_rounded), label: Text(tr2('حاول مرة أخرى', 'Try again'))),
                        ]),
                      )
                    : !ready
                        ? const CircularProgressIndicator(key: ValueKey('player_loading'), color: Colors.white)
                        : GestureDetector(
                            key: const ValueKey('player_surface'),
                            behavior: HitTestBehavior.opaque,
                            onTap: () => v.isPlaying ? c.pause() : c.play(),
                            child: AspectRatio(
                              aspectRatio: v.aspectRatio == 0 ? 16 / 9 : v.aspectRatio,
                              child: Stack(
                                fit: StackFit.expand,
                                children: [
                                  VideoPlayer(c!),
                                  if (!v.isPlaying)
                                    Center(
                                      child: Container(
                                        width: 84,
                                        height: 84,
                                        decoration: BoxDecoration(color: _purple.withAlpha(220), shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 4)),
                                        child: Icon(ended ? Icons.replay_rounded : Icons.play_arrow_rounded, color: Colors.white, size: 58),
                                      ),
                                    ),
                                ],
                              ),
                            ),
                          ),
              ),
            ),
            if (ready)
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 14),
                child: Directionality(
                  textDirection: TextDirection.ltr, // a video timeline always runs left to right
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Row(children: [
                      Text(_t(v.position), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                      Expanded(
                        child: Slider(
                          key: const ValueKey('player_seek'),
                          value: v.position.inMilliseconds.clamp(0, v.duration.inMilliseconds == 0 ? 1 : v.duration.inMilliseconds).toDouble(),
                          max: (v.duration.inMilliseconds == 0 ? 1 : v.duration.inMilliseconds).toDouble(),
                          activeColor: const Color(0xFFB98CFF),
                          inactiveColor: Colors.white24,
                          onChanged: (x) => c!.seekTo(Duration(milliseconds: x.round())),
                        ),
                      ),
                      Text(_t(v.duration), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                    ]),
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      IconButton(key: const ValueKey('player_prev'), iconSize: 40, color: Colors.white, tooltip: tr2('السابق', 'Previous'), onPressed: _i > 0 ? () => _go(-1) : null, icon: const Icon(Icons.skip_previous_rounded)),
                      const SizedBox(width: 12),
                      IconButton(
                        key: const ValueKey('player_play'),
                        iconSize: 56,
                        color: Colors.white,
                        tooltip: v.isPlaying ? tr2('إيقاف مؤقت', 'Pause') : (ended ? tr2('إعادة', 'Replay') : tr2('تشغيل', 'Play')),
                        onPressed: () async {
                          if (ended) await c!.seekTo(Duration.zero);
                          v.isPlaying ? await c!.pause() : await c!.play();
                        },
                        icon: Icon(v.isPlaying ? Icons.pause_circle_filled_rounded : (ended ? Icons.replay_circle_filled_rounded : Icons.play_circle_fill_rounded)),
                      ),
                      const SizedBox(width: 12),
                      IconButton(key: const ValueKey('player_next'), iconSize: 40, color: Colors.white, tooltip: tr2('التالي', 'Next'), onPressed: _i < widget.playlist.length - 1 ? () => _go(1) : null, icon: const Icon(Icons.skip_next_rounded)),
                    ]),
                  ]),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
