import 'dart:async';

import 'package:flutter/material.dart';

import '../design/components.dart';
import '../design/layout.dart';
import '../design/tokens.dart';
import '../games/game_common.dart' show GameRewards;
import '../journey/models.dart' show dayKeyOf;
import '../journey/repository.dart';
import '../l10n/strings.dart';
import 'call_models.dart';
import 'call_repository.dart';
import 'call_screens.dart';
import 'family_models.dart';
import 'family_prefs.dart';
import 'family_seen.dart';
import 'voice_io.dart';
import 'family_repository.dart';

String _err(Object e) => e is FamilyException ? e.message : tr2('تعذّر إكمال العملية، حاول مرة أخرى', 'Something went wrong, please try again');

// ============================================================================
// Parent: relatives, children, conversations
// ============================================================================

/// Parent area (behind the PIN). The parent is signed in; the family id is the parent's uid.
class FamilyParentScreen extends StatefulWidget {
  final FamilyRepository repo;
  final String parentName;
  const FamilyParentScreen({super.key, required this.repo, required this.parentName});

  @override
  State<FamilyParentScreen> createState() => _FamilyParentScreenState();
}

class _FamilyParentScreenState extends State<FamilyParentScreen> {
  late Future<List<Relative>> _rels = widget.repo.relatives();

  @override
  void initState() {
    super.initState();
    // Voice recordings are removed after 14 days (keeps the free database small and respects privacy).
    widget.repo.purgeOldVoices(widget.repo.uid!).catchError((Object _) => 0);
    // Finished call records hold network details; they are removed after a day.
    final r = widget.repo;
    if (r is CallRepository) (r as CallRepository).purgeOldCalls(r.uid!).catchError((Object _) => 0);
  }

  List<Relative> _lastRels = const [];
  int _refreshTick = 0;

  void _reload() {
    final next = widget.repo.relatives();
    setState(() {
      _rels = next;
      _refreshTick++;
    });
  }

  Future<void> _do(Future<void> Function() action) async {
    try {
      await action();
      _reload();
    } catch (e) {
      if (mounted) showToast(context, _err(e));
    }
  }

  Future<void> _invite() async {
    final sent = await showDialog<ConnectRequest>(context: context, builder: (_) => _RequestDialog(repo: widget.repo, parentName: widget.parentName));
    if (sent == null || !mounted) return;
    showToast(context, tr2('أُرسل الطلب. سيظهر له في التطبيق ليقبله أو يرفضه.', 'Request sent. They will see it in the app and can accept or decline.'));
    _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('عائلتي: المحادثات', 'Family chat'))),
      floatingActionButton: FloatingActionButton.extended(
        key: const ValueKey('invite_relative'),
        onPressed: _invite,
        icon: const Icon(Icons.person_add_alt_1_rounded),
        label: Text(tr2('إضافة قريب', 'Add a relative')),
      ),
      body: CenteredList(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 96),
        children: [
          Text(
            tr2(
              'الطفل لا يملك حساباً. يكتب على جهازك بعبارات جاهزة وملصقات، والكتابة الحرة مغلقة حتى تفتحها أنت. كل المحادثات تظهر لك، ويمكنك الإيقاف أو الحذف في أي وقت.',
              'Your child has no account. They write on your device with ready phrases and stickers; typing stays off until you turn it on. You can read every conversation, and pause or remove a relative at any time.',
            ),
            style: DS.caption,
          ),
          if (widget.repo is CallRepository)
            IncomingCalls(
              calls: widget.repo as CallRepository,
              familyId: widget.repo.uid!,
              titleOf: (c) => '${relationLabelOf(_lastRels, c.relUid)} · ${c.childName}',
            ),
          const SizedBox(height: 12),
          _SentRequests(repo: widget.repo, refresh: _refreshTick),
          SectionHeader(tr2('الأقارب', 'Relatives')),
          FutureBuilder<List<Relative>>(
            future: _rels,
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) return const Padding(padding: EdgeInsets.all(16), child: LinearProgressIndicator());
              if (snap.hasError) return ErrorState(message: _err(snap.error!), onRetry: _reload);
              final list = [for (final r in snap.data!) if (r.status != kRelativeRemoved) r];
              _lastRels = list;
              if (list.isEmpty) {
                return EmptyState(
                  icon: Icons.family_restroom_rounded,
                  title: tr2('لا يوجد أقارب بعد', 'No relatives yet'),
                  message: tr2('اضغط «إضافة قريب» وأرسل طلباً إلى بريده الإلكتروني.', 'Tap “Add a relative” and send a request to their e-mail.'),
                );
              }
              return Column(children: [
                for (final r in list)
                  _RelativeCard(
                    key: ValueKey('rel_${r.uid}'),
                    rel: r,
                    onStatus: (s) => _do(() => widget.repo.setRelativeStatus(r.uid, s)),
                    onChildren: (c) => _do(() => widget.repo.setRelativeChildren(r.uid, c)),
                    onCalls: (on) => _do(() => widget.repo.setRelativeCalls(r.uid, on)),
                    onVoice: (on) => _do(() => widget.repo.setRelativeVoice(r.uid, on)),
                    onVideo: (on) => _do(() => widget.repo.setRelativeVideo(r.uid, on)),
                    onVideoCall: widget.repo is CallRepository
                        ? (childId, childName) => startCallScreen(
                              context,
                              calls: widget.repo as CallRepository,
                              familyId: widget.repo.uid!,
                              childId: childId,
                              childName: childName,
                              relUid: r.uid,
                              from: CallFrom.parent,
                              title: '${relationLabel(r.relation)} · ${r.name}',
                              video: true,
                            )
                        : null,
                    onNextCall: (t) => _do(() => widget.repo.setRelativeNextCall(r.uid, t)),
                    onCall: widget.repo is CallRepository
                        ? (childId, childName) => startCallScreen(
                              context,
                              calls: widget.repo as CallRepository,
                              familyId: widget.repo.uid!,
                              childId: childId,
                              childName: childName,
                              relUid: r.uid,
                              from: CallFrom.parent,
                              title: '${relationLabel(r.relation)} · ${r.name}',
                            )
                        : null,
                  ),
              ]);
            },
          ),
          const SizedBox(height: 12),
          SectionHeader(tr2('الأطفال', 'Children')),
          const _ChildSwitches(),
          const SizedBox(height: 12),
          AppButton(
            key: const ValueKey('read_all'),
            label: tr2('قراءة كل المحادثات', 'Read all conversations'),
            icon: Icons.forum_rounded,
            secondary: true,
            expand: true,
            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => ConversationsScreen(repo: widget.repo))),
          ),
        ],
      ),
    );
  }
}

