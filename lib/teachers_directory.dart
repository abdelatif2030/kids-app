import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'curriculum.dart';
import 'teachers_models.dart';
import 'teachers_widgets.dart';

String _subjectLabel(String id) => subjectById(id)?.label ?? id;

/// Teachers a parent saved. Kept on this device only (shared_preferences).
class TeacherFavorites {
  static const _key = 'teacher_favorites';

  static Future<Set<String>> load() async {
    final raw = (await SharedPreferences.getInstance()).getString(_key);
    if (raw == null) return {};
    try {
      return {for (final e in jsonDecode(raw) as List<dynamic>) e as String};
    } catch (_) {
      return {};
    }
  }

  static Future<bool> toggle(String uid) async {
    final set = await load();
    final added = set.add(uid);
    if (!added) set.remove(uid);
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(set.toList()));
    return added;
  }
}

/// The two verification badges, shown separately. Nothing is shown for a
/// teacher the owner has not verified: there is no "unverified" label to make
/// it look like a status, and no badge is ever implied by a complete profile.
class VerificationBadges extends StatelessWidget {
  final TeacherProfile teacher;
  const VerificationBadges({super.key, required this.teacher});

  Widget _badge(BuildContext context, String label, String meaning) => Tooltip(
        message: meaning,
        child: ActionChip(
          avatar: const Icon(Icons.verified_rounded, size: 18, color: Color(0xFF2E7D32)),
          label: Text(label),
          visualDensity: VisualDensity.compact,
          onPressed: () => showDialog<void>(
            context: context,
            builder: (_) => AlertDialog(
              title: Text(label),
              content: Text(meaning),
              actions: [TextButton(onPressed: () => Navigator.pop(context), child: const Text('حسناً'))],
            ),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    if (!teacher.identityVerified && !teacher.qualificationVerified) return const SizedBox.shrink();
    return Wrap(
      spacing: 6,
      runSpacing: 4,
      children: [
        if (teacher.identityVerified) _badge(context, 'الهوية تم التحقق منها', kIdentityBadgeMeaning),
        if (teacher.qualificationVerified) _badge(context, 'المؤهل تم التحقق منه', kQualificationBadgeMeaning),
      ],
    );
  }
}

/// One line of facts a parent compares first: price, length, experience, ages.
List<String> teacherFacts(TeacherProfile t) => [
      if (t.priceEgp != null) '${t.priceEgp} جنيه للحصة' else if (t.priceNote.isNotEmpty) t.priceNote,
      if (t.lessonMinutes != null) '${t.lessonMinutes} دقيقة',
      if (t.experienceYears != null) 'خبرة ${t.experienceYears} سنوات (يذكرها المدرس)',
      if (t.ageMin != null && t.ageMax != null) 'من ${t.ageMin} إلى ${t.ageMax} سنوات',
    ];

/// The directory: search, filters, sort, favourites and comparison.
class TeacherDirectory extends StatefulWidget {
  final List<TeacherProfile> teachers;
  final void Function(TeacherProfile) onOpen;
  final void Function(List<TeacherProfile>) onCompare;
  const TeacherDirectory({super.key, required this.teachers, required this.onOpen, required this.onCompare});

  @override
  State<TeacherDirectory> createState() => _TeacherDirectoryState();
}

class _TeacherDirectoryState extends State<TeacherDirectory> {
  static const pageSize = 10;
  TeacherFilters _filters = TeacherFilters.none;
  TeacherSort _sort = TeacherSort.relevance;
  bool _onlyFavorites = false;
  Set<String> _favorites = {};
  final Set<String> _compare = {};
  int _shown = pageSize;
  final _search = TextEditingController();

  @override
  void initState() {
    super.initState();
    TeacherFavorites.load().then((f) {
      if (mounted) setState(() => _favorites = f);
    });
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  void _apply(TeacherFilters f) => setState(() {
        _filters = f;
        _shown = pageSize;
      });

  Future<void> _openFilters() async {
    final result = await showModalBottomSheet<(TeacherFilters, TeacherSort)>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _FilterSheet(filters: _filters, sort: _sort),
    );
    if (result != null) {
      setState(() => _sort = result.$2);
      _apply(result.$1.copyWith(query: _filters.query));
    }
  }

  @override
  Widget build(BuildContext context) {
    var results = searchTeachers(widget.teachers, _filters, _sort, _subjectLabel);
    if (_onlyFavorites) results = [for (final t in results) if (_favorites.contains(t.uid)) t];
    final page = results.take(_shown).toList();
    final active = _filters.activeCount - (_filters.query.trim().isNotEmpty ? 1 : 0);
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 4),
          child: Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _search,
                  decoration: const InputDecoration(
                    hintText: 'ابحث بالاسم أو المادة أو التخصص',
                    prefixIcon: Icon(Icons.search_rounded),
                    border: OutlineInputBorder(),
                    isDense: true,
                  ),
                  onChanged: (v) => _apply(_filters.copyWith(query: v)),
                ),
              ),
              const SizedBox(width: 8),
              Badge(
                isLabelVisible: active > 0,
                label: Text('$active'),
                child: IconButton.filledTonal(
                  tooltip: 'تصفية وترتيب',
                  onPressed: _openFilters,
                  icon: const Icon(Icons.tune_rounded),
                ),
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Row(
            children: [
              FilterChip(
                label: const Text('❤️ المفضلة فقط'),
                selected: _onlyFavorites,
                onSelected: (v) => setState(() {
                  _onlyFavorites = v;
                  _shown = pageSize;
                }),
              ),
              const Spacer(),
              if (!_filters.isEmpty || _onlyFavorites)
                TextButton.icon(
                  onPressed: () {
                    _search.clear();
                    setState(() => _onlyFavorites = false);
                    _apply(TeacherFilters.none);
                  },
                  icon: const Icon(Icons.filter_alt_off_rounded),
                  label: const Text('مسح التصفية'),
                ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 2, 16, 4),
          child: Align(
            alignment: AlignmentDirectional.centerStart,
            child: Text('${results.length} مدرس · الترتيب: ${_sort.label}',
                style: const TextStyle(fontSize: 13)),
          ),
        ),
        Expanded(
          child: results.isEmpty
              ? _Empty(
                  filtered: !_filters.isEmpty || _onlyFavorites,
                  onReset: () {
                    _search.clear();
                    setState(() => _onlyFavorites = false);
                    _apply(TeacherFilters.none);
                  },
                )
              : ListView(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 90),
                  children: [
                    for (final t in page)
                      _TeacherCard(
                        teacher: t,
                        favorite: _favorites.contains(t.uid),
                        comparing: _compare.contains(t.uid),
                        onOpen: () => widget.onOpen(t),
                        onFavorite: () async {
                          await TeacherFavorites.toggle(t.uid);
                          final f = await TeacherFavorites.load();
                          if (mounted) setState(() => _favorites = f);
                        },
                        onCompare: (on) => setState(() {
                          if (on && _compare.length >= 3) {
                            ScaffoldMessenger.of(context)
                              ..hideCurrentSnackBar()
                              ..showSnackBar(const SnackBar(content: Text('يمكنك مقارنة 3 مدرسين كحد أقصى')));
                            return;
                          }
                          on ? _compare.add(t.uid) : _compare.remove(t.uid);
                        }),
                      ),
                    if (results.length > page.length)
                      Center(
                        child: TextButton(
                          onPressed: () => setState(() => _shown += pageSize),
                          child: Text('عرض المزيد (${results.length - page.length})'),
                        ),
                      ),
                  ],
                ),
        ),
        if (_compare.length >= 2)
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: FilledButton.icon(
                onPressed: () => widget.onCompare([for (final t in widget.teachers) if (_compare.contains(t.uid)) t]),
                icon: const Icon(Icons.compare_arrows_rounded),
                label: Text('قارن ${_compare.length} مدرسين'),
              ),
            ),
          ),
      ],
    );
  }
}

