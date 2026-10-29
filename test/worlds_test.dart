import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/worlds.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/letter_fishing_game.dart';
import 'package:kids_app/games/numerals_game.dart';
import 'package:kids_app/journey/ui/kit.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

double contrast(Color a, Color b) {
  final l1 = _lumExact(a), l2 = _lumExact(b);
  final hi = l1 > l2 ? l1 : l2, lo = l1 > l2 ? l2 : l1;
  return (hi + .05) / (lo + .05);
}

double _lumExact(Color c) {
  double f(double v) => v <= .03928 ? v / 12.92 : _powD((v + .055) / 1.055, 2.4);
  return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b);
}

double _powD(double x, double y) {
  // x^y via exp/log (dart:math is not needed elsewhere in this file)
  return _exp(y * _ln(x));
}

double _ln(double x) {
  // series around 1 is slow; use the identity ln(x) = 2*atanh((x-1)/(x+1))
  final z = (x - 1) / (x + 1);
  var sum = 0.0, term = z;
  for (var i = 1; i < 60; i += 2) {
    sum += term / i;
    term *= z * z;
  }
  return 2 * sum;
}

double _exp(double x) {
  var sum = 1.0, term = 1.0;
  for (var i = 1; i < 40; i++) {
    term *= x / i;
    sum += term;
  }
  return sum;
}

