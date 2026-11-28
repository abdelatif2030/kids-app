
---

## Phase 2D — Egypt anchor + Batch C fix: «دبابيس الحلواني / Sweet-Maker's Pins» (2026-11-27)

**What was wrong:** (1) 3 stars required solving in ≤ par moves with
zero losses — move-efficiency grading, the item Batch C listed for this
game; (2) a generic "Pull the Pin" title for a game whose own how-to
already talks about sweets dropping into a jar.

**What changed:**
- **Par grading removed.** Stars are now: solved (1★) + no balls lost
  (1★) + the **sparkle star** for landing every single ball in the jar
  (1★). `par` stays in the level data, unused for grading. A guard test
  pins the formula.
- Title: «اسحب الدبوس / Pull the Pin» → **«دبابيس الحلواني /
  Sweet-Maker's Pins»** — the pins now belong to a sweet-maker filling
  his jar, which is what the game already showed.
- Voice note: the audit's missing clip (ar/charge_1) **has arrived**
  with the big voice install — checked on disk, present. No new lines
  needed.

**Tested:** `npm test` 7/7 (+1: star-rule guard + title anchor; the
suite's solver still completes all 12 levels). Build green. Real
click-flow verify PASS — menu title, level-1 board with the jar
counter (🍬 0/8), frames at 3 sizes, 0 page errors.

**Not done (Batch F):** sweet-shop dressing per chapter (the jar
becomes a kunafa tray, a kahk box…) is not built. Not tested on a real
device.
