// Makes the recording page for the learning games' voice: docs/voice_recorder/index.html (one self-contained file).
//   node tools/game_voice/lines.mjs      (the list of sentences, if it changed)
//   node tools/game_voice/recorder.mjs   (rebuilds the page and the plain text list)
// The page shows every Arabic sentence with a big record button, a play button and a tick; recordings are kept in the
// browser (IndexedDB) so you can stop and come back; "Download all" gives one zip with one file per sentence named
// <id>.webm (or .mp4 on iPhone). Then:  node tools/game_voice/import_recordings.mjs <folder with the files>
// Open it from http://127.0.0.1:8093/docs/voice_recorder/index.html (localhost allows the microphone) or any https page.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const lines = JSON.parse(readFileSync(join(ROOT, 'assets', 'games', 'learn_voice', 'lines.json'), 'utf8')).filter((l) => l.lang === 'ar');
mkdirSync(join(ROOT, 'docs', 'voice_recorder'), { recursive: true });

writeFileSync(join(ROOT, 'docs', 'GAME_VOICE_LINES_AR.txt'),
  'الجمل اللي الألعاب بتقولها (قراءة واحدة لكل سطر، بصوت واضح ودافي وبهدوء، زي ما بتكلم طفل صغير)\n' +
  `عددها: ${lines.length}\n\n` + lines.map((l, i) => `${String(i + 1).padStart(3, '0')}. ${l.text}`).join('\n') + '\n');

