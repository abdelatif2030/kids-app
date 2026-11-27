# Review: «جيش المعبد» Temple Army vs the original video (brief #29)
Video: 370x612 portrait, 36 s. Compared by ffmpeg frames and by playing the build in headless Chrome (370x612, software GL).

## What the original does
Tilted top-down 3D camera following a crowd of tiny blue warriors; floating joystick (white ring + knob); a plain white army number over the crowd; sandy stone temple floor with green moss patches, low walls; stone arch gates with a glowing yellow x10 and white +5 boards; spike plates, cages, red hordes; HUD = coin pill (left), goal pill ("Pick the stronger gate" / "Smash the Brute") with a boss HP bar, round sound button; fail card "Almost there! Your army fell. Try again!".

## Differences found
1. Level 1 was a dark green hedge maze; the original is warm sand.
2. A blue army pill sat in the HUD and a blue pill over the crowd; original has only a white number over the crowd.
3. A minimap (not in the video).
4. The goal pill showed the temple name instead of the goal text.
5. Gates are floating coloured banners (x2 / +4 / -3 in a row) instead of stone arches with glowing numbers.

## Fixed (game_src/temple_army)
Level 1 theme sand/gold; plain outlined white number over the crowd; army pill and minimap removed; goal pill shows "اختر البوابة الأقوى" and switches to "حطّم الوحش" in the boss fight. `npm test` 17/17, build ok, no console errors.

## Still different
Stone-arch gate models; walls still show green moss tops; HUD has a pause button where the video has a sound button; other levels keep their own themes; no progress bar under the goal pill. Headless software GL loses the WebGL context after ~10 s, so long play was checked only by the node bot tests.

## Batch E — Egypt identity: «حرّاس الكرنك / Guardians of Karnak» (2026-11-27)

Naming + hieroglyph art pass only. **Zero sim changes**: `src/sim.js`, `src/crowd.js` and `src/bot.js` are byte-identical to before this batch (verified with git diff); mechanics, numbers and bot behaviour untouched. Only name strings, theme colours, and visual art changed.

