// Makes several TAKES of each sentence you want redone (different voice settings), builds one listening page where you pick
// the best take (or keep the old one), and applies your picks.
//   ELEVENLABS_API_KEY=... node tools/game_voice/takes.mjs make  <list.txt> <work dir>     (list: one plain sentence per line)
//   node tools/game_voice/takes.mjs page  <list.txt> <work dir>                             (-> <work dir>/pick_takes.html)
//   node tools/game_voice/takes.mjs apply <picks.json> <work dir>                          (copies the chosen takes into the game)
// The voice is Fatima (eleven_multilingual_v2). The text sent is the diacritized reading from tashkeel.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '../..');
const CLIPS = path.join(ROOT, 'assets/games/learn_voice/ar');
const VOICE = 'I3u6waC588j43py1kDN2';
const [, , cmd, a1, a2] = process.argv;
const TASH = JSON.parse(fs.readFileSync(path.join(HERE, 'tashkeel.json'), 'utf8'));
const LINES = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const idOf = new Map(LINES.map((l) => [l.text, l.id]));
const NUM = new Map(); // optional numbers for the page: a list line may be  N<TAB>sentence
const readList = (f) => fs.readFileSync(f, 'utf8').split(String.fromCharCode(10)).map((x) => x.trim()).filter(Boolean).map((x) => { const m = x.match(/^(\d+)	(.*)$/); if (m) { NUM.set(m[2], +m[1]); return m[2]; } return x; });
// three takes: clear and steady / natural / lively; all a little slower than normal so a child can follow
const TAKES = {
  A: { stability: 0.75, similarity_boost: 0.85, style: 0, speed: 0.92 },
  B: { stability: 0.55, similarity_boost: 0.8, style: 0, speed: 0.92 },
  C: { stability: 0.38, similarity_boost: 0.75, style: 0.15, speed: 0.95 },
};

// sentences where the three takes differ in the SPELLING of the reading, not the settings (how "يلا" is said)
const V = (rest) => [`يَلَّا ${rest}`, `يَالَّا ${rest}`, `يَلَا ${rest}`];
const VARIANTS = {
  'يلا نبدأ المغامرة!': V('نِبْدَأ المُغَامْرَه!'), 'يلا نتعشى': V('نِتْعَشَّى'), 'يلا نروح الحضانة': V('نِرُوح الحَضَانَه'),
  'يلا نستحمّى': V('نِسْتَحَمَّى'), 'يلا نغسل إيدينا': V('نِغْسِل إِيدِينَا'), 'يلا نغسل سناننا': V('نِغْسِل سِنَانِنَا'), 'يلا نفطر': V('نِفْطَر'),
};
// round 3 (the owner marked these 'not liked'): other spellings and speeds
const BR = (x) => ` <break time="${x}s" />`;
// the heart: a plain قلب came out as 'galb'; three ways to say it (Egyptian hamza / fusha with damma / very slow qaf)
const H = (rest) => [{ t: `دِي أَلْب${rest}`, s: { speed: 0.88 } }, { t: `دِي قَلْبُ${rest}`, s: { speed: 0.82 } }, { t: `دِي قَـــلْب${rest}`, s: { speed: 0.7, stability: 0.75 } }];
Object.assign(VARIANTS, {
  'إيه الحرف اللي بعد الزاي؟': [{ t: 'إِيه الحَرْف اللِّي بَعْد حَرْف الزَّاي؟', s: { speed: 0.88 } }, { t: 'إِيه الحَرْف اللِّي بَعْد الزَّاي؟' + BR(0.4), s: { speed: 0.8 } }, { t: 'إِيه الحَرْف اللِّي بَعْد زَاي؟', s: { speed: 0.88 } }],
  'الكنز فوق العلم': [{ t: 'الكَنْز فُوقَا العَلَم', s: { speed: 0.88 } }, { t: 'الكَنْز فَوْقَ العَلَم', s: { speed: 0.88 } }, { t: 'الكَنْز فُوقَ العَلَم', s: { speed: 0.8, stability: 0.75 } }],
  'تسعتاشر': [{ t: 'تِسَعْ تَاشَر', s: { speed: 0.78 } }, { t: 'تِسْعَتَاشَر' + BR(0.5), s: { speed: 0.85 } }, { t: 'تِسَعْتَاشَر.', s: { speed: 0.85, stability: 0.8 } }],
  'تلاتاشر': [{ t: 'تَلَاتْ تَاشَر', s: { speed: 0.78 } }, { t: 'تَلَاتَاشَر' + BR(0.5), s: { speed: 0.85 } }, { t: 'تَلَاتَاشَر.', s: { speed: 0.8, stability: 0.8 } }],
  'تلاتة': [{ t: 'تَلَاتَه' + BR(0.5), s: { speed: 0.78 } }, { t: 'تَلَااتَه', s: { speed: 0.85 } }, { t: 'تَلَاتَه', s: { speed: 0.85, stability: 0.9 } }],
  'دي قلب': H('', 'قلب'),
  'دي قلب أحمر': H(' أَحْمَر', 'قلب'),
  'دي قلب أصفر': H(' أَصْفَر', 'قلب'),
  'دي قلب برتقالي': [{ t: 'دِي أَلْب بُرْتُأَانِي', s: { speed: 0.85 } }, { t: 'دِي قَلْبُ بُرْتُقَالِي', s: { speed: 0.82 } }, { t: 'دِي أَلْب بُرْتُأَالِي', s: { speed: 0.85 } }],
  'نقول لصاحبنا كلمة حلوة ونحبه': [{ t: 'نِقُول لِصَاحِبْنَا كَلِمَه حِلْوَه وِنِحِبُّه', s: {} }, { t: 'نِقُول لِصَاحِيبِنَا كَلِمَه حِلْوَه وِنِحِبُّه', s: {} }, { t: 'نِقُول لِصَاحْبِنَا كَلِمَة حِلْوَة وِنِحِبُّه', s: { stability: 0.75 } }],
});
// sentences that need more time (a word was swallowed): slower
const SLOW = new Set(['اتناشر', 'تسعتاشر', 'تلاتاشر', 'دي قلب', 'دي قلب أحمر', 'دي قلب أصفر', 'دي قلب برتقالي']);

