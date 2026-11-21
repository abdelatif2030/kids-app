// Shared kit of the girls' games (ages 2-4): one DOM stage with a painted background, big round buttons, six places to pick from,
// a voice helper (the app says the words), a finish panel with ONE star (never for time) and a gentle "again". No timers, no scores,
// no locks, no coins, no failing. Pictures are optional: every picture has a fallback so a missing file never breaks a game.
import { h } from '../../../cozy_kit/ui.js';
import { music } from './music.js';

export const loadImg = (base, name) => new Promise((resolve) => {
  const img = new Image();
  let done = false;
  const fin = (v) => { if (!done) { done = true; resolve(v); } };
  img.onload = () => fin(img.naturalWidth > 0 ? img : null);
  img.onerror = () => fin(null);
  setTimeout(() => fin(null), 7000);
  img.src = `${base.replace(/\/?$/, '/')}art/${name}.webp`;
});

export async function loadAll(base, names) {
  const out = {};
  await Promise.all(names.map(async (n) => { out[n] = await loadImg(base, n); }));
  return out;
}

export const CSS = `
.gk-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a2a5a;user-select:none;-webkit-user-select:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;background:linear-gradient(180deg,#ffd8ec,#e8d8ff)}
.gk-bg{position:absolute;inset:0;background-size:cover;background-position:center}
.gk-top{position:absolute;top:calc(var(--u)*2);left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--u)*2);z-index:5;direction:ltr;pointer-events:none}
.gk-top>*{pointer-events:auto}
.gk-rb{width:calc(var(--u)*11);height:calc(var(--u)*11);min-width:56px;min-height:56px;border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ff8ac8,#d84aa0);color:#fff;font-size:calc(var(--u)*5.6);display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.8) 0 #a82a78;cursor:pointer;padding:0;font-family:inherit}
.gk-rb.p{background:linear-gradient(180deg,#c8a0ff,#8a5ae0);box-shadow:0 calc(var(--u)*.8) 0 #5a3aa8}
.gk-rb:active{transform:translateY(2px) scale(.96)}
.gk-title{font-weight:900;font-size:calc(var(--u)*5);color:#fff;text-shadow:0 2px 0 #b83a90,0 0 12px rgba(255,255,255,.6);text-align:center}
.gk-btn{min-height:max(56px,calc(var(--u)*13));padding:0 calc(var(--u)*6);border-radius:999px;border:calc(var(--u)*.7) solid #fff;background:linear-gradient(180deg,#ff8ac8,#d84aa0);color:#fff;font-weight:900;font-size:calc(var(--u)*5.4);box-shadow:0 calc(var(--u)*.9) 0 #a82a78;cursor:pointer;font-family:inherit}
.gk-btn.go{background:linear-gradient(180deg,#7ae88a,#2ab85a);box-shadow:0 calc(var(--u)*.9) 0 #1a8a3a}
.gk-btn:active{transform:translateY(2px) scale(.97)}
.gk-dim{position:absolute;inset:0;background:rgba(80,20,80,.45);display:flex;align-items:center;justify-content:center;z-index:20}
.gk-card{background:linear-gradient(180deg,#fff0fa,#ffd8f0);border:calc(var(--u)*.8) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) calc(var(--u)*4) rgba(120,20,100,.4);text-align:center;max-width:92%}
.gk-places{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*2.4);margin-top:calc(var(--u)*2)}
.gk-place{min-width:calc(var(--u)*24);min-height:calc(var(--u)*19);border-radius:calc(var(--u)*3);border:calc(var(--u)*.6) solid #fff;color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.6);cursor:pointer;padding:calc(var(--u)*1);background-size:cover;background-position:center;text-shadow:0 2px 3px rgba(0,0,0,.6);box-shadow:0 calc(var(--u)*.7) 0 rgba(120,30,100,.5);font-family:inherit}
.gk-place.on{outline:calc(var(--u)*.8) solid #ffe06a}
.gk-place i{font-style:normal;font-size:calc(var(--u)*7)}
.gk-stars{font-size:calc(var(--u)*11);filter:drop-shadow(0 3px 0 rgba(180,100,0,.4));animation:gkpop .6s ease-out}
@keyframes gkpop{0%{transform:scale(.2) rotate(-30deg);opacity:0}70%{transform:scale(1.25) rotate(8deg)}100%{transform:scale(1) rotate(0);opacity:1}}
.gk-spark{position:absolute;pointer-events:none;font-size:calc(var(--u)*5);animation:gkspark 1s ease-out forwards;z-index:9}
@keyframes gkspark{0%{transform:translate(0,0) scale(.4);opacity:1}100%{transform:translate(var(--dx),var(--dy)) scale(1.3) rotate(120deg);opacity:0}}
.gk-bounce{animation:gkb .5s ease-out}
.gk-fairy{position:absolute;left:calc(var(--u)*1.5);top:calc(var(--u)*14);height:calc(var(--u)*24);z-index:4;pointer-events:none;animation:gkfairy 2.4s ease-in-out forwards;filter:drop-shadow(0 3px 4px rgba(120,20,100,.35))}
@keyframes gkfairy{0%{opacity:0;transform:translateY(8px) scale(.7)}15%{opacity:1;transform:translateY(0) scale(1)}80%{opacity:1;transform:translateY(-6px)}100%{opacity:0;transform:translateY(-14px)}}
@keyframes gkb{0%{transform:scale(1)}35%{transform:scale(1.14)}70%{transform:scale(.96)}100%{transform:scale(1)}}
@media (prefers-reduced-motion:reduce){.gk-stars,.gk-spark,.gk-bounce{animation:none}}
`;

