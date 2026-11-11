// «مخبز اليقطين» — Pumpkin Pie Maker. Entry: window.PumpkinPie.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A cozy 3D bakery: pick pumpkins, bake them into pies, serve the animal customers, collect coins and build the bakery
// bigger (new patches, a chute, a second oven, helpers, tables, lights). No timer, nothing to lose. No network, no
// links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { PADS, OVENS, COUNTER_ZONE, CASH_ZONE, CHUTE, normalizeSave } from './data.js';
import { Bakery } from './sim.js';
import { BakeryWorld } from './world.js';
import { mat } from './models.js';
import { Sound } from './audio.js';
import { setLang, setChef, getLang, t, num, name } from './i18n.js';
import { CSS, CSS2, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    if (!this.save.chef) this.save.chef = config.gender === 'boy' ? 'boy' : 'girl';
    setChef(this.save.chef);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('pp-style')) document.head.append(h('style', { id: 'pp-style', text: CSS + CSS2 }));
    this.root = h('div', { class: 'pp-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'pp-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'pp-btn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'pp-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'pp-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.5, 200);
    this.input = { x: 0, z: 0, pointer: null, ox: 0, oy: 0, keys: new Set() };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this.bakery = new Bakery(this.save, (Date.now() & 0xffff) + 1);
    this.scene = new THREE.Scene();
    this.world = new BakeryWorld(this.scene, this.bakery, this.quality, this.save.chef);
    this.arrow = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.8, 4), mat(0xffd23a, 0xff9a00, 0.6));
    this.arrow.rotation.x = Math.PI;
    this.arrow.visible = false;
    this.scene.add(this.arrow);
    this._fonts().then(() => {
      this.loading.remove();
      this.showMenu();
      this.renderer.setAnimationLoop(() => this._frame());
    });
  }

  async _fonts() {
    try {
      const faces = [
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }),
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' }),
      ];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _unit() {
    const r = this.el.getBoundingClientRect();
    this.cw = r.width || window.innerWidth;
    this.ch = r.height || window.innerHeight;
    this.root.style.setProperty('--u', `${Math.min(this.cw, this.ch) / 100}px`);
    this.root.classList.toggle('pp-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 56 : 42;
    this.camera.updateProjectionMatrix();
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'pp-joy' }, h('i'));
    root.append(this.joy);
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused || this.input.pointer !== null) return;
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX;
      this.input.oy = e.clientY;
      const r = root.getBoundingClientRect();
      this.joy.style.left = `${e.clientX - r.left}px`;
      this.joy.style.top = `${e.clientY - r.top}px`;
      this.joy.style.display = 'block';
      this.joy.firstChild.style.transform = 'translate(0,0)';
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      const unit = Math.min(this.cw, this.ch) / 100;
      const max = unit * 12;
      let dx = e.clientX - this.input.ox;
      let dy = e.clientY - this.input.oy;
      const l = Math.hypot(dx, dy);
      if (l > max) { dx = (dx / l) * max; dy = (dy / l) * max; }
      this.input.x = dx / max;
      this.input.z = dy / max;
      this.joy.firstChild.style.transform = `translate(${dx}px,${dy}px)`;
    });
    const up = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      this.input.x = 0;
      this.input.z = 0;
      this.joy.style.display = 'none';
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this._saveNow(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'pp-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _readInput() {
    const k = this.input.keys;
    let x = this.input.x;
    let z = this.input.z;
    if (k.has('arrowleft') || k.has('a')) x = -1;
    if (k.has('arrowright') || k.has('d')) x = 1;
    if (k.has('arrowup') || k.has('w')) z = -1;
    if (k.has('arrowdown') || k.has('s')) z = 1;
    return { x, z };
  }

  // ---- shared bits ----------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.padLbls = null; }
  _saveNow() { this._dirty = false; this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _coins() {
    this.coinEl = h('span', {}, num(this.save.coins));
    return h('div', { class: 'pp-pill' }, h('span', { class: 'pp-coin' }), this.coinEl);
  }
  _mute(style) {
    const b = h('button', { class: 'pp-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sound.unlock();
      this.sound.setMuted(!this.sound.muted);
      this.save.muted = this.sound.muted;
      this._saveNow();
      b.textContent = this.sound.muted ? '🔇' : '🔊';
    });
    return b;
  }
  _toastEl() {
    this.toastEl = h('div', { class: 'pp-toast' });
    return this.toastEl;
  }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }
  _topLeft() { return 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)'; }
  _bottomEnd() { return 'bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'; }

  // ---- menu ---------------------------------------------------------------------------------------------------------

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    const chefBtn = (kind, face) => h('button', {
      class: `pp-chef${this.save.chef === kind ? ' on' : ''}`,
      onclick: () => { this.save.chef = kind; setChef(kind); this.world.setChef(kind); this._saveNow(); this.showMenu(); },
    }, h('span', { class: 'f' }, face), t(kind));
    this.layer.append(
      h('button', { class: 'pp-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'pp-top' }, this._coins()),
      h('div', { class: 'pp-dim', style: 'background:none' },
        h('div', { class: 'pp-panel', style: 'background:rgba(255,247,230,.92)' },
          h('div', { class: 'pp-logo' }, '🥧 ', t('title'), ' 🎃'),
          h('div', { style: 'font-weight:900;font-size:calc(var(--u)*4)' }, t('who')),
          h('div', { class: 'pp-chefs' }, chefBtn('girl', '👩‍🍳'), chefBtn('boy', '👨‍🍳')),
          this.save.served ? h('div', { class: 'pp-stat' }, h('span', {}, '😊 ', num(this.save.served), ' ', t('served')), h('span', {}, '🥧 ', num(this.save.pies), ' ', t('pies'))) : null,
          h('button', { class: 'pp-btn pp-big', onclick: () => this.play() }, '▶ ', t('play')))),
      this._mute(this._bottomEnd()),
      this._toastEl(),
    );
  }

  play() {
    this.mode = 'play';
    this.paused = false;
    this.sound.setMode('play');
    this._clear();
    this.hud = { hint: h('div', { class: 'pp-hint', style: 'opacity:0' }), bubble: h('div', { class: 'pp-bubble', style: 'display:none' }), max: h('div', { class: 'pp-bubble', style: 'display:none' }, 'MAX') };
    this.padLbls = new Map();
    for (const p of PADS) {
      const lbl = h('div', { class: 'pp-padlbl', style: 'display:none' }, h('span', { class: 'ic' }, p.icon), h('span', { class: 'c' }, h('span', { class: 'pp-coin' }), h('b', {}, '')), h('span', { class: 'n' }, name(p)));
      this.padLbls.set(p.id, lbl);
      this.layer.append(lbl);
    }
    this.layer.append(
      h('button', { class: 'pp-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'pp-top' }, this._coins()),
      this.hud.bubble,
      this.hud.max,
      this.hud.hint,
      this._mute(this._bottomEnd()),
      this._toastEl(),
    );
    this._hc = {};
    this.playT = 0;
    if (!this.save.served) setTimeout(() => this.mode === 'play' && this.toast(t('drag'), 3), 500);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.x = this.input.z = 0;
    this.joy.style.display = 'none';
    this._saveNow();
    this.sound.suspend();
    const dim = h('div', { class: 'pp-dim' }, h('div', { class: 'pp-panel' },
      h('div', { class: 'pp-title' }, t('paused')),
      h('button', { class: 'pp-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'pp-btn wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _complete() {
    this.sound.play('complete');
    this.world.sparkles.burst(this.bakery.p.x, 2, this.bakery.p.z, 80);
    const dim = h('div', { class: 'pp-dim' }, h('div', { class: 'pp-panel' },
      h('div', { class: 'pp-title' }, t('done')),
      h('div', { class: 'pp-stars' }, '⭐⭐⭐'),
      h('div', { class: 'pp-stat' }, h('span', {}, '😊 ', num(this.save.served), ' ', t('served')), h('span', {}, '🥧 ', num(this.save.pies), ' ', t('pies'))),
      h('button', { class: 'pp-btn', onclick: () => { dim.remove(); this.paused = false; } }, '▶ ', t('keep'))));
    this.paused = true;
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const b = this.bakery;
    const events = b.step(dt, this._readInput());
    this.playT += dt;
    let coinStreak = 0;
    for (const e of events) {
      const chef = e.who === 'chef' || e.who === undefined;
      switch (e.type) {
        case 'pick': if (chef) this.sound.play('pick', e.n); break;
        case 'drop': if (chef) this.sound.play('drop'); break;
        case 'chute': if (chef) this.sound.play('chute'); break;
        case 'baked':
          if (!this._bakedT || time - this._bakedT > 0.6) { this.sound.play('baked'); this._bakedT = time; }
          break;
        case 'takePie': if (chef) this.sound.play('takePie', e.n); break;
        case 'serve': if (chef) this.sound.play('serve'); break;
        case 'buy': this.sound.play('buy'); break;
        case 'sold': {
          this.sound.play('sold');
          this._float(`+${num(e.coins)}`, CASH_ZONE.x, 1.4, CASH_ZONE.z);
          this.world.sparkles.burst(CASH_ZONE.x, 1, CASH_ZONE.z, 8, [0xffd23a, 0xffe58a]);
          break;
        }
        case 'collect':
          this.sound.play('coin', (this._coinRun = (this._coinRun ?? 0) + 1));
          coinStreak++;
          this._dirty = true;
          break;
        case 'pay': this.sound.play('pay', e.paid / e.cost); this._dirty = true; break;
        case 'unlock': {
          const pad = PADS.find((p) => p.id === e.pad);
          this.sound.play('unlock');
          this.world.syncUnlocked();
          this.world.sparkles.burst(pad.x, 1, pad.z, 40);
          this.toast(`✨ ${t('opened')}: ${name(pad)} ${pad.icon}`, 2.4);
          this._saveNow();
          break;
        }
        case 'complete': setTimeout(() => this._complete(), 1200); break;
        case 'arrive': if (Math.random() < 0.5) this.sound.play('arrive'); break;
        case 'full': this.sound.play('full'); break;
        default:
      }
    }
    if (!coinStreak && !events.some((e) => e.type === 'collect')) this._coinRun = 0;
    if (this._dirty && (!this._lastSave || time - this._lastSave > 8)) { this._lastSave = time; this._saveNow(); }
    this.world.update(dt, time);

    // camera: above and behind the chef, smoothly following
    const portrait = this.cw < this.ch;
    const px = Math.max(-7, Math.min(7, b.p.x));
    const pz = Math.max(-3.2, Math.min(8.5, b.p.z));
    const want = new THREE.Vector3(px, portrait ? 15 : 10.5, pz + (portrait ? 10.5 : 8.2));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 3));
    this.camera.position.copy(this.cam);
    this.camera.lookAt(this.cam.x, 0, this.cam.z - (portrait ? 10.5 : 8.2) - 1.4);

    this._guide(time);
    this._labels();
  }

  /** The bouncing arrow and the hint: where to go next (for the youngest, and while learning). */
  _guide(time) {
    const b = this.bakery;
    const p = b.p;
    const learning = this.age <= 4 || b.save.unlocked.length < 2;
    let target = null;
    let hint = null;
    const pad = b.pads.find((pd) => this.save.coins >= Math.min(8, pd.cost - (this.save.paid[pd.id] ?? 0)));
    const shelf = b.ovens.filter((o) => b.ovenOpen(o) && o.out > 0).sort((x, y) => y.out - x.out)[0];
    if (p.kind === 'pie') { target = COUNTER_ZONE; hint = 'hCounter'; } else if (p.kind === 'pumpkin' && (p.stack >= b.capacity || !b.plots.some((pl) => pl.ripe && b.fieldOpen(pl.field)) || this._unloading)) {
      this._unloading = true;
      target = b.has('chute') && dist(p, CHUTE) < dist(p, OVENS[0].input) ? CHUTE : OVENS[0].input;
      hint = 'hOven';
    } else if (pad && p.kind === null) { target = pad; hint = 'hPad'; } else if (b.cash >= 3 && p.kind === null) { target = CASH_ZONE; hint = 'hCash'; } else if (shelf && p.kind === null && !b.has('waiter')) { target = shelf.shelf; hint = 'hShelf'; } else {
      let best = null;
      for (const pl of b.plots) if (pl.ripe && b.fieldOpen(pl.field) && (!best || dist(pl, p) < dist(best, p))) best = pl;
      target = best;
      hint = 'hPick';
    }
    if (p.kind !== 'pumpkin') this._unloading = false;
    const show = learning && target && dist(target, p) > 1.2;
    this.arrow.visible = !!show;
    if (show) {
      this.arrow.position.set(target.x, 2.2 + Math.abs(Math.sin(time * 4)) * 0.5, target.z);
      this.arrow.rotation.y = time * 2;
    }
    const hc = this._hc;
    const text = learning && this.playT < 240 && hint ? t(hint) : '';
    if (hc.hint !== text) {
      hc.hint = text;
      this.hud.hint.style.opacity = text ? '1' : '0';
      if (text) this.hud.hint.textContent = text;
    }
  }

  _screen(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return [(v.x * 0.5 + 0.5) * this.cw, (-v.y * 0.5 + 0.5) * this.ch, v.z < 1];
  }

  _labels() {
    const b = this.bakery;
    const hc = this._hc;
    if (this.coinEl && hc.coins !== this.save.coins) { hc.coins = this.save.coins; this.coinEl.textContent = num(this.save.coins); }
    const shown = new Set(b.pads.map((p) => p.id));
    for (const [id, lbl] of this.padLbls) {
      if (!shown.has(id)) { lbl.style.display = 'none'; continue; }
      const pad = PADS.find((p) => p.id === id);
      const [sx, sy, ok] = this._screen(pad.x, 0.2, pad.z);
      lbl.style.display = ok ? 'flex' : 'none';
      lbl.style.left = `${sx}px`;
      lbl.style.top = `${sy}px`;
      const left = pad.cost - (this.save.paid[id] ?? 0);
      if (lbl.dataset.left !== String(left)) { lbl.dataset.left = String(left); lbl.querySelector('b').textContent = num(left); }
    }
    // what the first customer wants
    const front = b.customers.find((c) => c.state === 'front');
    if (front) {
      const [sx, sy] = this._screen(front.x, 2.2, front.z);
      this.hud.bubble.style.display = 'block';
      this.hud.bubble.style.left = `${sx}px`;
      this.hud.bubble.style.top = `${sy}px`;
      const txt = `🥧 ${num(front.got)}/${num(front.want)}`;
      if (hc.bub !== txt) { hc.bub = txt; this.hud.bubble.textContent = txt; }
    } else this.hud.bubble.style.display = 'none';
    // MAX over a full basket
    const full = b.p.stack >= b.capacity;
    this.hud.max.style.display = full ? 'block' : 'none';
    if (full) {
      const [sx, sy] = this._screen(b.p.x, 1.2 + b.capacity * (b.p.kind === 'pie' ? 0.15 : 0.36) + 0.6, b.p.z);
      this.hud.max.style.left = `${sx}px`;
      this.hud.max.style.top = `${sy}px`;
    }
  }

  _float(text, x, y, z) {
    const [sx, sy] = this._screen(x, y, z);
    const tag = h('div', { class: 'pp-float', style: `left:${sx - 20}px;top:${sy}px` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 1000);
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else {
      this.world.update(dt, time);
      if (this.mode === 'menu') {
        this.arrow.visible = false;
        const portrait = this.cw < this.ch;
        const a = time * 0.06;
        const r = portrait ? 26 : 20;
        this.camera.position.set(Math.sin(a) * r * 0.5, portrait ? 20 : 14, 6 + Math.cos(a) * r * 0.6);
        this.camera.lookAt(0, 0, -1);
        this.cam = null;
      }
    }
    this.renderer.render(this.scene, this.camera);
  }

  _adapt(dt) {
    this.frames.push(dt);
    if (this.frames.length < 90) return;
    const avg = this.frames.reduce((a, b) => a + b, 0) / this.frames.length;
    this.frames.length = 0;
    if (avg > 1 / 40 && this.pr > 0.75) {
      this.pr = Math.max(0.75, this.pr - 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    } else if (avg < 1 / 57 && this.pr < this.maxPR && ++this.goodWin >= 4) {
      this.pr = Math.min(this.maxPR, this.pr + 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWin = 0;
    }
  }

  dispose() {
    clearInterval(this._pill);
    if (this.save) this._saveNow();
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.world.dispose();
      this.renderer.dispose();
      try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ }
    }
    if (this.ro) this.ro.disconnect();
    window.removeEventListener('keydown', this._onKey);
    window.removeEventListener('keyup', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.root.remove();
  }
}

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.PumpkinPie = api;
export default api;
