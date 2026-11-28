import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { iosKeepAlive, iosPause, iosWatch } from './ios_audio.js';
// Retro diner sound, made live with Web Audio (no files): a little rock-and-roll band in the track's own tempo (the
// bars sweep on its beat): walking bass, swung drums, piano stabs on the off-beats and a breathy sax melody, with soft
// vinyl crackle under it. Effects: a needle drop, count-in clicks, hop and duck, a whoosh as a bar passes close, a
// bonk when hit, a boing for bumps, a falling whistle, a record scratch when the spin flips, gap and tonearm warnings,
// and a sax fanfare at the end. The iPhone/iPad keep-alive is shared with the other games.
const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
// a 12-bar-ish blues in C squeezed into 8 bars: [bass root, chord]
const BLUES = [[48, [64, 67, 70]], [48, [64, 67, 70]], [53, [65, 69, 72]], [48, [64, 67, 70]], [55, [65, 67, 71]], [53, [65, 69, 72]], [48, [64, 67, 70]], [55, [65, 67, 71]]];
const WALK = [0, 4, 7, 9];
// sax melody: [bar, eighth, midi, length in eighths]
const MELODY = [[0, 0, 72, 2], [0, 3, 75, 1], [0, 4, 76, 3], [1, 0, 79, 2], [1, 4, 76, 2], [2, 0, 77, 2], [2, 4, 81, 3], [3, 0, 79, 4],
  [4, 0, 74, 2], [4, 3, 77, 1], [4, 4, 79, 3], [5, 0, 81, 2], [5, 4, 77, 2], [6, 0, 76, 2], [6, 2, 75, 1], [6, 4, 72, 3], [7, 0, 79, 4]];

