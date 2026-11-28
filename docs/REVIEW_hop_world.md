
---

## Phase 2D — Egypt anchor + IP fix: «نطّات النيل / Nile Hops» (2026-11-27)

**What was wrong:** (1) a generic "Hop World" whose four worlds were
named for nowhere; (2) **the 'hills' music tune reproduced the famous
platform-game overworld theme note for note** (E-E-E-C-E-G…) — the
IP-adjacent item the fleet audit flagged, still present.

**What changed:**
- **The hills tune is replaced** with an original melody composed for
  this game (same tempo/wave/volume slot, new notes and bass). A
  regression test now asserts the old opening figure is gone from the
  source. The cave/desert/snow tunes were checked and are original
  material — untouched.
- Title: «عالم القفز / Hop World» → **«نطّات النيل / Nile Hops»**.
- The four world keys wear Egyptian places (display names only — the
  keys still drive palettes/tunes/generation): hills → **Nile Bank**,
  cave → **Mountain Cave**, desert → **Desert Oasis**, snow →
  **Catherine Summit**. The place name shows in the in-game HUD pill
  next to the level number, in both languages.

**Tested:** `npm test` 9/9 (+2: world-name anchor with rotation
unchanged; IP guard). Build green. Real click-flow verify PASS — menu
title, HUD pill reading "🌳 Nile Bank 1", frames at 3 sizes, 0 page
errors.

**Not done (Batch F):** the 4 worlds × 5 levels target with papyrus/
felucca set dressing is not built — the worlds are named, not yet
re-dressed. Not tested on a real device.

---

## Phase 2F — 8 worlds × 16 levels, set-pieces + bonus arcs (2026-11-27)

**Worlds/levels before → after:** 4 worlds / 8 levels → **8 worlds /
16 levels**. The journey: Nile Bank (hills) → Mountain Cave (Saqqara
tombs) → Desert Oasis (Giza) → Catherine Summit → **Nile Island**
(new, ⛵ saqia waterwheel) → **Karnak Temple** (new, 🏛️ column hall) →
**Alexandria Shore** (new, 🌊 Pharos lighthouse) → **Siwa Oasis**
(new, 🌴 palm grove + spring) as the finale. Each world hosts exactly
2 consecutive levels.

**Save fairness — levels 1–8 untouched:** the world formula became
`WORLDS[Math.floor(level/2) % 8]` with the four new worlds appended at
indices 4–7, so levels 1–8 keep their worlds. Stronger: layout
signatures (grid + enemies, seed 5) for levels 1–8 were pinned BEFORE
the change and a regression test re-verifies them byte-for-byte —
all 8 identical. Landmark/bonus placement runs after all rng use and
consumes none. `normalizeSave` already derives its clamps from
`LEVELS`; a test walks an old 8-level save through the win-unlock rule
to 16 and checks clamping/star retention.

**New worlds' art (all code-drawn, as before):** palettes, tile marks,
and full parallax backgrounds per world — Nile river band with
feluccas and reed beds; Karnak colonnade + obelisks; Alexandria sea
with sparkle, wave crests and gulls; Siwa dunes, spring pool and palm
groves. Four new ORIGINAL tunes (nile/temple/shore/oasis) in audio.js;
the 2D hills IP replacement is untouched and its guard test still runs.

**Set-pieces (one per world, all 8):** a deterministic landmark placed
by the generator on the first clear flat stretch past 42% of the level
(never hidden behind steps/pipes), drawn by `drawLandmark` in art.js —
felucca sail (hills), Saqqara tomb door (cave), **Sphinx** (desert),
St Catherine monastery (snow), saqia waterwheel (nile), **column
hall** (temple), **lighthouse with rotating beam** (shore), **palm
grove + spring** (oasis). Pure decoration: not solid, no new mechanic.

**Secret coin rooms — honestly partial:** a true hidden room would
need a new mechanic (doors/digging/crouch), so it was NOT faked. What
was added, in the NEW worlds only (levels 9–16): a bonus arc of 4
coins tucked above each landmark, collectable with an ordinary held
jump. Levels 1–8 got no bonus coins (their layouts are pinned).

**Difficulty:** generator parameters unchanged; difficulty keeps
rising gently through length alone (90 → 360 tiles). No fail pressure
added; stars/lives rules untouched.

**Playtime (bot, seed 5, summed level times):** before 197s (8
levels) → after **594s** (16 levels). Child-modelled at ×2.5 the bot
time (bot is a near-perfect runner; a young child hesitates, detours
for coins and retries stretches): ≈8 min → **≈25 min**, on target.

