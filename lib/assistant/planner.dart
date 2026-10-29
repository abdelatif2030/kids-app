import '../l10n/strings.dart';
import '../journey/lands.dart' show kGoals;
import '../journey/models.dart';
import '../main.dart' show Video;

/// What a parent tells the assistant about their child. Everything stays on the device.
class ParentIntake {
  final int age;
  final String nickname;

  /// Land ids (lib/journey/lands.dart) the child enjoys / needs help with.
  final Set<String> loves;
  final Set<String> needsHelp;

  /// 'energetic', 'shy', 'distracted', 'curious'.
  final Set<String> traits;

  /// Minutes a day the family wants to spend (10, 20, 30 or 40).
  final int minutesPerDay;

  /// 'ar', 'en' or 'both': the language the child learns first.
  final String learnLang;

  /// Free text from the parent (typed, or dictated with the phone keyboard).
  final String note;
  const ParentIntake({
    required this.age,
    required this.nickname,
    this.loves = const {},
    this.needsHelp = const {},
    this.traits = const {},
    this.minutesPerDay = 20,
    this.learnLang = 'both',
    this.note = '',
  });

  /// The intake with whatever the free-text note adds (the chips the parent chose are never removed).
  ParentIntake withNote() {
    final r = parseNote(note);
    return ParentIntake(
      age: age,
      nickname: nickname,
      loves: {...loves, ...r.loves}..removeAll(needsHelp),
      needsHelp: {...needsHelp, ...r.needsHelp},
      traits: {...traits, ...r.traits},
      minutesPerDay: minutesPerDay,
      learnLang: learnLang,
      note: note,
    );
  }
}

class NoteResult {
  final Set<String> loves;
  final Set<String> needsHelp;
  final Set<String> traits;
  const NoteResult(this.loves, this.needsHelp, this.traits);
}

const _topics = <String, List<String>>{
  'letters': ['حرف', 'حروف', 'قراءة', 'يقرأ', 'عربي', 'letters', 'reading', 'arabic', 'alphabet'],
  'numbers': ['رقم', 'أرقام', 'ارقام', 'حساب', 'رياضيات', 'عد', 'math', 'numbers', 'counting'],
  'colors': ['لون', 'ألوان', 'الوان', 'شكل', 'أشكال', 'colors', 'colours', 'shapes'],
  'english': ['إنجليزي', 'انجليزي', 'انجليزية', 'إنجليزية', 'english'],
  'brain': ['ذاكرة', 'ذكاء', 'ألغاز', 'الغاز', 'تفكير', 'memory', 'puzzle', 'puzzles', 'thinking'],
  'stories': ['قصة', 'قصص', 'حكايات', 'حكاية', 'stories', 'story', 'books'],
  'feelings': ['مشاعر', 'يخاف', 'خوف', 'يغضب', 'غضب', 'عصبي', 'feelings', 'afraid', 'angry', 'anger'],
};

const _negative = ['ضعيف', 'ضعف', 'صعب', 'يتعثر', 'مش بيحب', 'لا يحب', 'يكره', 'متأخر', 'محتاج مساعدة', 'يحتاج', 'مشكلة', 'weak', 'hard', 'struggles', 'struggling', 'difficult', 'dislikes', 'hates', 'needs help'];

const _traits = <String, List<String>>{
  'energetic': ['نشيط', 'حركة', 'كثير الحركة', 'لا يهدأ', 'active', 'energetic', 'restless'],
  'shy': ['خجول', 'خجولة', 'منطوي', 'shy', 'quiet'],
  'distracted': ['يشرد', 'شرود', 'يشتت', 'تشتت', 'لا يركز', 'شارد', 'distracted', 'short attention', 'loses focus'],
  'curious': ['فضولي', 'فضول', 'يسأل', 'curious', 'asks questions'],
};

