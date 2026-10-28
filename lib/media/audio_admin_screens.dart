import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../design/tokens.dart';
import '../l10n/strings.dart';
import '../safe_json.dart';
import 'audio.dart';
import 'audio_manifest.dart';
import 'audio_review.dart';
import 'audio_service.dart';

String statusLabel(AssetStatus s) => switch (s) {
      AssetStatus.missing => tr2('بلا ملف', 'Missing'),
      AssetStatus.discovered => tr2('مصدر مرشّح', 'Discovered'),
      AssetStatus.generated => tr2('مولَّد', 'Generated'),
      AssetStatus.awaitingAudioReview => tr2('ينتظر مراجعة الصوت', 'Awaiting audio review'),
      AssetStatus.awaitingLanguageReview => tr2('ينتظر مراجعة اللغة', 'Awaiting language review'),
      AssetStatus.approved => tr2('معتمد', 'Approved'),
      AssetStatus.rejected => tr2('مرفوض', 'Rejected'),
      AssetStatus.needsRecheck => tr2('يحتاج إعادة فحص', 'Needs recheck'),
    };

Color statusColor(AssetStatus s) => switch (s) {
      AssetStatus.approved => DS.success,
      AssetStatus.rejected => DS.error,
      AssetStatus.needsRecheck => DS.warning,
      AssetStatus.missing => DS.inkSoft,
      _ => DS.accent,
    };

/// Admin tool: filter every spoken item, listen to its file, and record the two separate
/// human decisions (sound quality, pronunciation correctness) that an approval needs.
class AudioReviewScreen extends StatefulWidget {
  const AudioReviewScreen({super.key});

  @override
  State<AudioReviewScreen> createState() => _AudioReviewScreenState();
}

class _AudioReviewScreenState extends State<AudioReviewScreen> {
  String _lang = 'ar';
  AssetStatus? _status;
  AudioKind? _kind;
  String _q = '';

  @override
  void dispose() {
    AppAudio.stopSaying();
    super.dispose();
  }

