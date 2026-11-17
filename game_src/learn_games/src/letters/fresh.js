// Freshness for the learning world (pure, no DOM): the child should meet NEW things each time, and a level should not
// repeat what the level before it just showed. This is only a memory of picture/number keys per child (kept in the
// game's own save, on the device); it never scores the child and nothing is lost by repeating.
//
// A "key" names the thing a question is about: `t:<picture>` (a picture word), `n:<number>`, `l:<letter>`, `c:<colour>`.
// Order of preference when a level picks its questions:
//   1. this week's spotlight things that the child has not met yet (a few new ones every week, by calendar),
//   2. anything not met yet,
//   3. things met before, the oldest first,
//   4. things the PREVIOUS level just showed (last, so two levels in a row differ).

const MAX_SEEN = 1500; // keys remembered (the whole bank of things plus a cycle or two)
const SPOT = 12;      // one thing in twelve is "this week's spotlight"

/** The calendar week number (7-day blocks since 1970); the spotlight changes when it changes. */
export const weekOf = (ms = Date.now()) => Math.floor(ms / (7 * 86400000));

const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
/** True when the key is one of this week's spotlight things. */
export const isSpotlight = (key, week) => hash(`${week}|${key}`) % SPOT === 0;

export class FreshMemory {
  /** @param data what toJSON() returned earlier (or nothing); @param week test hook, defaults to this calendar week */
  constructor(data, week = weekOf()) {
    const d = data && typeof data === 'object' ? data : {};
    this.week = week;
    this.seen = d.seen && typeof d.seen === 'object' ? { ...d.seen } : {};
    this.tick = Number.isFinite(d.tick) ? d.tick : 0;
    this.cur = { level: d.cur && d.cur.level || null, keys: Array.isArray(d.cur && d.cur.keys) ? [...d.cur.keys] : [] };
    this.prev = Array.isArray(d.prev) ? [...d.prev] : [];
  }

  /** A level starts. Playing a different level than last time makes the last level's things the "avoid" set. */
  begin(levelId) {
    if (this.cur.level !== levelId) {
      if (this.cur.level) this.prev = this.cur.keys;
      this.cur = { level: levelId, keys: [] };
    }
  }

  /** A question about `key` was answered right. */
  note(key) {
    if (!key) return;
    this.seen[key] = ++this.tick;
    if (!this.cur.keys.includes(key)) this.cur.keys.push(key);
    this._prune();
  }

  _prune() {
    const keys = Object.keys(this.seen);
    if (keys.length <= MAX_SEEN) return;
    keys.sort((a, b) => this.seen[a] - this.seen[b]);
    for (const k of keys.slice(0, keys.length - MAX_SEEN)) delete this.seen[k];
  }

  /** The preference score of a key: lower is shown first. */
  score(key) {
    if (this.prev.includes(key)) return 1e12;
    const s = this.seen[key];
    if (s) return s;
    return isSpotlight(key, this.week) ? -1 : 0;
  }

  /** `arr` in a fresh order: shuffled, then stably sorted by score (so equal scores stay random). `r` is a 0..1 generator. */
  order(arr, keyOf, r) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.map((x) => [this.score(keyOf(x)), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
  }

  toJSON() { return { seen: this.seen, tick: this.tick, cur: this.cur, prev: this.prev }; }
}
