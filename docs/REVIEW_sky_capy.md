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
