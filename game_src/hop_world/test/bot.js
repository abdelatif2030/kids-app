// A sensible-player robot for Hop World. It always runs right and, when a pit, a pipe, a step or a bug is coming, tries a few
// jump lengths on a copy of the world (a person does the same in their head) and takes the shortest one that is safe.
const HOLDS = [0.12, 0.25, 0.4, 0.55, 0.75];

function danger(w) {
  const p = w.p;
  const fr = Math.floor(p.y + p.h - 0.01);
  const frontX = p.x + p.w + 0.3;
  const solidAt = (x, y) => w.solid(w.tile(x, y));
  let wall = false;
  for (let r = fr; r >= fr - 1; r--) if (solidAt(frontX + 0.2, r + 0.5)) wall = true;
  const pit = !(solidAt(frontX, fr + 1.5) || solidAt(frontX, fr + 2.5));
  const bug = w.enemies.some((e) => !e.dead && e.x > p.x - 0.2 && e.x - p.x < 3.0 && Math.abs(e.y - p.y) < 1.2);
  return wall || pit || bug;
}

function trial(w, hold) {
  const c = w.clone();
  const lives = c.lives;
  let t = 0;
  let landed = false;
  while (t < 1.8 && c.state === 'play') {
    const inAir = !c.p.ground;
    c.step(1 / 60, { dir: 1, jump: t < hold });
    t += 1 / 60;
    if (inAir && c.p.ground) { landed = true; break; }
  }
  // then keep running for half a second: landing right next to a bug is not safe
  for (let i = 0; landed && i < 30 && c.state === 'play'; i++) c.step(1 / 60, { dir: 1, jump: false });
  return c.state !== 'lost' && c.lives === lives && (landed || c.state === 'won');
}

/** st: { hold: seconds of jump still to hold, t } persistent between calls. */
export function bot(w, st) {
  const p = w.p;
  if (p.ground) {
    if (st.air) { st.air = false; }
    if (danger(w)) {
      let pick = HOLDS[HOLDS.length - 1];
      for (const h of HOLDS) if (trial(w, h)) { pick = h; break; }
      st.hold = pick; st.air = true;
      return { dir: 1, jump: true };
    }
    return { dir: 1, jump: false };
  }
  st.hold -= 1 / 60;
  return { dir: 1, jump: st.hold > 0 && p.vy < 0 };
}

export function play(World, opts, maxSeconds = 300) {
  const w = new World(opts);
  const st = { hold: 0 };
  let t = 0;
  while (w.state === 'play' && t < maxSeconds) { w.step(1 / 60, bot(w, st)); t += 1 / 60; }
  return { w, t };
}
