/// One approved vocabulary item. Lessons, the library, games and stories all
/// refer to these by [id], so a word is written and reviewed once.
class Vocab {
  final String id; // stable English slug
  final String ar;
  final String? en;
  final String emoji; // illustration (an emoji until real artwork is added)
  final String category;
  final int minAge;
  final int maxAge;
  const Vocab(this.id, this.ar, this.emoji, this.category, this.minAge, this.maxAge, {this.en});
}

class VocabCategory {
  final String id;
  final String title;
  final String emoji;
  const VocabCategory(this.id, this.title, this.emoji);
}

const kVocabCategories = [
  VocabCategory('animals', 'الحيوانات', '🐾'),
  VocabCategory('food', 'فواكه وخضروات وطعام', '🍎'),
  VocabCategory('home', 'أشياء في البيت', '🏠'),
  VocabCategory('transport', 'المواصلات', '🚌'),
  VocabCategory('nature', 'الطبيعة والطقس', '🌦️'),
  VocabCategory('body', 'جسمي وحواسي', '👁️'),
  VocabCategory('jobs', 'المهن', '👩‍🏫'),
  VocabCategory('actions', 'أفعال يومية', '🏃'),
  VocabCategory('emotions', 'المشاعر والمواقف', '🙂'),
  VocabCategory('english', 'إنجليزي للمبتدئين', '🔤'),
];

/// The category id that lists every item that has an English name.
const kEnglishCategory = 'english';

