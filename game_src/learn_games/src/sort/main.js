// «رتّب في مجموعات» — Sort into Groups (rebuilt learning game, docs/LEARNING_GAMES_REBUILD.md #2).
// A bright toy shop: things ride a conveyor belt out of a little curtained hatch and stop in front of the child, who
// drags each into the basket of its kind (fruit, toys, animals, vehicles) — or taps the basket. A right basket wobbles
// happily and keeps the thing; a wrong one shakes "no" and the thing bounces back to the belt (no loss; after two misses
// the right basket glows). Each thing's name is said by the app's voice when it arrives, and "the apple is fruit!"
// when it is sorted. Robi the shop robot cheers. Five rounds of four; the learning star only the first time.
import * as THREE from 'three';
import { polish } from '../kit/realism.js';
import { Shell, h } from '../kit/shell.js';
import { THEME_GARDEN } from '../kit/sound.js';
import { makeItem } from '../kit/toys3d.js';
import { ITEM_WORDS } from '../kit/words.js';
import { SortPlay, GROUPS } from './sim.js';

const TEXT = {
  title: ['رتّب في مجموعات', 'Sort into Groups'],
  intro: ['حط كل حاجة في السلة بتاعتها!', 'Put each thing in its basket!'],
  howTo: ['اسحب الحاجة للسلة، أو دوس على السلة', 'Drag it to a basket, or tap the basket'],
  tryOther: ['مش دي... جرّب سلة تانية', 'Not this one... try another basket'],
  roundDone: ['الرف خلص! أحسنت', 'Shelf done! Well done'],
};

// a playful toy-shop tune (C major, music-box lead)
const THEME_SHOP = {
  ...THEME_GARDEN,
  tempo: 120,
  lead: 'bell',
  chords: [[48, [64, 67, 72]], [45, [64, 69, 72]], [41, [65, 69, 72]], [43, [62, 67, 71]], [48, [64, 67, 72]], [45, [64, 69, 72]], [41, [65, 69, 74]], [43, [65, 67, 71]]],
  melody: [[0, 0, 79], [0, 2, 84], [0, 4, 83], [0, 6, 79], [1, 0, 81], [1, 4, 76], [2, 0, 77], [2, 2, 81], [2, 4, 84], [2, 6, 81], [3, 0, 79], [3, 4, 74],
    [4, 0, 79], [4, 2, 84], [4, 4, 88], [4, 6, 86], [5, 0, 84], [5, 4, 81], [6, 0, 77], [6, 2, 81], [6, 4, 86], [6, 6, 84], [7, 0, 83], [7, 4, 79]],
};

const BELT_Y = 0.95;
const BELT_Z = -1.3;
const BASKET_Z = 1.35;
const ICON = { fruit: 'apple', toys: 'ball', animals: 'cat', vehicles: 'car' };

