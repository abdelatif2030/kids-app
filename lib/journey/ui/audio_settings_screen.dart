import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../data_reset.dart';
import '../../literacy/mastery.dart';
import '../../media/audio.dart';
import '../repository.dart';

/// Parent area: sound, reading and letter-learning settings.
class AudioSettingsScreen extends StatefulWidget {
  const AudioSettingsScreen({super.key});

  @override
  State<AudioSettingsScreen> createState() => _AudioSettingsScreenState();
}

class _AudioSettingsScreenState extends State<AudioSettingsScreen> {
  LiteracyConfig _cfg = const LiteracyConfig();
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    LiteracyStore.config().then((c) {
      if (mounted) {
        setState(() {
          _cfg = c;
          _loaded = true;
        });
      }
    });
  }

  void _setCfg(LiteracyConfig c) {
    setState(() => _cfg = c);
    LiteracyStore.saveConfig(c);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('الصوت والتعلّم')),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListenableBuilder(
              listenable: AudioPrefs.instance,
              builder: (context, _) {
                final p = AudioPrefs.instance;
                return ListView(
                  children: [
                    const Padding(
                      padding: EdgeInsets.all(16),
                      child: Text(
                        'قراءة الحروف والكلمات والقصص بصوت الجهاز الآلي تتم على الجهاز نفسه، ولا يُرسل أي صوت ولا نص إلى أي مكان. '
                        'لا يحتاج التطبيق إلى الميكروفون ولا الكاميرا.',
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.record_voice_over_rounded),
                      title: const Text('القراءة بالصوت'),
                      subtitle: const Text('قراءة الحروف والكلمات والأسئلة بصوت الجهاز'),
                      value: p.voiceOn,
                      onChanged: (v) => p.update(voiceOn: v),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.music_note_rounded),
                      title: const Text('المؤثرات الصوتية'),
                      subtitle: const Text('لا توجد مؤثرات في هذه النسخة؛ اختيارك محفوظ للمستقبل'),
                      value: p.effectsOn,
                      onChanged: (v) => p.update(effectsOn: v),
                    ),
                    ListTile(
                      leading: const Icon(Icons.speed_rounded),
                      title: const Text('سرعة القراءة'),
                      trailing: DropdownButton<double>(
                        value: p.speechRate,
                        items: const [
                          DropdownMenuItem(value: 0.75, child: Text('بطيئة')),
                          DropdownMenuItem(value: 1.0, child: Text('عادية')),
                          DropdownMenuItem(value: 1.25, child: Text('سريعة')),
                        ],
                        onChanged: (v) => v == null ? null : p.update(speechRate: v),
                      ),
                    ),
                    ListTile(
                      leading: const Icon(Icons.water_drop_rounded),
                      title: const Text('صوت الطبيعة مع القصص'),
                      trailing: DropdownButton<String>(
                        value: p.ambient,
                        items: [
                          for (final e in kAmbientSounds.entries) DropdownMenuItem(value: e.key, child: Text(e.value.$1)),
                        ],
                        onChanged: (v) => v == null ? null : p.update(ambient: v),
                      ),
                    ),
                    ListTile(
                      leading: const Icon(Icons.volume_down_rounded),
                      title: const Text('مستوى صوت الطبيعة'),
                      subtitle: Slider(
                        value: p.ambientVolume,
                        min: 0.05,
                        max: 0.8,
                        onChanged: (v) => p.update(ambientVolume: v),
                      ),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.bedtime_rounded),
                      title: const Text('قصص النوم في ساعات الهدوء'),
                      subtitle: const Text('يسمح بزر «قصة هادئة قبل النوم» في شاشة الراحة'),
                      value: p.storiesInQuietHours,
                      onChanged: (v) => p.update(storiesInQuietHours: v),
                    ),
                    const Divider(),
                    const Padding(
                      padding: EdgeInsets.fromLTRB(16, 8, 16, 0),
                      child: Text('تعلّم الحروف', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                    ),
                    ListTile(
                      title: const Text('ترتيب الحروف'),
                      trailing: DropdownButton<String>(
                        value: _cfg.order,
                        items: const [
                          DropdownMenuItem(value: 'alphabet', child: Text('الأبجدي')),
                          DropdownMenuItem(value: 'shapes', child: Text('الحروف المتشابهة معاً')),
                        ],
                        onChanged: (v) => v == null
                            ? null
                            : _setCfg(LiteracyConfig(order: v, groupSize: _cfg.groupSize, unlockAll: _cfg.unlockAll)),
                      ),
                    ),
                    ListTile(
                      title: const Text('عدد الحروف التي تُفتح في كل مرحلة'),
                      trailing: DropdownButton<int>(
                        value: _cfg.groupSize,
                        items: [for (final n in [2, 4, 6, 8]) DropdownMenuItem(value: n, child: Text('$n'))],
                        onChanged: (v) => v == null
                            ? null
                            : _setCfg(LiteracyConfig(order: _cfg.order, groupSize: v, unlockAll: _cfg.unlockAll)),
                      ),
                    ),
                    SwitchListTile(
                      title: const Text('فتح كل الحروف'),
                      subtitle: const Text('للأطفال الذين يعرفون الحروف مسبقاً'),
                      value: _cfg.unlockAll,
                      onChanged: (v) => _setCfg(LiteracyConfig(order: _cfg.order, groupSize: _cfg.groupSize, unlockAll: v)),
                    ),
                    const Divider(),
                    ListTile(
                      leading: const Icon(Icons.download_rounded),
                      title: const Text('تصدير بيانات الطفل'),
                      subtitle: const Text('نسخة مقروءة من كل ما يحفظه التطبيق عن الطفل على هذا الجهاز'),
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const DataExportScreen()),
                      ),
                    ),
                  ],
                );
              },
            ),
    );
  }
}

