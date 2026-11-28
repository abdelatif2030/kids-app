
---

## Phase 2D — Egypt anchor + Batch C fix: «فرفور بحيرة البرلس / Farfour of Lake Burullus» (2026-11-27)

**What was wrong:** (1) being caught cost a heart, three catches ended
the run with a "Gulped!" card, and stars were graded by hearts lost —
the lives mechanic Batch C listed for this game; (2) a generic "Hungry
Frog" on generic swamps.

**What changed:**
- **Hearts are now splashes.** Being caught costs a splash: the frog
  slips free with the same knockback and brief invulnerability, the
  splash is counted for the result card, and **a catch can never end
  the run** — the 'lost' state is unreachable from `_hurt`. The HUD
  heart pips became a 💦 splash counter. Stars no longer grade
  mistakes: they reward the feast (eaten ≥ 8 → +1★, ≥ 16 → +1★; the
  suite's robot eats 20–30 per level and earns 2★, a bigger feast
  earns 3). The old hearts tests were rewritten to pin the new rule,
  including an idle frog that gets splashed 36 times and is never lost.
- Title: «لعبة الضفدع الجائع / Hungry Frog» → **«فرفور بحيرة البرلس /
  Farfour of Lake Burullus»**; the six ponds are all Lake Burullus now
  (Burullus Dawn → Lily Marsh → Sunset → Moon Pond → Emerald Fen →
  Lake Burullus). ids/thresholds/bosses/saves unchanged.
- Quirk found and left alone: the frog's tongue is automatic, so a
  completely idle frog can still grow and even win — the owner's
  design, noted here rather than changed.

**Tested:** `npm test` 7/7 (three mechanic tests rewritten +1 anchor
test); build green; real click-flow verify PASS — menu title, pond HUD
with the growth goal and drops counter (no heart pips), frames at
3 sizes, 0 page errors.

**Not done (Batch F):** Burullus dressing (felucca silhouettes, reed
beds) and a seventh pond are not built. The now-unreachable "gulped"
card code remains in main.js as dead code — flagged here rather than
deleted mid-phase. Not tested on a real device.
