// Makes the voice clips of the learning games, then rebuilds the list the games read.
//
//   node tools/game_voice/lines.mjs                      (first: the list of sentences)
//   node tools/game_voice/generate.mjs --provider azure   [--lang ar] [--voice ar-EG-SalmaNeural] [--force]
//   node tools/game_voice/generate.mjs --provider elevenlabs --voice <voice id> [--lang ar]
//   node tools/game_voice/generate.mjs --manifest         (only rebuild the list from the files that exist,
//                                                          e.g. after recording your own clips)
//
// Keys come ONLY from the environment, never from a file:
//   azure:      AZURE_SPEECH_KEY and AZURE_SPEECH_REGION (e.g. "westeurope"). Egyptian Arabic neural voices:
//               ar-EG-SalmaNeural (woman), ar-EG-ShakirNeural (man). English default: en-US-AnaNeural (a child).
//   elevenlabs: ELEVENLABS_API_KEY and a --voice id; model eleven_multilingual_v2.
// Only the sentence text is sent to the service. Existing files are kept unless --force.
// Your own recordings: save each as assets/games/learn_voice/<lang>/<id>.mp3 (ids in docs/GAME_VOICE_LINES.csv),
// then run with --manifest. NOT run against a real service from this repository yet.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = join(ROOT, 'assets', 'games', 'learn_voice');
const arg = (name, def) => { const i = process.argv.indexOf(`--${name}`); return i < 0 ? def : (process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : true); };
const lines = JSON.parse(readFileSync(join(DIR, 'lines.json'), 'utf8'));

function manifest() {
  const m = { ar: [], en: [] };
  for (const lang of ['ar', 'en']) {
    const d = join(DIR, lang);
    if (!existsSync(d)) continue;
    const have = new Set(readdirSync(d).filter((f) => f.endsWith('.mp3')).map((f) => f.slice(0, -4)));
    m[lang] = lines.filter((l) => l.lang === lang && have.has(l.id)).map((l) => l.id);
  }
  writeFileSync(join(DIR, 'manifest.js'), `// made by tools/game_voice/generate.mjs: the recorded clips that exist\nwindow.__learnVoice = ${JSON.stringify(m)};\n`);
  console.log(`manifest: ${m.ar.length}/${lines.filter((l) => l.lang === 'ar').length} Arabic, ${m.en.length}/${lines.filter((l) => l.lang === 'en').length} English clips`);
}

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function azure(text, lang, voice) {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) throw new Error('Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in your environment.');
  const v = voice || (lang === 'en' ? 'en-US-AnaNeural' : 'ar-EG-SalmaNeural');
  const locale = v.split('-').slice(0, 2).join('-');
  // a little slower and friendlier for small children
  const ssml = `<speak version="1.0" xml:lang="${locale}"><voice name="${v}"><prosody rate="-8%">${xml(text)}</prosody></voice></speak>`;
  const r = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: { 'Ocp-Apim-Subscription-Key': key, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3', 'User-Agent': 'game-voice' },
    body: ssml,
  });
  if (!r.ok) throw new Error(`azure ${r.status} ${await r.text()}`);
  return Buffer.from(await r.arrayBuffer());
}

async function elevenlabs(text, lang, voice) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) throw new Error('Set ELEVENLABS_API_KEY in your environment.');
  if (!voice || voice === true) throw new Error('Give --voice <voice id> for ElevenLabs.');
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.55, similarity_boost: 0.8 } }),
  });
  if (!r.ok) throw new Error(`elevenlabs ${r.status} ${await r.text()}`);
  return Buffer.from(await r.arrayBuffer());
}

if (arg('manifest')) { manifest(); process.exit(0); }
const provider = { azure, elevenlabs }[arg('provider')];
if (!provider) { console.error('Use --provider azure | elevenlabs, or --manifest. See the top of this file.'); process.exit(1); }
const only = arg('lang');
const voice = arg('voice');
const force = !!arg('force');
let made = 0;
for (const l of lines) {
  if (only && only !== true && l.lang !== only) continue;
  const file = join(DIR, l.lang, `${l.id}.mp3`);
  if (existsSync(file) && !force) continue;
  mkdirSync(dirname(file), { recursive: true });
  try {
    writeFileSync(file, await provider(l.text, l.lang, voice === true ? undefined : voice));
    made++;
    console.log(`${l.lang}/${l.id}  ${l.text}`);
  } catch (e) {
    console.error(`FAILED ${l.lang}/${l.id} "${l.text}": ${e.message}`);
    break;
  }
}
console.log(`${made} clips made`);
manifest();
