import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_store.dart';
import 'package:kids_app/companion/companion_store.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/everyday/everyday_store.dart';
import 'package:kids_app/family_time/family_time.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio_catalog.dart';
import 'package:kids_app/world/world_progress.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<void> fill(String c) async {
  await WorldStore.markSeen(c, ['garden']);
  await CompanionStore.setWho(c, CharacterVoice.nour);
  await AdventureStore.record(c, '2026-10-26', 'letters');
  await EverydayStore.confirm(c, 'wash_hands');
  await FamilyTimeStore.plan(c, weekday: 3);
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  test('the export contains the new per-child records, and only that child\'s', () async {
    await fill('a');
    await fill('b');
    await CompanionStore.setWho('b', CharacterVoice.adam);
    final e = await exportChildData('a');
    expect(e['world'], isNotNull);
    expect((e['companion'] as Map)['who'], 'nour');
    expect((e['weeklyAdventures'] as Map).keys, ['2026-10-26']);
    expect((e['everydayLearning'] as Map).keys, ['wash_hands']);
    expect((e['familyTime'] as Map)['wd'], 3);
    final text = e.toString();
    expect(text.contains('adam'), isFalse); // b's choice is not in a's export
  });

  test('deleting one child removes every new record of that child and keeps the other child\'s', () async {
    await fill('a');
    await fill('b');
    await deleteOneChild('a');
    expect(await WorldStore.seen('a'), isEmpty);
    expect(await CompanionStore.age('a'), isNull);
    expect(await AdventureStore.finished('a'), isEmpty);
    expect(await EverydayStore.done('a'), isEmpty);
    expect(await FamilyTimeStore.weekday('a'), isNull);
    expect(await WorldStore.seen('b'), {'garden'});
    expect(await CompanionStore.who('b'), CharacterVoice.nour);
    expect(await AdventureStore.finished('b'), hasLength(1));
    expect(await EverydayStore.done('b'), isNotEmpty);
    expect(await FamilyTimeStore.weekday('b'), 3);
  });

  test('resetting all data clears the new records (the parent\'s companion switch is a setting and stays)', () async {
    await fill('a');
    await CompanionStore.setEnabled(false);
    await deleteChildData();
    final p = await SharedPreferences.getInstance();
    for (final k in ['world_seen', 'companion_state', 'adventures', 'everyday_done', 'family_time']) {
      expect(p.containsKey(k), isFalse, reason: k);
    }
    expect(await CompanionStore.enabled(), isFalse);
  });
}
