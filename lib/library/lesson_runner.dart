import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../journey/ui/memory_view.dart';
import '../journey/ui/quiz_view.dart';
import '../journey/ui/sequence_view.dart';
import '../progress_store.dart';
import '../rest_screen.dart';
import 'learning_records.dart';
import 'lesson_engine.dart';

/// Plays a lesson built by the engine and keeps the completion record:
/// skill events for the dashboard, and learning records that keep exposure,
/// practice and demonstrated understanding apart. A lesson gives no stars or
/// XP: those come only from finishing a level on the learning map.
class LessonRunnerScreen extends StatefulWidget {
  final ChildProfile child;
  final LessonKind kind;
  final String? category;
  final String title;

  /// Replaces the generated content (tests).
  final ActivityContent Function()? contentBuilder;

  /// Replaces the built-in views with a custom exercise (word tiles...). It
  /// must call `done` with its results.
  final Widget Function(void Function(List<ItemResult> results) done)? customBuilder;

  /// Called after the records are saved (letter mastery uses this).
  final Future<void> Function(List<ItemResult> results)? onResults;
  const LessonRunnerScreen({
    super.key,
    required this.child,
    required this.kind,
    this.category,
    this.title = '',
    this.contentBuilder,
    this.customBuilder,
    this.onResults,
  });

  @override
  State<LessonRunnerScreen> createState() => _LessonRunnerScreenState();
}

class _LessonRunnerScreenState extends State<LessonRunnerScreen> {
  late ActivityContent _content = widget.customBuilder != null ? const QuizContent([]) : _build();
  int _run = 0;
  List<ItemResult>? _results;

  ActivityContent _build() =>
      widget.contentBuilder?.call() ??
      buildVocabLesson(widget.kind, age: widget.child.age, category: widget.category);

  Future<void> _finish(List<ItemResult> results) async {
    final id = widget.child.id;
    final records = <LearningRecord>[];
    final today = dayOf(DateTime.now());
    for (final r in results) {
      await ProgressStore.record(r.skill, r.ok, detail: r.detail, childId: id);
      final ref = r.ref;
      if (ref != null && ref.contains(':')) {
        final type = ref.startsWith('letter:')
            ? RecordType.letter
            : ref.startsWith('story:')
                ? RecordType.story
                : RecordType.word;
        final key = ref.substring(ref.indexOf(':') + 1);
        records.add(LearningRecord(id, today, type, key, Evidence.practice));
        if (r.ok) records.add(LearningRecord(id, today, type, key, Evidence.demonstrated));
      }
    }
    records.add(LearningRecord(id, today, RecordType.lesson, '${widget.kind.name}:${widget.category ?? 'all'}',
        results.isNotEmpty && results.every((r) => r.ok) ? Evidence.demonstrated : Evidence.practice));
    await LearningRecords.addAll(records);
    await widget.onResults?.call(results);
    if (mounted) setState(() => _results = results);
  }

  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (!mounted) return;
    setState(() {
      if (widget.customBuilder == null) _content = _build();
      _run++;
      _results = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    final results = _results;
    final body = results != null
        ? _Done(
            right: results.where((r) => r.ok).length,
            total: results.length,
            onAgain: _again,
          )
        : widget.customBuilder != null
            ? KeyedSubtree(key: ValueKey(_run), child: widget.customBuilder!(_finish))
            : switch (_content) {
            QuizContent(:final questions) => QuizView(key: ValueKey(_run), questions: questions, onFinished: _finish),
            MemoryContent(:final emojis) => MemoryView(key: ValueKey(_run), emojis: emojis, onFinished: _finish),
            SequenceContent(:final rounds) => SequenceView(key: ValueKey(_run), rounds: rounds, onFinished: _finish),
          };
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(widget.title.isEmpty ? widget.kind.title : widget.title,
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(child: SafeArea(child: body)),
    );
  }
}

class _Done extends StatelessWidget {
  final int right;
  final int total;
  final VoidCallback onAgain;
  const _Done({required this.right, required this.total, required this.onAgain});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('✅', style: TextStyle(fontSize: 72)),
            const Text('أحسنت! أنهيت الدرس',
                style: TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: RC.ink)),
            const SizedBox(height: 6),
            if (total > 0)
              Text('أجبت $right من $total من أول محاولة',
                  style: const TextStyle(fontSize: 18, color: RC.ink)),
            const SizedBox(height: 20),
            FilledButton.icon(
              onPressed: onAgain,
              icon: const Icon(Icons.replay_rounded),
              label: const Text('درس جديد', style: TextStyle(fontSize: 20)),
            ),
            TextButton(
              onPressed: () => Navigator.maybePop(context),
              child: const Text('العودة', style: TextStyle(fontSize: 18)),
            ),
          ],
        ),
      ),
    );
  }
}
