import '../../design/focusable_tap.dart';

import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../games/game_catalog.dart';
import '../../library/activity_screens.dart' show ActivityLibraryScreen;
import '../day_prefs.dart';
import '../feelings.dart';
import '../stickers.dart';
import '../../games/word_book_game.dart';
import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import '../../stories/story_screens.dart' show StoryPlayerScreen;
import '../../stories/story_store.dart';
import '../models.dart';
import '../my_day.dart';
import 'kit.dart';

/// «يومي»: four stations (learn, play, discover, tell). Each has a picture and a start button.
/// None is required, a done one gets a check, and there is no counter and no pressure.
class MyDayCard extends StatefulWidget {
  final ChildProfile child;

  /// Opens today's lesson; null when there is nothing planned (the station then points to the lands).
  final VoidCallback onLearn;
  final DateTime? now;
  const MyDayCard({
    super.key,
    required this.child,
    required this.onLearn,
    this.now,
  });

  @override
  State<MyDayCard> createState() => _MyDayCardState();
}

class _MyDayCardState extends State<MyDayCard> {
  late Future<DayFacts> _facts = loadDayFacts(widget.child.id, now: widget.now);
  late final Future<DayPrefs> _prefs = DayPrefs.load();
  int _reroll = 0;
  bool _surpriseHidden = false;
  late final Future<Set<String>> _heard = StoryStore.history(widget.child.id)
      .then((h) => {for (final e in h) e.storyId});

  DateTime get _now => widget.now ?? DateTime.now();

  void _refresh() {
    final f = loadDayFacts(widget.child.id, now: widget.now);
    setState(() {
      _facts = f;
    });
  }

  Future<void> _go(Future<void> Function() open) async {
    await open();
    if (mounted) _refresh();
  }