**Tested:** `npm test` **12/12** — LEVELS===16, 8 worlds, journey
order, pinned 1–8 signatures, bot wins **16/16**, fairness **189/192
(98.4%)** across seeds 1–12 × all levels, geometry limits on all 16,
landmarks + bonus arcs, unlock chain 1→16 + save migration, IP guard.
Build green: game.js **120.9 KB** (≤200 KB target). Real click-flow
verify **PASS**, 0 page errors, frames at 844×390 / 1024×768 /
1366×1024 eyeballed; seeded-save frames of temple (column hall),
shore (lighthouse) and oasis (palm grove) levels eyeballed — HUD
pills read the new place names with the new world icons.

**Not tested:** real device; the nile world's in-motion frame (its
landmark/background were verified by code path + palette only — the
three captured new-world frames were temple/shore/oasis); German/
French HUD pills (names exist for ar/en only, as before).

---

## Certification Sweep A — «نطّات النيل / Nile Hops» (2026-11-28)

Protocol: full inventory, real menu click-flow play first→last in the
browser (harness `~/tools/recorder/cert_a_hop_world_cycle.mjs`, frames in
`~/workspace/audit/cert_a/hop_world/cycle{1,2,3}/`), keyboard autopilot
whose jump decisions replicate `test/bot.js` exactly (clone trials on the
live world, holds measured in game time), touch pad + jump button,
pause/exit/replay, fresh-save progression, pre-2F old-save migration,
VoiceCoach config, 4× CPU-throttling perf probe.

### Level table (seed 5, generator-measured)

| # | World (ar / en) | Backdrop | Len | Bugs | Coins | ?-blocks | Checkpoints | Landmark | Difficulty notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | ضفة النيل / Nile Bank | hills day | 90 | 1 | 24 | 0 | 3 | felucca sail @46 | intro: pits ≤2, pipes 1 high, no arc bugs |
| 2 | ضفة النيل / Nile Bank | hills **golden-hour + bunting** | 108 | 2 | 12 | 4 | 3 | sail @48 | first ?-blocks |
| 3 | مغارة الجبل / Mountain Cave | cave day | 126 | 4 | 18 | 6 | 4 | Saqqara tomb @59 | pits can be 3 wide from here |
| 4 | مغارة الجبل / Mountain Cave | cave **golden-hour + bunting** | 144 | 5 | 17 | 8 | 4 | tomb @62 | pipes 2 high appear |
| 5 | واحة الصحراء / Desert Oasis | desert day | 162 | 8 | 31 | 10 | 5 | Sphinx @74 | bug density jumps |
| 6 | واحة الصحراء / Desert Oasis | desert **golden-hour + bunting** | 180 | 5 | 22 | 8 | 5 | Sphinx @101 | longer, more pipes |
| 7 | قمة سانت كاترين / Catherine Summit | snow day | 198 | 9 | 39 | 8 | 5 | monastery @87 | |
| 8 | قمة سانت كاترين / Catherine Summit | snow **golden-hour + bunting** | 216 | 6 | 31 | 8 | 6 | monastery @93 | end of the pre-2F pin |
| 9 | جزيرة النيل / Nile Island | nile day | 234 | 9 | 38 | 12 | 6 | saqia @104 | + bonus coin arc (4) |
| 10 | جزيرة النيل / Nile Island | nile **golden-hour + bunting** | 252 | 11 | 52 | 12 | 7 | saqia @157 | + bonus arc |
| 11 | معبد الكرنك / Karnak Temple | temple day | 270 | 9 | 42 | 12 | 7 | column hall @128 | + bonus arc |
| 12 | معبد الكرنك / Karnak Temple | temple **golden-hour + bunting** | 288 | 13 | 66 | 12 | 8 | columns @125 | + bonus arc |
| 13 | شاطئ الإسكندرية / Alexandria Shore | shore day | 306 | 7 | 47 | 8 | 8 | lighthouse @136 | + bonus arc |
| 14 | شاطئ الإسكندرية / Alexandria Shore | shore **golden-hour + bunting** | 324 | 13 | 52 | 18 | 8 | lighthouse @141 | most ?-blocks so far |
| 15 | واحة سيوة / Siwa Oasis | oasis day | 342 | 10 | 47 | 16 | 9 | palm grove @157 | + bonus arc |
| 16 | واحة سيوة / Siwa Oasis | oasis **golden-hour + bunting** | 360 | 17 | 76 | 20 | 10 | palms @154 | finale: longest, densest |

Background rule: the two levels of a world share a palette but never a
backdrop — the second visit wears the golden-hour wash + pennant bunting
(inherited commit `3d1e1e4c`, verified below). Pixel check of cycle-1
start frames: all 16 frame hashes distinct; sky-strip mean colour differs
inside every pair (e.g. L1 sky RGB (164,210,224) vs L2 (178,191,185) —
measurably warmer). Layouts differ per level (generator seed/length and
the measured element counts above are all distinct); the *mechanic* is
one platformer throughout by design — challenge rises via length, pit
width (3 from L3), pipe height (2 from L4), arc-bugs (from L3) and bug
density. No level is a reskin of another's layout.

