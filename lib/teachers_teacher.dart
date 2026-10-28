import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'media_picker.dart';
import 'teachers_bookings.dart';
import 'teachers_models.dart';
import 'teachers_widgets.dart';

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
        title: const Text('حساب المدرس'),
        actions: [
          IconButton(
            tooltip: 'طلبات الحصص',
            icon: const Icon(Icons.event_note_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => BookingsScreen(repo: widget.repo)),
            ),
          ),
          IconButton(
            tooltip: 'تسجيل الخروج',
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
                const TeacherHeader(
                  avatar: TeacherAvatar(photo: null, radius: 36),
                  title: 'أهلاً بك',
                  subtitle: 'أنشئ ملفك ليظهر للأهل',
                ),
                const SizedBox(height: 16),
                const Text(
                  'أنشئ ملفك الشخصي، وعند الحفظ يظهر للأهل مباشرة.',
                  style: TextStyle(fontSize: 18),
                ),
              ] else ...[
                TeacherHeader(
                  avatar: TeacherAvatar(photo: p.photoBytes, radius: 36),
                  title: p.name,
                  subtitle: p.languages.join('، '),
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
                                ? 'ملفك ظاهر للأهل.'
                                : p.suspended
                                    ? 'تم إيقاف ظهور ملفك. تواصل مع صاحب التطبيق.'
                                    : 'احفظ ملفك مرة أخرى ليظهر للأهل.',
                            style: const TextStyle(fontSize: 17),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
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
                          Text('السعر: ${p.priceNote}'),
                        ],
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Icon(Icons.description_outlined, size: 20),
                            const SizedBox(width: 6),
                            Text(p.cvName == null ? 'لم ترفع سيرة ذاتية' : 'السيرة الذاتية: ${p.cvName}'),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: () => _edit(p),
                icon: const Icon(Icons.edit),
                label: Text(p == null ? 'إنشاء الملف الشخصي' : 'تعديل الملف الشخصي'),
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
      setState(() => _error = 'اكتب الاسم ونبذة عنك');
      return;
    }
    if (_subjects.isEmpty || _languages.isEmpty) {
      setState(() => _error = 'اختر مادة ولغة على الأقل');
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('الملف الشخصي')),
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
                    tooltip: 'اختيار صورة',
                    onPressed: _pickPhoto,
                    icon: const Icon(Icons.photo_camera_rounded),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          TextField(controller: _name, decoration: const InputDecoration(labelText: 'الاسم')),
          TextField(
            controller: _bio,
            maxLines: 5,
            decoration: const InputDecoration(labelText: 'نبذة عنك وخبرتك'),
          ),
          TextField(
            controller: _price,
            decoration: const InputDecoration(
              labelText: 'السعر (اختياري)',
              hintText: 'مثال: 150 جنيه للحصة',
            ),
          ),
          const SizedBox(height: 16),
          const Text('المواد', style: TextStyle(fontWeight: FontWeight.bold)),
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
          const Text('اللغات', style: TextStyle(fontWeight: FontWeight.bold)),
          Wrap(
            spacing: 8,
            children: [
              for (final l in kTeacherLanguages)
                FilterChip(
                  label: Text(l),
                  selected: _languages.contains(l),
                  onSelected: (on) => setState(() {
                    on ? _languages.add(l) : _languages.remove(l);
                  }),
                ),
            ],
          ),
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('السيرة الذاتية (CV)',
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 17)),
                  const SizedBox(height: 4),
                  Text(_cvName ?? 'لم يتم اختيار ملف'),
                  const SizedBox(height: 8),
                  OutlinedButton.icon(
                    onPressed: _pickCv,
                    icon: const Icon(Icons.upload_file_rounded),
                    label: Text(_cvName == null ? 'رفع السيرة الذاتية' : 'تغيير الملف'),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'PDF أو صورة، حتى 500 كيلوبايت. سيراها الأهل: احذف رقم هاتفك وعنوانك منها.',
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
          FilledButton(onPressed: _busy ? null : _save, child: const Text('حفظ')),
        ],
      ),
    );
  }
}
