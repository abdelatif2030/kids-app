// Creator Tycoon with no drawing. Like the owner's video: a quality bar with a needle that ALWAYS swings; you tap PHOTO, VIDEO or
// GAME and the tap is judged where the needle is: green = MASTERPIECE (cash + goal stars; the green zone then jumps), yellow = OK
// (a little cash), red = funny AI SLOP (into the trash, breaks the streak; nothing is lost for good). Fill the star goal for the
// level to be promoted (intern, junior, lead, art director, VP, board). VIDEO unlocks at level 2, GAME at level 3, client orders at
// level 2, hot streaks at level 3, trend/server-lag events at level 4. The shop sells upgrades. Deterministic with a seed.
import { rng } from '../../cozy_kit/ui.js';

export const RANKS = [
  { id: 'intern', ar: 'متدرّب', en: 'Intern', goal: 5 },
  { id: 'junior', ar: 'مبتدئ', en: 'Junior', goal: 10 },
  { id: 'lead', ar: 'قائد فريق', en: 'Lead', goal: 16 },
  { id: 'art', ar: 'مدير فني', en: 'Art Director', goal: 22 },
  { id: 'vp', ar: 'نائب الرئيس', en: 'VP', goal: 30 },
  { id: 'board', ar: 'مجلس الإدارة', en: 'Board of Directors', goal: 0 },
];
export const KINDS = {
  photo: { ar: 'صورة', en: 'PHOTO', icon: '📷', cash: 6, stars: 1, unlock: 0 },
  video: { ar: 'فيديو', en: 'VIDEO', icon: '🎬', cash: 20, stars: 2, unlock: 1 },
  game: { ar: 'لعبة', en: 'GAME', icon: '🎮', cash: 60, stars: 3, unlock: 2 },
};
export const SHOP = [
  { id: 'gpu', ar: 'كارت شاشة أسرع', en: 'Faster GPU', base: 40, grow: 1.7, max: 8, desc: ['إنتاج تلقائي', 'Auto-generates'] },
  { id: 'zone', ar: 'منطقة خضرا أعرض', en: 'Wider green zone', base: 30, grow: 1.6, max: 6, desc: ['سهل تصيب', 'Easier to hit'] },
  { id: 'needle', ar: 'مؤشر أبطأ', en: 'Slower needle', base: 30, grow: 1.6, max: 6, desc: ['وقت أكتر', 'More time'] },
  { id: 'cash', ar: 'عملاء أغنى', en: 'Richer clients', base: 60, grow: 1.9, max: 8, desc: ['كاش أكتر', 'More cash'] },
];
// what a promotion unlocks (shown on the promotion window)
export const UNLOCKS = [[], ['video', 'orders'], ['game', 'hot'], ['events'], [], []];
const ORDERS = [null, { kind: 'video', n: 3 }, { kind: 'game', n: 2 }, { kind: 'photo', n: 3 }, { kind: 'video', n: 3 }];

export class Studio {
  constructor(opts = {}) {
    this.rand = rng((opts.seed ?? 3) + 5);
    this.cash = 0; this.stars = 0; this.rank = 0; this.total = 0; this.slop = 0; this.masterpieces = 0; this.streak = 0;
    this.up = { gpu: 0, zone: 0, needle: 0, cash: 0 };
    this.needle = { pos: 0.1, dir: 1 };
    this.zone = { c: 0.5, w: this.zoneW };
    this.order = null; this.orderT = 8;
    this.event = null; this.eventT = 20;
    this.autoT = 0; this.time = 0;
    this.events = [];
    this.state = 'play';
    this.promo = false; // promotion window open: the game waits for "next level"
    this.moveZone();
  }

  get hot() { return this.rank >= 2 && this.streak >= 3; }
  get mult() { return this.hot ? 2 : 1; }
  get zoneW() { return 0.2 + this.up.zone * 0.035; }
  get needleSpeed() { return Math.max(0.5, (0.9 + this.rank * 0.18) * (1 - this.up.needle * 0.08) * (this.event && this.event.id === 'lag' ? 0.6 : 1)); }
  get goal() { return RANKS[this.rank].goal; }
  unlocked(kind) { return this.rank >= KINDS[kind].unlock; }
  upgradeCost(id) { const s = SHOP.find((x) => x.id === id); return this.up[id] >= s.max ? null : Math.round(s.base * s.grow ** this.up[id]); }
  buy(id) {
    const c = this.upgradeCost(id);
    if (c === null || this.cash < c) return false;
    this.cash -= c; this.up[id] += 1;
    return true;
  }
  moveZone() { this.zone = { c: 0.2 + this.rand() * 0.6, w: this.zoneW }; }
  starsFor(kind) { return KINDS[kind].stars * (this.event && this.event.id === 'trend' && this.event.kind === kind ? 2 : 1); }
  /** Take (and clear) what happened since the last call, for the screen to show. */
  drain() { const e = this.events; this.events = []; return e; }

