import 'package:flutter/material.dart';

import '../l10n/strings.dart';

// Pictures and small activities for the stories. Everything is drawn in code (emoji on a painted sky): no image files.
// The story text in story_data.dart is untouched. The only NEW Arabic (and English) lines are in the activities below,
// and every one of them is wrapped in a [ReviewText], which is always marked "needs native review": a native Arabic
// speaker must read each line before the app is published. A test lists them all (test/story_extras_test.dart).

/// A new line written for the activities. Arabic and English are both new, so both need a native check.
class ReviewText {
  final String ar;
  final String en;
  const ReviewText(this.ar, this.en);

  /// Always true: nobody has reviewed these lines yet.
  bool get needsNativeReview => true;

  String get text => tr2(ar, en);
}

enum SceneSky { day, night, sunset, garden, rain, space, sea }

/// One emoji in a scene. [x] and [y] are the centre as fractions of the panel (0..1); [size] is a fraction of its height.
class ScenePiece {
  final String emoji;
  final double x;
  final double y;
  final double size;
  const ScenePiece(this.emoji, this.x, this.y, this.size);
}

class ChapterScene {
  final SceneSky sky;
  final List<ScenePiece> pieces;
  const ChapterScene(this.sky, this.pieces);
}

/// A small activity inside a story. No stars, no scores: a wrong tap only fades that choice.
sealed class StoryActivity {
  /// The chapter the activity sits under.
  final int chapter;
  final ReviewText prompt;
  final ReviewText done;
  const StoryActivity(this.chapter, this.prompt, this.done);
}

/// Tap the one picture that the prompt asks for.
class FindActivity extends StoryActivity {
  final List<String> items;
  final int correct;
  const FindActivity(super.chapter, super.prompt, super.done, this.items, this.correct);
}

/// Count the pictures and choose the number.
class CountActivity extends StoryActivity {
  final String emoji;
  final int count;
  final List<int> options;
  const CountActivity(super.chapter, super.prompt, super.done, this.emoji, this.count, this.options);
}

const _ok = ReviewText('أحسنت!', 'Well done!');

ChapterScene _s(SceneSky sky, List<ScenePiece> p) => ChapterScene(sky, p);
ScenePiece _p(String e, double x, double y, double s) => ScenePiece(e, x, y, s);

