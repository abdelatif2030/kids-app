import 'dart:math';

import '../journey/models.dart';
import 'letters_data.dart';
import '../l10n/strings.dart';

({List<Option> options, int correct}) _mix(Option right, List<Option> wrong, Random r) {
  final all = [right, ...wrong]..shuffle(r);
  return (options: all, correct: all.indexOf(right));
}

List<ArabicLetter> _others(ArabicLetter l, int n, Random r) =>
    ([...kArabicLetters]..remove(l)..shuffle(r)).take(n).toList();

/// Hear the letter's NAME (باء) and pick it. Name and sound are different
/// things, so they are asked separately.
Question nameQuestion(ArabicLetter l, Random r, {int wrong = 2}) {
  final m = _mix(Option.text(l.letter), [for (final o in _others(l, wrong, r)) Option.text(o.letter)], r);
  return Question(
    prompt: loc('استمع إلى اسم الحرف واختره'),
    bigText: '🔊',
    options: m.options,
    correct: m.correct,
    hint: tr2('اسم الحرف: ${l.name}.', 'The letter\'s name: ${l.name}.'),
    skill: 'phonics',
    spoken: l.name,
    speakFirst: true,
    explanation: tr2('${l.letter} اسمه ${l.name}', '${l.letter} is called ${l.name}'),
    ref: 'letter:${l.letter}',
    detail: l.letter,
  );
}

/// Hear the letter's SOUND (بَ) and pick the letter.
Question soundQuestion(ArabicLetter l, Random r, {int wrong = 2}) {
  final m = _mix(Option.text(l.letter), [for (final o in _others(l, wrong, r)) Option.text(o.letter)], r);
  return Question(
    prompt: loc('استمع إلى صوت الحرف واختره'),
    bigText: '🔊',
    options: m.options,
    correct: m.correct,
    hint: tr2('الصوت: ${l.soundFatha}', 'The sound: ${l.soundFatha}'),
    skill: 'phonics',
    spoken: l.soundFatha,
    speakFirst: true,
    explanation: tr2('صوت ${l.letter} هو ${l.soundFatha}', 'The sound of ${l.letter} is ${l.soundFatha}'),
    ref: 'letter:${l.letter}',
    detail: l.letter,
  );
}

/// Which picture's word begins with this letter?
Question startsWithQuestion(ArabicLetter l, Random r) {
  final right = l.startingWords.isEmpty ? l.words.first : l.startingWords[r.nextInt(l.startingWords.length)];
  final wrongPool = <LetterWord>[
    for (final o in kArabicLetters)
      if (o != l)
        for (final w in o.words)
          if (!w.word.contains(l.letter) && w.emoji != right.emoji) w,
  ]..shuffle(r);
  final wrong = <LetterWord>[];
  for (final w in wrongPool) {
    if (wrong.length == 2) break;
    if (wrong.every((x) => x.emoji != w.emoji)) wrong.add(w);
  }
  final m = _mix(Option.emoji(right.emoji), [for (final w in wrong) Option.emoji(w.emoji)], r);
  return Question(
    prompt: tr2('أي صورة تبدأ بحرف «${l.letter}»؟', 'Which picture starts with the letter “${l.letter}”?'),
    bigText: l.letter,
    options: m.options,
    correct: m.correct,
    hint: tr2('قل الكلمة ببطء واسمع أول صوت: ${right.word}.', 'Say the word slowly and listen to the first sound: ${right.word}.'),
    skill: 'phonics',
    spoken: right.word,
    explanation: tr2('${right.emoji} ${right.word} تبدأ بحرف ${l.letter}', '${right.emoji} ${right.word} starts with the letter ${l.letter}'),
    ref: 'letter:${l.letter}',
    detail: l.letter,
  );
}

