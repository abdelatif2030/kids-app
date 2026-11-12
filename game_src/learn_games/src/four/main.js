// «أربعة ورا بعض» — Four in a Row (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #6).
// A glossy blue toy frame on a playroom table. Two children take turns on one device: tap a column and a chunky red or
// yellow disc drops in with a bounce and a clack. A big arrow shows whose turn it is. Four in a row glows and a fanfare
// plays; a full frame is a happy draw. No computer opponent, no score kept for the dashboard.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Four, COLS, ROWS } from './sim.js';

const TEXT = {
  title: ['أربعة ورا بعض', 'Four in a Row'],
  red: ['الأحمر', 'Red'],
  yellow: ['الأصفر', 'Yellow'],
  turn: ['دور', 'Turn:'],
  how: ['دوس على عمود عشان تنزّل القرص', 'Tap a column to drop a disc'],
  redWins: ['الأحمر وصّل أربعة! برافو عليكم', 'Red made four! Well played both'],
  yellowWins: ['الأصفر وصّل أربعة! برافو عليكم', 'Yellow made four! Well played both'],
  draw: ['تعادل! لعبتوا حلو أوي', 'A draw! You both played so well'],
};

const THEME_FOUR = {
  ...THEME_GARDEN,
  tempo: 104,
  lead: 'pluck',
  chords: [[45, [64, 69, 72]], [41, [65, 69, 72]], [48, [64, 67, 72]], [43, [62, 67, 71]], [45, [64, 69, 72]], [41, [65, 69, 72]], [43, [62, 67, 71]], [45, [64, 69, 76]]],
  melody: [[0, 0, 76], [0, 3, 79], [0, 6, 81], [1, 0, 77], [1, 4, 72], [2, 0, 76], [2, 3, 79], [2, 6, 84], [3, 0, 83], [3, 4, 79], [4, 0, 81], [4, 4, 76], [5, 0, 77], [5, 4, 81], [6, 0, 79], [6, 4, 74], [7, 0, 76]],
};

