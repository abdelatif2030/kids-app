import 'package:flutter/material.dart';
import '../l10n/strings.dart';

/// A "land" on the learning map: one subject area with five levels.
class Land {
  final String id;
  final String title;
  final String subtitle;
  final IconData icon;
  final Color color;
  const Land(this.id, this.title, this.subtitle, this.icon, this.color);
}

const kLands = [
  Land('letters', 'أرض الحروف', 'الحروف العربية وأصواتها', Icons.sort_by_alpha_rounded,
      Color(0xFFEF6C57)),
  Land('numbers', 'حديقة الأرقام', 'العدّ والجمع والطرح', Icons.pin_rounded, Color(0xFF2FA89A)),
  Land('colors', 'جزيرة الألوان', 'الألوان والأشكال', Icons.palette_rounded, Color(0xFFF2A33A)),
  Land('english', 'مدينة الإنجليزية', 'كلمات إنجليزية بسيطة', Icons.translate_rounded,
      Color(0xFF4A90E2)),
  Land('brain', 'نادي الذكاء', 'الذاكرة والتسلسل', Icons.psychology_rounded, Color(0xFF8E73D0)),
  Land('stories', 'قطار القصص', 'قصص وأسئلة فهم', Icons.auto_stories_rounded, Color(0xFFE56B9A)),
  Land('feelings', 'مدرسة المشاعر', 'أسمّي شعوري وأتصرف بلطف', Icons.favorite_rounded, Color(0xFFD9577A)),
];

Land landById(String id) => kLands.firstWhere((l) => l.id == id);

const kLevelsPerLand = 5;

enum ActivityKind { quiz, memory, sequence }

/// One playable level of a land.
class Activity {
  final String landId;
  final int level; // 1..5
  final ActivityKind kind;
  const Activity(this.landId, this.level, this.kind);

  String get id => '${landId}_$level';
  Land get land => landById(landId);
  String get title => '${land.title} · المستوى $level';

  /// A short name for the activity itself.
  String get kindLabel => switch (kind) {
        ActivityKind.memory => loc('لعبة الذاكرة'),
        ActivityKind.sequence => loc('رتّب الخطوات'),
        ActivityKind.quiz => switch (landId) {
            'letters' => loc('الحرف والصورة'),
            'numbers' => level <= 2 ? loc('عدّ الأشياء') : loc('حساب ممتع'),
            'colors' => loc('ألوان وأشكال'),
            'english' => loc('كلمات إنجليزية'),
            'stories' => loc('قصة وأسئلة'),
            'feelings' => loc('مشاعري'),
            _ => loc('تحدٍّ'),
          },
      };
}

/// The five levels of [landId]. The brain club alternates memory and sequence games.
List<Activity> activitiesOf(String landId) => [
      for (var level = 1; level <= kLevelsPerLand; level++)
        Activity(
          landId,
          level,
          landId == 'brain'
              ? (level.isOdd ? ActivityKind.memory : ActivityKind.sequence)
              : ActivityKind.quiz,
        ),
    ];

final List<Activity> kAllActivities = [for (final l in kLands) ...activitiesOf(l.id)];

Activity? activityById(String id) {
  for (final a in kAllActivities) {
    if (a.id == id) return a;
  }
  return null;
}

/// Minutes an activity takes at this age (younger children get shorter ones).
int minutesFor(int age) => age <= 4 ? 3 : (age <= 6 ? 4 : 5);

class Goal {
  final String id;
  final String title;
  final List<String> lands;
  const Goal(this.id, this.title, this.lands);
}

const kGoals = [
  Goal('foundation', 'تعلّم الأساسيات', ['colors', 'numbers', 'letters']),
  Goal('arabic', 'القراءة والحروف العربية', ['letters', 'stories']),
  Goal('math', 'الرياضيات', ['numbers']),
  Goal('english', 'الإنجليزية', ['english']),
  Goal('cognitive', 'الذاكرة والتفكير', ['brain']),
];

class Accessory {
  final String id;
  final String name;
  final String emoji;
  final int starsNeeded;
  const Accessory(this.id, this.name, this.emoji, this.starsNeeded);
}

/// Unlocked by total stars: stars come only from finishing activities.
const kAccessories = [
  Accessory('hat', 'قبعة', '🎩', 5),
  Accessory('glasses', 'نظارة', '🕶️', 12),
  Accessory('bow', 'فيونكة', '🎀', 22),
  Accessory('crown', 'تاج', '👑', 35),
  Accessory('cape', 'عباءة البطل', '🦸', 50),
];

class BadgeDef {
  final String id;
  final String title;
  final String description;
  final String emoji;

  /// What counts: 'any' (all finished activities), a land id, 'perfect' (3-star
  /// runs), 'lands' (different lands tried), 'daily' (days the daily goal was
  /// reached) or 'weekly' (finished activities in the last 7 days).
  final String counts;
  final int threshold;
  const BadgeDef(this.id, this.title, this.description, this.emoji, this.counts, this.threshold);

  BadgeDef withThreshold(int t) => BadgeDef(id, title, description, emoji, counts, t);
}

const kBadges = [
  BadgeDef('first_step', 'الخطوة الأولى', 'أنهِ نشاطاً واحداً', '👣', 'any', 1),
  BadgeDef('letters_star', 'نجم الحروف', 'أنهِ 3 مستويات في أرض الحروف', '🔤', 'letters', 3),
  BadgeDef('number_whiz', 'عبقري الأرقام', 'أنهِ 3 مستويات في حديقة الأرقام', '🔢', 'numbers', 3),
  BadgeDef('color_artist', 'فنان الألوان', 'أنهِ 3 مستويات في جزيرة الألوان', '🎨', 'colors', 3),
  BadgeDef('english_buddy', 'صديق الإنجليزية', 'أنهِ 3 مستويات في مدينة الإنجليزية', '🌍', 'english', 3),
  BadgeDef('brain_champ', 'بطل الذاكرة', 'أنهِ 3 مستويات في نادي الذكاء', '🧠', 'brain', 3),
  BadgeDef('story_lover', 'محب القصص', 'أنهِ 3 مستويات في قطار القصص', '📚', 'stories', 3),
  BadgeDef('kind_heart', 'قلب طيّب', 'أنهِ 3 مستويات في مدرسة المشاعر', '💛', 'feelings', 3),
  BadgeDef('perfect', 'نجوم كاملة', 'احصل على 3 نجوم في نشاط', '🌟', 'perfect', 1),
  BadgeDef('explorer', 'مستكشف', 'جرّب 4 أراضٍ مختلفة', '🧭', 'lands', 4),
  BadgeDef('daily_hero', 'بطل اليوم', 'أكمل مغامرة اليوم', '🏅', 'daily', 1),
  BadgeDef('weekly_hero', 'بطل الأسبوع', 'أنهِ 10 أنشطة في أسبوع', '🏆', 'weekly', 10),
];