Future<void> _show(WidgetTester t, Widget w, Size size, {double scale = 1, TextDirection dir = TextDirection.rtl}) async {
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(
    key: UniqueKey(),
    builder: (c, child) => MediaQuery(
      data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(scale)),
      child: Directionality(textDirection: dir, child: child!),
    ),
    home: w,
  ));
  await t.pump();
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  test('the colour maths used here is right (black on white is 21:1)', () {
    expect(contrast(Colors.black, Colors.white), closeTo(21, .05));
  });

  group('every world keeps the dark ink readable', () {
    for (final w in RWorld.values) {
      test('${w.name}: contrast of the ink on both ends of the sky is at least 7:1', () {
        final p = kWorldPalettes[w]!;
        expect(contrast(RC.ink, p.top), greaterThanOrEqualTo(7), reason: '${w.name} top');
        expect(contrast(RC.ink, p.bottom), greaterThanOrEqualTo(7), reason: '${w.name} bottom');
      });
    }
  });

  group('the background is only decoration', () {
    testWidgets('it sits behind the content, takes no taps and no screen-reader attention', (t) async {
      var taps = 0;
      await _show(
        t,
        Scaffold(
          body: WorldBackground(
            world: RWorld.journey,
            child: Center(child: FilledButton(key: const ValueKey('go'), onPressed: () => taps++, child: const Text('go'))),
          ),
        ),
        const Size(390, 800),
      );
      await t.tap(find.byKey(const ValueKey('go')));
      expect(taps, 1);
      expect(find.descendant(of: find.byType(WorldBackground), matching: find.byType(IgnorePointer)), findsWidgets);
      expect(find.descendant(of: find.byType(WorldBackground), matching: find.byType(ExcludeSemantics)), findsWidgets);
      expect(find.descendant(of: find.byType(WorldBackground), matching: find.byType(RepaintBoundary)), findsWidgets);
    });

    testWidgets('a decorated screen has no extra semantics nodes from the artwork', (t) async {
      final handle = t.ensureSemantics();
      await _show(t, const Scaffold(body: WorldBackground(world: RWorld.forest, child: Center(child: Text('hello')))), const Size(390, 800));
      final labelled = <String>[];
      void walk(SemanticsNode n) {
        if (n.label.isNotEmpty) labelled.add(n.label);
        n.visitChildren((c) {
          walk(c);
          return true;
        });
      }

      walk(t.getSemantics(find.text('hello')).parent ?? t.getSemantics(find.text('hello')));
      expect(labelled.where((l) => l != 'hello'), isEmpty);
      handle.dispose();
    });

    testWidgets('no animation: nothing keeps asking for frames', (t) async {
      await _show(t, const Scaffold(body: WorldBackground(world: RWorld.ocean, child: SizedBox())), const Size(390, 800));
      await t.pump(const Duration(seconds: 2));
      expect(t.binding.hasScheduledFrame, false); // reduced motion needs no special case: there is no motion
    });

    test('the painter only repaints when its world changes', () {
      expect(const WorldPainter(RWorld.space).shouldRepaint(const WorldPainter(RWorld.space)), false);
      expect(const WorldPainter(RWorld.space).shouldRepaint(const WorldPainter(RWorld.ocean)), true);
      expect(const WorldPainter(RWorld.space).shouldRepaint(const WorldPainter(RWorld.space, quiet: true)), true);
    });

    test('every world paints at every size, including empty and tiny, without errors', () {
      for (final w in RWorld.values) {
        for (final quiet in [false, true]) {
          for (final s in const [Size.zero, Size(1, 1), Size(320, 400), Size(360, 640), Size(390, 844), Size(768, 1024), Size(1024, 768), Size(1280, 800), Size(1920, 1080)]) {
            final rec = ui.PictureRecorder();
            WorldPainter(w, quiet: quiet).paint(Canvas(rec), s);
            rec.endRecording().dispose();
          }
        }
      }
    });
  });

  group('responsive and direction', () {
    for (final size in const [Size(320, 640), Size(360, 740), Size(390, 844), Size(768, 1024), Size(1024, 768), Size(1280, 800)]) {
      for (final dir in [TextDirection.rtl, TextDirection.ltr]) {
        testWidgets('all worlds, scrolling content, ${size.width.toInt()} wide, ${dir.name}, large text', (t) async {
          for (final w in RWorld.values) {
            await _show(
              t,
              Scaffold(
                body: WorldBackground(
                  world: w,
                  child: SafeArea(
                    child: ListView(children: [for (var i = 0; i < 12; i++) Card(child: ListTile(title: Text('Item $i with a longer label to wrap on small screens')))]),
                  ),
                ),
              ),
              size,
              scale: 1.6,
              dir: dir,
            );
            expect(t.takeException(), isNull, reason: w.name);
            final box = t.getSize(find.byType(WorldBackground));
            expect(box, size); // the world fills the window and never changes the layout
            await t.drag(find.byType(ListView), const Offset(0, -300)); // scrolling still works
            await t.pump();
          }
        });
      }
    }

    testWidgets('the artwork is not mirrored for right-to-left: the same picture in both directions', (t) async {
      Future<List<int>> shot(TextDirection d) async {
        final key = GlobalKey();
        t.view.physicalSize = const Size(400, 600);
        t.view.devicePixelRatio = 1;
        addTearDown(t.view.reset);
        await t.pumpWidget(RepaintBoundary(
          key: key,
          child: Directionality(textDirection: d, child: const WorldBackground(world: RWorld.journey, child: SizedBox.expand())),
        ));
        final b = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final img = await t.runAsync(() => b.toImage());
        final data = await t.runAsync(() => img!.toByteData());
        return data!.buffer.asUint8List();
      }

      expect(await shot(TextDirection.ltr), equals(await shot(TextDirection.rtl)));
    });
  });

  group('screens use the right world', () {
    testWidgets('listening games live in the ocean, letters in the forest, numbers and patterns in space', (t) async {
      await _show(t, const ListenPictureGame(childId: 'c1', age: 5), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_ocean')), findsOneWidget);
      await _show(t, const LetterFishingGame(childId: 'c1', age: 5, lang: 'ar'), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_forest')), findsOneWidget);
      await _show(t, const NumeralsGame(childId: 'c1', age: 5), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_space')), findsOneWidget);
      await _show(t, const PatternGame(childId: 'c1', age: 5), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_space')), findsOneWidget);
      await _show(t, const OddOneOutGame(childId: 'c1', age: 5), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_journey')), findsOneWidget);
    });

    testWidgets('PastelBackground (used by ~25 screens) is now the journey world, and "quiet" removes the decoration', (t) async {
      await _show(t, const Scaffold(body: PastelBackground(child: SizedBox())), const Size(390, 800));
      expect(find.byKey(const ValueKey('world_journey')), findsOneWidget);
      final painter = (t.widget(find.byKey(const ValueKey('world_journey'))) as CustomPaint).painter as WorldPainter;
      expect(painter.quiet, false);
      await _show(t, const Scaffold(body: PastelBackground(quiet: true, child: SizedBox())), const Size(390, 800));
      final quiet = (t.widget(find.byKey(const ValueKey('world_journey'))) as CustomPaint).painter as WorldPainter;
      expect(quiet.quiet, true);
    });
  });
}
