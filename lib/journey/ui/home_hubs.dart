import 'package:flutter/material.dart';

import '../../design/worlds.dart';

import '../../assistant/planner.dart' show landsForAge;
import '../../design/layout.dart';
import '../../l10n/strings.dart';
import '../../library/vocab_screens.dart';
import '../../literacy/screens.dart';
import '../../stories/story_screens.dart';
import '../../subjects_screen.dart';
import '../lands.dart';
import '../models.dart';
import '../repository.dart';
import 'kit.dart';
import 'land_map_screen.dart';

/// One big tappable row of a hub: an emoji, a short name and a short hint.
class _HubTile extends StatelessWidget {
  final String keyName;
  final String emoji;
  final IconData? icon;
  final String title;
  final String hint;
  final Color color;
  final VoidCallback onTap;
  const _HubTile({
    required this.keyName,
    this.emoji = '',
    this.icon,
    required this.title,
    required this.hint,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(bottom: 12),
    child: RCard(
      key: ValueKey('hub_$keyName'),
      color: color,
      semanticLabel: '$title. $hint',
      onTap: onTap,
      child: Row(
        children: [
          icon != null
              ? Icon(icon, size: 40, color: RC.ink)
              : Text(emoji, style: const TextStyle(fontSize: 40)),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                    color: RC.ink,
                  ),
                ),
                Text(hint, style: const TextStyle(fontSize: 14, color: RC.ink)),
              ],
            ),
          ),
          const Icon(Icons.chevron_right_rounded, size: 32, color: RC.ink),
        ],
      ),
    ),
  );
}

/// «اتعلم واكتشف»: the existing ways to learn, in one place: letters, the learning lands, words and the lesson videos.
class LearnHubScreen extends StatelessWidget {
  final ChildProfile child;
  const LearnHubScreen({super.key, required this.child});

  void _open(BuildContext c, Widget w) =>
      Navigator.push(c, MaterialPageRoute(builder: (_) => w));

  @override
  Widget build(BuildContext context) {
    final store = JourneyStore.instance;
    final pool = landsForAge(child.age, child.learnLang);
    final published = {for (final l in store.publishedLands) l.id};
    final landIds = [
      for (final id in pool)
        if (published.contains(id) && id != 'letters') id,
    ];
    final colors = [RC.mint, RC.lavender, RC.peach, RC.sky, RC.pink];
    return Scaffold(
      appBar: AppBar(title: Text(tr2('اتعلم واكتشف', 'Learn and discover'))),
      body: PastelBackground(
        child: CenteredList(
          padding: const EdgeInsets.all(16),
          children: [
            if (pool.contains('letters'))
              _HubTile(
                keyName: 'letters',
                emoji: '🔤',
                title: tr2('الحروف', 'Letters'),
                hint: tr2(
                  'أتعلم الحروف خطوة خطوة',
                  'Learn letters step by step',
                ),
                color: RC.mint,
                onTap: () => _open(context, LettersHomeScreen(child: child)),
              ),
            for (final (i, id) in landIds.indexed)
              _HubTile(
                keyName: 'land_$id',
                icon: landById(id).icon,
                title: landById(id).title,
                hint: landById(id).subtitle,
                color: colors[i % colors.length],
                onTap: () => _open(
                  context,
                  LandMapScreen(land: landById(id), child: child),
                ),
              ),
            _HubTile(
              keyName: 'words',
              emoji: '🖼️',
              title: tr2('الكلمات', 'Words'),
              hint: tr2('صور وكلمات جديدة', 'Pictures and new words'),
              color: RC.yellow,
              onTap: () => _open(context, VocabLibraryScreen(child: child)),
            ),
            _HubTile(
              keyName: 'lessons',
              emoji: '🎓',
              title: tr2('دروس بالفيديو', 'Video lessons'),
              hint: tr2('دروس مختارة لعمرك', 'Lessons picked for your age'),
              color: RC.sky,
              onTap: () => _open(context, SubjectsScreen(age: child.age)),
            ),
          ],
        ),
      ),
    );
  }
}

/// «الكرتون والحكايات»: the stories and the hand-picked videos the app already has. Nothing here is made up: the
/// videos come from the whitelist (assets/videos.json), played with the official player.
class CartoonsHubScreen extends StatelessWidget {
  final ChildProfile child;
  const CartoonsHubScreen({super.key, required this.child});

  void _open(BuildContext c, Widget w) =>
      Navigator.push(c, MaterialPageRoute(builder: (_) => w));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(tr2('الكرتون والحكايات', 'Cartoons and stories')),
      ),
      body: WorldBackground(
        world: RWorld.ocean,
        child: CenteredList(
          padding: const EdgeInsets.all(16),
          children: [
            _HubTile(
              keyName: 'stories',
              emoji: '📖',
              title: tr2('حكايات', 'Stories'),
              hint: tr2('قصص أقرأها وأسمعها', 'Stories to read and listen to'),
              color: RC.lavender,
              onTap: () => _open(context, StoriesHomeScreen(child: child)),
            ),
            // The hand-picked videos now live under «اتعلم واكتشف» (by age, parent-approved). This place is kept for our own
            // Rehlaty cartoon episodes, which do not exist yet.
            _HubTile(
              keyName: 'episodes',
              emoji: '🎬',
              title: tr2('حلقات رحلتي', 'Rehlaty episodes'),
              hint: tr2('قريباً: حلقات كرتونية خاصة بنا', 'Coming soon: our own cartoon episodes'),
              color: RC.sky,
              onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text(tr2('الحلقات قادمة قريباً!', 'Episodes are coming soon!'))),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
