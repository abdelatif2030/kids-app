// «سباق السباحة العجيب» — Splash Race. Entry: window.SplashRace.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A goggle-wearing otter races other swimmers down a tropical obstacle course: STROKE on the whistle's beat, DIVE under
// pool noodles, leap floating walls, dodge bumpers, ride waves, take slide shortcuts, watch your breath, qualify
// through the rounds and win the final. No network, no links, no ads, no tracking.
import * as THREE from 'three';
import { Swim, ROUNDS, HALF, normalizeSave } from './sim.js';
import {
  mat, makeSwimmer, makeStandingOtter, makeBumper, makeNoodle, makeFloatWall, makeRope, makeSlide, makeFinishArch,
  makeStartBlock, makeIsland, waterTexture,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num, name } from './i18n.js';
import { CSS, CSS2, CSS3, h } from './ui.js';

const lowEnd = () => (navigator.deviceMemory ?? 4) <= 3 || (navigator.hardwareConcurrency ?? 4) <= 4;
const webglOk = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
};
const FACE = { otter: '🦦', penguin: '🐧', beaver: '🦫', seal: '🦭', duck: '🦆' };
const BUMPER_COLORS = [0x2ab8c8, 0xe8342a, 0xffd23a];

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Drops {
  constructor(scene, n, size, color) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -50;
  }
  emit(x, y, z, vx, vy, vz, life = 0.6) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  splash(x, z, n = 14, power = 3) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.emit(x, 0.2, z, Math.cos(a) * power * Math.random(), 2 + Math.random() * power, Math.sin(a) * power * Math.random(), 0.7);
    }
  }
  update(dt, g = 9) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] -= g * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0) this.pos[k * 3 + 1] = -50;
    }
    this.g.attributes.position.needsUpdate = true;
  }
}

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
    if (!document.getElementById('sp-style')) document.head.append(h('style', { id: 'sp-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'sp-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'sp-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'sp-btn2', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'sp-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'sp-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(58, 1, 0.3, 400);
    this.input = { x: 0, pointer: null, ox: 0, oy: 0, dive: false, keys: new Set() };
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
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    this.camera.fov = this.cw < this.ch ? 66 : 54;
    this.camera.updateProjectionMatrix();
  }

  // ---- the course ----------------------------------------------------------------------------------------------------

  _buildWorld(roundIndex) {
    if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.sw = new Swim({ round: roundIndex, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    const L = this.sw.round.len;
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0x8fdcff);
    s.fog = new THREE.Fog(0xbfeaff, 70, 240);
    s.add(new THREE.HemisphereLight(0xf4fcff, 0x3a9ab8, 1.9));
    const sun = new THREE.DirectionalLight(0xfff8e0, 1.4);
    sun.position.set(-20, 40, 20);
    s.add(sun);
    this.water = waterTexture();
    this.water.repeat.set(48, 150);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(160, L + 200), new THREE.MeshLambertMaterial({ map: this.water, transparent: true, opacity: 0.88 }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0, -L / 2);
    s.add(water);
    // a lighter pool floor under the water so divers show through
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(160, L + 200), mat(0x7ae0f0));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -1.6, -L / 2);
    s.add(floor);
    // rainbow rope floats along both sides
    for (const side of [-1, 1]) {
      const pts = [];
      for (let z = 12; z > -L - 20; z -= 0.6) pts.push([side * HALF, z]);
      s.add(makeRope(pts));
    }
    // islands with palms, the start blocks and the finish arch
    for (let i = 0; i < 14; i++) {
      const side = i % 2 ? 1 : -1;
      const isl = makeIsland(5 + (i % 3) * 2.5);
      isl.position.set(side * (26 + (i % 4) * 9), -0.6, 10 - i * ((L + 40) / 14));
      s.add(isl);
    }
    const blockCols = [0xe8342a, 0x2a6ae8, 0xffd23a, 0x2ab8c8];
    this.sw.swimmers.forEach((w, k) => {
      const b = makeStartBlock(blockCols[k % 4]);
      b.position.set(w.x, 0, 1.4);
      s.add(b);
    });
    const arch = makeFinishArch(HALF * 2 + 2);
    arch.position.set(0, 0, -L);
    s.add(arch);
    // obstacles
    const c = this.sw.course;
    c.bumpers.forEach((b, k) => { const m = makeBumper(BUMPER_COLORS[k % 3]); m.position.set(b.x, -0.4, -b.s); s.add(m); });
    this.noodles = c.noodles.map((n) => { const m = makeNoodle(n.len); m.position.set(n.x, 0, -n.s); s.add(m); return m; });
    c.walls.forEach((w) => { const m = makeFloatWall(w.x0, w.x1); m.position.z = -w.s; s.add(m); });
    this.waves = c.waves.map((w) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, w.len), new THREE.MeshBasicMaterial({ map: this._waveTex(), transparent: true, opacity: 0.8, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.position.set(0, 0.06, -(w.s + w.len / 2));
      s.add(m);
      return m;
    });
    c.slides.forEach((sl) => { const m = makeSlide(sl.len, sl.side); m.position.set(sl.side * (HALF + 3.2), 0, -sl.s + 1.5); s.add(m); });
    // swimmers
    this.models = this.sw.swimmers.map((w) => { const m = makeSwimmer(w.kind, w.cap, w.kind !== 'duck'); m.root.scale.setScalar(1.55); s.add(m.root); return m; });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.75, 28), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.9, depthWrite: false }));
    this.ring.rotation.x = -Math.PI / 2;
    s.add(this.ring);
    this.drops = new Drops(s, 260, 0.35, 0xffffff);
    this.bubbles = new Drops(s, 80, 0.22, 0xe0f8ff);
    this.cam = null;
  }

  _waveTex() {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 128;
    const g = c.getContext('2d');
    for (let i = 0; i < 4; i++) {
      g.fillStyle = 'rgba(255,255,255,0.75)';
      g.beginPath();
      for (let x = 0; x <= 64; x += 4) g.lineTo(x, i * 32 + 8 + Math.sin(x / 6) * 4);
      g.lineTo(64, i * 32 + 16);
      for (let x = 64; x >= 0; x -= 4) g.lineTo(x, i * 32 + 16 + Math.sin(x / 6) * 4);
      g.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'sp-joy' }, h('i'));
    root.append(this.joy);
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'race' || this.paused || this.input.pointer !== null) return;
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
      const max = this.u * 12;
      let dx = e.clientX - this.input.ox;
      const dy = e.clientY - this.input.oy;
      dx = Math.max(-max, Math.min(max, dx));
      this.input.x = dx / max;
      this.joy.firstChild.style.transform = `translate(${dx}px,${Math.max(-max, Math.min(max, dy)) * 0.3}px)`;
    });
    const up = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
      this.input.x = 0;
      this._joyHome();
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.sp-cbtn')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'race' && (k === 'escape' || k === 'p')) this.pause();
        if (this.mode === 'race' && (k === ' ' || k === 'w' || k === 'arrowup') && !e.repeat) { this._stroke(); e.preventDefault(); }
      } else this.input.keys.delete(k);
      if (this.mode === 'race' && (k.startsWith('arrow') || k === ' ')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'race') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'sp-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _joyHome() {
    if (!this.joy) return;
    this.joy.style.display = this.mode === 'race' ? 'block' : 'none';
    this.joy.style.left = `${getLang() === 'en' ? this.u * 18 : this.cw - this.u * 18}px`;
    this.joy.style.top = `${this.ch - this.u * 18}px`;
    this.joy.firstChild.style.transform = 'translate(0,0)';
  }

  _readInput() {
    const k = this.input.keys;
    let x = this.input.x;
    if (k.has('arrowleft') || k.has('a')) x = -1;
    if (k.has('arrowright') || k.has('d')) x = 1;
    const dive = this.input.dive || k.has('arrowdown') || k.has('s') || k.has('shift');
    return { x, dive };
  }

  _stroke() {
    if (!this.sw || this.mode !== 'race' || this.paused) return;
    const g = this.sw.stroke();
    if (!g) return;
    this.hud.grade.textContent = t(g);
    this.hud.grade.style.color = g === 'perfect' ? '#ffd23a' : g === 'good' ? '#8ae86a' : '#ffffff';
    this.hud.grade.classList.remove('show');
    void this.hud.grade.offsetWidth;
    this.hud.grade.classList.add('show');
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'sp-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
    this.toastEl = h('div', { class: 'sp-toast' });
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

  showMenu() {
    this.mode = 'menu';
    this.paused = false;
    if (this.joy) this.joy.style.display = 'none';
    this.sound.setUnder(false);
    this.sound.setTempo(96);
    this.sound.setMode('menu');
    this._buildWorld(0);
    this.otter = makeStandingOtter();
    this.otter.position.set(0, 0.6, -6);
    this.otter.rotation.y = 0;
    this.scene.add(this.otter);
    this._clear();
    const spots = [[50, 82], [26, 56], [70, 38], [44, 14]];
    const isles = ROUNDS.map((rd, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[rd.id] ?? 0;
      return h('button', {
        class: `sp-isle${locked ? ' lock' : ''}`, style: `left:${spots[i][0]}%;top:${spots[i][1]}%`,
        'aria-label': `${t('round')} ${rd.id} ${name(rd)}`,
        onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked')); return; } this.startRound(i); },
      }, locked ? '🔒' : i === 3 ? '🏆' : num(rd.id), h('small', {}, name(rd)), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'sp-dots');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    const pl = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    pl.setAttribute('points', spots.map((p) => p.join(',')).join(' '));
    pl.setAttribute('fill', 'none');
    pl.setAttribute('stroke', '#fff');
    pl.setAttribute('stroke-width', '1.2');
    pl.setAttribute('stroke-dasharray', '2 2');
    svg.append(pl);
    this.layer.append(
      h('button', { class: 'sp-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'sp-dim', style: 'background:rgba(20,120,160,.25)' },
        h('div', { class: 'sp-panel' },
          h('div', { class: 'sp-logo', style: 'font-size:calc(var(--u)*7)' }, '🦦 ', t('title')),
          h('div', { class: 'sp-map' }, svg, isles),
          h('button', { class: 'sp-btn2 sp-big', onclick: () => this.startRound(this.save.unlocked - 1) }, '▶ ', t('swim')))),
      this._mute(`bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
  }

  startRound(i) {
    this.roundIndex = i;
    this._buildWorld(i);
    this.otter = null;
    this.mode = 'race';
    this.paused = false;
    this.sound.setTempo(this.sw.round.bpm);
    this.sound.setMode('race');
    this._hud();
    this._joyHome();
    this.hinted = {};
  }

  _hud() {
    this._clear();
    const sw = this.sw;
    this.hud = {
      place: h('div', { class: 'sp-place' }, num(sw.swimmers.length)),
      prog: h('div', { class: 'sp-prog' }, sw.swimmers.map((w) => h('i', { class: w.isPlayer ? 'me' : '' }, FACE[w.kind]))),
      qual: h('div', { class: 'sp-qual' }, `${num(0)}/${num(sw.round.qualify)}`),
      breath: h('div', { class: 'sp-breath' }, [0, 1, 2, 3, 4].map(() => h('i'))),
      grade: h('div', { class: 'sp-grade' }),
      hint: h('div', { class: 'sp-hint' }),
      count: h('div', { class: 'sp-count' }, ''),
      stroke: h('button', { class: 'sp-cbtn sp-stroke', 'aria-label': t('stroke') }, h('span', { class: 'sp-pulse' }), t('stroke')),
      dive: h('button', { class: 'sp-cbtn sp-dive', 'aria-label': t('dive') }, t('dive')),
    };
    this.hud.stroke.style.setProperty('--b', `${sw.beat}s`);
    this.hud.stroke.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this._stroke(); });
    const dv = this.hud.dive;
    dv.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this.input.dive = true; dv.classList.add('on'); try { dv.setPointerCapture(e.pointerId); } catch (_) { /* fine */ } });
    const off = () => { this.input.dive = false; dv.classList.remove('on'); };
    dv.addEventListener('pointerup', off);
    dv.addEventListener('pointercancel', off);
    this.layer.append(
      h('div', { class: 'sp-hudtop' }, this.hud.place, h('div', { class: 'sp-roundbar' }, h('b', {}, sw.round.id === 4 ? t('final') : `${t('round')} ${num(sw.round.id)}`), this.hud.prog), this.hud.qual),
      h('button', { class: 'sp-round', style: 'top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-start:calc(var(--u)*3)', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      this.hud.breath, this.hud.grade, this.hud.hint, this.hud.count, this.hud.stroke, this.hud.dive,
      this._mute('top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*16);inset-inline-end:calc(var(--u)*3)'),
      this._toastEl(),
    );
    this._hc = {};
  }

  _hint(key, secs = 2.6) {
    if (this.hinted[key]) return;
    this.hinted[key] = true;
    this.hud.hint.textContent = t(key);
    this.hud.hint.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hud && this.hud.hint.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'race' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.dive = false;
    this.joy.style.display = 'none';
    this.sound.suspend();
    const dim = h('div', { class: 'sp-dim' }, h('div', { class: 'sp-panel' },
      h('div', { class: 'sp-title' }, t('paused')),
      h('button', { class: 'sp-btn2', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this._joyHome(); } }, '▶ ', t('resume')),
      h('button', { class: 'sp-btn2 wood', onclick: () => { this.sound.resume(); this.startRound(this.roundIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'sp-btn2 wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const sw = this.sw;
    const r = sw.result;
    const i = this.roundIndex;
    this.mode = 'results';
    this.joy.style.display = 'none';
    this.sound.setUnder(false);
    this.sound.setMode('menu');
    const finalWin = i === ROUNDS.length - 1 && r.place === 1;
    if (r.qualified) {
      const id = ROUNDS[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
      if (i + 2 > this.save.unlocked && i + 1 < ROUNDS.length) this.save.unlocked = i + 2;
      this._saveNow();
      this.sound.play('win');
    } else this.sound.play('lose');
    const hasNext = r.qualified && i + 1 < ROUNDS.length;
    const dim = h('div', { class: 'sp-dim' }, h('div', { class: 'sp-panel' },
      h('div', { class: 'sp-title' }, finalWin ? t('win') : r.qualified ? t('qual') : t('out')),
      r.qualified ? h('div', { class: 'sp-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'sp-stat' }, h('span', {}, '🏁 ', t('place'), ' ', num(r.place)), h('span', {}, '⭐ ', t('perfect'), ' ', num(sw.perfects))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'sp-btn2', onclick: () => this.startRound(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: hasNext ? 'sp-btn2 wood' : 'sp-btn2', onclick: () => this.startRound(i) }, '↻ ', t('again')),
        h('button', { class: 'sp-btn2 wood', onclick: () => this.showMenu() }, t('menu')))));
    this.hud.stroke.remove();
    this.hud.dive.remove();
    this.layer.append(dim);
  }

  // ---- racing -------------------------------------------------------------------------------------------------------

  _raceFrame(dt, time) {
    const sw = this.sw;
    const input = this._readInput();
    const wasDive = sw.player.dive;
    const events = sw.step(dt, input);
    const p = sw.player;
    if (p.dive !== wasDive) { this.sound.play(p.dive ? 'dive' : 'surface'); this.sound.setUnder(p.dive); }
    for (const e of events) {
      switch (e.type) {
        case 'count': this.sound.play('count'); this.hud.count.textContent = num(e.n); break;
        case 'go':
          this.sound.play('go');
          this.hud.count.textContent = '';
          this.sound.setTempo(sw.round.bpm);
          this._hint('hint', 3.2);
          for (const w of sw.swimmers) this.drops.splash(w.x, 0.5, 10, 3);
          break;
        case 'beat': {
          const pl = this.hud.stroke.firstChild;
          pl.classList.remove('go');
          void pl.offsetWidth;
          pl.classList.add('go');
          break;
        }
        case 'stroke': {
          const w = sw.swimmers[e.id];
          if (e.id === 0) this.sound.play('stroke', e.grade);
          this.drops.splash(w.x, -w.s, e.id === 0 ? 10 : 5, e.grade === 'perfect' ? 3.5 : 2.2);
          this.models[e.id].paddle = 0.45;
          break;
        }
        case 'leap': if (e.id === 0) this.sound.play('leap'); break;
        case 'bonk': if (e.id === 0) { this.sound.play('bonk'); this.shake = 0.35; } break;
        case 'breath': this.sound.play('breath'); this.toast(t('breath'), 1.2); this.sound.setUnder(false); break;
        case 'slide': if (e.id === 0) { this.sound.play('slide'); this.toast(t('slide'), 1.2); } break;
        case 'splash': this.drops.splash(e.x, -e.s, e.id === 0 ? 24 : 10, 4); if (e.id === 0) this.sound.play('splash'); break;
        case 'finish': if (e.id === 0) this.sound.play('finish'); break;
        case 'over': setTimeout(() => this.mode === 'race' && this._results(), 1500); break;
        default:
      }
    }
    // hints when the first noodle / wall comes up; a wave whoosh
    const c = sw.course;
    if (c.noodles.some((n) => n.s - p.s > 0 && n.s - p.s < 14)) this._hint('hintDive');
    if (c.walls.some((w) => w.s - p.s > 0 && w.s - p.s < 14 && p.x > w.x0 - 0.5 && p.x < w.x1 + 0.5)) this._hint('hintLeap');
    const inWave = c.waves.some((w) => p.s > w.s && p.s < w.s + 2);
    if (inWave && !this._waved) { this._waved = true; this.sound.play('wave'); this.toast(t('wave'), 1); }
    if (!inWave) this._waved = false;
    this._sync(dt, time);
  }

  _sync(dt, time) {
    const sw = this.sw;
    this.water.offset.y = (this.water.offset.y + dt * 0.05) % 1;
    for (const wv of this.waves) wv.material.map.offset.y = (wv.material.map.offset.y - dt * 0.6) % 1;
    sw.course.noodles.forEach((n, k) => { this.noodles[k].userData.arm.rotation.y = n.a; });
    sw.swimmers.forEach((w, k) => {
      const m = this.models[k];
      m.root.position.set(w.x, w.y - 0.12 + Math.sin(time * 4 + k) * 0.04, -w.s);
      m.root.rotation.x = w.air > 0 ? -0.6 * Math.cos((1 - w.air / 0.9) * Math.PI) : w.slide ? 0.4 : 0;
      m.root.rotation.z = w.stun > 0 ? Math.sin(time * 25) * 0.4 : 0;
      m.paddle = Math.max(0, (m.paddle ?? 0) - dt);
      const sp = time * 6 + k;
      m.arms[0].rotation.x = m.paddle > 0 ? -2.6 * Math.sin((m.paddle / 0.45) * Math.PI) : Math.sin(sp) * 0.5;
      m.arms[1].rotation.x = m.paddle > 0 ? 2.6 * Math.sin((m.paddle / 0.45) * Math.PI) - 1 : -Math.sin(sp) * 0.5;
      m.legs.forEach((l, i) => { l.rotation.x = Math.sin(time * 14 + i * Math.PI) * 0.5; });
      m.head.rotation.z = Math.sin(time * 3 + k) * 0.25;
      if (w.dive && Math.random() < 0.3) this.bubbles.emit(w.x + (Math.random() - 0.5) * 0.4, w.y + 0.2, -w.s, 0, 1.2, 0, 0.8);
      if (!w.dive && w.air <= 0 && !w.slide && w.v > 3 && Math.random() < 0.25) this.drops.emit(w.x + (Math.random() - 0.5) * 0.6, 0.1, -w.s + 0.6, (Math.random() - 0.5), 1.4, 1, 0.4);
    });
    this.drops.update(dt);
    this.bubbles.update(dt, -3);
    const p = sw.player;
    this.ring.position.set(p.x, 0.05, -p.s);
    this.ring.visible = !p.slide && this.mode !== 'menu';
    // camera behind and above the otter
    const portrait = this.cw < this.ch;
    const want = new THREE.Vector3(p.x * 0.55, portrait ? 6.2 : 4.6, -p.s + (portrait ? 8.8 : 7.2));
    if (!this.cam) this.cam = want.clone();
    this.cam.lerp(want, Math.min(1, dt * 4));
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    this.camera.position.set(this.cam.x + (Math.random() - 0.5) * this.shake * 0.3, this.cam.y, this.cam.z);
    this.camera.lookAt(this.cam.x, 0, this.cam.z - (portrait ? 8.8 : 7.2) - 7);
    if (this.mode !== 'race') return;
    // HUD
    const hc = this._hc;
    if (hc.rank !== p.rank) { hc.rank = p.rank; this.hud.place.textContent = num(p.rank ?? sw.swimmers.length); }
    const q = sw.qualifiedCount;
    if (hc.q !== q) { hc.q = q; this.hud.qual.textContent = `${num(q)}/${num(sw.round.qualify)}`; }
    const L = sw.round.len;
    const rtl = getLang() !== 'en';
    sw.swimmers.forEach((w, k) => { const f = Math.min(1, w.s / L) * 92 + 4; this.hud.prog.children[k].style.left = `${rtl ? 100 - f : f}%`; });
    const b = Math.ceil(p.breath * 5);
    if (hc.b !== b) { hc.b = b; [...this.hud.breath.children].forEach((x, i) => x.classList.toggle('off', i >= b)); }
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (!this.scene) return;
    if (this.mode === 'race' && !this.paused) this._raceFrame(dt, time);
    else if (this.mode === 'results') { this.sw.step(dt, {}); this._sync(dt, time); } else if (this.mode === 'menu') {
      this._sync(dt, time);
      if (this.otter) { this.otter.userData.wave.rotation.z = -0.6 + Math.sin(time * 6) * 0.5; this.otter.rotation.y = Math.sin(time * 0.6) * 0.3; }
      const a = time * 0.15;
      this.camera.position.set(Math.sin(a) * 6, 2.6, -6 + Math.cos(a) * 6 + 2);
      this.camera.lookAt(0, 1.2, -6);
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
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      if (this.scene) this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
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
window.SplashRace = api;
export default api;
