import 'package:flutter/material.dart';

import '../design/components.dart';
import '../l10n/strings.dart';
import '../teachers_models.dart';
import '../teachers_screens.dart' show AuthScreen;
import 'family_repository.dart';
import 'family_screens.dart';

/// Where the family chat starts. [asRelative] is false in Parent settings (behind the PIN) and true for the
/// "I am family" door on the first screen. Both need a signed-in account; the repositories are injected in
/// tests and are null while Firebase is off.
class FamilyEntryScreen extends StatefulWidget {
  final bool asRelative;
  final TeacherRepository? auth;
  final FamilyRepository? family;
  const FamilyEntryScreen({super.key, required this.asRelative, required this.auth, required this.family});

  @override
  State<FamilyEntryScreen> createState() => _FamilyEntryScreenState();
}

class _FamilyEntryScreenState extends State<FamilyEntryScreen> {
  Future<(UserRole?, String)>? _who;

  @override
  void initState() {
    super.initState();
    _refresh();
  }

  void _refresh() {
    final a = widget.auth;
    if (a == null || a.currentUser == null) {
      _who = null;
      return;
    }
    _who = _load(a);
  }

  Future<(UserRole?, String)> _load(TeacherRepository a) async => (await a.currentRole(), await a.displayName());

  @override
  Widget build(BuildContext context) {
    final auth = widget.auth, fam = widget.family;
    final title = widget.asRelative ? tr2('أنا من العائلة', 'I am family') : tr2('عائلتي: المحادثات', 'Family chat');
    if (auth == null || fam == null) {
      return Scaffold(
        appBar: AppBar(title: Text(title)),
        body: EmptyState(
          icon: Icons.cloud_off_rounded,
          title: tr2('الخدمة غير مفعّلة بعد', 'Not switched on yet'),
          message: tr2('تحتاج المحادثات العائلية إلى مشروع Firebase يربطه صاحب التطبيق.', 'Family chat needs a Firebase project that the app owner connects.'),
        ),
      );
    }
    if (auth.currentUser == null) {
      return AuthScreen(
        repo: auth,
        roles: [widget.asRelative ? UserRole.relative : UserRole.parent],
        onSignedIn: () => setState(_refresh),
      );
    }
    return FutureBuilder<(UserRole?, String)>(
      future: _who,
      builder: (context, snap) {
        if (snap.connectionState != ConnectionState.done) {
          return Scaffold(appBar: AppBar(title: Text(title)), body: const Center(child: CircularProgressIndicator()));
        }
        final (role, name) = snap.data ?? (null, '');
        final want = widget.asRelative ? UserRole.relative : UserRole.parent;
        if (role != want) {
          return Scaffold(
            appBar: AppBar(title: Text(title)),
            body: EmptyState(
              icon: Icons.person_off_rounded,
              title: widget.asRelative ? tr2('هذا الحساب ليس حساب قريب', 'This is not a relative account') : tr2('هذا الحساب ليس حساب ولي أمر', 'This is not a parent account'),
              action: AppButton(
                label: tr2('تسجيل الخروج', 'Sign out'),
                onPressed: () async {
                  await auth.signOut();
                  if (mounted) setState(_refresh);
                },
              ),
            ),
          );
        }
        return widget.asRelative ? RelativeHomeScreen(repo: fam, name: name) : FamilyParentScreen(repo: fam, parentName: name);
      },
    );
  }
}
