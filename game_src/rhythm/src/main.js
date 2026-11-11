// «البقاء على الإيقاع» — Rhythm Survival. Entry: window.RhythmSurvival.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// The bear with headphones and eleven plush friends on a giant spinning record in a retro diner: hop the low bars,
// duck the high ones, keep off the gaps and the tonearm, bump rivals, and still be on the record when the song ends.
// No network, no links, no ads, no tracking. Everything drawn and played from code.
import * as THREE from 'three';
import { Show, TRACKS, ANIMALS, R, normalizeSave } from './sim.js';
import { mat, makeAnimal, addHeadphones, recordTexture, makeBar, makeTonearm, makeDeck, makeDiner } from './models.js';
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
const FACE = { bear: '🐻', bunny: '🐰', fox: '🦊', cat: '🐱', raccoon: '🦝', panda: '🐼', sheep: '🐑', chick: '🐤', frog: '🐸', mouse: '🐭', pig: '🐷', koala: '🐨' };
const JUMP_T = 0.62;

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
    if (!document.getElementById('rh-style')) document.head.append(h('style', { id: 'rh-style', text: CSS + CSS2 + CSS3 }));
    this.root = h('div', { class: 'rh-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._unit();
    if (!webglOk()) {
      this.root.append(h('div', { class: 'rh-loading' }, h('div', {}, t('noWebgl'), ' ', h('button', { class: 'rh-btn2', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'rh-loading' }, t('loading'));
    this.root.append(this.loading);
    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'rh-layer' });
    this.root.append(this.layer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 200);
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
  }

  _resize() {
    this._unit();
    if (!this.renderer) return;
    this.renderer.setSize(this.cw, this.ch, false);
    this.camera.aspect = this.cw / this.ch;
    const portrait = this.cw < this.ch;
    this.camera.fov = portrait ? 62 : 46;
    this.camera.updateProjectionMatrix();
    if (portrait) this.camera.position.set(0, 21, 10.5); else this.camera.position.set(0, 15.5, 11.5);
    this.camera.lookAt(0, 0, portrait ? 1.2 : 0.8);
  }

  // ---- the diner -----------------------------------------------------------------------------------------------------

  _buildWorld() {
    const s = (this.scene = new THREE.Scene());
    s.background = new THREE.Color(0xf2dcc0);
    s.add(new THREE.HemisphereLight(0xfff8ee, 0x8a7a6a, 1.9));
    const sun = new THREE.DirectionalLight(0xfff0e0, 1.3);
    sun.position.set(-6, 22, 10);
    s.add(sun);
    s.add(makeDiner());
    s.add(makeDeck(R));
    this.record = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.24, 96), [
      mat(0x18181c),
      new THREE.MeshLambertMaterial({ map: recordTexture() }),
      mat(0x18181c),
    ]);
    this.record.position.y = -0.12;
    s.add(this.record);
    // the spindle cap
    s.add(new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.7, 24), mat(0xc8a030)));
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.6, 24), mat(0xe8342a));
    cap.position.y = 0.5;
    s.add(cap);
    this.tonearm = makeTonearm();
    this.tonearm.position.set(R + 2.5, 0, -R + 1);
    s.add(this.tonearm);
    this.animalModels = [];
    this.shadows = [];
    this.barModels = [];
    this.gapModels = [];
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.56, 28), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.9, depthWrite: false }));
    this.ring.rotation.x = -Math.PI / 2;
    s.add(this.ring);
  }

  _setup(show) {
    for (const m of this.animalModels) this.scene.remove(m.root);
    for (const m of this.shadows) this.scene.remove(m);
    for (const b of this.barModels) this.scene.remove(b);
    for (const g of this.gapModels) this.scene.remove(g.group);
    this.animalModels = [];
    this.shadows = [];
    this.barModels = [];
    this.gapModels = [];
    show.animals.forEach((a, k) => {
      const m = makeAnimal(a.kind);
      if (k === 0) addHeadphones(m);
      m.root.scale.setScalar(0.85);
      this.scene.add(m.root);
      this.animalModels.push(m);
      const sh = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false }));
      sh.rotation.x = -Math.PI / 2;
      this.scene.add(sh);
      this.shadows.push(sh);
    });
    for (const arm of show.arms) {
      const g = makeBar(R - 1.0, arm.type === 'high');
      this.scene.add(g);
      this.barModels.push(g);
    }
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.root;
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) root.addEventListener(ev, () => this.sound.unlock(), { capture: true, passive: true });
    this.joy = h('div', { class: 'rh-joy' }, h('i'));
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
      const max = this.u * 12;
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
      this._joyHome();
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    root.addEventListener('click', (e) => { if (e.target.closest('button') && !e.target.closest('.rh-cbtn')) this.sound.play('tap'); }, true);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        this.input.keys.add(k);
        if (this.mode === 'play' && (k === 'escape' || k === 'p')) this.pause();
        if (this.mode === 'play' && (k === ' ' || k === 'w' || k === 'arrowup') && !e.repeat && this.show) { this.show.jump(); e.preventDefault(); }
        if (this.mode === 'play' && (k === 'shift' || k === 's' || k === 'arrowdown') && this.show) { this.show.duck(); e.preventDefault(); }
      } else this.input.keys.delete(k);
      if (this.mode === 'play' && k.startsWith('arrow')) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
    this._onVis = () => {
      if (document.hidden) { if (this.mode === 'play') this.pause(); this.sound.suspend(); } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);
    this.soundPill = h('button', { class: 'rh-soundpill', onclick: (e) => { e.stopPropagation(); this.sound.unlock(); } }, t('sound'));
    root.append(this.soundPill);
    this._tapped = false;
    root.addEventListener('pointerup', () => { this._tapped = true; }, true);
    this._pill = setInterval(() => {
      this.soundPill.style.display = this._tapped && !this.sound.muted && !this.sound.on && !document.hidden && !this.paused ? 'block' : 'none';
    }, 700);
  }

  _joyHome() {
    if (!this.joy) return;
    this.joy.style.display = this.mode === 'play' ? 'block' : 'none';
    this.joy.style.left = `${getLang() === 'en' ? this.u * 18 : this.cw - this.u * 18}px`;
    this.joy.style.top = `${this.ch - this.u * 18}px`;
    this.joy.firstChild.style.transform = 'translate(0,0)';
  }

  _readInput() {
    const k = this.input.keys;
    let x = this.input.x;
    let z = this.input.z;
    if (k.has('arrowleft') || k.has('a')) x = -1;
    if (k.has('arrowright') || k.has('d')) x = 1;
    return { x, z };
  }

  // ---- screens ------------------------------------------------------------------------------------------------------

  _clear() { this.layer.replaceChildren(); }
  _saveNow() { this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) }); }
  _mute(style) {
    const b = h('button', { class: 'rh-round', style, 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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
    this.toastEl = h('div', { class: 'rh-toast' });
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
    this.show = null;
    if (this.joy) this.joy.style.display = 'none';
    this.sound.setTempo(108);
    this.sound.setMode('menu');
    this.sound.setCrackle(true);
    this.menuShow = new Show({ track: 0, seed: 3 });
    this.menuShow.state = 'play';
    this._setup(this.menuShow);
    this._clear();
    const rows = [];
    for (let i = 0; i < TRACKS.length; i++) {
      const tk = TRACKS[i];
      const locked = i + 1 > this.save.unlocked;
      const stars = this.save.stars[tk.id] ?? 0;
      rows.push(h('div', { class: 'rh-row' },
        h('div', { class: 'lbl' }, name(tk)),
        h('button', {
          class: `rh-rec${locked ? ' lock' : ''}`, 'aria-label': `${t('track')} ${tk.id} ${name(tk)}`,
          onclick: () => { if (locked) { this.sound.play('no'); this.toast(t('locked')); return; } this.startTrack(i); },
        }, locked ? '🔒' : num(tk.id), h('span', { class: 'stars' }, locked ? '' : '⭐'.repeat(stars) + '☆'.repeat(3 - stars)))));
    }
    this.layer.append(
      h('button', { class: 'rh-round', style: this._topLeft(), 'aria-label': t('exit'), onclick: () => { this._saveNow(); this.post({ type: 'exit' }); } }, getLang() === 'en' ? '←' : '→'),
      h('div', { class: 'rh-dim', style: 'background:rgba(40,30,20,.25)' },
        h('div', { class: 'rh-panel' },
          h('div', { class: 'rh-logo' }, '🎵 ', t('title')),
          h('div', { class: 'rh-title', style: 'font-size:calc(var(--u)*4.4)' }, '🌍 ', t('tour')),
          // the play button first, so it is on screen even on a phone held sideways
          h('button', { class: 'rh-btn2 rh-big', onclick: () => this.startTrack(this.save.unlocked - 1) }, '▶ ', t('play')),
          h('div', { class: 'rh-shelf' }, rows))),
      this._mute(`bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)`),
      this._toastEl(),
    );
  }

  startTrack(i) {
    this.trackIndex = i;
    this.show = new Show({ track: i, easy: this.age <= 4, seed: (Date.now() & 0xffff) + 1 });
    this._setup(this.show);
    this.mode = 'play';
    this.paused = false;
    this.sound.setTempo(this.show.track.bpm);
    this.sound.setMode('play');
    this.sound.setCrackle(true);
    this._hud();
    this._joyHome();
    this.hinted = {};
    this.fallers = [];
  }

  _hud() {
    this._clear();
    const sh = this.show;
    this.hud = {
      track: h('div', { class: 'rh-box' }, h('span', {}, t('track')), h('b', {}, num(sh.track.id))),
      left: h('div', { class: 'rh-box' }, h('b', {}, num(sh.left)), h('span', {}, t('left'))),
      faces: h('div', { class: 'rh-faces' }, sh.animals.map((a) => h('i', {}, FACE[a.kind]))),
      ring: h('div', { class: 'rh-ring' }),
      beat: h('div', { class: 'rh-beat' }, [0, 1, 2, 3].map(() => h('i'))),
      hint: h('div', { class: 'rh-hint' }),
      count: h('div', { class: 'rh-count' }, ''),
      hearts: h('div', { class: 'rh-hearts' }, sh.lives > 1 ? '❤️'.repeat(sh.lives) : ''),
      jump: h('button', { class: 'rh-cbtn rh-jump', 'aria-label': 'jump' }, '⬆'),
      duck: h('button', { class: 'rh-cbtn rh-duck', 'aria-label': 'duck' }, '⬇'),
    };
    this.hud.jump.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this.show && this.show.jump(); });
    const duck = this.hud.duck;
    duck.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); this.ducking = true; duck.classList.add('on'); this.show && this.show.duck(); try { duck.setPointerCapture(e.pointerId); } catch (_) { /* fine */ } });
    const off = () => { this.ducking = false; duck.classList.remove('on'); };
    duck.addEventListener('pointerup', off);
    duck.addEventListener('pointercancel', off);
    this.layer.append(
      h('button', { class: 'rh-round', style: this._topLeft(), 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'),
      h('div', { class: 'rh-hudl' }, this.hud.track, this.hud.left, this.hud.faces),
      this.hud.ring,
      this.hud.hearts,
      this.hud.beat,
      this.hud.hint,
      this.hud.count,
      this.hud.jump,
      this.hud.duck,
      this._mute(`top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*14);inset-inline-start:calc(var(--u)*3)`),
      this._toastEl(),
    );
    this._hc = {};
  }

  _hint(key, secs = 2.4) {
    if (this.hinted[key]) return;
    this.hinted[key] = true;
    this.hud.hint.textContent = t(key);
    this.hud.hint.classList.add('show');
    clearTimeout(this._ht);
    this._ht = setTimeout(() => this.hud && this.hud.hint.classList.remove('show'), secs * 1000);
  }

  _pop(text, x, z) {
    const v = new THREE.Vector3(x, 1.6, z).project(this.camera);
    const tag = h('div', { class: 'rh-pop', style: `left:${(v.x * 0.5 + 0.5) * this.cw}px;top:${(-v.y * 0.5 + 0.5) * this.ch}px` }, text);
    this.layer.append(tag);
    setTimeout(() => tag.remove(), 900);
  }

  pause() {
    if (this.mode !== 'play' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.input.x = this.input.z = 0;
    this.joy.style.display = 'none';
    this.sound.suspend();
    const dim = h('div', { class: 'rh-dim' }, h('div', { class: 'rh-panel' },
      h('div', { class: 'rh-title' }, t('paused')),
      h('button', { class: 'rh-btn2', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); this._joyHome(); } }, '▶ ', t('resume')),
      h('button', { class: 'rh-btn2 wood', onclick: () => { this.sound.resume(); this.startTrack(this.trackIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'rh-btn2 wood', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('menu'))));
    this.layer.append(dim);
  }

  _results() {
    const sh = this.show;
    const r = sh.result;
    const i = this.trackIndex;
    const won = sh.state === 'won';
    this.mode = 'results';
    this.joy.style.display = 'none';
    this.sound.setMode('menu');
    if (won) {
      const id = TRACKS[i].id;
      this.save.stars[id] = Math.max(this.save.stars[id] ?? 0, r.stars);
      if (i + 2 > this.save.unlocked && i + 1 < TRACKS.length) this.save.unlocked = i + 2;
      this._saveNow();
      this.sound.play('win');
    } else this.sound.play('lose');
    const place = won ? 1 : sh.left + 1;
    const hasNext = won && i + 1 < TRACKS.length;
    const dim = h('div', { class: 'rh-dim' }, h('div', { class: 'rh-panel' },
      h('div', { class: 'rh-logo', style: 'font-size:calc(var(--u)*8)' }, won ? '' : t('knocked')),
      won ? h('div', { class: 'rh-title' }, t('win')) : null,
      won ? h('div', { class: 'rh-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐'))) : h('div', { class: 'rh-box' }, h('b', {}, num(place)), h('span', {}, t('place'))),
      h('div', { class: 'rh-stat' }, h('span', {}, `${num(sh.left)} ${t('left')}`)),
      h('div', { style: 'display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center' },
        hasNext ? h('button', { class: 'rh-btn2', onclick: () => this.startTrack(i + 1) }, t('next'), ' ▶') : null,
        h('button', { class: hasNext ? 'rh-btn2 wood' : 'rh-btn2', onclick: () => this.startTrack(i) }, '↻ ', t('retry')),
        h('button', { class: 'rh-btn2 wood', onclick: () => this.showMenu() }, t('menu')))));
    this.hud.jump.remove();
    this.hud.duck.remove();
    this.layer.append(dim);
  }

  // ---- playing ------------------------------------------------------------------------------------------------------

  _playFrame(dt, time) {
    const sh = this.show;
    if (this.ducking) sh.duck();
    const before = sh.state;
    const events = sh.step(dt, this._readInput());
    const p = sh.player;
    for (const e of events) {
      switch (e.type) {
        case 'count': this.sound.play('count', e.n); this.hud.count.textContent = num(e.n); break;
        case 'go':
          this.sound.play('go');
          this.hud.count.textContent = '';
          this.sound.setTempo(sh.track.bpm);
          this._hint('hintLow', 3);
          break;
        case 'beat': {
          const k = (e.n - 1) % 4;
          [...this.hud.beat.children].forEach((x, i) => x.classList.toggle('on', i === k));
          break;
        }
        case 'jump': if (e.id === 0) this.sound.play('jump'); break;
        case 'duck': if (e.id === 0) this.sound.play('duck'); break;
        case 'hit': if (e.id === 0) { this.sound.play('hit'); this.shake = 0.4; } else if (Math.hypot(e.x - p.x, e.z - p.z) < 4) this.sound.play('bump'); break;
        case 'bump': this.sound.play('bump'); this._pop(t('bump'), e.x, e.z); break;
        case 'out': {
          this.sound.play('out');
          if (e.id !== 0) this._pop(t('out'), e.x, e.z);
          this.fallers.push({ id: e.id, t: 0, x: e.x, z: e.z });
          this.hud.faces.children[e.id].classList.add('off');
          break;
        }
        case 'saved': this.sound.play('saved'); this.toast(`${t('saved')} ${'❤️'.repeat(e.lives)}`, 1.8); this.hud.hearts.textContent = '❤️'.repeat(e.lives); break;
        case 'flipWarn': this.sound.play('flipWarn'); this._hint('hintFlip'); break;
        case 'flip': this.sound.play('flip'); this.shake = 0.3; break;
        case 'gapWarn': this.sound.play('gapWarn'); this._hint('hintGap'); break;
        case 'gapOpen': this.sound.play('gapOpen'); break;
        case 'armWarn': this.sound.play('armWarn'); this._hint('hintArm'); break;
        case 'armSweep': this.sound.play('armSweep'); break;
        default:
      }
    }
    // a whoosh as a bar sweeps close by; a hint the first time a high bar comes
    for (const arm of sh.arms) {
      const d = Math.atan2(p.z, p.x) - arm.a;
      const dd = Math.atan2(Math.sin(d), Math.cos(d));
      if (dd > 0 && dd < 0.35 && !arm.whooshed) { arm.whooshed = true; this.sound.play('whoosh'); if (arm.type === 'high') this._hint('hintHigh'); }
      if (dd < -0.3) arm.whooshed = false;
    }
    if (before === 'play' && (sh.state === 'won' || sh.state === 'out')) setTimeout(() => this.mode === 'play' && this._results(), sh.state === 'won' ? 900 : 1300);
    this._sync(sh, dt, time);
    // HUD
    const hc = this._hc;
    if (hc.left !== sh.left) { hc.left = sh.left; this.hud.left.firstChild.textContent = num(sh.left); }
    this.hud.ring.style.setProperty('--p', `${Math.round(sh.progress * 100)}%`);
  }

  _sync(sh, dt, time) {
    this.record.rotation.y = -sh.phi;
    sh.arms.forEach((arm, k) => { this.barModels[k].rotation.y = -arm.a; });
    // gaps: blinking while they warn, a dark hole while open
    while (this.gapModels.length < sh.gaps.length) {
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(new THREE.RingGeometry(1, 2, 24, 1, 0, 1), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide }));
      mesh.rotation.x = -Math.PI / 2;
      group.add(mesh);
      this.scene.add(group);
      this.gapModels.push({ group, mesh, key: null });
    }
    this.gapModels.forEach((gm, k) => {
      const g = sh.gaps[k];
      gm.group.visible = !!g;
      if (!g) return;
      const key = `${g.r0}|${g.span}`;
      if (gm.key !== key) { gm.key = key; gm.mesh.geometry.dispose(); gm.mesh.geometry = new THREE.RingGeometry(g.r0, g.r1, 24, 1, -g.span, g.span); }
      gm.group.rotation.y = -sh.gapAngle(g);
      gm.group.position.y = 0.03;
      if (g.open) { gm.mesh.material.color.set(0x1a3a9a); gm.mesh.material.opacity = 0.95; } else { gm.mesh.material.color.set(Math.floor(time * 8) % 2 ? 0xffd23a : 0xffffff); gm.mesh.material.opacity = 0.65; }
    });
    // the tonearm: parked, lifted (warning), sweeping
    const tn = sh.tonearm;
    const ang = tn.state === 'sweep' ? Math.PI * 0.62 + tn.a * 0.7 : Math.PI * 0.45;
    this.tonearm.rotation.y = -ang;
    this.tonearm.position.y = tn.state === 'warn' ? 0.4 + Math.abs(Math.sin(time * 8)) * 0.3 : 0;
    // animals
    sh.animals.forEach((a, k) => {
      const m = this.animalModels[k];
      const shd = this.shadows[k];
      if (a.out) {
        const f = this.fallers.find((x) => x.id === a.id);
        if (f) {
          f.t += dt;
          m.root.position.set(f.x * (1 + f.t * 0.3), -f.t * f.t * 9, f.z * (1 + f.t * 0.3));
          m.root.rotation.x += dt * 8;
          if (f.t > 1.4) m.root.visible = false;
        } else m.root.visible = false;
        shd.visible = false;
        return;
      }
      const hop = a.air > 0 ? Math.sin((1 - a.air / JUMP_T) * Math.PI) * 1.0 : 0;
      m.root.position.set(a.x, hop, a.z);
      let d = a.face - m.root.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      m.root.rotation.y += d * Math.min(1, dt * 10);
      const run = a.air > 0 ? 0 : a.moving;
      const sw = Math.sin(time * 14 + k) * 0.8 * run;
      m.legs[0].rotation.x = a.air > 0 ? -0.7 : sw;
      m.legs[1].rotation.x = a.air > 0 ? 0.5 : -sw;
      m.arms.forEach((ar, i) => { ar.rotation.x = a.air > 0 ? -2.4 : Math.sin(time * 10 + i * 3 + k) * 0.4; });
      // a little dance to the beat, ducking flattens, a hit makes you wobble
      const bounce = Math.abs(Math.sin((time * Math.PI * (this.show ? this.show.track.bpm : 110)) / 60)) * 0.06;
      m.body.position.y = bounce;
      m.body.scale.set(1, a.duck > 0 ? 0.55 : 1, 1);
      m.body.rotation.z = a.stun > 0 ? Math.sin(time * 20) * 0.35 : 0;
      shd.position.set(a.x, 0.02, a.z);
      shd.visible = true;
      shd.scale.setScalar(1 - hop * 0.3);
    });
    const p = sh.player;
    this.ring.position.set(p.x, 0.03, p.z);
    this.ring.visible = !p.out;
    this.shake = Math.max(0, (this.shake ?? 0) - dt * 2);
    this.scene.position.x = this.shake > 0 ? (Math.random() - 0.5) * this.shake * 0.4 : 0;
  }

  // ---- loop ----------------------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.elapsedTime;
    this._adapt(dt);
    if (this.mode === 'play' && !this.paused) this._playFrame(dt, time);
    else if (this.mode === 'menu' && this.menuShow) {
      // the animals dance round on the record behind the menu
      this.menuShow.step(dt);
      if (this.menuShow.state !== 'play') { this.menuShow = new Show({ track: 0, seed: 5 }); this.menuShow.state = 'play'; this._setup(this.menuShow); }
      this._sync(this.menuShow, dt, time);
    } else if (this.mode === 'results' && this.show) this._sync(this.show, dt, time);
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

void ANIMALS;

const api = {
  start(el, config, post) {
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.RhythmSurvival = api;
export default api;
