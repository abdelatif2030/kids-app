import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_market.dart';
import 'teachers_models.dart';
import 'teachers_time.dart';

String _subject(String id) => subjectById(id)?.label ?? id;

String _proposalStatus(String s) => switch (s) {
      proposalSent => 'بانتظار ردّك',
      proposalShortlisted => 'في القائمة المختصرة',
      proposalAccepted => 'تم القبول',
      proposalDeclined => 'مرفوض',
      proposalWithdrawn => 'سحبه المدرس',
      _ => s,
    };

Future<void> _snack(BuildContext context, String text) async {
  if (!context.mounted) return;
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(SnackBar(content: Text(text)));
}

String _err(Object e) => e is AccountException ? e.message : 'تعذر إكمال العملية، حاول مرة أخرى';

String budgetText(LearningRequest r) {
  if (r.budgetMin == null && r.budgetMax == null) return 'غير محددة';
  if (r.budgetMin != null && r.budgetMax != null) return '${r.budgetMin}–${r.budgetMax} جنيه للحصة';
  if (r.budgetMax != null) return 'حتى ${r.budgetMax} جنيه للحصة';
  return 'من ${r.budgetMin} جنيه للحصة';
}

// ------------------------------------------------------------------------------
// Parent side

/// A parent's own learning requests.
class MyRequestsScreen extends StatefulWidget {
  final TeacherRepository repo;
  const MyRequestsScreen({super.key, required this.repo});

  @override
  State<MyRequestsScreen> createState() => _MyRequestsScreenState();
}

class _MyRequestsScreenState extends State<MyRequestsScreen> {
  late Future<List<LearningRequest>> _list = widget.repo.myRequests();

