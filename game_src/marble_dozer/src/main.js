// «جرّافة الكرات» — Marble Dozer. Entry: window.MarbleDozer.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A physics puzzle (like the owner's video, drawn from scratch): drag to drive a little yellow bulldozer in a wooden arena on a toy mat,
// pushing coloured marbles into the matching hole before the time runs out, with walls, bumpers, conveyor belts, ramps, moving walls and
// multiplier gates; stars by the time left. 2D canvas with a tilted (perspective) look, all art and sound made in code. Ten levels.
import { Game, AW, AH, MR, COLORS, LEVELS, levelDef, normalizeSave } from './sim.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';

const CSS = `
.md-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#3a2a5a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#f6e6ff}
.md-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.md-layer{position:absolute;inset:0;pointer-events:none}
.md-layer button,.md-layer .md-card{pointer-events:auto}
.md-top{position:absolute;top:max(calc(var(--u)*1.5),env(safe-area-inset-top));left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2);direction:ltr}
.md-ribbon{background:linear-gradient(180deg,#ffb84a,#f08a1a);border:calc(var(--u)*.5) solid #fff;color:#fff;font-weight:900;font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.5) calc(var(--u)*5);border-radius:calc(var(--u)*1.4);text-shadow:0 2px 0 #a85a0a;box-shadow:0 calc(var(--u)*.5) 0 rgba(90,40,140,.4)}
.md-timer{display:flex;align-items:center;gap:calc(var(--u)*1.4);background:rgba(58,30,100,.9);border:calc(var(--u)*.4) solid #fff;border-radius:99px;padding:calc(var(--u)*.7) calc(var(--u)*2.4);color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);min-width:calc(var(--u)*50)}
.md-timer .bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:rgba(255,255,255,.25);overflow:hidden;position:relative}
.md-timer .bar b{display:block;height:100%;background:linear-gradient(180deg,#7af05a,#3fb82a);border-radius:99px;transition:width .2s}
.md-timer .bar b.low{background:linear-gradient(180deg,#ff9a6a,#e8503a)}
.md-timer .st{letter-spacing:calc(var(--u)*.2);font-size:calc(var(--u)*3.2)}
.md-timer .st i{font-style:normal}.md-timer .st i.off{filter:grayscale(1);opacity:.35}
.md-counts{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.md-pill{display:flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff;border:calc(var(--u)*.5) solid #4a8ae8;border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4);box-shadow:0 calc(var(--u)*.5) 0 rgba(90,40,140,.3);min-width:calc(var(--u)*17)}
.md-pill i{width:calc(var(--u)*4.4);height:calc(var(--u)*4.4);display:inline-block}
.md-pill.done{border-color:#3fb82a;background:#eaffea}
.md-round{position:absolute;top:max(calc(var(--u)*1.5),env(safe-area-inset-top));width:calc(var(--u)*8.6);height:calc(var(--u)*8.6);border-radius:50%;font-size:calc(var(--u)*4);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,#b88aff,#7a3ad8);border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.5) 0 rgba(58,30,100,.5);pointer-events:auto;z-index:3}
.md-round:active{transform:translateY(calc(var(--u)*.4))}
.md-say{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%) scale(.9);font-weight:900;font-size:calc(var(--u)*8);color:#6ae84a;-webkit-text-stroke:calc(var(--u)*.7) #1a5a1a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #1a5a1a;white-space:nowrap;opacity:0;transition:opacity .25s,transform .25s;pointer-events:none;text-align:center}
.md-say.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.md-say.gold{color:#ffd23a;-webkit-text-stroke-color:#7a4a00;text-shadow:0 calc(var(--u)*.8) 0 #7a4a00}
.md-say small{display:block;font-size:calc(var(--u)*3.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #3a2a5a}
.md-hint{position:absolute;left:50%;bottom:calc(var(--u)*14);transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*5);color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #3a2a5a;paint-order:stroke fill;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap}
.md-hint.show{opacity:1}
.md-dim{position:absolute;inset:0;background:rgba(58,30,100,.5);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.md-card{background:linear-gradient(180deg,#a87af0,#6a3ad0);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*4.4);padding:calc(var(--u)*3.2) calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*72);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*1.6) calc(var(--u)*5) rgba(30,10,70,.5)}
.md-logo{font-size:calc(var(--u)*10);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.8) #7a1a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #4a0a2a;text-align:center;line-height:1.1}
.md-title{font-size:calc(var(--u)*6.4);font-weight:900;color:#ff6a9a;-webkit-text-stroke:calc(var(--u)*.6) #fff;paint-order:stroke fill;text-align:center}
.md-small{font-size:calc(var(--u)*3.6);font-weight:700;text-align:center}
.md-stars{font-size:calc(var(--u)*11)}.md-stars .off{filter:grayscale(1);opacity:.3}
.md-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*11.5);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.8) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.md-btn.alt{background:linear-gradient(180deg,#ffb84a,#f08a1a);box-shadow:0 calc(var(--u)*.8) 0 #a85a0a}
.md-btn.dark{background:linear-gradient(180deg,#8a6ad8,#5a3aa8);box-shadow:0 calc(var(--u)*.8) 0 #2a1a6a;font-size:calc(var(--u)*4.2)}
.md-btn:active{transform:translateY(calc(var(--u)*.5))}
.md-btn:focus-visible,.md-round:focus-visible,.md-lv:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.md-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:calc(var(--u)*1.6);width:100%}
.md-lv{aspect-ratio:1;border-radius:calc(var(--u)*2.6);border:none;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;background:linear-gradient(180deg,#ffb84a,#f08a1a);box-shadow:0 calc(var(--u)*.7) 0 #a85a0a;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}
.md-lv small{font-size:calc(var(--u)*2.4)}
.md-lv.lock{background:linear-gradient(180deg,#c8c8d8,#9a9aaa);box-shadow:0 calc(var(--u)*.7) 0 #6a6a7a}
@media (orientation:landscape){.md-card{width:calc(var(--u)*100);max-width:94vw}.md-lv{aspect-ratio:auto;min-height:calc(var(--u)*8)}}
.md-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;

function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}

const TAU = Math.PI * 2;
const MARBLE = [['#6ad0ff', '#1a78e8'], ['#ff7a8a', '#d8283a'], ['#ffe86a', '#e8a810'], ['#7ae88a', '#1a9a3a'], ['#c89aff', '#7a3ad8']];
const RING = ['#2a8ae8', '#e8323a', '#f0b010', '#2fa85a', '#8a4ad8'];
const BORDER = ['#ff6a8a', '#ffa84a', '#5ac8ff', '#ffe05a', '#7ae88a', '#b08aff'];

/** The shape of each colour's hole (the picture's circle, triangle, star ...), as a small path drawer. */
function shapePath(g, k, x, y, r) {
  g.beginPath();
  if (k === 0) g.arc(x, y, r, 0, TAU);
  else if (k === 1) { g.moveTo(x, y - r); g.lineTo(x + r * 0.95, y + r * 0.7); g.lineTo(x - r * 0.95, y + r * 0.7); g.closePath(); }
  else if (k === 2) { for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); }
  else if (k === 3) { g.rect(x - r * 0.8, y - r * 0.8, r * 1.6, r * 1.6); }
  else { g.moveTo(x, y - r); g.lineTo(x + r, y); g.lineTo(x, y + r); g.lineTo(x - r, y); g.closePath(); }
}

class Game2 {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.easy = this.age <= 4;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    if (!document.getElementById('md-style')) document.head.append(h('style', { id: 'md-style' }, CSS));
    this.root = h('div', { class: 'md-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'md-layer' });
    this.root.append(this.layer);
    this.mode = 'menu';
    this.gm = null;
    this.stick = null;
    this.fx = []; this.texts = []; this.tracks = [];
    this.keys = new Set();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.t0 = performance.now();
    this.last = this.t0;
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch * 0.62) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    // the arena on the screen: a trapezoid (narrower at the top), centred
    const kBottom = Math.min((this.cw * 0.94) / AW, (this.ch * 0.74) / AH);
    this.k = kBottom;
    this.ax = this.cw / 2;
    this.ay = this.ch * 0.2;
    this.ah = AH * kBottom * 0.92;
    this.mat = null;
  }

  /** Perspective: world (x, y) -> screen; the far (top) edge is narrower. */
  P(x, y) { const ny = y / AH; const sc = 0.82 + 0.18 * ny; return [this.ax + (x - AW / 2) * this.k * sc, this.ay + ny * this.ah]; }
  S(y) { return this.k * (0.82 + 0.18 * (y / AH)); }
  /** Screen -> world (for the stick the direction is enough). */

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => { if (e.target.closest('button') || this.mode !== 'play') return; const r = root.getBoundingClientRect(); this.stick = { x0: e.clientX - r.left, y0: e.clientY - r.top, x: e.clientX - r.left, y: e.clientY - r.top, id: e.pointerId }; this._hideHint(); });
    root.addEventListener('pointermove', (e) => { if (!this.stick || e.pointerId !== this.stick.id) return; const r = root.getBoundingClientRect(); this.stick.x = e.clientX - r.left; this.stick.y = e.clientY - r.top; });
    const up = (e) => { if (this.stick && e.pointerId === this.stick.id) this.stick = null; };
    root.addEventListener('pointerup', up); root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'a', 'd', 'w', 's'].includes(k)) { e.preventDefault(); if (e.type === 'keydown') this.keys.add(k); else this.keys.delete(k); }
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this._pause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'md-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _input() {
    if (this.stick) {
      const R = this.u * 12;
      let dx = this.stick.x - this.stick.x0, dy = this.stick.y - this.stick.y0;
      const l = Math.hypot(dx, dy);
      if (l > R) { dx *= R / l; dy *= R / l; this.stick.x0 = this.stick.x - dx; this.stick.y0 = this.stick.y - dy; } // the base follows the finger
      return { sx: dx / R, sy: dy / R };
    }
    const k = this.keys;
    if (k.size) return { sx: (k.has('arrowright') || k.has('d') ? 1 : 0) - (k.has('arrowleft') || k.has('a') ? 1 : 0), sy: (k.has('arrowdown') || k.has('s') ? 1 : 0) - (k.has('arrowup') || k.has('w') ? 1 : 0) };
    return { sx: 0, sy: 0 };
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _say(text, sub = '', secs = 1.6, gold = false) {
    if (!this.sayEl) return;
    this.sayEl.replaceChildren(text, sub ? h('small', {}, sub) : '');
    this.sayEl.className = `md-say show${gold ? ' gold' : ''}`;
    clearTimeout(this._st);
    this._st = setTimeout(() => this.sayEl && this.sayEl.classList.remove('show'), secs * 1000);
  }
  _hideHint() { if (this.hintEl) this.hintEl.classList.remove('show'); }
  _soundBtn() {
    const b = h('button', { class: 'md-round', style: 'right:calc(var(--u)*2)', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }
  _exitBtn() { return h('button', { class: 'md-round', style: 'left:calc(var(--u)*2)', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'); }

  showMenu() {
    this.mode = 'menu';
    this.gm = null;
    this.sound.setMode('menu');
    this._clear();
    const done = Object.keys(this.save.stars).length;
    this.layer.append(this._exitBtn(), this._soundBtn(),
      h('div', { class: 'md-dim', style: 'background:none' }, h('div', { class: 'md-card' },
        h('div', { class: 'md-logo' }, t('title')),
        h('div', { class: 'md-small' }, '🚜 🔵 🔴 🟡'),
        h('div', { class: 'md-grid' }, Array.from({ length: LEVELS }, (_, i) => {
          const n = i + 1;
          const locked = n > this.save.unlocked;
          const st = this.save.stars[n] ?? 0;
          return h('button', { class: `md-lv${locked ? ' lock' : ''}`, 'aria-label': `${t('level')} ${n}`, onclick: () => { if (locked) { this.sound.play('no'); return; } this.startLevel(n); } }, locked ? '🔒' : num(n), h('small', {}, locked ? '' : '⭐'.repeat(st) || '·'));
        })),
        h('button', { class: 'md-btn', onclick: () => this.startLevel(Math.min(this.save.unlocked, LEVELS)) }, '▶ ', t('play')),
        done >= LEVELS ? h('div', { class: 'md-small' }, t('allDone')) : null)));
  }

  startLevel(n) {
    this.n = n;
    this.gm = new Game(n, Math.floor(Math.random() * 1e9), this.easy);
    this.mode = 'play';
    this.fx = []; this.texts = []; this.tracks = [];
    this.stick = null;
    this.burst = { n: 0, t: 0 };
    this.lastTick = 99;
    this._build();
    this.sound.setMode('play');
    const d = this.gm.def;
    this._say(`${t('level').toUpperCase()} ${num(n)}`, t(d.name), 2.2, true);
    if (n === 1) { this.hintEl.classList.add('show'); this._hintT = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), 9000); }
  }

  _build() {
    this._clear();
    const d = this.gm.def;
    this.hud = { time: h('span'), bar: h('b'), stars: h('span', { class: 'st' }), counts: d.holes.map((hl, i) => ({ el: h('span'), pill: null, i })) };
    this.sayEl = h('div', { class: 'md-say' });
    this.hintEl = h('div', { class: 'md-hint' }, '👆 ', t('drag'));
    const pills = d.holes.map((hl, i) => {
      const cv = h('canvas', { width: 44, height: 44, style: 'width:calc(var(--u)*4.4);height:calc(var(--u)*4.4)' });
      const g = cv.getContext('2d'); g.fillStyle = RING[hl.c]; shapePath(g, hl.c, 22, 22, 18); g.fill(); g.lineWidth = 4; g.strokeStyle = '#fff'; g.stroke();
      const pill = h('div', { class: 'md-pill', style: `border-color:${RING[hl.c]}` }, cv, this.hud.counts[i].el);
      this.hud.counts[i].pill = pill;
      return pill;
    });
    this.layer.append(this._exitBtn(), h('button', { class: 'md-round', style: 'left:calc(var(--u)*12)', 'aria-label': t('pause'), onclick: () => this._pause() }, '⏸'), this._soundBtn(),
      h('div', { class: 'md-top' },
        h('div', { class: 'md-ribbon' }, `${t('level').toUpperCase()} ${num(this.n)}`),
        h('div', { class: 'md-timer' }, '⏱ ', this.hud.time, h('div', { class: 'bar' }, this.hud.bar), this.hud.stars),
        h('div', { class: 'md-counts' }, pills)),
      this.sayEl, this.hintEl);
    this._hud();
  }

  _hud() {
    const g = this.gm;
    if (!g || !this.hud) return;
    const s = Math.max(0, Math.ceil(g.timeLeft));
    this.hud.time.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    const f = g.timeLeft / g.def.time;
    this.hud.bar.style.width = `${f * 100}%`;
    this.hud.bar.classList.toggle('low', f < 0.25);
    const st = g.starsLive;
    this.hud.stars.replaceChildren(...[1, 2, 3].map((k) => h('i', { class: k <= st ? '' : 'off' }, '⭐')));
    this.hud.counts.forEach((c) => { const hl = g.holes[c.i]; c.el.textContent = `${num(Math.min(g.counts[c.i], hl.target))}/${num(hl.target)}`; c.pill.classList.toggle('done', g.done[c.i]); });
  }

  _pause() {
    if (this.mode !== 'play') return;
    this.mode = 'paused';
    this.layer.append(h('div', { class: 'md-dim', id: 'md-pause' }, h('div', { class: 'md-card' },
      h('div', { class: 'md-title' }, t('pause')),
      h('button', { class: 'md-btn', onclick: () => { document.getElementById('md-pause')?.remove(); this.mode = 'play'; this.last = performance.now(); } }, '▶ ', t('resume')),
      h('button', { class: 'md-btn alt', onclick: () => this.startLevel(this.n) }, '↻ ', t('replay')),
      h('button', { class: 'md-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  _winCard(stars) {
    this.save.stars[this.n] = Math.max(this.save.stars[this.n] ?? 0, stars);
    if (this.n + 1 > this.save.unlocked && this.n < LEVELS) this.save.unlocked = this.n + 1;
    this._saveNow();
    this.sound.play('win');
    this.mode = 'won';
    const last = this.n >= LEVELS;
    this.layer.append(h('div', { class: 'md-dim' }, h('div', { class: 'md-card' },
      h('div', { class: 'md-title' }, t('complete')),
      h('div', { class: 'md-small' }, `${t('level')} ${num(this.n)} · ${t('win')}`),
      h('div', { class: 'md-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= stars ? '' : 'off' }, '⭐'))),
      last ? h('div', { class: 'md-small' }, t('allDone')) : h('button', { class: 'md-btn', onclick: () => this.startLevel(this.n + 1) }, t('next'), ' ▶'),
      h('button', { class: 'md-btn alt', onclick: () => this.startLevel(this.n) }, '↻ ', t('replay')),
      h('button', { class: 'md-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  _loseCard() {
    this.sound.play('lose');
    this.mode = 'lost';
    this.layer.append(h('div', { class: 'md-dim' }, h('div', { class: 'md-card' },
      h('div', { class: 'md-title' }, t('timeup')), h('div', { class: 'md-small' }, t('timeupText')),
      h('button', { class: 'md-btn', onclick: () => this.startLevel(this.n) }, '↻ ', t('tryAgain')),
      h('button', { class: 'md-btn dark', onclick: () => this.showMenu() }, t('levels')))));
  }

  // ---- the loop -----------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const time = (now - this.t0) / 1000;
    if (this.mode === 'play' && this.gm) this._tick(dt);
    this._draw(time, dt);
  }

  _tick(dt) {
    const g = this.gm;
    const inp = this._input();
    const ev = g.step(dt, inp);
    let click = 0;
    for (const e of ev) {
      if (e.type === 'score') { this.sound.play('score', (this.burst.n = this.burst.t > 0 ? this.burst.n + 1 : 1)); this.burst.t = 1.2; this._confetti(e.x, e.y, e.c); if (this.burst.n === 8) { this._say(t('awesome'), '', 1.2); this.sound.play('awesome'); } }
      else if (e.type === 'done') { this._say(`${t(COLORS[e.c])} ${t('done')}`, '', 1.5, true); this.sound.play('done'); }
      else if (e.type === 'gate') { this.sound.play('gate'); const [sx, sy] = this.P(e.x, e.y); this.texts.push({ x: sx, y: sy, text: `+${e.mul - 1}`, k: 0 }); }
      else if (e.type === 'bump') { if (!this._bumpGate || performance.now() - this._bumpGate > 120) { this._bumpGate = performance.now(); this.sound.play('bump'); this.fx.push({ k: 0, kind: 'bump', x: e.x, y: e.y }); } }
      else if (e.type === 'push') click++;
      else if (e.type === 'won') { this.mode = 'wait'; setTimeout(() => this._winCard(e.stars), 900); }
      else if (e.type === 'lost') { this.mode = 'wait'; setTimeout(() => this._loseCard(), 600); }
    }
    if (this.burst.t > 0) this.burst.t -= dt;
    if (click && Math.random() < 0.3) this.sound.play('click');
    if (g.dz.speed > 6 && (!this._rumble || performance.now() - this._rumble > 160)) { this._rumble = performance.now(); this.sound.play('rumble'); }
    // tread marks
    const D = g.dz;
    if (D.speed > 3) { const last = this.tracks[this.tracks.length - 1]; if (!last || Math.hypot(last.x - D.x, last.y - D.y) > 1.6) this.tracks.push({ x: D.x - Math.cos(D.a) * 2.2, y: D.y - Math.sin(D.a) * 2.2, a: D.a, k: 0 }); }
    for (const tr of this.tracks) tr.k += dt * 0.18;
    this.tracks = this.tracks.filter((tr) => tr.k < 1).slice(-160);
    if (g.timeLeft < 6 && g.state === 'play' && Math.ceil(g.timeLeft) !== this.lastTick) { this.lastTick = Math.ceil(g.timeLeft); this.sound.play('tick'); }
    this._hud();
  }

  _confetti(x, y, c) { for (let i = 0; i < 6; i++) this.fx.push({ k: 0, kind: 'spark', x, y, a: Math.random() * TAU, c }); }

  // ---- drawing ------------------------------------------------------------------------------------------------------

  _matTexture() {
    if (this.mat) return this.mat;
    const c = document.createElement('canvas');
    c.width = this.cv.width; c.height = this.cv.height;
    const g = c.getContext('2d');
    const T = Math.max(40, this.cw / 7) * this.dpr;
    const cols = ['#ffd8ea', '#d8ecff', '#fff3c4', '#d8ffe4', '#ead8ff', '#ffe0c8'];
    for (let y = 0, j = 0; y < c.height + T; y += T, j++) for (let x = 0, i = 0; x < c.width + T; x += T, i++) {
      g.fillStyle = cols[(i + j * 2) % cols.length]; g.fillRect(x, y, T + 1, T + 1);
      g.fillStyle = 'rgba(255,255,255,0.55)'; g.beginPath(); const cx = x + T / 2, cy = y + T / 2, r = T * 0.22; const k = (i * 3 + j) % 4;
      if (k === 0) g.arc(cx, cy, r, 0, TAU); else if (k === 1) g.rect(cx - r, cy - r, r * 2, r * 2); else if (k === 2) { g.moveTo(cx, cy - r); g.lineTo(cx + r, cy + r); g.lineTo(cx - r, cy + r); g.closePath(); } else { for (let q = 0; q < 10; q++) { const a = -Math.PI / 2 + (q * Math.PI) / 5; const rr = q % 2 ? r * 0.5 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath(); }
      g.fill();
    }
    this.mat = c;
    return c;
  }

  _quad(g, x0, y0, x1, y1, x2, y2, x3, y3, fill) { g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.lineTo(x2, y2); g.lineTo(x3, y3); g.closePath(); g.fillStyle = fill; g.fill(); }

  _draw(time, dt) {
    const g = this.g;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(this._matTexture(), 0, 0);
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    // the arena floor (wooden planks) and the coloured border blocks
    const [tlx, tly] = this.P(0, 0), [trx] = this.P(AW, 0), [blx, bly] = this.P(0, AH), [brx] = this.P(AW, AH);
    g.fillStyle = 'rgba(80,40,120,0.22)'; g.beginPath(); g.moveTo(tlx + 6, tly + 10); g.lineTo(trx + 6, tly + 10); g.lineTo(brx + 8, bly + 12); g.lineTo(blx + 8, bly + 12); g.closePath(); g.fill();
    this._quad(g, tlx, tly, trx, tly, brx, bly, blx, bly, '#f2d8a8');
    for (let i = 0; i < 12; i++) { const x0 = (AW / 12) * i; const [ax, ay] = this.P(x0, 0), [bx, by] = this.P(x0, AH); g.strokeStyle = i % 2 ? 'rgba(160,110,60,0.22)' : 'rgba(255,240,210,0.3)'; g.lineWidth = Math.max(1, this.k * 0.4); g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke(); }
    const border = (x1, y1, x2, y2, n, thick) => { for (let i = 0; i < n; i++) { const f0 = i / n, f1 = (i + 1) / n; const [a0, b0] = this.P(x1 + (x2 - x1) * f0, y1 + (y2 - y1) * f0), [a1, b1] = this.P(x1 + (x2 - x1) * f1, y1 + (y2 - y1) * f1); g.strokeStyle = BORDER[i % BORDER.length]; g.lineWidth = thick * this.S((y1 + y2) / 2) / this.k * this.k; g.lineCap = 'butt'; g.beginPath(); g.moveTo(a0, b0); g.lineTo(a1, b1); g.stroke(); } };
    border(0, 0, AW, 0, 10, this.k * 1.5); border(0, AH, AW, AH, 12, this.k * 1.6); border(0, 0, 0, AH, 14, this.k * 1.3); border(AW, 0, AW, AH, 14, this.k * 1.3);
    const gm = this.gm;
    if (!gm) { this._drawDozer(g, { x: AW / 2, y: AH * 0.7, a: -Math.PI / 2 }, time); return; }
    const d = gm.def;
    // belts and ramps (on the floor)
    for (const b of d.belts) {
      const [x0, y0] = this.P(b.x, b.y), [x1, y1] = this.P(b.x + b.w, b.y), [x2, y2] = this.P(b.x + b.w, b.y + b.h), [x3, y3] = this.P(b.x, b.y + b.h);
      this._quad(g, x0, y0, x1, y1, x2, y2, x3, y3, '#5a5a7a');
      g.save(); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.lineTo(x2, y2); g.lineTo(x3, y3); g.closePath(); g.clip();
      g.fillStyle = '#ffd23a'; const step = 4; const off = (gm.t * b.speed) % step;
      for (let k = -1; k < b.w / step + 1; k++) { const wx = b.x + (b.dx > 0 ? k * step + off : b.w - k * step - off); const [cx, cy] = this.P(wx, b.y + b.h / 2); const sz = this.S(b.y) * 1.3; g.beginPath(); const dir = b.dx; g.moveTo(cx + dir * sz, cy); g.lineTo(cx - dir * sz * 0.5, cy - sz * 0.8); g.lineTo(cx - dir * sz * 0.5, cy + sz * 0.8); g.closePath(); g.fill(); }
      g.restore();
    }
    for (const r of d.ramps) {
      const [x0, y0] = this.P(r.x, r.y), [x1, y1] = this.P(r.x + r.w, r.y), [x2, y2] = this.P(r.x + r.w, r.y + r.h), [x3, y3] = this.P(r.x, r.y + r.h);
      this._quad(g, x0, y0, x1, y1, x2, y2, x3, y3, '#ffd86a');
      g.strokeStyle = '#e8a010'; g.lineWidth = this.k * 0.6; g.stroke();
      const [cx, cy] = this.P(r.x + r.w / 2, r.y + r.h / 2); g.fillStyle = '#e8503a'; const sz = this.k * 2.6; for (let q = -1; q <= 1; q++) { g.beginPath(); g.moveTo(cx, cy + q * sz * 1.2 - sz * 0.6); g.lineTo(cx + sz * 0.7, cy + q * sz * 1.2 + sz * 0.5); g.lineTo(cx - sz * 0.7, cy + q * sz * 1.2 + sz * 0.5); g.closePath(); g.fill(); }
    }
    // tread marks
    for (const tr of this.tracks) { const [sx, sy] = this.P(tr.x, tr.y); g.fillStyle = `rgba(90,60,40,${0.35 * (1 - tr.k)})`; for (const side of [-1, 1]) { const ox = -Math.sin(tr.a) * side * 1.6, oy = Math.cos(tr.a) * side * 1.6; const [px, py] = this.P(tr.x + ox, tr.y + oy); g.beginPath(); g.arc(px, py, this.S(tr.y) * 0.22, 0, TAU); g.fill(); } void sx; void sy; }
    // holes
    for (let i = 0; i < gm.holes.length; i++) {
      const hl = gm.holes[i]; const [cx, cy] = this.P(hl.x, hl.y); const r = hl.r * this.S(hl.y);
      g.fillStyle = 'rgba(0,0,0,0.25)'; shapePath(g, hl.c, cx + 2, cy + 3, r * 1.12); g.fill();
      g.fillStyle = RING[hl.c]; shapePath(g, hl.c, cx, cy, r * 1.12); g.fill();
      g.fillStyle = '#1a1030'; shapePath(g, hl.c, cx, cy + r * 0.04, r * 0.88); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.22)'; shapePath(g, hl.c, cx, cy, r * 0.5 + Math.sin(time * 3 + i) * r * 0.03); g.fill();
    }
    // funnel guide walls, walls (moving ones too), bumpers, gates
    for (const w of gm.walls) {
      const s = gm._seg(w); const [x1, y1] = this.P(s.x1, s.y1), [x2, y2] = this.P(s.x2, s.y2);
      g.lineCap = 'round'; g.strokeStyle = 'rgba(40,20,80,0.3)'; g.lineWidth = this.k * 2.1; g.beginPath(); g.moveTo(x1 + 3, y1 + 5); g.lineTo(x2 + 3, y2 + 5); g.stroke();
      g.strokeStyle = w.funnel ? '#4aa8f0' : w.move ? '#ff9a3a' : '#a86af0'; g.lineWidth = this.k * 1.9; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
      g.strokeStyle = 'rgba(255,255,255,0.45)'; g.lineWidth = this.k * 0.5; g.beginPath(); g.moveTo(x1, y1 - this.k * 0.5); g.lineTo(x2, y2 - this.k * 0.5); g.stroke();
    }
    for (const b of d.bumpers) {
      const [cx, cy] = this.P(b.x, b.y); const r = b.r * this.S(b.y); const bump = this.fx.find((f) => f.kind === 'bump' && Math.hypot(f.x - b.x, f.y - b.y) < b.r + 3);
      const sc = 1 + (bump ? 0.18 * Math.sin(bump.k * Math.PI) : 0);
      g.fillStyle = 'rgba(40,20,80,0.3)'; g.beginPath(); g.ellipse(cx + 2, cy + 5, r * sc, r * 0.9 * sc, 0, 0, TAU); g.fill();
      g.fillStyle = '#ff6a9a'; g.beginPath(); g.arc(cx, cy, r * sc, 0, TAU); g.fill(); g.lineWidth = this.k * 0.5; g.strokeStyle = '#fff'; g.stroke();
      g.fillStyle = '#fff'; g.beginPath(); for (let q = 0; q < 10; q++) { const a = -Math.PI / 2 + (q * Math.PI) / 5; const rr = (q % 2 ? 0.35 : 0.7) * r * sc; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath(); g.fill();
    }
    for (const gt of d.gates) {
      const [x1, y1] = this.P(gt.x1, gt.y1), [x2, y2] = this.P(gt.x2, gt.y2);
      g.strokeStyle = 'rgba(120,230,255,0.85)'; g.lineWidth = this.k * 0.8; g.setLineDash([this.k * 1.2, this.k * 0.8]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.setLineDash([]);
      for (const [px, py] of [[x1, y1], [x2, y2]]) { g.fillStyle = '#4ad0e8'; g.beginPath(); g.arc(px, py, this.k * 1.3, 0, TAU); g.fill(); g.lineWidth = this.k * 0.4; g.strokeStyle = '#fff'; g.stroke(); }
      g.fillStyle = '#1a6a8a'; g.font = `900 ${this.k * 3.4}px Tajawal, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(`×${gt.mul}`, (x1 + x2) / 2, (y1 + y2) / 2 - this.k * 1.8);
    }
    // marbles
    const list = [...gm.marbles].sort((a, b) => a.y - b.y);
    for (const m of list) {
      const [cx, cy] = this.P(m.x, m.y); const r = MR * this.S(m.y);
      g.fillStyle = 'rgba(60,30,90,0.28)'; g.beginPath(); g.ellipse(cx + r * 0.25, cy + r * 0.55, r * 0.95, r * 0.6, 0, 0, TAU); g.fill();
      const gr = g.createRadialGradient(cx - r * 0.35, cy - r * 0.35, r * 0.1, cx, cy, r * 1.05);
      gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.25, MARBLE[m.c][0]); gr.addColorStop(1, MARBLE[m.c][1]);
      g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, TAU); g.fill();
    }
    this._drawDozer(g, gm.dz, time);
    // effects and texts
    for (const f of this.fx) { f.k += dt * (f.kind === 'bump' ? 4 : 2.2); if (f.kind === 'spark') { const [cx, cy] = this.P(f.x, f.y); const dd = f.k * this.k * 7; g.fillStyle = `rgba(255,${200 + (f.c * 10) % 55},60,${1 - f.k})`; g.beginPath(); g.arc(cx + Math.cos(f.a) * dd, cy + Math.sin(f.a) * dd - f.k * this.k * 3, this.k * 0.55 * (1 - f.k * 0.5), 0, TAU); g.fill(); } }
    this.fx = this.fx.filter((f) => f.k < 1);
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `900 ${this.k * 4.2}px Tajawal, system-ui, sans-serif`; g.lineWidth = 4; g.strokeStyle = '#3a2a5a';
    for (const tx of this.texts) { tx.k += dt * 1.1; g.globalAlpha = Math.max(0, 1 - tx.k); g.fillStyle = '#6ae84a'; const yy = tx.y - tx.k * this.k * 7; g.strokeText(tx.text, tx.x, yy); g.fillText(tx.text, tx.x, yy); }
    g.globalAlpha = 1;
    this.texts = this.texts.filter((x) => x.k < 1);
    // the finger stick
    if (this.stick) { const s = this.stick; g.strokeStyle = 'rgba(255,255,255,0.8)'; g.lineWidth = 3; g.fillStyle = 'rgba(255,255,255,0.18)'; g.beginPath(); g.arc(s.x0, s.y0, this.u * 12, 0, TAU); g.fill(); g.stroke(); g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc(s.x, s.y, this.u * 4.2, 0, TAU); g.fill(); }
  }

  _drawDozer(g, D, time) {
    const [cx, cy] = this.P(D.x, D.y);
    const s = this.S(D.y) * 0.34;
    g.save(); g.translate(cx, cy); g.rotate(D.a + Math.PI / 2); g.scale(1, 0.94);
    const u = s * 10;
    g.fillStyle = 'rgba(40,20,80,0.3)'; g.beginPath(); g.ellipse(u * 0.06, u * 0.12, u * 0.62, u * 0.78, 0, 0, TAU); g.fill();
    // tracks
    for (const sx of [-1, 1]) { g.fillStyle = '#2a2a3a'; g.beginPath(); g.roundRect(sx * u * 0.42 - u * 0.14, -u * 0.5, u * 0.28, u * 1.0, u * 0.12); g.fill(); g.strokeStyle = '#5a5a6a'; g.lineWidth = u * 0.03; for (let k = 0; k < 7; k++) { const yy = -u * 0.45 + ((k / 7) * u * 0.9 + time * D.speed * 0.02 * s * 0 + ((D.speed > 1 ? (performance.now() / 60) % 1 : 0) * u * 0.13)) % (u * 0.95); g.beginPath(); g.moveTo(sx * u * 0.42 - u * 0.14, yy); g.lineTo(sx * u * 0.42 + u * 0.14, yy); g.stroke(); } }
    // body and cab
    g.fillStyle = '#ffd23a'; g.beginPath(); g.roundRect(-u * 0.34, -u * 0.46, u * 0.68, u * 0.92, u * 0.12); g.fill(); g.lineWidth = u * 0.05; g.strokeStyle = '#a87a00'; g.stroke();
    g.fillStyle = '#ffe680'; g.beginPath(); g.roundRect(-u * 0.24, -u * 0.12, u * 0.48, u * 0.5, u * 0.08); g.fill(); g.stroke();
    g.fillStyle = '#8ad8ff'; g.beginPath(); g.roundRect(-u * 0.18, -u * 0.04, u * 0.36, u * 0.26, u * 0.05); g.fill();
    g.fillStyle = '#e8503a'; g.beginPath(); g.arc(0, -u * 0.34, u * 0.07, 0, TAU); g.fill(); // a little light
    // the blade and its wings (forward is -y here)
    g.fillStyle = '#9aa0b8'; g.beginPath(); g.roundRect(-u * 0.62, -u * 0.78, u * 1.24, u * 0.2, u * 0.06); g.fill(); g.lineWidth = u * 0.04; g.strokeStyle = '#5a6078'; g.stroke();
    for (const sx of [-1, 1]) { g.fillStyle = '#8a90a8'; g.beginPath(); g.roundRect(sx * u * 0.58 - u * 0.07, -u * 0.98, u * 0.14, u * 0.4, u * 0.05); g.fill(); g.stroke(); }
    g.strokeStyle = '#6a7088'; g.lineWidth = u * 0.07; g.beginPath(); g.moveTo(-u * 0.25, -u * 0.46); g.lineTo(-u * 0.3, -u * 0.62); g.moveTo(u * 0.25, -u * 0.46); g.lineTo(u * 0.3, -u * 0.62); g.stroke();
    g.restore();
  }

  pause() { this.sound.suspend(); if (this.mode === 'play') this._pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill); clearTimeout(this._st); clearTimeout(this._hintT);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey);
    this.root.remove();
  }
}

void levelDef;

const api = {
  start(el, config, post) {
    const g = new Game2(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.MarbleDozer = api;
export default api;
