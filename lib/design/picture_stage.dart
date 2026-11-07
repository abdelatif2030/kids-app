import 'package:flutter/material.dart';

import 'focusable_tap.dart';

/// One tappable place on the owner's picture: where it is (centre, as fractions of the picture's width and height),
/// how big it is, and what it opens. It is invisible: what a child sees is exactly the design.
class PictureSpot {
  final String id;
  final Offset center;
  final double w;
  final double h;
  final String label;
  final VoidCallback onTap;
  final double radius;

  /// The key of the tappable area (tests and the web smoke checks find it by this).
  final Key? key;

  /// A tooltip for mouse users (the label is always the spoken name).
  final String? tooltip;
  const PictureSpot(this.id, this.center, this.w, this.h, this.label, this.onTap, {this.radius = 24, this.key, this.tooltip});
}

/// A real name drawn over the name painted in the picture, for when the interface language is not the picture's.
class PictureNameLabel {
  final Offset center;
  final double w;
  final double h;
  final String text;
  const PictureNameLabel(this.center, this.w, this.h, this.text);
}

/// A full-screen picture made by the owner with invisible buttons on top (home, cartoons, lessons...). The picture is
/// shown whole, as large as the area allows and never stretched; the space left over shows a soft gradient. Everything a
/// child can tap is a [PictureSpot]; nothing is painted over the design except [labels] and [overlays].
class PictureStage extends StatelessWidget {
  final String asset;

  /// Width / height of the picture file.
  final double aspect;
  final List<PictureSpot> spots;

  /// Real names over the painted ones (only used when [showLabels] is true).
  final List<PictureNameLabel> labels;
  final bool showLabels;

  /// Extra widgets placed on the picture; receives the picture's drawn width and height.
  final List<Widget> Function(double w, double h)? overlays;

  /// A short hint under the picture when a phone is held upright (the picture is made for landscape).
  final Widget? portraitHint;
  const PictureStage({
    super.key,
    required this.asset,
    required this.aspect,
    required this.spots,
    this.labels = const [],
    this.showLabels = false,
    this.overlays,
    this.portraitHint,
  });

  static const backdrop = BoxDecoration(
    gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7B58D8), Color(0xFFB18CF0), Color(0xFFE9B9F2)]),
  );

  @override
  Widget build(BuildContext context) {
    final dir = Directionality.of(context);
    return LayoutBuilder(builder: (context, box) {
      final maxW = box.maxWidth;
      final maxH = box.hasBoundedHeight ? box.maxHeight : maxW / aspect;
      final portrait = MediaQuery.orientationOf(context) == Orientation.portrait && MediaQuery.sizeOf(context).shortestSide < 600;
      final hintH = portrait && portraitHint != null ? 64.0 : 0.0;
      final availH = maxH - hintH;
      var w = maxW, h = maxW / aspect;
      if (h > availH) {
        h = availH;
        w = availH * aspect;
      }
      Widget at(Offset o, double sw, double sh, Widget c) => Positioned(left: (o.dx - sw / 2) * w, top: (o.dy - sh / 2) * h, width: sw * w, height: sh * h, child: c);
      final font = (w * 0.021).clamp(12.0, 17.0).toDouble();
      final picture = SizedBox(
        key: const ValueKey('picture_stage_box'),
        width: w,
        height: h,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned.fill(
              child: ExcludeSemantics(
                child: Image.asset(asset, key: const ValueKey('picture_stage_image'), fit: BoxFit.fill, filterQuality: FilterQuality.medium, errorBuilder: (_, _, _) => const SizedBox()),
              ),
            ),
            if (showLabels)
              for (final l in labels)
                at(l.center, l.w, l.h, IgnorePointer(child: ExcludeSemantics(child: _Pill(text: l.text, font: font, dir: dir)))),
            for (final s in spots)
              at(
                s.center,
                s.w,
                s.h,
                () {
                  final tap = FocusableTap(key: s.key ?? ValueKey('spot_${s.id}'), onTap: s.onTap, radius: s.radius, semanticLabel: s.label, child: const SizedBox.expand());
                  return s.tooltip == null ? tap : Tooltip(message: s.tooltip!, child: tap);
                }(),
              ),
            ...?overlays?.call(w, h),
          ],
        ),
      );
      return Container(
        key: const ValueKey('picture_stage'),
        decoration: backdrop,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [Center(child: picture), if (hintH > 0) portraitHint!],
        ),
      );
    });
  }
}

