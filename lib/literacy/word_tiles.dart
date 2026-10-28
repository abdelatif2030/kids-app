import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../journey/ui/quiz_view.dart' show ItemResult;
import '../media/audio.dart';
import 'letters_data.dart';

/// Build a word from movable letter tiles. A wrong tile only fades and wobbles
/// its message; nothing is lost. Placed letters are shown joined, as they are
/// written.
class WordTilesView extends StatefulWidget {
  final List<LetterWord> words;
  final void Function(List<ItemResult> results) onFinished;
  const WordTilesView({super.key, required this.words, required this.onFinished});

  @override
  State<WordTilesView> createState() => _WordTilesViewState();
}

class _WordTilesViewState extends State<WordTilesView> {
  int _i = 0;
  late List<String> _tiles; // shuffled letters of the current word
  final Set<int> _used = {};
  String _placed = '';
  bool _missed = false;
  String _message = '';
  final List<ItemResult> _results = [];
  final Random _r = Random();

  LetterWord get _w => widget.words[_i];

  @override
  void initState() {
    super.initState();
    _start();
  }

  void _start() {
    final letters = _w.word.split('');
    var shuffled = [...letters]..shuffle(_r);
    // Never show the answer already in order.
    if (letters.length > 1 && shuffled.join() == letters.join()) shuffled = shuffled.reversed.toList();
    _tiles = shuffled;
    _used.clear();
    _placed = '';
    _missed = false;
    _message = '';
    AppAudio.say(_w.word);
  }

  void _tap(int tile) {
    if (_used.contains(tile)) return;
    final next = _w.word[_placed.length];
    if (_tiles[tile] != next) {
      setState(() {
        _missed = true;
        _message = 'جرّب حرفاً آخر 🌈 (الحرف التالي من اليمين)';
      });
      return;
    }
    setState(() {
      _used.add(tile);
      _placed += _tiles[tile];
      _message = '';
    });
    if (_placed == _w.word) {
      _results.add(ItemResult('word_building', !_missed, _w.word, 'word:${_w.word}'));
      setState(() => _message = 'أحسنت! ${_w.word} ${_w.emoji}');
      AppAudio.say(_w.word);
      Future.delayed(const Duration(milliseconds: 1400), _next);
    }
  }

  void _next() {
    if (!mounted) return;
    if (_i + 1 >= widget.words.length) {
      widget.onFinished(_results);
      return;
    }
    setState(() {
      _i++;
      _start();
    });
  }

  @override
  void dispose() {
    AppAudio.stopSaying();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 520),
          child: Column(
            children: [
              Text('الكلمة ${_i + 1} من ${widget.words.length}',
                  style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
              const SizedBox(height: 10),
              const Text('رتّب الحروف لتكوّن الكلمة',
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
              const SizedBox(height: 8),
              Text(_w.emoji, style: const TextStyle(fontSize: 88)),
              TextButton.icon(
                onPressed: () => AppAudio.say(_w.word),
                icon: const Icon(Icons.volume_up_rounded),
                label: const Text('استمع', style: TextStyle(fontSize: 18)),
              ),
              Container(
                width: double.infinity,
                constraints: const BoxConstraints(minHeight: 84),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: RC.outline, width: 3),
                ),
                child: Semantics(
                  label: 'الحروف المرتبة: $_placed',
                  child: Text(_placed.isEmpty ? '…' : _placed,
                      style: const TextStyle(fontSize: 52, fontWeight: FontWeight.w900, color: RC.ink)),
                ),
              ),
              const SizedBox(height: 16),
              Wrap(
                spacing: 12,
                runSpacing: 12,
                alignment: WrapAlignment.center,
                children: [
                  for (var t = 0; t < _tiles.length; t++)
                    AnimatedOpacity(
                      duration: motion(context, 200),
                      opacity: _used.contains(t) ? 0.2 : 1,
                      child: SizedBox(
                        width: 72,
                        height: 72,
                        child: RCard(
                          semanticLabel: 'حرف ${letterOf(_tiles[t])?.name ?? _tiles[t]}',
                          onTap: _used.contains(t) ? null : () => _tap(t),
                          padding: EdgeInsets.zero,
                          child: Center(
                            child: Text(_tiles[t],
                                style: const TextStyle(fontSize: 38, fontWeight: FontWeight.w900, color: RC.ink)),
                          ),
                        ),
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 12),
              Semantics(
                liveRegion: true,
                child: Text(_message,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: RC.pinkDeep)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