const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>تسجيل أصوات الألعاب</title>
<style>
:root{--p:#6a3ad0;--bg:#f4f0fc;--ink:#3a2a5a}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,Tahoma,sans-serif;background:var(--bg);color:var(--ink)}
header{position:sticky;top:0;z-index:5;background:#fff;box-shadow:0 2px 8px rgba(60,40,100,.15);padding:12px 16px}
h1{font-size:20px;margin:0 0 6px}.bar{height:10px;background:#e8e0fa;border-radius:6px;overflow:hidden}.bar i{display:block;height:100%;background:#3ec86a;width:0}
.row1{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:8px}
input[type=search]{flex:1;min-width:140px;padding:10px 14px;border-radius:20px;border:2px solid #d8ccf0;font:inherit}
button.t{border:none;background:var(--p);color:#fff;border-radius:20px;padding:10px 16px;font:inherit;font-weight:700;cursor:pointer}
button.t.alt{background:#fff;color:var(--p);border:2px solid var(--p)}
.tips{background:#fff8e0;border-radius:14px;margin:12px 16px;padding:10px 14px;font-size:15px;line-height:1.6}
.list{padding:0 16px 80px}
.r{display:flex;align-items:center;gap:12px;background:#fff;border-radius:18px;padding:12px 14px;margin-bottom:10px;box-shadow:0 2px 6px rgba(60,40,100,.1);border:3px solid transparent}
.r.done{border-color:#3ec86a}.r.rec{border-color:#e8304a;background:#fff3f5}
.r .n{flex:none;width:34px;color:#9a8aba;font-size:13px;text-align:center}
.r .tx{flex:1;font-size:24px;font-weight:700;line-height:1.4}
.r button{flex:none;width:56px;height:56px;border-radius:50%;border:none;font-size:22px;cursor:pointer;color:#fff}
.rb{background:#e8304a}.pb{background:var(--p)}.xb{background:#b8b0d0;width:40px!important;height:40px!important;font-size:16px!important}
.r button:disabled{opacity:.3}
.lvl{position:fixed;left:0;right:0;bottom:0;height:6px;background:#e8304a;transform-origin:left;transform:scaleX(0)}
.hide{display:none!important}
</style></head><body>
<header><h1>🎙️ تسجيل أصوات الألعاب <small id="cnt"></small></h1><div class="bar"><i id="bar"></i></div>
<div class="row1"><input type="search" id="q" placeholder="دوّر على جملة..."><button class="t alt" id="onlyTodo">اللي لسه بس</button><button class="t" id="zip">⬇ نزّل الكل (zip)</button></div></header>
<div class="tips">نصايح: مكان هادي، الميكروفون على بعد حوالي 15–20 سم، صوت دافي وواضح وبطيء شوية (زي ما بتكلم طفل صغير)، وقف ثانية قبل ما تبدأ وبعد ما تخلص. دوس ● تسجّل، ودوس تاني توقف. اسمع ▶، ولو مش عاجبك سجّل تاني.</div>
<div class="list" id="list"></div><div class="lvl" id="lvl"></div>
<script>
const LINES=${JSON.stringify(lines.map((l) => ({ id: l.id, t: l.text })))};
const DB='gv-recorder',ST='clips';let db,rec,stream,cur=null,audio=null,chunks=[],ctx,an,raf;
const open=()=>new Promise((res,rej)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(ST);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const tx=(m)=>db.transaction(ST,m).objectStore(ST);
const get=(k)=>new Promise((res)=>{const r=tx('readonly').get(k);r.onsuccess=()=>res(r.result)});
const put=(k,v)=>new Promise((res)=>{const r=tx('readwrite').put(v,k);r.onsuccess=()=>res()});
const del=(k)=>new Promise((res)=>{const r=tx('readwrite').delete(k);r.onsuccess=()=>res()});
const all=()=>new Promise((res)=>{const out={};const r=tx('readonly').openCursor();r.onsuccess=()=>{const c=r.result;if(c){out[c.key]=c.value;c.continue()}else res(out)}});
const done={};
function refresh(){const n=Object.keys(done).length;document.getElementById('cnt').textContent=' — '+n+' / '+LINES.length;document.getElementById('bar').style.width=(n/LINES.length*100)+'%';}
function row(l,i){const d=document.createElement('div');d.className='r'+(done[l.id]?' done':'');d.id='r'+l.id;
 d.innerHTML='<span class="n">'+(i+1)+'</span><span class="tx"></span><button class="rb" title="سجّل">●</button><button class="pb" title="اسمع" '+(done[l.id]?'':'disabled')+'>▶</button><button class="xb" title="امسح" '+(done[l.id]?'':'disabled')+'>✕</button>';
 d.querySelector('.tx').textContent=l.t;
 d.querySelector('.rb').onclick=()=>toggle(l,d);d.querySelector('.pb').onclick=()=>play(l);d.querySelector('.xb').onclick=async()=>{await del(l.id);delete done[l.id];d.className='r';d.querySelector('.pb').disabled=d.querySelector('.xb').disabled=true;refresh()};
 return d}
const list=document.getElementById('list');LINES.forEach((l,i)=>list.append(row(l,i)));
async function toggle(l,d){
 if(rec&&rec.state==='recording'){rec.stop();return}
 try{stream=stream||await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:true,autoGainControl:true}})}catch(e){alert('مفيش إذن للميكروفون: '+e.message);return}
 if(audio){audio.pause()}
 chunks=[];const mt=['audio/webm;codecs=opus','audio/webm','audio/mp4'].find((m)=>MediaRecorder.isTypeSupported(m));rec=new MediaRecorder(stream,mt?{mimeType:mt}:{});cur={l,d};
 rec.ondataavailable=(e)=>{if(e.data.size)chunks.push(e.data)};
 rec.onstop=async()=>{cancelAnimationFrame(raf);document.getElementById('lvl').style.transform='scaleX(0)';d.classList.remove('rec');d.querySelector('.rb').textContent='●';
  const blob=new Blob(chunks,{type:rec.mimeType||'audio/webm'});if(blob.size<1500)return;await put(l.id,blob);done[l.id]=blob;d.classList.add('done');d.querySelector('.pb').disabled=d.querySelector('.xb').disabled=false;refresh();play(l)};
 d.classList.add('rec');d.querySelector('.rb').textContent='■';rec.start();
 ctx=ctx||new AudioContext();an=ctx.createAnalyser();ctx.createMediaStreamSource(stream).connect(an);const buf=new Uint8Array(an.fftSize);
 (function loop(){an.getByteTimeDomainData(buf);let m=0;for(const v of buf)m=Math.max(m,Math.abs(v-128));document.getElementById('lvl').style.transform='scaleX('+Math.min(1,m/90)+')';raf=requestAnimationFrame(loop)})()}
function play(l){const b=done[l.id];if(!b)return;if(audio)audio.pause();audio=new Audio(URL.createObjectURL(b));audio.play()}
document.getElementById('q').oninput=(e)=>{const q=e.target.value.trim();LINES.forEach((l)=>document.getElementById('r'+l.id).classList.toggle('hide',q&&!l.t.includes(q)))};
let todo=false;document.getElementById('onlyTodo').onclick=(e)=>{todo=!todo;e.target.textContent=todo?'الكل':'اللي لسه بس';LINES.forEach((l)=>document.getElementById('r'+l.id).classList.toggle('hide',todo&&!!done[l.id]))};
// a store-only zip (no compression), made right here
function crc(b){let c,t=crc.t||(crc.t=Array.from({length:256},(_,n)=>{c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;return c>>>0}));let r=0xFFFFFFFF;for(const v of b)r=t[(r^v)&255]^(r>>>8);return(r^0xFFFFFFFF)>>>0}
async function zip(){const files=[];for(const l of LINES){const b=done[l.id];if(b)files.push({n:l.id+(b.type.includes('mp4')?'.mp4':'.webm'),d:new Uint8Array(await b.arrayBuffer())})}
 if(!files.length){alert('لسه ما سجلتش حاجة');return}
 const parts=[],cd=[];let off=0;const u16=(v)=>[v&255,v>>8&255],u32=(v)=>[v&255,v>>8&255,v>>16&255,v>>24&255];
 for(const f of files){const nm=new TextEncoder().encode(f.n),c=crc(f.d);
  const h=new Uint8Array([0x50,0x4b,3,4,20,0,0,8,0,0,0,0,0,0,...u32(c),...u32(f.d.length),...u32(f.d.length),...u16(nm.length),0,0,...nm]);parts.push(h,f.d);
  cd.push(new Uint8Array([0x50,0x4b,1,2,20,0,20,0,0,8,0,0,0,0,0,0,...u32(c),...u32(f.d.length),...u32(f.d.length),...u16(nm.length),0,0,0,0,0,0,0,0,0,0,0,0,...u32(off),...nm]));off+=h.length+f.d.length}
 const cs=cd.reduce((s,x)=>s+x.length,0);const end=new Uint8Array([0x50,0x4b,5,6,0,0,0,0,...u16(files.length),...u16(files.length),...u32(cs),...u32(off),0,0]);
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([...parts,...cd,end],{type:'application/zip'}));a.download='game-voice-recordings.zip';a.click()}
document.getElementById('zip').onclick=zip;
open().then(async(d)=>{db=d;Object.assign(done,await all());LINES.forEach((l,i)=>{const o=document.getElementById('r'+l.id);if(done[l.id]){o.classList.add('done');o.querySelector('.pb').disabled=o.querySelector('.xb').disabled=false}});refresh()});
</script></body></html>`;
writeFileSync(join(ROOT, 'docs', 'voice_recorder', 'index.html'), html);
console.log(`recording page for ${lines.length} sentences: docs/voice_recorder/index.html; list: docs/GAME_VOICE_LINES_AR.txt`);
