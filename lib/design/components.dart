import 'package:flutter/material.dart';

import '../l10n/strings.dart';
import 'tokens.dart';

/// Primary / secondary button with a loading state and a 56dp minimum height.
class AppButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final IconData? icon;
  final bool secondary;
  final bool loading;
  final bool expand;
  const AppButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.icon,
    this.secondary = false,
    this.loading = false,
    this.expand = false,
  });

  @override
  Widget build(BuildContext context) {
    final child = loading
        ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 3))
        : Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (icon != null) ...[Icon(icon, size: 22), const SizedBox(width: 8)],
              Flexible(child: Text(label, textAlign: TextAlign.center, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800))),
            ],
          );
    final size = Size(expand ? double.infinity : 64, DS.tapTarget);
    final enabled = loading ? null : onPressed;
    return secondary
        ? OutlinedButton(
            style: OutlinedButton.styleFrom(minimumSize: size, foregroundColor: DS.primary, side: const BorderSide(color: DS.primary, width: 2)),
            onPressed: enabled,
            child: child,
          )
        : FilledButton(
            style: FilledButton.styleFrom(minimumSize: size, backgroundColor: DS.primary, foregroundColor: DS.onPrimary),
            onPressed: enabled,
            child: child,
          );
  }
}

/// A big selectable card (single or multiple choice). Selection is shown by a
/// check icon and a thicker border, never by color alone.
class OptionCard extends StatelessWidget {
  final String title;
  final String? subtitle;
  final IconData icon;
  final bool selected;
  final VoidCallback onTap;
  const OptionCard({
    super.key,
    required this.title,
    this.subtitle,
    required this.icon,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      label: subtitle == null ? title : '$title. $subtitle',
      excludeSemantics: true,
      onTap: onTap,
      child: Material(
        color: selected ? DS.primarySoft : DS.surface,
        borderRadius: BorderRadius.circular(DS.rMedium),
        child: InkWell(
          borderRadius: BorderRadius.circular(DS.rMedium),
          onTap: onTap,
          child: AnimatedContainer(
            duration: Duration(milliseconds: MediaQuery.maybeOf(context)?.disableAnimations == true ? 0 : DS.fast),
            constraints: const BoxConstraints(minHeight: 72),
            padding: const EdgeInsets.all(DS.s12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(DS.rMedium),
              border: Border.all(color: selected ? DS.primary : DS.border, width: selected ? 3 : 1.5),
            ),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 24,
                  backgroundColor: selected ? DS.primary : DS.accentSoft,
                  child: Icon(icon, color: selected ? DS.onPrimary : DS.accent, size: 26),
                ),
                const SizedBox(width: DS.s12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: DS.heading.copyWith(fontSize: 18)),
                      if (subtitle != null) Text(subtitle!, style: DS.caption),
                    ],
                  ),
                ),
                Icon(selected ? Icons.check_circle_rounded : Icons.radio_button_unchecked_rounded,
                    color: selected ? DS.primary : DS.border, size: 28),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// "Step 2 of 5" with a progress bar.
class StepHeader extends StatelessWidget {
  final int step; // 0-based
  final int total;
  const StepHeader({super.key, required this.step, required this.total});

  @override
  Widget build(BuildContext context) {
    final label = context.tr('step.of').replaceAll('{n}', '${step + 1}').replaceAll('{total}', '$total');
    return Semantics(
      label: label,
      excludeSemantics: true,
      child: Row(
        children: [
          Flexible(flex: 2, child: Text(label, style: DS.caption.copyWith(fontWeight: FontWeight.bold))),
          const SizedBox(width: DS.s12),
          Expanded(
            flex: 3,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: LinearProgressIndicator(
                value: (step + 1) / total,
                minHeight: 10,
                color: DS.primary,
                backgroundColor: DS.primarySoft,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// An inline message next to the field it belongs to (icon + text, not color only).
class FieldError extends StatelessWidget {
  final String message;
  const FieldError(this.message, {super.key});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: DS.s8),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Icon(Icons.error_outline_rounded, color: DS.error, size: 20),
            const SizedBox(width: DS.s8),
            Expanded(child: Text(message, style: DS.body.copyWith(color: DS.error))),
          ],
        ),
      );
}

/// Nothing here yet, and what to do about it.
class EmptyState extends StatelessWidget {
  final IconData icon;
  final String title;
  final String? message;
  final Widget? action;
  const EmptyState({super.key, required this.icon, required this.title, this.message, this.action});

  @override
  Widget build(BuildContext context) => Center(
        child: Padding(
          padding: const EdgeInsets.all(DS.s24),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Icon(icon, size: 56, color: DS.inkSoft),
            const SizedBox(height: DS.s12),
            Text(title, style: DS.heading, textAlign: TextAlign.center),
            if (message != null) ...[const SizedBox(height: DS.s8), Text(message!, style: DS.caption, textAlign: TextAlign.center)],
            if (action != null) ...[const SizedBox(height: DS.s16), action!],
          ]),
        ),
      );
}

/// Something failed: say so and offer a retry.
class ErrorState extends StatelessWidget {
  final String? message;
  final VoidCallback? onRetry;
  const ErrorState({super.key, this.message, this.onRetry});

  @override
  Widget build(BuildContext context) => EmptyState(
        icon: Icons.cloud_off_rounded,
        title: context.tr('error.title'),
        message: message ?? context.tr('error.body'),
        action: onRetry == null ? null : AppButton(label: context.tr('action.retry'), onPressed: onRetry, icon: Icons.refresh_rounded),
      );
}

/// A grey placeholder block shown while content loads (no animation, so it
/// is calm and respects reduced motion).
class SkeletonBox extends StatelessWidget {
  final double height;
  final double? width;
  const SkeletonBox({super.key, this.height = 20, this.width});

  @override
  Widget build(BuildContext context) => ExcludeSemantics(
        child: Container(
          height: height,
          width: width,
          decoration: BoxDecoration(color: DS.border.withAlpha(120), borderRadius: BorderRadius.circular(DS.rSmall)),
        ),
      );
}

/// Asks before something that cannot be undone. Returns true when confirmed.
Future<bool> confirmDialog(
  BuildContext context, {
  required String title,
  required String message,
  required String confirmLabel,
  String? cancelLabel,
}) async {
  final ok = await showDialog<bool>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: Text(title),
      content: Text(message),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx, false), child: Text(cancelLabel ?? context.tr('action.cancel'))),
        FilledButton(onPressed: () => Navigator.pop(ctx, true), child: Text(confirmLabel)),
      ],
    ),
  );
  return ok == true;
}

/// A short confirmation at the bottom of the screen.
void showToast(BuildContext context, String message) {
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(SnackBar(content: Text(message), behavior: SnackBarBehavior.floating));
}

/// A bottom sheet with a title and content; closes with the platform back gesture.
Future<T?> showAppSheet<T>(BuildContext context, {required String title, required Widget child}) =>
    showModalBottomSheet<T>(
      context: context,
      isScrollControlled: true,
      showDragHandle: true,
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: EdgeInsets.fromLTRB(DS.s16, 0, DS.s16, MediaQuery.viewInsetsOf(ctx).bottom + DS.s16),
          child: SingleChildScrollView(
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: DS.heading),
              const SizedBox(height: DS.s12),
              child,
            ]),
          ),
        ),
      ),
    );
