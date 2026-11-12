// One sentence, one voice: reads the text from a UTF-8 FILE (Arabic on a Windows command line gets mangled, so the text
// is never passed as an argument) and writes an mp3.
//   ELEVENLABS_API_KEY=... node tools/game_voice/say.mjs <text file> <voice id> <out.mp3> [model] [voice settings as JSON]
import { readFileSync, writeFileSync } from 'node:fs';

const [textFile, voice, out, model = 'eleven_multilingual_v2', settingsJson] = process.argv.slice(2);
const key = process.env.ELEVENLABS_API_KEY;
if (!textFile || !voice || !out || !key) { console.error('Usage: ELEVENLABS_API_KEY=... node say.mjs <text file> <voice id> <out.mp3> [model]'); process.exit(1); }
const text = readFileSync(textFile, 'utf8').trim();
const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`, {
  method: 'POST',
  headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
  body: JSON.stringify({ text, model_id: model, voice_settings: settingsJson ? JSON.parse(settingsJson) : { stability: 0.55, similarity_boost: 0.8 } }),
});
if (!r.ok) { console.error(r.status, await r.text()); process.exit(1); }
writeFileSync(out, Buffer.from(await r.arrayBuffer()));
console.log('ok', out, text);
