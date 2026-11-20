# Original hub music for Rehlaty (no samples, no copied tunes): two loops synthesised in pure Python, encoded with ffmpeg.
#   assets/audio/music/fun_hub.mp3   (playful, ~124 bpm, for the fun-games pages)
#   assets/audio/music/learn_hub.mp3 (calm and cheerful, ~92 bpm, for the learning-games page)
# Run: python tools/make_music.py
import math, os, random, struct, subprocess, wave

SR = 22050
os.makedirs('assets/audio/music', exist_ok=True)


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


class Track:
    def __init__(self, seconds):
        self.n = int(seconds * SR)
        self.buf = [0.0] * self.n

    def add(self, t0, dur, freq, vol, kind='tri', att=0.005, rel=0.12, vib=0.0):
        i0 = int(t0 * SR)
        n = int((dur + rel) * SR)
        ph = 0.0
        for k in range(n):
            i = i0 + k
            if i >= self.n:
                break
            t = k / SR
            env = min(1.0, t / att) * (1.0 if t < dur else max(0.0, 1.0 - (t - dur) / rel))
            f = freq * (1 + vib * math.sin(2 * math.pi * 5.0 * t))
            ph += 2 * math.pi * f / SR
            if kind == 'tri':
                w = (2 / math.pi) * math.asin(math.sin(ph))
            elif kind == 'sq':
                w = 1.0 if math.sin(ph) > 0 else -1.0
                w *= 0.55
            elif kind == 'bell':
                w = math.sin(ph) + 0.35 * math.sin(2.76 * ph) * math.exp(-t * 6) + 0.2 * math.sin(4.1 * ph) * math.exp(-t * 9)
                w *= 0.8 * math.exp(-t * 2.2)
            elif kind == 'bass':
                w = math.sin(ph) + 0.4 * math.sin(2 * ph)
            else:
                w = math.sin(ph)
            self.buf[i] += w * env * vol

    def drum(self, t0, kind, vol):
        i0 = int(t0 * SR)
        rnd = random.Random(int(t0 * 1000))
        dur = {'kick': 0.16, 'hat': 0.04, 'snare': 0.12}[kind]
        n = int(dur * SR)
        for k in range(n):
            i = i0 + k
            if i >= self.n:
                break
            t = k / SR
            if kind == 'kick':
                f = 120 * math.exp(-t * 28) + 45
                w = math.sin(2 * math.pi * f * t) * math.exp(-t * 14)
            elif kind == 'hat':
                w = (rnd.random() * 2 - 1) * math.exp(-t * 90) * 0.6
            else:
                w = ((rnd.random() * 2 - 1) * 0.7 + math.sin(2 * math.pi * 190 * t) * 0.3) * math.exp(-t * 26)
            self.buf[i] += w * vol

    def save(self, wav, mp3):
        peak = max(abs(x) for x in self.buf) or 1.0
        fade = int(0.04 * SR)
        with wave.open(wav, 'wb') as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(SR)
            frames = bytearray()
            for i, x in enumerate(self.buf):
                g = 0.82 / peak
                if i < fade:
                    g *= i / fade
                if i > self.n - fade:
                    g *= (self.n - i) / fade
                frames += struct.pack('<h', int(max(-1, min(1, x * g)) * 32000))
            w.writeframes(bytes(frames))
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', wav, '-b:a', '80k', '-ac', '1', mp3], check=True)
        os.remove(wav)
        print(mp3, round(os.path.getsize(mp3) / 1024), 'KB')


