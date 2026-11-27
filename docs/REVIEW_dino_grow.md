# Review: Dino Grow (ديناصور صغير يكبر) against the owner's original video (brief #26)

Video: Recordings\20261118-2136-28.7504658.mp4 (139 s, portrait), checked with contact sheets.

## What the original does
- Near top-down 3D camera, far enough to see a dozen creatures; a small baby raptor with a plain outlined power number above it; every creature shows its number (green/white = edible, red with "!" = bigger, run).
- HUD: leaf level badge; orange power pill (egg icon, claw after evolving) plus a white counter; pause; a thin progress bar with a red goal pill (37); "BEAT THE ALPHA 36"; big teal POUNCE button (claw, cooldown arc, label under it).
- Level title ("FERN HOLLOW - Eat green, run from red!"), hint capsules ("TAP POUNCE TO LEAP!", "GROW TO EVOLVE!", "RED IS BIGGER - RUN!"), floating +N, "EVOLVED! CREST HUNTER", floating joystick with "DRAG TO MOVE".
- The level goal is the ALPHA: a boss bar (name + power) appears, an edge arrow points to it, eating it shows "DEFEATED!". Level 2 "Mirefen Swamp" (start power 40, "Lure the divers into the mud!") ends with the flying "Gale-wing 360" boss; swamp has mud, giant ribs.

## Differences found (before)
1. Camera too close: the baby filled the screen, the world looked empty.
2. Numbers were big coloured pills; HUD was text pills (power, goal 2/32), orange round POUNCE button with a dino.
3. Levels 1 and 2 ended when power reached a number, no alpha, no boss bar, no arrow; level names generic; level 1 started at 2, swamp at 14.
4. Evolution was a hint line, no EVOLVED banner or name "Crest Hunter".

## Changed
- `src/sim.js`: camera zoom starts farther (`zoomFor` 20 + 9 ln(1+P/10), still monotonic); level 1 "Fern Hollow" start 3, alpha "Snapjaw Alpha" 36 (spawns at power 20, hunts you while stronger, flees when weaker, eating it wins); level 2 "Mirefen Swamp" start 40, "Marsh Fang Alpha" 80 (spawns at 55); `alpha` / `alphaDown` events; stage 2 renamed Crest Hunter; level subtitles. Volcano boss unchanged.
- `src/main.js`: steeper, farther camera; outlined plain numbers (red ones with "!"); new HUD (level badge, orange power pill with egg/claw, eaten counter, pause, progress bar + goal pill, "BEAT THE ALPHA 36", alpha bar green/red, edge arrow, teal POUNCE with cooldown number); level title, "DRAG TO MOVE", EVOLVED! / DEFEATED! banners.
- Tests: updated robot (no stuck in corners), two new alpha tests; all pass. Browser check (headless Chrome 390x780): menu, level 1 HUD, camera, numbers, pounce cooldown; no script errors (WebGL context loss only in the software renderer).

## Still different
- No flying divers / mud pools in the swamp, no Gale-wing boss (level 2 ends with a ground alpha; scale 360 not used). No giant ribs or leafy ground texture; the jungle floor is flatter than the original.
- Pack of small purple raptors swarming is not specific; creature models are code-drawn shapes.
- Eaten counter is my reading of the original's second white pill. Alpha bar was not re-checked in the browser (HUD logic covered only by sim tests). Sound not heard; no real phone.

## Batch E — Egypt identity: «سبينو الصغير / Little Spino» (2026-11-27)

The game is now Egypt's own dinosaur story: the hero is a baby **Spinosaurus** (found in the Bahariya Oasis), growing up across real fossil places.

