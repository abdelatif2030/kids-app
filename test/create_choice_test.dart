import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/ui/create_choice.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

  test('the create picture is bundled', () {
    expect(File(kCreatePicture).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kCreatePicture));
  });

  testWidgets('two islands and the arrow sit inside the picture without overlapping; free drawing and the studio open their pages', (t) async {
    SharedPreferences.setMockInitialValues({});
    for (final size in const [Size(1672, 941), Size(844, 390)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      var back = 0;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: CreateChoiceScreen(child: kid, onBack: () => back++))));
      await t.pump();
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      final rects = {for (final k in ['create_back', 'create_drawing', 'create_studio']) k: t.getRect(find.byKey(ValueKey(k)))};
      for (final e in rects.entries) {
        expect(box.contains(e.value.topLeft) && box.contains(e.value.bottomRight), isTrue, reason: '${e.key} at $size');
      }
      expect(rects['create_drawing']!.overlaps(rects['create_studio']!), isFalse);
      await t.tap(find.byKey(const ValueKey('create_back')));
      expect(back, 1);
    }
    t.view.physicalSize = const Size(1672, 941);
    await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: CreateChoiceScreen(child: kid, onBack: () {}))));
    await t.pump();
    await t.tap(find.byKey(const ValueKey('create_drawing')));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byType(DrawingScreen), findsOneWidget);
    await t.pageBack();
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    await t.tap(find.byKey(const ValueKey('create_studio')));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byType(StudioScreen), findsOneWidget);
    addTearDown(t.view.reset);
  });
}
