import 'package:flutter/material.dart';

/// Rehlaty design tokens. One place for colors, spacing, radii, shadows,
/// widths, breakpoints, durations and layers, so screens stay consistent.
/// (The child area keeps its pastel `RC` palette from journey/ui/kit.dart;
/// these tokens drive onboarding, parent and shared components.)
class DS {
  DS._();

  // Colors: indigo primary, cream background, teal accent, warm yellow highlight.
  static const primary = Color(0xFF4B3FA0);
  static const primarySoft = Color(0xFFE7E3FA);
  static const onPrimary = Colors.white;
  static const accent = Color(0xFF0F8B8D);
  static const accentSoft = Color(0xFFD7F1F0);
  static const highlight = Color(0xFFFFC83D);
  static const highlightSoft = Color(0xFFFFF1C9);
  static const cream = Color(0xFFFFF9EE);
  static const surface = Colors.white;
  static const ink = Color(0xFF241F3D);
  static const inkSoft = Color(0xFF5B5675);
  static const border = Color(0xFFD9D4EC);
  static const success = Color(0xFF1E8E5A);
  static const warning = Color(0xFFB26A00);
  static const error = Color(0xFFB3261E);

  // Spacing scale (dp).
  static const s4 = 4.0, s8 = 8.0, s12 = 12.0, s16 = 16.0, s24 = 24.0, s32 = 32.0, s48 = 48.0;

  // Radii.
  static const rSmall = 12.0, rMedium = 20.0, rLarge = 28.0;

  // Typography (the bundled Tajawal covers Arabic and Latin).
  static const fontFamily = 'Tajawal';
  static const title = TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: ink, height: 1.35);
  static const heading = TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: ink, height: 1.4);
  static const body = TextStyle(fontSize: 16, color: ink, height: 1.55);
  static const caption = TextStyle(fontSize: 14, color: inkSoft, height: 1.5);

  // Shadows and focus.
  static const shadow = [BoxShadow(color: Color(0x1A241F3D), blurRadius: 12, offset: Offset(0, 4))];
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
  static const zBase = 0, zSticky = 10, zOverlay = 20, zDialog = 30, zToast = 40;
}

enum ScreenSize { phone, tablet, desktop }

ScreenSize screenSizeOf(double width) =>
    width < DS.phone ? ScreenSize.phone : (width < DS.tablet ? ScreenSize.tablet : ScreenSize.desktop);

extension DsContext on BuildContext {
  ScreenSize get screenSize => screenSizeOf(MediaQuery.sizeOf(this).width);
}
