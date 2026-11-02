import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_logic.dart';
import 'package:kids_app/adventures/adventure_screen.dart';
import 'package:kids_app/curriculum/learning_adventures.dart';
import 'package:kids_app/curriculum/planned_vocab.dart';
import 'package:kids_app/curriculum/units.dart';
import 'package:kids_app/everyday/everyday_data.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/activities.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:kids_app/skills.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  final known = {
    ...kEducationalGames.map((g) => g.id),
    ...kFunGames.map((g) => 'fun_${g.id}'),
    'balloons', 'animal', 'colors', 'letters', 'memory', 'math',
  };
  final hasArabic = RegExp(r'[؀-ۿ]');

  test('unit ids are unique and every unit stays inside ages 1 to 6', () {
    expect(kCurriculumUnits.map((u) => u.id).toSet().length, kCurriculumUnits.length);
    for (final u in kCurriculumUnits) {
      expect(u.minAge, inInclusiveRange(1, 6), reason: u.id);
      expect(u.maxAge, inInclusiveRange(u.minAge, 6), reason: u.id);
    }
  });

  test('games, skills, words, apply steps and prerequisites all refer to things that exist', () {
    final ids = {for (final u in kCurriculumUnits) u.id};
    final skills = {for (final s in kSkills) s.id};
    final words = {...kVocab.map((v) => v.id), ...kPlannedVocab.map((w) => w.id)};
    final apply = {...kEverydayTasks.map((t) => t.id), ...kRealActivities.map((a) => a.id)};
    for (final u in kCurriculumUnits) {
      for (final g in u.games) {
        expect(known, contains(g), reason: '${u.id} -> $g');
      }
      for (final s in u.skills) {
        expect(skills, contains(s), reason: '${u.id} -> $s');
      }
      for (final w in u.words) {
        expect(words, contains(w), reason: '${u.id} -> $w');
      }
      for (final a in u.apply) {
        expect(apply, contains(a), reason: '${u.id} -> $a');
      }
      for (final p in u.prerequisites) {
        expect(ids, contains(p), reason: '${u.id} -> $p');
        final pre = kCurriculumUnits.firstWhere((x) => x.id == p);
        expect(pre.minAge, lessThanOrEqualTo(u.minAge), reason: '${u.id} prerequisite starts later');
      }
    }
  });

  test('a unit that lists an educational game overlaps that game\'s ages', () {
    for (final u in kCurriculumUnits) {
      for (final g in u.games.where((g) => kEducationalGames.any((e) => e.id == g))) {
        final info = kEducationalGames.firstWhere((e) => e.id == g);
        expect([for (var a = u.minAge; a <= u.maxAge; a++) if (info.fitsAge(a)) a], isNotEmpty, reason: '${u.id}/$g');
      }
    }
  });

  test('every unit is a draft with an Arabic objective, instruction and activity; nothing is marked reviewed', () {
    for (final u in kCurriculumUnits) {
      expect(u.review, UnitReview.draft, reason: u.id);
      expect(u.objective(), matches(hasArabic), reason: u.id);
      expect(u.instruction(), matches(hasArabic), reason: u.id);
      expect(u.activity(), matches(hasArabic), reason: u.id);
      expect(u.completion(), isNotEmpty);
    }
  });

  test('English text exists too (the dictionary-free tr2 path)', () async {
    await AppLocale.instance.set('en');
    for (final u in kCurriculumUnits) {
      expect(u.objective(), isNot(matches(hasArabic)), reason: u.id);
      expect(u.instruction(), isNot(matches(hasArabic)), reason: u.id);
    }
    await AppLocale.instance.set('ar');
  });

  test('the nine priority areas each have a unit, and the areas with no game yet say so', () {
    UnitMatcher has(String id) => kCurriculumUnits.where((u) => u.id == id);
    for (final id in [
      'ar_letters_see', 'ar_letter_sounds', 'col_names', 'shape_names', 'math_count_10', 'fam_names', 'clo_names', 'pos_words',
      'sci_animals_home', 'life_routine',
    ]) {
      expect(has(id), isNotEmpty, reason: id);
    }
    for (final id in ['fam_names', 'clo_names']) {
      final u = kCurriculumUnits.firstWhere((u) => u.id == id);
      expect(u.playable, isFalse, reason: '$id has no game yet and must not pretend to');
      expect(u.illustrationsNeeded, isNotEmpty);
      expect(u.audioNeeded, isNotEmpty);
    }
  });

  test('units never claim approved audio: audio needs are listed for every unit that teaches spoken words', () {
    for (final u in kCurriculumUnits.where((u) => u.words.any((w) => w.startsWith('num_') || w.startsWith('fam_') || w.startsWith('color_')))) {
      expect(u.audioNeeded, isNotEmpty, reason: u.id);
    }
  });

  test('every strand has a unit and every age from 1 to 6 has at least one', () {
    expect({for (final u in kCurriculumUnits) u.strand}, Strand.values.toSet());
    for (var a = 1; a <= 6; a++) {
      expect(kCurriculumUnits.where((u) => u.fitsAge(a)), isNotEmpty, reason: 'age $a');
    }
  });

  group('learning adventures', () {
    test('there is one for each weekly theme, and they only point at real things', () {
      expect({for (final a in kLearningAdventures) a.themeId}, {for (final t in kAdventureThemes) t.id});
      final unitIds = {for (final u in kCurriculumUnits) u.id};
      for (final a in kLearningAdventures) {
        final theme = kAdventureThemes.firstWhere((t) => t.id == a.themeId);
        for (final u in a.units) {
          expect(unitIds, contains(u), reason: '${a.themeId}/$u');
        }
        for (final g in a.play) {
          expect(theme.games, contains(g), reason: '${a.themeId} plays $g outside its weekly theme');
        }
        for (final r in [...a.discover, ...a.apply]) {
          expect(resolveRef(r, 4), isNotNull, reason: '${a.themeId}/${r.id}');
        }
        expect(a.discover, isNotEmpty);
        expect(a.apply, isNotEmpty);
      }
    });

    test('at every age 1 to 6 each adventure can show something to discover, to learn (from age 3) and to play', () {
      for (final theme in kAdventureThemes) {
        for (var age = 1; age <= 6; age++) {
          final fit = {for (final g in kEducationalGames) if (g.fitsAge(age)) g.id};
          final p = learningPathFor(theme, age, gamesFittingAge: fit)!;
          expect(p.discover, isNotNull, reason: '${theme.id} $age');
          expect(p.apply, isNotNull, reason: '${theme.id} $age');
          if (age >= 4) {
            expect(p.learn, isNotNull, reason: '${theme.id} $age');
            expect(p.play, isNotEmpty, reason: '${theme.id} $age');
          }
        }
      }
    });

    test('Animal World: story, names, where it lives, what it eats, a pet to feed — all existing pieces', () {
      final a = learningAdventureFor('animals')!;
      expect(a.discover.map((r) => r.id), containsAll(['bunny_garden']));
      expect(a.play, containsAll(['animal_habitats', 'feed_animal', 'listen_picture']));
      expect(a.apply.map((r) => r.id), contains('feed_pet'));
      expect(a.units, containsAll(['sci_animals_home', 'sci_animals_food']));
    });

    test('a discover item that does not fit the age falls back to one that does', () {
      final a = learningAdventureFor('animals')!;
      expect(pickRef(a.discover, 4)!.fits, isTrue);
      expect(pickRef(a.discover, 1)!.title, isNotEmpty); // a toddler still gets something gentle
    });

    testWidgets('the adventure screen card shows the five phases and adds no reward', (t) async {
      t.view.physicalSize = const Size(900, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: Scaffold(body: ListView(children: [LearningPathCard(theme: kAdventureThemes[2], age: 4)]))));
      for (final k in PhaseKind.values) {
        expect(find.textContaining('${phaseName(k)}:'), findsOneWidget, reason: k.name);
      }
      expect(find.byIcon(Icons.star_rounded), findsNothing);
      expect(t.takeException(), isNull);
    });
  });
}

typedef UnitMatcher = Iterable<CurriculumUnit>;
