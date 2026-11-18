// Checks the recorded clips by LISTENING to them with a speech-to-text service and comparing what it heard with the sentence the clip should say.
//   ELEVENLABS_API_KEY=... node tools/game_voice/verify_voice.mjs [--hours 30] [--all] [--limit 50] [--min 0.72] [--concurrency 4]
// Only the clips' audio is sent (game sentences, nothing about any child). The key comes ONLY from the environment.
// What it can catch: a word that was read wrongly, cut, swallowed or replaced by another word, a sentence read twice, a missing ending.
// What it cannot judge: how natural or how Egyptian the voice sounds (a person must listen), or the exact vowel marks. The speech-to-text service
// writes what it hears in its own spelling (often closer to standard Arabic), so the comparison is fuzzy and the report is a list of SUSPECTS to listen to first.
// Output: docs/voice_preview/QA_REPORT.md (suspects first) and docs/voice_preview/qa_results.json (used by listening_page.mjs to mark the suspects).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, 'assets/games/learn_voice/ar');
const KEY = process.env.ELEVENLABS_API_KEY;
if (!KEY) { console.error('Set ELEVENLABS_API_KEY in the environment first.'); process.exit(1); }
const arg = (name, def) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : def; };
const HOURS = Number(arg('hours', 30));
const ALL = process.argv.includes('--all');
const LIMIT = Number(arg('limit', 100000));
const MIN = Number(arg('min', 0.72));
const CONC = Number(arg('concurrency', 4));
const IDS = arg('ids', '') ? arg('ids', '').split(',') : null; // check only these clip ids

const lines = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const now = Date.now();
let todo = lines.filter((l) => fs.existsSync(path.join(DIR, `${l.id}.mp3`)));
if (!ALL) todo = todo.filter((l) => now - fs.statSync(path.join(DIR, `${l.id}.mp3`)).mtimeMs < HOURS * 3600 * 1000);
if (IDS) todo = lines.filter((l) => IDS.includes(l.id) && fs.existsSync(path.join(DIR, `${l.id}.mp3`)));
todo = todo.slice(0, LIMIT);

