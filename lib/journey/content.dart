import 'dart:math';

import 'lands.dart';
import 'models.dart';

// ---------------------------------------------------------------------------
// Seed content (Arabic). Everything here is original sample content written for
// the app; the content admin can add more questions on the device.
// ---------------------------------------------------------------------------

const _letters = <(String, String, String)>[
  ('أ', 'أرنب', '🐰'),
  ('ب', 'بطة', '🦆'),
  ('ت', 'تفاحة', '🍎'),
  ('ث', 'ثعلب', '🦊'),
  ('ج', 'جمل', '🐫'),
  ('ح', 'حصان', '🐴'),
  ('خ', 'خروف', '🐑'),
  ('د', 'دجاجة', '🐔'),
  ('ز', 'زرافة', '🦒'),
  ('س', 'سمكة', '🐟'),
  ('ش', 'شمس', '☀️'),
  ('ص', 'صاروخ', '🚀'),
  ('ض', 'ضفدع', '🐸'),
  ('ط', 'طائرة', '✈️'),
  ('ع', 'عصفور', '🐦'),
  ('غ', 'غيمة', '☁️'),
  ('ف', 'فيل', '🐘'),
  ('ق', 'قمر', '🌙'),
  ('ك', 'كتاب', '📖'),
  ('ل', 'ليمون', '🍋'),
  ('م', 'موز', '🍌'),
  ('ن', 'نحلة', '🐝'),
  ('ه', 'هدية', '🎁'),
  ('و', 'وردة', '🌹'),
];

/// The easier letters, for the youngest children.
const _easyLetters = {'أ', 'ب', 'ت', 'ج', 'ح', 'د', 'س', 'ش', 'ف', 'ق', 'م', 'ن'};

const _words = <(String, String, String)>[
  ('apple', 'تفاحة', '🍎'),
  ('cat', 'قطة', '🐱'),
  ('dog', 'كلب', '🐶'),
  ('sun', 'شمس', '☀️'),
  ('fish', 'سمكة', '🐟'),
  ('book', 'كتاب', '📖'),
  ('car', 'سيارة', '🚗'),
  ('ball', 'كرة', '⚽'),
  ('tree', 'شجرة', '🌳'),
  ('house', 'بيت', '🏠'),
  ('milk', 'حليب', '🥛'),
  ('bird', 'عصفور', '🐦'),
  ('moon', 'قمر', '🌙'),
  ('star', 'نجمة', '⭐'),
  ('egg', 'بيضة', '🥚'),
  ('banana', 'موز', '🍌'),
];

const _colors = <(String, int)>[
  ('أحمر', 0xFFE53935),
  ('أزرق', 0xFF1E88E5),
  ('أصفر', 0xFFFDD835),
  ('أخضر', 0xFF43A047),
  ('برتقالي', 0xFFFB8C00),
  ('بنفسجي', 0xFF8E24AA),
  ('وردي', 0xFFEC407A),
  ('بني', 0xFF6D4C41),
];

const _shapes = <(String, String)>[
  ('circle', 'دائرة'),
  ('square', 'مربع'),
  ('triangle', 'مثلث'),
  ('star', 'نجمة'),
  ('heart', 'قلب'),
  ('rectangle', 'مستطيل'),
];

const _neutral = 0xFF607D8B;

/// The Arabic name of a color value from the colors list (for screen readers).
String colorNameOf(int value) {
  for (final c in _colors) {
    if (c.$2 == value) return c.$1;
  }
  return 'لون';
}

/// The Arabic name of a shape kind.
String shapeNameOf(String kind) {
  for (final s in _shapes) {
    if (s.$1 == kind) return s.$2;
  }
  return kind;
}

