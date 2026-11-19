// «تنظيف السجاد» — Rug Cleaning. Entry: window.RugCleaning.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cozy rug-cleaning job in a sunny courtyard: beat the dust out, spray foam, scrub in circles, rinse with a jet, push the
// water off with a squeegee. Dirt, foam and water are masks on a grid (see logic.js); the rug pattern is drawn in code.
import { Job, LEVELS, STAGES, UPGRADES, READY, COLS, ROWS, MAX_LEVEL, normalizeSave, payout, upgradeCost, circularity, straightness } from './logic.js';
import { drawRug, drawCourtyard, drawFrame, drawTool, ICONS } from './art.js';
import { Sound } from './audio.js';
import { I } from './i18n.js';
import { h, css } from '../../cozy_kit/ui.js';

const TOOL = ['beat', 'foam', 'scrub', 'jet', 'squeegee']; // also the keys of ICONS, t_* and h_*
const ic = (k) => { const e = document.createElement('span'); e.innerHTML = ICONS[k]; return e; };
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const STYLE = css('rc', '#d99a3a', '#9a5a1a', '#ffe29a') + `
.rc-root{background:#e6d6b0}
.rc-hint2{position:absolute;left:50%;top:calc(var(--u)*13.2);transform:translateX(-50%);max-width:94%;background:rgba(40,28,10,.62);border:calc(var(--u)*.35) solid rgba(255,255,255,.9);color:#fff;font-weight:900;font-size:calc(var(--u)*3.3);line-height:1.2;padding:calc(var(--u)*.5) calc(var(--u)*3.4);border-radius:999px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.rc-prog{position:absolute;left:50%;transform:translateX(-50%);top:calc(var(--u)*19.4);width:min(60%,calc(var(--u)*70));height:calc(var(--u)*1.8);border-radius:99px;background:rgba(0,0,0,.35);border:calc(var(--u)*.3) solid #fff;overflow:hidden;pointer-events:none}
.rc-prog b{display:block;height:100%;width:0;background:linear-gradient(180deg,#9af0b8,#2fb870);border-radius:99px}
.rc-toast{position:absolute;left:50%;top:calc(var(--u)*24);transform:translateX(-50%);background:#ffd166;color:#3a2a08;font-weight:900;font-size:calc(var(--u)*4.4);padding:calc(var(--u)*1) calc(var(--u)*4);border-radius:999px;border:calc(var(--u)*.5) solid #fff;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap}
.rc-toast.show{opacity:1}
.rc-tools{position:absolute;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);bottom:max(calc(var(--u)*1.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.2);direction:ltr;align-items:stretch;justify-content:center}
.rc-chip{flex:1;max-width:calc(var(--u)*17);height:calc(var(--u)*17.5);border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#f3e6c4,#d8c08a);border:calc(var(--u)*.45) solid #fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*.3);color:#4a3412;font-weight:900;font-size:calc(var(--u)*2.7);position:relative;opacity:.55;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(40,20,0,.3)}
.rc-chip svg{width:calc(var(--u)*8.6);height:calc(var(--u)*8.6)}
.rc-chip.cur{opacity:1;background:linear-gradient(180deg,#fff3c4,#ffd166);transform:translateY(calc(var(--u)*-.8));box-shadow:0 calc(var(--u)*1) calc(var(--u)*1.8) rgba(40,20,0,.4)}
.rc-chip.done{opacity:.9}.rc-chip.done::after{content:'✓';position:absolute;top:calc(var(--u)*.2);right:calc(var(--u)*1);color:#2a9a58;font-size:calc(var(--u)*3.6)}
.rc-next{pointer-events:auto;flex:1.15;max-width:calc(var(--u)*19);height:calc(var(--u)*17.5);border-radius:calc(var(--u)*3);font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:calc(var(--u)*.45) solid #fff;cursor:pointer;background:linear-gradient(180deg,#9aa4a8,#6a7478);box-shadow:0 calc(var(--u)*.6) 0 #3a4448}
.rc-next.ready{background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a;animation:rcpulse 1s infinite}
@keyframes rcpulse{50%{transform:scale(1.06)}}
.rc-land .rc-tools{left:auto;right:calc(var(--u)*1.5);top:calc(var(--u)*20);bottom:calc(var(--u)*1.5);width:calc(var(--u)*17);flex-direction:column;justify-content:flex-start;gap:calc(var(--u)*1)}
.rc-land .rc-chip,.rc-land .rc-next{max-width:none;width:100%;height:auto;flex:1;min-height:0;flex-direction:row;gap:calc(var(--u)*.8);font-size:calc(var(--u)*2.4)}
.rc-land .rc-chip svg{width:calc(var(--u)*6.2);height:calc(var(--u)*6.2)}
.rc-land .rc-chip.cur{transform:translateX(calc(var(--u)*-1))}
.rc-land .rc-top{right:calc(var(--u)*3)}
.rc-card{width:calc(var(--u)*92);max-height:94%}
@media (orientation:landscape){.rc-card{width:calc(var(--u)*130)}}
.rc-lvs{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.rc-lvs{grid-template-columns:repeat(4,1fr)}}
.rc-lv{font-family:inherit;color:#fff;font-weight:900;border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#c98a3a,#8a5418);padding:calc(var(--u)*1);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);cursor:pointer;font-size:calc(var(--u)*2.8);position:relative}
.rc-lv canvas{width:100%;aspect-ratio:8/5;border-radius:calc(var(--u)*1);display:block;position:static}
.rc-lv.lock{filter:grayscale(1);opacity:.6}
.rc-lv small{font-size:calc(var(--u)*2.6);opacity:.95}
.rc-row{display:flex;align-items:center;gap:calc(var(--u)*2);width:100%;background:rgba(255,255,255,.14);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*2);box-sizing:border-box;font-weight:900;font-size:calc(var(--u)*3.6)}
.rc-row svg{width:calc(var(--u)*8);height:calc(var(--u)*8);flex:none}.rc-row .nm{flex:1;text-align:start}.rc-row .pips{letter-spacing:.2em;color:#ffe29a}
.rc-buy{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*3);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a;min-width:calc(var(--u)*17)}
.rc-buy.no{background:linear-gradient(180deg,#aab,#778);box-shadow:0 calc(var(--u)*.6) 0 #445}
.rc-cmp{position:relative;width:100%;aspect-ratio:var(--ar);max-height:calc(var(--u)*50);margin:0 auto;border-radius:calc(var(--u)*2);overflow:hidden;border:calc(var(--u)*.5) solid #fff;direction:ltr;touch-action:none;cursor:ew-resize;background:#000}
.rc-cmp canvas{position:absolute;inset:0;width:100%;height:100%}
.rc-cmp .hd{position:absolute;top:0;bottom:0;width:calc(var(--u)*.8);background:#fff;transform:translateX(-50%);box-shadow:0 0 calc(var(--u)*1.5) rgba(0,0,0,.5)}
.rc-cmp .hd i{position:absolute;top:50%;left:50%;width:calc(var(--u)*7);height:calc(var(--u)*7);transform:translate(-50%,-50%);border-radius:50%;background:#fff;color:#8a5418;font-style:normal;font-size:calc(var(--u)*3.6);display:flex;align-items:center;justify-content:center;box-shadow:0 0 calc(var(--u)*1.5) rgba(0,0,0,.5)}
.rc-cmp .lb{position:absolute;top:calc(var(--u)*1);background:rgba(0,0,0,.55);color:#fff;font-weight:900;font-size:calc(var(--u)*3);padding:calc(var(--u)*.4) calc(var(--u)*2);border-radius:99px}
.rc-res{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.4);width:100%}
.rc-pay{display:flex;flex-wrap:wrap;gap:calc(var(--u)*1);justify-content:center;font-size:calc(var(--u)*3.2)}
.rc-pay .hd{display:none}
@media (orientation:landscape){.rc-resbody{display:flex;gap:calc(var(--u)*3);align-items:center;width:100%}.rc-resbody>*{flex:1;min-width:0}.rc-btns{display:flex;gap:calc(var(--u)*1.4)}.rc-btns .rc-btn{font-size:calc(var(--u)*3.8)}}
.rc-resbody{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.rc-resbody{flex-direction:row}}
.rc-btns{display:flex;flex-direction:column;gap:calc(var(--u)*1.4);width:100%}
.rc-soundpill{bottom:calc(var(--u)*28)}
@media (orientation:landscape){.rc-resbody .rc-card,.rc-card{padding:calc(var(--u)*1.8) calc(var(--u)*4);gap:calc(var(--u)*1)}.rc-title{font-size:calc(var(--u)*5.4)}.rc-stars{font-size:calc(var(--u)*7)}.rc-resbody .rc-pill{font-size:calc(var(--u)*2.5)!important;padding:calc(var(--u)*.4) calc(var(--u)*1.8);border-width:calc(var(--u)*.35)}.rc-res{gap:calc(var(--u)*.8)}.rc-btns{flex-direction:row}.rc-btns .rc-btn{min-height:calc(var(--u)*8);font-size:calc(var(--u)*3)!important;padding:calc(var(--u)*.6) calc(var(--u)*2)}.rc-cmp{max-height:calc(var(--u)*46)}.rc-lvs .rc-lv{padding:calc(var(--u)*.6)}}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    if (!document.getElementById('rc-style')) document.head.append(h('style', { id: 'rc-style' }, STYLE));
    this.root = h('div', { class: 'rc-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'rc-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.paused = false; this.clock = 0; this.parts = []; this.thumbs = {};
    this.ptr = null; this.hover = null; this.shk = 0; this.frame = 0; this.lv = -1; this.progV = 0;
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 2500))]); } catch (_) { /* system font */ } }

  // ---------- layout ----------
  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(Math.min(this.cw, this.ch) / 100, 6.2);
    this.root.style.setProperty('--u', `${this.u}px`);
    this.land = this.cw > this.ch * 1.05;
    this.root.classList.toggle('rc-land', this.land);
    this._buildBg();
  }

  _avail() {
    const u = this.u; const land = this.land;
    const top = (land ? 20 : 22) * u; const bot = (land ? 8 : 25) * u; const right = land ? 20 * u : 0; const left = land ? 3 * u : 0;
    return { top, bot, right, left, w: this.cw - left - right, h: this.ch - top - bot };
  }

  _rect(aspect) {
    const a = this._avail(); const px = this.u * (aspect >= 1 ? 7.2 : 2.5); const py = this.u * (aspect >= 1 ? 2.5 : 7.2);
    const rw = Math.max(40, Math.min(a.w - 2 * px, (a.h - 2 * py) * aspect)); const rh = rw / aspect;
    return { x: a.left + (a.w - rw) / 2, y: a.top + (a.h - rh) / 2, w: rw, h: rh };
  }

  _buildBg() {
    const mk = () => { const c = document.createElement('canvas'); c.width = Math.round(this.cw * this.dpr); c.height = Math.round(this.ch * this.dpr); const g = c.getContext('2d'); g.scale(this.dpr, this.dpr); return [c, g]; };
    const [bc, bg] = mk(); this.bg = bc;
    drawCourtyard(bg, this.cw, this.ch, this.u, this.ch - (this.land ? 7.5 : 24.4) * this.u);
    this._buildFrame();
  }

  _buildFrame() {
    const asp = this.job ? this.job.cols / this.job.rows : (this.land ? COLS / ROWS : ROWS / COLS);
    this.rect = this._rect(asp);
    const c = document.createElement('canvas'); c.width = Math.round(this.cw * this.dpr); c.height = Math.round(this.ch * this.dpr);
    const g = c.getContext('2d'); g.scale(this.dpr, this.dpr);
    drawFrame(g, this.rect.x, this.rect.y, this.rect.w, this.rect.h, this.u);
    this.frameC = c;
  }

  // ---------- rug canvases ----------
  _newRug(def, cols, rows) {
    const mk = (w, hh) => { const c = document.createElement('canvas'); c.width = w; c.height = hh; return c; };
    const rug = mk(cols * 6, rows * 6); drawRug(rug.getContext('2d'), rug.width, rug.height, def);
    return rug;
  }

  _compose() {
    const t0 = performance.now(); const j = this.job; const d = this.ovImg.data; const f = this.foamImg.data; const n = j.n;
    let anyFoam = false;
    const acc = this.acc || (this.acc = new Float64Array(4));
    const put = (cr, cg, cb, ca) => { if (ca <= 0.003) return; const a = acc[3]; const oa = ca + a * (1 - ca); const k = a * (1 - ca); acc[0] = (cr * ca + acc[0] * k) / oa; acc[1] = (cg * ca + acc[1] * k) / oa; acc[2] = (cb * ca + acc[2] * k) / oa; acc[3] = oa; };
    for (let i = 0; i < n; i++) {
      acc[0] = 0; acc[1] = 0; acc[2] = 0; acc[3] = 0;
      const nz = j.noise[i];
      put(150, 138, 115, j.dull[i] * 0.42);
      put(200, 178, 140, j.dust[i] * 0.78 * (0.8 + 0.4 * nz));
      if (j.stain[i] > 0) { if (j.kind[i] === 1) put(62, 36, 22, j.stain[i] * 0.9 * (0.88 + 0.24 * nz)); else put(92, 64, 42, j.stain[i] * 0.92 * (0.85 + 0.3 * nz)); }
      put(25, 55, 85, j.wet[i] * 0.3);
      if (j.pile[i] && j.wet[i] < 0.1) { if (j.pile[i] === 1) put(255, 255, 255, 0.1); else put(0, 0, 0, 0.07); }
      const o = i * 4; d[o] = acc[0]; d[o + 1] = acc[1]; d[o + 2] = acc[2]; d[o + 3] = acc[3] * 255;
      const fo = j.foam[i];
      if (fo > 0.01) { anyFoam = true; const tn = Math.min(1, j.stain[i] * 1.1); f[o] = 236 + nz * 19 - tn * 120; f[o + 1] = 246 - tn * 150; f[o + 2] = 255 - tn * 185; f[o + 3] = Math.min(1, fo * 1.1) * (185 + tn * 40);  } else { f[o + 3] = 0; }
    }
    this.ovCtx.putImageData(this.ovImg, 0, 0);
    this.foamCtx.putImageData(this.foamImg, 0, 0);
    this.anyFoam = anyFoam;
    if (anyFoam) {
      const g = this.fmCtx; const w = this.fm.width; const hh = this.fm.height;
      g.globalCompositeOperation = 'source-over'; g.clearRect(0, 0, w, hh); g.imageSmoothingEnabled = true; g.drawImage(this.foamC, 0, 0, w, hh);
      g.globalCompositeOperation = 'source-atop'; g.fillStyle = this.bubblePat; g.fillRect(0, 0, w, hh); g.globalCompositeOperation = 'source-over';
    }
    this.lv = j.ver;
    this.composeMs = performance.now() - t0;
  }

  _snap() {
    const j = this.job; const c = document.createElement('canvas'); c.width = j.cols * 4; c.height = j.rows * 4;
    const g = c.getContext('2d'); g.drawImage(this.rugC, 0, 0, c.width, c.height); g.drawImage(this.ovC, 0, 0, c.width, c.height);
    if (this.anyFoam) g.drawImage(this.fm, 0, 0, c.width, c.height);
    return c;
  }

  // ---------- input ----------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const pt = (e) => { const r = this.cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top - (e.pointerType === 'touch' ? this.u * 5 : 0) }; };
    this.cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play' || this.paused || this.ptr) return;
      this.cv.setPointerCapture(e.pointerId);
      const p = pt(e); const c = this._cell(p.x, p.y);
      this.ptr = { id: e.pointerId, x: p.x, y: p.y, lc: c, trail: [c], moved: false, lastHit: -1, hx: p.x, hy: p.y, speed: 0 };
      this.circ = 0; this.dryT = 0; this.circT = 0;
      if (this.stage === 4) this.job.newStroke();
      if (this.stage === 0) this._hit(p.x, p.y);
    });
    this.cv.addEventListener('pointermove', (e) => {
      const p = pt(e); this.hover = e.pointerType === 'mouse' || this.ptr ? p : null;
      if (this.ptr && this.ptr.id === e.pointerId) {
        this.ptr.x = p.x; this.ptr.y = p.y;
        if (this.stage === 0 && !this.paused) { const rp = this._rpx(); if (Math.hypot(p.x - this.ptr.hx, p.y - this.ptr.hy) >= rp * 0.85 && performance.now() - this.ptr.lastHit > 85) this._hit(p.x, p.y); }
      }
    });
    const up = (e) => { if (this.ptr && this.ptr.id === e.pointerId) { this.ptr = null; this.sound.silence(); } };
    this.cv.addEventListener('pointerup', up); this.cv.addEventListener('pointercancel', up);
    this.cv.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !this.ptr) this.hover = null; });
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play') this._pause(); } else if (!this.paused) this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _cell(x, y) { const r = this.rect; const j = this.job; return { x: ((x - r.x) / r.w) * (j ? j.cols : COLS), y: ((y - r.y) / r.h) * (j ? j.rows : ROWS) }; }
  _rpx() { const j = this.job; return j.radius(['beat', 'foam', 'brush', 'jet', 'squeegee'][this.stage]) * (this.rect.w / j.cols); }
  _sx(cx) { return this.rect.x + (cx / this.job.cols) * this.rect.w; }
  _sy(cy) { return this.rect.y + (cy / this.job.rows) * this.rect.h; }

  _hit(x, y) {
    const p = this.ptr; if (p) { p.lastHit = performance.now(); p.hx = x; p.hy = y; }
    const c = this._cell(x, y); const rem = this.job.beat(c.x, c.y);
    this.hitAnim = 1; this.shk = 1; this.sound.play('thud'); if (rem > 2) this.sound.play('puff');
    const n = Math.min(12, 3 + Math.round(rem / 4));
    for (let i = 0; i < n; i++) this._part('dust', x + (Math.random() - 0.5) * this._rpx() * 1.2, y + (Math.random() - 0.5) * this._rpx() * 0.8);
  }

  _part(kind, x, y) {
    if (this.parts.length > 170) return;
    const u = this.u; const a = Math.random() * 6.28;
    const P = { kind, x, y, t: 0, max: 0.8, vx: 0, vy: 0, s: u };
    if (kind === 'dust') { P.vx = Math.cos(a) * u * 8; P.vy = -u * (6 + Math.random() * 10); P.max = 0.9 + Math.random() * 0.5; P.s = u * (1.2 + Math.random() * 1.6); }
    else if (kind === 'foam') { P.vx = Math.cos(a) * u * 6; P.vy = -u * Math.random() * 6; P.max = 0.7 + Math.random() * 0.5; P.s = u * (0.8 + Math.random() * 1.4); }
    else if (kind === 'drop') { P.vx = Math.cos(a) * u * 14; P.vy = Math.sin(a) * u * 14 - u * 4; P.max = 0.5; P.s = u * (0.5 + Math.random() * 0.7); }
    else if (kind === 'spark') { P.vx = Math.cos(a) * u * 20; P.vy = Math.sin(a) * u * 20 - u * 10; P.max = 1; P.s = u * (1 + Math.random()); }
    this.parts.push(P);
  }

  // ---------- screens ----------
  _soundPill() { const pill = h('button', { class: 'rc-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  _btn(cls, label, fn) { return h('button', { class: `rc-btn ${cls}`, onclick: () => { this.sound.play('tap'); fn(); } }, label); }
  _coinPill() { return h('div', { class: 'rc-pill' }, `💰 ${I.num(this.save.coins)}`); }
  _saveNow() { this.post({ type: 'save', save: this.save }); }

  showMenu() {
    this.mode = 'menu'; this.job = null; this.paused = false; this.layer.replaceChildren(); this.sound.setMode(true); this._buildFrame();
    const mute = h('button', { class: 'rc-round', 'aria-label': 'sound', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); mute.textContent = this.save.muted ? '🔇' : '🔊'; this._saveNow(); } }, this.save.muted ? '🔇' : '🔊');
    this.layer.append(h('div', { class: 'rc-top' }, mute, this._coinPill()),
      h('div', { class: 'rc-dim', style: 'background:rgba(40,25,5,.38)' }, h('div', { class: 'rc-card rc-menu' },
        h('div', { class: 'rc-logo' }, '🧽 ', I.t('title')), h('div', { class: 'rc-small' }, I.t('tagline')),
        this._btn('', I.t('play'), () => this.showLevels()), this._btn('alt', `🔧 ${I.t('shop')}`, () => this.showShop()), this._btn('dark', I.t('exit'), () => this.post({ type: 'exit' })))));
    this._soundPill();
  }

  _thumb(def) {
    if (!this.thumbs[def.id]) { const c = document.createElement('canvas'); c.width = 128; c.height = 80; drawRug(c.getContext('2d'), 128, 80, def); this.thumbs[def.id] = c; }
    const c = document.createElement('canvas'); c.width = 128; c.height = 80; c.getContext('2d').drawImage(this.thumbs[def.id], 0, 0); return c;
  }

  showLevels() {
    this.mode = 'menu'; this.layer.replaceChildren();
    const grid = h('div', { class: 'rc-lvs' });
    for (const def of LEVELS) {
      const open = def.id <= this.save.unlocked; const st = this.save.stars[def.id] || 0;
      grid.append(h('button', { class: `rc-lv${open ? '' : ' lock'}`, onclick: () => { if (open) { this.sound.play('tap'); this.start(def.id); } else this.sound.play('no'); } },
        this._thumb(def), h('span', {}, `${I.num(def.id)}. ${def.name[I.getLang() === 'en' ? 1 : 0]}`),
        h('small', {}, open ? `${'★'.repeat(st)}${'☆'.repeat(3 - st)}  💰${I.num(def.reward)}` : `🔒 ${I.t('locked')}`)));
    }
    this.layer.append(h('div', { class: 'rc-top' }, h('button', { class: 'rc-round', onclick: () => this.showMenu() }, '☰'), this._coinPill()),
      h('div', { class: 'rc-dim', style: 'background:rgba(40,25,5,.45);padding-top:calc(var(--u)*14)' }, h('div', { class: 'rc-card' },
        h('div', { class: 'rc-title' }, I.t('pick')), grid, this._btn('alt', `🔧 ${I.t('shop')}`, () => this.showShop()))));
    this._soundPill();
  }

  showShop() {
    this.mode = 'menu'; this.layer.replaceChildren();
    const rows = UPGRADES.map((id) => {
      const lvl = this.save.upg[id]; const maxed = lvl >= MAX_LEVEL; const cost = maxed ? 0 : upgradeCost(id, lvl);
      const can = !maxed && this.save.coins >= cost;
      return h('div', { class: 'rc-row' }, id === 'nozzle' ? h('span', { style: 'font-size:calc(var(--u)*7)' }, '💧') : ic(id === 'brush' ? 'scrub' : id),
        h('span', { class: 'nm' }, I.t(`u_${id}`)), h('span', { class: 'pips' }, '●'.repeat(lvl) + '○'.repeat(MAX_LEVEL - lvl)),
        h('button', { class: `rc-buy${can || maxed ? '' : ' no'}`, onclick: () => { if (maxed) return; if (!can) { this.sound.play('no'); return; } this.save.coins -= cost; this.save.upg[id]++; this.sound.play('buy'); this._saveNow(); this.showShop(); } }, maxed ? I.t('maxed') : `💰 ${I.num(cost)}`));
    });
    this.layer.append(h('div', { class: 'rc-top' }, h('button', { class: 'rc-round', onclick: () => this.showLevels() }, '☰'), this._coinPill()),
      h('div', { class: 'rc-dim', style: 'background:rgba(40,25,5,.5);padding-top:calc(var(--u)*14)' }, h('div', { class: 'rc-card' }, h('div', { class: 'rc-title' }, `🔧 ${I.t('shop')}`), ...rows, this._btn('', I.t('back'), () => this.showLevels()))));
    this._soundPill();
  }

  // ---------- play ----------
  start(levelId) {
    const def = LEVELS[levelId - 1]; const a = this._avail();
    const portrait = a.w < a.h;
    const cols = portrait ? ROWS : COLS; const rows = portrait ? COLS : ROWS;
    this.job = new Job(def, cols, rows, this.save.upg);
    this.rugC = this._newRug(def, cols, rows);
    const mk = (w, hh) => { const c = document.createElement('canvas'); c.width = w; c.height = hh; return c; };
    this.ovC = mk(cols, rows); this.ovCtx = this.ovC.getContext('2d'); this.ovImg = this.ovCtx.createImageData(cols, rows);
    this.foamC = mk(cols, rows); this.foamCtx = this.foamC.getContext('2d'); this.foamImg = this.foamCtx.createImageData(cols, rows);
    this.fm = mk(cols * 4, rows * 4); this.fmCtx = this.fm.getContext('2d');
    const bt = mk(256, 256); const bg = bt.getContext('2d'); let s = 9;
    for (let i = 0; i < 46; i++) { s = (s * 1103515245 + 12345) & 0x7fffffff; const x = (s % 1000) / 1000 * 256; s = (s * 1103515245 + 12345) & 0x7fffffff; const y = (s % 1000) / 1000 * 256; const r = 2 + (s % 6);
      for (const ox of [-256, 0, 256]) for (const oy of [-256, 0, 256]) { bg.fillStyle = 'rgba(255,255,255,.3)'; bg.strokeStyle = 'rgba(150,190,225,.5)'; bg.lineWidth = 1; bg.beginPath(); bg.arc(x + ox, y + oy, r, 0, 6.3); bg.fill(); bg.stroke(); bg.fillStyle = 'rgba(255,255,255,.8)'; bg.beginPath(); bg.arc(x + ox - r * 0.3, y + oy - r * 0.3, r * 0.28, 0, 6.3); bg.fill(); } }
    this.bubblePat = this.fmCtx.createPattern(bt, 'repeat');
    this.curDef = def; this.stage = 0; this.parts = []; this.ptr = null; this.sh = 0; this.chimed = false; this.endT = 0;
    this._buildFrame(); this._compose(); this.before = this._snap();
    this.job.beginStage(0);
    this.mode = 'play'; this.paused = false; this.sound.setMode(true);
    this._playUi();
  }

  _playUi() {
    this.layer.replaceChildren();
    this.coinEl = h('span', {}, ''); this.timeEl = h('span', {}, ''); this.waterEl = h('span', {}, '');
    this.hintEl = h('div', { class: 'rc-hint2' }, ''); this.progEl = h('b'); this.toastEl = h('div', { class: 'rc-toast' }, '');
    this.chips = TOOL.map((k, i) => h('div', { class: 'rc-chip' }, ic(k), h('span', {}, I.t(`t_${k}`))));
    this.nextBtn = h('button', { class: 'rc-next', onclick: () => this._next() }, '');
    this.layer.append(
      h('div', { class: 'rc-top' }, h('button', { class: 'rc-round', 'aria-label': I.t('paused'), onclick: () => this._pause() }, '⏸'), h('div', { class: 'rc-pill' }, '💰 ', this.coinEl), h('div', { class: 'rc-pill' }, '⏱ ', this.timeEl), h('div', { class: 'rc-pill' }, '💧 ', this.waterEl)),
      this.hintEl, h('div', { class: 'rc-prog' }, this.progEl), this.toastEl, h('div', { class: 'rc-tools' }, ...this.chips, this.nextBtn));
    this._soundPill();
    this._stageUi();
  }

  _stageUi() {
    const st = this.stage;
    this.hintEl.textContent = I.t(`h_${TOOL[st]}`);
    this.chips.forEach((c, i) => { c.className = `rc-chip${i === st ? ' cur' : ''}${i < st ? ' done' : ''}`; });
    this.nextBtn.textContent = st === 4 ? I.t('done') : `${I.t('next')} ▶`;
    this.chimed = false;
  }

  _next() {
    if (this.mode !== 'play' || this.paused) return;
    this.sound.play('tap'); this.ptr = null; this.sound.silence();
    if (this.stage >= 4) { this._finish(); return; }
    this.stage++; this.job.beginStage(this.stage); this.sound.play('stage'); this._stageUi();
  }

  _toast(t) { if (!this.toastEl) return; this.toastEl.textContent = t; this.toastEl.classList.add('show'); clearTimeout(this._tt); this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), 1400); }

  _pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true; this.ptr = null; this.sound.silence(); this.sound.suspend();
    this.pauseEl = h('div', { class: 'rc-dim' }, h('div', { class: 'rc-card' }, h('div', { class: 'rc-title' }, I.t('paused')),
      this._btn('', I.t('resume'), () => this._resume()), this._btn('alt', I.t('restart'), () => { this.pauseEl.remove(); this.start(this.curDef.id); }), this._btn('dark', I.t('menu'), () => { this.sound.resume(); this.showLevels(); })));
    this.layer.append(this.pauseEl);
  }
  _resume() { this.paused = false; if (this.pauseEl) this.pauseEl.remove(); this.sound.resume(); }

  _finish() {
    const j = this.job; this.mode = 'result'; this.sound.silence();
    const clean = j.cleanliness(); const pay = payout(this.curDef, clean, j.time, j.water);
    this.save.coins += pay.total; this.save.jobs++;
    if (pay.stars > (this.save.stars[this.curDef.id] || 0)) this.save.stars[this.curDef.id] = pay.stars;
    if (pay.stars >= 1 && this.curDef.id < LEVELS.length) this.save.unlocked = Math.max(this.save.unlocked, this.curDef.id + 1);
    this._saveNow();
    const after = this._snap();
    this.sound.play(pay.stars ? 'win' : 'no');
    const ar = j.cols / j.rows;
    const wrap = h('div', { class: 'rc-cmp', style: `--ar:${ar}` }, this.before, after, h('div', { class: 'lb', style: 'left:calc(var(--u)*1)' }, I.t('before')), h('div', { class: 'lb', style: 'right:calc(var(--u)*1)' }, I.t('after')));
    const hd = h('div', { class: 'hd' }, h('i', {}, '↔')); wrap.append(hd);
    const setPos = (pct) => { pct = Math.max(2, Math.min(98, pct)); after.style.clipPath = `inset(0 0 0 ${pct}%)`; hd.style.left = `${pct}%`; };
    for (const c of [this.before, after]) { c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'; }
    setPos(95); let anim = performance.now(); let user = false;
    const tick = (now) => { if (user || !wrap.isConnected) return; const t = (now - anim) / 1800; if (t < 1) { setPos(t < 0.55 ? 95 - (t / 0.55) * 90 : 5 + ((t - 0.55) / 0.45) * 45); requestAnimationFrame(tick); } else setPos(50); };
    requestAnimationFrame(tick);
    const drag = (e) => { user = true; const r = wrap.getBoundingClientRect(); setPos(((e.clientX - r.left) / r.width) * 100); };
    wrap.addEventListener('pointerdown', (e) => { wrap.setPointerCapture(e.pointerId); drag(e); });
    wrap.addEventListener('pointermove', (e) => { if (wrap.hasPointerCapture(e.pointerId)) drag(e); });
    const stars = h('div', { class: 'rc-stars' }, ...[1, 2, 3].map((n) => h('span', { class: n <= pay.stars ? '' : 'off' }, '⭐')));
    const line = (a, b) => h('div', { class: 'rc-pill', style: 'font-size:calc(var(--u)*3.2)' }, a, ' ', b);
    const nextOk = pay.stars >= 1 && this.curDef.id < LEVELS.length;
    this.layer.replaceChildren(h('div', { class: 'rc-dim', style: 'background:rgba(40,25,5,.55)' }, h('div', { class: 'rc-card' },
      h('div', { class: 'rc-title' }, pay.stars ? I.t('great_m') : I.t('tryAgain')),
      h('div', { class: 'rc-resbody' },
        h('div', { class: 'rc-res' }, wrap, h('div', { class: 'rc-small' }, I.t('slide'))),
        h('div', { class: 'rc-res' }, stars,
          h('div', { class: 'rc-pay' }, line(`✨ ${I.t('clean')}`, `${I.num(Math.round(clean * 100))}%`), line(`⏱ ${I.t('time')}`, mmss(j.time)), line(`💧 ${I.t('water')}`, `${I.num(Math.round(j.water))} ${I.t('litres')}`)),
          h('div', { class: 'rc-pay' }, line(I.t('clean_pay'), `💰${I.num(pay.base)}`), line(I.t('speed_pay'), `💰${I.num(pay.speed)}`), line(I.t('water_pay'), `💰${I.num(pay.water)}`)),
          h('div', { class: 'rc-pill', style: 'font-size:calc(var(--u)*4.4)' }, `${I.t('total')}: 💰 ${I.num(pay.total)}`),
          h('div', { class: 'rc-btns' }, nextOk ? this._btn('', I.t('nextRug'), () => this.start(this.curDef.id + 1)) : null, this._btn(nextOk ? 'dark' : '', I.t('again'), () => this.start(this.curDef.id)), this._btn('dark', I.t('menu'), () => this.showLevels())))))));
    this._soundPill();
  }

  // ---------- loop ----------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt; this.frame++;
      if (this.mode === 'play' && !this.paused) this._update(dt);
      this._draw(dt);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _update(dt) {
    const j = this.job; j.time += dt;
    const p = this.ptr; const st = this.stage; const snd = this.sound;
    let fizz = 0; let scrub = 0; let jet = 0; let squeak = 0; let pitch = 0.5;
    if (p) {
      const c = this._cell(p.x, p.y); const lc = p.lc; const dist = Math.hypot(c.x - lc.x, c.y - lc.y);
      const spdPx = dist * (this.rect.w / j.cols) / Math.max(dt, 0.001); p.speed += (spdPx - p.speed) * 0.3;
      const moving = dist > 0.25;
      if (st === 1) {
        if (moving || p.lastHit < 0) { j.spray(lc.x, lc.y, c.x, c.y); p.lc = c; p.lastHit = 0; }
        fizz = moving ? 1 : 0.35; if (this.frame % 2 === 0) this._part('foam', p.x + (Math.random() - 0.5) * this._rpx(), p.y + (Math.random() - 0.5) * this._rpx());
        if (Math.random() < 0.12) snd.play('pop');
      } else if (st === 2) {
        if (moving) {
          p.trail.push(c); if (p.trail.length > 12) p.trail.shift();
          const cn = circularity(p.trail); this.circ += (cn - this.circ) * 0.25;
          const eff = 0.3 + 0.7 * this.circ;
          const res = j.scrub(lc.x, lc.y, c.x, c.y, eff); p.lc = c;
          this.dryT = res.dry > 0 && res.removed < 0.01 ? this.dryT + dt : 0; this.circT = this.circ < 0.35 ? this.circT + dt : 0;
          if (this.dryT > 0.7) { this._toast(I.t('needFoam')); this.dryT = 0; } else if (this.circT > 1.4 && j.progress(1) > 0.2) { this._toast(I.t('circles')); this.circT = 0; }
          scrub = Math.min(1, p.speed / 260) * (0.5 + 0.5 * eff); pitch = Math.min(1, p.speed / 400);
          this.spin = (this.spin || 0) + dt * (6 + Math.min(30, p.speed / 25));
          if (this.frame % 3 === 0 && res.removed > 0.2) this._part('foam', p.x + (Math.random() - 0.5) * this._rpx(), p.y + (Math.random() - 0.5) * this._rpx());
        } else this.spin = (this.spin || 0) + dt * 3;
      } else if (st === 3) {
        j.jet(lc.x, lc.y, c.x, c.y, dt); p.lc = c; jet = 1; pitch = Math.min(1, p.speed / 500);
        for (let i = 0; i < 2; i++) this._part('drop', p.x + (Math.random() - 0.5) * this._rpx() * 0.8, p.y + (Math.random() - 0.5) * this._rpx() * 0.8);
      } else if (st === 4) {
        if (dist >= 1) {
          p.trail.push(c); if (p.trail.length > 9) p.trail.shift();
          const eff = straightness(p.trail); j.squeegee(lc.x, lc.y, c.x, c.y, eff); p.dx = c.x - lc.x; p.dy = c.y - lc.y; p.lc = c;
          squeak = Math.min(1, p.speed / 220) * (0.4 + 0.6 * eff); pitch = Math.min(1, p.speed / 500);
          if (eff < 0.55 && p.trail.length > 6) { this.circT += dt; if (this.circT > 1.2) { this._toast(I.t('straight')); this.circT = 0; } }
          if (this.frame % 3 === 0) this._part('drop', p.x + (p.dx > 0 ? 1 : -1) * 4, p.y);
        }
      }
    }
    snd.hold('fizz', fizz, pitch); snd.hold('scrub', scrub, pitch); snd.hold('jet', jet, pitch); snd.hold('squeak', squeak, pitch); snd.hold('squeakNoise', squeak * 0.6, pitch);
    if (j.ver !== this.lv) this._compose();
    this.hitAnim = Math.max(0, (this.hitAnim || 0) - dt * 6); this.shk = Math.max(0, this.shk - dt * 8);
    if (this.frame % 6 === 0) {
      this.progV = j.progress(); this.progEl.style.width = `${Math.round(this.progV * 100)}%`;
      const rd = this.progV >= READY; this.nextBtn.classList.toggle('ready', rd);
      if (rd && !this.chimed) { this.chimed = true; snd.play('coin'); }
      this.coinEl.textContent = I.num(this.save.coins); this.timeEl.textContent = mmss(j.time); this.waterEl.textContent = `${I.num(j.water.toFixed(1))}`;
    }
  }

  _draw(dt) {
    const g = this.g; g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.imageSmoothingEnabled = true;
    g.drawImage(this.bg, 0, 0, this.cw, this.ch);
    if (this.mode === 'menu') {
      const por = !this.land;
      if (!this.menuRug || this.menuRug.por !== por) { this.menuRug = this._newRug(LEVELS[3], por ? ROWS : COLS, por ? COLS : ROWS); this.menuRug.por = por; this._buildFrame(); }
      const asp = this.menuRug.width / this.menuRug.height; const r = this._rect(asp);
      g.drawImage(this.frameC, 0, 0, this.cw, this.ch); // frame matches the default rect
      g.drawImage(this.menuRug, r.x, r.y, r.w, r.h);
      return;
    }
    if (!this.job) return;
    g.drawImage(this.frameC, 0, 0, this.cw, this.ch);
    const R = this.rect; const sh = this.shk * Math.sin(this.clock * 70) * this.u * 0.35;
    g.save(); g.translate(0, sh);
    g.drawImage(this.rugC, R.x, R.y, R.w, R.h);
    g.drawImage(this.ovC, R.x, R.y, R.w, R.h);
    if (this.anyFoam) g.drawImage(this.fm, R.x, R.y, R.w, R.h);
    g.restore();
    // particles
    const ps = this.parts;
    for (let i = ps.length - 1; i >= 0; i--) {
      const q = ps[i]; q.t += dt; if (q.t >= q.max) { ps.splice(i, 1); continue; }
      q.x += q.vx * dt; q.y += q.vy * dt; if (q.kind === 'drop' || q.kind === 'spark') q.vy += this.u * 40 * dt; const k = q.t / q.max;
      g.globalAlpha = 1 - k;
      if (q.kind === 'dust') { g.fillStyle = '#cdb890'; g.beginPath(); g.arc(q.x, q.y, q.s * (1 + k * 2), 0, 6.3); g.fill(); }
      else if (q.kind === 'foam') { g.fillStyle = '#fff'; g.strokeStyle = 'rgba(150,190,225,.9)'; g.lineWidth = 1; g.beginPath(); g.arc(q.x, q.y, q.s, 0, 6.3); g.fill(); g.stroke(); }
      else if (q.kind === 'drop') { g.fillStyle = '#8ad4ff'; g.beginPath(); g.arc(q.x, q.y, q.s, 0, 6.3); g.fill(); }
      else { g.fillStyle = '#ffd23a'; g.fillRect(q.x, q.y, q.s, q.s); }
    }
    g.globalAlpha = 1;
    // the tool
    if (this.mode === 'play' && !this.paused) {
      const p = this.ptr || this.hover;
      if (p) {
        const st = this.stage; const kind = TOOL[st];
        const k = { active: !!this.ptr, hit: this.hitAnim || 0, spin: this.spin || 0, dirx: this.ptr && this.ptr.dx ? this.ptr.dx : 1, diry: this.ptr && this.ptr.dy ? this.ptr.dy : 0 };
        if (st === 4) { const a = this.ptr && this.ptr.dx !== undefined ? Math.atan2(this.ptr.dy, this.ptr.dx) : -Math.PI / 2; k.dirx = Math.cos(a); k.diry = Math.sin(a); }
        drawTool(g, kind === 'foam' ? 'foam' : kind, p.x, p.y, this._rpx(), this.clock, k);
      }
    }
  }

  pause() { this.sound.silence(); this.sound.suspend(); if (this.mode === 'play') this._pause(); }
  dispose() { cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); this.root.remove(); }
}

void STAGES;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.RugCleaning = api;
export default api;
