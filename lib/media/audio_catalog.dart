// The catalogue of everything Rehlaty's characters say and every short sound or music track the app can use.
//
// It lists WHAT is needed and WHERE a recording must be saved. It does not contain any recording. A line is heard as a
// recording only when its file exists in the bundle AND its id is listed in `assets/audio/voices/approved.json` after a
// native speaker and a listener approved it; until then the engine uses the phone's own text-to-speech (a demo voice)
// and the parent screens say so.

enum CharacterVoice { adam, nour, companion }

enum LineCategory { welcome, encouragement, instruction, congratulation, support, explanation, story, reaction }

/// One approved, predefined line. Children only ever hear lines from this catalogue (no free-form AI conversation).
/// [ar] is simple Egyptian colloquial for conversation; teaching terms stay clear. Nothing shames, pressures or threatens.
class DialogueLine {
  final String id;
  final CharacterVoice voice;
  final String ar;
  final String en;
  final String context;
  final LineCategory category;
  final String feature; // which part of the app uses it
  const DialogueLine(this.id, this.voice, this.ar, this.en, this.context, {this.category = LineCategory.reaction, this.feature = 'general'});
  String text(String lang) => lang == 'ar' ? ar : en;

  /// Where the recording for [lang] must be saved: one folder per character and language, one file per line id.
  String recordingPath(String lang) => 'assets/audio/voices/${voice.name}/$lang/$id.ogg';
}

