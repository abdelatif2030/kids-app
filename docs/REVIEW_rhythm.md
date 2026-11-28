# Review: «البقاء على الإيقاع» Rhythm Survival — Phase 2B (Batch B1)

## What was reviewed
Audit card (racing_action.md) + GAMES_MASTER_PLAN item 2.15: the game shipped 7 painted
venue panoramas (assets/games/rhythm/art/pano1..7.webp, incl. Giza over the Nile and the
Cairo Tower finale) that no code loaded. The diner walls carried a plain cream material.

## Changed (game_src/rhythm)
- `src/models.js`: `makeDiner()` now returns its 3 wall meshes in `group.userData.walls`;
  walls raised 10 → 15 high so they read in portrait / menu-orbit views.
- `src/main.js`: `_buildWorld()` stores the walls and the record-deck side mesh (stage skirt,
  material cloned). New `_setPano(i)`: loads `art/pano<i+1>.webp` onto the walls
  (repeat 1.8×0.62, offset y 0.36 — the scenic band) and wraps a second copy around the stage
  skirt (repeat 3×1) — the one backdrop the top-down gameplay camera always has in frame.
  Called from `showMenu()` (the next track's venue) and `startTrack(i)`.
- `src/sim.js`: stale comments fixed ("Five tracks" → seven; track range 0..6).
- Track ↔ panorama: 1 Diner Jukebox→pano1, 2 Record Shop→pano2, 3 Velvet Hall→pano3,
  4 Music Box→pano4, 5 Party Hall→pano5, 6 World Tour→pano6 (Giza over the Nile),
  7 Grand Orchestra→pano7 (Cairo Tower finale).

## Tests & playtest evidence
- New regression test: every track index has a shipped `art/pano<track+1>.webp`.
  `npm test` 7/7 pass; `npm run build` ok (built game.js committed with the change).
- Real click-flow harness (~/tools/recorder/phase2b_verify.mjs, standalone boot, real
  button clicks): menu walls carry the pano texture; Play starts a track with pano walls;
  after unlocking, `startTrack(6)` shows pano7.webp on the walls. Zero page errors.
- Frames at 844×390 / 1024×768 / 1366×1024 in ~/workspace/projects/audit/shots_phase2b/:
  the finale frame shows the Cairo panorama wrapped around the stage skirt in gameplay;
  walls visible in portrait framing.

## Honest gaps
- In landscape the gameplay camera is steeply top-down, so the walls themselves sit
  mostly out of frame; the skirt band is the in-frame carrier of the art there.
- Headless SwiftShader fps is not meaningful; no per-frame allocations were added
  (textures load once per track start; previous textures disposed).

---

## Phase 2D — Egypt anchor + kind fix: «إيقاع القاهرة / Cairo Rhythm» (2026-11-27)

**What was wrong:** (1) "Rhythm Survival" — a survival frame whose
non-easy players had exactly ONE life: one fall and the show was over;
(2) the easy-mode save had a real flaw: it respawned the child at
radius 3, which is inside the gap rings (gaps start at 2.2), so a gap
fall could chain-burn every life in a second (reproduced in a test
script: saved → saved → out in 3 steps).

**What changed:**
- **Three lives for everyone** (was 3 easy / 1 otherwise), and the
  save respawn moved to radius 1.2 — inside every possible gap ring —
  so a save is a real save. Two tests were updated to pin the new
  rules (first fall = saved; passivity still costs lives), and the
  "standing still" test now asserts the punishment without sudden
  death. Note, honestly: on the easiest track an idle player can now
  outlast the rivals and "win" by survival — that is the game's own
  premise (last one on the record), not a pressure mechanic.
- Title «البقاء على الإيقاع / Rhythm Survival» → **«إيقاع القاهرة /
  Cairo Rhythm»**, the World Tour → Egypt Tour, and the seven venues
  are Egyptian: Hara Café → Khan el-Khalili Records → Hara Rooftop →
  Nile Lounge → Grandma's Music Box → Cairo Opera House → Cairo Grand
  Orchestra (bpm/length/mechanics unchanged; the panoramas wired in
  Phase 2B stay).

**Tested:** `npm test` 8/8; build green; real click-flow verify PASS —
menu title and venue list, show HUD with the ❤️❤️❤️ lives, frames at
3 sizes, 0 page errors.

**Not done (Batch F):** Egyptian instrument flavour in the synth
tracks (tabla/rababa-style patterns) is not built. Not tested on a
real device.

---

## Phase 2F — five Egyptian-instrument tracks + encore mode (2026-11-27)

**What changed:**
- **Tracks 7 → 12.** Five tracks appended (ids 8–12; tracks 1–7 data
  untouched — a test deep-equals them against the original literals).
  Each new track's LEAD is a synthesized Egyptian instrument, and each
  venue is new (Khan el-Khalili is already track 2, so it is not
  reused): 8 «شارع محمد علي / Mohamed Ali Street» — **oud** (bpm 122,
  90 s, pano2); 9 «قلعة صلاح الدين / Salah El-Din Citadel» — **tabla**
  (126, 94 s, pano6); 10 «مركب في النيل / Nile Boat» — **rababa**
  (130, 98 s, pano4); 11 «حديقة الأزهر / Al-Azhar Park» — **mizmar**
  (134, 100 s, pano3); 12 «ليلة في الحسين / A Night in Al-Hussein» —
  **qanun** (138, 104 s, pano7). Backdrops reuse shipped panoramas via
  a new `panoOf(track)` mapping — no new image files.
- **Synth voices (audio.js, all event-scheduled, no files/packages):**
  a shared `_pluck` body (pick noise + harmonic triangles through a
  closing lowpass) for oud (warm, 3 kHz) and qanun (brighter, 4.6 kHz,
  with tremolo re-plucks); `_rababa` (sawtooth, dark 850 Hz lowpass,
  slow bow attack, 4.2 Hz vibrato, bow noise); `_mizmar` (square+saw
  through a nasal 1150 Hz bandpass, pitch scoop, 6 Hz vibrato);
  `_tablaStroke` (dum = sine drop 175→62 Hz, ka = 1800 Hz rim noise,
  tak = 3200 Hz snap; under a tabla lead the kit steps back). The new
  leg plays over an original 8-bar D-hijaz backing (EGYPT progression,
  hijaz walking bass, qanun-plucked chord stabs) with one ORIGINAL
  melody written per instrument — no known/folk tune is transcribed.
  `Sound.setLead()` picks the voice per track; tracks 1–7 keep the sax
  and the blues, byte-for-byte the same scheduling path as before.
- **Encore mode.** When every track has ≥1 star (`tourComplete`), a
  clearly labelled 🎉 «إعادة احتفالية / Encore» toggle appears in the
  menu. Encore replays any track with the sim's tempo raised one notch
  (bpm ×1.15 — the beat drives count-in, arm sweeps and the music, so
  the same fixed charts play faster; nothing is regenerated). It is
  optional, shows a 🎉 badge in the HUD, and awards NO stars and no
  unlocks — pure replay joy; normal mode is completely unaffected.
  Kind rules hold in both modes: 3 lives, safe respawn at radius 1.2,
  stars never speed-based (encore grants none at all).
- **Playtime (child-modelled, summed track durations):** before =
  Σ len 384 s + 4-beat count-ins 13.6 s ≈ **398 s ≈ 6.6 min**; after =
  Σ len 870 s + count-ins 22.9 s ≈ **893 s ≈ 14.9 min ≈ the 15-minute
  target**, plus encore replay value on all 12 tracks.

**Tested:** `npm test` 13/13 — robot survives all 12 tracks (track 12:
3/4 seeds, the rest 4/4) and encore versions of tracks 1/8/12; first-7
data unchanged; unlock chain 1→12; old 7-track save migrates
(unlocked 7 + stars 1–7 → unlocked 8, stars intact); a fake-AudioContext
scheduler test runs every lead (sax + 5) for full song cycles — it
caught a real dangling-`else` bug in the new scheduler branch during
development, fixed with explicit blocks. `npm run build` → game.js
134.6 KB (≤200 KB target). Real click-flow verify
(`phase2f_verify.mjs rhythm`) PASS, 0 page errors, frames at 844×390 /
1024×768 / 1366×1024; a seeded completed-tour capture confirmed the
encore button in the menu, track 12 gameplay (pano7 skirt) and the
encore 🎉 HUD badge on track 8 (pano2 skirt), 0 page errors.

**Honest gaps:** the five timbres were verified by code/oscillator
parameters and scheduler execution, NOT by ear — nobody has listened
to them yet. Not tested on a real device. Headless fps not measured
(no per-frame work was added; all new audio is scheduled on the
existing 30 ms lookahead timer).

---

## Certification Sweep A (2026-11-27)

### Inventory — all 12 tracks

| # | Track (EN / AR) | Lead | bpm | len | Arms | Mechanics | Background |
|---|---|---|---|---|---|---|---|
| 1 | Hara Café / مقهى الحارة | sax | 112 | 40s | low×1 | — | pano1 (own) |
| 2 | Khan el-Khalili Records / أسطوانات خان الخليلي | sax | 116 | 45s | low+high | — | pano2 (own) |
| 3 | Hara Rooftop / سطح الحارة | sax | 120 | 50s | low+high | gaps | pano3 (own) |
| 4 | Nile Lounge / صالة النيل | sax | 124 | 55s | low+high | gaps+flip | pano4 (own) |
| 5 | Grandma's Music Box / صندوق موسيقى الجدة | sax | 128 | 60s | 3 arms | gaps+flip+tonearm | pano5 (own) |
| 6 | Cairo Opera House / دار الأوبرا | sax | 132 | 64s | 3 arms | gaps+flip+tonearm | pano6 (own) |
| 7 | Cairo Grand Orchestra / أوركسترا القاهرة | sax | 136 | 70s | 4 arms | gaps+flip+tonearm | pano7 (own) |
| 8 | Mohamed Ali Street / شارع محمد علي | oud | 122 | 90s | 3 arms | gaps (after Sweep-A fix) | pano2 + **motif: oud arches** |
| 9 | Salah El-Din Citadel / قلعة صلاح الدين | tabla | 126 | 94s | 3 arms | gaps+flip (after fix) | pano6 + **motif: citadel** |
| 10 | Nile Boat / مركب في النيل | rababa | 130 | 98s | 3 arms | flip+tonearm, no gaps (after fix) | pano4 + **motif: felucca boat** |
| 11 | Al-Azhar Park / حديقة الأزهر | mizmar | 134 | 100s | 3 arms | gaps+tonearm, no flip (after fix) | pano3 + **motif: park trees** |
| 12 | A Night in Al-Hussein / ليلة في الحسين | qanun | 138 | 104s | 4 arms | gaps+flip+tonearm (finale) | pano7 + **motif: lanterns** |

Common rules (all tracks): 3 lives for everyone, safe respawn at radius 1.2, stars for
survival/clean play/knock-offs only (never speed), encore (tempo ×1.15) after a full tour
awards no stars/unlocks. VoiceCoach: clips present ar+en for every event bank
(go/trick/bump/charge/win/lose/count); shared VoiceCoach enforces 9s per-event / 4s global
cooldowns (cozy_kit/voice.js defaults, verified in code).

### ❌ found in Cycle 1 (inventory + first full pass) and fixed

1. **Tracks 8–12 shared ONE mechanic mix** (gaps+flip+tonearm all on) — levels differed only
   in numbers (bpm/len/arm periods). **Fix:** distinct mix per track (table above): track 8
   re-introduces gently (gaps only), one pressure returns at a time, everything together only
   in the track-12 finale. Pinned by a new regression test (mixes pairwise distinct; robot
   still wins ≥2/4 seeds on every re-mixed track).
2. **Tracks 8–12 reused an earlier track's panorama exactly** (8→pano2 = track 2, 9→pano6 =
   track 6, 10→pano4 = track 4, 11→pano3 = track 3, 12→pano7 = track 7) — two levels sharing
   a background. **Fix:** each track 8–12 now composites a code-drawn venue motif over its
   reused panorama at track start (`drawMotifCanvas` in main.js, canvas 1024×512, once per
   track start, no new image files): oud-shop arches + hanging ouds, citadel towers + flags,
   felucca sails + waves, park trees, Ramadan lanterns + crescent.
