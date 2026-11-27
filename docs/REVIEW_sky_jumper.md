# Review: Sky Jumper («النطاط»)

An original Doodle-Jump-like climber (notebook paper, green creature, platforms, springs, jetpack/propeller, silly monsters). 2D canvas, art and sound in code.

## 2026-11-20: generated pictures (AI Horde)
- Added `assets/games/sky_jumper/art/`: `hero.webp` (lime creature with pink ears, cut out, faces right, drawn centred on the old body position and wrapped at both edges like before) and `monster.webp` (purple bat-winged blob). About 40 KB. Loaded optionally with `cozy_kit/art.js`; if a file is missing the old code drawing is used. Gameplay, hitboxes and sim unchanged.
- Hooks exist for `platform_grass`, `jetpack`, `propeller` but no good picture came out (the free generator ignored the white background or the safety filter blocked them), so platforms, springs and power-ups stay code-drawn.
- Cut-outs were made with a border flood-fill that tolerates a flat coloured background (`tools/process_art.py` only handles white backgrounds).
- Checked in headless Chrome (430x800): menu and real play (drag steering) show the hero clearly on the notebook grid, correct size vs platforms, no console errors (font 404 only because of the test server root), 61 fps in the headless renderer. The monster was not seen in the play run (none appeared), only checked as a cut-out picture. `npm test` 4 pass.

---

## Phase 1 fix review — Moss, 2026-11-27 (commit 34edaa60)

**What was wrong.** The renderer had art hooks for platform_grass / jetpack / propeller, but `loadArt` was only ever called with ['hero', 'monster'] — and no jetpack/propeller/platform files exist in the game's art folder anyway — so power-ups ALWAYS fell back to 🚀/🚁 emoji text, and the flying state drew 🔥/🚁 emoji over the hero.

**What changed and why.** `loadArt` now requests all five names, so if the owner ever ships art/jetpack.webp or art/propeller.webp the pictures win automatically. The fallback is a code-drawn painter, `_item()`, in the game's own cartoon style (twin-tank jetpack with flickering exhaust flames; propeller hat with a spinning-pulsing blade), used both for world pickups and on the creature while flying (jetpack on its back, propeller above its head). No emoji remains in the render path.

**Tested.** npm test 4/4. Browser frames eyeballed at 844×390, 1024×768 and 1366×1024 (~/workspace/projects/audit/shots_phase1/): both pickups read instantly and match the game's style, nothing off-screen, HUD intact; a flying frame shows the jetpack worn on the creature's back; zero page errors at all three sizes. fps 41.2 rAF under CDP 4× CPU throttling, headless SwiftShader — a software-GL lower bound, not a device measurement.

**Not verified.** No real-device test. The menu-card/hero mismatch noted in the fleet audit (the card shows a different hero than the in-game art) is a Phase-2 identity item, not touched here. Hidden-tab behaviour: the shell suspends sound on visibilitychange and rAF stops in hidden tabs with dt clamped to 0.05 s, so a hidden tab cannot fast-forward the climb — established by code reading, not a tab-switch test.
