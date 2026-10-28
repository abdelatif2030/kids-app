import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/journey/avatars.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/look_picker.dart';
import 'package:kids_app/journey/ui/profile_forms.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media_picker.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:shared_preferences/shared_preferences.dart';

class _Picker implements MediaPicker {
  Uint8List? photo;
  Object? error;
  @override
  Future<Uint8List?> pickPhoto() async {
    if (error != null) throw error!;
    return photo;
  }

  @override
  Future<CvFile?> pickCv() async => null;
  @override
  Future<void> saveCv(CvFile cv) async {}
}

final _png = Uint8List.fromList(base64Decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='));

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(padding: const EdgeInsets.all(12), child: w)));

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    ChildPhotoStore.clearCache();
    await AppLocale.instance.set('ar');
  });

  group('model', () {
    test('new fields survive a round trip', () {
      const c = ChildProfile(id: 'a', nickname: 'Lina', age: 5, gender: 'girl', avatar: 'g2', hasPhoto: true, birth: '2021-03');
      final r = ChildProfile.fromJson(jsonDecode(jsonEncode(c.toJson())) as Map<String, dynamic>);
      expect((r.gender, r.avatar, r.hasPhoto, r.birth), ('girl', 'g2', true, '2021-03'));
    });

    test('a profile saved by an older version still loads, with no gender, avatar or photo', () {
      final r = ChildProfile.fromJson({'id': 'a', 'n': 'Old', 'a': 6});
      expect((r.gender, r.avatar, r.hasPhoto, r.birth), (null, null, false, null));
    });

    test('an unknown gender value is ignored, and gender can be cleared', () {
      expect(ChildProfile.fromJson({'id': 'a', 'n': 'x', 'a': 6, 'gn': 'other'}).gender, isNull);
      const c = ChildProfile(id: 'a', nickname: 'x', age: 6, gender: 'boy');
      expect(c.copyWith(gender: null).gender, isNull);
      expect(c.copyWith(nickname: 'y').gender, 'boy');
      expect(c.toJson().containsKey('ph'), false); // no photo flag unless there is a photo
    });

    test('age from a birth month', () {
      final now = DateTime(2026, 11, 10);
      expect(ageFromBirth('2021-03', now), 5);
      expect(ageFromBirth('2021-12', now), 4);
      expect(ageFromBirth('2021-11', now), 5);
      expect(ageFromBirth('garbage', now), isNull);
      expect(ageFromBirth('2030-01', now), isNull);
      expect(ageFromBirth(null, now), isNull);
      final d = ProfileDraft()..setBirth(2021, 3, now);
      expect(d.age, 5);
      expect(d.birth, '2021-03');
      final young = ProfileDraft()..setBirth(2026, 1, now);
      expect(young.age, 1); // never below 1
    });
  });

  group('photo store and consent', () {
    test('save, load, delete; a photo that is too large is refused', () async {
      await ChildPhotoStore.save('k', _png);
      ChildPhotoStore.clearCache();
      expect(await ChildPhotoStore.load('k'), _png);
      await ChildPhotoStore.delete('k');
      expect(await ChildPhotoStore.load('k'), isNull);
      expect(() => ChildPhotoStore.save('k', Uint8List(ChildPhotoStore.maxBytes + 1)), throwsArgumentError);
    });

    test('a damaged photo entry behaves like no photo', () async {
      SharedPreferences.setMockInitialValues({'child_photo_k': '%%not base64%%'});
      ChildPhotoStore.clearCache();
      expect(await ChildPhotoStore.load('k'), isNull);
    });

    test('without consent nothing is saved, and withdrawing consent deletes the photo', () async {
      final d = ProfileDraft()..photoBytes = _png; // bytes but no consent
      await d.applyPhoto('k');
      expect(await ChildPhotoStore.load('k'), isNull);
      expect(d.willHavePhoto, false);

      d.photoConsent = true;
      expect(d.willHavePhoto, true);
      await d.applyPhoto('k');
      expect(await ChildPhotoStore.load('k'), _png);

      final edit = ProfileDraft()
        ..hadPhoto = true
        ..photoConsent = false
        ..removePhoto = true;
      await edit.applyPhoto('k');
      expect(await ChildPhotoStore.load('k'), isNull);
    });

    test('deleting one child, or all child data, removes the photo', () async {
      await JourneyStore.instance.load();
      final c = await JourneyStore.instance.addProfile(ChildProfile(id: JourneyStore.instance.newId(), nickname: 'P', age: 5, hasPhoto: true));
      await ChildPhotoStore.save(c.id, _png);
      final other = await JourneyStore.instance.addProfile(ChildProfile(id: JourneyStore.instance.newId(), nickname: 'Q', age: 5, hasPhoto: true));
      await ChildPhotoStore.save(other.id, _png);
      await deleteOneChild(c.id);
      expect(await ChildPhotoStore.load(c.id), isNull);
      expect(await ChildPhotoStore.load(other.id), _png);
      await deleteChildData();
      expect((await SharedPreferences.getInstance()).getKeys().any((k) => k.startsWith('child_photo_')), false);
    });
  });

  group('widgets', () {
    testWidgets('every avatar preset draws, and choosing one sets the draft', (tester) async {
      final d = ProfileDraft();
      var changed = 0;
      await tester.pumpWidget(_app(ProfileLookPicker(draft: d, onChanged: () => changed++)));
      expect(find.byType(AvatarFace), findsNWidgets(kAvatars.length));
      await tester.tap(find.byKey(const ValueKey('avatar_bear')));
      await tester.pump();
      expect(d.avatar, 'bear');
      expect(changed, 1);
      expect(tester.takeException(), isNull);
    });

    testWidgets('gender is optional: pick, change, and go back to "prefer not to say"', (tester) async {
      final d = ProfileDraft();
      await tester.pumpWidget(_app(ProfileLookPicker(draft: d, onChanged: () {})));
      expect(d.gender, isNull);
      await tester.tap(find.text('بنت'));
      await tester.pump();
      expect(d.gender, 'girl');
      await tester.tap(find.text('ولد'));
      await tester.pump();
      expect(d.gender, 'boy');
      await tester.tap(find.text('لا أفضّل أن أقول'));
      await tester.pump();
      expect(d.gender, isNull);
    });

    testWidgets('the photo button appears only after the parent consents; picking sets bytes; turning consent off drops them', (tester) async {
      final picker = _Picker()..photo = _png;
      mediaPicker = picker;
      addTearDown(() => mediaPicker = DeviceMediaPicker());
      final d = ProfileDraft();
      await tester.pumpWidget(_app(ProfileLookPicker(draft: d, onChanged: () {})));
      expect(find.byKey(const ValueKey('pick_photo')), findsNothing);
      await tester.tap(find.byKey(const ValueKey('photo_consent')));
      await tester.pump();
      expect(d.photoConsent, true);
      await tester.tap(find.byKey(const ValueKey('pick_photo')));
      await tester.pump();
      await tester.pump();
      expect(d.photoBytes, _png);
      await tester.tap(find.byKey(const ValueKey('photo_consent')));
      await tester.pump();
      expect(d.photoConsent, false);
      expect(d.photoBytes, isNull);
      expect(find.byKey(const ValueKey('pick_photo')), findsNothing);
    });

    testWidgets('a photo that is too large shows its message and changes nothing', (tester) async {
      final picker = _Picker()..error = const AccountException('الصورة كبيرة، اختر صورة أصغر');
      mediaPicker = picker;
      addTearDown(() => mediaPicker = DeviceMediaPicker());
      final d = ProfileDraft()..photoConsent = true;
      await tester.pumpWidget(_app(ProfileLookPicker(draft: d, onChanged: () {})));
      await tester.tap(find.byKey(const ValueKey('pick_photo')));
      await tester.pump();
      await tester.pump();
      expect(find.textContaining('الصورة كبيرة'), findsOneWidget);
      expect(d.photoBytes, isNull);
    });

    testWidgets('birth month sets the age', (tester) async {
      final d = ProfileDraft();
      final now = DateTime.now();
      await tester.pumpWidget(_app(ProfileLookPicker(draft: d, onChanged: () {})));
      await tester.tap(find.byKey(const ValueKey('birth_year')));
      await tester.pumpAndSettle();
      await tester.tap(find.text('${now.year - 4}').last);
      await tester.pumpAndSettle();
      expect(d.birth, startsWith('${now.year - 4}-'));
      expect(d.age, anyOf(3, 4));
    });

    testWidgets('ChildAvatar shows the real photo only when the child has one, else the cartoon', (tester) async {
      await tester.runAsync(() => ChildPhotoStore.save('p1', _png));
      const withPhoto = ChildProfile(id: 'p1', nickname: 'A', age: 5, hasPhoto: true, avatar: 'cat');
      const without = ChildProfile(id: 'p2', nickname: 'B', age: 5, avatar: 'cat');
      await tester.pumpWidget(_app(const Column(children: [ChildAvatar(child: withPhoto), ChildAvatar(child: without)])));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await tester.pump();
      expect(find.byType(Image), findsOneWidget); // only the first child has a photo
      expect(find.byType(AvatarFace), findsOneWidget); // the second shows its cartoon
    });
  });
}
