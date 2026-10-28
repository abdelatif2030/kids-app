import 'package:flutter/material.dart';

import '../../main.dart' show VideoListScreen;
import '../../parent_screens.dart';
import '../../subjects_screen.dart';
import '../lands.dart';
import '../models.dart';
import '../progress.dart';
import '../recommender.dart';
import '../repository.dart';
import 'activity_screen.dart';
import 'kit.dart';
import '../../library/vocab_screens.dart';
import '../../literacy/screens.dart';
import '../../stories/story_screens.dart';
import 'home_tasks_screen.dart';
import 'land_map_screen.dart';

/// The child's home: today's adventure, the learning lands and the videos.
class HomeTab extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback onExit;
  const HomeTab({super.key, required this.child, required this.onExit});

  void _play(BuildContext context, Activity a) => Navigator.push(
        context,
        MaterialPageRoute(builder: (_) => ActivityScreen(activity: a, child: child)),
      );

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        final progress = store.progressOf(child.id);
        final plan = store.todayPlan(child.id);
        final done = plan.where((p) => p.doneToday).length;
        final allDone = plan.isNotEmpty && done == plan.length;
        PlannedActivity? next;
        for (final p in plan) {
          if (!p.doneToday) {
            next = p;
            break;
          }
        }
        return Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 560),
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
              children: [
                Row(
                  children: [
                    IconButton(
                      tooltip: 'خروج (للأهل)',
                      onPressed: onExit,
                      icon: const Icon(Icons.lock_outline_rounded, color: RC.ink),
                    ),
                    Expanded(
                      child: Semantics(
                        header: true,
                        child: Container(
                          padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
                          decoration: BoxDecoration(
                            color: RC.sky,
                            borderRadius: BorderRadius.circular(18),
                            border: Border.all(color: RC.outline, width: 3),
                          ),
                          child: Column(
                            children: [
                              Text('أهلاً ${child.nickname}!',
                                  style: const TextStyle(
                                      fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                              Text('⭐ ${progress.totalStars}   ·   المستوى ${progress.explorerLevel}',
                                  style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                            ],
                          ),
                        ),
                      ),
                    ),
                    IconButton(
                      tooltip: 'إعدادات الوالدين',
                      onPressed: () => openParentArea(context),
                      icon: const Icon(Icons.settings_rounded, color: RC.ink),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                // Today's adventure.
                RCard(
                  color: RC.pink,
                  outline: RC.pinkDeep,
                  radius: 28,
                  padding: const EdgeInsets.all(16),
                  onTap: next == null ? null : () => _play(context, next!.activity),
                  semanticLabel: plan.isEmpty
                      ? 'مغامرة اليوم'
                      : 'مغامرة اليوم، أنهيت $done من ${plan.length}',
                  child: Row(
                    children: [
                      Container(
                        width: 76,
                        height: 76,
                        decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                        child: const Icon(Icons.rocket_launch_rounded, size: 44, color: RC.pinkDeep),
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(allDone ? 'أحسنت! أنهيت مغامرة اليوم 🏅' : 'مغامرة اليوم',
                                style: const TextStyle(
                                    fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink)),
                            const SizedBox(height: 4),
                            if (plan.isEmpty)
                              const Text('أنهيت كل الأراضي! جرّب جمع نجوم أكثر من الخريطة.',
                                  style: TextStyle(fontSize: 15, color: RC.ink))
                            else ...[
                              Text('$done من ${plan.length} أنشطة · نحو ${plan.first.minutes} دقائق لكل نشاط',
                                  style: const TextStyle(fontSize: 15, color: RC.ink)),
                              const SizedBox(height: 8),
                              RProgress(value: done / plan.length, color: RC.pinkDeep),
                            ],
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                if (next != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: FilledButton.icon(
                      style: FilledButton.styleFrom(
                        minimumSize: const Size.fromHeight(60),
                        backgroundColor: RC.good,
                      ),
                      onPressed: () => _play(context, next!.activity),
                      icon: const Icon(Icons.play_arrow_rounded, size: 34),
                      label: const Text('ابدأ رحلة اليوم',
                          style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900)),
                    ),
                  ),
                const SizedBox(height: 12),
                for (final p in plan)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: RCard(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                      onTap: () => _play(context, p.activity),
                      semanticLabel:
                          '${p.activity.title}، ${p.reason}، ${p.doneToday ? 'تم' : 'لم يتم بعد'}',
                      child: Row(
                        children: [
                          CircleAvatar(
                            backgroundColor: p.activity.land.color.withAlpha(50),
                            child: Icon(p.activity.land.icon, color: p.activity.land.color),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(p.activity.title,
                                    style: const TextStyle(
                                        fontSize: 17, fontWeight: FontWeight.bold, color: RC.ink)),
                                Text('${p.reason} · ${p.minutes} دقائق',
                                    style: const TextStyle(fontSize: 13, color: RC.ink)),
                              ],
                            ),
                          ),
                          Icon(
                            p.doneToday ? Icons.check_circle_rounded : Icons.play_circle_fill_rounded,
                            color: p.doneToday ? RC.good : RC.pinkDeep,
                            size: 32,
                          ),
                        ],
                      ),
                    ),
                  ),
                if (child.age <= 3)
                  Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: RCard(
                      color: RC.peach.withAlpha(170),
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => ExploreScreen(child: child)),
                      ),
                      semanticLabel: 'اكتشف مع ماما وبابا',
                      child: const Row(
                        children: [
                          Text('👨‍👩‍👧', style: TextStyle(fontSize: 38)),
                          SizedBox(width: 12),
                          Expanded(
                            child: Text('اكتشف مع ماما وبابا',
                                style: TextStyle(fontSize: 19, fontWeight: FontWeight.bold, color: RC.ink)),
                          ),
                          Icon(Icons.chevron_left_rounded, color: RC.ink),
                        ],
                      ),
                    ),
                  ),
                const SizedBox(height: 8),
                const Text('رحلتي',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 8),
                for (final land in store.publishedLands)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: _LandCard(
                      land: land,
                      progress: progress.lands[land.id]!,
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => LandMapScreen(land: land, child: child)),
                      ),
                    ),
                  ),
                const Text('اكتشف المزيد',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  children: [
                    _MoreCard('🔤', 'تعلّم الحروف', RC.peach, () => LettersHomeScreen(child: child)),
                    _MoreCard('🖼️', 'مكتبة الكلمات', RC.mint, () => VocabLibraryScreen(child: child)),
                    _MoreCard('🌙', 'ليلة حلوة', RC.lavender, () => StoriesHomeScreen(child: child)),
                  ],
                ),
                const SizedBox(height: 10),
                RCard(
                  color: RC.lavender.withAlpha(150),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => SubjectsScreen(age: child.age)),
                  ),
                  semanticLabel: 'فيديوهات تعليمية',
                  child: const Row(
                    children: [
                      Icon(Icons.play_circle_rounded, size: 40, color: RC.outline),
                      SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('فيديوهات تعليمية',
                                style: TextStyle(fontSize: 19, fontWeight: FontWeight.bold, color: RC.ink)),
                            Text('أغانٍ ودروس مختارة بعناية', style: TextStyle(fontSize: 14, color: RC.ink)),
                          ],
                        ),
                      ),
                      Icon(Icons.chevron_left_rounded, color: RC.ink),
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

