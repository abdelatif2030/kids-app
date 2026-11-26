(()=>{function vt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function gl(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function ml(i,t,e,n="#ffd23a"){return`
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
`}var ri=(i,t,e)=>i<t?t:i>e?e:i;function Al(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var hs={tile:{wood:3},sail:{wood:2,crate:1},fish:{wood:2,crate:0,barrel:1},hut:{wood:4,crate:2}},Rr=9,gh=4,re={x:.5,y:.6},Sn=[{id:1,ar:"\u0631\u062D\u0644\u0629 \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0646\u062E\u064A\u0644",en:"Palm Cay Run",len:40,spawn:1,shark:!1,bottles:1,need:{tile:1},isl:"palm"},{id:2,ar:"\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0634\u0628 \u0627\u0644\u0639\u0627\u0626\u0645",en:"Driftwood Current",len:48,spawn:1,shark:!1,bottles:1,need:{tile:1,sail:1},isl:"sand"},{id:3,ar:"\u0634\u0639\u0627\u0628 \u0627\u0644\u0642\u0631\u0634",en:"Shark Shoals",len:56,spawn:1.1,shark:!0,bottles:2,need:{tile:1,sail:1,fish:1},isl:"rock"},{id:4,ar:"\u0635\u062E\u0631\u0629 \u0627\u0644\u0632\u0639\u0646\u0641\u0629",en:"Fin Rock",len:60,spawn:1.1,shark:!0,bottles:2,need:{tile:1,sail:1,fish:1,hut:1},isl:"rock"},{id:5,ar:"\u0645\u0631\u062C\u0627\u0646 \u062A\u0627\u0626\u0647",en:"Coral Drift",len:64,spawn:1.2,shark:!0,bottles:2,need:{tile:2,sail:1,fish:1,hut:1},isl:"coral"},{id:6,ar:"\u0645\u0636\u064A\u0642 \u0627\u0644\u0639\u0627\u0635\u0641\u0629",en:"Storm Strait",len:68,spawn:1.3,shark:!0,bottles:3,need:{tile:2,sail:1,fish:1,hut:1},isl:"palm",storm:!0},{id:7,ar:"\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u062D\u0648\u062A",en:"Whale Gate",len:72,spawn:1.3,shark:!0,bottles:3,need:{tile:3,sail:1,fish:1,hut:1},isl:"sand"},{id:8,ar:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0643\u0646\u0632",en:"Treasure Atoll",len:80,spawn:1.4,shark:!0,bottles:3,need:{tile:3,sail:1,fish:1,hut:1},isl:"gold"}];var us=class{constructor(t={}){var e,n;this.level=Sn[ri((e=t.level)!=null?e:0,0,Sn.length-1)],this.easy=!!t.easy,this.rand=Al((n=t.seed)!=null?n:5),this.state="sail",this.time=0,this.progress=0,this.res={wood:0,crate:0,barrel:0},this.bottles=0,this.bottlesSpawned=0,this.coins=0,this.lost=0,this.built={tile:gh,sail:!1,fish:!1,hut:!1},this.extra={tile:0},this.items=[],this.nextId=1,this.spawnT=.4,this.hook={phase:"idle",tx:.5,ty:.3,t:0,dur:0,item:null,hx:re.x,hy:re.y},this.shark={state:"none",x:-.2,y:.5,t:0,next:this.easy?16:11},this.fishT=5,this.events=[],this.landT=0,this.stars=0}get radius(){return this.easy?.12:.085}get mustDone(){let t=this.level.need;return(!t.tile||this.extra.tile>=t.tile)&&(!t.sail||this.built.sail)&&(!t.fish||this.built.fish)&&(!t.hut||this.built.hut)}get speed(){return(this.built.sail?1.6:1)*(this.level.storm?1.1:1)}canBuild(t){return t==="tile"?this.built.tile<Rr&&this._afford(t):this.built[t]?!1:this._afford(t)}_afford(t){let e=hs[t];return Object.keys(e).every(n=>(this.res[n]||0)>=e[n])}build(t){if(!this.canBuild(t))return!1;let e=hs[t];for(let n of Object.keys(e))this.res[n]-=e[n];return t==="tile"?(this.built.tile+=1,this.extra.tile+=1):this.built[t]=!0,this.events.push({type:"build",kind:t}),!0}throwHook(t,e){let n=this.hook;return n.phase!=="idle"||this.state!=="sail"?!1:(n.tx=ri(t,.04,.96),n.ty=ri(e,.1,.92),n.phase="out",n.t=0,n.dur=.22+Math.hypot(n.tx-re.x,n.ty-re.y)*.55,n.item=null,this.events.push({type:"throw"}),!0)}_spawn(){let t=this.rand(),e=this.bottlesSpawned<this.level.bottles&&this.progress>.12+this.bottlesSpawned*.22&&t<.2,n=t<.5?"plank":t<.78?"barrel":"crate";e&&(n="bottle",this.bottlesSpawned+=1),this.items.push({id:this.nextId++,kind:n,x:.12+this.rand()*.76,y:-.06,vy:(n==="bottle"?.05:.065)*(this.level.storm?1.3:1),ph:this.rand()*6.28,grabbed:!1})}_grab(t){switch(t.kind){case"plank":this.res.wood+=1,this.events.push({type:"got",what:"wood",n:1});break;case"barrel":this.res.wood+=1,this.res.barrel+=1,this.events.push({type:"got",what:"wood",n:1});break;case"crate":this.res.crate+=1,this.events.push({type:"got",what:"crate",n:1});break;case"bottle":this.bottles+=1,this.events.push({type:"got",what:"bottle",n:1});break;default:break}}step(t){let e=this.events=[];if(this.state==="done")return e;this.time+=t;let n=this.level;if(this.state==="sail"){let r=this.progress>=1;r||(this.progress=Math.min(1,this.progress+t*this.speed/n.len)),this.progress>=1&&this.mustDone&&!this.hook.item&&(this.state="landing",this.landT=0,e.push({type:"landing"})),this.progress>=1&&!this.mustDone&&!r&&e.push({type:"needBuild"})}else this.state==="landing"&&(this.landT+=t,this.landT>2.2&&this._finish(e));this.spawnT-=t,this.state==="sail"&&this.progress<.97&&this.spawnT<=0&&(this._spawn(),this.spawnT=(.85+this.rand()*.9)/n.spawn);for(let r of this.items)r.y+=r.vy*t*(this.state==="landing"?0:1);this.items=this.items.filter(r=>r.y<1.15&&!r.grabbed);let s=this.hook;if(s.phase==="out"){s.t+=t;let r=ri(s.t/s.dur,0,1);if(s.hx=re.x+(s.tx-re.x)*r,s.hy=re.y+(s.ty-re.y)*r,r>=1){let o=this.shark;if(o.state!=="none"&&o.state!=="flee"&&Math.hypot(o.x-s.tx,o.y-s.ty)<(this.easy?.26:.2))o.state="flee",o.t=0,o.next=this.easy?18:14,e.push({type:"scare"});else{let a=null,l=this.radius;for(let c of this.items){let h=Math.hypot(c.x-s.tx,c.y-s.ty);h<l&&(l=h,a=c)}a?(a.grabbed=!0,s.item=a,e.push({type:"hooked",kind:a.kind})):e.push({type:"miss"})}s.phase="back",s.t=0}}else if(s.phase==="back"){s.t+=t;let r=ri(s.t/s.dur,0,1);s.hx=s.tx+(re.x-s.tx)*r,s.hy=s.ty+(re.y-s.ty)*r,r>=1&&(s.item&&(this._grab(s.item),s.item=null),s.phase="idle")}return this.built.fish&&this.state==="sail"&&(this.fishT-=t,this.fishT<=0&&(this.fishT=6,this.coins+=5,e.push({type:"fish",n:5}))),this._sharkStep(t,e),e}_sharkStep(t,e){let n=this.shark;if(!this.level.shark)return;n.t+=t;let s=this.time*.9;switch(n.state){case"none":this.progress>.2&&this.state==="sail"&&(n.next-=t,n.next<=0&&(n.state="circle",n.t=0,n.x=.1,n.y=.4,e.push({type:"sharkIn"})));break;case"circle":{n.x=re.x+Math.cos(s)*.3,n.y=re.y+Math.sin(s)*.2,n.t>(this.easy?6:3.6)&&(n.state="bite",n.t=0,e.push({type:"sharkWarn"}));break}case"bite":{let r=re.x+.17,o=re.y+.04;n.x+=(r-n.x)*Math.min(1,t*3),n.y+=(o-n.y)*Math.min(1,t*3),n.t>1.8&&(this.res.wood>0?(this.res.wood-=1,this.lost+=1,e.push({type:"bitten",wood:1})):e.push({type:"bitten",wood:0}),n.state="flee",n.t=0,n.next=this.easy?18:12);break}case"flee":n.x+=t*.5,n.y-=t*.05,n.t>2.5&&(n.state="none",n.x=-.3);break;default:break}}_finish(t){this.state="done",this.stars=1+(this.bottles>=this.level.bottles?1:0)+(this.lost===0?1:0),this.reward=40+this.level.id*10+this.coins+this.bottles*20,t.push({type:"done",stars:this.stars})}};function xl(i){let t=i&&typeof i=="object"?i:{},e={};for(let s of Sn){let r=t.stars&&Number(t.stars[s.id]);r>=1&&r<=3&&(e[s.id]=Math.floor(r))}return{unlocked:Math.max(1,Math.min(Sn.length,Math.floor(Number(t.unlocked))||1)),stars:e,coins:Math.max(0,Math.floor(Number(t.coins))||0),muted:!!t.muted}}function Cl(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(o){if(!(o._smp||!o.ctx)){o._smp={};for(let[a,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=o.ctx.decodeAudioData(h.buffer,d=>{o._smp[a]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...o){let a=s.apply(this,o);return r(this),a}),i.prototype.play=function(o,a){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[o];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[o]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,o,a)}}function vl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(o){if(o._song||!o.ctx)return;o._song="loading";let a;try{a=new URL(e,document.baseURI).href}catch{return}let l=o.ctx;fetch(a).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(o.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(o.master||l.destination),h.start(),o._song=h,o.music&&o.music.gain&&(o.music.gain.value=0),s&&s.call(o,null)}).catch(()=>{o._song=null})}i.prototype.unlock=function(...o){let a=n?n.apply(this,o):void 0;return r(this),a},s&&(i.prototype.setTune=function(o){if(!this._song)return s.call(this,o)})}var yl={hook:"data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE3QNJ6SUWJgxPgXAaYoDDCbiqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEyAPKgJsIJgzMwAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",build:"data:audio/mpeg;base64,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62vVGKWi93TP9L/tk1GbU689Nu4+IJAkoNbwDQq4Bx2sloRDu8U1I2jLK7Edjt0Xck2jVBatY7V9tONom3/X+Np2/STWv1ZzlVLvQ5CMTtr/+zjEnwAGGAkvpIxAIUqsYojxibEfqxdDFdC9aDP8HToZF+ENSJNRckSTIU8UgE8ftSDCKi2BdC2nScI3jMMcybNiFF9VkeG1MawolaimNwmhvFpQp5IsjG5qlDkSyOwlvPxIFKFjdWARRMgOCQZdftuecYkk5gCvN3K3NkrKzwx2MYsxn/KVFv1ytRkf62T30fqydWDAVgF8O/lX1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvoIHODUfRIRHARQq4sjAiehVVVVVVVVVVVVVVQADGAAFGCcWNEoWBUHgOFZg0ytUM1DWLjZkp4vNROOLi1LIgwkSYTQ3NmmvNypOLLBMz/4qLahdlIsKu+oWFUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE4IMJYXEYZiBDieCqIQDzCxBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvYPH4IDeZIzMQAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",splash:"data:audio/mpeg;base64,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",sharkIn:"data:audio/mpeg;base64,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cSwxZYMHkDhKg00IE44JgRERZc4dKI0Fs1qJGlFlFlmLRqWds2amjThIkxNS5qSmvNypOElmXG5RpxQOB4CgyLCweBkUFhYl4sLkf/+sU//+zWKi1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6QMKiXsQZ7CjSb2fIQDzIeFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6IOPhXsODCRxSTkSXoT0mGBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",scare:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAADIAACsIAAoPDxQUGRkeHiMjKCgtLTIyNzc8PEFBRkZLS1BQVVVaWl9fZGRpaW5uc3N4eH19goKHh4yMkZGWlpuboKClpaqqr6+0tLm5vr7Dw8jIzc3S0tfX3Nzh4ebm6+vw8PX1+vr//wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkAsAAAAAAAAArCBk6tTkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAKMHledMYAAZ0V7/ce8AAAGNzgSBIBoBACAEBEiJYEAIAQAgBACAEAOCITzMSxDBMCYEwPiOTDxzr3+Zp0zN73usWLDBYscpS97r174P4gDEMb//8MdPu//Ln+c6f/WD7/5AUQCgB9tp/9/+AAAFKZuzvwvgQQhTOilQrhXFk5YpYY+kndfngrTD2dy60s9WxYjivSwnkKNiIMobTKmVUri7jFtBc9FWsagX/ets1o0t7agV+s4rpqn/8wmHEgUAxPRqPkLXM1IZSAAyCwY24xmfD/+zjEBQAL9MV5vPaAMYQVrXWHqZiprDkWfEhIeYraRRYmZ8d2WHQ2dzYFLR5kRBimSZ66i+utEdD5m3uQ0Vq47HpppGRuHPNnTetS1UDYkzVvooIIGkDBlNBhBHXyqZnpDLlts/OKeu6MU6AAEAGDXv+LFfCZwg1ojHc4HrjN2apLkUlfbMt/F0C2IbFcTNDqra3LqDcWGLNYVOwDRhJ9BMf5S6ue4/AYLtU9XvuVdfNJg+D4PkQ+vOB8PvKPeaDBknKXtUoB9HUzV0L0lgZlxSySQIF7S3n/+zjEBgBMJSGFp6B2sYEVsDTHtk5atYbOmZ2vBp0bVPf4yVf/UoHhktn1gktu32xnG/yAL/H5QANOK1ECLa6k0CzmaFYtWpmd1VvhFcGX5FqQ5vPXLfXWrdPuVL8lKiedBU7rrRO4uvo0egIjJSK1l4Ym5XnWv9mSSUS6aBsvDAg/bYQgDL/MICRdMsnw1liwkX3zJKqoK5TdOSYVh5M1dajdG6KpfC5W20Nc63qUNFizwdOIK3CEBBso7AoAHiGApWveKpRwE1TdNeADAYnu+4lOGdLXnVL/+zjEBoAMTMFnTDVywXKebrScHTanP7NSoQYIxK2lfm87GYJhWFuYHdX7eiSAYTM9uRQ3Vl0/yV50VU30dERlGlzvNO6JIkLkanRrnpk3umv+jiFPOj1HQmZjg8mPJMJHgmpamq/+n9ZJDYCAiLYUVbYMruP84RC/BHRUJWmGOq4huW1Hzu1rKp3l1xhKtlmvzf8c6tXv8zl+gCPfUJnr2ZTtgUBa/Q++jJ/0ZmBYax6kTmisx0EVSFTMZojXH7+R26P/R2KqtAQORTLjsjA4MjTVHFh+B/j/+zjECIAMTOF3pL1J8ZEeLjT1JqZ9BOFEoR8pkc56OWoGgXLPE1oXsSev2uDJ1a+8ZZNf3G/j9TFoFh4+aimV5GEfpR8oWnf5RGjcdRHvRS2IoEUw3E5QoYLteajwI/Y5Fn2b7l0xgICAIgx1xjssaJCXopFsyo0mwSqKWzWQwla9r4ah8JabrodcCussUFanOH/gMK/0J8tyRktcVQGHN3W+RMb5/URhXzOm5RvfB/jXHcFX9+RuyNUKmKJQK7bxcmYtLCyLZy4pSoAACP/cTso+63dbAOH/+zjEBoAMYQFe7TRUwX6ebnWGIV6iQqbed0QbNEqLMlEbEYutyVBng8ANTJ0QLhtpVvGvmbMkgpl1jV1gN8wR+mc3fL7t5EGl9da+9av7Bxb2BLZkxaWFsdGOgUyVWyhFmntLVnKJNn/76ZCECySQkq2w3CgjerEScWixkmyQY8tHSpYjHsfbaYgDlB/KBayuyTF6t6xxIBPuKrk2Z7eHu5vjO//1/q/v+EyxkBAYfTxn1LhrPFyK4so8T2tCDKDk4dqCAQ+GD//8xdAAACWVGsalB+6uWAX/+zjEBoEL2UN5JaBx8YKgbJmFGqJLu5tjZ6cDX+WmAEA8Qx+P+/vPuu7/94LgHw5ABicz+v/9Fhqv07SCzzBoNw/OMDgkfTxUyZJBl/Xz8L8nhfk7wnllFvFf8rYRoDFn1v1ftCI6AEOApYarXa6qLfqeTOZjMF9EY4zNMbldiUw/u/1CY51jOflTtSssHW6UGJTRrmnmOoBjJUgZTZSTOKoiREkw9LJzv/T/mspKTyAka04drVUcoK3tW/c/2qZj0XCVwl0yyqAKQARMcggS2KtOpFmeNKf/+zjECAAL/QFxR5yysV6Zrqj1ii4wGscjwsKGkewti1m2yicN9SCKC0nTnnXd2wXmcJpZwpSlKwDP+X//v6s6B4DjTB4TQo5pioYSeXqXRWZRIWeJOsShqSExEe8OenurFsqKXYANIE2W3BDx29SZjQnJF7MIxGzRAEtlFQJo8gLhy7hvlB7l7J59NCrgGDdM3eask3iM50kCLE3wyjzPfN/b+jNeOQWGEWrWal3sUtonfo9yk3bcQO/qMrqAABTltF4G187jsTYwFEWCQu6BMwfimpmkZlf/+zjEDYENsTNw56kUkVeZLI2VlpDuRKdOFn5Y8+SZpKyroPPIpV6HywId7YkXabkup/i1WYmu5inlj0qKDgFYUD4V/u0JuLDgPB1W1Iey8zRMPdfMjrqfYmvZYsYplB0igitZ7hn5YAFKAC9UqqqpbsMMIIFGUw8m+5JC7YwcPaMicyauQxDUSlw4FA8JlqsrGJXuS4QihiO9swKcTuAqqCl0l7gFr/e87Kq1ZetfeJA69TH7QiP1T0Edj8JVqQRNcbSjckDgptSvYzyJATmVK5ph6aYjL5//+zjEDQAKfMmHp5x0semnLnT1oik4Um0WJK3xBGb9atHTTQuQNqEycVRSleJLfWZybCvbedI5xi73v+Siu/I8CONPBGLoXSHOKIPs/5/XgAAAAABHLsIuvpMH+QRujqfaIOINgLtdtbMo1W2RERHNM+gT3vPV6A7yAJhMlAdC3Nq0p9/l7//s3N72MOvYVn0B8ATAXKBoJyA8RP+ESr/Lou9E4yDKd4r05d3f+Rd79E5uERE9E0M3IBuPgARnv/D3j/MjiI/7zPwVggAAAAAAAUpQAZ8cbGT/+zjEBwALCJ135LznwU6csTDDis5ANdkmPidTB2rmLHF0Qp9fssa15WaHeLqWK4PBZ1bNsLA5Y96T/oCxus9F9E1CITBoAiEkR1Dntb6nt5EaVoJBhq7HoqCp0rrRarUlJMqJN3jAnrC1ChwLqHcpnE4RfJmF1M+WpmU4UO3tB9beIJ/OIH//dAB2XN/1blaVHfRtkmx6OFW6kcuKkQ4yL7bN0/TxzDYtMuLVmW4q62vdKrmV24/ib6VQkpSwKmirIk8SwduUw9DlmUgbGTwqzHJzLtAzWUf/+zjEEoAKhJliDD0WQVahrWj5FehdHtebjUGAziEWMaL+IIyyV7li2vb4hCGa+7brcr/mLKwBIXU94O9bGifq0S3oz6gBAAlS/8Se9D2TpejKWQBDpJloWYbkBuegRsNAK1imyqY20qDqOLMgsKIgb0RHp7RNETv1Cg2faqSczagQqMfxrfymTUWv/1RX+5/vaUNtJV+nR/+ukAAUFORwCkXFGN4tK9Ug/tnys6IbS70I5CtWOl0WMRSi2OLoMTINcuusoP37U9HAQHe0441tRiSXOD0015b/+zjEHwAKhOVxR8FO0VIhb/Q0qLachZqNoqgdrW9VVqmUU8pR+k9/kaP1yAgAiMGSNyBRqax6cB3nfTPTiDoN54gIanMXAEbHsqzgAIf9/flNioBIVnaqEkXqnR0KgCiEsYxqVPVEZ80XA1v/+fup//v32KtT9xb2+HcAw1HOZfIAJBablwP1epEbF5Ntspa7UrmuHDteS4Aiou+kt2nMhUntrPlgIML2rWzrWmqVBsIZ8xUVXb+CC9vkp1/jMbPO/6mVV0//tShN/ioL8xbquv0E1HU66Yr/+zjELAAKyQ1xR8lSUVGhbmmFnhJHBaktwpcqla/HO2/dTGUNXT8dXVW2QEaFj1pX+0VWiZnIS2A2EL7W26MsdAPGj2otP9QHNfzjmT6AaIC332upF1a3/p62HR38u/+1ujiJQmUranCg0A0HHNfw6nU6ltEvknqg0fDQj0DcGg0zMom9bF3RVssHCX9D6NVezogEJOmq6f8F0+nr/1FDSS6c2hWqD8ocY7v//R///i8Qf3H51NE/F4iQ0g2E5rdwWDOuMe79AkRqiwpiKuiH5fis/uVVPdf/+zjEOAAKIS95pjVNEVac7vTHtSqPCt8WWu4TwhI2S6Zv/OB+Pd1otT6+ZgTJKitbIoHU3U7LWszCfoL/9O1jhu3+n/Ku/3auRgRdpDQsNu3biBTeIUGL3405Dtj998SBQx46+S/zfaQKONA1GUrAyihrLl2Io+LPLtwm5opfrY/+s1DdPU0EWqOu32RE6qP/1LuHCf5WfXhW/ohtn9b9uXcSttXkAKyGwo63ACWKj5h5i+YnymOCNEHhnbwHlesKiMtnhvPKkFKWTQiRavs7zElb0dEyAoD/+zjERgALJQlzR7RVEVOYbvT2mfY9zyLL2U/tk4hsiGUs+1+O+N3ZZxLK6IthrpfyT/0Jf0+WqACQBQSTbgBqrNavX6tiPgbJ9MT9cChrDiguTX18GBGvmG91mHTde1khZ4myhZ3lEOP3qYGz//2qgGS5zIjje3lFR3rv4ZilLdG39Ksd9P/4iCJevJaIwA0BIFJt+ApXGumqHFaIKeQWKpBS5hyxSv12QLopImnqk3Ihma3CYnJvemj0CgP+a6dfIx+wWxaJko839BGFfeqJL0EaGMCE6Kv/+zjEUIAK0TNtp6i2cVSmLjT1FqIu6EZEIbtfb9sFUowAyQWE05IACMGdZK4gSywS/TG+L4QeAvx6w0tnApTNiXZVnDaEg8TIrEhy++gTDttW/+GKHneu/+cDbpNX5nQw0DiLoy0v+kQKWqvpp+UEf/YKNgKkBoKO3cAdPwOplSg6yKlTXbemz3MrZKLe/rMMbamyrMHt42e/rdVVPf+xG1CP7KOG21PoZ9agOYsu856fikJVdl/ohPHx9G/p06FHf+/bucDAzkfInDmutJrZCYMcbgAtCrb/+zjEXAAKZTNvpjSu8WamLTScHTLX+pV1BXStweiqSYooUly7Grv4T39UmTDzwuqocARC02tsvSuhgUTZ0hK/6KVAtJhXGGqpp9xgTuY1/91VCq//20///8BE2S/7tiGmA0FJ9+AEYW5VJCzC7kwc+NHypvizGgLe5V5vzAIUr5wPF2qd5ndOMSel5NOM66sA0pMIciO2UldXMlEJgXJCZnR/+gYtrJWvtpKn6k6+YQFVkIRIDY1/gSSKzQI8Vuwzl9wpmhrf5xyNoHXfCwRo1nqGjyLCpnr/+zjEZwAKiTVtp6jVsUymLbT1Cmu5vFTaE99SRtD7/UHLLoZm9PBdJSY05tB6+jTjyo4t0f/84WvfNTv2Km7JXwROxkJplsOu78BKOt1lkhWkHVlaaF2azXtYI2eP8AR5o1UjALPL+oOrlBNTnTaZQYiDGr5jrt/iLI2D12Np9BL1VPzV2Qa6GXOv3w4o/20EhmrT3bFqkAsAAm78BNPNQoBREaR1MTcsszdQqhdqo+beCIqzKL6VEOdz5VbXDWH0Mps21BUD9dj746nyAg79/r2AQTHCxDL/+zjEdIAKhQllh+FScU0hLTT1CmIf/4u8uyPYeEIDPMfKdbf7wdMWwpqKQN2yQAbT6FtiRUjnDAts5Q1SKAZDyUMcvP2zhym3jvyb1w5RP3AobT2Rrvl/PH8Dvr/x3H6LdjJ2QYAPwSx1t501zdKN/sklgedKLVvq2eKbt/rwpv9v3Iw89XUTVSoDJJGAqNR2WjdAWoAVi7DNjSiIRRxIE32i347sa6lOR7pJ54ugyHyOL/5/mtkjoEHT3KOQXVu3wciJgPBiPDJmE7/wVIs0yr78jscXRs3/+zjEggAKbMFRR+CnwXgmLTT1iqfmUz0qRGO/UiMgQoJFf0AoDpmZsQZlU/C/EyBkLbYFtFW1kNeHvwRzpT7bA8xMTT4hUggo0Nm5waWowbWyrazhgMNVZ9S2oTZtwqaRKlnSS/qUTR4DVjh55OOCzr1VPWAmf0jFcIDKCQKcbABq1eK2Gvw2ZkGgjxdtFAQ1wY0NO1Bf3Fdj+dJGn8sW8y52LajpugbvZRRrpcxB1nfpIVWUy1KOhdDIp2NVl0xKj/pJMZisau7uhuqXzRHiryLiIi5FzgD/+zjEioALSQllp6z08W0X63D0NsYhQKBTtoAEBZEcrZV8/1dCEJCUCxyh9HWrkSb47Cm/kNh3X7EajzNcTdQG5Nrl59Rtf5wTB/s336xhzE2UknzFu+50SlpiO91yKbGoGP01YuHVlILLDQCdbAATKqb0PbG9PxlCGlkodHsbceCN8Uxi1+LMsQ6sGiSWiLAODUu0l/SmyBt+eS76sqMBYWGrCslVGut01rSZXBwbRmaSrtQF7TshQs/9ThAiAaCk9wALSMrHF9Mb+oh4sI6Fp8Q74hjuVOv/+zjEkQALrOVbp7RW8Uyc6rT2lqK1l3UNsty/arV9mB7W+k3StmIYVgy13+i3vv55sGjh8bs9lrDh/tues6fIi/DOff//O9byMkuBD76FdIUZDYTkjABiXmgtbYi1ShoqyVBsOC+PLEKG5IHf5fZ5s80rQnOmc1uME+/0Ma81Sq6WAeG32bqaSt4AaIo1TrrGZcp20xjQvc7dXU/477cR2PaQ25N4IgXPgAHs5jdiCLwyKGSwcYADyQ2zRsrz0kehkKypAwNyXPBLt5+1G9yrjMyumgIKTIT/+zjEmgAKjMFbp6kzMVicqzT2ropTuSia1SjiJSe+4Y0anoInG/zAOasokprkjRsRbtiEBFKTqX61IxxKoGk8KXagA+qbxZcQSwt4QuMULKkTktDZROXPG8CdLLvb4OvMR/dSrApxceovP1ram6mPA4iAvRRHjMjTvM4xgbY3kNAlKi9T/pHQiqroxZ/j8PkBRVqu7ehQAIoNhS9A5fJ9rboipoUU56/R49JvVg1q7UpK1TJprHFDdy3qROhpLHzHrS7qSZACFU3nU6+ta0SSBOB3EgNxsZv/+zjEpgAK1OVbp6kWcWgcqF2WntCZHUDZj/qQDAmjV3dn8edAR02g99JebJERDhbtrABq31Wk7JXaGo0z2nD3F9mA715S6zxdZB4xJGq2c5yC5W/uR1HblpbFNbHTgOG//tuY77e7IIJAiE0jumgZvQb7OGybNZSnptzJhOosIF33ZOgOSwkpEAC09ZF02sirqLE7FMQUM44UBnB3LF/CHY+rGMIs533iLWksiBHy4LVHUX91MhOi3V9b/+aspyuovO6LVumpOKhb6f6scMTu8Fw6BRzOQRX/+zjErwBLIOVTR7S1EV8canT2iqKQgppWGXWgAEM3ZrhwdT2SsVdNS7MbbZHL8Ly3mCuMS8OMK1/Bbd7OEkJLcYM3aowZmO8xAvSTbzxstN1qQXcdwTccpJI6maqTyGNQAGbkROsEQhnnCDHC6nbawAgMWetstXd1G3kC2ZqEO15ZJGjf5SM5+l2MCbbBbEKPobxtW+32/8RcX3Aj6zILE+vTFc76iK7q9wpGqkp/Yxt6iIGD2MLVEgUduf2XKSgBEA2E3GABCOYzUxNwS53u4mnDUsiKhPP/+zjEuAALCN1Zp622sVCc6ej2jqY7JAWZ18aLgPdu5VR9lluWdiVsDo4vMeqrc1CKdFNBBICoZ8S53PX8CBWkcpHsQOtdjYCCoBPV/Jpa1S7uKlgCoBIK1pWtID7R8u5znBjiGKdsDxSG2oaV/9R9NF8YWrabq4xnk7VOPZZm+vvFYud2hvBbgPtfCR+Xvq16rbEafsBFWVzdVp0dlEgy7VcaSUZJqggBESUHJaABO/3Ch42Wx1djNoxXVQZru7BYwZl1fTB/Nc4JwpIf0fDCR2lBvmLVHc3/+zjEwwAKkL9bp7S08VUX6zT1l0ZDYBoiDlV5zIdZnMq4oLMr7JXmOxrBdevQ7sY1SNjYOKHJQLtgAEHbxvxmXthYpPoS0cnYlRCJS/OUPuSmhznclmPP2tKlh7mNi1vf7RAo8fRPL2ceMnuua7Sltn3Fc9vE7XpGp2adtb0y4hdxwdzE+MKHqQQBdABMYkViwShEliAOAvBeAzGZnxKAfUlBD1+H1KGhGRRCZWR4SQVHUkOYwWEFpXLJRjJHi0/gzyCFFNOYOr2UgftTb3yWwhnopil28Tn/+zjEz4BK3PFJrCy08U0YKTT3lb7W56mZcnuVZi0nfmeg0F6b701jStwp6v9aADK1MEWK3Zh52iSAWYkYizeRZTUWVlFT7wBmIaR7HKz6e9izVpU4KXsa5HHolLumi+RU9sjYZeh5l00oD4k31oqqVd5UGFl7ofHQ6Z3CY5aUN0fkrfR4s/zCG/oRT8nVBpACYxctxNeqWyPg0FLMmFhK1QE0wdJhx6H5G4phpo0dikr6tyHr9t0k57U60WxQwTGWxmg8joF+K8AT7c2RmqGRWIwEVjPVezH/+zjE24AKFOVHrDVQmVGYKCmArsIufsiimozpWRrE8scNesqjS9y11yRQFZ6dquQKgnoToAAByDOCWKqBsUHFaFj2u+hNCxEvm9sumhCGahW08ZhwEDRKALb4uiwZmxiMwROlVMNoeFj+zVu7OQiUgVUQ6P/29IMdiGVFPKbuQwVmdPHk0JtbrcmTtx1Ftl12n7kAAgAcqwAFCd3KZmdiOM6ol5Vmq2lgRZkQ5BaaD53rURmVU7BlNz6ieRIiBHBbjXZczp1WPKglQYAkY40TG//fdcoMjVL/+zjE6oIM9OEozTC2gX4YZd2TjtBZIbpvOFQaujzEi2tyhiKzUh7DKEkdALDmVBLMKoGKSlUbXA1DAjqQ8IrhEJdemuJMvNqXKLFk4avbpJ1/3emjHLICln0cehtLdafUKTTBRBvzL/zKhCbPgUKt81mES7wka4con88xcjbqh+SYy5VPap3/1feP7QNAQnpYtkIBTAhcI4gcReAMG65AB5yCQOq5LwQ0aTFeIC+gFTRiTYzYKlTVIhdlEccV/TH2hqRX4YL5Jr0lVaMrgtqni5sgcI5x7ob/+zjE6AML3L8mTSB2gaOXpAWlisgepwIizf9ehldtLEO6blN3atTkIJXeyc/Rbr/9YgvRhv/G3OQYEAbMnFDjIGUSlSZTtwDPyUQwpYUdLSrbpc6tCohO1ZXjWlW2sg2dNWa4ST7ZuxtaKB8x/irEYiLgMV2exVud3j6Dzq/9fQoAITQnJC2Go3sZY3F8FKXte0mNFXionqU5po3Do5NRnW6JqO8jYTOsTfMtZxqlr9n150NVLBQxWLXd7MxsoRR6KVX3eiUEU9VoUPRBKxZbddP/+67/6BL/+zjE5YIKSLctTEkQgacaY8WkjtBTGqyXQUCKTMcbNAPBwwfYrNYW8kXEjzLB0CMATXEyduwWUS9W+zCbPURotVZVL9ySFMsMXiaRANoKMD0v4ZKPLKxwUS1Iq/wo2Z9cJaKJVg/BJFnwNd78OmpcNdi8ijfjGFXFVNrjULBKjvuR9ujrAGFwSJ402LgxahU1ASLWShao3GUww3mMdVnC3Q1NO7usAl1WzVgTH5nmU1M3gqaizLttFq+99yKuMpQTjTzzzwagcdCu11Pza4fsvV9m5yqO/Xb/+zjE6QJNDL8eTGkUATwX5NmRlsh3Lcmjm7vaRBYXSKLJuodUiDNC5EEHHUUXW8vBmrbroEYcC8AAOeOmsrqnHvw7H71um5MwzadMxikWHzvB7QensY+dngApsMHuxEfCJCxD+dIy9D46wRn9IyOgjxGSYvKGA8g+onVyZyadzU+p1uhNdRZBhmmdK0uW0bIC7LnqZ0cCNSaJPXmwOmvYNLW+Vr5r2sMaPVSlzxq4QQFFFApzp2qPZu23PZ5tH50vG41Rc0zFAWu76zQ+Z8U5LW2q6ZK1bkX/+zjE7oAKwNUtTDywgcQfIwGjDsg/l6TGzRybvtKH+tg6VwRBUYDUTB/TH4XLmgyheSlW40m/jp/L9j8LG/1rKpzSJ05b8aUffvvynxtnCq5Zz4+/3V9jHA9aYL8v3qcZbc0kpoteW0/LuTTT6Jp25bm09RTlHWQVAGHI0Uw5E0RkpeTCpBLq8hOcb4+tBLRxGSaQ5RcPUH1McUiURIyqec/HjYnu1IFIpNUgsRFuTxsPL8JAOUi18XHXtfZStH/zjrK7vJJb/kFdPau2vyyNNp1IpIdbZjH/+zjE7IILPL0izIh2AaYaYwGjDsAYCdhhUWZZO00HOnWswTLS9o1uDsbLYZzd7sq1zlNhT7qqayvDo0VTVJE7LuNpZDz1BUcJbpTc2NzzsYLxkCE3To4vqGyh4RIUjSufJc0LKGC6JxY1WUTaoZSOoUcuJtU5BpWPoRqBhNQY5UPpi6EKfLSKguJ6mpVOrsUkPOpebvZSfu7O8+zmdvtZHaeq+NlWGN20IbWsDoPNtZ8VCWpb4s5EJrxrzaOFkGs5m1BGicdrelE4uXommcALUZVaPcX5JjT/+zjE7AMLbL0eTBhWgWqXpEjMGdjVeHW0oAR+e31D4dfd0JTFHEgh/bMTTYv4NbIaoMy7AVjtdt79Dh28uXpQrHxdkeOu90/17P/NG2ZzY9mdr/e50wxJt1R+0jlr/46S5q/6mkvYSbwwdSSLjSiyL2i9Fa0lhMw9Gmm9r9WZ3rVZRYaNRSSZRMBTtqnTKoypDhhLpjBdBbSX1llzp2YPgq7qcBLq/jNOQjOXZwGYnoqhWOWzybztmM7vov96vm7mpS0NuetBMgxmofU8FU1jxWWakwdTpQ//+zjE8oILBNMk5kkOwa6d44mEjtAkWf6BCdZmQ6QKQu3uUdWc7k3m8z8wwvGYpX2xsyS2ISj0OXlTVBb1+tC4etu5heusjzKfSHTjhjuYJx40MKVmkQxnrCClYMOySOKsyPQKIViJnVgW5D+JaGR2tlKkRS9rEuKGhEQNd8YL3an8XY5taxpERo3gnre4McTLHEjwUhTeIIJFCYm3xnqm36OXLb8S+en3tvOuajHMnONdWX9dktg9x83EqRNh/LDk2unF6P57LR92YrPBPc7Us8NHNdKIRIv/+zjE8gMMWL0cR+DOwZseIwWWDiidr+8bqJoi1UB2XTm8KSrgRi8VuUb56foZqFvIL5/Y22qHaJPVYVZgqdI0mWYmXnlkImGKnfhSYme0v59ROhN8q7xsnRmtWzqGnlL4JBdAFkP8kTogj6kUGIOgeFnld+FkbYTm8Ynz9dD8rPevof4385OKTS6T4WvMZeesDafzRCkR0kNMqxLz4lBBCIrmOi1oZJWE1GdXX3L1Ud0vwIw2YhnTWUIYQqdhPPPGXRsRzdRj51VMB5DqfcwpFlLtRkmUAYH/+zjE7oMMTK8aR7DQgZagooGGFhARJSK33hp7KCLr72YdhxQy5KisJJaBiapZqdkbFt59Kh6V27loN51nO2DNLcXTt3z58yG/A+U7FnFs/Ry6vsKIgb8uneXezscra015l8tJtPpy6nNcGJyx3pEv7Ukz7ite56Lmt2+XP/N8ZBsCFWYAjQVs4gUV3Z3trI3HYqv306/AfYxe0h40yE3eYwppoAbRyZ+bymejMbMPncDF5b1/u/ywJjloF421g3eVv5Va5Z51BpzhZKREsKEX0aRablVQ/LP/+zjE7AMK2QcaR5hRQbalIkDzDqHNsN3KF/n9EIawzAI0VRizl9oKgwlIpvkBVFEZbrh6K7GUIci7UhIqOMckWaVXUWnM5+8xB0p0IgJHSUsyvswOqIKsyKdQchEnZRFrK5KuPuinm23T6rZE2K1Lv/GyBsddUCEw4WPqNo4hfiF9IBAsEgfivWGNlc5CYNWGyPpkTNV+WLXdDzgHrazwhMKbawjeZLw/zRhSdHmrogTOJzNNurvtLYRuat88RxkW1WyFWxA3YkIAvD34bHtohdNxF3z9ZfT/+zjE6wMMEP8UB6BxgXkfo0iTCjGNTPwlNehxcTC95w6BpIskjclYQXC4WWKAX6OyLmDqJZhpEtJlQhJ2ivO7M1cCFF9VXtDsI10ly8YWt1RIYszMSVTwA3ao1HC/3F+aUadoFMjxeKosYRePrJEmuml9N975aglcaxhJDoROHkZNGofAhFDgQF1MHzAhm6DYsS1FTEuZXNxotf5c/zVcxCxmsM7JnLHVtcxTLMiWssetExLi2hUw5PUvORCy1ru/MaNiez++M63OHqf77lD1O8YFduPrMSn/+zjE7QMMvUcSJ5hzQWslIsj0lHC0EAcULkdI4lFDPM23CYkLdJ+/Pg731WNPIgxxpZG3xJiS/PaeZafhvvQZrLtoupfbtmjKsxKVMxoCHVQRaUgrUMiCEeNEKo404KjjKvM5yK9VdlQpWiNFZcTVKsh0c0pRCXx7SjspUk3o+jVZBTEvFtFHSgpGw1u2EtKe1uOI8hFoO3MiBA5zRxzs5j5U7lOGLFkQ7jlGAomzbnmdBM4OzoOWaVh+jlU6NbSRh/f/+5CK2ira3rb1Od2MnMjJHeY5zf7/+zjE7gENFSkSJ5hzQWiXYxjEJXj5R/R/SNNtDU1iMhzDkV0rxAVqiL1zf1b1JmseUG/amQcZcXoTLuyzzXUXQxIppGFl6L7yjmPiZ7GC8pE1YieQ5KmDXGKlCOclE/R5fyqNUPUFdqpY1HeCdEF/+2eci5V/rqSKuwZqH5tOhhxyVbNqRclycICcYKXPmk1mJ7M1ldJqHlUZtC0g7uMYiIva6jxU9EeGEVLE4lpInWzYpGCbPFgs+WnI2tJMgfewjGlF1WJfi+IepPmeWR4t69J6cbULP+3/+zjE7gMK2VsaRAR+Qcyxogj2FXntfyPUH0/OIWZgtc13WngGb///nBUZBQWUBjwJhfSxb2t3s122XcsYzvpWFXmWe5/LOdtc+OdUdhqDR12YwySRQs5FjWK5YlYYdHVylNq+Z17vd+2r5x2rTWnFf3Wsu+B83a2Ph19p3DRbtsI//9YFAIWFavDe0z1W3KY/2fMzFbzrkWJW1QcqoTR9Coxk8WQeVSnn2s/dd07GZxJEOX7v9dCzXIPbDLyDCXRD4JDK1xnWMlHXflP0rtg7kY7O+tn5la3/+zjE6oMKxUcYRgyriXyvYsj0CflJ3R7WqeajFdtvzMziI08kuE4QwRFoHR+LByq2lTepXUxUIarleYBIleqx1qxrpl/s75D2j8xIz+kkUBoGgbcfH03kePLrUXwrvSTPmvl+MZox2cNd2rNyV7mcislLWKKqnIxY/VkCpRgw6t9KlER4u5axhOoaVsZYeChHyNh6g0lbG3i7k5xjtG/n8SHOVf+lDI1NwEH1CMxYNWZtjiLhxNGIdSuzSTt9a8rsEajn9Kz29WqumX0f5KakVadWVFY5n6X/+zjE8QMN+TMMB6USSW0gIsiTFPmtugfa3QtbWEgJeBtXJVnUjcmnTOpHIxuM0j+OXBqGEeupcCykGrbDyiBSKs24n5nJrMWwzOGTNrtwn8i2g7ELESPoPvTkDsEcYX5xB3Bh8oFmCSmnn0nCIa8DjO+6UVS4RlHY1oc3OIj7o4zFMHAh04YZh/n/b96qAG3yACAApxFApxbgWg+xDw/BWiaI1TnWdihbDfZVHuAhB/qdFIBOMZoG+jjkbUPYHzpngOCfanFRqPDUqVOtiaFCYyvfK2MwNr//+zjE7QEMlXkSR6RNwY6iYlTDFfidWKjBaf5JMEMvG5hxfNwkWj/AZlxSrijjKjokFMtrFDc3pNiHB0gARC5TozLfYpAu4lNkIUTSISTYSAT4I8/I/2Sdl+G8K06T2jDB4g8ziNIQwDC7DYIjAFDIEiESkQUJCTktO02TknROLg4VBVX8pl3XY1QUFNLLFVlqipIiGgqEwlKgIREs6dDoaCr/S0eAiwFARX//86doLFipZdVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6gMKgXEYRIxTAcklIcD0jblVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE6AITZQ0ex7DaSTQNo8STDVhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var mh="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Te=null,Pr=!1;function _l(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Il(){_l(),Pr=!0;try{if(Te||(Te=document.createElement("audio"),Te.src=mh,Te.loop=!0,Te.preload="auto",Te.setAttribute("playsinline",""),Te.setAttribute("webkit-playsinline",""),Te.setAttribute("x-webkit-airplay","deny"),Te.volume=.01,Te.addEventListener("pause",()=>{Pr&&!document.hidden&&setTimeout(()=>Pr&&Te.paused&&Te.play().catch(()=>{}),300)})),Te.paused){let i=Te.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Ml(i,t){_l();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Xe=i=>440*Math.pow(2,(i-69)/12),ds=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Il(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Ml(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination);let s=Math.floor(e.sampleRate*1.7),r=e.createBuffer(2,s,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let u=0;u<s;u++)h[u]=(Math.random()*2-1)*Math.pow(1-u/s,2.6)}let o=e.createConvolver();o.buffer=r,this.rev=e.createGain(),this.rev.gain.value=.22,this.rev.connect(o).connect(this.master),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.music.connect(this.rev),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.sfx.connect(this.rev);let a=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=a.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=a,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,o=this.sfx,a=.005){let l=this.ctx;if(!l)return;let c=l.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+a),c.gain.exponentialRampToValueAtTime(1e-4,n+s);let h=c;if(t==="sawtooth"||t==="square"){let d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=Math.min(9e3,e*6+800),d.Q.value=.7,c.connect(d),h=d}h.connect(o);let u=t==="sine"?[0]:[-6,6];for(let d of u){let p=l.createOscillator();p.type=t,p.frequency.value=e,p.detune.value=d,p.connect(c),p.start(n),p.stop(n+s+.05)}}noise(t,e,n,s="lowpass",r=1e3,o=1,a=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=o;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(a),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,o,a=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(o,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(a),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let o=e.createOscillator();o.frequency.value=t==="wind"?.12:.17;let a=e.createGain();a.gain.value=t==="wind"?.03:.045,o.connect(a).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),o.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:o,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,o=this.loopStart+this.nextBeat*n;if(o<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[a,l,c]of e.notes)Math.abs(a-r)<1e-6&&this.tone(e.wave||"triangle",Xe(l),o,c*n*1.4,e.vol||.12,this.music,.01);e.groove!==!1&&!e.noGroove&&this._groove(e,r,o,n),this.nextBeat+=.5}}_groove(t,e,n,s){let r=Math.min(.2,(t.vol||.1)*1.3),o=c=>Math.abs(e-c)<1e-6,a=Math.abs(e-Math.round(e))<1e-6,l=e%4;a&&(l===0||l===2&&t.tempo>=100)&&(this.slide("sine",150,42,n,.17,r*1.9,this.music),this.noise(n,.02,r*.5,"lowpass",900,1,this.music)),a&&(l===1||l===3)&&t.tempo>=100&&this.noise(n,.12,r*.9,"bandpass",1800,.8,this.music),a||this.noise(n,.04,r*.45,"highpass",7e3,1,this.music),(o(0)||a&&l===0&&e%8===0)&&this.tone("sine",55,n,s*1.6,r*1.1,this.music,.02)}};var Sl={tempo:96,beats:16,wave:"triangle",vol:.1,notes:[[0,60,1],[1,64,1],[2,67,1],[3,64,1],[4,65,1],[5,69,1],[6,72,1],[7,69,1],[8,67,1],[9,71,1],[10,74,1],[11,71,1],[12,64,1],[13,67,1],[14,72,2],[0,48,2],[4,53,2],[8,55,2],[12,48,2]]},ai=class extends ds{play(t,e){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"throw":this.noise(s,.25,.08,"bandpass",700,1.2,this.sfx,2200);break;case"splash":this.noise(s,.35,.1,"lowpass",2400,.8,this.sfx,500),this.tone("sine",220,s,.12,.05);break;case"hook":this.tone("triangle",520,s,.1,.12),this.tone("triangle",780,s+.07,.12,.1);break;case"got":[0,4,7].forEach((r,o)=>this.tone("triangle",Xe(72+r),s+o*.06,.18,.14));break;case"bottle":[0,4,7,12,16].forEach((r,o)=>this.tone("sine",Xe(79+r),s+o*.07,.3,.1));break;case"miss":this.tone("sine",300,s,.12,.05);break;case"build":for(let r=0;r<3;r++)this.noise(s+r*.12,.08,.14,"bandpass",380+r*60,3),this.tone("square",150+r*30,s+r*.12,.06,.05);this.tone("triangle",Xe(79),s+.4,.3,.12);break;case"sharkIn":this.tone("sine",98,s,.5,.12),this.tone("sine",92,s+.55,.6,.12);break;case"bite":this.noise(s,.2,.15,"lowpass",600,1),this.slide("sawtooth",200,90,s,.3,.08);break;case"scare":this.slide("triangle",300,900,s,.3,.12),this.tone("triangle",Xe(84),s+.3,.2,.1);break;case"fish":this.tone("sine",Xe(86),s,.08,.1),this.tone("sine",Xe(91),s+.08,.14,.1);break;case"land":[0,4,7,12].forEach((r,o)=>this.tone("triangle",Xe(67+r),s+o*.12,.5,.14));break;case"win":[0,4,7,12,16,19,24].forEach((r,o)=>{this.tone("triangle",Xe(72+r),s+o*.1,.6,.14),this.tone("sine",Xe(84+r),s+o*.1,.3,.05)});break;case"tap":this.tone("sine",640,s,.06,.08);break;default:}}setMode(t){t==="play"?(this.setBed("waves"),this.setTune(Sl)):t==="menu"?(this.setBed("waves"),this.setTune(Sl)):(this.setBed(null),this.setTune(null))}};Cl(ai,yl);vl(ai);var Fo="170";var Ah=0,bl=1,xh=2;var Rc=1,Ch=2,An=3,ln=0,Pe=1,je=2,on=0,_i=1,bi=2,El=3,wl=4,vh=5,Zn=100,yh=101,_h=102,Ih=103,Mh=104,Sh=200,bh=201,Eh=202,wh=203,fa=204,pa=205,Th=206,Vh=207,Rh=208,Ph=209,Lh=210,qh=211,Uh=212,Dh=213,Nh=214,ga=0,ma=1,Aa=2,Ei=3,xa=4,Ca=5,va=6,ya=7,Pc=0,Fh=1,Bh=2,Ln=0,Bo=1,Oo=2,zo=3,ko=4,Oh=5,Ho=6,Go=7;var Lc=300,wi=301,Ti=302,_a=303,Ia=304,Ar=306,Ma=1e3,Jn=1001,Sa=1002,Qe=1003,zh=1004;var fs=1005;var an=1006,Lr=1007;var Qn=1008;var _n=1009,qc=1010,Uc=1011,$i=1012,Wo=1013,$n=1014,Cn=1015,nn=1016,Xo=1017,Yo=1018,Vi=1020,Dc=35902,Nc=1021,Fc=1022,Je=1023,Bc=1024,Oc=1025,Ii=1026,Ri=1027,zc=1028,Zo=1029,kc=1030,Ko=1031;var jo=1033,Fs=33776,Bs=33777,Os=33778,zs=33779,ba=35840,Ea=35841,wa=35842,Ta=35843,Va=36196,Ra=37492,Pa=37496,La=37808,qa=37809,Ua=37810,Da=37811,Na=37812,Fa=37813,Ba=37814,Oa=37815,za=37816,ka=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,ks=36492,Ya=36494,Za=36495,Hc=36283,Ka=36284,ja=36285,Ja=36286;var Hs=2300,Qa=2301,qr=2302,Tl=2400,Vl=2401,Rl=2402;var kh=3200,Hh=3201;var Gc=0,Gh=1,Pn="",Re="srgb",Ni="srgb-linear",xr="linear",jt="srgb";var oi=7680;var Pl=519,Wh=512,Xh=513,Yh=514,Wc=515,Zh=516,Kh=517,jh=518,Jh=519,Ll=35044;var ql="300 es",vn=2e3,Gs=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ur=Math.PI/180,$a=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Qh(i,t){return(i%t+t)%t}function Dr(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],A=s[0],g=s[3],f=s[6],S=s[1],I=s[4],_=s[7],L=s[2],b=s[5],E=s[8];return r[0]=o*A+a*S+l*L,r[3]=o*g+a*I+l*b,r[6]=o*f+a*_+l*E,r[1]=c*A+h*S+u*L,r[4]=c*g+h*I+u*b,r[7]=c*f+h*_+u*E,r[2]=d*A+p*S+m*L,r[5]=d*g+p*I+m*b,r[8]=d*f+p*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-a*e)*A,t[6]=p*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nr=new Ut;function Xc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){let i=Ws("canvas");return i.style.display="block",i}var Ul={};function Zi(i){i in Ul||(Ul[i]=!0,console.warn(i))}function tu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function eu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var zt={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dl=[.64,.33,.3,.6,.15,.06],Nl=[.2126,.7152,.0722],Fl=[.3127,.329],Bl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Ni]:{primaries:Dl,whitePoint:Fl,transfer:xr,toXYZ:Bl,fromXYZ:Ol,luminanceCoefficients:Nl,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Dl,whitePoint:Fl,transfer:jt,toXYZ:Bl,fromXYZ:Ol,luminanceCoefficients:Nl,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var li,to=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=Ws("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},iu=0,Xs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fr(s[o].image)):r.push(Fr(s[o]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var su=0,Fe=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=an,o=Qn,a=Je,l=_n,c=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=rs(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ma:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ma:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Lc;Fe.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],A=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,_=(p+1)/2,L=(f+1)/2,b=(h+d)/4,E=(u+A)/4,V=(m+g)/4;return I>_&&I>L?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=b/n,r=E/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=V/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=V/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-A)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eo=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ee=class extends eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ys=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],m=r[o+2],A=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==p||h!==m){let g=1-a,f=l*d+c*p+h*m+u*A,S=f>=0?1:-1,I=1-f*f;if(I>Number.EPSILON){let L=Math.sqrt(I),b=Math.atan2(L,f*S);g=Math.sin(g*b)/L,a=Math.sin(a*b)/L}let _=a*S;if(l=l*g+d*_,c=c*g+p*_,h=h*g+m*_,u=u*g+A*_,g===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-a*p,t[e+2]=c*m+h*p+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Br=new T,zl=new Un,ti=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),gs.subVectors(this.max,Gi),ci.subVectors(t.a,Gi),hi.subVectors(t.b,Gi),ui.subVectors(t.c,Gi),bn.subVectors(hi,ci),En.subVectors(ui,hi),zn.subVectors(ci,ui);let e=[0,-bn.z,bn.y,0,-En.z,En.y,0,-zn.z,zn.y,bn.z,0,-bn.x,En.z,0,-En.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-En.y,En.x,0,-zn.y,zn.x,0];return!Or(e,ci,hi,ui,gs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,ci,hi,ui,gs))?!1:(ms.crossVectors(bn,En),e=[ms.x,ms.y,ms.z],Or(e,ci,hi,ui,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new T,new T,new T,new T,new T,new T,new T,new T],Ye=new T,ps=new ti,ci=new T,hi=new T,ui=new T,bn=new T,En=new T,zn=new T,Gi=new T,gs=new T,ms=new T,kn=new T;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){kn.fromArray(i,r);let a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ru=new ti,Wi=new T,zr=new T,Pi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);let e=Wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(zr)),this.expandByPoint(Wi.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new T,kr=new T,As=new T,wn=new T,Hr=new T,xs=new T,Gr=new T,Zs=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(kr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=wn.dot(this.direction),l=-wn.dot(As),c=wn.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kr).addScaledVector(As,d),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){Hr.subVectors(e,t),xs.subVectors(n,t),Gr.crossVectors(Hr,xs);let o=this.direction.dot(Gr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);let l=a*this.direction.dot(xs.crossVectors(wn,xs));if(l<0)return null;let c=a*this.direction.dot(Hr.cross(wn));if(c<0||l+c>o)return null;let h=-a*wn.dot(Gr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,m,A,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,m,A,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=A,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),o=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,m=a*h,A=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-A*c,e[9]=-a*l,e[2]=A-d*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d+A*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=A+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d-A*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=A-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,m=a*h,A=a*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,m=a*l,A=a*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=o*l,p=o*c,m=a*l,A=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,ou)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Tn.crossVectors(n,Ue),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Tn.crossVectors(n,Ue)),Tn.normalize(),Cs.crossVectors(Ue,Tn),s[0]=Tn.x,s[4]=Cs.x,s[8]=Ue.x,s[1]=Tn.y,s[5]=Cs.y,s[9]=Ue.y,s[2]=Tn.z,s[6]=Cs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],A=n[6],g=n[10],f=n[14],S=n[3],I=n[7],_=n[11],L=n[15],b=s[0],E=s[4],V=s[8],v=s[12],x=s[1],w=s[5],B=s[9],D=s[13],k=s[2],K=s[6],G=s[10],$=s[14],H=s[3],rt=s[7],dt=s[11],Mt=s[15];return r[0]=o*b+a*x+l*k+c*H,r[4]=o*E+a*w+l*K+c*rt,r[8]=o*V+a*B+l*G+c*dt,r[12]=o*v+a*D+l*$+c*Mt,r[1]=h*b+u*x+d*k+p*H,r[5]=h*E+u*w+d*K+p*rt,r[9]=h*V+u*B+d*G+p*dt,r[13]=h*v+u*D+d*$+p*Mt,r[2]=m*b+A*x+g*k+f*H,r[6]=m*E+A*w+g*K+f*rt,r[10]=m*V+A*B+g*G+f*dt,r[14]=m*v+A*D+g*$+f*Mt,r[3]=S*b+I*x+_*k+L*H,r[7]=S*E+I*w+_*K+L*rt,r[11]=S*V+I*B+_*G+L*dt,r[15]=S*v+I*D+_*$+L*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],A=t[7],g=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+A*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+g*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],A=t[13],g=t[14],f=t[15],S=u*g*c-A*d*c+A*l*p-a*g*p-u*l*f+a*d*f,I=m*d*c-h*g*c-m*l*p+o*g*p+h*l*f-o*d*f,_=h*A*c-m*u*c+m*a*p-o*A*p-h*a*f+o*u*f,L=m*u*l-h*A*l-m*a*d+o*A*d+h*a*g-o*u*g,b=e*S+n*I+s*_+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=S*E,t[1]=(A*d*r-u*g*r-A*s*p+n*g*p+u*s*f-n*d*f)*E,t[2]=(a*g*r-A*l*r+A*s*c-n*g*c-a*s*f+n*l*f)*E,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*E,t[4]=I*E,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*E,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*f-e*l*f)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*E,t[8]=_*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*f-e*u*f)*E,t[10]=(o*A*r-m*a*r+m*n*c-e*A*c-o*n*f+e*a*f)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*E,t[12]=L*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*E,t[14]=(m*a*s-o*A*s-m*n*l+e*A*l+o*n*g-e*a*g)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,m=r*u,A=o*h,g=o*u,f=a*u,S=l*c,I=l*h,_=l*u,L=n.x,b=n.y,E=n.z;return s[0]=(1-(A+f))*L,s[1]=(p+_)*L,s[2]=(m-I)*L,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(d+f))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(m+I)*E,s[9]=(g-S)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=di.set(s[0],s[1],s[2]).length(),o=di.set(s[4],s[5],s[6]).length(),a=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let c=1/r,h=1/o,u=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(a===vn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Gs)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,m,A;if(a===vn)m=(o+r)*u,A=-2*u;else if(a===Gs)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new T,Ze=new le,au=new T(0,0,0),ou=new T(1,1,1),Tn=new T,Cs=new T,Ue=new T,kl=new le,Hl=new Un,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lu=0,Gl=new T,fi=new Un,pn=new le,vs=new T,Xi=new T,cu=new T,hu=new Un,Wl=new T(1,0,0),Xl=new T(0,1,0),Yl=new T(0,0,1),Zl={type:"added"},uu={type:"removed"},pi={type:"childadded",child:null},Wr={type:"childremoved",child:null},Se=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new cn,n=new Un,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ut}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Xi,vs,this.up):pn.lookAt(vs,Xi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new T(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new T,gn=new T,Xr=new T,mn=new T,gi=new T,mi=new T,Kl=new T,Yr=new T,Zr=new T,Kr=new T,jr=new he,Jr=new he,Qr=new he,Kn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),gn.subVectors(n,e),Xr.subVectors(t,e);let o=Ke.dot(Ke),a=Ke.dot(gn),l=Ke.dot(Xr),c=gn.dot(gn),h=gn.dot(Xr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return jr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),jr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jr,r.x),o.addScaledVector(Jr,r.y),o.addScaledVector(Qr,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gi.subVectors(s,n),mi.subVectors(r,n),Yr.subVectors(t,n);let l=gi.dot(Yr),c=mi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);let h=gi.dot(Zr),u=mi.dot(Zr);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gi,o);Kr.subVectors(t,r);let p=gi.dot(Kr),m=mi.dot(Kr);if(m>=0&&p<=m)return e.copy(r);let A=p*c-l*m;if(A<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(mi,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Kl.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(Kl,a);let f=1/(g+A+d);return o=A*f,a=d*f,e.copy(n).addScaledVector(gi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=Qh(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return zt.fromWorkingColorSpace(ye.copy(this),t),Math.round(_e(ye.r*255,0,255))*65536+Math.round(_e(ye.g*255,0,255))*256+Math.round(_e(ye.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(ye.copy(this),e);let n=ye.r,s=ye.g,r=ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Re){zt.fromWorkingColorSpace(ye.copy(this),t);let e=ye.r,n=ye.g,s=ye.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(ys);let n=Dr(Vn.h,ys.h,e),s=Dr(Vn.s,ys.s,e),r=Dr(Vn.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ye=new Rt;Rt.NAMES=Yc;var du=0,Dn=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=rs(),this.name="",this.blending=_i,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},$e=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new T,_s=new ut,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var js=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},fu=0,ke=new le,ta=new Se,Ai=new T,De=new ti,Yi=new ti,Ae=new T,fe=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?Js:js)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(De.min,Yi.min),De.expandByPoint(Ae),Ae.addVectors(De.max,Yi.max),De.expandByPoint(Ae)):(De.expandByPoint(Yi.min),De.expandByPoint(Yi.max))}De.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),Ae.add(Ai)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new T,l[V]=new T;let c=new T,h=new T,u=new T,d=new ut,p=new ut,m=new ut,A=new T,g=new T;function f(V,v,x){c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,V),p.fromBufferAttribute(r,v),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(w),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(w),a[V].add(A),a[v].add(A),a[x].add(A),l[V].add(g),l[v].add(g),l[x].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let V=0,v=S.length;V<v;++V){let x=S[V],w=x.start,B=x.count;for(let D=w,k=w+B;D<k;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let I=new T,_=new T,L=new T,b=new T;function E(V){L.fromBufferAttribute(s,V),b.copy(L);let v=a[V];I.copy(v),I.sub(L.multiplyScalar(L.dot(v))).normalize(),_.crossVectors(b,v);let w=_.dot(l[V])<0?-1:1;o.setXYZW(V,I.x,I.y,I.z,w)}for(let V=0,v=S.length;V<v;++V){let x=S[V],w=x.start,B=x.count;for(let D=w,k=w+B;D<k;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let A=0,g=l.length;A<g;A++){a.isInterleavedBufferAttribute?p=l[A]*a.data.stride+a.offset:p=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new le,Hn=new Zs,Is=new Pi,Jl=new T,Ms=new T,Ss=new T,bs=new T,ea=new T,Es=new T,Ql=new T,ws=new T,xe=class extends Se{constructor(t=new fe,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ea.fromBufferAttribute(u,t),o?Es.addScaledVector(ea,h):Es.addScaledVector(ea.sub(e),h))}e.add(Es)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(Is.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Is,Jl)===null||Hn.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=o[g.materialIndex],S=Math.max(g.start,p.start),I=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,L=I;_<L;_+=3){let b=a.getX(_),E=a.getX(_+1),V=a.getX(_+2);s=Ts(this,f,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let S=a.getX(g),I=a.getX(g+1),_=a.getX(g+2);s=Ts(this,o,t,n,c,h,u,S,I,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=o[g.materialIndex],S=Math.max(g.start,p.start),I=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,L=I;_<L;_+=3){let b=_,E=_+1,V=_+2;s=Ts(this,f,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let S=g,I=g+1,_=g+2;s=Ts(this,o,t,n,c,h,u,S,I,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function pu(i,t,e,n,s,r,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ln,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:i}}function Ts(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ms),i.getVertexPosition(l,Ss),i.getVertexPosition(c,bs);let h=pu(i,t,e,n,Ms,Ss,bs,Ql);if(h){let u=new T;Kn.getBarycoord(Ql,Ms,Ss,bs,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new T,materialIndex:0};Kn.getNormal(Ms,Ss,bs,d.normal),h.face=d,h.barycoord=u}return h}var ei=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function m(A,g,f,S,I,_,L,b,E,V,v){let x=_/E,w=L/V,B=_/2,D=L/2,k=b/2,K=E+1,G=V+1,$=0,H=0,rt=new T;for(let dt=0;dt<G;dt++){let Mt=dt*w-D;for(let Bt=0;Bt<K;Bt++){let Qt=Bt*x-B;rt[A]=Qt*S,rt[g]=Mt*I,rt[f]=k,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[f]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Bt/E),u.push(1-dt/V),$+=1}}for(let dt=0;dt<V;dt++)for(let Mt=0;Mt<E;Mt++){let Bt=d+Mt+K*dt,Qt=d+Mt+K*(dt+1),X=d+(Mt+1)+K*(dt+1),tt=d+(Mt+1)+K*dt;l.push(Bt,Qt,tt),l.push(Qt,X,tt),H+=6}a.addGroup(p,H,v),p+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function gu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Fn={clone:Li,merge:be},mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Qs=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new T,$l=new ut,tc=new ut,Ne=class extends Qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,$l,tc),e.subVectors(tc,$l)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xi=-90,Ci=1,io=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(xi,Ci,t,e);s.layers=this.layers,this.add(s);let r=new Ne(xi,Ci,t,e);r.layers=this.layers,this.add(r);let o=new Ne(xi,Ci,t,e);o.layers=this.layers,this.add(o);let a=new Ne(xi,Ci,t,e);a.layers=this.layers,this.add(a);let l=new Ne(xi,Ci,t,e);l.layers=this.layers,this.add(l);let c=new Ne(xi,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$s=class extends Fe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends Ee{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $s(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:on});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=an),new io(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},na=new T,xu=new T,Cu=new Ut,xn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=na.subVectors(n,e).cross(xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Pi,Vs=new T,ts=class{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,o=new xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],A=s[10],g=s[11],f=s[12],S=s[13],I=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-p,_-f).normalize(),n[1].setComponents(l+r,d+c,g+p,_+f).normalize(),n[2].setComponents(l+o,d+h,g+m,_+S).normalize(),n[3].setComponents(l-o,d-h,g-m,_-S).normalize(),n[4].setComponents(l-a,d-u,g-A,_-I).normalize(),e===vn)n[5].setComponents(l+a,d+u,g+A,_+I).normalize();else if(e===Gs)n[5].setComponents(a,u,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qi=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],m=[],A=[],g=[];for(let f=0;f<h;f++){let S=f*d-o;for(let I=0;I<c;I++){let _=I*u-r;m.push(_,-S,0),A.push(0,0,1),g.push(I/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let I=S+c*f,_=S+c*(f+1),L=S+1+c*(f+1),b=S+1+c*f;p.push(I,_,b),p.push(_,L,b)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
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
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Uu=`#ifdef USE_BUMPMAP
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xu=`vec3 transformedNormal = objectNormal;
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
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,vd=`
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
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
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
}`,Tf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,Of=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,kf=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
}`,Yf=`#define TOON
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
}`,Zf=`#define TOON
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
}`,Kf=`uniform float size;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Qf=`uniform vec3 color;
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
}`,$f=`uniform float rotation;
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
}`,tp=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:yu,alphahash_pars_fragment:_u,alphamap_fragment:Iu,alphamap_pars_fragment:Mu,alphatest_fragment:Su,alphatest_pars_fragment:bu,aomap_fragment:Eu,aomap_pars_fragment:wu,batching_pars_vertex:Tu,batching_vertex:Vu,begin_vertex:Ru,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:qu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Bu,color_fragment:Ou,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Hu,common:Gu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:Yu,displacementmap_vertex:Zu,emissivemap_fragment:Ku,emissivemap_pars_fragment:ju,colorspace_fragment:Ju,colorspace_pars_fragment:Qu,envmap_fragment:$u,envmap_common_pars_fragment:td,envmap_pars_fragment:ed,envmap_pars_vertex:nd,envmap_physical_pars_fragment:fd,envmap_vertex:id,fog_vertex:sd,fog_pars_vertex:rd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:hd,lights_lambert_pars_fragment:ud,lights_pars_begin:dd,lights_toon_fragment:pd,lights_toon_pars_fragment:gd,lights_phong_fragment:md,lights_phong_pars_fragment:Ad,lights_physical_fragment:xd,lights_physical_pars_fragment:Cd,lights_fragment_begin:vd,lights_fragment_maps:yd,lights_fragment_end:_d,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:bd,map_fragment:Ed,map_pars_fragment:wd,map_particle_fragment:Td,map_particle_pars_fragment:Vd,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:qd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Dd,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Bd,normal_pars_fragment:Od,normal_pars_vertex:zd,normal_vertex:kd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:Yd,opaque_fragment:Zd,packing:Kd,premultiplied_alpha_fragment:jd,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:$d,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:gf,transmission_pars_fragment:mf,uv_pars_fragment:Af,uv_pars_vertex:xf,uv_vertex:Cf,worldpos_vertex:vf,background_vert:yf,background_frag:_f,backgroundCube_vert:If,backgroundCube_frag:Mf,cube_vert:Sf,cube_frag:bf,depth_vert:Ef,depth_frag:wf,distanceRGBA_vert:Tf,distanceRGBA_frag:Vf,equirect_vert:Rf,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:qf,meshbasic_vert:Uf,meshbasic_frag:Df,meshlambert_vert:Nf,meshlambert_frag:Ff,meshmatcap_vert:Bf,meshmatcap_frag:Of,meshnormal_vert:zf,meshnormal_frag:kf,meshphong_vert:Hf,meshphong_frag:Gf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:Yf,meshtoon_frag:Zf,points_vert:Kf,points_frag:jf,shadow_vert:Jf,shadow_frag:Qf,sprite_vert:$f,sprite_frag:tp},it={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},rn={basic:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:be([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:be([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:be([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:be([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:be([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:be([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:be([it.common,it.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:be([it.lights,it.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};rn.physical={uniforms:be([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Rs={r:0,b:0,g:0},Wn=new cn,ep=new le;function np(i,t,e,n,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(S){let I=S.isScene===!0?S.background:null;return I&&I.isTexture&&(I=(S.backgroundBlurriness>0?e:t).get(I)),I}function A(S){let I=!1,_=m(S);_===null?f(a,l):_&&_.isColor&&(f(_,1),I=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,I){let _=m(I);_&&(_.isCubeTexture||_.mapping===Ar)?(h===void 0&&(h=new xe(new ei(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Li(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(I.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Wn)),h.material.toneMapped=zt.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xe(new qi(2,2),new pe({name:"BackgroundMaterial",uniforms:Li(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=zt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,I){S.getRGB(Rs,Zc(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,I,o)}return{getClearColor:function(){return a},setClearColor:function(S,I=1){a.set(S),l=I,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:A,addToRenderList:g}}function ip(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,w,B,D,k){let K=!1,G=u(D,B,w);r!==G&&(r=G,c(r.object)),K=p(x,D,B,k),K&&m(x,D,B,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(x,w,B,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,w,B){let D=B.wireframe===!0,k=n[x.id];k===void 0&&(k={},n[x.id]=k);let K=k[w.id];K===void 0&&(K={},k[w.id]=K);let G=K[D];return G===void 0&&(G=d(l()),K[D]=G),G}function d(x){let w=[],B=[],D=[];for(let k=0;k<e;k++)w[k]=0,B[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:D,object:x,attributes:{},index:null}}function p(x,w,B,D){let k=r.attributes,K=w.attributes,G=0,$=B.getAttributes();for(let H in $)if($[H].location>=0){let dt=k[H],Mt=K[H];if(Mt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function m(x,w,B,D){let k={},K=w.attributes,G=0,$=B.getAttributes();for(let H in $)if($[H].location>=0){let dt=K[H];dt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));let Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),k[H]=Mt,G++}r.attributes=k,r.attributesNum=G,r.index=D}function A(){let x=r.newAttributes;for(let w=0,B=x.length;w<B;w++)x[w]=0}function g(x){f(x,0)}function f(x,w){let B=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;B[x]=1,D[x]===0&&(i.enableVertexAttribArray(x),D[x]=1),k[x]!==w&&(i.vertexAttribDivisor(x,w),k[x]=w)}function S(){let x=r.newAttributes,w=r.enabledAttributes;for(let B=0,D=w.length;B<D;B++)w[B]!==x[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function I(x,w,B,D,k,K,G){G===!0?i.vertexAttribIPointer(x,w,B,k,K):i.vertexAttribPointer(x,w,B,D,k,K)}function _(x,w,B,D){A();let k=D.attributes,K=B.getAttributes(),G=w.defaultAttributeValues;for(let $ in K){let H=K[$];if(H.location>=0){let rt=k[$];if(rt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){let dt=rt.normalized,Mt=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;let Qt=Bt.buffer,X=Bt.type,tt=Bt.bytesPerElement,yt=X===i.INT||X===i.UNSIGNED_INT||rt.gpuType===Wo;if(rt.isInterleavedBufferAttribute){let at=rt.data,wt=at.stride,Pt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)f(H.location+Ot,at.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)g(H.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<H.locationSize;Ot++)I(H.location+Ot,Mt/H.locationSize,X,dt,wt*tt,(Pt+Mt/H.locationSize*Ot)*tt,yt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)f(H.location+at,rt.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<H.locationSize;at++)g(H.location+at);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let at=0;at<H.locationSize;at++)I(H.location+at,Mt/H.locationSize,X,dt,Mt*tt,Mt/H.locationSize*at*tt,yt)}}else if(G!==void 0){let dt=G[$];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}S()}function L(){V();for(let x in n){let w=n[x];for(let B in w){let D=w[B];for(let k in D)h(D[k].object),delete D[k];delete w[B]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;let w=n[x.id];for(let B in w){let D=w[B];for(let k in D)h(D[k].object),delete D[k];delete w[B]}delete n[x.id]}function E(x){for(let w in n){let B=n[w];if(B[x.id]===void 0)continue;let D=B[x.id];for(let k in D)h(D[k].object),delete D[k];delete B[x.id]}}function V(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:S}}function sp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Je&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let V=E===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!V)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:S,maxVaryings:I,maxFragmentUniforms:_,vertexTextures:L,maxSamples:b}}function ap(i){let t=this,e=null,n=0,s=!1,r=!1,o=new xn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,I=S*4,_=f.clippingState||null;l.value=_,_=h(m,d,I,p);for(let L=0;L!==I;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let f=p+A*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let I=0,_=p;I!==A;++I,_+=4)o.copy(u[I]).applyMatrix4(S,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function op(i){let t=new WeakMap;function e(o,a){return a===_a?o.mapping=wi:a===Ia&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_a||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new so(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nn=class extends Qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yi=4,ec=[.125,.215,.35,.446,.526,.582],jn=20,ia=new Nn,nc=new Rt,sa=null,ra=0,aa=0,oa=!1,Yn=(1+Math.sqrt(5))/2,vi=1/Yn,ic=[new T(-Yn,vi,0),new T(Yn,vi,0),new T(-vi,0,Yn),new T(vi,0,Yn),new T(0,Yn,-vi),new T(0,Yn,vi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:nn,format:Je,colorSpace:Ni,depthBuffer:!1},s=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=cp(r,t,e)}return s}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nc),h.toneMapping=Ln,h.autoClear=!1;let p=new $e({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new xe(new ei,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(nc),A=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let I=this._cubeSize;Ps(s,S*I,f>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):jn;g>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${jn}`);let f=[],S=0;for(let E=0;E<jn;++E){let V=E/A,v=Math.exp(-V*V/2);f.push(v),E===0?S+=v:E<g&&(S+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:I}=this;d.dTheta.value=m,d.mipInt.value=I-n;let _=this._sizeLods[s],L=3*_*(s>I-yi?s-I+yi:0),b=4*(this._cubeSize-_);Ps(e,L,b,3*_,2*_),l.setRenderTarget(e),l.render(u,ia)}};function lp(i){let t=[],e=[],n=[],s=i,r=i-yi+1+ec.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-yi?l=ec[o-i+yi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,f=1,S=new Float32Array(A*m*p),I=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let b=0;b<p;b++){let E=b%3*2/3-1,V=b>2?0:-1,v=[E,V,0,E+2/3,V,0,E+2/3,V+1,0,E,V,0,E+2/3,V+1,0,E,V+1,0];S.set(v,A*m*b),I.set(d,g*m*b);let x=[b,b,b,b,b,b];_.set(x,f*m*b)}let L=new fe;L.setAttribute("position",new Me(S,A)),L.setAttribute("uv",new Me(I,g)),L.setAttribute("faceIndex",new Me(_,f)),t.push(L),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){let n=new Ee(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cp(i,t,e){let n=new Float32Array(jn),s=new T(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function rc(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function ac(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function hp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_a||l===Ia,h=l===wi||l===Ti;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new tr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new tr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function up(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,f=A.length;g<f;g++)t.remove(A[g])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,f=A.length;g<f;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let S=p.array;A=p.version;for(let I=0,_=S.length;I<_;I+=3){let L=S[I+0],b=S[I+1],E=S[I+2];d.push(L,b,b,E,E,L)}}else if(m!==void 0){let S=m.array;A=m.version;for(let I=0,_=S.length/3-1;I<_;I+=3){let L=I+0,b=I+1,E=I+2;d.push(L,b,b,E,E,L)}}else return;let g=new(Xc(d)?Js:js)(d,1);g.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],A[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,A,0,m);let f=0;for(let S=0;S<m;S++)f+=p[S]*A[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gp(i,t,e){let n=new WeakMap,s=new he;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],I=0;p===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let _=a.attributes.position.count*I,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*L*4*u),E=new Ys(b,_,L,u);E.type=Cn,E.needsUpdate=!0;let V=I*4;for(let x=0;x<u;x++){let w=g[x],B=f[x],D=S[x],k=_*L*4*x;for(let K=0;K<w.count;K++){let G=K*V;p===!0&&(s.fromBufferAttribute(w,K),b[k+G+0]=s.x,b[k+G+1]=s.y,b[k+G+2]=s.z,b[k+G+3]=0),m===!0&&(s.fromBufferAttribute(B,K),b[k+G+4]=s.x,b[k+G+5]=s.y,b[k+G+6]=s.z,b[k+G+7]=0),A===!0&&(s.fromBufferAttribute(D,K),b[k+G+8]=s.x,b[k+G+9]=s.y,b[k+G+10]=s.z,b[k+G+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ut(_,L)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var er=class extends Fe{constructor(t,e,n,s,r,o,a,l,c,h=Ii){if(h!==Ii&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=$n),n===void 0&&h===Ri&&(n=Vi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jc=new Fe,oc=new er(1,1),Jc=new Ys,Qc=new no,$c=new $s,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Fi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),me(e,n)}}function _p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),me(e,n)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),me(e,n)}}function Mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=Wc,r=oc):r=jc,e.setTexture2D(t||r,s)}function Lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qc,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$c,s)}function Up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jc,s)}function Dp(i){switch(i){case 5126:return Ap;case 35664:return xp;case 35665:return Cp;case 35666:return vp;case 35674:return yp;case 35675:return _p;case 35676:return Ip;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return bp;case 35669:case 35673:return Ep;case 5125:return wp;case 36294:return Tp;case 36295:return Vp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Up}}function Np(i,t){i.uniform1fv(this.addr,t)}function Fp(i,t){let e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Bp(i,t){let e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Op(i,t){let e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function zp(i,t){let e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kp(i,t){let e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hp(i,t){let e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gp(i,t){i.uniform1iv(this.addr,t)}function Wp(i,t){i.uniform2iv(this.addr,t)}function Xp(i,t){i.uniform3iv(this.addr,t)}function Yp(i,t){i.uniform4iv(this.addr,t)}function Zp(i,t){i.uniform1uiv(this.addr,t)}function Kp(i,t){i.uniform2uiv(this.addr,t)}function jp(i,t){i.uniform3uiv(this.addr,t)}function Jp(i,t){i.uniform4uiv(this.addr,t)}function Qp(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jc,r[o])}function $p(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qc,r[o])}function tg(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$c,r[o])}function eg(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jc,r[o])}function ng(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Bp;case 35666:return Op;case 35674:return zp;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Kp;case 36295:return jp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}var ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}},ao=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ng(e.type)}},oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},la=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function ig(i,t,e){let n=i.name,s=n.length;for(la.lastIndex=0;;){let r=la.exec(n),o=la.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fc(e,c===void 0?new ro(a,i,t):new ao(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new oo(a),fc(e,u)),e=u}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ig(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function pc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var sg=37297,rg=0;function ag(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var gc=new Ut;function og(i){zt._getMatrix(gc,zt.workingColorSpace,i);let t=`mat3( ${gc.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ag(i.getShaderSource(t),o)}else return s}function lg(i,t){let e=og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cg(i,t){let e;switch(t){case Bo:e="Linear";break;case Oo:e="Reinhard";break;case zo:e="Cineon";break;case ko:e="ACESFilmic";break;case Ho:e="AgX";break;case Go:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ls=new T;function hg(){zt.getLuminanceCoefficients(Ls);let i=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function dg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ki(i){return i!==""}function Ac(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(pg,mg)}var gg=new Map;function mg(i,t){let e=Ft[t];if(e===void 0){let n=gg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(Ag,xg)}function xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function vg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ti:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Cg(e),c=vg(e),h=yg(e),u=_g(e),d=Ig(e),p=ug(e),m=dg(r),A=s.createProgram(),g,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ki).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ki).join(`
`),f.length>0&&(f+=`
`)):(g=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),f=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Ln?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),o=lo(o),o=Ac(o,e),o=xc(o,e),a=lo(a),a=Ac(a,e),a=xc(a,e),o=Cc(o),a=Cc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=S+g+o,_=S+f+a,L=pc(s,s.VERTEX_SHADER,I),b=pc(s,s.FRAGMENT_SHADER,_);s.attachShader(A,L),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(A).trim(),D=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(b).trim(),K=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,b);else{let $=mc(s,L,"vertex"),H=mc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+$+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(D===""||k==="")&&(G=!1);G&&(w.diagnostics={runnable:K,programLog:B,vertexShader:{log:D,prefix:g},fragmentShader:{log:k,prefix:f}})}s.deleteShader(L),s.deleteShader(b),V=new Si(s,A),v=fg(s,A)}let V;this.getUniforms=function(){return V===void 0&&E(this),V};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(A,sg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=b,this}var Sg=0,co=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ho(t),e.set(t,n)),n}},ho=class{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}};function bg(i,t,e,n,s,r,o){let a=new Ks,l=new co,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,x,w,B,D){let k=B.fog,K=D.geometry,G=v.isMeshStandardMaterial?B.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),H=$&&$.mapping===Ar?$.image.height:null,rt=m[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=dt!==void 0?dt.length:0,Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let Qt,X,tt,yt;if(rt){let Jt=rn[rt];Qt=Jt.vertexShader,X=Jt.fragmentShader}else Qt=v.vertexShader,X=v.fragmentShader,l.update(v),tt=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let at=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,Ot=D.isBatchedMesh===!0,oe=!!v.map,Wt=!!v.matcap,ue=!!$,U=!!v.aoMap,Oe=!!v.lightMap,kt=!!v.bumpMap,Ht=!!v.normalMap,bt=!!v.displacementMap,ne=!!v.emissiveMap,St=!!v.metalnessMap,M=!!v.roughnessMap,C=v.anisotropy>0,N=v.clearcoat>0,Y=v.dispersion>0,j=v.iridescence>0,W=v.sheen>0,_t=v.transmission>0,ot=C&&!!v.anisotropyMap,ft=N&&!!v.clearcoatMap,Xt=N&&!!v.clearcoatNormalMap,J=N&&!!v.clearcoatRoughnessMap,pt=j&&!!v.iridescenceMap,Et=j&&!!v.iridescenceThicknessMap,Tt=W&&!!v.sheenColorMap,gt=W&&!!v.sheenRoughnessMap,Gt=!!v.specularMap,Nt=!!v.specularColorMap,te=!!v.specularIntensityMap,R=_t&&!!v.transmissionMap,st=_t&&!!v.thicknessMap,z=!!v.gradientMap,Z=!!v.alphaMap,ht=v.alphaTest>0,lt=!!v.alphaHash,Lt=!!v.extensions,ce=Ln;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ce={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:X,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ni,alphaToCoverage:!!v.alphaToCoverage,map:oe,matcap:Wt,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Oe,bumpMap:kt,normalMap:Ht,displacementMap:d&&bt,emissiveMap:ne,normalMapObjectSpace:Ht&&v.normalMapType===Gh,normalMapTangentSpace:Ht&&v.normalMapType===Gc,metalnessMap:St,roughnessMap:M,anisotropy:C,anisotropyMap:ot,clearcoat:N,clearcoatMap:ft,clearcoatNormalMap:Xt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:te,transmission:_t,transmissionMap:R,thicknessMap:st,gradientMap:z,opaque:v.transparent===!1&&v.blending===_i&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:lt,combine:v.combine,mapUv:oe&&A(v.map.channel),aoMapUv:U&&A(v.aoMap.channel),lightMapUv:Oe&&A(v.lightMap.channel),bumpMapUv:kt&&A(v.bumpMap.channel),normalMapUv:Ht&&A(v.normalMap.channel),displacementMapUv:bt&&A(v.displacementMap.channel),emissiveMapUv:ne&&A(v.emissiveMap.channel),metalnessMapUv:St&&A(v.metalnessMap.channel),roughnessMapUv:M&&A(v.roughnessMap.channel),anisotropyMapUv:ot&&A(v.anisotropyMap.channel),clearcoatMapUv:ft&&A(v.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(v.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(v.sheenRoughnessMap.channel),specularMapUv:Gt&&A(v.specularMap.channel),specularColorMapUv:Nt&&A(v.specularColorMap.channel),specularIntensityMapUv:te&&A(v.specularIntensityMap.channel),transmissionMapUv:R&&A(v.transmissionMap.channel),thicknessMapUv:st&&A(v.thicknessMap.channel),alphaMapUv:Z&&A(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ht||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!K.attributes.uv&&(oe||Z),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:D.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&v.map.isVideoTexture===!0&&zt.getTransfer(v.map.colorSpace)===jt,decodeVideoTextureEmissive:ne&&v.emissiveMap.isVideoTexture===!0&&zt.getTransfer(v.emissiveMap.colorSpace)===jt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===je,flipSided:v.side===Pe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Lt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function f(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)x.push(w),x.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(S(x,v),I(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function I(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){let x=m[v.type],w;if(x){let B=rn[x];w=Fn.clone(B.uniforms)}else w=v.uniforms;return w}function L(v,x){let w;for(let B=0,D=h.length;B<D;B++){let k=h[B];if(k.cacheKey===x){w=k,++w.usedTimes;break}}return w===void 0&&(w=new Mg(i,x,v,r),h.push(w)),w}function b(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function E(v){l.remove(v)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:V}}function Eg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,A,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=g),t++,f}function a(u,d,p,m,A,g){let f=o(u,d,p,m,A,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,A,g){let f=o(u,d,p,m,A,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(d||yc),s.length>1&&s.sort(d||yc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Tg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _c,i.set(n,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Rt};break;case"SpotLight":e={position:new T,direction:new T,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Pg=0;function Lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){let t=new Vg,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new le,o=new le;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,m=0,A=0,g=0,f=0,S=0,I=0,_=0,L=0,b=0,E=0;c.sort(Lg);for(let v=0,x=c.length;v<x;v++){let w=c[v],B=w.color,D=w.intensity,k=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*D,u+=B.g*D,d+=B.b*D;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],D);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=w.shadow.matrix,S++}n.directional[p]=G,p++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(B).multiplyScalar(D),G.distance=k,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let $=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,$.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[A]=$.matrix,w.castShadow){let H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[A]=H,n.spotShadowMap[A]=K,_++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(B).multiplyScalar(D),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=w.shadow.matrix,I++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(D),G.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let V=n.hash;(V.directionalLength!==p||V.pointLength!==m||V.spotLength!==A||V.rectAreaLength!==g||V.hemiLength!==f||V.numDirectionalShadows!==S||V.numPointShadows!==I||V.numSpotShadows!==_||V.numSpotMaps!==L||V.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=_+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,V.directionalLength=p,V.pointLength=m,V.spotLength=A,V.rectAreaLength=g,V.hemiLength=f,V.numDirectionalShadows=S,V.numPointShadows=I,V.numSpotShadows=_,V.numSpotMaps=L,V.numLightProbes=E,n.version=Pg++)}function l(c,h){let u=0,d=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let I=c[f];if(I.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(I.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(I.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(I.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(I.width*.5,0,0),_.halfHeight.set(0,I.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(I.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),d++}else if(I.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(I.matrixWorld),_.direction.transformDirection(g),A++}}}return{setup:a,setupView:l,state:n}}function Ic(i){let t=new qg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ug(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ic(i),t.set(s,[a])):r>=o.length?(a=new Ic(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uo=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Fg(i,t,e){let n=new ts,s=new ut,r=new ut,o=new he,a=new uo({depthPacking:Hh}),l=new fo,c={},h=e.maxTextureSize,u={[ln]:Pe,[Pe]:ln,[je]:je},d=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Dg,fragmentShader:Ng}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new fe;m.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new xe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let f=this.type;this.render=function(b,E,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let v=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(on),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let D=f!==An&&this.type===An,k=f===An&&this.type!==An;for(let K=0,G=b.length;K<G;K++){let $=b[K],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||D===!0||k===!0){let Mt=this.type!==An?{minFilter:Qe,magFilter:Qe}:{};H.map!==null&&H.map.dispose(),H.map=new Ee(s.x,s.y,Mt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let dt=H.getViewportCount();for(let Mt=0;Mt<dt;Mt++){let Bt=H.getViewport(Mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(o),H.updateMatrices($,Mt),n=H.getFrustum(),_(E,V,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===An&&S(H,V),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(v,x,w)};function S(b,E){let V=t.update(A);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ee(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,V,d,A,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,V,p,A,null)}function I(b,E,V,v){let x=null,w=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=V.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let B=x.uuid,D=E.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let K=k[D];K===void 0&&(K=x.clone(),k[D]=K,E.addEventListener("dispose",L)),x=K}if(x.visible=E.visible,x.wireframe=E.wireframe,v===An?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=i.properties.get(x);B.light=V}return x}function _(b,E,V,v,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===An)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);let D=t.update(b),k=b.material;if(Array.isArray(k)){let K=D.groups;for(let G=0,$=K.length;G<$;G++){let H=K[G],rt=k[H.materialIndex];if(rt&&rt.visible){let dt=I(b,rt,v,x);b.onBeforeShadow(i,b,E,V,D,dt,H),i.renderBufferDirect(V,null,D,dt,b,H),b.onAfterShadow(i,b,E,V,D,dt,H)}}}else if(k.visible){let K=I(b,k,v,x);b.onBeforeShadow(i,b,E,V,D,K,null),i.renderBufferDirect(V,null,D,K,b,null),b.onAfterShadow(i,b,E,V,D,K,null)}}let B=b.children;for(let D=0,k=B.length;D<k;D++)_(B[D],E,V,v,x)}function L(b){b.target.removeEventListener("dispose",L);for(let V in c){let v=c[V],x=b.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var Bg={[ga]:ma,[Aa]:va,[xa]:ya,[Ei]:Ca,[ma]:ga,[va]:Aa,[ya]:xa,[Ca]:Ei};function Og(i,t){function e(){let R=!1,st=new he,z=null,Z=new he(0,0,0,0);return{setMask:function(ht){z!==ht&&!R&&(i.colorMask(ht,ht,ht,ht),z=ht)},setLocked:function(ht){R=ht},setClear:function(ht,lt,Lt,ce,Ce){Ce===!0&&(ht*=ce,lt*=ce,Lt*=ce),st.set(ht,lt,Lt,ce),Z.equals(st)===!1&&(i.clearColor(ht,lt,Lt,ce),Z.copy(st))},reset:function(){R=!1,z=null,Z.set(-1,0,0,0)}}}function n(){let R=!1,st=!1,z=null,Z=null,ht=null;return{setReversed:function(lt){if(st!==lt){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ht;ht=null,this.setClear(ce)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(lt){z!==lt&&!R&&(i.depthMask(lt),z=lt)},setFunc:function(lt){if(st&&(lt=Bg[lt]),Z!==lt){switch(lt){case ga:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){R=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){R=!1,z=null,Z=null,ht=null,st=!1}}}function s(){let R=!1,st=null,z=null,Z=null,ht=null,lt=null,Lt=null,ce=null,Ce=null;return{setTest:function(Jt){R||(Jt?at(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!R&&(i.stencilMask(Jt),st=Jt)},setFunc:function(Jt,Ge,hn){(z!==Jt||Z!==Ge||ht!==hn)&&(i.stencilFunc(Jt,Ge,hn),z=Jt,Z=Ge,ht=hn)},setOp:function(Jt,Ge,hn){(lt!==Jt||Lt!==Ge||ce!==hn)&&(i.stencilOp(Jt,Ge,hn),lt=Jt,Lt=Ge,ce=hn)},setLocked:function(Jt){R=Jt},setClear:function(Jt){Ce!==Jt&&(i.clearStencil(Jt),Ce=Jt)},reset:function(){R=!1,st=null,z=null,Z=null,ht=null,lt=null,Lt=null,ce=null,Ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,S=null,I=null,_=null,L=null,b=null,E=new Rt(0,0,0),V=0,v=!1,x=null,w=null,B=null,D=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let rt=null,dt={},Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Qt=new he().fromArray(Mt),X=new he().fromArray(Bt);function tt(R,st,z,Z){let ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<z;Lt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}let yt={};yt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ei),kt(!1),Ht(bl),at(i.CULL_FACE),U(on);function at(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Pt(R,st){return u[R]!==st?(i.bindFramebuffer(R,st),u[R]=st,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(R,st){let z=p,Z=!1;if(R){z=d.get(st),z===void 0&&(z=[],d.set(st,z));let ht=R.textures;if(z.length!==ht.length||z[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)z[lt]=i.COLOR_ATTACHMENT0+lt;z.length=ht.length,Z=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Z=!0);Z&&i.drawBuffers(z)}function oe(R){return m!==R?(i.useProgram(R),m=R,!0):!1}let Wt={[Zn]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[_h]:i.FUNC_REVERSE_SUBTRACT};Wt[Ih]=i.MIN,Wt[Mh]=i.MAX;let ue={[Sh]:i.ZERO,[bh]:i.ONE,[Eh]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[Th]:i.DST_ALPHA,[wh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[qh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Dh]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(R,st,z,Z,ht,lt,Lt,ce,Ce,Jt){if(R===on){A===!0&&(wt(i.BLEND),A=!1);return}if(A===!1&&(at(i.BLEND),A=!0),R!==vh){if(R!==g||Jt!==v){if((f!==Zn||_!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,_=Zn),Jt)switch(R){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,I=null,L=null,b=null,E.set(0,0,0),V=0,g=R,v=Jt}return}ht=ht||st,lt=lt||z,Lt=Lt||Z,(st!==f||ht!==_)&&(i.blendEquationSeparate(Wt[st],Wt[ht]),f=st,_=ht),(z!==S||Z!==I||lt!==L||Lt!==b)&&(i.blendFuncSeparate(ue[z],ue[Z],ue[lt],ue[Lt]),S=z,I=Z,L=lt,b=Lt),(ce.equals(E)===!1||Ce!==V)&&(i.blendColor(ce.r,ce.g,ce.b,Ce),E.copy(ce),V=Ce),g=R,v=!1}function Oe(R,st){R.side===je?wt(i.CULL_FACE):at(i.CULL_FACE);let z=R.side===Pe;st&&(z=!z),kt(z),R.blending===_i&&R.transparent===!1?U(on):U(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let Z=R.stencilWrite;a.setTest(Z),Z&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){x!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),x=R)}function Ht(R){R!==Ah?(at(i.CULL_FACE),R!==w&&(R===bl?i.cullFace(i.BACK):R===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),w=R}function bt(R){R!==B&&(G&&i.lineWidth(R),B=R)}function ne(R,st,z){R?(at(i.POLYGON_OFFSET_FILL),(D!==st||k!==z)&&(i.polygonOffset(st,z),D=st,k=z)):wt(i.POLYGON_OFFSET_FILL)}function St(R){R?at(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function M(R){R===void 0&&(R=i.TEXTURE0+K-1),rt!==R&&(i.activeTexture(R),rt=R)}function C(R,st,z){z===void 0&&(rt===null?z=i.TEXTURE0+K-1:z=rt);let Z=dt[z];Z===void 0&&(Z={type:void 0,texture:void 0},dt[z]=Z),(Z.type!==R||Z.texture!==st)&&(rt!==z&&(i.activeTexture(z),rt=z),i.bindTexture(R,st||yt[R]),Z.type=R,Z.texture=st)}function N(){let R=dt[rt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(R){Qt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Qt.copy(R))}function gt(R){X.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Gt(R,st){let z=c.get(st);z===void 0&&(z=new WeakMap,c.set(st,z));let Z=z.get(R);Z===void 0&&(Z=i.getUniformBlockIndex(st,R.name),z.set(R,Z))}function Nt(R,st){let Z=c.get(st).get(R);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,R.__bindingPointIndex),l.set(st,Z))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,dt={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,S=null,I=null,_=null,L=null,b=null,E=new Rt(0,0,0),V=0,v=!1,x=null,w=null,B=null,D=null,k=null,Qt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:wt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:oe,setBlending:U,setMaterial:Oe,setFlipSided:kt,setCullFace:Ht,setLineWidth:bt,setPolygonOffset:ne,setScissorTest:St,activeTexture:M,bindTexture:C,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:pt,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:J,texSubImage2D:W,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Tt,viewport:gt,reset:te}}function Mc(i,t,e,n){let s=zg(n);switch(e){case Nc:return i*t;case Bc:return i*t;case Oc:return i*t*2;case zc:return i*t/s.components*s.byteLength;case Zo:return i*t/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case Fc:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case jo:return i*t*4/s.components*s.byteLength;case Fs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ks:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hc:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zg(i){switch(i){case _n:case qc:return{byteLength:1,components:1};case $i:case Uc:case nn:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case $n:case Wo:case Cn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function kg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,C){return p?new OffscreenCanvas(M,C):Ws("canvas")}function A(M,C,N){let Y=1,j=St(M);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*j.width),_t=Math.floor(Y*j.height);u===void 0&&(u=m(W,_t));let ot=C?m(W,_t):u;return ot.width=W,ot.height=_t,ot.getContext("2d").drawImage(M,0,0,W,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+_t+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function g(M){return M.generateMipmaps}function f(M){i.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,C,N,Y,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=C;if(C===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),C===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),C===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),C===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),C===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),C===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),C===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),C===i.RGBA){let _t=j?xr:zt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=_t===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(M,C){let N;return M?C===null||C===$n||C===Vi?N=i.DEPTH24_STENCIL8:C===Cn?N=i.DEPTH32F_STENCIL8:C===$i&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$n||C===Vi?N=i.DEPTH_COMPONENT24:C===Cn?N=i.DEPTH_COMPONENT32F:C===$i&&(N=i.DEPTH_COMPONENT16),N}function L(M,C){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Qe&&M.minFilter!==an?Math.log2(Math.max(C.width,C.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?C.mipmaps.length:1}function b(M){let C=M.target;C.removeEventListener("dispose",b),V(C),C.isVideoTexture&&h.delete(C)}function E(M){let C=M.target;C.removeEventListener("dispose",E),x(C)}function V(M){let C=n.get(M);if(C.__webglInit===void 0)return;let N=M.source,Y=d.get(N);if(Y){let j=Y[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(M),Object.keys(Y).length===0&&d.delete(N)}n.remove(M)}function v(M){let C=n.get(M);i.deleteTexture(C.__webglTexture);let N=M.source,Y=d.get(N);delete Y[C.__cacheKey],o.memory.textures--}function x(M){let C=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let j=0;j<C.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(C.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)i.deleteFramebuffer(C.__webglFramebuffer[Y]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let N=M.textures;for(let Y=0,j=N.length;Y<j;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(M)}let w=0;function B(){w=0}function D(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function k(M){let C=[];return C.push(M.wrapS),C.push(M.wrapT),C.push(M.wrapR||0),C.push(M.magFilter),C.push(M.minFilter),C.push(M.anisotropy),C.push(M.internalFormat),C.push(M.format),C.push(M.type),C.push(M.generateMipmaps),C.push(M.premultiplyAlpha),C.push(M.flipY),C.push(M.unpackAlignment),C.push(M.colorSpace),C.join()}function K(M,C){let N=n.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,M,C);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+C)}function G(M,C){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+C)}function $(M,C){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,C);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+C)}function H(M,C){let N=n.get(M);if(M.version>0&&N.__version!==M.version){tt(N,M,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+C)}let rt={[Ma]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},dt={[Qe]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Wh]:i.NEVER,[Jh]:i.ALWAYS,[Xh]:i.LESS,[Wc]:i.LEQUAL,[Yh]:i.EQUAL,[jh]:i.GEQUAL,[Zh]:i.GREATER,[Kh]:i.NOTEQUAL};function Bt(M,C){if(C.type===Cn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===an||C.magFilter===Lr||C.magFilter===fs||C.magFilter===Qn||C.minFilter===an||C.minFilter===Lr||C.minFilter===fs||C.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,rt[C.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,rt[C.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,rt[C.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,dt[C.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,dt[C.minFilter]),C.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Qe||C.minFilter!==fs&&C.minFilter!==Qn||C.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Qt(M,C){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,C.addEventListener("dispose",b));let Y=C.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let W=k(C);if(W!==M.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[W].usedTimes++;let _t=j[M.__cacheKey];_t!==void 0&&(j[M.__cacheKey].usedTimes--,_t.usedTimes===0&&v(C)),M.__cacheKey=W,M.__webglTexture=j[W].texture}return N}function X(M,C,N){let Y=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=i.TEXTURE_3D);let j=Qt(M,C),W=C.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);let _t=n.get(W);if(W.version!==_t.__version||j===!0){e.activeTexture(i.TEXTURE0+N);let ot=zt.getPrimaries(zt.workingColorSpace),ft=C.colorSpace===Pn?null:zt.getPrimaries(C.colorSpace),Xt=C.colorSpace===Pn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let J=A(C.image,!1,s.maxTextureSize);J=ne(C,J);let pt=r.convert(C.format,C.colorSpace),Et=r.convert(C.type),Tt=I(C.internalFormat,pt,Et,C.colorSpace,C.isVideoTexture);Bt(Y,C);let gt,Gt=C.mipmaps,Nt=C.isVideoTexture!==!0,te=_t.__version===void 0||j===!0,R=W.dataReady,st=L(C,J);if(C.isDepthTexture)Tt=_(C.format===Ri,C.type),te&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Tt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,pt,Et,null));else if(C.isDataTexture)if(Gt.length>0){Nt&&te&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let z=0,Z=Gt.length;z<Z;z++)gt=Gt[z],Nt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(i.TEXTURE_2D,z,Tt,gt.width,gt.height,0,pt,Et,gt.data);C.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(i.TEXTURE_2D,st,Tt,J.width,J.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,pt,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,pt,Et,J.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,Gt[0].width,Gt[0].height,J.depth);for(let z=0,Z=Gt.length;z<Z;z++)if(gt=Gt[z],C.format!==Je)if(pt!==null)if(Nt){if(R)if(C.layerUpdates.size>0){let ht=Mc(gt.width,gt.height,C.format,C.type);for(let lt of C.layerUpdates){let Lt=gt.data.subarray(lt*ht/gt.data.BYTES_PER_ELEMENT,(lt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,lt,gt.width,gt.height,1,pt,Lt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,gt.width,gt.height,J.depth,pt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Tt,gt.width,gt.height,J.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,gt.width,gt.height,J.depth,pt,Et,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Tt,gt.width,gt.height,J.depth,0,pt,Et,gt.data)}else{Nt&&te&&e.texStorage2D(i.TEXTURE_2D,st,Tt,Gt[0].width,Gt[0].height);for(let z=0,Z=Gt.length;z<Z;z++)gt=Gt[z],C.format!==Je?pt!==null?Nt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(i.TEXTURE_2D,z,Tt,gt.width,gt.height,0,pt,Et,gt.data)}else if(C.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Tt,J.width,J.height,J.depth),R)if(C.layerUpdates.size>0){let z=Mc(J.width,J.height,C.format,C.type);for(let Z of C.layerUpdates){let ht=J.data.subarray(Z*z/J.data.BYTES_PER_ELEMENT,(Z+1)*z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,pt,Et,ht)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pt,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,J.width,J.height,J.depth,0,pt,Et,J.data);else if(C.isData3DTexture)Nt?(te&&e.texStorage3D(i.TEXTURE_3D,st,Tt,J.width,J.height,J.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pt,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,J.width,J.height,J.depth,0,pt,Et,J.data);else if(C.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,Tt,J.width,J.height);else{let z=J.width,Z=J.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Tt,z,Z,0,pt,Et,null),z>>=1,Z>>=1}}else if(Gt.length>0){if(Nt&&te){let z=St(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Tt,z.width,z.height)}for(let z=0,Z=Gt.length;z<Z;z++)gt=Gt[z],Nt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt,Et,gt):e.texImage2D(i.TEXTURE_2D,z,Tt,pt,Et,gt);C.generateMipmaps=!1}else if(Nt){if(te){let z=St(J);e.texStorage2D(i.TEXTURE_2D,st,Tt,z.width,z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,Tt,pt,Et,J);g(C)&&f(Y),_t.__version=W.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function tt(M,C,N){if(C.image.length!==6)return;let Y=Qt(M,C),j=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let _t=zt.getPrimaries(zt.workingColorSpace),ot=C.colorSpace===Pn?null:zt.getPrimaries(C.colorSpace),ft=C.colorSpace===Pn||_t===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Xt=C.isCompressedTexture||C.image[0].isCompressedTexture,J=C.image[0]&&C.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Xt&&!J?pt[Z]=A(C.image[Z],!0,s.maxCubemapSize):pt[Z]=J?C.image[Z].image:C.image[Z],pt[Z]=ne(C,pt[Z]);let Et=pt[0],Tt=r.convert(C.format,C.colorSpace),gt=r.convert(C.type),Gt=I(C.internalFormat,Tt,gt,C.colorSpace),Nt=C.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,R=j.dataReady,st=L(C,Et);Bt(i.TEXTURE_CUBE_MAP,C);let z;if(Xt){Nt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,Et.width,Et.height);for(let Z=0;Z<6;Z++){z=pt[Z].mipmaps;for(let ht=0;ht<z.length;ht++){let lt=z[ht];C.format!==Je?Tt!==null?Nt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Tt,gt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Gt,lt.width,lt.height,0,Tt,gt,lt.data)}}}else{if(z=C.mipmaps,Nt&&te){z.length>0&&st++;let Z=St(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Nt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Tt,gt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,pt[Z].width,pt[Z].height,0,Tt,gt,pt[Z].data);for(let ht=0;ht<z.length;ht++){let Lt=z[ht].image[Z].image;Nt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Lt.width,Lt.height,Tt,gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Gt,Lt.width,Lt.height,0,Tt,gt,Lt.data)}}else{Nt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,gt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Tt,gt,pt[Z]);for(let ht=0;ht<z.length;ht++){let lt=z[ht];Nt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Tt,gt,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Gt,Tt,gt,lt.image[Z])}}}g(C)&&f(i.TEXTURE_CUBE_MAP),W.__version=j.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function yt(M,C,N,Y,j,W){let _t=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ft=I(N.internalFormat,_t,ot,N.colorSpace),Xt=n.get(C),J=n.get(N);if(J.__renderTarget=C,!Xt.__hasExternalTextures){let pt=Math.max(1,C.width>>W),Et=Math.max(1,C.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ft,pt,Et,C.depth,0,_t,ot,null):e.texImage2D(j,W,ft,pt,Et,0,_t,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ht(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,J.__webglTexture,0,kt(C)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(M,C,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),C.depthBuffer){let Y=C.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=_(C.stencilBuffer,j),_t=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=kt(C);Ht(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,C.width,C.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,W,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,M)}else{let Y=C.textures;for(let j=0;j<Y.length;j++){let W=Y[j],_t=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),ft=I(W.internalFormat,_t,ot,W.colorSpace),Xt=kt(C);N&&Ht(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ft,C.width,C.height):Ht(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ft,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ft,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(M,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),K(C.depthTexture,0);let j=Y.__webglTexture,W=kt(C);if(C.depthTexture.format===Ii)Ht(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(C.depthTexture.format===Ri)Ht(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(M){let C=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let j=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),C.__depthDisposeCallback=j}C.__boundDepthTexture=Y}if(M.depthTexture&&!C.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,M)}else if(N){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(C.__webglDepthbuffer[Y],M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=C.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),at(C.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(M,C,N){let Y=n.get(M);C!==void 0&&yt(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(M)}function oe(M){let C=M.texture,N=n.get(M),Y=n.get(C);M.addEventListener("dispose",E);let j=M.textures,W=M.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=C.version,o.memory.textures++),W){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(C.mipmaps&&C.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ft=0;ft<C.mipmaps.length;ft++)N.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<C.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ot=0,ft=j.length;ot<ft;ot++){let Xt=n.get(j[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&Ht(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ft=j[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Xt=r.convert(ft.format,ft.colorSpace),J=r.convert(ft.type),pt=I(ft.internalFormat,Xt,J,ft.colorSpace,M.isXRRenderTarget===!0),Et=kt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,pt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),at(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,C);for(let ot=0;ot<6;ot++)if(C.mipmaps&&C.mipmaps.length>0)for(let ft=0;ft<C.mipmaps.length;ft++)yt(N.__webglFramebuffer[ot][ft],M,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else yt(N.__webglFramebuffer[ot],M,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(C)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,ft=j.length;ot<ft;ot++){let Xt=j[ot],J=n.get(Xt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Bt(i.TEXTURE_2D,Xt),yt(N.__webglFramebuffer,M,Xt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Bt(ot,C),C.mipmaps&&C.mipmaps.length>0)for(let ft=0;ft<C.mipmaps.length;ft++)yt(N.__webglFramebuffer[ft],M,C,i.COLOR_ATTACHMENT0,ot,ft);else yt(N.__webglFramebuffer,M,C,i.COLOR_ATTACHMENT0,ot,0);g(C)&&f(ot),e.unbindTexture()}M.depthBuffer&&Pt(M)}function Wt(M){let C=M.textures;for(let N=0,Y=C.length;N<Y;N++){let j=C[N];if(g(j)){let W=S(M),_t=n.get(j).__webglTexture;e.bindTexture(W,_t),f(W),e.unbindTexture()}}}let ue=[],U=[];function Oe(M){if(M.samples>0){if(Ht(M)===!1){let C=M.textures,N=M.width,Y=M.height,j=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(M),ot=C.length>1;if(ot)for(let ft=0;ft<C.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<C.length;ft++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let Xt=n.get(C[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,i.NEAREST),l===!0&&(ue.length=0,U.length=0,ue.push(i.COLOR_ATTACHMENT0+ft),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ue.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<C.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let Xt=n.get(C[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let C=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function kt(M){return Math.min(s.maxSamples,M.samples)}function Ht(M){let C=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function bt(M){let C=o.render.frame;h.get(M)!==C&&(h.set(M,C),M.update())}function ne(M,C){let N=M.colorSpace,Y=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Ni&&N!==Pn&&(zt.getTransfer(N)===jt?(Y!==Je||j!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),C}function St(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function Hg(i,t){function e(n,s=Pn){let r,o=zt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Fc)return i.RGB;if(n===Je)return i.RGBA;if(n===Bc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Fs||n===Bs||n===Os||n===zs)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ea||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ra)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===qa||n===Ua||n===Da||n===Na||n===Fa||n===Ba||n===Oa||n===za||n===ka||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ks)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Ka||n===ja||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var po=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ie=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gg={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),f=this._getHandJoint(c,A);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`,go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mo=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,A=new go,g=e.getContextAttributes(),f=null,S=null,I=[],_=[],L=new ut,b=null,E=new Ne;E.viewport=new he;let V=new Ne;V.viewport=new he;let v=[E,V],x=new po,w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=I[X];return tt===void 0&&(tt=new ji,I[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=I[X];return tt===void 0&&(tt=new ji,I[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=I[X];return tt===void 0&&(tt=new ji,I[X]=tt),tt.getHandSpace()};function D(X){let tt=_.indexOf(X.inputSource);if(tt===-1)return;let yt=I[tt];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||o),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let X=0;X<I.length;X++){let tt=_[X];tt!==null&&(_[X]=null,I[X].disconnect(tt))}w=null,B=null,A.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ee(p.framebufferWidth,p.framebufferHeight,{format:Je,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,yt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Ri:Ii,yt=g.stencil?Vi:$n);let wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ee(d.textureWidth,d.textureHeight,{format:Je,type:_n,depthTexture:new er(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let tt=0;tt<X.removed.length;tt++){let yt=X.removed[tt],at=_.indexOf(yt);at>=0&&(_[at]=null,I[at].disconnect(yt))}for(let tt=0;tt<X.added.length;tt++){let yt=X.added[tt],at=_.indexOf(yt);if(at===-1){for(let Pt=0;Pt<I.length;Pt++)if(Pt>=_.length){_.push(yt),at=Pt;break}else if(_[Pt]===null){_[Pt]=yt,at=Pt;break}if(at===-1)break}let wt=I[at];wt&&wt.connect(yt)}}let G=new T,$=new T;function H(X,tt,yt){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);let at=G.distanceTo($),wt=tt.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),oe=wt[14]/(wt[10]+1),Wt=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],U=(wt[8]-1)/wt[0],Oe=(Pt[8]+1)/Pt[0],kt=Ot*U,Ht=Ot*Oe,bt=at/(-U+Oe),ne=bt*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let St=Ot+bt,M=oe+bt,C=kt-ne,N=Ht+(at-ne),Y=Wt*oe/M*St,j=ue*oe/M*St;X.projectionMatrix.makePerspective(C,N,Y,j,St,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,yt=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(yt=A.depthFar)),x.near=V.near=E.near=tt,x.far=V.far=E.far=yt,(w!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,B=x.far),E.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,x.layers.mask=E.layers.mask|V.layers.mask;let at=X.parent,wt=x.cameras;rt(x,at);for(let Pt=0;Pt<wt.length;Pt++)rt(wt[Pt],at);wt.length===2?H(x,E,V):x.projectionMatrix.copy(E.projectionMatrix),dt(X,x,at)};function dt(X,tt,yt){yt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$a*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(x)};let Mt=null;function Bt(X,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let at=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Pt=0;Pt<yt.length;Pt++){let Ot=yt[Pt],oe=null;if(p!==null)oe=p.getViewport(Ot);else{let ue=u.getViewSubImage(d,Ot);oe=ue.viewport,Pt===0&&(t.setRenderTargetTextures(S,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(S))}let Wt=v[Pt];Wt===void 0&&(Wt=new Ne,Wt.layers.enable(Pt),Wt.viewport=new he,v[Pt]=Wt),Wt.matrix.fromArray(Ot.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ot.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Pt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Wt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Pt=u.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,s.renderState)}}for(let yt=0;yt<I.length;yt++){let at=_[yt],wt=I[yt];at!==null&&wt!==void 0&&wt.update(at,tt,c||o)}Mt&&Mt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Qt=new Kc;Qt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}},Xn=new cn,Yg=new le;function Zg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Zc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,S,I,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),A(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,S,I):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Pe&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Pe&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let S=t.get(f),I=S.envMap,_=S.envMapRotation;I&&(g.envMap.value=I,Xn.copy(_),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(Xn)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,S,I){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=I*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,S){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function A(g,f){let S=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,I){let _=I.program;n.uniformBlockBinding(S,_)}function c(S,I){let _=s[S.id];_===void 0&&(m(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",g));let L=I.program;n.updateUBOMapping(S,L);let b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){let I=u();S.__bindingPointIndex=I;let _=i.createBuffer(),L=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let I=s[S.id],_=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,E=_.length;b<E;b++){let V=Array.isArray(_[b])?_[b]:[_[b]];for(let v=0,x=V.length;v<x;v++){let w=V[v];if(p(w,b,v,L)===!0){let B=w.__offset,D=Array.isArray(w.value)?w.value:[w.value],k=0;for(let K=0;K<D.length;K++){let G=D[K],$=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+k,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,I,_,L){let b=S.value,E=I+"_"+_;if(L[E]===void 0)return typeof b=="number"||typeof b=="boolean"?L[E]=b:L[E]=b.clone(),!0;{let V=L[E];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return L[E]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function m(S){let I=S.uniforms,_=0,L=16;for(let E=0,V=I.length;E<V;E++){let v=Array.isArray(I[E])?I[E]:[I[E]];for(let x=0,w=v.length;x<w;x++){let B=v[x],D=Array.isArray(B.value)?B.value:[B.value];for(let k=0,K=D.length;k<K;k++){let G=D[k],$=A(G),H=_%L,rt=H%$.boundary,dt=H+rt;_+=rt,dt!==0&&L-dt<$.storage&&(_+=L-dt),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=$.storage}}}let b=_%L;return b>0&&(_+=L-b),S.__size=_,S.__cache={},this}function A(S){let I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),I}function g(S){let I=S.target;I.removeEventListener("dispose",g);let _=o.indexOf(I.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var nr=class{constructor(t={}){let{canvas:e=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),A=new Int32Array(4),g=null,f=null,S=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Ln,this.toneMappingExposure=1;let _=this,L=!1,b=0,E=0,V=null,v=-1,x=null,w=new he,B=new he,D=null,k=new Rt(0),K=0,G=e.width,$=e.height,H=1,rt=null,dt=null,Mt=new he(0,0,G,$),Bt=new he(0,0,G,$),Qt=!1,X=new ts,tt=!1,yt=!1,at=new le,wt=new le,Pt=new T,Ot=new he,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ue(){return V===null?H:1}let U=n;function Oe(y,P){return e.getContext(y,P)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let P="webgl2";if(U=Oe(P,y),U===null)throw Oe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let kt,Ht,bt,ne,St,M,C,N,Y,j,W,_t,ot,ft,Xt,J,pt,Et,Tt,gt,Gt,Nt,te,R;function st(){kt=new up(U),kt.init(),Nt=new Hg(U,kt),Ht=new rp(U,kt,t,Nt),bt=new Og(U,kt),Ht.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),ne=new pp(U),St=new Eg,M=new kg(U,kt,bt,St,Ht,Nt,ne),C=new op(_),N=new hp(_),Y=new vu(U),te=new ip(U,Y),j=new dp(U,Y,ne,te),W=new mp(U,j,Y,ne),Tt=new gp(U,Ht,M),J=new ap(St),_t=new bg(_,C,N,kt,Ht,te,J),ot=new Zg(_,St),ft=new Tg,Xt=new Ug(kt),Et=new np(_,C,N,bt,W,p,l),pt=new Fg(_,W,Ht),R=new Kg(U,ne,Ht,bt),gt=new sp(U,kt,ne),Gt=new fp(U,kt,ne),ne.programs=_t.programs,_.capabilities=Ht,_.extensions=kt,_.properties=St,_.renderLists=ft,_.shadowMap=pt,_.state=bt,_.info=ne}st();let z=new mo(_,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,$,!1))},this.getSize=function(y){return y.set(G,$)},this.setSize=function(y,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,$=P,e.width=Math.floor(y*H),e.height=Math.floor(P*H),F===!0&&(e.style.width=y+"px",e.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(y,P,F){G=y,$=P,H=F,e.width=Math.floor(y*F),e.height=Math.floor(P*F),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,P,F,O){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,P,F,O),bt.viewport(w.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,P,F,O){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,P,F,O),bt.scissor(B.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){bt.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,P=!0,F=!0){let O=0;if(y){let q=!1;if(V!==null){let Q=V.texture.format;q=Q===jo||Q===Ko||Q===Zo}if(q){let Q=V.texture.type,ct=Q===_n||Q===$n||Q===$i||Q===Vi||Q===Xo||Q===Yo,At=Et.getClearColor(),xt=Et.getClearAlpha(),Vt=At.r,qt=At.g,Ct=At.b;ct?(m[0]=Vt,m[1]=qt,m[2]=Ct,m[3]=xt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Vt,A[1]=qt,A[2]=Ct,A[3]=xt,U.clearBufferiv(U.COLOR,0,A))}else O|=U.COLOR_BUFFER_BIT}P&&(O|=U.DEPTH_BUFFER_BIT),F&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Xt.dispose(),St.dispose(),C.dispose(),N.dispose(),W.dispose(),te.dispose(),R.dispose(),_t.dispose(),z.dispose(),z.removeEventListener("sessionstart",ol),z.removeEventListener("sessionend",ll),On.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let y=ne.autoReset,P=pt.enabled,F=pt.autoUpdate,O=pt.needsUpdate,q=pt.type;st(),ne.autoReset=y,pt.enabled=P,pt.autoUpdate=F,pt.needsUpdate=O,pt.type=q}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Lt(y){let P=y.target;P.removeEventListener("dispose",Lt),ce(P)}function ce(y){Ce(y),St.remove(y)}function Ce(y){let P=St.get(y).programs;P!==void 0&&(P.forEach(function(F){_t.releaseProgram(F)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,F,O,q,Q){P===null&&(P=oe);let ct=q.isMesh&&q.matrixWorld.determinant()<0,At=dh(y,P,F,O,q);bt.setMaterial(O,ct);let xt=F.index,Vt=1;if(O.wireframe===!0){if(xt=j.getWireframeAttribute(F),xt===void 0)return;Vt=2}let qt=F.drawRange,Ct=F.attributes.position,Yt=qt.start*Vt,ee=(qt.start+qt.count)*Vt;Q!==null&&(Yt=Math.max(Yt,Q.start*Vt),ee=Math.min(ee,(Q.start+Q.count)*Vt)),xt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,xt.count)):Ct!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,Ct.count));let ie=ee-Yt;if(ie<0||ie===1/0)return;te.setup(q,O,At,F,xt);let we,Zt=gt;if(xt!==null&&(we=Y.get(xt),Zt=Gt,Zt.setIndex(we)),q.isMesh)O.wireframe===!0?(bt.setLineWidth(O.wireframeLinewidth*ue()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(q.isLine){let It=O.linewidth;It===void 0&&(It=1),bt.setLineWidth(It*ue()),q.isLineSegments?Zt.setMode(U.LINES):q.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else q.isPoints?Zt.setMode(U.POINTS):q.isSprite&&Zt.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Zt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let It=q._multiDrawStarts,un=q._multiDrawCounts,Kt=q._multiDrawCount,We=xt?Y.get(xt).bytesPerElement:1,si=St.get(O).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)si.setValue(U,"_gl_DrawID",qe),Zt.render(It[qe]/We,un[qe])}else if(q.isInstancedMesh)Zt.renderInstances(Yt,ie,q.count);else if(F.isInstancedBufferGeometry){let It=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,un=Math.min(F.instanceCount,It);Zt.renderInstances(Yt,ie,un)}else Zt.render(Yt,ie)};function Jt(y,P,F){y.transparent===!0&&y.side===je&&y.forceSinglePass===!1?(y.side=Pe,y.needsUpdate=!0,cs(y,P,F),y.side=ln,y.needsUpdate=!0,cs(y,P,F),y.side=je):cs(y,P,F)}this.compile=function(y,P,F=null){F===null&&(F=y),f=Xt.get(F),f.init(P),I.push(f),F.traverseVisible(function(q){q.isLight&&q.layers.test(P.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),y!==F&&y.traverseVisible(function(q){q.isLight&&q.layers.test(P.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();let O=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Q=q.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){let At=Q[ct];Jt(At,F,q),O.add(At)}else Jt(Q,F,q),O.add(Q)}),I.pop(),f=null,O},this.compileAsync=function(y,P,F=null){let O=this.compile(y,P,F);return new Promise(q=>{function Q(){if(O.forEach(function(ct){St.get(ct).currentProgram.isReady()&&O.delete(ct)}),O.size===0){q(y);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function hn(y){Ge&&Ge(y)}function ol(){On.stop()}function ll(){On.start()}let On=new Kc;On.setAnimationLoop(hn),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(y){Ge=y,z.setAnimationLoop(y),y===null?On.stop():On.start()},z.addEventListener("sessionstart",ol),z.addEventListener("sessionend",ll),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,P,V),f=Xt.get(y,I.length),f.init(P),I.push(f),wt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,yt),g=ft.get(y,S.length),g.init(),S.push(g),z.enabled===!0&&z.isPresenting===!0){let Q=_.xr.getDepthSensingMesh();Q!==null&&Vr(Q,P,-1/0,_.sortObjects)}Vr(y,P,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(rt,dt),Wt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Wt&&Et.addToRenderList(g,y),this.info.render.frame++,tt===!0&&J.beginShadows();let F=f.state.shadowsArray;pt.render(F,y,P),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=g.opaque,q=g.transmissive;if(f.setupLights(),P.isArrayCamera){let Q=P.cameras;if(q.length>0)for(let ct=0,At=Q.length;ct<At;ct++){let xt=Q[ct];hl(O,q,y,xt)}Wt&&Et.render(y);for(let ct=0,At=Q.length;ct<At;ct++){let xt=Q[ct];cl(g,y,xt,xt.viewport)}}else q.length>0&&hl(O,q,y,P),Wt&&Et.render(y),cl(g,y,P);V!==null&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),y.isScene===!0&&y.onAfterRender(_,y,P),te.resetDefaultState(),v=-1,x=null,I.pop(),I.length>0?(f=I[I.length-1],tt===!0&&J.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Vr(y,P,F,O){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){O&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(wt);let ct=W.update(y),At=y.material;At.visible&&g.push(y,ct,At,F,Ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){let ct=W.update(y),At=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ot.copy(ct.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(wt)),Array.isArray(At)){let xt=ct.groups;for(let Vt=0,qt=xt.length;Vt<qt;Vt++){let Ct=xt[Vt],Yt=At[Ct.materialIndex];Yt&&Yt.visible&&g.push(y,ct,Yt,F,Ot.z,Ct)}}else At.visible&&g.push(y,ct,At,F,Ot.z,null)}}let Q=y.children;for(let ct=0,At=Q.length;ct<At;ct++)Vr(Q[ct],P,F,O)}function cl(y,P,F,O){let q=y.opaque,Q=y.transmissive,ct=y.transparent;f.setupLightsView(F),tt===!0&&J.setGlobalState(_.clippingPlanes,F),O&&bt.viewport(w.copy(O)),q.length>0&&ls(q,P,F),Q.length>0&&ls(Q,P,F),ct.length>0&&ls(ct,P,F),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function hl(y,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new Ee(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?nn:_n,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));let Q=f.state.transmissionRenderTarget[O.id],ct=O.viewport||w;Q.setSize(ct.z,ct.w);let At=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(k),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&Et.render(F);let xt=_.toneMapping;_.toneMapping=Ln;let Vt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),tt===!0&&J.setGlobalState(_.clippingPlanes,O),ls(y,F,O),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ct=0,Yt=P.length;Ct<Yt;Ct++){let ee=P[Ct],ie=ee.object,we=ee.geometry,Zt=ee.material,It=ee.group;if(Zt.side===je&&ie.layers.test(O.layers)){let un=Zt.side;Zt.side=Pe,Zt.needsUpdate=!0,ul(ie,F,O,we,Zt,It),Zt.side=un,Zt.needsUpdate=!0,qt=!0}}qt===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}_.setRenderTarget(At),_.setClearColor(k,K),Vt!==void 0&&(O.viewport=Vt),_.toneMapping=xt}function ls(y,P,F){let O=P.isScene===!0?P.overrideMaterial:null;for(let q=0,Q=y.length;q<Q;q++){let ct=y[q],At=ct.object,xt=ct.geometry,Vt=O===null?ct.material:O,qt=ct.group;At.layers.test(F.layers)&&ul(At,P,F,xt,Vt,qt)}}function ul(y,P,F,O,q,Q){y.onBeforeRender(_,P,F,O,q,Q),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(_,P,F,O,y,Q),q.transparent===!0&&q.side===je&&q.forceSinglePass===!1?(q.side=Pe,q.needsUpdate=!0,_.renderBufferDirect(F,P,O,q,y,Q),q.side=ln,q.needsUpdate=!0,_.renderBufferDirect(F,P,O,q,y,Q),q.side=je):_.renderBufferDirect(F,P,O,q,y,Q),y.onAfterRender(_,P,F,O,q,Q)}function cs(y,P,F){P.isScene!==!0&&(P=oe);let O=St.get(y),q=f.state.lights,Q=f.state.shadowsArray,ct=q.state.version,At=_t.getParameters(y,q.state,Q,P,F),xt=_t.getProgramCacheKey(At),Vt=O.programs;O.environment=y.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(y.isMeshStandardMaterial?N:C).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Vt===void 0&&(y.addEventListener("dispose",Lt),Vt=new Map,O.programs=Vt);let qt=Vt.get(xt);if(qt!==void 0){if(O.currentProgram===qt&&O.lightsStateVersion===ct)return fl(y,At),qt}else At.uniforms=_t.getUniforms(y),y.onBeforeCompile(At,_),qt=_t.acquireProgram(At,xt),Vt.set(xt,qt),O.uniforms=At.uniforms;let Ct=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=J.uniform),fl(y,At),O.needsLights=ph(y),O.lightsStateVersion=ct,O.needsLights&&(Ct.ambientLightColor.value=q.state.ambient,Ct.lightProbe.value=q.state.probe,Ct.directionalLights.value=q.state.directional,Ct.directionalLightShadows.value=q.state.directionalShadow,Ct.spotLights.value=q.state.spot,Ct.spotLightShadows.value=q.state.spotShadow,Ct.rectAreaLights.value=q.state.rectArea,Ct.ltc_1.value=q.state.rectAreaLTC1,Ct.ltc_2.value=q.state.rectAreaLTC2,Ct.pointLights.value=q.state.point,Ct.pointLightShadows.value=q.state.pointShadow,Ct.hemisphereLights.value=q.state.hemi,Ct.directionalShadowMap.value=q.state.directionalShadowMap,Ct.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ct.spotShadowMap.value=q.state.spotShadowMap,Ct.spotLightMatrix.value=q.state.spotLightMatrix,Ct.spotLightMap.value=q.state.spotLightMap,Ct.pointShadowMap.value=q.state.pointShadowMap,Ct.pointShadowMatrix.value=q.state.pointShadowMatrix),O.currentProgram=qt,O.uniformsList=null,qt}function dl(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Si.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function fl(y,P){let F=St.get(y);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function dh(y,P,F,O,q){P.isScene!==!0&&(P=oe),M.resetTextureUnits();let Q=P.fog,ct=O.isMeshStandardMaterial?P.environment:null,At=V===null?_.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ni,xt=(O.isMeshStandardMaterial?N:C).get(O.envMap||ct),Vt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,qt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ct=!!F.morphAttributes.position,Yt=!!F.morphAttributes.normal,ee=!!F.morphAttributes.color,ie=Ln;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ie=_.toneMapping);let we=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=we!==void 0?we.length:0,It=St.get(O),un=f.state.lights;if(tt===!0&&(yt===!0||y!==x)){let ze=y===x&&O.id===v;J.setState(O,y,ze)}let Kt=!1;O.version===It.__version?(It.needsLights&&It.lightsStateVersion!==un.state.version||It.outputColorSpace!==At||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==xt||O.fog===!0&&It.fog!==Q||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==J.numPlanes||It.numIntersection!==J.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==qt||It.morphTargets!==Ct||It.morphNormals!==Yt||It.morphColors!==ee||It.toneMapping!==ie||It.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,It.__version=O.version);let We=It.currentProgram;Kt===!0&&(We=cs(O,P,q));let si=!1,qe=!1,zi=!1,se=We.getUniforms(),sn=It.uniforms;if(bt.useProgram(We.program)&&(si=!0,qe=!0,zi=!0),O.id!==v&&(v=O.id,qe=!0),si||x!==y){bt.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),eu(at),nu(at),se.setValue(U,"projectionMatrix",at)):se.setValue(U,"projectionMatrix",y.projectionMatrix),se.setValue(U,"viewMatrix",y.matrixWorldInverse);let In=se.map.cameraPosition;In!==void 0&&In.setValue(U,Pt.setFromMatrixPosition(y.matrixWorld)),Ht.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&se.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,qe=!0,zi=!0)}if(q.isSkinnedMesh){se.setOptional(U,q,"bindMatrix"),se.setOptional(U,q,"bindMatrixInverse");let ze=q.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),se.setValue(U,"boneTexture",ze.boneTexture,M))}q.isBatchedMesh&&(se.setOptional(U,q,"batchingTexture"),se.setValue(U,"batchingTexture",q._matricesTexture,M),se.setOptional(U,q,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",q._indirectTexture,M),se.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",q._colorsTexture,M));let ki=F.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Tt.update(q,F,We),(qe||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,se.setValue(U,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(sn.envMap.value=xt,sn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(sn.envMapIntensity.value=P.environmentIntensity),qe&&(se.setValue(U,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&fh(sn,zi),Q&&O.fog===!0&&ot.refreshFogUniforms(sn,Q),ot.refreshMaterialUniforms(sn,O,H,$,f.state.transmissionRenderTarget[y.id]),Si.upload(U,dl(It),sn,M)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Si.upload(U,dl(It),sn,M),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&se.setValue(U,"center",q.center),se.setValue(U,"modelViewMatrix",q.modelViewMatrix),se.setValue(U,"normalMatrix",q.normalMatrix),se.setValue(U,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let ze=O.uniformsGroups;for(let In=0,Mn=ze.length;In<Mn;In++){let pl=ze[In];R.update(pl,We),R.bind(pl,We)}}return We}function fh(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function ph(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(y,P,F){St.get(y.texture).__webglTexture=P,St.get(y.depthTexture).__webglTexture=F;let O=St.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){let F=St.get(y);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,F=0){V=y,b=P,E=F;let O=!0,q=null,Q=!1,ct=!1;if(y){let xt=St.get(y);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),O=!1;else if(xt.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(xt.__hasExternalTextures)M.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ct=y.depthTexture;if(xt.__boundDepthTexture!==Ct){if(Ct!==null&&St.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}let Vt=y.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(ct=!0);let qt=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(qt[P])?q=qt[P][F]:q=qt[P],Q=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?q=St.get(y).__webglMultisampledFramebuffer:Array.isArray(qt)?q=qt[F]:q=qt,w.copy(y.viewport),B.copy(y.scissor),D=y.scissorTest}else w.copy(Mt).multiplyScalar(H).floor(),B.copy(Bt).multiplyScalar(H).floor(),D=Qt;if(bt.bindFramebuffer(U.FRAMEBUFFER,q)&&O&&bt.drawBuffers(y,q),bt.viewport(w),bt.scissor(B),bt.setScissorTest(D),Q){let xt=St.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,F)}else if(ct){let xt=St.get(y.texture),Vt=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,F||0,Vt)}v=-1},this.readRenderTargetPixels=function(y,P,F,O,q,Q,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(At=At[ct]),At){bt.bindFramebuffer(U.FRAMEBUFFER,At);try{let xt=y.texture,Vt=xt.format,qt=xt.type;if(!Ht.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-O&&F>=0&&F<=y.height-q&&U.readPixels(P,F,O,q,Nt.convert(Vt),Nt.convert(qt),Q)}finally{let xt=V!==null?St.get(V).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(y,P,F,O,q,Q,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(At=At[ct]),At){let xt=y.texture,Vt=xt.format,qt=xt.type;if(!Ht.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-O&&F>=0&&F<=y.height-q){bt.bindFramebuffer(U.FRAMEBUFFER,At);let Ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(P,F,O,q,Nt.convert(Vt),Nt.convert(qt),0);let Yt=V!==null?St.get(V).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Yt);let ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tu(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(Ct),U.deleteSync(ee),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,F=0){y.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);let O=Math.pow(2,-F),q=Math.floor(y.image.width*O),Q=Math.floor(y.image.height*O),ct=P!==null?P.x:0,At=P!==null?P.y:0;M.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ct,At,q,Q),bt.unbindTexture()},this.copyTextureToTexture=function(y,P,F=null,O=null,q=0){y.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],P=arguments[2],q=arguments[3]||0,F=null);let Q,ct,At,xt,Vt,qt,Ct,Yt,ee,ie=y.isCompressedTexture?y.mipmaps[q]:y.image;F!==null?(Q=F.max.x-F.min.x,ct=F.max.y-F.min.y,At=F.isBox3?F.max.z-F.min.z:1,xt=F.min.x,Vt=F.min.y,qt=F.isBox3?F.min.z:0):(Q=ie.width,ct=ie.height,At=ie.depth||1,xt=0,Vt=0,qt=0),O!==null?(Ct=O.x,Yt=O.y,ee=O.z):(Ct=0,Yt=0,ee=0);let we=Nt.convert(P.format),Zt=Nt.convert(P.type),It;P.isData3DTexture?(M.setTexture3D(P,0),It=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(M.setTexture2DArray(P,0),It=U.TEXTURE_2D_ARRAY):(M.setTexture2D(P,0),It=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let un=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),We=U.getParameter(U.UNPACK_SKIP_PIXELS),si=U.getParameter(U.UNPACK_SKIP_ROWS),qe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);let zi=y.isDataArrayTexture||y.isData3DTexture,se=P.isDataArrayTexture||P.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let sn=St.get(y),ki=St.get(P),ze=St.get(sn.__renderTarget),In=St.get(ki.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,ze.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Mn=0;Mn<At;Mn++)zi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(y).__webglTexture,q,qt+Mn),y.isDepthTexture?(se&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(P).__webglTexture,q,ee+Mn),U.blitFramebuffer(xt,Vt,Q,ct,Ct,Yt,Q,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):se?U.copyTexSubImage3D(It,q,Ct,Yt,ee+Mn,xt,Vt,Q,ct):U.copyTexSubImage2D(It,q,Ct,Yt,ee+Mn,xt,Vt,Q,ct);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else se?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(It,q,Ct,Yt,ee,Q,ct,At,we,Zt,ie.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(It,q,Ct,Yt,ee,Q,ct,At,we,ie.data):U.texSubImage3D(It,q,Ct,Yt,ee,Q,ct,At,we,Zt,ie):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,Ct,Yt,Q,ct,we,Zt,ie.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,Ct,Yt,ie.width,ie.height,we,ie.data):U.texSubImage2D(U.TEXTURE_2D,q,Ct,Yt,Q,ct,we,Zt,ie);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,si),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe),q===0&&P.generateMipmaps&&U.generateMipmap(It),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,P,F=null,O=null,q=0){return y.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,y=arguments[2],P=arguments[3],q=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,F,O,q)},this.initRenderTarget=function(y){St.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){b=0,E=0,V=null,bt.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}};var ir=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var es=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sc=new le,Ao=new Zs,qs=new Pi,Us=new T,sr=class extends Se{constructor(t=new fe,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Sc.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(Sc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=d,A=p;m<A;m++){let g=c.getX(m);Us.fromBufferAttribute(u,g),bc(Us,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,A=p;m<A;m++)Us.fromBufferAttribute(u,m),bc(Us,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bc(i,t,e,n,s,r,o){let a=Ao.distanceSqToPoint(i);if(a<e){let l=new T;Ao.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rr=class extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,l=new le;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xo=class extends ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qo(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ds=new T,ca=new Qo,ha=new Qo,ua=new Qo,Co=class extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ds.subVectors(s[0],s[1]).add(s[0]),c=Ds);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),A=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),ca.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,A,g),ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,A,g),ua.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ua.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ca.calc(l),ha.calc(l),ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ec(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function jg(i,t){let e=1-i;return e*e*t}function Jg(i,t){return 2*(1-i)*i*t}function Qg(i,t){return i*i*t}function Ji(i,t,e,n){return jg(i,t)+Jg(i,e)+Qg(i,n)}function $g(i,t){let e=1-i;return e*e*e*t}function tm(i,t){let e=1-i;return 3*e*e*i*t}function em(i,t){return 3*(1-i)*i*i*t}function nm(i,t){return i*i*i*t}function Qi(i,t,e,n,s){return $g(i,t)+tm(i,e)+em(i,n)+nm(i,s)}var vo=class extends tn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(t,s.x,r.x,o.x,a.x),Qi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends tn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(t,s.x,r.x,o.x,a.x),Qi(t,s.y,r.y,o.y,a.y),Qi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends tn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends tn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends tn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,s.x,r.x,o.x),Ji(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ui=class extends tn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,s.x,r.x,o.x),Ji(t,s.y,r.y,o.y),Ji(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ec(a,l.x,c.x,h.x,u.x),Ec(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},im=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:Co,CubicBezierCurve:vo,CubicBezierCurve3:yo,EllipseCurve:ar,LineCurve:_o,LineCurve3:Io,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Ui,SplineCurve:So});var or=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new T,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ns=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,A=[],g=n/2,f=0;S(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function S(){let _=new T,L=new T,b=0,E=(e-t)/n;for(let V=0;V<=r;V++){let v=[],x=V/r,w=x*(e-t)+t;for(let B=0;B<=s;B++){let D=B/s,k=D*l+a,K=Math.sin(k),G=Math.cos(k);L.x=w*K,L.y=-x*n+g,L.z=w*G,u.push(L.x,L.y,L.z),_.set(K,E,G).normalize(),d.push(_.x,_.y,_.z),p.push(D,1-x),v.push(m++)}A.push(v)}for(let V=0;V<s;V++)for(let v=0;v<r;v++){let x=A[v][V],w=A[v+1][V],B=A[v+1][V+1],D=A[v][V+1];(t>0||v!==0)&&(h.push(x,w,D),b+=3),(e>0||v!==r-1)&&(h.push(w,B,D),b+=3)}c.addGroup(f,b,0),f+=b}function I(_){let L=m,b=new ut,E=new T,V=0,v=_===!0?t:e,x=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*x,0),d.push(0,x,0),p.push(.5,.5),m++;let w=m;for(let B=0;B<=s;B++){let k=B/s*l+a,K=Math.cos(k),G=Math.sin(k);E.x=v*G,E.y=g*x,E.z=v*K,u.push(E.x,E.y,E.z),d.push(0,x,0),b.x=K*.5+.5,b.y=G*.5*x+.5,p.push(b.x,b.y),m++}for(let B=0;B<s;B++){let D=L+B,k=w+B;_===!0?h.push(k,k+1,D):h.push(k+1,k,D),V+=3}c.addGroup(f,V,_===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class i extends ns{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var is=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,p=[],m=[],A=[],g=[];for(let f=0;f<=n;f++){let S=[],I=f/n,_=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let b=L/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+I*a),u.y=t*Math.cos(o+I*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+I*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(b+_,1-I),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let I=h[f][S+1],_=h[f][S],L=h[f+1][S],b=h[f+1][S+1];(f!==0||o>0)&&p.push(I,_,b),(f!==n-1||l<Math.PI)&&p.push(_,L,b)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cr=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let A=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let A=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,S=(s+1)*p+m;o.push(A,g,S),o.push(g,f,S)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var hr=class i extends fe{constructor(t=new Ui(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new ut,h=new T,u=[],d=[],p=[],m=[];A(),this.setIndex(m),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function A(){for(let I=0;I<e;I++)g(I);g(r===!1?e:0),S(),f()}function g(I){h=t.getPointAt(I/e,h);let _=o.normals[I],L=o.binormals[I];for(let b=0;b<=s;b++){let E=b/s*Math.PI*2,V=Math.sin(E),v=-Math.cos(E);l.x=v*_.x+V*L.x,l.y=v*_.y+V*L.y,l.z=v*_.z+V*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let I=1;I<=e;I++)for(let _=1;_<=s;_++){let L=(s+1)*(I-1)+(_-1),b=(s+1)*I+(_-1),E=(s+1)*I+_,V=(s+1)*(I-1)+_;m.push(L,b,V),m.push(b,E,V)}}function S(){for(let I=0;I<=e;I++)for(let _=0;_<=s;_++)c.x=I/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new im[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ur=class extends pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ss=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ns(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bo=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,a=2*e-n;break;case Rl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:o=t,l=2*n-e;break;case Rl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,f=-d*g+2*d*A-d*m,S=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,I=(-1-p)*g+(1.5+p)*A+.5*m,_=p*g-p*A;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+S*o[c+L]+I*o[l+L]+_*o[u+L];return r}},Eo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},wo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Hs:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&sm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[p+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Qa;var ni=class extends en{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Hs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends en{};To.prototype.ValueTypeName="color";var Vo=class extends en{};Vo.prototype.ValueTypeName="number";var Ro=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},dr=class extends en{InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends en{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Hs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends en{};Po.prototype.ValueTypeName="vector";var Lo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},rm=new Lo,qo=class{constructor(t){this.manager=t!==void 0?t:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},pr=class extends fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},da=new le,wc=new T,Tc=new T,Uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Do=class extends Uo{constructor(){super(new Nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Do}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var mr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vc(){return performance.now()}var $o="\\[\\]\\.:\\/",am=new RegExp("["+$o+"]","g"),tl="[^"+$o+"]",om="[^"+$o.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",tl),cm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],No=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(am,"")}static parseTrackName(t){let e=dm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=No;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);var vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Be=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pm=new Nn(-1,1,1,-1,0,1),el=class extends fe{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},gm=new el,Bn=class{constructor(t){this._mesh=new xe(gm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,pm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Bi=class extends Be{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fn.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var as=class extends Be{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yr=class extends Be{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _r=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new Ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bi(vr),this.copyPass.material.blending=on,this.clock=new mr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}as!==void 0&&(o instanceof as?n=!0:o instanceof yr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ir=class extends Be{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var eh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Oi=class i extends Be{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ee(r,o,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ee(r,o,{type:nn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Ee(r,o,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=eh;this.highPassUniforms=Fn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=vr;this.copyUniforms=Fn.clone(h.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new $e,this.fsQuad=new Bn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Oi.BlurDirectionX=new ut(1,0);Oi.BlurDirectionY=new ut(0,1);var nh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Mr=class extends Be{constructor(){super();let t=nh;this.uniforms=Fn.clone(t.uniforms),this.material=new ur({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Bn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Go&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=s=>{let r=n(s);if(s&&!s.__tw&&String(s.family).replace(/["']/g,"")==="Tajawal"){let o=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});o.__tw=1,o.load().then(()=>n(o)).catch(()=>{})}return r}}catch{}}if(typeof document!="undefined"&&!document.getElementById("tw-icons")){let i=document.createElement("style");i.id="tw-icons",i.textContent=`.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-heart{display:inline-block;width:.9em;height:.82em;background:linear-gradient(#ff8aa0,#e8284a);clip-path:path('M.45em .8em C-.3em .25 .1em -.15em .45em .2em C.8em -.15em 1.2em .25em .45em .8em');vertical-align:-.1em;margin:0 .1em;clip-path:polygon(50% 100%,8% 55%,0 30%,10% 8%,30% 0,50% 18%,70% 0,90% 8%,100% 30%,92% 55%)}
.tw-pause{display:inline-block;width:.8em;height:.8em;vertical-align:-.1em;background:linear-gradient(90deg,#fff 0 36%,transparent 36% 64%,#fff 64% 100%);border-radius:.1em;margin:0 .05em}
.tw-up{display:inline-block;width:.8em;height:.9em;background:linear-gradient(#fff,#d8e8ff);clip-path:polygon(50% 0,100% 50%,66% 50%,66% 100%,34% 100%,34% 50%,0 50%);vertical-align:-.1em;margin:0 .1em}
.tw-flag{display:inline-block;width:.85em;height:.9em;background:linear-gradient(90deg,#fff 0 12%,transparent 12%),linear-gradient(45deg,#222 25%,#fff 25% 50%,#222 50% 75%,#fff 75%);background-size:100% 100%,.3em .3em;clip-path:polygon(0 0,100% 10%,100% 60%,12% 70%,12% 100%,0 100%);vertical-align:-.1em;margin:0 .1em}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`,document.head.appendChild(i);let t=/(\u{1F512}|\u2B50|\u{1FA99}|\u2764|\u23F8|\u2B06|\u{1F3C1})\uFE0F?/gu,e={"\u{1F512}":"tw-lock","\u2B50":"tw-star","\u{1FA99}":"tw-coin","\u2764":"tw-heart","\u23F8":"tw-pause","\u2B06":"tw-up","\u{1F3C1}":"tw-flag"},n=()=>{if(!document.body)return;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),l=[];for(let c=a.nextNode();c;c=a.nextNode()){let h=c.parentNode;h&&/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(h.nodeName)||(t.lastIndex=0,t.test(c.nodeValue)&&l.push(c))}for(let c of l){let h=document.createDocumentFragment(),u=0,d=c.nodeValue;t.lastIndex=0;let p;for(;p=t.exec(d);){p.index>u&&h.append(d.slice(u,p.index));let m=document.createElement("span");m.className=e[p[1]],h.append(m),u=p.index+p[0].length}u<d.length&&h.append(d.slice(u)),c.parentNode.replaceChild(h,c)}},s=0,r=()=>{s||(s=setTimeout(()=>{s=0,n()},30))},o=()=>{new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0,characterData:!0}),n()};document.body?o():document.addEventListener("DOMContentLoaded",o)}var ih={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},mm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Am={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function xm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let A=0;A<r;A++)o[A*3]=t.position.x+(Math.random()-.5)*2*s,o[A*3+1]=t.position.y+(Math.random()-.5)*s,o[A*3+2]=t.position.z+(Math.random()-.5)*2*s,a[A*3]=(Math.random()-.5)*.25,a[A*3+1]=.05+Math.random()*.25,a[A*3+2]=(Math.random()-.5)*.25;let l=new fe;l.setAttribute("position",new Me(o,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new rr(c);d.colorSpace=Re;let p=new es({map:d,color:Am[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:bi,fog:!1,sizeAttenuation:!0}),m=new sr(l,p);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:o,vel:a,R:s,N:r}}function Cm(i,t,e){let{pos:n,vel:s,R:r,N:o}=i;for(let a=0;a<o;a++)for(let l=0;l<3;l++){let c=a*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var sh={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},vm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,ym=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,_m={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},rh={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=_m[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(rh[t]||-1e9)<n||(rh[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function Im(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,o=performance.now(),a=!1,l=0,c=!1,h=g=>{if(!n[g]){let f=new Audio(`${e}${g}_${t}.mp3`);f.preload="auto",f.volume=.95,n[g]=f}return n[g]},u=(g,f)=>{let S=performance.now();if(!f&&S-r<6e3||c)return;let I=g+(1+Math.floor(Math.random()*sh[g])),_=h(I);c=!0,r=S,_.currentTime=0;let L=()=>{c=!1};_.onended=L,_.onerror=L;let b=_.play();b&&b.catch&&b.catch(L),setTimeout(L,4e3)};window.__cheer=(g,f)=>{sh[g]&&(a=!0,u(g,!!f))};let d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),f=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(f),f.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},p=()=>{o=performance.now(),d(),a||(a=!0,u("start",!0))};i.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("keydown",p,{passive:!0});let m="";new MutationObserver(()=>{if(!a)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,vm.test(g)?u("win",!1):ym.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!a||document.hidden||(g-o>14e3?(u("idle",!1),o=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function ah(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},ih[e.get("look")||t.preset||"warm"]||ih.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),o=i.render.bind(i),a=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,p=0,m=0,A=0,g=!1,f=performance.now();function S(I,_){let L=i.getSize(new ut);p=L.x,m=L.y,A=i.getPixelRatio(),c=new _r(i),c.setPixelRatio(A),c.setSize(p,m),h=new Ir(I,_),c.addPass(h),s||(u=new Oi(new ut(Math.max(2,p>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Mr),d=new Bi(mm),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(I,_){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!I||!_||!I.isScene)return o(I,_);try{c||S(I,_);let L=i.getSize(new ut),b=i.getPixelRatio();(L.x!==p||L.y!==m||b!==A)&&(p=L.x,m=L.y,A=b,c.setPixelRatio(b),c.setSize(p,m),u&&u.resolution.set(Math.max(2,p>>1),Math.max(2,m>>1))),h.scene=I,h.camera=_,d.uniforms.time.value=(performance.now()-f)/1e3;let E=performance.now(),V=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let v=a.get(I);v||(v=xm(I,_,e.get("look")||t.preset||"warm",r),a.set(I,v)),Cm(v,_,V)}g=!0,c.render(),g=!1}catch(L){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",L&&L.message),i.render=o,o(I,_)}},!e.has("nocheer")&&!r&&setTimeout(()=>Im(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var oh=Math.PI*2,lh=38*Math.PI/180,Sr=Math.sin(lh),Mm=Math.cos(lh),Sm=[[1,1],[0,1],[1,2],[0,2],[1,0],[0,0],[2,1],[2,2],[2,0]],et={box:new ei(1,1,1),sph:new is(.5,18,12),cyl:new ns(.5,.5,1,16),cone:new lr(.5,1,14),tor:new cr(.5,.05,6,36),disc:new or(.5,28),hem:new is(.5,18,8,0,oh,0,Math.PI/2)},nl=new Map;function mt(i,t=0,e=1,n={}){var r,o,a,l,c,h;let s=`${i}|${t}|${e}|${(r=n.r)!=null?r:.6}|${(o=n.t)!=null?o:1}`;return nl.has(s)||nl.set(s,new ss({color:i,roughness:(a=n.r)!=null?a:.6,metalness:(l=n.m)!=null?l:0,emissive:t,emissiveIntensity:t?e:0,transparent:((c=n.t)!=null?c:1)<1,opacity:(h=n.t)!=null?h:1,side:n.d?je:ln})),nl.get(s)}function nt(i,t,e,n=0,s=0,r=0,o=1,a=o,l=o){let c=new xe(t,e);return c.position.set(n,s,r),c.scale.set(o,a,l),i.add(c),c}function Le(i,t=0,e=0,n=0){let s=new Ie;return s.position.set(t,e,n),i.add(s),s}var ch=mt(12880454,0,0,{r:.7}),os=mt(9067050,0,0,{r:.8}),br=mt(15259808),il=mt(15911328,0,0,{r:.8});function bm(){let i=new Ie,t={};t.legs=[-1,1].map(e=>{let n=Le(i,e*.1,.4,0);return nt(n,et.cyl,mt(2771594),0,-.2,0,.17,.4,.17),nt(n,et.box,mt(5913114),0,-.4,.04,.2,.08,.3),n}),t.body=Le(i,0,.4,0),nt(t.body,et.cyl,mt(16053492),0,.3,0,.5,.6,.4);for(let e=0;e<3;e++)nt(t.body,et.cyl,mt(14170666),0,.14+e*.17,0,.51,.07,.41);return t.arms=[-1,1].map(e=>{let n=Le(t.body,e*.3,.52,0);return nt(n,et.cyl,il,0,-.17,0,.12,.38,.12),nt(n,et.sph,il,0,-.38,0,.14),n}),t.head=Le(t.body,0,.86,0),nt(t.head,et.sph,il,0,0,0,.6,.58,.55),[-1,1].forEach(e=>{nt(t.head,et.sph,mt(16777215),e*.12,.04,.24,.14),nt(t.head,et.sph,mt(2759178),e*.12,.04,.3,.075),nt(t.head,et.sph,mt(16751242),e*.2,-.08,.22,.1,.07,.04)}),nt(t.head,et.sph,mt(13127738),0,-.13,.27,.12,.05,.04),nt(t.head,et.cyl,mt(15255656),0,.22,0,.98,.04,.98),nt(t.head,et.cyl,mt(15255656),0,.3,0,.52,.2,.52),nt(t.head,et.cyl,mt(14170666),0,.25,0,.53,.05,.53),{g:i,P:t}}function Em(){let i=new Ie,t={},e=mt(4872826,0,0,{r:.4});return t.body=Le(i),nt(t.body,et.sph,e,0,.4,0,1.6,1.2,4.4),nt(t.body,et.sph,mt(15266047),0,.1,.2,1.2,.7,3.4),nt(t.body,et.cone,mt(3820138),0,1.4,-.2,1,1.8,.5).rotation.x=-.3,t.tail=Le(t.body,0,.5,-2.1),nt(t.tail,et.cone,mt(3820138),0,.2,-.6,.3,1.8,1.4).rotation.x=-1.4,[-1,1].forEach(n=>{let s=nt(t.body,et.cone,mt(3820138),n*.85,.2,.6,.15,1.1,.8);s.rotation.z=-n*1.1,nt(t.body,et.sph,mt(16777215),n*.34,.65,1.6,.34),nt(t.body,et.sph,mt(1053740),n*.38,.66,1.78,.18)}),{g:i,P:t}}function wm(i){let t=new Ie,e=Le(t,0,.3,0),n=nt(t,et.tor,mt(16777215,16777215,.5,{t:.7}),0,.06,0,10.8,10.8,6.8);if(n.rotation.x=Math.PI/2,n.scale.set(10.8,6.8,10.8),n.rotation.x=Math.PI/2,i==="plank")nt(e,et.box,ch,0,.5,0,8.8,1,2.2),nt(e,et.box,os,0,1.05,0,8.4,.12,.2),nt(e,et.box,br,-2.6,.55,0,.5,1.05,2.3),nt(e,et.box,br,2.6,.55,0,.5,1.05,2.3);else if(i==="barrel")nt(e,et.cyl,mt(10115626,0,0,{r:.7}),0,2,0,5.4,4,5.4),[.7,3.3].forEach(s=>nt(e,et.cyl,mt(4868696,0,0,{m:.5}),0,s,0,5.6,.5,5.6)),nt(e,et.cyl,mt(13142602),0,4.02,0,4.6,.1,4.6);else if(i==="crate"){nt(e,et.box,mt(12091450,0,0,{r:.7}),0,2.4,0,5.4,4.8,5.4);for(let[s,r]of[[-2.5,-2.5],[2.5,-2.5],[-2.5,2.5],[2.5,2.5]])nt(e,et.box,os,s,2.4,r,.6,4.9,.6);nt(e,et.box,os,0,4.85,0,5.6,.3,.8),nt(e,et.box,os,0,4.85,0,.8,.3,5.6)}else{let s=mt(16765498,16760864,.9,{r:.15});nt(e,et.sph,s,0,2.2,0,3.4,4.4,3.4),nt(e,et.cyl,s,0,4.8,0,1.2,2.4,1.2),nt(e,et.cyl,mt(13144650),0,6.2,0,1.6,.9,1.6),nt(e,et.sph,mt(16777215,16777215,1,{t:.7}),.8,3,1.4,.8),e.userData.glow=!0}return{g:t,o:e,kind:i}}function sl(i=12){let t=new Ie,e=5,n=0,s=0;for(let o=0;o<e;o++){let a=n+.5,l=s+i/e,c=nt(t,et.cyl,mt(9067050),(n+a)/2,(s+l)/2,0,1.4-o*.12,i/e+.3,1.4-o*.12);c.rotation.z=-Math.atan2(a-n,l-s),n=a,s=l}let r=Le(t,n,s,0);for(let o=0;o<7;o++){let a=o/7*oh,l=Le(r,0,0,0);l.rotation.y=a;let c=nt(l,et.sph,mt(3844170,674320,.3,{r:.7}),3.2,-.4,0,7,.4,2.2);c.rotation.z=-.35}return nt(r,et.sph,mt(6961690),.4,-.6,.4,.9),nt(r,et.sph,mt(6961690),-.4,-.6,-.2,.9),t}function Tm(){let i=new Ie;nt(i,et.box,mt(9062938,0,0,{r:.6}),0,1.5,0,6,3,4),nt(i,et.cyl,mt(9062938),0,3,0,4,6,4).rotation.z=Math.PI/2,nt(i,et.box,mt(16765498,16760864,.7,{r:.3}),0,1.6,2.05,1.2,1.4,.3),[-2,2].forEach(t=>nt(i,et.box,mt(16765498,16760864,.5),t,2,0,.5,5,4.2));for(let t=0;t<6;t++)nt(i,et.sph,mt(16769098,16760864,1.2,{r:.2}),-2+t*.8,4.4+t%2*.3,0,1.1);return i}var Er=class{constructor(){this.renderer=ah(new nr({antialias:!0,alpha:!1}),{preset:"warm",tune:{bloom:[.08,.5,.95]}}),this.dom=this.renderer.domElement,this.dom.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",this.scene=new ir,this.scene.background=new Rt(2792160),this.cam=new Nn(-1,1,1,-1,1,600),this.scene.add(new pr(13626111,2775704,.75));let t=new gr(16773328,2.2);t.position.set(-30,50,-20),this.scene.add(t),this.W=1,this.H=1,this.u=1;let e=56;this.wg=new qi(1,1,e,e),this.wg.rotateX(-Math.PI/2);let n=new Float32Array(this.wg.attributes.position.count*3);this.wg.setAttribute("color",new Me(n,3)),this.water=new xe(this.wg,new ss({vertexColors:!0,roughness:.18,metalness:.1,flatShading:!1})),this.scene.add(this.water),this.base0=this.wg.attributes.position.array.slice(),this.sp=[];for(let s=0;s<48;s++){let r=nt(this.scene,et.disc,new $e({color:16777215,transparent:!0,opacity:.35,depthWrite:!1}),0,.2,0,1,1,1);r.rotation.x=-Math.PI/2,r.userData={fx:(s*.37+.13)%1,fy:s*.211%1,s:1+s%4*.8},this.sp.push(r)}this.clouds=[];for(let s=0;s<4;s++){let r=new Ie;for(let a=0;a<4;a++)nt(r,et.sph,new $e({color:16777215,transparent:!0,opacity:.9}),(a-1.5)*4,30+a%2*1.5,0,7-Math.abs(a-1.5)*1.5,4,5);let o=nt(r,et.disc,new $e({color:666208,transparent:!0,opacity:.18,depthWrite:!1}),0,.15,0,24,14,1);o.rotation.x=-Math.PI/2,r.userData={fx:s*.29+.1,fy:(s*.41+.2)%1,sp:.004+s*.002},this.scene.add(r),this.clouds.push(r)}this.raft=new Ie,this.scene.add(this.raft),this.tiles=[],this.rs=14.5,this.hero=bm(),this.raft.add(this.hero.g),this.foam=nt(this.raft,et.disc,new $e({color:16777215,transparent:!0,opacity:.22,depthWrite:!1}),0,.12,0,1,1,1),this.foam.rotation.x=-Math.PI/2,this.sail=null,this.hut=null,this.rod=null,this.nTiles=-1,this.flags="",this.items=new Map,this.shark=Em(),this.shark.g.visible=!1,this.scene.add(this.shark.g),this.rope=new xe(new fe,mt(16050376)),this.rope.visible=!1,this.scene.add(this.rope),this.hookM=Le(this.scene),nt(this.hookM,et.tor,mt(13159636,0,0,{m:.7,r:.3}),0,0,0,2.6,2.6,2.6).rotation.x=0,this.hookM.visible=!1,this.hring=nt(this.scene,et.tor,mt(16777215,16777215,.6,{t:.7}),0,.3,0,6,3.2,6),this.hring.rotation.x=Math.PI/2,this.hring.visible=!1,this.isl=null,this.islKind=""}setSize(t,e,n){this.W=t,this.H=e,this.u=n,this.renderer.setSize(t,e,!1);let s=t/n,r=e/n;Object.assign(this.cam,{left:-s/2,right:s/2,top:r/2,bottom:-r/2}),this.cam.updateProjectionMatrix();let o=200;this.cam.position.set(0,o*Sr,o*Mm),this.cam.lookAt(0,0,0),this.cam.updateMatrixWorld(!0);let a=s+24,l=r/Sr+40;this.wx=a,this.wz=l,this.water.scale.set(a,1,l)}X(t){return(t*this.W-this.W/2)/this.u}Z(t){return(t*this.H-this.H/2)/(this.u*Sr)}project(t,e,n){let s=new T(t,e,n).project(this.cam);return[(s.x+1)/2*this.W,(1-s.y)/2*this.H]}_tiles(t){for(let n of this.tiles)this.raft.remove(n);this.tiles=[];let e=this.rs;for(let n=0;n<t;n++){let[s,r]=Sm[n],o=Le(this.raft,(s-1)*e,0,(r-1)*e);nt(o,et.box,ch,0,.5,0,e*.98,1,e*.98);for(let a=0;a<4;a++)nt(o,et.box,a%2?os:mt(13670998,0,0,{r:.7}),0,1.02,(a-1.5)*e*.245,e*.96,.18,e*.2);nt(o,et.box,br,-e*.2,1.1,0,.9,.25,e*.99),nt(o,et.box,br,e*.2,1.1,0,.9,.25,e*.99),this.tiles.push(o)}}_extras(t){let e=this.rs;if(this.sail&&this.raft.remove(this.sail),this.hut&&this.raft.remove(this.hut),this.rod&&this.raft.remove(this.rod),this.sail=this.hut=this.rod=null,t.sail){let n=this.sail=Le(this.raft,-e*.9,1,-e*.2);nt(n,et.cyl,mt(5913114),0,e*.95,0,.9,e*1.9,.9),this.sailCloth=nt(n,et.sph,mt(16050384,0,0,{r:.9,d:1}),e*.45,e*.95,0,e*.9,e*1.35,.5),nt(n,et.box,mt(15231578),e*.35,e*1.05,.4,e*.3,e*.34,.2),nt(n,et.sph,mt(16765498,16760864,1),0,e*1.95,0,1.6);let s=nt(n,et.cone,mt(15231578),1.6,e*1.9,0,1.2,3.2,.3);s.rotation.z=-Math.PI/2}if(t.hut){let n=this.hut=Le(this.raft,e*.45,1,-e*.55);nt(n,et.box,mt(14203e3,0,0,{r:.8}),0,e*.35,0,e*1.15,e*.7,e*.95),nt(n,et.cone,mt(12076346),0,e*.95,0,e*1.55,e*.6,e*1.35).rotation.y=Math.PI/4,nt(n,et.box,mt(5913114),0,e*.22,e*.48,e*.3,e*.44,.3),nt(n,et.sph,mt(16769162,16765024,.8),e*.3,e*.4,e*.48,1.2)}if(t.fish){let n=this.rod=Le(this.raft,e*1.2,1,e*.35),s=nt(n,et.cyl,mt(6965802),e*.5,e*.35,0,.5,e*1.1,.5);s.rotation.z=-1,nt(n,et.cyl,mt(16777215,16777215,.3),e*1,e*.02,0,.12,e*.62,.12).position.y=-e*.1,this.bob=nt(n,et.sph,mt(14170666,14170666,.6),e*1,-.5,0,1.8),nt(n,et.sph,mt(16777215),e*1,-.2,0,.9)}}_island(t,e,n,s){if(this.islKind!==n){this.isl&&this.scene.remove(this.isl);let o=this.isl=new Ie;this.islKind=n;let a=mt(n==="rock"?11049610:n==="gold"?16769162:15782026,0,0,{r:.9}),l=this.wx;nt(o,et.box,mt(5954266,2140336,.3,{t:.55,r:.2}),0,.2,-30,l,.3,70).position.z=-12,nt(o,et.box,a,0,.6,-40,l,2.2,80).position.z=-32;let c=nt(o,et.box,mt(16777215,16777215,.4,{t:.85}),0,1.7,8.5,l,.3,2.2),h=0,u=-14,d=nt(o,et.box,mt(14170666,14170666,.4),h,1.8,u,12,.3,2.2);d.rotation.y=.78;let p=nt(o,et.box,mt(14170666,14170666,.4),h,1.8,u,12,.3,2.2);if(p.rotation.y=-.78,n==="palm"||n==="sand"){let m=sl(14);m.position.set(-this.wx*.32,1.5,-22),o.add(m);let A=sl(10);A.position.set(this.wx*.34,1.5,-30),A.rotation.y=2,o.add(A);let g=sl(12);g.position.set(this.wx*.14,1.5,-40),o.add(g)}else if(n==="coral")for(let m=0;m<9;m++){let A=nt(o,et.cone,mt(m%2?16743080:16751194,0,0,{r:.5}),(m-4)*l*.1,3,-18-m%3*8,3,6+m%3*2,3);A.rotation.z=(m%3-1)*.2}else for(let[m,A,g]of[[-.3,-16,7],[.32,-24,9],[.1,-34,6],[-.12,-44,8]]){let f=nt(o,et.sph,mt(8026754,0,0,{r:.9}),m*l,2,A,g*1.5,g,g*1.3);f.rotation.y=A}if(n==="gold"){let m=Tm();m.position.set(l*.18,1.5,-20),o.add(m),this.chest=m}this.scene.add(o)}let r=this.H*(.62*t+e*.25);this.isl.visible=t>.001||e>0,this.isl.position.set(0,0,this.Z(r/this.H)-6),this.chest&&(this.chest.rotation.y=s)}render(t){let{v:e,tm:n,raftFy:s,rs:r,drift:o}=t;this.rs!==r&&(this.rs=r,this.nTiles=-1);let a=this.wg.attributes.position,l=this.wg.attributes.color,c=this.base0,h=this.wx,u=this.wz,d=o*this.H/this.u/Sr,p=[.08,.5,.95],m=[.03,.24,.66];for(let v=0;v<a.count;v++){let x=c[v*3]*h,w=c[v*3+2]*u,B=Math.sin(x*.28+n*1.3)*.5+Math.sin((w-d)*.22+n*1.1+x*.1)*.6+Math.sin((w-d)*.5-n*1.7)*.2;a.setY(v,B*.8);let D=(B+1.3)/2.6;l.setXYZ(v,m[0]+(p[0]-m[0])*D,m[1]+(p[1]-m[1])*D,m[2]+(p[2]-m[2])*D)}a.needsUpdate=!0,l.needsUpdate=!0,this.wg.computeVertexNormals(),this.water.position.set(0,-1,0);for(let v of this.sp){let x=v.userData,w=(x.fy+o*1.2)%1.1-.05;v.position.set(this.X(x.fx),.4,this.Z(w));let B=.6+.4*Math.sin(n*3+x.fx*20);v.scale.set(x.s*3*B,x.s*1.2*B,1)}for(let v of this.clouds){let x=v.userData;x.fx=(x.fx+x.sp*.016)%1.3,v.position.set(this.X(x.fx-.15),0,this.Z(x.fy))}let A=e.built.tile,g=`${e.built.sail}${e.built.hut}${e.built.fish}`;A!==this.nTiles&&(this.nTiles=A,this._tiles(A)),(g!==this.flags||this.exRs!==this.rs)&&(this.flags=g,this.exRs=this.rs,this._extras(e.built));let f=Math.sin(n*1.6)*.5;this.raft.position.set(this.X(.5),f,this.Z(s)),this.raft.rotation.z=Math.sin(n*1.1)*.02,this.raft.rotation.x=Math.sin(n*.9)*.02;let S=this.rs;this.foam.scale.set(S*3,S*3,1),this.foam.position.y=.1-f;let I=e.hook&&e.hook.phase==="out",_=this.hero;_.g.position.set(S*.1,1.05,S*.4),_.g.scale.setScalar(S*1);let L=Math.abs(Math.sin(n*3));_.P.body.position.y=.4+L*.03,_.P.arms[0].rotation.x=Math.sin(n*2)*.25,_.P.arms[0].rotation.z=.15,_.P.arms[1].rotation.x=I?-2.6:.1,_.P.arms[1].rotation.z=I?-.4:-.15,_.P.head.rotation.z=Math.sin(n*1.5)*.05,_.P.legs.forEach((v,x)=>{v.rotation.x=Math.sin(n*3+x*Math.PI)*.06}),this.sailCloth&&(this.sailCloth.scale.z=.5+Math.sin(n*2)*.12,this.sailCloth.rotation.y=Math.sin(n*1.6)*.1),this.bob&&e.built.fish&&(this.bob.position.y=-.5+Math.sin(n*3)*.4);let b=new Set;for(let v of e.items){b.add(v.id);let x=this.items.get(v.id);x||(x=wm(v.kind),this.scene.add(x.g),this.items.set(v.id,x)),x.g.position.set(this.X(v.x),0,this.Z(v.y)),x.o.position.y=.3+Math.sin(n*2+v.ph)*.5,x.o.rotation.y=Math.sin(n*1.3+v.ph)*.4,x.o.rotation.z=Math.sin(n*1.7+v.ph)*.1,x.o.userData.glow&&x.o.scale.setScalar(1+Math.sin(n*4)*.05)}for(let[v,x]of this.items)b.has(v)||(this.scene.remove(x.g),this.items.delete(v));let E=e.shark;if(this.shark.g.visible=E.state!=="none",E.state!=="none"){let v=this.X(E.x),x=this.Z(E.y),w=this.shark.g,B=v-w.position.x,D=x-w.position.z;Math.hypot(B,D)>.02&&(w.rotation.y=Math.atan2(B,D)),w.position.set(v,-.2+(E.state==="bite"?.9:0),x),this.shark.P.tail.rotation.y=Math.sin(n*6)*.5,this.shark.P.body.rotation.z=Math.sin(n*3)*.05,w.scale.setScalar(1.6)}let V=e.hook;if(this.rope.visible=this.hookM.visible=this.hring.visible=V.phase!=="idle",V.phase!=="idle"){let v=this.X(V.hx),x=this.Z(V.hy),w=new T(this.raft.position.x+S*.35,9+f,this.raft.position.z+S*.2),B=new T(v,.8,x),D=w.clone().lerp(B,.5);D.y+=2+Math.sin(n*12)*.4;let k=new Ui(w,D,B);this.rope.geometry.dispose(),this.rope.geometry=new hr(k,14,.28,5,!1),this.hookM.position.copy(B),this.hookM.rotation.y=n*2,this.hring.position.set(v,.4,x);let K=1+V.t*2;this.hring.scale.set(6*K,3.2*K,6*K),this.hring.visible=V.phase==="out"||V.phase==="back"&&V.t<.1}this._island(Math.max(0,(e.progress-.78)/.22),e.state==="landing"?Math.min(1,e.landT/2):0,e.level.isl,n),this.renderer.render(this.scene,this.cam)}dispose(){this.renderer.dispose()}};var Vm={title:["\u0637\u0648\u0641 \u0627\u0644\u0646\u0627\u062C\u064A","Castaway Raft"],play:["\u064A\u0644\u0627 \u0646\u0628\u062D\u0631","Set sail"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Level"],exit:["\u062E\u0631\u0648\u062C","Exit"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],again:["\u062A\u0627\u0646\u064A","Again"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],hookWood:["\u0627\u0635\u0637\u0627\u062F \u0627\u0644\u062E\u0634\u0628 \u0628\u0627\u0644\u062E\u0637\u0651\u0627\u0641 \u0648\u0627\u0628\u0646\u064A!","Hook wood to build!"],needBuild:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0628\u0646\u0627\u0621 \u0639\u0634\u0627\u0646 \u062A\u0646\u0632\u0644 \u0627\u0644\u062C\u0632\u064A\u0631\u0629!","Finish building to land!"],tapSea:["\u062F\u0648\u0633 \u0639\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u0639\u0634\u0627\u0646 \u062A\u0631\u0645\u064A \u0627\u0644\u062E\u0637\u0651\u0627\u0641","Tap the sea to throw the hook"],shark:["\u0642\u0631\u0634 \u062C\u0639\u0627\u0646! \u062F\u0648\u0633 \u0639\u0644\u064A\u0647 \u0639\u0634\u0627\u0646 \u064A\u0647\u0631\u0628!","Hungry shark! Tap it to scare it off!"],scared:["\u0647\u0631\u0628 \u0627\u0644\u0642\u0631\u0634! \u{1F988}","The shark swam away! \u{1F988}"],bitten:["\u0627\u0644\u0642\u0631\u0634 \u062E\u062F \u062E\u0634\u0628\u0629","The shark took a log"],islandReached:["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u062C\u0632\u064A\u0631\u0629!","Island reached!"],landed:["\u0646\u0632\u0644\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u062C\u0632\u064A\u0631\u0629","Landed on the island"],bottles:["\u0627\u0644\u0632\u062C\u0627\u062C\u0627\u062A \u0627\u0644\u062F\u0647\u0628\u064A\u0629","Golden bottles"],noLogs:["\u0627\u0644\u0642\u0631\u0634 \u0645\u0627\u062E\u062F\u0634 \u062E\u0634\u0628","No logs lost"],treasure:["\u0644\u0642\u064A\u0646\u0627 \u0627\u0644\u0643\u0646\u0632! \u{1FA99}","Treasure found! \u{1FA99}"],raftTile:["\u0642\u0637\u0639\u0629 \u0637\u0648\u0641","Raft tile"],sail:["\u0634\u0631\u0627\u0639","Sail"],fish:["\u0635\u0646\u0651\u0627\u0631\u0629","Fishing spot"],hut:["\u0643\u0648\u062E","Hut"],built:["\u0627\u062A\u0628\u0646\u0649","Built"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u{1F3DD}\uFE0F","Well done! \u{1F3DD}\uFE0F"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u{1F3DD}\uFE0F","Well done! \u{1F3DD}\uFE0F"],noWood:["\u0645\u062D\u062A\u0627\u062C \u062E\u0634\u0628 \u0623\u0643\u062A\u0631","Need more wood"],plus:["+","+"],wood:["\u062E\u0634\u0628","wood"],crate:["\u0635\u0646\u062F\u0648\u0642","crate"],bottle:["\u0632\u062C\u0627\u062C\u0629","bottle"],fishCoin:["\u0633\u0645\u0643","fish"]},{setLang:hh,setGirl:uh,getLang:wr,t:Dt,num:He}=gl(Vm);var Rm=ml("cr","#3aa8d8","#1a6a98","#ffd23a"),Tr={wood:"\u{1FAB5}",crate:"\u{1F4E6}",barrel:"\u{1F6E2}\uFE0F",bottle:"\u{1F37E}"},Pm=[[1,1],[0,1],[1,2],[0,2],[1,0],[0,0],[2,1],[2,2],[2,0]],Lm={tile:"\u{1F7EB}",sail:"\u26F5",fish:"\u{1F3A3}",hut:"\u{1F6D6}"},rl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),hh(e.lang),uh(e.gender==="girl"),this.age=Number(e.age)||5,this.save=xl(e.save),this.base=e.base||"./",this.sound=new ai,this.sound.muted=!!this.save.muted,document.getElementById("cr-style")||document.head.append(vt("style",{id:"cr-style"},Rm)),this.root=vt("div",{class:"cr-root",dir:wr()==="en"?"ltr":"rtl"}),t.append(this.root),this.view=new Er,this.root.append(this.view.dom),this.cv=vt("canvas"),this.root.append(this.cv),this.g=this.cv.getContext("2d"),this.layer=vt("div",{class:"cr-layer"}),this.root.append(this.layer),this.mode="menu",this.fx=[],this.clock=0,this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this._loop()})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.cv.width=Math.round(this.cw*this.dpr),this.cv.height=Math.round(this.ch*this.dpr),this.u=Math.min(this.cw,this.ch)/100,this.view.setSize(this.cw,this.ch,this.u),this.root.style.setProperty("--u",`${this.u}px`)}_bind(){let t=()=>this.sound.unlock();for(let e of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(e,t,{capture:!0,passive:!0});this.cv.addEventListener("pointerdown",e=>{if(this.mode!=="play"||this.paused)return;let n=this.cv.getBoundingClientRect(),s=(e.clientX-n.left)/n.width,r=(e.clientY-n.top)/n.height;this.v.throwHook(s,r)&&this.sound.play("throw")}),this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_clear(){this.layer.replaceChildren(),this.hud=null}_soundPill(){let t=vt("button",{class:"cr-soundpill",onclick:()=>this.sound.unlock()},Dt("sound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=this.sound.on||this.sound.muted||!this.sound.ctx?"none":"block",this.sound.ctx||(t.style.display="none"),setTimeout(e,600))};e()}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode("menu");let t=vt("div",{class:"cr-lvs"},Sn.map((e,n)=>{let s=e.id>this.save.unlocked,r=this.save.stars[e.id]||0;return vt("button",{class:`cr-lv${s?" lock":""}`,"aria-label":`${Dt("level")} ${e.id}`,onclick:()=>{if(s){this.hint(Dt("locked"));return}this.sound.play("tap"),this.start(n)}},vt("i",{},s?"\u{1F512}":["\u{1F334}","\u{1FAB5}","\u{1F988}","\u{1FAA8}","\u{1FAB8}","\u26C8\uFE0F","\u{1F40B}","\u{1F48E}"][n]),vt("span",{},He(e.id)),vt("span",{},"\u2B50".repeat(r)||"\xB7"))}));this.layer.append(vt("div",{class:"cr-dim"},vt("div",{class:"cr-card"},vt("div",{class:"cr-logo"},Dt("title")),vt("div",{class:"cr-small"},Dt("tapSea")),t,vt("button",{class:"cr-btn dark",onclick:()=>this.post({type:"exit"})},Dt("exit"))))),this.hintEl=vt("div",{class:"cr-hint"}),this.layer.append(this.hintEl),this._soundPill()}hint(t,e=2600){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}start(t){this.levelIndex=t,this.v=new us({level:t,easy:this.age<=4,seed:(Date.now()&65535)+1}),this.mode="play",this.paused=!1,this.fx=[],this._clear(),this.sound.setMode("play");let e=this.v.level,n=vt("div",{class:"cr-pill"},`${He(e.id)}  `,wr()==="en"?e.en:e.ar);this.coinEl=vt("span",{},"\u{1FA99} 0");let s=vt("div",{class:"cr-pill"},this.coinEl),r=vt("button",{class:"cr-round","aria-label":Dt("menu"),onclick:()=>this.showMenu()},"\u2630"),o=vt("button",{class:"cr-round","aria-label":Dt("paused"),onclick:()=>this.togglePause()},"\u23F8");this.barEl=vt("b",{style:"width:0%"});let a=vt("div",{class:"cr-bar"},this.barEl),l=vt("div",{class:"cr-top"},r,n,s,o),c=vt("div",{class:"cr-top",style:"top:calc(var(--u)*15)"},vt("span",{},"\u{1FAB5}"),a,vt("span",{},"\u{1F3DD}\uFE0F"));this.hintEl=vt("div",{class:"cr-hint",style:"top:calc(var(--u)*24)"}),this.resEl={wood:vt("span",{},"0"),crate:vt("span",{},"0"),bottle:vt("span",{},`0/${e.bottles}`)};let h=vt("div",{class:"cr-bot",style:"bottom:calc(var(--u)*22)"},vt("div",{class:"cr-pill"},Tr.wood,this.resEl.wood),vt("div",{class:"cr-pill"},Tr.crate,this.resEl.crate),vt("div",{class:"cr-pill"},Tr.bottle,this.resEl.bottle));this.bldEl={};let u=["tile",...["sail","fish","hut"].filter(m=>e.need[m])],d={tile:Dt("raftTile"),sail:Dt("sail"),fish:Dt("fish"),hut:Dt("hut")},p=vt("div",{class:"cr-bot"},u.map(m=>{let A=hs[m],g=Object.keys(A).filter(S=>A[S]>0).map(S=>`${A[S]}${Tr[S]}`).join(" "),f=vt("button",{class:"cr-bld","aria-label":d[m],onclick:()=>{this.v.build(m)?this._afterBuild(m):this.hint(Dt("noWood"))}},vt("i",{},Lm[m]),vt("span",{},d[m]),vt("small",{},g));return this.bldEl[m]=f,f}));this.layer.append(l,c,this.hintEl,h,p),this._soundPill(),this.hint((e.need.tile,Dt("hookWood")),4e3),this.coinShown=0}_afterBuild(t){this.sound.play("build");let e={tile:Dt("raftTile"),sail:Dt("sail"),fish:Dt("fish"),hut:Dt("hut")}[t];this.fx.push({x:re.x,y:re.y-.12,text:`${Dt("built")}: ${e}`,t:0,life:1.6})}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.pauseEl=vt("div",{class:"cr-dim"},vt("div",{class:"cr-card"},vt("div",{class:"cr-title"},Dt("paused")),vt("button",{class:"cr-btn",onclick:()=>this.togglePause()},Dt("resume")),vt("button",{class:"cr-btn dark",onclick:()=>this.start(this.levelIndex)},Dt("restart")),vt("button",{class:"cr-btn dark",onclick:()=>this.showMenu()},Dt("menu")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_result(){let t=this.v,e=t.level,n=this.save.stars[e.id]||0;t.stars>n&&(this.save.stars[e.id]=t.stars),this.save.unlocked=Math.max(this.save.unlocked,Math.min(Sn.length,e.id+1)),this.save.coins+=t.reward,this.post({type:"save",save:this.save}),this.sound.play("win");let s=(o,a)=>vt("div",{class:"cr-small",style:"width:100%;text-align:start"},o?"\u2705 ":"\u25AB\uFE0F ",a),r=e.id>=Sn.length;this.layer.append(vt("div",{class:"cr-dim"},vt("div",{class:"cr-card"},vt("div",{class:"cr-title"},Dt("islandReached")),vt("div",{class:"cr-stars"},[1,2,3].map(o=>vt("span",{class:o<=t.stars?"":"off"},"\u2B50"))),s(!0,`${Dt("landed")}: ${wr()==="en"?e.en:e.ar}`),s(t.bottles>=e.bottles,`${Dt("bottles")} ${He(t.bottles)}/${He(e.bottles)}`),s(t.lost===0,Dt("noLogs")),vt("div",{class:"cr-pill"},`\u{1FA99} +${He(t.reward)}`),vt("div",{class:"cr-small"},r?Dt("treasure"):Dt(this._girl()?"win_f":"win_m")),r?null:vt("button",{class:"cr-btn",onclick:()=>this.start(this.levelIndex+1)},Dt("next")),vt("button",{class:"cr-btn alt",onclick:()=>this.start(this.levelIndex)},Dt("again")),vt("button",{class:"cr-btn dark",onclick:()=>this.showMenu()},Dt("menu")))))}_girl(){return Dt("win_f")!==Dt("win_m")&&!1}_loop(){let t=e=>{if(!this.root.isConnected)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.clock+=n,this.mode==="play"&&!this.paused&&this._update(n),this._draw(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}_update(t){let e=this.v,n=e.state;for(let r of e.step(t))switch(r.type){case"hooked":this.sound.play("splash"),this.sound.play("hook");break;case"miss":this.sound.play("splash");break;case"got":{this.sound.play(r.what==="bottle"?"bottle":"got"),this.fx.push({x:re.x,y:re.y-.1,text:r.what==="bottle"?"+\u{1F37E}":`+${r.n} ${Dt(r.what)}`,t:0,life:1.1});break}case"needBuild":this.hint(Dt("needBuild"),5e3);break;case"sharkIn":this.sound.play("sharkIn"),this.hint(Dt("shark"),4e3);break;case"sharkWarn":this.sound.play("sharkIn");break;case"bitten":this.sound.play("bite"),this.fx.push({x:re.x+.1,y:re.y,text:r.wood?`-1 ${Dt("wood")}`:"",t:0,life:1.2}),this.hint(Dt("bitten"),1800);break;case"scare":this.sound.play("scare"),this.hint(Dt("scared"),2200);break;case"fish":this.sound.play("fish"),this.fx.push({x:re.x+.22,y:re.y-.05,text:`+${He(r.n)} \u{1F41F}`,t:0,life:1.1});break;case"landing":this.sound.play("land");break;case"done":this._result();break;default:break}this.barEl.style.width=`${Math.round(e.progress*100)}%`,this.resEl.wood.textContent=He(e.res.wood),this.resEl.crate.textContent=He(e.res.crate),this.resEl.bottle.textContent=`${He(e.bottles)}/${He(e.level.bottles)}`;let s=e.coins;s!==this.coinShown&&(this.coinShown=s,this.coinEl.textContent=`\u{1FA99} ${He(s)}`);for(let r of Object.keys(this.bldEl)){let o=this.bldEl[r],a=r==="tile"?e.extra.tile>=(e.level.need.tile||0)&&e.built.tile>=Rr:e.built[r];o.classList.toggle("can",e.canBuild(r)&&(r==="tile"&&e.extra.tile<(e.level.need.tile||99)||!0)),o.classList.toggle("done",!!a)}for(let r of this.fx)r.t+=t;this.fx=this.fx.filter(r=>r.t<r.life)}_draw(){let t=this.g;t.setTransform(this.dpr,0,0,this.dpr,0,0);let e=this.cw,n=this.ch,s=this.mode==="play"?this.v:null,r=this.clock;t.clearRect(0,0,e,n);let o=s&&s.state==="landing"?Math.min(1,s.landT/2):0,a=s||{built:{tile:6,sail:!0,fish:!1,hut:!1},hook:{phase:"idle"},shark:{state:"none"},state:"sail",time:r,items:[],progress:0,level:{isl:"palm"}},l=s?Math.min(e,n)*.145/this.u:14;if(this.view.render({v:a,tm:r,raftFy:(s?re.y-.07:.8)-o*.45,rs:l,drift:s?s.time*.05:r*.03}),s&&s.shark.state==="bite"){let[c,h]=this.view.project(this.view.X(s.shark.x)+3,8,this.view.Z(s.shark.y)),u=this.u;t.fillStyle="#fff",t.strokeStyle="#d83a2a",t.lineWidth=u*.6,t.beginPath(),t.arc(c,h,u*2.6,0,6.3),t.fill(),t.stroke(),t.fillStyle="#d83a2a",t.font=`900 ${u*4}px system-ui`,t.textAlign="center",t.fillText("!",c,h+u*1.4)}if(s){t.textAlign="center",t.font=`900 ${this.u*4.4}px Tajawal, system-ui, sans-serif`;for(let c of this.fx){let h=c.t/c.life;t.globalAlpha=1-h*h,t.fillStyle="#fff",t.strokeStyle="rgba(0,40,70,.9)",t.lineWidth=this.u*.9;let u=c.x*e,d=c.y*n-h*this.u*10;t.strokeText(c.text,u,d),t.fillText(c.text,u,d)}t.globalAlpha=1}}_drawMenuRaft(t,e,n,s){let r=Math.min(e,n)*.14,o={built:{tile:6,sail:!0,fish:!1,hut:!1},hook:{phase:"idle"},shark:{state:"none"},state:"sail",time:s};this._raft(t,e*.5,n*.8,o,s,r)}_island(t,e,n,s,r,o){if(s<=0)return;let a=n*(.62*s+r*.25),l=o==="rock"?"#a89a8a":o==="gold"?"#ffe08a":"#f0d08a";t.fillStyle="rgba(80,220,220,.55)",t.beginPath(),t.moveTo(0,0),t.lineTo(e,0);for(let u=e;u>=0;u-=e/16)t.lineTo(u,a+this.u*6+Math.sin(u*.02+this.clock)*this.u*1.2);t.fill(),t.fillStyle=l,t.beginPath(),t.moveTo(0,0),t.lineTo(e,0);for(let u=e;u>=0;u-=e/16)t.lineTo(u,a+Math.sin(u*.03)*this.u*2.5);t.fill(),t.fillStyle="rgba(255,255,255,.7)";for(let u=0;u<e;u+=e/16)t.beginPath(),t.ellipse(u+e/32,a+this.u*3+Math.sin(u*.03)*this.u*2.5,e/34,this.u*1.1,0,0,6.3),t.fill();t.strokeStyle="#d83a2a",t.lineWidth=this.u*1.2;let c=e*.5,h=a*.45;if(t.beginPath(),t.moveTo(c-this.u*3,h-this.u*3),t.lineTo(c+this.u*3,h+this.u*3),t.moveTo(c+this.u*3,h-this.u*3),t.lineTo(c-this.u*3,h+this.u*3),t.stroke(),o==="palm"||o==="sand"){let u=e*.2,d=a*.5;t.strokeStyle="#8a5a2a",t.lineWidth=this.u*1.6,t.beginPath(),t.moveTo(u,d+this.u*6),t.quadraticCurveTo(u+this.u*2,d,u+this.u,d-this.u*6),t.stroke(),t.fillStyle="#3aa84a";for(let p=0;p<6;p++)t.beginPath(),t.ellipse(u+this.u+Math.cos(p)*this.u*3,d-this.u*6+Math.sin(p)*this.u*1.4,this.u*3.4,this.u*1.1,p*.6,0,6.3),t.fill()}else{t.fillStyle="#7a7a82";for(let[u,d,p]of[[.15,.3,4],[.82,.4,5],[.7,.2,3]])t.beginPath(),t.ellipse(e*u,a*d*1.4,this.u*p,this.u*p*.7,0,0,6.3),t.fill()}o==="gold"&&r>.4&&(t.font=`${this.u*9}px system-ui`,t.textAlign="center",t.fillText("\u{1F48E}",c+this.u*12,h))}_item(t,e,n,s,r){let o=s.x*e,a=s.y*n+Math.sin(r*2+s.ph)*this.u*.8,l=this.u;t.save(),t.translate(o,a),t.rotate(Math.sin(r*1.3+s.ph)*.15),t.strokeStyle="rgba(255,255,255,.75)",t.lineWidth=l*.6,t.beginPath(),t.ellipse(0,l*.6,l*5.4,l*3.4,0,0,6.3),t.stroke(),s.kind==="plank"?(t.fillStyle="#c8924a",t.strokeStyle="#7a4a1a",t.lineWidth=l*.5,t.beginPath(),t.roundRect(-l*4.4,-l*1,l*8.8,l*2,l*.5),t.fill(),t.stroke(),t.strokeStyle="rgba(90,50,10,.5)",t.beginPath(),t.moveTo(-l*3,0),t.lineTo(l*3,0),t.stroke()):s.kind==="barrel"?(t.fillStyle="#9a5a2a",t.strokeStyle="#4a2a0a",t.lineWidth=l*.5,t.beginPath(),t.ellipse(0,0,l*3.2,l*3.6,0,0,6.3),t.fill(),t.stroke(),t.fillStyle="#6a3a1a",t.fillRect(-l*3.2,-l*1.8,l*6.4,l*.8),t.fillRect(-l*3.2,l*1,l*6.4,l*.8),t.fillStyle="#c88a4a",t.beginPath(),t.ellipse(0,-l*3,l*2.6,l*1,0,0,6.3),t.fill()):s.kind==="crate"?(t.fillStyle="#b8803a",t.strokeStyle="#5a3a0a",t.lineWidth=l*.5,t.fillRect(-l*3,-l*3,l*6,l*6),t.strokeRect(-l*3,-l*3,l*6,l*6),t.beginPath(),t.moveTo(-l*3,-l*3),t.lineTo(l*3,l*3),t.moveTo(l*3,-l*3),t.lineTo(-l*3,l*3),t.stroke()):(t.shadowColor="#ffe04a",t.shadowBlur=l*3+Math.sin(r*4)*l,t.fillStyle="#ffd23a",t.strokeStyle="#a87a0a",t.lineWidth=l*.4,t.beginPath(),t.ellipse(0,l*.8,l*1.7,l*2.4,0,0,6.3),t.fill(),t.stroke(),t.fillRect(-l*.6,-l*3,l*1.2,l*2),t.fillStyle="#c8924a",t.fillRect(-l*.8,-l*3.6,l*1.6,l*.8),t.shadowBlur=0),t.restore()}_shark(t,e,n,s,r){let o=s.x*e,a=s.y*n,l=this.u;t.save(),t.translate(o,a),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=l*.6,t.beginPath(),t.ellipse(0,l*1.2,l*7+Math.sin(r*3)*l*.6,l*3,0,0,6.3),t.stroke(),t.fillStyle="#3a4a6a",t.beginPath(),t.moveTo(-l*2.2,l*1),t.quadraticCurveTo(-l*.8,-l*6,l*2,l*1),t.closePath(),t.fill(),t.fillStyle="#4a5a7a",t.beginPath(),t.ellipse(0,l*1.2,l*5,l*1.6,0,0,6.3),t.fill(),s.state==="bite"&&(t.fillStyle="#fff",t.strokeStyle="#d83a2a",t.lineWidth=l*.6,t.beginPath(),t.arc(l*4,-l*6,l*2.6,0,6.3),t.fill(),t.stroke(),t.fillStyle="#d83a2a",t.font=`900 ${l*4}px system-ui`,t.textAlign="center",t.fillText("!",l*4,-l*4.6)),t.restore()}_raft(t,e,n,s,r,o){let a=o||Math.min(this.cw,this.ch)*.145,l=Math.sin(r*1.6)*this.u*.5;t.save(),t.translate(e,n+l),t.rotate(Math.sin(r*1.1)*.02);let c=s.built.tile;t.fillStyle="rgba(255,255,255,.35)",t.beginPath(),t.ellipse(0,a*.3,a*2.1,a*2,0,0,6.3),t.fill();for(let h=0;h<c;h++){let[u,d]=Pm[h],p=(u-1)*a-a/2,m=(d-1)*a-a/2;t.fillStyle="#c48a46",t.strokeStyle="#6a3e14",t.lineWidth=this.u*.5,t.beginPath(),t.roundRect(p,m,a*.99,a*.99,this.u*.8),t.fill(),t.stroke(),t.strokeStyle="rgba(100,60,20,.55)";for(let A=1;A<4;A++)t.beginPath(),t.moveTo(p+a*A/4,m+this.u*.5),t.lineTo(p+a*A/4,m+a-this.u*.5),t.stroke();t.fillStyle="#e8d8a0",t.fillRect(p,m+a*.3,a,this.u*.8),t.fillRect(p,m+a*.66,a,this.u*.8)}s.built.sail&&(t.strokeStyle="#5a3a1a",t.lineWidth=this.u*1.1,t.beginPath(),t.moveTo(-a*.9,a*.2),t.lineTo(-a*.9,-a*1.7),t.stroke(),t.fillStyle="#f4e8d0",t.strokeStyle="#a8845a",t.lineWidth=this.u*.4,t.beginPath(),t.moveTo(-a*.9,-a*1.6),t.quadraticCurveTo(-a*.1+Math.sin(r*2)*this.u*.6,-a*1.1,-a*.2,-a*.2),t.lineTo(-a*.9,-a*.1),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#e86a5a",t.fillRect(-a*.8,-a*1.1,a*.4,a*.5)),s.built.fish&&(t.strokeStyle="#6a4a2a",t.lineWidth=this.u*.6,t.beginPath(),t.moveTo(a*1,a*.3),t.lineTo(a*2.2,-a*.6),t.stroke(),t.strokeStyle="rgba(255,255,255,.8)",t.lineWidth=this.u*.2,t.beginPath(),t.moveTo(a*2.2,-a*.6),t.lineTo(a*2.2,a*.5+Math.sin(r*3)*this.u*.5),t.stroke(),t.fillStyle="#d83a2a",t.beginPath(),t.arc(a*2.2,a*.5+Math.sin(r*3)*this.u*.5,this.u*.8,0,6.3),t.fill()),s.built.hut&&(t.fillStyle="#d8b878",t.strokeStyle="#6a4a1a",t.lineWidth=this.u*.5,t.fillRect(-a*.3,-a*1.3,a*1.2,a*.9),t.strokeRect(-a*.3,-a*1.3,a*1.2,a*.9),t.fillStyle="#b8453a",t.beginPath(),t.moveTo(-a*.5,-a*1.3),t.lineTo(a*.3,-a*1.9),t.lineTo(a*1.1,-a*1.3),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#5a3a1a",t.fillRect(a*.1,-a*.9,a*.4,a*.5)),this._hero(t,a*.1,a*.6,a,s,r),t.restore()}_hero(t,e,n,s,r,o){let a=s*.14,l=r.hook&&r.hook.phase==="out",c=Math.abs(Math.sin(o*3))*a*.4;t.save(),t.translate(e,n-c),t.fillStyle="#2a4a8a",t.fillRect(-a*1.5,a*1.8,a*1.2,a*2.2),t.fillRect(a*.3,a*1.8,a*1.2,a*2.2),t.fillStyle="#f4f4f4",t.beginPath(),t.roundRect(-a*2.4,-a*1.2,a*4.8,a*3.4,a),t.fill(),t.fillStyle="#d83a2a";for(let h=0;h<3;h++)t.fillRect(-a*2.4,-a*.4+h*a*1,a*4.8,a*.45);t.strokeStyle="#f2c9a0",t.lineWidth=a*1.1,t.lineCap="round",t.beginPath(),t.moveTo(-a*2.2,-a*.4),t.lineTo(-a*3,a*1.2+Math.sin(o*2)*a*.3),t.stroke(),t.beginPath(),t.moveTo(a*2.2,-a*.4),t.lineTo(l?a*4.4:a*3,l?-a*1.8:a*1.2),t.stroke(),t.fillStyle="#f2c9a0",t.beginPath(),t.arc(0,-a*2.7,a*2,0,6.3),t.fill(),t.fillStyle="#2a1a0a",t.beginPath(),t.arc(-a*.7,-a*2.7,a*.3,0,6.3),t.arc(a*.7,-a*2.7,a*.3,0,6.3),t.fill(),t.strokeStyle="#a8503a",t.lineWidth=a*.25,t.beginPath(),t.arc(0,-a*2.1,a*.6,.2,2.9),t.stroke(),t.fillStyle="#e8c868",t.strokeStyle="#a8883a",t.lineWidth=a*.3,t.beginPath(),t.ellipse(0,-a*3.9,a*3.4,a*1,0,0,6.3),t.fill(),t.stroke(),t.beginPath(),t.ellipse(0,-a*4.4,a*1.7,a*1.2,0,Math.PI,0),t.fill(),t.stroke(),t.fillStyle="#d83a2a",t.fillRect(-a*1.7,-a*4.3,a*3.4,a*.5),t.restore()}_hook(t,e,n,s,r,o,a){let l=s.hook;if(l.phase==="idle")return;let c=l.hx*r,h=l.hy*o-(n-re.y*o)*0,u=e+this.u*2,d=n-this.u*3;t.strokeStyle="#f4e8c8",t.lineWidth=this.u*.45,t.beginPath(),t.moveTo(u,d),t.quadraticCurveTo((u+c)/2,(d+h)/2+this.u*3+Math.sin(a*12)*this.u*.4,c,h),t.stroke(),l.item&&this._item(t,r,o,{...l.item,x:l.hx,y:l.hy,ph:0},a),t.strokeStyle="#c8ccd4",t.lineWidth=this.u*.7,t.beginPath(),t.arc(c,h+this.u*.8,this.u*1.1,-.5,3.6),t.stroke(),(l.phase==="out"||l.phase==="back"&&l.t<.1)&&(t.strokeStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(c,h,this.u*3*(1+l.t*2),this.u*1.6*(1+l.t*2),0,0,6.3),t.stroke())}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){cancelAnimationFrame(this.raf),this.view.dispose(),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},al={start(i,t,e){let n=new rl(i,t||{},e);return al.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.CastawayRaft=al;var NA=al;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
