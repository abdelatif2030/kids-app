
---

## Phase 2D — Egypt anchor: «ليلى، ملكة أزياء مصر / Layla, Fashion Queen of Egypt» (2026-11-27)

**What changed (names/framing only):**
- Title: «ملكة الموضة / FASHION QUEEN» → **«ليلى ملكة أزياء مصر /
  LAYLA, FASHION QUEEN OF EGYPT»** — the queen has a name and a
  country now; the subtitle is "Layla's World".
- **Runway praise comes from the audience, not judges** (the plan's
  conversion): the three result lines (keys unchanged) now read "The
  crowd claps for you! 👏" → "The crowd is thrilled! 🎉" → "The crowd
  chants your name! 👑". The animated crowd and applause were already
  in the show; the scoring math (theme match in scoreOutfit) is
  untouched — only whose voice delivers the verdict changed.

**Tested:** `npm test` 16/16 (+1 anchor test); build green; real
click-flow verify PASS — the hub (studio, salon, pets, dream house,
runway) opens and Play reaches the closet, frames at 3 sizes, 0 page
errors.

**Not done (Batch F):** Egyptian wardrobe pieces (galabeya-inspired
dresses, pharaonic gold sets) and a Cairo fashion-week theme are not
built. Not tested on a real device.

## Phase 2H — Egyptian wardrobe expansion + style passport (2026-11-27)

**Wardrobe (append-only, existing 129 items frozen by test):** 20 new items in
four Egyptian collections, all drawn by the existing code-art (no new art
files): **Galabeya** — embroidered galabeya dresses (cream/mint/sky/white)
with gold V-neck stitching, seams and a woven hem band drawn in art.js;
**Pharaoh Gold** — a gold gown, the broad striped pharaoh collar (new neck
style `collar`) and the striped nemes headdress (new head style `nemes`);
**Alexandria Breeze** — sundresses (new dress style `sundress`, wavy sea hem)
and white/sky sun hats; **Nubian Colours** — orange/green wrap dresses, an
orange crop top, orange/green long skirts and orange bangles from Aswan.
Every new item carries the `egypt` tag plus the existing theme tags, so the
pharaoh set scores as a kind 3-star royal look and the Alexandria set shines
at the beach show (both pinned by test). Everything stays free, as before.

**Style passport (save-derived, no new save field):** a new menu button
(🛂 جواز الأناقة, badge = stamps earned) opens an 18-stamp passport in the
sky_jumper/ocean_defense pattern: 8 stamps for runway themes dressed for
(any completed show, even a kind 1-star one), 6 for fashion worlds fully
finished, and 4 for Egyptian collections worn in a **saved** look (wearing
alone does not stamp — the look must be kept, matching the hint text).
Stamps derive purely from `save.runway`, `save.levels` and `save.favs`, so
old saves earn theirs retroactively and the save shape did not grow
(migration-tested, round-trip stable). Locked stamps are ❔ silhouettes
with a bilingual hint only — no names leak.

**Kind rules kept:** no timers, no lives, no claiming step and nothing to
lose; the passport only ever fills up. Judging stays audience praise.

**Tested:** `npm test` 21/21 (16 before + 5 new: freeze of the 129 original
ids in order, collection completeness/naming, kind scoring of Egyptian
looks, passport derivation incl. the saved-look rule, pre-2H save
migration). Build green; game.js 200,222 → 207,588 bytes (+3.7% — the game
already sat on the ~200 KB line; the addition is data + one screen + three
small drawing branches, no new assets). Real click-flow verify PASS at
844×390 / 1024×768 / 1366×1024, 0 page errors; seeded captures eyeballed:
menu with the passport badge (5), the passport screen (5/18 stamps from a
seeded save, locked entries hint-only), and the dress grid showing the
galabeya/sundress/Nubian pieces rendering in the existing thumbnail art.

**Not tested:** on a real device. One presentation note, checked and
cleared: in headless landscape captures the menu/closet stage shows the
painted backdrop without a visible stage doll — I verified this is
identical on the pre-2H HEAD build (same capture, same pixel profile), so
it is a pre-existing quirk of this capture setup, not a 2H regression; the
doll itself renders through the same drawDoll code in every item
thumbnail, where the new galabeya/sundress/wrap pieces are clearly visible.

