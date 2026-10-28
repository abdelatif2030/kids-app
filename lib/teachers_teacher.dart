import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_bookings.dart';
import 'teachers_models.dart';

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
            padding: const EdgeInsets.all(24),
            children: [
              if (p == null)
                const Text(
                  'أنشئ ملفك الشخصي ليراجعه صاحب التطبيق، وبعد الموافقة يظهر للأهل.',
                  style: TextStyle(fontSize: 18),
                )
              else ...[
                Card(
                  color: p.approved ? Colors.green.shade50 : Colors.amber.shade50,
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Text(
                      p.approved
                          ? 'ملفك معتمد ويظهر للأهل.'
                          : 'ملفك قيد المراجعة. سيظهر للأهل بعد موافقة صاحب التطبيق.',
                      style: const TextStyle(fontSize: 18),
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Text(p.name, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                Text(p.bio),
                Text('المواد: ${[for (final s in p.subjects) subjectById(s)?.label ?? s].join('، ')}'),
                Text('اللغات: ${p.languages.join('، ')}'),
                if (p.priceNote.isNotEmpty) Text('السعر: ${p.priceNote}'),
              ],
              const SizedBox(height: 24),
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
  late final _name = TextEditingController(text: widget.existing?.name ?? widget.name);
  late final _bio = TextEditingController(text: widget.existing?.bio ?? '');
  late final _price = TextEditingController(text: widget.existing?.priceNote ?? '');
  late final Set<String> _subjects = {...?widget.existing?.subjects};
  late final Set<String> _languages = {...?widget.existing?.languages};
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _name.dispose();
    _bio.dispose();
    _price.dispose();
    super.dispose();
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
      await widget.repo.saveTeacherProfile(TeacherProfile(
        uid: widget.repo.currentUser!.uid,
        name: _name.text.trim(),
        bio: _bio.text.trim(),
        subjects: _subjects.toList(),
        languages: _languages.toList(),
        priceNote: _price.text.trim(),
        status: widget.existing?.status ?? teacherStatusPending,
      ));
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