### What changed
- **Game title** renamed everywhere it is displayed: menu logo i18n (`src/main.js` `S.title`) now «حرّاس الكرنك / GUARDIANS OF KARNAK», and the standalone page `<title>` in `assets/games/temple_army/index.html` matches. The Dart registry (`lib/`) and pubspec were NOT touched, per instructions.
- **Level names mapped onto real temples** (there were exactly 6 levels, so the plan's six map 1-to-1, in order):

  | # | Before (AR / EN) | Now (AR / EN) | Theme tint |
  |---|---|---|---|
  | 1 | بوابة الطحالب / Mossy Gate | معبد الكرنك / Karnak Temple | warm sandstone, blue sky (was green) |
  | 2 | قاعة الأشواك / Spike Hall | معبد فيلة / Philae Temple | Nile-island sandstone + teal accent |
  | 3 | عرين الوحش / Brute's Den | معبد إدفو / Edfu Temple | desert gold |
  | 4 | ممرات المناشير / Saw Corridors | معبد أبو سمبل / Abu Simbel Temple | Nubian rock orange-gold |
  | 5 | المعبد المتشابك / Vine Temple | معبد الأقصر / Luxor Temple | dusk violet + gold |
  | 6 | عرين العملاق / Golem Arena | معبد دندرة / Dendera Temple | star-ceiling blue |

  No invented temple names. Level-select cards and the level-intro hint now show these names (the intro hint is prefixed with the temple name, e.g. «معبد الكرنك · اسحب لتحريك القائد…»).
- **Hieroglyph art pass** (`src/art.js`, code-drawn only — no new image files, no external assets, no Unicode-font dependence):
  - New `drawGlyph()` draws seven simple Egyptian motifs with canvas paths: sun disc, ankh, Eye of Horus, scarab, feather, water zigzag, was sceptre.
  - `glyphBandTexture()` (cached, rendered once) is a gold hieroglyph frieze now mounted across **every gate lintel** (`makeGate`) and the **exit lintel** (`makeExit`).
  - Faint carved glyphs are stamped onto ~16% of floor slabs inside the existing `floorTexture()` canvas (build-time only; clearly visible in the verify frames — Eye of Horus, water and feather glyphs read well).
  - `scarabTexture()` (cached) puts a scarab emblem on the **captain's shield** (`makeCaptain`).
  - Wall caps in `main.js` now take a sandstone tint derived from the level theme instead of the old green moss colour, so Karnak reads as a sandstone temple (floor moss patches remain, as in the original reference video).
  - Performance: all glyph work is pre-rendered into two cached canvas textures plus the existing per-level floor texture. No per-frame allocations, no geometry rebuilds.
- **Tests**: baseline 17/17 → **19/19**. Added a test asserting the six level names (AR + EN) are exactly the real temples with Karnak first, and a kind-rule test (below). `npm run build` succeeds.

### Kind-rule check (Batch C item) — PASS, no changes needed
- **Negative gates stay kind**: in `sim.js`, `applyGate` floors the army at 1 for both `−` and `÷` gates (`Math.max(1, …)`), so a bad gate choice can shrink the army but can never wipe it out by itself. Every gate fork offers at least one growing gate (`×` or `+`), and gate labels are shown before the choice — a kind path always exists. Both facts are now locked in by the new automated test.
- **Losing the army is a gentle retry, not a punishment**: when the run is lost, `finish(false)` keeps half the coins collected during the run (`Math.floor(coins/2)`), unlocks/stars/best scores are never reduced, and the end card («خسر الجيش») shows an encouraging tip («جرّب بوابات أحسن وحرّر الأسرى!») with an immediate one-tap restart of the same temple plus a Home button. There is no harsh game-over screen, no timer, no lives system, and no loss of prior progress.

### Verification (real click flow, audio unlocked)
Own script `~/tools/recorder/phase2cE_temple_army.mjs` (pattern copied from `phase2c_verify.mjs`; the shared harness was not edited). Standalone page, real LEVELS → back → PLAY button clicks: **ALL PASS** — menu shows «حرّاس الكرنك» and not the old title; level cards list the six real temples in order; level 1 starts in `play` state with the intro naming Karnak; audio context `running` and unlocked by the click flow; **zero page errors**. Frames captured at 844×390, 1024×768 and 1366×1024 (plus menu and level-select frames) in `~/workspace/projects/audit/shots_phase2c/temple_army_*.png` and eyeballed: sandstone Karnak, carved floor glyphs visible, gates labelled, captain with gold helm at spawn.

## Phase 2G — 2-floor Karnak + procession finale (2026-11-27)

The Batch E remainder item, implemented append-only: **levels 6 → 8**, the original six levels byte-identical (locked by an FNV fingerprint freeze test).

### Design choice: what "2 floors" means in this engine
The engine is a flat 2D grid with a flat floor plane — there is no z-level/elevation system, and adding one would mean rewriting collision, the crowd trail, the camera and every boss/telegraph. The smallest honest implementation is **two stacked maps in one level def** (`floors: [ground, upper]` on level 7, «الكرنك من طابقين / Karnak: Two Floors»):

- A new staircase tile `T` (one per floor, rendered as three gold-trimmed stone steps). Stepping on it swaps the active floor: the whole army, coins and time carry over untouched; each floor was parsed once at run start and keeps its own gates/cages/hordes state, so going back downstairs is consistent. A latch prevents an instant bounce — you must step off the stairs before climbing again.
- The ground floor has **no exit** — growing the army downstairs (cage of friends before the fork, a ×2 fork, a small 25-crowd, a +6 cage room) is only half the temple; the exit is upstairs, past a second fork (×3/+15/−6), a +25 cage and a 40-crowd. The renderer rebuilds the stage on the `floor` event and floats «⬆️ الطابق العلوي».
- The bot learned one new rule: when nothing on this floor is reachable/left, path to the staircase. Simpler than a z-level, and it reads clearly to a child: a staircase you walk onto, a burst of stars, a new floor.

### Procession mode → a procession finale level (honest scope)
A separate non-combat *mode* would be disproportionate here — the crowd-follow system already IS a march. So the procession is level 8, «موكب الحرّاس / Guardians Procession», flagged `procession: true`: a wide festival avenue to the Karnak gate with **zero hazards** (no hordes, no traps, no saws, no boss — asserted by test), **every gate grows the crowd** (+6/×2/+10, then ×2/+15/×3), cages are friends joining the parade, and coins are celebration pickups. It cannot be lost; stars come only from how many marchers reach the temple. It is also the campaign finale in the unlock chain (win 7 → unlock 8).

### Kind rules
No timers, no lives, no new defeat paths. Level 7's two crowds use the existing gentle clash (a lost clash is the game's long-standing soft retry, unchanged). Level 8 cannot be lost at all. Negative gates still floor the army at 1 (Batch E rule, untouched).

