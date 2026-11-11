// Cozy bakery sound, made live with Web Audio (no files): a gentle autumn waltz on plucked strings (Karplus-Strong)
// with a music-box bell melody and soft bass; pumpkin pops, wooden thumps, the oven's "ding", a slide whistle on the
// chute, plates, a cash-register "ka-ching", coin ticks that rise in pitch, and a fanfare for each new part of the
// bakery. Gentle volumes behind a limiter; one button mutes everything. Same phone sound safeguards as the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

// F major waltz, 3/4, one bar per chord: F - Dm - Bb - C - F - Am - Bb - C
const BARS = [
  [41, [57, 60, 65]], [38, [57, 62, 65]], [46, [58, 62, 65]], [48, [58, 60, 64]],
  [41, [57, 60, 65]], [45, [57, 60, 64]], [46, [58, 62, 65]], [48, [55, 60, 64]],
];
// melody: [bar, beat (0..5 in eighths), midi]
const MELODY = [
  [0, 0, 77], [0, 4, 76], [1, 0, 74], [1, 2, 72], [1, 4, 74], [2, 0, 70], [2, 4, 74], [3, 0, 72],
  [4, 0, 77], [4, 2, 79], [4, 4, 81], [5, 0, 76], [5, 4, 72], [6, 0, 74], [6, 2, 77], [6, 4, 74], [7, 0, 72], [7, 4, 76],
];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.plucks = new Map();
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
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
  suspend() { this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.tempo = mode === 'play' ? 132 : 112; // quarter notes per minute
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
    const len = Math.floor(sr * 2);
    const buf = c.createBuffer(1, len, sr);
    const out = buf.getChannelData(0);
    const period = Math.max(2, Math.round(sr / hz(m)));
    const ring = new Float32Array(period);
    for (let i = 0; i < period; i++) ring[i] = (Math.random() * 2 - 1) * 0.6;
    let idx = 0;
    const damp = 0.995 - Math.max(0, m - 60) * 0.0004;
    for (let i = 0; i < len; i++) {
      const next = (idx + 1) % period;
      const v = (ring[idx] + ring[next]) * 0.5 * damp;
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
    lp.frequency.value = 2800;
    const g = this.ctx.createGain();
    g.gain.value = vol;
    s.connect(lp).connect(g).connect(dest);
    s.start(t);
    s.stop(t + 2);
  }

  /** A music-box bell: a sine with a soft high partial and a long ring. */
  bell(m, t, vol = 0.1, dest = this.music, len = 1.2) {
    this._tone('sine', hz(m), t, len, vol, dest, 0.003);
    this._tone('sine', hz(m) * 2.76, t, len * 0.4, vol * 0.25, dest, 0.003);
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
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 48; // 8 bars x 6 eighths
      const bar = Math.floor(step / 6);
      const e = step % 6;
      const [root, chord] = BARS[bar];
      // oom - pah - pah
      if (e === 0) this.pluck(root, t, 0.36);
      if (e === 2 || e === 4) for (const m of chord) this.pluck(m, t + Math.random() * 0.01, 0.07);
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.bell(m + (play ? 0 : 0), t, play ? 0.075 : 0.06);
      if (play && e % 2 === 1) this._noise(t, 0.04, 0.018, 'highpass', 7000, 0.7, this.music);
      this.step++;
      this.nextTime += eighth;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'pick': { // a round "pop" that rises with the stack
        const n = arg ?? 1;
        this._slide('sine', 300 + n * 25, 700 + n * 40, t, 0.1, 0.12);
        this._noise(t, 0.03, 0.04, 'bandpass', 1800, 2);
        break;
      }
      case 'drop':
        this._tone('sine', 160, t, 0.12, 0.14);
        this._noise(t, 0.06, 0.06, 'lowpass', 900);
        break;
      case 'chute':
        this._slide('sine', 1200, 380, t, 0.35, 0.05);
        this._tone('sine', 170, t, 0.1, 0.1);
        break;
      case 'baked': // the oven's ding
        this.bell(91, t, 0.12, S, 1.4);
        this.bell(96, t + 0.12, 0.08, S, 1.2);
        break;
      case 'takePie':
        this._noise(t, 0.08, 0.05, 'bandpass', 3200, 1.2, S, 1800);
        this._tone('sine', 660 + (arg ?? 0) * 30, t, 0.08, 0.05);
        break;
      case 'serve': // plate on the counter
        this._tone('sine', 2100, t, 0.12, 0.04);
        this._tone('sine', 2650, t + 0.01, 0.1, 0.03);
        this._tone('sine', 190, t, 0.07, 0.06);
        break;
      case 'buy':
        this._tone('sine', 1400, t, 0.06, 0.03);
        break;
      case 'sold': // ka-ching!
        this._noise(t, 0.05, 0.08, 'highpass', 3000, 0.7);
        this._tone('square', 1318, t + 0.06, 0.08, 0.035);
        this.bell(100, t + 0.1, 0.1, S, 0.9);
        this.bell(105, t + 0.16, 0.08, S, 0.9);
        break;
      case 'coin': {
        const m = 84 + Math.min(14, arg ?? 0);
        this._tone('sine', hz(m), t, 0.16, 0.07);
        this._tone('sine', hz(m + 7), t + 0.04, 0.14, 0.05);
        break;
      }
      case 'pay': {
        const f = arg ?? 0; // 0..1 how far the pad is paid
        this._tone('triangle', 500 + f * 700, t, 0.07, 0.06);
        break;
      }
      case 'unlock':
        [72, 76, 79, 84].forEach((m, i) => this.pluck(m, t + i * 0.07, 0.35, S));
        this.bell(96, t + 0.3, 0.1, S, 1.2);
        this._noise(t + 0.25, 0.8, 0.05, 'highpass', 6000, 0.6);
        break;
      case 'complete':
        [[65, 0], [69, 0.15], [72, 0.3], [77, 0.45], [81, 0.7], [84, 0.9], [89, 1.1]].forEach(([m, d]) => this.pluck(m, t + d, 0.4, S));
        [96, 100, 103, 108].forEach((m, i) => this.bell(m, t + 1.2 + i * 0.1, 0.08, S, 1.5));
        break;
      case 'arrive': // the shop's door bell
        this.bell(98, t, 0.05, S, 0.6);
        this.bell(94, t + 0.12, 0.04, S, 0.6);
        break;
      case 'full':
        this._tone('sine', 520, t, 0.1, 0.07);
        this._tone('sine', 390, t + 0.11, 0.14, 0.07);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.12, 0.04);
        this._tone('square', 196, t + 0.13, 0.14, 0.04);
        break;
      default:
    }
  }
}
