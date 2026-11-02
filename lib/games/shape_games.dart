import 'dart:math';

import 'package:flutter/material.dart';

import '../design/worlds.dart';
import '../l10n/strings.dart';
import 'choice_games.dart';

// Shapes and positions are DRAWN IN CODE (no emoji, no bitmap): a shape is a shape, not a picture of something that
// happens to look like one. Both games run on the shared ChoiceGame (wrong tap fades, no score, no timer, one star).

enum ShapeKind { circle, square, triangle, rectangle, star, heart, diamond }

String shapeNameAr(ShapeKind k) => switch (k) {
      ShapeKind.circle => 'دائرة',
      ShapeKind.square => 'مربع',
      ShapeKind.triangle => 'مثلث',
      ShapeKind.rectangle => 'مستطيل',
      ShapeKind.star => 'نجمة',
      ShapeKind.heart => 'قلب',
      ShapeKind.diamond => 'معيّن',
    };

String shapeNameEn(ShapeKind k) => switch (k) {
      ShapeKind.circle => 'circle',
      ShapeKind.square => 'square',
      ShapeKind.triangle => 'triangle',
      ShapeKind.rectangle => 'rectangle',
      ShapeKind.star => 'star',
      ShapeKind.heart => 'heart',
      ShapeKind.diamond => 'diamond',
    };

/// Grammatical gender of the Arabic name, so the colour word agrees with it (دائرة حمراء, مثلث أحمر).
bool shapeIsFeminine(ShapeKind k) => k == ShapeKind.circle || k == ShapeKind.star;

class ShapeColor {
  final String id;
  final Color color;
  final String masculine;
  final String feminine;
  final String en;
  const ShapeColor(this.id, this.color, this.masculine, this.feminine, this.en);
}

const kShapeColors = <ShapeColor>[
  ShapeColor('red', Color(0xFFE5484D), 'أحمر', 'حمراء', 'red'),
  ShapeColor('blue', Color(0xFF3E7BE0), 'أزرق', 'زرقاء', 'blue'),
  ShapeColor('green', Color(0xFF3DAE5A), 'أخضر', 'خضراء', 'green'),
  ShapeColor('yellow', Color(0xFFF2C230), 'أصفر', 'صفراء', 'yellow'),
];

String shapeLabelAr(ShapeKind k, [ShapeColor? c]) =>
    c == null ? shapeNameAr(k) : '${shapeNameAr(k)} ${shapeIsFeminine(k) ? c.feminine : c.masculine}';
String shapeLabelEn(ShapeKind k, [ShapeColor? c]) => c == null ? shapeNameEn(k) : '${c.en} ${shapeNameEn(k)}';

/// Shapes that suit [age]: circle, square, triangle first; the rest later.
List<ShapeKind> shapesForAge(int age) => age <= 3
    ? const [ShapeKind.circle, ShapeKind.square, ShapeKind.triangle]
    : age == 4
        ? const [ShapeKind.circle, ShapeKind.square, ShapeKind.triangle, ShapeKind.rectangle]
        : ShapeKind.values;

class ShapePicture extends StatelessWidget {
  final ShapeKind kind;
  final Color color;
  final double size;
  const ShapePicture(this.kind, this.color, {super.key, this.size = 72});

  @override
  Widget build(BuildContext context) =>
      SizedBox(width: size, height: size, child: CustomPaint(painter: ShapePainter(kind, color)));
}

class ShapePainter extends CustomPainter {
  final ShapeKind kind;
  final Color color;
  const ShapePainter(this.kind, this.color);

  Path pathIn(Size s) {
    final w = s.width, h = s.height;
    final p = Path();
    switch (kind) {
      case ShapeKind.circle:
        p.addOval(Rect.fromLTWH(w * .06, h * .06, w * .88, h * .88));
      case ShapeKind.square:
        p.addRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * .1, h * .1, w * .8, h * .8), Radius.circular(w * .06)));
      case ShapeKind.rectangle:
        p.addRRect(RRect.fromRectAndRadius(Rect.fromLTWH(w * .02, h * .24, w * .96, h * .52), Radius.circular(w * .05)));
      case ShapeKind.triangle:
        p
          ..moveTo(w * .5, h * .08)
          ..lineTo(w * .94, h * .88)
          ..lineTo(w * .06, h * .88)
          ..close();
      case ShapeKind.diamond:
        p
          ..moveTo(w * .5, h * .04)
          ..lineTo(w * .94, h * .5)
          ..lineTo(w * .5, h * .96)
          ..lineTo(w * .06, h * .5)
          ..close();
      case ShapeKind.star:
        for (var i = 0; i < 10; i++) {
          final r = (i.isEven ? .46 : .2) * w;
          final a = -pi / 2 + i * pi / 5;
          final pt = Offset(w / 2 + r * cos(a), h * .53 + r * sin(a));
          i == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
        }
        p.close();
      case ShapeKind.heart:
        p
          ..moveTo(w * .5, h * .9)
          ..cubicTo(w * -.05, h * .5, w * .15, h * .06, w * .5, h * .3)
          ..cubicTo(w * .85, h * .06, w * 1.05, h * .5, w * .5, h * .9)
          ..close();
    }
    return p;
  }

  @override
  void paint(Canvas canvas, Size size) {
    final path = pathIn(size);
    canvas.drawPath(path, Paint()..color = color);
    canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = size.width * .05
          ..strokeJoin = StrokeJoin.round
          ..color = Color.alphaBlend(const Color(0x66000000), color));
  }

  @override
  bool shouldRepaint(ShapePainter old) => old.kind != kind || old.color != color;
}

