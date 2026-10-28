import 'package:flutter/material.dart';

import '../lands.dart';
import '../models.dart';
import '../progress.dart';
import '../repository.dart';
import 'activity_screen.dart';
import '../../ui.dart' show Tappable;
import 'kit.dart';

/// The path of five levels of one land: finished levels show their stars, the
/// next one is open, and the rest are locked until the one before is finished.
class LandMapScreen extends StatelessWidget {
  final Land land;
  final ChildProfile child;
  const LandMapScreen({super.key, required this.land, required this.child});

  static const _xs = [0.5, 0.25, 0.72, 0.3, 0.62];
  static const _rowHeight = 132.0;

  void _open(BuildContext context, Activity a, LevelState state) {
    if (!state.unlocked) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(const SnackBar(content: Text('أنهِ المستوى السابق أولاً 🔒')));
      return;
    }
    Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => ActivityScreen(activity: a, child: child)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final progress = JourneyStore.instance.progressOf(child.id).lands[land.id]!;
        final activities = activitiesOf(land.id);
        return Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            foregroundColor: RC.ink,
            title: Text(land.title,
                style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink)),
          ),
          body: PastelBackground(
            child: SafeArea(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
                child: Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 480),
                    child: Column(
                      children: [
                        RCard(
                          color: land.color.withAlpha(60),
                          outline: land.color,
                          child: Row(
                            children: [
                              CircleAvatar(
                                radius: 28,
                                backgroundColor: land.color,
                                child: Icon(land.icon, color: Colors.white, size: 30),
                              ),
                              const SizedBox(width: 14),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(land.subtitle,
                                        style: const TextStyle(fontSize: 16, color: RC.ink)),
                                    const SizedBox(height: 6),
                                    RProgress(
                                      value: progress.completed / kLevelsPerLand,
                                      color: land.color,
                                    ),
                                    const SizedBox(height: 4),
                                    Text('${progress.completed} من $kLevelsPerLand مستويات',
                                        style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                                  ],
                                ),
                              ),
                              Text('${progress.stars}/${kLevelsPerLand * 3} ⭐',
                                  style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                            ],
                          ),
                        ),
                        const SizedBox(height: 12),
                        LayoutBuilder(builder: (context, c) {
                          final w = c.maxWidth;
                          final centers = [
                            for (var i = 0; i < kLevelsPerLand; i++)
                              Offset(w * _xs[i], 56 + i * _rowHeight),
                          ];
                          return SizedBox(
                            height: kLevelsPerLand * _rowHeight + 20,
                            child: Stack(
                              children: [
                                Positioned.fill(
                                  child: CustomPaint(painter: _PathPainter(centers, land.color)),
                                ),
                                for (var i = 0; i < kLevelsPerLand; i++)
                                  Positioned(
                                    left: centers[i].dx - 56,
                                    top: centers[i].dy - 48,
                                    width: 112,
                                    child: _Node(
                                      activity: activities[i],
                                      state: progress.levels[i],
                                      color: land.color,
                                      onTap: () => _open(context, activities[i], progress.levels[i]),
                                    ),
                                  ),
                              ],
                            ),
                          );
                        }),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _Node extends StatelessWidget {
  final Activity activity;
  final LevelState state;
  final Color color;
  final VoidCallback onTap;
  const _Node({required this.activity, required this.state, required this.color, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final n = activity.level;
    final status = state.completed
        ? 'مكتمل بـ ${state.bestStars} نجوم'
        : (state.unlocked ? 'متاح الآن' : 'مغلق');
    final Color fill = state.completed
        ? RC.mint
        : (state.unlocked ? color : Colors.white.withAlpha(180));
    final Color border = state.completed ? RC.good : (state.unlocked ? color : RC.outline.withAlpha(120));
    return Semantics(
      button: true,
      label: 'المستوى $n، ${activity.kindLabel}، $status',
      excludeSemantics: true,
      child: Tappable(
        onTap: onTap,
        radius: 44,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 84,
              height: 84,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: fill,
                border: Border.all(color: border, width: 4),
                boxShadow: [BoxShadow(color: border.withAlpha(90), offset: const Offset(0, 5))],
              ),
              child: Center(
                child: state.completed
                    ? Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.check_rounded, color: RC.good, size: 34),
                          StarRow(stars: state.bestStars, size: 16),
                        ],
                      )
                    : (state.unlocked
                        ? Text('$n',
                            style: const TextStyle(
                                fontSize: 38, fontWeight: FontWeight.w900, color: Colors.white))
                        : Icon(Icons.lock_rounded, color: RC.outline.withAlpha(180), size: 32)),
              ),
            ),
            const SizedBox(height: 6),
            Text(activity.kindLabel,
                textAlign: TextAlign.center,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: RC.ink)),
          ],
        ),
      ),
    );
  }
}

class _PathPainter extends CustomPainter {
  final List<Offset> points;
  final Color color;
  const _PathPainter(this.points, this.color);

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()..moveTo(points.first.dx, points.first.dy);
    for (var i = 1; i < points.length; i++) {
      final a = points[i - 1];
      final b = points[i];
      final midY = (a.dy + b.dy) / 2;
      path.cubicTo(a.dx, midY, b.dx, midY, b.dx, b.dy);
    }
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 8
      ..strokeCap = StrokeCap.round
      ..color = color.withAlpha(90);
    for (final metric in path.computeMetrics()) {
      var d = 0.0;
      while (d < metric.length) {
        canvas.drawPath(metric.extractPath(d, d + 14), paint);
        d += 28;
      }
    }
  }

  @override
  bool shouldRepaint(covariant _PathPainter old) => old.points != points || old.color != color;
}