**Renames (AR + EN, display only — ids, powers, sizes, behaviour untouched)**
- Title: ديناصور صغير يكبر / Dino Grow → **سبينو الصغير / Little Spino** (menu, `<title>`, comments).
- Levels: Fern Hollow → **Bahariya Oasis / واحة البحرية** ("هنا لقوا عظام سبينو من زمان!" / "Spino bones were found here long ago!"); Mirefen Swamp → **Wadi El Hitan / وادي الحيتان** ("Ancient whales lived in an old sea here!"); Volcano Valley → **Black Desert / الصحراء السوداء** ("Black hills from old volcanoes!"). The three harder return visits follow the same places: Deep Bahariya Oasis, Deep Wadi El Hitan, Black Desert Peak.
- Evolution stages: Baby Raptor → **Hatchling Spino / صغير سبينو**; Raptor → **Brave Spino / سبينو الشجاع**; Crest Hunter → **Spino Hunter / سبينو الصيّاد**; Giant → **Spinosaurus / سبينوسورس**. Thresholds (0/10/32/70) unchanged.
- Alphas (powers identical): Snapjaw Alpha 36 → **Bahariya Fang / ناب البحرية**; Marsh Fang Alpha 80 → **Whale Valley Fang / ناب وادي الحيتان**. The Black Desert boss was unnamed in code (power 100) and stays so.

**Hero model (`src/main.js`)** — `makeBiped` gained two cheap options used only by `PLAYER_LOOK`: `snout` (1.3→1.45 by stage) stretches the muzzle/jaw for the long Spinosaurus snout, and `sailRound` adds the signature sail as **one rounded plate** (a squashed sphere) built once with the model — no per-frame work. `sailK` grows it per stage: 0.45 → 0.7 → 1.0 → 1.3 (measured sail scaleY 0.675 as a baby vs 1.95 at the final stage). The hero's old back-spikes were dropped where the sail now sits; every other creature model is unchanged.

**Real Spinosaurus facts (text only, AR + EN)** — one per stage, stored on `STAGES[].fact`: (baby) Spinosaurus lived in Egypt long ago; (brave) it was bigger than T. rex; (hunter) it loved water and ate fish; (Spinosaurus) "Scientists think its sail helped it stay cool and show off" — hedged as العلماء فاكرين…. The fact for the new stage rides the EVOLVED! banner line under the stage name, and the end card gained a one-line "🦖 From the Spino album: …" with the fact of the stage the player finished at. No new screens, no voice lines generated (spoken versions would need owner clips — listed in the worker report).

**Palette (existing `LOOK` constants only)** — Bahariya: oasis green ground with sand patches; Wadi El Hitan: sandy whale-bone ground (0xc2a061) with the existing alternating teal wetland-pool patches; Black Desert: darker volcanic ground/patch (0x2e2426 / 0x1e1618). Level-select cards and icons recoloured to match (🐋 for the whale valley). No new art files.

**Tests** — baseline 12/12 → **13/13** (`npm test`): one new test pins the three place names (AR+EN), the four Spinosaurus stage names, a fact on every stage (incl. the "Scientists think" hedge), and the unchanged alpha/boss powers (36/80/100). `npm run build` clean; built game.js 170.4 KB (under the 200 KB budget).

**Click-flow verify** — own script `~/tools/recorder/phase2cE_dino_grow.mjs` (pattern copied from `phase2c_verify.mjs`, shared harness untouched): standalone page, real PLAY button clicked with the audio context confirmed `running` after the gesture, **9/9 checks passed, zero page errors**. Frames at 844×390, 1024×768, 1366×1024 in `~/workspace/projects/audit/shots_phase2c/dino_grow_*.png` were eyeballed: Bahariya title card + fossil subtitle show, oasis green with sand patches reads clearly, the baby hero carries a small yellow sail ridge along its back, HUD/«اهزم الزعيم ٣٦» intact.

**Honest gaps**
- At stage 0 the sail is deliberately a small baby ridge (sailK 0.45) — visible as a yellow fin stripe from the top-down camera, unmistakable from stage 2 on; if the owner wants it bolder at hatching, raise sailK on stage 0 only.
- Wadi El Hitan's scenery still uses the swamp's dead trees/reeds on the new sandy ground (palette-level re-anchor only, per batch scope); whale-bone props are a Batch F art item, as is the plan's 6-fossil-site expansion (Siwa, Dakhla, Red Sea hills).
- Facts are text-only; no spoken versions exist yet (owner voice batch). The evolution album is a single end-card line, not a collection screen (Batch F scope).
- Sound not heard (headless); no real phone/WebView check.
