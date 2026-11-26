(()=>{function fc(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var _e=100,de=160,Yi={balloon:{hp:3,r:5.5,speed:9,score:100,fire:4.5},umbrella:{hp:7,r:6.5,speed:8,score:220,fire:3.6},gyro:{hp:7,r:6,speed:16,score:260,fire:2.6},glider:{hp:4,r:5,speed:30,score:160,fire:0},cage:{hp:6,r:6,speed:9,score:300,fire:0},thief:{hp:5,r:5.5,speed:18,score:240,fire:0},boss:{hp:150,r:17,speed:6,score:5e3,fire:1.3}};var Dr=["spread","pierce","rapid"],vs=[{id:"engine",cost:[60,120,200]},{id:"tank",cost:[50,110,190]},{id:"power",cost:[80,150,240]},{id:"armor",cost:[70,140,220]},{id:"magnet",cost:[40,90,160]},{id:"storm",cost:[90,180,300]}],ys=[{id:"lagoon",cost:0},{id:"royal",cost:60},{id:"grape",cost:90},{id:"clover",cost:90},{id:"cherry",cost:140},{id:"snowbird",cost:180},{id:"midnight",cost:220},{id:"sunny",cost:120}];function yh(i,t=0,e=1,n=!1){let s=fc(e*7919+i*104729+t*31),r=[],a=(l,h,d,p={})=>r.push({t:l,type:h,x:d,...p}),o=(l,h,d,p,u,m)=>{for(let x=0;x<d;x++)a(l+x*p,h,u+x*m)},c=n?0:t;if(i===1){o(2,"balloon",3,1.6,25,25),o(10,"balloon",4,1.2,15,23),a(18,"umbrella",50),o(22,"balloon",2,1.4,30,40),a(27,"cage",70,{bird:"robin"}),a(31,"gyro",30),o(36,"glider",3,.9,20,30),a(42,"umbrella",25),a(42.8,"umbrella",75),a(47,"gyro",70),a(49,"balloon",50),a(52,"capsule",50,{kind:qr(s,Dr)});for(let l=0;l<c;l++)a(14+l*9,"gyro",20+s()*60),a(20+l*7,"glider",20+s()*60)}else if(i===2){o(2,"glider",3,.8,25,25),a(7,"umbrella",50),o(10,"balloon",5,1,10,20),a(17,"cage",30,{bird:"jay"}),a(21,"gyro",70),a(23,"gyro",30),a(27,"thief",20),a(28.5,"thief",80),o(32,"balloon",3,1.3,20,30),a(38,"capsule",50,{kind:qr(s,Dr)}),o(40,"glider",4,.7,15,23),a(46,"umbrella",30),a(46,"umbrella",70),a(50,"gyro",50);for(let l=0;l<c;l++)a(12+l*8,"gyro",15+s()*70),a(25+l*6,"umbrella",15+s()*70)}else{o(2,"balloon",4,1,15,22),a(8,"cage",50,{bird:"canary"}),a(11,"gyro",25),a(11,"gyro",75),o(16,"glider",4,.7,20,20),a(22,"umbrella",50),a(26,"capsule",50,{kind:qr(s,Dr)}),o(28,"balloon",3,1.2,20,30),a(34,"thief",50),a(40,"boss",50),a(52,"glider",20),a(53,"glider",80),a(60,"gyro",50);for(let l=0;l<c;l++)a(30+l*10,"gyro",20+s()*60)}return r.sort((l,h)=>l.t-h.t)}var qr=(i,t)=>t[Math.floor(i()*t.length)];function Cs(i,t){return Math.max(0,Math.min(3,(i.up&&i.up[t])|0))}function Ch(i,t=!1){let e=n=>Cs(i,n);return{maxHp:(100+25*e("armor"))*(t?1.5:1),follow:9+1.6*e("engine"),interval:.24/(1+.14*e("tank")),damage:1+.15*e("power"),magnet:9+6*e("magnet"),storms:1+e("storm"),paint:i.paint||"lagoon"}}var xs=class{constructor(t,e=1,n=!1){this.save=t||{},this.easy=n,this.seed=e,this.r=fc(e),this.stats=Ch(this.save,n),this.stage=1,this.loop=0,this.px=_e/2,this.py=de-30,this.hp=this.stats.maxHp,this.inv=0,this.storms=this.stats.storms,this.score=0,this.feathers=0,this.pearls=0,this.combo=0,this.comboT=0,this.mult=1,this.weapon=null,this.weaponT=0,this.wings=[],this.bullets=[],this.eb=[],this.enemies=[],this.pickups=[],this.tank=1,this.fireT=0,this.id=0,this.state="play",this.ranks=[],this.sd=null,this._startStage(1)}_startStage(t){this.stage=t,this.events=yh(t,this.loop,this.seed+this.loop*17,this.easy),this.ei=0,this.t=0,this.sd={spawned:0,popped:0,lost:0,hp0:this.hp,name:t},this.bossAlive=!1,this.clearT=0,this.stageLen=Math.max(...this.events.map(e=>e.t))+4}get stageCount(){return 3}get progress(){return Math.min(1,this.t/this.stageLen)}get thief(){let t=this.enemies.find(e=>e.type==="thief"&&!e.gone);return t?{k:Math.max(0,Math.min(1,(t.y+8)/(de+18))),x:t.x,y:t.y}:null}_id(){return++this.id}_spawn(t){let e=Yi[t.type],n=(1+.35*this.loop)*(this.easy?.7:1),s={id:this._id(),type:t.type,x:t.x,y:t.type==="boss"?-20:-8,t:0,hp:Math.ceil(e.hp*n),hp0:Math.ceil(e.hp*n),r:e.r,fireT:1+this.r()*1.5,bird:t.bird||null,dir:this.r()<.5?-1:1,x0:t.x};this.enemies.push(s),this.sd.spawned++}_shootAt(t,e=28,n=0){let s=this.px-t.x,r=this.py-t.y,a=Math.atan2(r,s)+n,o=e*(1+.1*this.loop)*(this.easy?.7:1);this.eb.push({id:this._id(),x:t.x,y:t.y+t.r*.4,vx:Math.cos(a)*o,vy:Math.sin(a)*o,r:1.6})}step(t,e={}){var h,d,p;let n=[];if(this.state!=="play")return n;this.t+=t;let s=(h=e.tx)!=null?h:this.px,r=(d=e.ty)!=null?d:this.py,a=1-Math.exp(-this.stats.follow*t);for(this.px+=(Math.max(6,Math.min(_e-6,s))-this.px)*a,this.py+=(Math.max(24,Math.min(de-8,r))-this.py)*a,this.inv>0&&(this.inv-=t);this.ei<this.events.length&&this.events[this.ei].t<=this.t;){let u=this.events[this.ei++];u.type==="capsule"?this.pickups.push({id:this._id(),kind:"capsule",cap:u.kind,x:u.x,y:-6,vy:14}):(this._spawn(u),u.type==="boss"?(this.bossAlive=!0,n.push({type:"boss"})):u.type==="thief"&&n.push({type:"thief"}))}let o=!!e.fire&&this.tank>.02;o?this.tank=Math.max(0,this.tank-t*.35):this.tank=Math.min(1,this.tank+t*.5);let c=this.weapon==="rapid"?.55:1,l=this.stats.interval*c*(o?.62:1);if(this.fireT-=t,this.fireT<=0){this.fireT=l;let u=this.stats.damage*(this.weapon==="pierce"?1.6:1),m=(x,g=0)=>this.bullets.push({id:this._id(),x:this.px+g,y:this.py-5,vx:Math.sin(x)*90,vy:-Math.cos(x)*90,dmg:u,pierce:this.weapon==="pierce"?3:0,r:this.weapon==="pierce"?2.6:1.7,hit:new Set,kind:"bubble"});this.weapon==="spread"?(m(0),m(.22),m(-.22)):(m(0,-1.6),m(0,1.6)),n.push({type:"shoot"})}this.weaponT>0&&(this.weaponT-=t,this.weaponT<=0&&(this.weapon=null)),this.wings.forEach((u,m)=>{let x=m===0?-1:1;u.x=this.px+x*10,u.y=this.py+2+Math.sin(this.t*4+m)*.8,u.t-=t;let g=this._nearest(u.x,u.y);if(u.type==="robin"&&u.t<=0&&g)u.t=.9,this.bullets.push({id:this._id(),x:u.x,y:u.y-3,vx:0,vy:-50,dmg:1.4,pierce:0,r:1.6,hit:new Set,kind:"homing",home:!0}),n.push({type:"wingshot",bird:"robin"});else if(u.type==="jay"&&u.t<=0&&g){u.t=.45;let f=Math.atan2(g.y-u.y,g.x-u.x);this.bullets.push({id:this._id(),x:u.x,y:u.y,vx:Math.cos(f)*95,vy:Math.sin(f)*95,dmg:.9,pierce:0,r:1.3,hit:new Set,kind:"dart"}),n.push({type:"wingshot",bird:"jay"})}else u.type==="canary"&&u.t<=0&&(u.t=6,this.hp=Math.min(this.stats.maxHp,this.hp+6),n.push({type:"heal",x:this.px,y:this.py}))});for(let u of this.bullets){if(u.home){let m=this._nearest(u.x,u.y);if(m){let x=Math.atan2(m.y-u.y,m.x-u.x),g=Math.atan2(u.vy,u.vx),f=x-g;for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;let I=g+Math.max(-6*t,Math.min(6*t,f));u.vx=Math.cos(I)*60,u.vy=Math.sin(I)*60}}u.x+=u.vx*t,u.y+=u.vy*t}this.bullets=this.bullets.filter(u=>u.y>-8&&u.y<de+8&&u.x>-8&&u.x<_e+8);for(let u of this.enemies)this._moveEnemy(u,t,n);for(let u of this.bullets)for(let m of this.enemies)m.hp<=0||u.dead||u.hit.has(m.id)||Math.hypot(u.x-m.x,u.y-m.y)<u.r+m.r*.8&&(u.hit.add(m.id),m.hp-=u.dmg,n.push({type:"hit",x:m.x,y:m.y,dmg:u.dmg}),m.type==="umbrella"&&u.y<m.y-m.r*.2&&m.hp>m.hp0*.5&&(m.hp+=u.dmg*.5),u.pierce>0?u.pierce--:u.dead=!0,m.hp<=0&&this._pop(m,n));this.bullets=this.bullets.filter(u=>!u.dead),this.enemies=this.enemies.filter(u=>u.hp>0&&u.y<de+14&&!u.gone);for(let u of this.eb)u.x+=u.vx*t,u.y+=u.vy*t;for(let u of this.eb)!u.dead&&Math.hypot(u.x-this.px,u.y-this.py)<u.r+3.6&&(u.dead=!0,this._hurt(this.easy?6:10,n,u.x,u.y));this.eb=this.eb.filter(u=>!u.dead&&u.y<de+6&&u.y>-8&&u.x>-8&&u.x<_e+8);for(let u of this.enemies)u.hp>0&&Math.hypot(u.x-this.px,u.y-this.py)<u.r*.8+3.2&&u.type!=="cage"&&(u.type!=="boss"&&(u.hp=0),this._hurt(this.easy?10:16,n,u.x,u.y),u.type!=="boss"&&this._pop(u,n,!0));this.enemies=this.enemies.filter(u=>u.hp>0);for(let u of this.pickups){u.y+=((p=u.vy)!=null?p:16)*t;let m=Math.hypot(u.x-this.px,u.y-this.py);m<this.stats.magnet&&u.kind!=="capsule"&&u.kind!=="cage"&&(u.x+=(this.px-u.x)*Math.min(1,t*6),u.y+=(this.py-u.y)*Math.min(1,t*6)),m<6&&this._collect(u,n)}return this.pickups=this.pickups.filter(u=>!u.got&&u.y<de+8),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0,this.mult=1,n.push({type:"combo",mult:1}))),this.easy&&(this.hp=Math.min(this.stats.maxHp,this.hp+t*.8)),this.ei>=this.events.length&&this.t>this.stageLen-2&&this.enemies.length===0&&!this.bossAlive&&(this.clearT+=t,this.clearT>1.5&&this._endStage(n)),this.hp<=0&&this.state==="play"&&(this.hp=0,this.state="dead",n.push({type:"dead"})),n}_moveEnemy(t,e,n){t.t+=e;let s=Yi[t.type],r=s.speed*(1+.1*this.loop)*(this.easy?.75:1);if(t.type==="balloon"||t.type==="umbrella"||t.type==="cage")t.y+=r*e,t.x=t.x0+Math.sin(t.t*1.4+t.id)*6,t.type!=="cage"&&(t.fireT-=e,t.fireT<=0&&t.y>4&&t.y<de-40&&(t.fireT=s.fire*(1+this.r()),this._shootAt(t,24),n.push({type:"eshoot"})));else if(t.type==="gyro")t.y+=(t.y<38?r:r*.18)*e,t.x+=Math.sin(t.t*1.8)*22*e*t.dir,t.fireT-=e,t.fireT<=0&&t.y>4&&(t.fireT=s.fire,this._shootAt(t,30,-.15),this._shootAt(t,30,.15),n.push({type:"eshoot"}));else if(t.type==="glider")t.y+=r*e,t.x+=Math.cos(t.t*3)*12*e*t.dir+(this.px-t.x)*.25*e;else if(t.type==="thief")t.y+=r*.6*e,t.x+=(this.px-t.x)*.9*e;else if(t.type==="boss"){t.y<30?t.y+=r*3*e:t.y=30+Math.sin(t.t*.6)*3,t.x=_e/2+Math.sin(t.t*.5)*30,t.fireT-=e;let a=t.hp<t.hp0*.34?3:t.hp<t.hp0*.67?2:1;if(t.fireT<=0&&t.y>20){t.fireT=s.fire/(a===3?1.5:1);for(let o=-a;o<=a;o++)this._shootAt(t,22,o*.22);n.push({type:"eshoot"}),a>=2&&Math.floor(t.t)%7===0&&!t.summoned&&(t.summoned=!0,this._spawn({type:"glider",x:20}),this._spawn({type:"glider",x:80})),Math.floor(t.t)%7!==0&&(t.summoned=!1)}}t.y>de+10&&(t.gone=!0)}_pop(t,e,n=!1){this.sd.popped++,this.combo++,this.comboT=3;let s=Math.min(5,1+Math.floor(this.combo/5));s!==this.mult&&(this.mult=s,e.push({type:"combo",mult:s}));let r=Yi[t.type].score*this.mult;this.score+=r,e.push({type:"pop",x:t.x,y:t.y,kind:t.type,pts:r});let a=t.type==="boss"?12:1+(this.r()<.4?1:0);for(let o=0;o<a;o++)this.pickups.push({id:this._id(),kind:"pearl",x:t.x+(this.r()-.5)*8,y:t.y+(this.r()-.5)*4,vy:16});if(this.r()<(t.type==="boss"?1:.3))for(let o=0;o<(t.type==="boss"?20:1);o++)this.pickups.push({id:this._id(),kind:"feather",x:t.x+(this.r()-.5)*12,y:t.y+(this.r()-.5)*6,vy:12});if(t.type==="thief"){for(let o=0;o<6;o++)this.pickups.push({id:this._id(),kind:"feather",x:t.x+(this.r()-.5)*14,y:t.y+(this.r()-.5)*6,vy:12});e.push({type:"loot",x:t.x,y:t.y})}t.type==="cage"&&!n&&this.pickups.push({id:this._id(),kind:"cage",bird:t.bird||"robin",x:t.x,y:t.y,vy:14}),t.type==="boss"&&(this.bossAlive=!1,e.push({type:"bossdown"}))}_collect(t,e){t.got=!0,t.kind==="pearl"?(this.pearls++,this.score+=10*this.mult,e.push({type:"pearl",x:t.x,y:t.y})):t.kind==="feather"?(this.feathers++,e.push({type:"feather",x:t.x,y:t.y})):t.kind==="capsule"?(this.weapon=t.cap,this.weaponT=12,e.push({type:"capsule",cap:t.cap})):t.kind==="cage"&&(this.wings.length<2?this.wings.push({type:t.bird,t:1,x:this.px,y:this.py}):this.wings[0]={type:t.bird,t:1,x:this.px,y:this.py},this.score+=500,e.push({type:"rescue",bird:t.bird}))}_hurt(t,e,n,s){this.inv>0||(this.hp-=t,this.inv=1,this.sd.lost+=t,this.combo=0,this.mult=1,this.comboT=0,e.push({type:"hurt",dmg:t,x:n!=null?n:this.px,y:s!=null?s:this.py}))}storm(){if(this.state!=="play"||this.storms<=0)return!1;this.storms--,this.eb=[],this.inv=Math.max(this.inv,1.2);let t=[{type:"storm"}];for(let e of this.enemies)e.hp>0&&(e.hp-=e.type==="boss"?14:8,t.push({type:"hit",x:e.x,y:e.y,dmg:8}),e.hp<=0&&this._pop(e,t));return this.enemies=this.enemies.filter(e=>e.hp>0),this.pendingEvents=t,!0}takeEvents(){let t=this.pendingEvents||[];return this.pendingEvents=null,t}_nearest(t,e){let n=null,s=1e9;for(let r of this.enemies){if(r.hp<=0||r.y<0||r.type==="cage"&&!1)continue;let a=Math.hypot(r.x-t,r.y-e);a<s&&(s=a,n=r)}return n}_rank(){let t=this.sd.spawned?this.sd.popped/this.sd.spawned:1,e=1-Math.min(1,this.sd.lost/this.stats.maxHp),n=t*70+e*30;return n>=92?"S":n>=80?"A":n>=65?"B":"C"}_endStage(t){let e=this._rank();this.ranks.push({stage:this.stage,loop:this.loop,rank:e}),this.score+={S:2e3,A:1200,B:600,C:200}[e],this.state="stageclear",t.push({type:"stageclear",rank:e,stage:this.stage})}nextStage(){this.state==="stageclear"&&(this.stage>=3?(this.loop++,this._startStage(1)):this._startStage(this.stage+1),this.state="play",this.bullets=[],this.eb=[])}};function pc(i){let t=i&&typeof i=="object"?i:{},e={};for(let a of vs)e[a.id]=Math.max(0,Math.min(3,Math.floor(Number(t.up&&t.up[a.id]))||0));let n=new Set(["lagoon",...Array.isArray(t.owned)?t.owned.filter(a=>ys.some(o=>o.id===a)):[]]),s=n.has(t.paint)?t.paint:"lagoon",r=(Array.isArray(t.top)?t.top:[]).filter(a=>a&&typeof a.name=="string"&&Number.isFinite(a.score)).map(a=>({name:a.name.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,3)||"AAA",score:Math.floor(a.score),stage:Math.floor(a.stage)||1})).sort((a,o)=>o.score-a.score).slice(0,10);return{feathers:Math.max(0,Math.min(99999,Math.floor(Number(t.feathers))||0)),up:e,owned:[...n],paint:s,top:r,muted:!!t.muted,best:Math.max(0,Math.floor(Number(t.best))||0),badges:Array.isArray(t.badges)?t.badges.filter(a=>typeof a=="string").slice(0,20):[]}}function gc(i,t){let e=vs.find(r=>r.id===t);if(!e)return{ok:!1};let n=Cs(i,t);if(n>=3)return{ok:!1,why:"max"};let s=e.cost[n];return i.feathers<s?{ok:!1,why:"poor",cost:s}:(i.feathers-=s,i.up={...i.up||{},[t]:n+1},{ok:!0,cost:s})}function mc(i,t){let e=ys.find(s=>s.id===t);if(!e)return{ok:!1};let n=new Set(i.owned||[]);return n.has(t)||e.cost===0?(i.paint=t,{ok:!0,free:!0}):i.feathers<e.cost?{ok:!1,why:"poor",cost:e.cost}:(i.feathers-=e.cost,n.add(t),i.owned=[...n],i.paint=t,{ok:!0,cost:e.cost})}function Ac(i,t){return t>0&&(i.length<10||t>i[i.length-1].score)}function xc(i,t){return[...i,t].sort((e,n)=>n.score-e.score).slice(0,10)}var _h="#1d2a4a",Ih=Math.PI*2,Zi={lagoon:["#2fb8a8","#1a8a88","#ff7a4a"],royal:["#3a6ae8","#2a4ab8","#ffd23a"],grape:["#9a5ad8","#6a3ab0","#ff9ad8"],clover:["#4ac84a","#2a9a3a","#fff06a"],cherry:["#e83a4a","#b0243a","#ffd8a0"],snowbird:["#f4f8ff","#b8c8e8","#4a8aff"],midnight:["#2a3258","#161c38","#6ad0ff"],sunny:["#ffd23a","#e8a010","#ff6a4a"]};function vc(i,t,e,n,s,r,a=0,o=0){i.beginPath(),i.ellipse(t,e,Math.max(.01,n),Math.max(.01,s),o,0,Ih),r&&(i.fillStyle=r,i.fill()),a&&(i.lineWidth=a,i.strokeStyle=_h,i.stroke())}var yc={};function Cc(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,t),a=[["#6ab8ff","#bfe4ff","#eaf6ff"],["#7ac0f0","#cfe8ff","#fff2e0"],["#5aa8e8","#a8d8f8","#e0f4e8"]][(e-1)%3];return r.addColorStop(0,a[0]),r.addColorStop(.55,a[1]),r.addColorStop(1,a[2]),s.fillStyle=r,s.fillRect(0,0,i,t),n}function _c(i,t,e,n,s="bubble"){vc(i,t,e,n,n,s==="homing"?"rgba(255,120,120,0.85)":s==="dart"?"rgba(80,170,255,0.9)":"rgba(110,200,255,0.8)",Math.max(1,n*.2)),vc(i,t-n*.3,e-n*.3,n*.3,n*.22,"rgba(255,255,255,0.85)")}var Po="170";var Mh=0,Ic=1,bh=2;var Rl=1,Sh=2,An=3,Dn=0,qe=1,Xe=2,on=0,bi=1,Ti=2,Mc=3,bc=4,wh=5,jn=100,Eh=101,Th=102,Vh=103,Rh=104,Ph=200,Lh=201,Uh=202,Dh=203,pa=204,ga=205,qh=206,Nh=207,Bh=208,Fh=209,Oh=210,zh=211,kh=212,Hh=213,Gh=214,ma=0,Aa=1,xa=2,Vi=3,va=4,ya=5,Ca=6,_a=7,Lo=0,Wh=1,Xh=2,Un=0,Uo=1,Do=2,qo=3,No=4,Yh=5,Bo=6,Fo=7;var Pl=300,Ri=301,Pi=302,Ia=303,Ma=304,Ir=306,rs=1e3,ti=1001,ba=1002,ze=1003,Zh=1004;var _s=1005;var rn=1006,Nr=1007;var ei=1008;var yn=1009,Ll=1010,Ul=1011,as=1012,Oo=1013,ni=1014,an=1015,en=1016,zo=1017,ko=1018,Li=1020,Dl=35902,ql=1021,Nl=1022,$e=1023,Bl=1024,Fl=1025,Si=1026,Ui=1027,Ho=1028,Go=1029,Ol=1030,Wo=1031;var Xo=1033,Ys=33776,Zs=33777,Js=33778,Ks=33779,Sa=35840,wa=35841,Ea=35842,Ta=35843,Va=36196,Ra=37492,Pa=37496,La=37808,Ua=37809,Da=37810,qa=37811,Na=37812,Ba=37813,Fa=37814,Oa=37815,za=37816,ka=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,js=36492,Ya=36494,Za=36495,zl=36283,Ja=36284,Ka=36285,ja=36286;var Qs=2300,Qa=2301,Br=2302,Sc=2400,wc=2401,Ec=2402;var Jh=3200,Kh=3201;var kl=0,jh=1,Ln="",ve="srgb",Oi="srgb-linear",Mr="linear",Kt="srgb";var li=7680;var Tc=519,Qh=512,$h=513,tu=514,Hl=515,eu=516,nu=517,iu=518,su=519,Vc=35044;var Rc="300 es",xn=2e3,$s=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fr=Math.PI/180,$a=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function ru(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],m=n[8],x=s[0],g=s[3],f=s[6],I=s[1],M=s[4],C=s[7],w=s[2],S=s[5],E=s[8];return r[0]=a*x+o*I+c*w,r[3]=a*g+o*M+c*S,r[6]=a*f+o*C+c*E,r[1]=l*x+h*I+d*w,r[4]=l*g+h*M+d*S,r[7]=l*f+h*C+d*E,r[2]=p*x+u*I+m*w,r[5]=p*g+u*M+m*S,r[8]=p*f+u*C+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,u=l*r-a*c,m=e*d+n*p+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=p*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zr=new qt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=tr("canvas");return i.style.display="block",i}var Pc={};function ns(i){i in Pc||(Pc[i]=!0,console.warn(i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var zt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Mr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Dc=[.3127,.329],qc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Oi]:{primaries:Lc,whitePoint:Dc,transfer:Mr,toXYZ:qc,fromXYZ:Nc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:Lc,whitePoint:Dc,transfer:Kt,toXYZ:qc,fromXYZ:Nc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var hi,to=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=tr("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,Ne=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=rn,a=ei,o=$e,c=yn,l=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=fs(),this.name="",this.source=new er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Pl;Ne.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],u=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,C=(u+1)/2,w=(f+1)/2,S=(h+p)/4,E=(d+x)/4,L=(m+g)/4;return M>C&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=E/n):C>w?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=S/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=L/r),this.set(n,s,r,e),this}let I=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(I)<.001&&(I=1),this.x=(g-m)/I,this.y=(d-x)/I,this.z=(p-h)/I,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eo=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pe=class extends eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],u=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=u,t[e+2]=m,t[e+3]=x;return}if(d!==x||c!==p||l!==u||h!==m){let g=1-o,f=c*p+l*u+h*m+d*x,I=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let w=Math.sqrt(M),S=Math.atan2(w,f*I);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w}let C=o*I;if(c=c*g+p*C,l=l*g+u*C,h=h*g+m*C,d=d*g+x*C,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*u-l*p,t[e+1]=c*m+h*p+l*d-o*u,t[e+2]=l*m+h*u+o*p-c*d,t[e+3]=h*m-o*d-c*p-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),u=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*u*m,this._y=l*u*d-p*h*m,this._z=l*h*m+p*u*d,this._w=l*h*d-p*u*m;break;case"YXZ":this._x=p*h*d+l*u*m,this._y=l*u*d-p*h*m,this._z=l*h*m-p*u*d,this._w=l*h*d+p*u*m;break;case"ZXY":this._x=p*h*d-l*u*m,this._y=l*u*d+p*h*m,this._z=l*h*m+p*u*d,this._w=l*h*d-p*u*m;break;case"ZYX":this._x=p*h*d-l*u*m,this._y=l*u*d+p*h*m,this._z=l*h*m-p*u*d,this._w=l*h*d+p*u*m;break;case"YZX":this._x=p*h*d+l*u*m,this._y=l*u*d+p*h*m,this._z=l*h*m-p*u*d,this._w=l*h*d-p*u*m;break;case"XZY":this._x=p*h*d-l*u*m,this._y=l*u*d-p*h*m,this._z=l*h*m+p*u*d,this._w=l*h*d+p*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hr=new D,Bc=new Nn,Cn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Ms.subVectors(this.max,Ki),ui.subVectors(t.a,Ki),di.subVectors(t.b,Ki),fi.subVectors(t.c,Ki),wn.subVectors(di,ui),En.subVectors(fi,di),Gn.subVectors(ui,fi);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,En.z,0,-En.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Gn.y,Gn.x,0];return!Gr(e,ui,di,fi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ui,di,fi,Ms))?!1:(bs.crossVectors(wn,En),e=[bs.x,bs.y,bs.z],Gr(e,ui,di,fi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,Is=new Cn,ui=new D,di=new D,fi=new D,wn=new D,En=new D,Gn=new D,Ki=new D,Ms=new D,bs=new D,Wn=new D;function Gr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);let o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var du=new Cn,ji=new D,Wr=new D,Bn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Wr)),this.expandByPoint(ji.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new D,Xr=new D,Ss=new D,Tn=new D,Yr=new D,ws=new D,Zr=new D,os=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Xr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ss),o=Tn.dot(this.direction),c=-Tn.dot(Ss),l=Tn.lengthSq(),h=Math.abs(1-a*a),d,p,u,m;if(h>0)if(d=a*c-o,p=a*o-c,m=r*h,d>=0)if(p>=-m)if(p<=m){let x=1/h;d*=x,p*=x,u=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;else p<=-m?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l):p<=m?(d=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),u=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xr).addScaledVector(Ss,p),u}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){Yr.subVectors(e,t),ws.subVectors(n,t),Zr.crossVectors(Yr,ws);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);let c=o*this.direction.dot(ws.crossVectors(Tn,ws));if(c<0)return null;let l=o*this.direction.dot(Yr.cross(Tn));if(l<0||c+l>a)return null;let h=-o*Tn.dot(Zr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,p,u,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,p,u,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,d,p,u,m,x,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*h,u=a*d,m=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+m*l,e[5]=p-x*l,e[9]=-o*c,e[2]=x-p*l,e[6]=m+u*l,e[10]=a*c}else if(t.order==="YXZ"){let p=c*h,u=c*d,m=l*h,x=l*d;e[0]=p+x*o,e[4]=m*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=x+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*h,u=c*d,m=l*h,x=l*d;e[0]=p-x*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=x-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*h,u=a*d,m=o*h,x=o*d;e[0]=c*h,e[4]=m*l-u,e[8]=p*l+x,e[1]=c*d,e[5]=x*l+p,e[9]=u*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,u=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-p*d,e[8]=m*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+m,e[10]=p-x*d}else if(t.order==="XZY"){let p=a*c,u=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+x,e[5]=a*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*h,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,pu)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Vn.crossVectors(n,Fe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Vn.crossVectors(n,Fe)),Vn.normalize(),Es.crossVectors(Fe,Vn),s[0]=Vn.x,s[4]=Es.x,s[8]=Fe.x,s[1]=Vn.y,s[5]=Es.y,s[9]=Fe.y,s[2]=Vn.z,s[6]=Es.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],m=n[2],x=n[6],g=n[10],f=n[14],I=n[3],M=n[7],C=n[11],w=n[15],S=s[0],E=s[4],L=s[8],_=s[12],y=s[1],T=s[5],O=s[9],F=s[13],G=s[2],Q=s[6],W=s[10],it=s[14],k=s[3],ot=s[7],pt=s[11],Mt=s[15];return r[0]=a*S+o*y+c*G+l*k,r[4]=a*E+o*T+c*Q+l*ot,r[8]=a*L+o*O+c*W+l*pt,r[12]=a*_+o*F+c*it+l*Mt,r[1]=h*S+d*y+p*G+u*k,r[5]=h*E+d*T+p*Q+u*ot,r[9]=h*L+d*O+p*W+u*pt,r[13]=h*_+d*F+p*it+u*Mt,r[2]=m*S+x*y+g*G+f*k,r[6]=m*E+x*T+g*Q+f*ot,r[10]=m*L+x*O+g*W+f*pt,r[14]=m*_+x*F+g*it+f*Mt,r[3]=I*S+M*y+C*G+w*k,r[7]=I*E+M*T+C*Q+w*ot,r[11]=I*L+M*O+C*W+w*pt,r[15]=I*_+M*F+C*it+w*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],u=t[14],m=t[3],x=t[7],g=t[11],f=t[15];return m*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*u-n*c*u)+x*(+e*c*u-e*l*p+r*a*p-s*a*u+s*l*h-r*c*h)+g*(+e*l*d-e*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+f*(-s*o*h-e*c*d+e*o*p+s*a*d-n*a*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],u=t[11],m=t[12],x=t[13],g=t[14],f=t[15],I=d*g*l-x*p*l+x*c*u-o*g*u-d*c*f+o*p*f,M=m*p*l-h*g*l-m*c*u+a*g*u+h*c*f-a*p*f,C=h*x*l-m*d*l+m*o*u-a*x*u-h*o*f+a*d*f,w=m*d*c-h*x*c-m*o*p+a*x*p+h*o*g-a*d*g,S=e*I+n*M+s*C+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=I*E,t[1]=(x*p*r-d*g*r-x*s*u+n*g*u+d*s*f-n*p*f)*E,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*f+n*c*f)*E,t[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*u-n*c*u)*E,t[4]=M*E,t[5]=(h*g*r-m*p*r+m*s*u-e*g*u-h*s*f+e*p*f)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*E,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*u+e*c*u)*E,t[8]=C*E,t[9]=(m*d*r-h*x*r-m*n*u+e*x*u+h*n*f-e*d*f)*E,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*u-e*o*u)*E,t[12]=w*E,t[13]=(h*x*s-m*d*s+m*n*p-e*x*p-h*n*g+e*d*g)*E,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*p+e*o*p)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,u=r*h,m=r*d,x=a*h,g=a*d,f=o*d,I=c*l,M=c*h,C=c*d,w=n.x,S=n.y,E=n.z;return s[0]=(1-(x+f))*w,s[1]=(u+C)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(u-C)*S,s[5]=(1-(p+f))*S,s[6]=(g+I)*S,s[7]=0,s[8]=(m+M)*E,s[9]=(g-I)*E,s[10]=(1-(p+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);let l=1/r,h=1/a,d=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),u,m;if(o===xn)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===$s)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),p=(e+t)*l,u=(n+s)*h,m,x;if(o===xn)m=(a+r)*d,x=-2*d;else if(o===$s)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new D,Ke=new ne,fu=new D(0,0,0),pu=new D(1,1,1),Vn=new D,Es=new D,Fe=new D,Fc=new ne,Oc=new Nn,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gu=0,zc=new D,gi=new Nn,pn=new ne,Ts=new D,Qi=new D,mu=new D,Au=new Nn,kc=new D(1,0,0),Hc=new D(0,1,0),Gc=new D(0,0,1),Wc={type:"added"},xu={type:"removed"},mi={type:"childadded",child:null},Jr={type:"childremoved",child:null},Ce=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new cn,n=new Nn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Qi,Ts,this.up):pn.lookAt(Ts,Qi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(pn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=new D,gn=new D,Kr=new D,mn=new D,Ai=new D,xi=new D,Xc=new D,jr=new D,Qr=new D,$r=new D,ta=new le,ea=new le,na=new le,Qn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),gn.subVectors(n,e),Kr.subVectors(t,e);let a=je.dot(je),o=je.dot(gn),c=je.dot(Kr),l=gn.dot(gn),h=gn.dot(Kr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(l*c-o*h)*p,m=(a*h-o*c)*p;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(ea,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),gn.subVectors(t,e),je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),xi.subVectors(r,n),jr.subVectors(t,n);let c=Ai.dot(jr),l=xi.dot(jr);if(c<=0&&l<=0)return e.copy(n);Qr.subVectors(t,s);let h=Ai.dot(Qr),d=xi.dot(Qr);if(h>=0&&d<=h)return e.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);$r.subVectors(t,r);let u=Ai.dot($r),m=xi.dot($r);if(m>=0&&u<=m)return e.copy(r);let x=u*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(xi,o);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Xc.subVectors(r,s),o=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(Xc,o);let f=1/(g+x+p);return a=x*f,o=p*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=ru(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=Wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return zt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=ve){zt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Vs);let n=Or(Rn.h,Vs.h,e),s=Or(Rn.s,Vs.s,e),r=Or(Rn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Tt;Tt.NAMES=Wl;var vu=0,Fn=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=fs(),this.name="",this.blending=bi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ga,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ln=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new D,Rs=new Vt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}};var ir=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},yu=0,We=new ne,sa=new Ce,vi=new D,Oe=new Cn,$i=new Cn,xe=new D,Me=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Oe.min,$i.min),Oe.expandByPoint(xe),xe.addVectors(Oe.max,$i.max),Oe.expandByPoint(xe)):(Oe.expandByPoint($i.min),Oe.expandByPoint($i.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(t,l),xe.add(vi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;let l=new D,h=new D,d=new D,p=new Vt,u=new Vt,m=new Vt,x=new D,g=new D;function f(L,_,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,y),p.fromBufferAttribute(r,L),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),h.sub(l),d.sub(l),u.sub(p),m.sub(p);let T=1/(u.x*m.y-m.x*u.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(T),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(T),o[L].add(x),o[_].add(x),o[y].add(x),c[L].add(g),c[_].add(g),c[y].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let L=0,_=I.length;L<_;++L){let y=I[L],T=y.start,O=y.count;for(let F=T,G=T+O;F<G;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new D,C=new D,w=new D,S=new D;function E(L){w.fromBufferAttribute(s,L),S.copy(w);let _=o[L];M.copy(_),M.sub(w.multiplyScalar(w.dot(_))).normalize(),C.crossVectors(S,_);let T=C.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,T)}for(let L=0,_=I.length;L<_;++L){let y=I[L],T=y.start,O=y.count;for(let F=T,G=T+O;F<G;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let p=0,u=t.count;p<u;p+=3){let m=t.getX(p+0),x=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,u=e.count;p<u;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),u=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let f=0;f<h;f++)p[m++]=l[u++]}return new Ie(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],u=t(p,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yc=new ne,Xn=new os,Ps=new Bn,Zc=new D,Ls=new D,Us=new D,Ds=new D,ra=new D,qs=new D,Jc=new D,Ns=new D,ye=class extends Ce{constructor(t=new Me,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ra.fromBufferAttribute(d,t),a?qs.addScaledVector(ra,h):qs.addScaledVector(ra.sub(e),h))}e.add(qs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(Ps.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Ps,Zc)===null||Xn.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&(Yc.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=p.length;m<x;m++){let g=p[m],f=a[g.materialIndex],I=Math.max(g.start,u.start),M=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let C=I,w=M;C<w;C+=3){let S=o.getX(C),E=o.getX(C+1),L=o.getX(C+2);s=Bs(this,f,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=m,f=x;g<f;g+=3){let I=o.getX(g),M=o.getX(g+1),C=o.getX(g+2);s=Bs(this,a,t,n,l,h,d,I,M,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=p.length;m<x;m++){let g=p[m],f=a[g.materialIndex],I=Math.max(g.start,u.start),M=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let C=I,w=M;C<w;C+=3){let S=C,E=C+1,L=C+2;s=Bs(this,f,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=m,f=x;g<f;g+=3){let I=g,M=g+1,C=g+2;s=Bs(this,a,t,n,l,h,d,I,M,C),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Cu(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Dn,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ns);return l<e.near||l>e.far?null:{distance:l,point:Ns.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ls),i.getVertexPosition(c,Us),i.getVertexPosition(l,Ds);let h=Cu(i,t,e,n,Ls,Us,Ds,Jc);if(h){let d=new D;Qn.getBarycoord(Jc,Ls,Us,Ds,d),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,c,l,d,new Vt)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,c,l,d,new Vt)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new D,materialIndex:0};Qn.getNormal(Ls,Us,Ds,p.normal),h.face=p,h.barycoord=d}return h}var ii=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function m(x,g,f,I,M,C,w,S,E,L,_){let y=C/E,T=w/L,O=C/2,F=w/2,G=S/2,Q=E+1,W=L+1,it=0,k=0,ot=new D;for(let pt=0;pt<W;pt++){let Mt=pt*T-F;for(let Ft=0;Ft<Q;Ft++){let Qt=Ft*y-O;ot[x]=Qt*I,ot[g]=Mt*M,ot[f]=G,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[g]=0,ot[f]=S>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Ft/E),d.push(1-pt/L),it+=1}}for(let pt=0;pt<L;pt++)for(let Mt=0;Mt<E;Mt++){let Ft=p+Mt+Q*pt,Qt=p+Mt+Q*(pt+1),Y=p+(Mt+1)+Q*(pt+1),st=p+(Mt+1)+Q*pt;c.push(Ft,Qt,st),c.push(Qt,Y,st),k+=6}o.addGroup(u,k,_),u+=k,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Di(i[e]);for(let s in n)t[s]=n[s]}return t}function _u(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var On={clone:Di,merge:Ve},Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ge=class extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=_u(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new D,Kc=new Vt,jc=new Vt,Re=class extends rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,jc),e.subVectors(jc,Kc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yi=-90,Ci=1,io=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(yi,Ci,t,e);s.layers=this.layers,this.add(s);let r=new Re(yi,Ci,t,e);r.layers=this.layers,this.add(r);let a=new Re(yi,Ci,t,e);a.layers=this.layers,this.add(a);let o=new Re(yi,Ci,t,e);o.layers=this.layers,this.add(o);let c=new Re(yi,Ci,t,e);c.layers=this.layers,this.add(c);let l=new Re(yi,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ar=class extends Ne{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends Pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:on});r.uniforms.tEquirect.value=e;let a=new ye(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=rn),new io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},aa=new D,bu=new D,Su=new qt,Qe=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=aa.subVectors(n,e).cross(bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Su.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new Bn,Fs=new D,ls=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],u=s[8],m=s[9],x=s[10],g=s[11],f=s[12],I=s[13],M=s[14],C=s[15];if(n[0].setComponents(c-r,p-l,g-u,C-f).normalize(),n[1].setComponents(c+r,p+l,g+u,C+f).normalize(),n[2].setComponents(c+a,p+h,g+m,C+I).normalize(),n[3].setComponents(c-a,p-h,g-m,C-I).normalize(),n[4].setComponents(c-o,p-d,g-x,C-M).normalize(),e===xn)n[5].setComponents(c+o,p+d,g+x,C+M).normalize();else if(e===$s)n[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,m)=>u.start-m.start);let p=0;for(let u=1;u<d.length;u++){let m=d[p],x=d[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++p,d[p]=x)}d.length=p+1;for(let u=0,m=d.length;u<m;u++){let x=d[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var or=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,p=e/c,u=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let I=f*p-a;for(let M=0;M<l;M++){let C=M*d-r;m.push(C,-I,0),x.push(0,0,1),g.push(M/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let I=0;I<o;I++){let M=I+l*f,C=I+l*(f+1),w=I+1+l*(f+1),S=I+1+l*f;u.push(M,C,S),u.push(C,w,S)}this.setIndex(u),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,Vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$u=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
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
#endif`,Sd=`struct PhysicalMaterial {
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
}`,wd=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,qf=`#define DISTANCE
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
}`,Nf=`#define DISTANCE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,ep=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,op=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Eu,alphahash_pars_fragment:Tu,alphamap_fragment:Vu,alphamap_pars_fragment:Ru,alphatest_fragment:Pu,alphatest_pars_fragment:Lu,aomap_fragment:Uu,aomap_pars_fragment:Du,batching_pars_vertex:qu,batching_vertex:Nu,begin_vertex:Bu,beginnormal_vertex:Fu,bsdfs:Ou,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:$u,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:cd,envmap_pars_vertex:ld,envmap_physical_pars_fragment:yd,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:gd,lightmap_pars_fragment:md,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:xd,lights_pars_begin:vd,lights_toon_fragment:Cd,lights_toon_pars_fragment:_d,lights_phong_fragment:Id,lights_phong_pars_fragment:Md,lights_physical_fragment:bd,lights_physical_pars_fragment:Sd,lights_fragment_begin:wd,lights_fragment_maps:Ed,lights_fragment_end:Td,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Ud,map_pars_fragment:Dd,map_particle_fragment:qd,map_particle_pars_fragment:Nd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Od,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:Yd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:tf,opaque_fragment:ef,packing:nf,premultiplied_alpha_fragment:sf,project_vertex:rf,dithering_fragment:af,dithering_pars_fragment:of,roughnessmap_fragment:cf,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:gf,skinning_vertex:mf,skinnormal_vertex:Af,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:yf,tonemapping_pars_fragment:Cf,transmission_fragment:_f,transmission_pars_fragment:If,uv_pars_fragment:Mf,uv_pars_vertex:bf,uv_vertex:Sf,worldpos_vertex:wf,background_vert:Ef,background_frag:Tf,backgroundCube_vert:Vf,backgroundCube_frag:Rf,cube_vert:Pf,cube_frag:Lf,depth_vert:Uf,depth_frag:Df,distanceRGBA_vert:qf,distanceRGBA_frag:Nf,equirect_vert:Bf,equirect_frag:Ff,linedashed_vert:Of,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Hf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:Yf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:$f,meshtoon_vert:tp,meshtoon_frag:ep,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:ap,sprite_frag:op},rt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},sn={basic:{uniforms:Ve([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([rt.lights,rt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};sn.physical={uniforms:Ve([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Os={r:0,b:0,g:0},Zn=new cn,cp=new ne;function lp(i,t,e,n,s,r,a){let o=new Tt(0),c=r===!0?0:1,l,h,d=null,p=0,u=null;function m(I){let M=I.isScene===!0?I.background:null;return M&&M.isTexture&&(M=(I.backgroundBlurriness>0?e:t).get(M)),M}function x(I){let M=!1,C=m(I);C===null?f(o,c):C&&C.isColor&&(f(C,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(I,M){let C=m(M);C&&(C.isCubeTexture||C.mapping===Ir)?(h===void 0&&(h=new ye(new ii(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Di(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(M.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Zn)),h.material.toneMapped=zt.getTransfer(C.colorSpace)!==Kt,(d!==C||p!==C.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,p=C.version,u=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ye(new or(2,2),new ge({name:"BackgroundMaterial",uniforms:Di(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=zt.getTransfer(C.colorSpace)!==Kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=C,p=C.version,u=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function f(I,M){I.getRGB(Os,Xl(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(I,M=1){o.set(I),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,f(o,c)},render:x,addToRenderList:g}}function hp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(y,T,O,F,G){let Q=!1,W=d(F,O,T);r!==W&&(r=W,l(r.object)),Q=u(y,F,O,G),Q&&m(y,F,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,C(y,T,O,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,T,O){let F=O.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let Q=G[T.id];Q===void 0&&(Q={},G[T.id]=Q);let W=Q[F];return W===void 0&&(W=p(c()),Q[F]=W),W}function p(y){let T=[],O=[],F=[];for(let G=0;G<e;G++)T[G]=0,O[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function u(y,T,O,F){let G=r.attributes,Q=T.attributes,W=0,it=O.getAttributes();for(let k in it)if(it[k].location>=0){let pt=G[k],Mt=Q[k];if(Mt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(y,T,O,F){let G={},Q=T.attributes,W=0,it=O.getAttributes();for(let k in it)if(it[k].location>=0){let pt=Q[k];pt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),G[k]=Mt,W++}r.attributes=G,r.attributesNum=W,r.index=F}function x(){let y=r.newAttributes;for(let T=0,O=y.length;T<O;T++)y[T]=0}function g(y){f(y,0)}function f(y,T){let O=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;O[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),G[y]!==T&&(i.vertexAttribDivisor(y,T),G[y]=T)}function I(){let y=r.newAttributes,T=r.enabledAttributes;for(let O=0,F=T.length;O<F;O++)T[O]!==y[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function M(y,T,O,F,G,Q,W){W===!0?i.vertexAttribIPointer(y,T,O,G,Q):i.vertexAttribPointer(y,T,O,F,G,Q)}function C(y,T,O,F){x();let G=F.attributes,Q=O.getAttributes(),W=T.defaultAttributeValues;for(let it in Q){let k=Q[it];if(k.location>=0){let ot=G[it];if(ot===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){let pt=ot.normalized,Mt=ot.itemSize,Ft=t.get(ot);if(Ft===void 0)continue;let Qt=Ft.buffer,Y=Ft.type,st=Ft.bytesPerElement,Ct=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===Oo;if(ot.isInterleavedBufferAttribute){let ct=ot.data,Et=ct.stride,Lt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)f(k.location+Ot,ct.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)g(k.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<k.locationSize;Ot++)M(k.location+Ot,Mt/k.locationSize,Y,pt,Et*st,(Lt+Mt/k.locationSize*Ot)*st,Ct)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)f(k.location+ct,ot.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<k.locationSize;ct++)g(k.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ct=0;ct<k.locationSize;ct++)M(k.location+ct,Mt/k.locationSize,Y,pt,Mt*st,Mt/k.locationSize*ct*st,Ct)}}else if(W!==void 0){let pt=W[it];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(k.location,pt);break;case 3:i.vertexAttrib3fv(k.location,pt);break;case 4:i.vertexAttrib4fv(k.location,pt);break;default:i.vertexAttrib1fv(k.location,pt)}}}}I()}function w(){L();for(let y in n){let T=n[y];for(let O in T){let F=T[O];for(let G in F)h(F[G].object),delete F[G];delete T[O]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let O in T){let F=T[O];for(let G in F)h(F[G].object),delete F[G];delete T[O]}delete n[y.id]}function E(y){for(let T in n){let O=n[T];if(O[y.id]===void 0)continue;let F=O[y.id];for(let G in F)h(F[G].object),delete F[G];delete O[y.id]}}function L(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:I}}function up(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];e.update(u,n,1)}function c(l,h,d,p){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)a(l[m],h[m],p[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*p[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==$e&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:I,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:w,maxSamples:S}}function fp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||s;return s=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,u){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let I=r?0:n,M=I*4,C=f.clippingState||null;c.value=C,C=h(m,p,M,u);for(let w=0;w!==M;++w)C[w]=e[w];f.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,u,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let f=u+x*4,I=p.matrixWorldInverse;o.getNormalMatrix(I),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,C=u;M!==x;++M,C+=4)a.copy(d[M]).applyMatrix4(I,o),a.normal.toArray(g,C),g[C+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function pp(i){let t=new WeakMap;function e(a,o){return o===Ia?a.mapping=Ri:o===Ma&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ia||o===Ma)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new so(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var qi=class extends rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mi=4,Qc=[.125,.215,.35,.446,.526,.582],$n=20,oa=new qi,$c=new Tt,ca=null,la=0,ha=0,ua=!1,Kn=(1+Math.sqrt(5))/2,_i=1/Kn,tl=[new D(-Kn,_i,0),new D(Kn,_i,0),new D(-_i,0,Kn),new D(_i,0,Kn),new D(0,Kn,-_i),new D(0,Kn,_i),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:en,format:$e,colorSpace:Oi,depthBuffer:!1},s=el(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=mp(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){let o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor($c),h.toneMapping=Un,h.autoClear=!1;let u=new ln({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new ye(new ii,u),x=!1,g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,x=!0):(u.color.copy($c),x=!0);for(let f=0;f<6;f++){let I=f%3;I===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):I===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let M=this._cubeSize;zs(s,I*M,f>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tl[(s-r-1)%tl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ye(this._lodPlanes[s],l),p=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*$n-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):$n;g>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);let f=[],I=0;for(let E=0;E<$n;++E){let L=E/x,_=Math.exp(-L*L/2);f.push(_),E===0?I+=_:E<g&&(I+=2*_)}for(let E=0;E<f.length;E++)f[E]=f[E]/I;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:M}=this;p.dTheta.value=m,p.mipInt.value=M-n;let C=this._sizeLods[s],w=3*C*(s>M-Mi?s-M+Mi:0),S=4*(this._cubeSize-C);zs(e,w,S,3*C,2*C),c.setRenderTarget(e),c.render(d,oa)}};function gp(i){let t=[],e=[],n=[],s=i,r=i-Mi+1+Qc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Mi?c=Qc[a-i+Mi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,x=3,g=2,f=1,I=new Float32Array(x*m*u),M=new Float32Array(g*m*u),C=new Float32Array(f*m*u);for(let S=0;S<u;S++){let E=S%3*2/3-1,L=S>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];I.set(_,x*m*S),M.set(p,g*m*S);let y=[S,S,S,S,S,S];C.set(y,f*m*S)}let w=new Me;w.setAttribute("position",new Ie(I,x)),w.setAttribute("uv",new Ie(M,g)),w.setAttribute("faceIndex",new Ie(C,f)),t.push(w),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function el(i,t,e){let n=new Pe(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mp(i,t,e){let n=new Float32Array($n),s=new D(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function nl(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function il(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function Ap(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ia||c===Ma,h=c===Ri||c===Pi;if(l||h){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new cr(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new cr(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vp(i,t,e,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);for(let m in p.morphAttributes){let x=p.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(t.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){let p=d.attributes;for(let m in p)t.update(p[m],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let m in u){let x=u[m];for(let g=0,f=x.length;g<f;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(d){let p=[],u=d.index,m=d.attributes.position,x=0;if(u!==null){let I=u.array;x=u.version;for(let M=0,C=I.length;M<C;M+=3){let w=I[M+0],S=I[M+1],E=I[M+2];p.push(w,S,S,E,E,w)}}else if(m!==void 0){let I=m.array;x=m.version;for(let M=0,C=I.length/3-1;M<C;M+=3){let w=M+0,S=M+1,E=M+2;p.push(w,S,S,E,E,w)}}else return;let g=new(Gl(p)?sr:ir)(p,1);g.version=x;let f=r.get(d);f&&t.remove(f),r.set(d,g)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function yp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function l(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let g=0;for(let f=0;f<m;f++)g+=u[f];e.update(g,n,1)}function d(p,u,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)l(p[f]/a,u[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,p,0,x,0,m);let f=0;for(let I=0;I<m;I++)f+=u[I]*x[I];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Cp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _p(i,t,e){let n=new WeakMap,s=new le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};p!==void 0&&p.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let C=o.attributes.position.count*M,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let S=new Float32Array(C*w*4*d),E=new nr(S,C,w,d);E.type=an,E.needsUpdate=!0;let L=M*4;for(let y=0;y<d;y++){let T=g[y],O=f[y],F=I[y],G=C*w*4*y;for(let Q=0;Q<T.count;Q++){let W=Q*L;u===!0&&(s.fromBufferAttribute(T,Q),S[G+W+0]=s.x,S[G+W+1]=s.y,S[G+W+2]=s.z,S[G+W+3]=0),m===!0&&(s.fromBufferAttribute(O,Q),S[G+W+4]=s.x,S[G+W+5]=s.y,S[G+W+6]=s.z,S[G+W+7]=0),x===!0&&(s.fromBufferAttribute(F,Q),S[G+W+8]=s.x,S[G+W+9]=s.y,S[G+W+10]=s.z,S[G+W+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:E,size:new Vt(C,w)},n.set(o,p),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Ip(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var lr=class extends Ne{constructor(t,e,n,s,r,a,o,c,l,h=Si){if(h!==Si&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=ni),n===void 0&&h===Ui&&(n=Li),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zl=new Ne,sl=new lr(1,1),Jl=new nr,Kl=new no,jl=new ar,rl=[],al=[],ol=new Float32Array(16),cl=new Float32Array(9),ll=new Float32Array(4);function zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;ll.set(n),i.uniformMatrix2fv(this.addr,!1,ll),Ae(e,n)}}function Tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Ae(e,n)}}function Vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(me(e,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),Ae(e,n)}}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=Hl,r=sl):r=Zl,e.setTexture2D(t||r,s)}function Op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jl,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jl,s)}function Hp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return Sp;case 35666:return wp;case 35674:return Ep;case 35675:return Tp;case 35676:return Vp;case 5124:case 35670:return Rp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Up;case 5125:return Dp;case 36294:return qp;case 36295:return Np;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Wp(i,t){let e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Xp(i,t){let e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Yp(i,t){let e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Zp(i,t){let e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jp(i,t){let e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){let e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jp(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function $p(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){let n=this.cache,s=t.length,r=br(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zl,r[a])}function ag(i,t,e){let n=this.cache,s=t.length,r=br(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kl,r[a])}function og(i,t,e){let n=this.cache,s=t.length,r=br(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jl,r[a])}function cg(i,t,e){let n=this.cache,s=t.length,r=br(e,s);me(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jl,r[a])}function lg(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return $p;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return cg}}var ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},ao=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lg(e.type)}},oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},da=/(\w+)(\])?(\[|\.)?/g;function hl(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){let n=i.name,s=n.length;for(da.lastIndex=0;;){let r=da.exec(n),a=da.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hl(e,l===void 0?new ro(o,i,t):new ao(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new oo(o),hl(e,d)),e=d}}}var Ei=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ul(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ug=37297,dg=0;function fg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var dl=new qt;function pg(i){zt._getMatrix(dl,zt.workingColorSpace,i);let t=`mat3( ${dl.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(t),a)}else return s}function gg(i,t){let e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mg(i,t){let e;switch(t){case Uo:e="Linear";break;case Do:e="Reinhard";break;case qo:e="Cineon";break;case No:e="ACESFilmic";break;case Bo:e="AgX";break;case Fo:e="Neutral";break;case Yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ks=new D;function Ag(){zt.getLuminanceCoefficients(ks);let i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function vg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function is(i){return i!==""}function pl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(Cg,Ig)}var _g=new Map;function Ig(i,t){let e=Bt[t];if(e===void 0){let n=_g.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace(Mg,bg)}function bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Al(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Wh:t="ENVMAP_BLENDING_MIX";break;case Xh:t="ENVMAP_BLENDING_ADD";break}return t}function Vg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sg(e),l=wg(e),h=Eg(e),d=Tg(e),p=Vg(e),u=xg(e),m=vg(r),x=s.createProgram(),g,f,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),f.length>0&&(f+=`
`)):(g=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),f=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Un?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=co(a),a=pl(a,e),a=gl(a,e),o=co(o),o=pl(o,e),o=gl(o,e),a=ml(a),o=ml(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=I+g+a,C=I+f+o,w=ul(s,s.VERTEX_SHADER,M),S=ul(s,s.FRAGMENT_SHADER,C);s.attachShader(x,w),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(T){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(w).trim(),G=s.getShaderInfoLog(S).trim(),Q=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,S);else{let it=fl(s,w,"vertex"),k=fl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+it+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||G==="")&&(W=!1);W&&(T.diagnostics={runnable:Q,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(w),s.deleteShader(S),L=new Ei(s,x),_=yg(s,x)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,ug)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var Pg=0,lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ho(t),e.set(t,n)),n}},ho=class{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}};function Lg(i,t,e,n,s,r,a){let o=new cs,c=new lo,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,u=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,y,T,O,F){let G=O.fog,Q=F.geometry,W=_.isMeshStandardMaterial?O.environment:null,it=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),k=it&&it.mapping===Ir?it.image.height:null,ot=m[_.type];_.precision!==null&&(u=s.getMaxPrecision(_.precision),u!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mt=pt!==void 0?pt.length:0,Ft=0;Q.morphAttributes.position!==void 0&&(Ft=1),Q.morphAttributes.normal!==void 0&&(Ft=2),Q.morphAttributes.color!==void 0&&(Ft=3);let Qt,Y,st,Ct;if(ot){let jt=sn[ot];Qt=jt.vertexShader,Y=jt.fragmentShader}else Qt=_.vertexShader,Y=_.fragmentShader,c.update(_),st=c.getVertexShaderID(_),Ct=c.getFragmentShaderID(_);let ct=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Lt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,oe=!!_.map,Wt=!!_.matcap,he=!!it,U=!!_.aoMap,He=!!_.lightMap,kt=!!_.bumpMap,Ht=!!_.normalMap,St=!!_.displacementMap,ie=!!_.emissiveMap,bt=!!_.metalnessMap,b=!!_.roughnessMap,A=_.anisotropy>0,q=_.clearcoat>0,Z=_.dispersion>0,$=_.iridescence>0,X=_.sheen>0,_t=_.transmission>0,lt=A&&!!_.anisotropyMap,gt=q&&!!_.clearcoatMap,Xt=q&&!!_.clearcoatNormalMap,et=q&&!!_.clearcoatRoughnessMap,mt=$&&!!_.iridescenceMap,wt=$&&!!_.iridescenceThicknessMap,Rt=X&&!!_.sheenColorMap,At=X&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,Nt=!!_.specularColorMap,te=!!_.specularIntensityMap,V=_t&&!!_.transmissionMap,at=_t&&!!_.thicknessMap,z=!!_.gradientMap,J=!!_.alphaMap,dt=_.alphaTest>0,ht=!!_.alphaHash,Ut=!!_.extensions,ce=Un;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ce=i.toneMapping);let we={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Qt,fragmentShader:Y,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:Ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&F.instanceColor!==null,instancingMorph:Lt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Oi,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:Wt,envMap:he,envMapMode:he&&it.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:He,bumpMap:kt,normalMap:Ht,displacementMap:p&&St,emissiveMap:ie,normalMapObjectSpace:Ht&&_.normalMapType===jh,normalMapTangentSpace:Ht&&_.normalMapType===kl,metalnessMap:bt,roughnessMap:b,anisotropy:A,anisotropyMap:lt,clearcoat:q,clearcoatMap:gt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:$,iridescenceMap:mt,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:At,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:te,transmission:_t,transmissionMap:V,thicknessMap:at,gradientMap:z,opaque:_.transparent===!1&&_.blending===bi&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:ht,combine:_.combine,mapUv:oe&&x(_.map.channel),aoMapUv:U&&x(_.aoMap.channel),lightMapUv:He&&x(_.lightMap.channel),bumpMapUv:kt&&x(_.bumpMap.channel),normalMapUv:Ht&&x(_.normalMap.channel),displacementMapUv:St&&x(_.displacementMap.channel),emissiveMapUv:ie&&x(_.emissiveMap.channel),metalnessMapUv:bt&&x(_.metalnessMap.channel),roughnessMapUv:b&&x(_.roughnessMap.channel),anisotropyMapUv:lt&&x(_.anisotropyMap.channel),clearcoatMapUv:gt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(_.sheenRoughnessMap.channel),specularMapUv:Gt&&x(_.specularMap.channel),specularColorMapUv:Nt&&x(_.specularColorMap.channel),specularIntensityMapUv:te&&x(_.specularIntensityMap.channel),transmissionMapUv:V&&x(_.transmissionMap.channel),thicknessMapUv:at&&x(_.thicknessMap.channel),alphaMapUv:J&&x(_.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ht||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(oe||J),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&zt.getTransfer(_.map.colorSpace)===Kt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&zt.getTransfer(_.emissiveMap.colorSpace)===Kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xe,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ut&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&_.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function f(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)y.push(T),y.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(I(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function I(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function C(_){let y=m[_.type],T;if(y){let O=sn[y];T=On.clone(O.uniforms)}else T=_.uniforms;return T}function w(_,y){let T;for(let O=0,F=h.length;O<F;O++){let G=h[O];if(G.cacheKey===y){T=G,++T.usedTimes;break}}return T===void 0&&(T=new Rg(i,y,_,r),h.push(T)),T}function S(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function E(_){c.remove(_)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:C,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function Ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,u,m,x,g){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:u,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=u,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=x,f.group=g),t++,f}function o(d,p,u,m,x,g){let f=a(d,p,u,m,x,g);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function c(d,p,u,m,x,g){let f=a(d,p,u,m,x,g);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||Dg),n.length>1&&n.sort(p||xl),s.length>1&&s.sort(p||xl)}function h(){for(let d=t,p=i.length;d<p;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vl,i.set(n,[a])):s>=r.length?(a=new vl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Tt};break;case"SpotLight":e={position:new D,direction:new D,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fg=0;function Og(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){let t=new Ng,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ne,a=new ne;function o(l){let h=0,d=0,p=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let u=0,m=0,x=0,g=0,f=0,I=0,M=0,C=0,w=0,S=0,E=0;l.sort(Og);for(let _=0,y=l.length;_<y;_++){let T=l[_],O=T.color,F=T.intensity,G=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*F,d+=O.g*F,p+=O.b*F;else if(T.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(T.sh.coefficients[W],F);E++}else if(T.isDirectionalLight){let W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let it=T.shadow,k=e.get(T);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=Q,n.directionalShadowMatrix[u]=T.shadow.matrix,I++}n.directional[u]=W,u++}else if(T.isSpotLight){let W=t.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=G,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,n.spot[x]=W;let it=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,it.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[x]=it.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=Q,C++}x++}else if(T.isRectAreaLight){let W=t.get(T);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=W,g++}else if(T.isPointLight){let W=t.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){let it=T.shadow,k=e.get(T);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,k.shadowCameraNear=it.camera.near,k.shadowCameraFar=it.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=W,m++}else if(T.isHemisphereLight){let W=t.get(T);W.skyColor.copy(T.color).multiplyScalar(F),W.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let L=n.hash;(L.directionalLength!==u||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==I||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==w||L.numLightProbes!==E)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=u,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=I,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=w,L.numLightProbes=E,n.version=Fg++)}function c(l,h){let d=0,p=0,u=0,m=0,x=0,g=h.matrixWorldInverse;for(let f=0,I=l.length;f<I;f++){let M=l[f];if(M.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(M.isSpotLight){let C=n.spot[u];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(M.isRectAreaLight){let C=n.rectArea[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){let C=n.hemi[x];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function yl(i){let t=new zg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function kg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yl(i),t.set(s,[o])):r>=a.length?(o=new yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var uo=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
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
}`;function Wg(i,t,e){let n=new ls,s=new Vt,r=new Vt,a=new le,o=new uo({depthPacking:Kh}),c=new fo,l={},h=e.maxTextureSize,d={[Dn]:qe,[qe]:Dn,[Xe]:Xe},p=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Hg,fragmentShader:Gg}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let f=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(on),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=f!==An&&this.type===An,G=f===An&&this.type!==An;for(let Q=0,W=S.length;Q<W;Q++){let it=S[Q],k=it.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ot=k.getFrameExtents();if(s.multiply(ot),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y)),k.map===null||F===!0||G===!0){let Mt=this.type!==An?{minFilter:ze,magFilter:ze}:{};k.map!==null&&k.map.dispose(),k.map=new Pe(s.x,s.y,Mt),k.map.texture.name=it.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let pt=k.getViewportCount();for(let Mt=0;Mt<pt;Mt++){let Ft=k.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),k.updateMatrices(it,Mt),n=k.getFrustum(),C(E,L,k.camera,it,this.type)}k.isPointLightShadow!==!0&&this.type===An&&I(k,L),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(_,y,T)};function I(S,E){let L=t.update(x);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pe(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,p,x,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,u,x,null)}function M(S,E,L,_){let y=null,T=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)y=T;else if(y=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=y.uuid,F=E.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let Q=G[F];Q===void 0&&(Q=y.clone(),G[F]=Q,E.addEventListener("dispose",w)),y=Q}if(y.visible=E.visible,y.wireframe=E.wireframe,_===An?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=L}return y}function C(S,E,L,_,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===An)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let F=t.update(S),G=S.material;if(Array.isArray(G)){let Q=F.groups;for(let W=0,it=Q.length;W<it;W++){let k=Q[W],ot=G[k.materialIndex];if(ot&&ot.visible){let pt=M(S,ot,_,y);S.onBeforeShadow(i,S,E,L,F,pt,k),i.renderBufferDirect(L,null,F,pt,S,k),S.onAfterShadow(i,S,E,L,F,pt,k)}}}else if(G.visible){let Q=M(S,G,_,y);S.onBeforeShadow(i,S,E,L,F,Q,null),i.renderBufferDirect(L,null,F,Q,S,null),S.onAfterShadow(i,S,E,L,F,Q,null)}}let O=S.children;for(let F=0,G=O.length;F<G;F++)C(O[F],E,L,_,y)}function w(S){S.target.removeEventListener("dispose",w);for(let L in l){let _=l[L],y=S.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Xg={[ma]:Aa,[xa]:Ca,[va]:_a,[Vi]:ya,[Aa]:ma,[Ca]:xa,[_a]:va,[ya]:Vi};function Yg(i,t){function e(){let V=!1,at=new le,z=null,J=new le(0,0,0,0);return{setMask:function(dt){z!==dt&&!V&&(i.colorMask(dt,dt,dt,dt),z=dt)},setLocked:function(dt){V=dt},setClear:function(dt,ht,Ut,ce,we){we===!0&&(dt*=ce,ht*=ce,Ut*=ce),at.set(dt,ht,Ut,ce),J.equals(at)===!1&&(i.clearColor(dt,ht,Ut,ce),J.copy(at))},reset:function(){V=!1,z=null,J.set(-1,0,0,0)}}}function n(){let V=!1,at=!1,z=null,J=null,dt=null;return{setReversed:function(ht){if(at!==ht){let Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ce=dt;dt=null,this.setClear(ce)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?ct(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ht){z!==ht&&!V&&(i.depthMask(ht),z=ht)},setFunc:function(ht){if(at&&(ht=Xg[ht]),J!==ht){switch(ht){case ma:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){V=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){V=!1,z=null,J=null,dt=null,at=!1}}}function s(){let V=!1,at=null,z=null,J=null,dt=null,ht=null,Ut=null,ce=null,we=null;return{setTest:function(jt){V||(jt?ct(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(jt){at!==jt&&!V&&(i.stencilMask(jt),at=jt)},setFunc:function(jt,Ye,hn){(z!==jt||J!==Ye||dt!==hn)&&(i.stencilFunc(jt,Ye,hn),z=jt,J=Ye,dt=hn)},setOp:function(jt,Ye,hn){(ht!==jt||Ut!==Ye||ce!==hn)&&(i.stencilOp(jt,Ye,hn),ht=jt,Ut=Ye,ce=hn)},setLocked:function(jt){V=jt},setClear:function(jt){we!==jt&&(i.clearStencil(jt),we=jt)},reset:function(){V=!1,at=null,z=null,J=null,dt=null,ht=null,Ut=null,ce=null,we=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,u=[],m=null,x=!1,g=null,f=null,I=null,M=null,C=null,w=null,S=null,E=new Tt(0,0,0),L=0,_=!1,y=null,T=null,O=null,F=null,G=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=it>=1):k.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=it>=2);let ot=null,pt={},Mt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Qt=new le().fromArray(Mt),Y=new le().fromArray(Ft);function st(V,at,z,J){let dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(V,ht),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<z;Ut++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(at+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}let Ct={};Ct[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Vi),kt(!1),Ht(Ic),ct(i.CULL_FACE),U(on);function ct(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Et(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Lt(V,at){return d[V]!==at?(i.bindFramebuffer(V,at),d[V]=at,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Ot(V,at){let z=u,J=!1;if(V){z=p.get(at),z===void 0&&(z=[],p.set(at,z));let dt=V.textures;if(z.length!==dt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=dt.length;ht<Ut;ht++)z[ht]=i.COLOR_ATTACHMENT0+ht;z.length=dt.length,J=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,J=!0);J&&i.drawBuffers(z)}function oe(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let Wt={[jn]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};Wt[Vh]=i.MIN,Wt[Rh]=i.MAX;let he={[Ph]:i.ZERO,[Lh]:i.ONE,[Uh]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Dh]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[kh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,at,z,J,dt,ht,Ut,ce,we,jt){if(V===on){x===!0&&(Et(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),V!==wh){if(V!==g||jt!==_){if((f!==jn||C!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,C=jn),jt)switch(V){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,M=null,w=null,S=null,E.set(0,0,0),L=0,g=V,_=jt}return}dt=dt||at,ht=ht||z,Ut=Ut||J,(at!==f||dt!==C)&&(i.blendEquationSeparate(Wt[at],Wt[dt]),f=at,C=dt),(z!==I||J!==M||ht!==w||Ut!==S)&&(i.blendFuncSeparate(he[z],he[J],he[ht],he[Ut]),I=z,M=J,w=ht,S=Ut),(ce.equals(E)===!1||we!==L)&&(i.blendColor(ce.r,ce.g,ce.b,we),E.copy(ce),L=we),g=V,_=!1}function He(V,at){V.side===Xe?Et(i.CULL_FACE):ct(i.CULL_FACE);let z=V.side===qe;at&&(z=!z),kt(z),V.blending===bi&&V.transparent===!1?U(on):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let J=V.stencilWrite;o.setTest(J),J&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(V){y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),y=V)}function Ht(V){V!==Mh?(ct(i.CULL_FACE),V!==T&&(V===Ic?i.cullFace(i.BACK):V===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),T=V}function St(V){V!==O&&(W&&i.lineWidth(V),O=V)}function ie(V,at,z){V?(ct(i.POLYGON_OFFSET_FILL),(F!==at||G!==z)&&(i.polygonOffset(at,z),F=at,G=z)):Et(i.POLYGON_OFFSET_FILL)}function bt(V){V?ct(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function b(V){V===void 0&&(V=i.TEXTURE0+Q-1),ot!==V&&(i.activeTexture(V),ot=V)}function A(V,at,z){z===void 0&&(ot===null?z=i.TEXTURE0+Q-1:z=ot);let J=pt[z];J===void 0&&(J={type:void 0,texture:void 0},pt[z]=J),(J.type!==V||J.texture!==at)&&(ot!==z&&(i.activeTexture(z),ot=z),i.bindTexture(V,at||Ct[V]),J.type=V,J.texture=at)}function q(){let V=pt[ot];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(V){Qt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Qt.copy(V))}function At(V){Y.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Gt(V,at){let z=l.get(at);z===void 0&&(z=new WeakMap,l.set(at,z));let J=z.get(V);J===void 0&&(J=i.getUniformBlockIndex(at,V.name),z.set(V,J))}function Nt(V,at){let J=l.get(at).get(V);c.get(at)!==J&&(i.uniformBlockBinding(at,J,V.__bindingPointIndex),c.set(at,J))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,pt={},d={},p=new WeakMap,u=[],m=null,x=!1,g=null,f=null,I=null,M=null,C=null,w=null,S=null,E=new Tt(0,0,0),L=0,_=!1,y=null,T=null,O=null,F=null,G=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Et,bindFramebuffer:Lt,drawBuffers:Ot,useProgram:oe,setBlending:U,setMaterial:He,setFlipSided:kt,setCullFace:Ht,setLineWidth:St,setPolygonOffset:ie,setScissorTest:bt,activeTexture:b,bindTexture:A,unbindTexture:q,compressedTexImage2D:Z,compressedTexImage3D:$,texImage2D:mt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:et,texSubImage2D:X,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Rt,viewport:At,reset:te}}function Cl(i,t,e,n){let s=Zg(n);switch(e){case ql:return i*t;case Bl:return i*t;case Fl:return i*t*2;case Ho:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case js:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zl:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case yn:case Ll:return{byteLength:1,components:1};case as:case Ul:case en:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case ni:case Oo:case an:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,h=new WeakMap,d,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,A){return u?new OffscreenCanvas(b,A):tr("canvas")}function x(b,A,q){let Z=1,$=bt(b);if(($.width>q||$.height>q)&&(Z=q/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let X=Math.floor(Z*$.width),_t=Math.floor(Z*$.height);d===void 0&&(d=m(X,_t));let lt=A?m(X,_t):d;return lt.width=X,lt.height=_t,lt.getContext("2d").drawImage(b,0,0,X,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+_t+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,A,q,Z,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=A;if(A===i.RED&&(q===i.FLOAT&&(X=i.R32F),q===i.HALF_FLOAT&&(X=i.R16F),q===i.UNSIGNED_BYTE&&(X=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.R8UI),q===i.UNSIGNED_SHORT&&(X=i.R16UI),q===i.UNSIGNED_INT&&(X=i.R32UI),q===i.BYTE&&(X=i.R8I),q===i.SHORT&&(X=i.R16I),q===i.INT&&(X=i.R32I)),A===i.RG&&(q===i.FLOAT&&(X=i.RG32F),q===i.HALF_FLOAT&&(X=i.RG16F),q===i.UNSIGNED_BYTE&&(X=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RG8UI),q===i.UNSIGNED_SHORT&&(X=i.RG16UI),q===i.UNSIGNED_INT&&(X=i.RG32UI),q===i.BYTE&&(X=i.RG8I),q===i.SHORT&&(X=i.RG16I),q===i.INT&&(X=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RGB8UI),q===i.UNSIGNED_SHORT&&(X=i.RGB16UI),q===i.UNSIGNED_INT&&(X=i.RGB32UI),q===i.BYTE&&(X=i.RGB8I),q===i.SHORT&&(X=i.RGB16I),q===i.INT&&(X=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),q===i.UNSIGNED_INT&&(X=i.RGBA32UI),q===i.BYTE&&(X=i.RGBA8I),q===i.SHORT&&(X=i.RGBA16I),q===i.INT&&(X=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),A===i.RGBA){let _t=$?Mr:zt.getTransfer(Z);q===i.FLOAT&&(X=i.RGBA32F),q===i.HALF_FLOAT&&(X=i.RGBA16F),q===i.UNSIGNED_BYTE&&(X=_t===Kt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function C(b,A){let q;return b?A===null||A===ni||A===Li?q=i.DEPTH24_STENCIL8:A===an?q=i.DEPTH32F_STENCIL8:A===as&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ni||A===Li?q=i.DEPTH_COMPONENT24:A===an?q=i.DEPTH_COMPONENT32F:A===as&&(q=i.DEPTH_COMPONENT16),q}function w(b,A){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==ze&&b.minFilter!==rn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function S(b){let A=b.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&h.delete(A)}function E(b){let A=b.target;A.removeEventListener("dispose",E),y(A)}function L(b){let A=n.get(b);if(A.__webglInit===void 0)return;let q=b.source,Z=p.get(q);if(Z){let $=Z[A.__cacheKey];$.usedTimes--,$.usedTimes===0&&_(b),Object.keys(Z).length===0&&p.delete(q)}n.remove(b)}function _(b){let A=n.get(b);i.deleteTexture(A.__webglTexture);let q=b.source,Z=p.get(q);delete Z[A.__cacheKey],a.memory.textures--}function y(b){let A=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let $=0;$<A.__webglFramebuffer[Z].length;$++)i.deleteFramebuffer(A.__webglFramebuffer[Z][$]);else i.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[Z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=b.textures;for(let Z=0,$=q.length;Z<$;Z++){let X=n.get(q[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(q[Z])}n.remove(b)}let T=0;function O(){T=0}function F(){let b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function G(b){let A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function Q(b,A){let q=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(q,b,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function W(b,A){let q=n.get(b);if(b.version>0&&q.__version!==b.version){Y(q,b,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function it(b,A){let q=n.get(b);if(b.version>0&&q.__version!==b.version){Y(q,b,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function k(b,A){let q=n.get(b);if(b.version>0&&q.__version!==b.version){st(q,b,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let ot={[rs]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},pt={[ze]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Mt={[Qh]:i.NEVER,[su]:i.ALWAYS,[$h]:i.LESS,[Hl]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Ft(b,A){if(A.type===an&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===rn||A.magFilter===Nr||A.magFilter===_s||A.magFilter===ei||A.minFilter===rn||A.minFilter===Nr||A.minFilter===_s||A.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ot[A.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ot[A.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ot[A.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,pt[A.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,pt[A.minFilter]),A.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ze||A.minFilter!==_s&&A.minFilter!==ei||A.type===an&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(b,A){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",S));let Z=A.source,$=p.get(Z);$===void 0&&($={},p.set(Z,$));let X=G(A);if(X!==b.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),$[X].usedTimes++;let _t=$[b.__cacheKey];_t!==void 0&&($[b.__cacheKey].usedTimes--,_t.usedTimes===0&&_(A)),b.__cacheKey=X,b.__webglTexture=$[X].texture}return q}function Y(b,A,q){let Z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=i.TEXTURE_3D);let $=Qt(b,A),X=A.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+q);let _t=n.get(X);if(X.version!==_t.__version||$===!0){e.activeTexture(i.TEXTURE0+q);let lt=zt.getPrimaries(zt.workingColorSpace),gt=A.colorSpace===Ln?null:zt.getPrimaries(A.colorSpace),Xt=A.colorSpace===Ln||lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let et=x(A.image,!1,s.maxTextureSize);et=ie(A,et);let mt=r.convert(A.format,A.colorSpace),wt=r.convert(A.type),Rt=M(A.internalFormat,mt,wt,A.colorSpace,A.isVideoTexture);Ft(Z,A);let At,Gt=A.mipmaps,Nt=A.isVideoTexture!==!0,te=_t.__version===void 0||$===!0,V=X.dataReady,at=w(A,et);if(A.isDepthTexture)Rt=C(A.format===Ui,A.type),te&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,mt,wt,null));else if(A.isDataTexture)if(Gt.length>0){Nt&&te&&e.texStorage2D(i.TEXTURE_2D,at,Rt,Gt[0].width,Gt[0].height);for(let z=0,J=Gt.length;z<J;z++)At=Gt[z],Nt?V&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,At.width,At.height,mt,wt,At.data):e.texImage2D(i.TEXTURE_2D,z,Rt,At.width,At.height,0,mt,wt,At.data);A.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(i.TEXTURE_2D,at,Rt,et.width,et.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,wt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,mt,wt,et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Rt,Gt[0].width,Gt[0].height,et.depth);for(let z=0,J=Gt.length;z<J;z++)if(At=Gt[z],A.format!==$e)if(mt!==null)if(Nt){if(V)if(A.layerUpdates.size>0){let dt=Cl(At.width,At.height,A.format,A.type);for(let ht of A.layerUpdates){let Ut=At.data.subarray(ht*dt/At.data.BYTES_PER_ELEMENT,(ht+1)*dt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ht,At.width,At.height,1,mt,Ut)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,At.width,At.height,et.depth,mt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Rt,At.width,At.height,et.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,At.width,At.height,et.depth,mt,wt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Rt,At.width,At.height,et.depth,0,mt,wt,At.data)}else{Nt&&te&&e.texStorage2D(i.TEXTURE_2D,at,Rt,Gt[0].width,Gt[0].height);for(let z=0,J=Gt.length;z<J;z++)At=Gt[z],A.format!==$e?mt!==null?Nt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,At.width,At.height,mt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Rt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?V&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,At.width,At.height,mt,wt,At.data):e.texImage2D(i.TEXTURE_2D,z,Rt,At.width,At.height,0,mt,wt,At.data)}else if(A.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Rt,et.width,et.height,et.depth),V)if(A.layerUpdates.size>0){let z=Cl(et.width,et.height,A.format,A.type);for(let J of A.layerUpdates){let dt=et.data.subarray(J*z/et.data.BYTES_PER_ELEMENT,(J+1)*z/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,mt,wt,dt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,wt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,mt,wt,et.data);else if(A.isData3DTexture)Nt?(te&&e.texStorage3D(i.TEXTURE_3D,at,Rt,et.width,et.height,et.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,wt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,mt,wt,et.data);else if(A.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(i.TEXTURE_2D,at,Rt,et.width,et.height);else{let z=et.width,J=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(i.TEXTURE_2D,dt,Rt,z,J,0,mt,wt,null),z>>=1,J>>=1}}else if(Gt.length>0){if(Nt&&te){let z=bt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,at,Rt,z.width,z.height)}for(let z=0,J=Gt.length;z<J;z++)At=Gt[z],Nt?V&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,mt,wt,At):e.texImage2D(i.TEXTURE_2D,z,Rt,mt,wt,At);A.generateMipmaps=!1}else if(Nt){if(te){let z=bt(et);e.texStorage2D(i.TEXTURE_2D,at,Rt,z.width,z.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,wt,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,mt,wt,et);g(A)&&f(Z),_t.__version=X.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function st(b,A,q){if(A.image.length!==6)return;let Z=Qt(b,A),$=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+q);let X=n.get($);if($.version!==X.__version||Z===!0){e.activeTexture(i.TEXTURE0+q);let _t=zt.getPrimaries(zt.workingColorSpace),lt=A.colorSpace===Ln?null:zt.getPrimaries(A.colorSpace),gt=A.colorSpace===Ln||_t===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,et=A.image[0]&&A.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Xt&&!et?mt[J]=x(A.image[J],!0,s.maxCubemapSize):mt[J]=et?A.image[J].image:A.image[J],mt[J]=ie(A,mt[J]);let wt=mt[0],Rt=r.convert(A.format,A.colorSpace),At=r.convert(A.type),Gt=M(A.internalFormat,Rt,At,A.colorSpace),Nt=A.isVideoTexture!==!0,te=X.__version===void 0||Z===!0,V=$.dataReady,at=w(A,wt);Ft(i.TEXTURE_CUBE_MAP,A);let z;if(Xt){Nt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Gt,wt.width,wt.height);for(let J=0;J<6;J++){z=mt[J].mipmaps;for(let dt=0;dt<z.length;dt++){let ht=z[dt];A.format!==$e?Rt!==null?Nt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,Rt,At,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Gt,ht.width,ht.height,0,Rt,At,ht.data)}}}else{if(z=A.mipmaps,Nt&&te){z.length>0&&at++;let J=bt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Nt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Rt,At,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,mt[J].width,mt[J].height,0,Rt,At,mt[J].data);for(let dt=0;dt<z.length;dt++){let Ut=z[dt].image[J].image;Nt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ut.width,Ut.height,Rt,At,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Gt,Ut.width,Ut.height,0,Rt,At,Ut.data)}}else{Nt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,At,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Rt,At,mt[J]);for(let dt=0;dt<z.length;dt++){let ht=z[dt];Nt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Rt,At,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Gt,Rt,At,ht.image[J])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),X.__version=$.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Ct(b,A,q,Z,$,X){let _t=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),gt=M(q.internalFormat,_t,lt,q.colorSpace),Xt=n.get(A),et=n.get(q);if(et.__renderTarget=A,!Xt.__hasExternalTextures){let mt=Math.max(1,A.width>>X),wt=Math.max(1,A.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,X,gt,mt,wt,A.depth,0,_t,lt,null):e.texImage2D($,X,gt,mt,wt,0,_t,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,et.__webglTexture,0,kt(A)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,et.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(b,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,b),A.depthBuffer){let Z=A.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,X=C(A.stencilBuffer,$),_t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=kt(A);Ht(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,X,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,X,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,X,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,b)}else{let Z=A.textures;for(let $=0;$<Z.length;$++){let X=Z[$],_t=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),gt=M(X.internalFormat,_t,lt,X.colorSpace),Xt=kt(A);q&&Ht(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,gt,A.width,A.height):Ht(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(A.depthTexture);Z.__renderTarget=A,(!Z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);let $=Z.__webglTexture,X=kt(A);if(A.depthTexture.format===Si)Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(A.depthTexture.format===Ui)Ht(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(b){let A=n.get(b),q=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Z){let $=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),A.__depthDisposeCallback=$}A.__boundDepthTexture=Z}if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Et(A.__webglFramebuffer,b)}else if(q){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]===void 0)A.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(A.__webglDepthbuffer[Z],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ct(A.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,A,q){let Z=n.get(b);A!==void 0&&Ct(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Lt(b)}function oe(b){let A=b.texture,q=n.get(b),Z=n.get(A);b.addEventListener("dispose",E);let $=b.textures,X=b.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=A.version,a.memory.textures++),X){q.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[lt]=[];for(let gt=0;gt<A.mipmaps.length;gt++)q.__webglFramebuffer[lt][gt]=i.createFramebuffer()}else q.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)q.__webglFramebuffer[lt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(_t)for(let lt=0,gt=$.length;lt<gt;lt++){let Xt=n.get($[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let lt=0;lt<$.length;lt++){let gt=$[lt];q.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[lt]);let Xt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),mt=M(gt.internalFormat,Xt,et,gt.colorSpace,b.isXRRenderTarget===!0),wt=kt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,mt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,q.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(q.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let gt=0;gt<A.mipmaps.length;gt++)Ct(q.__webglFramebuffer[lt][gt],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else Ct(q.__webglFramebuffer[lt],b,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let lt=0,gt=$.length;lt<gt;lt++){let Xt=$[lt],et=n.get(Xt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Ft(i.TEXTURE_2D,Xt),Ct(q.__webglFramebuffer,b,Xt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Ft(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let gt=0;gt<A.mipmaps.length;gt++)Ct(q.__webglFramebuffer[gt],b,A,i.COLOR_ATTACHMENT0,lt,gt);else Ct(q.__webglFramebuffer,b,A,i.COLOR_ATTACHMENT0,lt,0);g(A)&&f(lt),e.unbindTexture()}b.depthBuffer&&Lt(b)}function Wt(b){let A=b.textures;for(let q=0,Z=A.length;q<Z;q++){let $=A[q];if(g($)){let X=I(b),_t=n.get($).__webglTexture;e.bindTexture(X,_t),f(X),e.unbindTexture()}}}let he=[],U=[];function He(b){if(b.samples>0){if(Ht(b)===!1){let A=b.textures,q=b.width,Z=b.height,$=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(b),lt=A.length>1;if(lt)for(let gt=0;gt<A.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[gt]);let Xt=n.get(A[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,q,Z,0,0,q,Z,$,i.NEAREST),c===!0&&(he.length=0,U.length=0,he.push(i.COLOR_ATTACHMENT0+gt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<A.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[gt]);let Xt=n.get(A[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let A=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function kt(b){return Math.min(s.maxSamples,b.samples)}function Ht(b){let A=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function St(b){let A=a.render.frame;h.get(b)!==A&&(h.set(b,A),b.update())}function ie(b,A){let q=b.colorSpace,Z=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==Oi&&q!==Ln&&(zt.getTransfer(q)===Kt?(Z!==$e||$!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function bt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=k,this.rebindTextures=Ot,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function Kg(i,t){function e(n,s=Ln){let r,a=zt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.BYTE;if(n===Ul)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Nl)return i.RGB;if(n===$e)return i.RGBA;if(n===Bl)return i.LUMINANCE;if(n===Fl)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===Ks)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===wa||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ra)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ua||n===Da||n===qa||n===Na||n===Ba||n===Fa||n===Oa||n===za||n===ka||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Ja||n===Ka||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var po=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&p>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ge({vertexShader:Qg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mo=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,u=null,m=null,x=new go,g=e.getContextAttributes(),f=null,I=null,M=[],C=[],w=new Vt,S=null,E=new Re;E.viewport=new le;let L=new Re;L.viewport=new le;let _=[E,L],y=new po,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=M[Y];return st===void 0&&(st=new ss,M[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=M[Y];return st===void 0&&(st=new ss,M[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=M[Y];return st===void 0&&(st=new ss,M[Y]=st),st.getHandSpace()};function F(Y){let st=C.indexOf(Y.inputSource);if(st===-1)return;let Ct=M[st];Ct!==void 0&&(Ct.update(Y.inputSource,Y.frame,l||a),Ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<M.length;Y++){let st=C[Y];st!==null&&(C[Y]=null,M[Y].disconnect(st))}T=null,O=null,x.reset(),t.setRenderTarget(f),u=null,p=null,d=null,s=null,I=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),I=new Pe(u.framebufferWidth,u.framebufferHeight,{format:$e,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Ct=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Ui:Si,Ct=g.stencil?Li:ni);let Et={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Et),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),I=new Pe(p.textureWidth,p.textureHeight,{format:$e,type:yn,depthTexture:new lr(p.textureWidth,p.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(Y){for(let st=0;st<Y.removed.length;st++){let Ct=Y.removed[st],ct=C.indexOf(Ct);ct>=0&&(C[ct]=null,M[ct].disconnect(Ct))}for(let st=0;st<Y.added.length;st++){let Ct=Y.added[st],ct=C.indexOf(Ct);if(ct===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=C.length){C.push(Ct),ct=Lt;break}else if(C[Lt]===null){C[Lt]=Ct,ct=Lt;break}if(ct===-1)break}let Et=M[ct];Et&&Et.connect(Ct)}}let W=new D,it=new D;function k(Y,st,Ct){W.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);let ct=W.distanceTo(it),Et=st.projectionMatrix.elements,Lt=Ct.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),oe=Et[14]/(Et[10]+1),Wt=(Et[9]+1)/Et[5],he=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],He=(Lt[8]+1)/Lt[0],kt=Ot*U,Ht=Ot*He,St=ct/(-U+He),ie=St*-U;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let bt=Ot+St,b=oe+St,A=kt-ie,q=Ht+(ct-ie),Z=Wt*oe/b*bt,$=he*oe/b*bt;Y.projectionMatrix.makePerspective(A,q,Z,$,bt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,Ct=Y.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(Ct=x.depthFar)),y.near=L.near=E.near=st,y.far=L.far=E.far=Ct,(T!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,O=y.far),E.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,y.layers.mask=E.layers.mask|L.layers.mask;let ct=Y.parent,Et=y.cameras;ot(y,ct);for(let Lt=0;Lt<Et.length;Lt++)ot(Et[Lt],ct);Et.length===2?k(y,E,L):y.projectionMatrix.copy(E.projectionMatrix),pt(Y,y,ct)};function pt(Y,st,Ct){Ct===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(Ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$a*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Mt=null;function Ft(Y,st){if(h=st.getViewerPose(l||a),m=st,h!==null){let Ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(I,u.framebuffer),t.setRenderTarget(I));let ct=!1;Ct.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Lt=0;Lt<Ct.length;Lt++){let Ot=Ct[Lt],oe=null;if(u!==null)oe=u.getViewport(Ot);else{let he=d.getViewSubImage(p,Ot);oe=he.viewport,Lt===0&&(t.setRenderTargetTextures(I,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(I))}let Wt=_[Lt];Wt===void 0&&(Wt=new Re,Wt.layers.enable(Lt),Wt.viewport=new le,_[Lt]=Wt),Wt.matrix.fromArray(Ot.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ot.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Lt===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Wt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Lt=d.getDepthInformation(Ct[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,s.renderState)}}for(let Ct=0;Ct<M.length;Ct++){let ct=C[Ct],Et=M[Ct];ct!==null&&Et!==void 0&&Et.update(ct,st,l||a)}Mt&&Mt(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let Qt=new Yl;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}},Jn=new cn,tm=new ne;function em(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Xl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,I,M,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&u(g,f,C)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,I,M):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===qe&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===qe&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let I=t.get(f),M=I.envMap,C=I.envMapRotation;M&&(g.envMap.value=M,Jn.copy(C),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),g.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Jn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,I,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*I,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function u(g,f,I){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let I=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,M){let C=M.program;n.uniformBlockBinding(I,C)}function l(I,M){let C=s[I.id];C===void 0&&(m(I),C=h(I),s[I.id]=C,I.addEventListener("dispose",g));let w=M.program;n.updateUBOMapping(I,w);let S=t.render.frame;r[I.id]!==S&&(p(I),r[I.id]=S)}function h(I){let M=d();I.__bindingPointIndex=M;let C=i.createBuffer(),w=I.__size,S=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function d(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(I){let M=s[I.id],C=I.uniforms,w=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,E=C.length;S<E;S++){let L=Array.isArray(C[S])?C[S]:[C[S]];for(let _=0,y=L.length;_<y;_++){let T=L[_];if(u(T,S,_,w)===!0){let O=T.__offset,F=Array.isArray(T.value)?T.value:[T.value],G=0;for(let Q=0;Q<F.length;Q++){let W=F[Q],it=x(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+G,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,G),G+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(I,M,C,w){let S=I.value,E=M+"_"+C;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{let L=w[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return w[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(I){let M=I.uniforms,C=0,w=16;for(let E=0,L=M.length;E<L;E++){let _=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,T=_.length;y<T;y++){let O=_[y],F=Array.isArray(O.value)?O.value:[O.value];for(let G=0,Q=F.length;G<Q;G++){let W=F[G],it=x(W),k=C%w,ot=k%it.boundary,pt=k+ot;C+=ot,pt!==0&&w-pt<it.storage&&(C+=w-pt),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=it.storage}}}let S=C%w;return S>0&&(C+=w-S),I.__size=C,I.__cache={},this}function x(I){let M={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(M.boundary=4,M.storage=4):I.isVector2?(M.boundary=8,M.storage=8):I.isVector3||I.isColor?(M.boundary=16,M.storage=12):I.isVector4?(M.boundary=16,M.storage=16):I.isMatrix3?(M.boundary=48,M.storage=48):I.isMatrix4?(M.boundary=64,M.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),M}function g(I){let M=I.target;M.removeEventListener("dispose",g);let C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var hr=class{constructor(t={}){let{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,I=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Un,this.toneMappingExposure=1;let C=this,w=!1,S=0,E=0,L=null,_=-1,y=null,T=new le,O=new le,F=null,G=new Tt(0),Q=0,W=e.width,it=e.height,k=1,ot=null,pt=null,Mt=new le(0,0,W,it),Ft=new le(0,0,W,it),Qt=!1,Y=new ls,st=!1,Ct=!1,ct=new ne,Et=new ne,Lt=new D,Ot=new le,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function he(){return L===null?k:1}let U=n;function He(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){let R="webgl2";if(U=He(R,v),U===null)throw He(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let kt,Ht,St,ie,bt,b,A,q,Z,$,X,_t,lt,gt,Xt,et,mt,wt,Rt,At,Gt,Nt,te,V;function at(){kt=new xp(U),kt.init(),Nt=new Kg(U,kt),Ht=new dp(U,kt,t,Nt),St=new Yg(U,kt),Ht.reverseDepthBuffer&&p&&St.buffers.depth.setReversed(!0),ie=new Cp(U),bt=new Ug,b=new Jg(U,kt,St,bt,Ht,Nt,ie),A=new pp(C),q=new Ap(C),Z=new wu(U),te=new hp(U,Z),$=new vp(U,Z,ie,te),X=new Ip(U,$,Z,ie),Rt=new _p(U,Ht,b),et=new fp(bt),_t=new Lg(C,A,q,kt,Ht,te,et),lt=new em(C,bt),gt=new qg,Xt=new kg(kt),wt=new lp(C,A,q,St,X,u,c),mt=new Wg(C,X,Ht),V=new nm(U,ie,Ht,St),At=new up(U,kt,ie),Gt=new yp(U,kt,ie),ie.programs=_t.programs,C.capabilities=Ht,C.extensions=kt,C.properties=bt,C.renderLists=gt,C.shadowMap=mt,C.state=St,C.info=ie}at();let z=new mo(C,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(W,it,!1))},this.getSize=function(v){return v.set(W,it)},this.setSize=function(v,R,N=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,it=R,e.width=Math.floor(v*k),e.height=Math.floor(R*k),N===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(W*k,it*k).floor()},this.setDrawingBufferSize=function(v,R,N){W=v,it=R,k=N,e.width=Math.floor(v*N),e.height=Math.floor(R*N),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,R,N,B){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,R,N,B),St.viewport(T.copy(Mt).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,R,N,B){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,R,N,B),St.scissor(O.copy(Ft).multiplyScalar(k).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){St.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){pt=v},this.getClearColor=function(v){return v.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(v=!0,R=!0,N=!0){let B=0;if(v){let P=!1;if(L!==null){let nt=L.texture.format;P=nt===Xo||nt===Wo||nt===Go}if(P){let nt=L.texture.type,ut=nt===yn||nt===ni||nt===as||nt===Li||nt===zo||nt===ko,xt=wt.getClearColor(),vt=wt.getClearAlpha(),Pt=xt.r,Dt=xt.g,yt=xt.b;ut?(m[0]=Pt,m[1]=Dt,m[2]=yt,m[3]=vt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Pt,x[1]=Dt,x[2]=yt,x[3]=vt,U.clearBufferiv(U.COLOR,0,x))}else B|=U.COLOR_BUFFER_BIT}R&&(B|=U.DEPTH_BUFFER_BIT),N&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),Xt.dispose(),bt.dispose(),A.dispose(),q.dispose(),X.dispose(),te.dispose(),V.dispose(),_t.dispose(),z.dispose(),z.removeEventListener("sessionstart",rc),z.removeEventListener("sessionend",ac),Hn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let v=ie.autoReset,R=mt.enabled,N=mt.autoUpdate,B=mt.needsUpdate,P=mt.type;at(),ie.autoReset=v,mt.enabled=R,mt.autoUpdate=N,mt.needsUpdate=B,mt.type=P}function ht(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ut(v){let R=v.target;R.removeEventListener("dispose",Ut),ce(R)}function ce(v){we(v),bt.remove(v)}function we(v){let R=bt.get(v).programs;R!==void 0&&(R.forEach(function(N){_t.releaseProgram(N)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,N,B,P,nt){R===null&&(R=oe);let ut=P.isMesh&&P.matrixWorld.determinant()<0,xt=Ah(v,R,N,B,P);St.setMaterial(B,ut);let vt=N.index,Pt=1;if(B.wireframe===!0){if(vt=$.getWireframeAttribute(N),vt===void 0)return;Pt=2}let Dt=N.drawRange,yt=N.attributes.position,Yt=Dt.start*Pt,ee=(Dt.start+Dt.count)*Pt;nt!==null&&(Yt=Math.max(Yt,nt.start*Pt),ee=Math.min(ee,(nt.start+nt.count)*Pt)),vt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,vt.count)):yt!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,yt.count));let se=ee-Yt;if(se<0||se===1/0)return;te.setup(P,B,xt,N,vt);let Le,Zt=At;if(vt!==null&&(Le=Z.get(vt),Zt=Gt,Zt.setIndex(Le)),P.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*he()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(P.isLine){let It=B.linewidth;It===void 0&&(It=1),St.setLineWidth(It*he()),P.isLineSegments?Zt.setMode(U.LINES):P.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else P.isPoints?Zt.setMode(U.POINTS):P.isSprite&&Zt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let It=P._multiDrawStarts,un=P._multiDrawCounts,Jt=P._multiDrawCount,Ze=vt?Z.get(vt).bytesPerElement:1,ci=bt.get(B).currentProgram.getUniforms();for(let Be=0;Be<Jt;Be++)ci.setValue(U,"_gl_DrawID",Be),Zt.render(It[Be]/Ze,un[Be])}else if(P.isInstancedMesh)Zt.renderInstances(Yt,se,P.count);else if(N.isInstancedBufferGeometry){let It=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,un=Math.min(N.instanceCount,It);Zt.renderInstances(Yt,se,un)}else Zt.render(Yt,se)};function jt(v,R,N){v.transparent===!0&&v.side===Xe&&v.forceSinglePass===!1?(v.side=qe,v.needsUpdate=!0,As(v,R,N),v.side=Dn,v.needsUpdate=!0,As(v,R,N),v.side=Xe):As(v,R,N)}this.compile=function(v,R,N=null){N===null&&(N=v),f=Xt.get(N),f.init(R),M.push(f),N.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),v!==N&&v.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights();let B=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let nt=P.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){let xt=nt[ut];jt(xt,N,P),B.add(xt)}else jt(nt,N,P),B.add(nt)}),M.pop(),f=null,B},this.compileAsync=function(v,R,N=null){let B=this.compile(v,R,N);return new Promise(P=>{function nt(){if(B.forEach(function(ut){bt.get(ut).currentProgram.isReady()&&B.delete(ut)}),B.size===0){P(v);return}setTimeout(nt,10)}kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ye=null;function hn(v){Ye&&Ye(v)}function rc(){Hn.stop()}function ac(){Hn.start()}let Hn=new Yl;Hn.setAnimationLoop(hn),typeof self!="undefined"&&Hn.setContext(self),this.setAnimationLoop=function(v){Ye=v,z.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},z.addEventListener("sessionstart",rc),z.addEventListener("sessionend",ac),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(R),R=z.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,R,L),f=Xt.get(v,M.length),f.init(R),M.push(f),Et.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Y.setFromProjectionMatrix(Et),Ct=this.localClippingEnabled,st=et.init(this.clippingPlanes,Ct),g=gt.get(v,I.length),g.init(),I.push(g),z.enabled===!0&&z.isPresenting===!0){let nt=C.xr.getDepthSensingMesh();nt!==null&&Ur(nt,R,-1/0,C.sortObjects)}Ur(v,R,0,C.sortObjects),g.finish(),C.sortObjects===!0&&g.sort(ot,pt),Wt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Wt&&wt.addToRenderList(g,v),this.info.render.frame++,st===!0&&et.beginShadows();let N=f.state.shadowsArray;mt.render(N,v,R),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,P=g.transmissive;if(f.setupLights(),R.isArrayCamera){let nt=R.cameras;if(P.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){let vt=nt[ut];cc(B,P,v,vt)}Wt&&wt.render(v);for(let ut=0,xt=nt.length;ut<xt;ut++){let vt=nt[ut];oc(g,v,vt,vt.viewport)}}else P.length>0&&cc(B,P,v,R),Wt&&wt.render(v),oc(g,v,R);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(C,v,R),te.resetDefaultState(),_=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],st===!0&&et.setGlobalState(C.clippingPlanes,f.state.camera)):f=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function Ur(v,R,N,B){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){B&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Et);let ut=X.update(v),xt=v.material;xt.visible&&g.push(v,ut,xt,N,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){let ut=X.update(v),xt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ot.copy(ut.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(Et)),Array.isArray(xt)){let vt=ut.groups;for(let Pt=0,Dt=vt.length;Pt<Dt;Pt++){let yt=vt[Pt],Yt=xt[yt.materialIndex];Yt&&Yt.visible&&g.push(v,ut,Yt,N,Ot.z,yt)}}else xt.visible&&g.push(v,ut,xt,N,Ot.z,null)}}let nt=v.children;for(let ut=0,xt=nt.length;ut<xt;ut++)Ur(nt[ut],R,N,B)}function oc(v,R,N,B){let P=v.opaque,nt=v.transmissive,ut=v.transparent;f.setupLightsView(N),st===!0&&et.setGlobalState(C.clippingPlanes,N),B&&St.viewport(T.copy(B)),P.length>0&&ms(P,R,N),nt.length>0&&ms(nt,R,N),ut.length>0&&ms(ut,R,N),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function cc(v,R,N,B){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Pe(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?en:yn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));let nt=f.state.transmissionRenderTarget[B.id],ut=B.viewport||T;nt.setSize(ut.z,ut.w);let xt=C.getRenderTarget();C.setRenderTarget(nt),C.getClearColor(G),Q=C.getClearAlpha(),Q<1&&C.setClearColor(16777215,.5),C.clear(),Wt&&wt.render(N);let vt=C.toneMapping;C.toneMapping=Un;let Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),st===!0&&et.setGlobalState(C.clippingPlanes,B),ms(v,N,B),b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let yt=0,Yt=R.length;yt<Yt;yt++){let ee=R[yt],se=ee.object,Le=ee.geometry,Zt=ee.material,It=ee.group;if(Zt.side===Xe&&se.layers.test(B.layers)){let un=Zt.side;Zt.side=qe,Zt.needsUpdate=!0,lc(se,N,B,Le,Zt,It),Zt.side=un,Zt.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt))}C.setRenderTarget(xt),C.setClearColor(G,Q),Pt!==void 0&&(B.viewport=Pt),C.toneMapping=vt}function ms(v,R,N){let B=R.isScene===!0?R.overrideMaterial:null;for(let P=0,nt=v.length;P<nt;P++){let ut=v[P],xt=ut.object,vt=ut.geometry,Pt=B===null?ut.material:B,Dt=ut.group;xt.layers.test(N.layers)&&lc(xt,R,N,vt,Pt,Dt)}}function lc(v,R,N,B,P,nt){v.onBeforeRender(C,R,N,B,P,nt),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(C,R,N,B,v,nt),P.transparent===!0&&P.side===Xe&&P.forceSinglePass===!1?(P.side=qe,P.needsUpdate=!0,C.renderBufferDirect(N,R,B,P,v,nt),P.side=Dn,P.needsUpdate=!0,C.renderBufferDirect(N,R,B,P,v,nt),P.side=Xe):C.renderBufferDirect(N,R,B,P,v,nt),v.onAfterRender(C,R,N,B,P,nt)}function As(v,R,N){R.isScene!==!0&&(R=oe);let B=bt.get(v),P=f.state.lights,nt=f.state.shadowsArray,ut=P.state.version,xt=_t.getParameters(v,P.state,nt,R,N),vt=_t.getProgramCacheKey(xt),Pt=B.programs;B.environment=v.isMeshStandardMaterial?R.environment:null,B.fog=R.fog,B.envMap=(v.isMeshStandardMaterial?q:A).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Pt===void 0&&(v.addEventListener("dispose",Ut),Pt=new Map,B.programs=Pt);let Dt=Pt.get(vt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===ut)return uc(v,xt),Dt}else xt.uniforms=_t.getUniforms(v),v.onBeforeCompile(xt,C),Dt=_t.acquireProgram(xt,vt),Pt.set(vt,Dt),B.uniforms=xt.uniforms;let yt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=et.uniform),uc(v,xt),B.needsLights=vh(v),B.lightsStateVersion=ut,B.needsLights&&(yt.ambientLightColor.value=P.state.ambient,yt.lightProbe.value=P.state.probe,yt.directionalLights.value=P.state.directional,yt.directionalLightShadows.value=P.state.directionalShadow,yt.spotLights.value=P.state.spot,yt.spotLightShadows.value=P.state.spotShadow,yt.rectAreaLights.value=P.state.rectArea,yt.ltc_1.value=P.state.rectAreaLTC1,yt.ltc_2.value=P.state.rectAreaLTC2,yt.pointLights.value=P.state.point,yt.pointLightShadows.value=P.state.pointShadow,yt.hemisphereLights.value=P.state.hemi,yt.directionalShadowMap.value=P.state.directionalShadowMap,yt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,yt.spotShadowMap.value=P.state.spotShadowMap,yt.spotLightMatrix.value=P.state.spotLightMatrix,yt.spotLightMap.value=P.state.spotLightMap,yt.pointShadowMap.value=P.state.pointShadowMap,yt.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function hc(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Ei.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function uc(v,R){let N=bt.get(v);N.outputColorSpace=R.outputColorSpace,N.batching=R.batching,N.batchingColor=R.batchingColor,N.instancing=R.instancing,N.instancingColor=R.instancingColor,N.instancingMorph=R.instancingMorph,N.skinning=R.skinning,N.morphTargets=R.morphTargets,N.morphNormals=R.morphNormals,N.morphColors=R.morphColors,N.morphTargetsCount=R.morphTargetsCount,N.numClippingPlanes=R.numClippingPlanes,N.numIntersection=R.numClipIntersection,N.vertexAlphas=R.vertexAlphas,N.vertexTangents=R.vertexTangents,N.toneMapping=R.toneMapping}function Ah(v,R,N,B,P){R.isScene!==!0&&(R=oe),b.resetTextureUnits();let nt=R.fog,ut=B.isMeshStandardMaterial?R.environment:null,xt=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Oi,vt=(B.isMeshStandardMaterial?q:A).get(B.envMap||ut),Pt=B.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Dt=!!N.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!N.morphAttributes.position,Yt=!!N.morphAttributes.normal,ee=!!N.morphAttributes.color,se=Un;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=C.toneMapping);let Le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Zt=Le!==void 0?Le.length:0,It=bt.get(B),un=f.state.lights;if(st===!0&&(Ct===!0||v!==y)){let Ge=v===y&&B.id===_;et.setState(B,v,Ge)}let Jt=!1;B.version===It.__version?(It.needsLights&&It.lightsStateVersion!==un.state.version||It.outputColorSpace!==xt||P.isBatchedMesh&&It.batching===!1||!P.isBatchedMesh&&It.batching===!0||P.isBatchedMesh&&It.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&It.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&It.instancing===!1||!P.isInstancedMesh&&It.instancing===!0||P.isSkinnedMesh&&It.skinning===!1||!P.isSkinnedMesh&&It.skinning===!0||P.isInstancedMesh&&It.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&It.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&It.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&It.instancingMorph===!1&&P.morphTexture!==null||It.envMap!==vt||B.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==et.numPlanes||It.numIntersection!==et.numIntersection)||It.vertexAlphas!==Pt||It.vertexTangents!==Dt||It.morphTargets!==yt||It.morphNormals!==Yt||It.morphColors!==ee||It.toneMapping!==se||It.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,It.__version=B.version);let Ze=It.currentProgram;Jt===!0&&(Ze=As(B,R,P));let ci=!1,Be=!1,Wi=!1,re=Ze.getUniforms(),nn=It.uniforms;if(St.useProgram(Ze.program)&&(ci=!0,Be=!0,Wi=!0),B.id!==_&&(_=B.id,Be=!0),ci||y!==v){St.buffers.depth.getReversed()?(ct.copy(v.projectionMatrix),cu(ct),lu(ct),re.setValue(U,"projectionMatrix",ct)):re.setValue(U,"projectionMatrix",v.projectionMatrix),re.setValue(U,"viewMatrix",v.matrixWorldInverse);let bn=re.map.cameraPosition;bn!==void 0&&bn.setValue(U,Lt.setFromMatrixPosition(v.matrixWorld)),Ht.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Be=!0,Wi=!0)}if(P.isSkinnedMesh){re.setOptional(U,P,"bindMatrix"),re.setOptional(U,P,"bindMatrixInverse");let Ge=P.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),re.setValue(U,"boneTexture",Ge.boneTexture,b))}P.isBatchedMesh&&(re.setOptional(U,P,"batchingTexture"),re.setValue(U,"batchingTexture",P._matricesTexture,b),re.setOptional(U,P,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",P._indirectTexture,b),re.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",P._colorsTexture,b));let Xi=N.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Rt.update(P,N,Ze),(Be||It.receiveShadow!==P.receiveShadow)&&(It.receiveShadow=P.receiveShadow,re.setValue(U,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nn.envMap.value=vt,nn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&R.environment!==null&&(nn.envMapIntensity.value=R.environmentIntensity),Be&&(re.setValue(U,"toneMappingExposure",C.toneMappingExposure),It.needsLights&&xh(nn,Wi),nt&&B.fog===!0&&lt.refreshFogUniforms(nn,nt),lt.refreshMaterialUniforms(nn,B,k,it,f.state.transmissionRenderTarget[v.id]),Ei.upload(U,hc(It),nn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ei.upload(U,hc(It),nn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(U,"center",P.center),re.setValue(U,"modelViewMatrix",P.modelViewMatrix),re.setValue(U,"normalMatrix",P.normalMatrix),re.setValue(U,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ge=B.uniformsGroups;for(let bn=0,Sn=Ge.length;bn<Sn;bn++){let dc=Ge[bn];V.update(dc,Ze),V.bind(dc,Ze)}}return Ze}function xh(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function vh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,R,N){bt.get(v.texture).__webglTexture=R,bt.get(v.depthTexture).__webglTexture=N;let B=bt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=N===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let N=bt.get(v);N.__webglFramebuffer=R,N.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,N=0){L=v,S=R,E=N;let B=!0,P=null,nt=!1,ut=!1;if(v){let vt=bt.get(v);if(vt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(vt.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(vt.__hasExternalTextures)b.rebindTextures(v,bt.get(v.texture).__webglTexture,bt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let yt=v.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&bt.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);let Dt=bt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[R])?P=Dt[R][N]:P=Dt[R],nt=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?P=bt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?P=Dt[N]:P=Dt,T.copy(v.viewport),O.copy(v.scissor),F=v.scissorTest}else T.copy(Mt).multiplyScalar(k).floor(),O.copy(Ft).multiplyScalar(k).floor(),F=Qt;if(St.bindFramebuffer(U.FRAMEBUFFER,P)&&B&&St.drawBuffers(v,P),St.viewport(T),St.scissor(O),St.setScissorTest(F),nt){let vt=bt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,vt.__webglTexture,N)}else if(ut){let vt=bt.get(v.texture),Pt=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,N||0,Pt)}_=-1},this.readRenderTargetPixels=function(v,R,N,B,P,nt,ut){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(U.FRAMEBUFFER,xt);try{let vt=v.texture,Pt=vt.format,Dt=vt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-B&&N>=0&&N<=v.height-P&&U.readPixels(R,N,B,P,Nt.convert(Pt),Nt.convert(Dt),nt)}finally{let vt=L!==null?bt.get(L).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(v,R,N,B,P,nt,ut){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){let vt=v.texture,Pt=vt.format,Dt=vt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-B&&N>=0&&N<=v.height-P){St.bindFramebuffer(U.FRAMEBUFFER,xt);let yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(R,N,B,P,Nt.convert(Pt),Nt.convert(Dt),0);let Yt=L!==null?bt.get(L).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Yt);let ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ou(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(yt),U.deleteSync(ee),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,N=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let B=Math.pow(2,-N),P=Math.floor(v.image.width*B),nt=Math.floor(v.image.height*B),ut=R!==null?R.x:0,xt=R!==null?R.y:0;b.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,N,0,0,ut,xt,P,nt),St.unbindTexture()},this.copyTextureToTexture=function(v,R,N=null,B=null,P=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],R=arguments[2],P=arguments[3]||0,N=null);let nt,ut,xt,vt,Pt,Dt,yt,Yt,ee,se=v.isCompressedTexture?v.mipmaps[P]:v.image;N!==null?(nt=N.max.x-N.min.x,ut=N.max.y-N.min.y,xt=N.isBox3?N.max.z-N.min.z:1,vt=N.min.x,Pt=N.min.y,Dt=N.isBox3?N.min.z:0):(nt=se.width,ut=se.height,xt=se.depth||1,vt=0,Pt=0,Dt=0),B!==null?(yt=B.x,Yt=B.y,ee=B.z):(yt=0,Yt=0,ee=0);let Le=Nt.convert(R.format),Zt=Nt.convert(R.type),It;R.isData3DTexture?(b.setTexture3D(R,0),It=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(b.setTexture2DArray(R,0),It=U.TEXTURE_2D_ARRAY):(b.setTexture2D(R,0),It=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let un=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ze=U.getParameter(U.UNPACK_SKIP_PIXELS),ci=U.getParameter(U.UNPACK_SKIP_ROWS),Be=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);let Wi=v.isDataArrayTexture||v.isData3DTexture,re=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let nn=bt.get(v),Xi=bt.get(R),Ge=bt.get(nn.__renderTarget),bn=bt.get(Xi.__renderTarget);St.bindFramebuffer(U.READ_FRAMEBUFFER,Ge.__webglFramebuffer),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Sn=0;Sn<xt;Sn++)Wi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(v).__webglTexture,P,Dt+Sn),v.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(R).__webglTexture,P,ee+Sn),U.blitFramebuffer(vt,Pt,nt,ut,yt,Yt,nt,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(It,P,yt,Yt,ee+Sn,vt,Pt,nt,ut):U.copyTexSubImage2D(It,P,yt,Yt,ee+Sn,vt,Pt,nt,ut);St.bindFramebuffer(U.READ_FRAMEBUFFER,null),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(It,P,yt,Yt,ee,nt,ut,xt,Le,Zt,se.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(It,P,yt,Yt,ee,nt,ut,xt,Le,se.data):U.texSubImage3D(It,P,yt,Yt,ee,nt,ut,xt,Le,Zt,se):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,yt,Yt,nt,ut,Le,Zt,se.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,yt,Yt,se.width,se.height,Le,se.data):U.texSubImage2D(U.TEXTURE_2D,P,yt,Yt,nt,ut,Le,Zt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,ci),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be),P===0&&R.generateMipmaps&&U.generateMipmap(It),St.unbindTexture()},this.copyTextureToTexture3D=function(v,R,N=null,B=null,P=0){return v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,B=arguments[1]||null,v=arguments[2],R=arguments[3],P=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,N,B,P)},this.initRenderTarget=function(v){bt.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,St.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}};var ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ao=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ze,h=ze,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ii=new ne,_l=new ne,Hs=[],Il=new Cn,im=new ne,ts=new ye,es=new Bn,hs=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,im)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),Il.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Il)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),es.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),_l.multiplyMatrices(n,Ii),ts.matrixWorld=_l,ts.raycast(t,Hs);for(let a=0,o=Hs.length;a<o;a++){let c=Hs[a];c.instanceId=r,c.object=this,e.push(c)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(s*this.count),s,this.count,Ho,an));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var us=class extends Fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ml=new ne,xo=new os,Gs=new Bn,Ws=new D,fr=class extends Ce{constructor(t=new Me,e=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;Ml.copy(s).invert(),xo.copy(t.ray).applyMatrix4(Ml);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let p=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let m=p,x=u;m<x;m++){let g=l.getX(m);Ws.fromBufferAttribute(d,g),bl(Ws,g,c,s,t,e,this)}}else{let p=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=p,x=u;m<x;m++)Ws.fromBufferAttribute(d,m),bl(Ws,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bl(i,t,e,n,s,r,a){let o=xo.distanceSqToPoint(i);if(o<e){let c=new D;xo.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var si=class extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],u=[],m=0,x=[],g=n/2,f=0;I(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(p,3)),this.setAttribute("uv",new ue(u,2));function I(){let C=new D,w=new D,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let _=[],y=L/r,T=y*(e-t)+t;for(let O=0;O<=s;O++){let F=O/s,G=F*c+o,Q=Math.sin(G),W=Math.cos(G);w.x=T*Q,w.y=-y*n+g,w.z=T*W,d.push(w.x,w.y,w.z),C.set(Q,E,W).normalize(),p.push(C.x,C.y,C.z),u.push(F,1-y),_.push(m++)}x.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){let y=x[_][L],T=x[_+1][L],O=x[_+1][L+1],F=x[_][L+1];(t>0||_!==0)&&(h.push(y,T,F),S+=3),(e>0||_!==r-1)&&(h.push(T,O,F),S+=3)}l.addGroup(f,S,0),f+=S}function M(C){let w=m,S=new Vt,E=new D,L=0,_=C===!0?t:e,y=C===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*y,0),p.push(0,y,0),u.push(.5,.5),m++;let T=m;for(let O=0;O<=s;O++){let G=O/s*c+o,Q=Math.cos(G),W=Math.sin(G);E.x=_*W,E.y=g*y,E.z=_*Q,d.push(E.x,E.y,E.z),p.push(0,y,0),S.x=Q*.5+.5,S.y=W*.5*y+.5,u.push(S.x,S.y),m++}for(let O=0;O<s;O++){let F=w+O,G=T+O;C===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}l.addGroup(f,L,C===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pr=class i extends ds{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Bi=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new D,p=new D,u=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let I=[],M=f/n,C=0;f===0&&a===0?C=.5/e:f===n&&c===Math.PI&&(C=-.5/e);for(let w=0;w<=e;w++){let S=w/e;d.x=-t*Math.cos(s+S*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+S*r)*Math.sin(a+M*o),m.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),g.push(S+C,1-M),I.push(l++)}h.push(I)}for(let f=0;f<n;f++)for(let I=0;I<e;I++){let M=h[f][I+1],C=h[f][I],w=h[f+1][I],S=h[f+1][I+1];(f!==0||a>0)&&u.push(M,C,S),(f!==n-1||c<Math.PI)&&u.push(C,w,S)}this.setIndex(u),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gr=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new D,d=new D,p=new D;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){let x=m/s*r,g=u/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(m/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){let x=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,f=(s+1)*(u-1)+m,I=(s+1)*u+m;a.push(x,g,I),a.push(g,f,I)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var mr=class extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var _n=class extends Fn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:r=t,o=2*e-n;break;case Ec:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wc:a=t,c=2*n-e;break;case Ec:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,f=-p*g+2*p*x-p*m,I=(1+p)*g+(-1.5-2*p)*x+(-.5+p)*m+1,M=(-1-u)*g+(1.5+u)*x+.5*m,C=u*g-u*x;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+I*a[l+w]+M*a[c+w]+C*a[d+w];return r}},yo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*h;return r}},Co=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&sm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,p=d-n,u=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[p+m]||x!==e[u+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,p=a*n;for(let u=0;u!==n;++u)e[p+u]=e[d+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Qa;var ri=class extends tn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Qs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends tn{};_o.prototype.ValueTypeName="color";var Io=class extends tn{};Io.prototype.ValueTypeName="number";var Mo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ar=class extends tn{InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends tn{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Qs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends tn{};bo.prototype.ValueTypeName="vector";var So=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null}}},rm=new So,wo=class{constructor(t){this.manager=t!==void 0?t:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fa=new ne,Sl=new D,wl=new D,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wl),e.updateMatrixWorld(),fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var To=class extends Eo{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new To}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function El(){return performance.now()}var Zo="\\[\\]\\.:\\/",am=new RegExp("["+Zo+"]","g"),Jo="[^"+Zo+"]",om="[^"+Zo.replace("\\.","")+"]",cm=/((?:WC+[\/:])*)/.source.replace("WC",Jo),lm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),dm=new RegExp("^"+cm+lm+hm+um+"$"),fm=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(am,"")}static parseTrackName(t){let e=dm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Vo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var km=new Float32Array(1);var Tl=new ne,_r=class{constructor(t,e,n=0,s=1/0){this.ray=new os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(Vl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ro(t[s],this,n,e);return n.sort(Vl),n}};function Vl(i,t){return i.distance-t.distance}function Ro(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);var Sr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ke=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pm=new qi(-1,1,1,-1,0,1),Ko=class extends Me{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},gm=new Ko,zn=class{constructor(t){this._mesh=new ye(gm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,pm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ki=class extends ke{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=On.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ps=class extends ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wr=class extends ke{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Er=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Vt);this._width=n.width,this._height=n.height,e=new Pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ki(Sr),this.copyPass.material.blending=on,this.clock=new Cr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ps!==void 0&&(a instanceof ps?n=!0:a instanceof wr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tr=class extends ke{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var $l={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hi=class i extends ke{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Vt(t.x,t.y):new Vt(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pe(r,a,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new Pe(r,a,{type:en});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new Pe(r,a,{type:en});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=$l;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Vt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Sr;this.copyUniforms=On.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new ln,this.fsQuad=new zn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Vt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Vt(.5,.5)},direction:{value:new Vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Hi.BlurDirectionX=new Vt(1,0);Hi.BlurDirectionY=new Vt(0,1);var th={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Vr=class extends ke{constructor(){super();let t=th;this.uniforms=On.clone(t.uniforms),this.material=new mr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===No?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=s=>{let r=n(s);if(s&&!s.__tw&&String(s.family).replace(/["']/g,"")==="Tajawal"){let a=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});a.__tw=1,a.load().then(()=>n(a)).catch(()=>{})}return r}}catch{}}if(typeof document!="undefined"&&!document.getElementById("tw-icons")){let i=document.createElement("style");i.id="tw-icons",i.textContent=`.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-heart{display:inline-block;width:.9em;height:.82em;background:linear-gradient(#ff8aa0,#e8284a);clip-path:path('M.45em .8em C-.3em .25 .1em -.15em .45em .2em C.8em -.15em 1.2em .25em .45em .8em');vertical-align:-.1em;margin:0 .1em;clip-path:polygon(50% 100%,8% 55%,0 30%,10% 8%,30% 0,50% 18%,70% 0,90% 8%,100% 30%,92% 55%)}
.tw-pause{display:inline-block;width:.8em;height:.8em;vertical-align:-.1em;background:linear-gradient(90deg,#fff 0 36%,transparent 36% 64%,#fff 64% 100%);border-radius:.1em;margin:0 .05em}
.tw-up{display:inline-block;width:.8em;height:.9em;background:linear-gradient(#fff,#d8e8ff);clip-path:polygon(50% 0,100% 50%,66% 50%,66% 100%,34% 100%,34% 50%,0 50%);vertical-align:-.1em;margin:0 .1em}
.tw-flag{display:inline-block;width:.85em;height:.9em;background:linear-gradient(90deg,#fff 0 12%,transparent 12%),linear-gradient(45deg,#222 25%,#fff 25% 50%,#222 50% 75%,#fff 75%);background-size:100% 100%,.3em .3em;clip-path:polygon(0 0,100% 10%,100% 60%,12% 70%,12% 100%,0 100%);vertical-align:-.1em;margin:0 .1em}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`,document.head.appendChild(i);let t=/(\u{1F512}|\u2B50|\u{1FA99}|\u2764|\u23F8|\u2B06|\u{1F3C1})\uFE0F?/gu,e={"\u{1F512}":"tw-lock","\u2B50":"tw-star","\u{1FA99}":"tw-coin","\u2764":"tw-heart","\u23F8":"tw-pause","\u2B06":"tw-up","\u{1F3C1}":"tw-flag"},n=()=>{if(!document.body)return;let o=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),c=[];for(let l=o.nextNode();l;l=o.nextNode()){let h=l.parentNode;h&&/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(h.nodeName)||(t.lastIndex=0,t.test(l.nodeValue)&&c.push(l))}for(let l of c){let h=document.createDocumentFragment(),d=0,p=l.nodeValue;t.lastIndex=0;let u;for(;u=t.exec(p);){u.index>d&&h.append(p.slice(d,u.index));let m=document.createElement("span");m.className=e[u[1]],h.append(m),d=u.index+u[0].length}d<p.length&&h.append(p.slice(d)),l.parentNode.replaceChild(h,l)}},s=0,r=()=>{s||(s=setTimeout(()=>{s=0,n()},30))},a=()=>{new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0,characterData:!0}),n()};document.body?a():document.addEventListener("DOMContentLoaded",a)}var eh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},mm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float contrast, sat, tint, vig, time; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = (c - 0.5) * contrast + 0.5;
      // split tone: warm highlights, cool-teal shadows
      c += vec3(tint, tint * 0.35, -tint) * smoothstep(0.35, 1.0, l);
      c += vec3(-tint * 0.4, 0.0, tint * 0.5) * (1.0 - smoothstep(0.0, 0.4, l)) * 0.6;
      vec2 d = vUv - 0.5; float v = 1.0 - vig * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c *= v;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`},Am={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function xm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let x=0;x<r;x++)a[x*3]=t.position.x+(Math.random()-.5)*2*s,a[x*3+1]=t.position.y+(Math.random()-.5)*s,a[x*3+2]=t.position.z+(Math.random()-.5)*2*s,o[x*3]=(Math.random()-.5)*.25,o[x*3+1]=.05+Math.random()*.25,o[x*3+2]=(Math.random()-.5)*.25;let c=new Me;c.setAttribute("position",new Ie(a,3));let l=document.createElement("canvas");l.width=l.height=32;let h=l.getContext("2d"),d=h.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.35,"rgba(255,255,255,0.45)"),d.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=d,h.fillRect(0,0,32,32);let p=new si(l);p.colorSpace=ve;let u=new us({map:p,color:Am[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Ti,fog:!1,sizeAttenuation:!0}),m=new fr(c,u);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function vm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let c=0;c<3;c++){let l=o*3+c;n[l]+=s[l]*e*(c===1?r*.1:r*.12);let h=c===1?r*.5:r,d=n[l]-[t.position.x,t.position.y,t.position.z][c];d>h?n[l]-=2*h:d<-h&&(n[l]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var nh={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},ym=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Cm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,_m={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},ih={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=_m[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(ih[t]||-1e9)<n||(ih[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function Im(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,c=0,l=!1,h=g=>{if(!n[g]){let f=new Audio(`${e}${g}_${t}.mp3`);f.preload="auto",f.volume=.95,n[g]=f}return n[g]},d=(g,f)=>{let I=performance.now();if(!f&&I-r<6e3||l)return;let M=g+(1+Math.floor(Math.random()*nh[g])),C=h(M);l=!0,r=I,C.currentTime=0;let w=()=>{l=!1};C.onended=w,C.onerror=w;let S=C.play();S&&S.catch&&S.catch(w),setTimeout(w,4e3)};window.__cheer=(g,f)=>{nh[g]&&(o=!0,d(g,!!f))};let p=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),f=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(f),f.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},u=()=>{a=performance.now(),p(),o||(o=!0,d("start",!0))};i.addEventListener("pointerdown",u,{passive:!0}),window.addEventListener("keydown",u,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,ym.test(g)?d("win",!1):Cm.test(g)&&d("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(d("idle",!1),a=g-4e3):g-r>22e3&&(c++,d(c%5===0?"combo":"good",!1)))},2500)}function sh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},eh[e.get("look")||t.preset||"warm"]||eh.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,c=performance.now(),l=null,h=null,d=null,p=null,u=0,m=0,x=0,g=!1,f=performance.now();function I(M,C){let w=i.getSize(new Vt);u=w.x,m=w.y,x=i.getPixelRatio(),l=new Er(i),l.setPixelRatio(x),l.setSize(u,m),h=new Tr(M,C),l.addPass(h),s||(d=new Hi(new Vt(Math.max(2,u>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),l.addPass(d)),l.addPass(new Vr),p=new ki(mm),p.uniforms.contrast.value=n.contrast,p.uniforms.sat.value=n.sat,p.uniforms.tint.value=n.tint,p.uniforms.vig.value=n.vig,l.addPass(p)}return i.render=function(M,C){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!M||!C||!M.isScene)return a(M,C);try{l||I(M,C);let w=i.getSize(new Vt),S=i.getPixelRatio();(w.x!==u||w.y!==m||S!==x)&&(u=w.x,m=w.y,x=S,l.setPixelRatio(S),l.setSize(u,m),d&&d.resolution.set(Math.max(2,u>>1),Math.max(2,m>>1))),h.scene=M,h.camera=C,p.uniforms.time.value=(performance.now()-f)/1e3;let E=performance.now(),L=Math.min(.1,Math.max(0,(E-c)/1e3));if(c=E,!e.has("nomotes")&&t.motes!==!1){let _=o.get(M);_||(_=xm(M,C,e.get("look")||t.preset||"warm",r),o.set(M,_)),vm(_,C,L)}g=!0,l.render(),g=!1}catch(w){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",w&&w.message),i.render=a,a(M,C)}},!e.has("nocheer")&&!r&&setTimeout(()=>Im(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var oi=.4,ah=Math.PI*2,In=i=>(i-_e/2)*oi,Mn=i=>(i-de*.5)*oi,K={sph:new Bi(.5,14,10),sphL:new Bi(.5,8,6),hem:new Bi(.5,14,8,0,ah,0,Math.PI/2),cyl:new ds(.5,.5,1,12),box:new ii(1,1,1),cone:new pr(.5,1,10),tor:new gr(.5,.12,8,18)},jo=new Map,tt=(i,t=0,e={})=>{let n=`${i}|${t}|${JSON.stringify(e)}`;return jo.has(n)||jo.set(n,new _n({color:i,emissive:t,...e})),jo.get(n)},j=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let c=new ye(i,t);return c.position.set(e,n,s),c.scale.set(r,a,o),c};function Mm(i,t=8){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");for(let r=0;r<t;r++)n.fillStyle=i[r%i.length],n.fillRect(r*256/t,0,256/t+1,64);let s=new si(e);return s.colorSpace=ve,s.wrapS=rs,s}var rh={},Qo=(i,t,e)=>rh[i]||(rh[i]=Mm(t,e));function gs(i,t,e=1){let n=new $t,s=tt(10129042);n.add(j(K.sph,s,0,0,0,.62,.58,.66)),n.add(j(K.sph,tt(12102318),0,-.1,-.22,.34,.26,.36)),n.add(j(K.sph,tt(16747168,4198432),0,-.07,-.42,.12,.1,.1));for(let r of[-1,1]){n.add(j(K.sph,s,r*.27,.27,.02,.24,.28,.08)),n.add(j(K.sph,tt(16033972),r*.27,.27,-.03,.15,.19,.05)),n.add(j(K.sph,tt(16777215),r*.14,.07,-.26,.17,.2,.1)),n.add(j(K.sph,tt(1118488),r*.14,.06,-.31,.09,.12,.06));for(let a of[-1,0,1]){let o=j(K.cyl,tt(14540253),r*.28,-.12+a*.05,-.34,.012,.26,.012);o.rotation.z=Math.PI/2+a*.2*r,n.add(o)}}if(n.add(j(K.box,tt(16777215),0,-.2,-.38,.08,.06,.04)),i&&(n.add(j(K.cone,tt(1908010),0,.46,0,.62,.34,.62)),n.add(j(K.cyl,tt(1908010),0,.32,0,.78,.07,.78)),n.add(j(K.box,tt(16765498),0,.34,-.38,.14,.04,.03))),t){n.add(j(K.sph,tt(1118488),.14,.09,-.32,.17,.17,.05));let r=j(K.box,tt(1118488),0,.2,0,.7,.03,.05);r.rotation.z=-.4,n.add(r)}return n.scale.setScalar(e),n}function bm(){let i=new $t,t=tt(11039050);i.add(j(K.sph,t,0,0,0,.7,.62,.74)),i.add(j(K.sph,tt(9067064),0,-.12,-.3,.46,.3,.36)),i.add(j(K.sph,tt(3810328),0,-.07,-.47,.1,.08,.06));for(let e of[-1,1]){i.add(j(K.sph,t,e*.3,.34,.1,.14,.14,.1)),i.add(j(K.sph,tt(16777215),e*.17,.1,-.28,.2,.22,.1)),i.add(j(K.sph,tt(1118488),e*.17,.09,-.34,.1,.13,.06));let n=j(K.tor,tt(16765498,4204544),e*.17,.1,-.33,.34,.34,.34);i.add(n),i.add(kn(j(K.cyl,tt(10148095,0,{transparent:!0,opacity:.45}),e*.17,.1,-.34,.3,.02,.3),"x",Math.PI/2))}return i.add(j(K.box,tt(16765498),0,.12,-.05,.9,.06,.06)),i.add(j(K.sph,tt(15219274),0,-.42,.05,.5,.16,.5)),i}function Sm(i="lagoon"){let[t,e,n]=(Zi[i]||Zi.lagoon).map(l=>new Tt(l).getHex()),s=new $t,r=new $t;s.add(r),r.add(j(K.sph,tt(t),0,0,.2,.9,.85,3.4)),r.add(j(K.sph,tt(e),0,-.12,.35,.78,.5,3)),r.add(j(K.sph,tt(n),0,0,-1.45,.5,.5,.5)),r.add(j(K.box,tt(t),0,.05,.3,6.4,.16,1.5)),r.add(j(K.box,tt(n),0,.14,.3,6.4,.03,.24));for(let l of[-1,1])r.add(j(K.sph,tt(n),l*3.2,.05,.3,.36,.2,1.5)),r.add(j(K.cyl,tt(5594736),l*1.1,-.45,.2,.08,.7,.08)),r.add(j(K.sph,tt(e),l*1.1,-.85,.2,.34,.3,2.4));r.add(j(K.box,tt(t),0,.1,1.9,2.2,.1,.7)),r.add(j(K.box,tt(e),0,.5,1.95,.1,.9,.7));let a=j(K.sph,tt(12576511,2109504,{transparent:!0,opacity:.55}),0,.55,-.05,.95,.8,1.2);r.add(a);let o=bm();o.position.set(0,.55,0),o.scale.setScalar(.85),o.rotation.y=Math.PI,r.add(o);let c=new $t;c.position.set(0,0,-1.75),r.add(c);for(let l of[0,Math.PI]){let h=j(K.box,tt(15658734),0,0,0,.28,1.9,.05);h.rotation.z=l,c.add(h)}return c.add(kn(j(K.cyl,tt(16777215,0,{transparent:!0,opacity:.22}),0,0,0,2,.02,2),"x",Math.PI/2)),s.userData={body:r,prop:c},s}function wm(i,t){i.add(j(K.box,tt(13144138),0,t,0,.9,.55,.9));for(let e of[-1,1])for(let n of[-1,1]){let s=j(K.cyl,tt(6965802),e*.36,t+.55,n*.36,.04,1.1,.04);s.rotation.z=-e*.35,s.rotation.x=n*.35,i.add(s)}}function Em(i){let t=new $t,e={};if(i==="balloon"||i==="cage"||i==="umbrella"){let n=i==="cage"?["#ffd23a","#fff29a"]:i==="umbrella"?["#e8504a","#ffffff"]:["#ff8a6a","#ffd9b0","#ff5a5a","#fff0d0"];t.add(j(K.sph,new _n({map:Qo("b"+n.join(),n,8)}),0,1.3,0,2.5,2.9,2.5)),t.add(j(K.sph,tt(16777215,0,{transparent:!0,opacity:.35}),-.5,1.9,-.6,.6,.9,.4)),wm(t,-.4);let s=gs(!0,!1,1.05);if(s.position.set(0,.35,0),s.rotation.y=0,t.add(s),i==="umbrella"){let r=new $t;r.position.y=3,r.add(j(K.hem,new _n({map:Qo("um",["#4a8ae8","#fff"],8),side:Xe}),0,0,0,4.2,3.2,4.2)),r.add(j(K.cyl,tt(6965802),0,-1,0,.1,2,.1)),t.add(r)}if(i==="cage"){t.add(j(K.box,tt(16777215,0,{transparent:!0,opacity:.3}),0,-1.35,0,.9,.8,.9));for(let a of[-.3,0,.3])t.add(j(K.cyl,tt(4473941),a,-1.35,-.46,.04,.8,.04));let r=$o("robin");r.position.set(0,-1.35,0),r.scale.setScalar(.55),t.add(r)}e.bob=.25}else if(i==="gyro"){t.add(j(K.sph,tt(5921418),0,0,0,1.5,1.2,2.6)),t.add(j(K.sph,tt(13625599,0,{transparent:!0,opacity:.6}),0,.5,-.4,1.1,.9,1.2));let n=gs(!0,!0,.9);n.position.set(0,.55,-.35),t.add(n),t.add(j(K.box,tt(3816042),0,.1,1.8,.15,.7,1.4)),t.add(j(K.box,tt(3816042),0,.15,2.2,1.4,.08,.5));for(let r of[-1,1])t.add(j(K.cyl,tt(5594736),r*.4,-.7,0,.06,.6,.06));let s=new $t;s.position.y=1.1,t.add(s),t.add(j(K.cyl,tt(4473941),0,.8,0,.12,.6,.12));for(let r=0;r<2;r++){let a=j(K.box,tt(3816036),0,0,0,4.2,.06,.4);a.rotation.y=r*Math.PI/2,s.add(a)}e.rot=s}else if(i==="glider"){let n=new Me,s=new Float32Array([0,0,-2,-3.2,0,1.4,-.6,0,.8,0,0,-2,-.6,0,.8,0,0,2.4,0,0,-2,0,0,2.4,.6,0,.8,0,0,-2,.6,0,.8,3.2,0,1.4]);n.setAttribute("position",new Ie(s,3)),n.computeVertexNormals();let r=new ye(n,new _n({color:16769184,side:Xe}));t.add(r),t.add(j(K.box,tt(15249504),0,.05,.4,.2,.1,3.4));let a=gs(!1,!0,.8);a.position.set(0,.55,.1),t.add(a),e.flap=r}else if(i==="thief"){t.add(j(K.sph,tt(3816026),0,0,0,1.6,1.4,1.9));let n=gs(!1,!1,.85);n.position.set(0,.35,-.55),t.add(n),t.add(j(K.box,tt(1118488),0,.42,-.82,.62,.15,.06)),e.wings=[];for(let s of[-1,1]){let r=new $t;r.add(j(K.box,tt(5921418),s*1.4,0,0,2.8,.08,1.2)),r.position.x=0,r.userData.s=s,t.add(r),e.wings.push(r)}t.add(j(K.box,tt(15249456),0,-.4,-.2,.7,.5,.5))}return t.userData=e,t}function Tm(){let i=new $t,t={};i.add(j(K.sph,new _n({map:Qo("boss",["#3a5ab8","#2a4a98","#4a6ad0","#2a3a88"],12)}),0,4.2,0,9,6.2,6.5)),i.add(j(K.sph,tt(16777215,0,{transparent:!0,opacity:.3}),-2,5.8,-1.8,2.6,1.6,1)),i.add(j(K.box,tt(9067060),0,-.8,0,6.5,1.8,3.6)),i.add(j(K.box,tt(5913114),0,-.1,0,6.8,.25,3.9));for(let s=-2;s<=2;s++)i.add(j(K.sph,tt(16765498,6307840),s*1.2,-.8,-1.82,.5,.5,.2));for(let s of[-1,1])i.add(kn(j(K.cyl,tt(3355456),s*1.8,-.6,-1.9,.5,1.6,.5),"x",Math.PI/2));let e=gs(!0,!0,1.9);e.position.set(0,1.1,-.6),i.add(e),i.add(j(K.cyl,tt(6965802),0,8.4,0,.14,2.4,.14));let n=j(K.box,tt(1908010),.9,9,0,1.8,1,.05);i.add(n),i.add(j(K.sph,tt(16777215),.9,9,-.05,.5,.5,.1)),t.props=[];for(let s of[-1,1]){let r=new $t;r.position.set(s*4.1,-.2,0),i.add(r);for(let a=0;a<2;a++){let o=j(K.box,tt(14540253),0,0,0,.3,2.8,.06);o.rotation.z=a*Math.PI/2,r.add(o)}r.rotation.x=Math.PI/2,t.props.push(r)}return t.flag=n,i.userData=t,i}function $o(i){let t=i==="robin"?[15219258,16747114]:i==="jay"?[3832040,10146047]:[16765498,16773786],e=new $t,n={wings:[]};e.add(j(K.sph,tt(t[0]),0,0,0,1.1,1,1.5)),e.add(j(K.sph,tt(t[1]),0,-.15,-.1,.85,.6,1.1)),e.add(j(K.sph,tt(t[0]),0,.35,-.7,.8,.8,.8)),e.add(kn(j(K.cone,tt(16758832),0,.3,-1.2,.22,.5,.22),"x",-Math.PI/2));for(let s of[-1,1]){e.add(j(K.sph,tt(1118488),s*.22,.5,-1.02,.14,.16,.1));let r=new $t;r.add(j(K.sph,tt(t[0]),s*.9,0,0,1.8,.14,1)),r.userData.s=s,e.add(r),n.wings.push(r)}return e.add(j(K.box,tt(t[0]),0,0,.95,.5,.06,.8)),e.userData=n,e}function Vm(i,t,e){let n=new $t;if(i==="pearl")n.add(j(K.sph,tt(16777215,8940168),0,0,0,.9,.9,.9));else if(i==="feather"){let s=j(K.sph,tt(16765498,8409088),0,0,0,.5,.1,1.8);s.rotation.y=.5,n.add(s),n.add(kn(j(K.cyl,tt(16756736),0,0,0,.06,.06,1.9),"x",Math.PI/2))}else if(i==="capsule"){let s=t==="spread"?16751162:t==="pierce"?10115839:3854591;n.add(j(K.sph,tt(s,s,{transparent:!0,opacity:.9}),0,0,0,2.1,2.1,2.1)),n.add(j(K.sph,tt(16777215,16777215,{transparent:!0,opacity:.35}),0,0,0,2.8,2.8,2.8)),n.add(kn(j(K.tor,tt(16777215,8947848),0,0,0,2.6,2.6,2.6),"x",Math.PI/2))}else if(i==="cage"){n.add(j(K.sph,tt(16770442,16770442,{transparent:!0,opacity:.25}),0,0,0,3.2,3.2,3.2)),n.add(j(K.box,tt(16777215,0,{transparent:!0,opacity:.28}),0,0,0,1.9,1.9,1.9));for(let r of[-.6,0,.6])n.add(j(K.cyl,tt(4473941),r,0,-.96,.07,1.9,.07));let s=$o(e||"robin");s.scale.setScalar(.8),n.add(s),n.userData.bird=s}return n}function Rm(i){let t=new $t,e=tt(16777215,10138832,{transparent:!0,opacity:.92});for(let[n,s,r,a]of[[0,0,0,1],[1,-.15,.2,.8],[-1,-.1,.1,.85],[.4,.35,-.2,.75],[-.5,.3,.3,.7],[1.7,-.3,0,.55],[-1.7,-.28,.1,.5]])t.add(j(K.sphL,e,n,s,r,a*2,a*1.5,a*2));return t.scale.setScalar(i),t}function kn(i,t,e){return i.rotation[t]=e,i}function Pm(i,t){let e=new $t;e.add(kn(j(K.cone,tt(8020048),0,-3.2,0,8,7,8),"x",Math.PI)),e.add(j(K.cyl,tt(6968388),0,-.4,0,8.4,.9,8.4)),e.add(j(K.cyl,tt(t===3?5949546:7000154),0,.1,0,8.2,.5,8.2)),e.add(j(K.cyl,tt(9101424),0,.37,0,6,.1,6));let n=(a,o,c,l,h=1)=>{e.add(j(K.box,tt(c),a,1.2*h,o,1.8*h,1.6*h,1.8*h)),e.add(kn(j(K.cone,tt(l),a,2.5*h,o,2.8*h,1.3*h,2.8*h),"y",Math.PI/4)),e.add(j(K.box,tt(6965802),a,.8*h,o-.92*h,.4*h,.8*h,.05)),e.add(j(K.box,tt(11461887,2771562),a+.5*h,1.4*h,o-.92*h,.4*h,.4*h,.05))},s=(a,o,c=1)=>{e.add(j(K.cyl,tt(9067060),a,.9*c,o,.35*c,1.4*c,.35*c)),e.add(j(K.sph,tt(3846218),a,2.1*c,o,1.9*c,1.7*c,1.9*c)),e.add(j(K.sph,tt(5951594),a-.3*c,2.4*c,o-.3*c,1.1*c,1*c,1.1*c))},r={};if(i===0){n(-1.8,1,16773336,15226954),n(1.8,.6,16769184,4881112,.9),n(.2,-1.8,15267071,15226954,.8),s(-2.6,-1.8,.9);let a=new $t;a.position.set(2.6,0,-1.9),a.add(j(K.cyl,tt(16777215),0,1.6,0,.9,3.2,.9)),a.add(j(K.cone,tt(15226954),0,3.6,0,1.3,.9,1.3));let o=new $t;o.position.set(0,3,-.6);for(let c=0;c<4;c++){let l=j(K.box,tt(16743018),0,.9,0,.35,1.8,.06),h=new $t;h.rotation.z=c*Math.PI/2,h.add(l),o.add(h)}a.add(o),e.add(a),r.blades=o}else if(i===1){s(-2.6,1,.9),s(2.6,-.5,1.1),n(0,.6,16773336,10115800);for(let a of[-2.4,2.4])e.add(j(K.cyl,tt(9067060),a,1.5,-1.8,.2,3,.2));["#ff6a8a","#ffd23a","#6ad0ff","#9a7aff"].forEach((a,o)=>e.add(j(K.box,tt(new Tt(a).getHex()),-1.8+o*1.2,2.4-Math.sin((o+.5)/4*Math.PI)*.3,-1.8,.9,1.1,.05)))}else s(0,0,2),s(-2.8,1.4,1),s(2.8,1,.9),e.add(j(K.sph,tt(13144154),0,3.2,-1,1.4,.5,1.4)),e.add(j(K.sph,tt(16777215),.2,3.5,-1.2,.35,.45,.35));return e.userData=r,e}function Lm(i){let t=[["#4aa0f0","#a8d8ff","#eaf6ff"],["#5ab0f0","#cfe8ff","#fff2e0"],["#3a90e0","#9cd0f8","#e0f4e8"]][(i-1)%3],e=document.createElement("canvas");e.width=4,e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,t[0]),s.addColorStop(.6,t[1]),s.addColorStop(1,t[2]),n.fillStyle=s,n.fillRect(0,0,4,256);let r=new si(e);return r.colorSpace=ve,r}var Rr=class{constructor(t){this.el=t,this.renderer=sh(new hr({antialias:!0,alpha:!1}),{preset:"fresh",tune:{bloom:[.15,.4,.92]}}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=ve,this.dom=this.renderer.domElement,this.scene=new dr,this.scene.fog=new ur(12575999,70,190),this.camera=new Re(48,1,.5,400),this.scene.add(new vr(16777215,9087696,1.15));let e=new yr(16773328,1.1);e.position.set(-20,40,10),this.scene.add(e),this.world=new $t,this.scene.add(this.world),this.objs=new Map,this.wingObjs=[],this.stage=0,this.clouds=[],this.islands=[],this.plane=null,this.paint="",this.camPos=new D(0,30,40),this.target=new D,this.bub=new hs(K.sphL,new _n({color:16777215,emissive:2779802,transparent:!0,opacity:.85}),300),this.bub.frustumCulled=!1,this.bub.instanceColor=new Ni(new Float32Array(900),3),this.scene.add(this.bub),this.ebl=new hs(K.sphL,new ln({color:16734826}),200),this.ebl.frustumCulled=!1,this.scene.add(this.ebl),this.bursts=[],this.ray=new _r,this.gnd=new Qe(new D(0,1,0),0),this.shadowMat=new ln({color:2113658,transparent:!0,opacity:.18,depthWrite:!1}),this.shadows=[],this._dummy=new Ce,this._col=new Tt,this.setSize(1,1),this._buildScenery(1)}setSize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}_buildScenery(t){for(let e of this.clouds)this.world.remove(e.o);for(let e of this.islands)this.world.remove(e.o);this.clouds=[],this.islands=[],this.stage=t,this.scene.background=Lm(t);for(let e=0;e<22;e++){let n=Rm(2.2+Math.random()*3),s=e%3,r={o:n,x:(Math.random()-.5)*120,z:Math.random()*190-120,y:-6-s*3-Math.random()*2,v:.5+s*.3};n.position.set(r.x,r.y,r.z),this.world.add(n),this.clouds.push(r)}for(let e=0;e<9;e++){let n=Pm(t===3?2:t===2?1:e%2===0?0:1,t),s=.8+Math.random()*.8;n.scale.setScalar(s);let r={o:n,x:(e%2?1:-1)*(14+Math.random()*40),z:-110+e*24,y:-10-Math.random()*4,spin:Math.random()};n.position.set(r.x,r.y,r.z),n.rotation.y=Math.random()*6,this.world.add(n),this.islands.push(r)}}pick(t,e,n){let s=(t-n.left)/n.width*2-1,r=-((e-n.top)/n.height)*2+1;this.ray.setFromCamera({x:s,y:r},this.camera);let a=new D;return this.ray.ray.intersectPlane(this.gnd,a)?[a.x/oi+_e/2,a.z/oi+de*.5]:[_e/2,de-30]}project(t,e,n=0){let s=new D(In(t),n,Mn(e)).project(this.camera);return[(s.x*.5+.5)*this.w,(-s.y*.5+.5)*this.h]}_get(t,e){let n=this.objs.get(t);return n||(n=e(),n.userData.seen=0,this.objs.set(t,n),this.world.add(n)),n.userData.seen=this.frame,n}_shadow(t,e){let n=t.userData.sh;n||(n=j(K.cyl,this.shadowMat,0,-5.5,0,e,.05,e),this.world.add(n),t.userData.sh=n),n.position.set(t.position.x+1.2,-5.5,t.position.z+2.5),n.visible=!0}burst(t,e,n){let s=n==="boss"?36:16,r=[16747114,16765498,7000319,16777215];for(let a=0;a<s;a++){let o=j(K.box,new ln({color:r[a%4]}),In(t),0,Mn(e),.35,.35,.35),c=Math.random()*ah,l=6+Math.random()*10;o.userData={vx:Math.cos(c)*l,vy:4+Math.random()*8,vz:Math.sin(c)*l,life:0},this.scene.add(o),this.bursts.push(o)}}render(t,e,n,s,r){this.frame=(this.frame||0)+1;let a=t?t.stage:1;a!==this.stage&&this._buildScenery(a);let o=t?a===3?22:18:10;for(let I of this.clouds)I.z+=n*o*I.v,I.z>80&&(I.z=-120,I.x=(Math.random()-.5)*120),I.o.position.set(I.x,I.y,I.z);for(let I of this.islands)I.z+=n*o*.9,I.z>90&&(I.z=-130,I.x=(Math.random()<.5?-1:1)*(14+Math.random()*40)),I.o.position.set(I.x,I.y+Math.sin(e*.8+I.spin*6)*.4,I.z),I.o.userData.blades&&(I.o.userData.blades.rotation.z=e*1.2);let c=_e/2,l=de*.82;t&&(c=t.px,l=t.py),(this.paint!==r||!this.plane)&&(this.plane&&this.world.remove(this.plane),this.plane=Sm(r),this.paint=r,this.world.add(this.plane));let h=this.plane;h.visible=!0,h.scale.setScalar(1);let d=t&&t.inv>0&&t.state==="play";if(h.position.set(In(c),0,Mn(l)),h.rotation.z=-s*.5,h.rotation.x=-.08+Math.sin(e*2)*.03,h.position.y=Math.sin(e*2.4)*.25,h.userData.prop.rotation.z=e*60,h.visible=!(d&&Math.sin(e*40)<-.3),this._shadow(h,4.5),t){for(let[w,S]of this.objs)S.userData.seen!==this.frame&&(this.world.remove(S),S.userData.sh&&this.world.remove(S.userData.sh),this.objs.delete(w));for(let w of t.enemies){let S=this._get("e"+w.id,()=>w.type==="boss"?Tm():Em(w.type)),E=Math.sin(e*2.4+w.id)*(S.userData.bob||0);S.position.set(In(w.x),.4+E,Mn(w.y));let L=(w.type==="boss",1);S.scale.setScalar(L),S.rotation.y=0,S.rotation.z=Math.sin(e*1.7+w.id)*.06;let _=S.userData;if(_.rot&&(_.rot.rotation.y=e*30),_.props)for(let T of _.props)T.rotation.z=e*26;if(_.flag&&(_.flag.rotation.y=Math.sin(e*5)*.3),_.wings)for(let T of _.wings)T.rotation.z=T.userData.s*Math.sin(e*14)*.5;_.flap&&(_.flap.rotation.z=Math.sin(e*3+w.id)*.05);let y=w.hp/w.hp0;S.userData.hr=y,this._shadow(S,w.type==="boss"?7:3.2)}for(let w of t.pickups){let S=this._get("p"+w.id,()=>Vm(w.kind,w.cap,w.bird));if(S.position.set(In(w.x),.6+Math.sin(e*4+w.id)*.3,Mn(w.y)),S.rotation.y=e*2,w.kind==="cage"&&S.userData.bird)for(let E of S.userData.bird.userData.wings)E.rotation.z=E.userData.s*Math.sin(e*14)*.5}t.wings.forEach((w,S)=>{let E=this._get("w"+S+w.type,()=>$o(w.type));E.scale.setScalar(1.2),E.position.set(In(w.x),.3,Mn(w.y)),E.rotation.y=Math.PI,E.rotation.z=0;for(let L of E.userData.wings)L.rotation.z=L.userData.s*Math.sin(e*18)*.6});let I=this._dummy,M=0;for(let w of t.bullets){if(M>=300)break;I.position.set(In(w.x),.2,Mn(w.y)),I.scale.setScalar(Math.max(.5,w.r*oi*2.4)),I.updateMatrix(),this.bub.setMatrixAt(M,I.matrix),this._col.set(w.kind==="homing"?16751258:w.kind==="dart"?6994175:12118271),this.bub.setColorAt(M,this._col),M++}this.bub.count=M,this.bub.instanceMatrix.needsUpdate=!0,this.bub.instanceColor&&(this.bub.instanceColor.needsUpdate=!0);let C=0;for(let w of t.eb){if(C>=200)break;I.position.set(In(w.x),.3,Mn(w.y)),I.scale.setScalar(Math.max(.6,w.r*oi*2.6)),I.updateMatrix(),this.ebl.setMatrixAt(C++,I.matrix)}this.ebl.count=C,this.ebl.instanceMatrix.needsUpdate=!0}else{for(let[I,M]of this.objs)this.world.remove(M),M.userData.sh&&this.world.remove(M.userData.sh),this.objs.delete(I);this.bub.count=0,this.ebl.count=0}for(let I=this.bursts.length-1;I>=0;I--){let M=this.bursts[I],C=M.userData;C.life+=n,C.vy-=18*n,M.position.x+=C.vx*n,M.position.y+=C.vy*n,M.position.z+=C.vz*n,M.rotation.x+=n*8,M.scale.setScalar(Math.max(.01,.35*(1-C.life/.8))),C.life>.8&&(this.scene.remove(M),this.bursts.splice(I,1))}let p=this.w/this.h,u=Math.tan(this.camera.fov*Math.PI/360),m=Math.max(20,_e*oi*.32/(u*Math.min(p,1.2))),x=In(c)*.45,g=Mn(l)-7,f=new D(x,m*.75,g+m*.75);this.camPos.lerp(f,Math.min(1,n*4)),this.target.set(x*.9,-1,g),this.camera.position.copy(this.camPos),this.camera.lookAt(this.target),this.renderer.render(this.scene,this.camera)}dispose(){try{this.renderer.dispose(),this.renderer.forceContextLoss()}catch{}this.dom.remove()}};function oh(i,t){let e=(i||"./").replace(/\/?$/,"/");return Promise.all(t.map(n=>new Promise(s=>{let r=new Image,a=!1,o=c=>{a||(a=!0,s([n,c]))};r.onload=()=>o(r.naturalWidth>0?r:null),r.onerror=()=>o(null),setTimeout(()=>o(null),6e3),r.src=`${e}art/${n}.webp`}))).then(n=>Object.fromEntries(n))}function ch(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let p=0;p<l.length;p++)h[p]=l.charCodeAt(p);let d=a.ctx.decodeAudioData(h.buffer,p=>{a._smp[o]=p},()=>{});d&&d.catch&&d.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),d=c.createGain();h.buffer=l,d.gain.value=e[a]||.8,h.connect(d),d.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function lh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),d=c.createGain();h.buffer=l,h.loop=!0,d.gain.value=t,h.connect(d),d.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var hh={shoot:"data:audio/mpeg;base64,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",hit:"data:audio/mpeg;base64,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",pearl:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABIAABAIABoaGhoaKCgoKCgoNTU1NTVDQ0NDQ0NQUFBQUF5eXl5eXmtra2treXl5eXl5hoaGhoaUlJSUlJShoaGhoaGvr6+vr7y8vLy8vMrKysrK19fX19fX5eXl5eXy8vLy8vL//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA8AAAAAAAAAQCLr/NhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAFlAFvtBEAAiwybOMegAFEAxqFp02G0B9QIAg5xQENZc+XB/hjlHfWf+D/lw///6pz///5c/4nD8oCAIAAbCgqMAAI8W5HmQY0xLXyZVZakoGMqFKdEVdjAUhAHQsEoDhUWAOHEiSgqBAGpIlEwqKCoNBHkxRlKOcbLdnFSNQg8ANJAkCODRkCqKQ3BbIve56j4Tp92nEKqxq299t/CCEwqzwOuy6jnq+8RfWt5ndBzXHx8d4/EpUiir///jFJoa6f//2TBpqy0QaSRaTSiSAEYyr/+zjEBYAMGW11vPKACYMZr/zDDsSJaZtXW2VEqdmMFzqcznBF1D4mYCgaKCo8XFGMYSYyoY6OIpvplVkMKoLLlIhWMIsWZGZ61suRMkjHZWIqK+4pZNJ2O//+t2otuen/f//1yRBaJnmbweVNTAzBJtE0SA3owXX20rBZLAECQw5yxDrS8CxxOft3S/DN5vp27AgL8vfMYXeCxaArZuLF23KI/TFshFKfIm+nl5ybnCHTnCY4Pp2yl7LARaUPFAH+cR0MWCBmFIwMOoq0kAAAlMqAyV0ghjf/+zjEBgAMROl3hgzUwYWvbjDDCllsqE0ybQMPlx6qiWk89ZLHafwxry8ecnCAaZGQ4hukeVyC+zjhIv/8J0IIo80WMJhww8QhZ5ZxY+EHh/uvv39ce9YzojxxxXrUc2vgDpZIja2xQWyCzeZQIAAKAmDg+P0qhUAoOWiyjO0g2jA+aMN0rJ6VS4ExOKIiSIMOyBSmJJUbmGpO1ZMzE5WvMVfnZNcMKlKiW5pTGdWfK/9f0MbulsrVKUvspS9NWLMb///l69Ueg7V5DcWK6AAASNMIgKytFNb/+zjEBYALjI93h7BsoY2jbjDzDWh7EcFYjZm5TIeUpWNieFVTpG265eqqMEFIOFIRSFOx+zTP6SF/FViY1RqJDgHPt2iiRt4YDkeLUPCQVdsi3MRUDhE/SS8o6Pfm2i58VHBiUrM35AAAGa/gDIjKlTtyHQTuM0vi4VhA0QcjpSKK2NJBVmoIloTVk4LOSmbxMjygKlnM51Trnn/uZtAsIjZDP2nXIR/ubsWkMPzLLM5woaXy7V0oqCiAotynct0xwAEbRizK2iWuuyCAAATTiBAMZtCedV3/+zjEBwELxOVzpgzPgZIvLPDzCdhOFIHzVkqL1C6IRVDmVYWHOoromTupzM90/lhZlsR15+tdJoRvCZFkKTz7O7DyQDkDVnY01bQXjCQZFYZYVTVSYFojn2Ff+p2lywo5wCjJNFoQAQKIEHY4LFAiQ29EqRdxEo0pBSSNPAiCUWkWJPRBY0mRIgqRLXwTVHIVZQo2ZEe6lUvuSUs7BSs6pWm3upUHZUZZSGo4mxzXZulKdFZmOZCHZn7cv/se3d9fUyqUlxBzxuhFnaAAIAzWwPHlUvuM6gX/+zjEBwAMXG9njCTOwYSwLrTzDD0lGnstFVVcjZ20b1FJXqsLNgKB8FIrlhxqAGTivIziELpH49kucWDigo3fNo9jAEcLrIlQqwkI1NhELaRZz2TsXJ0h2yxbQEVVJFTMnb+z+lyAVGMX+gCC0k4lEkBrQyneeSOTCwuloykmWXGLTNP30DHXsh2KN+q5oynx0r/P6fn5HlporlTL/+ELkIenkT7ggEWv/XzppVMnl/zI+nw++8+wv0L/I/lsQsqGEUETvsJAyDmBo4+QAQADJJpOJAEA4j3/+zjEBoAMNX1v54xPwYocbXmHlTAFGdlMQFwqSqjUip9R44sDqKFtIUICOgLdyL28nzn41hgidkWCQhMAKYRHm8KS+ZWZkd1M9FQ1O1WcYiKl578+3VexMWh3nf///+jXRquisVWgla9UVBAAABjADIDebyzG6RdyLt6txhSQ8mEHKGEYTjarY8OUx8l3LEJumyUJUccZ4XQUjB/o+5bwcQHOudyNI5Im6VdWkNIZ6VlZ1tW2kvVLv/Yc6ixQ3Kf2JFlJ0quq/lituwkqjIp0EwAAinHGBKz/+zjEBYAK3K9156Sn4VkMLHS0mLglpO7syYWLJShSInd8tLLyRUSkJKhXzIqIrv0qBxQz2R9JlZ1KvT1L0RDZhE+glCqCuBTS5oKDgUDjA11dsWh08SKp3VHu1YbYpMbXZIyQQAUW5YANmavKCSygLhvW3LMK0vE+74QwCzKEalHGS/sjBIMRpodTCzRcPh0YcDAb4NNcAwVYdvcTHQ0xJkseEqGPO/xCZWDE0efmrPqM2m1Rd/ZVmkSZTSSbkTBW26+DJuqd3mEPXmjp9/LMwpVrUauN5Cr/+zjEEAAKkR9trDBj0VEbK7z2DWjN86waCRMz9zN7VjSERfbclrPu+7FEe2khZH8p5FaRdEqraFb+t////if26FiJD//4nDbuopgTBSEiCZcZAESqyNEPdaySMSOCYHXwkLRtV1KgJXRsjQyexOZbLLlvQwexzAXJ7/3Wq8/PI2jGXKV0A3Muy7Z/aRepWGwIwlfs/4JRQNN//RY2OVnmAUADPwAWoqFMHi4epLcMlWj4qJkWYFUPxpsqnDJ1fivZlOGs8N5mf1fSEfNVJiFpdGj7XPyIyt//+zjEHQAKsRVRh6RnwU8bK/RhijKn9LY5eSwynFl/zn3//VObghzv9iviJ5YqbbkBBWQom45I2gMxf/PI9+cSS1EDkxZLeVQoChquTHDX1Rq5Bsj/1y8uAtQtE5m0pFod5GP/qmpVETftBNNRi/qkIcNCwhLuR+doWWGhEcLFQKgUcLIVDsgAiUsihAAQWJmC8w8gsU7HIkTCRuUfCmdznIDqZKcy55VldN1y65d8MwVp2qMUkt1aTqmua1KbzCjyHKlWucq6Mbibf/R2OFQKnY93/9R6MeX/+zjEKYBKsRVHp5hJwVEb6LTxiXhhyYErRASTlZBBxmFIE8Qgu5KzjZU/HQgMDpRA9PUJwARCKKJcPV4gkXpCc8PvSxMI7Wtm6uhP/daz1djrZvMRXEvwmd66HlJiFR//6gkA0LIAdA8NumUiEa44y0AApH7XpEqdFYBwYJ5xBNHI+b55SBQSDGhygUGG4Ugce0/UFLQXKynYhs7ntMQjzYgCBU1V/MnA8SWLBYIWsEjbZfReSX//04lh2jS4GEMqwN1QALlSQfo02VTYJVm1ZhKcJ4os/uv/+zjENgAKOH9JSCTAwVgT6HEmDHg1KxdIKqqygynA0DYp3MySOxuyJPOw6tOTtHcHwQCBRbQSCghSCAYjxIGPZ9fmwIFPq+6tzVhcw4SAuBElRwu1pwBkgAjzf/a42cjOBGroydQJnA1GJjlkSLFqZbXLMTXz0q/S5NVbcq6CF//yrNBTFC1/te3988Ns8c8RdjAVDQJLe3/6yp30uenhR+RIlw6hRYt6tGbF1OMgC6Ky38iK4lhGkQQJmDEkyYxpSEIc/xB1T/xN0IzrpKemhMSCUDiMv3b/+zjEQ4AKyNlBqLEBQV8VaLTDDShWI+ChmHEQSOCLiEugYZMmyAWEtrAeDJd1qNdCn4BPdDaxqPY2m6pMW2u6yRJAEAmnOT1DEyWS2S0vgmRi68sJxfUWMj85NTlCbohzyZach9xVCQGbpykJJK+GJdz3VYX0vk0bAvbFQFLAsCyCaQEdMjxCKkQQJGuR////+qR9ACiVC7IANWnl/pV61zJ5zfR9KZaxLJxtokb9xJ8+XmOQCtw2pzd+bcfqqeJCzO3YqTCuH+xpdu7EpRrSLZsgygsyssn/+zjETgALDH9dor2E8VGbJqTzDeAXuxRKhAGEPuZ+fVrTW4oiRQAAnHKLG0iACTzLT+MO4wEBC89y6nrYYn9QeubRUgZ1Z23uW94UzvZWmdUVqL0ehnZTNboVjS2NnVntQ0y/+dGZUZdTM6PVP99WsvzGo4zCXruCWlABX8oAHSY0dZ3Jv6Sv9uTUq5GKFGlEkKt0Ily5NaQlA6iT7Hz4oR7ledOlCadCvslbzpGS2Ujvw/KU2bvQtlzTaqZEeu1PZqte/1HZCPzKzFCTdgA/SoBJ58sIUJb/+zjEWQIKnXk3pQxJwUwwJaShinFDogadX+z6KzuZUAgKOQ7gTlOpbmZGKti2KqO0r3SFXafvSYylt6ztmOjq1H9LdjdWXuTkLYp5n7fuXXRmoYrn6yqoICM5nRXMLl42S6QXRwwOJMia1nGM+c5bfWs40i1AYh1wpgZKjVjzochVsERdLwoOlgKEytQ6GbVmUpja5GhoiH1HdXOEToizwdhJiA00SmCz5WoARCE3GkmBVQcxq+oxJxZ/WvjXh3Y7uxefSOUjv53hKqVSK4Zjx9ZIRPV+qrT/+zjEZoJKvYMox4BCCSWMJNkQjWD9H76e36qtpar8FQWAAIi+vPV5+XCZWJtYeL17mD0ouEHyod4UNBBldC4SIiu/zoOTKknpmQ8GSA1xHcnuW8PJ5PYv9u391F2fSDg9ZtxUcNfKJr+v0N5NjtYjZJy4gL0AAAr/kAqlkrIzEpAeL5ZJKwnF0mwL+nWRKSIqrTUQYKLCYJHkjRopZGNBSVORKATRCSpgigFQyJREbFO0iOgiZWRJ6hUJiriJclKuCxpCzLfGtVgKlyU4yiXJUmlYSl61WDT/+zjEeAAHAKEnR4RlwVKZ5AjBmaisIrTQpNKsyBYU3YMpqX/6SKqDSSWUqimKoRJJLCGkosqFFFlmFopEQYSNDQ2QI2HogWGr//9VVdP///9Vf/9VMqtV//6qbf//4NVSJVBq4aoMSpEqsVyqoqqZVWK5VQaqkSiBq4aoMSpEogauGq7lMqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEkwIQ6P0lJhktSTOD28BkpMGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",rescue:"data:audio/mpeg;base64,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RIPnwgrGz9J+4fwo6X2H14+vTTgXfI+XO1na4qoPYHRXwzY/0AfyUdsq4p//+zjE3YMKgXESR4hxyVsuIozxFXHv2ajWfpQNRrMdkiXUvPhXoCMrtiuSkqYILSTgkAAQGhJAHZkhG6iQITHEM9HDt8YtZt2SRwMvzOIE/ELyPuZ/J/jxL/XJSUNE6cjmkOVyTPJPmw6uJH9E6yP+a8Pvj+/iv/FzPm2zaoqpG0139Hi25NZ6Uy3sJ9lbcUShoiJwOuqRWrUOltrrHxraGgAJhx0vAFldNha2xI73M2bxJNiRdGSodiohUfogzlcrqqZKxQ3FGi5VaGbFtNBjKPQW6n0HMdP/+zjE6YEOcYMKzCUHQYiqoQGGHPA1OqCDU5r0Pqj4RywZtA2cO7Xzq2FUvF0OaCCyhU80ElQf3t00BxsRhLJgAgtwN8eCRQ+K4Q/7yRr1VtPggigZFBCc7ZtB6E4zN7VMeh+lzprq2Hei6cfO+7WE3Z7genNRR/Wzh+M/0ZfslBsHK4nlvPfbvheaKr7+EE9V9v9NapAAEUHKLoqSQpYM6sKikUg9xWtOi9QrIBXLpWDkVCecPzSkLDbEKRtCQm0JthvNZTlQliADcKArFg3Nu/Vh2YE8mGj/+zjE4AAKrVsTR5hHScCwIih8IAGtCQ0KFpm30fdn4HIIEwgehZhcYx6B4gmrW2E0A6lxj0az5RZZRZH1gMDVdoJCbf2n1l2SNNMz1jv/SyyrvCV1XU0gTw2QQEcmGZgdlxIviakwNChqyhgYIE6GR/ywyNWCg5ZZZahqysoYE6GTK1qGRkyhhUEzICF9ISioqsUJD6xY1FRQl/6xUW/+KihI0aCoskxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE3oMMLXMMR5xxwVEdIoz2CGmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE5QNQzPEaTDDNyT0UYAD2DCCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",boss:"data:audio/mpeg;base64,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CIAQMhlxEAYDTgsAYEiaaqFDpEFIoqBosDQNFToKgrESgaPLOiU70+JYiUDXWdpg11nYiiLrO0yPWdiKIqzpU7TI1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AAL3VcWdPKACoivJAsxAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEwAPIZC7wHJMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",storm:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVQGqwqCIGQyzSJEixYiRNAUFSoKndQNPEqwVdlg729X+WPcS8se5Xqf/U/89fEsNf4K1Hix6tUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7QAMiNkONYQAApSvI4czEAJVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEuQPGsBz0XJEAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var Um="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",be=null,Pr=!1;function uh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function tc(){uh(),Pr=!0;try{if(be||(be=document.createElement("audio"),be.src=Um,be.loop=!0,be.preload="auto",be.setAttribute("playsinline",""),be.setAttribute("webkit-playsinline",""),be.setAttribute("x-webkit-airplay","deny"),be.volume=.01,be.addEventListener("pause",()=>{Pr&&!document.hidden&&setTimeout(()=>Pr&&be.paused&&be.play().catch(()=>{}),300)})),be.paused){let i=be.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function dh(){Pr=!1;try{be&&!be.paused&&be.pause()}catch{}}function fh(i,t){uh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Se=i=>440*Math.pow(2,(i-69)/12),Dm=[[43,[62,67,71]],[40,[59,64,67]],[36,[60,64,67]],[38,[62,66,69]],[43,[62,67,71]],[40,[59,64,67]],[36,[60,64,69]],[38,[62,66,69]]],qm=[[0,0,79],[0,3,83],[0,5,86],[1,0,84],[1,3,83],[1,6,79],[2,0,84],[2,2,88],[2,4,86],[2,6,84],[3,0,86],[3,4,81],[3,6,78],[4,0,79],[4,3,83],[4,5,86],[5,0,88],[5,3,86],[5,6,83],[6,0,84],[6,2,81],[6,4,84],[6,6,88],[7,0,86],[7,4,83]],Gi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(tc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;fh(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){dh(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){tc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="boss"?132:t==="play"?118:100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let d=l.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),c&&d.frequency.exponentialRampToValueAtTime(c,t+e),d.Q.value=a;let p=l.createGain();p.gain.setValueAtTime(1e-4,t),p.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),p.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(p).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}mar(t,e,n,s=this.music){let r=Se(t);this._tone("sine",r,e,.35,n,s,.003),this._tone("sine",r*4,e,.05,n*.3,s,.002)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="play"||this.mode==="boss";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),c=a%8,[l,h]=Dm[o];c%2===0&&this._tone("triangle",Se(l-12),r,n*1.6,.16,this.music,.006),c%2===1&&h.forEach(d=>this._tone("triangle",Se(d-12),r,.11,.026,this.music,.003)),s&&c%4===0&&this._noise(r,.04,.03,"lowpass",800,1,this.music),s&&c%4===2&&this._noise(r,.03,.018,"highpass",6500,1,this.music),this.mode==="boss"&&c%4===0&&this._tone("sawtooth",Se(l-24),r,.2,.05,this.music,.01);for(let[d,p,u]of qm)d===o&&p===c&&(this._tone("sine",Se(u),r,.3,s?.075:.06,this.music,.002),this._tone("sine",Se(u)*4,r,.06,.015,this.music,.002));this.step++,this.nextTime+=n}}play(t,e){if(typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t),!this.on)return;let n=this.ctx.currentTime+.005;switch(t){case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.1,.03);break;case"shoot":this._slide("sine",520,880,n,.07,.025);break;case"hit":this._tone("triangle",300+Math.random()*100,n,.04,.03);break;case"pop":this._noise(n,.06,.07,"highpass",2500,1),this._slide("triangle",300,1e3,n,.14,.07),this._tone("sine",Se(84+Math.min(e||0,8)),n+.06,.2,.04);break;case"pearl":this._tone("sine",Se(88+Math.min(e||0,8)*2),n,.1,.045),this._tone("sine",Se(100),n+.04,.12,.03);break;case"feather":this._tone("sine",Se(96),n,.14,.04);break;case"capsule":[76,80,83,88].forEach((s,r)=>this._tone("sine",Se(s),n+r*.05,.3,.06));break;case"rescue":[88,92,95,100,95,100].forEach((s,r)=>this._tone("sine",Se(s),n+r*.06,.12,.05));break;case"chirp":this._slide("sine",1800,2600,n,.07,.03);break;case"storm":this._noise(n,1,.1,"bandpass",500,.7,this.sfx,3e3),[72,76,79,84,88].forEach((s,r)=>this._tone("sine",Se(s),n+.05+r*.07,.5,.06));break;case"hurt":this._tone("sine",170,n,.2,.14),this._noise(n,.1,.05,"lowpass",500,1);break;case"boss":this._slide("sawtooth",110,60,n,.9,.08),this._noise(n,.7,.05,"lowpass",400,1);break;case"combo":[84,88].forEach((s,r)=>this._tone("triangle",Se(s+(e||0)*2),n+r*.05,.2,.05));break;case"rank":[[72,0],[76,.12],[79,.24],[84,.36],[88,.55]].forEach(([s,r])=>{this._tone("triangle",Se(s),n+r,.45,.07),this._tone("sine",Se(s)*2,n+r,.2,.03)});break;case"dead":[[67,0],[64,.3],[60,.6],[55,.9]].forEach(([s,r])=>this._tone("triangle",Se(s),n+r,.5,.06));break;default:}}};ch(Gi,hh);lh(Gi);var ec={title:["\u0633\u0643\u0627\u064A \u0643\u0627\u0628\u064A","SKY CAPY"],play:["\u064A\u0644\u0627 \u0646\u0637\u064A\u0631","Play"],hangar:["\u0627\u0644\u062D\u0638\u064A\u0631\u0629","Hangar"],top10:["\u0623\u062D\u0633\u0646 10","Top 10"],upgrades:["\u0627\u0644\u062A\u0637\u0648\u064A\u0631\u0627\u062A","Upgrades"],paint:["\u0627\u0644\u0623\u0644\u0648\u0627\u0646","Paint"],back:["\u0631\u062C\u0648\u0639","Back"],exit:["\u062E\u0631\u0648\u062C","Exit"],fire:["\u0646\u0627\u0631","FIRE"],storm:["\u0639\u0627\u0635\u0641\u0629","STORM"],engine:["\u0627\u0644\u0645\u062D\u0631\u0643","Engine"],engineD:["\u0637\u064A\u0627\u0631\u0629 \u0623\u0633\u0631\u0639 \u0648\u0623\u062E\u0641","A quicker, nimbler plane"],tank:["\u062E\u0632\u0627\u0646 \u0627\u0644\u0641\u0642\u0627\u0639\u0627\u062A","Bubble Tank"],tankD:["\u0646\u0627\u0631 \u0623\u0633\u0631\u0639 \u0648\u062A\u0639\u0628\u0626\u0629 \u0623\u0633\u0631\u0639","Longer fire, faster refill"],power:["\u0642\u0648\u0629 \u0627\u0644\u0641\u0642\u0627\u0639\u0627\u062A","Bubble Power"],powerD:["\u0636\u0631\u0631 \u0623\u0643\u062A\u0631 \u0645\u0639 \u0643\u0644 \u0645\u0633\u062A\u0648\u0649","+15% damage per level"],armor:["\u0627\u0644\u062F\u0631\u0639","Armor"],armorD:["\u0635\u062D\u0629 \u0623\u0643\u062A\u0631","+25 HP per level"],magnet:["\u0627\u0644\u0645\u063A\u0646\u0627\u0637\u064A\u0633","Magnet"],magnetD:["\u0628\u064A\u062C\u0630\u0628 \u0627\u0644\u0644\u0624\u0644\u0624 \u0648\u0627\u0644\u0631\u064A\u0634 \u0645\u0646 \u0628\u0639\u064A\u062F","Pulls pearls and feathers from afar"],stormUp:["\u0639\u0627\u0635\u0641\u0629 \u0641\u0642\u0627\u0639\u0627\u062A","Storm Stock"],stormUpD:["\u0639\u0627\u0635\u0641\u0629 \u0632\u064A\u0627\u062F\u0629 \u0641\u064A \u0643\u0644 \u0645\u0647\u0645\u0629","One more Bubble Storm per run"],lagoon:["\u0627\u0644\u0628\u062D\u064A\u0631\u0629","Lagoon"],royal:["\u0645\u0644\u0643\u064A","Royal"],grape:["\u0639\u0646\u0628","Grape"],clover:["\u0628\u0631\u0633\u064A\u0645","Clover"],cherry:["\u0643\u0631\u0632","Cherry"],snowbird:["\u0637\u0627\u0626\u0631 \u0627\u0644\u062B\u0644\u062C","Snowbird"],midnight:["\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644","Midnight"],sunny:["\u0645\u0634\u0645\u0633","Sunny"],on:["\u0634\u063A\u0651\u0627\u0644","ON"],max:["\u0627\u0644\u0623\u0642\u0635\u0649","MAX"],feathers:["\u0631\u064A\u0634","Feathers"],stage1:["\u0642\u0631\u064A\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","Cloud Village"],stage2:["\u0643\u0645\u064A\u0646 \u062D\u0628\u0644 \u0627\u0644\u063A\u0633\u064A\u0644","Laundry-Line Ambush"],stage3:["\u0634\u062C\u0631\u0629 \u0627\u0644\u0639\u0634 \u0627\u0644\u0639\u0645\u0644\u0627\u0642\u0629","The Giant Nest Tree"],loop:["\u0627\u0644\u062F\u0648\u0631\u0629","Loop"],clear:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u062E\u0644\u0635\u062A!","Stage clear!"],rank:["\u0627\u0644\u062A\u0642\u064A\u064A\u0645","Rank"],cont:["\u0643\u0645\u0651\u0644","Continue"],score:["\u0627\u0644\u0646\u062A\u064A\u062C\u0629","Score"],shot:["\u0627\u062A\u0636\u0631\u0628\u062A!","SHOT DOWN!"],newrec:["\u0631\u0642\u0645 \u0642\u064A\u0627\u0633\u064A! \u0627\u0643\u062A\u0628 \u062D\u0631\u0648\u0641\u0643","New record! Enter your initials"],save:["\u0627\u062D\u0641\u0638","Save"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","Play again"],hint1:["\u0627\u0644\u0642\u0631\u0627\u0635\u0646\u0629 \u0628\u064A\u0647\u0627\u062C\u0645\u0648\u0627 \u0627\u0644\u0642\u0631\u064A\u0629! \u0641\u0631\u0642\u0639\u0647\u0645!","Pirates are raiding the village! Pop them!"],hintUmb:["\u0627\u0644\u0645\u0638\u0644\u0627\u062A \u0628\u062A\u0645\u062A\u0635 \u0627\u0644\u0641\u0642\u0627\u0639\u0627\u062A. \u0643\u0645\u0651\u0644 \u0636\u0631\u0628!","Umbrellas soak up bubbles. Keep firing!"],hintCage:["\u0627\u0645\u0633\u0643 \u0627\u0644\u0642\u0641\u0635!","Catch the cage!"],hintBird:["\u0627\u0644\u0639\u0635\u0641\u0648\u0631 \u0627\u0646\u0636\u0645 \u0644\u064A\u0643!","A songbird joined you!"],hintCap:["\u0643\u0628\u0633\u0648\u0644\u0629 \u0633\u0644\u0627\u062D! \u0627\u062C\u0645\u0639\u0647\u0627","A weapon capsule! Grab it"],hintBoss:["\u0642\u0628\u0637\u0627\u0646 \u0627\u0644\u0642\u0631\u0627\u0635\u0646\u0629 \u0648\u0635\u0644!","The pirate captain is here!"],hintStorm:["\u062F\u0648\u0633 \u0639\u0627\u0635\u0641\u0629 \u0627\u0644\u0641\u0642\u0627\u0639\u0627\u062A \u0644\u0648 \u0627\u062A\u062D\u0627\u0635\u0631\u062A","Hit STORM when you are swamped"],hintDrag:["\u062D\u0631\u0651\u0643 \u0635\u0628\u0627\u0639\u0643 \u0639\u0634\u0627\u0646 \u062A\u062D\u0631\u0651\u0643 \u0627\u0644\u0637\u064A\u0627\u0631\u0629","Drag your finger to fly"],ach:["\u0625\u0646\u062C\u0627\u0632","ACHIEVEMENT"],firstPop:["\u0623\u0648\u0644 \u0641\u0631\u0642\u0639\u0629","FIRST POP"],spread:["\u062B\u0644\u0627\u062B \u0641\u0642\u0627\u0639\u0627\u062A","Triple bubbles"],pierce:["\u0641\u0642\u0627\u0639\u0629 \u0643\u0628\u064A\u0631\u0629","Big bubble"],rapid:["\u0646\u0627\u0631 \u0633\u0631\u064A\u0639\u0629","Rapid fire"],robin:["\u0623\u0628\u0648 \u0627\u0644\u062D\u0646\u0627\u0621","Robin"],jay:["\u0627\u0644\u0642\u064A\u0642","Jay"],canary:["\u0627\u0644\u0643\u0646\u0627\u0631\u064A","Canary"],pause:["\u0648\u0642\u0641\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Resume"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u2708\uFE0F","Well done! \u2708\uFE0F"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u2708\uFE0F","Well done! \u2708\uFE0F"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],best:["\u0623\u0639\u0644\u0649 \u0646\u062A\u064A\u062C\u0629","BEST"],thief:["\u062D\u0631\u0627\u0645\u064A!","THIEF!"],thiefSub:["\u062E\u0637\u0641 \u0631\u064A\u0634 \u0627\u0644\u0642\u0631\u064A\u0629! \u0627\u0644\u062D\u0642\u0647!","He grabbed the village feathers!"],hintTank:["\u0627\u0644\u062E\u0632\u0627\u0646 \u0641\u0627\u0636\u064A! \u0633\u064A\u0628 \u0632\u0631\u0627\u0631 \u0627\u0644\u0646\u0627\u0631 \u064A\u062A\u0639\u0628\u0651\u0649","Tank empty! Let go of FIRE to refill."],hintFree:["\u062D\u0631\u0651\u0631 \u0627\u0644\u0639\u0635\u0641\u0648\u0631!","FREE THE BIRD!"],gameOver:["\u062E\u0644\u0635\u062A \u0627\u0644\u0644\u0639\u0628\u0629","GAME OVER"],stageWord:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Stage"],hiScore:["\u0623\u0639\u0644\u0649 \u0646\u062A\u064A\u062C\u0629","HI-SCORE"],skip:["\u062A\u062E\u0637\u0651\u0649","SKIP"],next:["\u0627\u0644\u062A\u0627\u0644\u064A","NEXT"],go:["\u064A\u0644\u0627","GO"],pirates:["\u0627\u0644\u063A\u0627\u0631\u0629!","The raid!"],meetPip:["\u0642\u0627\u0628\u0644 \u0628\u064A\u0628","Meet Pip"],story1:["\u0623\u0633\u0639\u062F \u0642\u0631\u064A\u0629 \u0635\u063A\u064A\u0631\u0629 \u0641\u0648\u0642 \u0627\u0644\u0633\u062D\u0627\u0628: \u0639\u0635\u0627\u0641\u064A\u0631 \u0648\u0628\u064A\u0648\u062A \u0639\u0635\u0627\u0641\u064A\u0631 \u0648\u0637\u0627\u062D\u0648\u0646\u0629 \u0647\u0648\u0627\u0621.","The happiest little town above the clouds: songbirds, birdhouses and a windmill or two."],story2:["\u0642\u0631\u0627\u0635\u0646\u0629 \u0627\u0644\u062C\u0648 \u0631\u0627\u0643\u0628\u064A\u0646 \u0628\u0627\u0644\u0648\u0646\u0627\u062A \u0648\u0637\u064A\u0627\u0631\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u0648\u0639\u0627\u064A\u0632\u064A\u0646 \u064A\u0627\u062E\u062F\u0648\u0627 \u0631\u064A\u0634 \u0627\u0644\u0642\u0631\u064A\u0629!","Sky pirates in balloons and tiny planes want the village feathers!"],story3:["\u0623\u0646\u0627 \u0628\u064A\u0628! \u0647\u0636\u0631\u0628 \u0623\u0642\u0631\u0628 \u0642\u0631\u0635\u0627\u0646 \u0628\u062F\u0627\u0644\u0643. \u062D\u0631\u0651\u0631 \u0639\u0635\u0627\u0641\u064A\u0631 \u0623\u0643\u062A\u0631!","I'm Pip! I'll shoot the nearest pirate for you. Free more birds!"],empty:["\u0645\u0641\u064A\u0634 \u0646\u062A\u0627\u0626\u062C \u0644\u0633\u0647\u060C \u0627\u0637\u0644\u0639 \u0648\u0641\u0631\u0642\u0639!","No scores yet, go pop some pirates!"]},Lr="ar",ph=!1,gh=i=>{Lr=i==="en"?"en":"ar"},mh=i=>{ph=!!i},nc=()=>Lr,ft=i=>{let t=`${i}_${ph?"f":"m"}`,e=ec[t]?t:i;return ec[e]?ec[e][Lr==="en"?1:0]:i},pe=i=>Lr==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]);var Nm=`
.sc-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#1d2a4a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#8ac8ff}
.sc-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sc-layer{position:absolute;inset:0;pointer-events:none}
.sc-layer button,.sc-layer .sc-card,.sc-layer .sc-btnrow{pointer-events:auto}
.sc-hud{position:absolute;left:0;right:0;top:max(calc(var(--u)*1.5),env(safe-area-inset-top));padding:0 calc(var(--u)*2);display:flex;gap:calc(var(--u)*2);align-items:center;direction:ltr}
.sc-hp{flex:1;display:flex;align-items:center;gap:calc(var(--u)*1.2);max-width:calc(var(--u)*60)}
.sc-hp i{font-style:normal;font-size:calc(var(--u)*5);filter:drop-shadow(0 2px 2px rgba(0,0,0,.3))}
.sc-bar{flex:1;height:calc(var(--u)*3.4);border-radius:99px;background:rgba(29,42,74,.55);border:calc(var(--u)*.4) solid #fff;overflow:hidden;position:relative}
.sc-bar b{display:block;height:100%;background:linear-gradient(180deg,#8af06a,#3fb82a);border-radius:99px;transition:width .15s}
.sc-bar b.low{background:linear-gradient(180deg,#ffb06a,#e8503a)}
.sc-bar span{position:absolute;right:calc(var(--u)*1.2);top:50%;transform:translateY(-50%);font-weight:900;font-size:calc(var(--u)*2.4);color:#fff;text-shadow:0 1px 2px #000}
.sc-score{font-weight:900;font-size:calc(var(--u)*6);color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #1d2a4a;paint-order:stroke fill;min-width:calc(var(--u)*24);text-align:right}
.sc-mult{position:absolute;right:calc(var(--u)*2);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*11.6);font-weight:900;font-size:calc(var(--u)*5);color:#ff5a4a;-webkit-text-stroke:calc(var(--u)*.4) #fff;paint-order:stroke fill;opacity:0;transition:opacity .2s}
.sc-mult.show{opacity:1}
.sc-prog{position:absolute;left:calc(var(--u)*2);right:calc(var(--u)*2);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*10.4);height:calc(var(--u)*.9);border-radius:9px;background:rgba(255,255,255,.4)}
.sc-prog b{display:block;height:100%;border-radius:9px;background:#ffd23a;width:0}
.sc-round{width:calc(var(--u)*9);height:calc(var(--u)*9);flex:none;border-radius:50%;font-size:calc(var(--u)*4.2);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;background:linear-gradient(180deg,#fff,#cfe0f8);border:calc(var(--u)*.5) solid #1d2a4a;color:#1d2a4a;box-shadow:0 calc(var(--u)*.5) 0 #1d2a4a;pointer-events:auto}
.sc-round:active{transform:translateY(calc(var(--u)*.4))}
.sc-fire,.sc-storm{position:absolute;bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;cursor:pointer;padding:0;border:calc(var(--u)*.7) solid #fff;box-shadow:0 calc(var(--u)*.7) 0 rgba(29,42,74,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:none;pointer-events:auto}
.sc-fire{right:calc(var(--u)*4);background:radial-gradient(circle at 35% 30%,#ff8a7a,#e8323a)}
.sc-storm{right:calc(var(--u)*24);background:radial-gradient(circle at 35% 30%,#8ad8ff,#2a7ae8)}
.sc-storm.off{filter:grayscale(1);opacity:.55}
.sc-storm small{font-size:calc(var(--u)*2.6)}
.sc-ring{position:absolute;inset:calc(var(--u)*-1.6);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.9);clip-path:inset(0 0 calc((1 - var(--fill,1)) * 100%) 0)}
.sc-toast{position:absolute;left:calc(var(--u)*3);top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*13);max-width:calc(var(--u)*70);background:#fff;border:calc(var(--u)*.5) solid #1d2a4a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.4) calc(var(--u)*2.4);font-weight:800;font-size:calc(var(--u)*3.4);box-shadow:0 calc(var(--u)*.6) 0 rgba(29,42,74,.5);opacity:0;transform:translateY(calc(var(--u)*-2));transition:opacity .3s,transform .3s;pointer-events:none}
.sc-toast.show{opacity:1;transform:none}
.sc-banner{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%) scale(.9);font-weight:900;font-size:calc(var(--u)*8);color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #1d2a4a;text-align:center;white-space:nowrap;opacity:0;transition:opacity .3s,transform .3s;pointer-events:none}
.sc-banner.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.sc-banner small{display:block;font-size:calc(var(--u)*4);color:#ffd23a}
.sc-dim{position:absolute;inset:0;background:rgba(20,40,90,.5);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.sc-card{background:linear-gradient(180deg,#fdf6e4,#f2e4c4);border:calc(var(--u)*.7) solid #1d2a4a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*74);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*1.6) calc(var(--u)*5) rgba(10,20,60,.5);color:#1d2a4a}
.sc-logo{font-size:calc(var(--u)*11);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.9) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #1d2a4a;text-align:center;line-height:1}
.sc-title{font-size:calc(var(--u)*6.4);font-weight:900;color:#e8503a;text-align:center}
.sc-small{font-size:calc(var(--u)*3.6);font-weight:700;text-align:center}
.sc-rank{font-size:calc(var(--u)*26);font-weight:900;line-height:1;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*1) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1d2a4a}
.sc-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);color:#fff;border:calc(var(--u)*.6) solid #1d2a4a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#ff8a7a,#e8323a);box-shadow:0 calc(var(--u)*.8) 0 #1d2a4a;width:100%}
.sc-btn.blue{background:linear-gradient(180deg,#6ac8ff,#2a7ae8)}
.sc-btn.green{background:linear-gradient(180deg,#7ae88a,#2fb85a)}
.sc-btn:active{transform:translateY(calc(var(--u)*.5))}
.sc-btn:focus-visible,.sc-round:focus-visible,.sc-tab:focus-visible,.sc-item button:focus-visible{outline:calc(var(--u)*.7) solid #3a8ae8;outline-offset:calc(var(--u)*.5)}
.sc-ribbon{background:linear-gradient(180deg,#ff8a7a,#e8323a);border:calc(var(--u)*.6) solid #1d2a4a;color:#fff;font-weight:900;font-size:calc(var(--u)*5);padding:calc(var(--u)*.8) calc(var(--u)*6);border-radius:calc(var(--u)*1.4);text-shadow:0 2px 0 #1d2a4a}
.sc-tabs{display:flex;width:100%;gap:calc(var(--u)*1);background:#e0cfa8;border-radius:99px;padding:calc(var(--u)*.6)}
.sc-tab{flex:1;border:none;border-radius:99px;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1.2);background:transparent;color:#7a6a4a;cursor:pointer}
.sc-tab.on{background:linear-gradient(180deg,#ff8a7a,#e8323a);color:#fff;box-shadow:0 calc(var(--u)*.4) 0 #1d2a4a}
.sc-list{display:flex;flex-direction:column;gap:calc(var(--u)*1.2);width:100%;max-height:calc(var(--u)*50);overflow:auto}
.sc-item{display:flex;align-items:center;gap:calc(var(--u)*2);background:#fff;border:calc(var(--u)*.4) solid #d8c8a0;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2) calc(var(--u)*2)}
.sc-item .ic{width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:50%;background:#e0f4ff;border:calc(var(--u)*.4) solid #1d2a4a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);flex:none}
.sc-item .tx{flex:1;min-width:0;font-weight:800;font-size:calc(var(--u)*3.4)}
.sc-item .tx small{display:block;font-weight:600;font-size:calc(var(--u)*2.8);color:#6a5a3a}
.sc-pips{display:flex;gap:calc(var(--u)*.6);margin-top:calc(var(--u)*.4)}
.sc-pips i{width:calc(var(--u)*3);height:calc(var(--u)*1.3);border-radius:9px;background:#d8c8a0}.sc-pips i.on{background:#3fb82a}
.sc-item button{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:calc(var(--u)*.4) solid #1d2a4a;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2.4);background:linear-gradient(180deg,#4adcc0,#1aa890);cursor:pointer;min-width:calc(var(--u)*13)}
.sc-item button.no{filter:grayscale(1);opacity:.6}
.sc-paints{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.6);width:100%}
.sc-paint{background:#fff;border:calc(var(--u)*.4) solid #d8c8a0;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);font-family:inherit;font-weight:800;font-size:calc(var(--u)*2.6);cursor:pointer;color:#1d2a4a}
.sc-paint i{width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:50%;border:calc(var(--u)*.5) solid #1d2a4a}
.sc-paint.on{border-color:#3fb82a;background:#eaffea}
.sc-table{width:100%;border-collapse:collapse;font-weight:800;font-size:calc(var(--u)*3.6)}
.sc-table td{padding:calc(var(--u)*.7) calc(var(--u)*1.4);border-bottom:calc(var(--u)*.3) dashed #d8c8a0}
.sc-table td:first-child{color:#e8503a;width:calc(var(--u)*7)}
.sc-table td:nth-child(3){text-align:right}
.sc-init{display:flex;gap:calc(var(--u)*2);direction:ltr}
.sc-init div{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6)}
.sc-init button{font-family:inherit;font-weight:900;border:calc(var(--u)*.5) solid #1d2a4a;background:#fff;border-radius:calc(var(--u)*1.6);width:calc(var(--u)*10);height:calc(var(--u)*7);font-size:calc(var(--u)*3.4);cursor:pointer}
.sc-init span{font-weight:900;font-size:calc(var(--u)*10);color:#e8503a;-webkit-text-stroke:calc(var(--u)*.5) #1d2a4a;paint-order:stroke fill}
.sc-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*26);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.sc-toast{display:flex;align-items:center;gap:calc(var(--u)*2)}
.sc-toast .pip{flex:none;width:calc(var(--u)*8.5);height:calc(var(--u)*8.5);border-radius:50%;background:radial-gradient(circle at 35% 30%,#ff8a7a,#c8222a);border:calc(var(--u)*.5) solid #1d2a4a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*4.6)}
.sc-ach{position:absolute;left:50%;top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*13);transform:translateX(-50%) translateY(calc(var(--u)*-2));background:linear-gradient(180deg,#3a4a7a,#1d2a4a);border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*3.4);color:#ffd23a;font-weight:900;font-size:calc(var(--u)*3);text-align:center;opacity:0;transition:opacity .3s,transform .3s;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.sc-ach small{display:block;color:#fff;font-size:calc(var(--u)*3.4)}
.sc-ach.show{opacity:1;transform:translateX(-50%)}
.sc-prog b{position:relative}
.sc-prog b::after{content:'';position:absolute;right:calc(var(--u)*-1.3);top:50%;transform:translateY(-50%);width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:50%;background:#ff5a4a;border:calc(var(--u)*.4) solid #fff}
.sc-thief{position:absolute;left:50%;top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*12.6);transform:translateX(-50%);width:calc(var(--u)*46);display:none;pointer-events:none}
.sc-thief.show{display:block}
.sc-thief span{display:block;text-align:center;font-weight:900;font-size:calc(var(--u)*3.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #1d2a4a;paint-order:stroke fill}
.sc-thief i{display:block;height:calc(var(--u)*2);border-radius:9px;background:rgba(29,42,74,.55);border:calc(var(--u)*.3) solid #fff;overflow:hidden}
.sc-thief b{display:block;height:100%;background:linear-gradient(180deg,#6af0d0,#1aa890)}
.sc-toast.low{top:calc(max(calc(var(--u)*1.5),env(safe-area-inset-top)) + var(--u)*19.5)}
.sc-fire.empty{background:radial-gradient(circle at 35% 30%,#b8c0cc,#7a8494);opacity:.85}
.sc-menu{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*2.4);pointer-events:none;padding-bottom:calc(var(--u)*14)}
.sc-menu>*{pointer-events:auto}
.sc-biglogo{font-size:calc(var(--u)*17);font-weight:900;line-height:.95;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*1.3) #1d2a4a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.4) 0 #1d2a4a,0 calc(var(--u)*2.4) calc(var(--u)*1.2) rgba(0,0,0,.25);text-align:center}
.sc-bestpill{background:linear-gradient(180deg,#e8323a,#b8222a);border:calc(var(--u)*.5) solid #fff;color:#fff;font-weight:900;font-size:calc(var(--u)*3.4);border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*4);box-shadow:0 calc(var(--u)*.5) 0 #1d2a4a}
.sc-playbtn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*9);color:#fff;border:calc(var(--u)*.9) solid #1d2a4a;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*1.6) calc(var(--u)*16);cursor:pointer;background:linear-gradient(180deg,#ff8a7a,#e8323a);box-shadow:0 calc(var(--u)*1.1) 0 #1d2a4a;text-shadow:0 calc(var(--u)*.5) 0 #1d2a4a}
.sc-playbtn:active{transform:translateY(calc(var(--u)*.6))}
.sc-icons{display:flex;gap:calc(var(--u)*4)}
.sc-icon{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);background:none;border:none;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3);color:#fff;text-shadow:0 1px 3px #1d2a4a;cursor:pointer;padding:0}
.sc-icon i{font-style:normal;width:calc(var(--u)*12);height:calc(var(--u)*12);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*6);background:linear-gradient(180deg,#6ac8ff,#2a7ae8);border:calc(var(--u)*.6) solid #fff;box-shadow:0 calc(var(--u)*.6) 0 #1d2a4a}
.sc-icon:focus-visible i{outline:calc(var(--u)*.7) solid #ffd23a}
.sc-dots{display:flex;gap:calc(var(--u)*1.4);justify-content:center}
.sc-dots i{width:calc(var(--u)*2);height:calc(var(--u)*2);border-radius:50%;background:#d8c8a0}.sc-dots i.on{background:#e8503a}
.sc-row{display:flex;gap:calc(var(--u)*2);width:100%}.sc-row .sc-btn{flex:1;padding-left:calc(var(--u)*1);padding-right:calc(var(--u)*1);font-size:calc(var(--u)*4)}
.sc-bigscore{font-size:calc(var(--u)*14);font-weight:900;color:#e8503a;-webkit-text-stroke:calc(var(--u)*.7) #1d2a4a;paint-order:stroke fill;line-height:1}
.sc-pill{background:#1d2a4a;color:#ffd23a;font-weight:900;font-size:calc(var(--u)*3.4);border-radius:99px;padding:calc(var(--u)*.6) calc(var(--u)*3)}
.sc-table td:nth-child(3){text-align:right;color:#6a5a3a;font-size:calc(var(--u)*3)}
@media (orientation:landscape){.sc-card{width:calc(var(--u)*110);max-width:94vw}.sc-list{max-height:calc(var(--u)*38)}.sc-logo{font-size:calc(var(--u)*9)}}
`;function H(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Bm={engine:"\u2708\uFE0F",tank:"\u{1FAE7}",power:"\u{1F4A5}",armor:"\u{1F6E1}\uFE0F",magnet:"\u{1F9F2}",storm:"\u{1F32A}\uFE0F"},Fm={engine:["engine","engineD"],tank:["tank","tankD"],power:["power","powerD"],armor:["armor","armorD"],magnet:["magnet","magnetD"],storm:["stormUp","stormUpD"]},ic=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),gh(e.lang),mh(e.gender==="girl"),this.age=Number(e.age)||5,this.easy=this.age<=4,this.save=pc(e.save),this.base=e.base||"./",this.sound=new Gi,this.sound.muted=!!this.save.muted,document.getElementById("sc-style")||document.head.append(H("style",{id:"sc-style"},Nm)),this.root=H("div",{class:"sc-root",dir:nc()==="en"?"ltr":"rtl"}),t.append(this.root),this.cv=H("canvas"),this.view=new Rr(this.el),this.root.append(this.view.dom),this.root.append(this.cv),this.g=this.cv.getContext("2d"),this.layer=H("div",{class:"sc-layer"}),this.root.append(this.layer),this.mode="menu",this.run=null,this.fx=[],this.texts=[],this.pops=new Map,this.scroll=0,this.clouds=Array.from({length:12},()=>({x:Math.random(),y:Math.random(),s:.7+Math.random()*1.3,v:.2+Math.random()*.5})),this.islands=Array.from({length:6},(s,r)=>({x:Math.random(),y:r/6,s:.12+Math.random()*.1,k:r%3})),this.input={tx:_e/2,ty:de-30,fire:!1},this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.t0=performance.now(),this.last=this.t0,Promise.all([this._fonts(),oh(this.base,["clouds","balloon"]).then(s=>Object.assign(yc,s))]).then(()=>{this.showMenu(),this._loop()})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.cv.width=Math.round(this.cw*this.dpr),this.cv.height=Math.round(this.ch*this.dpr),this.u=Math.min(this.cw,this.ch*.62)/100,this.root.style.setProperty("--u",`${this.u}px`),this.sc=Math.min(this.cw/_e,this.ch/de),this.fx0=(this.cw-_e*this.sc)/2,this.fy0=(this.ch-de*this.sc)/2,this.skyKey="",this.view.setSize(this.cw,this.ch)}_sky(){let t=this.run?this.run.stage:1,e=`${t}${this.cv.width}x${this.cv.height}`;return this.skyKey!==e&&(this.sky=Cc(this.cv.width,this.cv.height,t),this.skyKey=e),this.sky}P(t,e,n=0){return this.view.project(t,e,n)}X(t){return this.fx0+t*this.sc}Y(t){return this.fy0+t*this.sc}_bind(){let t=this.root;for(let r of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(r,()=>this.sound.unlock(),{capture:!0,passive:!0});let e=r=>this.view.pick(r.clientX,r.clientY,t.getBoundingClientRect()),n=!1;t.addEventListener("pointerdown",r=>{if(r.target.closest("button")||this.mode!=="play")return;n=!0;let[a,o]=e(r);this.input.tx=a,this.input.ty=o-14,this._hideHint()}),t.addEventListener("pointermove",r=>{if(this.mode!=="play"||!n&&r.pointerType==="touch")return;let[a,o]=e(r);this.input.tx=a,this.input.ty=o-(r.pointerType==="touch"?14:0)});let s=()=>{n=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),this.keys=new Set,this._onKey=r=>{let a=r.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"," ","z","x"].includes(a)&&(r.preventDefault(),r.type==="keydown"?this.keys.add(a):this.keys.delete(a)),r.type==="keydown"&&(a==="x"||a==="b")&&this._storm()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&this._pause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=H("button",{class:"sc-soundpill",onclick:r=>{r.stopPropagation(),this.sound.unlock()}},ft("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700)}_keyMove(t){let e=this.keys;if(!e.size)return;let n=70*t;(e.has("arrowleft")||e.has("a"))&&(this.input.tx-=n),(e.has("arrowright")||e.has("d"))&&(this.input.tx+=n),(e.has("arrowup")||e.has("w"))&&(this.input.ty-=n),(e.has("arrowdown")||e.has("s"))&&(this.input.ty+=n),this.input.tx=Math.max(6,Math.min(_e-6,this.input.tx)),this.input.ty=Math.max(24,Math.min(de-8,this.input.ty)),this.input.fire=this.input.fire||e.has(" ")||e.has("z")}_clear(){this.layer.replaceChildren(),this.hud=null}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_soundBtn(){let t=H("button",{class:"sc-round","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}_exitBtn(){return H("button",{class:"sc-round","aria-label":ft("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},nc()==="en"?"\u2190":"\u2192")}_topRow(){return H("div",{class:"sc-hud",style:"justify-content:space-between"},this._exitBtn(),H("div",{class:"sc-score"},`\u{1FAB6} ${pe(this.save.feathers)}`),this._soundBtn())}showMenu(){this.mode="menu",this.run=null,this.sound.setMode("menu"),this._clear(),this.layer.append(this._topRow(),H("div",{class:"sc-menu"},H("div",{class:"sc-biglogo"},ft("title")),H("div",{class:"sc-bestpill"},`\u{1F3C6} ${ft("best")} ${pe(this.save.best)}`),H("button",{class:"sc-playbtn",onclick:()=>this.startRun()},ft("play")),H("div",{class:"sc-icons"},H("button",{class:"sc-icon",onclick:()=>this.showHangar()},H("i",{},"\u{1F527}"),ft("hangar")),H("button",{class:"sc-icon",onclick:()=>this.showTop()},H("i",{},"\u{1F3C6}"),ft("top10")))))}showTop(){this._clear();let t=this.save.top;this.layer.append(this._topRow(),H("div",{class:"sc-dim",style:"background:none"},H("div",{class:"sc-card"},H("div",{class:"sc-ribbon"},ft("top10")),t.length?H("table",{class:"sc-table"},t.map((e,n)=>H("tr",{},H("td",{},pe(n+1)),H("td",{},e.name),H("td",{},pe(e.score)),H("td",{},`${ft("stageWord")} ${pe(e.stage||1)}`)))):H("div",{class:"sc-small"},ft("empty")),H("div",{class:"sc-row"},H("button",{class:"sc-btn blue",onclick:()=>this.showMenu()},ft("back")),H("button",{class:"sc-btn",onclick:()=>this.showHangar()},ft("hangar")),H("button",{class:"sc-btn green",onclick:()=>this.startRun()},ft("again"))))))}showHangar(t="up"){this._clear();let e=t==="up"?H("div",{class:"sc-list"},vs.map(n=>{let s=Cs(this.save,n.id),r=n.cost[s],[a,o]=Fm[n.id],c=s<3&&this.save.feathers>=r;return H("div",{class:"sc-item"},H("div",{class:"ic"},Bm[n.id]),H("div",{class:"tx"},ft(a),H("small",{},ft(o)),H("div",{class:"sc-pips"},[0,1,2].map(l=>H("i",{class:l<s?"on":""})))),H("button",{class:c?"":"no",onclick:()=>{if(s>=3)return;gc(this.save,n.id).ok?(this.sound.play("capsule"),this._saveNow()):this.sound.play("no"),this.showHangar("up")}},s>=3?ft("max"):`\u{1FAB6} ${pe(r)}`))})):H("div",{class:"sc-paints"},ys.map(n=>{let s=n.cost===0||this.save.owned.includes(n.id);return H("button",{class:`sc-paint${this.save.paint===n.id?" on":""}`,onclick:()=>{mc(this.save,n.id).ok?(this.sound.play("pearl"),this._saveNow()):this.sound.play("no"),this.showHangar("paint")}},H("i",{style:`background:${Zi[n.id][0]}`}),ft(n.id),H("span",{},this.save.paint===n.id?ft("on"):s?"":`\u{1FAB6} ${pe(n.cost)}`))}));this.layer.append(this._topRow(),H("div",{class:"sc-dim",style:"background:none"},H("div",{class:"sc-card"},H("div",{class:"sc-ribbon"},ft("hangar")),H("div",{class:"sc-tabs"},H("button",{class:`sc-tab${t==="up"?" on":""}`,onclick:()=>this.showHangar("up")},ft("upgrades")),H("button",{class:`sc-tab${t==="paint"?" on":""}`,onclick:()=>this.showHangar("paint")},ft("paint"))),e,H("button",{class:"sc-btn blue",onclick:()=>this.showMenu()},ft("back")))))}startRun(){this.run=new xs(this.save,Math.floor(Math.random()*1e9),this.easy),this.mode="play",this.fx=[],this.texts=[],this.pops.clear(),this.input={tx:_e/2,ty:de-30,fire:!1},this.shown=new Set,this._buildHud(),this.sound.setMode("play"),this.tilt=0,this._story(()=>{this.mode="play",this.last=performance.now(),this._stageIntro()})}_story(t){let e=[["stage1","story1"],["pirates","story2"],["meetPip","story3"]],n=0;this.mode="story";let s=H("div",{class:"sc-dim",style:"background:rgba(20,40,90,.55)"}),r=()=>{let[a,o]=e[n],c=n===e.length-1;s.replaceChildren(H("div",{class:"sc-card"},H("div",{class:"sc-ribbon"},ft(a)),H("div",{class:"sc-small"},ft(o)),H("div",{class:"sc-dots"},e.map((l,h)=>H("i",{class:h===n?"on":""}))),H("div",{class:"sc-row"},H("button",{class:"sc-btn blue",onclick:()=>{s.remove(),t()}},ft("skip")),H("button",{class:"sc-btn",onclick:()=>{c?(s.remove(),t()):(n++,r())}},c?ft("go"):ft("next")))))};r(),this.layer.append(s)}_buildHud(){this._clear(),this.hud={hp:H("b"),hpT:H("span"),score:H("div",{class:"sc-score"},"0"),mult:H("div",{class:"sc-mult"}),prog:H("b"),ring:H("i",{class:"sc-ring"}),storm:H("button",{class:"sc-storm"}),toast:H("div",{class:"sc-toast"}),ach:H("div",{class:"sc-ach"}),banner:H("div",{class:"sc-banner"}),thiefBar:H("b"),thiefBox:H("div",{class:"sc-thief"}),fire:null};let t=H("button",{class:"sc-fire","aria-label":ft("fire")},this.hud.ring,ft("fire"));this.hud.fire=t,this.hud.thiefBox.append(H("span",{},ft("thief")),H("i",{},this.hud.thiefBar));let e=s=>{var r;s.preventDefault(),this.input.fire=!0,(r=t.setPointerCapture)==null||r.call(t,s.pointerId)},n=()=>{this.input.fire=!1};t.addEventListener("pointerdown",e),t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n),this.hud.storm.addEventListener("click",s=>{s.stopPropagation(),this._storm()}),this.layer.append(H("div",{class:"sc-hud"},H("div",{class:"sc-hp"},H("i",{},"\u2764\uFE0F"),H("div",{class:"sc-bar"},this.hud.hp,this.hud.hpT)),this.hud.score,H("button",{class:"sc-round","aria-label":ft("pause"),onclick:()=>this._pause()},"\u23F8")),H("div",{class:"sc-prog"},this.hud.prog),this.hud.mult,this.hud.thiefBox,this.hud.toast,this.hud.ach,this.hud.banner,t,this.hud.storm),this._hudUpdate()}_hudUpdate(){let t=this.run;if(!t||!this.hud)return;let e=Math.max(0,t.hp/t.stats.maxHp);this.hud.hp.style.width=`${e*100}%`,this.hud.hp.classList.toggle("low",e<.35),this.hud.hpT.textContent=`${Math.round(e*100)}%`,this.hud.score.textContent=pe(t.score),this.hud.prog.style.width=`${t.progress*100}%`,this.hud.mult.textContent=`X${t.mult}`,this.hud.mult.classList.toggle("show",t.mult>1),this.hud.ring.style.setProperty("--fill",String(t.tank)),this.hud.fire.classList.toggle("empty",t.tank<.05);let n=t.thief;this.hud.thiefBox.classList.toggle("show",!!n),this.hud.toast.classList.toggle("low",!!n),n&&(this.hud.thiefBar.style.width=`${(1-n.k)*100}%`),this.hud.storm.className=`sc-storm${t.storms>0?"":" off"}`,this.hud.storm.replaceChildren(H("span",{},"\u{1F32A}\uFE0F"),H("small",{},`${ft("storm")} ${pe(t.storms)}`))}_toast(t,e=2.8){this.hud&&(this.hud.toast.replaceChildren(H("span",{class:"pip"},"\u{1F426}"),H("span",{},t)),this.hud.toast.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.hud&&this.hud.toast.classList.remove("show"),e*1e3))}_ach(t,e=2.8){this.hud&&(this.hud.ach.replaceChildren(ft("ach"),H("small",{},t)),this.hud.ach.classList.add("show"),clearTimeout(this._at),this._at=setTimeout(()=>this.hud&&this.hud.ach.classList.remove("show"),e*1e3))}_hideHint(){this.hud&&this._dragHint&&(this.hud.toast.classList.remove("show"),this._dragHint=!1)}_banner(t,e="",n=2.2){this.hud&&(this.hud.banner.replaceChildren(t,e?H("small",{},e):""),this.hud.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.hud&&this.hud.banner.classList.remove("show"),n*1e3))}_stageIntro(){let t=this.run;this._banner(ft(`stage${t.stage}`),t.loop?`${ft("loop")} ${pe(t.loop+1)}`:"",2.4),t.stage===1&&t.loop===0&&(this._dragHint=!0,setTimeout(()=>this.mode==="play"&&this._toast(ft("hintDrag"),3),600),setTimeout(()=>this.mode==="play"&&this._toast(ft("hint1"),3),4200)),this.sound.setMode("play")}_pause(){this.mode==="play"&&(this.mode="paused",this.layer.append(H("div",{class:"sc-dim",id:"sc-pause"},H("div",{class:"sc-card"},H("div",{class:"sc-title"},ft("pause")),H("button",{class:"sc-btn green",onclick:()=>{var t;(t=document.getElementById("sc-pause"))==null||t.remove(),this.mode="play",this.last=performance.now()}},"\u25B6 ",ft("resume")),H("button",{class:"sc-btn",onclick:()=>this.startRun()},"\u21BB ",ft("again")),H("button",{class:"sc-btn blue",onclick:()=>this.showMenu()},ft("back"))))))}_storm(){let t=this.run;this.mode!=="play"||!t||(t.storm()?(this.stormFx=1,this.shake=.3):this.sound.play("no"))}_stageCard(t){let e=this.run;this.mode="card",this.sound.play("rank"),this.layer.append(H("div",{class:"sc-dim"},H("div",{class:"sc-card"},H("div",{class:"sc-title"},ft("clear")),H("div",{class:"sc-small"},ft(`stage${e.stage}`)),H("div",{class:"sc-rank"},t),H("div",{class:"sc-small"},`${ft("score")}: ${pe(e.score)}`),H("div",{class:"sc-small"},`\u{1FAB6} ${pe(e.feathers)}  \xB7  \u{1FAE7} ${pe(e.pearls)}`),H("button",{class:"sc-btn green",onclick:()=>{var n;(n=this.layer.querySelector(".sc-dim:last-child"))==null||n.remove(),e.nextStage(),this.mode="play",this.last=performance.now(),this._stageIntro()}},ft("cont")," \u25B6"))))}_gameOver(){let t=this.run;this.mode="over",this.sound.play("dead"),this.save.feathers=Math.min(99999,this.save.feathers+t.feathers),this.save.best=Math.max(this.save.best,t.score),this._saveNow();let e=t.ranks.map(s=>s.rank).join(" ")||"-",n=s=>{s&&(this.save.top=xc(this.save.top,{name:s,score:t.score,stage:t.stage+t.loop*3}),this._saveNow()),this.layer.append(H("div",{class:"sc-dim"},H("div",{class:"sc-card"},H("div",{class:"sc-ribbon"},ft("gameOver")),H("div",{class:"sc-small"},`${ft("stageWord")} ${pe(t.stage+t.loop*3)}`),H("div",{class:"sc-bigscore"},pe(t.score)),H("div",{class:"sc-small"},`${ft("hiScore")} ${pe(this.save.best)}`),H("div",{class:"sc-pill"},`\u{1FAB6} +${pe(t.feathers)}`),H("div",{class:"sc-small"},`${ft("rank")}: ${e}`),H("div",{class:"sc-row"},H("button",{class:"sc-btn blue",onclick:()=>this.showMenu()},ft("back")),H("button",{class:"sc-btn",style:"background:linear-gradient(180deg,#ffd86a,#f0a020)",onclick:()=>this.showHangar()},ft("hangar")),H("button",{class:"sc-btn green",onclick:()=>this.startRun()},ft("again"))))))};if(Ac(this.save.top,t.score)){let s=["A","A","A"],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=s.map((c,l)=>{let h=H("span",{},s[l]),d=p=>{s[l]=r[(r.indexOf(s[l])+p+r.length)%r.length],h.textContent=s[l],this.sound.play("tap")};return H("div",{},H("button",{onclick:()=>d(1)},"\u25B2"),h,H("button",{onclick:()=>d(-1)},"\u25BC"))}),o=H("div",{class:"sc-dim"},H("div",{class:"sc-card"},H("div",{class:"sc-title"},ft("newrec")),H("div",{class:"sc-small"},pe(t.score)),H("div",{class:"sc-init"},a),H("button",{class:"sc-btn green",onclick:()=>{o.remove(),n(s.join(""))}},ft("save"))));this.layer.append(o)}else n(null)}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=(t-this.t0)/1e3;this.mode==="play"&&this.run&&this._tick(e),this._draw(n,e)}_tick(t){let e=this.run;this._keyMove(t);let n=e.px,s=[...e.step(t,this.input),...e.takeEvents()];this.tilt=(e.px-n)*1.2,this.scroll+=t*(e.stage===3?22:18);for(let r of s)this._event(r);if(e.state==="stageclear"&&this.mode==="play"){let r=e.ranks.at(-1).rank;setTimeout(()=>this._stageCard(r),500),this.mode="wait"}else e.state==="dead"&&this.mode==="play"&&(this.mode="wait",setTimeout(()=>this._gameOver(),900));e.bossAlive&&!this.bossMode?(this.bossMode=!0,this.sound.setMode("boss")):!e.bossAlive&&this.bossMode&&(this.bossMode=!1,this.sound.setMode("play")),this._hudUpdate()}_event(t){let e=this.run;switch(t.type){case"shoot":(!this._shootGate||performance.now()-this._shootGate>120)&&(this._shootGate=performance.now(),this.sound.play("shoot"));break;case"hit":this.sound.play("hit"),t.dmg&&this.texts.push({x:t.x,y:t.y-4,text:`-${Math.round(t.dmg*10)/10>=1?Math.round(t.dmg):t.dmg.toFixed(1)}`,c:"#fff",k:0});break;case"pop":this.sound.play("pop",e.combo),this.fx.push({k:0,kind:"pop",x:t.x,y:t.y,s:Yi[t.kind].r*2,e:t.kind}),this.texts.push({x:t.x,y:t.y-6,text:`+${pe(t.pts)}`,c:"#ffd23a",k:0}),this.save.badges.includes("firstpop")||(this.save.badges.push("firstpop"),this._saveNow(),this._ach(ft("firstPop")));break;case"pearl":this.sound.play("pearl",Math.min(8,e.pearls%9));break;case"feather":this.sound.play("feather");break;case"capsule":this.sound.play("capsule"),this._toast(`\u{1F48A} ${ft(t.cap)}`,1.8);break;case"rescue":this.sound.play("rescue"),this._toast(`\u{1F426} ${ft("hintBird")} (${ft(t.bird)})`,2.6);break;case"wingshot":Math.random()<.35&&this.sound.play("chirp");break;case"heal":this.texts.push({x:t.x,y:t.y-8,text:"+6",c:"#7af05a",k:0});break;case"hurt":this.sound.play("hurt"),this.shake=.35,this.texts.push({x:t.x,y:t.y-6,text:`-${t.dmg}`,c:"#ff6a6a",k:0});break;case"storm":this.sound.play("storm");break;case"combo":t.mult>1&&this.sound.play("combo",t.mult);break;case"thief":this._banner(ft("thief"),ft("thiefSub"),2.4),this.sound.play("boss");break;case"loot":this.texts.push({x:t.x,y:t.y-8,text:"\u{1FAB6} +6",c:"#ffd23a",k:0}),this.sound.play("feather");break;case"boss":this.sound.play("boss"),this._banner("\u2693",ft("hintBoss"),2.4);break;case"bossdown":this.sound.play("rank"),this.shake=.6;break;default:}let n=(s,r)=>{this.shown.has(s)||(this.shown.add(s),this._toast(r,3))};for(let s of e.enemies)s.type==="umbrella"&&s.y>4&&n("umb",ft("hintUmb")),s.type==="cage"&&s.y>4&&n("cage",ft("hintCage"));e.pickups.some(s=>s.kind==="capsule"&&s.y>2)&&n("cap",ft("hintCap")),e.tank<.03&&this.input.fire&&n("tank",ft("hintTank"))}_trail(t,e,n,s,r){for(let a=0;a<9;a++){let o=a/9,c=Math.sin(r*14+a*1.7)*s*.6*o;t.globalAlpha=.5*(1-o),t.fillStyle=a%2?"#ffffff":"#bfe9ff",t.beginPath(),t.arc(e+c,n+s*(9+a*3.2),s*(1.8-o*.9),0,Math.PI*2),t.fill()}t.globalAlpha=1}_draw(t,e){let n=this.g;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.cv.width,this.cv.height),n.setTransform(this.dpr,0,0,this.dpr,0,0);let s=this.run;if(this.view.render(s,t,e,this.tilt||0,s?s.stats.paint:this.save.paint),!s)return;let r=this.sc;n.save();for(let o of s.enemies)if(o.type==="boss"){let c=Math.min(this.cw*.5,r*60),l=this.cw/2-c/2,h=this.ch*.15;n.fillStyle="rgba(29,42,74,0.6)",n.fillRect(l,h,c,r*2.2),n.fillStyle="#ff5a4a",n.fillRect(l,h,c*Math.max(0,o.hp/o.hp0),r*2.2),n.strokeStyle="#fff",n.lineWidth=2,n.strokeRect(l,h,c,r*2.2)}for(let o of s.enemies)if(o.type==="cage"&&o.y>4&&!this.run.pickups.some(c=>c.kind==="cage")){let[c,l]=this.P(o.x,o.y);this._tag(n,ft("hintFree"),c,l+r*14)}for(let o of s.pickups)if(o.kind==="cage"){let[c,l]=this.P(o.x,o.y);this._tag(n,ft("hintCage"),c,l-r*9,!0,t)}if(s.inv>.3&&s.state==="play"){let[o,c]=this.P(s.px,s.py);n.strokeStyle="rgba(120,210,255,0.8)",n.lineWidth=r*.6,n.beginPath(),n.arc(o,c,r*15+Math.sin(t*12)*r*.6,0,Math.PI*2),n.stroke()}for(let o of this.fx)o.k+=e*2.2,o.kind==="pop"&&!o.b3&&(o.b3=1,this.view.burst(o.x,o.y,o.e));this.fx=this.fx.filter(o=>o.k<1),n.textAlign="center",n.font=`900 ${Math.max(11,r*4)}px Tajawal, system-ui, sans-serif`,n.lineWidth=3,n.strokeStyle="rgba(29,42,74,0.9)";for(let o of this.texts){o.k+=e*1.1,n.globalAlpha=Math.max(0,1-o.k),n.fillStyle=o.c;let[c,l]=this.P(o.x,o.y),h=l-o.k*r*8;n.strokeText(o.text,c,h),n.fillText(o.text,c,h)}n.globalAlpha=1,this.texts=this.texts.filter(o=>o.k<1),n.restore();let a=s.hp/s.stats.maxHp;if(a<.8&&s.state==="play"){let o=Math.min(.6,(.8-a)*1.5)*(a<.35?.8+.2*Math.sin(t*6):1),c=n.createRadialGradient(this.cw/2,this.ch/2,Math.min(this.cw,this.ch)*.3,this.cw/2,this.ch/2,Math.max(this.cw,this.ch)*.72);c.addColorStop(0,"rgba(255,80,120,0)"),c.addColorStop(1,`rgba(255,70,110,${o})`),n.fillStyle=c,n.fillRect(0,0,this.cw,this.ch)}if(this.stormFx>0){this.stormFx=Math.max(0,this.stormFx-e*1.4),n.fillStyle=`rgba(190,235,255,${this.stormFx*.7})`,n.fillRect(0,0,this.cw,this.ch);for(let o=0;o<18;o++){let c=o*.7+t*3;_c(n,this.cw*((o*.137+this.stormFx)%1),this.ch*(1-(this.stormFx*1.5+o*.09)%1),r*(2+o%4),"bubble")}}}_tag(t,e,n,s,r=!1,a=0){let o=Math.max(11,this.sc*3.6);t.save(),t.font=`900 ${o}px Tajawal, system-ui, sans-serif`,t.textAlign="center",t.textBaseline="middle";let c=t.measureText(e).width+o*1.4,l=o*1.9,h=Math.max(c/2+4,Math.min(this.cw-c/2-4,n));if(t.fillStyle="#fdf6e4",t.strokeStyle="#1d2a4a",t.lineWidth=Math.max(2,o*.14),t.beginPath(),t.roundRect(h-c/2,s-l/2,c,l,l/2),t.fill(),t.stroke(),t.fillStyle="#1d2a4a",t.fillText(e,h,s+o*.05),r){let d=s+l/2+o*.6+Math.sin(a*8)*o*.25;t.fillStyle="#e8323a",t.beginPath(),t.moveTo(n,d+o*.7),t.lineTo(n-o*.6,d-o*.2),t.lineTo(n+o*.6,d-o*.2),t.closePath(),t.fill(),t.stroke()}t.restore()}pause(){this.sound.suspend(),this.mode==="play"&&this._pause()}dispose(){cancelAnimationFrame(this._raf),clearInterval(this._pill),clearTimeout(this._tt),clearTimeout(this._bt),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.view.dispose(),this.root.remove()}},sc={start(i,t,e){let n=new ic(i,t||{},e);return sc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SkyCapy=sc;var $0=sc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