class _Pill extends StatelessWidget {
  final String text;
  final double font;
  final TextDirection dir;
  const _Pill({required this.text, required this.font, required this.dir});

  @override
  Widget build(BuildContext context) => Container(
        alignment: Alignment.center,
        padding: EdgeInsets.symmetric(horizontal: font * 0.5, vertical: font * 0.15),
        decoration: BoxDecoration(
          gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]),
          borderRadius: BorderRadius.circular(font * 1.6),
          border: Border.all(color: Colors.white, width: 1.5),
          boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 3, offset: Offset(0, 2))],
        ),
        child: Directionality(
          textDirection: dir,
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: Text(text, maxLines: 2, textAlign: TextAlign.center, style: TextStyle(fontFamily: 'Tajawal', fontSize: font * 1.15, fontWeight: FontWeight.w900, color: Colors.white, height: 1.05)),
          ),
        ),
      );
}

/// The owner's soft scenery picture as the background of an inner screen (a game category, the video list...).
/// Landscape windows show the middle of the picture (clouds, islands and the castle); upright ones show it whole.
/// If the file cannot be read the screen falls back to [fallback], so nothing is ever blank.
class PictureBackdrop extends StatelessWidget {
  final Widget child;
  final Widget Function(Widget child)? fallback;
  const PictureBackdrop({super.key, required this.child, this.fallback});

  static const asset = 'assets/home/scene_bg.webp';

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        const DecoratedBox(decoration: PictureStage.backdrop),
        Positioned.fill(
          child: ExcludeSemantics(
            child: Image.asset(asset, key: const ValueKey('picture_backdrop'), fit: BoxFit.cover, alignment: const Alignment(0, 0.35), errorBuilder: (_, _, _) => const SizedBox()),
          ),
        ),
        child,
      ],
    );
  }
}


/// The owner's picture behind every game (treehouse sign, rainbow, castle, podium...). Everything inside gets a see-through
/// scaffold colour, so a game keeps its own app bar and layout while the picture shows behind it. To change the picture,
/// replace the one file [kGameBackgroundAsset].
const String kGameBackgroundAsset = 'assets/games/game_bg.webp';

class GameBackdrop extends StatelessWidget {
  final Widget child;
  const GameBackdrop({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: Color(0xFF58A8F2)),
        Positioned.fill(
          child: ExcludeSemantics(
            child: Image.asset(kGameBackgroundAsset, key: const ValueKey('game_backdrop'), fit: BoxFit.cover, alignment: Alignment.center, errorBuilder: (_, _, _) => const SizedBox()),
          ),
        ),
        Theme(data: Theme.of(context).copyWith(scaffoldBackgroundColor: Colors.transparent), child: child),
      ],
    );
  }
}


/// The owner's picture behind everything inside «استوديو الإبداع» (2026-11-07): the word builder, the picture story, the
/// character and scene makers, the gallery, the ordering game and the drawing page. To change it, replace the one file
/// [kStudioBackgroundAsset].
const String kStudioBackgroundAsset = 'assets/studio/studio_bg.webp';

class StudioBackdrop extends StatelessWidget {
  final Widget child;
  const StudioBackdrop({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: Color(0xFF58A8F2)),
        Positioned.fill(
          child: ExcludeSemantics(
            child: Image.asset(kStudioBackgroundAsset, key: const ValueKey('studio_backdrop'), fit: BoxFit.cover, alignment: Alignment.center, errorBuilder: (_, _, _) => const SizedBox()),
          ),
        ),
        child,
      ],
    );
  }
}
