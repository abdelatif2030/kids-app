import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import 'kit.dart';
import 'quiz_view.dart';
import '../../l10n/strings.dart';

/// Match the identical cards. A mismatch just turns the cards back over; one
/// "peek" hint shows all the cards for a moment.
class MemoryView extends StatefulWidget {
  final List<String> emojis; // each appears twice
  final void Function(List<ItemResult> results) onFinished;
  const MemoryView({super.key, required this.emojis, required this.onFinished});

  @override
  State<MemoryView> createState() => _MemoryViewState();
}

class _MemoryViewState extends State<MemoryView> {
  late final List<String> _cards = [...widget.emojis, ...widget.emojis]..shuffle(Random());
  late final List<bool> _matched = List.filled(_cards.length, false);
  final List<int> _open = [];
  bool _busy = false;
  bool _peek = false;
  bool _peeked = false;
  int _misses = 0;
  String _message = loc('اقلب بطاقتين وابحث عن الصورتين المتشابهتين');
  Timer? _timer;

  int get _pairs => widget.emojis.length;
  int get _found => _matched.where((m) => m).length ~/ 2;

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  bool _faceUp(int i) => _matched[i] || _open.contains(i) || _peek;

  void _tap(int i) {
    if (_busy || _peek || _matched[i] || _open.contains(i)) return;
    setState(() => _open.add(i));
    if (_open.length < 2) return;
    final a = _open[0];
    final b = _open[1];
    if (_cards[a] == _cards[b]) {
      setState(() {
        _matched[a] = true;
        _matched[b] = true;
        _open.clear();
        _message = loc('أحسنت! وجدت زوجاً 🎉');
      });
      if (_found == _pairs) {
        _busy = true;
        _timer = Timer(const Duration(milliseconds: 900), _finish);
      }
    } else {
      _busy = true;
      _misses++;
      setState(() => _message = loc('قريب! تذكّر أماكن الصور 🌈'));
      _timer = Timer(const Duration(milliseconds: 900), () {
        if (!mounted) return;
        setState(() {
          _open.clear();
          _busy = false;
        });
      });
    }
  }

  void _finish() {
    if (!mounted) return;
    final firstTry = max(0, _pairs - _misses);
    widget.onFinished([for (var k = 0; k < _pairs; k++) ItemResult('memory', k < firstTry)]);
  }

  void _doPeek() {
    if (_peeked || _busy) return;
    setState(() {
      _peek = true;
      _peeked = true;
      _message = loc('انظر جيداً... 👀');
    });
    _timer = Timer(const Duration(milliseconds: 1500), () {
      if (mounted) setState(() => _peek = false);
    });
  }

  @override
  Widget build(BuildContext context) {
    final columns = _cards.length <= 6 ? 3 : 4;
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 520),
          child: Column(
            children: [
              Row(
                children: [
                  Flexible(flex: 2, child: Text(tr2('الأزواج: $_found من $_pairs', 'Pairs: $_found of $_pairs'),
                      style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink))),
                  const SizedBox(width: 12),
                  Expanded(flex: 3, child: RProgress(value: _found / _pairs)),
                ],
              ),
              const SizedBox(height: 14),
              Semantics(
                liveRegion: true,
                child: Text(_message,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: RC.ink)),
              ),
              const SizedBox(height: 14),
              GridView.count(
                crossAxisCount: columns,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                mainAxisSpacing: 10,
                crossAxisSpacing: 10,
                children: [
                  for (var i = 0; i < _cards.length; i++)
                    RCard(
                      semanticLabel: _faceUp(i) ? tr2('بطاقة ${_cards[i]}', 'Card ${_cards[i]}') : tr2('بطاقة مقلوبة رقم ${i + 1}', 'Face-down card number ${i + 1}'),
                      color: _matched[i] ? RC.mint : (_faceUp(i) ? Colors.white : RC.lavender),
                      outline: _matched[i] ? RC.good : RC.outline,
                      padding: EdgeInsets.zero,
                      onTap: () => _tap(i),
                      child: Center(
                        child: Text(
                          _faceUp(i) ? _cards[i] : '❔',
                          style: const TextStyle(fontSize: 40),
                        ),
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 12),
              if (!_peeked)
                TextButton.icon(
                  onPressed: _doPeek,
                  icon: const Icon(Icons.lightbulb_outline_rounded),
                  label: Text(loc('تلميح: أرني البطاقات'), style: TextStyle(fontSize: 18)),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
