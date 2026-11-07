import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../demo/demo_mode.dart';
import '../design/app_intro.dart';
import '../journey/models.dart';
import '../journey/repository.dart';

import '../design/focusable_tap.dart';
import 'auth_shell.dart';
import '../firebase_config.dart';
import '../journey/ui/start_screen.dart';
import '../l10n/strings.dart';
import '../online_gate.dart';
import '../teachers_models.dart';
import 'account_extras.dart';

// The owner's two sign-in pictures (1536 x 1024) give the look: blurred scenery behind and the children + sign as the header
// (see auth_shell.dart). The form is real and fills the screen, upright or sideways.

const double kAuthAspect = 1536 / 1024;
const String kLoginPicture = 'assets/auth/login.jpg';
const String kRegisterPicture = 'assets/auth/register.jpg';

String _networkMessage() => tr2(
  'تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.',
  'Could not reach the service. Check the internet and try again.',
);
String _unavailableMessage() => tr2(
  'خدمة الحسابات غير متاحة الآن.',
  'Accounts are not available right now.',
);

bool _validEmail(String e) =>
    e.contains('@') && e.contains('.') && e.length >= 5;

void _say(BuildContext context, String text) {
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(
      SnackBar(content: Text(text, textDirection: Directionality.of(context))),
    );
}

Widget _busyVeil() => Positioned.fill(
  child: ColoredBox(
    color: const Color(0x66FFFFFF),
    child: const Center(
      child: CircularProgressIndicator(key: ValueKey('auth_busy')),
    ),
  ),
);

/// The sign-in page (the owner's first picture): e-mail and password, remember me, forgot password, Google, and a way to
/// create an account. «متابعة بدون حساب» (added, small) keeps the app usable without an account.
class LoginPictureScreen extends StatefulWidget {
  /// Tests inject a repository; the app uses the Firebase one.
  final TeacherRepository? repo;

  /// Called when the person is signed in or chooses to continue without an account.
  final VoidCallback onDone;
  const LoginPictureScreen({super.key, this.repo, required this.onDone});

  static const rememberKey = 'remember_email';

  @override
  State<LoginPictureScreen> createState() => _LoginPictureScreenState();
}

class _LoginPictureScreenState extends State<LoginPictureScreen> {
  final _email = TextEditingController();
  final _password = TextEditingController();
  bool _remember = false;
  bool _show = false;
  bool _busy = false;

  TeacherRepository? get _repo => widget.repo ?? teacherRepository;

  @override
  void initState() {
    super.initState();
    _loadRemembered();
  }

  Future<void> _loadRemembered() async {
    try {
      final e = (await SharedPreferences.getInstance()).getString(
        LoginPictureScreen.rememberKey,
      );
      if (e != null && e.isNotEmpty && mounted) {
        setState(() {
          _email.text = e;
          _remember = true;
        });
      }
    } catch (_) {}
  }

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  /// "Remember me" keeps only the e-mail address on this device (never the password).
  Future<void> _storeRemember(String email) async {
    try {
      final p = await SharedPreferences.getInstance();
      if (_remember) {
        await p.setString(LoginPictureScreen.rememberKey, email);
      } else {
        await p.remove(LoginPictureScreen.rememberKey);
      }
    } catch (_) {}
  }

