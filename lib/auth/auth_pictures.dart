import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../firebase_config.dart';
import '../journey/ui/start_screen.dart';
import '../l10n/strings.dart';
import '../online_gate.dart';
import '../teachers_models.dart';
import 'account_extras.dart';

// The owner's two sign-in pictures (1536 x 1024), used whole with real fields and invisible buttons on top. The
// placeholder words painted inside the fields were erased from the pictures so a real field can show what is typed;
// everything else in the pictures is the owner's design. Numbers below are pixels of those pictures.

const double kAuthAspect = 1536 / 1024;
const String kLoginPicture = 'assets/auth/login.jpg';
const String kRegisterPicture = 'assets/auth/register.jpg';
const _ink = Color(0xFF4B2E9B);
const _hint = Color(0xFF9A8CC4);

Offset _o(double x, double y) => Offset(x / 1536, y / 1024);

PictureSpot _spot(String id, double cx, double cy, double w, double h, String label, VoidCallback onTap, {double radius = 24}) =>
    PictureSpot(id, _o(cx, cy), w / 1536, h / 1024, label, onTap, radius: radius, key: ValueKey(id));

/// A real text field placed over a painted field: [x0,y0,x1,y1] in picture pixels.
Widget _field({
  required double w,
  required double h,
  required (double, double, double, double) box,
  required TextEditingController controller,
  required String hint,
  required ValueKey<String> key,
  bool obscure = false,
  TextInputType? keyboard,
  bool ltr = true,
  int? maxLength,
  void Function(String)? onSubmitted,
  TextInputAction? action,
}) {
  final (x0, y0, x1, y1) = box;
  final fh = (y1 - y0) / 1024 * h;
  return Positioned(
    left: x0 / 1536 * w,
    top: y0 / 1024 * h,
    width: (x1 - x0) / 1536 * w,
    height: fh,
    child: Directionality(
      textDirection: ltr ? TextDirection.ltr : TextDirection.rtl,
      child: Center(
        child: TextField(
          key: key,
          controller: controller,
          obscureText: obscure,
          keyboardType: keyboard,
          textAlign: ltr ? TextAlign.right : TextAlign.start,
          textInputAction: action,
          onSubmitted: onSubmitted,
          maxLength: maxLength,
          autocorrect: false,
          enableSuggestions: !obscure,
          style: TextStyle(fontFamily: 'Tajawal', fontSize: (fh * 0.42).clamp(12.0, 26.0), fontWeight: FontWeight.w800, color: _ink),
          cursorColor: _ink,
          decoration: InputDecoration(
            isDense: true,
            counterText: '',
            border: InputBorder.none,
            enabledBorder: InputBorder.none,
            focusedBorder: InputBorder.none,
            filled: false,
            contentPadding: EdgeInsets.zero,
            hintText: hint,
            hintStyle: TextStyle(fontFamily: 'Tajawal', fontSize: (fh * 0.42).clamp(12.0, 26.0), fontWeight: FontWeight.w800, color: _hint),
          ),
        ),
      ),
    ),
  );
}

String _networkMessage() => tr2('تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.', 'Could not reach the service. Check the internet and try again.');
String _unavailableMessage() => tr2('خدمة الحسابات غير متاحة الآن.', 'Accounts are not available right now.');

bool _validEmail(String e) => e.contains('@') && e.contains('.') && e.length >= 5;

void _say(BuildContext context, String text) {
  ScaffoldMessenger.of(context)
    ..hideCurrentSnackBar()
    ..showSnackBar(SnackBar(content: Text(text, textDirection: Directionality.of(context))));
}

