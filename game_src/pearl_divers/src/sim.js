// Pearl Divers with no drawing. An idle business in a tropical lagoon: tap to send divers down to open clams, they carry pearls
// to the collection basket, a diving bell lifts the pearls to your boat where they are sold. Tapping boosts production for a
// moment. Cash buys managers (they automate a depth), upgrades (more divers, pearl value, faster bell) and deeper areas with
// more valuable pearls. A rich rival on a yacht earns in the background: your goal is to overtake the rival's wealth.
// Nothing is lost for good. Deterministic enough for a robot test.
import { rng } from '../../cozy_kit/ui.js';

export const DEPTHS = [
  { id: 'shallows', ar: 'المياه الضحلة', en: 'Shallows', pearl: 3, unlock: 0, manager: 40, clam: 1.4 },
  { id: 'reef', ar: 'الشعاب', en: 'Coral Reef', pearl: 12, unlock: 150, manager: 220, clam: 1.8 },
  { id: 'cave', ar: 'كهف اللآلئ', en: 'Pearl Cave', pearl: 45, unlock: 900, manager: 1200, clam: 2.3 },
  { id: 'abyss', ar: 'الأعماق', en: 'The Deep', pearl: 160, unlock: 5000, manager: 6000, clam: 3.0 },
];
export const UPGRADES = [
  { id: 'divers', ar: 'غوّاص إضافي', en: 'Extra diver', base: 25, grow: 1.5, max: 10 },
  { id: 'value', ar: 'لؤلؤ أغلى', en: 'Pearl value', base: 40, grow: 1.7, max: 12 },
  { id: 'bell', ar: 'جرس أسرع', en: 'Faster bell', base: 60, grow: 1.8, max: 8 },
];
export const RIVAL_GOAL = 15000;

export class Lagoon {
  constructor(opts = {}) {
    this.rand = rng((opts.seed ?? 3) + 7);
    this.cash = 0;
    this.earned = 0;
    this.up = { divers: 0, value: 0, bell: 0 };
    this.areas = DEPTHS.map((d, i) => ({ ...d, open: i === 0, manager: false, divers: [], basket: 0, bellT: 0, bellLoad: 0, bellPhase: 'down', boost: 0 }));
    for (const a of this.areas) this._fixDivers(a);
    this.rival = 0;
    this.rivalRate = 30; // $/s growing
    this.time = 0;
    this.events = [];
    this.state = 'play';
    this.taps = 0;
  }

  _fixDivers(a) {
    const want = 1 + this.up.divers;
    while (a.divers.length < want) a.divers.push({ phase: 'down', t: this.rand() * 1.5, has: false });
  }

  get pearlValue() { return 1 + this.up.value * 0.5; }
  get bellTime() { return Math.max(1.2, 3.2 - this.up.bell * 0.22); }
  cost(kind, id) {
    if (kind === 'up') { const u = UPGRADES.find((x) => x.id === id); return this.up[id] >= u.max ? null : Math.round(u.base * u.grow ** this.up[id]); }
    const a = this.areas.find((x) => x.id === id);
    if (kind === 'area') return a.open ? null : a.unlock;
    if (kind === 'manager') return a.manager || !a.open ? null : a.manager === false ? DEPTHS.find((d) => d.id === id).manager : null;
    return null;
  }
  buy(kind, id) {
    const c = this.cost(kind, id);
    if (c === null || this.cash < c) return false;
    this.cash -= c;
    if (kind === 'up') { this.up[id] += 1; for (const a of this.areas) this._fixDivers(a); } else if (kind === 'area') this.areas.find((x) => x.id === id).open = true;
    else this.areas.find((x) => x.id === id).manager = true;
    this.events.push({ type: 'buy', kind, id });
    return true;
  }

  /** A tap on an area (or anywhere = the first open one): boosts its production for 2.5 s. */
  tap(id) {
    const a = id ? this.areas.find((x) => x.id === id) : this.areas.filter((x) => x.open)[0];
    if (!a || !a.open) return false;
    a.boost = 2.5;
    this.taps += 1;
    this.events.push({ type: 'tap', id: a.id });
    return true;
  }

  step(dt) {
    this.events = [];
    if (this.state !== 'play') return this.events;
    this.time += dt;
    this.rivalRate += dt * 1.1;
    this.rival += this.rivalRate * dt;
    for (const a of this.areas) {
      if (!a.open) continue;
      const active = a.manager || a.boost > 0;
      a.boost = Math.max(0, a.boost - dt);
      const speed = (a.boost > 0 ? 2.2 : 1) * (a.manager ? 1 : 1);
      for (const d of a.divers) {
        if (!active && d.phase === 'down' && d.t >= a.clam) continue; // waits for a tap
        d.t += dt * speed;
        if (d.phase === 'down' && d.t >= a.clam) { d.phase = 'up'; d.t = 0; d.has = true; this.events.push({ type: 'clam', id: a.id }); } else if (d.phase === 'up' && d.t >= 1.1) { a.basket += 1; d.phase = 'down'; d.t = 0; d.has = false; }
      }
      // the diving bell carries the basket up, the boat sells it
      if (a.bellPhase === 'down') { if (a.basket > 0) { a.bellLoad = a.basket; a.basket = 0; a.bellPhase = 'up'; a.bellT = 0; } } else if (a.bellPhase === 'up') {
        a.bellT += dt;
        if (a.bellT >= this.bellTime) {
          const cash = Math.round(a.bellLoad * a.pearl * this.pearlValue);
          this.cash += cash; this.earned += cash;
          this.events.push({ type: 'sold', cash, id: a.id });
          a.bellLoad = 0; a.bellPhase = 'back'; a.bellT = 0;
        }
      } else if (a.bellPhase === 'back') { a.bellT += dt; if (a.bellT >= this.bellTime * 0.6) a.bellPhase = 'down'; }
    }
    if (this.earned >= this.rival && this.earned >= RIVAL_GOAL) { this.state = 'won'; this.events.push({ type: 'won' }); }
    return this.events;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { wins: Math.max(0, Math.floor(Number(o.wins)) || 0), best: Math.max(0, Math.floor(Number(o.best)) || 0), muted: !!o.muted };
}