class Game {
  constructor(el, cfg, post) {
    this.sh = new Shell(el, cfg, post, { text: TEXT, theme: THEME_SHOP });
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
    this.scene.background = new THREE.Color(0xffe8f0);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    this.scene.add(new THREE.HemisphereLight(0xfff8f0, 0xc8a8a0, 1.7));
    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(-3, 8, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 6, bottom: -6, near: 1, far: 30 });
    this.scene.add(sun);
    this._shop();
    this.baskets = [];
    this.fx = [];
    this.labels = h('div', { class: 'lst-labels' });
    sh.layer.append(this.labels);
    sh.onResize = (w, hh) => this._resize(w, hh);
    this._resize(sh.w, sh.h);
    this._bind();
    this.clock = new THREE.Clock();
    this.mode = 'title';
    sh.fonts().then(() => sh.titleCard(sh.t('title'), '🧺🍎🧸🐱🚗', () => this._start()));
    this._loop();
  }

  // ---- the toy shop ---------------------------------------------------------------------------------------------

  _shop() {
    const s = this.scene;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ map: planks(), roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    s.add(floor);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 14), new THREE.MeshStandardMaterial({ map: wallpaper(), roughness: 0.9 }));
    wall.position.set(0, 7, -4.5);
    s.add(wall);
    // shelves full of toys on the back wall
    const wood = new THREE.MeshStandardMaterial({ color: 0xd89a5a, roughness: 0.7 });
    const deco = ['teddy', 'ball', 'drum', 'blocks', 'yoyo', 'boat', 'train', 'plane', 'bunny', 'chick', 'car', 'bus'];
    let k = 0;
    for (const y of [2.6, 3.9]) {
      for (const x0 of [-6, 2.6]) {
        const shelf = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.12, 0.7), wood);
        shelf.position.set(x0 + 1.8, y, -4.1);
        shelf.receiveShadow = true;
        s.add(shelf);
        for (let i = 0; i < 4; i++) {
          const it = makeItem(deco[k++ % deco.length]);
          it.scale.setScalar(0.62);
          it.position.set(x0 + 0.5 + i * 0.85, y + 0.06, -4.05);
          it.rotation.y = (i % 2 ? 0.3 : -0.3);
          s.add(it);
        }
      }
    }
    // a round striped rug and a few toys on the floor in front (fills a tall phone screen)
    const rug = new THREE.Mesh(new THREE.CircleGeometry(3.4, 40), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (g) => {
      ['#ff8ab8', '#ffd25a', '#7ad0ff', '#8ae07a', '#c8a0ff'].forEach((c, i, all) => { g.fillStyle = c; g.beginPath(); g.arc(128, 128, 128 - i * (128 / all.length), 0, Math.PI * 2); g.fill(); });
    }), roughness: 0.95 }));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 4.4);
    rug.receiveShadow = true;
    s.add(rug);
    for (const [id, x, z, r] of [['blocks', -2.1, 4.6, 0.4], ['teddy', 2.2, 4.3, -0.5], ['ball', 0.9, 5.6, 0], ['train', -0.9, 5.4, 0.6]]) {
      const it = makeItem(id);
      it.scale.setScalar(0.9);
      it.position.set(x, 0.01, z);
      it.rotation.y = r;
      s.add(it);
    }
    // bunting
    const cols = [0xff5a5a, 0xffc23a, 0x4aa8ff, 0x3ec86a, 0xb06aff];
    for (let i = 0; i < 22; i++) {
      const tri = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.42, 3), new THREE.MeshStandardMaterial({ color: cols[i % 5], roughness: 0.6 }));
      tri.rotation.x = Math.PI;
      tri.position.set(-9 + i * 0.86, 5.2 - Math.sin((i / 21) * Math.PI) * 0.5, -4.2);
      s.add(tri);
    }
    // the conveyor belt with its hatch
    const frame = new THREE.MeshStandardMaterial({ color: 0x6a7ab8, roughness: 0.5 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(14, 0.5, 1.3), frame);
    body.position.set(3.5, BELT_Y - 0.3, BELT_Z);
    body.castShadow = true;
    body.receiveShadow = true;
    s.add(body);
    this.beltTex = beltTexture();
    const top = new THREE.Mesh(new THREE.BoxGeometry(14, 0.06, 1.1), new THREE.MeshStandardMaterial({ map: this.beltTex, roughness: 0.8 }));
    top.position.set(3.5, BELT_Y - 0.02, BELT_Z);
    top.receiveShadow = true;
    s.add(top);
    for (let x = -3.4; x <= 10; x += 1.2) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, BELT_Y - 0.5, 8), frame);
      leg.position.set(x, (BELT_Y - 0.5) / 2, BELT_Z + 0.45);
      s.add(leg);
    }
    const end = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.3, 20), new THREE.MeshStandardMaterial({ color: 0xffc23a, roughness: 0.4 }));
    end.rotation.x = Math.PI / 2;
    end.position.set(-3.5, BELT_Y - 0.28, BELT_Z);
    s.add(end);
    // the hatch the things come out of (an arch with striped curtain flaps), on the side the child reads from
    this.side = this.en ? -1 : 1;
    const hatch = new THREE.Group();
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1, 0.22, 10, 30, Math.PI), new THREE.MeshStandardMaterial({ color: 0xff6aa8, roughness: 0.5 }));
    arch.position.y = 1;
    hatch.add(arch);
    for (const k2 of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.44, 2, 0.44), arch.material); p.position.set(k2, 0, 0); hatch.add(p); }
    for (let i = 0; i < 6; i++) {
      const flap = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 1.5), new THREE.MeshStandardMaterial({ color: i % 2 ? 0xfff2a8 : 0x6ac8ff, side: THREE.DoubleSide, roughness: 0.7 }));
      flap.position.set(-0.75 + i * 0.3, 0.75, 0);
      hatch.add(flap);
    }
    hatch.rotation.y = Math.PI / 2;
    hatch.position.set(this.side * 6.2, BELT_Y, BELT_Z);
    s.add(hatch);
    if (this.side < 0) { body.position.x = -3.5; top.position.x = -3.5; end.position.x = 3.5; }
    // Robi the shop robot
    this.robi = makeRobot();
    this.robi.position.set(-this.side * 4.3, 0, BELT_Z + 0.3);
    this.robi.rotation.y = this.side * 0.5;
    s.add(this.robi);
  }

  _makeBaskets(groups) {
    for (const b of this.baskets) this.scene.remove(b.g);
    this.labels.replaceChildren();
    const n = groups.length;
    const gap = n === 3 ? 2.6 : 3;
    this.baskets = groups.map((gid, i) => {
      const g = new THREE.Group();
      const col = GROUPS[gid].color;
      const basket = makeBasket(col);
      g.add(basket);
      // a round sign with the group's picture, above the basket
      const sign = new THREE.Group();
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.08, 28), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }));
      disc.rotation.x = Math.PI / 2;
      sign.add(disc);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 28), new THREE.MeshStandardMaterial({ color: col, roughness: 0.4 }));
      sign.add(rim);
      const icon = makeItem(ICON[gid]);
      icon.scale.setScalar(0.55);
      icon.position.set(0, -0.2, 0.08);
      sign.add(icon);
      sign.position.set(0, 1.18, 0.15);
      g.add(sign);
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8), new THREE.MeshStandardMaterial({ color: 0xd89a5a }));
      stick.position.set(0, 0.85, 0.12);
      g.add(stick);
      const glow = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 36), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0, depthWrite: false }));
      glow.rotation.x = -Math.PI / 2;
      glow.position.y = 0.02;
      g.add(glow);
      const x = (i - (n - 1) / 2) * gap * (this.en ? 1 : -1);
      g.position.set(x, 0, BASKET_Z);
      this.scene.add(g);
      const label = h('div', { class: 'lst-label', style: `--c:#${col.toString(16).padStart(6, '0')}` }, this.en ? GROUPS[gid].en : GROUPS[gid].ar);
      this.labels.append(label);
      return { g, gid, basket, sign, glow, label, wob: 0, no: 0, inside: [], pop: 0 };
    });
  }

  _resize(w, hh) {
    this.renderer.setSize(w, hh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / hh;
    const port = this.camera.aspect < 1;
    this.camera.fov = port ? 40 : 42;
    this.camera.updateProjectionMatrix();
    // fit: the baskets and Robi across, the belt and the shelves top to bottom
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const d = Math.max((port ? 3.05 : 5.2) / (t * this.camera.aspect), 3.4 / t) * 1.04;
    const dir = new THREE.Vector3(0, 5.4, 8.8).normalize();
    const target = new THREE.Vector3(0, 0.8, port ? 0.5 : -0.1);
    this.camera.position.copy(target).addScaledVector(dir, d);
    this.camera.lookAt(target);
  }

  // ---- input --------------------------------------------------------------------------------------------------------

  _ray(e) {
    const r = this.sh.root.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    return ray;
  }

  _basketAt(ray) {
    let best = -1;
    let bd = Infinity;
    this.baskets.forEach((b, i) => {
      const hit = ray.intersectObject(b.g, true)[0];
      if (hit && hit.distance < bd) { bd = hit.distance; best = i; }
    });
    return best;
  }

  _bind() {
    const root = this.sh.root;
    root.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'wait' || e.target.closest('button') || e.target.closest('.lk-dim')) return;
      const ray = this._ray(e);
      if (ray.intersectObject(this.item, true).length || ray.intersectObject(this.itemHit, false).length) {
        this.drag = { id: e.pointerId };
        this.sh.sound.play('pop');
        try { root.setPointerCapture(e.pointerId); } catch (_) { /* fine */ }
        return;
      }
      const b = this._basketAt(ray);
      if (b >= 0) this._fly(b);
    });
    root.addEventListener('pointermove', (e) => {
      if (!this.drag) return;
      const hit = new THREE.Vector3();
      if (this._ray(e).ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.4), hit)) {
        hit.x = Math.max(-5, Math.min(5, hit.x));
        hit.z = Math.max(BELT_Z, Math.min(BASKET_Z + 0.6, hit.z));
        this.item.position.lerp(hit, 0.6);
      }
    });
    const up = () => {
      if (!this.drag) return;
      this.drag = null;
      // nearest basket under the dropped thing
      let best = -1;
      let bd = 1.5;
      this.baskets.forEach((b, i) => {
        const d = Math.hypot(b.g.position.x - this.item.position.x, b.g.position.z - this.item.position.z);
        if (d < bd) { bd = d; best = i; }
      });
      if (best >= 0) this._fly(best);
      else this._back();
    };
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    this._onKey = (e) => {
      if (this.mode !== 'wait') return;
      const n = Number(e.key);
      if (n >= 1 && n <= this.baskets.length) { e.preventDefault(); this._fly(this.en ? n - 1 : this.baskets.length - n); return; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        this.focus = ((this.focus ?? -1) + (e.key === 'ArrowRight' ? 1 : -1) * (this.en ? 1 : -1) + this.baskets.length) % this.baskets.length;
        this.sh.sound.play('tap');
        this.sh.say(this.baskets[this.focus].label.textContent, false, 1.2);
      }
      if ((e.key === 'Enter' || e.key === ' ') && this.focus != null) { e.preventDefault(); this._fly(this.focus); }
    };
    window.addEventListener('keydown', this._onKey);
  }

  // ---- flow ---------------------------------------------------------------------------------------------------------

  _start() {
    this.play = new SortPlay(this.sh.age, Math.floor(Math.random() * 1e9));
    this.sh.clear();
    this.lightDots = this.sh.topBar(5, '🧺');
    this.lightDots(0);
    this.sh.layer.append(this.labels);
    this.sh.sound.setMode('play');
    this._makeBaskets(this.play.current.groups);
    this.sh.say(this.sh.t('intro'), true, 3.2);
    this.firstHint = true;
    setTimeout(() => this._next(), 2600);
  }

  /** The belt brings the next thing. */
  _next() {
    if (this.item) this.scene.remove(this.item);
    const id = this.play.item;
    this.item = makeItem(id);
    this.item.scale.setScalar(1.3); // big and clear on the belt
    this.item.position.set(this.side * 6.4, BELT_Y, BELT_Z);
    this.item.rotation.y = this.side * -0.4;
    this.scene.add(this.item);
    this.itemHit = new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
    this.item.add(this.itemHit);
    this.itemHit.position.y = 0.4;
    this.mode = 'belt';
    this.beltT = 0;
    this.sh.sound.play('whoosh');
  }

  _arrived() {
    this.mode = 'wait';
    this.sh.sound.play('drop');
    const w = ITEM_WORDS[this.play.item];
    this.sh.speak(this.en ? w[1] : w[0], 1.4);
    this.idle = 0;
    if (this.firstHint) { this.firstHint = false; setTimeout(() => this.mode === 'wait' && this.sh.say(this.sh.t('howTo'), false, 3), 1500); }
  }

  /** The thing flies in an arc to basket [b]; then it is checked. */
  _fly(b) {
    if (this.mode !== 'wait') return;
    this.mode = 'fly';
    const from = this.item.position.clone();
    const bpos = this.baskets[b].g.position;
    this.flight = { from, to: new THREE.Vector3(bpos.x, 0.75, bpos.z), t: 0, b };
    this.sh.sound.play('whoosh');
  }

  _landed(b) {
    const ev = this.play.drop(b);
    const bk = this.baskets[b];
    const w = ITEM_WORDS[ev.item];
    if (!ev.ok) {
      // a gentle "no": the basket shakes its head, the thing hops back to the belt
      bk.no = 0.6;
      this.sh.sound.play('bump');
      setTimeout(() => this.sh.sound.play('hmm'), 150);
      this.sh.say(this.sh.t('tryOther'), true, 2.2);
      this._back();
      if (this.play.misses === 1) this.sh.round('vocab', false, w[0]);
      return;
    }
    if (ev.first) this.sh.round('vocab', true, w[0]);
    bk.wob = 1;
    bk.pop = 0.4;
    this.sh.sound.play('right');
    setTimeout(() => this.sh.sound.play('cheer'), 250);
    this.robiJoy = 1.2;
    this._sparkle(bk.g.position.clone().setY(1));
    const g = GROUPS[ev.group];
    this.sh.say(this.en ? `${w[1]}: ${g.en}!` : `${w[2]} ${g.ar}!`, true, 2);
    // the thing stays in the basket (small, stacked)
    const kept = this.item;
    this.item = null;
    kept.remove(this.itemHit);
    kept.scale.setScalar(0.6);
    const n = bk.inside.length;
    kept.position.set((n % 2 ? 0.18 : -0.18), 0.32 + Math.floor(n / 2) * 0.12, (n % 2 ? -0.05 : 0.08));
    kept.rotation.set(0, n * 1.3, (n % 2 ? 0.2 : -0.2));
    bk.g.add(kept);
    bk.inside.push(kept);
    for (const x of this.baskets) x.glow.material.opacity = 0;
    this.mode = 'between';
    if (ev.roundDone) {
      this.lightDots(this.play.round);
      setTimeout(() => {
        this.sh.sound.play('roundWin');
        for (const x of this.baskets) { x.wob = 1; x.pop = 0.5; }
        if (!ev.finished) this.sh.say(this.sh.t('roundDone'), false, 1.8);
      }, 1700);
      setTimeout(() => {
        if (ev.finished) {
          this.mode = 'end';
          this.sh.sound.setMode('calm');
          this.sh.finishCard(this.sh.t('title'), '🧺', () => this._start());
          return;
        }
        this._makeBaskets(this.play.current.groups);
        this._next();
      }, 3300);
    } else setTimeout(() => this._next(), 1900);
  }

  _back() {
    this.mode = 'back';
    this.flight = { from: this.item.position.clone(), to: new THREE.Vector3(0, BELT_Y, BELT_Z), t: 0, back: true };
  }

  _sparkle(at) {
    const cols = [0xff5a5a, 0xffc93a, 0x4aa8ff, 0x6ad86a, 0xff7ab8, 0xffffff];
    for (let i = 0; i < 26; i++) {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.06), new THREE.MeshBasicMaterial({ color: cols[i % cols.length] }));
      m.position.copy(at);
      const a = Math.random() * Math.PI * 2;
      m.userData = { v: new THREE.Vector3(Math.cos(a) * 1.6, 2.4 + Math.random() * 2, Math.sin(a) * 1.2), life: 1.1 };
      this.scene.add(m);
      this.fx.push(m);
    }
  }

  // ---- loop ---------------------------------------------------------------------------------------------------------

  _loop() {
    this._raf = requestAnimationFrame(() => this._loop());
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    if (this.mode === 'belt' && this.item) {
      this.beltT += dt / 1.7;
      const k = Math.min(1, this.beltT);
      const e = 1 - Math.pow(1 - k, 3);
      this.item.position.x = this.side * 6.4 * (1 - e);
      this.item.position.y = BELT_Y + Math.abs(Math.sin(this.beltT * 12)) * 0.03 * (1 - k);
      this.beltTex.offset.x -= dt * 0.9 * this.side * (1 - k);
      if (Math.floor(this.beltT * 10) !== this._tick && k < 0.9) { this._tick = Math.floor(this.beltT * 10); this.sh.sound.play('step', this._tick % 2); }
      if (k >= 1) this._arrived();
    }
    if (this.mode === 'wait' && this.item && !this.drag) {
      this.item.position.y = BELT_Y + Math.abs(Math.sin(time * 3)) * 0.08;
      this.item.userData.inner.rotation.y = Math.sin(time * 1.5) * 0.4;
      this.idle += dt;
      const hint = this.play.hint;
      this.baskets.forEach((b, i) => { b.glow.material.opacity = i === hint || (this.idle > 9 && i === this.play.rightBasket) ? 0.5 + Math.sin(time * 6) * 0.35 : 0; });
    }
    if (this.drag && this.item) this.item.userData.inner.rotation.z = Math.sin(time * 10) * 0.08;
    if (this.flight) {
      const f = this.flight;
      f.t += dt / (f.back ? 0.45 : 0.5);
      const k = Math.min(1, f.t);
      this.item.position.lerpVectors(f.from, f.to, k);
      this.item.position.y += Math.sin(k * Math.PI) * (f.back ? 0.9 : 1.3);
      if (k >= 1) {
        this.flight = null;
        if (f.back) { this.mode = 'wait'; this.sh.sound.play('drop'); } else this._landed(f.b);
      }
    }
    for (const b of this.baskets) {
      if (b.wob > 0) { b.wob = Math.max(0, b.wob - dt * 1.4); b.basket.rotation.z = Math.sin(b.wob * 20) * 0.15 * b.wob; }
      if (b.no > 0) { b.no = Math.max(0, b.no - dt); b.basket.rotation.y = Math.sin(b.no * 30) * 0.25 * b.no; b.sign.rotation.y = b.basket.rotation.y; }
      if (b.pop > 0) { b.pop = Math.max(0, b.pop - dt); b.g.position.y = Math.sin((b.pop / 0.5) * Math.PI) * 0.35; }
      b.sign.children[2].rotation.y = Math.sin(time * 1.6 + b.g.position.x) * 0.6;
      // the name under each basket
      const p = b.g.position.clone().setY(-0.15).project(this.camera);
      b.label.style.left = `${(p.x * 0.5 + 0.5) * this.sh.w}px`;
      b.label.style.top = `${(-p.y * 0.5 + 0.5) * this.sh.h}px`;
      b.label.classList.toggle('focus', this.focus != null && this.baskets[this.focus] === b);
    }
    // Robi: idle bob, waves when happy
    const rb = this.robi.userData;
    this.robiJoy = Math.max(0, (this.robiJoy || 0) - dt);
    this.robi.position.y = Math.abs(Math.sin(time * (this.robiJoy > 0 ? 9 : 2))) * (this.robiJoy > 0 ? 0.25 : 0.05);
    rb.arm.rotation.z = (this.robiJoy > 0 ? -2.4 + Math.sin(time * 14) * 0.5 : -0.3 + Math.sin(time * 2) * 0.1) * -this.side;
    rb.antenna.material.emissiveIntensity = 0.6 + Math.sin(time * 5) * 0.4;
    rb.eyes.forEach((e) => { e.scale.y = Math.sin(time * 1.3) > 0.97 ? 0.15 : 1; });
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const m = this.fx[i];
      const u = m.userData;
      u.life -= dt;
      u.v.y -= 7 * dt;
      m.position.addScaledVector(u.v, dt);
      m.rotation.x += dt * 8;
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

// ---- models and textures --------------------------------------------------------------------------------------------

function makeBasket(color) {
  const g = new THREE.Group();
  const weave = new THREE.MeshStandardMaterial({ map: weaveTexture(color), roughness: 0.8, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.55, 0.7, 28, 1, true), weave);
  body.position.y = 0.35;
  body.castShadow = true;
  g.add(body);
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.55, 28), new THREE.MeshStandardMaterial({ color: 0xc89a5a }));
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = 0.02;
  g.add(bottom);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.07, 10, 32), new THREE.MeshStandardMaterial({ color, roughness: 0.4 }));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.7;
  g.add(rim);
  for (const k of [-1, 1]) {
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 8, 16, Math.PI), rim.material);
    handle.position.set(k * 0.74, 0.62, 0);
    handle.rotation.y = Math.PI / 2;
    g.add(handle);
  }
  return g;
}

