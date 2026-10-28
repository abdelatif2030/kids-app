import 'dart:async';

import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../library/lesson_engine.dart';
import '../library/lesson_runner.dart';
import '../media/audio.dart';
import 'story_data.dart';
import 'story_models.dart';
import 'story_player.dart';
import 'story_store.dart';
import '../l10n/strings.dart';

String _mmss(int s) => '${(s ~/ 60).toString().padLeft(2, '0')}:${(s % 60).toString().padLeft(2, '0')}';

/// «ليلة حلوة»: the bedtime story library.
class StoriesHomeScreen extends StatefulWidget {
  final ChildProfile child;
  const StoriesHomeScreen({super.key, required this.child});

  @override
  State<StoriesHomeScreen> createState() => _StoriesHomeScreenState();
}

class _StoriesHomeScreenState extends State<StoriesHomeScreen> {
  StoryCategory? _category;
  bool _onlyFavorites = false;
  bool _allAges = false;
  Set<String> _favorites = {};
  Map<String, ResumePoint> _resume = {};
  List<ListenEntry> _history = [];
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final id = widget.child.id;
    final fav = await StoryStore.favorites(id);
    final hist = await StoryStore.history(id);
    final resume = <String, ResumePoint>{};
    for (final s in publishedStories()) {
      final r = await StoryStore.resumePoint(id, s.id);
      if (r != null) resume[s.id] = r;
    }
    if (!mounted) return;
    setState(() {
      _favorites = fav;
      _history = hist;
      _resume = resume;
      _loaded = true;
    });
  }

  Future<void> _open(Story s) async {
    await Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => StoryPlayerScreen(story: s, child: widget.child)),
    );
    if (mounted) _load();
  }

  @override
  Widget build(BuildContext context) {
    final stories = [
      for (final s in publishedStories())
        if ((_category == null || s.category == _category) &&
            (!_onlyFavorites || _favorites.contains(s.id)) &&
            (_allAges || s.fitsAge(widget.child.age)))
          s,
    ];
    final resumable = [for (final s in publishedStories()) if (_resume.containsKey(s.id)) s];
    return Scaffold(
      backgroundColor: RC.bg,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('ليلة حلوة 🌙'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: !_loaded
              ? const Center(child: CircularProgressIndicator())
              : ListView(
                  padding: const EdgeInsets.all(16),
                  children: [
                    if (resumable.isNotEmpty) ...[
                      Text(loc('تابع من حيث توقفت'),
                          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                      const SizedBox(height: 6),
                      for (final s in resumable)
                        RCard(
                          color: RC.lavender.withAlpha(160),
                          onTap: () => _open(s),
                          semanticLabel: tr2('تابع ${s.title}', 'Continue ${loc(s.title)}'),
                          child: Row(
                            children: [
                              Text(s.cover, style: const TextStyle(fontSize: 34)),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Text(loc(s.title),
                                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
                              ),
                              const Icon(Icons.play_circle_fill_rounded, size: 36, color: RC.outline),
                            ],
                          ),
                        ),
                      const SizedBox(height: 12),
                    ],
                    Wrap(
                      spacing: 8,
                      runSpacing: 4,
                      children: [
                        ChoiceChip(
                          label: Text(loc('الكل')),
                          selected: _category == null && !_onlyFavorites,
                          onSelected: (_) => setState(() {
                            _category = null;
                            _onlyFavorites = false;
                          }),
                        ),
                        ChoiceChip(
                          label: Text(loc('❤️ المفضلة')),
                          selected: _onlyFavorites,
                          onSelected: (v) => setState(() => _onlyFavorites = v),
                        ),
                        for (final c in StoryCategory.values)
                          ChoiceChip(
                            label: Text('${c.emoji} ${loc(c.title)}'),
                            selected: _category == c,
                            onSelected: (v) => setState(() => _category = v ? c : null),
                          ),
                      ],
                    ),
                    Material(
                      type: MaterialType.transparency,
                      child: CheckboxListTile(
                        dense: true,
                        value: _allAges,
                        onChanged: (v) => setState(() => _allAges = v ?? false),
                        title: Text(loc('إظهار قصص كل الأعمار')),
                      ),
                    ),
                    if (stories.isEmpty)
                      Padding(
                        padding: const EdgeInsets.all(24),
                        child: Text(
                          _onlyFavorites
                              ? loc('لا توجد قصص مفضلة بعد. اضغط على القلب في أي قصة لتضيفها هنا.')
                              : loc('لا توجد قصص مناسبة لهذا الاختيار. جرّب «إظهار قصص كل الأعمار».'),
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 17, color: RC.ink),
                        ),
                      ),
                    for (final s in stories)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: _StoryCard(
                          story: s,
                          favorite: _favorites.contains(s.id),
                          onTap: () => _open(s),
                          onFavorite: () async {
                            await StoryStore.toggleFavorite(widget.child.id, s.id);
                            _load();
                          },
                        ),
                      ),
                    if (_history.isNotEmpty) ...[
                      const SizedBox(height: 8),
                      Text(loc('سمعتُ مؤخراً'),
                          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                      for (final h in _history.reversed.take(5))
                        if (storyById(h.storyId) != null)
                          ListTile(
                            dense: true,
                            leading: Text(storyById(h.storyId)!.cover, style: const TextStyle(fontSize: 26)),
                            title: Text(loc(storyById(h.storyId)!.title)),
                            subtitle: Text(tr2('${h.day} · ${h.completed ? loc('أكملتها') : loc('لم تكتمل')}', '${h.day} · ${h.completed ? 'finished' : 'not finished'}')),
                          ),
                    ],
                  ],
                ),
        ),
      ),
    );
  }
}

