import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../journey/ui/quiz_view.dart' show ItemResult;
import '../library/learning_records.dart';
import '../library/lesson_engine.dart';
import '../library/lesson_runner.dart';
import '../media/audio.dart';
import 'exercises.dart';
import 'letters_data.dart';
import 'mastery.dart';
import 'tracing.dart';
import 'word_tiles.dart';

/// Updates the spaced-review state of every letter in [results]: a letter
/// moves up only if all of its questions in this session were right first time.
Future<void> recordLetterResults(String childId, List<ItemResult> results) async {
  final byLetter = <String, List<ItemResult>>{};
  for (final r in results) {
    final ref = r.ref;
    if (ref != null && ref.startsWith('letter:')) {
      byLetter.putIfAbsent(ref.substring(7), () => []).add(r);
    }
  }
  for (final e in byLetter.entries) {
    await LiteracyStore.record(childId, e.key, e.value.every((r) => r.ok));
  }
}

Color _boxColor(LetterState? s) {
  if (s == null) return Colors.white;
  if (s.mastered) return RC.mint;
  if (s.box >= 1) return RC.yellow.withAlpha(160);
  return RC.peach.withAlpha(160);
}

/// «تعلّم الحروف»: the letter grid, today's review and the next steps.
class LettersHomeScreen extends StatefulWidget {
  final ChildProfile child;
  const LettersHomeScreen({super.key, required this.child});

  @override
  State<LettersHomeScreen> createState() => _LettersHomeScreenState();
}

class _LettersHomeScreenState extends State<LettersHomeScreen> {
  Map<String, LetterState> _states = {};
  LiteracyConfig _cfg = const LiteracyConfig();
  List<String> _due = [];
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final states = await LiteracyStore.statesOf(widget.child.id);
    final cfg = await LiteracyStore.config();
    final due = await LiteracyStore.due(widget.child.id);
    if (!mounted) return;
    setState(() {
      _states = states;
      _cfg = cfg;
      _due = due;
      _loaded = true;
    });
  }

  Future<void> _open(Widget screen) async {
    await Navigator.push(context, MaterialPageRoute(builder: (_) => screen));
    if (mounted) _load();
  }

  @override
  Widget build(BuildContext context) {
    final unlocked = LiteracyStore.unlocked(_states, _cfg).map((l) => l.letter).toSet();
    final practised = _states.values.where((s) => s.box >= 1).length;
    final readingOpen = _cfg.unlockAll || practised >= 8;
    final wordsOpen = practised >= 3 || _cfg.unlockAll;
    final id = widget.child.id;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: const Text('تعلّم الحروف',
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: !_loaded
              ? const Center(child: CircularProgressIndicator())
              : ListView(
                  padding: const EdgeInsets.all(16),
                  children: [
                    Wrap(
                      spacing: 10,
                      runSpacing: 10,
                      alignment: WrapAlignment.center,
                      children: [
                        if (_due.isNotEmpty)
                          FilledButton.icon(
                            onPressed: () => _open(LessonRunnerScreen(
                              child: widget.child,
                              kind: LessonKind.pictureToWord,
                              title: 'مراجعة اليوم',
                              contentBuilder: () => QuizContent(reviewSession([
                                for (final l in _due) if (letterOf(l) != null) letterOf(l)!,
                              ])),
                              onResults: (r) => recordLetterResults(id, r),
                            )),
                            icon: const Icon(Icons.history_rounded),
                            label: Text('مراجعة اليوم (${_due.length})'),
                          ),
                        OutlinedButton.icon(
                          onPressed: wordsOpen
                              ? () => _open(_wordTiles(widget.child, _states, _cfg))
                              : null,
                          icon: const Icon(Icons.extension_rounded),
                          label: const Text('كوّن كلمات'),
                        ),
                        OutlinedButton.icon(
                          onPressed: readingOpen
                              ? () => _open(LessonRunnerScreen(
                                    child: widget.child,
                                    kind: LessonKind.wordToPicture,
                                    title: 'اقرأ وافهم',
                                    contentBuilder: () {
                                      final r = Random();
                                      return QuizContent([
                                        blendQuestion(r),
                                        readingQuestion(r),
                                        blendQuestion(r),
                                        readingQuestion(r),
                                      ]);
                                    },
                                  ))
                              : null,
                          icon: const Icon(Icons.menu_book_rounded),
                          label: const Text('اقرأ وافهم'),
                        ),
                      ],
                    ),
                    if (!wordsOpen || !readingOpen)
                      const Padding(
                        padding: EdgeInsets.only(top: 8),
                        child: Text(
                          'تُفتح «كوّن كلمات» بعد تدرّب 3 حروف، و«اقرأ وافهم» بعد 8 حروف (يمكن للأهل تغيير ذلك).',
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 14, color: RC.ink),
                        ),
                      ),
                    const SizedBox(height: 14),
                    Wrap(
                      spacing: 10,
                      runSpacing: 10,
                      alignment: WrapAlignment.center,
                      children: [
                        for (final l in letterOrder(_cfg.order))
                          SizedBox(
                            width: 72,
                            height: 84,
                            child: RCard(
                              color: unlocked.contains(l.letter) ? _boxColor(_states[l.letter]) : Colors.black12,
                              padding: EdgeInsets.zero,
                              semanticLabel: unlocked.contains(l.letter)
                                  ? 'حرف ${l.name}${_states[l.letter]?.mastered == true ? '، متقن' : ''}'
                                  : 'حرف ${l.name}، مقفل',
                              onTap: unlocked.contains(l.letter)
                                  ? () => _open(LetterLessonScreen(child: widget.child, letter: l))
                                  : null,
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  unlocked.contains(l.letter)
                                      ? Text(l.letter,
                                          style: const TextStyle(fontSize: 38, fontWeight: FontWeight.w900, color: RC.ink))
                                      : const Icon(Icons.lock_rounded, color: Colors.black38),
                                  Text(l.name, style: const TextStyle(fontSize: 12, color: RC.ink)),
                                ],
                              ),
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    const Text('أبيض: جديد · برتقالي: بداية · أصفر: تتدرّب · أخضر: أتقنته',
                        textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: RC.ink)),
                  ],
                ),
        ),
      ),
    );
  }
}