# --- the fun-games loop: C major, four chords (C Am F G), a bouncy bass, stabs and a pentatonic tune ------------------------------
def fun(seconds_bars=16, bpm=124):
    beat = 60 / bpm
    bar = beat * 4
    T = Track(seconds_bars * bar)
    chords = [(48, [60, 64, 67]), (45, [57, 60, 64]), (41, [57, 60, 65]), (43, [55, 59, 62])]
    pent = [72, 74, 76, 79, 81, 84]
    rnd = random.Random(7)
    tune = []  # a tune that repeats every 4 bars and changes its ending on the 4th time
    for b in range(4):
        row = []
        for s in range(8):
            row.append(pent[(b * 3 + s * 2 + (1 if s % 3 == 0 else 0)) % len(pent)] if s % 4 != 3 else None)
        tune.append(row)
    for bi in range(seconds_bars):
        root, tri = chords[bi % 4]
        t = bi * bar
        for s in range(8):  # bouncy bass on every half beat, octave jumps
            T.add(t + s * beat / 2, beat / 2 * 0.8, hz(root + (12 if s % 2 else 0)), 0.30, 'bass', rel=0.05)
        for s in (1, 3, 5, 7):  # off-beat chord stabs
            for m in tri:
                T.add(t + s * beat / 2, 0.12, hz(m), 0.09, 'sq', att=0.004, rel=0.05)
        for beat_i in range(4):
            T.drum(t + beat_i * beat, 'kick', 0.7)
            if beat_i % 2:
                T.drum(t + beat_i * beat, 'snare', 0.35)
        for s in range(8):
            T.drum(t + s * beat / 2 + beat / 4, 'hat', 0.25)
        phrase = tune[bi % 4]
        for s, m in enumerate(phrase):
            if m:
                T.add(t + s * beat / 2, beat * 0.45, hz(m + (0 if (bi // 4) % 2 == 0 else 12)), 0.14, 'bell')
    return T


# --- the learning-games loop: D major, a gentle music-box melody over a soft pad ----------------------------------------------------
def learn(bars=16, bpm=92):
    beat = 60 / bpm
    bar = beat * 4
    T = Track(bars * bar)
    chords = [(50, [62, 66, 69]), (59, [62, 66, 71]), (55, [62, 67, 71]), (57, [61, 64, 69])]  # D, Bm, G, A
    scale = [74, 76, 78, 81, 83, 86]
    for bi in range(bars):
        root, tri = chords[bi % 4]
        t = bi * bar
        T.add(t, bar * 0.98, hz(root), 0.22, 'bass', att=0.04, rel=0.3)
        for m in tri:
            T.add(t, bar * 0.98, hz(m), 0.07, 'tri', att=0.25, rel=0.5, vib=0.004)
        for s in range(8):  # gentle arpeggio
            T.add(t + s * beat / 2, beat * 0.9, hz(tri[s % 3] + 12), 0.07, 'bell')
        for k in range(4):  # a slow, singable tune
            m = scale[(bi * 2 + k * (1 if bi % 2 else 2)) % len(scale)]
            T.add(t + k * beat, beat * 0.9, hz(m), 0.13, 'bell')
        T.drum(t, 'kick', 0.25)
        T.drum(t + 2 * beat, 'kick', 0.18)
    return T


# --- the home page loop: C major pentatonic, very slow and soft (a music box over a warm pad) ---------------------------------------
def home(bars=16, bpm=76):
    beat = 60 / bpm
    bar = beat * 4
    T = Track(bars * bar)
    chords = [(48, [64, 67, 72]), (53, [65, 69, 72]), (55, [67, 71, 74]), (52, [64, 67, 71])]  # C, F, G, Em
    scale = [72, 74, 76, 79, 81, 84]
    for bi in range(bars):
        root, tri = chords[bi % 4]
        t = bi * bar
        T.add(t, bar * 0.99, hz(root), 0.16, 'bass', att=0.08, rel=0.4)
        for m in tri:
            T.add(t, bar * 0.99, hz(m), 0.05, 'tri', att=0.4, rel=0.6, vib=0.003)
        for k in range(4):
            if (bi + k) % 3 != 2:
                m = scale[(bi * 3 + k * 2 + (bi // 4)) % len(scale)]
                T.add(t + k * beat, beat * 0.95, hz(m), 0.12, 'bell')
        T.add(t + 2 * beat, beat * 0.5, hz(tri[1] + 12), 0.05, 'bell')
    return T


fun().save('assets/audio/music/_fun.wav', 'assets/audio/music/fun_hub.mp3')
learn().save('assets/audio/music/_learn.wav', 'assets/audio/music/learn_hub.mp3')
home().save('assets/audio/music/_home.wav', 'assets/audio/music/home_hub.mp3')
