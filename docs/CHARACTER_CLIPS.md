# Character clips (owner's own animations)

The hero (boy / girl) can play real animations instead of the code-made rig. Free, runs on this computer, nothing uploaded.

## Make a clip
1. Make a 2-4 second video of the character on a **plain bright green background** (Viggle, Wan Animate, Kling, Runway or your phone).
   Fixed camera, whole character visible, same size in every video.
2. Run (needs ffmpeg and node):
   `node tools/clips/make_clip.mjs <video.mp4> <boy|girl> <jump|laugh|clap|wave|walk>`
   Options: `--key 00ff00` (background colour), `--sim 0.30` (raise if green is left, lower if the character gets holes), `--fps 12`, `--secs 4`.
3. It writes `assets/games/clips/<character>_<name>.webp` and updates `clips.json`.
4. Build and look: `npm run build:letters` in `game_src/learn_games`; open the game with `?debug` and call `__hero.act('celebrate')` in the console.

## Which act plays which clip
jump = celebrate / cheer / jump, laugh = giggle (right answer), clap = clap, wave = wave, walk = walk and run (loops).
A missing clip falls back to the code-made rig, so clips can be added one at a time.

## Notes
* `src/kit/clips.js` plays the sheet on a flat picture standing in the scene; the character is assumed to fill about 96 % of the clip height.
* Keep each clip small (the tool shrinks big ones to fit a 4096 px sheet). Lossless WebP: expect 1-3 MB per clip.
* Tested with a synthetic green-screen clip only; never with real AI-made clips or on a phone.
