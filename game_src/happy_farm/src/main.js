// «مزرعتي السعيدة» — Happy Farm. Entry: window.HappyFarm.start(container, config, post).
//   config: { lang, age, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A relaxing 3D farm: drive a combine through wheat, corn and sunflowers, unload at the barn, upgrade in the tool shed.
// No timer, nothing to lose. No network, no links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { LEVELS, UPGRADES, MAX_LEVEL, CROPS, upgradeCost, statOf, normalizeSave, buyUpgrade, finishLevel } from './data.js';
import { Farm } from './sim.js';
import { FarmWorld } from './world.js';
import { makeCombine, makeTrailer, makeTree, makeBarn, makeHayBale, makeSack, mat } from './models.js';
import { Sound } from './audio.js';
import { setLang, getLang, t, num, name } from './i18n.js';
import { CSS, h } from './ui.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};

let _dot;
/** A soft round dot, so chaff and grain look like little specks, not squares. */
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.9)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.beginPath();
  g.arc(16, 16, 16, 0, Math.PI * 2);
  g.fill();
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Particles {
  constructor(scene, n, size, color) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), alphaTest: 0.2, sizeAttenuation: true, transparent: true, depthWrite: false }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -99;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  update(dt, gravity = 9) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] -= gravity * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0 || this.pos[k * 3 + 1] < 0) { this.life[k] = 0; this.pos[k * 3 + 1] = -99; }
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('hf-style')) document.head.append(h('style', { id: 'hf-style', text: CSS }));
    this.root = h('div', { class: 'hf-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'hf-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'hf-btn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'hf-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'hf-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.5, 300);
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
    this._fonts().then(() => {
      this.loading.remove();
      this._buildShowcase();
      this.showMap();
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
    this.root.classList.toggle('hf-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 58 : 42;
    this.camera.updateProjectionMatrix();
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'hf-joy' }, h('i'));
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
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    // the visible "tap for sound" button, only when a tap did not open the sound
    this.soundPill = h('button', { class: 'hf-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
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

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _coins() {
    this.coinEl = h('span', {}, num(this.save.coins));
    return h('div', { class: 'hf-pill' }, h('span', { class: 'hf-coin' }), this.coinEl);
  }
  _mute(style) {
    const b = h('button', { class: 'hf-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
    this.toastEl = h('div', { class: 'hf-toast' });
    return this.toastEl;
  }
  toast(text, secs = 1.6) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  // ---- showcase (behind the map and the shed) ---------------------------------------------------------------------

  _buildShowcase() {
    const s = new THREE.Scene();
    s.background = new THREE.Color(0x9fdcff);
    s.fog = new THREE.Fog(0xbfe8ff, 30, 90);
    s.add(new THREE.HemisphereLight(0xfff4d6, 0x5f8f3a, 1.8));
    const sun = new THREE.DirectionalLight(0xfff0d0, 1.4);
    sun.position.set(-8, 20, 10);
    s.add(sun);
    const grass = new THREE.Mesh(new THREE.CircleGeometry(80, 40), mat(0x6cc04a));
    grass.rotation.x = -Math.PI / 2;
    s.add(grass);
    const field = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), mat(0xf2c14e, 0x6a4a00, 0.25));
    field.rotation.x = -Math.PI / 2;
    field.position.set(-6, 0.3, -9);
    s.add(field);
    const barn = makeBarn();
    barn.position.set(9, 0, -8);
    barn.rotation.y = -0.5;
    s.add(barn);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const tr = makeTree(0.9 + (i % 3) * 0.3);
      tr.position.set(Math.cos(a) * (20 + (i % 3) * 4), 0, Math.sin(a) * (16 + (i % 4) * 3) - 6);
      s.add(tr);
    }
    const c = makeCombine(2.2);
    this.showCombine = new THREE.Group();
    this.showCombine.add(c.root);
    const tr = makeTrailer();
    tr.root.position.x = -3.4;
    tr.setFill(0.7);
    this.showCombine.add(tr.root);
    this.showReel = c.reel;
    s.add(this.showCombine);
    this.showcase = s;
  }

  // ---- map --------------------------------------------------------------------------------------------------------

  showMap() {
    this._endFarm();
    this.mode = 'menu';
    this.sound.setMode('menu');
    this._clear();
    const nodes = LEVELS.map((lv, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[lv.id] ?? 0;
      return h('button', {
        class: `hf-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('farm')} ${lv.id} ${name(lv)}`,
        title: name(lv),
        onclick: () => {
          if (locked) { this.sound.play('no'); this.toast(t('locked')); return; }
          this.startFarm(i);
        },
      }, locked ? '🔒' : num(lv.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    this.layer.append(
      h('button', { class: 'hf-round', style: 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('exit'), onclick: () => this.post({ type: 'exit' }) }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'hf-top' }, this._coins()),
      h('div', { class: 'hf-dim', style: 'background:none' },
        h('div', { class: 'hf-panel', style: 'background:rgba(255,247,230,.9)' },
          h('div', { class: 'hf-logo' }, '🚜 ', t('title')),
          h('div', { style: 'font-weight:900;font-size:calc(var(--u)*4)' }, t('pick')),
          h('div', { class: 'hf-map' }, nodes),
          h('button', { class: 'hf-btn wood', style: 'margin-top:calc(var(--u)*3)', onclick: () => this.showShed() }, '🏚️ ', t('shed')))),
      this._mute('bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'),
      this._toastEl(),
    );
  }

  // ---- tool shed ----------------------------------------------------------------------------------------------------

  showShed() {
    this.mode = 'shed';
    this.sound.setMode('menu');
    this._clear();
    const fmt = (u, v) => (u.id === 'barn' ? `+${num(v)}%` : u.id === 'trailer' ? num(v) : `${num(Math.round(v * 100) / 100)} ${getLang() === 'en' ? u.unit : u.unit === 'm' ? 'م' : 'م/ث'}`);
    const cards = UPGRADES.map((u) => {
      const lvl = this.save.up[u.id];
      const maxed = lvl >= MAX_LEVEL;
      const cost = upgradeCost(u.id, lvl);
      return h('div', { class: 'hf-card' },
        h('div', { class: 'ic' }, u.icon),
        h('div', { class: 'nm' }, name(u)),
        h('div', { class: 'sb' }, u.sub[getLang() === 'en' ? 1 : 0]),
        h('div', { class: 'pips' }, Array.from({ length: MAX_LEVEL }, (_, i) => h('span', { class: `pip${i < lvl ? ' on' : ''}` }))),
        h('div', { class: 'st' }, maxed ? fmt(u, statOf(u.id, lvl)) : `${fmt(u, statOf(u.id, lvl))} ← ${fmt(u, statOf(u.id, lvl + 1))}`),
        h('button', {
          class: 'hf-btn',
          disabled: maxed || this.save.coins < cost,
          onclick: () => {
            const r = buyUpgrade(this.save, u.id);
            if (r === 'bought') { this.sound.play('buy'); this._saveNow(); this.showShed(); this.toast(t('bought'), 1); } else { this.sound.play('no'); this.toast(t('needMore'), 2); }
          },
        }, maxed ? t('max') : h('span', { style: 'display:inline-flex;align-items:center;gap:calc(var(--u)*1)' }, h('span', { class: 'hf-coin' }), num(cost))));
    });
    this.layer.append(
      h('button', { class: 'hf-round', style: 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('back'), onclick: () => this.showMap() }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'hf-dim', style: 'background:none' },
        h('div', { class: 'hf-panel' },
          h('div', { class: 'hf-title' }, '🏚️ ', t('shed')),
          this._coins(),
          h('div', { class: 'hf-grid' }, cards))),
      this._toastEl(),
    );
  }

  // ---- a farm -------------------------------------------------------------------------------------------------------

  startFarm(i) {
    this._endFarm();
    this.levelIndex = i;
    const lv = LEVELS[i];
    const farm = new Farm(lv, this.save.up);
    const scene = new THREE.Scene();
    const world = new FarmWorld(scene, farm, this.quality);
    const comb = makeCombine(farm.cutter);
    scene.add(comb.root);
    const trailer = makeTrailer();
    scene.add(trailer.root);
    const chaff = new Particles(scene, 260, 0.22, 0xf6d36a);
    const grain = new Particles(scene, 200, 0.2, 0xffc928);
    const smoke = new Particles(scene, 60, 0.6, 0xe6e6e6);
    this.f = { farm, scene, world, comb, trailer, chaff, grain, smoke, tr: { x: farm.t.x - 3, z: farm.t.z, heading: farm.t.heading }, cam: null, endT: -1, coinsAtStart: this.save.coins, cutFlash: 0 };
    this.mode = 'play';
    this.paused = false;
    this.sound.setMode('farm');
    this._hud();
    if (i === 0) setTimeout(() => this.mode === 'play' && this.toast(t('drag'), 3), 600);
    else if (farm.animals.length) setTimeout(() => this.mode === 'play' && this.toast(t('herd'), 3), 600);
  }

  _endFarm() {
    if (!this.f) return;
    this.f.world.dispose();
    this.f.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.f = null;
    this.sound.engine(false);
  }

  _hud() {
    this._clear();
    const f = this.f;
    this.hud = { fill: h('i', { style: 'width:0%' }), pct: h('b', {}, num(0) + '%'), animals: h('span', {}), label: h('div', { class: 'hf-label' }, '') };
    this.layer.append(
      h('button', { class: 'hf-round', style: 'top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'hf-top' },
        this._coins(),
        h('div', { class: 'hf-sign' }, `${t('farm')} ${num(f.farm.level.id)}`),
        h('div', { class: 'hf-bar' }, this.hud.fill, h('s', {}, '🌾'), this.hud.pct),
        f.farm.animals.length ? h('div', { class: 'hf-pill', style: 'font-size:calc(var(--u)*3.6)' }, this.hud.animals) : null),
      this.hud.label,
      this._mute('bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)'),
      this._toastEl(),
    );
    this._hc = {};
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.x = this.input.z = 0;
    this.joy.style.display = 'none';
    this.sound.suspend();
    const dim = h('div', { class: 'hf-dim' }, h('div', { class: 'hf-panel' },
      h('div', { class: 'hf-title' }, t('paused')),
      h('button', { class: 'hf-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'hf-btn wood', onclick: () => { this.sound.resume(); this.startFarm(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'hf-btn wood', onclick: () => { this.sound.resume(); this.showMap(); } }, t('map'))));
    this.layer.append(dim);
  }

  _floatCoin(n) {
    const tag = h('div', { class: 'hf-float', style: `left:${this.cw / 2 - 20}px;top:${this.ch * 0.42}px` }, `+${num(n)}`);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 1000);
  }

  _farmFrame(dt, time) {
    const f = this.f;
    const farm = f.farm;
    const input = this._readInput();
    farm.step(dt, input);
    let cutNow = 0;
    for (const e of farm.events) {
      switch (e.type) {
        case 'cut': {
          cutNow += e.cells.length;
          f.world.cut(e.cells);
          // chaff bursts from the cutter
          const box = farm.cutterBox();
          for (let k = 0; k < Math.min(6, e.cells.length * 2); k++) {
            const side = (Math.random() - 0.5) * farm.cutter;
            f.chaff.emit(box.cx - Math.sin(box.heading) * side, 0.6 + Math.random() * 0.4, box.cz + Math.cos(box.heading) * side, (Math.random() - 0.5) * 3, 2 + Math.random() * 3, (Math.random() - 0.5) * 3, 0.9);
          }
          f.cutFlash = 0.3;
          break;
        }
        case 'full': this.sound.play('full'); this.toast(t('full'), 2.4); break;
        case 'unloadStart': this.sound.play('pour'); break;
        case 'coins':
          this.save.coins += e.n;
          this.sound.play('coin', e.total);
          if (Math.random() < 0.35) this._floatCoin(e.n);
          break;
        case 'unloaded': this.toast(t('emptied'), 1.4); this._saveNow(); this._stack(); break;
        case 'rock': this.sound.play('rock'); this.toast(t('rock'), 1.2); break;
        case 'penned':
          this.sound.play(e.kind === 'cow' ? 'cow' : e.kind === 'chicken' ? 'chicken' : 'sheep');
          setTimeout(() => this.sound.play('penned'), 300);
          this.toast(e.n === e.of ? t('allPenned') : t('penned'), 1.6);
          break;
        case 'done':
          this.sound.play('done');
          this.toast(t('done'), 2);
          f.endT = 1.6;
          break;
        default:
      }
    }
    this.sound.cutting(cutNow);
    this.sound.engine(true);
    this.sound.engineUpdate(Math.abs(farm.t.speed), f.cutFlash > 0);
    // an animal says hello now and then when the tractor is near
    for (const a of farm.animals) {
      if (!a.penned && Math.hypot(a.x - farm.t.x, a.z - farm.t.z) < 5 && Math.random() < dt * 0.25) this.sound.play(a.kind === 'cow' ? 'cow' : a.kind === 'chicken' ? 'chicken' : 'sheep');
    }

    // tractor, trailer (pulled behind with a little lag), cutter reel, grain stream
    const tt = farm.t;
    f.comb.root.position.set(tt.x, Math.sin(time * 18) * 0.02 * Math.min(1, Math.abs(tt.speed)), tt.z);
    f.comb.root.rotation.y = -tt.heading;
    f.comb.reel.rotation.z -= dt * (2 + Math.abs(tt.speed) * 2);
    const hx = tt.x - Math.cos(tt.heading) * 1.6;
    const hz = tt.z - Math.sin(tt.heading) * 1.6;
    const want = Math.atan2(hz - f.tr.z, hx - f.tr.x);
    f.tr.heading = want;
    f.tr.x = hx - Math.cos(want) * 2.4;
    f.tr.z = hz - Math.sin(want) * 2.4;
    f.trailer.root.position.set(f.tr.x, 0, f.tr.z);
    f.trailer.root.rotation.y = -f.tr.heading;
    f.trailer.setFill(farm.load / farm.capacity);
    f.cutFlash = Math.max(0, f.cutFlash - dt);
    if (f.cutFlash > 0) {
      // grain arcs from the spout into the trailer
      for (let k = 0; k < 3; k++) {
        const sx = tt.x - Math.cos(tt.heading) * 0.9 - Math.sin(tt.heading) * 0.6;
        const sz = tt.z - Math.sin(tt.heading) * 0.9 + Math.cos(tt.heading) * 0.6;
        const dx = f.tr.x - sx;
        const dz = f.tr.z - sz;
        f.grain.emit(sx, 2.4, sz, dx * 1.6 + (Math.random() - 0.5) * 0.4, 1.5, dz * 1.6 + (Math.random() - 0.5) * 0.4, 0.55);
      }
    }
    if (farm.unloading) {
      for (let k = 0; k < 4; k++) f.grain.emit(f.tr.x + (Math.random() - 0.5), 1.4, f.tr.z + (Math.random() - 0.5), (farm.pad.x - f.tr.x) * 1.2, 1, (farm.pad.z - f.tr.z) * 1.2, 0.6);
    }
    if (Math.random() < dt * 6) f.smoke.emit(tt.x - Math.cos(tt.heading) * 0.9 + Math.sin(tt.heading) * 0.55, 2.9, tt.z - Math.sin(tt.heading) * 0.9 - Math.cos(tt.heading) * 0.55, 0, 1.2, 0, 1.2);
    f.chaff.update(dt, 7);
    f.grain.update(dt, 9);
    f.smoke.update(dt, -0.6);
    f.world.update(dt, time);

    // camera: above and a little behind, smoothly following
    const portrait = this.cw < this.ch;
    const camX = tt.x;
    const camZ = tt.z + (portrait ? 13 : 11);
    const camY = portrait ? 22 : 17;
    if (!f.cam) f.cam = new THREE.Vector3(camX, camY, camZ);
    f.cam.lerp(new THREE.Vector3(camX, camY, camZ), Math.min(1, dt * 3));
    this.camera.position.copy(f.cam);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(f.cam.x, 0, f.cam.z - (portrait ? 13 : 11) - 1);

    // HUD
    const hc = this._hc;
    const pct = Math.min(100, Math.round(farm.progress * 100 / 0.95));
    if (hc.pct !== pct) {
      hc.pct = pct;
      this.hud.fill.style.width = `${pct}%`;
      this.hud.pct.textContent = num(pct) + '%';
    }
    if (this.coinEl && hc.coins !== this.save.coins) { hc.coins = this.save.coins; this.coinEl.textContent = num(this.save.coins); }
    if (farm.animals.length && hc.pen !== farm.penned) { hc.pen = farm.penned; this.hud.animals.textContent = `🐑 ${num(farm.penned)}/${num(farm.animals.length)}`; }
    // the load label above the trailer
    const v = new THREE.Vector3(f.tr.x, 2.6, f.tr.z).project(this.camera);
    this.hud.label.style.left = `${(v.x * 0.5 + 0.5) * this.cw}px`;
    this.hud.label.style.top = `${(-v.y * 0.5 + 0.5) * this.ch}px`;
    const lbl = `${num(Math.floor(farm.load))}/${num(farm.capacity)}`;
    if (hc.lbl !== lbl) { hc.lbl = lbl; this.hud.label.textContent = lbl; }
    this.hud.label.classList.toggle('full', farm.full);

    if (f.endT >= 0) {
      f.endT -= dt;
      if (f.endT < 0) this.showResults();
    }
  }

  /** A hay bale or a sack pops onto the stack by the barn after each unload. */
  _stack() {
    const f = this.f;
    const k = f.world.stacks.children.length;
    if (k >= 18) return;
    const o = k % 2 ? makeSack(k % 4 === 1 ? 0xfaf6ea : 0xf7d34a) : makeHayBale();
    o.position.set((k % 3) * 1.3, Math.floor(k / 6) * 1.0, Math.floor((k % 6) / 3) * 1.3);
    f.world.stacks.add(o);
  }

  showResults() {
    const f = this.f;
    const r = f.farm.result;
    const i = this.levelIndex;
    const sold = f.farm.sold;
    for (const k of Object.keys(this.save.store)) this.save.store[k] += Math.round(sold[k]);
    const res = finishLevel(this.save, i, r.stars);
    this._saveNow();
    this.mode = 'results';
    this.sound.engine(false);
    this.sound.setMode('menu');
    const earned = this.save.coins - f.coinsAtStart;
    const hasNext = i + 1 < LEVELS.length;
    const made = [['flour', '🥖'], ['hay', '🌾'], ['corn', '🌽'], ['seeds', '🌻']].filter(([k]) => sold[k] >= 1);
    const dim = h('div', { class: 'hf-dim' }, h('div', { class: 'hf-panel' },
      h('div', { class: 'hf-title' }, '🎉 ', t('done')),
      h('div', { class: 'hf-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))),
      h('div', { class: 'hf-pill', style: 'font-size:calc(var(--u)*5.4)' }, h('span', { class: 'hf-coin' }), '+', num(earned)),
      made.length ? h('div', { style: 'font-weight:900' }, t('made')) : null,
      made.length ? h('div', { class: 'hf-made' }, made.map(([k, ic]) => h('div', {}, h('b', {}, ic, ' ', num(Math.round(sold[k] / 10))), h('span', {}, t(k))))) : null,
      r.animals ? h('div', { style: 'font-weight:900' }, `🐑 ${t('animals')}: ${num(r.penned)}/${num(r.animals)}`) : null,
      res.opened ? h('div', { style: 'font-weight:900;color:#33a333' }, '🎉 ', t('newFarm')) : null,
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'hf-btn', onclick: () => this.startFarm(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: 'hf-btn wood', onclick: () => this.showShed() }, '🏚️ ', t('shed')),
        h('button', { class: 'hf-btn wood', onclick: () => this.showMap() }, t('map')))));
    this.layer.querySelectorAll('.hf-label').forEach((e) => e.remove());
    this.layer.append(dim);
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if ((this.mode === 'play' || this.mode === 'results') && this.f) {
      if (this.mode === 'play' && !this.paused) this._farmFrame(dt, time);
      else this.f.world.update(dt, time);
      if (this.f) this.renderer.render(this.f.scene, this.camera);
    } else if (this.showcase) {
      this.showCombine.rotation.y = time * 0.25;
      this.showReel.rotation.z -= dt * 3;
      const portrait = this.cw < this.ch;
      this.camera.position.set(Math.sin(time * 0.05) * 3, portrait ? 13 : 9, portrait ? 20 : 14);
      this.camera.lookAt(0, 1.5, 0);
      this.renderer.render(this.showcase, this.camera);
    }
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
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this._endFarm();
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
window.HappyFarm = api;
export default api;
void CROPS;
