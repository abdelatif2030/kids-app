# Review: Trick or Treat (brief #28, video 20261118-2140)

## What the video does
Portrait night street, crowd of costumed kids tiny near the bottom (ground at ~78% of the height), lit houses and orange trees behind a picket fence. HUD on torn-paper tags: orange kid count, purple candy count, dark round pause, and a progress strip kid -> house. Tips on torn-paper notes: "Run past doors to ring the bell: more kids!", "Hold for a bigger jump", "Jump in the middle of a pit for a Perfect", "Hold to fly through floating doors". Chips pop up (+5, +8 for doors, "door +14" for a floating door). A kid-count tag floats over the crowd. Candy lies on the sidewalk, leaf pits have orange barriers.

## Differences found (before)
Friendly doors only rang if you jumped to a high bell (video: just run past); grumpy doors were avoided by NOT jumping (brief: jump past them); no floating doors; no Perfect; HUD was one row of round pills; tips were dark pills with the old rules; ground at 60% of the screen leaving a large empty street; no count tag over the crowd.

## Fixed (game_src/trick_or_treat, bundle rebuilt)
- Sim: friendly door rings when the leader runs past on the ground (3-5 kids); jumping through the warm bell still rings it with +2 bonus. Grumpy door scares kids (-3, -1 in easy mode) only if you run past on the ground, a jump clears it. New floating doors (+4 to +6 kids) in rest stretches, reached with a held jump, never a penalty. "Perfect!" (+5 candy) for being near the top of the jump over the middle of a pit. Level generator emits floats and candy arcs over grumpy doors.
- Tests rewritten for the new rules plus floating-door and Perfect tests; the robot still beats all 7 streets and easy mode. `npm test`: 16 pass.
- UI: torn-paper HUD (kids, candy, pause, progress with kid marker and house), torn-paper tips with the video's wording (Arabic + English), tips for pits/floating doors/hold, floating-door art with balloons, crowd-count tag over the leader, "Perfect!" popup, ground moved to 77% in portrait.

## Checked
Headless Chrome 390x780: ground ring, floating door tip, held jump through it (+5 popup, stats floats=1), no console errors.

## Still different
2D canvas, not the video's painted 3D look; no power-up "x2" pickup; no cut-paper in menus/result cards; kid count tag uses an emoji icon; sound not heard by a person; no real device test.

## 2026-11-20: generated pictures
Frames of the original video (purple dusk street, lit houses, orange trees, picket fence) were extracted and used to match the style. Pictures made with AI Horde (tools/art_jobs/trick_or_treat.json, assets/games/trick_or_treat/art, 572 KB, WebP):
- houses_lane, houses_park, houses_mansion, houses_farm, houses_hill, houses_bridge, houses_parade: one painted street backdrop per street (7). In src/main.js `_draw` they replace the code sky + moon + far/mid hill tiles: the top 80% of the picture is scaled to about 68% of the play height, bottom edge hidden behind the fence, top faded into the code sky, mirrored side by side so it scrolls (parallax 0.2) without a seam. The faded copy is cached per picture and screen size. Porches, fence/lane tile, ground, hazards and crowd are still code-drawn on top.
- dog: painted dog (cut out, cord and floor shadow cleaned) in place of the code dog; same bounce and position.
Not used: jack-o-lantern (generator returned a whole house scene), spider boss, kids/costumes, porches (animated or interactive and need the code art). Fallbacks to the code drawings remain for every picture.
Checked in headless Edge at 390x780: menu, levels 1-7 played from startLevel (montage of all seven), dog forced awake in level 3; HUD, count tag, kids, candy and hazards stay readable; no console errors besides 404s for optional files before they existed; rAF 60 with and without pictures. `npm test` 16 pass; rebuilt.
Still off: the painted houses sit far bigger than the code houses, so the code porches in front can look doubled; the dog is small and a 3/4 view with purple-orange fur rather than a brown side view; sound/real device not tested.

---

## Phase 1 fix review — Moss, 2026-11-27 (commit 8271446f)

**What was wrong.** The win card chose its line with `I.t('win_f') === I.t('win_m') ? 'm' : 'm'` — 'm' on both branches. Girl players never saw the feminine win line, even though the config gender was already being passed to setGirl and to VoiceCoach; the Game just never stored it.

**What changed and why.** The constructor stores `this.girl`; the card now uses 'f' when the player is a girl and the language actually has a distinct feminine form (where the forms are identical the choice is moot), else 'm'. Same pattern as the castaway_raft fix.

**Tested.** npm test 16/16 (sim untouched). Browser differential through the real `_won()`: girl instance shows «شطووووورة!» and boy «شطووووور!»; zero page errors. fps 8.2 rAF under CDP 4× CPU throttling in headless SwiftShader — low in this software-GL environment (full-screen canvas painting predates this change; the fix touches only the win card). A comparable lower bound, not a device number; canvas paint cost logged as a Phase-2 perf item in docs/AI_WORK_LOG.md.

**Not verified.** German/French feminine forms not eyeballed (the guard falls back to win_m wherever forms are identical). No real-device test. Voice clips for this game are not installed yet; VoiceCoach is wired and the lines are on the owner's "add to instinct" list.

---

## Phase 2D — Egypt anchor: «ليلة الوحاوي / Wahawy Night Run» (2026-11-27)

**What changed (names only):** Halloween becomes the Egyptian wahawy
lantern night. Title «حلاوة ولا مقلب / Trick or Treat» → **«ليلة
الوحاوي / Wahawy Night Run»**; the subtitle leads "the kids with their
wahawy lanterns"; the logo pumpkin is a lantern 🏮; the seven streets
are Lantern Lane → Nile Park → Big Hara House → Clover Farm → Sweet
Hill → Lantern Bridge → **Wahawy Parade**; the pumpkin costume is a
lantern suit (the friendly mummy was already Egyptian). Crowd
mechanics, costumes, the Phase 1 girl-line fix and saves untouched.

**Tested:** `npm test` 17/17 (+1 anchor test); build green; real
click-flow verify PASS — menu title and subtitle, street-1 run HUD
with kids/candy counters, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** lantern-light trail effects and a Ramadan
street backdrop pass are not built — the night street art is unchanged
beyond names. Not tested on a real device.