### Tests / build / verify
- `npm test` **26/26** (was 19/19): +7 Phase 2G tests — freeze fingerprint of the original six, 2-floor structure (one staircase per floor, no ground exit), staircase carry-over + no-bounce, scripted bot completion of level 7 via the upper floor, procession hazard-free/all-growing completion, full first→last campaign unlock chain, old 6-level save migration (progress kept, new levels appended; a finished old campaign unlocks level 7, not 8). Two pre-existing generic tests were re-scoped, not weakened: S/E counting and solvability now span both floor maps of a `floors` level.
- `npm run build` green; built `game.js` 152,022 → **156,072 bytes** (+4.0 KB, cap 200 KB). No per-frame work added: floors are parsed once at run start; the switch is a tile check per tick.
- `phase2g_verify.mjs temple_army` → **PASS, 0 page errors** (real menu clicks, audio unlocked, 844×390 / 1024×768 / 1366×1024). Seeded bot captures in `audit/shots_phase2g/`: ground floor (`temple_army_karnak2f_ground_b.png`), upper-floor arrival up the gold steps facing the ×3 fork (`temple_army_karnak2f_upper_arrival.png`), upper floor with the grown 98-crowd near the exit (`temple_army_karnak2f_upper_exit.png`), procession avenue (`temple_army_procession_mid.png`) — all eyeballed.

### Playtime (honest, stated method)
Scripted best-gate bot (`playLevel`, sim seconds, collects optionals): campaign **165.4 s → 207.1 s (+25 %)**. Level 7 alone 25.7 s (98 survivors, 3★), level 8 alone 16.0 s (102 marchers, 3★). This is bot time, not child time — a child exploring both floors will take several minutes; the Batch E plan's ≈35 min campaign figure is **not** met by this item alone and is not claimed.

### Honest gaps
- The two floors are stacked *maps*, not a visible 3D storey: you never see both floors at once, and the staircase is a walk-on tile with a star burst, not a climbing animation.
- The procession is a finale level, not a reusable mode toggle; making it a mode would need a menu/state machine change out of proportion to the payoff.
- Browser bot play under SwiftShader runs far slower than real time; the upper-floor frames were captured by polling a real bot run (coins 0→8 across both floors), not by a scripted teleport.

### Honest gaps
- The gate-lintel glyph frieze sits high in the frame at spawn (the first gate row is near the top edge in landscape), so it is only fully seen when approaching gates mid-level; the floor glyphs and exit frieze carry the identity at spawn.
- The scarab on the captain's shield is small at gameplay zoom — a tasteful emblem, not a hero detail.
- The plan's extra ideas (2-floor Karnak with sacred lake, procession mode, ≈35 min campaign) were NOT implemented — they would require sim/level changes, which this batch explicitly forbids.
- No new voice lines were needed: the existing VoiceCoach clips are event-based (charge/win/lose/…) and contain no game- or level-name mentions.
