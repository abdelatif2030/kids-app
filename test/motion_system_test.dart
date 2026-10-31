import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/motion_system.dart';

Widget _app(Widget child, {bool reduce = false}) => MaterialApp(
  builder: (c, w) => MediaQuery(
    data: MediaQuery.of(c).copyWith(disableAnimations: reduce),
    child: w!,
  ),
  home: Scaffold(body: Center(child: child)),
);

double _dy(WidgetTester t, Key k) => t.getTopLeft(find.byKey(k)).dy;

void main() {
  tearDown(() => Motion.forceAmbient = null);

  test('durations stay inside the agreed ranges', () {
    expect(Motion.micro.inMilliseconds, inInclusiveRange(120, 180));
    expect(Motion.button.inMilliseconds, inInclusiveRange(160, 220));
    expect(Motion.page.inMilliseconds, inInclusiveRange(250, 350));
    expect(Motion.entrance.inMilliseconds, inInclusiveRange(300, 450));
    expect(Motion.floatCycle.inSeconds, inInclusiveRange(3, 5));
    expect(Motion.rotateCycle.inSeconds, inInclusiveRange(5, 8));
  });

  testWidgets('float moves the icon when motion is allowed', (t) async {
    Motion.forceAmbient = true;
    await t.pumpWidget(
      _app(
        const AnimatedIconWrapper(
          child: SizedBox(key: ValueKey('i'), width: 20, height: 20),
        ),
      ),
    );
    final a = _dy(t, const ValueKey('i'));
    await t.pump(const Duration(milliseconds: 1000));
    expect(_dy(t, const ValueKey('i')), isNot(a));
  });

  testWidgets('reduced motion: nothing moves and no frame stays scheduled', (
    t,
  ) async {
    Motion.forceAmbient = true;
    await t.pumpWidget(
      _app(
        const AnimatedIconWrapper(
          child: SizedBox(key: ValueKey('i'), width: 20, height: 20),
        ),
        reduce: true,
      ),
    );
    final a = _dy(t, const ValueKey('i'));
    await t.pump(const Duration(milliseconds: 1000));
    expect(_dy(t, const ValueKey('i')), a);
    expect(t.binding.hasScheduledFrame, isFalse);
  });

  testWidgets(
    'turning reduce-motion on stops a running effect and off again restarts it',
    (t) async {
      Motion.forceAmbient = true;
      final reduce = ValueNotifier(false);
      await t.pumpWidget(
        ValueListenableBuilder<bool>(
          valueListenable: reduce,
          builder: (_, r, _) => _app(
            const AnimatedIconWrapper(
              child: SizedBox(key: ValueKey('i'), width: 20, height: 20),
            ),
            reduce: r,
          ),
        ),
      );
      await t.pump(const Duration(milliseconds: 700));
      reduce.value = true;
      await t.pump();
      final still = _dy(t, const ValueKey('i'));
      await t.pump(const Duration(milliseconds: 700));
      expect(_dy(t, const ValueKey('i')), still);
      reduce.value = false;
      await t.pump();
      await t.pump(const Duration(milliseconds: 700));
      expect(_dy(t, const ValueKey('i')), isNot(still));
    },
  );

  testWidgets('a page covered by another page stops its endless animation (tickers are muted), then resumes', (t) async {
    Motion.forceAmbient = true;
    final nav = GlobalKey<NavigatorState>();
    await t.pumpWidget(MaterialApp(
      navigatorKey: nav,
      home: const Scaffold(body: Center(child: AnimatedIconWrapper(child: SizedBox(key: ValueKey('i'), width: 20, height: 20)))),
    ));
    await t.pump(const Duration(milliseconds: 500));
    expect(t.binding.hasScheduledFrame, isTrue); // running on top
    nav.currentState!.push(MaterialPageRoute<void>(builder: (_) => const Scaffold(body: Text('top'))));
    await t.pump();
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(milliseconds: 50));
    // the page behind is not visible any more: its ticker is muted, so it asks for no more frames
    expect(t.binding.hasScheduledFrame, isFalse);
    nav.currentState!.pop();
    await t.pump();
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(milliseconds: 50));
    expect(t.binding.hasScheduledFrame, isTrue); // back on top: moving again
  });

  testWidgets('dispose: removing the widget leaves nothing running', (t) async {
    Motion.forceAmbient = true;
    await t.pumpWidget(
      _app(
        const AnimatedIconWrapper(
          effect: IconEffect.breathe,
          child: SizedBox(width: 20, height: 20),
        ),
      ),
    );
    await t.pump(const Duration(milliseconds: 300));
    await t.pumpWidget(_app(const SizedBox()));
    await t.pump();
    expect(t.binding.hasScheduledFrame, isFalse);
  });

  testWidgets('press feedback shrinks while pressed and the tap still works', (t) async {
    var taps = 0;
    await t.pumpWidget(_app(PressFeedback(
      child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => taps++, child: const SizedBox(key: ValueKey('b'), width: 100, height: 100)),
    )));
    final g = await t.startGesture(t.getCenter(find.byKey(const ValueKey('b'))));
    await t.pump(Motion.micro);
    expect(t.getSize(find.byKey(const ValueKey('b'))).width, 100); // layout size unchanged (transform only)
    expect(t.widget<AnimatedScale>(find.byType(AnimatedScale)).scale, lessThan(1));
    await g.up();
    await t.pump(Motion.micro);
    expect(taps, 1);
    expect(t.widget<AnimatedScale>(find.byType(AnimatedScale)).scale, 1);
  });

  testWidgets('press feedback is off under reduced motion', (t) async {
    await t.pumpWidget(
      _app(
        const PressFeedback(child: SizedBox(width: 10, height: 10)),
        reduce: true,
      ),
    );
    expect(find.byType(AnimatedScale), findsNothing);
  });

  testWidgets(
    'reward celebrates only when the value changes, never at the first build',
    (t) async {
      Widget build(int v) => _app(
        AnimatedReward(
          trigger: v,
          child: const SizedBox(width: 40, height: 40),
        ),
      );
      await t.pumpWidget(build(1));
      await t.pump(const Duration(milliseconds: 100));
      expect(find.byKey(const ValueKey('reward_sparkle')), findsNothing);
      await t.pumpWidget(build(2));
      await t.pump(const Duration(milliseconds: 100));
      expect(find.byKey(const ValueKey('reward_sparkle')), findsOneWidget);
      await t.pump(Motion.celebrate + const Duration(milliseconds: 100));
      expect(find.byKey(const ValueKey('reward_sparkle')), findsNothing);
    },
  );

  testWidgets('reward does not sparkle with reduced motion', (t) async {
    Widget build(int v) => _app(
      AnimatedReward(trigger: v, child: const SizedBox(width: 40, height: 40)),
      reduce: true,
    );
    await t.pumpWidget(build(1));
    await t.pumpWidget(build(2));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.byKey(const ValueKey('reward_sparkle')), findsNothing);
  });

  testWidgets(
    'works right-to-left and the loading button shows a spinner and ignores taps',
    (t) async {
      var taps = 0;
      await t.pumpWidget(
        Directionality(
          textDirection: TextDirection.rtl,
          child: _app(
            AnimatedActionButton(
              label: 'ok',
              loading: true,
              onPressed: () => taps++,
            ),
          ),
        ),
      );
      expect(find.byType(CircularProgressIndicator), findsOneWidget);
      await t.tap(find.byType(FilledButton), warnIfMissed: false);
      expect(taps, 0);
    },
  );
}
