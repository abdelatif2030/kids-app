import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

/// The owner's picture packs (2026-11-26): every game has its skin pieces, key art, win picture and a linked skin.css; the
/// language world has its map, win picture and badges; the pubspec lists every folder.
void main() {
  const games = {'pumpkin_pie': 'pp', 'rhythm': 'rh', 'samurai': 'sa', 'golden_tail': 'gt', 'ocean_defense': 'od'};
  final pubspec = File('pubspec.yaml').readAsStringSync();

  for (final e in games.entries) {
    test('${e.key}: skin pieces, key art, win picture, linked css and a win class in the bundle', () {
      final d = 'assets/games/${e.key}';
      for (final f in ['skin/panel.webp', 'skin/ribbon.webp', 'skin/play.webp', 'skin/lv_open.webp', 'skin/lv_lock.webp', 'skin/pill_green.webp', 'card.webp', 'poster.webp', 'art/win.webp', 'art/icon_star.webp', 'art/icon_coin.webp', 'skin.css']) {
        expect(File('$d/$f').existsSync(), isTrue, reason: '$d/$f');
        expect(File('$d/$f').lengthSync(), greaterThan(500), reason: '$d/$f is empty');
      }
      expect(File('$d/index.html').readAsStringSync(), contains('skin.css'));
      expect(File('$d/skin.css').readAsStringSync(), contains('.${e.value}-panel'));
      expect(File('$d/game.js').readAsStringSync(), contains('${e.value}-win'), reason: 'the results screen gets the win picture');
      expect(pubspec, contains('- assets/games/${e.key}/skin/'));
      expect(pubspec, contains('- assets/games/${e.key}/art/'));
    });
  }

  test('alien sky has 6 backdrops and rhino summit 5 (the new ones are used by the races)', () {
    for (var i = 1; i <= 6; i++) { expect(File('assets/games/alien_sky/art/pano$i.webp').existsSync(), isTrue, reason: 'alien $i'); }
    for (var i = 1; i <= 5; i++) { expect(File('assets/games/rhino_summit/art/pano$i.webp').existsSync(), isTrue, reason: 'rhino $i'); }
  });

  test('English and German worlds: map, win picture and badges are bundled; the language cards have their pictures', () {
    for (final l in ['en', 'de']) {
      expect(File('assets/games/learn_letters/art/${l}_map.webp').existsSync(), isTrue);
      expect(File('assets/games/learn_letters/art/${l}_win.webp').existsSync(), isTrue);
      expect(File('assets/games/learn_lang/$l.webp').existsSync(), isTrue);
    }
    for (var i = 0; i < 9; i++) { expect(File('assets/games/learn_letters/art/en_i$i.webp').existsSync(), isTrue); }
    for (var i = 0; i < 10; i++) { expect(File('assets/games/learn_letters/art/de_i$i.webp').existsSync(), isTrue); }
    expect(pubspec, contains('- assets/games/learn_letters/art/'));
    expect(pubspec, contains('- assets/games/learn_lang/'));
  });

  test('the 252 new word pictures (assets/games/art/x_*.webp) are bundled', () {
    final n = Directory('assets/games/art').listSync().where((f) => f.uri.pathSegments.last.startsWith('x_')).length;
    expect(n, greaterThanOrEqualTo(250));
    expect(pubspec, contains('- assets/games/art/'));
  });
}
