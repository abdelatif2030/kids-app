# Review: carnival_race against the owner's brief #1

Video: the recording path in docs/ORIGINAL_BRIEFS.md (brief 1) does not exist on this machine, so the video could not be compared frame by frame. This review uses the prompt text only.

## Brief checklist (prompt text vs code/play)
- Cute animals in glowing bumper cars, carnival at sunset: present (screenshots show animals, glow, sunset sky, Ferris wheels, tents).
- Beat five rivals, finish first: 6 cars, position HUD ("4/6"), podium.
- Hold to accelerate, release to slow, drag to steer: checked with real pointer events in headless Chrome.
- Drift boosts, spins in jumps: implemented (race.js, docs/CARNIVAL_RACE.md).
- Loops and tubes: loop-the-loop on track 3 and tunnels on tracks 2-3 in data.js.
- Swinging boats, giant hammers, spinning teacups: all three hazards placed on tracks 2-3.
- Rocket boost, shield, bumper blast items: present (item button visible in HUD).
- Tickets to upgrade the car and unlock racers: garage with 3 upgrades and 5 extra animals.
- Increasingly hard tracks: 3 tracks, locked until top-3.

## Result
No code differences found, so nothing was changed and the bundle was not rebuilt. `npm test`: 7/7 pass. Headless Chrome run (menu, start race, hold + steer for 14 s): no console errors or exceptions.

## Not verified / still open
- Video not available: camera angle, HUD layout and feel could not be matched against the original.
- One screenshot out of ~20 was blank (white) apart from the HUD; not reproduced in a second 14-frame run, probably a software-GL (swiftshader) frame. Worth a look on a real device.
- Loops, tunnels and the other tracks were not driven to in this session (tracks 2-3 are locked until earlier ones are finished); not played on a real phone, sound not listened to.

---

## Phase 2D — Egypt anchor: «عربيات ملاهي المولد / Moulid Funfair Cars» (2026-11-27)

**What changed (name only):** the title «عربيات الملاهي / Funfair Cars»
→ **«عربيات ملاهي المولد / Moulid Funfair Cars»** — the funfair is a
moulid fair now. The tracks were already Egyptian in the owner's own
naming (Nile Funfair, Alexandria Funfair…) and are untouched, as are
the garage, racers and saves.

**Tested:** `npm test` 10/10 (+1 anchor test); build green; click-flow:
menu title and track list via the harness; gameplay confirmed with a
single-click check on the Nile Funfair track — lap HUD with the animal
racers and the drag hint, 0 page errors; menu frames at 3 sizes.

**Not done (Batch F):** moulid dressing (lantern strings, a tahtib
arch at the gate) is not built. Not tested on a real device.

---

## Phase 2F — three new authored tracks: Cairo Moulid, Luxor, Matrouh (2026-11-27)

**Tracks 6 → 9.** Three genuinely new authored tracks appended to `TRACKS`
in `src/data.js` (existing ids/order untouched — saves key progress by id
and the unlock chain is by index, so nothing already earned moves):

| # | id | name | diff | layout identity | lap (robot) | race (robot, 2 laps) |
|---|----|------|------|-----------------|------|------|
| 7 | `moulid` | ملاهي مولد القاهرة / Cairo Moulid Fair | 2 | pinched two-lobe figure-eight (east crowd lobe → waist → west lobe), width 12 | 630 m | 66.0 s |
| 8 | `luxor` | ملاهي الأقصر / Luxor Fair | 3 | long riverside loop, two straights + temple-end sweepers, gentle climb, width 13 | 799 m | 82.6 s |
| 9 | `matrouh` | ملاهي شاطئ مطروح / Matrouh Beach Fair | 4 | widest flowing beach loop, big sweepers, width 14 | 953 m | 88.1 s |

Only engine-supported features are used (teacups / hammer / boat hazards,
ramps, tunnels, balloon arches, item boxes, ticket lines) — no new hazard
types. Rival base speed ladder in `race.js` extended by one rung
(difficulty 4 → 0.985) so the ladder stays monotonic; the star rule
(place-based), ticket economy and kind rules are unchanged.

**Unlock chain & saves:** `unlocked` is a count clamped to `TRACK_COUNT`
in `normalizeSave`, so it extends automatically. A finished 6-track save
migrates with tickets/best/owned intact and tracks 7–9 locked until the
existing rule (podium finish, or any finish in easy mode) earns them —
covered by tests, including the full 1→9 chain walk.

**Track-select UI:** new emoji/gradient entries in `ui.js`
(🎈 moulid, 🏛️ luxor, 🏖️ matrouh). With 9 cards the skinned menu
overflowed at all three test sizes (third row under the garage button);
`assets/games/carnival_race/skin.css` now has a compact rule that only
applies when the list holds more than six cards (`:has(> :nth-child(7))`):
smaller cards, wider list area, less top padding. Eyeballed at
844×390 / 1024×768 / 1366×1024 — all 9 cards fully visible, garage button
clear. The six-card look is untouched if the count ever drops back.

