import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// «سباق القمة» sound, made live with Web Audio (no files): an upbeat mountain-race tune (punchy kick, claps, hats, a
// rolling synth bass, bright plucks and a soaring lead, a soft pad), a cold wind that rises with speed, footsteps
// crunching in the snow in time with the run, a low rumble that grows as a boulder rolls closer, the log's wooden
// thumps, crystal chimes that climb, the ice pad whoosh, the tailwind swirl, the shield shimmer and its pop, the
// wipeout thud with a little "oof", heart lost, the 3-2-1 beeps and the GO horn, overtake swoosh, nice-dodge whoosh,
// the summit fanfare with a cheering crowd, and a kind "try again" tune. iPhone keep-alive shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// A minor pop: Am - F - C - G (x2), then F - G - Am - Am
const CHORDS = [[45, [69, 72, 76]], [41, [69, 72, 77]], [48, [67, 72, 76]], [43, [67, 71, 74]], [45, [69, 72, 76]], [41, [69, 72, 77]], [48, [67, 72, 76]], [43, [67, 71, 74]]];
// lead: [bar, sixteenth (0-15), midi, length in sixteenths]
const LEAD = [[0, 0, 76, 2], [0, 3, 79, 1], [0, 4, 81, 3], [0, 8, 79, 2], [0, 10, 76, 2], [0, 12, 74, 4],
  [1, 0, 72, 2], [1, 2, 74, 2], [1, 4, 76, 4], [1, 10, 72, 2], [1, 12, 69, 4],
  [2, 0, 76, 2], [2, 3, 79, 1], [2, 4, 84, 3], [2, 8, 83, 2], [2, 10, 81, 2], [2, 12, 79, 4],
  [3, 0, 79, 2], [3, 2, 81, 2], [3, 4, 83, 6], [3, 12, 86, 4],
  [4, 0, 88, 3], [4, 4, 86, 2], [4, 6, 84, 2], [4, 8, 81, 4], [4, 12, 84, 4],
  [5, 0, 84, 2], [5, 2, 81, 2], [5, 4, 77, 4], [5, 10, 81, 2], [5, 12, 84, 4],
  [6, 0, 84, 3], [6, 4, 79, 2], [6, 6, 76, 2], [6, 8, 79, 4], [6, 12, 84, 4],
  [7, 0, 83, 4], [7, 4, 79, 2], [7, 6, 81, 2], [7, 8, 83, 8]];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.speed = 0;
    this.rumble = 0;
  }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(this.ctx, () => !!this.held);
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -12;
      comp.ratio.value = 5;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.32;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.85;
      this.sfx.connect(this.master);
      const delay = c.createDelay(0.8);
      delay.delayTime.value = 60 / 128 * 0.75;
      const fb = c.createGain();
      fb.gain.value = 0.25;
      const wet = c.createGain();
      wet.gain.value = 0.16;
      this.leadBus = c.createGain();
      this.leadBus.connect(this.music);
      this.leadBus.connect(delay);
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      // the endless cold wind (louder with speed) and the boulder rumble (louder when one is close)
      this.wind = this._loopNoise('bandpass', 700, 0.6, 0.0001);
      this.rumbleN = this._loopNoise('lowpass', 120, 1, 0.0001);
      this._timer = setInterval(() => this._schedule(), 25);
      if (this.mode !== 'off') this.setMode(this.mode, true);
    }
    if (this.ctx.state !== 'running' && !this.held) {
      this._silentTick();
      this._mediaKick();
      this.ctx.resume();
    }
  }

  get on() { return !!this.ctx && this.ctx.state === 'running'; }

  _loopNoise(type, freq, q, vol) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = c.createGain();
    g.gain.value = vol;
    s.connect(f).connect(g).connect(this.sfx);
    s.start();
    return { f, g };
  }

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
  suspend() { iosPause(); this.held = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { iosKeepAlive(); this.held = false; if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  /** 'menu' (pad and plucks only), 'race' (full beat), 'end' (soft) or 'off'. */
  setMode(mode, force) {
    if (this.mode === mode && !force) return;
    this.mode = mode;
    if (!this.ctx) return;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
  }

  /** Called every frame: running speed 0..1.6 (wind, footsteps) and how close a rolling thing is 0..1. */
  setRun(speed, rumble) {
    this.speed = speed;
    this.rumble = rumble;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.wind.g.gain.setTargetAtTime(this.mode === 'off' ? 0.0001 : 0.012 + speed * 0.03, t, 0.3);
    this.wind.f.frequency.setTargetAtTime(500 + speed * 700, t, 0.3);
    this.rumbleN.g.gain.setTargetAtTime(0.0001 + rumble * 0.35, t, 0.1);
  }

  dispose() {
    clearInterval(this._timer);
    iosPause();
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
    s.start(t, Math.random() * 0.8);
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

  /** a filtered saw "synth" note */
  _synth(f, t, len, vol, dest, cutoff = 1800) {
    const c = this.ctx;
    const g = c.createGain();
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(cutoff, t);
    lp.frequency.exponentialRampToValueAtTime(cutoff * 0.35, t + len);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    for (const det of [-6, 6]) {
      const o = c.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(f, t);
      o.detune.value = det;
      o.connect(lp);
      o.start(t);
      o.stop(t + len + 0.05);
    }
    lp.connect(g).connect(dest);
  }

  _kick(t, vol = 0.5) {
    this._slide('sine', 140, 42, t, 0.22, vol, this.music);
    this._noise(t, 0.02, vol * 0.2, 'highpass', 3000, 1, this.music);
  }

  // ---- music: 128 bpm, sixteenths ---------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.15;
    const six = 60 / 128 / 4;
    const race = this.mode === 'race';
    const menu = this.mode === 'menu';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 128;
      const bar = Math.floor(step / 16);
      const e = step % 16;
      const [root, chord] = CHORDS[bar];
      // pad (always): a soft chord each bar
      if (e === 0) chord.forEach((m) => this._tone('triangle', hz(m - 12), t, six * 15, race ? 0.025 : 0.035, this.music, 0.15));
      if (race) {
        if (e % 4 === 0) this._kick(t, 0.42);
        if (e === 4 || e === 12) { this._noise(t, 0.12, 0.12, 'bandpass', 1500, 0.8, this.music); this._noise(t + 0.01, 0.08, 0.06, 'highpass', 2500, 1, this.music); }
        if (e % 2 === 1) this._noise(t, 0.035, e % 4 === 3 ? 0.04 : 0.025, 'highpass', 8000, 1, this.music);
        // rolling bass on the off-beats
        if (e % 2 === 0) this._synth(hz(root - (e % 8 === 6 ? -12 : 0)), t, six * 1.6, 0.06, this.music, 700);
        for (const [bb, ee, m, l] of LEAD) if (bb === bar && ee === e) this._synth(hz(m), t, six * l * 1.1, 0.035, this.leadBus, 2600);
      }
      // bright plucks (arpeggio): always in the race, softer on the menu
      if ((race || menu) && e % 2 === 0) {
        const m = chord[(e / 2) % 3] + (e >= 8 ? 12 : 0);
        this._tone('triangle', hz(m), t, 0.16, race ? 0.03 : 0.035, this.music, 0.002);
      }
      if (this.mode === 'end' && e % 4 === 0) this._tone('sine', hz(chord[(e / 4) % 3] + 12), t, 0.5, 0.03, this.music, 0.01);
      this.step++;
      this.nextTime += six;
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    switch (name) {
      case 'step': // crunch in the snow
        this._noise(t, 0.07, 0.05 + (arg || 0) * 0.02, 'bandpass', 2200 + Math.random() * 900, 1.2);
        this._noise(t, 0.05, 0.03, 'lowpass', 500, 1);
        break;
      case 'count':
        this._tone('square', 660, t, 0.18, 0.06);
        this._tone('sine', 660, t, 0.25, 0.08);
        break;
      case 'go':
        this._tone('square', 990, t, 0.45, 0.07);
        this._tone('sine', 1320, t, 0.5, 0.06);
        this._noise(t, 0.6, 0.08, 'bandpass', 1200, 0.6, this.sfx, 3000);
        break;
      case 'crystal': { // a chime that climbs with each crystal in a row
        const k = Math.min(arg || 0, 6);
        const m = 84 + [0, 2, 4, 7, 9, 12, 14][k];
        this._tone('sine', hz(m), t, 0.35, 0.07);
        this._tone('sine', hz(m + 12), t + 0.03, 0.2, 0.03);
        this._tone('triangle', hz(m + 7), t + 0.05, 0.15, 0.02);
        break;
      }
      case 'boost': // ice pad
        this._noise(t, 0.7, 0.14, 'bandpass', 600, 0.8, this.sfx, 4000);
        this._slide('sawtooth', 200, 900, t, 0.5, 0.03);
        this._slide('sine', 400, 1600, t, 0.5, 0.05);
        break;
      case 'tailwind':
        for (let i = 0; i < 3; i++) this._noise(t + i * 0.12, 0.6, 0.1, 'bandpass', 500 + i * 300, 1.2, this.sfx, 2500);
        [79, 83, 86, 91].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.4, 0.05));
        break;
      case 'shield':
        [72, 76, 79, 84, 88].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.04, 0.6, 0.04));
        this._slide('sine', 300, 600, t, 0.5, 0.05);
        break;
      case 'blocked': // the shield pops and saves you
        this._noise(t, 0.25, 0.15, 'highpass', 2000, 1);
        [88, 84, 91].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.05, 0.3, 0.05));
        break;
      case 'wipeout': // thud into the snow + a little "oof"
        this._slide('sine', 160, 45, t, 0.35, 0.5);
        this._noise(t, 0.45, 0.25, 'lowpass', 900, 0.8, this.sfx, 200);
        this._slide('triangle', 420, 200, t + 0.05, 0.25, 0.08);
        this._slide('square', 400, 190, t + 0.05, 0.22, 0.015);
        break;
      case 'heart':
        [72, 67, 64].forEach((m, i) => this._tone('triangle', hz(m), t + 0.3 + i * 0.12, 0.25, 0.05));
        break;
      case 'log': // wooden knock as a log bounces down
        this._tone('triangle', 150, t, 0.12, 0.12);
        this._noise(t, 0.08, 0.06, 'bandpass', 600, 2);
        break;
      case 'dodge':
        this._noise(t, 0.35, 0.11, 'bandpass', 1600, 1, this.sfx, 400);
        this._tone('sine', hz(88), t + 0.1, 0.25, 0.04);
        break;
      case 'overtake':
        this._noise(t, 0.4, 0.1, 'bandpass', 500, 0.8, this.sfx, 2600);
        [84, 88, 91].forEach((m, i) => this._tone('triangle', hz(m), t + 0.1 + i * 0.07, 0.3, 0.05));
        break;
      case 'up': // back on the feet
        [67, 72].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.08, 0.2, 0.05));
        break;
      case 'summit': // fanfare + crowd
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.4], [79, 0.62], [84, 0.74], [88, 0.95], [91, 1.2]].forEach(([m, d]) => { this._synth(hz(m), t + d, 0.5, 0.06, this.sfx, 3000); this._tone('sine', hz(m) * 2, t + d, 0.2, 0.02); });
        for (let i = 0; i < 24; i++) this._noise(t + 0.2 + i * 0.07, 0.25, 0.04 + Math.random() * 0.04, 'bandpass', 900 + Math.random() * 1600, 0.7);
        this._noise(t + 0.2, 2.4, 0.07, 'bandpass', 1300, 0.4);
        break;
      case 'lose': // kind: "try again"
        [[76, 0], [74, 0.25], [72, 0.5], [69, 0.8]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.45, 0.06));
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      default:
    }
  }
}
