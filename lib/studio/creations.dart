import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../library/learning_records.dart' show dayOf;
import '../safe_json.dart';
import '../l10n/strings.dart';
import 'drawing_model.dart';

/// What a child made. Everything is plain data (no photos, no recordings, no
/// text typed by the child) kept in the family gallery on this device.
enum CreationKind { drawing, scene, character, story, word }

extension CreationKindText on CreationKind {
  String get label => switch (this) {
        CreationKind.drawing => loc('رسمة'),
        CreationKind.scene => loc('مشهد'),
        CreationKind.character => loc('شخصية'),
        CreationKind.story => loc('قصة بالصور'),
        CreationKind.word => tr2('كلمة', 'Word'),
      };
  String get emoji => switch (this) {
        CreationKind.drawing => '🎨',
        CreationKind.scene => '🏞️',
        CreationKind.character => '🧑‍🎨',
        CreationKind.story => '📖',
        CreationKind.word => '🔤',
      };
}

class Creation {
  final String id;
  final String childId;
  final CreationKind kind;
  final String day;
  final Map<String, dynamic> data;
  const Creation(this.id, this.childId, this.kind, this.day, this.data);

  /// The name the family gave it, if any.
  String? get name => data['name'] is String ? data['name'] as String : null;

  Map<String, dynamic> toJson() => {'i': id, 'c': childId, 'k': kind.name, 'd': day, 'x': data};

  factory Creation.fromJson(Map<String, dynamic> j) => Creation(
        j['i'] as String,
        j['c'] as String,
        CreationKind.values.byName(j['k'] as String),
        j['d'] as String,
        (j['x'] as Map).cast<String, dynamic>(),
      );
}

/// The private family gallery. Only the parent deletes (from the parent area,
/// behind the PIN). Capped so it cannot fill the phone: 25 per child.
class FamilyGallery {
  static const _key = 'family_gallery';
  static const perChild = 25;

  /// Words the child built are kept apart, so a few words can never push drawings out of the 25.
  static const maxWordsPerChild = 12;
  static const maxBytesPerItem = 150000;

  static Future<List<Creation>> all() async {
    return decodeList(await SharedPreferences.getInstance(), _key, Creation.fromJson);
  }

  static Future<List<Creation>> forChild(String childId) async =>
      [for (final c in await all()) if (c.childId == childId) c];

  static Future<void> _write(List<Creation> list) async =>
      (await SharedPreferences.getInstance()).setString(_key, jsonEncode([for (final c in list) c.toJson()]));

  /// Adds or replaces (by id). Returns false when the item is too large.
  static Future<bool> save(Creation c) async {
    if (jsonEncode(c.toJson()).length > maxBytesPerItem) return false;
    var list = await all();
    final i = list.indexWhere((x) => x.id == c.id);
    if (i >= 0) {
      list[i] = c;
    } else {
      list.add(c);
      // Over the limit: the oldest creation of the same group (words, or everything else) makes room.
      final isWord = c.kind == CreationKind.word;
      final group = [for (final x in list) if (x.childId == c.childId && (x.kind == CreationKind.word) == isWord) x];
      if (group.length > (isWord ? maxWordsPerChild : perChild)) list.remove(group.first);
    }
    await _write(list);
    return true;
  }

  static const maxNameLength = 24;

  /// A safe display name: trimmed, one line, no control characters, at most [maxNameLength] characters. Empty -> null.
  static String? cleanName(String raw) {
    final t = raw.replaceAll(RegExp(r'[\u0000-\u001F\u007F]'), ' ').replaceAll(RegExp(r'\s+'), ' ').trim();
    if (t.isEmpty) return null;
    return t.runes.length <= maxNameLength ? t : String.fromCharCodes(t.runes.take(maxNameLength));
  }

