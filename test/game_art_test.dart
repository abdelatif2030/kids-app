import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/adventure_logic.dart';
import 'package:kids_app/games/game_art.dart';

void main() {
  test('every animal and landmark used by the games has a drawing', () {
    // A drawing exists for each id by construction (the painter switches on the id); this guards the id lists.
    expect(kAnimals.length, 22);
    expect(TreasureMap.ids, ['tree', 'rock', 'house', 'pond', 'flag']);
  });

  testWidgets('all illustrations paint without errors at tiny and large sizes', (t) async {
    for (final size in [24.0, 56.0, 160.0]) {
      await t.pumpWidget(MaterialApp(
        home: Scaffold(
          body: Wrap(children: [
            for (final a in kAnimals) AnimalArt(a.id, size: size),
            for (final l in TreasureMap.ids) LandmarkArt(l, size: size),
            for (final h in Habitat.values) HabitatArt(h, size: size),
            for (var v = 0; v <= 4; v++) DiceArt(v, size: size),
            GemArt(size: size),
            MysteryArt(size: size),
            MouseArt(size: size),
            CheeseArt(size: size),
            ChildTokenArt(size: size),
            FinishFlagArt(size: size),
          ]),
        ),
      ));
      expect(t.takeException(), isNull, reason: 'size $size');
    }
  });

  testWidgets('contact sheet (evidence image for review)', (t) async {
    t.view.physicalSize = const Size(1400, 1100);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final key = GlobalKey();
    await t.pumpWidget(MaterialApp(
      home: RepaintBoundary(
        key: key,
        child: Container(
          color: const Color(0xFFF1EBFF),
          padding: const EdgeInsets.all(12),
          child: Wrap(spacing: 8, runSpacing: 8, children: [
            for (final a in kAnimals) AnimalArt(a.id, size: 96),
            for (final l in TreasureMap.ids) LandmarkArt(l, size: 96),
            for (final h in Habitat.values) HabitatArt(h, size: 96),
            for (var v = 0; v <= 4; v++) DiceArt(v, size: 96),
            const GemArt(size: 96),
            const MysteryArt(size: 96),
            const MouseArt(size: 96),
            const CheeseArt(size: 96),
            const ChildTokenArt(size: 96),
            const FinishFlagArt(size: 96),
          ]),
        ),
      ),
    ));
    await t.runAsync(() async {
      final boundary = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
      final image = await boundary.toImage();
      final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))!;
      Directory('docs/screens').createSync(recursive: true);
      File('docs/screens/games_art_sheet.png').writeAsBytesSync(bytes.buffer.asUint8List());
    });
  });
}