function makeRobot() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x8ad0ff, roughness: 0.35 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.5, 8, 18), body);
  torso.position.y = 0.95;
  torso.castShadow = true;
  g.add(torso);
  const belly = new THREE.Mesh(new THREE.CircleGeometry(0.24, 24), white);
  belly.position.set(0, 0.9, 0.43);
  g.add(belly);
  const heart = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), new THREE.MeshStandardMaterial({ color: 0xff4a6a, emissive: 0xff2a4a, emissiveIntensity: 0.4 }));
  heart.position.set(0, 0.92, 0.45);
  g.add(heart);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.7), body);
  head.position.y = 1.9;
  head.castShadow = true;
  g.add(head);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.42), new THREE.MeshStandardMaterial({ color: 0x1a2a4a, roughness: 0.2 }));
  screen.position.set(0, 1.9, 0.355);
  g.add(screen);
  const eyes = [];
  for (const k of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.CircleGeometry(0.07, 16), new THREE.MeshBasicMaterial({ color: 0x7af0ff }));
    e.position.set(k * 0.15, 1.95, 0.36);
    g.add(e);
    eyes.push(e);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 6, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0x7af0ff }));
  smile.rotation.z = Math.PI;
  smile.position.set(0, 1.82, 0.36);
  g.add(smile);
  const antenna = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), new THREE.MeshStandardMaterial({ color: 0xffd23a, emissive: 0xffa800, emissiveIntensity: 0.6 }));
  antenna.position.y = 2.42;
  g.add(antenna);
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 6), white);
  stalk.position.y = 2.3;
  g.add(stalk);
  let arm = null;
  for (const k of [-1, 1]) {
    const a = new THREE.Group();
    a.position.set(k * 0.5, 1.2, 0);
    const up = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.36, 6, 10), white);
    up.position.y = -0.25;
    a.add(up);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), body);
    hand.position.y = -0.5;
    a.add(hand);
    a.rotation.z = k * 0.3;
    g.add(a);
    if (k === 1) arm = a;
  }
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.3, 20), white);
  base.position.y = 0.2;
  g.add(base);
  g.userData = { arm, antenna, eyes };
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

