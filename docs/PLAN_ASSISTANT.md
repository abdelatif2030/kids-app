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

---
## Update: in-app dictation and optional AI (you approved both)

### Microphone button (on-device only)
- Package added: `speech_to_text` (approved). `lib/assistant/dictation.dart`: asks the phone's recognizer with `onDevice: true`; if the phone cannot recognise the language offline, nothing is recognised and the parent is told to type. **No online fallback.** No audio is stored or sent by the app.
- Phones/tablets only (Android, iOS). On the web the browser's recogniser sends audio to a server, so the button reports "not available" and the note box suggests the keyboard's own dictation.
- Android: `<queries>` for `RecognitionService` added to the manifest (RECORD_AUDIO was already declared). iOS: `NSSpeechRecognitionUsageDescription` and `NSMicrophoneUsageDescription` added to `Info.plist`.
- Tested with a fake engine (what is heard fills the note, final results are kept, a tap stops, problems are shown). **Not tested on a real phone**: whether Arabic works offline depends on the phone's installed recognition language (Google's offline Arabic pack).

### Optional AI suggestions (off by default; needs a server you set up)
- `lib/assistant/ai_advisor.dart`. Package added: `http` (approved with the AI feature).
- **The parent turns it on** inside the assistant after reading what is sent. Off by default; "delete data" turns it off.
- **Sent:** age band (e.g. "5-6"), chosen areas, traits, minutes, language, and the note after removing e-mails, links, @handles, phone-like numbers and the child's name (max 400 characters), plus the allowed land/subject ids. **Never sent:** name/nickname, ids, photos, voice, progress, family or account data.
- **No key in the app.** The address comes from the build (`--dart-define=REHLATY_AI_ENDPOINT=https://...`), HTTPS only. With no address the switch is disabled and says "not set up yet". The server holds any API key.
- **The answer is never trusted.** It must be JSON `{"plans":[{"title","summary","reasons":[..],"lands":[..],"dailyCount","bias","subjects":{subject:n}}]}`. The app keeps only real lands that fit the age, real subjects, clamps numbers (2-5 activities, bias -1..1, 0-7 lessons), shortens text, and attaches videos only from the whitelist. Invalid answers are ignored and the rule-based plans are shown with a message. AI plans are labelled.
- Tests: `test/ai_advisor_test.dart` (19).

### What you still have to do for AI to work (I cannot do it from here)
1. A small HTTPS endpoint that receives the JSON request, calls an LLM with a prompt built from it, and returns the JSON above. It should keep the API key secret, rate-limit, and **not log request bodies**. Options: a Firebase Cloud Function (needs the paid Blaze plan) or any serverless host.
2. Build/run the app with `--dart-define=REHLATY_AI_ENDPOINT=https://your-endpoint`.
3. Decide cost and who pays; review the privacy policy draft (`docs/PRIVACY_POLICY_DRAFT.md`) to mention the optional AI service.
Nothing here was tested against a real AI service.
