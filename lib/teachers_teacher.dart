import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'media_picker.dart';
import 'teachers_availability.dart';
import 'teachers_bookings.dart';
import 'teachers_requests.dart';
import 'teachers_directory.dart' show VerificationBadges;
import 'teachers_models.dart';
import 'teachers_portfolio.dart';
import 'teachers_portfolio_screens.dart';
import 'teachers_parent.dart' show TeacherDetailScreen;
import 'teachers_widgets.dart';
import 'l10n/strings.dart';

/// A teacher's home: their profile (and its approval status) and incoming requests.
class TeacherHomeScreen extends StatefulWidget {
  final TeacherRepository repo;
  final VoidCallback onSignOut;
  const TeacherHomeScreen({super.key, required this.repo, required this.onSignOut});

  @override
  State<TeacherHomeScreen> createState() => _TeacherHomeScreenState();
}

class _TeacherHomeScreenState extends State<TeacherHomeScreen> {
  late Future<TeacherProfile?> _profile;

  @override
  void initState() {
    super.initState();
    _profile = widget.repo.myTeacherProfile();
  }

  Future<void> _edit(TeacherProfile? existing) async {
    final name = await widget.repo.displayName();
    if (!mounted) return;
    final saved = await Navigator.push<bool>(
      context,
      MaterialPageRoute(
        builder: (_) => TeacherProfileForm(repo: widget.repo, existing: existing, name: name),
      ),
    );
    if (saved == true && mounted) {
      final profile = widget.repo.myTeacherProfile();
      setState(() {
        _profile = profile;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(loc('حساب المدرس')),
        actions: [
          IconButton(
            tooltip: loc('مواعيدي'),
            icon: const Icon(Icons.edit_calendar_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => TeacherAvailabilityScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: loc('طلبات الأهل'),
            icon: const Icon(Icons.inbox_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => OpenRequestsScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: loc('طلبات الحصص'),
            icon: const Icon(Icons.event_note_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => BookingsScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: loc('تسجيل الخروج'),
            icon: const Icon(Icons.logout),
            onPressed: widget.onSignOut,
          ),
        ],
      ),
      body: FutureBuilder<TeacherProfile?>(
        future: _profile,
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          final p = snapshot.data;
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              if (p == null) ...[
                TeacherHeader(
                  avatar: TeacherAvatar(photo: null, radius: 36),
                  title: loc('أهلاً بك'),
                  subtitle: loc('أنشئ ملفك ليظهر للأهل'),
                ),
                const SizedBox(height: 16),
                Text(
                  loc('أنشئ ملفك الشخصي، وعند الحفظ يظهر للأهل مباشرة.'),
                  style: TextStyle(fontSize: 18),
                ),
              ] else ...[
                TeacherHeader(
                  avatar: TeacherAvatar(photo: p.photoBytes, radius: 36),
                  title: p.name,
                  subtitle: p.languages.join(loc('، ')),
                ),
                const SizedBox(height: 12),
                Card(
                  color: p.approved ? Colors.green.shade50 : Colors.amber.shade50,
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Row(
                      children: [
                        Icon(
                          p.approved ? Icons.visibility_rounded : Icons.visibility_off_rounded,
                          color: p.approved ? Colors.green : Colors.amber.shade800,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            p.approved
                                ? loc('ملفك ظاهر للأهل.')
                                : p.suspended
                                    ? loc('تم إيقاف ظهور ملفك. تواصل مع صاحب التطبيق.')
                                    : loc('احفظ ملفك مرة أخرى ليظهر للأهل.'),
                            style: const TextStyle(fontSize: 17),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                _Checklist(profile: p),
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(p.bio, style: const TextStyle(fontSize: 16)),
                        const SizedBox(height: 12),
                        Wrap(spacing: 8, runSpacing: 8, children: [
                          for (final s in p.subjects) SubjectChip(id: s),
                        ]),
                        if (p.priceNote.isNotEmpty) ...[
                          const SizedBox(height: 12),
                          Text(tr2('السعر: ${p.priceNote}', 'Price: ${p.priceNote}')),
                        ],
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Icon(Icons.description_outlined, size: 20),
                            const SizedBox(width: 6),
                            Text(p.cvName == null ? loc('لم ترفع سيرة ذاتية') : tr2('السيرة الذاتية: ${p.cvName}', 'CV: ${p.cvName}')),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
              const SizedBox(height: 16),
              if (p != null)
                OutlinedButton.icon(
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => TeacherDetailScreen(repo: widget.repo, teacher: p, preview: true),
                    ),
                  ),
                  icon: const Icon(Icons.visibility_outlined),
                  label: Text(loc('معاينة صفحتي كما يراها الأهل')),
                ),
              if (p != null)
                OutlinedButton.icon(
                  key: const ValueKey('open_portfolio'),
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => TeacherPortfolioScreen(repo: widget.repo)),
                  ),
                  icon: const Icon(Icons.collections_bookmark_outlined),
                  label: Text(tr2('معرض أعمالي', 'My portfolio')),
                ),
              FilledButton.icon(
                onPressed: () => _edit(p),
                icon: const Icon(Icons.edit),
                label: Text(p == null ? loc('إنشاء الملف الشخصي') : loc('تعديل الملف الشخصي')),
              ),
            ],
          );
        },
      ),
    );
  }
}

class TeacherProfileForm extends StatefulWidget {
  final TeacherRepository repo;
  final TeacherProfile? existing;
  final String name;
  const TeacherProfileForm({
    super.key,
    required this.repo,
    required this.existing,
    required this.name,
  });

  @override
  State<TeacherProfileForm> createState() => _TeacherProfileFormState();
}

class _TeacherProfileFormState extends State<TeacherProfileForm> {
  // A name that is really an email (browser autofill) is not a name: start empty.
  late final _name = TextEditingController(
      text: widget.existing?.name ?? (widget.name.contains('@') ? '' : widget.name));
  late final _bio = TextEditingController(text: widget.existing?.bio ?? '');
  late final _price = TextEditingController(text: widget.existing?.priceNote ?? '');
  late final Set<String> _subjects = {...?widget.existing?.subjects};
  late final Set<String> _languages = {...?widget.existing?.languages};
  late final _headline = TextEditingController(text: widget.existing?.headline ?? '');
  late final _philosophy = TextEditingController(text: widget.existing?.philosophy ?? '');
  late final _qualifications = TextEditingController(text: widget.existing?.qualifications ?? '');
  late final _cancellation = TextEditingController(text: widget.existing?.cancellationPolicy ?? '');
  late final _introVideo = TextEditingController(text: widget.existing?.introVideoUrl ?? '');
  late final _priceEgp = TextEditingController(text: widget.existing?.priceEgp?.toString() ?? '');
  late final _experience = TextEditingController(text: widget.existing?.experienceYears?.toString() ?? '');
  late int? _ageMin = widget.existing?.ageMin;
  late int? _ageMax = widget.existing?.ageMax;
  late int? _minutes = widget.existing?.lessonMinutes;
  late final Set<String> _specialties = {...?widget.existing?.specialties};
  late final Set<String> _curricula = {...?widget.existing?.curricula};
  late final Set<String> _dialects = {...?widget.existing?.dialects};
  late final Set<String> _formats = {...?widget.existing?.formats};
  late final Set<String> _styles = {...?widget.existing?.styles};
  late final Set<String> _classTypes = {...?widget.existing?.classTypes};
  late Uint8List? _photo = widget.existing?.photoBytes;
  late String? _cvName = widget.existing?.cvName;
  CvFile? _newCv;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _name.dispose();
    _bio.dispose();
    _price.dispose();
    _headline.dispose();
    _philosophy.dispose();
    _qualifications.dispose();
    _cancellation.dispose();
    _introVideo.dispose();
    _priceEgp.dispose();
    _experience.dispose();
    super.dispose();
  }

  Future<void> _pickPhoto() async {
    try {
      final bytes = await mediaPicker.pickPhoto();
      if (bytes != null && mounted) {
        setState(() {
          _photo = bytes;
          _error = null;
        });
      }
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    }
  }

  Future<void> _pickCv() async {
    try {
      final cv = await mediaPicker.pickCv();
      if (cv != null && mounted) {
        setState(() {
          _newCv = cv;
          _cvName = cv.name;
          _error = null;
        });
      }
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    }
  }

  Future<void> _save() async {
    if (_name.text.trim().isEmpty || _bio.text.trim().isEmpty) {
      setState(() => _error = loc('اكتب الاسم ونبذة عنك'));
      return;
    }
    if (_subjects.isEmpty || _languages.isEmpty) {
      setState(() => _error = loc('اختر مادة ولغة على الأقل'));
      return;
    }
    final price = _priceEgp.text.trim().isEmpty ? null : int.tryParse(_priceEgp.text.trim());
    final years = _experience.text.trim().isEmpty ? null : int.tryParse(_experience.text.trim());
    if ((_priceEgp.text.trim().isNotEmpty && (price == null || price < 0 || price > 100000)) ||
        (_experience.text.trim().isNotEmpty && (years == null || years < 0 || years > 60))) {
      setState(() => _error = loc('تحقق من السعر وسنوات الخبرة (أرقام صحيحة)'));
      return;
    }
    if (!introVideoLinkOk(_introVideo.text)) {
      setState(() => _error = tr2('رابط الفيديو يجب أن يبدأ بـ https وألا يتجاوز $kIntroVideoMax حرفاً', 'The video link must start with https and be at most $kIntroVideoMax characters'));
      return;
    }
    if (_ageMin != null && _ageMax != null && _ageMin! > _ageMax!) {
      setState(() => _error = loc('الفئة العمرية: الحد الأدنى أكبر من الأقصى'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.repo.saveTeacherProfile(
        TeacherProfile(
          uid: widget.repo.currentUser!.uid,
          name: _name.text.trim(),
          bio: _bio.text.trim(),
          subjects: _subjects.toList(),
          languages: _languages.toList(),
          priceNote: _price.text.trim(),
          status: widget.existing?.status ?? teacherStatusApproved,
          photoB64: _photo == null ? null : base64Encode(_photo!),
          cvName: _cvName,
          headline: _headline.text.trim(),
          philosophy: _philosophy.text.trim(),
          ageMin: _ageMin,
          ageMax: _ageMax,
          specialties: _specialties.toList(),
          curricula: _curricula.toList(),
          dialects: _dialects.toList(),
          formats: _formats.toList(),
          styles: _styles.toList(),
          classTypes: _classTypes.toList(),
          lessonMinutes: _minutes,
          priceEgp: price,
          experienceYears: years,
          qualifications: _qualifications.text.trim(),
          cancellationPolicy: _cancellation.text.trim(),
          introVideoUrl: _introVideo.text.trim(),
          // Never written from here: the owner sets the badges in the console.
          identityVerified: widget.existing?.identityVerified ?? false,
          qualificationVerified: widget.existing?.qualificationVerified ?? false,
        ),
        newCv: _newCv,
      );
      if (mounted) Navigator.pop(context, true);
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Widget _chipGroup(String title, List<String> options, Set<String> selected, String Function(String) label) => Column(
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
                FilterChip(
                  label: Text(loc(label(o))),
                  selected: selected.contains(o),
                  onSelected: (on) => setState(() {
                    on ? selected.add(o) : selected.remove(o);
                  }),
                ),
            ],
          ),
        ],
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('الملف الشخصي'))),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Center(
            child: Stack(
              children: [
                TeacherAvatar(photo: _photo, radius: 56),
                PositionedDirectional(
                  end: 0,
                  bottom: 0,
                  child: IconButton.filled(
                    tooltip: loc('اختيار صورة'),
                    onPressed: _pickPhoto,
                    icon: const Icon(Icons.photo_camera_rounded),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          TextField(controller: _name, decoration: InputDecoration(labelText: loc('الاسم'))),
          TextField(
            controller: _bio,
            maxLines: 5,
            decoration: InputDecoration(labelText: loc('نبذة عنك وخبرتك')),
          ),
          TextField(
            controller: _price,
            decoration: InputDecoration(
              labelText: loc('السعر (اختياري)'),
              hintText: loc('مثال: 150 جنيه للحصة'),
            ),
          ),
          const SizedBox(height: 16),
          Text(loc('المواد'), style: TextStyle(fontWeight: FontWeight.bold)),
          Wrap(
            spacing: 8,
            children: [
              for (final s in kSubjects)
                FilterChip(
                  label: Text(s.label),
                  selected: _subjects.contains(s.id),
                  onSelected: (on) => setState(() {
                    on ? _subjects.add(s.id) : _subjects.remove(s.id);
                  }),
                ),
            ],
          ),
          const SizedBox(height: 16),
          Text(loc('اللغات'), style: TextStyle(fontWeight: FontWeight.bold)),
          Wrap(
            spacing: 8,
            children: [
              for (final l in kTeacherLanguages)
                FilterChip(
                  label: Text(loc(l)),
                  selected: _languages.contains(l),
                  onSelected: (on) => setState(() {
                    on ? _languages.add(l) : _languages.remove(l);
                  }),
                ),
            ],
          ),
          const SizedBox(height: 8),
          Card(
            child: ExpansionTile(
              title: Text(loc('ملف احترافي (يزيد ثقة الأهل)'), style: TextStyle(fontWeight: FontWeight.bold)),
              subtitle: Text(loc('اختياري. كل ما تكتبه هنا يظهر للأهل على أنه من كلامك أنت، لا يتحقق منه التطبيق.')),
              childrenPadding: const EdgeInsets.all(16),
              expandedCrossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextField(
                  controller: _headline,
                  maxLength: 100,
                  decoration: InputDecoration(labelText: loc('عنوان قصير'), hintText: loc('مثال: تأسيس القراءة والكتابة بالألعاب')),
                ),
                TextField(
                  controller: _philosophy,
                  maxLines: 3,
                  maxLength: 500,
                  decoration: InputDecoration(labelText: loc('أسلوبك في التعليم')),
                ),
                Row(
                  children: [
                    Expanded(
                      child: DropdownButton<int?>(
                        isExpanded: true,
                        value: _ageMin,
                        hint: Text(loc('أصغر عمر')),
                        items: [
                          DropdownMenuItem<int?>(value: null, child: Text(loc('غير محدد'))),
                          for (var a = 1; a <= 12; a++) DropdownMenuItem<int?>(value: a, child: Text('$a')),
                        ],
                        onChanged: (v) => setState(() => _ageMin = v),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: DropdownButton<int?>(
                        isExpanded: true,
                        value: _ageMax,
                        hint: Text(loc('أكبر عمر')),
                        items: [
                          DropdownMenuItem<int?>(value: null, child: Text(loc('غير محدد'))),
                          for (var a = 1; a <= 12; a++) DropdownMenuItem<int?>(value: a, child: Text('$a')),
                        ],
                        onChanged: (v) => setState(() => _ageMax = v),
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _priceEgp,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(labelText: loc('سعر الحصة (جنيه)')),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: TextField(
                        controller: _experience,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(labelText: loc('سنوات الخبرة')),
                      ),
                    ),
                  ],
                ),
                DropdownButton<int?>(
                  isExpanded: true,
                  value: _minutes,
                  hint: Text(loc('مدة الحصة')),
                  items: [
                    DropdownMenuItem<int?>(value: null, child: Text(loc('غير محددة'))),
                    for (final m in [30, 45, 60, 90]) DropdownMenuItem<int?>(value: m, child: Text(tr2('$m دقيقة', '$m minutes'))),
                  ],
                  onChanged: (v) => setState(() => _minutes = v),
                ),
                _chipGroup(loc('طريقة الحصة'), [formatOnline, formatInPerson], _formats, formatLabel),
                _chipGroup(loc('نوع الحصة'), [classIndividual, classSmallGroup], _classTypes, classTypeLabel),
                _chipGroup(loc('التخصصات'), kTeacherSpecialties, _specialties, (v) => v),
                _chipGroup(loc('المناهج'), kTeacherCurricula, _curricula, (v) => v),
                _chipGroup(loc('اللهجة'), kTeacherDialects, _dialects, (v) => v),
                _chipGroup(loc('أساليب التدريس'), kTeacherStyles, _styles, (v) => v),
                TextField(
                  controller: _qualifications,
                  maxLines: 3,
                  maxLength: 600,
                  decoration: InputDecoration(
                    labelText: loc('المؤهلات'),
                    helperText: loc('تظهر للأهل كـ «كتبها المدرس» حتى يتحقق منها صاحب التطبيق.'),
                  ),
                ),
                TextField(
                  controller: _cancellation,
                  maxLines: 2,
                  maxLength: 300,
                  decoration: InputDecoration(labelText: loc('سياسة الإلغاء'), hintText: loc('مثال: إلغاء مجاني قبل 24 ساعة')),
                ),
                TextField(
                  key: const ValueKey('intro_video'),
                  controller: _introVideo,
                  keyboardType: TextInputType.url,
                  textDirection: TextDirection.ltr,
                  decoration: InputDecoration(
                    labelText: tr2('رابط فيديو تعريفي (اختياري)', 'Intro video link (optional)'),
                    helperText: tr2('رابط https لفيديو من 30 إلى 60 ثانية. يظهر للأهل كرابط للنسخ، دون تشغيل تلقائي.', 'An https link to a 30-60 second video. Parents see it as a link to copy, with no autoplay.'),
                    helperMaxLines: 2,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(loc('السيرة الذاتية (CV)'),
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 17)),
                  const SizedBox(height: 4),
                  Text(_cvName ?? loc('لم يتم اختيار ملف')),
                  const SizedBox(height: 8),
                  OutlinedButton.icon(
                    onPressed: _pickCv,
                    icon: const Icon(Icons.upload_file_rounded),
                    label: Text(_cvName == null ? loc('رفع السيرة الذاتية') : loc('تغيير الملف')),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    loc('PDF أو صورة، حتى 500 كيلوبايت. سيراها الأهل: احذف رقم هاتفك وعنوانك منها.'),
                    style: TextStyle(fontSize: 13),
                  ),
                ],
              ),
            ),
          ),
          if (_error != null)
            Padding(
              padding: const EdgeInsets.only(top: 12),
              child: Text(_error!, style: const TextStyle(color: Colors.red)),
            ),
          const SizedBox(height: 16),
          FilledButton(onPressed: _busy ? null : _save, child: Text(loc('حفظ'))),
        ],
      ),
    );
  }
}


/// What is still missing from the profile, and the (owner-set) verification status.
class _Checklist extends StatelessWidget {
  final TeacherProfile profile;
  const _Checklist({required this.profile});

  @override
  Widget build(BuildContext context) {
    final c = profileCompleteness(profile);
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(tr2('اكتمال الملف: ${c.done.length} من ${c.total}', 'Profile completeness: ${c.done.length} of ${c.total}'),
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 6),
            LinearProgressIndicator(value: c.ratio, minHeight: 8, borderRadius: BorderRadius.circular(8)),
            if (c.missing.isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(loc('ينقص ملفك:')),
              for (final m in c.missing) Text('• $m', style: const TextStyle(fontSize: 14)),
            ],
            const Divider(),
            Text(loc('التحقق'), style: TextStyle(fontWeight: FontWeight.bold)),
            Text(profile.identityVerified ? loc('✓ الهوية تم التحقق منها') : loc('الهوية: لم يتم التحقق بعد')),
            Text(profile.qualificationVerified ? loc('✓ المؤهل تم التحقق منه') : loc('المؤهل: لم يتم التحقق بعد')),
            Text(
              loc('يضيف صاحب التطبيق الشارتين بعد فحص مستندات. اكتمال الملف لا يمنحك شارة.'),
              style: TextStyle(fontSize: 12),
            ),
            VerificationBadges(teacher: profile),
          ],
        ),
      ),
    );
  }
}
