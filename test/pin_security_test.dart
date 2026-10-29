import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/parent_settings.dart';

String hex(String b64) => base64Decode(b64).map((x) => x.toRadixString(16).padLeft(2, '0')).join();

void main() {
  test('stretched hash matches the PBKDF2-HMAC-SHA256 reference vectors', () {
    expect(hex(pinHashV2('salt', 'password', iterations: 1)), '120fb6cffcf8b32c43e7225256c4f837a86548c92ccc35480805987cb70be17b');
    expect(hex(pinHashV2('salt', 'password', iterations: 2)), 'ae4d0c95af6b46d32d0adff928f06dd02a303f8ef3c251dfd6e2d85a95474c43');
  });

  test('constantTimeEquals', () {
    expect(constantTimeEquals('abc', 'abc'), isTrue);
    expect(constantTimeEquals('abc', 'abd'), isFalse);
    expect(constantTimeEquals('abc', 'ab'), isFalse);
  });

  group('parent PIN', () {
    setUp(() => FlutterSecureStorage.setMockInitialValues({}));

    test('a new PIN verifies, a wrong one does not, and it is stored stretched', () async {
      final s = ParentSettings.instance;
      await s.setPin('1234');
      expect(await s.verifyPin('1234'), isTrue);
      expect(await s.verifyPin('0000'), isFalse);
      expect(await const FlutterSecureStorage().read(key: 'pin_v'), '2');
    });

    test('a PIN stored by the older version still works and is upgraded on first use', () async {
      const salt = 'c2FsdA==';
      final legacy = sha256.convert(utf8.encode('$salt:4321')).toString();
      FlutterSecureStorage.setMockInitialValues({'pin_salt': salt, 'pin_hash': legacy});
      final s = ParentSettings.instance;
      expect(await s.verifyPin('1111'), isFalse);
      expect(await s.verifyPin('4321'), isTrue);
      const st = FlutterSecureStorage();
      expect(await st.read(key: 'pin_v'), '2');
      expect(await st.read(key: 'pin_hash'), pinHashV2(salt, '4321'));
      expect(await s.verifyPin('4321'), isTrue);
    });

    test('five wrong tries lock it for a while', () async {
      final s = ParentSettings.instance;
      await s.setPin('1234');
      for (var i = 0; i < 5; i++) {
        await s.verifyPin('9999');
      }
      expect(await s.lockedSecondsLeft(), greaterThan(0));
      expect(await s.verifyPin('1234'), isFalse);
    });
  });
}
