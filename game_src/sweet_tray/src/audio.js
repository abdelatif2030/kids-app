import { attachSamples, attachMusic } from '../../cozy_kit/sample_hook.js';
import { SAMPLES } from './samples.js';
// Sweet Tray sound: all synthesized live (Web Audio), no files. A cheerful bakery tune, a soft pop for every tap,
// a chime that climbs with the combo, a magic sparkle, and short win / lose jingles.
import { SynthBase, hz } from '../../cozy_kit/audio.js';

const PENTA = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24];

export class Sound extends SynthBase {
  play(n, arg = 0) {
    if (typeof window !== 'undefined' && window.__cheerSfx) window.__cheerSfx(n);
    const c = this.ctx;
    if (!c || c.state !== 'running' || this.muted) return;
    const t = c.currentTime;
    switch (n) {
      case 'tap': this.slide('sine', 520, 880, t, 0.09, 0.12); this.noise(t, 0.03, 0.03, 'highpass', 3000); break;
      case 'blocked': this.tone('triangle', hz(52), t, 0.12, 0.09); this.tone('triangle', hz(50), t + 0.07, 0.14, 0.08); break;
      case 'land': this.tone('sine', hz(84), t, 0.07, 0.06); break;
      case 'match': {
        const base = 72 + PENTA[Math.min(arg, PENTA.length - 1)] * 0.5;
        [0, 4, 7].forEach((s, i) => this.tone('triangle', hz(base + s), t + i * 0.07, 0.35, 0.13));
        this.tone('sine', hz(base + 24), t + 0.2, 0.25, 0.05);
        break;
      }
      case 'combo': [0, 4, 7, 12].forEach((s, i) => this.tone('square', hz(79 + arg + s), t + i * 0.05, 0.12, 0.04)); break;
      case 'wand': for (let i = 0; i < 9; i++) this.tone('sine', hz(84 + PENTA[i]), t + i * 0.06, 0.3, 0.07); break;
      case 'helper': this.slide('triangle', 400, 900, t, 0.18, 0.1); break;
      case 'win': [0, 4, 7, 12, 16, 19, 24, 28].forEach((s, i) => this.tone('triangle', hz(72 + s), t + i * 0.1, 0.6, 0.13)); break;
      case 'lose': [0, -2, -4, -7].forEach((s, i) => this.tone('triangle', hz(69 + s), t + i * 0.18, 0.4, 0.11)); break;
      case 'ui': this.tone('sine', 700, t, 0.05, 0.07); break;
      default: break;
    }
  }

  setMode(on) {
    if (!on) { this.setTune(null); return; }
    // a bouncy C-major waltz-ish loop with a bass
    this.setTune({
      tempo: 112, beats: 16, wave: 'triangle', vol: 0.07,
      notes: [[0, 72, 1], [1, 76, 1], [2, 79, 1], [3, 76, 1], [4, 77, 1], [5, 81, 1], [6, 79, 2], [8, 74, 1], [9, 77, 1], [10, 81, 1], [11, 77, 1], [12, 76, 1], [13, 72, 1], [14, 67, 2],
        [0, 48, 2], [4, 53, 2], [8, 55, 2], [12, 48, 2], [2, 55, 1], [6, 60, 1], [10, 59, 1], [14, 55, 1]],
    });
  }
}

attachSamples(Sound, SAMPLES);
attachMusic(Sound);
