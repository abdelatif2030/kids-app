// «برج الأبطال» — Hero Tower: the rules (pure, no browser). A little knight starts at the bottom of a tall tower and climbs
// floor by floor. Every floor has foes and treasures with POWER numbers:
//   - a foe weaker than the hero (its number is green) is defeated when tapped, and the hero ABSORBS its power (hero += foe);
//   - a foe stronger (red) wins the round: nothing is lost for good, the floor is simply tried again (gently);
//   - a sword (+), a potion (+), a purple crystal (+) and a chest (+, needs the key) add power; a gold coin (×2, ×3) MULTIPLIES it (best taken late).
// When the foes of a floor are gone the hero climbs the ladder. A troll waits halfway, a dark sorcerer at the top and a
// dragon on the roof. Every floor is built backwards from a winning order, so it always has a solution, and the order
// matters (a coin early is worth less than a coin late; a strong foe needs the small ones first).

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export const CHAPTERS = [
  { id: 1, theme: 'castle', floors: 12, start: 8, ratio: 0.72, mulMax: 2 },
  { id: 2, theme: 'ice', floors: 12, start: 12, ratio: 0.78, mulMax: 2 },
  { id: 3, theme: 'fire', floors: 12, start: 20, ratio: 0.84, mulMax: 3 },
  // 2026-11-21: three harder visits (same looks, bigger numbers)
  { id: 4, theme: 'castle', floors: 12, start: 30, ratio: 0.86, mulMax: 3 },
  { id: 5, theme: 'ice', floors: 12, start: 44, ratio: 0.88, mulMax: 3 },
  { id: 6, theme: 'fire', floors: 12, start: 60, ratio: 0.9, mulMax: 4 },
];

export const FOE_KINDS = ['slime', 'goblin', 'skeleton', 'imp', 'orc'];
export const TROLL_FLOOR = 6;
export const SORCERER_FLOOR = 11;

/** Compact numbers: 999, 1,250, 57.7K, 341K, 6.17M ... */
export function fmt(n) {
  n = Math.round(n);
  if (n < 10000) return n >= 1000 ? `${Math.floor(n / 1000)},${String(n % 1000).padStart(3, '0')}` : String(n);
  const units = [[1e12, 'T'], [1e9, 'B'], [1e6, 'M'], [1e3, 'K']];
  for (const [v, u] of units) if (n >= v) { const x = n / v; return `${x >= 100 ? Math.round(x) : x >= 10 ? x.toFixed(1).replace(/\.0$/, '') : x.toFixed(2).replace(/0$/, '').replace(/\.0$/, '')}${u}`; }
  return String(n);
}

/** What happens when the hero (power [p], [hasKey]) uses a thing. Returns null when nothing happens (a locked chest). */
export function apply(p, hasKey, th) {
  switch (th.type) {
    case 'enemy': case 'boss': return p > th.power ? { win: true, p: p + th.power, key: hasKey } : { win: false, p, key: hasKey };
    case 'sword': case 'potion': case 'crystal': return { win: true, p: p + th.add, key: hasKey };
    case 'mult': return { win: true, p: p * th.mul, key: hasKey };
    case 'key': return { win: true, p, key: true };
    case 'chest': return hasKey ? { win: true, p: p + th.add, key: false } : null;
    default: return null;
  }
}

/** Is there an order of the things of a floor that defeats every foe? Also the best power reachable. (Brute force, few things.) */
export function solve(p0, things) {
  let best = -1;
  let ok = false;
  const n = things.length;
  const used = new Array(n).fill(false);
  const foes = things.filter((t) => t.type === 'enemy' || t.type === 'boss').length;
  const go = (p, key, beaten) => {
    if (beaten === foes) { ok = true; if (p > best) best = p; }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      const r = apply(p, key, things[i]);
      if (!r || !r.win) continue;
      used[i] = true;
      go(r.p, r.key, beaten + (things[i].type === 'enemy' || things[i].type === 'boss' ? 1 : 0));
      used[i] = false;
    }
    // also count orders that stop after the last foe (items left unused do not matter)
  };
  go(p0, false, 0);
  return { ok, best };
}

