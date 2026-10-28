# رحلتي (Rehlaty) — Arabic-first kids learning app

Flutter, Android first (web build used for previews). Ages 1-12. Child area, parent area (PIN), local content admin.
No ads, no chat, no external links, no analytics. Child data stays on the device.

## Run

```bash
flutter pub get
flutter run -d web-server --web-port 8080     # preview
flutter analyze
flutter test
flutter build web
```

Firebase (teachers) is switched off: `kFirebaseEnabled` in `lib/firebase_config.dart`. See `docs/teachers-setup.md`.

## Main screens
- Welcome / "who is playing" picker, onboarding (profile, interests and goals, short assessment, editable plan): `lib/journey/ui/start_screen.dart`, `onboarding.dart`
- Child shell with 4 tabs (home, games, create, me): `child_shell.dart`; learning map per land: `land_map_screen.dart`
- Six activity types (quiz, memory, sequence; letters, numbers, colors/shapes, English, brain, stories): `activity_screen.dart`
- Parent settings (PIN): dashboard, children and plans, content admin, privacy and data reset, teachers, notes, summary
- Videos: only the whitelist `assets/videos.json`, official YouTube IFrame player

## Rules built in
Stars only for finishing an activity. No streaks. Personalization is plain rules (see `lib/journey/recommender.dart`), not AI.
Limits and what is needed before a public release: `docs/PRODUCTION.md`.
