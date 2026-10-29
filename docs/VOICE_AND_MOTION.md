# Voice choice and motion (2026-10-29)

## Voice research (what was found, honestly)
Two web searches (standard mode). Results were mostly third-party blogs and tool listings; none gave a verified, child-focused comparison of Arabic voices.
Leads, not conclusions:
- Android's built-in speech engine (Speech Services by Google) offers several Arabic voices and can run offline once the voice pack is installed ([overview](https://powerbroker.acturis.com/post/text-to-speech-apps-android)). Whether its Arabic neural voices are offline-capable on a given phone is not confirmed by the sources.
- Offline engines such as BookFusion Voice (Piper-based) exist as separate Android apps ([listing](https://alternativeto.net/software/bookfusion-voice/about/)); Arabic support was not confirmed.
- Nabra-82M is an open Arabic model for Modern Standard Arabic that needs diacritized input ([model page](https://huggingface.co/oddadmix/Nabra-82M-v0.1)). Android support not confirmed.
- Cloud tools such as [Fliki](https://fliki.ai/voices/arabic) and [Narakeet](https://www.flexclip.com/learn/arabic-text-to-speech.html) (via a listing) offer many Arabic voices but need a connection and send the text to a company.

## What was built (free, offline, no new package, nothing uploaded)
You allowed free recommended voices without asking; the safest free option that needs no new dependency and sends nothing anywhere is the phone's own engine, so the app now chooses its best voice:
- `lib/media/voice_choice.dart` ranks the voices the phone reports: right language (Modern Standard Arabic first), engine quality labels and names such as neural/enhanced/premium, **offline first** (a voice that needs a connection is ranked lower). Ties keep the engine order, so the choice is stable.
- `TtsSpeech` now uses that voice for every lesson, game, letter, word and story that is read aloud (they all go through the same path), at a slower, child-friendly rate (0.42 instead of 0.5) and a slightly warmer pitch (1.05). The parent's speed setting still multiplies the rate.
- Parent settings -> Sound and learning: «صوت القراءة العربي / الإنجليزي» opens a list of the phone's voices with a play button for each, "Automatic (recommended)" and a clear message when the phone has no voice (install one in system Text-to-speech settings). A preview never changes the saved choice.
- Tests: `test/voice_choice_test.dart` (9).

## What is NOT done and why
No cloud voice and no new voice package was added: I cannot listen to any voice here, so adding one would be a guess, and a cloud service would send lesson text off the device. Voice quality still needs a native Arabic speaker's ear on a real phone (checklist AU1-AU8 in docs/MANUAL_TESTS.md). Best next step for quality: install Google's Arabic voice pack on the test phone, pick it in the new list, and compare; record human voices for the 28 letter sounds (see docs/AUDIO_DECISION.md).

## Motion
Research notes (single controller for staggers, `MediaQuery.disableAnimations`, `RepaintBoundary`, profile on a real device) came from third-party guides ([guide](https://www.tillitsdone.com/blogs/flutter-animation-best-practices), [reduced-motion note](https://tessl.io/registry/thiennc-tesoglobal/flutter-skills/0.10.0/files/skills/flutter-animation/references/motion-patterns-and-reduced-motion.md)) and are applied here:
- `lib/design/motion.dart`: `Appear` (fade + slide, staggered), `PopOnChange`, soft page transitions for every platform including the web.
- `lib/design/worlds.dart`: a slow motion layer on top of each world (drifting clouds in journey/forest, rising bubbles in the ocean, twinkling stars in space, a breathing lamp glow in stories). One 60-second controller, its own repaint layer, no taps, off for reduced motion (app or system), `quiet` and `calm`, and off under test bindings so `pumpAndSettle` is not blocked.
- `lib/design/app_intro.dart`: the opening moment (mascot pops in, "رحلتي" fades in, ~1.6 s, tap to skip, once per run, never with reduced motion).
- Tests: `test/motion_test.dart` (10). Not measured: frame rate or battery on a real phone; the web build was not re-run after these changes at the time of writing.
