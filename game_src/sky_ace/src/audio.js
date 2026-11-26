import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Sky Ace sound: all synthesized (Web Audio), no files. Upbeat adventure tune, propeller hum, shots, hits, coins, power-ups, bomb, boss.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const PLAY = { tempo: 132, beats: 16, wave: 'triangle', vol: 0.07, notes: [
  [0, 72, 0.5], [0.5, 76, 0.5], [1, 79, 1], [2, 77, 0.5], [2.5, 76, 0.5], [3, 74, 1], [4, 72, 0.5], [4.5, 76, 0.5], [5, 79, 1], [6, 81, 1], [7, 79, 1],
  [8, 77, 0.5], [8.5, 81, 0.5], [9, 84, 1], [10, 81, 0.5], [10.5, 79, 0.5], [11, 77, 1], [12, 76, 0.5], [12.5, 74, 0.5], [13, 72, 1], [14, 74, 1], [15, 67, 1],
  [0, 48, 1], [2, 55, 1], [4, 48, 1], [6, 55, 1], [8, 53, 1], [10, 60, 1], [12, 55, 1], [14, 43, 1], [1, 52, 0.5], [5, 52, 0.5], [9, 57, 0.5], [13, 52, 0.5]] };
const BOSS = { tempo: 150, beats: 16, wave: 'sawtooth', vol: 0.045, notes: [
  [0, 69, 0.5], [0.5, 69, 0.5], [1, 72, 1], [2, 71, 0.5], [2.5, 69, 0.5], [3, 67, 1], [4, 69, 0.5], [4.5, 69, 0.5], [5, 76, 1], [6, 75, 1], [7, 72, 1],
  [8, 65, 0.5], [8.5, 65, 0.5], [9, 69, 1], [10, 68, 0.5], [10.5, 65, 0.5], [11, 64, 1], [12, 62, 0.5], [12.5, 64, 0.5], [13, 65, 1], [14, 68, 1], [15, 64, 1],
  [0, 45, 1], [2, 45, 1], [4, 45, 1], [6, 52, 1], [8, 41, 1], [10, 41, 1], [12, 43, 1], [14, 40, 1]] };
const MENU = { tempo: 112, beats: 16, wave: 'triangle', vol: 0.06, notes: [
  [0, 67, 1], [1, 72, 1], [2, 76, 2], [4, 74, 1], [5, 71, 1], [6, 67, 2], [8, 65, 1], [9, 69, 1], [10, 72, 2], [12, 71, 1], [13, 67, 1], [14, 62, 2],
  [0, 48, 2], [4, 43, 2], [8, 41, 2], [12, 43, 2]] };

export class Sound extends SynthBase {
  constructor() { super(); this.last = {}; this.eng = null; }
  gate(k, ms) { const n = performance.now(); if (this.last[k] && n - this.last[k] < ms) return false; this.last[k] = n; return true; }
  play(n) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'shot': if (this.gate('shot', 90)) this.tone('square', hz(88), t, 0.04, 0.018); break;
      case 'warn': if (this.gate('warn', 160)) { this.tone('sine', hz(84), t, 0.09, 0.05); this.tone('sine', hz(84), t + 0.14, 0.09, 0.05); } break;
      case 'efire': if (this.gate('efire', 80)) this.slide('triangle', 520, 260, t, 0.14, 0.05); break;
      case 'hit': this.noise(t, 0.22, 0.2, 'lowpass', 1400, 1, this.sfx, 200); this.slide('sawtooth', 220, 70, t, 0.25, 0.1); break;
      case 'shield': this.tone('triangle', hz(84), t, 0.2, 0.08); this.tone('triangle', hz(91), t + 0.05, 0.2, 0.06); break;
      case 'pop': if (this.gate('pop', 40)) { this.noise(t, 0.16, 0.1, 'bandpass', 1800, 1.5, this.sfx, 400); this.slide('square', 520, 180, t, 0.14, 0.05); } break;
      case 'coin': if (this.gate('coin', 50)) { this.tone('square', hz(83), t, 0.06, 0.04); this.tone('square', hz(90), t + 0.06, 0.12, 0.04); } break;
      case 'power': [0, 4, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.05, 0.2, 0.1)); break;
      case 'bomb': this.noise(t, 0.9, 0.4, 'lowpass', 2500, 0.8, this.sfx, 60); this.slide('sawtooth', 200, 30, t, 0.8, 0.2); break;
      case 'bosshit': if (this.gate('bh', 120)) this.tone('square', hz(55), t, 0.05, 0.05); break;
      case 'boss': [0, 0.35, 0.7].forEach((d, i) => this.slide('sawtooth', 110 - i * 12, 70 - i * 8, t + d, 0.34, 0.14)); break;
      case 'phase': this.slide('sawtooth', 90, 300, t, 0.5, 0.12); this.noise(t, 0.4, 0.15, 'lowpass', 900); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.55, 0.14)); break;
      case 'lose': [0, -3, -7, -12].forEach((s, i) => this.tone('triangle', hz(67 + s), t + i * 0.22, 0.5, 0.12)); break;
      case 'tap': this.tone('sine', 640, t, 0.05, 0.07); break;
      case 'buy': [0, 4, 7, 12].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.06, 0.25, 0.12)); break;
      default: break;
    }
  }
  engine(on) {
    const c = this.ctx;
    if (!on || !c) { if (this.eng) { const e = this.eng; this.eng = null; try { e.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.1); setTimeout(() => { try { e.o.stop(); e.l.stop(); } catch (_) { /* fine */ } }, 500); } catch (_) { /* fine */ } } return; }
    if (this.eng) return;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 64;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
    const g = c.createGain(); g.gain.value = 0.0001;
    const l = c.createOscillator(); l.frequency.value = 24; const lg = c.createGain(); lg.gain.value = 0.012;
    l.connect(lg).connect(g.gain);
    o.connect(f).connect(g).connect(this.sfx);
    o.start(); l.start(); g.gain.setTargetAtTime(0.03, c.currentTime, 0.3);
    this.eng = { o, g, l };
  }
  setMode(m) {
    this.mode = m;
    if (!m) { this.setTune(null); this.engine(false); return; }
    this.setTune(m === 'boss' ? BOSS : m === 'play' ? PLAY : MENU);
    this.engine(m === 'play' || m === 'boss');
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