const S = 1; // cell size
const RED = 0xf0303a;
const YEL = 0xffc81a;

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_FOUR });
    const sh = this.sh;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd8e8ff);
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xb8a8d8, 1.5));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-4, 7, 8);
    key.castShadow = true;
    this.scene.add(key);
    this._room();
    this.frame = makeFrame();
    this.scene.add(this.frame);
    this.discs = new THREE.Group();
    this.scene.add(this.discs);
    this.ghost = makeDisc(RED);
    this.ghost.material = this.ghost.material.map((m) => { const c = m.clone(); c.transparent = true; c.opacity = 0.55; return c; });
    this.scene.add(this.ghost);
    this.fx = [];
    this.drops = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🔴🟡🔴🟡', () => this._start()));
    this._loop();
  }

  _room() {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#e8f0ff'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#dce8ff' : '#e8f0ff'; g.fillRect(i * 32, 0, 32, 256); }
      for (let i = 0; i < 16; i++) { g.fillStyle = ['#ffb8c8', '#ffe08a', '#a8e0b8'][i % 3]; g.beginPath(); g.arc((i * 61) % 256, (i * 97) % 256, 6, 0, Math.PI * 2); g.fill(); }
    }, [6, 3]), roughness: 1 }));
    wall.position.set(0, 4, -3);
    this.scene.add(wall);
    const table = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 5), new THREE.MeshStandardMaterial({ color: 0xe8a868, roughness: 0.6 }));
    table.position.set(0, -ROWS / 2 * S - 0.75, 0.6);
    table.receiveShadow = true;
    this.scene.add(table);
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    this.camera.updateProjectionMatrix();
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const a = this.camera.aspect;
    const d = Math.max((ROWS / 2 + 1.7) / t, (COLS / 2 + (a > 1.2 ? 3.2 : 0.8)) / (t * a));
    this.camera.position.set(0, 0.6, d);
    this.camera.lookAt(0, 0.1, 0);
    this.side = a > 1.2;
    if (this.panel) this.panel.classList.toggle('side', this.side);
  }

  _colX(c) { return (c - (COLS - 1) / 2) * S; }
  _rowY(r) { return (r - (ROWS - 1) / 2) * S; }

  _colAt(e) {
    const r = this.sh.root.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const p = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), p)) return -1;
    if (Math.abs(p.y) > ROWS / 2 * S + 1.4) return -1;
    const c = Math.round(p.x / S + (COLS - 1) / 2);
    return c >= 0 && c < COLS ? c : -1;
  }

  _bind() {
    const root = this.sh.root;
    root.addEventListener('pointermove', (e) => { if (this.mode === 'play') this.hover = this._colAt(e); });
    root.addEventListener('pointerup', (e) => {
      if (this.mode !== 'play' || e.target.closest('button') || e.target.closest('.lk-dim')) return;
      const c = this._colAt(e);
      if (c >= 0) this._drop(c);
    });
    this._onKey = (e) => {
      if (this.mode !== 'play') return;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); this.hover = Math.max(0, Math.min(COLS - 1, (this.hover < 0 || this.hover == null ? 3 : this.hover) + (e.key === 'ArrowRight' ? 1 : -1))); this.sh.sound.play('tap'); }
      else if ((e.key === 'Enter' || e.key === ' ') && this.hover >= 0) { e.preventDefault(); this._drop(this.hover); }
      else if (/^[1-7]$/.test(e.key)) this._drop(Number(e.key) - 1);
    };
    window.addEventListener('keydown', this._onKey);
  }

  _start() {
    this.game = new Four();
    for (const d of [...this.discs.children]) this.discs.remove(d);
    this.drops = [];
    this.hover = 3;
    this.sh.clear();
    this.panel = h('div', { class: `lfr-panel${this.side ? ' side' : ''}` },
      (this.p0 = h('div', { class: 'lfr-p red' }, h('i'), this.sh.t('red'))),
      (this.p1 = h('div', { class: 'lfr-p yel' }, h('i'), this.sh.t('yellow'))));
    this.sh.layer.append(h('div', { class: 'lk-top' }, this.sh.backBtn(), h('span'), this.sh.soundBtn()), this.panel);
    this.sh.bubble = h('div', { class: 'lk-bubble', role: 'status' });
    this.sh.layer.append(this.sh.bubble);
    this.sh.sound.setMode('play');
    this.mode = 'play';
    this._turnUi();
    this.sh.say(this.sh.t('how'), true, 3);
  }

  _turnUi() {
    const t = this.game.turn;
    this.p0.classList.toggle('on', t === 0);
    this.p1.classList.toggle('on', t === 1);
    this.ghost.material.forEach((m) => m.color.setHex(t === 0 ? RED : YEL));
  }

  _drop(c) {
    if (this.mode !== 'play' || !this.game.canDrop(c)) { if (this.mode === 'play') this.sh.sound.play('bump'); return; }
    const ev = this.game.drop(c);
    const d = makeDisc(ev.who === 0 ? RED : YEL);
    d.position.set(this._colX(c), ROWS / 2 * S + 0.9, 0);
    this.discs.add(d);
    this.drops.push({ d, y: d.position.y, v: 0, to: this._rowY(ev.row), bounced: 0 });
    d.userData.cell = [c, ev.row];
    this.sh.sound.play('whoosh');
    if (ev.won || ev.draw) {
      this.mode = 'end';
      setTimeout(() => this._over(ev), 700);
    } else this._turnUi();
  }

  _over(ev) {
    if (ev.won) {
      const set = new Set(ev.line.map(([c, r]) => `${c},${r}`));
      this.winners = this.discs.children.filter((d) => set.has(d.userData.cell.join(',')));
      this.sh.sound.play('win');
      this._confetti();
      this.sh.say(this.sh.t(ev.who === 0 ? 'redWins' : 'yellowWins'), true, 3);
    } else {
      this.sh.sound.play('roundWin');
      this.sh.say(this.sh.t('draw'), true, 3);
    }
    setTimeout(() => {
      this.sh.sound.setMode('calm');
      this.sh.finishCard(this.sh.t('title'), ev.won ? (ev.who === 0 ? '🔴' : '🟡') : '🤝', () => this._start());
    }, 2600);
  }

  _confetti() {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xff7ab8];
    for (let i = 0; i < 60; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.2), new THREE.MeshBasicMaterial({ color: cols[i % 5], side: THREE.DoubleSide }));
      m.position.set((Math.random() - 0.5) * 6, ROWS / 2 + 1, 0.6);
      m.userData = { v: new THREE.Vector3((Math.random() - 0.5) * 3, 2 + Math.random() * 3, Math.random()), life: 2.6 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    // falling discs with a little bounce
    for (const f of this.drops) {
      if (f.done) continue;
      f.v -= 30 * dt;
      f.y += f.v * dt;
      if (f.y <= f.to) {
        f.y = f.to;
        if (f.bounced < 2 && Math.abs(f.v) > 2.5) { f.v = -f.v * 0.28; f.bounced++; this.sh.sound.play(f.bounced === 1 ? 'drop' : 'tap'); }
        else { f.v = 0; f.done = true; }
      }
      f.d.position.y = f.y;
    }
    // the ghost disc above the column the child points at
    const show = this.mode === 'play' && this.hover >= 0 && this.game && this.game.canDrop(this.hover);
    this.ghost.visible = !!show;
    if (show) { this.ghost.position.set(this._colX(this.hover), ROWS / 2 * S + 0.9 + Math.sin(time * 4) * 0.08, 0); }
    if (this.winners) for (const d of this.winners) { const k = 0.5 + 0.5 * Math.sin(time * 8); d.material.forEach((m) => { m.emissive.setHex(0xffffff); m.emissiveIntensity = k * 0.5; }); d.scale.setScalar(1 + k * 0.08); }
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const m = this.fx[i];
      const u = m.userData;
      u.life -= dt;
      u.v.y -= 5 * dt;
      m.position.addScaledVector(u.v, dt);
      m.rotation.x += dt * 6;
      m.rotation.y += dt * 4;
      if (u.life <= 0) { this.scene.remove(m); m.geometry.dispose(); this.fx.splice(i, 1); }
    }
    if (this.mode === 'title') this.frame.rotation.y = Math.sin(time * 0.6) * 0.15;
    else this.frame.rotation.y *= 0.9;
    this.discs.rotation.y = this.frame.rotation.y;
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