const _stories = <(String, String, List<(String, List<String>, int)>)>[
  (
    'الأرنب والجزرة',
    'وجد الأرنب أرنوب جزرة كبيرة في الحديقة. أخذها إلى بيته وأكلها مع أمه.',
    [
      ('ماذا وجد الأرنب؟', ['جزرة', 'كرة', 'قلماً'], 0),
      ('أين وجد الجزرة؟', ['في الحديقة', 'في البحر', 'في المدرسة'], 0),
      ('مع من أكلها؟', ['مع أمه', 'مع صديقه', 'وحده'], 0),
    ],
  ),
  (
    'القطة ميمي',
    'ميمي قطة صغيرة تحب اللعب بالكرة الحمراء. في يوم ضاعت الكرة تحت السرير. بحثت ميمي حتى وجدتها وفرحت كثيراً.',
    [
      ('بماذا تحب ميمي اللعب؟', ['الدمية', 'الكرة الحمراء', 'الحبل'], 1),
      ('أين ضاعت الكرة؟', ['فوق الشجرة', 'في الحقيبة', 'تحت السرير'], 2),
      ('كيف شعرت ميمي عندما وجدتها؟', ['حزنت', 'غضبت', 'فرحت'], 2),
    ],
  ),
  (
    'سلمى والمطر',
    'خرجت سلمى إلى الحديقة فبدأ المطر ينزل. فتحت مظلتها الصفراء وقفزت بين البرك. عادت إلى البيت وشربت كوب حليب دافئ.',
    [
      ('ماذا فتحت سلمى؟', ['مظلة صفراء', 'نافذة', 'كتاباً'], 0),
      ('ماذا فعلت في الحديقة؟', ['رسمت', 'قفزت بين البرك', 'قرأت'], 1),
      ('ماذا شربت في البيت؟', ['عصيراً بارداً', 'ماءً', 'حليباً دافئاً'], 2),
    ],
  ),
  (
    'النحلة النشيطة',
    'تستيقظ النحلة كل صباح وتطير إلى الزهور. تجمع الرحيق من زهرة بعد زهرة. في المساء تصنع العسل الحلو مع صديقاتها.',
    [
      ('متى تستيقظ النحلة؟', ['كل مساء', 'كل صباح', 'في الشتاء فقط'], 1),
      ('ماذا تجمع من الزهور؟', ['الماء', 'الورق', 'الرحيق'], 2),
      ('ماذا تصنع مع صديقاتها؟', ['العسل', 'الخبز', 'الكعك'], 0),
    ],
  ),
  (
    'أحمد والمكتبة',
    'ذهب أحمد مع أبيه إلى المكتبة. اختار كتاباً عن الفضاء فيه صور للنجوم والكواكب. قرر أحمد أن يقرأ صفحة كل يوم قبل النوم.',
    [
      ('إلى أين ذهب أحمد؟', ['الملعب', 'المكتبة', 'السوق'], 1),
      ('عن ماذا كان الكتاب؟', ['الفضاء', 'الحيوانات', 'الطعام'], 0),
      ('متى سيقرأ أحمد صفحة كل يوم؟', ['بعد الغداء', 'في المدرسة', 'قبل النوم'], 2),
    ],
  ),
];

const _memoryEmojis = ['🐶', '🐱', '🐸', '🐵', '🐰', '🦁', '🐼', '🦊', '🐯', '🐮'];

const _threeSteps = <SequenceRound>[
  SequenceRound('قبل النوم', ['🪥 نغسل أسناننا', '📖 نسمع قصة', '😴 ننام']),
  SequenceRound('نمو النبتة', ['🌱 بذرة صغيرة', '💧 نسقيها ماءً', '🌷 تصبح زهرة']),
  SequenceRound('الصباح', ['⏰ نستيقظ', '🥣 نتناول الفطور', '🎒 نذهب إلى المدرسة']),
  SequenceRound('قبل الأكل', ['🧼 نغسل أيدينا', '🍽️ نأكل', '🥛 نشرب الماء']),
];

const _fourSteps = <SequenceRound>[
  SequenceRound('قبل النوم', ['🪥 نغسل أسناننا', '👕 نلبس البيجاما', '📖 نسمع قصة', '😴 ننام']),
  SequenceRound('نمو النبتة', ['🌱 بذرة صغيرة', '💧 نسقيها ماءً', '🌿 تنمو الأوراق', '🌷 تصبح زهرة']),
  SequenceRound('السندويتش', ['🍞 نأخذ الخبز', '🧀 نضع الجبنة', '🥪 نغلق السندويتش', '😋 نأكل']),
  SequenceRound('رسم صورة', ['✏️ نمسك القلم', '🖍️ نرسم الشكل', '🎨 نلوّن', '🖼️ نعلّق الصورة']),
];

// ---------------------------------------------------------------------------
// Question builders
// ---------------------------------------------------------------------------

({List<Option> options, int correct}) _mix(Option right, List<Option> wrong, Random r) {
  final all = [right, ...wrong]..shuffle(r);
  return (options: all, correct: all.indexOf(right));
}

List<T> _some<T>(Iterable<T> pool, int n, Random r) => ([...pool]..shuffle(r)).take(n).toList();