/// «مكالمة قادمة»: a short note such as "Friday 6 pm", shown to the child and to the relative. It is only a note:
/// nothing rings by itself and no reminder is sent.
class _NextCallRow extends StatelessWidget {
  final Relative rel;
  final ValueChanged<String> onSave;
  const _NextCallRow({required this.rel, required this.onSave});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      key: ValueKey('nextcall_${rel.uid}'),
      contentPadding: EdgeInsets.zero,
      leading: const Icon(Icons.event_rounded),
      title: Text(tr2('مكالمة قادمة', 'Next call')),
      subtitle: Text(rel.nextCall.isEmpty ? tr2('لا يوجد موعد. اضغط للإضافة.', 'No time set. Tap to add one.') : rel.nextCall),
      onTap: () async {
        final text = await showDialog<String>(context: context, builder: (_) => _NextCallDialog(initial: rel.nextCall));
        if (text != null) onSave(text);
      },
    );
  }
}

class _NextCallDialog extends StatefulWidget {
  final String initial;
  const _NextCallDialog({required this.initial});

  @override
  State<_NextCallDialog> createState() => _NextCallDialogState();
}

class _NextCallDialogState extends State<_NextCallDialog> {
  late final _c = TextEditingController(text: widget.initial);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(tr2('موعد المكالمة القادمة', 'Time of the next call')),
      content: TextField(
        key: const ValueKey('nextcall_field'),
        controller: _c,
        maxLength: kMaxNextCallLength,
        decoration: InputDecoration(hintText: tr2('مثلاً: الجمعة ٦ مساءً', 'For example: Friday 6 pm')),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: Text(tr2('إلغاء', 'Cancel'))),
        FilledButton(key: const ValueKey('nextcall_save'), onPressed: () => Navigator.pop(context, _c.text), child: Text(tr2('حفظ', 'Save'))),
      ],
    );
  }
}

String relationLabelOf(List<Relative> rels, String relUid) {
  final r = rels.where((r) => r.uid == relUid).firstOrNull;
  return r == null ? tr2('قريب', 'Relative') : '${relationLabel(r.relation)} ${r.name}';
}

class _RequestDialog extends StatefulWidget {
  final FamilyRepository repo;
  final String parentName;
  const _RequestDialog({required this.repo, required this.parentName});

  @override
  State<_RequestDialog> createState() => _RequestDialogState();
}

class _RequestDialogState extends State<_RequestDialog> {
  final _email = TextEditingController();
  String _relation = 'grandma';
  final _picked = <String>{};
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _email.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final kids = {for (final c in JourneyStore.instance.profiles) if (_picked.contains(c.id)) c.id: c.nickname};
    if (!looksLikeEmail(_email.text)) {
      setState(() => _error = tr2('اكتب بريداً إلكترونياً صحيحاً', 'Write a valid e-mail address'));
      return;
    }
    if (kids.isEmpty) {
      setState(() => _error = tr2('اختر طفلاً واحداً على الأقل', 'Choose at least one child'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final r = await widget.repo.sendConnectRequest(parentName: widget.parentName, toEmail: _email.text, relation: _relation, children: kids);
      if (mounted) Navigator.pop(context, r);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = _err(e);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final kids = JourneyStore.instance.profiles;
    return AlertDialog(
      title: Text(tr2('إضافة قريب', 'Add a relative')),
      content: SingleChildScrollView(
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(
            tr2('اكتب البريد الذي سجّل به القريب في التطبيق. سيصله طلب ليقبله أو يرفضه.', 'Write the e-mail the person registered with in the app. They get a request to accept or decline.'),
            style: DS.caption,
          ),
          const SizedBox(height: 8),
          TextField(
            key: const ValueKey('request_email'),
            controller: _email,
            keyboardType: TextInputType.emailAddress,
            autofillHints: const [AutofillHints.email],
            decoration: InputDecoration(labelText: tr2('البريد الإلكتروني', 'E-mail')),
          ),
          const SizedBox(height: 8),
          DropdownButton<String>(
            key: const ValueKey('invite_relation'),
            value: _relation,
            isExpanded: true,
            items: [for (final r in kRelations) DropdownMenuItem(value: r, child: Text(relationLabel(r)))],
            onChanged: (v) => setState(() => _relation = v ?? _relation),
          ),
          const SizedBox(height: 8),
          Text(tr2('مع أي طفل يتكلم؟', 'Who may they talk with?'), style: DS.caption),
          for (final c in kids)
            CheckboxListTile(
              key: ValueKey('invite_child_${c.id}'),
              value: _picked.contains(c.id),
              title: Text(c.nickname),
              onChanged: (v) => setState(() => v == true ? _picked.add(c.id) : _picked.remove(c.id)),
            ),
          if (_error != null) Text(_error!, key: const ValueKey('request_error'), style: DS.body.copyWith(color: DS.error)),
        ]),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: Text(tr2('إلغاء', 'Cancel'))),
        FilledButton(key: const ValueKey('send_request'), onPressed: _busy ? null : _send, child: Text(tr2('إرسال الطلب', 'Send request'))),
      ],
    );
  }
}

/// Requests the parent sent that nobody answered yet, with a way to cancel.
class _SentRequests extends StatefulWidget {
  final FamilyRepository repo;
  final int refresh;
  const _SentRequests({required this.repo, required this.refresh});

  @override
  State<_SentRequests> createState() => _SentRequestsState();
}

class _SentRequestsState extends State<_SentRequests> {
  late Future<List<ConnectRequest>> _f = widget.repo.sentRequests();

  @override
  void didUpdateWidget(covariant _SentRequests old) {
    super.didUpdateWidget(old);
    if (old.refresh != widget.refresh) {
      _f = widget.repo.sentRequests();
    }
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<ConnectRequest>>(
      future: _f,
      builder: (context, snap) {
        final list = snap.data ?? const <ConnectRequest>[];
        if (list.isEmpty) return const SizedBox.shrink();
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SectionHeader(tr2('طلبات بانتظار الرد', 'Requests waiting for an answer')),
          for (final r in list)
            Card(
              key: ValueKey('sent_${r.id}'),
              child: ListTile(
                leading: const Icon(Icons.hourglass_top_rounded),
                title: Text(r.toEmail, textDirection: TextDirection.ltr),
                subtitle: Text('${relationLabel(r.relation)} · ${r.children.values.join('، ')}'),
                trailing: TextButton(
                  key: ValueKey('cancel_${r.id}'),
                  onPressed: () async {
                    await widget.repo.cancelRequest(r.id);
                    if (mounted) {
                      setState(() {
                        _f = widget.repo.sentRequests();
                      });
                    }
                  },
                  child: Text(tr2('إلغاء الطلب', 'Cancel')),
                ),
              ),
            ),
        ]);
      },
    );
  }
}