function planks() {
  return canvasTex(256, 256, (g) => {
    for (let i = 0; i < 8; i++) {
      g.fillStyle = ['#e8b880', '#deac72', '#f0c48c', '#e2b078'][i % 4];
      g.fillRect(0, i * 32, 256, 32);
      g.fillStyle = 'rgba(120,70,30,.25)';
      g.fillRect(0, i * 32 + 30, 256, 2);
      g.fillRect(((i * 97) % 200) + 20, i * 32, 2, 32);
    }
  }, [8, 6]);
}

function wallpaper() {
  return canvasTex(256, 256, (g) => {
    g.fillStyle = '#ffeaf2';
    g.fillRect(0, 0, 256, 256);
    for (let x = 0; x < 256; x += 64) { g.fillStyle = '#ffd8e8'; g.fillRect(x, 0, 32, 256); }
    g.fillStyle = 'rgba(255,255,255,.7)';
    for (let i = 0; i < 12; i++) { g.beginPath(); g.arc((i * 53) % 256, (i * 91) % 256, 6, 0, Math.PI * 2); g.fill(); }
  }, [8, 3]);
}

function beltTexture() {
  return canvasTex(256, 64, (g) => {
    g.fillStyle = '#3a3e52';
    g.fillRect(0, 0, 256, 64);
    g.fillStyle = '#4a4e66';
    for (let x = 0; x < 256; x += 32) g.fillRect(x, 0, 14, 64);
    g.fillStyle = 'rgba(255,210,58,.8)';
    g.fillRect(0, 0, 256, 4);
    g.fillRect(0, 60, 256, 4);
  }, [10, 1]);
}