/// Scenes by story id, one per chapter, in chapter order.
final Map<String, List<ChapterScene>> kStoryScenes = {
  'moon_star': [
    _s(SceneSky.night, [_p('🌙', .5, .32, .42), _p('⭐', .18, .2, .14), _p('✨', .82, .26, .13), _p('🌟', .32, .68, .26)]),
    _s(SceneSky.night, [_p('🌙', .72, .32, .42), _p('🌟', .3, .6, .28), _p('💨', .52, .5, .14), _p('🍃', .5, .82, .14)]),
    _s(SceneSky.night, [_p('☁️', .5, .58, .52), _p('😴', .5, .45, .2), _p('🌙', .78, .22, .3), _p('⭐', .2, .2, .12)]),
  ],
  'three_apples': [
    _s(SceneSky.garden, [_p('🌳', .5, .38, .5), _p('🍎', .3, .84, .16), _p('🍎', .5, .88, .16), _p('🍎', .7, .84, .16), _p('👧', .2, .62, .24)]),
    _s(SceneSky.garden, [_p('🌳', .74, .36, .4), _p('👦', .34, .66, .26), _p('😢', .34, .4, .14), _p('👧', .62, .72, .24)]),
    _s(SceneSky.garden, [_p('🍎', .4, .5, .2), _p('🍎', .6, .5, .2), _p('👧', .22, .72, .24), _p('👦', .78, .72, .24), _p('💛', .5, .2, .16)]),
  ],
  'broken_cup': [
    _s(SceneSky.day, [_p('🏠', .5, .32, .32), _p('⚽', .3, .75, .2), _p('☕', .7, .7, .2)]),
    _s(SceneSky.day, [_p('😟', .5, .46, .34), _p('🥛', .78, .76, .16), _p('💔', .24, .26, .16)]),
    _s(SceneSky.sunset, [_p('👦', .5, .58, .32), _p('☕', .22, .72, .2), _p('💛', .5, .2, .16), _p('🤝', .78, .72, .16)]),
  ],
  'little_lamp': [
    _s(SceneSky.night, [_p('🛏️', .5, .68, .36), _p('🌙', .82, .2, .2), _p('🧸', .22, .78, .16)]),
    _s(SceneSky.night, [_p('💡', .5, .4, .42), _p('✨', .28, .3, .12), _p('✨', .72, .3, .12), _p('🛏️', .5, .8, .2)]),
    _s(SceneSky.night, [_p('🎈', .32, .42, .28), _p('😌', .7, .56, .26), _p('💡', .82, .2, .16)]),
  ],
  'raindrop': [
    _s(SceneSky.sea, [_p('🌊', .5, .72, .5), _p('💧', .5, .36, .22), _p('🐟', .2, .66, .16), _p('🐟', .8, .72, .16)]),
    _s(SceneSky.day, [_p('☁️', .5, .44, .52), _p('☀️', .82, .2, .2), _p('💧', .3, .78, .16), _p('💧', .5, .84, .16), _p('💧', .7, .78, .16)]),
    _s(SceneSky.rain, [_p('🌧️', .5, .26, .42), _p('💧', .5, .6, .2), _p('🌊', .5, .86, .4)]),
  ],
  'tiny_spaceship': [
    _s(SceneSky.space, [_p('🚀', .5, .42, .42), _p('🌍', .5, .9, .34), _p('✨', .2, .24, .12), _p('✨', .8, .3, .12)]),
    _s(SceneSky.space, [_p('🪐', .26, .42, .32), _p('🚀', .64, .56, .3), _p('🌟', .8, .2, .14), _p('⭐', .18, .8, .12)]),
    _s(SceneSky.space, [_p('🌍', .64, .62, .42), _p('🚀', .3, .36, .3), _p('⭐', .82, .2, .12), _p('🏠', .72, .26, .14)]),
  ],
  'bee_flower': [
    _s(SceneSky.garden, [_p('☀️', .85, .16, .2), _p('🐝', .5, .34, .22), _p('🌸', .3, .7, .3), _p('🌻', .7, .7, .3)]),
    _s(SceneSky.rain, [_p('💨', .4, .3, .3), _p('☁️', .2, .2, .22), _p('🌸', .5, .74, .3), _p('🐝', .72, .42, .16)]),
    _s(SceneSky.garden, [_p('🐝', .4, .46, .24), _p('🌸', .66, .68, .32), _p('💛', .5, .2, .16)]),
  ],
  'choice_island': [
    _s(SceneSky.sea, [_p('🏝️', .5, .56, .5), _p('⛵', .2, .78, .2), _p('🌊', .5, .92, .3)]),
    _s(SceneSky.garden, [_p('🌴', .3, .5, .36), _p('🌴', .7, .54, .34), _p('🦜', .5, .3, .16)]),
    _s(SceneSky.sea, [_p('🏖️', .5, .52, .42), _p('🦀', .28, .82, .16), _p('🐚', .74, .82, .14)]),
    _s(SceneSky.sunset, [_p('💛', .5, .4, .38), _p('🤝', .5, .78, .2)]),
    _s(SceneSky.day, [_p('💡', .5, .4, .32), _p('🌴', .2, .72, .22), _p('🌴', .8, .72, .22)]),
    _s(SceneSky.garden, [_p('😊', .34, .54, .3), _p('🐒', .66, .54, .26), _p('🌴', .5, .2, .2)]),
    _s(SceneSky.sunset, [_p('🌅', .5, .46, .46), _p('🏝️', .5, .86, .22)]),
  ],
  'bunny_garden': [
    _s(SceneSky.garden, [_p('🚪', .5, .46, .38), _p('🐰', .24, .76, .24), _p('🌷', .8, .76, .18)]),
    _s(SceneSky.garden, [_p('🪷', .5, .7, .3), _p('💧', .3, .5, .14), _p('🐰', .8, .58, .2)]),
    _s(SceneSky.garden, [_p('🌷', .2, .7, .22), _p('🌻', .5, .68, .26), _p('🌸', .8, .72, .22), _p('🐰', .5, .36, .2)]),
    _s(SceneSky.garden, [_p('🐸', .5, .54, .32), _p('🍃', .28, .78, .2), _p('🪷', .76, .8, .18)]),
    _s(SceneSky.sunset, [_p('🎵', .5, .28, .26), _p('🐸', .3, .66, .24), _p('🐰', .7, .66, .24)]),
    _s(SceneSky.garden, [_p('🐰', .3, .62, .3), _p('🌸', .74, .7, .22), _p('💬', .52, .26, .16)]),
    _s(SceneSky.garden, [_p('⏳', .5, .4, .3), _p('🌱', .5, .78, .2)]),
  ],
  'rainy_day': [
    _s(SceneSky.rain, [_p('🏫', .72, .46, .34), _p('🌧️', .3, .22, .3), _p('🎒', .3, .76, .2)]),
    _s(SceneSky.rain, [_p('☂️', .5, .44, .44), _p('💧', .26, .3, .12), _p('💧', .76, .36, .12)]),
    _s(SceneSky.rain, [_p('🌧️', .5, .24, .42), _p('👧', .5, .66, .28), _p('💦', .22, .8, .14)]),
    _s(SceneSky.sunset, [_p('🐱', .4, .58, .32), _p('🧣', .72, .66, .2), _p('❤️', .5, .22, .14)]),
    _s(SceneSky.day, [_p('🌈', .5, .42, .52), _p('☀️', .84, .16, .2)]),
  ],
  'music_box': [
    _s(SceneSky.night, [_p('🎶', .5, .32, .32), _p('🧸', .3, .72, .22), _p('🌙', .8, .22, .2)]),
  ],
};