const kVocab = <Vocab>[
  // animals
  Vocab('cat', 'قطة', '🐱', 'animals', 1, 12, en: 'cat'),
  Vocab('dog', 'كلب', '🐶', 'animals', 1, 12, en: 'dog'),
  Vocab('horse', 'حصان', '🐴', 'animals', 1, 12, en: 'horse'),
  Vocab('cow', 'بقرة', '🐄', 'animals', 1, 12, en: 'cow'),
  Vocab('sheep', 'خروف', '🐑', 'animals', 1, 12, en: 'sheep'),
  Vocab('chicken', 'دجاجة', '🐔', 'animals', 1, 12, en: 'chicken'),
  Vocab('duck', 'بطة', '🦆', 'animals', 1, 12, en: 'duck'),
  Vocab('lion', 'أسد', '🦁', 'animals', 1, 12, en: 'lion'),
  Vocab('elephant', 'فيل', '🐘', 'animals', 1, 12, en: 'elephant'),
  Vocab('giraffe', 'زرافة', '🦒', 'animals', 2, 12, en: 'giraffe'),
  Vocab('monkey', 'قرد', '🐒', 'animals', 2, 12, en: 'monkey'),
  Vocab('rabbit', 'أرنب', '🐰', 'animals', 1, 12, en: 'rabbit'),
  Vocab('fish', 'سمكة', '🐟', 'animals', 1, 12, en: 'fish'),
  Vocab('butterfly', 'فراشة', '🦋', 'animals', 2, 12, en: 'butterfly'),
  Vocab('bee', 'نحلة', '🐝', 'animals', 2, 12, en: 'bee'),
  Vocab('camel', 'جمل', '🐪', 'animals', 2, 12, en: 'camel'),
  Vocab('bear', 'دب', '🐻', 'animals', 2, 12, en: 'bear'),
  Vocab('fox', 'ثعلب', '🦊', 'animals', 3, 12, en: 'fox'),
  Vocab('frog', 'ضفدع', '🐸', 'animals', 2, 12, en: 'frog'),
  Vocab('turtle', 'سلحفاة', '🐢', 'animals', 3, 12, en: 'turtle'),
  Vocab('bird', 'طائر', '🐦', 'animals', 1, 12, en: 'bird'),
  // food
  Vocab('apple', 'تفاحة', '🍎', 'food', 1, 12, en: 'apple'),
  Vocab('banana', 'موزة', '🍌', 'food', 1, 12, en: 'banana'),
  Vocab('orange', 'برتقالة', '🍊', 'food', 1, 12, en: 'orange'),
  Vocab('grapes', 'عنب', '🍇', 'food', 2, 12, en: 'grapes'),
  Vocab('strawberry', 'فراولة', '🍓', 'food', 2, 12, en: 'strawberry'),
  Vocab('watermelon', 'بطيخ', '🍉', 'food', 2, 12, en: 'watermelon'),
  Vocab('lemon', 'ليمون', '🍋', 'food', 3, 12, en: 'lemon'),
  Vocab('carrot', 'جزرة', '🥕', 'food', 2, 12, en: 'carrot'),
  Vocab('tomato', 'طماطم', '🍅', 'food', 2, 12, en: 'tomato'),
  Vocab('potato', 'بطاطس', '🥔', 'food', 3, 12, en: 'potato'),
  Vocab('corn', 'ذرة', '🌽', 'food', 3, 12, en: 'corn'),
  Vocab('cucumber', 'خيار', '🥒', 'food', 3, 12, en: 'cucumber'),
  Vocab('bread', 'خبز', '🍞', 'food', 1, 12, en: 'bread'),
  Vocab('milk', 'حليب', '🥛', 'food', 1, 12, en: 'milk'),
  Vocab('egg', 'بيضة', '🥚', 'food', 1, 12, en: 'egg'),
  // home
  Vocab('chair', 'كرسي', '🪑', 'home', 1, 12, en: 'chair'),
  Vocab('bed', 'سرير', '🛏️', 'home', 1, 12, en: 'bed'),
  Vocab('door', 'باب', '🚪', 'home', 1, 12, en: 'door'),
  Vocab('clock', 'ساعة', '⏰', 'home', 2, 12, en: 'clock'),
  Vocab('book', 'كتاب', '📖', 'home', 1, 12, en: 'book'),
  Vocab('pencil', 'قلم', '✏️', 'home', 2, 12, en: 'pencil'),
  Vocab('lamp', 'مصباح', '💡', 'home', 2, 12, en: 'lamp'),
  Vocab('key', 'مفتاح', '🔑', 'home', 3, 12, en: 'key'),
  Vocab('umbrella', 'مظلة', '☂️', 'home', 2, 12, en: 'umbrella'),
  Vocab('shoe', 'حذاء', '👟', 'home', 1, 12, en: 'shoe'),
  Vocab('hat', 'قبعة', '🧢', 'home', 2, 12, en: 'hat'),
  Vocab('glasses', 'نظارة', '👓', 'home', 3, 12, en: 'glasses'),
  Vocab('ball', 'كرة', '⚽', 'home', 1, 12, en: 'ball'),
  Vocab('phone', 'هاتف', '📱', 'home', 3, 12, en: 'phone'),
  Vocab('tv', 'تلفاز', '📺', 'home', 3, 12, en: 'television'),
  Vocab('house', 'بيت', '🏠', 'home', 1, 12, en: 'house'),
  // transport
  Vocab('car', 'سيارة', '🚗', 'transport', 1, 12, en: 'car'),
  Vocab('bus', 'حافلة', '🚌', 'transport', 1, 12, en: 'bus'),
  Vocab('bike', 'دراجة', '🚲', 'transport', 2, 12, en: 'bicycle'),
  Vocab('train', 'قطار', '🚆', 'transport', 2, 12, en: 'train'),
  Vocab('plane', 'طائرة', '✈️', 'transport', 2, 12, en: 'airplane'),
  Vocab('ship', 'سفينة', '🚢', 'transport', 2, 12, en: 'ship'),
  Vocab('rocket', 'صاروخ', '🚀', 'transport', 3, 12, en: 'rocket'),
  Vocab('ambulance', 'سيارة إسعاف', '🚑', 'transport', 3, 12, en: 'ambulance'),
  Vocab('truck', 'شاحنة', '🚚', 'transport', 3, 12, en: 'truck'),
  // nature and weather
  Vocab('sun', 'شمس', '☀️', 'nature', 1, 12, en: 'sun'),
  Vocab('moon', 'قمر', '🌙', 'nature', 1, 12, en: 'moon'),
  Vocab('star', 'نجمة', '⭐', 'nature', 1, 12, en: 'star'),
  Vocab('cloud', 'سحابة', '☁️', 'nature', 2, 12, en: 'cloud'),
  Vocab('rain', 'مطر', '🌧️', 'nature', 2, 12, en: 'rain'),
  Vocab('snow', 'ثلج', '❄️', 'nature', 3, 12, en: 'snow'),
  Vocab('wind', 'رياح', '💨', 'nature', 3, 12, en: 'wind'),
  Vocab('rainbow', 'قوس قزح', '🌈', 'nature', 3, 12, en: 'rainbow'),
  Vocab('tree', 'شجرة', '🌳', 'nature', 1, 12, en: 'tree'),
  Vocab('flower', 'زهرة', '🌸', 'nature', 1, 12, en: 'flower'),
  Vocab('mountain', 'جبل', '⛰️', 'nature', 3, 12, en: 'mountain'),
  Vocab('sea', 'بحر', '🌊', 'nature', 2, 12, en: 'sea'),
  // body and senses
  Vocab('eye', 'عين', '👁️', 'body', 1, 12, en: 'eye'),
  Vocab('ear', 'أذن', '👂', 'body', 1, 12, en: 'ear'),
  Vocab('nose', 'أنف', '👃', 'body', 1, 12, en: 'nose'),
  Vocab('mouth', 'فم', '👄', 'body', 1, 12, en: 'mouth'),
  Vocab('hand', 'يد', '✋', 'body', 1, 12, en: 'hand'),
  Vocab('foot', 'قدم', '🦶', 'body', 1, 12, en: 'foot'),
  Vocab('tooth', 'سن', '🦷', 'body', 2, 12, en: 'tooth'),
  Vocab('heart', 'قلب', '❤️', 'body', 3, 12, en: 'heart'),
  // jobs
  Vocab('doctor', 'طبيب', '👨‍⚕️', 'jobs', 3, 12, en: 'doctor'),
  Vocab('teacher', 'معلمة', '👩‍🏫', 'jobs', 3, 12, en: 'teacher'),
  Vocab('police', 'شرطي', '👮', 'jobs', 3, 12, en: 'police officer'),
  Vocab('cook', 'طباخ', '👨‍🍳', 'jobs', 3, 12, en: 'cook'),
  Vocab('farmer', 'مزارع', '👨‍🌾', 'jobs', 3, 12, en: 'farmer'),
  Vocab('pilot', 'طيار', '👨‍✈️', 'jobs', 3, 12, en: 'pilot'),
  Vocab('firefighter', 'رجل إطفاء', '🧑‍🚒', 'jobs', 4, 12, en: 'firefighter'),
  Vocab('painter', 'رسام', '🧑‍🎨', 'jobs', 4, 12, en: 'painter'),
  Vocab('scientist', 'عالم', '🧑‍🔬', 'jobs', 5, 12, en: 'scientist'),
  // everyday actions
  Vocab('eat', 'يأكل', '🍽️', 'actions', 2, 12, en: 'eats'),
  Vocab('drink', 'يشرب', '🥤', 'actions', 2, 12, en: 'drinks'),
  Vocab('sleep', 'ينام', '😴', 'actions', 2, 12, en: 'sleeps'),
  Vocab('run', 'يجري', '🏃', 'actions', 2, 12, en: 'runs'),
  Vocab('write', 'يكتب', '✍️', 'actions', 3, 12, en: 'writes'),
  Vocab('draw', 'يرسم', '🎨', 'actions', 3, 12, en: 'draws'),
  Vocab('wash', 'يغسل يديه', '🧼', 'actions', 2, 12, en: 'washes hands'),
  Vocab('sing', 'يغني', '🎤', 'actions', 2, 12, en: 'sings'),
  Vocab('swim', 'يسبح', '🏊', 'actions', 3, 12, en: 'swims'),
  Vocab('jump', 'يقفز', '🤸', 'actions', 3, 12, en: 'jumps'),
  // emotions and social situations
  Vocab('happy', 'سعيد', '😊', 'emotions', 2, 12, en: 'happy'),
  Vocab('sad', 'حزين', '😢', 'emotions', 2, 12, en: 'sad'),
  Vocab('angry', 'غاضب', '😠', 'emotions', 3, 12, en: 'angry'),
  Vocab('scared', 'خائف', '😨', 'emotions', 3, 12, en: 'scared'),
  Vocab('surprised', 'متفاجئ', '😲', 'emotions', 3, 12, en: 'surprised'),
  Vocab('excited', 'متحمس', '🤩', 'emotions', 3, 12, en: 'excited'),
  Vocab('share', 'يشارك', '🤝', 'emotions', 3, 12, en: 'shares'),
];

Vocab? vocabById(String id) {
  for (final v in kVocab) {
    if (v.id == id) return v;
  }
  return null;
}

/// Strips Arabic diacritics so a search for «قطه» or «قِطة» both work.
String _plain(String s) => s
    .replaceAll(RegExp('[ً-ْٰ]'), '')
    .replaceAll(RegExp('[أإآٱ]'), 'ا')
    .replaceAll('ة', 'ه')
    .replaceAll('ى', 'ي')
    .toLowerCase();

/// Items filtered by category (null = all), age and a search text that may be
/// Arabic or English.
List<Vocab> searchVocab({String query = '', String? category, int? age}) {
  final q = _plain(query.trim());
  return [
    for (final v in kVocab)
      if ((category == null || (category == kEnglishCategory ? v.en != null : v.category == category)) &&
          (age == null || (age >= v.minAge && age <= v.maxAge)) &&
          (q.isEmpty ||
              _plain(v.ar).contains(q) ||
              (v.en?.toLowerCase().contains(q) ?? false) ||
              _plain(kVocabCategories.firstWhere((c) => c.id == v.category).title).contains(q)))
        v,
  ];
}
