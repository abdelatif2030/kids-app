# Review: «سكاي كابي» Sky Capy vs the owner's original video (brief #17)

Brief #17 is the top-down bubble shoot-'em-up "SKY CAPY" (video `20261118-2007-51.5485840.mp4`, 346x594 portrait, 95 s). It is the existing game `game_src/sky_capy` (the only game that fits). Checked by ffmpeg contact sheets of the video and by playing the build in headless Chrome (390x780, Arabic and English) with real mouse input, forced low HP, forced thief, game over.

## What the original does (from the frames)
- Title: big "SKY CAPY" logo with the capybara pilot, "BEST" pill, big red PLAY, round icon buttons (Hangar, Top 10, Trophies, Settings).
- Story cards before stage 1 (Featherwind Village, SKIP / NEXT with dots).
- HUD: heart + green HP bar with %, score, pause; a progress bar with a marker under it; X2 combo mark; the red songbird Pip talks in a speech bubble with his portrait; an "ACHIEVEMENT / FIRST POP" pill; FIRE (round, with a tank ring that greys out when empty, "Tank empty! Let go of FIRE to refill") and STORM buttons at the bottom right.
- Red/pink screen edges when HP is low.
- "FREE THE BIRD!" sign over cage balloons, "CATCH THE CAGE!" with an arrow when the cage falls; "BLUE JAY JOINS!" banner; "THIEF! He grabbed the village feathers!" with a draining bar at the top (pop the thief to get the feathers back).
- Game over card: GAME OVER, stage, big score, HI-SCORE, feathers earned, initials entry; Top 10 with a stage column and TITLE / HANGAR / AGAIN buttons; Hangar with UPGRADES / PAINT tabs.
- Painted, darker parallax scenery (floating islands with houses and foliage, depth mist), detailed plane/enemy art.

## Differences found (before)
Gameplay was already close (drag to fly, auto-fire + FIRE for a faster stream, STORM, wings, capsules, cages, 3 stages + boss, loop, ranks, hangar, top 10). Missing or different:
1. Title was a small card with text buttons, no best pill, no round icon buttons.
2. No story cards.
3. Hints were plain toasts (no Pip portrait); the achievement was a toast, not a pill.
4. No low-HP red vignette.
5. FIRE button did not grey out when the tank was empty and gave no hint.
6. The thief was only a fast pest: no THIEF banner, no bar, no feathers to win back.
7. No "FREE THE BIRD!" / "CATCH THE CAGE!" signs.
8. Game over card was three lines of text; Top 10 had no stage column and only a Back button.
9. Progress bar had no marker.

## Fixed (game_src/sky_capy, rebuilt into assets/games/sky_capy/game.js)
- New title screen (large logo, BEST pill, big red PLAY, round Hangar / Top 10 buttons).
- Three story slides with SKIP / NEXT / GO and dots before every run (Arabic and English strings).
- Pip speech bubbles with a red portrait; achievement pill ("ACHIEVEMENT / FIRST POP"); progress marker dot.
- Low-HP red vignette (stronger as HP falls, pulses under 35%).
- FIRE greys out when the tank is empty plus the "Tank empty! Let go of FIRE" hint.
- Thief: sim (`sim.js`) emits `thief` on arrival, exposes `run.thief` (escape progress) and drops a bundle of 6 feathers when popped (`loot` event); HUD shows the "THIEF!" banner and a draining bar; hints move down while the bar shows.
- "FREE THE BIRD!" sign over cage balloons, "CATCH THE CAGE!" sign with a bouncing arrow on the falling cage.
- Game over card (GAME OVER, stage, big score, hi-score, feathers pill, ranks, Back / Hangar / Again); Top 10 with a stage column and Back / Hangar / Again buttons.

## Verified
- `npm test`: 9 pass (new test: thief carries feathers, event and loot). Played a run in headless Chrome: story cards, play, forced thief + 30% HP (bar, banner, vignette), forced death (game over card, save post). No console errors.

## Still different (not done)
- Art: the video has painted, detailed scenery and sprites; ours are code-drawn flat cartoon islands, a simpler plane and enemies. The red target ring around damaged enemies is not drawn. A picture pass would need new art (add jobs under `tools/art_jobs/` and load with `game_src/cozy_kit/art.js`).
- No Trophies or Settings buttons on the title (the app already has its own settings); the capybara pilot is not drawn on the logo.
- Dialogue lines are fewer than the video's and not tied to events one by one ("BLUE JAY JOINS!" uses the existing rescue toast).
- Not tested on a real phone; sound not heard by a person. Landscape phones still show the portrait field in the middle.


