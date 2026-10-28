/// Arabic letters for the literacy module. Content here must be reviewed by an
/// Arabic teacher before release (see docs/CONTENT_REVIEW.md).
const _zwj = '‍';
const _fatha = 'َ';
const _damma = 'ُ';
const _kasra = 'ِ';

class LetterWord {
  final String word;
  final String emoji;
  const LetterWord(this.word, this.emoji);
}

enum LetterPosition { beginning, middle, end }

extension LetterPositionText on LetterPosition {
  String get label => switch (this) {
        LetterPosition.beginning => 'في البداية',
        LetterPosition.middle => 'في الوسط',
        LetterPosition.end => 'في النهاية',
      };
}

class ArabicLetter {
  final String letter;
  final String name; // the letter's NAME (e.g. باء), not its sound
  final bool connectsNext; // joins to the letter after it
  final List<LetterWord> words;
  const ArabicLetter(this.letter, this.name, this.connectsNext, this.words);

  String get isolated => letter;
  String get initial => connectsNext ? '$letter$_zwj' : letter;
  String get medial => connectsNext ? '$_zwj$letter$_zwj' : '$_zwj$letter';
  String get end => '$_zwj$letter';

  /// The letter with a short vowel: the SOUND a child should say.
  String get soundFatha => '$letter$_fatha';
  String get soundDamma => '$letter$_damma';
  String get soundKasra => '$letter$_kasra';

  /// Short vowel + long vowel, e.g. بَا بُو بِي. (For ا و ي the plain sounds are used.)
  List<String> get syllables => [soundFatha, soundDamma, soundKasra];

  /// Where this letter is inside [word], or null if it is absent or appears
  /// more than once (then the question would be ambiguous).
  LetterPosition? positionIn(String word) {
    final first = word.indexOf(letter);
    if (first < 0 || word.indexOf(letter, first + 1) >= 0) return null;
    if (first == 0) return LetterPosition.beginning;
    if (first == word.length - 1) return LetterPosition.end;
    return LetterPosition.middle;
  }

  /// Words whose picture clearly shows the letter at a known position.
  List<(LetterWord, LetterPosition)> get placedWords => [
        for (final w in words)
          if (positionIn(w.word) != null) (w, positionIn(w.word)!),
      ];

  List<LetterWord> get startingWords => [
        for (final w in words)
          if (positionIn(w.word) == LetterPosition.beginning) w,
      ];
}

const kArabicLetters = <ArabicLetter>[
  ArabicLetter('أ', 'ألف', false, [LetterWord('أرنب', '🐰'), LetterWord('أسد', '🦁'), LetterWord('فأر', '🐭')]),
  ArabicLetter('ب', 'باء', true, [LetterWord('بطة', '🦆'), LetterWord('ثعبان', '🐍'), LetterWord('عنب', '🍇')]),
  ArabicLetter('ت', 'تاء', true, [LetterWord('تفاحة', '🍎'), LetterWord('كتاب', '📖'), LetterWord('بيت', '🏠')]),
  ArabicLetter('ث', 'ثاء', true, [LetterWord('ثعلب', '🦊'), LetterWord('ثلج', '❄️')]),
  ArabicLetter('ج', 'جيم', true, [LetterWord('جمل', '🐪'), LetterWord('نجمة', '⭐'), LetterWord('ثلج', '❄️')]),
  ArabicLetter('ح', 'حاء', true, [LetterWord('حصان', '🐴'), LetterWord('تفاحة', '🍎'), LetterWord('مفتاح', '🔑')]),
  ArabicLetter('خ', 'خاء', true, [LetterWord('خروف', '🐑'), LetterWord('نخلة', '🌴'), LetterWord('فرخ', '🐤')]),
  ArabicLetter('د', 'دال', false, [LetterWord('دب', '🐻'), LetterWord('مدرسة', '🏫'), LetterWord('قرد', '🐒')]),
  ArabicLetter('ذ', 'ذال', false, [LetterWord('ذرة', '🌽'), LetterWord('ذئب', '🐺')]),
  ArabicLetter('ر', 'راء', false, [LetterWord('راديو', '📻'), LetterWord('قرد', '🐒'), LetterWord('نمر', '🐅')]),
  ArabicLetter('ز', 'زاي', false, [LetterWord('زرافة', '🦒'), LetterWord('جزرة', '🥕'), LetterWord('موز', '🍌')]),
  ArabicLetter('س', 'سين', true, [LetterWord('سمكة', '🐟'), LetterWord('فستان', '👗'), LetterWord('جرس', '🔔')]),
  ArabicLetter('ش', 'شين', true, [LetterWord('شمس', '☀️'), LetterWord('عشب', '🌿'), LetterWord('ريش', '🪶')]),
  ArabicLetter('ص', 'صاد', true, [LetterWord('صاروخ', '🚀'), LetterWord('قصر', '🏰'), LetterWord('مقص', '✂️')]),
  ArabicLetter('ض', 'ضاد', true, [LetterWord('ضفدع', '🐸'), LetterWord('بيضة', '🥚'), LetterWord('أبيض', '⚪')]),
  ArabicLetter('ط', 'طاء', true, [LetterWord('طائرة', '✈️'), LetterWord('بطة', '🦆'), LetterWord('خيط', '🧵')]),
  ArabicLetter('ظ', 'ظاء', true, [LetterWord('ظرف', '✉️'), LetterWord('نظارة', '👓')]),
  ArabicLetter('ع', 'عين', true, [LetterWord('عنب', '🍇'), LetterWord('شمعة', '🕯️'), LetterWord('إصبع', '☝️')]),
  ArabicLetter('غ', 'غين', true, [LetterWord('غيمة', '☁️'), LetterWord('ببغاء', '🦜')]),
  ArabicLetter('ف', 'فاء', true, [LetterWord('فيل', '🐘'), LetterWord('قفل', '🔒'), LetterWord('خروف', '🐑')]),
  ArabicLetter('ق', 'قاف', true, [LetterWord('قمر', '🌙'), LetterWord('بقرة', '🐄'), LetterWord('ورق', '📄')]),
  ArabicLetter('ك', 'كاف', true, [LetterWord('كرة', '⚽'), LetterWord('مكنسة', '🧹'), LetterWord('سمك', '🐟')]),
  ArabicLetter('ل', 'لام', true, [LetterWord('ليمون', '🍋'), LetterWord('قلم', '✏️'), LetterWord('جمل', '🐪')]),
  ArabicLetter('م', 'ميم', true, [LetterWord('موزة', '🍌'), LetterWord('قمر', '🌙'), LetterWord('قلم', '✏️')]),
  ArabicLetter('ن', 'نون', true, [LetterWord('نحلة', '🐝'), LetterWord('عنب', '🍇'), LetterWord('لبن', '🥛')]),
  ArabicLetter('ه', 'هاء', true, [LetterWord('هدية', '🎁'), LetterWord('نهر', '🏞️'), LetterWord('وجه', '🙂')]),
  ArabicLetter('و', 'واو', false, [LetterWord('وردة', '🌹'), LetterWord('موز', '🍌'), LetterWord('دلو', '🪣')]),
  ArabicLetter('ي', 'ياء', true, [LetterWord('يد', '✋'), LetterWord('بيت', '🏠'), LetterWord('كرسي', '🪑')]),
];

