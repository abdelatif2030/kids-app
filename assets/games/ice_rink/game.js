(()=>{var Ve=.008333333333333333,Oc=1.05,ai=.86,kc=.93,Fo=1.3,oi={penguin:{hp:80,atk:11,m:1,r:3,vmax:72,def:.7,aggro:1,special:"spin",passive:"shield"},fox:{hp:64,atk:12,m:.8,r:2.8,vmax:80,def:1.15,aggro:.85,special:"flame",passive:"ricochet"},bear:{hp:120,atk:13,m:1.9,r:3.7,vmax:62,def:.8,aggro:1.6,special:"slam",passive:"mend"}},zc=.4,Hc=4,Gc=10,li=["penguin","fox","bear"],Bo={penguin:[14,84],fox:[30,87],bear:[46,84]},Wc={grunt:{hp:20,r:2.8,m:1,atk:9,speed:42,armor:0,ai:"charge",err:.2,coins:2},imp:{hp:11,r:2.2,m:.6,atk:6,speed:54,armor:0,ai:"charge",err:.32,coins:1},thrower:{hp:16,r:2.6,m:.9,atk:7,speed:24,armor:0,ai:"throw",err:.07,coins:3},brute:{hp:48,r:3.9,m:2.6,atk:13,speed:36,armor:.15,ai:"charge",err:.12,coins:5},shaman:{hp:18,r:2.6,m:.9,atk:0,speed:16,armor:0,ai:"heal",err:0,coins:4},chief:{hp:90,r:5,m:4.2,atk:14,speed:38,armor:.1,ai:"boss",err:.1,coins:20},king:{hp:140,r:5.6,m:5,atk:16,speed:40,armor:.12,ai:"boss",err:.1,coins:40}},Ne=(i,t,e={},n=!1)=>({name:i,foes:t,crystals:e.c||[],blocks:e.b||[],pools:e.p||[],boss:n}),je=[Ne("Snow Start",[["grunt",20,28],["grunt",40,28]]),Ne("Two Friends",[["grunt",14,22],["grunt",30,30],["grunt",46,22]],{c:[[30,54,3]]}),Ne("Snowball Fight",[["grunt",18,26],["grunt",42,26],["thrower",30,14]],{c:[[18,50,3],[42,50,3]]}),Ne("Slush Pool",[["grunt",16,24],["grunt",44,24],["imp",24,36],["imp",36,36]],{p:[[30,48,10]],c:[[12,42,2.8],[48,42,2.8]]}),Ne("Ice Walls",[["grunt",30,16],["grunt",12,22],["thrower",48,22],["imp",30,32]],{b:[[18,40,12,2.4],[42,40,12,2.4]],c:[[30,56,3]]}),Ne("Chief Grumbo",[["chief",30,20],["grunt",14,34],["grunt",46,34]],{c:[[22,50,3],[38,50,3]]},!0),Ne("Big Trouble",[["brute",30,24],["imp",14,32],["imp",46,32],["thrower",30,12]],{c:[[20,46,3],[40,46,3],[30,60,2.6]]}),Ne("Healer Hideout",[["shaman",30,12],["grunt",18,24],["grunt",42,24],["brute",30,32]],{b:[[20,16,2.4,14],[40,16,2.4,14]],c:[[30,52,3]]}),Ne("Double Brutes",[["brute",16,26],["brute",44,26],["thrower",30,14],["shaman",30,22]],{c:[[30,40,3.2],[14,52,2.8],[46,52,2.8]]}),Ne("Imp Swarm",[["imp",10,20],["imp",22,26],["imp",38,26],["imp",50,20],["imp",30,34],["imp",30,18],["thrower",16,12],["thrower",44,12]],{p:[[30,52,9]],c:[[18,44,2.6],[42,44,2.6]]}),Ne("Goblin Camp",[["brute",18,24],["brute",42,24],["shaman",14,12],["shaman",46,12],["thrower",30,14],["thrower",30,30],["grunt",30,22]],{b:[[30,44,16,2.4]],c:[[12,50,2.8],[48,50,2.8]],p:[[30,62,8]]}),Ne("Goblin King",[["king",30,18],["brute",14,32],["brute",46,32],["thrower",18,10],["thrower",42,10]],{c:[[22,46,3],[38,46,3],[30,58,2.8]]},!0)],an=(i,t,e)=>i<t?t:i>e?e:i;function Bn(i){i.seed=i.seed+1831565813|0;let t=Math.imul(i.seed^i.seed>>>15,1|i.seed);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}var gr=i=>an(i/30,.3,1.8),Fe=Math.hypot;function xr(i=1,{seed:t=1,up:e={}}={}){let n=je[i-1],s={level:i,seed:t*2654435761>>>0||1,t:0,pt:0,phase:"aim",turn:1,bodies:[],proj:[],pools:[],blocks:[],nextId:1,cd:{},ev:[],shot:null,eq:[],eTimer:0,kills:0,dealt:0,taken:0,coins:0,boss:n.boss,stars:0,gala:20};for(let a of li){let o=oi[a],l=e[a]||{},c=Math.round(o.hp*(1+.12*(l.hp||0)));s.bodies.push({id:s.nextId++,kind:"hero",type:a,x:Bo[a][0],y:Bo[a][1],vx:0,vy:0,r:o.r,m:o.m,im:1/o.m,hp:c,maxHp:c,atk:o.atk*(1+.1*(l.atk||0)),def:o.def,aggro:o.aggro,vmax:o.vmax,bn:0,alive:!0,pierce:!1,muMul:1,sp:null})}let r=i-1;for(let[a,o,l]of n.foes)Go(s,a,o,l,1+.05*r,1+.03*r);for(let[a,o,l]of n.crystals)s.bodies.push({id:s.nextId++,kind:"crystal",type:"crystal",x:a,y:o,vx:0,vy:0,r:l,m:1e9,im:0,alive:!0});for(let[a,o,l,c]of n.blocks)s.blocks.push({x:a,y:o,hw:l/2,hh:c/2});for(let[a,o,l]of n.pools)s.pools.push({x:a,y:o,r:l});return s.ev.push({t:"phase",phase:"aim"}),s}function Go(i,t,e,n,s=1,r=1){let a=Wc[t],o=Math.round(a.hp*s),l={id:i.nextId++,kind:"foe",type:t,x:e,y:n,vx:0,vy:0,r:a.r,m:a.m,im:1/a.m,hp:o,maxHp:o,atk:a.atk*r,armor:a.armor,speed:a.speed,ai:a.ai,err:a.err,coins:a.coins,alive:!0,burn:0,stun:0,attacking:!1,attackUntil:0,cnt:0,stompAt:0,muMul:1,pierce:!1};return i.bodies.push(l),l}var On=i=>i.bodies.filter(t=>t.kind==="hero"&&t.alive),rn=i=>i.bodies.filter(t=>t.kind==="foe"&&t.alive),Oo=(i,t)=>i.bodies.find(e=>e.id===t),Xc=i=>{let t=i.ev;i.ev=[];let e=structuredClone(i);return i.ev=t,e};function Wo(i){let t=i.ev;return i.ev=[],t}var Xo=i=>On(i).reduce((t,e)=>t+e.hp,0),Yo=i=>i.bodies.filter(t=>t.kind==="hero").reduce((t,e)=>t+e.maxHp,0);function vr(i,t,e,n,s=!0){if(i.phase!=="aim")return!1;let r=i.bodies.find(l=>l.kind==="hero"&&l.type===t&&l.alive);if(!r)return!1;n=an(n,.1,1);let a=r.vmax*n;r.vx=Math.cos(e)*a,r.vy=Math.sin(e)*a;let o=null;return r.bn=0,s&&i.gala>=100&&(o=oi[t].special,i.gala=0,i.ev.push({t:"special",x:r.x,y:r.y,id:r.id,kind:o})),o==="flame"&&(r.pierce=!0,r.muMul=.6),o==="spin"&&(r.muMul=.85),r.sp=o,i.shot={id:r.id,special:o,done:!1,hit:new Set},i.phase="shot",i.pt=0,i.ev.push({t:"launch",id:r.id,power:n,x:r.x,y:r.y,special:o}),!0}function cs(i,t,e,n){return t.alive?(e=Math.max(1,Math.round(e*(1-t.armor))),t.hp-=e,i.dealt+=e,i.ev.push({t:"dmg",x:t.x,y:t.y-t.r,v:e,side:"foe",id:t.id}),n&&n.kind==="hero"&&(i.gala=Math.min(100,i.gala+e*.7)),t.hp<=0&&(t.alive=!1,t.vx=t.vy=0,i.kills++,i.coins+=t.coins,i.ev.push({t:"puff",x:t.x,y:t.y,r:t.r,type:t.type,boss:t.ai==="boss"})),e):0}function mr(i,t,e){t.alive&&(e=Math.max(1,Math.round(e*t.def)),t.hp-=e,i.taken+=e,i.gala=Math.min(100,i.gala+e*.25),i.ev.push({t:"dmg",x:t.x,y:t.y-t.r,v:e,side:"hero",id:t.id}),t.hp<=0&&(t.hp=0,t.alive=!1,t.vx=t.vy=0,i.ev.push({t:"heroKO",x:t.x,y:t.y,id:t.id})))}function Ar(i,t,e,n,s,r,a,o){i.ev.push({t:"wave",x:t,y:e,rad:n,kind:o?o.sp:"stomp"});for(let l of rn(i)){let c=Fe(l.x-t,l.y-e),h=n+l.r;if(c>=h)continue;let f=1-c/h*.5;if(s&&cs(i,l,s*f,o),l.alive){let u=c>.01?(l.x-t)/c:1,p=c>.01?(l.y-e)/c:0;l.vx+=u*r*f*l.im,l.vy+=p*r*f*l.im,a&&(l.stun=Math.max(l.stun,1))}}}function ko(i,t,e,n,s,r,a){let o=t.id<e.id?t.id*4096+e.id:e.id*4096+t.id;if((i.cd[o]||0)>i.t)return;i.cd[o]=i.t+(a?.6:.18);let l=(t.x+e.x)/2,c=(t.y+e.y)/2;if(t.kind==="crystal"||e.kind==="crystal"){i.ev.push({t:"crystal",x:l,y:c,id:t.kind==="crystal"?t.id:e.id,v:n});return}if(t.kind==="hero"&&e.kind==="hero"){i.ev.push({t:"chain",x:l,y:c,v:n}),i.gala=Math.min(100,i.gala+3);for(let[p,m]of[[t,e],[e,t]])oi[p.type].passive==="mend"&&m.alive&&m.hp<m.maxHp&&(m.hp=Math.min(m.maxHp,m.hp+Gc),i.ev.push({t:"heal",x:m.x,y:m.y}));return}if(t.kind==="foe"&&e.kind==="foe"){if(i.ev.push({t:"bump",x:l,y:c,v:n}),i.phase!=="enemy"){let p=s<r?t:e;cs(i,p,4*gr(n),null)}return}let h=t.kind==="hero"?t:e,f=t.kind==="foe"?t:e,u=t.kind==="hero"?s:r;if(i.ev.push({t:"hit",x:l,y:c,v:n,id:h.id}),i.phase!=="enemy"||u>12){let p=h.atk*gr(n);h.sp==="spin"&&(p*=1.3),oi[h.type].passive==="ricochet"&&(p*=1+zc*Math.min(Hc,h.bn||0)),cs(i,f,p,h),h.sp==="flame"&&f.alive&&(f.burn=2),h.sp==="spin"&&i.shot&&!i.shot.done&&(i.shot.done=!0,Ar(i,h.x,h.y,18,8,34,!1,h))}f.alive&&f.attacking&&!a&&(mr(i,h,f.atk*gr(n)),f.attacking=!1)}function Yc(i,t,e){let n=e.x-t.x,s=e.y-t.y,r=t.r+e.r,a=n*n+s*s;if(a>=r*r)return;let o=Math.sqrt(a)||1e-4,l=n/o,c=s/o,h=t.pierce&&e.kind==="foe"||e.pierce&&t.kind==="foe",f=(t.vx-e.vx)*l+(t.vy-e.vy)*c,u=Fe(t.vx,t.vy),p=Fe(e.vx,e.vy);if(h){let m=t.pierce?u:p;m>6&&ko(i,t,e,m,u,p,!0)}else{let m=t.im+e.im;if(m===0)return;let x=r-o;if(t.x-=l*x*t.im/m,t.y-=c*x*t.im/m,e.x+=l*x*e.im/m,e.y+=c*x*e.im/m,f>0){let g=(1+kc)*f/m;t.vx-=g*t.im*l,t.vy-=g*t.im*c,e.vx+=g*e.im*l,e.vy+=g*e.im*c}f>3&&ko(i,t,e,f,u,p,!1)}}function Kc(i,t,e){let n=an(t.x,e.x-e.hw,e.x+e.hw),s=an(t.y,e.y-e.hh,e.y+e.hh),r=t.x-n,a=t.y-s,o=r*r+a*a;if(o>=t.r*t.r)return;let l,c,h;if(o<1e-9){let u=e.hw+t.r-Math.abs(t.x-e.x),p=e.hh+t.r-Math.abs(t.y-e.y);u<p?(l=t.x<e.x?-1:1,c=0,h=u):(l=0,c=t.y<e.y?-1:1,h=p)}else{let u=Math.sqrt(o);l=r/u,c=a/u,h=t.r-u}t.x+=l*h,t.y+=c*h;let f=t.vx*l+t.vy*c;f<0&&(t.vx-=(1+ai)*f*l,t.vy-=(1+ai)*f*c,-f>6&&(i.ev.push({t:"wall",x:t.x-l*t.r,y:t.y-c*t.r,v:-f,block:!0}),t.kind==="hero"&&t.bn++))}function Zc(i){let t=i.bodies;for(let n of t){if(!n.alive||n.kind==="crystal")continue;let s=Oc*(n.muMul||1);for(let a of i.pools)if(Fe(n.x-a.x,n.y-a.y)<a.r){s*=3.5;break}let r=Math.exp(-s*Ve);n.vx*=r,n.vy*=r,n.vx*n.vx+n.vy*n.vy<Fo*Fo&&(n.vx=0,n.vy=0),n.x+=n.vx*Ve,n.y+=n.vy*Ve,n.x<n.r&&(n.x=n.r,n.vx<0&&(-n.vx>6&&(i.ev.push({t:"wall",x:0,y:n.y,v:-n.vx}),n.kind==="hero"&&n.bn++),n.vx=-n.vx*ai)),n.x>60-n.r&&(n.x=60-n.r,n.vx>0&&(n.vx>6&&(i.ev.push({t:"wall",x:60,y:n.y,v:n.vx}),n.kind==="hero"&&n.bn++),n.vx=-n.vx*ai)),n.y<n.r&&(n.y=n.r,n.vy<0&&(-n.vy>6&&(i.ev.push({t:"wall",x:n.x,y:0,v:-n.vy}),n.kind==="hero"&&n.bn++),n.vy=-n.vy*ai)),n.y>96-n.r&&(n.y=96-n.r,n.vy>0&&(n.vy>6&&(i.ev.push({t:"wall",x:n.x,y:96,v:n.vy}),n.kind==="hero"&&n.bn++),n.vy=-n.vy*ai));for(let a of i.blocks)Kc(i,n,a);n.attacking&&i.t>n.attackUntil&&(n.attacking=!1)}let e=t.length;for(let n=0;n<e;n++){let s=t[n];if(s.alive)for(let r=n+1;r<e;r++){let a=t[r];a.alive&&(s.im===0&&a.im===0||Yc(i,s,a))}}for(let n of i.proj){n.x+=n.vx*Ve,n.y+=n.vy*Ve,n.life-=Ve,(n.x<0||n.x>60||n.y<0||n.y>96)&&(n.life=0);for(let s of t)!s.alive||n.life<=0||(s.kind==="crystal"&&Fe(n.x-s.x,n.y-s.y)<s.r+.8?(n.life=0,i.ev.push({t:"splat",x:n.x,y:n.y})):s.kind==="hero"&&Fe(n.x-s.x,n.y-s.y)<s.r+.8&&(n.life=0,mr(i,s,n.dmg),i.ev.push({t:"splat",x:n.x,y:n.y,hero:!0})));for(let s of i.blocks)n.life>0&&Math.abs(n.x-s.x)<s.hw+.6&&Math.abs(n.y-s.y)<s.hh+.6&&(n.life=0,i.ev.push({t:"splat",x:n.x,y:n.y}))}i.proj=i.proj.filter(n=>n.life>0);for(let n of t)if(n.kind==="foe"&&n.alive&&n.stompAt&&i.t>=n.stompAt){n.stompAt=0,i.ev.push({t:"wave",x:n.x,y:n.y,rad:17,kind:"stomp"});for(let s of On(i)){let r=Fe(s.x-n.x,s.y-n.y);if(r<17+s.r){mr(i,s,n.atk*.7*(1-r/(17+s.r)*.5));let a=(s.x-n.x)/(r||1),o=(s.y-n.y)/(r||1);s.vx+=a*30*s.im,s.vy+=o*30*s.im}}}}var zo=i=>i.bodies.some(t=>t.alive&&t.kind!=="crystal"&&(t.vx!==0||t.vy!==0))||i.proj.length>0||i.bodies.some(t=>t.alive&&t.stompAt);function Ho(i){i.phase="won";let t=Xo(i)/Yo(i);i.stars=t>=.65?3:t>=.35?2:1,i.coins+=10+i.stars*4,i.ev.push({t:"won",stars:i.stars})}function Jc(i){for(let n of i.bodies)n.kind==="hero"&&(n.pierce=!1,n.muMul=1,n.sp=null);if(i.shot=null,rn(i).length===0){Ho(i);return}for(let n of rn(i))n.burn>0&&(n.burn--,cs(i,n,5,null),i.ev.push({t:"burn",x:n.x,y:n.y}));if(rn(i).length===0){Ho(i);return}i.eq=[];let t=On(i),e=rn(i).map(n=>({f:n,d:Math.min(...t.map(s=>Fe(s.x-n.x,s.y-n.y)))})).sort((n,s)=>n.d-s.d);for(let{f:n}of e)n.stun>0?(n.stun--,i.ev.push({t:"stunned",x:n.x,y:n.y})):i.eq.push(n.id);i.phase="enemy",i.pt=0,i.eTimer=.7,i.ev.push({t:"phase",phase:"enemy"})}function jc(i,t,e){let n=null,s=1e9;for(let r of e){let a=Fe(r.x-t.x,r.y-t.y)/r.aggro*(1+.35*Bn(i));a<s&&(s=a,n=r)}return n}function ri(i,t,e,n,s){t.vx=Math.cos(e)*n,t.vy=Math.sin(e)*n,t.attacking=s,t.attackUntil=i.t+2.2,i.ev.push({t:"foeMove",id:t.id,x:t.x,y:t.y})}function Qc(i,t){let e=On(i);if(!e.length)return 0;let n=jc(i,t,e),s=Math.atan2(n.y-t.y,n.x-t.x),r=(Bn(i)-.5)*2*t.err,a=t.speed*(.85+.3*Bn(i)),o=Fe(n.x-t.x,n.y-t.y);switch(t.ai){case"charge":return ri(i,t,s+r,a,!0),.5;case"throw":if(o<58){let l=s+r;i.proj.push({x:t.x,y:t.y,vx:Math.cos(l)*60,vy:Math.sin(l)*60,dmg:t.atk*(.9+.2*Bn(i)),life:2}),i.ev.push({t:"throw",x:t.x,y:t.y,id:t.id})}return ri(i,t,o<24?s+Math.PI:s+Math.PI/2*(Bn(i)<.5?1:-1),16,!1),.7;case"heal":for(let l of rn(i))Fe(l.x-t.x,l.y-t.y)<22&&l!==t&&(l.hp=Math.min(l.maxHp,l.hp+9),i.ev.push({t:"heal",x:l.x,y:l.y}));return i.ev.push({t:"heal",x:t.x,y:t.y,self:!0}),ri(i,t,s+Math.PI,14,!1),.7;case"boss":{let l=t.cnt++%3;if(l===0)ri(i,t,s+r,a,!0);else if(l===1)ri(i,t,s,30,!1),t.stompAt=i.t+1.1,i.ev.push({t:"telegraph",x:t.x,y:t.y,id:t.id});else{let c=0;for(let h=0;h<8&&c<1&&rn(i).length<8;h++){let f=Bn(i)*Math.PI*2,u=an(t.x+Math.cos(f)*(t.r+4),3,57),p=an(t.y+Math.sin(f)*(t.r+4),3,66);if(i.bodies.some(x=>x.alive&&Fe(x.x-u,x.y-p)<x.r+3))continue;let m=Go(i,Bn(i)<.5?"imp":"grunt",u,p);i.ev.push({t:"spawn",x:u,y:p,id:m.id}),c++}ri(i,t,s,12,!1)}return .9}default:return 0}}function $c(i){if(!On(i).length){i.phase="lost",i.ev.push({t:"lost"});return}i.turn++,i.gala=Math.min(100,i.gala+6),i.phase="aim",i.pt=0,i.ev.push({t:"phase",phase:"aim"})}function yr(i){if(!(i.phase==="won"||i.phase==="lost")){if(Zc(i),i.t+=Ve,i.pt+=Ve,i.phase==="shot"){let t=i.shot,e=Oo(i,t.id);if(!t.done&&e.alive&&e.vx===0&&e.vy===0&&i.pt>.15&&(t.special==="spin"?(t.done=!0,Ar(i,e.x,e.y,18,8,34,!1,e)):t.special==="slam"&&(t.done=!0,Ar(i,e.x,e.y,17,14,30,!0,e))),i.pt>9)for(let n of i.bodies)n.kind!=="crystal"&&(n.vx=0,n.vy=0);!zo(i)&&i.pt>.2&&Jc(i)}else if(i.phase==="enemy"){if(i.eTimer-=Ve,i.eq.length&&i.eTimer<=0){let t=Oo(i,i.eq.shift());i.eTimer=t&&t.alive?Qc(i,t):0}if(i.pt>14)for(let t of i.bodies)t.kind!=="crystal"&&(t.vx=0,t.vy=0,t.stompAt=0);!i.eq.length&&i.eTimer<=0&&!zo(i)&&$c(i)}}}function Ko(i,t,e,n,s,r=1.5){let a=Xc(i);if(!vr(a,t,e,n,s))return[];let o=a.bodies.find(h=>h.id===a.shot.id),l=[{x:o.x,y:o.y}],c=null;for(let h=0;h*Ve<r;h++){yr(a);let f=a.ev;a.ev=[];let u=!1;for(let p of f)(p.t==="wall"||p.t==="crystal")&&(u=!0),p.t==="hit"&&p.id===o.id&&(c=!0);if((h%5===0||u||c)&&l.push({x:o.x,y:o.y,bounce:u}),c||o.vx===0&&o.vy===0)break}return l}function Zo(i){let t=i&&typeof i=="object"?i:{},e={};if(t.stars&&typeof t.stars=="object")for(let s of Object.keys(t.stars)){let r=Number(t.stars[s]);r>=1&&r<=3&&(e[s]=r|0)}let n={};for(let s of li){let r=t.up&&t.up[s]||{};n[s]={hp:an(r.hp|0,0,5),atk:an(r.atk|0,0,5)}}return{unlocked:an(t.unlocked|0||1,1,je.length),stars:e,coins:Math.max(0,t.coins|0),up:n,muted:!!t.muted}}var Jo=i=>25*(i+1);function jo(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u);let f=a.ctx.decodeAudioData(h.buffer,u=>{a._smp[o]=u},()=>{});f&&f.catch&&f.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),f=l.createGain();h.buffer=c,f.gain.value=e[a]||.8,h.connect(f),f.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function Qo(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),f=l.createGain();h.buffer=c,h.loop=!0,f.gain.value=t,h.connect(f),f.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var $o={throw:"data:audio/mpeg;base64,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+pt4zzwKar73za1L41v2xr//0fx4/+9/f//+Gqh2tG8RPpIqAgkkgAAAATOUzhpwv9FAKAL3Pr/gLiYFJa/wry/ysP4BuKg/TlYmb/sQX49Yc7DlhOX/8tDzMgf4NsUtics5YS2///jgVosgvlWSRDBosSv/+zjEooALPNMSVMGACmkx41se8AGVylQ1WsSu////Ry6ex6t6rgl/MuN8Zxdhbo0H////9UPJnF8hDBE7+3pCVyuzWF7f6x///////TJ/rbxb0/e7oaCop/8wcsLLmsGE+T3K1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEiYAT5XMo2YeACAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",hit:"data:audio/mpeg;base64,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",heal:"data:audio/mpeg;base64,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",special:"data:audio/mpeg;base64,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",squeak:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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PnrBddBUrLhwH8uwcpja0azVJ508ap0aKjsk+a5W26ip1F0ErDHtZpf7WjEaVTyrO2ViOyZp1GVrtNf7g3Lj7LbuPicJdCTuQ3ZLrJ1bSOn/+zjE6wAKoXUiwwReQZEu44iTDfmpi9pQVBS8oxNdmUJ1YVfH97nEerDsHxjCcGkQHBlEkXDLpCEPexQzoWhAxQBwWEYXdipNuREoa2PRKLYhllWX8emwm5lTH1huoskURcmRhc8L1mZgw1M/6MFO3rvjuxbRJXhf9UWYPvB9e97Y/6l/nQAFg1eMQxT6Qx2eYpVqIdr9WW3cr8CPIWPRB00XI4rUYzTW7hSZTY8pRuMqUrRJ6C728EFw7iesXwzwnyevDytLyOERBbKdez6dyL6ZO328OQ7/+zjE74MM9O8aRKTACXObo0STDTmUQtB/n2eX1+D/kK3DFjLcPpgpEPGRuzAvAWaX1Ey1JQ68RI97saSJwYhzkvbGuLel7w479XuDY4b1SiIJZOxivnnTqR4p0owHIqHisVhyGQ/vDURkQjtKZCEPEnQ5UKuH3jzwDohfcM02c5FiA8eNe6U3dEGg6Z4Eu6f/ciMNMt6UeKQyFOX9H7mIQyF8SmVfdsdPHB+/bk4jEPnYHClMQHrMZCcimAXhEBgEjZnkf0xAYHUeBudKVC0pBGG3VK9jYRH/+zjE7oONKPMSA7DBiXoaYgTEjGkEAQAKUOoBIfMOuLxCFIfv727ixemZwbV2eEcB+bKDdcckMfHQTCGJR8bYPsSYoIABAB4A4AwCW548kpdlGyzabtEAiTyMN46wGFiSO01i+D3//+8mJrnJsbA8HFXImBqy3I1/8f/9sOMrk3tc0OVuRcigSVrNlzWf/////nP3n7o3Nz5MVP/sNoNrcbHnKnUTtgABKskhAAMIQhkISkJxdDfTo9SleX1LK0zqUrqUpaGM0z///9S6l0MZkMbUpf5jczz/+zjE7AMLzYEQRhRywrItYkae8AClATKUpZgICKIgaHgqeEp2K578lgq8qGiwM0xBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEyAATfZlBuPWAASwiIvOCIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var th="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",be=null,Cr=!1;function tl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function el(){tl(),Cr=!0;try{if(be||(be=document.createElement("audio"),be.src=th,be.loop=!0,be.preload="auto",be.setAttribute("playsinline",""),be.setAttribute("webkit-playsinline",""),be.setAttribute("x-webkit-airplay","deny"),be.volume=.01,be.addEventListener("pause",()=>{Cr&&!document.hidden&&setTimeout(()=>Cr&&be.paused&&be.play().catch(()=>{}),300)})),be.paused){let i=be.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function nl(i,t){tl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ge=i=>440*Math.pow(2,(i-69)/12),hs=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(el(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;nl(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination);let s=Math.floor(e.sampleRate*1.7),r=e.createBuffer(2,s,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let f=0;f<s;f++)h[f]=(Math.random()*2-1)*Math.pow(1-f/s,2.6)}let a=e.createConvolver();a.buffer=r,this.rev=e.createGain(),this.rev.gain.value=.22,this.rev.connect(a).connect(this.master),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.music.connect(this.rev),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.sfx.connect(this.rev);let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+o),c.gain.exponentialRampToValueAtTime(1e-4,n+s);let h=c;if(t==="sawtooth"||t==="square"){let u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=Math.min(9e3,e*6+800),u.Q.value=.7,c.connect(u),h=u}h.connect(a);let f=t==="sine"?[0]:[-6,6];for(let u of f){let p=l.createOscillator();p.type=t,p.frequency.value=e,p.detune.value=u,p.connect(c),p.start(n),p.stop(n+s+.05)}}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let f=c.createBiquadFilter();f.type=s,f.frequency.setValueAtTime(r,t),l&&f.frequency.exponentialRampToValueAtTime(l,t+e),f.Q.value=a;let u=c.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(f).connect(u).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",ge(l),a,c*n*1.4,e.vol||.12,this.music,.01);e.groove!==!1&&!e.noGroove&&this._groove(e,r,a,n),this.nextBeat+=.5}}_groove(t,e,n,s){let r=Math.min(.2,(t.vol||.1)*1.3),a=c=>Math.abs(e-c)<1e-6,o=Math.abs(e-Math.round(e))<1e-6,l=e%4;o&&(l===0||l===2&&t.tempo>=100)&&(this.slide("sine",150,42,n,.17,r*1.9,this.music),this.noise(n,.02,r*.5,"lowpass",900,1,this.music)),o&&(l===1||l===3)&&t.tempo>=100&&this.noise(n,.12,r*.9,"bandpass",1800,.8,this.music),o||this.noise(n,.04,r*.45,"highpass",7e3,1,this.music),(a(0)||o&&l===0&&e%8===0)&&this.tone("sine",55,n,s*1.6,r*1.1,this.music,.02)}};var eh=[[0,79,.5],[.5,83,.5],[1,86,1],[2,83,.5],[2.5,79,.5],[3,74,1],[4,76,.5],[4.5,79,.5],[5,83,1],[6,81,.5],[6.5,79,.5],[7,78,1],[8,79,.5],[8.5,83,.5],[9,86,1],[10,88,.5],[10.5,86,.5],[11,83,1],[12,81,.5],[12.5,79,.5],[13,78,.5],[13.5,76,.5],[14,74,2]],nh=[[0,55,2],[2,62,2],[4,60,2],[6,62,2],[8,55,2],[10,59,2],[12,57,2],[14,50,2]],ih=[[0,67,1],[1.5,70,.5],[2,73,1],[3,70,1],[4,67,1],[5.5,66,.5],[6,64,1],[7,66,1],[8,67,1],[9.5,70,.5],[10,73,1],[11,76,1],[12,75,1],[13,73,.5],[14,70,2],[0,43,2],[4,41,2],[8,43,2],[12,39,2]],ci=class extends hs{play(t,e=1){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"tap":this.tone("sine",660,s,.06,.07);break;case"select":this.tone("triangle",ge(84),s,.08,.07);break;case"pull":this.tone("sine",300+e*400,s,.05,.03);break;case"whoosh":this.noise(s,.5,.05+.09*e,"bandpass",500+1200*e,1.2,this.sfx,5e3),this.slide("sine",300,120,s,.35,.05);break;case"crystal":{let r=[84,88,91,93,96][Math.random()*5|0];this.tone("triangle",ge(r),s,.45,.1*Math.min(1,.4+e)),this.tone("sine",ge(r+12),s+.02,.3,.04);break}case"wall":this.noise(s,.12,.07*Math.min(1,e),"lowpass",700),this.tone("sine",140,s,.1,.07);break;case"hit":this.slide("sine",220,70,s,.18,.2),this.noise(s,.1,.12,"lowpass",1200);break;case"chain":this.tone("triangle",ge(76),s,.15,.1),this.tone("triangle",ge(83),s+.07,.18,.1);break;case"bump":this.noise(s,.08,.08,"lowpass",600);break;case"squeak":this.slide("square",500,1100,s,.14,.05),this.slide("square",1100,600,s+.13,.12,.04);break;case"puff":this.noise(s,.25,.1,"highpass",2500,1,this.sfx,800),[0,4,7].forEach((r,a)=>this.tone("triangle",ge(86+r),s+.05+a*.06,.2,.07));break;case"special":[0,4,7,12,16].forEach((r,a)=>this.tone("sawtooth",ge(60+r),s+a*.05,.3,.06)),this.noise(s,.5,.08,"bandpass",800,2,this.sfx,4e3);break;case"ready":[0,7,12].forEach((r,a)=>this.tone("triangle",ge(79+r),s+a*.07,.25,.09));break;case"wave":this.slide("sine",600,90,s,.5,.14),this.noise(s,.5,.1,"lowpass",2e3,1,this.sfx,200);break;case"throw":this.slide("triangle",400,900,s,.2,.06);break;case"splat":this.noise(s,.12,.1,"highpass",1500);break;case"heal":[0,4,7].forEach((r,a)=>this.tone("sine",ge(84+r),s+a*.06,.25,.07));break;case"stomp":this.slide("sine",130,40,s,.4,.25),this.noise(s,.3,.14,"lowpass",500);break;case"hurt":this.slide("sawtooth",300,120,s,.25,.07);break;case"banner":[0,7].forEach((r,a)=>this.tone("triangle",ge(72+r),s+a*.09,.3,.1));break;case"enemyBanner":[0,-3].forEach((r,a)=>this.tone("square",ge(55+r),s+a*.12,.3,.06));break;case"coin":this.tone("square",ge(88),s,.06,.04),this.tone("square",ge(95),s+.06,.12,.04);break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",ge(72+r),s+a*.11,.6,.14));break;case"lose":[0,-2,-5,-9].forEach((r,a)=>this.tone("triangle",ge(64+r),s+a*.2,.5,.11));break;default:break}}setMode(t){if(!t){this.setBed(null),this.setTune(null);return}this.setBed("wind"),t==="enemy"?this.setTune({tempo:112,beats:16,wave:"square",vol:.045,notes:ih}):this.setTune({tempo:t==="boss"?126:118,beats:16,wave:"triangle",vol:.09,notes:[...eh,...nh]})}};jo(ci,$o);Qo(ci);var mo="170";var sh=0,il=1,rh=2;var lc=1,ah=2,dn=3,Pn=0,Ee=1,pn=2,Rn=0,bi=1,sl=2,rl=3,al=4,oh=5,Kn=100,lh=101,ch=102,hh=103,uh=104,dh=200,fh=201,ph=202,gh=203,ta=204,ea=205,mh=206,Ah=207,xh=208,vh=209,yh=210,Ch=211,_h=212,Ih=213,Mh=214,na=0,ia=1,sa=2,Ti=3,ra=4,aa=5,oa=6,la=7,cc=0,bh=1,Sh=2,Vn=0,wh=1,Eh=2,Th=3,Ao=4,Rh=5,Vh=6,Ph=7;var hc=300,Ri=301,Vi=302,ca=303,ha=304,lr=306,Qi=1e3,jn=1001,ua=1002,Ye=1003,Uh=1004;var us=1005;var $e=1006,_r=1007;var Qn=1008;var xn=1009,uc=1010,dc=1011,$i=1012,xo=1013,$n=1014,gn=1015,rs=1016,vo=1017,yo=1018,Pi=1020,fc=35902,pc=1021,gc=1022,Xe=1023,mc=1024,Ac=1025,Si=1026,Ui=1027,xc=1028,Co=1029,vc=1030,_o=1031;var Io=1033,Ds=33776,qs=33777,Ns=33778,Fs=33779,da=35840,fa=35841,pa=35842,ga=35843,ma=36196,Aa=37492,xa=37496,va=37808,ya=37809,Ca=37810,_a=37811,Ia=37812,Ma=37813,ba=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Ra=37819,Va=37820,Pa=37821,Bs=36492,Ua=36494,La=36495,yc=36283,Da=36284,qa=36285,Na=36286;var Os=2300,Fa=2301,Ir=2302,ol=2400,ll=2401,cl=2402;var Lh=3200,Dh=3201;var Cc=0,qh=1,En="",ve="srgb",Bi="srgb-linear",cr="linear",Zt="srgb";var hi=7680;var hl=519,Nh=512,Fh=513,Bh=514,_c=515,Oh=516,kh=517,zh=518,Hh=519,ul=35044;var dl="300 es",mn=2e3,ks=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mr=Math.PI/180,Ba=180/Math.PI;function as(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Gh(i,t){return(i%t+t)%t}function br(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],b=s[1],M=s[4],C=s[7],D=s[2],S=s[5],w=s[8];return r[0]=a*x+o*b+l*D,r[3]=a*g+o*M+l*S,r[6]=a*d+o*C+l*w,r[1]=c*x+h*b+f*D,r[4]=c*g+h*M+f*S,r[7]=c*d+h*C+f*w,r[2]=u*x+p*b+m*D,r[5]=u*g+p*M+m*S,r[8]=u*d+p*C+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,m=e*f+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sr=new Vt;function Ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=zs("canvas");return i.style.display="block",i}var fl={};function Zi(i){i in fl||(fl[i]=!0,console.warn(i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===En?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pl=[.64,.33,.3,.6,.15,.06],gl=[.2126,.7152,.0722],ml=[.3127,.329],Al=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[Bi]:{primaries:pl,whitePoint:ml,transfer:cr,toXYZ:Al,fromXYZ:xl,luminanceCoefficients:gl,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:pl,whitePoint:ml,transfer:Zt,toXYZ:Al,fromXYZ:xl,luminanceCoefficients:gl,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var ui,Oa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=zs("canvas")),ui.width=t.width,ui.height=t.height;let n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zh=0,Hs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jh=0,Le=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=$e,a=Qn,o=Xe,l=xn,c=i.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=as(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=hc;Le.DEFAULT_ANISOTROPY=1;var Jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,C=(p+1)/2,D=(d+1)/2,S=(h+u)/4,w=(f+x)/4,L=(m+g)/4;return M>C&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=w/n):C>D?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=S/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Hs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(f!==x||l!==u||c!==p||h!==m){let g=1-o,d=l*u+c*p+h*m+f*x,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let D=Math.sqrt(M),S=Math.atan2(D,d*b);g=Math.sin(g*S)/D,o=Math.sin(o*S)/D}let C=o*b;if(l=l*g+u*C,c=c*g+p*C,h=h*g+m*C,f=f*g+x*C,g===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*p-c*u,t[e+1]=l*m+h*u+c*f-o*p,t[e+2]=c*m+h*p+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"YZX":this._x=u*h*f+c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f-u*p*m;break;case"XZY":this._x=u*h*f-c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Er=new U,vl=new Ln,ti=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),fs.subVectors(this.max,Gi),di.subVectors(t.a,Gi),fi.subVectors(t.b,Gi),pi.subVectors(t.c,Gi),_n.subVectors(fi,di),In.subVectors(pi,fi),kn.subVectors(di,pi);let e=[0,-_n.z,_n.y,0,-In.z,In.y,0,-kn.z,kn.y,_n.z,0,-_n.x,In.z,0,-In.x,kn.z,0,-kn.x,-_n.y,_n.x,0,-In.y,In.x,0,-kn.y,kn.x,0];return!Tr(e,di,fi,pi,fs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,di,fi,pi,fs))?!1:(ps.crossVectors(_n,In),e=[ps.x,ps.y,ps.z],Tr(e,di,fi,pi,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},on=[new U,new U,new U,new U,new U,new U,new U,new U],He=new U,ds=new ti,di=new U,fi=new U,pi=new U,_n=new U,In=new U,kn=new U,Gi=new U,fs=new U,ps=new U,zn=new U;function Tr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);let o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jh=new ti,Wi=new U,Rr=new U,Li=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);let e=Wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Rr)),this.expandByPoint(Wi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new U,Vr=new U,gs=new U,Mn=new U,Pr=new U,ms=new U,Ur=new U,Ws=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Vr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=Mn.dot(this.direction),l=-Mn.dot(gs),c=Mn.lengthSq(),h=Math.abs(1-a*a),f,u,p,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vr).addScaledVector(gs,u),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Pr.subVectors(e,t),ms.subVectors(n,t),Ur.crossVectors(Pr,ms);let a=this.direction.dot(Ur),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,t);let l=o*this.direction.dot(ms.crossVectors(Mn,ms));if(l<0)return null;let c=o*this.direction.dot(Pr.cross(Mn));if(c<0||l+c>a)return null;let h=-o*Mn.dot(Ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,u,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,p,m,x,g)}set(t,e,n,s,r,a,o,l,c,h,f,u,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,m=c*h,x=c*f;e[0]=u+x*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,m=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=m*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+m,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=p*f-m,e[2]=m*f-p,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,$h)}lookAt(t,e,n){let s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),bn.crossVectors(n,Pe),bn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),bn.crossVectors(n,Pe)),bn.normalize(),As.crossVectors(Pe,bn),s[0]=bn.x,s[4]=As.x,s[8]=Pe.x,s[1]=bn.y,s[5]=As.y,s[9]=Pe.y,s[2]=bn.z,s[6]=As.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],b=n[3],M=n[7],C=n[11],D=n[15],S=s[0],w=s[4],L=s[8],_=s[12],y=s[1],E=s[5],X=s[9],B=s[13],G=s[2],J=s[6],z=s[10],$=s[14],k=s[3],st=s[7],ht=s[11],Ct=s[15];return r[0]=a*S+o*y+l*G+c*k,r[4]=a*w+o*E+l*J+c*st,r[8]=a*L+o*X+l*z+c*ht,r[12]=a*_+o*B+l*$+c*Ct,r[1]=h*S+f*y+u*G+p*k,r[5]=h*w+f*E+u*J+p*st,r[9]=h*L+f*X+u*z+p*ht,r[13]=h*_+f*B+u*$+p*Ct,r[2]=m*S+x*y+g*G+d*k,r[6]=m*w+x*E+g*J+d*st,r[10]=m*L+x*X+g*z+d*ht,r[14]=m*_+x*B+g*$+d*Ct,r[3]=b*S+M*y+C*G+D*k,r[7]=b*w+M*E+C*J+D*st,r[11]=b*L+M*X+C*z+D*ht,r[15]=b*_+M*B+C*$+D*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15];return m*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*p-n*l*p)+x*(+e*l*p-e*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+g*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*f+e*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],b=f*g*c-x*u*c+x*l*p-o*g*p-f*l*d+o*u*d,M=m*u*c-h*g*c-m*l*p+a*g*p+h*l*d-a*u*d,C=h*x*c-m*f*c+m*o*p-a*x*p-h*o*d+a*f*d,D=m*f*l-h*x*l-m*o*u+a*x*u+h*o*g-a*f*g,S=e*b+n*M+s*C+r*D;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=b*w,t[1]=(x*u*r-f*g*r-x*s*p+n*g*p+f*s*d-n*u*d)*w,t[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*d+n*l*d)*w,t[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*p-n*l*p)*w,t[4]=M*w,t[5]=(h*g*r-m*u*r+m*s*p-e*g*p-h*s*d+e*u*d)*w,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*d-e*l*d)*w,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*p+e*l*p)*w,t[8]=C*w,t[9]=(m*f*r-h*x*r-m*n*p+e*x*p+h*n*d-e*f*d)*w,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*d+e*o*d)*w,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*p-e*o*p)*w,t[12]=D*w,t[13]=(h*x*s-m*f*s+m*n*u-e*x*u-h*n*g+e*f*g)*w,t[14]=(m*o*s-a*x*s-m*n*l+e*x*l+a*n*g-e*o*g)*w,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*u+e*o*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,m=r*f,x=a*h,g=a*f,d=o*f,b=l*c,M=l*h,C=l*f,D=n.x,S=n.y,w=n.z;return s[0]=(1-(x+d))*D,s[1]=(p+C)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(p-C)*S,s[5]=(1-(u+d))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+M)*w,s[9]=(g-b)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gi.set(s[0],s[1],s[2]).length(),a=gi.set(s[4],s[5],s[6]).length(),o=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ge.copy(this);let c=1/r,h=1/a,f=1/o;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=f,Ge.elements[9]*=f,Ge.elements[10]*=f,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),p,m;if(o===mn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ks)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*c,p=(n+s)*h,m,x;if(o===mn)m=(a+r)*f,x=-2*f;else if(o===ks)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gi=new U,Ge=new le,Qh=new U(0,0,0),$h=new U(1,1,1),bn=new U,As=new U,Pe=new U,yl=new le,Cl=new Ln,tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tu=0,_l=new U,mi=new Ln,cn=new le,xs=new U,Xi=new U,eu=new U,nu=new Ln,Il=new U(1,0,0),Ml=new U(0,1,0),bl=new U(0,0,1),Sl={type:"added"},iu={type:"removed"},Ai={type:"childadded",child:null},Lr={type:"childremoved",child:null},_e=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new tn,n=new Ln,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Vt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Xi,xs,this.up):cn.lookAt(xs,Xi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(cn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new U(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=new U,hn=new U,Dr=new U,un=new U,xi=new U,vi=new U,wl=new U,qr=new U,Nr=new U,Fr=new U,Br=new Jt,Or=new Jt,kr=new Jt,Zn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),hn.subVectors(n,e),Dr.subVectors(t,e);let a=We.dot(We),o=We.dot(hn),l=We.dot(Dr),c=hn.dot(hn),h=hn.dot(Dr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Br.setScalar(0),Or.setScalar(0),kr.setScalar(0),Br.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Br,r.x),a.addScaledVector(Or,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),hn.subVectors(t,e),We.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),We.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),vi.subVectors(r,n),qr.subVectors(t,n);let l=xi.dot(qr),c=vi.dot(qr);if(l<=0&&c<=0)return e.copy(n);Nr.subVectors(t,s);let h=xi.dot(Nr),f=vi.dot(Nr);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);Fr.subVectors(t,r);let p=xi.dot(Fr),m=vi.dot(Fr);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(vi,o);let g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return wl.subVectors(r,s),o=(f-h)/(f-h+(p-m)),e.copy(s).addScaledVector(wl,o);let d=1/(g+x+u);return a=x*d,o=u*d,e.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=Gh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zr(a,r,t+1/3),this.g=zr(a,r,t),this.b=zr(a,r,t-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Ht.fromWorkingColorSpace(xe.copy(this),t),Math.round(we(xe.r*255,0,255))*65536+Math.round(we(xe.g*255,0,255))*256+Math.round(we(xe.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(xe.copy(this),e);let n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=ve){Ht.fromWorkingColorSpace(xe.copy(this),t);let e=xe.r,n=xe.g,s=xe.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(vs);let n=br(Sn.h,vs.h,e),s=br(Sn.s,vs.s,e),r=br(Sn.l,vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xe=new Nt;Nt.NAMES=Mc;var su=0,Dn=class extends Un{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=as(),this.name="",this.blending=bi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qn=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new U,ys=new Wt,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}};var Ys=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ks=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Oe=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},ru=0,Be=new le,Hr=new _e,yi=new U,Ue=new ti,Yi=new ti,pe=new U,Ke=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Ks:Ys)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ue.min,Yi.min),Ue.expandByPoint(pe),pe.addVectors(Ue.max,Yi.max),Ue.expandByPoint(pe)):(Ue.expandByPoint(Yi.min),Ue.expandByPoint(Yi.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),pe.add(yi)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;let c=new U,h=new U,f=new U,u=new Wt,p=new Wt,m=new Wt,x=new U,g=new U;function d(L,_,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,y),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),h.sub(c),f.sub(c),p.sub(u),m.sub(u);let E=1/(p.x*m.y-m.x*p.y);isFinite(E)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(E),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(E),o[L].add(x),o[_].add(x),o[y].add(x),l[L].add(g),l[_].add(g),l[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,_=b.length;L<_;++L){let y=b[L],E=y.start,X=y.count;for(let B=E,G=E+X;B<G;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new U,C=new U,D=new U,S=new U;function w(L){D.fromBufferAttribute(s,L),S.copy(D);let _=o[L];M.copy(_),M.sub(D.multiplyScalar(D.dot(_))).normalize(),C.crossVectors(S,_);let E=C.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,E)}for(let L=0,_=b.length;L<_;++L){let y=b[L],E=y.start,X=y.count;for(let B=E,G=E+X;B<G;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,p=t.count;u<p;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)u[m++]=c[p++]}return new Te(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},El=new le,Hn=new Ws,Cs=new Li,Tl=new U,_s=new U,Is=new U,Ms=new U,Gr=new U,bs=new U,Rl=new U,Ss=new U,Ce=class extends _e{constructor(t=new Ke,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Gr.fromBufferAttribute(f,t),a?bs.addScaledVector(Gr,h):bs.addScaledVector(Gr.sub(e),h))}e.add(bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(Cs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Cs,Tl)===null||Hn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(El.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let C=b,D=M;C<D;C+=3){let S=o.getX(C),w=o.getX(C+1),L=o.getX(C+2);s=ws(this,d,t,n,c,h,f,S,w,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let b=o.getX(g),M=o.getX(g+1),C=o.getX(g+2);s=ws(this,a,t,n,c,h,f,b,M,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let C=b,D=M;C<D;C+=3){let S=C,w=C+1,L=C+2;s=ws(this,d,t,n,c,h,f,S,w,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let b=g,M=g+1,C=g+2;s=ws(this,a,t,n,c,h,f,b,M,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function au(i,t,e,n,s,r,a,o){let l;if(t.side===Ee?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pn,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ss);return c<e.near||c>e.far?null:{distance:c,point:Ss.clone(),object:i}}function ws(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_s),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ms);let h=au(i,t,e,n,_s,Is,Ms,Rl);if(h){let f=new U;Zn.getBarycoord(Rl,_s,Is,Ms,f),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,f,new Wt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,f,new Wt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Zn.getNormal(_s,Is,Ms,u.normal),h.face=u,h.barycoord=f}return h}var ei=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function m(x,g,d,b,M,C,D,S,w,L,_){let y=C/w,E=D/L,X=C/2,B=D/2,G=S/2,J=w+1,z=L+1,$=0,k=0,st=new U;for(let ht=0;ht<z;ht++){let Ct=ht*E-B;for(let Dt=0;Dt<J;Dt++){let jt=Dt*y-X;st[x]=jt*b,st[g]=Ct*M,st[d]=G,c.push(st.x,st.y,st.z),st[x]=0,st[g]=0,st[d]=S>0?1:-1,h.push(st.x,st.y,st.z),f.push(Dt/w),f.push(1-ht/L),$+=1}}for(let ht=0;ht<L;ht++)for(let Ct=0;Ct<w;Ct++){let Dt=u+Ct+J*ht,jt=u+Ct+J*(ht+1),W=u+(Ct+1)+J*(ht+1),tt=u+(Ct+1)+J*ht;l.push(Dt,jt,tt),l.push(jt,W,tt),k+=6}o.addGroup(p,k,_),p+=k,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=Di(i[e]);for(let s in n)t[s]=n[s]}return t}function ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var lu={clone:Di,merge:Ie},cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zs=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=new U,Vl=new Wt,Pl=new Wt,ye=class extends Zs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Vl,Pl),e.subVectors(Pl,Vl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ci=-90,_i=1,Ha=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Ci,_i,t,e);s.layers=this.layers,this.add(s);let r=new ye(Ci,_i,t,e);r.layers=this.layers,this.add(r);let a=new ye(Ci,_i,t,e);a.layers=this.layers,this.add(a);let o=new ye(Ci,_i,t,e);o.layers=this.layers,this.add(o);let l=new ye(Ci,_i,t,e);l.layers=this.layers,this.add(l);let c=new ye(Ci,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Js=class extends Le{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Js(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ei(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Rn});r.uniforms.tEquirect.value=e;let a=new Ce(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=$e),new Ha(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wr=new U,uu=new U,du=new Vt,fn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wr.subVectors(n,e).cross(uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||du.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Li,Es=new U,ts=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],m=s[9],x=s[10],g=s[11],d=s[12],b=s[13],M=s[14],C=s[15];if(n[0].setComponents(l-r,u-c,g-p,C-d).normalize(),n[1].setComponents(l+r,u+c,g+p,C+d).normalize(),n[2].setComponents(l+a,u+h,g+m,C+b).normalize(),n[3].setComponents(l-a,u-h,g-m,C-b).normalize(),n[4].setComponents(l-o,u-f,g-x,C-M).normalize(),e===mn)n[5].setComponents(l+o,u+f,g+x,C+M).normalize();else if(e===ks)n[5].setComponents(o,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Es.x=s.normal.x>0?t.max.x:t.min.x,Es.y=s.normal.y>0?t.max.y:t.min.y,Es.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){let m=f[u],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qi=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let b=d*u-a;for(let M=0;M<c;M++){let C=M*f-r;m.push(C,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let M=b+c*d,C=b+c*(d+1),D=b+1+c*(d+1),S=b+1+c*d;p.push(M,C,S),p.push(C,D,S)}this.setIndex(p),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,If=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:pu,alphahash_pars_fragment:gu,alphamap_fragment:mu,alphamap_pars_fragment:Au,alphatest_fragment:xu,alphatest_pars_fragment:vu,aomap_fragment:yu,aomap_pars_fragment:Cu,batching_pars_vertex:_u,batching_vertex:Iu,begin_vertex:Mu,beginnormal_vertex:bu,bsdfs:Su,iridescence_fragment:wu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Pu,color_fragment:Uu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:qu,common:Nu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:Ou,displacementmap_vertex:ku,emissivemap_fragment:zu,emissivemap_pars_fragment:Hu,colorspace_fragment:Gu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:Yu,envmap_pars_fragment:Ku,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:ad,envmap_vertex:Ju,fog_vertex:ju,fog_pars_vertex:Qu,fog_fragment:$u,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:sd,lights_pars_begin:rd,lights_toon_fragment:od,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:hd,lights_physical_fragment:ud,lights_physical_pars_fragment:dd,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:gd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:vd,map_fragment:yd,map_pars_fragment:Cd,map_particle_fragment:_d,map_particle_pars_fragment:Id,metalnessmap_fragment:Md,metalnessmap_pars_fragment:bd,morphinstance_vertex:Sd,morphcolor_vertex:wd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:Rd,normal_fragment_begin:Vd,normal_fragment_maps:Pd,normal_pars_fragment:Ud,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:Od,opaque_fragment:kd,packing:zd,premultiplied_alpha_fragment:Hd,project_vertex:Gd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:jd,shadowmask_pars_fragment:Qd,skinbase_vertex:$d,skinning_pars_vertex:tf,skinning_vertex:ef,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:rf,tonemapping_fragment:af,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:uf,uv_vertex:df,worldpos_vertex:ff,background_vert:pf,background_frag:gf,backgroundCube_vert:mf,backgroundCube_frag:Af,cube_vert:xf,cube_frag:vf,depth_vert:yf,depth_frag:Cf,distanceRGBA_vert:_f,distanceRGBA_frag:If,equirect_vert:Mf,equirect_frag:bf,linedashed_vert:Sf,linedashed_frag:wf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:Rf,meshlambert_frag:Vf,meshmatcap_vert:Pf,meshmatcap_frag:Uf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:qf,meshphong_frag:Nf,meshphysical_vert:Ff,meshphysical_frag:Bf,meshtoon_vert:Of,meshtoon_frag:kf,points_vert:zf,points_frag:Hf,shadow_vert:Gf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:Yf},nt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ie([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ie([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ie([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ie([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ie([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ie([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ie([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ie([nt.lights,nt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Qe.physical={uniforms:Ie([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Ts={r:0,b:0,g:0},Wn=new tn,Kf=new le;function Zf(i,t,e,n,s,r,a){let o=new Nt(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1,C=m(b);C===null?d(o,l):C&&C.isColor&&(d(C,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){let C=m(M);C&&(C.isCubeTexture||C.mapping===lr)?(h===void 0&&(h=new Ce(new ei(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Di(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(M.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Wn)),h.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Zt,(f!==C||u!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=C,u=C.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ce(new qi(2,2),new en({name:"BackgroundMaterial",uniforms:Di(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||u!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,u=C.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(Ts,bc(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:x,addToRenderList:g}}function Jf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(y,E,X,B,G){let J=!1,z=f(B,X,E);r!==z&&(r=z,c(r.object)),J=p(y,B,X,G),J&&m(y,B,X,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,C(y,E,X,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,E,X){let B=X.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[E.id];J===void 0&&(J={},G[E.id]=J);let z=J[B];return z===void 0&&(z=u(l()),J[B]=z),z}function u(y){let E=[],X=[],B=[];for(let G=0;G<e;G++)E[G]=0,X[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:X,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,E,X,B){let G=r.attributes,J=E.attributes,z=0,$=X.getAttributes();for(let k in $)if($[k].location>=0){let ht=G[k],Ct=J[k];if(Ct===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Ct=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Ct=y.instanceColor)),ht===void 0||ht.attribute!==Ct||Ct&&ht.data!==Ct.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function m(y,E,X,B){let G={},J=E.attributes,z=0,$=X.getAttributes();for(let k in $)if($[k].location>=0){let ht=J[k];ht===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));let Ct={};Ct.attribute=ht,ht&&ht.data&&(Ct.data=ht.data),G[k]=Ct,z++}r.attributes=G,r.attributesNum=z,r.index=B}function x(){let y=r.newAttributes;for(let E=0,X=y.length;E<X;E++)y[E]=0}function g(y){d(y,0)}function d(y,E){let X=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;X[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),G[y]!==E&&(i.vertexAttribDivisor(y,E),G[y]=E)}function b(){let y=r.newAttributes,E=r.enabledAttributes;for(let X=0,B=E.length;X<B;X++)E[X]!==y[X]&&(i.disableVertexAttribArray(X),E[X]=0)}function M(y,E,X,B,G,J,z){z===!0?i.vertexAttribIPointer(y,E,X,G,J):i.vertexAttribPointer(y,E,X,B,G,J)}function C(y,E,X,B){x();let G=B.attributes,J=X.getAttributes(),z=E.defaultAttributeValues;for(let $ in J){let k=J[$];if(k.location>=0){let st=G[$];if(st===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let ht=st.normalized,Ct=st.itemSize,Dt=t.get(st);if(Dt===void 0)continue;let jt=Dt.buffer,W=Dt.type,tt=Dt.bytesPerElement,xt=W===i.INT||W===i.UNSIGNED_INT||st.gpuType===xo;if(st.isInterleavedBufferAttribute){let rt=st.data,bt=rt.stride,Et=st.offset;if(rt.isInstancedInterleavedBuffer){for(let qt=0;qt<k.locationSize;qt++)d(k.location+qt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let qt=0;qt<k.locationSize;qt++)g(k.location+qt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let qt=0;qt<k.locationSize;qt++)M(k.location+qt,Ct/k.locationSize,W,ht,bt*tt,(Et+Ct/k.locationSize*qt)*tt,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)d(k.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<k.locationSize;rt++)M(k.location+rt,Ct/k.locationSize,W,ht,Ct*tt,Ct/k.locationSize*rt*tt,xt)}}else if(z!==void 0){let ht=z[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}b()}function D(){L();for(let y in n){let E=n[y];for(let X in E){let B=E[X];for(let G in B)h(B[G].object),delete B[G];delete E[X]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let X in E){let B=E[X];for(let G in B)h(B[G].object),delete B[G];delete E[X]}delete n[y.id]}function w(y){for(let E in n){let X=n[E];if(X[y.id]===void 0)continue;let B=X[y.id];for(let G in B)h(B[G].object),delete B[G];delete X[y.id]}}function L(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function jf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let m=0;m<f;m++)p+=h[m];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Xe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let L=w===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gn&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:D,maxSamples:S}}function $f(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,M=b*4,C=d.clippingState||null;l.value=C,C=h(m,u,M,p);for(let D=0;D!==M;++D)C[D]=e[D];d.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,C=p;M!==x;++M,C+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(g,C),g[C+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function tp(i){let t=new WeakMap;function e(a,o){return o===ca?a.mapping=Ri:o===ha&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ca||o===ha)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ga(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var js=class extends Zs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mi=4,Ul=[.125,.215,.35,.446,.526,.582],Jn=20,Xr=new js,Ll=new Nt,Yr=null,Kr=0,Zr=0,Jr=!1,Yn=(1+Math.sqrt(5))/2,Ii=1/Yn,Dl=[new U(-Yn,Ii,0),new U(Yn,Ii,0),new U(-Ii,0,Yn),new U(Ii,0,Yn),new U(0,Yn,-Ii),new U(0,Yn,Ii),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,Kr,Zr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:rs,format:Xe,colorSpace:Bi,depthBuffer:!1},s=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(r)),this._blurMaterial=np(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){let o=new ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Ll),h.toneMapping=Vn,h.autoClear=!1;let p=new qn({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),m=new Ce(new ei,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(Ll),x=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let M=this._cubeSize;Rs(s,b*M,d>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dl[(s-r-1)%Dl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ce(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Jn;g>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Jn}`);let d=[],b=0;for(let w=0;w<Jn;++w){let L=w/x,_=Math.exp(-L*L/2);d.push(_),w===0?b+=_:w<g&&(b+=2*_)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;let C=this._sizeLods[s],D=3*C*(s>M-Mi?s-M+Mi:0),S=4*(this._cubeSize-C);Rs(e,D,S,3*C,2*C),l.setRenderTarget(e),l.render(f,Xr)}};function ep(i){let t=[],e=[],n=[],s=i,r=i-Mi+1+Ul.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Mi?l=Ul[a-i+Mi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,x=3,g=2,d=1,b=new Float32Array(x*m*p),M=new Float32Array(g*m*p),C=new Float32Array(d*m*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,L=S>2?0:-1,_=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];b.set(_,x*m*S),M.set(u,g*m*S);let y=[S,S,S,S,S,S];C.set(y,d*m*S)}let D=new Ke;D.setAttribute("position",new Te(b,x)),D.setAttribute("uv",new Te(M,g)),D.setAttribute("faceIndex",new Te(C,d)),t.push(D),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ql(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function np(i,t,e){let n=new Float32Array(Jn),s=new U(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Nl(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Fl(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ip(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ca||l===ha,h=l===Ri||l===Vi;if(c||h){let f=t.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Qs(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Qs(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rp(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,d=x.length;g<d;g++)t.remove(x[g])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let m in p){let x=p[m];for(let g=0,d=x.length;g<d;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,m=f.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let M=0,C=b.length;M<C;M+=3){let D=b[M+0],S=b[M+1],w=b[M+2];u.push(D,S,S,w,w,D)}}else if(m!==void 0){let b=m.array;x=m.version;for(let M=0,C=b.length/3-1;M<C;M+=3){let D=M+0,S=M+1,w=M+2;u.push(D,S,S,w,w,D)}}else return;let g=new(Ic(u)?Ks:Ys)(u,1);g.version=x;let d=r.get(f);d&&t.remove(d),r.set(f,g)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ap(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*a,m),e.update(p,n,m))}function h(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function f(u,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,m);let d=0;for(let b=0;b<m;b++)d+=p[b]*x[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function op(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,t,e){let n=new WeakMap,s=new Jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let _=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let C=o.attributes.position.count*M,D=1;C>t.maxTextureSize&&(D=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let S=new Float32Array(C*D*4*f),w=new Gs(S,C,D,f);w.type=gn,w.needsUpdate=!0;let L=M*4;for(let y=0;y<f;y++){let E=g[y],X=d[y],B=b[y],G=C*D*4*y;for(let J=0;J<E.count;J++){let z=J*L;p===!0&&(s.fromBufferAttribute(E,J),S[G+z+0]=s.x,S[G+z+1]=s.y,S[G+z+2]=s.z,S[G+z+3]=0),m===!0&&(s.fromBufferAttribute(X,J),S[G+z+4]=s.x,S[G+z+5]=s.y,S[G+z+6]=s.z,S[G+z+7]=0),x===!0&&(s.fromBufferAttribute(B,J),S[G+z+8]=s.x,S[G+z+9]=s.y,S[G+z+10]=s.z,S[G+z+11]=B.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new Wt(C,D)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var $s=class extends Le{constructor(t,e,n,s,r,a,o,l,c,h=Si){if(h!==Si&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=$n),n===void 0&&h===Ui&&(n=Pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wc=new Le,Bl=new $s(1,1),Ec=new Gs,Tc=new za,Rc=new Js,Ol=[],kl=[],zl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function Oi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),fe(e,n)}}function gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),fe(e,n)}}function mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),fe(e,n)}}function Ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=_c,r=Bl):r=wc,e.setTexture2D(t||r,s)}function Sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tc,s)}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rc,s)}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ec,s)}function Tp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return gp;case 35676:return mp;case 5124:case 35670:return Ap;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Cp;case 36294:return _p;case 36295:return Ip;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Vp(i,t){let e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Pp(i,t){let e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Up(i,t){let e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){let e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){let e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qp(i,t){let e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Np(i,t){i.uniform1iv(this.addr,t)}function Fp(i,t){i.uniform2iv(this.addr,t)}function Bp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function zp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){let n=this.cache,s=t.length,r=hr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wc,r[a])}function Xp(i,t,e){let n=this.cache,s=t.length,r=hr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tc,r[a])}function Yp(i,t,e){let n=this.cache,s=t.length,r=hr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rc,r[a])}function Kp(i,t,e){let n=this.cache,s=t.length,r=hr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ec,r[a])}function Zp(i){switch(i){case 5126:return Rp;case 35664:return Vp;case 35665:return Pp;case 35666:return Up;case 35674:return Lp;case 35675:return Dp;case 35676:return qp;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Bp;case 35669:case 35673:return Op;case 5125:return kp;case 36294:return zp;case 36295:return Hp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Kp}}var Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}},Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}},Ya=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},jr=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){let n=i.name,s=n.length;for(jr.lastIndex=0;;){let r=jr.exec(n),a=jr.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wl(e,c===void 0?new Wa(o,i,t):new Xa(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ya(o),Wl(e,f)),e=f}}}var Ei=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var jp=37297,Qp=0;function $p(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yl=new Vt;function tg(i){Ht._getMatrix(Yl,Ht.workingColorSpace,i);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$p(i.getShaderSource(t),a)}else return s}function eg(i,t){let e=tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(i,t){let e;switch(t){case wh:e="Linear";break;case Eh:e="Reinhard";break;case Th:e="Cineon";break;case Ao:e="ACESFilmic";break;case Vh:e="AgX";break;case Ph:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vs=new U;function ig(){Ht.getLuminanceCoefficients(Vs);let i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function Zl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(og,cg)}var lg=new Map;function cg(i,t){let e=Ut[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Vi:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case bh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function mg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ag(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dg(e),c=fg(e),h=pg(e),f=gg(e),u=mg(e),p=sg(e),m=rg(r),x=s.createProgram(),g,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),d.length>0&&(d+=`
`)):(g=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),d=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Vn?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ka(a),a=Zl(a,e),a=Jl(a,e),o=Ka(o),o=Zl(o,e),o=Jl(o,e),a=jl(a),o=jl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=b+g+a,C=b+d+o,D=Xl(s,s.VERTEX_SHADER,M),S=Xl(s,s.FRAGMENT_SHADER,C);s.attachShader(x,D),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(E){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(S).trim(),J=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,S);else{let $=Kl(s,D,"vertex"),k=Kl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+X+`
`+$+`
`+k)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||G==="")&&(z=!1);z&&(E.diagnostics={runnable:J,programLog:X,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:d}})}s.deleteShader(D),s.deleteShader(S),L=new Ei(s,x),_=ag(s,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,jp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=S,this}var xg=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ja(t),e.set(t,n)),n}},Ja=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function vg(i,t,e,n,s,r,a){let o=new Xs,l=new Za,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,y,E,X,B){let G=X.fog,J=B.geometry,z=_.isMeshStandardMaterial?X.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||z),k=$&&$.mapping===lr?$.image.height:null,st=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ct=ht!==void 0?ht.length:0,Dt=0;J.morphAttributes.position!==void 0&&(Dt=1),J.morphAttributes.normal!==void 0&&(Dt=2),J.morphAttributes.color!==void 0&&(Dt=3);let jt,W,tt,xt;if(st){let Kt=Qe[st];jt=Kt.vertexShader,W=Kt.fragmentShader}else jt=_.vertexShader,W=_.fragmentShader,l.update(_),tt=l.getVertexShaderID(_),xt=l.getFragmentShaderID(_);let rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Et=B.isInstancedMesh===!0,qt=B.isBatchedMesh===!0,oe=!!_.map,kt=!!_.matcap,he=!!$,P=!!_.aoMap,De=!!_.lightMap,Ft=!!_.bumpMap,Bt=!!_.normalMap,It=!!_.displacementMap,ne=!!_.emissiveMap,_t=!!_.metalnessMap,I=!!_.roughnessMap,A=_.anisotropy>0,q=_.clearcoat>0,Y=_.dispersion>0,Z=_.iridescence>0,H=_.sheen>0,vt=_.transmission>0,at=A&&!!_.anisotropyMap,ut=q&&!!_.clearcoatMap,zt=q&&!!_.clearcoatNormalMap,j=q&&!!_.clearcoatRoughnessMap,dt=Z&&!!_.iridescenceMap,Mt=Z&&!!_.iridescenceThicknessMap,St=H&&!!_.sheenColorMap,ft=H&&!!_.sheenRoughnessMap,Ot=!!_.specularMap,Pt=!!_.specularColorMap,$t=!!_.specularIntensityMap,T=vt&&!!_.transmissionMap,it=vt&&!!_.thicknessMap,O=!!_.gradientMap,K=!!_.alphaMap,ct=_.alphaTest>0,ot=!!_.alphaHash,Tt=!!_.extensions,ce=Vn;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let me={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:jt,fragmentShader:W,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:qt,batchingColor:qt&&B._colorsTexture!==null,instancing:Et,instancingColor:Et&&B.instanceColor!==null,instancingMorph:Et&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bi,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:kt,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:De,bumpMap:Ft,normalMap:Bt,displacementMap:u&&It,emissiveMap:ne,normalMapObjectSpace:Bt&&_.normalMapType===qh,normalMapTangentSpace:Bt&&_.normalMapType===Cc,metalnessMap:_t,roughnessMap:I,anisotropy:A,anisotropyMap:at,clearcoat:q,clearcoatMap:ut,clearcoatNormalMap:zt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:H,sheenColorMap:St,sheenRoughnessMap:ft,specularMap:Ot,specularColorMap:Pt,specularIntensityMap:$t,transmission:vt,transmissionMap:T,thicknessMap:it,gradientMap:O,opaque:_.transparent===!1&&_.blending===bi&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:ot,combine:_.combine,mapUv:oe&&x(_.map.channel),aoMapUv:P&&x(_.aoMap.channel),lightMapUv:De&&x(_.lightMap.channel),bumpMapUv:Ft&&x(_.bumpMap.channel),normalMapUv:Bt&&x(_.normalMap.channel),displacementMapUv:It&&x(_.displacementMap.channel),emissiveMapUv:ne&&x(_.emissiveMap.channel),metalnessMapUv:_t&&x(_.metalnessMap.channel),roughnessMapUv:I&&x(_.roughnessMap.channel),anisotropyMapUv:at&&x(_.anisotropyMap.channel),clearcoatMapUv:ut&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(_.sheenRoughnessMap.channel),specularMapUv:Ot&&x(_.specularMap.channel),specularColorMapUv:Pt&&x(_.specularColorMap.channel),specularIntensityMapUv:$t&&x(_.specularIntensityMap.channel),transmissionMapUv:T&&x(_.transmissionMap.channel),thicknessMapUv:it&&x(_.thicknessMap.channel),alphaMapUv:K&&x(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Bt||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(oe||K),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&Ht.getTransfer(_.map.colorSpace)===Zt,decodeVideoTextureEmissive:ne&&_.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(_.emissiveMap.colorSpace)===Zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Ee,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)y.push(E),y.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(b(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function b(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function C(_){let y=m[_.type],E;if(y){let X=Qe[y];E=lu.clone(X.uniforms)}else E=_.uniforms;return E}function D(_,y){let E;for(let X=0,B=h.length;X<B;X++){let G=h[X];if(G.cacheKey===y){E=G,++E.usedTimes;break}}return E===void 0&&(E=new Ag(i,y,_,r),h.push(E)),E}function S(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function w(_){l.remove(_)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:C,acquireProgram:D,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:L}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,p,m,x,g){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=x,d.group=g),t++,d}function o(f,u,p,m,x,g){let d=a(f,u,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,u,p,m,x,g){let d=a(f,u,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||Cg),n.length>1&&n.sort(u||$l),s.length>1&&s.sort(u||$l)}function h(){for(let f=t,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function _g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new tc,i.set(n,[a])):s>=r.length?(a=new tc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Nt};break;case"SpotLight":e={position:new U,direction:new U,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var bg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){let t=new Ig,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new le,a=new le;function o(c){let h=0,f=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,b=0,M=0,C=0,D=0,S=0,w=0;c.sort(Sg);for(let _=0,y=c.length;_<y;_++){let E=c[_],X=E.color,B=E.intensity,G=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=X.r*B,f+=X.g*B,u+=X.b*B;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],B);w++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,k=e.get(E);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=E.shadow.matrix,b++}n.directional[p]=z,p++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(X).multiplyScalar(B),z.distance=G,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[x]=z;let $=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,$.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[x]=$.matrix,E.castShadow){let k=e.get(E);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=J,C++}x++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(X).multiplyScalar(B),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let $=E.shadow,k=e.get(E);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=E.shadow.matrix,M++}n.point[m]=z,m++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(B),z.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[d]=z,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==D||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+D-S,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,L.directionalLength=p,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=D,L.numLightProbes=w,n.version=bg++)}function l(c,h){let f=0,u=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let M=c[d];if(M.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),f++}else if(M.isSpotLight){let C=n.spot[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let C=n.rectArea[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let C=n.point[u];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let C=n.hemi[x];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function ec(i){let t=new wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ec(i),t.set(s,[o])):r>=a.length?(o=new ec(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ja=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qa=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vg(i,t,e){let n=new ts,s=new Wt,r=new Wt,a=new Jt,o=new ja({depthPacking:Dh}),l=new Qa,c={},h=e.maxTextureSize,f={[Pn]:Ee,[Ee]:Pn,[pn]:pn},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Tg,fragmentShader:Rg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ke;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let d=this.type;this.render=function(S,w,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Rn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let B=d!==dn&&this.type===dn,G=d===dn&&this.type!==dn;for(let J=0,z=S.length;J<z;J++){let $=S[J],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||G===!0){let Ct=this.type!==dn?{minFilter:Ye,magFilter:Ye}:{};k.map!==null&&k.map.dispose(),k.map=new vn(s.x,s.y,Ct),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ht=k.getViewportCount();for(let Ct=0;Ct<ht;Ct++){let Dt=k.getViewport(Ct);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),X.viewport(a),k.updateMatrices($,Ct),n=k.getFrustum(),C(w,L,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===dn&&b(k,L),k.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(_,y,E)};function b(S,w){let L=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new vn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,L,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,L,p,x,null)}function M(S,w,L,_){let y=null,E=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let X=y.uuid,B=w.uuid,G=c[X];G===void 0&&(G={},c[X]=G);let J=G[B];J===void 0&&(J=y.clone(),G[B]=J,w.addEventListener("dispose",D)),y=J}if(y.visible=w.visible,y.wireframe=w.wireframe,_===dn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let X=i.properties.get(y);X.light=L}return y}function C(S,w,L,_,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let B=t.update(S),G=S.material;if(Array.isArray(G)){let J=B.groups;for(let z=0,$=J.length;z<$;z++){let k=J[z],st=G[k.materialIndex];if(st&&st.visible){let ht=M(S,st,_,y);S.onBeforeShadow(i,S,w,L,B,ht,k),i.renderBufferDirect(L,null,B,ht,S,k),S.onAfterShadow(i,S,w,L,B,ht,k)}}}else if(G.visible){let J=M(S,G,_,y);S.onBeforeShadow(i,S,w,L,B,J,null),i.renderBufferDirect(L,null,B,J,S,null),S.onAfterShadow(i,S,w,L,B,J,null)}}let X=S.children;for(let B=0,G=X.length;B<G;B++)C(X[B],w,L,_,y)}function D(S){S.target.removeEventListener("dispose",D);for(let L in c){let _=c[L],y=S.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Pg={[na]:ia,[sa]:oa,[ra]:la,[Ti]:aa,[ia]:na,[oa]:sa,[la]:ra,[aa]:Ti};function Ug(i,t){function e(){let T=!1,it=new Jt,O=null,K=new Jt(0,0,0,0);return{setMask:function(ct){O!==ct&&!T&&(i.colorMask(ct,ct,ct,ct),O=ct)},setLocked:function(ct){T=ct},setClear:function(ct,ot,Tt,ce,me){me===!0&&(ct*=ce,ot*=ce,Tt*=ce),it.set(ct,ot,Tt,ce),K.equals(it)===!1&&(i.clearColor(ct,ot,Tt,ce),K.copy(it))},reset:function(){T=!1,O=null,K.set(-1,0,0,0)}}}function n(){let T=!1,it=!1,O=null,K=null,ct=null;return{setReversed:function(ot){if(it!==ot){let Tt=t.get("EXT_clip_control");it?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ot){O!==ot&&!T&&(i.depthMask(ot),O=ot)},setFunc:function(ot){if(it&&(ot=Pg[ot]),K!==ot){switch(ot){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){T=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){T=!1,O=null,K=null,ct=null,it=!1}}}function s(){let T=!1,it=null,O=null,K=null,ct=null,ot=null,Tt=null,ce=null,me=null;return{setTest:function(Kt){T||(Kt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!T&&(i.stencilMask(Kt),it=Kt)},setFunc:function(Kt,ke,nn){(O!==Kt||K!==ke||ct!==nn)&&(i.stencilFunc(Kt,ke,nn),O=Kt,K=ke,ct=nn)},setOp:function(Kt,ke,nn){(ot!==Kt||Tt!==ke||ce!==nn)&&(i.stencilOp(Kt,ke,nn),ot=Kt,Tt=ke,ce=nn)},setLocked:function(Kt){T=Kt},setClear:function(Kt){me!==Kt&&(i.clearStencil(Kt),me=Kt)},reset:function(){T=!1,it=null,O=null,K=null,ct=null,ot=null,Tt=null,ce=null,me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,d=null,b=null,M=null,C=null,D=null,S=null,w=new Nt(0,0,0),L=0,_=!1,y=null,E=null,X=null,B=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=$>=2);let st=null,ht={},Ct=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),jt=new Jt().fromArray(Ct),W=new Jt().fromArray(Dt);function tt(T,it,O,K){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(T,ot),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<O;Tt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let xt={};xt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ti),Ft(!1),Bt(il),rt(i.CULL_FACE),P(Rn);function rt(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function bt(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Et(T,it){return f[T]!==it?(i.bindFramebuffer(T,it),f[T]=it,T===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),T===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function qt(T,it){let O=p,K=!1;if(T){O=u.get(it),O===void 0&&(O=[],u.set(it,O));let ct=T.textures;if(O.length!==ct.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Tt=ct.length;ot<Tt;ot++)O[ot]=i.COLOR_ATTACHMENT0+ot;O.length=ct.length,K=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,K=!0);K&&i.drawBuffers(O)}function oe(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let kt={[Kn]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};kt[hh]=i.MIN,kt[uh]=i.MAX;let he={[dh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[mh]:i.DST_ALPHA,[gh]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[Ih]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(T,it,O,K,ct,ot,Tt,ce,me,Kt){if(T===Rn){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),T!==oh){if(T!==g||Kt!==_){if((d!==Kn||C!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,C=Kn),Kt)switch(T){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}b=null,M=null,D=null,S=null,w.set(0,0,0),L=0,g=T,_=Kt}return}ct=ct||it,ot=ot||O,Tt=Tt||K,(it!==d||ct!==C)&&(i.blendEquationSeparate(kt[it],kt[ct]),d=it,C=ct),(O!==b||K!==M||ot!==D||Tt!==S)&&(i.blendFuncSeparate(he[O],he[K],he[ot],he[Tt]),b=O,M=K,D=ot,S=Tt),(ce.equals(w)===!1||me!==L)&&(i.blendColor(ce.r,ce.g,ce.b,me),w.copy(ce),L=me),g=T,_=!1}function De(T,it){T.side===pn?bt(i.CULL_FACE):rt(i.CULL_FACE);let O=T.side===Ee;it&&(O=!O),Ft(O),T.blending===bi&&T.transparent===!1?P(Rn):P(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let K=T.stencilWrite;o.setTest(K),K&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ne(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(T){y!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),y=T)}function Bt(T){T!==sh?(rt(i.CULL_FACE),T!==E&&(T===il?i.cullFace(i.BACK):T===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),E=T}function It(T){T!==X&&(z&&i.lineWidth(T),X=T)}function ne(T,it,O){T?(rt(i.POLYGON_OFFSET_FILL),(B!==it||G!==O)&&(i.polygonOffset(it,O),B=it,G=O)):bt(i.POLYGON_OFFSET_FILL)}function _t(T){T?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function I(T){T===void 0&&(T=i.TEXTURE0+J-1),st!==T&&(i.activeTexture(T),st=T)}function A(T,it,O){O===void 0&&(st===null?O=i.TEXTURE0+J-1:O=st);let K=ht[O];K===void 0&&(K={type:void 0,texture:void 0},ht[O]=K),(K.type!==T||K.texture!==it)&&(st!==O&&(i.activeTexture(O),st=O),i.bindTexture(T,it||xt[T]),K.type=T,K.texture=it)}function q(){let T=ht[st];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function St(T){jt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),jt.copy(T))}function ft(T){W.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),W.copy(T))}function Ot(T,it){let O=c.get(it);O===void 0&&(O=new WeakMap,c.set(it,O));let K=O.get(T);K===void 0&&(K=i.getUniformBlockIndex(it,T.name),O.set(T,K))}function Pt(T,it){let K=c.get(it).get(T);l.get(it)!==K&&(i.uniformBlockBinding(it,K,T.__bindingPointIndex),l.set(it,K))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,d=null,b=null,M=null,C=null,D=null,S=null,w=new Nt(0,0,0),L=0,_=!1,y=null,E=null,X=null,B=null,G=null,jt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Et,drawBuffers:qt,useProgram:oe,setBlending:P,setMaterial:De,setFlipSided:Ft,setCullFace:Bt,setLineWidth:It,setPolygonOffset:ne,setScissorTest:_t,activeTexture:I,bindTexture:A,unbindTexture:q,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:dt,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Pt,texStorage2D:zt,texStorage3D:j,texSubImage2D:H,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:St,viewport:ft,reset:$t}}function nc(i,t,e,n){let s=Lg(n);switch(e){case pc:return i*t;case mc:return i*t;case Ac:return i*t*2;case xc:return i*t/s.components*s.byteLength;case Co:return i*t/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case _o:return i*t*2/s.components*s.byteLength;case gc:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case Io:return i*t*4/s.components*s.byteLength;case Ds:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case da:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bs:case Ua:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yc:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(i){switch(i){case xn:case uc:return{byteLength:1,components:1};case $i:case dc:case rs:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case $n:case xo:case gn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return p?new OffscreenCanvas(I,A):zs("canvas")}function x(I,A,q){let Y=1,Z=_t(I);if((Z.width>q||Z.height>q)&&(Y=q/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let H=Math.floor(Y*Z.width),vt=Math.floor(Y*Z.height);f===void 0&&(f=m(H,vt));let at=A?m(H,vt):f;return at.width=H,at.height=vt,at.getContext("2d").drawImage(I,0,0,H,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+vt+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,q,Y,Z=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let H=A;if(A===i.RED&&(q===i.FLOAT&&(H=i.R32F),q===i.HALF_FLOAT&&(H=i.R16F),q===i.UNSIGNED_BYTE&&(H=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(H=i.R8UI),q===i.UNSIGNED_SHORT&&(H=i.R16UI),q===i.UNSIGNED_INT&&(H=i.R32UI),q===i.BYTE&&(H=i.R8I),q===i.SHORT&&(H=i.R16I),q===i.INT&&(H=i.R32I)),A===i.RG&&(q===i.FLOAT&&(H=i.RG32F),q===i.HALF_FLOAT&&(H=i.RG16F),q===i.UNSIGNED_BYTE&&(H=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(H=i.RG8UI),q===i.UNSIGNED_SHORT&&(H=i.RG16UI),q===i.UNSIGNED_INT&&(H=i.RG32UI),q===i.BYTE&&(H=i.RG8I),q===i.SHORT&&(H=i.RG16I),q===i.INT&&(H=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(H=i.RGB8UI),q===i.UNSIGNED_SHORT&&(H=i.RGB16UI),q===i.UNSIGNED_INT&&(H=i.RGB32UI),q===i.BYTE&&(H=i.RGB8I),q===i.SHORT&&(H=i.RGB16I),q===i.INT&&(H=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),q===i.UNSIGNED_INT&&(H=i.RGBA32UI),q===i.BYTE&&(H=i.RGBA8I),q===i.SHORT&&(H=i.RGBA16I),q===i.INT&&(H=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),A===i.RGBA){let vt=Z?cr:Ht.getTransfer(Y);q===i.FLOAT&&(H=i.RGBA32F),q===i.HALF_FLOAT&&(H=i.RGBA16F),q===i.UNSIGNED_BYTE&&(H=vt===Zt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function C(I,A){let q;return I?A===null||A===$n||A===Pi?q=i.DEPTH24_STENCIL8:A===gn?q=i.DEPTH32F_STENCIL8:A===$i&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$n||A===Pi?q=i.DEPTH_COMPONENT24:A===gn?q=i.DEPTH_COMPONENT32F:A===$i&&(q=i.DEPTH_COMPONENT16),q}function D(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ye&&I.minFilter!==$e?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&h.delete(A)}function w(I){let A=I.target;A.removeEventListener("dispose",w),y(A)}function L(I){let A=n.get(I);if(A.__webglInit===void 0)return;let q=I.source,Y=u.get(q);if(Y){let Z=Y[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&_(I),Object.keys(Y).length===0&&u.delete(q)}n.remove(I)}function _(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let q=I.source,Y=u.get(q);delete Y[A.__cacheKey],a.memory.textures--}function y(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let Z=0;Z<A.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=I.textures;for(let Y=0,Z=q.length;Y<Z;Y++){let H=n.get(q[Y]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(I)}let E=0;function X(){E=0}function B(){let I=E;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function G(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function J(I,A){let q=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,I,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function z(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){W(q,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function $(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){W(q,I,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function k(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){tt(q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let st={[Qi]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},ht={[Ye]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[_r]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Ct={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[Fh]:i.LESS,[_c]:i.LEQUAL,[Bh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[kh]:i.NOTEQUAL};function Dt(I,A){if(A.type===gn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===$e||A.magFilter===_r||A.magFilter===us||A.magFilter===Qn||A.minFilter===$e||A.minFilter===_r||A.minFilter===us||A.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ht[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ht[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ye||A.minFilter!==us&&A.minFilter!==Qn||A.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function jt(I,A){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));let H=G(A);if(H!==I.__cacheKey){Z[H]===void 0&&(Z[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Z[H].usedTimes++;let vt=Z[I.__cacheKey];vt!==void 0&&(Z[I.__cacheKey].usedTimes--,vt.usedTimes===0&&_(A)),I.__cacheKey=H,I.__webglTexture=Z[H].texture}return q}function W(I,A,q){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let Z=jt(I,A),H=A.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+q);let vt=n.get(H);if(H.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+q);let at=Ht.getPrimaries(Ht.workingColorSpace),ut=A.colorSpace===En?null:Ht.getPrimaries(A.colorSpace),zt=A.colorSpace===En||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let j=x(A.image,!1,s.maxTextureSize);j=ne(A,j);let dt=r.convert(A.format,A.colorSpace),Mt=r.convert(A.type),St=M(A.internalFormat,dt,Mt,A.colorSpace,A.isVideoTexture);Dt(Y,A);let ft,Ot=A.mipmaps,Pt=A.isVideoTexture!==!0,$t=vt.__version===void 0||Z===!0,T=H.dataReady,it=D(A,j);if(A.isDepthTexture)St=C(A.format===Ui,A.type),$t&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,St,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,St,j.width,j.height,0,dt,Mt,null));else if(A.isDataTexture)if(Ot.length>0){Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,it,St,Ot[0].width,Ot[0].height);for(let O=0,K=Ot.length;O<K;O++)ft=Ot[O],Pt?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,dt,Mt,ft.data);A.generateMipmaps=!1}else Pt?($t&&e.texStorage2D(i.TEXTURE_2D,it,St,j.width,j.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,dt,Mt,j.data)):e.texImage2D(i.TEXTURE_2D,0,St,j.width,j.height,0,dt,Mt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,St,Ot[0].width,Ot[0].height,j.depth);for(let O=0,K=Ot.length;O<K;O++)if(ft=Ot[O],A.format!==Xe)if(dt!==null)if(Pt){if(T)if(A.layerUpdates.size>0){let ct=nc(ft.width,ft.height,A.format,A.type);for(let ot of A.layerUpdates){let Tt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ot,ft.width,ft.height,1,dt,Tt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,j.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,St,ft.width,ft.height,j.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,j.depth,dt,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,St,ft.width,ft.height,j.depth,0,dt,Mt,ft.data)}else{Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,it,St,Ot[0].width,Ot[0].height);for(let O=0,K=Ot.length;O<K;O++)ft=Ot[O],A.format!==Xe?dt!==null?Pt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,dt,Mt,ft.data)}else if(A.isDataArrayTexture)if(Pt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,St,j.width,j.height,j.depth),T)if(A.layerUpdates.size>0){let O=nc(j.width,j.height,A.format,A.type);for(let K of A.layerUpdates){let ct=j.data.subarray(K*O/j.data.BYTES_PER_ELEMENT,(K+1)*O/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,dt,Mt,ct)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,Mt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,j.width,j.height,j.depth,0,dt,Mt,j.data);else if(A.isData3DTexture)Pt?($t&&e.texStorage3D(i.TEXTURE_3D,it,St,j.width,j.height,j.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,Mt,j.data)):e.texImage3D(i.TEXTURE_3D,0,St,j.width,j.height,j.depth,0,dt,Mt,j.data);else if(A.isFramebufferTexture){if($t)if(Pt)e.texStorage2D(i.TEXTURE_2D,it,St,j.width,j.height);else{let O=j.width,K=j.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,St,O,K,0,dt,Mt,null),O>>=1,K>>=1}}else if(Ot.length>0){if(Pt&&$t){let O=_t(Ot[0]);e.texStorage2D(i.TEXTURE_2D,it,St,O.width,O.height)}for(let O=0,K=Ot.length;O<K;O++)ft=Ot[O],Pt?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,dt,Mt,ft):e.texImage2D(i.TEXTURE_2D,O,St,dt,Mt,ft);A.generateMipmaps=!1}else if(Pt){if($t){let O=_t(j);e.texStorage2D(i.TEXTURE_2D,it,St,O.width,O.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Mt,j)}else e.texImage2D(i.TEXTURE_2D,0,St,dt,Mt,j);g(A)&&d(Y),vt.__version=H.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function tt(I,A,q){if(A.image.length!==6)return;let Y=jt(I,A),Z=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let H=n.get(Z);if(Z.version!==H.__version||Y===!0){e.activeTexture(i.TEXTURE0+q);let vt=Ht.getPrimaries(Ht.workingColorSpace),at=A.colorSpace===En?null:Ht.getPrimaries(A.colorSpace),ut=A.colorSpace===En||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let zt=A.isCompressedTexture||A.image[0].isCompressedTexture,j=A.image[0]&&A.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!zt&&!j?dt[K]=x(A.image[K],!0,s.maxCubemapSize):dt[K]=j?A.image[K].image:A.image[K],dt[K]=ne(A,dt[K]);let Mt=dt[0],St=r.convert(A.format,A.colorSpace),ft=r.convert(A.type),Ot=M(A.internalFormat,St,ft,A.colorSpace),Pt=A.isVideoTexture!==!0,$t=H.__version===void 0||Y===!0,T=Z.dataReady,it=D(A,Mt);Dt(i.TEXTURE_CUBE_MAP,A);let O;if(zt){Pt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,Mt.width,Mt.height);for(let K=0;K<6;K++){O=dt[K].mipmaps;for(let ct=0;ct<O.length;ct++){let ot=O[ct];A.format!==Xe?St!==null?Pt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,St,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Ot,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,St,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Ot,ot.width,ot.height,0,St,ft,ot.data)}}}else{if(O=A.mipmaps,Pt&&$t){O.length>0&&it++;let K=_t(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(j){Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,St,ft,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,dt[K].width,dt[K].height,0,St,ft,dt[K].data);for(let ct=0;ct<O.length;ct++){let Tt=O[ct].image[K].image;Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Tt.width,Tt.height,St,ft,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Ot,Tt.width,Tt.height,0,St,ft,Tt.data)}}else{Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,ft,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,St,ft,dt[K]);for(let ct=0;ct<O.length;ct++){let ot=O[ct];Pt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,St,ft,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Ot,St,ft,ot.image[K])}}}g(A)&&d(i.TEXTURE_CUBE_MAP),H.__version=Z.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function xt(I,A,q,Y,Z,H){let vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=M(q.internalFormat,vt,at,q.colorSpace),zt=n.get(A),j=n.get(q);if(j.__renderTarget=A,!zt.__hasExternalTextures){let dt=Math.max(1,A.width>>H),Mt=Math.max(1,A.height>>H);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,H,ut,dt,Mt,A.depth,0,vt,at,null):e.texImage2D(Z,H,ut,dt,Mt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,j.__webglTexture,0,Ft(A)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,j.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(I,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let Y=A.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,H=C(A.stencilBuffer,Z),vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ft(A);Bt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,H,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,H,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,H,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{let Y=A.textures;for(let Z=0;Z<Y.length;Z++){let H=Y[Z],vt=r.convert(H.format,H.colorSpace),at=r.convert(H.type),ut=M(H.internalFormat,vt,at,H.colorSpace),zt=Ft(A);q&&Bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ut,A.width,A.height):Bt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);let Z=Y.__webglTexture,H=Ft(A);if(A.depthTexture.format===Si)Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(A.depthTexture.format===Ui)Bt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Et(I){let A=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=Y}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,I)}else if(q){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(A.__webglDepthbuffer[Y],I,!1);else{let Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),rt(A.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(I,A,q){let Y=n.get(I);A!==void 0&&xt(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Et(I)}function oe(I){let A=I.texture,q=n.get(I),Y=n.get(A);I.addEventListener("dispose",w);let Z=I.textures,H=I.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,a.memory.textures++),H){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let ut=0;ut<A.mipmaps.length;ut++)q.__webglFramebuffer[at][ut]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<A.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=Z.length;at<ut;at++){let zt=n.get(Z[at]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Bt(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){let ut=Z[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let zt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),dt=M(ut.internalFormat,zt,j,ut.colorSpace,I.isXRRenderTarget===!0),Mt=Ft(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,dt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,A);for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)xt(q.__webglFramebuffer[at][ut],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else xt(q.__webglFramebuffer[at],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(A)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=Z.length;at<ut;at++){let zt=Z[at],j=n.get(zt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Dt(i.TEXTURE_2D,zt),xt(q.__webglFramebuffer,I,zt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Dt(at,A),A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)xt(q.__webglFramebuffer[ut],I,A,i.COLOR_ATTACHMENT0,at,ut);else xt(q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,at,0);g(A)&&d(at),e.unbindTexture()}I.depthBuffer&&Et(I)}function kt(I){let A=I.textures;for(let q=0,Y=A.length;q<Y;q++){let Z=A[q];if(g(Z)){let H=b(I),vt=n.get(Z).__webglTexture;e.bindTexture(H,vt),d(H),e.unbindTexture()}}}let he=[],P=[];function De(I){if(I.samples>0){if(Bt(I)===!1){let A=I.textures,q=I.width,Y=I.height,Z=i.COLOR_BUFFER_BIT,H=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),at=A.length>1;if(at)for(let ut=0;ut<A.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<A.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let zt=n.get(A[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,q,Y,0,0,q,Y,Z,i.NEAREST),l===!0&&(he.length=0,P.length=0,he.push(i.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(H),P.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<A.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let zt=n.get(A[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ft(I){return Math.min(s.maxSamples,I.samples)}function Bt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ne(I,A){let q=I.colorSpace,Y=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Bi&&q!==En&&(Ht.getTransfer(q)===Zt?(Y!==Xe||Z!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function _t(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=qt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Bt}function qg(i,t){function e(n,s=En){let r,a=Ht.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===gc)return i.RGB;if(n===Xe)return i.RGBA;if(n===mc)return i.LUMINANCE;if(n===Ac)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===Io)return i.RGBA_INTEGER;if(n===Ds||n===qs||n===Ns||n===Fs)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===Aa||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===Aa)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===ya||n===Ca||n===_a||n===Ia||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Ra||n===Va||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===Ua||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bs)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===Da||n===qa||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $a=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tn=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,to=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:Fg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eo=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,m=null,x=new to,g=e.getContextAttributes(),d=null,b=null,M=[],C=[],D=new Wt,S=null,w=new ye;w.viewport=new Jt;let L=new ye;L.viewport=new Jt;let _=[w,L],y=new $a,E=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=M[W];return tt===void 0&&(tt=new ji,M[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=M[W];return tt===void 0&&(tt=new ji,M[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=M[W];return tt===void 0&&(tt=new ji,M[W]=tt),tt.getHandSpace()};function B(W){let tt=C.indexOf(W.inputSource);if(tt===-1)return;let xt=M[tt];xt!==void 0&&(xt.update(W.inputSource,W.frame,c||a),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let W=0;W<M.length;W++){let tt=C[W];tt!==null&&(C[W]=null,M[W].disconnect(tt))}E=null,X=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new vn(p.framebufferWidth,p.framebufferHeight,{format:Xe,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Ui:Si,xt=g.stencil?Pi:$n);let bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new vn(u.textureWidth,u.textureHeight,{format:Xe,type:xn,depthTexture:new $s(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(W){for(let tt=0;tt<W.removed.length;tt++){let xt=W.removed[tt],rt=C.indexOf(xt);rt>=0&&(C[rt]=null,M[rt].disconnect(xt))}for(let tt=0;tt<W.added.length;tt++){let xt=W.added[tt],rt=C.indexOf(xt);if(rt===-1){for(let Et=0;Et<M.length;Et++)if(Et>=C.length){C.push(xt),rt=Et;break}else if(C[Et]===null){C[Et]=xt,rt=Et;break}if(rt===-1)break}let bt=M[rt];bt&&bt.connect(xt)}}let z=new U,$=new U;function k(W,tt,xt){z.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);let rt=z.distanceTo($),bt=tt.projectionMatrix.elements,Et=xt.projectionMatrix.elements,qt=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],he=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],De=(Et[8]+1)/Et[0],Ft=qt*P,Bt=qt*De,It=rt/(-P+De),ne=It*-P;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(It),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),bt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let _t=qt+It,I=oe+It,A=Ft-ne,q=Bt+(rt-ne),Y=kt*oe/I*_t,Z=he*oe/I*_t;W.projectionMatrix.makePerspective(A,q,Y,Z,_t,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,xt=W.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),y.near=L.near=w.near=tt,y.far=L.far=w.far=xt,(E!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,X=y.far),w.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,y.layers.mask=w.layers.mask|L.layers.mask;let rt=W.parent,bt=y.cameras;st(y,rt);for(let Et=0;Et<bt.length;Et++)st(bt[Et],rt);bt.length===2?k(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),ht(W,y,rt)};function ht(W,tt,xt){xt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ba*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ct=null;function Dt(W,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Et=0;Et<xt.length;Et++){let qt=xt[Et],oe=null;if(p!==null)oe=p.getViewport(qt);else{let he=f.getViewSubImage(u,qt);oe=he.viewport,Et===0&&(t.setRenderTargetTextures(b,he.colorTexture,u.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let kt=_[Et];kt===void 0&&(kt=new ye,kt.layers.enable(Et),kt.viewport=new Jt,_[Et]=kt),kt.matrix.fromArray(qt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(qt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),Et===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(kt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Et=f.getDepthInformation(xt[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,s.renderState)}}for(let xt=0;xt<M.length;xt++){let rt=C[xt],bt=M[xt];rt!==null&&bt!==void 0&&bt.update(rt,tt,c||a)}Ct&&Ct(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let jt=new Sc;jt.setAnimationLoop(Dt),this.setAnimationLoop=function(W){Ct=W},this.dispose=function(){}}},Xn=new tn,Og=new le;function kg(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,bc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,M,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,C)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,b,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ee&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ee&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let b=t.get(d),M=b.envMap,C=b.envMapRotation;M&&(g.envMap.value=M,Xn.copy(C),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Xn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=M*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let b=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let C=M.program;n.uniformBlockBinding(b,C)}function c(b,M){let C=s[b.id];C===void 0&&(m(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",g));let D=M.program;n.updateUBOMapping(b,D);let S=t.render.frame;r[b.id]!==S&&(u(b),r[b.id]=S)}function h(b){let M=f();b.__bindingPointIndex=M;let C=i.createBuffer(),D=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],C=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,w=C.length;S<w;S++){let L=Array.isArray(C[S])?C[S]:[C[S]];for(let _=0,y=L.length;_<y;_++){let E=L[_];if(p(E,S,_,D)===!0){let X=E.__offset,B=Array.isArray(E.value)?E.value:[E.value],G=0;for(let J=0;J<B.length;J++){let z=B[J],$=x(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,X+G,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,C,D){let S=b.value,w=M+"_"+C;if(D[w]===void 0)return typeof S=="number"||typeof S=="boolean"?D[w]=S:D[w]=S.clone(),!0;{let L=D[w];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return D[w]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let M=b.uniforms,C=0,D=16;for(let w=0,L=M.length;w<L;w++){let _=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,E=_.length;y<E;y++){let X=_[y],B=Array.isArray(X.value)?X.value:[X.value];for(let G=0,J=B.length;G<J;G++){let z=B[G],$=x(z),k=C%D,st=k%$.boundary,ht=k+st;C+=st,ht!==0&&D-ht<$.storage&&(C+=D-ht),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=$.storage}}}let S=C%D;return S>0&&(C+=D-S),b.__size=C,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){let M=b.target;M.removeEventListener("dispose",g);let C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var tr=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Vn,this.toneMappingExposure=1;let C=this,D=!1,S=0,w=0,L=null,_=-1,y=null,E=new Jt,X=new Jt,B=null,G=new Nt(0),J=0,z=e.width,$=e.height,k=1,st=null,ht=null,Ct=new Jt(0,0,z,$),Dt=new Jt(0,0,z,$),jt=!1,W=new ts,tt=!1,xt=!1,rt=new le,bt=new le,Et=new U,qt=new Jt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function he(){return L===null?k:1}let P=n;function De(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),P===null){let R="webgl2";if(P=De(R,v),P===null)throw De(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ft,Bt,It,ne,_t,I,A,q,Y,Z,H,vt,at,ut,zt,j,dt,Mt,St,ft,Ot,Pt,$t,T;function it(){Ft=new sp(P),Ft.init(),Pt=new qg(P,Ft),Bt=new Qf(P,Ft,t,Pt),It=new Ug(P,Ft),Bt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),ne=new op(P),_t=new yg,I=new Dg(P,Ft,It,_t,Bt,Pt,ne),A=new tp(C),q=new ip(C),Y=new fu(P),$t=new Jf(P,Y),Z=new rp(P,Y,ne,$t),H=new cp(P,Z,Y,ne),St=new lp(P,Bt,I),j=new $f(_t),vt=new vg(C,A,q,Ft,Bt,$t,j),at=new kg(C,_t),ut=new _g,zt=new Eg(Ft),Mt=new Zf(C,A,q,It,H,p,l),dt=new Vg(C,H,Bt),T=new zg(P,ne,Bt,It),ft=new jf(P,Ft,ne),Ot=new ap(P,Ft,ne),ne.programs=vt.programs,C.capabilities=Bt,C.extensions=Ft,C.properties=_t,C.renderLists=ut,C.shadowMap=dt,C.state=It,C.info=ne}it();let O=new eo(C,P);this.xr=O,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(z,$,!1))},this.getSize=function(v){return v.set(z,$)},this.setSize=function(v,R,N=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=v,$=R,e.width=Math.floor(v*k),e.height=Math.floor(R*k),N===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(z*k,$*k).floor()},this.setDrawingBufferSize=function(v,R,N){z=v,$=R,k=N,e.width=Math.floor(v*N),e.height=Math.floor(R*N),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(Ct)},this.setViewport=function(v,R,N,F){v.isVector4?Ct.set(v.x,v.y,v.z,v.w):Ct.set(v,R,N,F),It.viewport(E.copy(Ct).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Dt)},this.setScissor=function(v,R,N,F){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,R,N,F),It.scissor(X.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){It.setScissorTest(jt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(v=!0,R=!0,N=!0){let F=0;if(v){let V=!1;if(L!==null){let Q=L.texture.format;V=Q===Io||Q===_o||Q===Co}if(V){let Q=L.texture.type,lt=Q===xn||Q===$n||Q===$i||Q===Pi||Q===vo||Q===yo,pt=Mt.getClearColor(),gt=Mt.getClearAlpha(),wt=pt.r,Rt=pt.g,mt=pt.b;lt?(m[0]=wt,m[1]=Rt,m[2]=mt,m[3]=gt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=wt,x[1]=Rt,x[2]=mt,x[3]=gt,P.clearBufferiv(P.COLOR,0,x))}else F|=P.COLOR_BUFFER_BIT}R&&(F|=P.DEPTH_BUFFER_BIT),N&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),zt.dispose(),_t.dispose(),A.dispose(),q.dispose(),H.dispose(),$t.dispose(),T.dispose(),vt.dispose(),O.dispose(),O.removeEventListener("sessionstart",Ro),O.removeEventListener("sessionend",Vo),Fn.stop()};function K(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let v=ne.autoReset,R=dt.enabled,N=dt.autoUpdate,F=dt.needsUpdate,V=dt.type;it(),ne.autoReset=v,dt.enabled=R,dt.autoUpdate=N,dt.needsUpdate=F,dt.type=V}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Tt(v){let R=v.target;R.removeEventListener("dispose",Tt),ce(R)}function ce(v){me(v),_t.remove(v)}function me(v){let R=_t.get(v).programs;R!==void 0&&(R.forEach(function(N){vt.releaseProgram(N)}),v.isShaderMaterial&&vt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,N,F,V,Q){R===null&&(R=oe);let lt=V.isMesh&&V.matrixWorld.determinant()<0,pt=Nc(v,R,N,F,V);It.setMaterial(F,lt);let gt=N.index,wt=1;if(F.wireframe===!0){if(gt=Z.getWireframeAttribute(N),gt===void 0)return;wt=2}let Rt=N.drawRange,mt=N.attributes.position,Gt=Rt.start*wt,te=(Rt.start+Rt.count)*wt;Q!==null&&(Gt=Math.max(Gt,Q.start*wt),te=Math.min(te,(Q.start+Q.count)*wt)),gt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,gt.count)):mt!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,mt.count));let ie=te-Gt;if(ie<0||ie===1/0)return;$t.setup(V,F,pt,N,gt);let Me,Xt=ft;if(gt!==null&&(Me=Y.get(gt),Xt=Ot,Xt.setIndex(Me)),V.isMesh)F.wireframe===!0?(It.setLineWidth(F.wireframeLinewidth*he()),Xt.setMode(P.LINES)):Xt.setMode(P.TRIANGLES);else if(V.isLine){let yt=F.linewidth;yt===void 0&&(yt=1),It.setLineWidth(yt*he()),V.isLineSegments?Xt.setMode(P.LINES):V.isLineLoop?Xt.setMode(P.LINE_LOOP):Xt.setMode(P.LINE_STRIP)}else V.isPoints?Xt.setMode(P.POINTS):V.isSprite&&Xt.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Xt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let yt=V._multiDrawStarts,sn=V._multiDrawCounts,Yt=V._multiDrawCount,ze=gt?Y.get(gt).bytesPerElement:1,si=_t.get(F).currentProgram.getUniforms();for(let Re=0;Re<Yt;Re++)si.setValue(P,"_gl_DrawID",Re),Xt.render(yt[Re]/ze,sn[Re])}else if(V.isInstancedMesh)Xt.renderInstances(Gt,ie,V.count);else if(N.isInstancedBufferGeometry){let yt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,sn=Math.min(N.instanceCount,yt);Xt.renderInstances(Gt,ie,sn)}else Xt.render(Gt,ie)};function Kt(v,R,N){v.transparent===!0&&v.side===pn&&v.forceSinglePass===!1?(v.side=Ee,v.needsUpdate=!0,ls(v,R,N),v.side=Pn,v.needsUpdate=!0,ls(v,R,N),v.side=pn):ls(v,R,N)}this.compile=function(v,R,N=null){N===null&&(N=v),d=zt.get(N),d.init(R),M.push(d),N.traverseVisible(function(V){V.isLight&&V.layers.test(R.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),v!==N&&v.traverseVisible(function(V){V.isLight&&V.layers.test(R.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let F=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Q=V.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){let pt=Q[lt];Kt(pt,N,V),F.add(pt)}else Kt(Q,N,V),F.add(Q)}),M.pop(),d=null,F},this.compileAsync=function(v,R,N=null){let F=this.compile(v,R,N);return new Promise(V=>{function Q(){if(F.forEach(function(lt){_t.get(lt).currentProgram.isReady()&&F.delete(lt)}),F.size===0){V(v);return}setTimeout(Q,10)}Ft.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function nn(v){ke&&ke(v)}function Ro(){Fn.stop()}function Vo(){Fn.start()}let Fn=new Sc;Fn.setAnimationLoop(nn),typeof self!="undefined"&&Fn.setContext(self),this.setAnimationLoop=function(v){ke=v,O.setAnimationLoop(v),v===null?Fn.stop():Fn.start()},O.addEventListener("sessionstart",Ro),O.addEventListener("sessionend",Vo),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(R),R=O.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,R,L),d=zt.get(v,M.length),d.init(R),M.push(d),bt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,xt),g=ut.get(v,b.length),g.init(),b.push(g),O.enabled===!0&&O.isPresenting===!0){let Q=C.xr.getDepthSensingMesh();Q!==null&&pr(Q,R,-1/0,C.sortObjects)}pr(v,R,0,C.sortObjects),g.finish(),C.sortObjects===!0&&g.sort(st,ht),kt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,kt&&Mt.addToRenderList(g,v),this.info.render.frame++,tt===!0&&j.beginShadows();let N=d.state.shadowsArray;dt.render(N,v,R),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,V=g.transmissive;if(d.setupLights(),R.isArrayCamera){let Q=R.cameras;if(V.length>0)for(let lt=0,pt=Q.length;lt<pt;lt++){let gt=Q[lt];Uo(F,V,v,gt)}kt&&Mt.render(v);for(let lt=0,pt=Q.length;lt<pt;lt++){let gt=Q[lt];Po(g,v,gt,gt.viewport)}}else V.length>0&&Uo(F,V,v,R),kt&&Mt.render(v),Po(g,v,R);L!==null&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(C,v,R),$t.resetDefaultState(),_=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],tt===!0&&j.setGlobalState(C.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function pr(v,R,N,F){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){F&&qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);let lt=H.update(v),pt=v.material;pt.visible&&g.push(v,lt,pt,N,qt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){let lt=H.update(v),pt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),qt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),qt.copy(lt.boundingSphere.center)),qt.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){let gt=lt.groups;for(let wt=0,Rt=gt.length;wt<Rt;wt++){let mt=gt[wt],Gt=pt[mt.materialIndex];Gt&&Gt.visible&&g.push(v,lt,Gt,N,qt.z,mt)}}else pt.visible&&g.push(v,lt,pt,N,qt.z,null)}}let Q=v.children;for(let lt=0,pt=Q.length;lt<pt;lt++)pr(Q[lt],R,N,F)}function Po(v,R,N,F){let V=v.opaque,Q=v.transmissive,lt=v.transparent;d.setupLightsView(N),tt===!0&&j.setGlobalState(C.clippingPlanes,N),F&&It.viewport(E.copy(F)),V.length>0&&os(V,R,N),Q.length>0&&os(Q,R,N),lt.length>0&&os(lt,R,N),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Uo(v,R,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new vn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?rs:xn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let Q=d.state.transmissionRenderTarget[F.id],lt=F.viewport||E;Q.setSize(lt.z,lt.w);let pt=C.getRenderTarget();C.setRenderTarget(Q),C.getClearColor(G),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),kt&&Mt.render(N);let gt=C.toneMapping;C.toneMapping=Vn;let wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),tt===!0&&j.setGlobalState(C.clippingPlanes,F),os(v,N,F),I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let mt=0,Gt=R.length;mt<Gt;mt++){let te=R[mt],ie=te.object,Me=te.geometry,Xt=te.material,yt=te.group;if(Xt.side===pn&&ie.layers.test(F.layers)){let sn=Xt.side;Xt.side=Ee,Xt.needsUpdate=!0,Lo(ie,N,F,Me,Xt,yt),Xt.side=sn,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q))}C.setRenderTarget(pt),C.setClearColor(G,J),wt!==void 0&&(F.viewport=wt),C.toneMapping=gt}function os(v,R,N){let F=R.isScene===!0?R.overrideMaterial:null;for(let V=0,Q=v.length;V<Q;V++){let lt=v[V],pt=lt.object,gt=lt.geometry,wt=F===null?lt.material:F,Rt=lt.group;pt.layers.test(N.layers)&&Lo(pt,R,N,gt,wt,Rt)}}function Lo(v,R,N,F,V,Q){v.onBeforeRender(C,R,N,F,V,Q),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(C,R,N,F,v,Q),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=Ee,V.needsUpdate=!0,C.renderBufferDirect(N,R,F,V,v,Q),V.side=Pn,V.needsUpdate=!0,C.renderBufferDirect(N,R,F,V,v,Q),V.side=pn):C.renderBufferDirect(N,R,F,V,v,Q),v.onAfterRender(C,R,N,F,V,Q)}function ls(v,R,N){R.isScene!==!0&&(R=oe);let F=_t.get(v),V=d.state.lights,Q=d.state.shadowsArray,lt=V.state.version,pt=vt.getParameters(v,V.state,Q,R,N),gt=vt.getProgramCacheKey(pt),wt=F.programs;F.environment=v.isMeshStandardMaterial?R.environment:null,F.fog=R.fog,F.envMap=(v.isMeshStandardMaterial?q:A).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Tt),wt=new Map,F.programs=wt);let Rt=wt.get(gt);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===lt)return qo(v,pt),Rt}else pt.uniforms=vt.getUniforms(v),v.onBeforeCompile(pt,C),Rt=vt.acquireProgram(pt,gt),wt.set(gt,Rt),F.uniforms=pt.uniforms;let mt=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(mt.clippingPlanes=j.uniform),qo(v,pt),F.needsLights=Bc(v),F.lightsStateVersion=lt,F.needsLights&&(mt.ambientLightColor.value=V.state.ambient,mt.lightProbe.value=V.state.probe,mt.directionalLights.value=V.state.directional,mt.directionalLightShadows.value=V.state.directionalShadow,mt.spotLights.value=V.state.spot,mt.spotLightShadows.value=V.state.spotShadow,mt.rectAreaLights.value=V.state.rectArea,mt.ltc_1.value=V.state.rectAreaLTC1,mt.ltc_2.value=V.state.rectAreaLTC2,mt.pointLights.value=V.state.point,mt.pointLightShadows.value=V.state.pointShadow,mt.hemisphereLights.value=V.state.hemi,mt.directionalShadowMap.value=V.state.directionalShadowMap,mt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,mt.spotShadowMap.value=V.state.spotShadowMap,mt.spotLightMatrix.value=V.state.spotLightMatrix,mt.spotLightMap.value=V.state.spotLightMap,mt.pointShadowMap.value=V.state.pointShadowMap,mt.pointShadowMatrix.value=V.state.pointShadowMatrix),F.currentProgram=Rt,F.uniformsList=null,Rt}function Do(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Ei.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function qo(v,R){let N=_t.get(v);N.outputColorSpace=R.outputColorSpace,N.batching=R.batching,N.batchingColor=R.batchingColor,N.instancing=R.instancing,N.instancingColor=R.instancingColor,N.instancingMorph=R.instancingMorph,N.skinning=R.skinning,N.morphTargets=R.morphTargets,N.morphNormals=R.morphNormals,N.morphColors=R.morphColors,N.morphTargetsCount=R.morphTargetsCount,N.numClippingPlanes=R.numClippingPlanes,N.numIntersection=R.numClipIntersection,N.vertexAlphas=R.vertexAlphas,N.vertexTangents=R.vertexTangents,N.toneMapping=R.toneMapping}function Nc(v,R,N,F,V){R.isScene!==!0&&(R=oe),I.resetTextureUnits();let Q=R.fog,lt=F.isMeshStandardMaterial?R.environment:null,pt=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Bi,gt=(F.isMeshStandardMaterial?q:A).get(F.envMap||lt),wt=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Rt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),mt=!!N.morphAttributes.position,Gt=!!N.morphAttributes.normal,te=!!N.morphAttributes.color,ie=Vn;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ie=C.toneMapping);let Me=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xt=Me!==void 0?Me.length:0,yt=_t.get(F),sn=d.state.lights;if(tt===!0&&(xt===!0||v!==y)){let qe=v===y&&F.id===_;j.setState(F,v,qe)}let Yt=!1;F.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==sn.state.version||yt.outputColorSpace!==pt||V.isBatchedMesh&&yt.batching===!1||!V.isBatchedMesh&&yt.batching===!0||V.isBatchedMesh&&yt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&yt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&yt.instancing===!1||!V.isInstancedMesh&&yt.instancing===!0||V.isSkinnedMesh&&yt.skinning===!1||!V.isSkinnedMesh&&yt.skinning===!0||V.isInstancedMesh&&yt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&yt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&yt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&yt.instancingMorph===!1&&V.morphTexture!==null||yt.envMap!==gt||F.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==j.numPlanes||yt.numIntersection!==j.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Rt||yt.morphTargets!==mt||yt.morphNormals!==Gt||yt.morphColors!==te||yt.toneMapping!==ie||yt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,yt.__version=F.version);let ze=yt.currentProgram;Yt===!0&&(ze=ls(F,R,V));let si=!1,Re=!1,ki=!1,se=ze.getUniforms(),Je=yt.uniforms;if(It.useProgram(ze.program)&&(si=!0,Re=!0,ki=!0),F.id!==_&&(_=F.id,Re=!0),si||y!==v){It.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),Yh(rt),Kh(rt),se.setValue(P,"projectionMatrix",rt)):se.setValue(P,"projectionMatrix",v.projectionMatrix),se.setValue(P,"viewMatrix",v.matrixWorldInverse);let yn=se.map.cameraPosition;yn!==void 0&&yn.setValue(P,Et.setFromMatrixPosition(v.matrixWorld)),Bt.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&se.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Re=!0,ki=!0)}if(V.isSkinnedMesh){se.setOptional(P,V,"bindMatrix"),se.setOptional(P,V,"bindMatrixInverse");let qe=V.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),se.setValue(P,"boneTexture",qe.boneTexture,I))}V.isBatchedMesh&&(se.setOptional(P,V,"batchingTexture"),se.setValue(P,"batchingTexture",V._matricesTexture,I),se.setOptional(P,V,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",V._indirectTexture,I),se.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",V._colorsTexture,I));let zi=N.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&St.update(V,N,ze),(Re||yt.receiveShadow!==V.receiveShadow)&&(yt.receiveShadow=V.receiveShadow,se.setValue(P,"receiveShadow",V.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Je.envMap.value=gt,Je.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&R.environment!==null&&(Je.envMapIntensity.value=R.environmentIntensity),Re&&(se.setValue(P,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&Fc(Je,ki),Q&&F.fog===!0&&at.refreshFogUniforms(Je,Q),at.refreshMaterialUniforms(Je,F,k,$,d.state.transmissionRenderTarget[v.id]),Ei.upload(P,Do(yt),Je,I)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ei.upload(P,Do(yt),Je,I),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&se.setValue(P,"center",V.center),se.setValue(P,"modelViewMatrix",V.modelViewMatrix),se.setValue(P,"normalMatrix",V.normalMatrix),se.setValue(P,"modelMatrix",V.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let qe=F.uniformsGroups;for(let yn=0,Cn=qe.length;yn<Cn;yn++){let No=qe[yn];T.update(No,ze),T.bind(No,ze)}}return ze}function Fc(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function Bc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,R,N){_t.get(v.texture).__webglTexture=R,_t.get(v.depthTexture).__webglTexture=N;let F=_t.get(v);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let N=_t.get(v);N.__webglFramebuffer=R,N.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,N=0){L=v,S=R,w=N;let F=!0,V=null,Q=!1,lt=!1;if(v){let gt=_t.get(v);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(P.FRAMEBUFFER,null),F=!1;else if(gt.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(gt.__hasExternalTextures)I.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let mt=v.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&_t.has(mt)&&(v.width!==mt.image.width||v.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);let Rt=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[R])?V=Rt[R][N]:V=Rt[R],Q=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?V=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?V=Rt[N]:V=Rt,E.copy(v.viewport),X.copy(v.scissor),B=v.scissorTest}else E.copy(Ct).multiplyScalar(k).floor(),X.copy(Dt).multiplyScalar(k).floor(),B=jt;if(It.bindFramebuffer(P.FRAMEBUFFER,V)&&F&&It.drawBuffers(v,V),It.viewport(E),It.scissor(X),It.setScissorTest(B),Q){let gt=_t.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,gt.__webglTexture,N)}else if(lt){let gt=_t.get(v.texture),wt=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.__webglTexture,N||0,wt)}_=-1},this.readRenderTargetPixels=function(v,R,N,F,V,Q,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){It.bindFramebuffer(P.FRAMEBUFFER,pt);try{let gt=v.texture,wt=gt.format,Rt=gt.type;if(!Bt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-F&&N>=0&&N<=v.height-V&&P.readPixels(R,N,F,V,Pt.convert(wt),Pt.convert(Rt),Q)}finally{let gt=L!==null?_t.get(L).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,R,N,F,V,Q,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let gt=v.texture,wt=gt.format,Rt=gt.type;if(!Bt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-F&&N>=0&&N<=v.height-V){It.bindFramebuffer(P.FRAMEBUFFER,pt);let mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(R,N,F,V,Pt.convert(wt),Pt.convert(Rt),0);let Gt=L!==null?_t.get(L).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,Gt);let te=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xh(P,te,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(mt),P.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,N=0){v.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let F=Math.pow(2,-N),V=Math.floor(v.image.width*F),Q=Math.floor(v.image.height*F),lt=R!==null?R.x:0,pt=R!==null?R.y:0;I.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,N,0,0,lt,pt,V,Q),It.unbindTexture()},this.copyTextureToTexture=function(v,R,N=null,F=null,V=0){v.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,v=arguments[1],R=arguments[2],V=arguments[3]||0,N=null);let Q,lt,pt,gt,wt,Rt,mt,Gt,te,ie=v.isCompressedTexture?v.mipmaps[V]:v.image;N!==null?(Q=N.max.x-N.min.x,lt=N.max.y-N.min.y,pt=N.isBox3?N.max.z-N.min.z:1,gt=N.min.x,wt=N.min.y,Rt=N.isBox3?N.min.z:0):(Q=ie.width,lt=ie.height,pt=ie.depth||1,gt=0,wt=0,Rt=0),F!==null?(mt=F.x,Gt=F.y,te=F.z):(mt=0,Gt=0,te=0);let Me=Pt.convert(R.format),Xt=Pt.convert(R.type),yt;R.isData3DTexture?(I.setTexture3D(R,0),yt=P.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(I.setTexture2DArray(R,0),yt=P.TEXTURE_2D_ARRAY):(I.setTexture2D(R,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,R.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,R.unpackAlignment);let sn=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ze=P.getParameter(P.UNPACK_SKIP_PIXELS),si=P.getParameter(P.UNPACK_SKIP_ROWS),Re=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rt);let ki=v.isDataArrayTexture||v.isData3DTexture,se=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Je=_t.get(v),zi=_t.get(R),qe=_t.get(Je.__renderTarget),yn=_t.get(zi.__renderTarget);It.bindFramebuffer(P.READ_FRAMEBUFFER,qe.__webglFramebuffer),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Cn=0;Cn<pt;Cn++)ki&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,V,Rt+Cn),v.isDepthTexture?(se&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(R).__webglTexture,V,te+Cn),P.blitFramebuffer(gt,wt,Q,lt,mt,Gt,Q,lt,P.DEPTH_BUFFER_BIT,P.NEAREST)):se?P.copyTexSubImage3D(yt,V,mt,Gt,te+Cn,gt,wt,Q,lt):P.copyTexSubImage2D(yt,V,mt,Gt,te+Cn,gt,wt,Q,lt);It.bindFramebuffer(P.READ_FRAMEBUFFER,null),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else se?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(yt,V,mt,Gt,te,Q,lt,pt,Me,Xt,ie.data):R.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,V,mt,Gt,te,Q,lt,pt,Me,ie.data):P.texSubImage3D(yt,V,mt,Gt,te,Q,lt,pt,Me,Xt,ie):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,mt,Gt,Q,lt,Me,Xt,ie.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,mt,Gt,ie.width,ie.height,Me,ie.data):P.texSubImage2D(P.TEXTURE_2D,V,mt,Gt,Q,lt,Me,Xt,ie);P.pixelStorei(P.UNPACK_ROW_LENGTH,sn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,si),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),V===0&&R.generateMipmaps&&P.generateMipmap(yt),It.unbindTexture()},this.copyTextureToTexture3D=function(v,R,N=null,F=null,V=0){return v.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,v=arguments[2],R=arguments[3],V=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,N,F,V)},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){S=0,w=0,L=null,It.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var er=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var es=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ic=new le,no=new Ws,Ps=new Li,Us=new U,nr=class extends _e{constructor(t=new Ke,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,t.ray.intersectsSphere(Ps)===!1)return;ic.copy(s).invert(),no.copy(t.ray).applyMatrix4(ic);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=u,x=p;m<x;m++){let g=c.getX(m);Us.fromBufferAttribute(f,g),sc(Us,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=u,x=p;m<x;m++)Us.fromBufferAttribute(f,m),sc(Us,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sc(i,t,e,n,s,r,a){let o=no.distanceSqToPoint(i);if(o<e){let l=new U;no.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ns=class extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new U,u=new U,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let b=[],M=d/n,C=0;d===0&&a===0?C=.5/e:d===n&&l===Math.PI&&(C=-.5/e);for(let D=0;D<=e;D++){let S=D/e;f.x=-t*Math.cos(s+S*r)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(s+S*r)*Math.sin(a+M*o),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(S+C,1-M),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){let M=h[d][b+1],C=h[d][b],D=h[d+1][b],S=h[d+1][b+1];(d!==0||a>0)&&p.push(M,C,S),(d!==n-1||l<Math.PI)&&p.push(C,D,S)}this.setIndex(p),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ni=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ls(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},io=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ll:r=t,o=2*e-n;break;case cl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ll:a=t,l=2*n-e;break;case cl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,d=-u*g+2*u*x-u*m,b=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,M=(-1-p)*g+(1.5+p)*x+.5*m,C=p*g-p*x;for(let D=0;D!==o;++D)r[D]=d*a[h+D]+b*a[c+D]+M*a[l+D]+C*a[f+D];return r}},so=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},ro=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ls(e,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ls(t.times,Array),values:Ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new io(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Ir:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[u+m]||x!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Fa;var ni=class extends Ze{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Os;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Ze{};ao.prototype.ValueTypeName="color";var oo=class extends Ze{};oo.prototype.ValueTypeName="number";var lo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},ir=class extends Ze{InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Ze{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Os;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Ze{};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Gg=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ss=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sr=class extends ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qr=new le,rc=new U,ac=new U,rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var oc=new le,Ki=new U,$r=new U,fo=class extends rr{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),$r.copy(n.position),$r.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($r),n.updateMatrixWorld(),s.makeTranslation(-Ki.x,-Ki.y,-Ki.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}},ar=class extends ss{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},po=class extends rr{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new po}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo="\\[\\]\\.:\\/",Wg=new RegExp("["+bo+"]","g"),So="[^"+bo+"]",Xg="[^"+bo.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",So),Kg=/(WCOD+)?/.source.replace("WCOD",Xg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So),jg=new RegExp("^"+Yg+Kg+Zg+Jg+"$"),Qg=["material","materials","bones","map"],go=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(t){let e=jg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=go;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Am=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function tm(i,t){let n=document.createElement("canvas");n.width=i*6,n.height=t*6;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,n.width*.5,n.height);r.addColorStop(0,"#f4fcff"),r.addColorStop(.5,"#cfeafb"),r.addColorStop(1,"#b4dcf5"),s.fillStyle=r,s.fillRect(0,0,n.width,n.height);let a=11,o=()=>(a=a*16807%2147483647,a/2147483647);s.lineCap="round";for(let c=0;c<160;c++){s.strokeStyle=`rgba(255,255,255,${.3+o()*.5})`,s.lineWidth=1+o()*2;let h=o()*n.width,f=o()*n.height,u=o()*6.28,p=20+o()*90;s.beginPath(),s.moveTo(h,f),s.quadraticCurveTo(h+Math.cos(u)*p*.5,f+Math.sin(u)*p*.5+8,h+Math.cos(u)*p,f+Math.sin(u)*p),s.stroke()}for(let c=0;c<70;c++){s.strokeStyle=`rgba(100,160,210,${.12+o()*.15})`,s.lineWidth=1.5;let h=o()*n.width,f=o()*n.height,u=o()*6.28,p=30+o()*120;s.beginPath(),s.moveTo(h,f),s.lineTo(h+Math.cos(u)*p,f+Math.sin(u)*p),s.stroke()}s.lineWidth=7,s.strokeStyle="rgba(60,120,200,.4)",s.beginPath(),s.moveTo(0,n.height/2),s.lineTo(n.width,n.height/2),s.stroke(),s.strokeStyle="rgba(220,60,80,.38)",s.beginPath(),s.moveTo(0,n.height*.2),s.lineTo(n.width,n.height*.2),s.moveTo(0,n.height*.8),s.lineTo(n.width,n.height*.8),s.stroke(),s.strokeStyle="rgba(60,120,200,.4)",s.beginPath(),s.arc(n.width/2,n.height/2,9*6,0,6.28),s.stroke(),s.fillStyle="rgba(60,120,200,.35)",s.beginPath(),s.arc(n.width/2,n.height/2,2*6,0,6.28),s.fill();let l=new ns(n);return l.colorSpace=ve,l.anisotropy=4,l}function em(){let i=document.createElement("canvas");i.width=256,i.height=64;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"#c58a46"),e.addColorStop(1,"#8a5222"),t.fillStyle=e,t.fillRect(0,0,256,64),t.strokeStyle="rgba(50,25,5,.35)",t.lineWidth=2;for(let s=1;s<4;s++)t.beginPath(),t.moveTo(0,s*16),t.lineTo(256,s*16),t.stroke();for(let s=0;s<256;s+=64)t.beginPath(),t.moveTo(s,0),t.lineTo(s,64),t.stroke();let n=new ns(i);return n.colorSpace=ve,n.wrapS=n.wrapT=Qi,n}var ur=class{constructor(t,e,n){this.W=e,this.H=n,this.cv=document.createElement("canvas"),this.cv.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none",t.append(this.cv),this.r=new tr({canvas:this.cv,alpha:!0,antialias:!0}),this.r.setClearColor(0,0),this.r.outputColorSpace=ve,this.r.toneMapping=Ao,this.r.toneMappingExposure=1.25,this.scene=new er,this.cam=new ye(30,1,10,4e3),this.root=new Tn,this.scene.add(this.root),this.scene.add(new sr(14676223,6978202,1.1));let s=new or(16773336,1.7);s.position.set(-200,700,-300),this.scene.add(s),this.lamps=[],this.snow=null}build(t,e,n){for(;this.root.children.length;)this.root.children.pop().traverse(d=>{d.geometry&&d.geometry.dispose()});let s=this.W*n,r=this.H*n;this.px={ox:t,oy:e,w:s,h:r,sc:n},this.ice||(this.ice=tm(this.W,this.H)),this.wood||(this.wood=em());let a=t+s/2,o=e+r/2,l=new Ce(new qi(s,r),new Ni({map:this.ice,emissive:16777215,emissiveMap:this.ice,emissiveIntensity:.55,roughness:.18,metalness:.1}));l.rotation.x=-Math.PI/2,l.position.set(a,0,o),this.root.add(l);let c=n*3,h=n*3.2,f=new Ni({map:this.wood,roughness:.6}),u=new Ni({color:16777215,roughness:.9}),p=(g,d,b,M,C,D,S)=>{let w=new Ce(new ei(g,d,b),S);return w.position.set(M,C,D),this.root.add(w),w};for(let g of[-1,1])p(s+c*2,h,c,a,h/2,o+g*(r/2+c/2),f),p(s+c*2,h*.28,c*1.15,a,h+h*.14,o+g*(r/2+c/2),u),p(c,h,r,a+g*(s/2+c/2),h/2,o,f),p(c*1.15,h*.28,r,a+g*(s/2+c/2),h+h*.14,o,u);let m=new qn({color:8376575,transparent:!0,opacity:.55});p(s,.6,n*.35,a,.4,e+n*.2,m),p(s,.6,n*.35,a,.4,e+r-n*.2,m);for(let g of this.lamps)this.scene.remove(g);this.lamps=[];for(let g of[-1,1])for(let d of[-1,1]){let b=a+g*(s/2+c*.5),M=o+d*(r/2+c*.5);p(c*.55,h*3.2,c*.55,b,h*1.6,M,f);let C=new Ce(new is(c*.55,16,12),new qn({color:16771488}));C.position.set(b,h*3.5,M),this.root.add(C);let D=new ar(16767120,2.2,s*.9,1.5);D.position.set(b-g*c,h*4,M-d*c),this.scene.add(D),this.lamps.push(D)}let x=[16734810,16765498,5949695,9109370];for(let g=0;g<14;g++){let d=t+(g+.5)/14*s,b=new Ce(new is(c*.22,10,8),new qn({color:x[g%4]}));b.position.set(d,h*1.9+Math.sin(g*1.7)*2,e-c*.5),this.root.add(b)}if(!this.snow){let d=new Float32Array(480);this.snowSeed=[];for(let M=0;M<160;M++)this.snowSeed.push([Math.random(),Math.random(),Math.random()]);let b=new Ke;b.setAttribute("position",new Te(d,3)),this.snow=new nr(b,new es({color:16777215,size:5,transparent:!0,opacity:.85,depthWrite:!1})),this.scene.add(this.snow)}}resize(t,e,n){this.cw=t,this.ch=e,this.r.setPixelRatio(n),this.r.setSize(t,e,!1),this.D=900,this.cam.aspect=t/e,this.cam.fov=2*Math.atan(e/2/this.D)*180/Math.PI,this.cam.updateProjectionMatrix(),this.cam.position.set(t/2,this.D,e/2),this.cam.up.set(0,0,-1),this.cam.lookAt(t/2,0,e/2)}render(t){if(this.snow){let e=this.snow.geometry.attributes.position.array,n=this.snowSeed.length;for(let s=0;s<n;s++){let r=this.snowSeed[s],a=420-(t*(30+r[2]*40)+r[1]*420)%420;e[s*3]=r[0]*this.cw+Math.sin(t+s)*12,e[s*3+1]=a+4,e[s*3+2]=(r[2]*7.3+r[1])%1*this.ch}this.snow.geometry.attributes.position.needsUpdate=!0}this.r.render(this.scene,this.cam)}};function et(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Vc(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function Pc(i,t,e,n="#ffd23a"){return`
.${i}-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:${e}}
.${i}-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.${i}-layer{position:absolute;inset:0;pointer-events:none}
.${i}-layer button,.${i}-layer .${i}-card{pointer-events:auto}
.${i}-top{position:absolute;top:max(calc(var(--u)*2.5),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);direction:ltr;align-items:center;justify-content:space-between}
.${i}-pill{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1) calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.4);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4);white-space:nowrap}
.${i}-bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:rgba(0,0,0,.4);border:calc(var(--u)*.35) solid #fff;overflow:hidden;position:relative}
.${i}-bar b{display:block;height:100%;background:linear-gradient(180deg,#7af0d0,#2ab898);border-radius:99px}
.${i}-round{width:calc(var(--u)*10.5);height:calc(var(--u)*10.5);border-radius:50%;font-size:calc(var(--u)*5);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.5) solid #fff;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${i}-round:active{transform:scale(.94)}
.${i}-hint{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);background:rgba(10,40,60,.78);border:calc(var(--u)*.4) solid #fff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .35s;pointer-events:none;max-width:94%;overflow:hidden;text-overflow:ellipsis}
.${i}-hint.show{opacity:1}
.${i}-dim{position:absolute;inset:0;background:rgba(5,25,40,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.${i}-card{background:linear-gradient(180deg,${t},${e});border:calc(var(--u)*.7) solid ${n};border-radius:calc(var(--u)*5);padding:calc(var(--u)*3.4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;color:#fff;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,10,30,.5)}
.${i}-logo{font-size:calc(var(--u)*10);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;text-align:center;line-height:1.1}
.${i}-title{font-size:calc(var(--u)*8);font-weight:900;color:${n};-webkit-text-stroke:calc(var(--u)*.5) rgba(0,30,50,.8);paint-order:stroke fill;text-align:center;line-height:1.1}
.${i}-small{font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;opacity:.95}
.${i}-stars{font-size:calc(var(--u)*11)}.${i}-stars .off{filter:grayscale(1);opacity:.3}
.${i}-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*11.5);cursor:pointer;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.9) 0 #1a6a3a,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.${i}-btn.alt{background:linear-gradient(180deg,#ff8a6a,#e0502a);box-shadow:0 calc(var(--u)*.9) 0 #902a0a}
.${i}-btn.dark{background:linear-gradient(180deg,#4a9ab8,#2a6a88);box-shadow:0 calc(var(--u)*.9) 0 #0a3a50;font-size:calc(var(--u)*4.2)}
.${i}-btn:active{transform:translateY(calc(var(--u)*.5))}
.${i}-btn:focus-visible,.${i}-round:focus-visible,.${i}-lv:focus-visible,.${i}-bld:focus-visible{outline:calc(var(--u)*.7) solid ${n};outline-offset:calc(var(--u)*.5)}
.${i}-lvs{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.8);width:100%}
.${i}-lv{border:none;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*2.8);background:linear-gradient(180deg,#4ab8d8,#2a78a8);box-shadow:0 calc(var(--u)*.6) 0 #0a3a60;min-height:calc(var(--u)*18)}
.${i}-lv i{font-style:normal;font-size:calc(var(--u)*6.5)}
.${i}-lv.lock{background:linear-gradient(180deg,#b8c4cc,#8a98a4);box-shadow:0 calc(var(--u)*.6) 0 #5a6a78}
.${i}-bot{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);bottom:max(calc(var(--u)*2),env(safe-area-inset-bottom));display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr;align-items:flex-end}
.${i}-bld{font-family:inherit;font-weight:900;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);color:#fff;background:linear-gradient(180deg,${t},${e});padding:calc(var(--u)*1) calc(var(--u)*2);min-width:calc(var(--u)*17);font-size:calc(var(--u)*3);display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:calc(var(--u)*.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,20,40,.4)}
.${i}-bld i{font-style:normal;font-size:calc(var(--u)*6)}
.${i}-bld.can{background:linear-gradient(180deg,#6ae08a,#2fa85a);animation:${i}pulse 1s infinite}
.${i}-bld.done{opacity:.55;filter:grayscale(.5)}
.${i}-bld small{font-size:calc(var(--u)*2.5);opacity:.95;font-weight:700}
@keyframes ${i}pulse{50%{transform:scale(1.07)}}
@media (orientation:landscape){.${i}-card{width:calc(var(--u)*115);max-width:94vw}.${i}-logo{font-size:calc(var(--u)*8)}.${i}-lvs{grid-template-columns:repeat(8,1fr)}.${i}-lv{min-height:calc(var(--u)*24);font-size:calc(var(--u)*3.2)}}
.${i}-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`}function Uc(i,t){let e=(i||"./").replace(/\/?$/,"/");return Promise.all(t.map(n=>new Promise(s=>{let r=new Image,a=!1,o=l=>{a||(a=!0,s([n,l]))};r.onload=()=>o(r.naturalWidth>0?r:null),r.onerror=()=>o(null),setTimeout(()=>o(null),6e3),r.src=`${e}art/${n}.webp`}))).then(n=>Object.fromEntries(n))}var Nn={};function qc(i,t,e){let n=e*2.7,s=n*t.naturalWidth/t.naturalHeight;i.drawImage(t,-s/2,e*1-n,s,n)}var nm={title:["\u0645\u0639\u0631\u0643\u0629 \u062D\u0644\u0628\u0629 \u0627\u0644\u062C\u0644\u064A\u062F","Ice Rink Brawl"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Play"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","Levels"],heroes:["\u0627\u0644\u0623\u0628\u0637\u0627\u0644","Heroes"],exit:["\u062E\u0631\u0648\u062C","Exit"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],resume:["\u0643\u0645\u0651\u0644","Resume"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],retry:["\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","Try again"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Level"],yourTurn:["\u062F\u0648\u0631\u0643!","Your turn!"],foeTurn:["\u062F\u0648\u0631 \u0627\u0644\u063A\u064A\u0644\u0627\u0646!","Goblins move!"],won:["\u0643\u0633\u0628\u062A!","You won!"],lost:["\u0627\u0644\u063A\u064A\u0644\u0627\u0646 \u0643\u0633\u0628\u0648\u0627","The goblins won"],lostText:["\u0623\u0628\u0637\u0627\u0644\u0643 \u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0631\u0627\u062D\u0629. \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A!","Your heroes need a rest. Try again!"],coins:["\u0639\u0645\u0644\u0627\u062A","Coins"],howTo:["\u0627\u0633\u062D\u0628 \u0627\u0644\u0628\u0637\u0644 \u0644\u0648\u0631\u0627 \u0648\u0633\u064A\u0651\u0628\u0647","Drag a hero back and let go"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],penguin:["\u0628\u0646\u062C\u0648","Pengo"],fox:["\u0644\u0647\u0628","Ember"],bear:["\u062F\u0628\u062F\u0648\u0628","Bruno"],spin:["\u062F\u0648\u0651\u0627\u0645\u0629 \u0627\u0644\u062C\u0644\u064A\u062F","Icy Spin"],flame:["\u0627\u0646\u062F\u0641\u0627\u0639\u0629 \u0627\u0644\u0644\u0647\u0628","Flame Dash"],slam:["\u0636\u0631\u0628\u0629 \u0627\u0644\u062F\u0628","Bear Slam"],spin_d:["\u0645\u0648\u062C\u0629 \u062A\u062F\u0641\u0639 \u0627\u0644\u063A\u064A\u0644\u0627\u0646 \u0628\u0639\u064A\u062F","A wave that knocks goblins back"],flame_d:["\u062A\u062E\u062A\u0631\u0642 \u0627\u0644\u063A\u064A\u0644\u0627\u0646 \u0648\u062A\u062D\u0631\u0642\u0647\u0645","Pierces and burns goblins"],slam_d:["\u0636\u0631\u0628\u0629 \u062A\u0634\u0644\u0651 \u0627\u0644\u063A\u064A\u0644\u0627\u0646 \u0627\u0644\u0644\u064A \u062D\u0648\u0627\u0644\u064A\u0647","Stuns goblins around it"],hp:["\u0635\u062D\u0629","Health"],pow:["\u0642\u0648\u0629","Power"],max:["\u0623\u0642\u0635\u0649","Max"],ready:["\u062C\u0627\u0647\u0632!","Ready!"],gala:["\u0631\u0648\u062D \u0627\u0644\u0645\u0647\u0631\u062C\u0627\u0646","Gala Spirit"],turnw:["\u0627\u0644\u062F\u0648\u0631","Turn"],p_shield:["\u062D\u0627\u0626\u0637 \u0627\u0644\u062F\u0631\u0639","Shield Wall"],p_shield_d:["\u0628\u064A\u0627\u062E\u062F \u0636\u0631\u0631 \u0623\u0642\u0644 \u0628\u0646\u0633\u0628\u0629 \u0663\u0660\u066A.","Takes 30% less damage."],p_ricochet:["\u0627\u0644\u0627\u0631\u062A\u062F\u0627\u062F","Ricochet"],p_ricochet_d:["\u0643\u0644 \u0627\u0631\u062A\u062F\u0627\u062F \u0645\u0646 \u0627\u0644\u062D\u064A\u0637\u0629 \u0642\u0628\u0644 \u0627\u0644\u0636\u0631\u0628\u0629 \u0628\u064A\u0632\u0648\u0651\u062F \u0627\u0644\u0636\u0631\u0631 \u0664\u0660\u066A.","Every wall bounce before a hit adds +40% damage."],p_mend:["\u0648\u0647\u062C \u0627\u0644\u0634\u0641\u0627\u0621","Mending Glow"],p_mend_d:["\u0628\u062A\u0639\u0627\u0644\u062C \u0643\u0644 \u0635\u0627\u062D\u0628 \u0628\u062A\u0644\u0645\u0633\u0647.","Heals every ally she touches."],team:["\u0627\u0644\u0641\u0631\u064A\u0642","Team"],ko:["\u0646\u0627\u064A\u0645","KO"],ff:["\u0627\u0636\u063A\u0637 \u0644\u0644\u062A\u0633\u0631\u064A\u0639","Tap to speed up"],pause:["\u0648\u0642\u0641\u0629","Paused"],continue:["\u0643\u0645\u0651\u0644 \u0627\u0644\u0644\u0639\u0628","Continue"],upgrades:["\u062A\u0642\u0648\u064A\u0629 \u0627\u0644\u0623\u0628\u0637\u0627\u0644","Upgrade heroes"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],boss:["\u0632\u0639\u064A\u0645!","Boss!"],special:["\u0642\u062F\u0631\u0629 \u062E\u0627\u0635\u0629","Special"]},im=["\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u062B\u0644\u062C","\u0635\u062D\u0628\u0629 \u0627\u062A\u0646\u064A\u0646","\u062D\u0631\u0628 \u0643\u0648\u0631 \u0627\u0644\u062B\u0644\u062C","\u0628\u0631\u0643\u0629 \u0627\u0644\u062B\u0644\u062C \u0627\u0644\u0637\u0631\u064A","\u062D\u064A\u0637\u0627\u0646 \u0627\u0644\u062C\u0644\u064A\u062F","\u0627\u0644\u0632\u0639\u064A\u0645 \u062C\u0631\u0648\u0645\u0628\u0648","\u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629","\u0645\u0644\u062C\u0623 \u0627\u0644\u0645\u0639\u0627\u0644\u062C","\u0627\u0644\u0648\u062D\u0634\u064A\u0646 \u0627\u0644\u0643\u0628\u0627\u0631","\u0633\u0631\u0628 \u0627\u0644\u0639\u0641\u0627\u0631\u064A\u062A","\u0645\u0639\u0633\u0643\u0631 \u0627\u0644\u063A\u064A\u0644\u0627\u0646","\u0645\u0644\u0643 \u0627\u0644\u063A\u064A\u0644\u0627\u0646"],sm=["Snow Start","Two Friends","Snowball Fight","Slush Pool","Ice Walls","Chief Grumbo","Big Trouble","Healer Hideout","Double Brutes","Imp Swarm","Goblin Camp","Goblin King"],At=Vc(nm),dr=(i,t,e)=>i<t?t:i>e?e:i,Lt=Math.PI*2,fr=20;function ee(i,t,e,n,s,r=0){i.beginPath(),i.ellipse(t,e,Math.max(.01,n),Math.max(.01,s),r,0,Lt)}function wo(i,t,e,n,s,r,a,o=0){for(let l of[-1,1])i.fillStyle="#fff",ee(i,l*r,s,a,a*1.12),i.fill(),i.fillStyle="#1b1b2a",i.beginPath(),i.arc(l*r+e*a*.45,s+n*a*.45,a*.55,0,Lt),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(l*r+e*a*.45+a*.2,s+n*a*.45-a*.2,a*.2,0,Lt),i.fill(),o&&(i.strokeStyle="#2a1a10",i.lineWidth=t*.09,i.beginPath(),i.moveTo(l*r-l*a*1.1,s-a*(1.5-o*l*-0)),i.lineTo(l*r+l*a*.3*-1,s-a*1+o*a*.6),i.stroke())}function Lc(i,t,e,n){let{lx:s,ly:r,t:a,ko:o}=n;if(i.save(),i.fillStyle="rgba(20,50,90,.28)",ee(i,0,e*.9,e*.95,e*.3),i.fill(),o&&(i.rotate(.35),i.globalAlpha=.75),Nn["hero_"+t]){qc(i,Nn["hero_"+t],e),i.restore();return}t==="penguin"?(i.fillStyle="#ff9a2a",ee(i,-e*.42,e*.82,e*.32,e*.16),i.fill(),ee(i,e*.42,e*.82,e*.32,e*.16),i.fill(),i.fillStyle="#22385e",ee(i,-e*.98,e*.15,e*.22,e*.5,.3),i.fill(),ee(i,e*.98,e*.15,e*.22,e*.5,-.3),i.fill(),i.fillStyle="#2b4a7c",ee(i,0,0,e*.92,e),i.fill(),i.fillStyle="#fff",ee(i,0,e*.22,e*.6,e*.7),i.fill(),i.fillStyle="#e8384f",i.beginPath(),i.roundRect(-e*.8,-e*.52,e*1.6,e*.3,e*.15),i.fill(),i.fillRect(e*.35,-e*.4,e*.28,e*.6),wo(i,e,s,r,-e*.1-e*.28,e*.3,e*.23),i.fillStyle="#ff9a2a",i.beginPath(),i.moveTo(-e*.17,-e*0),i.lineTo(e*.17,-e*0),i.lineTo(0,e*.22),i.closePath(),i.fill(),i.fillStyle="rgba(255,120,140,.5)",i.beginPath(),i.arc(-e*.55,e*.02,e*.12,0,Lt),i.fill(),i.beginPath(),i.arc(e*.55,e*.02,e*.12,0,Lt),i.fill()):t==="fox"?(i.save(),i.translate(e*.8,e*.45),i.rotate(-.5+Math.sin(a*6)*.1),i.fillStyle="#f0802a",ee(i,e*.35,0,e*.7,e*.3),i.fill(),i.fillStyle="#fff",ee(i,e*.85,0,e*.25,e*.26),i.fill(),i.restore(),i.fillStyle="#f0802a",i.beginPath(),i.moveTo(-e*.85,-e*.2),i.lineTo(-e*.7,-e*1.2),i.lineTo(-e*.1,-e*.65),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e*.85,-e*.2),i.lineTo(e*.7,-e*1.2),i.lineTo(e*.1,-e*.65),i.closePath(),i.fill(),i.fillStyle="#4a2a1a",i.beginPath(),i.moveTo(-e*.7,-e*.45),i.lineTo(-e*.65,-e*.98),i.lineTo(-e*.3,-e*.62),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e*.7,-e*.45),i.lineTo(e*.65,-e*.98),i.lineTo(e*.3,-e*.62),i.closePath(),i.fill(),i.fillStyle="#f58c32",ee(i,0,0,e*.98,e*.92),i.fill(),i.fillStyle="#fff6ea",i.beginPath(),i.moveTo(-e*.9,e*.15),i.quadraticCurveTo(0,-e*.1,e*.9,e*.15),i.quadraticCurveTo(e*.5,e*.95,0,e*.9),i.quadraticCurveTo(-e*.5,e*.95,-e*.9,e*.15),i.fill(),i.fillStyle="#ffd23a",i.beginPath(),i.roundRect(-e*.6,e*.55,e*1.2,e*.24,e*.12),i.fill(),wo(i,e,s,r,-e*.15,e*.32,e*.22),i.fillStyle="#2a1a1a",ee(i,0,e*.2,e*.12,e*.09),i.fill(),i.strokeStyle="#2a1a1a",i.lineWidth=e*.05,i.beginPath(),i.moveTo(0,e*.28),i.quadraticCurveTo(-e*.1,e*.4,-e*.2,e*.35),i.moveTo(0,e*.28),i.quadraticCurveTo(e*.1,e*.4,e*.2,e*.35),i.stroke()):(i.fillStyle="#f7f3ee",i.beginPath(),i.arc(-e*.72,-e*.74,e*.34,0,Lt),i.fill(),i.beginPath(),i.arc(e*.72,-e*.74,e*.34,0,Lt),i.fill(),i.fillStyle="#f2a8b8",i.beginPath(),i.arc(-e*.72,-e*.74,e*.18,0,Lt),i.fill(),i.beginPath(),i.arc(e*.72,-e*.74,e*.18,0,Lt),i.fill(),i.fillStyle="#fbf8f3",ee(i,0,0,e,e*.95),i.fill(),i.strokeStyle="#3a8ae0",i.lineWidth=e*.14,i.beginPath(),i.arc(0,-e*.1,e*.95,Math.PI*1.12,Math.PI*1.88),i.stroke(),i.fillStyle="#3a8ae0",i.beginPath(),i.arc(-e*.93,-e*.12,e*.22,0,Lt),i.fill(),i.beginPath(),i.arc(e*.93,-e*.12,e*.22,0,Lt),i.fill(),i.fillStyle="#e8d2b0",ee(i,0,e*.3,e*.45,e*.34),i.fill(),i.fillStyle="#2a2230",ee(i,0,e*.17,e*.16,e*.1),i.fill(),wo(i,e,s,r,-e*.2,e*.36,e*.2),i.fillStyle="#e8384f",i.beginPath(),i.roundRect(-e*.7,e*.58,e*1.4,e*.24,e*.12),i.fill()),i.restore()}var rm={grunt:{skin:"#6cbf4a",tunic:"#9a6a3a",ears:1},imp:{skin:"#9adf58",tunic:"#d8603a",ears:1.3},thrower:{skin:"#62b84a",tunic:"#3a6ab8",ears:1},brute:{skin:"#4f9a3a",tunic:"#6a4a3a",ears:.9},shaman:{skin:"#7ac85a",tunic:"#7a3ab8",ears:1.1},chief:{skin:"#58a83a",tunic:"#b83a3a",ears:1},king:{skin:"#3f8a34",tunic:"#7a2ab8",ears:1}};function am(i,t,e,n){let s=rm[t.type],{lx:r,ly:a,t:o}=n;if(i.save(),i.fillStyle="rgba(20,50,90,.28)",ee(i,0,e*.9,e*.95,e*.3),i.fill(),Nn["goblin_"+t.type]){qc(i,Nn["goblin_"+t.type],e),i.restore();return}i.fillStyle=s.tunic,ee(i,0,e*.5,e*.7,e*.52),i.fill(),(t.type==="brute"||t.type==="king"||t.type==="chief")&&(i.fillStyle="#3a2a1a",i.fillRect(-e*.7,e*.45,e*1.4,e*.16),i.fillStyle="#ffd23a",i.fillRect(-e*.1,e*.43,e*.2,e*.2)),i.fillStyle=s.skin;for(let l of[-1,1])i.beginPath(),i.moveTo(l*e*.7,-e*.3),i.lineTo(l*e*(.7+.7*s.ears),-e*.7),i.lineTo(l*e*.78,e*.1),i.closePath(),i.fill();i.fillStyle=s.skin,ee(i,0,-e*.15,e*.85,e*.78),i.fill(),i.fillStyle="rgba(255,255,255,.18)",ee(i,-e*.2,-e*.45,e*.4,e*.2,-.4),i.fill();for(let l of[-1,1])i.fillStyle="#fff3a0",ee(i,l*e*.33,-e*.25,e*.23,e*.26),i.fill(),i.fillStyle="#1b1b2a",i.beginPath(),i.arc(l*e*.33+r*e*.09,-e*.25+a*e*.09,e*.12,0,Lt),i.fill(),i.strokeStyle="#2a3a14",i.lineWidth=e*.08,i.beginPath(),i.moveTo(l*e*.6,-e*.62),i.lineTo(l*e*.1,-e*.46),i.stroke();switch(i.fillStyle="#4a8a30",ee(i,0,-e*.02,e*.12,e*.09),i.fill(),i.strokeStyle="#2a3a14",i.lineWidth=e*.07,i.beginPath(),i.arc(0,e*.08,e*.3,.2,Math.PI-.2),i.stroke(),i.fillStyle="#fff",i.beginPath(),i.moveTo(-e*.18,e*.3),i.lineTo(-e*.08,e*.3),i.lineTo(-e*.13,e*.18),i.fill(),i.beginPath(),i.moveTo(e*.18,e*.3),i.lineTo(e*.08,e*.3),i.lineTo(e*.13,e*.18),i.fill(),t.type){case"grunt":i.fillStyle="#7a4a1a",i.beginPath(),i.moveTo(-e*.8,-e*.5),i.quadraticCurveTo(0,-e*1.3,e*.8,-e*.5),i.closePath(),i.fill(),i.fillStyle="#a06a2a",i.fillRect(-e*.8,-e*.55,e*1.6,e*.12);break;case"imp":i.fillStyle="#e8503a",i.beginPath(),i.moveTo(-e*.5,-e*.8),i.lineTo(-e*.35,-e*1.25),i.lineTo(-e*.15,-e*.85),i.fill(),i.beginPath(),i.moveTo(e*.5,-e*.8),i.lineTo(e*.35,-e*1.25),i.lineTo(e*.15,-e*.85),i.fill();break;case"thrower":i.fillStyle="#3a6ab8",i.beginPath(),i.moveTo(-e*.75,-e*.55),i.lineTo(0,-e*1.4),i.lineTo(e*.75,-e*.55),i.closePath(),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(0,-e*1.42,e*.15,0,Lt),i.fill(),i.fillStyle="#fff",i.strokeStyle="#bcd",i.lineWidth=e*.04,i.beginPath(),i.arc(e*.85,-e*.3+Math.sin(o*5)*e*.05,e*.3,0,Lt),i.fill(),i.stroke();break;case"brute":i.fillStyle="#8a8f9a",i.beginPath(),i.moveTo(-e*.85,-e*.35),i.quadraticCurveTo(0,-e*1.35,e*.85,-e*.35),i.closePath(),i.fill(),i.fillStyle="#f2ead0",i.beginPath(),i.moveTo(-e*.8,-e*.55),i.lineTo(-e*1.15,-e*1.05),i.lineTo(-e*.5,-e*.8),i.fill(),i.beginPath(),i.moveTo(e*.8,-e*.55),i.lineTo(e*1.15,-e*1.05),i.lineTo(e*.5,-e*.8),i.fill();break;case"shaman":i.fillStyle="#7a3ab8",i.beginPath(),i.moveTo(-e*.9,e*.1),i.quadraticCurveTo(-e*.9,-e*1.3,0,-e*1.2),i.quadraticCurveTo(e*.9,-e*1.3,e*.9,e*.1),i.quadraticCurveTo(0,-e*.65,-e*.9,e*.1),i.fill(),i.strokeStyle="#7a4a1a",i.lineWidth=e*.1,i.beginPath(),i.moveTo(e*1,e*.8),i.lineTo(e*1,-e*.9),i.stroke(),i.fillStyle=`rgba(120,255,160,${.6+.3*Math.sin(o*4)})`,i.beginPath(),i.arc(e*1,-e*1,e*.2,0,Lt),i.fill();break;case"chief":case"king":{i.fillStyle=t.type==="king"?"#ffd23a":"#d8b04a",i.beginPath(),i.moveTo(-e*.6,-e*.75),i.lineTo(-e*.62,-e*1.25),i.lineTo(-e*.3,-e*1),i.lineTo(0,-e*1.35),i.lineTo(e*.3,-e*1),i.lineTo(e*.62,-e*1.25),i.lineTo(e*.6,-e*.75),i.closePath(),i.fill(),i.fillStyle="#e8384f",i.beginPath(),i.arc(0,-e*.95,e*.09,0,Lt),i.fill(),i.fillStyle="#f4f4f8",ee(i,0,e*.2,e*.85,e*.18),i.fill();break}default:break}i.restore()}function Dc(i,t,e,n,s){i.beginPath();for(let r=0;r<10;r++){let a=s+r*Math.PI/5-Math.PI/2,o=r%2?n*.45:n;i.lineTo(t+Math.cos(a)*o,e+Math.sin(a)*o)}i.closePath(),i.fill()}var Eo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),At.setLang(e.lang),At.setGirl(e.gender==="girl"),this.save=Zo(e.save),this.base=e.base||"./",this.sound=new ci,this.sound.muted=!!this.save.muted,document.getElementById("ir-style")||document.head.append(et("style",{id:"ir-style"},Pc("ir","#4a8ad8","#1f3e7a","#ffe27a")+`
.ir-root{background:#d4e6f4}
.ir-gala{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;align-items:center;gap:calc(var(--u)*1.6);background:rgba(255,255,255,.92);border-radius:99px;padding:calc(var(--u)*1.2) calc(var(--u)*2.4);pointer-events:auto;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.4) rgba(30,60,110,.3);color:#1f3e7a;font-weight:900;font-size:calc(var(--u)*3.2);direction:ltr}
.ir-gala .bar{flex:1;height:calc(var(--u)*2.4);border-radius:99px;background:#dbe6ef;overflow:hidden}.ir-gala .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#8ae8ff,#3aa8f0)}
.ir-gala.rdy .bar i{background:linear-gradient(90deg,#ffe27a,#f0a020);animation:irpulse .8s infinite}.ir-gala.off{opacity:.6}
.ir-tip{position:absolute;left:calc(var(--u)*6);right:calc(var(--u)*6);background:#fff;color:#1f3e7a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8) calc(var(--u)*2.6);font-size:calc(var(--u)*3.2);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*2) rgba(30,60,110,.35);display:none;pointer-events:none;text-align:center}.ir-tip.show{display:block}.ir-tip b{display:block;font-size:calc(var(--u)*3.6);color:#2a78c8}
.ir-hpn{font-size:calc(var(--u)*2.2);font-weight:900;text-align:center;direction:ltr;opacity:.9}
.ir-cards{position:absolute;left:0;right:0;bottom:0;display:flex;gap:calc(var(--u)*1.4);padding:calc(var(--u)*1.4) calc(var(--u)*1.6) max(calc(var(--u)*1.6),env(safe-area-inset-bottom));box-sizing:border-box;justify-content:center;pointer-events:none;direction:ltr}
.ir-land .ir-cards{left:auto;right:0;top:calc(var(--u)*13);bottom:0;width:calc(var(--u)*36);flex-direction:column;justify-content:center;padding:calc(var(--u)*1) calc(var(--u)*1.6)}
.ir-land .ir-hc{flex:none;max-width:none;width:100%}
.ir-land .ir-gala{right:calc(var(--u)*40)}
.ir-hc{pointer-events:auto;flex:1;max-width:calc(var(--u)*34);background:linear-gradient(180deg,#4a8ad8,#1f3e7a);border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*1.2);display:flex;gap:calc(var(--u)*1.2);align-items:center;cursor:pointer;font-family:inherit;color:#fff;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,10,30,.45);position:relative}
.ir-hc.sel{border-color:#ffe27a;box-shadow:0 0 0 calc(var(--u)*.5) rgba(255,226,122,.55),0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,10,30,.45)}
.ir-hc.ko{filter:grayscale(1);opacity:.55}
.ir-hc canvas{width:calc(var(--u)*9);height:calc(var(--u)*9);flex:none;background:rgba(255,255,255,.18);border-radius:50%}
.ir-hc .c{flex:1;min-width:0;display:flex;flex-direction:column;gap:calc(var(--u)*.5);align-items:stretch}
.ir-hc b{font-size:calc(var(--u)*2.9);font-weight:900;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}
.ir-mini{height:calc(var(--u)*1.6);border-radius:99px;background:rgba(0,0,0,.45);overflow:hidden;border:calc(var(--u)*.2) solid rgba(255,255,255,.8)}
.ir-mini i{display:block;height:100%;width:100%}
.ir-mini.hp i{background:linear-gradient(180deg,#8af08a,#2fa85a)}.ir-mini.sp i{background:linear-gradient(180deg,#ffe27a,#f0a020)}
.ir-hc.rdy .ir-mini.sp{animation:irpulse .8s infinite}.ir-hc.rdy.off .ir-mini.sp{animation:none;opacity:.6}
.ir-rdy{position:absolute;top:calc(var(--u)*-2.2);left:50%;transform:translateX(-50%);background:#ffe27a;color:#3a2a00;font-weight:900;font-size:calc(var(--u)*2.4);border-radius:99px;padding:0 calc(var(--u)*1.6);border:calc(var(--u)*.3) solid #fff;display:none;white-space:nowrap}
.ir-hc.rdy .ir-rdy{display:block}
@keyframes irpulse{50%{transform:scale(1.07)}}
.ir-banner{unicode-bidi:plaintext;position:absolute;left:50%;top:38%;transform:translate(-50%,-50%) scale(.6);opacity:0;pointer-events:none;font-weight:900;font-size:calc(var(--u)*10);color:#fff;-webkit-text-stroke:calc(var(--u)*.7) rgba(10,20,50,.9);paint-order:stroke fill;white-space:nowrap;text-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5)}
.ir-banner.you{color:#ffe27a}.ir-banner.foe{color:#8af08a}
.ir-banner.go{animation:irban 1.5s ease-out}
@keyframes irban{0%{opacity:0;transform:translate(-50%,-50%) scale(.5)}15%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}25%{transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-60%) scale(1)}}
.ir-turn{font-size:calc(var(--u)*3.6);unicode-bidi:plaintext}
.ir-ff{position:absolute;bottom:calc(var(--u)*24);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3.2);font-weight:900;background:rgba(10,30,60,.7);border:calc(var(--u)*.3) solid #fff;border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3);opacity:.9;pointer-events:none;white-space:nowrap}
.ir-hero{display:flex;gap:calc(var(--u)*1.6);align-items:center;width:100%;background:rgba(255,255,255,.12);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2)}
.ir-hero canvas{width:calc(var(--u)*13);height:calc(var(--u)*13);flex:none}
.ir-hero .c{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.8)}
.ir-hero b{font-size:calc(var(--u)*4)}.ir-hero small{font-size:calc(var(--u)*2.8);opacity:.9;font-weight:700}
.ir-up{display:flex;gap:calc(var(--u)*1);flex-wrap:wrap}
.ir-upb{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);border:none;border-radius:99px;padding:calc(var(--u)*1) calc(var(--u)*2.4);color:#fff;background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a;cursor:pointer;min-height:calc(var(--u)*8)}
.ir-upb:disabled{background:#8a98a4;box-shadow:0 calc(var(--u)*.6) 0 #5a6a78;opacity:.7;cursor:default}
`)),this.root=et("div",{class:"ir-root",dir:At.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.bg=document.createElement("canvas"),this.bg.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none",this.root.append(this.bg);try{this.r3=new ur(this.root,60,96)}catch{this.r3=null}this.cv=et("canvas"),this.root.append(this.cv),this.g=this.cv.getContext("2d"),this.layer=et("div",{class:"ir-layer"}),this.root.append(this.layer),this.mode="menu",this.clock=0,this.parts=[],this.texts=[],this.trails=[],this.glow={},this.hop={},this.shake=0,this.flash={},this.ff=!1,this.aim=null,this.sel="penguin",this.armed={},this.lastSq=0,this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),Promise.all([this._fonts(),Uc(this.base,["hero_penguin","hero_fox","hero_bear","goblin_grunt","goblin_imp","goblin_thrower","goblin_brute","goblin_shaman","goblin_chief","goblin_king","bg_festival"]).then(s=>{Nn=s})]).then(()=>{Nn.bg_festival&&(this.root.style.background=`#d4e6f4 url(${Nn.bg_festival.src}) center/cover no-repeat`),this.showMenu(),this._loop()})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.cv.width=Math.round(this.cw*this.dpr),this.cv.height=Math.round(this.ch*this.dpr),this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${Math.min(this.u,6.2)}px`),this.land=this.cw>this.ch*1.35,this.root.classList.toggle("ir-land",this.land);let e=Math.min(this.u,6.2),n=e*15,s=this.land?e*9:e*26,r=this.land?e*36:0;this.sc=Math.max(2,Math.min((this.cw-r)/69,(this.ch-n-s)/105)),this.ox=(this.cw-r-60*this.sc)/2,this.oy=n+(this.ch-n-s-96*this.sc)/2,this.r3&&(this.r3.resize(this.cw,this.ch,this.dpr),this.r3.build(this.ox,this.oy,this.sc)),this._buildBg()}X(t){return this.ox+t*this.sc}Y(t){return this.oy+t*this.sc}_buildBg(){let t=this.bg;t.width=this.cv.width,t.height=this.cv.height;let e=t.getContext("2d");e.setTransform(this.dpr,0,0,this.dpr,0,0);let n=this.cw,s=this.ch,r=this.sc,a=this.ox,o=this.oy,l=7,c=()=>(l=l*16807%2147483647,l/2147483647),h=e.createLinearGradient(0,0,0,s);h.addColorStop(0,"#cfe2f3"),h.addColorStop(.5,"#e6f1fa"),h.addColorStop(1,"#d4e6f4"),Nn.bg_festival?e.clearRect(0,0,n,s):(e.fillStyle=h,e.fillRect(0,0,n,s));for(let u=0;u<60;u++)c();e.fillStyle="#e8f1fb",e.beginPath(),e.moveTo(0,s);for(let u=0;u<=n;u+=12)e.lineTo(u,s-12-Math.sin(u*.02)*8-8);e.lineTo(n,s),e.fill();for(let u of[-1,1])for(let p=0;p<3;p++){let m=u<0?a-r*(3+p*.6):a+60*r+r*(3+p*.6),x=o+r*(20+p*30);if(m<6||m>n-6)continue;let g=r*8;e.fillStyle="#1d5a44";for(let d=0;d<3;d++)e.beginPath(),e.moveTo(m,x-g+d*g*.3),e.lineTo(m-g*(.35+d*.15),x-g*.1+d*g*.3-g*.1),e.lineTo(m+g*(.35+d*.15),x-g*.1+d*g*.3-g*.1),e.fill();e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(m,x-g,r*.5,0,Lt),e.fill()}let f=(u,p)=>{let m=["#e8384f","#ffd23a","#3a8ae0","#7a3ab8","#ff8a3a","#2fa85a"][c()*6|0];e.fillStyle="#f2c9a0",e.beginPath(),e.arc(u,p,r*1.3,0,Lt),e.fill(),e.fillStyle=m,e.beginPath(),e.arc(u,p-r*.5,r*1.35,Math.PI,0),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(u,p-r*1.9,r*.4,0,Lt),e.fill(),e.fillStyle="#222",e.beginPath(),e.arc(u-r*.45,p+r*.05,r*.13,0,Lt),e.fill(),e.beginPath(),e.arc(u+r*.45,p+r*.05,r*.13,0,Lt),e.fill(),e.fillStyle=m,e.fillRect(u-r*1,p+r*1,r*2,r*1.4)};for(let u=a-r*2;u<a+60*r+r*3;u+=r*3.4)f(u+c()*r,o-r*4.1+c()*r*.6);for(let u=o;u<o+96*r;u+=r*5)a>r*5&&(f(a-r*3.4,u),f(a+60*r+r*3.4,u+r*2));if(!this.r3){let u=r*3,p=e.createLinearGradient(0,o-u,0,o+96*r+u);p.addColorStop(0,"#b87a3a"),p.addColorStop(.5,"#8a5222"),p.addColorStop(1,"#6a3a16"),e.fillStyle="rgba(0,0,0,.3)",e.beginPath(),e.roundRect(a-u+3,o-u+6,60*r+u*2,96*r+u*2,r*3.5),e.fill(),e.fillStyle=p,e.beginPath(),e.roundRect(a-u,o-u,60*r+u*2,96*r+u*2,r*3.5),e.fill(),e.strokeStyle="rgba(40,20,5,.35)",e.lineWidth=1;for(let g=1;g<3;g++)e.beginPath(),e.roundRect(a-u+g*r,o-u+g*r,60*r+u*2-g*r*2,96*r+u*2-g*r*2,r*3),e.stroke();e.fillStyle="#f4f9ff",e.beginPath(),e.roundRect(a-r*.8,o-r*.8,60*r+r*1.6,96*r+r*1.6,r*1.8),e.fill(),e.save(),e.beginPath(),e.roundRect(a,o,60*r,96*r,r*1.2),e.clip();let m=e.createLinearGradient(a,o,a+60*r*.4,o+96*r);m.addColorStop(0,"#f2fbff"),m.addColorStop(.5,"#d2eefc"),m.addColorStop(1,"#bde2f7"),e.fillStyle=m,e.fillRect(a,o,60*r,96*r),e.strokeStyle="rgba(70,130,200,.35)",e.lineWidth=r*.5,e.beginPath(),e.moveTo(a,o+96*r*.5),e.lineTo(a+60*r,o+96*r*.5),e.stroke(),e.strokeStyle="rgba(220,70,90,.3)",e.beginPath(),e.moveTo(a,o+96*r*.2),e.lineTo(a+60*r,o+96*r*.2),e.moveTo(a,o+96*r*.8),e.lineTo(a+60*r,o+96*r*.8),e.stroke(),e.strokeStyle="rgba(70,130,200,.35)",e.beginPath(),e.arc(a+60*r/2,o+96*r/2,r*9,0,Lt),e.stroke(),e.fillStyle="rgba(70,130,200,.3)",e.font=`${r*7}px system-ui`,e.textAlign="center",e.textBaseline="middle",e.fillText("\u2744",a+60*r/2,o+96*r/2);for(let g=0;g<4;g++){let d=a+(g*.3+.1)*60*r;e.fillStyle=`rgba(255,255,255,${.1+.05*(g%2)})`,e.beginPath(),e.moveTo(d,o),e.lineTo(d+r*5,o),e.lineTo(d-r*14,o+96*r),e.lineTo(d-r*19,o+96*r),e.fill()}e.lineCap="round";for(let g=0;g<70;g++){e.strokeStyle=`rgba(255,255,255,${.35+c()*.4})`,e.lineWidth=.6+c()*.8;let d=a+c()*60*r,b=o+c()*96*r,M=c()*Lt,C=r*(2+c()*7);e.beginPath(),e.moveTo(d,b),e.quadraticCurveTo(d+Math.cos(M+.5)*C*.5,b+Math.sin(M+.5)*C*.5,d+Math.cos(M)*C,b+Math.sin(M)*C),e.stroke()}for(let g=0;g<30;g++){e.strokeStyle=`rgba(110,170,215,${.12+c()*.15})`,e.lineWidth=.7;let d=a+c()*60*r,b=o+c()*96*r,M=c()*Lt,C=r*(3+c()*8);e.beginPath(),e.moveTo(d,b),e.lineTo(d+Math.cos(M)*C,b+Math.sin(M)*C),e.stroke()}let x=e.createLinearGradient(0,o,0,o+r*2.2);x.addColorStop(0,"rgba(255,255,255,.95)"),x.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=x,e.fillRect(a,o,60*r,r*2.2),e.restore()}this.bgLevel=null}_drawLevelStatic(t){let e=this.sim,n=this.sc;for(let s of e.pools){t.fillStyle="rgba(150,175,195,.75)",ee(t,this.X(s.x),this.Y(s.y),s.r*n,s.r*n*.82),t.fill(),t.fillStyle="rgba(235,245,252,.8)";for(let r=0;r<14;r++){let a=r*2.4,o=s.r*n*(.2+r%5*.14);t.beginPath(),t.arc(this.X(s.x)+Math.cos(a)*o,this.Y(s.y)+Math.sin(a)*o*.8,n*.5,0,Lt),t.fill()}t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=n*.3,ee(t,this.X(s.x),this.Y(s.y),s.r*n,s.r*n*.82),t.stroke()}for(let s of e.blocks){let r=this.X(s.x-s.hw),a=this.Y(s.y-s.hh),o=s.hw*2*n,l=s.hh*2*n;t.fillStyle="rgba(30,60,100,.28)",t.beginPath(),t.roundRect(r+2,a+n*.7,o,l,n*.5),t.fill();let c=t.createLinearGradient(0,a,0,a+l);if(c.addColorStop(0,"#ffffff"),c.addColorStop(1,"#a8d4ee"),t.fillStyle=c,t.beginPath(),t.roundRect(r,a-n*.5,o,l+n*.5,n*.6),t.fill(),t.strokeStyle="#6fa8d0",t.lineWidth=1.5,t.stroke(),t.strokeStyle="rgba(100,160,210,.7)",t.lineWidth=1,o>l)for(let h=n*4;h<o-2;h+=n*4)t.beginPath(),t.moveTo(r+h,a-n*.5),t.lineTo(r+h,a+l),t.stroke();else for(let h=n*4;h<l-2;h+=n*4)t.beginPath(),t.moveTo(r,a+h),t.lineTo(r+o,a+h),t.stroke()}}_wp(t){let e=this.cv.getBoundingClientRect();return{x:(t.clientX-e.left-this.ox)/this.sc,y:(t.clientY-e.top-this.oy)/this.sc}}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.cv.addEventListener("pointerdown",n=>{if(this.mode!=="play")return;if(this.sim.phase!=="aim"){this.ff=!0;return}let s=this._wp(n),r=On(this.sim),a=null,o=1e9;for(let l of r){let c=Math.hypot(l.x-s.x,l.y-s.y);c<l.r+3.5&&c<o&&(o=c,a=l)}a||(a=r.find(l=>l.type===this.sel)||r[0]),a&&(this.cv.setPointerCapture(n.pointerId),this.sel=a.type,this.aim={id:n.pointerId,hero:a.type,x0:s.x,y0:s.y,x:s.x,y:s.y,path:null,tp:0},this.sound.play("select"))}),this.cv.addEventListener("pointermove",n=>{if(this.aim&&this.aim.id===n.pointerId){let s=this._wp(n);this.aim.x=s.x,this.aim.y=s.y}});let e=n=>{if(!this.aim||this.aim.id!==n.pointerId)return;let s=this.aim;this.aim=null;let r=s.x-s.x0,a=s.y-s.y0,o=Math.hypot(r,a);o<2.5||this.sim.phase!=="aim"||this.fireHero(s.hero,Math.atan2(-a,-r),dr(o/fr,0,1))};this.cv.addEventListener("pointerup",e),this.cv.addEventListener("pointercancel",()=>{this.aim=null}),this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_tip(t){let e={penguin:"shield",fox:"ricochet",bear:"mend"}[t];this.tipEl.replaceChildren(et("b",{},At.t("p_"+e)),et("span",{},At.t("p_"+e+"_d"))),this.tipEl.classList.add("show"),clearTimeout(this._tipT),this._tipT=setTimeout(()=>this.tipEl&&this.tipEl.classList.remove("show"),3200)}fireHero(t,e,n){let r=this.sim.bodies.find(a=>a.type===t&&a.alive)&&this.sim.gala>=100&&!this.galaOff;vr(this.sim,t,e,n,r)&&(this.hintEl&&this.hintEl.classList.remove("show"),this.ff=!1)}_soundPill(){let t=et("button",{class:"ir-soundpill",onclick:()=>this.sound.unlock()},At.t("sound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_persist(){this.post({type:"save",save:this.save})}lvName(t){return(At.getLang()==="en"?sm:im)[t-1]}_muteBtn(){let t=et("button",{class:"ir-round","aria-label":"sound",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),t.textContent=this.save.muted?"\u{1F507}":"\u{1F50A}",this._persist()}},this.save.muted?"\u{1F507}":"\u{1F50A}");return t}showMenu(){this.mode="menu",this.layer.replaceChildren(),this.sound.setMode(!1),this.sound.setMode("player"),this.sim=xr(1),this._buildBg();let t=Math.min(this.save.unlocked,je.length);this.layer.append(et("div",{class:"ir-dim"},et("div",{class:"ir-card"},et("div",{class:"ir-logo"},At.t("title")),et("div",{class:"ir-small"},`\u{1FA99} ${At.num(this.save.coins)}`),et("button",{class:"ir-btn",onclick:()=>{this.sound.play("tap"),this.startLevel(t)}},`${At.t("play")} (${At.t("level")} ${At.num(t)})`),et("button",{class:"ir-btn dark",onclick:()=>{this.sound.play("tap"),this.showLevels()}},At.t("levels")),et("button",{class:"ir-btn dark",onclick:()=>{this.sound.play("tap"),this.showHeroes()}},At.t("heroes")),et("button",{class:"ir-btn alt",onclick:()=>this.post({type:"exit"})},At.t("exit"))))),this.layer.append(et("div",{class:"ir-top"},this._muteBtn())),this._soundPill()}showLevels(){this.layer.replaceChildren();let t=et("div",{class:"ir-lvs"});for(let e=1;e<=je.length;e++){let n=e>this.save.unlocked,s=this.save.stars[e]||0;t.append(et("button",{class:`ir-lv${n?" lock":""}`,disabled:n?!0:void 0,onclick:()=>{this.sound.play("tap"),this.startLevel(e)}},et("i",{},n?"\u{1F512}":je[e-1].boss?"\u{1F451}":At.num(e)),et("span",{},n?"":"\u2B50".repeat(s)+"\u2606".repeat(3-s))))}this.layer.append(et("div",{class:"ir-dim"},et("div",{class:"ir-card"},et("div",{class:"ir-title"},At.t("levels")),t,et("button",{class:"ir-btn dark",onclick:()=>this.showMenu()},At.t("menu")))))}_portrait(t,e=64){let n=et("canvas",{width:e,height:e}),s=n.getContext("2d");return s.translate(e/2,e/2+e*.04),Lc(s,t,e*.34,{lx:0,ly:.2,t:1,ko:!1}),n}showHeroes(){this.layer.replaceChildren();let t=et("div",{class:"ir-card"},et("div",{class:"ir-title"},At.t("upgrades")),et("div",{class:"ir-pill"},`\u{1FA99} ${At.num(this.save.coins)}`));for(let e of li){let n=this.save.up[e],s=oi[e],r=(a,o)=>{let l=n[a],c=Jo(l),h=l>=5;return et("button",{class:"ir-upb",disabled:h||this.save.coins<c?!0:void 0,onclick:()=>{this.save.coins>=c&&!h&&(this.save.coins-=c,n[a]++,this.sound.play("coin"),this._persist(),this.showHeroes())}},h?`${o} ${At.t("max")}`:`${o} ${At.num(l)} \u2192 \u{1FA99}${At.num(c)}`)};t.append(et("div",{class:"ir-hero"},this._portrait(e),et("div",{class:"c"},et("b",{},At.t(e)),et("small",{},`${At.t(s.special)}: ${At.t(s.special+"_d")}`),et("div",{class:"ir-up"},r("hp","\u2764\uFE0F"),r("atk","\u{1F4A5}")))))}t.append(et("button",{class:"ir-btn dark",onclick:()=>this.showMenu()},At.t("menu"))),this.layer.append(et("div",{class:"ir-dim"},t))}startLevel(t){this.level=t,this.sim=xr(t,{seed:(Date.now()&65535)+t,up:this.save.up}),this.mode="play",this.parts=[],this.texts=[],this.trails=[],this.glow={},this.hop={},this.ff=!1,this.aim=null,this.armed={},this.galaOff=!1,this.acc=0,this.endTimer=0,this.ended=!1,this.sel="penguin",this._buildBg(),this._levelBg=null,this.layer.replaceChildren(),this.sound.setMode(je[t-1].boss?"boss":"player"),this.coinEl=et("div",{class:"ir-pill ir-turn"},"");let e=et("button",{class:"ir-round","aria-label":At.t("pause"),onclick:()=>this.showPause()},"\u2630");this.hintEl=et("div",{class:"ir-hint"},At.t("howTo")),this.banner=et("div",{class:"ir-banner"},""),this.cards={};let n=et("div",{class:"ir-cards"});this.rowEl=n;for(let s of li){let r=et("i",{}),a=et("div",{class:"ir-hpn"},""),o=et("button",{class:"ir-hc",onclick:()=>{let l=this.sim.bodies.find(c=>c.type===s);!l||!l.alive||(this.sound.play("select"),this.sel=s,this._tip(s))}},this._portrait(s,72),et("div",{class:"c"},et("b",{},At.t(s)),et("div",{class:"ir-mini hp"},r),a));this.cards[s]={el:o,hp:r,hpn:a},n.append(o)}this.tipEl=et("div",{class:"ir-tip"}),this.galaFill=et("i",{}),this.galaEl=et("div",{class:"ir-gala",onclick:()=>{this.sim.gala>=100&&(this.galaOff=!this.galaOff,this.sound.play("tap"))}},et("span",{},"\u2744"),et("span",{},At.t("gala")),et("div",{class:"bar"},this.galaFill)),this.turnEl=et("div",{class:"ir-pill ir-turn",style:"flex-direction:column;line-height:1.15"},""),this.layer.append(et("div",{class:"ir-top"},e,this.turnEl,this.coinEl),this.hintEl,this.banner,this.tipEl,this.galaEl,n),t===1&&this.hintEl.classList.add("show"),this.ffEl=et("div",{class:"ir-ff"},At.t("ff")),this.ffEl.style.display="none",this.layer.append(this.ffEl),this._soundPill(),this._banner("you")}showPause(){this.mode==="play"&&(this.mode="pause",this.pauseEl=et("div",{class:"ir-dim"},et("div",{class:"ir-card"},et("div",{class:"ir-title"},At.t("pause")),et("button",{class:"ir-btn",onclick:()=>{this.pauseEl.remove(),this.mode="play",this.last=performance.now()}},At.t("continue")),et("button",{class:"ir-btn dark",onclick:()=>this.startLevel(this.level)},At.t("restart")),et("button",{class:"ir-btn dark",onclick:()=>this.showMenu()},At.t("menu")))),this.layer.append(this.pauseEl))}_banner(t){let e=this.banner;e&&(e.className=`ir-banner ${t}`,e.textContent=t==="you"?At.t("yourTurn"):At.t("foeTurn"),e.offsetWidth,e.classList.add("go"),this.sound.play(t==="you"?"banner":"enemyBanner"))}_result(t){let e=this.sim;this.mode="result";let n=!1;if(t){let s=this.level;this.save.stars[s]=Math.max(this.save.stars[s]||0,e.stars),this.save.unlocked=Math.max(this.save.unlocked,Math.min(je.length,s+1)),this.save.coins+=e.coins,this._persist(),this.sound.play("win");for(let r=0;r<40;r++)this._spark(Math.random()*60,Math.random()*96*.6,"#ffe27a","star");this.layer.append(et("div",{class:"ir-dim"},et("div",{class:"ir-card"},et("div",{class:"ir-title"},At.t("won")),et("div",{class:"ir-small"},At.t("win")),et("div",{class:"ir-stars"},...[1,2,3].map(r=>et("span",{class:r<=e.stars?"":"off"},"\u2B50"))),et("div",{class:"ir-pill"},`\u{1FA99} +${At.num(e.coins)}`),s<je.length?et("button",{class:"ir-btn",onclick:()=>this.startLevel(s+1)},At.t("next")):null,et("button",{class:"ir-btn dark",onclick:()=>this.startLevel(s)},At.t("retry")),et("button",{class:"ir-btn dark",onclick:()=>this.showMenu()},At.t("menu")))))}else this.sound.play("lose"),this.layer.append(et("div",{class:"ir-dim"},et("div",{class:"ir-card"},et("div",{class:"ir-title"},At.t("lost")),et("div",{class:"ir-small"},At.t("lostText")),et("button",{class:"ir-btn",onclick:()=>this.startLevel(this.level)},At.t("retry")),et("button",{class:"ir-btn dark",onclick:()=>this.showMenu()},At.t("menu")))))}_spark(t,e,n,s="snow",r=1){for(let a=0;a<r;a++){let o=Math.random()*Lt,l=4+Math.random()*14;this.parts.push({x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-4,life:0,max:.6+Math.random()*.6,kind:s,color:n,size:.5+Math.random()*.8,rot:Math.random()*6})}}_text(t,e,n,s="#fff",r=1){this.texts.push({x:t,y:e,text:n,color:s,size:r,t:0})}_ring(t,e,n,s){this.parts.push({x:t,y:e,vx:0,vy:0,life:0,max:.55,kind:"ring",color:s,size:n})}_events(t){let e=this.sound,n=performance.now();for(let s of t)switch(s.t){case"launch":e.play("whoosh",s.power),this._spark(s.x,s.y,"#fff","snow",6),s.special&&(e.play("special"),this._ring(s.x,s.y,14,"#ffe27a"));break;case"hit":e.play("hit"),this._ring(s.x,s.y,4+Math.min(6,s.v/8),"#fff"),this._spark(s.x,s.y,"#ffe27a","star",4),this.shake=Math.max(this.shake,Math.min(1,s.v/45));break;case"crystal":e.play("crystal",s.v/40),this.glow[s.id]=1,this._spark(s.x,s.y,"#9fe8ff","star",3);break;case"wall":e.play("wall",s.v/40),s.v>22&&this._spark(s.x,s.y,"#fff","snow",5);break;case"chain":e.play("chain"),this._spark(s.x,s.y,"#ffd23a","star",6),this._text(s.x,s.y-3,"\u2728","#fff",1.2);break;case"bump":e.play("bump");break;case"dmg":this._text(s.x,s.y,`-${s.v}`,s.side==="foe"?"#fff3a0":"#ff7a7a",s.v>14?1.4:1),s.side==="hero"&&e.play("hurt");break;case"puff":e.play("squeak"),e.play("puff"),this._spark(s.x,s.y,"#ffe27a","star",s.boss?40:14),this._spark(s.x,s.y,"#fff","snow",10),this._ring(s.x,s.y,s.r*2.5,"#ffe27a"),this.shake=Math.max(this.shake,s.boss?1:.4);break;case"wave":e.play(s.kind==="stomp"?"stomp":"wave"),this._ring(s.x,s.y,s.rad,s.kind==="flame"?"#ff8a3a":s.kind==="slam"?"#ffe27a":s.kind==="stomp"?"#ff6a6a":"#9fe8ff"),this._spark(s.x,s.y,"#fff","snow",16),this.shake=Math.max(this.shake,.8);break;case"special":this._ring(s.x,s.y,10,"#ffe27a");break;case"throw":e.play("throw");break;case"splat":e.play("splat"),this._spark(s.x,s.y,"#fff","snow",8);break;case"heal":e.play("heal"),this._text(s.x,s.y-3,"+","#8af08a",1.4),this._spark(s.x,s.y,"#8af08a","star",5);break;case"foeMove":this.hop[s.id]=.35,n-this.lastSq>120&&(this.lastSq=n,e.play("squeak"));break;case"telegraph":this._ring(s.x,s.y,17,"#ff6a6a"),this._text(s.x,s.y-8,"\u2757","#fff",1.6);break;case"spawn":this._spark(s.x,s.y,"#fff","snow",10),e.play("puff");break;case"stunned":this._text(s.x,s.y-3,"\u{1F4AB}","#fff",1.4);break;case"burn":this._text(s.x,s.y-3,"\u{1F525}","#fff",1.2);break;case"heroKO":this._text(s.x,s.y-3,`\u{1F4A4} ${At.t("ko")}`,"#fff",1.2),e.play("lose");break;case"phase":s.phase==="enemy"?(this._banner("foe"),e.setMode("enemy")):(this._banner("you"),e.setMode(je[this.level-1].boss?"boss":"player"),this.ff=!1);break;case"won":this.endTimer=1.1,this.ended="won";break;case"lost":this.endTimer=1.1,this.ended="lost";break;default:break}}_loop(){let t=e=>{if(!this.root.isConnected)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.mode==="play"?this._update(n):this.mode!=="pause"&&(this.clock+=n,this._fx(n)),this._draw(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}_fx(t){for(let e of this.parts)e.life+=t,e.x+=e.vx*t,e.y+=e.vy*t,e.kind!=="ring"&&(e.vy+=10*t,e.vx*=.98);this.parts=this.parts.filter(e=>e.life<e.max);for(let e of this.texts)e.t+=t;this.texts=this.texts.filter(e=>e.t<1.1);for(let e of Object.keys(this.glow))this.glow[e]-=t*3,this.glow[e]<=0&&delete this.glow[e];for(let e of Object.keys(this.hop))this.hop[e]-=t,this.hop[e]<=0&&delete this.hop[e];this.shake=Math.max(0,this.shake-t*2.5),this.trails=this.trails.filter(e=>this.clock-e.c<1.4)}_update(t){let e=this.sim;if(this.clock+=t,e.phase!=="won"&&e.phase!=="lost"){this.acc+=t*(this.ff&&e.phase!=="aim"?2.6:1);let s=0;for(;this.acc>=Ve&&s++<40;)if(this.acc-=Ve,yr(e),e.phase==="aim"){this.acc=0;break}}this._events(Wo(e)),this._fx(t);for(let s of e.bodies)s.alive&&s.kind!=="crystal"&&(s.vx||s.vy)&&Math.hypot(s.vx,s.vy)>6&&s.kind==="hero"&&this.trails.push({x:s.x,y:s.y,c:this.clock,r:s.r});if(this.ended&&(this.endTimer-=t,this.endTimer<=0)){let s=this.ended==="won";this.ended=!1,this._result(s)}let n=this.aim;if(n&&e.phase==="aim"){let s=n.x-n.x0,r=n.y-n.y0,a=Math.hypot(s,r);a>=2.5&&this.clock-n.tp>.04?(n.tp=this.clock,e.bodies.find(l=>l.type===n.hero&&l.alive)&&(n.path=Ko(e,n.hero,Math.atan2(-r,-s),dr(a/fr,0,1),e.gala>=100&&!this.galaOff))):a<2.5&&(n.path=null)}this.turnEl.replaceChildren(et("small",{style:"font-size:.62em;opacity:.8;font-weight:700"},`${At.t("level")} ${At.num(this.level)} \xB7 ${At.t("turnw")} ${At.num(e.turn)}`),et("span",{},e.phase==="enemy"?`\u{1F47A} ${At.t("foeTurn")}`:`\u26F8\uFE0F ${At.t("yourTurn")}`)),this.coinEl.textContent=`\u{1F47A} \xD7 ${At.num(rn(e).length)}`;{let s=this.land?10:(this.rowEl?this.rowEl.offsetHeight:90)+8;this.galaEl.style.bottom=`${s}px`,this.tipEl.style.bottom=`${s+this.galaEl.offsetHeight+8}px`}{let s=e.gala>=100;s&&!this._galaWas&&this.sound.play("ready"),this._galaWas=s,this.galaFill.style.width=`${Math.min(100,e.gala)}%`,this.galaEl.classList.toggle("rdy",s),this.galaEl.classList.toggle("off",s&&this.galaOff)}this.ffEl.style.display=e.phase==="shot"||e.phase==="enemy"?"block":"none";for(let s of li){let r=this.cards[s],a=e.bodies.find(o=>o.type===s);r.hp.style.width=`${Math.max(0,a.hp/a.maxHp*100)}%`,r.hpn.textContent=`${At.num(Math.max(0,Math.ceil(a.hp)))} / ${At.num(a.maxHp)}`,r.el.classList.toggle("sel",this.sel===s&&a.alive),r.el.classList.toggle("ko",!a.alive)}}_draw(){let t=this.g;t.setTransform(this.dpr,0,0,this.dpr,0,0),this.r3?(t.clearRect(0,0,this.cw,this.ch),this.r3.render(this.clock)):t.drawImage(this.bg,0,0,this.cw,this.ch);let e=this.sim;if(!e)return;let n=this.sc;t.save(),this.shake>0&&this.mode==="play"&&t.translate((Math.random()-.5)*this.shake*6,(Math.random()-.5)*this.shake*6),t.save(),t.beginPath(),t.roundRect(this.ox,this.oy,60*n,96*n,n*1.2),t.clip(),this._drawLevelStatic(t);for(let r of this.trails){let a=1-(this.clock-r.c)/1.4;t.fillStyle=`rgba(255,255,255,${.55*a})`,t.beginPath(),t.arc(this.X(r.x),this.Y(r.y)+r.r*n*.6,r.r*n*.45,0,Lt),t.fill(),t.fillStyle=`rgba(120,170,215,${.25*a})`,t.beginPath(),t.arc(this.X(r.x),this.Y(r.y)+r.r*n*.6,r.r*n*.7,0,Lt),t.fill()}t.restore(),this.aim&&e.phase==="aim"&&this._drawAim(t,e);let s=e.bodies.filter(r=>r.alive).sort((r,a)=>r.y-a.y);for(let r of s){let a=this.X(r.x),o=this.Y(r.y);if(r.kind==="crystal"){this._crystal(t,r,a,o);continue}let l=Math.hypot(r.vx,r.vy),c=l>3?r.vx/l:(r.kind==="foe",0),h=l>3?r.vy/l:r.kind==="foe"?.8:-.6,f=this.hop[r.id]?Math.sin((1-this.hop[r.id]/.35)*Math.PI)*n*1.1:0,u=1+Math.min(.12,l/600);t.save(),t.translate(a,o-f-(r.kind==="hero",0));let p=r.r*n*1.15;if(t.rotate(Math.atan2(r.vx,-r.vy)*0+Math.sin(this.clock*9+r.id)*Math.min(.15,l/400)),t.scale(1/u,u),r.kind==="hero"?Lc(t,r.type,p,{lx:c,ly:h,t:this.clock,ko:!1}):am(t,r,p,{lx:c,ly:h,t:this.clock}),t.restore(),r.kind==="hero"&&this.sel===r.type&&e.phase==="aim"&&(t.strokeStyle="rgba(255,226,122,.9)",t.lineWidth=2.5,t.setLineDash([5,4]),t.lineDashOffset=-this.clock*12,ee(t,a,o+p*.1,p*1.25,p*1.15),t.stroke(),t.setLineDash([]),e.gala>=100&&!this.galaOff&&(t.fillStyle="#ffe27a",Dc(t,a,o-p*1.5-Math.sin(this.clock*5)*2,p*.38,this.clock))),r.kind==="foe"){let m=Math.max(p*1.8,n*4),x=o-p*1.6-f,g=dr(r.hp/r.maxHp,0,1);t.fillStyle="rgba(0,0,0,.5)",t.beginPath(),t.roundRect(a-m/2-1,x-1,m+2,n*1.1+2,4),t.fill(),t.fillStyle=g>.5?"#6ae08a":g>.25?"#f0c02a":"#e8564a",t.beginPath(),t.roundRect(a-m/2,x,m*g,n*1.1,3),t.fill(),r.stun>0&&(t.font=`${n*2.2}px system-ui`,t.textAlign="center",t.fillText("\u{1F4AB}",a,x-3)),r.burn>0&&(t.font=`${n*2.2}px system-ui`,t.textAlign="center",t.fillText("\u{1F525}",a+m/2,x-3)),r.ai==="boss"&&(t.font=`900 ${n*2.2}px Tajawal, system-ui`,t.textAlign="center",t.fillStyle="#ffe27a",t.strokeStyle="rgba(0,0,0,.7)",t.lineWidth=3,t.strokeText("\u{1F451}",a,x-4),t.fillText("\u{1F451}",a,x-4))}else{let m=p*1.7,x=o+p*1.15,g=dr(r.hp/r.maxHp,0,1);t.fillStyle="rgba(0,0,0,.45)",t.beginPath(),t.roundRect(a-m/2-1,x-1,m+2,n*.9+2,3),t.fill(),t.fillStyle="#6ae08a",t.beginPath(),t.roundRect(a-m/2,x,m*g,n*.9,3),t.fill()}}for(let r of e.proj)t.fillStyle="#fff",t.strokeStyle="#9fc4e0",t.lineWidth=2,t.beginPath(),t.arc(this.X(r.x),this.Y(r.y),n*1,0,Lt),t.fill(),t.stroke();for(let r of this.parts){let a=r.life/r.max,o=this.X(r.x),l=this.Y(r.y);r.kind==="ring"?(t.strokeStyle=r.color,t.globalAlpha=1-a,t.lineWidth=n*.7*(1-a),t.beginPath(),t.arc(o,l,r.size*n*(.2+.8*a),0,Lt),t.stroke(),t.globalAlpha=1):r.kind==="star"?(t.globalAlpha=1-a,t.fillStyle=r.color,Dc(t,o,l,n*r.size*1.1,r.rot+r.life*6),t.globalAlpha=1):(t.globalAlpha=1-a,t.fillStyle=r.color,t.beginPath(),t.arc(o,l,n*r.size*.6,0,Lt),t.fill(),t.globalAlpha=1)}t.restore(),this._lights(t),t.textAlign="center",t.textBaseline="alphabetic";for(let r of this.texts){let a=r.t/1.1;t.globalAlpha=1-a*a,t.font=`900 ${n*3.2*r.size}px Tajawal, system-ui`,t.fillStyle=r.color,t.strokeStyle="rgba(20,30,70,.9)",t.lineWidth=n*.7;let o=this.X(r.x),l=this.Y(r.y)-a*n*6;t.strokeText(r.text,o,l),t.fillText(r.text,o,l)}t.globalAlpha=1}_lights(t){let e=this.sc,n=e*3,s=22;for(let r=0;r<s;r++){let a=r/s,o=this.ox-n+a*(60*e+n*2);for(let l of[this.oy-n*.5,this.oy+96*e+n*.5]){let c=Math.sin(this.clock*3+r*1.3)>-.3;t.fillStyle=c?["#ff5a6a","#ffd23a","#5ae0ff","#8af08a"][r%4]:"rgba(255,255,255,.35)",t.beginPath(),t.arc(o,l,e*.55,0,Lt),t.fill(),c&&(t.globalAlpha=.25,t.beginPath(),t.arc(o,l,e*1.2,0,Lt),t.fill(),t.globalAlpha=1)}}}_crystal(t,e,n,s){let r=e.r*this.sc*1.1,a=this.glow[e.id]||0;t.fillStyle="rgba(20,50,90,.3)",ee(t,n,s+r*.85,r*.95,r*.3),t.fill(),a>0&&(t.fillStyle=`rgba(160,240,255,${.5*a})`,t.beginPath(),t.arc(n,s,r*(1.4+.3*(1-a)),0,Lt),t.fill());let o=[];for(let c=0;c<6;c++){let h=c/6*Lt-Math.PI/2,f=r*(c%2?.85:1.1);o.push([n+Math.cos(h)*f*.85,s+Math.sin(h)*f-r*.1])}let l=t.createLinearGradient(n-r,s-r,n+r,s+r);l.addColorStop(0,"#e8fcff"),l.addColorStop(.5,"#6fd0f0"),l.addColorStop(1,"#2a7ac0"),t.fillStyle=l,t.beginPath(),o.forEach(([c,h],f)=>f?t.lineTo(c,h):t.moveTo(c,h)),t.closePath(),t.fill(),t.strokeStyle="#e8fcff",t.lineWidth=2,t.stroke(),t.fillStyle="rgba(255,255,255,.45)",t.beginPath(),t.moveTo(n,s-r*1),t.lineTo(o[1][0],o[1][1]),t.lineTo(n,s-r*.1),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=1.2,t.beginPath();for(let c of o)t.moveTo(n,s-r*.1),t.lineTo(c[0],c[1]);t.stroke()}_drawAim(t,e){let n=this.aim,s=e.bodies.find(d=>d.type===n.hero&&d.alive);if(!s)return;let r=n.x-n.x0,a=n.y-n.y0,o=Math.hypot(r,a),l=this.X(s.x),c=this.Y(s.y),h=this.sc;if(o<.01)return;let f=Math.min(o,fr),u=r/o,p=a/o,m=l+u*f*h,x=c+p*f*h,g=f/fr;if(t.strokeStyle=`hsl(${120-g*120},90%,55%)`,t.lineWidth=h*.9,t.lineCap="round",t.beginPath(),t.moveTo(l,c),t.lineTo(m,x),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(m,x,h*1.3,0,Lt),t.fill(),t.strokeStyle=`hsl(${120-g*120},90%,45%)`,t.lineWidth=3,t.stroke(),n.path&&n.path.length>1){t.fillStyle="rgba(30,70,130,.85)";let d=0,b=n.path[0];for(let M=1;M<n.path.length;M++){let C=n.path[M],D=Math.hypot(C.x-b.x,C.y-b.y),S=Math.max(1,Math.round(D/2.4));for(let w=1;w<=S;w++){let L=w/S,_=this.X(b.x+(C.x-b.x)*L),y=this.Y(b.y+(C.y-b.y)*L);d++,t.globalAlpha=Math.max(.25,1-d/40),t.beginPath(),t.arc(_,y,h*.5,0,Lt),t.fill()}C.bounce&&(t.globalAlpha=1,t.strokeStyle="#ff8a3a",t.lineWidth=2,t.beginPath(),t.arc(this.X(C.x),this.Y(C.y),h*1.1,0,Lt),t.stroke()),b=C}t.globalAlpha=1,t.strokeStyle="#ff5a6a",t.lineWidth=3,t.beginPath(),t.arc(this.X(b.x),this.Y(b.y),h*1.3,0,Lt),t.stroke()}}pause(){this.sound.suspend(),this.mode==="play"&&this.showPause()}dispose(){cancelAnimationFrame(this.raf),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},To={start(i,t,e){let n=new Eo(i,t||{},e);return To.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.IceRink=To;var Sm=To;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
