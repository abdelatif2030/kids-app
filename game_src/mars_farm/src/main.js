// «مزرعة المريخ» — Mars Farm Colony. Entry: window.MarsFarm.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Isometric farming and colony building. Logic lives in sim.js, drawing in draw.js, sound in audio.js, texts in i18n.js.
import { Colony, GRID, REGIONS, CROPS, BUILD, LEVELS, ITEMS, MAX_LEVEL, HQ, regionOf, levelBonus, isSave, normalizeSave } from './sim.js';
import { drawWorld, sp, isTall } from './draw.js';
import { Sound } from './audio.js';
import { I, EMOJI, LEVEL_TITLES, nm, lt, taskText, unlockText, REGION_NAMES } from './i18n.js';
import { h, css } from '../../cozy_kit/ui.js';

const EXTRA = `
.mf-root{background:#3a1d3f}
.mf-pill{font-size:calc(var(--u)*3.6);padding:calc(var(--u)*.8) calc(var(--u)*2.2)}
.mf-pill.btn{cursor:pointer;pointer-events:auto;font-family:inherit}
.mf-hint{top:calc(var(--u)*25)}
.mf-inv{position:absolute;top:calc(var(--u)*15.5);left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;flex-wrap:wrap;gap:calc(var(--u)*1);justify-content:center;direction:ltr;pointer-events:none}
.mf-chip{background:rgba(40,16,40,.62);border:calc(var(--u)*.3) solid rgba(255,255,255,.7);border-radius:999px;padding:calc(var(--u)*.3) calc(var(--u)*1.6);font-weight:900;font-size:calc(var(--u)*3.3);display:flex;gap:calc(var(--u)*.6);align-items:center}
.mf-dock{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;flex-direction:column;gap:calc(var(--u)*1.2);pointer-events:none}
.mf-rowb{display:flex;gap:calc(var(--u)*1.2);justify-content:center;direction:ltr}
.mf-rowb .mf-bld{flex:1;max-width:calc(var(--u)*24);min-width:0;padding:calc(var(--u)*.8) calc(var(--u)*.6)}
.mf-rowb.big .mf-bld{max-width:calc(var(--u)*31)}
.mf-bld{position:relative;pointer-events:auto}
.mf-bld.sel{outline:calc(var(--u)*.7) solid #ffe08a;box-shadow:0 0 calc(var(--u)*2.5) #ffe08a}
.mf-badge{position:absolute;top:calc(var(--u)*-1);right:calc(var(--u)*-.6);min-width:calc(var(--u)*5);height:calc(var(--u)*5);background:#ff3d5a;border:calc(var(--u)*.4) solid #fff;border-radius:999px;font-size:calc(var(--u)*2.9);display:flex;align-items:center;justify-content:center;padding:0 calc(var(--u)*.8);box-sizing:border-box}
.mf-fab{position:absolute;left:calc(var(--u)*3);top:calc(var(--u)*25);width:calc(var(--u)*9);height:calc(var(--u)*9);font-size:calc(var(--u)*4.4)}
.mf-layer.cel .mf-dock,.mf-layer.cel .mf-inv,.mf-layer.cel .mf-fab{display:none}
.mf-list{display:flex;flex-direction:column;gap:calc(var(--u)*1.4);width:100%}
.mf-item{display:flex;align-items:center;gap:calc(var(--u)*2);background:rgba(255,255,255,.15);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*2);font-weight:900;font-size:calc(var(--u)*3.8);width:100%;box-sizing:border-box}
.mf-item.dim{opacity:.55}
.mf-item .grow{flex:1;min-width:0}
.mf-item i{font-style:normal;font-size:calc(var(--u)*7)}
.mf-item small{display:block;font-size:calc(var(--u)*2.9);opacity:.9;font-weight:700}
.mf-mini{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*3);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a;min-height:calc(var(--u)*9)}
.mf-mini.off{background:linear-gradient(180deg,#9a8aa8,#6a5a78);box-shadow:0 calc(var(--u)*.6) 0 #3a2a48}
.mf-need{display:inline-flex;gap:calc(var(--u)*.4);align-items:center;background:rgba(0,0,0,.25);border-radius:999px;padding:0 calc(var(--u)*1.2);margin:calc(var(--u)*.3);font-size:calc(var(--u)*3.4)}
.mf-need.ok{background:rgba(60,200,100,.5)}
.mf-prog{height:calc(var(--u)*1.6);background:rgba(0,0,0,.35);border-radius:99px;overflow:hidden;margin-top:calc(var(--u)*.6)}
.mf-prog b{display:block;height:100%;background:linear-gradient(180deg,#7af0d0,#2ab898)}
.mf-dim{z-index:5}
.mf-land .mf-dock{inset:0;bottom:0;left:0;right:0}
.mf-land .mf-rowb{position:absolute;flex-direction:column;top:calc(var(--u)*17);bottom:calc(var(--u)*2);justify-content:center;gap:calc(var(--u)*1);width:calc(var(--u)*21)}
.mf-land .mf-rowb:first-child{right:calc(var(--u)*2)}
.mf-land .mf-rowb:last-child{left:calc(var(--u)*2)}
.mf-land .mf-rowb .mf-bld,.mf-land .mf-rowb.big .mf-bld{flex:none;max-width:none;width:100%;flex-direction:row;justify-content:center;gap:calc(var(--u)*1);min-height:calc(var(--u)*9.5);padding:calc(var(--u)*.4) calc(var(--u)*1)}
.mf-land .mf-bld i{font-size:calc(var(--u)*5)}
.mf-land .mf-fab{top:calc(var(--u)*17);left:calc(var(--u)*25)}
`;

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.num = I.num; this.lvLabel = I.t('level');
    this.rawSave = config.save;
    this.base = config.base || './';
    this.sound = new Sound();
    this.easy = Number(config.age) > 0 && Number(config.age) <= 4;
    this.c = new Colony({ save: isSave(config.save) ? config.save : null, seed: (Date.now() & 0xfffff) + 1, speed: this.easy ? 1.3 : 1 });
    if (!document.getElementById('mf-style')) document.head.append(h('style', { id: 'mf-style' }, css('mf', '#ff8a4a', '#a8381a', '#ffe08a') + EXTRA));
    this.root = h('div', { class: 'mf-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas'); this.root.append(this.cv); this.g = this.cv.getContext('2d');
    this.layer = h('div', { class: 'mf-layer' }); this.root.append(this.layer);
    this.mode = 'menu'; this.clock = 0; this.fx = []; this.drones = []; this.pods = []; this.parts = []; this.walkers = [];
    this.cam = { x: 0, y: 200, s: 1 }; this.camT = null; this.userCam = false;
    this.ptrs = new Map(); this.selCrop = 'wheat'; this.placing = null; this.placeW = 1; this.spotsCache = [];
    this.dirty = false; this.saveT = 0; this.hintT = 8; this.hintGap = 0; this.idle = 0; this.ripeT = 0; this.cel = null; this.sizeKey = '';
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this._refit(true); this.showMenu(); this._loop(); });
  }

  async _fonts() { try { const ff = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([ff.load().then((x) => document.fonts.add(x)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr); this.cv.height = Math.round(this.ch * this.dpr);
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${Math.min(this.u, 6.2)}px`);
    this.uu = Math.min(this.u, 6.2);
    this.land = this.cw / this.ch > 1.25; this.root.classList.toggle('mf-land', this.land);
    if (this.c) this._refit(false);
  }

  // ----- camera -----
  _refit(snap) {
    const c = this.c; let x0 = 1e9; let x1 = -1e9; let y0 = 1e9; let y1 = -1e9;
    for (const r of REGIONS) {
      if (!c.regions[r.id]) continue;
      for (const [gx, gy] of [[r.x, r.y], [r.x + r.w, r.y], [r.x + r.w, r.y + r.h], [r.x, r.y + r.h]]) { const px = (gx - gy) * 32; const py = (gx + gy) * 16; x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py - 50); y1 = Math.max(y1, py + 20); }
    }
    const top = this.land ? this.uu * 17 : this.uu * 27; const bot = this.land ? this.uu * 3 : this.uu * 30;
    const aw = this.land ? this.cw - this.uu * 46 : this.cw * 0.96; const ah = Math.max(60, this.ch - top - bot);
    const s = Math.max(0.45, Math.min(2.2, Math.min(aw / (x1 - x0 + 40), ah / (y1 - y0 + 20))));
    this.vy = top + ah / 2;
    this.camT = { x: (x0 + x1) / 2, y: (y0 + y1) / 2, s };
    this.userCam = false;
    if (snap || !this.cam.s) this.cam = { ...this.camT };
  }
  _unproject(sx, sy) {
    const px = (sx - this.cw / 2) / this.cam.s + this.cam.x; const py = (sy - this.vy) / this.cam.s + this.cam.y;
    return [(py / 16 + px / 32) / 2, (py / 16 - px / 32) / 2];
  }
  _pick(sx, sy) {
    const [gx, gy] = this._unproject(sx, sy); const tx = Math.floor(gx); const ty = Math.floor(gy);
    for (const [d, big] of [[2, true], [1, false], [0, false]]) {
      const b = this.c.bldAt(tx + d, ty + d);
      if (b && (d === 0 || (isTall(b.k) && (d === 1 || b.w === 2)))) return { x: tx + d, y: ty + d, b };
    }
    return { x: tx, y: ty, b: null };
  }

  // ----- input -----
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const cv = this.cv;
    cv.addEventListener('pointerdown', (e) => {
      cv.setPointerCapture(e.pointerId);
      this.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t: performance.now(), moved: false });
      if (this.ptrs.size === 2) { const [a, b] = [...this.ptrs.values()]; this.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: this.cam.s }; for (const p of this.ptrs.values()) p.moved = true; }
    });
    cv.addEventListener('pointermove', (e) => {
      const p = this.ptrs.get(e.pointerId); if (!p) return;
      const dx = e.clientX - p.x; const dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
      if (this.ptrs.size === 2 && this.pinch) { const [a, b] = [...this.ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); this.cam.s = Math.max(0.35, Math.min(3, this.pinch.s * d / Math.max(1, this.pinch.d))); this.userCam = true; return; }
      if (!p.moved && Math.hypot(p.x - p.x0, p.y - p.y0) > 9) p.moved = true;
      if (p.moved) { this.cam.x -= dx / this.cam.s; this.cam.y -= dy / this.cam.s; this.userCam = true; this._clampCam(); }
    });
    const up = (e) => {
      const p = this.ptrs.get(e.pointerId); this.ptrs.delete(e.pointerId); if (this.ptrs.size < 2) this.pinch = null;
      if (p && !p.moved && performance.now() - p.t < 700 && e.type === 'pointerup') { const r = cv.getBoundingClientRect(); this._tap(e.clientX - r.left, e.clientY - r.top); }
    };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', (e) => { e.preventDefault(); this.cam.s = Math.max(0.35, Math.min(3, this.cam.s * (e.deltaY < 0 ? 1.1 : 0.9))); this.userCam = true; }, { passive: false });
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); this._save(true); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }
  _clampCam() { this.cam.x = Math.max(-GRID * 32, Math.min(GRID * 32, this.cam.x)); this.cam.y = Math.max(-40, Math.min(GRID * 32 + 40, this.cam.y)); }

  // ----- messages and modals -----
  _say(text, ms = 2300) {
    if (!this.hintEl) { this.hintEl = h('div', { class: 'mf-hint' }); this.layer.append(this.hintEl); }
    this.hintEl.textContent = text; this.hintEl.classList.add('show');
    clearTimeout(this._hintTo); this._hintTo = setTimeout(() => this.hintEl.classList.remove('show'), ms);
  }
  _modal(card, { dismiss = true, onClose } = {}) {
    this._closeModal();
    const dim = h('div', { class: 'mf-dim', onclick: (e) => { if (dismiss && e.target === dim) this._closeModal(); } }, card);
    this.modalEl = dim; this.modalClose = onClose; this.layer.append(dim);
    return dim;
  }
  _closeModal() { if (this.modalEl) { this.modalEl.remove(); this.modalEl = null; this.refreshPanel = null; const f = this.modalClose; this.modalClose = null; if (f) f(); } }
  _chips(need, inv) {
    return Object.entries(need).map(([k, n]) => h('span', { class: `mf-need${inv && inv[k] >= n ? ' ok' : ''}` }, EMOJI[k], inv ? `${I.num(Math.min(inv[k], n))}/${I.num(n)}` : `×${I.num(n)}`));
  }

  showMenu() {
    this._closeModal(); this._endPlacing(); this.mode = 'menu'; this.sound.setMode(false);
    this.layer.replaceChildren(); this.layer.className = 'mf-layer'; this.hintEl = null;
    const has = isSave(this.rawSave) || this.c.level > 1 || this.c.count('field') > 4 || this.started;
    let armed = false;
    const nb = h('button', { class: 'mf-btn dark', onclick: () => { if (has && !armed) { armed = true; nb.textContent = I.t('sure'); this.sound.play('err'); return; } this._newGame(); } }, I.t('newgame'));
    this._modalMenu = h('div', { class: 'mf-dim' }, h('div', { class: 'mf-card' },
      h('div', { class: 'mf-logo' }, I.t('title')),
      h('div', { class: 'mf-small' }, I.t('how')), h('div', { class: 'mf-small' }, I.t('how2')),
      this.c.won ? h('div', { class: 'mf-small' }, '🏆 ' + I.t('welcome')) : h('div', { class: 'mf-small' }, `⭐ ${I.t('level')} ${I.num(this.c.level)}`),
      h('button', { class: 'mf-btn', onclick: () => { this.sound.play('tap'); this.start(); } }, has ? I.t('cont') : I.t('play')),
      has ? nb : null,
      h('button', { class: 'mf-btn dark', onclick: () => { this._save(true); this.post({ type: 'exit' }); } }, I.t('exit'))));
    this.layer.append(this._modalMenu);
    this._soundPill();
  }
  _newGame() {
    this.c = new Colony({ seed: (Date.now() & 0xfffff) + 1, speed: this.easy ? 1.3 : 1 });
    this.rawSave = null; this.walkers = []; this.drones = []; this.pods = []; this.fx = []; this.cel = null;
    this._refit(true); this._save(true); this.start();
  }
  _soundPill() {
    const pill = h('button', { class: 'mf-soundpill', onclick: () => this.sound.unlock() }, I.t('sound')); this.layer.append(pill);
    const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); };
    tick();
  }

  start() {
    this.mode = 'play'; this.started = true; this._closeModal();
    this.layer.replaceChildren(); this.layer.className = 'mf-layer'; this.hintEl = null; this.sound.setMode(true);
    this._buildHud();
    this._refit(false); this._syncWalkers(true);
    if (this.c.levelReady) this._levelReady();
    this.hintT = 6;
  }

  _buildHud() {
    const c = this.c;
    this.coinEl = h('span'); this.lvEl = h('span'); this.colEl = h('span');
    this.invEl = h('div', { class: 'mf-inv' });
    const back = h('button', { class: 'mf-round', 'aria-label': I.t('menu'), onclick: () => { this._save(true); this.showMenu(); } }, '☰');
    this.layer.append(
      h('div', { class: 'mf-top' }, back, h('div', { class: 'mf-pill' }, this.coinEl), h('button', { class: 'mf-pill btn', onclick: () => this.showTasks() }, this.lvEl), h('div', { class: 'mf-pill' }, this.colEl)),
      this.invEl,
      h('button', { class: 'mf-round mf-fab', 'aria-label': I.t('recenter'), onclick: () => { this._refit(false); this.sound.play('tap'); } }, '🎯'));
    this.cropBtns = {};
    const row1 = h('div', { class: 'mf-rowb' });
    for (const k of Object.keys(CROPS)) {
      const lock = h('small'); const b = h('button', { class: 'mf-bld', onclick: () => this._selectCrop(k) }, h('i', {}, EMOJI[k]), h('span', {}, nm(k)), lock);
      this.cropBtns[k] = { b, lock }; row1.append(b);
    }
    row1.append(h('button', { class: 'mf-bld', onclick: () => this._harvestAll() }, h('i', {}, '🧺'), h('span', {}, I.t('harvestAll'))),
      h('button', { class: 'mf-bld', onclick: () => this._plantAll() }, h('i', {}, '🌱'), h('span', {}, I.t('plantAll'))));
    this.ordBadge = h('div', { class: 'mf-badge' }); this.taskBadge = h('div', { class: 'mf-badge' });
    const row2 = h('div', { class: 'mf-rowb big' },
      h('button', { class: 'mf-bld', onclick: () => this.showBuild() }, h('i', {}, '🏗️'), h('span', {}, I.t('build'))),
      h('button', { class: 'mf-bld', onclick: () => this.showOrders() }, h('i', {}, '📦'), h('span', {}, I.t('orders')), this.ordBadge),
      h('button', { class: 'mf-bld', onclick: () => this.showTasks() }, h('i', {}, '📋'), h('span', {}, I.t('tasks')), this.taskBadge));
    this.dock = h('div', { class: 'mf-dock' }, row1, row2); this.layer.append(this.dock);
    this._soundPill();
    this.hudKey = '';
  }
  _hud() {
    const c = this.c; const tasks = c.tasks(); const dn = tasks.filter((t) => t.done).length;
    const key = JSON.stringify([c.coins, c.level, c.colonists, c.capacity(), c.inv, this.selCrop, tasks.length, dn, c.orders.map((o) => c.canSend(o)), c.won]);
    if (key === this.hudKey) return; this.hudKey = key;
    this.coinEl.textContent = `🪙 ${I.num(Math.floor(c.coins))}`;
    this.lvEl.textContent = c.won ? `🏆 ${I.num(c.level)}` : `⭐ ${I.num(c.level)}`;
    this.colEl.textContent = `👨‍🚀 ${I.num(c.colonists)}/${I.num(c.capacity())}`;
    this.invEl.replaceChildren(...ITEMS.filter((i) => c.inv[i] > 0 || c.orderable(i)).map((i) => h('div', { class: 'mf-chip' }, EMOJI[i], I.num(c.inv[i]))));
    for (const [k, v] of Object.entries(this.cropBtns)) {
      const ok = c.level >= CROPS[k].level;
      v.b.classList.toggle('sel', ok && this.selCrop === k); v.b.classList.toggle('done', !ok); v.lock.textContent = ok ? '' : `🔒 ${I.num(CROPS[k].level)}`;
    }
    const ready = c.orders.filter((o) => c.canSend(o)).length;
    this.ordBadge.style.display = ready ? 'flex' : 'none'; this.ordBadge.textContent = I.num(ready);
    this.taskBadge.style.display = c.won ? 'none' : 'flex'; this.taskBadge.textContent = `${I.num(dn)}/${I.num(tasks.length)}`;
    if (this.refreshPanel) this.refreshPanel();
  }

  _selectCrop(k) {
    if (this.c.level < CROPS[k].level) { this.sound.play('err'); this._say(`${I.t('lockedCrop')} ${I.num(CROPS[k].level)}`); return; }
    this.selCrop = k; this.sound.play('select'); this.hudKey = '';
  }
  _harvestAll() { const n = this.c.harvestAll(); if (!n) { this._say(I.t('nothing')); this.sound.play('err'); } this._dirty(); }
  _plantAll() { const n = this.c.plantAll(this.selCrop); if (!n) { this._say(I.t('nofields')); this.sound.play('err'); } this._dirty(); }
  _dirty() { this.dirty = true; this.idle = 0; }

  // ----- tapping the map -----
  _tap(sx, sy) {
    if (this.mode !== 'play' || this.modalEl) return;
    this.idle = 0;
    const c = this.c; const p = this._pick(sx, sy);
    if (this.placing) { this._place(p.x, p.y); return; }
    const b = p.b;
    if (!b) {
      const r = regionOf(p.x, p.y);
      if (r >= 0 && !c.regions[r]) this._regionDialog(r);
      else this.sound.play('tap');
      return;
    }
    switch (b.k) {
      case 'field':
        if (b.crop && c.cropReady(b)) c.harvest(b);
        else if (!b.crop) { if (c.plant(b, this.selCrop)) { /* event plays sound */ } else { this.sound.play('err'); this._say(I.t('lockedCrop') + ' ' + I.num(CROPS[this.selCrop].level)); } }
        else { this.sound.play('tap'); this._say(I.t('growing'), 1200); }
        break;
      case 'pen': {
        const r = c.tapPen(b);
        if (!r.milk && !r.fed) { this.sound.play('err'); this._say(r.hungryNoFood ? I.t('noFood') : I.t('goatsBusy')); } else if (r.hungryNoFood) this._say(I.t('noFood'));
        break;
      }
      case 'bakery': case 'dairy': case 'juicer': {
        const r = c.tapFactory(b);
        if (!r.out && !r.loaded) { this.sound.play('err'); this._say(r.missing ? `${I.t('needItem')} ${EMOJI[r.missing]} ${nm(r.missing)}` : I.t('growing'), 1800); }
        break;
      }
      case 'hq': this.showOrders(); break;
      case 'home': this.sound.play('tap'); this._say(`🏠 ${I.num(Math.min(c.colonists, 99))} ${I.t('colonists')}`, 1500); break;
      case 'spaceport': this.sound.play('tap'); this._say(c.won ? '🚀 ' + I.t('welcome') : '🚀', 1800); break;
      default: break;
    }
    this._dirty();
  }

  _place(x, y) {
    const k = this.placing; const r = this.c.build(k, x, y);
    if (r.ok) { if (k !== 'field') this._endPlacing(); this._dirty(); return; }
    this.sound.play('err');
    this._say(r.why === 'coins' ? `${I.t('needCoins')} (🪙 ${I.num(r.cost)})` : r.why === 'level' ? `${I.t('needLevel')} ${I.num(r.level)}` : r.why === 'max' ? I.t('maxed') : I.t('needSpot'));
  }
  _beginPlacing(kind) {
    this._closeModal(); this.placing = kind; this.placeW = BUILD[kind].w; this._spots();
    this.dock.style.display = 'none';
    this.placeBar = h('div', { class: 'mf-dock' }, h('div', { class: 'mf-rowb' },
      h('button', { class: 'mf-btn alt', style: 'width:auto;flex:1;max-width:calc(var(--u)*40)', onclick: () => this._endPlacing() }, I.t('cancel')),
      h('button', { class: 'mf-btn', style: 'width:auto;flex:1;max-width:calc(var(--u)*40)', onclick: () => this._endPlacing() }, I.t('done'))));
    this.layer.append(this.placeBar);
    this._say(`${EMOJI[kind]} ${I.t('placeHint')}`, 3500);
  }
  _spots() { this.spotsCache = this.placing ? this.c.spots(this.placing) : []; }
  _endPlacing() { this.placing = null; this.spotsCache = []; if (this.placeBar) { this.placeBar.remove(); this.placeBar = null; } if (this.dock) this.dock.style.display = ''; }

  _regionDialog(id) {
    const r = REGIONS[id]; const c = this.c;
    if (c.level < r.level) { this.sound.play('err'); this._say(`${I.t('regionAt')} ${I.num(r.level)}`); return; }
    const can = c.coins >= r.cost;
    this._modal(h('div', { class: 'mf-card' }, h('div', { class: 'mf-title' }, `🗺️ ${lt(REGION_NAMES[id])}`), h('div', { class: 'mf-small' }, I.t('openRegion')),
      h('div', { class: 'mf-pill' }, `🪙 ${I.num(r.cost)}`),
      h('button', { class: `mf-btn${can ? '' : ' dark'}`, onclick: () => { const x = c.unlockRegion(id); if (x.ok) { this._closeModal(); this._dirty(); } else { this.sound.play('err'); this._say(I.t('needCoins')); } } }, I.t('open')),
      h('button', { class: 'mf-btn dark', onclick: () => this._closeModal() }, I.t('cancel'))));
  }

  // ----- panels -----
  showBuild() {
    if (this.mode !== 'play') return;
    const c = this.c;
    const body = () => {
      const list = h('div', { class: 'mf-list' });
      for (const k of Object.keys(BUILD)) {
        const d = BUILD[k]; const cost = c.costOf(k); const locked = c.level < d.level; const maxed = c.count(k) >= d.max; const can = !locked && !maxed && c.coins >= cost;
        list.append(h('div', { class: `mf-item${locked || maxed ? ' dim' : ''}` }, h('i', {}, EMOJI[k]),
          h('div', { class: 'grow' }, nm(k), h('small', {}, locked ? `🔒 ${I.t('lockedLevel')} ${I.num(d.level)}` : `${I.t('owned')}: ${I.num(c.count(k))}`)),
          maxed ? h('span', {}, '✓') : h('button', { class: `mf-mini${can ? '' : ' off'}`, onclick: () => { if (locked) { this.sound.play('err'); this._say(`${I.t('needLevel')} ${I.num(d.level)}`); } else if (!can) { this.sound.play('err'); this._say(I.t('needCoins')); } else this._beginPlacing(k); } }, `🪙 ${I.num(cost)}`)));
      }
      const gc = c.goatCost(); const gl = c.level < 1;
      list.append(h('div', { class: 'mf-item' }, h('i', {}, '🐐'), h('div', { class: 'grow' }, nm('goat'), h('small', {}, `${I.t('owned')}: ${I.num(c.goatCount())}`)),
        h('button', { class: `mf-mini${c.coins >= gc && !gl ? '' : ' off'}`, onclick: () => { const r = c.buyGoat(); if (r.ok) { this._dirty(); this.refreshPanel && this.refreshPanel(); } else { this.sound.play('err'); this._say(r.why === 'pen' ? I.t('needPen') : I.t('needCoins')); } } }, `🪙 ${I.num(gc)}`)));
      return list;
    };
    const card = h('div', { class: 'mf-card' }); const render = () => card.replaceChildren(h('div', { class: 'mf-title' }, '🏗️ ' + I.t('buildTitle')), body(), h('button', { class: 'mf-btn dark', onclick: () => this._closeModal() }, I.t('close')));
    render(); this._modal(card); this.refreshPanel = render;
  }
  showOrders() {
    if (this.mode !== 'play') return;
    const c = this.c;
    const card = h('div', { class: 'mf-card' });
    const render = () => {
      const list = h('div', { class: 'mf-list' });
      for (const o of c.orders) {
        const can = c.canSend(o);
        list.append(h('div', { class: 'mf-item' }, h('i', {}, '📦'), h('div', { class: 'grow' }, this._chips(o.need, c.inv), h('small', {}, `${I.t('reward')}: 🪙 ${I.num(o.reward)}`)),
          h('button', { class: `mf-mini${can ? '' : ' off'}`, onclick: () => this._send(o.id) }, can ? I.t('send') : I.t('need'))));
      }
      card.replaceChildren(h('div', { class: 'mf-title' }, '📦 ' + I.t('ordersTitle')), list, h('button', { class: 'mf-btn dark', onclick: () => this._closeModal() }, I.t('close')));
    };
    render(); this._modal(card); this.refreshPanel = render;
  }
  _send(id) {
    const r = this.c.sendOrder(id);
    if (!r.ok) { this.sound.play('err'); this._say(I.t('need')); return; }
    this._closeModal(); this._dirty();
  }
  showTasks() {
    if (this.mode !== 'play') return;
    const c = this.c; const card = h('div', { class: 'mf-card' });
    const render = () => {
      if (c.won) { card.replaceChildren(h('div', { class: 'mf-title' }, '🏆 ' + I.t('allDone')), h('div', { class: 'mf-small' }, I.t('welcomeText')), h('button', { class: 'mf-btn dark', onclick: () => this._closeModal() }, I.t('close'))); return; }
      const list = h('div', { class: 'mf-list' });
      for (const t of c.tasks()) list.append(h('div', { class: `mf-item${t.done ? ' dim' : ''}` }, h('i', {}, t.done ? '✅' : '🎯'),
        h('div', { class: 'grow' }, taskText(t), h('div', { class: 'mf-prog' }, h('b', { style: `width:${Math.round(t.v / t.n * 100)}%` }))), h('span', {}, `${I.num(t.v)}/${I.num(t.n)}`)));
      card.replaceChildren(h('div', { class: 'mf-title' }, `⭐ ${I.t('level')} ${I.num(c.level)}`), h('div', { class: 'mf-small' }, lt(LEVEL_TITLES[c.level - 1])), list, h('button', { class: 'mf-btn dark', onclick: () => this._closeModal() }, I.t('close')));
    };
    render(); this._modal(card); this.refreshPanel = render;
  }
  _levelReady() {
    if (this.modalEl && this.modalEl !== this._modalMenu && this.levelModal) return;
    const c = this.c; const last = c.level >= MAX_LEVEL; this.sound.play('ready');
    const next = LEVELS[Math.min(c.level, MAX_LEVEL - 1)]; // the unlocks of the level that comes next
    const card = h('div', { class: 'mf-card' },
      h('div', { class: 'mf-title' }, last ? `🎉 ${I.t('finalTitle')}` : `🎉 ${I.t('levelDone')} ${I.num(c.level)}`),
      h('div', { class: 'mf-small' }, I.t(c.gender === 'girl' ? 'win_f' : 'win_m')),
      last ? h('div', { class: 'mf-small' }, I.t('finalText')) : h('div', { class: 'mf-small' }, `${I.t('newIn')}:`),
      last ? null : h('div', { class: 'mf-list' }, (next.unlock.length ? next.unlock : []).map((u) => h('div', { class: 'mf-item' }, unlockText(u)))),
      h('div', { class: 'mf-pill' }, `${I.t('bonus')}: 🪙 ${I.num(levelBonus(c.level))}`),
      h('button', { class: 'mf-btn', onclick: () => { this.levelModal = false; this._closeModal(); c.advance(); this._dirty(); } }, last ? I.t('shuttleBtn') : `${I.t('nextLevel')} ${I.num(c.level + 1)}`));
    this.levelModal = true; this._modal(card, { dismiss: false });
  }
  _win() {
    this._modal(h('div', { class: 'mf-card' }, h('div', { class: 'mf-title' }, '🚀 ' + I.t('welcome')), h('div', { class: 'mf-small' }, I.t('welcomeText')), h('div', { class: 'mf-pill' }, `👨‍🚀 ${I.num(this.c.colonists)}`),
      h('button', { class: 'mf-btn', onclick: () => { this._closeModal(); this.cel = null; this.layer.classList.remove('cel'); this._refit(false); this._save(true); } }, I.t('keep')),
      h('button', { class: 'mf-btn dark', onclick: () => { this._closeModal(); this.cel = null; this.layer.classList.remove('cel'); this._save(true); this.showMenu(); } }, I.t('menu'))), { dismiss: false });
  }

  // ----- game loop -----
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
      if (this.mode === 'play') this._update(dt);
      this._anim(dt);
      drawWorld(this);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  _fxAt(x, y, text) { this.fx.push({ gx: x + 0.5, gy: y + 0.5, t: 0, text }); }
  _burst(x, y, n, cols) { for (let i = 0; i < n; i++) { const a = Math.random() * 6.283; const v = 40 + Math.random() * 160; this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, col: cols[i % cols.length], t: 0, life: 0.9 + Math.random() * 0.6, r: 0.6 + Math.random() * 0.8 }); } }

  _update(dt) {
    const c = this.c;
    for (const e of c.step(dt)) this._event(e);
    this.idle += dt; this.saveT += dt;
    if (this.dirty && this.saveT > 3) this._save(false);
    if (this.saveT > 15) this._save(false);
    this._hud();
    if (this.placing) this._spots();
    // gentle tutorial hints
    this.hintT -= dt;
    if (this.hintT <= 0 && this.idle > 6 && !this.modalEl && !this.placing) {
      this.hintT = 14;
      const ripe = c.blds.some((b) => b.k === 'field' && c.cropReady(b));
      if (ripe) this._say(I.t('tutRipe'), 3500);
      else if (c.orders.some((o) => c.canSend(o))) this._say(I.t('tutOrder'), 3500);
      else if (c.blds.some((b) => b.k === 'field' && !b.crop) && c.level < 3) this._say(I.t('tutPlant'), 3500);
      else if (c.blds.some((b) => b.k === 'pen' && b.goats.some((x) => x.s === 'hungry')) && c.inv.wheat > 0 && c.level < 4) this._say(I.t('tutGoat'), 3500);
    }
  }

  _event(e) {
    const s = this.sound; const c = this.c;
    switch (e.type) {
      case 'plant': s.play('plant'); break;
      case 'harvest': s.play('harvest'); this._fxAt(e.x, e.y, `+${I.num(e.n)} ${EMOJI[e.crop]}`); break;
      case 'ripe': if (this.clock - this.ripeT > 0.7) { this.ripeT = this.clock; s.play('ripe'); } break;
      case 'milk': s.play('milk'); this._fxAt(e.x, e.y, `+${I.num(e.n)} 🥛`); break;
      case 'feed': s.play('feed'); break;
      case 'milkready': s.play('goat'); break;
      case 'load': s.play('load'); break;
      case 'made': s.play('harvest'); this._fxAt(e.x, e.y, `+${I.num(e.n)} ${EMOJI[e.good]}`); break;
      case 'done': s.play('done'); break;
      case 'goat': s.play('goat'); this._fxAt(e.x, e.y, '🐐 +1'); break;
      case 'build': s.play('build'); this._fxAt(e.x, e.y, EMOJI[e.kind]); this._burst(...sp(this, e.x + 0.5, e.y + 0.5, 6), 14, ['#ffe08a', '#fff', '#ff9a5a']); if (e.kind === 'home' || e.kind === 'field') this.hudKey = ''; break;
      case 'region': s.play('region'); this._refit(false); { const r = REGIONS[e.id]; this._burst(...sp(this, r.x + r.w / 2, r.y + r.h / 2, 6), 30, ['#ffe08a', '#7af0b0', '#fff', '#ff8aa8']); } break;
      case 'deliver': s.play('drone'); setTimeout(() => s.play('coin'), 800); this.drones.push({ t: 0, dur: 2.2, reward: e.reward }); setTimeout(() => this.fx.push({ gx: HQ.x + 1, gy: HQ.y + 1, t: 0, text: `+${I.num(e.reward)} 🪙` }), 900); break;
      case 'colonist': s.play('colonist'); { const homes = c.blds.filter((b) => b.k === 'home'); const hm = homes[(e.n - 1) % Math.max(1, homes.length)]; if (hm) this.pods.push({ gx: hm.x + 0.5, gy: hm.y + 1.4, t: 0 }); } break;
      case 'levelready': this._levelReady(); break;
      case 'level': s.play('levelup'); this._refit(false); this._burst(this.cw / 2, this.ch / 3, 40, ['#ffe08a', '#7af0b0', '#fff', '#ff8aa8']); this.hudKey = ''; break;
      case 'shuttle': this._startCelebration(); break;
      default: break;
    }
    this._dirty();
  }

  _startCelebration() {
    const sp0 = this.c.blds.find((b) => b.k === 'spaceport');
    this.cel = { t: 0, fw: 0, fin: false };
    this.layer.classList.add('cel'); this.sound.play('rumble'); this._endPlacing();
    if (sp0) this.camT = { x: ((sp0.x + 1) - (sp0.y + 1)) * 32, y: ((sp0.x + 1) + (sp0.y + 1)) * 16 - 20, s: Math.min(2.2, this.camT.s * 1.5) };
    this.userCam = false;
  }

  _syncWalkers(snap) {
    const want = Math.min(this.c.colonists, 10);
    const free = () => { for (let i = 0; i < 40; i++) { const x = Math.floor(Math.random() * GRID); const y = Math.floor(Math.random() * GRID); if (this.c.regions[regionOf(x, y)] && !this.c.bldAt(x, y)) return [x + 0.5, y + 0.5]; } return [5.5, 6.5]; };
    while (this.walkers.length < want) { const [x, y] = free(); this.walkers.push({ gx: x, gy: y, tx: x, ty: y, ph: Math.random() * 6, wait: Math.random() * 2, col: ['#ff7a5a', '#5ab0ff', '#ffd23a', '#7ae08a', '#c88aff'][this.walkers.length % 5], free }); }
    this.walkerWant = want;
  }

  _anim(dt) {
    const s = this.cam.s;
    if (this.camT && !this.userCam) { const k = Math.min(1, dt * 4); this.cam.x += (this.camT.x - this.cam.x) * k; this.cam.y += (this.camT.y - this.cam.y) * k; this.cam.s += (this.camT.s - this.cam.s) * k; }
    if (this.mode === 'play') this._syncWalkers(false);
    for (const w of this.walkers) {
      w.wait -= dt;
      if (w.wait > 0) continue;
      const dx = w.tx - w.gx; const dy = w.ty - w.gy; const d = Math.hypot(dx, dy);
      if (d < 0.05) { const [x, y] = w.free(); w.tx = x; w.ty = y; w.wait = 1 + Math.random() * 3; } else { const v = Math.min(d, dt * 0.7); w.gx += dx / d * v; w.gy += dy / d * v; w.ph += dt * 10; }
    }
    for (const f of this.fx) f.t += dt * 0.8; this.fx = this.fx.filter((f) => f.t < 1);
    for (const d of this.drones) d.t += dt; this.drones = this.drones.filter((d) => d.t < d.dur);
    for (const p of this.pods) p.t += dt; this.pods = this.pods.filter((p) => p.t < 1.4);
    for (const p of this.parts) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 220 * dt; } this.parts = this.parts.filter((p) => p.t < p.life);
    if (this.cel) {
      const cel = this.cel; const before = cel.t; cel.t += dt;
      if (before < 5.4 && cel.t >= 5.4) { this.sound.play('land'); const sp0 = this.c.blds.find((b) => b.k === 'spaceport'); if (sp0) this._burst(...sp(this, sp0.x + 1, sp0.y + 1, 4), 36, ['#f6e8d8', '#e8b898', '#fff']); }
      if (cel.t > 5.6) { cel.fw -= dt; if (cel.fw <= 0) { cel.fw = 0.45; this.sound.play('firework'); const x = this.cw * (0.15 + Math.random() * 0.7); const y = this.ch * (0.12 + Math.random() * 0.3); const cols = [['#ffe08a', '#fff'], ['#ff8aa8', '#ffd0e0'], ['#7af0b0', '#d0fff0'], ['#8ac8ff', '#fff']][Math.floor(Math.random() * 4)]; this._burst(x, y, 36, cols); } }
      if (cel.t > 8 && !cel.fin) { cel.fin = true; this.sound.play('win'); this._win(); }
    }
  }

  // ----- save -----
  _save(force) {
    if (!force && !this.dirty && this.saveT < 15) return;
    this.dirty = false; this.saveT = 0;
    this.rawSave = this.c.toSave();
    this.post({ type: 'save', save: this.rawSave });
  }

  pause() { this.sound.suspend(); this._save(true); }
  dispose() {
    this._save(true);
    cancelAnimationFrame(this.raf); this.sound.dispose(); if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis); this.root.remove();
  }
}

void normalizeSave;
const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.MarsFarm = api;
export default api;
