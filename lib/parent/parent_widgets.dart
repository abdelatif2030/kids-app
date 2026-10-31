import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/tokens.dart';
import '../journey/avatars.dart';
import '../journey/models.dart';
import '../journey/repository.dart';
import '../l10n/strings.dart';
import '../notifications/notification_store.dart';
import '../notifications/notification_ui.dart';

/// The Parent Area has its own look: a deep purple header with light, airy cards below it, so a parent never
/// confuses it with the child's bright adventure world.
const _kHeaderTop = Color(0xFF2E1A6B);
const _kHeaderBottom = DS.primary;

/// Welcome line and one small card per child with the real stars and level. Tapping a card runs [onChild].
class ParentHeader extends StatelessWidget {
  final ValueChanged<ChildProfile> onChild;
  const ParentHeader({super.key, required this.onChild});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [_kHeaderTop, _kHeaderBottom],
        ),
        borderRadius: BorderRadius.vertical(bottom: Radius.circular(32)),
      ),
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 22),
      child: ListenableBuilder(
        listenable: JourneyStore.instance,
        builder: (context, _) {
          final kids = JourneyStore.instance.profiles;
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          tr2('أهلاً بك', 'Welcome'),
                          key: const ValueKey('parent_welcome'),
                          style: const TextStyle(
                            fontSize: 26,
                            fontWeight: FontWeight.w900,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          tr2(
                            'كل ما يخص رحلة أطفالك في مكان واحد',
                            "Everything about your children's journey, in one place",
                          ),
                          style: const TextStyle(
                            fontSize: 14,
                            color: Colors.white70,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const NotificationBell(
                    audience: NotificationAudience.parent,
                    onRoute: parentRoute,
                    onDark: true,
                  ),
                ],
              ),
              const SizedBox(height: 14),
              if (kids.isEmpty)
                Text(
                  tr2(
                    'لم تضف أي طفل بعد. ابدأ من «الأطفال».',
                    'No children yet. Start with “Children”.',
                  ),
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  ),
                )
              else
                SizedBox(
                  height: 92,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: kids.length,
                    separatorBuilder: (_, _) => const SizedBox(width: 10),
                    itemBuilder: (context, i) => _ChildChip(
                      child: kids[i],
                      onTap: () => onChild(kids[i]),
                    ),
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}

class _ChildChip extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback onTap;
  const _ChildChip({required this.child, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final p = JourneyStore.instance.progressOf(child.id);
    return FocusableTap(
      key: ValueKey('parent_child_${child.id}'),
      onTap: onTap,
      radius: 22,
      semanticLabel:
          '${child.nickname}, ${p.totalStars} ${tr2('نجمة', 'stars')}',
      child: Container(
        constraints: const BoxConstraints(minWidth: 170),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: Colors.white.withAlpha(36),
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: Colors.white24),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ChildAvatar(child: child, size: 52),
            const SizedBox(width: 10),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  child.nickname,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 17,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                const SizedBox(height: 2),
                Row(
                  children: [
                    const Icon(
                      Icons.star_rounded,
                      color: DS.highlight,
                      size: 18,
                    ),
                    const SizedBox(width: 2),
                    Text(
                      '${p.totalStars}',
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Text(
                      trArgs('home.level', {'n': p.explorerLevel}),
                      style: const TextStyle(
                        color: Colors.white70,
                        fontSize: 13,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// A big rounded quick action (frequent things a parent does).
class ParentQuickTile extends StatelessWidget {
  final String keyName;
  final IconData icon;
  final String label;
  final List<Color> colors;
  final VoidCallback onTap;
  const ParentQuickTile({
    super.key,
    required this.keyName,
    required this.icon,
    required this.label,
    required this.colors,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      key: ValueKey('quick_$keyName'),
      onTap: onTap,
      radius: 22,
      semanticLabel: label,
      child: Container(
        height: 96,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: colors,
          ),
          borderRadius: BorderRadius.circular(22),
          boxShadow: DS.softShadow,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: Colors.white, size: 32),
            const SizedBox(height: 6),
            Text(
              label,
              maxLines: 2,
              textAlign: TextAlign.center,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 14,
                fontWeight: FontWeight.w800,
                height: 1.1,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// A titled card that groups related rows. Each group has its own colour so the page is easy to scan.
class ParentGroup extends StatelessWidget {
  final String title;
  final IconData icon;
  final Color color;
  final List<Widget> children;
  const ParentGroup({
    super.key,
    required this.title,
    required this.icon,
    required this.color,
    required this.children,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 18),
      child: DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(26),
          boxShadow: DS.softShadow,
        ),
        child: Material(
          color: Colors.white,
          borderRadius: BorderRadius.circular(26),
          clipBehavior: Clip.antiAlias,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                color: color.withAlpha(28),
                child: Row(
                  children: [
                    Icon(icon, color: color, size: 24),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        title,
                        style: DS.heading.copyWith(
                          color: color,
                          fontWeight: FontWeight.w900,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              ...children,
            ],
          ),
        ),
      ),
    );
  }
}

/// One row inside a group: a coloured icon chip, a title, a short hint and a chevron.
class ParentRow extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String title;
  final String? subtitle;
  final VoidCallback onTap;
  const ParentRow({
    super.key,
    required this.icon,
    required this.color,
    required this.title,
    required this.onTap,
    this.subtitle,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      minTileHeight: 60,
      leading: Container(
        width: 42,
        height: 42,
        decoration: BoxDecoration(
          color: color.withAlpha(30),
          borderRadius: BorderRadius.circular(14),
        ),
        child: Icon(icon, color: color, size: 24),
      ),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w800)),
      subtitle: subtitle == null ? null : Text(subtitle!),
      trailing: const Icon(Icons.chevron_right_rounded, color: DS.inkSoft),
      onTap: onTap,
    );
  }
}
