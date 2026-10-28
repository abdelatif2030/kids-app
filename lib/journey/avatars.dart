import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'models.dart';
import 'ui/kit.dart';
import '../l10n/strings.dart';

/// One original cartoon avatar, drawn in code (no copied characters, no image files).
class AvatarSpec {
  final String id;
  final String Function() name;
  final Color skin;
  final Color hair;
  final String hairStyle; // none, short, long, bun, curly
  final String? ears; // bear, cat, bunny
  final Color bg;
  const AvatarSpec(
    this.id,
    this.name,
    this.skin,
    this.hair,
    this.hairStyle,
    this.bg, {
    this.ears,
  });
}

String _n(String ar, String en) => tr2(ar, en);

final List<AvatarSpec> kAvatars = [
  AvatarSpec(
    'g1',
    () => _n('بنت بفيونكة', 'Girl with a bun'),
    const Color(0xFFF6D0B0),
    const Color(0xFF5B3A29),
    'bun',
    const Color(0xFFFFD6E8),
  ),
  AvatarSpec(
    'g2',
    () => _n('بنت بشعر طويل', 'Girl with long hair'),
    const Color(0xFFE2AE86),
    const Color(0xFF2E2118),
    'long',
    const Color(0xFFE6D8FF),
  ),
  AvatarSpec(
    'g3',
    () => _n('بنت بشعر مجعد', 'Girl with curly hair'),
    const Color(0xFFA9714B),
    const Color(0xFF1F1713),
    'curly',
    const Color(0xFFD7F0E6),
  ),
  AvatarSpec(
    'b1',
    () => _n('ولد بشعر قصير', 'Boy with short hair'),
    const Color(0xFFF6D0B0),
    const Color(0xFF8A5A2B),
    'short',
    const Color(0xFFD6E8FF),
  ),
  AvatarSpec(
    'b2',
    () => _n('ولد بشعر داكن', 'Boy with dark hair'),
    const Color(0xFFE2AE86),
    const Color(0xFF1F1713),
    'short',
    const Color(0xFFFFEFC2),
  ),
  AvatarSpec(
    'b3',
    () => _n('ولد بشعر مجعد', 'Boy with curly hair'),
    const Color(0xFF8D5A3B),
    const Color(0xFF1F1713),
    'curly',
    const Color(0xFFFFD9C2),
  ),
  AvatarSpec(
    'bear',
    () => _n('دبدوب', 'Bear'),
    const Color(0xFFC98F5E),
    const Color(0xFFC98F5E),
    'none',
    const Color(0xFFFFE9C9),
    ears: 'bear',
  ),
  AvatarSpec(
    'cat',
    () => _n('قطة', 'Kitten'),
    const Color(0xFFF3B35E),
    const Color(0xFFF3B35E),
    'none',
    const Color(0xFFD6F0F5),
    ears: 'cat',
  ),
  AvatarSpec(
    'bunny',
    () => _n('أرنب', 'Bunny'),
    const Color(0xFFF2EEF7),
    const Color(0xFFF2EEF7),
    'none',
    const Color(0xFFFFD6E8),
    ears: 'bunny',
  ),
];

AvatarSpec? avatarById(String? id) {
  for (final a in kAvatars) {
    if (a.id == id) return a;
  }
  return null;
}

class _AvatarPainter extends CustomPainter {
  final AvatarSpec s;
  _AvatarPainter(this.s);

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    Offset p(double x, double y) => Offset(x * w, y * w);
    final fill = Paint()..style = PaintingStyle.fill;
    final center = p(0.5, 0.56);
    final r = 0.34 * w;

    // Ears of the animal avatars (behind the face).
    if (s.ears != null) {
      fill.color = s.skin;
      switch (s.ears) {
        case 'bear':
          canvas.drawCircle(p(0.24, 0.3), 0.12 * w, fill);
          canvas.drawCircle(p(0.76, 0.3), 0.12 * w, fill);
        case 'cat':
          for (final sx in [0.0, 1.0]) {
            final path = Path()
              ..moveTo(p(sx == 0 ? 0.2 : 0.8, 0.5).dx, p(0, 0.5).dy)
              ..lineTo(p(sx == 0 ? 0.24 : 0.76, 0.12).dx, p(0, 0.12).dy)
              ..lineTo(p(sx == 0 ? 0.42 : 0.58, 0.3).dx, p(0, 0.3).dy)
              ..close();
            canvas.drawPath(path, fill);
          }
        case 'bunny':
          for (final x in [0.36, 0.64]) {
            canvas.drawOval(
              Rect.fromCenter(
                center: p(x, 0.17),
                width: 0.14 * w,
                height: 0.34 * w,
              ),
              fill,
            );
          }
      }
    }