Widget _busyVeil() => Positioned.fill(
      child: ColoredBox(color: const Color(0x66FFFFFF), child: const Center(child: CircularProgressIndicator(key: ValueKey('auth_busy')))),
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
      final e = (await SharedPreferences.getInstance()).getString(LoginPictureScreen.rememberKey);
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
    if (!_validEmail(email)) return _say(context, tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'));
    if (_password.text.length < 6) return _say(context, tr2('كلمة المرور 6 أحرف على الأقل', 'The password has at least 6 characters'));
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
    final email = await showDialog<String>(context: context, builder: (_) => _ForgotDialog(initial: _email.text.trim()));
    if (email == null || !mounted) return;
    if (!_validEmail(email)) return _say(context, tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'));
    await _guard((repo) async {
      await repo.sendPasswordReset(email);
      // The same message whether or not the address has an account (no account probing).
      if (mounted) _say(context, tr2('إن كان للبريد حساب فقد أرسلنا إليه رابط إعادة التعيين.', 'If the address has an account, we sent it a reset link.'));
    });
  }

  Future<void> _register() async {
    final done = await Navigator.push<bool>(context, MaterialPageRoute<bool>(builder: (_) => RegisterPictureScreen(repo: widget.repo)));
    if (done == true && mounted) widget.onDone();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: PictureStage(
          key: const ValueKey('login_picture'),
          asset: kLoginPicture,
          aspect: kAuthAspect,
          spots: [
            _spot('login_eye', 511, 565, 64, 64, tr2('إظهار كلمة المرور', 'Show password'), () => setState(() => _show = !_show), radius: 32),
            _spot('login_remember', 1050, 638, 150, 50, tr2('تذكرني', 'Remember me'), () => setState(() => _remember = !_remember)),
            _spot('login_forgot', 545, 638, 190, 44, tr2('نسيت كلمة المرور؟', 'Forgot your password?'), _forgot),
            _spot('login_submit', 787, 713, 670, 74, tr2('تسجيل الدخول', 'Sign in'), _login, radius: 40),
            _spot('login_google', 787, 841, 663, 66, tr2('تسجيل الدخول باستخدام جوجل', 'Sign in with Google'), _google, radius: 36),
            _spot('login_create', 688, 923, 262, 54, tr2('أنشئ حساب الآن', 'Create an account'), _register, radius: 30),
          ],
          overlays: (w, h) => [
            _field(w: w, h: h, box: (482, 448, 1034, 506), controller: _email, hint: tr2('البريد الإلكتروني', 'E-mail'), key: const ValueKey('login_email'), keyboard: TextInputType.emailAddress, action: TextInputAction.next),
            _field(w: w, h: h, box: (548, 538, 1034, 596), controller: _password, hint: tr2('كلمة المرور', 'Password'), key: const ValueKey('login_password'), obscure: !_show, action: TextInputAction.done, onSubmitted: (_) => _login()),
            // The painted tick box is covered by a real one that shows the real state.
            Positioned(
              left: (1093 - 22) / 1536 * w,
              top: (638 - 22) / 1024 * h,
              width: 44 / 1536 * w,
              height: 44 / 1024 * h,
              child: IgnorePointer(child: _Tick(on: _remember, key: const ValueKey('login_remember_box'))),
            ),
            Positioned(
              left: 0,
              right: 0,
              top: 984 / 1024 * h,
              child: Center(
                child: FocusableTap(
                  key: const ValueKey('login_skip'),
                  radius: 20,
                  semanticLabel: tr2('متابعة بدون حساب', 'Continue without an account'),
                  onTap: widget.onDone,
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 18 / 1536 * w, vertical: 5 / 1024 * h),
                    decoration: BoxDecoration(color: Colors.white.withAlpha(220), borderRadius: BorderRadius.circular(40), border: Border.all(color: _ink, width: 1.5)),
                    child: Text(tr2('متابعة بدون حساب', 'Continue without an account'), style: TextStyle(fontFamily: 'Tajawal', fontSize: (w * 0.0105).clamp(11.0, 16.0), fontWeight: FontWeight.w900, color: _ink)),
                  ),
                ),
              ),
            ),
            if (_busy) _busyVeil(),
          ],
        ),
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
  late final TextEditingController _c = TextEditingController(text: widget.initial);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
        title: Text(tr2('نسيت كلمة المرور؟', 'Forgot your password?')),
        content: TextField(key: const ValueKey('forgot_email'), controller: _c, keyboardType: TextInputType.emailAddress, decoration: InputDecoration(labelText: tr2('البريد الإلكتروني', 'E-mail'))),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: Text(tr2('إلغاء', 'Cancel'))),
          FilledButton(key: const ValueKey('forgot_send'), onPressed: () => Navigator.pop(context, _c.text.trim()), child: Text(tr2('أرسل الرابط', 'Send the link'))),
        ],
      );
}

