// «الفأر والجبنة» — Mouse and Cheese (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #1).
// A 3D toy-box hedge maze: a little mouse in a red cap runs through green hedges with bright block pillars to a big
// wedge of cheese. Swipe, tap where to go, use the arrows or the keyboard; the mouse runs to the next crossing.
// Crumbs mark the way already walked; after a quiet moment glowing paw prints show the next steps. Five mazes a set,
// bigger with age; the learning star only the first time the set is finished. Words are said by the app's voice;
// music and effects are made in code. Bumping a wall is a soft boing, never a mistake.
import * as THREE from 'three';
import { polish } from '../kit/realism.js';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';

// a clear, calm music-box tune for the maze (no shaker, a bell lead, a little slower)
const THEME_MAZE = { ...THEME_GARDEN, tempo: 100, lead: 'bell', shaker: false };
import { MazeSet, N, E, S, W, DX, DY } from './sim.js';

const TEXT = {
  title: ['الفأر والجبنة', 'Mouse and Cheese'],
  intro: ['ساعد الفأر يوصل للجبنة!', 'Help the mouse reach the cheese!'],
  howTo: ['اسحب أو دوس على السهم', 'Swipe or tap an arrow'],
  hint: ['امشي ورا الآثار المنوّرة', 'Follow the glowing paw prints'],
  bump: ['أوبس! حيطة. جرّب طريق تاني', 'Oops, a hedge! Try another way'],
  yum1_m: ['برافو! لقيت الجبنة!', 'Yay! You found the cheese!'],
  yum1_f: ['برافو! لقيتي الجبنة!', 'Yay! You found the cheese!'],
  yum2: ['هممم! جبنة لذيذة!', 'Yum! Tasty cheese!'],
  yum3_m: ['شاطر! يلا المتاهة الجاية', 'Great! On to the next maze'],
  yum3_f: ['ممتازة! يلا المتاهة الجاية', 'Great! On to the next maze'],
  next: ['متاهة أكبر شوية!', 'A slightly bigger maze!'],
  end: ['الفأر شبعان! 🧀', 'The mouse is full! 🧀'],
};

const PILLAR_COLORS = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0xff8a3a, 0xb06aff, 0x3ad08a];

