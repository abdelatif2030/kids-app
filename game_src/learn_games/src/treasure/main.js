// «كنز الجزيرة» — Island Treasure (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #3).
// A sunny island in a turquoise sea seen from above: sand squares with landmarks (palm, rock, hut, pond, flag). Coco the
// parrot gives a clue ("the treasure is right of the rock") — shown on a wooden sign and said by the app's voice, with a
// button to hear it again. The child taps a square; the little pirate walks there and digs. A wrong square only turns
// up a shell or a crab (no loss); the right one pops up a chest that opens with gold coins. Five maps a set; one
// dashboard event per map (skill 'spatial', found without a wrong dig). The learning star only the first time.
import * as THREE from 'three';
import { polish } from '../kit/realism.js';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { Hunt, clueText } from './sim.js';

const TEXT = {
  title: ['كنز الجزيرة', 'Island Treasure'],
  intro: ['اسمع الببغاء وادور على الكنز!', 'Listen to the parrot and find the treasure!'],
  tap: ['دوس على المكان اللي فيه الكنز', 'Tap where the treasure is'],
  notHere: ['مش هنا... اسمع الببغاء تاني', 'Not here... listen to the parrot again'],
  mark: ['ده مكان مش للحفر', "You can't dig here"],
  found_m: ['لقيت الكنز! شاطر', 'You found the treasure!'],
  found_f: ['لقيتي الكنز! شاطره', 'You found the treasure!'],
  again: ['اسمع تاني', 'Hear again'],
};

// a sunny island tune: steel-drum-like plucks, calm calypso feel
const THEME_ISLAND = {
  ...THEME_GARDEN,
  tempo: 108,
  lead: 'pluck',
  chords: [[43, [67, 71, 74]], [48, [67, 72, 76]], [50, [66, 69, 74]], [43, [67, 71, 74]], [43, [67, 71, 74]], [48, [67, 72, 76]], [50, [66, 69, 72]], [43, [67, 71, 74]]],
  melody: [[0, 0, 79], [0, 3, 83], [0, 6, 86], [1, 0, 84], [1, 3, 83], [1, 6, 79], [2, 0, 81], [2, 3, 78], [2, 6, 74], [3, 0, 79],
    [4, 0, 83], [4, 3, 86], [4, 6, 91], [5, 0, 88], [5, 3, 86], [5, 6, 84], [6, 0, 81], [6, 3, 86], [6, 6, 84], [7, 0, 83], [7, 4, 79]],
};

