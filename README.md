# رحلتي (Rehlaty) — Arabic-first kids learning app

Flutter, Android first (a web build on port 8080 is used for previews). Ages 1–6 (older content and profiles from earlier versions are kept but no longer offered). Child area, parent area (PIN), local content admin.
Child data stays on the device. No ads, no analytics, no external links in the child area.
The only contact feature is the parent-approved family chat and calls (`docs/FAMILY_CHAT_DESIGN.md`).

> الملخص بالعربي: تطبيق تعليمي للأطفال (١–١٢ سنة) بالعربية أولاً، بدون إعلانات أو تتبع. هذا الملف يحفظ ما وصلنا إليه وما ينقص وما يحتاج منك.
> Status below is honest: "built" means code + tests exist; **nothing here has been tested on a real phone** and the Android build has never been run in the cloud session (no Android SDK).

## Run

```bash
flutter pub get
flutter run -d web-server --web-port 8080     # preview (press R for a full restart after asset/pubspec changes)
flutter analyze
flutter test
flutter build web
```

Branch: `feature/rehlaty`. Commits are pushed there after each step. Rules tests (Firestore emulator): `cd rules_test && npm test` (needs Java).
Last full run in the cloud session: **1068 tests pass**; `flutter analyze` shows only old lints (7–8 infos and the old unused `_round` warning).

## What the app has

**Child side**
- Start: language choice (Arabic/English) with the real logo, who-plays picker, onboarding (profile, goals, short assessment, plan). A 2-second opening animation with the logo art and the Arabic and English names (skipped with reduced motion; tap to skip).
- Home, two looks (a switch in the header; the list is the default):
  - **List**: greeting, "continue my journey", «يومي» stations, today's path, shortcuts, recent wins, and the lands in **one collapsed card «أراضيّ»** that opens on tap.
  - **Map**: one floating island drawn in code, a winding path with stepping dots, and a badge with a name plate for each section (letters, numbers, words, stories, games, create, videos, my library, with family, my wins). Mirrored for Arabic.
- Child shell tabs: home, games, create, me. Learning maps per land, 6 activity types, 13+ learning games, Arabic letters (with adaptive plan), word library, bedtime stories, Creative Studio (drawing, scenes, characters, picture stories, private gallery with tabs All/Drawings/Words/Stories), family activities.
- Videos: only the whitelist `assets/videos.json`, official YouTube IFrame player. **On a phone the player turns to landscape and fills the screen** (restores on exit; not on web or tablets). Most of the 157 IDs have NOT been watched or embed-checked.
- The faint Rehlaty logo sits behind every world-background screen (very faint behind adult lists). The new logo (two 3D children over «رحلتي / Rehlaty») is also the launcher icon and the web icons.

**Parent side (PIN)**
- Dashboard: time, lessons, game rounds, skills, recommendations, copyable report, and **the last four weeks side by side** (counts only, no percentages; empty state until two weeks have data).
- Children and plans, content admin, privacy and data reset, notes, weekly plan, summary, printable worksheets, audio status and review tools, display settings.
- **Permissions screen** (Parent settings): microphone, camera, files and photos — why, when asked, what if refused. Checked against the Android manifest by a test. It only explains; it never asks the phone.
- Family chat and calls: relatives are added by **a unique user name** the relative chooses (no e-mail anywhere), the relative accepts in the app, the parent reads everything. Voice messages, voice and video calls are separate per-relative switches (off by default). `firestore.rules` changed: **you must re-publish it** (`usernames` collection, requests matched by account).
- Teachers marketplace (stage 1 and 2: profiles, slots, bookings, reviews, in-booking messages) and portfolios. Firebase is switched off until you create a project (`docs/teachers-setup.md`).

## Rules built in
Videos only from the whitelist. Stars only for finishing an activity; no streaks and no "come back" nudges. On-device speech only. Child mode started by the parent, exited with the PIN, a timer ends the session gently. Collect as little data as possible. Packages are added only after you approve them.

## Not verified / limits (honest)
- Nothing tested on a real device or screen reader; Android build never run here.
- Family chat, calls, teacher features: tested only against in-memory fakes and the rules emulator, not real Firebase, microphones or cameras. No push notifications. TURN server not set up (STUN only).
- Audio: 0 of 360 lesson sounds are approved; device voice for most; no human recordings. Story and letter texts and every new Arabic line need native review.
- The AI suggestions feature has no server; it needs your HTTPS endpoint and is off by default.
- The 157 videos: titles and age ranges written from search titles; you must watch and delete the bad ones.
- Logo: confirm you own the rights; the source image is 1536×1024 (higher resolution is needed for the Play Store).
- The island map and the full-screen player were only checked in rendered test images and unit tests, not in your browser or on a phone.

## Pending steps from your numbered brief (stop after each, wait for you)
- ✅ 1 tests/analyze · ✅ 2 gallery tabs · ✅ 3 call screen layout · ✅ 4 permissions screen · ✅ 5 multi-week chart
- ✅ 6 pictures and small activities inside the stories (every new line still needs native review)
- ✅ 7 offline message queue for family chat (not run against real Firebase)
- ✅ 8 web offline check: `docs/WEB_OFFLINE.md` (result: the web build cannot start offline)
- ✅ 9 `docs/MANUAL_TESTS.md` section J and `docs/ACCEPTANCE.md` (what needs you is listed there)
- Privacy wording about the microphone: fixed.

## Needs you
1. Re-publish `firestore.rules` in the Firebase console, then run F4 in `docs/MANUAL_TESTS.md` (user names).
2. Test on a real phone: map home, full-screen player, permissions screen, logo watermark.
3. Watch and prune the videos; review Arabic content with a native speaker; confirm logo rights.
4. For the cartoon video (below): subscribe to Higgsfield Plus (or choose another route).

## Cartoon proof of concept «الفانوس بتاعي!» (`rehlaty_ramadan_poc/`, not part of the app)
Goal: a 20–30 s 3D cartoon with Adam and Nour. Details and quality notes: `rehlaty_ramadan_poc/README.md` and `08_quality_report/`.
- Done: Adam and Nour reference sheets and a living-room reference (Higgsfield image model, logo as reference); a composed start frame; two 2-second clips (Higgsfield `wan3_0`); a 6-second trial video with the logo end card; a girl voice line (ElevenLabs `eleven_v3`, voice "Mini", listed as Hindi, so the accent may not be Egyptian). Latest cut: `07_final_video/rehlaty_ramadan_trial_05_nour_closeup.mp4`.
- Problems: the video model made Adam speak Nour's line (worked around with a Nour close-up and the girl voice); Nour's lips do not match the voice; ElevenLabs has no Egyptian child or female voice and refuses to design a child voice; ElevenLabs video and lip-sync need a paid plan.
- Decisions: keep the current voices. **Use Kling 3.0 (`kling3_0`, about 6 credits for 3 s) with its own sound on, after you subscribe to Higgsfield Plus** ($49/month, or $39/month annual, 1000 credits). First try a 3-second Nour clip and judge the voice, accent and lips before making the other shots (full story at 1080p is about 450 credits; 480p drafts about 85).
- Credits: Higgsfield balance is 0 (free plan).
