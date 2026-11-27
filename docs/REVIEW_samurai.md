# REVIEW — samurai → «حارس المعبد / Guardian of the Temple»

## Batch E — Egypt identity reskin (2026-11-27)

Full reskin on the proven wave/boss sim. Mechanics, waves, balance, hitboxes, model proportions, animation
timings and the robot tests' behaviour are unchanged; identity, colours, shapes, names and sound changed.
Internal sim kind ids (`ninja`/`big`/`thrower`), the save key (`samurai`) and the `window.SamuraiAction` API
name were deliberately kept — the Flutter shell and `boot.js` call them by those names.

### What changed
- **Text / i18n (`src/i18n.js`)**: title «حارس المعبد / Guardian of the Temple»; hero pick «مين حارس المعبد؟»;
  stage names for all six stages — ساحة المعبد — الصبح / Temple courtyard — morning, قاعة الأعمدة — الغروب /
  Hypostyle hall — sunset, سطح المعبد — الفجر / Temple roof — dawn, ساحة المعبد — بالليل (night), قاعة الأعمدة —
  بالمشاعل (torchlight), سطح المعبد — الشروق (sunrise). (This also fixes a latent bug: stages 4–6 previously
  had no name keys and rendered the literal key `s4`/`s5`/`s6`.) Boss is «التمثال العملاق / The giant statue»
  («التمثال العملاق صحي! / The giant statue woke up!»); kill counter counts لصوص / raiders; how-to line names
  the khopesh; win/lose lines kept in the same gentle tone («ولا يهمك! جرّب تاني»).
- **Hero (`makeGuardian`)**: khopesh — a true curved sickle blade (extruded silhouette, gold-glow bronze)
  replacing the katana; white linen tunic + gold belt + teal sash (Adam) / teal tunic + white sash (Nour);
  nemes-style headcloth (gold with teal band / teal with gold band) with side and back flaps and a small sun
  disc; the kids' faces, eyes, brows and smile are the originals.
- **Enemies (`makeRaider`)**: shadow raiders / tomb robbers — dark sandstone-and-linen browns, wrapped
  headcloth with a lower-face wrap (no ninja hoods), worn red sash, bronze daggers. Big raider = darker wrap,
  same 1.4× build. Throwers fling **spinning scarabs** (`makeScarab`: gold body, teal wing shells) instead of
  shuriken — mechanically identical, and still cuttable mid-air.
- **Boss (`makeGolem`)**: the red oni is now a giant stone golem — a temple guardian statue that wakes up.
  Grey/sandstone stone palette, gold belt with dark glyph stripes, carved stone cap, gold headband with a sun
  disc, glowing amber eyes, pharaonic false beard. **No horns, no fangs, nothing demonic.** The club is a
  stone pillar with gold knobs (not spikes); slam/sweep/charge patterns untouched. Boss bar icon 👹 → 🗿.
- **Particles**: petal bursts → golden sand sparkles (four-point mote shape, gold/amber/cream palette);
  ambient cherry petals → drifting golden sand/sun motes; dash trail recoloured gold.
- **Arena & backdrops (code-drawn)**: torii gates → pylon gates (tapered sandstone pylons, teal band, gold
  sun disc); the Japanese temple → a Pharaonic temple (colonnade with teal capitals, side pylons, obelisks
  with gold pyramidions, flat roof, great sun disc); cherry trees → date palms; stone lanterns → braziers;
  grass surround → sand; arena floor texture redrawn as sandstone tiles around a great sun disc with rays.
  Stage moods retuned: morning gold → sunset → dawn → night → torchlight dusk → sunrise.
