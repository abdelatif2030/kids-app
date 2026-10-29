# «مساعد رحلتي» (Plan assistant) — 2026-10-29

**What it is.** A guided helper for the parent. The parent taps what the child loves, where they need help, what they are like and how many minutes a day,
and may add a note in their own words. The assistant then prepares **three complete plans** (balanced, gentle focus, fun from interests). Each plan has its reasons
(quoting what the parent chose or wrote), the order of learning lands, activities per day, difficulty (easier / normal / harder), weekly lesson goals per subject and up to
six videos from the hand-reviewed whitelist. The parent picks one; it is saved to the child's profile and to the weekly goals (Parent settings -> weekly plan).

**What it is not.** It is not an AI model. It is a deterministic, rule-based planner with a small Arabic/English keyword table for the note. It can miss meaning, so the chips always count
and the parent reviews the plans before using one. Nothing is sent anywhere; no account, no API.

**Voice.** Real in-app speech recognition would need a speech package (not approved; CLAUDE.md rules: on-device only, no audio stored). Until then the note box says the parent can use the
microphone button of the phone's own keyboard to dictate; that dictation is done by the phone's keyboard, not by this app (what the keyboard does with audio depends on the phone's settings).
Decision for you: approve an on-device recognition package (e.g. `speech_to_text` with on-device mode) to add a microphone button inside the app.

**Where.** Onboarding last step («ساعدني في وضع خطة كاملة» after the child is saved) and Parent settings -> Daily learning -> «مساعد رحلتي: خطة كاملة».

**Files.** `lib/assistant/planner.dart` (pure), `lib/assistant/assistant_screen.dart`, entries in `lib/journey/ui/onboarding.dart` and `lib/parent_screens.dart`; `test/assistant_test.dart` (17 tests: note reading, plan rules, age fit, whitelist-only videos, applying a plan keeps the child's identity, ar/en at 320/768/1280, saving).

**Limits.** Quality of the plans depends on the lands and the whitelist; videos are only suggested (shown as titles), playing them still goes through the normal video list. Not seen on a device. If you later approve an LLM, the right design is a parent-controlled, opt-in call that sends only the typed summary (never names, photos or progress) and returns suggestions that this same planner validates against real content.