// ---- the Egyptian leg (tracks 8–12): an original 8-bar backing in D hijaz (D Eb F# G A Bb C) —
// [bass root, chord] per bar, a hijaz walking line, and one ORIGINAL melody per lead instrument.
// Nothing here transcribes a known or folk tune; every phrase was written for this game.
const EGYPT = [[50, [62, 66, 69]], [50, [62, 66, 69]], [51, [63, 67, 70]], [50, [62, 66, 69]], [55, [62, 67, 70]], [51, [63, 67, 70]], [50, [62, 66, 69]], [51, [63, 67, 70]]];
const HWALK = [0, 4, 7, 5];
const LEAD_MELODY = {
  // oud: plucked phrases that breathe — short answers across the bars
  oud: [[0, 0, 62, 2], [0, 2, 66, 1], [0, 3, 69, 1], [0, 4, 67, 2], [0, 6, 66, 2], [1, 0, 63, 2], [1, 2, 62, 2], [1, 4, 66, 3],
    [2, 0, 70, 2], [2, 2, 67, 1], [2, 3, 63, 1], [2, 4, 67, 2], [3, 0, 69, 2], [3, 2, 66, 1], [3, 3, 62, 1], [3, 4, 62, 3],
    [4, 0, 67, 2], [4, 2, 70, 1], [4, 3, 72, 1], [4, 4, 70, 2], [4, 6, 69, 2], [5, 0, 63, 2], [5, 2, 67, 2], [5, 4, 66, 3],
    [6, 0, 62, 2], [6, 2, 66, 1], [6, 3, 69, 1], [6, 4, 74, 2], [6, 6, 72, 2], [7, 0, 70, 2], [7, 2, 69, 1], [7, 3, 66, 1], [7, 4, 62, 3]],
  // rababa: a bowed desert line — long held notes, slow turns
  rababa: [[0, 0, 69, 4], [0, 4, 67, 3], [1, 0, 66, 4], [1, 4, 62, 3], [2, 0, 63, 4], [2, 4, 67, 3], [3, 0, 69, 6],
    [4, 0, 72, 4], [4, 4, 70, 3], [5, 0, 67, 4], [5, 4, 63, 3], [6, 0, 66, 4], [6, 4, 69, 3], [7, 0, 62, 6]],
  // mizmar: a bright wedding reed — quick repeats and leaps, an octave up
  mizmar: [[0, 0, 74, 1], [0, 1, 74, 1], [0, 2, 78, 2], [0, 4, 74, 1], [0, 5, 75, 1], [0, 6, 78, 2], [1, 0, 81, 2], [1, 2, 78, 1], [1, 3, 74, 1], [1, 4, 75, 3],
    [2, 0, 82, 2], [2, 2, 81, 1], [2, 3, 78, 1], [2, 4, 75, 2], [3, 0, 78, 1], [3, 1, 78, 1], [3, 2, 74, 2], [3, 4, 74, 3],
    [4, 0, 79, 2], [4, 2, 82, 1], [4, 3, 81, 1], [4, 4, 78, 2], [4, 6, 75, 2], [5, 0, 78, 2], [5, 2, 75, 1], [5, 3, 78, 1], [5, 4, 81, 3],
    [6, 0, 74, 1], [6, 1, 74, 1], [6, 2, 78, 2], [6, 4, 81, 2], [6, 6, 82, 2], [7, 0, 81, 2], [7, 2, 78, 1], [7, 3, 75, 1], [7, 4, 74, 3]],
  // qanun: zither runs — little arpeggio cascades up and down the hijaz scale
  qanun: [[0, 0, 62, 1], [0, 1, 66, 1], [0, 2, 69, 1], [0, 3, 74, 1], [0, 4, 72, 1], [0, 5, 69, 1], [0, 6, 66, 2], [1, 0, 63, 1], [1, 1, 67, 1], [1, 2, 70, 1], [1, 3, 67, 1], [1, 4, 66, 3],
    [2, 0, 70, 1], [2, 1, 72, 1], [2, 2, 75, 1], [2, 3, 72, 1], [2, 4, 67, 3], [3, 0, 69, 1], [3, 1, 66, 1], [3, 2, 62, 1], [3, 3, 66, 1], [3, 4, 69, 3],
    [4, 0, 67, 1], [4, 1, 70, 1], [4, 2, 74, 1], [4, 3, 79, 1], [4, 4, 78, 1], [4, 5, 74, 1], [4, 6, 69, 2], [5, 0, 75, 1], [5, 1, 72, 1], [5, 2, 70, 1], [5, 3, 67, 1], [5, 4, 66, 3],
    [6, 0, 62, 1], [6, 1, 66, 1], [6, 2, 69, 1], [6, 3, 74, 1], [6, 4, 78, 2], [6, 6, 74, 2], [7, 0, 72, 1], [7, 1, 69, 1], [7, 2, 66, 1], [7, 3, 63, 1], [7, 4, 62, 3]],
  // tabla: the lead IS the drum — pitch picks the stroke (low = dum, mid = ka, high = tak),
  // an original wahda-style pattern: dum on the beat, tak answers off it
  tabla: [[0, 0, 60, 1], [0, 2, 72, 1], [0, 3, 67, 1], [0, 4, 60, 1], [0, 6, 72, 1], [1, 0, 60, 1], [1, 2, 72, 1], [1, 4, 67, 1], [1, 5, 72, 1], [1, 6, 60, 1],
    [2, 0, 60, 1], [2, 2, 72, 1], [2, 3, 67, 1], [2, 4, 60, 1], [2, 6, 72, 1], [3, 0, 72, 1], [3, 1, 72, 1], [3, 2, 60, 1], [3, 4, 67, 1], [3, 6, 60, 1],
    [4, 0, 60, 1], [4, 2, 72, 1], [4, 3, 67, 1], [4, 4, 60, 1], [4, 6, 72, 1], [5, 0, 60, 1], [5, 2, 72, 1], [5, 4, 67, 1], [5, 5, 72, 1], [5, 6, 60, 1],
    [6, 0, 60, 1], [6, 2, 72, 1], [6, 3, 67, 1], [6, 4, 60, 1], [6, 6, 72, 1], [7, 0, 72, 1], [7, 1, 67, 1], [7, 2, 72, 1], [7, 3, 60, 1], [7, 4, 60, 2]],
};
export const LEADS = ['sax', ...Object.keys(LEAD_MELODY)];

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.mode = 'off';
    this.lead = 'sax';
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
    this.tempo = this.tempo || 112;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.12;
  }

  dispose() {
    this.setCrackle(false);
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

  /** A breathy, slightly growly sax-like lead. */
  _sax(m, t, len, vol) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(hz(m) * 0.985, t);
    o.frequency.exponentialRampToValueAtTime(hz(m), t + 0.06);
    const vib = c.createOscillator();
    vib.frequency.value = 5.5;
    const vg = c.createGain();
    vg.gain.value = hz(m) * 0.01;
    vib.connect(vg).connect(o.frequency);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1500;
    lp.Q.value = 2;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.04);
    g.gain.setTargetAtTime(0.0001, t + len * 0.8, 0.06);
    o.connect(lp).connect(g).connect(this.music);
    o.start(t);
    vib.start(t);
    o.stop(t + len + 0.4);
    vib.stop(t + len + 0.4);
  }

  // ---- Egyptian lead instruments (Phase 2F) — all synthesized live, event-scheduled, no files ----

  /** A plucked-string body shared by oud and qanun: bright pick attack, lowpass that closes as the
      note dies, fundamental + octave + a whisper of third harmonic. */
  _pluck(m, t, vol, bright, len) {
    const c = this.ctx;
    const f = hz(m);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 1;
    lp.frequency.setValueAtTime(bright, t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(500, bright * 0.22), t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    lp.connect(g).connect(this.music);
    for (const [mult, v] of [[1, 1], [2, 0.35], [3, 0.12]]) {
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = f * mult;
      const og = c.createGain();
      og.gain.value = v;
      o.connect(og).connect(lp);
      o.start(t);
      o.stop(t + len + 0.05);
    }
    this._noise(t, 0.03, vol * 0.4, 'highpass', 2600, 0.7, this.music); // the pick itself
  }

  /** Oud: a warm, round pluck with a short natural ring. */
  _oud(m, t, len, vol) { this._pluck(m, t, vol, 3000, Math.min(0.55, Math.max(0.3, len))); }

  /** Qanun: a brighter zither pluck, with the player's tremolo — two quiet re-plucks after the hit. */
  _qanun(m, t, len, vol) {
    this._pluck(m, t, vol, 4600, Math.min(0.4, Math.max(0.22, len * 0.7)));
    if (len > 0.22) {
      this._pluck(m, t + 0.09, vol * 0.45, 4200, 0.22);
      this._pluck(m, t + 0.18, vol * 0.3, 3800, 0.2);
    }
  }

  /** Rababa: a bowed desert string — slow bow attack, dark lowpass, gentle vibrato, a breath of bow noise. */
  _rababa(m, t, len, vol) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(hz(m) * 0.99, t);
    o.frequency.exponentialRampToValueAtTime(hz(m), t + 0.12);
    const vib = c.createOscillator();
    vib.frequency.value = 4.2;
    const vg = c.createGain();
    vg.gain.value = hz(m) * 0.006;
    vib.connect(vg).connect(o.frequency);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 850;
    lp.Q.value = 2;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.09);
    g.gain.setTargetAtTime(0.0001, t + len * 0.85, 0.07);
    o.connect(lp).connect(g).connect(this.music);
    o.start(t);
    vib.start(t);
    o.stop(t + len + 0.4);
    vib.stop(t + len + 0.4);
    this._noise(t, len * 0.8, vol * 0.12, 'bandpass', 2400, 0.6, this.music); // bow hair on the string
  }

  /** Mizmar: a loud double-reed — square+saw blend through a nasal bandpass, fast vibrato, a pitch scoop in. */
  _mizmar(m, t, len, vol) {
    const c = this.ctx;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1150;
    bp.Q.value = 1.1;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 2600;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.setTargetAtTime(0.0001, t + len * 0.85, 0.04);
    bp.connect(lp).connect(g).connect(this.music);
    const vib = c.createOscillator();
    vib.frequency.value = 6;
    const vg = c.createGain();
    vg.gain.value = hz(m) * 0.012;
    vib.connect(vg);
    for (const [type, det] of [['square', 0.995], ['sawtooth', 1.004]]) {
      const o = c.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(hz(m) * 0.94 * det, t);
      o.frequency.exponentialRampToValueAtTime(hz(m) * det, t + 0.05);
      vg.connect(o.frequency);
      const og = c.createGain();
      og.gain.value = 0.5;
      o.connect(og).connect(bp);
      o.start(t);
      o.stop(t + len + 0.3);
    }
    vib.start(t);
    vib.stop(t + len + 0.3);
  }

  /** Tabla strokes: dum (deep palm), ka (rim tap), tak (bright finger snap). Pitch picks the stroke. */
  _tablaStroke(m, t, vol) {
    if (m >= 71) { // tak
      this._noise(t, 0.05, vol, 'bandpass', 3200, 1.4, this.music);
      this._tone('sine', 880, t, 0.05, vol * 0.5, this.music, 0.002);
    } else if (m >= 65) { // ka
      this._noise(t, 0.07, vol * 0.8, 'bandpass', 1800, 1.2, this.music);
    } else { // dum
      this._slide('sine', 175, 62, t, 0.17, vol * 1.5, this.music);
      this._noise(t, 0.03, vol * 0.4, 'lowpass', 700, 0.8, this.music);
    }
  }

  /** Play one note of the current Egyptian lead. */
  _leadNote(lead, m, t, len, vol) {
    switch (lead) {
      case 'oud': this._oud(m, t, len, vol * 1.7); break;
      case 'qanun': this._qanun(m, t, len, vol * 1.5); break;
      case 'rababa': this._rababa(m, t, len, vol * 1.3); break;
      case 'mizmar': this._mizmar(m, t, len, vol * 1.0); break;
      case 'tabla': this._tablaStroke(m, t, vol * 2.2); break;
      default: this._sax(m, t, len, vol);
    }
  }

  /** Choose the track's lead instrument ('sax' for the original tour) and restart the song. */
  setLead(lead) {
    this.lead = LEADS.includes(lead) ? lead : 'sax';
    if (this.ctx) { this.step = 0; this.nextTime = this.ctx.currentTime + 0.05; }
  }

  /** Set the song's tempo (the track's beat) and restart it on the next beat. */
  setTempo(bpm) {
    this.tempo = bpm;
    if (this.ctx) { this.step = 0; this.nextTime = this.ctx.currentTime + 0.05; }
  }

  setCrackle(on) {
    if (!this.ctx) return;
    if (on && !this.crk) {
      const c = this.ctx;
      const s = c.createBufferSource();
      s.buffer = this.noiseBuf;
      s.loop = true;
      const f = c.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 3500;
      const g = c.createGain();
      g.gain.value = 0.012;
      s.connect(f).connect(g).connect(this.music);
      s.start();
      this.crk = s;
    } else if (!on && this.crk) { try { this.crk.stop(); } catch (_) { /* fine */ } this.crk = null; }
  }

  // ---- music ----------------------------------------------------------------------------------------------------

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.mode === 'off') return;
    const ahead = c.currentTime + 0.2;
    const play = this.mode === 'play';
    const beat = 60 / this.tempo;
    while (this.nextTime < ahead) {
      const t = this.nextTime;
      const step = this.step % 64; // 8 bars of 8 swung eighths
      const bar = Math.floor(step / 8);
      const e = step % 8;
      const lead = this.lead || 'sax';
      const egypt = lead !== 'sax';
      const [root, chord] = (egypt ? EGYPT : BLUES)[bar];
      const walk = egypt ? HWALK : WALK;
      // walking bass on every beat
      if (e % 2 === 0) this._tone('triangle', hz(root - 12 + walk[(e / 2) % 4]), t, beat * 0.9, 0.16, this.music, 0.01);
      // drums: kick on 1 and 3, snare on 2 and 4, a swung ride (under a tabla lead the kit steps back)
      if (e === 0 || e === 4) this._slide('sine', 120, 50, t, 0.18, (play ? 0.3 : 0.2) * (lead === 'tabla' ? 0.45 : 1), this.music);
      if (e === 2 || e === 6) this._noise(t, 0.14, (play ? 0.12 : 0.07) * (lead === 'tabla' ? 0.4 : 1), 'bandpass', 2000, 0.9, this.music);
      this._noise(t, 0.05, e % 2 ? 0.02 : 0.035, 'highpass', 8000, 0.8, this.music);
      // piano stabs on the off-beats (on the Egyptian leg: soft qanun-style chord plucks instead)
      if (e === 3 || e === 7) for (const m of chord) {
        if (egypt) this._pluck(m, t, 0.03, 3800, 0.16);
        else this._tone('triangle', hz(m), t, 0.18, 0.035, this.music, 0.003);
      }
      // the lead melody: the sax on the original tour, the track's Egyptian instrument on the new leg
      // (braces matter: a bare if/else here would bind the else to the inner note-match if)
      if (!egypt) {
        for (const [b, ee, m, l] of MELODY) if (b === bar && ee === e) this._sax(m, t, l * beat * 0.5, play ? 0.05 : 0.04);
      } else {
        for (const [b, ee, m, l] of LEAD_MELODY[lead]) if (b === bar && ee === e) this._leadNote(lead, m, t, l * beat * 0.5, play ? 0.05 : 0.04);
      }
      this.step++;
      // swing: long-short eighths
      this.nextTime += beat * (e % 2 ? 0.42 : 0.58);
    }
  }

  // ---- effects ----------------------------------------------------------------------------------------------------

  play(name, arg) {
    if (!this.on) return;
    const t = this.ctx.currentTime + 0.005;
    const S = this.sfx;
    switch (name) {
      case 'count':
        this._tone('square', arg === 1 ? 1320 : 880, t, 0.08, 0.05);
        break;
      case 'go':
        this._noise(t, 0.3, 0.1, 'bandpass', 1200, 0.8, S, 3000); // needle drop
        this._tone('sine', 120, t, 0.2, 0.15);
        break;
      case 'jump':
        this._slide('sine', 320, 760, t, 0.16, 0.12);
        break;
      case 'duck':
        this._noise(t, 0.12, 0.06, 'bandpass', 900, 1.2, S, 400);
        this._slide('sine', 500, 260, t, 0.12, 0.06);
        break;
      case 'whoosh': // a bar sweeping past close by
        this._noise(t, 0.25, 0.06, 'bandpass', 600, 1, S, 2400);
        break;
      case 'hit':
        this._tone('sine', 180, t, 0.15, 0.25);
        this._tone('square', 320, t, 0.06, 0.06);
        this._noise(t, 0.1, 0.1, 'lowpass', 1200);
        break;
      case 'bump':
        this._slide('sine', 260, 520, t, 0.14, 0.12);
        break;
      case 'out': // falling off, a cartoon whistle down
        this._slide('sine', 1400, 300, t, 0.7, 0.07);
        break;
      case 'flipWarn':
        this._tone('square', 660, t, 0.08, 0.05);
        this._tone('square', 660, t + 0.15, 0.08, 0.05);
        break;
      case 'flip': // a record scratch
        this._noise(t, 0.12, 0.14, 'bandpass', 1500, 2, S, 600);
        this._noise(t + 0.13, 0.14, 0.14, 'bandpass', 600, 2, S, 1700);
        break;
      case 'gapWarn':
        for (let i = 0; i < 3; i++) this._tone('sine', 990, t + i * 0.12, 0.06, 0.05);
        break;
      case 'gapOpen':
        this._noise(t, 0.3, 0.1, 'lowpass', 500);
        break;
      case 'armWarn':
        this._slide('sawtooth', 120, 220, t, 0.8, 0.04);
        break;
      case 'armSweep':
        this._noise(t, 1.2, 0.08, 'bandpass', 300, 0.8, S, 900);
        break;
      case 'saved':
        [72, 76, 79].forEach((m, i) => this._tone('triangle', hz(m), t + i * 0.07, 0.15, 0.07));
        break;
      case 'win':
        [[67, 0], [71, 0.12], [74, 0.24], [79, 0.36], [83, 0.55], [86, 0.7]].forEach(([m, d]) => this._sax(m, t + d, 0.3, 0.07));
        this._noise(t + 0.4, 1.4, 0.05, 'bandpass', 1500, 0.5);
        break;
      case 'lose':
        [74, 70, 67, 62].forEach((m, i) => this._sax(m, t + i * 0.2, 0.25, 0.06));
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

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