  void _reload() {
    final f = widget.repo.myRequests();
    setState(() {
      _list = f;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('طلباتي التعليمية')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          final ok = await Navigator.push<bool>(
            context,
            MaterialPageRoute(builder: (_) => RequestForm(repo: widget.repo)),
          );
          if (ok == true) _reload();
        },
        icon: const Icon(Icons.add),
        label: const Text('طلب جديد'),
      ),
      body: FutureBuilder<List<LearningRequest>>(
        future: _list,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return Center(child: FilledButton(onPressed: _reload, child: const Text('إعادة المحاولة')));
          final list = snap.data!;
          if (list.isEmpty) {
            return const Center(
              child: Padding(
                padding: EdgeInsets.all(32),
                child: Text('انشر طلباً تعليمياً ليقدّم لك المدرسون عروضهم.', textAlign: TextAlign.center, style: TextStyle(fontSize: 18)),
              ),
            );
          }
          final now = DateTime.now();
          return ListView(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 96),
            children: [
              for (final r in list)
                Card(
                  child: ListTile(
                    title: Text('${_subject(r.subject)}: ${r.goal}', maxLines: 2, overflow: TextOverflow.ellipsis),
                    subtitle: Text(r.status == requestClosed
                        ? 'مغلق'
                        : (r.isExpired(now) ? 'انتهت المدة' : 'مفتوح حتى ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}')),
                    trailing: const Icon(Icons.chevron_left),
                    onTap: () async {
                      await Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => RequestDetailScreen(repo: widget.repo, request: r)),
                      );
                      _reload();
                    },
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}

/// Publishing a request. Only the information teachers need; no child name,
/// photo, school or contact details are asked for.
class RequestForm extends StatefulWidget {
  final TeacherRepository repo;
  const RequestForm({super.key, required this.repo});

  @override
  State<RequestForm> createState() => _RequestFormState();
}

class _RequestFormState extends State<RequestForm> {
  String _subjectId = kSubjects.first.id;
  final _goal = TextEditingController();
  final _schedule = TextEditingController();
  final _min = TextEditingController();
  final _max = TextEditingController();
  final _approach = TextEditingController();
  int? _age;
  String _format = '';
  int _days = 14;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    for (final c in [_goal, _schedule, _min, _max, _approach]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _publish() async {
    if (_goal.text.trim().isEmpty) {
      setState(() => _error = 'اكتب هدف التعلم');
      return;
    }
    final min = _min.text.trim().isEmpty ? null : int.tryParse(_min.text.trim());
    final max = _max.text.trim().isEmpty ? null : int.tryParse(_max.text.trim());
    if ((_min.text.trim().isNotEmpty && min == null) || (_max.text.trim().isNotEmpty && max == null) ||
        (min != null && max != null && min > max)) {
      setState(() => _error = 'تحقق من الميزانية (الحد الأدنى لا يزيد على الأقصى)');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await widget.repo.createRequest(LearningRequest(
        parentUid: widget.repo.currentUser!.uid,
        subject: _subjectId,
        goal: _goal.text.trim(),
        childAge: _age,
        format: _format,
        schedule: _schedule.text.trim(),
        budgetMin: min,
        budgetMax: max,
        approach: _approach.text.trim(),
        expiresMs: DateTime.now().add(Duration(days: _days)).millisecondsSinceEpoch,
      ));
      if (mounted) Navigator.pop(context, true);
    } catch (e) {
      if (mounted) setState(() => _error = _err(e));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('طلب تعليمي جديد')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text(
            'يراه المدرسون المسجلون. لا تكتب اسم طفلك أو مدرسته أو أرقام هاتف؛ يكفي هدف التعلم والعمر التقريبي.',
            style: TextStyle(fontSize: 13),
          ),
          const SizedBox(height: 8),
          DropdownButton<String>(
            isExpanded: true,
            value: _subjectId,
            items: [for (final s in kSubjects) DropdownMenuItem(value: s.id, child: Text(s.label))],
            onChanged: (v) => setState(() => _subjectId = v ?? _subjectId),
          ),
          TextField(
            controller: _goal,
            maxLines: 3,
            maxLength: 500,
            decoration: const InputDecoration(labelText: 'هدف التعلم', hintText: 'مثال: تأسيس قراءة عربي لطفل في السادسة'),
          ),
          DropdownButton<int?>(
            isExpanded: true,
            value: _age,
            hint: const Text('عمر الطفل (اختياري)'),
            items: [
              const DropdownMenuItem<int?>(value: null, child: Text('بدون')),
              for (var a = 1; a <= 12; a++) DropdownMenuItem<int?>(value: a, child: Text('$a سنوات')),
            ],
            onChanged: (v) => setState(() => _age = v),
          ),
          Wrap(
            spacing: 8,
            children: [
              ChoiceChip(label: const Text('أي طريقة'), selected: _format.isEmpty, onSelected: (_) => setState(() => _format = '')),
              ChoiceChip(label: const Text('أونلاين'), selected: _format == formatOnline, onSelected: (_) => setState(() => _format = formatOnline)),
              ChoiceChip(label: const Text('حضوري'), selected: _format == formatInPerson, onSelected: (_) => setState(() => _format = formatInPerson)),
            ],
          ),
          TextField(
            controller: _schedule,
            maxLength: 200,
            decoration: const InputDecoration(labelText: 'المواعيد المناسبة', hintText: 'مثال: مرتين أسبوعياً بعد العصر'),
          ),
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _min,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(labelText: 'أقل سعر للحصة (جنيه)'),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: TextField(
                  controller: _max,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(labelText: 'أعلى سعر للحصة (جنيه)'),
                ),
              ),
            ],
          ),
          TextField(
            controller: _approach,
            maxLength: 300,
            decoration: const InputDecoration(labelText: 'أسلوب تفضله (اختياري)', hintText: 'ألعاب، شرح مباشر...'),
          ),
          DropdownButton<int>(
            isExpanded: true,
            value: _days,
            items: [for (final d in [7, 14, 30]) DropdownMenuItem(value: d, child: Text('يبقى الطلب مفتوحاً $d يوماً'))],
            onChanged: (v) => setState(() => _days = v ?? _days),
          ),
          if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
          const SizedBox(height: 8),
          FilledButton(onPressed: _busy ? null : _publish, child: const Text('نشر الطلب')),
        ],
      ),
    );
  }
}

/// One request with the proposals it received.
class RequestDetailScreen extends StatefulWidget {
  final TeacherRepository repo;
  final LearningRequest request;
  const RequestDetailScreen({super.key, required this.repo, required this.request});

  @override
  State<RequestDetailScreen> createState() => _RequestDetailScreenState();
}

class _RequestDetailScreenState extends State<RequestDetailScreen> {
  late Future<List<Proposal>> _proposals = widget.repo.proposalsForRequest(widget.request.id);
  late String _status = widget.request.status;

  void _reload() {
    final f = widget.repo.proposalsForRequest(widget.request.id);
    setState(() {
      _proposals = f;
    });
  }

  Future<void> _set(Proposal p, String status) async {
    try {
      await widget.repo.setProposalStatus(p.id, status);
    } catch (e) {
      if (mounted) await _snack(context, _err(e));
    }
    if (mounted) _reload();
  }