Widget _wordTiles(ChildProfile child, Map<String, LetterState> states, LiteracyConfig cfg) {
  final known = {
    for (final l in LiteracyStore.unlocked(states, cfg))
      for (final w in l.words)
        if (w.word.length >= 3 && w.word.length <= 5) w.word: w,
  }.values.toList()
    ..shuffle();
  final words = known.take(4).toList();
  return LessonRunnerScreen(
    child: child,
    kind: LessonKind.wordToPicture,
    title: 'كوّن الكلمة',
    customBuilder: (done) => WordTilesView(words: words, onFinished: done),
  );
}

/// One letter: its name, its sound, its forms, and words with pictures; then
/// the exercises.
class LetterLessonScreen extends StatefulWidget {
  final ChildProfile child;
  final ArabicLetter letter;
  const LetterLessonScreen({super.key, required this.child, required this.letter});

  @override
  State<LetterLessonScreen> createState() => _LetterLessonScreenState();
}

class _LetterLessonScreenState extends State<LetterLessonScreen> {
  @override
  void initState() {
    super.initState();
    // Looking at the lesson is exposure, not mastery.
    LearningRecords.add(widget.child.id, RecordType.letter, widget.letter.letter, Evidence.exposure);
  }

  Widget _form(String label, String glyph) => Column(
        children: [
          Text(glyph, style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w900, color: RC.ink)),
          Text(label, style: const TextStyle(fontSize: 12, color: RC.ink)),
        ],
      );

  @override
  Widget build(BuildContext context) {
    final l = widget.letter;
    final id = widget.child.id;
    Widget run(String title, ActivityContent Function() build) => LessonRunnerScreen(
          child: widget.child,
          kind: LessonKind.pictureToWord,
          title: title,
          contentBuilder: build,
          onResults: (r) => recordLetterResults(id, r),
        );
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text('حرف ${l.name}',
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              RCard(
                child: Column(
                  children: [
                    Semantics(
                      label: 'الحرف ${l.name}',
                      child: Text(l.letter,
                          style: const TextStyle(fontSize: 150, fontWeight: FontWeight.w900, color: RC.ink, height: 1.1)),
                    ),
                    Text('اسمه: ${l.name}', style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w800, color: RC.ink)),
                    Text('صوته: ${l.soundFatha}   ${l.soundDamma}   ${l.soundKasra}',
                        style: const TextStyle(fontSize: 24, color: RC.ink)),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 10,
                      alignment: WrapAlignment.center,
                      children: [
                        FilledButton.icon(
                          onPressed: () => AppAudio.say(l.name),
                          icon: const Icon(Icons.volume_up_rounded),
                          label: const Text('اسمع الاسم'),
                        ),
                        OutlinedButton.icon(
                          onPressed: () => AppAudio.say(l.soundFatha),
                          icon: const Icon(Icons.volume_up_rounded),
                          label: const Text('اسمع الصوت'),
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        _form('في النهاية', l.end),
                        _form('في الوسط', l.medial),
                        _form('في البداية', l.initial),
                        _form('منفصل', l.isolated),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              RCard(
                color: RC.yellow.withAlpha(110),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('كلمات فيها هذا الحرف',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                    const SizedBox(height: 6),
                    for (final (w, pos) in l.placedWords)
                      ListTile(
                        dense: true,
                        contentPadding: EdgeInsets.zero,
                        leading: Text(w.emoji, style: const TextStyle(fontSize: 36)),
                        title: Text(w.word, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800)),
                        subtitle: Text('${l.letter} ${pos.label}'),
                        trailing: IconButton(
                          tooltip: 'استمع إلى ${w.word}',
                          icon: const Icon(Icons.volume_up_rounded),
                          onPressed: () => AppAudio.say(w.word),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              Wrap(
                spacing: 10,
                runSpacing: 10,
                alignment: WrapAlignment.center,
                children: [
                  FilledButton.icon(
                    onPressed: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => run('تمرين حرف ${l.name}', () => QuizContent(letterSession(l)))),
                    ),
                    icon: const Icon(Icons.play_arrow_rounded),
                    label: const Text('تمرين الحرف'),
                  ),
                  OutlinedButton.icon(
                    onPressed: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => run('المقاطع', () {
                          final r = Random();
                          return QuizContent([syllableQuestion(l, r), syllableQuestion(l, r), blendQuestion(r)]);
                        }),
                      ),
                    ),
                    icon: const Icon(Icons.record_voice_over_rounded),
                    label: const Text('المقاطع'),
                  ),
                  OutlinedButton.icon(
                    onPressed: () {
                      final words = [for (final w in l.words) if (w.word.length >= 3 && w.word.length <= 5) w];
                      if (words.isEmpty) return;
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => LessonRunnerScreen(
                            child: widget.child,
                            kind: LessonKind.wordToPicture,
                            title: 'كوّن الكلمة',
                            customBuilder: (done) => WordTilesView(words: words.take(3).toList(), onFinished: done),
                          ),
                        ),
                      );
                    },
                    icon: const Icon(Icons.extension_rounded),
                    label: const Text('كوّن كلمة'),
                  ),
                  OutlinedButton.icon(
                    onPressed: () => Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => _TraceScreen(child: widget.child, letter: l)),
                    ),
                    icon: const Icon(Icons.draw_rounded),
                    label: const Text('تتبّع الحرف'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _TraceScreen extends StatelessWidget {
  final ChildProfile child;
  final ArabicLetter letter;
  const _TraceScreen({required this.child, required this.letter});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text('تتبّع حرف ${letter.name}',
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: TracingView(
            letter: letter,
            onDone: () async {
              // Tracing is practice; it never counts as mastery.
              await LearningRecords.add(child.id, RecordType.letter, letter.letter, Evidence.practice);
              if (context.mounted) Navigator.pop(context);
            },
          ),
        ),
      ),
    );
  }
}
