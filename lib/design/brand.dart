import 'package:flutter/material.dart';

import 'motion_system.dart';
import 'tokens.dart';

/// Adam, Nour or one of their heads, cut from the approved character sheets (assets/characters).
enum BrandCharacter { adam, nour, adamHead, nourHead }

class CharacterImage extends StatelessWidget {
  final BrandCharacter character;
  final double height;
  const CharacterImage(this.character, {super.key, this.height = 120});

  String get _path => switch (character) {
    BrandCharacter.adam => 'assets/characters/adam.png',
    BrandCharacter.nour => 'assets/characters/nour.png',
    BrandCharacter.adamHead => 'assets/characters/adam_head.png',
    BrandCharacter.nourHead => 'assets/characters/nour_head.png',
  };

  @override
  Widget build(BuildContext context) => Image.asset(
    _path,
    height: height,
    fit: BoxFit.contain,
    cacheHeight: (height * MediaQuery.devicePixelRatioOf(context)).round(),
    excludeFromSemantics: true,
    errorBuilder: (_, _, _) => SizedBox(height: height),
  );
}

/// Golden pill showing the child's real star count.
class StarBadge extends StatelessWidget {
  final int stars;
  final String semanticLabel;
  const StarBadge({
    super.key,
    required this.stars,
    required this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) => AnimatedReward(
    trigger: stars,
    child: Semantics(
      label: semanticLabel,
      excludeSemantics: true,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          gradient: DS.goldGradient,
          borderRadius: BorderRadius.circular(20),
          boxShadow: DS.softShadow,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(Icons.star_rounded, color: Colors.white, size: 22),
            const SizedBox(width: 4),
            Text(
              '$stars',
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w900,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

/// Purple gradient card with a character peeking in from the end side.
class CharacterBanner extends StatelessWidget {
  final String title;
  final String? subtitle;
  final BrandCharacter character;
  final Widget? action;
  const CharacterBanner({
    super.key,
    required this.title,
    this.subtitle,
    this.character = BrandCharacter.nour,
    this.action,
  });

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      gradient: DS.primaryGradient,
      borderRadius: BorderRadius.circular(28),
      boxShadow: DS.glow,
    ),
    padding: const EdgeInsetsDirectional.fromSTEB(18, 14, 8, 0),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(bottom: 14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                    color: Colors.white,
                  ),
                ),
                if (subtitle != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    subtitle!,
                    style: const TextStyle(fontSize: 15, color: Colors.white70),
                  ),
                ],
                if (action != null) ...[const SizedBox(height: 10), action!],
              ],
            ),
          ),
        ),
        AnimatedIconWrapper(
          effect: IconEffect.breathe,
          child: CharacterImage(character, height: 120),
        ),
      ],
    ),
  );
}

/// Section title with an optional "see all" action.
class BrandSectionTitle extends StatelessWidget {
  final String title;
  final String? actionLabel;
  final VoidCallback? onAction;
  const BrandSectionTitle(
    this.title, {
    super.key,
    this.actionLabel,
    this.onAction,
  });

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.fromLTRB(4, 16, 4, 8),
    child: Row(
      children: [
        Container(
          width: 6,
          height: 22,
          decoration: BoxDecoration(
            color: DS.pink,
            borderRadius: BorderRadius.circular(3),
          ),
        ),
        const SizedBox(width: 8),
        Expanded(
          child: Text(
            title,
            style: const TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w900,
              color: DS.primary,
            ),
          ),
        ),
        if (actionLabel != null)
          TextButton(onPressed: onAction, child: Text(actionLabel!)),
      ],
    ),
  );
}
