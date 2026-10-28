# Kids App

Arabic-first kids app (ages 1-12, up to the end of primary school), Android first, Flutter. A "mini home school": the parent enters the child's age; the app shows only age-appropriate, hand-reviewed content, organised by subject.

## Rules (non-negotiable)
- Videos come only from the whitelist `assets/videos.json` (fields: youtubeId, title, category, minAge, maxAge, language). No free YouTube search for the child.
- Play videos only with the official YouTube player package (IFrame). Never download, rip, or re-host videos, and never remove ads or branding.
- No ads, no chat, no external links, no tracking for the child. Collect as little data as possible. No analytics SDKs.
- Voice commands: on-device speech recognition only, no audio stored or uploaded, match only a short fixed list of commands (e.g. songs, letters, stories). When picking the package, tell the user which one and whether it works offline.
- Child mode is started by the parent, exited with a parent PIN, and a timer ends the session gently. Do not try to block the phone's emergency or power functions.

- Rewards (stars) only for finishing an activity, never for time spent. No streaks, no comeback nudges.

## Build order (stop after each step so the user can test)
Done: 1 videos.json, 2 YouTube player, 3 parent PIN + settings.
Current plan (user revised it; run in this order):
4. Session timer: enforce daily limit + quiet hours, gentle "time to rest" end screen, never cut off mid-video; parent PIN can extend or end the session.
5. Arabic-first UI: RTL, Arabic labels everywhere, large tap targets, bright colors, simple original mascot drawn in code (no copied characters).
6. Video thumbnails in the list via YouTube's standard thumbnail URL per youtubeId.
7. "Today's plan" button: short balanced sequence for the child's age (learning, story, fun, then rest screen); skip categories with no videos for that age.
8. Parent summary screen: what was watched + total time per day, stored locally only.
Still pending, not yet re-scheduled by the user (do not drop): Android lock mode (screen pinning) from the parent screen; voice commands (on-device only, fixed command list).
Mini-school plan (user asked for all of it; built in this order on branch feature/mini-school):
A. Subjects/curriculum, B. weekly plan + parent notes, C. drawing, D. letters/words + math games, E. UI polish: all built (see Status).
F. NOT BUILT, needs user decisions first: parent/teacher registration, teacher profiles, booking and live online lessons. This needs a backend (Firebase or Supabase, not chosen), new packages, and it breaks "collect as little data as possible", so it must be approved first. Safety design to propose: only parents register and book (in the parent area, behind the PIN), a parent must be present, no chat or messaging for the child, teachers vetted before their profile shows, lessons opened as an external link from the parent area only (never reachable by the child). Paid plans (free plan first) come after that.

## Working agreements
- Ask the user before installing any package, and explain why it was chosen.
- Run `flutter analyze` after each step (and `flutter test`). Flutter is not installed in the cloud session by default; it can be downloaded into the scratchpad for checking.
- The user keeps a web server running on port 8080 for previews. Tell them when to press `r` in that window (hot reload; `R` for restart when assets/pubspec change).
- Never invent YouTube IDs; the user supplies the real ones.

## Status
- Step 1: done (videos.json, 15 real videos, Arabic titles).
- Step 2: done (lib/player_screen.dart, youtube_player_iframe 6.0.2). User confirmed videos play.
- Step 3: built (user moved on to step 4, so treat as accepted). lib/parent_settings.dart (salted SHA-256 PIN in flutter_secure_storage, 5 tries then 30s lockout; limit/quiet hours in shared_preferences), lib/parent_screens.dart. Packages flutter_secure_storage, shared_preferences, crypto user-approved. 
- Step 5: built (no new packages). RTL via Directionality in MaterialApp.builder (no flutter_localizations, so Material pickers keep English chrome), Arabic strings everywhere, lib/ui.dart (colors, category labels, code-drawn Mascot), 56dp+ buttons, 96dp+ cards.
- Step 6: built. Thumbnails via Image.network https://img.youtube.com/vi/<id>/hqdefault.jpg with a color-block fallback on error.
- Step 7: built. "خطة اليوم" button on the list: one random video each for Learning, Story, Fun (skips empty categories), PlayerScreen pops `true` only when a video ends; a star per finished video (shown on plan-done RestScreen, not stored, no streaks). Player now closes only once (_closing guard).
- Step 8: built. lib/watch_history.dart (per-view entries as JSON in shared_preferences, kept 30 days, views under 5 s ignored), recorded from PlayerScreen.dispose using a stopwatch that runs only while playing; lib/summary_screen.dart (last 7 days, per-day totals, check mark = finished), opened from Parent settings. Local only.
- Steps 4-8 all built; user will test them together. Next up: Android lock mode, then voice commands.
- Games (lib/games_screen.dart, by age): balloons + "فين الحيوان؟" (1-2), color game (2-3), memory (3-4); 5-6 shows "coming soon". No audio, no stars except on finishing.
- Color game: built on branch feature/color-game, `flutter analyze` NOT run (Flutter not installed in the cloud session), untested. lib/color_game.dart: 5 rounds, big target color + 3 choices, a wrong tap only fades that choice (no loss), star only after round 5. Progress dots are not stars. When the set ends and time is up, "العب تاني" stops the session and goes to the rest screen; the other games don't check the timer yet. No new packages. Preview: press `r`.
- Mini-school (branch feature/mini-school, on top of feature/color-game; flutter analyze clean except an old unused-field warning in where_animal_game.dart; `flutter test` has 14 widget tests in test/mini_school_test.dart). No new packages.
  - Subjects: lib/curriculum.dart (arabic, english, math, science, deen, quran, drawing, german, french, discover, fun). videos.json got an optional `subject` per video (default discover); the 15 existing videos are tagged arabic/math/discover/fun. Subjects with no videos show "no lessons yet": the user must supply real YouTube IDs for them (never invent IDs).
  - Child home (lib/home_screen.dart): دروسي (lib/subjects_screen.dart, per-subject lesson count for the age), فيديوهات (all videos + خطة اليوم), ألعاب, رسم. Ages 1-12 on the age screen. HomeScreen now ends session time counting when it closes (SessionManager.stop in dispose, post-frame), VideoListScreen no longer does (it used to stop the timer when the child went back to the home screen). The rest screen's "extend/back" returns to HomeScreen.
  - Parent area additions: lib/plan_screen.dart (free weekly plan: lessons per subject per week; progress = videos finished in the last 7 days from watch history) and lib/notes_screen.dart (notes, optional subject, stored locally). Both open from Parent settings.
  - Games by age (lib/games_screen.dart): balloons + animal 1-2, color 2-3, letters/words 3-8 (Arabic/English/German/French first letter, lib/letters_game.dart), memory 3-6, math 4-12 (counting, sums, subtraction, times tables by age, lib/math_game.dart). Drawing (lib/drawing_screen.dart) is not saved anywhere; the star comes from pressing "خلصت" after drawing. All new games: 5 rounds, wrong tap only fades, star only at the end, and "play again" goes to the rest screen if the timer says time is up (restIfTimeUp in rest_screen.dart). The old games (balloons, animal, memory) don't check the timer yet.
  - Not tested on a real device or in the browser by the user yet.
- Step 4: built, awaiting user test. lib/session_manager.dart (counts foreground time per day in shared_preferences keys used_YYYY-MM-DD / bonus_YYYY-MM-DD; reason notifier), lib/rest_screen.dart (Arabic "time to rest", PIN -> extend 15 min or end), PinEntryScreen(returnResult). Picking an age = parent starts child mode. A playing video always finishes; paused video is closed once time is up. No new packages.
