import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/companion/companion_store.dart';
import 'package:kids_app/companion/companion_ui.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio_catalog.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    CompanionStore.currentChildId = null;
    await AppLocale.instance.set('ar');
  });
  tearDown(() => CompanionStore.currentChildId = null);

  test('the guide is the current child\'s companion, Adam by default, and Adam when the companion is off', () async {
    expect(await currentGuide(), CharacterVoice.adam);
    await CompanionStore.setWho('a', CharacterVoice.nour);
    CompanionStore.currentChildId = 'a';
    expect(await currentGuide(), CharacterVoice.nour);
    CompanionStore.currentChildId = 'b';
    expect(await currentGuide(), CharacterVoice.adam);
    CompanionStore.currentChildId = 'a';
    await CompanionStore.setEnabled(false);
    expect(await currentGuide(), CharacterVoice.adam);
  });

  testWidgets('the speaker button of a game shows its guide', (t) async {
    await CompanionStore.setWho('a', CharacterVoice.nour);
    CompanionStore.currentChildId = 'a';
    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 568), const Size(844, 390), const Size(1200, 700)]) {
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        await AppLocale.instance.set(lang);
        await t.pumpWidget(MaterialApp(
          key: UniqueKey(),
          builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)), child: w!),
          home: const GameScaffold(title: 'T', instruction: 'Drag each piece to its place.', child: SizedBox()),
        ));
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
        await t.pump();
        expect(find.byKey(const ValueKey('speak_instruction')), findsOneWidget);
        expect(find.byTooltip(lang == 'ar' ? 'اسمع التعليمات من نور' : 'Listen to the instructions with Nour'), findsOneWidget);
        expect(t.takeException(), isNull);
      }
    }
    t.view.reset();
  });
}
