import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';

// The sign-in and sign-up pages fill the whole screen, upright or sideways (owner request, 2026-11-06). The owner's picture is
// still the look: its scenery (blurred) is the background and its top strip (the two children and the "Rehlaty" sign) is the
// header. The form itself is real, large and drawn in the picture's purple, so there is room to look and to write.

const authInk = Color(0xFF4B2E9B);
const authHint = Color(0xFF8D7EBB);
const authPurple = Color(0xFF7A3FE0);
const authPurpleDark = Color(0xFF5B2BB8);

/// The part of the 1536 x 1024 picture used as the header: both children and the sign, down to just above the painted card.
const _cropX = 250.0, _cropY = 0.0, _cropW = 1080.0;

/// How far down the header goes: the sign-up picture paints its title higher, so it is cut sooner.
double authCropHeight(String asset) =>
    asset.contains('register') ? 250.0 : 296.0;

/// The picture's header strip, [width] wide.
class AuthHeaderArt extends StatelessWidget {
  final String asset;
  final double width;
  const AuthHeaderArt({super.key, required this.asset, required this.width});

  @override
  Widget build(BuildContext context) {
    final s = width / _cropW;
    final cropH = authCropHeight(asset);
    return ExcludeSemantics(
      child: SizedBox(
        width: width,
        height: cropH * s,
        child: ClipRect(
          child: OverflowBox(
            alignment: Alignment.topLeft,
            minWidth: 0,
            minHeight: 0,
            maxWidth: 1536 * s,
            maxHeight: 1024 * s,
            child: Transform.translate(
              offset: Offset(-_cropX * s, -_cropY * s),
              child: Image.asset(
                asset,
                width: 1536 * s,
                height: 1024 * s,
                fit: BoxFit.fill,
                filterQuality: FilterQuality.medium,
                errorBuilder: (_, _, _) => const SizedBox(),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Full-screen shell: blurred scenery behind, header art, and [child] (the form) in a rounded card that takes the rest of the
/// page. Upright: header on top, card below (scrolls when the keyboard is open). Sideways: header on one side, card on the other.
class AuthShell extends StatelessWidget {
  final String asset;
  final Widget child;

  /// Shown at the start corner when set (the sign-up page has a back arrow).
  final VoidCallback? onBack;
  final String? backLabel;

  /// Drawn over everything (for example the busy veil).
  final Widget? overlay;
  const AuthShell({
    super.key,
    required this.asset,
    required this.child,
    this.onBack,
    this.backLabel,
    this.overlay,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFB18CF0),
      body: Stack(
        fit: StackFit.expand,
        children: [
          ExcludeSemantics(
            child: ImageFiltered(
              imageFilter: ui.ImageFilter.blur(
                sigmaX: 14,
                sigmaY: 14,
                tileMode: TileMode.clamp,
              ),
              child: Image.asset(
                asset,
                fit: BoxFit.cover,
                errorBuilder: (_, _, _) =>
                    const ColoredBox(color: Color(0xFFB18CF0)),
              ),
            ),
          ),
          const ColoredBox(color: Color(0x33FFFFFF)),
          SafeArea(
            child: LayoutBuilder(
              builder: (context, box) {
                final sideways =
                    box.maxWidth >= 640 && box.maxWidth / box.maxHeight >= 1.15;
                final card = _Card(child: child);
                if (sideways) {
                  final headW = (box.maxWidth * 0.44).clamp(300.0, 620.0);
                  final cardW = (box.maxWidth - headW - 64).clamp(360.0, 560.0);
                  return Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(
                        child: Center(
                          child: _Sticker(
                            child: AuthHeaderArt(
                              asset: asset,
                              width: headW - 24,
                            ),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: cardW + 32,
                        child: SingleChildScrollView(
                          padding: const EdgeInsets.fromLTRB(0, 16, 16, 16),
                          child: ConstrainedBox(
                            constraints: BoxConstraints(
                              minHeight: box.maxHeight - 32,
                            ),
                            child: Center(child: card),
                          ),
                        ),
                      ),
                    ],
                  );
                }
                final headW = box.maxWidth.clamp(280.0, 640.0).toDouble();
                return SingleChildScrollView(
                  padding: EdgeInsets.only(
                    bottom: MediaQuery.viewInsetsOf(context).bottom * 0,
                  ),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(minHeight: box.maxHeight),
                    child: Column(
                      children: [
                        const SizedBox(height: 8),
                        Center(
                          child: AuthHeaderArt(asset: asset, width: headW),
                        ),
                        Center(
                          child: ConstrainedBox(
                            constraints: const BoxConstraints(maxWidth: 560),
                            child: card,
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          if (onBack != null)
            PositionedDirectional(
              top: 0,
              start: 0,
              child: SafeArea(
                child: Padding(
                  padding: const EdgeInsets.all(10),
                  child: FocusableTap(
                    key: const ValueKey('register_back'),
                    radius: 28,
                    semanticLabel: backLabel ?? 'Back',
                    onTap: onBack!,
                    child: Container(
                      width: 52,
                      height: 52,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                        border: Border.all(color: authInk, width: 2.5),
                      ),
                      child: const Icon(
                        Icons.arrow_forward_rounded,
                        color: authInk,
                        size: 28,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ?overlay,
        ],
      ),
    );
  }
}

class _Sticker extends StatelessWidget {
  final Widget child;
  const _Sticker({required this.child});

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(6),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(28),
      boxShadow: const [
        BoxShadow(
          color: Color(0x44000000),
          blurRadius: 14,
          offset: Offset(0, 6),
        ),
      ],
    ),
    child: ClipRRect(borderRadius: BorderRadius.circular(22), child: child),
  );
}

class _Card extends StatelessWidget {
  final Widget child;
  const _Card({required this.child});

  @override
  Widget build(BuildContext context) => Container(
    margin: const EdgeInsets.fromLTRB(14, 6, 14, 14),
    padding: const EdgeInsets.fromLTRB(20, 20, 20, 22),
    decoration: BoxDecoration(
      color: const Color(0xFFF7F1FD),
      borderRadius: BorderRadius.circular(34),
      border: Border.all(color: authPurple, width: 4),
      boxShadow: const [
        BoxShadow(
          color: Color(0x44000000),
          blurRadius: 16,
          offset: Offset(0, 8),
        ),
      ],
    ),
    child: child,
  );
}

/// A big rounded field with an icon at its start, used for every text box of the two pages.
class AuthField extends StatelessWidget {
  final TextEditingController controller;
  final String hint;
  final IconData icon;
  final bool obscure;
  final TextInputType? keyboard;
  final TextInputAction? action;
  final void Function(String)? onSubmitted;
  final int? maxLength;

  /// Latin text (an e-mail, a password) is typed left to right; names and cities follow the page direction.
  final bool ltr;
  final Widget? trailing;
  final ValueKey<String> fieldKey;
  const AuthField({
    super.key,
    required this.fieldKey,
    required this.controller,
    required this.hint,
    required this.icon,
    this.obscure = false,
    this.keyboard,
    this.action,
    this.onSubmitted,
    this.maxLength,
    this.ltr = true,
    this.trailing,
  });

  @override
  Widget build(BuildContext context) {
    final style = const TextStyle(
      fontFamily: 'Tajawal',
      fontSize: 19,
      fontWeight: FontWeight.w800,
      color: authInk,
    );
    return Container(
      height: 60,
      padding: const EdgeInsetsDirectional.only(start: 16, end: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32),
        border: Border.all(color: const Color(0xFFCDBDF0), width: 2),
      ),
      child: Row(
        children: [
          Icon(icon, color: authPurple, size: 28),
          const SizedBox(width: 12),
          Expanded(
            child: Directionality(
              textDirection: ltr
                  ? TextDirection.ltr
                  : Directionality.of(context),
              child: TextField(
                key: fieldKey,
                controller: controller,
                obscureText: obscure,
                keyboardType: keyboard,
                textInputAction: action,
                onSubmitted: onSubmitted,
                maxLength: maxLength,
                autocorrect: false,
                enableSuggestions: !obscure,
                textAlign: ltr ? TextAlign.right : TextAlign.start,
                style: style,
                cursorColor: authInk,
                decoration: InputDecoration(
                  isDense: true,
                  counterText: '',
                  border: InputBorder.none,
                  enabledBorder: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  filled: false,
                  contentPadding: EdgeInsets.zero,
                  hintText: hint,
                  hintStyle: style.copyWith(color: authHint),
                ),
              ),
            ),
          ),
          ?trailing,
        ],
      ),
    );
  }
}

/// The big purple button.
class AuthButton extends StatelessWidget {
  final String label;
  final IconData? icon;
  final VoidCallback onTap;
  const AuthButton({
    super.key,
    required this.label,
    required this.onTap,
    this.icon,
  });

  @override
  Widget build(BuildContext context) => FocusableTap(
    radius: 32,
    semanticLabel: label,
    onTap: onTap,
    child: Container(
      height: 60,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF9A5AF0), authPurpleDark],
        ),
        borderRadius: BorderRadius.circular(32),
        boxShadow: const [
          BoxShadow(
            color: Color(0x554B2E9B),
            blurRadius: 8,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (icon != null) ...[
            Icon(icon, color: Colors.white, size: 26),
            const SizedBox(width: 10),
          ],
          Flexible(
            child: Text(
              label,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                fontFamily: 'Tajawal',
                fontSize: 21,
                fontWeight: FontWeight.w900,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

/// A white outlined button (Google, register later, …).
class AuthOutlineButton extends StatelessWidget {
  final String label;
  final Widget? leading;
  final VoidCallback onTap;
  const AuthOutlineButton({
    super.key,
    required this.label,
    required this.onTap,
    this.leading,
  });

  @override
  Widget build(BuildContext context) => FocusableTap(
    radius: 32,
    semanticLabel: label,
    onTap: onTap,
    child: Container(
      height: 58,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32),
        border: Border.all(color: const Color(0xFFCDBDF0), width: 2),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (leading != null) ...[leading!, const SizedBox(width: 10)],
          Flexible(
            child: Text(
              label,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                fontFamily: 'Tajawal',
                fontSize: 18,
                fontWeight: FontWeight.w900,
                color: authInk,
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

/// The multicoloured "G" of the Google button, drawn as text (no asset, no network).
class GoogleG extends StatelessWidget {
  const GoogleG({super.key});

  @override
  Widget build(BuildContext context) => ShaderMask(
    shaderCallback: (r) => const LinearGradient(
      colors: [
        Color(0xFF4285F4),
        Color(0xFF34A853),
        Color(0xFFFBBC05),
        Color(0xFFEA4335),
      ],
      stops: [0.0, 0.4, 0.7, 1.0],
    ).createShader(r),
    child: const Text(
      'G',
      style: TextStyle(
        fontFamily: 'Tajawal',
        fontSize: 28,
        fontWeight: FontWeight.w900,
        color: Colors.white,
        height: 1,
      ),
    ),
  );
}

/// A small tick box with its label.
class AuthTick extends StatelessWidget {
  final bool on;
  final String label;
  final VoidCallback onTap;
  final ValueKey<String> tapKey;
  final ValueKey<String> boxKey;
  const AuthTick({
    super.key,
    required this.on,
    required this.label,
    required this.onTap,
    required this.tapKey,
    required this.boxKey,
  });

  @override
  Widget build(BuildContext context) => FocusableTap(
    key: tapKey,
    radius: 14,
    semanticLabel: label,
    onTap: onTap,
    child: Padding(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            key: boxKey,
            width: 28,
            height: 28,
            decoration: BoxDecoration(
              color: on ? authInk : Colors.white,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: authInk, width: 2.5),
            ),
            child: on
                ? const Icon(Icons.check_rounded, color: Colors.white, size: 22)
                : null,
          ),
          const SizedBox(width: 10),
          Text(
            label,
            style: const TextStyle(
              fontFamily: 'Tajawal',
              fontSize: 16,
              fontWeight: FontWeight.w800,
              color: authInk,
            ),
          ),
        ],
      ),
    ),
  );
}

/// The "or" line between the main button and Google.
class AuthOr extends StatelessWidget {
  final String text;
  const AuthOr(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Row(
    children: [
      const Expanded(child: Divider(color: Color(0xFFCDBDF0), thickness: 2)),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 14),
        child: Text(
          text,
          style: const TextStyle(
            fontFamily: 'Tajawal',
            fontSize: 16,
            fontWeight: FontWeight.w900,
            color: authInk,
          ),
        ),
      ),
      const Expanded(child: Divider(color: Color(0xFFCDBDF0), thickness: 2)),
    ],
  );
}
