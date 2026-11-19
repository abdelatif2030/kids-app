// A robot player: steers the captain through the maze using only the public state of the simulation.
// It collects cages, levers and coins, picks the best gate of every fork, waits for spike traps, dodges boss attacks.
// Used by the tests (every level must be won) and for demos in the browser (`?bot=1`).
import { Run, TILE, CAP_R, applyGate, bfs } from './sim.js';

export function makeBot(opts = {}) {
  const worst = !!opts.worst; // pick the WORST gates (to prove that gate choice matters)
  const skipOptional = !!opts.skipOptional;
  return function botInput(run) {
    const l = run.lv; const c = run.cap; const W = l.W;
    if (run.state !== 'play' || run.fight) return { x: 0, y: 0 };
    const [cx, cy] = run.tileOf(c.x, c.y);
    const b = l.boss; const bs = run.bossState;
    // boss: dodge telegraphs, otherwise stand in melee range
    if (b && bs.phase === 'fight') {
      const tl = bs.tele;
      if (tl && run.inTele(tl, c.x, c.y)) return flee(run, tl);
      if (tl && tl.kind === 'sweep') { const dd = Math.hypot(c.x - b.x, c.y - b.y); if (dd < tl.r + 1) return flee(run, tl); }
      const d = Math.hypot(c.x - b.x, c.y - b.y);
      if (d > b.melee - 1.2) return toward(c, b.x, b.y);
      return { x: 0, y: 0 };
    }
    // gate choices for forks not yet passed
    const blockedGates = new Set();
    for (const g of l.groups) {
      if (g.taken >= 0) continue;
      let best = -1; let bv = worst ? Infinity : -Infinity;
      for (const id of g.gates) { const gt = l.gates[id]; const v = applyGate(run.n, gt.op, gt.v); if (worst ? v < bv : v > bv) { bv = v; best = id; } }
      for (const id of g.gates) if (id !== best) blockedGates.add(`${l.gates[id].tx},${l.gates[id].ty}`);
    }
    const blocked = (x, y) => blockedGates.has(`${x},${y}`);
    const targets = [];
    if (!skipOptional) {
      for (const q of l.cages) if (!q.open) targets.push([Math.floor(q.x / TILE), Math.floor(q.y / TILE)]);
      for (const q of l.levers) if (!q.pulled) targets.push([Math.floor(q.x / TILE), Math.floor(q.y / TILE)]);
      for (const q of l.coins) if (!q.got) targets.push([Math.floor(q.x / TILE), Math.floor(q.y / TILE)]);
    } else for (const q of l.levers) if (!q.pulled) targets.push([Math.floor(q.x / TILE), Math.floor(q.y / TILE)]);
    let path = null;
    if (targets.length) {
      const set = new Set(targets.map((t) => t[1] * W + t[0]));
      const allGates = new Set(); for (const g of l.groups) if (g.taken < 0) for (const id of g.gates) allGates.add(`${l.gates[id].tx},${l.gates[id].ty}`);
      // first everything that can be reached WITHOUT choosing a gate, then go through the best gate
      path = bfs(run, [cx, cy], (x, y) => set.has(y * W + x), (x, y) => allGates.has(`${x},${y}`));
      if (!path) path = bfs(run, [cx, cy], (x, y) => set.has(y * W + x), blocked);
    }
    if (!path && l.exit && l.exit.open) path = bfs(run, [cx, cy], (x, y) => x === l.exit.tx && y === l.exit.ty, blocked);
    if (!path && b && bs.phase !== 'dead') { const tx = Math.floor(b.x / TILE); const ty = Math.floor(b.y / TILE); path = bfs(run, [cx, cy], (x, y) => Math.abs(x - tx) + Math.abs(y - ty) <= 3, blocked); }
    if (!path) return { x: 0, y: 0 };
    if (path.length < 2) { // inside the goal tile: walk to its centre
      const t = path[0]; return toward(c, (t[0] + 0.5) * TILE, (t[1] + 0.5) * TILE);
    }
    // wait before spike tiles that are (about to be) dangerous
    for (let i = 1; i < Math.min(path.length, 4); i++) {
      const [px, py] = path[i];
      const tr = l.traps.find((q) => q.tx === px && q.ty === py);
      if (!tr) continue;
      const distIn = (i - 1) * TILE + TILE; // from the centre of the current tile to the far side of this trap
      const t0 = run.t + Math.max(0, (i - 1) * TILE - TILE / 2) / run.speed; const t1 = run.t + (distIn + TILE / 2 + 1) / run.speed;
      if (run.trapUpDuring(tr, t0, t1 + 0.15)) {
        // already on the tile before: hold at its centre
        return toward(c, (cx + 0.5) * TILE, (cy + 0.5) * TILE, 0.15);
      }
    }
    const nx = path[1];
    // steer to the next tile's centre, but cut the corner from the current tile centre first
    const tcx = (nx[0] + 0.5) * TILE; const tcy = (nx[1] + 0.5) * TILE;
    const scx = (cx + 0.5) * TILE; const scy = (cy + 0.5) * TILE;
    // keep to the corridor axis: first align across the corridor, then advance
    const alignX = Math.abs(nx[1] - cy) === 1 && nx[0] === cx; // moving vertically
    if (alignX && Math.abs(c.x - scx) > 0.25) return toward(c, scx, c.y + (tcy - c.y) * 0.2);
    if (!alignX && Math.abs(c.y - scy) > 0.25) return toward(c, c.x + (tcx - c.x) * 0.2, scy);
    return toward(c, tcx, tcy);
  };
}

function toward(c, x, y, stop = 0.12) {
  const dx = x - c.x; const dy = y - c.y; const d = Math.hypot(dx, dy);
  if (d < stop) return { x: 0, y: 0 };
  return { x: dx / d, y: dy / d };
}

function flee(run, tl) {
  const c = run.cap; const b = run.lv.boss; let best = null; let bs = -1e9;
  for (let a = 0; a < 24; a++) {
    const ang = (a / 24) * Math.PI * 2; const dx = Math.cos(ang); const dy = Math.sin(ang);
    let ok = true; let px = c.x; let py = c.y;
    for (let s = 0; s < 14; s++) { px += dx * 0.5; py += dy * 0.5; if (!run.free(px, py, CAP_R + 0.2) || (b && Math.hypot(px - b.x, py - b.y) < b.r + CAP_R + 0.3)) { ok = false; break; } }
    if (!ok) continue;
    if (tl.kind === 'sweep' && run.inTele(tl, px, py)) continue;
    const sc = Math.hypot(px - tl.x, py - tl.y) + 0.3 * (b ? Math.hypot(px - b.x, py - b.y) : 0);
    if (sc > bs) { bs = sc; best = { x: dx, y: dy }; }
  }
  return best || { x: 0, y: 0 };
}

/** Plays a whole level; returns the run. */
export function playLevel(level, o = {}) {
  const run = new Run({ level, seed: 1, easy: !!o.easy, up: o.up });
  const bot = makeBot(o);
  const maxT = o.maxT || 400;
  while (run.state === 'play' && run.t < maxT) run.step(1 / 30, bot(run));
  return run;
}
