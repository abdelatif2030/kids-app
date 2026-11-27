# REVIEW — rhino_summit («كركوز والغيوم» / Karkoz in the Clouds)

Date: 2026-11-27 · Branch: ai/moss-work · Source package: `game_src/course_race` (shared with alien_sky; rhino skin)
Fix class: Priority 1 — broken (dead content). Rollout plan item 1.1.

## What was wrong

Same shared-chassis progression cap as alien_sky — see
`docs/REVIEW_alien_sky.md` for the full chain. In short: rounds 4–6 existed,
were rendered in the menu, and could never be unlocked, because
`_finish()` capped `unlocked` at 3, treated round 3 as the final, the sim's
`won` fired at round index 2, and `normalizeSave` dropped stars for rounds
4–6. The audit noted the cap "hits rhino harder: the trophy/win state fires
at round 3, mid-campaign." Rounds 3–6 also all demanded 1st place
(`qualify: 1`) to advance.

## What changed and why

Identical fix in the shared package (one fix, both games — as the audit
predicted): final/unlock/won now derive from `ROUNDS.length`; the stars loop
covers all 6 rounds; the qualify curve is 4/3/2/2/2/1 so only the true final
(round 6, «قمة العمالقة») demands the win; stale "three rounds" comments
corrected; a no-op `setTimeout` in the sim removed. Rhino-specific behaviour
(no jetpack, gates/sweepers/hammers/pads) is untouched.

## What was actually tested

- `npm test` (game_src/course_race): **6/6 pass** — the new campaign
  regression test plays rhino rounds 1–6 end to end through the unlock rule
  (robot: 1st place in 20/25/28/35/37/42 s, qualified everywhere, `won` only
  at round 6), and the save round-trip test proves rounds 4–6 stars persist.
- `npm run build`: rhino_summit/game.js rebuilt (544,871 B; shared-engine
  conversion is rollout Phase 3).
- **Real click-flow** (Chromium harness): menu shows all 6 round cards
  («سحب الصباح» … «قمة العمالقة»), real mouse click on round 1 starts the
  race, **zero page errors**.
- **Unlock chain through the real shell `_finish`**: qualifying round 3 →
  unlocked 3 → **4** + stars {"3": 3} + "Next round" button offered;
  winning round 6 → `wins` 0 → **1**, win title, no Next button.
- **Frames eyeballed** at 844×390, 1024×768, 1366×1024 (menu) and 1024×768
  (gameplay, countdown): HUD pills, progress bar and the big jump button all
  on-screen; nothing covered or cut.
- **Performance**: **130 draw calls** (target ≤150 ✓), **~15k triangles**
  (ceiling 150k ✓); rAF fps at 4× CPU throttling in headless SwiftShader:
  **2.7 fps** — a software-GL environment artifact (see the alien_sky review
  for why this is not a device number); sim cost is negligible (shared
  12-race campaign ≈2.2 s Node time).

## Not verified

- No real-device or iOS WebView test (environment limitation).
- Owner voice clips for rhino_summit are complete (38/38, batch 2) but
  in-WebView audibility was not re-verified in this fix.
- Rhino's missing signature mechanic (the Batch D head-charge that would
  differentiate it from alien_sky's jetpack) is a later phase, not this fix.

## Batch D3 — the head-charge and the Egypt ladder (2026-11-27)
- **New mechanic, the rhino's alone: the HEAD-CHARGE.** A metered 1.3 s burst (×1.45 speed) on its own
  big «انطلق / CHARGE» button (meter % shown on the button; J/Shift works too). Gates now have three
  outcomes: **charged smash** → boost 1.6 s + celebration; **clean dive** through the frame (airborne)
  → passes free; **walking into one on the ground** → it still breaks (never a hard block) but bumps
  him back 2.5 m with a short stun. Bounce pads refill the meter to full; it also refills over 3.5 s.
  The rhino visibly leans head-down while charging. `Race.charge()` returns false for the alien.
- **Its own ladder:** «كركوز وقمم مصر / Karkoz Climbs Egypt» — سفوح الجلالة → جبال البحر الأحمر →
  وادي فيران → سانت كاترين → قمة موسى → قمة كاترين الكبرى, and the end card now keeps a **summit
  journal** line (📔 سجل القمم: وصلت …) naming the peak reached.
- Tests: course_race **7/7** (new: charge gates/pads/alien-exclusion). Harness 5/5, zero errors,
  frames eyeballed — the CHARGE button shows the live meter.
