import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../design/components.dart';
import '../design/layout.dart';
import '../design/tokens.dart';
import '../journey/repository.dart';
import '../l10n/strings.dart';
import 'family_models.dart';
import 'family_prefs.dart';
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

  void _reload() {
    final next = widget.repo.relatives();
    setState(() {
      _rels = next;
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
    final made = await showDialog<FamilyInvite>(context: context, builder: (_) => _InviteDialog(repo: widget.repo, parentName: widget.parentName));
    if (made == null || !mounted) return;
    await showDialog<void>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(tr2('رمز الدعوة', 'Invitation code')),
        content: Column(mainAxisSize: MainAxisSize.min, children: [
          SelectableText(made.code, key: const ValueKey('invite_code'), style: DS.title),
          const SizedBox(height: 8),
          Text(
            tr2('أعطِ الرمز لهذا القريب فقط. يعمل مرة واحدة، وبعدها تحتاج أن توافق عليه هنا.', 'Give the code to this one person only. It works once, and then you must approve them here.'),
            style: DS.caption,
          ),
        ]),
        actions: [
          TextButton(
            onPressed: () => Clipboard.setData(ClipboardData(text: made.code)),
            child: Text(tr2('نسخ', 'Copy')),
          ),
          FilledButton(onPressed: () => Navigator.pop(context), child: Text(tr2('تم', 'Done'))),
        ],
      ),
    );
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
        label: Text(tr2('دعوة قريب', 'Invite a relative')),
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
          const SizedBox(height: 12),
          SectionHeader(tr2('الأقارب', 'Relatives')),
          FutureBuilder<List<Relative>>(
            future: _rels,
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) return const Padding(padding: EdgeInsets.all(16), child: LinearProgressIndicator());
              if (snap.hasError) return ErrorState(message: _err(snap.error!), onRetry: _reload);
              final list = [for (final r in snap.data!) if (r.status != kRelativeRemoved) r];
              if (list.isEmpty) {
                return EmptyState(
                  icon: Icons.family_restroom_rounded,
                  title: tr2('لا يوجد أقارب بعد', 'No relatives yet'),
                  message: tr2('اضغط «دعوة قريب» لإنشاء رمز.', 'Tap “Invite a relative” to make a code.'),
                );
              }
              return Column(children: [
                for (final r in list)
                  _RelativeCard(
                    key: ValueKey('rel_${r.uid}'),
                    rel: r,
                    onStatus: (s) => _do(() => widget.repo.setRelativeStatus(r.uid, s)),
                    onChildren: (c) => _do(() => widget.repo.setRelativeChildren(r.uid, c)),
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

class _InviteDialog extends StatefulWidget {
  final FamilyRepository repo;
  final String parentName;
  const _InviteDialog({required this.repo, required this.parentName});

  @override
  State<_InviteDialog> createState() => _InviteDialogState();
}

class _InviteDialogState extends State<_InviteDialog> {
  String _relation = 'grandma';
  final _picked = <String>{};
  bool _busy = false;
  String? _error;

  Future<void> _make() async {
    final kids = {for (final c in JourneyStore.instance.profiles) if (_picked.contains(c.id)) c.id: c.nickname};
    if (kids.isEmpty) {
      setState(() => _error = tr2('اختر طفلاً واحداً على الأقل', 'Choose at least one child'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final inv = await widget.repo.createInvite(parentName: widget.parentName, relation: _relation, children: kids);
      if (mounted) Navigator.pop(context, inv);
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
      title: Text(tr2('دعوة قريب', 'Invite a relative')),
      content: SingleChildScrollView(
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
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
          if (_error != null) Text(_error!, style: DS.body.copyWith(color: DS.error)),
        ]),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: Text(tr2('إلغاء', 'Cancel'))),
        FilledButton(key: const ValueKey('make_code'), onPressed: _busy ? null : _make, child: Text(tr2('إنشاء الرمز', 'Make code'))),
      ],
    );
  }
}

class _RelativeCard extends StatelessWidget {
  final Relative rel;
  final ValueChanged<String> onStatus;
  final ValueChanged<Map<String, String>> onChildren;
  const _RelativeCard({super.key, required this.rel, required this.onStatus, required this.onChildren});

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
              onChanged: (v) => _set(c.id, ChildChatPrefs(chatOn: v, textOn: v && (_prefs[c.id]?.textOn ?? false))),
            ),
            if (_prefs[c.id]?.chatOn ?? false)
              SwitchListTile(
                key: ValueKey('text_on_${c.id}'),
                title: Text(tr2('السماح بالكتابة', 'Allow typing')),
                subtitle: Text(tr2('بدونها: عبارات جاهزة وملصقات فقط', 'Off: ready phrases and stickers only')),
                value: _prefs[c.id]?.textOn ?? false,
                onChanged: (v) => _set(c.id, ChildChatPrefs(chatOn: true, textOn: v)),
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
                        child: Text('${m.from == Side.child ? m.childName : tr2('القريب', 'Relative')}: ${m.shown}'),
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
class ChildFamilyScreen extends StatelessWidget {
  final FamilyRepository repo;
  final String familyId;
  final String childId;
  final String childName;
  const ChildFamilyScreen({super.key, required this.repo, required this.familyId, required this.childId, required this.childName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('عائلتي', 'My family'))),
      body: FutureBuilder<List<Relative>>(
        future: repo.relatives(),
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          final mine = [for (final r in snap.data ?? const <Relative>[]) if (r.active && r.children.containsKey(childId)) r];
          if (mine.isEmpty) {
            return EmptyState(icon: Icons.family_restroom_rounded, title: tr2('لا يوجد أحد هنا بعد', 'Nobody here yet'), message: tr2('اطلب من ماما أو بابا.', 'Ask your parent.'));
          }
          return CenteredList(padding: const EdgeInsets.all(16), children: [
            for (final r in mine)
              Card(
                child: ListTile(
                  key: ValueKey('talk_${r.uid}'),
                  minTileHeight: 72,
                  leading: const Icon(Icons.favorite_rounded, color: DS.error),
                  title: Text(relationLabel(r.relation), style: DS.heading),
                  subtitle: Text(r.name),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => ChatScreen(repo: repo, familyId: familyId, childId: childId, childName: childName, relUid: r.uid, as: Side.child, title: relationLabel(r.relation))),
                  ),
                ),
              ),
          ]);
        },
      ),
    );
  }
}

