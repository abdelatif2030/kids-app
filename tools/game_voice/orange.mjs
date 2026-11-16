// Redoes every sentence with «برتقالي» with the voice settings the owner chose for «دي قلب برتقالي» (2026-11-12): slow and steady,
// the word read with a real qaf and a closing sukun. Needs ELEVENLABS_API_KEY.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const T = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/game_voice/tashkeel.json'), 'utf8'));
const L = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar' && /برتقال/.test(l.text) && l.text !== 'دي قلب برتقالي');
for (const l of L) {
  const reading = (T[l.text] || l.text).replace(/بُرْتُقَالِي(?![ةَ])/g, 'بُرْتُقَالِيْ');
  const r = await fetch('https://api.elevenlabs.io/v1/text-to-speech/I3u6waC588j43py1kDN2?output_format=mp3_44100_64', {
    method: 'POST', headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: reading, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.7, similarity_boost: 0.8, style: 0, speed: 0.78 } }),
  });
  if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  fs.writeFileSync(path.join(ROOT, 'assets/games/learn_voice/ar', `${l.id}.mp3`), Buffer.from(await r.arrayBuffer()));
  console.log(l.id, l.text, '=>', reading);
  await new Promise((s) => setTimeout(s, 120));
}