/// [answer] plus [count]-1 different numbers near it, all at least [min].
List<int> _numbers(int answer, int count, Random r, {int min = 0}) {
  final near = [
    for (var d = -4; d <= 4; d++)
      if (d != 0 && answer + d >= min) answer + d,
  ]..shuffle(r);
  return [answer, ...near.take(count - 1)];
}

Question _numberQuestion(String skill, int answer, String prompt, String hint, int count, Random r,
    {String? bigEmoji, int repeat = 1, String? bigText, int min = 0}) {
  final nums = _numbers(answer, count, r, min: min);
  final m = _mix(Option.text('$answer'), [for (final n in nums.skip(1)) Option.text('$n')], r);
  return Question(
    prompt: prompt,
    options: m.options,
    correct: m.correct,
    hint: hint,
    skill: skill,
    bigEmoji: bigEmoji,
    repeat: repeat,
    bigText: bigText,
    detail: null,
  );
}

List<Question> _letterQuestions(int d, int age, Random r) {
  final pool = age <= 4 ? _letters.where((e) => _easyLetters.contains(e.$1)) : _letters;
  final chosen = _some(pool, 5, r);
  final optionCount = d <= 2 ? 3 : 4;
  return [
    for (var i = 0; i < chosen.length; i++)
      () {
        final item = chosen[i];
        final others = _some(_letters.where((e) => e.$1 != item.$1), optionCount - 1, r);
        final letterToPicture = d == 5 ? i.isEven : d.isOdd;
        if (letterToPicture) {
          final m = _mix(
            Option.emoji(item.$3, caption: item.$2),
            [for (final o in others) Option.emoji(o.$3, caption: o.$2)],
            r,
          );
          return Question(
            prompt: 'أي صورة تبدأ بحرف «${item.$1}»؟',
            bigText: item.$1,
            options: m.options,
            correct: m.correct,
            hint: 'فكّر في صوت الحرف «${item.$1}»، مثل «${item.$2}».',
            skill: 'letters_ar',
            detail: item.$1,
          );
        }
        final m = _mix(Option.text(item.$1), [for (final o in others) Option.text(o.$1)], r);
        return Question(
          prompt: 'بأي حرف تبدأ كلمة «${item.$2}»؟',
          bigEmoji: item.$3,
          options: m.options,
          correct: m.correct,
          hint: 'انطق «${item.$2}» ببطء واسمع أول صوت.',
          skill: 'letters_ar',
          detail: item.$1,
        );
      }(),
  ];
}

List<Question> _numberQuestions(int d, int age, Random r) {
  final optionCount = d >= 4 ? 4 : 3;
  final small = age <= 5;
  Question counting(int max) {
    final n = 1 + r.nextInt(max);
    const things = ['🍎', '⭐', '🐟', '🎈', '🍓'];
    return _numberQuestion('counting', n, 'كم عدد الأشياء؟', 'عُدّ واحداً واحداً بإصبعك.',
        optionCount, r,
        bigEmoji: things[r.nextInt(things.length)], repeat: n, min: 1);
  }

  Question add(int max) {
    final a = 1 + r.nextInt(max - 1);
    final b = 1 + r.nextInt(max - a);
    return _numberQuestion('addition', a + b, 'ما ناتج الجمع؟', 'ابدأ من $a وعُدّ $b خطوات للأمام.',
        optionCount, r,
        bigText: '$a + $b');
  }

  Question sub(int max) {
    final a = 2 + r.nextInt(max - 1);
    final b = 1 + r.nextInt(a - 1);
    return _numberQuestion('subtraction', a - b, 'ما ناتج الطرح؟', 'ابدأ من $a وارجع $b خطوات للخلف.',
        optionCount, r,
        bigText: '$a - $b');
  }

  Question mul() {
    final a = 2 + r.nextInt(4);
    final b = 2 + r.nextInt(4);
    return _numberQuestion('multiplication', a * b, 'ما ناتج الضرب؟', 'اجمع $a ما مقداره $b مرات.',
        optionCount, r,
        bigText: '$a × $b', min: 1);
  }

  return [
    for (var i = 0; i < 5; i++)
      switch (d) {
        1 => counting(small ? 5 : 8),
        2 => counting(small ? 8 : 10),
        3 => add(small ? 10 : 20),
        4 => sub(small ? 10 : 20),
        _ => age >= 7 ? [add(20), sub(20), mul()][i % 3] : [add(small ? 10 : 20), sub(small ? 10 : 20)][i % 2],
      },
  ];
}

