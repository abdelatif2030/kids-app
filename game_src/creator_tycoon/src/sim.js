// Creator Tycoon with no drawing. A young creator at an AI content company taps PHOTO, VIDEO or GAME; a quality needle swings
// across a bar and the child taps STOP: in the green zone = MASTERPIECE (cash + goal stars), near it = fine, outside = funny AI
// SLOP (goes in the trash, no cash). Star goals promote the creator: intern, junior, lead, art director, VP, board of directors.
// Hot streaks multiply cash, client orders give bonus stars, random events (trend, server lag) shake things up, a shop sells
// upgrades. Nothing is ever lost for good (slop only breaks the streak). Deterministic with a seed.
import { rng, clamp } from '../../cozy_kit/ui.js';

export const RANKS = [
  { id: 'intern', ar: 'متدرّب', en: 'Intern', goal: 8 },
  { id: 'junior', ar: 'مبتدئ', en: 'Junior', goal: 20 },
  { id: 'lead', ar: 'قائد فريق', en: 'Lead', goal: 45 },
  { id: 'art', ar: 'مدير فني', en: 'Art Director', goal: 90 },
  { id: 'vp', ar: 'نائب الرئيس', en: 'VP', goal: 160 },
  { id: 'board', ar: 'مجلس الإدارة', en: 'Board of Directors', goal: 0 },
];
export const KINDS = {
  photo: { ar: 'صورة', en: 'PHOTO', icon: '🖼️', cash: 10, stars: 1, speed: 1.3 },
  video: { ar: 'فيديو', en: 'VIDEO', icon: '🎬', cash: 35, stars: 2, speed: 1.8 },
  game: { ar: 'لعبة', en: 'GAME', icon: '🎮', cash: 90, stars: 4, speed: 2.4 },
};
export const SHOP = [
  { id: 'gpu', ar: 'كارت شاشة أسرع', en: 'Faster GPU', base: 40, grow: 1.7, max: 8, desc: ['إنتاج تلقائي', 'Auto-generates'] },
  { id: 'zone', ar: 'منطقة خضرا أعرض', en: 'Wider green zone', base: 30, grow: 1.6, max: 6, desc: ['سهل تصيب', 'Easier to hit'] },
  { id: 'needle', ar: 'مؤشر أبطأ', en: 'Slower needle', base: 30, grow: 1.6, max: 6, desc: ['وقت أكتر', 'More time'] },
  { id: 'cash', ar: 'عملاء أغنى', en: 'Richer clients', base: 60, grow: 1.9, max: 8, desc: ['كاش أكتر', 'More cash'] },
];

export class Studio {
  constructor(opts = {}) {
    this.rand = rng((opts.seed ?? 3) + 5);
    this.cash = 0;
    this.stars = 0;
    this.rank = 0;
    this.total = 0;
    this.slop = 0;
    this.masterpieces = 0;
    this.streak = 0;
    this.up = { gpu: 0, zone: 0, needle: 0, cash: 0 };
    this.cur = null; // the creation being made: { kind, pos, dir }
    this.zone = { c: 0.5, w: 0.2 };
    this.order = null;
    this.orderT = 14;
    this.event = null; // { id, left }
    this.eventT = 25;
    this.autoT = 0;
    this.time = 0;
    this.events = [];
    this.state = 'play';
  }

  get mult() { return 1 + Math.min(this.streak, 10) * 0.2; }
  get zoneW() { return 0.18 + this.up.zone * 0.04; }
  get needleSpeed() { return Math.max(0.5, (this.cur ? KINDS[this.cur.kind].speed : 1.5) * (1 - this.up.needle * 0.1) * (this.event && this.event.id === 'lag' ? 0.6 : 1)); }
  upgradeCost(id) { const s = SHOP.find((x) => x.id === id); return this.up[id] >= s.max ? null : Math.round(s.base * s.grow ** this.up[id]); }
  buy(id) {
    const c = this.upgradeCost(id);
    if (c === null || this.cash < c) return false;
    this.cash -= c;
    this.up[id] += 1;
    this.events.push({ type: 'buy', id });
    return true;
  }

