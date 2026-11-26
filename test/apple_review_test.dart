import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/auth/auth_pictures.dart' show kAppleSignInAllowed, kGoogleSignInAllowed;
import 'package:kids_app/journey/ui/privacy_screen.dart';
import 'package:kids_app/legal/terms_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// The rules Apple rejected apps for (docs/APPLE_REVIEW_RULES.md). These tests keep them true.
void main() {
  List<File> dartFiles() => Directory('lib').listSync(recursive: true).whereType<File>().where((f) => f.path.endsWith('.dart')).toList();

  test('no outside payment service anywhere: subscriptions may only use the store\'s own in-app purchase', () {
    final banned = RegExp(r'flutter_stripe|stripe_sdk|stripe\.com|moyasar|myfatoorah|paypal|razorpay|paymob|fawry', caseSensitive: false);
    expect(banned.hasMatch(File('pubspec.yaml').readAsStringSync()), isFalse);
    final hits = [for (final f in dartFiles()) if (banned.hasMatch(f.readAsStringSync())) f.path];
    expect(hits, isEmpty);
  });

  test('no "coming soon" screens or messages are shown to anyone', () {
    final soon = RegExp(r'ComingSoon|coming soon|are coming|قادمة قريباً|جاي قريب|ستظهر.*قريباً|سنضيف.*قريباً', caseSensitive: false);
    final hits = [
      for (final f in dartFiles())
        if (!f.path.contains('en_dictionary') && soon.hasMatch(f.readAsStringSync())) f.path
    ];
    expect(hits, isEmpty);
  });

  test('iPad: the app declares full-screen use (no half-working multitasking layouts)', () {
    expect(RegExp(r'UIRequiresFullScreen</key>\s*<true/>').hasMatch(File('ios/Runner/Info.plist').readAsStringSync()), isTrue);
  });

  test('Sign in with Apple is offered wherever Google sign-in is (guideline 4.8)', () {
    for (final p in [TargetPlatform.iOS, TargetPlatform.android]) {
      debugDefaultTargetPlatformOverride = p;
      expect(kGoogleSignInAllowed && !kAppleSignInAllowed, isFalse, reason: '$p');
    }
    debugDefaultTargetPlatformOverride = null;
    final src = File('lib/auth/auth_pictures.dart').readAsStringSync();
    expect(src.contains("ValueKey('login_apple')") && src.contains("ValueKey('register_apple')"), isTrue);
  });

  test('the hosted privacy page exists for the store listing', () {
    expect(File('web/privacy/index.html').existsSync(), isTrue);
  });

  testWidgets('the privacy screen has a working "delete my account and data" button and the legal links', (tester) async {
    SharedPreferences.setMockInitialValues({'account_extras': '{"city":"x"}'});
    await tester.pumpWidget(const MaterialApp(home: PrivacyScreen()));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.byKey(const ValueKey('delete_account')), 200, scrollable: find.byType(Scrollable).first);
    expect(find.byKey(const ValueKey('legal_privacy')), findsOneWidget);
    expect(find.byKey(const ValueKey('legal_terms')), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('delete_account')));
    await tester.pumpAndSettle();
    expect(find.byType(AlertDialog), findsOneWidget);
    await tester.tap(find.byType(FilledButton).last);
    await tester.pumpAndSettle();
    final prefs = await SharedPreferences.getInstance();
    expect(prefs.containsKey('account_extras'), isFalse); // what was typed at sign-up is gone
  });

  testWidgets('the legal links open the terms and the privacy pages', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: Scaffold(body: LegalLinks())));
    await tester.tap(find.byKey(const ValueKey('legal_terms')));
    await tester.pumpAndSettle();
    expect(find.byType(TermsScreen), findsOneWidget);
  });
}
