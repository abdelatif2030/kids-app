import 'l10n/strings.dart';
/// A skill the games can measure, with the Arabic text a parent reads.
class Skill {
  final String id;
  final String label;

  /// The game that practises it, as named in the games list.
  final String game;

  /// The subject (curriculum.dart) whose lessons help with it.
  final String subject;
  const Skill(this.id, this.label, this.game, this.subject);
}

const kSkills = [
  Skill('letters_ar', 'الحروف العربية', 'حروف وكلمات', 'arabic'),
  Skill('letters_en', 'الحروف الإنجليزية', 'حروف وكلمات', 'english'),
  Skill('letters_de', 'الحروف الألمانية', 'حروف وكلمات', 'german'),
  Skill('letters_fr', 'الحروف الفرنسية', 'حروف وكلمات', 'french'),
  Skill('colors', 'الألوان', 'لعبة الألوان', 'discover'),
  Skill('counting', 'العدّ', 'رياضيات', 'math'),
  Skill('addition', 'الجمع', 'رياضيات', 'math'),
  Skill('subtraction', 'الطرح', 'رياضيات', 'math'),
  Skill('multiplication', 'الضرب', 'رياضيات', 'math'),
  Skill('shapes', 'الأشكال', 'جزيرة الألوان', 'discover'),
  Skill('english_vocab', 'الكلمات الإنجليزية', 'مدينة الإنجليزية', 'english'),
  Skill('memory', 'الذاكرة', 'نادي الذكاء', 'discover'),
  Skill('sequence', 'ترتيب الخطوات', 'نادي الذكاء', 'discover'),
  Skill('story', 'فهم القصة', 'قطار القصص', 'stories'),
  Skill('feelings', 'فهم المشاعر', 'مدرسة المشاعر', 'discover'),
  Skill('vocab', 'المفردات', 'مكتبة الكلمات', 'discover'),
  Skill('listening', 'الاستماع والتمييز', 'مكتبة الكلمات', 'discover'),
  Skill('phonics', 'أصوات الحروف', 'تعلّم الحروف', 'arabic'),
  Skill('letter_position', 'موقع الحرف في الكلمة', 'تعلّم الحروف', 'arabic'),
  Skill('syllables', 'المقاطع والحركات', 'تعلّم الحروف', 'arabic'),
  Skill('word_building', 'تكوين الكلمات', 'تعلّم الحروف', 'arabic'),
  Skill('reading', 'القراءة والفهم', 'تعلّم الحروف', 'arabic'),
];

Skill? skillById(String id) {
  for (final s in kSkills) {
    if (s.id == id) return s;
  }
  return null;
}
