// Builds the "record your own voice" pages for the learning game: one page per level (and a few "general" pages), each listing every
// sentence the child hears with a record button next to it. Recordings are kept in the browser (IndexedDB) and exported as one zip.
//   node tools/voice_recorder/build.mjs          -> web/voice/index.html + web/voice/<NN_level>.html + docs/VOICE_LIST.md
// Import the zips the owner sends back with:  node tools/voice_recorder/import.mjs <zip files...>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SRC = path.join(ROOT, 'game_src', 'learn_games', 'src');
const imp = (p) => import(pathToFileURL(path.join(SRC, p)).href);
const { ALL_LEVELS, LevelPlay } = await imp('letters/levels.js');
const { FreshMemory } = await imp('letters/fresh.js');
const { clipId, spoken } = await imp('kit/voice.js');

const lines = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const byText = new Map(lines.map((l) => [l.text, l]));
const byId = new Map(lines.map((l) => [l.id, l]));
let tashkeel = {};
try { tashkeel = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/game_voice/tashkeel.json'), 'utf8')); } catch (_) { /* optional */ }
const reading = (t) => (typeof tashkeel[t] === 'string' ? tashkeel[t] : (tashkeel[t] && tashkeel[t].text) || '');

// 1. play every level many times and collect every sentence its rounds contain
const WORLDS = ['meadow', 'farm', 'beach', 'space', 'rainbow', 'city', 'snow', 'castle', 'underwater', 'jungle', 'desert', 'home'];
const strings = (v, out) => { if (typeof v === 'string') out.push(v); else if (Array.isArray(v)) v.forEach((x) => strings(x, out)); else if (v && typeof v === 'object') for (const k of Object.keys(v)) { if (typeof v[k] !== 'function') strings(v[k], out); } return out; };
const used = new Set();
const groups = [];
let no = 0;
for (const lv of ALL_LEVELS) {
  no++;
  const mem = new FreshMemory(null, 99999);
  const ids = new Set();
  let stale = 0, g = 0;
  while (g < 400 && stale < 30) {
    mem.begin(lv.id);
    const p = new LevelPlay(lv.id, 5, 100 + g * 7, mem, WORLDS[g % 12]);
    let fresh = 0;
    for (const r of p.rounds) {
      for (const s of strings(r, [])) {
        const t = spoken(s);
        const l = t && byText.get(t);
        if (l && !ids.has(l.id)) { ids.add(l.id); fresh++; }
      }
    }
    p.rounds.forEach((r) => mem.note(r.key || r.answer));
    stale = fresh === 0 ? stale + 1 : 0;
    g++;
  }
  // a sentence that several levels share is recorded ONCE, in the first level that uses it (the same clip serves all of them)
  const fresh = [...ids].filter((i) => !used.has(i));
  ids.forEach((i) => used.add(i));
  if (fresh.length) groups.push({ key: `${String(no).padStart(2, '0')}_${lv.id}`, title: `المستوى ${no}: ${lv.ar}`, ids: fresh });
}
// 2. everything else (cheers, the other games' texts, numbers, counting words...) in general pages of 120 sentences
const rest = lines.filter((l) => !used.has(l.id)).sort((a, b) => a.text.localeCompare(b.text, 'ar'));
for (let i = 0; i * 120 < rest.length; i++) {
  groups.push({ key: `g${String(i + 1).padStart(2, '0')}_general`, title: `جمل عامة ${i + 1} (تشجيع وألعاب أخرى وأرقام)`, ids: rest.slice(i * 120, i * 120 + 120).map((l) => l.id) });
}

// 3. the pages
const template = fs.readFileSync(path.join(ROOT, 'tools/voice_recorder/page.template.html'), 'utf8');
const outDir = path.join(ROOT, 'web', 'voice');
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (f.endsWith('.html')) fs.unlinkSync(path.join(outDir, f));
const md = ['# قائمة كل الأصوات في اللعبة التعليمية', '', `كل الجمل اللي الطفل بيسمعها: ${lines.length} جملة بصوت فاطمة (ElevenLabs). كل مستوى ليه صفحة تسجيل في \`web/voice/\` (وعلى الديمو: \`/voice/\`).`, '', '| الملف | عدد الجمل |', '|---|---|'];
for (const g of groups) {
  const items = g.ids.map((id) => ({ id, text: byId.get(id).text, reading: reading(byId.get(id).text) }));
  const html = template.replace('__TITLE__', g.title).replace('__GROUP__', g.key).replace('__DATA__', JSON.stringify(items).replace(/</g, '\\u003c'));
  fs.writeFileSync(path.join(outDir, `${g.key}.html`), html);
  md.push(`| ${g.key} — ${g.title} | ${items.length} |`);
}
const idx = ['<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>تسجيل الأصوات</title>',
  '<style>body{font-family:Tajawal,system-ui,sans-serif;background:#1d1250;color:#fff;margin:0;padding:16px;direction:rtl}a{display:flex;justify-content:space-between;gap:12px;background:#2e2080;color:#fff;text-decoration:none;border:2px solid #ffd23a;border-radius:16px;padding:12px 16px;margin:8px 0;font-weight:700}h1{color:#ffd23a}.n{color:#ffd23a}.first{background:#1f7a3a}</style>',
  '<h1>🎙️ تسجيل أصوات اللعبة التعليمية</h1><p>اختار ملف، سجّل كل جملة بصوتك، وفي الآخر اضغط «تنزيل تسجيلاتي» وابعتلي الملف. ابدأ بالمستوى الأول.</p>'];
groups.forEach((g, i) => idx.push(`<a class="${i === 0 ? 'first' : ''}" href="${g.key}.html"><span>${i === 0 ? '⭐ ' : ''}${g.title}</span><span class="n">${g.ids.length}</span></a>`));
fs.writeFileSync(path.join(outDir, 'index.html'), idx.join('\n'));
fs.writeFileSync(path.join(ROOT, 'docs/VOICE_LIST.md'), md.join('\n') + '\n');
// the full list: every sentence with the page (level) that records it, and the clip the app plays now
const csv = ['\ufeffpage,id,text,current_clip'];
for (const g of groups) for (const id of g.ids) csv.push(`${g.key},${id},"${byId.get(id).text.replace(/"/g, '""')}",assets/games/learn_voice/ar/${id}.mp3`);
fs.writeFileSync(path.join(ROOT, 'docs/VOICE_LIST_FULL.csv'), csv.join('\n') + '\n');
console.log(`${groups.length} pages, ${lines.length} sentences, ${used.size} in levels, ${rest.length} general`);
