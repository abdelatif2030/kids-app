// «أين الشكل؟» — Find the Shape (rebuilt learning game). A toy shape-sorter board stands at the back with five dark
// outlines (circle, square, triangle, star, heart); glossy chunky shapes in bright colours wait on a wooden shelf in
// front. The app says "where is the red circle?" (shape only for the youngest) and the child taps that shape: it flies
// to its outline and clicks in, and the app says what it is ("this is a red circle"). A wrong tile only wobbles; after
// two the right one glows. Kitty watches from the side and jumps for joy. Five rounds; skill 'shapes'.
import * as THREE from 'three';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Stage, M, canvasTex } from '../kit/stage3d.js';
import { makeThing } from '../kit/things3d.js';
import { ShapesPlay, shapeById, colorById, question, reward, SHAPES } from './sim.js';

const TEXT = {
  title: ['أين الشكل؟', 'Find the Shape'],
  no: ['مش دي... دوّر تاني', 'Not that one... look again'],
  yes_m: ['أحسنت!', 'Well done!'],
  yes_f: ['أحسنتي!', 'Well done!'],
  again: ['اسمع تاني', 'Hear again'],
};

const THEME_SHAPES = {
  ...THEME_GARDEN,
  tempo: 108,
  lead: 'bell',
  chords: [[48, [64, 67, 72]], [43, [62, 67, 71]], [45, [64, 69, 72]], [41, [65, 69, 72]], [48, [64, 67, 72]], [45, [64, 69, 72]], [43, [62, 67, 71]], [48, [64, 67, 76]]],
  melody: [[0, 0, 79], [0, 4, 84], [1, 0, 83], [1, 4, 79], [2, 0, 81], [2, 4, 84], [3, 0, 86], [3, 4, 81], [4, 0, 84], [4, 4, 88], [5, 0, 86], [5, 4, 81], [6, 0, 79], [6, 4, 83], [7, 0, 84]],
};

