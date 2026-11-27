# Sunset Highway — AI work log (branch ai/moss-work)

Game: `game_src/highway_race` → built as `assets/games/sunset_highway`.
Work done 2026-11-27 under the owner's "MAKE EVERYTHING ALIVE" brief: turn the game into a
polished, juicy, living racing game for ages 3–6, and above all keep it FAST (the owner felt
the earlier showcase build was slow). This log records what changed, how it was verified,
the performance numbers, and what is still open. Rollback: every step is a separate commit on
ai/moss-work (575776d9, 012065a1, 477692f5, 3b0dcd1f, 7e86e0f2, c28299e5, 8d44ec0f) — revert any
of them, or the whole range, with `git revert`; nothing outside this game was touched except
`game_src/cozy_kit/real_car.js` (used only by this game).

## What changed, step by step

1. **Hero juice** (575776d9) — cartoon squash & stretch, springy suspension kicked by bumps,
   exhaust puffs, gold lane-change sparkles, rainbow nitro flame streaming backwards, DOM
   speed-lines at the screen edges, gentle nitro camera shake, and a bobblehead dashboard
   mascot that blinks and reacts (cheer on overtake, "oops" on bump, wide eyes on nitro).
2. **Traffic & rival personality + draw-call cut** (012065a1) — the rival is now **Barq**:
   a kind taunt at the start, a happy honk when overtaken, and **rubber-banding** (he eases
   off when far ahead, never speeds past his stage pace; easy mode runs him at 84% — a
   deliberately lazy robot still wins, proven by test). Traffic cars bob on their suspension,
   blink indicators, honk politely, police/ambulance lights pulse (new ambulance van), bumps
   are a gentle "boing" with stars circling the car. All static geometry merged
   (vertex-coloured): road segments, palms, rocks, clouds, every wheel (1 draw call), and
   simple one-mesh traffic bodies.
3. **Living world** (477692f5) — checkpoint arch with bunting flags and swaying balloons at
   every 500 m charge line plus a golden finish arch; big friendly "+1 NITRO" pop with a
   happy sting and crowd cheer on every charge; sailboats bobbing on the sea; a striped
   lighthouse with a pulsing lamp; ten bouncing cheering fans; four code-drawn picture
   billboards (sun, star, heart, palm — no text, no brands); a soft sun glow halo; gentle
   fireflies on the night stage; finish fireworks over the road.
4. **Rewards & feelings** (3b0dcd1f) — road star pickups in the sim (seeded, z-sorted) with
   spinning gold star sprites, a rising pentatonic jingle per star and a pulsing star
   counter; milestone surprises at 25/50/75% (a rainbow arcs over the road + a firework);
   bouncy 3-2-1-GO countdown; finish card with a bouncing trophy, pop-in stars and the
   collected-star count; losing shows a gentle "So close! Try again" and the mascot cheers
   either way; a garage in the menu — stage stickers and four hero paint colours (teal,
   purple, gold gifted for finishing stages 2, 4, 6; a gold mascot cap for stage 5),
   persisted in the save. Also fixes a real bug: `normalizeSave` dropped stars for
   stages 4–6 (its loop stopped at 3).
5. **Sound & music** (7e86e0f2) — dynamic layered music: one melody in four arrangements
   (calm triangle → +bass → full square band → nitro sparkle at 148 bpm) following speed
   with hysteresis so it never flaps; very soft tyre squeal on hard lane changes; crowd
   cheer at checkpoints and the finish; a big always-reachable mute toggle in the race HUD
   and the menu (silences music, engine, effects and voice together, persisted). The iOS
   gesture-unlock pattern (pointer/touch/click/keydown → `sound.unlock()`) was verified
   already in place.
6. **UI & controls** (c28299e5) — circular animated speedometer with a gold conic arc;
   nitro charges as three glowing orbs that pulse when a charge lands; the rival dot on
   the progress bar turns gold when Barq is close; touch targets raised to ≥ 52 px (round
   buttons measure 64 px at 900×500); menu/end cards capped at 94dvh with scroll so
   nothing is unreachable on small landscape phones; friendlier pause card.