/// One small activity for each story that has chapters. All text is new and needs a native check.
final Map<String, StoryActivity> kStoryActivities = {
  'moon_star': const FindActivity(0, ReviewText('اضغط على القمر', 'Tap the moon'), _ok, ['⭐', '🌙', '☁️', '☀️'], 1),
  'three_apples': const CountActivity(0, ReviewText('كم تفاحة ترى؟', 'How many apples can you see?'), _ok, '🍎', 3, [2, 3, 5]),
  'broken_cup': const FindActivity(0, ReviewText('أين الكوب؟', 'Where is the cup?'), _ok, ['⚽', '🎈', '☕'], 2),
  'little_lamp': const FindActivity(1, ReviewText('اضغط على المصباح', 'Tap the lamp'), _ok, ['🎈', '💡', '🌙'], 1),
  'raindrop': const CountActivity(1, ReviewText('كم قطرة ماء ترى؟', 'How many drops can you see?'), _ok, '💧', 3, [2, 3, 4]),
  'tiny_spaceship': const FindActivity(0, ReviewText('اضغط على سفينة الفضاء', 'Tap the spaceship'), _ok, ['🚗', '✈️', '🚀'], 2),
  'bee_flower': const CountActivity(0, ReviewText('كم زهرة ترى؟', 'How many flowers can you see?'), _ok, '🌸', 2, [1, 2, 4]),
  'choice_island': const FindActivity(0, ReviewText('اضغط على الجزيرة', 'Tap the island'), _ok, ['⛵', '🏝️', '🚗'], 1),
  'bunny_garden': const FindActivity(0, ReviewText('اضغط على الأرنب', 'Tap the bunny'), _ok, ['🐸', '🐰', '🐱'], 1),
  'rainy_day': const FindActivity(1, ReviewText('اضغط على المظلة', 'Tap the umbrella'), _ok, ['☂️', '🎒', '🏫'], 0),
};

/// Every new line, for the review list and for the test.
List<ReviewText> allNewStoryLines() => {
      _ok,
      for (final a in kStoryActivities.values) ...[a.prompt, a.done],
    }.toList();

// ---- widgets --------------------------------------------------------------------------------------------------------

const _skyColors = {
  SceneSky.day: [Color(0xFF9AD8FF), Color(0xFFDDF3FF)],
  SceneSky.night: [Color(0xFF2B2E6B), Color(0xFF5B5FA8)],
  SceneSky.sunset: [Color(0xFFFFB27A), Color(0xFFFFE3B8)],
  SceneSky.garden: [Color(0xFFA8E2FF), Color(0xFFE6F8D8)],
  SceneSky.rain: [Color(0xFF8FA4C4), Color(0xFFC9D6E8)],
  SceneSky.space: [Color(0xFF0E1033), Color(0xFF3A2A74)],
  SceneSky.sea: [Color(0xFF8FD3F4), Color(0xFFBDEBF5)],
};

class _SkyPainter extends CustomPainter {
  final SceneSky sky;
  _SkyPainter(this.sky);

