// node gen.mjs  -> ElevenLabs sound-generation (key from env ELEVENLABS_API_KEY) -> *.src.mp3 here. Prompts are the list below.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const P = {
  crash: ['a cartoon toy car crash, cute bonk and crunch with a small rattle, short, children game, no music', 1.8],
  bump: ['a soft cartoon rubber bumper thud between two toy cars, short bonk, children game', 0.8],
  wall: ['a toy car scraping and bouncing off a padded wall, short cartoon thump and squeak', 1.0],
  nitro: ['a fast cartoon rocket boost whoosh with a fiery burst, short, children racing game', 1.6],
  overtake: ['a happy short rising cartoon whoosh and ding when passing another car, children game', 1.0],
  win: ['a short cheerful victory fanfare with trumpets, confetti pop and a crowd cheering, children racing game', 3.5],
  crowd: ['a small crowd of kids cheering and clapping in a stadium, short, happy', 2.5],
  lap: ['a bright happy checkpoint chime, two quick rising notes, children game', 1.0],
};
const key = process.env.ELEVENLABS_API_KEY; if (!key) { console.error('no key'); process.exit(1); }
for (const [n, [text, dur]] of Object.entries(P)) {
  const f = path.join(dir, n + '.src.mp3'); if (fs.existsSync(f)) continue;
  const r = await fetch('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', { method: 'POST', headers: { 'xi-api-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ text, duration_seconds: dur, prompt_influence: 0.5 }) });
  if (!r.ok) { console.log(n, r.status, (await r.text()).slice(0, 120)); continue; }
  fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); console.log(n, 'ok');
}