### Inherited work verified
- `3d1e1e4c` (backdrop variant): **sound**. `npm test` 13/13 including
  the new certification test and the SHA-256 pin — **levels 1–8 layouts
  still byte-identical**; the variant is drawn from level parity only,
  consumes no rng, touches no grid/enemy byte. Visually confirmed:
  cycle-1 `L1_start_1024x768.png` (plain day) vs `L2_start_1024x768.png`
  (bunting + warm sky).

### Cycles

**Cycle 1 — ❌ (harness, not game).** Full sweep ran (101 files) with
0 page errors; every level opened and progressed deep into the level
(L7 reached tile 191/192), fresh menu showed 16 levels / 15 locked,
touch pad moved the hero (x 2→6.1) and the jump button fired
(vy −12.0), the no-jump run produced the gentle lost card
(«حاول تاني! … بس مفيش مشكلة» + retry/menu), an old pre-2F save
`{unlocked:8, stars:{1:3,8:1}, coins:12}` opened exactly 8 levels and
L8 played, fresh-save L1 win posted save `{unlocked:2, stars:{1:3},
coins:24}`, VoiceCoach live config cooldown 9 s / gap 4 s. But the
fixed-300 ms wall-clock jump holds were far too short in game time at
headless frame rates, so only 5/16 levels were won in-browser.
Verdict: ❌ against my own harness; the game itself was simultaneously
proven winnable 16/16 by the sim bot (`npm test`).

**Cycle 2 — ✅.** Autopilot upgraded to the test bot's exact method
(clone trials, game-time holds). Browser wins **14/16** (L14/L15 lost
all 3 lives under 80 ms polling — decision latency on a VM at load
~40; the identical logic at fixed step wins 16/16 in sim, fairness
189/192). 0 page errors; all other checks repeated and passed
(fresh/old save, touch, gentle-lose card, voice 9 s/4 s). Frames:
start at all 4 sizes for every level, mid/end at 1024×768 — eyeballed:
menu, temple L11 columns, shore L13 at 844×390, portrait Siwa L16 —
nothing off-screen, no covered buttons, no cut text.

**Cycle 3 — ✅ (second consecutive clean round).** Poll tightened to
50 ms and bug look-ahead widened to 4.5 tiles (harness only, no game
code touched). Browser wins **16/16**, 0 page errors, every check
passed again: fresh menu 16/15 locked; touch x 2→6.35, vy −10.9;
gentle-lose card seen; old save opens exactly 8 and L8 (snow) plays;
fresh progression instance save **and** posted save both
`{unlocked:2, stars:{1:3}, coins:24}`; VoiceCoach cooldown 9 / gap 4.
`npm test` re-run for the sweep: **13/13** (pin, bot 16/16, fairness,
geometry limits, landmarks + bonus arcs, unlock chain + old-save
migration, IP guard, certification backdrop test).

### Performance
Canvas 2D (no WebGL draw calls). rAF deltas while auto-running L12
(temple, 288 tiles), headless SwiftShader on a shared VM at load ~40:
unthrottled median 66.7 ms / p95 166.6 ms (cycle 3; cycle 2: 83.3/200);
under CDP 4× CPU throttling median 100.1 ms / p95 416.7 ms. These
numbers measure the overloaded test VM's software rasteriser, not a
device GPU — recorded as-is, **not** presented as device evidence.
Code audit: no per-frame rebuilds — sprites are cached per
world+size (`_sprites` key), the level grid is built once per level;
per-frame work is the canvas redraw plus small fx-array churn.
Built `game.js` 124,490 bytes (inherited build, unchanged this sweep).

### Decisions / changes made this sweep
- **No game code changed.** The only ❌ found (cycle 1) was my harness's
  jump timing; the fix went into the harness, not the game. The
  inherited backdrop-variant commit needed no correction.
- Add-to-instinct: **none** — no new spoken lines; all VoiceCoach
  events (go/pickup/trick/charge/bump/lap/win/lose) map to existing
  clips in both languages.

### Final review (as a first-time player)
The menu is one tap from any level, the HUD pill names the Egyptian
place in Arabic with its icon, every world reads instantly (cave
purple, temple sand columns, shore sea). The golden-hour second visits
genuinely feel like returning at sunset. The lost card is kind, the
win card offers next/replay/menu, and checkpoints keep a small child's
progress after a fall. Weakest point: one shared mechanic for 16
levels — variety comes from worlds, landmarks and density, not from
new verbs.

### «غير مؤكد» (unconfirmed)
- Real device / app WebView (headless SwiftShader only); frame rates
  above are VM-bound and are not device measurements.
- Sound and voice clips were not listened to by a human; clip
  *triggering* is proven by the event wiring + VoiceCoach config, and
  audio unlock happens through the real click flow.
- German/French HUD place names (ar/en only, as before 2F).
- A human child's full 16-level playthrough (browser bot + sim bot
  only).