  /** Tap PHOTO/VIDEO/GAME: judged where the needle is now. Returns 'perfect' | 'master' | 'ok' | 'slop' | null (locked/paused). */
  tap(kind) {
    if (this.state !== 'play' || this.promo || !KINDS[kind] || !this.unlocked(kind)) return null;
    const d = Math.abs(this.needle.pos - this.zone.c);
    let res = 'slop';
    if (d <= this.zone.w * 0.12) res = 'perfect'; else if (d <= this.zone.w / 2) res = 'master'; else if (d <= this.zone.w) res = 'ok';
    this._result(kind, res);
    return res;
  }

  _result(kind, res) {
    const k = KINDS[kind];
    const cashUp = 1 + this.up.cash * 0.25;
    if (res === 'master' || res === 'perfect') {
      this.streak += 1; this.masterpieces += 1;
      const cash = Math.round(k.cash * cashUp * this.mult * (res === 'perfect' ? 1.5 : 1));
      this.cash += cash; this.total += cash;
      let st = this.starsFor(kind);
      if (this.order && this.order.kind === kind) {
        this.order.left -= 1;
        if (this.order.left <= 0) { st += this.order.bonus; this.events.push({ type: 'orderDone', bonus: this.order.bonus }); this.order = null; this.orderT = 10; }
      }
      this.events.push({ type: res, kind, cash, stars: st });
      this.moveZone();
      this._stars(st);
    } else if (res === 'ok') {
      const cash = Math.max(1, Math.round(k.cash * cashUp * 0.3));
      this.cash += cash; this.total += cash;
      this.events.push({ type: 'ok', kind, cash });
    } else {
      this.streak = 0; this.slop += 1;
      this.events.push({ type: 'slop', kind });
    }
  }

  _stars(n) {
    this.stars += n;
    if (this.goal && this.stars >= this.goal && this.rank < RANKS.length - 1) {
      this.rank += 1; this.stars = 0; this.promo = true;
      this.events.push({ type: 'promote', rank: this.rank });
      if (this.rank === RANKS.length - 1) { this.state = 'won'; this.promo = false; this.events.push({ type: 'won' }); }
    }
  }

  /** Close the promotion window ("Next level"). */
  next() { this.promo = false; this.order = null; this.orderT = 6; this.zone.w = this.zoneW; }

  step(dt) {
    if (this.state !== 'play' || this.promo) return;
    this.time += dt;
    const n = this.needle;
    n.pos += n.dir * this.needleSpeed * dt;
    if (n.pos >= 1) { n.pos = 1; n.dir = -1; } else if (n.pos <= 0) { n.pos = 0; n.dir = 1; }
    this.zone.w = this.zoneW;
    if (this.up.gpu > 0) {
      this.autoT += dt;
      if (this.autoT >= 6 / this.up.gpu) { this.autoT = 0; const c = Math.round(KINDS.photo.cash * (1 + this.up.cash * 0.25)); this.cash += c; this.total += c; this.events.push({ type: 'auto', cash: c }); }
    }
    // client orders from level 2 (timed; a missed order just leaves)
    const od = ORDERS[Math.min(this.rank, 4)];
    if (this.rank >= 1 && od) {
      if (!this.order) { this.orderT -= dt; if (this.orderT <= 0) { this.order = { kind: od.kind, left: od.n, total: od.n, bonus: 3, time: 20, max: 20 }; this.events.push({ type: 'order' }); } }
      else { this.order.time -= dt; if (this.order.time <= 0) { this.order = null; this.orderT = 12; this.events.push({ type: 'orderLate' }); } }
    }
    // random events from level 4
    if (this.rank >= 3) {
      if (this.event) { this.event.left -= dt; if (this.event.left <= 0) { this.event = null; this.eventT = 20 + this.rand() * 15; this.events.push({ type: 'eventEnd' }); } }
      else { this.eventT -= dt; if (this.eventT <= 0) { const trend = this.rand() < 0.65; this.event = trend ? { id: 'trend', kind: ['photo', 'video', 'game'][Math.floor(this.rand() * 3)], left: 8 } : { id: 'lag', left: 10 }; this.events.push({ type: 'event', id: this.event.id }); } }
    }
  }
}

export function normalizeSave(s) {
  const o = s && typeof s === 'object' ? s : {};
  return { best: Math.max(0, Math.floor(Number(o.best)) || 0), wins: Math.max(0, Math.floor(Number(o.wins)) || 0), muted: !!o.muted };
}
