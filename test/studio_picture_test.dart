import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);
  const ids = ['gallery', 'word', 'order', 'story', 'character', 'scene', 'drawing'];

  test('the studio picture is bundled', () {
    expect(File(kStudioPicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kStudioPicture));
  });

  testWidgets('seven islands and the arrow sit inside the picture and never overlap, upright, sideways and wide', (t) async {
    SharedPreferences.setMockInitialValues({});
    for (final size in const [Size(1672, 941), Size(844, 390), Size(390, 760)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const StudioScreen(child: kid)));
      await t.pump();
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      final rects = {for (final id in [...ids, 'back']) id: t.getRect(find.byKey(ValueKey('studio_$id')))};
      for (final e in rects.entries) {
        expect(box.contains(e.value.topLeft) && box.contains(e.value.bottomRight), isTrue, reason: '${e.key} at $size');
      }
      for (final a in ids) {
        for (final b in ids) {
          if (a.compareTo(b) < 0) expect(rects[a]!.overlaps(rects[b]!), isFalse, reason: '$a vs $b at $size');
        }
      }
      expect(t.takeException(), isNull, reason: '$size');
    }
    addTearDown(t.view.reset);
  });

  testWidgets('the drawing island opens the drawing page', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(1672, 941);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: StudioScreen(child: kid)));
    await t.pump();
    await t.tap(find.byKey(const ValueKey('studio_drawing')));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byType(DrawingScreen), findsOneWidget);
  });
}
