import 'dart:math';

import 'package:flutter/material.dart';

import '../l10n/app_locale.dart';
import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../library/vocab.dart';
import 'choice_games.dart';

/// Words a child has met in the last 30 days (opened, listened to, or practised), newest first.
Future<List<Vocab>> wordsMetRecently(String childId, {DateTime? now}) async {
  final records = await LearningRecords.forChild(childId, days: 30, now: now);
  final seen = <String>{};
  final out = <Vocab>[];
  for (final r in records.reversed) {
    if (r.type != RecordType.word || !seen.add(r.ref)) continue;
    final v = vocabById(r.ref);
    if (v != null) out.add(v);
  }
  return out;
}

String _word(Vocab v) => AppLocale.instance.code == 'en' ? (v.en ?? v.ar) : v.ar;

/// Up to [kChoiceRounds] questions "which word is this picture?" from [met] only. Needs at least 3
/// words (a question needs two other words to choose from).
List<ChoiceRound> makeReview(List<Vocab> met, Random r) {
  if (met.length < 3) return const [];
  final pool = ([...met]..shuffle(r)).take(kChoiceRounds).toList();
  return [
    for (final w in pool)
      () {
        final others = ([...met]..remove(w)..shuffle(r)).take(2).map(_word).toList();
        final opts = [_word(w), ...others]..shuffle(r);
        return ChoiceRound(w.emoji, opts, opts.indexOf(_word(w)), prompt: tr2('ما اسم هذه الصورة؟', 'What is this picture called?'), ref: w.id);
      }(),
  ];
}

/// «راجع ما تعلمته»: a light review of words the child has really met. Right answers are recorded as
/// practice; a star only the first time the review is finished.
class ReviewGame extends StatefulWidget {
  final String childId;
  final Random? random;
  const ReviewGame({super.key, required this.childId, this.random});
  static const gameId = 'review_words';

  @override
  State<ReviewGame> createState() => _ReviewGameState();
}

class _ReviewGameState extends State<ReviewGame> {
  late final Future<List<Vocab>> _met = wordsMetRecently(widget.childId);
  List<Vocab> _words = const [];

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Vocab>>(
      future: _met,
      builder: (context, snap) {
        final title = tr2('راجع ما تعلمته', 'Review what you learned');
        if (snap.connectionState != ConnectionState.done) {
          return Scaffold(appBar: AppBar(title: Text(title)), body: const Center(child: CircularProgressIndicator()));
        }
        _words = snap.data ?? const [];
        if (_words.length < 3) {
          return Scaffold(
            appBar: AppBar(title: Text(title)),
            body: Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Text(
                  tr2('تعرّف على ثلاث كلمات في «كتاب الكلمات» أو «يومي»، ثم تعال لنراجعها معاً.',
                      'Meet three words in the word book or in My day, then come back and we will review them together.'),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 20),
                ),
              ),
            ),
          );
        }
        return ChoiceGame(
          childId: widget.childId,
          gameId: ReviewGame.gameId,
          title: title,
          instruction: tr2('ما اسم هذه الصورة؟', 'What is this picture called?'),
          make: (r) => makeReview(_words, r),
          random: widget.random,
          onRoundDone: (round, firstTry) {
            // Practice, not proof of understanding: a first-try right answer is still only "practice" here.
            final id = round.ref;
            if (id != null) LearningRecords.add(widget.childId, RecordType.word, id, Evidence.practice);
          },
        );
      },
    );
  }
}
