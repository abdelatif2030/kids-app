// Gives a game's synth `Sound` class real sound samples (ElevenLabs sound generation, one themed pack per game).
// Names without a sample keep the synth sound. Samples are data URIs so they also work inside the app's webview.
export function attachSamples(Cls, SAMPLES, gains = {}) {
  const orig = Cls.prototype.play;
  const origUnlock = Cls.prototype.unlock;
  function decode(self) {
    if (self._smp || !self.ctx) return;
    self._smp = {};
    for (const [n, uri] of Object.entries(SAMPLES)) {
      try {
        const bin = atob(uri.split(',')[1]); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
        const p = self.ctx.decodeAudioData(u.buffer, (b) => { self._smp[n] = b; }, () => {}); if (p && p.catch) p.catch(() => {});
      } catch (_) { /* the synth sound stays */ }
    }
  }
  if (origUnlock) Cls.prototype.unlock = function (...a) { const r = origUnlock.apply(this, a); decode(this); return r; };
  Cls.prototype.play = function (n, a) {
    const c = this.ctx;
    if (c && c.state === 'running' && !this.muted && this.on !== false) {
      decode(this);
      const b = this._smp && this._smp[n];
      if (b) {
        const s = c.createBufferSource(); const g = c.createGain(); s.buffer = b; g.gain.value = gains[n] || 0.8;
        s.connect(g); g.connect(this.sfx || this.master || c.destination); s.start(c.currentTime + 0.005);
        return undefined;
      }
    }
    return orig.call(this, n, a);
  };
}

/** A looping background song (music.mp3 next to the game's index.html, ElevenLabs Music). Replaces the game's own synth tune while it plays;
 *  mute / pause follow the game's audio graph (it goes through the same master gain and context). */
export function attachMusic(Cls, { gain = 0.5, file = 'music.mp3' } = {}) {
  const origUnlock = Cls.prototype.unlock; const origTune = Cls.prototype.setTune;
  function start(self) {
    if (self._song || !self.ctx) return; self._song = 'loading';
    let url; try { url = new URL(file, document.baseURI).href; } catch (_) { return; }
    const ctx = self.ctx;
    fetch(url).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject())).then((ab) => ctx.decodeAudioData(ab)).then((buf) => {
      if (self.ctx !== ctx) return;
      const s = ctx.createBufferSource(); const g = ctx.createGain(); s.buffer = buf; s.loop = true; g.gain.value = gain;
      s.connect(g); g.connect(self.master || ctx.destination); s.start(); self._song = s;
      if (self.music && self.music.gain) self.music.gain.value = 0; // the song replaces the game's own synth tune
      if (origTune) origTune.call(self, null);
    }).catch(() => { self._song = null; });
  }
  Cls.prototype.unlock = function (...a) { const r = origUnlock ? origUnlock.apply(this, a) : undefined; start(this); return r; };
  if (origTune) Cls.prototype.setTune = function (t) { if (this._song) return undefined; return origTune.call(this, t); };
}
