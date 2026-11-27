// real_car.js — procedurally modelled cars with REAL car proportions (owner 2026-11-27: the cars must look
// like real cars, not toys). Bodies are extruded side silhouettes with true WHEEL ARCHES cut into the
// outline, a flat beltline, a glasshouse split by a painted roof (windshield / roof / rear glass), clearcoat
// paint over the scene environment, shaped light strips, mirrors, grille, exhausts, and deep-dish spoked
// wheels (dark barrel + silver ring and spokes) that roll and steer.
// Same return contract as art.js makeModelVehicle ({ root, lean, spin, setBrake, ... }) so games swap freely.
//
// makeRealCar(THREE, { kind: 'sports'|'sedan'|'hatch'|'suv'|'van'|'truck', color, taxi, police, ambulance, spoiler, simple })
// opts.simple builds a lighter traffic variant (fewer trim meshes); every wheel is ONE merged
// geometry (see mkWheel) so a street full of cars stays cheap to draw.

// cozy_kit has no node_modules of its own (games inject THREE), so no imports here: this is a
// minimal mergeGeometries for indexed position/normal/uv geometries, with material groups.
function mergeGeometries(THREE, geos, useGroups = false) {
  const hasColor = !!geos[0].attributes.color;
  let vtx = 0; let idx = 0;
  for (const g of geos) { vtx += g.attributes.position.count; idx += g.index ? g.index.count : g.attributes.position.count; }
  const pos = new Float32Array(vtx * 3); const nor = new Float32Array(vtx * 3); const uv = new Float32Array(vtx * 2);
  const col = hasColor ? new Float32Array(vtx * 3) : null;
  const index = new (vtx > 65535 ? Uint32Array : Uint16Array)(idx);
  const groups = [];
  let vo = 0; let io = 0;
  geos.forEach((g, gi) => {
    pos.set(g.attributes.position.array, vo * 3);
    nor.set(g.attributes.normal.array, vo * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, vo * 2);
    if (col && g.attributes.color) col.set(g.attributes.color.array, vo * 3);
    const cnt = g.index ? g.index.count : g.attributes.position.count;
    if (g.index) { const gi2 = g.index.array; for (let i = 0; i < gi2.length; i++) index[io + i] = gi2[i] + vo; }
    else { for (let i = 0; i < cnt; i++) index[io + i] = i + vo; }
    if (useGroups) groups.push({ start: io, count: cnt, materialIndex: gi });
    vo += g.attributes.position.count; io += cnt;
  });
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (col) out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.setIndex(new THREE.BufferAttribute(index, 1));
  for (const gr of groups) out.addGroup(gr.start, gr.count, gr.materialIndex);
  return out;
}

function extrude(THREE, pts, width, bevel = 0.05, sharp = false) {
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  if (sharp) {
    for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  } else {
    for (let i = 1; i < pts.length - 1; i++) {
      const [x, y] = pts[i];
      const [nx, ny] = pts[i + 1];
      s.quadraticCurveTo(x, y, (x + nx) / 2, (y + ny) / 2);
    }
    const [lx, ly] = pts[pts.length - 1];
    s.lineTo(lx, ly);
  }
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: Math.max(0.1, width - bevel * 2), bevelEnabled: true,
    bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 2, curveSegments: 10,
  });
  geo.translate(0, 0, -width / 2 + bevel);
  geo.rotateY(-Math.PI / 2); // shape +x (nose) -> world +z; extrusion -> width along x
  return geo;
}

// body outline: `top` runs rear-bottom -> up the tail -> along the beltline/hood -> down the nose to
// front-bottom; then the underside is generated with semicircular ARCHES over the given wheel centres.
function bodyOutline(top, archCenters, archR, floorY = 0.17) {
  const pts = [...top];
  const centers = [...archCenters].sort((a, b) => b - a);
  let cursor = pts[pts.length - 1][0];
  for (const cx of centers) {
    if (cx + archR < cursor - 0.05) pts.push([cx + archR, floorY]);
    for (let i = 1; i < 8; i++) {
      const a = (i / 8) * Math.PI;
      pts.push([cx + archR * Math.cos(a), floorY + archR * Math.sin(a) * 0.92]);
    }
    cursor = cx - archR;
  }
  return pts;
}

