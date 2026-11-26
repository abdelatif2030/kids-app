(()=>{var Te=.03333333333333333;var Qn=16,Xe=8,be=5,Ws=150,ma=60,us=10,uc=1/2.8,_u=5,dc=1e3,Jn=1.25,Iu=3.6,fc=4,ds={easy:{ufoHp:800,ufoDmg:16,aiRegen:.62,aiStart:3,think:3.6,pushAt:8,miss:.35,smart:!1},normal:{ufoHp:1e3,ufoDmg:24,aiRegen:.9,aiStart:5,think:2.2,pushAt:7,miss:.1,smart:!0},hard:{ufoHp:1150,ufoDmg:30,aiRegen:1.12,aiStart:6,think:1.1,pushAt:5,miss:0,smart:!0},expert:{ufoHp:1300,ufoDmg:34,aiRegen:1.25,aiStart:6,think:.9,pushAt:4.5,miss:0,smart:!0},legend:{ufoHp:1450,ufoDmg:38,aiRegen:1.38,aiStart:7,think:.75,pushAt:4,miss:0,smart:!0}},Be={spark:{side:0,hp:110,dmg:20,cd:.7,range:.7,speed:2.5,r:.36,aggro:3.4},blaster:{side:0,hp:78,dmg:19,cd:.85,range:3.3,speed:1.5,r:.4,aggro:4.2,proj:"laser",pspd:11},smash:{side:0,hp:560,dmg:62,cd:1.3,range:.9,speed:1,r:.62,aggro:3},swarm:{side:0,hp:44,dmg:9,cd:.55,range:.65,speed:2.8,r:.27,aggro:3.2},turret:{side:0,hp:330,dmg:17,cd:.7,range:3.8,speed:0,r:.6,aggro:3.8,proj:"laser",pspd:12,building:!0,life:30},slime:{side:1,hp:125,dmg:18,cd:.8,range:.7,speed:2,r:.4,aggro:3.2},bug:{side:1,hp:52,dmg:12,cd:.5,range:.6,speed:3,r:.28,aggro:3.4},brute:{side:1,hp:600,dmg:58,cd:1.3,range:.9,speed:.95,r:.65,aggro:3},spitter:{side:1,hp:82,dmg:20,cd:1,range:3.1,speed:1.4,r:.4,aggro:4,proj:"goo",pspd:6.5}},We={spark:{type:"unit",cost:2,unit:"spark",count:1},blaster:{type:"unit",cost:3,unit:"blaster",count:1},smash:{type:"unit",cost:5,unit:"smash",count:1},swarm:{type:"unit",cost:3,unit:"swarm",count:3},turret:{type:"unit",cost:4,unit:"turret",count:1},plasma:{type:"spell",cost:3,spell:"plasma"},blackhole:{type:"spell",cost:4,spell:"blackhole"},repair:{type:"spell",cost:3,spell:"repair"}},Aa={slime:{type:"unit",cost:2,unit:"slime",count:1},bug:{type:"unit",cost:3,unit:"bug",count:2},brute:{type:"unit",cost:5,unit:"brute",count:1},spitter:{type:"unit",cost:4,unit:"spitter",count:1}},Xs={plasma:{r:2.3,delay:.45,dur:.05,dmg:135,baseDmg:60,push:.9},blackhole:{r:2.7,delay:.3,dur:3.6,dps:40,pull:2.4},repair:{r:2.6,delay:.2,dur:4,hps:56,baseHps:10}},xa=(i,t,e)=>i<t?t:i>e?e:i,mc=i=>3.6+1.4*(1-Math.min(1,Math.abs(i-Xe)/Xe));function Gs(i,t,e=.35){let n=xa(t,e,Qn-e),s=mc(n)-e;return[xa(i,be-s,be+s),n]}function pc(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var va=class{constructor(t,e){let n=e.slice();for(let s=n.length-1;s>0;s--){let r=Math.floor(t()*(s+1));[n[s],n[r]]=[n[r],n[s]]}this.hand=n.slice(0,fc),this.queue=n.slice(fc)}get next(){return this.queue[0]}play(t){let e=this.hand[t];return this.hand[t]=this.queue.shift(),this.queue.push(e),e}},gc={1:[[0,0]],2:[[-.35,0],[.35,0]],3:[[-.5,.2],[.5,.2],[0,-.35]]},yi=class{constructor(t={}){var e;this.seed=(e=t.seed)!=null?e:1,this.rand=pc(this.seed),this.aiRand=pc((this.seed^2654435769)>>>0),this.difficulty=ds[t.difficulty]?t.difficulty:"normal",this.dp=ds[this.difficulty],this.tick=0,this.acc=0,this.state="play",this.over=null,this.doubled=!1,this.energy=_u,this.aiEnergy=this.dp.aiStart,this.base=[{side:0,isBase:!0,hp:dc,max:dc,x:be,y:14.7,r:Jn,cd:1,flash:0,atk:0},{side:1,isBase:!0,hp:this.dp.ufoHp,max:this.dp.ufoHp,x:be,y:1.3,r:Jn,cd:1.5,flash:0,atk:0}],this.units=[],this.projs=[],this.fields=[],this.nextId=1,this.deck=new va(this.rand,Object.keys(We)),this.ai=new ya(this),this.events=[],this.stats={played:0,kills:0,lost:0}}get timeLeft(){return Math.max(0,Ws-this.tick*Te)}get alpha(){return this.acc/Te}get energyRate(){return uc*(this.timeLeft<=ma?2:1)}_ev(t){this.events.push(t)}zoneOk(t,e,n,s=0){let r=s===0?We[t]:Aa[t];return!r||n<0||n>Qn||Math.abs(e-be)>mc(n)?!1:r.type==="spell"?!0:s===0?n>=Xe+.3:n<=Xe-.3}canPlay(t){let e=this.deck.hand[t];return this.state==="play"&&!!e&&this.energy>=We[e].cost}play(t,e,n){if(this.state!=="play")return!1;let s=this.deck.hand[t],r=We[s];return!r||this.energy<r.cost||!this.zoneOk(s,e,n,0)?!1:(this.energy-=r.cost,this.deck.play(t),this.stats.played++,this._cast(0,r,s,e,n),!0)}aiPlay(t,e,n){let s=Aa[t];return!s||this.state!=="play"||this.aiEnergy<s.cost||!this.zoneOk(t,e,n,1)?!1:(this.aiEnergy-=s.cost,this._cast(1,s,t,e,n),!0)}_cast(t,e,n,s,r){if(e.type==="spell"){let l=Xs[e.spell],[c,h]=Gs(s,r,.1);this.fields.push({kind:e.spell,side:t,x:c,y:h,r:l.r,delay:l.delay,dur:l.dur,t:0,done:!1,acc:0}),this._ev({type:"spell",kind:e.spell,side:t,x:c,y:h,r:l.r,delay:l.delay,dur:l.dur});return}let o=gc[e.count]||gc[1],a=t===0?-1:1;for(let[l,c]of o)this._spawn(t,e.unit,s+l,r+c*a);this._ev({type:"deploy",side:t,kind:e.unit,card:n,x:s,y:r})}_spawn(t,e,n,s){let r=Be[e],[o,a]=Gs(n,s,r.r),l={id:this.nextId++,side:t,kind:e,x:o,y:a,px:o,py:a,hp:r.hp,max:r.hp,r:r.r,cd:.35,spawn:.45,age:0,tgt:null,retarget:0,slow:0,flash:0,atk:0,ang:t===0?-Math.PI/2:Math.PI/2,dead:!1,life:r.life||0,moving:!1};return this.units.push(l),l}step(t){if(this.state==="play")for(this.acc+=Math.min(t,.25);this.acc>=Te&&this.state==="play";)this.acc-=Te,this._tick();let e=this.events;return this.events=[],e}_tick(){this.tick++;let t=this.timeLeft,e=uc*(t<=ma?2:1);!this.doubled&&t<=ma&&(this.doubled=!0,this._ev({type:"double"})),this.energy=Math.min(us,this.energy+e*Te),this.aiEnergy=Math.min(us,this.aiEnergy+e*Te*this.dp.aiRegen);for(let n of this.units)n.px=n.x,n.py=n.y;this.ai.update(Te),this._fields(Te),this._units(Te),this._bases(Te),this._projs(Te),this._separate(),this.units=this.units.filter(n=>!n.dead),this._checkEnd()}_nearest(t,e){let n=null,s=1e9;for(let r of this.units){if(r.side===t.side||r.dead||r.spawn>0)continue;let o=Math.hypot(r.x-t.x,r.y-t.y)-r.r-t.r;o<s&&(s=o,n=r)}return n&&s<=e?n:null}_damage(t,e){t.hp<=0||t.dead||(t.hp-=e,t.flash=.12,this._ev({type:"dmg",x:t.x,y:t.y,n:Math.round(e),side:t.side,base:!!t.isBase}),t.hp<=0&&(t.hp=0,t.isBase||this._kill(t,!1)))}_kill(t,e){t.dead=!0,e||(t.side===0?this.stats.lost++:this.stats.kills++),this._ev({type:"die",kind:t.kind,side:t.side,x:t.x,y:t.y,silent:e})}_units(t){for(let e of this.units){if(e.dead)continue;let n=Be[e.kind];if(e.age+=t,e.flash=Math.max(0,e.flash-t),e.atk=Math.max(0,e.atk-t),e.moving=!1,e.spawn>0){e.spawn-=t;continue}if(e.cd-=t,e.slow>0&&(e.slow-=t),n.building){if(e.life-=t,e.life<=0){this._kill(e,!0);continue}let c=this._nearest(e,n.range);c&&this._attack(e,n,c);continue}e.retarget-=t,e.tgt&&(e.tgt.dead||e.tgt.hp<=0)&&(e.tgt=null),(!e.tgt||e.retarget<=0)&&(e.retarget=.25,e.tgt=this._nearest(e,n.aggro));let s=e.tgt;if(s||(s=this.base[1-e.side]),s.hp<=0)continue;let r=s.x-e.x,o=s.y-e.y,a=Math.hypot(r,o)||1e-6;if(a-s.r-e.r<=n.range)e.ang=Math.atan2(o,r),this._attack(e,n,s);else{let c=n.speed*(e.slow>0?.35:1)*t;e.x+=r/a*c,e.y+=o/a*c,e.ang=Math.atan2(o,r),e.moving=!0}}}_attack(t,e,n){t.cd>0||(t.cd=e.cd,t.atk=.22,t.ang=Math.atan2(n.y-t.y,n.x-t.x),e.proj?(this.projs.push({side:t.side,x:t.x,y:t.y,t:n,dmg:e.dmg,spd:e.pspd,kind:e.proj,from:t.kind,age:0}),this._ev({type:"shot",kind:t.kind,side:t.side,proj:e.proj,x:t.x,y:t.y,tx:n.x,ty:n.y})):(this._damage(n,e.dmg),this._ev({type:"hit",kind:t.kind,side:t.side,x:t.x,y:t.y,tx:n.x,ty:n.y})))}_projs(t){for(let e of this.projs){e.age+=t;let n=e.t;if(!n||n.dead||!n.isBase&&n.hp<=0){e.gone=!0;continue}let s=n.x-e.x,r=n.y-e.y,o=Math.hypot(s,r),a=n.isBase?Jn*.8:n.r,l=e.spd*t;o<=a+l?(this._damage(n,e.dmg),this._ev({type:"impact",proj:e.kind,side:e.side,x:n.x,y:n.y}),e.gone=!0):(e.x+=s/o*l,e.y+=r/o*l)}this.projs=this.projs.filter(e=>!e.gone)}_bases(t){for(let e of this.base){if(e.cd-=t,e.flash=Math.max(0,e.flash-t),e.atk=Math.max(0,e.atk-t),e.hp<=0||e.cd>0)continue;let n=null,s=1e9;for(let r of this.units){if(r.side===e.side||r.dead||r.spawn>0)continue;let o=Math.hypot(r.x-e.x,r.y-e.y)-r.r-e.r;o<s&&(s=o,n=r)}n&&s<=Iu&&(e.cd=1.4,e.atk=.3,this._damage(n,e.side===0?26:this.dp.ufoDmg),this._ev({type:"beam",side:e.side,x:e.x,y:e.y,tx:n.x,ty:n.y}))}}_fields(t){for(let e of this.fields){if(e.t+=t,e.t<e.delay)continue;let n=Xs[e.kind];if(e.kind==="plasma"){if(e.done)continue;e.done=!0;for(let r of this.units){if(r.side===e.side||r.dead)continue;let o=Math.hypot(r.x-e.x,r.y-e.y);if(!(o>e.r+r.r)&&(this._damage(r,n.dmg),!r.dead&&!Be[r.kind].building)){let a=(r.x-e.x)/(o||1),l=(r.y-e.y)/(o||1);r.x+=a*n.push,r.y+=l*n.push;let[c,h]=Gs(r.x,r.y,r.r);r.x=c,r.y=h}}let s=this.base[1-e.side];s.hp>0&&Math.hypot(s.x-e.x,s.y-e.y)<e.r+Jn&&this._damage(s,n.baseDmg),this._ev({type:"plasma",x:e.x,y:e.y,r:e.r,side:e.side})}else if(e.kind==="blackhole"){e.acc+=t;for(let s of this.units){if(s.side===e.side||s.dead)continue;let r=e.x-s.x,o=e.y-s.y,a=Math.hypot(r,o);if(!(a>e.r+s.r)&&(s.slow=Math.max(s.slow,.2),!Be[s.kind].building&&a>.05)){let l=Math.min(a,n.pull*t);s.x+=r/a*l,s.y+=o/a*l}}if(e.acc>=.5){e.acc-=.5;for(let s of this.units)s.side===e.side||s.dead||Math.hypot(e.x-s.x,e.y-s.y)<=e.r+s.r&&this._damage(s,n.dps*.5)}}else if(e.kind==="repair"&&(e.acc+=t,e.acc>=.25)){e.acc-=.25;for(let r of this.units)r.side!==e.side||r.dead||r.hp>=r.max||Math.hypot(e.x-r.x,e.y-r.y)<=e.r+r.r&&(r.hp=Math.min(r.max,r.hp+n.hps*.25),this._ev({type:"heal",x:r.x,y:r.y,n:Math.round(n.hps*.25)}));let s=this.base[e.side];s.hp>0&&s.hp<s.max&&Math.hypot(s.x-e.x,s.y-e.y)<e.r+Jn&&(s.hp=Math.min(s.max,s.hp+n.baseHps*.25),this._ev({type:"heal",x:s.x,y:s.y,n:Math.round(n.baseHps*.25),base:!0}))}}this.fields=this.fields.filter(e=>e.t<e.delay+e.dur)}_separate(){let t=this.units;for(let e=0;e<t.length;e++){let n=t[e];if(!n.dead)for(let s=e+1;s<t.length;s++){let r=t[s];if(r.dead)continue;let o=Be[n.kind].building?0:1,a=Be[r.kind].building?0:1;if(o+a===0)continue;let l=r.x-n.x,c=r.y-n.y,h=Math.hypot(l,c),u=n.r+r.r;if(h>=u)continue;h<1e-4&&(l=(n.id+r.id)%2?1:-1,c=0,h=1);let f=Math.min(.12,(u-h)*.5),d=l/h,m=c/h,A=o+a;n.x-=d*f*2*(o/A),n.y-=m*f*2*(o/A),r.x+=d*f*2*(a/A),r.y+=m*f*2*(a/A)}}for(let e of t){if(e.dead)continue;for(let r of this.base){let o=e.x-r.x,a=e.y-r.y,l=Math.hypot(o,a),c=r.r+e.r*.6;l<c&&l>1e-4&&(e.x=r.x+o/l*c,e.y=r.y+a/l*c)}let[n,s]=Gs(e.x,e.y,e.r);e.x=n,e.y=s}}_end(t){this.state=t;let e=this.base[0].hp/this.base[0].max,n=t==="won"?1+(e>=.5?1:0)+(e>=.85?1:0):0;this.over={state:t,stars:n,baseHp:Math.max(0,Math.round(this.base[0].hp)),baseFrac:Math.max(0,e),time:Math.min(Ws,this.tick*Te)},this._ev({type:t==="won"?"win":t==="lost"?"lose":"draw",stars:n})}_checkEnd(){let t=this.base[0].hp,e=this.base[1].hp;if(t<=0&&e<=0)this._end("draw");else if(e<=0)this._end("won");else if(t<=0)this._end("lost");else if(this.tick>=Math.round(Ws/Te)){let n=t/this.base[0].max,s=e/this.base[1].max;n>s+1e-9?this._end("won"):n<s-1e-9?this._end("lost"):this._end("draw")}}},ya=class{constructor(t){this.b=t,this.cool=2.2}update(t){let e=this.b,n=e.dp,s=e.aiRand;if(this.cool-=t,this.cool>0)return;this.cool=n.think*(.75+.5*s());let r=e.aiEnergy,a=e.units.filter(u=>u.side===0&&!u.dead&&!Be[u.kind].building).filter(u=>u.y<Xe+1.5),l,c,h;if(a.length){let u=a.reduce((m,A)=>A.y<m.y?A:m),f=a.some(m=>m.max>=300),d=a.length>=3;n.smart?l=f?["bug","spitter","slime"]:d?["brute","spitter","slime"]:["slime","spitter","bug","brute"]:l=s()<.5?["slime","bug"]:["bug","spitter","slime"],c=u.x+(s()-.5)*1.6,h=xa(u.y-1.6,2.8,Xe-.6)}else{if(r<n.pushAt)return;l=n.smart?["brute","spitter","bug","slime"]:["slime","bug","spitter","brute"],s()<.4&&l.push(l.shift()),c=2.6+s()*4.8,h=4.4+s()*1.6}if(!(!n.smart&&s()<n.miss)){for(let u of l)if(Aa[u].cost<=r){e.aiPlay(u,c,h);return}}}};function Ca(i){let t=i&&typeof i=="object"?i:{},e=t.stars&&typeof t.stars=="object"?t.stars:{},n=(s,r)=>Number.isFinite(+s)?Math.max(0,Math.min(r,Math.floor(+s))):0;return{stars:{easy:n(e.easy,3),normal:n(e.normal,3),hard:n(e.hard,3),expert:n(e.expert,3),legend:n(e.legend,3)},wins:n(t.wins,1e6),plays:n(t.plays,1e6),muted:!!t.muted,tutorial:!!t.tutorial,diff:ds[t.diff]?t.diff:"easy"}}function Ac(i,t,e){let n=Ca(i);return n.plays+=1,n.diff=ds[t]?t:n.diff,e&&e.state==="won"&&(n.wins+=1,n.stars[n.diff]=Math.max(n.stars[n.diff],e.stars)),n}var de=Math.PI*2;function bu(i,t,e,n,s,r,o){let a=i.createRadialGradient(t-n*.35,e-s*.4,Math.min(n,s)*.1,t,e,Math.max(n,s)*1.15);return a.addColorStop(0,r),a.addColorStop(1,o),a}function De(i,t,e,n,s,r,o,a){i.beginPath(),i.ellipse(t,e,Math.max(.1,n),Math.max(.1,s),0,0,de),i.fillStyle=bu(i,t,e,n,s,r,o),i.fill(),a&&(i.lineWidth=Math.max(1,n*.12),i.strokeStyle=a,i.stroke())}function Ci(i,t,e,n,s,r,o,a,l){i.beginPath(),i.roundRect(t,e,n,s,r);let c=i.createLinearGradient(t,e,t,e+s);c.addColorStop(0,o),c.addColorStop(1,a),i.fillStyle=c,i.fill(),l&&(i.lineWidth=Math.max(1,n*.06),i.strokeStyle=l,i.stroke())}function _i(i,t,e,n,s){i.fillStyle="rgba(255,255,255,.5)",i.beginPath(),i.ellipse(t-n*.3,e-s*.5,n*.35,s*.18,-.4,0,de),i.fill()}function ge(i,t,e,n,s,r=1){i.save(),i.globalCompositeOperation="lighter",i.globalAlpha=r;let o=i.createRadialGradient(t,e,0,t,e,n);o.addColorStop(0,s),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.beginPath(),i.arc(t,e,n,0,de),i.fill(),i.restore()}function $n(i,t,e,n,s=0,r=0,o="#fff"){i.fillStyle=o,i.beginPath(),i.arc(t,e,n,0,de),i.fill(),i.fillStyle="#16102e",i.beginPath(),i.arc(t+s*n*.4,e+r*n*.4,n*.55,0,de),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(t+s*n*.4-n*.2,e+r*n*.4-n*.2,n*.18,0,de),i.fill()}function fs(i,t,e,n,s,r,o){i.fillStyle="rgba(0,0,0,.6)",i.fillRect(t-n/2-1,e-1,n+2,s+2),i.fillStyle=o,i.fillRect(t-n/2,e,n*Math.max(0,Math.min(1,r)),s)}var Ye=["#c4f6ff","#2a8cff","#0a3a8a"];var xc={},vc=i=>{xc=i||{}};function Mu(i,t,e,n,s,r={}){var a;let o=s*t.naturalWidth/t.naturalHeight;i.save(),r.alpha!==void 0&&(i.globalAlpha=r.alpha),i.translate(e,n),r.sx&&i.scale(r.sx,(a=r.sy)!=null?a:r.sx),i.drawImage(t,-o/2,-s,o,s),r.flash>0&&(i.globalCompositeOperation="lighter",i.globalAlpha=Math.min(1,r.flash*6)*.55,i.drawImage(t,-o/2,-s,o,s)),i.restore()}function Ys(i,t,e,n,s,r,o){let a=r*s,l=o.t||0,c=xc["unit_"+t];if(c){let d=o.spawn===void 0?1:o.spawn,m=o.moving?Math.abs(Math.sin(l*13))*a*.28:Math.sin(l*3)*a*.05,A=o.atk>0?Math.sin(o.atk/.22*Math.PI):0;Mu(i,c,e,n-m-(1-d)*a*5,a*2.7,{alpha:d<1?.3+.7*d:1,sx:1+A*.12,sy:1-A*.1,flash:o.flash});return}let h=o.spawn===void 0?1:o.spawn;i.save(),h<1&&(i.globalAlpha=.3+.7*h,n-=(1-h)*a*5);let u=o.moving?Math.abs(Math.sin(l*13))*a*.28:Math.sin(l*3)*a*.05,f=o.atk>0?Math.sin(o.atk/.22*Math.PI):0;switch(t){case"spark":{let d=n-a*1.1-u;De(i,e,d,a*1.05,a*1.05*(1-f*.12),Ye[0],Ye[1],Ye[2]),Ci(i,e-a*.8,d-a*.3,a*1.6,a*.6,a*.3,"#12204a","#05102a"),ge(i,e-a*.32,d,a*.45,"#35f0ff"),ge(i,e+a*.32,d,a*.45,"#35f0ff"),i.fillStyle="#d8ffff",i.beginPath(),i.arc(e-a*.32,d,a*.14,0,de),i.arc(e+a*.32,d,a*.14,0,de),i.fill(),i.strokeStyle=Ye[2],i.lineWidth=a*.1,i.beginPath(),i.moveTo(e,d-a),i.lineTo(e,d-a*1.45),i.stroke(),ge(i,e,d-a*1.5,a*.5,"#ffb030"),i.fillStyle="#ffd36a",i.beginPath(),i.arc(e,d-a*1.5,a*.17,0,de),i.fill(),_i(i,e,d,a,a);break}case"blaster":{let d=n-a*1.2-u;Ci(i,e-a*.75,d-a*.3,a*1.5,a*1.35,a*.35,"#8de8ff","#1f78d8",Ye[2]),De(i,e,d-a*.55,a*.7,a*.62,"#d8faff","#3a98ff",Ye[2]),Ci(i,e-a*.5,d-a*.72,a*1,a*.38,a*.18,"#12204a","#05102a"),ge(i,e,d-a*.53,a*.5,"#35f0ff"),i.fillStyle="#d8ffff",i.fillRect(e-a*.28,d-a*.58,a*.56,a*.1);let m=e+a*.95,A=d+a*.2;Ci(i,m-a*.2,A-a*.9+f*a*.15,a*.4,a*1.1,a*.15,"#4a5a8a","#1a2450",Ye[2]),f&&ge(i,m,A-a*1,a*.9,"#ffb030",f),i.fillStyle="#ff9a2a",i.beginPath(),i.arc(m,A-a*.9,a*.14,0,de),i.fill(),_i(i,e,d,a*.8,a);break}case"smash":{let d=n-a*1.15-u*.5,m=f*a*.9;for(let A of[-1,1])De(i,e+A*a*1.15,d+a*.35-m,a*.5,a*.5,"#ffd28a","#d86a1a","#6a2a08");Ci(i,e-a*.95,d-a*.7,a*1.9,a*1.75,a*.45,"#9ad4ff","#2563c8",Ye[2]),De(i,e,d-a*.95,a*.5,a*.45,"#d8faff","#4a9cff",Ye[2]),i.fillStyle="#12204a",i.fillRect(e-a*.35,d-a*1.06,a*.7,a*.22),ge(i,e,d-a*.95,a*.45,"#ff5a3a"),i.fillStyle="#ff7a4a",i.fillRect(e-a*.28,d-a*1.02,a*.56,a*.09),ge(i,e,d+a*.2,a*.65,"#ffb030",.9),i.fillStyle="#ffe08a",i.beginPath(),i.arc(e,d+a*.2,a*.22,0,de),i.fill(),_i(i,e,d,a*1.2,a*1.2);break}case"swarm":{let d=n-a*2.1-u*.6+Math.sin(l*6+e)*a*.2;De(i,e,d,a*.95,a*.95,"#d4fff0","#26b8ff",Ye[2]),ge(i,e,d,a*.55,"#35f0ff"),i.fillStyle="#12204a",i.beginPath(),i.arc(e,d,a*.34,0,de),i.fill(),i.fillStyle="#35f0ff",i.beginPath(),i.arc(e,d,a*.17,0,de),i.fill(),i.fillStyle="rgba(200,250,255,.5)";let m=Math.sin(l*40)*.3;i.beginPath(),i.ellipse(e-a*1.1,d-a*.4,a*(.8+m),a*.16,-.2,0,de),i.ellipse(e+a*1.1,d-a*.4,a*(.8-m),a*.16,.2,0,de),i.fill();break}case"turret":{De(i,e,n-a*.2,a*1.1,a*.5,"#8aa0d8","#243064",Ye[2]),Ci(i,e-a*.8,n-a*1.3,a*1.6,a*1,a*.3,"#7ad4ff","#1f68c8",Ye[2]),De(i,e,n-a*1.35,a*.7,a*.6,"#d8faff","#3a98ff",Ye[2]);let d=o.ang===void 0?-Math.PI/2:o.ang,m=Math.cos(d)*a*1.2,A=Math.sin(d)*a*.7;i.strokeStyle="#243064",i.lineWidth=a*.38,i.lineCap="round",i.beginPath(),i.moveTo(e,n-a*1.35),i.lineTo(e+m,n-a*1.35+A),i.stroke(),i.strokeStyle="#35f0ff",i.lineWidth=a*.12,i.beginPath(),i.moveTo(e,n-a*1.35),i.lineTo(e+m,n-a*1.35+A),i.stroke(),f&&ge(i,e+m,n-a*1.35+A,a*.8,"#35f0ff",f);break}case"slime":{let d=1+Math.sin(l*(o.moving?11:4))*.1+f*.12,m=a*.95*d,A=a*1.15/Math.sqrt(d);De(i,e,n-m-u*.4,A,m,"#e2ff8a","#25c85a","#0c6a2a"),$n(i,e-A*.38,n-m*1.2,a*.3,0,.3),$n(i,e+A*.38,n-m*1.2,a*.3,0,.3),i.strokeStyle="#0c4a22",i.lineWidth=a*.1,i.beginPath(),i.arc(e,n-m*.95,a*.28,.15,Math.PI-.15),i.stroke(),_i(i,e,n-m,A,m);break}case"bug":{let d=n-a*.9-u*.5;i.strokeStyle="#3a0a3a",i.lineWidth=Math.max(1,a*.12);for(let A=-1;A<=1;A++)for(let g of[-1,1]){let p=Math.sin(l*22+A*2+g)*a*.2;i.beginPath(),i.moveTo(e+g*a*.6,d+A*a*.35),i.lineTo(e+g*a*1.3,d+A*a*.5+p),i.stroke()}i.fillStyle="rgba(255,200,255,.45)";let m=Math.sin(l*45)*a*.25;i.beginPath(),i.ellipse(e-a*.8,d-a*.9,a*.7,a*(.3+Math.abs(m)*.6),-.5,0,de),i.ellipse(e+a*.8,d-a*.9,a*.7,a*(.3+Math.abs(m)*.6),.5,0,de),i.fill(),De(i,e,d,a*1,a*.9,"#ffa0f0","#c0209a","#5a0a50"),i.strokeStyle="#5a0a50",i.lineWidth=a*.1,i.beginPath(),i.moveTo(e,d-a*.85),i.lineTo(e,d+a*.85),i.stroke(),$n(i,e-a*.35,d-a*.2,a*.28,0,.3,"#ffffa0"),$n(i,e+a*.35,d-a*.2,a*.28,0,.3,"#ffffa0"),i.strokeStyle="#5a0a50",i.beginPath(),i.moveTo(e-a*.3,d-a*.8),i.lineTo(e-a*.6,d-a*1.3),i.moveTo(e+a*.3,d-a*.8),i.lineTo(e+a*.6,d-a*1.3),i.stroke();break}case"brute":{let d=n-a*1.05-u*.4,m=f*a*.9;for(let A of[-1,1])De(i,e+A*a*1.15,d+a*.3-m,a*.52,a*.52,"#e0a0ff","#7a24c8","#3a0a6a");De(i,e,d,a*1.05,a*1,"#d8a0ff","#6a20c0","#2e0a60"),i.fillStyle="#f2e0ff",i.beginPath(),i.moveTo(e-a*.75,d-a*.7),i.lineTo(e-a*.45,d-a*1.4),i.lineTo(e-a*.25,d-a*.8),i.moveTo(e+a*.75,d-a*.7),i.lineTo(e+a*.45,d-a*1.4),i.lineTo(e+a*.25,d-a*.8),i.fill(),$n(i,e-a*.38,d-a*.25,a*.25,0,.3,"#ffee88"),$n(i,e+a*.38,d-a*.25,a*.25,0,.3,"#ffee88"),i.strokeStyle="#2e0a60",i.lineWidth=a*.14,i.beginPath(),i.moveTo(e-a*.7,d-a*.62),i.lineTo(e-a*.1,d-a*.4),i.moveTo(e+a*.7,d-a*.62),i.lineTo(e+a*.1,d-a*.4),i.stroke(),i.fillStyle="#1a0838",i.beginPath(),i.ellipse(e,d+a*.38,a*.5,a*.22+f*a*.15,0,0,de),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(e-a*.35,d+a*.26),i.lineTo(e-a*.2,d+a*.5),i.lineTo(e-a*.1,d+a*.26),i.moveTo(e+a*.35,d+a*.26),i.lineTo(e+a*.2,d+a*.5),i.lineTo(e+a*.1,d+a*.26),i.fill(),_i(i,e,d,a,a);break}case"spitter":{let d=1+Math.sin(l*5)*.07,m=a*1.15*d;De(i,e,n-m-u*.4,a*.95,m,"#f4ff8a","#2ac8a0","#0a6a58"),$n(i,e,n-m*1.55,a*.34,0,.5),i.fillStyle="#12403a",i.beginPath(),i.ellipse(e,n-m*.85,a*.42,a*(.2+f*.3),0,0,de),i.fill(),f&&ge(i,e,n-m*.85,a*.7,"#b0ff60",f),i.fillStyle="#7aff6a",i.beginPath(),i.arc(e+a*.6,n-m*.2+l*20%1*a*.5,a*.1,0,de),i.fill(),_i(i,e,n-m,a*.95,m);break}default:break}o.flash>0&&(i.globalCompositeOperation="lighter",i.globalAlpha=Math.min(1,o.flash*5)*.6,i.fillStyle="#fff",i.beginPath(),i.ellipse(e,n-a*1.1,a*1.1,a*1.2,0,0,de),i.fill()),i.restore()}function yc(i,t,e){let n=e/2,s=e*.74,r={t:1,side:0,moving:!1,atk:0,flash:0,spawn:1,ang:-Math.PI/2},o={spark:[.36,"spark",.95],blaster:[.4,"blaster",.9],smash:[.62,"smash",.72],turret:[.6,"turret",.78]};if(i.clearRect(0,0,e,e),o[t]){let[a,l,c]=o[t],h=e*.3*c/a;Ys(i,l,n,s,h,a,r);return}if(t==="swarm"){let a=e*.3/.27;for(let[l,c]of[[-.24,.12],[.24,.12],[0,-.12]])Ys(i,"swarm",n+l*e,s+c*e+e*.12,a,.27,r);return}if(t==="plasma"){ge(i,n,e*.5,e*.5,"#35f0ff",.7),i.strokeStyle="#8af8ff",i.lineWidth=e*.06;for(let a of[.34,.2])i.beginPath(),i.ellipse(n,e*.55,e*a,e*a*.55,0,0,de),i.stroke();i.fillStyle="#fff",i.beginPath(),i.moveTo(n+e*.08,e*.12),i.lineTo(n-e*.16,e*.52),i.lineTo(n-e*.01,e*.52),i.lineTo(n-e*.1,e*.88),i.lineTo(n+e*.2,e*.42),i.lineTo(n+e*.05,e*.42),i.closePath(),i.fill();return}if(t==="blackhole"){ge(i,n,e*.52,e*.5,"#a24aff",.8),De(i,n,e*.52,e*.34,e*.34,"#05010f","#12042a","#c07aff"),i.strokeStyle="#d8a8ff",i.lineWidth=e*.04;for(let a=0;a<3;a++){i.beginPath();for(let l=0;l<24;l++){let c=l/24,h=a*2.09+c*4.4,u=e*(.06+.34*c),f=n+Math.cos(h)*u,d=e*.52+Math.sin(h)*u;l?i.lineTo(f,d):i.moveTo(f,d)}i.stroke()}return}t==="repair"&&(ge(i,n,e*.5,e*.5,"#4aff8a",.6),i.strokeStyle="#8affb0",i.lineWidth=e*.05,i.beginPath(),i.ellipse(n,e*.62,e*.38,e*.2,0,0,de),i.stroke(),i.fillStyle="#eafff0",i.beginPath(),i.roundRect(n-e*.07,e*.2,e*.14,e*.46,e*.04),i.roundRect(n-e*.23,e*.36,e*.46,e*.14,e*.04),i.fill(),i.strokeStyle="#1aa850",i.lineWidth=e*.02,i.stroke())}function _a(i,t){let e=(i||"./").replace(/\/?$/,"/");return Promise.all(t.map(n=>new Promise(s=>{let r=new Image,o=!1,a=l=>{o||(o=!0,s([n,l]))};r.onload=()=>a(r.naturalWidth>0?r:null),r.onerror=()=>a(null),setTimeout(()=>a(null),6e3),r.src=`${e}art/${n}.webp`}))).then(n=>Object.fromEntries(n))}function Cc(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(o){if(!(o._smp||!o.ctx)){o._smp={};for(let[a,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=o.ctx.decodeAudioData(h.buffer,f=>{o._smp[a]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...o){let a=s.apply(this,o);return r(this),a}),i.prototype.play=function(o,a){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[o];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[o]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,o,a)}}function _c(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(o){if(o._song||!o.ctx)return;o._song="loading";let a;try{a=new URL(e,document.baseURI).href}catch{return}let l=o.ctx;fetch(a).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(o.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(o.master||l.destination),h.start(),o._song=h,o.music&&o.music.gain&&(o.music.gain.value=0),s&&s.call(o,null)}).catch(()=>{o._song=null})}i.prototype.unlock=function(...o){let a=n?n.apply(this,o):void 0;return r(this),a},s&&(i.prototype.setTune=function(o){if(!this._song)return s.call(this,o)})}var Ic={deploy:"data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE4wAKQJ8YNIMAArCzJAcw8ACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEvIPHjKMk/GEAAAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",hit:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABIAABAIABoaGhoaKCgoKCgoNTU1NTVDQ0NDQ0NQUFBQUF5eXl5eXmtra2treXl5eXl5hoaGhoaUlJSUlJShoaGhoaGvr6+vr7y8vLy8vMrKysrK19fX19fX5eXl5eXy8vLy8vL//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA8AAAAAAAAAQCCNKrhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJrM9nNBGAAaQh8KcYYAAEABgADwY4ARshjGMeY0RNEQvRC3dz+IiIiCwMDd9EQ3d3f93+IhVERPd3RC//REQviAYGLezUCBz/wfD8EwffggCDvwQBAEAQd4YLg+1f39z9MIApWBAVyIBwqj+g7RaYnWOwHtztGl2QMc4NscmDFobViuRR5Fk0Q6bwnqGTleJe0frpz/3zK7/5LK+d/z1xv//83tdDd/bMxpv/9s87W7+20W4DuOnlILY+1ROANN1XKGoZdWoBXEAAVgDl05ixsYP/+zjEBgCLbRd9PJKAAXmi76jDFiBBkSBdERk6NJpAOA44YLCtBxyDUKerMeJRhxGgugwXcehFcQF2IzKlijamUYPR+1Pv1aLEWHXMdJboWnp5Zksu7MWz0Dr6bE3Rl/sufXA9o4EqkqBIiHh0/M7vFUlCodlYk4+uuxYssqEpaX7QSlUlGxuHZGvLPaVcVq3zZeb6SWJLMl1XZLpMlmociOasOMWzvYjTMh352vbz6E6AIOKJrUUWLNk+xxSL2vjR9bYMEABIaxVxFFIK4o3krOrod3r9xYr/+zjECoANTR15J5kPgYijsHRhonUDSSk5G2RJFvJRm/7WHd1fK+OQSwZ9useHdVUzmTEI48olEsq/qL7qPbnNKzsxtoiLmY6WNmle1WkUfZ122qsTQL7U0Ean0kYq9pY9FzmScSlSyh7CRClaSiSbTbgCeLkjiRAvEUDT1dkTa26vErMyBZoDPxCuVHKquMT5kJNahqZ+TxpGE+1P0zMlwXkfJECUjJzzMoydbC6ko2pFn1SrVDq2oKuZsKaq9+3K7XtX8f9//R9oT686CACwAVStJ9APETr/+zjEBYEMPRduphh0QXUY7cTzDijpgyWl9ITRSVR5XuH6Ki+pkvZNH1rGhQOJ3oUAzokknmlMiQd7Aoep1VU/i58zLtvaefcxTqQZj3AI/rGeeebQ/MGUX43tJhlzcpd6UpqLxcLGpIWFp1IpD5iMll+j53ASrgxMM62k5Wo/ni7hImEgCRNApBKHEeRSKfaq2XIEYiOVlsjr/HQ36wnMTy2P3qrL84eW+Wy8qjnmIDhKEGAILjQ6ml8WUaq9yef6aLIol4Cggs1VukAAFQYA8fENCWNUfaX/+zjEBwALsL1vJhh0QWCPrWCTCsBsrGWFWq180IC9S1d1bd4rPuWNKGwQXiRWlQupkrWORmMXYMQ0VUVnWmiHO8rGy8O8CiActRV5UYbQyLp3EPYvyRxAhY0L2N80MOnWGI0uxilAACAXtPnATNSUQJYmdUZJlCZGquYTZUUb0QRZhHWmhMRSEybKZcIbRs9ntEhINmkmw4DIHFQSDQre0DBJ4vW5bir4sw4o29Pk+9sOPHSTbbvRKC6C8KIzEtEAAyyjWjwrPEvLq3Ri2h0ist2Pl7nNxQr/+zjEDYALsTtrhgxXAWwebTCTDPj6evhgXUVudmSkKYM7SSBQF2IDZh3Y3FV/yFUt8/K0stVtvkk2i2XkyvPabnzIL23fdrVS/lbVcsSIsBWx7/4ssuF+bEiAAqFKAS9aDzKweQ0kSIo2FuckKIFphI3siCnpHP02tCSqJV1czBVyBUqpwFxbs2bZmyeZ/3z9T3h1S/0N1vTNPK1hxMAgnMKFFiqGGBK7/tqqfvsCg5T5qnKDEBAAG0ZIDKFWyMTSZjbNkanoGmhI8/C7JWyZZEj9aZC1eGv/+zjEEoAK0RlnxJhLwWUi7TRhnnC3aTcJXMu3i/BU9D3pn5iJZzXdb6XdWVkQqXsVrbHxptf68qcKy3lOv/m2qwg8OGC+j7aOsJJtONoDT1LOquC0llBNUKP7JGHJzpJjoJo3A1BiXriVNpE1Mjq/FQ43N1M9iqpD9nP7VMjgUqbEV2LJkTY+3w2xzo9V87RXA9I1P+glxYGj6CYGIxxid3XWNQA00m6UDNolWETgREYXVlOm0YJAN/GX7e4fnFOrjkpVq0m/t74y+QzI7QiJ8YsuRNokSXD/+zjEHAALGSVj5IU4wVKjKrBhqqDqmQjfF1QmGosiS/lubbGZ5JG99AgJ41Xg9n/6ug8fUHVIW2AF0qAQ8wkccFLwGJJOU6PmaSOSIcXRfIbuzBgVKG6+aqZ0tahWBBzVPv8ySmbASKpf/lvJUT9amq2debtv5mjo5zVDJLU/73d6jocREoWJnKV1bl92scbKhABi/KLLaj5ENSZclsY6iXtgNsZqrpSlL0zBtPRWplKY327hkElaf9ULCuUUiSt/ZHVr+jmVmdWmeSV/3TW+qgOBBCr3+zj/+zjEJoAK8R1TpIj3AVAjajxiqqh33C7isKgeVQ9hslVmN5hU2jcIIV3FxRxd63Nn4dWThLbGufpbEvPIHhYjlTlSlH7siOYWaZ/0QTFxgGUgsxSf3Wi9+bK1SfMq/TN92nGkAcYygl/29SXAqFB5Z9wqpSJXBmeXW5tQEgs9kbhz9sd0+N+9GrLjhRtPii1e5limlKDqFMaYm/qDYJKkln8gYOBmHHM71+mhdH9WYuivd2Rf/S2byMHyU03n7b37eVpLjjaEHHjaR4Ulg2ikYLAIBDzhzFn/+zjEMgAK5RtL5YlXAUIjaHSCtnDJQ1P6ob8NqqjKuFOz1ZNio6u7MxbTO1UMMe3fpYehJBUh/5m+Vm/Re9N7tt29fVKwihTSSgDt/t8CLKgVRwHmLHEgCinbNvXLFGSwMa0emljNuytN6pcDuLJ3cOODeoi+QRGqV1guHCI0iIbqBpJ//+AjgwwADj8sObOSRf/6qm/Wgq39X6IezZGqlOK//60v+kp01VVLZ06qlnlw4Lbv9tbq7jYA3cCnGRmirlyOVbmozJyWinmgYkSSc30SXIS6L6//+zjEP4ALNYVFpY2vwWss6TRhHxgz/cuyllARmUpW+VlClKJBCdvoZK4p0dDcyFqWnR3//+oMv9aZj0c5033/rV1IqLlQ1RmUAzUEMMSR+1ytoChmecRznqY6+ratI6skUXUKJRApjATL9kO5w5NcKDE9/7/8DcFCqf/m2TG33T56xh2y5qrW/7aqOD1cxyOwJNKKi2rydc7+nBoAlngudxEaGR4ACtzSRggA8ZRpRUfrsu11uru7XMZSno0vsQYMGPcsxSjOouKhsm6R+VlqpvcH0k57man/+zjERoALPSk7po11QTajZikEHqBOWdmlbt5nvNsc3n5h1//9ICXI6LP/4NKo1sVpkAKXZzUPWMs6bPczjz99yunCy8tswusiGsBQHij2sNSG1W244zkr02/y4CZxANk9MyJvRv0bsi2fppMdE21qbfsK4YD8WiImNIXs/94uEazcg3GwKkAB8ZOyl0d4UOHd2e93++VXv/Hh7TFJI/ubC3qRHQdF78NYTkjwhiafDNmE3KHuVTNXWabWc9/9r7vfo1rElMERwGQiaFRyP/6iFCEIDfIgD0L/+zjEVAIKjR0kTI1PwTWjZBmhlfg/mpDGWstJscSVtXXlk8/9KKhnVzJSSnHLO7xkHLD0IlDGaFVMSCWHVtIkXSA9O3VF207PfU7W9tT/wLkUH9tH6qR0XKTGliTKyKY0dpBsPk25Gb1A4pDqg8OYoMBi0AoREstyeP/SOU7e6pl2bU8e+XufGptsZ9up3JJ/rDu8zIjqqXOdI8Bcw60cl6ZOjZW6VMYtUgEAgPOJgGxxGwiCaaojgIlQw8BYj6nQeCcEJQMbwGu2WXnFnz0LNVB1mBzl8Gr/+zjEZIEJORkgygxRgUOi4wG0jEgWO2sKDhelbWHla3JLkmDw1lmt0bdl1wp+YkRR2ysaRoCVrvQ7TMRsenNt3qeJNs6eMV5cqrNuCnnlJCJRJQ54qjLbh9s2uyfRq6JXEbEdCWWarUkmNWEWJbwpGYn7WOFPWVW+mhAOEAjGiIx4SRIR3UnKWmQzFIjI4xDEzG6k7cil6nIAAwvSaUKahwtathYzZOLzk72u7U8IIYUiTRrkMkmUcU3T2kJdilO63dK9MdoTz5ukMC9oz34eddiRjuTF5Mv/+zjEeIMJgJkYTaRhARoUY4mjDGgZX7Dao8Rw52lcR9cWEI+lCotL6Z0DF/EWtCdoYQg62AogQFhI/i0HAbWice5g9XZiJCbLYfkIyGZ9oStA5ZaqpR4YXm+duWTrDhxfj3aMyBgoLrBVCtiljWOS+cmXWN8jlcSkagaysO9aqwguAIMQAhednLdhZSxWNdde58hhyKj5tJZ1hDLDXU1FY2QwR+rx1kltZGwJrjrSkGxgm4ZyUmkNVHAAwwJ3pdkbRZiVgKtTtQYQ+7s37NZVJWBC8XC6Xy//+zjEkIMPxYMULZhxyTKWI4mGDCAVAvAFglk5B4YPPFaxXENmtQ8250PMvEPfi0UhuNCkHQhY4FiSuPR4W9PIQ/OtVpFAKACcADBCWf6f3xuiccbs9l044Lq3wYigP3E2Lax5PvWZJKOD+PTb+11GuFK3PF1myox/ne6///2hvL11E//x8q1/r3+sfO5f9Y1X//////N95t/////8axaeiqoiAQgQAgkgAAAARRDlNKYl/txMSkMrP+EYU0iUPf4lMia2xC47CCUTHhlgG1wBcLNky5DRAXz/+zjEjIAJnL0WNMEAAluxI4MY8AFGouMT+J0DFYb8McLKIsZGYhL+IPEpiPxlR3jQC3wTpMRlSaIsLORb/IIS586QQcwkDNIz1E0jSzL/zxME4ONaZFCYKhuZpGBiXS6tjKpLUv/+XDQzL5uThogQc3L5Vf+gYK+sFG1MQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEfAATVVEtOYgACAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",boom:"data:audio/mpeg;base64,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qqqqqqqqAECkinAWiDHhgYDDAIUTDBQkxZE4MnccSCpkWyILCcBEgKzSrtApIKpaO/GEgoaY7//FDTDP//HkRnxQ1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5IMK9VUYZJhNwm8r40mGDjlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvIPHlCUe4xjCgAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",beam:"data:audio/mpeg;base64,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m9Jr73gEqOT/+zjE/AOQtYcKTbDHyZQcIgGkjXku5BT+gi/DTxv53j/4m3/ulIn6gcI8xCITih67Ouv/////+t/W6a3//g3S93WVOXNOt0zEhGpPrX3nf/+tf/6+9bx/f/X//lVh5KiiPo8UR0Vjmg6AAUIRghECiQCARJKqrtRIkSJEiQXQaBo6DQ8FQWwVdgqCoLHuoGgaBoGQVBUFQVPQVOwaBoGgad+CoKg0b1A0DTwVPZYGQ1/lXcFQ14iBoFQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AIL9OMQLRhtkWoYZF6kYABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AAUyZki2YeAAUcE5auMEABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",baseHit:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE+AASqWsGFYYACkozJOce0ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjExYPKBLUYHJGAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",pick:"data:audio/mpeg;base64,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"};var Su="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",qe=null,Ia=!1;function bc(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Mc(){bc(),Ia=!0;try{if(qe||(qe=document.createElement("audio"),qe.src=Su,qe.loop=!0,qe.preload="auto",qe.setAttribute("playsinline",""),qe.setAttribute("webkit-playsinline",""),qe.setAttribute("x-webkit-airplay","deny"),qe.volume=.01,qe.addEventListener("pause",()=>{Ia&&!document.hidden&&setTimeout(()=>Ia&&qe.paused&&qe.play().catch(()=>{}),300)})),qe.paused){let i=qe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Sc(i,t){bc();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var rn=i=>440*Math.pow(2,(i-69)/12),js=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Mc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Sc(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination);let s=Math.floor(e.sampleRate*1.7),r=e.createBuffer(2,s,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let u=0;u<s;u++)h[u]=(Math.random()*2-1)*Math.pow(1-u/s,2.6)}let o=e.createConvolver();o.buffer=r,this.rev=e.createGain(),this.rev.gain.value=.22,this.rev.connect(o).connect(this.master),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.music.connect(this.rev),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.sfx.connect(this.rev);let a=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=a.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=a,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,o=this.sfx,a=.005){let l=this.ctx;if(!l)return;let c=l.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+a),c.gain.exponentialRampToValueAtTime(1e-4,n+s);let h=c;if(t==="sawtooth"||t==="square"){let f=l.createBiquadFilter();f.type="lowpass",f.frequency.value=Math.min(9e3,e*6+800),f.Q.value=.7,c.connect(f),h=f}h.connect(o);let u=t==="sine"?[0]:[-6,6];for(let f of u){let d=l.createOscillator();d.type=t,d.frequency.value=e,d.detune.value=f,d.connect(c),d.start(n),d.stop(n+s+.05)}}noise(t,e,n,s="lowpass",r=1e3,o=1,a=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=o;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(a),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,o,a=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(o,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(a),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let o=e.createOscillator();o.frequency.value=t==="wind"?.12:.17;let a=e.createGain();a.gain.value=t==="wind"?.03:.045,o.connect(a).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),o.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:o,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,o=this.loopStart+this.nextBeat*n;if(o<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[a,l,c]of e.notes)Math.abs(a-r)<1e-6&&this.tone(e.wave||"triangle",rn(l),o,c*n*1.4,e.vol||.12,this.music,.01);e.groove!==!1&&!e.noGroove&&this._groove(e,r,o,n),this.nextBeat+=.5}}_groove(t,e,n,s){let r=Math.min(.2,(t.vol||.1)*1.3),o=c=>Math.abs(e-c)<1e-6,a=Math.abs(e-Math.round(e))<1e-6,l=e%4;a&&(l===0||l===2&&t.tempo>=100)&&(this.slide("sine",150,42,n,.17,r*1.9,this.music),this.noise(n,.02,r*.5,"lowpass",900,1,this.music)),a&&(l===1||l===3)&&t.tempo>=100&&this.noise(n,.12,r*.9,"bandpass",1800,.8,this.music),a||this.noise(n,.04,r*.45,"highpass",7e3,1,this.music),(o(0)||a&&l===0&&e%8===0)&&this.tone("sine",55,n,s*1.6,r*1.1,this.music,.02)}};var wc={tempo:118,beats:16,wave:"sawtooth",vol:.05,notes:[[0,57,.5],[.5,64,.5],[1,69,.5],[1.5,64,.5],[2,57,.5],[2.5,64,.5],[3,72,.5],[3.5,64,.5],[4,53,.5],[4.5,60,.5],[5,65,.5],[5.5,60,.5],[6,53,.5],[6.5,60,.5],[7,69,.5],[7.5,60,.5],[8,55,.5],[8.5,62,.5],[9,67,.5],[9.5,62,.5],[10,55,.5],[10.5,62,.5],[11,71,.5],[11.5,62,.5],[12,52,.5],[12.5,59,.5],[13,64,.5],[13.5,59,.5],[14,52,.5],[14.5,59,.5],[15,71,.5],[15.5,76,.5],[0,33,2],[4,29,2],[8,31,2],[12,28,2],[2,33,1],[6,29,1],[10,31,1],[14,28,1]]},Ii=class extends js{constructor(){super(),this.last={},this.hum=null}_gate(t,e){let n=this.ctx.currentTime;return this.last[t]&&n-this.last[t]<e?!1:(this.last[t]=n,!0)}play(t){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"tap":this.tone("sine",700,n,.05,.07);break;case"pick":this.tone("triangle",rn(84),n,.06,.07);break;case"nope":this.slide("square",220,150,n,.18,.05);break;case"deploy":this.slide("sawtooth",200,800,n,.16,.05),this.tone("triangle",rn(79),n+.1,.12,.09),this.noise(n,.12,.05,"highpass",2500);break;case"laser":this._gate(t,.07)&&this.slide("square",1500,420,n,.1,.035);break;case"goo":this._gate(t,.1)&&this.slide("sine",300,120,n,.14,.07);break;case"hit":this._gate(t,.06)&&this.noise(n,.05,.05,"bandpass",1400,2);break;case"beam":this._gate(t,.15)&&(this.slide("sawtooth",900,180,n,.28,.05),this.noise(n,.2,.04,"bandpass",2400,3));break;case"boom":this._gate(t,.05)&&(this.noise(n,.3,.12,"lowpass",1800,1,this.sfx,200),this.tone("sine",120,n,.18,.1));break;case"plasma":this.slide("sawtooth",160,1200,n,.35,.07),this.noise(n+.3,.6,.16,"bandpass",2600,1,this.sfx,300),this.tone("sine",70,n+.4,.5,.18);break;case"hole":this.slide("sine",600,70,n,1.2,.12),this.slide("triangle",300,50,n+.1,1.4,.08);break;case"holeEnd":this.slide("sine",90,900,n,.25,.1),this.noise(n,.3,.1,"lowpass",900);break;case"repair":[0,4,7,12,16].forEach((s,r)=>this.tone("sine",rn(72+s),n+r*.07,.3,.09));break;case"double":[0,7,12,19].forEach((s,r)=>this.tone("square",rn(64+s),n+r*.08,.2,.06));break;case"baseHit":this._gate(t,.2)&&(this.tone("square",90,n,.2,.1),this.noise(n,.15,.08,"lowpass",700));break;case"win":[0,4,7,12,16,19,24].forEach((s,r)=>{this.tone("triangle",rn(72+s),n+r*.1,.5,.13),this.tone("square",rn(60+s),n+r*.1,.3,.04)});break;case"lose":[0,-3,-7,-12].forEach((s,r)=>this.tone("sawtooth",rn(62+s),n+r*.22,.5,.08));break;case"star":this.tone("triangle",rn(84),n,.3,.12),this.tone("sine",rn(91),n+.05,.3,.08);break;default:break}}setHum(t){let e=this.ctx;if(this.hum){try{this.hum.o1.stop(),this.hum.o2.stop(),this.hum.l.stop()}catch{}this.hum=null}if(!e||!t)return;let n=e.createGain();n.gain.value=.018;let s=e.createOscillator();s.type="sine",s.frequency.value=92;let r=e.createOscillator();r.type="triangle",r.frequency.value=138.5;let o=e.createOscillator();o.frequency.value=4.5;let a=e.createGain();a.gain.value=.009,o.connect(a).connect(n.gain),s.connect(n),r.connect(n),n.connect(this.sfx),s.start(),r.start(),o.start(),this.hum={o1:s,o2:r,l:o}}setMode(t,e=!1){if(!t){this.setTune(null),this.setHum(!1);return}this.setTune({...wc,tempo:e?140:wc.tempo}),this.setHum(!0)}dispose(){this.setHum(!1),super.dispose()}};Cc(Ii,Ic);_c(Ii);var Rl="170";var wu=0,Ec=1,Eu=2;var Fh=1,Tu=2,Sn=3,Gn=0,ze=1,En=2,mn=0,qi=1,Gi=2,Tc=3,Vc=4,Vu=5,oi=100,Ru=101,Pu=102,Uu=103,Lu=104,Du=200,Nu=201,Fu=202,Ou=203,ro=204,ao=205,Bu=206,qu=207,ku=208,zu=209,Hu=210,Gu=211,Wu=212,Xu=213,Yu=214,oo=0,lo=1,co=2,Wi=3,ho=4,uo=5,fo=6,po=7,Oh=0,ju=1,Zu=2,Hn=0,Pl=1,Ul=2,Ll=3,Dl=4,Ku=5,Nl=6,Fl=7;var Bh=300,Xi=301,Yi=302,go=303,mo=304,ra=306,Ss=1e3,hi=1001,Ao=1002,hn=1003,Ju=1004;var Zs=1005;var gn=1006,ba=1007;var ui=1008;var Pn=1009,qh=1010,kh=1011,ws=1012,Ol=1013,di=1014,Tn=1015,dn=1016,Bl=1017,ql=1018,ji=1020,zh=35902,Hh=1021,Gh=1022,cn=1023,Wh=1024,Xh=1025,ki=1026,Zi=1027,Yh=1028,kl=1029,jh=1030,zl=1031;var Hl=1033,_r=33776,Ir=33777,br=33778,Mr=33779,xo=35840,vo=35841,yo=35842,Co=35843,_o=36196,Io=37492,bo=37496,Mo=37808,So=37809,wo=37810,Eo=37811,To=37812,Vo=37813,Ro=37814,Po=37815,Uo=37816,Lo=37817,Do=37818,No=37819,Fo=37820,Oo=37821,Sr=36492,Bo=36494,qo=36495,Zh=36283,ko=36284,zo=36285,Ho=36286;var wr=2300,Go=2301,Ma=2302,Rc=2400,Pc=2401,Uc=2402;var Qu=3200,$u=3201;var Kh=0,td=1,zn="",Me="srgb",es="srgb-linear",aa="linear",ee="srgb";var bi=7680;var Lc=519,ed=512,nd=513,id=514,Jh=515,sd=516,rd=517,ad=518,od=519,Dc=35044;var Nc="300 es",Vn=2e3,Er=2001,Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sa=Math.PI/180,Wo=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function wa(i,t,e){return(1-e)*i+e*t}function ps(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Q=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],A=s[0],g=s[3],p=s[6],b=s[1],C=s[4],x=s[7],P=s[2],E=s[5],S=s[8];return r[0]=o*A+a*b+l*P,r[3]=o*g+a*C+l*E,r[6]=o*p+a*x+l*S,r[1]=c*A+h*b+u*P,r[4]=c*g+h*C+u*E,r[7]=c*p+h*x+u*S,r[2]=f*A+d*b+m*P,r[5]=f*g+d*C+m*E,r[8]=f*p+d*x+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=f*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-a*e)*A,t[6]=d*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea=new Gt;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){let i=Tr("canvas");return i.style.display="block",i}var Fc={};function ys(i){i in Fc||(Fc[i]=!0,console.warn(i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ud(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],qc=[.3127,.329],kc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[es]:{primaries:Oc,whitePoint:qc,transfer:aa,toXYZ:kc,fromXYZ:zc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Oc,whitePoint:qc,transfer:ee,toXYZ:kc,fromXYZ:zc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var Mi,Xo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=Tr("canvas")),Mi.width=t.width,Mi.height=t.height;let n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fd=0,Vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pd=0,Ke=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=gn,o=ui,a=cn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ns(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Bh;Ke.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],A=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,x=(d+1)/2,P=(p+1)/2,E=(h+f)/4,S=(u+A)/4,V=(m+g)/4;return C>x&&C>P?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=S/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=V/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=S/r,s=V/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-A)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],A=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*A,b=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){let P=Math.sqrt(C),E=Math.atan2(P,p*b);g=Math.sin(g*E)/P,a=Math.sin(a*E)/P}let x=a*b;if(l=l*g+f*x,c=c*g+d*x,h=h*g+m*x,u=u*g+A*x,g===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new R,Hc=new Xn,fi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Js.subVectors(this.max,gs),Si.subVectors(t.a,gs),wi.subVectors(t.b,gs),Ei.subVectors(t.c,gs),Nn.subVectors(wi,Si),Fn.subVectors(Ei,wi),ti.subVectors(Si,Ei);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!Ra(e,Si,wi,Ei,Js)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Si,wi,Ei,Js))?!1:(Qs.crossVectors(Nn,Fn),e=[Qs.x,Qs.y,Qs.z],Ra(e,Si,wi,Ei,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Ks=new fi,Si=new R,wi=new R,Ei=new R,Nn=new R,Fn=new R,ti=new R,gs=new R,Js=new R,Qs=new R,ei=new R;function Ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);let a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gd=new fi,ms=new R,Pa=new R,Ki=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Pa)),this.expandByPoint(ms.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new R,Ua=new R,$s=new R,On=new R,La=new R,tr=new R,Da=new R,Pr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=On.dot(this.direction),l=-On.dot($s),c=On.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector($s,f),d}intersectSphere(t,e){_n.subVectors(t.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){La.subVectors(e,t),tr.subVectors(n,t),Da.crossVectors(La,tr);let o=this.direction.dot(Da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let l=a*this.direction.dot(tr.crossVectors(On,tr));if(l<0)return null;let c=a*this.direction.dot(La.cross(On));if(c<0||l+c>o)return null;let h=-a*On.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,A,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,A=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-A*c,e[9]=-a*l,e[2]=A-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,A=c*u;e[0]=f+A*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=A+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,A=c*u;e[0]=f-A*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=A-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,A=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,A=a*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,A=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,Ad)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Bn.crossVectors(n,je),Bn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Bn.crossVectors(n,je)),Bn.normalize(),er.crossVectors(je,Bn),s[0]=Bn.x,s[4]=er.x,s[8]=je.x,s[1]=Bn.y,s[5]=er.y,s[9]=je.y,s[2]=Bn.z,s[6]=er.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],A=n[6],g=n[10],p=n[14],b=n[3],C=n[7],x=n[11],P=n[15],E=s[0],S=s[4],V=s[8],I=s[12],y=s[1],T=s[5],q=s[9],F=s[13],k=s[2],j=s[6],z=s[10],it=s[14],H=s[3],ht=s[7],At=s[11],It=s[15];return r[0]=o*E+a*y+l*k+c*H,r[4]=o*S+a*T+l*j+c*ht,r[8]=o*V+a*q+l*z+c*At,r[12]=o*I+a*F+l*it+c*It,r[1]=h*E+u*y+f*k+d*H,r[5]=h*S+u*T+f*j+d*ht,r[9]=h*V+u*q+f*z+d*At,r[13]=h*I+u*F+f*it+d*It,r[2]=m*E+A*y+g*k+p*H,r[6]=m*S+A*T+g*j+p*ht,r[10]=m*V+A*q+g*z+p*At,r[14]=m*I+A*F+g*it+p*It,r[3]=b*E+C*y+x*k+P*H,r[7]=b*S+C*T+x*j+P*ht,r[11]=b*V+C*q+x*z+P*At,r[15]=b*I+C*F+x*it+P*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+A*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],A=t[13],g=t[14],p=t[15],b=u*g*c-A*f*c+A*l*d-a*g*d-u*l*p+a*f*p,C=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,x=h*A*c-m*u*c+m*a*d-o*A*d-h*a*p+o*u*p,P=m*u*l-h*A*l-m*a*f+o*A*f+h*a*g-o*u*g,E=e*b+n*C+s*x+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=b*S,t[1]=(A*f*r-u*g*r-A*s*d+n*g*d+u*s*p-n*f*p)*S,t[2]=(a*g*r-A*l*r+A*s*c-n*g*c-a*s*p+n*l*p)*S,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*S,t[4]=C*S,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*S,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*S,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*S,t[8]=x*S,t[9]=(m*u*r-h*A*r-m*n*d+e*A*d+h*n*p-e*u*p)*S,t[10]=(o*A*r-m*a*r+m*n*c-e*A*c-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*S,t[12]=P*S,t[13]=(h*A*s-m*u*s+m*n*f-e*A*f-h*n*g+e*u*g)*S,t[14]=(m*a*s-o*A*s-m*n*l+e*A*l+o*n*g-e*a*g)*S,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,A=o*h,g=o*u,p=a*u,b=l*c,C=l*h,x=l*u,P=n.x,E=n.y,S=n.z;return s[0]=(1-(A+p))*P,s[1]=(d+x)*P,s[2]=(m-C)*P,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+p))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(m+C)*S,s[9]=(g-b)*S,s[10]=(1-(f+A))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===Vn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Er)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,m,A;if(a===Vn)m=(o+r)*u,A=-2*u;else if(a===Er)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new R,on=new ue,md=new R(0,0,0),Ad=new R(1,1,1),Bn=new R,er=new R,je=new R,Gc=new ue,Wc=new Xn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xd=0,Xc=new R,Vi=new Xn,In=new ue,nr=new R,As=new R,vd=new R,yd=new Xn,Yc=new R(1,0,0),jc=new R(0,1,0),Zc=new R(0,0,1),Kc={type:"added"},Cd={type:"removed"},Ri={type:"childadded",child:null},Na={type:"childremoved",child:null},Le=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new An,n=new Xn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(As,nr,this.up):In.lookAt(nr,As,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(In),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new R(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new R,bn=new R,Fa=new R,Mn=new R,Pi=new R,Ui=new R,Jc=new R,Oa=new R,Ba=new R,qa=new R,ka=new re,za=new re,Ha=new re,li=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),bn.subVectors(n,e),Fa.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(bn),l=ln.dot(Fa),c=bn.dot(bn),h=bn.dot(Fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ka.setScalar(0),za.setScalar(0),Ha.setScalar(0),ka.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),bn.subVectors(t,e),ln.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),ln.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Ui.subVectors(r,n),Oa.subVectors(t,n);let l=Pi.dot(Oa),c=Ui.dot(Oa);if(l<=0&&c<=0)return e.copy(n);Ba.subVectors(t,s);let h=Pi.dot(Ba),u=Ui.dot(Ba);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Pi,o);qa.subVectors(t,r);let d=Pi.dot(qa),m=Ui.dot(qa);if(m>=0&&d<=m)return e.copy(r);let A=d*c-l*m;if(A<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ui,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Jc.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Jc,a);let p=1/(g+A+f);return o=A*p,a=f*p,e.copy(n).addScaledVector(Pi,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ld(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ga(o,r,t+1/3),this.g=Ga(o,r,t),this.b=Ga(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Pe(Re.r*255,0,255))*65536+Math.round(Pe(Re.g*255,0,255))*256+Math.round(Pe(Re.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Me){jt.fromWorkingColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(ir);let n=wa(qn.h,ir.h,e),s=wa(qn.s,ir.s,e),r=wa(qn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new qt;qt.NAMES=$h;var _d=0,Yn=class extends Wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ns(),this.name="",this.blending=qi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xn=class extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new R,sr=new Q,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}};var Lr=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Id=0,$e=new ue,Wa=new Le,Li=new R,Ze=new fi,xs=new fi,_e=new R,Ie=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ze.min,xs.min),Ze.expandByPoint(_e),_e.addVectors(Ze.max,xs.max),Ze.expandByPoint(_e)):(Ze.expandByPoint(xs.min),Ze.expandByPoint(xs.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_e.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(t,c),_e.add(Li)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new R,l[V]=new R;let c=new R,h=new R,u=new R,f=new Q,d=new Q,m=new Q,A=new R,g=new R;function p(V,I,y){c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,V),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),a[V].add(A),a[I].add(A),a[y].add(A),l[V].add(g),l[I].add(g),l[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let V=0,I=b.length;V<I;++V){let y=b[V],T=y.start,q=y.count;for(let F=T,k=T+q;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let C=new R,x=new R,P=new R,E=new R;function S(V){P.fromBufferAttribute(s,V),E.copy(P);let I=a[V];C.copy(I),C.sub(P.multiplyScalar(P.dot(I))).normalize(),x.crossVectors(E,I);let T=x.dot(l[V])<0?-1:1;o.setXYZW(V,C.x,C.y,C.z,T)}for(let V=0,I=b.length;V<I;++V){let y=b[V],T=y.start,q=y.count;for(let F=T,k=T+q;F<k;F+=3)S(t.getX(F+0)),S(t.getX(F+1)),S(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let A=0,g=l.length;A<g;A++){a.isInterleavedBufferAttribute?d=l[A]*a.data.stride+a.offset:d=l[A]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qc=new ue,ni=new Pr,rr=new Ki,$c=new R,ar=new R,or=new R,lr=new R,Xa=new R,cr=new R,th=new R,hr=new R,Se=class extends Le{constructor(t=new Ie,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,t),o?cr.addScaledVector(Xa,h):cr.addScaledVector(Xa.sub(e),h))}e.add(cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(rr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(rr,$c)===null||ni.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),C=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,P=C;x<P;x+=3){let E=a.getX(x),S=a.getX(x+1),V=a.getX(x+2);s=ur(this,p,t,n,c,h,u,E,S,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(a.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let b=a.getX(g),C=a.getX(g+1),x=a.getX(g+2);s=ur(this,o,t,n,c,h,u,b,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),C=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,P=C;x<P;x+=3){let E=x,S=x+1,V=x+2;s=ur(this,p,t,n,c,h,u,E,S,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let b=g,C=g+1,x=g+2;s=ur(this,o,t,n,c,h,u,b,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function bd(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;hr.copy(a),hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);let h=bd(i,t,e,n,ar,or,lr,th);if(h){let u=new R;li.getBarycoord(th,ar,or,lr,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};li.getNormal(ar,or,lr,f.normal),h.face=f,h.barycoord=u}return h}var pi=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(A,g,p,b,C,x,P,E,S,V,I){let y=x/S,T=P/V,q=x/2,F=P/2,k=E/2,j=S+1,z=V+1,it=0,H=0,ht=new R;for(let At=0;At<z;At++){let It=At*T-F;for(let kt=0;kt<j;kt++){let Qt=kt*y-q;ht[A]=Qt*b,ht[g]=It*C,ht[p]=k,c.push(ht.x,ht.y,ht.z),ht[A]=0,ht[g]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(kt/S),u.push(1-At/V),it+=1}}for(let At=0;At<V;At++)for(let It=0;It<S;It++){let kt=f+It+j*At,Qt=f+It+j*(At+1),Y=f+(It+1)+j*(At+1),rt=f+(It+1)+j*At;l.push(kt,Qt,rt),l.push(Qt,Y,rt),H+=6}a.addGroup(d,H,I),d+=H,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Md(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var jn={clone:Ji,merge:Ne},Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Nr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new R,eh=new Q,nh=new Q,Ue=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ni=1,Zo=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Di,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Di,Ni,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Di,Ni,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Di,Ni,t,e);a.layers=this.layers,this.add(a);let l=new Ue(Di,Ni,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Di,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fr=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pi(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:mn});r.uniforms.tEquirect.value=e;let o=new Se(s,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=gn),new Zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ya=new R,Ed=new R,Td=new Gt,wn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ya.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Ki,dr=new R,Es=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],A=s[10],g=s[11],p=s[12],b=s[13],C=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,g-d,x-p).normalize(),n[1].setComponents(l+r,f+c,g+d,x+p).normalize(),n[2].setComponents(l+o,f+h,g+m,x+b).normalize(),n[3].setComponents(l-o,f-h,g-m,x-b).normalize(),n[4].setComponents(l-a,f-u,g-A,x-C).normalize(),e===Vn)n[5].setComponents(l+a,f+u,g+A,x+C).normalize();else if(e===Er)n[5].setComponents(a,u,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],A=u[d];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let A=u[d];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Or=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let b=p*f-o;for(let C=0;C<c;C++){let x=C*u-r;m.push(x,-b,0),A.push(0,0,1),g.push(C/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let C=b+c*p,x=b+c*(p+1),P=b+1+c*(p+1),E=b+1+c*p;d.push(C,x,E),d.push(x,P,E)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(A,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Rf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
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
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Kp=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,Qp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,ng=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,sg=`#define TOON
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
}`,rg=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Rd,alphahash_pars_fragment:Pd,alphamap_fragment:Ud,alphamap_pars_fragment:Ld,alphatest_fragment:Dd,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:qd,begin_vertex:kd,beginnormal_vertex:zd,bsdfs:Hd,iridescence_fragment:Gd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Zd,color_fragment:Kd,color_pars_fragment:Jd,color_pars_vertex:Qd,color_vertex:$d,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:bf,envmap_vertex:pf,fog_vertex:gf,fog_pars_vertex:mf,fog_fragment:Af,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:yf,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:_f,lights_pars_begin:If,lights_toon_fragment:Mf,lights_toon_pars_fragment:Sf,lights_phong_fragment:wf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Rf,lights_fragment_maps:Pf,lights_fragment_end:Uf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:qf,map_particle_pars_fragment:kf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:Yf,morphtarget_vertex:jf,normal_fragment_begin:Zf,normal_fragment_maps:Kf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:$f,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:gp,shadowmask_pars_fragment:mp,skinbase_vertex:Ap,skinning_pars_vertex:xp,skinning_vertex:vp,skinnormal_vertex:yp,specularmap_fragment:Cp,specularmap_pars_fragment:_p,tonemapping_fragment:Ip,tonemapping_pars_fragment:bp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:wp,uv_pars_vertex:Ep,uv_vertex:Tp,worldpos_vertex:Vp,background_vert:Rp,background_frag:Pp,backgroundCube_vert:Up,backgroundCube_frag:Lp,cube_vert:Dp,cube_frag:Np,depth_vert:Fp,depth_frag:Op,distanceRGBA_vert:Bp,distanceRGBA_frag:qp,equirect_vert:kp,equirect_frag:zp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:Yp,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Kp,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:$p,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:ag,shadow_vert:og,shadow_frag:lg,sprite_vert:cg,sprite_frag:hg},ut={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},pn={basic:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ne([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ne([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ne([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ne([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ne([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ne([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ne([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ne([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ne([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ne([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ne([ut.lights,ut.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};pn.physical={uniforms:Ne([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var fr={r:0,b:0,g:0},si=new An,ug=new ue;function dg(i,t,e,n,s,r,o){let a=new qt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?e:t).get(C)),C}function A(b){let C=!1,x=m(b);x===null?p(a,l):x&&x.isColor&&(p(x,1),C=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,C){let x=m(C);x&&(x.isCubeTexture||x.mapping===ra)?(h===void 0&&(h=new Se(new pi(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),si.copy(C.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(si)),h.material.toneMapped=jt.getTransfer(x.colorSpace)!==ee,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Se(new Or(2,2),new ve({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=jt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,C){b.getRGB(fr,tu(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,C,o)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),l=C,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:A,addToRenderList:g}}function fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,T,q,F,k){let j=!1,z=u(F,q,T);r!==z&&(r=z,c(r.object)),j=d(y,F,q,k),j&&m(y,F,q,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(y,T,q,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,T,q){let F=q.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let j=k[T.id];j===void 0&&(j={},k[T.id]=j);let z=j[F];return z===void 0&&(z=f(l()),j[F]=z),z}function f(y){let T=[],q=[],F=[];for(let k=0;k<e;k++)T[k]=0,q[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:q,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,T,q,F){let k=r.attributes,j=T.attributes,z=0,it=q.getAttributes();for(let H in it)if(it[H].location>=0){let At=k[H],It=j[H];if(It===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(It=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(It=y.instanceColor)),At===void 0||At.attribute!==It||It&&At.data!==It.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function m(y,T,q,F){let k={},j=T.attributes,z=0,it=q.getAttributes();for(let H in it)if(it[H].location>=0){let At=j[H];At===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(At=y.instanceColor));let It={};It.attribute=At,At&&At.data&&(It.data=At.data),k[H]=It,z++}r.attributes=k,r.attributesNum=z,r.index=F}function A(){let y=r.newAttributes;for(let T=0,q=y.length;T<q;T++)y[T]=0}function g(y){p(y,0)}function p(y,T){let q=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;q[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),k[y]!==T&&(i.vertexAttribDivisor(y,T),k[y]=T)}function b(){let y=r.newAttributes,T=r.enabledAttributes;for(let q=0,F=T.length;q<F;q++)T[q]!==y[q]&&(i.disableVertexAttribArray(q),T[q]=0)}function C(y,T,q,F,k,j,z){z===!0?i.vertexAttribIPointer(y,T,q,k,j):i.vertexAttribPointer(y,T,q,F,k,j)}function x(y,T,q,F){A();let k=F.attributes,j=q.getAttributes(),z=T.defaultAttributeValues;for(let it in j){let H=j[it];if(H.location>=0){let ht=k[it];if(ht===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let At=ht.normalized,It=ht.itemSize,kt=t.get(ht);if(kt===void 0)continue;let Qt=kt.buffer,Y=kt.type,rt=kt.bytesPerElement,bt=Y===i.INT||Y===i.UNSIGNED_INT||ht.gpuType===Ol;if(ht.isInterleavedBufferAttribute){let ot=ht.data,Ut=ot.stride,Ot=ht.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)g(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Nt=0;Nt<H.locationSize;Nt++)C(H.location+Nt,It/H.locationSize,Y,At,Ut*rt,(Ot+It/H.locationSize*Nt)*rt,bt)}else{if(ht.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot,ht.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ot=0;ot<H.locationSize;ot++)g(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ot=0;ot<H.locationSize;ot++)C(H.location+ot,It/H.locationSize,Y,At,It*rt,It/H.locationSize*ot*rt,bt)}}else if(z!==void 0){let At=z[it];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(H.location,At);break;case 3:i.vertexAttrib3fv(H.location,At);break;case 4:i.vertexAttrib4fv(H.location,At);break;default:i.vertexAttrib1fv(H.location,At)}}}}b()}function P(){V();for(let y in n){let T=n[y];for(let q in T){let F=T[q];for(let k in F)h(F[k].object),delete F[k];delete T[q]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let q in T){let F=T[q];for(let k in F)h(F[k].object),delete F[k];delete T[q]}delete n[y.id]}function S(y){for(let T in n){let q=n[T];if(q[y.id]===void 0)continue;let F=q[y.id];for(let k in F)h(F[k].object),delete F[k];delete q[y.id]}}function V(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:A,enableAttribute:g,disableUnusedAttributes:b}}function pg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==cn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let V=S===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Pn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Tn&&!V)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:x,vertexTextures:P,maxSamples:E}}function mg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,C=b*4,x=p.clippingState||null;l.value=x,x=h(m,f,C,d);for(let P=0;P!==C;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let p=d+A*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,x=d;C!==A;++C,x+=4)o.copy(u[C]).applyMatrix4(b,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Ag(i){let t=new WeakMap;function e(o,a){return a===go?o.mapping=Xi:a===mo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===mo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ko(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qi=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,ih=[.125,.215,.35,.446,.526,.582],ci=20,ja=new Qi,sh=new qt,Za=null,Ka=0,Ja=0,Qa=!1,ai=(1+Math.sqrt(5))/2,Fi=1/ai,rh=[new R(-ai,Fi,0),new R(ai,Fi,0),new R(-Fi,0,ai),new R(Fi,0,ai),new R(0,ai,-Fi),new R(0,ai,Fi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ka,Ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:dn,format:cn,colorSpace:es,depthBuffer:!1},s=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,t,e)}return s}_compileMaterial(t){let e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){let a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=Hn,h.autoClear=!1;let d=new xn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new Se(new pi,d),A=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,A=!0):(d.color.copy(sh),A=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let C=this._cubeSize;pr(s,b*C,p>2?C:0,C,C),h.setRenderTarget(s),A&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(s-r-1)%rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Se(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ci;g>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ci}`);let p=[],b=0;for(let S=0;S<ci;++S){let V=S/A,I=Math.exp(-V*V/2);p.push(I),S===0?b+=I:S<g&&(b+=2*I)}for(let S=0;S<p.length;S++)p[S]=p[S]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:C}=this;f.dTheta.value=m,f.mipInt.value=C-n;let x=this._sizeLods[s],P=3*x*(s>C-Oi?s-C+Oi:0),E=4*(this._cubeSize-x);pr(e,P,E,3*x,2*x),l.setRenderTarget(e),l.render(u,ja)}};function xg(i){let t=[],e=[],n=[],s=i,r=i-Oi+1+ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Oi?l=ih[o-i+Oi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,A=3,g=2,p=1,b=new Float32Array(A*m*d),C=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let E=0;E<d;E++){let S=E%3*2/3-1,V=E>2?0:-1,I=[S,V,0,S+2/3,V,0,S+2/3,V+1,0,S,V,0,S+2/3,V+1,0,S,V+1,0];b.set(I,A*m*E),C.set(f,g*m*E);let y=[E,E,E,E,E,E];x.set(y,p*m*E)}let P=new Ie;P.setAttribute("position",new He(b,A)),P.setAttribute("uv",new He(C,g)),P.setAttribute("faceIndex",new He(x,p)),t.push(P),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ah(i,t,e){let n=new Fe(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vg(i,t,e){let n=new Float32Array(ci),s=new R(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function oh(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function lh(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function yg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===go||l===mo,h=l===Xi||l===Yi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Br(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Br(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let A=d[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,A=0;if(d!==null){let b=d.array;A=d.version;for(let C=0,x=b.length;C<x;C+=3){let P=b[C+0],E=b[C+1],S=b[C+2];f.push(P,E,E,S,S,P)}}else if(m!==void 0){let b=m.array;A=m.version;for(let C=0,x=b.length/3-1;C<x;C+=3){let P=C+0,E=C+1,S=C+2;f.push(P,E,E,S,S,P)}}else return;let g=new(Qh(f)?Dr:Lr)(f,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ig(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,A,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*A[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,t,e){let n=new WeakMap,s=new re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let I=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],C=0;d===!0&&(C=1),m===!0&&(C=2),A===!0&&(C=3);let x=a.attributes.position.count*C,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*P*4*u),S=new Rr(E,x,P,u);S.type=Tn,S.needsUpdate=!0;let V=C*4;for(let y=0;y<u;y++){let T=g[y],q=p[y],F=b[y],k=x*P*4*y;for(let j=0;j<T.count;j++){let z=j*V;d===!0&&(s.fromBufferAttribute(T,j),E[k+z+0]=s.x,E[k+z+1]=s.y,E[k+z+2]=s.z,E[k+z+3]=0),m===!0&&(s.fromBufferAttribute(q,j),E[k+z+4]=s.x,E[k+z+5]=s.y,E[k+z+6]=s.z,E[k+z+7]=0),A===!0&&(s.fromBufferAttribute(F,j),E[k+z+8]=s.x,E[k+z+9]=s.y,E[k+z+10]=s.z,E[k+z+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new Q(x,P)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let A=0;A<c.length;A++)d+=c[A];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var qr=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h=ki){if(h!==ki&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=di),n===void 0&&h===Zi&&(n=ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nu=new Ke,ch=new qr(1,1),iu=new Rr,su=new jo,ru=new Fr,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oa(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Ce(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Ce(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),Ce(e,n)}}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=Jh,r=ch):r=nu,e.setTexture2D(t||r,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function Xg(i){switch(i){case 5126:return wg;case 35664:return Eg;case 35665:return Tg;case 35666:return Vg;case 35674:return Rg;case 35675:return Pg;case 35676:return Ug;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return qg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function Yg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function Jg(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $g(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tm(i,t){i.uniform1iv(this.addr,t)}function em(i,t){i.uniform2iv(this.addr,t)}function nm(i,t){i.uniform3iv(this.addr,t)}function im(i,t){i.uniform4iv(this.addr,t)}function sm(i,t){i.uniform1uiv(this.addr,t)}function rm(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function om(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nu,r[o])}function cm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||su,r[o])}function hm(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ru,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=oa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||iu,r[o])}function dm(i){switch(i){case 5126:return Yg;case 35664:return jg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return $g;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}var Jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xg(e.type)}},Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dm(e.type)}},$o=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$a=/(\w+)(\])?(\[|\.)?/g;function gh(i,t){i.seq.push(t),i.map[t.id]=t}function fm(i,t,e){let n=i.name,s=n.length;for($a.lastIndex=0;;){let r=$a.exec(n),o=$a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gh(e,c===void 0?new Jo(a,i,t):new Qo(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $o(a),gh(e,u)),e=u}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function mh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pm=37297,gm=0;function mm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ah=new Gt;function Am(i){jt._getMatrix(Ah,jt.workingColorSpace,i);let t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(t),o)}else return s}function xm(i,t){let e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,t){let e;switch(t){case Pl:e="Linear";break;case Ul:e="Reinhard";break;case Ll:e="Cineon";break;case Dl:e="ACESFilmic";break;case Nl:e="AgX";break;case Fl:e="Neutral";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gr=new R;function ym(){jt.getLuminanceCoefficients(gr);let i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function _m(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Im(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cs(i){return i!==""}function vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(bm,Sm)}var Mm=new Map;function Sm(i,t){let e=Xt[t];if(e===void 0){let n=Mm.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}var wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(wm,Em)}function Em(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function Um(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tm(e),c=Vm(e),h=Rm(e),u=Pm(e),f=Um(e),d=Cm(e),m=_m(r),A=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(g=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=tl(o),o=vh(o,e),o=yh(o,e),a=tl(a),a=vh(a,e),a=yh(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=b+g+o,x=b+p+a,P=mh(s,s.VERTEX_SHADER,C),E=mh(s,s.FRAGMENT_SHADER,x);s.attachShader(A,P),s.attachShader(A,E),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function S(T){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(A).trim(),F=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(E).trim(),j=!0,z=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,P,E);else{let it=xh(s,P,"vertex"),H=xh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+q+`
`+it+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(F===""||k==="")&&(z=!1);z&&(T.diagnostics={runnable:j,programLog:q,vertexShader:{log:F,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(E),V=new Hi(s,A),I=Im(s,A)}let V;this.getUniforms=function(){return V===void 0&&S(this),V};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(A,pm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=E,this}var Dm=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nl(t),e.set(t,n)),n}},nl=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Nm(i,t,e,n,s,r,o){let a=new Ur,l=new el,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,y,T,q,F){let k=q.fog,j=F.geometry,z=I.isMeshStandardMaterial?q.environment:null,it=(I.isMeshStandardMaterial?e:t).get(I.envMap||z),H=it&&it.mapping===ra?it.image.height:null,ht=m[I.type];I.precision!==null&&(d=s.getMaxPrecision(I.precision),d!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",d,"instead."));let At=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,It=At!==void 0?At.length:0,kt=0;j.morphAttributes.position!==void 0&&(kt=1),j.morphAttributes.normal!==void 0&&(kt=2),j.morphAttributes.color!==void 0&&(kt=3);let Qt,Y,rt,bt;if(ht){let ie=pn[ht];Qt=ie.vertexShader,Y=ie.fragmentShader}else Qt=I.vertexShader,Y=I.fragmentShader,l.update(I),rt=l.getVertexShaderID(I),bt=l.getFragmentShaderID(I);let ot=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Kt=!!I.map,K=!!I.matcap,st=!!it,w=!!I.aoMap,Tt=!!I.lightMap,tt=!!I.bumpMap,yt=!!I.normalMap,ct=!!I.displacementMap,Lt=!!I.emissiveMap,xt=!!I.metalnessMap,M=!!I.roughnessMap,v=I.anisotropy>0,N=I.clearcoat>0,W=I.dispersion>0,J=I.iridescence>0,X=I.sheen>0,Mt=I.transmission>0,dt=v&&!!I.anisotropyMap,vt=N&&!!I.clearcoatMap,Yt=N&&!!I.clearcoatNormalMap,nt=N&&!!I.clearcoatRoughnessMap,Ct=J&&!!I.iridescenceMap,Dt=J&&!!I.iridescenceThicknessMap,Ft=X&&!!I.sheenColorMap,_t=X&&!!I.sheenRoughnessMap,Zt=!!I.specularMap,Wt=!!I.specularColorMap,ae=!!I.specularIntensityMap,U=Mt&&!!I.transmissionMap,ft=Mt&&!!I.thicknessMap,G=!!I.gradientMap,Z=!!I.alphaMap,mt=I.alphaTest>0,pt=!!I.alphaHash,zt=!!I.extensions,pe=Hn;I.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Ee={shaderID:ht,shaderType:I.type,shaderName:I.name,vertexShader:Qt,fragmentShader:Y,defines:I.defines,customVertexShaderID:rt,customFragmentShaderID:bt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:d,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:es,alphaToCoverage:!!I.alphaToCoverage,map:Kt,matcap:K,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:H,aoMap:w,lightMap:Tt,bumpMap:tt,normalMap:yt,displacementMap:f&&ct,emissiveMap:Lt,normalMapObjectSpace:yt&&I.normalMapType===td,normalMapTangentSpace:yt&&I.normalMapType===Kh,metalnessMap:xt,roughnessMap:M,anisotropy:v,anisotropyMap:dt,clearcoat:N,clearcoatMap:vt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:nt,dispersion:W,iridescence:J,iridescenceMap:Ct,iridescenceThicknessMap:Dt,sheen:X,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:Zt,specularColorMap:Wt,specularIntensityMap:ae,transmission:Mt,transmissionMap:U,thicknessMap:ft,gradientMap:G,opaque:I.transparent===!1&&I.blending===qi&&I.alphaToCoverage===!1,alphaMap:Z,alphaTest:mt,alphaHash:pt,combine:I.combine,mapUv:Kt&&A(I.map.channel),aoMapUv:w&&A(I.aoMap.channel),lightMapUv:Tt&&A(I.lightMap.channel),bumpMapUv:tt&&A(I.bumpMap.channel),normalMapUv:yt&&A(I.normalMap.channel),displacementMapUv:ct&&A(I.displacementMap.channel),emissiveMapUv:Lt&&A(I.emissiveMap.channel),metalnessMapUv:xt&&A(I.metalnessMap.channel),roughnessMapUv:M&&A(I.roughnessMap.channel),anisotropyMapUv:dt&&A(I.anisotropyMap.channel),clearcoatMapUv:vt&&A(I.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&A(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&A(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&A(I.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&A(I.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&A(I.sheenColorMap.channel),sheenRoughnessMapUv:_t&&A(I.sheenRoughnessMap.channel),specularMapUv:Zt&&A(I.specularMap.channel),specularColorMapUv:Wt&&A(I.specularColorMap.channel),specularIntensityMapUv:ae&&A(I.specularIntensityMap.channel),transmissionMapUv:U&&A(I.transmissionMap.channel),thicknessMapUv:ft&&A(I.thicknessMap.channel),alphaMapUv:Z&&A(I.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(yt||v),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Kt||Z),fog:!!k,useFog:I.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Kt&&I.map.isVideoTexture===!0&&jt.getTransfer(I.map.colorSpace)===ee,decodeVideoTextureEmissive:Lt&&I.emissiveMap.isVideoTexture===!0&&jt.getTransfer(I.emissiveMap.colorSpace)===ee,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===En,flipSided:I.side===ze,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:zt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&I.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(I){let y=[];if(I.shaderID?y.push(I.shaderID):(y.push(I.customVertexShaderID),y.push(I.customFragmentShaderID)),I.defines!==void 0)for(let T in I.defines)y.push(T),y.push(I.defines[T]);return I.isRawShaderMaterial===!1&&(b(y,I),C(y,I),y.push(i.outputColorSpace)),y.push(I.customProgramCacheKey),y.join()}function b(I,y){I.push(y.precision),I.push(y.outputColorSpace),I.push(y.envMapMode),I.push(y.envMapCubeUVHeight),I.push(y.mapUv),I.push(y.alphaMapUv),I.push(y.lightMapUv),I.push(y.aoMapUv),I.push(y.bumpMapUv),I.push(y.normalMapUv),I.push(y.displacementMapUv),I.push(y.emissiveMapUv),I.push(y.metalnessMapUv),I.push(y.roughnessMapUv),I.push(y.anisotropyMapUv),I.push(y.clearcoatMapUv),I.push(y.clearcoatNormalMapUv),I.push(y.clearcoatRoughnessMapUv),I.push(y.iridescenceMapUv),I.push(y.iridescenceThicknessMapUv),I.push(y.sheenColorMapUv),I.push(y.sheenRoughnessMapUv),I.push(y.specularMapUv),I.push(y.specularColorMapUv),I.push(y.specularIntensityMapUv),I.push(y.transmissionMapUv),I.push(y.thicknessMapUv),I.push(y.combine),I.push(y.fogExp2),I.push(y.sizeAttenuation),I.push(y.morphTargetsCount),I.push(y.morphAttributeCount),I.push(y.numDirLights),I.push(y.numPointLights),I.push(y.numSpotLights),I.push(y.numSpotLightMaps),I.push(y.numHemiLights),I.push(y.numRectAreaLights),I.push(y.numDirLightShadows),I.push(y.numPointLightShadows),I.push(y.numSpotLightShadows),I.push(y.numSpotLightShadowsWithMaps),I.push(y.numLightProbes),I.push(y.shadowMapType),I.push(y.toneMapping),I.push(y.numClippingPlanes),I.push(y.numClipIntersection),I.push(y.depthPacking)}function C(I,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),I.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),I.push(a.mask)}function x(I){let y=m[I.type],T;if(y){let q=pn[y];T=jn.clone(q.uniforms)}else T=I.uniforms;return T}function P(I,y){let T;for(let q=0,F=h.length;q<F;q++){let k=h[q];if(k.cacheKey===y){T=k,++T.usedTimes;break}}return T===void 0&&(T=new Lm(i,y,I,r),h.push(T)),T}function E(I){if(--I.usedTimes===0){let y=h.indexOf(I);h[y]=h[h.length-1],h.pop(),I.destroy()}}function S(I){l.remove(I)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:V}}function Fm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function a(u,f,d,m,A,g){let p=o(u,f,d,m,A,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,A,g){let p=o(u,f,d,m,A,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Om),n.length>1&&n.sort(f||Ih),s.length>1&&s.sort(f||Ih)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new bh,i.set(n,[o])):s>=r.length?(o=new bh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gm(i){let t=new qm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ue,o=new ue;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,A=0,g=0,p=0,b=0,C=0,x=0,P=0,E=0,S=0;c.sort(Hm);for(let I=0,y=c.length;I<y;I++){let T=c[I],q=T.color,F=T.intensity,k=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=q.r*F,u+=q.g*F,f+=q.b*F;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],F);S++}else if(T.isDirectionalLight){let z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let it=T.shadow,H=e.get(T);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=T.shadow.matrix,b++}n.directional[d]=z,d++}else if(T.isSpotLight){let z=t.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(q).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[A]=z;let it=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,it.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[A]=it.matrix,T.castShadow){let H=e.get(T);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.spotShadow[A]=H,n.spotShadowMap[A]=j,x++}A++}else if(T.isRectAreaLight){let z=t.get(T);z.color.copy(q).multiplyScalar(F),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=z,g++}else if(T.isPointLight){let z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){let it=T.shadow,H=e.get(T);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=T.shadow.matrix,C++}n.point[m]=z,m++}else if(T.isHemisphereLight){let z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(F),z.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let V=n.hash;(V.directionalLength!==d||V.pointLength!==m||V.spotLength!==A||V.rectAreaLength!==g||V.hemiLength!==p||V.numDirectionalShadows!==b||V.numPointShadows!==C||V.numSpotShadows!==x||V.numSpotMaps!==P||V.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,V.directionalLength=d,V.pointLength=m,V.spotLength=A,V.rectAreaLength=g,V.hemiLength=p,V.numDirectionalShadows=b,V.numPointShadows=C,V.numSpotShadows=x,V.numSpotMaps=P,V.numLightProbes=S,n.version=zm++)}function l(c,h){let u=0,f=0,d=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let C=c[p];if(C.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(C.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(C.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(C.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(C.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:a,setupView:l,state:n}}function Mh(i){let t=new Gm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mh(i),t.set(s,[a])):r>=o.length?(a=new Mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var il=class extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function jm(i,t,e){let n=new Es,s=new Q,r=new Q,o=new re,a=new il({depthPacking:$u}),l=new sl,c={},h=e.maxTextureSize,u={[Gn]:ze,[ze]:Gn,[En]:En},f=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ie;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Se(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(E,S,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let I=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),q=i.state;q.setBlending(mn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let F=p!==Sn&&this.type===Sn,k=p===Sn&&this.type!==Sn;for(let j=0,z=E.length;j<z;j++){let it=E[j],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ht=H.getFrameExtents();if(s.multiply(ht),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,H.mapSize.y=r.y)),H.map===null||F===!0||k===!0){let It=this.type!==Sn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new Fe(s.x,s.y,It),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let At=H.getViewportCount();for(let It=0;It<At;It++){let kt=H.getViewport(It);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),q.viewport(o),H.updateMatrices(it,It),n=H.getFrustum(),x(S,V,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&b(H,V),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(I,y,T)};function b(E,S){let V=t.update(A);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fe(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,V,f,A,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,V,d,A,null)}function C(E,S,V,I){let y=null,T=V.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)y=T;else if(y=V.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let q=y.uuid,F=S.uuid,k=c[q];k===void 0&&(k={},c[q]=k);let j=k[F];j===void 0&&(j=y.clone(),k[F]=j,S.addEventListener("dispose",P)),y=j}if(y.visible=S.visible,y.wireframe=S.wireframe,I===Sn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let q=i.properties.get(y);q.light=V}return y}function x(E,S,V,I,y){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Sn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld);let F=t.update(E),k=E.material;if(Array.isArray(k)){let j=F.groups;for(let z=0,it=j.length;z<it;z++){let H=j[z],ht=k[H.materialIndex];if(ht&&ht.visible){let At=C(E,ht,I,y);E.onBeforeShadow(i,E,S,V,F,At,H),i.renderBufferDirect(V,null,F,At,E,H),E.onAfterShadow(i,E,S,V,F,At,H)}}}else if(k.visible){let j=C(E,k,I,y);E.onBeforeShadow(i,E,S,V,F,j,null),i.renderBufferDirect(V,null,F,j,E,null),E.onAfterShadow(i,E,S,V,F,j,null)}}let q=E.children;for(let F=0,k=q.length;F<k;F++)x(q[F],S,V,I,y)}function P(E){E.target.removeEventListener("dispose",P);for(let V in c){let I=c[V],y=E.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}var Zm={[oo]:lo,[co]:fo,[ho]:po,[Wi]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:Wi};function Km(i,t){function e(){let U=!1,ft=new re,G=null,Z=new re(0,0,0,0);return{setMask:function(mt){G!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),G=mt)},setLocked:function(mt){U=mt},setClear:function(mt,pt,zt,pe,Ee){Ee===!0&&(mt*=pe,pt*=pe,zt*=pe),ft.set(mt,pt,zt,pe),Z.equals(ft)===!1&&(i.clearColor(mt,pt,zt,pe),Z.copy(ft))},reset:function(){U=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,G=null,Z=null,mt=null;return{setReversed:function(pt){if(ft!==pt){let zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let pe=mt;mt=null,this.setClear(pe)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?ot(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(pt){G!==pt&&!U&&(i.depthMask(pt),G=pt)},setFunc:function(pt){if(ft&&(pt=Zm[pt]),Z!==pt){switch(pt){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pt}},setLocked:function(pt){U=pt},setClear:function(pt){mt!==pt&&(ft&&(pt=1-pt),i.clearDepth(pt),mt=pt)},reset:function(){U=!1,G=null,Z=null,mt=null,ft=!1}}}function s(){let U=!1,ft=null,G=null,Z=null,mt=null,pt=null,zt=null,pe=null,Ee=null;return{setTest:function(ie){U||(ie?ot(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!U&&(i.stencilMask(ie),ft=ie)},setFunc:function(ie,nn,vn){(G!==ie||Z!==nn||mt!==vn)&&(i.stencilFunc(ie,nn,vn),G=ie,Z=nn,mt=vn)},setOp:function(ie,nn,vn){(pt!==ie||zt!==nn||pe!==vn)&&(i.stencilOp(ie,nn,vn),pt=ie,zt=nn,pe=vn)},setLocked:function(ie){U=ie},setClear:function(ie){Ee!==ie&&(i.clearStencil(ie),Ee=ie)},reset:function(){U=!1,ft=null,G=null,Z=null,mt=null,pt=null,zt=null,pe=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,b=null,C=null,x=null,P=null,E=null,S=new qt(0,0,0),V=0,I=!1,y=null,T=null,q=null,F=null,k=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,it=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=it>=2);let ht=null,At={},It=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Qt=new re().fromArray(It),Y=new re().fromArray(kt);function rt(U,ft,G,Z){let mt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(U,pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<G;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ft+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return pt}let bt={};bt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Wi),tt(!1),yt(Ec),ot(i.CULL_FACE),w(mn);function ot(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ut(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ot(U,ft){return u[U]!==ft?(i.bindFramebuffer(U,ft),u[U]=ft,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Nt(U,ft){let G=d,Z=!1;if(U){G=f.get(ft),G===void 0&&(G=[],f.set(ft,G));let mt=U.textures;if(G.length!==mt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,zt=mt.length;pt<zt;pt++)G[pt]=i.COLOR_ATTACHMENT0+pt;G.length=mt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Kt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let K={[oi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Pu]:i.FUNC_REVERSE_SUBTRACT};K[Uu]=i.MIN,K[Lu]=i.MAX;let st={[Du]:i.ZERO,[Nu]:i.ONE,[Fu]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function w(U,ft,G,Z,mt,pt,zt,pe,Ee,ie){if(U===mn){A===!0&&(Ut(i.BLEND),A=!1);return}if(A===!1&&(ot(i.BLEND),A=!0),U!==Vu){if(U!==g||ie!==I){if((p!==oi||x!==oi)&&(i.blendEquation(i.FUNC_ADD),p=oi,x=oi),ie)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,C=null,P=null,E=null,S.set(0,0,0),V=0,g=U,I=ie}return}mt=mt||ft,pt=pt||G,zt=zt||Z,(ft!==p||mt!==x)&&(i.blendEquationSeparate(K[ft],K[mt]),p=ft,x=mt),(G!==b||Z!==C||pt!==P||zt!==E)&&(i.blendFuncSeparate(st[G],st[Z],st[pt],st[zt]),b=G,C=Z,P=pt,E=zt),(pe.equals(S)===!1||Ee!==V)&&(i.blendColor(pe.r,pe.g,pe.b,Ee),S.copy(pe),V=Ee),g=U,I=!1}function Tt(U,ft){U.side===En?Ut(i.CULL_FACE):ot(i.CULL_FACE);let G=U.side===ze;ft&&(G=!G),tt(G),U.blending===qi&&U.transparent===!1?w(mn):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function yt(U){U!==wu?(ot(i.CULL_FACE),U!==T&&(U===Ec?i.cullFace(i.BACK):U===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),T=U}function ct(U){U!==q&&(z&&i.lineWidth(U),q=U)}function Lt(U,ft,G){U?(ot(i.POLYGON_OFFSET_FILL),(F!==ft||k!==G)&&(i.polygonOffset(ft,G),F=ft,k=G)):Ut(i.POLYGON_OFFSET_FILL)}function xt(U){U?ot(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function M(U){U===void 0&&(U=i.TEXTURE0+j-1),ht!==U&&(i.activeTexture(U),ht=U)}function v(U,ft,G){G===void 0&&(ht===null?G=i.TEXTURE0+j-1:G=ht);let Z=At[G];Z===void 0&&(Z={type:void 0,texture:void 0},At[G]=Z),(Z.type!==U||Z.texture!==ft)&&(ht!==G&&(i.activeTexture(G),ht=G),i.bindTexture(U,ft||bt[U]),Z.type=U,Z.texture=ft)}function N(){let U=At[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Qt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function _t(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Zt(U,ft){let G=c.get(ft);G===void 0&&(G=new WeakMap,c.set(ft,G));let Z=G.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(ft,U.name),G.set(U,Z))}function Wt(U,ft){let Z=c.get(ft).get(U);l.get(ft)!==Z&&(i.uniformBlockBinding(ft,Z,U.__bindingPointIndex),l.set(ft,Z))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,At={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,b=null,C=null,x=null,P=null,E=null,S=new qt(0,0,0),V=0,I=!1,y=null,T=null,q=null,F=null,k=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ut,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:Kt,setBlending:w,setMaterial:Tt,setFlipSided:tt,setCullFace:yt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:xt,activeTexture:M,bindTexture:v,unbindTexture:N,compressedTexImage2D:W,compressedTexImage3D:J,texImage2D:Ct,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:X,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ft,viewport:_t,reset:ae}}function Sh(i,t,e,n){let s=Jm(n);switch(e){case Hh:return i*t;case Wh:return i*t;case Xh:return i*t*2;case Yh:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Hl:return i*t*4/s.components*s.byteLength;case _r:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case Co:return Math.max(i,16)*Math.max(t,8)/4;case xo:case yo:return Math.max(i,8)*Math.max(t,8)/2;case _o:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case Bo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zh:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jm(i){switch(i){case Pn:case qh:return{byteLength:1,components:1};case ws:case kh:case dn:return{byteLength:2,components:1};case Bl:case ql:return{byteLength:2,components:4};case di:case Ol:case Tn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,v){return d?new OffscreenCanvas(M,v):Tr("canvas")}function A(M,v,N){let W=1,J=xt(M);if((J.width>N||J.height>N)&&(W=N/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let X=Math.floor(W*J.width),Mt=Math.floor(W*J.height);u===void 0&&(u=m(X,Mt));let dt=v?m(X,Mt):u;return dt.width=X,dt.height=Mt,dt.getContext("2d").drawImage(M,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),dt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(M,v,N,W,J=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=v;if(v===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),v===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let Mt=J?aa:jt.getTransfer(W);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=Mt===ee?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(M,v){let N;return M?v===null||v===di||v===ji?N=i.DEPTH24_STENCIL8:v===Tn?N=i.DEPTH32F_STENCIL8:v===ws&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===ji?N=i.DEPTH_COMPONENT24:v===Tn?N=i.DEPTH_COMPONENT32F:v===ws&&(N=i.DEPTH_COMPONENT16),N}function P(M,v){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==hn&&M.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function E(M){let v=M.target;v.removeEventListener("dispose",E),V(v),v.isVideoTexture&&h.delete(v)}function S(M){let v=M.target;v.removeEventListener("dispose",S),y(v)}function V(M){let v=n.get(M);if(v.__webglInit===void 0)return;let N=M.source,W=f.get(N);if(W){let J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(M),Object.keys(W).length===0&&f.delete(N)}n.remove(M)}function I(M){let v=n.get(M);i.deleteTexture(v.__webglTexture);let N=M.source,W=f.get(N);delete W[v.__cacheKey],o.memory.textures--}function y(M){let v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[W][J]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=M.textures;for(let W=0,J=N.length;W<J;W++){let X=n.get(N[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[W])}n.remove(M)}let T=0;function q(){T=0}function F(){let M=T;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),T+=1,M}function k(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function j(M,v){let N=n.get(M);if(M.isVideoTexture&&ct(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,M,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function z(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function it(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function H(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){rt(N,M,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let ht={[Ss]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},At={[hn]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},It={[ed]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[Jh]:i.LEQUAL,[id]:i.EQUAL,[ad]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function kt(M,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===ba||v.magFilter===Zs||v.magFilter===ui||v.minFilter===gn||v.minFilter===ba||v.minFilter===Zs||v.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ht[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ht[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ht[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,At[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,It[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Zs&&v.minFilter!==ui||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",E));let W=v.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let X=k(v);if(X!==M.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;let Mt=J[M.__cacheKey];Mt!==void 0&&(J[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&I(v)),M.__cacheKey=X,M.__webglTexture=J[X].texture}return N}function Y(M,v,N){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let J=Qt(M,v),X=v.source;e.bindTexture(W,M.__webglTexture,i.TEXTURE0+N);let Mt=n.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(i.TEXTURE0+N);let dt=jt.getPrimaries(jt.workingColorSpace),vt=v.colorSpace===zn?null:jt.getPrimaries(v.colorSpace),Yt=v.colorSpace===zn||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=A(v.image,!1,s.maxTextureSize);nt=Lt(v,nt);let Ct=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ft=C(v.internalFormat,Ct,Dt,v.colorSpace,v.isVideoTexture);kt(W,v);let _t,Zt=v.mipmaps,Wt=v.isVideoTexture!==!0,ae=Mt.__version===void 0||J===!0,U=X.dataReady,ft=P(v,nt);if(v.isDepthTexture)Ft=x(v.format===Zi,v.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,Ct,Dt,null));else if(v.isDataTexture)if(Zt.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let G=0,Z=Zt.length;G<Z;G++)_t=Zt[G],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,Ct,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,G,Ft,_t.width,_t.height,0,Ct,Dt,_t.data);v.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,nt.width,nt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,Ct,Dt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,Ct,Dt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,Zt[0].width,Zt[0].height,nt.depth);for(let G=0,Z=Zt.length;G<Z;G++)if(_t=Zt[G],v.format!==cn)if(Ct!==null)if(Wt){if(U)if(v.layerUpdates.size>0){let mt=Sh(_t.width,_t.height,v.format,v.type);for(let pt of v.layerUpdates){let zt=_t.data.subarray(pt*mt/_t.data.BYTES_PER_ELEMENT,(pt+1)*mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,pt,_t.width,_t.height,1,Ct,zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,nt.depth,Ct,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ft,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,nt.depth,Ct,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ft,_t.width,_t.height,nt.depth,0,Ct,Dt,_t.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let G=0,Z=Zt.length;G<Z;G++)_t=Zt[G],v.format!==cn?Ct!==null?Wt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,Ct,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,Ct,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,G,Ft,_t.width,_t.height,0,Ct,Dt,_t.data)}else if(v.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,nt.width,nt.height,nt.depth),U)if(v.layerUpdates.size>0){let G=Sh(nt.width,nt.height,v.format,v.type);for(let Z of v.layerUpdates){let mt=nt.data.subarray(Z*G/nt.data.BYTES_PER_ELEMENT,(Z+1)*G/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,Ct,Dt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Ct,Dt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,Ct,Dt,nt.data);else if(v.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,ft,Ft,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Ct,Dt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,Ct,Dt,nt.data);else if(v.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,ft,Ft,nt.width,nt.height);else{let G=nt.width,Z=nt.height;for(let mt=0;mt<ft;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ft,G,Z,0,Ct,Dt,null),G>>=1,Z>>=1}}else if(Zt.length>0){if(Wt&&ae){let G=xt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ft,G.width,G.height)}for(let G=0,Z=Zt.length;G<Z;G++)_t=Zt[G],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Ct,Dt,_t):e.texImage2D(i.TEXTURE_2D,G,Ft,Ct,Dt,_t);v.generateMipmaps=!1}else if(Wt){if(ae){let G=xt(nt);e.texStorage2D(i.TEXTURE_2D,ft,Ft,G.width,G.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Dt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Ct,Dt,nt);g(v)&&p(W),Mt.__version=X.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function rt(M,v,N){if(v.image.length!==6)return;let W=Qt(M,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let X=n.get(J);if(J.version!==X.__version||W===!0){e.activeTexture(i.TEXTURE0+N);let Mt=jt.getPrimaries(jt.workingColorSpace),dt=v.colorSpace===zn?null:jt.getPrimaries(v.colorSpace),vt=v.colorSpace===zn||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Yt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let Z=0;Z<6;Z++)!Yt&&!nt?Ct[Z]=A(v.image[Z],!0,s.maxCubemapSize):Ct[Z]=nt?v.image[Z].image:v.image[Z],Ct[Z]=Lt(v,Ct[Z]);let Dt=Ct[0],Ft=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),Zt=C(v.internalFormat,Ft,_t,v.colorSpace),Wt=v.isVideoTexture!==!0,ae=X.__version===void 0||W===!0,U=J.dataReady,ft=P(v,Dt);kt(i.TEXTURE_CUBE_MAP,v);let G;if(Yt){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){G=Ct[Z].mipmaps;for(let mt=0;mt<G.length;mt++){let pt=G[mt];v.format!==cn?Ft!==null?Wt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,pt.width,pt.height,Ft,_t,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Zt,pt.width,pt.height,0,Ft,_t,pt.data)}}}else{if(G=v.mipmaps,Wt&&ae){G.length>0&&ft++;let Z=xt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct[Z].width,Ct[Z].height,Ft,_t,Ct[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Ct[Z].width,Ct[Z].height,0,Ft,_t,Ct[Z].data);for(let mt=0;mt<G.length;mt++){let zt=G[mt].image[Z].image;Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,zt.width,zt.height,Ft,_t,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Zt,zt.width,zt.height,0,Ft,_t,zt.data)}}else{Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ft,_t,Ct[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Ft,_t,Ct[Z]);for(let mt=0;mt<G.length;mt++){let pt=G[mt];Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ft,_t,pt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Zt,Ft,_t,pt.image[Z])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function bt(M,v,N,W,J,X){let Mt=r.convert(N.format,N.colorSpace),dt=r.convert(N.type),vt=C(N.internalFormat,Mt,dt,N.colorSpace),Yt=n.get(v),nt=n.get(N);if(nt.__renderTarget=v,!Yt.__hasExternalTextures){let Ct=Math.max(1,v.width>>X),Dt=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,vt,Ct,Dt,v.depth,0,Mt,dt,null):e.texImage2D(J,X,vt,Ct,Dt,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,J,nt.__webglTexture,0,tt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,J,nt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(M,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){let W=v.depthTexture,J=W&&W.isDepthTexture?W.type:null,X=x(v.stencilBuffer,J),Mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=tt(v);yt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,X,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,M)}else{let W=v.textures;for(let J=0;J<W.length;J++){let X=W[J],Mt=r.convert(X.format,X.colorSpace),dt=r.convert(X.type),vt=C(X.internalFormat,Mt,dt,X.colorSpace),Yt=tt(v);N&&yt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,vt,v.width,v.height):yt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);let J=W.__webglTexture,X=tt(v);if(v.depthTexture.format===ki)yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Zi)yt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(M){let v=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let W=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=W}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[W],M,!1);else{let J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,M,!1);else{let W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(M,v,N){let W=n.get(M);v!==void 0&&bt(W.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ot(M)}function Kt(M){let v=M.texture,N=n.get(M),W=n.get(v);M.addEventListener("dispose",S);let J=M.textures,X=M.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[dt]=[];for(let vt=0;vt<v.mipmaps.length;vt++)N.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else N.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[dt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let dt=0,vt=J.length;dt<vt;dt++){let Yt=n.get(J[dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&yt(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let dt=0;dt<J.length;dt++){let vt=J[dt];N.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[dt]);let Yt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),Ct=C(vt.internalFormat,Yt,nt,vt.colorSpace,M.isXRRenderTarget===!0),Dt=tt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Ct,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,N.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),kt(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)bt(N.__webglFramebuffer[dt][vt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else bt(N.__webglFramebuffer[dt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let dt=0,vt=J.length;dt<vt;dt++){let Yt=J[dt],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),kt(i.TEXTURE_2D,Yt),bt(N.__webglFramebuffer,M,Yt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(dt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,W.__webglTexture),kt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)bt(N.__webglFramebuffer[vt],M,v,i.COLOR_ATTACHMENT0,dt,vt);else bt(N.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,dt,0);g(v)&&p(dt),e.unbindTexture()}M.depthBuffer&&Ot(M)}function K(M){let v=M.textures;for(let N=0,W=v.length;N<W;N++){let J=v[N];if(g(J)){let X=b(M),Mt=n.get(J).__webglTexture;e.bindTexture(X,Mt),p(X),e.unbindTexture()}}}let st=[],w=[];function Tt(M){if(M.samples>0){if(yt(M)===!1){let v=M.textures,N=M.width,W=M.height,J=i.COLOR_BUFFER_BIT,X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(M),dt=v.length>1;if(dt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let Yt=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,N,W,0,0,N,W,J,i.NEAREST),l===!0&&(st.length=0,w.length=0,st.push(i.COLOR_ATTACHMENT0+vt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(st.push(X),w.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let Yt=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function tt(M){return Math.min(s.maxSamples,M.samples)}function yt(M){let v=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(M){let v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function Lt(M,v){let N=M.colorSpace,W=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==es&&N!==zn&&(jt.getTransfer(N)===ee?(W!==cn||J!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function xt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=yt}function $m(i,t){function e(n,s=zn){let r,o=jt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===kh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===cn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===_r||n===Ir||n===br||n===Mr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===yo||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===Io||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===Io)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===wo||n===Eo||n===To||n===Vo||n===Ro||n===Po||n===Uo||n===Lo||n===Do||n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===Bo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sr)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===ko||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rl=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(c,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`,al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,A=new al,g=e.getContextAttributes(),p=null,b=null,C=[],x=[],P=new Q,E=null,S=new Ue;S.viewport=new re;let V=new Ue;V.viewport=new re;let I=[S,V],y=new rl,T=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=C[Y];return rt===void 0&&(rt=new _s,C[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=C[Y];return rt===void 0&&(rt=new _s,C[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=C[Y];return rt===void 0&&(rt=new _s,C[Y]=rt),rt.getHandSpace()};function F(Y){let rt=x.indexOf(Y.inputSource);if(rt===-1)return;let bt=C[rt];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,c||o),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<C.length;Y++){let rt=x[Y];rt!==null&&(x[Y]=null,C[Y].disconnect(rt))}T=null,q=null,A.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Fe(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,bt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Zi:ki,bt=g.stencil?ji:di);let Ut={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Fe(f.textureWidth,f.textureHeight,{format:cn,type:Pn,depthTexture:new qr(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function j(Y){for(let rt=0;rt<Y.removed.length;rt++){let bt=Y.removed[rt],ot=x.indexOf(bt);ot>=0&&(x[ot]=null,C[ot].disconnect(bt))}for(let rt=0;rt<Y.added.length;rt++){let bt=Y.added[rt],ot=x.indexOf(bt);if(ot===-1){for(let Ot=0;Ot<C.length;Ot++)if(Ot>=x.length){x.push(bt),ot=Ot;break}else if(x[Ot]===null){x[Ot]=bt,ot=Ot;break}if(ot===-1)break}let Ut=C[ot];Ut&&Ut.connect(bt)}}let z=new R,it=new R;function H(Y,rt,bt){z.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(bt.matrixWorld);let ot=z.distanceTo(it),Ut=rt.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,Nt=Ut[14]/(Ut[10]-1),Kt=Ut[14]/(Ut[10]+1),K=(Ut[9]+1)/Ut[5],st=(Ut[9]-1)/Ut[5],w=(Ut[8]-1)/Ut[0],Tt=(Ot[8]+1)/Ot[0],tt=Nt*w,yt=Nt*Tt,ct=ot/(-w+Tt),Lt=ct*-w;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let xt=Nt+ct,M=Kt+ct,v=tt-Lt,N=yt+(ot-Lt),W=K*Kt/M*xt,J=st*Kt/M*xt;Y.projectionMatrix.makePerspective(v,N,W,J,xt,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let rt=Y.near,bt=Y.far;A.texture!==null&&(A.depthNear>0&&(rt=A.depthNear),A.depthFar>0&&(bt=A.depthFar)),y.near=V.near=S.near=rt,y.far=V.far=S.far=bt,(T!==y.near||q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,q=y.far),S.layers.mask=Y.layers.mask|2,V.layers.mask=Y.layers.mask|4,y.layers.mask=S.layers.mask|V.layers.mask;let ot=Y.parent,Ut=y.cameras;ht(y,ot);for(let Ot=0;Ot<Ut.length;Ot++)ht(Ut[Ot],ot);Ut.length===2?H(y,S,V):y.projectionMatrix.copy(S.projectionMatrix),At(Y,y,ot)};function At(Y,rt,bt){bt===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let It=null;function kt(Y,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ot=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Ot=0;Ot<bt.length;Ot++){let Nt=bt[Ot],Kt=null;if(d!==null)Kt=d.getViewport(Nt);else{let st=u.getViewSubImage(f,Nt);Kt=st.viewport,Ot===0&&(t.setRenderTargetTextures(b,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(b))}let K=I[Ot];K===void 0&&(K=new Ue,K.layers.enable(Ot),K.viewport=new re,I[Ot]=K),K.matrix.fromArray(Nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ot===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(K)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Ot=u.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&A.init(t,Ot,s.renderState)}}for(let bt=0;bt<C.length;bt++){let ot=x[bt],Ut=C[bt];ot!==null&&Ut!==void 0&&Ut.update(ot,rt,c||o)}It&&It(Y,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Qt=new eu;Qt.setAnimationLoop(kt),this.setAnimationLoop=function(Y){It=Y},this.dispose=function(){}}},ri=new An,i0=new ue;function s0(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,tu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,C,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,C):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),C=b.envMap,x=b.envMapRotation;C&&(g.envMap.value=C,ri.copy(x),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(ri)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=C*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,C){let x=C.program;n.uniformBlockBinding(b,x)}function c(b,C){let x=s[b.id];x===void 0&&(m(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",g));let P=C.program;n.updateUBOMapping(b,P);let E=t.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){let C=u();b.__bindingPointIndex=C;let x=i.createBuffer(),P=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let C=s[b.id],x=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let E=0,S=x.length;E<S;E++){let V=Array.isArray(x[E])?x[E]:[x[E]];for(let I=0,y=V.length;I<y;I++){let T=V[I];if(d(T,E,I,P)===!0){let q=T.__offset,F=Array.isArray(T.value)?T.value:[T.value],k=0;for(let j=0;j<F.length;j++){let z=F[j],it=A(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,q+k,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,k),k+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,C,x,P){let E=b.value,S=C+"_"+x;if(P[S]===void 0)return typeof E=="number"||typeof E=="boolean"?P[S]=E:P[S]=E.clone(),!0;{let V=P[S];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return P[S]=E,!0}else if(V.equals(E)===!1)return V.copy(E),!0}return!1}function m(b){let C=b.uniforms,x=0,P=16;for(let S=0,V=C.length;S<V;S++){let I=Array.isArray(C[S])?C[S]:[C[S]];for(let y=0,T=I.length;y<T;y++){let q=I[y],F=Array.isArray(q.value)?q.value:[q.value];for(let k=0,j=F.length;k<j;k++){let z=F[k],it=A(z),H=x%P,ht=H%it.boundary,At=H+ht;x+=ht,At!==0&&P-At<it.storage&&(x+=P-At),q.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=it.storage}}}let E=x%P;return E>0&&(x+=P-E),b.__size=x,b.__cache={},this}function A(b){let C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),C}function g(b){let C=b.target;C.removeEventListener("dispose",g);let x=o.indexOf(C.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kr=class{constructor(t={}){let{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,b=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Hn,this.toneMappingExposure=1;let x=this,P=!1,E=0,S=0,V=null,I=-1,y=null,T=new re,q=new re,F=null,k=new qt(0),j=0,z=e.width,it=e.height,H=1,ht=null,At=null,It=new re(0,0,z,it),kt=new re(0,0,z,it),Qt=!1,Y=new Es,rt=!1,bt=!1,ot=new ue,Ut=new ue,Ot=new R,Nt=new re,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function st(){return V===null?H:1}let w=n;function Tt(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),w===null){let L="webgl2";if(w=Tt(L,_),w===null)throw Tt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let tt,yt,ct,Lt,xt,M,v,N,W,J,X,Mt,dt,vt,Yt,nt,Ct,Dt,Ft,_t,Zt,Wt,ae,U;function ft(){tt=new Cg(w),tt.init(),Wt=new $m(w,tt),yt=new gg(w,tt,t,Wt),ct=new Km(w,tt),yt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Lt=new bg(w),xt=new Fm,M=new Qm(w,tt,ct,xt,yt,Wt,Lt),v=new Ag(x),N=new yg(x),W=new Vd(w),ae=new fg(w,W),J=new _g(w,W,Lt,ae),X=new Sg(w,J,W,Lt),Ft=new Mg(w,yt,M),nt=new mg(xt),Mt=new Nm(x,v,N,tt,yt,ae,nt),dt=new s0(x,xt),vt=new Bm,Yt=new Wm(tt),Dt=new dg(x,v,N,ct,X,d,l),Ct=new jm(x,X,yt),U=new r0(w,Lt,yt,ct),_t=new pg(w,tt,Lt),Zt=new Ig(w,tt,Lt),Lt.programs=Mt.programs,x.capabilities=yt,x.extensions=tt,x.properties=xt,x.renderLists=vt,x.shadowMap=Ct,x.state=ct,x.info=Lt}ft();let G=new ol(x,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let _=tt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=tt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(z,it,!1))},this.getSize=function(_){return _.set(z,it)},this.setSize=function(_,L,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=_,it=L,e.width=Math.floor(_*H),e.height=Math.floor(L*H),O===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(z*H,it*H).floor()},this.setDrawingBufferSize=function(_,L,O){z=_,it=L,H=O,e.width=Math.floor(_*O),e.height=Math.floor(L*O),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(T)},this.getViewport=function(_){return _.copy(It)},this.setViewport=function(_,L,O,B){_.isVector4?It.set(_.x,_.y,_.z,_.w):It.set(_,L,O,B),ct.viewport(T.copy(It).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(kt)},this.setScissor=function(_,L,O,B){_.isVector4?kt.set(_.x,_.y,_.z,_.w):kt.set(_,L,O,B),ct.scissor(q.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(_){ct.setScissorTest(Qt=_)},this.setOpaqueSort=function(_){ht=_},this.setTransparentSort=function(_){At=_},this.getClearColor=function(_){return _.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(_=!0,L=!0,O=!0){let B=0;if(_){let D=!1;if(V!==null){let at=V.texture.format;D=at===Hl||at===zl||at===kl}if(D){let at=V.texture.type,gt=at===Pn||at===di||at===ws||at===ji||at===Bl||at===ql,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),Bt=St.r,Ht=St.g,Et=St.b;gt?(m[0]=Bt,m[1]=Ht,m[2]=Et,m[3]=wt,w.clearBufferuiv(w.COLOR,0,m)):(A[0]=Bt,A[1]=Ht,A[2]=Et,A[3]=wt,w.clearBufferiv(w.COLOR,0,A))}else B|=w.COLOR_BUFFER_BIT}L&&(B|=w.DEPTH_BUFFER_BIT),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Yt.dispose(),xt.dispose(),v.dispose(),N.dispose(),X.dispose(),ae.dispose(),U.dispose(),Mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",ic),G.removeEventListener("sessionend",sc),Kn.stop()};function Z(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=Lt.autoReset,L=Ct.enabled,O=Ct.autoUpdate,B=Ct.needsUpdate,D=Ct.type;ft(),Lt.autoReset=_,Ct.enabled=L,Ct.autoUpdate=O,Ct.needsUpdate=B,Ct.type=D}function pt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function zt(_){let L=_.target;L.removeEventListener("dispose",zt),pe(L)}function pe(_){Ee(_),xt.remove(_)}function Ee(_){let L=xt.get(_).programs;L!==void 0&&(L.forEach(function(O){Mt.releaseProgram(O)}),_.isShaderMaterial&&Mt.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,O,B,D,at){L===null&&(L=Kt);let gt=D.isMesh&&D.matrixWorld.determinant()<0,St=vu(_,L,O,B,D);ct.setMaterial(B,gt);let wt=O.index,Bt=1;if(B.wireframe===!0){if(wt=J.getWireframeAttribute(O),wt===void 0)return;Bt=2}let Ht=O.drawRange,Et=O.attributes.position,Jt=Ht.start*Bt,oe=(Ht.start+Ht.count)*Bt;at!==null&&(Jt=Math.max(Jt,at.start*Bt),oe=Math.min(oe,(at.start+at.count)*Bt)),wt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,wt.count)):Et!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Et.count));let le=oe-Jt;if(le<0||le===1/0)return;ae.setup(D,B,St,O,wt);let Oe,$t=_t;if(wt!==null&&(Oe=W.get(wt),$t=Zt,$t.setIndex(Oe)),D.isMesh)B.wireframe===!0?(ct.setLineWidth(B.wireframeLinewidth*st()),$t.setMode(w.LINES)):$t.setMode(w.TRIANGLES);else if(D.isLine){let Rt=B.linewidth;Rt===void 0&&(Rt=1),ct.setLineWidth(Rt*st()),D.isLineSegments?$t.setMode(w.LINES):D.isLineLoop?$t.setMode(w.LINE_LOOP):$t.setMode(w.LINE_STRIP)}else D.isPoints?$t.setMode(w.POINTS):D.isSprite&&$t.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Rt=D._multiDrawStarts,yn=D._multiDrawCounts,te=D._multiDrawCount,sn=wt?W.get(wt).bytesPerElement:1,vi=xt.get(B).currentProgram.getUniforms();for(let Ge=0;Ge<te;Ge++)vi.setValue(w,"_gl_DrawID",Ge),$t.render(Rt[Ge]/sn,yn[Ge])}else if(D.isInstancedMesh)$t.renderInstances(Jt,le,D.count);else if(O.isInstancedBufferGeometry){let Rt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yn=Math.min(O.instanceCount,Rt);$t.renderInstances(Jt,le,yn)}else $t.render(Jt,le)};function ie(_,L,O){_.transparent===!0&&_.side===En&&_.forceSinglePass===!1?(_.side=ze,_.needsUpdate=!0,Hs(_,L,O),_.side=Gn,_.needsUpdate=!0,Hs(_,L,O),_.side=En):Hs(_,L,O)}this.compile=function(_,L,O=null){O===null&&(O=_),p=Yt.get(O),p.init(L),C.push(p),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),_!==O&&_.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();let B=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let at=D.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){let St=at[gt];ie(St,O,D),B.add(St)}else ie(at,O,D),B.add(at)}),C.pop(),p=null,B},this.compileAsync=function(_,L,O=null){let B=this.compile(_,L,O);return new Promise(D=>{function at(){if(B.forEach(function(gt){xt.get(gt).currentProgram.isReady()&&B.delete(gt)}),B.size===0){D(_);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let nn=null;function vn(_){nn&&nn(_)}function ic(){Kn.stop()}function sc(){Kn.start()}let Kn=new eu;Kn.setAnimationLoop(vn),typeof self!="undefined"&&Kn.setContext(self),this.setAnimationLoop=function(_){nn=_,G.setAnimationLoop(_),_===null?Kn.stop():Kn.start()},G.addEventListener("sessionstart",ic),G.addEventListener("sessionend",sc),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,L,V),p=Yt.get(_,C.length),p.init(L),C.push(p),Ut.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Ut),bt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,bt),g=vt.get(_,b.length),g.init(),b.push(g),G.enabled===!0&&G.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&ga(at,L,-1/0,x.sortObjects)}ga(_,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ht,At),K=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,K&&Dt.addToRenderList(g,_),this.info.render.frame++,rt===!0&&nt.beginShadows();let O=p.state.shadowsArray;Ct.render(O,_,L),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,D=g.transmissive;if(p.setupLights(),L.isArrayCamera){let at=L.cameras;if(D.length>0)for(let gt=0,St=at.length;gt<St;gt++){let wt=at[gt];ac(B,D,_,wt)}K&&Dt.render(_);for(let gt=0,St=at.length;gt<St;gt++){let wt=at[gt];rc(g,_,wt,wt.viewport)}}else D.length>0&&ac(B,D,_,L),K&&Dt.render(_),rc(g,_,L);V!==null&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),_.isScene===!0&&_.onAfterRender(x,_,L),ae.resetDefaultState(),I=-1,y=null,C.pop(),C.length>0?(p=C[C.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ga(_,L,O,B){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){B&&Nt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ut);let gt=X.update(_),St=_.material;St.visible&&g.push(_,gt,St,O,Nt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let gt=X.update(_),St=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Nt.copy(_.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(_.matrixWorld).applyMatrix4(Ut)),Array.isArray(St)){let wt=gt.groups;for(let Bt=0,Ht=wt.length;Bt<Ht;Bt++){let Et=wt[Bt],Jt=St[Et.materialIndex];Jt&&Jt.visible&&g.push(_,gt,Jt,O,Nt.z,Et)}}else St.visible&&g.push(_,gt,St,O,Nt.z,null)}}let at=_.children;for(let gt=0,St=at.length;gt<St;gt++)ga(at[gt],L,O,B)}function rc(_,L,O,B){let D=_.opaque,at=_.transmissive,gt=_.transparent;p.setupLightsView(O),rt===!0&&nt.setGlobalState(x.clippingPlanes,O),B&&ct.viewport(T.copy(B)),D.length>0&&zs(D,L,O),at.length>0&&zs(at,L,O),gt.length>0&&zs(gt,L,O),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function ac(_,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Fe(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?dn:Pn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let at=p.state.transmissionRenderTarget[B.id],gt=B.viewport||T;at.setSize(gt.z,gt.w);let St=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(k),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),K&&Dt.render(O);let wt=x.toneMapping;x.toneMapping=Hn;let Bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),rt===!0&&nt.setGlobalState(x.clippingPlanes,B),zs(_,O,B),M.updateMultisampleRenderTarget(at),M.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Et=0,Jt=L.length;Et<Jt;Et++){let oe=L[Et],le=oe.object,Oe=oe.geometry,$t=oe.material,Rt=oe.group;if($t.side===En&&le.layers.test(B.layers)){let yn=$t.side;$t.side=ze,$t.needsUpdate=!0,oc(le,O,B,Oe,$t,Rt),$t.side=yn,$t.needsUpdate=!0,Ht=!0}}Ht===!0&&(M.updateMultisampleRenderTarget(at),M.updateRenderTargetMipmap(at))}x.setRenderTarget(St),x.setClearColor(k,j),Bt!==void 0&&(B.viewport=Bt),x.toneMapping=wt}function zs(_,L,O){let B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,at=_.length;D<at;D++){let gt=_[D],St=gt.object,wt=gt.geometry,Bt=B===null?gt.material:B,Ht=gt.group;St.layers.test(O.layers)&&oc(St,L,O,wt,Bt,Ht)}}function oc(_,L,O,B,D,at){_.onBeforeRender(x,L,O,B,D,at),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(x,L,O,B,_,at),D.transparent===!0&&D.side===En&&D.forceSinglePass===!1?(D.side=ze,D.needsUpdate=!0,x.renderBufferDirect(O,L,B,D,_,at),D.side=Gn,D.needsUpdate=!0,x.renderBufferDirect(O,L,B,D,_,at),D.side=En):x.renderBufferDirect(O,L,B,D,_,at),_.onAfterRender(x,L,O,B,D,at)}function Hs(_,L,O){L.isScene!==!0&&(L=Kt);let B=xt.get(_),D=p.state.lights,at=p.state.shadowsArray,gt=D.state.version,St=Mt.getParameters(_,D.state,at,L,O),wt=Mt.getProgramCacheKey(St),Bt=B.programs;B.environment=_.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(_.isMeshStandardMaterial?N:v).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Bt===void 0&&(_.addEventListener("dispose",zt),Bt=new Map,B.programs=Bt);let Ht=Bt.get(wt);if(Ht!==void 0){if(B.currentProgram===Ht&&B.lightsStateVersion===gt)return cc(_,St),Ht}else St.uniforms=Mt.getUniforms(_),_.onBeforeCompile(St,x),Ht=Mt.acquireProgram(St,wt),Bt.set(wt,Ht),B.uniforms=St.uniforms;let Et=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Et.clippingPlanes=nt.uniform),cc(_,St),B.needsLights=Cu(_),B.lightsStateVersion=gt,B.needsLights&&(Et.ambientLightColor.value=D.state.ambient,Et.lightProbe.value=D.state.probe,Et.directionalLights.value=D.state.directional,Et.directionalLightShadows.value=D.state.directionalShadow,Et.spotLights.value=D.state.spot,Et.spotLightShadows.value=D.state.spotShadow,Et.rectAreaLights.value=D.state.rectArea,Et.ltc_1.value=D.state.rectAreaLTC1,Et.ltc_2.value=D.state.rectAreaLTC2,Et.pointLights.value=D.state.point,Et.pointLightShadows.value=D.state.pointShadow,Et.hemisphereLights.value=D.state.hemi,Et.directionalShadowMap.value=D.state.directionalShadowMap,Et.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Et.spotShadowMap.value=D.state.spotShadowMap,Et.spotLightMatrix.value=D.state.spotLightMatrix,Et.spotLightMap.value=D.state.spotLightMap,Et.pointShadowMap.value=D.state.pointShadowMap,Et.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Ht,B.uniformsList=null,Ht}function lc(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=Hi.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function cc(_,L){let O=xt.get(_);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function vu(_,L,O,B,D){L.isScene!==!0&&(L=Kt),M.resetTextureUnits();let at=L.fog,gt=B.isMeshStandardMaterial?L.environment:null,St=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:es,wt=(B.isMeshStandardMaterial?N:v).get(B.envMap||gt),Bt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ht=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!O.morphAttributes.position,Jt=!!O.morphAttributes.normal,oe=!!O.morphAttributes.color,le=Hn;B.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(le=x.toneMapping);let Oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=Oe!==void 0?Oe.length:0,Rt=xt.get(B),yn=p.state.lights;if(rt===!0&&(bt===!0||_!==y)){let Qe=_===y&&B.id===I;nt.setState(B,_,Qe)}let te=!1;B.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==yn.state.version||Rt.outputColorSpace!==St||D.isBatchedMesh&&Rt.batching===!1||!D.isBatchedMesh&&Rt.batching===!0||D.isBatchedMesh&&Rt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Rt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Rt.instancing===!1||!D.isInstancedMesh&&Rt.instancing===!0||D.isSkinnedMesh&&Rt.skinning===!1||!D.isSkinnedMesh&&Rt.skinning===!0||D.isInstancedMesh&&Rt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Rt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Rt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Rt.instancingMorph===!1&&D.morphTexture!==null||Rt.envMap!==wt||B.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Ht||Rt.morphTargets!==Et||Rt.morphNormals!==Jt||Rt.morphColors!==oe||Rt.toneMapping!==le||Rt.morphTargetsCount!==$t)&&(te=!0):(te=!0,Rt.__version=B.version);let sn=Rt.currentProgram;te===!0&&(sn=Hs(B,L,D));let vi=!1,Ge=!1,cs=!1,ce=sn.getUniforms(),fn=Rt.uniforms;if(ct.useProgram(sn.program)&&(vi=!0,Ge=!0,cs=!0),B.id!==I&&(I=B.id,Ge=!0),vi||y!==_){ct.buffers.depth.getReversed()?(ot.copy(_.projectionMatrix),ud(ot),dd(ot),ce.setValue(w,"projectionMatrix",ot)):ce.setValue(w,"projectionMatrix",_.projectionMatrix),ce.setValue(w,"viewMatrix",_.matrixWorldInverse);let Ln=ce.map.cameraPosition;Ln!==void 0&&Ln.setValue(w,Ot.setFromMatrixPosition(_.matrixWorld)),yt.logarithmicDepthBuffer&&ce.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,Ge=!0,cs=!0)}if(D.isSkinnedMesh){ce.setOptional(w,D,"bindMatrix"),ce.setOptional(w,D,"bindMatrixInverse");let Qe=D.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ce.setValue(w,"boneTexture",Qe.boneTexture,M))}D.isBatchedMesh&&(ce.setOptional(w,D,"batchingTexture"),ce.setValue(w,"batchingTexture",D._matricesTexture,M),ce.setOptional(w,D,"batchingIdTexture"),ce.setValue(w,"batchingIdTexture",D._indirectTexture,M),ce.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&ce.setValue(w,"batchingColorTexture",D._colorsTexture,M));let hs=O.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Ft.update(D,O,sn),(Ge||Rt.receiveShadow!==D.receiveShadow)&&(Rt.receiveShadow=D.receiveShadow,ce.setValue(w,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fn.envMap.value=wt,fn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(fn.envMapIntensity.value=L.environmentIntensity),Ge&&(ce.setValue(w,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&yu(fn,cs),at&&B.fog===!0&&dt.refreshFogUniforms(fn,at),dt.refreshMaterialUniforms(fn,B,H,it,p.state.transmissionRenderTarget[_.id]),Hi.upload(w,lc(Rt),fn,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hi.upload(w,lc(Rt),fn,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(w,"center",D.center),ce.setValue(w,"modelViewMatrix",D.modelViewMatrix),ce.setValue(w,"normalMatrix",D.normalMatrix),ce.setValue(w,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Qe=B.uniformsGroups;for(let Ln=0,Dn=Qe.length;Ln<Dn;Ln++){let hc=Qe[Ln];U.update(hc,sn),U.bind(hc,sn)}}return sn}function yu(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Cu(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(_,L,O){xt.get(_.texture).__webglTexture=L,xt.get(_.depthTexture).__webglTexture=O;let B=xt.get(_);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){let O=xt.get(_);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,O=0){V=_,E=L,S=O;let B=!0,D=null,at=!1,gt=!1;if(_){let wt=xt.get(_);if(wt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(wt.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(wt.__hasExternalTextures)M.rebindTextures(_,xt.get(_.texture).__webglTexture,xt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Et=_.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&xt.has(Et)&&(_.width!==Et.image.width||_.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Bt=_.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);let Ht=xt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ht[L])?D=Ht[L][O]:D=Ht[L],at=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?D=xt.get(_).__webglMultisampledFramebuffer:Array.isArray(Ht)?D=Ht[O]:D=Ht,T.copy(_.viewport),q.copy(_.scissor),F=_.scissorTest}else T.copy(It).multiplyScalar(H).floor(),q.copy(kt).multiplyScalar(H).floor(),F=Qt;if(ct.bindFramebuffer(w.FRAMEBUFFER,D)&&B&&ct.drawBuffers(_,D),ct.viewport(T),ct.scissor(q),ct.setScissorTest(F),at){let wt=xt.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,wt.__webglTexture,O)}else if(gt){let wt=xt.get(_.texture),Bt=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,O||0,Bt)}I=-1},this.readRenderTargetPixels=function(_,L,O,B,D,at,gt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=xt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){ct.bindFramebuffer(w.FRAMEBUFFER,St);try{let wt=_.texture,Bt=wt.format,Ht=wt.type;if(!yt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-B&&O>=0&&O<=_.height-D&&w.readPixels(L,O,B,D,Wt.convert(Bt),Wt.convert(Ht),at)}finally{let wt=V!==null?xt.get(V).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(_,L,O,B,D,at,gt){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=xt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){let wt=_.texture,Bt=wt.format,Ht=wt.type;if(!yt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-B&&O>=0&&O<=_.height-D){ct.bindFramebuffer(w.FRAMEBUFFER,St);let Et=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Et),w.bufferData(w.PIXEL_PACK_BUFFER,at.byteLength,w.STREAM_READ),w.readPixels(L,O,B,D,Wt.convert(Bt),Wt.convert(Ht),0);let Jt=V!==null?xt.get(V).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,Jt);let oe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await hd(w,oe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Et),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,at),w.deleteBuffer(Et),w.deleteSync(oe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,L=null,O=0){_.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);let B=Math.pow(2,-O),D=Math.floor(_.image.width*B),at=Math.floor(_.image.height*B),gt=L!==null?L.x:0,St=L!==null?L.y:0;M.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,gt,St,D,at),ct.unbindTexture()},this.copyTextureToTexture=function(_,L,O=null,B=null,D=0){_.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,_=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let at,gt,St,wt,Bt,Ht,Et,Jt,oe,le=_.isCompressedTexture?_.mipmaps[D]:_.image;O!==null?(at=O.max.x-O.min.x,gt=O.max.y-O.min.y,St=O.isBox3?O.max.z-O.min.z:1,wt=O.min.x,Bt=O.min.y,Ht=O.isBox3?O.min.z:0):(at=le.width,gt=le.height,St=le.depth||1,wt=0,Bt=0,Ht=0),B!==null?(Et=B.x,Jt=B.y,oe=B.z):(Et=0,Jt=0,oe=0);let Oe=Wt.convert(L.format),$t=Wt.convert(L.type),Rt;L.isData3DTexture?(M.setTexture3D(L,0),Rt=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(M.setTexture2DArray(L,0),Rt=w.TEXTURE_2D_ARRAY):(M.setTexture2D(L,0),Rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);let yn=w.getParameter(w.UNPACK_ROW_LENGTH),te=w.getParameter(w.UNPACK_IMAGE_HEIGHT),sn=w.getParameter(w.UNPACK_SKIP_PIXELS),vi=w.getParameter(w.UNPACK_SKIP_ROWS),Ge=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,le.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ht);let cs=_.isDataArrayTexture||_.isData3DTexture,ce=L.isDataArrayTexture||L.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let fn=xt.get(_),hs=xt.get(L),Qe=xt.get(fn.__renderTarget),Ln=xt.get(hs.__renderTarget);ct.bindFramebuffer(w.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<St;Dn++)cs&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(_).__webglTexture,D,Ht+Dn),_.isDepthTexture?(ce&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(L).__webglTexture,D,oe+Dn),w.blitFramebuffer(wt,Bt,at,gt,Et,Jt,at,gt,w.DEPTH_BUFFER_BIT,w.NEAREST)):ce?w.copyTexSubImage3D(Rt,D,Et,Jt,oe+Dn,wt,Bt,at,gt):w.copyTexSubImage2D(Rt,D,Et,Jt,oe+Dn,wt,Bt,at,gt);ct.bindFramebuffer(w.READ_FRAMEBUFFER,null),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ce?_.isDataTexture||_.isData3DTexture?w.texSubImage3D(Rt,D,Et,Jt,oe,at,gt,St,Oe,$t,le.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,D,Et,Jt,oe,at,gt,St,Oe,le.data):w.texSubImage3D(Rt,D,Et,Jt,oe,at,gt,St,Oe,$t,le):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,Et,Jt,at,gt,Oe,$t,le.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,Et,Jt,le.width,le.height,Oe,le.data):w.texSubImage2D(w.TEXTURE_2D,D,Et,Jt,at,gt,Oe,$t,le);w.pixelStorei(w.UNPACK_ROW_LENGTH,yn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,te),w.pixelStorei(w.UNPACK_SKIP_PIXELS,sn),w.pixelStorei(w.UNPACK_SKIP_ROWS,vi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ge),D===0&&L.generateMipmaps&&w.generateMipmap(Rt),ct.unbindTexture()},this.copyTextureToTexture3D=function(_,L,O=null,B=null,D=0){return _.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,_=arguments[2],L=arguments[3],D=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,O,B,D)},this.initRenderTarget=function(_){xt.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),ct.unbindTexture()},this.resetState=function(){E=0,S=0,V=null,ct.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var zr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ts=class extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wh=new ue,ll=new Pr,mr=new Ki,Ar=new R,Hr=class extends Le{constructor(t=new Ie,e=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;wh.copy(s).invert(),ll.copy(t.ray).applyMatrix4(wh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,A=d;m<A;m++){let g=c.getX(m);Ar.fromBufferAttribute(u,g),Eh(Ar,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,A=d;m<A;m++)Ar.fromBufferAttribute(u,m),Eh(Ar,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eh(i,t,e,n,s,r,o){let a=ll.distanceSqToPoint(i);if(a<e){let l=new R;ll.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gi=class extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new ue;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vs=class extends tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cl=class extends Vs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xr=new R,to=new Wl,eo=new Wl,no=new Wl,hl=class extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),c=xr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),A=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),to.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,A,g),eo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,A,g),no.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(to.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),eo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),no.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(to.calc(l),eo.calc(l),no.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Th(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function a0(i,t){let e=1-i;return e*e*t}function o0(i,t){return 2*(1-i)*i*t}function l0(i,t){return i*i*t}function Is(i,t,e,n){return a0(i,t)+o0(i,e)+l0(i,n)}function c0(i,t){let e=1-i;return e*e*e*t}function h0(i,t){let e=1-i;return 3*e*e*i*t}function u0(i,t){return 3*(1-i)*i*i*t}function d0(i,t){return i*i*i*t}function bs(i,t,e,n,s){return c0(i,t)+h0(i,e)+u0(i,n)+d0(i,s)}var Gr=class extends tn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends tn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,s.x,r.x,o.x,a.x),bs(t,s.y,r.y,o.y,a.y),bs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends tn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends tn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends tn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends tn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y),Is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Th(a,l.x,c.x,h.x,u.x),Th(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Q().fromArray(s))}return this}},pl=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:hl,CubicBezierCurve:Gr,CubicBezierCurve3:ul,EllipseCurve:Vs,LineCurve:Wr,LineCurve3:dl,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:fl,SplineCurve:Yr}),gl=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new pl[s.type]().fromJSON(s))}return this}},jr=class extends gl{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wr(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xr(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Gr(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Vs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Zr=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rs=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,A=[],g=n/2,p=0;b(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function b(){let x=new R,P=new R,E=0,S=(e-t)/n;for(let V=0;V<=r;V++){let I=[],y=V/r,T=y*(e-t)+t;for(let q=0;q<=s;q++){let F=q/s,k=F*l+a,j=Math.sin(k),z=Math.cos(k);P.x=T*j,P.y=-y*n+g,P.z=T*z,u.push(P.x,P.y,P.z),x.set(j,S,z).normalize(),f.push(x.x,x.y,x.z),d.push(F,1-y),I.push(m++)}A.push(I)}for(let V=0;V<s;V++)for(let I=0;I<r;I++){let y=A[I][V],T=A[I+1][V],q=A[I+1][V+1],F=A[I][V+1];(t>0||I!==0)&&(h.push(y,T,F),E+=3),(e>0||I!==r-1)&&(h.push(T,q,F),E+=3)}c.addGroup(p,E,0),p+=E}function C(x){let P=m,E=new Q,S=new R,V=0,I=x===!0?t:e,y=x===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),m++;let T=m;for(let q=0;q<=s;q++){let k=q/s*l+a,j=Math.cos(k),z=Math.sin(k);S.x=I*z,S.y=g*y,S.z=I*j,u.push(S.x,S.y,S.z),f.push(0,y,0),E.x=j*.5+.5,E.y=z*.5*y+.5,d.push(E.x,E.y),m++}for(let q=0;q<s;q++){let F=P+q,k=T+q;x===!0?h.push(k,k+1,F):h.push(k+1,k,F),V+=3}c.addGroup(p,V,x===!0?1:2),p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kr=class i extends Rs{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ml=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let C=new R,x=new R,P=new R;for(let E=0;E<e.length;E+=3)d(e[E+0],C),d(e[E+1],x),d(e[E+2],P),l(C,x,P,b)}function l(b,C,x,P){let E=P+1,S=[];for(let V=0;V<=E;V++){S[V]=[];let I=b.clone().lerp(x,V/E),y=C.clone().lerp(x,V/E),T=E-V;for(let q=0;q<=T;q++)q===0&&V===E?S[V][q]=I:S[V][q]=I.clone().lerp(y,q/T)}for(let V=0;V<E;V++)for(let I=0;I<2*(E-V)-1;I++){let y=Math.floor(I/2);I%2===0?(f(S[V][y+1]),f(S[V+1][y]),f(S[V][y])):(f(S[V][y+1]),f(S[V+1][y+1]),f(S[V+1][y]))}}function c(b){let C=new R;for(let x=0;x<r.length;x+=3)C.x=r[x+0],C.y=r[x+1],C.z=r[x+2],C.normalize().multiplyScalar(b),r[x+0]=C.x,r[x+1]=C.y,r[x+2]=C.z}function h(){let b=new R;for(let C=0;C<r.length;C+=3){b.x=r[C+0],b.y=r[C+1],b.z=r[C+2];let x=g(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;o.push(x,1-P)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let C=o[b+0],x=o[b+2],P=o[b+4],E=Math.max(C,x,P),S=Math.min(C,x,P);E>.9&&S<.1&&(C<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),P<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,C){let x=b*3;C.x=t[x+0],C.y=t[x+1],C.z=t[x+2]}function m(){let b=new R,C=new R,x=new R,P=new R,E=new Q,S=new Q,V=new Q;for(let I=0,y=0;I<r.length;I+=9,y+=6){b.set(r[I+0],r[I+1],r[I+2]),C.set(r[I+3],r[I+4],r[I+5]),x.set(r[I+6],r[I+7],r[I+8]),E.set(o[y+0],o[y+1]),S.set(o[y+2],o[y+3]),V.set(o[y+4],o[y+5]),P.copy(b).add(C).add(x).divideScalar(3);let T=g(P);A(E,y+0,b,T),A(S,y+2,C,T),A(V,y+4,x,T)}}function A(b,C,x,P){P<0&&b.x===1&&(o[C]=b.x-1),x.x===0&&x.z===0&&(o[C]=P/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ps=class extends jr{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new jr().fromJSON(s))}return this}},f0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=au(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=x0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Us(r,o,e,a,l,d,0),o}};function au(i,t,e,n,s){let r,o;if(s===T0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Vh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vh(r,i[r],i[r+1],o);return o&&la(o,o.next)&&(Ds(o),o=o.next),o}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||fe(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&I0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?g0(i,n,s,r):p0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ds(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=m0(mi(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&A0(i,t,e,n,s,r):Us(mi(i),t,e,n,s,r,1);break}}}function p0(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Bi(s,a,r,l,o,c,m.x,m.y)&&fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function g0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,A=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Al(d,m,t,e,n),b=Al(A,g,t,e,n),C=i.prevZ,x=i.nextZ;for(;C&&C.z>=p&&x&&x.z<=b;){if(C.x>=d&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==o&&Bi(a,h,l,u,c,f,C.x,C.y)&&fe(C.prev,C,C.next)>=0||(C=C.prevZ,x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Bi(a,h,l,u,c,f,x.x,x.y)&&fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;C&&C.z>=p;){if(C.x>=d&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==o&&Bi(a,h,l,u,c,f,C.x,C.y)&&fe(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Bi(a,h,l,u,c,f,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function m0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!la(s,r)&&ou(s,n,n.next,r)&&Ls(s,r)&&Ls(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ds(n),Ds(n.next),n=i=r),n=n.next}while(n!==i);return mi(n)}function A0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let l=lu(o,a);o=mi(o,o.next),l=mi(l,l.next),Us(o,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function x0(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=au(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(M0(c));for(s.sort(v0),r=0;r<s.length;r++)e=y0(s[r],e);return e}function v0(i,t){return i.x-t.x}function y0(i,t){let e=C0(i,t);if(!e)return t;let n=lu(e,i);return mi(n,n.next),mi(e,e.next)}function C0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ls(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&_0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function _0(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function I0(i,t,e,n){let s=i;do s.z===0&&(s.z=Al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b0(s)}function b0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function M0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function S0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w0(i,t)&&(Ls(i,t)&&Ls(t,i)&&E0(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||la(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function ou(i,t,e,n){let s=yr(fe(i,t,e)),r=yr(fe(i,t,n)),o=yr(fe(e,n,i)),a=yr(fe(e,n,t));return!!(s!==r&&o!==a||s===0&&vr(i,e,t)||r===0&&vr(i,n,t)||o===0&&vr(e,i,n)||a===0&&vr(e,t,n))}function vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yr(i){return i>0?1:i<0?-1:0}function w0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ou(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ls(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function E0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lu(i,t){let e=new xl(i.i,i.x,i.y),n=new xl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vh(i,t,e,n){let s=new xl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ms=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Rh(t),Ph(n,t);let o=t.length;e.forEach(Rh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ph(n,e[l]);let a=f0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Jr=class i extends Ie{constructor(t=new Ps([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:V0,C,x=!1,P,E,S,V;p&&(C=p.getSpacedPoints(h),x=!0,f=!1,P=p.computeFrenetFrames(h,!1),E=new R,S=new R,V=new R),f||(g=0,d=0,m=0,A=0);let I=a.extractPoints(c),y=I.shape,T=I.holes;if(!Ms.isClockWise(y)){y=y.reverse();for(let K=0,st=T.length;K<st;K++){let w=T[K];Ms.isClockWise(w)&&(T[K]=w.reverse())}}let F=Ms.triangulateShape(y,T),k=y;for(let K=0,st=T.length;K<st;K++){let w=T[K];y=y.concat(w)}function j(K,st,w){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,w)}let z=y.length,it=F.length;function H(K,st,w){let Tt,tt,yt,ct=K.x-st.x,Lt=K.y-st.y,xt=w.x-K.x,M=w.y-K.y,v=ct*ct+Lt*Lt,N=ct*M-Lt*xt;if(Math.abs(N)>Number.EPSILON){let W=Math.sqrt(v),J=Math.sqrt(xt*xt+M*M),X=st.x-Lt/W,Mt=st.y+ct/W,dt=w.x-M/J,vt=w.y+xt/J,Yt=((dt-X)*M-(vt-Mt)*xt)/(ct*M-Lt*xt);Tt=X+ct*Yt-K.x,tt=Mt+Lt*Yt-K.y;let nt=Tt*Tt+tt*tt;if(nt<=2)return new Q(Tt,tt);yt=Math.sqrt(nt/2)}else{let W=!1;ct>Number.EPSILON?xt>Number.EPSILON&&(W=!0):ct<-Number.EPSILON?xt<-Number.EPSILON&&(W=!0):Math.sign(Lt)===Math.sign(M)&&(W=!0),W?(Tt=-Lt,tt=ct,yt=Math.sqrt(v)):(Tt=ct,tt=Lt,yt=Math.sqrt(v/2))}return new Q(Tt/yt,tt/yt)}let ht=[];for(let K=0,st=k.length,w=st-1,Tt=K+1;K<st;K++,w++,Tt++)w===st&&(w=0),Tt===st&&(Tt=0),ht[K]=H(k[K],k[w],k[Tt]);let At=[],It,kt=ht.concat();for(let K=0,st=T.length;K<st;K++){let w=T[K];It=[];for(let Tt=0,tt=w.length,yt=tt-1,ct=Tt+1;Tt<tt;Tt++,yt++,ct++)yt===tt&&(yt=0),ct===tt&&(ct=0),It[Tt]=H(w[Tt],w[yt],w[ct]);At.push(It),kt=kt.concat(It)}for(let K=0;K<g;K++){let st=K/g,w=d*Math.cos(st*Math.PI/2),Tt=m*Math.sin(st*Math.PI/2)+A;for(let tt=0,yt=k.length;tt<yt;tt++){let ct=j(k[tt],ht[tt],Tt);ot(ct.x,ct.y,-w)}for(let tt=0,yt=T.length;tt<yt;tt++){let ct=T[tt];It=At[tt];for(let Lt=0,xt=ct.length;Lt<xt;Lt++){let M=j(ct[Lt],It[Lt],Tt);ot(M.x,M.y,-w)}}}let Qt=m+A;for(let K=0;K<z;K++){let st=f?j(y[K],kt[K],Qt):y[K];x?(S.copy(P.normals[0]).multiplyScalar(st.x),E.copy(P.binormals[0]).multiplyScalar(st.y),V.copy(C[0]).add(S).add(E),ot(V.x,V.y,V.z)):ot(st.x,st.y,0)}for(let K=1;K<=h;K++)for(let st=0;st<z;st++){let w=f?j(y[st],kt[st],Qt):y[st];x?(S.copy(P.normals[K]).multiplyScalar(w.x),E.copy(P.binormals[K]).multiplyScalar(w.y),V.copy(C[K]).add(S).add(E),ot(V.x,V.y,V.z)):ot(w.x,w.y,u/h*K)}for(let K=g-1;K>=0;K--){let st=K/g,w=d*Math.cos(st*Math.PI/2),Tt=m*Math.sin(st*Math.PI/2)+A;for(let tt=0,yt=k.length;tt<yt;tt++){let ct=j(k[tt],ht[tt],Tt);ot(ct.x,ct.y,u+w)}for(let tt=0,yt=T.length;tt<yt;tt++){let ct=T[tt];It=At[tt];for(let Lt=0,xt=ct.length;Lt<xt;Lt++){let M=j(ct[Lt],It[Lt],Tt);x?ot(M.x,M.y+C[h-1].y,C[h-1].x+w):ot(M.x,M.y,u+w)}}}Y(),rt();function Y(){let K=s.length/3;if(f){let st=0,w=z*st;for(let Tt=0;Tt<it;Tt++){let tt=F[Tt];Ut(tt[2]+w,tt[1]+w,tt[0]+w)}st=h+g*2,w=z*st;for(let Tt=0;Tt<it;Tt++){let tt=F[Tt];Ut(tt[0]+w,tt[1]+w,tt[2]+w)}}else{for(let st=0;st<it;st++){let w=F[st];Ut(w[2],w[1],w[0])}for(let st=0;st<it;st++){let w=F[st];Ut(w[0]+z*h,w[1]+z*h,w[2]+z*h)}}n.addGroup(K,s.length/3-K,0)}function rt(){let K=s.length/3,st=0;bt(k,st),st+=k.length;for(let w=0,Tt=T.length;w<Tt;w++){let tt=T[w];bt(tt,st),st+=tt.length}n.addGroup(K,s.length/3-K,1)}function bt(K,st){let w=K.length;for(;--w>=0;){let Tt=w,tt=w-1;tt<0&&(tt=K.length-1);for(let yt=0,ct=h+g*2;yt<ct;yt++){let Lt=z*yt,xt=z*(yt+1),M=st+Tt+Lt,v=st+tt+Lt,N=st+tt+xt,W=st+Tt+xt;Ot(M,v,N,W)}}}function ot(K,st,w){l.push(K),l.push(st),l.push(w)}function Ut(K,st,w){Nt(K),Nt(st),Nt(w);let Tt=s.length/3,tt=b.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Kt(tt[0]),Kt(tt[1]),Kt(tt[2])}function Ot(K,st,w,Tt){Nt(K),Nt(st),Nt(Tt),Nt(st),Nt(w),Nt(Tt);let tt=s.length/3,yt=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Kt(yt[0]),Kt(yt[1]),Kt(yt[3]),Kt(yt[1]),Kt(yt[2]),Kt(yt[3])}function Nt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Kt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return R0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pl[s.type]().fromJSON(s)),new i(n,t.options)}},V0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],A=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(f,1-m),new Q(A,1-p)]:[new Q(a,1-l),new Q(h,1-u),new Q(d,1-m),new Q(g,1-p)]}};function R0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qr=class i extends ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ns=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let b=[],C=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+C*a),u.y=t*Math.cos(o+C*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+C*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(E+x,1-C),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let C=h[p][b+1],x=h[p][b],P=h[p+1][b],E=h[p+1][b+1];(p!==0||o>0)&&d.push(C,x,E),(p!==n-1||l<Math.PI)&&d.push(x,P,E)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(A,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $r=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let A=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let A=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,b=(s+1)*d+m;o.push(A,g,b),o.push(g,p,b)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ta=class extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},$i=class extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Cr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function P0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vl=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:r=t,a=2*e-n;break;case Uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=t,l=2*n-e;break;case Uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-f*g+2*f*A-f*m,b=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,C=(-1-d)*g+(1.5+d)*A+.5*m,x=d*g-d*A;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+b*o[c+P]+C*o[l+P]+x*o[u+P];return r}},yl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Cl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cr(e,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Cr(t.times,Array),values:Cr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&P0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Go;var Ai=class extends un{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=wr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends un{};_l.prototype.ValueTypeName="color";var Il=class extends un{};Il.prototype.ValueTypeName="number";var bl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ea=class extends un{InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends un{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=wr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends un{};Ml.prototype.ValueTypeName="vector";var Sl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},U0=new Sl,wl=class{constructor(t){this.manager=t!==void 0?t:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},na=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},io=new ue,Uh=new R,Lh=new R,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Dh=new ue,vs=new R,so=new R,El=class extends ia{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),so.copy(n.position),so.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(so),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh)}},Os=class extends Fs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new El}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Tl=class extends ia{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Tl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var sa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nh(){return performance.now()}var Xl="\\[\\]\\.:\\/",L0=new RegExp("["+Xl+"]","g"),Yl="[^"+Xl+"]",D0="[^"+Xl.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",Yl),F0=/(WCOD+)?/.source.replace("WCOD",D0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),q0=new RegExp("^"+N0+F0+O0+B0+"$"),k0=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=q0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);k0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Vl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _A=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);var ca={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},z0=new Qi(-1,1,1,-1,0,1),jl=class extends Ie{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},H0=new jl,Zn=class{constructor(t){this._mesh=new Se(H0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,z0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ss=class extends Je{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Zn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qs=class extends Je{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ha=class extends Je{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ua=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ss(ca),this.copyPass.material.blending=mn,this.clock=new sa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qs!==void 0&&(o instanceof qs?n=!0:o instanceof ha&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var da=class extends Je{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var rs=class i extends Je{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new qt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Fe(r,o,{type:dn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Fe(r,o,{type:dn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=hu;this.highPassUniforms=jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ca;this.copyUniforms=jn.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qt,this.oldClearAlpha=1,this.basic=new xn,this.fsQuad=new Zn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};rs.BlurDirectionX=new Q(1,0);rs.BlurDirectionY=new Q(0,1);var uu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fa=class extends Je{constructor(){super();let t=uu;this.uniforms=jn.clone(t.uniforms),this.material=new ta({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=s=>{let r=n(s);if(s&&!s.__tw&&String(s.family).replace(/["']/g,"")==="Tajawal"){let o=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});o.__tw=1,o.load().then(()=>n(o)).catch(()=>{})}return r}}catch{}}if(typeof document!="undefined"&&!document.getElementById("tw-icons")){let i=document.createElement("style");i.id="tw-icons",i.textContent=`.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-heart{display:inline-block;width:.9em;height:.82em;background:linear-gradient(#ff8aa0,#e8284a);clip-path:path('M.45em .8em C-.3em .25 .1em -.15em .45em .2em C.8em -.15em 1.2em .25em .45em .8em');vertical-align:-.1em;margin:0 .1em;clip-path:polygon(50% 100%,8% 55%,0 30%,10% 8%,30% 0,50% 18%,70% 0,90% 8%,100% 30%,92% 55%)}
.tw-pause{display:inline-block;width:.8em;height:.8em;vertical-align:-.1em;background:linear-gradient(90deg,#fff 0 36%,transparent 36% 64%,#fff 64% 100%);border-radius:.1em;margin:0 .05em}
.tw-up{display:inline-block;width:.8em;height:.9em;background:linear-gradient(#fff,#d8e8ff);clip-path:polygon(50% 0,100% 50%,66% 50%,66% 100%,34% 100%,34% 50%,0 50%);vertical-align:-.1em;margin:0 .1em}
.tw-flag{display:inline-block;width:.85em;height:.9em;background:linear-gradient(90deg,#fff 0 12%,transparent 12%),linear-gradient(45deg,#222 25%,#fff 25% 50%,#222 50% 75%,#fff 75%);background-size:100% 100%,.3em .3em;clip-path:polygon(0 0,100% 10%,100% 60%,12% 70%,12% 100%,0 100%);vertical-align:-.1em;margin:0 .1em}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`,document.head.appendChild(i);let t=/(\u{1F512}|\u2B50|\u{1FA99}|\u2764|\u23F8|\u2B06|\u{1F3C1})\uFE0F?/gu,e={"\u{1F512}":"tw-lock","\u2B50":"tw-star","\u{1FA99}":"tw-coin","\u2764":"tw-heart","\u23F8":"tw-pause","\u2B06":"tw-up","\u{1F3C1}":"tw-flag"},n=()=>{if(!document.body)return;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),l=[];for(let c=a.nextNode();c;c=a.nextNode()){let h=c.parentNode;h&&/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(h.nodeName)||(t.lastIndex=0,t.test(c.nodeValue)&&l.push(c))}for(let c of l){let h=document.createDocumentFragment(),u=0,f=c.nodeValue;t.lastIndex=0;let d;for(;d=t.exec(f);){d.index>u&&h.append(f.slice(u,d.index));let m=document.createElement("span");m.className=e[d[1]],h.append(m),u=d.index+d[0].length}u<f.length&&h.append(f.slice(u)),c.parentNode.replaceChild(h,c)}},s=0,r=()=>{s||(s=setTimeout(()=>{s=0,n()},30))},o=()=>{new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0,characterData:!0}),n()};document.body?o():document.addEventListener("DOMContentLoaded",o)}var du={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},G0={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},W0={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function X0(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let A=0;A<r;A++)o[A*3]=t.position.x+(Math.random()-.5)*2*s,o[A*3+1]=t.position.y+(Math.random()-.5)*s,o[A*3+2]=t.position.z+(Math.random()-.5)*2*s,a[A*3]=(Math.random()-.5)*.25,a[A*3+1]=.05+Math.random()*.25,a[A*3+2]=(Math.random()-.5)*.25;let l=new Ie;l.setAttribute("position",new He(o,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new gi(c);f.colorSpace=Me;let d=new Ts({map:f,color:W0[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Gi,fog:!1,sizeAttenuation:!0}),m=new Hr(l,d);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:o,vel:a,R:s,N:r}}function Y0(i,t,e){let{pos:n,vel:s,R:r,N:o}=i;for(let a=0;a<o;a++)for(let l=0;l<3;l++){let c=a*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var fu={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},j0=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Z0=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,K0={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},pu={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=K0[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(pu[t]||-1e9)<n||(pu[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function J0(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,o=performance.now(),a=!1,l=0,c=!1,h=g=>{if(!n[g]){let p=new Audio(`${e}${g}_${t}.mp3`);p.preload="auto",p.volume=.95,n[g]=p}return n[g]},u=(g,p)=>{let b=performance.now();if(!p&&b-r<6e3||c)return;let C=g+(1+Math.floor(Math.random()*fu[g])),x=h(C);c=!0,r=b,x.currentTime=0;let P=()=>{c=!1};x.onended=P,x.onerror=P;let E=x.play();E&&E.catch&&E.catch(P),setTimeout(P,4e3)};window.__cheer=(g,p)=>{fu[g]&&(a=!0,u(g,!!p))};let f=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),p=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),p.gain.setValueAtTime(.08,s.currentTime),p.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(p),p.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},d=()=>{o=performance.now(),f(),a||(a=!0,u("start",!0))};i.addEventListener("pointerdown",d,{passive:!0}),window.addEventListener("keydown",d,{passive:!0});let m="";new MutationObserver(()=>{if(!a)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,j0.test(g)?u("win",!1):Z0.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!a||document.hidden||(g-o>14e3?(u("idle",!1),o=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function gu(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},du[e.get("look")||t.preset||"warm"]||du.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),o=i.render.bind(i),a=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,d=0,m=0,A=0,g=!1,p=performance.now();function b(C,x){let P=i.getSize(new Q);d=P.x,m=P.y,A=i.getPixelRatio(),c=new ua(i),c.setPixelRatio(A),c.setSize(d,m),h=new da(C,x),c.addPass(h),s||(u=new rs(new Q(Math.max(2,d>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new fa),f=new ss(G0),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return i.render=function(C,x){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!C||!x||!C.isScene)return o(C,x);try{c||b(C,x);let P=i.getSize(new Q),E=i.getPixelRatio();(P.x!==d||P.y!==m||E!==A)&&(d=P.x,m=P.y,A=E,c.setPixelRatio(E),c.setSize(d,m),u&&u.resolution.set(Math.max(2,d>>1),Math.max(2,m>>1))),h.scene=C,h.camera=x,f.uniforms.time.value=(performance.now()-p)/1e3;let S=performance.now(),V=Math.min(.1,Math.max(0,(S-l)/1e3));if(l=S,!e.has("nomotes")&&t.motes!==!1){let I=a.get(C);I||(I=X0(C,x,e.get("look")||t.preset||"warm",r),a.set(C,I)),Y0(I,x,V)}g=!0,c.render(),g=!1}catch(P){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",P&&P.message),i.render=o,o(C,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>J0(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var as=Math.PI*2,Ae=5,Ql=16,we=8,$={sph:new Ns(.5,20,14),hem:new Ns(.5,22,10,0,as,0,Math.PI/2),cyl:new Rs(.5,.5,1,18),box:new pi(1,1,1),cone:new Kr(.5,1,14),disc:new Zr(.5,24),tor:new $r(.5,.06,8,32),ico:new Qr(.5,0)},Zl=new Map;function Vt(i,t=0,e=.8,n={}){var r,o,a,l,c,h,u;let s=`${i}|${t}|${e}|${(r=n.r)!=null?r:.45}|${(o=n.m)!=null?o:.1}|${(a=n.t)!=null?a:1}`;return Zl.has(s)||Zl.set(s,new $i({color:i,roughness:(l=n.r)!=null?l:.45,metalness:(c=n.m)!=null?c:.1,emissive:t,emissiveIntensity:t?e:0,transparent:((h=n.t)!=null?h:1)<1,opacity:(u=n.t)!=null?u:1})),Zl.get(s)}function et(i,t,e,n=0,s=0,r=0,o=1,a=o,l=o){let c=new Se(t,e);return c.position.set(n,s,r),c.scale.set(o,a,l),i.add(c),c}function ne(i,t=0,e=0,n=0){let s=new xe;return s.position.set(t,e,n),i.add(s),s}var $l=Vt(16777215,16777215,.6),ls=Vt(1053740,0,0,{r:.2,m:.5});function Kl(i,t){let e=new xe,n={kind:t},s=Vt(i.body,0,0,{m:.35,r:.3}),r=Vt(i.trim,i.trim,.9),o=Vt(2764629,0,0,{m:.5,r:.4}),a=t==="smash",l=a?.56:t==="swarm"?.4:.42;n.root=ne(e);let c=n.root;return n.legs=[-1,1].map(h=>{let u=ne(c,h*l*.42,.3,0);return et(u,$.cyl,s,0,-.14,0,.17,.3,.17),et(u,$.box,o,0,-.3,.05,.22,.08,.3),u}),n.torso=ne(c,0,.3,0),et(n.torso,$.sph,s,0,.17,0,l*1.15,.5,l*.95),et(n.torso,$.cyl,r,0,.26,l*.34,.18,.02,.18).rotation.x=Math.PI/2,et(n.torso,$.cyl,r,0,.08,0,l*1.18,.04,l*.98),a&&[-1,1].forEach(h=>et(n.torso,$.sph,r,h*l*.66,.38,0,.3,.2,.3)),n.head=ne(n.torso,0,.5,.02),et(n.head,$.sph,s,0,.1,0,a?.5:.52,.4,.46),et(n.head,$.box,ls,0,.1,.17,.4,.2,.18),n.eyes=[-1,1].map(h=>et(n.head,$.sph,Vt(i.eye,i.eye,1.4),h*.09,.11,.255,.1,.1,.05)),et(n.head,$.cyl,o,0,.34,0,.03,.14,.03),et(n.head,$.sph,r,0,.43,0,.09),n.arms=[-1,1].map(h=>{let u=ne(n.torso,h*(l*.62+.05),.32,0);if(et(u,$.cyl,o,0,-.14,0,.1,.3,.1),t==="blaster"&&h===1){let f=et(u,$.cyl,Vt(3752058,i.trim,.5,{m:.6}),0,-.28,.2,.15,.5,.15);f.rotation.x=Math.PI/2,et(u,$.sph,r,0,-.28,.46,.14),n.muzzle=u}else et(u,$.sph,a?r:s,0,-.3,0,a?.3:.17);return u}),n.shine=[],e.traverse(h=>{h.isMesh&&n.shine.push(h)}),{g:e,P:n}}function Q0(i){let t=new xe,e={kind:"swarm",fly:!0},n=e.root=ne(t,0,.5,0);return et(n,$.sph,Vt(i.body,0,0,{m:.4,r:.3}),0,0,0,.7,.55,.7),et(n,$.sph,ls,0,.02,.26,.38,.3,.2),et(n,$.sph,Vt(i.eye,i.eye,1.6),0,.02,.34,.2,.2,.1),et(n,$.cyl,Vt(2764629),0,.3,0,.05,.12,.05),e.rotor=ne(n,0,.38,0),et(e.rotor,$.box,Vt(i.trim,i.trim,.8),0,0,0,.9,.03,.1),et(e.rotor,$.box,Vt(i.trim,i.trim,.8),0,0,0,.1,.03,.9),e.arms=[-1,1].map(s=>{let r=ne(n,s*.36,-.05,.05);return et(r,$.sph,Vt(i.trim,i.trim,.8),0,0,0,.14),r}),e.legs=[],e.torso=n,e.head=n,e.shine=[],t.traverse(s=>{s.isMesh&&e.shine.push(s)}),{g:t,P:e}}function $0(i){let t=new xe,e={kind:"turret"};et(t,$.cyl,Vt(2764629,0,0,{m:.5}),0,.12,0,1,.24,1),et(t,$.cyl,Vt(i.trim,i.trim,1),0,.26,0,.94,.04,.94),e.root=ne(t),e.turn=ne(t,0,.5,0),et(e.turn,$.sph,Vt(i.body,0,0,{m:.4,r:.3}),0,0,0,.8,.7,.8),e.barrel=ne(e.turn,0,.05,.3);let n=et(e.barrel,$.cyl,Vt(3752058,0,0,{m:.6}),0,0,.25,.16,.7,.16);return n.rotation.x=Math.PI/2,et(e.barrel,$.sph,Vt(i.trim,i.trim,1.6),0,0,.62,.17),et(e.turn,$.sph,Vt(i.eye,i.eye,1.4),0,.12,.26,.14,.14,.08),e.legs=[],e.arms=[],e.torso=e.turn,e.head=e.turn,e.shine=[],t.traverse(s=>{s.isMesh&&e.shine.push(s)}),{g:t,P:e}}var os={body:7266362,dark:3844124,bug:16742970,brute:9063167,spit:2348736};function Un(i,t,e,n,s=.16){et(i,$.sph,$l,t,e,n,s),et(i,$.sph,ls,t,e,n+s*.38,s*.52)}function tA(){let i=new xe,t={kind:"slime"};t.root=ne(i);let e=Vt(os.body,2686768,.25,{r:.12,t:.92});return t.body=ne(t.root,0,0,0),et(t.body,$.hem,e,0,0,0,1.05,1,1.05),et(t.body,$.cyl,e,0,.02,0,1.05,.06,1.05),et(t.body,$.sph,Vt(13172624,13172624,.4,{t:.7}),-.2,.34,.2,.16,.1,.1),Un(t.body,-.14,.28,.4),Un(t.body,.16,.3,.38),et(t.body,$.sph,ls,0,.14,.46,.2,.07,.06),t.legs=[],t.arms=[],t.torso=t.body,t.head=t.body,t.shine=[],i.traverse(n=>{n.isMesh&&t.shine.push(n)}),{g:i,P:t}}function eA(){let i=new xe,t={kind:"bug"},e=t.root=ne(i),n=Vt(os.bug,16734736,.15,{m:.3,r:.25}),s=Vt(4857864);t.torso=ne(e,0,.3,-.05),et(t.torso,$.sph,n,0,0,-.1,.78,.55,1),et(t.torso,$.cyl,s,0,.27,-.1,.03,.02,.9).rotation.x=Math.PI/2,t.head=ne(t.torso,0,0,.42),et(t.head,$.sph,n,0,0,0,.48,.4,.42),Un(t.head,-.14,.1,.17,.2),Un(t.head,.14,.1,.17,.2),[-1,1].forEach(r=>{let o=et(t.head,$.cone,$l,r*.12,-.12,.24,.07,.22,.07);o.rotation.x=Math.PI/2,o.rotation.z=r*.4}),[-1,1].forEach(r=>{let o=et(t.head,$.cyl,s,r*.1,.28,.1,.02,.3,.02);o.rotation.z=-r*.5,o.rotation.x=-.3}),t.legs=[];for(let r of[-1,1])for(let o of[-.22,0,.22]){let a=ne(e,r*.3,.25,o*.9-.05),l=et(a,$.cyl,s,r*.14,-.04,0,.05,.34,.05);l.rotation.z=r*1,a.userData.s=r,a.userData.p=o*9,t.legs.push(a)}return t.arms=[],t.shine=[],i.traverse(r=>{r.isMesh&&t.shine.push(r)}),{g:i,P:t}}function nA(){let i=new xe,t={kind:"brute"},e=t.root=ne(i),n=Vt(os.brute,5906687,.12,{r:.5}),s=Vt(3807882,0,0,{r:.6}),r=Vt(13150463,9071359,.2);return t.legs=[-1,1].map(o=>{let a=ne(e,o*.22,.34,0);return et(a,$.cyl,s,0,-.16,0,.26,.34,.26),et(a,$.sph,s,0,-.34,.08,.3,.14,.4),a}),t.torso=ne(e,0,.34,0),et(t.torso,$.sph,n,0,.26,0,.82,.78,.7),et(t.torso,$.sph,r,0,.22,.2,.46,.44,.3),t.head=ne(t.torso,0,.62,.1),et(t.head,$.sph,n,0,0,0,.5,.4,.46),et(t.head,$.sph,ls,0,-.1,.18,.34,.14,.12),[-.1,0,.1].forEach(o=>et(t.head,$.cone,$l,o,-.06,.22,.05,.1,.05).rotation.z=Math.PI),Un(t.head,-.12,.07,.19,.16),Un(t.head,.12,.07,.19,.16),[-1,1].forEach(o=>{let a=et(t.head,$.cone,Vt(16773312,0,0,{r:.4}),o*.2,.22,0,.12,.32,.12);a.rotation.z=-o*.5}),t.arms=[-1,1].map(o=>{let a=ne(t.torso,o*.5,.5,0);return et(a,$.cyl,n,0,-.18,0,.2,.4,.2),et(a,$.sph,s,0,-.42,.04,.36),a}),t.shine=[],i.traverse(o=>{o.isMesh&&t.shine.push(o)}),{g:i,P:t}}function iA(){let i=new xe,t={kind:"spitter"},e=t.root=ne(i),n=Vt(os.spit,1099952,.15,{r:.3}),s=Vt(817780);return t.legs=[-1,1].map(r=>{let o=ne(e,r*.14,.34,0);return et(o,$.cyl,s,0,-.17,0,.1,.36,.1),et(o,$.sph,s,0,-.34,.06,.18,.08,.28),o}),t.torso=ne(e,0,.34,0),et(t.torso,$.sph,n,0,.26,0,.5,.7,.44),t.sac=et(t.torso,$.sph,Vt(12124e3,12124e3,.9,{t:.9}),0,.36,.2,.3,.3,.22),t.head=ne(t.torso,0,.74,.04),et(t.head,$.sph,n,0,0,0,.52,.42,.46),Un(t.head,0,.08,.2,.3),et(t.head,$.sph,ls,0,-.12,.2,.22,.1,.1),[-1,1].forEach(r=>{let o=et(t.head,$.cyl,s,r*.16,.26,0,.02,.28,.02);o.rotation.z=-r*.5,et(t.head,$.sph,Vt(12124e3,12124e3,1.2),r*.27,.37,0,.08)}),t.arms=[-1,1].map(r=>{let o=ne(t.torso,r*.3,.46,0);return et(o,$.cyl,s,0,-.14,0,.07,.3,.07),et(o,$.sph,n,0,-.3,0,.14),o}),t.shine=[],i.traverse(r=>{r.isMesh&&t.shine.push(r)}),{g:i,P:t}}var ks={body:14674175,trim:3531007,eye:3531007},sA={spark:()=>Kl({...ks,body:15791359},"spark"),blaster:()=>Kl({...ks,body:12110079,trim:6992127,eye:10152191},"blaster"),smash:()=>Kl({...ks,body:16765802,trim:16747050,eye:16771178},"smash"),swarm:()=>Q0({...ks,body:14221300,trim:5963674,eye:5963674}),turret:()=>$0({...ks,body:13162751}),slime:tA,bug:eA,brute:nA,spitter:iA},rA={spark:1.25,blaster:1.35,smash:1.7,swarm:.95,turret:1.4,slime:1,bug:.9,brute:1.9,spitter:1.6};function Jl(i){let t=new Se($.disc,new xn({color:0,transparent:!0,opacity:.4,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.02,t.scale.set(i*2.3,i*2.3,1),t}function mu(){return[[Ae-3.6,0],[Ae+3.6,0],[10,we],[Ae+3.6,Ql],[Ae-3.6,Ql],[0,we]]}function aA(){let e=document.createElement("canvas");e.width=640,e.height=1024;let n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#4a1470"),s.addColorStop(.48,"#24135a"),s.addColorStop(.52,"#0d2a64"),s.addColorStop(1,"#0e4a86"),n.fillStyle=s,n.fillRect(0,0,640,1024);let r=640/10,o=1024/16;n.lineWidth=2;let a=.95;for(let u=-1;u<20;u++)for(let f=-1;f<9;f++){let d=f*a*1.732+(u%2?a*.866:0)+.2,m=u*a*1.5;n.beginPath();for(let A=0;A<6;A++){let g=A/6*as+as/12,p=(d+Math.cos(g)*a*.94)*r,b=(m+Math.sin(g)*a*.94)*o;A?n.lineTo(p,b):n.moveTo(p,b)}n.closePath(),n.strokeStyle=m<we?"rgba(255,90,210,.38)":"rgba(80,230,255,.38)",n.stroke(),(u*7+f*3)%5===0&&(n.fillStyle=m<we?"rgba(255,90,210,.12)":"rgba(80,230,255,.12)",n.fill())}n.shadowBlur=18,n.shadowColor="#fff",n.strokeStyle="#fff",n.lineWidth=5,n.beginPath(),n.moveTo(0,we*o),n.lineTo(640,we*o),n.stroke(),n.shadowBlur=0,n.strokeStyle="rgba(255,255,255,.35)",n.setLineDash([14,14]),n.lineWidth=3,n.beginPath(),n.moveTo(0,we*o),n.lineTo(640,we*o),n.stroke();let l=document.createElement("canvas");l.width=640,l.height=1024;let c=l.getContext("2d");c.translate(0,1024),c.scale(1,-1),c.drawImage(e,0,0);let h=new gi(l);return h.colorSpace=Me,h.anisotropy=4,h.repeat.set(1/10,1/16),h.wrapS=h.wrapT=Ss,h}function oA(){let i=document.createElement("canvas");i.width=256,i.height=512;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#12062e"),e.addColorStop(.5,"#2a0f5e"),e.addColorStop(1,"#0a1a4a"),t.fillStyle=e,t.fillRect(0,0,256,512);let n=(a,l,c,h)=>{let u=t.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,h),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,256,512)};n(50,110,200,"rgba(255,60,200,.35)"),n(220,260,220,"rgba(40,120,255,.3)");let s=5,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<120;a++)t.fillStyle=`rgba(255,255,255,${.25+r()*.7})`,t.beginPath(),t.arc(r()*256,r()*512,.4+r()*1.1,0,as),t.fill();let o=new gi(i);return o.colorSpace=Me,o}var pa=class{constructor(t){this.renderer=gu(new kr({antialias:!0,alpha:!1}),{preset:"night",tune:{bloom:[.28,.5,.9]}}),this.dom=this.renderer.domElement,this.dom.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",this.scene=new zr,this.scene.background=oA(),this.camera=new Ue(40,1,.5,300),this.scene.add(new na(12110079,4860554,1.15));let e=new Bs(16777215,1.5);e.position.set(-4,14,22),this.scene.add(e);let n=new Bs(16739032,.7);n.position.set(8,6,-10),this.scene.add(n),this.pool=new Map,this.projs=new Map,this.w=1,this.h=1,this.t=0,this.shakeV=0,this._arena(),this._base0(),this._ufo(),this._deco()}_arena(){let t=new Ps;mu().forEach(([l,c],h)=>h?t.lineTo(l,c):t.moveTo(l,c)),t.closePath();let e=new Jr(t,{depth:.9,bevelEnabled:!1});e.rotateX(Math.PI/2);let n=new $i({map:aA(),roughness:.28,metalness:.25,emissive:2101344,emissiveIntensity:.22}),s=new $i({color:3807866,roughness:.5,metalness:.3,emissive:2773247,emissiveIntensity:.25}),r=new Se(e,[n,s]);this.scene.add(r);let o=mu();o.forEach(([l,c],h)=>{let[u,f]=o[(h+1)%6],d=u-l,m=f-c,A=Math.hypot(d,m),g=et(this.scene,$.box,Vt(c<we&&f<we?16730832:3531007,c<we&&f<we?16730832:3531007,1.6),(l+u)/2,.05,(c+f)/2,A+.08,.14,.16);g.rotation.y=-Math.atan2(m,d);let p=et(this.scene,$.cyl,Vt(2764629,0,0,{m:.5}),l,.2,c,.34,.5,.34);et(this.scene,$.sph,Vt(h<2?16730832:3531007,h<2?16730832:3531007,2),l,.6,c,.3)});let a=et(this.scene,$.disc,new xn({color:3524863,transparent:!0,opacity:.1,depthWrite:!1}),Ae,-2.5,we,13,13,1);a.rotation.x=-Math.PI/2}_base0(){let t=this.pbase=new xe;t.position.set(Ae,0,14.4),t.scale.setScalar(1.25),this.scene.add(t);let e=Vt(14674175,0,0,{m:.35,r:.3}),n=Vt(3531007,3531007,1.4);et(t,$.cyl,Vt(2764629,0,0,{m:.5}),0,.15,0,2.7,.3,2.7),et(t,$.cyl,n,0,.32,0,2.5,.04,2.5),et(t,$.cyl,e,0,.9,0,1.8,1.2,1.8),et(t,$.cyl,n,0,.8,0,1.86,.1,1.86),et(t,$.cyl,n,0,1.3,0,1.86,.06,1.86),et(t,$.cyl,e,0,1.7,0,1.4,.3,1.4),et(t,$.hem,Vt(10479871,3531007,.5,{t:.7,r:.1}),0,1.85,0,1.3,1.2,1.3),this.pcore=et(t,$.sph,Vt(16777215,3531007,2.4),0,2.15,0,.5),this.pcan=[-1,1].map(s=>{let r=ne(t,s*.85,1.2,-.3),o=et(r,$.cyl,Vt(3752058,0,0,{m:.6}),0,0,.35,.2,.8,.2);return o.rotation.x=Math.PI/2,et(r,$.sph,n,0,0,.78,.2),r}),et(t,$.cyl,Vt(2764629),0,2.8,0,.05,.9,.05),et(t,$.sph,Vt(16730832,16730832,2),0,3.3,0,.14),this.pshadow=Jl(1.6),this.pshadow.position.set(Ae,.02,14.7),this.scene.add(this.pshadow),this.pmeshes=[],t.traverse(s=>{s.isMesh&&this.pmeshes.push(s)}),this.pbaseLight=new Os(3531007,1.2,8),this.pbaseLight.position.set(Ae,2,14.7),this.scene.add(this.pbaseLight)}_ufo(){let t=this.ufo=new xe;t.position.set(Ae,0,1.3),this.scene.add(t);let e=Vt(10128064,4860554,.15,{m:.6,r:.25});this.uBody=ne(t,0,1.5,0);let n=this.uBody;et(n,$.sph,e,0,0,0,3,.7,3),et(n,$.tor,Vt(16730832,16730832,1.4),0,0,0,3.4,3.4,3.4).rotation.x=Math.PI/2,et(n,$.hem,Vt(10157962,4915002,.35,{t:.55,r:.05}),0,.2,0,1.7,1.5,1.7);let s=ne(n,0,.35,0);et(s,$.sph,Vt(os.body,2686768,.4),0,.25,0,.55,.5,.5),Un(s,-.12,.32,.22,.2),Un(s,.12,.32,.22,.2),[-1,1].forEach(r=>{et(s,$.cyl,Vt(os.dark),r*.14,.6,0,.03,.2,.03).rotation.z=-r*.4,et(s,$.sph,Vt(16730832,16730832,2),r*.22,.7,0,.07)}),this.uLights=[];for(let r=0;r<10;r++){let o=r/10*as;this.uLights.push(et(n,$.sph,Vt(16771178,16771178,2),Math.cos(o)*1.45,-.05,Math.sin(o)*1.45,.2))}this.uBeam=et(t,$.cone,new xn({color:16739039,transparent:!0,opacity:.16,depthWrite:!1}),0,.75,0,2.6,1.5,2.6),this.uBeam.rotation.x=Math.PI,this.ushadow=Jl(1.7),this.ushadow.position.set(Ae,.02,1.3),this.scene.add(this.ushadow),this.umeshes=[],t.traverse(r=>{r.isMesh&&this.umeshes.push(r)}),this.ulight=new Os(16730832,1.4,9),this.ulight.position.set(Ae,2.8,1.3),this.scene.add(this.ulight)}_deco(){this.rocks=[];let t=11,e=()=>(t=t*16807%2147483647,t/2147483647);for(let s=0;s<16;s++){let r=s%2?1:-1,o=s%3?3531007:16730832,a=et(this.scene,$.ico,Vt(4864666,o,.45,{r:.3,m:.3}),Ae+r*(7+e()*9),-1-e()*6,-3+e()*24,.8+e()*1.8,1+e()*2,.8+e()*1.5);a.userData={sp:.1+e()*.3,ph:e()*as,y0:a.position.y},this.rocks.push(a)}let n=et(this.scene,$.sph,Vt(16747224,16726704,.4,{r:.8}),Ae-22,14,-30,18);et(this.scene,$.tor,Vt(10148095,5814527,.8),Ae-22,14,-30,34,34,34).rotation.x=1.2,et(this.scene,$.sph,Vt(7002367,2662655,.5,{r:.8}),Ae+26,10,-34,8)}setSize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}fit(t,e){let n=this.camera,s=this.w,r=this.h,o=.86,a=new R(Ae,0,we+.4),l=p=>{n.position.set(a.x,a.y+Math.sin(o)*p,a.z+Math.cos(o)*p),n.lookAt(a),n.clearViewOffset(),n.updateProjectionMatrix(),n.updateMatrixWorld(!0)},c=()=>this.project(Ae,Ql,0)[1]-this.project(Ae,0,0)[1],h=()=>this.project(10,we,0)[0]-this.project(0,we,0)[0],u=(e-t)*.94,f=s-12,d=6,m=200;for(let p=0;p<28;p++){let b=(d+m)/2;l(b),c()>u||h()>f?d=b:m=b}l(m);let A=this.project(Ae,we,0)[1],g=(t+e)/2;n.setViewOffset(s,r,0,A-g,s,r),n.updateMatrixWorld(!0),this.base=n.position.clone()}project(t,e,n=0){let s=new R(t,n,e).project(this.camera);return[(s.x+1)/2*this.w,(1-s.y)/2*this.h]}unproject(t,e){let n=this.camera,s=new R(t/this.w*2-1,1-e/this.h*2,.5).unproject(n),r=n.position,o=s.sub(r),a=-r.y/o.y;return[r.x+o.x*a,r.z+o.z*a]}burst(){}_unitObj(t){let e=this.pool.get(t.id);if(!e){let n=sA[t.kind](),s=rA[t.kind];n.g.scale.setScalar(s*1.6);let r=new xe;r.add(n.g);let o=Jl(t.r);this.scene.add(o),this.scene.add(r),e={o:r,b:n,sd:o,h:s,ph:t.id*1.7},this.pool.set(t.id,e)}return e}render(t,e,n=0){var u;let s=Math.min(.05,Math.max(0,e-((u=this.lc)!=null?u:e)));if(this.lc=e,this.t=e,this.base){let f=n*.012;this.camera.position.set(this.base.x+(Math.random()-.5)*f,this.base.y+(Math.random()-.5)*f,this.base.z)}for(let f of this.rocks)f.rotation.y+=f.userData.sp*s,f.rotation.x+=f.userData.sp*.5*s,f.position.y=f.userData.y0+Math.sin(e*.6+f.userData.ph)*.4;let[r,o]=t.bases,a=r.flash>0?1:0,l=o.flash>0?1:0;this.pbase.visible=r.hp>0,this.pshadow.visible=r.hp>0,this.ufo.visible=o.hp>0,this.ushadow.visible=o.hp>0,this.pbase.scale.setScalar(1+(r.flash>0?.03:0)),this.pcore.scale.setScalar(.5+Math.sin(e*4)*.06);for(let f of this.pmeshes)f.material.emissive;this.pbaseLight.intensity=1.2+a*2+Math.sin(e*3)*.2,this.ulight.intensity=1.4+l*3,this.pcan.forEach((f,d)=>{f.rotation.y=Math.sin(e*.8+d)*.3,f.position.z=-.3+(r.atk>0?-.12:0)}),this.uBody.position.y=1.5+Math.sin(e*1.7)*.18,this.uBody.rotation.y=e*.5,this.uBody.rotation.z=Math.sin(e*1.3)*.05,this.uBeam.material.opacity=.12+Math.sin(e*5)*.04,this.ufo.position.x=Ae+(o.hp>0?Math.sin(e*.7)*.25:0),this.ushadow.position.x=this.ufo.position.x,this.uLights.forEach((f,d)=>{let m=Math.floor(e*6+d)%3===0;f.scale.setScalar(m?.3:.17)});let c=new Set;for(let{u:f,x:d,y:m}of t.units){c.add(f.id);let A=this._unitObj(f),g=A.b.P,p=f.spawn>0?1-f.spawn/.45:1,b=p<1?1-Math.pow(1-p,3):1,C=e*10+A.ph,x=f.moving?1:0;A.o.position.set(d,p<1?(1-b)*3:0,m),A.o.rotation.y=Math.PI/2-f.ang,A.o.scale.setScalar(b*(1+(p<1?.2*Math.sin(p*Math.PI):0))),A.sd.position.set(d,.02,m),A.sd.scale.setScalar(f.r*2.3*(.6+b*.4)),A.sd.material.opacity=.4*b;let P=Math.min(1,f.atk/.2);if(g.legs.length&&g.legs.forEach((S,V)=>{S.userData.p!==void 0?(S.rotation.x=Math.sin(C*1.6+S.userData.p)*.5*(x+.1),S.rotation.z=0):S.rotation.x=Math.sin(C+V*Math.PI)*.7*x}),g.root&&!g.fly&&g.kind!=="slime"&&(g.root.position.y=Math.abs(Math.sin(C))*.05*x+(g.kind==="bug",0)),g.fly&&(g.root.position.y=.5+Math.sin(e*5+A.ph)*.08,g.rotor.rotation.y=e*40,g.root.rotation.z=Math.sin(e*3+A.ph)*.08),g.arms.length&&g.arms.forEach((S,V)=>{let I=Math.sin(C+V*Math.PI+Math.PI/2)*.7*x;S.rotation.x=g.kind==="blaster"&&V===1?-.4-P*.4:I-P*2.2}),g.kind==="slime"){let S=1+Math.sin(e*7+A.ph)*.07*(.4+x);g.body.scale.set(1/S,S-P*.25,1/S)}(g.kind==="bug"||g.kind==="brute"||g.kind==="spitter")&&(g.torso.rotation.x=P*.4+(g.kind==="brute"?.12:0)),g.kind==="turret"&&(g.turn.rotation.y=0,g.barrel.position.z=.3-P*.15),g.kind==="spitter"&&g.sac.scale.setScalar(.3*(1+.15*Math.sin(e*6)+P*.4)),g.head&&g.head!==g.torso&&(g.head.rotation.z=Math.sin(e*3+A.ph)*.05);let E=f.flash>0?1:0;A.f!==E&&(A.f=E,g.shine.forEach(S=>{if(E){S.userData.om||(S.userData.om=S.material);let V=S.material.clone();V.emissive=new qt(16777215),V.emissiveIntensity=.9,S.material=V}else S.userData.om&&(S.material.dispose(),S.material=S.userData.om)}))}for(let[f,d]of this.pool)c.has(f)||(this.scene.remove(d.o),this.scene.remove(d.sd),this.pool.delete(f));let h=new Set;for(let f of t.projs){h.add(f.p);let d=this.projs.get(f.p);if(!d){let m=f.p.kind==="goo";if(d=new xe,m)et(d,$.sph,Vt(12124e3,8060720,1.4),0,0,0,.36),et(d,$.sph,Vt(15269808,15269808,1.4,{t:.8}),.05,.07,.05,.14);else{let A=f.p.side===0?3531007:16728016;et(d,$.sph,Vt(16777215,A,2.2),0,0,0,.22,.22,.55),et(d,$.sph,Vt(A,A,1.6,{t:.5}),0,0,0,.4,.4,.95)}this.scene.add(d),this.projs.set(f.p,d)}d.position.set(f.x,.9,f.y),d.rotation.y=Math.atan2(f.dx,f.dy)}for(let[f,d]of this.projs)h.has(f)||(this.scene.remove(d),this.projs.delete(f));this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose()}};function lt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Au(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function xu(i,t,e,n="#ffd23a"){return`
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
`}var lA={title:["\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0643\u0631\u0648\u062A \u0627\u0644\u0646\u064A\u0648\u0646","Neon Card Battle"],play:["\u064A\u0644\u0627 \u0646\u0642\u0627\u062A\u0644!","Battle!"],exit:["\u062E\u0631\u0648\u062C","Exit"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],again:["\u0645\u0631\u0629 \u062A\u0627\u0646\u064A\u0629","Play again"],resume:["\u0643\u0645\u0651\u0644","Resume"],paused:["\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A","Paused"],howBtn:["\u0625\u0632\u0627\u064A \u0623\u0644\u0639\u0628\u061F","How to play"],diff:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0635\u0639\u0648\u0628\u0629","Choose difficulty"],easy:["\u0633\u0647\u0644","Easy"],normal:["\u0639\u0627\u062F\u064A","Normal"],hard:["\u0635\u0639\u0628","Hard"],expert:["\u062E\u0628\u064A\u0631","Expert"],legend:["\u0623\u0633\u0637\u0648\u0631\u0629","Legend"],next:["\u0627\u0644\u062A\u0627\u0644\u064A","NEXT"],hint:["\u0627\u0633\u062D\u0628 \u0643\u0627\u0631\u062A \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u062D\u0629","DRAG A CARD ONTO THE FIELD"],hintTap:["\u062F\u0648\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u062D\u0629 \u0639\u0634\u0627\u0646 \u062A\u0646\u0632\u0651\u0644\u0647","Tap the field to drop it"],win:["\u0627\u0646\u062A\u0635\u0631\u062A! \u{1F3C6}","Victory! \u{1F3C6}"],lose:["\u062E\u0633\u0631\u0646\u0627 \u0627\u0644\u0645\u0639\u0631\u0643\u0629","Defeat"],draw:["\u062A\u0639\u0627\u062F\u0644","Draw"],winText:["\u062F\u0645\u0651\u0631\u062A \u0627\u0644\u0643\u0627\u0626\u0646 \u0627\u0644\u0641\u0636\u0627\u0626\u064A!","You beat the Alien Overlord!"],timeWin:["\u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u0628\u062A\u0627\u0639\u062A\u0643 \u0623\u0642\u0648\u0649!","Your base was stronger!"],loseText:["\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0628\u0643\u0631\u0648\u062A \u0645\u062E\u062A\u0644\u0641\u0629","Try again with different cards"],drawText:["\u0627\u0644\u0627\u062A\u0646\u064A\u0646 \u0645\u062A\u0633\u0627\u0648\u064A\u064A\u0646!","Both bases were equal!"],baseLeft:["\u0635\u062D\u0629 \u0627\u0644\u0642\u0627\u0639\u062F\u0629","Base health"],time:["\u0627\u0644\u0648\u0642\u062A","Time"],kills:["\u0623\u0639\u062F\u0627\u0621 \u062F\u0645\u0651\u0631\u062A\u0647\u0645","Enemies destroyed"],double:["\u0627\u0644\u0637\u0627\u0642\u0629 \xD7\u0662 !","Energy \xD72 !"],go:["\u0642\u062A\u0627\u0644!","FIGHT!"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],soundOn:["\u0627\u0644\u0635\u0648\u062A \u0634\u063A\u0651\u0627\u0644","Sound on"],soundOff:["\u0627\u0644\u0635\u0648\u062A \u0645\u0642\u0641\u0648\u0644","Sound off"],tUnit:["\u0648\u062D\u062F\u0629","UNIT"],tSpell:["\u0633\u062D\u0631","SPELL"],tBuild:["\u0645\u0628\u0646\u0649","BUILDING"],d_spark:["\u0631\u0648\u0628\u0648\u062A \u0633\u0631\u064A\u0639 \u0628\u064A\u0636\u0631\u0628 \u0645\u0646 \u0642\u0631\u064A\u0628.","Fast little robot. Hits up close."],d_blaster:["\u0631\u0627\u0645\u064A \u0644\u064A\u0632\u0631 \u0628\u064A\u0636\u0631\u0628 \u0645\u0646 \u0628\u0639\u064A\u062F.","Laser shooter. Hits from afar."],d_smash:["\u0645\u062F\u0631\u0651\u0639 \u062A\u0642\u064A\u0644 \u0648\u0642\u0648\u064A \u062C\u062F\u064B\u0627.","Heavy and very strong."],d_swarm:["\u0663 \u0631\u0648\u0628\u0648\u062A\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u0633\u0631\u064A\u0639\u0629.","Three small fast robots."],d_turret:["\u0628\u0631\u062C \u0628\u0644\u0627\u0632\u0645\u0627 \u0628\u064A\u0636\u0631\u0628 \u0648\u064A\u062E\u062A\u0641\u064A \u0628\u0639\u062F \u0634\u0648\u064A\u0629.","Plasma turret. Fires, then fades away."],d_plasma:["\u0645\u0648\u062C\u0629 \u062A\u0636\u0631\u0628 \u0643\u0644 \u0627\u0644\u0644\u064A \u0641\u064A \u0627\u0644\u062F\u0627\u064A\u0631\u0629.","A wave that hits everything in the circle."],d_blackhole:["\u062B\u0642\u0628 \u0628\u064A\u0634\u062F\u0651 \u0627\u0644\u0623\u0639\u062F\u0627\u0621 \u0648\u064A\u0623\u0630\u064A\u0647\u0645.","Pulls enemies in and hurts them."],d_repair:["\u0645\u062C\u0627\u0644 \u0628\u064A\u0639\u0627\u0644\u062C \u0631\u0648\u0628\u0648\u062A\u0627\u062A\u0643.","A field that heals your robots."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],how1:["\u0661) \u0627\u0633\u062D\u0628 \u0643\u0627\u0631\u062A \u0645\u0646 \u0625\u064A\u062F\u0643 \u0639\u0644\u0649 \u0646\u0635\u0641\u0643 \u0645\u0646 \u0627\u0644\u0633\u0627\u062D\u0629","1) Drag a card onto your half of the arena"],how2:["\u0662) \u0627\u0644\u0631\u0648\u0628\u0648\u062A\u0627\u062A \u0628\u062A\u0642\u0627\u062A\u0644 \u0644\u0648\u062D\u062F\u0647\u0627","2) Robots fight by themselves"],how3:["\u0663) \u0627\u0644\u0637\u0627\u0642\u0629 \u0628\u062A\u062A\u0634\u062D\u0646 \u0645\u0639 \u0627\u0644\u0648\u0642\u062A \u2014 \u0627\u0644\u0643\u0631\u0648\u062A \u0628\u062A\u0643\u0644\u0651\u0641 \u0637\u0627\u0642\u0629","3) Energy refills over time \u2014 cards cost energy"],how4:["\u0664) \u0627\u0644\u0645\u0648\u062C\u0629 \u0648\u0627\u0644\u062B\u0642\u0628 \u0648\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u062A\u0646\u0632\u0644 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646","4) Spells can go anywhere on the field"],how5:["\u0665) \u0641\u064A \u0622\u062E\u0631 \u062F\u0642\u064A\u0642\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0628\u062A\u062A\u0634\u062D\u0646 \u0636\u0639\u0641 \u0627\u0644\u0633\u0631\u0639\u0629!","5) In the last minute energy flows twice as fast!"],how6:["\u062F\u0645\u0651\u0631 \u0627\u0644\u0637\u0628\u0642 \u0627\u0644\u0637\u0627\u0626\u0631 \u0623\u0648 \u062E\u0644\u0651\u064A \u0642\u0627\u0639\u062F\u062A\u0643 \u0623\u0642\u0648\u0649 \u0644\u0645\u0627 \u0627\u0644\u0648\u0642\u062A \u064A\u062E\u0644\u0635","Destroy the UFO, or keep a stronger base when time is up"],back:["\u0631\u062C\u0648\u0639","Back"],low:["\u0637\u0627\u0642\u0629 \u0646\u0627\u0642\u0635\u0629","Not enough energy"],spark:["\u0634\u0631\u0627\u0631\u0629","Spark"],blaster:["\u0631\u0627\u0645\u064A","Blaster"],smash:["\u0645\u062F\u0631\u0651\u0639","Smasher"],swarm:["\u0633\u0631\u0628","Swarm"],turret:["\u0628\u0631\u062C","Turret"],plasma:["\u0645\u0648\u062C\u0629 \u0628\u0644\u0627\u0632\u0645\u0627","Plasma Wave"],blackhole:["\u062B\u0642\u0628 \u0623\u0633\u0648\u062F","Black Hole"],repair:["\u0645\u062C\u0627\u0644 \u0625\u0635\u0644\u0627\u062D","Repair Field"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"]},Pt=Au(lA),en=Math.PI*2,tc={0:"#35e0ff",1:"#ff3fd0"},ec=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),Pt.setLang(e.lang),Pt.setGirl(e.gender==="girl"),this.save=Ca(e.save),this.base=e.base||"./",this.sound=new Ii,this.sound.muted=!!this.save.muted,this.diff=this.save.diff,document.getElementById("cb-style")||document.head.append(lt("style",{id:"cb-style"},xu("cb","#3a2a8a","#12083a","#35f0ff")+cA)),this.root=lt("div",{class:"cb-root",dir:Pt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.view=new pa,this.root.append(this.view.dom),this.cv=lt("canvas"),this.root.append(this.cv),this.g=this.cv.getContext("2d"),this.layer=lt("div",{class:"cb-layer"}),this.root.append(this.layer),this.mode="menu",this.clock=0,this.parts=[],this.texts=[],this.beams=[],this.fxs=[],this.shake=0,this.drag=null,this.sel=-1,this.battle=new yi({seed:1,difficulty:this.diff}),this.icons={};for(let s of Object.keys(We)){let r=lt("canvas");r.width=r.height=128,yc(r.getContext("2d"),s,128),this.icons[s]=r}this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),Promise.all([this._fonts(),_a(this.base||e.base,["unit_spark","unit_blaster","unit_brute","unit_bug","unit_slime","unit_smash","unit_spitter","unit_turret","base","ufo"]).then(vc),_a(this.base||e.base,["avatar_robot","avatar_alien","bg_menu"]).then(s=>{this.pics=s})]).then(()=>{this.showMenu(),this._loop()})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.view.setSize(this.cw,this.ch),this.cv.width=Math.round(this.cw*this.dpr),this.cv.height=Math.round(this.ch*this.dpr),this.u=Math.min(this.cw,this.ch*.62)/100,this.root.style.setProperty("--u",`${Math.min(this.u,6.2)}px`),this._proj()}_proj(){let t=this.cw,e=this.ch,n=this.topEl?this.topEl.offsetTop+this.topEl.offsetHeight:e*.14,s=this.botEl?this.botEl.offsetHeight:e*.27,r=n+4,o=e-s-2;this.cx=t/2,this.view.fit(r+4,o-Math.max(30,(o-r)*.1))}sc(t){let e=this.view.project(be,t,0),n=this.view.project(be+1,t,0);return Math.abs(n[0]-e[0])}sy(t){return this.view.project(be,t,0)[1]}P(t,e,n=0){return this.view.project(t,e,n)}inv(t,e){return this.view.unproject(t,e)}ell(t,e,n){let[s,r]=this.P(t,e),o=n*this.sc(e),a=Math.abs(this.sy(e+n)-this.sy(e-n))/2;return[s,r,o,a]}_poly(t,e){t.beginPath(),e.forEach(([n,s],r)=>{let[o,a]=this.P(n,s);r?t.lineTo(o,a):t.moveTo(o,a)}),t.closePath()}_hexPts(){return[[be-3.6,0],[be+3.6,0],[10,Xe],[be+3.6,Qn],[be-3.6,Qn],[0,Xe]]}_bind(){let t=()=>this.sound.unlock();for(let e of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(e,t,{capture:!0,passive:!0});this.cv.addEventListener("pointerdown",e=>{if(this.mode!=="play"||this.sel<0)return;let[n,s]=this._world(e.clientX,e.clientY,0);this._tryPlay(this.sel,n,s)}),this._onKey=e=>{if(e.key==="Escape"){this.mode==="play"?this.pauseGame():this.mode==="pause"&&this.resumeGame();return}if(this.mode==="play"&&/^[1-4]$/.test(e.key)){let n=Number(e.key)-1;this.sel=this.sel===n?-1:n}},window.addEventListener("keydown",this._onKey),this._onMove=e=>{this.pointer=[e.clientX,e.clientY]},this.cv.addEventListener("pointermove",this._onMove),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&this.pauseGame()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_world(t,e,n){let s=this.cv.getBoundingClientRect();return this.inv(t-s.left,e-s.top-n)}_cardDown(t,e){if(this.mode!=="play")return;t.preventDefault(),this.cardEls[e].el.setPointerCapture(t.pointerId),this.drag={slot:e,id:this.battle.deck.hand[e],sx:t.clientX,sy:t.clientY,x:t.clientX,y:t.clientY,moved:!1,touch:t.pointerType!=="mouse"},this.sound.play("pick"),this._info(this.drag.id)}_info(t){if(!this.infoEl)return;if(!t){this.infoEl.classList.remove("show");return}let n=We[t].type==="spell"?"tSpell":t==="turret"?"tBuild":"tUnit";this.infoEl.replaceChildren(lt("b",{},Pt.t(t)),lt("i",{},Pt.t(n)),lt("span",{},Pt.t("d_"+t))),this.infoEl.style.bottom=`${this.botEl.offsetHeight+8}px`,this.infoEl.classList.add("show")}_cardMove(t){let e=this.drag;e&&(e.x=t.clientX,e.y=t.clientY,!e.moved&&Math.hypot(e.x-e.sx,e.y-e.sy)>9&&(e.moved=!0),this._ghost())}_cardUp(t,e){let n=this.drag;if(!n||(this.drag=null,this.ghostEl.style.display="none",this._info(null),e||this.mode!=="play"))return;if(!n.moved){this.sel=this.sel===n.slot?-1:n.slot;return}let s=this.cv.getBoundingClientRect();if(!(t.clientY<this.botEl.getBoundingClientRect().top&&t.clientY>s.top))return;let[o,a]=this._world(t.clientX,t.clientY,n.touch?40:0);this._tryPlay(n.slot,o,a)}_ghost(){let t=this.drag,e=this.ghostEl,n=t.moved&&t.y<this.botEl.getBoundingClientRect().top;e.style.display=t.moved&&!n?"block":"none";let s=this.root.getBoundingClientRect();if(e.style.left=`${t.x-s.left}px`,e.style.top=`${t.y-s.top-30}px`,e.dataset.id!==t.id){e.dataset.id=t.id;let r=e.firstChild;r.getContext("2d").clearRect(0,0,128,128),r.getContext("2d").drawImage(this.icons[t.id],0,0)}}_tryPlay(t,e,n){let s=this.battle,r=s.deck.hand[t],o=s.play(t,e,n);if(o){this.sel=-1;let a=this.cardEls[t].el;a.classList.remove("pop"),a.offsetWidth,a.classList.add("pop")}else{this.sound.play("nope");let a=this.cardEls[t].el;a.classList.remove("shake"),a.offsetWidth,a.classList.add("shake"),r&&s.energy<We[r].cost&&(this.engEl.classList.remove("flash"),this.engEl.offsetWidth,this.engEl.classList.add("flash"))}return o}_soundPill(){let t=lt("button",{class:"cb-soundpill",onclick:()=>this.sound.unlock()},Pt.t("sound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_stars(t,e){return lt("div",{class:"cb-stars"},[0,1,2].map(n=>lt("span",{class:n<t?"":"off",style:e?`animation:cbstar .5s ${.3+n*.35}s both`:""},"\u2B50")))}_menuPic(t){let e=this.pics&&this.pics.bg_menu;this.root.style.background=t&&e?`#07041a url(${e.src}) center/cover no-repeat`:"",this.cv.style.visibility=t&&e?"hidden":"",this.view.dom.style.visibility=t&&e?"hidden":""}_av(t,e){let n=this.pics&&this.pics["avatar_"+t];return lt("div",{class:`cb-av ${t}`,style:n?`background:url(${n.src}) center/cover no-repeat;font-size:0`:""},n?"":e)}showMenu(){this.mode="menu",this.layer.replaceChildren(),this.topEl=this.botEl=null,this._proj(),this._menuPic(!0),this.sound.setMode(!1),this.drag=null,this.sel=-1,this.battle=new yi({seed:1,difficulty:this.diff}),this.parts=[],this.texts=[],this.beams=[],this.fxs=[];let t=["easy","normal","hard","expert","legend"].map(e=>lt("button",{class:`cb-diff${e===this.diff?" on":""}`,onclick:()=>{this.diff=e,this.sound.play("tap"),this.showMenu()}},lt("b",{},Pt.t(e)),this._stars(this.save.stars[e])));this.layer.append(lt("div",{class:"cb-dim"},lt("div",{class:"cb-card"},lt("div",{class:"cb-logo"},Pt.t("title")),lt("div",{class:"cb-small"},Pt.t("diff")),lt("div",{class:"cb-diffs"},t),lt("button",{class:"cb-btn",onclick:()=>{this.sound.unlock(),this.sound.play("tap"),this.start()}},Pt.t("play")),lt("button",{class:"cb-btn dark",onclick:()=>this.showHow()},Pt.t("howBtn")),lt("button",{class:"cb-btn dark",onclick:()=>this.post({type:"exit"})},Pt.t("exit"))))),this._soundPill()}showHow(){let t=this.mode==="pause"?()=>this.showPause():()=>this.showMenu();this.layer.append(lt("div",{class:"cb-dim",style:"background:rgba(5,2,20,.9)"},lt("div",{class:"cb-card"},lt("div",{class:"cb-title"},Pt.t("howBtn")),["how1","how2","how3","how4","how5","how6"].map(e=>lt("div",{class:"cb-small",style:"width:100%;text-align:start"},Pt.t(e))),lt("button",{class:"cb-btn dark",onclick:()=>{this.layer.lastChild.remove(),this.mode==="menu"&&this.showMenu()}},Pt.t("back")))))}start(){this._menuPic(!1),this.mode="play",this.layer.replaceChildren(),this.parts=[],this.texts=[],this.beams=[],this.fxs=[],this.sel=-1,this.endT=0,this.shake=0,this.battle=new yi({seed:(Date.now()&16777215)+1,difficulty:this.diff}),this.sound.setMode(!0),this.hintOn=!this.save.tutorial;let t=this.battle;this.timerEl=lt("span",{},"2:30"),this.x2El=lt("span",{class:"cb-x2"},"\xD72"),this.eHp=lt("b",{}),this.eTx=lt("span",{}),this.pHp=lt("b",{}),this.pTx=lt("span",{}),this.infoEl=lt("div",{class:"cb-info"}),this.pauseBtn=lt("button",{class:"cb-round cb-pausebtn","aria-label":Pt.t("paused"),onclick:()=>this.pauseGame()},"\u23F8"),this.topEl=lt("div",{class:"cb-topw"},lt("div",{class:"cb-toprow"},this._av("robot","\u{1F916}"),lt("div",{class:"cb-vb robot"},this.pHp),lt("div",{class:"cb-pill cb-timer"},this.timerEl,this.x2El),lt("div",{class:"cb-vb alien"},this.eHp),this._av("alien","\u{1F47E}")),lt("div",{class:"cb-hpnums"},lt("span",{class:"robot"},this.pTx),lt("span",{class:"alien"},this.eTx))),this.cardEls=[0,1,2,3].map(e=>{let n=lt("canvas",{width:128,height:128}),s=lt("div",{class:"cost"}),r=lt("div",{class:"nm"});return{el:lt("div",{class:"cb-c",tabindex:0,role:"button",onpointerdown:a=>this._cardDown(a,e),onpointermove:a=>this._cardMove(a),onpointerup:a=>this._cardUp(a,!1),onpointercancel:a=>this._cardUp(a,!0)},n,s,r),cv:n,cost:s,nm:r,id:null}}),this.nextCv=lt("canvas",{width:128,height:128}),this.nextId=null,this.eFill=lt("b",{}),this.eNum=lt("div",{class:"cb-enum"},"5"),this.engEl=lt("div",{class:"cb-energy"},this.eFill,lt("div",{class:"seg"})),this.botEl=lt("div",{class:"cb-bot"},lt("div",{class:"cb-erow"},lt("div",{class:"cb-next"},lt("div",{class:"cb-nextl"},Pt.t("next")),this.nextCv),this.eNum,this.engEl),lt("div",{class:"cb-hand"},this.cardEls.map(e=>e.el))),this.ghostEl=lt("div",{class:"cb-ghost"},lt("canvas",{width:128,height:128})),this.hintEl=lt("div",{class:"cb-hint show"},lt("span",{class:"cb-finger"},"\u{1F446}"),lt("span",{},Pt.t("hint"))),this.banner=lt("div",{class:"cb-banner"}),this.layer.append(this.topEl,this.pauseBtn,this.botEl,this.infoEl,this.hintEl,this.banner),this.root.append(this.ghostEl),this._proj(),this._say(Pt.t("go")),this._soundPill(),this._hud(!0)}_say(t){this.banner.textContent=t,this.banner.classList.remove("go"),this.banner.offsetWidth,this.banner.classList.add("go")}_toggleSound(){this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this.soundBtn&&(this.soundBtn.textContent=this.sound.muted?"\u{1F507} "+Pt.t("soundOff"):"\u{1F50A} "+Pt.t("soundOn")),this.post({type:"save",save:this.save})}pauseGame(){this.mode==="play"&&(this.mode="pause",this.drag=null,this.ghostEl&&(this.ghostEl.style.display="none"),this.sound.suspend(),this.showPause())}showPause(){this.pauseEl&&this.pauseEl.remove(),this.pauseEl=lt("div",{class:"cb-dim"},lt("div",{class:"cb-card"},lt("div",{class:"cb-title"},Pt.t("paused")),lt("button",{class:"cb-btn",onclick:()=>this.resumeGame()},Pt.t("resume")),lt("button",{class:"cb-btn dark",onclick:()=>{this.pauseEl.remove(),this.start()}},Pt.t("restart")),lt("button",{class:"cb-btn dark",onclick:()=>this.showHow()},Pt.t("howBtn")),this.soundBtn=lt("button",{class:"cb-btn dark",onclick:()=>this._toggleSound()},this.sound.muted?"\u{1F507} "+Pt.t("soundOff"):"\u{1F50A} "+Pt.t("soundOn")),lt("button",{class:"cb-btn dark",onclick:()=>{this.pauseEl.remove(),this.showMenu()}},Pt.t("menu")))),this.layer.append(this.pauseEl)}resumeGame(){this.mode==="pause"&&(this.pauseEl&&this.pauseEl.remove(),this.mode="play",this.last=performance.now(),this.sound.resume())}_result(){let t=this.battle,e=t.over;this.save=Ac(this.save,this.diff,e),this.post({type:"save",save:this.save}),this.mode="result";let n=e.state==="won",s=n?Pt.t("win"):e.state==="lost"?Pt.t("lose"):Pt.t("draw"),r=n?t.base[1].hp<=0?Pt.t("winText"):Pt.t("timeWin"):e.state==="lost"?Pt.t("loseText"):Pt.t("drawText"),o=`${Math.floor(e.time/60)}:${String(Math.floor(e.time%60)).padStart(2,"0")}`;if(this.sound.setMode(!1),this.sound.play(n?"win":"lose"),n)for(let a=0;a<e.stars;a++)setTimeout(()=>this.sound.play("star"),300+a*350);this.layer.replaceChildren(lt("div",{class:"cb-dim"},lt("div",{class:"cb-card"},lt("div",{class:"cb-title",style:n?"":"color:#ff9ad8"},s),lt("div",{class:"cb-small"},r),this._stars(e.stars,!0),lt("div",{class:"cb-pill"},`${Pt.t("baseLeft")}: ${Pt.num(Math.round(e.baseFrac*100))}%`),lt("div",{class:"cb-small"},`${Pt.t("time")} ${Pt.num(o)} \xB7 ${Pt.t("kills")}: ${Pt.num(t.stats.kills)}`),n?lt("div",{class:"cb-small"},Pt.t("win_"+(this.girl?"f":"m"))):null,lt("button",{class:"cb-btn",onclick:()=>this.start()},Pt.t("again")),lt("button",{class:"cb-btn dark",onclick:()=>this.showMenu()},Pt.t("menu")))))}_loop(){let t=e=>{if(!this.root.isConnected)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.clock+=n,this.mode==="play"?this._update(n):this.mode==="menu"&&this._ambient(n),this.mode!=="pause"&&this._fx(n),this._draw(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}_ambient(t){if(Math.random()<t*3){let e=1+Math.random()*8,n=2+Math.random()*12;this._spark(e,n,.3,Math.random()<.5?"#35e0ff":"#ff3fd0",2,.6)}}_update(t){let e=this.battle;if(e.state==="play"){let n=e.step(t);for(let s of n)this._event(s);this._hud(!1)}else this.endT+=t,this.endT>1.3&&this._result()}_hud(t){let e=this.battle,n=Math.ceil(e.timeLeft),s=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;(s!==this.lastTx||t)&&(this.timerEl.textContent=Pt.num(s),this.lastTx=s,this.timerEl.parentNode.classList.toggle("hurry",n<=10)),this.x2El.style.display=e.doubled?"inline":"none",this.eHp.style.height=`${Math.max(0,e.base[1].hp/e.base[1].max*100)}%`,this.eTx.textContent=Pt.num(Math.ceil(e.base[1].hp)),this.pHp.style.height=`${Math.max(0,e.base[0].hp/e.base[0].max*100)}%`,this.pTx.textContent=Pt.num(Math.ceil(e.base[0].hp));let r=e.energy;if(this.eFill.style.width=`${r/us*100}%`,this.eNum.textContent=Pt.num(Math.floor(r)),this.engEl.classList.toggle("x2",e.doubled),this.eNum.classList.toggle("x2",e.doubled),this.engEl.classList.toggle("full",r>=us-.01),e.deck.hand.forEach((o,a)=>{let l=this.cardEls[a];if(l.id!==o){l.id=o;let c=l.cv.getContext("2d");c.clearRect(0,0,128,128),c.drawImage(this.icons[o],0,0),l.cost.textContent=Pt.num(We[o].cost),l.nm.textContent=Pt.t(o),l.el.setAttribute("aria-label",`${Pt.t(o)} ${We[o].cost}`)}l.el.classList.toggle("low",r<We[o].cost),l.el.classList.toggle("sel",this.sel===a),l.el.classList.toggle("drag",!!(this.drag&&this.drag.slot===a&&this.drag.moved))}),this.nextId!==e.deck.next){this.nextId=e.deck.next;let o=this.nextCv.getContext("2d");o.clearRect(0,0,128,128),o.drawImage(this.icons[this.nextId],0,0)}if(this.hintEl){let o=this.hintOn||this.sel>=0;this.hintEl.classList.toggle("show",o),this.hintEl.lastChild.textContent=this.sel>=0?Pt.t("hintTap"):Pt.t("hint"),this.hintEl.style.bottom=`${this.botEl.offsetHeight+8}px`}}_event(t){let e=this.sound;switch(t.type){case"deploy":e.play("deploy"),this._ring(t.x,t.y,1.1,tc[t.side]),this._burst(t.x,t.y,10,[tc[t.side],"#fff"],2.5),t.side===0&&!this.save.tutorial&&(this.save.tutorial=!0,this.hintOn=!1,this.post({type:"save",save:this.save}));break;case"shot":e.play(t.proj==="goo"?"goo":"laser"),this._spark(t.x,t.y,.9,t.proj==="goo"?"#9aff5a":"#7af8ff",3,.3);break;case"hit":e.play("hit"),this._burst(t.tx,t.ty,4,["#fff",tc[t.side]],2);break;case"impact":this._burst(t.x,t.y,5,[t.proj==="goo"?"#9aff5a":"#7af8ff","#fff"],2.2);break;case"dmg":this._float(t),t.base&&(e.play("baseHit"),this.shake=Math.max(this.shake,t.side===0?5:2));break;case"die":{this._burst(t.x,t.y,t.silent?8:22,t.side===0?["#35e0ff","#fff","#8aa0ff"]:["#ff3fd0","#a0ff5a","#fff"],4.5),this._ring(t.x,t.y,.9,t.side===0?"#35e0ff":"#ff3fd0"),e.play("boom");break}case"beam":this.beams.push({x:t.x,y:t.y,tx:t.tx,ty:t.ty,t:0,side:t.side}),e.play("beam");break;case"spell":{this.fxs.push({kind:t.kind,x:t.x,y:t.y,r:t.r,delay:t.delay,dur:t.dur,t:0,n:0}),e.play(t.kind==="blackhole"?"hole":t.kind);break}case"plasma":this._burst(t.x,t.y,36,["#35f0ff","#fff","#a0f0ff"],6),this.shake=Math.max(this.shake,7);break;case"heal":this.parts.push({x:t.x+(Math.random()-.5)*.6,y:t.y,z:.3,vx:0,vy:0,vz:1.4,life:.8,max:.8,col:"#7affa0",size:.2,kind:"plus"});break;case"double":e.play("double"),this._say(Pt.t("double")),e.setMode(!0,!0);break;case"win":case"lose":case"draw":this._endFx(t.type);break;default:break}}_endFx(t){let e=this.battle,n=t==="win"?e.base[1]:t==="lose"?e.base[0]:null;if(n&&n.hp<=0){for(let s=0;s<6;s++)setTimeout(()=>{this._burst(n.x+(Math.random()-.5)*2,n.y+(Math.random()-.5),28,["#ffd23a","#ff6a3a","#fff",n.side?"#ff3fd0":"#35e0ff"],6),this.sound.play("boom")},s*160);this.shake=10}}_burst(t,e,n,s,r){for(let o=0;o<n&&this.parts.length<420;o++){let a=Math.random()*en,l=(.4+Math.random())*r;this.parts.push({x:t,y:e,z:.4+Math.random()*.5,vx:Math.cos(a)*l,vy:Math.sin(a)*l*.8,vz:1+Math.random()*3,life:.5+Math.random()*.5,max:1,col:s[o%s.length],size:.07+Math.random()*.1,kind:"spark"})}}_spark(t,e,n,s,r,o){for(let a=0;a<r&&this.parts.length<420;a++)this.parts.push({x:t,y:e,z:n,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,vz:Math.random()*1.2,life:o,max:o,col:s,size:.08,kind:"spark"})}_ring(t,e,n,s){this.fxs.push({kind:"ring",x:t,y:e,r:n,delay:0,dur:.45,t:0,col:s})}_float(t){this.texts.length>30&&this.texts.shift();let e=t.side===0;this.texts.push({x:t.x+(Math.random()-.5)*.5,y:t.y,z:t.base?2.4:1.6,t:0,text:String(t.n),col:e?"#ff8aa8":"#ffe86a",big:t.base||t.n>=100})}_fx(t){for(let e of this.parts)e.life-=t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.kind==="spark"&&(e.vz-=9*t),e.z<0&&e.kind==="spark"&&(e.z=0,e.vz*=-.3);this.parts=this.parts.filter(e=>e.life>0);for(let e of this.texts)e.t+=t,e.z+=t*1.1;this.texts=this.texts.filter(e=>e.t<.9);for(let e of this.beams)e.t+=t;this.beams=this.beams.filter(e=>e.t<.22);for(let e of this.fxs){let n=e.t;if(e.t+=t,e.kind==="repair"&&e.t>e.delay&&Math.floor(e.t/.25)!==Math.floor(n/.25)){let s=Math.random()*en,r=Math.random()*e.r*.9;this.parts.push({x:e.x+Math.cos(s)*r,y:e.y+Math.sin(s)*r*.8,z:0,vx:0,vy:0,vz:1.3,life:.9,max:.9,col:"#7affa0",size:.22,kind:"plus"})}if(e.kind==="blackhole"&&e.t>e.delay&&e.t<e.delay+e.dur-.3&&Math.random()<.6){let s=Math.random()*en;this.parts.push({x:e.x+Math.cos(s)*e.r,y:e.y+Math.sin(s)*e.r*.8,z:.2,vx:-Math.cos(s)*e.r*1.3,vy:-Math.sin(s)*e.r*1,vz:0,life:.8,max:.8,col:"#c07aff",size:.09,kind:"spark",noG:!0})}e.kind==="blackhole"&&n<e.delay+e.dur&&e.t>=e.delay+e.dur&&(this.sound.play("holeEnd"),this._burst(e.x,e.y,14,["#c07aff","#fff"],4))}this.fxs=this.fxs.filter(e=>e.t<e.delay+e.dur+(e.kind==="plasma"?.6:.3)),this.shake=Math.max(0,this.shake-t*28)}_draw(){let t=this.g,e=this.dpr;t.setTransform(e,0,0,e,0,0),t.clearRect(0,0,this.cw,this.ch),this.shake>.1&&t.translate((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake);let n=this.battle,s=n.state==="play"&&this.mode==="play"?n.alpha:0,r={bases:n.base,units:[],projs:[]};for(let a of n.units)r.units.push({u:a,x:a.px+(a.x-a.px)*s,y:a.py+(a.y-a.py)*s});for(let a of n.projs){let l=a.t.x-a.x,c=a.t.y-a.y,h=Math.hypot(l,c)||1;r.projs.push({p:a,x:a.x+l/h*a.spd*Te*s,y:a.y+c/h*a.spd*Te*s,dx:l/h,dy:c/h})}this.view.render(r,this.clock,this.shake),this._zone(t);for(let a of this.fxs)this._drawField(t,a);let o=[];for(let a of n.base)o.push({y:a.y,f:()=>this._base(t,a)});for(let a of n.units){let l=a.px+(a.x-a.px)*s,c=a.py+(a.y-a.py)*s;o.push({y:c,f:()=>this._unit(t,a,l,c)})}o.sort((a,l)=>a.y-l.y);for(let a of o)a.f();this._ghostPreview(t);for(let a of this.beams)this._drawBeam(t,a);this._drawParts(t),t.textAlign="center";for(let a of this.texts){let[l,c]=this.P(a.x,a.y,a.z),u=this.sc(a.y)*(a.big?.95:.62);t.font=`900 ${u}px Tajawal, system-ui`,t.globalAlpha=Math.min(1,(.9-a.t)*3),t.lineWidth=u*.2,t.strokeStyle="rgba(10,0,40,.95)",t.strokeText(a.text,l,c),t.fillStyle=a.col,t.fillText(a.text,l,c)}t.globalAlpha=1}_zone(t){let e=this.drag&&this.drag.moved?this.drag.id:this.sel>=0?this.battle.deck.hand[this.sel]:null;if(!e||this.mode!=="play")return;let n=We[e].type==="spell",s=.5+.5*Math.sin(this.clock*6);t.save(),n?(this._poly(t,this._hexPts()),t.strokeStyle=`rgba(255,255,255,${.35+s*.4})`,t.lineWidth=3,t.stroke(),t.fillStyle="rgba(160,120,255,.1)",t.fill()):(this._poly(t,[[0,Xe],[10,Xe],[be+3.6,Qn],[be-3.6,Qn]]),t.fillStyle=`rgba(60,255,210,${.14+s*.1})`,t.fill(),t.setLineDash([10,7]),t.strokeStyle=`rgba(120,255,230,${.6+s*.3})`,t.lineWidth=3,t.stroke(),this._poly(t,[[be-3.6,0],[be+3.6,0],[10,Xe],[0,Xe]]),t.fillStyle="rgba(255,40,100,.1)",t.fill()),t.restore()}_ghostPreview(t){let e=this.drag&&this.drag.moved?this.drag:null,n=e?e.id:null;if(!n)return;let s=this.cv.getBoundingClientRect();if(e.y>=this.botEl.getBoundingClientRect().top||e.y<s.top)return;let[r,o]=this._world(e.x,e.y,e.touch?40:0),a=this.battle,l=We[n],c=a.zoneOk(n,r,o)&&a.energy>=l.cost,h=c?"60,255,200":"255,70,90",u=l.type==="spell"?Xs[l.spell].r:Be[l.unit].range>2?1:.7,[f,d,m,A]=this.ell(r,o,u);if(t.save(),t.fillStyle=`rgba(${h},.22)`,t.strokeStyle=`rgba(${h},.95)`,t.lineWidth=3,t.setLineDash(l.type==="spell"?[]:[6,5]),t.beginPath(),t.ellipse(f,d,m,A,0,0,en),t.fill(),t.stroke(),t.restore(),l.type==="unit"){t.save(),t.globalAlpha=c?.75:.35;let g=l.count===3?[[-.5,.2],[.5,.2],[0,-.35]]:[[0,0]];for(let[p,b]of g){let[C,x]=this.P(r+p,o+b);Ys(t,l.unit,C,x,this.sc(o),Be[l.unit].r,{t:this.clock,side:0,spawn:1})}if(t.restore(),Be[l.unit].range>2){let[,,p,b]=this.ell(r,o,Be[l.unit].range);t.save(),t.strokeStyle=`rgba(${h},.5)`,t.setLineDash([4,6]),t.beginPath(),t.ellipse(f,d,p,b,0,0,en),t.stroke(),t.restore()}}}_unit(t,e,n,s){let r=Be[e.kind],[o,a]=this.P(n,s),l=this.sc(s),c=e.r*l,h=e.spawn>0?1-e.spawn/.45:1;if(e.hp<e.max&&e.spawn<=0){let u=e.hp/e.max;fs(t,o,a-c*(r.building?3:e.r>.5?3.3:2.9),Math.max(c*2.2,18),Math.max(3,c*.28),u,u>.5?"#5aff9a":u>.25?"#ffd23a":"#ff4a5a")}r.building&&fs(t,o,a+c*.9,c*1.6,Math.max(2,c*.14),e.life/Be.turret.life,"#35e0ff")}_base(t,e){let[n,s]=this.P(e.x,e.y),r=this.sc(e.y),o=Jn*r,a={t:this.clock,flash:e.flash,atk:e.atk};if(e.hp<=0){ge(t,n,s-o*.3,o*1.2,"rgba(255,120,40,.6)");return}if(e.side===0)fs(t,n,s+o*.85,o*2.6,Math.max(5,o*.24),e.hp/e.max,"#35e0ff");else{let l=this.P(e.x,e.y,3.4)[1]+o*.3;fs(t,n,l-o*1.9,o*2.6,Math.max(5,o*.24),e.hp/e.max,"#ff3fd0")}}_proj2(t,e,n,s,r,o){let[a,l]=this.P(n,s,.9),c=this.sc(s),[h,u]=this.P(n-r*.5,s-o*.5,.9);if(e.kind==="goo"){ge(t,a,l,c*.45,"#9aff5a"),De(t,a,l,c*.16,c*.16,"#e8ffb0","#58d82a");return}t.save(),t.lineCap="round",t.globalCompositeOperation="lighter",t.strokeStyle=e.side===0?"#35e0ff":"#ff3fd0",t.lineWidth=c*.2,t.beginPath(),t.moveTo(h,u),t.lineTo(a,l),t.stroke(),t.strokeStyle="#fff",t.lineWidth=c*.07,t.stroke(),t.restore()}_drawBeam(t,e){let[n,s]=this.P(e.x,e.y,e.side===1?1.4:2),[r,o]=this.P(e.tx,e.ty,.6),a=1-e.t/.22;t.save(),t.globalCompositeOperation="lighter",t.lineCap="round",t.globalAlpha=a;let l=e.side===0?"#35f0ff":"#ff4ae0",c=this.sc(e.y);if(e.side===1){let h=t.createLinearGradient(n,s,r,o);h.addColorStop(0,"rgba(255,80,220,.55)"),h.addColorStop(1,"rgba(255,80,220,.1)"),t.fillStyle=h,t.beginPath(),t.moveTo(n-c*.3,s),t.lineTo(n+c*.3,s),t.lineTo(r+c*.55,o),t.lineTo(r-c*.55,o),t.fill()}t.strokeStyle=l,t.lineWidth=c*.3,t.beginPath(),t.moveTo(n,s),t.lineTo(r,o),t.stroke(),t.strokeStyle="#fff",t.lineWidth=c*.1,t.stroke(),ge(t,r,o,c*.9,l,a),t.restore()}_drawField(t,e){let[n,s,r,o]=this.ell(e.x,e.y,e.r);if(t.save(),e.kind==="ring"){let a=e.t/e.dur;t.globalAlpha=1-a,t.strokeStyle=e.col,t.lineWidth=3,t.beginPath(),t.ellipse(n,s,r*(.3+a*.9),o*(.3+a*.9),0,0,en),t.stroke(),t.restore();return}if(e.kind==="plasma")if(e.t<e.delay){let a=e.t/e.delay;t.strokeStyle=`rgba(120,250,255,${.5+.5*Math.sin(e.t*30)})`,t.lineWidth=3,t.setLineDash([8,6]),t.beginPath(),t.ellipse(n,s,r,o,0,0,en),t.stroke(),t.fillStyle=`rgba(80,220,255,${.1+a*.2})`,t.fill(),ge(t,n,s-r*.5,r*.6*a,"#fff",a)}else{let a=(e.t-e.delay)/.6,l=Math.max(0,1-a);t.globalCompositeOperation="lighter",t.globalAlpha=l,t.fillStyle="rgba(60,200,255,.5)",t.beginPath(),t.ellipse(n,s,r*(.3+a*.8),o*(.3+a*.8),0,0,en),t.fill(),t.strokeStyle="#d8ffff",t.lineWidth=5,t.stroke(),ge(t,n,s-r*.3,r*1.3,"#35f0ff",l*.8),t.strokeStyle="#fff",t.lineWidth=2;for(let c=0;c<5;c++){let h=c*1.26+Math.floor(e.t*25)*.7;t.beginPath();let u=n,f=s;t.moveTo(u,f);for(let d=1;d<=5;d++)u=n+Math.cos(h)*r*1*(d/5)+Math.sin(d*37+c+Math.floor(e.t*25))*r*.1,f=s+Math.sin(h)*o*1*(d/5)+Math.cos(d*17+c)*o*.1,t.lineTo(u,f);t.stroke()}}else if(e.kind==="blackhole"){let a=e.t-e.delay,l=Math.min(1,e.t/(e.delay+.3)),c=Math.min(1,(e.delay+e.dur-e.t)/.3),h=Math.max(0,Math.min(l,c));t.globalAlpha=h;let u=t.createRadialGradient(n,s,0,n,s,r);u.addColorStop(0,"rgba(0,0,0,.95)"),u.addColorStop(.55,"rgba(30,5,70,.75)"),u.addColorStop(1,"rgba(150,60,255,.18)"),t.fillStyle=u,t.beginPath(),t.ellipse(n,s,r,o,0,0,en),t.fill(),t.strokeStyle="rgba(210,150,255,.9)",t.lineWidth=2.5;for(let f=0;f<4;f++){t.beginPath();for(let d=0;d<=26;d++){let m=d/26,A=f*1.57+m*5-Math.max(0,a)*4,g=.08+.92*m,p=n+Math.cos(A)*r*g,b=s+Math.sin(A)*o*g;d?t.lineTo(p,b):t.moveTo(p,b)}t.stroke()}ge(t,n,s,r*.5,"#b070ff",h*.7)}else if(e.kind==="repair"){let a=Math.max(0,Math.min(1,e.t/.3,(e.delay+e.dur-e.t)/.4));t.globalAlpha=a;let l=t.createRadialGradient(n,s,0,n,s,r);l.addColorStop(0,"rgba(90,255,150,.35)"),l.addColorStop(1,"rgba(60,255,120,.08)"),t.fillStyle=l,t.beginPath(),t.ellipse(n,s,r,o,0,0,en),t.fill(),t.strokeStyle="#8affb0",t.lineWidth=3;let c=.85+.15*Math.sin(e.t*6);t.beginPath(),t.ellipse(n,s,r*c,o*c,0,0,en),t.stroke()}t.restore()}_drawParts(t){t.save(),t.globalCompositeOperation="lighter";for(let e of this.parts){let[n,s]=this.P(e.x,e.y,e.z),r=this.sc(e.y),o=Math.max(0,e.life/e.max);if(t.globalAlpha=Math.min(1,o*1.6),e.kind==="plus"){t.fillStyle=e.col;let a=r*e.size;t.fillRect(n-a*.18,s-a*.5,a*.36,a),t.fillRect(n-a*.5,s-a*.18,a,a*.36)}else t.fillStyle=e.col,t.beginPath(),t.arc(n,s,Math.max(1,r*e.size*(.5+o*.7)),0,en),t.fill()}t.restore()}pause(){this.mode==="play"?this.pauseGame():this.sound.suspend()}dispose(){cancelAnimationFrame(this.raf),this.view.dispose(),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),this.root.remove()}},cA=`
.cb-root{background:#07041a;font-weight:700}
.cb-topw{position:absolute;top:0;left:0;right:0;padding:max(env(safe-area-inset-top),calc(var(--u)*2)) calc(var(--u)*2.5) 0;display:flex;flex-direction:column;gap:calc(var(--u)*1.4);direction:ltr}
.cb-toprow{display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.2)}
.cb-av{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*7.5);background:radial-gradient(circle,#1a2a6a,#07041a);border:calc(var(--u)*.6) solid;box-shadow:0 0 14px currentColor}
.cb-av.robot{border-color:#35e0ff;color:#35e0ff}.cb-av.alien{border-color:#ff3fd0;color:#ff3fd0}
.cb-vb{width:calc(var(--u)*3.4);height:calc(var(--u)*11);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.45) solid;display:flex;align-items:flex-end;overflow:hidden}
.cb-vb.robot{border-color:#35e0ff}.cb-vb.alien{border-color:#ff3fd0}
.cb-vb b{display:block;width:100%;transition:height .15s}
.cb-vb.robot b{background:linear-gradient(90deg,#8af4ff,#1a8ad8)}.cb-vb.alien b{background:linear-gradient(90deg,#ff8ae8,#c0189a)}
.cb-hpnums{display:flex;justify-content:space-between;font-size:calc(var(--u)*3);font-weight:900;color:#fff;text-shadow:0 1px 3px #000;margin-top:calc(var(--u)*-1);padding:0 calc(var(--u)*3)}
.cb-hpnums .robot{color:#9af4ff}.cb-hpnums .alien{color:#ff9ae8}
.cb-pausebtn{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*24);pointer-events:auto;width:calc(var(--u)*10);height:calc(var(--u)*10);font-size:calc(var(--u)*4.4);z-index:3}
.cb-topw .cb-round{pointer-events:auto}
.cb-timer{font-size:calc(var(--u)*7);padding:calc(var(--u)*.6) calc(var(--u)*4);min-width:calc(var(--u)*26);justify-content:center;border-radius:calc(var(--u)*3.5)}
.cb-info{position:absolute;left:calc(var(--u)*3);right:calc(var(--u)*3);display:none;flex-wrap:wrap;gap:.3em .6em;align-items:baseline;background:rgba(10,24,60,.92);border:calc(var(--u)*.5) solid #35f0ff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*3);color:#fff;pointer-events:none;box-shadow:0 0 16px #35f0ff88;z-index:4}
.cb-info.show{display:flex}.cb-info b{font-size:calc(var(--u)*4.4);font-weight:900}.cb-info i{font-style:normal;font-size:calc(var(--u)*2.8);color:#8ab4ff;letter-spacing:.05em}.cb-info span{flex-basis:100%;font-size:calc(var(--u)*3.2)}
.cb-timer.hurry{animation:cbhurry .5s infinite;background:linear-gradient(180deg,#ff6a8a,#a01a3a)}
.cb-x2{display:none;color:#ffe04a;font-size:.8em;margin-inline-start:.3em;text-shadow:0 0 8px #ff9a2a}
.cb-hprow{display:flex;gap:calc(var(--u)*2)}
.cb-hpb{flex:1;position:relative;height:calc(var(--u)*5.2);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.45) solid;overflow:hidden}
.cb-hpb.alien{border-color:#ff3fd0}.cb-hpb.robot{border-color:#35e0ff}
.cb-hpb b{display:block;height:100%;transition:width .15s}
.cb-hpb.alien b{background:linear-gradient(180deg,#ff8ae8,#c0189a)}.cb-hpb.robot b{background:linear-gradient(180deg,#8af4ff,#1a8ad8)}
.cb-hpb span{position:absolute;inset:0;direction:ltr;display:flex;align-items:center;justify-content:center;gap:.3em;font-weight:900;font-size:calc(var(--u)*3.3);text-shadow:0 1px 3px #000,0 0 4px #000}
.cb-bot{position:absolute;left:0;right:0;bottom:0;padding:calc(var(--u)*2) calc(var(--u)*2) max(env(safe-area-inset-bottom),calc(var(--u)*2.5));background:linear-gradient(180deg,rgba(10,4,40,0),rgba(10,4,40,.92) 22%);border-top:calc(var(--u)*.3) solid rgba(120,150,255,.45);pointer-events:auto;direction:ltr;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:calc(var(--u)*1.6)}
.cb-erow{display:flex;align-items:center;gap:calc(var(--u)*2)}
.cb-next{position:relative;width:calc(var(--u)*10);aspect-ratio:.9;border-radius:calc(var(--u)*2);background:linear-gradient(180deg,#2a2070,#120a40);border:calc(var(--u)*.4) solid #5a6ac8;opacity:.9;overflow:hidden;flex:none}
.cb-next canvas{position:absolute;left:12%;top:24%;width:76%}
.cb-nextl{position:absolute;top:0;left:0;right:0;text-align:center;font-size:calc(var(--u)*2.2);font-weight:900;background:rgba(0,0,0,.5);z-index:2;line-height:1.4}
.cb-enum{flex:none;width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;background:radial-gradient(#e08aff,#8a2ad8);border:calc(var(--u)*.5) solid #fff;font-weight:900;font-size:calc(var(--u)*4.8);display:flex;align-items:center;justify-content:center;box-shadow:0 0 calc(var(--u)*2) #b84aff}
.cb-enum.x2{background:radial-gradient(#ffe88a,#e08a1a);box-shadow:0 0 calc(var(--u)*2.5) #ffb02a}
.cb-energy{position:relative;flex:1;height:calc(var(--u)*5.4);border-radius:99px;background:rgba(0,0,0,.6);border:calc(var(--u)*.5) solid #c07aff;overflow:hidden}
.cb-energy b{display:block;height:100%;background:linear-gradient(180deg,#e08aff,#8a2ad8);transition:width .1s linear}
.cb-energy.x2{border-color:#ffd23a}.cb-energy.x2 b{background:linear-gradient(180deg,#fff08a,#e8901a)}
.cb-energy.full b{animation:cbfull .6s infinite alternate}
.cb-energy.flash{animation:cbflash .4s}
.cb-energy .seg{position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0,transparent calc(10% - 2px),rgba(0,0,0,.65) calc(10% - 2px),rgba(0,0,0,.65) 10%)}
.cb-hand{display:flex;justify-content:center;gap:calc(var(--u)*1.6)}
.cb-c{flex:0 1 min(24%,calc(var(--u)*30));position:relative;aspect-ratio:.82;min-width:0;border-radius:calc(var(--u)*2.6);background:linear-gradient(180deg,#3d2c92,#170c4c);border:calc(var(--u)*.55) solid #6a8aff;box-shadow:0 0 calc(var(--u)*2) rgba(80,120,255,.45);touch-action:none;cursor:grab;overflow:hidden;-webkit-user-select:none;user-select:none}
.cb-c canvas{position:absolute;left:6%;top:4%;width:88%;height:auto;pointer-events:none}
.cb-c .cost{position:absolute;top:calc(var(--u)*.5);left:calc(var(--u)*.5);width:calc(var(--u)*6.4);height:calc(var(--u)*6.4);border-radius:50%;background:radial-gradient(#e08aff,#8a2ad8);border:calc(var(--u)*.4) solid #fff;font-weight:900;font-size:calc(var(--u)*3.8);display:flex;align-items:center;justify-content:center;z-index:2;pointer-events:none}
.cb-c .nm{position:absolute;bottom:0;left:0;right:0;font-size:calc(var(--u)*2.7);font-weight:900;padding:calc(var(--u)*.5) 0;text-align:center;background:rgba(0,0,0,.55);z-index:2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.cb-c.low{filter:saturate(.3) brightness(.65)}.cb-c.low .cost{background:radial-gradient(#ff8a8a,#c02a2a)}
.cb-c.sel{transform:translateY(calc(var(--u)*-2));border-color:#fff;box-shadow:0 0 calc(var(--u)*3) #35f0ff}
.cb-c.drag{opacity:.35}.cb-c.pop{animation:cbpop .4s}.cb-c.shake{animation:cbshake .3s}.cb-c:focus-visible{outline:calc(var(--u)*.6) solid #fff}
.cb-ghost{position:absolute;width:calc(var(--u)*17);aspect-ratio:1;pointer-events:none;z-index:50;transform:translate(-50%,-50%);display:none;filter:drop-shadow(0 0 10px #35f0ff)}
.cb-ghost canvas{width:100%;height:100%}
.cb-hint{position:absolute;top:auto;right:auto;left:50%;transform:translateX(-50%);background:rgba(20,10,70,.85);border:calc(var(--u)*.4) solid #35f0ff;border-radius:999px;color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);padding:calc(var(--u)*1) calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .3s;pointer-events:none;display:flex;gap:.5em;align-items:center;max-width:96%;direction:ltr;box-shadow:0 0 14px #35f0ff}
.cb-hint.show{opacity:1}
.cb-finger{display:inline-block;animation:cbfinger 1.3s infinite}
.cb-banner{position:absolute;left:0;right:0;top:38%;text-align:center;font-size:calc(var(--u)*14);font-weight:900;font-style:italic;color:#fff;-webkit-text-stroke:calc(var(--u)*.7) #1a2a8a;paint-order:stroke fill;opacity:0;pointer-events:none;text-shadow:0 0 20px #ff3fd0}
.cb-banner.go{animation:cbbanner 1.3s}
.cb-diffs{display:flex;gap:calc(var(--u)*1.6);width:100%}
.cb-diff{flex:1;font-family:inherit;color:#fff;border:calc(var(--u)*.5) solid #5a6ac8;border-radius:calc(var(--u)*3);background:linear-gradient(180deg,#2a2080,#140a48);padding:calc(var(--u)*1.2) 0;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*4.4)}
.cb-diff.on{border-color:#35f0ff;box-shadow:0 0 calc(var(--u)*2.5) #35f0ff;background:linear-gradient(180deg,#3a38b0,#1a1068)}
.cb-diff .cb-stars{font-size:calc(var(--u)*4)}
.cb-stars{display:flex;justify-content:center;gap:.1em}
.cb-stars span.off{filter:grayscale(1);opacity:.3}
.cb-dim{background:rgba(5,2,20,.62)}
.cb-card{background:linear-gradient(180deg,#2a1c78,#0e0630)}
@keyframes cbpop{0%{transform:scale(.7);opacity:.3}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
@keyframes cbshake{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
@keyframes cbfull{to{filter:brightness(1.5)}}
@keyframes cbflash{30%{background:rgba(255,70,90,.8)}}
@keyframes cbhurry{50%{transform:scale(1.08)}}
@keyframes cbfinger{0%{transform:translateY(8px)}50%{transform:translateY(-10px)}100%{transform:translateY(8px)}}
@keyframes cbbanner{0%{opacity:0;transform:scale(.4)}20%{opacity:1;transform:scale(1.15)}70%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.3)}}
@keyframes cbstar{0%{transform:scale(0) rotate(-90deg);opacity:0}70%{transform:scale(1.4) rotate(10deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
`,nc={start(i,t,e){let n=new ec(i,t||{},e);return nc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.CardBattle=nc;var Ax=nc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
