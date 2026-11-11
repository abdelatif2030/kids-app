// «أسماك الأعماق» — Deep Sea Fish. Entry: window.DeepSea.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A small fish in a 3D sea: drag to swim, tap the red button to dash. Eat creatures smaller than you to grow, keep
// away from bigger predators (a red "!" warns before they lunge), finish each timed challenge: the Sunlit Reef, the
// Kelp Forest (hunt squid) and the Deep Trench (grow big enough to devour the shark). No network, no links, no ads.
import * as THREE from 'three';
import { Sea, LEVELS, SPECIES, EAT, DANGER, normalizeSave } from './sim.js';
import { mat, basic, makeFish, sandTexture, causticTexture, makeRock, makeArch, makeCoral, makeKelp } from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const U = (cm) => cm / 10;
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.5)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Glow {
  constructor(scene, n, size, color, normal = false, opacity = 1) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false, opacity, blending: normal ? THREE.NormalBlending : THREE.AdditiveBlending }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -500;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 14, power = 3, life = 0.6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.emit(x, y, z, Math.cos(a) * power * Math.random(), Math.random() * power, Math.sin(a) * power * Math.random(), life * (0.6 + Math.random() * 0.6));
    }
  }
  update(dt, rise = 0) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] += rise * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -500;
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

const BIOME = {
  reef: { bg: 0x1a7ab8, fog: 0x2a8ac0, near: 8, far: 70, sand: ['#d8d0b0', '#c8bf98'], hemi: [0xc8f0ff, 0x3a5a6a, 1.6], sun: 1.2, rock: 0x7a8a8a },
  kelp: { bg: 0x1a6a7a, fog: 0x1f6a72, near: 8, far: 60, sand: ['#b8b090', '#a8a080'], hemi: [0xb8f0e0, 0x2a4a3a, 1.4], sun: 0.9, rock: 0x5a6a5a },
  trench: { bg: 0x061a30, fog: 0x08203a, near: 6, far: 55, sand: ['#3a4a5a', '#2a3a4a'], hemi: [0x5a7ab8, 0x0a1a2a, 0.9], sun: 0.3, rock: 0x2a3a4a },
};

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5;
    this.save = normalizeSave(config.save);
    this.base = config.base || './';
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.quality = { low: lowEnd() };
    if (!document.getElementById('ds-style')) document.head.append(h('style', { id: 'ds-style', text: CSS }));
    this.root = h('div', { class: 'ds-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'ds-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'ds-btn ghost', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'ds-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.6);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'ds-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 300);
    this.camPos = new THREE.Vector3(0, 4, 8);
    this.camLook = new THREE.Vector3(0, 0, 0);
    this.input = { pointer: null, keys: new Set(), mx: 0, mz: 0 };
    this.mode = 'menu';
    this.paused = false;
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this._buildScene();
    this._fonts().then(() => {
      this.loading.remove();
      this._buildSea(0);
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
    this.u = Math.min(this.cw, this.ch) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.land = this.cw > this.ch * 1.15;
    this.root.classList.toggle('ds-land', this.land);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.land ? 48 : 62;
    this.camera.updateProjectionMatrix();
  }

  // ---- the sea --------------------------------------------------------------------------------------------------------

  _buildScene() {
    const s = (this.scene = new THREE.Scene());
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x334455, 1.5);
    s.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xe8f8ff, 1.2);
    this.sun.position.set(-10, 40, 10);
    s.add(this.sun);
    this.player = makeFish('player');
    s.add(this.player.root);
    this.bubbles = new Glow(s, 260, 0.35, 0xe8f8ff, true, 0.75);
    this.motes = new Glow(s, 220, 0.12, 0xd8f0ff, true, 0.6);
    this.bits = new Glow(s, 160, 0.3, 0xffe8a0);
    this.ink = new Glow(s, 120, 3, 0x1a1a2a, true, 0.7);
    this.models = new Map();
    this.warnTags = new Map();
  }

  _buildSea(index) {
    if (this.seaIndex === index && this.sea) return;
    if (this.sea) { this.scene.remove(this.sea); this.sea.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    this.seaIndex = index;
    const lv = LEVELS[index];
    const B = BIOME[lv.biome];
    this.biome = lv.biome;
    this.sound.setWorld(lv.biome);
    const g = (this.sea = new THREE.Group());
    this.scene.add(g);
    this.scene.background = new THREE.Color(B.bg);
    this.scene.fog = new THREE.Fog(B.fog, B.near, B.far);
    this.hemi.color.setHex(B.hemi[0]);
    this.hemi.groundColor.setHex(B.hemi[1]);
    this.hemi.intensity = B.hemi[2];
    this.sun.intensity = B.sun;
    const half = lv.half;
    const sand = sandTexture(B.sand[0], B.sand[1]);
    sand.repeat.set(half / 6, half / 6);
    const floorY = -6;
    this.floorY = floorY;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(half * 2 + 80, half * 2 + 80, 40, 40), new THREE.MeshLambertMaterial({ map: sand }));
    floor.rotation.x = -Math.PI / 2;
    const pos = floor.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 0.07) * 1.2 + Math.cos(pos.getY(i) * 0.05) * 1.4);
    floor.geometry.computeVertexNormals();
    floor.position.y = floorY;
    g.add(floor);
    if (lv.biome !== 'trench') {
      this.caustic = causticTexture();
      this.caustic.repeat.set(half / 8, half / 8);
      const ca = new THREE.Mesh(new THREE.PlaneGeometry(half * 2 + 80, half * 2 + 80), new THREE.MeshBasicMaterial({ map: this.caustic, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
      ca.rotation.x = -Math.PI / 2;
      ca.position.y = floorY + 1.5;
      g.add(ca);
    } else this.caustic = null;
    const rand = (k) => ((Math.sin(k * 77.7 + index * 19) * 43758.5453) % 1 + 1) % 1;
    // rocks and arches, corals (reef), kelp (kelp forest), dark cliffs and glowing bits (trench)
    for (let i = 0; i < 40; i++) {
      const r = makeRock(2 + rand(i) * 4, B.rock);
      r.position.set((rand(i + 1) * 2 - 1) * half, floorY, (rand(i + 2) * 2 - 1) * half);
      g.add(r);
    }
    for (let i = 0; i < 6; i++) { const a = makeArch(B.rock); a.position.set((rand(i + 60) * 2 - 1) * half * 0.8, floorY, (rand(i + 70) * 2 - 1) * half * 0.8); a.rotation.y = rand(i + 80) * 3; g.add(a); }
    this.kelps = [];
    if (lv.biome === 'reef') {
      const cols = [0xff6a8a, 0xffa83a, 0xb86ae8, 0x3ad8c8, 0xffd23a, 0xff4a4a];
      for (let i = 0; i < 120; i++) { const c = makeCoral(i % 3, cols[i % cols.length]); c.position.set((rand(i + 100) * 2 - 1) * half, floorY, (rand(i + 200) * 2 - 1) * half); c.rotation.y = rand(i + 300) * 6; c.scale.setScalar(1 + rand(i + 400) * 1.5); g.add(c); }
      for (let i = 0; i < 20; i++) { const k = makeKelp(4 + rand(i + 500) * 4); k.root.position.set((rand(i + 600) * 2 - 1) * half, floorY, (rand(i + 700) * 2 - 1) * half); g.add(k.root); this.kelps.push(k); }
    } else if (lv.biome === 'kelp') {
      for (let i = 0; i < 110; i++) { const k = makeKelp(8 + rand(i + 500) * 10); k.root.position.set((rand(i + 600) * 2 - 1) * half, floorY, (rand(i + 700) * 2 - 1) * half); k.root.scale.setScalar(1.4); g.add(k.root); this.kelps.push(k); }
    } else {
      for (let i = 0; i < 30; i++) { const c = makeRock(8 + rand(i + 800) * 10, 0x1a2a3a); c.position.set((rand(i + 900) * 2 - 1) * half, floorY - 2, (rand(i + 950) * 2 - 1) * half); g.add(c); }
      for (let i = 0; i < 40; i++) { const gl = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 4), basic([0x5ae8ff, 0xb85aff, 0x5aff8a][i % 3])); gl.position.set((rand(i + 1000) * 2 - 1) * half, floorY + 0.5 + rand(i) * 6, (rand(i + 1100) * 2 - 1) * half); g.add(gl); }
    }
    // light rays from the surface (not in the trench)
    if (lv.biome !== 'trench') {
      for (let i = 0; i < 10; i++) {
        const ray = new THREE.Mesh(new THREE.PlaneGeometry(3, 40), new THREE.MeshBasicMaterial({ color: 0xc8f0ff, transparent: true, opacity: 0.06, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
        ray.position.set((rand(i + 1200) * 2 - 1) * half * 0.6, 12, (rand(i + 1300) * 2 - 1) * half * 0.6);
        ray.rotation.set(0, rand(i) * 3, 0.3);
        g.add(ray);
      }
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.ds-dim')) return;
      if (this.mode !== 'play' || this.paused) return;
      const r = root.getBoundingClientRect();
      this.input.pointer = e.pointerId;
      this.input.ox = e.clientX - r.left;
      this.input.oy = e.clientY - r.top;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    });
    root.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.input.pointer) return;
      const r = root.getBoundingClientRect();
      const dx = e.clientX - r.left - this.input.ox;
      const dy = e.clientY - r.top - this.input.oy;
      const l = Math.hypot(dx, dy);
      if (l < this.u * 1.2) { this.input.mx = this.input.mz = 0; return; }
      const k = Math.min(1, l / (this.u * 8)) / l;
      this.input.mx = dx * k;
      this.input.mz = dy * k;
      this.moved = true;
    });
    const up = (e) => { if (e.pointerId === this.input.pointer) { this.input.pointer = null; this.input.mx = this.input.mz = 0; } };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === ' ' || k === 'shift') && !e.repeat) this._dash();
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'ds-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none'; }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); this.hud = null; this.warnTags.clear(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute() {
    const b = h('button', { class: 'ds-sq ds-glass', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
  _toastEl() { this.toastEl = h('div', { class: 'ds-toast' }); return this.toastEl; }
  toast(text, secs = 2.2, icon = '🐟', red = false) {
    if (!this.toastEl) return;
    this.toastEl.replaceChildren(h('span', {}, icon), h('span', {}, text));
    this.toastEl.classList.toggle('red', red);
    this.toastEl.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  showMenu() {
    this._endLevel();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._buildSea(0);
    this._clear();
    this.layer.append(
      h('div', { class: 'ds-top' },
        h('button', { class: 'ds-sq ds-glass', 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
        h('div', { style: 'flex:1' }),
        this._mute()),
      h('div', { class: 'ds-logo' }, h('b', {}, t('title')), h('span', {}, t('tagline'))),
      h('div', { class: 'ds-menu' },
        h('button', { class: 'ds-btn', onclick: () => this.showIntro(Math.min(this.save.unlocked, LEVELS.length) - 1) }, t('play')),
        h('button', { class: 'ds-btn ghost', onclick: () => this.showLevels() }, t('levels'))),
      this._toastEl(),
    );
  }

  showLevels() {
    this.mode = 'levels';
    this._clear();
    const lvs = LEVELS.map((lv, i) => {
      const locked = lv.id > this.save.unlocked;
      const st = this.save.stars[lv.id] ?? 0;
      return h('button', { class: `ds-lv ${lv.biome}${locked ? ' lock' : ''}`, onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked'), 1.8, '🔒'); return; } this.showIntro(i); } },
        h('span', { class: 'n' }, locked ? '🔒' : num(lv.id)),
        h('span', { class: 'nm' }, name(lv), h('small', {}, t('growTo', { n: num(lv.goal) }))),
        h('span', { class: 'st' }, '⭐'.repeat(st) + '☆'.repeat(3 - st)));
    });
    this.layer.append(
      h('div', { class: 'ds-dim' }, h('div', { class: 'ds-card ds-glass' },
        h('h2', {}, t('levels')),
        h('div', { class: 'ds-lvs' }, lvs),
        h('button', { class: 'ds-btn ghost', onclick: () => this.showMenu() }, t('back')))),
      this._toastEl(),
    );
  }

  /** The level card: everything fits on a phone, big and clear (the video's card was cut off). */
  showIntro(i) {
    this.mode = 'intro';
    this._clear();
    this._buildSea(i);
    const lv = LEVELS[i];
    const easy = this.age <= 4;
    const goal = [t('growTo', { n: num(lv.goal) })];
    if (lv.task) goal.push(t('eatSquid', { n: num(lv.task.n) }));
    if (lv.boss) goal.push(t('eatShark'));
    this.layer.append(
      h('div', { class: 'ds-dim' }, h('div', { class: 'ds-card ds-glass' },
        h('div', {}, h('h2', {}, `${t('level')} ${num(lv.id)}`), h('h3', {}, name(lv))),
        h('div', { class: 'ds-row' }, h('div', { class: 'ds-pic' }, lv.boss ? '🦈' : lv.task ? '🦑' : '🐠'), h('div', { class: 'ds-goaltxt' }, goal.join(' '))),
        h('div', { class: 'ds-info' }, '⏱', t('seconds', { n: num(Math.round(lv.time * (easy ? 1.25 : 1))) })),
        h('div', { class: 'ds-info star' }, '⭐', t('stars3', { n: num(Math.round(lv.star3 * (easy ? 1.25 : 1))) })),
        h('button', { class: 'ds-btn', onclick: () => this.startLevel(i) }, t('start')),
        h('button', { class: 'ds-btn ghost', onclick: () => this.showMenu() }, t('back')))),
      this._toastEl(),
    );
  }

  startLevel(i) {
    this._endLevel();
    this._buildSea(i);
    this.levelIndex = i;
    this.s = new Sea({ level: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.moved = false;
    this.player.root.visible = true;
    this.sound.setMode('play');
    this._hud();
    setTimeout(() => this.mode === 'play' && !this.moved && this.toast(t('hint'), 3.5, '👆'), 600);
    this.camPos.set(0, 6, 12);
  }

  _endLevel() {
    for (const m of this.models.values()) this.scene.remove(m.root);
    this.models.clear();
    this.s = null;
  }

  _hud() {
    this._clear();
    this.hud = {
      lives: h('div', { class: 'ds-lives ds-glass' }),
      timer: h('div', { class: 'ds-timer ds-glass' }, '⏱', h('span')),
      goalT: h('span'),
      bar: h('i', { style: 'width:0%' }),
      cm: h('b'),
      combo: h('div', { class: 'ds-combo' }),
      dash: h('button', { class: 'ds-dash', 'aria-label': 'dash', onclick: (e) => { e.stopPropagation(); this._dash(); } }, '💨'),
    };
    this.layer.append(
      h('div', { class: 'ds-top' }, this.hud.lives, this.hud.timer, h('button', { class: 'ds-sq ds-glass', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '❚❚')),
      h('div', { class: 'ds-goal ds-glass' }, h('span', { class: 'fish' }, '🐟'), h('div', { class: 'txt' }, this.hud.goalT, h('div', { class: 'bar' }, this.hud.bar)), this.hud.cm),
      this.hud.combo,
      this.hud.dash,
      this._toastEl(),
    );
    this._hc = {};
  }

  _dash() { if (this.s && !this.s.dash()) this.sound.play('no'); }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.mx = this.input.mz = 0;
    this.sound.suspend();
    const dim = h('div', { class: 'ds-dim' }, h('div', { class: 'ds-card ds-glass' },
      h('h2', {}, t('paused')),
      h('button', { class: 'ds-btn', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this.clock.getDelta(); } }, t('resume')),
      h('button', { class: 'ds-btn ghost', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, t('restart')),
      h('button', { class: 'ds-btn ghost', onclick: () => { this.sound.resume(); this.showLevels(); } }, t('levels'))));
    this.layer.append(dim);
  }

  _results() {
    const s = this.s;
    const r = s.result;
    const i = this.levelIndex;
    const lv = LEVELS[i];
    this.mode = 'results';
    this.sound.setMode('menu');
    this.save.best[lv.id] = Math.max(this.save.best[lv.id] ?? 0, Math.round(r.cm));
    if (r.won) {
      this.save.stars[lv.id] = Math.max(this.save.stars[lv.id] ?? 0, r.stars);
      if (lv.id + 1 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = lv.id + 1;
      this.sound.play('won');
      [0, 1, 2].forEach((k) => k < r.stars && setTimeout(() => this.sound.play('star', k), 700 + k * 280));
    } else this.sound.play('lost');
    this._saveNow();
    const hasNext = r.won && i + 1 < LEVELS.length;
    this.layer.append(h('div', { class: 'ds-dim' }, h('div', { class: 'ds-card ds-glass' },
      h('h2', { style: 'text-align:center' }, r.won ? t('won') : r.by === 'time' ? t('lostTime') : t('lostBit')),
      r.won ? h('div', { class: 'ds-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'ds-stats' }, h('span', {}, `📏 ${num(Math.round(r.cm))} ${t('cm')}`), h('span', {}, `🐟 ${num(r.eaten)}`), h('span', {}, `⏱ ${num(r.time)}`)),
      r.won ? h('div', { class: 'ds-info star', style: 'justify-content:center' }, t('win')) : null,
      hasNext ? h('button', { class: 'ds-btn', onclick: () => this.showIntro(i + 1) }, t('next')) : h('button', { class: 'ds-btn', onclick: () => this.startLevel(i) }, t('again')),
      h('button', { class: 'ds-btn ghost', onclick: () => this.showLevels() }, t('levels')))));
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const s = this.s;
    const k = this.input.keys;
    let mx = this.input.mx;
    let mz = this.input.mz;
    if (k.has('arrowleft') || k.has('a')) mx -= 1;
    if (k.has('arrowright') || k.has('d')) mx += 1;
    if (k.has('arrowup') || k.has('w')) mz -= 1;
    if (k.has('arrowdown') || k.has('s')) mz += 1;
    if (mx || mz) this.moved = true;
    s.setMove(mx, mz);
    const before = s.state;
    const tick = Math.ceil(s.left);
    for (const e of s.step(dt)) this._event(e, s);
    if (Math.ceil(s.left) !== tick && s.left <= 10 && s.left > 0) this.sound.play('tick');
    if ((before === 'play' || before === 'boss') && (s.state === 'won' || s.state === 'lost')) setTimeout(() => this.mode === 'play' && this.s === s && this._results(), s.state === 'won' ? 1600 : 1200);
    this._sync(dt, time);
  }

  _event(e, s) {
    const S = this.sound;
    const f = s.fish;
    switch (e.type) {
      case 'eat': {
        const big = e.cm > f.cm * 0.4;
        S.play(big ? 'bigGulp' : 'gulp', e.combo);
        if (e.combo >= 3) { this.hud.combo.textContent = `${t('combo')} ×${num(e.combo)}`; this.hud.combo.classList.remove('pop'); void this.hud.combo.offsetWidth; this.hud.combo.classList.add('pop'); if (e.combo % 3 === 0) S.play('combo'); }
        this.bubbles.burst(e.x, 0, e.z, big ? 18 : 6, 2, 0.8);
        this.bits.burst(e.x, 0, e.z, 6, 2, 0.4);
        const q = this._proj(f.x, U(f.cm), f.z);
        const p = h('div', { class: 'ds-plus', style: `left:${q.x}px;top:${q.y}px` }, `+${num(Math.max(1, Math.round(e.gain)))} ${t('cm')}`);
        this.layer.append(p);
        setTimeout(() => p.remove(), 800);
        if (e.kind === 'squid' && s.level.task) this.toast(t('squidLeft', { a: num(Math.min(s.squid, s.level.task.n)), b: num(s.level.task.n) }), 1.4, '🦑');
        break;
      }
      case 'dash': S.play('dash'); this.bubbles.burst(f.x, 0, f.z, 14, 3, 0.6); break;
      case 'warn': S.play('warn'); if (!this._warned) { this._warned = true; this.toast(t('warn'), 2, '❗', true); } break;
      case 'lunge': S.play('lunge'); break;
      case 'bitten': S.play('bitten'); this.shake = 0.5; this.toast(t('bitten'), 1.4, '💥', true); break;
      case 'bait': S.play('bait'); this.toast(t('bait'), 2.2, '🐟'); break;
      case 'ink': S.play('ink'); this.ink.burst(e.x, 0, e.z, 16, 1.5, 2); break;
      case 'boss': S.play('boss'); S.setMode('boss'); this.toast(t('boss'), 3, '🦈', true); this.shake = 0.6; break;
      case 'won': S.play('grow'); this.bubbles.burst(f.x, 0, f.z, 60, 5, 1.4); break;
      default:
    }
  }

  _proj(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * this.cw, y: (-v.y * 0.5 + 0.5) * this.ch, behind: v.z > 1 };
  }

  _sync(dt, time) {
    const s = this.s;
    const f = s.fish;
    const L = U(f.cm);
    // the player's fish: swims along, tail wagging faster when dashing, a blink when bitten
    const pl = this.player;
    pl.root.position.set(f.x, Math.sin(time * 1.6) * 0.15, f.z);
    pl.root.scale.setScalar(L);
    let d = f.a - pl.root.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    pl.root.rotation.y += d * Math.min(1, dt * 10);
    pl.root.rotation.z = -d * 0.5;
    const sp = Math.hypot(f.vx, f.vz);
    pl.tail.rotation.y = Math.sin(time * (8 + sp * 2)) * (0.3 + Math.min(0.4, sp * 0.04));
    pl.root.visible = !(f.invul > 0 && Math.floor(time * 12) % 2 === 0);
    if (Math.random() < dt * (f.dashT > 0 ? 30 : 3)) this.bubbles.emit(f.x - Math.sin(f.a) * L * 0.5, 0, f.z - Math.cos(f.a) * L * 0.5, 0, 0.8, 0, 1.2);
    // the creatures
    const seen = new Set();
    for (const c of s.creatures) {
      seen.add(c.id);
      let m = this.models.get(c.id);
      if (!m) { m = makeFish(c.kind); this.scene.add(m.root); this.models.set(c.id, m); }
      m.root.position.set(c.x, c.y, c.z);
      m.root.scale.setScalar(U(c.cm));
      m.root.rotation.y = c.a;
      if (m.tail) m.tail.rotation.y = Math.sin(time * 9 + c.id) * 0.4;
      if (c.kind === 'squid') m.tail.scale.z = 1 + Math.sin(time * 4 + c.id) * 0.25;
      // a red "!" over a predator that is about to lunge
      let tag = this.warnTags.get(c.id);
      if (c.warn > 0) {
        if (!tag) { tag = h('div', { class: 'ds-warn' }, '!'); this.layer.append(tag); this.warnTags.set(c.id, tag); }
        const q = this._proj(c.x, c.y + U(c.cm) * 0.5 + 0.5, c.z);
        tag.style.left = `${q.x}px`;
        tag.style.top = `${q.y}px`;
      } else if (tag) { tag.remove(); this.warnTags.delete(c.id); }
    }
    for (const [id, m] of this.models) if (!seen.has(id)) { this.scene.remove(m.root); this.models.delete(id); const tg = this.warnTags.get(id); if (tg) { tg.remove(); this.warnTags.delete(id); } }
    this._ambient(dt, time);
    // camera: behind and above the fish, looking ahead; pulls back as it grows
    const z = 1 + L * 0.55;
    const off = this.land ? new THREE.Vector3(0, 3.2 * z, 5.2 * z) : new THREE.Vector3(0, 4.2 * z, 5.6 * z);
    this.camLook.lerp(new THREE.Vector3(f.x, 0, f.z - 1.5 * z), Math.min(1, dt * 5));
    this.camPos.lerp(new THREE.Vector3(f.x + off.x, off.y, f.z + off.z), Math.min(1, dt * 3));
    this.camera.position.copy(this.camPos);
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    if (this.shake > 0) this.camera.position.add(new THREE.Vector3((Math.random() - 0.5) * this.shake, 0, 0));
    this.camera.lookAt(this.camLook);
    this.scene.fog.far = BIOME[this.biome].far + L * 4;
    this._hudSync(s);
  }

  _ambient(dt, time) {
    if (this.caustic) this.caustic.offset.set(time * 0.015, time * 0.01);
    for (const k of this.kelps) k.segs.forEach((sg, i) => { sg.rotation.z = Math.sin(time * 0.9 + i * 0.5 + k.root.position.x) * 0.12; });
    const c = this.camLook;
    if (Math.random() < dt * 6) this.bubbles.emit(c.x + (Math.random() - 0.5) * 30, -5, c.z + (Math.random() - 0.5) * 30, 0, 1.4, 0, 6);
    if (Math.random() < dt * 20) this.motes.emit(c.x + (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 8, c.z + (Math.random() - 0.5) * 30, 0.1, 0.05, 0.1, 5);
    this.bubbles.update(dt, 0.6);
    this.motes.update(dt);
    this.bits.update(dt, -1);
    this.ink.update(dt);
  }

  _hudSync(s) {
    if (!this.hud) return;
    const hc = this._hc;
    const f = s.fish;
    if (hc.lives !== s.lives) { hc.lives = s.lives; this.hud.lives.replaceChildren(...Array.from({ length: s.maxLives }, (_, i) => h('b', { class: i < s.lives ? '' : 'off' }, '🐟'))); }
    const tm = fmt(Math.ceil(s.left));
    if (hc.tm !== tm) { hc.tm = tm; this.hud.timer.lastChild.textContent = getLang() === 'en' ? tm : num(tm); this.hud.timer.classList.toggle('low', s.left <= 10); }
    const goal = s.state === 'boss' ? t('boss') : s.level.task && f.cm >= s.level.goal ? t('squidLeft', { a: num(s.squid), b: num(s.level.task.n) }) : t('growTo', { n: num(s.level.goal) });
    if (hc.goal !== goal) { hc.goal = goal; this.hud.goalT.textContent = goal; }
    const w = Math.round(Math.max(0, Math.min(1, (f.cm - s.level.start) / (s.level.goal - s.level.start))) * 100);
    if (hc.w !== w) { hc.w = w; this.hud.bar.style.width = `${w}%`; }
    const cm = `${num(Math.round(f.cm))} ${t('cm')}`;
    if (hc.cm !== cm) { hc.cm = cm; this.hud.cm.textContent = cm; }
    const cd = Math.round((f.dashCd / 2.2) * 100);
    if (hc.cd !== cd) { hc.cd = cd; this.hud.dash.style.setProperty('--cd', cd); }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && this.s && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'results' && this.s) this._ambient(dt, time);
    else if (this.mode !== 'play') {
      // menus: the little fish swims in a slow circle; the camera drifts
      this._ambient(dt, time);
      const pl = this.player;
      const a = time * 0.4;
      pl.root.visible = true;
      pl.root.position.set(Math.sin(a) * 2.5, Math.sin(time * 1.5) * 0.3, Math.cos(a) * 2.5);
      pl.root.rotation.set(0, a + Math.PI / 2, 0);
      pl.root.scale.setScalar(1.2);
      pl.tail.rotation.y = Math.sin(time * 9) * 0.4;
      this.camPos.lerp(new THREE.Vector3(0, 2.5, 9), Math.min(1, dt * 1.5));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(0, 0, 0);
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
    clearTimeout(this._tt);
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
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

void SPECIES; void EAT; void DANGER; void mat;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.DeepSea = api;
export default api;
