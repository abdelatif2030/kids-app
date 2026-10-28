import '../literacy/letters_data.dart';
import '../literacy/mastery.dart';
import '../stories/story_data.dart';
import '../stories/story_store.dart';
import 'learning_records.dart';
import 'vocab.dart';
import '../l10n/strings.dart';

/// Who was exposed to, practised and demonstrated an item. Kept as three sets
/// so a screen can never mix "listened to" with "understood".
class EvidenceSets {
  final Set<String> exposure = {};
  final Set<String> practice = {};
  final Set<String> demonstrated = {};

  void add(Evidence e, String ref) {
    switch (e) {
      case Evidence.exposure:
        exposure.add(ref);
      case Evidence.practice:
        practice.add(ref);
      case Evidence.demonstrated:
        demonstrated.add(ref);
    }
  }
}

class StoryListened {
  final String id;
  final String title;
  final int seconds; // listening time: exposure only
  final bool completed;
  final bool understoodChecked; // the comprehension questions were answered right
  const StoryListened(this.id, this.title, this.seconds, this.completed, this.understoodChecked);
}

class LearningSummary {
  final int lessonsCompleted;
  final EvidenceSets letters;
  final EvidenceSets words;
  final int masteredLetters; // in spaced review: box 3 or more
  final List<StoryListened> stories;
  final List<String> favoriteStories;
  final int offlineActivities;
  final int creations;
  final List<String> needsPractice;
  final List<String> nextSteps;
  const LearningSummary({
    required this.lessonsCompleted,
    required this.letters,
    required this.words,
    required this.masteredLetters,
    required this.stories,
    required this.favoriteStories,
    required this.offlineActivities,
    required this.creations,
    required this.needsPractice,
    required this.nextSteps,
  });

  int get storySeconds => stories.fold(0, (s, e) => s + e.seconds);
  bool get isEmpty =>
      lessonsCompleted == 0 &&
      letters.exposure.isEmpty &&
      letters.practice.isEmpty &&
      words.exposure.isEmpty &&
      words.practice.isEmpty &&
      stories.isEmpty &&
      offlineActivities == 0 &&
      creations == 0;
}

/// Builds the picture from stored records. [records] are the week's records of
/// one child; [allRecords] (longer window) decide what still needs practice.
LearningSummary buildLearningSummary({
  required List<LearningRecord> records,
  required List<LearningRecord> allRecords,
  required List<ListenEntry> history,
  required String weekFrom, // yyyy-mm-dd, inclusive
  required Set<String> favorites,
  required Map<String, LetterState> letterStates,
  required int offlineActivities,
}) {
  final letters = EvidenceSets();
  final words = EvidenceSets();
  var lessons = 0;
  var creations = 0;
  final lessonKeys = <String>{};
  final storyDemo = <String>{};
  for (final r in records) {
    switch (r.type) {
      case RecordType.letter:
        letters.add(r.evidence, r.ref);
      case RecordType.word:
        words.add(r.evidence, r.ref);
      case RecordType.lesson:
        // One lesson per finished run; the record is written once per run.
        if (r.evidence != Evidence.exposure) {
          lessons++;
          lessonKeys.add(r.ref);
        }
      case RecordType.story:
        if (r.evidence == Evidence.demonstrated) storyDemo.add(r.ref);
      case RecordType.creative:
        creations++;
      case RecordType.activity:
        break;
    }
  }

  final stories = <String, StoryListened>{};
  for (final h in history.where((h) => h.day.compareTo(weekFrom) >= 0)) {
    final story = storyById(h.storyId);
    if (story == null) continue;
    final old = stories[h.storyId];
    stories[h.storyId] = StoryListened(
      h.storyId,
      story.title,
      (old?.seconds ?? 0) + h.seconds,
      (old?.completed ?? false) || h.completed,
      storyDemo.contains(h.storyId),
    );
  }

  // Needs practice: letters in review that went back to the start, and words
  // tried in the last 3 weeks but never answered right on the first try.
  final needs = <String>[];
  for (final e in letterStates.entries) {
    if (e.value.sessions >= 1 && e.value.box <= 1) {
      final l = letterOf(e.key);
      if (l != null) needs.add(tr2('حرف ${l.letter} (${l.name})', 'letter ${l.letter} (${l.name})'));
    }
  }
  final tried = <String>{};
  final understood = <String>{};
  for (final r in allRecords.where((r) => r.type == RecordType.word)) {
    if (r.evidence == Evidence.practice) tried.add(r.ref);
    if (r.evidence == Evidence.demonstrated) understood.add(r.ref);
  }
  for (final id in tried.difference(understood)) {
    final v = vocabById(id);
    if (v != null) needs.add(tr2('كلمة ${v.ar}', 'word ${v.ar}'));
  }

  final favoriteTitles = [for (final id in favorites) if (storyById(id) != null) storyById(id)!.title];

  final next = <String>[];
  if (letters.exposure.isNotEmpty && letters.demonstrated.isEmpty) {
    next.add(loc('اطّلع طفلك على حروف جديدة، لكن لم يُجب بعد إجابة صحيحة من أول مرة. جرّبوا «تمرين الحرف».'));
  }
  final needsLetters = needs.where((n) => n.startsWith(loc('حرف'))).take(3).toList();
  if (needsLetters.isNotEmpty) next.add(tr2('راجعوا معاً: ${needsLetters.join(loc('، '))}. زر «مراجعة اليوم» في تعلّم الحروف يجمعها.', 'Review together: ${needsLetters.join(', ')}. The “Today\'s review” button in the letters section collects them.'));
  if (stories.isNotEmpty && stories.values.every((s) => !s.understoodChecked) && stories.values.any((s) => s.completed)) {
    next.add(loc('بعد القصة اضغطوا «أسئلة عن القصة»؛ الاستماع وحده لا يعني أن الطفل فهم.'));
  }
  if (offlineActivities == 0) next.add(loc('جرّبوا نشاطاً واحداً من «أنشطة مع الأهل» هذا الأسبوع.'));
  if (lessons == 0 && letters.practice.isEmpty && words.practice.isEmpty) {
    next.add(loc('ابدؤوا بدرس قصير (5 دقائق) من «تعلّم الحروف» أو «مكتبة الكلمات».'));
  }

  return LearningSummary(
    lessonsCompleted: lessons,
    letters: letters,
    words: words,
    masteredLetters: letterStates.values.where((s) => s.mastered).length,
    stories: stories.values.toList(),
    favoriteStories: favoriteTitles,
    offlineActivities: offlineActivities,
    creations: creations,
    needsPractice: needs.take(8).toList(),
    nextSteps: next.take(4).toList(),
  );
}
