import 'package:flutter/material.dart';

import '../../ui.dart' show Mascot;
import '../lands.dart';
import '../models.dart';
import '../progress.dart';
import '../repository.dart';
import 'kit.dart';

/// "Me": level and stars, the day's and week's goals, badges, the mascot's
/// accessories (unlocked with stars) and a progress summary per land.
class MeTab extends StatelessWidget {
  final ChildProfile child;
  const MeTab({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        final profile = store.profileById(child.id) ?? child;
        final progress = store.progressOf(child.id);
        final week = weeklyCounts(store.attemptsOf(child.id), DateTime.now());
        final weeklyGoal = store.settings.badgeThresholds['weekly_hero'] ?? 10;
        final dailyDone = progress.todayDone.length;
        final earned = progress.badges.map((b) => b.id).toSet();
        final unlocked = progress.accessories.map((a) => a.id).toSet();

        Widget section(String title, Widget child) => Padding(
              padding: const EdgeInsets.only(top: 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Semantics(
                    header: true,
                    child: Text(title,
                        style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                  ),
                  const SizedBox(height: 8),
                  child,
                ],
              ),
            );

        return Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 560),
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
              children: [
                RCard(
                  color: RC.lavender.withAlpha(170),
                  radius: 28,
                  child: Column(
                    children: [
                      Mascot(size: 110, accessory: profile.accessory),
                      Text(profile.nickname,
                          style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: RC.ink)),
                      const SizedBox(height: 6),
                      Text('المستوى ${progress.explorerLevel} · ${progress.xp} نقطة خبرة',
                          style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                      const SizedBox(height: 6),
                      Semantics(
                        label: '${progress.xpIntoLevel} من 100 للمستوى التالي',
                        child: RProgress(value: progress.xpIntoLevel / 100),
                      ),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          _Stat('⭐', '${progress.totalStars}', 'نجمة'),
                          _Stat('🏅', '${progress.badges.length}', 'شارة'),
                          _Stat('✅', '${progress.completedTotal}', 'نشاط'),
                        ],
                      ),
                    ],
                  ),
                ),
                section(
                  'أهدافي',
                  Column(
                    children: [
                      _Goal('هدف اليوم', dailyDone, profile.dailyCount),
                      const SizedBox(height: 8),
                      _Goal('هدف الأسبوع', progress.weekCompleted, weeklyGoal),
                      const SizedBox(height: 10),
                      Semantics(
                        label: 'الأنشطة المنجزة في آخر سبعة أيام',
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            for (var i = 0; i < 7; i++)
                              Expanded(
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.end,
                                  children: [
                                    Text(week[i] > 0 ? '${week[i]}' : '',
                                        style: const TextStyle(fontSize: 12, color: RC.ink)),
                                    Container(
                                      margin: const EdgeInsets.symmetric(horizontal: 5),
                                      height: 6 + week[i].clamp(0, 6) * 9.0,
                                      decoration: BoxDecoration(
                                        color: week[i] > 0 ? RC.outline : RC.outline.withAlpha(50),
                                        borderRadius: BorderRadius.circular(8),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                section(
                  'شخصيتي',
                  Wrap(
                    spacing: 10,
                    runSpacing: 10,
                    children: [
                      _AccessoryChip(
                        emoji: '🙂',
                        label: 'بدون',
                        selected: profile.accessory == null,
                        locked: false,
                        onTap: () => store.updateProfile(profile.copyWith(accessory: null)),
                      ),
                      for (final a in kAccessories)
                        _AccessoryChip(
                          emoji: a.emoji,
                          label: unlocked.contains(a.id) ? a.name : '${a.starsNeeded} ⭐',
                          selected: profile.accessory == a.id,
                          locked: !unlocked.contains(a.id),
                          semantic: unlocked.contains(a.id)
                              ? a.name
                              : '${a.name}، تُفتح عند ${a.starsNeeded} نجمة',
                          onTap: unlocked.contains(a.id)
                              ? () => store.updateProfile(profile.copyWith(accessory: a.id))
                              : null,
                        ),
                    ],
                  ),
                ),
                section(
                  'شاراتي',
                  Wrap(
                    spacing: 10,
                    runSpacing: 10,
                    children: [
                      for (final b in kBadges)
                        _BadgeTile(
                          badge: b,
                          earned: earned.contains(b.id),
                          threshold: store.settings.badgeThresholds[b.id] ?? b.threshold,
                        ),
                    ],
                  ),
                ),
                section(
                  'أراضيّ',
                  Column(
                    children: [
                      for (final land in store.publishedLands)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 8),
                          child: RCard(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                            child: Row(
                              children: [
                                Icon(land.icon, color: land.color),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(land.title,
                                      style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                                ),
                                Text('${progress.lands[land.id]!.completed}/$kLevelsPerLand',
                                    style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                                const SizedBox(width: 8),
                                Text('${progress.lands[land.id]!.stars} ⭐',
                                    style: const TextStyle(color: RC.ink)),
                              ],
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _Stat extends StatelessWidget {
  final String emoji;
  final String value;
  final String label;
  const _Stat(this.emoji, this.value, this.label);

  @override
  Widget build(BuildContext context) => Semantics(
        label: '$value $label',
        excludeSemantics: true,
        child: Column(
          children: [
            Text(emoji, style: const TextStyle(fontSize: 26)),
            Text(value, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
            Text(label, style: const TextStyle(fontSize: 13, color: RC.ink)),
          ],
        ),
      );
}

class _Goal extends StatelessWidget {
  final String title;
  final int done;
  final int target;
  const _Goal(this.title, this.done, this.target);

  @override
  Widget build(BuildContext context) {
    final reached = done >= target;
    return RCard(
      color: reached ? RC.mint : RC.card,
      outline: reached ? RC.good : RC.outline,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      semanticLabel: '$title: $done من $target${reached ? '، تحقق' : ''}',
      child: Row(
        children: [
          Icon(reached ? Icons.emoji_events_rounded : Icons.flag_rounded,
              color: reached ? RC.star : RC.outline),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                const SizedBox(height: 4),
                RProgress(value: target == 0 ? 0 : done / target, color: reached ? RC.good : RC.star, height: 10),
              ],
            ),
          ),
          const SizedBox(width: 10),
          Text('$done/$target', style: const TextStyle(fontWeight: FontWeight.w900, color: RC.ink)),
        ],
      ),
    );
  }
}

class _AccessoryChip extends StatelessWidget {
  final String emoji;
  final String label;
  final bool selected;
  final bool locked;
  final String? semantic;
  final VoidCallback? onTap;
  const _AccessoryChip({
    required this.emoji,
    required this.label,
    required this.selected,
    required this.locked,
    this.semantic,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 88,
      child: RCard(
        color: selected ? RC.yellow : (locked ? Colors.white.withAlpha(140) : RC.card),
        outline: selected ? RC.star : RC.outline.withAlpha(locked ? 110 : 255),
        padding: const EdgeInsets.symmetric(vertical: 8),
        onTap: onTap,
        semanticLabel: semantic ?? label,
        child: Column(
          children: [
            Opacity(opacity: locked ? 0.4 : 1, child: Text(emoji, style: const TextStyle(fontSize: 32))),
            Text(label,
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: RC.ink.withAlpha(locked ? 140 : 255))),
          ],
        ),
      ),
    );
  }
}

class _BadgeTile extends StatelessWidget {
  final BadgeDef badge;
  final bool earned;
  final int threshold;
  const _BadgeTile({required this.badge, required this.earned, required this.threshold});

  @override
  Widget build(BuildContext context) {
    if (threshold <= 0) return const SizedBox.shrink(); // switched off by the admin
    return SizedBox(
      width: 100,
      child: RCard(
        color: earned ? RC.lavender : Colors.white.withAlpha(150),
        outline: earned ? RC.outline : RC.outline.withAlpha(100),
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 10),
        semanticLabel: earned ? '${badge.title}، تم الحصول عليها' : '${badge.title}، ${badge.description}',
        child: Column(
          children: [
            Opacity(opacity: earned ? 1 : 0.3, child: Text(badge.emoji, style: const TextStyle(fontSize: 34))),
            const SizedBox(height: 2),
            Text(badge.title,
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontSize: 12.5, fontWeight: FontWeight.bold, color: RC.ink.withAlpha(earned ? 255 : 150))),
          ],
        ),
      ),
    );
  }
}