class _StoryCard extends StatelessWidget {
  final Story story;
  final bool favorite;
  final VoidCallback onTap;
  final VoidCallback onFavorite;
  const _StoryCard({required this.story, required this.favorite, required this.onTap, required this.onFavorite});

  @override
  Widget build(BuildContext context) {
    final minutes = (story.estimatedSeconds / 60).ceil();
    return RCard(
      onTap: onTap,
      semanticLabel: tr2('${story.title}، ${story.description}، نحو $minutes دقائق', '${loc(story.title)}, ${loc(story.description)}, about $minutes minutes'),
      child: Row(
        children: [
          Container(
            width: 72,
            height: 72,
            alignment: Alignment.center,
            decoration: BoxDecoration(color: Color(story.coverColor), borderRadius: BorderRadius.circular(18)),
            child: Text(story.cover, style: const TextStyle(fontSize: 40)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(loc(story.title), style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: RC.ink)),
                Text(loc(story.description), style: const TextStyle(fontSize: 14, color: RC.ink)),
                const SizedBox(height: 4),
                Text(
                  tr2('≈ $minutes د · ${story.minAge}–${story.maxAge} سنة · ${story.isDeviceVoice ? loc('صوت آلي تجريبي') : loc('تسجيل')}', '≈ $minutes min · ages ${story.minAge}–${story.maxAge} · ${story.isDeviceVoice ? 'demo device voice' : 'recording'}'),
                  style: const TextStyle(fontSize: 12, color: RC.ink),
                ),
              ],
            ),
          ),
          IconButton(
            tooltip: favorite ? loc('إزالة من المفضلة') : loc('إضافة إلى المفضلة'),
            onPressed: onFavorite,
            icon: Icon(favorite ? Icons.favorite_rounded : Icons.favorite_border_rounded,
                color: favorite ? RC.pinkDeep : RC.ink),
          ),
        ],
      ),
    );
  }
}

/// The player: transcript, controls, sleep timer, ambient sound and a
/// voice-only mode that dims everything.
class StoryPlayerScreen extends StatefulWidget {
  final Story story;
  final ChildProfile child;

  /// Replaces the controller (tests).
  final StoryPlayerController? controller;
  const StoryPlayerScreen({super.key, required this.story, required this.child, this.controller});

  @override
  State<StoryPlayerScreen> createState() => _StoryPlayerScreenState();
}

class _StoryPlayerScreenState extends State<StoryPlayerScreen> {
  late final StoryPlayerController _c =
      widget.controller ?? StoryPlayerController(widget.story, childId: widget.child.id);
  bool _favorite = false;
  bool _voiceOnly = false;

