// «دفاع القلعة البحرية» — Ocean Defense. Entry: window.OceanDefense.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A little crowned clownfish guards a coral fortress: drag to aim a stream of glowing bubbles up the reef corridor,
// stop grumpy fish, jellyfish and pufferfish before they reach the wall, choose a power at each level up (repair,
// spinning shell, whirlpool, more bubbles, faster), and beat the giant octopus. No network, no links, no ads.
import * as THREE from 'three';
import { Defense, LEVELS, POWERS, UPGRADES, MAX_UP, upCost, HALF_W, TOP, HERO, normalizeSave } from './sim.js';
import {
  mat, makeClownfish, makeEnemyFish, makeJelly, makePuffer, makeInk, makeOctopus, makeShell, makeTower, makeWall,
  makeCoral, makeSeaweed, sandTexture, causticTexture,
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

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.5, 'rgba(255,255,255,0.8)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

function swirlTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.translate(128, 128);
  for (let arm = 0; arm < 4; arm++) {
    g.beginPath();
    for (let i = 0; i < 120; i++) {
      const a = arm * (Math.PI / 2) + i * 0.06;
      const r = i * 1.05;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.strokeStyle = 'rgba(200,250,255,0.85)';
    g.lineWidth = 10;
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}

/** Glowing points (bubbles, sparkles) with their own life. */
class Glow {
  constructor(scene, n, size, color, normal = false) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false, opacity: normal ? 0.55 : 1, blending: normal ? THREE.NormalBlending : THREE.AdditiveBlending }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -50;
  }
  emit(x, y, z, vx, vy, vz, life = 0.8) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 14, power = 3) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.emit(x, y, z, Math.cos(a) * power * Math.random(), Math.random() * power, Math.sin(a) * power * Math.random(), 0.6);
    }
  }
  update(dt, rise = 0) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] += rise * dt;
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
    if (!document.getElementById('od-style')) document.head.append(h('style', { id: 'od-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'od-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'od-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'od-btn2', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'od-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'od-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 120);
    this.input = { pointer: null, keys: new Set(), aimed: false };
    this.mode = 'menu';
    this.paused = false;
    this.ray = new THREE.Raycaster();
    this.floor = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.9);
    this._bind();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this.frames = [];
    this.goodWin = 0;
    this.clock = new THREE.Clock();
    this._buildWorld();
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
    this.root.classList.toggle('od-land', this.cw > this.ch * 1.15);
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    const portrait = this.cw < this.ch;
    this.camera.fov = portrait ? 58 : 46;
    this.camera.updateProjectionMatrix();
    // the whole corridor from the wall to where enemies appear stays in view
    if (portrait) { this.camera.position.set(0, 23, 9.5); this.camera.lookAt(0, 0, -9.2); } else { this.camera.position.set(0, 21, 10.5); this.camera.lookAt(0, 0, -8.6); }
  }

  // ---- the reef ----------------------------------------------------------------------------------------------------

  _buildWorld() {
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0x2f9ad8);
    s.fog = new THREE.Fog(0x3aa8e0, 26, 60);
    s.add(new THREE.HemisphereLight(0xe8fbff, 0x3a6a8a, 1.9));
    const sun = new THREE.DirectionalLight(0xfff8e0, 1.3);
    sun.position.set(-6, 25, 6);
    s.add(sun);
    const sand = sandTexture();
    sand.repeat.set(10, 10);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), new THREE.MeshLambertMaterial({ map: sand }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -10;
    s.add(floor);
    // moving light patterns on the sand
    this.caustic = causticTexture();
    this.caustic.repeat.set(11, 11);
    const ca = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), new THREE.MeshBasicMaterial({ map: this.caustic, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
    ca.material.opacity = 0.2;
    ca.rotation.x = -Math.PI / 2;
    ca.position.set(0, 0.02, -10);
    s.add(ca);
    this.caustic2 = this.caustic.clone();
    this.caustic2.repeat.set(7, 7);
    this.caustic2.needsUpdate = true;
    const ca2 = ca.clone();
    ca2.material = ca.material.clone();
    ca2.material.map = this.caustic2;
    ca2.material.opacity = 0.14;
    ca2.position.y = 0.03;
    s.add(ca2);
    // the coral walls along both sides of the corridor
    this.weeds = [];
    const colors = [0xff6aa8, 0xff8a3a, 0xb06ae8, 0x4ad8c8, 0xffd23a, 0xff4a6a];
    for (const side of [-1, 1]) {
      const bank = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 40), mat(0xd8b884));
      bank.position.set(side * (HALF_W + 1.6), 0.4, -10);
      s.add(bank);
      for (let i = 0; i < 26; i++) {
        const z = 2 - i * 1.0 - (i % 2) * 0.4;
        const c = makeCoral(i % 4, colors[(i + (side > 0 ? 3 : 0)) % colors.length]);
        c.position.set(side * (HALF_W + 0.5 + (i % 3) * 0.6), 0.9, z);
        c.rotation.y = i * 1.3;
        c.scale.setScalar(0.9 + (i % 3) * 0.25);
        s.add(c);
        if (i % 3 === 1) {
          const w = makeSeaweed(1.6 + (i % 4) * 0.4);
          w.root.position.set(side * (HALF_W + 1.4 + (i % 2) * 0.8), 0.9, z - 0.5);
          s.add(w.root);
          this.weeds.push(w);
        }
      }
    }
    // the fortress: a wall with towers at both ends and the hero's tower in the middle
    const wall = makeWall(HALF_W * 2 + 1);
    wall.position.set(0, 0, 0.3);
    s.add(wall);
    for (const x of [-HALF_W - 0.4, HALF_W + 0.4]) {
      const tw = makeTower(1.1, 2.8);
      tw.position.set(x, 0, 0.4);
      s.add(tw);
    }
    this.wallGroup = wall;
    const heroTower = makeTower(1.15, 2.0);
    heroTower.position.set(HERO.x, 0, HERO.z);
    s.add(heroTower);
    this.hero = makeClownfish();
    this.hero.root.position.set(HERO.x, 2.75, HERO.z);
    s.add(this.hero.root);
    // the castle behind the wall (as on the card)
    const keep = makeTower(1.6, 4.2);
    keep.position.set(-3.5, 0, 4.2);
    s.add(keep);
    const keep2 = makeTower(1.3, 3.4);
    keep2.position.set(3.8, 0, 4);
    s.add(keep2);
    // the aim line: little dots
    this.aimDots = [];
    for (let i = 0; i < 16; i++) {
      const d = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }));
      s.add(d);
      this.aimDots.push(d);
    }
    // shots: one instanced draw of glowing bubbles
    this.shotMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.34, 12, 8), new THREE.MeshBasicMaterial({ color: 0x8ff0ff }), 200);
    this.shotMesh.frustumCulled = false;
    s.add(this.shotMesh);
    this.halo = new Glow(s, 500, 1.5, 0x18a8ff, true);
    this.sparks = new Glow(s, 220, 0.45, 0xfff2a0);
    this.pearls = new Glow(s, 120, 0.55, 0xc8f8ff);
    this.bubbles = new Glow(s, 90, 0.3, 0xffffff);
    this.models = new Map();
    this.shellModels = [];
    this.whirlModels = [];
    this.swirl = swirlTexture();
    this.octo = null;
    this._m = new THREE.Matrix4();
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    const aim = (e) => {
      if (!this.d) return;
      const r = root.getBoundingClientRect();
      const v = new THREE.Vector2(((e.clientX - r.left) / this.cw) * 2 - 1, -((e.clientY - r.top) / this.ch) * 2 + 1);
      this.ray.setFromCamera(v, this.camera);
      const p = new THREE.Vector3();
      if (this.ray.ray.intersectPlane(this.floor, p)) {
        this.d.aimAt(p.x, Math.min(p.z, HERO.z - 1));
        if (!this.input.aimed) { this.input.aimed = true; if (this.hud) this.hud.aim.style.opacity = '0'; }
      }
    };
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'play' || this.paused) return;
      this.input.pointer = e.pointerId;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
      aim(e);
    });
    root.addEventListener('pointermove', (e) => { if (e.pointerId === this.input.pointer && this.mode === 'play' && !this.paused) aim(e); });
    const up = (e) => { if (e.pointerId === this.input.pointer) this.input.pointer = null; };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
        if (this.d && this.d.choosing && ['1', '2', '3'].includes(k)) this._choose(this.d.choosing[Number(k) - 1]);
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'od-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _coins() {
    this.coinEl = h('span', {}, num(this.save.coins));
    return h('div', { class: 'od-pill' }, '🐚 ', this.coinEl);
  }
  _mute(style) {
    const b = h('button', { class: 'od-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
    this.toastEl = h('div', { class: 'od-toast' });
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

  showMenu() {
    this._endLevel();
    this.mode = 'menu';
    this.paused = false;
    this.sound.setMode('menu');
    this._clear();
    const nodes = LEVELS.map((lv, i) => {
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[lv.id] ?? 0;
      return h('button', {
        class: `od-node${locked ? ' lock' : ''}${i + 1 === this.save.unlocked ? ' next' : ''}`,
        'aria-label': `${t('level')} ${lv.id} ${name(lv)}`,
        title: name(lv),
        onclick: () => {
          if (locked) { this.sound.play('no'); this.toast(t('locked')); return; }
          this.startLevel(i);
        },
      }, locked ? '🔒' : num(lv.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    });
    this.layer.append(
      h('button', { class: 'od-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'od-top' }, this._coins()),
      h('div', { class: 'od-dim', style: 'background:none' },
        h('div', { class: 'od-panel' },
          h('div', { class: 'od-logo' }, '🐠 ', t('title')),
          h('div', { class: 'od-map', style: 'margin-bottom:calc(var(--u)*4)' }, nodes),
          h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
            h('button', { class: 'od-btn2 od-big', onclick: () => this.startLevel(this.save.unlocked - 1) }, '▶ ', t('play')),
            h('button', { class: 'od-btn2 wood', onclick: () => this.showShop() }, '🐚 ', t('shop'))))),
      this._mute(this._bottomEnd()),
      this._toastEl(),
    );
  }

  showShop() {
    this.mode = 'shop';
    this._clear();
    const cards = UPGRADES.map((u) => {
      const lvl = this.save.up[u.id];
      const maxed = lvl >= MAX_UP;
      const cost = upCost(lvl);
      return h('div', { class: 'od-card' },
        h('div', { class: 'ic' }, u.icon),
        h('div', { class: 'nm' }, name(u)),
        h('div', { class: 'pips' }, Array.from({ length: MAX_UP }, (_, i) => h('span', { class: `pip${i < lvl ? ' on' : ''}` }))),
        h('button', {
          class: 'od-btn2',
          disabled: maxed || this.save.coins < cost,
          onclick: () => {
            if (maxed || this.save.coins < cost) { this.sound.play('no'); this.toast(t('needMore'), 2); return; }
            this.save.coins -= cost;
            this.save.up[u.id]++;
            this.sound.play('buy');
            this._saveNow();
            this.showShop();
            this.toast(t('bought'), 1);
          },
        }, maxed ? t('max') : `🐚 ${num(cost)}`));
    });
    this.layer.append(
      h('button', { class: 'od-round', style: this._topLeft(), 'aria-label': t('back'), onclick: () => this.showMenu() }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'od-dim', style: 'background:none' },
        h('div', { class: 'od-panel' },
          h('div', { class: 'od-title' }, '🐚 ', t('shop')),
          this._coins(),
          h('div', { class: 'od-grid', style: 'grid-template-columns:repeat(3,minmax(0,1fr))' }, cards))),
      this._toastEl(),
    );
  }

  startLevel(i) {
    this._endLevel();
    this.levelIndex = i;
    this.d = new Defense({ level: i, easy: this.age <= 4, up: this.save.up, seed: (Date.now() & 0xffff) + 1 });
    this.mode = 'play';
    this.paused = false;
    this.input.aimed = false;
    this.sound.setMode('play');
    this._hud();
  }

  _endLevel() {
    if (!this.d) return;
    for (const m of this.models.values()) this.scene.remove(m.root);
    this.models.clear();
    for (const s of this.shellModels) this.scene.remove(s);
    this.shellModels = [];
    for (const w of this.whirlModels) this.scene.remove(w);
    this.whirlModels = [];
    if (this.octo) { this.scene.remove(this.octo.root); this.octo = null; }
    this.shotMesh.count = 0;
    this.d = null;
  }

  _hud() {
    this._clear();
    const lv = LEVELS[this.levelIndex];
    this.hud = {
      dots: h('div', { class: 'od-dots' }, [0, 1, 2].map(() => h('i'))),
      xp: h('i', { style: 'width:0%' }),
      xpLv: h('b', {}, num(1)),
      wall: h('i', { style: 'width:100%' }),
      wallN: h('b', {}, ''),
      boss: h('div', { class: 'od-bossbar' }, '🐙 ', t('octopus'), h('div', {}, h('i', { style: 'width:100%' }))),
      aim: h('div', { class: 'od-aimhint' }, t('aim')),
      banner: h('div', { class: 'od-banner' }),
    };
    this.layer.append(
      h('button', { class: 'od-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'od-hudtop' },
        h('div', { class: 'od-row' },
          h('div', { class: 'od-lvl' }, h('span', {}, `${t('level')} ${num(lv.id)}`), this.hud.dots),
          this._coins()),
        h('div', { class: 'od-xp' }, this.hud.xp, this.hud.xpLv)),
      this.hud.boss,
      h('div', { class: 'od-wallbar' }, h('span', {}, '🏰'), h('div', {}, this.hud.wall, this.hud.wallN)),
      this.hud.aim,
      this.hud.banner,
      this._mute(`top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
    this._hc = {};
    this.coinsAtStart = this.save.coins;
  }

  _banner(text, secs = 1.6) {
    this.hud.banner.textContent = text;
    this.hud.banner.classList.add('show');
    clearTimeout(this._bt);
    this._bt = setTimeout(() => this.hud && this.hud.banner.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.sound.suspend();
    const dim = h('div', { class: 'od-dim' }, h('div', { class: 'od-panel' },
      h('div', { class: 'od-title' }, t('paused')),
      h('button', { class: 'od-btn2', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'od-btn2 wood', onclick: () => { this.sound.resume(); this.startLevel(this.levelIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'od-btn2 wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _powerChoice(choices) {
    this.sound.play('levelUp');
    const dim = h('div', { class: 'od-dim' }, h('div', { class: 'od-panel', style: 'background:rgba(10,40,90,.85);border-color:#9fe8ff;color:#fff' },
      h('div', { class: 'od-title', style: 'color:#ffd23a' }, '✨ ', t('levelUp')),
      h('div', { class: 'od-cards' }, choices.map((id) => {
        const p = POWERS.find((x) => x.id === id);
        return h('button', { class: 'od-power', onclick: () => this._choose(id) }, h('span', { class: 'ic' }, p.icon), h('span', { class: 'nm' }, name(p)), h('span', { class: 'sb' }, p.sub[getLang() === 'en' ? 1 : 0]));
      }))));
    this.choiceDim = dim;
    this.layer.append(dim);
  }

  _choose(id) {
    if (!this.d || !this.d.choose(id)) return;
    if (this.choiceDim) { this.choiceDim.remove(); this.choiceDim = null; }
    this.sound.play(id === 'repair' ? 'repair' : 'power');
    if (id === 'repair') this.sparks.burst(0, 1.5, 0.3, 40, 5);
  }

  _results(won) {
    const d = this.d;
    const r = d.result;
    const i = this.levelIndex;
    this.mode = 'results';
    this.sound.setMode('menu');
    this.save.coins += d.coins;
    if (won) {
      const id = LEVELS[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
      if (i + 2 > this.save.unlocked && i + 1 < LEVELS.length) this.save.unlocked = i + 2;
      this.sound.play('win');
    } else this.sound.play('lose');
    this._saveNow();
    const hasNext = won && i + 1 < LEVELS.length;
    const dim = h('div', { class: 'od-dim' }, h('div', { class: 'od-panel' },
      h('div', { class: 'od-title' }, won ? t('win') : t('lose')),
      won ? h('div', { class: 'od-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))) : null,
      h('div', { class: 'od-stat' }, h('span', {}, '🐚 +', num(d.coins)), h('span', {}, '🐟 ', num(d.kills), ' ', t('kills'))),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'od-btn2', onclick: () => this.startLevel(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: won ? 'od-btn2 wood' : 'od-btn2', onclick: () => this.startLevel(i) }, '↻ ', t('again')),
        h('button', { class: 'od-btn2 wood', onclick: () => this.showShop() }, '🐚 ', t('shop')),
        h('button', { class: 'od-btn2 wood', onclick: () => this.showMenu() }, t('menu')))));
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const d = this.d;
    const k = this.input.keys;
    if (k.has('arrowleft') || k.has('a')) d.setAim(d.aim - dt * 1.6);
    if (k.has('arrowright') || k.has('d')) d.setAim(d.aim + dt * 1.6);
    const before = d.state;
    const events = d.step(dt);
    let shots = 0;
    for (const e of events) {
      switch (e.type) {
        case 'shoot': shots++; break;
        case 'hit':
          if (e.by !== 'shot' || Math.random() < 0.35) this.sound.play('hit');
          this.sparks.burst(e.x, 1, e.z, 4, 2);
          break;
        case 'kill': {
          this.sound.play('kill', d.kills);
          this.sparks.burst(e.x, 1, e.z, 16, 4);
          this.pearls.emit(e.x, 1.2, e.z, 0, 4, 2, 0.8);
          this._num(e.x, e.z, e.coin ? `+${num(e.coin)}🐚` : '');
          break;
        }
        case 'wallHit':
          this.sound.play('wallHit');
          this.shake = 0.35;
          this.sparks.burst(e.x, 1.2, 0, 20, 4);
          if (!this._warned && e.wall < d.wallMax * 0.7) { this._warned = true; this.toast(t('wallHurt'), 2.2); }
          break;
        case 'levelUp': this._powerChoice(e.choices); break;
        case 'bounce': if (Math.random() < 0.6) this.sound.play('bounce'); break;
        case 'whirl': this.sound.play('whirl'); break;
        case 'wave': this.sound.play('wave'); this._banner(`${t('wave')} ${num(e.n)}/${num(3)}`); break;
        case 'boss':
          this.sound.setMode('boss');
          this.sound.play('boss');
          this._banner(t('boss'), 2.2);
          this.hud.boss.style.display = 'block';
          this.octo = makeOctopus();
          this.octo.root.scale.setScalar(1.05);
          this.scene.add(this.octo.root);
          break;
        case 'ink': this.sound.play('ink'); break;
        case 'bossHit':
          if (Math.random() < 0.3) this.sound.play('bossHit');
          this.hud.boss.querySelector('i').style.width = `${(e.hp / e.max) * 100}%`;
          break;
        case 'bossDown':
          this.sound.play('bossDown');
          this.sparks.burst(e.x, 2, e.z, 90, 8);
          this.pearls.burst(e.x, 2, e.z, 40, 5);
          this.octoDown = 0;
          break;
        default:
      }
    }
    if (shots && (this._shotT = (this._shotT ?? 0) - dt) <= 0) { this._shotT = 0.12; this.sound.play('shoot'); }
    if (before === 'play' && d.state === 'won') setTimeout(() => this.mode === 'play' && this._results(true), 2200);
    if (before === 'play' && d.state === 'lost') setTimeout(() => this.mode === 'play' && this._results(false), 900);
    this._sync(dt, time);
  }

  _num(x, z, text) {
    if (!text) return;
    const v = new THREE.Vector3(x, 1.5, z).project(this.camera);
    const tag = h('div', { class: 'od-num', style: `left:${(v.x * 0.5 + 0.5) * this.cw - 20}px;top:${(-v.y * 0.5 + 0.5) * this.ch}px` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 700);
  }

  _model(kind) {
    if (kind === 'jelly') return makeJelly();
    if (kind === 'puffer') return makePuffer();
    if (kind === 'ink') { const g = makeInk(); return { root: g, body: g, tail: null, fins: [] }; }
    return makeEnemyFish(kind);
  }

  _sync(dt, time) {
    const d = this.d;
    // hero faces the aim, wiggles
    this.hero.root.rotation.y = -d.aim;
    this.hero.root.position.y = 2.75 + Math.sin(time * 3) * 0.08;
    this.hero.tail.rotation.y = Math.sin(time * 14) * 0.4;
    this.hero.fins.forEach((f, i) => { f.rotation.z = Math.sin(time * 10 + i) * 0.4; });
    // aim dots
    this.aimDots.forEach((m, i) => {
      const l = 1.4 + i * 1.15;
      m.position.set(HERO.x + Math.sin(d.aim) * l, 1, HERO.z - Math.cos(d.aim) * l);
      m.material.opacity = 0.75 - i * 0.04;
    });
    // shots
    this.shotMesh.count = Math.min(200, d.shots.length);
    for (let i = 0; i < this.shotMesh.count; i++) {
      const s = d.shots[i];
      this._m.makeTranslation(s.x, 1, s.z);
      this.shotMesh.setMatrixAt(i, this._m);
      this.halo.emit(s.x, 1, s.z, 0, 0, 0, 0.1);
    }
    this.shotMesh.instanceMatrix.needsUpdate = true;
    // enemies
    const seen = new Set();
    for (const e of d.enemies) {
      seen.add(e.id);
      let m = this.models.get(e.id);
      if (!m) { m = this._model(e.kind); this.scene.add(m.root); this.models.set(e.id, m); }
      m.root.position.set(e.x, 0.9 + Math.sin(e.t * 3) * 0.12, e.z);
      if (e.kind === 'jelly') {
        m.body.scale.set(1 + Math.sin(e.t * 4) * 0.08, 1 - Math.sin(e.t * 4) * 0.1, 1 + Math.sin(e.t * 4) * 0.08);
        m.tentacles.forEach((tt, i) => { tt.rotation.x = Math.sin(e.t * 4 + i) * 0.3; });
      } else if (e.kind === 'ink') m.root.rotation.y = e.t * 4;
      if (m.tail) m.tail.rotation.y = Math.sin(e.t * 12) * 0.5;
      m.fins.forEach((f, i) => { f.rotation.z = Math.sin(e.t * 9 + i) * 0.4; });
      m.root.scale.setScalar(e.flash > 0 ? 1.18 : 1);
    }
    for (const [id, m] of this.models) if (!seen.has(id)) { this.scene.remove(m.root); this.models.delete(id); }
    // shells
    while (this.shellModels.length < d.shells.length) { const s = makeShell(); this.scene.add(s); this.shellModels.push(s); }
    d.shells.forEach((s, i) => { const m = this.shellModels[i]; m.position.set(s.x, 1, s.z); m.rotation.y = time * 12; this.sparks.emit(s.x, 1, s.z, 0, 0.5, 0, 0.25); });
    // whirlpools
    while (this.whirlModels.length < d.whirls.length) {
      const w = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({ map: this.swirl, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
      w.rotation.x = -Math.PI / 2;
      this.scene.add(w);
      this.whirlModels.push(w);
    }
    this.whirlModels.forEach((w, i) => {
      const s = d.whirls[i];
      w.visible = !!s;
      if (!s) return;
      w.position.set(s.x, 0.15, s.z);
      w.scale.setScalar(s.r * Math.min(1, (3.2 - s.life) * 3) * Math.min(1, s.life * 2));
      w.rotation.z = -time * 6;
      if (Math.random() < 0.5) { const a = Math.random() * 6.28; this.bubbles.emit(s.x + Math.cos(a) * s.r * 0.8, 0.3, s.z + Math.sin(a) * s.r * 0.8, -Math.sin(a) * 2, 1, Math.cos(a) * 2, 0.6); }
    });
    // the octopus
    const b = d.boss;
    if (b && this.octo) {
      const o = this.octo;
      if (b.hp > 0) {
        o.root.position.set(b.x, Math.sin(b.t * 1.4) * 0.2, b.z);
        o.root.rotation.y = Math.sin(b.t * 0.7) * 0.15;
        o.tentacles.forEach((segs, i) => segs.forEach((s, k) => { s.rotation.x = Math.sin(b.t * 2.2 + i * 0.8 + k * 0.6) * 0.25; s.rotation.y = Math.cos(b.t * 1.6 + i + k * 0.5) * 0.2; }));
        o.body.scale.setScalar(b.flash > 0 ? 1.05 : 1);
      } else {
        this.octoDown = (this.octoDown ?? 0) + dt;
        o.root.scale.setScalar(Math.max(0.01, 1.05 * (1 - this.octoDown * 0.7)));
        o.root.rotation.y += dt * 8;
      }
    }
    // ambient
    if (Math.random() < dt * 8) this.bubbles.emit((Math.random() - 0.5) * 16, 0.2, -Math.random() * 24, 0, 1.2, 0, 3);
    this._ambient(dt, time);
    // shake
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    if (this.shake > 0) this.scene.position.set((Math.random() - 0.5) * this.shake * 0.4, 0, 0); else this.scene.position.set(0, 0, 0);
    // HUD
    const hc = this._hc;
    const wv = d.boss ? 3 : d.wave + 1;
    if (hc.wave !== wv) { hc.wave = wv; [...this.hud.dots.children].forEach((x, i) => x.classList.toggle('on', i < wv)); }
    const xpW = Math.round((d.xp / d.xpNeed) * 100);
    if (hc.xp !== xpW) { hc.xp = xpW; this.hud.xp.style.width = `${xpW}%`; }
    if (hc.xpLv !== d.xpLevel) { hc.xpLv = d.xpLevel; this.hud.xpLv.textContent = `✦ ${num(d.xpLevel)}`; }
    const wl = Math.round(d.wall);
    if (hc.wall !== wl) {
      hc.wall = wl;
      this.hud.wall.style.width = `${(d.wall / d.wallMax) * 100}%`;
      this.hud.wall.classList.toggle('low', d.wall < d.wallMax * 0.35);
      this.hud.wallN.textContent = num(wl);
    }
    const coins = this.coinsAtStart + d.coins;
    if (this.coinEl && hc.coins !== coins) { hc.coins = coins; this.coinEl.textContent = num(coins); }
  }

  _ambient(dt, time) {
    this.caustic.offset.set(time * 0.02, time * 0.013);
    this.caustic2.offset.set(-time * 0.015, time * 0.02);
    for (const w of this.weeds) w.segs.forEach((s, i) => { s.rotation.z = Math.sin(time * 1.4 + i * 0.6 + w.root.position.z) * 0.18; });
    this.halo.update(dt);
    this.sparks.update(dt);
    this.pearls.update(dt, -6);
    this.bubbles.update(dt, 0.5);
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && !this.paused && this.d && !this.d.choosing) this._playFrame(dt, time);
    else {
      this._ambient(dt, time);
      if (Math.random() < dt * 6) this.bubbles.emit((Math.random() - 0.5) * 16, 0.2, -Math.random() * 24, 0, 1.2, 0, 3);
      this.hero.root.position.y = 2.75 + Math.sin(time * 3) * 0.08;
      this.hero.tail.rotation.y = Math.sin(time * 14) * 0.4;
      if (this.mode !== 'play') this.hero.root.rotation.y = Math.sin(time * 0.8) * 0.5;
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

void TOP;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.OceanDefense = api;
export default api;
