import { Run } from './src/sim.js';
import { Pile } from './src/pile.js';
const r=new Run({level:14,up:{start:8}}); r.balls=600; r.things=[]; const p=new Pile(); p.begin(r);
p.dbg=[];const dt=1/60; for(let f=0;f<120;f++){ r.step(dt); p.update(dt,[]); }
const t0=performance.now(); let n=0; for(let f=0;f<300;f++){ r.step(dt); p.update(dt,[]); n++; }
console.log(JSON.stringify(p.stats));console.log('live',p.live,'cap',p.cap,'ms/frame',((performance.now()-t0)/n).toFixed(2),'spilled',p.stats.spilled);
const o=[0,0,0]; const w=p.w; let mx=[0,0,0],mn=[9,9,9]; for(let i=0;i<w.max;i++) if(w.state[i]===1){ w.toLocal(w.x[i],w.y[i],w.z[i],o); for(let k=0;k<3;k++){mx[k]=Math.max(mx[k],o[k]);mn[k]=Math.min(mn[k],o[k]);} }
console.log('local bbox',mn.map(v=>v.toFixed(1)),mx.map(v=>v.toFixed(1)));
console.log(p.dbg.filter(a=>a[0]==='back').slice(0,12).map(a=>a.join(' ')).join('\n'))