  Future<void> _start(Station s, Set<String> heard) {
    final c = widget.child;
    switch (s) {
      case Station.learn:
        return _go(() async => widget.onLearn());
      case Station.play:
        final g = gameOfDay(_now, c.age);
        if (g == null) return Future.value();
        return _go(
          () => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => g.build(c.id, c.age, learnLangOf(c)),
            ),
          ),
        );
      case Station.discover:
        final w = wordOfDay(_now, c.age);
        if (w == null) return Future.value();
        return _go(() => openWordCard(context, c.id, w));
      case Station.tell:
        final story = storyOfDay(_now, c.age, heard: heard);
        if (story == null) return Future.value();
        return _go(
          () => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => StoryPlayerScreen(story: story, child: c),
            ),
          ),
        );
    }
  }

  IconData _icon(Station s) => switch (s) {
    Station.learn => Icons.school_rounded,
    Station.play => Icons.sports_esports_rounded,
    Station.discover => Icons.search_rounded,
    Station.tell => Icons.auto_stories_rounded,
  };

  Color _color(Station s) => switch (s) {
    Station.learn => RC.peach,
    Station.play => RC.mint,
    Station.discover => RC.yellow,
    Station.tell => RC.lavender,
  };

  String? _detail(Station s) {
    final c = widget.child;
    switch (s) {
      case Station.discover:
        final w = wordOfDay(_now, c.age);
        return w == null
            ? null
            : '${w.emoji} ${AppLocale.instance.code == 'en' ? (w.en ?? w.ar) : w.ar}';
      case Station.play:
        return gameOfDay(_now, c.age)?.title();
      default:
        return null;
    }
  }

  bool _available(Station s) => switch (s) {
    Station.learn => true,
    Station.play => gameOfDay(_now, widget.child.age) != null,
    Station.discover => wordOfDay(_now, widget.child.age) != null,
    Station.tell => storyOfDay(_now, widget.child.age) != null,
  };

  @override
  Widget build(BuildContext context) {
    final part = dayPartOf(_now);
    return FutureBuilder<DayPrefs>(
      future: _prefs,
      builder: (context, prefSnap) => FutureBuilder<Set<String>>(
        future: _heard,
        builder: (context, heardSnap) => FutureBuilder<DayFacts>(
          future: _facts,
          builder: (context, snap) {
            final facts = snap.data ?? const DayFacts();
            final heard = heardSnap.data ?? const <String>{};
            final prefs = prefSnap.data ?? const DayPrefs();
            // At night the story station comes first: a calm way to end the day.
            final base = part == DayPart.night
                ? const [
                    Station.tell,
                    Station.learn,
                    Station.play,
                    Station.discover,
                  ]
                : Station.values;
            final order = [
              for (final s in base)
                if (prefs.stations.contains(s)) s,
            ];
            final surprise = surpriseOfDay(
              _now,
              widget.child.age,
              reroll: _reroll,
            );
            final achievement = achievementText(facts);
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  tr2('يومي', 'My day'),
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                    color: RC.ink,
                  ),
                ),
                Text(
                  tr2(
                    'اختر ما تحب. لا يلزم أن تنهي الكل.',
                    'Pick what you like. You do not have to do them all.',
                  ),
                  style: const TextStyle(fontSize: 14, color: RC.ink),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  children: [
                    for (final s in order)
                      if (_available(s))
                        SizedBox(
                          width: 160,
                          child: RCard(
                            key: ValueKey('station_${s.name}'),
                            color: facts.done(s)
                                ? RC.mint
                                : _color(s).withAlpha(200),
                            semanticLabel:
                                '${stationTitle(s)}. ${stationSubtitle(s)}${facts.done(s) ? '. ${tr2('تم', 'Done')}' : ''}',
                            onTap: () => _start(s, heard),
                            child: Column(
                              children: [
                                Stack(
                                  alignment: Alignment.topCenter,
                                  children: [
                                    Icon(_icon(s), size: 44, color: RC.ink),
                                    if (facts.done(s))
                                      const Align(
                                        alignment: Alignment.topRight,
                                        child: Icon(
                                          Icons.check_circle_rounded,
                                          color: Colors.green,
                                          size: 22,
                                        ),
                                      ),
                                  ],
                                ),
                                Text(
                                  stationTitle(s),
                                  style: const TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w900,
                                    color: RC.ink,
                                  ),
                                ),
                                Text(
                                  _detail(s) ?? stationSubtitle(s),
                                  textAlign: TextAlign.center,
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(
                                    fontSize: 13,
                                    color: RC.ink,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                // An outlined button: the one big filled button on the home screen stays "continue".
                                OutlinedButton(
                                  style: OutlinedButton.styleFrom(
                                    minimumSize: const Size(110, 44),
                                    backgroundColor: Colors.white,
                                  ),
                                  onPressed: () => _start(s, heard),
                                  child: Text(
                                    facts.done(s)
                                        ? tr2('مرة أخرى', 'Again')
                                        : tr2('ابدأ', 'Start'),
                                    style: const TextStyle(fontSize: 16),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                  ],
                ),
                if (prefs.surprise && !_surpriseHidden) ...[
                  const SizedBox(height: 10),
                  RCard(
                    key: const ValueKey('surprise'),
                    color: RC.pink.withAlpha(200),
                    child: Row(
                      children: [
                        const Text('🎁', style: TextStyle(fontSize: 36)),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                tr2('مفاجأة اليوم', 'Today\'s surprise'),
                                style: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.w900,
                                  color: RC.ink,
                                ),
                              ),
                              Text(
                                surprise.game?.title() ??
                                    tr2(
                                      'نشاط مع ماما أو بابا',
                                      'An activity with Mum or Dad',
                                    ),
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(
                                  fontSize: 14,
                                  color: RC.ink,
                                ),
                              ),
                              Wrap(
                                spacing: 4,
                                children: [
                                  TextButton(
                                    key: const ValueKey('surprise_change'),
                                    onPressed: () => setState(() => _reroll++),
                                    child: Text(tr2('غيّرها', 'Change it')),
                                  ),
                                  TextButton(
                                    key: const ValueKey('surprise_skip'),
                                    onPressed: () =>
                                        setState(() => _surpriseHidden = true),
                                    child: Text(tr2('ليس الآن', 'Not now')),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                        OutlinedButton(
                          key: const ValueKey('surprise_start'),
                          style: OutlinedButton.styleFrom(
                            minimumSize: const Size(90, 44),
                            backgroundColor: Colors.white,
                          ),
                          onPressed: () => _go(() {
                            final g = surprise.game;
                            final c = widget.child;
                            return Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (_) => g == null
                                    ? ActivityLibraryScreen(child: c)
                                    : g.build(c.id, c.age, learnLangOf(c)),
                              ),
                            );
                          }),
                          child: Text(tr2('افتحها', 'Open it')),
                        ),
                      ],
                    ),
                  ),
                ],
                if (achievement != null) ...[
                  const SizedBox(height: 12),
                  RCard(
                    key: const ValueKey('achievement'),
                    color: RC.yellow.withAlpha(190),
                    child: Row(
                      children: [
                        const Text('🌟', style: TextStyle(fontSize: 34)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                tr2('إنجاز اليوم', 'Today\'s achievement'),
                                style: const TextStyle(
                                  fontSize: 14,
                                  color: RC.ink,
                                ),
                              ),
                              Text(
                                achievement,
                                style: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.w800,
                                  color: RC.ink,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ],
            );
          },
        ),
      ),
    );
  }
}

/// «حديقتي»: a plant that only grows as real activities, games and stories are finished.
class GardenCard extends StatelessWidget {
  final ChildProfile child;
  const GardenCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Garden>(
      future: loadGarden(child.id),
      builder: (context, snap) {
        final g = snap.data ?? const Garden(0, GardenStage.seed);
        return RCard(
          key: const ValueKey('garden'),
          color: const Color(0xFFE8F6E4),
          semanticLabel: tr2(
            'حديقتي: ${gardenStageLabel(g.stage)}، ${g.flowers} إنجازاً',
            'My garden: ${gardenStageLabel(g.stage)}, ${g.flowers} achievements',
          ),
          child: Column(
            children: [
              Text(
                tr2('حديقتي', 'My garden'),
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w900,
                  color: RC.ink,
                ),
              ),
              SizedBox(
                height: 120,
                width: 200,
                child: CustomPaint(painter: _GardenPainter(g)),
              ),
              Text(
                gardenStageLabel(g.stage),
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: RC.ink,
                ),
              ),
              Text(
                g.flowers == 0
                    ? tr2(
                        'أنهِ نشاطاً لتنمو حديقتك.',
                        'Finish an activity to help your garden grow.',
                      )
                    : tr2(
                        '${g.flowers} إنجازاً. تبقى حديقتك مهما غبت.',
                        '${g.flowers} achievements. Your garden stays, whenever you come back.',
                      ),
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 13, color: RC.ink),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _GardenPainter extends CustomPainter {
  final Garden g;
  _GardenPainter(this.g);

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width, h = size.height;
    final paint = Paint();
    paint.color = const Color(0xFFB6E3A0);
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTWH(0, h * 0.82, w, h * 0.18),
        const Radius.circular(10),
      ),
      paint,
    );
    final stem = Paint()
      ..color = const Color(0xFF5E9E4A)
      ..strokeWidth = 6
      ..strokeCap = StrokeCap.round;
    final base = Offset(w / 2, h * 0.84);
    final height = switch (g.stage) {
      GardenStage.seed => 0.0,
      GardenStage.sprout => h * 0.22,
      GardenStage.plant => h * 0.42,
      GardenStage.flowering => h * 0.55,
      GardenStage.blooming => h * 0.62,
      GardenStage.tree => h * 0.7,
    };
    if (g.stage == GardenStage.seed) {
      paint.color = const Color(0xFF8A5A2B);
      canvas.drawOval(
        Rect.fromCenter(center: base.translate(0, -4), width: 18, height: 12),
        paint,
      );
      return;
    }
    if (g.stage == GardenStage.tree) {
      paint.color = const Color(0xFF8A5A2B);
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w / 2 - 8, h * 0.45, 16, h * 0.4),
          const Radius.circular(6),
        ),
        paint,
      );
      paint.color = const Color(0xFF6DB65A);
      for (final o in const [
        Offset(-28, 0),
        Offset(28, 0),
        Offset(0, -22),
        Offset(-14, -10),
        Offset(14, -10),
      ]) {
        canvas.drawCircle(
          Offset(w / 2, h * 0.38).translate(o.dx, o.dy),
          26,
          paint,
        );
      }
    } else {
      canvas.drawLine(base, base.translate(0, -height), stem);
      paint.color = const Color(0xFF6DB65A);
      final leaves = g.stage == GardenStage.sprout ? 2 : 4;
      for (var i = 0; i < leaves; i++) {
        final y = base.dy - height * (0.35 + 0.2 * (i ~/ 2));
        final dir = i.isEven ? -1.0 : 1.0;
        canvas.drawOval(
          Rect.fromCenter(
            center: Offset(w / 2 + dir * 14, y),
            width: 24,
            height: 12,
          ),
          paint,
        );
      }
    }
    // One small flower per achievement (up to 24), spread over the ground. Never fewer than earned.
    final colors = [
      const Color(0xFFFF8FA3),
      const Color(0xFFFFD166),
      const Color(0xFFB39DDB),
      const Color(0xFF80CBC4),
    ];
    final n = math.min(g.flowers, 24);
    for (var i = 0; i < n; i++) {
      final x = w * (0.06 + 0.88 * ((i * 0.381966) % 1.0));
      final y = h * (0.86 + 0.08 * ((i * 0.618) % 1.0));
      paint.color = colors[i % colors.length];
      canvas.drawCircle(Offset(x, y), 5, paint);
      paint.color = const Color(0xFFFFF3B0);
      canvas.drawCircle(Offset(x, y), 2, paint);
    }
  }

  @override
  bool shouldRepaint(_GardenPainter old) =>
      old.g.flowers != g.flowers || old.g.stage != g.stage;
}

/// «كيف تشعر اليوم؟»: an optional face. No score, no judgement, and it is not shown to anyone else.
class FeelingCard extends StatefulWidget {
  final ChildProfile child;
  final DateTime? now;
  const FeelingCard({super.key, required this.child, this.now});

  @override
  State<FeelingCard> createState() => _FeelingCardState();
}

class _FeelingCardState extends State<FeelingCard> {
  Feeling? _picked;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    FeelingStore.today(widget.child.id, now: widget.now).then((f) {
      if (mounted) {
        setState(() {
          _picked = f;
          _loaded = true;
        });
      }
    });
  }

  Future<void> _pick(Feeling f) async {
    setState(() => _picked = f);
    await FeelingStore.set(widget.child.id, f.id, now: widget.now);
  }

  @override
  Widget build(BuildContext context) {
    if (!_loaded) return const SizedBox.shrink();
    return RCard(
      key: const ValueKey('feeling'),
      color: Colors.white.withAlpha(220),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            tr2('كيف تشعر اليوم؟', 'How do you feel today?'),
            style: const TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          Text(
            tr2(
              'اختياري. اختر وجهاً إن أردت.',
              'Optional. Pick a face if you like.',
            ),
            style: const TextStyle(fontSize: 12, color: RC.ink),
          ),
          const SizedBox(height: 6),
          LayoutBuilder(
            builder: (context, box) {
              // Six faces always fit one row on a phone: they shrink a little instead of wrapping.
              final face = ((box.maxWidth - 5 * 6) / 6).clamp(44.0, 52.0);
              return Wrap(
                spacing: 6,
                runSpacing: 6,
                children: [
                  for (final f in kFeelings)
                    Semantics(
                      button: true,
                      selected: _picked?.id == f.id,
                      label: f.label(),
                      child: FocusableTap(
                        key: ValueKey('feeling_${f.id}'),
                        onTap: () => _pick(f),
                        child: Container(
                          width: face,
                          height: face,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: _picked?.id == f.id
                                ? RC.yellow
                                : Colors.white,
                            border: Border.all(
                              color: _picked?.id == f.id
                                  ? RC.pinkDeep
                                  : RC.outline,
                              width: _picked?.id == f.id ? 4 : 2,
                            ),
                          ),
                          child: Text(
                            f.emoji,
                            style: const TextStyle(fontSize: 28),
                          ),
                        ),
                      ),
                    ),
                ],
              );
            },
          ),
          if (_picked != null)
            Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text(
                _picked!.reply(),
                key: const ValueKey('feeling_reply'),
                style: const TextStyle(fontSize: 14, color: RC.ink),
              ),
            ),
        ],
      ),
    );
  }
}

