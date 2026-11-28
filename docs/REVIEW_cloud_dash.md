
---

## Phase 2D — Egypt anchor: «ركضة فوق مصر / Dash Over Egypt» (2026-11-27)

**What was wrong:** a generic "Cloud Dash" — ten numbered levels under
no sky in particular.

**What changed (names only — specs, generation, saves untouched):**
- Title: «ركضة السحاب / Cloud Dash» → **«ركضة فوق مصر / Dash Over
  Egypt»**.
- New `SKIES` table in the sim: the ten levels now run Cairo → Giza →
  Nile Delta → Alexandria → Red Sea Coast → Sinai → Siwa → Western
  Desert Oases → Luxor → Aswan. The sky name is announced on the
  level-start toast and shown in the HUD level label in both languages.

**Tested:** `npm test` 8/8 (+1 anchor test: ten named skies, clamping,
level lengths unchanged); build green; real click-flow verify PASS —
menu title, HUD reading "Level 1 · Cairo Sky", frames at 3 sizes,
0 page errors.

**Honest notes:** the skies are names today — each sky does not yet have
its own palette/landmark dressing (that is the Batch F "5 worlds × 4"
work). The runner's 3-hearts rule is the owner's design and was not in
this game's plan row; left as-is. Not tested on a real device.

## Phase 2E — Batch F: per-sky palettes (2026-11-27)

**What was wrong:** the ten skies were names only — one gradient, one fog
colour (0xf6c8ea), one light rig for every run, so «سماء أسوان» looked
exactly like «سماء القاهرة».

**What changed:**
- `sim.js`: a `PALETTES` table beside `SKIES` (same order), with
  `paletteOf(n)` / `skyIndexOf(n)` clamping exactly like `skyOf` — the
  palette and the HUD/toast name can never disagree, including runs past
  level 10. Each palette carries sky gradient top/mid/bottom, fog,
  hemisphere sky/ground + intensity, sun colour + intensity, cloud tint,
  backdrop tint and track ground tint. Moods: Cairo hazy gold, Giza desert
  amber, Nile Delta fresh green-blue morning, Alexandria bright sea teal,
  Red Sea turquoise over coral, Sinai rose dawn, Siwa emerald + gold,
  Western Desert pale chalk, Luxor deep gold late afternoon, Aswan Nile
  blue + granite rose — one pastel-cartoon family, ten distinct hues.
- `main.js`: `_applySky(n)` at run start (and in the menu, under the sky
  Play will start in) sets fog, both lights, the puff clouds' tint and the
  track tiles' ground tint, and repaints the background. Gradient textures
  are cached per sky (≤10 tiny 4×256 canvases). Zero per-frame cost —
  nothing in the render loop changed.
- Backdrop: the game's art folder holds only `bg_sky.webp` — no per-sky
  backdrop images exist to wire. The painted backdrop is therefore kept in
  every sky and multiplied by the sky's tint (+ a whisper of its gradient)
  into a single canvas texture, repainted only on sky change (the previous
  one is disposed). The old `applyBackdrop` call became an equivalent
  in-game texture load so the tint can be painted; if the picture is
  missing, the sky's gradient shows, as before.

**Tested:** `npm test` 12/12 (+4: every palette complete with valid
colours; palettes pairwise distinct in top+fog; palette↔name alignment
for runs 1..10 and clamped beyond; robot completes full runs on skies 1,
5 and 10 — and the existing robot suite still finishes all 10 levels).
Build green (game.js 120.7 KB, shared three engine). Real click-flow
verify PASS, 0 page errors, 3 sizes. A probe through the game's own level
grid captured skies 1, 5 and 10 and read the live scene back: fog, lights
and cloud tint match the palettes exactly and the HUD names agree.
Eyeballing the frames: Cairo is a warm peachy-gold haze, the Red Sea
Coast a fresh mint-turquoise wash, Aswan a calm periwinkle Nile blue —
clearly different skies, with the painted balloons, lollipops and clouds
intact in all of them.

**Honest notes:** playtime is unchanged by this task — the master plan's
10 authored set-pieces + endless expedition (≈25 min) are still a
leftover; this slice was the per-sky look only. Skies 2, 3, 4, 6, 7, 8, 9
are covered by the unit tests and the shared `_applySky` path rather than
individual screenshots. Not tested on a real device.
