import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
import { SynthBase, hz } from '../../cozy_kit/audio.js';

export class Sound extends SynthBase {
  play(n, a) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'scoop': this.noise(t, 0.12, 0.08, 'bandpass', 1800, 2); this.tone('triangle', hz(84 + Math.min(12, Math.floor((a || 10) / 10))), t, 0.1, 0.06); break;
      case 'gate+': [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(76 + s), t + i * 0.05, 0.2, 0.12)); break;
      case 'gatex': [0, 7, 12, 16].forEach((s, i) => this.tone('triangle', hz(79 + s), t + i * 0.05, 0.25, 0.13)); break;
      case 'gate-': this.slide('sawtooth', 400, 120, t, 0.3, 0.08); break;
      case 'wall': this.noise(t, 0.3, 0.14, 'lowpass', 600); this.tone('sine', 90, t, 0.3, 0.14); break;
      case 'bank': for (let i = 0; i < 12; i++) this.tone('square', hz(84 + (i % 5) * 2), t + i * 0.07, 0.08, 0.05); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.14)); break;
      case 'jump': this.slide('triangle', 300, 700, t, 0.2, 0.08); break;
      case 'land': this.noise(t, 0.15, 0.1, 'lowpass', 500); this.tone('sine', 110, t, 0.15, 0.1); break;
      case 'spin': this.noise(t, 0.25, 0.1, 'highpass', 1500, 1); this.tone('square', 180, t, 0.2, 0.06); break;
      case 'pour': this.noise(t, 0.12, 0.06, 'bandpass', 2600 + Math.random() * 1200, 3); break;
      case 'tilt': this.slide('sawtooth', 120, 220, t, 0.9, 0.05); break;
      case 'tap': this.tone('sine', 640, t, 0.06, 0.08); break;
      default: break;
    }
  }
  setMode(on) { if (!on) { this.setBed(null); this.setTune(null); this.stopEng(); return; } this._eng(); this.setTune({ tempo: 120, beats: 16, wave: 'square', vol: 0.045, notes: [[0, 60, 1], [1, 64, 1], [2, 67, 1], [3, 64, 1], [4, 62, 1], [5, 65, 1], [6, 69, 1], [7, 65, 1], [8, 60, 1], [9, 64, 1], [10, 67, 2], [12, 65, 1], [13, 62, 1], [14, 60, 2], [0, 36, 2], [4, 38, 2], [8, 36, 2], [12, 41, 2]] }); }
  _eng() { const c = this.ctx; if (!c || this.e) return; const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 55; const lp = c.createBiquadFilter(); lp.frequency.value = 300; const g = c.createGain(); g.gain.value = this.muted ? 0.0001 : 0.03; o.connect(lp).connect(g).connect(this.sfx); o.start(); this.e = { o, g }; }
  stopEng() { if (this.e) { try { this.e.o.stop(); } catch (_) { /* fine */ } this.e = null; } }
}


attachSamples(Sound, SAMPLES);
attachMusic(Sound);