  Future<void> _accept(Proposal p) async {
    final r = widget.request;
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('قبول العرض'),
        content: Text(
          'ملخص الاتفاق:\n'
          '• المدرس: ${p.teacherName}\n'
          '• السعر: ${p.priceEgp} جنيه للحصة (${p.minutes} دقيقة)\n'
          '• المواعيد: ${p.schedule.isEmpty ? 'تُتفق لاحقاً' : p.schedule}\n\n'
          'لا يُؤكَّد الحجز إلا بعد أن يقبل المدرس الطلب ويرسل رابط الحصة. لا يوجد دفع داخل التطبيق.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('رجوع')),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: const Text('قبول وإرسال الطلب')),
        ],
      ),
    );
    if (ok != true) return;
    try {
      await widget.repo.acceptProposal(
        p,
        Booking(
          parentUid: p.parentUid,
          teacherUid: p.teacherUid,
          teacherName: p.teacherName,
          parentName: await widget.repo.displayName(),
          subject: r.subject,
          whenText: p.schedule.isEmpty ? 'حسب العرض' : p.schedule,
          childAge: r.childAge,
          note: 'من عرض على طلب: ${r.goal}',
          priceEgp: p.priceEgp,
          minutes: p.minutes,
          proposalId: p.id,
        ),
      );
      if (mounted) await _snack(context, 'أُرسل طلب الحصة إلى المدرس. تابعه في «طلباتي».');
    } catch (e) {
      if (mounted) await _snack(context, _err(e));
    }
    if (mounted) _reload();
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.request;
    return Scaffold(
      appBar: AppBar(title: const Text('الطلب والعروض')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Card(
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('${_subject(r.subject)}: ${r.goal}', style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                  if (r.childAge != null) Text('عمر الطفل: ${r.childAge}'),
                  if (r.format.isNotEmpty) Text('الطريقة: ${formatLabel(r.format)}'),
                  if (r.schedule.isNotEmpty) Text('المواعيد: ${r.schedule}'),
                  Text('الميزانية: ${budgetText(r)}'),
                  if (r.approach.isNotEmpty) Text('الأسلوب: ${r.approach}'),
                  Text(_status == requestClosed ? 'الحالة: مغلق' : 'مفتوح حتى ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}'),
                  if (_status == requestOpen)
                    TextButton.icon(
                      onPressed: () async {
                        try {
                          await widget.repo.closeRequest(r.id);
                          setState(() => _status = requestClosed);
                        } catch (e) {
                          if (context.mounted) await _snack(context, _err(e));
                        }
                      },
                      icon: const Icon(Icons.close_rounded),
                      label: const Text('إغلاق الطلب'),
                    ),
                ],
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(top: 12, bottom: 4),
            child: Text('العروض', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          ),
          FutureBuilder<List<Proposal>>(
            future: _proposals,
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
              if (snap.hasError) return FilledButton(onPressed: _reload, child: const Text('إعادة المحاولة'));
              final list = snap.data!;
              if (list.isEmpty) return const Text('لم تصلك عروض بعد.');
              return Column(
                children: [
                  for (final p in list)
                    Card(
                      child: Padding(
                        padding: const EdgeInsets.all(14),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Expanded(child: Text(p.teacherName, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold))),
                                Chip(label: Text(_proposalStatus(p.status))),
                              ],
                            ),
                            Text(p.message),
                            const SizedBox(height: 4),
                            Text('${p.priceEgp} جنيه · ${p.minutes} دقيقة${p.schedule.isEmpty ? '' : ' · ${p.schedule}'}'),
                            if (p.firstSteps.isNotEmpty) Text('أول خطوات: ${p.firstSteps}'),
                            if (p.status == proposalSent || p.status == proposalShortlisted)
                              Wrap(
                                spacing: 8,
                                children: [
                                  if (p.status == proposalSent)
                                    OutlinedButton(onPressed: () => _set(p, proposalShortlisted), child: const Text('إضافة للقائمة المختصرة')),
                                  FilledButton(onPressed: () => _accept(p), child: const Text('قبول')),
                                  OutlinedButton(onPressed: () => _set(p, proposalDeclined), child: const Text('رفض')),
                                ],
                              ),
                          ],
                        ),
                      ),
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

// ------------------------------------------------------------------------------
// Teacher side

/// Open requests from parents, and the teacher's own proposals.
class OpenRequestsScreen extends StatefulWidget {
  final TeacherRepository repo;
  const OpenRequestsScreen({super.key, required this.repo});

  @override
  State<OpenRequestsScreen> createState() => _OpenRequestsScreenState();
}

class _OpenRequestsScreenState extends State<OpenRequestsScreen> {
  late Future<(List<LearningRequest>, List<Proposal>)> _data = _load();

  Future<(List<LearningRequest>, List<Proposal>)> _load() async =>
      (await widget.repo.openRequests(), await widget.repo.myProposals());

  void _reload() {
    final f = _load();
    setState(() {
      _data = f;
    });
  }

  Future<void> _propose(LearningRequest r) async {
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute(builder: (_) => ProposalForm(repo: widget.repo, request: r)),
    );
    if (ok == true) {
      if (mounted) await _snack(context, 'تم إرسال عرضك');
      _reload();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('طلبات الأهل')),
      body: FutureBuilder<(List<LearningRequest>, List<Proposal>)>(
        future: _data,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return Center(child: FilledButton(onPressed: _reload, child: const Text('إعادة المحاولة')));
          final (requests, proposals) = snap.data!;
          final mine = {for (final p in proposals) p.requestId: p};
          if (requests.isEmpty) {
            return const Center(child: Text('لا توجد طلبات مفتوحة الآن', style: TextStyle(fontSize: 18)));
          }
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              for (final r in requests)
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(14),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('${_subject(r.subject)}: ${r.goal}', style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                        if (r.childAge != null) Text('عمر الطفل: ${r.childAge}'),
                        if (r.format.isNotEmpty) Text('الطريقة: ${formatLabel(r.format)}'),
                        if (r.schedule.isNotEmpty) Text('المواعيد: ${r.schedule}'),
                        Text('الميزانية: ${budgetText(r)}'),
                        if (r.approach.isNotEmpty) Text('الأسلوب المفضل: ${r.approach}'),
                        const SizedBox(height: 6),
                        if (mine[r.id] != null) ...[
                          Chip(label: Text('عرضك: ${_proposalStatus(mine[r.id]!.status)}')),
                          if (mine[r.id]!.status == proposalSent || mine[r.id]!.status == proposalShortlisted)
                            TextButton(
                              onPressed: () async {
                                try {
                                  await widget.repo.setProposalStatus(mine[r.id]!.id, proposalWithdrawn);
                                } catch (e) {
                                  if (context.mounted) await _snack(context, _err(e));
                                }
                                if (mounted) _reload();
                              },
                              child: const Text('سحب العرض'),
                            ),
                        ] else
                          FilledButton(onPressed: () => _propose(r), child: const Text('قدّم عرضاً')),
                      ],
                    ),
                  ),
                ),
            ],
          );
        },
      ),
    );
  }
}