class _RelativeCard extends StatelessWidget {
  final Relative rel;
  final ValueChanged<String> onStatus;
  final ValueChanged<Map<String, String>> onChildren;
  final ValueChanged<bool> onCalls;
  final ValueChanged<bool> onVoice;
  final ValueChanged<bool> onVideo;
  final void Function(String childId, String childName)? onVideoCall;
  final void Function(String childId, String childName)? onCall;
  final ValueChanged<String> onNextCall;
  const _RelativeCard({super.key, required this.rel, required this.onStatus, required this.onChildren, required this.onCalls, required this.onVoice, required this.onVideo, this.onVideoCall, this.onCall, required this.onNextCall});

  String get _statusText => switch (rel.status) {
        kRelativePending => tr2('بانتظار موافقتك', 'Waiting for your approval'),
        kRelativeActive => tr2('نشط', 'Active'),
        kRelativePaused => tr2('موقوف', 'Paused'),
        _ => rel.status,
      };

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('${rel.name} · ${relationLabel(rel.relation)}', style: DS.heading),
          Text(_statusText, key: ValueKey('status_${rel.uid}'), style: DS.caption),
          if (rel.children.isNotEmpty) Text(tr2('يتكلم مع: ', 'Talks with: ') + rel.children.values.join('، '), style: DS.caption),
          if (rel.active)
            _NextCallRow(rel: rel, onSave: onNextCall),
          if (rel.active)
            SwitchListTile(
              key: ValueKey('voice_${rel.uid}'),
              contentPadding: EdgeInsets.zero,
              title: Text(tr2('السماح بالرسائل الصوتية', 'Allow voice messages')),
              subtitle: Text(tr2('تُحفظ 14 يوماً ثم تُحذف. تستطيع أنت سماع كل شيء.', 'Kept for 14 days, then deleted. You can listen to everything.')),
              value: rel.voiceOn,
              onChanged: onVoice,
            ),
          if (rel.active && onCall != null) ...[
            SwitchListTile(
              key: ValueKey('calls_${rel.uid}'),
              contentPadding: EdgeInsets.zero,
              title: Text(tr2('السماح بالمكالمات الصوتية', 'Allow voice calls')),
              subtitle: Text(tr2('صوت فقط، ولا يُسجَّل. تبدأ منك أو من القريب وتجيب أنت.', 'Voice only, never recorded. Started by you or by the relative, and you answer.')),
              value: rel.callsOn,
              onChanged: onCalls,
            ),
            if (rel.callsOn)
              SwitchListTile(
                key: ValueKey('video_${rel.uid}'),
                contentPadding: EdgeInsets.zero,
                title: Text(tr2('السماح بمكالمات الفيديو', 'Allow video calls')),
                subtitle: Text(tr2('تظهر الكاميرا. تأكد أنك مع الطفل أثناء المكالمة. لا تُسجَّل.', 'The camera is shown. Stay with your child during the call. It is not recorded.')),
                value: rel.videoOn,
                onChanged: onVideo,
              ),
            if (rel.callsOn)
              Wrap(spacing: 8, children: [
                for (final e in rel.children.entries)
                  OutlinedButton.icon(
                    key: ValueKey('call_${rel.uid}_${e.key}'),
                    onPressed: () => onCall!(e.key, e.value),
                    icon: const Icon(Icons.call_rounded),
                    label: Text(tr2('اتصل (${e.value})', 'Call (${e.value})')),
                  ),
                if (rel.videoOn && onVideoCall != null)
                  for (final e in rel.children.entries)
                    OutlinedButton.icon(
                      key: ValueKey('videocall_${rel.uid}_${e.key}'),
                      onPressed: () => onVideoCall!(e.key, e.value),
                      icon: const Icon(Icons.videocam_rounded),
                      label: Text(tr2('فيديو (${e.value})', 'Video (${e.value})')),
                    ),
              ]),
          ],
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 4, children: [
            if (rel.status == kRelativePending)
              FilledButton(key: const ValueKey('approve'), onPressed: () => onStatus(kRelativeActive), child: Text(tr2('موافقة', 'Approve'))),
            if (rel.status == kRelativeActive)
              OutlinedButton(key: const ValueKey('pause'), onPressed: () => onStatus(kRelativePaused), child: Text(tr2('إيقاف مؤقت', 'Pause'))),
            if (rel.status == kRelativePaused)
              OutlinedButton(key: const ValueKey('resume'), onPressed: () => onStatus(kRelativeActive), child: Text(tr2('استئناف', 'Resume'))),
            TextButton(
              key: const ValueKey('remove'),
              onPressed: () async {
                final ok = await showDialog<bool>(
                  context: context,
                  builder: (_) => AlertDialog(
                    title: Text(tr2('إزالة ${rel.name}؟', 'Remove ${rel.name}?')),
                    content: Text(tr2('لن يستطيع مراسلة أطفالك بعد الآن.', 'They will not be able to message your children any more.')),
                    actions: [
                      TextButton(onPressed: () => Navigator.pop(context, false), child: Text(tr2('إلغاء', 'Cancel'))),
                      FilledButton(key: const ValueKey('confirm_remove'), onPressed: () => Navigator.pop(context, true), child: Text(tr2('إزالة', 'Remove'))),
                    ],
                  ),
                );
                if (ok == true) onStatus(kRelativeRemoved);
              },
              child: Text(tr2('إزالة', 'Remove')),
            ),
          ]),
        ]),
      ),
    );
  }
}

/// Per child on this device: chat on/off and typing on/off. Both off by default.
class _ChildSwitches extends StatefulWidget {
  const _ChildSwitches();

  @override
  State<_ChildSwitches> createState() => _ChildSwitchesState();
}