class Game {
  constructor(el, cfg, post) {
    // music only (owner request 2026-11-12: the voice and effects sounded bad here): a clear, gentle tune
    this.shell = new Shell(el, cfg, post, { text: TEXT, theme: THEME_MAZE, musicOnly: true });
    this.sh = this.shell;
    const sh = this.sh;
    // three.js
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    polish(this.renderer, this.scene);
    this.scene.background = skyTexture();
    this.scene.fog = new THREE.Fog(0xcdeeff, 30, 70);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
    this.scene.add(new THREE.HemisphereLight(0xeaf6ff, 0x6ab86a, 1.6));
    const sun = new THREE.DirectionalLight(0xfff2d8, 2.2);
    sun.position.set(-6, 14, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 40 });
    this.sun = sun;
    this.scene.add(sun, sun.target);
    this._world();
    this.mouse = makeMouse();
    this.scene.add(this.mouse);
    this.cheese = makeCheese();
    this.scene.add(this.cheese);
    this.mazeGroup = new THREE.Group();
    this.scene.add(this.mazeGroup);
    this.paws = [];
    this.confetti = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    this.set = new MazeSet(sh.age);
    this._build();
    sh.fonts().then(() => this._title());
    this._loop();
  }

  // ---- scene --------------------------------------------------------------------------------------------------------

  _world() {
    const ground = new THREE.Mesh(new THREE.CircleGeometry(60, 48), new THREE.MeshStandardMaterial({ color: 0x8fdc6a, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    this.scene.add(ground);
    // trees, flowers and toy blocks around the play mat
    const r = mulberry(7);
    const trunk = new THREE.MeshStandardMaterial({ color: 0x9a6a3a, roughness: 0.9 });
    const leaf = [0x4ac85a, 0x3ab04a, 0x6ad86a].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + r() * 0.2;
      const d = 11 + r() * 9;
      const g = new THREE.Group();
      const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 1.2, 8), trunk);
      tk.position.y = 0.6;
      const crown = new THREE.Mesh(new THREE.SphereGeometry(0.9 + r() * 0.5, 14, 10), leaf[i % 3]);
      crown.position.y = 1.7;
      crown.castShadow = true;
      g.add(tk, crown);
      g.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
      this.scene.add(g);
    }
    const petal = [0xff7ab8, 0xffe05a, 0xffffff, 0xff9a5a, 0xb88aff].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }));
    const fl = new THREE.SphereGeometry(0.13, 8, 6);
    for (let i = 0; i < 120; i++) {
      const a = r() * Math.PI * 2;
      const d = 7.5 + r() * 14;
      const m = new THREE.Mesh(fl, petal[i % petal.length]);
      m.position.set(Math.cos(a) * d, 0.1, Math.sin(a) * d);
      this.scene.add(m);
    }
  }

  /** Builds the hedges, pillars, mat and frame for the current maze. */
  _build() {
    const g = this.mazeGroup;
    for (const c of [...g.children]) { g.remove(c); c.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
    const m = this.set.maze;
    const n = m.size;
    this.n = n;
    const off = (n - 1) / 2;
    this.cell = (x, y) => new THREE.Vector3(x - off, 0, y - off);
    // the felt mat with soft checks, inside a wooden toy-box frame
    const mat = new THREE.Mesh(new THREE.BoxGeometry(n + 0.3, 0.12, n + 0.3), new THREE.MeshStandardMaterial({ map: matTexture(n), roughness: 0.95 }));
    mat.position.y = -0.06;
    mat.receiveShadow = true;
    g.add(mat);
    const wood = new THREE.MeshStandardMaterial({ color: 0xc8864a, roughness: 0.7 });
    for (const [x, z, w, d] of [[0, -(n / 2 + 0.45), n + 1.2, 0.6], [0, n / 2 + 0.45, n + 1.2, 0.6], [-(n / 2 + 0.45), 0, 0.6, n], [n / 2 + 0.45, 0, 0.6, n]]) {
      const b = new THREE.Mesh(new RoundBox(w, 0.42, d), wood);
      b.position.set(x, 0.1, z);
      b.castShadow = true;
      b.receiveShadow = true;
      g.add(b);
    }
    // hedges: one box per closed side (shared sides once), instanced
    const segs = [];
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (!m.canMove(x, y, N) && y === 0) segs.push([x, y - 0.5, true]);
        if (!m.canMove(x, y, W) && x === 0) segs.push([x - 0.5, y, false]);
        if (!m.canMove(x, y, S)) segs.push([x, y + 0.5, true]);
        if (!m.canMove(x, y, E)) segs.push([x + 0.5, y, false]);
      }
    }
    const hedgeMat = new THREE.MeshStandardMaterial({ map: hedgeTexture(), color: 0xffffff, roughness: 0.9 });
    const hedges = new THREE.InstancedMesh(new RoundBox(1.02, 0.46, 0.22), hedgeMat, segs.length);
    const q = new THREE.Object3D();
    const col = new THREE.Color();
    segs.forEach(([x, y, horiz], i) => {
      q.position.set(x - off, 0.23, y - off);
      q.rotation.set(0, horiz ? 0 : Math.PI / 2, 0);
      q.updateMatrix();
      hedges.setMatrixAt(i, q.matrix);
      hedges.setColorAt(i, col.setHSL(0.31 + ((i * 37) % 10) / 400, 0.55, 0.42 + ((i * 13) % 7) / 100));
    });
    hedges.castShadow = true;
    hedges.receiveShadow = true;
    g.add(hedges);
    // bright toy-block pillars at every corner where hedges meet
    const corners = [];
    for (let y = 0; y <= n; y++) for (let x = 0; x <= n; x++) corners.push([x - 0.5, y - 0.5]);
    const pil = new THREE.InstancedMesh(new RoundBox(0.3, 0.58, 0.3), new THREE.MeshStandardMaterial({ roughness: 0.45 }), corners.length);
    const knob = new THREE.InstancedMesh(new THREE.SphereGeometry(0.13, 12, 8), new THREE.MeshStandardMaterial({ roughness: 0.35 }), corners.length);
    corners.forEach(([x, y], i) => {
      const c = col.setHex(PILLAR_COLORS[(Math.round(x + 0.5) + Math.round(y + 0.5) * 2) % PILLAR_COLORS.length]);
      q.position.set(x - off, 0.29, y - off);
      q.rotation.set(0, 0, 0);
      q.updateMatrix();
      pil.setMatrixAt(i, q.matrix);
      pil.setColorAt(i, c);
      q.position.y = 0.62;
      q.updateMatrix();
      knob.setMatrixAt(i, q.matrix);
      knob.setColorAt(i, c);
    });
    pil.castShadow = true;
    g.add(pil, knob);
    // crumbs on the walked way
    this.crumbs = new THREE.Group();
    g.add(this.crumbs);
    this.crumbAt = new Set();
    this._crumb(0, 0);
    // the start mat
    const start = new THREE.Mesh(new THREE.CircleGeometry(0.36, 24), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }));
    start.rotation.x = -Math.PI / 2;
    start.position.copy(this.cell(0, 0)).setY(0.005);
    g.add(start);
    // place the mouse and the cheese
    this.mouse.position.copy(this.cell(0, 0));
    this.mouse.rotation.y = Math.PI / 2 * 0;
    this.face = Math.PI / 2; // facing east (+x)
    this.mouse.rotation.y = this.face;
    const [gx, gy] = m.goal;
    this.cheese.position.copy(this.cell(gx, gy));
    this.cheese.visible = true;
    this.cheese.scale.setScalar(1.25);
    this.runPath = null;
    this.idle = 0;
    this._clearPaws();
    this.sun.target.position.set(0, 0, 0);
    this._fit();
  }

  _crumb(x, y) {
    const k = `${x},${y}`;
    if (this.crumbAt.has(k)) return;
    this.crumbAt.add(k);
    const r = mulberry(x * 31 + y * 17 + 3);
    for (let i = 0; i < 3; i++) {
      const c = new THREE.Mesh(new THREE.DodecahedronGeometry(0.04 + r() * 0.025), new THREE.MeshStandardMaterial({ color: 0xf5c86a, roughness: 0.8 }));
      c.position.copy(this.cell(x, y)).add(new THREE.Vector3((r() - 0.5) * 0.4, 0.03, (r() - 0.5) * 0.4));
      this.crumbs.add(c);
    }
  }

  _clearPaws() {
    for (const p of this.paws) { this.mazeGroup.remove(p); p.geometry.dispose(); }
    this.paws = [];
  }

  _showHint() {
    this._clearPaws();
    const cells = this.set.hint(3);
    cells.forEach(([x, y], i) => {
      const p = new THREE.Mesh(new THREE.CircleGeometry(0.18, 20), new THREE.MeshBasicMaterial({ color: 0xffe45a, transparent: true, opacity: 0.9 }));
      p.rotation.x = -Math.PI / 2;
      p.position.copy(this.cell(x, y)).setY(0.02);
      p.userData.k = i;
      this.mazeGroup.add(p);
      this.paws.push(p);
    });
    this.sh.say(this.sh.t('hint'), true);
    this.sh.sound.play('sparkle');
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    this.camera.updateProjectionMatrix();
    this._fit();
    if (this.pad) this._placePad();
  }

  /** Puts the camera so the whole maze shows, tilted like looking down at a toy on the floor. */
  _fit() {
    if (!this.n) return;
    const a = this.camera.aspect;
    const wide = a > 0.9;
    const half = this.n / 2 + 0.9;
    const vf = THREE.MathUtils.degToRad(this.camera.fov / 2);
    // fit height (with room for the top bar) and width (with room for the arrows)
    const usableW = wide ? (a > 1.3 ? 0.66 : 0.5) : 0.94;
    const dh = (half * (wide ? 1.42 : 1.8)) / Math.tan(vf); // room above for the top bar (and below for the arrows when upright)
    const dw = half / (Math.tan(vf) * a * usableW);
    const d = Math.max(dh, dw) * 1.02;
    const tilt = THREE.MathUtils.degToRad(64);
    const shiftX = wide ? (this.sh.T.lang === 'en' ? 1 : -1) * half * (a > 1.3 ? 0.42 : 0.85) : 0; // arrows on one side in landscape
    const shiftZ = wide ? (a > 1.3 ? -half * 0.2 : 0) : half * 0.5; // landscape: lower, under the bubble; upright: higher, above the arrows
    this.camTarget = new THREE.Vector3(shiftX, 0, shiftZ);
    this.camera.position.set(shiftX, Math.sin(tilt) * d, shiftZ + Math.cos(tilt) * d);
    this.camera.lookAt(this.camTarget);
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _bind() {
    const root = this.sh.root;
    let start = null;
    root.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.lk-dim')) return;
      start = { x: e.clientX, y: e.clientY, t: performance.now() };
    });
    root.addEventListener('pointerup', (e) => {
      if (!start || this.mode !== 'play') { start = null; return; }
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      const dist = Math.hypot(dx, dy);
      start = null;
      if (dist > this.sh.u * 5) {
        // a swipe: up = north on the screen
        this._go(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? E : W) : (dy > 0 ? S : N));
        return;
      }
      // a tap: go towards the tapped spot on the mat
      const r = root.getBoundingClientRect();
      const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, this.camera);
      const hit = new THREE.Vector3();
      if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit)) return;
      const me = this.cell(this.set.x, this.set.y);
      const vx = hit.x - me.x;
      const vz = hit.z - me.z;
      if (Math.max(Math.abs(vx), Math.abs(vz)) < 0.4) return;
      this._go(Math.abs(vx) > Math.abs(vz) ? (vx > 0 ? E : W) : (vz > 0 ? S : N));
    });
    this._onKey = (e) => {
      const d = { ArrowUp: N, ArrowRight: E, ArrowDown: S, ArrowLeft: W }[e.key];
      if (d === undefined || this.mode !== 'play') return;
      e.preventDefault();
      this._go(d);
    };
    window.addEventListener('keydown', this._onKey);
  }

  _makePad() {
    const b = (d, label, ch) => h('button', { class: 'lk-rbtn lmz-a', 'data-d': d, 'aria-label': label, onclick: (e) => { e.stopPropagation(); this._go(d); } }, ch);
    const en = this.sh.T.lang === 'en';
    this.pad = h('div', { class: 'lmz-pad' },
      b(N, en ? 'Up' : 'فوق', '▲'), b(W, en ? 'Left' : 'شمال', '◀'), b(E, en ? 'Right' : 'يمين', '▶'), b(S, en ? 'Down' : 'تحت', '▼'),
      h('button', { class: 'lk-rbtn y lmz-hintbtn', 'aria-label': en ? 'Hint' : 'مساعدة', onclick: (e) => { e.stopPropagation(); this.idle = 0; this._showHint(); } }, '💡'));
    this.sh.layer.append(this.pad);
    this._placePad();
  }

  _placePad() {
    const wide = this.sh.w > this.sh.h * 0.9;
    const en = this.sh.T.lang === 'en';
    const squareish = wide && this.sh.w < this.sh.h * 1.3;
    this.pad.style.setProperty('--pad', squareish ? '12' : '15');
    this.pad.style.cssText = (squareish ? '--pad:12;' : '') + (wide
      ? `${en ? 'right' : 'left'}:calc(var(--u)*4);bottom:calc(var(--u)*6)`
      : 'left:50%;transform:translateX(-50%);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom))');
  }

  /** Starts a run in direction [d]. */
  _go(d) {
    if (this.mode !== 'play' || this.runPath) return;
    this.idle = 0;
    this._clearPaws();
    const ev = this.set.move(d);
    if (!ev) return;
    if (ev.type === 'bump') {
      this.sh.sound.play('bump');
      setTimeout(() => this.sh.sound.play('squeak'), 120);
      this.bumpT = 0.35;
      this.bumpD = d;
      this.bumps = (this.bumps || 0) + 1;
      if (this.bumps % 3 === 1) this.sh.say(this.sh.t('bump'), false, 2.2);
      return;
    }
    this.face = [Math.PI, Math.PI / 2, 0, -Math.PI / 2][d];
    this.runPath = { cells: ev.cells, i: 0, f: 0, won: ev.won, from: this.mouse.position.clone() };
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _title() {
    this.mode = 'title';
    this.sh.titleCard(this.sh.t('title'), '🐭🧀', () => this._startSet());
  }

  _startSet() {
    this.set = new MazeSet(this.sh.age, Math.floor(Math.random() * 1e9));
    this._build();
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '🧀');
    this.lightDots(0);
    this._makePad();
    this.sh.sound.setMode('play');
    this.mode = 'play';
    this.sh.say(this.sh.t('intro'), true, 3.5);
    setTimeout(() => this.mode === 'play' && this.set.round === 0 && this.set.moves === 0 && this.sh.say(this.sh.t('howTo'), false, 3), 4200);
  }

  _arrived() {
    this.mode = 'eat';
    const sh = this.sh;
    sh.sound.play('nibble');
    setTimeout(() => sh.sound.play('roundWin'), 450);
    setTimeout(() => sh.sound.play('cheer'), 700);
    const line = ['yum1', 'yum2', 'yum3'][this.set.round % 3];
    sh.say(sh.t(line), true, 2.4);
    this.lightDots(this.set.round + 1);
    this.eatT = 0;
    this._burst(this.cheese.position);
    setTimeout(() => {
      if (this.set.next()) {
        this._build();
        this.mode = 'play';
        sh.sound.play('whoosh');
        if (this.set.round === 2 || this.set.round === 4) sh.say(sh.t('next'), false, 2);
      } else {
        this.mode = 'end';
        sh.sound.setMode('calm');
        sh.finishCard(sh.t('title'), '🐭🧀', () => this._startSet());
      }
    }, 2300);
  }

  _burst(at) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xff7ab8, 0xb06aff];
    for (let i = 0; i < 40; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.14), new THREE.MeshBasicMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide }));
      m.position.copy(at).setY(0.6);
      const a = Math.random() * Math.PI * 2;
      const s = 1.5 + Math.random() * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * s * 0.5, 3 + Math.random() * 2.5, Math.sin(a) * s * 0.5), r: new THREE.Vector3(Math.random() * 8, Math.random() * 8, 0), life: 2 };
      this.scene.add(m);
      this.confetti.push(m);
    }
  }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    const m = this.mouse;
    const legs = m.userData.legs;
    // running along the corridor
    if (this.runPath) {
      const r = this.runPath;
      r.f += dt * 4.2;
      const target = this.cell(...r.cells[r.i]);
      const from = r.i === 0 ? r.from : this.cell(...r.cells[r.i - 1]);
      m.position.lerpVectors(from, target, Math.min(1, r.f));
      if (r.f >= 1) {
        this.sh.sound.play('step', r.i % 2);
        this._crumb(...r.cells[r.i]);
        r.i++;
        r.f = 0;
        if (r.i >= r.cells.length) {
          this.runPath = null;
          if (r.won) this._arrived();
        }
      }
      m.position.y = Math.abs(Math.sin(time * 18)) * 0.06;
      legs.forEach((l, i) => { l.rotation.x = Math.sin(time * 18 + i * Math.PI) * 0.6; });
    } else {
      m.position.y = Math.max(0, m.position.y - dt);
      legs.forEach((l) => { l.rotation.x *= 0.8; });
      if (this.mode === 'play') {
        this.idle += dt;
        if (this.idle > 8 && !this.paws.length) this._showHint();
      }
    }
    // a soft bounce back off a hedge
    if (this.bumpT > 0) {
      this.bumpT -= dt;
      const k = Math.sin((0.35 - this.bumpT) / 0.35 * Math.PI) * 0.12;
      const base = this.cell(this.set.x, this.set.y);
      m.position.x = base.x + DX[this.bumpD] * k;
      m.position.z = base.z + DY[this.bumpD] * k;
      m.rotation.z = Math.sin(this.bumpT * 40) * 0.08;
      if (this.bumpT <= 0) { m.position.copy(base); m.rotation.z = 0; }
    }
    // turn to face the way of running
    let dr = this.face - m.rotation.y;
    while (dr > Math.PI) dr -= Math.PI * 2;
    while (dr < -Math.PI) dr += Math.PI * 2;
    m.rotation.y += dr * Math.min(1, dt * 14);
    m.userData.tail.rotation.y = Math.sin(time * 5) * 0.35;
    m.userData.head.rotation.z = Math.sin(time * 2.2) * 0.06;
    // the cheese spins and sparkles; eaten = it shrinks while the mouse hops
    const c = this.cheese;
    if (this.mode === 'eat') {
      this.eatT += dt;
      c.scale.setScalar(Math.max(0.001, 1.25 - this.eatT * 0.9));
      m.position.y = Math.abs(Math.sin(this.eatT * 9)) * 0.35;
      m.rotation.y += dt * 6;
    } else {
      c.rotation.y = time * 0.9;
      c.position.y = 0.05 + Math.sin(time * 2.4) * 0.05;
      c.scale.setScalar(1.25);
    }
    c.userData.glow.material.opacity = 0.35 + Math.sin(time * 3) * 0.15;
    for (const p of this.paws) p.material.opacity = 0.45 + 0.45 * Math.sin(time * 5 - p.userData.k * 0.9);
    // confetti
    for (let i = this.confetti.length - 1; i >= 0; i--) {
      const f = this.confetti[i];
      const u = f.userData;
      u.life -= dt;
      u.v.y -= 6 * dt;
      f.position.addScaledVector(u.v, dt);
      f.rotation.x += u.r.x * dt;
      f.rotation.y += u.r.y * dt;
      if (u.life <= 0 || f.position.y < 0) { this.scene.remove(f); f.geometry.dispose(); this.confetti.splice(i, 1); }
    }
    // menu: the camera drifts round the maze
    if (this.mode === 'title' && this.camTarget) {
      const d = this.camera.position.distanceTo(this.camTarget);
      this.camera.position.set(this.camTarget.x + Math.sin(time * 0.15) * d * 0.25, this.camera.position.y, this.camTarget.z + Math.cos(time * 0.15) * d * 0.5);
      this.camera.lookAt(this.camTarget);
    }
    this.renderer.render(this.scene, this.camera);
  }

  pause() { this.sh.pause(); }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._onKey);
    this.renderer.dispose();
    this.sh.dispose();
  }
}