function weaveTexture(color) {
  const c = `#${color.toString(16).padStart(6, '0')}`;
  return canvasTex(128, 64, (g) => {
    g.fillStyle = '#e8c48a';
    g.fillRect(0, 0, 128, 64);
    for (let y = 0; y < 64; y += 16) {
      for (let x = 0; x < 128; x += 16) {
        g.fillStyle = ((x + y) / 16) % 2 ? '#d8a868' : '#f0d4a0';
        g.fillRect(x + 1, y + 1, 14, 14);
      }
    }
    g.fillStyle = c;
    g.fillRect(0, 26, 128, 12);
  }, [4, 1]);
}

const CSS = `
.lst-labels{position:absolute;inset:0;pointer-events:none}
.lst-label{position:absolute;transform:translate(-50%,0);background:var(--c);color:#fff;font-weight:900;font-size:calc(var(--u)*4.6);padding:calc(var(--u)*.6) calc(var(--u)*3.4);border-radius:999px;border:calc(var(--u)*.55) solid #fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(40,30,80,.3);text-shadow:0 1px 2px rgba(0,0,0,.3);white-space:nowrap}
.lst-label.focus{outline:calc(var(--u)*.8) solid #3a8ae8;outline-offset:calc(var(--u)*.4)}
`;

const api = {
  start(el, config, post) {
    if (!document.getElementById('lst-style')) document.head.append(h('style', { id: 'lst-style' }, CSS));
    const g = new Game(el, config || {}, post);
    api.last = g;
    return { dispose: () => g.dispose(), pause: () => g.pause() };
  },
};
window.LearnSort = api;
export default api;
