import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/app_intro.dart';
import 'package:kids_app/design/worlds.dart';
import 'package:kids_app/design/motion.dart';

Widget app(Widget w, {bool reduce = false}) => MediaQuery(
      data: MediaQueryData(disableAnimations: reduce),
      child: MaterialApp(home: Scaffold(body: Center(child: w))),
    );

double opacityOf(WidgetTester t) {
  final o = t.widgetList<Opacity>(find.byType(Opacity));
  return o.isEmpty ? 1 : o.first.opacity;
}

void main() {
  testWidgets('Appear fades in and ends fully visible', (t) async {
    await t.pumpWidget(app(const Appear(child: Text('hi'))));
    await t.pump();
    expect(opacityOf(t), lessThan(1));
    await t.pump(const Duration(milliseconds: 600));
    expect(opacityOf(t), 1);
    expect(find.text('hi'), findsOneWidget);
  });

  testWidgets('with reduced motion nothing animates: no opacity layer, content visible at once', (t) async {
    await t.pumpWidget(app(const Appear(child: Text('hi')), reduce: true));
    expect(find.byType(Opacity), findsNothing);
    expect(find.text('hi'), findsOneWidget);
  });

  testWidgets('a later item in a list waits a little longer than the first', (t) async {
    await t.pumpWidget(app(const Column(children: [Appear(child: Text('a')), Appear(index: 4, child: Text('b'))])));
    await t.pump();
    await t.pump(const Duration(milliseconds: 100));
    final ops = t.widgetList<Opacity>(find.byType(Opacity)).toList();
    expect(ops.length, 2);
    expect(ops[0].opacity, greaterThan(0)); // the first one is moving
    expect(ops[1].opacity, 0); // the later one has not started yet
    await t.pump(const Duration(milliseconds: 800));
    expect(t.widgetList<Opacity>(find.byType(Opacity)).every((o) => o.opacity == 1), isTrue);
  });

  testWidgets('PopOnChange scales when the trigger changes and not with reduced motion', (t) async {
    Widget pop(bool v, {bool reduce = false}) => app(PopOnChange(trigger: v, child: const Text('x')), reduce: reduce);
    await t.pumpWidget(pop(false));
    await t.pumpWidget(pop(true));
    await t.pump(const Duration(milliseconds: 100));
    expect(t.widget<ScaleTransition>(find.descendant(of: find.byType(PopOnChange), matching: find.byType(ScaleTransition))).scale.value, greaterThan(1.0));
    await t.pump(const Duration(milliseconds: 500));
    expect(t.widget<ScaleTransition>(find.descendant(of: find.byType(PopOnChange), matching: find.byType(ScaleTransition))).scale.value, 1.0);
    await t.pumpWidget(pop(false, reduce: true));
    await t.pumpWidget(pop(true, reduce: true));
    await t.pump(const Duration(milliseconds: 100));
    expect(t.widget<ScaleTransition>(find.descendant(of: find.byType(PopOnChange), matching: find.byType(ScaleTransition))).scale.value, 1.0);
  });

  group('animated backgrounds', () {
    tearDown(() => WorldBackground.forceMotion = null);

    testWidgets('off under the test binding by default (so pumpAndSettle is never blocked)', (t) async {
      await t.pumpWidget(app(const SizedBox(width: 400, height: 600, child: WorldBackground(world: RWorld.ocean, child: SizedBox()))));
      expect(find.byKey(const ValueKey('world_motion_ocean')), findsNothing);
    });

    testWidgets('every moving world has a motion layer that paints over time, and it repaints without rebuilding the child', (t) async {
      WorldBackground.forceMotion = true;
      for (final w in [RWorld.journey, RWorld.forest, RWorld.ocean, RWorld.space, RWorld.story]) {
        await t.pumpWidget(app(SizedBox(width: 400, height: 600, child: WorldBackground(world: w, child: const SizedBox()))));
        expect(find.byKey(ValueKey('world_motion_${w.name}')), findsOneWidget, reason: w.name);
        await t.pump(const Duration(seconds: 3));
      }
      expect(t.takeException(), isNull);
    });

    testWidgets('calm and quiet worlds stay still, and so does reduced motion', (t) async {
      WorldBackground.forceMotion = true;
      await t.pumpWidget(app(const SizedBox(width: 400, height: 600, child: WorldBackground(world: RWorld.calm, child: SizedBox()))));
      expect(find.byKey(const ValueKey('world_motion_calm')), findsNothing);
      await t.pumpWidget(app(const SizedBox(width: 400, height: 600, child: WorldBackground(world: RWorld.journey, quiet: true, child: SizedBox()))));
      expect(find.byKey(const ValueKey('world_motion_journey')), findsNothing);
      await t.pumpWidget(app(const SizedBox(width: 400, height: 600, child: WorldBackground(world: RWorld.journey, child: SizedBox())), reduce: true));
      expect(find.byKey(const ValueKey('world_motion_journey')), findsNothing);
    });

    testWidgets('the motion layer takes no taps and the content on top still does', (t) async {
      WorldBackground.forceMotion = true;
      var tapped = 0;
      await t.pumpWidget(app(SizedBox(width: 400, height: 600, child: WorldBackground(world: RWorld.journey, child: TextButton(onPressed: () => tapped++, child: const Text('go'))))));
      await t.tap(find.text('go'));
      expect(tapped, 1);
    });
  });

  group('app intro', () {
    tearDown(() {
      AppIntro.forceShow = null;
      AppIntro.resetForTest();
      WorldBackground.forceMotion = null;
    });

    test('the old code-made logo intro is gone: only the owner\'s picture and video remain', () {
      expect(AppIntro.duration, const Duration(seconds: 2), reason: 'how long the picture stays if the video cannot play');
      final src = File('lib/design/app_intro.dart').readAsStringSync();
      expect(src.contains('AppLogo'), isFalse);
      expect(src.contains('intro_ar'), isFalse);
      expect(src.contains('_IntroSparkles'), isFalse);
    });

    testWidgets('skipped under tests by default; with reduced motion it is NOT skipped (owner decision: the intro always plays, skip is one tap)', (t) async {
      AppIntro.resetForTest();
      await t.pumpWidget(app(const AppIntro(child: Text('app'))));
      expect(find.text('app'), findsOneWidget);
      expect(find.byKey(const ValueKey('intro_video')), findsNothing);
      AppIntro.forceShow = true;
      AppIntro.resetForTest();
      await t.pumpWidget(app(AppIntro(key: UniqueKey(), child: const Text('app2')), reduce: true));
      await t.pump();
      expect(find.byKey(const ValueKey('intro_video')), findsOneWidget);
    });

    testWidgets('while the intro is on screen the page after it waits (a page pushed on top would hide the intro); when it ends the wait is over', (t) async {
      AppIntro.forceShow = true;
      AppIntro.resetForTest();
      expect(AppIntro.running.value, isFalse);
      var waited = false;
      await t.pumpWidget(app(AppIntro(key: UniqueKey(), child: const Text('app'))));
      await t.pump();
      expect(AppIntro.running.value, isTrue);
      AppIntro.whenFinished().then((_) => waited = true);
      await t.pump();
      expect(waited, isFalse);
      await t.tap(find.byKey(const ValueKey('intro_skip')));
      await t.pump();
      await t.pump();
      expect(AppIntro.running.value, isFalse);
      expect(waited, isTrue);
    });

    testWidgets('shows the intro; if the video cannot play the picture stays 2 s and then the app opens; shown once per run', (t) async {
      AppIntro.forceShow = true;
      AppIntro.resetForTest();
      await t.pumpWidget(app(const AppIntro(child: Text('app'))));
      await t.pump();
      expect(find.byKey(const ValueKey('intro_video')), findsOneWidget);
      expect(find.byKey(const ValueKey('intro_poster')), findsOneWidget, reason: 'the owner picture is shown while the video loads and instead of it');
      // there is no video decoder under the test binding: the failure is reported, the picture holds, then the app opens
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 300)));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('intro_video')), findsOneWidget);
      await t.pump(const Duration(milliseconds: 2100));
      expect(find.byKey(const ValueKey('intro_video')), findsNothing);
      // a second AppIntro in the same run does not play again
      await t.pumpWidget(app(AppIntro(key: UniqueKey(), child: const Text('again'))));
      await t.pump();
      expect(find.byKey(const ValueKey('intro_video')), findsNothing);
      // tapping skips at once
      AppIntro.resetForTest();
      await t.pumpWidget(app(AppIntro(key: UniqueKey(), child: const Text('app3'))));
      await t.pump(const Duration(milliseconds: 100));
      expect(find.byKey(const ValueKey('intro_video')), findsOneWidget);
      await t.tapAt(const Offset(50, 50));
      await t.pump();
      expect(find.byKey(const ValueKey('intro_video')), findsNothing);
    });

  });
}
