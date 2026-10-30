import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/app_logo.dart';
import 'package:kids_app/l10n/app_locale.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('the logo file is registered as an asset and is a real image with a transparent background', () async {
    expect(File('pubspec.yaml').readAsStringSync(), contains('assets/branding/logo.png'));
    final data = await rootBundle.load(AppLogo.asset);
    final codec = await ui.instantiateImageCodec(data.buffer.asUint8List());
    final frame = await codec.getNextFrame();
    expect(frame.image.width, greaterThan(200));
    expect(frame.image.height, greaterThan(200));
    final bytes = (await frame.image.toByteData())!;
    expect(bytes.getUint8(3), 0, reason: 'the top-left corner is transparent (no grid background)');
  });

  test('the logo is the new Rehlaty logo (the two 3D children over the name), trimmed to its edges', () async {
    final data = await rootBundle.load(AppLogo.asset);
    final image = (await (await ui.instantiateImageCodec(data.buffer.asUint8List())).getNextFrame()).image;
    // The new logo is about 1.28 times wider than tall (the old flat-drawing logo was nearly square, 330x315).
    expect(image.width / image.height, inInclusiveRange(1.2, 1.35));
    expect(image.width, inInclusiveRange(600, 1000));
  });

  test('the launcher and web icons exist', () {
    for (final f in [
      'android/app/src/main/res/mipmap-mdpi/ic_launcher.png',
      'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png',
      'web/favicon.png',
      'web/icons/Icon-192.png',
      'web/icons/Icon-512.png',
      'web/icons/Icon-maskable-512.png',
    ]) {
      expect(File(f).existsSync(), isTrue, reason: f);
    }
  });

  testWidgets('AppLogo shows the image with a spoken label in both languages', (t) async {
    for (final lang in ['ar', 'en']) {
      AppLocale.instance.set(lang);
      await t.pumpWidget(const MaterialApp(home: Scaffold(body: Center(child: AppLogo()))));
      await t.pump();
      expect(find.byKey(const ValueKey('app_logo')), findsOneWidget);
      final h = t.ensureSemantics();
      expect(find.bySemanticsLabel(lang == 'ar' ? 'شعار رحلتي' : 'Rehlaty logo'), findsOneWidget);
      h.dispose();
    }
  });
}
