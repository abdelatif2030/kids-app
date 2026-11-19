// Offline: runs the robot through every level WITH the real ball physics and prints the balls it banks (used to set the GOAL table).
import { Run, robotSteer } from './src/sim.js';
import { Pile } from './src/pile.js';
const [a, b] = [+process.argv[2], +process.argv[3]];
for (let lv = a; lv < b; lv++) {
  const r = new Run({ level: lv }); const p = new Pile(); p.begin(r);
  const dt = 1 / 60; let t = 0;
  while (r.state !== 'done' && t < 200) { robotSteer(r); const ev = r.step(dt); p.update(dt, ev); t += dt; }
  console.log(lv, r.balls);
}