## 2026-11-20: generated pictures (AI Horde)
- Added `assets/games/sky_capy/art/`: `clouds.webp` (cartoon cloud sea, drawn mirrored and scrolling at 50% over the code-drawn sky) and `balloon.webp` (red/cream striped balloon, cut out; the code-drawn pirate rat is still drawn in the basket). About 22 KB in total. `art.js` has `ART` + `pic()`; `main.js` loads them with `cozy_kit/art.js` `loadArt`. Hooks also exist (not loaded because no good picture) for `plane`, `island_village/laundry/tree` and `boss`: they only switch on if a file with that name is put in `art/`.
- Not added: plane, islands, boss. The free generator (SDXL queue was hours long; fast SD 1.5 models used instead) cannot make a true top-down view; the pictures came out as side/perspective views with scenery backgrounds, which would look wrong in this top-down game, so the code-drawn versions stay.
- Every picture is optional (missing file = code drawing). Gameplay, hitboxes and sim are unchanged.
- Checked in headless Chrome (430x800): menu and real play (islands, balloons, bubbles, plane) look right, balloons are clear and not covering HUD or buttons, no console errors (only a 404 for the font path because the test server root differs), 61 fps in the headless renderer (same as before). `npm test` 9 pass.
- Looks off / to do: the cloud layer is subtle; the original video's painted islands and plane are not matched (need a stronger generator or the owner's pictures; prompts are in tools/art_jobs/sky_capy.json).

## Phase 2E — Batch F: the Nile Journey (8 stops, second boss, 20 badges, Migration Season)

- **Journey mode (new default in the menu):** 8 Nile stops south→north — Lake Nasser → Aswan → Kom Ombo → Edfu → Luxor → Qena → Cairo → Alexandria — each one stage built by `buildStop()` from the existing stage-event mechanism (the stop's base pattern with its boss stripped, a density ramp of +1 event per stop, and a boss event that ends the timeline). Boss HP ramps monotonically 150 → 505. Backdrops use the existing per-stage system: each stop assigns one of the 3 `paintSky` palettes and one of the 3 island kinds (`Run.backdrop` / `Run.islandKind`), so stops differ visually within the art that exists; names + event mixes carry the rest of the identity.
- **Second boss:** the Storm Heron (stops 3, 5, 7, 8) — a re-parameterised boss on the existing boss machinery: `BOSS_KINDS` spec (hp 190 base vs captain 150, score 7500, faster fire 1.05), tighter bolt fan (spread 0.16, speed 26), faster sway, summons gyros instead of gliders. It is honestly a spec variant: it reuses the captain's airship drawing (no new boss art exists; the art-batch sheets need the owner's cutting step — `~/workspace/art_batch/out/sky_capy-01..14.png` logged, not wired).
- **Finale:** clearing stop 8 sets the new `journeycomplete` run state → a journey-complete card (trophy text, score, ranks, feathers) with a Migration Season button — no silent loop.
- **Migration Season:** the legacy endless 3-stage loop is untouched (`Run` default mode = migration; `nextStage` loop code path identical) and is offered on the menu only after `journeyDone`; the journey stays the lead button, and a finished journey can be replayed from stop 1.
- **Progress & kind rules:** `save.journeyStops` (0–8) + `save.journeyDone` are new `normalizeSave` fields (old saves default to 0/false, everything else preserved exactly — pinned by test). Progress is written the moment a stop is cleared (`_stageCard`), never on death, so a failed stop is simply retried and completed stops stay completed. No new pressure added: no timers/lives introduced; the existing arcade fail state is unchanged.
- **Badges:** before this batch only ONE badge existed (`firstpop`, awarded in main.js) although the save caps at 20. Now `BADGES` defines all 20 with conditions on a run-stats snapshot (`Run.badgeStats` + exported `checkBadges`): pops 1/10/50/150, combo 10/20, rescues 1/3, full wings, bosses 1/3, first storm, 25 feathers, 50 pearls, score 10k/30k, an S rank, journey half (4 stops), journey complete, one full migration loop. Counters are tracked in the sim (`Run.c`); main awards at stage-clear / game-over / journey-complete and shows the achievement pill. A test earns all 20 across a scripted journey + migration loop (combo20 driven through the real `_pop` mechanic, since the test bot takes combo-resetting hits).
- **Playtime:** before — one endless loop ≈ 5–6 min (3 stages, timelines 50–60 s + boss) repeated forever, no ending. After — the journey is 8 stops × ~1.7–2.5 min (55–65 s timelines + boss fights vs 150–505 HP) ≈ 15–20 min to the finale, then the endless Migration Season. Estimate from timeline lengths + boss HP at the plane's base DPS.
- **Verified:** `npm test` 14/14 (9 legacy + 5 new: stops/difficulty/boss endings, full journey playthrough 1→8 + migration unlock, fail-keeps-progress, all-20-badges, save migration). Build green, game.js 147.0 KB. `phase2e_verify.mjs sky_capy` PASS, 0 page errors; screenshots eyeballed — menu shows «كابي فوق النيل» with the «رحلة النيل» journey button; a self-driven capture (harness regex doesn't match the journey label) shows stop-1 gameplay with the FIRST POP achievement pill firing.
- **Not tested:** heron boss visually distinct (same airship art — needs art), journey-complete card in the browser (proven in sim tests only), real phone / WebView, sound by ear.