3. **Cycle-1 readability ❌:** the first motif pass read weakly on the stage skirt (thin
   silhouettes). **Fix:** motifs redrawn bold — full-height colour bands, large shapes
   (committed in the same Sweep-A change set before cycle 2).

### Cycles

- **Cycle 1 (discovery):** ❌ — the three findings above. Functional pass evidence
  (pre-motif-fix build): real menu clicks opened tracks 1–10, every one returned to the menu,
  **0 page errors**; frames in `~/workspace/audit/cert_a/rhythm/c1/` (start at 844×390 /
  1024×768 / 1366×1024 + portrait + mid per track). Tracks 11–12 frames were cut off by
  harness CPU timeouts (shared VM), not by game errors — superseded by cycles 2–3 on the
  final build.
- **Cycle 2:** ✅ CLEAN (final build, commit 68305978) — real menu click-flow opened all
  12 tracks (each `clicked` label recorded, canvas = 1, HUD live with track number +
  animals-left + hearts), every track returned to the menu (`backToMenu = true` ×12),
  **0 page errors** across the whole pass. Frames in `~/workspace/audit/cert_a/rhythm/c2/`:
  start at 844×390 / 1024×768 / 1366×1024 + portrait + mid-action at 1024×768 for every
  track (62 files). Eyeball check (L1 portrait, L8 + L12 starts at 1024×768, spot mids):
  HUD complete and inside the viewport at every size, ⬆/⬇ controls reachable, nothing
  covered or cut; the track 8–12 motifs read as bold colour bands/shapes on the stage rim
  and are visibly different track-to-track (L8 yellow/black oud-shop band vs L12
  purple/orange lantern band). Fresh-save probe: only track 1 unlocked, the rest 🔒
  (16 menu buttons, 0 errors). Old pre-2F-shaped save probe (`unlocked: 7`, partial
  stars): menu renders the saved stars exactly, track 8 open, 9–12 locked, **0 errors** —
  old saves do not break. Machine-readable evidence: `c2/report.json`.
  (Levels 1–10 ran 01:02–01:16; levels 11–12 were re-run after a shared-VM browser death
  cut the first attempt — MERGE re-run, same build, 0 errors.)