/// Where is the letter inside the word: beginning, middle or end?
Question positionQuestion(ArabicLetter l, Random r) {
  final placed = l.placedWords;
  final (w, pos) = placed[r.nextInt(placed.length)];
  final m = _mix(
    Option.text(pos.label),
    [for (final p in LetterPosition.values.where((p) => p != pos)) Option.text(p.label)],
    r,
  );
  return Question(
    prompt: tr2('أين حرف «${l.letter}» في كلمة «${w.word}»؟', 'Where is the letter “${l.letter}” in the word “${w.word}”?'),
    bigEmoji: w.emoji,
    options: m.options,
    correct: m.correct,
    hint: loc('ابدأ من اليمين: الحرف الأول هو البداية، والأخير هو النهاية.'),
    skill: 'letter_position',
    spoken: w.word,
    explanation: tr2('حرف ${l.letter} ${pos.label} في «${w.word}»', 'The letter ${l.letter} is ${pos.label} in “${w.word}”'),
    ref: 'letter:${l.letter}',
    detail: l.letter,
  );
}

/// Hear a syllable (بَ، بُ، بِ) and pick the written one.
Question syllableQuestion(ArabicLetter l, Random r) {
  final syl = l.syllables;
  final target = syl[r.nextInt(syl.length)];
  final m = _mix(Option.text(target), [for (final s in syl.where((s) => s != target)) Option.text(s)], r);
  return Question(
    prompt: loc('استمع ثم اختر المقطع الصحيح'),
    bigText: '🔊',
    options: m.options,
    correct: m.correct,
    hint: loc('الفتحة فوق الحرف (َ) والضمة (ُ) والكسرة تحته (ِ).'),
    skill: 'syllables',
    spoken: target,
    speakFirst: true,
    explanation: tr2('قرأنا $target', 'We read $target'),
    ref: 'letter:${l.letter}',
    detail: l.letter,
  );
}

/// Blend syllables into a word and pick its picture: قَ + مَر = ؟
Question blendQuestion(Random r) {
  final w = kSyllableWords[r.nextInt(kSyllableWords.length)];
  final wrong = ([...kSyllableWords]..remove(w)..shuffle(r)).take(2).toList();
  final m = _mix(Option.emoji(w.emoji), [for (final x in wrong) Option.emoji(x.emoji)], r);
  return Question(
    prompt: loc('اجمع المقاطع لتقرأ الكلمة'),
    bigText: w.syllables.join(' + '),
    options: m.options,
    correct: m.correct,
    hint: loc('انطق المقاطع بسرعة أكبر حتى تصير كلمة.'),
    skill: 'syllables',
    spoken: w.word,
    explanation: '${w.syllables.join(' + ')} = ${w.word} ${w.emoji}',
    ref: 'blend:${w.word}',
  );
}

Question readingQuestion(Random r) {
  final item = kReadingItems[r.nextInt(kReadingItems.length)];
  final m = _mix(Option.emoji(item.rightEmoji), [for (final e in item.wrongEmoji) Option.emoji(e)], r);
  return Question(
    prompt: item.question,
    passage: item.sentence,
    options: m.options,
    correct: m.correct,
    hint: loc('اقرأ الجملة مرة أخرى بهدوء.'),
    skill: 'reading',
    spoken: item.sentence,
    explanation: item.sentence,
    ref: 'sentence:${item.sentence}',
  );
}

/// Quick check of one letter, mixing what was taught.
List<Question> letterSession(ArabicLetter l, {Random? random}) {
  final r = random ?? Random();
  return [
    nameQuestion(l, r),
    soundQuestion(l, r),
    startsWithQuestion(l, r),
    if (l.placedWords.isNotEmpty) positionQuestion(l, r),
    syllableQuestion(l, r),
  ];
}

/// A review made from the letters that are due, one question each.
List<Question> reviewSession(List<ArabicLetter> letters, {Random? random}) {
  final r = random ?? Random();
  return [
    for (final l in letters.take(6))
      switch (r.nextInt(3)) { 0 => nameQuestion(l, r), 1 => soundQuestion(l, r), _ => startsWithQuestion(l, r) },
  ];
}

/// The easy step for a letter the child keeps missing: only name and sound,
/// two choices each, nothing timed. Used by the adaptive plan.
List<Question> simplerLetterSession(ArabicLetter l, {Random? random}) {
  final r = random ?? Random();
  return [nameQuestion(l, r, wrong: 1), soundQuestion(l, r, wrong: 1), nameQuestion(l, r, wrong: 1)];
}
