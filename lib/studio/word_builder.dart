import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/worlds.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../library/vocab.dart';
import '../media/audio_button.dart';
import '../progress_store.dart';
import 'creations.dart';

/// Splits a word into the tiles a child moves. A combining mark (Arabic harakat) stays with the letter before it,
/// so a tile is never a lone mark. Letters are kept in logical (reading) order: the first tile is the first letter.
List<String> wordTiles(String word) {
  final out = <String>[];
  for (final r in word.runes) {
    final isMark = (r >= 0x064B && r <= 0x065F) || r == 0x0670 || (r >= 0x0300 && r <= 0x036F);
    if (isMark && out.isNotEmpty) {
      out[out.length - 1] += String.fromCharCode(r);
    } else if (r != 0x20) {
      out.add(String.fromCharCode(r));
    }
  }
  return out;
}

/// The words offered for building: approved vocabulary of 2..6 letters that fits [age].
/// [english] selects the English names (only items that have one).
List<Vocab> buildableWords(int age, {required bool english}) => [
      for (final v in kVocab)
        if (age >= v.minAge && age <= v.maxAge && _fits(english ? v.en : v.ar)) v,
    ];

bool _fits(String? w) {
  if (w == null || w.contains(' ')) return false;
  final n = wordTiles(w).length;
  return n >= 2 && n <= 6;
}

/// One word being built. No widgets; every move can be undone, nothing is ever lost.
class WordBuilderState {
  final String target;
  final List<String> tiles; // shuffled
  final List<int> _placed = []; // indexes into tiles, in the order tapped
  bool _everWrong = false;
  bool _done = false;

  WordBuilderState(this.target, {Random? random}) : tiles = _shuffled(wordTiles(target), random ?? Random());

  static List<String> _shuffled(List<String> letters, Random r) {
    var t = [...letters]..shuffle(r);
    // Never start already solved (when the letters allow another order).
    var tries = 0;
    while (t.length > 1 && t.join() == letters.join() && letters.toSet().length > 1 && tries++ < 10) {
      t.shuffle(r);
    }
    return t;
  }

  List<int> get placedIndexes => List.unmodifiable(_placed);
  String get placed => [for (final i in _placed) tiles[i]].join();
  bool isUsed(int i) => _placed.contains(i);
  bool get isFull => _placed.length == tiles.length;
  bool get isCorrect => isFull && placed == target;
  bool get done => _done;

  /// True when the word was finished without any wrong full attempt.
  bool get firstTry => !_everWrong;

  /// Places tile [i]. Returns false when it is already used, or the word is already finished.
  bool place(int i) {
    if (_done || i < 0 || i >= tiles.length || isUsed(i)) return false;
    _placed.add(i);
    if (isFull) {
      if (isCorrect) {
        _done = true;
      } else {
        _everWrong = true;
      }
    }
    return true;
  }

  bool undo() {
    if (_done || _placed.isEmpty) return false;
    _placed.removeLast();
    return true;
  }

  void reset() {
    if (_done) return;
    _placed.clear();
  }
}

/// «ركّب الكلمة»: arrange the letters into the word shown by the picture. Wrong order only asks to try again;
/// the result is one skill event (`word_building`) plus a practice record, never a mastery claim.
class WordBuilderScreen extends StatefulWidget {
  final ChildProfile child;
  final bool english;
  final Random? random;

  /// Open on this vocabulary word (from the gallery) instead of a random one.
  final String? startVocabId;
  const WordBuilderScreen({super.key, required this.child, this.english = false, this.random, this.startVocabId});

  @override
  State<WordBuilderScreen> createState() => _WordBuilderScreenState();
}

class _WordBuilderScreenState extends State<WordBuilderScreen> {
  late final Random _r = widget.random ?? Random();
  late bool _english = widget.english;
  late List<Vocab> _pool;
  Vocab? _item;
  WordBuilderState? _state;
  bool _wrongShown = false;
  bool _firstRound = true;

  @override
  void initState() {
    super.initState();
    _next();
  }

  String _word(Vocab v) => _english ? v.en! : v.ar;

  void _next() {
    _pool = buildableWords(widget.child.age, english: _english);
    if (_pool.isEmpty) {
      _item = null;
      _state = null;
      return;
    }
    var v = _pool[_r.nextInt(_pool.length)];
    final start = _firstRound ? widget.startVocabId : null;
    _firstRound = false;
    if (start != null) {
      for (final p in _pool) {
        if (p.id == start) v = p;
      }
    }
    _item = v;
    _state = WordBuilderState(_word(v), random: _r);
    _wrongShown = false;
  }

  Future<void> _place(int i) async {
    final s = _state!;
    if (!s.place(i)) return;
    setState(() => _wrongShown = s.isFull && !s.isCorrect);
    if (s.done) {
      final v = _item!;
      unawaited(ProgressStore.record('word_building', s.firstTry, detail: _word(v), childId: widget.child.id));
      unawaited(LearningRecords.add(widget.child.id, RecordType.word, v.id, Evidence.practice));
      unawaited(_saveToGallery(v));
    }
  }