  @override
  void paint(Canvas canvas, Size s) {
    final c = _skyColors[sky]!;
    canvas.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: c).createShader(Offset.zero & s));
    if (sky == SceneSky.night || sky == SceneSky.space) {
      final star = Paint()..color = Colors.white.withAlpha(sky == SceneSky.space ? 220 : 170);
      for (var i = 0; i < 22; i++) {
        final x = ((i * 37) % 100) / 100 * s.width;
        final y = ((i * 53) % 70) / 100 * s.height;
        canvas.drawCircle(Offset(x, y), 1 + (i % 3) * 0.7, star);
      }
    }
    if (sky == SceneSky.garden || sky == SceneSky.day || sky == SceneSky.sunset || sky == SceneSky.rain) {
      final hill = Paint()..color = sky == SceneSky.sunset ? const Color(0xFF9CCB6A) : (sky == SceneSky.rain ? const Color(0xFF7FAE7A) : const Color(0xFF8ED45A));
      final p = Path()
        ..moveTo(0, s.height * 0.82)
        ..quadraticBezierTo(s.width * 0.3, s.height * 0.68, s.width * 0.6, s.height * 0.8)
        ..quadraticBezierTo(s.width * 0.85, s.height * 0.9, s.width, s.height * 0.78)
        ..lineTo(s.width, s.height)
        ..lineTo(0, s.height)
        ..close();
      canvas.drawPath(p, hill);
    }
    if (sky == SceneSky.sea) {
      final wave = Paint()..color = const Color(0xFF4FB3D9).withAlpha(150);
      final p = Path()..moveTo(0, s.height * 0.8);
      for (var x = 0.0; x <= s.width; x += s.width / 8) {
        p.quadraticBezierTo(x + s.width / 16, s.height * 0.72, x + s.width / 8, s.height * 0.8);
      }
      p..lineTo(s.width, s.height)..lineTo(0, s.height)..close();
      canvas.drawPath(p, wave);
    }
    if (sky == SceneSky.rain) {
      final drop = Paint()..color = Colors.white.withAlpha(120)..strokeWidth = 2..strokeCap = StrokeCap.round;
      for (var i = 0; i < 16; i++) {
        final x = ((i * 61) % 100) / 100 * s.width;
        final y = ((i * 29) % 80) / 100 * s.height;
        canvas.drawLine(Offset(x, y), Offset(x - 4, y + 12), drop);
      }
    }
  }

  @override
  bool shouldRepaint(_SkyPainter old) => old.sky != sky;
}

/// The picture for one chapter: a painted sky and ground with the emoji placed on it. Decoration only; the text under it
/// carries the story, so it is skipped by screen readers.
class StoryScenePanel extends StatelessWidget {
  final ChapterScene scene;
  final double height;
  const StoryScenePanel({super.key, required this.scene, this.height = 170});

  @override
  Widget build(BuildContext context) {
    return ExcludeSemantics(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: SizedBox(
          height: height,
          width: double.infinity,
          child: LayoutBuilder(
            builder: (context, box) => Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _SkyPainter(scene.sky))),
                for (final p in scene.pieces)
                  Positioned(
                    left: p.x * box.maxWidth - p.size * height * 0.6,
                    top: p.y * height - p.size * height * 0.6,
                    width: p.size * height * 1.2,
                    height: p.size * height * 1.2,
                    child: FittedBox(child: Text(p.emoji)),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// The small activity under a chapter. A right answer says well done; a wrong one only fades that choice.
class StoryActivityCard extends StatefulWidget {
  final StoryActivity activity;
  const StoryActivityCard({super.key, required this.activity});

  @override
  State<StoryActivityCard> createState() => _StoryActivityCardState();
}

class _StoryActivityCardState extends State<StoryActivityCard> {
  final _faded = <int>{};
  bool _done = false;

  void _pick(int i, bool right) {
    setState(() {
      if (right) {
        _done = true;
      } else {
        _faded.add(i);
      }
    });
  }

  Widget _choice(int i, Widget child, bool right) {
    final faded = _faded.contains(i);
    return Opacity(
      opacity: faded ? 0.3 : 1,
      child: Material(
        color: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18), side: BorderSide(color: _done && right ? const Color(0xFF3FA34D) : const Color(0xFFB9C4E8), width: 3)),
        child: InkWell(
          key: ValueKey('story_act_opt_$i'),
          borderRadius: BorderRadius.circular(18),
          onTap: _done || faded ? null : () => _pick(i, right),
          child: ConstrainedBox(constraints: const BoxConstraints(minWidth: 72, minHeight: 72), child: Center(child: Padding(padding: const EdgeInsets.all(8), child: child))),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final a = widget.activity;
    final options = <Widget>[];
    String? emojiRow;
    if (a is FindActivity) {
      for (var i = 0; i < a.items.length; i++) {
        options.add(_choice(i, Text(a.items[i], style: const TextStyle(fontSize: 42)), i == a.correct));
      }
    } else if (a is CountActivity) {
      emojiRow = List.filled(a.count, a.emoji).join(' ');
      for (var i = 0; i < a.options.length; i++) {
        options.add(_choice(i, Text('${a.options[i]}', style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900)), a.options[i] == a.count));
      }
    }
    return Card(
      key: const ValueKey('story_activity'),
      margin: EdgeInsets.zero,
      color: const Color(0xFFFFF8E1),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(a.prompt.text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Color(0xFF3A2C12))),
            if (emojiRow != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(emojiRow, textAlign: TextAlign.center, style: const TextStyle(fontSize: 36))),
            const SizedBox(height: 10),
            Wrap(alignment: WrapAlignment.center, spacing: 12, runSpacing: 10, children: options),
            if (_done)
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Text('✅ ${a.done.text}', key: const ValueKey('story_activity_done'), textAlign: TextAlign.center, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Color(0xFF2E7D32))),
              ),
          ],
        ),
      ),
    );
  }
}
