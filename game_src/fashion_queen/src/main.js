// «ملكة الموضة» — Fashion Queen: Ultimate Girls World. Entry: window.FashionQueen.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A big dress-up world: fashion studio, beauty salon, pet world, dream house, runway, shop, world map with missions, daily tasks and
// achievements. 2D canvas for the stage (everything drawn in code), DOM for the panels. All sound made live. No network, no links,
// nothing leaves the device except the save the app asks for. Nothing can be lost by playing (no failing, no timers).
import { h, clamp } from '../../cozy_kit/ui.js';
import * as L from './logic.js';
import { Sound } from './audio.js';
import { FQ_CSS } from './style.js';
import { I, t } from './i18n.js';
import { drawDoll, drawStage, BG_PICS } from './art.js';
import { loadArt } from '../../cozy_kit/art.js';
import { makeThumbs } from './thumbs.js';
import { STYLE_NAME, COLOR_NAME, HAIR_NAME } from './data.js';
import { menuView, mapView, missionsView, shopView, settingsView } from './screens_main.js';
import { closetView } from './closet.js';
import { salonView } from './salon.js';
import { petsView } from './pets.js';
import { houseView } from './house.js';
import { runwayPickView, runwayShowView } from './runway.js';

const VIEWS = { menu: menuView, map: mapView, missions: missionsView, shop: shopView, settings: settingsView, studio: closetView, salon: salonView, pets: petsView, house: houseView, runway: runwayPickView, show: runwayShowView };

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    this.cfg = config || {};
    this.save = L.normalizeSave(this.cfg.save);
    this.lang = this.save.lang || (this.cfg.lang === 'en' ? 'en' : 'ar');
    I.setLang(this.lang);
    this.base = this.cfg.base || './';
    L.catchUpPets(this.save, Date.now());
    L.ensureDaily(this.save);
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.sound.mv = this.save.music; this.sound.sv = this.save.sfx;
    if (!document.getElementById('fq-style')) document.head.append(h('style', { id: 'fq-style' }, FQ_CSS));
    this.root = h('div', { class: 'fq-root', dir: this.lang === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.cv = h('canvas');
    this.root.append(this.cv);
    this.c = this.cv.getContext('2d');
    this.layer = h('div', { class: 'fq-layer' });
    this.root.append(this.layer);
    this.panelEl = h('div', { class: 'fq-panel' });
    this.toolsEl = h('div', { class: 'fq-tools' });
    this.layer.append(this.panelEl, this.toolsEl);
    this._buildBar();
    this.thumbs = makeThumbs();
    this.styleNames = STYLE_NAME; this.hairNames = HAIR_NAME;
    this.fx = [];
    this.clock = 0;
    this.pointer = { x: 0, y: 0, down: false };
    this.view = null;
    this.stage = { x: 0, y: 0, w: 100, h: 100 };
    this._ready = L.claimableCount(this.save) + L.levelsReady(this.save);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    Promise.all([this._fonts(), loadArt(this.base, ['bg_palace', 'bg_studio', 'bg_salon', 'bg_pets', 'bg_house', 'bg_runway']).then((a) => { for (const k of ['palace', 'studio', 'salon', 'pets', 'house', 'runway']) if (a['bg_' + k]) BG_PICS[k] = a['bg_' + k]; })]).then(() => { this.go('menu'); this._loop(); });
  }

  async _fonts() {
    try {
      const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' });
      await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]);
    } catch (_) { /* system font */ }
  }

  // ---- text helpers ------------------------------------------------------------------------------------------------
  t(k) { return t(k); }
  num(n) { return I.num(n); }
  get en() { return this.lang === 'en'; }
  pick(ar, en) { return this.en ? en : ar; }
  nameOf(pair) { return pair[this.en ? 1 : 0]; }
  priceStr(p) { return [p.coins ? `🪙${this.num(p.coins)}` : '', p.dia ? `💎${this.num(p.dia)}` : ''].filter(Boolean).join(' '); }

  // ---- layout ------------------------------------------------------------------------------------------------------
  _resize() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cv.width = Math.round(this.cw * this.dpr);
    this.cv.height = Math.round(this.ch * this.dpr);
    this.u = clamp(Math.min(this.cw, this.ch) / 100, 3.4, 7);
    this.root.style.setProperty('--u', `${this.u}px`);
    this.portrait = this.cw < this.ch * 1.05;
    this.root.classList.toggle('fq-land', !this.portrait);
    this._applyLayout();
  }

  _applyLayout() {
    const { cw, ch, u } = this;
    const v = this.view;
    const mode = (v && v.layout) || 'split';
    const topH = u * 13.5;
    let stage; let panel = null;
    if (mode === 'stage') stage = { x: 0, y: 0, w: cw, h: ch };
    else if (mode === 'full') { stage = { x: 0, y: topH, w: cw, h: ch - topH }; panel = { x: 0, y: topH, w: cw, h: ch - topH }; }
    else if (this.portrait) { const ph = Math.round(ch * (v && v.panelH ? v.panelH : 0.5)); stage = { x: 0, y: topH, w: cw, h: ch - ph - topH }; panel = { x: 0, y: ch - ph, w: cw, h: ph }; }
    else { const pw = Math.round(Math.min(cw * 0.46, u * 78)); stage = { x: 0, y: topH, w: cw - pw, h: ch - topH }; panel = { x: cw - pw, y: topH, w: pw, h: ch - topH }; }
    this.stage = stage;
    const ps = this.panelEl.style;
    if (panel) { ps.display = 'flex'; ps.left = `${panel.x}px`; ps.top = `${panel.y}px`; ps.width = `${panel.w}px`; ps.height = `${panel.h}px`; } else ps.display = 'none';
    this.panelEl.classList.toggle('full', mode === 'full');
    const ts = this.toolsEl.style;
    ts.left = `${stage.x}px`; ts.width = `${stage.w}px`; ts.top = `${stage.y + stage.h - u * 11.5}px`; ts.height = `${u * 10}px`;
  }

  // ---- screens -----------------------------------------------------------------------------------------------------
  go(name, arg) {
    if (this.view && this.view.dispose) this.view.dispose();
    this.closeModals();
    this.fx.length = 0;
    this.panelEl.replaceChildren();
    this.toolsEl.replaceChildren();
    this.screen = name;
    const v = VIEWS[name](this, arg);
    this.view = v;
    this.view.name = name;
    if (v.panel) this.panelEl.append(v.panel);
    if (v.tools) this.toolsEl.append(v.tools);
    if (this._ov) this._ov.remove();
    this._ov = v.overlay || null;
    if (this._ov) this.layer.append(this._ov);
    this.toolsEl.style.display = v.tools ? 'flex' : 'none';
    this._applyLayout();
    this.sound.setMode(v.music || 'menu');
    this.backBtn.style.display = name === 'menu' ? 'none' : 'flex';
    this.refreshBar();
    this.commit();
  }

  back() {
    this.sound.play('back');
    if (this.view && this.view.back) this.view.back(); else this.go('menu');
  }

  _buildBar() {
    this.backBtn = h('button', { class: 'fq-round', 'aria-label': t('back'), onclick: () => this.back() }, this.lang === 'en' ? '←' : '→');
    this.pCoins = h('span', {}, '0'); this.pDia = h('span', {}, '0'); this.pStars = h('span', {}, '0');
    this.cPill = h('div', { class: 'fq-pill' }, '🪙', this.pCoins);
    this.dPill = h('div', { class: 'fq-pill' }, '💎', this.pDia);
    this.sPill = h('div', { class: 'fq-pill' }, '⭐', this.pStars);
    this.muteBtn = h('button', { class: 'fq-round', 'aria-label': t('sound'), onclick: () => { this.sound.unlock(); this.setMuted(!this.sound.muted); } }, '🔊');
    this.bar = h('div', { class: 'fq-topbar' }, this.backBtn, h('div', { class: 'sp' }), this.cPill, this.dPill, this.sPill, this.muteBtn);
    this.layer.append(this.bar);
    this.layer.append(h('button', { class: 'fq-soundpill', onclick: () => this.sound.unlock() }, t('tapSound')));
    this.soundPill = this.layer.lastChild;
  }

  refreshBar() {
    const s = this.save;
    const set = (el, pill, v) => { const txt = this.num(v); if (el.textContent !== txt) { el.textContent = txt; pill.classList.remove('pop'); void pill.offsetWidth; pill.classList.add('pop'); } };
    set(this.pCoins, this.cPill, s.coins); set(this.pDia, this.dPill, s.dia); set(this.pStars, this.sPill, s.stars);
    this.muteBtn.textContent = this.sound.muted ? '🔇' : '🔊';
  }

  setLang(l) {
    this.lang = l; this.save.lang = l; I.setLang(l);
    this.root.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
    this.bar.remove(); this.soundPill.remove();
    this._buildBar();
    this.go(this.screen);
  }

  setMuted(m) {
    this.sound.muted = m; if (this.sound.ctx) this.sound.setMuted(m);
    this.save.muted = m; this.refreshBar(); this.commit();
  }

  // ---- save, economy, events ---------------------------------------------------------------------------------------
  commit() {
    clearTimeout(this._ct);
    this._ct = setTimeout(() => this.flush(), 350);
  }
  flush() {
    clearTimeout(this._ct);
    this.save.petsT = Date.now();
    try { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); } catch (_) { /* storage is the app's job */ }
  }

  /** Count something the player did and tell them when a mission or task becomes ready. */
  event(k, n = 1) {
    L.addEvent(this.save, k, n);
    this.afterEvent();
    this.commit();
  }
  afterEvent() {
    const now = L.claimableCount(this.save) + L.levelsReady(this.save);
    if (now > this._ready) { this.toast(t('missionReady')); this.sound.play('ok'); }
    this._ready = now;
  }

  /** Give a reward with a flying text, sound and the pill bump. */
  reward(r, x, y) {
    L.earn(this.save, r);
    const parts = [r.coins ? `+${this.num(r.coins)} 🪙` : '', r.dia ? `+${this.num(r.dia)} 💎` : '', r.stars ? `+${this.num(r.stars)} ⭐` : ''].filter(Boolean);
    if (parts.length) this.floatText(x ?? this.stage.x + this.stage.w / 2, y ?? this.stage.y + this.stage.h * 0.4, parts.join('  '), '#ffd23a');
    this.sound.play(r.dia || r.stars ? 'reward' : 'coin');
    this.refreshBar();
    this.afterEvent();
    this.commit();
  }

  buyDialog(kind, id, o = {}) {
    const p = L.priceOf(kind, id);
    if (!p) return;
    this.confirm({
      img: o.img, icon: o.icon, title: o.title, text: t('buyAsk'), price: this.priceStr(p), yes: `${t('buy')}`,
      onYes: () => {
        const r = L.buy(this.save, kind, id);
        if (r.ok) { this.sound.play('buy'); this.toast(t('bought')); this.burst(this.cw / 2, this.ch * 0.4, ['✨', '💖', '⭐'], 10); this.refreshBar(); this.afterEvent(); this.commit(); if (o.after) o.after(); }
        else { this.sound.play('error'); this.toast(r.reason === 'poor' ? t('poor') : t('oops')); }
      },
    });
  }

  // ---- little UI pieces --------------------------------------------------------------------------------------------
  toast(msg) {
    const e = h('div', { class: 'fq-toast' }, msg);
    this.layer.append(e);
    setTimeout(() => e.remove(), 2500);
  }

  modal(node, o = {}) {
    const dim = h('div', { class: 'fq-dim fq-modal' }, node);
    if (o.dismiss !== false) dim.addEventListener('pointerdown', (e) => { if (e.target === dim) dim.remove(); });
    this.layer.append(dim);
    return dim;
  }
  closeModals() { for (const m of this.layer.querySelectorAll('.fq-modal')) m.remove(); }

  confirm({ img, icon, title, text, price, yes, no, onYes }) {
    let dim;
    const close = () => dim.remove();
    dim = this.modal(h('div', { class: 'fq-card fq-pop' },
      img ? h('img', { class: 'th', src: img, alt: '' }) : icon ? h('div', { class: 'fq-bigicon' }, icon) : null,
      h('div', { class: 'fq-h2' }, title), text ? h('div', { class: 'fq-small' }, text) : null, price ? h('div', { class: 'fq-price' }, price) : null,
      h('div', { class: 'fq-row' },
        h('button', { class: 'fq-btn alt', onclick: () => { this.sound.play('back'); close(); } }, no || t('no')),
        h('button', { class: 'fq-btn', onclick: () => { close(); onYes(); } }, yes || t('yes')))));
  }

  /** Floating emoji particles. */
  burst(x, y, emojis, n = 8, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283; const sp = (o.speed || 120) * (0.4 + Math.random() * 0.9);
      this.fx.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - (o.up ?? 80), g: o.g ?? 160, life: 0, max: o.life || 1.1 + Math.random() * 0.5, txt: emojis[i % emojis.length], size: (o.size || 0.045) * this.ch * (0.7 + Math.random() * 0.6) });
    }
  }
  floatText(x, y, text, color = '#fff') { this.fx.push({ x, y, vx: 0, vy: -this.u * 9, g: 0, life: 0, max: 1.5, txt: text, size: this.u * 5, color, text: true }); }
  confetti() { const e = ['🎉', '✨', '💖', '⭐', '🎊', '👑', '🌸']; for (let k = 0; k < 4; k++) setTimeout(() => this.burst(this.cw * (0.2 + Math.random() * 0.6), this.ch * 0.25, e, 8, { speed: 220, up: 220, g: 380, life: 2 }), k * 250); }

  // ---- thumbnails and drawing helpers ------------------------------------------------------------------------------
  thumb(it) { return this.thumbs.item(it); }
  itemName(it) { return `${this.nameOf(STYLE_NAME[it.style])} · ${this.nameOf(COLOR_NAME[it.colorName])}`; }

  bg(kind) { drawStage(this.c, this.cw, this.ch, kind, this.clock); }

  /** Doll metrics for a rectangle: scale, centre x, y of the head top. */
  dollFit(rect, tall = 228) {
    const s = Math.min((rect.h * 0.93) / tall, (rect.w * 0.47) / 72);
    return { s, cx: rect.x + rect.w / 2, y0: rect.y + rect.h * 0.035 + 12 * s };
  }
  /** Draw the doll with a free rotation angle (radians; the other half of the turn shows it mirrored). */
  paintDoll(c, cx, y0, s, look, t0, o = {}) {
    const ang = o.angle || 0;
    const cs = Math.cos(ang);
    const turn = (2 / Math.PI) * Math.acos(Math.min(1, Math.abs(cs)));
    c.save();
    if (cs < 0) { c.translate(cx, 0); c.scale(-1, 1); c.translate(-cx, 0); }
    drawDoll(c, cx, y0, s, look, t0, { ...o, turn });
    c.restore();
  }
  floorShadow(c, cx, y, s) { c.fillStyle = 'rgba(90,20,80,.18)'; c.beginPath(); c.ellipse(cx, y, s * 46, s * 7, 0, 0, 6.3); c.fill(); }

  // ---- input -------------------------------------------------------------------------------------------------------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    const pos = (e) => { const r = this.root.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    this.cv.addEventListener('pointerdown', (e) => {
      const [x, y] = pos(e);
      this.pointer = { x, y, down: true };
      try { this.cv.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
      if (this.view && this.view.ptr && this.view.ptr.down) this.view.ptr.down(x, y, e);
    });
    this.cv.addEventListener('pointermove', (e) => {
      const [x, y] = pos(e);
      this.pointer.x = x; this.pointer.y = y;
      if (this.view && this.view.ptr && this.view.ptr.move) this.view.ptr.move(x, y, e);
    });
    const up = (e) => {
      const [x, y] = pos(e);
      const was = this.pointer.down;
      this.pointer.down = false;
      if (was && this.view && this.view.ptr && this.view.ptr.up) this.view.ptr.up(x, y, e);
    };
    this.cv.addEventListener('pointerup', up);
    this.cv.addEventListener('pointercancel', up);
    this._onKey = (e) => { if (e.key === 'Escape' && this.screen !== 'menu') { const m = this.layer.querySelector('.fq-modal'); if (m) m.remove(); else this.back(); } };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); this.flush(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this._pill = setInterval(() => { this.soundPill.style.display = this.pointer.x !== 0 && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  // ---- frame -------------------------------------------------------------------------------------------------------
  _loop() {
    const frame = (now) => {
      if (!this.root.isConnected) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.clock += dt;
      this._tick(dt);
      this._draw(dt);
      this._raf = requestAnimationFrame(frame);
    };
    this._raf = requestAnimationFrame(frame);
  }

  _tick(dt) {
    for (const id of Object.keys(this.save.pets)) L.decayPet(this.save.pets[id], dt);
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const p = this.fx[i];
      p.life += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += p.g * dt;
      if (p.life >= p.max) this.fx.splice(i, 1);
    }
    if (this.view && this.view.tick) this.view.tick(dt);
  }

  _draw(dt) {
    const c = this.c;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.cw, this.ch);
    c.textBaseline = 'alphabetic'; c.textAlign = 'center'; c.globalAlpha = 1;
    if (this.view && this.view.draw) this.view.draw(c, dt, this.clock);
    c.textBaseline = 'middle'; c.textAlign = 'center';
    for (const p of this.fx) {
      const k = p.life / p.max;
      c.globalAlpha = k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1;
      c.font = p.text ? `900 ${p.size}px Tajawal,system-ui` : `${p.size}px system-ui`;
      if (p.text) { c.lineWidth = p.size * 0.22; c.strokeStyle = '#7a1a60'; c.strokeText(p.txt, p.x, p.y); c.fillStyle = p.color; }
      c.fillText(p.txt, p.x, p.y);
    }
    c.globalAlpha = 1;
  }

  pause() { this.sound.suspend(); this.flush(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill);
    this.flush();
    if (this.view && this.view.dispose) this.view.dispose();
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    document.removeEventListener('visibilitychange', this._onVis);
    window.removeEventListener('keydown', this._onKey);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
  Game,
};
window.FashionQueen = api;
export default api;
