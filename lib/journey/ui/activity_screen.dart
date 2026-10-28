import 'package:flutter/material.dart';

import '../../progress_store.dart';
import '../../rest_screen.dart';
import '../../ui.dart' show Mascot;
import '../content.dart';
import '../home_tasks.dart';
import '../lands.dart';
import '../models.dart';
import '../repository.dart';
import 'kit.dart';
import 'memory_view.dart';
import 'quiz_view.dart';
import 'sequence_view.dart';
import '../../l10n/strings.dart';

class _Outcome {
  final int stars;
  final int total;
  final int firstTry;
  final int xpGain;
  final List<BadgeDef> newBadges;
  final List<Accessory> newAccessories;
  const _Outcome(this.stars, this.total, this.firstTry, this.xpGain, this.newBadges, this.newAccessories);
}

/// Plays one level and records the result. Works for every kind of activity:
/// quiz, memory and sequence.
class ActivityScreen extends StatefulWidget {
  final Activity activity;
  final ChildProfile child;

  /// Replaces the generated content (used by tests to know the right answers).
  final ActivityContent Function()? contentBuilder;
  const ActivityScreen({super.key, required this.activity, required this.child, this.contentBuilder});

  @override
  State<ActivityScreen> createState() => _ActivityScreenState();
}

class _ActivityScreenState extends State<ActivityScreen> {
  late ActivityContent _content = _build();
  int _run = 0;
  final Stopwatch _watch = Stopwatch()..start();
  _Outcome? _outcome;
  HomeTask? _task;

  ActivityContent _build() => widget.contentBuilder?.call() ?? buildContent(
        widget.activity,
        age: widget.child.age,
        bias: widget.child.bias,
        custom: JourneyStore.instance.custom,
      );

  Future<void> _finish(List<ItemResult> results) async {
    final store = JourneyStore.instance;
    final id = widget.child.id;
    final before = store.progressOf(id);
    final firstTry = results.where((r) => r.ok).length;
    final stars = starsFor(results.length, firstTry);
    await store.recordAttempt(Attempt(
      childId: id,
      activityId: widget.activity.id,
      day: dayKeyOf(DateTime.now()),
      total: results.length,
      firstTry: firstTry,
      seconds: _watch.elapsed.inSeconds,
      stars: stars,
    ));
    for (final r in results) {
      await ProgressStore.record(r.skill, r.ok, detail: r.detail, childId: id);
    }
    final task = await HomeTasks.suggest(id, widget.activity.landId);
    final after = store.progressOf(id);
    final hadBadges = before.badges.map((b) => b.id).toSet();
    final hadAccessories = before.accessories.map((a) => a.id).toSet();
    if (!mounted) return;
    setState(() {
      _task = task;
      _outcome = _Outcome(
        stars,
        results.length,
        firstTry,
        after.xp - before.xp,
        [for (final b in after.badges) if (!hadBadges.contains(b.id)) b],
        [for (final a in after.accessories) if (!hadAccessories.contains(a.id)) a],
      );
    });
  }

  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (!mounted) return;
    setState(() {
      _content = _build();
      _run++;
      _outcome = null;
      _task = null;
      _watch
        ..reset()
        ..start();
    });
  }

  Future<void> _playNext(Activity next) async {
    if (await restIfTimeUp(context)) return;
    if (!mounted) return;
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (_) => ActivityScreen(activity: next, child: widget.child)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final a = widget.activity;
    final content = switch (_content) {
      QuizContent(:final questions) =>
        QuizView(key: ValueKey(_run), questions: questions, onFinished: _finish),
      MemoryContent(:final emojis) =>
        MemoryView(key: ValueKey(_run), emojis: emojis, onFinished: _finish),
      SequenceContent(:final rounds) =>
        SequenceView(key: ValueKey(_run), rounds: rounds, onFinished: _finish),
    };
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        leading: IconButton(
          tooltip: loc('إغلاق'),
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.maybePop(context),
        ),
        title: Text(a.kindLabel,
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: _outcome == null
              ? content
              : _Completion(
                  outcome: _outcome!,
                  activity: a,
                  child: widget.child,
                  task: _task,
                  onAgain: _again,
                  onNext: a.level < kLevelsPerLand ? () => _playNext(activitiesOf(a.landId)[a.level]) : null,
                ),
        ),
      ),
    );
  }
}

