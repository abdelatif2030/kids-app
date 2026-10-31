import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'design/components.dart';
import 'design/layout.dart';
import 'design/tokens.dart';
import 'l10n/strings.dart';
import 'lessons/lesson_rules.dart';
import 'lessons/lesson_store.dart';
import 'main.dart' show Video, loadVideos;
import 'player_screen.dart';

/// The parent's own list of videos hidden from the children on this device (`video_hidden`). It can only take videos
/// away: it can never add a video that is not in the whitelist, and it never overrides a `pending` or `rejected` status.
class VideoControls {
  VideoControls._();
  static const key = 'video_hidden';

  static Future<Set<String>> hidden() async {
    try {
      final p = await SharedPreferences.getInstance();
      return {for (final e in jsonDecode(p.getString(key) ?? '[]') as List<dynamic>) '$e'};
    } catch (_) {
      return {};
    }
  }

  static Future<void> setHidden(String youtubeId, bool hide) async {
    final set = await hidden();
    hide ? set.add(youtubeId) : set.remove(youtubeId);
    final p = await SharedPreferences.getInstance();
    await p.setString(key, jsonEncode(set.toList()..sort()));
  }
}

/// What a parent sees for one video and whether children can see it right now.
enum VideoVisibility { visible, hiddenByParent, awaitingApproval, pending, rejected, rejectedByParent }

VideoVisibility visibilityOf(Video v, Set<String> hidden, [Set<String>? approved, Set<String>? rejectedByParent]) {
  if (v.approval == 'pending') return VideoVisibility.pending;
  if (v.approval == 'rejected') return VideoVisibility.rejected;
  if (rejectedByParent != null && rejectedByParent.contains(v.youtubeId)) return VideoVisibility.rejectedByParent;
  if (approved != null && !approved.contains(v.youtubeId)) return VideoVisibility.awaitingApproval;
  return hidden.contains(v.youtubeId) ? VideoVisibility.hiddenByParent : VideoVisibility.visible;
}

String bandLabel(LessonBand b) => switch (b) {
      LessonBand.toddler => tr2('١–٢ سنة', 'Ages 1-2'),
      LessonBand.preschool => tr2('٣–٤ سنوات', 'Ages 3-4'),
      LessonBand.early => tr2('٥–٦ سنوات', 'Ages 5-6'),
    };

String lessonCategoryLabel(String c) => switch (c) {
      'Learning' => tr2('تعلّم', 'Learning'),
      'Story' => tr2('قصص', 'Stories'),
      'Fun' => tr2('مرح', 'Fun'),
      'Calm' => tr2('هدوء', 'Calm'),
      _ => c,
    };

/// Parent screen: every lesson, its age band and status, and the controls: preview, approve, disable, add by link, remove.
/// Nothing reaches a child until a parent approves it here, and a lesson can only be approved after it was opened in the
/// preview player. The app has not watched or verified any of these videos itself.
class VideoReviewScreen extends StatefulWidget {
  const VideoReviewScreen({super.key});

  @override
  State<VideoReviewScreen> createState() => _VideoReviewState();
}