const kDialogue = <DialogueLine>[
  // welcome
  DialogueLine('hello', CharacterVoice.companion, 'أهلاً يا بطل! مستعد نكتشف حاجة جديدة؟', 'Hello, hero! Ready to discover something new?', 'greeting on the home screen', category: LineCategory.welcome, feature: 'home'),
  DialogueLine('welcome_back', CharacterVoice.adam, 'يا أهلاً! وحشتنا!', 'Hi! Good to see you!', 'opening the app again', category: LineCategory.welcome, feature: 'home'),
  DialogueLine('new_place', CharacterVoice.companion, 'تعالى نكتشف المكان الجديد!', "Let's explore the new place!", 'a newly opened place', category: LineCategory.welcome, feature: 'world'),
  DialogueLine('lets_play', CharacterVoice.nour, 'يلا نلعب سوا!', "Let's play together!", 'opening the games', category: LineCategory.welcome, feature: 'games'),
  // encouragement
  DialogueLine('try_again', CharacterVoice.nour, 'مش مشكلة، نجرب مرة تانية سوا!', "No problem, let's try again together!", 'after a wrong try', category: LineCategory.encouragement),
  DialogueLine('great_try', CharacterVoice.nour, 'محاولة حلوة! كمّل!', 'Nice try! Keep going!', 'encouragement', category: LineCategory.encouragement),
  DialogueLine('look_again', CharacterVoice.adam, 'بص تاني كويس، وإنت هتلاقيها!', 'Look again carefully, you will find it!', 'search games', category: LineCategory.encouragement, feature: 'games'),
  DialogueLine('almost', CharacterVoice.adam, 'قربت! كمّل!', 'Almost there! Keep going!', 'close to the answer', category: LineCategory.encouragement),
  DialogueLine('take_your_time', CharacterVoice.nour, 'خد وقتك، مفيش استعجال.', 'Take your time, there is no rush.', 'a child who is thinking', category: LineCategory.encouragement),
  DialogueLine('you_can', CharacterVoice.adam, 'أنت تقدر!', 'You can do it!', 'before a harder step', category: LineCategory.encouragement),
  // instructions, one per game
  DialogueLine('how_snakes', CharacterVoice.adam, 'ارمي النرد وتحرك لقدام. السلالم بتطلّعك!', 'Roll the dice and move forward. Ladders take you up!', 'ladders and slides', category: LineCategory.instruction, feature: 'snakes_ladders'),
  DialogueLine('how_jigsaw', CharacterVoice.nour, 'اسحب كل قطعة لمكانها.', 'Drag each piece to its place.', 'puzzle picture', category: LineCategory.instruction, feature: 'jigsaw'),
  DialogueLine('how_maze', CharacterVoice.adam, 'ساعد الفأر يوصل للجبنة.', 'Help the mouse reach the cheese.', 'mouse and cheese', category: LineCategory.instruction, feature: 'maze'),
  DialogueLine('how_treasure', CharacterVoice.nour, 'اقرا الأدلة ودوّر على الكنز.', 'Read the clues and look for the treasure.', 'island treasure', category: LineCategory.instruction, feature: 'treasure_hunt'),
  DialogueLine('how_dots', CharacterVoice.adam, 'وصّل النقط بالترتيب: واحد، اتنين، تلاتة.', 'Connect the dots in order: one, two, three.', 'connect the dots', category: LineCategory.instruction, feature: 'connect_dots'),
  DialogueLine('how_habitats', CharacterVoice.nour, 'كل حيوان بيعيش فين؟ وديه بيته.', 'Where does each animal live? Take it home.', 'animal habitats', category: LineCategory.instruction, feature: 'animal_habitats'),
  // congratulations
  DialogueLine('well_done', CharacterVoice.adam, 'برافو عليك! خلصت النشاط بنجاح!', 'Well done! You finished the activity!', 'after finishing an activity or game', category: LineCategory.congratulation),
  DialogueLine('new_star', CharacterVoice.companion, 'نجمة جديدة ليك!', 'A new star for you!', 'a star was earned', category: LineCategory.congratulation, feature: 'rewards'),
  DialogueLine('parts_right', CharacterVoice.adam, 'ممتاز! أنت جمعت الأجزاء صح!', 'Excellent! You put the pieces together!', 'jigsaw and building', category: LineCategory.congratulation, feature: 'jigsaw'),
  DialogueLine('found_it', CharacterVoice.nour, 'لقيتها! شاطر!', 'You found it! Great job!', 'treasure and search', category: LineCategory.congratulation, feature: 'treasure_hunt'),
  DialogueLine('new_sticker', CharacterVoice.companion, 'ملصق جديد في ألبومك!', 'A new sticker for your album!', 'a sticker was unlocked', category: LineCategory.congratulation, feature: 'rewards'),
  // emotional support
  DialogueLine('its_ok', CharacterVoice.nour, 'ولا يهمك، كلنا بنتعلم.', "It's okay, we are all learning.", 'a child who seems upset', category: LineCategory.support),
  DialogueLine('feel_better', CharacterVoice.companion, 'تعالى ناخد نفس عميق سوا.', "Let's take a deep breath together.", 'a calm moment', category: LineCategory.support),
  DialogueLine('tell_grownup', CharacterVoice.nour, 'لو زعلان، احكي لماما أو بابا.', 'If you feel sad, tell mum or dad.', 'a sad feeling was chosen', category: LineCategory.support, feature: 'feelings'),
  // explanations
  DialogueLine('look_red', CharacterVoice.adam, 'شايف اللون الأحمر؟ تعالى ندور على حاجة حمرا!', 'Can you see the colour red? Let us look for something red!', 'colours', category: LineCategory.explanation, feature: 'colors'),
  DialogueLine('lion_says', CharacterVoice.nour, 'تفتكر الأسد بيقول إيه؟', 'What do you think the lion says?', 'animal sounds', category: LineCategory.explanation, feature: 'animals'),
  DialogueLine('count_with_me', CharacterVoice.adam, 'عدّ معايا: واحد، اتنين، تلاتة.', 'Count with me: one, two, three.', 'counting', category: LineCategory.explanation, feature: 'numbers'),
  DialogueLine('animals_homes', CharacterVoice.nour, 'كل حيوان له بيت: السمكة في البحر والبقرة في المزرعة.', 'Every animal has a home: the fish in the sea, the cow on the farm.', 'habitats', category: LineCategory.explanation, feature: 'animal_habitats'),
  DialogueLine('shapes_around', CharacterVoice.adam, 'الأشكال حوالينا في كل مكان!', 'Shapes are all around us!', 'shapes', category: LineCategory.explanation, feature: 'shapes'),
  // story narration
  DialogueLine('story_start', CharacterVoice.nour, 'كان يا ما كان... تعالوا نسمع الحكاية.', 'Once upon a time... come and listen to the story.', 'opening a story', category: LineCategory.story, feature: 'stories'),
  DialogueLine('story_end', CharacterVoice.nour, 'وعاشوا في سعادة. انتهت الحكاية!', 'And they were happy. The end!', 'closing a story', category: LineCategory.story, feature: 'stories'),
  DialogueLine('good_night', CharacterVoice.companion, 'تصبح على خير، أحلام سعيدة!', 'Good night, sweet dreams!', 'bedtime stories', category: LineCategory.story, feature: 'stories'),
  // reactions
  DialogueLine('your_turn', CharacterVoice.nour, 'دورك أنت!', "It's your turn!", 'turn taking', category: LineCategory.reaction, feature: 'snakes_ladders'),
  DialogueLine('ladder_up', CharacterVoice.adam, 'يا سلام! طلعت السلم!', 'Wow! You climbed the ladder!', 'a ladder', category: LineCategory.reaction, feature: 'snakes_ladders'),
  DialogueLine('slide_down', CharacterVoice.nour, 'انزلقت شوية. مفيش مشكلة!', 'You slid down a little. No problem!', 'a slide', category: LineCategory.reaction, feature: 'snakes_ladders'),
  DialogueLine('time_to_rest', CharacterVoice.companion, 'يلا نرتاح شوية. شوفتك قريب!', "Let's rest a little. See you soon!", 'end of the session', category: LineCategory.reaction),
  // companion (Adam and Nour talking with the child; chosen by event, age band and recent results)
  DialogueLine('cp_hi_young_adam', CharacterVoice.adam, 'أهلاً! أنا هنا معاك.', "Hello! I am here with you.", 'greeting, ages 1-2', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_hi_young_nour', CharacterVoice.nour, 'أهلاً! أنا جنبك.', "Hello! I am next to you.", 'greeting, ages 1-2', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_hi_mid_adam', CharacterVoice.adam, 'أهلاً بيك! نلعب إيه النهاردة؟', "Hi there! What shall we play today?", 'greeting, ages 3-4', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_hi_mid_nour', CharacterVoice.nour, 'أهلاً! تعالى نختار لعبة حلوة.', "Hi! Come, let us pick a nice game.", 'greeting, ages 3-4', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_hi_old_adam', CharacterVoice.adam, 'أهلاً! عندنا خطة حلوة النهاردة. نبدأ؟', "Hello! We have a nice plan today. Shall we start?", 'greeting, ages 5-6', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_hi_old_nour', CharacterVoice.nour, 'أهلاً! جاهز لمغامرة جديدة؟', "Hello! Ready for a new adventure?", 'greeting, ages 5-6', category: LineCategory.welcome, feature: 'companion'),
  DialogueLine('cp_done_young_adam', CharacterVoice.adam, 'برافو! حلو أوي!', "Hooray! So nice!", 'finished, ages 1-2', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_done_young_nour', CharacterVoice.nour, 'برافو! جميل أوي!', "Hooray! So lovely!", 'finished, ages 1-2', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_done_mid_adam', CharacterVoice.adam, 'برافو! خلصتها بنفسك!', "Well done! You finished it yourself!", 'finished, ages 3-4', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_done_mid_nour', CharacterVoice.nour, 'برافو! عملتها لوحدك!', "Well done! You did it on your own!", 'finished, ages 3-4', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_done_old_adam', CharacterVoice.adam, 'شغل ممتاز! كملت للآخر!', "Great work! You kept going to the end!", 'finished, ages 5-6', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_done_old_nour', CharacterVoice.nour, 'شغل رائع! استمريت للآخر!', "Wonderful work! You stayed with it to the end!", 'finished, ages 5-6', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_place_adam', CharacterVoice.adam, 'في مكان جديد اتفتح في عالمك!', "A new place opened in your world!", 'a world place opened', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_place_nour', CharacterVoice.nour, 'اتفتح مكان جديد في عالمك!', "A new place has opened in your world!", 'a world place opened', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_story_adam', CharacterVoice.adam, 'حكاية حلوة! عجبتك؟', "What a lovely story! Did you like it?", 'a story was finished', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_story_nour', CharacterVoice.nour, 'الحكاية خلصت. كانت جميلة!', "The story is over. It was lovely!", 'a story was finished', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_sticker_adam', CharacterVoice.adam, 'ملصق جديد! شكله جميل!', "A new sticker! It looks lovely!", 'a sticker was unlocked', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_sticker_nour', CharacterVoice.nour, 'ملصق جديد في ألبومك!', "A new sticker in your album!", 'a sticker was unlocked', category: LineCategory.congratulation, feature: 'companion'),
  DialogueLine('cp_tap_young_adam', CharacterVoice.adam, 'أنا صاحبك! يلا نلعب.', "I am your friend! Let's play.", 'the child taps, ages 1-3', category: LineCategory.reaction, feature: 'companion'),
  DialogueLine('cp_tap_young_nour', CharacterVoice.nour, 'أنا هنا! يلا نلعب سوا.', "I am here! Let's play together.", 'the child taps, ages 1-3', category: LineCategory.reaction, feature: 'companion'),
  DialogueLine('cp_tap_old_adam', CharacterVoice.adam, 'تحب تجرب حاجة جديدة؟', "Would you like to try something new?", 'the child taps, ages 4-6', category: LineCategory.reaction, feature: 'companion'),
  DialogueLine('cp_tap_old_nour', CharacterVoice.nour, 'إيه رأيك نلعب لعبة؟', "How about we play a game?", 'the child taps, ages 4-6', category: LineCategory.reaction, feature: 'companion'),
  DialogueLine('cp_support_adam', CharacterVoice.adam, 'ولا يهمك، نجرب سوا بالراحة.', "No worries, we will try together, slowly.", 'a child who needs support', category: LineCategory.support, feature: 'companion'),
  DialogueLine('cp_support_nour', CharacterVoice.nour, 'خد وقتك، أنا معاك.', "Take your time, I am with you.", 'a child who needs support', category: LineCategory.support, feature: 'companion'),
  DialogueLine('cp_challenge_adam', CharacterVoice.adam, 'أنت شاطر! نجرب مرحلة أصعب شوية؟', "You are doing great! Try a slightly harder one?", 'strong recent results, ages 5-6', category: LineCategory.encouragement, feature: 'companion'),
  DialogueLine('cp_challenge_nour', CharacterVoice.nour, 'بقيت ماهر! تحب نجرب تحدي صغير؟', "You are getting skilled! Want a small challenge?", 'strong recent results, ages 5-6', category: LineCategory.encouragement, feature: 'companion'),
  DialogueLine('cp_rest_adam', CharacterVoice.adam, 'ممكن ترتاح دلوقتي. أنا هنا بعدين.', "You can rest now. I will be here later.", 'quiet moment or time up', category: LineCategory.support, feature: 'companion'),
  DialogueLine('cp_rest_nour', CharacterVoice.nour, 'وقت الراحة. أشوفك بعدين!', "Time to rest. See you later!", 'quiet moment or time up', category: LineCategory.support, feature: 'companion'),
];

/// Words a line must never contain (a guard in the tests, so nobody adds shaming or pressuring text by accident).
const kForbiddenInDialogue = ['غلط', 'فشل', 'خسرت', 'wrong', 'fail', 'lose', 'lost', 'stupid', 'hurry', 'bad'];

enum CueKind { game, ui }

/// A short sound effect. [path] is where the file must be saved; none exist yet.
class SoundCue {
  final String id;
  final CueKind kind;
  final String description;
  const SoundCue(this.id, this.kind, this.description);
  String get path => 'assets/audio/sfx/$id.ogg';
}

const kSoundCues = <SoundCue>[
  SoundCue('roll', CueKind.game, 'dice rolling'),
  SoundCue('move', CueKind.game, 'a game piece moving'),
  SoundCue('ladder', CueKind.game, 'climbing a ladder'),
  SoundCue('slide', CueKind.game, 'sliding down'),
  SoundCue('place', CueKind.game, 'a puzzle piece or animal placed correctly'),
  SoundCue('correct', CueKind.game, 'a correct answer'),
  SoundCue('gentle', CueKind.game, 'a soft "try again" sound, never harsh'),
  SoundCue('found', CueKind.game, 'finding the treasure, finishing a maze or a shape'),
  SoundCue('dot', CueKind.game, 'connecting a dot'),
  SoundCue('win', CueKind.game, 'finishing a game'),
  SoundCue('star', CueKind.game, 'a star earned'),
  SoundCue('achievement', CueKind.game, 'an achievement or sticker'),
  SoundCue('tap', CueKind.ui, 'a button tap'),
  SoundCue('navigate', CueKind.ui, 'moving between screens'),
  SoundCue('open', CueKind.ui, 'opening a screen or dialog'),
  SoundCue('close', CueKind.ui, 'closing a screen or dialog'),
  SoundCue('unlock', CueKind.ui, 'a destination unlocked'),
  SoundCue('reward', CueKind.ui, 'receiving a reward'),
  SoundCue('notify', CueKind.ui, 'a notification arrived'),
];

enum MusicArea { home, learning, games, stories, studio, rewards }

/// A background music track. [path] is where the file must be saved. Only the story lullaby music box exists today
/// (assets/audio/musicbox.mp3, original and synthesized); the six areas below have no track yet.
class MusicTrack {
  final MusicArea area;
  final String description;
  const MusicTrack(this.area, this.description);
  String get path => 'assets/audio/music/${area.name}.ogg';
}

const kMusicTracks = <MusicTrack>[
  MusicTrack(MusicArea.home, 'calm, magical, welcoming loop for the home world'),
  MusicTrack(MusicArea.learning, 'light, focused loop that stays out of the way of speech'),
  MusicTrack(MusicArea.games, 'playful, a little brighter, never rushed'),
  MusicTrack(MusicArea.stories, 'soft and slow; the existing music box lullaby may be used'),
  MusicTrack(MusicArea.studio, 'relaxed and creative'),
  MusicTrack(MusicArea.rewards, 'short, joyful celebration'),
];

/// How a recording gets from idea to the app (the pipeline), in order. The status of each line is tracked in
/// docs/VOICE_ASSET_STATUS.md (generated by a test from the real files).
const kVoicePipelineSteps = [
  '1. Script: the line exists in this catalogue (text in Arabic and English, speaker, context).',
  '2. Record: a human voice actor (a young-sounding boy for Adam, a young-sounding girl for Nour) records each line in each language; Arabic in simple Egyptian colloquial for conversation.',
  '3. Check: a native Arabic speaker and an English speaker listen for pronunciation, warmth and clarity; a parent-aged listener checks it is not scary or pushy.',
  '4. Save: put the file at the path from DialogueLine.recordingPath (assets/audio/voices/<character>/<lang>/<id>.ogg), mono, 44.1 kHz or 24 kHz, normalised, short silence trimmed.',
  '5. Approve: add "<character>/<lang>/<id>" to assets/audio/voices/approved.json only after steps 3 and 4. A file that is not listed there is never played.',
  '6. Verify: run the test that regenerates docs/VOICE_ASSET_STATUS.md, then listen on a real phone.',
  'Licensed text-to-speech may fill gaps only if its licence allows bundling in an app for children and a person approves each result like a human recording. Credentials stay on a build machine, never in the app.',
];
