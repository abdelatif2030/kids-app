import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
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
}