- **Audio (`src/audio.js`)**: melodic scale retuned from D miyako-bushi to **D Hijaz**
  (`SCALE` [62,63,66,67,69, 74,75,78,79,81] — same array shape, every index/pattern unchanged, so this was a
  one-constant, zero-risk change); KOTO→OUD and FLUTE→NAY naming; battle drums softened toward a duff
  frame-drum feel (lighter volumes, higher pitch; the golem's slam/roar booms kept deep on purpose).
- **Docs**: `docs/SAMURAI_ACTION.md` reframed to Guardian of the Temple; its stale claims fixed (it said
  "three stages" — the code has always had six; it said `npm test` (10) — the suite has 13).

### Panorama verdict — pano1..pano5.webp (all viewed, ~5 MB total)
| File | What it depicts | Decision |
| --- | --- | --- |
| pano1.webp | Red **torii gate**, Mt **Fuji**, cherry blossom, red arched bridge, pagoda shrine | Left unused |
| pano2.webp | **Bamboo grove**, Japanese pavilion with cherry-blossom banners, stone lanterns | Left unused |
| pano3.webp | Japanese **castle** (Himeji-style) at night, cherry blossom, full moon, red bridge | Left unused |
| pano4.webp | **Torii gate** + shrine, Mt **Fuji**, autumn maples at sunset | Left unused |
| pano5.webp | Japanese wooden house/dojo at night, sky lanterns, cherry blossom | Left unused |

All five are explicitly Japanese scenes — none fits a Pharaonic temple or a neutral landscape, so none was
wired in. **Tension, stated plainly:** the master plan (§3/§4 Batch B) suggested deleting these ~5 MB of
unused panos, but the owner's standing rule forbids deleting his art — so they stay in
`assets/games/samurai/art/` untouched and unused until he decides. The same treatment was applied to the old
painted cut-outs (`hero/slash/dash/win/ninja_blue/ninja_green/ninja_purple/oni.webp`): they are literal
pictures of a samurai, blue/green/purple ninjas and a red horned oni, so `main.js` no longer loads them and
the reskinned code models always render; the files remain on disk untouched. (The folder also still carries
`win.webp`, `dash.webp` etc. — untouched.)

### Tests & verification
- Baseline `npm test`: **13 pass / 0 fail**. After the reskin: **13 pass / 0 fail** (test titles reworded to
  guardian/raider wording; no assertion or robot behaviour changed).
- `npm run build`: built `game.js` = **148.4 KB** (inside the ≤200 KB fleet budget).
- Real click-flow verify (`~/tools/recorder/phase2cE_samurai.mjs`, own script; the shared
  `phase2c_verify.mjs` was not edited): **9/9 checks pass** — menu shows «حارس المعبد», all six stage names
  asserted, stage 1 started by clicking the real stage node, **audio unlocked by the gesture**
  (`sound.on === true`), wave 1 running with raider models on stage, hero confirmed as the code guardian
  (khopesh sword group present, not a painted cut-out), **zero page errors**. Frames captured at 844×390,
  1024×768, 1366×1024 in `~/workspace/projects/audit/shots_phase2c/samurai_*.png` and eyeballed: guardian in
  gold nemes + white linen holding the curved khopesh, dark-wrapped raider (not a ninja), sandstone arena
  with sun-disc floor, temple colonnade, palm and pylon gate visible.

### Honest gaps
- The reskin is presentation-only by design: stages are still one circular arena recoloured per mood (the
  master plan's "9 stages across 3 temples / sun-disc shield" is Batch F content work, not done here).
- The golem/raider/guardian were verified in stills at wave 1 and by the robot's full 6-stage wins; the boss
  fight itself was not screenshot-verified in this pass (robot wins stage boss fights in tests, incl. golem
  patterns via the unchanged sim).
- Hijaz retune and duff softening were verified by code inspection and zero-error boot, not by ear.
- ~5 MB of panos + the old painted cut-outs remain in the built folder unused (owner's art, owner's call) —
  the folder is over the plan's ≤5 MB target until he rules on them.
- Voice clips are the pre-existing generic encouragement set (trick/bump/lap/near/win/lose/count); no new
  lines were needed for the reskin — the boss banner is text-only. If the owner wants a spoken golem line,
  the candidate is listed in the worker report.