// ---- models (all drawn in code) ---------------------------------------------------------------------------------------

/** A box with softly rounded edges (toy-like). */
class RoundBox extends THREE.BufferGeometry {
  constructor(w, hh, d, r = Math.min(w, hh, d) * 0.22) {
    super();
    const g = new THREE.BoxGeometry(w, hh, d, 6, 6, 6);
    const p = g.attributes.position;
    const v = new THREE.Vector3();
    const hw = w / 2 - r, hhh = hh / 2 - r, hd = d / 2 - r;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const c = new THREE.Vector3(Math.max(-hw, Math.min(hw, v.x)), Math.max(-hhh, Math.min(hhh, v.y)), Math.max(-hd, Math.min(hd, v.z)));
      const n = v.clone().sub(c);
      if (n.lengthSq() > 0) v.copy(c.add(n.normalize().multiplyScalar(r)));
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    this.copy(g);
    g.dispose();
  }
}

function makeMouse() {
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: 0xc4c4d4, roughness: 0.75 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xffa0b8, roughness: 0.6 });
  const black = new THREE.MeshStandardMaterial({ color: 0x1a1a2a, roughness: 0.25 });
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const red = new THREE.MeshStandardMaterial({ color: 0xe8323a, roughness: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), fur);
  body.scale.set(0.95, 0.85, 1.25);
  body.position.y = 0.2;
  body.castShadow = true;
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), new THREE.MeshStandardMaterial({ color: 0xf0eef6, roughness: 0.8 }));
  belly.scale.set(0.9, 0.8, 1.1);
  belly.position.set(0, 0.16, 0.06);
  const head = new THREE.Group();
  head.position.set(0, 0.32, 0.22);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 16), fur);
  skull.scale.set(1, 0.95, 1.05);
  skull.castShadow = true;
  const snout = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.18, 16), fur);
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.03, 0.15);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), pink);
  nose.position.set(0, -0.03, 0.245);
  head.add(skull, snout, nose);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), fur);
    ear.scale.set(1, 1, 0.3);
    ear.position.set(s * 0.13, 0.12, -0.02);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 10), pink);
    inner.scale.set(1, 1, 0.3);
    inner.position.set(s * 0.13, 0.12, 0.01);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), black);
    eye.position.set(s * 0.065, 0.03, 0.135);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), white);
    glint.position.set(s * 0.065 + 0.01, 0.045, 0.165);
    head.add(ear, inner, eye, glint);
    for (const k of [-1, 1]) {
      const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.16, 4), black);
      wh.rotation.z = Math.PI / 2 + k * 0.15;
      wh.position.set(s * 0.1, -0.03 + k * 0.012, 0.2);
      head.add(wh);
    }
  }
  // the little red cap with a visor
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), red);
  cap.position.set(0, 0.09, -0.01);
  cap.rotation.x = -0.2;
  const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 18, 1, false, -Math.PI / 2, Math.PI), red);
  visor.position.set(0, 0.1, 0.08);
  visor.rotation.x = -0.15;
  const button = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffe45a }));
  button.position.set(0, 0.205, -0.03);
  head.add(cap, visor, button);
  const legs = [];
  for (const [x, z] of [[-0.1, 0.12], [0.1, 0.12], [-0.1, -0.12], [0.1, -0.12]]) {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), pink);
    l.scale.set(1, 0.6, 1.4);
    l.position.set(x, 0.04, z);
    legs.push(l);
    g.add(l);
  }
  const tail = new THREE.Group();
  tail.position.set(0, 0.16, -0.26);
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.05, -0.15), new THREE.Vector3(0.08, 0.02, -0.3), new THREE.Vector3(0.02, 0.12, -0.4)]);
  const tm = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.018, 6), pink);
  tail.add(tm);
  g.add(body, belly, head, tail);
  g.userData = { legs, tail, head };
  g.scale.setScalar(1.35);
  return g;
}

