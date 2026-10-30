import 'dart:typed_data';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/layout.dart';
import 'package:kids_app/design/logo_backdrop.dart';
import 'package:kids_app/design/worlds.dart';
import 'package:kids_app/journey/ui/kit.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/l10n/language_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
  });

  Widget app(Widget home) => MaterialApp(key: UniqueKey(), home: Scaffold(body: home));

  testWidgets('every world carries the faint logo, which takes no taps and is not read aloud', (t) async {
    final h = t.ensureSemantics();
    var taps = 0;
    for (final w in RWorld.values) {
      await t.pumpWidget(app(WorldBackground(world: w, child: Center(child: GestureDetector(onTap: () => taps++, child: const Text('tap me'))))));
      expect(find.byKey(const ValueKey('bg_logo')), findsOneWidget, reason: w.name);
      await t.tap(find.text('tap me'));
    }
    expect(taps, RWorld.values.length);
    expect(find.bySemanticsLabel(RegExp('logo|شعار')), findsNothing);
    h.dispose();
  });

  testWidgets('PastelBackground (used by most child screens) shows it; logo:false hides it', (t) async {
    await t.pumpWidget(app(const PastelBackground(child: SizedBox())));
    expect(find.byKey(const ValueKey('bg_logo')), findsOneWidget);
    await t.pumpWidget(app(const WorldBackground(logo: false, child: SizedBox())));
    expect(find.byKey(const ValueKey('bg_logo')), findsNothing);
  });

  testWidgets('quiet and calm worlds use a fainter logo than the others', (t) async {
    double op() => t.widget<Opacity>(find.ancestor(of: find.byKey(const ValueKey('bg_logo')), matching: find.byType(Opacity)).first).opacity;
    await t.pumpWidget(app(const WorldBackground(world: RWorld.forest, child: SizedBox())));
    final normal = op();
    await t.pumpWidget(app(const WorldBackground(world: RWorld.calm, child: SizedBox())));
    expect(op(), lessThan(normal));
  });

  testWidgets('adult lists (CenteredList) have a very faint logo behind them and still scroll and tap', (t) async {
    var taps = 0;
    await t.pumpWidget(app(CenteredList(children: [
      for (var i = 0; i < 30; i++) ListTile(title: Text('row $i'), onTap: () => taps++),
    ])));
    expect(find.byKey(const ValueKey('bg_logo')), findsOneWidget);
    await t.tap(find.text('row 0'));
    expect(taps, 1);
    await t.scrollUntilVisible(find.text('row 29'), 300);
    expect(find.text('row 29'), findsOneWidget);
  });

  testWidgets('the first screen (language choice) shows the real logo', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(key: UniqueKey(), home: const LanguageScreen()));
    await t.pump();
    expect(find.byKey(const ValueKey('app_logo')), findsOneWidget);
  });

  testWidgets('a missing logo file shows nothing instead of an error', (t) async {
    final bundle = _MissingBundle();
    await t.pumpWidget(DefaultAssetBundle(bundle: bundle, child: app(const LogoBackdrop(child: Text('content')))));
    await t.pump();
    expect(find.text('content'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  testWidgets('fits at 320 px with large text and does not hide the content', (t) async {
    t.view.physicalSize = const Size(320, 640);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(
      key: UniqueKey(),
      home: MediaQuery(
        data: const MediaQueryData(textScaler: TextScaler.linear(1.6)),
        child: Scaffold(body: WorldBackground(child: const Center(child: Text('hello')))),
      ),
    ));
    expect(t.takeException(), isNull);
    expect(find.text('hello'), findsOneWidget);
  });
}

class _MissingBundle extends CachingAssetBundle {
  @override
  Future<ByteData> load(String key) => Future.error(Exception('missing $key'));
}