  Future<void> _refresh() async {
    await AppAudio.reloadManifest();
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final m = AppAudio.manifest;
    final counts = m.byStatus;
    final list = [
      for (final a in m.all)
        if (a.lang == _lang &&
            (_status == null || a.status == _status) &&
            (_kind == null || a.kind == _kind) &&
            (_q.isEmpty || a.text.contains(_q) || a.id.contains(_q)))
          a,
    ];
    return Scaffold(
      appBar: AppBar(
        title: Text(tr2('مراجعة الصوت (للإدارة)', 'Audio review (admin)')),
        actions: [
          IconButton(
            tooltip: tr2('تصدير القرارات', 'Export decisions'),
            icon: const Icon(Icons.ios_share_rounded),
            onPressed: () async {
              final j = await AudioReviewStore.exportJson();
              await Clipboard.setData(ClipboardData(text: j));
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                    content: Text(tr2('نُسخت القرارات. ادمجها في assets/audio/manifest.json', 'Decisions copied. Merge them into assets/audio/manifest.json'))));
              }
            },
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(DS.s12),
            child: Text(
              tr2('معتمد: ${m.approvedCount} من ${m.total}. الاعتماد يحتاج قرارين بشريين منفصلين: جودة الصوت وصحة النطق.',
                  'Approved: ${m.approvedCount} of ${m.total}. An approval needs two separate human decisions: sound quality and pronunciation.'),
              style: DS.body,
            ),
          ),
          SizedBox(
            height: 48,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: DS.s8),
              children: [
                for (final l in ['ar', 'en'])
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ChoiceChip(label: Text(l == 'ar' ? 'العربية' : 'English'), selected: _lang == l, onSelected: (_) => setState(() => _lang = l)),
                  ),
                for (final s in AssetStatus.values)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: FilterChip(
                      label: Text('${statusLabel(s)} (${counts[s] ?? 0})'),
                      selected: _status == s,
                      onSelected: (on) => setState(() => _status = on ? s : null),
                    ),
                  ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(DS.s12, DS.s8, DS.s12, 0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(prefixIcon: const Icon(Icons.search), hintText: tr2('بحث بالنص أو الرمز', 'Search text or id'), isDense: true),
                    onChanged: (v) => setState(() => _q = v.trim()),
                  ),
                ),
                const SizedBox(width: DS.s8),
                DropdownButton<AudioKind?>(
                  value: _kind,
                  hint: Text(tr2('النوع', 'Kind')),
                  items: [
                    DropdownMenuItem(value: null, child: Text(tr2('الكل', 'All'))),
                    for (final k in AudioKind.values) DropdownMenuItem(value: k, child: Text(k.name)),
                  ],
                  onChanged: (v) => setState(() => _kind = v),
                ),
              ],
            ),
          ),
          Expanded(
            child: list.isEmpty
                ? Center(child: Text(tr2('لا توجد عناصر لهذا الاختيار', 'No items for this filter')))
                : ListView.builder(
                    itemCount: list.length,
                    itemBuilder: (context, i) {
                      final a = list[i];
                      return ListTile(
                        title: Text(a.text, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800)),
                        subtitle: Text('${a.id} · ${a.kind.name}${a.voice == null ? '' : ' · ${a.voice}'}', style: DS.caption),
                        trailing: Chip(
                          label: Text(statusLabel(a.status), style: TextStyle(color: statusColor(a.status), fontWeight: FontWeight.bold)),
                          side: BorderSide(color: statusColor(a.status)),
                        ),
                        onTap: () async {
                          await Navigator.push(context, MaterialPageRoute(builder: (_) => AudioItemReviewScreen(assetId: a.id)));
                          await _refresh();
                        },
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

/// One item: its facts, a play button for its file, and the review decisions.
class AudioItemReviewScreen extends StatefulWidget {
  final String assetId;
  const AudioItemReviewScreen({super.key, required this.assetId});

  @override
  State<AudioItemReviewScreen> createState() => _AudioItemReviewScreenState();
}

class _AudioItemReviewScreenState extends State<AudioItemReviewScreen> {
  final _name = TextEditingController();
  String? _error;

  @override
  void initState() {
    super.initState();
    AudioReviewStore.reviewerName().then((n) {
      if (mounted) _name.text = n;
    });
  }

  @override
  void dispose() {
    _name.dispose();
    AppAudio.stopSaying();
    super.dispose();
  }

  Future<void> _decide(String kind, Verdict v) async {
    final who = _name.text.trim();
    if (v != Verdict.pending && who.isEmpty) {
      setState(() => _error = tr2('اكتب اسم المراجع أولاً', 'Enter the reviewer name first'));
      return;
    }
    await AudioReviewStore.setReviewerName(who);
    await AudioReviewStore.decide(widget.assetId, kind: kind, verdict: v, reviewer: who);
    if (mounted) setState(() => _error = null);
  }

  Widget _row(String k, String? v) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 2),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(width: 120, child: Text(k, style: DS.caption)),
          Expanded(child: Text(v == null || v.isEmpty ? '—' : v, style: DS.body)),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final a = AppAudio.manifest.byId(widget.assetId);
    if (a == null) return Scaffold(appBar: AppBar(), body: Center(child: Text(tr2('العنصر غير موجود', 'Item not found'))));
    return Scaffold(
      appBar: AppBar(title: Text(a.id, style: const TextStyle(fontSize: 14))),
      body: ListView(
        padding: const EdgeInsets.all(DS.s16),
        children: [
          Center(child: Text(a.text, style: const TextStyle(fontSize: 64, fontWeight: FontWeight.w900))),
          Center(child: Chip(label: Text(statusLabel(a.status), style: TextStyle(color: statusColor(a.status), fontWeight: FontWeight.bold)))),
          const SizedBox(height: DS.s8),
          _PlayRow(asset: a),
          const SizedBox(height: DS.s12),
          _row(tr2('اللغة / اللهجة', 'Language / locale'), '${a.lang} / ${a.locale}'),
          _row(tr2('النوع', 'Kind'), a.kind.name),
          _row(tr2('المصدر', 'Source'), a.source.name),
          _row(tr2('المزوّد', 'Provider'), a.provider),
          _row(tr2('الصوت', 'Voice'), a.voice),
          _row(tr2('الملف', 'File'), a.file),
          _row(tr2('الترخيص', 'License'), a.license),
          _row(tr2('الإصدار', 'Version'), '${a.version}'),
          _row(tr2('ملاحظة النطق', 'Pronunciation note'), a.note),
          if (a.syntheticNotAllowed)
            Padding(
              padding: const EdgeInsets.only(top: DS.s8),
              child: Text(
                tr2('صوت اصطناعي لا يصلح نموذجاً لصوت حرف منفرد: لا يمكن اعتماده. سجّله بصوت بشري.',
                    'A synthetic voice cannot model an isolated sound: it cannot be approved. Record it with a human voice.'),
                style: DS.body.copyWith(color: DS.error),
              ),
            ),
          if (!a.hasFile)
            Padding(
              padding: const EdgeInsets.only(top: DS.s8),
              child: Text(
                tr2('لا يوجد ملف. سجّله (docs/AUDIO_RECORDING_SHEET.csv) أو ولّده بـ tools/audio_gen ثم أضفه إلى manifest.json.',
                    'No file yet. Record it (docs/AUDIO_RECORDING_SHEET.csv) or generate it with tools/audio_gen, then add it to manifest.json.'),
                style: DS.caption,
              ),
            ),
          const Divider(height: DS.s32),
          TextField(
            controller: _name,
            decoration: InputDecoration(labelText: tr2('اسم المراجع', 'Reviewer name'), errorText: _error),
          ),
          const SizedBox(height: DS.s12),
          _Decision(
            title: tr2('جودة الصوت (وضوح، طبيعية، بلا قطع أو تشويه)', 'Sound quality (clear, natural, no clipping or distortion)'),
            verdict: a.audioReview,
            reviewer: a.audioReviewer,
            enabled: a.hasFile,
            onDecide: (v) => _decide('audio', v),
          ),
          _Decision(
            title: tr2('صحة النطق (مراجع لغوي مؤهل)', 'Pronunciation correctness (a qualified language reviewer)'),
            verdict: a.languageReview,
            reviewer: a.languageReviewer,
            enabled: a.hasFile,
            onDecide: (v) => _decide('language', v),
          ),
          if (a.approvedAt != null) Text(tr2('آخر قرار: ${a.approvedAt}', 'Last decision: ${a.approvedAt}'), style: DS.caption),
          Text(
            tr2('الاعتماد النهائي يحتاج ملفاً وترخيصاً مؤكداً وقرارين من مراجعين مسمّين. هذه الشاشة لا تعتمد شيئاً من تلقاء نفسها.',
                'Final approval needs a file, a confirmed license and two decisions by named reviewers. This screen never approves anything by itself.'),
            style: DS.caption,
          ),
        ],
      ),
    );
  }
}

class _PlayRow extends StatelessWidget {
  final AudioAsset asset;
  const _PlayRow({required this.asset});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<AudioState>(
      valueListenable: AppAudio.service.state,
      builder: (context, s, _) {
        final mine = s.assetId == asset.id;
        final playing = mine && s.status == AudioStatus.playing;
        return Wrap(
          spacing: DS.s8,
          alignment: WrapAlignment.center,
          children: [
            FilledButton.icon(
              onPressed: asset.hasFile ? () => playing ? AppAudio.service.stop() : AppAudio.service.play(asset.id, preview: true) : null,
              icon: Icon(playing ? Icons.stop_rounded : Icons.play_arrow_rounded),
              label: Text(playing ? tr2('إيقاف', 'Stop') : tr2('تشغيل الملف', 'Play the file')),
            ),
            OutlinedButton.icon(
              onPressed: asset.hasFile ? () => AppAudio.service.play(asset.id, preview: true, slow: true) : null,
              icon: const Icon(Icons.slow_motion_video_rounded),
              label: Text(tr2('ببطء', 'Slowly')),
            ),
            if (mine && s.status == AudioStatus.error)
              Text(tr2('تعذّر التشغيل', 'Could not play'), style: DS.body.copyWith(color: DS.error)),
          ],
        );
      },
    );
  }
}