function makeCheese() {
  const g = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(-0.32, -0.2);
  shape.lineTo(0.32, -0.2);
  shape.lineTo(-0.32, 0.26);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 3 });
  geo.center();
  const yellow = new THREE.MeshStandardMaterial({ color: 0xffc83a, roughness: 0.45, emissive: 0x6a4a00, emissiveIntensity: 0.25 });
  const w = new THREE.Mesh(geo, yellow);
  w.rotation.x = -Math.PI / 2;
  w.position.y = 0.2;
  w.castShadow = true;
  g.add(w);
  const holeMat = new THREE.MeshStandardMaterial({ color: 0xd89a1a, roughness: 0.7 });
  for (const [x, y, z, r] of [[-0.14, 0.36, 0.08, 0.055], [0.06, 0.36, 0.1, 0.04], [-0.2, 0.36, -0.1, 0.035], [0.02, 0.22, 0.17, 0.045], [-0.22, 0.24, 0.17, 0.035]]) {
    const hle = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), holeMat);
    hle.scale.set(1, 0.35, 1);
    if (Math.abs(z) > 0.16) hle.scale.set(1, 1, 0.35);
    hle.position.set(x, y, z);
    g.add(hle);
  }
  const glow = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.46, 32), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0.4, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.01;
  g.add(glow);
  g.userData.glow = glow;
  g.scale.setScalar(1.25);
  return g;
}

