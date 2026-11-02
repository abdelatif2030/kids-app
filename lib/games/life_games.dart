import 'dart:math';

import 'package:flutter/material.dart';

import '../design/worlds.dart';
import '../l10n/strings.dart';
import 'choice_games.dart';

// Three small games built on the shared ChoiceGame engine (same rules: a wrong tap only fades, no score, no
// timer, one star the first time the set is finished). Each adds a verb the other games do not have:
// FEED (what does it eat?), SIZE (which is bigger?), ROUTINE (what comes next in my day?).
// Pictures are emojis, like the rest of the vocabulary, until real artwork exists.

/// An animal, its picture, and the foods it really eats (every one is shown only as a correct answer).
class AnimalFood {
  final String id;
  final String animal;
  final List<String> eats;
  const AnimalFood(this.id, this.animal, this.eats);
}

/// Foods a child can recognise as one clear picture. An animal's own foods are never used as wrong answers for it.
const kAnimalFoods = <AnimalFood>[
  AnimalFood('rabbit', '🐰', ['🥕']),
  AnimalFood('monkey', '🐵', ['🍌']),
  AnimalFood('cat', '🐱', ['🐟']),
  AnimalFood('dog', '🐶', ['🦴']),
  AnimalFood('mouse', '🐭', ['🧀']),
  AnimalFood('bear', '🐻', ['🍯', '🐟']),
  AnimalFood('chicken', '🐔', ['🌽']),
  AnimalFood('panda', '🐼', ['🎋']),
  AnimalFood('cow', '🐄', ['🌿']),
  AnimalFood('horse', '🐴', ['🌿', '🥕', '🍎']),
];

const _allFoods = ['🥕', '🍌', '🐟', '🦴', '🧀', '🍯', '🌽', '🎋', '🌿', '🍎'];

/// Animals that suit [age]: two-year-olds get the most familiar ones.
List<AnimalFood> animalsForAge(int age) => age <= 2
    ? [for (final a in kAnimalFoods) if (const ['rabbit', 'monkey', 'cat', 'dog', 'cow'].contains(a.id)) a]
    : kAnimalFoods;

/// «أطعم الحيوان»: the animal is shown; pick the food it eats among three.
List<ChoiceRound> makeFeedAnimal(int age, Random r) {
  final pool = animalsForAge(age);
  final rounds = <ChoiceRound>[];
  final used = <String>{};
  while (rounds.length < kChoiceRounds) {
    final a = pool[r.nextInt(pool.length)];
    if (used.contains(a.id) && used.length < pool.length) continue;
    used.add(a.id);
    final right = a.eats[r.nextInt(a.eats.length)];
    final wrong = ([..._allFoods]..shuffle(r)).where((f) => !a.eats.contains(f)).take(2);
    final opts = [right, ...wrong]..shuffle(r);
    rounds.add(ChoiceRound(a.animal, opts, opts.indexOf(right),
        prompt: tr2('ماذا يأكل هذا الحيوان؟', 'What does this animal eat?'), ref: a.id));
  }
  return rounds;
}

/// A pair where one is clearly larger in real life.
class SizePair {
  final String big;
  final String small;
  const SizePair(this.big, this.small);
}

const kSizePairs = <SizePair>[
  SizePair('🐘', '🐭'),
  SizePair('🌳', '🌱'),
  SizePair('🐳', '🐟'),
  SizePair('🏠', '🧱'),
  SizePair('🚌', '🚲'),
  SizePair('🐻', '🐤'),
  SizePair('🌕', '⭐'),
  SizePair('🍉', '🍒'),
];

