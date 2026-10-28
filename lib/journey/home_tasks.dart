import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Real-world activities for after the screen: the child does them with a
/// parent, and the parent confirms. They never give stars or XP (rewards are
/// only for finishing an activity in the app), and nothing is photographed.
const kHomeTasks = <String, List<String>>{
  'letters': [
    'ابحث في البيت عن 3 أشياء تبدأ بالحرف الذي تعلمته اليوم.',
    'اكتب حرفًا بإصبعك على الرمل أو الطحين أو على ظهر ماما أو بابا.',
  ],
  'numbers': [
    'هات 3 أشياء مستديرة من البيت وعدّها بصوت عالٍ.',
    'ساعد في عدّ الملاعق أو الأطباق قبل الأكل.',
  ],
  'colors': [
    'ابحث عن شيء أحمر وشيء أزرق وشيء أصفر في البيت.',
    'رتّب ألعابك حسب اللون.',
  ],
  'english': [
    'قل 3 كلمات إنجليزية تعلمتها لماما أو بابا.',
    'سمِّ خمسة أشياء في غرفتك بالإنجليزية.',
  ],
  'brain': [
    'العب لعبة «أين اختفت؟»: أخفِ شيئًا تحت منديل وخمّن مكانه.',
    'رتّب 3 صور أو ألعاب من الأصغر إلى الأكبر.',
  ],
  'stories': [
    'احكِ لماما أو بابا قصة من 3 أحداث: البداية، ثم ماذا حدث، ثم النهاية.',
    'ما أجمل جزء في القصة؟ احكِه بكلماتك.',
  ],
  'feelings': [
    'احكِ لماما أو بابا عن موقف شعرت فيه بالفرح أو الغضب، وماذا فعلت.',
    'ارسم وجهًا يعبّر عن شعورك اليوم.',
  ],
  'science': [
    'جرّب مع أحد الكبار: هل يطفو الشيء أم يغرق؟ جرّب بملعقة وقطعة خشب وقطعة فلين في كوب ماء.',
    'لاحظ نباتًا في البيت وانظر ما الذي تغيّر خلال أسبوع.',
  ],
  'drawing': [
    'ارسم ما شاهدته اليوم على ورقة وأرِ ماما أو بابا.',
  ],
  'deen': [
    'احكِ لماما أو بابا شيئًا جميلًا تعلمته اليوم.',
  ],
  'general': [
    'احكِ لماما أو بابا ماذا تعلمت اليوم.',
  ],
};

/// «اكتشف مع ماما وبابا»: play with no screen, for the youngest children.
/// The parent leads; there is nothing to score.
const kExploreWithParents = <(String, String, int, int)>[
  // (activity, how, min age, max age)
  ('نقلّد أصوات الحيوانات', 'اعرض صورة حيوان وقل صوته، ثم دع الطفل يقلّدك.', 1, 3),
  ('أين الأنف؟', 'اسأل: أين أنفك؟ أين عينك؟ وأشِر مع الطفل إلى كل جزء.', 1, 2),
  ('نسمّي ما في البيت', 'امسك شيئًا واذكر اسمه بوضوح: كوب، كرة، حذاء، ثم كرّر.', 1, 3),
  ('نتأمل كتابًا مصوّرًا', 'اجلسا معًا، أشِر إلى كل صورة وسمّها واسأل: أين الكلب؟', 1, 3),
  ('نركّب المكعبات', 'ابنِ برجًا صغيرًا ودع الطفل يهدمه ويضحك، ثم أعيدا البناء.', 1, 3),
  ('رقص وأغنية', 'غنّيا معًا أغنية قصيرة مع حركات اليدين.', 1, 3),
  ('نلعب بالماء', 'في الحمام أو بإناء كبير: أكواب وملاعق وأشياء تطفو (بإشراف دائم).', 1, 3),
  ('نصنّف الألوان', 'ضع ثلاث كرات أو ألعاب بألوان مختلفة وقل: هات الأحمر!', 2, 3),
  ('أين اختفت اللعبة؟', 'غطِّ لعبة بمنديل واسأل: أين هي؟ ثم اكشفها بفرح.', 1, 2),
  ('نتحدث عن يومنا', 'قبل النوم اذكرا ثلاثة أشياء فعلتماها اليوم.', 2, 3),
];

