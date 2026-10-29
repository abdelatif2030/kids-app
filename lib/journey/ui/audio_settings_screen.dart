import '../../design/layout.dart';
import 'dart:convert';

import 'package:flutter/material.dart';

import 'package:flutter/services.dart';

import '../../data_reset.dart';
import '../../literacy/mastery.dart';
import '../../media/audio.dart';
import '../../media/audio_admin_screens.dart';
import '../../media/audio_status_screen.dart';
import '../repository.dart';
import '../../l10n/strings.dart';

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
      appBar: AppBar(title: Text(loc('الصوت والتعلّم'))),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListenableBuilder(
              listenable: AudioPrefs.instance,
              builder: (context, _) {
                final p = AudioPrefs.instance;
                return CenteredList(
                  children: [
                    Padding(
                      padding: EdgeInsets.all(16),
                      child: Text(
                        loc('قراءة الحروف والكلمات والقصص بصوت الجهاز الآلي تتم على الجهاز نفسه، ولا يُرسل أي صوت ولا نص إلى أي مكان. '
                        'لا يحتاج التطبيق إلى الميكروفون ولا الكاميرا.'),
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.record_voice_over_rounded),
                      title: Text(loc('القراءة بالصوت')),
                      subtitle: Text(loc('قراءة الحروف والكلمات والأسئلة بصوت الجهاز')),
                      value: p.voiceOn,
                      onChanged: (v) => p.update(voiceOn: v),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.smart_toy_outlined),
                      title: Text(context.tr('audio.deviceVoice')),
                      subtitle: Text(context.tr('audio.deviceVoiceHelp')),
                      value: p.allowDeviceVoice,
                      onChanged: (v) => p.update(allowDeviceVoice: v),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
                      child: Card(
                        child: Padding(
                          padding: const EdgeInsets.all(12),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(context.tr('audio.status.title'), style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                              const SizedBox(height: 4),
                              Text(trArgs('audio.status.body', {
                                'approved': AppAudio.manifest.approvedCount,
                                'total': AppAudio.manifest.total,
                              })),
                              const SizedBox(height: 4),
                              Text(context.tr('audio.status.note'), style: const TextStyle(fontSize: 13)),
                            ],
                          ),
                        ),
                      ),
                    ),
                    ListTile(
                      leading: const Icon(Icons.fact_check_outlined),
                      title: Text(tr2('حالة صوت الدروس', 'Lesson audio status')),
                      subtitle: Text(tr2('تسجيل أم صوت الجهاز أم لا يوجد صوت، وهل اعتُمد', 'Recorded, device voice or none, and whether it is approved')),
                      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const ParentAudioStatusScreen())),
                    ),
                    ListTile(
                      leading: const Icon(Icons.compare_rounded),
                      title: Text(tr2('مقارنة الأصوات (للمطوّر)', 'Voice comparison (developer)')),
                      subtitle: Text(tr2('شغّل العبارة نفسها بأصوات مرشّحة وسجّل ملاحظاتك', 'Play the same phrase with candidate voices and record notes')),
                      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const VoiceComparisonScreen())),
                    ),
                    ListTile(
                      leading: const Icon(Icons.fact_check_rounded),
                      title: Text(tr2('مراجعة الصوت واعتماده (للإدارة)', 'Audio review and approval (admin)')),
                      subtitle: Text(tr2('تصفية وتشغيل وقبول أو رفض كل عنصر', 'Filter, play, approve or reject each item')),
                      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const AudioReviewScreen())),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.music_note_rounded),
                      title: Text(loc('المؤثرات الصوتية')),
                      subtitle: Text(loc('لا توجد مؤثرات في هذه النسخة؛ اختيارك محفوظ للمستقبل')),
                      value: p.effectsOn,
                      onChanged: (v) => p.update(effectsOn: v),
                    ),
                    ListTile(
                      leading: const Icon(Icons.speed_rounded),
                      title: Text(loc('سرعة القراءة')),
                      trailing: DropdownButton<double>(
                        value: p.speechRate,
                        items: [
                          DropdownMenuItem(value: 0.75, child: Text(loc('بطيئة'))),
                          DropdownMenuItem(value: 1.0, child: Text(loc('عادية'))),
                          DropdownMenuItem(value: 1.25, child: Text(loc('سريعة'))),
                        ],
                        onChanged: (v) => v == null ? null : p.update(speechRate: v),
                      ),
                    ),
                    ListTile(
                      leading: const Icon(Icons.water_drop_rounded),
                      title: Text(loc('صوت الطبيعة مع القصص')),
                      trailing: DropdownButton<String>(
                        value: p.ambient,
                        items: [
                          for (final e in kAmbientSounds.entries) DropdownMenuItem(value: e.key, child: Text(loc(e.value.$1))),
                        ],
                        onChanged: (v) => v == null ? null : p.update(ambient: v),
                      ),
                    ),
                    ListTile(
                      leading: const Icon(Icons.volume_down_rounded),
                      title: Text(loc('مستوى صوت الطبيعة')),
                      subtitle: Slider(
                        value: p.ambientVolume,
                        min: 0.05,
                        max: 0.8,
                        onChanged: (v) => p.update(ambientVolume: v),
                      ),
                    ),
                    SwitchListTile(
                      secondary: const Icon(Icons.bedtime_rounded),
                      title: Text(loc('قصص النوم في ساعات الهدوء')),
                      subtitle: Text(loc('يسمح بزر «قصة هادئة قبل النوم» في شاشة الراحة')),
                      value: p.storiesInQuietHours,
                      onChanged: (v) => p.update(storiesInQuietHours: v),
                    ),
                    const Divider(),
                    Padding(
                      padding: EdgeInsets.fromLTRB(16, 8, 16, 0),
                      child: Text(loc('تعلّم الحروف'), style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                    ),
                    ListTile(
                      title: Text(loc('ترتيب الحروف')),
                      trailing: DropdownButton<String>(
                        value: _cfg.order,
                        items: [
                          DropdownMenuItem(value: 'alphabet', child: Text(loc('الأبجدي'))),
                          DropdownMenuItem(value: 'shapes', child: Text(loc('الحروف المتشابهة معاً'))),
                        ],
                        onChanged: (v) => v == null
                            ? null
                            : _setCfg(LiteracyConfig(order: v, groupSize: _cfg.groupSize, unlockAll: _cfg.unlockAll)),
                      ),
                    ),
                    ListTile(
                      title: Text(loc('عدد الحروف التي تُفتح في كل مرحلة')),
                      trailing: DropdownButton<int>(
                        value: _cfg.groupSize,
                        items: [for (final n in [2, 4, 6, 8]) DropdownMenuItem(value: n, child: Text('$n'))],
                        onChanged: (v) => v == null
                            ? null
                            : _setCfg(LiteracyConfig(order: _cfg.order, groupSize: v, unlockAll: _cfg.unlockAll)),
                      ),
                    ),
                    SwitchListTile(
                      title: Text(loc('فتح كل الحروف')),
                      subtitle: Text(loc('للأطفال الذين يعرفون الحروف مسبقاً')),
                      value: _cfg.unlockAll,
                      onChanged: (v) => _setCfg(LiteracyConfig(order: _cfg.order, groupSize: _cfg.groupSize, unlockAll: v)),
                    ),
                    const Divider(),
                    ListTile(
                      leading: const Icon(Icons.download_rounded),
                      title: Text(loc('تصدير بيانات الطفل')),
                      subtitle: Text(loc('نسخة مقروءة من كل ما يحفظه التطبيق عن الطفل على هذا الجهاز')),
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
      appBar: AppBar(title: Text(loc('تصدير بيانات الطفل'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Text(loc('اختر طفلاً لعرض كل ما يحفظه التطبيق عنه على هذا الجهاز. يمكنك نسخه وحفظه. لا يُرسل شيء إلى أي مكان.')),
          const SizedBox(height: 8),
          if (profiles.isEmpty) Text(loc('لا توجد ملفات أطفال.')),
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
                if (snap.hasError) return Text(loc('تعذّر إنشاء النسخة.'));
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 8),
                    FilledButton.icon(
                      onPressed: () async {
                        await Clipboard.setData(ClipboardData(text: snap.data!));
                        if (context.mounted) {
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(loc('تم النسخ'))));
                        }
                      },
                      icon: const Icon(Icons.copy_rounded),
                      label: Text(loc('نسخ')),
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
