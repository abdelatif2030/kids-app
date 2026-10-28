/// Data types for the learning journey: child profiles, activity attempts and
/// the questions an activity asks. Pure Dart (no Flutter), so it is easy to test
/// and to move to a real backend later.
library;

import 'dart:convert';

class ChildProfile {
  final String id;
  final String nickname; // a nickname, not a real name
  final int age;
  final List<String> interests; // land ids
  final List<String> goals; // goal ids, see kGoals
  final List<String> plan; // land ids, in the order the child should do them
  final int dailyCount; // activities in "today's adventure" (2-5)
  final int bias; // -1 easier, 0 normal, +1 harder
  final String? accessory; // the mascot accessory the child chose
  final Map<String, double> assessment; // land id -> 0..1

  const ChildProfile({
    required this.id,
    required this.nickname,
    required this.age,
    this.interests = const [],
    this.goals = const [],
    this.plan = const [],
    this.dailyCount = 3,
    this.bias = 0,
    this.accessory,
    this.assessment = const {},
  });

  ChildProfile copyWith({
    String? nickname,
    int? age,
    List<String>? interests,
    List<String>? goals,
    List<String>? plan,
    int? dailyCount,
    int? bias,
    Object? accessory = _keep,
    Map<String, double>? assessment,
  }) =>
      ChildProfile(
        id: id,
        nickname: nickname ?? this.nickname,
        age: age ?? this.age,
        interests: interests ?? this.interests,
        goals: goals ?? this.goals,
        plan: plan ?? this.plan,
        dailyCount: dailyCount ?? this.dailyCount,
        bias: bias ?? this.bias,
        accessory: identical(accessory, _keep) ? this.accessory : accessory as String?,
        assessment: assessment ?? this.assessment,
      );

  static const _keep = Object();

  Map<String, dynamic> toJson() => {
        'id': id,
        'n': nickname,
        'a': age,
        'i': interests,
        'g': goals,
        'p': plan,
        'd': dailyCount,
        'b': bias,
        'x': ?accessory,
        's': assessment,
      };

  factory ChildProfile.fromJson(Map<String, dynamic> j) => ChildProfile(
        id: j['id'] as String,
        nickname: j['n'] as String,
        age: j['a'] as int,
        interests: [for (final e in (j['i'] as List<dynamic>? ?? [])) e as String],
        goals: [for (final e in (j['g'] as List<dynamic>? ?? [])) e as String],
        plan: [for (final e in (j['p'] as List<dynamic>? ?? [])) e as String],
        dailyCount: (j['d'] as int?) ?? 3,
        bias: (j['b'] as int?) ?? 0,
        accessory: j['x'] as String?,
        assessment: {
          for (final e in ((j['s'] as Map<String, dynamic>?) ?? {}).entries)
            e.key: (e.value as num).toDouble(),
        },
      );
}

/// One finished run of an activity.
class Attempt {
  final String childId;
  final String activityId;
  final String day; // yyyy-mm-dd
  final int total; // questions / rounds / pairs asked
  final int firstTry; // how many were right on the first try
  final int seconds;
  final int stars; // 1-3

  const Attempt({
    required this.childId,
    required this.activityId,
    required this.day,
    required this.total,
    required this.firstTry,
    required this.seconds,
    required this.stars,
  });

  double get accuracy => total == 0 ? 0 : firstTry / total;

  Map<String, dynamic> toJson() => {
        'c': childId,
        'a': activityId,
        'd': day,
        't': total,
        'f': firstTry,
        's': seconds,
        'r': stars,
      };

  factory Attempt.fromJson(Map<String, dynamic> j) => Attempt(
        childId: j['c'] as String,
        activityId: j['a'] as String,
        day: j['d'] as String,
        total: j['t'] as int,
        firstTry: j['f'] as int,
        seconds: j['s'] as int,
        stars: j['r'] as int,
      );
}

/// 3 stars for a nearly perfect run, 2 for a good one, 1 just for finishing.
/// A finished activity always earns at least one star.
int starsFor(int total, int firstTry) {
  if (total == 0) return 1;
  final ratio = firstTry / total;
  if (ratio >= 0.9) return 3;
  if (ratio >= 0.6) return 2;
  return 1;
}

String dayKeyOf(DateTime d) =>
    '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

/// A shape drawn in code: kind is circle, square, rectangle, triangle, star or heart.
class ShapeSpec {
  final String kind;
  final int color; // ARGB
  const ShapeSpec(this.kind, this.color);

  @override
  bool operator ==(Object other) =>
      other is ShapeSpec && other.kind == kind && other.color == color;

  @override
  int get hashCode => Object.hash(kind, color);
}