7. **Audit fixes** (8d44ec0f + the star-rule retune) — slow-device auto-degrade (below),
   the missing `hero.webp` poster for this game (rendered from its own stage 1, 40 KB),
   and a reward-design fix: **the third star was effectively impossible** — it required
   ≤ 2 total bumps while even the robot driver bumps 3–43 times per stage. The rule now
   counts only car bumps (cone taps are stumbles, never counted) against a per-stage
   "gentle" allowance that grows with stage length and traffic (6/11/18/34/52/58). A good
   driver now earns 3 stars on every stage, and a child can earn them on the early ones.

## Performance — the numbers that matter

Measured in Chromium (headless SwiftShader) at 900×500, stage 1 racing, via
`renderer.info`. Headless fps is meaningless on a software rasteriser, so draw calls and
triangles are the comparable budget metrics; the brief's budget is < 150 calls / < 150k tris.

| Metric | Before ALIVE | After step 2 | Final (all steps) |
|---|---|---|---|
| Draw calls | ~1010 | 188 | **192–206** (per stage) |
| Triangles | ~74k | 73k | **36k–75k** (desert is cheapest) |
| Geometries | 247 | 89 | ~102 |
| Textures | 7 | 7 | 10 |

Per-stage audit (driven by an autopilot, 2026-11-27): stages 1–6 all ran with **zero page
errors**; calls 203/204/206/192/204/203, tris 75k/75k/75k/36k/75k/75k.

**Auto-degrade**: real frame time is averaged over 2 s windows (after a warm-up). Above
24 ms average it steps quality down — pixel ratio 1.5 → 1.2 (level 1, birds shed), then
1.0 (level 2, clouds and fireflies shed too). It never steps back up mid-session, so it
cannot oscillate. On a healthy 60 fps device it never triggers.

**Assets**: the whole ALIVE programme added **zero new bundled files** except hero.webp
(40 KB) — everything else is code-drawn geometry, canvas textures and synthesised sound,
far under the brief's 3 MB cap. The game folder is 7.2 MB total (mostly the pre-existing
panorama webps and the owner's voice clips); game.js is 829 KB, of which ~690 KB is the
game's private copy of three.js — the planned shared-engine pass (see audit notes) cuts
that to ~110 KB per game.

## Tests

- `game_src/highway_race`: `npm test` — **13/13 pass**, including the original robot
  (wins all six stages), the new rubber-band test, the lazy-robot easy-mode test, the
  pickup and milestone tests, save normalisation for all six stages + car colour, and the
  star-rule tests (the robot earns 3 stars on every stage; the gentle-allowance boundary
  and cone exclusion are asserted directly).
  `npm run build` succeeds after every step; the built `game.js` is committed each time.
- `flutter analyze`: 278 issues — identical to the pre-work baseline (0 errors).
- `flutter test`: **1609/1609 all passed** (the pre-work baseline had one pre-existing
  failure, sky_ace section registration, fixed earlier on this branch in 184a839b).
- Manual screenshot review of: menu (+garage), countdown, nitro moment, all six stages,
  pause card, finish card (trophy + stars), try-again card — all checked visually. The
  finish-card check used a clean run; earnability of 3 stars in real play is covered by
  the robot test above, not by that screenshot.

## Console noise found in the standalone harness (not game bugs)

- `favicon.ico`, `/fonts/Tajawal-ExtraBold.ttf`, `/ui/kit/*.webp` 404 only when the game
  is served standalone: in the app they resolve from the app shell (the font exists at
  `assets/fonts/`). The standalone trial zip now ships the correct ExtraBold font file.
- `hero.webp` was genuinely missing for this game (other games ship one) — fixed above.

## Uncertainties / what to test on a real device

- Headless fps cannot validate 60 fps; the draw-call/triangle budgets and the
  auto-degrade are the proxies. First real-device check: a mid-range Android phone,
  stage 6 (longest), watching for the degrade indicator staying at level 0.
- Music tier switching restarts the tune loop at beat 0 (the cozy scheduler restarts on
  `setTune`). With hysteresis this happens a handful of times per race and reads as a
  musical lift; if it feels abrupt on device, the fix is a phase-preserving scheduler
  change in cozy_kit/audio.js (shared — needs a wider regression pass).
