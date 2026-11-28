
---

## Phase 2D — Egypt anchor: «عين كليوباترا / Cleopatra's Spring» (2026-11-27)

**What changed (name only):** the title «ينابيع القرية / Hot Spring
Village» → **«عين كليوباترا / Cleopatra's Spring»** — the village
spring is now Siwa's famous spring, where legend says Cleopatra
bathed. The ginger-slice warming loop, guests, lanterns and saves are
untouched.

**Tested:** `npm test` 12/12 (+1 anchor test); build green; click-flow:
menu title via the harness; gameplay confirmed with a single-click
check — spring HUD with guest/lantern counters and the first frozen
guest arriving, 0 page errors; menu frames at 3 sizes.

**Not done (Batch F):** a Siwa palm-grove dressing pass and a second
spring (Ain Sokhna) are not built. Not tested on a real device.

## Phase 2G — Second site: «بير سيجم / Bir Sigam» (2026-11-27)

**What changed:** the game is now site-parameterised (`SITES` in
`sim.js`), following the space_store Moon-chapter pattern. Site 1 is
Cleopatra's Spring exactly as before — `SITES.cleopatra` references the
original exported constants, and a freeze test pins the upgrade
ids/order/costs/spots, `LANTERN_AT`, mill spots and teahouse. Site 2 is
**Bir Sigam**, Bahariya's famous hot spring, appended only: the same
layout mirrored left↔right on the same field, the same eight upgrade
effects in the same order with costs continuing to rise
(15/22/34/48/66/90/115/140 vs 12…115), a gently rising lantern curve
(10 lanterns at 3…66 warmed guests instead of 2…56), slightly busier
guest arrivals, and more bears among the guests. No new mechanics, no
timers, no lives — progress is completion/collection only, as before.

**Unlock & saves:** Bir Sigam unlocks once Cleopatra's Spring has been
warmed once. `normalizeSave` gained per-site fields
(`finishedCleopatra`, `finishedBir`, `bestTimeBir`, `birUnlocked`,
`site`) with safe defaults: old saves migrate with all past finishes
counted as Cleopatra's (the only site that existed), so Bir Sigam is
newly available and site 1 is never "incomplete again"; a save claiming
Bir Sigam before any Cleopatra finish is forced back to site 1. The
shared `finished` counter is kept as the sum of both sites. The menu
shows both sites (Bir with 🔒 + a reason line while locked); finishing
Cleopatra for the first time offers a «لبير سيجم» button on the result
card. Per-site best times are kept separately.

**Look (code-drawn only, no art files touched):** Bir Sigam is a desert
site — warm sand ground and paths, sandstone plateau instead of snowy
peaks (no snow caps), palm trees with date clusters instead of pines,
sandstone rocks, golden dust motes drifting up instead of snowfall, a
warm dusk tint, and the spring water runs mineral green instead of
turquoise. Cleopatra's Spring rendering is unchanged.

**Playtime (honest, robot method):** the existing robot-caretaker test
driver plays each site to completion in the sim (near-optimal, no
hesitation); child playtime is modelled at ≈3× robot time (a young
child walks manually, backtracks, watches guests thaw), with ≈2.2× as
the fast end. Before: Cleopatra only, robot 258 s → ≈13 min. After:
Cleopatra robot 258 s (identical) + Bir Sigam robot 295 s = 553 s
robot → **≈28 min total at ×3 (≈20 min at ×2.2)**, just under the
master plan's ≈30 min for the two sites — stated plainly, not padded.
Both sites stay open for free play after completion.

**Tests:** `npm test` 16/16 (was 12/12): +4 — (1) freeze of Cleopatra
content; (2) Bir append-only shape (mirrored spots, ascending costs,
rising lantern curve, Bir village driven by the Bir curve); (3) old-save
migration / lock coercion / round-trip; (4) scripted first→last
campaign proof (robot warms Cleopatra → save migrates → Bir unlocks →
robot warms Bir Sigam → round-trip keeps both finishes).

**Build/verify:** `npm run build` green, game.js 133.8 KB (was 128 KB,
≤200 KB respected). `node phase2g_verify.mjs hot_spring` → PASS, 0 page
errors, frames eyeballed at 844×390 / 1024×768 / 1366×1024. Seeded
capture (old-style rich save → menu → Bir Sigam button → Play): menu
shows Bir unlocked, in-game `site === 'bir'`, desert dressing and
mirrored mill/teahouse confirmed at all 3 sizes, 0 page errors. Shots:
`~/workspace/projects/audit/shots_phase2g/hot_spring_bir_*.png` and
`hot_spring_menu_unlocked_1024x768.png`.

**Not done / not tested:** no real-device run; the Bir result-card
«to Bir» flow is covered by sim/save tests and the seeded menu capture,
not by a full in-browser robot playthrough of both sites back to back.
No new voice lines were recorded; two optional Bir lines are listed in
the Phase 2G log fragment's Add-to-instinct table.
