import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/studio/creations.dart';
import 'package:kids_app/studio/drawing_model.dart';
import 'package:kids_app/studio/word_builder.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const canvas = Size(400, 200);

  group('drawing model', () {
    test('strokes are stored in drawing space and survive a resize', () {
      final m = DrawingModel()..begin(const Offset(200, 100), canvas, 0xFF000000, 8);
      m.extend(const Offset(400, 200), canvas);
      expect(m.end(), isTrue);
      final p = m.strokes.single.points;
      expect(p.first, const Offset(500, 500));
      expect(p.last, const Offset(1000, 1000));
      // On a canvas twice as wide, the same point maps to the same place relatively.
      expect(DrawingModel.toCanvas(p.first, const Size(800, 200)), const Offset(400, 100));
    });
    test('points outside the canvas are clamped', () {
      expect(DrawingModel.toSpace(const Offset(-20, 900), canvas), const Offset(0, 1000));
      expect(DrawingModel.toSpace(const Offset(5, 5), Size.zero), Offset.zero);
    });
    test('undo, redo and a new stroke clears redo', () {
      final m = DrawingModel();
      void stroke() {
        m.begin(const Offset(1, 1), canvas, 1, 4);
        m.end();
      }
      stroke();
      stroke();
      expect(m.undo(), isTrue);
      expect(m.strokes.length, 1);
      expect(m.canRedo, isTrue);
      expect(m.redo(), isTrue);
      expect(m.strokes.length, 2);
      m.undo();
      stroke();
      expect(m.canRedo, isFalse);
      expect(m.redo(), isFalse);
    });
    test('clear can be undone, and history is bounded', () {
      final m = DrawingModel();
      for (var i = 0; i < DrawingModel.maxHistory + 30; i++) {
        m.begin(const Offset(1, 1), canvas, 1, 4);
        m.end();
      }
      expect(m.undoDepth, DrawingModel.maxHistory);
      m.clear();
      expect(m.strokes, isEmpty);
      m.undo();
      expect(m.strokes, isNotEmpty);
    });
    test('save and reopen keep strokes and template; damaged data opens empty', () {
      final m = DrawingModel(template: 'star')
        ..begin(const Offset(10, 10), canvas, 0xFFE53935, 8)
        ..extend(const Offset(50, 60), canvas);
      m.end();
      final back = DrawingModel.fromData(m.toData());
      expect(back.template, 'star');
      expect(back.strokes.length, 1);
      expect(back.strokes.single.color, 0xFFE53935);
      expect(DrawingModel.fromData({'s': 'garbage'}).strokes, isEmpty);
      expect(DrawingModel.fromData({'t': 'nope'}).template, isNull);
    });
    test('every template builds a non-empty outline', () {
      for (final id in kTemplates.keys) {
        expect(templatePath(id).getBounds().isEmpty, isFalse, reason: id);
      }
    });
  });

  group('word builder', () {
    test('tiles keep Arabic marks with their letter and the logical order', () {
      expect(wordTiles('قطة'), ['ق', 'ط', 'ة']);
      expect(wordTiles('بَاب'), ['بَ', 'ا', 'ب']);
      expect(wordTiles('cat'), ['c', 'a', 't']);
    });
    test('buildable words respect age and length, in both languages', () {
      for (final v in buildableWords(3, english: false)) {
        expect(wordTiles(v.ar).length, inInclusiveRange(2, 6));
        expect(3, inInclusiveRange(v.minAge, v.maxAge));
      }
      expect(buildableWords(3, english: true).every((v) => v.en != null), isTrue);
      expect(buildableWords(3, english: false), isNotEmpty);
    });
    test('placing in order finishes; wrong full order keeps tiles and allows undo', () {
      final s = WordBuilderState('قطة', random: Random(1));
      final order = [for (final l in ['ق', 'ط', 'ة']) s.tiles.indexOf(l)];
      // Wrong order first.
      expect(s.place(order[1]), isTrue);
      expect(s.place(order[0]), isTrue);
      expect(s.place(order[2]), isTrue);
      expect(s.isFull, isTrue);
      expect(s.isCorrect, isFalse);
      expect(s.done, isFalse);
      expect(s.undo(), isTrue);
      expect(s.undo(), isTrue);
      s.reset();
      expect(s.placed, '');
      for (final i in order) {
        expect(s.place(i), isTrue);
      }
      expect(s.placed, 'قطة');
      expect(s.done, isTrue);
      expect(s.firstTry, isFalse);
      expect(s.place(0), isFalse);
    });
    test('a used tile cannot be placed twice and the word never starts solved', () {
      final s = WordBuilderState('cat', random: Random(3));
      expect(s.tiles.join(), isNot('cat'));
      expect(s.place(0), isTrue);
      expect(s.place(0), isFalse);
    });
    test('every vocabulary word used by the builder can be solved', () {
      for (final v in kVocab.take(40)) {
        final s = WordBuilderState(v.ar, random: Random(2));
        for (final l in wordTiles(v.ar)) {
          final i = [for (var k = 0; k < s.tiles.length; k++) if (!s.isUsed(k) && s.tiles[k] == l) k].first;
          s.place(i);
        }
        expect(s.isCorrect, isTrue, reason: v.ar);
      }
    });
  });

  group('gallery names', () {
    setUp(() => SharedPreferences.setMockInitialValues({}));
    test('cleanName trims, flattens and limits', () {
      expect(FamilyGallery.cleanName('  hello\n  world '), 'hello world');
      expect(FamilyGallery.cleanName('   '), isNull);
      expect(FamilyGallery.cleanName('x' * 80)!.length, FamilyGallery.maxNameLength);
    });
    test('rename works for the owner only and a delete leaves others', () async {
      await FamilyGallery.save(const Creation('a', 'c1', CreationKind.drawing, '2026-10-29', {'s': []}));
      await FamilyGallery.save(const Creation('b', 'c2', CreationKind.drawing, '2026-10-29', {'s': []}));
      expect(await FamilyGallery.rename('a', 'c2', 'steal'), isFalse);
      expect(await FamilyGallery.rename('a', 'c1', 'My sun'), isTrue);
      expect((await FamilyGallery.forChild('c1')).single.name, 'My sun');
      expect((await FamilyGallery.forChild('c2')).single.name, isNull);
      expect(await FamilyGallery.rename('zzz', 'c1', 'x'), isFalse);
    });
    test('corrupted gallery storage reads as empty instead of crashing', () async {
      SharedPreferences.setMockInitialValues({'family_gallery': '{not json'});
      expect(await FamilyGallery.forChild('c1'), isEmpty);
    });
  });
}