const KINDS = {
  sports: {
    top: [[-2.28, 0.30], [-2.30, 0.58], [-2.12, 0.68], [-1.20, 0.74], [0.55, 0.78], [1.60, 0.64], [2.18, 0.52], [2.32, 0.40], [2.30, 0.28]],
    glass: [[-1.66, 0.70], [-1.30, 0.90], [-0.95, 0.96], [-0.10, 0.97], [0.30, 0.94], [0.84, 0.72], [0.28, 0.68], [-1.12, 0.68]],
    roof: [[-1.22, 0.915], [-0.95, 1.005], [-0.10, 1.015], [0.28, 0.985], [0.42, 0.915], [0.05, 0.88], [-0.85, 0.88]],
    L: 4.6, W: 1.88, glassW: 1.46, wheelR: 0.34, axle: 1.50, spoiler: true,
  },
  sedan: {
    top: [[-2.18, 0.30], [-2.20, 0.64], [-2.02, 0.74], [-1.15, 0.78], [0.55, 0.82], [1.55, 0.70], [2.08, 0.56], [2.20, 0.42], [2.16, 0.28]],
    glass: [[-1.34, 0.74], [-1.08, 1.02], [-0.72, 1.10], [0.18, 1.10], [0.52, 1.04], [0.86, 0.76], [0.28, 0.72], [-0.92, 0.72]],
    roof: [[-1.00, 1.01], [-0.72, 1.135], [0.18, 1.135], [0.50, 1.07], [0.58, 0.99], [0.10, 0.95], [-0.70, 0.95]],
    L: 4.4, W: 1.82, glassW: 1.48, wheelR: 0.33, axle: 1.40,
  },
  hatch: {
    top: [[-2.02, 0.30], [-2.06, 0.74], [-1.92, 0.82], [-1.00, 0.84], [0.50, 0.87], [1.48, 0.74], [1.98, 0.57], [2.07, 0.41], [2.02, 0.28]],
    glass: [[-1.76, 0.78], [-1.60, 1.06], [-0.75, 1.14], [0.18, 1.11], [0.86, 0.78], [0.25, 0.74], [-1.20, 0.74]],
    roof: [[-1.48, 1.02], [-0.75, 1.155], [0.16, 1.125], [0.38, 1.00], [0.05, 0.94], [-0.85, 0.94]],
    L: 4.1, W: 1.80, glassW: 1.46, wheelR: 0.32, axle: 1.30,
  },
  suv: {
    top: [[-2.22, 0.34], [-2.26, 0.88], [-2.08, 0.95], [-1.00, 0.97], [0.60, 0.99], [1.58, 0.88], [2.12, 0.71], [2.26, 0.53], [2.21, 0.32]],
    glass: [[-1.90, 0.92], [-1.74, 1.30], [-0.85, 1.39], [0.28, 1.37], [0.96, 0.94], [0.30, 0.90], [-1.25, 0.90]],
    roof: [[-1.62, 1.26], [-0.85, 1.405], [0.26, 1.385], [0.48, 1.24], [0.10, 1.18], [-0.95, 1.18]],
    L: 4.5, W: 1.92, glassW: 1.68, wheelR: 0.385, axle: 1.44,
  },
  van: {
    top: [[-2.32, 0.32], [-2.36, 1.32], [-2.22, 1.52], [-1.20, 1.56], [0.90, 1.54], [1.72, 1.30], [2.16, 0.80], [2.31, 0.54], [2.27, 0.30]],
    glass: [[0.42, 1.02], [0.60, 1.32], [0.95, 1.47], [1.48, 1.27], [1.82, 0.84], [1.55, 0.78], [0.70, 0.84]],
    roof: null,
    L: 4.7, W: 1.94, glassW: 1.64, wheelR: 0.35, axle: 1.52,
  },
};

