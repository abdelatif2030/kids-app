# REVIEW — space_store «متجر النيل الفضائي / Nile Space Store» (Batch D4, 2026-11-27)

## What it was
«متجر الفضاء الذكي» — a walk-around tycoon on the same skeleton as pumpkin_pie (carry stack → serve →
coins → stand-on-pad expansions), with two real defects: a shopper who reached an **empty basket rack
waited there forever**, and the completion card showed a **fixed ⭐⭐⭐** nobody earned.

## What changed
- **Identity:** the store is now the **Nile Space Store** — a space-station supermarket above the Nile.
  The seven expansions are station **wings** (ids unchanged, saves safe): جناح السلال (Basket Wing),
  مخزن أكبر, روبوت كاشير ×2, **قبة الحديقة (Garden Dome)**, **مكوك النيل (Nile Shuttle)**, كاشير البرق.
- **Delivery rockets:** every ~40–55 s a rocket from the Nile docks at a shuttle and tops the basket
  dispenser up (+3) — a living-world event with sound, voice and a toast.
- **Shopper leave-logic fixed:** patience (18 s) at an empty rack → the shopper waves and walks home
  (`giveUp` event + a kind hint toast telling the child to restock). Nobody waits forever; no penalty.
- **Stars are earned:** the completion card now shows `starsFor(served)` — 1★ for finishing the
  station, 2★ at 40 happy shoppers, 3★ at 90 (was: automatic ⭐⭐⭐).
- The skeleton it no longer shares blindly with pumpkin_pie: this game is **logistics** (baskets,
  racks, checkout queues, rockets), pumpkin_pie is a **production chain** (grow → bake → serve with
  helper staff). Different verbs, different economies, different worlds.

## Tests / verification
- `npm test` in game_src/space_store: **6/6 pass** (new: give-up patience with a starved rack, rocket
  delivery tops the dispenser to exactly 3, starsFor thresholds).
- Real-click harness: menu shows «متجر النيل الفضائي», Play starts, wing labels live, zero page
  errors, frames at 3 sizes eyeballed.

## Honest gaps
- Headless fps meaningless (SwiftShader); no real-device test.
- The 3D station dressing is unchanged (the rename lives in names/labels/events); a Nile-view window
  dressing pass is a Batch E/F art item, not a D-batch blocker.

## Phase 2F — Moon-base Chapter 2 (2026-11-27)

- **Chapter 2 added:** after all seven station wings are built, the Nile Shuttle flies the child to a
  **Moon base** — a second full store on grey regolith (code-drawn craters, moon rocks, Earth in the sky),
  mirrored left↔right, running the same sim systems: basket dispenser fed by **Earth-supply rockets**,
  racks, shelves, checkout queues, kind leave-logic, stand-on pads. The sim is now area-parameterised
  (`AREAS` in sim.js); the station config is the original constants untouched, so chapter 1 plays
  byte-identically (robot completion 393 s and 109 served, exactly as before).
- **Moon pads (new save-stable ids, appended; costs continue the curve 25…140 → 150/190/240/300):**
  `moon_rack` رف قمر تاني, `moon_dome` **قبة بطيخ القمر / Moon Melon Dome** (extra shelves + melon coin
  bonus + second supply shuttle — the moon-only flavour), `moon_robot` روبوت قمر, `moon_checkout`
  كاشير النجوم (fast robot checkout). No new currency; one shared coin purse and one shared
  happy-shopper count across both chapters.
- **Save safety:** `save.complete` keeps its exact chapter-1 meaning — an old finished save loads
  finished with the Moon newly available, never incomplete again. New fields `area` and `moonComplete`
  default safely in `normalizeSave`; a save claiming the Moon before the station is finished is sent
  back to the station, and the sim itself refuses early Moon travel. Moon progress persists.
- **Stars:** unchanged `starsFor(served)` over the shared counter; the station card now offers the trip
  to the Moon, and the Moon-complete card is the whole-game finale with the same earned stars.
- **Travel UI:** a kind HUD button (🚀 «للقمر» / «للمحطة», ar+en) appears once the station is complete;
  free, instant, saved. Both world groups are built once at startup and toggled — no per-frame rebuilds.
- **Playtime (robot-manager sim, child pace modelled at ≈3× the near-optimal robot):** chapter 1 robot
  393 s → ≈20 min; both chapters robot 764 s (393 + 371) → **≈38 min total** (target ≈40).
