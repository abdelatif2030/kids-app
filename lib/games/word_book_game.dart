import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../library/vocab.dart';
import '../media/audio.dart';
import '../media/audio_button.dart';
import '../media/audio_status.dart';
import '../media/audio_status_screen.dart' show heardLabel;
import '../safe_json.dart';
import 'game_common.dart';

/// The 50 words of the picture book, by vocabulary id. Each is an entry of the app's own
/// reviewed vocabulary (Arabic, English and an illustration), so a word is written once.
const kPictureBookIds = [
  // animals (10)
  'cat',
  'dog',
  'cow',
  'sheep',
  'duck',
  'rabbit',
  'fish',
  'bird',
  'lion',
  'elephant',
  // food (10)
  'apple',
  'banana',
  'orange',
  'grapes',
  'strawberry',
  'carrot',
  'bread',
  'milk',
  'egg',
  'tomato',
  // home (8)
  'chair', 'bed', 'door', 'book', 'ball', 'house', 'shoe', 'lamp',
  // transport (5)
  'car', 'bus', 'train', 'plane', 'ship',
  // nature (8)
  'sun', 'moon', 'star', 'cloud', 'rain', 'tree', 'flower', 'sea',
  // body (6)
  'eye', 'ear', 'nose', 'mouth', 'hand', 'foot',
  // actions (3)
  'eat', 'drink', 'sleep',
];

/// The entries, in book order. Missing ids would be skipped, which the tests rule out.
List<Vocab> pictureBookWords() => [
  for (final id in kPictureBookIds)
    for (final v in kVocab)
      if (v.id == id) v,
];

/// Which words each child has opened (local only). The book is complete when all are seen.
class WordBookProgress {
  static const _key = 'wordbook_seen';

  static Future<Set<String>> seen(String childId) async {
    final j = decodeMap(await SharedPreferences.getInstance(), _key);
    return {for (final x in (j[childId] as List? ?? const [])) '$x'};
  }

  static Future<void> save(String childId, Set<String> ids) async {
    final p = await SharedPreferences.getInstance();
    final j = decodeMap(p, _key);
    j[childId] = ids.toList();
    await p.setString(_key, jsonEncode(j));
  }

  static Future<void> reset(String childId) => save(childId, {});
}

/// «كتاب الكلمات»: 50 common words, each with an illustration, its Arabic and English
/// names and a listen button that tells the truth about its sound. The finish comes
/// when every word has been opened (over any number of visits), never per word.
class WordBookGame extends StatefulWidget {
  final String childId;
  const WordBookGame({super.key, required this.childId});

  static const gameId = 'word_book';

  @override
  State<WordBookGame> createState() => _WordBookGameState();
}