**Backdrop:** `world.js` loads `art/pano<index+1>.webp`; only pano1–6
exist. `main.js` now passes `pano: index % 6`, so tracks 7–9 reuse
pano1/2/3 through the existing mechanism (before, they would have
requested missing files and silently lost the backdrop ring). No image
files added or modified.

**Playtime (method: the test-suite robot — AI-steered player, seed 3,
2 laps per race, summed over all tracks):** before 450.6 s ≈ 7.5 min;
after 687.3 s ≈ 11.5 min for one clean pass. At child pace (×~1.5 for
released pedals and wandering lines) one pass ≈ 17 min. The full
progression — unlocking all 9 through the chain with natural replays,
plus garage goals (racers 150–650 tickets, ~65–90 tickets per race) —
lands around 45–70 min of play; the plan's ≈60–75 min figure is reached
only counting full garage completion, not a single pass. Stated plainly:
the long tail grew by ~53% of race time, not by 4–5×.

**Tests:** `npm test` 16/16 (was 10). The per-track robot test now runs
all 9 tracks (finishes, places 1..6, sensible times); the hazard
pass-through test covers every new ride; new tests pin TRACK_COUNT = 9,
the original six tracks' identity/order, the full unlock chain, and
old-save migration. Also repaired `test/sim.test.js` (it had missing
imports and could not run at all; `npm test` now runs it — the Phase 2D
anchor test passes).

**Build/verify:** `npm run build` → game.js 233,995 bytes (was 231,667;
+2.3 KB of track data — still above the ≤200 KB target, a pre-existing
overage from Phase 2A, not materially grown). `phase2f_verify.mjs
carnival_race` → PASS, 0 page errors; menu frames eyeballed at the three
sizes above; a seeded-save capture (unlocked 9) shows the Matrouh start
arch, lap HUD and reused pano backdrop in-race.

**Not tested:** the moulid waist and Luxor/Matrouh at child steering on a
real device; sound not listened to; the compact menu rule relies on CSS
`:has()` (Chromium/WebView 105+; older WebViews fall back to the
overflowing six-card sizing). No new spoken lines were added, so nothing
is owed to Instinct for this batch.

---

## Certification Sweep A (2026-11-27)

### Track inventory (9 tracks, 2 laps each)

| # | Track (ar / en) | Diff | Width | Lap | Layout identity | Features |
|---|---|---|---|---|---|---|
| 1 | ملاهي النيل / Nile Funfair (pier) | 0 | 13 | 695 m | Rounded pier loop, gentle heights | teacups ×2, ramp ×1, arch ×1, no tunnel |
| 2 | ملاهي الإسكندرية / Alexandria Pier (lanterns) | 1 | 12 | 665 m | West-side loop with a tunnel straight | hammer ×2, teacups ×1, ramps ×2, tunnel ×1 |
| 3 | ليلة العيد / Eid Night (stars) | 2 | 12 | 755 m | Loop-the-loop + high back section | boat ×2, hammer ×1, teacups ×1, ramps ×2, tunnels ×2 |
| 4 | ملاهي باريس / Paris Fair (pier2) | 1 | 13 | ~695 m→varied | Was an exact mirror of #1 — now authored variant (Sweep A) | teacups ×2, hammer ×1, ramps ×2, tunnel ×1 (new) |
| 5 | ملاهي السندباد / Sinbad Fair (lanterns2) | 2 | 12 | ~665 m→varied | Was an exact mirror of #2 — now authored variant (Sweep A) | teacups ×2, hammer ×1, boat ×1, ramps ×2, tunnel at the opening straight |
| 6 | ملاهي الثلج / Snow Fair (stars2) | 3 | 12 | ~755 m→varied | Was an exact mirror of #3 — loop kept, post-loop re-authored (Sweep A) | hazards ×5 re-placed, ramp ×1, tunnels re-placed, icy sky |
| 7 | ملاهي مولد القاهرة / Cairo Moulid Fair (moulid) | 2 | 12 | 630 m | Pinched two-lobe figure-eight (no self-crossing) | all 3 hazard types, ramps ×2, tunnel ×1, arches ×2 |
| 8 | ملاهي الأقصر / Luxor Fair (luxor) | 3 | 13 | 799 m | Long riverside loop, temple-end sweepers, gentle climb | hazards ×5, ramps ×3, tunnels ×2, arches ×2 |
| 9 | ملاهي شاطئ مطروح / Matrouh Beach Fair (matrouh) | 4 | 14 | 953 m | Widest flowing beach loop, big sweepers | hazards ×5, ramps ×3, tunnel ×1, arches ×2 |

Kind rules: every finish earns tickets (15–50 by place) and 1–3 stars by place;
nothing is ever taken away; the next track opens on a podium finish (any finish in
easy mode). No timers, no lives, no game-over.

