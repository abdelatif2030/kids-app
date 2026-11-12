// A rigged character assembled from the owner's PARTS sheet (head, body, arms, legs, eyes, eyebrows, mouths): the parts are
// separate pictures (assets/games/art/rig/<name>.webp) hinged at the neck, shoulders and hips, so the character really
// moves: it blinks, smiles and laughs, raises and waves its arms, points, claps, and walks with swinging legs.
// Same small API as the flat actors: act(name), look(x), update(dt, time), face(name).
// Positions are in pixels of the parts sheet (1x); the whole rig is scaled to world units at the end.
import * as THREE from 'three';
import DIMS from './rig_dims.json';

let BASE = '../art/';
export const setRigBase = (b) => { BASE = b; };
const cache = new Map();
function tex(name) {
  if (cache.has(name)) return cache.get(name);
  const t = new THREE.TextureLoader().load(`${BASE}rig/${name}.webp`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  cache.set(name, t);
  return t;
}
export const hasRig = (kind) => !!SPECS[kind] && Object.values(SPECS[kind].parts).every((n) => !!DIMS[n]);

/** One picture hinged at [anchor] (px from its top-left corner). Returns a pivot group; the picture hangs from the pivot. */
function piece(name, anchor, z = 0) {
  const [w2, h2] = DIMS[name];
  const w = w2 / 2, h = h2 / 2;
  const geo = new THREE.PlaneGeometry(w, h);
  geo.translate(w / 2 - anchor[0], -(h / 2 - anchor[1]), 0);
  const mat = new THREE.MeshBasicMaterial({ map: tex(name), transparent: true, alphaTest: 0.08, toneMapped: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.z = z;
  const g = new THREE.Group();
  g.add(mesh);
  g.userData.mesh = mesh;
  g.userData.name = name;
  return g;
}

/** A swappable picture: one pivot that shows one of several pictures (eyes open or shut, mouth shapes, arm poses). */
function slot(entries, z = 0) {
  const g = new THREE.Group();
  const kids = {};
  for (const [key, name, anchor] of entries) { kids[key] = piece(name, anchor, z); kids[key].visible = false; g.add(kids[key]); }
  g.userData.kids = kids;
  g.userData.show = (key) => { for (const [k, v] of Object.entries(kids)) v.visible = k === key; };
  return g;
}

// ---- the boy: positions in sheet pixels, y up, origin at the feet ---------------------------------------------------
const SPECS = {
  boy: {
    height: 3.6,
    total: 440,
    parts: {
      head: 'boy_head', body: 'boy_body', legL: 'boy_leg_l', legR: 'boy_leg_r',
      armDown: 'boy_arm_down', armWave: 'boy_arm_wave', armBend: 'boy_arm_bend', armUp: 'boy_arm_up', armPoint: 'boy_arm_point2',
      eyeOpen: 'boy_eye_open', eyeShut: 'boy_eye_closed',
      mSmile: 'boy_mouth_smile', mOpen: 'boy_mouth_open', mLaugh: 'boy_mouth_laugh', mO: 'boy_mouth_o', mOh: 'boy_mouth_oh', mFlat: 'boy_mouth_flat',
    },
    hipL: [-20, 172], hipR: [24, 172], legLAnchor: [32, 6], legRAnchor: [28, 6],
    body: { at: [0, 166], anchor: [59, 128] },
    head: { at: [0, 290], anchor: [68, 146], eyeL: [-17, 64], eyeR: [23, 64], mouth: [4, 26], eyeK: 0.62, mouthK: 0.65 },
    shoulderL: [-46, 264], shoulderR: [46, 264],
    arm: { down: [12, 10], wave: [14, 26], bend: [12, 10], up: [12, 62], point: [10, 16] },
  },
};

SPECS.girl = {
  height: 3.5,
  total: 420,
  parts: {
    head: 'girl_head', body: 'girl_body', legL: 'girl_leg_l', legR: 'girl_leg_r',
    armDown: 'girl_arm_down', armWave: 'girl_arm_wave', armBend: 'girl_arm_bend', armUp: 'girl_arm_wave', armPoint: 'girl_arm_point',
    eyeOpen: 'girl_eye_open', eyeShut: 'girl_eye_closed',
    mSmile: 'girl_mouth_smile', mOpen: 'girl_mouth_open', mLaugh: 'girl_mouth_laugh', mO: 'girl_mouth_o', mOh: 'girl_mouth_o', mFlat: 'girl_mouth_flat',
  },
  hipL: [-16, 150], hipR: [20, 150], legLAnchor: [30, 6], legRAnchor: [28, 6],
  body: { at: [0, 95], anchor: [65, 175] },
  head: { at: [0, 267], anchor: [74, 155], eyeL: [24, 98], eyeR: [72, 98], mouth: [47, 36], eyeK: 0.55, mouthK: 0.6, eyeAnchor: [30, 26], mouthAnchor: [33, 15] },
  shoulderL: [-51, 234], shoulderR: [51, 234],
  arm: { down: [12, 12], wave: [14, 28], bend: [12, 12], up: [14, 28], point: [10, 18] },
};

export function makeRig(kind) {
  const S = SPECS[kind];
  const root = new THREE.Group();
  const U = S.height / S.total;
  const body = new THREE.Group();
  body.scale.setScalar(U);
  root.add(body);
  const P = S.parts;
  // legs behind the body, hinged at the hips
  const legL = piece(P.legL, S.legLAnchor, -0.2); legL.position.set(S.hipL[0], S.hipL[1], 0);
  const legR = piece(P.legR, S.legRAnchor, -0.2); legR.position.set(S.hipR[0], S.hipR[1], 0);
  body.add(legL, legR);
  // arms behind the torso (the sleeve starts at the shoulder), the torso, then the head with its face on top
  const armEntries = [['down', P.armDown, S.arm.down], ['wave', P.armWave, S.arm.wave], ['bend', P.armBend, S.arm.bend], ['up', P.armUp, S.arm.up], ['point', P.armPoint, S.arm.point]];
  const armL = slot(armEntries, 0.1); armL.position.set(S.shoulderL[0], S.shoulderL[1], 0); armL.scale.x = -1;
  const armR = slot(armEntries, 0.1); armR.position.set(S.shoulderR[0], S.shoulderR[1], 0);
  armL.userData.show('down'); armR.userData.show('down');
  const torso = piece(P.body, S.body.anchor, 0); torso.position.set(S.body.at[0], S.body.at[1], 0);
  body.add(torso, armL, armR);
  const head = new THREE.Group();
  head.position.set(S.head.at[0], S.head.at[1], 0.3);
  head.add(piece(P.head, S.head.anchor, 0));
  const EA = S.head.eyeAnchor || [25, 22];
  const eyeL = slot([['open', P.eyeOpen, EA], ['shut', P.eyeShut, [EA[0] + 3, EA[1] - 7]]], 0.02); eyeL.position.set(S.head.eyeL[0], S.head.eyeL[1], 0);
  const eyeR = slot([['open', P.eyeOpen, EA], ['shut', P.eyeShut, [EA[0] + 3, EA[1] - 7]]], 0.02); eyeR.position.set(S.head.eyeR[0], S.head.eyeR[1], 0); eyeR.scale.x = -1; { const k = S.head.eyeK || 1; eyeL.scale.set(k, k, 1); eyeR.scale.set(-k, k, 1); }
  eyeL.userData.show('open'); eyeR.userData.show('open');
  const MA = S.head.mouthAnchor || [31, 12];
  const mouth = slot([['smile', P.mSmile, MA], ['open', P.mOpen, MA], ['laugh', P.mLaugh, MA], ['o', P.mO, [MA[0] - 15, MA[1] + 6]], ['oh', P.mOh, [MA[0] - 8, MA[1] + 10]], ['flat', P.mFlat, [MA[0] - 8, MA[1]]]], 0.03);
  mouth.position.set(S.head.mouth[0], S.head.mouth[1], 0);
  mouth.userData.show('smile'); { const k = S.head.mouthK || 1; mouth.scale.set(k, k, 1); }
  head.add(eyeL, eyeR, mouth);
  body.add(head);

  // a soft shadow under the feet
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.set(0, 0.03, -0.05); shadow.scale.set(1, 0.45, 1);
  root.add(shadow);

  const g = new THREE.Group();
  g.add(root);
  const St = { act: null, t: 0, lookX: 0, blink: 2 + Math.random() * 2, blinkT: 0, nextMicro: 3 + Math.random() * 3, micro: null, microT: 0, mood: 'smile' };
  g.userData.state = St;
  g.userData.rig = true;
  g.act = (name) => { St.act = name; St.t = 0; };
  g.look = (x) => { St.lookX = x; };
  g.face = () => {};
  g.setLook = () => {};
  const lerp = (a, b, k) => a + (b - a) * k;
  g.update = (dt, time) => {
    St.t += dt;
    const k = St.t;
    // ---- what the body does ----
    let by = Math.sin(time * 1.8) * 1.2, headRot = Math.sin(time * 0.9) * 0.025, headX = 0, torsoSy = 1 + Math.sin(time * 1.8) * 0.006;
    let aL = 'down', aR = 'down', rL = 0.05 + Math.sin(time * 1.6) * 0.02, rR = -0.05 - Math.sin(time * 1.6) * 0.02;
    let shut = false, mood = 'smile', swing = 0, rootRot = 0, jump = 0, look = 0;
    if (!St.act) {
      St.nextMicro -= dt;
      if (St.nextMicro <= 0) {
        St.nextMicro = 2.6 + Math.random() * 4.5;
        const pick = ['look', 'look', 'hop', 'wave', 'excited'][Math.floor(Math.random() * 5)];
        if (pick === 'wave') g.act('wave'); else { St.micro = pick; St.microT = 0; St.dir = Math.random() < 0.5 ? -1 : 1; }
      }
    }
    if (St.micro && !St.act) {
      St.microT += dt;
      const m = St.microT;
      if (St.micro === 'look') { if (m < 1.6) { look = Math.sin((m / 1.6) * Math.PI) * 0.18 * St.dir; headRot += look * 0.5; } else St.micro = null; }
      else if (St.micro === 'hop') { if (m < 0.6) jump = Math.sin((m / 0.6) * Math.PI) * 14; else St.micro = null; }
      else if (St.micro === 'excited') { if (m < 1.1) { jump = Math.abs(Math.sin(m * 9)) * 8; mood = 'open'; } else St.micro = null; }
    }
    switch (St.act) {
      case 'wave': if (k < 2.4) { aR = 'wave'; rR = -0.2 + Math.sin(k * 11) * 0.22; mood = 'open'; headRot = 0.05; } break;
      case 'talk': if (k < 2.4) { aR = 'wave'; rR = -0.1 + Math.sin(k * 6) * 0.12; mood = Math.sin(k * 14) > 0 ? 'open' : 'smile'; } break;
      case 'point': if (k < 1.8) { aR = 'point'; rR = -0.25; mood = 'smile'; headRot = -0.05; } break;
      case 'clap': if (k < 1.8) { aL = aR = 'bend'; const c = Math.abs(Math.sin(k * 11)); rL = 0.6 - c * 0.5; rR = -0.6 + c * 0.5; mood = 'laugh'; jump = Math.abs(Math.sin(k * 5.5)) * 6; } break;
      // the happy laugh of the owner's reference video: eyes wide open, open smile, fists up at the chest, quick small bounces
      case 'giggle': if (k < 2.2) { aL = aR = 'bend'; rL = 0.9 + Math.sin(k * 12) * 0.12; rR = -0.9 - Math.sin(k * 12) * 0.12; mood = 'laugh'; jump = Math.abs(Math.sin(k * 6)) * 8; headRot = Math.sin(k * 6) * 0.05; shut = k > 0.9 && k < 1.5; } break;
      case 'cheer': case 'jump': if (k < 1.3) { aL = aR = 'up'; rL = 0.15; rR = -0.15; mood = 'laugh'; jump = Math.abs(Math.sin(k * 7)) * 34; } break;
      case 'celebrate': if (k < 2.6) { aL = aR = 'up'; rL = 0.1 + Math.sin(k * 14) * 0.18; rR = -0.1 - Math.sin(k * 14) * 0.18; mood = 'laugh'; jump = Math.abs(Math.sin(k * 5)) * 40; headRot = Math.sin(k * 9) * 0.07; } break;
      case 'think': if (k < 2.4) { aR = 'bend'; rR = -0.9; mood = 'o'; headRot = 0.12 + Math.sin(k * 3) * 0.04; } break;
      case 'walk': swing = Math.sin(k * 7.4); by = Math.abs(swing) * 5; aL = aR = 'down'; rL = 0.15 * swing; rR = -0.15 * swing; mood = 'smile'; break;
      case 'run': if (k < 1.4) { swing = Math.sin(k * 15); by = Math.abs(swing) * 9; rootRot = 0.08; } break;
      case 'sad': if (k < 2.2) { mood = 'flat'; headRot = 0.1; by = -3; } break;
      default:
    }
    if (St.act && St.act !== 'walk' && k > 2.8) St.act = null;
    // ---- apply ----
    root.position.y = (jump + by * 0) * U;
    body.position.y = by * U * 0.5;
    root.rotation.z = rootRot;
    torso.scale.y = torsoSy;
    legL.rotation.z = swing * 0.42;
    legR.rotation.z = -swing * 0.42;
    armL.userData.show(aL); armR.userData.show(aR);
    armL.rotation.z = -rL * -1; armR.rotation.z = rR;
    head.rotation.z = lerp(head.rotation.z, headRot, Math.min(1, dt * 10));
    head.position.x = headX;
    mouth.userData.show(mood);
    // blink now and then
    St.blink -= dt;
    let closed = shut;
    if (St.blink <= 0 && St.blinkT === 0) { St.blinkT = 0.0001; }
    if (St.blinkT > 0) { St.blinkT += dt; closed = closed || St.blinkT < 0.14; if (St.blinkT >= 0.14) { St.blinkT = 0; St.blink = 2 + Math.random() * 3.5; } }
    eyeL.userData.show(closed ? 'shut' : 'open'); eyeR.userData.show(closed ? 'shut' : 'open');
    // turn a little toward what the child looks at
    const ty = Math.max(-0.3, Math.min(0.3, (St.lookX - g.position.x) * 0.035));
    root.rotation.y = lerp(root.rotation.y, ty, Math.min(1, dt * 5));
    shadow.scale.set(1 - jump * 0.004, 0.45 - jump * 0.002, 1);
  };
  return g;
}