/// «كبير أم صغير؟»: two pictures; pick the bigger one (or the smaller one) — odd rounds ask for the smaller.
List<ChoiceRound> makeBigSmall(int age, Random r) {
  final pool = [...kSizePairs]..shuffle(r);
  final rounds = <ChoiceRound>[];
  for (var i = 0; i < kChoiceRounds; i++) {
    final p = pool[i % pool.length];
    final askBig = age <= 2 ? true : i.isEven; // the youngest only look for the big one
    final bigFirst = r.nextBool();
    final opts = bigFirst ? [p.big, p.small] : [p.small, p.big];
    final target = askBig ? p.big : p.small;
    rounds.add(ChoiceRound('', opts, opts.indexOf(target),
        prompt: askBig ? tr2('أيهما الكبير؟', 'Which one is big?') : tr2('أيهما الصغير؟', 'Which one is small?')));
  }
  return rounds;
}

/// One part of a daily routine, in order.
class RoutineStep {
  final String emoji;
  final String Function() label;
  const RoutineStep(this.emoji, this.label);
}

/// Two simple routines. Order is the everyday one in most homes; nothing here is a rule about how a family lives.
final List<List<RoutineStep>> kRoutines = [
  [
    RoutineStep('🛏️', () => tr2('أصحو', 'Wake up')),
    RoutineStep('🚿', () => tr2('أغسل وجهي', 'Wash my face')),
    RoutineStep('🥣', () => tr2('آكل الفطور', 'Eat breakfast')),
    RoutineStep('🎒', () => tr2('أذهب للمدرسة أو الحضانة', 'Go to school')),
  ],
  [
    RoutineStep('🍽️', () => tr2('آكل العشاء', 'Eat dinner')),
    RoutineStep('🛁', () => tr2('آخذ حمّامًا', 'Have a bath')),
    RoutineStep('🪥', () => tr2('أنظّف أسناني', 'Brush my teeth')),
    RoutineStep('😴', () => tr2('أنام', 'Sleep')),
  ],
];

/// «ماذا بعد؟»: the step just done is shown; pick what comes next among three steps of the day.
List<ChoiceRound> makeNextInDay(int age, Random r) {
  final rounds = <ChoiceRound>[];
  final all = [for (final s in kRoutines) ...s];
  for (var i = 0; i < kChoiceRounds; i++) {
    final routine = kRoutines[(i + r.nextInt(2)) % kRoutines.length];
    final at = r.nextInt(routine.length - 1);
    final done = routine[at];
    final next = routine[at + 1];
    final wrong = ([...all]..shuffle(r)).where((s) => s.emoji != next.emoji && s.emoji != done.emoji).take(2);
    final opts = [next.emoji, ...wrong.map((s) => s.emoji)]..shuffle(r);
    rounds.add(ChoiceRound(done.emoji, opts, opts.indexOf(next.emoji),
        prompt: tr2('بعد ذلك ماذا نفعل؟', 'What do we do next?'), ref: 'routine_$at'));
  }
  return rounds;
}

class _Life extends StatelessWidget {
  final String childId;
  final String gameId;
  final String title;
  final String instruction;
  final RoundMaker make;
  final Random? random;
  final RWorld world;
  const _Life(this.childId, this.gameId, this.title, this.instruction, this.make, this.random, this.world);

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: title,
        instruction: instruction,
        make: make,
        random: random,
        world: world,
      );
}

class FeedAnimalGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const FeedAnimalGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'feed_animal';

  @override
  Widget build(BuildContext context) => _Life(childId, gameId, tr2('أطعم الحيوان', 'Feed the animal'),
      tr2('ماذا يأكل هذا الحيوان؟', 'What does this animal eat?'), (r) => makeFeedAnimal(age, r), random, RWorld.forest);
}

class BigSmallGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const BigSmallGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'big_small';

  @override
  Widget build(BuildContext context) => _Life(childId, gameId, tr2('كبير أم صغير؟', 'Big or small?'),
      tr2('اختر الأكبر أو الأصغر.', 'Pick the bigger or the smaller one.'), (r) => makeBigSmall(age, r), random, RWorld.space);
}

class NextInDayGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const NextInDayGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'next_in_day';

  @override
  Widget build(BuildContext context) => _Life(childId, gameId, tr2('رتّب يومي', 'Arrange my day'),
      tr2('ماذا نفعل بعد ذلك؟', 'What do we do next?'), (r) => makeNextInDay(age, r), random, RWorld.journey);
}
