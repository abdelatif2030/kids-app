import '../l10n/strings.dart';

/// The early-years curriculum as DATA (ages 1–6). It does not change what a child sees or store anything: it is the
/// map that content, games and the dashboard can be checked against. Every unit starts as [UnitReview.draft]; only a
/// human reviewer may change that, and nothing here claims audio or artwork that is not in the repository.
enum UnitReview { draft, reviewed }

enum Strand { arabic, english, maths, science, everyday, logic, feelings, creativity, stories }

class CurriculumUnit {
  final String id;
  final Strand strand;
  final int minAge;
  final int maxAge;
  final String Function() objective;

  /// Unit ids that should come first (guidance, never a lock).
  final List<String> prerequisites;

  /// Game ids (educational, casual or classic) that practise the unit. Empty means: no game exists yet (planned).
  final List<String> games;

  /// Skill ids (lib/skills.dart) the games feed; empty when the unit is exposure only.
  final List<String> skills;

  /// What the child does, in one line.
  final String Function() activity;

  /// The instruction the child hears or reads, in simple Arabic (draft, not reviewed).
  final String Function() instruction;

  /// Ids of planned words (curriculum/planned_vocab.dart) or library words the unit teaches.
  final List<String> words;

  /// Pictures the unit needs that do not exist yet (empty when everything it needs is drawn in code or not visual).
  final List<String> illustrationsNeeded;

  /// Audio the unit needs that is not approved yet (device voice is a demo, never counted as approved).
  final List<String> audioNeeded;

  /// Real-life apply step: ids of everyday tasks (lib/everyday) or real activities (lib/library/activities.dart).
  final List<String> apply;

  /// How a parent can tell the unit was reached.
  final String Function() completion;
  final UnitReview review;
  const CurriculumUnit(
    this.id,
    this.strand,
    this.minAge,
    this.maxAge,
    this.objective, {
    this.prerequisites = const [],
    this.games = const [],
    this.skills = const [],
    required this.activity,
    required this.instruction,
    required this.completion,
    this.words = const [],
    this.illustrationsNeeded = const [],
    this.audioNeeded = const [],
    this.apply = const [],
    this.review = UnitReview.draft,
  });
  bool fitsAge(int age) => age >= minAge && age <= maxAge;

  /// A unit is playable when it names at least one game; otherwise it is only planned.
  bool get playable => games.isNotEmpty;
}

CurriculumUnit _u(
  String id,
  Strand s,
  int a,
  int b,
  String ar,
  String en, {
  required String act,
  required String actEn,
  required String say,
  required String sayEn,
  required String done,
  required String doneEn,
  List<String> pre = const [],
  List<String> games = const [],
  List<String> skills = const [],
  List<String> words = const [],
  List<String> art = const [],
  List<String> audio = const [],
  List<String> apply = const [],
}) =>
    CurriculumUnit(id, s, a, b, () => tr2(ar, en),
        prerequisites: pre,
        games: games,
        skills: skills,
        activity: () => tr2(act, actEn),
        instruction: () => tr2(say, sayEn),
        completion: () => tr2(done, doneEn),
        words: words,
        illustrationsNeeded: art,
        audioNeeded: audio,
        apply: apply);

const _wordArt = 'artwork for the library words (emoji today)';
const _wordAudio = 'approved word recordings (device voice today)';