function makeFrame() {
  const g = new THREE.Group();
  const W = COLS * S + 0.5, Hh = ROWS * S + 0.5;
  const shape = new THREE.Shape();
  const r = 0.35;
  shape.moveTo(-W / 2 + r, -Hh / 2);
  shape.lineTo(W / 2 - r, -Hh / 2);
  shape.quadraticCurveTo(W / 2, -Hh / 2, W / 2, -Hh / 2 + r);
  shape.lineTo(W / 2, Hh / 2 - r);
  shape.quadraticCurveTo(W / 2, Hh / 2, W / 2 - r, Hh / 2);
  shape.lineTo(-W / 2 + r, Hh / 2);
  shape.quadraticCurveTo(-W / 2, Hh / 2, -W / 2, Hh / 2 - r);
  shape.lineTo(-W / 2, -Hh / 2 + r);
  shape.quadraticCurveTo(-W / 2, -Hh / 2, -W / 2 + r, -Hh / 2);
  for (let c = 0; c < COLS; c++) {
    for (let rr = 0; rr < ROWS; rr++) {
      const hole = new THREE.Path();
      hole.absarc((c - (COLS - 1) / 2) * S, (rr - (ROWS - 1) / 2) * S, 0.38, 0, Math.PI * 2, true);
      shape.holes.push(hole);
    }
  }
  const blue = new THREE.MeshStandardMaterial({ color: 0x2a6ae8, roughness: 0.25, metalness: 0.05 });
  for (const z of [0.2, -0.2]) {
    const plate = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2, curveSegments: 20 }), blue);
    plate.position.z = z - 0.06;
    plate.castShadow = true;
    g.add(plate);
  }
  // feet
  for (const s of [-1, 1]) {
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 1.6), blue);
    foot.position.set(s * (W / 2 - 0.2), -Hh / 2 - 0.15, 0);
    g.add(foot);
  }
  return g;
}

function makeDisc(color) {
  const side = new THREE.MeshStandardMaterial({ color, roughness: 0.3 });
  const face = new THREE.MeshStandardMaterial({ color, roughness: 0.25, map: ringTex() });
  const d = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.22, 28), [side, face, face]);
  d.rotation.x = Math.PI / 2;
  d.castShadow = true;
  return d;
}

let _ring = null;
function ringTex() {
  if (_ring) return _ring;
  _ring = canvasTex(128, 128, (g) => {
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, 128, 128);
    g.strokeStyle = 'rgba(0,0,0,.18)';
    g.lineWidth = 8;
    g.beginPath(); g.arc(64, 64, 40, 0, Math.PI * 2); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.6)';
    g.beginPath(); g.ellipse(48, 42, 16, 9, -0.6, 0, Math.PI * 2); g.fill();
  });
  return _ring;
}

function canvasTex(w, hh, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = hh;
  draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}

const CSS = `
.lfr-panel{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:calc(var(--u)*3);pointer-events:none}
.lfr-panel.side{left:auto;transform:none;bottom:auto;top:50%;inset-inline-end:calc(var(--u)*3);flex-direction:column;translate:0 -50%}
.lfr-p{display:flex;align-items:center;gap:calc(var(--u)*1.6);background:#fff;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*3.4) calc(var(--u)*1.2) calc(var(--u)*1.4);font-weight:900;font-size:max(18px,calc(var(--u)*4.6));color:#3a2a5a;opacity:.5;transform:scale(.9);transition:all .3s;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(30,20,70,.25);border:calc(var(--u)*.6) solid transparent}
.lfr-p i{width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;box-shadow:inset 0 0 0 calc(var(--u)*1) rgba(0,0,0,.15)}
.lfr-p.red i{background:#f0303a}
.lfr-p.yel i{background:#ffc81a}
.lfr-p.on{opacity:1;transform:scale(1.08)}
.lfr-p.red.on{border-color:#f0303a}
.lfr-p.yel.on{border-color:#ffc81a}
.lfr-p.on::after{content:'◀';color:inherit;font-size:.9em;animation:lfr-point .7s ease-in-out infinite alternate}
[dir=rtl] .lfr-p.on::after{content:'▶'}
@keyframes lfr-point{to{transform:translateX(calc(var(--u)*-1))}}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lfr-style')) document.head.append(h('style', { id: 'lfr-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnFour = api;
export default api;
