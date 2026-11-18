import os
os.chdir('C:/dev/rehlaty/game_src/chomp_maze')
p = 'src/sim.js'
s = open(p, encoding='utf8').read()
a = s.index("  _movePm(dt, ev) {")
b = s.index("export function normalizeSave")
new = '''  // Actors live on tiles: (tx, ty) is the tile they stand on, `s` (0..1) is the progress toward the next tile in `dir`; x, y are
  // the drawn position (tile + dir * s).
  _pos(a) { const d = DIRS[a.dir]; a.x = a.tx + (a.moving ? d[0] * a.s : 0); a.y = a.ty + (a.moving ? d[1] * a.s : 0); }

  _movePm(dt, ev) {
    const p = this.pm;
    // reversing is allowed any time (like the arcade game)
    if (p.moving && p.want === OPP[p.dir]) { const d = DIRS[p.dir]; p.tx += d[0]; p.ty += d[1]; p.dir = p.want; p.s = 1 - p.s; }
    let dist = this.speed * dt;
    let guard = 6;
    while (dist > 1e-6 && guard-- > 0) {
      if (!p.moving) {
        this._eat(p, ev);
        const want = DIRS[p.want];
        if (this.open(p.tx + want[0], p.ty + want[1])) p.dir = p.want;
        const d = DIRS[p.dir];
        if (!this.open(p.tx + d[0], p.ty + d[1])) break;
        p.moving = true; p.s = 0;
      }
      const step = Math.min(dist, 1 - p.s);
      p.s += step; dist -= step;
      if (p.s >= 1 - 1e-9) {
        const d = DIRS[p.dir];
        p.tx += d[0]; p.ty += d[1]; p.s = 0; p.moving = false;
        if (p.tx < 0) p.tx = this.w - 1; else if (p.tx > this.w - 1) p.tx = 0;
      }
    }
    this._pos(p);
  }

  _eat(p, ev) {
    const c = this.map[p.ty] && this.map[p.ty][p.tx];
    if (c === '.') { this.map[p.ty][p.tx] = ' '; this.dots -= 1; this.score += 10; ev.push({ type: 'dot' }); } else if (c === 'o') { this.map[p.ty][p.tx] = ' '; this.dots -= 1; this.score += 50; this.scared = this.easy ? 10 : 7; this.eatChain = 0; ev.push({ type: 'power' }); }
  }

  _moveGhost(g, dt) {
    if (g.mode === 'house') { g.t -= dt; if (g.t <= 0) { g.mode = 'out'; g.tx = 10; g.ty = 8; g.s = 0; g.moving = false; g.dir = 'u'; this._pos(g); } return; }
    const frightened = this.scared > 0 && !g.eaten;
    const sp = g.mode === 'eyes' ? this.ghostSpeed * 2 : this.ghostSpeed * (frightened ? 0.6 : 1);
    let dist = sp * dt;
    let guard = 6;
    while (dist > 1e-6 && guard-- > 0) {
      if (!g.moving) {
        if (g.mode === 'eyes' && g.tx === 10 && g.ty === 9) { g.mode = 'house'; g.t = 1.2; g.eaten = false; this._pos(g); return; }
        const opts = ['l', 'r', 'u', 'd'].filter((d) => d !== OPP[g.dir] && this.open(g.tx + DIRS[d][0], g.ty + DIRS[d][1], g.mode === 'eyes'));
        const choices = opts.length ? opts : [OPP[g.dir]];
        let tgx; let tgy;
        if (g.mode === 'eyes') { tgx = 10; tgy = 9; } else if (frightened) { tgx = null; } else if (Math.floor(this.time / 9) % 2 === 0 && this.level < 7) { [tgx, tgy] = g.scatter; } else { tgx = this.pm.x; tgy = this.pm.y; if (g.id === 'bolt') { tgx += DIRS[this.pm.dir][0] * 3; tgy += DIRS[this.pm.dir][1] * 3; } if (g.id === 'sprout') { tgx = (tgx + 10) / 2; tgy = (tgy + 10) / 2; } }
        let best = choices[0];
        if (tgx === null) best = choices[Math.floor(this.rand() * choices.length)];
        else { let bd = 1e9; for (const d of choices) { const dd = (g.tx + DIRS[d][0] - tgx) ** 2 + (g.ty + DIRS[d][1] - tgy) ** 2 + (this.rand() < 0.15 ? 6 : 0); if (dd < bd) { bd = dd; best = d; } } }
        g.dir = best; g.moving = true; g.s = 0;
      }
      const step = Math.min(dist, 1 - g.s);
      g.s += step; dist -= step;
      if (g.s >= 1 - 1e-9) { const d = DIRS[g.dir]; g.tx += d[0]; g.ty += d[1]; g.s = 0; g.moving = false; if (g.tx < 0) g.tx = this.w - 1; else if (g.tx > this.w - 1) g.tx = 0; }
    }
    this._pos(g);
  }
}

'''
s = s[:a] + new + s[b:]
s = s.replace("this.pm = { x: this.home.x, y: this.home.y, fx: 0, fy: 0, dir: 'l', want: 'l', moving: false };", "this.pm = { tx: this.home.x, ty: this.home.y, x: this.home.x, y: this.home.y, s: 0, dir: 'l', want: 'l', moving: false };")
s = s.replace("this.ghosts = GHOSTS.map((g, i) => ({ ...g, x: 9 + i, y: 9, fx: 0, fy: 0, dir: 'u', mode: 'house', t: 1.5 + i * 2.2 - (this.easy ? 0 : 0.5 * i), eaten: false }));", "this.ghosts = GHOSTS.map((g, i) => ({ ...g, tx: 9 + (i % 3), ty: 9, x: 9 + (i % 3), y: 9, s: 0, moving: false, dir: 'u', mode: 'house', t: 1.5 + i * 2.2, eaten: false }));")
s = s.replace("this.map = MAZES[this.level % MAZES.length].map((row) => row.padEnd(21, ' ').split(''));", "this.map = MAZES[this.level % MAZES.length].map((row) => row.padEnd(21, ' ').slice(0, 21).split(''));")
open(p, 'w', encoding='utf8').write(s)
print('ok')
