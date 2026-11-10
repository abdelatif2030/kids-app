// «سباق الملاهي» — the Carnival race. Entry point: window.CarnivalRace.start(container, config, post).
//   config: { lang: 'ar'|'en', age: 1..6, save: {...} | null, base: url of this folder }
//   post(message): { type: 'save', save } after every change, { type: 'exit' } when the child leaves.
// No network, no links, no ads, no tracking. Everything is drawn from shapes in code.
import * as THREE from 'three';
import { RACERS, TRAITS, UPGRADES, TRACKS, MAX_LEVEL, upgradeCost, normalizeSave, applyResult, buyUpgrade, buyRacer } from './data.js';
import { TrackPath } from './track.js';
import { Race } from './race.js';
import { World, makeSky, mergeByMaterial } from './world.js';
import { makeBumperCar, makeShieldBubble, glowSprite, makePodium, glow } from './models.js';
import { setLang, getLang, t, num, name, ordinal } from './i18n.js';
import { CSS, h, ANIMAL_EMOJI, ITEM_EMOJI, TRACK_EMOJI, TRACK_BG } from './ui.js';
import { Sound } from './audio.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const damp = (k, dt) => 1 - Math.exp(-k * dt);

function webglOk() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (_) {
    return false;
  }
}

function lowEndDevice() {
  const mem = navigator.deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  return mem <= 3 || cores <= 4;
}

