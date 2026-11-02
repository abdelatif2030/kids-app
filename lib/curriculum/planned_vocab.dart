import '../l10n/strings.dart';

/// Words the early-years curriculum needs but the vocabulary library (lib/library/vocab.dart) does not have yet:
/// colours, shapes, numbers, family, clothes and positions. They are NOT shown to children: a word joins `kVocab`
/// only with real artwork and a native reviewer's check. Every entry is a machine-written draft.
class PlannedWord {
  final String id;
  final String category;
  final String ar;
  final String en;
  final int minAge;

  /// Short note for the reviewer (dialect, harakat, gender); never shown to a child.
  final String note;
  const PlannedWord(this.id, this.category, this.ar, this.en, this.minAge, [this.note = '']);
}

/// Categories of the planned words, in the order the artwork is wanted (animals and food are already in kVocab).
const kPlannedCategories = <String, String>{
  'colors': 'الألوان',
  'shapes': 'الأشكال',
  'numbers': 'الأرقام',
  'family': 'أفراد العائلة',
  'clothes': 'الملابس',
  'positions': 'الأماكن والاتجاهات',
};

String plannedCategoryTitle(String id) => loc(kPlannedCategories[id] ?? id);

const kPlannedVocab = <PlannedWord>[
  // colours (masculine form; the feminine agrees with the noun, see shape_games.dart)
  PlannedWord('color_red', 'colors', 'أحمر', 'red', 2),
  PlannedWord('color_blue', 'colors', 'أزرق', 'blue', 2),
  PlannedWord('color_yellow', 'colors', 'أصفر', 'yellow', 2),
  PlannedWord('color_green', 'colors', 'أخضر', 'green', 2),
  PlannedWord('color_orange', 'colors', 'برتقالي', 'orange', 3),
  PlannedWord('color_purple', 'colors', 'بنفسجي', 'purple', 3),
  PlannedWord('color_pink', 'colors', 'وردي', 'pink', 3),
  PlannedWord('color_brown', 'colors', 'بني', 'brown', 4),
  PlannedWord('color_black', 'colors', 'أسود', 'black', 4),
  PlannedWord('color_white', 'colors', 'أبيض', 'white', 4),
  // shapes (drawn in code: lib/games/shape_games.dart)
  PlannedWord('shape_circle', 'shapes', 'دائرة', 'circle', 2),
  PlannedWord('shape_square', 'shapes', 'مربع', 'square', 2),
  PlannedWord('shape_triangle', 'shapes', 'مثلث', 'triangle', 2),
  PlannedWord('shape_rectangle', 'shapes', 'مستطيل', 'rectangle', 4),
  PlannedWord('shape_star', 'shapes', 'نجمة', 'star', 5),
  PlannedWord('shape_heart', 'shapes', 'قلب', 'heart', 5),
  PlannedWord('shape_diamond', 'shapes', 'معيّن', 'diamond', 5, 'معيّن with shadda; some books say «ماسة» for children'),
  // numbers 1-10 (masculine counting forms; the reviewer decides whether to teach the feminine forms too)
  PlannedWord('num_1', 'numbers', 'واحد', 'one', 2),
  PlannedWord('num_2', 'numbers', 'اثنان', 'two', 2, 'colloquial «اتنين»'),
  PlannedWord('num_3', 'numbers', 'ثلاثة', 'three', 2),
  PlannedWord('num_4', 'numbers', 'أربعة', 'four', 3),
  PlannedWord('num_5', 'numbers', 'خمسة', 'five', 3),
  PlannedWord('num_6', 'numbers', 'ستة', 'six', 4),
  PlannedWord('num_7', 'numbers', 'سبعة', 'seven', 4),
  PlannedWord('num_8', 'numbers', 'ثمانية', 'eight', 5),
  PlannedWord('num_9', 'numbers', 'تسعة', 'nine', 5),
  PlannedWord('num_10', 'numbers', 'عشرة', 'ten', 5),
  // family
  PlannedWord('fam_mother', 'family', 'ماما', 'mum', 1, 'colloquial; standard «أمّ»'),
  PlannedWord('fam_father', 'family', 'بابا', 'dad', 1, 'colloquial; standard «أب»'),
  PlannedWord('fam_baby', 'family', 'بيبي', 'baby', 1, 'standard «رضيع»'),
  PlannedWord('fam_brother', 'family', 'أخ', 'brother', 2),
  PlannedWord('fam_sister', 'family', 'أخت', 'sister', 2),
  PlannedWord('fam_grandfather', 'family', 'جدّو', 'grandpa', 2, 'colloquial; standard «جدّ»'),
  PlannedWord('fam_grandmother', 'family', 'تيتة', 'grandma', 2, 'Egyptian colloquial; standard «جدّة»'),
  PlannedWord('fam_uncle', 'family', 'عمّو', 'uncle', 3, 'عمّ (father\'s brother) and خال (mother\'s brother) are different words'),
  PlannedWord('fam_aunt', 'family', 'عمّتو', 'aunt', 3, 'reviewer: aunt words by side of the family'),
  // clothes (shoes and hat are already in the library)
  PlannedWord('clo_shirt', 'clothes', 'قميص', 'shirt', 3),
  PlannedWord('clo_trousers', 'clothes', 'بنطلون', 'trousers', 3),
  PlannedWord('clo_dress', 'clothes', 'فستان', 'dress', 3),
  PlannedWord('clo_socks', 'clothes', 'جورب', 'socks', 3),
  PlannedWord('clo_coat', 'clothes', 'معطف', 'coat', 4),
  PlannedWord('clo_pyjamas', 'clothes', 'بيجامة', 'pyjamas', 3),
  PlannedWord('clo_bag', 'clothes', 'حقيبة', 'bag', 3),
  PlannedWord('clo_scarf', 'clothes', 'وشاح', 'scarf', 4),
  // positions and spatial words (the first four are already drawn: PositionScene)
  PlannedWord('pos_above', 'positions', 'فوق', 'on top', 3),
  PlannedWord('pos_below', 'positions', 'تحت', 'under', 3),
  PlannedWord('pos_inside', 'positions', 'داخل', 'inside', 3),
  PlannedWord('pos_beside', 'positions', 'بجانب', 'next to', 4),
  PlannedWord('pos_outside', 'positions', 'خارج', 'outside', 4),
  PlannedWord('pos_front', 'positions', 'أمام', 'in front of', 5),
  PlannedWord('pos_behind', 'positions', 'خلف', 'behind', 5),
];