class _Empty extends StatelessWidget {
  final bool filtered;
  final VoidCallback onReset;
  const _Empty({required this.filtered, required this.onReset});

  @override
  Widget build(BuildContext context) => Center(
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.search_off_rounded, size: 56),
              const SizedBox(height: 8),
              Text(filtered ? 'لا يوجد مدرس يطابق اختياراتك' : 'لا يوجد مدرسون متاحون الآن',
                  textAlign: TextAlign.center, style: const TextStyle(fontSize: 20)),
              if (filtered) ...[
                const SizedBox(height: 4),
                const Text('المدرس الذي لم يملأ حقلاً لا يظهر عند التصفية به.', textAlign: TextAlign.center),
                const SizedBox(height: 12),
                FilledButton(onPressed: onReset, child: const Text('مسح التصفية')),
              ],
            ],
          ),
        ),
      );
}

class _TeacherCard extends StatelessWidget {
  final TeacherProfile teacher;
  final bool favorite;
  final bool comparing;
  final VoidCallback onOpen;
  final VoidCallback onFavorite;
  final void Function(bool) onCompare;
  const _TeacherCard({
    required this.teacher,
    required this.favorite,
    required this.comparing,
    required this.onOpen,
    required this.onFavorite,
    required this.onCompare,
  });

