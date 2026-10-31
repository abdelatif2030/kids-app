import 'age_scope.dart';
import 'design/layout.dart';
import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'teachers_market.dart';
import 'teachers_models.dart';
import 'teachers_time.dart';
import 'l10n/strings.dart';

String _subject(String id) => subjectById(id)?.label ?? id;

String _proposalStatus(String s) => switch (s) {
      proposalSent => loc('بانتظار ردّك'),
      proposalShortlisted => loc('في القائمة المختصرة'),
      proposalAccepted => loc('تم القبول'),
      proposalDeclined => loc('مرفوض'),
      proposalWithdrawn => loc('سحبه المدرس'),
      _ => s,
    };

Future<void> _snack(BuildContext context, String text) async {
  if (!context.mounted) return;
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(SnackBar(content: Text(text)));
}

String _err(Object e) => e is AccountException ? e.message : loc('تعذر إكمال العملية، حاول مرة أخرى');

String budgetText(LearningRequest r) {
  if (r.budgetMin == null && r.budgetMax == null) return loc('غير محددة');
  if (r.budgetMin != null && r.budgetMax != null) return tr2('${r.budgetMin}–${r.budgetMax} جنيه للحصة', '${r.budgetMin}–${r.budgetMax} EGP per lesson');
  if (r.budgetMax != null) return tr2('حتى ${r.budgetMax} جنيه للحصة', 'Up to ${r.budgetMax} EGP per lesson');
  return tr2('من ${r.budgetMin} جنيه للحصة', 'From ${r.budgetMin} EGP per lesson');
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
      appBar: AppBar(title: Text(loc('طلباتي التعليمية'))),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          final ok = await Navigator.push<bool>(
            context,
            MaterialPageRoute(builder: (_) => RequestForm(repo: widget.repo)),
          );
          if (ok == true) _reload();
        },
        icon: const Icon(Icons.add),
        label: Text(loc('طلب جديد')),
      ),
      body: FutureBuilder<List<LearningRequest>>(
        future: _list,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return Center(child: FilledButton(onPressed: _reload, child: Text(loc('إعادة المحاولة'))));
          final list = snap.data!;
          if (list.isEmpty) {
            return Center(
              child: Padding(
                padding: EdgeInsets.all(32),
                child: Text(loc('انشر طلباً تعليمياً ليقدّم لك المدرسون عروضهم.'), textAlign: TextAlign.center, style: TextStyle(fontSize: 18)),
              ),
            );
          }
          final now = DateTime.now();
          return CenteredList(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 96),
            children: [
              for (final r in list)
                Card(
                  child: ListTile(
                    title: Text('${_subject(r.subject)}: ${r.goal}', maxLines: 2, overflow: TextOverflow.ellipsis),
                    subtitle: Text(r.status == requestClosed
                        ? loc('مغلق')
                        : (r.isExpired(now) ? loc('انتهت المدة') : tr2('مفتوح حتى ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}', 'Open until ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}'))),
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
      setState(() => _error = loc('اكتب هدف التعلم'));
      return;
    }
    final min = _min.text.trim().isEmpty ? null : int.tryParse(_min.text.trim());
    final max = _max.text.trim().isEmpty ? null : int.tryParse(_max.text.trim());
    if ((_min.text.trim().isNotEmpty && min == null) || (_max.text.trim().isNotEmpty && max == null) ||
        (min != null && max != null && min > max)) {
      setState(() => _error = loc('تحقق من الميزانية (الحد الأدنى لا يزيد على الأقصى)'));
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
      appBar: AppBar(title: Text(loc('طلب تعليمي جديد'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            loc('يراه المدرسون المسجلون. لا تكتب اسم طفلك أو مدرسته أو أرقام هاتف؛ يكفي هدف التعلم والعمر التقريبي.'),
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
            decoration: InputDecoration(labelText: loc('هدف التعلم'), hintText: loc('مثال: تأسيس قراءة عربي لطفل في السادسة')),
          ),
          DropdownButton<int?>(
            isExpanded: true,
            value: _age,
            hint: Text(loc('عمر الطفل (اختياري)')),
            items: [
              DropdownMenuItem<int?>(value: null, child: Text(loc('بدون'))),
              for (final a in ageChoices(current: _age)) DropdownMenuItem<int?>(value: a, child: Text(tr2('$a سنوات', '$a years'))),
            ],
            onChanged: (v) => setState(() => _age = v),
          ),
          Wrap(
            spacing: 8,
            children: [
              ChoiceChip(label: Text(loc('أي طريقة')), selected: _format.isEmpty, onSelected: (_) => setState(() => _format = '')),
              ChoiceChip(label: Text(loc('أونلاين')), selected: _format == formatOnline, onSelected: (_) => setState(() => _format = formatOnline)),
              ChoiceChip(label: Text(loc('حضوري')), selected: _format == formatInPerson, onSelected: (_) => setState(() => _format = formatInPerson)),
            ],
          ),
          TextField(
            controller: _schedule,
            maxLength: 200,
            decoration: InputDecoration(labelText: loc('المواعيد المناسبة'), hintText: loc('مثال: مرتين أسبوعياً بعد العصر')),
          ),
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _min,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(labelText: loc('أقل سعر للحصة (جنيه)')),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: TextField(
                  controller: _max,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(labelText: loc('أعلى سعر للحصة (جنيه)')),
                ),
              ),
            ],
          ),
          TextField(
            controller: _approach,
            maxLength: 300,
            decoration: InputDecoration(labelText: loc('أسلوب تفضله (اختياري)'), hintText: loc('ألعاب، شرح مباشر...')),
          ),
          DropdownButton<int>(
            isExpanded: true,
            value: _days,
            items: [for (final d in [7, 14, 30]) DropdownMenuItem(value: d, child: Text(tr2('يبقى الطلب مفتوحاً $d يوماً', 'The request stays open for $d days')))],
            onChanged: (v) => setState(() => _days = v ?? _days),
          ),
          if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
          const SizedBox(height: 8),
          FilledButton(onPressed: _busy ? null : _publish, child: Text(loc('نشر الطلب'))),
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
        title: Text(loc('قبول العرض')),
        content: Text(
          tr2('ملخص الاتفاق:\n'
          '• المدرس: ${p.teacherName}\n'
          '• السعر: ${p.priceEgp} جنيه للحصة (${p.minutes} دقيقة)\n'
          '• المواعيد: ${p.schedule.isEmpty ? loc('تُتفق لاحقاً') : p.schedule}\n\n'
          'لا يُؤكَّد الحجز إلا بعد أن يقبل المدرس الطلب ويرسل رابط الحصة. لا يوجد دفع داخل التطبيق.', 'Summary of the agreement:\n• Teacher: ${p.teacherName}\n• Price: ${p.priceEgp} EGP per lesson (${p.minutes} minutes)\n• Schedule: ${p.schedule.isEmpty ? loc('تُتفق لاحقاً') : p.schedule}\n\nThe booking is only confirmed after the teacher accepts the request and sends the lesson link. There is no payment inside the app.'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('رجوع'))),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(loc('قبول وإرسال الطلب'))),
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
          whenText: p.schedule.isEmpty ? loc('حسب العرض') : p.schedule,
          childAge: r.childAge,
          note: tr2('من عرض على طلب: ${r.goal}', 'From a proposal on a request: ${r.goal}'),
          priceEgp: p.priceEgp,
          minutes: p.minutes,
          proposalId: p.id,
        ),
      );
      if (mounted) await _snack(context, loc('أُرسل طلب الحصة إلى المدرس. تابعه في «طلباتي».'));
    } catch (e) {
      if (mounted) await _snack(context, _err(e));
    }
    if (mounted) _reload();
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.request;
    return Scaffold(
      appBar: AppBar(title: Text(loc('الطلب والعروض'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Card(
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('${_subject(r.subject)}: ${r.goal}', style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                  if (r.childAge != null) Text(tr2('عمر الطفل: ${r.childAge}', 'Child\'s age: ${r.childAge}')),
                  if (r.format.isNotEmpty) Text(tr2('الطريقة: ${formatLabel(r.format)}', 'Format: ${formatLabel(r.format)}')),
                  if (r.schedule.isNotEmpty) Text(tr2('المواعيد: ${r.schedule}', 'Schedule: ${r.schedule}')),
                  Text(tr2('الميزانية: ${budgetText(r)}', 'Budget: ${budgetText(r)}')),
                  if (r.approach.isNotEmpty) Text(tr2('الأسلوب: ${r.approach}', 'Approach: ${r.approach}')),
                  Text(_status == requestClosed ? loc('الحالة: مغلق') : tr2('مفتوح حتى ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}', 'Open until ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}')),
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
                      label: Text(loc('إغلاق الطلب')),
                    ),
                ],
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 12, bottom: 4),
            child: Text(loc('العروض'), style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          ),
          FutureBuilder<List<Proposal>>(
            future: _proposals,
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
              if (snap.hasError) return FilledButton(onPressed: _reload, child: Text(loc('إعادة المحاولة')));
              final list = snap.data!;
              if (list.isEmpty) return Text(loc('لم تصلك عروض بعد.'));
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
                            Text(tr2('${p.priceEgp} جنيه · ${p.minutes} دقيقة${p.schedule.isEmpty ? '' : ' · ${p.schedule}'}', '${p.priceEgp} EGP · ${p.minutes} minutes${p.schedule.isEmpty ? '' : ' · ${p.schedule}'}')),
                            if (p.firstSteps.isNotEmpty) Text(tr2('أول خطوات: ${p.firstSteps}', 'First steps: ${p.firstSteps}')),
                            if (p.status == proposalSent || p.status == proposalShortlisted)
                              Wrap(
                                spacing: 8,
                                children: [
                                  if (p.status == proposalSent)
                                    OutlinedButton(onPressed: () => _set(p, proposalShortlisted), child: Text(loc('إضافة للقائمة المختصرة'))),
                                  FilledButton(onPressed: () => _accept(p), child: Text(loc('قبول'))),
                                  OutlinedButton(onPressed: () => _set(p, proposalDeclined), child: Text(loc('رفض'))),
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
      if (mounted) await _snack(context, loc('تم إرسال عرضك'));
      _reload();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('طلبات الأهل'))),
      body: FutureBuilder<(List<LearningRequest>, List<Proposal>)>(
        future: _data,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator());
          if (snap.hasError) return Center(child: FilledButton(onPressed: _reload, child: Text(loc('إعادة المحاولة'))));
          final (requests, proposals) = snap.data!;
          final mine = {for (final p in proposals) p.requestId: p};
          if (requests.isEmpty) {
            return Center(child: Text(loc('لا توجد طلبات مفتوحة الآن'), style: TextStyle(fontSize: 18)));
          }
          return CenteredList(
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
                        if (r.childAge != null) Text(tr2('عمر الطفل: ${r.childAge}', 'Child\'s age: ${r.childAge}')),
                        if (r.format.isNotEmpty) Text(tr2('الطريقة: ${formatLabel(r.format)}', 'Format: ${formatLabel(r.format)}')),
                        if (r.schedule.isNotEmpty) Text(tr2('المواعيد: ${r.schedule}', 'Schedule: ${r.schedule}')),
                        Text(tr2('الميزانية: ${budgetText(r)}', 'Budget: ${budgetText(r)}')),
                        if (r.approach.isNotEmpty) Text(tr2('الأسلوب المفضل: ${r.approach}', 'Preferred approach: ${r.approach}')),
                        const SizedBox(height: 6),
                        if (mine[r.id] != null) ...[
                          Chip(label: Text(tr2('عرضك: ${_proposalStatus(mine[r.id]!.status)}', 'Your proposal: ${_proposalStatus(mine[r.id]!.status)}'))),
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
                              child: Text(loc('سحب العرض')),
                            ),
                        ] else
                          FilledButton(onPressed: () => _propose(r), child: Text(loc('قدّم عرضاً'))),
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
      setState(() => _error = loc('اكتب عرضك والسعر (رقماً)'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final me = await widget.repo.myTeacherProfile();
      if (me == null) throw AccountException(loc('أنشئ ملفك الشخصي أولاً'));
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
      appBar: AppBar(title: Text(loc('عرض جديد'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Text('${_subject(widget.request.subject)}: ${widget.request.goal}', style: const TextStyle(fontWeight: FontWeight.bold)),
          Text(tr2('الميزانية: ${budgetText(widget.request)}', 'Budget: ${budgetText(widget.request)}')),
          const SizedBox(height: 8),
          TextField(
            controller: _message,
            maxLines: 4,
            maxLength: 800,
            decoration: InputDecoration(labelText: loc('تعريف بنفسك وكيف ستساعد'), border: OutlineInputBorder()),
          ),
          TextField(
            controller: _price,
            keyboardType: TextInputType.number,
            decoration: InputDecoration(labelText: loc('سعر الحصة (جنيه)')),
          ),
          DropdownButton<int>(
            isExpanded: true,
            value: _minutes,
            items: [for (final m in [30, 45, 60, 90]) DropdownMenuItem(value: m, child: Text(tr2('مدة الحصة $m دقيقة', 'Lesson length: $m minutes')))],
            onChanged: (v) => setState(() => _minutes = v ?? _minutes),
          ),
          TextField(controller: _schedule, maxLength: 200, decoration: InputDecoration(labelText: loc('المواعيد المقترحة'))),
          TextField(controller: _steps, maxLength: 500, maxLines: 2, decoration: InputDecoration(labelText: loc('خطة أول حصة'))),
          Text(loc('لا تضع أرقام هاتف أو روابط. التواصل يتم داخل التطبيق بعد قبول عرضك.'), style: TextStyle(fontSize: 12)),
          if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
          FilledButton(onPressed: _busy ? null : _send, child: Text(loc('إرسال العرض'))),
        ],
      ),
    );
  }
}
