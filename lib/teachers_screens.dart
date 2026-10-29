import 'design/layout.dart';
import 'package:flutter/material.dart';

import 'firebase_config.dart';
import 'teachers_models.dart';
import 'teachers_parent.dart';
import 'teachers_teacher.dart';
import 'l10n/strings.dart';

/// Entry to teachers and accounts. Reachable only from Parent settings (behind
/// the PIN), never from the child's screens.
///
/// [repo] is injected in tests; otherwise the Firebase repository is used, or
/// null when Firebase is not activated yet.
class TeachersEntryScreen extends StatefulWidget {
  final TeacherRepository? repo;
  const TeachersEntryScreen({super.key, this.repo});

  @override
  State<TeachersEntryScreen> createState() => _TeachersEntryScreenState();
}

class _TeachersEntryScreenState extends State<TeachersEntryScreen> {
  TeacherRepository? get _repo => widget.repo ?? teacherRepository;
  Future<UserRole?>? _role;

  @override
  void initState() {
    super.initState();
    if (_repo?.currentUser != null) _role = _repo!.currentRole();
  }

  void _signedIn() {
    final role = _repo!.currentRole();
    setState(() {
      _role = role;
    });
  }

  Future<void> _signOut() async {
    await _repo!.signOut();
    if (mounted) setState(() => _role = null);
  }

  @override
  Widget build(BuildContext context) {
    final repo = _repo;
    if (repo == null) return const _NotActivated();
    if (repo.currentUser == null || _role == null) {
      return AuthScreen(repo: repo, onSignedIn: _signedIn);
    }
    return FutureBuilder<UserRole?>(
      future: _role,
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done) {
          return Scaffold(
            appBar: AppBar(title: Text(loc('المدرسون'))),
            body: const Center(child: CircularProgressIndicator()),
          );
        }
        return switch (snapshot.data) {
          UserRole.parent => ParentTeachersScreen(
            repo: repo,
            onSignOut: _signOut,
          ),
          UserRole.teacher => TeacherHomeScreen(
            repo: repo,
            onSignOut: _signOut,
          ),
          // A relative account belongs to the family chat, not to the teachers area.
          UserRole.relative => _IncompleteAccount(onSignOut: _signOut),
          null => _IncompleteAccount(onSignOut: _signOut),
        };
      },
    );
  }
}

class _NotActivated extends StatelessWidget {
  const _NotActivated();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('المدرسون'))),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(24),
          child: Text(
            loc('خدمة المدرسين غير مفعّلة بعد.\nيحتاج صاحب التطبيق إلى ربط مشروع Firebase '
            '(الخطوات في docs/teachers-setup.md).'),
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 20),
          ),
        ),
      ),
    );
  }
}

class _IncompleteAccount extends StatelessWidget {
  final VoidCallback onSignOut;
  const _IncompleteAccount({required this.onSignOut});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('المدرسون'))),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(loc('الحساب غير مكتمل'), style: TextStyle(fontSize: 20)),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: onSignOut,
              child: Text(loc('تسجيل الخروج')),
            ),
          ],
        ),
      ),
    );
  }
}

/// Sign in, or create a parent or teacher account.
class AuthScreen extends StatefulWidget {
  final TeacherRepository repo;
  final VoidCallback onSignedIn;

  /// Which kinds of account can be created here. Teachers use parent/teacher; the family chat uses one role.
  final List<UserRole> roles;
  const AuthScreen({super.key, required this.repo, required this.onSignedIn, this.roles = const [UserRole.parent, UserRole.teacher]});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final _email = TextEditingController();
  final _password = TextEditingController();
  final _name = TextEditingController();
  bool _register = false;
  late UserRole _role = widget.roles.first;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    _name.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    final email = _email.text.trim();
    if (!email.contains('@') || !email.contains('.')) {
      setState(() => _error = loc('اكتب بريداً إلكترونياً صحيحاً'));
      return;
    }
    if (_password.text.length < 6) {
      setState(() => _error = loc('كلمة المرور 6 أحرف على الأقل'));
      return;
    }
    if (_register && _name.text.trim().isEmpty) {
      setState(() => _error = loc('اكتب اسمك'));
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      if (_register) {
        await widget.repo.register(
          email: email,
          password: _password.text,
          name: _name.text,
          role: _role,
        );
      } else {
        await widget.repo.signIn(email, _password.text);
      }
      if (mounted) widget.onSignedIn();
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('حساب الأهل والمدرسين'))),
      body: AutofillGroup(
        child: CenteredList(
          padding: const EdgeInsets.all(24),
          children: [
            SegmentedButton<bool>(
              segments: [
                ButtonSegment(value: false, label: Text(loc('دخول'))),
                ButtonSegment(value: true, label: Text(loc('حساب جديد'))),
              ],
              selected: {_register},
              onSelectionChanged: (s) => setState(() {
                _register = s.first;
                _error = null;
              }),
            ),
            const SizedBox(height: 16),
            if (_register) ...[
              if (widget.roles.length > 1) ...[
                SegmentedButton<UserRole>(
                  segments: [
                    for (final r in widget.roles)
                      ButtonSegment(
                        value: r,
                        label: Text(switch (r) {
                          UserRole.parent => loc('ولي أمر'),
                          UserRole.teacher => loc('مدرس'),
                          UserRole.relative => tr2('قريب', 'Relative'),
                        }),
                      ),
                  ],
                  selected: {_role},
                  onSelectionChanged: (s) => setState(() => _role = s.first),
                ),
                const SizedBox(height: 16),
              ],
              TextField(
                controller: _name,
                autofillHints: const [AutofillHints.name],
                decoration: InputDecoration(labelText: loc('الاسم')),
              ),
            ],
            TextField(
              controller: _email,
              autofillHints: const [AutofillHints.email],
              keyboardType: TextInputType.emailAddress,
              textDirection: TextDirection.ltr,
              decoration: InputDecoration(labelText: loc('البريد الإلكتروني')),
            ),
            TextField(
              controller: _password,
              autofillHints: [
                _register ? AutofillHints.newPassword : AutofillHints.password,
              ],
              obscureText: true,
              textDirection: TextDirection.ltr,
              decoration: InputDecoration(labelText: loc('كلمة المرور')),
            ),
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 12),
                child: Text(
                  _error!,
                  style: const TextStyle(color: Colors.red, fontSize: 16),
                ),
              ),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: _busy ? null : _submit,
              child: Text(_register ? loc('إنشاء الحساب') : loc('دخول')),
            ),
            const SizedBox(height: 24),
            Text(
              loc('نحفظ بريدك واسمك فقط. لا نجمع أي بيانات عن الطفل، ولا توجد محادثات '
              'داخل التطبيق.'),
              style: TextStyle(fontSize: 14),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