ArabicLetter? letterOf(String ch) {
  for (final l in kArabicLetters) {
    if (l.letter == ch) return l;
  }
  return null;
}

/// Letters that look alike are taught near each other (the "shapes" order).
const kShapeGroups = [
  'بتثني',
  'جحخ',
  'دذ',
  'رز',
  'سش',
  'صض',
  'طظ',
  'عغ',
  'فق',
  'كل',
  'م',
  'ه',
  'و',
  'أ',
];

/// The teaching order: the alphabet, or similar shapes together.
List<ArabicLetter> letterOrder(String order) {
  if (order != 'shapes') return kArabicLetters;
  return [
    for (final g in kShapeGroups)
      for (final ch in g.split('')) letterOf(ch)!,
  ];
}

/// Two- and three-syllable words with full vowel marks, for syllable blending.
class SyllableWord {
  final List<String> syllables;
  final String word; // the joined, vowelled word
  final String emoji;
  const SyllableWord(this.syllables, this.word, this.emoji);
}

const kSyllableWords = <SyllableWord>[
  SyllableWord(['قَ', 'مَر'], 'قَمَر', '🌙'),
  SyllableWord(['جَ', 'مَل'], 'جَمَل', '🐪'),
  SyllableWord(['قَ', 'لَم'], 'قَلَم', '✏️'),
  SyllableWord(['كَ', 'رَة'], 'كَرَة', '⚽'),
  SyllableWord(['بَ', 'قَ', 'رَة'], 'بَقَرَة', '🐄'),
  SyllableWord(['سَ', 'مَ', 'كَة'], 'سَمَكَة', '🐟'),
  SyllableWord(['شَ', 'جَ', 'رَة'], 'شَجَرَة', '🌳'),
  SyllableWord(['حِ', 'صَان'], 'حِصَان', '🐴'),
  SyllableWord(['وَ', 'رْدَة'], 'وَرْدَة', '🌹'),
  SyllableWord(['نَحْ', 'لَة'], 'نَحْلَة', '🐝'),
];

/// Short sentences with a picture question, for early reading comprehension.
class ReadingItem {
  final String sentence;
  final String question;
  final String rightEmoji;
  final List<String> wrongEmoji;
  const ReadingItem(this.sentence, this.question, this.rightEmoji, this.wrongEmoji);
}

const kReadingItems = <ReadingItem>[
  ReadingItem('القطة تحب السمك', 'ماذا تحب القطة؟', '🐟', ['🥕', '🍞']),
  ReadingItem('الولد يركب الدراجة', 'ماذا يركب الولد؟', '🚲', ['🚗', '🚌']),
  ReadingItem('البنت تقرأ الكتاب', 'ماذا تقرأ البنت؟', '📖', ['⚽', '🍎']),
  ReadingItem('الشمس في السماء', 'ما الذي في السماء؟', '☀️', ['🐟', '🏠']),
  ReadingItem('الأرنب يأكل الجزرة', 'ماذا يأكل الأرنب؟', '🥕', ['🐟', '🥛']),
  ReadingItem('الطفل يشرب الحليب', 'ماذا يشرب الطفل؟', '🥛', ['🍞', '🍎']),
];