class _LandCard extends StatelessWidget {
  final Land land;
  final LandProgress progress;
  final VoidCallback onTap;
  const _LandCard({required this.land, required this.progress, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return RCard(
      onTap: onTap,
      semanticLabel:
          '${land.title}، أنهيت ${progress.completed} من $kLevelsPerLand مستويات، ${progress.stars} نجوم',
      child: Row(
        children: [
          Container(
            width: 64,
            height: 64,
            decoration: BoxDecoration(
              color: land.color.withAlpha(45),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: land.color, width: 2),
            ),
            child: Icon(land.icon, size: 36, color: land.color),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(land.title,
                    style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 2),
                Row(
                  children: [
                    StarRow(stars: (progress.stars / (kLevelsPerLand * 3) * 3).ceil().clamp(0, 3), size: 18),
                    const SizedBox(width: 6),
                    Text('${progress.stars}/${kLevelsPerLand * 3}',
                        style: const TextStyle(fontSize: 13, color: RC.ink)),
                  ],
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    Expanded(child: RProgress(value: progress.completed / kLevelsPerLand, color: land.color, height: 10)),
                    const SizedBox(width: 8),
                    Text('${progress.completed}/$kLevelsPerLand',
                        style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(width: 10),
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: RC.pink.withAlpha(150),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: RC.pinkDeep, width: 2),
            ),
            child: const Icon(Icons.chevron_left_rounded, color: RC.pinkDeep, size: 30),
          ),
        ],
      ),
    );
  }
}

/// Used by the "create" tab to open lesson videos of one subject.
void openVideos(BuildContext context, int age, String subject) => Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => VideoListScreen(age: age, subject: subject)),
    );


class _MoreCard extends StatelessWidget {
  final String emoji;
  final String label;
  final Color color;
  final Widget Function() screen;
  const _MoreCard(this.emoji, this.label, this.color, this.screen);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 150,
      child: RCard(
        color: color.withAlpha(170),
        semanticLabel: label,
        onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => screen())),
        child: Column(
          children: [
            Text(emoji, style: const TextStyle(fontSize: 38)),
            const SizedBox(height: 4),
            Text(label,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: RC.ink)),
          ],
        ),
      ),
    );
  }
}