final List<CurriculumUnit> kCurriculumUnits = [
  // --- Arabic language and early literacy
  _u('ar_words_first', Strand.arabic, 1, 6, 'أتعرّف على أسماء الأشياء حولي', 'I learn the names of things around me',
      act: 'أنظر إلى صورة وأسمع اسمها', actEn: 'Look at a picture and hear its name',
      say: 'انظر إلى الصورة. ما اسمها؟', sayEn: 'Look at the picture. What is it called?',
      done: 'فتح خمس كلمات على الأقل', doneEn: 'Open at least five words',
      games: [], art: [_wordArt], audio: [_wordAudio], apply: ['picture_book']),
  _u('ar_words_listen', Strand.arabic, 3, 6, 'أسمع الكلمة وأختار صورتها', 'I hear a word and pick its picture',
      act: 'أسمع كلمة وأختار الصورة الصحيحة', actEn: 'Hear a word and pick the right picture',
      say: 'اسمع الكلمة، ثم اختر الصورة.', sayEn: 'Hear the word, then pick the picture.',
      done: 'خمس جولات في اللعبة', doneEn: 'Five rounds of the game',
      pre: ['ar_words_first'], games: [], skills: ['listening'], art: [_wordArt], audio: [_wordAudio]),
  _u('ar_letters_see', Strand.arabic, 3, 6, 'أتعرّف على شكل الحرف', 'I recognise the shape of a letter',
      act: 'أصطاد الحرف المطلوب', actEn: 'Catch the asked letter',
      say: 'اصطد السمكة التي عليها الحرف.', sayEn: 'Catch the fish that has the letter.',
      done: 'خمس جولات من الصيد', doneEn: 'Five rounds of letter fishing',
      games: ['letter_fishing', 'letters'], skills: ['letters_ar'], audio: ['approved letter-name recordings']),
  _u('ar_letters_name', Strand.arabic, 4, 6, 'أسمع اسم الحرف وأختاره', 'I hear a letter name and pick it',
      act: 'أسمع اسم حرف وأختاره', actEn: 'Hear a letter name and pick it',
      say: 'اسمع اسم الحرف، ثم اختره.', sayEn: 'Hear the letter name, then pick it.',
      done: 'خمس جولات في اللعبة', doneEn: 'Five rounds of the game',
      pre: ['ar_letters_see'], games: [], skills: ['letters_ar'], audio: ['approved letter-name recordings']),
  _u('ar_letters_write', Strand.arabic, 4, 6, 'أتتبّع شكل الحرف', 'I trace the shape of a letter',
      act: 'أتتبّع الحرف بإصبعي', actEn: 'Trace the letter with a finger',
      say: 'تتبّع الحرف بإصبعك من اليمين إلى اليسار.', sayEn: 'Trace the letter with your finger, right to left.',
      done: 'إنهاء لعبة التتبّع', doneEn: 'Finish the tracing game',
      pre: ['ar_letters_see'], games: [], apply: ['letter_tray', 'play_dough']),
  _u('ar_letter_sounds', Strand.arabic, 4, 6, 'أسمع صوت الحرف', 'I hear the sound of a letter',
      act: 'درس الحرف الموجّه', actEn: 'The guided letter lesson',
      say: 'اسمع الصوت، ثم كرّره معي.', sayEn: 'Hear the sound, then say it with me.',
      done: 'مراجعة الحرف بعد الدرس', doneEn: 'Review the letter after the lesson',
      pre: ['ar_letters_name'], skills: ['phonics'], audio: ['recorded isolated letter sounds (84 items silent today)']),
  _u('ar_listen_word_read', Strand.arabic, 5, 6, 'أقرأ الكلمة التي أسمعها', 'I read the word I hear',
      act: 'أسمع كلمة وأختار مكتوبها', actEn: 'Hear a word and pick its written form',
      say: 'اسمع الكلمة، ثم اختر المكتوبة.', sayEn: 'Hear the word, then pick the written one.',
      done: 'خمس جولات في اللعبة', doneEn: 'Five rounds of the game',
      pre: ['ar_letters_name'], games: [], skills: ['listening'], audio: [_wordAudio]),
  // --- English exposure
  _u('en_words_first', Strand.english, 2, 6, 'أسمع كلمات إنجليزية بسيطة', 'I hear simple English words',
      act: 'أفتح كلمات الكتاب بالإنجليزية', actEn: 'Open the book words in English',
      say: 'افتح الكلمة واسمعها بالإنجليزية.', sayEn: 'Open the word and hear it in English.',
      done: 'فتح خمس كلمات', doneEn: 'Open five words',
      games: [], skills: ['english_vocab'], audio: ['approved English recordings']),
  // --- Colours and shapes
  _u('col_names', Strand.maths, 2, 4, 'أتعرّف على الألوان', 'I learn the colours',
      act: 'أختار اللون المطلوب', actEn: 'Pick the asked colour',
      say: 'اختر اللون الذي تسمعه.', sayEn: 'Pick the colour you hear.',
      done: 'خمس جولات في لعبة الألوان', doneEn: 'Five rounds of the colour game',
      games: ['colors'], skills: ['colors'], words: ['color_red', 'color_blue', 'color_yellow', 'color_green'],
      audio: ['approved colour-name recordings'], apply: ['shop_colours', 'sort_color']),
  _u('col_more', Strand.maths, 3, 6, 'ألوان أكثر وأسماؤها', 'More colours and their names',
      act: 'أجد اللون مع الشكل', actEn: 'Find the colour with the shape',
      say: 'أين المثلث الأحمر؟', sayEn: 'Where is the red triangle?',
      done: 'خمس جولات (الأشكال والألوان معًا)', doneEn: 'Five rounds (shapes and colours together)',
      pre: ['col_names'], games: ['shape_finder'], skills: ['shapes', 'colors'],
      words: ['color_orange', 'color_purple', 'color_pink', 'color_brown', 'color_black', 'color_white'],
      art: ['picture cards for the six extra colours'], audio: ['approved colour-name recordings']),
  _u('shape_names', Strand.maths, 2, 6, 'أعرف الأشكال', 'I know the shapes',
      act: 'أجد الدائرة والمربع والمثلث', actEn: 'Find the circle, square and triangle',
      say: 'أين الدائرة؟', sayEn: 'Where is the circle?',
      done: 'خمس جولات', doneEn: 'Five rounds',
      games: ['shape_finder'], skills: ['shapes'],
      words: ['shape_circle', 'shape_square', 'shape_triangle', 'shape_rectangle', 'shape_star', 'shape_heart', 'shape_diamond'],
      audio: ['approved shape-name recordings'], apply: ['round3']),
  _u('shape_corners', Strand.maths, 5, 6, 'أعدّ زوايا الشكل', 'I count the corners of a shape',
      act: 'أيّ شكل له ثلاث زوايا؟', actEn: 'Which shape has three corners?',
      say: 'أيّ شكل له ثلاث زوايا؟', sayEn: 'Which shape has three corners?',
      done: 'خمس جولات', doneEn: 'Five rounds', pre: ['shape_names', 'math_count_10'], games: ['shape_finder'], skills: ['shapes']),
  _u('shape_size', Strand.maths, 2, 6, 'أميّز الكبير من الصغير', 'I tell big from small',
      act: 'أختار الأكبر أو الأصغر', actEn: 'Pick the bigger or the smaller',
      say: 'أيهما الكبير؟', sayEn: 'Which one is big?',
      done: 'خمس جولات', doneEn: 'Five rounds', games: [], skills: ['shapes'],
      art: ['real artwork pairs (emoji today)']),
  // --- Numbers and counting
  _u('math_count_10', Strand.maths, 3, 6, 'أعدّ حتى ١٠', 'I count to 10',
      act: 'أختار الرقم الصحيح', actEn: 'Pick the right numeral',
      say: 'اختر الرقم المناسب.', sayEn: 'Pick the matching numeral.',
      done: 'إنهاء لعبة الأرقام', doneEn: 'Finish the numerals game',
      games: ['math'], skills: ['counting'], words: ['num_1', 'num_2', 'num_3', 'num_4', 'num_5', 'num_6', 'num_7', 'num_8', 'num_9', 'num_10'],
      audio: ['approved number recordings'], apply: ['count_toys', 'count_steps']),
  _u('math_dots_order', Strand.maths, 3, 6, 'أرتّب الأرقام', 'I put numbers in order',
      act: 'أوصّل النقاط بالترتيب', actEn: 'Join the dots in order',
      say: 'اضغط على النقاط بالترتيب: ١، ٢، ٣...', sayEn: 'Tap the dots in order: 1, 2, 3...',
      done: 'رسم ثلاث صور', doneEn: 'Draw three pictures', games: [], skills: ['counting']),
  _u('math_compare', Strand.maths, 3, 6, 'أقارن بين الكمّيات', 'I compare quantities',
      act: 'أي مجموعة فيها أكثر أو أقل', actEn: 'Which group has more or fewer',
      say: 'أي مجموعة فيها أكثر؟', sayEn: 'Which group has more?',
      done: 'خمس جولات', doneEn: 'Five rounds', pre: ['math_count_10'], games: [], skills: ['counting']),
  _u('math_board', Strand.maths, 4, 6, 'أعدّ وأنتظر دوري', 'I count and wait my turn',
      act: 'أتحرك على لوحة اللعب', actEn: 'Move along a game board',
      say: 'ارمِ النرد وتحرّك بعدد النقاط.', sayEn: 'Roll the dice and move that many.',
      done: 'إنهاء اللعبة', doneEn: 'Finish the game', pre: ['math_count_10'], games: ['snakes_ladders']),
  // --- Positions and spatial concepts
  _u('pos_words', Strand.logic, 3, 6, 'فوق وتحت وداخل وبجانب', 'On top, under, inside and next to',
      act: 'أجد أين الكرة', actEn: 'Find where the ball is',
      say: 'أين الكرة؟ الكرة تحت الطاولة.', sayEn: 'Where is the ball? The ball is under the table.',
      done: 'خمس جولات', doneEn: 'Five rounds', games: ['where_ball', 'treasure_hunt'], skills: ['spatial'],
      words: ['pos_above', 'pos_below', 'pos_inside', 'pos_beside', 'pos_outside', 'pos_front', 'pos_behind'],
      art: ['«أمام» و«خلف» و«خارج» scenes'], audio: ['approved position-word recordings'], apply: ['toys_basket']),
  _u('pos_fit', Strand.logic, 3, 6, 'أركّب الصورة', 'I fit the picture together',
      act: 'أضع كل قطعة في مكانها', actEn: 'Put each piece in its place',
      say: 'ضع القطعة في مكانها.', sayEn: 'Put the piece in its place.',
      done: 'إكمال الصورة', doneEn: 'Complete the picture', games: [], skills: ['spatial']),
  // --- Animals and habitats, nature
  _u('sci_animals_home', Strand.science, 3, 6, 'أين تعيش الحيوانات؟', 'Where do animals live?',
      act: 'أضع الحيوان في بيته', actEn: 'Put the animal in its home',
      say: 'أين يعيش هذا الحيوان؟', sayEn: 'Where does this animal live?',
      done: 'إنهاء اللعبة', doneEn: 'Finish the game', games: [], skills: ['nature'], art: [_wordArt], apply: ['nature_walk']),
  _u('sci_animals_food', Strand.science, 2, 6, 'ماذا يأكل كل حيوان؟', 'What does each animal eat?',
      act: 'أطعم الحيوان طعامه', actEn: 'Feed the animal its food',
      say: 'ماذا يأكل هذا الحيوان؟', sayEn: 'What does this animal eat?',
      done: 'خمس جولات', doneEn: 'Five rounds', games: ['feed_animal'], skills: ['nature'], art: [_wordArt], apply: ['feed_pet', 'water_plant']),
  _u('sci_plants', Strand.science, 3, 6, 'أراقب النبات', 'I watch a plant grow',
      act: 'أسقي نبتة وأراقبها', actEn: 'Water a plant and watch it',
      say: 'اسقِ النبتة كل يوم وانظر كيف تكبر.', sayEn: 'Water the plant every day and see it grow.',
      done: 'تأكيد الوالد للنشاط', doneEn: 'A parent confirms the activity', apply: ['water_plant', 'plant_watch', 'leaf_hunt']),
  // --- Family and clothes (planned: no game and no artwork yet)
  _u('fam_names', Strand.everyday, 1, 6, 'أفراد عائلتي', 'The people in my family',
      act: 'أسمّي من في عائلتي', actEn: 'Name the people in my family',
      say: 'من هذا؟ هذه ماما.', sayEn: 'Who is this? This is Mum.',
      done: 'لا توجد لعبة بعد: مخطّط', doneEn: 'No game yet: planned',
      words: ['fam_mother', 'fam_father', 'fam_baby', 'fam_brother', 'fam_sister', 'fam_grandfather', 'fam_grandmother', 'fam_uncle', 'fam_aunt'],
      art: ['family pictures drawn in Rehlaty style (no photos)'], audio: ['approved family-word recordings'], apply: ['my_name_address']),
  _u('clo_names', Strand.everyday, 2, 6, 'ملابسي', 'My clothes',
      act: 'أسمّي ملابسي وأرتدي ما يناسب الطقس', actEn: 'Name my clothes and dress for the weather',
      say: 'ماذا نلبس اليوم؟', sayEn: 'What do we wear today?',
      done: 'لا توجد لعبة بعد: مخطّط', doneEn: 'No game yet: planned',
      words: ['clo_shirt', 'clo_trousers', 'clo_dress', 'clo_socks', 'clo_coat', 'clo_pyjamas', 'clo_bag', 'clo_scarf'],
      art: ['clothes pictures'], audio: ['approved clothes-word recordings'], apply: ['dress_self', 'sort_socks', 'sort_laundry']),
  // --- Everyday life
  _u('life_routine', Strand.everyday, 3, 6, 'أرتّب يومي', 'I order my day',
      act: 'ماذا نفعل بعد ذلك؟', actEn: 'What do we do next?',
      say: 'ماذا نفعل بعد ذلك؟', sayEn: 'What do we do next?',
      done: 'خمس جولات', doneEn: 'Five rounds', games: ['next_in_day'], skills: ['sequence'], art: ['routine pictures'], apply: ['day_routine', 'brush_teeth', 'wash_hands']),
  // --- Logic, memory, observation
  _u('logic_odd', Strand.logic, 3, 6, 'أجد المختلف', 'I find the odd one out',
      act: 'ثلاث صور متشابهة وواحدة مختلفة', actEn: 'Three alike, one different',
      say: 'أيّ صورة مختلفة؟', sayEn: 'Which picture is different?',
      done: 'خمس جولات', doneEn: 'Five rounds', games: [], skills: ['shapes']),
  _u('logic_pattern', Strand.logic, 4, 6, 'أكمل النمط', 'I complete the pattern',
      act: 'ما الذي يأتي بعد ذلك؟', actEn: 'What comes next?',
      say: 'ما الذي يأتي بعد ذلك؟', sayEn: 'What comes next?',
      done: 'خمس جولات', doneEn: 'Five rounds', games: ['pattern'], skills: ['sequence']),
  _u('logic_sort', Strand.logic, 4, 6, 'أصنّف في مجموعات', 'I sort into groups',
      act: 'أضع كل شيء في مجموعته', actEn: 'Put each thing in its group',
      say: 'ضع كل شيء مع أمثاله.', sayEn: 'Put each thing with its kind.',
      done: 'خمس جولات', doneEn: 'Five rounds', games: ['sort_groups'], skills: ['vocab'], apply: ['sort_color', 'socks_pairs']),
  _u('logic_memory', Strand.logic, 3, 6, 'أتذكّر الأزواج', 'I remember pairs',
      act: 'ألعب لعبة الذاكرة', actEn: 'Play the memory game',
      say: 'اقلب بطاقتين وابحث عن الزوج.', sayEn: 'Turn two cards and find the pair.',
      done: 'إنهاء اللعبة', doneEn: 'Finish the game', games: ['memory'], skills: ['memory']),
  _u('logic_planning', Strand.logic, 4, 6, 'أخطّط طريقي', 'I plan my way',
      act: 'أجد الطريق في المتاهة', actEn: 'Find the way through the maze',
      say: 'ساعد الفأر ليصل إلى الجبن.', sayEn: 'Help the mouse reach the cheese.',
      done: 'إنهاء اللعبة', doneEn: 'Finish the game', games: []),
  // --- Feelings and creativity
  _u('emo_feelings', Strand.feelings, 3, 6, 'أسمّي شعوري وأتصرف بلطف', 'I name my feeling and act kindly',
      act: 'مواقف قصيرة عن المشاعر', actEn: 'Short feelings scenarios',
      say: 'كيف يشعر هذا الطفل؟', sayEn: 'How does this child feel?',
      done: 'إنهاء مستوى', doneEn: 'Finish a level', skills: ['feelings'], audio: ['reviewed Adam and Nour dialogue recordings'], apply: ['three_good', 'thank_card']),
  _u('art_free', Strand.creativity, 2, 6, 'أرسم وأعبّر', 'I draw and express myself',
      act: 'أرسم ثم أضغط «خلصت»', actEn: 'Draw then press “done”',
      say: 'ارسم ما تحب.', sayEn: 'Draw what you like.',
      done: 'ضغط «خلصت»', doneEn: 'Pressing “done”', apply: ['play_dough']),
  // --- Stories
  _u('story_listen', Strand.stories, 1, 6, 'أستمع إلى قصة قصيرة', 'I listen to a short story',
      act: 'أستمع إلى قصة', actEn: 'Listen to a story',
      say: 'هيا نسمع قصة.', sayEn: "Let's hear a story.",
      done: 'إنهاء القصة (استماع فقط، لا يُعدّ إتقانًا)', doneEn: 'Finishing a story (listening only, never counted as mastery)',
      skills: ['story'], audio: ['recorded narration (device voice today)'], art: ['only 2 stories fit ages 1–2']),
];