  /// A word the child built is kept in the private gallery (one entry per word and language, so it is never duplicated).
  /// Saving never gives a star and a failed save changes nothing for the child.
  Future<void> _saveToGallery(Vocab v) async {
    try {
      await FamilyGallery.save(Creation(
        'w_${v.id}_${_english ? 'en' : 'ar'}',
        widget.child.id,
        CreationKind.word,
        FamilyGallery.today(),
        {'w': _word(v), 'v': v.id, 'e': v.emoji, 'lang': _english ? 'en' : 'ar'},
      ));
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    final s = _state;
    final v = _item;
    final dir = _english ? TextDirection.ltr : TextDirection.rtl;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(tr2('ركّب الكلمة', 'Build the word'), style: const TextStyle(fontWeight: FontWeight.w900, color: RC.ink)),
        actions: [
          TextButton(
            onPressed: () => setState(() {
              _english = !_english;
              _next();
            }),
            child: Text(_english ? 'عربي' : 'English'),
          ),
        ],
      ),
      body: PastelBackground(
        world: RWorld.forest,
        child: SafeArea(
          child: s == null || v == null
              ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(tr2('لا توجد كلمات مناسبة لهذا العمر بعد.', 'No words for this age yet.'),
                        textAlign: TextAlign.center, style: const TextStyle(fontSize: 18, color: RC.ink)),
                  ),
                )
              : Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 560),
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          Semantics(
                            label: tr2('الصورة: ${v.ar}', 'Picture hint: ${v.en ?? v.ar}'),
                            child: Text(v.emoji, style: const TextStyle(fontSize: 88)),
                          ),
                          AudioButton(text: _word(v), lang: _english ? 'en' : 'ar', label: tr2('استمع', 'Listen')),
                          const SizedBox(height: 12),
                          Directionality(
                            textDirection: dir,
                            child: Container(
                              key: const Key('wb-placed'),
                              constraints: const BoxConstraints(minHeight: 80),
                              alignment: Alignment.center,
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24)),
                              child: Semantics(
                                liveRegion: true,
                                label: s.placed.isEmpty ? tr2('الكلمة فارغة', 'The word is empty') : s.placed,
                                child: Text(s.placed.isEmpty ? '…' : s.placed,
                                    style: const TextStyle(fontSize: 52, fontWeight: FontWeight.w900, color: RC.ink)),
                              ),
                            ),
                          ),
                          const SizedBox(height: 8),
                          SizedBox(
                            height: 30,
                            child: Text(
                              s.done
                                  ? (s.firstTry ? tr2('أحسنت! 🌟', 'Well done! 🌟') : tr2('أحسنت، وصلت للكلمة! 🌟', 'You found the word! 🌟'))
                                  : _wrongShown
                                      ? tr2('قريب! اضغط «تراجع» وجرّب ترتيباً آخر 🌈', 'Close! Press undo and try another order 🌈')
                                      : '',
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 17, color: RC.ink),
                            ),
                          ),
                          Directionality(
                            textDirection: dir,
                            child: Wrap(
                              spacing: 10,
                              runSpacing: 10,
                              alignment: WrapAlignment.center,
                              children: [
                                for (var i = 0; i < s.tiles.length; i++)
                                  FocusableTap(
                                    onTap: s.isUsed(i) || s.done ? null : () => _place(i),
                                    semanticLabel: tr2('حرف ${s.tiles[i]}', 'Letter ${s.tiles[i]}'),
                                    child: Opacity(
                                      opacity: s.isUsed(i) ? 0.3 : 1,
                                      child: Container(
                                        width: 68,
                                        height: 68,
                                        alignment: Alignment.center,
                                        decoration: BoxDecoration(color: RC.yellow, borderRadius: BorderRadius.circular(18)),
                                        child: Text(s.tiles[i],
                                            style: const TextStyle(fontSize: 36, fontWeight: FontWeight.w900, color: RC.ink)),
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 16),
                          Wrap(
                            spacing: 12,
                            runSpacing: 8,
                            alignment: WrapAlignment.center,
                            children: [
                              OutlinedButton.icon(
                                onPressed: s.done || s.placed.isEmpty ? null : () => setState(() {
                                      s.undo();
                                      _wrongShown = false;
                                    }),
                                icon: const Icon(Icons.undo_rounded),
                                label: Text(tr2('تراجع', 'Undo')),
                              ),
                              OutlinedButton.icon(
                                onPressed: s.done || s.placed.isEmpty ? null : () => setState(() {
                                      s.reset();
                                      _wrongShown = false;
                                    }),
                                icon: const Icon(Icons.refresh_rounded),
                                label: Text(tr2('من جديد', 'Start over')),
                              ),
                              if (s.done)
                                FilledButton.icon(
                                  onPressed: () => setState(_next),
                                  icon: const Icon(Icons.arrow_forward_rounded),
                                  label: Text(tr2('كلمة جديدة', 'New word')),
                                ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
        ),
      ),
    );
  }
}
