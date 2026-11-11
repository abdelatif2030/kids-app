import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Playful treetop sound, made live with Web Audio (no files): a bouncy marimba tune over plucked bass, bongos and a
// shaker that speed up in the last seconds; birds on the menu. Effects: wooden footsteps, jump and land, a big spring
// "boing" on the mushrooms, a slide whistle, a snatch with a sparkle when the dino grabs the tail, a sad "aww" when it
// is taken, countdown beeps, the last-ten-seconds ticks and a win or try-again tune. Gentle volumes behind a limiter;
// one button mutes everything; the iPhone/iPad sound safeguards are shared with the other games (ios_audio.js).
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// C major: C - Am - F - G - C - Am - Dm - G (one bar each)
const BARS = [[36, [60, 64, 67]], [45, [60, 64, 69]], [41, [60, 65, 69]], [43, [59, 62, 67]], [36, [60, 64, 67]], [45, [60, 64, 69]], [38, [62, 65, 69]], [43, [59, 62, 67]]];
// melody: [bar, sixteenth, midi]
const MELODY = [
  [0, 0, 79], [0, 3, 76], [0, 6, 79], [0, 10, 81], [1, 0, 79], [1, 6, 76], [1, 10, 72],
  [2, 0, 77], [2, 3, 76], [2, 6, 74], [2, 10, 72], [3, 0, 74], [3, 6, 79],
  [4, 0, 84], [4, 3, 83], [4, 6, 81], [4, 10, 79], [5, 0, 76], [5, 6, 79], [6, 0, 77], [6, 6, 74], [6, 10, 77], [7, 0, 79], [7, 8, 83],
];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.plucks = new Map();
  }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(this.ctx, () => !!(this.held || this._held));
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.4;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.8;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.8);
      delay.delayTime.value = 0.36;
      const fb = c.createGain();
      fb.gain.value = 0.22;
      const wet = c.createGain();
      wet.gain.value = 0.18;
      this.music.connect(delay);
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      this._timer = setInterval(() => this._schedule(), 30);
      if (this.mode !== 'off') this.setMode(this.mode, true);
    }
    if (this.ctx.state !== 'running' && !this.held) {
      this._silentTick();
      this._mediaKick();
      this.ctx.resume();
    }
  }

  get on() { return !!this.ctx && this.ctx.state === 'running'; }

  _silentTick() {
    try {
      const c = this.ctx;
      const src = c.createBufferSource();
      src.buffer = c.createBuffer(1, 1, c.sampleRate);
      src.connect(c.destination);
      src.start(0);
    } catch (_) { /* fine */ }
  }

  _mediaKick() {
    if (this._kicked) return;
    try {
      // a tiny silent wav: some phone browsers only open game sound after a normal audio element played once
      const a = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA');
      a.volume = 0.01;
      const p = a.play();
      if (p && p.then) p.then(() => { this._kicked = true; }).catch(() => {});
    } catch (_) { /* fine */ }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }
  suspend() {
    iosPause(); this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() {
    iosKeepAlive(); this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.tempo = mode === 'play' ? 118 : 100;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

  _pluckBuffer(m) {
    if (this.plucks.has(m)) return this.plucks.get(m);
    const c = this.ctx;
    const sr = c.sampleRate;
    const len = Math.floor(sr * 1.2);
    const buf = c.createBuffer(1, len, sr);
    const out = buf.getChannelData(0);
    const period = Math.max(2, Math.round(sr / hz(m)));
    const ring = new Float32Array(period);
    for (let i = 0; i < period; i++) ring[i] = (Math.random() * 2 - 1) * 0.6;
    let idx = 0;
    for (let i = 0; i < len; i++) {
      const next = (idx + 1) % period;
      const v = (ring[idx] + ring[next]) * 0.5 * 0.993;
      out[i] = ring[idx];
      ring[idx] = v;
      idx = next;
    }
    this.plucks.set(m, buf);
    return buf;
  }

  pluck(m, t, vol = 0.25, dest = this.music) {
    const s = this.ctx.createBufferSource();
    s.buffer = this._pluckBuffer(m);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1400;
    const g = this.ctx.createGain();
    g.gain.value = vol;
    s.connect(lp).connect(g).connect(dest);
    s.start(t);
    s.stop(t + 1.2);
  }

  /** A wooden marimba bar: a sine with a quick knock and a soft 4th partial. */
  marimba(m, t, vol = 0.12, dest = this.music) {
    this._tone('sine', hz(m), t, 0.45, vol, dest, 0.002);
    this._tone('sine', hz(m) * 3.93, t, 0.08, vol * 0.35, dest, 0.001);
  }

  bongo(t, f = 300, vol = 0.12, dest = this.music) {
    this._slide('sine', f * 1.5, f, t, 0.14, vol, dest);
  }

  _tone(type, f, t, len, vol, dest = this.sfx, a = 0.005) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
    return o;
  }

  _noise(t, len, vol, type, freq, q = 1, dest = this.sfx, freqEnd) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + len);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.01, len / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random() * 0.5);
    s.stop(t + len + 0.05);
  }

  _slide(type, f0, f1, t, len, vol, dest = this.sfx) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  /** Set by the game: 0 calm .. 1 the last seconds (faster drums). */
  setTension(x) { this.tension = x; }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const play = this.mode === 'play';
    const tempo = this.tempo + (play ? (this.tension ?? 0) * 26 : 0);
    const sixteenth = 60 / tempo / 4;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 128; // 8 bars of 16ths
      const bar = Math.floor(step / 16);
      const e = step % 16;
      const [root, chord] = BARS[bar];
      if (e === 0 || e === 10) this.pluck(root, t, 0.32);
      if (e === 6 || e === 14) this.pluck(root + 7, t, 0.22);
      if (e % 4 === 2) for (const m of chord) this.marimba(m, t, 0.035);
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.marimba(m, t, play ? 0.12 : 0.1);
      if (play) {
        if (e % 4 === 0) this.bongo(t, 220, 0.1);
        if (e % 8 === 6) this.bongo(t, 330, 0.08);
        if (e % 2 === 1) this._noise(t, 0.035, 0.025, 'highpass', 7000, 0.8, this.music);
        if ((this.tension ?? 0) > 0.5 && e % 2 === 0) this._noise(t, 0.03, 0.03, 'highpass', 9000, 0.8, this.music);
      } else if (e === 8 && Math.random() < 0.25) {
        const b0 = 2400 + Math.random() * 900; // a bird
        this._slide('sine', b0, b0 * 1.3, t, 0.1, 0.025, this.music);
        this._slide('sine', b0 * 1.2, b0 * 0.9, t + 0.13, 0.09, 0.02, this.music);
      }
      this.step++;
      this.nextTime += sixteenth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'step':
        this._noise(t, 0.04, 0.05, 'bandpass', arg ? 900 : 1600, 2.5);
        break;
      case 'jump':
        this._slide('sine', 300, 760, t, 0.18, 0.12);
        break;
      case 'land':
        this._tone('sine', 120, t, 0.12, arg ? 0.22 : 0.12);
        this._noise(t, 0.06, 0.06, 'lowpass', 600);
        break;
      case 'bounce': { // a big spring "boing"
        const c = this.ctx;
        const o = c.createOscillator();
        o.type = 'sine';
        o.frequency.setValueAtTime(140, t);
        o.frequency.exponentialRampToValueAtTime(620, t + 0.35);
        const lfo = c.createOscillator();
        lfo.frequency.value = 22;
        const lg = c.createGain();
        lg.gain.value = 40;
        lfo.connect(lg).connect(o.frequency);
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
        o.connect(g).connect(S);
        o.start(t);
        lfo.start(t);
        o.stop(t + 0.6);
        lfo.stop(t + 0.6);
        break;
      }
      case 'slide': // slide whistle down
        this._slide('sine', 1400, 420, t, 0.7, 0.06);
        break;
      case 'grab': // snatch + sparkle up
        this._noise(t, 0.15, 0.1, 'bandpass', 900, 1, S, 4000);
        [84, 88, 91, 96, 100].forEach((m, i) => this._tone('sine', hz(m), t + 0.05 + i * 0.05, 0.25, 0.07));
        break;
      case 'stolen': // aww
        this._slide('triangle', 660, 330, t, 0.35, 0.09);
        this._slide('triangle', 520, 260, t + 0.3, 0.45, 0.08);
        break;
      case 'rivalGrab':
        this._noise(t, 0.12, 0.06, 'bandpass', 1200, 1, S, 3000);
        this._tone('sine', 520, t + 0.05, 0.12, 0.05);
        break;
      case 'whiff':
        this._noise(t, 0.12, 0.05, 'bandpass', 1500, 1.2, S, 600);
        break;
      case 'count':
        this._tone('square', 660, t, 0.14, 0.05);
        break;
      case 'go':
        this._tone('square', 990, t, 0.35, 0.06);
        this._tone('square', 1320, t, 0.35, 0.03);
        break;
      case 'tick':
        this._tone('square', arg <= 3 ? 1200 : 900, t, 0.05, 0.05);
        break;
      case 'win':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [88, 0.6], [91, 0.72], [96, 0.9]].forEach(([m, d]) => this.marimba(m, t + d, 0.2, S));
        [0, 0.12, 0.24, 0.36].forEach((d) => this.bongo(t + 0.9 + d, 260, 0.14, S));
        break;
      case 'lose':
        [79, 76, 72, 67].forEach((m, i) => this.marimba(m, t + i * 0.18, 0.16, S));
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.12, 0.04);
        break;
      default:
    }
  }
}
