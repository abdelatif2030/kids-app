# Prompt for muse.ai: make "Sunset Highway" a game a small child can't put down

Copy everything below the line into muse.ai. (Give it also `docs/AI_HANDOFF.md`, `docs/SUNSET_HIGHWAY.md` and `CLAUDE.md` from the repository.)

---

## ROLE
You are a senior game developer, 3D technical artist and children's-game designer. You improve ONE existing game inside a kids' learning app, in your own branch. Your goal: turn "Sunset Highway" into a polished, juicy, alive game that a 3-to-6-year-old asks to play again and again, while staying 100% safe for children.

## THE GAME TODAY
- Name: **Sunset Highway / طريق الغروب**. Arabic-first UI (RTL), English strings too. Ages 3-6 (age 3 = easy mode).
- Code: `game_src/highway_race/` (`src/main.js` ~430 lines = rendering, UI, sound; `src/sim.js` ~120 lines = pure game rules; `test/sim.test.js`, `test/speed.test.js`). Built with esbuild into `assets/games/sunset_highway/game.js`. Three.js (already bundled). Shared helpers in `game_src/cozy_kit/` (`ui.js`, `audio.js`).
- Gameplay: a red sports car drives a palm-lined coastal highway (4 lanes, bends, traffic of cars/trucks). Drag to steer between lanes, NITRO button (3 charges, +1 every 500 m). Reach the finish before the clock runs out AND ahead of one rival. A bump only slows you for a moment (no crashes, no damage). 6 stages: Rayan Waterfalls, Sokhna Mountains, Alamein Night, White Desert, Port Said Light, Gouna Lagoons. Stars per stage.
- Assets already in `assets/games/sunset_highway/`: 3D models `models/*.glb` (ambulance, delivery, firetruck, garbage-truck, hatchback-sports, police, sedan-sports, sedan, suv-luxury, suv, taxi, truck, van), painted car pictures `art/car_*.webp`, 6 painted backdrops `art/pano1-6.webp`, UI skin pieces `skin/*.webp`, `card.webp`, `poster.webp`. Sound is synthesised in code (Web Audio): engine, nitro, bump, countdown beeps, overtake. A little music and cheer sounds already exist.
- Owner's art style: glossy cute 3D-cartoon, rounded shapes, saturated friendly colours, warm sunset palette (orange, pink, violet, turquoise sea). Keep this style everywhere.

## WHAT I WANT: "MAKE EVERYTHING ALIVE"
Give EVERY thing in the game a picture AND motion, and add game feel. Work through this list in order and tell me what you did for each item:

### 1. The car (the hero)
- Squash/stretch on acceleration and braking, body roll when steering, suspension bounce on bumps, wheels that spin (speed-linked) and turn, headlights/tail-lights that glow, brake lights when slowing, exhaust puffs, tyre dust/sparkle on lane changes, a friendly driver (cartoon child face with blinking eyes and a big smile) visible through the window or a small mascot on the dashboard that reacts (cheers on overtake, "oops" face on bump, wide eyes on nitro).
- Nitro: rainbow/blue-orange flame, screen-edge speed lines, field-of-view punch, subtle camera shake (small, comfortable), whoosh sound, a stretchy boost sensation. Never harsh flashing (no strobing; keep under 3 flashes per second for photosensitivity).

### 2. Traffic and the rival
- Every vehicle type gets personality: bobbing suspension, blinking indicators, little waving passengers/drivers (cartoon, friendly), horns with different cute pitches ("beep-beep", "meep"), taxis with a rooftop light, police with a soft blue/red light (no sirens that scare, just a short cheerful "wee-woo"), ambulance with a gentle light.
- The rival has a name and a colour, a trailing glow, taunts that are kind ("Catch me!") and a good-sport reaction when overtaken. Rubber-band difficulty so the child is always close and has a real chance to win; easy mode for age 3 must be nearly impossible to lose.
- Soft bump = cartoon "boing" with stars circling the car, never a crash, never damage.

