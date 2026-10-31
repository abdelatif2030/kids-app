import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

/// Reads the real project files and checks the release configuration that can be checked without credentials or a device.
/// It does NOT prove a release is ready: signing, the iOS bundle id and real-device behaviour are separate (see
/// docs/RELEASE_READINESS.md).
String read(String p) => File(p).readAsStringSync();

void main() {
  final manifest = read('android/app/src/main/AndroidManifest.xml');
  final gradle = read('android/app/build.gradle.kts');
  final plist = read('ios/Runner/Info.plist');

  group('android', () {
    test('application id is Rehlaty\'s, not a template id; label and landscape lock are set', () {
      expect(gradle, contains('applicationId = "com.rehlaty.app"'));
      expect(gradle.contains('com.example'), isFalse);
      expect(manifest, contains('android:label="رحلتي"'));
      expect(manifest, contains('android:screenOrientation="sensorLandscape"'));
    });

    test('backup is off (child data stays on the device) and only the expected permissions are declared', () {
      expect(manifest, contains('android:allowBackup="false"'));
      final perms = RegExp(r'uses-permission android:name="android\.permission\.([A-Z_]+)"').allMatches(manifest).map((m) => m.group(1)).toSet();
      expect(perms, {'INTERNET', 'RECORD_AUDIO', 'MODIFY_AUDIO_SETTINGS', 'ACCESS_NETWORK_STATE'});
      for (final forbidden in ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION', 'READ_CONTACTS', 'READ_PHONE_STATE', 'WRITE_EXTERNAL_STORAGE', 'READ_EXTERNAL_STORAGE', 'SYSTEM_ALERT_WINDOW', 'RECEIVE_BOOT_COMPLETED']) {
        expect(manifest.contains(forbidden), isFalse, reason: forbidden);
      }
      expect(manifest, isNot(contains('android.hardware.camera'))); // Release 1 is offline: no camera permission or feature
    });

    test('no cleartext traffic, no deep links or extra entry points, and a single launcher activity (Android)', () {
      expect(manifest, contains('android:usesCleartextTraffic="false"'));
      expect(manifest.contains('android:scheme'), isFalse); // no URL schemes / deep links
      expect(manifest.contains('android.intent.action.VIEW'), isFalse);
      expect(RegExp('<intent-filter>').allMatches(manifest).length, 1); // only MAIN/LAUNCHER
      expect(manifest.contains('<service'), isFalse);
      expect(manifest.contains('<receiver'), isFalse);
      expect(manifest.contains('<provider'), isFalse);
      expect(File('android/app/src/main/res/xml/network_security_config.xml').existsSync(), isFalse); // defaults: HTTPS only for this target SDK
    });

    test('iOS has no URL schemes, associated domains, background modes or push entitlements', () {
      expect(plist.contains('CFBundleURLTypes'), isFalse);
      expect(plist.contains('UIBackgroundModes'), isFalse);
      expect(plist.contains('NSAppTransportSecurity'), isFalse); // default App Transport Security: HTTPS only
      expect(plist.contains('LSApplicationQueriesSchemes'), isFalse);
      expect(Directory('ios/Runner').listSync().any((e) => e.path.endsWith('.entitlements')), isFalse); // no push, associated domains or sign-in capability
    });

    test('release signing comes only from a key file that is git-ignored; no key material is in the repo', () {
      expect(gradle, contains('key.properties'));
      final ignore = read('android/.gitignore');
      expect(ignore, contains('key.properties'));
      expect(ignore, contains('*.jks'));
      expect(File('android/key.properties').existsSync(), isFalse);
      for (final f in Directory('android').listSync(recursive: true).whereType<File>()) {
        final n = f.path.toLowerCase();
        expect(n.endsWith('.jks') || n.endsWith('.keystore'), isFalse, reason: f.path);
      }
    });

    test('the launcher icon exists in every density', () {
      for (final d in ['mdpi', 'hdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']) {
        expect(File('android/app/src/main/res/mipmap-$d/ic_launcher.png').existsSync(), isTrue, reason: d);
      }
    });
  });

  group('ios', () {
    test('privacy strings exist for the microphone and speech recognition (and none for the camera, which Release 1 does not use), the name is Rehlaty, and portrait is not offered', () {
      expect(plist, contains('NSMicrophoneUsageDescription'));
      expect(plist, contains('NSSpeechRecognitionUsageDescription'));
      expect(plist, isNot(contains('NSCameraUsageDescription')));
      expect(plist, contains('<key>CFBundleDisplayName</key>\n\t<string>Rehlaty</string>'));
      // iPhone is landscape only (iPad lists its own orientations, which Apple expects to include portrait unless full screen is required)
      final iphone = plist.substring(plist.indexOf('<key>UISupportedInterfaceOrientations</key>'), plist.indexOf('<key>UISupportedInterfaceOrientations~ipad</key>'));
      expect(iphone.contains('UIInterfaceOrientationPortrait'), isFalse);
    });

    test('Android and iOS use the confirmed identifier com.rehlaty.app everywhere; the old placeholder is gone', () {
      final proj = read('ios/Runner.xcodeproj/project.pbxproj');
      final ids = RegExp(r'PRODUCT_BUNDLE_IDENTIFIER = ([^;]+);').allMatches(proj).map((m) => m.group(1)!).toList();
      expect(ids.where((i) => !i.endsWith('.RunnerTests')), everyElement('com.rehlaty.app'));
      expect(ids.where((i) => i.endsWith('.RunnerTests')), everyElement('com.rehlaty.app.RunnerTests'));
      expect(ids.length, 6);
      expect(gradle, contains('applicationId = "com.rehlaty.app"'));
      expect(gradle, contains('namespace = "com.rehlaty.app"'));
      expect(File('android/app/src/main/kotlin/com/rehlaty/app/MainActivity.kt').readAsStringSync(), contains('package com.rehlaty.app'));
      // no file of the platform projects, the scripts or the docs still names the template id (docs may mention it as history only in the status log)
      for (final f in [proj, plist, gradle, manifest]) {
        expect(f.contains('com.example'), isFalse);
      }
      expect(read('docs/RELEASE_1_CONFIGURATION.md'), contains('com.rehlaty.app'));
    });

    test('the privacy manifest is part of the Runner target (file reference, build file, group and resources phase)', () {
      final proj = read('ios/Runner.xcodeproj/project.pbxproj');
      expect(RegExp('PrivacyInfo.xcprivacy').allMatches(proj).length, greaterThanOrEqualTo(4));
      expect(proj, contains('PrivacyInfo.xcprivacy in Resources'));
      expect(File('ios/Runner/PrivacyInfo.xcprivacy').existsSync(), isTrue);
    });
  });

  group('product and privacy text', () {
    test('no document claims videos were reviewed by us or that the app asks for no microphone/camera', () {
      final privacy = read('docs/PRIVACY_POLICY_DRAFT.md');
      expect(privacy.contains('list we reviewed'), isFalse);
      expect(privacy.contains('camera or microphone.'), isFalse);
      expect(read('docs/PLAY_STORE_CHECKLIST.md').contains('No camera, location or contacts permission'), isFalse);
    });

    test('version is set and the description states ages 1-6', () {
      final pub = read('pubspec.yaml');
      expect(RegExp(r'^version: \d+\.\d+\.\d+\+\d+$', multiLine: true).hasMatch(pub), isTrue);
      expect(pub, contains('aged 1-6'));
    });

    test('the version shown in Parent settings equals the pubspec version', () {
      final v = RegExp(r'^version: (\S+)$', multiLine: true).firstMatch(read('pubspec.yaml'))!.group(1);
      expect(read('lib/app_info.dart'), contains("kAppVersion = '$v'"));
    });

    test('the online release gate is closed in this source: no Firebase work starts without every condition', () {
      final g = read('lib/online_gate.dart');
      expect(g, contains('const bool kOnlineFeaturesIntended = false;'));
      expect(g, contains('const bool kAccountDeletionReady = false;'));
      expect(g, contains('const bool kBackendVerified = false;'));
      final cfg = read('lib/firebase_config.dart');
      expect(cfg, contains('if (!lastOnlineGate.open) return;'));
      expect(cfg.indexOf('lastOnlineGate.open'), lessThan(cfg.indexOf('Firebase.initializeApp')));
      expect(cfg, contains('kFamilyDemo && !kReleaseMode')); // the in-memory demo can never run in a release build
    });
  });

  group('launch screens, signing template and privacy manifest (both platforms)', () {
    test('Android splash: the logo drawable, a background colour and the Android 12 theme exist and reference each other', () {
      expect(File('android/app/src/main/res/drawable-nodpi/launch_logo.png').existsSync(), isTrue);
      final colors = read('android/app/src/main/res/values/colors.xml');
      expect(colors, contains('launch_background_color'));
      for (final f in ['drawable/launch_background.xml', 'drawable-v21/launch_background.xml']) {
        final x = read('android/app/src/main/res/$f');
        expect(x, contains('@drawable/launch_logo'));
        expect(x, contains('@color/launch_background_color'));
      }
      expect(read('android/app/src/main/res/values-v31/styles.xml'), contains('windowSplashScreenBackground'));
    });

    test('iOS launch screen shows the logo at three scales on the same colour as Android', () {
      for (final n in ['LaunchImage.png', 'LaunchImage@2x.png', 'LaunchImage@3x.png']) {
        expect(File('ios/Runner/Assets.xcassets/LaunchImage.imageset/$n').lengthSync(), greaterThan(2000), reason: n);
      }
      final sb = read('ios/Runner/Base.lproj/LaunchScreen.storyboard');
      expect(sb, contains('name="LaunchImage" width="180" height="180"'));
      final hex = RegExp(r'launch_background_color">#([0-9A-Fa-f]{6})').firstMatch(read('android/app/src/main/res/values/colors.xml'))!.group(1)!;
      final r = (int.parse(hex.substring(0, 2), radix: 16) / 255).toStringAsFixed(4);
      expect(sb, contains('red="$r"'));
    });

    test('the signing template has exactly the keys the Gradle file reads, with placeholders only', () {
      final example = read('android/key.properties.example');
      for (final k in ['storePassword', 'keyPassword', 'keyAlias', 'storeFile']) {
        expect(example, contains('$k='));
        expect(gradle, contains('"$k"'), reason: k);
      }
      expect(example, contains('CHANGE_ME'));
      expect(read('android/.gitignore'), contains('key.properties'));
      expect(read('android/.gitignore').contains('key.properties.example'), isFalse); // the template may be committed
    });

    test('every iOS app icon in the set exists, is opaque and is not Flutter\'s default blue icon', () {
      final dir = Directory('ios/Runner/Assets.xcassets/AppIcon.appiconset');
      final contents = read('${dir.path}/Contents.json');
      final names = RegExp(r'"filename" : "([^"]+)"').allMatches(contents).map((m) => m.group(1)!).toSet();
      expect(names.length, greaterThanOrEqualTo(15));
      for (final n in names) {
        final f = File('${dir.path}/$n');
        expect(f.existsSync(), isTrue, reason: n);
        final bytes = f.readAsBytesSync();
        expect(bytes.sublist(0, 4), [0x89, 0x50, 0x4E, 0x47], reason: '$n is a PNG');
        expect(bytes[25], 2, reason: '$n colour type 2 = RGB without alpha (App Store requires an opaque marketing icon)');
      }
      // the marketing icon is large and not the template's tiny default file
      expect(File('${dir.path}/Icon-App-1024x1024@1x.png').lengthSync(), greaterThan(100000));
    });

    test('the iOS privacy manifest declares no tracking and no collected data for the default (offline) build', () {
      final m = read('ios/Runner/PrivacyInfo.xcprivacy');
      expect(m, contains('<key>NSPrivacyTracking</key>\n\t<false/>'));
      expect(m, contains('<key>NSPrivacyCollectedDataTypes</key>\n\t<array/>'));
      expect(m, contains('NSPrivacyAccessedAPICategoryUserDefaults'));
      // known gap, documented: the file is not yet part of the Xcode project (needs Xcode on a Mac)
      expect(read('docs/IOS_RELEASE.md'), contains('PrivacyInfo.xcprivacy'));
    });
  });

  group('no credentials, keys or Firebase config in the repository', () {
    test('no Firebase platform config files and the Dart options are placeholders', () {
      expect(File('android/app/google-services.json').existsSync(), isFalse);
      expect(File('ios/Runner/GoogleService-Info.plist').existsSync(), isFalse);
      final o = read('lib/firebase_options.dart');
      expect(o, contains("'REPLACE_ME'"));
      expect(o.contains(RegExp(r'AIza[0-9A-Za-z_\-]{35}')), isFalse);
    });

    test('no API key, private key or token pattern in source, config or docs', () {
      final patterns = [
        RegExp(r'AIza[0-9A-Za-z_\-]{35}'),
        RegExp(r'-----BEGIN (RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----'),
        RegExp(r'AKIA[0-9A-Z]{16}'),
        RegExp(r'sk-[A-Za-z0-9]{32,}'),
        RegExp(r'ghp_[A-Za-z0-9]{30,}'),
        RegExp(r'xox[baprs]-[A-Za-z0-9-]{10,}'),
      ];
      final roots = ['lib', 'android/app/src', 'android/key.properties.example', 'ios/Runner', 'web', 'docs', 'tool', 'pubspec.yaml', 'README.md', 'CLAUDE.md'];
      var scanned = 0;
      for (final r in roots) {
        final t = FileSystemEntity.typeSync(r);
        final files = t == FileSystemEntityType.directory ? Directory(r).listSync(recursive: true).whereType<File>() : (t == FileSystemEntityType.file ? [File(r)] : <File>[]);
        for (final f in files) {
          final n = f.path.toLowerCase();
          if (!(n.endsWith('.dart') || n.endsWith('.md') || n.endsWith('.xml') || n.endsWith('.kts') || n.endsWith('.plist') || n.endsWith('.json') || n.endsWith('.yaml') || n.endsWith('.sh') || n.endsWith('.html') || n.endsWith('.example') || n.endsWith('.csv') || n.endsWith('.xcprivacy') || n.endsWith('.storyboard'))) continue;
          String text;
          try {
            text = f.readAsStringSync();
          } catch (_) {
            continue; // not UTF-8 text
          }
          scanned++;
          for (final p in patterns) {
            expect(p.hasMatch(text), isFalse, reason: '${f.path} matches $p');
          }
        }
      }
      expect(scanned, greaterThan(300));
    });

    test('cloud_functions and firebase_app_check are deferred to the online-activation phase, not in the offline Release 1', () {
      final pub = read('pubspec.yaml');
      expect(pub, isNot(contains('cloud_functions')));
      expect(pub, isNot(contains('firebase_app_check')));
    });
  });
}
