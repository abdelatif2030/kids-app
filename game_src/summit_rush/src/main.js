// «سباق القمة» — Summit Rush. Entry: window.SummitRush.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// A 3D mountain race (portrait first, like the owner's video): the child in a red jacket and three rivals run up a
// snowy slope between pines and yellow pennants. Drag to run left/right. Boulders, snowballs and logs roll down red
// warning ladders; a hit is a wipeout (fall on the back, a heart, some ground). Gold crystals +10, nice dodge +5,
// overtake +20; blue ice pads and the tailwind orb give speed, the shield orb takes one hit. Reach the summit first
// before the 60-second clock runs out. Three races. All models and sound made in code; no network, no links.
import * as THREE from 'three';
import { Race, COURSES, HALF, RACERS, normalizeSave } from './sim.js';
import {
  LOOKS, makeRunner, poseRun, poseDown, makeBoulder, makeSnowball, makeLog, makeLadder, makeCrystal, makePad, makeOrb,
  makeShieldBubble, makePine, makeRock, makeFlag, makeArch, makeMountain, snowTexture, bankTexture, starTexture, puffTexture,
} from './models.js';
import { Sound } from './audio.js';
import { setLang, setGirl, getLang, t, num } from './i18n.js';
import { CSS, h, logo } from './ui.js';

const SLOPE = 0.16; // the run climbs 16 cm per metre
const Y = (s) => s * SLOPE;