class _ChildSwitchesState extends State<_ChildSwitches> {
  final _prefs = <String, ChildChatPrefs>{};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    for (final c in JourneyStore.instance.profiles) {
      _prefs[c.id] = await FamilyPrefs.of(c.id);
    }
    if (mounted) setState(() {});
  }

  Future<void> _set(String id, ChildChatPrefs p) async {
    await FamilyPrefs.save(id, p);
    if (!mounted) return;
    setState(() => _prefs[id] = p);
    showToast(context, tr2('تم الحفظ', 'Saved'));
  }

  @override
  Widget build(BuildContext context) {
    final kids = JourneyStore.instance.profiles;
    if (kids.isEmpty) return Text(tr2('أضف طفلاً أولاً.', 'Add a child first.'), style: DS.caption);
    return Column(children: [
      for (final c in kids)
        Card(
          child: Column(children: [
            SwitchListTile(
              key: ValueKey('chat_on_${c.id}'),
              title: Text(c.nickname),
              subtitle: Text(tr2('يستطيع فتح المحادثة مع الأقارب الموافَق عليهم', 'May open the chat with approved relatives')),
              value: _prefs[c.id]?.chatOn ?? false,
              onChanged: (v) => _set(c.id, ChildChatPrefs(chatOn: v, textOn: v && (_prefs[c.id]?.textOn ?? false), voiceOn: v && (_prefs[c.id]?.voiceOn ?? false))),
            ),
            if (_prefs[c.id]?.chatOn ?? false)
              SwitchListTile(
                key: ValueKey('text_on_${c.id}'),
                title: Text(tr2('السماح بالكتابة', 'Allow typing')),
                subtitle: Text(tr2('بدونها: عبارات جاهزة وملصقات فقط', 'Off: ready phrases and stickers only')),
                value: _prefs[c.id]?.textOn ?? false,
                onChanged: (v) => _set(c.id, ChildChatPrefs(chatOn: true, textOn: v, voiceOn: _prefs[c.id]?.voiceOn ?? false)),
              ),
            if (_prefs[c.id]?.chatOn ?? false)
              SwitchListTile(
                key: ValueKey('voice_on_${c.id}'),
                title: Text(tr2('السماح بتسجيل الصوت', 'Allow voice recording')),
                subtitle: Text(tr2('لمن فعّلت له الرسائل الصوتية فقط', 'Only for relatives you allowed voice messages for')),
                value: _prefs[c.id]?.voiceOn ?? false,
                onChanged: (v) => _set(c.id, ChildChatPrefs(chatOn: true, textOn: _prefs[c.id]?.textOn ?? false, voiceOn: v)),
              ),
          ]),
        ),
    ]);
  }
}

/// The parent reads everything that was said, newest last, and can clear a conversation.
class ConversationsScreen extends StatefulWidget {
  final FamilyRepository repo;
  const ConversationsScreen({super.key, required this.repo});

  @override
  State<ConversationsScreen> createState() => _ConversationsScreenState();
}

class _ConversationsScreenState extends State<ConversationsScreen> {
  late Future<List<FamilyMessage>> _all = widget.repo.allMessages(widget.repo.uid!);

  void _reload() {
    final next = widget.repo.allMessages(widget.repo.uid!);
    setState(() {
      _all = next;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('كل المحادثات', 'All conversations'))),
      body: FutureBuilder<List<FamilyMessage>>(
        future: _all,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return ErrorState(message: _err(snap.error!), onRetry: _reload);
          final byThread = <String, List<FamilyMessage>>{};
          for (final m in snap.data!) {
            byThread.putIfAbsent(m.threadId, () => []).add(m);
          }
          if (byThread.isEmpty) {
            return EmptyState(icon: Icons.chat_bubble_outline_rounded, title: tr2('لا توجد رسائل', 'No messages yet'));
          }
          return CenteredList(padding: const EdgeInsets.all(16), children: [
            for (final e in byThread.entries)
              Card(
                key: ValueKey('thread_${e.key}'),
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Row(children: [
                      Expanded(child: Text(e.value.first.childName, style: DS.heading)),
                      TextButton(
                        key: ValueKey('clear_${e.key}'),
                        onPressed: () async {
                          final first = e.value.first;
                          await widget.repo.clearThread(familyId: widget.repo.uid!, childId: first.childId, relUid: first.relUid);
                          _reload();
                        },
                        child: Text(tr2('حذف المحادثة', 'Delete conversation')),
                      ),
                    ]),
                    for (final m in e.value)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 2),
                        child: m.isVoice
                            ? Row(children: [
                                Text('${m.from == Side.child ? m.childName : tr2('القريب', 'Relative')}: '),
                                VoiceBubble(repo: widget.repo, familyId: widget.repo.uid!, message: m),
                              ])
                            : Text('${m.from == Side.child ? m.childName : tr2('القريب', 'Relative')}: ${m.shown}'),
                      ),
                  ]),
                ),
              ),
          ]);
        },
      ),
    );
  }
}

// ============================================================================
// Chat (child on the parent's device, or the relative on their own)
// ============================================================================

/// Who a child may talk to: the active relatives linked to this child. Opened from the child home only when the
/// parent turned chat on for this child.
class ChildFamilyScreen extends StatefulWidget {
  final FamilyRepository repo;
  final String familyId;
  final String childId;
  final String childName;
  const ChildFamilyScreen({super.key, required this.repo, required this.familyId, required this.childId, required this.childName});

  @override
  State<ChildFamilyScreen> createState() => _ChildFamilyScreenState();
}

class _ChildFamilyScreenState extends State<ChildFamilyScreen> {
  late Future<FamilyOverview> _overview = loadFamilyOverview(widget.repo, widget.childId);
  bool _win = false;

  @override
  void initState() {
    super.initState();
    _checkWin();
  }

  /// "I finished a lesson today" can be shared only when it is true (a finished activity or game today).
  Future<void> _checkWin() async {
    final day = dayKeyOf(DateTime.now());
    final planDone = JourneyStore.instance.todayPlan(widget.childId).any((p) => p.doneToday);
    final games = await GameRewards.doneOn(widget.childId, day);
    if (mounted) setState(() => _win = planDone || games.isNotEmpty);
  }

