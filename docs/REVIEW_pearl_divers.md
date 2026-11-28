# Review: «غوّاصو اللؤلؤ» (Pearl Divers) against the owner's video (brief 19)

Video: `20261118-2121-04.6754116.mp4` (77 s, portrait phone, the game is called "Lagoon Lift" in the recording). Frames checked on contact sheets and full-size frames.

## What the original does
- Portrait, side cut-away of a lagoon: sky and palm island on top, **your red stall boat** (awning, string lights, a crane) on the left and the **rival's pink yacht** with the rival man on deck on the right; below the water line the **ledges are stacked downward** (sandy/pink rock strata between them). The camera scrolls down as new ledges open.
- HUD: a big cash pill with a white pearl icon, a sound button, and a bar "YOU ... $1.50M [rival face]" with a coin marker that fills as your wealth approaches the rival's fortune.
- Per ledge: a diver, a basket of pearls, a big clam with a pearl on the right, a **diving bell on a rope + ladder** on the left. A tap (ring + hand, "TAP TO DIVE!") sends the diver to the clam, he carries the pearl to the basket, the bell lifts the basket to the boat, the boat sells it ("+$30K", coins fly into the cash pill).
- Buttons (contextual, on the ledge): **HIRE $** (another diver works by himself), **up-arrow x3 $** (that ledge's pearls worth x3, price keeps growing), **NEW LEDGE $** (purple, opens the next ledge), plus a grey round up arrow marker. "x3" pops up when you upgrade.
- Ends with the rival saying "ALL MINE!", then "YOU WIN!" with three stars and the cash, and a LAGOON LIFT card. (The green "PLAY NOW" button at the bottom is an ad button, not a game feature.)

## Differences found in the old build
1. A shop panel with 11 buttons at the bottom instead of buttons on the ledges; global upgrades (extra diver, pearl value, faster bell) and "managers" that do not exist in the video.
2. All four ledges were drawn at once in fixed rows; no camera scroll, no NEW LEDGE flow, ledges 2 to 4 visible but locked in a menu.
3. Two progress bars (you and a growing rival) with numbers instead of the single bar to a fixed $1.50M fortune; the rival grew over time.
4. No "TAP TO DIVE" prompt; a tap boosted the first ledge without the diver waiting for you.
5. Very small numbers ($3 per pearl) instead of the video's K and M scale; no flying coins, no "+$" at the boat, no "x3" pop, no "ALL MINE!" bubble, no win card with three stars.
6. Plain shapes for boat, yacht, bell, basket and clam; no palm island, no ladder/rope, no rock strata.

## What was changed (game_src/pearl_divers/src)
- `sim.js` rewritten: ledges (Shallows, Reef, Cave, Deep) opened with NEW LEDGE; per ledge HIRE (an extra diver who works alone, up to 4, price grows x2.2) and UPGRADE x3 (pearl value x3 per level, up to 4, price x4 each); your own diver waits for a tap (a tap = faster dive for 2.5 s); basket -> diving bell -> boat sale; fixed rival fortune of $1,500,000 (win when your earnings reach it). Nothing is lost.
- `main.js` rewritten: portrait play column with camera that follows the deepest ledge; HUD with cash pill, YOU bar to $1.50M with a coin marker and rival face, menu button; buttons placed on each ledge (HIRE orange, x3 yellow, NEW LEDGE purple with lock/unlock icon, greyed when you cannot pay); "TAP TO DIVE!" with a pulsing hand; rival bubble "ALL MINE!" at the start; coins fly from the boat to the cash pill with "+$..." text; "x3" pop on upgrade; palm island, stall boat with awning and lights, pink yacht with the rival, rope + ladder + bell, basket, clam that opens, orange divers with pearls, rock strata and light rays; "YOU WIN!" card with three stars and the cash. Space/Enter also taps. Arabic and English strings kept; contract `window.PearlDivers.start(el, config, post) -> {dispose, pause}` kept.
- `test/sim.test.js` rewritten (5 tests, `npm test` passes): no income without a tap, tap-to-sale chain, hire/upgrade/new ledge rules, and a robot owner that taps and buys wins in about 190 s of game time (between 60 and 900 s).
- Built with `npm run build` (50 kB).

## Checked in a browser (Edge headless, 430x860 and 844x390)
Menu, start (hint + bubble), real mouse tap, divers working, two and four ledges with camera scroll, win card: no console errors. Fixed along the way: RTL turning "+$300" into "$300+" on the canvas, tap hint overlapping the buttons, blank band below the last ledge.

## Still different
- It is a 2D canvas cut-away drawn in code (the video's art is richer 3D-style with fish, coral and lighting). No pictures were added.
- No grey round up-arrow marker, no rival yacht animation at the end (the rival only speaks "ALL MINE!" at the start), no fish.
- Landscape screens use the same portrait column, so the sky/boat area is cramped at 844x390.
- Prices and pearl values are our own (the video only shows 10K hire, 16K x3, 12K new ledge, 250K x3, goal $1.50M), tuned so a robot wins in ~3 minutes.
- Sound is synthesized, not the video's; not listened to by a person.

---

## Phase 1 fix review — Moss, 2026-11-27 (commit 4633943d)

**What was wrong.** (1) `_won()` stored `Math.max(best, time)` — the SLOWEST winning dive became the "best". (2) The upgrade button label was the literal 'x3' / `x${3}` in three places, disconnected from the sim (verified against the sim: the per-level multiplier really is ×3, `3 ** upLvl` — the label was right by luck, not by construction). (3) Money rendered with $ in six places in an Egyptian-pounds game.

**What changed and why.** The sim exports `recordBest(best, time)` — fastest wins: a first win sets it, a slower win never replaces it, a faster win improves it; `_won()` uses it. `UP_MULT = 3` is now exported from the sim and used by `mult()`, the buy event, the button label and the buy fx, so the advertised multiplier cannot drift from the paid one. All $ renders became ج.م / EGP via one CUR() helper.

**Tested.** npm test 7/7 (2 new: recordBest cases including the exact old-bug case — best 95 vs a 130 s dive stays 95; sim mult equals UP_MULT^upLvl). Browser through the real shell: three scaffolded finished dives (130 s, 80 s, 200 s) posted best = 130 → 80 → 80; zero page errors. fps 10.4 rAF under CDP 4× CPU throttling in headless SwiftShader — low in this software-GL environment (the game's per-frame canvas painting predates this change; nothing per-frame was added). Treat as a comparable lower bound, not a device number; the canvas paint cost is logged as a Phase-2 perf item in docs/AI_WORK_LOG.md.

**Not verified.** Pre-fix saves may hold an inflated "best" (a slow time); it now only improves when beaten — no migration was attempted (guessing a "plausible" best would falsify the record). No real-device test. Voice clips are partial for this game (6/16 real clips installed from batch 2; the rest are pending from the owner's generator).

---

## Phase 2D — Egypt anchor: «غوّاصو لؤلؤ البحر الأحمر / Red Sea Pearl Divers» (2026-11-27)

**What changed (name only):** the title «غوّاصو اللؤلؤ / Pearl Divers»
→ **«غوّاصو لؤلؤ البحر الأحمر / Red Sea Pearl Divers»**, and the win
line now crowns the child "the richest pearl trader on the Red Sea
coast" instead of "in the lagoon". The lagoon race, the rival, ledges,
prices and the Phase 1 fastest-dive best are untouched.

**Tested:** `npm test` 8/8 (+1 anchor test); build green; click-flow:
menu title confirmed by the harness; gameplay confirmed with a
single-click check (the harness's second click hits this game's ☰ menu
button too) — race HUD with the rival track and hire pads, 0 page
errors; menu frames at 3 sizes.

**Not done (Batch F):** the named dive-site ladder (Hurghada → Giftun →
Ras Mohammed depths) is not built — the ledges are depths, not yet
places. Not tested on a real device.

---

## Phase 2H — depth-zone ladder + pearl album (2026-11-27)

**Ladder.** The four ledges are now the top of a six-rung depth-zone ladder
(10 m label per rung, drawn beside each zone name). The original four are
frozen byte-identical (pinned by a deep-equal test); two deeper zones are
appended in real Red Sea settings, per the master plan's named ladder:
**Giftun Coral Gardens — Hurghada** (pearl 52,000, open 320K) and **Ras
Mohammed Sunken Temple** (pearl 210,000, open 900K). The curve is gentler
than the old steps (pearl ×4 per new zone vs ×5 before; clam time +0.3 s a
zone). Zones now unlock **in sequence only** — `cost('area')` returns null
for any rung that is not the next one, so cash can no longer skip a rung.
The rival goal (1.5M EGP) never moved. Renderer colour tables (rock strata,
water gradients, clam colours) were extended by append for rungs 5–6.

**Pearl album.** A menu-reachable «ألبوم اللؤلؤ / Pearl album» (ocean_defense
guide pattern, stricter): one card per zone, derived purely from the save
by `pearlAlbum(save)` in the sim. Earned cards show icon + Arabic/English
name + a true one-line Red Sea fact (ar+en, display-only) + depth. Locked
cards are silhouettes (🦪 shadowed, «؟؟؟») and the derivation returns
`fact: null, ar: null, en: null, icon: null` for them — a test asserts the
locked fact text appears nowhere in the locked entry. The save gains an
append-only `zones` list (opened rungs), recorded when a rung opens and at
the win, through the existing save channel — no new persistence.
**Migration:** old saves have no `zones`; a finished old campaign
(wins > 0) is credited exactly the original four zones, an unfinished one
gets none (no invented progress); damaged lists are filtered to real ids
and de-duped. All pinned by tests.

**Tests.** `npm test` 15/15 (was 8): freeze of the original four ledges +
goal, gentle-curve bounds, sequential-unlock chain (no skipping even with
1e9 cash), old-save migration cases, recordZone append-only semantics,
album earned/locked derivation incl. the no-fact-leak assertion, and a
scripted **first→last campaign proof**: a ladder-first robot (saves toward
the next rung, spends only surplus) opens reef → cave → abyss → giftun →
ras_temple in order and wins in **212 s** of game time. The original plain
robot still wins in **191 s** off the old zones — the ladder is an
invitation, never a gate on winning.

**Playtime (honest labels).** Robot figures are sim-measured above. Child
figures are a *model*: the robot taps optimally every ~0.33 s and buys
instantly; at a ×4 child factor the full ladder climb models to ≈14 min
(212 s × 4), and a plain win to ≈13 min — close to the plan's ≈20 min
ambition but not padded up to it.

**Build/verify.** `npm run build` green, game.js 67,635 bytes (≤ ~200 KB).
`phase2h_verify.mjs pearl_divers` PASS, 0 page errors, frames at 844×390 /
1024×768 / 1366×1024; seeded captures eyeballed: album locked (all
silhouettes), album seeded (4 earned + silhouettes, facts/depths render),
deep ladder (all six rungs open, new-zone hire/upgrade prices live).

**Not done / not tested.** Album facts are screen-only until the owner's
voice clips land (lines listed in the Phase 2H fragment, "Add to instinct").
No real-device test. The new zones reuse the existing in-repo water/coral
art and code-drawn dressing — no new pictures were generated.

---

## Director Protocol — full certification (2026-11-27)

Harness: `~/tools/recorder/pd_protocol.mjs` (real mouse clicks for Play/buttons,
canvas tap point taken from the game's own `_lay()`, Space after blur, staged
mid/end dive phases because headless game-time runs ~6× slow under SwiftShader).
Frames: `~/workspace/projects/audit/protocol_frames/pearl_divers/<cycle>/` —
per cycle: menu, album fresh + seeded, every zone start/mid/end, win card and
album-on-reloaded-save at 844×390, 1024×768, 1366×1024 and portrait 390×844
(92 frames per full cycle), each cycle with a `results.json`.

### Level table — the 6 depth zones are the levels

| # | Zone (depth) | Design / loop | Background (must differ) | Difficulty | Elements |
|---|---|---|---|---|---|
| 1 | Shallows ضحلة (10 m) | tap→dive→clam→basket→bell→sale; HIRE + x3 on the ledge | **sand_garden**: bright sand banks, starfish, orange fish school, strong light rays, water_a art | clam 1.4 s, pearl 100, hire 1.5K, up 2.4K | your diver (tap), clam, basket, bell |
| 2 | Coral Reef الشعاب (20 m) | same loop, second ledge opens for 3K | **coral_branch**: tall orange staghorn coral + purple anemones, water_a art, weaker rays | clam 1.7 s, pearl 520, hire 9K, up 12K | + branching coral, anemones |
| 3 | Pearl Cave كهف اللآلئ (30 m) | same loop, opens for 16K | **cave_arch**: stalactite ceiling, big dark cave mouth behind the clam, glowing crystals, dark overlay, water_b art | clam 2.0 s, pearl 2.6K, hire 45K, up 60K | + cave mouth, crystals (no coral/rays) |
| 4 | The Deep الأعماق (40 m) | same loop, opens for 80K | **glow_deep**: near-black overlay, two glowing jellyfish, pulsing plankton dots (no coral, no rays) | clam 2.4 s, pearl 13K, hire 220K, up 300K | + jellyfish, plankton |
| 5 | Giftun Coral Gardens — Hurghada (50 m) | same loop, opens for 320K | **garden_fans**: big pink/purple/orange sea fans with ring lines, turtle + dolphin silhouettes, `_reef` garden | clam 2.7 s, pearl 52K, hire 800K, up 1.1M | + sea fans, turtle, dolphin |
| 6 | Ras Mohammed Sunken Temple (60 m) | same loop, opens for 900K | **temple_ruins**: two standing sandstone columns, a fallen column, a pediment triangle, stone blocks, sandy overlay | clam 3.0 s, pearl 210K, hire 2.4M, up 3.2M | + columns, pediment, ruins |

Zones also differ in challenge, not just prices: clam time rises 1.4→3.0 s,
hire/up costs and pearl values follow their own curves, and each zone's
dressing changes what the child looks at while diving. Winning: earnings reach
the fixed rival fortune 1.5M EGP (RIVAL_GOAL never moved). **There is no fail
state** — sim state is only `play`/`won`, no timer, no oxygen/air pressure,
nothing is ever lost (verified in sim + robot runs). The open owner question
(should winning require the full ladder / should RIVAL_GOAL move) stays
**OPEN** — untouched by this pass.

### What was wrong (Cycle 1 = Phase 2H + protocol inventory audit)

- ❌ **Background sameness**: all six zones shared the same water art
  (water_a for zones 1–2, water_b for 3–6) and the *same* `_reef` dressing;
  only the gradient tint and rock colour differed. Two zones looked
  near-identical — a hard ❌ under the protocol.
- ❌ Not covered by Phase 2H: per-zone frames at 4 sizes, portrait, 4×-CPU fps.

### Fixes (my decisions, code-drawn only, zero new files)

1. `ZONE_THEMES` in the sim: one unique motif + overlay tint per zone, in
   LEDGES order, pinned by tests. The renderer gained a `_zoneDress` pass
   drawing each motif in code (sand/starfish/fish school; staghorn + anemones;
   stalactites + cave mouth + crystals; jellyfish + plankton in near-dark;
   sea fans + turtle + dolphin; temple columns + pediment + fallen column).
   Light rays now fade with depth and are gone in the abyss; the generic reef
   dressing only remains in zones 1, 2 and 5. Presentation only — zones 1–4
   gameplay stays deep-equal frozen (freeze test green).
2. ❌ found in Cycle 2 frames: the x3 shop button overlapped the HIRE button
   and covered its label at 1024×768/1366×1024. Fix: buttons moved below the
   zone-name band (rowH 0.10→0.17) and the x3 button is placed after the HIRE
   button's *measured* width.
3. ❌ found in Cycle 4 frames: at 844×390 the x3 button still overlapped HIRE
   (a column-width cap in fix 2 forced it back). Fix: the only cap is now the
   screen edge — on the narrow landscape column the button spills over the
   open water beside the column instead of covering text.

Commits (local, ai/moss-work): bfdc293b (ZONE_THEMES + tests), abcbc350
(dressing + button placement), aeba54d8 (narrow-landscape button cap).

### Cycles (evidence in each cycle's results.json + frames)

- **Cycle 2** (first full protocol run, dressing in, button fix not yet):
  92 frames, 0 page errors. ❌ automated: canvas-click and Space checks failed
  at the 3 landscape sizes — harness faults (the click point landed on the
  NEW LEDGE button; Space re-triggered the still-focused Play button), fixed
  in the harness, not the game. ❌ eyeball: HIRE label covered by x3 (fix 2).
  One save-reload check flaked at 1366×1024. fps 1.8 @4×.
- **Cycle 3** (after fix 2): 92 frames, 0 errors; all checks pass except
  `save_reload_album_390x844` — a single flake: a dedicated probe of exactly
  that case passed 3/3 at the same size and timings, so the harness check was
  hardened (waitForFunction on the reloaded save + one retry). Eyeball ✅:
  temple pediment/columns, Giftun fans, cave mouth, seeded album, portrait
  win card all correct. fps 1.2 @4×.
- **Cycle 4** (harness hardened): automated ✅ — every check at all 4 sizes,
  92 frames, 0 errors. But eyeball ❌ at 844×390 (x3 still covering HIRE) →
  fix 3. A cycle with an eyeball ❌ does not count as clean. fps 1.5 @4×.
- **Cycle 5** (after fix 3): ✅ **CLEAN** — 92 frames, 0 page errors, every
  automated check at all 4 sizes (zone opens in sequence, canvas click tap,
  Space tap, audio ctx `running` after first touch, win card, replay after
  win, return to menu, album fresh/seeded/reloaded-save), eyeball ✅ incl.
  the fixed 844×390 buttons side-by-side with full labels. fps 1.8 @4×.
  Voice requests logged from real clicks: ar `go`, `pickup`, `charge` clips.
- **Cycle 6** (final, from scratch): two full attempts were aborted by
  infrastructure, not the game (browser ProtocolError at 58 frames; a runtime
  restart at 44 frames — no game errors in the partials). Completed in two
  halves with identical harness/settings: 6d_a (844×390 + 1024×768: 46
  frames, 0 errors, all checks ✅) and 6d_b (1366×1024 + 390×844: 46 frames,
  0 errors, all checks ✅, voice `win_1.mp3` also fired). ✅ **CLEAN** —
  second consecutive clean round. fps 0.6 @4× in this run (see perf note).
- **Final review as if new**: menu (844×390), fresh album (portrait, all six
  silhouettes + depths + back button), temple zone (portrait: pediment,
  columns, fallen column; fans and jellyfish in the bands above) re-eyeballed
  from cycle-6 frames — nothing off-screen, no covered buttons, no cut text,
  no dead background. ✅

**Verdict: PASS** — two consecutive clean rounds (Cycles 5 and 6), 6 cycles
run in total. Background differentiation: ✅ every zone has a distinct,
nameable background (table above), confirmed by cross-zone frame comparison
at all four sizes.

### Numbers

- Tests: `npm test` **17/17** (was 15; +2 Director-Protocol tests: unique
  motif/overlay per zone in LEDGES order; renderer draws every motif).
  Zones 1–4 deep-equal freeze test still green; RIVAL_GOAL unchanged.
- Robots (sim): plain robot wins in 191 s; ladder-first robot opens
  reef→cave→abyss→giftun→ras_temple in order and wins in 212 s.
- Build: `npm run build` green, game.js 72,665 bytes. No new files anywhere
  (demo file budget respected — all dressing is code-drawn).
- Performance: fps @4× CDP throttling in headless SwiftShader across cycles:
  1.8 / 1.2 / 1.5 / 1.8 / 0.6. These are *environment-bound lower bounds*:
  the VM (1.5 shared CPUs) was running several agents in parallel, and an A/B
  probe on the same build measured 1 zone vs the full 6-zone ladder as
  identical (3.5 vs 3.5 fps unthrottled; 1.1 vs 1.0 @4×) — the new dressing
  and ladder add no measurable per-frame cost; the pre-existing full-canvas
  painting dominates (Phase 1 recorded 10.4 @4× for this game on a quieter
  machine). No per-frame object rebuilds were added: dressing is
  immediate-mode canvas primitives at deterministic positions.

### غير مؤكد (unverified)

- Real-device play (phone/tablet WebView, real iPhone audio unlock) — not
  tested; all frames/fps are headless SwiftShader.
- Audio *heard by ear*: the AudioContext is `running` after the first real
  click at all 4 sizes and the voice-event clips (go/pickup/charge/win) are
  verifiably requested over HTTP when their events fire, but no human has
  listened to this build.
- fps on real hardware (see the perf note — only a comparable lower bound
  exists).
- The hire button's Arabic label renders in a lighter weight than the x3
  label in frames; it is fully visible and readable in every cycle-5/6
  frame, but it has not been judged on a real device screen.
