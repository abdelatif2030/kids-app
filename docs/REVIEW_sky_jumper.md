# Review: Sky Jumper («النطاط»)

An original Doodle-Jump-like climber (notebook paper, green creature, platforms, springs, jetpack/propeller, silly monsters). 2D canvas, art and sound in code.

## 2026-11-20: generated pictures (AI Horde)
- Added `assets/games/sky_jumper/art/`: `hero.webp` (lime creature with pink ears, cut out, faces right, drawn centred on the old body position and wrapped at both edges like before) and `monster.webp` (purple bat-winged blob). About 40 KB. Loaded optionally with `cozy_kit/art.js`; if a file is missing the old code drawing is used. Gameplay, hitboxes and sim unchanged.
- Hooks exist for `platform_grass`, `jetpack`, `propeller` but no good picture came out (the free generator ignored the white background or the safety filter blocked them), so platforms, springs and power-ups stay code-drawn.
- Cut-outs were made with a border flood-fill that tolerates a flat coloured background (`tools/process_art.py` only handles white backgrounds).
- Checked in headless Chrome (430x800): menu and real play (drag steering) show the hero clearly on the notebook grid, correct size vs platforms, no console errors (font 404 only because of the test server root), 61 fps in the headless renderer. The monster was not seen in the play run (none appeared), only checked as a cut-out picture. `npm test` 4 pass.