function skyTexture() {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#7ac8ff');
  gr.addColorStop(0.6, '#c8ecff');
  gr.addColorStop(1, '#e8f8ff');
  g.fillStyle = gr;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function hedgeTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#5ab84a';
  g.fillRect(0, 0, 128, 128);
  const r = mulberry(11);
  for (let i = 0; i < 260; i++) {
    g.fillStyle = ['#3e9a3a', '#6ad05a', '#4aa840', '#82dc6a'][i % 4];
    g.beginPath();
    g.ellipse(r() * 128, r() * 128, 4 + r() * 5, 2.5 + r() * 3, r() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function matTexture(n) {
  const c = document.createElement('canvas');
  c.width = c.height = 64 * n;
  const g = c.getContext('2d');
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      g.fillStyle = (x + y) % 2 ? '#bfeaa0' : '#a8e08a';
      g.fillRect(x * 64, y * 64, 64, 64);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PAD_CSS = `
.lmz-pad{position:absolute;display:grid;grid-template-columns:repeat(3,calc(var(--u)*var(--pad,15)));grid-template-rows:repeat(3,calc(var(--u)*var(--pad,15)));gap:calc(var(--u)*1);direction:ltr;pointer-events:none}
.lmz-pad .lk-rbtn{width:100%;height:100%;font-size:calc(var(--u)*6.5)}
.lmz-pad [data-d="0"]{grid-column:2;grid-row:1}
.lmz-pad [data-d="3"]{grid-column:1;grid-row:2}
.lmz-pad [data-d="1"]{grid-column:3;grid-row:2}
.lmz-pad [data-d="2"]{grid-column:2;grid-row:3}
.lmz-pad .lmz-hintbtn{grid-column:2;grid-row:2;transform:scale(.8)}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lmz-style')) document.head.append(h('style', { id: 'lmz-style' }, PAD_CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnMaze = api;
export default api;
