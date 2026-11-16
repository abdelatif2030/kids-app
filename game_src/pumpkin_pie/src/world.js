// The 3D bakery yard. Built once; every frame it copies the simulation's state onto the models: pumpkins growing,
// stacks on backs, pumpkins in crates, pies on shelves and the counter, coins in the cash pile, customers walking,
// helpers, new parts popping in when they are bought, falling autumn leaves and little sparkles.
import * as THREE from 'three';
import { COUNTER, OVENS, COUNTER_ZONE, CASH_ZONE, CHUTE, FIELDS, PLOT, REGROW, PADS, BOUNDS } from './data.js';
import {
  mat, box, cyl, makePumpkin, makeSprout, makePie, makeCoin, makeChef, makeAnimal, makeOven, makeCrate, makeShelf,
  makeCounter, makeChute, makeTable, makeTree, makeFence, makeHay, makeScarecrow, makeLights, makePad, leafGeometry,
} from './models.js';

const easeBack = (t) => { const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

let _dot;
function dotTexture() {
  if (_dot) return _dot;
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.9)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 32, 32);
  _dot = new THREE.CanvasTexture(c);
  return _dot;
}

class Sparkles {
  constructor(scene, n) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.col = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.g = new THREE.BufferGeometry();
    this.g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.pts = new THREE.Points(this.g, new THREE.PointsMaterial({ size: 0.28, map: dotTexture(), vertexColors: true, transparent: true, depthWrite: false, alphaTest: 0.15 }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
    this.i = 0;
    for (let k = 0; k < n; k++) this.pos[k * 3 + 1] = -99;
  }
  emit(x, y, z, vx, vy, vz, color, life = 1) {
    const k = this.i++ % this.n;
    this.pos.set([x, y, z], k * 3);
    this.vel.set([vx, vy, vz], k * 3);
    const c = new THREE.Color(color);
    this.col.set([c.r, c.g, c.b], k * 3);
    this.life[k] = life;
  }
  burst(x, y, z, n = 30, colors = [0xffd23a, 0xff7a3a, 0xff4f6a, 0x7adf6a, 0x5ab0ff]) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 2 + Math.random() * 3;
      this.emit(x, y, z, Math.cos(a) * s, 3 + Math.random() * 4, Math.sin(a) * s, colors[i % colors.length], 1.2);
    }
  }
  update(dt) {
    for (let k = 0; k < this.n; k++) {
      if (this.life[k] <= 0) continue;
      this.life[k] -= dt;
      this.vel[k * 3 + 1] -= 9 * dt;
      for (let a = 0; a < 3; a++) this.pos[k * 3 + a] += this.vel[k * 3 + a] * dt;
      if (this.life[k] <= 0 || this.pos[k * 3 + 1] < 0) { this.life[k] = 0; this.pos[k * 3 + 1] = -99; }
    }
    this.g.attributes.position.needsUpdate = true;
    this.g.attributes.color.needsUpdate = true;
  }
}

/** A pool of objects shown by count. */
class Pool {
  constructor(parent, make, n, place) {
    this.items = [];
    for (let i = 0; i < n; i++) {
      const o = make(i);
      place(o, i);
      o.visible = false;
      parent.add(o);
      this.items.push(o);
    }
    this.shown = 0;
  }
  show(n) {
    n = Math.min(n, this.items.length);
    for (let i = 0; i < this.items.length; i++) {
      const v = i < n;
      if (v && !this.items[i].visible) this.items[i].userData.pop = 0; // a fresh item pops in
      this.items[i].visible = v;
    }
    this.shown = n;
  }
  animate(dt) {
    for (const o of this.items) {
      if (!o.visible || o.userData.pop === undefined) continue;
      o.userData.pop = Math.min(1, o.userData.pop + dt * 6);
      const s = (o.userData.base ?? 1) * easeBack(o.userData.pop);
      o.scale.setScalar(s);
      if (o.userData.pop >= 1) delete o.userData.pop;
    }
  }
}

