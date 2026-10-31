# Rehlaty — architecture

Flutter 3.47 / Dart 3.13, Material 3, Tajawal font, Arabic-first with English. No server of its own: everything about a child is stored on the device
(`shared_preferences`, read through `safe_json` so damaged storage never crashes). Firebase is used only for the optional teacher marketplace and
family chat, behind `kFirebaseEnabled`.

## Layers
- `lib/design/`: tokens (`DS`), the app palette (`RC` in `journey/ui/kit.dart`), `FocusableTap`, layout helpers, motion, world backgrounds, brand art.
- `lib/journey/`: profiles, lands, activities, recommender, child shell (five tabs), Me tab.
- `lib/games/`: 20 learning games; pure logic in `adventure_logic.dart`, shared frame `GameScaffold` and `GameFinishPanel` in `game_common.dart`.
- `lib/media/`: `RehlatyAudioEngine` (the only speaker), `AudioPrefs`, lesson `AudioService`, `AudioGate`, dialogue catalogue `audio_catalog.dart`.
- `lib/stories`, `lib/library`, `lib/literacy`, `lib/studio`: stories, vocabulary, letters, creative studio.
- Seven feature modules, each with the same shape (pure rules, a per-child store, a screen, a card on the Me tab):
  `lib/world`, `lib/companion`, `lib/adventures`, `lib/everyday`, `lib/family_time`, `lib/museum` (+ guides inside `lib/companion/companion_ui.dart`).
- `lib/family`, `lib/teachers_*`, `lib/notifications`: optional online and notification parts.
- `lib/data_reset.dart`: export, delete one child, delete everything. Every store must be listed here.

## Rules every new feature follows
1. Keys are per child (`store[childId]`). 2. Rewards are claimed once (`claim`/`record` returns false the second time). 3. Progress comes from existing
real records (`GameRewards`, `StoryStore`, `finishedCount`), never from time. 4. Everything the characters say is a line in `kDialogue`.
5. Both languages through `tr2`. 6. Registered in `deleteOneChild`, `deleteChildData` and `exportChildData`.

## Data flow of a finished game
`GameFinishPanel._save` -> `GameRewards.complete` (first finish earns the star) -> companion reaction (claimed `game:<id>`) -> `AdventureService.check`
(quiet) -> notification; the Me tab, museum and world read the same records later.
