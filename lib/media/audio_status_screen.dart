import '../design/layout.dart';
import 'package:flutter/material.dart';

import '../design/tokens.dart';
import '../l10n/strings.dart';
import 'audio.dart';
import 'audio_admin_screens.dart' show statusLabel, statusColor;
import 'audio_button.dart';
import 'audio_manifest.dart';
import 'audio_status.dart';

String heardLabel(HeardKind k) => switch (k) {
      HeardKind.recorded => tr2('تسجيل بشري معتمد', 'Approved human recording'),
      HeardKind.syntheticFile => tr2('ملف صوت اصطناعي معتمد', 'Approved synthetic-voice file'),
      HeardKind.deviceVoice => tr2('صوت الجهاز الآلي (تجريبي)', 'Device voice (synthesized, temporary)'),
      HeardKind.none => tr2('لا يوجد صوت', 'No audio available'),
    };

IconData heardIcon(HeardKind k) => switch (k) {
      HeardKind.recorded => Icons.mic_rounded,
      HeardKind.syntheticFile => Icons.graphic_eq_rounded,
      HeardKind.deviceVoice => Icons.smart_toy_outlined,
      HeardKind.none => Icons.volume_off_rounded,
    };

String kindLabel(AudioKind k) => switch (k) {
      AudioKind.letterName => tr2('اسم حرف', 'Letter name'),
      AudioKind.letterSound => tr2('صوت حرف', 'Letter sound'),
      AudioKind.word => tr2('كلمة', 'Word'),
      AudioKind.syllable => tr2('مقطع', 'Syllable'),
      AudioKind.number => tr2('رقم', 'Number'),
      AudioKind.phonics => tr2('صوت حروف إنجليزي', 'Phonics sound'),
      AudioKind.sentence => tr2('جملة', 'Sentence'),
      AudioKind.instruction => tr2('تعليمات', 'Instruction'),
    };

/// Parent view: for every spoken item of the lessons, where its sound comes from,
/// whether a person approved it, and whether anything can be played. Counts come
/// from the real data. Recorded, synthesized, missing and "needs review" are
/// shown separately so nothing looks better than it is.
class ParentAudioStatusScreen extends StatefulWidget {
  const ParentAudioStatusScreen({super.key});

  @override
  State<ParentAudioStatusScreen> createState() => _ParentAudioStatusScreenState();
}

class _ParentAudioStatusScreenState extends State<ParentAudioStatusScreen> {
  String? _lang;
  HeardKind? _heard;
  bool _onlyNeedsReview = false;