/// Reads the parent's own words on the device with a short keyword table (Arabic and English). A sentence that names
/// a topic together with a worry word ("weak", "hard", "يتعثر"...) marks that topic as needing help; otherwise the topic
/// is something the child likes. This is a simple rule, not a language model: it can miss meaning, so the chips the
/// parent taps always count, and the parent sees the result before anything is applied.
NoteResult parseNote(String text) {
  final loves = <String>{};
  final needs = <String>{};
  final traits = <String>{};
  final clauses = text.toLowerCase().split(RegExp(r'[\n\.\!\?؟،,;؛]+')).map((c) => c.trim()).where((c) => c.isNotEmpty);
  for (final c in clauses) {
    final neg = _negative.any((n) => c.contains(n));
    for (final e in _topics.entries) {
      if (e.value.any((k) => c.contains(k))) (neg ? needs : loves).add(e.key);
    }
    for (final e in _traits.entries) {
      if (e.value.any((k) => c.contains(k))) traits.add(e.key);
    }
  }
  loves.removeAll(needs);
  return NoteResult(loves, needs, traits);
}

/// One complete proposal: which lands in which order, how many activities a day, how hard, the weekly lesson goals per
/// subject and some whitelisted videos. [reasons] say why, in plain words that point back to what the parent said.
class LearningPlan {
  final String id; // 'balanced', 'focus', 'fun'
  final String title;
  final String summary;
  final List<String> reasons;
  final List<String> lands; // in order
  final int dailyCount;
  final int bias;
  final List<String> interests;
  final List<String> goals;
  final Map<String, int> weeklyTargets; // subject id -> lessons per week
  final List<Video> videos;
  final int minutesPerDay;

  /// True for a plan an AI service suggested (already checked against the app's real content).
  final bool fromAi;
  const LearningPlan({
    required this.id,
    required this.title,
    required this.summary,
    required this.reasons,
    required this.lands,
    required this.dailyCount,
    required this.bias,
    required this.interests,
    required this.goals,
    required this.weeklyTargets,
    required this.videos,
    required this.minutesPerDay,
    this.fromAi = false,
  });
}

const _landSubjects = <String, List<String>>{
  'letters': ['arabic'],
  'numbers': ['math'],
  'colors': ['discover'],
  'english': ['english'],
  'brain': ['discover', 'science'],
  'stories': ['stories'],
  'feelings': ['calm', 'discover'],
};

String landTitle(String id) {
  switch (id) {
    case 'letters':
      return tr2('الحروف', 'Letters');
    case 'numbers':
      return tr2('الأرقام', 'Numbers');
    case 'colors':
      return tr2('الألوان والأشكال', 'Colours and shapes');
    case 'english':
      return tr2('الإنجليزية', 'English');
    case 'brain':
      return tr2('الذاكرة والتفكير', 'Memory and thinking');
    case 'stories':
      return tr2('القصص', 'Stories');
    case 'feelings':
      return tr2('المشاعر', 'Feelings');
  }
  return id;
}

/// Lands that suit an age (the content of each land is graded by level, but these are the ones worth putting in a plan).
List<String> landsForAge(int age, String learnLang) {
  final base = age <= 3
      ? ['colors', 'stories', 'feelings', 'letters']
      : age <= 6
          ? ['letters', 'numbers', 'colors', 'stories', 'brain', 'feelings', 'english']
          : ['numbers', 'letters', 'english', 'brain', 'stories', 'feelings'];
  return [
    for (final l in base)
      if (!(l == 'english' && learnLang == 'ar' && age < 6)) l,
  ];
}

int _dailyFor(int minutes, Set<String> traits) {
  var n = minutes <= 10 ? 2 : (minutes <= 20 ? 3 : (minutes <= 30 ? 4 : 5));
  if (traits.contains('distracted')) n = n > 3 ? 3 : n; // shorter sessions for a child who loses focus
  return n.clamp(2, 5);
}

List<String> _ordered(Iterable<String> first, List<String> pool) {
  final out = <String>[];
  for (final l in [...first, ...pool]) {
    if (pool.contains(l) && !out.contains(l)) out.add(l);
  }
  return out;
}

