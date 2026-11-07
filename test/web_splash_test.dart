import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

void main() {
  test('the web intro is the page splash alone: it stays only while the app loads (no fixed minimum), then fades; no second picture, no Skip', () {
    final js = File('web/splash.js').readAsStringSync();
    expect(js, contains('MIN_MS = 0'));
    expect(js, contains('flutter-first-frame'));
    expect(js, contains('assets/FontManifest.json'), reason: 'the small start-up files are asked for early');
    expect(js, contains('assets/AssetManifest.bin.json'));
    final intro = File('lib/design/app_intro.dart').readAsStringSync();
    expect(intro, contains('if (kIsWeb) return;'), reason: 'the Flutter intro layer is not shown on the web');
    final html = File('web/index.html').readAsStringSync();
    expect(html, contains('id="splash"'));
    expect(html, contains('name="viewport"'), reason: 'without it a phone lays the page out 980 px wide and the picture jumps once when the app adds the tag');
    expect(js, contains("pre('main.dart.js', 'script')"), reason: 'the big downloads start together');
  });
}
