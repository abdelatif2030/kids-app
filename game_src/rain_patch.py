import re, os
os.chdir('C:/dev/rehlaty/game_src/rain_circuit')
m = open('../moto_race/src/models.js', encoding='utf8').read()
palm = m[m.index('export function makePalm'):]
palm = palm[:palm.index('\n}\n') + 3]
p = 'src/models.js'
s = open(p, encoding='utf8').read()
CAR = r'''
/** A high-performance race car (facing +z): low wedge body, cockpit, wing and four wheels. Same shape as makeTruck. */
export function makeCar(color = 0xe8342a, trim = 0x1c1d22, number = 7) {
  const root = new THREE.Group();
  const lean = new THREE.Group();
  root.add(lean);
  const paint = mat(color);
  const dark = mat(trim);
  const white = mat(0xf4f4f4);
  lean.add(box(1.7, 0.45, 4.2, paint, 0, 0.55, 0));
  lean.add(box(1.3, 0.3, 1.8, paint, 0, 0.5, 1.7));
  lean.add(box(1.2, 0.4, 1.6, mat(0x1a2a3a, 0x203048, 0.4), 0, 0.98, -0.2));
  lean.add(box(1.1, 0.14, 1.2, paint, 0, 1.22, -0.2));
  lean.add(box(2.0, 0.1, 0.5, dark, 0, 1.1, -2.1));
  lean.add(box(0.1, 0.5, 0.1, dark, -0.7, 0.85, -2.1));
  lean.add(box(0.1, 0.5, 0.1, dark, 0.7, 0.85, -2.1));
  lean.add(box(1.9, 0.08, 0.3, dark, 0, 0.3, 2.6));
  lean.add(box(0.12, 0.05, 3.6, white, 0, 0.8, 0.2));
  const wheels = [];
  for (const z of [1.5, -1.4]) {
    for (const sx of [-1, 1]) {
      const w = new THREE.Group();
      const tyre = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.42, 14), mat(0x17181c));
      tyre.rotation.z = Math.PI / 2;
      w.add(tyre);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.44, 10), mat(0xd9dde4));
      rim.rotation.z = Math.PI / 2;
      w.add(rim);
      w.position.set(sx * 0.95, 0.42, z);
      lean.add(w);
      wheels.push(w);
    }
  }
  const proxy = (arr) => ({ get rotation() { return { get x() { return arr[0].rotation.x; }, set x(v) { for (const w of arr) w.rotation.x = v; } }; } });
  const flames = new THREE.Group();
  for (const sx of [-0.4, 0.4]) {
    const f = cone(0.14, 0.9, mat(0x6ab8ff, 0x3a8aff, 1.6), sx, 0.6, -2.7, 8);
    f.rotation.x = -Math.PI / 2;
    flames.add(f);
  }
  flames.visible = false;
  lean.add(flames);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(1.3, 2.8, 1);
  shadow.position.y = 0.04;
  root.add(shadow);
  void number;
  return { root, lean, front: proxy(wheels.slice(0, 2)), back: proxy(wheels.slice(2)), flames, rider: new THREE.Group(), shadow };
}
'''
s += '\n' + palm + CAR
s = s.replace("g.fillStyle = '#b8895a';", "g.fillStyle = '#3a3e46';")
s = s.replace("g.fillStyle = `rgb(${v},${v - 38},${v - 80})`;", "g.fillStyle = `rgb(${v - 90},${v - 88},${v - 82})`;")
s = s.replace("g.fillStyle = 'rgba(90,55,30,0.35)'; // tyre ruts", "g.fillStyle = 'rgba(160,170,190,0.18)';")
s = s.replace("g.fillRect(164, 0, 22, 512);", "g.fillRect(164, 0, 22, 512);\n  g.fillStyle = '#f4f4f4';\n  g.fillRect(10, 0, 8, 512);\n  g.fillRect(238, 0, 8, 512);\n  g.fillRect(124, 0, 8, 240);", 1)
open(p, 'w', encoding='utf8').write(s)

p = 'src/sim.js'
s = open(p, encoding='utf8').read()
for a, b in [("كثبان الصباح", "تلال المطر"), ("Morning Dunes", "Rain Hills"), ("وادي الصخور", "طريق النخيل المبلول"), ("Rock Valley", "Wet Palm Road"),
             ("غروب الصحراء", "وادي الضباب"), ("Desert Sunset", "Misty Valley"), ("كأس التيتان", "كأس العاصفة"), ("Titan Cup", "Storm Cup"), ("0xff7a1a", "0xe8342a")]:
    s = s.replace(a, b)
open(p, 'w', encoding='utf8').write(s)

p = 'src/i18n.js'
s = open(p, encoding='utf8').read()
s = s.replace("['تيتان الكثبان', 'Dune Titans']", "['سباق حلبة المطر', 'Rain Circuit']").replace("لون الشاحنة', 'Truck colour", "لون السيارة', 'Car colour")
s = s.replace("تقود — فرامل (انزلاق) قبل المنحنى", "تقود — فرامل قبل المنحنى").replace("steer — brake to drift before corners", "steer — brake before corners")
open(p, 'w', encoding='utf8').write(s)

p = 'src/audio.js'
s = open(p, encoding='utf8').read()
s = s.replace("const f = rpm / 60 * 0.42; // a big diesel: low and lumpy", "const f = rpm / 60;").replace("lp.frequency.value = 520;", "lp.frequency.value = 900;")
s = s.replace("e.lp.frequency.setTargetAtTime(300 + throttle * 900 + rpm * 0.05 + (boost ? 900 : 0), t, 0.05);", "e.lp.frequency.setTargetAtTime(600 + throttle * 2000 + rpm * 0.1 + (boost ? 1200 : 0), t, 0.05);")
open(p, 'w', encoding='utf8').write(s)