  Future<void> _guard(Future<void> Function(TeacherRepository repo) run) async {
    final repo = _repo;
    if (repo == null) return _say(context, _unavailableMessage());
    setState(() => _busy = true);
    try {
      await run(repo);
    } on AccountException catch (e) {
      if (mounted) _say(context, e.message);
    } catch (_) {
      if (mounted) _say(context, _networkMessage());
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _login() async {
    final email = _email.text.trim();
    if (!_validEmail(email))
      return _say(
        context,
        tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'),
      );
    if (_password.text.length < 6)
      return _say(
        context,
        tr2(
          'كلمة المرور 6 أحرف على الأقل',
          'The password has at least 6 characters',
        ),
      );
    await _guard((repo) async {
      await repo.signIn(email, _password.text);
      await _storeRemember(email);
      if (mounted) widget.onDone();
    });
  }

  Future<void> _google() => _guard((repo) async {
    await repo.signInWithGoogle(role: UserRole.parent);
    if (mounted) widget.onDone();
  });

  Future<void> _forgot() async {
    final email = await showDialog<String>(
      context: context,
      builder: (_) => _ForgotDialog(initial: _email.text.trim()),
    );
    if (email == null || !mounted) return;
    if (!_validEmail(email))
      return _say(
        context,
        tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'),
      );
    await _guard((repo) async {
      await repo.sendPasswordReset(email);
      // The same message whether or not the address has an account (no account probing).
      if (mounted)
        _say(
          context,
          tr2(
            'إن كان للبريد حساب فقد أرسلنا إليه رابط إعادة التعيين.',
            'If the address has an account, we sent it a reset link.',
          ),
        );
    });
  }

  Future<void> _register() async {
    final done = await Navigator.push<bool>(
      context,
      MaterialPageRoute<bool>(
        builder: (_) => RegisterPictureScreen(repo: widget.repo),
      ),
    );
    if (done == true && mounted) widget.onDone();
  }

  @override
  Widget build(BuildContext context) {
    return AuthShell(
      key: const ValueKey('login_picture'),
      asset: kLoginPicture,
      overlay: _busy ? _busyVeil() : null,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            tr2('مرحباً بعودتك مجدداً!', 'Welcome back!'),
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontFamily: 'Tajawal',
              fontSize: 26,
              fontWeight: FontWeight.w900,
              color: authInk,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            tr2(
              'سعداء برؤيتك في رحلتنا الممتعة',
              'Happy to see you on our fun journey',
            ),
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontFamily: 'Tajawal',
              fontSize: 16,
              fontWeight: FontWeight.w700,
              color: authInk,
            ),
          ),
          const SizedBox(height: 16),
          AuthField(
            fieldKey: const ValueKey('login_email'),
            controller: _email,
            hint: tr2('البريد الإلكتروني', 'E-mail'),
            icon: Icons.person_rounded,
            keyboard: TextInputType.emailAddress,
            action: TextInputAction.next,
          ),
          const SizedBox(height: 12),
          AuthField(
            fieldKey: const ValueKey('login_password'),
            controller: _password,
            hint: tr2('كلمة المرور', 'Password'),
            icon: Icons.lock_rounded,
            obscure: !_show,
            action: TextInputAction.done,
            onSubmitted: (_) => _login(),
            trailing: FocusableTap(
              key: const ValueKey('login_eye'),
              radius: 24,
              semanticLabel: tr2('إظهار كلمة المرور', 'Show password'),
              onTap: () => setState(() => _show = !_show),
              child: SizedBox(
                width: 48,
                height: 48,
                child: Icon(
                  _show
                      ? Icons.visibility_off_rounded
                      : Icons.visibility_rounded,
                  color: authPurple,
                  size: 26,
                ),
              ),
            ),
          ),
          const SizedBox(height: 6),
          Wrap(
            alignment: WrapAlignment.spaceBetween,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              AuthTick(
                on: _remember,
                label: tr2('تذكرني', 'Remember me'),
                onTap: () => setState(() => _remember = !_remember),
                tapKey: const ValueKey('login_remember'),
                boxKey: const ValueKey('login_remember_box'),
              ),
              FocusableTap(
                key: const ValueKey('login_forgot'),
                radius: 14,
                semanticLabel: tr2(
                  'نسيت كلمة المرور؟',
                  'Forgot your password?',
                ),
                onTap: _forgot,
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    vertical: 10,
                    horizontal: 4,
                  ),
                  child: Text(
                    tr2('نسيت كلمة المرور؟', 'Forgot your password?'),
                    style: const TextStyle(
                      fontFamily: 'Tajawal',
                      fontSize: 16,
                      fontWeight: FontWeight.w800,
                      color: authInk,
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          KeyedSubtree(
            key: const ValueKey('login_submit'),
            child: AuthButton(
              label: tr2('تسجيل الدخول', 'Sign in'),
              icon: Icons.login_rounded,
              onTap: _login,
            ),
          ),
          const SizedBox(height: 14),
          AuthOr(tr2('أو', 'or')),
          const SizedBox(height: 14),
          KeyedSubtree(
            key: const ValueKey('login_google'),
            child: AuthOutlineButton(
              label: tr2('تسجيل الدخول باستخدام جوجل', 'Sign in with Google'),
              leading: const GoogleG(),
              onTap: _google,
            ),
          ),
          const SizedBox(height: 10),
          Wrap(
            alignment: WrapAlignment.center,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              Text(
                tr2('ليس لديك حساب؟ ', 'No account yet? '),
                style: const TextStyle(
                  fontFamily: 'Tajawal',
                  fontSize: 16,
                  fontWeight: FontWeight.w800,
                  color: authInk,
                ),
              ),
              FocusableTap(
                key: const ValueKey('login_create'),
                radius: 20,
                semanticLabel: tr2('أنشئ حساب الآن', 'Create an account'),
                onTap: _register,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 14,
                    vertical: 10,
                  ),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(24),
                    border: Border.all(color: authPurple, width: 2),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(
                        Icons.person_add_alt_1_rounded,
                        color: authPurple,
                        size: 22,
                      ),
                      const SizedBox(width: 6),
                      Text(
                        tr2('أنشئ حساب الآن', 'Create an account'),
                        style: const TextStyle(
                          fontFamily: 'Tajawal',
                          fontSize: 17,
                          fontWeight: FontWeight.w900,
                          color: authPurple,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          // «Continue without an account» exists outside the demo only: in the demo an account is needed (owner decision).
          if (!DemoMode.enabled) ...[
            const SizedBox(height: 8),
            FocusableTap(
              key: const ValueKey('login_skip'),
              radius: 20,
              semanticLabel: tr2(
                'متابعة بدون حساب',
                'Continue without an account',
              ),
              onTap: widget.onDone,
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 12),
                child: Center(
                  child: Text(
                    tr2('متابعة بدون حساب', 'Continue without an account'),
                    style: const TextStyle(
                      fontFamily: 'Tajawal',
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                      color: authInk,
                      decoration: TextDecoration.underline,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Asks for the e-mail address to send the reset link to. It owns its text controller, so the controller lives exactly as
/// long as the dialog (including its closing animation).
class _ForgotDialog extends StatefulWidget {
  final String initial;
  const _ForgotDialog({required this.initial});

  @override
  State<_ForgotDialog> createState() => _ForgotDialogState();
}

class _ForgotDialogState extends State<_ForgotDialog> {
  late final TextEditingController _c = TextEditingController(
    text: widget.initial,
  );

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
    title: Text(tr2('نسيت كلمة المرور؟', 'Forgot your password?')),
    content: TextField(
      key: const ValueKey('forgot_email'),
      controller: _c,
      keyboardType: TextInputType.emailAddress,
      decoration: InputDecoration(
        labelText: tr2('البريد الإلكتروني', 'E-mail'),
      ),
    ),
    actions: [
      TextButton(
        onPressed: () => Navigator.pop(context),
        child: Text(tr2('إلغاء', 'Cancel')),
      ),
      FilledButton(
        key: const ValueKey('forgot_send'),
        onPressed: () => Navigator.pop(context, _c.text.trim()),
        child: Text(tr2('أرسل الرابط', 'Send the link')),
      ),
    ],
  );
}

/// The sign-up page (the owner's second picture). Required: name, e-mail and a password (or one tap on Google). The child's
/// gender, the child's age and a city are optional, and stay only on this device (see [AccountExtras]).
class RegisterPictureScreen extends StatefulWidget {
  final TeacherRepository? repo;
  const RegisterPictureScreen({super.key, this.repo});

  /// The cities offered are free text; this is only the longest one kept.
  static const maxCity = AccountExtras.maxCity;

  @override
  State<RegisterPictureScreen> createState() => _RegisterPictureScreenState();
}

class _RegisterPictureScreenState extends State<RegisterPictureScreen> {
  final _name = TextEditingController();
  final _email = TextEditingController();
  final _password = TextEditingController();
  final _city = TextEditingController();
  String? _gender; // none until the parent chooses (nothing is pre-selected)
  int? _age;
  bool _busy = false;

  TeacherRepository? get _repo => widget.repo ?? teacherRepository;

  @override
  void dispose() {
    _name.dispose();
    _email.dispose();
    _password.dispose();
    _city.dispose();
    super.dispose();
  }

  void _stepAge(int delta) => setState(() {
    final next =
        (_age ??
            (delta > 0 ? AccountExtras.minAge - 1 : AccountExtras.maxAge + 1)) +
        delta;
    _age = next.clamp(AccountExtras.minAge, AccountExtras.maxAge);
  });

  Future<void> _saveExtras() =>
      AccountExtras.clean(gender: _gender, age: _age, city: _city.text).save();

  Future<void> _guard(Future<void> Function(TeacherRepository repo) run) async {
    final repo = _repo;
    if (repo == null) return _say(context, _unavailableMessage());
    setState(() => _busy = true);
    try {
      await run(repo);
    } on AccountException catch (e) {
      if (mounted) _say(context, e.message);
    } catch (_) {
      if (mounted) _say(context, _networkMessage());
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _byEmail() async {
    final name = _name.text.trim();
    final email = _email.text.trim();
    if (name.isEmpty) return _say(context, tr2('اكتب اسمك', 'Type your name'));
    if (!_validEmail(email))
      return _say(
        context,
        tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'),
      );
    if (_password.text.length < 6)
      return _say(
        context,
        tr2(
          'كلمة المرور 6 أحرف على الأقل',
          'The password has at least 6 characters',
        ),
      );
    await _guard((repo) async {
      await repo.register(
        email: email,
        password: _password.text,
        name: name,
        role: UserRole.parent,
      );
      await _saveExtras();
      if (mounted) Navigator.pop(context, true);
    });
  }

  Future<void> _google() => _guard((repo) async {
    await repo.signInWithGoogle(role: UserRole.parent);
    await _saveExtras();
    if (mounted) Navigator.pop(context, true);
  });

  Widget _genderCard(String id, String label, IconData icon, Color color) {
    final on = _gender == id;
    return Expanded(
      child: FocusableTap(
        key: ValueKey('register_$id'),
        radius: 28,
        semanticLabel: label,
        onTap: () => setState(() => _gender = on ? null : id),
        child: Container(
          height: 64,
          decoration: BoxDecoration(
            color: on ? color.withAlpha(40) : Colors.white,
            borderRadius: BorderRadius.circular(28),
            border: Border.all(
              color: on ? color : const Color(0xFFCDBDF0),
              width: on ? 3.5 : 2,
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                key: ValueKey('register_${id}_mark'),
                width: 28,
                height: 28,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: on ? authInk : Colors.white,
                  border: Border.all(color: authInk, width: 2.5),
                ),
                child: on
                    ? const Icon(
                        Icons.check_rounded,
                        color: Colors.white,
                        size: 20,
                      )
                    : null,
              ),
              const SizedBox(width: 8),
              Icon(icon, color: color, size: 30),
              const SizedBox(width: 6),
              Text(
                label,
                style: const TextStyle(
                  fontFamily: 'Tajawal',
                  fontSize: 20,
                  fontWeight: FontWeight.w900,
                  color: authInk,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _stepButton(
    String id,
    IconData icon,
    String label,
    VoidCallback onTap,
  ) => FocusableTap(
    key: ValueKey(id),
    radius: 30,
    semanticLabel: label,
    onTap: onTap,
    child: Container(
      width: 60,
      height: 60,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.white,
        border: Border.all(color: authPurple, width: 3),
      ),
      child: Icon(icon, color: authPurple, size: 32),
    ),
  );

  @override
  Widget build(BuildContext context) {
    String ageWord(int a) => a == 1
        ? tr2('سنة', 'year')
        : (a == 2 ? tr2('سنتان', '2 years') : tr2('سنوات', 'years'));
    return AuthShell(
      key: const ValueKey('register_picture'),
      asset: kRegisterPicture,
      onBack: () => Navigator.pop(context, false),
      backLabel: tr2('رجوع', 'Back'),
      overlay: _busy ? _busyVeil() : null,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            tr2('إنشاء حساب جديد', 'Create a new account'),
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontFamily: 'Tajawal',
              fontSize: 26,
              fontWeight: FontWeight.w900,
              color: authInk,
            ),
          ),
          const SizedBox(height: 14),
          AuthField(
            fieldKey: const ValueKey('register_name'),
            controller: _name,
            hint: tr2('الاسم الكامل', 'Full name'),
            icon: Icons.person_rounded,
            ltr: false,
            maxLength: 60,
            action: TextInputAction.next,
          ),
          const SizedBox(height: 10),
          AuthField(
            fieldKey: const ValueKey('register_email'),
            controller: _email,
            hint: tr2('البريد الإلكتروني', 'E-mail'),
            icon: Icons.mail_rounded,
            keyboard: TextInputType.emailAddress,
            action: TextInputAction.next,
          ),
          const SizedBox(height: 10),
          AuthField(
            fieldKey: const ValueKey('register_password'),
            controller: _password,
            hint: tr2('كلمة المرور', 'Password'),
            icon: Icons.lock_rounded,
            obscure: true,
            action: TextInputAction.next,
          ),
          const SizedBox(height: 16),
          Text(
            tr2('طفلك (اختياري)', 'Your child (optional)'),
            style: const TextStyle(
              fontFamily: 'Tajawal',
              fontSize: 17,
              fontWeight: FontWeight.w900,
              color: authInk,
            ),
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              _genderCard(
                'girl',
                tr2('بنت', 'Girl'),
                Icons.face_3_rounded,
                const Color(0xFFE0559C),
              ),
              const SizedBox(width: 10),
              _genderCard(
                'boy',
                tr2('ولد', 'Boy'),
                Icons.face_6_rounded,
                const Color(0xFF3B82E8),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _stepButton(
                'register_age_down',
                Icons.remove_rounded,
                tr2('أصغر', 'Younger'),
                () => _stepAge(-1),
              ),
              const SizedBox(width: 14),
              Flexible(
                child: Container(
                  key: const ValueKey('register_age_value'),
                  height: 60,
                  constraints: const BoxConstraints(minWidth: 150),
                  padding: const EdgeInsets.symmetric(horizontal: 18),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFF8A52E8), authPurpleDark],
                    ),
                    borderRadius: BorderRadius.circular(34),
                  ),
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(
                      _age == null
                          ? tr2('اختر العمر', 'Pick the age')
                          : '$_age ${ageWord(_age!)}',
                      style: const TextStyle(
                        fontFamily: 'Tajawal',
                        fontSize: 21,
                        fontWeight: FontWeight.w900,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 14),
              _stepButton(
                'register_age_up',
                Icons.add_rounded,
                tr2('أكبر', 'Older'),
                () => _stepAge(1),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Center(
            child: Text(
              tr2(
                'من ${AccountExtras.minAge} إلى ${AccountExtras.maxAge} سنوات',
                'From ${AccountExtras.minAge} to ${AccountExtras.maxAge} years',
              ),
              key: const ValueKey('register_age_range'),
              style: const TextStyle(
                fontFamily: 'Tajawal',
                fontSize: 15,
                fontWeight: FontWeight.w800,
                color: authInk,
              ),
            ),
          ),
          const SizedBox(height: 12),
          AuthField(
            fieldKey: const ValueKey('register_city'),
            controller: _city,
            hint: tr2('اختر أو اكتب مدينتك', 'Type your city'),
            icon: Icons.location_city_rounded,
            ltr: false,
            maxLength: RegisterPictureScreen.maxCity,
            action: TextInputAction.done,
          ),
          const SizedBox(height: 16),
          KeyedSubtree(
            key: const ValueKey('register_email_submit'),
            child: AuthButton(
              label: tr2('إنشاء الحساب بالبريد', 'Create with e-mail'),
              icon: Icons.check_circle_rounded,
              onTap: _byEmail,
            ),
          ),
          const SizedBox(height: 12),
          KeyedSubtree(
            key: const ValueKey('register_google'),
            child: AuthOutlineButton(
              label: tr2('التسجيل باستخدام جيميل', 'Register with Gmail'),
              leading: const GoogleG(),
              onTap: _google,
            ),
          ),
          // «Register later» is not offered in the demo: there the account is needed (owner decision).
          if (!DemoMode.enabled) ...[
            const SizedBox(height: 8),
            FocusableTap(
              key: const ValueKey('register_later'),
              radius: 20,
              semanticLabel: tr2('التسجيل لاحقاً', 'Register later'),
              onTap: () => Navigator.pop(context, true),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 12),
                child: Center(
                  child: Text(
                    tr2('التسجيل لاحقاً', 'Register later'),
                    style: const TextStyle(
                      fontFamily: 'Tajawal',
                      fontSize: 16,
                      fontWeight: FontWeight.w900,
                      color: authInk,
                      decoration: TextDecoration.underline,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// What opens after the intro: the sign-in page when the online accounts are switched on and nobody is signed in,
/// otherwise [HomeEntry]. Release 1 is offline, so there the start screen is simply the first page.
class AuthGate extends StatefulWidget {
  /// Tests: decide without the global gate.
  final bool? showLogin;
  final TeacherRepository? repo;

  /// Tests: force the "straight to the home page" behaviour on or off (the app uses [DemoMode.enabled]).
  final bool? autoEnter;
  const AuthGate({super.key, this.showLogin, this.repo, this.autoEnter});

  @override
  State<AuthGate> createState() => _AuthGateState();
}

class _AuthGateState extends State<AuthGate> {
  late bool _login = widget.showLogin ?? _needsLogin();

  static bool _needsLogin() {
    if (!lastOnlineGate.open) return false;
    final repo = teacherRepository;
    return repo != null && repo.currentUser == null;
  }

  @override
  Widget build(BuildContext context) {
    if (_login)
      return LoginPictureScreen(
        repo: widget.repo,
        onDone: () => setState(() => _login = false),
      );
    return HomeEntry(autoEnter: widget.autoEnter);
  }
}

/// After sign-in (or "continue without an account") the web demo goes STRAIGHT to the child's home page, with nothing in
/// between:
///  * one child already exists  -> into that child's home;
///  * no child, but the sign-up gave the child's age -> the child is made from it (age, gender; a friendly nickname) and
///    the home page opens;
///  * otherwise (no child and no age, or several children) -> the normal start page, where a child is added or picked.
/// Outside the demo (Release 1) the start page stays the first page: a parent starts child mode there.
class HomeEntry extends StatefulWidget {
  final bool? autoEnter;
  const HomeEntry({super.key, this.autoEnter});

  /// Tests of the start page itself set this to false (the app passes nothing and follows the demo switch).
  static bool? autoEnterOverrideForTest;

  /// The nickname given to a child made from the sign-up (the parent can change it in the parent area).
  static String nicknameFor(String? gender) => gender == 'girl'
      ? tr2('بطلتنا', 'Our hero')
      : (gender == 'boy'
            ? tr2('بطلنا', 'Our hero')
            : tr2('صغيري', 'My little one'));

  @override
  State<HomeEntry> createState() => _HomeEntryState();
}

class _HomeEntryState extends State<HomeEntry> {
  bool _deciding = true;

  @override
  void initState() {
    super.initState();
    _decide();
  }

  Future<void> _decide() async {
    if (!(widget.autoEnter ?? HomeEntry.autoEnterOverrideForTest ?? DemoMode.enabled)) {
      _deciding = false;
      return;
    }
    final store = JourneyStore.instance;
    if (!store.ready) {
      final ready = Completer<void>();
      void check() {
        if (store.ready && !ready.isCompleted) ready.complete();
      }

      store.addListener(check);
      check();
      await ready.future.timeout(const Duration(seconds: 6), onTimeout: () {});
      store.removeListener(check);
    }
    if (!mounted) return;
    ChildProfile? child;
    if (store.profiles.isNotEmpty) {
      // One or several children: the one played last (or the first) opens at once. The old start page is not shown.
      child = store.active ?? store.profiles.first;
    } else {
      // A new person (for example after «sign in with Google»): a child is made at once so the home page opens straight
      // away. The age comes from the sign-up when it gave one; otherwise 4 (the middle of 1 to 6). A parent changes the
      // nickname and age later in the parent area.
      final x = await AccountExtras.load();
      child = await createDemoChild(
        nickname: HomeEntry.nicknameFor(x.gender),
        age: x.age ?? 4,
        avatar: x.gender == 'boy' ? 'b1' : 'g1',
        gender: x.gender,
      );
    }
    if (!mounted) return;
    // The intro video plays first: a page pushed now would cover it.
    await AppIntro.whenFinished();
    if (!mounted) return;
    await enterChildMode(context, child);
    // Leaving child mode (with the parent's PIN) comes back here: show the normal start page.
    if (mounted) setState(() => _deciding = false);
  }

  @override
  Widget build(BuildContext context) {
    if (_deciding) {
      // The same picture as the intro, so nothing flashes between the sign-in page and the home page.
      return Scaffold(
        key: const ValueKey('home_entry_wait'),
        body: SizedBox.expand(
          child: Image.asset(
            AppIntro.posterAsset,
            fit: BoxFit.cover,
            errorBuilder: (_, _, _) =>
                const ColoredBox(color: Color(0xFF58A8F2)),
          ),
        ),
      );
    }
    return const StartScreen();
  }
}