class _Decision extends StatelessWidget {
  final String title;
  final Verdict verdict;
  final String? reviewer;
  final bool enabled;
  final void Function(Verdict) onDecide;
  const _Decision({required this.title, required this.verdict, required this.reviewer, required this.enabled, required this.onDecide});

  @override
  Widget build(BuildContext context) {
    final label = switch (verdict) {
      Verdict.approved => tr2('مقبول', 'Approved'),
      Verdict.rejected => tr2('مرفوض', 'Rejected'),
      Verdict.pending => tr2('بانتظار القرار', 'Pending'),
    };
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(DS.s12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: DS.heading.copyWith(fontSize: 16)),
            Text('$label${(reviewer ?? '').isEmpty ? '' : ' · $reviewer'}', style: DS.caption),
            const SizedBox(height: DS.s8),
            Wrap(spacing: DS.s8, children: [
              FilledButton(onPressed: enabled ? () => onDecide(Verdict.approved) : null, child: Text(tr2('قبول', 'Approve'))),
              OutlinedButton(onPressed: enabled ? () => onDecide(Verdict.rejected) : null, child: Text(tr2('رفض', 'Reject'))),
              TextButton(onPressed: enabled ? () => onDecide(Verdict.pending) : null, child: Text(tr2('إعادة', 'Reset'))),
            ]),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------
// Voice comparison

/// One real audio sample of a candidate voice (made offline by tools/audio_gen/compare.py).
class VoiceSample {
  final String id; // phrase id
  final String category;
  final String lang;
  final String text;
  final String provider;
  final String voiceId;
  final String locale;
  final String file;
  final bool temporary;
  const VoiceSample(this.id, this.category, this.lang, this.text, this.provider, this.voiceId, this.locale, this.file, this.temporary);

  factory VoiceSample.fromJson(Map<String, dynamic> j) => VoiceSample(
        j['id'] as String,
        j['category'] as String? ?? '',
        j['lang'] as String,
        j['text'] as String,
        j['provider'] as String,
        j['voiceId'] as String,
        j['locale'] as String,
        j['file'] as String,
        j['temporary'] as bool? ?? true,
      );
}

Future<List<VoiceSample>> loadVoiceSamples({AssetBundle? bundle}) async {
  try {
    final raw = await (bundle ?? rootBundle).loadString('assets/audio/comparison/index.json');
    final j = jsonDecode(raw) as Map<String, dynamic>;
    return [for (final e in (j['samples'] as List? ?? [])) VoiceSample.fromJson((e as Map).cast<String, dynamic>())];
  } catch (_) {
    return [];
  }
}

/// Developer/parent tool: play the SAME phrase through each candidate voice, listen, and record
/// a verdict and notes. Only real files are offered; the device voice is listed as a temporary baseline.
class VoiceComparisonScreen extends StatefulWidget {
  final Future<List<VoiceSample>> Function()? loader;
  const VoiceComparisonScreen({super.key, this.loader});

  @override
  State<VoiceComparisonScreen> createState() => _VoiceComparisonScreenState();
}

class _VoiceComparisonScreenState extends State<VoiceComparisonScreen> {
  static const _prefsKey = 'voice_compare';
  late final Future<List<VoiceSample>> _samples = (widget.loader ?? loadVoiceSamples)();
  String _lang = 'ar';
  Map<String, dynamic> _marks = {};

  @override
  void initState() {
    super.initState();
    SharedPreferences.getInstance().then((p) {
      if (mounted) setState(() => _marks = decodeMap(p, _prefsKey));
    });
  }

  @override
  void dispose() {
    AppAudio.stopSaying();
    super.dispose();
  }

  Future<void> _mark(String key, {String? verdict, String? note}) async {
    final cur = {...((_marks[key] as Map?)?.cast<String, dynamic>() ?? {})};
    if (verdict != null) cur['verdict'] = verdict;
    if (note != null) cur['note'] = note;
    setState(() => _marks = {..._marks, key: cur});
    await (await SharedPreferences.getInstance()).setString(_prefsKey, jsonEncode(_marks));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(tr2('مقارنة الأصوات', 'Voice comparison')),
        actions: [
          IconButton(
            tooltip: tr2('نسخ الملاحظات', 'Copy the notes'),
            icon: const Icon(Icons.ios_share_rounded),
            onPressed: () => Clipboard.setData(ClipboardData(text: const JsonEncoder.withIndent('  ').convert(_marks))),
          ),
        ],
      ),
      body: FutureBuilder<List<VoiceSample>>(
        future: _samples,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          final all = (snap.data ?? []).where((s) => s.lang == _lang).toList();
          final phrases = <String, List<VoiceSample>>{};
          for (final s in all) {
            phrases.putIfAbsent(s.id, () => []).add(s);
          }
          return ListView(
            padding: const EdgeInsets.all(DS.s12),
            children: [
              Wrap(spacing: DS.s8, children: [
                for (final l in ['ar', 'en'])
                  ChoiceChip(label: Text(l == 'ar' ? 'العربية' : 'English'), selected: _lang == l, onSelected: (_) => setState(() => _lang = l)),
              ]),
              const SizedBox(height: DS.s8),
              Text(
                tr2('كل عيّنة هنا ملف صوتي حقيقي ولّدته أداة tools/audio_gen من مزوّد معروف، وهي عيّنة اختبار مؤقتة وليست أصلاً معتمداً. صوت الجهاز مُدرج كمرجع مؤقت.',
                    'Every sample here is a real audio file made by tools/audio_gen from a named provider. It is a TEMPORARY TEST, not an approved asset. The device voice is listed as a temporary baseline.'),
                style: DS.caption,
              ),
              if (phrases.isEmpty)
                Padding(
                  padding: const EdgeInsets.all(DS.s24),
                  child: Text(
                    tr2('لا توجد عيّنات مولَّدة بعد. شغّل tools/audio_gen/compare.py بمفتاحك (التعليمات في docs/AUDIO_PROVIDERS.md). صوت الجهاز أدناه يعمل دائماً.',
                        'No generated samples yet. Run tools/audio_gen/compare.py with your key (see docs/AUDIO_PROVIDERS.md). The device voice below always works.'),
                    style: DS.body,
                  ),
                ),
              for (final e in phrases.entries) _PhraseCard(samples: e.value, marks: _marks, onMark: _mark),
              if (phrases.isEmpty) _PhraseCard(samples: const [], lang: _lang, marks: _marks, onMark: _mark),
            ],
          );
        },
      ),
    );
  }
}

