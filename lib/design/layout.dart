import 'package:flutter/material.dart';

import 'tokens.dart';

/// How much room a screen has. Decided from the available width, not from the device type:
/// a phone in landscape or a resized browser window gets the layout its width calls for.
enum WindowClass { compact, medium, expanded }

WindowClass windowClassOf(double width) =>
    width < DS.phone ? WindowClass.compact : (width < DS.tablet ? WindowClass.medium : WindowClass.expanded);

extension WindowContext on BuildContext {
  WindowClass get windowClass => windowClassOf(MediaQuery.sizeOf(this).width);
}

/// Horizontal page padding for a window class.
double pagePadding(WindowClass w) => switch (w) {
      WindowClass.compact => DS.s16,
      WindowClass.medium => DS.s24,
      WindowClass.expanded => DS.s32,
    };

/// Keeps content readable: centred, no wider than [maxWidth], with page padding. Use it as the
/// body of a scrolling screen so text lines and cards never stretch across a wide window.
class ResponsiveBody extends StatelessWidget {
  final Widget child;
  final double maxWidth;
  const ResponsiveBody({super.key, required this.child, this.maxWidth = DS.maxWide});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        final pad = pagePadding(windowClassOf(c.maxWidth));
        return Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxWidth + pad * 2),
            child: Padding(padding: EdgeInsets.symmetric(horizontal: pad), child: child),
          ),
        );
      },
    );
  }
}

/// How many columns of at least [minTileWidth] fit in [width] (at least 1, at most [maxColumns]).
int columnsFor(double width, {double minTileWidth = 280, int maxColumns = 4, double gap = DS.s16}) {
  final n = ((width + gap) / (minTileWidth + gap)).floor();
  return n.clamp(1, maxColumns);
}

/// A scrolling list whose content never gets wider than [maxWidth] on a wide window (the extra space
/// becomes side padding), with the same `padding` and `children` as a plain ListView.
class CenteredList extends StatelessWidget {
  final EdgeInsets padding;
  final List<Widget> children;
  final double maxWidth;
  final ScrollController? controller;
  const CenteredList({super.key, this.padding = EdgeInsets.zero, required this.children, this.maxWidth = 720, this.controller});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, box) {
        final extra = box.maxWidth > maxWidth ? (box.maxWidth - maxWidth) / 2 : 0.0;
        return ListView(
          controller: controller,
          padding: padding.copyWith(left: padding.left + extra, right: padding.right + extra),
          children: children,
        );
      },
    );
  }
}
