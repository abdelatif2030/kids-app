# Review: «مخبز اليقطين» Pumpkin Pie Maker — Phase 2B (Batch B1)

## What was reviewed
Audit card (puzzle_girls_learn.md) + GAMES_MASTER_PLAN item 2.15: the game shipped 4
painted panoramas and a win illustration (assets/games/pumpkin_pie/art/) that no code
loaded. The bakery yard floated on a flat autumn colour.

## Changed (game_src/pumpkin_pie)
- `src/main.js`: new `_setPano(n)` / `_followPano()` / `_panoForProgress()`: a mirrored
  panorama ring (radius 42, `fog:false`, renderOrder −10) around the yard. The backdrop
  grows with the bakery: pano index = 1 + floor(expansions opened / 3), capped at 4 —
  a new painted surrounding for every three upgrade pads opened (10 pads total).
  Set in `showMenu()` and refreshed on every pad `unlock` event.
- The completion card now heads with the owner's `art/win.webp`.
- `src/ui.js`: sizing CSS for the win art.

## Tests & playtest evidence
- New regression test: pano1..4.webp and win.webp exist. `npm test` 8/8 pass;
  `npm run build` ok.
- Real click-flow harness (phase2b_verify.mjs): menu backdrop ring at pano1 and visible;
  Play clicked into the bakery; with 3 expansions opened the backdrop advanced to
  pano2. Zero page errors.
- Frames at 844×390 / 1024×768 / 1366×1024 in ~/workspace/projects/audit/shots_phase2b/.

## Honest gaps / questions
- The 4 panoramas are European-style autumn bakery scenes; they are wired as-is
  (the owner's art, never deleted). Replacing them with Egyptian hara/bakery art is a
  Batch E reskin question — logged in docs/AI_WORK_LOG_P2B.md.
- The completion card's fixed ⭐⭐⭐ is rollout item 2.11 (fixed-stars sweep), which is
  outside this coordinator's Batch C list — untouched here, noted in the work log.

## Batch D4 — earned stars + pair separation (2026-11-27)
- The completion card's **fixed ⭐⭐⭐ is gone**: stars are now `starsFor(served)` — 1★ for finishing
  the bakery, 2★ at 35 customers served, 3★ at 80. Stars only for real achievement, per the house rule.
- Pair separation vs space_store is now explicit: pumpkin_pie is the **production chain** (grow →
  bake → serve, with waiter/farmer helpers), space_store is **logistics** (baskets/racks/queues/
  delivery rockets) — and space_store was renamed «متجر النيل الفضائي» with station wings.
- Tests: pumpkin_pie **9/9** (new starsFor thresholds). Harness 4/4, zero errors, frames eyeballed.

---

## Phase 2D — Egypt anchor: «مخبز الحارة / Hara Bakery» (2026-11-27)

**What changed (name only):** the title «مخبز اليقطين / Pumpkin Pie
Maker» → **«مخبز الحارة / Hara Bakery»** — the little bakery now
explicitly sits in an Egyptian hara, with the pumpkin staying the hero
crop exactly as the plan keeps it, and Nour/Adam (the app's own kids)
already the chefs. Stars were converted to earned-by-serving in Phase
2C and are re-pinned by a test here.

**Tested:** `npm test` 10/10 (+1 anchor test); build green; real
click-flow verify PASS — menu shows «مخبز الحارة» and the chef pick,
Play reaches the bakery floor with its first hint, frames at 3 sizes,
0 page errors.

**Not done:** the Batch F expansion set (kunafa tray, qatayef pan, Eid
kahk oven, a second oven line) is not built; the open owner question
from Phase 2C stands — the shipped European street panoramas wired in
2B vs an Egyptian hara reskin of the backdrop. Not tested on a real
device.