  /// Renames one creation of [childId]. Returns false when it does not exist for that child or the write failed.
  static Future<bool> rename(String id, String childId, String name) async {
    try {
      final list = await all();
      final i = list.indexWhere((c) => c.id == id && c.childId == childId);
      if (i < 0) return false;
      final data = {...list[i].data};
      final n = cleanName(name);
      if (n == null) {
        data.remove('name');
      } else {
        data['name'] = n;
      }
      list[i] = Creation(list[i].id, list[i].childId, list[i].kind, list[i].day, data);
      await _write(list);
      return true;
    } catch (_) {
      return false;
    }
  }

  static Future<void> delete(String id) async => _write([for (final c in await all()) if (c.id != id) c]);

  static Future<void> deleteAllOf(String childId) async =>
      _write([for (final c in await all()) if (c.childId != childId) c]);

  static Future<void> deleteEverything() async => (await SharedPreferences.getInstance()).remove(_key);

  static String newId() => '${DateTime.now().microsecondsSinceEpoch}${Random().nextInt(999)}';

  static String today() => dayOf(DateTime.now());
}

// ---------------------------------------------------------------------------
// Drawings: strokes with points normalised to 0..1000 on both axes.

class DrawStroke {
  final int color;
  final double width; // relative to the canvas width (per mille)
  final List<Offset> points; // 0..1000
  const DrawStroke(this.color, this.width, this.points);
}

Map<String, dynamic> drawingData(List<DrawStroke> strokes) {
  // Keep the saved size reasonable: thin out very long drawings.
  var total = strokes.fold<int>(0, (s, x) => s + x.points.length);
  var keepEvery = 1;
  while (total / keepEvery > 5000) {
    keepEvery++;
  }
  return {
    's': [
      for (final s in strokes)
        {
          'c': s.color,
          'w': s.width.round(),
          'p': [
            // Short strokes (dots, small marks) are always kept whole.
            for (var i = 0; i < s.points.length; i++)
              if (s.points.length <= 50 || i % keepEvery == 0 || i == s.points.length - 1)
                ...[s.points[i].dx.round(), s.points[i].dy.round()],
          ],
        },
    ],
  };
}

List<DrawStroke> strokesOf(Map<String, dynamic> data) => [
      for (final s in (data['s'] as List<dynamic>? ?? []))
        DrawStroke(
          (s as Map)['c'] as int,
          (s['w'] as num).toDouble(),
          [
            for (var i = 0; i + 1 < (s['p'] as List).length; i += 2)
              Offset(((s['p'] as List)[i] as num).toDouble(), ((s['p'] as List)[i + 1] as num).toDouble()),
          ],
        ),
    ];

class NormalizedDrawingPainter extends CustomPainter {
  final List<DrawStroke> strokes;
  NormalizedDrawingPainter(this.strokes);

  @override
  void paint(Canvas canvas, Size size) {
    Offset at(Offset p) => Offset(p.dx / 1000 * size.width, p.dy / 1000 * size.height);
    for (final s in strokes) {
      final paint = Paint()
        ..color = Color(s.color)
        ..strokeWidth = s.width / 1000 * size.width
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round;
      if (s.points.length == 1) {
        canvas.drawCircle(at(s.points.first), paint.strokeWidth / 2, paint..style = PaintingStyle.fill);
      } else if (s.points.length > 1) {
        final path = Path()..moveTo(at(s.points.first).dx, at(s.points.first).dy);
        for (final p in s.points.skip(1)) {
          path.lineTo(at(p).dx, at(p).dy);
        }
        canvas.drawPath(path, paint..style = PaintingStyle.stroke);
      }
    }
  }

  @override
  bool shouldRepaint(NormalizedDrawingPainter old) => true;
}

// ---------------------------------------------------------------------------
// Scenes.

const kSceneBackgrounds = <String, (String, List<Color>)>{
  'meadow': ('مرج', [Color(0xFFBFE6FF), Color(0xFFB8E6A8)]),
  'sea': ('بحر', [Color(0xFFCFEFFF), Color(0xFF7FC8F0)]),
  'night': ('ليل', [Color(0xFF2B2D5E), Color(0xFF4B4F8F)]),
  'room': ('غرفة', [Color(0xFFFFF1D6), Color(0xFFF2D7B6)]),
};