  /** Start a creation (ignored while one is in progress). */
  make(kind) {
    if (this.cur || this.state !== 'play') return false;
    this.zone = { c: 0.2 + this.rand() * 0.6, w: this.zoneW };
    this.cur = { kind, pos: 0, dir: 1 };
    return true;
  }

  /** Stop the needle. Returns 'master' | 'ok' | 'slop'. */
  stop() {
    const cu = this.cur;
    if (!cu) return null;
    this.cur = null;
    const k = KINDS[cu.kind];
    const d = Math.abs(cu.pos - this.zone.c);
    let res = 'slop';
    if (d <= this.zone.w / 2) res = 'master'; else if (d <= this.zone.w) res = 'ok';
    this._result(cu.kind, res);
    return res;
  }

  _result(kind, res, auto = false) {
    const k = KINDS[kind];
    const trend = this.event && this.event.id === 'trend' ? 2 : 1;
    const cashUp = 1 + this.up.cash * 0.25;
    if (res === 'master') {
      this.streak += 1;
      this.masterpieces += 1;
      const cash = Math.round(k.cash * cashUp * this.mult * trend);
      this.cash += cash;
      this.total += cash;
      let st = k.stars;
      if (this.order && this.order.kind === kind) { this.order.left -= 1; if (this.order.left <= 0) { st += this.order.bonus; this.events.push({ type: 'orderDone', bonus: this.order.bonus }); this.order = null; this.orderT = 10; } }
      this._stars(st);
      this.events.push({ type: 'master', kind, cash, stars: st, auto });
    } else if (res === 'ok') {
      const cash = Math.round(k.cash * cashUp * 0.3 * trend);
      this.cash += cash;
      this.total += cash;
      this.events.push({ type: 'ok', kind, cash });
    } else {
      this.streak = 0;
      this.slop += 1;
      this.events.push({ type: 'slop', kind });
    }
  }

  _stars(n) {
    this.stars += n;
    const r = RANKS[this.rank];
    if (r.goal && this.stars >= r.goal && this.rank < RANKS.length - 1) {
      this.rank += 1;
      this.stars = 0;
      this.events.push({ type: 'promote', rank: this.rank });
      if (this.rank === RANKS.length - 1) { this.state = 'won'; this.events.push({ type: 'won' }); }
    }
  }

  step(dt) {
    this.events = [];
    if (this.state !== 'play') return this.events;
    this.time += dt;
    if (this.cur) {
      this.cur.pos += this.cur.dir * this.needleSpeed * dt;
      if (this.cur.pos >= 1) { this.cur.pos = 1; this.cur.dir = -1; }
      if (this.cur.pos <= 0) { this.cur.pos = 0; this.cur.dir = 1; }
    }
    // the GPU makes small creations by itself (never masterpieces worth stars: only cash)
    if (this.up.gpu > 0) {
      this.autoT += dt;
      const every = 6 / this.up.gpu;
      if (this.autoT >= every) { this.autoT = 0; const c = Math.round(KINDS.photo.cash * (1 + this.up.cash * 0.25) * 0.8); this.cash += c; this.total += c; this.events.push({ type: 'auto', cash: c }); }
    }
    // client orders and random events
    if (!this.order) { this.orderT -= dt; if (this.orderT <= 0) { const kinds = Object.keys(KINDS); this.order = { kind: kinds[Math.floor(this.rand() * 3)], left: 2, total: 2, bonus: 3, time: 40 }; this.events.push({ type: 'order' }); } } else { this.order.time -= dt; if (this.order.time <= 0) { this.order = null; this.orderT = 12; this.events.push({ type: 'orderLate' }); } }
    if (this.event) { this.event.left -= dt; if (this.event.left <= 0) { this.event = null; this.eventT = 30 + this.rand() * 20; this.events.push({ type: 'eventEnd' }); } } else { this.eventT -= dt; if (this.eventT <= 0) { this.event = { id: this.rand() < 0.5 ? 'trend' : 'lag', left: 14 }; this.events.push({ type: 'event', id: this.event.id }); } }
    return this.events;
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { best: Math.max(0, Math.floor(Number(o.best)) || 0), wins: Math.max(0, Math.floor(Number(o.wins)) || 0), muted: !!o.muted };
}