class _VideoReviewState extends State<VideoReviewScreen> {
  List<Video> _videos = const [];
  Set<String> _hidden = {};
  Set<String> _approved = {};
  Set<String> _previewed = {};
  Set<String> _rejected = {};
  Map<String, LessonReview> _reviews = {};
  bool _loading = true;
  String? _error;
  String _query = '';
  LessonBand? _band;
  String? _category;
  VideoVisibility? _status; // null = every status

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final v = await loadVideos(all: true);
      final h = await VideoControls.hidden();
      final a = await LessonStore.approved();
      final pv = await LessonStore.previewed();
      final rv = await LessonStore.reviews();
      final rj = await LessonStore.rejected();
      if (mounted) {
        setState(() {
          _videos = v;
          _hidden = h;
          _approved = a;
          _previewed = pv;
          _reviews = rv;
          _rejected = rj;
          _loading = false;
          _error = null;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() {
          _loading = false;
          _error = tr2('تعذّر تحميل قائمة الفيديوهات', 'Could not load the video list');
        });
      }
    }
  }

  Future<void> _preview(Video v) async {
    await Navigator.push<bool>(context, MaterialPageRoute(builder: (_) => PlayerScreen(video: v, preview: true)));
    await LessonStore.markPreviewed(v.youtubeId);
    await _load();
  }

  Future<void> _withdraw(Video v) async {
    await LessonStore.setApproved(v.youtubeId, false);
    await _load();
  }

  Future<void> _reopen(Video v) async {
    await LessonStore.reopen(v.youtubeId);
    await _load();
  }

  /// The review sheet: the lesson's details, the five checks, and Approve or Reject. Nothing is decided until a button is pressed.
  Future<void> _review(Video v) async {
    await showDialog<void>(context: context, builder: (_) => _ReviewDialog(video: v));
    await _load();
  }

  Future<void> _remove(Video v) async {
    final yes = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(tr2('حذف هذا الدرس؟', 'Remove this lesson?')),
        content: Text(v.title),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(tr2('إلغاء', 'Cancel'))),
          FilledButton(key: const ValueKey('confirm_remove'), onPressed: () => Navigator.pop(context, true), child: Text(tr2('احذف', 'Remove'))),
        ],
      ),
    );
    if (yes == true) {
      await LessonStore.remove(v.youtubeId);
      await _load();
    }
  }

  Future<void> _add() async {
    final added = await showDialog<bool>(context: context, builder: (_) => _AddLessonDialog(known: {for (final v in _videos) v.youtubeId}));
    if (added == true) await _load();
  }

  @override
  Widget build(BuildContext context) {
    final shown = [
      for (final v in _videos)
        if ((_band == null || lessonInBand(v.minAge, v.maxAge, _band!)) &&
            (_category == null || v.category == _category) &&
            (_status == null || (_status == VideoVisibility.awaitingApproval ? {VideoVisibility.awaitingApproval, VideoVisibility.pending}.contains(visibilityOf(v, _hidden, _approved, _rejected)) : visibilityOf(v, _hidden, _approved, _rejected) == _status)) &&
            v.minAge <= 6 &&
            (_query.isEmpty || v.title.toLowerCase().contains(_query.toLowerCase())))
          v,
    ];
    final visible = _videos.where((v) => visibilityOf(v, _hidden, _approved, _rejected) == VideoVisibility.visible).length;
    final notPreviewed = _videos.where((v) => v.minAge <= 6 && !_previewed.contains(v.youtubeId)).length;
    final inReview = _videos.where((v) => _reviews[v.youtubeId]?.status == ReviewStatus.previewed).length;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('مكتبة الدروس', 'Lesson library'))),
      floatingActionButton: FloatingActionButton.extended(key: const ValueKey('add_lesson'), onPressed: _add, icon: const Icon(Icons.add_link_rounded), label: Text(tr2('أضف درساً برابط', 'Add a lesson by link'))),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? ErrorState(message: _error, onRetry: _load)
              : CenteredList(padding: const EdgeInsets.fromLTRB(16, 16, 16, 96), children: [
                  Text(
                    tr2(
                      'لا يرى طفلك أي فيديو حتى توافق عليه هنا بعد أن تشاهده في المعاينة. لا يوجد بحث حر ولا اقتراحات ولا فيديوهات خارج هذه القائمة. التطبيق لم يشاهد هذه الفيديوهات ولم يتحقق منها بنفسه: المراجعة عليك.',
                      'Your child sees no video until you approve it here after watching it in the preview. There is no free search, no suggestions and nothing outside this list. The app has not watched or verified these videos itself: the review is yours.',
                    ),
                    style: DS.caption,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    key: const ValueKey('video_counts'),
                    tr2('${_videos.length} درس · $visible ظاهر للأطفال · ${_hidden.length} معطّل', '${_videos.length} lessons · $visible visible to children · ${_hidden.length} disabled'),
                    style: DS.heading,
                  ),
                  Text(
                    key: const ValueKey('review_counts'),
                    tr2('لم تُعاين: $notPreviewed · عاينتها ولم تقرّر: $inReview · موافَق عليها: ${_approved.length} · مرفوضة: ${_rejected.length}', 'Not previewed: $notPreviewed · Previewed, undecided: $inReview · Approved: ${_approved.length} · Rejected: ${_rejected.length}'),
                    style: DS.caption,
                  ),
                  const SizedBox(height: 8),
                  TextField(
                    key: const ValueKey('video_search'),
                    onChanged: (v) => setState(() => _query = v),
                    decoration: InputDecoration(prefixIcon: const Icon(Icons.search_rounded), hintText: tr2('ابحث في العناوين', 'Search titles'), border: OutlineInputBorder(borderRadius: BorderRadius.circular(24))),
                  ),
                  Wrap(spacing: 6, children: [
                    ChoiceChip(label: Text(tr2('كل الأعمار', 'All ages')), selected: _band == null, onSelected: (_) => setState(() => _band = null)),
                    for (final b in LessonBand.values) ChoiceChip(key: ValueKey('band_${b.name}'), label: Text(bandLabel(b)), selected: _band == b, onSelected: (_) => setState(() => _band = _band == b ? null : b)),
                  ]),
                  Wrap(spacing: 6, children: [
                    for (final (st, label) in [
                      (VideoVisibility.awaitingApproval, tr2('بانتظار الموافقة', 'Waiting for approval')),
                      (VideoVisibility.visible, tr2('متاحة للطفل الآن', 'Available to the child')),
                      (VideoVisibility.rejectedByParent, tr2('مرفوضة', 'Rejected')),
                      (VideoVisibility.hiddenByParent, tr2('معطّلة', 'Disabled')),
                    ])
                      ChoiceChip(key: ValueKey('status_${st.name}'), label: Text(label), selected: _status == st, onSelected: (_) => setState(() => _status = _status == st ? null : st)),
                  ]),
                  Wrap(spacing: 6, children: [
                    for (final c in kLessonCategories) ChoiceChip(key: ValueKey('cat_$c'), label: Text(lessonCategoryLabel(c)), selected: _category == c, onSelected: (_) => setState(() => _category = _category == c ? null : c)),
                  ]),
                  if (shown.isEmpty) EmptyState(icon: Icons.video_library_outlined, title: tr2('لا توجد دروس مطابقة', 'No matching lessons')),
                  for (final v in shown) _tile(v),
                ]),
    );
  }

  Widget _tile(Video v) {
    final vis = visibilityOf(v, _hidden, _approved, _rejected);
    final locked = vis == VideoVisibility.pending || vis == VideoVisibility.rejected;
    final status = switch (vis) {
      VideoVisibility.visible => tr2('ظاهر للأطفال', 'Visible to children'),
      VideoVisibility.hiddenByParent => tr2('معطّل بواسطتك', 'Disabled by you'),
      VideoVisibility.awaitingApproval => tr2('بانتظار موافقتك: لا يظهر', 'Waiting for your approval: not shown'),
      VideoVisibility.pending => tr2('بانتظار المراجعة: لا يظهر', 'Pending review: not shown'),
      VideoVisibility.rejected => tr2('مرفوض: لا يظهر', 'Rejected: not shown'),
      VideoVisibility.rejectedByParent => tr2('رفضتَه: لا يظهر', 'Rejected by you: not shown'),
    };
    final review = _reviews[v.youtubeId];
    final reviewDate = review == null ? null : '\u2066${review.at.year}-${review.at.month.toString().padLeft(2, '0')}-${review.at.day.toString().padLeft(2, '0')}\u2069';
    final isApproved = _approved.contains(v.youtubeId);
    final canApprove = _previewed.contains(v.youtubeId);
    final isRejected = _rejected.contains(v.youtubeId);
    return Card(
      key: ValueKey('video_${v.youtubeId}'),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(v.title, maxLines: 2, overflow: TextOverflow.ellipsis, style: DS.heading),
          Text(
            '${tr2('الأعمار', 'Ages')} ${v.minAge}–${v.maxAge < 6 || v.maxAge > 6 ? v.maxAge : 6} · ${lessonCategoryLabel(v.category)} · ${v.language == 'ar' ? tr2('عربي', 'Arabic') : v.language == 'en' ? tr2('إنجليزي', 'English') : v.language}'
            '${v.origin == 'parent' ? ' · ${tr2('أضفته أنت', 'added by you')}' : ''}',
            style: DS.caption,
          ),
          Text(status, key: ValueKey('status_${v.youtubeId}'), style: DS.caption),
          if (reviewDate != null && review!.status != ReviewStatus.previewed)
            Text(review.status == ReviewStatus.approved ? tr2('وافقتَ بتاريخ $reviewDate (هذا الجهاز)', 'Approved on $reviewDate (this device)') : tr2('رفضتَ بتاريخ $reviewDate (هذا الجهاز)', 'Rejected on $reviewDate (this device)'), key: ValueKey('reviewed_${v.youtubeId}'), style: DS.caption),
          if (v.verification == 'unverified' && v.origin == 'bundled')
            Text(tr2('مرشّح غير مُتحقَّق منه: لم يشاهده التطبيق أو فريقه.', 'Unverified candidate: neither the app nor its team has watched it.'), key: ValueKey('unverified_${v.youtubeId}'), style: DS.caption),
          if (!locked && !canApprove && !isApproved) Text(tr2('لم تُفتح المعاينة بعد.', 'Not previewed yet.'), style: DS.caption),
          const SizedBox(height: 6),
          Wrap(spacing: 8, runSpacing: 4, children: [
            OutlinedButton.icon(key: ValueKey('preview_${v.youtubeId}'), onPressed: locked ? null : () => _preview(v), icon: const Icon(Icons.play_circle_outline_rounded), label: Text(tr2('معاينة', 'Preview'))),
            if (!locked && !isApproved && !isRejected)
              FilledButton.icon(key: ValueKey('approve_${v.youtubeId}'), onPressed: canApprove ? () => _review(v) : null, icon: const Icon(Icons.fact_check_rounded), label: Text(tr2('راجع وقرّر', 'Review and decide'))),
            if (!locked && isRejected) OutlinedButton(key: ValueKey('reopen_${v.youtubeId}'), onPressed: () => _reopen(v), child: Text(tr2('أعد فتح المراجعة', 'Reopen review'))),
            if (!locked && isApproved)
              OutlinedButton.icon(
                key: ValueKey('toggle_${v.youtubeId}'),
                onPressed: () async {
                  await VideoControls.setHidden(v.youtubeId, !_hidden.contains(v.youtubeId));
                  await _load();
                },
                icon: Icon(_hidden.contains(v.youtubeId) ? Icons.visibility_rounded : Icons.visibility_off_rounded),
                label: Text(_hidden.contains(v.youtubeId) ? tr2('فعّل', 'Enable') : tr2('عطّل', 'Disable')),
              ),
            if (isApproved) TextButton(key: ValueKey('unapprove_${v.youtubeId}'), onPressed: () => _withdraw(v), child: Text(tr2('ألغِ الموافقة', 'Withdraw approval'))),
            if (v.origin == 'parent') TextButton.icon(key: ValueKey('remove_${v.youtubeId}'), onPressed: () => _remove(v), icon: const Icon(Icons.delete_outline_rounded), label: Text(tr2('احذف', 'Remove'))),
          ]),
        ]),
      ),
    );
  }
}

