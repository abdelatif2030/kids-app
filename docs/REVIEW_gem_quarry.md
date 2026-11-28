
---

## Phase 2D — Egypt anchor + Batch C fix: «محاجر أسوان / Aswan Quarries» (2026-11-27)

**What was wrong:** (1) stars were graded by `overflowT` — how long the
gem pile sat full — an efficiency timer by another name, which Batch C
listed for conversion; (2) a generic "Gemlode Quarry" with levels like
Rush Hour and Quarry King.

**What changed:**
- **Efficiency grading removed.** Stars now come from **collection**:
  gems shipped + waiting in the pile + loaded on trucks, beyond the
  goal (+6 → 2★, +15 → 3★). The overflow mechanic itself stays (a full
  pile pauses digging and warns) — it just never grades. The old
  "stars follow overflow time" test was rewritten to pin the new rule,
  including that 600 s of overflow changes nothing.
- Title: «محجر الجواهر / Gemlode Quarry» → **«محاجر أسوان / Aswan
  Quarries»** — the granite quarries that built the temples.
- The ten levels are quarry sites now: Quarry Gate → Pink Granite Hill
  → Granite Crates → Nile Road → Quarry Helper → Polish Shop → **Obelisk
  Quarry** (Aswan's famous unfinished obelisk) → The Great Quarry → Gem
  Flood → Master of Aswan Quarries. ids/goals/prices/saves unchanged.

**Tested:** `npm test` 9/9 (star test rewritten +1 anchor test); build
green; real click-flow verify PASS — level select shows the new site
names, Play reaches the quarry floor HUD, frames at 3 sizes, 0 page
errors.

**Not done (Batch F):** a granite-block "build a temple" meta-goal
across levels is not built. Not tested on a real device.

---

## Phase 2G — Second quarry (Tura) + museum book (2026-11-27)

**What was missing (Batch F remainder):** one quarry only — the game ended at
Aswan level 10 — and no museum for the stones the child had shipped.

**Second quarry — Tura (append-only):**
- 5 new levels (ids 11–15) appended after Aswan; ids 1–10 frozen (pinned by a
  freeze test on id/goal/price/rate/trip/coins/name). Tura is the real
  limestone quarry south of Cairo whose white stone cased the Giza pyramids:
  Tura Gate → White Limestone → Pyramid Casing → Great Tura Quarry → Master
  of Tura. Goals/prices/trips rise gently (360→650 crates), starting crews
  grow with them, existing mechanics only (no new upgrade kinds).
- Distinct dressing, code-drawn only: pale cream sky, white limestone hills
  and ground, and the purple crystals become pale limestone blocks; map
  buttons for Tura are gold-tinted. No owner art touched.
- Old saves migrate: a finished Aswan save (stars on 10) already has
  `unlocked = 11`, so Tura opens with no progress lost (pinned by test).

**Museum book (tomb_puzzle Phase 2F pattern):**
- Menu-reachable «🏛️ كتاب المتحف / MUSEUM BOOK». `museumEntries(save)` in
  sim.js derives one exhibit per quarry site purely from the existing save's
  stars — no new persistence. A finished site shows icon, name ar+en, its
  stars and one true fact ar+en (Aswan granite, the unfinished obelisk, Nile
  stone boats, Tura's pyramid casing…); an unfinished site is a locked
  silhouette with a finish-it hint. Read-only.

**Playtime before → after (method):** the test-suite robot (tap + balanced
buys, sim seconds) summed over the campaign, ×1.75 labelled child-pace
factor (slower tapping/buying + watching trucks). Before: 973 s robot ≈
**28 min child-model**. After: 1,524 s robot (Tura adds 551 s: 106/117/113/
115/100 s) ≈ **45 min child-model**. No padding: Tura levels run about as
long as late Aswan levels, not longer.

**Tested:** `npm test` 14/14 (was 9/9) — robot completes all 15 levels
(normal + easy), freeze test, Tura structure/curve/mechanics-only,
scripted first→last campaign proof via recordWin chain, museum
lock/unlock derivation, old-save migration. Build green, game.js 129.8 KB
(was ~119 KB, ≤200 KB). `phase2g_verify.mjs gem_quarry` → PASS, 0 page
errors, 3 sizes. Seeded captures (`phase2g_gem_seed.mjs`): fresh museum all
locked; seeded museum (Aswan done + Tura 11) shows facts/stars with Tura
12–15 locked; map shows all 15 sites with gold Tura buttons; level 11
entered by real map click (450 coins, goal 360 HUD live), 0 errors.

**Honest gaps:** in the standalone browser captures the shared menu poster
art forms the backdrop, so the Tura canvas palette is verified in code and
by the chapter plumbing rather than being visible in those frames; no
real-device/WebView run; Tura levels proven by the robot, not hand-played
end-to-end. No new spoken lines — museum facts are display-only, so the
add-to-instinct table is empty.