function shapeGeo(kind, depth = 0.34, bevel = 0.07) {
  const s = new THREE.Shape();
  if (kind === 'circle') s.absarc(0, 0, 0.72, 0, Math.PI * 2);
  else if (kind === 'square') { const a = 0.62, r = 0.14; s.moveTo(-a + r, -a); s.lineTo(a - r, -a); s.quadraticCurveTo(a, -a, a, -a + r); s.lineTo(a, a - r); s.quadraticCurveTo(a, a, a - r, a); s.lineTo(-a + r, a); s.quadraticCurveTo(-a, a, -a, a - r); s.lineTo(-a, -a + r); s.quadraticCurveTo(-a, -a, -a + r, -a); }
  else if (kind === 'triangle') { s.moveTo(-0.82, -0.6); s.lineTo(0.82, -0.6); s.lineTo(0, 0.82); s.closePath(); }
  else if (kind === 'star') {
    for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.42 : 0.92; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) s.lineTo(x, y); else s.moveTo(x, y); }
    s.closePath();
  } else { // heart
    s.moveTo(0, -0.78);
    s.bezierCurveTo(-0.2, -0.55, -0.9, -0.2, -0.9, 0.28);
    s.bezierCurveTo(-0.9, 0.7, -0.35, 0.85, 0, 0.4);
    s.bezierCurveTo(0.35, 0.85, 0.9, 0.7, 0.9, 0.28);
    s.bezierCurveTo(0.9, -0.2, 0.2, -0.55, 0, -0.78);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 20 });
  g.center();
  return g;
}

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_SHAPES });
    const sh = this.sh;
    this.st = new Stage(sh, { bg: 0xffe9f4, ground: 0xf0c8d8, fov: 40, box: [6.4, 3.9], dir: [0, 0.3, 1], target: [0, 2.0, 0] });
    this.geo = Object.fromEntries(SHAPES.map((s) => [s.id, shapeGeo(s.id)]));
    this._room();
    this.tiles = [];
    this.flights = [];
    this.filled = new Map();
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🔴🟦⭐💚', () => this._start()));
    this.st.onFrame((dt, time) => this._frame(dt, time));
  }

  _room() {
    const s = this.st.scene;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f4d4a8' : '#ecc898'; g.fillRect(0, i * 32, 256, 32); g.fillStyle = 'rgba(120,70,30,.2)'; g.fillRect(0, i * 32 + 30, 256, 2); }
    }, [10, 5]), roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    s.add(floor);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(50, 16), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#ffd9ec'; g.fillRect(0, 0, 256, 256);
      g.fillStyle = '#ffc8e2';
      for (let i = 0; i < 24; i++) { g.beginPath(); g.arc((i * 71) % 256, (i * 109) % 256, 12, 0, Math.PI * 2); g.fill(); }
    }, [8, 2]), roughness: 1 }));
    wall.position.set(0, 8, -3.5);
    s.add(wall);
    // a rug under the shelf
    const rug = new THREE.Mesh(new THREE.CircleGeometry(5.6, 40), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      ['#9ad8ff', '#fff0b8', '#ffb0d0', '#fff0b8', '#9ad8ff'].forEach((c, i, all) => { g.fillStyle = c; g.beginPath(); g.arc(128, 128, 128 - i * (128 / all.length), 0, Math.PI * 2); g.fill(); });
    }), roughness: 1 }));
    rug.rotation.x = -Math.PI / 2;
    rug.scale.y = 0.5;
    rug.position.set(0, 0.01, 1.8);
    s.add(rug);
    // the sorter board: a blue-framed wooden board with five dark shaped holes
    const frame = new THREE.Mesh(new THREE.BoxGeometry(11.4, 3.0, 0.3), M(0x4aa8ff));
    frame.position.set(0, 3.1, -2.4);
    frame.castShadow = true;
    s.add(frame);
    const face = new THREE.Mesh(new THREE.BoxGeometry(11.0, 2.6, 0.2), M(0xffe9b8, { roughness: 0.8 }));
    face.position.set(0, 3.1, -2.25);
    s.add(face);
    for (const x of [-4.9, 4.9]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.6, 0.5), M(0x2a7ad8));
      leg.position.set(x, 0.8, -2.4);
      s.add(leg);
    }
    this.holes = new Map();
    SHAPES.forEach((sh, i) => {
      const x = -4.0 + i * 2.0;
      const hole = new THREE.Mesh(this.geo[sh.id], new THREE.MeshStandardMaterial({ color: 0x5a4a6a, roughness: 1 }));
      hole.scale.set(0.9, 0.9, 0.08);
      hole.position.set(x, 3.1, -2.12);
      s.add(hole);
      this.holes.set(sh.id, { x, hole });
    });
    // the shelf the shapes wait on
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(11, 0.3, 2.3), M(0xd8964a));
    shelf.position.set(0, 0.85, 0.9);
    shelf.castShadow = true; shelf.receiveShadow = true;
    s.add(shelf);
    const front = new THREE.Mesh(new THREE.BoxGeometry(11, 0.5, 0.15), M(0xb8763a));
    front.position.set(0, 0.55, 2.0);
    s.add(front);
    for (const x of [-5.2, 5.2]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.8, 2.0), M(0xb8763a));
      leg.position.set(x, 0.4, 0.9);
      s.add(leg);
    }
    // kitty watching
    this.kitty = makeThing('cat');
    this.kitty.scale.setScalar(1.5);
    this.kitty.position.set(5.8, 0, 2.6);
    this.kitty.rotation.y = -0.5;
    s.add(this.kitty);
  }

  _start() {
    this.play = new ShapesPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    const sh = this.sh;
    sh.clear();
    this.lightDots = sh.topBar(5, '🔷');
    this.lightDots(0);
    this.sign = h('div', { class: 'ls-sign' });
    this.signText = h('span');
    this.sign.append(h('i', {}, '🔷'), this.signText, h('button', { class: 'ls-again', 'aria-label': sh.t('again'), onclick: (e) => { e.stopPropagation(); this._say(); } }, '🔊'));
    sh.layer.append(this.sign);
    sh.sound.setMode('play');
    for (const f of this.filled.values()) this.st.scene.remove(f);
    this.filled.clear();
    this._ask();
  }

  _asked() {
    const t = this.play.target;
    return { s: shapeById(t.shape), c: this.play.askColor ? colorById(t.color) : null };
  }

  _ask() {
    for (const t of this.tiles) this.st.scene.remove(t.g);
    this.tiles = [];
    const list = this.play.tiles;
    const n = list.length;
    list.forEach((t, i) => {
      const g = new THREE.Group();
      const mesh = new THREE.Mesh(this.geo[t.shape], new THREE.MeshStandardMaterial({ color: colorById(t.color).hex, roughness: 0.25, metalness: 0.05 }));
      mesh.castShadow = true;
      mesh.scale.setScalar(0.95);
      mesh.position.y = 0.95;
      const hit = new THREE.Mesh(new THREE.SphereGeometry(1.0, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.y = 0.95;
      hit.userData.id = t.id;
      const glow = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.05, 24), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
      glow.position.y = 0.02;
      g.add(mesh, hit, glow);
      g.position.set(((i + 0.5) / n - 0.5) * (n <= 3 ? 7 : 9.4), 1.0, 0.9);
      g.scale.setScalar(0.001);
      this.st.add(g);
      this.tiles.push({ g, mesh, hit, glow, t, wig: 0, born: -i * 0.09, base: g.position.clone(), gone: false });
    });
    this.st.setPicks(this.tiles, (id) => this._tap(id));
    this.st.focus = null;
    const a = this._asked();
    this.signText.textContent = question(a.s, a.c);
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this.st.mode = 'wait';
    this._say();
  }

  _say() {
    this.sh.sound.play('sparkle');
    const a = this._asked();
    this.sh.speak(question(a.s, a.c));
  }

  _tap(id) {
    if (this.st.mode !== 'wait') return;
    const a = this._asked();
    const ev = this.play.tap(id);
    const tile = this.tiles.find((x) => x.t.id === id);
    const detail = `${a.s.id}${a.c ? '-' + a.c.id : ''}`;
    if (!ev.ok) {
      tile.wig = 0.6;
      this.sh.sound.play('bump');
      this.sh.say(this.sh.t('no'), false, 1.6);
      if (ev.firstMiss) this.sh.round('shapes', false, detail);
      setTimeout(() => this.st.mode === 'wait' && this._say(), 900);
      return;
    }
    if (ev.first) this.sh.round('shapes', true, detail);
    this.st.mode = 'found';
    this.st.setPicks([], null);
    for (const o of this.tiles) if (o !== tile) o.gone = true;
    this.sh.sound.play('whoosh');
    const hole = this.holes.get(tile.t.shape);
    this.fly = { tile, from: tile.g.position.clone(), to: new THREE.Vector3(hole.x, 3.1 - 0.95, -1.95), t: 0, hole, color: colorById(tile.t.color).hex, shape: tile.t.shape };
    this.lightDots(this.play.round);
    this.sh.say(this.sh.t('yes'), true, 1.6);
    setTimeout(() => this.sh.speak(reward(shapeById(tile.t.shape), this.play.askColor ? colorById(tile.t.color) : null)), 1700);
    setTimeout(() => {
      if (ev.finished) {
        this.st.mode = 'end';
        this.sign.remove();
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '🔷', () => this._start());
      } else this._ask();
    }, 4200);
  }

  _frame(dt, time) {
    const hint = this.play && this.st.mode === 'wait' ? this.play.hint : null;
    const fid = this.st.mode === 'wait' ? this.st.focusedId() : null;
    for (const o of this.tiles) {
      if (o.born < 1) { o.born += dt * 3; const k = Math.max(0, Math.min(1, o.born)); o.g.scale.setScalar(Math.max(0.001, k < 1 ? 1 - Math.pow(1 - k, 3) + Math.sin(k * Math.PI) * 0.15 : 1)); }
      if (o.gone) { o.g.scale.multiplyScalar(Math.max(0, 1 - dt * 3)); continue; }
      if (this.fly && this.fly.tile === o) continue;
      o.mesh.rotation.y = Math.sin(time * 1.2 + o.base.x) * 0.25;
      o.g.position.y = o.base.y + Math.sin(time * 2 + o.base.x) * 0.04;
      const on = o.t.id === hint || o.t.id === fid;
      o.glow.material.opacity = on ? 0.6 + Math.sin(time * 6) * 0.2 : 0;
      o.glow.material.color.setHex(o.t.id === fid ? 0x7ad0ff : 0xfff27a);
      if (on) o.mesh.position.y = 0.95 + Math.abs(Math.sin(time * 6)) * 0.15; else o.mesh.position.y = 0.95;
      if (o.wig > 0) { o.wig -= dt; o.g.rotation.z = Math.sin(o.wig * 40) * 0.3 * o.wig; } else o.g.rotation.z = 0;
    }
    if (this.fly) {
      const F = this.fly;
      F.t += dt / 0.8;
      const k = Math.min(1, F.t);
      const e = k * k * (3 - 2 * k);
      F.tile.g.position.lerpVectors(F.from, F.to, e);
      F.tile.g.position.y += Math.sin(k * Math.PI) * 1.4;
      F.tile.g.rotation.y = e * Math.PI * 2;
      F.tile.g.scale.setScalar(1 - 0.05 * e);
      if (k >= 1) {
        // it clicks into its outline: a flat coloured shape fills the hole
        const prev = this.filled.get(F.shape);
        if (prev) this.st.scene.remove(prev);
        const fill = new THREE.Mesh(this.geo[F.shape], new THREE.MeshStandardMaterial({ color: F.color, roughness: 0.3 }));
        fill.scale.set(0.9, 0.9, 0.5);
        fill.position.set(F.hole.x, 3.1, -2.0);
        this.st.add(fill);
        this.filled.set(F.shape, fill);
        this.st.scene.remove(F.tile.g);
        this.st.sparkle(new THREE.Vector3(F.hole.x, 3.2, -1.7));
        this.sh.sound.play('pop');
        this.sh.sound.play('right');
        this.kitty.userData.jump = 1.4;
        this.fly = null;
      }
    }
    const kt = this.kitty;
    kt.userData.jump = Math.max(0, (kt.userData.jump || 0) - dt);
    kt.position.y = kt.userData.jump > 0 ? Math.abs(Math.sin(kt.userData.jump * 9)) * 0.6 : 0;
  }

  pause() { this.sh.pause(); }

  dispose() {
    this.st.dispose();
    this.sh.dispose();
  }
}

const CSS = `
.ls-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.7) solid #e8508a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.2) calc(var(--u)*2) calc(var(--u)*1.2) calc(var(--u)*3);color:#3a2a5a;font-weight:900;font-size:max(20px,calc(var(--u)*5.6));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(60,20,40,.3);pointer-events:auto;max-width:94%}
.ls-sign i{font-style:normal;font-size:1.4em}
.ls-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ls-sign.pop{animation:ls-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes ls-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.ls-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0;box-shadow:0 calc(var(--u)*.5) 0 #b8700a}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('ls-style')) document.head.append(h('style', { id: 'ls-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnShapes = api;
export default api;
