# Localization (Arabic / English)

Arabic is the default; English is chosen on the first screen (or in Parent settings -> App language). The choice is
saved on the device (`ui_lang`). Changing it rebuilds every screen already open, so none keeps the old language.
The interface language is separate from each child's learning language and from the language of the content.

## How texts are translated
- `lib/l10n/app_locale.dart`: the language, direction (RTL/LTR) and the rebuild of open screens.
- `loc('نص عربي')` (lib/l10n/strings.dart): static Arabic text -> English from `lib/l10n/en_dictionary.dart`
  (generated: see `tools/README.md`). Unknown text falls back to the Arabic text.
- `tr2('عربي $x', 'English $x')`: texts with values inside.
- `context.tr('key')` + `lib/l10n/strings*.dart`: key-based texts (start, onboarding, letters lesson, child home).
- Data classes (lands, skills, subjects, badges, real activities...) translate through getters.

## Tests
- `test/dictionary_test.dart`: every `loc('...')` text has an English entry.
- `test/english_coverage_test.dart`: 59 screens/tabs are opened in English and fail if Arabic interface text remains
  (Arabic learning content such as letters and words is allowed on the letter/vocabulary/story screens).
- `test/localization_test.dart`: saved choice, first-launch language screen, switching while screens are open.

## What stays Arabic in English mode (on purpose: it is the content being taught)
Arabic letters, words and their sounds; the 8 story texts and their comprehension questions (the story TITLES,
descriptions, themes and chapter titles are translated); the reading-comprehension stories in the quizzes;
video titles come from `assets/videos.json` as written. The device voice that reads Arabic content speaks Arabic.

## Known limits
- English versions of the stories are NOT written (content work).
- Date/time pickers and other Material dialogs use English chrome in both languages (no `flutter_localizations`).
- Numbers use Western digits in both languages.
- Screens were checked in their first state plus the three child tabs; deeper dialog states are covered by the
  dictionary test but not each one opened.
- Translations were written by the app's developer, not a professional translator: they need a native review.
