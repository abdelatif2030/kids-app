import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Highway sound, made live with Web Audio (no files). The engine is a synthesised V6: oscillators at the firing
// frequency (from the rpm of the current gear) through soft distortion and a low-pass that opens with the throttle,
// an intake rasp, a short cut on every gear change and a nitro roar; wind and tyre hiss grow with speed; a passing
// car's engine swells as you slip by. Under it a sunny driving synth beat (quieter while racing). Effects: the
// countdown beeps and the GO, near-miss whooshes with a chime that climbs with the combo, coins, the nitro burst,
// soft crash bumps, traffic horns, the finish fanfare, "wrecked" and star chimes. The iPhone/iPad keep-alive is shared.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const ROOTS = [36, 43, 45, 41]; // C G Am F
const RIFF = [0, null, 7, 12, null, 7, 16, null, 14, null, 12, 7, null, 4, 7, null];

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
    this.tempo = mode === 'race' ? 132 : 124;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    this.engines(false);
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }

  // ---- instruments ----------------------------------------------------------------------------------------------

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

  _loopNoise(type, freq, q) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = c.createGain();
    g.gain.value = 0.0001;
    s.connect(f).connect(g).connect(this.sfx);
    s.start();
    return { s, f, g };
  }

  // ---- the engine ---------------------------------------------------------------------------------------------------

  /** Starts the rider's engine, the wind, the tyres and a distant rivals' engine. */
  engines(on) {
    if (!this.ctx) return;
    const c = this.ctx;
    if (on && !this.eng) {
      const shaper = c.createWaveShaper();
      const curve = new Float32Array(512);
      for (let i = 0; i < 512; i++) { const x = (i / 511) * 2 - 1; curve[i] = Math.tanh(x * 2.4); }
      shaper.curve = curve;
      const lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 800;
      lp.Q.value = 2.5;
      const out = c.createGain();
      out.gain.value = 0.0001;
      const pre = c.createGain();
      pre.gain.value = 0.5;
      pre.connect(shaper).connect(lp).connect(out).connect(this.sfx);
      const o1 = c.createOscillator();
      o1.type = 'sawtooth';
      const o2 = c.createOscillator();
      o2.type = 'square';
      const o3 = c.createOscillator();
      o3.type = 'sawtooth';
      o3.detune.value = 9;
      const g2 = c.createGain();
      g2.gain.value = 0.6;
      const g3 = c.createGain();
      g3.gain.value = 0.35;
      o1.connect(pre);
      o2.connect(g2).connect(pre);
      o3.connect(g3).connect(pre);
      // the "brap": the loudness pulses with the firing
      const am = c.createOscillator();
      am.type = 'sine';
      const amg = c.createGain();
      amg.gain.value = 0.25;
      am.connect(amg).connect(pre.gain);
      for (const o of [o1, o2, o3, am]) o.start();
      const intake = this._loopNoise('bandpass', 1200, 2.5);
      const wind = this._loopNoise('highpass', 700, 0.5);
      const skid = this._loopNoise('bandpass', 2400, 6);
      // the pack: one softer engine for the nearest rival
      const r1 = c.createOscillator();
      r1.type = 'sawtooth';
      const rlp = c.createBiquadFilter();
      rlp.type = 'lowpass';
      rlp.frequency.value = 900;
      const rg = c.createGain();
      rg.gain.value = 0.0001;
      r1.connect(rlp).connect(rg).connect(this.sfx);
      r1.start();
      this.eng = { o1, o2, o3, am, lp, out, intake, wind, skid, r1, rg, rlp };
    } else if (!on && this.eng) {
      const e = this.eng;
      const t = c.currentTime;
      for (const g of [e.out.gain, e.intake.g.gain, e.wind.g.gain, e.skid.g.gain, e.rg.gain]) g.setTargetAtTime(0.0001, t, 0.15);
      setTimeout(() => { try { for (const o of [e.o1, e.o2, e.o3, e.am, e.r1, e.intake.s, e.wind.s, e.skid.s]) o.stop(); } catch (_) { /* fine */ } }, 700);
      this.eng = null;
    }
  }

  /** rpm 1500..13000, throttle 0..1, speed m/s, boost, skid 0..1, rival: {dist, rpm} or null. */
  engineUpdate(rpm, throttle, speed, boost, skid, rival) {
    const e = this.eng;
    if (!e || !this.ctx) return;
    const t = this.ctx.currentTime;
    const f = rpm / 20; // a V6: three pulses per turn
    e.o1.frequency.setTargetAtTime(f, t, 0.03);
    e.o2.frequency.setTargetAtTime(f * 0.5, t, 0.03);
    e.o3.frequency.setTargetAtTime(f * 2, t, 0.03);
    e.am.frequency.setTargetAtTime(f * 0.25, t, 0.03);
    e.lp.frequency.setTargetAtTime(500 + throttle * 2200 + rpm * 0.12 + (boost ? 1200 : 0), t, 0.05);
    e.out.gain.setTargetAtTime(0.06 + throttle * 0.07 + (boost ? 0.04 : 0), t, 0.05);
    e.intake.f.frequency.setTargetAtTime(f * 3, t, 0.05);
    e.intake.g.gain.setTargetAtTime(0.008 + throttle * 0.03 + (boost ? 0.03 : 0), t, 0.05);
    e.wind.f.frequency.setTargetAtTime(400 + speed * 30, t, 0.1);
    e.wind.g.gain.setTargetAtTime(Math.min(0.09, speed * speed * 0.000025), t, 0.1);
    e.skid.g.gain.setTargetAtTime(skid * 0.05, t, 0.05);
    if (rival && rival.dist < 40) {
      const near = 1 - rival.dist / 40;
      e.r1.frequency.setTargetAtTime(rival.rpm / 60, t, 0.05);
      e.rg.gain.setTargetAtTime(near * near * 0.05, t, 0.08);
    } else e.rg.gain.setTargetAtTime(0.0001, t, 0.2);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const race = this.mode === 'race';
    const sixteenth = 60 / this.tempo / 4;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64; // 4 bars of 16ths
      const bar = Math.floor(step / 16);
      const e = step % 16;
      const root = ROOTS[bar];
      const v = race ? 0.55 : 1; // quieter under the engines
      if (e % 4 === 0) this._slide('sine', 140, 45, t, 0.18, 0.32 * v, this.music); // kick
      if (e === 4 || e === 12) { this._noise(t, 0.16, 0.12 * v, 'bandpass', 1900, 0.9, this.music); this._tone('triangle', 190, t, 0.08, 0.06 * v, this.music); }
      if (e % 2 === 0) this._noise(t, 0.03, 0.03 * v, 'highpass', 8000, 0.8, this.music);
      // driving bass in eighths
      if (e % 2 === 0) this._tone('sawtooth', hz(root + (e === 6 || e === 14 ? 12 : 0)), t, sixteenth * 1.6, 0.07 * v, this.music, 0.004);
      // a synth riff on the menu, a lighter one in the race
      const riff = RIFF[e];
      if (riff !== null && (!race || e % 4 === 0)) this._tone('square', hz(root + 24 + riff), t, sixteenth * 1.4, (race ? 0.018 : 0.035), this.music, 0.003);
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
      case 'count':
        this._tone('square', 520, t, 0.22, 0.07);
        this._tone('sine', 520, t, 0.3, 0.1);
        break;
      case 'go':
        this._tone('square', 1040, t, 0.6, 0.08);
        this._tone('sine', 1560, t, 0.6, 0.06);
        this._noise(t, 0.6, 0.1, 'bandpass', 600, 0.8, S, 2400);
        break;
      case 'shift': // a short cut in the engine and a click
        this._noise(t, 0.05, 0.05, 'bandpass', 2500, 2);
        if (this.eng) { const g = this.eng.out.gain; g.cancelScheduledValues(t); g.setValueAtTime(0.02, t); g.setTargetAtTime(0.1, t + 0.06, 0.04); }
        break;
      case 'near': { // a car whooshes past, and a chime that climbs with the combo
        const k = Math.min(arg ?? 1, 10);
        this._noise(t, 0.45, 0.16, 'bandpass', 2600, 1.2, S, 500);
        this._slide('sawtooth', 260, 140, t, 0.4, 0.03);
        const base = 76 + [0, 2, 4, 5, 7, 9, 11, 12, 14, 16][k - 1];
        this._tone('triangle', hz(base), t + 0.08, 0.2, 0.08);
        this._tone('sine', hz(base + 7), t + 0.14, 0.25, 0.06);
        break;
      }
      case 'combo':
        [79, 83, 86, 91].forEach((m, i) => this._tone('square', hz(m), t + i * 0.05, 0.12, 0.035));
        break;
      case 'coin':
        this._tone('square', hz(88), t, 0.06, 0.03);
        this._tone('square', hz(93), t + 0.05, 0.12, 0.03);
        break;
      case 'nitro':
        this._noise(t, 1.2, 0.2, 'bandpass', 400, 0.7, S, 3000);
        this._slide('sawtooth', 120, 420, t, 0.8, 0.06);
        this._tone('sine', 60, t, 0.5, 0.25);
        break;
      case 'nitroEnd':
        this._noise(t, 0.4, 0.06, 'bandpass', 1800, 1, S, 500);
        break;
      case 'crash': // a soft bump: a thud, a crunch and a jingle of plastic
        this._tone('sine', 70, t, 0.4, 0.4);
        this._noise(t, 0.6, 0.22, 'bandpass', 1800, 0.7, S, 300);
        this._noise(t + 0.05, 0.3, 0.1, 'highpass', 4000, 0.8);
        if (this.eng) { const g = this.eng.out.gain; g.cancelScheduledValues(t); g.setValueAtTime(0.02, t); g.setTargetAtTime(0.1, t + 0.6, 0.2); }
        break;
      case 'honk': { // a traffic horn (two notes, a little angry but funny)
        const f0 = arg === 'truck' ? 220 : 400;
        [f0, f0 * 1.26].forEach((f) => { this._tone('square', f, t, 0.35, 0.025); this._tone('sawtooth', f, t, 0.35, 0.015); });
        break;
      }
      case 'blink':
        this._tone('square', 1800, t, 0.03, 0.015);
        this._tone('square', 1500, t + 0.35, 0.03, 0.015);
        break;
      case 'needMore':
        this._tone('triangle', hz(76), t, 0.15, 0.06);
        this._tone('triangle', hz(81), t + 0.12, 0.2, 0.06);
        break;
      case 'finish':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.55], [84, 0.67], [88, 0.85]].forEach(([m, d]) => this._tone('square', hz(m), t + d, 0.3, 0.06));
        this._noise(t, 2.2, 0.06, 'bandpass', 1200, 0.5, S);
        break;
      case 'wrecked':
        [[67, 0], [63, 0.25], [60, 0.5]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.35, 0.08));
        break;
      case 'star':
        this._tone('triangle', hz(84 + (arg ?? 0) * 4), t, 0.3, 0.09);
        this._tone('sine', hz(96 + (arg ?? 0) * 4), t, 0.4, 0.04);
        break;
      case 'buy':
        [79, 84, 88].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.06, 0.2, 0.07));
        break;
      case 'whoosh': // menus: a soft swipe
        this._noise(t, 0.25, 0.05, 'bandpass', 1500, 1, S, 3000);
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