// the same sentence, written the way the speech-to-text service would write it: no marks, one form of alef/ya/ta marbuta/hamza, no punctuation or spaces
export function norm(t) {
  return String(t || '')
    .replace(/[ً-ْٰـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي').replace(/ء/g, '')
    .replace(/[^ء-ي0-9a-zA-Z]/g, '')
    .toLowerCase();
}
// the sounds an Egyptian speaker says in another letter (ث as ت/س, ذ as د/ز, ق as ء...): treated as the same when comparing
const FOLD = { ث: 'ت', ذ: 'د', ظ: 'ض', ق: 'ك', ز: 'س', ص: 'س', ط: 'ت', ض: 'د', ح: 'ه', غ: 'ع', خ: 'ه' };
const fold = (s) => s.replace(/[ثذظقزصطضحغخ]/g, (c) => FOLD[c]);
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
// the service writes numbers as digits («73»): turn them back into the Egyptian number words before comparing
const U = ['', 'واحد', 'اتنين', 'تلاتة', 'اربعة', 'خمسة', 'ستة', 'سبعة', 'تمانية', 'تسعة'];
const TEEN = ['عشرة', 'حداشر', 'اتناشر', 'تلاتاشر', 'اربعتاشر', 'خمستاشر', 'ستاشر', 'سبعتاشر', 'تمنتاشر', 'تسعتاشر'];
const TENS = ['', '', 'عشرين', 'تلاتين', 'اربعين', 'خمسين', 'ستين', 'سبعين', 'تمانين', 'تسعين'];
const numWord = (n) => (n === 0 ? 'صفر' : n === 100 ? 'مية' : n < 10 ? U[n] : n < 20 ? TEEN[n - 10] : n % 10 ? `${U[n % 10]} و${TENS[Math.floor(n / 10)]}` : TENS[n / 10]);
const digitsToWords = (t) => String(t || '').replace(/(^|[^\d])(\d{1,3})(?!\d)/g, (m, pre, d) => `${pre}${numWord(Number(d))}`);
// the service often writes a foreign-sounding word in Latin letters (jacket, kiwi, balloon): that is its spelling, not a wrong reading
export const hasLatin = (t) => /[A-Za-z]{3,}/.test(String(t || ''));
export const similarity = (expected, heard0) => {
  const heard = digitsToWords(heard0).replace(/(^|\s)(في|فينا|فينو|Pin)(\s+)(الرقم|رقم)/g, '$1فين$3$4');
  const a = fold(norm(expected)), b = fold(norm(heard));
  if (!a && !b) return 1;
  return 1 - lev(a, b) / Math.max(a.length, b.length);
};

async function transcribe(file) {
  const form = new FormData();
  form.append('model_id', 'scribe_v1');
  form.append('language_code', 'ara');
  form.append('tag_audio_events', 'false');
  form.append('file', new Blob([fs.readFileSync(file)], { type: 'audio/mpeg' }), path.basename(file));
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch('https://api.elevenlabs.io/v1/speech-to-text', { method: 'POST', headers: { 'xi-api-key': KEY }, body: form });
    if (r.ok) return (await r.json()).text || '';
    if (r.status === 429 || r.status >= 500) { await new Promise((res) => setTimeout(res, 1500 * (attempt + 1))); continue; }
    throw new Error(`HTTP ${r.status} ${(await r.text()).slice(0, 160)}`);
  }
  throw new Error('too many retries');
}

if (process.argv.includes('--rescore')) {
  // no audio is sent: the scores of the stored answers are worked out again with the current comparison rules (digits as number words, Latin spellings)
  const f = path.join(ROOT, 'docs/voice_preview/qa_results.json');
  const all = JSON.parse(fs.readFileSync(f, 'utf8'));
  let below = 0;
  for (const x of Object.values(all)) if (x.heard !== null && x.heard !== undefined) { x.score = +similarity(x.text, x.heard).toFixed(3); if (x.score < MIN && !hasLatin(x.heard)) below++; }
  fs.writeFileSync(f, JSON.stringify(all));
  console.log(`rescored ${Object.keys(all).length} stored answers; ${below} suspects below ${MIN}`);
  process.exit(0);
}
const results = {};
const outJson = path.join(ROOT, 'docs/voice_preview/qa_results.json');
if (fs.existsSync(outJson)) Object.assign(results, JSON.parse(fs.readFileSync(outJson, 'utf8')));
let done = 0, failed = 0;
async function worker(queue) {
  while (queue.length) {
    const l = queue.shift();
    try {
      const heard = await transcribe(path.join(DIR, `${l.id}.mp3`));
      results[l.id] = { text: l.text, heard, score: +similarity(l.text, heard).toFixed(3) };
    } catch (e) { failed++; results[l.id] = { text: l.text, heard: null, score: null, error: String(e.message || e) }; }
    if (++done % 25 === 0) { console.log(`${done}/${todo.length}`); fs.writeFileSync(outJson, JSON.stringify(results)); }
  }
}
const queue = [...todo];
console.log(`${todo.length} clips to check (${ALL ? 'all' : `made in the last ${HOURS} hours`}), ${CONC} at a time`);
await Promise.all(Array.from({ length: CONC }, () => worker(queue)));
fs.writeFileSync(outJson, JSON.stringify(results));

const checked = todo.map((l) => ({ id: l.id, ...results[l.id] }));
const bad = checked.filter((x) => x.score !== null && x.score < MIN && !hasLatin(x.heard)).sort((a, b) => a.score - b.score);
const errs = checked.filter((x) => x.score === null);
const avg = checked.filter((x) => x.score !== null).reduce((s, x) => s + x.score, 0) / Math.max(1, checked.length - errs.length);
let md = `# Voice check (speech-to-text)\n\nChecked ${checked.length} clips; average similarity ${avg.toFixed(2)}; suspects below ${MIN}: **${bad.length}**; could not check: ${errs.length}.\n\n`;
md += 'A suspect is a clip whose recording the service heard differently from the sentence. It may be a real mistake (a word read wrongly, cut or swallowed) or just the service writing an Egyptian word its own way: **listen to the suspects first**.\n\n';
md += '| score | expected | heard | clip |\n|---|---|---|---|\n';
for (const x of bad) md += `| ${x.score} | ${x.text} | ${x.heard} | ${x.id} |\n`;
if (errs.length) md += `\n## Could not be checked\n${errs.map((x) => `- ${x.id} ${x.text}: ${x.error}`).join('\n')}\n`;
fs.writeFileSync(path.join(ROOT, 'docs/voice_preview/QA_REPORT.md'), md);
console.log(`done: ${checked.length} checked, ${bad.length} suspects, ${errs.length} errors, average ${avg.toFixed(2)} -> docs/voice_preview/QA_REPORT.md`);
