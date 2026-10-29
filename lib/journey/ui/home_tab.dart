import '../../family/family_bubble.dart';
import '../../design/tokens.dart';
import '../avatars.dart';

import 'package:flutter/material.dart';

import '../../l10n/strings.dart';
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
import '../../library/activity_screens.dart';
import '../../library/vocab_screens.dart';
import '../../literacy/letters_data.dart' show letterOf;
import '../../literacy/screens.dart';
import '../../stories/story_screens.dart';
import '../../games/game_catalog.dart';
import '../my_day.dart';
import '../resume.dart';
import 'library_screen.dart';
import 'my_day_cards.dart';
import 'home_tasks_screen.dart';
import 'land_map_screen.dart';

/// The child's home: one obvious next step ("Continue My Journey"), today's path and goal,
/// four big shortcuts, the latest wins, and the learning lands. Everything else is one tap away.
class HomeTab extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback onExit;

  /// Switches the shell's tab (1 = games, 3 = me).
  final void Function(int tab)? onTab;

  /// Only tests set this, to check the greeting for a given time.
  final DateTime? now;
  const HomeTab({
    super.key,
    required this.child,
    required this.onExit,
    this.onTab,
    this.now,
  });

  void _play(BuildContext context, Activity a) => Navigator.push(
    context,
    MaterialPageRoute(
      builder: (_) => ActivityScreen(activity: a, child: child),
    ),
  );

  void _open(BuildContext context, Widget screen) =>
      Navigator.push(context, MaterialPageRoute(builder: (_) => screen));

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
        final young = child.age <= 6;
        final header = <Widget>[
          Row(
            children: [
              IconButton(
                tooltip: context.tr('home.exit'),
                onPressed: onExit,
                icon: const Icon(Icons.lock_outline_rounded, color: RC.ink),
              ),
              Expanded(
                child: Center(
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Semantics(
                      label:
                          '${progress.totalStars} ${trKey('home.stars')}, ${trArgs('home.level', {'n': progress.explorerLevel})}',
                      excludeSemantics: true,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          vertical: 6,
                          horizontal: 12,
                        ),
                        decoration: BoxDecoration(
                          color: RC.sky,
                          borderRadius: BorderRadius.circular(18),
                          border: Border.all(color: RC.outline, width: 2),
                        ),
                        child: Text(
                          '⭐ ${progress.totalStars}   ·   ${trArgs('home.level', {'n': progress.explorerLevel})}',
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            color: RC.ink,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              FamilyBubbleButton(child: child),
              const SizedBox(width: 4),
              IconButton(
                tooltip: context.tr('home.parent'),
                onPressed: () => openParentArea(context),
                icon: const Icon(Icons.settings_rounded, color: RC.ink),
              ),
            ],
          ),
        ];
        final primary = <Widget>[
          const SizedBox(height: 8),
          // The hero: mascot, greeting and the one big action.
          RCard(
            color: RC.pink,
            outline: RC.pinkDeep,
            radius: 28,
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                Row(
                  children: [
                    ChildAvatar(child: child, size: 84),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Semantics(
                        header: true,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              greetingFor(dayPartOf(now ?? DateTime.now())),
                              key: const ValueKey('greeting'),
                              style: TextStyle(
                                fontSize: young ? 26 : 22,
                                fontWeight: FontWeight.w900,
                                color: RC.ink,
                              ),
                            ),
                            Text(
                              child.nickname,
                              style: const TextStyle(
                                fontSize: 17,
                                fontWeight: FontWeight.bold,
                                color: RC.ink,
                              ),
                            ),
                            Text(
                              hintFor(dayPartOf(now ?? DateTime.now())),
                              style: const TextStyle(
                                fontSize: 14,
                                color: RC.ink,
                              ),
                            ),
                            if (next != null)
                              Text(
                                trArgs('home.nextUp', {
                                  'title': activityTitle(next.activity),
                                }),
                                style: const TextStyle(
                                  fontSize: 15,
                                  color: RC.ink,
                                ),
                              ),
                            if (allDone)
                              Text(
                                context.tr('home.todayDone'),
                                style: const TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold,
                                  color: RC.ink,
                                ),
                              ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                FilledButton.icon(
                  style: FilledButton.styleFrom(
                    minimumSize: Size.fromHeight(young ? 76 : 64),
                    backgroundColor: RC.good,
                  ),
                  onPressed: next != null
                      ? () => _play(context, next!.activity)
                      : (plan.isNotEmpty
                            ? () => _open(
                                context,
                                LandMapScreen(
                                  land: plan.first.activity.land,
                                  child: child,
                                ),
                              )
                            : null),
                  icon: Icon(
                    allDone ? Icons.explore_rounded : Icons.play_arrow_rounded,
                    size: 36,
                  ),
                  label: Text(
                    context.tr(allDone ? 'home.playMore' : 'home.continue'),
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w900,
                    ),
                  ),
                ),
                if (plan.isEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 8),
                    child: Text(
                      context.tr('home.allLands'),
                      style: const TextStyle(fontSize: 15, color: RC.ink),
                    ),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          MyDayCard(
            child: child,
            now: now,
            onLearn: () => next != null
                ? _play(context, next.activity)
                : (plan.isNotEmpty
                      ? _open(
                          context,
                          LandMapScreen(
                            land: plan.first.activity.land,
                            child: child,
                          ),
                        )
                      : _open(context, LettersHomeScreen(child: child))),
          ),
          const SizedBox(height: 12),
          _ResumeCard(child: child),
          const SizedBox(height: 12),
          // The optional "how do I feel" face comes after what to do next, so it never competes with it.
          FeelingCard(child: child, now: now),
        ];
        final secondary = <Widget>[
          if (plan.isNotEmpty)
            _TodayPath(plan: plan, done: done, onTap: (a) => _play(context, a)),
          const SizedBox(height: 12),
          _Shortcuts(
            items: [
              (
                Icons.sort_by_alpha_rounded,
                context.tr('home.shortcut.learn'),
                RC.peach,
                () => _open(context, LettersHomeScreen(child: child)),
              ),
              (
                Icons.auto_stories_rounded,
                context.tr('home.shortcut.stories'),
                RC.lavender,
                () => _open(context, StoriesHomeScreen(child: child)),
              ),
              (
                Icons.sports_esports_rounded,
                context.tr('home.shortcut.games'),
                RC.mint,
                () => onTab?.call(1),
              ),
              (
                Icons.emoji_events_rounded,
                context.tr('home.shortcut.wins'),
                RC.yellow,
                () => onTab?.call(3),
              ),
            ],
          ),
          const SizedBox(height: 12),
          _RecentWins(progress: progress),
          const SizedBox(height: 16),
          if (child.age <= 3)
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: RCard(
                color: RC.peach.withAlpha(170),
                onTap: () => _open(context, ExploreScreen(child: child)),
                semanticLabel: context.tr('home.explore'),
                child: Row(
                  children: [
                    const Text('👨‍👩‍👧', style: TextStyle(fontSize: 38)),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Text(
                        context.tr('home.explore'),
                        style: const TextStyle(
                          fontSize: 19,
                          fontWeight: FontWeight.bold,
                          color: RC.ink,
                        ),
                      ),
                    ),
                    const Icon(Icons.chevron_left_rounded, color: RC.ink),
                  ],
                ),
              ),
            ),
          Text(
            context.tr('home.myLands'),
            style: const TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          const SizedBox(height: 8),
          for (final land in store.publishedLands)
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: _LandCard(
                land: land,
                progress: progress.lands[land.id]!,
                onTap: () =>
                    _open(context, LandMapScreen(land: land, child: child)),
              ),
            ),
          const SizedBox(height: 4),
          Text(
            context.tr('home.more'),
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 10,
            runSpacing: 10,
            children: [
              _MoreCard(
                '📚',
                tr2('مكتبتي', 'My library'),
                RC.sky,
                () => MyLibraryScreen(child: child),
              ),
              _MoreCard(
                '🖼️',
                loc('مكتبة الكلمات'),
                RC.mint,
                () => VocabLibraryScreen(child: child),
              ),
              _MoreCard(
                '🏠',
                loc('أنشطة مع الأهل'),
                RC.yellow,
                () => ActivityLibraryScreen(child: child),
              ),
              _MoreCard(
                '▶️',
                loc('فيديوهات تعليمية'),
                RC.lavender,
                () => SubjectsScreen(age: child.age),
              ),
            ],
          ),
        ];
        return LayoutBuilder(
          builder: (context, box) {
            final wide = box.maxWidth >= 900;
            if (!wide) {
              // Phone and medium windows: one readable column.
              return Center(
                child: ConstrainedBox(
                  constraints: BoxConstraints(
                    maxWidth: box.maxWidth >= DS.phone ? 640 : 560,
                  ),
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                    children: [...header, ...primary, ...secondary],
                  ),
                ),
              );
            }
            // Wide windows: today's world on one side, the lands and shortcuts on the other.
            return Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1120),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(24, 8, 24, 16),
                  child: Column(
                    children: [
                      ...header,
                      Expanded(
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: ListView(
                                padding: const EdgeInsets.only(bottom: 24),
                                children: primary,
                              ),
                            ),
                            const SizedBox(width: 24),
                            Expanded(
                              child: ListView(
                                padding: const EdgeInsets.only(bottom: 24),
                                children: secondary,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        );
      },
    );
  }
}

/// Today's stepping stones: done, the one to do next, and the ones after it, with the gentle daily goal.
class _TodayPath extends StatelessWidget {
  final List<PlannedActivity> plan;
  final int done;
  final void Function(Activity) onTap;
  const _TodayPath({
    required this.plan,
    required this.done,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final nextIndex = plan.indexWhere((p) => !p.doneToday);
    return RCard(
      semanticLabel: trArgs('home.todayAria', {
        'done': done,
        'total': plan.length,
      }),
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            context.tr('home.path'),
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          const SizedBox(height: 8),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                for (var i = 0; i < plan.length; i++) ...[
                  if (i > 0)
                    Container(
                      width: 24,
                      height: 4,
                      color: plan[i - 1].doneToday
                          ? RC.good
                          : RC.outline.withAlpha(90),
                    ),
                  _Stone(
                    planned: plan[i],
                    current: i == nextIndex,
                    onTap: () => onTap(plan[i].activity),
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(height: 8),
          RProgress(value: done / plan.length, color: RC.pinkDeep),
          const SizedBox(height: 4),
          Text(
            trArgs('home.progress', {
              'done': done,
              'total': plan.length,
              'm': plan.first.minutes,
            }),
            style: const TextStyle(fontSize: 14, color: RC.ink),
          ),
        ],
      ),
    );
  }
}

class _Stone extends StatelessWidget {
  final PlannedActivity planned;
  final bool current;
  final VoidCallback onTap;
  const _Stone({
    required this.planned,
    required this.current,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final a = planned.activity;
    final label =
        '${activityTitle(a)}, ${planned.doneToday ? context.tr('home.done') : context.tr('home.notYet')}';
    return Semantics(
      button: true,
      label: label,
      excludeSemantics: true,
      child: Tooltip(
        message: label,
        child: InkResponse(
          onTap: onTap,
          radius: 40,
          child: Container(
            width: current ? 64 : 56,
            height: current ? 64 : 56,
            margin: const EdgeInsets.symmetric(vertical: 4),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: planned.doneToday ? RC.mint : Colors.white,
              border: Border.all(
                color: current ? RC.pinkDeep : a.land.color,
                width: current ? 4 : 3,
              ),
            ),
            child: Icon(
              planned.doneToday ? Icons.check_rounded : a.land.icon,
              size: current ? 34 : 28,
              color: planned.doneToday ? RC.good : a.land.color,
            ),
          ),
        ),
      ),
    );
  }
}

typedef _ShortcutItem = (IconData, String, Color, VoidCallback);

class _Shortcuts extends StatelessWidget {
  final List<_ShortcutItem> items;
  const _Shortcuts({required this.items});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        final w = (c.maxWidth - 10) / 2;
        return Wrap(
          spacing: 10,
          runSpacing: 10,
          children: [
            for (final (icon, label, color, onTap) in items)
              SizedBox(
                width: w,
                child: RCard(
                  color: color.withAlpha(180),
                  semanticLabel: label,
                  onTap: onTap,
                  child: Column(
                    children: [
                      Icon(icon, size: 40, color: RC.ink),
                      const SizedBox(height: 4),
                      Text(
                        label,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w900,
                          color: RC.ink,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
          ],
        );
      },
    );
  }
}

/// The latest badges earned (earned by finishing activities, never by time), or a friendly hint.
class _RecentWins extends StatelessWidget {
  final ChildProgress progress;
  const _RecentWins({required this.progress});

  @override
  Widget build(BuildContext context) {
    final wins = progress.badges.reversed.take(3).toList();
    return RCard(
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            context.tr('home.recent'),
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          const SizedBox(height: 6),
          if (wins.isEmpty)
            Text(
              context.tr('home.noWins'),
              style: const TextStyle(fontSize: 15, color: RC.ink),
            )
          else
            Wrap(
              spacing: 8,
              runSpacing: 6,
              children: [
                for (final b in wins)
                  Chip(
                    avatar: Text(b.emoji),
                    label: Text(
                      b.title,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    backgroundColor: RC.yellow.withAlpha(120),
                  ),
              ],
            ),
        ],
      ),
    );
  }
}

class _LandCard extends StatelessWidget {
  final Land land;
  final LandProgress progress;
  final VoidCallback onTap;
  const _LandCard({
    required this.land,
    required this.progress,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return RCard(
      onTap: onTap,
      semanticLabel: tr2(
        '${land.title}، أنهيت ${progress.completed} من $kLevelsPerLand مستويات، ${progress.stars} نجوم',
        '${land.title}, finished ${progress.completed} of $kLevelsPerLand levels, ${progress.stars} stars',
      ),
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
                Text(
                  land.title,
                  style: const TextStyle(
                    fontSize: 19,
                    fontWeight: FontWeight.w900,
                    color: RC.ink,
                  ),
                ),
                const SizedBox(height: 2),
                Row(
                  children: [
                    StarRow(
                      stars: (progress.stars / (kLevelsPerLand * 3) * 3)
                          .ceil()
                          .clamp(0, 3),
                      size: 18,
                    ),
                    const SizedBox(width: 6),
                    Text(
                      '${progress.stars}/${kLevelsPerLand * 3}',
                      style: const TextStyle(fontSize: 13, color: RC.ink),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    Expanded(
                      child: RProgress(
                        value: progress.completed / kLevelsPerLand,
                        color: land.color,
                        height: 10,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      '${progress.completed}/$kLevelsPerLand',
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        color: RC.ink,
                      ),
                    ),
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
            child: const Icon(
              Icons.chevron_left_rounded,
              color: RC.pinkDeep,
              size: 30,
            ),
          ),
        ],
      ),
    );
  }
}

/// Used by the "create" tab to open lesson videos of one subject.
void openVideos(BuildContext context, int age, String subject) =>
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => VideoListScreen(age: age, subject: subject),
      ),
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
        onTap: () => Navigator.push(
          context,
          MaterialPageRoute(builder: (_) => screen()),
        ),
        child: Column(
          children: [
            Text(emoji, style: const TextStyle(fontSize: 38)),
            const SizedBox(height: 4),
            Text(
              label,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: RC.ink,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// "Land · Level n" in the interface language.
String activityTitle(Activity a) =>
    '${trKey('land.${a.landId}')} · ${trArgs('home.level', {'n': a.level})}';

/// «كمّل من حيث توقفت»: the game or letter the child opened and did not finish (last 7 days).
class _ResumeCard extends StatelessWidget {
  final ChildProfile child;
  const _ResumeCard({required this.child});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<ResumeEntry?>(
      future: ResumeStore.last(child.id),
      builder: (context, snap) {
        final e = snap.data;
        if (e == null) return const SizedBox.shrink();
        String? title;
        Widget Function()? build;
        IconData icon = Icons.play_circle_fill_rounded;
        if (e.kind == 'game') {
          for (final g in kEducationalGames) {
            if (g.id == e.ref && g.fitsAge(child.age)) {
              title = g.title();
              icon = g.icon;
              build = () => g.build(child.id, child.age, learnLangOf(child));
            }
          }
        } else if (e.kind == 'letter') {
          final l = letterOf(e.ref);
          if (l != null) {
            title = tr2(
              'الحرف ${l.letter} (${l.name})',
              'The letter ${l.letter} (${l.name})',
            );
            build = () => LetterLessonScreen(child: child, letter: l);
          }
        }
        if (title == null || build == null) return const SizedBox.shrink();
        final open = build;
        return Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: RCard(
            color: RC.mint,
            semanticLabel: tr2(
              'كمّل من حيث توقفت: $title',
              'Continue where you stopped: $title',
            ),
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => open()),
            ),
            child: Row(
              children: [
                Icon(icon, size: 40, color: RC.ink),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        tr2('كمّل من حيث توقفت', 'Continue where you stopped'),
                        style: const TextStyle(fontSize: 14, color: RC.ink),
                      ),
                      Text(
                        title,
                        style: const TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.w900,
                          color: RC.ink,
                        ),
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.chevron_left_rounded, color: RC.ink),
              ],
            ),
          ),
        );
      },
    );
  }
}