### 3. The road and the world
- Make the world breathe: sun with soft rays and slow movement, parallax clouds, birds/seagulls flying, boats and a lighthouse on the sea, palm trees swaying in the wind, waving spectators and cheering animals on the roadside, billboards with friendly shapes (NO real brands, NO text in other languages that we can't check), balloons, bunting flags, fireworks at the finish.
- Day cycle per stage (sunset, dusk, night with glowing lanterns, desert with dunes, lighthouse beams, lagoons) using the painted backdrops `art/pano*.webp` PLUS animated foreground (layered parallax, shader gradients, particles).
- Road details: shiny asphalt reflection of the sunset, animated lane dashes, rumble strips, checkpoints with arches every 500 m (this is where the nitro charge is given: show a big friendly "+1 NITRO" pop).
- Weather moments (gentle): a little rain with a rainbow after it, fireflies at night, falling petals. All must be optional on slow phones.

### 4. Rewards and feelings (the "can't stop" part, done ethically)
- Reward ONLY real achievements: finishing a stage, overtaking the rival, clean lane changes, collecting stars. NEVER reward time spent. NEVER add streaks, daily-return nudges, loot boxes, timers that pressure the child, ads, or purchases.
- Countdown "3-2-1-GO" with bouncy numbers and a cheerful voice; finish line with confetti, trophy, stars that fly into the star counter, the mascot dancing, a short victory jingle. Losing = gentle "Almost! Try again" with the same mascot cheering, a quick retry button, never a harsh sound.
- Collectibles on the road (coins/stars/balloons) that pop with sparkles and a rising musical scale. A star meter fills up; at certain points a friendly surprise appears (a rainbow bridge, a flock of birds, a dolphin jumping beside the road).
- A tiny sticker/garage unlock per finished stage (new car paint colours, wheel sparkles, a hat for the driver) that persists in the game's save, with no purchasing and nothing ever lost.

### 5. Sound and music
- Keep the synthesised approach (no new audio files unless I supply them). Layer the music dynamically: calm bed at low speed, extra layers (bass, hi-hats, melody) as speed rises, a lift on nitro, a quiet sweet tail at the finish. Smooth cross-fades, no clicks.
- Engine sound that follows speed and nitro. Tyre squeal on lane change (very soft), cute horn replies, crowd cheers at checkpoints, "overtake" whoosh with a happy sting, countdown voice cues via the app's existing voice hook if present (do not invent recordings).
- Sound unlock must keep working on iPhone/Safari (see `ios_audio.js` pattern used by other games in `game_src/*/src/ios_audio.js`).
- A visible, big, always-reachable mute button.

### 6. UI and controls
- Big touch targets (at least 56 px), clear icons, readable Arabic with correct RTL, one-hand play in landscape. Keep the existing skin (`skin/*.webp`, `skin.css`) and improve the HUD: animated speedometer, star meter, nitro charges as glowing orbs, mini-map of the road bend, a rival position indicator.
- Steering that feels great: smooth lane snapping with a little overshoot, drag and tap-left/right both work, optional tilt is NOT used (keep it simple and safe).
- Pause screen friendly and clear; a parent-safe exit button that returns to the app.

### 7. Performance and polish
- 60 fps on a mid-range phone in landscape (budget: < 150 draw calls, < 150k triangles on screen, textures ≤ 1024 px for props, particles pooled). Detect a slow device (frame time > 24 ms for 2 s) and automatically lower particles, shadows and resolution. Never block the main thread.
- Total new bundled assets ≤ 3 MB (webp/glb compressed). No external network calls, no CDNs, no trackers.
- Works in the Flutter WebView on Android/iOS and in desktop browsers. Test at 844x390, 932x430, 1024x768, 1366x1024.

## IMAGES AND ANIMATION: HOW TO PRODUCE THEM
1. Prefer code-made art (three.js geometry, canvas textures, shaders, sprite sheets drawn in code) so nothing external is required. This is the default.
2. If you generate pictures, keep them in the owner's style (glossy cute 3D cartoon, saturated, no text on them, transparent background for props, 512-1024 px), save as `.webp` under `assets/games/sunset_highway/art/`, and give each file a clear name. Use ONLY original designs: no brands, no logos, no real car makes, no known cartoon characters, no people from photos.
3. For anything you cannot generate well, write the exact image prompts (12 pictures per sheet, white background, consistent style) into `docs/SUNSET_HIGHWAY_IMAGE_PROMPTS.md` instead, and make the game use a graceful code-drawn fallback until my pictures arrive.

## CHILD-SAFETY RULES (NON-NEGOTIABLE)
- Ages 3-6. No violence, no blood, no scary sounds, no flashing/strobing, no loud sudden noises (cap the master gain and compress).
- No ads, no external links, no analytics, no tracking, no accounts, no chat, no purchases, no streaks, no "come back" nudges.
- Stars only for finishing/achieving, never for time spent. Nothing is ever taken away from the child.
- Texts: Arabic first (Egyptian-friendly, simple), English second. Do not add Deutsch/Français text without asking.
- Do not add npm/pub packages. Do not touch files outside the Sunset Highway game, except small additions to `game_src/cozy_kit/` that are backwards compatible.

## HOW TO WORK
- Work ONLY in the folder and branch I give you (not `feature/rehlaty`, not `demo-site`). Do not deploy, do not push to other branches, do not change `firestore.rules`, secrets or store settings.
- Commit small and often with clear messages. After every group of changes run:
  `cd game_src/highway_race && npm test && npm run build`
  Add tests to `src/sim.js` logic (rival rubber-banding, checkpoints, star rules, easy mode) and keep the existing ones passing. The "robot wins all stages" test must still pass, and easy mode must remain winnable by a robot with sloppy input.
- Keep `src/sim.js` pure (no DOM, no randomness without the seeded `rng`) so it stays testable. Rendering/animation/sound go in `main.js` (split into new files in `src/` if it grows).
- To look at it: from `assets/games` run `python -m http.server 8099`, open `http://localhost:8099/sunset_highway/index.html`. Take screenshots of every stage and of the menu, the countdown, a nitro moment, an overtake, the finish and the "try again" screen. Check them yourself and fix anything ugly.
- Keep a log `docs/SUNSET_HIGHWAY_AI_LOG.md`: what changed, what to test, performance numbers, anything you are unsure about, and a list of extra pictures/sounds you would like me to provide.

## DELIVERABLES / DEFINITION OF DONE
1. All 6 stages look and feel distinct and alive; every object listed above has a picture and a motion.
2. A child can pick it up with no instructions: big GO, clear lanes, instant feedback for every touch.
3. Tests green, build succeeds, no console errors, 60 fps target met or auto-degraded.
4. `docs/SUNSET_HIGHWAY_AI_LOG.md` and (if needed) `docs/SUNSET_HIGHWAY_IMAGE_PROMPTS.md` written.
5. A short summary at the end: before/after list, files changed, how to review, how to roll back (`git revert` of your merge commits).

Start by reading the existing code and assets, then post a short plan (max 15 lines) with the order you will work in, then execute it step by step and report after each step.