class _ReviewDialog extends StatefulWidget {
  final Video video;
  const _ReviewDialog({required this.video});

  @override
  State<_ReviewDialog> createState() => _ReviewDialogState();
}

class _ReviewDialogState extends State<_ReviewDialog> {
  final List<bool> _c = List.filled(kReviewChecklistSize, false);

  List<String> get _items => [
        tr2('شاهدتُ الدرس كاملاً بالصوت.', 'I watched the whole lesson with sound.'),
        tr2('يناسب عمر طفلي (١-٦) ومستواه.', "It suits my child's age (1-6) and level."),
        tr2('لغته مناسبة وواضحة.', 'Its language is right and clear.'),
        tr2('لا إعلانات أو روابط أو اقتراحات لا أريدها، ولا شيء مخيف.', 'No ads, links or suggestions I do not want, and nothing frightening.'),
        tr2('المحتوى مناسب لقيمنا وقيمته التعليمية جيدة.', 'The content suits our values and has real learning value.'),
      ];

  @override
  Widget build(BuildContext context) {
    final v = widget.video;
    final all = _c.every((x) => x);
    return AlertDialog(
      key: const ValueKey('review_sheet'),
      scrollable: true,
      title: Text(tr2('مراجعة الدرس', 'Review this lesson')),
      content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(v.title, style: DS.heading),
        Text('${tr2('الأعمار', 'Ages')} ${v.minAge}-${v.maxAge} · ${lessonCategoryLabel(v.category)} · ${v.language == 'ar' ? tr2('عربي', 'Arabic') : tr2('إنجليزي', 'English')} · ${v.subject}', style: DS.caption),
        const SizedBox(height: 4),
        Text(tr2('الرابط الدقيق (للتحقق من القناة في المتصفح، لا يفتحه التطبيق):', 'Exact video address (to check the channel in your own browser; the app never opens it):'), style: DS.caption),
        SelectableText('https://www.youtube.com/watch?v=${v.youtubeId}', key: const ValueKey('review_url')),
        const SizedBox(height: 4),
        Text(
          v.verification == 'unverified' && v.origin == 'bundled'
              ? tr2('مرشّح غير مُتحقَّق منه. قرارك هو المراجعة الوحيدة؛ يُحفظ التاريخ على هذا الجهاز فقط.', 'An unverified candidate. Your decision is the only review; the date is saved on this device only.')
              : tr2('أضفتَه أنت. قرارك هو المراجعة الوحيدة.', 'You added it. Your decision is the only review.'),
          style: DS.caption,
        ),
        for (var i = 0; i < _items.length; i++)
          CheckboxListTile(key: ValueKey('chk_$i'), dense: true, contentPadding: EdgeInsets.zero, value: _c[i], onChanged: (x) => setState(() => _c[i] = x ?? false), title: Text(_items[i])),
      ]),
      actions: [
        TextButton(key: const ValueKey('sheet_cancel'), onPressed: () => Navigator.pop(context), child: Text(tr2('لاحقاً', 'Later'))),
        TextButton(
          key: const ValueKey('sheet_reject'),
          onPressed: () async {
            await LessonStore.reject(v.youtubeId, checklist: List.of(_c));
            if (context.mounted) Navigator.pop(context);
          },
          child: Text(tr2('ارفض', 'Reject')),
        ),
        FilledButton(
          key: const ValueKey('sheet_approve'),
          onPressed: all
              ? () async {
                  await LessonStore.setApproved(v.youtubeId, true, checklist: List.of(_c));
                  if (context.mounted) Navigator.pop(context);
                }
              : null,
          child: Text(tr2('وافق: يظهر للطفل', 'Approve: show to the child')),
        ),
      ],
    );
  }
}

