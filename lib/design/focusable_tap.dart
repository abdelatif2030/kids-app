import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'motion_system.dart';
import 'tokens.dart';

/// A tappable area that works with finger, mouse and keyboard: it can take focus (Tab), is activated by
/// Enter or Space, shows a clear focus ring and a hover tint, and shows the "click" cursor on the web.
/// Use it instead of a bare GestureDetector for anything the user can choose (cards, tiles, answers).
class FocusableTap extends StatefulWidget {
  final VoidCallback? onTap;
  final Widget child;
  final double radius;
  final String? semanticLabel;
  final bool selected;
  final bool focusRing;
  const FocusableTap({
    super.key,
    required this.onTap,
    required this.child,
    this.radius = 20,
    this.semanticLabel,
    this.selected = false,
    this.focusRing = true,
  });

  @override
  State<FocusableTap> createState() => _FocusableTapState();
}

class _FocusableTapState extends State<FocusableTap> {
  bool _focused = false;
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final enabled = widget.onTap != null;
    return Semantics(
      button: true,
      enabled: enabled,
      selected: widget.selected,
      label: widget.semanticLabel,
      child: FocusableActionDetector(
        enabled: enabled,
        mouseCursor: enabled ? SystemMouseCursors.click : MouseCursor.defer,
        onShowFocusHighlight: (v) => setState(() => _focused = v),
        onShowHoverHighlight: (v) => setState(() => _hovered = v),
        shortcuts: const {
          SingleActivator(LogicalKeyboardKey.enter): ActivateIntent(),
          SingleActivator(LogicalKeyboardKey.space): ActivateIntent(),
          SingleActivator(LogicalKeyboardKey.numpadEnter): ActivateIntent(),
        },
        actions: {
          ActivateIntent: CallbackAction<ActivateIntent>(
            onInvoke: (_) {
              widget.onTap?.call();
              return null;
            },
          ),
        },
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: widget.onTap,
          child: DecoratedBox(
            position: DecorationPosition.foreground,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(widget.radius),
              color: _hovered && enabled ? DS.focusColor.withAlpha(18) : null,
              border: _focused && widget.focusRing
                  ? Border.all(color: DS.focusColor, width: DS.focusWidth)
                  : null,
            ),
            child: PressFeedback(child: widget.child),
          ),
        ),
      ),
    );
  }
}