class HomeTask {
  final String childId;
  final String topic; // a land id, or "explore"
  final String text;
  final String day; // yyyy-mm-dd
  final bool done;
  const HomeTask(this.childId, this.topic, this.text, this.day, this.done);

  String get key => '$childId|$day|$topic|${text.hashCode}';

  HomeTask confirmed() => HomeTask(childId, topic, text, day, true);

  Map<String, dynamic> toJson() => {'c': childId, 't': topic, 'x': text, 'd': day, 'ok': done};

  factory HomeTask.fromJson(Map<String, dynamic> j) =>
      HomeTask(j['c'] as String, j['t'] as String, j['x'] as String, j['d'] as String, j['ok'] as bool? ?? false);
}

/// Stored on the device only (shared_preferences `home_tasks`, last 60 days).
class HomeTasks {
  static const prefsKey = 'home_tasks';
  static const keepDays = 60;

  static Future<List<HomeTask>> all() async {
    final raw = (await SharedPreferences.getInstance()).getString(prefsKey);
    if (raw == null) return [];
    return [for (final e in jsonDecode(raw) as List<dynamic>) HomeTask.fromJson(e as Map<String, dynamic>)];
  }

  static Future<void> _save(List<HomeTask> tasks) async {
    final cutoff = DateTime.now().subtract(const Duration(days: keepDays));
    final keep = [
      for (final t in tasks)
        if (DateTime.tryParse(t.day)?.isAfter(cutoff) ?? false) t,
    ];
    final trimmed = keep.length > 300 ? keep.sublist(keep.length - 300) : keep;
    await (await SharedPreferences.getInstance())
        .setString(prefsKey, jsonEncode([for (final t in trimmed) t.toJson()]));
  }

  /// A suggestion for [topic] (a land id or a subject). Stored as waiting for
  /// the parent. If one for this topic is already waiting today, that one is
  /// returned instead of piling up duplicates.
  static Future<HomeTask> suggest(String childId, String topic, {DateTime? now}) async {
    final today = now ?? DateTime.now();
    final day = '${today.year.toString().padLeft(4, '0')}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';
    final list = await all();
    for (final t in list) {
      if (t.childId == childId && t.day == day && t.topic == topic && !t.done) return t;
    }
    final pool = kHomeTasks[topic] ?? kHomeTasks['general']!;
    final done = {for (final t in list) if (t.childId == childId && t.topic == topic) t.text};
    // Prefer one this child has not done yet; then rotate.
    final fresh = [for (final x in pool) if (!done.contains(x)) x];
    final text = (fresh.isNotEmpty ? fresh : pool)[list.length % (fresh.isNotEmpty ? fresh.length : pool.length)];
    final task = HomeTask(childId, topic, text, day, false);
    await _save([...list, task]);
    return task;
  }

  /// A parent did an «explore» activity with the child.
  static Future<void> addDone(String childId, String topic, String text, {DateTime? now}) async {
    final today = now ?? DateTime.now();
    final day = '${today.year.toString().padLeft(4, '0')}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')}';
    final list = await all();
    if (list.any((t) => t.childId == childId && t.day == day && t.text == text)) return;
    await _save([...list, HomeTask(childId, topic, text, day, true)]);
  }

  static Future<void> confirm(HomeTask task) async {
    final list = await all();
    await _save([for (final t in list) t.key == task.key ? t.confirmed() : t]);
  }

  static Future<void> remove(HomeTask task) async {
    final list = await all();
    await _save([for (final t in list) if (t.key != task.key) t]);
  }
}
