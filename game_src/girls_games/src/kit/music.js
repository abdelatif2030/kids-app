// Interactive music of the girls' world (replaces the spoken voice, owner 2026-11-22): everything is made with the Web Audio API, no files.
//  - a soft music-box tune loops quietly in the background;
//  - every tap/reward plays the NEXT note of a pentatonic scale (so a child "plays" a little melody just by doing things; it cannot sound wrong);
//  - finishing something plays a happy rising arpeggio and the background tune gets a fuller chord for a moment.
// Starts only after a tap (phones refuse sound before), stops when the page is hidden, never throws.
const MID = (m) => 440 * Math.pow(2, (m - 69) / 12);
const SCALE = [60, 62, 64, 67, 69, 72, 74, 76, 79]; // C major pentatonic (C D E G A c d e g)
const TUNE = [ // a slow lullaby-like loop: [midi or null, beats]
  [72, 1], [76, 1], [79, 1], [76, 1], [74, 1], [72, 1], [67, 2],
  [69, 1], [72, 1], [76, 1], [72, 1], [71, 1], [67, 1], [64, 2],
  [65, 1], [69, 1], [72, 1], [69, 1], [67, 1], [64, 1], [60, 2],
  [62, 1], [67, 1], [71, 1], [67, 1], [72, 2], [null, 2],
];

class GirlsMusic {
  constructor() { this.ctx = null; this.muted = false; this.step = 0; this.timer = null; this.boost = 0; this.idx = 0; this.dir = 1; this.mode = 'off'; this.nextT = 0; this.i = 0; }

  /** Call inside a tap: creates/resumes the audio context. */
  unlock() {
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        this.ctx = new AC();
        this.master = this.ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.9; this.master.connect(this.ctx.destination);
        document.addEventListener('visibilitychange', () => { if (document.hidden) this.pauseAmbient(); else if (this.mode !== 'off') this.ambient(this.mode); });
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (_) { /* no sound is fine */ }
  }

  setMuted(m) { this.muted = !!m; if (this.master) this.master.gain.value = m ? 0 : 0.9; }

  _note(midi, t, dur, gain, type = 'sine') {
    const c = this.ctx; if (!c || this.muted) return;
    const o = c.createOscillator(); const g = c.createGain();
    o.type = type; o.frequency.value = MID(midi);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
    // a bell overtone (an octave and a fifth up, softer and shorter)
    const o2 = c.createOscillator(); const g2 = c.createGain();
    o2.type = 'triangle'; o2.frequency.value = MID(midi + 19);
    g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime(gain * 0.35, t + 0.01); g2.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.5);
    o2.connect(g2); g2.connect(this.master); o2.start(t); o2.stop(t + dur * 0.5 + 0.05);
  }

  /** A reward: the next note of the scale, going up and down like a little melody. */
  tap() {
    this.unlock(); if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.01;
    this._note(SCALE[this.idx], t, 0.9, 0.2);
    this.idx += this.dir;
    if (this.idx >= SCALE.length - 1) this.dir = -1; else if (this.idx <= 0) this.dir = 1;
  }

  /** A pot planted, a button chosen: a softer single bell (not part of the melody). */
  pop() {
    this.unlock(); if (!this.ctx) return;
    this._note(SCALE[(this.idx + 3) % SCALE.length] + 12, this.ctx.currentTime + 0.01, 0.35, 0.09);
  }

  /** Something finished: a happy rising arpeggio, and the background gets fuller for a while. */
  success() {
    this.unlock(); if (!this.ctx) return;
    const t0 = this.ctx.currentTime + 0.02;
    [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => this._note(m, t0 + i * 0.11, 0.7, 0.18));
    this._note(72, t0 + 0.9, 1.6, 0.1, 'triangle'); this._note(76, t0 + 0.9, 1.6, 0.08, 'triangle'); this._note(79, t0 + 0.9, 1.6, 0.08, 'triangle');
    this.boost = 6;
  }

  /** The quiet background tune. mode 'hub' a little louder, 'play' quieter. */
  ambient(mode = 'play') {
    this.mode = mode; this.unlock(); if (!this.ctx || this.timer) return;
    this.nextT = this.ctx.currentTime + 0.1; this.i = 0;
    const tick = () => {
      const c = this.ctx; if (!c) return;
      while (this.nextT < c.currentTime + 0.4) {
        const beat = 60 / 76;
        const [m, b] = TUNE[this.i % TUNE.length];
        const vol = (this.mode === 'hub' ? 0.07 : 0.045) * (this.boost > 0 ? 1.5 : 1);
        if (m) { this._note(m - 12, this.nextT, b * beat * 1.4, vol); if (this.boost > 0) this._note(m, this.nextT, b * beat, vol * 0.5, 'triangle'); }
        // a soft pad chord at the start of each phrase
        if (this.i % 7 === 0) { [48, 52, 55].forEach((p) => this._note(p, this.nextT, beat * 5, vol * 0.5, 'sine')); }
        if (this.boost > 0 && this.i % 2 === 0) this.boost -= 1;
        this.nextT += b * beat; this.i += 1;
      }
    };
    this.timer = setInterval(tick, 200); tick();
  }

  pauseAmbient() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
  stopAmbient() { this.mode = 'off'; this.pauseAmbient(); }
}

export const music = new GirlsMusic();
export { SCALE, TUNE };
