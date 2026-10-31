import '../../design/rehlaty_heart.dart';
import '../../design/layout.dart';

import 'package:flutter/material.dart';

import '../../games/game_catalog.dart';
import '../../games/review_game.dart';
import '../../games/word_book_game.dart';
import '../../l10n/strings.dart';
import '../../library/vocab.dart';
import '../../stories/story_data.dart';
import '../../stories/story_screens.dart' show StoryPlayerScreen;
import '../../stories/story_store.dart';
import '../favorites.dart';
import '../models.dart';
import 'kit.dart';

/// «مكتبتي»: the stories, words and games the child marked with a heart, and a light review of the
/// words they have met. Nothing here is scored.
class MyLibraryScreen extends StatefulWidget {
  final ChildProfile child;
  const MyLibraryScreen({super.key, required this.child});

  @override
  State<MyLibraryScreen> createState() => _MyLibraryScreenState();
}

class _MyLibraryScreenState extends State<MyLibraryScreen> {
  late Future<(Set<String>, Set<String>, Set<String>, int)> _data = _load();

  Future<(Set<String>, Set<String>, Set<String>, int)> _load() async {
    final id = widget.child.id;
    return (
      await StoryStore.favorites(id),
      await FavoritesStore.of(id, 'word'),
      await FavoritesStore.of(id, 'game'),
      (await wordsMetRecently(id)).length,
    );
  }

  Future<void> _push(Widget w) async {
    await Navigator.push(context, MaterialPageRoute(builder: (_) => w));
    if (mounted) {
      final next = _load();
      setState(() {
        _data = next;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.child;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(
          tr2('مكتبتي', 'My library'),
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w900,
            color: RC.ink,
          ),
        ),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: FutureBuilder<(Set<String>, Set<String>, Set<String>, int)>(
            future: _data,
            builder: (context, snap) {
              if (!snap.hasData) {
                return const Center(child: CircularProgressIndicator());
              }
              final (stories, words, games, met) = snap.data!;
              final favStories = [
                for (final s in publishedStories())
                  if (stories.contains(s.id)) s,
              ];
              final favWords = [
                for (final id in words)
                  if (vocabById(id) != null) vocabById(id)!,
              ];
              final favGames = [
                for (final g in kEducationalGames)
                  if (games.contains(g.id) && g.fitsAge(c.age)) g,
              ];
              final empty =
                  favStories.isEmpty && favWords.isEmpty && favGames.isEmpty;
              return CenteredList(
                padding: const EdgeInsets.all(16),
                children: [
                  RCard(
                    key: const ValueKey('review_card'),
                    color: RC.mint,
                    onTap: () => _push(ReviewGame(childId: c.id)),
                    semanticLabel: tr2(
                      'راجع ما تعلمته',
                      'Review what you learned',
                    ),
                    child: Row(
                      children: [
                        const Text('🔁', style: TextStyle(fontSize: 36)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                tr2(
                                  'راجع ما تعلمته',
                                  'Review what you learned',
                                ),
                                style: const TextStyle(
                                  fontSize: 19,
                                  fontWeight: FontWeight.w900,
                                  color: RC.ink,
                                ),
                              ),
                              Text(
                                met >= 3
                                    ? tr2(
                                        'كلمات تعرّفت عليها: $met',
                                        'Words you have met: $met',
                                      )
                                    : tr2(
                                        'تعرّف على 3 كلمات أولاً.',
                                        'Meet 3 words first.',
                                      ),
                                style: const TextStyle(
                                  fontSize: 13,
                                  color: RC.ink,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 12),
                  if (empty)
                    Padding(
                      padding: const EdgeInsets.all(20),
                      child: Text(
                        tr2(
                          'اضغط على القلب ❤ في أي قصة أو كلمة أو لعبة لتجدها هنا.',
                          'Tap the heart ❤ on any story, word or game to find it here.',
                        ),
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 17, color: RC.ink),
                      ),
                    ),
                  if (favStories.isNotEmpty) _head(tr2('قصصي', 'My stories')),
                  for (final s in favStories)
                    _row(
                      s.cover,
                      s.title,
                      () => _push(StoryPlayerScreen(story: s, child: c)),
                    ),
                  if (favWords.isNotEmpty) _head(tr2('كلماتي', 'My words')),
                  for (final w in favWords)
                    _row(
                      w.emoji,
                      w.ar,
                      () => _push(WordCardScreen(word: w, childId: c.id)),
                    ),
                  if (favGames.isNotEmpty) _head(tr2('ألعابي', 'My games')),
                  for (final g in favGames)
                    _row(
                      '🎮',
                      g.title(),
                      () => _push(g.build(c.id, c.age, learnLangOf(c))),
                    ),
                ],
              );
            },
          ),
        ),
      ),
    );
  }

  Widget _head(String t) => Padding(
    padding: const EdgeInsets.only(top: 12, bottom: 4),
    child: Text(
      t,
      style: const TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w900,
        color: RC.ink,
      ),
    ),
  );

  Widget _row(String emoji, String title, VoidCallback onTap) => Padding(
    padding: const EdgeInsets.only(bottom: 8),
    child: RCard(
      onTap: onTap,
      semanticLabel: title,
      child: Row(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 32)),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              title,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: RC.ink,
              ),
            ),
          ),
          const RehlatyHeart(size: 28),
        ],
      ),
    ),
  );
}
