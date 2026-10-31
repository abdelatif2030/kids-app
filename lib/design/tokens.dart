import 'package:flutter/material.dart';

/// Rehlaty design tokens. One place for colors, spacing, radii, shadows,
/// widths, breakpoints, durations and layers, so screens stay consistent.
/// Child (`RC`, journey/ui/kit.dart) and adult (`DS`) palettes are one family: the same ink, the same blue
/// outline hue and the same star yellow; the child side is pastel and rounded, the adult side calmer.
class DS {
  DS._();

  // Colors: the Rehlaty brand. Purple is the primary colour; yellow marks rewards and highlights; pink is friendly and
  // secondary; sky blue is exploration and learning. Do not hard-code these in widgets: use these names.
  static const primary = Color(0xFF6A3BFF);
  static const primarySoft = Color(0xFFEFE8FF);
  static const onPrimary = Colors.white;
  static const secondary = Color(0xFFA855F7);
  static const pink = Color(0xFFFF6B9D);
  static const sky = Color(0xFF5BC0FF);
  static const accent = Color(0xFF2B9BE0);
  static const accentSoft = Color(0xFFDDF1FF);
  static const highlight = Color(0xFFFFC83D);
  static const highlightSoft = Color(0xFFFFF1C9);
  static const cream = Color(0xFFF8F4FF); // very light lavender
  static const surface = Colors.white;
  static const ink = Color(0xFF2D3A5C);
  static const inkSoft = Color(0xFF55627F);
  static const border = Color(0xFFD3C8F7);
  static const success = Color(0xFF2E8F5C);
  static const warning = Color(0xFFB26A00);
  static const error = Color(0xFFB3261E);

  // Spacing scale (dp).
  static const s4 = 4.0,
      s8 = 8.0,
      s12 = 12.0,
      s16 = 16.0,
      s24 = 24.0,
      s32 = 32.0,
      s48 = 48.0;

  // Radii.
  static const rSmall = 12.0, rMedium = 20.0, rLarge = 28.0;

  // Typography (the bundled Tajawal covers Arabic and Latin).
  static const fontFamily = 'Tajawal';
  static const display = TextStyle(
    fontSize: 34,
    fontWeight: FontWeight.w900,
    color: ink,
    height: 1.25,
  ); // big headings
  static const title = TextStyle(
    fontSize: 26,
    fontWeight: FontWeight.w900,
    color: ink,
    height: 1.35,
  ); // screen headings
  static const section = TextStyle(
    fontSize: 22,
    fontWeight: FontWeight.w900,
    color: ink,
    height: 1.35,
  ); // section headings
  static const heading = TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.w800,
    color: ink,
    height: 1.4,
  );
  static const cardTitle = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.w800,
    color: ink,
    height: 1.35,
  );
  static const body = TextStyle(fontSize: 16, color: ink, height: 1.55);
  static const caption = TextStyle(fontSize: 14, color: inkSoft, height: 1.5);
  static const label = TextStyle(
    fontSize: 13,
    fontWeight: FontWeight.w700,
    color: inkSoft,
    height: 1.3,
  ); // small labels
  static const button = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.w900,
    height: 1.2,
  );
  static const nav = TextStyle(
    fontSize: 12,
    fontWeight: FontWeight.w800,
    height: 1.2,
  );

  // Gradients and shadows of the brand.
  static const primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF8A5CFF), primary],
  );
  static const goldGradient = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFFFFE07A), highlight],
  );
  static const lavenderBackground = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFFEDE5FF), Color(0xFFFAF8FF)],
  );
  static const softShadow = [
    BoxShadow(color: Color(0x266A3BFF), blurRadius: 16, offset: Offset(0, 6)),
  ];
  static const glow = [
    BoxShadow(color: Color(0x66A855F7), blurRadius: 18, offset: Offset(0, 4)),
  ];

  // Shadows and focus.
  static const shadow = [
    BoxShadow(color: Color(0x1A2D3A5C), blurRadius: 12, offset: Offset(0, 4)),
  ];
  static const focusWidth = 3.0;
  static const focusColor = Color(0xFF1B6BFF);

  // Layout widths and breakpoints.
  static const maxContent = 560.0, maxWide = 960.0;
  static const phone = 600.0, tablet = 1024.0;

  // Minimum tap target for children and parents.
  static const tapTarget = 56.0;

  // Durations.
  static const fast = 120, normal = 240, slow = 400; // milliseconds

  // Layers (for Stack ordering in custom overlays).
  static const zBase = 0,
      zSticky = 10,
      zOverlay = 20,
      zDialog = 30,
      zToast = 40;
}

enum ScreenSize { phone, tablet, desktop }

ScreenSize screenSizeOf(double width) => width < DS.phone
    ? ScreenSize.phone
    : (width < DS.tablet ? ScreenSize.tablet : ScreenSize.desktop);

extension DsContext on BuildContext {
  ScreenSize get screenSize => screenSizeOf(MediaQuery.sizeOf(this).width);
}