## Director Protocol — full certification (2026-11-27)

### Inventory — the game's real "levels"
12 views: menu, world map, missions, style passport, shop, settings, studio (closet),
salon, pets, dream house, runway pick, runway show. Progression = **6 worlds × 5 levels
= 30 levels** (objectives over event kinds; star-gated 0/3/8/14/20/28):

| World | Levels (objectives) | Host stage | Backdrop (after fix) |
|---|---|---|---|
| 🏙️ Fashion City (0⭐) | equip 3 · buy 1 · save look 1 · equip 8 · buy 3 | studio | bg_studio picture |
| 💄 Beauty Palace (3⭐) | salon 1 · salon 3 · makeup 3 · salon 6 · salon 10 | salon (6 activities) | bg_salon picture |
| 🐶 Pet Paradise (8⭐) | care 2 · care 6 · unlock 1 · care 12 · unlock 3 | pets (7 pets × 6 care acts) | bg_pets picture |
| 🏠 Dream House (14⭐) | place 3 · place 8 · save room 1 · place 16 · save 4 rooms | house (6 rooms) | bg_house + per-room wash/motif |
| 🌟 Royal Runway (20⭐) | show 1 · 2★ in a show · 4 shows · 3★ in a show · 8 shows | runway show | per-theme backdrop (below) |
| 🏝️ Magical Island (28⭐) | 3 daily · 3★ again · 3 achievements · 800 coins · 6 achievements | missions/runway meta | code-drawn map route scene |

**8 runway themes** (the show stages): princess 👸, beach 🏖️, wedding 💍, winter ❄️,
school 🎒, royal 👑, casual ☀️, fantasy 🦄 — each scored on its own tag set
(scoreOutfit), kind 1–3★ (audience praise only, never a fail). **6 house rooms**:
bedroom, living, kitchen, bath, dressing, garden. Plus 10 achievements, 5 daily
tasks, 18-stamp passport (Phase 2H).

### Cycle 1 (protocol run on the 2H build) — ❌ found, all fixed autonomously
Frames: `audit/protocol_frames/fashion_queen/cycle1/` (101 frames, 4 sizes).
- ❌ **All 8 runway themes shared ONE backdrop** (the same bg_runway picture in pick
  and show). Fix: code-drawn per-theme identity in art.js (`THEME_ART`: distinct
  wash + runway-floor tint + motif row per theme), applied in the show via
  `g.bg('runway', theme.id)`. Zero new files.
- ❌ **World map used the palace picture** (`BG_NAME.map = 'palace'`) — identical to
  menu/passport/settings. Fix: map is now its own code-drawn scene (sky→grass
  gradient, dashed route through the 6 world icons).
- ❌ **Missions used the studio/shop picture**. Fix: own code-drawn `missions`
  palette (warm gold). ❌ **Passport used the palace picture**. Fix: own `passport`
  palette (mint/teal).
- ❌ **All 6 house rooms looked identical** (same stage, same default wall/floor).
  Fix: `ROOM_ART` — per-room wash + motif row drawn on the room wall (house.js).
- ❌ **Menu title cut by the panel at 1024×768 landscape** («ليلى» hidden behind the
  panel). Fix: `_applyLayout` confines the title overlay to the stage rect.
