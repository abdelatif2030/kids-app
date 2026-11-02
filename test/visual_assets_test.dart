import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/curriculum/planned_vocab.dart';
import 'package:kids_app/curriculum/visual_assets.dart';
import 'package:kids_app/games/shape_games.dart';
import 'package:kids_app/library/vocab.dart';

void main() {
  test('planned words: unique ids, no clash with the library, Arabic and English present, ages 1-6', () {
    final ids = kPlannedVocab.map((w) => w.id).toList();
    expect(ids.toSet().length, ids.length);
    final lib = kVocab.map((v) => v.id).toSet();
    final libAr = kVocab.map((v) => v.ar).toSet();
    for (final w in kPlannedVocab) {
      expect(lib, isNot(contains(w.id)));
      // «نجمة» and «قلب» are also library words (sky star, body heart) in the library; as a SHAPE it is drawn in code, so the overlap is deliberate.
      if (!const {'نجمة', 'قلب'}.contains(w.ar)) expect(libAr, isNot(contains(w.ar)), reason: '${w.ar} is already in the library');
      expect(w.ar.trim(), isNotEmpty);
      expect(w.en.trim(), isNotEmpty);
      expect(w.minAge, inInclusiveRange(1, 6));
      expect(kPlannedCategories, contains(w.category));
    }
  });

  test('every missing area from the review is covered', () {
    final cats = kPlannedVocab.map((w) => w.category).toSet();
    expect(cats, containsAll(['colors', 'shapes', 'numbers', 'family', 'clothes', 'positions']));
    expect(kPlannedVocab.where((w) => w.category == 'numbers').length, 10);
  });

  test('the asset plan covers all 107 library words and every planned word exactly once', () {
    final plan = buildAssetPlan();
    expect(plan.length, kVocab.length + kPlannedVocab.length);
    expect(plan.map((a) => a.id).toSet().length, plan.length);
  });

  test('no library word is claimed as having final artwork: emoji are not final illustrations', () {
    for (final a in buildAssetPlan().where((a) => kVocab.any((v) => v.id == a.id))) {
      expect(a.status, AssetStatus.missing, reason: a.id);
    }
  });

  test('the only "drawn" pictures are the ones the code really draws, and the app really draws them', () {
    final shapeIds = {for (final k in ShapeKind.values) 'shape_${k.name}'};
    expect(kCodeDrawn.where((i) => i.startsWith('shape_')).toSet(), shapeIds);
    final places = {for (final p in Place.values) 'pos_${p.name}'};
    for (final id in kCodeDrawn.where((i) => i.startsWith('pos_'))) {
      expect(places.map((p) => p.replaceAll('pos_', '')), contains(id.replaceAll('pos_', '')));
    }
    expect(kCodeDrawn.every((id) => kPlannedVocab.any((w) => w.id == id)), isTrue);
  });

  test('priority follows the owner\'s order and every category has a priority', () {
    expect(kAssetPriority['animals']! < kAssetPriority['food']!, isTrue);
    expect(kAssetPriority['food']! < kAssetPriority['colors']!, isTrue);
    expect(kAssetPriority['clothes']! < kAssetPriority['home']!, isTrue);
    for (final a in buildAssetPlan()) {
      expect(kAssetPriority, contains(a.category), reason: a.id);
    }
  });

  test('coverage counts add up; shapes are done, animals are not', () {
    final c = assetCoverage();
    for (final e in c.values) {
      expect(e.drawn + e.missing, e.total);
    }
    expect(c['shapes']!.missing, 0);
    expect(c['animals']!.drawn, 0);
  });

  test('the repository has no bitmap vocabulary art yet, so nothing may claim it', () {
    final dir = Directory('assets/vocab');
    expect(dir.existsSync(), isFalse, reason: 'if art arrives, update the plan and this test');
  });
}