class ChatScreen extends StatefulWidget {
  final FamilyRepository repo;
  final String familyId;
  final String childId;
  final String childName;
  final String relUid;
  final Side as;
  final String title;
  const ChatScreen({
    super.key,
    required this.repo,
    required this.familyId,
    required this.childId,
    required this.childName,
    required this.relUid,
    required this.as,
    required this.title,
  });

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _text = TextEditingController();
  bool _typing = false; // whether free typing is available on this side
  bool _sending = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    if (widget.as == Side.relative) {
      _typing = true;
    } else {
      FamilyPrefs.of(widget.childId).then((p) {
        if (mounted) setState(() => _typing = p.textOn);
      });
    }
  }

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: SafeArea(
        child: ResponsiveBody(
          maxWidth: 640,
          child: Column(children: [
            Expanded(
              child: StreamBuilder<List<FamilyMessage>>(
                stream: widget.repo.watch(familyId: widget.familyId, childId: widget.childId, relUid: widget.relUid),
                builder: (context, snap) {
                  final msgs = snap.data ?? const <FamilyMessage>[];
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
                          decoration: BoxDecoration(
                            color: (m.from == widget.as) ? DS.primarySoft : DS.surface,
                            borderRadius: BorderRadius.circular(DS.rMedium),
                            border: Border.all(color: DS.border),
                          ),
                          child: Text(m.shown, style: TextStyle(fontSize: m.kind == kindSticker ? 36 : 18, color: DS.ink)),
                        ),
                      ),
                  ]);
                },
              ),
            ),
            if (_error != null) Padding(padding: const EdgeInsets.all(8), child: Text(_error!, key: const ValueKey('chat_error'), style: DS.body.copyWith(color: DS.error))),
            _Composer(typing: _typing, sending: _sending, controller: _text, onSend: _send),
          ]),
        ),
      ),
    );
  }
}