ShapeSpec _shape(String kind, int color) => ShapeSpec(kind, color);

List<Question> _colorQuestions(int d, Random r) {
  final optionCount = d == 5 ? 4 : 3;
  Question pickColor() {
    final picked = _some(_colors, optionCount, r);
    final right = picked.first;
    final m = _mix(Option.color(right.$2), [for (final o in picked.skip(1)) Option.color(o.$2)], r);
    return Question(
      prompt: 'اختر اللون ${right.$1}',
      options: m.options,
      correct: m.correct,
      hint: 'ابحث عن اللون ${right.$1}.',
      skill: 'colors',
      detail: right.$1,
    );
  }

  Question pickShape() {
    final picked = _some(_shapes, optionCount, r);
    final right = picked.first;
    final m = _mix(Option.shape(_shape(right.$1, _neutral)),
        [for (final o in picked.skip(1)) Option.shape(_shape(o.$1, _neutral))], r);
    return Question(
      prompt: 'اختر الشكل: ${right.$2}',
      options: m.options,
      correct: m.correct,
      hint: 'ابحث عن ${right.$2}.',
      skill: 'shapes',
      detail: right.$2,
    );
  }

  Question pickBoth() {
    final s = _some(_shapes, 2, r);
    final c = _some(_colors, 2, r);
    final right = _shape(s[0].$1, c[0].$2);
    final wrong = [
      Option.shape(_shape(s[0].$1, c[1].$2)), // right shape, wrong color
      Option.shape(_shape(s[1].$1, c[0].$2)), // wrong shape, right color
      if (optionCount == 4) Option.shape(_shape(s[1].$1, c[1].$2)),
    ];
    final m = _mix(Option.shape(right), wrong, r);
    return Question(
      prompt: 'اختر ${s[0].$2} لونها ${c[0].$1}',
      options: m.options,
      correct: m.correct,
      hint: 'يجب أن يكون الشكل ${s[0].$2} واللون ${c[0].$1} معاً.',
      skill: 'shapes',
      detail: s[0].$2,
    );
  }

  Question nameShape() {
    final picked = _some(_shapes, optionCount, r);
    final right = picked.first;
    final m = _mix(Option.text(right.$2), [for (final o in picked.skip(1)) Option.text(o.$2)], r);
    return Question(
      prompt: 'ما اسم هذا الشكل؟',
      bigShape: _shape(right.$1, _neutral),
      options: m.options,
      correct: m.correct,
      hint: 'انظر إلى الأضلاع والزوايا.',
      skill: 'shapes',
      detail: right.$2,
    );
  }

  Question nameColor() {
    final picked = _some(_colors, optionCount, r);
    final right = picked.first;
    final m = _mix(Option.text(right.$1), [for (final o in picked.skip(1)) Option.text(o.$1)], r);
    return Question(
      prompt: 'ما لون هذا الشكل؟',
      bigShape: _shape(_shapes[r.nextInt(_shapes.length)].$1, right.$2),
      options: m.options,
      correct: m.correct,
      hint: 'تذكّر ألوان قوس المطر.',
      skill: 'colors',
      detail: right.$1,
    );
  }

  return [
    for (var i = 0; i < 5; i++)
      switch (d) {
        1 => pickColor(),
        2 => pickShape(),
        3 => pickBoth(),
        4 => i.isEven ? nameShape() : nameColor(),
        _ => [pickBoth, nameColor, nameShape, pickColor, pickShape][i](),
      },
  ];
}

List<Question> _englishQuestions(int d, Random r) {
  final optionCount = d >= 4 ? 4 : 3;
  final chosen = _some(_words, 5, r);
  return [
    for (var i = 0; i < chosen.length; i++)
      () {
        final item = chosen[i];
        final others = _some(_words.where((e) => e.$1 != item.$1), optionCount - 1, r);
        final pictureToWord = d <= 2 ? true : (d >= 5 ? i.isEven : false);
        if (pictureToWord) {
          final m = _mix(Option.text(item.$1), [for (final o in others) Option.text(o.$1)], r);
          return Question(
            prompt: 'ما اسم هذه الصورة بالإنجليزية؟',
            bigEmoji: item.$3,
            options: m.options,
            correct: m.correct,
            hint: 'معناها بالعربية: ${item.$2}.',
            skill: 'english_vocab',
            detail: item.$1,
          );
        }
        final m = _mix(Option.emoji(item.$3), [for (final o in others) Option.emoji(o.$3)], r);
        return Question(
          prompt: 'أيّ صورة هي «${item.$1}»؟',
          bigText: item.$1,
          options: m.options,
          correct: m.correct,
          hint: 'معناها بالعربية: ${item.$2}.',
          skill: 'english_vocab',
          detail: item.$1,
        );
      }(),
  ];
}

