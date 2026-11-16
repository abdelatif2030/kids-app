import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Pond sound, made live with Web Audio (no files): a cosy kalimba-and-marimba tune over a soft pad, with birds at
// dawn, crickets at sunset and frogs croaking far away; a bouncier beat for the boss. Effects: the tongue's quick
// "thwip", a sticky "splat" when it catches, a gulp (and a crunch for beetles), combo chimes, hops and the leap's
// boing, splashes when fish jump, the warning buzz of an aiming frog, the whip of a lash, a comic "boing" when the
// frog is caught, the evolve sparkle, the bosses' croak/hiss/squawk, boss hits, the win tune and a sad "gulp" when
// gulped. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// F - Dm - Bb - C
const CHORDS = [[41, [65, 69, 72]], [38, [62, 65, 69]], [46, [62, 65, 70]], [48, [64, 67, 72]], [41, [65, 69, 72]], [38, [62, 65, 69]], [46, [65, 70, 74]], [48, [67, 72, 76]]];
const MELODY = [[0, 0, 77], [0, 3, 81], [0, 6, 84], [1, 0, 81], [1, 4, 77], [2, 0, 79], [2, 2, 77], [2, 4, 74], [3, 0, 76], [3, 4, 79],
  [4, 0, 84], [4, 3, 81], [4, 6, 77], [5, 0, 74], [5, 4, 77], [6, 0, 82], [6, 2, 81], [6, 4, 79], [7, 0, 77], [7, 4, 72]];

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
    this.tempo = mode === 'boss' ? 128 : mode === 'play' ? 108 : 96;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
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
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, len / 4));
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

  /** marimba: a sine with a fast-fading overtone */
  mar(m, t, vol, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.35, vol, dest, 0.003);
    this._tone('sine', f * 4, t, 0.05, vol * 0.3, dest, 0.002);
  }

  setWorld(w) { this.world = w; }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const play = this.mode === 'play' || this.mode === 'boss';
    const boss = this.mode === 'boss';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      if (e === 0) chord.forEach((m) => this._tone('sine', hz(m - 12), t, eighth * 7, 0.03, this.music, 0.3)); // soft pad
      if (e === 0 || e === 4 || (boss && e % 2 === 0)) this._tone('triangle', hz(root - 12 + (e === 4 ? 7 : 0)), t, eighth * 1.6, 0.2, this.music, 0.01);
      // kalimba arpeggio
      if (e % 2 === 1 || !play) { const m = chord[(step >> 1) % 3] + 12; this._tone('sine', hz(m), t, 0.4, 0.05, this.music, 0.002); this._tone('sine', hz(m) * 3, t, 0.08, 0.012, this.music, 0.002); }
      for (const [bb, ee, m] of MELODY) if (bb === bar && ee === e) this.mar(m, t + 0.004, play ? 0.11 : 0.08);
      if (play) {
        if (e === 0 || e === 4) this._slide('sine', 120, 45, t, 0.16, boss ? 0.3 : 0.18, this.music);
        if (boss && (e === 2 || e === 6)) this._noise(t, 0.1, 0.08, 'bandpass', 1900, 0.8, this.music);
        if (e % 2 === 1) this._noise(t, 0.025, 0.018, 'highpass', 7000, 1, this.music);
      }
      // the pond around: birds at dawn, crickets at sunset, a far croak now and then
      if (e === 0 && bar % 2 === 0 && Math.random() < 0.6) this._ambience(t + Math.random() * eighth * 4);
      this.step++;
      this.nextTime += eighth;
    }
  }

  _ambience(t) {
    const w = this.world || 'dawn';
    if (w === 'sunset') { for (let i = 0; i < 6; i++) this._tone('sine', 4200 + Math.random() * 300, t + i * 0.06, 0.03, 0.006); }
    else if (Math.random() < 0.5) { const f = 2400 + Math.random() * 1200; this._slide('sine', f, f * 1.5, t, 0.12, 0.012); this._slide('sine', f * 1.2, f * 0.9, t + 0.15, 0.1, 0.01); }
    if (Math.random() < 0.4) this._croak(t + 0.3, 70 + Math.random() * 30, 0.012);
  }

  _croak(t, f, vol) {
    for (let i = 0; i < 2; i++) {
      const tt = t + i * 0.14;
      this._slide('sawtooth', f * 1.1, f * 0.8, tt, 0.11, vol);
      this._noise(tt, 0.1, vol * 0.8, 'bandpass', f * 6, 3);
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'tongue': // a quick stretchy "thwip"
        this._slide('sine', 300, 1500, t, 0.09, 0.12);
        this._noise(t, 0.07, 0.04, 'bandpass', 3000, 2);
        break;
      case 'stick': // the sticky tip catches
        this._noise(t, 0.06, 0.12, 'lowpass', 1200, 1);
        this._slide('sine', 900, 400, t, 0.06, 0.06);
        break;
      case 'miss':
        this._slide('sine', 600, 300, t, 0.1, 0.05);
        break;
      case 'gulp': { // a happy gulp; beetles crunch
        if (arg === 'beetle') for (let i = 0; i < 3; i++) this._noise(t + i * 0.04, 0.04, 0.08, 'bandpass', 2500, 2);
        this._slide('sine', 420, 140, t + 0.02, 0.16, 0.22);
        this._slide('sine', 260, 520, t + 0.18, 0.08, 0.07);
        break;
      }
      case 'grow': {
        const k = Math.min(arg ?? 1, 10);
        this._tone('triangle', hz(76 + [0, 2, 4, 7, 9, 12, 14, 16, 19, 21][k - 1]), t, 0.18, 0.06);
        break;
      }
      case 'airsnap':
        [84, 88, 91].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.05, 0.2, 0.06));
        break;
      case 'hop':
        this._slide('sine', 180, 330, t, 0.08, 0.06);
        break;
      case 'leap':
        this._slide('sine', 160, 700, t, 0.3, 0.18);
        this._noise(t + 0.05, 0.4, 0.06, 'bandpass', 900, 0.8, S, 2600);
        break;
      case 'land':
        this._noise(t, 0.25, 0.1, 'lowpass', 1400, 0.8, S, 300); // a splashy landing
        this._slide('sine', 200, 90, t, 0.12, 0.12);
        break;
      case 'splash':
        this._noise(t, 0.35, 0.08, 'bandpass', 1800, 0.7, S, 500);
        break;
      case 'aim': // a warning: a rising buzz
        this._slide('sawtooth', 220, 440, t, 0.5, 0.025);
        this._tone('square', 880, t, 0.06, 0.02);
        this._tone('square', 880, t + 0.15, 0.06, 0.02);
        break;
      case 'lash': // a whip
        this._noise(t, 0.12, 0.1, 'highpass', 2500, 1, S);
        this._slide('sine', 1200, 300, t, 0.12, 0.05);
        break;
      case 'hurt': // a comic boing
        this._slide('triangle', 600, 140, t, 0.35, 0.16);
        this._slide('sine', 300, 80, t + 0.05, 0.3, 0.12);
        break;
      case 'heron': // a shadow overhead: wings flapping
        for (let i = 0; i < 4; i++) this._noise(t + i * 0.18, 0.12, 0.05, 'lowpass', 600, 1);
        break;
      case 'strike':
        this._noise(t, 0.3, 0.15, 'bandpass', 1500, 0.7, S, 400);
        this._tone('square', 1400, t, 0.05, 0.04);
        break;
      case 'evolve':
        [72, 76, 79, 84, 88, 91].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.07, 0.25, 0.06));
        [84, 88, 91, 96].forEach((m) => this._tone('sine', hz(m), t + 0.45, 0.8, 0.05));
        break;
      case 'boss':
        if (arg === 'heron') { this._slide('sawtooth', 900, 500, t, 0.4, 0.06); this._slide('sawtooth', 800, 450, t + 0.45, 0.5, 0.06); } else if (arg === 'snake') { this._noise(t, 1.2, 0.1, 'highpass', 4000, 1); } else this._croak(t, 55, 0.12);
        this._slide('sine', 90, 40, t, 0.8, 0.3);
        break;
      case 'bossHit':
        this._noise(t, 0.08, 0.12, 'bandpass', 1500, 1);
        this._tone('square', 330, t, 0.1, 0.05);
        break;
      case 'bossDown':
        this._slide('sine', 600, 80, t, 0.7, 0.2);
        [72, 76, 79, 84, 88].forEach((m, i) => this.mar(m, t + 0.6 + i * 0.1, 0.18, S));
        break;
      case 'win':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.8]].forEach(([m, d]) => this.mar(m, t + d, 0.2, S));
        this._croak(t + 1.1, 120, 0.06);
        break;
      case 'gulped':
        this._slide('sine', 400, 90, t, 0.6, 0.2);
        [[67, 0.6], [63, 0.85], [60, 1.1]].forEach(([m, d]) => this._tone('triangle', hz(m), t + d, 0.3, 0.07));
        break;
      case 'croak':
        this._croak(t, 140, 0.08);
        break;
      case 'star':
        this.mar(88 + (arg ?? 0) * 3, t, 0.2, S);
        break;
      case 'tap':
        this._tone('sine', 880, t, 0.06, 0.05);
        break;
      case 'no':
        this._tone('square', 220, t, 0.1, 0.03);
        break;
      default:
    }
  }
}
