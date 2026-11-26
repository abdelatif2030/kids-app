import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/fun_sections.dart';
import 'package:kids_app/media/section_voice.dart';

/// Each section of «ألعاب للتسلية» has the owner's spoken greeting (2026-11-26) and plays it when the section opens.
void main() {
  test('all six sections have a recording that is bundled', () {
    expect(kFunSections.map((s) => s.id), containsAll(['racing', 'action', 'runners', 'build', 'puzzle', 'girls']));
    for (final s in kFunSections) {
      final asset = SectionVoice.clips['fun_${s.id}'];
      expect(asset, isNotNull, reason: s.id);
      expect(File(asset!).existsSync(), isTrue, reason: asset);
      expect(File(asset).lengthSync(), greaterThan(20000), reason: asset);
    }
    expect(File('pubspec.yaml').readAsStringSync(), contains('- assets/audio/voices/fun_sections/'));
  });

  testWidgets('opening a section says its greeting (the page is wrapped in SectionVoiceOnEnter with the right id)', (t) async {
    SectionVoice.testing = true;
    for (final s in kFunSections) {
      await t.pumpWidget(MaterialApp(home: FunSectionScreen(section: s)));
      await t.pump();
      final w = t.widget<SectionVoiceOnEnter>(find.byType(SectionVoiceOnEnter));
      expect(w.id, 'fun_${s.id}');
    }
    SectionVoice.testing = false;
  });
}