class SceneItem {
  final String emoji;
  final double x; // 0..1
  final double y;
  final double scale; // 0.6..2.5
  const SceneItem(this.emoji, this.x, this.y, this.scale);

  SceneItem copyWith({double? x, double? y, double? scale}) =>
      SceneItem(emoji, x ?? this.x, y ?? this.y, scale ?? this.scale);

  Map<String, dynamic> toJson() => {'e': emoji, 'x': x, 'y': y, 's': scale};
  factory SceneItem.fromJson(Map<String, dynamic> j) =>
      SceneItem(j['e'] as String, (j['x'] as num).toDouble(), (j['y'] as num).toDouble(), (j['s'] as num).toDouble());
}

Map<String, dynamic> sceneData(String bg, List<SceneItem> items) =>
    {'bg': bg, 'items': [for (final i in items) i.toJson()]};

List<SceneItem> sceneItemsOf(Map<String, dynamic> d) =>
    [for (final i in (d['items'] as List<dynamic>? ?? [])) SceneItem.fromJson((i as Map).cast<String, dynamic>())];

class SceneView extends StatelessWidget {
  final String bg;
  final List<SceneItem> items;
  final double baseSize;
  const SceneView({super.key, required this.bg, required this.items, this.baseSize = 44});

  @override
  Widget build(BuildContext context) {
    final colors = (kSceneBackgrounds[bg] ?? kSceneBackgrounds['meadow']!).$2;
    return LayoutBuilder(
      builder: (context, box) => DecoratedBox(
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: colors),
        ),
        child: Stack(
          clipBehavior: Clip.hardEdge,
          children: [
            for (final i in items)
              Positioned(
                left: i.x * box.maxWidth - baseSize * i.scale / 2,
                top: i.y * box.maxHeight - baseSize * i.scale / 2,
                child: Text(i.emoji, style: TextStyle(fontSize: baseSize * i.scale, height: 1)),
              ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Characters.

const kSkinTones = [0xFFFFDDB8, 0xFFF1C27D, 0xFFD9A066, 0xFFB57A4A, 0xFF8D5A32, 0xFF6B4226];
const kHairColors = [0xFF2B1B10, 0xFF6B3F1D, 0xFFE0B25A, 0xFFC0392B, 0xFF5B5B5B];
const kShirtColors = [0xFFE53935, 0xFF1E88E5, 0xFF43A047, 0xFFFDD835, 0xFF8E24AA, 0xFFFB8C00];
const kHats = ['', '🎩', '👒', '🧢', '👑'];
const kHairStyles = ['قصير', 'طويل', 'كرات', 'بدون'];
const kEyeStyles = ['دائرية', 'مبتسمة', 'كبيرة'];
const kMouthStyles = ['ابتسامة', 'ضحكة', 'مندهش'];

class CharacterSpec {
  final int skin;
  final int hairStyle;
  final int hairColor;
  final int eyes;
  final int mouth;
  final int shirt;
  final int hat;
  const CharacterSpec({
    this.skin = 1,
    this.hairStyle = 0,
    this.hairColor = 1,
    this.eyes = 0,
    this.mouth = 0,
    this.shirt = 1,
    this.hat = 0,
  });

  CharacterSpec copyWith({int? skin, int? hairStyle, int? hairColor, int? eyes, int? mouth, int? shirt, int? hat}) =>
      CharacterSpec(
        skin: skin ?? this.skin,
        hairStyle: hairStyle ?? this.hairStyle,
        hairColor: hairColor ?? this.hairColor,
        eyes: eyes ?? this.eyes,
        mouth: mouth ?? this.mouth,
        shirt: shirt ?? this.shirt,
        hat: hat ?? this.hat,
      );

  Map<String, dynamic> toJson() => {
        'skin': skin,
        'hs': hairStyle,
        'hc': hairColor,
        'eyes': eyes,
        'mouth': mouth,
        'shirt': shirt,
        'hat': hat,
      };

  factory CharacterSpec.fromJson(Map<String, dynamic> j) => CharacterSpec(
        skin: (j['skin'] as int? ?? 1).clamp(0, kSkinTones.length - 1),
        hairStyle: (j['hs'] as int? ?? 0).clamp(0, kHairStyles.length - 1),
        hairColor: (j['hc'] as int? ?? 1).clamp(0, kHairColors.length - 1),
        eyes: (j['eyes'] as int? ?? 0).clamp(0, kEyeStyles.length - 1),
        mouth: (j['mouth'] as int? ?? 0).clamp(0, kMouthStyles.length - 1),
        shirt: (j['shirt'] as int? ?? 1).clamp(0, kShirtColors.length - 1),
        hat: (j['hat'] as int? ?? 0).clamp(0, kHats.length - 1),
      );
}

class CharacterPainter extends CustomPainter {
  final CharacterSpec spec;
  CharacterPainter(this.spec);

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final cx = w / 2;
    final skin = Paint()..color = Color(kSkinTones[spec.skin]);
    final hair = Paint()..color = Color(kHairColors[spec.hairColor]);
    final ink = Paint()
      ..color = const Color(0xFF2A2A2A)
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.02
      ..strokeCap = StrokeCap.round;
    final r = w * 0.28;
    final cy = h * 0.36;
    // Shirt and neck.
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(cx - w * 0.28, h * 0.66, w * 0.56, h * 0.32), Radius.circular(w * 0.1)),
      Paint()..color = Color(kShirtColors[spec.shirt]),
    );
    canvas.drawRect(Rect.fromLTWH(cx - w * 0.06, cy + r - 4, w * 0.12, h * 0.12), skin);
    // Hair behind the head.
    if (spec.hairStyle == 1) {
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(cx - r * 1.1, cy - r * 0.2, r * 2.2, r * 1.9), Radius.circular(r * 0.7)),
        hair,
      );
    }
    canvas.drawCircle(Offset(cx, cy), r, skin);
    // Hair on top.
    if (spec.hairStyle == 0) {
      canvas.drawArc(Rect.fromCircle(center: Offset(cx, cy), radius: r * 1.02), 3.3, 2.6, true, hair);
    } else if (spec.hairStyle == 1) {
      canvas.drawArc(Rect.fromCircle(center: Offset(cx, cy), radius: r * 1.02), 3.2, 2.8, true, hair);
    } else if (spec.hairStyle == 2) {
      for (final dx in [-0.8, -0.3, 0.3, 0.8]) {
        canvas.drawCircle(Offset(cx + r * dx, cy - r * 0.85), r * 0.3, hair);
      }
    }
    // Eyes.
    final ey = cy - r * 0.1;
    for (final dx in [-0.38, 0.38]) {
      final ex = cx + r * dx;
      switch (spec.eyes) {
        case 0:
          canvas.drawCircle(Offset(ex, ey), r * 0.1, Paint()..color = const Color(0xFF2A2A2A));
        case 1:
          canvas.drawArc(Rect.fromCenter(center: Offset(ex, ey), width: r * 0.34, height: r * 0.34), 3.3, 2.6, false, ink);
        default:
          canvas.drawCircle(Offset(ex, ey), r * 0.16, Paint()..color = Colors.white);
          canvas.drawCircle(Offset(ex, ey), r * 0.16, ink);
          canvas.drawCircle(Offset(ex, ey), r * 0.07, Paint()..color = const Color(0xFF2A2A2A));
      }
    }
    // Mouth.
    final my = cy + r * 0.45;
    switch (spec.mouth) {
      case 0:
        canvas.drawArc(Rect.fromCenter(center: Offset(cx, my - r * 0.1), width: r * 0.7, height: r * 0.5), 0.3, 2.5, false, ink);
      case 1:
        canvas.drawArc(Rect.fromCenter(center: Offset(cx, my - r * 0.15), width: r * 0.8, height: r * 0.7), 0, 3.14, true,
            Paint()..color = const Color(0xFFB03A48));
      default:
        canvas.drawOval(Rect.fromCenter(center: Offset(cx, my), width: r * 0.22, height: r * 0.3),
            Paint()..color = const Color(0xFFB03A48));
    }
    // Cheeks.
    for (final dx in [-0.62, 0.62]) {
      canvas.drawCircle(Offset(cx + r * dx, cy + r * 0.3), r * 0.1, Paint()..color = const Color(0x33E57373));
    }
    // Hat.
    if (spec.hat > 0) {
      final tp = TextPainter(
        text: TextSpan(text: kHats[spec.hat], style: TextStyle(fontSize: r * 1.3)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, Offset(cx - tp.width / 2, cy - r - tp.height * 0.62));
    }
  }

  @override
  bool shouldRepaint(CharacterPainter old) => old.spec != spec;
}

/// A small preview of any creation (gallery grid).
class CreationThumb extends StatelessWidget {
  final Creation creation;
  const CreationThumb({super.key, required this.creation});