  @override
  Widget build(BuildContext context) {
    final t = teacher;
    final facts = teacherFacts(t);
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 6),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onOpen,
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  TeacherAvatar(photo: t.photoBytes, radius: 32),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(t.name, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.bold)),
                        if (t.headline.isNotEmpty) Text(t.headline, style: const TextStyle(fontSize: 14)),
                      ],
                    ),
                  ),
                  IconButton(
                    tooltip: favorite ? 'إزالة من المفضلة' : 'حفظ في المفضلة',
                    onPressed: onFavorite,
                    icon: Icon(favorite ? Icons.favorite_rounded : Icons.favorite_border_rounded,
                        color: favorite ? Colors.pink : null),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              VerificationBadges(teacher: t),
              Wrap(spacing: 6, runSpacing: 6, children: [for (final id in t.subjects) SubjectChip(id: id)]),
              if (facts.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Text(facts.join(' · '), style: const TextStyle(fontSize: 13)),
                ),
              if (t.languages.isNotEmpty) Text(t.languages.join('، '), style: const TextStyle(fontSize: 13)),
              Align(
                alignment: AlignmentDirectional.centerEnd,
                child: FilterChip(
                  label: const Text('قارن'),
                  selected: comparing,
                  onSelected: onCompare,
                  visualDensity: VisualDensity.compact,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _FilterSheet extends StatefulWidget {
  final TeacherFilters filters;
  final TeacherSort sort;
  const _FilterSheet({required this.filters, required this.sort});

  @override
  State<_FilterSheet> createState() => _FilterSheetState();
}

class _FilterSheetState extends State<_FilterSheet> {
  late TeacherFilters _f = widget.filters;
  late TeacherSort _sort = widget.sort;
  late final _price = TextEditingController(text: widget.filters.maxPrice?.toString() ?? '');

  @override
  void dispose() {
    _price.dispose();
    super.dispose();
  }

  Widget _chips<T>(String title, List<T> options, T? selected, String Function(T) label, void Function(T?) pick) =>
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 12, bottom: 4),
            child: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
          ),
          Wrap(
            spacing: 8,
            children: [
              for (final o in options)
                ChoiceChip(
                  label: Text(label(o)),
                  selected: selected == o,
                  onSelected: (on) => setState(() => pick(on ? o : null)),
                ),
            ],
          ),
        ],
      );

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.9,
        maxChildSize: 0.95,
        builder: (context, controller) => ListView(
          controller: controller,
          padding: const EdgeInsets.all(16),
          children: [
            const Text('تصفية وترتيب', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            const Text('تُجمع الاختيارات معاً. المدرس الذي لم يملأ الحقل لا يظهر عند التصفية به.',
                style: TextStyle(fontSize: 13)),
            _chips<String>('المادة', kSubjects.map((s) => s.id).toList(), _f.subject, _subjectLabel,
                (v) => _f = _f.copyWith(subject: v)),
            _chips<int>('عمر الطفل', [for (var a = 1; a <= 12; a++) a], _f.childAge, (a) => '$a سنوات',
                (v) => _f = _f.copyWith(childAge: v)),
            _chips<String>('اللغة', kTeacherLanguages, _f.language, (v) => v, (v) => _f = _f.copyWith(language: v)),
            _chips<String>('اللهجة', kTeacherDialects, _f.dialect, (v) => v, (v) => _f = _f.copyWith(dialect: v)),
            _chips<String>('طريقة الحصة', [formatOnline, formatInPerson], _f.format, formatLabel,
                (v) => _f = _f.copyWith(format: v)),
            _chips<String>('المنهج', kTeacherCurricula, _f.curriculum, (v) => v, (v) => _f = _f.copyWith(curriculum: v)),
            Padding(
              padding: const EdgeInsets.only(top: 12),
              child: TextField(
                controller: _price,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'أقصى سعر للحصة (جنيه)', border: OutlineInputBorder()),
                onChanged: (v) => _f = _f.copyWith(maxPrice: int.tryParse(v)),
              ),
            ),
            SwitchListTile(
              title: const Text('الهوية تم التحقق منها'),
              subtitle: const Text(kIdentityBadgeMeaning, style: TextStyle(fontSize: 12)),
              value: _f.identityVerified,
              onChanged: (v) => setState(() => _f = _f.copyWith(identityVerified: v)),
            ),
            SwitchListTile(
              title: const Text('المؤهل تم التحقق منه'),
              subtitle: const Text(kQualificationBadgeMeaning, style: TextStyle(fontSize: 12)),
              value: _f.qualificationVerified,
              onChanged: (v) => setState(() => _f = _f.copyWith(qualificationVerified: v)),
            ),
            const Padding(
              padding: EdgeInsets.only(top: 8),
              child: Text('الترتيب', style: TextStyle(fontWeight: FontWeight.bold)),
            ),
            Wrap(
              spacing: 8,
              children: [
                for (final s in TeacherSort.values)
                  ChoiceChip(label: Text(s.label), selected: _sort == s, onSelected: (_) => setState(() => _sort = s)),
              ],
            ),
            const SizedBox(height: 8),
            const Text(
              'لا توجد مواضع مدفوعة: الترتيب الافتراضي حسب اكتمال الملف ثم الاسم. لا ترتيب حسب التقييم لأنه لا توجد تقييمات بعد.',
              style: TextStyle(fontSize: 12),
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.pop(context, (TeacherFilters.none, TeacherSort.relevance)),
                    child: const Text('مسح الكل'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: FilledButton(
                    onPressed: () => Navigator.pop(context, (_f, _sort)),
                    child: const Text('عرض النتائج'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Up to three teachers side by side.
class CompareTeachersScreen extends StatelessWidget {
  final List<TeacherProfile> teachers;
  const CompareTeachersScreen({super.key, required this.teachers});

  @override
  Widget build(BuildContext context) {
    final rows = <(String, String Function(TeacherProfile))>[
      ('السعر', (t) => t.priceEgp != null ? '${t.priceEgp} جنيه' : (t.priceNote.isEmpty ? 'غير محدد' : t.priceNote)),
      ('مدة الحصة', (t) => t.lessonMinutes == null ? 'غير محددة' : '${t.lessonMinutes} دقيقة'),
      ('الخبرة (يذكرها المدرس)', (t) => t.experienceYears == null ? 'غير محددة' : '${t.experienceYears} سنوات'),
      ('الفئة العمرية', (t) => t.ageMin == null || t.ageMax == null ? 'غير محددة' : '${t.ageMin}–${t.ageMax}'),
      ('المواد', (t) => t.subjects.map(_subjectLabel).join('، ')),
      ('التخصصات', (t) => t.specialties.isEmpty ? '—' : t.specialties.join('، ')),
      ('طريقة الحصة', (t) => t.formats.isEmpty ? 'غير محددة' : t.formats.map(formatLabel).join('، ')),
      ('نوع الحصة', (t) => t.classTypes.isEmpty ? 'غير محدد' : t.classTypes.map(classTypeLabel).join('، ')),
      ('اللغات', (t) => t.languages.join('، ')),
      ('اللهجة', (t) => t.dialects.isEmpty ? '—' : t.dialects.join('، ')),
      ('أسلوب التدريس', (t) => t.styles.isEmpty ? '—' : t.styles.join('، ')),
      ('الهوية', (t) => t.identityVerified ? 'تم التحقق منها' : 'لم يتحقق منها التطبيق'),
      ('المؤهل', (t) => t.qualificationVerified ? 'تم التحقق منه' : 'لم يتحقق منه التطبيق'),
      ('سياسة الإلغاء', (t) => t.cancellationPolicy.isEmpty ? 'غير محددة' : t.cancellationPolicy),
      ('التقييمات', (_) => 'لا توجد بعد'),
    ];
    return Scaffold(
      appBar: AppBar(title: const Text('مقارنة المدرسين')),
      body: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Table(
            defaultColumnWidth: const FixedColumnWidth(170),
            border: TableBorder.all(color: Colors.black12),
            children: [
              TableRow(
                decoration: BoxDecoration(color: Colors.orange.shade50),
                children: [
                  const _Cell('', bold: true),
                  for (final t in teachers) _Cell(t.name, bold: true),
                ],
              ),
              for (final r in rows)
                TableRow(children: [_Cell(r.$1, bold: true), for (final t in teachers) _Cell(r.$2(t))]),
            ],
          ),
        ),
      ),
    );
  }
}

class _Cell extends StatelessWidget {
  final String text;
  final bool bold;
  const _Cell(this.text, {this.bold = false});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.all(10),
        child: Text(text, style: TextStyle(fontWeight: bold ? FontWeight.bold : FontWeight.normal)),
      );
}