/// «ألبوم الملصقات»: the stickers earned so far in full colour, the next ones as question marks.
class StickerAlbumCard extends StatelessWidget {
  final ChildProfile child;
  const StickerAlbumCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<int>(
      future: finishedCount(child.id),
      builder: (context, snap) {
        final n = stickersUnlocked(snap.data ?? 0);
        return RCard(
          key: const ValueKey('stickers'),
          color: const Color(0xFFFFF1D6),
          semanticLabel: tr2(
            'ألبوم الملصقات: $n من ${kStickers.length}',
            'Sticker album: $n of ${kStickers.length}',
          ),
          child: Column(
            children: [
              Text(
                tr2('ألبوم الملصقات', 'Sticker album'),
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w900,
                  color: RC.ink,
                ),
              ),
              Text(
                tr2(
                  'ملصق جديد مع كل شيء تُنهيه.',
                  'A new sticker for everything you finish.',
                ),
                style: const TextStyle(fontSize: 13, color: RC.ink),
              ),
              const SizedBox(height: 8),
              Wrap(
                spacing: 6,
                runSpacing: 6,
                alignment: WrapAlignment.center,
                children: [
                  for (var i = 0; i < kStickers.length; i++)
                    Semantics(
                      label: i < n
                          ? kStickers[i].name()
                          : tr2('ملصق مقفل', 'Locked sticker'),
                      child: Container(
                        key: ValueKey(i < n ? 'sticker_$i' : 'locked_$i'),
                        width: 46,
                        height: 46,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: i < n ? Colors.white : Colors.black12,
                          border: Border.all(color: RC.outline, width: 2),
                        ),
                        child: Text(
                          i < n ? kStickers[i].emoji : '?',
                          style: TextStyle(
                            fontSize: i < n ? 26 : 20,
                            color: RC.ink,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
