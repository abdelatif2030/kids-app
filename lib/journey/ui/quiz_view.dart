import 'dart:async';

import 'package:flutter/material.dart';

import '../content.dart';
import '../models.dart';
import 'kit.dart';

/// What one question, round or pair taught us (feeds the parent dashboard).
class ItemResult {
  final String skill;
  final bool ok; // right on the first try
  final String? detail;
  const ItemResult(this.skill, this.ok, [this.detail]);
}

const _praise = ['أحسنت! 🎉', 'رائع! ⭐', 'ممتاز! 👏', 'برافو! 🌟'];
const _encourage = [
  'حاول مرة أخرى، أنت تستطيع! 💪',
  'قريب جداً! جرّب إجابة أخرى 🌈',
  'لا بأس، التجربة تعلّم 😊',
];

/// A multiple-choice activity. A wrong tap only fades that answer and gives a
/// kind message; after two misses (or on request) a hint appears. Nobody is
/// told they failed.
class QuizView extends StatefulWidget {
  final List<Question> questions;
  final void Function(List<ItemResult> results) onFinished;
  const QuizView({super.key, required this.questions, required this.onFinished});

  @override
  State<QuizView> createState() => _QuizViewState();
}

class _QuizViewState extends State<QuizView> {
  int _i = 0;
  final Set<int> _faded = {};
  bool _right = false;
  bool _missed = false;
  bool _hint = false;
  int _wrongCount = 0;
  String _message = '';
  final List<ItemResult> _results = [];
  Timer? _timer;

  Question get _q => widget.questions[_i];

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  void _tap(int index) {
    if (_right || _faded.contains(index)) return;
    if (index == _q.correct) {
      _results.add(ItemResult(_q.skill, !_missed, _q.detail));
      setState(() {
        _right = true;
        _message = _praise[_i % _praise.length];
      });
      _timer = Timer(const Duration(milliseconds: 1100), _next);
    } else {
      setState(() {
        _missed = true;
        _faded.add(index);
        _wrongCount++;
        _message = _encourage[(_wrongCount - 1) % _encourage.length];
        if (_wrongCount >= 2) _hint = true;
      });
    }
  }

  void _next() {
    if (!mounted) return;
    if (_i + 1 >= widget.questions.length) {
      widget.onFinished(_results);
      return;
    }
    setState(() {
      _i++;
      _faded.clear();
      _right = false;
      _missed = false;
      _hint = false;
      _wrongCount = 0;
      _message = '';
    });
  }

  Widget _visual(Question q) {
    if (q.bigShape != null) return ShapeView(spec: q.bigShape!, size: 120);
    if (q.bigText != null) {
      return Directionality(
        textDirection: TextDirection.ltr,
        child: Text(q.bigText!,
            style: const TextStyle(fontSize: 56, fontWeight: FontWeight.w900, color: RC.ink)),
      );
    }
    if (q.bigEmoji != null) {
      if (q.repeat > 1) {
        return Semantics(
          label: '${q.repeat} أشياء',
          excludeSemantics: true,
          child: Wrap(
            alignment: WrapAlignment.center,
            spacing: 6,
            runSpacing: 6,
            children: [for (var k = 0; k < q.repeat; k++) Text(q.bigEmoji!, style: const TextStyle(fontSize: 44))],
          ),
        );
      }
      return Text(q.bigEmoji!, style: const TextStyle(fontSize: 96));
    }
    return const SizedBox.shrink();
  }

  Widget _optionBody(Option o) {
    if (o.color != null) {
      return Container(
        width: 64,
        height: 64,
        decoration: BoxDecoration(
          color: Color(o.color!),
          shape: BoxShape.circle,
          border: Border.all(color: Colors.black26, width: 2),
        ),
      );
    }
    if (o.shape != null) return ShapeView(spec: o.shape!, size: 72);
    if (o.emoji != null) {
      return Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(o.emoji!, style: const TextStyle(fontSize: 46)),
          if (o.caption != null)
            Text(o.caption!, style: const TextStyle(fontSize: 16, color: RC.ink)),
        ],
      );
    }
    return FittedBox(
      fit: BoxFit.scaleDown,
      child: Text(o.text!,
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w800, color: RC.ink)),
    );
  }

  String _semantic(Option o) {
    if (o.color != null) return 'اللون ${colorNameOf(o.color!)}';
    if (o.shape != null) return 'شكل ${shapeNameOf(o.shape!.kind)}';
    return o.label;
  }

  @override
  Widget build(BuildContext context) {
    final q = _q;
    final total = widget.questions.length;
    final textOptions = q.options.every((o) => o.text != null);
    final longText = textOptions && q.options.any((o) => o.text!.length > 5);

    Widget tile(int idx) {
      final o = q.options[idx];
      final isRight = _right && idx == q.correct;
      final faded = _faded.contains(idx);
      return AnimatedOpacity(
        duration: motion(context, 250),
        opacity: faded ? 0.25 : 1,
        child: AnimatedScale(
          duration: motion(context, 250),
          scale: isRight ? 1.06 : 1,
          child: RCard(
            semanticLabel: _semantic(o),
            color: isRight ? RC.mint : RC.card,
            outline: isRight ? RC.good : RC.outline,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
            onTap: faded ? null : () => _tap(idx),
            child: Center(child: _optionBody(o)),
          ),
        ),
      );
    }

    final options = longText
        ? Column(
            children: [
              for (var idx = 0; idx < q.options.length; idx++)
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: SizedBox(width: double.infinity, child: tile(idx)),
                ),
            ],
          )
        : Wrap(
            alignment: WrapAlignment.center,
            spacing: 12,
            runSpacing: 12,
            children: [
              for (var idx = 0; idx < q.options.length; idx++)
                SizedBox(width: 150, height: 120, child: tile(idx)),
            ],
          );

    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 560),
          child: Column(
            children: [
              Row(
                children: [
                  Flexible(flex: 2, child: Text('السؤال ${_i + 1} من $total',
                      style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink))),
                  const SizedBox(width: 12),
                  Expanded(flex: 3, child: RProgress(value: (_i + (_right ? 1 : 0)) / total)),
                ],
              ),
              const SizedBox(height: 14),
              if (q.passage != null) ...[
                RCard(
                  color: RC.yellow.withAlpha(110),
                  outline: RC.star,
                  child: Text(q.passage!,
                      style: const TextStyle(fontSize: 19, height: 1.7, color: RC.ink)),
                ),
                const SizedBox(height: 14),
              ],
              Semantics(header: true, child: Text(q.prompt,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink))),
              const SizedBox(height: 12),
              _visual(q),
              const SizedBox(height: 18),
              options,
              const SizedBox(height: 14),
              Semantics(
                liveRegion: true,
                child: AnimatedSwitcher(
                  duration: motion(context, 200),
                  child: Text(
                    _message,
                    key: ValueKey(_message),
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w800,
                      color: _right ? RC.good : RC.pinkDeep,
                    ),
                  ),
                ),
              ),
              if (_hint)
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: RCard(
                    color: RC.lavender.withAlpha(140),
                    child: Text('💡 ${q.hint}', style: const TextStyle(fontSize: 18, color: RC.ink)),
                  ),
                )
              else if (!_right)
                TextButton.icon(
                  onPressed: () => setState(() => _hint = true),
                  icon: const Icon(Icons.lightbulb_outline_rounded),
                  label: const Text('تلميح', style: TextStyle(fontSize: 18)),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
