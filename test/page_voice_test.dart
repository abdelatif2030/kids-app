import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/media/page_voice.dart';

void main() {
  test('the two page greetings exist and are inside a folder that pubspec bundles', () {
    final pubspec = File('pubspec.yaml').readAsStringSync();
    for (final a in [PageVoice.playToday, PageVoice.learnToday]) {
      expect(File(a).existsSync(), isTrue, reason: a);
      expect(File(a).lengthSync(), greaterThan(2000), reason: a);
      expect(pubspec.contains(a.substring(0, a.lastIndexOf('/') + 1)), isTrue, reason: a);
    }
  });
}