  void _reload() {
    final next = loadFamilyOverview(widget.repo, widget.childId);
    setState(() {
      _overview = next;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('عائلتي', 'My family'))),
      body: FutureBuilder<FamilyOverview>(
        future: _overview,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return ErrorState(message: _err(snap.error!), onRetry: _reload);
          final mine = snap.data!.contacts;
          if (mine.isEmpty) {
            return EmptyState(icon: Icons.family_restroom_rounded, title: tr2('لا يوجد أحد هنا بعد', 'Nobody here yet'), message: tr2('اطلب من ماما أو بابا.', 'Ask your parent.'));
          }
          return CenteredList(padding: const EdgeInsets.all(16), children: [
            for (final c in mine)
              Card(
                child: ListTile(
                  key: ValueKey('talk_${c.rel.uid}'),
                  minTileHeight: 84,
                  leading: Stack(clipBehavior: Clip.none, children: [
                    CircleAvatar(radius: 26, backgroundColor: DS.primarySoft, child: Text(relationEmoji(c.rel.relation), style: const TextStyle(fontSize: 28))),
                    if (c.unread > 0)
                      PositionedDirectional(
                        top: -4,
                        end: -4,
                        child: Container(
                          key: ValueKey('unread_${c.rel.uid}'),
                          constraints: const BoxConstraints(minWidth: 22, minHeight: 22),
                          padding: const EdgeInsets.symmetric(horizontal: 5),
                          decoration: BoxDecoration(color: const Color(0xFFE53935), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white, width: 2)),
                          alignment: Alignment.center,
                          child: Text(c.unread > 9 ? '9+' : '${c.unread}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                        ),
                      ),
                  ]),
                  title: Text(relationLabel(c.rel.relation), style: DS.heading.copyWith(fontWeight: c.unread > 0 ? FontWeight.w900 : FontWeight.w700)),
                  subtitle: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(c.last == null ? c.rel.name : '${c.last!.from == Side.child ? tr2('أنت: ', 'You: ') : ''}${c.last!.shown}', maxLines: 1, overflow: TextOverflow.ellipsis),
                    if (c.rel.nextCall.isNotEmpty) Text('📅 ${c.rel.nextCall}', key: ValueKey('next_${c.rel.uid}'), style: DS.caption),
                  ]),
                  trailing: widget.repo is CallRepository && c.rel.callsOn
                      ? CallButtons(
                          keyPrefix: 'contact_${c.rel.uid}',
                          video: c.rel.videoOn,
                          onCall: (video) => startCallScreen(
                            context,
                            calls: widget.repo as CallRepository,
                            familyId: widget.familyId,
                            childId: widget.childId,
                            childName: widget.childName,
                            relUid: c.rel.uid,
                            from: CallFrom.parent,
                            title: relationLabel(c.rel.relation),
                            video: video,
                          ),
                        )
                      : null,
                  onTap: () async {
                    await Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => ChatScreen(repo: widget.repo, familyId: widget.familyId, childId: widget.childId, childName: widget.childName, relUid: c.rel.uid, as: Side.child, title: relationLabel(c.rel.relation), canShareWin: _win, calls: widget.repo is CallRepository ? widget.repo as CallRepository : null, callsOn: c.rel.callsOn, voiceOn: c.rel.voiceOn, videoOn: c.rel.videoOn),
                      ),
                    );
                    _reload();
                  },
                ),
              ),
          ]);
        },
      ),
    );
  }
}

String relationEmoji(String r) => switch (r) {
      'grandma' => '👵',
      'grandpa' => '👴',
      'aunt' => '👩',
      'uncle' => '👨',
      'father' => '🧔',
      'mother' => '👩',
      _ => '🧑',
    };

class ChatScreen extends StatefulWidget {
  final FamilyRepository repo;
  final String familyId;
  final String childId;
  final String childName;
  final String relUid;
  final Side as;
  final String title;

  /// Offers «أنهيت درساً اليوم» (only when the child really finished something today).
  final bool canShareWin;

  /// The phone button in the title bar: shown only when the parent allowed calls with this relative (that switch
  /// is the parent's consent). The call only rings that approved relative, who chooses whether to answer.
  final CallRepository? calls;
  final bool callsOn;
  final Future<bool> Function()? approveCall;

  /// Voice messages are on for this relative (the parent's switch).
  final bool voiceOn;

  /// Video calls are on for this relative (the parent's switch).
  final bool videoOn;
  const ChatScreen({
    super.key,
    required this.repo,
    required this.familyId,
    required this.childId,
    required this.childName,
    required this.relUid,
    required this.as,
    required this.title,
    this.canShareWin = false,
    this.calls,
    this.callsOn = false,
    this.approveCall,
    this.voiceOn = false,
    this.videoOn = false,
  });

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _text = TextEditingController();
  bool _typing = false; // whether free typing is available on this side
  bool _voice = false; // whether this side may record (the parent's switches)
  VoiceRecorder? _recorder;
  bool _recording = false;
  int _recSecs = 0;
  Timer? _recTimer;
  bool _sending = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    if (widget.as == Side.relative) {
      _typing = true;
      _voice = widget.voiceOn;
    } else {
      FamilyPrefs.of(widget.childId).then((p) {
        if (mounted) {
          setState(() {
            _typing = p.textOn;
            _voice = p.voiceOn && widget.voiceOn;
          });
        }
      });
    }
  }

  @override
  void dispose() {
    _recTimer?.cancel();
    _recorder?.cancel().whenComplete(() => _recorder?.dispose());
    _text.dispose();
    super.dispose();
  }

  Future<void> _startRecording() async {
    if (_recording || _sending) return;
    final rec = newVoiceRecorder();
    bool ok;
    try {
      ok = await rec.start();
    } catch (_) {
      ok = false;
    }
    if (!ok) {
      await rec.dispose();
      if (mounted) setState(() => _error = tr2('لا يمكن استخدام الميكروفون. اسمح به من الإعدادات.', 'The microphone cannot be used. Allow it in the settings.'));
      return;
    }
    _recorder = rec;
    _recSecs = 0;
    _recTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      setState(() => _recSecs++);
      if (_recSecs >= kMaxVoiceSeconds) _finishRecording(send: true); // the limit sends what was said
    });
    setState(() {
      _recording = true;
      _error = null;
    });
  }

  Future<void> _finishRecording({required bool send}) async {
    final rec = _recorder;
    if (rec == null) return;
    _recTimer?.cancel();
    _recorder = null;
    setState(() {
      _recording = false;
      _sending = send;
    });
    try {
      if (!send) {
        await rec.cancel();
        return;
      }
      final voice = await rec.stop();
      if (voice == null || voice.bytes.length > kMaxVoiceBytes) {
        if (mounted) setState(() => _error = tr2('الرسالة الصوتية طويلة. سجّل رسالة أقصر.', 'That voice message is too long. Record a shorter one.'));
        return;
      }
      await widget.repo.sendVoice(
        familyId: widget.familyId,
        childId: widget.childId,
        childName: widget.childName,
        relUid: widget.relUid,
        from: widget.as,
        bytes: voice.bytes,
        mime: voice.mime,
        secs: voice.secs,
      );
    } catch (e) {
      if (mounted) setState(() => _error = _err(e));
    } finally {
      await rec.dispose();
      if (mounted) setState(() => _sending = false);
    }
  }

  Future<void> _send(String kind, String body) async {
    if (_sending) return; // no double sends
    final problem = validateMessage(kind, body);
    if (problem != null) {
      setState(() => _error = problem);
      return;
    }
    setState(() {
      _sending = true;
      _error = null;
    });
    try {
      await widget.repo.send(
        familyId: widget.familyId,
        childId: widget.childId,
        childName: widget.childName,
        relUid: widget.relUid,
        from: widget.as,
        kind: kind,
        body: body,
      );
      if (kind == kindText) _text.clear();
    } catch (e) {
      if (mounted) setState(() => _error = _err(e));
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  Future<void> _call({bool video = false}) async {
    final approve = widget.approveCall;
    if (approve != null && !await approve()) return;
    if (!mounted) return;
    await startCallScreen(
      context,
      calls: widget.calls!,
      familyId: widget.familyId,
      childId: widget.childId,
      childName: widget.childName,
      relUid: widget.relUid,
      from: widget.as == Side.child ? CallFrom.parent : CallFrom.relative,
      title: widget.title,
      video: video,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 0,
        title: Row(children: [
          CircleAvatar(radius: 20, backgroundColor: DS.primarySoft, child: const Icon(Icons.favorite_rounded, color: DS.primary, size: 20)),
          const SizedBox(width: 10),
          Flexible(child: Text(widget.title, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800))),
        ]),
        actions: [
          if (widget.calls != null && widget.callsOn)
            Padding(
              padding: const EdgeInsetsDirectional.only(end: 8),
              child: CallButtons(keyPrefix: 'chat', video: widget.videoOn, onCall: (video) => _call(video: video)),
            ),
        ],
      ),
      body: SafeArea(
        child: ResponsiveBody(
          maxWidth: 640,
          child: Column(children: [
            Expanded(
              child: StreamBuilder<List<FamilyMessage>>(
                stream: widget.repo.watch(familyId: widget.familyId, childId: widget.childId, relUid: widget.relUid),
                builder: (context, snap) {
                  final msgs = snap.data ?? const <FamilyMessage>[];
                  if (widget.as == Side.child && msgs.isNotEmpty) {
                    // The child is looking at this conversation, so the new-message count goes away.
                    FamilySeen.markSeen(threadIdOf(widget.childId, widget.relUid), msgs.last.at);
                  }
                  if (msgs.isEmpty) {
                    return Center(child: Text(tr2('قل مرحباً! 👋', 'Say hello! 👋'), style: DS.heading));
                  }
                  return ListView(padding: const EdgeInsets.all(12), children: [
                    for (final m in msgs)
                      Align(
                        alignment: (m.from == widget.as) ? AlignmentDirectional.centerEnd : AlignmentDirectional.centerStart,
                        child: Container(
                          margin: const EdgeInsets.symmetric(vertical: 4),
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                          constraints: const BoxConstraints(maxWidth: 420),
                          decoration: BoxDecoration(
                            color: (m.from == widget.as) ? DS.primarySoft : Colors.white,
                            borderRadius: BorderRadiusDirectional.only(
                              topStart: const Radius.circular(20),
                              topEnd: const Radius.circular(20),
                              bottomStart: Radius.circular(m.from == widget.as ? 20 : 4),
                              bottomEnd: Radius.circular(m.from == widget.as ? 4 : 20),
                            ),
                            border: Border.all(color: DS.border),
                          ),
                          child: m.isVoice
                              ? VoiceBubble(repo: widget.repo, familyId: widget.familyId, message: m)
                              : Text(m.shown, style: TextStyle(fontSize: m.kind == kindSticker ? 44 : 19, color: DS.ink)),
                        ),
                      ),
                  ]);
                },
              ),
            ),
            if (_error != null) Padding(padding: const EdgeInsets.all(8), child: Text(_error!, key: const ValueKey('chat_error'), style: DS.body.copyWith(color: DS.error))),
            _Composer(voiceLocked: !_voice, typing: _typing, sending: _sending, controller: _text, onSend: _send, voice: _voice, recording: _recording, recSecs: _recSecs, onMic: _startRecording, onStopRecording: () => _finishRecording(send: true), onCancelRecording: () => _finishRecording(send: false), phrases: phrasesFor(DateTime.now(), includeWin: widget.canShareWin && widget.as == Side.child)),
          ]),
        ),
      ),
    );
  }
}