/** Builds one chapter: [{ n, kind, things:[{id,type,power|add|mul,sprite}], plan:[ids in a winning order], startP }]. [easy] = younger children. */
export function buildChapter(ch, seed, easy = false) {
  const r = rng(seed * 7919 + ch.id * 104729);
  const floors = [];
  let c = ch.start; // the power the hero has if he plays the intended order
  const ratioHi = easy ? Math.min(ch.ratio, 0.6) : ch.ratio;
  for (let n = 1; n <= ch.floors + 1; n++) {
    const roof = n === ch.floors + 1;
    const kind = roof ? 'dragon' : n === TROLL_FLOOR ? 'troll' : n === SORCERER_FLOOR ? 'sorcerer' : 'normal';
    const startP = c;
    const plan = [];
    const things = [];
    let id = 0;
    const add = (t) => { t.id = `f${n}t${id++}`; things.push(t); plan.push(t.id); return t; };
    const foe = (lo, hi) => {
      const e = Math.max(1, Math.min(Math.round(c) - 1, Math.round(c * (lo + (hi - lo) * r()))));
      const t = add({ type: 'enemy', power: e, sprite: FOE_KINDS[Math.floor(r() * FOE_KINDS.length)] });
      c += e;
      return t;
    };
    if (!roof) {
      const nSmall = 1 + (r() < 0.55 ? 1 : 0) + (n >= 8 && !easy ? 1 : 0);
      for (let i = 0; i < nSmall; i++) foe(0.35, ratioHi * 0.8);
      // treasure: from floor 2 on
      const picks = [];
      if (n >= 2) picks.push(r() < 0.5 ? 'sword' : r() < 0.5 ? 'crystal' : 'potion');
      if (n >= 4 && r() < 0.65) picks.push('mult');
      if (n >= 5 && r() < 0.5) picks.push('keychest');
      if (n >= 3 && r() < 0.35) picks.push(r() < 0.5 ? 'potion' : r() < 0.5 ? 'crystal' : 'sword');
      for (const k of picks) {
        if (k === 'sword') { const a = Math.max(3, Math.round(c * 0.3)); add({ type: 'sword', add: a }); c += a; }
        else if (k === 'potion') { const a = Math.max(2, Math.round(c * 0.2)); add({ type: 'potion', add: a }); c += a; }
        else if (k === 'crystal') { const a = Math.max(3, Math.round(c * 0.25)); add({ type: 'crystal', add: a }); c += a; }
        else if (k === 'mult') { const m = ch.mulMax >= 3 && n >= 8 && r() < 0.4 ? 3 : 2; add({ type: 'mult', mul: m }); c *= m; }
        else if (k === 'keychest') { add({ type: 'key' }); const a = Math.max(4, Math.round(c * 0.45)); add({ type: 'chest', add: a }); c += a; }
      }
      if (kind === 'normal') { foe(0.45, ratioHi); if (n >= 7 && !easy && r() < 0.5) foe(0.5, ratioHi); }
    } else {
      // the roof: one gold coin and the dragon
      add({ type: 'mult', mul: 2 }); c *= 2;
    }
    // bosses: a big foe that needs the order to be right
    if (kind !== 'normal') {
      const f = kind === 'troll' ? 0.78 : kind === 'sorcerer' ? 0.82 : 0.86;
      const p = Math.max(2, Math.floor(c * (easy ? Math.min(f, 0.6) : f)));
      add({ type: 'boss', power: p, sprite: kind });
      c += p;
    }
    // shuffle the positions (not the plan)
    const order = things.map((t, i) => [t, r(), i]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
    floors.push({ n, kind, startP: Math.round(startP), things: order, plan });
  }
  return floors;
}

/** One play of a chapter: the hero's state and every tap. */
export class Tower {
  constructor(ch, seed, easy = false) {
    this.ch = ch;
    this.easy = easy;
    this.floors = buildChapter(ch, seed, easy);
    this.index = 0; // floor index
    this.p = this.floors[0].startP;
    this.p0 = this.p; // power at the start of the floor (a retry comes back to it)
    this.key = false;
    this.gone = new Set();
    this.losses = 0; // foes that won a round, in the whole chapter
    this.state = 'play'; // 'play' | 'climb' | 'done'
  }

  get floor() { return this.floors[this.index]; }
  get total() { return this.floors.length; }
  get left() { return this.floor.things.filter((t) => (t.type === 'enemy' || t.type === 'boss') && !this.gone.has(t.id)).length; }
  isGreen(th) { return (th.type === 'enemy' || th.type === 'boss') && this.p > th.power; }
  /** can the hero still clear this floor? (an earlier floor may have been skipped through) */
  solvable() { return solve(this.p, this.floor.things.filter((t) => !this.gone.has(t.id))).ok; }

  /** Tap a thing: returns { type: 'win'|'lose'|'locked'|'nothing', th, gain, cleared }. */
  tap(id) {
    if (this.state !== 'play') return { type: 'nothing' };
    const th = this.floor.things.find((t) => t.id === id);
    if (!th || this.gone.has(id)) return { type: 'nothing' };
    const res = apply(this.p, this.key, th);
    if (!res) return { type: 'locked', th };
    if (!res.win) { this.losses++; return { type: 'lose', th }; }
    const gain = res.p - this.p;
    this.p = res.p;
    this.key = res.key;
    this.gone.add(id);
    const cleared = this.left === 0;
    if (cleared) this.state = this.index === this.floors.length - 1 ? 'done' : 'climb';
    return { type: 'win', th, gain, cleared };
  }

  /** After the ladder: the next floor. */
  climb() {
    if (this.state !== 'climb') return false;
    this.index++;
    this.gone = new Set();
    this.p0 = this.p;
    this.state = 'play';
    return true;
  }

  /** After a loss: the floor again with the power it started with. */
  retryFloor() {
    this.p = this.p0;
    this.key = false;
    this.gone = new Set();
    this.state = 'play';
  }

  get stars() { return this.losses === 0 ? 3 : this.losses <= 2 ? 2 : 1; }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  const stars = {};
  for (const ch of CHAPTERS) { const v = o.stars && Number(o.stars[ch.id]); if (v >= 1 && v <= 3) stars[ch.id] = Math.floor(v); }
  const unlocked = Math.max(1, Math.min(CHAPTERS.length, Math.max(Math.floor(Number(o.unlocked)) || 1, ...Object.keys(stars).map((k) => Number(k) + 1)))); // a won chapter opens the next
  return { unlocked, stars, muted: !!o.muted, plays: Math.max(0, Math.floor(Number(o.plays)) || 0) };
}