class _Tick extends StatelessWidget {
  final bool on;
  const _Tick({super.key, required this.on});

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, box) {
        final d = box.maxWidth;
        return Container(
          decoration: BoxDecoration(
            color: on ? _ink : Colors.white,
            borderRadius: BorderRadius.circular(d * 0.22),
            border: Border.all(color: _ink, width: 2.5),
          ),
          child: on ? Icon(Icons.check_rounded, color: Colors.white, size: d * 0.8) : null,
        );
      });
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
        final next = (_age ?? (delta > 0 ? AccountExtras.minAge - 1 : AccountExtras.maxAge + 1)) + delta;
        _age = next.clamp(AccountExtras.minAge, AccountExtras.maxAge);
      });

  Future<void> _saveExtras() => AccountExtras.clean(gender: _gender, age: _age, city: _city.text).save();

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
    if (!_validEmail(email)) return _say(context, tr2('اكتب بريداً إلكترونياً صحيحاً', 'Type a valid e-mail address'));
    if (_password.text.length < 6) return _say(context, tr2('كلمة المرور 6 أحرف على الأقل', 'The password has at least 6 characters'));
    await _guard((repo) async {
      await repo.register(email: email, password: _password.text, name: name, role: UserRole.parent);
      await _saveExtras();
      if (mounted) Navigator.pop(context, true);
    });
  }

  Future<void> _google() => _guard((repo) async {
        await repo.signInWithGoogle(role: UserRole.parent);
        await _saveExtras();
        if (mounted) Navigator.pop(context, true);
      });

  @override
  Widget build(BuildContext context) {
    String ageWord(int a) => a == 1 ? tr2('سنة', 'year') : (a == 2 ? tr2('سنتان', '2 years') : tr2('سنوات', 'years'));
    return Scaffold(
      body: SafeArea(
        child: PictureStage(
          key: const ValueKey('register_picture'),
          asset: kRegisterPicture,
          aspect: kAuthAspect,
          spots: [
            _spot('register_back', 72, 72, 104, 104, tr2('رجوع', 'Back'), () => Navigator.pop(context, false), radius: 52),
            _spot('register_girl', 968, 401, 355, 112, tr2('بنت', 'Girl'), () => setState(() => _gender = _gender == 'girl' ? null : 'girl'), radius: 30),
            _spot('register_boy', 594, 401, 335, 112, tr2('ولد', 'Boy'), () => setState(() => _gender = _gender == 'boy' ? null : 'boy'), radius: 30),
            // In a right-to-left page the arrow pointing left goes forward (older) and the one pointing right goes back.
            _spot('register_age_up', 505, 712, 84, 84, tr2('أكبر', 'Older'), () => _stepAge(1), radius: 42),
            _spot('register_age_down', 887, 712, 84, 84, tr2('أصغر', 'Younger'), () => _stepAge(-1), radius: 42),
            _spot('register_google', 775, 891, 500, 76, tr2('التسجيل باستخدام جيميل', 'Register with Gmail'), _google, radius: 38),
          ],
          overlays: (w, h) {
            Widget at(double cx, double cy, double pw, double ph, Widget child) => Positioned(left: (cx - pw / 2) / 1536 * w, top: (cy - ph / 2) / 1024 * h, width: pw / 1536 * w, height: ph / 1024 * h, child: child);
            Widget radio(double cx, double cy, bool on) => at(cx, cy, 56, 56, IgnorePointer(child: _Radio(on: on)));
            final font = (w * 0.0125).clamp(11.0, 19.0).toDouble();
            return [
              _field(w: w, h: h, box: (480, 482, 1036, 526), controller: _name, hint: tr2('الاسم الكامل', 'Full name'), key: const ValueKey('register_name'), ltr: false, maxLength: 60, action: TextInputAction.next),
              _field(w: w, h: h, box: (480, 550, 1036, 594), controller: _email, hint: tr2('البريد الإلكتروني', 'E-mail'), key: const ValueKey('register_email'), keyboard: TextInputType.emailAddress, action: TextInputAction.next),
              _field(w: w, h: h, box: (480, 618, 1036, 662), controller: _password, hint: tr2('كلمة المرور', 'Password'), key: const ValueKey('register_password'), obscure: true, action: TextInputAction.next),
              _field(w: w, h: h, box: (556, 788, 926, 828), controller: _city, hint: tr2('اختر أو اكتب مدينتك', 'Type your city'), key: const ValueKey('register_city'), ltr: false, maxLength: RegisterPictureScreen.maxCity, action: TextInputAction.done),
              // The painted selection marks are covered by real ones: nothing is selected until the parent chooses.
              radio(1100, 401, _gender == 'girl'),
              radio(718, 401, _gender == 'boy'),
              at(
                683,
                709,
                204,
                58,
                IgnorePointer(
                  child: Container(
                    key: const ValueKey('register_age_value'),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]), borderRadius: BorderRadius.circular(40)),
                    child: FittedBox(fit: BoxFit.scaleDown, child: Text(_age == null ? tr2('اختر العمر', 'Pick the age') : '$_age ${ageWord(_age!)}', style: TextStyle(fontFamily: 'Tajawal', fontSize: font * 1.3, fontWeight: FontWeight.w900, color: Colors.white))),
                  ),
                ),
              ),
              at(710, 753, 220, 30, IgnorePointer(child: Center(child: FittedBox(fit: BoxFit.scaleDown, child: Text(tr2('من ${AccountExtras.minAge} إلى ${AccountExtras.maxAge} سنوات', 'From ${AccountExtras.minAge} to ${AccountExtras.maxAge} years'), key: const ValueKey('register_age_range'), style: TextStyle(fontFamily: 'Tajawal', fontSize: font, fontWeight: FontWeight.w900, color: _ink)))))),
              // The "register later" strip of the picture became two real buttons.
              at(
                860,
                960,
                250,
                36,
                FocusableTap(
                  key: const ValueKey('register_email_submit'),
                  radius: 20,
                  semanticLabel: tr2('إنشاء الحساب بالبريد', 'Create the account with e-mail'),
                  onTap: _byEmail,
                  child: Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]), borderRadius: BorderRadius.circular(30)),
                    child: FittedBox(fit: BoxFit.scaleDown, child: Text(tr2('إنشاء الحساب بالبريد', 'Create with e-mail'), style: TextStyle(fontFamily: 'Tajawal', fontSize: font, fontWeight: FontWeight.w900, color: Colors.white))),
                  ),
                ),
              ),
              at(
                655,
                960,
                190,
                36,
                FocusableTap(
                  key: const ValueKey('register_later'),
                  radius: 20,
                  semanticLabel: tr2('التسجيل لاحقاً', 'Register later'),
                  onTap: () => Navigator.pop(context, true),
                  child: Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(30), border: Border.all(color: _ink, width: 1.5)),
                    child: FittedBox(fit: BoxFit.scaleDown, child: Text(tr2('التسجيل لاحقاً', 'Register later'), style: TextStyle(fontFamily: 'Tajawal', fontSize: font, fontWeight: FontWeight.w900, color: _ink))),
                  ),
                ),
              ),
              if (_busy) _busyVeil(),
            ];
          },
        ),
      ),
    );
  }
}

class _Radio extends StatelessWidget {
  final bool on;
  const _Radio({required this.on});

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, box) {
        final d = box.maxWidth;
        return Container(
          decoration: BoxDecoration(shape: BoxShape.circle, color: on ? _ink : Colors.white, border: Border.all(color: _ink, width: 3)),
          child: on ? Icon(Icons.check_rounded, color: Colors.white, size: d * 0.7) : null,
        );
      });
}

/// What opens after the intro: the sign-in page when the online accounts are switched on and nobody is signed in,
/// otherwise the normal start screen. Release 1 is offline, so there the start screen is simply the first page.
class AuthGate extends StatefulWidget {
  /// Tests: decide without the global gate.
  final bool? showLogin;
  final TeacherRepository? repo;
  const AuthGate({super.key, this.showLogin, this.repo});

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
    if (!_login) return const StartScreen();
    return LoginPictureScreen(repo: widget.repo, onDone: () => setState(() => _login = false));
  }
}
