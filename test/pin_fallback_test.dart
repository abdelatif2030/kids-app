import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/parent_settings.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// A browser page that is not served over HTTPS has no secure storage: every call throws.
class _NoSecureStorage extends FlutterSecureStorage {
  const _NoSecureStorage();
  @override
  Future<String?> read({
    required String key,
    iOptions,
    aOptions,
    lOptions,
    webOptions,
    mOptions,
    wOptions,
  }) => throw StateError('no secure storage');
  @override
  Future<void> write({
    required String key,
    required String? value,
    iOptions,
    aOptions,
    lOptions,
    webOptions,
    mOptions,
    wOptions,
  }) => throw StateError('no secure storage');
  @override
  Future<void> delete({
    required String key,
    iOptions,
    aOptions,
    lOptions,
    webOptions,
    mOptions,
    wOptions,
  }) => throw StateError('no secure storage');
}

void main() {
  test('the parent PIN still works when the secure storage is unavailable (an http page on the local network)', () async {
    SharedPreferences.setMockInitialValues({});
    final settings = ParentSettings.instance
      ..useStorageForTest(const _NoSecureStorage());
    addTearDown(() => settings.useStorageForTest(const FlutterSecureStorage()));
    expect(await settings.hasPin(), isFalse);
    await settings.setPin('4821');
    expect(await settings.hasPin(), isTrue);
    expect(await settings.verifyPin('0000'), isFalse);
    expect(await settings.verifyPin('4821'), isTrue);
    // only the salted, stretched hash is stored, never the PIN itself
    final prefs = await SharedPreferences.getInstance();
    expect(
      prefs.getKeys().any((k) => (prefs.get(k) ?? '').toString() == '4821'),
      isFalse,
    );
  });
}