export class BakeryWorld {
  constructor(scene, bakery, quality, chefKind) {
    this.scene = scene;
    this.b = bakery;
    this.quality = quality;
    this.pops = [];
    scene.background = new THREE.Color(0xffd9a8);
    scene.fog = new THREE.Fog(0xffd9a8, 34, 70);
    scene.add(new THREE.HemisphereLight(0xfff1dc, 0x7a6a3a, 1.9));
    const sun = new THREE.DirectionalLight(0xffe2b8, 1.5);
    sun.position.set(-10, 22, 12);
    scene.add(sun);
    this._ground();
    this._shop();
    this._fields();
    this._decor();
    this._extras();
    this._people(chefKind);
    this._pads();
    this.sparkles = new Sparkles(scene, 260);
    this._leaves();
    this.syncUnlocked(true);
  }

  // ---- static parts -------------------------------------------------------------------------------------------------

  _ground() {
    const s = this.scene;
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(80, 70), mat(0xa8c95a));
    grass.rotation.x = -Math.PI / 2;
    grass.position.z = 2;
    s.add(grass);
    // the cobbled shop floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(BOUNDS.x1 - BOUNDS.x0, 6.4), mat(0xe8cfa8));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0.01, -3.6);
    s.add(floor);
    for (let i = 0; i < 60; i++) {
      const st = new THREE.Mesh(new THREE.CircleGeometry(0.22 + (i % 3) * 0.06, 7), mat(0xd8b88a));
      st.rotation.x = -Math.PI / 2;
      st.position.set(BOUNDS.x0 + 0.6 + ((i * 7.3) % (BOUNDS.x1 - BOUNDS.x0 - 1.2)), 0.02, -6.4 + ((i * 3.7) % 6));
      s.add(st);
    }
    // the street the customers walk along
    const street = new THREE.Mesh(new THREE.PlaneGeometry(40, 3.4), mat(0xd9b98c));
    street.rotation.x = -Math.PI / 2;
    street.position.set(0, 0.012, -9.6);
    s.add(street);
    // dirt paths to the fields
    const path = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 6), mat(0xd2a978));
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.015, 1.4);
    s.add(path);
  }

  _shop() {
    const s = this.scene;
    const counter = makeCounter(COUNTER.w);
    counter.position.set(COUNTER.x, 0, COUNTER.z);
    s.add(counter);
    this.ovenModels = {};
    for (const o of OVENS) {
      const g = new THREE.Group();
      const ov = makeOven();
      g.add(ov.root);
      g.position.set(o.x, 0, o.z);
      const crate = makeCrate();
      crate.position.set(o.input.x - o.x, 0, o.input.z - o.z + 0.1);
      g.add(crate);
      const shelf = makeShelf();
      shelf.position.set(o.shelf.x - o.x + (o.x < 0 ? 0.1 : -0.1), 0, 0);
      g.add(shelf);
      s.add(g);
      // pumpkins waiting in the crate, pies on the shelf
      const crateItems = new Pool(s, () => makePumpkin(0.24), 10, (p, i) => {
        p.position.set(o.input.x - 0.45 + (i % 4) * 0.3, 0.12 + Math.floor(i / 4) * 0.22, o.input.z + 0.1 + ((i % 2) - 0.5) * 0.3);
        p.userData.base = 0.24;
      });
      const shelfItems = new Pool(s, () => makePie(0.8), 10, (p, i) => {
        p.position.set(o.shelf.x + (o.x < 0 ? 0.1 : -0.1) + ((i % 2) - 0.5) * 0.55, 0.7 + Math.floor(i / 2) * 0.12, ((i % 4 < 2) ? -0.2 : 0.2) + o.shelf.z);
        p.userData.base = 0.8;
      });
      this.ovenModels[o.id] = { group: g, fire: ov.fire, crateItems, shelfItems };
    }
    // pies waiting on the counter
    this.counterPies = new Pool(s, () => makePie(0.8), 16, (p, i) => {
      p.position.set(-2.0 + (i % 8) * 0.5, 1.12 + Math.floor(i / 8) * 0.12, COUNTER.z + (Math.floor(i / 8) ? -0.25 : 0.2));
      p.userData.base = 0.8;
    });
    // the cash pile
    this.cashCoins = new Pool(s, () => makeCoin(), 30, (c, i) => {
      const col = i % 5;
      c.position.set(CASH_ZONE.x - 0.3 + (col % 3) * 0.32, 0.03 + Math.floor(i / 5) * 0.055, CASH_ZONE.z + (col < 3 ? -0.15 : 0.2));
      c.userData.base = 1;
    });
    const mark = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.0, 28), new THREE.MeshBasicMaterial({ color: 0xffd23a, transparent: true, opacity: 0.8 }));
    mark.rotation.x = -Math.PI / 2;
    mark.position.set(CASH_ZONE.x, 0.03, CASH_ZONE.z);
    s.add(mark);
    const drop = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.25, 28), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
    drop.rotation.x = -Math.PI / 2;
    drop.position.set(COUNTER_ZONE.x, 0.03, COUNTER_ZONE.z);
    s.add(drop);
    for (const o of OVENS) {
      for (const z of [o.input, o.shelf]) {
        const r = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.15, 28), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }));
        r.rotation.x = -Math.PI / 2;
        r.position.set(z.x, 0.03, z.z);
        this.ovenModels[o.id].group.attach(r);
      }
    }
    // the house behind the street
    const house = new THREE.Group();
    house.add(box(9, 3.4, 3, mat(0xf3e2c4), 0, 1.7, 0));
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 3.4, 2.2, 4, 1), mat(0xb4472f));
    roof.rotation.y = Math.PI / 4;
    roof.scale.set(1.9, 1, 0.65);
    roof.position.y = 4.5;
    house.add(roof);
    for (const x of [-2.8, 2.8]) house.add(box(1.2, 1.1, 0.1, mat(0x8fd0ff), x, 2.1, 1.52));
    house.add(box(1.3, 2.1, 0.1, mat(0x9a5a2a), 0, 1.05, 1.52));
    house.position.set(-3, 0, -14.5);
    this.scene.add(house);
    const sign = box(3.2, 0.7, 0.12, mat(0xe8a25a), 0, 3.15, 1.6);
    house.add(sign);
  }

  _fields() {
    const s = this.scene;
    this.fieldModels = {};
    for (const f of FIELDS) {
      const g = new THREE.Group();
      const w = f.cols * PLOT + 0.6;
      const d = f.rows * PLOT + 0.6;
      const soil = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d), mat(0x8a5a32));
      soil.position.set(f.x, 0.05, f.z);
      g.add(soil);
      for (let r = 0; r < f.rows; r++) g.add(box(w - 0.2, 0.08, 0.5, mat(0x7a4a28), f.x, 0.14, f.z + (r - (f.rows - 1) / 2) * PLOT));
      const fence = makeFence(w + 0.6);
      fence.position.set(f.x, 0, f.z + d / 2 + 0.3);
      g.add(fence);
      s.add(g);
      this.fieldModels[f.id] = g;
    }
    this.plotModels = this.b.plots.map((pl) => {
      const g = new THREE.Group();
      g.position.set(pl.x, 0.12, pl.z);
      const pumpkin = makePumpkin(0.34);
      pumpkin.rotation.y = Math.random() * Math.PI * 2;
      g.add(pumpkin);
      const sprout = makeSprout();
      g.add(sprout);
      s.add(g);
      return { g, pumpkin, sprout, field: pl.field };
    });
  }

  _decor() {
    const s = this.scene;
    const colors = [0xf28c28, 0xe8552a, 0xf2c12e, 0xd9762a, 0xb4472f];
    const spots = [[-14, -3], [-14, 3], [-14, 9], [14, -3], [14, 3], [14, 9], [-10, 18], [-3, 19], [4, 18.5], [10, 18], [-16, -12], [-9, -13.5], [6, -14], [13, -12.5], [16, -8], [-17, 6], [17, 12]];
    spots.forEach(([x, z], i) => {
      const tr = makeTree(0.9 + (i % 3) * 0.25, colors[i % colors.length]);
      tr.position.set(x, 0, z);
      s.add(tr);
    });
    for (const [x, z] of [[-11, 11.5], [11, -0.2], [-11, 0.2], [10.6, 11.6]]) {
      const h = makeHay();
      h.position.set(x, 0, z);
      h.rotation.y = x;
      s.add(h);
    }
    const sc = makeScarecrow();
    sc.position.set(3.2, 0, 9.6);
    s.add(sc);
    for (const [x, z] of [[-11.5, -5.8], [11.5, -5.8], [-3.6, -6.4], [3.6, -6.4]]) {
      const p = makePumpkin(0.4);
      p.position.set(x, 0, z);
      s.add(p);
    }
  }

  _extras() {
    const s = this.scene;
    // the chute: a drop funnel and a little wooden slide to the first oven's crate
    const chute = new THREE.Group();
    const top = makeChute();
    top.position.set(CHUTE.x, 0, CHUTE.z);
    chute.add(top);
    const o = OVENS[0];
    const from = new THREE.Vector3(CHUTE.x, 1.0, CHUTE.z);
    const to = new THREE.Vector3(o.input.x + 0.6, 0.35, o.input.z + 0.6);
    const len = from.distanceTo(to);
    const slide = box(0.6, 0.08, len, mat(0xc28a4a));
    slide.position.copy(from).lerp(to, 0.5);
    slide.lookAt(to);
    chute.add(slide);
    for (const side of [-0.32, 0.32]) {
      const rail = box(0.06, 0.18, len, mat(0x8a5a2a));
      rail.position.copy(slide.position);
      rail.quaternion.copy(slide.quaternion);
      rail.translateX(side);
      rail.translateY(0.1);
      chute.add(rail);
    }
    s.add(chute);
    this.chuteModel = chute;
    this.chuteFrom = from;
    this.chuteTo = to;
    this.chuteItems = new Pool(s, () => makePumpkin(0.24), 24, (p) => { p.userData.base = 0.24; });
    // tables for guests, west of the shop
    const tables = new THREE.Group();
    for (const [x, z, c] of [[-10, -4.6, 0xff8a1f], [-10.2, -1, 0x5ab0ff]]) {
      const t = makeTable(c);
      t.position.set(x, 0, z);
      tables.add(t);
    }
    s.add(tables);
    this.tables = tables;
    // autumn lights around the shop
    const lights = makeLights([[-11.6, -6.6], [-6, -7.2], [0, -7.4], [6, -7.2], [11.6, -6.6]]);
    s.add(lights.root);
    this.lights = lights;
  }

  _people(chefKind) {
    this.setChef(chefKind);
    this.chefStack = this._stackPools(this.chef.back, 15);
    const w = makeAnimal('bear', 0xffffff);
    this.scene.add(w.root);
    this.waiter = w;
    this.waiterStack = this._stackPools(w.back, 4);
    const f = makeAnimal('bunny', 0x6aa0d8);
    const hat = cyl(0.42, 0.42, 0.04, mat(0xe8c45a), 0, 0.28, 0, 14);
    hat.add(cyl(0.2, 0.24, 0.2, mat(0xe8c45a), 0, 0.1, 0, 12));
    f.head.add(hat);
    this.scene.add(f.root);
    this.farmer = f;
    this.farmerStack = this._stackPools(f.back, 4);
    this.customerModels = new Map();
  }

  setChef(kind) {
    if (this.chef && this.chefKind === kind) return;
    let stack = null;
    if (this.chef) {
      this.scene.remove(this.chef.root);
      stack = this.chefStack;
    }
    this.chefKind = kind;
    this.chef = makeChef(kind);
    this.scene.add(this.chef.root);
    if (stack) {
      this.chef.back.add(stack.pumpkins.group, stack.pies.group);
    }
  }

  _stackPools(back, n) {
    const pg = new THREE.Group();
    const qg = new THREE.Group();
    back.add(pg, qg);
    const pumpkins = new Pool(pg, () => makePumpkin(0.26), n, (p, i) => { p.position.set(0, -0.25 + i * 0.36, -0.05); p.rotation.y = i * 1.3; p.userData.base = 0.26; });
    const pies = new Pool(qg, () => makePie(0.95), n, (p, i) => { p.position.set(0, -0.2 + i * 0.15, -0.05); p.userData.base = 0.95; });
    pumpkins.group = pg;
    pies.group = qg;
    return { pumpkins, pies };
  }

  _pads() {
    this.padModels = new Map();
    for (const p of PADS) {
      const m = makePad();
      m.root.position.set(p.x, 0, p.z);
      m.root.visible = false;
      this.scene.add(m.root);
      this.padModels.set(p.id, m);
    }
  }

  _leaves() {
    const n = this.quality.low ? 40 : 90;
    const m = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide, vertexColors: false });
    const inst = new THREE.InstancedMesh(leafGeometry(), m, n);
    const cols = [0xf28c28, 0xe8552a, 0xf2c12e, 0xc9452a];
    this.leafData = [];
    for (let i = 0; i < n; i++) {
      inst.setColorAt(i, new THREE.Color(cols[i % 4]));
      this.leafData.push({ x: (Math.random() - 0.5) * 34, y: Math.random() * 12, z: (Math.random() - 0.5) * 30, s: 0.6 + Math.random() * 0.8, r: Math.random() * 6, w: 0.5 + Math.random() });
    }
    inst.frustumCulled = false;
    this.scene.add(inst);
    this.leafMesh = inst;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._sv = new THREE.Vector3();
  }

  // ---- changes ------------------------------------------------------------------------------------------------------

  /** Shows the parts that are built; with `quiet` (at load) nothing pops. */
  syncUnlocked(quiet = false) {
    const has = (id) => this.b.has(id);
    const set = (obj, on) => {
      if (obj.visible === on && obj.userData.inited) return;
      obj.userData.inited = true;
      obj.visible = on;
      if (on && !quiet) this.pop(obj);
    };
    set(this.ovenModels.oven2.group, has('oven2'));
    for (const f of FIELDS) set(this.fieldModels[f.id], !f.needs || has(f.needs));
    set(this.chuteModel, has('chute'));
    set(this.tables, has('tables'));
    set(this.lights.root, has('lights'));
    set(this.waiter.root, has('waiter'));
    set(this.farmer.root, has('farmer'));
  }

  pop(obj) {
    obj.scale.setScalar(0.01);
    this.pops.push({ obj, t: 0 });
  }

  // ---- every frame --------------------------------------------------------------------------------------------------

  update(dt, time) {
    const b = this.b;
    // pumpkins: ripe ones sit there, picked ones grow back from a sprout
    b.plots.forEach((pl, i) => {
      const m = this.plotModels[i];
      const open = this.fieldModels[pl.field].visible;
      m.g.visible = open;
      if (!open) return;
      if (pl.ripe) {
        if (m.pumpkin.userData.grow !== 1) { m.pumpkin.userData.grow = 1; m.pumpkin.scale.setScalar(0.34); }
        m.pumpkin.visible = true;
        m.sprout.visible = false;
        m.pumpkin.position.y = Math.abs(Math.sin(time * 2 + i)) * 0.02;
      } else {
        const g = 1 - Math.max(0, pl.t) / REGROW;
        m.sprout.visible = true;
        m.pumpkin.visible = g > 0.35;
        m.pumpkin.userData.grow = g;
        m.pumpkin.scale.setScalar(0.34 * Math.max(0.05, (g - 0.35) / 0.65));
      }
    });
    // ovens, crates, shelves
    for (const o of b.ovens) {
      const m = this.ovenModels[o.id];
      m.crateItems.show(o.in);
      m.shelfItems.show(o.out);
      m.crateItems.animate(dt);
      m.shelfItems.animate(dt);
      const baking = o.in > 0;
      m.fire.scale.setScalar(baking ? 1 + Math.sin(time * 14 + o.x) * 0.12 : 0.55);
    }
    this.counterPies.show(b.counter);
    this.counterPies.animate(dt);
    this.cashCoins.show(Math.min(30, Math.ceil(b.cash / 2)));
    this.cashCoins.animate(dt);
    // the chute
    this.chuteItems.show(b.chute.length);
    b.chute.forEach((c, i) => {
      const p = this.chuteItems.items[i];
      const t = 1 - Math.max(0, c.t) / 1.1;
      p.position.copy(this.chuteFrom).lerp(this.chuteTo, t);
      p.position.y += 0.15;
      p.rotation.x = t * 8;
    });
    // people
    this._walker(this.chef, b.p, dt, time);
    this._stack(this.chefStack, b.p, dt, time);
    if (this.waiter.root.visible) { this._walker(this.waiter, b.waiter, dt, time); this._stack(this.waiterStack, b.waiter, dt, time); }
    if (this.farmer.root.visible) { this._walker(this.farmer, b.farmer, dt, time); this._stack(this.farmerStack, b.farmer, dt, time); }
    const seen = new Set();
    for (const c of b.customers) {
      seen.add(c.id);
      let m = this.customerModels.get(c.id);
      if (!m) {
        m = makeAnimal(c.kind, [0xff8fb1, 0x6aa0d8, 0xffd23a, 0x7adf6a][c.id % 4]);
        m.pie = makePie(0.9);
        m.pie.position.set(0, 0.62, 0.36);
        m.pie.visible = false;
        m.body.add(m.pie);
        this.scene.add(m.root);
        this.customerModels.set(c.id, m);
      }
      this._walker(m, c, dt, time);
      m.pie.visible = c.got > 0;
      if (c.happy > 0) m.body.position.y = Math.abs(Math.sin(time * 10)) * 0.25 * Math.min(1, c.happy);
    }
    for (const [id, m] of this.customerModels) {
      if (!seen.has(id)) { this.scene.remove(m.root); this.customerModels.delete(id); }
    }
    // pads
    const shown = new Set(b.pads.map((p) => p.id));
    for (const [id, m] of this.padModels) {
      const on = shown.has(id);
      if (on && !m.root.visible) this.pop(m.root);
      m.root.visible = on;
      if (on) {
        const pad = PADS.find((p) => p.id === id);
        const f = (b.save.paid[id] ?? 0) / pad.cost;
        if (m.f !== f) { m.f = f; m.setProgress(f); }
        m.ring.scale.setScalar(1 + Math.sin(time * 4) * 0.04);
      }
    }
    // lights twinkle
    if (this.lights.root.visible) this.lights.bulbs.forEach((bl, i) => { bl.material.emissiveIntensity = 0.5 + 0.5 * Math.abs(Math.sin(time * 2 + i)); });
    // things that just appeared
    for (const p of this.pops) {
      p.t = Math.min(1, p.t + dt * 2.2);
      p.obj.scale.setScalar(Math.max(0.01, easeBack(p.t)));
    }
    this.pops = this.pops.filter((p) => p.t < 1);
    this._leafStep(dt, time);
    this.sparkles.update(dt);
  }

  _walker(m, a, dt, time) {
    m.root.position.set(a.x, 0, a.z);
    // smooth turning
    const want = a.heading;
    let cur = m.root.rotation.y;
    let d = want - cur;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    m.root.rotation.y = cur + d * Math.min(1, dt * 12);
    const mv = a.moving ?? 0;
    const sw = Math.sin(time * 13) * 0.6 * mv;
    if (m.legs[0]) { m.legs[0].rotation.x = sw; m.legs[1].rotation.x = -sw; }
    if (m.arms[0]) { m.arms[0].rotation.x = -sw * 0.8; m.arms[1].rotation.x = sw * 0.8; }
    if (!a.happy) m.body.position.y = Math.abs(Math.sin(time * 13)) * 0.06 * mv;
  }

  _stack(st, a, dt, time) {
    const pk = a.kind === 'pumpkin' ? a.stack : 0;
    const pi = a.kind === 'pie' ? a.stack : 0;
    st.pumpkins.show(pk);
    st.pies.show(pi);
    st.pumpkins.animate(dt);
    st.pies.animate(dt);
    // the tower leans a little as the chef walks
    const lean = -Math.sin(time * 6.5) * 0.05 * (a.moving ?? 0) - 0.06 * (a.moving ?? 0);
    st.pumpkins.group.rotation.x = lean;
    st.pies.group.rotation.x = lean;
  }

  _leafStep(dt, time) {
    const m = this._m;
    for (let i = 0; i < this.leafData.length; i++) {
      const l = this.leafData[i];
      l.y -= dt * 0.7 * l.w;
      l.x += Math.sin(time * l.w + l.r) * dt * 0.6;
      if (l.y < 0.05) { l.y = 9 + Math.random() * 4; l.x = (Math.random() - 0.5) * 34 + this.b.p.x; l.z = (Math.random() - 0.5) * 26 + this.b.p.z; }
      this._e.set(Math.sin(time * 2 + l.r) * 1.2, l.r + time * 0.5, Math.cos(time * 1.7 + l.r));
      this._q.setFromEuler(this._e);
      this._v.set(l.x, l.y, l.z);
      this._sv.setScalar(l.s);
      m.compose(this._v, this._q, this._sv);
      this.leafMesh.setMatrixAt(i, m);
    }
    this.leafMesh.instanceMatrix.needsUpdate = true;
  }

  dispose() {
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}
