import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/picture_stage.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/studio/character_creator.dart';
import 'package:kids_app/studio/scene_builder.dart';
import 'package:kids_app/studio/story_pictures.dart';
import 'package:kids_app/studio/studio_screens.dart';
import 'package:kids_app/studio/word_builder.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

  test('the studio background picture is bundled', () {
    expect(File(kStudioBackgroundAsset).existsSync(), isTrue);
    expect(File('pubspec.yaml').readAsStringSync(), contains(kStudioBackgroundAsset));
  });

  testWidgets('every page inside the creative studio sits on the studio picture', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(1000, 700);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final pages = <String, Widget Function()>{
      'word builder': () => const WordBuilderScreen(child: kid),
      'picture story': () => const PictureStoryScreen(child: kid),
      'character': () => const CharacterCreatorScreen(child: kid),
      'scene': () => const SceneBuilderScreen(child: kid),
      'gallery': () => const ChildGalleryScreen(child: kid),
      'drawing': () => const DrawingScreen(child: kid),
    };
    for (final e in pages.entries) {
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: e.value()));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('studio_backdrop')), findsOneWidget, reason: e.key);
    }
  });
}