class _Composer extends StatelessWidget {
  /// The microphone is shown even when the parent has not allowed voice notes, so the child can see it exists;
  /// pressing it explains who can turn it on (nothing is recorded).
  final bool voiceLocked;
  final bool typing;
  final bool sending;
  final TextEditingController controller;
  final Future<void> Function(String kind, String body) onSend;
  final List<String> phrases;
  final bool voice;
  final bool recording;
  final int recSecs;
  final VoidCallback onMic;
  final VoidCallback onStopRecording;
  final VoidCallback onCancelRecording;
  const _Composer({
    required this.voiceLocked,
    required this.typing,
    required this.sending,
    required this.controller,
    required this.onSend,
    required this.phrases,
    required this.voice,
    required this.recording,
    required this.recSecs,
    required this.onMic,
    required this.onStopRecording,
    required this.onCancelRecording,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
        boxShadow: [BoxShadow(color: Color(0x1A000000), blurRadius: 12, offset: Offset(0, -2))],
      ),
      padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        SizedBox(
          height: 52,
          child: ListView(scrollDirection: Axis.horizontal, children: [
            for (final s in kStickers)
              IconButton(
                key: ValueKey('sticker_$s'),
                iconSize: 32,
                tooltip: s,
                onPressed: sending ? null : () => onSend(kindSticker, s),
                icon: Text(s, style: const TextStyle(fontSize: 30)),
              ),
          ]),
        ),
        SizedBox(
          height: 56,
          child: ListView(scrollDirection: Axis.horizontal, children: [
            for (final p in phrases)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4),
                child: ActionChip(
                  key: ValueKey('phrase_$p'),
                  label: Text(phraseText(p), style: const TextStyle(fontSize: 16)),
                  onPressed: sending ? null : () => onSend(kindPhrase, p),
                ),
              ),
          ]),
        ),
        if (recording)
          Container(
            key: const ValueKey('recording_bar'),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(children: [
              const Icon(Icons.fiber_manual_record_rounded, color: DS.error),
              const SizedBox(width: 8),
              Text('${tr2('جارٍ التسجيل', 'Recording')} $recSecs / $kMaxVoiceSeconds', key: const ValueKey('rec_secs'), style: DS.heading),
              const Spacer(),
              IconButton(key: const ValueKey('rec_cancel'), tooltip: tr2('إلغاء', 'Cancel'), onPressed: onCancelRecording, icon: const Icon(Icons.delete_outline_rounded)),
              IconButton.filled(key: const ValueKey('rec_send'), tooltip: tr2('إرسال', 'Send'), onPressed: onStopRecording, icon: const Icon(Icons.send_rounded)),
            ]),
          )
        else
          Row(children: [
            // Voice note: a big round microphone. Locked (grey) until the parent allows voice notes for this relative.
            if (voice)
              _RoundAction(
                key: const ValueKey('mic'),
                icon: Icons.mic_rounded,
                color: const Color(0xFFE5484D),
                tooltip: tr2('رسالة صوتية', 'Voice message'),
                onPressed: sending ? null : onMic,
              )
            else
              _RoundAction(
                key: const ValueKey('mic_locked'),
                icon: Icons.mic_off_rounded,
                color: const Color(0xFF9AA3B2),
                tooltip: tr2('الرسائل الصوتية مقفلة', 'Voice notes are locked'),
                onPressed: () => showToast(context, tr2('اطلب من ماما أو بابا فتح الرسائل الصوتية من إعدادات العائلة.', 'Ask a parent to turn on voice notes in the family settings.')),
              ),
            const SizedBox(width: 8),
            if (typing) ...[
              Expanded(
                child: TextField(
                  key: const ValueKey('chat_text'),
                  controller: controller,
                  maxLength: kMaxTextLength,
                  decoration: InputDecoration(
                    hintText: tr2('اكتب رسالة', 'Write a message'),
                    counterText: '',
                    filled: true,
                    fillColor: const Color(0xFFF1F4FA),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(28), borderSide: BorderSide.none),
                  ),
                  onSubmitted: (v) => onSend(kindText, v),
                ),
              ),
              const SizedBox(width: 8),
              _RoundAction(
                key: const ValueKey('chat_send'),
                icon: Icons.send_rounded,
                color: DS.primary,
                tooltip: tr2('إرسال', 'Send'),
                onPressed: sending ? null : () => onSend(kindText, controller.text),
              ),
            ] else
              Expanded(child: Text(tr2('اختر ملصقاً أو عبارة، أو سجّل رسالة صوتية.', 'Pick a sticker or a phrase, or record a voice note.'), style: DS.caption)),
          ]),
      ]),
    );
  }
}