class _Completion extends StatelessWidget {
  final _Outcome outcome;
  final Activity activity;
  final ChildProfile child;
  final HomeTask? task;
  final VoidCallback onAgain;
  final VoidCallback? onNext;
  const _Completion({
    required this.outcome,
    required this.activity,
    required this.child,
    required this.task,
    required this.onAgain,
    required this.onNext,
  });

  String get _title => switch (outcome.stars) {
        3 => 'ممتاز يا ${child.nickname}! نجوم كاملة 🌟',
        2 => 'رائع يا ${child.nickname}! أحسنت 👏',
        _ => 'أحسنت يا ${child.nickname}! أكملت المغامرة 🎉',
      };

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(20, 4, 20, 20),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: Column(
            children: [
              Mascot(size: 96, accessory: child.accessory),
              const SizedBox(height: 8),
              Semantics(
                label: '${outcome.stars} من 3 نجوم',
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (var i = 0; i < 3; i++)
                      TweenAnimationBuilder<double>(
                        tween: Tween(begin: 0, end: 1),
                        duration: motion(context, 350 + i * 250),
                        curve: Curves.elasticOut,
                        builder: (_, v, _) => Transform.scale(
                          scale: v,
                          child: Icon(
                            i < outcome.stars ? Icons.star_rounded : Icons.star_outline_rounded,
                            size: 56,
                            color: i < outcome.stars ? RC.star : RC.outline.withAlpha(110),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Text(_title,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink)),
              const SizedBox(height: 4),
              Text('أجبت ${outcome.firstTry} من ${outcome.total} من أول محاولة',
                  style: const TextStyle(fontSize: 18, color: RC.ink)),
              if (outcome.stars < 3)
                Padding(
                  padding: EdgeInsets.only(top: 6),
                  child: Text(loc('جرّب مرة أخرى لتحصل على نجوم أكثر!'),
                      style: TextStyle(fontSize: 16, color: RC.ink)),
                ),
              const SizedBox(height: 12),
              if (outcome.xpGain > 0)
                Chip(
                  backgroundColor: RC.yellow,
                  label: Text('+${outcome.xpGain} نقطة خبرة',
                      style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                ),
              for (final b in outcome.newBadges)
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: RCard(
                    color: RC.lavender,
                    child: Row(
                      children: [
                        Text(b.emoji, style: const TextStyle(fontSize: 36)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text('شارة جديدة: ${b.title}',
                              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
                        ),
                      ],
                    ),
                  ),
                ),
              for (final a in outcome.newAccessories)
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: RCard(
                    color: RC.peach,
                    child: Row(
                      children: [
                        Text(a.emoji, style: const TextStyle(fontSize: 36)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text('فتحتَ ${a.name} لشخصيتك! ستجدها في «أنا»',
                              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
                        ),
                      ],
                    ),
                  ),
                ),
              if (task != null)
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: RCard(
                    color: RC.yellow.withAlpha(120),
                    outline: RC.star,
                    child: Column(
                      children: [
                        Text(loc('🏠 مهمة مع ماما وبابا'),
                            style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: RC.ink)),
                        const SizedBox(height: 4),
                        Text(task!.text,
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontSize: 16, height: 1.5, color: RC.ink)),
                      ],
                    ),
                  ),
                ),
              const SizedBox(height: 20),
              if (onNext != null)
                SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: onNext,
                    icon: const Icon(Icons.arrow_back_rounded),
                    label: Text(loc('المستوى التالي'), style: TextStyle(fontSize: 20)),
                  ),
                ),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton.icon(
                  onPressed: onAgain,
                  icon: const Icon(Icons.replay_rounded),
                  label: Text(loc('العب تاني'), style: TextStyle(fontSize: 20)),
                ),
              ),
              TextButton(
                onPressed: () => Navigator.maybePop(context),
                child: Text(loc('العودة'), style: TextStyle(fontSize: 18)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
