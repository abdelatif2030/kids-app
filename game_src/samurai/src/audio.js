import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Samurai sound, made live with Web Audio (no files): taiko drums, a koto plucked in the Japanese "miyako-bushi"
// scale (Karplus-Strong strings) and a breathy bamboo flute; a calm courtyard theme, a driving battle rhythm and a
// heavier one for the oni. Effects: sword swooshes, the dash "shing", petal poofs, combo chimes that climb, a clang
// for a deflected star, a soft bonk when hurt, the oni's growl and club slam, gongs for waves and a big finishing cut.
// Gentle volumes behind a limiter; one button mutes everything. Same phone sound safeguards as the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// D miyako-bushi: D Eb G A Bb
const SCALE = [62, 63, 67, 69, 70, 74, 75, 79, 81, 82];
// koto phrase (16 eighths): scale index or -1
const KOTO = [4, -1, 3, 2, -1, 1, 0, -1, 2, -1, 3, 4, -1, 5, 4, -1];
// flute: [quarter, scale index, length in quarters] over 8 bars
const FLUTE = [[0, 7, 4], [8, 6, 4], [16, 5, 6], [24, 4, 8]];

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
    this.tempo = mode === 'boss' ? 150 : mode === 'fight' ? 132 : 84;
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

  _flute(m, t, len, vol = 0.05) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(hz(m) * 0.97, t);
    o.frequency.exponentialRampToValueAtTime(hz(m), t + 0.12);
    const vib = c.createOscillator();
    vib.frequency.value = 5.2;
    const vg = c.createGain();
    vg.gain.setValueAtTime(0, t);
    vg.gain.linearRampToValueAtTime(hz(m) * 0.012, t + len * 0.6);
    vib.connect(vg).connect(o.frequency);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.15);
    g.gain.setTargetAtTime(0.0001, t + len * 0.85, 0.12);
    o.connect(g).connect(this.music);
    o.start(t);
    vib.start(t);
    o.stop(t + len + 0.6);
    vib.stop(t + len + 0.6);
    this._noise(t, Math.min(0.5, len), vol * 0.35, 'bandpass', hz(m) * 2, 3, this.music);
  }

  taiko(t, vol = 0.5, f = 70, dest = this.music) {
    this._slideG(f * 1.6, f, t, 0.35, vol, dest);
    this._noise(t, 0.08, vol * 0.25, 'lowpass', 900, 0.7, dest);
  }

  _slideG(f0, f1, t, len, vol, dest) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len * 0.6);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const battle = this.mode === 'fight' || this.mode === 'boss';
    const boss = this.mode === 'boss';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const e = this.step % 16;
      const k = KOTO[e];
      if (k >= 0) this.pluck(SCALE[k] + (boss ? -12 : 0), t, battle ? 0.2 : 0.16);
      if (!battle && e === 0) this.pluck(SCALE[0] - 24, t, 0.3);
      if (battle) {
        // don - don - doko - don
        if (e % 8 === 0) this.taiko(t, boss ? 0.6 : 0.45, boss ? 58 : 70);
        if (e % 8 === 4) this.taiko(t, 0.3, 90);
        if (e % 8 === 6 || e % 8 === 7) this.taiko(t, 0.18, 120);
        if (e % 2 === 1) this._noise(t, 0.03, 0.03, 'highpass', 6000, 0.8, this.music);
        if (boss && e % 4 === 2) this._tone('square', hz(SCALE[0] - 24), t, 0.12, 0.03, this.music);
      }
      if (!battle || boss) for (const [at, idx, len] of FLUTE) if (this.step % 64 === at * 2) this._flute(SCALE[idx], t, len * eighth * 2, battle ? 0.045 : 0.055);
      if (!battle && e === 8 && Math.random() < 0.3) this._noise(t, 1.5, 0.012, 'bandpass', 900, 0.4, this.music);
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
      case 'slash':
        this._noise(t, 0.16, 0.13, 'bandpass', 900, 1.2, S, 4200);
        if (arg) this._tone('triangle', 1800, t + 0.05, 0.08, 0.04);
        break;
      case 'dash':
        this._noise(t, 0.28, 0.16, 'bandpass', 600, 0.9, S, 5000);
        this._tone('sine', 2600, t + 0.08, 0.4, 0.05);
        this._tone('sine', 3900, t + 0.1, 0.3, 0.03);
        break;
      case 'hit':
        this._tone('sine', 220, t, 0.1, 0.18);
        this._noise(t, 0.06, 0.1, 'lowpass', 1500);
        break;
      case 'poof': {
        const n = Math.min(12, arg ?? 1);
        this._noise(t, 0.25, 0.08, 'bandpass', 1200, 0.8, S, 400);
        this.pluck(SCALE[n % SCALE.length] + 12, t + 0.03, 0.28, S);
        break;
      }
      case 'combo':
        this.pluck(SCALE[Math.min(9, arg ?? 0)] + 12, t, 0.3, S);
        this.pluck(SCALE[Math.min(9, arg ?? 0)] + 24, t + 0.06, 0.18, S);
        break;
      case 'deflect':
        this._tone('square', 1900, t, 0.12, 0.05);
        this._tone('sine', 3100, t, 0.25, 0.05);
        break;
      case 'throw':
        this._noise(t, 0.2, 0.05, 'bandpass', 3000, 3, S, 1500);
        break;
      case 'wind':
        this._slideG(500, 900, t, 0.25, 0.05, S);
        break;
      case 'hurt':
        this._slideG(420, 160, t, 0.3, 0.2, S);
        this._noise(t, 0.1, 0.08, 'lowpass', 800);
        break;
      case 'roar': {
        const c = this.ctx;
        const o = c.createOscillator();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(90, t);
        o.frequency.linearRampToValueAtTime(70, t + 1.2);
        const lfo = c.createOscillator();
        lfo.frequency.value = 18;
        const lg = c.createGain();
        lg.gain.value = 18;
        lfo.connect(lg).connect(o.frequency);
        const lp = c.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 700;
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.16, t + 0.15);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
        o.connect(lp).connect(g).connect(S);
        o.start(t);
        lfo.start(t);
        o.stop(t + 1.4);
        lfo.stop(t + 1.4);
        this.taiko(t, 0.5, 50, S);
        break;
      }
      case 'bossWind':
        this._slideG(200, 420, t, 0.6, 0.07, S);
        break;
      case 'slam':
        this.taiko(t, 0.8, 45, S);
        this._noise(t, 0.5, 0.18, 'lowpass', 500, 0.7, S, 120);
        break;
      case 'sweep':
        this._noise(t, 0.35, 0.16, 'bandpass', 300, 0.8, S, 1500);
        break;
      case 'bossHit':
        this._tone('sine', 150, t, 0.12, 0.2);
        this._noise(t, 0.05, 0.08, 'bandpass', 2000, 1);
        break;
      case 'gong':
        [55, 55 * 2.4, 55 * 3.9].forEach((f, i) => this._tone('sine', f, t, 2.4 - i * 0.6, 0.16 / (i + 1)));
        break;
      case 'finisher':
        this._noise(t, 0.6, 0.22, 'bandpass', 400, 0.7, S, 7000);
        this._tone('sine', 2200, t + 0.15, 1.6, 0.08);
        this._tone('sine', 3300, t + 0.15, 1.2, 0.05);
        [45, 45 * 2.4, 45 * 3.9].forEach((f, i) => this._tone('sine', f, t + 0.2, 3 - i * 0.7, 0.2 / (i + 1)));
        break;
      case 'win':
        [[62, 0], [67, 0.15], [69, 0.3], [74, 0.45], [79, 0.7], [81, 0.85], [86, 1.05]].forEach(([m, d]) => this.pluck(m, t + d, 0.4, S));
        this.taiko(t + 1.05, 0.5, 70, S);
        break;
      case 'down':
        [74, 70, 67, 62].forEach((m, i) => this.pluck(m, t + i * 0.16, 0.3, S));
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
