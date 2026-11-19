import { Run, robotSteer } from './src/sim.js';
import { Pile } from './src/pile.js';
const lv=+process.argv[2]||0, wide=+process.argv[3]||0, sec=+process.argv[4]||40;
const r=new Run({level:lv,up:{wide,start:0}}); const p=new Pile(); p.begin(r);
p.dbg=[]; const dt=1/60; let t=0, minB=1e9;
const t0=Date.now();
while(r.state!=='done' && t<sec){ robotSteer(r); const ev=r.step(dt); p.update(dt,ev); t+=dt;
  if(Math.round(t*60)%120===0) console.log(t.toFixed(1),'z',r.z.toFixed(0),'count',r.balls,'live',p.live,'cap',p.cap,'spilled',p.stats.spilled,'ej',p.stats.ejected,'deb',p.w.live-p.live, ev.map(e=>e.type).join(','));
}
console.log(JSON.stringify(p.stats));console.log(p.dbg.slice(0,50).map(a=>a.join(' ')).join(String.fromCharCode(10)));console.log('state',r.state,'balls',r.balls);
