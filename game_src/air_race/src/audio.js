import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Air race sound, made live with Web Audio (no files). A sunny island tune (steel drums, bouncy bass, kick, snare,
// shakers; bell pads on the glacier course). The engine is continuous: a propeller buzz whose pitch, blade chop and
// brightness follow the plane's speed, wind that rises with speed, and an afterburner roar while boosting. Effects:
// countdown beeps, ring chimes that climb with each ring in a row, golden-ring sparkles, boost kick, soft bumps, rival
// fly-bys, lap and finish fanfares, star chimes. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[60, [64, 67, 72]], [65, [65, 69, 72]], [67, [67, 71, 74]], [60, [64, 67, 72]], [57, [64, 69, 72]], [65, [65, 69, 72]], [67, [67, 71, 74]], [60, [64, 67, 72]]];
const MELODY = [[0, 0, 79], [0, 2, 81], [0, 4, 79], [0, 6, 76], [1, 0, 77], [1, 3, 81], [1, 6, 84], [2, 0, 83], [2, 2, 81], [2, 4, 79], [2, 6, 74], [3, 0, 76], [3, 4, 72],
  [4, 0, 76], [4, 2, 79], [4, 4, 81], [4, 6, 84], [5, 0, 81], [5, 3, 77], [5, 6, 81], [6, 0, 79], [6, 2, 77], [6, 4, 74], [6, 6, 71], [7, 0, 72]];

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
    this.tempo = mode === 'play' ? 140 : 104;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    clearInterval(this._timer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
    this.eng = null;
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

  // a steel-drum-like note: a bright fundamental with a quick, slightly detuned overtone
  steel(m, t, vol, dest = this.music) {
    const f = hz(m);
    this._tone('sine', f, t, 0.5, vol, dest, 0.004);
    this._tone('sine', f * 2.01, t, 0.22, vol * 0.45, dest, 0.004);
    this._tone('triangle', f * 3.98, t, 0.08, vol * 0.18, dest, 0.002);
  }

  setWorld(w) { this.world = w; }

  // ---- the engine: a continuous propeller buzz and wind that follow the plane's speed ------------------------------

  _engineInit() {
    if (this.eng || !this.ctx) return;
    const c = this.ctx;
    const out = c.createGain();
    out.gain.value = 0;
    out.connect(this.sfx);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    lp.Q.value = 0.8;
    lp.connect(out);
    // engine: a saw and a square an octave up, chopped by the propeller blades
    const saw = c.createOscillator();
    saw.type = 'sawtooth';
    const sq = c.createOscillator();
    sq.type = 'square';
    const sqg = c.createGain();
    sqg.gain.value = 0.35;
    const chop = c.createGain();
    chop.gain.value = 0.6;
    const lfo = c.createOscillator();
    lfo.type = 'sine';
    const lfoG = c.createGain();
    lfoG.gain.value = 0.4;
    lfo.connect(lfoG).connect(chop.gain);
    saw.connect(chop);
    sq.connect(sqg).connect(chop);
    chop.connect(lp);
    // wind rushing past
    const wind = c.createBufferSource();
    wind.buffer = this.noiseBuf;
    wind.loop = true;
    const wf = c.createBiquadFilter();
    wf.type = 'bandpass';
    wf.Q.value = 0.6;
    const wg = c.createGain();
    wg.gain.value = 0;
    wind.connect(wf).connect(wg).connect(this.sfx);
    // boost roar
    const roar = c.createBufferSource();
    roar.buffer = this.noiseBuf;
    roar.loop = true;
    const rf = c.createBiquadFilter();
    rf.type = 'lowpass';
    rf.frequency.value = 700;
    const rg = c.createGain();
    rg.gain.value = 0;
    roar.connect(rf).connect(rg).connect(this.sfx);
    for (const n of [saw, sq, lfo, wind, roar]) n.start();
    this.eng = { out, lp, saw, sq, lfo, wf, wg, rg, rf };
  }

  /** Called every frame: speed in km/h, whether boosting, and whether the engine should be heard at all. */
  engine(kmh, boosting, on = true) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this._engineInit();
    const e = this.eng;
    const t = this.ctx.currentTime;
    const k = Math.max(0, Math.min(1.4, kmh / 504));
    const base = 46 + k * 52 + (boosting ? 14 : 0);
    e.saw.frequency.setTargetAtTime(base, t, 0.15);
    e.sq.frequency.setTargetAtTime(base * 2, t, 0.15);
    e.lfo.frequency.setTargetAtTime(base * 0.5, t, 0.15); // blade-pass buzz
    e.lp.frequency.setTargetAtTime(500 + k * 900 + (boosting ? 700 : 0), t, 0.2);
    e.out.gain.setTargetAtTime(on ? 0.06 + k * 0.07 : 0, t, 0.2);
    e.wf.frequency.setTargetAtTime(380 + k * 1100, t, 0.2);
    e.wg.gain.setTargetAtTime(on ? k * k * 0.12 : 0, t, 0.25);
    e.rg.gain.setTargetAtTime(on && boosting ? 0.2 : 0, t, boosting ? 0.06 : 0.3);
    e.rf.frequency.setTargetAtTime(boosting ? 1400 : 600, t, 0.2);
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const eighth = 60 / this.tempo / 2;
    const glacier = this.world === 'glacier';
    const play = this.mode === 'play';
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64;
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const [root, chord] = CHORDS[bar];
      // bass: a bouncy island bass line
      if (e === 0 || e === 3 || e === 6) this._tone('triangle', hz(root - 12 + (e === 6 ? 7 : 0)), t, eighth * 1.6, 0.2, this.music, 0.01);
      // steel-drum chords on the off-beats (bell pad on the glacier)
      if (e % 2 === 1) chord.forEach((m) => (glacier ? this._tone('sine', hz(m + 12), t, eighth * 1.8, 0.035, this.music, 0.01) : this.steel(m, t, 0.05)));
      for (const [b, ee, m] of MELODY) if (b === bar && ee === e) this.steel(m + (glacier ? 0 : 0), t + 0.005, play ? 0.13 : 0.1);
      if (play) {
        if (e === 0 || e === 4) this._slide('sine', 150, 45, t, 0.18, 0.32, this.music); // kick
        if (e === 4) this._noise(t, 0.12, 0.09, 'bandpass', 1800, 0.8, this.music); // snare
        this._noise(t, 0.03, e % 2 ? 0.035 : 0.02, 'highpass', 8000, 1, this.music); // hats
        if (e === 7 && bar % 2 === 1) this._noise(t, 0.05, 0.05, 'bandpass', 3500, 2, this.music); // shaker
      } else if (e === 0) this._noise(t, 0.05, 0.02, 'highpass', 7000, 1, this.music);
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
      case 'count':
        this._tone('square', 660, t, 0.18, 0.06);
        this._tone('sine', 660, t, 0.25, 0.1);
        break;
      case 'go':
        this._tone('square', 990, t, 0.4, 0.06);
        this._tone('sine', 1320, t, 0.5, 0.1);
        break;
      case 'ring': { // a sparkly chime that climbs with each ring in a row
        const up = Math.min(arg?.combo ?? 0, 8);
        const base = 76 + [0, 2, 4, 5, 7, 9, 11, 12, 14][up];
        [0, 4, 7].forEach((d, i) => this._tone('sine', hz(base + d), t + i * 0.045, 0.35, 0.08, S));
        this._tone('triangle', hz(base + 19), t + 0.12, 0.3, 0.03, S);
        this._noise(t, 0.25, 0.05, 'bandpass', 4000, 1, S, 9000); // whoosh through
        if (arg?.golden) [88, 91, 96].forEach((m, i) => this.steel(m, t + 0.18 + i * 0.07, 0.12, S));
        break;
      }
      case 'full':
        [84, 88, 91, 96].forEach((m, i) => this._tone('sine', hz(m), t + i * 0.06, 0.25, 0.07, S));
        break;
      case 'boost': // afterburner kick
        this._noise(t, 0.9, 0.3, 'lowpass', 400, 0.7, S, 2600);
        this._slide('sawtooth', 120, 420, t, 0.6, 0.06, S);
        break;
      case 'miss':
        this._slide('sine', 500, 380, t, 0.18, 0.04, S);
        break;
      case 'bump':
        this._tone('sine', 110, t, 0.3, 0.3);
        this._noise(t, 0.35, 0.18, 'lowpass', 900, 0.8, S, 200);
        this._slide('triangle', 700, 300, t + 0.05, 0.25, 0.05);
        break;
      case 'edge':
        this._noise(t, 0.2, 0.05, 'bandpass', 900, 1);
        break;
      case 'flyby': // a rival zooms past (Doppler drop)
        this._slide('sawtooth', 260, 150, t, 0.7, 0.035);
        this._noise(t, 0.7, 0.08, 'bandpass', 1600, 0.8, S, 500);
        break;
      case 'lap':
        [72, 76, 79, 84].forEach((m, i) => this.steel(m, t + i * 0.1, 0.16, S));
        break;
      case 'finish':
        [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.56], [84, 0.68], [88, 0.8]].forEach(([m, d]) => this.steel(m, t + d, 0.2, S));
        this._noise(t + 0.1, 1.5, 0.05, 'highpass', 6000, 1, S); // cheering sparkle
        break;
      case 'star':
        this.steel(88 + (arg ?? 0) * 3, t, 0.2, S);
        this._tone('sine', hz(100 + (arg ?? 0) * 3), t, 0.4, 0.04);
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
