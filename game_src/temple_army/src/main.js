// «جيش المعبد» — Temple Army. Entry: window.TempleArmy.start(container, config, post).
//   config: { lang, age, gender, save, base }   post: { type: 'save', save } | { type: 'exit' }
// Lead a growing army of tiny warriors through jungle temples: pick the best gates, free prisoners, dodge spikes, pull levers,
// beat enemy crowds and two bosses. 3D (three.js) from primitives, sound synthesised live. No network, no ads, no tracking.
import * as THREE from 'three';
import { Run, LEVELS, TILE, TRAP, SKINS, UPS, gateLabel, gateGood, normalizeSave, buySkin, buyUp, CAP_R } from './sim.js';
import { Trail, packCrowd } from './crowd.js';
import { Sound } from './audio.js';
import { makeBot } from './bot.js';
import * as Art from './art.js';
import { h, css, makeI18n } from '../../cozy_kit/ui.js';
import { VoiceCoach } from '../../cozy_kit/voice.js';

const TEMPLE_CLIPS = { charge: 3, trick: 3, pickup: 2, bump: 3, near: 2, win: 2, lose: 2, count: 1 };

const S = {
  title: ['جيش المعبد', 'TEMPLE ARMY'], play: ['العب', 'PLAY'], levels: ['المراحل', 'LEVELS'], shop: ['المتجر', 'SHOP'], settings: ['الإعدادات', 'SETTINGS'], quit: ['خروج', 'QUIT'],
  select: ['اختار المعبد', 'CHOOSE A TEMPLE'], locked: ['خلّص المعبد اللي قبله', 'Finish the temple before'], back: ['رجوع', 'Back'], paused: ['استراحة', 'PAUSED'], resume: ['كمّل', 'RESUME'],
  restart: ['إعادة', 'RESTART'], home: ['الرئيسية', 'HOME'], sound: ['الصوت', 'Sound'], won: ['انتصرت! 🏆', 'VICTORY! 🏆'], over: ['خسر الجيش', 'ARMY LOST'], army: ['الجيش', 'Army'],
  coins: ['العملات', 'Coins'], next: ['المعبد التالي', 'NEXT TEMPLE'], tapSound: ['🔊 دوس هنا عشان الصوت', '🔊 Tap here for sound'], max: ['أقصى', 'MAX'], equip: ['البس', 'WEAR'], worn: ['لابس ✓', 'WORN ✓'],
  skins: ['أزياء القائد', 'Captain looks'], ups: ['تقوية الجيش', 'Army upgrades'], u_start: ['جنود البداية +٣', 'Start army +3'], u_power: ['قوة القتال +١٠٪', 'Fight power +10%'], u_speed: ['سرعة القائد +٥٪', 'Captain speed +5%'],
  how: ['اسحب إصبعك لتحريك القائد. اختر أحسن بوابة، حرّر الأسرى، وانتبه من الأشواك!', 'Drag to steer the captain. Pick the best gate, free prisoners, watch the spikes!'],
  boss: ['الوحش', 'BOSS'], survivors: ['الناجون', 'Survivors'], gained: ['عملات جديدة', 'Coins earned'], tip: ['جرّب بوابات أحسن وحرّر الأسرى!', 'Try better gates and free the prisoners!'],
  win_m: ['شطوووووور!', 'Well done!'], win_f: ['شطووووورة!', 'Well done!'], freed: ['تحرّروا!', 'freed!'],
  g_gate: ['اختر البوابة الأقوى', 'Pick the stronger gate'], g_boss: ['حطّم الوحش', 'Smash the Brute'],
  h1: ['اسحب لتحريك القائد · اختر البوابة الأحسن!', 'Drag to move · pick the best gate!'], h2: ['انتظر حتى تنزل الأشواك الحمراء ثم اعبر', 'Wait for the red glowing spikes to sink, then cross'],
  h3: ['اهرب من الدائرة الحمراء ثم اضرب الوحش بجيشك!', 'Run out of the red circle, then hit the brute with your army!'], h4: ['ادخل الذراع لتحطيم المنشار!', 'Walk into the lever to break the saw!'],
  h5: ['حرّر الأسرى قبل البوابات لتكبر أكثر', 'Free prisoners before the gates to grow bigger'], h6: ['تغلّب على العملاق بالأعداد الكبيرة!', 'Overwhelm the golem with numbers!'],
};
const I = makeI18n(S);
const NOSND = { play() {} };

class Game {
  constructor(el, config, post) {
    this.el = el; this.post = post || (() => {});
    I.setLang(config.lang); I.setGirl(config.gender === 'girl');
    this.age = Number(config.age) || 5; this.easy = this.age <= 4;
    this.save = normalizeSave(config.save); this.base = config.base || './';
    this.sound = new Sound(); this.sound.muted = !!this.save.muted;
    this.voice = new VoiceCoach({ base: this.base, lang: I.getLang(), girl: config.gender === 'girl', clips: TEMPLE_CLIPS });
    this.voice.setMuted(this.sound.muted);
    this._voiceArm = () => this.voice.unlock();
    document.addEventListener('pointerdown', this._voiceArm, true);
    this.auto = /[?&]bot=1/.test(location.search);
    if (!document.getElementById('ta-style')) document.head.append(h('style', { id: 'ta-style' }, css('ta', '#2a8a5a', '#12503a', '#ffd23a') + TA_CSS));
    this.root = h('div', { class: 'ta-root', dir: I.getLang() === 'en' ? 'ltr' : 'rtl' });
    el.append(this.root);
    this.layer = h('div', { class: 'ta-layer' });
    this.mode = 'menu'; this.clock = 0; this.keys = new Set(); this.stick = null; this.vec = { x: 0, y: 0 };
    this.fol = []; this.trail = new Trail(); this.anims = []; this.floats = []; this.shake = 0; this.demoLevel = 0;
    this._three();
    this.root.append(this.layer);
    this._resize();
    this.ro = new ResizeObserver(() => this._resize()); this.ro.observe(el);
    this._bind();
    this.last = performance.now();
    this._fonts().then(() => { this.showMenu(); this.renderer.setAnimationLoop(() => this._frame()); });
  }

  async _fonts() { try { const f = new FontFace('Tajawal', `url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`, { weight: '900' }); await Promise.race([f.load().then((ff) => document.fonts.add(ff)), new Promise((r) => setTimeout(r, 900))]); } catch (_) { /* system font */ } }

