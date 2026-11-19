// Pearl Divers with no drawing. Like the owner's video: a cut-away of a tropical lagoon with ledges stacked downward. Tap to send the
// diver down to open a clam; he carries the pearl to the basket, the diving bell lifts the basket to your boat where it is sold.
// Per ledge the shop has three buttons: HIRE (another diver who works by himself), UPGRADE x3 (pearls on that ledge worth three
// times more) and, below the last ledge, NEW LEDGE (a deeper ledge with richer pearls). Your wealth races a bar up to the rival's
// fortune (the rival on the yacht): reach it to win. Nothing is lost for good. Deterministic enough for a robot test.
import { rng } from '../../cozy_kit/ui.js';

export const LEDGES = [
  { id: 'shallows', ar: 'المياه الضحلة', en: 'Shallows', pearl: 100, open: 0, hire: 1500, up: 2400, clam: 1.4 },
  { id: 'reef', ar: 'الشعاب', en: 'Coral Reef', pearl: 520, open: 3000, hire: 9000, up: 12000, clam: 1.7 },
  { id: 'cave', ar: 'كهف اللآلئ', en: 'Pearl Cave', pearl: 2600, open: 16000, hire: 45000, up: 60000, clam: 2.0 },
  { id: 'abyss', ar: 'الأعماق', en: 'The Deep', pearl: 13000, open: 80000, hire: 220000, up: 300000, clam: 2.4 },
];
export const RIVAL_GOAL = 1500000; // the rival's fortune: the bar target ($1.50M in the video)
export const MAX_HIRE = 4;
export const MAX_UP = 4;
export const BELL_TIME = 2.4;

export class Lagoon {
  constructor(opts = {}) {
    this.rand = rng((opts.seed ?? 3) + 7);
    this.cash = 0;
    this.earned = 0;
    this.areas = LEDGES.map((d, i) => ({ ...d, isOpen: i === 0, hired: 0, upLvl: 0, divers: [], basket: 0, bellT: 0, bellLoad: 0, bellPhase: 'down', boost: 0 }));
    for (const a of this.areas) this._fixDivers(a);
    this.time = 0;
    this.events = [];
    this.state = 'play';
    this.taps = 0;
  }

  _fixDivers(a) {
    // diver 0 is yours (waits for a tap); each hire adds one who works by himself
    while (a.divers.length < 1 + a.hired) a.divers.push({ phase: 'down', t: a.divers.length === 0 ? 0 : this.rand() * 1.2, has: false, auto: a.divers.length > 0 });
  }

  mult(a) { return 3 ** a.upLvl; }
  get openCount() { return this.areas.filter((a) => a.isOpen).length; }
  /** The next ledge that can still be opened (below the last open one). */
  get nextLedge() { return this.areas.find((a) => !a.isOpen) || null; }
  cost(kind, id) {
    const a = this.areas.find((x) => x.id === id);
    if (!a) return null;
    if (kind === 'area') return a.isOpen ? null : a.open;
    if (!a.isOpen) return null;
    if (kind === 'hire') return a.hired >= MAX_HIRE ? null : Math.round(a.hire * 2.2 ** a.hired);
    if (kind === 'up') return a.upLvl >= MAX_UP ? null : Math.round(a.up * 4 ** a.upLvl);
    return null;
  }
  buy(kind, id) {
    const c = this.cost(kind, id);
    if (c === null || this.cash < c) return false;
    const a = this.areas.find((x) => x.id === id);
    this.cash -= c;
    if (kind === 'area') a.isOpen = true; else if (kind === 'hire') { a.hired += 1; this._fixDivers(a); } else a.upLvl += 1;
    this.events.push({ type: 'buy', kind, id, mult: kind === 'up' ? 3 : 1 });
    return true;
  }

  /** A tap on a ledge (or anywhere = the deepest open one): the diver dives, faster for 2.5 s. */
  tap(id) {
    const open = this.areas.filter((x) => x.isOpen);
    const a = id ? this.areas.find((x) => x.id === id) : open[open.length - 1];
    if (!a || !a.isOpen || this.state !== 'play') return false;
    a.boost = 2.5;
    this.taps += 1;
    this.events.push({ type: 'tap', id: a.id });
    return true;
  }
  drain() { const e = this.events; this.events = []; return e; }

  step(dt) {
    if (this.state !== 'play') return;
    this.time += dt;
    for (const a of this.areas) {
      if (!a.isOpen) continue;
      a.boost = Math.max(0, a.boost - dt);
      for (const d of a.divers) {
        if (!d.auto && d.phase === 'down' && a.boost <= 0) continue; // your diver waits for a tap
        const speed = d.auto ? 1 : (a.boost > 0 ? 2.2 : 1);
        d.t += dt * speed;
        if (d.phase === 'down' && d.t >= a.clam) { d.phase = 'up'; d.t = 0; d.has = true; this.events.push({ type: 'clam', id: a.id }); } else if (d.phase === 'up' && d.t >= 1.1) { a.basket += 1; d.phase = 'down'; d.t = 0; d.has = false; }
      }
      // the diving bell carries the basket up, the boat sells it
      if (a.bellPhase === 'down') { if (a.basket > 0) { a.bellLoad = a.basket; a.basket = 0; a.bellPhase = 'up'; a.bellT = 0; } } else if (a.bellPhase === 'up') {
        a.bellT += dt;
        if (a.bellT >= BELL_TIME) {
          const cash = Math.round(a.bellLoad * a.pearl * this.mult(a));
          this.cash += cash; this.earned += cash;
          this.events.push({ type: 'sold', cash, id: a.id });
          a.bellLoad = 0; a.bellPhase = 'back'; a.bellT = 0;
        }
      } else if (a.bellPhase === 'back') { a.bellT += dt; if (a.bellT >= BELL_TIME * 0.6) a.bellPhase = 'down'; }
    }
    if (this.earned >= RIVAL_GOAL) { this.state = 'won'; this.events.push({ type: 'won' }); }
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { wins: Math.max(0, Math.floor(Number(o.wins)) || 0), best: Math.max(0, Math.floor(Number(o.best)) || 0), muted: !!o.muted };
}
