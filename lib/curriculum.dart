import 'package:flutter/material.dart';
import 'l10n/strings.dart';

/// A school subject shown to the child.
class Subject {
  final String id;
  final String _label;
  String get label => loc(_label);
  final IconData icon;
  final Color color;
  const Subject(this.id, this._label, this.icon, this.color);
}

/// Subject ids match the `subject` field in assets/videos.json.
/// "drawing" has no videos: it opens the drawing screen.
const kSubjects = [
  Subject('arabic', 'عربي', Icons.menu_book_rounded, Color(0xFFE53935)),
  Subject('english', 'إنجليزي', Icons.abc_rounded, Color(0xFF1E88E5)),
  Subject('math', 'رياضيات', Icons.calculate_rounded, Color(0xFF43A047)),
  Subject('science', 'علوم', Icons.science_rounded, Color(0xFF00ACC1)),
  Subject('deen', 'دين', Icons.mosque_rounded, Color(0xFF6D4C41)),
  Subject('quran', 'قرآن', Icons.auto_stories_rounded, Color(0xFF00897B)),
  Subject('stories', 'قصص', Icons.local_library_rounded, Color(0xFF7E57C2)),
  Subject('drawing', 'رسم', Icons.brush_rounded, Color(0xFF8E24AA)),
  Subject('german', 'ألماني', Icons.translate_rounded, Color(0xFFFB8C00)),
  Subject('french', 'فرنساوي', Icons.translate_rounded, Color(0xFFD81B60)),
  Subject('discover', 'اكتشف', Icons.explore_rounded, Color(0xFF5C6BC0)),
  Subject('fun', 'أناشيد', Icons.music_note_rounded, Color(0xFFEF6C00)),
  Subject('calm', 'هدوء ونوم', Icons.nightlight_round, Color(0xFF3949AB)),
];

Subject? subjectById(String id) {
  for (final s in kSubjects) {
    if (s.id == id) return s;
  }
  return null;
}
