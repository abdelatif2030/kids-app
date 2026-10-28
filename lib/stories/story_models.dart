import '../journey/models.dart';
import '../media/audio.dart';
import '../l10n/strings.dart';

enum StoryCategory { calm, virtues, emotions, nature, educational, interactive }

extension StoryCategoryText on StoryCategory {
  String get title => switch (this) {
        StoryCategory.calm => loc('قصص هادئة للنوم'),
        StoryCategory.virtues => loc('اللطف والصدق والمشاركة'),
        StoryCategory.emotions => loc('مشاعر ومخاوف'),
        StoryCategory.nature => loc('الطبيعة والفضاء'),
        StoryCategory.educational => loc('قصص تعليمية'),
        StoryCategory.interactive => loc('قصص تفاعلية'),
      };

  String get emoji => switch (this) {
        StoryCategory.calm => '🌙',
        StoryCategory.virtues => '🤝',
        StoryCategory.emotions => '💛',
        StoryCategory.nature => '🚀',
        StoryCategory.educational => '💡',
        StoryCategory.interactive => '🧭',
      };
}

/// Publication workflow for content: only [published] stories reach children.
enum PublishStatus { draft, review, published, archived }

class StoryChoice {
  final String label;
  final int goTo; // index of the next chapter
  const StoryChoice(this.label, this.goTo);
}

class StoryChapter {
  final String title;
  final String text; // the transcript, also what the device voice reads
  final List<StoryChoice> choices; // empty: continue to the next chapter
  final bool ending;
  const StoryChapter(this.title, this.text, {this.choices = const [], this.ending = false});
}

/// Everything about a story except its media. The recording is only named by
/// [media]; where it lives (bundled, remote, device voice, none) is the
/// player's business.
class Story {
  final String id;
  final String title;
  final String description;
  final StoryCategory category;
  final int minAge;
  final int maxAge;
  final String language;
  final String narrator;
  final MediaRef media;

  /// Length of the recording for file audio; null for device-voice stories
  /// (estimated from the text).
  final int? durationSeconds;
  final String cover; // emoji illustration until real artwork exists
  final int coverColor;
  final List<String> themes;
  final String objectives;
  final PublishStatus status;

  /// Who wrote it and under what rights it may be used.
  final String source;
  final String rights;
  final String? reviewedBy;
  final String? lastReview;
  final List<StoryChapter> chapters;

  /// Short questions after the story, to check understanding (this, not
  /// listening time, is what counts as demonstrated).
  final List<Question> questions;

  const Story({
    required this.id,
    required this.title,
    required this.description,
    required this.category,
    required this.minAge,
    required this.maxAge,
    required this.narrator,
    required this.media,
    required this.cover,
    required this.coverColor,
    required this.themes,
    required this.objectives,
    required this.source,
    required this.rights,
    this.language = 'ar',
    this.durationSeconds,
    this.status = PublishStatus.published,
    this.reviewedBy,
    this.lastReview,
    this.chapters = const [],
    this.questions = const [],
  });

  bool get branching => chapters.any((c) => c.choices.isNotEmpty);

  /// True when the voice is the phone's text-to-speech, not a real recording.
  bool get isDeviceVoice => media is DeviceVoice;

  /// Seconds at a normal pace: the recording's length, or the word count of
  /// the transcript at about 2.2 words per second.
  int get estimatedSeconds =>
      durationSeconds ??
      (chapters.fold<int>(0, (sum, c) => sum + c.text.trim().split(RegExp(r'\s+')).length) / 2.2).ceil();

  bool fitsAge(int age) => age >= minAge && age <= maxAge;
}
