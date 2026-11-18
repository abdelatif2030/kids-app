import { iosKeepAlive, iosWatch } from './ios_audio.js';
// Generic live synth for the cozy games (Web Audio, no files): tones, noise, slides, an ambient bed (waves or wind)
// and a gentle looping tune given as [beat, midi, beats] notes. The game adds its own named effects on top.
export const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class SynthBase {
  constructor() { this.ctx = null; this.muted = false; this.tune = null; this.bed = null; }

  unlock() {
    iosKeepAlive();
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = (this.ctx = new AC());
      iosWatch(c, () => false);
      this.master = c.createGain();
      this.master.gain.value = this.muted ? 0 : 0.9;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      this.master.connect(comp).connect(c.destination);
      this.music = c.createGain();
      this.music.gain.value = 0.35;
      this.music.connect(this.master);
      this.sfx = c.createGain();
      this.sfx.gain.value = 0.85;
      this.sfx.connect(this.master);
      const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
      const d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
      this.nextBeat = 0;
      this._timer = setInterval(() => this._schedule(), 40);
      if (this.bedName) this.setBed(this.bedName);
    }
    if (this.ctx.state !== 'running') {
      try { const s = this.ctx.createBufferSource(); s.buffer = this.ctx.createBuffer(1, 1, this.ctx.sampleRate); s.connect(this.ctx.destination); s.start(0); } catch (_) { /* fine */ }
      try { const a = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA'); a.volume = 0.01; a.play().catch(() => {}); } catch (_) { /* fine */ }
      this.ctx.resume();
    }
  }

  get on() { return !!this.ctx && this.ctx.state === 'running'; }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05); }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  dispose() { clearInterval(this._timer); this.setBed(null); if (this.ctx) { try { this.ctx.close(); } catch (_) { /* fine */ } } this.ctx = null; }

  tone(type, f, t, len, vol, dest = this.sfx, a = 0.005) {
    const c = this.ctx;
    if (!c) return;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.value = f;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  noise(t, len, vol, type = 'lowpass', freq = 1000, q = 1, dest = this.sfx, freqEnd) {
    const c = this.ctx;
    if (!c) return;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + len);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.03, len / 3));
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(dest);
    s.start(t, Math.random());
    s.stop(t + len + 0.05);
  }

  slide(type, f0, f1, t, len, vol, dest = this.sfx) {
    const c = this.ctx;
    if (!c) return;
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

  /** An ambient bed: 'waves' (slow swell of filtered noise) or 'wind' (a low howl). null stops it. */
  setBed(name) {
    this.bedName = name;
    const c = this.ctx;
    if (!c) return;
    if (this.bed) {
      const b = this.bed;
      b.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.2);
      setTimeout(() => { try { b.s.stop(); b.lfo.stop(); } catch (_) { /* fine */ } }, 900);
      this.bed = null;
    }
    if (!name) return;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = name === 'wind' ? 'bandpass' : 'lowpass';
    f.frequency.value = name === 'wind' ? 420 : 520;
    f.Q.value = name === 'wind' ? 1.4 : 0.6;
    const g = c.createGain();
    g.gain.value = 0.0001;
    const lfo = c.createOscillator();
    lfo.frequency.value = name === 'wind' ? 0.12 : 0.17;
    const lg = c.createGain();
    lg.gain.value = name === 'wind' ? 0.03 : 0.045;
    lfo.connect(lg).connect(g.gain);
    s.connect(f).connect(g).connect(this.sfx);
    s.start();
    lfo.start();
    g.gain.setTargetAtTime(name === 'wind' ? 0.06 : 0.07, c.currentTime, 0.5);
    this.bed = { s, g, lfo, f };
  }

  /** tune: { tempo, beats, notes: [[beat, midi, len]], wave, vol } loops softly under the game */
  setTune(tune) { this.tune = tune; this.nextBeat = 0; this.loopStart = null; }

  _schedule() {
    const c = this.ctx;
    if (!c || c.state !== 'running' || !this.tune || this.muted) return;
    const tu = this.tune;
    const spb = 60 / tu.tempo;
    if (this.loopStart == null) this.loopStart = c.currentTime + 0.1;
    const ahead = c.currentTime + 0.25;
    while (this.loopStart + this.nextBeat * spb < ahead) {
      const beat = this.nextBeat % tu.beats;
      const base = this.loopStart + this.nextBeat * spb;
      if (base < c.currentTime - 0.5) { this.loopStart = c.currentTime + 0.1; this.nextBeat = 0; break; }
      for (const [b, m, len] of tu.notes) {
        if (Math.abs(b - beat) < 1e-6) this.tone(tu.wave || 'triangle', hz(m), base, len * spb * 1.4, tu.vol || 0.12, this.music, 0.01);
      }
      this.nextBeat += 0.5;
    }
  }
}