  @override
  Widget build(BuildContext context) {
    final d = creation.data;
    switch (creation.kind) {
      case CreationKind.drawing:
        final m = DrawingModel.fromData(d);
        return ColoredBox(
          color: Colors.white,
          child: CustomPaint(
            painter: _ThumbPainter(m),
            child: const SizedBox.expand(),
          ),
        );
      case CreationKind.scene:
        return SceneView(bg: d['bg'] as String? ?? 'meadow', items: sceneItemsOf(d), baseSize: 20);
      case CreationKind.character:
        return ColoredBox(
          color: const Color(0xFFEAF4FF),
          child: CustomPaint(
              painter: CharacterPainter(CharacterSpec.fromJson((d['spec'] as Map).cast<String, dynamic>())),
              child: const SizedBox.expand()),
        );
      case CreationKind.word:
        return ColoredBox(
          color: const Color(0xFFEAF7E6),
          child: Center(
            child: FittedBox(
              child: Padding(
                padding: const EdgeInsets.all(10),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Text('${d['e'] ?? '🔤'}', style: const TextStyle(fontSize: 44)),
                  Text('${d['w'] ?? ''}', style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: Color(0xFF2D3A5C))),
                ]),
              ),
            ),
          ),
        );
      case CreationKind.story:
        return ColoredBox(
          color: const Color(0xFFFFF6D6),
          child: Center(
            child: FittedBox(
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: Text((d['pics'] as List<dynamic>? ?? []).join(' '), style: const TextStyle(fontSize: 30)),
              ),
            ),
          ),
        );
    }
  }
}

