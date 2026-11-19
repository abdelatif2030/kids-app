// Barrel Knights: pure deterministic match logic (no DOM, no three.js). Team 0 = the player's team (defends the +z gate,
// attacks the gate at -z); team 1 = rivals. A giant barrel is pushed through the opposing gate. Knights dash (shove the
// barrel, stun rivals briefly), hazards are always telegraphed (trapdoors, mud, boulders on warned lanes). Nobody is hurt.
export const PITCH = { hw: 15, hl: 26, gate: 5, pocket: 3.5 };
export const BARREL_R = 1.15;
export const KNIGHT_R = 0.8;
export const MATCH_TIME = 120;
export const GOAL_LIMIT = 5;
export const OVERTIME = 30;
export const DIFFS = ['easy', 'normal', 'hard'];
const KNIGHT_SPEED = 7.2, DASH_SPEED = 17.5, DASH_TIME = 0.28, ACCEL = 40;
const DOOR_HALF = 1.9, DOOR_CLOSED = 5, DOOR_WARN = 1.4, DOOR_OPEN = 2.4;
const BOULDER_R = 1.1, BOULDER_WARN = 1.6, BOULDER_SPEED = 11;
const MUD_R = 3.2;

export const ROUNDS = [
  { id: 'squire', ar: 'كأس الفرسان الصغار', en: 'Squire Cup', skill: 0, mud: 0, doors: 0, boulderEvery: 0, look: 'day' },
  { id: 'meadow', ar: 'كأس المرج', en: 'Meadow Cup', skill: 0.04, mud: 2, doors: 0, boulderEvery: 0, look: 'day' },
  { id: 'trap', ar: 'كأس الأبواب السرية', en: 'Trapdoor Cup', skill: 0.08, mud: 0, doors: 2, boulderEvery: 0, look: 'day' },
  { id: 'rock', ar: 'كأس الصخور', en: 'Boulder Cup', skill: 0.12, mud: 0, doors: 0, boulderEvery: 9, look: 'dusk' },
  { id: 'swamp', ar: 'كأس المستنقع', en: 'Swamp Cup', skill: 0.16, mud: 4, doors: 2, boulderEvery: 0, look: 'dusk' },
  { id: 'castle', ar: 'كأس القلعة', en: 'Castle Cup', skill: 0.2, mud: 2, doors: 4, boulderEvery: 9, look: 'dusk' },
  { id: 'storm', ar: 'كأس العاصفة', en: 'Storm Cup', skill: 0.24, mud: 3, doors: 4, boulderEvery: 7, look: 'night' },
  { id: 'dragon', ar: 'كأس التنين', en: 'Dragon Cup', skill: 0.28, mud: 4, doors: 6, boulderEvery: 6, look: 'night' },
  { id: 'royal', ar: 'الكأس الملكي', en: 'Royal Final', skill: 0.32, mud: 4, doors: 6, boulderEvery: 5.5, look: 'royal', final: true },
];
export const DOOR_SPOTS = [[-8, -6], [8, 6], [8, -6], [-8, 6], [0, -14], [0, 14], [-9, -16], [9, 16]];
export const MUD_SPOTS = [[-7, 0], [7, 0], [0, -10], [0, 10], [-9, -13], [9, 13]];
export const LANES = [-18, -12, -6, 6, 12, 18];