- The mascot is a canvas-texture face on the rear shelf (through the rear window area);
  if the owner wants a full driver character visible through the windscreen, that is a
  modelling task for the next round.

## Wanted from the owner

- Nothing new for this game. (The outstanding item overall remains the generated voice
  clips for the other games — 1,764 lines from voice_lines_all.csv.)

## Post-delivery fix (2026-11-27, owner-reported freeze)
The owner opened the v6 showcase, clicked a stage, and the game froze on the
countdown (no hero car, HUD dead). Console: "this.sound.music is not a
function" in _update. Root cause: ALIVE step 5 added a Sound.music() method,
but SynthBase.unlock() assigns this.music = <music GainNode> on the first user
gesture — the instance property shadows the prototype method, so the first
real tap broke every frame. Headless audits started races programmatically
without unlocking audio, so they never saw it. Fix: renamed the method to
musicTick() (call site + definition). Verified with a new click-flow test that
goes through the actual menu buttons with audio unlocked: zero page errors,
countdown ticks, car accelerates under input. Lesson recorded: always test the
real click flow, not just programmatic starts.

## Lite mode (2026-11-27, owner-reported heaviness on his laptop)
The owner reports the ALIVE build is "very heavy" on his Lenovo (Intel Iris Xe)
— the countdown crawls — while the same machine runs the WebGL Aquarium at
60 fps and the pre-ALIVE prototype played fine. Added an opt-in lite mode,
activated by `?lite=1` in the URL (or config.lite), parsed in the Game
constructor before the renderer exists. Rendering-only changes; sim.js is
untouched and stages/physics/voices/music/UI/scoring are identical:
- pixel ratio locked to 1.0 (normal: min(devicePixelRatio, 1.5)) — at a
  1920×1080 / DPR 1.5 display the drawing buffer drops 2880×1620 → 1920×1080
  (2.25× fewer pixels to shade, the main cost on integrated GPUs);
- renderer.shadowMap.enabled = false (defensive: the game uses no shadow
  maps at all — no castShadow/receiveShadow anywhere in the source);
- birds and fireflies are never spawned;
- clouds no longer drift (they still recycle along the road) and the
  cheering fans no longer bounce;
- the dashboard mascot's canvas texture uploads at most every ~150 ms
  (trailing flush, so the latest face is never lost);
- the frame-time auto-degrade is skipped (lite already sits at the floor).
Verification: npm test 13/13; real click-flow test through the actual menu
buttons with audio unlocked, normal and ?lite=1 — zero page errors in both,
race starts and the car accelerates; live page confirms lite=true, birds=0,
fireflies unspawned. Perf probe (1920×1080, DPR 1.5, stage 1): normal
202 calls / 74,862 tris @ PR 1.5 vs lite 200 calls / 75,414 tris @ PR 1.0 —
calls/triangles are essentially unchanged (the scene is the same); the win
is fill rate, which is what an Iris Xe feels. Delivered to the owner as
rehlaty_sunset_lite.zip whose play.bat opens the game with lite=1.

## Deep performance pass — the real frame thief (2026-11-27, after lite)

The owner reported the game was STILL very heavy with lite mode on. Profiling
with a counting-Map harness (real menu click flow, audio unlocked, headless
Chromium) found the cost was never the GPU: **258 traffic-car mesh creations
per frame**. A stage holds ~250 traffic cars, the mesh pool capped at 44, and
`_render` called `_carMesh(c)` for every car on every frame *before* testing
visibility — so ~200 cars got a full procedural `makeRealCar()` build (extruded
body + merged wheels) on every frame, each evicting the car before it.
Measured before the fix: 258 mesh sets + 516 deletes per frame, ScriptDuration
21.8 s over a 20 s racing window, 3 frames rendered in that window. This also
explains the history: the pre-ALIVE build used cheap sprite traffic and played
fine on the same laptop; ALIVE step 2 swapped in procedural cars.

