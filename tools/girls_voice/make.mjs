// Makes Fatima's recordings for the girls' games: node tools/girls_voice/make.mjs [--force]
// Same voice and settings as the learning games (ElevenLabs "Fatima", eleven_multilingual_v2, stability 0.55, similarity 0.8, fully vowelled text).
// Key ONLY from the environment (ELEVENLABS_API_KEY). Clips go to assets/games/learn_voice/ar/<id>.mp3, where <id> is the SAME hash the games compute
// (kit/voice.js clipId), then the list the games read (manifest.js) is extended. Only the sentence text is sent.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const { clipId, spoken } = await import(pathToFileURL(join(ROOT, 'game_src', 'learn_games', 'src', 'kit', 'voice.js')).href);
const { LINES } = await import('./lines.mjs');
const KEY = process.env.ELEVENLABS_API_KEY; if (!KEY) { console.error('Set ELEVENLABS_API_KEY'); process.exit(1); }
const VOICE = 'I3u6waC588j43py1kDN2';
const FORCE = process.argv.includes('--force');
const DIR = join(ROOT, 'assets', 'games', 'learn_voice');
mkdirSync(join(DIR, 'ar'), { recursive: true });
const MARK = /[ً-ْ]/;
let made = 0, kept = 0, failed = 0;
const ids = [];
for (const [plain, voiced] of LINES) {
  for (const w of voiced.split(/[^ء-يً-ْٰ]+/).filter(Boolean)) if (!MARK.test(w)) { console.error(`unvowelled word "${w}" in: ${voiced}`); process.exit(2); }
  const id = clipId(plain, 'ar'); ids.push(id);
  const f = join(DIR, 'ar', `${id}.mp3`);
  if (existsSync(f) && !FORCE) { kept++; continue; }
  let ok = false;
  for (let a = 0; a < 4 && !ok; a++) {
    try {
      const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_44100_64`, { method: 'POST', headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ text: voiced, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.55, similarity_boost: 0.8 } }) });
      if (!r.ok) throw new Error(`HTTP ${r.status} ${(await r.text()).slice(0, 120)}`);
      writeFileSync(f, Buffer.from(await r.arrayBuffer())); made++; ok = true;
      console.log('ok  ', id, spoken(plain));
    } catch (e) { console.log('retry', spoken(plain), String(e.message).slice(0, 100)); if (/401|402|429/.test(String(e.message)) && a >= 1) break; await new Promise((r) => setTimeout(r, 3000 * (a + 1))); }
  }
  if (!ok) failed++;
}
// extend the manifest the games read
const mp = join(DIR, 'manifest.js');
const m = JSON.parse(readFileSync(mp, 'utf8').split('window.__learnVoice = ')[1].replace(/;\s*$/, ''));
const have = new Set(m.ar);
for (const id of ids) if (existsSync(join(DIR, 'ar', `${id}.mp3`))) have.add(id);
m.ar = [...have];
writeFileSync(mp, `// made by tools/game_voice/generate.mjs (+ tools/girls_voice/make.mjs): the recorded clips that exist\nwindow.__learnVoice = ${JSON.stringify(m)};\n`);
console.log(`made ${made}, kept ${kept}, failed ${failed}; manifest has ${m.ar.length} Arabic clips`);
