// Recorded voice for the learning games (owner 2026-11-12: the device's reading voice is not good enough).
// Every sentence a game says has an id (a hash of its language and words). When a recorded clip for that id is bundled
// (assets/games/learn_voice/<lang>/<id>.mp3, listed in manifest.js), the game plays the recording; only when there is
// none does it fall back to the app's device voice. Clips are made with tools/game_voice (a neural voice or a person's
// own recordings). One clip at a time; several sentences are said one after the other.

/** The words as they are said: no emoji or symbols, single spaces. Used for the id and for the fallback voice. */
export function spoken(text) {
  return String(text)
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2190}-\u{21FF}\u{25A0}-\u{25FF}⭐]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Stable id of a sentence: FNV-1a over "<lang>|<spoken text>", 8 hex digits. */
export function clipId(text, lang) {
  const s = `${lang === 'en' ? 'en' : 'ar'}|${spoken(text)}`;
  let h = 0x811c9dc5;
  for (const ch of new TextEncoder().encode(s)) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}

export class Voice {
  /** [base] is the game's folder URL; [fallback](text, lang) speaks with the device voice; [onTalk](secs) ducks the music. */
  constructor(base, lang, fallback, onTalk) {
    this.dir = `${base}../learn_voice/`;
    this.lang = lang === 'en' ? 'en' : 'ar';
    this.fallback = fallback;
    this.onTalk = onTalk || (() => {});
    this.queue = [];
    this.audio = null;
    this.muted = false;
    // the list of bundled clips, as a script (works from a bundled page too)
    if (typeof document !== 'undefined' && !window.__learnVoice && !document.getElementById('learn-voice-manifest')) {
      const sc = document.createElement('script');
      sc.id = 'learn-voice-manifest';
      sc.src = `${this.dir}manifest.js`;
      sc.onerror = () => { window.__learnVoice = window.__learnVoice || { ar: [], en: [] }; };
      document.head.append(sc);
    }
  }

  has(text) {
    const m = typeof window !== 'undefined' && window.__learnVoice;
    return !!(m && m[this.lang] && m[this.lang].includes(clipId(text, this.lang)));
  }

  /**
   * Says one sentence or several in order. A new call replaces whatever was being said.
   * [onEach](i) is called as sentence i starts (a game lights the matching thing up); [onDone]() when the last one ends.
   */
  say(texts, onEach, onDone) {
    this.stop();
    this.queue = (Array.isArray(texts) ? texts : [texts]).map(spoken).filter(Boolean);
    this.i = 0;
    this.onEach = onEach || null;
    this.onDone = onDone || null;
    this.run = (this.run || 0) + 1;
    if (!this.queue.length && this.onDone) this.onDone();
    else this._next();
  }

  _finish() {
    const d = this.onDone;
    this.onDone = null;
    if (d) d();
  }

  _start(i) { if (this.onEach) this.onEach(i); }

  _next(tries = 0) {
    if (this.muted) { this._finish(); return; }
    if (!this.queue.length) { this._finish(); return; }
    // the list of clips is still loading: wait a moment (at most a second) before choosing clip or device voice
    if (typeof window !== 'undefined' && !window.__learnVoice && tries < 8) {
      const mine = this.queue;
      setTimeout(() => { if (this.queue === mine) this._next(tries + 1); }, 130);
      return;
    }
    const text = this.queue.shift();
    if (!this.has(text)) {
      // no recording: the device voice says this one and whatever is left, as one sentence
      const all = [text, ...this.queue];
      const rest = all.join(this.lang === 'en' ? ', ' : '، ');
      this.queue = [];
      this.onTalk(Math.min(8, 1.2 + rest.length * 0.09));
      this.fallback(rest, this.lang);
      // the device voice speaks it as one sentence: the things light up at an even pace meanwhile, then it is done
      const per = Math.max(600, Math.min(1100, (rest.length * 90) / all.length));
      const run = this.run;
      all.forEach((_, k) => setTimeout(() => { if (run === this.run) this._start(this.i + k); }, k * per));
      setTimeout(() => { if (run === this.run) this._finish(); }, all.length * per + 300);
      return;
    }
    this._start(this.i++);
    const a = new Audio(`${this.dir}${this.lang}/${clipId(text, this.lang)}.mp3`);
    this.audio = a;
    a.addEventListener('loadedmetadata', () => this.onTalk((a.duration || 2) + 0.3));
    a.addEventListener('ended', () => { if (this.audio === a) { this.audio = null; this._next(); } });
    a.addEventListener('error', () => { if (this.audio === a) { this.audio = null; this.onTalk(Math.min(6, 1.2 + text.length * 0.09)); this.fallback(text, this.lang); this._next(); } });
    this.onTalk(2.5);
    const p = a.play();
    if (p && p.catch) p.catch(() => { /* not allowed yet: the text is on screen anyway */ });
  }

  stop() {
    this.run = (this.run || 0) + 1; // anything still waiting from the last call is dropped
    this.queue = [];
    this.onDone = null;
    if (this.audio) { try { this.audio.pause(); } catch (_) { /* fine */ } this.audio = null; }
  }
}