export function makeRealCar(THREE, opts = {}) {
  const kind = KINDS[opts.kind] ? opts.kind : 'sedan';
  const P = KINDS[kind];
  const cartoon = !!opts.cartoon; // rounder, chubbier, friendlier — for kids (owner 2026-11-27)
  const wheelR0 = cartoon ? (P ? P.wheelR : 0.42) * 1.14 : (P ? P.wheelR : 0.42);
  const color = opts.color ?? 0xd8342a;
  const root = new THREE.Group();
  const lean = new THREE.Group();
  root.add(lean);

  const paint = new THREE.MeshPhysicalMaterial({ color, metalness: 0.12, roughness: 0.34, clearcoat: 1.0, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
  const darkPaint = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(color).multiplyScalar(0.7), metalness: 0.12, roughness: 0.42, clearcoat: 0.7, envMapIntensity: 0.9 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x11161d, metalness: 0.85, roughness: 0.08, envMapIntensity: 1.5 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xd8dde2, metalness: 1.0, roughness: 0.25, envMapIntensity: 1.2 });
  const blackTrim = new THREE.MeshStandardMaterial({ color: 0x14161a, metalness: 0.2, roughness: 0.7 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff2cf, emissive: 0xffdf9e, emissiveIntensity: 1.5, roughness: 0.3 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x881111, emissive: 0xff1a1a, emissiveIntensity: 0.9, roughness: 0.3 });

  const add = (geo, mat, x = 0, y = 0, z = 0) => { const ms = new THREE.Mesh(geo, mat); ms.position.set(x, y, z); lean.add(ms); return ms; };
  const pulseMats = []; // light materials the game pulses (police / ambulance / taxi sign)
  let wheelR, axle, trackW;

  if (opts.kind === 'truck') {
    const cabTop = [[-0.98, 0.34], [-1.00, 1.04], [-0.88, 1.22], [0.15, 1.25], [0.72, 1.08], [1.04, 0.66], [1.12, 0.44], [1.05, 0.32]];
    add(extrude(THREE, bodyOutline(cabTop, [0.1], 0.48), 1.92, 0.06), paint, 0, 0, 1.62);
    const win = [[0.24, 0.84], [0.34, 1.10], [0.60, 1.17], [0.86, 0.97], [0.97, 0.64], [0.78, 0.60], [0.38, 0.64]];
    add(extrude(THREE, win, 1.96, 0.02), glassMat, 0, 0, 1.62);
    const cargoMat = new THREE.MeshPhysicalMaterial({ color: opts.color ?? 0xe8e8f0, metalness: 0.05, roughness: 0.5, clearcoat: 0.4, envMapIntensity: 0.8 });
    add(new THREE.BoxGeometry(2.16, 2.5, 3.6), cargoMat, 0, 1.62, -1.55);
    add(new THREE.BoxGeometry(2.2, 0.16, 3.7), blackTrim, 0, 0.34, -1.55);
    add(new THREE.BoxGeometry(2.0, 2.3, 0.06), darkPaint, 0, 1.58, -3.38);
    wheelR = cartoon ? 0.48 : 0.42; axle = 1.72; trackW = 1.96;
  } else {
    add(extrude(THREE, bodyOutline(P.top, [P.axle, -P.axle], wheelR0 + 0.055), P.W, cartoon ? 0.085 : 0.05), paint);
    add(extrude(THREE, P.glass, P.glassW, cartoon ? 0.10 : 0.055, !cartoon), glassMat);
    if (P.roof) add(extrude(THREE, P.roof, P.glassW + 0.10, cartoon ? 0.05 : 0.03, !cartoon), paint);
    // arch lips + door handles + front intake: the small cues that make a body read as a real car
    // (skipped on the simple traffic variant — invisible at traffic distance, pure draw calls)
    if (!opts.simple) {
      for (const sx of [-1, 1]) {
        for (const wz of [P.axle, -P.axle]) {
          const lip = new THREE.Mesh(new THREE.TorusGeometry(wheelR0 + 0.045, 0.022, 6, 20, Math.PI), blackTrim);
          lip.position.set(sx * (P.W / 2 + 0.005), 0.17, wz);
          lip.rotation.y = Math.PI / 2;
          lean.add(lip);
        }
        add(new THREE.BoxGeometry(0.02, 0.035, 0.17), blackTrim, sx * (P.W / 2 + 0.045), 0.72, 0.28);
        add(new THREE.BoxGeometry(0.02, 0.035, 0.17), blackTrim, sx * (P.W / 2 + 0.045), 0.72, -0.52);
      }
      add(new THREE.BoxGeometry(P.W * 0.54, 0.14, 0.06), blackTrim, 0, 0.53, P.L / 2 + 0.01);
    }
    add(new THREE.BoxGeometry(P.W * 0.62, 0.11, 0.05), blackTrim, 0, 0.30, P.L / 2 + 0.045);
    add(new THREE.BoxGeometry(P.W * 0.94, 0.15, 0.13), darkPaint, 0, 0.31, P.L / 2 - 0.03);
    add(new THREE.BoxGeometry(P.W * 0.94, 0.15, 0.13), darkPaint, 0, 0.31, -P.L / 2 + 0.03);
    const hy = kind === 'suv' || kind === 'van' ? 0.70 : 0.61;
    if (cartoon) { // big round friendly eyes for headlights, round tail dots
      for (const sx of [-1, 1]) {
        const eye = add(new THREE.CylinderGeometry(0.105, 0.105, 0.05, 16), headMat, sx * P.W * 0.30, hy, P.L / 2 + 0.01);
        eye.rotation.x = Math.PI / 2;
        const dot = add(new THREE.CylinderGeometry(0.085, 0.085, 0.05, 14), tailMat, sx * P.W * 0.30, hy + 0.05, -P.L / 2 - 0.01);
        dot.rotation.x = Math.PI / 2;
      }
    } else {
      add(new THREE.BoxGeometry(0.44, 0.09, 0.05), headMat, -P.W * 0.31, hy, P.L / 2);
      add(new THREE.BoxGeometry(0.44, 0.09, 0.05), headMat, P.W * 0.31, hy, P.L / 2);
      add(new THREE.BoxGeometry(P.W * 0.80, 0.08, 0.05), tailMat, 0, hy + 0.07, -P.L / 2);
    }
    if (!opts.simple) add(new THREE.BoxGeometry(0.44, 0.30, 0.03), new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.5 }), 0, 0.47, -P.L / 2 - 0.03);
    for (const sx of [-1, 1]) {
      add(new THREE.BoxGeometry(0.05, 0.03, 0.15), blackTrim, sx * (P.glassW / 2 + 0.04), 0.88, 0.60);
      add(new THREE.BoxGeometry(0.13, 0.10, 0.05), paint, sx * (P.glassW / 2 + 0.11), 0.92, 0.60);
      if (!opts.simple) {
        const ex = add(new THREE.CylinderGeometry(0.045, 0.045, 0.15, 10), chrome, sx * P.W * 0.27, 0.21, -P.L / 2 - 0.05);
        ex.rotation.x = Math.PI / 2;
      }
    }
    if (P.spoiler || opts.spoiler) {
      add(new THREE.BoxGeometry(0.06, 0.15, 0.06), blackTrim, -0.52, 0.80, -P.L / 2 + 0.30);
      add(new THREE.BoxGeometry(0.06, 0.15, 0.06), blackTrim, 0.52, 0.80, -P.L / 2 + 0.30);
      add(new THREE.BoxGeometry(1.48, 0.05, 0.34), blackTrim, 0, 0.91, -P.L / 2 + 0.30);
    }
    if (opts.taxi) {
      const signMat = new THREE.MeshStandardMaterial({ color: 0xffe9a8, emissive: 0xffc84a, emissiveIntensity: 0.7 });
      add(new THREE.BoxGeometry(0.52, 0.13, 0.26), signMat, 0, 1.24, -0.08);
      pulseMats.push(signMat);
    }
    if (opts.police) {
      const blueMat = new THREE.MeshStandardMaterial({ color: 0x2244ff, emissive: 0x2244ff, emissiveIntensity: 1.6 });
      const redMat = new THREE.MeshStandardMaterial({ color: 0xff2222, emissive: 0xff2222, emissiveIntensity: 1.6 });
      add(new THREE.BoxGeometry(0.95, 0.09, 0.30), blackTrim, 0, 1.22, -0.08);
      add(new THREE.BoxGeometry(0.42, 0.10, 0.31), blueMat, -0.25, 1.23, -0.08);
      add(new THREE.BoxGeometry(0.42, 0.10, 0.31), redMat, 0.25, 1.23, -0.08);
      pulseMats.push(blueMat, redMat);
    }
    if (opts.ambulance) { // a friendly white van: red crosses on the sides + a soft pulsing light bar
      const redMat2 = new THREE.MeshStandardMaterial({ color: 0xff4040, emissive: 0xff4040, emissiveIntensity: 1.2 });
      const whiteMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.9 });
      const crossMat = new THREE.MeshStandardMaterial({ color: 0xe83a3a, roughness: 0.5 });
      add(new THREE.BoxGeometry(0.95, 0.09, 0.30), blackTrim, 0, 1.66, -0.08);
      add(new THREE.BoxGeometry(0.42, 0.10, 0.31), redMat2, -0.25, 1.67, -0.08);
      add(new THREE.BoxGeometry(0.42, 0.10, 0.31), whiteMat2, 0.25, 1.67, -0.08);
      for (const sx of [-1, 1]) {
        add(new THREE.BoxGeometry(0.03, 0.36, 0.12), crossMat, sx * (P.W / 2 + 0.05), 0.78, -0.55);
        add(new THREE.BoxGeometry(0.03, 0.12, 0.36), crossMat, sx * (P.W / 2 + 0.05), 0.78, -0.55);
      }
      pulseMats.push(redMat2, whiteMat2);
    }
    wheelR = wheelR0; axle = P.axle; trackW = P.W;
  }

  // ---- wheels: tyre, dark barrel, silver lip ring + 5 spokes on the OUTER face
  const wheelW = 0.25;
  const track = trackW / 2 - 0.03;
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x17181a, roughness: 0.92, metalness: 0 });
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0e, roughness: 0.6, metalness: 0.3 });
  const rimMat = cartoon
    ? new THREE.MeshStandardMaterial({ color: 0xf5edd8, metalness: 0.25, roughness: 0.35, envMapIntensity: 1.0 })
    : new THREE.MeshStandardMaterial({ color: 0xd2d7dd, metalness: 1.0, roughness: 0.24, envMapIntensity: 1.3 });
  const wheels = [];
  const mkWheel = (front, side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * track, wheelR, front ? axle : (opts.kind === 'truck' ? -2.05 : -axle));
    const spin = new THREE.Group();
    spin.rotation.order = 'YXZ';
    pivot.add(spin);
    // ONE merged vertex-coloured geometry per wheel (was ~21 separate meshes): tyre + 6 tread
    // blocks + dark barrel + rim ring + 5 spokes (one sunny accent) + hub = a single draw call.
    // The tread blocks and accent spoke keep the spin clearly visible at speed.
    const rimHex = cartoon ? 0xf5edd8 : 0xd2d7dd;
    const paint = (geo, hex) => {
      const n = geo.attributes.position.count;
      const arr = new Float32Array(n * 3);
      const c = new THREE.Color(hex);
      for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      return geo;
    };
    const parts = [];
    const tire = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 26); tire.rotateZ(Math.PI / 2); parts.push(paint(tire, 0x17181a));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const tb = new THREE.BoxGeometry(wheelW * 0.97, 0.05, wheelR * 0.36);
      tb.rotateX(-a); tb.translate(0, Math.sin(a) * wheelR * 0.985, Math.cos(a) * wheelR * 0.985);
      parts.push(paint(tb, 0x2a2c30));
    }
    const barrel = new THREE.CylinderGeometry(wheelR * 0.68, wheelR * 0.68, wheelW * 0.92, 20); barrel.rotateZ(Math.PI / 2); parts.push(paint(barrel, 0x0b0c0e));
    const ox = side * wheelW * 0.40;
    const ring = new THREE.TorusGeometry(wheelR * 0.60, wheelR * 0.085, 8, 24); ring.rotateY(Math.PI / 2); ring.translate(ox, 0, 0); parts.push(paint(ring, rimHex));
    for (let i = 0; i < 5; i++) {
      const sp = new THREE.BoxGeometry(wheelW * 0.30, wheelR * 0.56, cartoon ? 0.11 : 0.07);
      sp.rotateX((i / 5) * Math.PI); sp.translate(ox, 0, 0);
      parts.push(paint(sp, i === 0 ? 0xffcf3f : rimHex));
    }
    const hub = new THREE.CylinderGeometry(wheelR * 0.17, wheelR * 0.17, wheelW * 0.34, 12); hub.rotateZ(Math.PI / 2); hub.translate(ox, 0, 0); parts.push(paint(hub, rimHex));
    spin.add(new THREE.Mesh(mergeGeometries(THREE, parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.35, envMapIntensity: 1.0 })));
    lean.add(pivot);
    const w = { pivot, spin, front };
    wheels.push(w);
    return w;
  };
  if (opts.kind === 'truck') {
    // cab axle sits under the cab (z +1.72), cargo axle at the back (z -2.05)
    const mkT = (z, side) => { const w = mkWheel(z > 0, side); w.pivot.position.z = z; return w; };
    mkT(1.72, -1); mkT(1.72, 1); mkT(-2.05, -1); mkT(-2.05, 1);
  } else {
    mkWheel(true, -1); mkWheel(true, 1); mkWheel(false, -1); mkWheel(false, 1);
  }

  if (opts.simple) {
    // traffic variant: merge every static body mesh into ONE vertex-coloured mesh (the pulsing
    // service lights keep their own materials and stay separate). ~20 meshes become 1 draw call.
    const keep = new Set(pulseMats);
    const parts = [];
    for (const ch of [...lean.children]) {
      if (!ch.isMesh || keep.has(ch.material)) continue;
      ch.updateMatrix();
      const g = ch.geometry.clone().applyMatrix4(ch.matrix);
      const col = new THREE.Color(ch.material && ch.material.color ? ch.material.color.getHex() : 0xffffff);
      const n = g.attributes.position.count;
      const arr = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      parts.push(g);
      lean.remove(ch);
    }
    if (parts.length) lean.add(new THREE.Mesh(mergeGeometries(THREE, parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.38, metalness: 0.15, envMapIntensity: 0.9 })));
  }

  const shadowLen = opts.kind === 'truck' ? 6.4 : P.L;
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(shadowLen * 0.55, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.04; shadow.scale.set(0.75, 1.15, 1);
  root.add(shadow);

  return {
    root, lean, wheels, pulseMats, model: true,
    rider: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
    front: { rotation: { x: 0, y: 0, z: 0 }, position: { x: 0, y: 0, z: 0 } },
    back: { rotation: { x: 0 } },
    flames: { visible: false, scale: { setScalar() {}, set() {} } },
    spin(v, dt, steer = 0) {
      if (dt <= 0) return;
      const d = (v * dt) / wheelR;
      for (const w of wheels) { w.spin.rotation.x += d; if (w.front) w.pivot.rotation.y = steer; }
    },
    setBrake(on) { tailMat.emissiveIntensity = on ? 2.4 : 0.9; },
  };
}