- ⚠️ Explained, NOT a game bug: on panel screens the shared shell script
  `assets/games/menubg.js` (outside this game's permitted paths) covers the canvas
  with `poster.webp` (+ `hero.webp` on wide screens) whenever a panel is visible, so
  headless captures show the poster instead of the canvas stage. Frozen-draw probes
  prove the game's own stage draws correctly underneath: menu doll chest pixel =
  dress rose (179,74,118), head = skin (255,227,204); house wall-band colour
  signatures differ per room (35/25/22/24/23/28 distinct colours). The runway show
  (no panel) renders its canvas directly — that is where the themed backdrops are
  fully visible. Flagged for the owner/parent: if the poster is meant to sit
  *behind* the canvas, menubg.js insertion order is the place to change it — I did
  not touch it (shared file, outside my scope).
- Harness note: fixed-sleep captures mis-timed show phases (headless game-time runs
  slower than real time); the harness now waits for the result modal. Voice requests
  do not fire under synthetic `.click()` (no pointerdown → no unlock); verified
  separately with real mouse clicks (below).
- Tests after fixes: `npm test` **22/22** (+1 new: backdrop-identity uniqueness for
  all 8 themes + 6 rooms). Build: game.js 207,588 → **210,556 B (+1.4%)**.

### Cycle 2 — ✅ clean (zero game ❌)
Frames: `cycle2/` (100+ frames, all 4 sizes). Evidence: all 8 theme result modals at
1024×768 show the correct theme, kind praise at every star level (1★ winter/school/
casual still earn coins + «الجمهور بيصفق لك»), rewards accumulate in the posted save
(runway bests recorded for all 8 themes); menu title fully visible at 1024×768 and
1366×1024; Escape from runway pick returns to the menu; **save persistence**: a fresh
page reloaded with the session's real posted save shows the passport at **١١/١٨**
(8 theme stamps + city world + galabeya + alex collections). 0 page errors in every
chunk. One harness artefact: fantasy's portrait result exceeded a 45 s wait
(headless game-time) — the same theme completed at the other 3 sizes and the
portrait walk frame is correct; the wait was raised to 75 s for cycle 3.
fps (headless SwiftShader, 1024×768): menu 14.1 fps @1×; runway show **1.4–4.4 fps
@4× CPU throttle** across runs — software-rendering bound, see غير مؤكد.

### Cycle 3 — ✅ clean (second consecutive, zero ❌)
Frames: `cycle3/` (100 frames, all 4 sizes) + logs `log_main/_844/_1366/_portrait/_fps.json`.
Main run: all 8 results correct (scores 85/32/85/32/32/85/32/76 per 100 — the seeded
pharaoh look earns 3★ on matching themes; the 32/100 shows earn a kind 1★, still
praised and paid), posted save runway = {princess 3, beach 2, wedding 3, winter 1, school 1,
royal 3, casual 1, fantasy 3}, passport reload **١١/١٨**, Escape → menu, 0 page
errors in every chunk (two chunk re-runs were needed after harness infrastructure
failures — Chrome launch timeout and a runtime restart — not game errors).
fps @4× this cycle: **4.4 fps** (menu @1×: 14.4). No per-frame rebuilds: the show
keeps fixed crowd/flash arrays; backdrop work is draw-only.

### Final review (as if new)
Re-eyeballed cycle-3 contact sheets fresh: 8 walk frames are unmistakably 8
different stages (sand, peach, purple, pink, deep-purple, green, white, ice
floors + motif rows); portrait shows are tall, centred, nothing off-screen;
1366×1024 map/missions lists are complete with correct locks/progress; the
passport's locked stamps remain ❔+hint only. Judging stays kind everywhere —
there is no fail state in the game at all. **Verdict: PASS — two consecutive
clean rounds (cycles 2 and 3), 3 cycles total.**

### Decisions/changes (this protocol)
THEME_ART + ROOM_ART code-drawn backdrops; map/missions/passport own scenes;
title-over-stage fix; +1 unit test. Commits: `31736261` (code+test+build).
Scripts: `~/tools/recorder/protocol_fq.mjs` (+ probes 1–4). No new image/audio
files; save shape unchanged (passport still save-pure); id/placement untouched.

### غير مؤكد
- Real-device behaviour and fps (iPhone/Android WebView, GPU) — all numbers here
  are headless SwiftShader on a shared 1.5-CPU cell; the 4× fps figure is an
  environment floor, not a device measurement.
- Audio *by ear* (synth tunes, applause, voice lines) — verified by request log
  and state only: real mouse click → AudioContext `running`, voice unlocked,
  `voice/ar/go_1.mp3` requested on Play, `voice/ar/near_1.mp3` after the show's
  mission-ready event, `music.mp3` loaded. The show's win line can be legitimately
  gap-blocked when «near» fires first (VoiceCoach 4 s gap / 9 s per-event
  cooldown — the owner's anti-repetition rule).
- Whether the menubg poster-over-canvas order is intended in the app shell
  (see cycle 1) — outside this game's files; on-screen stage visibility of
  salon/pets/house in the real app depends on it.
- Touch gestures beyond taps (salon rubbing, pet play, doll drag-rotate) were
  exercised in logic tests and earlier phases, not re-driven frame-by-frame
  in this protocol's captures.
