// node genmusic.mjs [game...] -> ElevenLabs Music (env ELEVENLABS_API_KEY) -> src/<game>/_music.mp3 ; build step puts a 64 kbps mono loop at assets/games/<game>/music.mp3
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url)); const M = JSON.parse(fs.readFileSync(path.join(dir, 'music.json'), 'utf8'));
const only = process.argv.slice(2); const key = process.env.ELEVENLABS_API_KEY; const jobs = Object.entries(M).filter(([g]) => !only.length || only.includes(g));
async function one([g, prompt]) {
  const f = path.join(dir, 'src', g, '_music.mp3'); if (fs.existsSync(f)) return; fs.mkdirSync(path.dirname(f), { recursive: true });
  for (let t = 0; t < 3; t++) {
    const r = await fetch('https://api.elevenlabs.io/v1/music?output_format=mp3_44100_128', { method: 'POST', headers: { 'xi-api-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ prompt, music_length_ms: 20000, force_instrumental: true }) });
    if (r.ok) { fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); console.log(g, 'ok'); return; }
    console.log(g, r.status, (await r.text()).slice(0, 120)); if (r.status !== 429 && r.status < 500) return; await new Promise((s) => setTimeout(s, 4000));
  }
}
let i = 0; await Promise.all(Array.from({ length: 1 }, async () => { while (i < jobs.length) await one(jobs[i++]); }));