class ProposalForm extends StatefulWidget {
  final TeacherRepository repo;
  final LearningRequest request;
  const ProposalForm({super.key, required this.repo, required this.request});

  @override
  State<ProposalForm> createState() => _ProposalFormState();
}

class _ProposalFormState extends State<ProposalForm> {
  final _message = TextEditingController();
  final _price = TextEditingController();
  final _schedule = TextEditingController();
  final _steps = TextEditingController();
  int _minutes = 45;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    for (final c in [_message, _price, _schedule, _steps]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _send() async {
    final price = int.tryParse(_price.text.trim());
    if (_message.text.trim().isEmpty || price == null || price < 0) {
      setState(() => _error = 'اكتب عرضك والسعر (رقماً)');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final me = await widget.repo.myTeacherProfile();
      if (me == null) throw const AccountException('أنشئ ملفك الشخصي أولاً');
      await widget.repo.submitProposal(Proposal(
        requestId: widget.request.id,
        parentUid: widget.request.parentUid,
        teacherUid: widget.repo.currentUser!.uid,
        teacherName: me.name,
        message: _message.text.trim(),
        priceEgp: price,
        minutes: _minutes,
        schedule: _schedule.text.trim(),
        firstSteps: _steps.text.trim(),
      ));
      if (mounted) Navigator.pop(context, true);
    } catch (e) {
      if (mounted) setState(() => _error = _err(e));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('عرض جديد')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text('${_subject(widget.request.subject)}: ${widget.request.goal}', style: const TextStyle(fontWeight: FontWeight.bold)),
          Text('الميزانية: ${budgetText(widget.request)}'),
          const SizedBox(height: 8),
          TextField(
            controller: _message,
            maxLines: 4,
            maxLength: 800,
            decoration: const InputDecoration(labelText: 'تعريف بنفسك وكيف ستساعد', border: OutlineInputBorder()),
          ),
          TextField(
            controller: _price,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(labelText: 'سعر الحصة (جنيه)'),
          ),
          DropdownButton<int>(
            isExpanded: true,
            value: _minutes,
            items: [for (final m in [30, 45, 60, 90]) DropdownMenuItem(value: m, child: Text('مدة الحصة $m دقيقة'))],
            onChanged: (v) => setState(() => _minutes = v ?? _minutes),
          ),
          TextField(controller: _schedule, maxLength: 200, decoration: const InputDecoration(labelText: 'المواعيد المقترحة')),
          TextField(controller: _steps, maxLength: 500, maxLines: 2, decoration: const InputDecoration(labelText: 'خطة أول حصة')),
          const Text('لا تضع أرقام هاتف أو روابط. التواصل يتم داخل التطبيق بعد قبول عرضك.', style: TextStyle(fontSize: 12)),
          if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
          FilledButton(onPressed: _busy ? null : _send, child: const Text('إرسال العرض')),
        ],
      ),
    );
  }
}
