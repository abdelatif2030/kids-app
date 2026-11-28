
---

## Phase 2D — Egypt anchor + Batch C fix: «فيزو في مصر / Fizzo in Egypt» (2026-11-27)

**What was wrong:** (1) one-hit death — a single unshielded bump ended
the run on the spot; (2) a generic soda hero running generic districts.

**What changed:**
- **Stumble + hearts.** Fizzo now runs with 3 hearts (new HUD pill):
  an unshielded hit costs one heart, plays a stumble (crash sound,
  bump voice, 💪 flash, 1.5s of invincibility) and the run continues;
  only the third hit ends the run. Star-smash and shield behaviour are
  unchanged. The old "a crash ends the run" test was rewritten to pin
  the new rule (1 hit → 2 hearts and running; 3 hits → over).
- Title «فيزو الشاطر / Fizzo the Brave» → **«فيزو في مصر / Fizzo in
  Egypt»**; the six runs are Cairo Streets → Downtown Cairo → Khan
  el-Khalili → Helwan Workshops → Corniche Road → Fizzy Bonus
  (environment ids, lengths and saves unchanged).

**Tested:** `npm test` 6/6 (crash test rewritten + 1 anchor test);
build green; real click-flow verify PASS — menu title, run HUD with
the ❤️❤️❤️ pill and live score, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** per-environment Egyptian street dressing
(felucca masts on the Corniche run, bazaar stalls in Khan el-Khalili)
is not built. Not tested on a real device.