class _Composer extends StatelessWidget {
  final bool typing;
  final bool sending;
  final TextEditingController controller;
  final Future<void> Function(String kind, String body) onSend;
  const _Composer({required this.typing, required this.sending, required this.controller, required this.onSend});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: DS.surface,
      padding: const EdgeInsets.all(8),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        SizedBox(
          height: 56,
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
            for (final p in kPhrases)
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
        if (typing)
          Row(children: [
            Expanded(
              child: TextField(
                key: const ValueKey('chat_text'),
                controller: controller,
                maxLength: kMaxTextLength,
                decoration: InputDecoration(hintText: tr2('اكتب رسالة', 'Write a message'), counterText: ''),
                onSubmitted: (v) => onSend(kindText, v),
              ),
            ),
            IconButton(key: const ValueKey('chat_send'), tooltip: tr2('إرسال', 'Send'), onPressed: sending ? null : () => onSend(kindText, controller.text), icon: const Icon(Icons.send_rounded)),
          ]),
      ]),
    );
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
  final _code = TextEditingController();
  late Future<List<(String, String)>> _fams = widget.repo.myFamilies();
  String? _error;
  bool _busy = false;

  @override
  void dispose() {
    _code.dispose();
    super.dispose();
  }

  Future<void> _join() async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.repo.joinWithCode(_code.text, name: widget.name);
      _code.clear();
      final next = widget.repo.myFamilies();
      if (mounted) {
        setState(() {
          _fams = next;
        });
        showToast(context, tr2('تم الانضمام. بانتظار موافقة ولي الأمر.', 'Joined. Waiting for the parent to approve.'));
      }
    } catch (e) {
      if (mounted) setState(() => _error = _err(e));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('أنا من العائلة', 'I am family'))),
      body: CenteredList(padding: const EdgeInsets.all(16), children: [
        Text(tr2('اكتب الرمز الذي أعطاك إياه ولي أمر الطفل.', 'Enter the code the child’s parent gave you.'), style: DS.body),
        const SizedBox(height: 8),
        TextField(key: const ValueKey('join_code'), controller: _code, textCapitalization: TextCapitalization.characters, decoration: InputDecoration(labelText: tr2('الرمز', 'Code'))),
        if (_error != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(_error!, key: const ValueKey('join_error'), style: DS.body.copyWith(color: DS.error))),
        const SizedBox(height: 8),
        AppButton(key: const ValueKey('join'), label: tr2('انضمام', 'Join'), loading: _busy, onPressed: _join, expand: true),
        const SizedBox(height: 16),
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
        Text(tr2('لا روابط ولا صور ولا مكالمات هنا. الرسائل نصية قصيرة وملصقات، ويستطيع ولي الأمر قراءتها كلها.', 'No links, photos or calls here. Messages are short text and stickers, and the parent can read all of them.'), style: DS.caption),
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
              if (me == null || !me.active)
                Text(tr2('بانتظار الموافقة', 'Waiting for approval'), key: const ValueKey('waiting'), style: DS.caption)
              else
                Wrap(spacing: 8, children: [
                  for (final c in me.children.entries)
                    ActionChip(
                      key: ValueKey('write_${c.key}'),
                      label: Text(c.value),
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => ChatScreen(repo: repo, familyId: familyId, childId: c.key, childName: c.value, relUid: repo.uid!, as: Side.relative, title: c.value)),
                      ),
                    ),
                ]),
            ]),
          ),
        );
      },
    );
  }
}