class _WordBookGameState extends State<WordBookGame> {
  final _words = pictureBookWords();
  Set<String> _seen = {};
  String? _category;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    WordBookProgress.seen(widget.childId).then((s) {
      if (mounted) {
        setState(() {
          _seen = s;
          _loaded = true;
        });
      }
    });
  }

  @override
  void dispose() {
    AppAudio.stopSaying();
    super.dispose();
  }

  bool get _complete => _words.every((w) => _seen.contains(w.id));

  Future<void> _open(Vocab w) async {
    await Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => _WordCard(word: w)),
    );
    if (!mounted) return;
    setState(() => _seen = {..._seen, w.id});
    await WordBookProgress.save(widget.childId, _seen);
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('كتاب الكلمات', 'Word picture book');
    if (!_loaded) {
      return GameScaffold(
        title: title,
        child: const Center(child: CircularProgressIndicator()),
      );
    }
    if (_complete) {
      return GameScaffold(
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: WordBookGame.gameId,
          onAgain: () async {
            await WordBookProgress.reset(widget.childId);
            if (mounted) setState(() => _seen = {});
          },
        ),
      );
    }
    final shown = [
      for (final w in _words)
        if (_category == null || w.category == _category) w,
    ];
    final cats = [
      for (final c in kVocabCategories)
        if (_words.any((w) => w.category == c.id)) c,
    ];
    return GameScaffold(
      title: title,
      instruction: tr2(
        'افتح كل بطاقة لتتعرف على الكلمة (${_seen.length} من ${_words.length})',
        'Open each card to meet the word (${_seen.length} of ${_words.length})',
      ),
      child: Column(
        children: [
          SizedBox(
            height: 52,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 4),
                  child: ChoiceChip(
                    label: Text(tr2('الكل', 'All')),
                    selected: _category == null,
                    onSelected: (_) => setState(() => _category = null),
                  ),
                ),
                for (final c in cats)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ChoiceChip(
                      label: Text('${c.emoji} ${c.title}'),
                      selected: _category == c.id,
                      onSelected: (_) => setState(() => _category = c.id),
                    ),
                  ),
              ],
            ),
          ),
          Expanded(
            child: GridView.extent(
              padding: const EdgeInsets.all(12),
              maxCrossAxisExtent: 130,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              children: [
                for (final w in shown)
                  Semantics(
                    button: true,
                    label: '${w.ar} ${w.en ?? ''}',
                    child: GestureDetector(
                      key: ValueKey('word_${w.id}'),
                      onTap: () => _open(w),
                      child: Container(
                        decoration: BoxDecoration(
                          color: _seen.contains(w.id) ? RC.mint : Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: RC.outline, width: 3),
                        ),
                        child: FittedBox(
                          fit: BoxFit.scaleDown,
                          child: Padding(
                            padding: const EdgeInsets.all(6),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(
                                  w.emoji,
                                  style: const TextStyle(fontSize: 44),
                                ),
                                FittedBox(
                                  fit: BoxFit.scaleDown,
                                  child: Text(
                                    w.ar,
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w800,
                                      color: RC.ink,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _WordCard extends StatelessWidget {
  final Vocab word;
  const _WordCard({required this.word});

  @override
  Widget build(BuildContext context) {
    final on = AudioPrefs.instance.allowDeviceVoice;
    final ar = audioStatusForText(
      AppAudio.manifest,
      'ar',
      word.ar,
      deviceVoiceEnabled: on,
    );
    final en = word.en == null
        ? null
        : audioStatusForText(
            AppAudio.manifest,
            'en',
            word.en!,
            deviceVoiceEnabled: on,
          );
    return GameScaffold(
      title: word.ar,
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            // An illustration (an emoji drawing), not a photograph of the object.
            Semantics(
              label: tr2(
                'رسم توضيحي: ${word.ar}',
                'Illustration: ${word.en ?? word.ar}',
              ),
              child: Text(word.emoji, style: const TextStyle(fontSize: 130)),
            ),
            Text(
              word.ar,
              style: const TextStyle(
                fontSize: 54,
                fontWeight: FontWeight.w900,
                color: RC.ink,
              ),
            ),
            if (word.en != null)
              Text(
                word.en!,
                style: const TextStyle(fontSize: 34, color: RC.ink),
              ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 12,
              runSpacing: 8,
              alignment: WrapAlignment.center,
              children: [
                AudioButton(
                  text: word.ar,
                  lang: 'ar',
                  label: tr2('اسمع بالعربية', 'Listen in Arabic'),
                ),
                if (word.en != null)
                  AudioButton(
                    text: word.en!,
                    lang: 'en',
                    filled: false,
                    label: tr2('اسمع بالإنجليزية', 'Listen in English'),
                  ),
              ],
            ),
            const AudioNotice(),
            const SizedBox(height: 8),
            Text(
              '${tr2('العربية', 'Arabic')}: ${heardLabel(ar.heard)}',
              style: const TextStyle(fontSize: 13, color: RC.ink),
            ),
            if (en != null)
              Text(
                'English: ${heardLabel(en.heard)}',
                style: const TextStyle(fontSize: 13, color: RC.ink),
              ),
          ],
        ),
      ),
    );
  }
}