### Cycle 1 — baseline audit (pre-fix)
- `npm test` 16/16 green; robot finishes all 9 tracks; hazard pass-through and
  old-save migration pinned.
- ❌ **Tracks 4–6 were exact left-right mirrors of tracks 1–3** (`mirrorTrack` in
  `src/data.js`, +1 hazard each) — near-identical layout/design by construction,
  which the owner's protocol counts as the same track twice.
- ❌ **One shared sunset sky for all 9 tracks**, and tracks 7–9 reuse pano1/2/3
  (tracks 1–3's backdrops) with no variation — several tracks read as the same
  place (same `makeSky()` gradient + same pano image).
- Audio: VoiceCoach defaults verified (9 s per-event / 4 s global); events in
  `main.js _onEvent` match race events (go/nitro/overtake/bump/trick/pickup/
  lap/win/lose/count). No new lines needed.
- Note: tent placement in `world.js` uses `Math.random()`, so tent positions
  differ per load — scenery is alive but not track-authored; the Ferris wheels
  and rides are placed per track bounds.

### Fix (commit dcfe13a8)
- `src/data.js`: `varyTrack()` re-authors tracks 4–6 — 4 corners per track moved
  by metres (point counts unchanged, so pinned identities/saves hold), ramps/
  tunnels/arches/items re-placed, hazard spots/types moved (counts unchanged);
  pier2 gains a tunnel its source never had; stars2 keeps its loop (indices
  0–10 untouched) and re-authors the post-loop section.
- `src/world.js` + `src/main.js`: `TRACK_VARIANTS[9]` — per-track sky gradient,
  fog colour and pano tint (code-drawn only, zero new files); the World applies
  the variant to the sky-dome uniforms, scene fog/background and the pano ring
  tint. Reused panos (tracks 7–9) now read as different places from tracks 1–3.
- `test/race.test.js`: two new regression tests — tracks 4–6 are not mirrors
  (≥3 corners off-mirror, lap length differs >0.5%, features differ) and all 9
  track variants are distinct with 7–9 differing from their pano donors.
  `npm test` 18/18 (robot re-verified on the re-authored geometry; hazard
  pass-through still clean).
- Build: game.js 236,453 B (was 233,995; data + variant table only, no new
  per-frame work — variants are applied once at world build).

### Cycles 2–3 + final review

**Cycle 2 — ✅ CLEAN (`RESULT allOk=true errors=0`, log `~/workspace/audit/cert_a/carnival_race/cycle2/log.txt`).**
Full real-click pass (seeded full save → menu cards 9 total / 0 locked → garage → every
track card): all 9 tracks entered and driven start→mid→late with measured progression
(mid prog≈105–136 m → late prog≈267–299 m on every track) using hold-drag throttle +
ArrowUp/ArrowRight. Per-track sky variants verified live in race state — the world fog the
engine actually rendered: T1 `8a3f8f` (purple dusk), T2 `9a4a8f` (pink), T3 `3a3a8f` (deep
blue night), T4 `a85a7a` (Paris rose), T5 `2a7a8a` (Sinbad teal), T6 `8ab0d8` (Snow pale),
T7 `a83a5a` (Moulid crimson), T8 `c28a4a` (Luxor gold), T9 `3a9ac2` (Matrouh azure) — nine
distinct skies in the running game, not just in data. Frames eyeballed: T1 Nile sunset with
feluccas, T2 Alexandria park pano, T4 Paris pano under its rose tint, T6 Snow Fair winter
pano with the loop visible ahead — backgrounds clearly different track to track; HUD (lap
pill, progress rail, place badge, mystery button, ticket counter) fully on-screen at
844×390 and in portrait 390×844. Fresh save ✅ (9 tracks, 8 locked). Old pre-2F save ✅
(locked 3, tickets 321, unlocked 6, selected 'cat' — migrates cleanly). Sizes: 1024×768,
1366×1024 (T1+T9 in race phase) and portrait 390×844 (T1 in race phase). Provenance note:
the cycle ran in two sittings (tracks 1–4, then a `[segments]` run for tracks 5–9 + saves +
sizes) because the shared VM restarted mid-run; all verdicts are in the same log.
<!-- CYCLE3/FINAL: appended when those runs complete -->

### Performance
<!-- EVIDENCE: filled from ~/workspace/audit/cert_a/perf_carnival.json -->

### Add to instinct
- None. No new spoken lines were added; all events reuse the existing clips.

### غير مؤكد (unconfirmed)
- Real device / iPhone WebView untested (headless Chromium + SwiftShader only).
- Sound not heard by a human ear; voice/event matching verified by code + clip
  inventory, not by listening.
- The re-authored corners of tracks 4–6 were driven by the test robot and the
  browser harness, not by a child on a real device.
- The compact 9-card menu rule relies on CSS `:has()` (Chromium/WebView 105+);
  older WebViews fall back to the pre-2F sizing.
- Browser frame rates on this shared VM are environment-bound (see Performance);
  real-device fps unmeasured.