/// «أين الشكل؟»: by age —
///  2–3: hear a shape name, pick it among three (all one colour, so colour cannot give the answer away);
///  4: the shape is shown, pick the one that is the same shape (the colours differ);
///  5–6: shape AND colour together («المثلث الأحمر»), and sometimes the number of corners.
List<ChoiceRound> makeShapeFinder(int age, Random r) {
  final kinds = shapesForAge(age);
  final rounds = <ChoiceRound>[];
  final usedKinds = <ShapeKind>[];
  while (rounds.length < kChoiceRounds) {
    final colors = ([...kShapeColors]..shuffle(r));
    final target = kinds[r.nextInt(kinds.length)];
    if (usedKinds.contains(target) && usedKinds.length < kinds.length) continue;
    usedKinds.add(target);
    final others = ([...kinds]..remove(target))..shuffle(r);
    if (age <= 3) {
      final c = colors.first;
      final opts = [target, ...others.take(2)]..shuffle(r);
      rounds.add(ChoiceRound('', [for (final k in opts) shapeNameAr(k)], opts.indexOf(target),
          prompt: tr2('أين ${_the(target)}؟', 'Where is the ${shapeNameEn(target)}?'),
          say: shapeNameAr(target),
          ref: target.name,
          visuals: [for (final k in opts) ShapePicture(k, c.color)]));
    } else if (age == 4) {
      final targetColor = colors[0];
      final opts = [target, ...others.take(2)]..shuffle(r);
      final cols = {for (final (i, k) in opts.indexed) k: colors[(i + 1) % colors.length]};
      rounds.add(ChoiceRound('', [for (final k in opts) shapeNameAr(k)], opts.indexOf(target),
          prompt: tr2('أيّ شكل يشبه هذا الشكل؟', 'Which one is the same shape?'),
          ref: target.name,
          top: ShapePicture(target, targetColor.color, size: 96),
          visuals: [for (final k in opts) ShapePicture(k, cols[k]!.color)]));
    } else {
      final askCorners = r.nextInt(3) == 0;
      if (askCorners) {
        const cornerShapes = [ShapeKind.circle, ShapeKind.triangle, ShapeKind.square];
        final t = cornerShapes[r.nextInt(3)];
        final n = switch (t) { ShapeKind.circle => 0, ShapeKind.triangle => 3, _ => 4 };
        final opts = [...cornerShapes]..shuffle(r);
        final c = colors.first;
        rounds.add(ChoiceRound('', [for (final k in opts) shapeNameAr(k)], opts.indexOf(t),
            prompt: n == 0
                ? tr2('أيّ شكل ليس له زوايا؟', 'Which shape has no corners?')
                : tr2('أيّ شكل له $n زوايا؟', 'Which shape has $n corners?'),
            ref: 'corners_${t.name}',
            visuals: [for (final k in opts) ShapePicture(k, c.color)]));
      } else {
        // The same shape in three colours, or three shapes in the asked colour: the child must use BOTH words.
        final c = colors[0];
        final other = colors[1];
        final wrongShape = others.first;
        final opts = <(ShapeKind, ShapeColor)>[(target, c), (target, other), (wrongShape, c)]..shuffle(r);
        final right = opts.indexWhere((o) => o.$1 == target && o.$2 == c);
        rounds.add(ChoiceRound('', [for (final o in opts) shapeLabelAr(o.$1, o.$2)], right,
            prompt: tr2('أين ${_the(target)} ${shapeIsFeminine(target) ? c.feminine : c.masculine}؟',
                'Where is the ${shapeLabelEn(target, c)}?'),
            say: shapeLabelAr(target, c),
            ref: target.name,
            visuals: [for (final o in opts) ShapePicture(o.$1, o.$2.color)]));
      }
    }
  }
  return rounds;
}

String _the(ShapeKind k) => 'ال${shapeNameAr(k)}';

// --- positions -----------------------------------------------------------------------------------

enum Place { above, below, beside, inside }

String placeAr(Place p) => switch (p) {
      Place.above => 'فوق',
      Place.below => 'تحت',
      Place.beside => 'بجانب',
      Place.inside => 'داخل',
    };