class Game {
  constructor(el, config, post) {
    this.el = el;
    this.post = post || (() => {});
    setLang(config.lang);
    this.age = Number(config.age) || 5;
    this.easy = config.easy ?? this.age <= 3;
    this.save = normalizeSave(config.save);
    this.sound = new Sound();
    this.sound.muted = !!this.save.muted;
    this.base = config.base || './';
    this.quality = { low: lowEndDevice() };

    if (!document.getElementById('cr-style')) document.head.append(h('style', { id: 'cr-style', text: CSS }));
    this.root = h('div', { class: 'cr-root', dir: getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this._sizeUnit();

    if (!webglOk()) {
      this.root.append(h('div', { class: 'cr-loading' }, h('div', { class: 'cr-col' }, t('noWebgl'), h('button', { class: 'cr-btn', onclick: () => this.post({ type: 'exit' }) }, t('exit')))));
      return;
    }
    this.loading = h('div', { class: 'cr-loading' }, t('loading'));
    this.root.append(this.loading);

    this.renderer = new THREE.WebGLRenderer({ antialias: !this.quality.low, powerPreference: 'high-performance' });
    this.maxPR = Math.min(window.devicePixelRatio || 1, this.quality.low ? 1.25 : 1.5);
    this.pr = this.maxPR;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.root.prepend(this.renderer.domElement);
    this.layer = h('div', { class: 'cr-layer' });
    this.root.append(this.layer);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.3, 2000);
    this.mode = 'loading';
    this.input = { throttle: 0, steer: 0, item: false, keys: new Set(), pointer: null };
    this._bindInput();
    this._resize();
    this.ro = new ResizeObserver(() => this._resize());
    this.ro.observe(el);
    this._onVis = () => {
      if (document.hidden) {
        if (this.mode === 'race') this.pause();
        this.sound.suspend();
      } else if (!this.paused) this.sound.resume();
    };
    document.addEventListener('visibilitychange', this._onVis);

    this.frameTimes = [];
    this.goodWindows = 0;
    this.clock = new THREE.Clock();
    this._loadFonts().then(() => {
      this._buildShowcase();
      this.loading.remove();
      this.showMenu();
      this.renderer.setAnimationLoop(() => this._frame());
    });
  }

  // ---- setup --------------------------------------------------------------------------------------------------

  async _loadFonts() {
    try {
      const faces = [
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }),
        new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-Bold.ttf)`, { weight: '700' }),
      ];
      await Promise.race([Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff)))), new Promise((r) => setTimeout(r, 2500))]);
    } catch (_) {
      // the system font is fine
    }
  }

  _sizeUnit() {
    const r = this.el.getBoundingClientRect();
    const w = r.width || window.innerWidth;
    const hh = r.height || window.innerHeight;
    this.root.style.setProperty('--u', `${Math.min(w, hh) / 100}px`);
    this.root.classList.toggle('cr-land', w > hh * 1.15);
    return [w, hh];
  }

  _resize() {
    const [w, hh] = this._sizeUnit();
    if (!this.renderer) return;
    this.renderer.setSize(w, hh, false);
    this.camera.aspect = w / hh;
    this.baseFov = w < hh ? 70 : 56; // portrait phones need a wider view
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();
  }

  _buildShowcase() {
    const s = new THREE.Scene();
    s.add(makeSky());
    s.fog = new THREE.Fog(0x8a3f8f, 60, 600);
    s.add(new THREE.HemisphereLight(0xffc2e8, 0x2a1650, 1.8));
    const sun = new THREE.DirectionalLight(0xffe0c0, 1.6);
    sun.position.set(3, 6, 5);
    s.add(sun);
    // a round stage with glowing rings
    const stage = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 0.6, 48), new THREE.MeshLambertMaterial({ color: 0x3b1f7a, emissive: 0x24104d }));
    stage.position.y = -0.3;
    s.add(stage);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.25, 0.12, 8, 64), glow(0xff5c8a));
    ring.rotation.x = Math.PI / 2;
    s.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.08, 8, 64), glow(0x74c0fc));
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = 0.02;
    s.add(ring2);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(400, 32), new THREE.MeshLambertMaterial({ color: 0x2b1660, emissive: 0x3a1a6e, emissiveIntensity: 0.6 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.6;
    s.add(floor);
    // carnival lights in the distance
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      const sp = glowSprite([0xffd43b, 0xff8cc6, 0x74c0fc][i % 3], 2.5, 0.9);
      sp.position.set(Math.cos(a) * 60, 2 + (i % 5) * 1.5, Math.sin(a) * 60);
      s.add(sp);
    }
    this.turntable = new THREE.Group();
    s.add(this.turntable);
    this.podium = makePodium();
    this.podium.visible = false;
    s.add(this.podium);
    this.showcase = s;
    this.carCache = new Map();
  }

  _carModel(racerId) {
    const r = RACERS.find((x) => x.id === racerId) ?? RACERS[0];
    return mergeByMaterial(makeBumperCar(r));
  }

  // ---- menu ---------------------------------------------------------------------------------------------------

  _clearLayer() {
    this.layer.replaceChildren();
  }

  _muteBtn() {
    const b = h('button', { class: 'cr-round', 'aria-label': 'sound' }, this.sound.muted ? '🔇' : '🔊');
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

  _tickets() {
    return h('div', { class: 'cr-pill', 'aria-label': 'tickets' }, h('span', { class: 'tk' }), num(this.save.tickets));
  }

  _saveNow() {
    this.post({ type: 'save', save: JSON.parse(JSON.stringify(this.save)) });
  }

  _showOnTurntable(racerId) {
    this.turntable.clear();
    const car = this._carModel(racerId);
    car.scale.setScalar(1.6);
    this.turntable.add(car);
    this.podium.visible = false;
    this.turntable.visible = true;
  }

  showMenu() {
    this._endRace();
    this.mode = 'menu';
    this.sound.setMode('menu');
    this._showOnTurntable(this.save.selected);
    this._clearLayer();
    const safe = h('div', { class: 'cr-safe' });
    safe.append(
      h('div', { class: 'cr-top' },
        h('button', { class: 'cr-round', 'aria-label': t('exit'), onclick: () => this.post({ type: 'exit' }) }, getLang() === 'en' ? '←' : '→'),
        h('div', { class: 'cr-row' }, this._muteBtn(), this._tickets())),
    );
    const tracks = TRACKS.map((tr, i) => {
      const locked = i + 1 > this.save.unlocked;
      const best = this.save.best[tr.id];
      return h('button', {
        class: `cr-track${locked ? ' locked' : ''}`,
        style: `background:${TRACK_BG[tr.id]}`,
        'aria-label': name(tr),
        onclick: () => {
          if (!locked) return this.startRace(i);
          this.sound.play('locked');
          this.toast(this.easy ? t('unlockHintEasy') : t('unlockHint'), 2.6);
        },
      },
      h('div', { class: 'ic' }, TRACK_EMOJI[tr.id]),
      h('div', { class: 'nm' }, name(tr)),
      h('div', { class: 'bs' }, best ? `🏅 ${t('best')}: ${ordinal(best)}` : '★'.repeat(tr.difficulty + 1)),
      locked ? h('div', { class: 'lock' }, '🔒') : null);
    });
    safe.append(
      h('div', { class: 'cr-center', style: 'justify-content:flex-start;padding-top:calc(var(--u)*13)' },
        h('div', { class: 'cr-title' }, t('title')),
        h('div', { class: 'cr-sub' }, t('pickTrack')),
        h('div', { class: 'cr-tracks' }, tracks),
      ),
      h('div', { class: 'cr-bottom', style: 'justify-content:center' },
        h('button', { class: 'cr-btn blue', onclick: () => this.showGarage() }, '🛠️ ', t('garage'))),
    );
    this.layer.append(safe, this._toastEl());
  }

  // ---- garage -------------------------------------------------------------------------------------------------

  showGarage(previewId) {
    this.mode = 'garage';
    this.sound.setMode('menu');
    const sel = previewId ?? this.save.selected;
    this._showOnTurntable(sel);
    this._clearLayer();
    const racer = RACERS.find((r) => r.id === sel);
    const owned = this.save.owned.includes(sel);
    const trait = TRAITS[racer.trait];
    const safe = h('div', { class: 'cr-safe' });
    safe.append(
      h('div', { class: 'cr-top' },
        h('button', { class: 'cr-round', 'aria-label': t('back'), onclick: () => this.showMenu() }, getLang() === 'en' ? '←' : '→'),
        h('div', { class: 'cr-title', style: 'font-size:calc(var(--u)*7)' }, t('garage')),
        this._tickets()),
    );
    const racers = h('div', { class: 'cr-racers' }, RACERS.map((r) => {
      const has = this.save.owned.includes(r.id);
      return h('button', { class: `cr-racer${r.id === sel ? ' sel' : ''}${has ? '' : ' lock'}`, 'aria-label': name(r), onclick: () => this.showGarage(r.id) },
        ANIMAL_EMOJI[r.animal], has ? null : h('span', { class: 'pr' }, '🎟️', num(r.price)));
    }));
    let action;
    if (owned) {
      action = this.save.selected === sel
        ? h('button', { class: 'cr-btn gold', onclick: () => this.showMenu() }, '🏁 ', t('race'))
        : h('button', { class: 'cr-btn', onclick: () => { this.save.selected = sel; this._saveNow(); this.showGarage(sel); } }, t('choose'));
    } else {
      const can = this.save.tickets >= racer.price;
      action = h('button', {
        class: 'cr-btn gold', disabled: !can,
        onclick: () => {
          if (buyRacer(this.save, sel)) {
            this.sound.play('buy');
            this._saveNow();
            this.showGarage(sel);
            this.toast('🎉', 1.2);
          }
        },
      }, '🔓 ', t('buy'), ` 🎟️${num(racer.price)}`);
      if (!can) action.title = t('needMore');
    }
    const ups = UPGRADES.map((u) => {
      const lvl = this.save.upgrades[u.id];
      const cost = upgradeCost(lvl);
      const maxed = lvl >= MAX_LEVEL;
      return h('div', { class: 'cr-up' },
        h('div', { class: 'nm' }, `${u.icon} ${t(u.id)}`),
        h('div', { class: 'pips' }, Array.from({ length: MAX_LEVEL }, (_, i) => h('span', { class: `pip${i < lvl ? ' on' : ''}` }))),
        h('button', {
          class: 'cr-btn small', disabled: maxed || this.save.tickets < cost,
          'aria-label': `${t(u.id)} +1`,
          onclick: () => { if (buyUpgrade(this.save, u.id)) { this.sound.play('buy'); this._saveNow(); this.showGarage(sel); } },
        }, maxed ? t('max') : `🎟️${num(cost)}`));
    });
    safe.append(h('div', { class: 'cr-garage' },
      h('div', { class: 'cr-col' },
        h('div', { class: 'cr-name' }, name(racer)),
        h('div', { class: 'cr-trait' }, name(trait)),
        racers,
        action),
      h('div', { class: 'cr-col' }, ups),
    ));
    this.layer.append(safe, this._toastEl());
  }

  // ---- race ---------------------------------------------------------------------------------------------------

  startRace(index) {
    this._endRace();
    this.trackIndex = index;
    const def = TRACKS[index];
    const track = new TrackPath(def);
    const race = new Race(track, {
      racerId: this.save.selected,
      upgrades: this.save.upgrades,
      easy: this.easy,
      difficulty: def.difficulty,
      seed: (Date.now() % 100000) + index,
    });
    const scene = new THREE.Scene();
    const world = new World(scene, track, race, { start: t('title'), sub: name(def) }, this.quality);
    const carObjs = race.cars.map((c) => {
      const m = this._carModel(c.racer.id);
      const shield = makeShieldBubble();
      shield.visible = false;
      m.add(shield);
      const flame = glowSprite(0xff922b, 2.4, 0.95);
      flame.position.set(0, 0.7, -1.7);
      flame.visible = false;
      m.add(flame);
      const sparks = [-1, 1].map((sx) => {
        const sp = glowSprite(0x4dabf7, 1.2, 1);
        sp.position.set(sx * 0.9, 0.3, -1.1);
        sp.visible = false;
        m.add(sp);
        return sp;
      });
      scene.add(m);
      return { c, m, shield, flame, sparks };
    });
    const blast = new THREE.Mesh(new THREE.TorusGeometry(1, 0.25, 8, 40), new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    blast.visible = false;
    scene.add(blast);
    this.r = { track, race, scene, world, carObjs, blast, blastT: 0, camPos: null, camUp: new THREE.Vector3(0, 1, 0), finishT: -1, lastToastBump: 0 };
    this.mode = 'race';
    this.paused = false;
    this.sound.setMode('race');
    world.fireworks.onSpawn = () => this.sound.play('firework');
    this._buildHud();
    this._placeCamera(1);
  }

  _endRace() {
    if (!this.r) return;
    this.r.world.dispose();
    this.r.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.r = null;
  }

  _buildHud() {
    this._clearLayer();
    const safe = h('div', { class: 'cr-safe' });
    this.hud = {};
    this.hud.tickets = h('span', {}, num(0));
    this.hud.lap = h('div', { class: 'cr-pill cr-lap' }, `${t('lap')} ${num(1)}/${num(this.r.race.laps)}`);
    safe.append(h('div', { class: 'cr-top' },
      h('div', { class: 'cr-pill' }, h('span', { class: 'tk' }), this.hud.tickets),
      h('div', { class: 'cr-row' }, this._muteBtn(),
        h('button', { class: 'cr-round', 'aria-label': t('paused'), onclick: (e) => { e.stopPropagation(); this.pause(); } }, '⏸'))));
    safe.append(this.hud.lap);
    // progress bar: everyone's place on the lap, the finish flag on top
    const prog = h('div', { class: 'cr-prog' }, h('div', { class: 'flag' }, '🏁'));
    this.hud.dots = this.r.race.cars.map((c) => {
      const d = h('div', { class: `dot${c.isPlayer ? ' me' : ''}` }, ANIMAL_EMOJI[c.racer.animal]);
      prog.append(d);
      return d;
    });
    safe.append(prog);
    this.hud.placeNum = h('b', {}, num(6));
    this.hud.item = h('button', { class: 'cr-item', 'aria-label': 'item', onpointerdown: (e) => { e.stopPropagation(); e.preventDefault(); this.input.item = true; } });
    safe.append(h('div', { class: 'cr-bottom' },
      h('div', { class: 'cr-place' }, this.hud.placeNum, h('i', {}, `/${num(6)}`)),
      this.hud.item));
    this.hud.count = h('div', { class: 'cr-count' });
    this.hud.hint = h('div', { class: 'cr-hint' }, h('span', { class: 'hand' }, '👆'), this.easy ? t('holdEasy') : t('hold'));
    safe.append(this.hud.count, this.hud.hint);
    this.layer.append(safe, this._toastEl());
    this._hudCache = {};
  }

  _toastEl() {
    this.toastEl = h('div', { class: 'cr-toast' });
    return this.toastEl;
  }

  toast(text, secs = 1.2) {
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.remove('show');
    void this.toastEl.offsetWidth;
    this.toastEl.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.toastEl && this.toastEl.classList.remove('show'), secs * 1000);
  }

  pause() {
    if (this.mode !== 'race' || this.paused) return;
    this.paused = true;
    this.input.pointer = null;
    this.sound.engine(false);
    this.sound.suspend();
    const dim = h('div', { class: 'cr-dim' }, h('div', { class: 'cr-panel' },
      h('div', { class: 'cr-title', style: 'font-size:calc(var(--u)*8)' }, t('paused')),
      h('button', { class: 'cr-btn gold', onclick: () => { dim.remove(); this.paused = false; this.sound.resume(); } }, '▶ ', t('resume')),
      h('button', { class: 'cr-btn blue', onclick: () => { this.sound.resume(); this.startRace(this.trackIndex); } }, '↻ ', t('restart')),
      h('button', { class: 'cr-btn', onclick: () => { this.sound.resume(); this.showMenu(); } }, t('quit'))));
    this.layer.append(dim);
  }

  _bindInput() {
    const root = this.root;
    root.addEventListener('pointerdown', () => this.sound.unlock(), true);
    root.addEventListener('click', (e) => { if (e.target.closest('button')) this.sound.play('tap'); }, true);
    const onDown = (e) => {
      if (e.target.closest('button')) return;
      if (this.mode !== 'race' || this.paused) return;
      if (this.input.pointer !== null) return;
      this.input.pointer = e.pointerId;
      this.input.x0 = e.clientX;
      this.input.x = e.clientX;
      try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
    };
    const onMove = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.x = e.clientX;
    };
    const onUp = (e) => {
      if (e.pointerId !== this.input.pointer) return;
      this.input.pointer = null;
    };
    root.addEventListener('pointerdown', onDown);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerup', onUp);
    root.addEventListener('pointercancel', onUp);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    this._onKey = (e) => {
      this.sound.unlock();
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (this.mode === 'race' && (k === 'escape' || k === 'p')) this.pause();
        if (k === ' ' || k === 'enter' || k === 'x') this.input.item = this.mode === 'race';
        this.input.keys.add(k);
      } else this.input.keys.delete(k);
      if (this.mode === 'race' && ['arrowleft', 'arrowright', 'arrowup', 'arrowdown', ' '].includes(k)) e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    window.addEventListener('keyup', this._onKey);
  }

  _readInput() {
    const i = this.input;
    const unit = parseFloat(this.root.style.getPropertyValue('--u')) || 4;
    let throttle = 0;
    let steer = 0;
    if (i.pointer !== null) {
      throttle = 1;
      const max = unit * 13;
      let d = i.x - i.x0;
      // keep the "centre" close so turning back is quick
      if (Math.abs(d) > max) {
        i.x0 = i.x - Math.sign(d) * max;
        d = Math.sign(d) * max;
      }
      steer = d / max;
    }
    const k = i.keys;
    if (k.has('arrowup') || k.has('w')) throttle = 1;
    if (k.has('arrowleft') || k.has('a')) steer = -1;
    if (k.has('arrowright') || k.has('d')) steer = 1;
    const item = i.item;
    i.item = false;
    return { throttle, steer: clamp(steer, -1, 1), item, trick: 0 };
  }

  // ---- per frame ----------------------------------------------------------------------------------------------

  _frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this._adapt(dt);
    if (this.mode === 'race' && this.r && !this.paused) this._raceFrame(dt); // may end the race (results)
    if (this.mode === 'race' && this.r) {
      this.renderer.render(this.r.scene, this.camera);
    } else if (this.showcase) {
      this._showcaseFrame(dt);
      this.renderer.render(this.showcase, this.camera);
    }
  }

  _adapt(dt) {
    // keep it smooth on slower phones: lower the resolution a step when frames are slow
    this.frameTimes.push(dt);
    if (this.frameTimes.length < 90) return;
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    this.frameTimes.length = 0;
    if (avg > 1 / 42 && this.pr > 0.75) {
      this.pr = Math.max(0.75, this.pr - 0.25);
      this.renderer.setPixelRatio(this.pr);
      this._resize();
      this.goodWindows = 0;
    } else if (avg < 1 / 57 && this.pr < this.maxPR) {
      if (++this.goodWindows >= 4) {
        this.pr = Math.min(this.maxPR, this.pr + 0.25);
        this.renderer.setPixelRatio(this.pr);
        this._resize();
        this.goodWindows = 0;
      }
    }
  }

  _showcaseFrame(dt) {
    const tt = this.clock.elapsedTime;
    this.turntable.rotation.y += dt * 0.6;
    const portrait = this.camera.aspect < 1;
    if (this.mode === 'results' && this.podium.visible) {
      const a = Math.sin(tt * 0.3) * 0.35;
      this.camera.position.set(Math.sin(a) * 15, 6.5, Math.cos(a) * 15 + (portrait ? 4 : 0));
      this.camera.up.set(0, 1, 0);
      this.camera.lookAt(0, 2.6, 0);
    } else {
      const d = portrait ? 12 : this.mode === 'garage' ? 15 : 9.5;
      this.camera.position.set(0, 3.2, d);
      this.camera.up.set(0, 1, 0);
      // garage: the car sits higher on the screen, above the panels
      // garage: the car sits high on the screen, above the panels (centred between them on wide screens)
      this.camera.lookAt(0, this.mode === 'garage' ? (portrait ? -1.6 : -0.6) : (portrait ? 0.2 : 1.2), 0);
    }
  }

  _raceFrame(dt) {
    const r = this.r;
    const race = r.race;
    const ctl = this._readInput();
    race.step(dt, ctl);
    if (race.phase !== 'countdown' && this.hud.hint && (ctl.throttle > 0 || Math.abs(ctl.steer) > 0.2 || race.time > 6)) {
      this.hud.hint.remove();
      this.hud.hint = null;
    }
    for (const e of race.events) this._onEvent(e);
    if (race.phase === 'race') {
      this.sound.engine(true);
      this.sound.engineUpdate(race.player.v, race.player.boost > 0, race.player.airborne);
    }
    r.world.update(dt);
    this._placeCars(dt);
    this._placeCamera(dt);
    this._updateHud();
    if (r.blast.visible) {
      r.blastT += dt;
      const k = r.blastT / 0.5;
      r.blast.scale.setScalar(1 + k * 14);
      r.blast.material.opacity = 1 - k;
      if (k >= 1) r.blast.visible = false;
    }
    if (r.finishT >= 0) {
      r.finishT += dt;
      if (r.finishT > 2.4) this.showResults();
    }
  }

  _onEvent(e) {
    const r = this.r;
    const me = r.race.player.id;
    this._sfx(e, me);
    switch (e.type) {
      case 'count':
        this.hud.count.textContent = num(e.n);
        break;
      case 'go':
        this.hud.count.classList.add('word');
        this.hud.count.textContent = t('go');
        setTimeout(() => this.hud && this.hud.count && (this.hud.count.textContent = ''), 700);
        break;
      case 'lap':
        this.toast(e.lap === r.race.laps ? t('lastLap') : `${t('lap')} ${num(e.lap)}`, 1.4);
        break;
      case 'lead':
        this.toast(t('lead'), 1.2);
        break;
      case 'spin':
        if (e.car === me) this.toast(t('oops'), 0.9);
        break;
      case 'shieldPop':
        if (e.car === me) this.toast(t('shielded'), 1);
        break;
      case 'trick':
        if (e.car === me) this.toast(t('trick'), 1);
        break;
      case 'driftBoost':
        if (e.car === me && e.tier >= 2) this.toast(t('drift'), 0.8);
        break;
      case 'bump':
        if (r.race.time - r.lastToastBump > 4) {
          r.lastToastBump = r.race.time;
          this.toast(t('bump'), 0.6);
        }
        break;
      case 'blast': {
        const c = r.race.cars[e.car];
        r.blast.position.copy(r.track.world(c.s, c.x, 0.6));
        r.blast.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), r.track.upAt(c.s));
        r.blast.visible = true;
        r.blastT = 0;
        break;
      }
      case 'finish':
        this.toast(t('finish'), 2);
        r.finishT = 0;
        r.result = e;
        break;
      default:
    }
  }

  _sfx(e, me) {
    const S = this.sound;
    const mine = e.car === undefined || e.car === me;
    switch (e.type) {
      case 'count': S.play('count'); break;
      case 'go': S.play('go'); break;
      case 'ticket': S.play('ticket', e.total); break;
      case 'item': S.play('item'); break;
      case 'rocket': if (mine) S.play('rocket'); break;
      case 'boost': S.play('boost'); break;
      case 'shield': if (mine) S.play('shield'); break;
      case 'shieldPop': if (mine) S.play('shieldPop'); break;
      case 'blast': {
        // everybody hears a blast that is close to the player
        const c = this.r.race.cars[e.car];
        if (Math.abs(c.progress - this.r.race.player.progress) < 30) S.play('blast');
        break;
      }
      case 'bump': S.play('bump'); break;
      case 'spin': if (mine) S.play('spin'); break;
      case 'wall': if (mine) S.play('wall'); break;
      case 'jump': if (mine) S.play('jump'); break;
      case 'land': if (mine) S.play('land'); break;
      case 'trick': if (mine) S.play('trick'); break;
      case 'driftTier': if (mine) S.play('driftTier', e.tier); break;
      case 'lap': S.play(e.lap === this.r.race.laps ? 'lastLap' : 'lap'); break;
      case 'lead': S.play('lead'); break;
      case 'finish': S.engine(false); S.play('finish'); break;
      default:
    }
  }

  _placeCars(dt) {
    const r = this.r;
    const tr = r.track;
    const tv = new THREE.Vector3();
    const uv = new THREE.Vector3();
    const rv = new THREE.Vector3();
    const basis = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const tt = r.race.time;
    for (const o of r.carObjs) {
      const c = o.c;
      tr.world(c.s, c.x, c.h, o.m.position);
      tr.tangent(c.s, tv);
      tr.upAt(c.s, uv);
      rv.crossVectors(uv, tv);
      basis.makeBasis(rv, uv, tv);
      o.m.quaternion.setFromRotationMatrix(basis);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -c.yaw + c.spinAngle);
      o.m.quaternion.multiply(q);
      // a little bounce while driving, a squash after a bump, a tilt in the air
      const bob = Math.sin(tt * 18 + c.id) * 0.04 * Math.min(1, c.v / 10);
      o.m.position.addScaledVector(uv, bob);
      const sq = 1 + c.bump * 0.12;
      o.m.scale.set(sq, 1 / sq, sq);
      if (c.airborne) o.m.rotateX(-Math.min(0.35, c.vh * 0.03));
      o.shield.visible = c.shield > 0;
      o.flame.visible = c.boost > 0;
      if (o.flame.visible) {
        const f = 1.8 + Math.random() * 1.2;
        o.flame.scale.set(f, f, f);
      }
      const tier = c.drift > 0 ? (c.drift > 2.4 ? 3 : c.drift > 1.4 ? 2 : c.drift > 0.7 ? 1 : 0) : 0;
      for (const sp of o.sparks) {
        sp.visible = tier > 0;
        if (sp.visible) {
          sp.material.color.set([0, 0x4dabf7, 0xff922b, 0xff4fd8][tier]);
          const s = 0.8 + Math.random() * 0.8;
          sp.scale.set(s, s, s);
        }
      }
    }
  }

  _placeCamera(dt) {
    const r = this.r;
    const tr = r.track;
    const c = r.race.player;
    const want = tr.world(c.s - 7.6, c.x * 0.7, 4.7 + c.h * 0.6);
    const look = tr.world(c.s + 11, c.x * 0.5, 0.9 + c.h * 0.7);
    const up = tr.upAt(c.s);
    if (!r.camPos || dt >= 1) {
      r.camPos = want.clone();
      r.camUp.copy(up);
    } else {
      r.camPos.lerp(want, damp(7, dt));
      r.camUp.lerp(up, damp(5, dt)).normalize();
    }
    this.camera.position.copy(r.camPos);
    this.camera.up.copy(r.camUp);
    this.camera.lookAt(look);
    // a rival right behind the player would fill the screen: hide any car that comes too close to the camera
    for (const o of r.carObjs) {
      if (!o.c.isPlayer) o.m.visible = o.m.position.distanceToSquared(r.camPos) > 3.6 * 3.6;
    }
    const fov = this.baseFov + (c.boost > 0 ? 8 : 0) + Math.min(6, c.v * 0.12);
    if (Math.abs(this.camera.fov - fov) > 0.05) {
      this.camera.fov += (fov - this.camera.fov) * damp(4, dt);
      this.camera.updateProjectionMatrix();
    }
  }

  _updateHud() {
    const race = this.r.race;
    const p = race.player;
    const hc = this._hudCache;
    if (hc.tk !== p.collected) {
      hc.tk = p.collected;
      this.hud.tickets.textContent = num(p.collected);
    }
    if (hc.place !== p.place) {
      hc.place = p.place;
      this.hud.placeNum.textContent = num(p.place || 6);
    }
    const lap = clamp(p.lap + 1, 1, race.laps);
    if (hc.lap !== lap) {
      hc.lap = lap;
      this.hud.lap.textContent = `${t('lap')} ${num(lap)}/${num(race.laps)}`;
    }
    if (hc.item !== p.item) {
      hc.item = p.item;
      this.hud.item.textContent = p.item ? ITEM_EMOJI[p.item] : '';
      this.hud.item.classList.toggle('full', !!p.item);
      if (p.item) this.hud.item.append(h('span', { class: 'lbl' }, t('tapItem')));
    }
    const total = race.laps * race.track.length;
    race.cars.forEach((c, i) => {
      const f = clamp(c.progress / total, 0, 1);
      this.hud.dots[i].style.top = `${(1 - f) * 100}%`;
    });
  }

  // ---- results ------------------------------------------------------------------------------------------------

  showResults() {
    const r = this.r;
    const race = r.race;
    const place = r.result.place;
    const res = applyResult(this.save, this.trackIndex, place, r.result.collected, this.easy);
    this._saveNow();
    const order = [...race.cars].sort((a, b) => a.place - b.place).slice(0, 3);
    const trackIndex = this.trackIndex;
    this._endRace();
    this.mode = 'results';
    this.sound.engine(false);
    this.sound.setMode('menu');
    if (place === 1) this.sound.play('win');
    // the podium with the top three
    this.turntable.visible = false;
    this.podium.visible = true;
    for (const old of this.podium.children.filter((o) => o.userData.isCar)) this.podium.remove(old);
    const { heights, xs } = this.podium.userData;
    order.forEach((c, i) => {
      const m = this._carModel(c.racer.id);
      m.userData.isCar = true;
      m.position.set(xs[i], heights[i], 0);
      m.rotation.y = -xs[i] * 0.08;
      this.podium.add(m);
    });
    this._clearLayer();
    const stars = h('div', { class: 'cr-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= res.stars ? '' : 'off' }, '⭐')));
    const wonEl = h('span', {}, num(0));
    const hasNext = trackIndex + 1 < TRACKS.length && this.save.unlocked > trackIndex + 1;
    const safe = h('div', { class: 'cr-safe' },
      h('div', { class: 'cr-top', style: 'justify-content:center' },
        h('div', { class: 'cr-col', style: 'gap:calc(var(--u)*1)' },
          h('div', { class: 'cr-title' }, place <= 3 ? `${t('place')} ${ordinal(place)}!` : t('greatRace')),
          stars)),
      h('div', { class: 'cr-bottom', style: 'justify-content:center' },
        h('div', { class: 'cr-col' },
          h('div', { class: 'cr-pill', style: 'font-size:calc(var(--u)*5.4)' }, h('span', { class: 'tk' }), '+', wonEl),
          res.unlockedNext ? h('div', { class: 'cr-sub', style: 'color:#ffe066;font-weight:900' }, '🎉 ', t('newTrack')) : null,
          h('div', { class: 'cr-row' },
            hasNext ? h('button', { class: 'cr-btn gold', onclick: () => this.startRace(trackIndex + 1) }, t('nextRace'), ' ▶') : null,
            h('button', { class: 'cr-btn blue', onclick: () => this.startRace(trackIndex) }, '↻ ', t('retry')),
            h('button', { class: 'cr-btn', onclick: () => this.showGarage() }, '🛠️ ', t('garage')),
            h('button', { class: 'cr-btn small blue', onclick: () => this.showMenu() }, t('menu'))))));
    this.layer.append(safe, this._toastEl());
    // count the tickets up
    let shown = 0;
    const tick = () => {
      if (this.mode !== 'results') return;
      shown = Math.min(res.won, shown + Math.max(1, Math.round(res.won / 25)));
      wonEl.textContent = num(shown);
      if (shown < res.won) setTimeout(tick, 40);
    };
    setTimeout(tick, 300);
  }

  dispose() {
    this.sound.dispose();
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this._endRace();
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
    api.last = g; // for checking speed from the browser console
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.CarnivalRace = api;
export default api;