async function tts(text, settings) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) throw new Error('Set ELEVENLABS_API_KEY');
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_44100_64`, {
    method: 'POST', headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: settings }),
  });
  if (!r.ok) throw new Error(`elevenlabs ${r.status} ${await r.text()}`);
  return Buffer.from(await r.arrayBuffer());
}

if (cmd === 'make') {
  const work = path.resolve(a2); fs.mkdirSync(path.join(work, 'takes'), { recursive: true }); fs.mkdirSync(path.join(work, 'old'), { recursive: true });
  let n = 0;
  for (const text of readList(a1)) {
    const id = idOf.get(text);
    if (!id) { console.log('NOT IN THE GAME:', text); continue; }
    const oldF = path.join(CLIPS, `${id}.mp3`);
    if (fs.existsSync(oldF) && !fs.existsSync(path.join(work, 'old', `${id}.mp3`))) fs.copyFileSync(oldF, path.join(work, 'old', `${id}.mp3`));
    for (const [ki, [k, s]] of Object.entries(TAKES).entries()) {
      const f = path.join(work, 'takes', `${id}_${k}.mp3`);
      if (fs.existsSync(f)) continue;
      const v = VARIANTS[text] ? VARIANTS[text][ki] : null; // a variant is a reading, or { t: reading, s: settings }
      const reading = v ? (typeof v === 'string' ? v : v.t) : TASH[text] || text;
      fs.writeFileSync(f, await tts(reading, v ? (typeof v === 'string' ? TAKES.B : { ...TAKES.B, ...v.s }) : SLOW.has(text) ? { ...s, speed: 0.82 } : s)); n++;
      await new Promise((r) => setTimeout(r, 120));
    }
    console.log(`${id}  ${text}`);
  }
  console.log(`${n} takes made`);
} else if (cmd === 'page') {
  const work = path.resolve(a2);
  const items = [];
  for (const text of readList(a1)) {
    const id = idOf.get(text); if (!id) continue;
    const b = (f) => (fs.existsSync(f) ? fs.readFileSync(f).toString('base64') : null);
    items.push({ id, n: NUM.get(text) || 0, text, read: TASH[text] || '', old: b(path.join(work, 'old', `${id}.mp3`)), A: b(path.join(work, 'takes', `${id}_A.mp3`)), B: b(path.join(work, 'takes', `${id}_B.mp3`)), C: b(path.join(work, 'takes', `${id}_C.mp3`)) });
  }
  const html = `<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>اختار أحسن نسخة</title>