/// One tappable answer: text, an emoji (with an optional caption), a shape or a color.
class Option {
  final String? text;
  final String? emoji;
  final String? caption;
  final ShapeSpec? shape;
  final int? color;
  const Option.text(String this.text)
      : emoji = null,
        caption = null,
        shape = null,
        color = null;
  const Option.emoji(String this.emoji, {this.caption})
      : text = null,
        shape = null,
        color = null;
  const Option.shape(ShapeSpec this.shape)
      : text = null,
        emoji = null,
        caption = null,
        color = null;
  const Option.color(int this.color)
      : text = null,
        emoji = null,
        caption = null,
        shape = null;

  /// What a screen reader says.
  String get label => text ?? caption ?? emoji ?? shape?.kind ?? 'لون';
}

/// The numbers behind an arithmetic question, so a wrong answer can be
/// followed by a picture of the same problem (instead of repeating the text).
class MathHelp {
  final int a;
  final int b;
  final String op; // '+', '-' or '×'
  const MathHelp(this.a, this.b, this.op);
}

class Question {
  final String prompt;
  final String? bigEmoji; // shown large above the options
  final int repeat; // how many times bigEmoji is shown (counting)
  final String? bigText; // e.g. "3 + 2 = ؟"
  final ShapeSpec? bigShape;
  final String? passage; // a short story shown with its questions
  final List<Option> options;
  final int correct;
  final String hint;
  final String skill; // a skill id in skills.dart
  final String? detail; // what was asked, for "needs practice" (a letter, a color)
  final MathHelp? math; // set for sums, so a mistake can be shown as a picture
  final String? spoken; // read aloud (device voice) on a speaker button
  final String spokenLang;
  final bool speakFirst; // read it as soon as the question appears (listening tasks)
  final String? explanation; // shown after a right answer
  final String? ref; // what this item teaches, e.g. "word:cat", "letter:ب" (for records)

  /// The same question carrying a record reference (e.g. "story:moon_star").
  Question withRef(String r) => Question(
        prompt: prompt,
        options: options,
        correct: correct,
        hint: hint,
        skill: skill,
        bigEmoji: bigEmoji,
        repeat: repeat,
        bigText: bigText,
        bigShape: bigShape,
        passage: passage,
        detail: detail,
        math: math,
        spoken: spoken,
        spokenLang: spokenLang,
        speakFirst: speakFirst,
        explanation: explanation,
        ref: r,
      );

  const Question({
    required this.prompt,
    required this.options,
    required this.correct,
    required this.hint,
    required this.skill,
    this.bigEmoji,
    this.repeat = 1,
    this.bigText,
    this.bigShape,
    this.passage,
    this.detail,
    this.math,
    this.spoken,
    this.spokenLang = 'ar',
    this.speakFirst = false,
    this.explanation,
    this.ref,
  });
}

class SequenceRound {
  final String title;
  final List<String> steps; // in the correct order, each with its emoji
  const SequenceRound(this.title, this.steps);
}

sealed class ActivityContent {
  const ActivityContent();
}

class QuizContent extends ActivityContent {
  final List<Question> questions;
  const QuizContent(this.questions);
}

class MemoryContent extends ActivityContent {
  final List<String> emojis; // each appears twice
  const MemoryContent(this.emojis);
}

class SequenceContent extends ActivityContent {
  final List<SequenceRound> rounds;
  const SequenceContent(this.rounds);
}

/// A question added in the content admin (kept on the device).
class CustomQuestion {
  final String id;
  final String landId;
  final String prompt;
  final List<String> options;
  final int correct;
  final int minAge;
  final int maxAge;
  final int difficulty; // 1-5: shown in that level
  final bool published;

  const CustomQuestion({
    required this.id,
    required this.landId,
    required this.prompt,
    required this.options,
    required this.correct,
    this.minAge = 3,
    this.maxAge = 9,
    this.difficulty = 1,
    this.published = true,
  });

  CustomQuestion copyWith({
    String? prompt,
    List<String>? options,
    int? correct,
    int? minAge,
    int? maxAge,
    int? difficulty,
    bool? published,
    String? landId,
  }) =>
      CustomQuestion(
        id: id,
        landId: landId ?? this.landId,
        prompt: prompt ?? this.prompt,
        options: options ?? this.options,
        correct: correct ?? this.correct,
        minAge: minAge ?? this.minAge,
        maxAge: maxAge ?? this.maxAge,
        difficulty: difficulty ?? this.difficulty,
        published: published ?? this.published,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'l': landId,
        'p': prompt,
        'o': options,
        'c': correct,
        'a': minAge,
        'b': maxAge,
        'd': difficulty,
        'u': published,
      };

  factory CustomQuestion.fromJson(Map<String, dynamic> j) => CustomQuestion(
        id: j['id'] as String,
        landId: j['l'] as String,
        prompt: j['p'] as String,
        options: [for (final e in j['o'] as List<dynamic>) e as String],
        correct: j['c'] as int,
        minAge: j['a'] as int,
        maxAge: j['b'] as int,
        difficulty: j['d'] as int,
        published: j['u'] as bool,
      );
}

String encodeList(List<Map<String, dynamic>> items) => jsonEncode(items);
