import 'dart:async';

import 'package:flutter/material.dart';

import '../../media/audio.dart';
import '../content.dart';
import '../models.dart';
import 'kit.dart';
import '../../l10n/strings.dart';

/// What one question, round or pair taught us (feeds the parent dashboard).
class ItemResult {
  final String skill;
  final bool ok; // right on the first try
  final String? detail;
  final String? ref; // e.g. "word:cat" or "letter:ب"
  const ItemResult(this.skill, this.ok, [this.detail, this.ref]);
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
  void initState() {
    super.initState();
    _speakFirst();
  }

  void _speakFirst() {
    final q = _q;
    if (q.speakFirst && q.spoken != null) AppAudio.say(q.spoken!, lang: q.spokenLang);
  }

  @override
  void dispose() {
    _timer?.cancel();
    AppAudio.stopSaying();
    super.dispose();
  }

  void _tap(int index) {
    if (_right || _faded.contains(index)) return;
    if (index == _q.correct) {
      _results.add(ItemResult(_q.skill, !_missed, _q.detail, _q.ref));
      setState(() {
        _right = true;
        _message = _q.explanation == null
            ? loc(_praise[_i % _praise.length])
            : '${loc(_praise[_i % _praise.length])}  ${loc(_q.explanation!)}';
      });
      _timer = Timer(const Duration(milliseconds: 1100), _next);
    } else {
      setState(() {
        _missed = true;
        _faded.add(index);
        _wrongCount++;
        _message = loc(_encourage[(_wrongCount - 1) % _encourage.length]);
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
    _speakFirst();
  }

  Widget _visual(Question q) {
    if (q.bigShape != null) return ShapeView(spec: q.bigShape!, size: 120);
    if (q.bigText != null) {
      return Directionality(
        textDirection: TextDirection.ltr,
        child: Text(loc(q.bigText!),
            style: const TextStyle(fontSize: 56, fontWeight: FontWeight.w900, color: RC.ink)),
      );
    }
    if (q.bigEmoji != null) {
      if (q.repeat > 1) {
        return Semantics(
          label: tr2('${q.repeat} أشياء', '${q.repeat} things'),
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
            Text(loc(o.caption!), style: const TextStyle(fontSize: 16, color: RC.ink)),
        ],
      );
    }
    return FittedBox(
      fit: BoxFit.scaleDown,
      child: Text(loc(o.text!),
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w800, color: RC.ink)),
    );
  }

  String _semantic(Option o) {
    if (o.color != null) return tr2('اللون ${colorNameOf(o.color!)}', 'Color ${colorNameOf(o.color!)}');
    if (o.shape != null) return tr2('شكل ${shapeNameOf(o.shape!.kind)}', 'Shape ${shapeNameOf(o.shape!.kind)}');
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
                  Flexible(flex: 2, child: Text(tr2('السؤال ${_i + 1} من $total', 'Question ${_i + 1} of $total'),
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
                  child: Text(loc(q.passage!),
                      style: const TextStyle(fontSize: 19, height: 1.7, color: RC.ink)),
                ),
                const SizedBox(height: 14),
              ],
              Semantics(header: true, child: Text(loc(q.prompt),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink))),
              if (q.spoken != null)
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: TextButton.icon(
                    onPressed: () => AppAudio.say(q.spoken!, lang: q.spokenLang),
                    icon: const Icon(Icons.volume_up_rounded, size: 30),
                    label: Text(loc('استمع'), style: TextStyle(fontSize: 20)),
                  ),
                ),
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
              if (_missed && !_right && q.math != null)
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: MathPicture(help: q.math!),
                ),
              if (_hint)
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: RCard(
                    color: RC.lavender.withAlpha(140),
                    child: Text('💡 ${loc(q.hint)}', style: const TextStyle(fontSize: 18, color: RC.ink)),
                  ),
                )
              else if (!_right)
                TextButton.icon(
                  onPressed: () => setState(() => _hint = true),
                  icon: const Icon(Icons.lightbulb_outline_rounded),
                  label: Text(loc('تلميح'), style: TextStyle(fontSize: 18)),
                ),
            ],
          ),
        ),
      ),
    );
  }
}


/// Draws a sum with objects: a + b as two groups, a - b with b crossed out,
/// a × b as a times-table grid. Shown after a wrong answer.
class MathPicture extends StatelessWidget {
  final MathHelp help;
  const MathPicture({super.key, required this.help});

  Widget _dots(int n, {int crossed = 0}) => Wrap(
        alignment: WrapAlignment.center,
        spacing: 4,
        runSpacing: 4,
        children: [
          for (var i = 0; i < n; i++)
            Opacity(
              opacity: i >= n - crossed ? 0.3 : 1,
              child: Text(i >= n - crossed ? '❌' : '🔵', style: const TextStyle(fontSize: 26)),
            ),
        ],
      );

  @override
  Widget build(BuildContext context) {
    final h = help;
    final Widget body;
    final String label;
    switch (h.op) {
      case '+':
        label = tr2('ضع ${h.a} مع ${h.b} واعدّ الكل', 'Put ${h.a} with ${h.b} and count them all');
        body = Wrap(
          alignment: WrapAlignment.center,
          crossAxisAlignment: WrapCrossAlignment.center,
          spacing: 10,
          runSpacing: 6,
          children: [
            SizedBox(width: 150, child: _dots(h.a)),
            const Text('+', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: RC.ink)),
            SizedBox(width: 150, child: _dots(h.b)),
          ],
        );
      case '-':
        label = tr2('عندنا ${h.a} وشطبنا ${h.b}، فكم بقي؟', 'We have ${h.a} and crossed out ${h.b}. How many are left?');
        body = _dots(h.a, crossed: h.b);
      default:
        label = tr2('${h.a} صفوف، في كل صف ${h.b}', '${h.a} rows, ${h.b} in each row');
        body = Column(
          children: [for (var i = 0; i < h.a; i++) _dots(h.b)],
        );
    }
    return RCard(
      color: RC.mint.withAlpha(150),
      child: Semantics(
        label: label,
        child: Column(
          children: [
            Text('🔍 $label',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: RC.ink)),
            const SizedBox(height: 8),
            body,
          ],
        ),
      ),
    );
  }
}