  // ---------------- three.js ----------------
  _three() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(46, 1, 0.5, 400);
    this.hemi = new THREE.HemisphereLight(0xfff2d8, 0x3a5a40, 1.9); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffeec8, 1.6); this.sun.position.set(-18, 40, 14); this.scene.add(this.sun);
    this.lamp = new THREE.PointLight(0xffb060, 90, 22, 2); this.scene.add(this.lamp);
    this.stage = new THREE.Group(); this.scene.add(this.stage);
    this.glowTex = Art.glowTexture(); this.starTex = Art.starTexture();
    this.me = new Art.Horde(300, 'me', SKINS[0]); this.foe = new Art.Horde(420, 'foe'); this.scene.add(this.me.group, this.foe.group);
    this.captain = null;
    this.pool = []; for (let i = 0; i < 140; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, transparent: true, depthWrite: false })); s.visible = false; s.userData = { life: 0 }; this.scene.add(s); this.pool.push(s); }
    this.teleGroup = new THREE.Group(); this.scene.add(this.teleGroup);
  }

  _resize() {
    const r = this.el.getBoundingClientRect(); this.cw = r.width || window.innerWidth; this.ch = r.height || window.innerHeight;
    this.u = Math.min(this.cw, this.ch) / 100; this.root.style.setProperty('--u', `${this.u}px`);
    this.renderer.setSize(this.cw, this.ch, false); this.camera.aspect = this.cw / this.ch; this.camera.updateProjectionMatrix();
    this.portrait = this.ch > this.cw;
  }

  _material(def) { return def; }

  _buildLevel(run) {
    // remove the old level
    this.stage.traverse((o) => { if (o.material && o.material.map && o.userData.ownTex) o.material.map.dispose(); });
    this.stage.clear(); this.teleGroup.clear(); this.tele = null; this.anims = [];
    const def = run.def; const lv = run.lv; const T = def.theme; const rand = (() => { let s = def.id * 7919 + 13; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; })();
    this.scene.background = new THREE.Color(T.sky); this.scene.fog = new THREE.Fog(T.fog, 55, 170);
    this.hemi.color.set(0xfff2d8); this.hemi.groundColor.set(new THREE.Color(T.fog).multiplyScalar(0.6));
    const W = lv.W; const H = lv.H; const wallSolid = new Uint8Array(W * H); // real walls only (saws stand in corridors)
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (def.map[y][x] === '#') wallSolid[y * W + x] = 1;
    // floor
    const floorTex = Art.floorTexture(def, W, H, wallSolid);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W * TILE, H * TILE), new THREE.MeshLambertMaterial({ map: floorTex }));
    floor.rotation.x = -Math.PI / 2; floor.position.set(W * TILE / 2, 0, H * TILE / 2); floor.userData.ownTex = true; this.stage.add(floor);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshLambertMaterial({ color: new THREE.Color(T.sky) }));
    ground.rotation.x = -Math.PI / 2; ground.position.set(W * TILE / 2, -0.06, H * TILE / 2); this.stage.add(ground);
    // walls (only those touching a floor)
    const WALLH = 2.1; const tiles = [];
    const at = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? 1 : wallSolid[y * W + x]);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (!wallSolid[y * W + x]) continue;
      let edge = false; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (!at(x + dx, y + dy)) edge = true;
      if (edge) tiles.push([x, y]);
    }
    const wm = new THREE.InstancedMesh(Art.geo.box, new THREE.MeshLambertMaterial({ color: 0xffffff }), tiles.length);
    const cm = new THREE.InstancedMesh(Art.geo.box, new THREE.MeshLambertMaterial({ color: 0xffffff }), tiles.length);
    const o = new THREE.Object3D(); const col = new THREE.Color();
    tiles.forEach(([x, y], i) => {
      const hh = WALLH + (rand() - 0.5) * 0.35;
      o.position.set((x + 0.5) * TILE, hh / 2, (y + 0.5) * TILE); o.scale.set(TILE * 1.0, hh, TILE * 1.0); o.rotation.set(0, 0, 0); o.updateMatrix(); wm.setMatrixAt(i, o.matrix);
      wm.setColorAt(i, col.set(T.wall).offsetHSL((rand() - 0.5) * 0.03, 0, (rand() - 0.5) * 0.12));
      o.position.y = hh + 0.12; o.scale.set(TILE * 1.04, 0.28, TILE * 1.04); o.updateMatrix(); cm.setMatrixAt(i, o.matrix);
      cm.setColorAt(i, col.set(0x4f9a44).offsetHSL((rand() - 0.5) * 0.05, 0, (rand() - 0.5) * 0.1));
    });
    this.stage.add(wm, cm);
    // torches + vines on walls that face the corridor to the south, plus a few on west/east faces
    const glow = this.glowTex; this.torches = []; let tn = 0;
    tiles.forEach(([x, y], i) => {
      if (!at(x, y + 1) === false) return;
      if (at(x, y + 1)) return;
      if (tn < 16 && (x * 7 + y * 11) % 5 === 0) { const t = Art.makeTorch(glow); t.position.set((x + 0.5) * TILE, 0, (y + 1) * TILE + 0.25); t.rotation.x = 0.12; this.stage.add(t); this.torches.push(t); tn++; }
      else if ((x * 3 + y * 5) % 3 === 0) { const v = Art.mesh(Art.geo.box, Art.M(0x2f7a38), (x + 0.5) * TILE + (rand() - 0.5) * 1.6, WALLH - 0.9 - rand() * 0.4, (y + 1) * TILE + 0.06, 0.12 + rand() * 0.1, 1.4 + rand() * 1.0, 0.06); this.stage.add(v); }
    });
    this.stage.add(Art.makeTrees(W, H, rand));
    // entities
    this.ent = { gates: [], traps: [], levers: [], saws: [], cages: [], coins: [], hordes: [], exit: null, boss: null };
    for (const g of lv.gates) {
      const grp = lv.groups[g.group]; const first = lv.gates[grp.gates[0]]; const vertical = lv.gates[grp.gates[grp.gates.length - 1]].tx === first.tx && grp.gates.length > 1;
      const m = Art.makeGate(g.op, g.v, gateGood(g.op, g.v), gateLabel(g.op, g.v), vertical); m.position.set(g.x, 0, g.y); this.stage.add(m); this.ent.gates.push(m);
    }
    for (const t of lv.traps) { const m = Art.makeTrap(); m.position.set(t.x, 0, t.y); this.stage.add(m); this.ent.traps.push(m); }
    for (const l of lv.levers) { const m = Art.makeLever(); m.position.set(l.x, 0, l.y); this.stage.add(m); this.ent.levers.push(m); }
    for (const s of lv.saws) { const m = Art.makeSaw(); m.position.set(s.x, 0, s.y); this.stage.add(m); this.ent.saws.push(m); }
    for (const c of lv.cages) { const m = Art.makeCage(); m.position.set(c.x, 0, c.y); this.stage.add(m); this.ent.cages.push(m); }
    for (const c of lv.coins) { const m = Art.makeCoin(); m.position.set(c.x, 0, c.y); this.stage.add(m); this.ent.coins.push(m); }
    if (lv.exit) { const m = Art.makeExit(lv.exit.open); m.position.set(lv.exit.x, 0, lv.exit.y); this.stage.add(m); this.ent.exit = m; this.exitOpen = lv.exit.open; }
    this.ent.hordes = lv.hordes.map((hd) => this._hordeLayout(run, hd));
    if (lv.boss) { const m = lv.boss.kind === 'brute' ? Art.makeBrute() : Art.makeGolem(); m.position.set(lv.boss.x, 0, lv.boss.y); this.stage.add(m); this.ent.boss = { m, down: 0, impact: 0 }; }
    // labels
    this.labels = this.labels || new Map();
    for (const e of this.labels.values()) e.remove(); this.labels.clear();
    this.ent.hordes.forEach((hz, i) => { const e = h('div', { class: 'ta-lab foe' }); this.layer.append(e); this.labels.set(`h${i}`, e); });
    // the army and the captain
    this._skin(); this.fol = []; this.trail = new Trail(); this.trail.push(run.cap.x, run.cap.y); this.prevN = run.n;
    this.hit = 0; this.lastFightN = 0;
    this._buildMini(run);
  }

  _skin() {
    const skin = SKINS.find((s) => s.id === this.save.skin) || SKINS[0];
    this.me.setSkin(skin);
    if (this.captain) this.scene.remove(this.captain);
    this.captain = Art.makeCaptain(skin); this.scene.add(this.captain);
  }

  /** the static shape of a horde: points laid out along the corridor axis with the most room */
  _hordeLayout(run, hd) {
    const free = (x, y) => run.free(x, y, 0.18);
    let best = { x: 0, y: 1 }; let bl = -1;
    for (const d of [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }]) { let l = 0; while (l < 12 && free(hd.x + d.x * l * 0.5, hd.y + d.y * l * 0.5)) l++; if (l > bl) { bl = l; best = d; } }
    const tr = new Trail(); for (let k = 20; k >= 0; k--) tr.pts.push({ x: hd.x + best.x * k * 0.5, y: hd.y + best.y * k * 0.5 }); // newest = the horde centre
    return { hd, axis: best, tr, pts: packCrowd(Math.min(hd.count, 60), tr, hd, free).map((p, i) => ({ ...p, ph: i * 1.3 })) };
  }

  // ---------------- input ----------------
  _bind() {
    const unlock = () => this.sound.unlock();
    for (const ev of ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown']) this.root.addEventListener(ev, unlock, { capture: true, passive: true });
    this.root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.ta-card') || this.mode !== 'play' || this.paused) return;
      this.stick = { id: e.pointerId, x: e.clientX, y: e.clientY };
      try { this.root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
      this._stickUi(true, e.clientX, e.clientY);
    });
    this.root.addEventListener('pointermove', (e) => {
      if (!this.stick || e.pointerId !== this.stick.id) return;
      const R = this.u * 9; let dx = e.clientX - this.stick.x; let dy = e.clientY - this.stick.y; const d = Math.hypot(dx, dy);
      if (d > R) { this.stick.x += (dx / d) * (d - R); this.stick.y += (dy / d) * (d - R); dx = (dx / d) * R; dy = (dy / d) * R; }
      this.vec = d < this.u * 1.2 ? { x: 0, y: 0 } : { x: dx / R, y: dy / R };
      this._stickUi(true, this.stick.x, this.stick.y, dx, dy);
    });
    const up = (e) => { if (this.stick && e.pointerId === this.stick.id) { this.stick = null; this.vec = { x: 0, y: 0 }; this._stickUi(false); } };
    this.root.addEventListener('pointerup', up); this.root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      const k = e.key.toLowerCase();
      if (e.type === 'keydown') {
        if (k === 'p' || k === 'escape') { if (this.mode === 'play') this.togglePause(); return; }
        if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].includes(k)) { this.keys.add(k); if (this.mode === 'play') e.preventDefault(); }
      } else this.keys.delete(k);
    };
    window.addEventListener('keydown', this._onKey); window.addEventListener('keyup', this._onKey);
    this._onVis = () => { if (document.hidden) { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); } else this.sound.resume(); };
    document.addEventListener('visibilitychange', this._onVis);
  }

  _stickUi(show, x, y, dx = 0, dy = 0) {
    if (!this.stickEl) { this.stickEl = h('div', { class: 'ta-stick' }, h('i')); this.layer.append(this.stickEl); }
    this.stickEl.style.display = show ? 'block' : 'none';
    if (show) { const r = this.root.getBoundingClientRect(); this.stickEl.style.left = `${x - r.left}px`; this.stickEl.style.top = `${y - r.top}px`; this.stickEl.firstChild.style.transform = `translate(${dx}px,${dy}px)`; }
  }

  _input() {
    if (this.auto && this.bot && this.run) return this.bot(this.run);
    let x = this.vec.x; let y = this.vec.y; const k = this.keys;
    if (k.has('arrowleft') || k.has('a')) x -= 1; if (k.has('arrowright') || k.has('d')) x += 1; if (k.has('arrowup') || k.has('w')) y -= 1; if (k.has('arrowdown') || k.has('s')) y += 1;
    return { x, y };
  }

  // ---------------- screens ----------------
  _clear() { this.layer.replaceChildren(); this.stickEl = null; if (this.labels) for (const e of this.labels.values()) this.layer.append(e); }
  _soundPill() { const pill = h('button', { class: 'ta-soundpill', onclick: () => this.sound.unlock() }, I.t('tapSound')); this.layer.append(pill); const tick = () => { if (!this.root.isConnected) return; pill.style.display = !this.sound.ctx || this.sound.on || this.sound.muted ? 'none' : 'block'; setTimeout(tick, 600); }; tick(); }
  hint(text, ms = 4200) { if (!this.hintEl) return; this.hintEl.textContent = text; this.hintEl.classList.add('show'); clearTimeout(this._ht); this._ht = setTimeout(() => this.hintEl && this.hintEl.classList.remove('show'), ms); }
  _startDemo(idx) {
    this.run = new Run({ level: idx, easy: true }); this.bot = makeBot(); this.demo = true; this.demoIdx = idx; this._buildLevel(this.run); this.endAt = 0;
  }

  showMenu() {
    this.mode = 'menu'; this.paused = false; this._clear(); this.sound.setMode('menu'); this.hideBoss();
    if (!this.demo || !this.run || this.run.state !== 'play') this._startDemo(this.demoLevel % LEVELS.length);
    this.layer.append(h('div', { class: 'ta-dim ta-light' }, h('div', { class: 'ta-card' }, h('div', { class: 'ta-logo' }, '⚔️ ', I.t('title')),
      h('div', { class: 'ta-menu' },
        h('button', { class: 'ta-btn', onclick: () => { this.sound.play('tap'); this.startLevel(Math.min(this.save.unlocked, LEVELS.length) - 1); } }, '▶ ', I.t('play')),
        h('button', { class: 'ta-btn dark', onclick: () => { this.sound.play('tap'); this.showLevels(); } }, '🗺️ ', I.t('levels')),
        h('button', { class: 'ta-btn dark', onclick: () => { this.sound.play('tap'); this.showShop(); } }, '🛒 ', I.t('shop')),
        h('button', { class: 'ta-btn dark', onclick: () => { this.sound.play('tap'); this.showSettings(); } }, '⚙️ ', I.t('settings')),
        h('button', { class: 'ta-btn alt', onclick: () => this.post({ type: 'exit' }) }, I.t('quit')))), h('div', { class: 'ta-pill ta-coinpill' }, '🪙 ', I.num(this.save.coins))));
    this._soundPill();
  }

  showLevels() {
    this._clear(); const ar = I.getLang() !== 'en';
    const cards = LEVELS.map((d, i) => {
      const lock = i + 1 > this.save.unlocked; const st = this.save.stars[i] || 0;
      return h('button', { class: `ta-env${lock ? ' lock' : ''}`, style: `background:linear-gradient(180deg,#${d.theme.fog.toString(16).padStart(6, '0')},#${d.theme.sky.toString(16).padStart(6, '0')})`, onclick: () => { if (lock) { this.hint(I.t('locked'), 2000); return; } this.sound.play('tap'); this.startLevel(i); } },
        h('i', {}, d.boss ? (d.boss.kind === 'golem' ? '🗿' : '👹') : `${i + 1}`), h('span', {}, ar ? d.name[0] : d.name[1]), h('span', {}, lock ? '🔒' : (st ? '⭐'.repeat(st) : '☆')));
    });
    this.layer.append(h('div', { class: 'ta-dim ta-light' }, h('div', { class: 'ta-card' }, h('div', { class: 'ta-title' }, I.t('select')), h('div', { class: 'ta-grid' }, cards), h('button', { class: 'ta-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
    this.hintEl = h('div', { class: 'ta-hint' }); this.layer.append(this.hintEl); this._soundPill();
  }

  showSettings() {
    this._clear();
    const b = h('button', { class: 'ta-btn', onclick: () => { this.save.muted = !this.save.muted; this.sound.setMuted(this.save.muted); this.voice.setMuted(this.save.muted); this.post({ type: 'save', save: this.save }); b.textContent = `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`; this.sound.play('tap'); } }, `${this.save.muted ? '🔇' : '🔊'} ${I.t('sound')}`);
    this.layer.append(h('div', { class: 'ta-dim ta-light' }, h('div', { class: 'ta-card' }, h('div', { class: 'ta-title' }, '⚙️ ', I.t('settings')), b, h('div', { class: 'ta-small' }, I.t('how')), h('button', { class: 'ta-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  showShop() {
    this._clear(); const ar = I.getLang() !== 'en';
    const redo = () => { this.post({ type: 'save', save: this.save }); this._skin(); this.showShop(); };
    const skins = SKINS.map((k) => {
      const own = this.save.skins.includes(k.id); const worn = this.save.skin === k.id;
      return h('button', { class: `ta-skin${worn ? ' worn' : ''}`, onclick: () => { if (buySkin(this.save, k.id)) { this.sound.play('buy'); redo(); } else this.sound.play('tap'); } },
        h('i', { style: `background:linear-gradient(135deg,#${k.cape.toString(16).padStart(6, '0')},#${k.tunic.toString(16).padStart(6, '0')})` }), h('span', {}, ar ? k.ar : k.en), h('small', {}, worn ? I.t('worn') : own ? I.t('equip') : `🪙 ${I.num(k.cost)}`));
    });
    const ups = Object.keys(UPS).map((key) => {
      const u = UPS[key]; const lv = this.save.up[key]; const full = lv >= u.max; const cost = u.cost[lv];
      const pips = '■'.repeat(lv) + '□'.repeat(u.max - lv);
      return h('button', { class: `ta-up${!full && this.save.coins >= cost ? ' can' : ''}`, onclick: () => { if (buyUp(this.save, key)) { this.sound.play('buy'); redo(); } else this.sound.play('tap'); } }, h('span', {}, I.t(`u_${key}`)), h('small', {}, pips), h('b', {}, full ? I.t('max') : `🪙 ${I.num(cost)}`));
    });
    this.layer.append(h('div', { class: 'ta-dim ta-light' }, h('div', { class: 'ta-card' }, h('div', { class: 'ta-title' }, '🛒 ', I.t('shop')), h('div', { class: 'ta-pill' }, '🪙 ', I.num(this.save.coins)),
      h('div', { class: 'ta-small' }, I.t('skins')), h('div', { class: 'ta-skins' }, skins), h('div', { class: 'ta-small' }, I.t('ups')), h('div', { class: 'ta-ups' }, ups), h('button', { class: 'ta-btn dark', onclick: () => this.showMenu() }, I.t('back')))));
  }

  startLevel(i) {
    this.voice.say('count');
    this.levelIdx = i; this.demo = false; this.run = new Run({ level: i, easy: this.easy, up: this.save.up });
    this.bot = this.auto ? makeBot() : null; this._buildLevel(this.run);
    this.mode = 'play'; this.paused = false; this.endAt = 0; this.shake = 0;
    this._clear(); this.sound.setMode('play');
    this.armyEl = h('span', {}, ''); this.coinEl = h('span', {}, '');
    const pause = h('button', { class: 'ta-round', 'aria-label': I.t('paused'), onclick: () => this.togglePause() }, '⏸');
    this.bossBar = h('div', { class: 'ta-boss' }, h('span', {}, '👹 ', I.t('boss')), h('div', { class: 'ta-hp' }, this.bossFill = h('b')), this.bossNum = h('span', {}, ''));
    this.mini = null; // the original video has no minimap
    this.layer.append(h('div', { class: 'ta-top' }, pause, h('div', { class: 'ta-pill small' }, this.goalEl = h('span', {}, I.t('g_gate'))), h('div', { style: 'display:flex;gap:calc(var(--u)*1.2)' }, h('div', { class: 'ta-pill' }, this.coinEl), h('span', { style: 'display:none' }, this.armyEl))), this.bossBar);
    this.hintEl = h('div', { class: 'ta-hint', style: 'top:calc(var(--u)*24)' }); this.layer.append(this.hintEl); this._soundPill();
    this.hideBoss(); this.hint(I.t(`h${Math.min(6, i + 1)}`), 5000);
    for (const e of this.labels.values()) this.layer.append(e);
    this.capLab = h('div', { class: 'ta-lab me plain' }); this.layer.append(this.capLab);
  }

  hideBoss() { if (this.bossBar) this.bossBar.style.display = 'none'; }

  togglePause() {
    if (this.mode !== 'play') return;
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseEl = h('div', { class: 'ta-dim' }, h('div', { class: 'ta-card' }, h('div', { class: 'ta-title' }, I.t('paused')), h('button', { class: 'ta-btn', onclick: () => this.togglePause() }, '▶ ', I.t('resume')), h('button', { class: 'ta-btn dark', onclick: () => this.startLevel(this.levelIdx) }, '🔄 ', I.t('restart')), h('button', { class: 'ta-btn dark', onclick: () => { this.demo = false; this._startDemo(this.demoLevel); this.showMenu(); } }, '🏠 ', I.t('home'))));
      this.layer.append(this.pauseEl);
    } else if (this.pauseEl) this.pauseEl.remove();
  }

  _results() {
    const r = this.run.result; const i = this.levelIdx; const s = this.save;
    if (r.won) { s.stars[i] = Math.max(s.stars[i] || 0, r.stars); s.unlocked = Math.max(s.unlocked, Math.min(LEVELS.length, i + 2)); s.best[i] = Math.max(s.best[i] || 0, r.survivors); }
    s.coins += r.coins; this.post({ type: 'save', save: s });
    this.sound.setMode(null); this.sound.play(r.won ? 'win' : 'over'); this.voice.say(r.won ? 'win' : 'lose'); if (r.won) this.sound.play('cheer');
    this.mode = 'end';
    const starsEl = h('div', { class: 'ta-stars' }, [1, 2, 3].map((k) => h('span', { class: k <= r.stars ? '' : 'off' }, '⭐')));
    this.layer.append(h('div', { class: 'ta-dim' }, h('div', { class: 'ta-card' },
      h('div', { class: 'ta-logo', style: `color:${r.won ? '#ffe04a' : '#ff6a5a'}` }, r.won ? I.t('won') : I.t('over')), r.won ? starsEl : h('div', { class: 'ta-small' }, I.t('tip')),
      r.won ? h('div', { class: 'ta-small' }, I.t('win')) : null,
      h('div', { class: 'ta-row' }, h('span', {}, I.t('survivors')), h('span', {}, '⚔️ ', I.num(r.survivors))), h('div', { class: 'ta-row' }, h('span', {}, I.t('gained')), h('span', {}, '🪙 ', I.num(r.coins))),
      h('button', { class: 'ta-btn alt', onclick: () => this.startLevel(i) }, '🔄 ', I.t('restart')),
      r.won && i + 1 < LEVELS.length ? h('button', { class: 'ta-btn', onclick: () => this.startLevel(i + 1) }, '▶ ', I.t('next')) : null,
      h('button', { class: 'ta-btn dark', onclick: () => { this.demo = false; this._startDemo(this.demoLevel); this.showMenu(); } }, '🏠 ', I.t('home')))));
  }

  // ---------------- the loop ----------------
  _frame() {
    const now = performance.now(); const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now; this.clock += dt;
    const run = this.run;
    if (run) {
      if (this.mode === 'play' && !this.paused) {
        const evs = run.step(dt, this._input()); this._events(evs, this.sound);
        if (run.state !== 'play' && !this.endAt) this.endAt = this.clock + 1.1;
        if (this.endAt && this.clock > this.endAt && this.mode === 'play') this._results();
      } else if (this.mode !== 'play' && this.demo) {
        const evs = run.step(dt, this.bot(run)); this._events(evs, NOSND);
        if (run.state !== 'play') { this.demoEnd = (this.demoEnd || this.clock + 2.2); if (this.clock > this.demoEnd) { this.demoEnd = 0; this.demoLevel++; this._startDemo(this.demoLevel % LEVELS.length); } }
      }
      if (!this.paused) this._sync(dt);
      this._hud();
    }
    this.renderer.render(this.scene, this.camera);
  }

  _hud() {
    const run = this.run; if (this.mode !== 'play' || !this.armyEl) return;
    this.armyEl.textContent = I.num(run.n); this.coinEl.textContent = `🪙 ${I.num(this.save.coins + run.coins)}`;
    const b = run.lv.boss; const bs = run.bossState;
    if (b && bs.phase === 'fight') { this.bossBar.style.display = 'flex'; this.bossFill.style.width = `${Math.max(0, (b.hp / b.hpMax) * 100)}%`; this.bossNum.textContent = I.num(Math.ceil(b.hp)); this.goalEl.textContent = I.t('g_boss'); } else if (!b || bs.phase === 'dead') this.hideBoss();
    if (this.mini && this.clock - (this.miniAt || 0) > 0.12) { this.miniAt = this.clock; this._drawMini(); }
  }

  _project(x, y, z) { const v = new THREE.Vector3(x, y, z).project(this.camera); return [(v.x * 0.5 + 0.5) * this.cw, (-v.y * 0.5 + 0.5) * this.ch, v.z < 1]; }
  _label(el, text, x, y, z, show) {
    if (!show) { el.style.display = 'none'; return; }
    const [sx, sy, ok] = this._project(x, y, z); if (!ok) { el.style.display = 'none'; return; }
    el.style.display = 'block'; el.style.transform = `translate(${sx}px,${sy}px) translate(-50%,-100%)`; if (el.textContent !== text) el.textContent = text;
  }
  _float(wx, wy, wz, text, color) {
    const [sx, sy, ok] = this._project(wx, wy, wz); if (!ok) return;
    const e = h('div', { class: 'ta-float', style: `left:${sx}px;top:${sy}px;color:${color}` }, text); this.layer.append(e); setTimeout(() => e.remove(), 1300);
  }
  _burst(x, z, n, y = 1) {
    let k = 0;
    for (const s of this.pool) { if (k >= n) break; if (s.userData.life > 0) continue; k++; const a = Math.random() * 6.28; const v = 2 + Math.random() * 3.5; s.userData = { life: 0.8 + Math.random() * 0.4, max: 1.1, vx: Math.cos(a) * v, vy: 3 + Math.random() * 3, vz: Math.sin(a) * v }; s.position.set(x, y, z); s.scale.setScalar(0.5 + Math.random() * 0.4); s.visible = true; s.material.opacity = 1; }
  }
  _partFx(dt) { for (const s of this.pool) { const d = s.userData; if (d.life <= 0) { s.visible = false; continue; } d.life -= dt; d.vy -= 11 * dt; s.position.x += d.vx * dt; s.position.y = Math.max(0.1, s.position.y + d.vy * dt); s.position.z += d.vz * dt; s.material.opacity = Math.min(1, d.life * 2.2); if (d.life <= 0) s.visible = false; } }

  // ---------------- events: sound + effects ----------------
  _events(evs, snd) {
    const run = this.run; const c = run.cap;
    for (const e of evs) {
      switch (e.type) {
        case 'gate': snd.play(e.good ? 'gateGood' : 'gateBad'); this.voice.say(e.good ? 'charge' : 'bump'); this._float(c.x, 3.2, c.y, gateLabel(e.op, e.v), e.good ? '#7affb0' : '#ff7a6a'); this._burst(c.x, c.y, e.good ? 14 : 5, 1.5); if (e.good) snd.play('cheer'); break;
        case 'cage': snd.play('cage'); snd.play('cheer'); this.voice.say('charge'); this._float(c.x, 3, c.y, `+${e.count}`, '#7ad8ff'); { const q = run.lv.cages[e.id]; this._burst(q.x, q.y, 16, 1.2); this.anims.push({ t: 0, life: 0.6, id: e.id, kind: 'cage' }); } break;
        case 'coin': snd.play('coin'); this.voice.say('pickup'); break;
        case 'lever': snd.play('lever'); break;
        case 'sawBreak': { snd.play('sawBreak'); const q = run.lv.saws[e.id]; this._burst(q.x, q.y, 22, 1.5); this.shake = Math.max(this.shake, 0.35); break; }
        case 'sawHit': case 'trapHit': snd.play('hit'); this.voice.say('bump'); this.shake = Math.max(this.shake, 0.5); this.hit = 1; this._burst(c.x, c.y, 8, 1); break;
        case 'hurt': this._float(c.x, 3, c.y, `−${e.amount}`, '#ff6a5a'); break;
        case 'trapWarn': if (Math.hypot(run.lv.traps[e.id].x - c.x, run.lv.traps[e.id].y - c.y) < 16) snd.play('trapWarn'); break;
        case 'trapUp': if (Math.hypot(run.lv.traps[e.id].x - c.x, run.lv.traps[e.id].y - c.y) < 16) snd.play('trapUp'); break;
        case 'fightStart': snd.play('fight'); this.fightTick = 0; break;
        case 'fightEnd': if (e.won) { snd.play('cheer'); this.voice.say('trick'); this._float(c.x, 3.2, c.y, `⚔️ ${e.left}`, '#ffe04a'); } else { this.hit = 1; this.voice.say('bump'); } break;
        case 'bossStart': snd.play('roar'); this.voice.say('near'); this.shake = 0.5; snd.setMode && this.mode === 'play' && this.sound.setMode('boss'); break;
        case 'tele': snd.play('tele'); this._teleStart(e); break;
        case 'impact': snd.play('slam'); this.shake = Math.max(this.shake, 0.7); this._burst(e.x, e.y, 14, 0.5); if (this.ent.boss) this.ent.boss.impact = 1; if (e.hit) this.hit = 1; this._teleEnd(); break;
        case 'bossDown': snd.play('crumble'); this.voice.say('win'); this.shake = 0.9; if (this.ent.boss) this.ent.boss.down = 0.001; { const b = run.lv.boss; this._burst(b.x, b.y, 40, 2); } if (this.mode === 'play') this.sound.setMode('play'); break;
        case 'exitOpen': snd.play('open'); break;
        case 'won': case 'over': break;
        default: break;
      }
    }
  }

  _teleStart(e) {
    this._teleEnd();
    const run = this.run; const tl = run.bossState.tele; if (!tl) return;
    const g = new THREE.Group(); const red = new THREE.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.28, depthWrite: false, side: THREE.DoubleSide });
    let fill; let edge;
    if (tl.kind === 'slam') {
      edge = new THREE.Mesh(new THREE.RingGeometry(tl.r * 0.93, tl.r, 40), new THREE.MeshBasicMaterial({ color: 0xff3a2a, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
      fill = new THREE.Mesh(new THREE.CircleGeometry(tl.r, 40), red); g.position.set(tl.x, 0.08, tl.y);
    } else {
      edge = new THREE.Mesh(new THREE.RingGeometry(tl.r * 0.96, tl.r, 40, 1, -tl.half, tl.half * 2), new THREE.MeshBasicMaterial({ color: 0xff3a2a, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
      fill = new THREE.Mesh(new THREE.CircleGeometry(tl.r, 40, -tl.half, tl.half * 2), red); g.position.set(tl.x, 0.08, tl.y); g.rotation.y = -tl.dir;
    }
    for (const m of [edge, fill]) { m.rotation.x = -Math.PI / 2; g.add(m); }
    const grow = new THREE.Mesh(fill.geometry, new THREE.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide })); grow.rotation.x = -Math.PI / 2; grow.position.y = 0.01; g.add(grow);
    this.teleGroup.add(g); this.tele = { g, grow, kind: tl.kind };
  }
  _teleEnd() { if (this.tele) { this.teleGroup.remove(this.tele.g); this.tele = null; } }

  // ---------------- per-frame visuals ----------------
  _sync(dt) {
    const run = this.run; const lv = run.lv; const ent = this.ent; const c = run.cap; const t = this.clock;
    if (!ent) return;
    // gates
    lv.gates.forEach((g, i) => { const m = ent.gates[i]; const grp = lv.groups[g.group]; const taken = grp.taken >= 0; const mine = grp.taken === g.id; m.userData.panel.material.opacity = taken ? (mine ? 0.55 + Math.sin(t * 8) * 0.1 : 0.06) : 0.3 + Math.sin(t * 3 + i) * 0.06; m.userData.label.visible = !taken || mine; });
    // traps
    lv.traps.forEach((tr, i) => {
      const m = ent.traps[i]; const st = tr.state; const rim = m.userData.rim.material;
      rim.emissive.setHex(st === 'warn' ? (Math.sin(t * 22) > 0 ? 0xff2200 : 0x661100) : st === 'up' ? 0xff0000 : 0x000000);
      m.userData.spikes.forEach((s, k) => { const target = st === 'up' ? 1.3 : st === 'warn' ? 0.45 + Math.sin(t * 25 + k) * 0.08 : 0.08; s.scale.y += (target - s.scale.y) * Math.min(1, dt * 24); s.position.y = 0.1 + s.scale.y * 0.5; });
    });
    lv.saws.forEach((s, i) => { const m = ent.saws[i]; if (!m) return; if (s.alive) m.userData.disc.rotation.z -= dt * 14; else { m.visible = false; } });
    lv.levers.forEach((l, i) => { const a = ent.levers[i].userData.arm; const target = l.pulled ? -0.7 : 0.7; a.rotation.z += (target - a.rotation.z) * Math.min(1, dt * 10); });
    lv.coins.forEach((q, i) => { const m = ent.coins[i]; m.visible = !q.got; m.rotation.y = t * 3 + i; m.position.y = Math.sin(t * 3 + i) * 0.15; });
    lv.cages.forEach((q, i) => { const m = ent.cages[i]; if (q.open) { const a = this.anims.find((x) => x.kind === 'cage' && x.id === i); const p = a ? a.t / a.life : 1; m.userData.bars.visible = false; m.userData.pris.children.forEach((pr, k) => { pr.position.y = Math.abs(Math.sin(p * 9 + k)) * 0.8; const s = Math.max(0, 1 - p); pr.scale.setScalar(s); pr.position.x += ((c.x - q.x) * 0.04) * Math.min(p, 1); }); m.userData.pris.visible = p < 1; } });
    for (const a of this.anims) a.t += dt; this.anims = this.anims.filter((a) => a.t < a.life + 0.1);
    if (ent.exit && lv.exit.open !== this.exitOpen) { this.exitOpen = lv.exit.open; ent.exit.userData.set(this.exitOpen); }
    if (ent.exit) ent.exit.userData.door.material.opacity = (this.exitOpen ? 0.55 : 0.8) + Math.sin(t * 4) * 0.08;
    for (const tt of this.torches) { const f = tt.userData.fl; f.scale.y = 0.8 + Math.sin(t * 17 + tt.position.x) * 0.15 + Math.random() * 0.1; tt.userData.glow.material.opacity = 0.75 + Math.sin(t * 11 + tt.position.z) * 0.15; }
    this._bossVisual(dt);
    this._army(dt);
    this._captainVisual(dt);
    // tele marker
    if (this.tele) { const tl = run.bossState.tele; if (tl) { const p = Math.min(1, tl.t / tl.dur); this.tele.grow.scale.set(p, p, 1); this.tele.g.children[0].material.opacity = 0.65 + Math.sin(t * 20) * 0.25; } else this._teleEnd(); }
    this._partFx(dt);
    // camera
    this._camera(dt);
    // labels
    if (this.mode === 'play') {
      if (this.capLab) this._label(this.capLab, `${I.num(run.n)}`, c.x, 3.4 + Math.min(1.5, Math.sqrt(run.n) * 0.05), c.y, true);
      ent.hordes.forEach((hz, i) => { const near = hz.hd.alive && Math.hypot(hz.hd.x - c.x, hz.hd.y - c.y) < 40; const cnt = run.fight && run.fight.horde === i ? Math.ceil(run.fight.b) : hz.hd.count; this._label(this.labels.get(`h${i}`), `${I.num(cnt)}`, run.fight && run.fight.horde === i ? this.foeCenter.x : hz.hd.x, 3.6, run.fight && run.fight.horde === i ? this.foeCenter.y : hz.hd.y, near); });
    } else for (const e of this.labels.values()) e.style.display = 'none';
    this.hit = Math.max(0, this.hit - dt * 2.5);
    this.root.style.boxShadow = this.hit > 0.01 ? `inset 0 0 ${this.u * 14}px rgba(255,40,30,${this.hit * 0.6})` : 'none';
    this.lamp.position.set(c.x, 4.5, c.y + 1);
  }

  _army(dt) {
    const run = this.run; const c = run.cap; const lv = run.lv; const t = this.clock;
    if (c.moving) this.trail.push(c.x, c.y);
    const total = Math.max(0, run.n - 1); const m = Math.min(total, 299);
    const free = (x, y) => run.free(x, y, 0.2);
    // player followers: target formation along the trail
    const tg = packCrowd(m, this.trail, c, free);
    while (this.fol.length < m) { const j = this.fol.length; this.fol.push({ x: c.x + (Math.random() - 0.5) * 0.6, y: c.y + (Math.random() - 0.5) * 0.6, ph: j * 1.7 }); }
    if (this.fol.length > m) { const lost = this.fol.length - m; for (let k = 0; k < Math.min(lost, 5); k++) { const f = this.fol[this.fol.length - 1 - k]; this._burst(f.x, f.y, 1, 0.8); } this.fol.length = m; }
    const k = Math.min(1, dt * (run.fight ? 5 : 9));
    const head = Math.atan2(c.fy, c.fx);
    let faceFoe = null; const fight = run.fight;
    if (fight) { const hd = lv.hordes[fight.horde]; faceFoe = Math.atan2(hd.y - c.y, hd.x - c.x); }
    for (let i = 0; i < m; i++) { const f = this.fol[i]; const p = tg[i]; f.x += (p.x - f.x) * k; f.y += (p.y - f.y) * k; f.face = faceFoe !== null ? faceFoe : head; }
    this.me.update(this.fol, m, t, c.moving || !!fight, head);
    // enemies
    const foes = []; this.foeCenter = this.foeCenter || { x: 0, y: 0 };
    this.ent.hordes.forEach((hz, i) => {
      const hd = hz.hd; if (!hd.alive) return;
      if (fight && fight.horde === i) {
        const away = { x: hz.axis.x, y: hz.axis.y };
        const dir = Math.hypot(hd.x - c.x, hd.y - c.y) || 1; const fx = (hd.x - c.x) / dir; const fy = (hd.y - c.y) / dir;
        const k2 = Math.min(1, fight.time * 1.3);
        const ex = hd.x + (c.x + fx * 3.0 - hd.x) * k2; const ey = hd.y + (c.y + fy * 3.0 - hd.y) * k2; this.foeCenter = { x: ex, y: ey };
        const tr = new Trail(); for (let q = 20; q >= 0; q--) tr.pts.push({ x: ex + fx * q * 0.5, y: ey + fy * q * 0.5 });
        const cnt = Math.min(Math.ceil(fight.b), 100); const pts = packCrowd(cnt, tr, { x: ex, y: ey }, free);
        pts.forEach((p, j) => foes.push({ x: p.x, y: p.y, ph: j * 1.3, face: Math.atan2(c.y - p.y, c.x - p.x) }));
        // clash: stars where soldiers fall
        this.fightTick = (this.fightTick || 0) + dt; if (this.fightTick > 0.09) { this.fightTick = 0; const lose = (this.lastFightN || fight.a) - fight.a; this.lastFightN = fight.a; this._burst(ex - fx * 1.2 + (Math.random() - 0.5) * 1.5, ey - fy * 1.2 + (Math.random() - 0.5) * 1.5, 2, 1.2); if (Math.random() < 0.5) this.sound.play('clash'); void lose; void away; }
      } else if (Math.hypot(hd.x - c.x, hd.y - c.y) < 48) { for (const p of hz.pts) foes.push({ x: p.x, y: p.y, ph: p.ph, face: Math.atan2(c.y - p.y, c.x - p.x) }); }
    });
    this.foe.update(foes, foes.length, t, !!fight, 0);
    if (!fight) this.lastFightN = 0;
  }

  _captainVisual(dt) {
    const run = this.run; const c = run.cap; const g = this.captain; const t = this.clock; const u = g.userData; const mv = c.moving && run.state === 'play' && !run.fight;
    g.position.set(c.x, 0, c.y);
    const target = this.run.fight ? Math.atan2(this.foeCenter.y - c.y, this.foeCenter.x - c.x) : Math.atan2(c.fy, c.fx);
    let want = Math.PI / 2 - target; let d = want - (g.rotation.y || 0); d = Math.atan2(Math.sin(d), Math.cos(d)); g.rotation.y += d * Math.min(1, dt * 14);
    const k = t * 13;
    u.legL.rotation.x = mv ? Math.sin(k) * 0.9 : 0; u.legR.rotation.x = mv ? -Math.sin(k) * 0.9 : 0;
    u.armL.rotation.x = mv ? -Math.sin(k) * 0.8 : 0; u.armR.rotation.x = run.fight ? -1.6 + Math.sin(t * 16) * 0.8 : mv ? Math.sin(k) * 0.8 : (run.state === 'won' ? -2.6 : 0);
    u.body.position.y = mv ? Math.abs(Math.sin(k)) * 0.12 : Math.sin(t * 3) * 0.02; u.cape.rotation.x = 0.18 + (mv ? 0.35 : 0) + Math.sin(t * 6) * 0.05;
    if (run.state === 'over') { g.rotation.z = Math.min(1.4, (g.rotation.z || 0) + dt * 3); } else g.rotation.z = 0;
  }

  _bossVisual(dt) {
    const b = this.ent.boss; if (!b) return; const run = this.run; const lb = run.lv.boss; const bs = run.bossState; const c = run.cap; const t = this.clock; const m = b.m; const u = m.userData;
    const fac = Math.PI / 2 - Math.atan2(c.y - lb.y, c.x - lb.x);
    if (bs.phase === 'dead') {
      b.down += dt;
      if (u.kind === 'brute') { u.body.rotation.z = Math.min(1.5, b.down * 2.2); m.position.y = -Math.max(0, b.down - 0.9) * 1.4; if (b.down > 2.4) m.visible = false; }
      else {
        if (!b.vel) b.vel = u.parts.map((p) => ({ vx: (Math.random() - 0.5) * 6, vy: 3 + Math.random() * 5, vz: (Math.random() - 0.5) * 6, rx: (Math.random() - 0.5) * 6, rz: (Math.random() - 0.5) * 6 }));
        u.parts.forEach((p, i) => { const v = b.vel[i]; v.vy -= 16 * dt; p.position.x += v.vx * dt; p.position.y = Math.max(0.3, p.position.y + v.vy * dt); p.position.z += v.vz * dt; p.rotation.x += v.rx * dt; p.rotation.z += v.rz * dt; if (b.down > 1.6) p.scale.multiplyScalar(Math.max(0, 1 - dt * 1.6)); });
        if (b.down > 3.2) m.visible = false;
      }
      return;
    }
    m.rotation.y = fac; u.body.position.y = Math.sin(t * 2.2) * 0.08;
    const tl = bs.tele; b.impact = Math.max(0, b.impact - dt * 2.2);
    let raise = 0; if (tl) raise = Math.min(1, tl.t / tl.dur);
    const armRot = tl ? -2.5 * raise : b.impact > 0 ? 0.5 * b.impact : Math.sin(t * 2) * 0.1;
    u.armR.rotation.x += (armRot - u.armR.rotation.x) * Math.min(1, dt * (tl ? 8 : 14));
    if (u.kind === 'golem') u.armL.rotation.x = tl && tl.kind === 'sweep' ? -1.6 : Math.sin(t * 1.7) * 0.08; else u.armL.rotation.x = Math.sin(t * 2 + 1) * 0.12;
    if (tl && tl.kind === 'sweep') u.body.rotation.y = Math.sin(raise * Math.PI) * 0.6 * (raise > 0.8 ? 1.6 : 1);
    else u.body.rotation.y *= 0.9;
    const sc = 1 + (bs.flash > 0 ? 0.03 : 0); m.scale.setScalar(sc);
  }

  _camera(dt) {
    const run = this.run; const c = run.cap; const b = run.lv.boss; const bs = run.bossState;
    let fx = c.x; let fz = c.y; let zoom = 1 + Math.min(0.85, Math.sqrt(Math.max(1, run.n)) / 26);
    if (b && bs.phase === 'fight') { fx = c.x + (b.x - c.x) * 0.45; fz = c.y + (b.y - c.y) * 0.45; zoom += 0.3; }
    if (run.fight) zoom += 0.1;
    const base = this.portrait ? 33 : 22; const H = base * zoom; const D = H * 0.62;
    this.cf = this.cf || { x: fx, z: fz, h: H };
    const k = Math.min(1, dt * 4); this.cf.x += (fx - this.cf.x) * k; this.cf.z += (fz - this.cf.z) * k; this.cf.h += (H - this.cf.h) * Math.min(1, dt * 2);
    this.shake = Math.max(0, this.shake - dt * 1.8); const sh = this.shake * 0.5;
    this.camera.position.set(this.cf.x + (Math.random() - 0.5) * sh, this.cf.h, this.cf.z + this.cf.h * 0.62 + (Math.random() - 0.5) * sh);
    this.camera.lookAt(this.cf.x, 0, this.cf.z - 1.5); void D;
  }

  _buildMini(run) {
    const W = run.lv.W; const H = run.lv.H; const cv = document.createElement('canvas'); cv.width = W * 8; cv.height = H * 8; const g = cv.getContext('2d');
    g.fillStyle = 'rgba(10,25,20,.78)'; g.fillRect(0, 0, cv.width, cv.height);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (run.def.map[y][x] !== '#') { g.fillStyle = 'rgba(190,200,160,.75)'; g.fillRect(x * 8, y * 8, 8, 8); }
    this.miniBase = cv;
  }
  _drawMini() {
    const run = this.run; const cv = this.mini; if (!cv || !this.miniBase) return; const g = cv.getContext('2d'); const B = this.miniBase;
    const s = Math.min(cv.width / B.width, cv.height / B.height); g.clearRect(0, 0, cv.width, cv.height); g.drawImage(B, 0, 0, B.width * s, B.height * s);
    const k = (s * 8) / TILE; const dot = (x, y, col, r) => { g.fillStyle = col; g.beginPath(); g.arc(x * k, y * k, r, 0, 6.3); g.fill(); };
    const lv = run.lv;
    for (const q of lv.gates) dot(q.x, q.y, lv.groups[q.group].taken >= 0 ? '#888' : gateGood(q.op, q.v) ? '#3af08a' : '#ff5a4a', 3);
    for (const q of lv.cages) if (!q.open) dot(q.x, q.y, '#7ad8ff', 3.5);
    for (const q of lv.levers) if (!q.pulled) dot(q.x, q.y, '#ffd23a', 3.5);
    for (const q of lv.saws) if (q.alive) dot(q.x, q.y, '#ffffff', 3);
    for (const q of lv.hordes) if (q.alive) dot(q.x, q.y, '#ff2a2a', 4);
    if (lv.boss && run.bossState.phase !== 'dead') dot(lv.boss.x, lv.boss.y, '#ff2aff', 6);
    dot(lv.exit.x, lv.exit.y, lv.exit.open ? '#ffe04a' : '#884422', 5);
    dot(run.cap.x, run.cap.y, '#ffffff', 4.5); dot(run.cap.x, run.cap.y, '#2a7ae8', 2.8);
  }

  pause() { this.sound.suspend(); if (this.mode === 'play' && !this.paused) this.togglePause(); }
  dispose() { this.renderer.setAnimationLoop(null); this.sound.dispose(); this.voice.dispose(); document.removeEventListener('pointerdown', this._voiceArm, true); if (this.ro) this.ro.disconnect(); document.removeEventListener('visibilitychange', this._onVis); window.removeEventListener('keydown', this._onKey); window.removeEventListener('keyup', this._onKey); this.renderer.dispose(); try { this.renderer.forceContextLoss(); } catch (_) { /* fine */ } this.root.remove(); }
}

const TA_CSS = `
.ta-dim.ta-light{background:rgba(5,30,20,.38)}
.ta-root .ta-card{max-height:96%}
@media (orientation:landscape){.ta-card{gap:calc(var(--u)*1.1);padding:calc(var(--u)*2.4) calc(var(--u)*5)}.ta-card .ta-btn{min-height:calc(var(--u)*9);font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.8) calc(var(--u)*5)}.ta-stars{font-size:calc(var(--u)*8)}.ta-logo{font-size:calc(var(--u)*7)}.ta-title{font-size:calc(var(--u)*6)}.ta-row{font-size:calc(var(--u)*3.3)}}
.ta-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.ta-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.8)}
.ta-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.ta-grid{grid-template-columns:repeat(3,1fr)}}
.ta-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*3);min-height:calc(var(--u)*22);cursor:pointer;justify-content:center}
.ta-env i{font-style:normal;font-size:calc(var(--u)*7)}.ta-env.lock{filter:grayscale(1) brightness(.6)}
.ta-pill.small{font-size:calc(var(--u)*3.2)}.ta-pill.army{background:linear-gradient(180deg,#2a7ae8,#12409a)}
.ta-coinpill{position:absolute;top:calc(var(--u)*2.5);right:calc(var(--u)*3);pointer-events:none}
.ta-boss{position:absolute;left:calc(var(--u)*6);right:calc(var(--u)*6);top:calc(var(--u)*15);display:none;align-items:center;gap:calc(var(--u)*1.5);direction:ltr;font-weight:900;font-size:calc(var(--u)*3.6);text-shadow:0 0 4px #000}
.ta-hp{flex:1;height:calc(var(--u)*3);background:rgba(0,0,0,.5);border:calc(var(--u)*.4) solid #fff;border-radius:99px;overflow:hidden}.ta-hp b{display:block;height:100%;background:linear-gradient(180deg,#ff6a5a,#c8302a)}
.ta-lab{position:absolute;left:0;top:0;pointer-events:none;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.2) calc(var(--u)*2.2);border-radius:99px;border:calc(var(--u)*.4) solid #fff;color:#fff;white-space:nowrap;display:none;text-shadow:0 1px 2px #000}
.ta-lab.me{background:linear-gradient(180deg,#3a8af0,#12409a)}.ta-lab.me.plain{background:none;border:0;font-size:calc(var(--u)*6.4);-webkit-text-stroke:calc(var(--u)*.5) #0d2a55;paint-order:stroke fill;text-shadow:0 2px 3px rgba(0,0,0,.5)}.ta-lab.foe{background:linear-gradient(180deg,#e8483a,#8a1a12)}
.ta-float{position:absolute;pointer-events:none;font-weight:900;font-size:calc(var(--u)*6);text-shadow:0 0 6px #000,0 0 3px #000;animation:taup 1.2s ease-out forwards;transform:translate(-50%,-50%)}
@keyframes taup{to{transform:translate(-50%,-260%);opacity:0}}
.ta-stick{position:absolute;width:calc(var(--u)*18);height:calc(var(--u)*18);margin:calc(var(--u)*-9) 0 0 calc(var(--u)*-9);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.7);background:rgba(255,255,255,.12);display:none;pointer-events:none}
.ta-stick i{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:rgba(255,255,255,.7)}
.ta-root canvas.ta-mini{inset:auto;position:absolute;left:calc(var(--u)*2.5);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:calc(var(--u)*2);border:calc(var(--u)*.4) solid rgba(255,255,255,.8);pointer-events:none;opacity:.92}
.ta-skins{display:grid;grid-template-columns:repeat(5,1fr);gap:calc(var(--u)*1.2);width:100%}
.ta-skin{font-family:inherit;border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*2.4);background:rgba(0,0,0,.25);color:#fff;font-weight:900;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);padding:calc(var(--u)*1) calc(var(--u)*.4);font-size:calc(var(--u)*2.6);cursor:pointer}
.ta-skin i{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;border:calc(var(--u)*.4) solid #fff}.ta-skin.worn{border-color:#ffd23a;background:rgba(255,210,58,.25)}.ta-skin small{font-size:calc(var(--u)*2.4)}
.ta-ups{display:flex;flex-direction:column;gap:calc(var(--u)*1.2);width:100%}
.ta-up{font-family:inherit;display:flex;justify-content:space-between;align-items:center;gap:calc(var(--u)*1.5);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*2.4);background:rgba(0,0,0,.25);color:#fff;font-weight:900;padding:calc(var(--u)*1.4) calc(var(--u)*2.2);font-size:calc(var(--u)*3.2);cursor:pointer}
.ta-up.can{background:linear-gradient(180deg,#4ad87a,#1f9a4a)}.ta-up small{letter-spacing:2px;font-size:calc(var(--u)*2.6)}
`;

const api = { start(el, config, post) { const g = new Game(el, config || {}, post); api.last = g; return { dispose: () => g.dispose(), pause: () => g.pause() }; } };
window.TempleArmy = api;
export default api;