  @override
  void initState() {
    super.initState();
    _c.init().then((_) async {
      final fav = await StoryStore.favorites(widget.child.id);
      if (!mounted) return;
      setState(() => _favorite = fav.contains(widget.story.id));
      if (AudioPrefs.instance.ambient != 'none') _c.setAmbient(AudioPrefs.instance.ambient);
    });
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  Future<void> _sleepMenu() async {
    final picked = await showModalBottomSheet<int>(
      context: context,
      builder: (context) => SafeArea(
        child: ListView(
          shrinkWrap: true,
          children: [
            ListTile(title: Text(loc('مؤقّت النوم'), style: TextStyle(fontWeight: FontWeight.bold))),
            for (final m in StoryPlayerController.sleepChoices)
              ListTile(title: Text(tr2('بعد $m دقيقة', 'After $m minutes')), onTap: () => Navigator.pop(context, m)),
            ListTile(title: Text(loc('عند نهاية القصة')), onTap: () => Navigator.pop(context, -1)),
            ListTile(title: Text(loc('إيقاف المؤقّت')), onTap: () => Navigator.pop(context, 0)),
          ],
        ),
      ),
    );
    if (picked == null) return;
    if (picked == 0) {
      _c.cancelSleepTimer();
    } else if (picked == -1) {
      _c.sleepAtEndOfStory();
    } else {
      _c.startSleepTimer(picked);
    }
  }

  Future<void> _ambientMenu() async {
    final picked = await showModalBottomSheet<String>(
      context: context,
      builder: (context) => SafeArea(
        child: ListView(
          shrinkWrap: true,
          children: [
            ListTile(title: Text(loc('صوت الطبيعة في الخلفية'), style: TextStyle(fontWeight: FontWeight.bold))),
            for (final e in kAmbientSounds.entries)
              ListTile(
                title: Text(loc(e.value.$1)),
                trailing: _c.ambient == e.key ? const Icon(Icons.check_rounded) : null,
                onTap: () => Navigator.pop(context, e.key),
              ),
          ],
        ),
      ),
    );
    if (picked != null) await _c.setAmbient(picked);
  }

  void _quiz() {
    final s = widget.story;
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => LessonRunnerScreen(
          child: widget.child,
          kind: LessonKind.pictureToWord,
          title: tr2('أسئلة عن «${s.title}»', 'Questions about “${loc(s.title)}”'),
          contentBuilder: () => QuizContent([for (final q in s.questions) q.withRef('story:${s.id}')]),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: _c,
      builder: (context, _) => _voiceOnly ? _dimmed(context) : _full(context),
    );
  }

  Widget _controls(BuildContext context, {bool large = false}) {
    final unavailable = _c.state == PlayState.unavailable || _c.state == PlayState.loading;
    final canSeek = _c.canSeek && !unavailable;
    final dur = _c.durationSec;
    final pos = _c.positionSec.clamp(0, dur == 0 ? 1 : dur);
    return Column(
      children: [
        Directionality(
          textDirection: TextDirection.ltr,
          child: Column(
            children: [
              Slider(
                value: dur == 0 ? 0 : pos.toDouble(),
                max: dur == 0 ? 1 : dur.toDouble(),
                onChanged: canSeek ? (v) => _c.seekTo(v.round()) : null,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(_mmss(pos), semanticsLabel: tr2('مضى ${_mmss(pos)}', 'Elapsed ${_mmss(pos)}')),
                    Text('-${_mmss(_c.remainingSec)}', semanticsLabel: tr2('المتبقي ${_mmss(_c.remainingSec)}', 'Remaining ${_mmss(_c.remainingSec)}')),
                  ],
                ),
              ),
            ],
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            IconButton(
              tooltip: loc('رجوع 15 ثانية'),
              iconSize: 40,
              onPressed: canSeek ? () => _c.skip(-StoryPlayerController.skipSeconds) : null,
              icon: const Icon(Icons.replay_10_rounded),
            ),
            const SizedBox(width: 8),
            IconButton.filled(
              tooltip: _c.playing ? loc('إيقاف مؤقت') : (_c.hasResume ? loc('تابع') : loc('تشغيل')),
              iconSize: large ? 72 : 56,
              onPressed: unavailable || _c.state == PlayState.waitingChoice ? null : _c.toggle,
              icon: Icon(_c.playing ? Icons.pause_rounded : Icons.play_arrow_rounded),
            ),
            const SizedBox(width: 8),
            IconButton(
              tooltip: loc('تقدّم 15 ثانية'),
              iconSize: 40,
              onPressed: canSeek ? () => _c.skip(StoryPlayerController.skipSeconds) : null,
              icon: const Icon(Icons.forward_10_rounded),
            ),
          ],
        ),
      ],
    );
  }

  Widget _dimmed(BuildContext context) {
    final r = _c.sleepRemaining;
    return Scaffold(
      backgroundColor: const Color(0xFF05060F),
      body: SafeArea(
        child: Theme(
          data: ThemeData.dark(useMaterial3: true).copyWith(
            textTheme: ThemeData.dark().textTheme.apply(fontFamily: 'Tajawal', bodyColor: Colors.white54),
            iconButtonTheme: IconButtonThemeData(style: IconButton.styleFrom(foregroundColor: Colors.white60)),
          ),
          child: Column(
            children: [
              Align(
                alignment: AlignmentDirectional.topStart,
                child: TextButton.icon(
                  onPressed: () => setState(() => _voiceOnly = false),
                  icon: const Icon(Icons.visibility_rounded),
                  label: Text(loc('عرض النص')),
                ),
              ),
              const Spacer(),
              Text(widget.story.cover, style: const TextStyle(fontSize: 64)),
              const SizedBox(height: 8),
              Text(loc(widget.story.title), style: const TextStyle(fontSize: 22, color: Colors.white54)),
              if (r != null) Text('⏳ ${_mmss(r)}', style: const TextStyle(fontSize: 18, color: Colors.white38)),
              if (_c.sleepEnded)
                Padding(
                  padding: EdgeInsets.all(12),
                  child: Text(loc('تصبح على خير 🌙'), style: TextStyle(fontSize: 24, color: Colors.white54)),
                ),
              const SizedBox(height: 16),
              _controls(context, large: true),
              const Spacer(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _full(BuildContext context) {
    final s = widget.story;
    final r = _c.sleepRemaining;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc(s.title), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
        actions: [
          IconButton(
            tooltip: _favorite ? loc('إزالة من المفضلة') : loc('إضافة إلى المفضلة'),
            onPressed: () async {
              final added = await StoryStore.toggleFavorite(widget.child.id, s.id);
              setState(() => _favorite = added);
            },
            icon: Icon(_favorite ? Icons.favorite_rounded : Icons.favorite_border_rounded),
          ),
        ],
      ),
      body: PastelBackground(
        child: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.all(16),
                  children: [
                    Center(
                      child: Container(
                        width: 120,
                        height: 120,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: Color(s.coverColor), borderRadius: BorderRadius.circular(28)),
                        child: Text(s.cover, style: const TextStyle(fontSize: 70)),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(loc(s.description),
                        textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, color: RC.ink)),
                    Padding(
                      padding: const EdgeInsets.only(top: 6),
                      child: Text(
                        tr2('الراوي: ${s.narrator}\n${s.themes.join(' · ')}', 'Narrator: ${loc(s.narrator)}\n${s.themes.map(loc).join(' · ')}'),
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 13, color: RC.ink),
                      ),
                    ),
                    if (s.isDeviceVoice)
                      Padding(
                        padding: EdgeInsets.only(top: 8),
                        child: RCard(
                          color: Color(0xFFFFF3C4),
                          child: Text(
                            loc('تُقرأ القصة بصوت الجهاز الآلي كنسخة تجريبية. لم تُضف تسجيلات حقيقية بعد.'),
                            style: TextStyle(fontSize: 14, color: RC.ink),
                          ),
                        ),
                      ),
                    if (_c.state == PlayState.unavailable)
                      Padding(
                        padding: const EdgeInsets.only(top: 8),
                        child: RCard(
                          color: RC.peach.withAlpha(180),
                          child: Row(
                            children: [
                              const Icon(Icons.volume_off_rounded, color: RC.ink),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(_c.message ?? loc('التشغيل غير متاح'),
                                    style: const TextStyle(fontSize: 15, color: RC.ink)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    if (_c.hasResume)
                      Padding(
                        padding: const EdgeInsets.only(top: 8),
                        child: Text(tr2('توقفتَ عند ${_mmss(_c.positionSec)}، اضغط تشغيل للمتابعة', 'You stopped at ${_mmss(_c.positionSec)}. Press play to continue'),
                            textAlign: TextAlign.center, style: const TextStyle(fontSize: 15, color: RC.ink)),
                      ),
                    const SizedBox(height: 12),
                    Text(loc('النص'),
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                    for (var i = 0; i < s.chapters.length; i++)
                      if (!s.branching || i == _c.chapterIndex)
                        Padding(
                          padding: const EdgeInsets.only(top: 8),
                          child: RCard(
                            color: i == _c.chapterIndex ? RC.yellow.withAlpha(120) : RC.card,
                            outline: i == _c.chapterIndex ? RC.star : RC.outline,
                            onTap: s.branching || _c.state == PlayState.unavailable ? null : () => _c.jumpToChapter(i),
                            semanticLabel: tr2('الفصل ${i + 1}: ${s.chapters[i].title}', 'Chapter ${i + 1}: ${loc(s.chapters[i].title)}'),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(loc(s.chapters[i].title),
                                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: RC.ink)),
                                const SizedBox(height: 4),
                                Text(s.chapters[i].text,
                                    style: const TextStyle(fontSize: 18, height: 1.8, color: RC.ink)),
                              ],
                            ),
                          ),
                        ),
                    if (_c.state == PlayState.waitingChoice)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: Column(
                          children: [
                            Text(loc('ماذا تختار؟'),
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                            for (final ch in _c.chapter.choices)
                              Padding(
                                padding: const EdgeInsets.only(top: 8),
                                child: SizedBox(
                                  width: double.infinity,
                                  child: FilledButton(
                                    onPressed: () => _c.choose(ch),
                                    child: Text(loc(ch.label), style: const TextStyle(fontSize: 18)),
                                  ),
                                ),
                              ),
                          ],
                        ),
                      ),
                    if (_c.state == PlayState.completed)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: RCard(
                          color: RC.mint.withAlpha(150),
                          child: Column(
                            children: [
                              Text(
                                _c.sleepEnded ? loc('تصبح على خير 🌙') : loc('انتهت القصة 🌙'),
                                style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink),
                              ),
                              Text(loc('لن تبدأ قصة أخرى تلقائياً.'), style: TextStyle(fontSize: 14, color: RC.ink)),
                              const SizedBox(height: 8),
                              Wrap(
                                spacing: 8,
                                children: [
                                  if (s.questions.isNotEmpty)
                                    FilledButton.icon(
                                      onPressed: _quiz,
                                      icon: const Icon(Icons.quiz_rounded),
                                      label: Text(loc('أسئلة عن القصة')),
                                    ),
                                  OutlinedButton(onPressed: _c.play, child: Text(loc('اسمعها مرة أخرى'))),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Container(
                decoration: const BoxDecoration(
                  color: Colors.white,
                  border: Border(top: BorderSide(color: RC.outline, width: 2)),
                ),
                child: Column(
                  children: [
                    _controls(context),
                    Wrap(
                      alignment: WrapAlignment.center,
                      spacing: 6,
                      children: [
                        PopupMenuButton<double>(
                          tooltip: loc('سرعة القراءة'),
                          onSelected: _c.setSpeed,
                          itemBuilder: (_) => [
                            for (final v in StoryPlayerController.speeds)
                              PopupMenuItem(value: v, child: Text(v == 1.0 ? loc('عادية') : '${v}x')),
                          ],
                          child: Chip(label: Text(tr2('السرعة ${_c.speed}x', 'Speed ${_c.speed}x'))),
                        ),
                        ActionChip(
                          avatar: const Icon(Icons.bedtime_rounded, size: 18),
                          label: Text(r != null ? '⏳ ${_mmss(r)}' : (_c.sleepAtEnd ? loc('عند النهاية') : loc('مؤقّت النوم'))),
                          onPressed: _sleepMenu,
                        ),
                        ActionChip(
                          avatar: const Icon(Icons.water_drop_rounded, size: 18),
                          label: Text(_c.ambient == 'none' ? loc('صوت الطبيعة') : loc(kAmbientSounds[_c.ambient]!.$1)),
                          onPressed: _ambientMenu,
                        ),
                        ActionChip(
                          avatar: const Icon(Icons.nights_stay_rounded, size: 18),
                          label: Text(loc('وضع الصوت فقط')),
                          onPressed: () => setState(() => _voiceOnly = true),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
