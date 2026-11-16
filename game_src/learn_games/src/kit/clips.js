// Plays the owner's character animations (transparent sprite sheets made by tools/clips/make_clip.mjs) in the 3D scene.
// A clip replaces the code-made rig while it plays; with no clip file for an act the rig keeps working, so nothing breaks
// when a clip is missing. assets/games/clips/clips.json lists what exists.
import * as THREE from 'three';

let BASE = '../clips/';
let MANIFEST = null;
let loading = null;
const textures = new Map();

/** Seconds between two footsteps of the hero's walk clip (half a stride), or [fallback] when there is no walk clip. */
export function stepSeconds(kind, fallback = 0.33) {
  const e = MANIFEST && MANIFEST[`${kind}_walk`];
  return e && e.loopSec ? e.loopSec / 2 : fallback;
}

export function setClipsBase(b) { BASE = b; }
/** Loads the list of clips once; resolves to {} when there are none. */
export function loadClips() {
  if (!loading) {
    loading = fetch(`${BASE}clips.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({})).then((j) => { MANIFEST = j || {}; return MANIFEST; });
  }
  return loading;
}

// which clip each act uses (an act with no clip keeps the rig)
const CLIP_FOR = { celebrate: 'jump', cheer: 'jump', jump: 'jump', giggle: 'laugh', clap: 'clap', wave: 'wave', walk: 'walk', run: 'walk' };

function sheet(entry) {
  if (textures.has(entry.file)) return textures.get(entry.file);
  const t = new THREE.TextureLoader().load(`${BASE}${entry.file}`);
  t.colorSpace = THREE.SRGBColorSpace;
  t.generateMipmaps = false; // no mip levels: neighbouring frames of the sheet must not bleed into each other
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.repeat.set(1 / entry.cols, 1 / entry.rows);
  textures.set(entry.file, t);
  return t;
}

/** Wraps an actor (the rig) so its acts play the matching clip when one exists. [height] = world height of the character. */
export function withClips(kind, actor, height = 3.6) {
  const rigRoot = actor.children[0];
  const holder = new THREE.Group();
  actor.add(holder);
  let cur = null; // { entry, mesh, t, loop }
  const meshes = new Map();
  const meshFor = (entry) => {
    if (meshes.has(entry.file)) return meshes.get(entry.file);
    // world size per picture pixel: the usual (median) height of the character in the clip = the hero's height;
    // the ground line (feet) of the clip is placed on y = 0
    const sc = height / (entry.px || entry.h * 0.9);
    const cw = entry.w * sc, ch = entry.h * sc, ground = entry.ground != null ? entry.ground : entry.h;
    const geo = new THREE.PlaneGeometry(cw, ch);
    geo.translate(0, ch / 2 - (entry.h - ground) * sc, 0);
    const mat = new THREE.MeshBasicMaterial({ map: sheet(entry), transparent: true, alphaTest: 0.06, toneMapped: false, side: THREE.DoubleSide });
    mat.map.repeat.set(1 / entry.cols, 1 / entry.rows);
    const m = new THREE.Mesh(geo, mat);
    m.visible = false;
    m.position.z = 0.05;
    holder.add(m);
    meshes.set(entry.file, m);
    return m;
  };
  // when no act clip is playing the hero stands in the clip's own pose (`<kind>_idle`) so it always looks the same;
  // without an idle clip (or until its picture has loaded) the original picture is shown
  const startIdle = () => {
    const e = MANIFEST && MANIFEST[`${kind}_idle`];
    if (e && meshFor(e).material.map.image) { play(e, true); return true; }
    return false;
  };
  const stop = () => { if (cur) { cur.mesh.visible = false; cur = null; } rigRoot.visible = true; startIdle(); };
  const play = (entry, loop) => {
    if (cur) cur.mesh.visible = false;
    cur = { entry, mesh: meshFor(entry), t: 0, loop };
    cur.mesh.scale.set(1, 1, 1);
    showFrame(cur, 0); // first frame is in place before the picture becomes visible (no flash of a wrong frame)
    cur.mesh.visible = true;
    rigRoot.visible = false;
  };
  const showFrame = (c, f) => {
    const e = c.entry;
    c.mesh.material.map.offset.set((f % e.cols) / e.cols, 1 - (Math.floor(f / e.cols) + 1) / e.rows);
  };
  const baseAct = actor.act;
  const baseUpdate = actor.update;
  actor.act = (name) => {
    baseAct(name);
    const entry = MANIFEST && MANIFEST[`${kind}_${CLIP_FOR[name]}`];
    // only swap to a clip once its picture is really loaded, otherwise the hero would vanish while it downloads
    if (entry && meshFor(entry).material.map.image) play(entry, !!entry.loop); else stop();
  };
  actor.update = (dt, time) => {
    baseUpdate(dt, time);
    if (!cur) { startIdle(); if (!cur) return; }
    cur.t += dt;
    const e = cur.entry;
    if (e.file === `${kind}_idle.webp`) { const b = Math.sin(time * 1.8); cur.mesh.scale.set(1 - b * 0.006, 1 + b * 0.012, 1); }
    let f = Math.floor(cur.t * e.fps);
    if (f >= e.frames) { if (cur.loop) f %= e.frames; else { stop(); return; } }
    showFrame(cur, f);
  };
  // start downloading this hero's clips right away
  loadClips().then((m) => { for (const [k, e] of Object.entries(m || {})) if (k.startsWith(`${kind}_`)) meshFor(e); });
  return actor;
}