class _AddLessonDialog extends StatefulWidget {
  final Set<String> known;
  const _AddLessonDialog({required this.known});

  @override
  State<_AddLessonDialog> createState() => _AddLessonDialogState();
}

class _AddLessonDialogState extends State<_AddLessonDialog> {
  final _link = TextEditingController();
  final _title = TextEditingController();
  RangeValues _ages = const RangeValues(3, 4);
  String _language = 'ar';
  String _category = 'Learning';
  String? _problem;

  @override
  void dispose() {
    _link.dispose();
    _title.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    final id = parseYoutubeUrl(_link.text);
    final why = validateNewLesson(id: id, title: _title.text, minAge: _ages.start.round(), maxAge: _ages.end.round(), language: _language, category: _category, knownIds: widget.known);
    if (why != null) {
      setState(() => _problem = switch (why) {
            'link' => tr2('الرابط لا يشير إلى فيديو واحد على يوتيوب. القوائم والقنوات والبحث غير مقبولة.', 'The link is not one exact YouTube video. Playlists, channels and searches are not accepted.'),
            'duplicate' => tr2('هذا الفيديو موجود في القائمة.', 'This video is already in the list.'),
            'title' => tr2('اكتب عنواناً (حتى 80 حرفاً).', 'Write a title (up to 80 characters).'),
            'ages' => tr2('الأعمار من 1 إلى 6.', 'Ages must be 1 to 6.'),
            _ => tr2('تحقق من الحقول.', 'Check the fields.'),
          });
      return;
    }
    final ok = await LessonStore.add(Video(youtubeId: id!, title: _title.text.trim(), category: _category, minAge: _ages.start.round(), maxAge: _ages.end.round(), language: _language, origin: 'parent'));
    if (!mounted) return;
    if (!ok) {
      setState(() => _problem = tr2('تعذّر الحفظ (الحد الأقصى 60 درساً).', 'Could not save (at most 60 added lessons).'));
      return;
    }
    Navigator.pop(context, true);
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      scrollable: true,
      title: Text(tr2('أضف درساً', 'Add a lesson')),
      content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(tr2('يُحفظ كغير موافَق عليه. عليك معاينته ثم الموافقة.', 'It is saved as NOT approved. You must preview it and then approve it.'), style: DS.caption),
        TextField(key: const ValueKey('lesson_link'), controller: _link, keyboardType: TextInputType.url, decoration: InputDecoration(labelText: tr2('رابط الفيديو على يوتيوب', 'YouTube video link'))),
        TextField(key: const ValueKey('lesson_title'), controller: _title, maxLength: 80, decoration: InputDecoration(labelText: tr2('العنوان', 'Title'))),
        Text('${tr2('الأعمار', 'Ages')}: ${_ages.start.round()}–${_ages.end.round()}'),
        RangeSlider(key: const ValueKey('lesson_ages'), values: _ages, min: 1, max: 6, divisions: 5, onChanged: (v) => setState(() => _ages = v)),
        Wrap(spacing: 8, children: [
          for (final l in ['ar', 'en']) ChoiceChip(key: ValueKey('lang_$l'), label: Text(l == 'ar' ? tr2('عربي', 'Arabic') : tr2('إنجليزي', 'English')), selected: _language == l, onSelected: (_) => setState(() => _language = l)),
        ]),
        Wrap(spacing: 8, children: [
          for (final c in kLessonCategories) ChoiceChip(label: Text(lessonCategoryLabel(c)), selected: _category == c, onSelected: (_) => setState(() => _category = c)),
        ]),
        if (_problem != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(_problem!, key: const ValueKey('lesson_problem'), style: const TextStyle(color: Colors.red))),
      ]),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context, false), child: Text(tr2('إلغاء', 'Cancel'))),
        FilledButton(key: const ValueKey('lesson_save'), onPressed: _save, child: Text(tr2('احفظ', 'Save'))),
      ],
    );
  }
}
