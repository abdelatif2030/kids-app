import 'online_unavailable.dart';
import 'design/app_logo.dart';
import 'design/brand.dart';
import 'design/layout.dart';
import 'design/motion.dart';
import 'design/tokens.dart';

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
      body: OnlineUnavailableView(what: tr2('خدمة المدرسين.', 'The teachers service.')),
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
  const AuthScreen({
    super.key,
    required this.repo,
    required this.onSignedIn,
    this.roles = const [UserRole.parent, UserRole.teacher],
  });

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
  String? _info;

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
    } catch (_) {
      // Any other failure (no network, service down, unexpected error): a clear message, never a crash or a blank screen.
      if (mounted) setState(() => _error = tr2('تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.', 'Could not reach the service. Check your internet and try again.'));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// Google sign-in: the new account gets the role chosen above; an existing account keeps its own.
  Future<void> _google() async {
    setState(() {
      _busy = true;
      _error = null;
      _info = null;
    });
    try {
      await widget.repo.signInWithGoogle(role: _role);
      if (mounted) widget.onSignedIn();
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = tr2('تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.', 'Could not reach the service. Check the internet and try again.'));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// "Forgot password": sends a reset e-mail. The answer is the same whether or not the address has an account.
  Future<void> _forgot() async {
    final email = _email.text.trim();
    if (!email.contains('@') || !email.contains('.')) {
      setState(() { _error = loc('اكتب بريداً إلكترونياً صحيحاً'); _info = null; });
      return;
    }
    setState(() { _busy = true; _error = null; _info = null; });
    try {
      await widget.repo.sendPasswordReset(email);
      if (mounted) setState(() => _info = tr2('إن كان لهذا البريد حساب فقد أرسلنا إليه رابط تغيير كلمة المرور.', 'If this address has an account, we sent it a link to choose a new password.'));
    } on AccountException catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = tr2('تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.', 'Could not reach the service. Check your internet and try again.'));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Widget _roleCard(UserRole r) {
    final parent = r == UserRole.parent;
    final selected = _role == r;
    final title = switch (r) {
      UserRole.parent => tr2('ولي الأمر', 'Parent'),
      UserRole.teacher => tr2('المدرس', 'Teacher'),
      UserRole.relative => tr2('قريب', 'Relative'),
    };
    final sub = switch (r) {
      UserRole.parent => tr2('إدارة رحلة طفلك', "Manage your child's journey"),
      UserRole.teacher => tr2(
        'إدارة رحلتك التعليمية',
        'Manage your teaching journey',
      ),
      UserRole.relative => tr2(
        'تواصل مع العائلة',
        'Stay in touch with the family',
      ),
    };
    return Expanded(
      child: AnimatedScale(
        scale: selected ? 1.0 : 0.96,
        duration: const Duration(milliseconds: 180),
        child: Semantics(
          button: true,
          selected: selected,
          label: '$title. $sub',
          excludeSemantics: true,
          child: InkWell(
            key: ValueKey('role_${r.name}'),
            borderRadius: BorderRadius.circular(22),
            onTap: () => setState(() => _role = r),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 180),
              height: 118,
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: selected
                      ? const [Color(0xFF8A5CFF), Color(0xFF5B34D6)]
                      : const [Color(0xFF4A3590), Color(0xFF3B2A78)],
                ),
                borderRadius: BorderRadius.circular(22),
                border: Border.all(
                  color: selected ? DS.highlight : Colors.white24,
                  width: selected ? 3 : 1,
                ),
                boxShadow: selected ? DS.glow : null,
              ),
              child: FittedBox(
                fit: BoxFit.scaleDown,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      parent
                          ? Icons.family_restroom_rounded
                          : (r == UserRole.teacher
                                ? Icons.school_rounded
                                : Icons.favorite_rounded),
                      color: Colors.white,
                      size: 30,
                    ),
                    const SizedBox(height: 6),
                    Text(
                      title,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 17,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                    Text(
                      sub,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: Colors.white70,
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  /// Google sign-in works (it needs the Google provider switched on in the Firebase console). Apple sign-in is not
  /// built: it is shown switched off with the reason, never as a working button.
  Widget _providerButtons() => Column(
    children: [
      Text(
        tr2('أو سجّل الدخول مباشرة', 'Or sign in directly'),
        style: const TextStyle(color: Colors.white70),
      ),
      const SizedBox(height: 8),
      Row(
        children: [
          Expanded(
            child: Semantics(
              button: true,
              label: '${tr2('المتابعة باستخدام', 'Continue with')} Google',
              excludeSemantics: true,
              child: InkWell(
                key: const ValueKey('provider_google'),
                borderRadius: BorderRadius.circular(16),
                onTap: _busy ? null : _google,
                child: Container(
                  height: 52,
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.g_mobiledata_rounded, color: Color(0xFF2D3A5C), size: 28),
                      SizedBox(width: 6),
                      Text('Google', style: TextStyle(color: Color(0xFF2D3A5C), fontWeight: FontWeight.w800)),
                    ],
                  ),
                ),
              ),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: _provider(
              key: 'apple',
              label: tr2('Apple', 'Apple'),
              icon: Icons.apple_rounded,
              bg: Colors.black,
              fg: Colors.white,
            ),
          ),
        ],
      ),
      const SizedBox(height: 6),
      Text(
        widget.roles.length > 1
            ? tr2(
                'أول مرة؟ اختر ولي الأمر أو المدرس من «حساب جديد» ثم اضغط Google. الدخول عبر Apple غير مفعّل بعد.',
                'First time? Pick Parent or Teacher in the sign-up form, then press Google. Apple sign-in is not available yet.',
              )
            : tr2('الدخول عبر Apple غير مفعّل بعد.', 'Apple sign-in is not available yet.'),
        textAlign: TextAlign.center,
        style: const TextStyle(color: Colors.white54, fontSize: 12),
      ),
    ],
  );

  Widget _provider({
    required String key,
    required String label,
    required IconData icon,
    required Color bg,
    required Color fg,
  }) => Opacity(
    opacity: 0.45,
    child: Semantics(
      button: true,
      enabled: false,
      label:
          '${tr2('المتابعة باستخدام', 'Continue with')} $label (${tr2('غير مفعّل', 'not available yet')})',
      excludeSemantics: true,
      child: Container(
        key: ValueKey('provider_$key'),
        height: 52,
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: fg, size: 28),
            const SizedBox(width: 6),
            Text(
              label,
              style: TextStyle(color: fg, fontWeight: FontWeight.w800),
            ),
          ],
        ),
      ),
    ),
  );

  @override
  Widget build(BuildContext context) {
    final inputTheme = InputDecorationTheme(
      filled: true,
      fillColor: Colors.white,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: BorderSide.none,
      ),
    );
    return Scaffold(
      backgroundColor: const Color(0xFF1E1250),
      appBar: AppBar(
        title: Text(loc('حساب الأهل والمدرسين')),
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: DecoratedBox(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF3B2A78), Color(0xFF1E1250)],
          ),
        ),
        child: AutofillGroup(
          child: LayoutBuilder(
            builder: (context, box) {
              final left = <Widget>[
                Center(
                  child: _Entrance(
                    child: AppLogo(width: box.maxWidth >= 700 ? 170 : 200),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  tr2(
                    'أهلاً بيك في عالم رحلتي',
                    'Welcome to the world of Rehlaty',
                  ),
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                Text(
                  tr2(
                    'كل رحلة جميلة تبدأ بخطوة',
                    'Every beautiful journey starts with a step',
                  ),
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white70),
                ),
                const SizedBox(height: 14),
                // The hero: Adam and Nour in the purple world (the magical island artwork is not in the project yet).
                Container(
                  height: 130,
                  decoration: BoxDecoration(
                    gradient: DS.primaryGradient,
                    borderRadius: BorderRadius.circular(26),
                    boxShadow: DS.glow,
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      CharacterImage(BrandCharacter.adam, height: 118),
                      CharacterImage(BrandCharacter.nour, height: 118),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                if (widget.roles.length > 1) ...[
                  Row(
                    children: [
                      for (final (i, r) in widget.roles.indexed) ...[
                        if (i > 0) const SizedBox(width: 10),
                        _roleCard(r),
                      ],
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(
                    _register
                        ? tr2(
                            'الحساب الجديد سيكون حساب ${_role == UserRole.teacher ? 'مدرس' : 'ولي أمر'}',
                            'The new account will be a ${_role.name} account',
                          )
                        : tr2(
                            'الدخول يفتح نوع الحساب المسجَّل به.',
                            'Signing in opens the type of account you registered with.',
                          ),
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.white54, fontSize: 12),
                  ),
                  const SizedBox(height: 10),
                ],
              ];
              final right = <Widget>[
                Theme(
                  data: Theme.of(context)
                      .copyWith(inputDecorationTheme: inputTheme),
                  child: Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(26),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        SegmentedButton<bool>(
                          segments: [
                            ButtonSegment(
                              value: false,
                              label: Text(loc('دخول')),
                            ),
                            ButtonSegment(
                              value: true,
                              label: Text(loc('حساب جديد')),
                            ),
                          ],
                          selected: {_register},
                          onSelectionChanged: (s) => setState(() {
                            _register = s.first;
                            _error = null;
                          }),
                        ),
                        const SizedBox(height: 12),
                        if (_register)
                          TextField(
                            controller: _name,
                            autofillHints: const [AutofillHints.name],
                            decoration: InputDecoration(
                              labelText: loc('الاسم'),
                              filled: true,
                              fillColor: DS.cream,
                            ),
                          ),
                        if (_register) const SizedBox(height: 8),
                        TextField(
                          controller: _email,
                          autofillHints: const [AutofillHints.email],
                          keyboardType: TextInputType.emailAddress,
                          textDirection: TextDirection.ltr,
                          decoration: InputDecoration(
                            labelText: loc('البريد الإلكتروني'),
                            filled: true,
                            fillColor: DS.cream,
                          ),
                        ),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _password,
                          autofillHints: [
                            _register
                                ? AutofillHints.newPassword
                                : AutofillHints.password,
                          ],
                          obscureText: true,
                          textDirection: TextDirection.ltr,
                          decoration: InputDecoration(
                            labelText: loc('كلمة المرور'),
                            filled: true,
                            fillColor: DS.cream,
                          ),
                        ),
                        if (_error != null)
                          Padding(
                            padding: const EdgeInsets.only(top: 12),
                            child: Text(
                              _error!,
                              key: const ValueKey('auth_error'),
                              style: const TextStyle(
                                color: Color(0xFFD64545),
                                fontSize: 16,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ),
                        if (_info != null)
                          Padding(
                            padding: const EdgeInsets.only(top: 12),
                            child: Text(_info!, key: const ValueKey('auth_info'), style: const TextStyle(color: Color(0xFF2E7D32), fontSize: 16, fontWeight: FontWeight.w700)),
                          ),
                        const SizedBox(height: 14),
                        FilledButton(
                          style: FilledButton.styleFrom(
                            minimumSize: const Size.fromHeight(54),
                            backgroundColor: DS.primary,
                          ),
                          onPressed: _busy ? null : _submit,
                          child: _busy
                              ? const SizedBox(
                                  width: 22,
                                  height: 22,
                                  child: CircularProgressIndicator(
                                    strokeWidth: 3,
                                    color: Colors.white,
                                  ),
                                )
                              : Text(
                                  _register ? loc('إنشاء الحساب') : loc('دخول'),
                                ),
                        ),
                        if (!_register)
                          TextButton(
                            key: const ValueKey('auth_forgot'),
                            onPressed: _busy ? null : _forgot,
                            child: Text(tr2('نسيت كلمة المرور؟', 'Forgot your password?')),
                          ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 14),
                _providerButtons(),
                const SizedBox(height: 16),
                Text(
                  tr2(
                    'نحفظ بريدك واسمك فقط. لا نجمع أي بيانات عن الطفل، وليس للأطفال حسابات. الرسائل بين البالغين فقط: أقارب وافق عليهم الأهل، أو مدرّس وولي أمر بشأن حجز.',
                    'We keep only your e-mail and name. We collect no data about the child, and children have no accounts. Messages are between adults only: relatives a parent approved, or a teacher and a parent about a booking.',
                  ),
                  style: const TextStyle(fontSize: 13, color: Colors.white54),
                  textAlign: TextAlign.center,
                ),
              ];
              // Wide (a phone turned sideways, a tablet, the web): the story on one side, the form on the other.
              if (box.maxWidth >= 700) {
                return Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 1000),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: SingleChildScrollView(
                            padding: const EdgeInsets.all(20),
                            child: Column(children: left),
                          ),
                        ),
                        Expanded(
                          child: SingleChildScrollView(
                            padding: const EdgeInsets.all(20),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: right,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              }
              return CenteredList(
                padding: const EdgeInsets.all(20),
                children: [...left, ...right],
              );
            },
          ),
        ),
      ),
    );
  }
}

/// The logo fades and grows in once (not under reduced motion or in tests).
class _Entrance extends StatelessWidget {
  final Widget child;
  const _Entrance({required this.child});

  @override
  Widget build(BuildContext context) {
    final still =
        motionReduced(context) ||
        WidgetsBinding.instance.runtimeType.toString().contains('Test');
    if (still) return child;
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0, end: 1),
      duration: const Duration(milliseconds: 600),
      curve: Curves.easeOutBack,
      builder: (_, v, c) => Opacity(
        opacity: v.clamp(0, 1),
        child: Transform.scale(scale: 0.85 + 0.15 * v, child: c),
      ),
      child: child,
    );
  }
}