List<Video> pickVideos(List<String> lands, int age, String learnLang, List<Video> all, {int max = 6}) {
  final subjects = <String>[];
  for (final l in lands) {
    for (final s in _landSubjects[l] ?? const <String>[]) {
      if (!subjects.contains(s)) subjects.add(s);
    }
  }
  bool langOk(Video v) => learnLang == 'both' || v.language == learnLang || v.language == 'both';
  final fit = [for (final v in all) if (age >= v.minAge && age <= v.maxAge) v];
  final out = <Video>[];
  // One video per subject in turn (so the picks are varied). The first passes prefer the child's learning language;
  // if there are still free places, the later passes accept any language.
  for (final strict in [true, false]) {
    var added = true;
    while (added && out.length < max) {
      added = false;
      for (final s in subjects) {
        if (out.length >= max) break;
        final pool = [for (final v in fit) if (v.subject == s && !out.contains(v) && (!strict || langOk(v))) v];
        if (pool.isNotEmpty) {
          out.add(pool.first);
          added = true;
        }
      }
    }
  }
  return out;
}

/// Builds three different complete plans from the intake. Deterministic: the same intake always gives the same plans.
/// Nothing is invented: lands come from the app's real learning lands, videos from the hand-reviewed whitelist, and each
/// reason quotes what the parent chose or wrote.
List<LearningPlan> buildPlans(ParentIntake raw, List<Video> videos) {
  final intake = raw.withNote();
  final pool = landsForAge(intake.age, intake.learnLang);
  final needs = [for (final l in intake.needsHelp) if (pool.contains(l)) l];
  final loves = [for (final l in intake.loves) if (pool.contains(l)) l];
  final daily = _dailyFor(intake.minutesPerDay, intake.traits);
  final name = intake.nickname;

  List<String> goalsFor(List<String> lands) => [
        for (final g in kGoals)
          if (g.lands.any(lands.take(3).contains)) g.id,
      ];

  Map<String, int> targets(List<String> lands, {int base = 3}) {
    final m = <String, int>{};
    for (var i = 0; i < lands.length && i < 4; i++) {
      final n = i == 0 ? base + 1 : base;
      for (final s in _landSubjects[lands[i]] ?? const <String>[]) {
        m[s] = (m[s] ?? 0) + (s == 'calm' ? 1 : n);
      }
    }
    if (intake.traits.contains('energetic')) m['drawing'] = 2;
    return m;
  }

  String minutesText() => tr2('${intake.minutesPerDay} دقيقة يومياً تقريباً', 'about ${intake.minutesPerDay} minutes a day');

  // A: balanced across everything that suits the age.
  final balancedLands = _ordered([...needs.take(1), ...loves.take(1)], pool);
  final balanced = LearningPlan(
    id: 'balanced',
    title: tr2('خطة متوازنة', 'Balanced plan'),
    summary: tr2('تنوّع بين الحروف والأرقام والقصص والتفكير، مناسبة لعمر ${intake.age}.', 'A mix of letters, numbers, stories and thinking, suited to age ${intake.age}.'),
    reasons: [
      tr2('تجمع المجالات المناسبة لعمر $name في ترتيب واحد.', 'It puts the areas that suit $name\'s age in one order.'),
      if (needs.isNotEmpty) tr2('وضعنا «${landTitle(needs.first)}» في البداية لأنك ذكرت أنه يحتاج مساعدة فيه.', 'We put “${landTitle(needs.first)}” first because you said $name needs help with it.'),
      if (loves.isNotEmpty) tr2('وأضفنا «${landTitle(loves.first)}» لأنك ذكرت أنه يحبه.', 'We also put “${landTitle(loves.first)}” near the start because you said $name likes it.'),
      tr2('${minutesText()}: $daily أنشطة يومياً.', '${minutesText()}: $daily activities a day.'),
    ],
    lands: balancedLands,
    dailyCount: daily,
    bias: 0,
    interests: loves,
    goals: goalsFor(balancedLands),
    weeklyTargets: targets(balancedLands),
    videos: pickVideos(balancedLands, intake.age, intake.learnLang, videos),
    minutesPerDay: intake.minutesPerDay,
  );

  // B: focus on what needs help, at an easier level, then the rest.
  final focusLands = needs.isEmpty ? _ordered(const [], pool) : _ordered(needs, pool);
  final focus = LearningPlan(
    id: 'focus',
    title: tr2('خطة التقوية بلطف', 'Gentle focus plan'),
    summary: needs.isEmpty
        ? tr2('لم تذكر نقطة ضعف، فهذه خطة هادئة بمستوى أسهل قليلاً لتثبيت الأساسيات.', 'You did not mention a difficulty, so this is a calm plan one step easier to firm up the basics.')
        : tr2('تبدأ بما يحتاج إليه $name مع مستوى أسهل، ثم تنتقل لبقية المجالات.', 'Starts with what $name needs, at an easier level, then moves to the other areas.'),
    reasons: [
      if (needs.isNotEmpty) tr2('المجالات الأولى: ${needs.map(landTitle).join('، ')} (مما كتبته أو اخترته).', 'First areas: ${needs.map(landTitle).join(', ')} (from what you chose or wrote).'),
      tr2('المستوى أسهل بدرجة، حتى ينجح $name أكثر ويطمئن.', 'One step easier, so $name succeeds more and feels safe.'),
      if (intake.traits.contains('shy')) tr2('أضفنا «المشاعر» لأنك ذكرت أنه خجول.', 'We added “Feelings” because you said $name is shy.'),
    ],
    lands: intake.traits.contains('shy') ? _ordered([...focusLands.take(2), 'feelings'], pool) : focusLands,
    dailyCount: daily,
    bias: -1,
    interests: loves,
    goals: goalsFor(focusLands),
    weeklyTargets: targets(focusLands, base: 2),
    videos: pickVideos(focusLands, intake.age, intake.learnLang, videos),
    minutesPerDay: intake.minutesPerDay,
  );

  // C: start from what the child loves, so learning feels like play.
  final funLands = loves.isEmpty ? _ordered(['stories', 'brain'], pool) : _ordered([...loves, 'stories'], pool);
  final fun = LearningPlan(
    id: 'fun',
    title: tr2('خطة ممتعة حسب اهتماماته', 'Fun plan from interests'),
    summary: tr2('تبدأ بما يحبه $name لتبقى الحماسة عالية، وتُدخل الباقي بالتدريج.', 'Starts with what $name loves to keep the excitement up, and brings in the rest gradually.'),
    reasons: [
      if (loves.isNotEmpty) tr2('المجالات الأولى: ${loves.map(landTitle).join('، ')} لأنه يحبها.', 'First areas: ${loves.map(landTitle).join(', ')} because $name loves them.')
      else tr2('لم تذكر اهتمامات، فبدأنا بالقصص والتفكير لأنها ممتعة لمعظم الأطفال.', 'You did not mention interests, so we started with stories and thinking, which most children enjoy.'),
      if (intake.traits.contains('energetic')) tr2('أضفنا الرسم أسبوعياً لأنك ذكرت أنه نشيط.', 'We added drawing each week because you said $name is energetic.'),
      if (intake.traits.contains('curious')) tr2('أضفنا ألغاز التفكير لأنه فضولي.', 'We added thinking puzzles because $name is curious.'),
    ],
    lands: intake.traits.contains('curious') ? _ordered([...funLands.take(2), 'brain'], pool) : funLands,
    dailyCount: daily,
    bias: needs.isEmpty ? 1 : 0,
    interests: loves,
    goals: goalsFor(funLands),
    weeklyTargets: targets(funLands),
    videos: pickVideos(funLands, intake.age, intake.learnLang, videos),
    minutesPerDay: intake.minutesPerDay,
  );

  return [balanced, focus, fun];
}

/// The profile with the plan applied (name, age, photo and everything else are kept).
ChildProfile applyPlanToProfile(ChildProfile p, LearningPlan plan) => p.copyWith(
      plan: plan.lands,
      dailyCount: plan.dailyCount,
      bias: plan.bias,
      interests: plan.interests,
      goals: plan.goals,
    );