class Game {
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
    this.sound.muted = this.save.muted;
    if (!document.getElementById('sr-style')) document.head.append(h('style', { id: 'sr-style' }, CSS));
    this.root = h('div', { class: 'sr-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.root.append(this.renderer.domElement);
    this.layer = h('div', { class: 'sr-layer' });
    this.root.append(this.layer);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd8dcf0);
    this.scene.fog = new THREE.Fog(0xd8dcf0, 38, 120);
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 400);
    this.scene.add(new THREE.HemisphereLight(0xf2f4ff, 0x8a90b8, 1.7));
    const sun = new THREE.DirectionalLight(0xfff4e8, 2.1);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 18, bottom: -10, near: 1, far: 60 });
    this.sun = sun;
    this.scene.add(sun, sun.target);
    this.starTex = starTexture();
    this.puffTex = puffTexture();
    this.fx = [];
    this.floaters = [];
    this.runners = LOOKS.map((lk) => { const r = makeRunner(lk); this.scene.add(r.root); return r; });
    this.bubble = makeShieldBubble();
    this.bubble.visible = false;
    this.scene.add(this.bubble);
    this.snow = this._snowfall();
    this.portraits = LOOKS.map((lk) => this._portrait(lk));
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._bind();
    this.clock = new THREE.Clock();
    this._fonts().then(() => this.showMenu(Math.min(this.save.unlocked, COURSES.length) - 1));
    this._loop();
  }

  async _fonts() {
    try {
      const faces = [new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }), new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' })];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) { /* system font */ }
  }

  _resize() {
    const r = this.el.getBoundingClientRect();
    this.w = r.width || window.innerWidth;
    this.h = r.height || window.innerHeight;
    this.u = Math.min(this.w, this.h) / 100;
    this.root.style.setProperty('--u', `${this.u}px`);
    this.root.classList.toggle('land', this.w > this.h * 1.1);
    this.renderer.setSize(this.w, this.h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = this.w / this.h;
    this.camera.fov = this.camera.aspect < 1 ? 62 : 50;
    this.camera.updateProjectionMatrix();
  }

  /** A small picture of each racer for the cards at the bottom (rendered once from its 3D model). */
  _portrait(look) {
    const size = 160;
    const rt = new THREE.WebGLRenderTarget(size, size * 1.25, { samples: 4 });
    rt.texture.colorSpace = THREE.SRGBColorSpace;
    const sc = new THREE.Scene();
    sc.add(new THREE.HemisphereLight(0xffffff, 0x8a8ab8, 2.2));
    const dl = new THREE.DirectionalLight(0xffffff, 1.6);
    dl.position.set(1, 2, 3);
    sc.add(dl);
    const r = makeRunner(look);
    poseRun(r, 0, 0);
    r.arms[0].sh.rotation.z = -0.35;
    r.arms[1].sh.rotation.z = 0.35;
    r.root.rotation.y = 0.25;
    sc.add(r.root);
    const cam = new THREE.PerspectiveCamera(30, 0.8, 0.1, 20);
    cam.position.set(0, 1.72, 2.2);
    cam.lookAt(0, 1.6, 0);
    const old = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(rt);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.clear();
    this.renderer.render(sc, cam);
    const px = new Uint8Array(size * size * 1.25 * 4);
    this.renderer.readRenderTargetPixels(rt, 0, 0, size, size * 1.25, px);
    this.renderer.setRenderTarget(old);
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size * 1.25;
    const g = c.getContext('2d');
    const img = g.createImageData(size, size * 1.25);
    // flip rows (WebGL reads bottom-up)
    for (let y = 0; y < size * 1.25; y++) img.data.set(px.subarray((size * 1.25 - 1 - y) * size * 4, (size * 1.25 - y) * size * 4), y * size * 4);
    g.putImageData(img, 0, 0);
    rt.dispose();
    return c.toDataURL();
  }

  // ---- the mountain -----------------------------------------------------------------------------------------------

  _buildWorld(course) {
    if (this.world) { this.scene.remove(this.world); this.world.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    const w = (this.world = new THREE.Group());
    this.scene.add(w);
    const len = course.len + 120;
    const tilt = Math.atan(SLOPE);
    const plen = len / Math.cos(tilt);
    // the run (trampled snow with tracks) and the deep snow banks on both sides
    const run = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2 + 1.2, plen), new THREE.MeshStandardMaterial({ map: snowTexture(), roughness: 0.95 }));
    run.material.map.repeat.set(1, plen / 14);
    run.rotation.x = -Math.PI / 2 + tilt;
    run.position.set(0, Y(len / 2 - 40), -(len / 2 - 40));
    run.receiveShadow = true;
    w.add(run);
    for (const s of [-1, 1]) {
      const bank = new THREE.Mesh(new THREE.PlaneGeometry(40, plen), new THREE.MeshStandardMaterial({ map: bankTexture(), roughness: 1 }));
      bank.material.map.repeat.set(4, plen / 20);
      bank.rotation.x = -Math.PI / 2 + tilt;
      bank.position.set(s * (HALF + 0.6 + 19.6), Y(len / 2 - 40) + 0.35, -(len / 2 - 40));
      bank.receiveShadow = true;
      w.add(bank);
    }
    // pines, rocks and pennants along the edges
    let seed = course.id * 101;
    const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let s = -30; s < len; s += 5 + r() * 6) {
      for (const side of [-1, 1]) {
        if (r() < 0.75) {
          const p = makePine(0.9 + r() * 0.8);
          const x = side * (HALF + 2.5 + r() * 10);
          p.position.set(x, Y(s) + Math.abs(x) * 0.12, -s);
          w.add(p);
        }
        if (r() < 0.2) {
          const rk = makeRock(0.5 + r() * 0.6, s);
          rk.position.set(side * (HALF + 1.3 + r() * 2), Y(s) + 0.15, -s);
          w.add(rk);
        }
      }
    }
    for (let s = 6; s < course.len + 10; s += 16) {
      for (const side of [-1, 1]) {
        const f = makeFlag(0xe8b02a);
        f.position.set(side * (HALF + 0.9), Y(s), -s);
        if (side > 0) f.userData.flag.scale.x = -1;
        w.add(f);
      }
    }
    // checkpoint lines across the run (soft yellow, as in the video)
    for (const cs of this.race.lay.checks) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2 + 1, 0.22), new THREE.MeshBasicMaterial({ color: 0xffc83a, transparent: true, opacity: 0.55, depthWrite: false }));
      l.rotation.x = -Math.PI / 2 + tilt;
      l.position.set(0, Y(cs) + 0.03, -cs);
      w.add(l);
    }
    // the summit: an arch with a checkered banner, then a flat top with flags
    const arch = makeArch(HALF * 2 + 1.2);
    arch.position.set(0, Y(course.len), -course.len);
    w.add(arch);
    // far mountains
    for (let i = 0; i < 9; i++) {
      const m = makeMountain(28 + r() * 30, 40 + r() * 40, i);
      m.position.set((i - 4) * 45 + (r() - 0.5) * 20, Y(course.len) - 10, -course.len - 70 - r() * 60);
      w.add(m);
    }
    // pick-ups
    this.crystalMeshes = this.race.lay.crystals.map((cr) => {
      const m = makeCrystal();
      m.position.set(cr.x, Y(cr.s) + 0.75, -cr.s);
      w.add(m);
      return m;
    });
    for (const p of this.race.lay.pads) {
      const m = makePad();
      m.rotation.x = -Math.PI / 2 + tilt;
      m.position.set(p.x, Y(p.s) + 0.03, -p.s);
      w.add(m);
    }
    this.orbMeshes = this.race.lay.orbs.map((o) => {
      const m = makeOrb(o.kind);
      m.position.set(o.x, Y(o.s) + 1, -o.s);
      w.add(m);
      return m;
    });
    this.hazMeshes = new Map();
  }

  _snowfall() {
    const n = 500;
    const g = new THREE.BufferGeometry();
    const p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { p[i * 3] = (Math.random() - 0.5) * 40; p[i * 3 + 1] = Math.random() * 20; p[i * 3 + 2] = -Math.random() * 50; }
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.85, depthWrite: false }));
    this.scene.add(pts);
    return pts;
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    let drag = null;
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.sr-dim') || e.target.closest('.sr-chips')) return;
      drag = { x: e.clientX, want: this.race ? this.race.me.want : 0 };
      if (this.mode === 'menu') this._startRace();
    });
    root.addEventListener('pointermove', (e) => {
      if (!drag || !this.race || this.race.state === 'count' && this.mode !== 'race') return;
      const span = Math.min(this.w, this.h * 0.75) * 0.5; // half a phone width = half the run
      this.race.steer(drag.want + ((e.clientX - drag.x) / span) * HALF);
      if (this.hint) { this.hint.remove(); this.hint = null; }
    });
    const up = () => { drag = null; };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      if (!this.race || this.mode !== 'race') {
        if (this.mode === 'menu' && (e.key === 'Enter' || e.key === ' ')) this._startRace();
        return;
      }
      if (e.key === 'ArrowLeft') this.race.steer(this.race.me.want - 1.8);
      else if (e.key === 'ArrowRight') this.race.steer(this.race.me.want + 1.8);
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    this._onVis = () => { if (document.hidden) this.sound.suspend(); else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'sr-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => { this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden ? 'block' : 'none'; }, 700);
  }

  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }

  _soundBtn() {
    const b = h('button', { class: 'sr-round', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
    b.addEventListener('click', (e) => { e.stopPropagation(); this.sound.unlock(); this.sound.setMuted(!this.sound.muted); this.save.muted = this.sound.muted; this._saveNow(); b.textContent = this.sound.muted ? '🔇' : '🔊'; });
    return b;
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  /** The menu is the live start line (as in the video): logo, "drag to run", the race chips. */
  showMenu(ci) {
    this.mode = 'menu';
    this.ci = ci;
    this.race = new Race(ci, { easy: this.easy, seed: Math.floor(Math.random() * 1e6) });
    this._buildWorld(this.race.course);
    this._clearHaz();
    this.sound.setMode('menu');
    this.layer.replaceChildren();
    this._hud();
    const chips = h('div', { class: 'sr-chips' }, COURSES.map((c, i) => {
      const locked = c.id > this.save.unlocked;
      const best = this.save.best[c.id];
      return h('button', { class: `sr-chip${i === ci ? ' on' : ''}${locked ? ' lock' : ''}`, onclick: (e) => { e.stopPropagation(); if (locked) { this._float(t('locked'), 'pill'); return; } this.sound.play('tap'); this.showMenu(i); } },
        locked ? '🔒 ' : best ? `${['🥇', '🥈', '🥉', '🏅'][best - 1]} ` : '', t(`c${c.id}`));
    }));
    this.layer.append(
      h('div', { class: 'sr-logo-wrap' }, logo(t('title'), t('tagline'))),
      chips,
      (this.hint = h('div', { class: 'sr-drag' }, h('span', { class: 'sr-hand' }, '👆'), t('drag'))),
      h('button', { class: 'sr-round sr-exit', 'aria-label': t('exit'), onclick: (e) => { e.stopPropagation(); this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
    );
    if (this.easy) this.layer.append(h('div', { class: 'sr-easy' }, '🌟 ', t('easy')));
  }

  _startRace() {
    if (this.mode !== 'menu') return;
    this.mode = 'race';
    this.sound.setMode('race');
    this.streak = 0;
    this.lastCrystalT = -9;
    for (const n of [...this.layer.querySelectorAll('.sr-logo-wrap,.sr-chips,.sr-easy,.sr-exit')]) n.remove();
    this._big(num(3), 'count');
    this.sound.play('count');
  }

  /** The top bar (sound, hearts, progress with the racers, the clock) and the four racer cards. */
  _hud() {
    const race = this.race;
    this.hudEl = {};
    const marks = race.lay.checks.map((c) => h('i', { class: 'sr-tick', style: `${getLang() === 'en' ? 'left' : 'right'}:${(c / race.course.len) * 100}%` }));
    const dots = RACERS.map((rc, i) => h('b', { class: `sr-pdot${i === 0 ? ' me' : ''}`, style: `background:${LOOKS[i].card[0]}` }));
    this.hudEl.dots = dots;
    this.hudEl.hearts = h('div', { class: 'sr-hearts' });
    this.hudEl.clock = h('div', { class: 'sr-clock' }, h('i'), h('span'));
    this.hudEl.clock.firstChild.innerHTML = '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="rgba(30,30,60,.55)" stroke="rgba(255,255,255,.35)" stroke-width="4"/><circle class="sr-ring" cx="20" cy="20" r="16" fill="none" stroke="#ff8a2a" stroke-width="4" stroke-linecap="round" transform="rotate(-90 20 20)" stroke-dasharray="100.5" stroke-dashoffset="0"/></svg>';
    this.layer.append(h('div', { class: 'sr-top' },
      h('div', { class: 'sr-left' }, this._soundBtn(), this.hudEl.hearts),
      h('div', { class: 'sr-track' }, h('div', { class: 'sr-line' }, marks, h('i', { class: 'sr-flagend' }, '🏁'), dots)),
      this.hudEl.clock));
    this.hudEl.cards = RACERS.map((rc, i) => {
      const badge = h('div', { class: 'sr-badge' });
      const score = h('div', { class: 'sr-score' });
      const you = i === 0 ? h('div', { class: 'sr-you' }, t('you')) : null;
      const card = h('div', { class: `sr-card${i === 0 ? ' me' : ''}`, style: `background:linear-gradient(180deg,${LOOKS[i].card[0]},${LOOKS[i].card[1]})` }, badge, h('img', { src: this.portraits[i], alt: '' }), score, you);
      return { card, badge, score };
    });
    this.layer.append(h('div', { class: 'sr-cards' }, this.hudEl.cards.map((c) => c.card)));
    this._updateHud(true);
  }

  _updateHud(force) {
    const race = this.race;
    if (!race || !this.hudEl) return;
    const me = race.me;
    const hearts = this.easy ? 3 : me.lives;
    if (force || this._lastHearts !== hearts) {
      this._lastHearts = hearts;
      this.hudEl.hearts.replaceChildren(...[0, 1, 2].map((i) => h('span', { class: i < hearts ? '' : 'off' }, '♥')));
    }
    const rem = Math.ceil(race.remaining);
    this.hudEl.clock.lastChild.textContent = num(rem);
    this.hudEl.clock.querySelector('.sr-ring').setAttribute('stroke-dashoffset', String(100.5 * (1 - race.remaining / race.time)));
    this.hudEl.clock.classList.toggle('low', rem <= 10 && race.state === 'run');
    const side = getLang() === 'en' ? 'left' : 'right';
    race.runners.forEach((rn, i) => {
      this.hudEl.dots[i].style[side] = `${Math.min(1, rn.s / race.course.len) * 100}%`;
      const c = this.hudEl.cards[i];
      const rank = race.rankOf(rn);
      c.badge.textContent = t(`p${rank}`);
      c.badge.classList.toggle('gold', rank === 1);
      c.score.textContent = num(rn.score);
      c.card.classList.toggle('down', rn.down > 0);
      c.card.style.order = String(rank);
    });
  }

  /** Big centre text: the countdown, GO. */
  _big(text, kind) {
    const e = h('div', { class: `sr-big ${kind}` }, text);
    this.layer.append(e);
    setTimeout(() => e.remove(), 900);
  }

  /** The labels of the video (NICE DODGE!, OVERTAKE!, TAILWIND!, SHIELD!, WIPEOUT). */
  _float(text, kind = 'word') {
    const e = h('div', { class: `sr-word ${kind}` }, text);
    this.layer.append(e);
    setTimeout(() => e.remove(), 1300);
  }

  /** "+10" rising from a point in the world. */
  _plus(text, pos) {
    const e = h('div', { class: 'sr-plus' }, text);
    this.layer.append(e);
    this.floaters.push({ e, pos: pos.clone(), t: 0 });
  }

  _sparkle(pos, n = 10, color = 0xffffff) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, color, transparent: true, depthWrite: false }));
      s.position.copy(pos);
      const a = Math.random() * Math.PI * 2;
      s.userData = { v: new THREE.Vector3(Math.cos(a) * 1.6, 1 + Math.random() * 2, Math.sin(a) * 1.2), life: 0.7 + Math.random() * 0.3, size: 0.18 + Math.random() * 0.2 };
      s.scale.setScalar(s.userData.size);
      this.scene.add(s);
      this.fx.push(s);
    }
  }

  _puff(pos, n = 8, size = 0.8) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.puffTex, transparent: true, depthWrite: false }));
      s.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.8, Math.random() * 0.4, (Math.random() - 0.5) * 0.8));
      s.userData = { v: new THREE.Vector3((Math.random() - 0.5) * 1.5, 0.6 + Math.random(), (Math.random() - 0.5) * 1.5), life: 0.8, size, grow: true };
      s.scale.setScalar(size);
      this.scene.add(s);
      this.fx.push(s);
    }
  }

  // ---- race events ----------------------------------------------------------------------------------------------

  _events(evs) {
    const me = this.race.me;
    const mePos = new THREE.Vector3(me.x, Y(me.s) + 1.2, -me.s);
    for (const e of evs) {
      switch (e.type) {
        case 'count': this._big(num(e.n), 'count'); this.sound.play('count'); break;
        case 'go': this._big(t('go'), 'go'); this.sound.play('go'); if (this.hint) { this.hint.remove(); this.hint = null; } break;
        case 'crystal': {
          const now = this.race.t;
          this.streak = now - this.lastCrystalT < 0.6 ? this.streak + 1 : 0;
          this.lastCrystalT = now;
          this.sound.play('crystal', this.streak);
          const p = new THREE.Vector3(e.x, Y(e.s) + 0.8, -e.s);
          this._sparkle(p, 6, 0xffe27a);
          this._sparkle(mePos, 4);
          this._plus(`+${num(10)}`, p);
          break;
        }
        case 'dodge': this._float(t('dodge')); this.sound.play('dodge'); this._sparkle(mePos, 12); this._plus(`+${num(5)}`, mePos); break;
        case 'overtake': this._float(t('overtake')); this.sound.play('overtake'); this._plus(`+${num(20)}`, mePos); break;
        case 'boost': this.sound.play('boost'); this._puff(mePos.clone().setY(mePos.y - 1), 6, 0.6); break;
        case 'tailwind': this._float(t('tailwind'), 'wind'); this.sound.play('tailwind'); this._puff(mePos, 10, 1); break;
        case 'shield': this._float(t('shield'), 'shield'); this.sound.play('shield'); break;
        case 'blocked': this._float(t('blocked'), 'shield'); this.sound.play('blocked'); this._sparkle(mePos, 14, 0xcfe8ff); break;
        case 'wipeout':
          this._float(t('wipeout'), 'pill');
          this.sound.play('wipeout');
          if (!this.easy) this.sound.play('heart');
          this._puff(mePos.clone().setY(mePos.y - 0.8), 12, 1);
          this.shake = 0.45;
          break;
        case 'up': this.sound.play('up'); break;
        case 'summit': this.sound.play('summit'); break;
        case 'finish': setTimeout(() => this._winCard(e.place), 1200); break;
        case 'out': this.sound.play('lose'); setTimeout(() => this._loseCard('out'), 900); break;
        case 'timeup': this.sound.play('lose'); setTimeout(() => this._loseCard('time'), 600); break;
        default:
      }
    }
  }

  _winCard(place) {
    this.mode = 'end';
    this.sound.setMode('end');
    const c = this.race.course;
    const best = this.save.best[c.id];
    if (!best || place < best) this.save.best[c.id] = place;
    if (c.id + 1 > this.save.unlocked && c.id < COURSES.length) this.save.unlocked = c.id + 1;
    const got = this.race.lay.crystals.filter((x) => x.got).length;
    this.save.crystals = Math.min(999999, this.save.crystals + got);
    this._saveNow();
    const last = this.ci + 1 >= COURSES.length;
    this.layer.append(h('div', { class: 'sr-dim' }, h('div', { class: 'sr-card-end' },
      logo(t('title'), t(`c${c.id}`), true),
      h('div', { class: 'sr-medal' }, ['🥇', '🥈', '🥉', '🏅'][place - 1]),
      h('div', { class: 'sr-endtitle' }, t('summit')),
      h('div', { class: 'sr-endsub' }, place === 1 ? t('win1') : t('winN')),
      h('div', { class: 'sr-stats' },
        h('div', {}, h('small', {}, t('place')), h('b', {}, t(`p${place}`))),
        h('div', {}, h('small', {}, t('score')), h('b', {}, num(this.race.me.score))),
        h('div', {}, h('small', {}, t('crystals')), h('b', {}, '💎 ', num(got)))),
      last ? null : h('button', { class: 'sr-btn', onclick: () => this.showMenu(this.ci + 1) }, t('next'), ' ▶'),
      h('button', { class: `sr-btn${last ? '' : ' alt'}`, onclick: () => this.showMenu(this.ci) }, '↻ ', t('again')),
      h('button', { class: 'sr-btn alt', onclick: () => this.showMenu(this.ci) }, t('courses')))));
  }

  _loseCard(why) {
    this.mode = 'end';
    this.sound.setMode('end');
    this.layer.append(h('div', { class: 'sr-dim' }, h('div', { class: 'sr-card-end' },
      logo(t('title'), t(`c${this.race.course.id}`), true),
      h('div', { class: 'sr-medal' }, why === 'out' ? '❄️' : '⏱️'),
      h('div', { class: 'sr-endtitle' }, why === 'out' ? t('outTitle') : t('timeTitle')),
      h('div', { class: 'sr-endsub' }, why === 'out' ? t('outText') : t('timeText')),
      h('div', { class: 'sr-stats' },
        h('div', {}, h('small', {}, t('score')), h('b', {}, num(this.race.me.score))),
        h('div', {}, h('small', {}, t('crystals')), h('b', {}, '💎 ', num(this.race.lay.crystals.filter((x) => x.got).length)))),
      h('button', { class: 'sr-btn', onclick: () => this.showMenu(this.ci) }, '↻ ', t('again')))));
  }

  // ---- frame --------------------------------------------------------------------------------------------------------

  _clearHaz() {
    if (!this.hazMeshes) return;
    for (const m of this.hazMeshes.values()) { this.world.remove(m.root); this.world.remove(m.ladder); }
    this.hazMeshes.clear();
  }

  _syncHazards(time) {
    const race = this.race;
    const tilt = Math.atan(SLOPE);
    const live = new Set();
    let closest = 0;
    for (const hz of race.hazards) {
      live.add(hz.id);
      let m = this.hazMeshes.get(hz.id);
      if (!m) {
        m = hz.kind === 'log' ? makeLog(hz.half, hz.r) : hz.kind === 'boulder' ? makeBoulder(hz.r, hz.id) : makeSnowball(hz.r, hz.id);
        m.ladder = makeLadder(hz.kind === 'log' ? hz.half * 2 + 0.4 : hz.r * 2 + 0.3);
        m.ladder.rotation.x = -Math.PI / 2 + tilt;
        this.world.add(m.root, m.ladder);
        this.hazMeshes.set(hz.id, m);
      }
      m.root.position.set(hz.x, Y(hz.s) + hz.r, -hz.s);
      if (hz.kind === 'log') {
        m.spin.rotation.x = -hz.roll;
        const b = Math.abs(Math.sin(hz.roll * 0.5));
        m.root.position.y += b * 0.15;
        if (b < 0.06 && !m.knock && Math.abs(hz.s - race.me.s) < 30) { m.knock = true; this.sound.play('log'); }
        if (b > 0.5) m.knock = false;
      } else m.spin.rotation.x = -hz.roll;
      // the red ladder: from the rolling thing down the slope (where it will roll)
      const L = Math.max(2, Math.min(26, hz.s - race.me.s + 6));
      m.ladder.scale.set(1, L, 1);
      m.ladder.material.map.repeat.set(1, L / 14);
      m.ladder.position.set(hz.x, Y(hz.s - L / 2) + 0.025, -(hz.s - L / 2));
      m.ladder.visible = hz.s > race.me.s - 2;
      const d = hz.s - race.me.s;
      if (d > -3 && d < 22) closest = Math.max(closest, (1 - Math.max(0, d) / 22) * (Math.abs(hz.x - race.me.x) < 3 ? 1 : 0.4));
    }
    for (const [id, m] of this.hazMeshes) if (!live.has(id)) { this.world.remove(m.root, m.ladder); m.ladder.material.map.dispose(); m.ladder.material.dispose(); this.hazMeshes.delete(id); }
    return closest;
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    const race = this.race;
    if (!race) { this.renderer.render(this.scene, this.camera); return; }
    if (this.mode === 'race' || this.mode === 'end') this._events(race.step(dt));
    const rumble = this._syncHazards(time);
    // runners
    race.runners.forEach((rn, i) => {
      const r = this.runners[i];
      const y = Y(rn.s);
      r.root.position.set(rn.x, y, -rn.s);
      r.root.rotation.y = Math.PI + (rn.want - rn.x) * -0.12;
      const moving = this.mode !== 'menu' && race.state !== 'count' && rn.down <= 0 && !(rn.finished && rn.s >= race.course.len + 3);
      if (rn.down > 0) {
        rn._fall = (rn._fall || 0) + dt;
        poseDown(r, rn._fall);
      } else {
        rn._fall = 0;
        rn._ph = (rn._ph || i) + dt * (moving ? 11 * (rn.boost > 0 ? 1.3 : 1) : 0);
        poseRun(r, rn._ph, moving ? 1 : 0.05);
        if (rn.me && moving) {
          const stepNow = Math.floor(rn._ph / Math.PI);
          if (stepNow !== this._lastStep) { this._lastStep = stepNow; this.sound.play('step', rn.boost > 0 ? 1 : 0); }
        }
      }
      // blink while safe after getting up
      r.root.visible = !(rn.safe > 0 && Math.floor(time * 12) % 2 === 0);
    });
    const me = race.me;
    this.bubble.visible = me.shield > 0;
    this.bubble.position.set(me.x, Y(me.s) + 0.95, -me.s);
    this.bubble.material.opacity = 0.25 + Math.sin(time * 6) * 0.08;
    // tailwind puffs around the runner
    if (me.wind > 0 && Math.random() < dt * 14) this._puff(new THREE.Vector3(me.x, Y(me.s) + 0.4, -me.s + 0.4), 1, 0.7);
    if (me.boost > 0 && Math.random() < dt * 20) this._sparkle(new THREE.Vector3(me.x, Y(me.s) + 0.2, -me.s + 0.3), 1, 0x9aeaff);
    // pick-ups spin
    this.crystalMeshes.forEach((m, i) => {
      const cr = race.lay.crystals[i];
      m.visible = !cr.got && cr.s > me.s - 6 && cr.s < me.s + 90;
      if (m.visible) { m.rotation.y = time * 2.4 + i; m.position.y = Y(cr.s) + 0.75 + Math.sin(time * 3 + i) * 0.08; }
    });
    this.orbMeshes.forEach((m, i) => {
      const o = race.lay.orbs[i];
      m.visible = !o.got;
      m.userData.ring.rotation.set(time * 2, time * 1.3, 0);
      m.userData.halo.scale.setScalar(1 + Math.sin(time * 4) * 0.12);
    });
    // camera: behind and above, looking up the slope (portrait: a little higher and closer, as in the video)
    const port = this.camera.aspect < 1;
    const my = Y(me.s);
    const back = port ? 7 : 7.8;
    const up = port ? 5.4 : 4.6;
    const want = new THREE.Vector3(me.x * 0.8, my + up, -me.s + back);
    if (this.mode === 'menu') want.set(me.x * 0.5, my + (port ? 3.2 : 3), -me.s + (port ? 6 : 7));
    if (!this.camPos) this.camPos = want.clone();
    this.camPos.lerp(want, Math.min(1, dt * 5));
    this.camera.position.copy(this.camPos);
    if (this.shake > 0) { this.shake -= dt; this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.5; this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.4; }
    this.camera.lookAt(me.x * 0.75, my + (port ? 1.2 : 1.4), -me.s - 7);
    const fovWant = (port ? 62 : 50) + (me.boost > 0 || me.wind > 0 ? 6 : 0);
    if (Math.abs(this.camera.fov - fovWant) > 0.05) { this.camera.fov += (fovWant - this.camera.fov) * Math.min(1, dt * 4); this.camera.updateProjectionMatrix(); }
    // sun follows
    this.sun.position.set(me.x - 6, my + 16, -me.s + 6);
    this.sun.target.position.set(me.x, my, -me.s - 6);
    // snow falls around the camera
    const sp = this.snow.geometry.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      let y = sp.getY(i) - dt * 1.4;
      if (y < -2) y = 18;
      sp.setY(i, y);
      sp.setX(i, sp.getX(i) + Math.sin(time + i) * dt * 0.2);
    }
    sp.needsUpdate = true;
    this.snow.position.set(me.x, my - 2, -me.s - 8);
    // particles
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const s = this.fx[i];
      const u = s.userData;
      u.life -= dt;
      s.position.addScaledVector(u.v, dt);
      u.v.y -= (u.grow ? 0.5 : 3) * dt;
      s.material.opacity = Math.max(0, u.life * 1.4);
      if (u.grow) s.scale.setScalar(u.size * (1 + (0.8 - u.life)));
      if (u.life <= 0) { this.scene.remove(s); s.material.dispose(); this.fx.splice(i, 1); }
    }
    // "+10" floaters follow their spot on screen and rise
    for (let i = this.floaters.length - 1; i >= 0; i--) {
      const f = this.floaters[i];
      f.t += dt;
      const p = f.pos.clone().project(this.camera);
      f.e.style.left = `${(p.x * 0.5 + 0.5) * this.w}px`;
      f.e.style.top = `${(-p.y * 0.5 + 0.5) * this.h - f.t * this.u * 14}px`;
      f.e.style.opacity = String(Math.max(0, 1 - f.t / 1.1));
      if (f.t > 1.1) { f.e.remove(); this.floaters.splice(i, 1); }
    }
    this.sound.setRun(this.mode === 'race' && race.state === 'run' && me.down <= 0 ? (me.boost > 0 ? 1.4 : me.wind > 0 ? 1.2 : 0.8) : 0.2, this.mode === 'race' ? rumble : 0);
    this._updateHud();
    this.renderer.render(this.scene, this.camera);
  }

  pause() { this.sound.suspend(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    clearInterval(this._pill);
    window.removeEventListener('keydown', this._onKey);
    document.removeEventListener('visibilitychange', this._onVis);
    this.sound.dispose();
    if (this.ro) this.ro.disconnect();
    this.renderer.dispose();
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
window.SummitRush = api;
export default api;