- **Cycle 3:** ✅ CLEAN (same final build) — full re-run from scratch in four chunks
  (1–3, 4–6, 7–9, 10–12, MERGE-merged `c3/report.json`): all 12 tracks opened by real
  menu clicks, canvas = 1 and live HUD on every track, `backToMenu = true` ×12,
  **0 page errors**; fresh-save and old-save probes repeated clean (oldSaveErrors = 0).
  Frames in `~/workspace/audit/cert_a/rhythm/c3/` (same 5-frame set per track).
  Spot-eyeball: L9 citadel-brown rim band and L10 felucca sails read clearly and differ
  from L8/L12; L10 at 844×390 keeps the full HUD + both controls on screen.
  → **Cycles 2 and 3 are two consecutive clean rounds (zero ❌), on top of the Cycle-1
  discovery round = 3 cycles total. PASS.**
- **Final review (as if first time):** menu → every track → HUD → exit path re-walked on
  the Cycle-3 frames with fresh eyes: no off-screen or covered controls at any of the
  four sizes, no cut text (HUD strings complete in the recorded HUD text), no dead
  backgrounds (every track's rim/pano is alive colour, tracks 8–12 each distinct),
  countdown → play → pause/menu flow intact on all 12. No new findings.

### Performance & tests

- `npm test` **14/14** (was 13/13; +1 Sweep-A regression test). `npm run build` → game.js
  138.1 KB (≤200 KB budget). Motif compositing runs once per track start; no per-frame
  allocations added (canvas texture created/disposed with the pano textures).
- Perf (track 12, the heaviest — 4 arms, full cast; `cert_a_perf_sr2.mjs`, evidence in
  `~/workspace/audit/cert_a/perf_rhythm.json`): **renderer.info = 381 draw calls,
  49,998 triangles, 703 geometries, 9 textures** (stable across unthrottled/4× reads:
  381/379 calls). Draw calls are above the 150-call ALIVE target — recorded honestly as
  the game's main perf debt (each animal/arm is several meshes; merging is a future
  refactor, not attempted in this sweep because the click-flow + sim evidence is green
  and a render refactor would void the completed cycles). rAF frame times on this
  shared VM are environment-bound and are **not** presented as game evidence: even a
  blank page at 4× throttling averaged 40 ms/frame (max 200 ms) while ~10 sibling
  browsers shared 1.5 vCPUs; the game's own logic cost is covered by the node sim
  suite (robot plays all 12 tracks). No per-frame rebuilds: the render loop reuses
  geometries/materials; the only new Sweep-A work (motif canvas) runs once per track
  start.

### «غير مؤكد» (unconfirmed)

- Real device / real WebView (iPhone/Android) — not tested; headless SwiftShader only.
- The five synthesized Egyptian timbres and all voice clips — verified by code/scheduler
  execution and file presence, **not heard by a human ear** in this sweep.
- Full human playthrough of all 12 tracks end-to-end (robot + click-flow + frames instead).
- Audio starting exactly on first touch — click-flow unlocks audio by construction
  (real button clicks), but no human listened in headless.

### Add-to-instinct candidates

- None: every VoiceCoach event bank used by this game (go/trick/bump/charge/win/lose/count)
  already has clips in both ar and en. No new spoken lines were added.
