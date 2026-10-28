import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'curriculum.dart';
import 'watch_history.dart';
import 'l10n/strings.dart';

/// A parent's note about the child (e.g. "struggles with the letter ع").
/// Stored only on this device.
class NoteEntry {
  final String text;
  final String day; // yyyy-mm-dd
  final String? subject;
  const NoteEntry({required this.text, required this.day, this.subject});

  factory NoteEntry.fromJson(Map<String, dynamic> j) => NoteEntry(
        text: j['t'] as String,
        day: j['d'] as String,
        subject: j['s'] as String?,
      );

  Map<String, dynamic> toJson() => {'t': text, 'd': day, 's': subject};
}

class ParentNotes {
  static const _key = 'parent_notes';

  static Future<List<NoteEntry>> load() async {
    final raw = (await SharedPreferences.getInstance()).getString(_key);
    if (raw == null) return [];
    return [
      for (final e in jsonDecode(raw) as List<dynamic>)
        NoteEntry.fromJson(e as Map<String, dynamic>),
    ];
  }

  static Future<void> save(List<NoteEntry> notes) async =>
      (await SharedPreferences.getInstance())
          .setString(_key, jsonEncode([for (final n in notes) n.toJson()]));
}

class NotesScreen extends StatefulWidget {
  const NotesScreen({super.key});

  @override
  State<NotesScreen> createState() => _NotesScreenState();
}

class _NotesScreenState extends State<NotesScreen> {
  List<NoteEntry>? _notes;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final notes = await ParentNotes.load();
    if (mounted) setState(() => _notes = notes);
  }

  Future<void> _add() async {
    final note = await showDialog<NoteEntry>(
      context: context,
      builder: (_) => const _NoteDialog(),
    );
    if (note == null || _notes == null) return;
    setState(() => _notes = [note, ..._notes!]);
    await ParentNotes.save(_notes!);
  }

  Future<void> _delete(int index) async {
    setState(() => _notes = [..._notes!]..removeAt(index));
    await ParentNotes.save(_notes!);
  }

  @override
  Widget build(BuildContext context) {
    final notes = _notes;
    return Scaffold(
      appBar: AppBar(title: Text(loc('ملاحظات'))),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: notes == null ? null : _add,
        icon: const Icon(Icons.add),
        label: Text(loc('ملاحظة جديدة'), style: TextStyle(fontSize: 18)),
      ),
      body: notes == null
          ? const Center(child: CircularProgressIndicator())
          : notes.isEmpty
              ? Center(
                  child: Text(loc('لا توجد ملاحظات بعد'), style: TextStyle(fontSize: 20)),
                )
              : ListView.builder(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 96),
                  itemCount: notes.length,
                  itemBuilder: (_, i) {
                    final n = notes[i];
                    final subject = n.subject == null ? null : subjectById(n.subject!);
                    return Card(
                      child: ListTile(
                        title: Text(n.text, style: const TextStyle(fontSize: 18)),
                        subtitle: Text(
                          subject == null ? n.day : '${n.day} · ${subject.label}',
                        ),
                        trailing: IconButton(
                          tooltip: loc('حذف'),
                          icon: const Icon(Icons.delete_outline),
                          onPressed: () => _delete(i),
                        ),
                      ),
                    );
                  },
                ),
    );
  }
}

class _NoteDialog extends StatefulWidget {
  const _NoteDialog();

  @override
  State<_NoteDialog> createState() => _NoteDialogState();
}

class _NoteDialogState extends State<_NoteDialog> {
  final _text = TextEditingController();
  String? _subject;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  void _save() {
    final text = _text.text.trim();
    if (text.isEmpty) return;
    Navigator.pop(
      context,
      NoteEntry(text: text, day: WatchHistory.dayKey(DateTime.now()), subject: _subject),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(loc('ملاحظة جديدة')),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: _text,
              autofocus: true,
              maxLines: 4,
              decoration: InputDecoration(hintText: loc('اكتب ملاحظتك')),
            ),
            const SizedBox(height: 12),
            DropdownButton<String?>(
              isExpanded: true,
              value: _subject,
              hint: Text(loc('المادة (اختياري)')),
              items: [
                DropdownMenuItem<String?>(value: null, child: Text(loc('بدون مادة'))),
                for (final s in kSubjects)
                  DropdownMenuItem<String?>(value: s.id, child: Text(s.label)),
              ],
              onChanged: (v) => setState(() => _subject = v),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: Text(loc('إلغاء'))),
        FilledButton(onPressed: _save, child: Text(loc('حفظ'))),
      ],
    );
  }
}