/// A big round button with an icon (at least 48 px, a tooltip and a spoken label).
class _RoundAction extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String tooltip;
  final VoidCallback? onPressed;
  const _RoundAction({super.key, required this.icon, required this.color, required this.tooltip, required this.onPressed});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        enabled: onPressed != null,
        label: tooltip,
        child: Tooltip(
          message: tooltip,
          child: Material(
            color: onPressed == null ? color.withAlpha(110) : color,
            shape: const CircleBorder(),
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: onPressed,
              child: SizedBox(width: 52, height: 52, child: Icon(icon, color: Colors.white, size: 26)),
            ),
          ),
        ),
      );
}

/// Clear, coloured call buttons: green phone for a voice call, blue camera for a video call (only when the parent allowed it).
/// Used in the chat header and on each contact in the family list. Keys: `<prefix>_call`, `<prefix>_video`.
class CallButtons extends StatelessWidget {
  final String keyPrefix;
  final bool video;
  final void Function(bool video) onCall;
  const CallButtons({super.key, required this.keyPrefix, required this.video, required this.onCall});

  @override
  Widget build(BuildContext context) {
    Widget btn(String k, IconData icon, Color color, String label, bool v) => Padding(
          padding: const EdgeInsetsDirectional.only(start: 8),
          child: Semantics(
            button: true,
            label: label,
            child: Tooltip(
              message: label,
              child: Material(
                key: ValueKey(k),
                color: color,
                shape: const CircleBorder(),
                child: InkWell(
                  customBorder: const CircleBorder(),
                  onTap: () => onCall(v),
                  child: SizedBox(width: 48, height: 48, child: Icon(icon, color: Colors.white, size: 26)),
                ),
              ),
            ),
          ),
        );
    return Row(mainAxisSize: MainAxisSize.min, children: [
      btn('${keyPrefix}_call', Icons.call_rounded, const Color(0xFF2E9E5B), tr2('اتصال صوتي', 'Voice call'), false),
      if (video) btn('${keyPrefix}_video', Icons.videocam_rounded, const Color(0xFF3B6FD8), tr2('مكالمة فيديو', 'Video call'), true),
    ]);
  }
}

// ============================================================================
// Relative: join with a code, then talk
// ============================================================================

/// What a relative sees on their own phone: join with a code, wait for approval, then pick a child to write to.
class RelativeHomeScreen extends StatefulWidget {
  final FamilyRepository repo;
  final String name;
  const RelativeHomeScreen({super.key, required this.repo, required this.name});

  @override
  State<RelativeHomeScreen> createState() => _RelativeHomeScreenState();
}

class _RelativeHomeScreenState extends State<RelativeHomeScreen> {
  late Future<List<(String, String)>> _fams = widget.repo.myFamilies();
  int _lastCount = 0;
  String? _busyId;

  Future<void> _answer(ConnectRequest r, bool accept) async {
    setState(() => _busyId = r.id);
    try {
      await widget.repo.respondToRequest(r, accept: accept, name: widget.name);
      final next = widget.repo.myFamilies();
      if (mounted) {
        setState(() {
          _fams = next;
        });
        showToast(context, accept ? tr2('تمت الإضافة. يمكنك مراسلة الأطفال الآن.', 'Added. You can message the children now.') : tr2('تم الرفض.', 'Declined.'));
      }
    } catch (e) {
      if (mounted) showToast(context, _err(e));
    } finally {
      if (mounted) setState(() => _busyId = null);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('أنا من العائلة', 'I am family'))),
      body: CenteredList(padding: const EdgeInsets.all(16), children: [
        StreamBuilder<List<ConnectRequest>>(
          stream: widget.repo.watchIncomingRequests(),
          builder: (context, snap) {
            final list = snap.data ?? const <ConnectRequest>[];
            if (list.length > _lastCount) {
              // A new request arrived while this screen is open: say so once.
              WidgetsBinding.instance.addPostFrameCallback((_) {
                if (mounted) showToast(context, tr2('وصلك طلب جديد من عائلة', 'You have a new request from a family'));
              });
            }
            _lastCount = list.length;
            if (list.isEmpty) {
              return Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(
                  tr2('لا توجد طلبات الآن. عندما يضيفك ولي أمر طفل ببريدك (${widget.repo.email ?? ''}) سيظهر طلبه هنا.', 'No requests right now. When a child’s parent adds you with your e-mail (${widget.repo.email ?? ''}) the request shows up here.'),
                  style: DS.caption,
                ),
              );
            }
            return Column(children: [
              for (final r in list)
                Card(
                  key: ValueKey('request_${r.id}'),
                  color: DS.highlightSoft,
                  child: Padding(
                    padding: const EdgeInsets.all(12),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(tr2('طلب من ${r.parentName}', 'Request from ${r.parentName}'), style: DS.heading),
                      Text(
                        tr2('يريد أن تتواصل (${relationLabel(r.relation)}) مع: ${r.children.values.join('، ')}', 'wants you (${relationLabel(r.relation)}) to be able to talk with: ${r.children.values.join(', ')}'),
                        style: DS.body,
                      ),
                      const SizedBox(height: 8),
                      Wrap(spacing: 8, children: [
                        FilledButton(key: ValueKey('accept_request_${r.id}'), onPressed: _busyId == null ? () => _answer(r, true) : null, child: Text(tr2('قبول', 'Accept'))),
                        OutlinedButton(key: ValueKey('decline_request_${r.id}'), onPressed: _busyId == null ? () => _answer(r, false) : null, child: Text(tr2('رفض', 'Decline'))),
                      ]),
                    ]),
                  ),
                ),
            ]);
          },
        ),
        FutureBuilder<List<(String, String)>>(
          future: _fams,
          builder: (context, snap) {
            final fams = snap.data ?? const <(String, String)>[];
            return Column(children: [
              for (final f in fams) _RelativeFamily(repo: widget.repo, familyId: f.$1, parentName: f.$2),
            ]);
          },
        ),
        const SizedBox(height: 8),
        Text(tr2('لا روابط ولا صور هنا. الرسائل نصية قصيرة وملصقات، ويستطيع ولي الأمر قراءتها كلها.', 'No links or photos here. Messages are short text and stickers, and the parent can read all of them.'), style: DS.caption),
      ]),
    );
  }
}