/// A parent can read (and copy) everything the app keeps about a child.
class DataExportScreen extends StatefulWidget {
  const DataExportScreen({super.key});

  @override
  State<DataExportScreen> createState() => _DataExportScreenState();
}

class _DataExportScreenState extends State<DataExportScreen> {
  String? _childId;
  Future<String>? _text;

  void _pick(String id) {
    setState(() {
      _childId = id;
      _text = exportChildData(id).then((m) => const JsonEncoder.withIndent('  ').convert(m));
    });
  }

  @override
  Widget build(BuildContext context) {
    final profiles = JourneyStore.instance.profiles;
    return Scaffold(
      appBar: AppBar(title: const Text('تصدير بيانات الطفل')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('اختر طفلاً لعرض كل ما يحفظه التطبيق عنه على هذا الجهاز. يمكنك نسخه وحفظه. لا يُرسل شيء إلى أي مكان.'),
          const SizedBox(height: 8),
          if (profiles.isEmpty) const Text('لا توجد ملفات أطفال.'),
          Wrap(
            spacing: 8,
            children: [
              for (final c in profiles)
                ChoiceChip(label: Text(c.nickname), selected: _childId == c.id, onSelected: (_) => _pick(c.id)),
            ],
          ),
          if (_text != null)
            FutureBuilder<String>(
              future: _text,
              builder: (context, snap) {
                if (snap.connectionState != ConnectionState.done) {
                  return const Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator()));
                }
                if (snap.hasError) return const Text('تعذّر إنشاء النسخة.');
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 8),
                    FilledButton.icon(
                      onPressed: () async {
                        await Clipboard.setData(ClipboardData(text: snap.data!));
                        if (context.mounted) {
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('تم النسخ')));
                        }
                      },
                      icon: const Icon(Icons.copy_rounded),
                      label: const Text('نسخ'),
                    ),
                    const SizedBox(height: 8),
                    Directionality(
                      textDirection: TextDirection.ltr,
                      child: SelectableText(snap.data!, style: const TextStyle(fontSize: 11, fontFamily: 'monospace')),
                    ),
                  ],
                );
              },
            ),
        ],
      ),
    );
  }
}
