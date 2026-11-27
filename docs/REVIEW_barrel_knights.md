# Review: Barrel Knights (brief #27, video 20261118-2139)

## What the video does
Portrait, high 3/4 camera that follows the barrel and the player. Plaque "MATCH 1 / Opening Day / FIRST TO 2", then READY? 3-2-1. 60 s clock, first to 2 goals. Stone castle end walls with a big archway as each gate. HUD: match badge, green shield + score + orange sun shield, clock under the score, round pause. A fixed joystick bottom-left (green gem) and a big orange DASH bottom-right that turns grey with a ring while recharging. Barrel is about three knights wide. Tip ribbon "Shove it through their gate!", green "GOAL!" ribbon with dust, quick reset to kickoff.

## Differences found (before)
Match was 120 s / first to 5 on a 52-unit pitch; floating joystick only (nothing visible); barrel only 1.4x a knight; camera far away (whole pitch in view); white-post gates, no castle wall; no plaque; no tip ribbon; plain HUD with colour dots; dash button without grey/ring cooldown look; goal banner was plain text.

## Fixed (game_src/barrel_knights, bundle rebuilt)
- Rules: MATCH_TIME 60, GOAL_LIMIT 2 (golden-goal overtime kept), pitch shortened to 40 units so goals happen in a minute, barrel radius 1.6, knights slightly smaller, stars by goals conceded.
- Plaque "MATCH n / cup name / FIRST TO 2" before kickoff (clock waits), READY? above the countdown, tip ribbon on the first kickoff.
- Camera closer in portrait (17 x 21 units) and landscape.
- Stone castle end walls, brick gate pillars and lintel, dark opening, end-stands removed.
- HUD: match badge, team shields, green score plate, grey clock pill, round pause; fixed visible joystick at bottom-left (touches on it use its centre, touches elsewhere still float); DASH button orange when ready, grey with a teal recharge ring when cooling; green GOAL ribbon.
- Tests updated (first to 2); `npm test`: 14 pass. Easy bot wins 9/12.

## Checked
Headless Chrome (SwiftShader) 390x780 and 844x390: plaque, kickoff, real touch on joystick (input x/z updated), forced goal shows ribbon and score 1-0, no console errors.

## Still different
Characters are chunky code-drawn knights, not the video's thin armoured figures; no dust cloud inside the gate; no camera pan toward the scoring gate; the pitch has crowd stands and torches the video lacks; hazards (trapdoors, mud, boulders) exist from round 3 on but were not in the video's match 1. Sound not heard by a person; no real device test.

## Phase 2B (Batch C, rollout 2.3) — 60 s matches + overtime become first-to-2, untimed
Matches ran 60 s, then a leader won or a tie went to a 30 s overtime — a clock and a
sudden-death, both against the house rules. Now MATCH_TIME/OVERTIME, the `timeLeft`
and `overtime` fields and the overtime event are deleted from sim.js: a match ends
only when a team reaches GOAL_LIMIT (2), exactly the "first to two" the game always
advertised. The HUD timer (with its red low-time state) is replaced by a static
"First to 2 ⚽" label beside the score; the overtime banner/strings are removed.
Tests: the ends-by-time test is replaced by a pinned-barrel test — 400 s with no
goals leaves the match running with no clock fields present; the existing
first-to-two test still passes. `npm test` 14/14, build ok. Playtest
(phase2b_verify.mjs): Play starts an untimed match whose HUD shows the goal label;
a second goal ends it 2–0. Zero page errors. Gap: a completely passive child can
stall a match (both AI teams keep playing, so goals do happen in practice); the
menu demo match now also runs to 2 goals before resetting, which takes longer —
acceptable, it is a demo.

---

## Phase 2D — Egypt anchor: «فرسان القلعة / Citadel Knights» (2026-11-27)

**What was wrong:** a generic medieval "Barrel Knights" — nine cups named
for nowhere (Meadow, Swamp, Dragon…), no Egypt anywhere.

**What changed (names only — ids, skills, hazards, looks, saves untouched):**
- Title: «فرسان البرميل / Barrel Knights» → **«فرسان القلعة / Citadel
  Knights»** — the Mamluk page boys now play at the Cairo Citadel festival.
- The giant barrel is framed as a **giant water jar (زير)** in every
  player-facing string (how-to, tips); the rolling model is unchanged.
- All nine cups re-placed at the Citadel: Yard → Garden → Secret Doors →
  Walls → Moat → Tower → Storm → Lantern Cup → Citadel Grand Final. The
  two night-look cups are the lantern-lit ones, as the plan asked.

**Kind rules:** converted in Phase 2B (first-to-2, untimed) — re-verified
in the click-flow HUD ("First to 2 ⚽", no clock anywhere).

**Tested:** `npm test` 15/15 (+1 anchor test: nine Citadel cups, ids
unchanged, final flag intact); build green; real click-flow verify PASS —
menu title, match 1 HUD showing "Citadel Yard Cup", frames at 3 sizes,
0 page errors.

**Not done (Batch F):** the parade mode and a hero_tower-style citadel
backdrop ring are not built; the festival lives in the cup names and the
existing day/dusk/night/royal looks. Not tested on a real device.