export const STAGE_FALLBACK = [
  ['#ffd8ec', '#e8d8ff'], ['#d8f8e0', '#fff8d8'], ['#d8ecff', '#f4faff'], ['#ffecc8', '#c8f0ff'], ['#d8d8ff', '#a8e0c8'], ['#ffd8e8', '#ffe8a8'],
];

/**
 * Builds the stage shell: a background, a top bar (back, title, places), the finish card and sparkles.
 * opts: { post, lang, title, places:[{ar,en,emoji}], bgs:[img|null x6], onPlace(i) }
 * returns { root, layer, setBg(i), say(text), sparkle(x,y), finish(onAgain,line), openPlaces(), place, dispose() }
 */
export function makeStage(el, opts) {
  const { post, lang, title, places, bgs, onPlace } = opts;
  if (!document.getElementById('gk-style')) document.head.append(h('style', { id: 'gk-style' }, CSS));
  const en = lang === 'en';
  const root = h('div', { class: 'gk-root', dir: en ? 'ltr' : 'rtl' });
  el.append(root);
  const bg = h('div', { class: 'gk-bg' });
  const layer = h('div', { class: 'gk-layer', style: 'position:absolute;inset:0' });
  root.append(bg, layer);
  const fit = () => {
    const w = el.clientWidth || innerWidth;
    const hh = el.clientHeight || innerHeight;
    root.style.setProperty('--u', `${Math.min(w, hh * 1.6) / 100}px`);
  };
  fit();
  const ro = new ResizeObserver(fit);
  ro.observe(el);
  let place = 0;
  const setBg = (i) => {
    place = i;
    const img = bgs && bgs[i];
    if (img) bg.style.background = `url(${img.src}) center/cover no-repeat`;
    else { const [a, b] = STAGE_FALLBACK[i % STAGE_FALLBACK.length]; bg.style.background = `linear-gradient(180deg,${a},${b})`; }
  };
  setBg(0);
  let fairyN = 0;
  const fairy = () => { // the guide fairy pops up for a moment each time something is said (small, never in the way)
    const names = [2, 4, 5, 6, 8, 12, 1, 3];
    const im = opts.fairy ? opts.fairy[names[fairyN++ % names.length]] : null;
    if (!im) return;
    const e = h('img', { class: 'gk-fairy', src: im.src, alt: '', draggable: 'false' });
    root.append(e);
    setTimeout(() => e.remove(), 2500);
  };
  // no spoken voice (owner 2026-11-22): every reward is a note of an interactive melody, plus the little fairy
  const say = (t) => { if (t) { music.tap(); fairy(); } };
  const sparkle = (x, y, n = 8) => {
    music.pop();
    const r = root.getBoundingClientRect();
    for (let i = 0; i < n; i++) {
      const s = h('div', { class: 'gk-spark', style: `left:${x - r.left}px;top:${y - r.top}px;--dx:${(Math.random() - 0.5) * 160}px;--dy:${-30 - Math.random() * 120}px` }, ['✨', '💖', '⭐', '🌸', '🦋'][i % 5]);
      root.append(s);
      setTimeout(() => s.remove(), 1000);
    }
  };
  const openPlaces = () => {
    const dim = h('div', { class: 'gk-dim' });
    const card = h('div', { class: 'gk-card' },
      h('div', { class: 'gk-title', style: 'color:#b83a90;text-shadow:none' }, en ? 'Pick a place!' : 'اختاري مكان!'),
      h('div', { class: 'gk-places' }, places.map((p, i) => h('button', {
        class: `gk-place${i === place ? ' on' : ''}`,
        style: bgs && bgs[i]
          ? `background-image:linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.35)),url(${bgs[i].src})`
          : `background:linear-gradient(180deg,${STAGE_FALLBACK[i % 6][0]},${STAGE_FALLBACK[i % 6][1]});color:#7a2a6a;text-shadow:none`,
        onclick: () => { dim.remove(); setBg(i); if (onPlace) onPlace(i); say(en ? p.en : p.ar); },
      }, h('i', {}, p.emoji), en ? p.en : p.ar))),
      h('button', { class: 'gk-btn', style: 'margin-top:calc(var(--u)*3)', onclick: () => dim.remove() }, en ? 'OK' : 'تمام'));
    dim.append(card);
    root.append(dim);
  };
  const finish = (onAgain, line) => {
    const dim = h('div', { class: 'gk-dim' }, h('div', { class: 'gk-card' },
      h('div', { class: 'gk-stars' }, '⭐'),
      h('div', { class: 'gk-title', style: 'color:#b83a90;text-shadow:none;margin:calc(var(--u)*2) 0' }, line || (en ? 'Well done!' : 'برافو!')),
      h('button', { class: 'gk-btn go', onclick: () => { dim.remove(); onAgain(); } }, en ? 'Again!' : 'تاني!')));
    root.append(dim);
    music.success(); fairy();
    post({ type: 'star' });
  };
  root.append(h('div', { class: 'gk-top' },
    h('button', { class: 'gk-rb', 'aria-label': en ? 'Back' : 'رجوع', onclick: () => post({ type: 'exit' }) }, en ? '←' : '→'),
    h('div', { class: 'gk-title' }, title),
    h('button', { class: 'gk-rb p', 'aria-label': en ? 'Places' : 'الأماكن', onclick: openPlaces }, '🗺️')));
  return { root, layer, setBg, say, sparkle, finish, openPlaces, get place() { return place; }, dispose() { ro.disconnect(); root.remove(); } };
}