- **Tests:** `npm test` **10/10** — the original 6 unchanged and green, plus 4 new: pad append/stability
  and cost curve, old-finished-save migration incl. the complete-save case and gating, moon leave-logic +
  supply rockets, and a scripted robot playthrough of chapter 2 to full completion.
- **Verify:** `phase2f_verify.mjs space_store` PASS, 0 page errors; frames eyeballed at 844×390 /
  1024×768 / 1366×1024, plus seeded complete-station captures of the Moon base at all three sizes
  (travel button appears, world switches, moon pads/shoppers/Earth visible). game.js 145.7 KB (was 140 KB).
- **Honest gaps:** headless fps meaningless (SwiftShader), no real-device test; Earth reads as a sky
  band at the top of the frame (the camera is steep) rather than a full disc; no new voice lines were
  recorded — two short lines are listed as "add to instinct" in the Phase 2F fragment.

---

## Certification Sweep A (2026-11-28) — Director Protocol

Harness: `~/tools/recorder/cert_a_space_store.mjs` (real menu click-flow, keyboard + drag
movement, seeded chapter saves, travel flow, pause/resume, old/garbage saves, renderer.info +
4×-throttled rAF; frames + `report.json` in `~/workspace/audit/cert_a/space_store/cycle<N>/`).
No code fix was needed for this game in the sweep — no ❌ survived investigation (see cycles).

### Level inventory — 2 chapters, 11 progression stages (stand-on pads)

The game's "levels" are its two areas and the pad chain that grows each one. Chapters differ in
layout (mirrored left↔right), dressing, pads and flavour — not just numbers.

**Chapter 1 — the Nile Space Station** (lilac deck, orange planet, Nile-supply rockets):

| Stage | Pad (cost ⭐) | What it changes |
|---|---|---|
| start | — (dispenser cap 14, rack 1, 3 shelves, main till, 1 shuttle) | carry baskets → rack → serve at the till you stand at |
| 1 | rack2 جناح السلال (25) | second basket rack |
| 2 | bigstack مخزن أكبر (35) | carry stack grows |
| 3 | robot1 روبوت كاشير (55) | first robot checkout (serves alone, 1.5×) |
| 4 | shelves2 قبة الحديقة (65) | +3 shelves, second shuttle dock |
| 5 | shuttle2 مكوك النيل (80) | more shopper arrivals |
| 6 | robot2 روبوت كاشير تاني (95) | second robot checkout |
| 7 | hyper كاشير البرق (140) | hyper checkout (0.45 serve time) → station complete |

**Chapter 2 — the Moon Base** (grey regolith, code-drawn craters/rocks, Earth in the sky,
mirrored layout, Earth-supply rockets, moon-melon bonus +2 ⭐/sale):

| Stage | Pad (cost ⭐) | What it changes |
|---|---|---|
| start | — (mirrored dispenser/rack/shelves/main till/shuttle) | same verbs, new place |
| 8 | moon_rack رف قمر تاني (150) | second moon rack |
| 9 | moon_dome قبة بطيخ القمر (190) | +3 moon shelves, melon bonus, 2nd supply shuttle |
| 10 | moon_robot روبوت قمر (240) | moon robot checkout |
| 11 | moon_checkout كاشير النجوم (300) | fast star checkout → whole game complete |

**Background rule:** ✅ PASS — the two chapters share *no* background: different deck texture
(lilac station tiles vs grey speckled regolith), different sky bodies (orange planet vs Earth),
different dressing (station rails/machines vs craters + moon rocks), mirrored geometry.
Within a chapter there is one continuous place that grows by construction (the game's design —
a store being built), so the per-level-background rule is met at chapter granularity; frames
cross-compared in cycles 2–3 confirm no two *stages* look identical either, because each pad
adds visible geometry (racks, shelves, robots, shuttles, dome).