class _PhraseCard extends StatelessWidget {
  final List<VoiceSample> samples;
  final String? lang;
  final Map<String, dynamic> marks;
  final Future<void> Function(String key, {String? verdict, String? note}) onMark;
  const _PhraseCard({required this.samples, this.lang, required this.marks, required this.onMark});

  @override
  Widget build(BuildContext context) {
    final text = samples.isEmpty ? (lang == 'ar' ? 'قَمَر' : 'moon') : samples.first.text;
    final l = samples.isEmpty ? lang! : samples.first.lang;
    return Card(
      margin: const EdgeInsets.symmetric(vertical: DS.s8),
      child: Padding(
        padding: const EdgeInsets.all(DS.s12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(text, style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900)),
            if (samples.isNotEmpty) Text(samples.first.category, style: DS.caption),
            const SizedBox(height: DS.s8),
            _VoiceRow(
              title: tr2('صوت الجهاز (مؤقت)', 'Device voice (temporary)'),
              subtitle: l == 'ar' ? 'flutter_tts · ar-SA/ar' : 'flutter_tts · en-US/en',
              markKey: 'device|$l|$text',
              marks: marks,
              onMark: onMark,
              onPlay: () => AppAudio.service.playText(text, lang: l),
              stateId: null,
              stateText: text,
            ),
            for (final s in samples)
              _VoiceRow(
                title: s.voiceId,
                subtitle: '${s.provider} · ${s.locale}${s.temporary ? ' · ${tr2('عيّنة اختبار مؤقتة', 'TEMPORARY TEST SAMPLE')}' : ''}',
                markKey: '${s.provider}|${s.voiceId}|${s.id}',
                marks: marks,
                onMark: onMark,
                onPlay: () => AppAudio.service.previewFile(s.file, label: s.voiceId),
                stateId: 'file:${s.file}',
                stateText: null,
              ),
          ],
        ),
      ),
    );
  }
}

