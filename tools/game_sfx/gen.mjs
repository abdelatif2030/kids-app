// node gen.mjs [game ...] -> ElevenLabs sound-generation (key in env ELEVENLABS_API_KEY) -> tools/game_sfx/src/<game>/<name>.mp3 (skips existing)
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const packs = JSON.parse(fs.readFileSync(path.join(dir, 'packs.json'), 'utf8'));
const only = process.argv.slice(2); const key = process.env.ELEVENLABS_API_KEY; if (!key) { console.error('no key'); process.exit(1); }
const jobs = [];
for (const [g, p] of Object.entries(packs)) { if (only.length && !only.includes(g)) continue; for (const [n, [text, dur]] of Object.entries(p.clips)) jobs.push([g, n, text + '. ' + p.style + ', short sound effect, no music unless stated, no voice', dur]); }
async function one([g, n, text, dur]) {
  const f = path.join(dir, 'src', g, n + '.mp3'); if (fs.existsSync(f)) return; fs.mkdirSync(path.dirname(f), { recursive: true });
  for (let t = 0; t < 3; t++) {
    const r = await fetch('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', { method: 'POST', headers: { 'xi-api-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ text, duration_seconds: Math.max(0.5, dur), prompt_influence: 0.5 }) });
    if (r.ok) { fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); console.log(g, n, 'ok'); return; }
    const body = (await r.text()).slice(0, 100); console.log(g, n, r.status, body); if (r.status !== 429 && r.status < 500) return; await new Promise((s) => setTimeout(s, 3000));
  }
}
let i = 0; await Promise.all(Array.from({ length: 4 }, async () => { while (i < jobs.length) await one(jobs[i++]); }));