<style>body{font-family:system-ui,Tahoma,sans-serif;background:#f4f0fc;margin:0;color:#3a2a5a}header{position:sticky;top:0;background:#fff;box-shadow:0 2px 8px rgba(60,40,100,.15);padding:12px 16px;z-index:5}h1{font-size:19px;margin:0 0 6px}p{margin:0;color:#7a6a9a;font-size:14px}.t{border:none;background:#6a3ad0;color:#fff;border-radius:20px;padding:9px 16px;font:inherit;font-weight:700;cursor:pointer;margin-top:8px}.c{background:#fff;border-radius:16px;margin:10px 14px;padding:12px 14px;box-shadow:0 2px 6px rgba(60,40,100,.1);border-right:8px solid #d8ccf0}.c.done{border-right-color:#2aa86a}.c.no{border-right-color:#d8344a}.hd{display:flex;gap:10px;align-items:baseline}.nm{background:#6a3ad0;color:#fff;border-radius:12px;padding:2px 10px;font-weight:800}.tx{font-size:22px;font-weight:800}.rd{font-size:14px;color:#8a7aaa;margin:2px 0 8px}.o{display:flex;gap:8px;flex-wrap:wrap}.o label{display:flex;align-items:center;gap:6px;border:2px solid #d8ccf0;border-radius:16px;padding:4px 10px;cursor:pointer;font-weight:700}.o label.sel{background:#e8f8ee;border-color:#2aa86a}.o label.bad{border-color:#e8a0aa}.o label.bad.sel{background:#ffe8ec;border-color:#d8344a}.o button{border:none;background:#6a3ad0;color:#fff;border-radius:50%;width:34px;height:34px;cursor:pointer}</style>
<header><h1>🎧 اختار أحسن نسخة لكل جملة</h1><p>دوس ▶ تسمع. بعدين علّم دايرة الاختيار: <b>القديمة / أ / ب / ج</b> للأحسن، أو <b>❌ مش عاجبني</b> لو ولا واحدة عاجباك. الجملة اللي مش هتعلّم عليها هتفضل زي ما هي.</p><button class="t" id="copy">انسخ اختياراتي</button> <span id="cnt"></span></header><div id="l"></div>
<script>
const D=${JSON.stringify(items)};const L=document.getElementById('l');const au=new Audio();const picks={};
const NAMES={old:'القديمة',A:'أ',B:'ب',C:'ج',no:'❌ مش عاجبني'};
D.forEach((d,i)=>{const c=document.createElement('div');c.className='c';c.innerHTML='<div class="hd"><span class="nm"></span><span class="tx"></span></div><div class="rd"></div><div class="o"></div>';c.querySelector('.nm').textContent='#'+(d.n||i+1);c.querySelector('.tx').textContent=d.text;c.querySelector('.rd').textContent='القراءة: '+d.read;const o=c.querySelector('.o');
 for(const k of ['old','A','B','C','no']){if(k!=='no'&&!d[k])continue;const lab=document.createElement('label');if(k==='no')lab.className='bad';if(k!=='no'){const b=document.createElement('button');b.textContent='▶';b.onclick=e=>{e.preventDefault();au.src='data:audio/mpeg;base64,'+d[k];au.play()};lab.append(b)}const r=document.createElement('input');r.type='radio';r.name='r'+i;r.onchange=()=>{picks[i]=k;[...o.children].forEach(x=>x.classList.remove('sel'));lab.classList.add('sel');c.className='c '+(k==='no'?'no':'done');document.getElementById('cnt').textContent=Object.keys(picks).length+' / '+D.length};lab.append(r,document.createTextNode(NAMES[k]));o.append(lab)}
 L.append(c)});
document.getElementById('copy').onclick=()=>{const t=Object.entries(picks).map(([i,k])=>'id='+D[i].id+' | #'+(D[i].n||+i+1)+' | '+D[i].text+' | '+NAMES[k]).join(String.fromCharCode(10));navigator.clipboard.writeText(t).then(()=>alert('اتنسخ ('+Object.keys(picks).length+' اختيار). الصقه في الشات.'),()=>prompt('انسخ ده:',t))};
</script></html>`;
  const out = path.join(work, 'pick_takes.html');
  fs.writeFileSync(out, html);
  console.log(`${items.length} sentences, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB -> ${out}`);
} else if (cmd === 'apply') {
  const raw = fs.readFileSync(a1, 'utf8'); const work = path.resolve(a2);
  // either the old JSON {id: 'A'} or the lines the page copies: id=... | #n | text | أ
  const LAB = { 'القديمة': 'old', 'أ': 'A', 'ب': 'B', 'ج': 'C', '❌ مش عاجبني': 'no' };
  const picks = raw.trim().startsWith('{') ? JSON.parse(raw) : Object.fromEntries(raw.split(String.fromCharCode(10)).map((l) => l.match(/id=([0-9a-f]+) \|.*\| (القديمة|أ|ب|ج|❌ مش عاجبني)\s*$/)).filter(Boolean).map((m) => [m[1], LAB[m[2]]]));
  let n = 0, kept = 0;
  for (const [id, k] of Object.entries(picks)) {
    if (k === 'no') { console.log('NOT LIKED (left as it is now):', id); kept++; continue; }
    if (k === 'old') { const o = path.join(work, 'old', `${id}.mp3`); if (fs.existsSync(o)) { fs.copyFileSync(o, path.join(CLIPS, `${id}.mp3`)); n++; } continue; }
    const src = path.join(work, 'takes', `${id}_${k}.mp3`);
    if (!fs.existsSync(src)) { console.log('missing', src); continue; }
    fs.copyFileSync(src, path.join(CLIPS, `${id}.mp3`)); n++;
  }
  console.log(`${n} clips replaced, ${kept} kept as they were`);
} else console.log('usage: make | page | apply (see the top of this file)');