class _VoiceRow extends StatelessWidget {
  final String title, subtitle, markKey;
  final Map<String, dynamic> marks;
  final Future<void> Function(String key, {String? verdict, String? note}) onMark;
  final VoidCallback onPlay;
  final String? stateId;
  final String? stateText;
  const _VoiceRow({
    required this.title,
    required this.subtitle,
    required this.markKey,
    required this.marks,
    required this.onMark,
    required this.onPlay,
    required this.stateId,
    required this.stateText,
  });

  @override
  Widget build(BuildContext context) {
    final mark = (marks[markKey] as Map?)?.cast<String, dynamic>() ?? {};
    final verdict = mark['verdict'] as String?;
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: DS.s8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [
            ValueListenableBuilder<AudioState>(
              valueListenable: AppAudio.service.state,
              builder: (context, s, _) {
                final mine = stateId != null ? s.assetId == stateId : (s.text == stateText);
                final playing = mine && s.status == AudioStatus.playing;
                final loading = mine && s.status == AudioStatus.loading;
                final bad = mine && s.status == AudioStatus.error;
                return IconButton.filled(
                  tooltip: tr2('تشغيل', 'Play'),
                  onPressed: () => playing ? AppAudio.service.stop() : onPlay(),
                  icon: loading
                      ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5))
                      : Icon(bad ? Icons.volume_off_rounded : (playing ? Icons.stop_rounded : Icons.play_arrow_rounded)),
                );
              },
            ),
            const SizedBox(width: DS.s8),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(title, style: DS.heading.copyWith(fontSize: 16)), Text(subtitle, style: DS.caption)])),
          ]),
          Wrap(spacing: 6, children: [
            for (final (v, label) in [('ok', tr2('مقبولة', 'Acceptable')), ('bad', tr2('غير مقبولة', 'Unacceptable')), ('review', tr2('تحتاج مراجعة', 'Needs review'))])
              ChoiceChip(label: Text(label), selected: verdict == v, onSelected: (_) => onMark(markKey, verdict: v)),
          ]),
          TextFormField(
            initialValue: mark['note'] as String? ?? '',
            decoration: InputDecoration(isDense: true, hintText: tr2('ملاحظات النطق', 'Pronunciation notes')),
            onChanged: (v) => onMark(markKey, note: v),
          ),
        ],
      ),
    );
  }
}