export const COLORS = [
  { id: 'blue', hex: 0x2a6ae8, price: 0, ar: 'أزرق', en: 'Blue' },
  { id: 'green', hex: 0x2ab85a, price: 30, ar: 'أخضر', en: 'Green' },
  { id: 'teal', hex: 0x1ec8c8, price: 30, ar: 'تركوازي', en: 'Teal' },
  { id: 'purple', hex: 0x8a4ae8, price: 40, ar: 'بنفسجي', en: 'Purple' },
  { id: 'orange', hex: 0xff7a1a, price: 40, ar: 'برتقالي', en: 'Orange' },
  { id: 'pink', hex: 0xff5aa8, price: 40, ar: 'وردي', en: 'Pink' },
  { id: 'gold', hex: 0xf0b020, price: 50, ar: 'ذهبي', en: 'Gold' },
  { id: 'white', hex: 0xf2f2f2, price: 60, ar: 'أبيض', en: 'White' },
];
export const HELMETS = [
  { id: 'bucket', price: 0, ar: 'خوذة عادية', en: 'Plain' },
  { id: 'plume', price: 40, ar: 'ريشة', en: 'Plume' },
  { id: 'crest', price: 50, ar: 'تاج مشط', en: 'Crest' },
  { id: 'horns', price: 70, ar: 'قرون', en: 'Horns' },
  { id: 'jester', price: 90, ar: 'مهرج', en: 'Jester' },
  { id: 'crown', price: 120, ar: 'تاج', en: 'Crown' },
];
export const RIVAL_COLOR = 0xd83a3a;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export function rng(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function normalizeSave(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const num = (v, d, lo, hi) => (Number.isFinite(v) ? clamp(Math.floor(v), lo, hi) : d);
  const stars = Array.from({ length: ROUNDS.length }, (_, i) => num(Array.isArray(r.stars) ? r.stars[i] : 0, 0, 0, 3));
  const ownedC = new Set(['blue']); const ownedH = new Set(['bucket']);
  if (r.owned && Array.isArray(r.owned.colors)) for (const c of r.owned.colors) if (COLORS.some((x) => x.id === c)) ownedC.add(c);
  if (r.owned && Array.isArray(r.owned.helmets)) for (const c of r.owned.helmets) if (HELMETS.some((x) => x.id === c)) ownedH.add(c);
  const color = ownedC.has(r.color) ? r.color : 'blue';
  const helmet = ownedH.has(r.helmet) ? r.helmet : 'bucket';
  return {
    v: 1, coins: num(r.coins, 0, 0, 1e7), unlocked: num(r.unlocked, 1, 1, ROUNDS.length), stars,
    owned: { colors: [...ownedC], helmets: [...ownedH] }, color, helmet,
    diff: DIFFS.includes(r.diff) ? r.diff : 'normal', muted: !!r.muted,
    wins: num(r.wins, 0, 0, 1e6), goals: num(r.goals, 0, 0, 1e6), played: num(r.played, 0, 0, 1e6),
  };
}
export function applyResult(save, round, res) {
  save.coins += res.coins; save.played++; save.goals += res.goals[0];
  if (res.win) { save.wins++; save.stars[round] = Math.max(save.stars[round] || 0, res.stars); save.unlocked = Math.max(save.unlocked, Math.min(ROUNDS.length, round + 2)); }
  return save;
}
export function buy(save, kind, id) {
  const list = kind === 'color' ? COLORS : HELMETS; const item = list.find((x) => x.id === id);
  if (!item) return { ok: false, reason: 'unknown' };
  const owned = kind === 'color' ? save.owned.colors : save.owned.helmets;
  if (owned.includes(id)) return { ok: true, reason: 'owned' };
  if (save.coins < item.price) return { ok: false, reason: 'coins' };
  save.coins -= item.price; owned.push(id); return { ok: true, reason: 'bought' };
}
export function equip(save, kind, id) {
  const owned = kind === 'color' ? save.owned.colors : save.owned.helmets;
  if (!owned.includes(id)) return false;
  if (kind === 'color') save.color = id; else save.helmet = id;
  return true;
}

export class Match {
  constructor(opt = {}) {
    this.round = clamp(opt.round | 0, 0, ROUNDS.length - 1);
    this.cfg = ROUNDS[this.round];
    this.diff = DIFFS.includes(opt.diff) ? opt.diff : 'normal';
    this.young = (opt.age || 5) <= 4;
    this.rand = rng(opt.seed ?? 1);
    this.autoPlayer = !!opt.autoPlayer;
    this.input = { x: 0, z: 0 };
    this.dashBuf = 0;
    const base = { easy: 0.04, normal: 0.42, hard: 0.68 }[this.diff];
    this.skill = [{ easy: 0.75, normal: 0.55, hard: 0.5 }[this.diff], clamp(base + this.cfg.skill - (this.young ? 0.15 : 0), 0, 1)];
    this.score = [0, 0]; this.timeLeft = MATCH_TIME; this.overtime = false; this.t = 0; this.playTime = 0;
    this.goalLimit = GOAL_LIMIT;
    this.ev = [];
    this.knights = [];
    for (let team = 0; team < 2; team++) for (let slot = 0; slot < 4; slot++) {
      this.knights.push({ id: team * 4 + slot, team, slot, human: team === 0 && slot === 0, x: 0, z: 0, vx: 0, vz: 0, fx: 0, fz: team === 0 ? -1 : 1, stun: 0, stunDur: 0, immune: 0, dash: 0, dx: 0, dz: 0, cd: 0, role: 'attacker', cmd: { x: 0, z: 0, dash: false }, aiT: 0, err: 0, errT: 0, fall: null, mud: false, speed: 0 });
    }
    this.barrel = { x: 0, z: 0, vx: 0, vz: 0, hitCd: 0, idle: 0, onDoor: false };
    this.doors = DOOR_SPOTS.slice(0, this.cfg.doors).map((s, i) => ({ id: i, x: s[0], z: s[1], half: DOOR_HALF, state: 'closed', t: 0 }));
    this.muds = MUD_SPOTS.slice(0, this.cfg.mud).map((s, i) => ({ id: i, x: s[0], z: s[1], r: MUD_R }));
    this.boulders = []; this.boulderId = 0; this.lastLane = -1;
    this.phase = 'kickoff'; this.phaseT = 0; this.lastCount = 99; this._roleT = 0; this.acc = 0;
    this.kickoffs = 0;
    this._kickoff(3.2);
  }

  attackDir(team) { return team === 0 ? -1 : 1; }
  ownGoalZ(team) { return -this.attackDir(team) * PITCH.hl; }
  pressDash() { this.dashBuf = 0.3; }

  _emit(e) { e.t = this.t; this.ev.push(e); }

  _kickoff(len) {
    this.phase = 'kickoff'; this.phaseT = len; this.lastCount = 99; this.kickoffs++;
    for (const k of this.knights) {
      const s = k.team === 0 ? 1 : -1;
      const f = [[0, 6], [-7, 9], [7, 9], [0, 17]][k.slot];
      k.x = f[0]; k.z = s * f[1]; k.vx = k.vz = 0; k.fx = 0; k.fz = -s; k.stun = 0; k.immune = 0; k.dash = 0; k.cd = 0.5; k.fall = null; k.cmd = { x: 0, z: 0, dash: false };
    }
    const b = this.barrel; b.x = 0; b.z = 0; b.vx = b.vz = 0; b.idle = 0;
    for (const d of this.doors) { d.state = 'closed'; d.t = 4 + d.id * 1.3; }
    this.boulders = []; this.bTimer = 6 + this.rand() * 2;
    this._assignRoles();
  }

  _assignRoles() {
    for (let team = 0; team < 2; team++) {
      const ks = this.knights.filter((k) => k.team === team && (!k.human || this.autoPlayer));
      if (!ks.length) continue;
      const b = this.barrel;
      ks.sort((p, q) => Math.hypot(p.x - b.x, p.z - b.z) - Math.hypot(q.x - b.x, q.z - b.z));
      ks[0].role = 'attacker';
      const rest = ks.slice(1);
      const own = this.ownGoalZ(team);
      rest.sort((p, q) => Math.abs(p.z - own) - Math.abs(q.z - own));
      rest.forEach((k, i) => { k.role = i === 0 ? 'defender' : 'support'; });
    }
  }

  step(dt) {
    this.ev = [];
    this.acc += Math.min(dt, 0.1);
    const H = 1 / 120;
    while (this.acc >= H) { this.acc -= H; this.t += H; this._sub(H); }
    if (this.dashBuf > 0) this.dashBuf = Math.max(0, this.dashBuf - dt);
    return this.ev;
  }

  _sub(h) {
    const ph = this.phase;
    if (ph === 'over') return;
    if (ph === 'kickoff') {
      this.phaseT -= h;
      const n = Math.ceil(this.phaseT - 0.2);
      if (n < this.lastCount && n >= 1) { this.lastCount = n; this._emit({ type: 'count', n }); }
      if (this.phaseT <= 0) { this.phase = 'play'; this._emit({ type: 'go' }); }
      return;
    }
    if (ph === 'goal') {
      this.phaseT -= h;
      for (const k of this.knights) { k.vx *= Math.exp(-4 * h); k.vz *= Math.exp(-4 * h); }
      this._physics(h, false);
      if (this.phaseT <= 0) this._afterGoal();
      return;
    }
    this.playTime += h; this.timeLeft -= h;
    this._control(h); this._hazards(h); this._physics(h, true);
    const b = this.barrel;
    if (Math.abs(b.x) < PITCH.gate && Math.abs(b.z) > PITCH.hl + 0.3) {
      const team = b.z < 0 ? 0 : 1;
      this.score[team]++; this.phase = 'goal'; this.phaseT = 2.6; this.lastScorer = team;
      this._emit({ type: 'goal', team, score: this.score.slice() });
      return;
    }
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      if (this.score[0] !== this.score[1]) this._end();
      else if (!this.overtime) { this.overtime = true; this.timeLeft = OVERTIME; this._emit({ type: 'overtime' }); }
      else this._end();
    }
  }

  _afterGoal() {
    const mx = Math.max(this.score[0], this.score[1]);
    if (mx >= this.goalLimit || this.overtime) return this._end();
    if (this.timeLeft <= 0) {
      if (this.score[0] !== this.score[1]) return this._end();
      this.overtime = true; this.timeLeft = OVERTIME; this._emit({ type: 'overtime' });
    }
    this._kickoff(2.2);
  }

  _end() { this.phase = 'over'; this._emit({ type: 'over', result: this.result() }); }

  result() {
    const [a, b] = this.score; const win = a > b; const draw = a === b; const d = a - b;
    const stars = win ? (d >= 3 ? 3 : d >= 2 ? 2 : 1) : 0;
    const coins = a * 3 + (win ? 12 + stars * 4 : draw ? 5 : 3);
    return { win, draw, goals: [a, b], stars, coins };
  }

  // ---- control & movement
  _control(h) {
    this._roleT -= h; if (this._roleT <= 0) { this._assignRoles(); this._roleT = 0.4; }
    const b = this.barrel;
    for (const k of this.knights) {
      const isHuman = k.human && !this.autoPlayer;
      if (k.stun > 0) {
        k.stun -= h; const f = Math.exp(-3 * h); k.vx *= f; k.vz *= f;
        if (k.stun <= 0) { k.stun = 0; k.immune = 1.4; if (k.fall) this._relocate(k); }
      } else {
        if (k.immune > 0) k.immune -= h;
        k.cd -= h;
        if (isHuman) {
          const m = Math.hypot(this.input.x, this.input.z);
          k.cmd = { x: m > 1 ? this.input.x / m : this.input.x, z: m > 1 ? this.input.z / m : this.input.z, dash: this.dashBuf > 0 };
        } else { k.aiT -= h; if (k.aiT <= 0) { k.aiT = 0.05; this._ai(k); } else k.cmd.dash = false; }
        if (k.cmd.dash && k.cd <= 0 && k.dash <= 0) this._startDash(k, isHuman);
        let mf = 1; k.mud = false;
        for (const m of this.muds) if (Math.hypot(k.x - m.x, k.z - m.z) < m.r) { mf = 0.55; k.mud = true; }
        const sp = (isHuman ? KNIGHT_SPEED * 1.05 : KNIGHT_SPEED * (0.72 + 0.28 * this.skill[k.team])) * mf;
        k.speed = sp;
        if (k.dash > 0) { k.dash -= h; k.vx = k.dx * DASH_SPEED; k.vz = k.dz * DASH_SPEED; }
        else {
          const tx = k.cmd.x * sp, tz = k.cmd.z * sp; let ax = tx - k.vx, az = tz - k.vz; const al = Math.hypot(ax, az); const mx = ACCEL * h;
          if (al > mx) { ax = ax / al * mx; az = az / al * mx; }
          k.vx += ax; k.vz += az;
        }
        const m = Math.hypot(k.cmd.x, k.cmd.z);
        if (k.dash <= 0 && m > 0.15) { const l = Math.hypot(k.cmd.x, k.cmd.z); k.fx = k.cmd.x / l; k.fz = k.cmd.z / l; }
      }
      k.x += k.vx * h; k.z += k.vz * h;
    }
    void b;
  }

  _startDash(k, human) {
    let dx = k.cmd.x, dz = k.cmd.z; let m = Math.hypot(dx, dz);
    if (m < 0.2) { dx = k.fx; dz = k.fz; m = Math.hypot(dx, dz) || 1; }
    dx /= m; dz /= m;
    const b = this.barrel;
    if (human) { // gentle aim help toward the barrel
      const bx = b.x - k.x, bz = b.z - k.z; const bd = Math.hypot(bx, bz);
      if (bd < 6.5 && bd > 0.1) { const c = (dx * bx + dz * bz) / bd; if (c > (this.young ? 0.5 : 0.72)) { dx = dx * 0.4 + bx / bd * 0.6; dz = dz * 0.4 + bz / bd * 0.6; const l = Math.hypot(dx, dz); dx /= l; dz /= l; } }
    }
    k.dash = DASH_TIME; k.dx = dx; k.dz = dz; k.fx = dx; k.fz = dz;
    k.cd = human ? (this.young ? 1.1 : 1.5) : 2.8 - 1.4 * this.skill[k.team];
    this.dashBuf = 0;
    this._emit({ type: 'dash', id: k.id });
  }

  _stun(k, dur, kx, kz, kind) {
    k.stun = dur; k.stunDur = dur; k.dash = 0; k.vx = kx; k.vz = kz; k.immune = 0;
    this._emit({ type: 'stun', id: k.id, kind });
  }

  _relocate(k) {
    const d = k.fall; k.fall = null;
    const dx = k.x - d.x, dz = k.z - d.z; const ex = d.half - Math.abs(dx), ez = d.half - Math.abs(dz);
    const pad = KNIGHT_R + 0.4;
    if (ex < ez) k.x = d.x + (dx >= 0 ? 1 : -1) * (d.half + pad); else k.z = d.z + (dz >= 0 ? 1 : -1) * (d.half + pad);
    k.x = clamp(k.x, -PITCH.hw + KNIGHT_R, PITCH.hw - KNIGHT_R); k.z = clamp(k.z, -PITCH.hl + KNIGHT_R, PITCH.hl - KNIGHT_R);
  }

  // ---- AI
  _ai(k) {
    const b = this.barrel; const s = this.skill[k.team]; const att = this.attackDir(k.team); const own = this.ownGoalZ(k.team);
    k.errT -= 0.05; if (k.errT <= 0) { k.errT = 0.8; k.err = (this.rand() - 0.5) * 2 * (1 - s) * 0.4; }
    let tx = 0, tz = 0, dash = false;
    const bdist = Math.hypot(b.x - k.x, b.z - k.z);
    const bDepth = (b.z - own) * att; // how far the barrel is from my own end line
    const chase = () => { const r = this._chase(k, s, att); tx = r.tx; tz = r.tz; dash = r.dash; };
    if (k.role === 'attacker') chase();
    else if (k.role === 'defender') {
      if (bdist < 8 || (bDepth < 14 && b.vz * att < -1)) chase();
      else { tx = clamp(b.x * 0.45, -5.5, 5.5); tz = own + att * clamp(bDepth * 0.35, 5, 11); }
    } else {
      if (bDepth > PITCH.hl) { // barrel in the opponents' half: a wing runner who also bumps rivals near the barrel
        const side = b.x > 1 ? -1 : b.x < -1 ? 1 : (k.slot % 2 ? 1 : -1);
        tx = side * 8; tz = clamp(b.z + att * 7, -PITCH.hl + 3, PITCH.hl - 3);
        let best = null, bd = 99;
        for (const o of this.knights) if (o.team !== k.team && o.stun <= 0 && o.immune <= 0) { const d = Math.hypot(o.x - k.x, o.z - k.z); const db = Math.hypot(o.x - b.x, o.z - b.z); if (d < 6 && db < 7 && d < bd) { bd = d; best = o; } }
        if (best) { tx = best.x; tz = best.z; if (bd < 3.4 && k.cd <= 0 && this.rand() < 0.1 + 0.5 * s) dash = true; }
      } else if (bdist < 7) chase();
      else { tx = clamp(-b.x * 0.7, -8, 8); tz = own + att * 14; }
    }
    // keep away from warned or open trapdoors and from boulder lanes
    let rx = 0, rz = 0;
    for (const d of this.doors) if (d.state !== 'closed') {
      const ox = k.x - d.x, oz = k.z - d.z;
      if (Math.max(Math.abs(ox), Math.abs(oz)) < d.half + 1.6) { const l = Math.hypot(ox, oz) || 1; rx += ox / l * 2.5; rz += oz / l * 2.5; }
    }
    for (const bo of this.boulders) {
      const dz = k.z - bo.z;
      if (Math.abs(dz) < 2.6 && (bo.state === 'warn' || Math.abs(k.x - bo.x) < 9)) { rz += (dz >= 0 ? 1 : -1) * 2; }
    }
    let cx = tx - k.x, cz = tz - k.z; const l = Math.hypot(cx, cz);
    if (l > 0.01) { const sc = Math.min(1, l / 0.6); cx = cx / l * sc; cz = cz / l * sc; } else { cx = 0; cz = 0; }
    cx += rx; cz += rz; const m = Math.hypot(cx, cz); if (m > 1) { cx /= m; cz /= m; }
    k.cmd = { x: cx, z: cz, dash: dash && k.cd <= 0 };
  }

  _chase(k, s, att) {
    const b = this.barrel; const reach = BARREL_R + KNIGHT_R;
    const bx = b.x + b.vx * 0.2, bz = b.z + b.vz * 0.2;
    let gx = 0 - bx, gz = att * PITCH.hl - bz; let gl = Math.hypot(gx, gz) || 1; gx /= gl; gz /= gl;
    const c = Math.cos(k.err), sn = Math.sin(k.err); const gx2 = gx * c - gz * sn, gz2 = gx * sn + gz * c; gx = gx2; gz = gz2;
    const own = -att * PITCH.hl;
    // against the sides or my own end line: shove along the wall toward the middle instead
    if (Math.abs(bx) > PITCH.hw - 3 || Math.abs(bz - own) < 3) {
      gx += -Math.sign(bx || 1) * (Math.abs(bx) > PITCH.hw - 3 ? 0.9 : 0.5); gz += att * (Math.abs(bz - own) < 3 ? 0.3 : 0.6);
      gl = Math.hypot(gx, gz); gx /= gl; gz /= gl;
    }
    const rx = k.x - bx, rz = k.z - bz;
    const along = rx * gx + rz * gz; const lat = -rx * gz + rz * gx;
    const side = lat >= 0 ? 1 : -1;
    const px = -gz * side, pz = gx * side; // perpendicular on the knight's side
    const behindX = bx - gx * (reach + 0.9), behindZ = bz - gz * (reach + 0.9);
    let tx, tz, dash = false;
    if (along < -reach * 0.6 && Math.abs(lat) < reach * 1.15) { // lined up behind the barrel: charge through it
      tx = bx + gx * 1.5; tz = bz + gz * 1.5;
      if (Math.hypot(rx, rz) < reach + 2.6 && k.cd <= 0 && this.rand() < 0.1 + 0.6 * s) dash = true;
    } else {
      const off = clamp((along + 0.5 * reach), 0, reach + 2.2);
      tx = behindX + px * off; tz = behindZ + pz * off;
      // would the straight way cut through the barrel? go round its side instead
      const sx = tx - k.x, sz = tz - k.z; const sl2 = sx * sx + sz * sz || 1;
      const u = clamp(((bx - k.x) * sx + (bz - k.z) * sz) / sl2, 0, 1);
      const cdist = Math.hypot(k.x + sx * u - bx, k.z + sz * u - bz);
      if (cdist < reach + 0.5 && along > -reach) { tx = bx + px * (reach + 1.5) - gx * 0.6; tz = bz + pz * (reach + 1.5) - gz * 0.6; }
    }
    const mx = PITCH.hw - KNIGHT_R, mz = PITCH.hl - KNIGHT_R;
    return { tx: clamp(tx, -mx, mx), tz: clamp(tz, -mz, mz), dash };
  }

  // ---- hazards
  _hazards(h) {
    for (const d of this.doors) {
      d.t -= h;
      if (d.state === 'closed' && d.t <= 0) { d.state = 'warn'; d.t = DOOR_WARN; d.warnAt = this.t; this._emit({ type: 'doorWarn', id: d.id }); }
      else if (d.state === 'warn' && d.t <= 0) { d.state = 'open'; d.t = DOOR_OPEN; this._emit({ type: 'doorOpen', id: d.id }); }
      else if (d.state === 'open') {
        if (d.t <= 0) { d.state = 'closed'; d.t = DOOR_CLOSED; this._emit({ type: 'doorClose', id: d.id }); }
        else for (const k of this.knights) if (!k.fall && Math.abs(k.x - d.x) < d.half - 0.15 && Math.abs(k.z - d.z) < d.half - 0.15) {
          k.fall = d; this._stun(k, 1.5, 0, 0, 'fall'); this._emit({ type: 'fall', id: k.id, door: d.id });
        }
      }
    }
    if (this.cfg.boulderEvery > 0) {
      this.bTimer -= h;
      if (this.bTimer <= 0 && this.boulders.length < 2) {
        let li; do { li = Math.floor(this.rand() * LANES.length); } while (li === this.lastLane); this.lastLane = li;
        const dir = this.rand() < 0.5 ? 1 : -1;
        const bo = { id: this.boulderId++, state: 'warn', t: BOULDER_WARN, z: LANES[li], dir, x: -dir * (PITCH.hw + 3), hitB: 0, rot: 0 };
        this.boulders.push(bo); this.bTimer = this.cfg.boulderEvery * (0.8 + 0.4 * this.rand());
        this._emit({ type: 'boulderWarn', id: bo.id, z: bo.z, dir });
      }
    }
    const b = this.barrel;
    for (const bo of this.boulders) {
      if (bo.state === 'warn') { bo.t -= h; if (bo.t <= 0) { bo.state = 'go'; this._emit({ type: 'boulderGo', id: bo.id }); } continue; }
      bo.x += bo.dir * BOULDER_SPEED * h; bo.rot += BOULDER_SPEED * h / BOULDER_R; bo.hitB -= h;
      for (const k of this.knights) if (k.stun <= 0 && k.immune <= 0 && Math.hypot(k.x - bo.x, k.z - bo.z) < BOULDER_R + KNIGHT_R) this._stun(k, k.human ? 1.0 : 1.2, bo.dir * 7, 0, 'boulder');
      if (bo.hitB <= 0 && Math.hypot(b.x - bo.x, b.z - bo.z) < BOULDER_R + BARREL_R) { b.vx += bo.dir * 10; bo.hitB = 0.8; this._emit({ type: 'boulderBarrel', id: bo.id }); }
    }
    this.boulders = this.boulders.filter((bo) => Math.abs(bo.x) < PITCH.hw + 4 || bo.state === 'warn');
  }

  // ---- physics
  _physics(h, live) {
    const b = this.barrel; const K = this.knights;
    // knights and barrel
    b.hitCd -= h;
    for (const k of K) {
      const dx = b.x - k.x, dz = b.z - k.z; const d = Math.hypot(dx, dz); const mn = BARREL_R + KNIGHT_R;
      if (d < mn && d > 1e-6) {
        const nx = dx / d, nz = dz / d; const rel = (k.vx - b.vx) * nx + (k.vz - b.vz) * nz;
        const mk = k.dash > 0 ? 4.2 : 1.3, mb = 4;
        if (rel > 0) {
          const j = 1.35 * rel / (1 / mk + 1 / mb);
          b.vx += nx * j / mb; b.vz += nz * j / mb; k.vx -= nx * j / mk * 0.2; k.vz -= nz * j / mk * 0.2;
          if (rel > 3 && b.hitCd <= 0) { b.hitCd = 0.12; this._emit({ type: 'barrelHit', id: k.id, power: Math.min(1, j / 40), dash: k.dash > 0 }); }
          b.last = k.team;
        }
        const ov = mn - d; b.x += nx * ov * 0.85; b.z += nz * ov * 0.85; k.x -= nx * ov * 0.15; k.z -= nz * ov * 0.15;
      }
    }
    // knights vs knights
    for (let i = 0; i < K.length; i++) for (let j = i + 1; j < K.length; j++) {
      const A = K[i], B = K[j]; const dx = B.x - A.x, dz = B.z - A.z; const d = Math.hypot(dx, dz); const mn = KNIGHT_R * 2;
      if (d < mn && d > 1e-6) {
        const nx = dx / d, nz = dz / d; const ov = (mn - d) / 2; A.x -= nx * ov; A.z -= nz * ov; B.x += nx * ov; B.z += nz * ov;
        if (live && A.team !== B.team) {
          const hit = (X, Y, sx, sz) => { if (X.dash > 0 && Y.dash <= 0 && Y.stun <= 0 && Y.immune <= 0) { this._stun(Y, Y.human ? (this.young ? 0.7 : 1.0) : 1.2, sx * 9, sz * 9, 'dash'); X.dash = Math.min(X.dash, 0.05); this._emit({ type: 'clash', id: X.id, victim: Y.id }); } };
          if (A.dash > 0 && B.dash > 0) { if (!A._clash || this.t - A._clash > 0.3) { A._clash = this.t; this._emit({ type: 'clang' }); } } else { hit(A, B, nx, nz); hit(B, A, -nx, -nz); }
        }
      }
    }
    // barrel integration, friction, mud, open doors
    let fr = 0.55; for (const m of this.muds) if (Math.hypot(b.x - m.x, b.z - m.z) < m.r) fr += 3.2;
    b.onDoor = false;
    for (const d of this.doors) if (d.state === 'open' && Math.abs(b.x - d.x) < d.half && Math.abs(b.z - d.z) < d.half) { fr += 6; if (!b.onDoor) { b.onDoor = true; } }
    const f = Math.exp(-fr * h); b.vx *= f; b.vz *= f;
    const sp = Math.hypot(b.vx, b.vz); if (sp > 22) { b.vx *= 22 / sp; b.vz *= 22 / sp; }
    b.x += b.vx * h; b.z += b.vz * h;
    this._barrelWalls();
    // anti-stuck: a barrel that has hardly moved for a while gets a gentle nudge toward the middle
    if (live) { if (sp < 0.5) { b.idle += h; if (b.idle > 7) { b.idle = 0; b.vx += -Math.sign(b.x || 1) * 2 + (this.rand() - 0.5); b.vz += -Math.sign(b.z || 1) * 2; this._emit({ type: 'nudge' }); } } else b.idle = 0; }
    // knights vs the barrel again (the barrel may be against a wall) then the fences
    for (const k of K) {
      const dx = k.x - b.x, dz = k.z - b.z; const d = Math.hypot(dx, dz); const mn = BARREL_R + KNIGHT_R;
      if (d < mn && d > 1e-6) { k.x = b.x + dx / d * mn; k.z = b.z + dz / d * mn; }
      k.x = clamp(k.x, -PITCH.hw + KNIGHT_R, PITCH.hw - KNIGHT_R); k.z = clamp(k.z, -PITCH.hl + KNIGHT_R, PITCH.hl - KNIGHT_R);
    }
  }

  _barrelWalls() {
    const b = this.barrel; const { hw, hl, gate, pocket } = PITCH; const bounce = (axis) => { const v = -b['v' + axis] * 0.6; if (Math.abs(b['v' + axis]) > 2.5) this._emit({ type: 'fence', power: Math.min(1, Math.abs(b['v' + axis]) / 14) }); b['v' + axis] = v; };
    if (b.x > hw - BARREL_R) { b.x = hw - BARREL_R; if (b.vx > 0) bounce('x'); } else if (b.x < -hw + BARREL_R) { b.x = -hw + BARREL_R; if (b.vx < 0) bounce('x'); }
    for (const s of [-1, 1]) {
      const sz = s * b.z;
      // gate posts
      for (const px of [-gate, gate]) {
        const dx = b.x - px, dz = b.z - s * hl; const d = Math.hypot(dx, dz); const mn = BARREL_R + 0.3;
        if (d < mn && d > 1e-6) { const nx = dx / d, nz = dz / d; b.x = px + nx * mn; b.z = s * hl + nz * mn; const vn = b.vx * nx + b.vz * nz; if (vn < 0) { b.vx -= 1.6 * vn * nx; b.vz -= 1.6 * vn * nz; } }
      }
      if (Math.abs(b.x) >= gate && sz > hl - BARREL_R) { b.z = s * (hl - BARREL_R); if (s * b.vz > 0) bounce('z'); }
      else if (Math.abs(b.x) < gate && sz > hl - 0.0) { // inside the gate pocket
        if (Math.abs(b.x) > gate - 0.2) { b.x = Math.sign(b.x) * (gate - 0.2); if (b.x * b.vx > 0) bounce('x'); }
        if (sz > hl + pocket - BARREL_R) { b.z = s * (hl + pocket - BARREL_R); if (s * b.vz > 0) bounce('z'); }
      }
    }
  }
}
