import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/fun_sections.dart';
import 'package:kids_app/l10n/app_locale.dart';

/// Renders the «ألعاب للتسلية» hub and its section pages to PNG files for a visual check. Only when SHOTS_DIR is set (never in a normal run).
Future<void> _loadFont() async {
  final l = FontLoader('Tajawal');
  for (final f in ['Tajawal-Regular.ttf', 'Tajawal-Bold.ttf', 'Tajawal-ExtraBold.ttf', 'Tajawal-Black.ttf']) {
    final file = File('assets/fonts/$f');
    if (file.existsSync()) l.addFont(Future.value(ByteData.sublistView(file.readAsBytesSync())));
  }
  await l.load();
}

void main() {
  final dir = Platform.environment['SHOTS_DIR'];
  if (dir == null) {
    test('fun shots are skipped unless SHOTS_DIR is set', () {});
    return;
  }
  TestWidgetsFlutterBinding.ensureInitialized();
  final screens = <String, Widget Function()>{
    'hub': () => const FunSectionsScreen(),
    'racing': () => FunSectionScreen(section: kFunSections[0]),
    'action': () => FunSectionScreen(section: kFunSections[1]),
    'runners': () => FunSectionScreen(section: kFunSections[2]),
    'build': () => FunSectionScreen(section: kFunSections[3]),
    'puzzle': () => FunSectionScreen(section: kFunSections[4]),
    'girls': () => FunSectionScreen(section: kFunSections[5]),
  };
  for (final size in [const Size(844, 390), const Size(1280, 800)]) {
    for (final e in screens.entries) {
      testWidgets('${e.key} ${size.width.toInt()}', (t) async {
        await t.runAsync(_loadFont);
        AppLocale.instance.set('ar');
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        addTearDown(t.view.reset);
        final key = GlobalKey();
        await t.pumpWidget(RepaintBoundary(
          key: key,
          child: MaterialApp(debugShowCheckedModeBanner: false, theme: ThemeData(fontFamily: 'Tajawal', useMaterial3: true), builder: (c, child) => Directionality(textDirection: TextDirection.rtl, child: child!), home: e.value()),
        ));
        for (var i = 0; i < 6; i++) {
          await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 500)));
          await t.pump(const Duration(milliseconds: 100));
        }
        final boundary = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final image = await t.runAsync(() => boundary.toImage());
        final bytes = await t.runAsync(() => image!.toByteData(format: ui.ImageByteFormat.png));
        File('$dir/fun_${e.key}_${size.width.toInt()}.png').writeAsBytesSync(bytes!.buffer.asUint8List());
      });
    }
  }
}