class _RelativeFamily extends StatelessWidget {
  final FamilyRepository repo;
  final String familyId;
  final String parentName;
  const _RelativeFamily({required this.repo, required this.familyId, required this.parentName});

  @override
  Widget build(BuildContext context) {
    // The relative's own record tells which children they may write to (null while pending).
    return FutureBuilder<List<Relative>>(
      future: repo.myLinks(familyId),
      builder: (context, snap) {
        final me = snap.data?.firstOrNull;
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(tr2('عائلة $parentName', '$parentName’s family'), style: DS.heading),
              if (me != null && me.nextCall.isNotEmpty) Text('📅 ${me.nextCall}', key: const ValueKey('relative_next_call'), style: DS.caption),
              if (me == null || !me.active)
                Text(tr2('بانتظار الموافقة', 'Waiting for approval'), key: const ValueKey('waiting'), style: DS.caption)
              else ...[
                if (repo is CallRepository)
                  IncomingCalls(calls: repo as CallRepository, familyId: familyId, titleOf: (c) => tr2('عائلة $parentName', '$parentName’s family')),
                if (repo is CallRepository && me.callsOn)
                  Wrap(spacing: 8, children: [
                    for (final c in me.children.entries)
                      OutlinedButton.icon(
                        key: ValueKey('call_${c.key}'),
                        onPressed: () => startCallScreen(
                          context,
                          calls: repo as CallRepository,
                          familyId: familyId,
                          childId: c.key,
                          childName: c.value,
                          relUid: repo.uid!,
                          from: CallFrom.relative,
                          title: tr2('عائلة $parentName', '$parentName’s family'),
                        ),
                        icon: const Icon(Icons.call_rounded),
                        label: Text(tr2('اتصل بشأن ${c.value}', 'Call about ${c.value}')),
                      ),
                    if (me.videoOn)
                      for (final c in me.children.entries)
                        OutlinedButton.icon(
                          key: ValueKey('videocall_${c.key}'),
                          onPressed: () => startCallScreen(
                            context,
                            calls: repo as CallRepository,
                            familyId: familyId,
                            childId: c.key,
                            childName: c.value,
                            relUid: repo.uid!,
                            from: CallFrom.relative,
                            title: tr2('عائلة $parentName', '$parentName’s family'),
                            video: true,
                          ),
                          icon: const Icon(Icons.videocam_rounded),
                          label: Text(tr2('فيديو (${c.value})', 'Video (${c.value})')),
                        ),
                  ]),
                Wrap(spacing: 8, children: [
                  for (final c in me.children.entries)
                    ActionChip(
                      key: ValueKey('write_${c.key}'),
                      label: Text(c.value),
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => ChatScreen(repo: repo, familyId: familyId, childId: c.key, childName: c.value, relUid: repo.uid!, as: Side.relative, title: c.value, calls: repo is CallRepository ? repo as CallRepository : null, callsOn: me.callsOn, voiceOn: me.voiceOn, videoOn: me.videoOn)),
                      ),
                    ),
                ]),
              ],
            ]),
          ),
        );
      },
    );
  }
}


/// A voice message: a play button and the length. The sound is fetched only when played, and is gone after
/// 14 days (then it says so).
class VoiceBubble extends StatefulWidget {
  final FamilyRepository repo;
  final String familyId;
  final FamilyMessage message;
  const VoiceBubble({super.key, required this.repo, required this.familyId, required this.message});

  @override
  State<VoiceBubble> createState() => _VoiceBubbleState();
}

class _VoiceBubbleState extends State<VoiceBubble> {
  static VoicePlayer? _current; // one voice message at a time
  static _VoiceBubbleState? _currentOwner;
  VoicePlayer? _player;
  bool _playing = false;
  bool _loading = false;
  bool _gone = false;
  StreamSubscription<bool>? _sub;

  @override
  void dispose() {
    _sub?.cancel();
    if (_currentOwner == this) {
      _current = null;
      _currentOwner = null;
    }
    _player?.stop().whenComplete(() => _player?.dispose());
    super.dispose();
  }

  Future<void> _toggle() async {
    if (_playing) {
      await _player?.stop();
      if (mounted) setState(() => _playing = false);
      return;
    }
    setState(() => _loading = true);
    try {
      final clip = await widget.repo.loadVoice(widget.familyId, widget.message.body, relUid: widget.message.relUid);
      if (clip == null) {
        if (mounted) setState(() => _gone = true);
        return;
      }
      await _current?.stop();
      _currentOwner?._playing = false;
      final p = _player ??= newVoicePlayer();
      _sub ??= p.playing.listen((v) {
        if (mounted) setState(() => _playing = v);
      });
      _current = p;
      _currentOwner = this;
      await p.play(clip);
      if (mounted) setState(() => _playing = true);
    } catch (e) {
      if (mounted) showToast(context, _err(e));
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_gone) return Text(tr2('انتهت صلاحية هذه الرسالة الصوتية', 'This voice message has expired'), key: const ValueKey('voice_gone'), style: DS.caption);
    return Row(mainAxisSize: MainAxisSize.min, children: [
      _loading
          ? const SizedBox(width: 40, height: 40, child: Padding(padding: EdgeInsets.all(8), child: CircularProgressIndicator(strokeWidth: 3)))
          : IconButton.filledTonal(
              key: ValueKey('voice_${widget.message.id}'),
              tooltip: _playing ? tr2('إيقاف', 'Stop') : tr2('تشغيل', 'Play'),
              onPressed: _toggle,
              icon: Icon(_playing ? Icons.stop_rounded : Icons.play_arrow_rounded),
            ),
      const SizedBox(width: 8),
      Text('🎤 ${widget.message.secs} ${tr2('ث', 's')}', style: const TextStyle(fontSize: 18)),
    ]);
  }
}
