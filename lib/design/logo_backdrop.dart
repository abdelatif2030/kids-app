import 'package:flutter/material.dart';

/// The Rehlaty logo, faint and centred behind a screen. Decoration only: no taps, not read aloud, and nothing
/// shows if the file is missing. The logo itself is spoken where it is shown as a real logo (start screen, intro).
class LogoBackdrop extends StatelessWidget {
  final Widget child;
  final double opacity;
  final double maxWidth;
  const LogoBackdrop({super.key, required this.child, this.opacity = 0.14, this.maxWidth = 460});

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [LogoLayer(opacity: opacity, maxWidth: maxWidth), child],
    );
  }
}

/// Just the faint logo layer, to put inside a Stack under the content.
class LogoLayer extends StatelessWidget {
  final double opacity;
  final double maxWidth;
  const LogoLayer({super.key, this.opacity = 0.14, this.maxWidth = 460});

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: ExcludeSemantics(
        child: IgnorePointer(
          child: LayoutBuilder(
            builder: (context, box) {
              final w = box.maxWidth.isFinite ? (box.maxWidth * 0.8).clamp(0.0, maxWidth) : maxWidth;
              return Center(
                child: Opacity(
                  opacity: opacity,
                  child: Image.asset(
                    'assets/branding/logo.png',
                    key: const ValueKey('bg_logo'),
                    width: w,
                    fit: BoxFit.contain,
                    filterQuality: FilterQuality.medium,
                    errorBuilder: (context, error, stack) => const SizedBox.shrink(),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