p = 'src/main.js'
s = open(p, encoding='utf8').read()
s = s.replace("makeTruck, makeRock, makeCactus, makeTent, makeHelicopter,", "makeCar, makePalm,")
s = s.replace("window.DuneTitans = api;", "window.RainCircuit = api;")
s = s.replace("const COLORS = [0xff7a1a,", "const COLORS = [0xe8342a,")
s = s.replace("makeTruck(k === 0 ? COLORS[this.save.color] : r.color, r.suit, r.num)", "makeCar(k === 0 ? COLORS[this.save.color] : r.color, r.suit, r.num)")
s = s.replace("const sky = rd.sunset ? 0xff9a6a : 0x9fd8ff;", "const sky = rd.sunset ? 0x8a98a8 : 0x9aa8b8;")
s = s.replace("rd.sunset ? 0xffc08a : 0xf0dcb0, 140, 560", "rd.sunset ? 0xa8b4c0 : 0xb4bec8, 90, 420")
s = s.replace("0xb08a5a, rd.sunset ? 1.6 : 1.9", "0x4a6a4a, rd.sunset ? 1.1 : 1.3")
s = s.replace("mat(rd.sunset ? 0xc8854a : 0xe0b872)", "mat(0x2a6a5a)").replace("mat(0xe8c888)", "mat(0x3a7a4a)").replace("mat(rd.sunset ? 0xd9965a : 0xeec47e)", "mat(rd.sunset ? 0x3f7a3a : 0x4a8a44)")
s = s.replace("[0xb07a4a, 0xc08a52, 0x9a6a42][i % 3]", "[0x3a6a4a, 0x4a7a52, 0x2f5a42][i % 3]")
a = s.index("  _palms(tr, sideOut) {")
b = s.index("  _minimapPath()")
new = r'''  _palms(tr, sideOut) {
    // palms along the road, soft green hills beyond, glowing blue pickups, rain
    const s = this.scene;
    const palm = makePalm(1);
    for (let i = 0; i < tr.N; i += 10) {
      for (const side of [-1, 1]) {
        if (side === sideOut && i > 2 && i < 66) continue;
        if ((i * 7 + side) % 3 === 0) continue;
        const p = pointAt(tr, i, side * (WALL + 4 + ((i * 13) % 8)));
        const pl = palm.clone();
        pl.position.set(p.x, 0, p.z);
        pl.rotation.y = i * 1.7;
        pl.scale.setScalar(0.9 + ((i * 7) % 5) * 0.12);
        s.add(pl);
      }
    }
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2;
      const d = new THREE.Mesh(new THREE.SphereGeometry(46 + (i % 4) * 14, 12, 8), mat(i % 2 ? 0x3f7a4a : 0x2f6a3a));
      d.scale.y = 0.5;
      d.position.set(this.center.x + Math.cos(a) * (360 + (i % 3) * 40), -8, this.center.z + Math.sin(a) * (360 + (i % 3) * 40));
      s.add(d);
    }
    this.pickups = [];
    for (let i = 25; i < tr.N; i += 55) {
      const p = pointAt(tr, i, ((i / 55) % 3 - 1) * 3.2);
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.8), new THREE.MeshBasicMaterial({ color: 0x4ab8ff }));
      m.position.set(p.x, 1.3, p.z);
      s.add(m);
      this.pickups.push({ m, x: p.x, z: p.z, on: true });
    }
    const n = 500;
    const rp = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) { rp[k * 3] = (Math.random() - 0.5) * 60; rp[k * 3 + 1] = Math.random() * 30; rp[k * 3 + 2] = (Math.random() - 0.5) * 60; }
    this.rainG = new THREE.BufferGeometry();
    this.rainG.setAttribute('position', new THREE.BufferAttribute(rp, 3));
    this.rain = new THREE.Points(this.rainG, new THREE.PointsMaterial({ color: 0xcfe0f4, size: 0.18, transparent: true, opacity: 0.7, depthWrite: false }));
    this.rain.frustumCulled = false;
    s.add(this.rain);
  }

'''
s = s[:a] + new + s[b:]
old = s[s.index("    if (this.heli) {"):s.index("    this.dust.update(dt);")]
newblk = r'''    if (this.rain) {
      const rp = this.rainG.attributes.position;
      for (let k = 0; k < rp.count; k++) {
        let y = rp.getY(k) - dt * 28;
        if (y < 0) y += 30;
        rp.setY(k, y);
      }
      rp.needsUpdate = true;
      this.rain.position.set(race.player.x, 0, race.player.z);
    }
    for (const pk of this.pickups || []) {
      if (!pk.on) continue;
      pk.m.rotation.y += dt * 3;
      if (Math.hypot(race.player.x - pk.x, race.player.z - pk.z) < 3.2) {
        pk.on = false;
        pk.m.visible = false;
        race.player.nitro = Math.min(1, (race.player.nitro || 0) + 0.4);
        setTimeout(() => { pk.on = true; pk.m.visible = true; }, 25000);
      }
    }
'''
s = s.replace(old, newblk)
s = s.replace("'🛻 ', t('title')", "'🏎️ ', t('title')")
open(p, 'w', encoding='utf8').write(s)
print('patched')
