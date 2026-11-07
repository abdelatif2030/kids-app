import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/auth/auth_pictures.dart';
import 'package:kids_app/firebase_config.dart';

void main() {
  tearDown(() => firebaseSettled.value = true);

  testWidgets('while Firebase starts in the background the page shows the splash picture, then decides', (t) async {
    firebaseSettled.value = false;
    await t.pumpWidget(const MaterialApp(home: AuthGate(autoEnter: false)));
    expect(find.byKey(const ValueKey('boot_wait')), findsOneWidget);
    expect(find.byType(HomeEntry), findsNothing);
    firebaseSettled.value = true;
    await t.pump();
    expect(find.byKey(const ValueKey('boot_wait')), findsNothing);
    expect(find.byType(HomeEntry), findsOneWidget); // gate closed in tests: no sign-in page, straight to the home entry
  });

  testWidgets('when nothing is starting (tests, offline builds) there is no waiting at all', (t) async {
    expect(firebaseSettled.value, isTrue);
    await t.pumpWidget(const MaterialApp(home: AuthGate(autoEnter: false)));
    expect(find.byKey(const ValueKey('boot_wait')), findsNothing);
  });
}
