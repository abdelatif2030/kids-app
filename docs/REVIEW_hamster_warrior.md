# Review: «الهامستر المحارب» Hamster Warrior

## 2026-11-20 — generated pictures inside the game
- Pictures (AI Horde, free; jobs in `tools/art_jobs/hamster_warrior.json`, cut by `tools/process_art.py hamster_warrior`, WebP in `assets/games/hamster_warrior/art/`, about 310 KB in all): 3 backdrops (`sky_1..3`, one per chapter, shown behind the forest), 3 bosses (`boss_1..3`: mushroom, stone golem, dragon) and now also the 3 common monsters (`monster_1..3`: green blob, red mushroom, purple imp). Monster type 0/1/2 of `sim.js` uses `monster_1/2/3`.
- `src/main.js`: `makeCreature(type, seed, img)` draws a billboard sprite (height 2.3, same bob animation) when the picture loaded; with no picture it draws the old code-made creature, so the game still works if a file is missing. Hit boxes, powers, pills and sim are untouched. Textures are cached per image.
- The hero stays code-drawn: the generator could not give a back view (the one try, `hero_back`, was a side view with a watermark and a blue background).
- The original video file for this game is not on this machine, so the style was matched to the toy-like 3D look already in the game, not frame by frame.
- Checked: `npm run build`, `npm test` (6 pass); headless Chrome (software GL) at 844x390: menu, chapter 1 (green blobs), chapter 2 (pink forest, red mushrooms), chapter 3 (purple imps) with real mouse drag; sprites sit on the path, the number pills and the hero are not covered, no console errors. Frame rate in headless software rendering is 5.8 fps both with and without the art folder (no measurable difference).
- Looks off: the cut-outs keep a faint grey ground-shadow patch under the feet of some monsters; the boss was not reached in the automated play, only seen in the earlier pass.

---

## Phase 2D — Egypt anchor check: LOG-ONLY pass (2026-11-27)

**No code changed.** Per the master plan this game was already
anchored by its chapter names, and re-checking confirms it: the
chapters are Moqattam Hills → Black Desert → Eastern Mountains (and
on), the hero is «هامي الشجاع / Hammy the Brave», and the shop is in
Arabic-first strings. Tests 6/6; click-flow verify PASS (menu + shop,
frames at 3 sizes, 0 page errors).

**The remaining gap is art, not names:** the plan asks that each
chapter's path *look like* its name (Moqattam's pale cliffs, the Black
Desert's black hills). That is a backdrop/art pass — the game's own
art-batch sheets (where they exist) need the owner's cutting step, so
per the phase rules it is logged here instead of force-wired. Also
noted in Phase 2C: hamster_warrior was one of the games with no audio
files in its folder; it uses the shared synth/voice path — worth an
owner-side listen on a real device.