**Kind rules:** ✅ stars come only from the shared happy-shopper count (`starsFor(served)`:
1★ finish, 2★ at 40, 3★ at 90) — never time. A shopper who finds an empty rack waits a kind
18 s, waves and walks home with a hint toast; no penalty, no lives, no fail state, no timers
that can fail the child (grep for timer/countdown/deadline/streak over `src/` finds only the
audio scheduler's `setInterval`).

### Cycles

- **Cycle 1 ⚠️ incomplete (infrastructure).** Frames exist (17: menu, station/moon at 4 sizes,
  mid/complete/pause/old-save) but the harness process died before writing `report.json`, so no
  check values survive. Counted as a run cycle, **not** as evidence.
- **Cycle 2 ✅ CLEAN.** 0 page errors. Real Play click («يلا نشتغل!»); keyboard movement ✅
  (−4,4 → −4.52,2.96); drag/joystick movement ✅ (→ −4.52,−0.5); pause via Esc ✅ and resume ✅;
  station at 0/3/7 pads renders and plays; travel button appears only after station completion,
  travel station→moon ✅ and moon→station ✅; moon at 0/2/4 pads; pre-2F old save (no moon
  fields) loads complete with the Moon newly available; garbage save sanitised (coins 0,
  0 unlocked, still plays); posted-save persistence ✅ (11 saves, coins/served/unlocked match).
  Frames at 844×390 / 1024×768 / 1366×1024 + portrait eyeballed for both chapters: HUD coin pill,
  toasts, pad labels and travel button fit at every size, nothing covered, no cut text.
- **Cycle 3 ✅ CLEAN (second consecutive).** Same check set, all green (keyboard −4,4 →
  −4.52,3.48; 11 posted saves; moon complete at 11/11 pads).
- **Final review (as-if-first-time) ✅.** `phase2f_verify.mjs space_store` → **PASS, 0 page
  errors** on the shipped build; menu and station-complete frames re-eyeballed fresh (travel
  button «للقمر 🌕» present, toast readable, shopper at the hyper till).

### Performance & tests
- `npm test`: **10/10 pass** (chapter-1 robot completion byte-identical at 393 s / 109 served;
  moon robot completion 371 s; give-up patience; rockets; stars; save migration/gating).
  `npm run build`: game.js **145.7 KB** (≤200 KB). No code changed in this sweep, so no new
  regression tests were needed.
- three.js `renderer.info` (full moon build, the heaviest scene): **273 draw calls /
  20 134 triangles** (station fresh: 175 calls / 11 242 tris) — modest, and both world groups
  are built once at startup and toggled (no per-frame rebuilds).
- rAF under 4× CPU throttling (headless SwiftShader): mean **2 159 ms** (cycle 2) /
  **2 670 ms** (cycle 3). Read honestly: this is software-rendered WebGL on ~1.5 shared CPUs
  with an extra 4× throttle — it is **not** a device measurement and is not presented as one;
  the same box runs every 3D game in the fleet at similar headless rates. Real-device fps:
  see غير مؤكد.
- Audio/voice: shared `VoiceCoach` (9 s per-event cooldown, 4 s global gap); events match
  actions (start → go, serve → charge/pickup, full stack → near, rack → trick, rocket →
  pickup, complete → win); audio unlocks on first real pointerdown. Sound-by-ear: غير مؤكد.

### Decisions
- No fix shipped: every anomaly from the interrupted cycle 1 turned out to be missing
  evidence, not a defect; cycles 2–3 + the final verify are the replacement evidence.
- The two Moon voice lines stay **screen-only**: their clips never landed from Instinct, and
  the game already reuses `pickup` (rocket) / `win` (finale) clips for those events. They are
  listed below as pending add-to-instinct — no voices were generated.

### Add to instinct (pending — clips absent in ar + en, verified by directory listing)
| game | lang | file | text |
|---|---|---|---|
| space_store | ar | voice/ar/moon_hi_1.mp3 | أهلًا بيك في قاعدة القمر! |
| space_store | en | voice/en/moon_hi_1.mp3 | Welcome to the Moon base! |
| space_store | ar | voice/ar/moon_done_1.mp3 | بنيت المحطة وقاعدة القمر! إنت بطل فضاء! |
| space_store | en | voice/en/moon_done_1.mp3 | You built the station and the Moon base! Space hero! |

### غير مؤكد (unconfirmed)
- Real-device / Flutter WebView performance and play (headless SwiftShader only).
- Sound and voice clips by ear; the two Moon lines above are unrecorded (screen text only).
- A human child serving a full queue at the main till end-to-end (robot sim + harness
  movement/pause/travel only; the till loop itself is covered by sim tests).
- Earth reads as a sky band at the top of the frame rather than a full disc (steep camera) —
  known since 2F, accepted there, re-confirmed in cycle 2–3 moon frames.

**Verdict: PASS** — 3 cycles run (1 infrastructure-incomplete), cycles 2 and 3 consecutive
clean with zero ❌, plus a clean final review.
Weakest feel: chapter 2 is the station's verbs in a mirror — the Moon looks new, but the
hands do exactly the same dance; the melon dome is the only genuinely new flavour.