Fixes (all in `game_src/highway_race/src/main.js`; sim.js untouched; gameplay,
stages, voices, music, scoring identical):
- Traffic meshes are now built ONLY for cars inside the render window
  (player −4 m … +260 m). A car leaving the window has its mesh removed and —
  for procedural vehicles, whose geometry/materials are per-car — disposed
  (cones share cached geometry/materials and are never disposed). Pool cap
  raised 44 → 64 as a safety net; the window itself holds ~15 cars.
- HUD writes cached + throttled: the whole HUD refreshes at 10 Hz and every
  element (timer, position, speed, progress bar, rival dot, nitro orbs,
  nitro button) is written only when its displayed value changed; the circular
  speedometer's conic-gradient arc now moves in 4° steps (it previously
  repainted a fresh gradient raster on nearly every frame while accelerating);
  the nitro speed-lines overlay opacity is written only on change.
- Renderer: `powerPreference: 'high-performance'` and `stencil: false`
  (the game never uses the stencil buffer).
- `burst()`/`burstSky()` reuse one scratch `THREE.Color` instead of allocating
  one per burst (per-frame garbage during nitro).
Checked and cleared: pano textures are 2048×879 (~250 KB) — not oversized;
billboard/mascot canvas textures are static or already throttled; the music
scheduler runs on a 40 ms lookahead interval, not per frame; `spin()` is
allocation-free.
Measured after the fix (same harness): mesh creations 258 → ~3 per frame (the
residual is the harness teleporting the car, legitimately pulling new cars
into the window), ScriptDuration 21.8 s → 1.2 s, frames in the window 3 → 18,
pool size 44 (churning) → 15 (exactly the window), DOM style mutations
3.67 → 1.39 per frame, zero page errors in normal and lite modes.
npm test 13/13. Delivered as rehlaty_sunset_lite.zip (النسخة الخفيفة ٢); the
package now also carries games/three_shared.js, which the shared-engine build
loads before game.js.

## Real nitro jets (2026-11-27, after the owner's first successful playtest)

Owner verdict on the fixed build: the game runs and he loves it — his one
note was «شكل النيترو وهو بيخرج مش حقيقي»: the ALIVE rainbow sparkle particles
did not read as a real exhaust flame. The rainbow flame is gone.

What the nitro is now (all in `game_src/highway_race/src/main.js`; sim.js
untouched; gameplay, stages, voices, music, scoring identical):
- Twin jets, one per chrome exhaust tip (x = ±0.486, y = 0.21, z = −2.16 on
  the hero): ONE merged mesh of crossed additive planes (vertical + horizontal
  per pipe), textured from a canvas drawn once — layered teardrop with a
  white-hot nozzle core, pale-blue inner cone, azure body, deep-blue fringe,
  and four shock diamonds (the bright beads a real jet shows) shrinking
  toward the tip. Real nitro burns blue; so does this.
- The jets rake 3.4° down toward the road so their length reads from the
  high chase camera, and a soft blue radial glow pools on the road under
  the exhaust, breathing with the flame.
- Behaviour follows the real burn state (`r.p.nitro`, 2.4 s): ignition
  flare-up (fast ramp + a 38% overshoot that settles), sustained burn with
  layered sine flicker (27/41/63 Hz components at ±13% combined — smooth
  amplitude play, never on/off strobing), sputter-out in the last 0.45 s
  (length chops and shrinks), then a 0.16 s fade tail. Nothing pops.
- Embers: a few orange / white-blue sparks from the existing pooled
  particle system (rates cut so they read as sparks, not bubbles); the
  ignition puff is 8 sparks. The speed-lines overlay and FOV punch are
  unchanged.
Performance: assets are cached on the instance and the meshes are built
once per stage start; per frame the effect is only scale/opacity writes —
zero allocations, zero rebuilds. Draw calls while burning: +2 (flame mesh
+ glow), inside the normal traffic variance (measured 264–298 across
normal and lite runs, vs 265–288 for the rainbow build); triangles +18.
Verified with the real click flow (menu button, audio unlocked): zero page
errors in normal and lite modes, npm test 13/13. Headless screenshots at
ignition / sustained / sputter show twin blue-white jets streaming from
both pipes, brightest at the nozzle — foreshortened by the chase camera,
as a real rear flame is.
