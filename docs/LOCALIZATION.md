# Localization (Arabic / English)

- `lib/l10n/app_locale.dart`: interface language (`ar` RTL, `en` LTR), saved on the device as `ui_lang`. No saved choice -> the first screen asks (`LanguageScreen`).
- `lib/l10n/strings.dart`: `kStrings` + `context.tr(key)`. Missing English -> Arabic -> the key. A test checks both languages have the same keys.
- The interface language is separate from each child's learning language and from the language of content (videos, stories, letters).
- Switcher: Parent settings -> "لغة التطبيق / App language".

## Coverage (honest)
Translated: language screen, start/welcome screen, parent-settings language row.
NOT translated yet (still Arabic only, even in English mode): onboarding, child home, lessons/games, letters, stories, studio, dashboard, reports, marketplace, privacy. Migrate screen by screen by moving strings into `kStrings`.
Note: Material pickers/dialog chrome use English because `flutter_localizations` is not added (needs the user's approval).

## Update: onboarding (redesigned)
Translated now: shared components (step header, retry, cancel), the whole child-setup flow (child, goals, optional skill check, three plans, completion), goal and land names in the flow. The plan editor's land list (inside "Customize") and the quiz questions themselves are still Arabic-only.
Numbers use Western digits in both languages (common in Egypt); no Arabic-Indic conversion.

## Update: guided Arabic letter lesson
`lib/literacy/guided_lesson.dart` (button «ابدأ الدرس» on each letter): 6 steps (see + hear the NAME, hear the SOUND, illustrated word with the letter highlighted, find the letter in the word, pick the picture, pick the letter). Interface texts are Arabic/English; the letters and words stay Arabic. Audio is the device voice (demo), pictures are emoji: real recordings and original illustrations are still needed (docs/CONTENT_REVIEW.md). Records: opened and audio-played are exposure only; practice after the lesson; demonstrated only if all three questions were right first try.
