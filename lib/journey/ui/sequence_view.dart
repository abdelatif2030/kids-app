import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import '../models.dart';
import 'kit.dart';
import 'quiz_view.dart';

/// Put the steps in the right order by tapping them one after another. A wrong
/// tap only shakes the message ("try another one"); after two misses the next
/// right card is highlighted.
class SequenceView extends StatefulWidget {
  final List<SequenceRound> rounds;
  final void Function(List<ItemResult> results) onFinished;
  const SequenceView({super.key, required this.rounds, required this.onFinished});

  @override
  State<SequenceView> createState() => _SequenceViewState();
}

class _SequenceViewState extends State<SequenceView> {
  int _r = 0;
  late List<int> _order; // pool position -> step index
  final List<int> _placed = []; // step indexes already placed, in order
  bool _missed = false;
  int _wrong = 0;
  bool _hint = false;
  String _message = '';
  final List<ItemResult> _results = [];
  Timer? _timer;

  SequenceRound get _round => widget.rounds[_r];

  @override
  void initState() {
    super.initState();
    _shuffle();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  void _shuffle() {
    final n = _round.steps.length;
    final r = Random();
    List<int> order;
    do {
      order = ([for (var i = 0; i < n; i++) i]..shuffle(r));
    } while (order.length > 1 && [for (var i = 0; i < n; i++) i].toString() == order.toString());
    _order = order;
  }

  void _tap(int step) {
    if (_placed.contains(step)) return;
    if (step == _placed.length) {
      setState(() {
        _placed.add(step);
        _hint = false;
        _message = _placed.length == _round.steps.length ? 'أحسنت! رتّبتها كلها 🎉' : 'صحيح! والخطوة التالية؟';
      });
      if (_placed.length == _round.steps.length) {
        _results.add(ItemResult('sequence', !_missed));
        _timer = Timer(const Duration(milliseconds: 1200), _next);
      }
    } else {
      setState(() {
        _missed = true;
        _wrong++;
        _message = 'جرّب بطاقة أخرى، فكّر ماذا يحدث أولاً 🌈';
        if (_wrong >= 2) _hint = true;
      });
    }
  }

  void _next() {
    if (!mounted) return;
    if (_r + 1 >= widget.rounds.length) {
      widget.onFinished(_results);
      return;
    }
    setState(() {
      _r++;
      _placed.clear();
      _missed = false;
      _wrong = 0;
      _hint = false;
      _message = '';
      _shuffle();
    });
  }

  @override
  Widget build(BuildContext context) {
    final steps = _round.steps;
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 560),
          child: Column(
            children: [
              Row(
                children: [
                  Text('الجولة ${_r + 1} من ${widget.rounds.length}',
                      style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                  const SizedBox(width: 12),
                  Expanded(
                    child: RProgress(
                      value: (_r + _placed.length / steps.length) / widget.rounds.length,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              Semantics(
                header: true,
                child: Text('رتّب الخطوات: ${_round.title}',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink)),
              ),
              const SizedBox(height: 14),
              for (var slot = 0; slot < steps.length; slot++)
                Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: RCard(
                    semanticLabel: slot < _placed.length
                        ? 'الخطوة ${slot + 1}: ${steps[_placed[slot]]}'
                        : 'مكان الخطوة ${slot + 1} فارغ',
                    color: slot < _placed.length ? RC.mint : Colors.white.withAlpha(160),
                    outline: slot < _placed.length ? RC.good : RC.outline.withAlpha(120),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    child: Row(
                      children: [
                        CircleAvatar(
                          radius: 16,
                          backgroundColor: slot < _placed.length ? RC.good : RC.lavender,
                          child: Text('${slot + 1}',
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            slot < _placed.length ? steps[_placed[slot]] : '',
                            style: const TextStyle(fontSize: 20, color: RC.ink),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              const SizedBox(height: 8),
              Semantics(
                liveRegion: true,
                child: Text(_message,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w800, color: RC.pinkDeep)),
              ),
              const SizedBox(height: 8),
              Wrap(
                alignment: WrapAlignment.center,
                spacing: 10,
                runSpacing: 10,
                children: [
                  for (final step in _order)
                    if (!_placed.contains(step))
                      SizedBox(
                        width: 240,
                        child: RCard(
                          semanticLabel: steps[step],
                          color: _hint && step == _placed.length ? RC.yellow : RC.card,
                          outline: _hint && step == _placed.length ? RC.star : RC.outline,
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                          onTap: () => _tap(step),
                          child: Text(steps[step],
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 20, color: RC.ink)),
                        ),
                      ),
                ],
              ),
              if (!_hint && _placed.length < steps.length)
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
