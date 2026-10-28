import 'package:flutter/material.dart';

import '../../main.dart' show Video;
import '../../progress_store.dart';
import '../content.dart';
import '../home_tasks.dart';
import '../lands.dart';
import '../models.dart';
import 'kit.dart';
import 'quiz_view.dart';
import '../../l10n/strings.dart';

/// Which land's questions fit a video subject (null: no quiz, only the task).
String? landForSubject(String subject) => switch (subject) {
      'arabic' => 'letters',
      'math' => 'numbers',
      'english' => 'english',
      'discover' => 'colors',
      'stories' => 'stories',
      _ => null,
    };

/// A task topic for a video subject.
String taskTopicFor(String subject) => switch (subject) {
      'arabic' => 'letters',
      'math' => 'numbers',
      'english' => 'english',
      'discover' => 'colors',
      'stories' => 'stories',
      'science' => 'science',
      'drawing' => 'drawing',
      'deen' || 'quran' => 'deen',
      _ => 'general',
    };

/// After a lesson video: watch (done) -> try (3 quick questions, when the
/// subject has some) -> apply (a real-world task for the parent to confirm)
/// -> progress (skills recorded). No stars: those come from finishing an
/// activity on the map, and the questions here do not unlock levels.
class LessonFlowScreen extends StatefulWidget {
  final Video video;
  final ChildProfile child;
  const LessonFlowScreen({super.key, required this.video, required this.child});

  @override
  State<LessonFlowScreen> createState() => _LessonFlowScreenState();
}

class _LessonFlowScreenState extends State<LessonFlowScreen> {
  late final List<Question> _questions = _build();
  int _step = 0; // 0 try, 1 apply
  HomeTask? _task;
  int _right = 0;

  List<Question> _build() {
    final land = landForSubject(widget.video.subject);
    if (land == null) return const [];
    final content = buildContent(
      Activity(land, 1, ActivityKind.quiz),
      age: widget.child.age,
      bias: widget.child.bias,
    );
    return content is QuizContent ? content.questions.take(3).toList() : const [];
  }

  @override
  void initState() {
    super.initState();
    if (_questions.isEmpty) _toApply(null);
  }

  Future<void> _toApply(List<ItemResult>? results) async {
    if (results != null) {
      _right = results.where((r) => r.ok).length;
      for (final r in results) {
        await ProgressStore.record(r.skill, r.ok, detail: r.detail, childId: widget.child.id);
      }
    }
    final task = await HomeTasks.suggest(widget.child.id, taskTopicFor(widget.video.subject));
    if (!mounted) return;
    setState(() {
      _task = task;
      _step = 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    final steps = _questions.isEmpty ? [loc('طبّق')] : [loc('جرّب'), loc('طبّق')];
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('درس الفيديو'), style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
        leading: IconButton(
          tooltip: loc('إغلاق'),
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.maybePop(context),
        ),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
                child: Wrap(
                  alignment: WrapAlignment.center,
                  spacing: 8,
                  children: [
                    Chip(label: Text(loc('✅ شاهدت'))),
                    for (var i = 0; i < steps.length; i++)
                      Chip(
                        backgroundColor: (_questions.isEmpty ? _step == 1 : i == _step) ? RC.yellow : null,
                        label: Text(steps[i]),
                      ),
                  ],
                ),
              ),
              Expanded(
                child: _step == 0 && _questions.isNotEmpty
                    ? QuizView(questions: _questions, onFinished: _toApply)
                    : _Apply(task: _task, right: _questions.isEmpty ? null : _right, total: _questions.length),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _Apply extends StatelessWidget {
  final HomeTask? task;
  final int? right;
  final int total;
  const _Apply({required this.task, required this.right, required this.total});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: Column(
            children: [
              if (right != null) ...[
                Text('أجبت $right من $total من أول محاولة 👏',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 14),
              ],
              RCard(
                color: RC.yellow.withAlpha(120),
                outline: RC.star,
                child: Column(
                  children: [
                    Text(loc('🏠 طبّق مع ماما وبابا'),
                        style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                    const SizedBox(height: 8),
                    Text(task?.text ?? '...',
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 19, height: 1.6, color: RC.ink)),
                    const SizedBox(height: 8),
                    Text(loc('بعد أن تفعلها، ليضغط أحد الوالدين «تم» في إعدادات الوالدين.'),
                        textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: RC.ink)),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => Navigator.maybePop(context),
                  child: Text(loc('تم، رجوع'), style: TextStyle(fontSize: 20)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
