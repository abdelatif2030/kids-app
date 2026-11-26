import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

void main() {
  test('every language folder of recorded game voices is listed in pubspec.yaml (an unlisted folder is not shipped: French was silent on the demo for that reason)', () {
    final pubspec = File('pubspec.yaml').readAsStringSync();
    for (final d in Directory('assets/games/learn_voice').listSync().whereType<Directory>()) {
      final name = d.uri.pathSegments.where((s) => s.isNotEmpty).last;
      final hasClips = d.listSync().any((f) => f.path.endsWith('.mp3'));
      if (hasClips) {
        expect(pubspec.contains('assets/games/learn_voice/$name/'), isTrue, reason: 'learn_voice/$name is not in pubspec.yaml');
      }
    }
  });
}
