import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'design/brand.dart';
import 'design/focusable_tap.dart';
import 'design/tokens.dart';
import 'l10n/strings.dart';
import 'teachers_models.dart';
import 'teachers_widgets.dart';

/// The welcome banner of the teacher directory. Nothing in it is data: it is only the greeting and Adam.
class TeachersHero extends StatelessWidget {
  const TeachersHero({super.key});

  @override
  Widget build(BuildContext context) => CharacterBanner(
    key: const ValueKey('teachers_hero'),
    title: tr2('اكتشف مدرسين مميزين!', 'Discover great teachers!'),
    subtitle: tr2(
      'تصفّح الملفات واقرأ أعمالهم، ثم اطلب حصة لطفلك وأنت معه.',
      "Browse profiles and work samples, then request a lesson for your child, with you beside them.",
    ),
    character: BrandCharacter.adam,
  );
}

/// One card per teaching subject that at least one teacher really teaches, with the real number of teachers.
/// Tapping a card filters the directory by that subject; tapping it again clears the filter.
class SubjectCategories extends StatelessWidget {
  final List<TeacherProfile> teachers;
  final String? selected;
  final ValueChanged<String?> onSelect;
  const SubjectCategories({
    super.key,
    required this.teachers,
    required this.selected,
    required this.onSelect,
  });

  /// Subject id -> number of teachers, only subjects with teachers, most teachers first.
  static List<(Subject, int)> counts(List<TeacherProfile> teachers) {
    final out = <(Subject, int)>[];
    for (final s in kSubjects) {
      final n = teachers.where((t) => t.subjects.contains(s.id)).length;
      if (n > 0) out.add((s, n));
    }
    out.sort((a, b) => b.$2.compareTo(a.$2));
    return out;
  }

  @override
  Widget build(BuildContext context) {
    final list = counts(teachers);
    if (list.isEmpty) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        BrandSectionTitle(tr2('المواد', 'Subjects')),
        SizedBox(
          height: 108,
          child: ListView.separated(
            key: const ValueKey('subject_categories'),
            scrollDirection: Axis.horizontal,
            itemCount: list.length,
            separatorBuilder: (_, _) => const SizedBox(width: 10),
            itemBuilder: (context, i) {
              final (s, n) = list[i];
              final on = selected == s.id;
              return FocusableTap(
                key: ValueKey('category_${s.id}'),
                onTap: () => onSelect(on ? null : s.id),
                radius: 22,
                semanticLabel:
                    '${s.label}, ${tr2('$n مدرس', '$n teachers')}${on ? ', ${tr2('مختار', 'selected')}' : ''}',
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  width: 104,
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        s.color.withAlpha(on ? 255 : 200),
                        Color.lerp(s.color, Colors.black, 0.25)!,
                      ],
                    ),
                    borderRadius: BorderRadius.circular(22),
                    boxShadow: DS.softShadow,
                    border: Border.all(
                      color: on ? DS.highlight : Colors.transparent,
                      width: 3,
                    ),
                  ),
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(s.icon, color: Colors.white, size: 34),
                        const SizedBox(height: 6),
                        Text(
                          s.label,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 15,
                          ),
                        ),
                        Text(
                          tr2('$n مدرس', '$n teachers'),
                          style: const TextStyle(
                            color: Colors.white70,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}

/// «Verified teachers»: ONLY teachers the app owner marked identity- or qualification-verified. Nothing is "featured" by
/// guesswork; with no verified teacher the section is not shown at all.
class VerifiedTeachersStrip extends StatelessWidget {
  final List<TeacherProfile> teachers;
  final void Function(TeacherProfile) onOpen;
  const VerifiedTeachersStrip({
    super.key,
    required this.teachers,
    required this.onOpen,
  });

  static List<TeacherProfile> pick(List<TeacherProfile> all) => [
    for (final t in all)
      if (t.identityVerified || t.qualificationVerified) t,
  ];

  @override
  Widget build(BuildContext context) {
    final list = pick(teachers);
    if (list.isEmpty) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        BrandSectionTitle(tr2('مدرسون موثّقون', 'Verified teachers')),
        SizedBox(
          height: 150,
          child: ListView.separated(
            key: const ValueKey('verified_teachers'),
            scrollDirection: Axis.horizontal,
            itemCount: list.length,
            separatorBuilder: (_, _) => const SizedBox(width: 12),
            itemBuilder: (context, i) {
              final t = list[i];
              return FocusableTap(
                key: ValueKey('verified_${t.uid}'),
                onTap: () => onOpen(t),
                radius: 22,
                semanticLabel: t.name,
                child: Container(
                  width: 150,
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(22),
                    boxShadow: DS.softShadow,
                    border: Border.all(color: DS.border),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      TeacherAvatar(photo: t.photoBytes, radius: 32),
                      const SizedBox(height: 8),
                      Text(
                        t.name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontWeight: FontWeight.w900),
                      ),
                      if (t.headline.isNotEmpty)
                        Text(
                          t.headline,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: DS.caption,
                        ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}