const CELL = 1.5;

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_ISLAND });
    const sh = this.sh;
    this.en = sh.T.lang === 'en';
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sh.root.prepend(this.renderer.domElement);
    this.scene = new THREE.Scene();
    polish(this.renderer, this.scene);
    this.scene.background = new THREE.Color(0x8ad8f8);
    this.scene.fog = new THREE.Fog(0x8ad8f8, 40, 90);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    this.scene.add(new THREE.HemisphereLight(0xfff8e8, 0x6ab0c8, 1.6));
    const sun = new THREE.DirectionalLight(0xfff0d0, 2.3);
    sun.position.set(-5, 12, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 });
    this.scene.add(sun);
    this._world();
    this.board = new THREE.Group();
    this.scene.add(this.board);
    this.pirate = makePirate();
    this.scene.add(this.pirate);
    this.parrot = makeParrot();
    this.scene.add(this.parrot);
    this.fx = [];
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    this.hunt = new Hunt(sh.age, 1);
    this._build();
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🦜🗺️💰', () => this._start()));
    this._loop();
  }

  _world() {
    this.seaTex = canvasTex(256, 256, (g) => {
      g.fillStyle = '#3ac0e0';
      g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 60; i++) {
        g.strokeStyle = `rgba(255,255,255,${0.15 + Math.random() * 0.2})`;
        g.lineWidth = 2;
        const x = Math.random() * 256, y = Math.random() * 256;
        g.beginPath(); g.arc(x, y, 8 + Math.random() * 10, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
      }
    }, [14, 14]);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ map: this.seaTex, roughness: 0.3, metalness: 0.1 }));
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = -0.35;
    this.scene.add(sea);
    // the island: sand with a wet rim and grass tufts
    const shallow = new THREE.Mesh(new THREE.CircleGeometry(10.5, 48), new THREE.MeshStandardMaterial({ color: 0x7ae0e0, transparent: true, opacity: 0.8 }));
    shallow.rotation.x = -Math.PI / 2;
    shallow.position.y = -0.3;
    this.scene.add(shallow);
    const sand = new THREE.Mesh(new THREE.CylinderGeometry(9, 9.6, 0.5, 48), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      g.fillStyle = '#f4dca0'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${200 + Math.random() * 40},${170 + Math.random() * 30},110,.35)`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
    }, [4, 4]), roughness: 1 }));
    sand.position.y = -0.25;
    sand.receiveShadow = true;
    this.scene.add(sand);
    const r = mulberry(5);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      if (Math.sin(a) > 0.35) continue; // none in front of the camera (they hid the board)
      const p = makePalm(0.9 + r() * 0.4);
      p.position.set(Math.cos(a) * (7.6 + r()), 0, Math.sin(a) * (7.6 + r()) - 0.5);
      p.rotation.y = r() * 6;
      this.scene.add(p);
    }
    for (let i = 0; i < 30; i++) {
      const a = r() * Math.PI * 2;
      const d = 6.6 + r() * 2.2;
      const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 5), new THREE.MeshStandardMaterial({ color: 0x5ac85a }));
      tuft.position.set(Math.cos(a) * d, 0.15, Math.sin(a) * d);
      this.scene.add(tuft);
    }
    // a little ship far away
    const ship = new THREE.Group();
    ship.add(new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0x8a5a2a })));
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.4), new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
    sail.position.y = 1.1;
    ship.add(sail);
    ship.position.set(-14, 0, -16);
    this.ship = ship;
    this.scene.add(ship);
  }

  /** The sand squares and landmarks of the current map. */
  _build() {
    const b = this.board;
    for (const c of [...b.children]) b.remove(c);
    const m = this.hunt.map;
    const n = m.cols;
    this.n = n;
    const off = ((n - 1) / 2) * CELL;
    this.pos = (cell) => new THREE.Vector3((cell % n) * CELL - off, 0, Math.floor(cell / n) * CELL - off);
    this.tiles = [];
    for (let c = 0; c < n * n; c++) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(CELL * 0.94, 0.12, CELL * 0.94), new THREE.MeshStandardMaterial({ map: tileTex(), roughness: 1 }));
      t.position.copy(this.pos(c)).setY(0.05);
      t.receiveShadow = true;
      t.userData.cell = c;
      b.add(t);
      this.tiles.push(t);
    }
    // a rope fence with posts around the board
    const R = (n * CELL) / 2 + 0.35;
    const postMat = new THREE.MeshStandardMaterial({ color: 0x8a5a2a });
    for (let i = 0; i <= n; i++) {
      for (const [x, z] of [[-R + (i * 2 * R) / n, -R], [-R + (i * 2 * R) / n, R], [-R, -R + (i * 2 * R) / n], [R, -R + (i * 2 * R) / n]]) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.6, 8), postMat);
        p.position.set(x, 0.3, z);
        p.castShadow = true;
        b.add(p);
      }
    }
    const rope = new THREE.Mesh(new THREE.TorusGeometry(1, 0.025, 4, 4), new THREE.MeshStandardMaterial({ color: 0xd8b07a }));
    rope.rotation.set(Math.PI / 2, 0, Math.PI / 4);
    rope.scale.set(R * Math.SQRT2, R * Math.SQRT2, 1);
    rope.position.y = 0.5;
    b.add(rope);
    for (const mk of m.marks) {
      const o = makeMark(mk.id);
      o.position.copy(this.pos(mk.cell));
      b.add(o);
    }
    this.pirate.position.copy(this.pos(0)).set(-off - CELL * 1.2, 0, off + CELL * 0.4);
    this.pirate.rotation.y = 0;
    this.parrot.position.set(off + CELL * 1.2, 0, -off + CELL * 0.6);
    this.parrot.rotation.y = -0.7;
    this.chest = null;
    this._fit();
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    this.camera.updateProjectionMatrix();
    this._fit();
  }

  _fit() {
    if (!this.n) return;
    const a = this.camera.aspect;
    const half = (this.n * CELL) / 2 + 0.9;
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const d = Math.max((half * 1.3) / t, (half + 0.8) / (t * a)) * 1.0;
    const dir = new THREE.Vector3(0, 0.8, 0.6).normalize();
    const target = new THREE.Vector3(0, 0, a < 1 ? 0.9 : 0.75); // a little down so the clue sign never covers the board
    this.camera.position.copy(target).addScaledVector(dir, d);
    this.camera.lookAt(target);
  }

  _bind() {
    this.sh.root.addEventListener('pointerup', (e) => {
      if (this.mode !== 'wait' || e.target.closest('button') || e.target.closest('.lk-dim')) return;
      const r = this.sh.root.getBoundingClientRect();
      const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, this.camera);
      const hit = ray.intersectObjects(this.tiles, false)[0];
      if (hit) this._dig(hit.object.userData.cell);
      else {
        // a tap near the board: the nearest square
        const p = new THREE.Vector3();
        if (ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.1), p)) {
          let best = -1, bd = CELL * 0.75;
          this.tiles.forEach((tl) => { const d = tl.position.distanceTo(p.setY(tl.position.y)); if (d < bd) { bd = d; best = tl.userData.cell; } });
          if (best >= 0) this._dig(best);
        }
      }
    });
    this._onKey = (e) => {
      if (this.mode !== 'wait') return;
      const n = this.n;
      const k = { ArrowUp: -n, ArrowDown: n, ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (k !== undefined) {
        e.preventDefault();
        this.cursor = Math.max(0, Math.min(n * n - 1, (this.cursor ?? Math.floor((n * n) / 2)) + k));
        this.sh.sound.play('tap');
      } else if ((e.key === 'Enter' || e.key === ' ') && this.cursor != null) { e.preventDefault(); this._dig(this.cursor); }
    };
    window.addEventListener('keydown', this._onKey);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.hunt = new Hunt(this.sh.age, Math.floor(Math.random() * 1e9));
    this._build();
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '💰');
    this.lightDots(0);
    this.sign = h('div', { class: 'ltr-sign' });
    this.signText = h('span');
    this.sign.append(h('i', {}, '🦜'), this.signText, h('button', { class: 'ltr-again', 'aria-label': this.sh.t('again'), onclick: (e) => { e.stopPropagation(); this._sayClue(); } }, '🔊'));
    this.sh.layer.append(this.sign);
    this.sh.sound.setMode('play');
    this.sh.say(this.sh.t('intro'), true, 2.6);
    setTimeout(() => this._newClue(), 2800);
  }

  _clueWords() { return this.hunt.map.clues.map((c) => clueText(c, this.en)).join(this.en ? ', and ' : '، و'); }

  _newClue() {
    this.mode = 'wait';
    this.signText.textContent = this._clueWords();
    this.sign.classList.remove('pop');
    void this.sign.offsetWidth;
    this.sign.classList.add('pop');
    this._sayClue();
  }

  _sayClue() {
    this.parrotTalk = 1.6;
    this.sh.sound.play('sparkle');
    this.sh.speak(this.hunt.map.clues.map((c) => clueText(c, this.en)));
  }

  _dig(cell) {
    if (this.mode !== 'wait') return;
    const ev = this.hunt.dig(cell);
    if (ev.type === 'mark') { this.sh.sound.play('bump'); this.sh.say(this.sh.t('mark'), false, 1.6); return; }
    this.mode = 'walk';
    const to = this.pos(cell);
    this.walk = { from: this.pirate.position.clone(), to: to.clone().add(new THREE.Vector3(0, 0, CELL * 0.32)), t: 0, cell, ev };
    const d = this.walk.to.clone().sub(this.walk.from);
    this.pirate.rotation.y = Math.atan2(d.x, d.z);
  }

  _arrive() {
    const { cell, ev } = this.walk;
    this.walk = null;
    this.mode = 'dig';
    this.digT = 0;
    this.digCell = cell;
    this.digEv = ev;
    this.pirate.rotation.y = Math.PI; // face the square (up the screen)
  }

  _dug() {
    const ev = this.digEv;
    const at = this.pos(this.digCell);
    this._sandPuff(at);
    // a little sand hole stays
    const hole = new THREE.Mesh(new THREE.CircleGeometry(0.42, 20), new THREE.MeshStandardMaterial({ color: 0xc8a060, roughness: 1 }));
    hole.rotation.x = -Math.PI / 2;
    hole.position.copy(at).setY(0.115);
    this.board.add(hole);
    if (ev.type === 'empty') {
      const thing = Math.random() < 0.5 ? makeShell() : makeCrab();
      thing.position.copy(at).setY(0.12);
      this.board.add(thing);
      this.popup = { o: thing, t: 0 };
      this.sh.sound.play('pop');
      setTimeout(() => this.sh.sound.play('hmm'), 200);
      if (ev.misses === 1) this.sh.round('spatial', false, this.hunt.map.clues[0].kind);
      this.sh.say(this.sh.t('notHere'), false, 2);
      setTimeout(() => { this.mode = 'wait'; this._sayClue(); }, 1700);
      return;
    }
    // found it!
    if (ev.first) this.sh.round('spatial', true, this.hunt.map.clues[0].kind);
    this.chest = makeChest();
    this.chest.position.copy(at).setY(-0.6);
    this.board.add(this.chest);
    this.chestT = 0;
    this.mode = 'chest';
    this.sh.sound.play('right');
    setTimeout(() => this.sh.sound.play('cheer'), 600);
    this.lightDots(this.hunt.round + 1);
    this.sh.say(this.sh.t('found'), true, 2.4);
    this.parrotTalk = 2;
    setTimeout(() => {
      if (this.hunt.next()) {
        this._build();
        this.sh.sound.play('whoosh');
        this._newClue();
      } else {
        this.mode = 'end';
        this.sign.remove();
        this.sh.sound.setMode('calm');
        this.sh.finishCard(this.sh.t('title'), '💰', () => this._start());
      }
    }, 3600);
  }

  _sandPuff(at) {
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.06 + Math.random() * 0.05, 6, 5), new THREE.MeshStandardMaterial({ color: 0xe8c890 }));
      m.position.copy(at).setY(0.2);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.4, 2 + Math.random() * 1.5, Math.sin(a) * 1.4), life: 0.8, g: 9 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  _coins(at) {
    for (let i = 0; i < 26; i++) {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.025, 14), new THREE.MeshStandardMaterial({ color: 0xffc82a, metalness: 0.6, roughness: 0.3, emissive: 0x6a4a00, emissiveIntensity: 0.3 }));
      m.position.copy(at).setY(0.8);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.3, 3.5 + Math.random() * 2, Math.sin(a) * 1.3), life: 1.5, g: 8, spin: 8 + Math.random() * 8 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    this.seaTex.offset.set(time * 0.01, time * 0.006);
    this.ship.position.x = -14 + Math.sin(time * 0.1) * 4;
    this.ship.rotation.z = Math.sin(time * 1.2) * 0.05;
    const p = this.pirate.userData;
    if (this.walk) {
      const w = this.walk;
      const dist = w.from.distanceTo(w.to);
      w.t += (dt * 3.2) / Math.max(0.5, dist);
      const k = Math.min(1, w.t);
      this.pirate.position.lerpVectors(w.from, w.to, k);
      this.pirate.position.y = Math.abs(Math.sin(time * 14)) * 0.06;
      p.legs.forEach((l, i) => { l.rotation.x = Math.sin(time * 14 + i * Math.PI) * 0.7; });
      if (Math.floor(time * 7) !== this._st) { this._st = Math.floor(time * 7); this.sh.sound.play('step', this._st % 2); }
      if (k >= 1) this._arrive();
    } else {
      p.legs.forEach((l) => { l.rotation.x *= 0.8; });
      this.pirate.position.y = 0;
    }
    if (this.mode === 'dig') {
      this.digT += dt;
      p.shovel.rotation.x = -0.4 + Math.sin(this.digT * 12) * 0.7;
      if (Math.floor(this.digT * 4) !== this._dg) { this._dg = Math.floor(this.digT * 4); this.sh.sound.play('page'); }
      if (this.digT > 1.1) { p.shovel.rotation.x = -0.4; this._dug(); }
    }
    if (this.popup) {
      this.popup.t += dt;
      this.popup.o.position.y = 0.12 + Math.sin(Math.min(1, this.popup.t * 2) * Math.PI) * 0.6 * Math.max(0, 1 - this.popup.t) + Math.min(0.12, this.popup.t * 0.2);
      if (this.popup.t > 1.2) this.popup = null;
    }
    if (this.chest && this.mode === 'chest') {
      this.chestT += dt;
      const c = this.chest;
      c.position.y = Math.min(0.12, -0.6 + this.chestT * 1.6);
      if (this.chestT > 0.5) c.userData.lid.rotation.x = -Math.min(1.9, (this.chestT - 0.5) * 4);
      if (this.chestT > 0.7 && !c.userData.burst) { c.userData.burst = true; this._coins(c.position.clone()); this.sh.sound.play('sparkle'); this.sh.sound.play('star'); }
      c.userData.glow.material.opacity = Math.min(0.8, Math.max(0, this.chestT - 0.6));
      this.pirate.position.y = Math.abs(Math.sin(time * 9)) * 0.3;
    }
    // the parrot bobs, flaps and opens its beak while talking
    const pr = this.parrot.userData;
    this.parrotTalk = Math.max(0, (this.parrotTalk || 0) - dt);
    const talk = this.parrotTalk > 0;
    this.parrot.position.y = Math.sin(time * 2) * 0.04;
    pr.body.rotation.z = Math.sin(time * (talk ? 9 : 2)) * (talk ? 0.12 : 0.04);
    pr.beak.rotation.x = talk ? Math.abs(Math.sin(time * 16)) * 0.5 : 0;
    pr.wings.forEach((wg, i) => { wg.rotation.z = (i ? -1 : 1) * (0.2 + (talk ? Math.abs(Math.sin(time * 12)) * 0.6 : 0)); });
    // keyboard cursor
    if (this.cursor != null && this.tiles[this.cursor]) this.tiles.forEach((t, i) => t.material.emissive?.setHex(i === this.cursor ? 0x5a4a00 : 0x000000));
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const m = this.fx[i];
      const u = m.userData;
      u.life -= dt;
      u.v.y -= u.g * dt;
      m.position.addScaledVector(u.v, dt);
      if (u.spin) m.rotation.x += u.spin * dt;
      if (m.position.y < 0.13) { m.position.y = 0.13; u.v.set(0, 0, 0); }
      if (u.life <= 0) { this.scene.remove(m); m.geometry.dispose(); this.fx.splice(i, 1); }
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

// ---- models -----------------------------------------------------------------------------------------------------------

const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, ...o });

function makePalm(s = 1) {
  const g = new THREE.Group();
  const trunk = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.15 * s, 0.4 * s, 8), M(i % 2 ? 0x9a6a3a : 0x8a5a2a));
    seg.position.set(Math.sin(i * 0.25) * 0.15 * s, (0.2 + i * 0.38) * s, 0);
    seg.castShadow = true;
    trunk.add(seg);
  }
  g.add(trunk);
  const top = new THREE.Vector3(Math.sin(1.25) * 0.15 * s, 2.35 * s, 0);
  for (let i = 0; i < 7; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.5 * s, 10, 6), M(i % 2 ? 0x3aa84a : 0x4ac85a));
    leaf.scale.set(1.6, 0.12, 0.45);
    const a = (i / 7) * Math.PI * 2;
    leaf.position.copy(top).add(new THREE.Vector3(Math.cos(a) * 0.65 * s, -0.12 * s, Math.sin(a) * 0.65 * s));
    leaf.rotation.y = -a;
    leaf.rotation.z = -0.35;
    leaf.castShadow = true;
    g.add(leaf);
  }
  for (let i = 0; i < 3; i++) {
    const nut = new THREE.Mesh(new THREE.SphereGeometry(0.1 * s, 8, 6), M(0x6a4a2a));
    nut.position.copy(top).add(new THREE.Vector3(Math.cos(i * 2) * 0.12 * s, -0.18 * s, Math.sin(i * 2) * 0.12 * s));
    g.add(nut);
  }
  return g;
}

function makeMark(id) {
  const g = new THREE.Group();
  switch (id) {
    case 'palm': g.add(makePalm(0.62)); break;
    case 'rock': {
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5, 1), M(0x8a8a96, { flatShading: true, roughness: 0.9 }));
      r.scale.set(1.1, 0.75, 1);
      r.position.y = 0.38;
      r.castShadow = true;
      g.add(r);
      const r2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 0), M(0x9a9aa6, { flatShading: true }));
      r2.position.set(0.42, 0.2, 0.22);
      g.add(r2);
      break;
    }
    case 'hut': {
      const wall = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 0.65, 14), M(0xd8a868));
      wall.position.y = 0.4;
      wall.castShadow = true;
      g.add(wall);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.65, 14), M(0xe8c060, { roughness: 1 }));
      roof.position.y = 1.02;
      roof.castShadow = true;
      g.add(roof);
      const door = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.4), M(0x6a3a1a));
      door.position.set(0, 0.32, 0.555);
      g.add(door);
      break;
    }
    case 'pond': {
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.55, 24), M(0x3ab8f0, { roughness: 0.15, metalness: 0.1 }));
      water.rotation.x = -Math.PI / 2;
      water.position.y = 0.13;
      g.add(water);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.07, 8, 24), M(0x9a9aa6));
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.14;
      g.add(rim);
      const pad = new THREE.Mesh(new THREE.CircleGeometry(0.15, 12), M(0x4ac85a));
      pad.rotation.x = -Math.PI / 2;
      pad.position.set(0.15, 0.14, 0.1);
      g.add(pad);
      const duck = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), M(0xffd83a));
      duck.position.set(-0.18, 0.2, -0.1);
      g.add(duck);
      break;
    }
    default: { // flag
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.5, 8), M(0x6a4a2a));
      pole.position.y = 0.8;
      g.add(pole);
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.4), M(0xff3a3a, { side: THREE.DoubleSide }));
      flag.position.set(0.32, 1.32, 0);
      flag.castShadow = true;
      g.add(flag);
      const skull = new THREE.Mesh(new THREE.CircleGeometry(0.09, 12), M(0xffffff, { side: THREE.DoubleSide }));
      skull.position.set(0.32, 1.32, 0.005);
      g.add(skull);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.15, 10), M(0x9a9aa6));
      base.position.y = 0.17;
      g.add(base);
    }
  }
  return g;
}

function makePirate() {
  const g = new THREE.Group();
  const skin = M(0xf0c098);
  const legs = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(s * 0.09, 0.32, 0);
    const l = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.18, 4, 8), M(0x3a4a8a));
    l.position.y = -0.14;
    leg.add(l);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.18), M(0x3a2414));
    boot.position.set(0, -0.3, 0.03);
    leg.add(boot);
    g.add(leg);
    legs.push(leg);
  }
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.2, 6, 12), new THREE.MeshStandardMaterial({ map: canvasTex(64, 64, (c) => { for (let y = 0; y < 64; y += 16) { c.fillStyle = '#ffffff'; c.fillRect(0, y, 64, 8); c.fillStyle = '#e83a3a'; c.fillRect(0, y + 8, 64, 8); } }), roughness: 0.7 }));
  body.position.y = 0.56;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), skin);
  head.position.y = 0.92;
  head.castShadow = true;
  g.add(head);
  const bandana = new THREE.Mesh(new THREE.SphereGeometry(0.21, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2.2), M(0xe8302a));
  bandana.position.y = 0.95;
  g.add(bandana);
  const knot = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), M(0xe8302a));
  knot.position.set(0, 0.98, -0.21);
  g.add(knot);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), M(0x1a1a24));
    eye.position.set(s * 0.07, 0.94, 0.18);
    g.add(eye);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12, Math.PI), M(0x8a2a1a));
  smile.rotation.z = Math.PI;
  smile.position.set(0, 0.86, 0.19);
  g.add(smile);
  // the shovel, held in front
  const shovel = new THREE.Group();
  shovel.position.set(0.22, 0.62, 0.08);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.62, 6), M(0x9a6a3a));
  handle.position.y = -0.2;
  shovel.add(handle);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 0.02), M(0xb8c0d0, { metalness: 0.5, roughness: 0.3 }));
  blade.position.y = -0.55;
  shovel.add(blade);
  shovel.rotation.x = -0.4;
  g.add(shovel);
  g.userData = { legs, shovel };
  g.scale.setScalar(1.7);
  return g;
}

function makeParrot() {
  const g = new THREE.Group();
  const perch = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8), M(0x8a5a2a));
  perch.position.y = 0.7;
  g.add(perch);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8), M(0x8a5a2a));
  bar.rotation.z = Math.PI / 2;
  bar.position.y = 1.4;
  g.add(bar);
  const body = new THREE.Group();
  body.position.y = 1.45;
  g.add(body);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.25, 6, 12), M(0xe8302a));
  torso.position.y = 0.25;
  body.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), M(0xe8302a));
  head.position.set(0, 0.58, 0.04);
  body.add(head);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), M(0xffffff));
  face.scale.set(1, 1, 0.5);
  face.position.set(0, 0.6, 0.14);
  body.add(face);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), M(0x1a1a24));
    eye.position.set(s * 0.06, 0.63, 0.18);
    body.add(eye);
  }
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 10), M(0x2a2a2a));
  beak.rotation.x = Math.PI / 2 + 0.6;
  beak.position.set(0, 0.52, 0.2);
  body.add(beak);
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), M(s < 0 ? 0x2a7ae8 : 0x2a7ae8));
    w.scale.set(0.35, 1.2, 0.8);
    w.position.set(s * 0.17, 0.25, -0.02);
    body.add(w);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), M(0xffd23a));
    tip.scale.set(0.4, 1, 0.8);
    tip.position.set(s * 0.18, 0.05, -0.04);
    body.add(tip);
    wings.push(w);
  }
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.5, 6), M(0x2a7ae8));
  tail.rotation.x = Math.PI + 0.3;
  tail.position.set(0, -0.05, -0.12);
  body.add(tail);
  g.userData = { body, beak, wings };
  g.scale.setScalar(1.7);
  return g;
}

function makeChest() {
  const g = new THREE.Group();
  const wood = M(0x9a5a2a);
  const gold = M(0xffc82a, { metalness: 0.6, roughness: 0.3 });
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.45, 0.55), wood);
  box.position.y = 0.23;
  box.castShadow = true;
  g.add(box);
  for (const x of [-0.3, 0.3]) { const band = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.47, 0.57), gold); band.position.set(x, 0.23, 0); g.add(band); }
  const coins = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(0xffd23a, { metalness: 0.5, roughness: 0.3, emissive: 0x8a6a00, emissiveIntensity: 0.4 }));
  coins.scale.set(1.05, 0.4, 0.7);
  coins.position.y = 0.44;
  g.add(coins);
  const lid = new THREE.Group();
  lid.position.set(0, 0.45, -0.275);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.275, 0.275, 0.8, 16, 1, false, 0, Math.PI), wood);
  top.rotation.z = Math.PI / 2;
  top.rotation.y = Math.PI / 2;
  top.position.z = 0.275;
  top.castShadow = true;
  lid.add(top);
  const lock = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.04), gold);
  lock.position.set(0, 0.0, 0.56);
  lid.add(lock);
  g.add(lid);
  const glow = new THREE.Mesh(new THREE.CircleGeometry(1, 24), new THREE.MeshBasicMaterial({ color: 0xfff2a8, transparent: true, opacity: 0, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.13;
  g.add(glow);
  g.userData = { lid, glow };
  return g;
}

function makeShell() {
  const g = new THREE.Group();
  const s = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.12, 10), M(0xffb8c8));
  s.scale.z = 0.7;
  s.position.y = 0.06;
  g.add(s);
  return g;
}

function makeCrab() {
  const g = new THREE.Group();
  const red = M(0xff5a3a);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 8), red);
  body.scale.set(1.3, 0.6, 1);
  body.position.y = 0.12;
  g.add(body);
  for (const s of [-1, 1]) {
    const claw = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), red);
    claw.position.set(s * 0.27, 0.16, 0.1);
    g.add(claw);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), M(0xffffff));
    eye.position.set(s * 0.06, 0.26, 0.1);
    g.add(eye);
    const pup = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), M(0x1a1a24));
    pup.position.set(s * 0.06, 0.27, 0.13);
    g.add(pup);
  }
  return g;
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

let _tile = null;
function tileTex() {
  if (_tile) return _tile;
  _tile = canvasTex(128, 128, (g) => {
    g.fillStyle = '#f8e4b0';
    g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 120; i++) { g.fillStyle = 'rgba(210,170,100,.35)'; g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
    g.strokeStyle = 'rgba(160,110,50,.55)';
    g.setLineDash([8, 6]);
    g.lineWidth = 4;
    g.strokeRect(6, 6, 116, 116);
  });
  return _tile;
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

const CSS = `
.ltr-sign{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);background:linear-gradient(180deg,#c8864a,#9a5a2a);border:calc(var(--u)*.7) solid #6a3a14;border-radius:calc(var(--u)*4);padding:calc(var(--u)*1.4) calc(var(--u)*2.2) calc(var(--u)*1.4) calc(var(--u)*3);color:#fff8e0;font-weight:900;font-size:max(20px,calc(var(--u)*5.2));box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(30,20,10,.4);pointer-events:auto;max-width:94%;text-shadow:0 2px 0 #5a2a0a}
.ltr-sign i{font-style:normal;font-size:1.3em}
.ltr-sign span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ltr-sign.pop{animation:ltr-pop .5s cubic-bezier(.2,1.6,.4,1)}
@keyframes ltr-pop{from{transform:translateX(-50%) scale(.6)}to{transform:translateX(-50%) scale(1)}}
.ltr-again{flex:none;width:max(48px,calc(var(--u)*11));height:max(48px,calc(var(--u)*11));border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#ffd45a,#f5a01a);font-size:calc(var(--u)*5);cursor:pointer;padding:0}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('ltr-style')) document.head.append(h('style', { id: 'ltr-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnTreasure = api;
export default api;
