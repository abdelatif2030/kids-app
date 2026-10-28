# رحلتي — Product audit, roadmap and risks

Written 2026-10-28 from the repository as it stands on branch `feature/rehlaty`. Everything below is what the code and the tests actually do; anything not built is marked as such.

## 1. Current architecture

- Flutter (Dart 3.13), Android first, a web build is used for previews. About 88 Dart files / 19 000 lines, 18 test files.
- **All data is local.** `shared_preferences` holds JSON per feature; the parent PIN is a salted SHA-256 in `flutter_secure_storage`. There is **no backend, no account system and no analytics** for children. Firebase (teachers/booking) exists behind a flag (`kFirebaseEnabled = false`) and has never run against a real project.
- Layers: pure Dart domain (`lib/journey`, `lib/literacy`, `lib/library`, `lib/stories`, `lib/studio`) with `Repository`/store classes, and Flutter screens on top. Audio goes through `lib/media/audio.dart` (`MediaRef`: bundled file, authorized remote file, device voice, or none), so a recording, a stream or text-to-speech can be swapped without touching screens.
- Packages: youtube_player_iframe, shared_preferences, flutter_secure_storage, crypto, firebase_* (off), image_picker/file_picker (teachers), **just_audio** and **flutter_tts** (added with the user's approval for audio; the voice runs on the device).

## 2. Inventory against the plan

| Area | Status |
|---|---|
| Parent-guided child profile, baseline check, editable plan, personalized daily plan, skill tracking, review, gradual difficulty | **Built and tested** (journey, onboarding with a 7-question check, `planToday`, bias, review of weak lands). |
| Age-specific experience | **Partly.** Content and activities are filtered by age (letters, vocabulary, stories, activities, games); the layout is the same for all ages. Toddlers (1–3) get «اكتشف مع ماما وبابا» and fewer letters/words. |
| Country/grade configurable curriculum | **Missing.** Subjects and lands are fixed. No claim of curriculum alignment is made anywhere. |
| Arabic letters with images, name vs sound, vowels, syllables, tiles, tracing, spaced review | **Built and tested.** 28 letters × ≥2 pictured words with computed position; syllable blending; word tiles; tracing; Leitner review; parent-set order/unlock. **Needs a teacher's review** (see `CONTENT_REVIEW.md`). |
| Recorded pronunciation/narration | **Not available.** Letters, words and stories are read by the phone's own Arabic voice (offline, on device) and are labelled as demo. If a phone has no Arabic voice, playback is disabled with an explanation and the text stays visible. |
| Bedtime stories | **Built and tested:** 8 original stories + 1 real audio track, categories, favorites, history, resume, speed, ±15 s, chapters, sleep timer (5–60 min or end of story), ambient sounds, dimmed voice-only mode, interactive story, comprehension questions. **Not built:** background/lock-screen playback, downloads. |
| Multimedia engine / vocabulary library | **Built and tested:** 110 items in 10 categories, search (Arabic spelling variants and English), shared by lessons; picture→word, audio→picture, word→picture, counting, sequence, memory. Pictures are emoji (no licensed artwork yet). |
| Offline activities | **Built:** 16 with child steps, parent guidance, skill, time, materials, safety notes; parent confirms; no photo or typing. |
| Creative studio + family gallery | **Built and tested:** drawing (autosave), scenes, characters, picture stories, sequencing; private gallery; deletion only in the parent area. |
| Parent dashboard | **Built:** skills, week, journey, and a new section that keeps *exposure*, *practice* and *demonstrated* separate; stories listened are never counted as mastery; needs-practice and next steps. |
| Parent controls | Daily limit, quiet hours, PIN with lockout, children, plan, audio/reading, letter progression, data export, deletion, gallery, report-a-problem. |
| Notifications / reminders | **Missing** (no notification package, nothing is sent). |
| Account, cloud backup, multi-device | **Missing.** Uninstalling loses everything; the parent can copy a data export. |
| Content management system | **Partial:** an on-device admin (questions, lands, badges) exists. No server CMS, versions, reviewers or workflow. Story/word data lives in Dart/JSON files in the repository. |
| Analytics | **Deliberately none** (project rule: no analytics SDKs). |
| Payments, referrals, public website, newsletter, school mode | **Not built** (see sections 6–7). |

## 3. The five highest-value improvements (and what was done)

1. **Safe storage (P0).** A damaged preference value used to crash the app at launch. Now every store reads defensively, keeps the damaged text under `<key>__damaged`, and skips only the bad entry. *Done, tested (`robustness_test.dart`).*
2. **Complete deletion (P0, privacy).** Deleting a child used to leave their skill events behind. `deleteOneChild` now removes their data from every store (skills, records, tasks, stories, letters, gallery, journey). *Done, tested.*
3. **Honest evidence model (P1).** Listening ≠ practice ≠ understanding; one `Evidence` scale used everywhere and in the dashboard. *Done, tested.*
4. **Real recordings and reviewed content (P1).** The biggest remaining gap for educational quality: studio recordings of letters, words and stories, an Arabic teacher's review, and licensed illustrations. *Needs people and a decision, not code.*
5. **A way to know what works (P1/P2).** Cannot be done honestly without either a backend or an SDK. See section 5 for the proposal; waiting for the owner's decision.

## 4. Roadmap

**P0 — safety, integrity**
- ✅ Defensive storage; ✅ complete child deletion; ✅ data export for a parent; ✅ no microphone/camera/location; no external links on child screens; parent area behind PIN.
- ✅ **No PIN = no gate** was found in this audit: until a PIN existed a child could open the parent area and set their own, or leave child mode. Finishing onboarding on a device without a PIN now requires the parent to create one (`PinSetupScreen(popWhenDone: true)`, tested in `pin_gate_test.dart`).
- ☐ Firebase rules emulator tests, a privacy policy page the app can show, and the Google Play Families / data-safety review before any release.
- ☐ Real device run (Android): never done in this environment (no SDK).

**P1 — core value**
- ☐ Real recordings for letters/words/stories, teacher review, licensed artwork.
- ☐ Interrupted-session recovery for activities (stories and drawings already resume/autosave; a half-finished quiz restarts).
- ☐ Retry/empty/error states: added for the new screens (dashboard section, galleries, libraries); older screens (videos offline, teachers) still show raw failures.
- ☐ Country/grade configuration.
- ☐ Lock-screen/background playback (needs `audio_service` and Android manifest work, cannot be tested here).

**P2 — retention and growth (parent-facing only)**
- ☐ Optional reminders (needs `flutter_local_notifications`; ask first).
- ☐ Shareable progress card (text the parent copies; no child name) and a parent referral link — only after the basic product is reliable.
- ☐ A public website and printable worksheets.

**P3 — optional**
- ☐ School/nursery mode (needs accounts and a backend), server CMS with draft→review→publish→archive and versions, payments.

## 5. Analytics and "what works"

The project rule forbids analytics SDKs for the child, and Google Play's rules for child-directed apps make third-party SDKs risky. Options, cheapest first:
1. **Play Console vitals** (crashes, ANRs) — free, no SDK in the app.
2. **Parent-initiated feedback**: the new «الإبلاغ عن مشكلة» screen produces a message the parent sends themselves; the data export lets a parent share a real report.
3. **Anonymous, opt-in, aggregate counters** sent to a small server of yours (onboarding completed, first lesson done, day-7/day-30 return) — needs a backend and a consent screen. **Not built; decision needed.**
No analytics numbers exist anywhere in the app and none are invented.

## 6. Monetization (recommendation only, nothing built)

A useful free tier (letters, vocabulary, a handful of stories, offline activities, dashboard); an optional family subscription (all stories and recorded audio, several children); school/nursery licences later. Purchases and cancellation live only in the parent area, with prices, renewal and cancellation shown before payment. **No payment code was written**; the provider (Google Play Billing) and the legal review come first. No ads, no pressure on children.

## 7. Growth ideas that fit the rules

Parent-controlled share card without a child's name; printable worksheets generated from the letters data; a landing page per letter/story age group; a referral link with a transparent reward — later. No contact upload, no auto-posting, no public child profiles or galleries (the gallery is private and local).

## 8. Known risks

- A PIN is now required when the first child is added; devices set up before this change get it the next time a child is added or the parent opens settings.
- **Data lives only on the phone.** Loss on uninstall or a factory reset; export is manual.
- **TTS quality** differs per phone and may mispronounce isolated letters and vowelled syllables; this is the main reason real recordings are P1.
- **Videos** (157) came from web search results and were never watched or embed-tested.
- **Content correctness**: Arabic text, word/picture pairs (emoji can look different per platform) and age ranges have not been reviewed by a teacher.
- **Compliance** (COPPA, GDPR-K, Play Families, Apple Kids) has **not** been reviewed; nothing here claims compliance.
- Android build, lock-screen audio, Firebase and the rules were never run.