class _ThumbPainter extends CustomPainter {
  final DrawingModel model;
  _ThumbPainter(this.model);

  @override
  void paint(Canvas canvas, Size size) {
    final t = model.template;
    if (t != null) TemplatePainter(t).paint(canvas, size);
    NormalizedDrawingPainter(model.strokes).paint(canvas, size);
  }

  @override
  bool shouldRepaint(_ThumbPainter old) => true;
}

/// The tabs of the private gallery. Scenes and characters appear under "All" only.
enum GalleryTab { all, drawings, words, stories }

extension GalleryTabText on GalleryTab {
  String get label => switch (this) {
        GalleryTab.all => tr2('الكل', 'All'),
        GalleryTab.drawings => tr2('رسومات', 'Drawings'),
        GalleryTab.words => tr2('كلمات', 'Words'),
        GalleryTab.stories => tr2('قصص', 'Stories'),
      };

  bool includes(CreationKind k) => switch (this) {
        GalleryTab.all => true,
        GalleryTab.drawings => k == CreationKind.drawing,
        GalleryTab.words => k == CreationKind.word,
        GalleryTab.stories => k == CreationKind.story,
      };
}

/// The creations a tab shows, in the same order (the caller decides the order).
List<Creation> inTab(Iterable<Creation> all, GalleryTab tab) => [for (final c in all) if (tab.includes(c.kind)) c];