String placeEn(Place p) => switch (p) {
      Place.above => 'on top of',
      Place.below => 'under',
      Place.beside => 'next to',
      Place.inside => 'inside',
    };

enum Holder { table, box }

String holderAr(Holder h) => h == Holder.table ? 'الطاولة' : 'الصندوق';
String holderEn(Holder h) => h == Holder.table ? 'the table' : 'the box';

/// The places a ball can honestly be shown for each holder: nothing goes UNDER a box or INSIDE a table.
List<Place> placesFor(Holder h) =>
    h == Holder.table ? const [Place.above, Place.below, Place.beside] : const [Place.inside, Place.above, Place.beside];

class PositionScene extends StatelessWidget {
  final Holder holder;
  final Place place;
  const PositionScene(this.holder, this.place, {super.key});

  @override
  Widget build(BuildContext context) =>
      SizedBox(width: 132, height: 104, child: CustomPaint(painter: ScenePainter(holder, place)));
}

class ScenePainter extends CustomPainter {
  final Holder holder;
  final Place place;
  const ScenePainter(this.holder, this.place);

  @override
  void paint(Canvas canvas, Size size) {
    final sx = size.width / 132, sy = size.height / 104;
    canvas.scale(sx, sy);
    final wood = Paint()..color = const Color(0xFFB9803C);
    final dark = Paint()..color = const Color(0xFF8A5A22);
    final ball = Paint()..color = const Color(0xFFE5484D);
    void drawBall(Offset c) {
      canvas.drawCircle(c, 13, ball);
      canvas.drawCircle(c.translate(-4, -4), 4, Paint()..color = const Color(0x66FFFFFF));
    }

    // ground line
    canvas.drawRect(const Rect.fromLTWH(0, 98, 132, 6), Paint()..color = const Color(0xFF9ED48C));
    if (holder == Holder.table) {
      canvas.drawRect(const Rect.fromLTWH(14, 52, 70, 8), dark);
      canvas.drawRect(const Rect.fromLTWH(18, 60, 7, 38), wood);
      canvas.drawRect(const Rect.fromLTWH(73, 60, 7, 38), wood);
      switch (place) {
        case Place.above:
          drawBall(const Offset(49, 38));
        case Place.below:
          drawBall(const Offset(49, 84));
        default:
          drawBall(const Offset(112, 84));
      }
    } else {
      switch (place) {
        case Place.inside:
          drawBall(const Offset(49, 56));
        case Place.above:
          drawBall(const Offset(49, 36));
        default:
          drawBall(const Offset(112, 84));
      }
      canvas.drawRect(const Rect.fromLTWH(20, 58, 58, 40), wood);
      canvas.drawRect(const Rect.fromLTWH(20, 58, 58, 7), dark);
    }
  }

  @override
  bool shouldRepaint(ScenePainter old) => old.holder != holder || old.place != place;
}

/// «أين الكرة؟»: hear the sentence («الكرة تحت الطاولة»), pick the picture where the ball is there.
/// Age 3: two places; age 4: three; ages 5–6 also the box (inside / on top / next to).
List<ChoiceRound> makeWhereIsTheBall(int age, Random r) {
  final rounds = <ChoiceRound>[];
  for (var i = 0; i < kChoiceRounds; i++) {
    final holder = age >= 5 && i.isOdd ? Holder.box : Holder.table;
    var places = [...placesFor(holder)]..shuffle(r);
    if (age <= 3) places = places.take(2).toList();
    final target = places[r.nextInt(places.length)];
    final sentenceAr = 'الكرة ${placeAr(target)} ${holderAr(holder)}';
    final sentenceEn = 'The ball is ${placeEn(target)} ${holderEn(holder)}';
    rounds.add(ChoiceRound('', [for (final p in places) placeAr(p)], places.indexOf(target),
        prompt: tr2('أين الكرة؟ $sentenceAr', 'Where is the ball? $sentenceEn'),
        say: sentenceAr,
        ref: 'pos_${target.name}',
        visuals: [for (final p in places) PositionScene(holder, p)]));
  }
  return rounds;
}

class ShapeFinderGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const ShapeFinderGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'shape_finder';

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: tr2('أين الشكل؟', 'Find the shape'),
        instruction: tr2('اختر الشكل المطلوب.', 'Pick the shape that is asked.'),
        make: (r) => makeShapeFinder(age, r),
        random: random,
        world: RWorld.journey,
      );
}

class WhereIsBallGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const WhereIsBallGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'where_ball';

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: tr2('أين الكرة؟', 'Where is the ball?'),
        instruction: tr2('اسمع الجملة واختر الصورة.', 'Hear the sentence and pick the picture.'),
        make: (r) => makeWhereIsTheBall(age, r),
        random: random,
        world: RWorld.forest,
      );
}