    // Long hair behind the face.
    fill.color = s.hair;
    if (s.hairStyle == 'long') {
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromCenter(
            center: p(0.5, 0.66),
            width: 0.8 * w,
            height: 0.62 * w,
          ),
          Radius.circular(0.2 * w),
        ),
        fill,
      );
    }
    if (s.hairStyle == 'bun') canvas.drawCircle(p(0.5, 0.14), 0.12 * w, fill);

    // Face.
    fill.color = s.skin;
    canvas.drawCircle(center, r, fill);

    // Hair on top.
    fill.color = s.hair;
    switch (s.hairStyle) {
      case 'short':
      case 'long':
      case 'bun':
        final path = Path()
          ..moveTo(center.dx - r, center.dy - 0.04 * w)
          ..arcTo(
            Rect.fromCircle(center: center, radius: r),
            math.pi,
            math.pi,
            false,
          )
          ..quadraticBezierTo(
            center.dx + 0.1 * w,
            center.dy - 0.2 * w,
            center.dx - 0.1 * w,
            center.dy - 0.17 * w,
          )
          ..quadraticBezierTo(
            center.dx - 0.2 * w,
            center.dy - 0.15 * w,
            center.dx - r,
            center.dy - 0.04 * w,
          );
        canvas.drawPath(path, fill);
      case 'curly':
        for (var i = 0; i < 7; i++) {
          final a = math.pi + i * math.pi / 6;
          canvas.drawCircle(
            Offset(
              center.dx + (r * 0.92) * math.cos(a),
              center.dy + (r * 0.92) * math.sin(a),
            ),
            0.1 * w,
            fill,
          );
        }
        canvas.drawCircle(center.translate(0, -0.2 * w), 0.2 * w, fill);
    }
    if (s.ears == 'bunny' || s.ears == 'cat' || s.ears == 'bear') {
      // Inner ear / muzzle for the animals.
      fill.color = const Color(0xFFFFFFFF).withAlpha(150);
      canvas.drawOval(
        Rect.fromCenter(center: p(0.5, 0.66), width: 0.3 * w, height: 0.2 * w),
        fill,
      );
    }

    // Eyes, cheeks, smile.
    fill.color = const Color(0xFF2B2B3A);
    canvas.drawOval(
      Rect.fromCenter(center: p(0.38, 0.55), width: 0.07 * w, height: 0.1 * w),
      fill,
    );
    canvas.drawOval(
      Rect.fromCenter(center: p(0.62, 0.55), width: 0.07 * w, height: 0.1 * w),
      fill,
    );
    fill.color = const Color(0xFFFFFFFF);
    canvas.drawCircle(p(0.395, 0.525), 0.012 * w, fill);
    canvas.drawCircle(p(0.635, 0.525), 0.012 * w, fill);
    fill.color = const Color(0xFFFF8FA3).withAlpha(120);
    canvas.drawCircle(p(0.29, 0.65), 0.05 * w, fill);
    canvas.drawCircle(p(0.71, 0.65), 0.05 * w, fill);
    final smile = Paint()
      ..color = const Color(0xFF8A3B3B)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.02 * w
      ..strokeCap = StrokeCap.round;
    canvas.drawArc(
      Rect.fromCenter(center: p(0.5, 0.66), width: 0.2 * w, height: 0.12 * w),
      0.2,
      2.7,
      false,
      smile,
    );
  }

  @override
  bool shouldRepaint(_AvatarPainter old) => old.s != s;
}

/// A preset avatar by id (the default friend when [id] is null or unknown).
class AvatarFace extends StatelessWidget {
  final String? id;
  final double size;
  final bool selected;
  const AvatarFace({super.key, this.id, this.size = 64, this.selected = false});

  @override
  Widget build(BuildContext context) {
    final s = avatarById(id) ?? kAvatars.first;
    return Semantics(
      image: true,
      label: s.name(),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: s.bg,
          border: Border.all(
            color: selected ? RC.pinkDeep : RC.outline,
            width: selected ? 4 : 2,
          ),
        ),
        child: ClipOval(child: CustomPaint(painter: _AvatarPainter(s))),
      ),
    );
  }
}

/// Where a child's real photo lives: this device only, never uploaded. One small image per child.
class ChildPhotoStore {
  static const _prefix = 'child_photo_';
  static const maxBytes = 100 * 1024;
  static final Map<String, Uint8List?> _cache = {};

  static Future<Uint8List?> load(String childId) async {
    if (_cache.containsKey(childId)) return _cache[childId];
    final raw = (await SharedPreferences.getInstance()).getString(
      '$_prefix$childId',
    );
    Uint8List? bytes;
    if (raw != null) {
      try {
        bytes = base64Decode(raw);
      } catch (_) {
        bytes = null; // damaged: act as if there is no photo
      }
    }
    return _cache[childId] = bytes;
  }

  static Future<void> save(String childId, Uint8List bytes) async {
    if (bytes.length > maxBytes) throw ArgumentError('photo too large');
    await (await SharedPreferences.getInstance()).setString(
      '$_prefix$childId',
      base64Encode(bytes),
    );
    _cache[childId] = bytes;
  }

  static Future<void> delete(String childId) async {
    await (await SharedPreferences.getInstance()).remove('$_prefix$childId');
    _cache[childId] = null;
  }

  /// Forget everything in memory (tests, and after a full data reset).
  static void clearCache() => _cache.clear();
}

/// The picture of a child: their real photo when the parent allowed it, else the chosen
/// cartoon avatar, else the default friend.
class ChildAvatar extends StatelessWidget {
  final ChildProfile child;
  final double size;
  const ChildAvatar({super.key, required this.child, this.size = 64});

  @override
  Widget build(BuildContext context) {
    final cartoon = AvatarFace(id: child.avatar, size: size);
    if (!child.hasPhoto) return cartoon;
    return FutureBuilder<Uint8List?>(
      future: ChildPhotoStore.load(child.id),
      builder: (context, snap) {
        final bytes = snap.data;
        if (bytes == null) return cartoon;
        return Semantics(
          image: true,
          label: tr2('صورة ${child.nickname}', 'Photo of ${child.nickname}'),
          child: Container(
            width: size,
            height: size,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: RC.outline, width: 2),
            ),
            child: ClipOval(
              child: Image.memory(
                bytes,
                fit: BoxFit.cover,
                errorBuilder: (_, _, _) => cartoon,
              ),
            ),
          ),
        );
      },
    );
  }
}