  @override
  void dispose() {
    AppAudio.stopSaying();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: AudioPrefs.instance,
      builder: (context, _) {
        final all = statusesOf(AppAudio.manifest, deviceVoiceEnabled: AudioPrefs.instance.allowDeviceVoice);
        final inLang = [for (final s in all) if (_lang == null || s.asset.lang == _lang) s];
        final sum = summarize(inLang);
        final list = [
          for (final s in inLang)
            if ((_heard == null || s.heard == _heard) && (!_onlyNeedsReview || s.needsReview)) s,
        ];
        Widget stat(String label, int n, {HeardKind? kind, Color? color}) => Padding(
              padding: const EdgeInsets.symmetric(vertical: 2),
              child: Row(children: [
                if (kind != null) Icon(heardIcon(kind), size: 18, color: color ?? DS.inkSoft),
                if (kind != null) const SizedBox(width: DS.s8),
                Expanded(child: Text(label)),
                Text('$n', style: const TextStyle(fontWeight: FontWeight.bold)),
              ]),
            );
        return Scaffold(
          appBar: AppBar(title: Text(tr2('حالة صوت الدروس', 'Lesson audio status'))),
          body: Column(
            children: [
              Expanded(
                child: CenteredList(
                  padding: const EdgeInsets.all(DS.s12),
                  children: [
                    Card(
                      child: Padding(
                        padding: const EdgeInsets.all(DS.s12),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(tr2('ما يسمعه الطفل الآن (${sum.total} عنصراً)', 'What a child hears now (${sum.total} items)'),
                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                            const SizedBox(height: DS.s8),
                            stat(heardLabel(HeardKind.recorded), sum.recorded, kind: HeardKind.recorded, color: DS.success),
                            stat(heardLabel(HeardKind.syntheticFile), sum.syntheticFile, kind: HeardKind.syntheticFile),
                            stat(heardLabel(HeardKind.deviceVoice), sum.deviceVoice, kind: HeardKind.deviceVoice, color: DS.warning),
                            stat(heardLabel(HeardKind.none), sum.none, kind: HeardKind.none),
                            const Divider(),
                            stat(tr2('ملفات صوت موجودة في التطبيق', 'Audio files present in the app'), sum.filesExisting),
                            stat(tr2('ملفات موجودة وتحتاج مراجعة', 'Files present that need review'), sum.needsReview),
                            stat(tr2('معتمد (ملف + ترخيص + مراجعتان بشريتان)', 'Approved (file + license + two human reviews)'), sum.approved),
                            const SizedBox(height: DS.s8),
                            Text(
                              tr2(
                                  'التسجيل الذي لم يُعتمد لا يسمعه الطفل. صوت الجهاز يُنتج على الجهاز نفسه وليس تسجيلاً بشرياً، وجودته لم يُحكم عليها بعد، وأصوات الحروف المنفردة لا تُقرأ به أبداً.',
                                  'A file that is not approved is not played for children. The device voice is synthesized on the phone, not a human recording, its quality has not been judged, and isolated letter sounds are never read with it.'),
                              style: DS.caption,
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: DS.s8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 4,
                      children: [
                        ChoiceChip(label: Text(tr2('كل اللغات', 'All languages')), selected: _lang == null, onSelected: (_) => setState(() => _lang = null)),
                        ChoiceChip(label: const Text('العربية'), selected: _lang == 'ar', onSelected: (_) => setState(() => _lang = 'ar')),
                        ChoiceChip(label: const Text('English'), selected: _lang == 'en', onSelected: (_) => setState(() => _lang = 'en')),
                      ],
                    ),
                    Wrap(
                      spacing: 8,
                      runSpacing: 4,
                      children: [
                        for (final k in HeardKind.values)
                          FilterChip(label: Text(heardLabel(k)), selected: _heard == k, onSelected: (v) => setState(() => _heard = v ? k : null)),
                        FilterChip(
                          label: Text(tr2('يحتاج مراجعة', 'Needs review')),
                          selected: _onlyNeedsReview,
                          onSelected: (v) => setState(() => _onlyNeedsReview = v),
                        ),
                      ],
                    ),
                    const SizedBox(height: DS.s8),
                    if (list.isEmpty)
                      Padding(
                        padding: const EdgeInsets.all(DS.s16),
                        child: Text(tr2('لا توجد عناصر لهذا الاختيار.', 'No items for this filter.'), textAlign: TextAlign.center),
                      ),
                    for (final s in list) _ItemTile(status: s),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _ItemTile extends StatelessWidget {
  final AudioItemStatus status;
  const _ItemTile({required this.status});

  @override
  Widget build(BuildContext context) {
    final a = status.asset;
    return Card(
      child: ListTile(
        leading: Icon(heardIcon(status.heard)),
        title: Text(a.text, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800)),
        subtitle: Text(
          '${kindLabel(a.kind)} · ${a.lang == 'ar' ? 'العربية' : 'English'}\n'
          '${heardLabel(status.heard)}\n'
          '${statusLabel(a.status)}'
          '${status.needsReview ? ' · ${tr2('يحتاج مراجعة', 'needs review')}' : ''}'
          ' · ${status.playable ? (status.dependsOnDevice ? tr2('يُشغَّل إن وُجد صوت على الجهاز', 'plays if the device has a voice') : tr2('قابل للتشغيل', 'playable')) : tr2('غير قابل للتشغيل', 'not playable')}',
          style: DS.caption,
        ),
        isThreeLine: true,
        trailing: Icon(Icons.circle, size: 12, color: statusColor(a.status)),
        onTap: () => showModalBottomSheet<void>(
          context: context,
          isScrollControlled: true,
          builder: (_) => _Detail(status: status),
        ),
      ),
    );
  }
}

class _Detail extends StatelessWidget {
  final AudioItemStatus status;
  const _Detail({required this.status});

  Widget _row(String k, String v) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 2),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(width: 130, child: Text(k, style: DS.caption)),
          Expanded(child: Text(v)),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final a = status.asset;
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(DS.s16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(a.text, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900)),
            const SizedBox(height: DS.s8),
            _row(tr2('النوع', 'Kind'), kindLabel(a.kind)),
            _row(tr2('ما يسمعه الطفل', 'What the child hears'), heardLabel(status.heard)),
            _row(tr2('الحالة', 'Status'), statusLabel(a.status)),
            _row(tr2('ملف موجود؟', 'File present?'), status.fileExists ? (a.file ?? '') : tr2('لا', 'No')),
            if (status.fileExists) _row(tr2('مصدر الملف', 'File source'), a.source == AudioSource.recorded ? tr2('تسجيل بشري (حسب بيانات الملف)', 'Human recording (per the file record)') : tr2('صوت اصطناعي مولَّد', 'Generated synthetic voice')),
            if (a.provider != null) _row(tr2('المزوّد', 'Provider'), a.provider!),
            _row(tr2('الترخيص', 'License'), (a.license ?? '').isEmpty ? tr2('غير مسجَّل', 'Not recorded') : a.license!),
            _row(tr2('مراجعة الصوت', 'Audio review'), '${a.audioReview.name}${(a.audioReviewer ?? '').isEmpty ? '' : ' · ${a.audioReviewer}'}'),
            _row(tr2('مراجعة النطق', 'Pronunciation review'), '${a.languageReview.name}${(a.languageReviewer ?? '').isEmpty ? '' : ' · ${a.languageReviewer}'}'),
            _row(tr2('يُقرأ بصوت الجهاز؟', 'Device voice allowed?'), a.deviceVoiceAllowed ? tr2('نعم، كبديل مؤقت', 'Yes, as a temporary stand-in') : tr2('لا (صوت منفرد)', 'No (isolated sound)')),
            const SizedBox(height: DS.s12),
            AudioButton(assetId: a.id, label: tr2('جرّب كما يسمعه الطفل', 'Play as the child hears it')),
            const AudioNotice(),
            const SizedBox(height: DS.s8),
            Text(tr2('نجاح التشغيل لا يعني أن الصوت طبيعي أو صحيح النطق: يحتاج إلى استماع بشري.', 'Successful playback does not mean the voice is natural or correct: a person must listen.'), style: DS.caption),
          ],
        ),
      ),
    );
  }
}
