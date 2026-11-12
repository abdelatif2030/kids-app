// Builds ONE self-contained page to listen to every Arabic clip of the learning games (and to see which ones changed
// recently). Nothing is uploaded: the audio is embedded in the page.
//   node tools/game_voice/listening_page.mjs   ->   docs/voice_preview/26_all_voices_now.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, 'assets/games/learn_voice/ar');
const lines = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/games/learn_voice/lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
const rows = [];
for (const l of lines) {
  const f = path.join(DIR, `${l.id}.mp3`);
  if (!fs.existsSync(f)) continue;
  rows.push({ t: l.text, a: fs.readFileSync(f).toString('base64'), m: fs.statSync(f).mtimeMs });
}
const newest = Math.max(...rows.map((r) => r.m));
const data = rows.map((r) => ({ t: r.t, a: r.a, fresh: newest - r.m < 6 * 3600 * 1000 }));
const html = `<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>كل أصوات اللعبة</title>
<style>body{font-family:system-ui,Tahoma,sans-serif;background:#f4f0fc;margin:0;color:#3a2a5a}header{position:sticky;top:0;background:#fff;box-shadow:0 2px 8px rgba(60,40,100,.15);padding:12px 16px;z-index:5}h1{font-size:20px;margin:0 0 8px}.row{display:flex;gap:8px;flex-wrap:wrap}input[type=search]{flex:1;min-width:140px;padding:9px 14px;border-radius:20px;border:2px solid #d8ccf0;font:inherit}.t{border:none;background:#6a3ad0;color:#fff;border-radius:20px;padding:9px 16px;font:inherit;font-weight:700;cursor:pointer}.t.alt{background:#fff;color:#6a3ad0;border:2px solid #6a3ad0}.list{padding:12px 16px 60px}.r{display:flex;align-items:center;gap:12px;background:#fff;border-radius:16px;padding:9px 14px;margin-bottom:8px;box-shadow:0 2px 6px rgba(60,40,100,.1)}.r.on{background:#fff3e0}.r.bad{background:#ffe8ec}.r.fresh{border-right:6px solid #2aa86a}.n{width:34px;color:#9a8aba;font-size:13px;text-align:center}.p{flex:none;width:46px;height:46px;border-radius:50%;border:none;background:#6a3ad0;color:#fff;font-size:20px;cursor:pointer}.tx{flex:1;font-size:22px;font-weight:700}.f{font-size:12px;color:#2aa86a;white-space:nowrap}.bd{border:2px solid #c0a0a8;background:#fff;color:#9a5a6a;border-radius:14px;padding:6px 10px;font:inherit;cursor:pointer}.hide{display:none}</style>
<header><h1>🔊 كل أصوات اللعبة (<span id="cnt"></span>)</h1><div class="row"><input type="search" id="q" placeholder="دوّر..."><button class="t" id="all">▶ شغّل الكل ورا بعض</button><button class="t alt" id="stop">⏹ وقّف</button><button class="t alt" id="onlyfresh">الجديدة بس 🟢</button><button class="t alt" id="onlybad">اللي علّمتها 🚩</button><button class="t alt" id="copy">انسخ اللي علّمتها</button></div></header>
<div class="list" id="list"></div>
<script>
const D=${JSON.stringify(data)};
const list=document.getElementById('list');let cur=null,queue=null;
const audio=new Audio();
function row(i,d){const r=document.createElement('div');r.className='r'+(d.fresh?' fresh':'');r.dataset.i=i;r.innerHTML='<span class="n">'+(i+1)+'</span><button class="p">▶</button><span class="tx"></span>'+(d.fresh?'<span class="f">جديد</span>':'')+'<button class="bd">🚩</button>';r.querySelector('.tx').textContent=d.t;
 r.querySelector('.p').onclick=()=>play(i);r.querySelector('.bd').onclick=()=>{r.classList.toggle('bad')};return r}
D.forEach((d,i)=>list.append(row(i,d)));
document.getElementById('cnt').textContent=D.length;
function play(i,chain){queue=chain?i:null;audio.src='data:audio/mpeg;base64,'+D[i].a;audio.play();document.querySelectorAll('.r.on').forEach(x=>x.classList.remove('on'));const r=list.children[i];r.classList.add('on');r.scrollIntoView({block:'center',behavior:'smooth'});cur=i}
audio.onended=()=>{if(queue!==null){let n=cur+1;while(n<D.length&&list.children[n].classList.contains('hide'))n++;if(n<D.length)play(n,true)}};
document.getElementById('all').onclick=()=>{let n=0;while(n<D.length&&list.children[n].classList.contains('hide'))n++;if(n<D.length)play(n,true)};
document.getElementById('stop').onclick=()=>{queue=null;audio.pause()};
document.getElementById('q').oninput=e=>{const q=e.target.value.trim();[...list.children].forEach((r,i)=>r.classList.toggle('hide',!!q&&!D[i].t.includes(q)))};
document.getElementById('onlyfresh').onclick=()=>{[...list.children].forEach((r,i)=>r.classList.toggle('hide',!D[i].fresh))};
document.getElementById('onlybad').onclick=()=>{[...list.children].forEach(r=>r.classList.toggle('hide',!r.classList.contains('bad')))};
document.getElementById('copy').onclick=()=>{const t=[...list.children].filter(r=>r.classList.contains('bad')).map(r=>D[r.dataset.i].t).join(String.fromCharCode(10));navigator.clipboard.writeText(t).then(()=>alert('اتنسخت '+t.split(String.fromCharCode(10)).filter(Boolean).length+' جملة. ابعتهالي.'))};
</script></html>`;
const out = path.join(ROOT, 'docs/voice_preview/26_all_voices_now.html');
fs.writeFileSync(out, html);
console.log(`${data.length} clips, ${data.filter((d) => d.fresh).length} new, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB -> ${out}`);