List<Question> _storyQuestions(int level) {
  final story = _stories[(level - 1) % _stories.length];
  return [
    for (final q in story.$3)
      Question(
        prompt: q.$1,
        passage: '${story.$1}\n${story.$2}',
        options: [for (final o in q.$2) Option.text(o)],
        correct: q.$3,
        hint: 'اقرأ القصة مرة أخرى وابحث عن الإجابة.',
        skill: 'story',
      ),
  ];
}

const _customSkill = {
  'letters': 'letters_ar',
  'numbers': 'counting',
  'colors': 'colors',
  'english': 'english_vocab',
  'stories': 'story',
};

/// The content of [activity] for a child of [age]. [bias] (-1, 0, 1) makes the
/// questions easier or harder. Published custom questions for this land and
/// level replace up to two of the built-in ones.
ActivityContent buildContent(
  Activity activity, {
  required int age,
  int bias = 0,
  Random? random,
  List<CustomQuestion> custom = const [],
}) {
  final r = random ?? Random();
  final d = (activity.level + bias).clamp(1, 5);
  switch (activity.kind) {
    case ActivityKind.memory:
      final pairs = (<int>[0, 3, 3, 4, 4, 6][activity.level] + bias).clamp(2, 8);
      return MemoryContent(_some(_memoryEmojis, pairs, r));
    case ActivityKind.sequence:
      final pool = d >= 4 ? _fourSteps : _threeSteps;
      return SequenceContent(_some(pool, 3, r));
    case ActivityKind.quiz:
      var questions = switch (activity.landId) {
        'letters' => _letterQuestions(d, age, r),
        'numbers' => _numberQuestions(d, age, r),
        'colors' => _colorQuestions(d, r),
        'english' => _englishQuestions(d, r),
        _ => _storyQuestions(activity.level),
      };
      if (activity.landId != 'stories') {
        final eligible = custom
            .where((c) =>
                c.published &&
                c.landId == activity.landId &&
                c.difficulty == activity.level &&
                age >= c.minAge &&
                age <= c.maxAge &&
                c.options.length >= 2 &&
                c.correct >= 0 &&
                c.correct < c.options.length)
            .toList()
          ..shuffle(r);
        final slots = ([for (var i = 0; i < questions.length; i++) i]..shuffle(r));
        questions = [...questions];
        for (var i = 0; i < eligible.length && i < 2; i++) {
          final c = eligible[i];
          questions[slots[i]] = Question(
            prompt: c.prompt,
            options: [for (final o in c.options) Option.text(o)],
            correct: c.correct,
            hint: 'اقرأ السؤال بتمهّل ثم اختر الإجابة.',
            skill: _customSkill[activity.landId] ?? 'story',
          );
        }
      }
      return QuizContent(questions);
  }
}

/// Six quick questions, one per land, for the first skill check. Pure sample
/// questions: they only decide the order of the suggested plan.
List<(String, Question)> assessmentQuestions(int age, {Random? random}) {
  final r = random ?? Random();
  Question first(ActivityContent c) => (c as QuizContent).questions.first;
  final level = age <= 4 ? 1 : (age <= 6 ? 2 : 3);
  ActivityContent quiz(String land) =>
      buildContent(Activity(land, level, ActivityKind.quiz), age: age, random: r);
  return [
    ('letters', first(quiz('letters'))),
    ('numbers', first(quiz('numbers'))),
    ('colors', first(quiz('colors'))),
    ('english', first(quiz('english'))),
    ('stories', first(buildContent(const Activity('stories', 1, ActivityKind.quiz), age: age, random: r))),
    // The brain club is checked with a number-order question.
    (
      'brain',
      () {
        final start = 1 + r.nextInt(5);
        final m = _mix(Option.text('${start + 2}'), [Option.text('${start + 4}'), Option.text('${start + 1}')], r);
        return Question(
          prompt: 'ما الرقم الناقص؟   $start ، ${start + 1} ، ؟',
          options: m.options,
          correct: m.correct,
          hint: 'العدّ يزيد واحداً كل مرة.',
          skill: 'sequence',
        );
      }(),
    ),
  ];
}
