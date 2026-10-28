import 'dart:math';

import '../journey/content.dart';
import '../journey/lands.dart';
import '../journey/models.dart';
import 'vocab.dart';
import '../l10n/strings.dart';

/// The kinds of multimedia exercise the engine can build from the shared
/// vocabulary. Every one is built from approved [Vocab] items, so the picture,
/// the spoken word, the Arabic text and the question always match.
enum LessonKind { pictureToWord, audioToPicture, wordToPicture, counting, sequence, memory }

extension LessonKindText on LessonKind {
  String get title => switch (this) {
        LessonKind.pictureToWord => loc('صورة ← كلمة'),
        LessonKind.audioToPicture => loc('استمع واختر الصورة'),
        LessonKind.wordToPicture => loc('كلمة ← صورة'),
        LessonKind.counting => loc('عدّ الأشياء'),
        LessonKind.sequence => loc('رتّب الخطوات'),
        LessonKind.memory => loc('لعبة الذاكرة'),
      };

  String get emoji => switch (this) {
        LessonKind.pictureToWord => '🖼️',
        LessonKind.audioToPicture => '🔊',
        LessonKind.wordToPicture => '🔤',
        LessonKind.counting => '🔢',
        LessonKind.sequence => '↕️',
        LessonKind.memory => '🧠',
      };
}

/// Items from the same category first (so wrong answers are plausible), and
/// never two items that share an emoji or a word (the picture must be unique).
List<Vocab> _distractors(Vocab target, List<Vocab> pool, int n, Random r) {
  final seenEmoji = {target.emoji};
  final seenWord = {target.ar};
  final same = [for (final v in pool) if (v.category == target.category) v]..shuffle(r);
  final other = [for (final v in pool) if (v.category != target.category) v]..shuffle(r);
  final out = <Vocab>[];
  for (final v in [...same, ...other]) {
    if (out.length == n) break;
    if (seenEmoji.contains(v.emoji) || seenWord.contains(v.ar)) continue;
    seenEmoji.add(v.emoji);
    seenWord.add(v.ar);
    out.add(v);
  }
  return out;
}

({List<Option> options, int correct}) _mix(Option right, List<Option> wrong, Random r) {
  final all = [right, ...wrong]..shuffle(r);
  return (options: all, correct: all.indexOf(right));
}

/// Items a child of [age] can be asked about, optionally from one category.
List<Vocab> vocabFor({required int age, String? category}) =>
    searchVocab(category: category, age: age);

Question pictureToWord(Vocab t, List<Vocab> pool, Random r, {int options = 3}) {
  final m = _mix(
    Option.text(t.ar),
    [for (final d in _distractors(t, pool, options - 1, r)) Option.text(d.ar)],
    r,
  );
  return Question(
    prompt: loc('ما اسم هذه الصورة؟'),
    bigEmoji: t.emoji,
    options: m.options,
    correct: m.correct,
    hint: loc('انظر إلى الصورة جيداً ثم اقرأ الكلمات.'),
    skill: 'vocab',
    spoken: t.ar,
    explanation: '${t.emoji} ${t.ar}${t.en == null ? '' : ' = ${t.en}'}',
    ref: 'word:${t.id}',
  );
}

Question audioToPicture(Vocab t, List<Vocab> pool, Random r, {int options = 3}) {
  final m = _mix(
    Option.emoji(t.emoji),
    [for (final d in _distractors(t, pool, options - 1, r)) Option.emoji(d.emoji)],
    r,
  );
  return Question(
    prompt: loc('استمع ثم اختر الصورة الصحيحة'),
    bigText: '🔊',
    options: m.options,
    correct: m.correct,
    hint: tr2('اضغط «استمع» لتسمع الكلمة مرة أخرى. الكلمة: ${t.ar}.', 'Press “Listen” to hear the word again. The word: ${t.ar}.'),
    skill: 'listening',
    spoken: t.ar,
    speakFirst: true,
    explanation: '${t.emoji} ${t.ar}',
    ref: 'word:${t.id}',
  );
}

Question wordToPicture(Vocab t, List<Vocab> pool, Random r, {int options = 3}) {
  final m = _mix(
    Option.emoji(t.emoji),
    [for (final d in _distractors(t, pool, options - 1, r)) Option.emoji(d.emoji)],
    r,
  );
  return Question(
    prompt: loc('أي صورة تناسب الكلمة؟'),
    bigText: t.ar,
    options: m.options,
    correct: m.correct,
    hint: tr2('اقرأ الكلمة ببطء: ${t.ar}.', 'Read the word slowly: ${t.ar}.'),
    skill: 'vocab',
    spoken: t.ar,
    explanation: '${t.emoji} ${t.ar}',
    ref: 'word:${t.id}',
  );
}

/// Counting uses the item's own picture, so the number is about something real.
Question countingQuestion(Vocab t, int max, Random r) {
  final n = 1 + r.nextInt(max);
  final nums = <int>{n};
  while (nums.length < 3) {
    final c = 1 + r.nextInt(max + 2);
    if (c != n) nums.add(c);
  }
  final m = _mix(Option.text('$n'), [for (final x in nums.where((x) => x != n)) Option.text('$x')], r);
  return Question(
    prompt: tr2('كم ${t.ar} في الصورة؟', 'How many ${t.en ?? t.ar} are in the picture?'),
    bigEmoji: t.emoji,
    repeat: n,
    options: m.options,
    correct: m.correct,
    hint: loc('عُدّ واحداً واحداً بإصبعك.'),
    skill: 'counting',
    spoken: tr2('كم ${t.ar}؟', 'How many ${t.en ?? t.ar}?'),
    explanation: tr2('العدد $n', 'The number is $n'),
    ref: 'word:${t.id}',
  );
}

/// Builds a lesson of [kind]. [category] limits the vocabulary (null: any).
ActivityContent buildVocabLesson(
  LessonKind kind, {
  required int age,
  String? category,
  int questions = 5,
  Random? random,
}) {
  final r = random ?? Random();
  var pool = vocabFor(age: age, category: category);
  // Too few items for plausible wrong answers: use everything for this age.
  if (pool.length < 6) pool = vocabFor(age: age);
  if (pool.length < 4) pool = [...kVocab];
  final chosen = ([...pool]..shuffle(r)).take(questions).toList();
  switch (kind) {
    case LessonKind.pictureToWord:
      return QuizContent([for (final t in chosen) pictureToWord(t, pool, r)]);
    case LessonKind.audioToPicture:
      return QuizContent([for (final t in chosen) audioToPicture(t, pool, r)]);
    case LessonKind.wordToPicture:
      return QuizContent([for (final t in chosen) wordToPicture(t, pool, r)]);
    case LessonKind.counting:
      final max = age <= 3 ? 4 : (age <= 5 ? 7 : 10);
      return QuizContent([for (final t in chosen) countingQuestion(t, max, r)]);
    case LessonKind.memory:
      final pairs = age <= 3 ? 3 : (age <= 5 ? 4 : 6);
      final seen = <String>{};
      final emojis = [for (final t in pool..shuffle(r)) if (seen.add(t.emoji)) t.emoji].take(pairs).toList();
      return MemoryContent(emojis);
    case LessonKind.sequence:
      return buildContent(const Activity('brain', 2, ActivityKind.sequence), age: age, random: r);
  }
}
