(()=>{function _t(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Jo(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function $o(i,t,e,n="#ffd23a"){return`
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
`}var yn=(i,t,e)=>i<t?t:i>e?e:i;function tl(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var In=8,el=["hills","cave","desert","snow"],eh=38,nh=6.2,ih=14.4;function sh(i,t){let e=tl(t+i*59+7),n=14,s=90+i*18,r=Array.from({length:n},()=>Array(s).fill(" ")),a=[],o=[{x:2}],l=(A,p,f)=>{A>=0&&A<s&&p>=0&&p<n&&(r[p][A]=f)},c=n-2,h=(A,p)=>{for(let f=A;f<p;f++)l(f,c,"#"),l(f,c+1,"#")},u=(A,p)=>a.push({x:A,y:c-1,dir:p,w:.9,dead:!1,vx:0}),d=12,g=0;for(h(0,12);d<s-14;){let A=e();if(d-g>=34){h(d,d+7);for(let p=0;p<4;p++)l(d+2+p,c-2,"c");o.push({x:d+1}),g=d,d+=7}else if(A<.22){let p=2+(i>=2&&e()<.5?1:0);d+=p,h(d,d+5),d+=5}else if(A<.4){h(d,d+7);let p=i===0?1:1+Math.floor(e()*2);for(let f=0;f<p;f++)l(d+3,c-1-f,"P"),l(d+4,c-1-f,"P");d+=7}else if(A<.62){h(d,d+9);let p=c-5;for(let f=2;f<6;f++)l(d+f,p,f===3||f===5?"?":"B");e()<.6&&l(d+4,p-1,"c"),u(d+7,-1),d+=9}else if(A<.8){h(d,d+9);for(let p=0;p<3;p++)for(let f=0;f<=p;f++)l(d+2+p,c-1-f,"B");d+=9}else{h(d,d+7);for(let p=0;p<4;p++)l(d+1+p,c-1-p%2,"c");i>1&&u(d+5,1),d+=7}}h(d,s),a.length||u(Math.floor(s/2)+3,-1);let m=s-6;for(let A=0;A<8;A++)l(m,c-1-A,"F");return{grid:r,H:n,len:s,enemies:a,flagX:m,ground:c,cps:o,world:el[Math.floor(i/2)%4]}}var si=class i{constructor(t={}){var n,s;this.level=yn((n=t.level)!=null?n:0,0,In-1),this.easy=!!t.easy;let e=sh(this.level,(s=t.seed)!=null?s:5);this.grid=e.grid,this.H=e.H,this.len=e.len,this.enemies=e.enemies.map(r=>({...r,vx:r.dir*1.6})),this.flagX=e.flagX,this.world=e.world,this.cps=e.cps,this.cp=e.cps[0],this.maxLives=this.easy?5:3,this.lives=this.maxLives,this.coins=0,this.state="play",this.time=0,this.events=[],this.big=!1,this.mush=[],this.p=null,this._spawn(),this.score=0}_spawn(){this.p={x:this.cp.x,y:this.H-4,vx:0,vy:0,w:.8,h:this.big?1.6:1,ground:!1,face:1,inv:1.6}}clone(){let t=Object.create(i.prototype);return Object.assign(t,this),t.grid=this.grid.map(e=>e.slice()),t.enemies=this.enemies.map(e=>({...e})),t.mush=this.mush.map(e=>({...e})),t.p={...this.p},t.events=[],t}tile(t,e){let n=Math.floor(t),s=Math.floor(e);return n<0?"#":n>=this.len||s<0||s>=this.H?" ":this.grid[s][n]}solid(t){return t==="#"||t==="B"||t==="?"||t==="P"||t==="U"}step(t,e={dir:0,jump:!1}){let n=this.events=[];if(this.state!=="play")return n;this.time+=t;let s=this.p;s.inv=Math.max(0,s.inv-t);let r=e.dir*nh;s.vx+=yn(r-s.vx,-30*t,30*t)*(e.dir===0?.6:1),e.dir!==0&&(s.face=e.dir),s.coy=s.ground?.1:Math.max(0,(s.coy||0)-t),e.jump&&(s.ground||s.coy>0)&&s.vy>=0&&(s.vy=-ih,s.ground=!1,s.coy=0,n.push({type:"jump"})),s.vy+=eh*t*(e.jump&&s.vy<0?.62:1),s.vy=Math.min(s.vy,22),this._moveX(s,s.vx*t),this._moveY(s,s.vy*t,n);for(let l of this.enemies){if(l.dead)continue;let c=l.x+l.vx*t,h=this.tile(c+(l.vx>0?.95:0),l.y+.5),u=this.tile(c+(l.vx>0?.95:0),l.y+1.5);this.solid(h)||!this.solid(u)?l.vx=-l.vx:l.x=c,Math.abs(l.x+.45-(s.x+.4))<.75&&Math.abs(l.y+.5-(s.y+s.h/2))<(s.h+1)/2-.05&&(s.vy>1&&s.y+s.h-.3<l.y+.7?(l.dead=!0,l.deadAt=this.time,s.vy=-9,this.score+=100,n.push({type:"stomp",x:l.x,y:l.y})):s.inv<=0&&(this.big?(this.big=!1,s.h=1,s.inv=1.5,n.push({type:"shrink"})):this._lose(n)))}for(let l of this.mush)l.taken||(l.x+=l.dir*1.8*t,this.solid(this.tile(l.x+(l.dir>0?.9:0),l.y+.5))&&(l.dir=-l.dir),this.solid(this.tile(l.x+.4,l.y+1.1))||(l.y+=6*t),Math.abs(l.x-s.x)<.8&&Math.abs(l.y-s.y)<1&&(l.taken=!0,this.big=!0,s.h=1.6,s.y-=.6,this.score+=500,n.push({type:"power"})));for(let l of this.cps)l.x>this.cp.x&&s.x>=l.x&&(this.cp=l,n.push({type:"checkpoint",x:l.x}));let a=Math.floor(s.x+s.w/2),o=Math.floor(s.y+s.h/2);for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)this.grid[o+c]&&this.grid[o+c][a+l]==="c"&&(this.grid[o+c][a+l]=" ",this.coins+=1,this.score+=10,n.push({type:"coin"}));return s.y>this.H+2&&this._lose(n),s.x+s.w>=this.flagX&&(this.state="won",this.stars=this.lives>=(this.easy?4:3)?3:this.lives>=2?2:1,n.push({type:"won",stars:this.stars})),n}_lose(t){if(this.state==="play"){if(this.lives-=1,this.big=!1,t.push({type:"lose"}),this.lives<=0){this.lives=0,this.state="lost",t.push({type:"lost"});return}this._spawn()}}_moveX(t,e){t.x+=e;for(let n=Math.floor(t.y+.05);n<=Math.floor(t.y+t.h-.05);n++)for(let s of[Math.floor(t.x),Math.floor(t.x+t.w)])this.solid(this.tile(s,n))&&(e>0?t.x=s-t.w-.001:e<0&&(t.x=s+1.001),t.vx=0);t.x=Math.max(0,t.x)}_moveY(t,e,n){t.y+=e,t.ground=!1;for(let s of[Math.floor(t.x+.05),Math.floor(t.x+t.w-.05)]){let r=Math.floor(e>0?t.y+t.h:t.y),a=this.tile(s,r);if(this.solid(a))if(e>0)t.y=r-t.h-.001,t.vy=0,t.ground=!0;else if(t.y=r+1.001,t.vy=1,a==="?"){this.grid[r][s]="U",this.coins+=1,this.score+=50;let o=!this.big&&this.mushNext(s);o&&this.mush.push({x:s,y:r-1,dir:1,taken:!1}),n.push({type:"block",tx:s,ty:r,mush:o})}else a==="B"&&this.big?(this.grid[r][s]=" ",n.push({type:"brick",tx:s,ty:r})):n.push({type:"bump",tx:s,ty:r})}}mushNext(t){return t%2===1}};function nl(i){let t=i&&typeof i=="object"?i:{},e={};for(let n=1;n<=In;n++){let s=Number(t.stars&&t.stars[n]);s>=1&&s<=3&&(e[n]=Math.floor(s))}return{unlocked:yn(Math.floor(Number(t.unlocked))||1,1,In),stars:e,coins:Math.max(0,Math.floor(Number(t.coins))||0),muted:!!t.muted}}function il(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function sl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var rl={jump:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAA8AAA2AACAgICAgIDAwMDAwMDBAQEBAQEBQUFBQUFBQYGBgYGBgYHBwcHBwcICAgICAgICQkJCQkJCQoKCgoKCgsLCwsLCwsMDAwMDAwMDQ0NDQ0NDg4ODg4ODg8PDw8PDw8P///////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBUAAAAAAAAANgMRlGVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAIjElkNJSAEakQLcMxgAABp0gFBJi5GKwwKECAgCgIEligMCgUIECBAKATFZOjRo0beid4gBDB8H3xAc8HwfBD/dqBMH3//DH///Lg+D4P8oCBku+wBjWMRLAceFMVirHYq6q7AalrY5N/X9RjjA+vEvNOQEuJ44YcixJGuw0+05JJmXS3GUwPEqtFVsdv1+2ssrNXK79+5968YDQfFxKKGlpYsqKEbnHCbwTsIqMyoflpxKLbPYL2uq2Vv/9qQEHIAAEt5Wuyl9Qstpyvtyl2lc3/+zjECgANMFtpnYwACYQdrbD2DhS+0zImzy6mYSDDgYDNMLT4u5euQ0zqzaywjV2WfnKa1jDOrHPpLskLVGAwuYJDn+FEni7qFO9gC89m/J4n+f4INlPlT+pk1Qd6V3pm5efbfXf+vf//zkZ9kIC7Lln2LJEJQIA+tCAzHJrMJuMuHlSmiBRD9YtJIIljuaXQ/lqon/qoCPzBOZ3NzZrEjAAtBgEmL2qfn3LmneQtilJTytKwtp3DE4SupvRTsoGQkYsV/bc8VWGxDrplBIeCADDbkm4iPmn/+zjEBgAMcKFp5jxlwX2ba/GECmR/ADh4c0OVDCUr5VajQCb6gxC/A5jw17occqvtCfAhZlGFFIFAQf6kaFSBV/yRCVWSRZ8YxIPzqXrOHyc4mwAB2wJ3vXUS7tUNlYSFywo5Jap6Vpn2VF7axJMSQCsWVss8NjBUgbk/V7BTr9q6ydF5efEYES+SYueULHAvf5oRIiChGHXWoqycqKy7Mzd8M5nSNN/K7gpi95dmmpL3NvEiMqsKg0YqVjOld6VEhvQaW4ONtfoXdCm1J2lpz1LE5vKW9UP/+zjEBgAMDMdpjD0HcZGb6nWHoPhFiXneV0pAMTJb/I3jwe4ldBAkBWCWCUAY29hCBe9ysCxl+pKGX4hBGzfpzNCx6V8r1UqKzd/FxPssKjFGWXGCwrkTFioF2nqLlPbpUzR9ySqmRUAvYFUANsKWSjDLLj9yELHyv6uwxSln+7cvrlrGW4eoeECzkwiKgtEZX3Tp0nHGqzDgZ+JFST7+Vv/JMmKXJS/1X6VSbn/iprVf16XWokdMTA2tw9Nd5S0WFnPaN8rcHURV2tDmKb+PI0M9HLIBEjf/+zjEBQALnL1Zp5y4IZMqaPTzisiErRXg+urbeaGgNZ/2mEf/86MEXi3qytHMamf/YzrxN70uR+Y1fCjUC7ZpEt6AMAY/qh/MHhR9SpzONZ86xR5UeZtK63FYXiUE1mA0QlfpJefG1hsUqlAAlSUDX3lmLyBfBEDjT7Vaph3gST5fAaUT71OSALaNn5kJ8jNf9dIUBQzjw3+REUnzjvMDDAYvQwojZAY5G1p1KxiNe3qp33Ma1tva29dwhFQzkRvpdS31KrKrFDHUCKtSUg0ucf/dBz9XcLX/+zjEBYBL5KtbjDz0cXqkavDzixYEyZ1KWOWerJTjrzuHzKhtFVx3Mv2KiaBr+YzBxHg/t7WNMkk2ddhOWevQLCWX66JdwsKya+ZSpo1dNhs2JQ06CptEg1QkX1nrowXVOrjr7kvuYMQZRpKq/716MWVtcoABpCGNkXokoIs+P5Txbs0RC0bwCsUmcblmFeK/eft7EF5qntdEoQWqcPDYCzP79pw9+cBUxUqaZu6RsZ1T0UpG7mcnVrfVl8oi+sKmdT0xKxawagFAdEcZG6K2MDX+Zo8QJSr/+zjECAAMeNtH56kYYYSj5mmWjtACEJbeti6qOuvnBMhcEYbxdyc9hDxTfvBZRIEZvFrLoesQBkkvllbQUN4khSIvUhJ/QhfyAEg7Ni/upf4xq/8yir7CoAoBtZWwlBICTqjTyJd9X7gCfARJMgAimPbONK2IXfVHKZjLltYiLdirv6VMpMeeqX98sBUmET+F+tIlglW6yyqGkGyQPW4wDKuodw7ym3k71zE/TnAwl5/l/M+D8pdj9tBBXU/mN73Yunn0xjqYOjsRAgHSnFvsq+w8Z4CL/p3/+zjEBwKMIKcsrOFn0YYU5IWXooj1w7KE0kL+/j3cBEMpZjrG5KhR5uMxS3jl2mXM2mPu0gQgZXr2sJY6L/4JRz+XEpt19KmS+3q0m4NhQOhAR1kgXw6HJR5VqCAvYMUxrzbP9bv9y4EQMxm3W5TqoHfQGGM4eCe19cRiXs+3rzwiqiItykt4Rp3Ri0eEt0q9zQR93iv3y7DH3jNrUMgHP45kaOiNaDoT9bwzA+fu41QfWAjRpBiBErMKQJSotTR3AIDGQ6r/Q9aVMKKAATws6gzGpESxaRL/+zjEBwMK/J8mbLzUgViUpEmVmtAySpe+tdKgMtr9/d5sQ09jnj+ESXiTW6vCvuMSktjQq47RRlFlDtY37hn1gHG7/+qsMtGbp415ezSsSCcJTowLCLaLqnBwbIrs0DCAisOOcbzrSsQYrgsvz/89Mlq+ee8bUfGGY3f7394BU6IXv1nuq+qzOC16kgKmzn2jpCkM7vThNKZZ/HMd/IhO0PJggKkSwdH8wvpr9TytdGx/7f/oBJFFGO7vc5aGHjRNJ3H852n5LuniwSegYJoefnKQEnq+ntj/+zjEEYMKKKEkTD1pQVuQ48WWDogHz5658xHSXup8Q4lXXfNdfNR7o2aZ4ShSpgofNXgZhsxTpYSN3Mq1Udz00//64CInKmoGrburxGzZHKbXd6jqRNfLv1rsSUDW5nup3C0SAg2/2l3nYSipZ8O5rrFcaI0N8qrqGoLGzzBo4AoHIAANMYb6Cy1VpA0L0RhUvFsvFFu//u10qrqlwNybKtriVTCbzE1dAyP64DoWFRFqeICz7hYvqCrTFhQ80vKHQZGC4AOFRMBA4kKHgsQGig8yaYpJ4ar/+zjEHoMJhGMmR6npQTcLI4GGPSilSWpASQowzspsZ9P+7/SN0ltO9VqX07+jpLC7rPvxnRZpe7E+nCnIP6brRlNOoVpN7ordCVbAQPlYPniQhhcsRcoi2wYBguhbFZwtkRUGoDoMhGwWp4zt36akf9EACGU5GAEAsd5h1+9HbQ+nLuq4bVF2Mj/mRqaGbqKntSitcxC6az0kMxxaaaFAuWIs/6WoT+jT0//0/6xADRNiedya1qXFQFFB6IW6nAt0ptRUGsWswqC44ccqzGkv9qsHeqPOy1T/+zjEMwIHeKEtR4hpoUOd4wWkFTgJmSJoIsSNGqQtfoszpOrX2tNo6T7uziq30NRHgqjHQkXqto/9/KIACEUnEASAUT8+2xiDyz1685wYnKT6Z8s7Snrwz7Fe4bDygAwk1k6AhymP7lf9y9ujtRq3e7bWCAEEZxbyIAXISqZJWlEKByqAYe0OxGH6CiKONENGfzNYyVTELN06SFYC5iXbLgvwQzUkz6gOC59Fjj6rHBoyKk3xRkwtmkosi5zV0DBBv6qida/EgfDLpZHLOeeG+WNd1f3ypIr/+zjETgIG3I0rSARl4UYUIwmmDCAJEoTYbe35tQYgXH1CoiEJYqorDUF+cCekiYyTrMNIMgtBZMtOVqLihG6vorMEijm002+kijNUV/9zf9Gn//ip/WAAiUAgEVAqEwAAAAAA1aVhUaAKOrtt+EYJlwI6NJKFhWXtZS9NYGOIhMs1dFxO4WmCUykZGZ86kXBWgNlgBTBssclJZdqRakCMgNuF0BwwBliPzIixPTEipgYn01O6Q5hFRCQT8Pkd5FRlzIvF4xLpFTIvX/3OFxa1MybmSP9H/+b/+zjEawAKjL0iVYSAAm8tZjcxMAHGik06CLutNBf9f///QQTTmBonHMH//8hHAqoFgAAZF9cKqrxvq+zagLBUNKPQaPFTolO8O/gryx6mCv+7///rOrOxFDvupUe/EtVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEVAPF5CcHXDCAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",coin:"data:audio/mpeg;base64,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",stomp:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAA8AAA2AACAgICAgIDAwMDAwMDBAQEBAQEBQUFBQUFBQYGBgYGBgYHBwcHBwcICAgICAgICQkJCQkJCQoKCgoKCgsLCwsLCwsMDAwMDAwMDQ0NDQ0NDg4ODg4ODg8PDw8PDw8P///////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBUAAAAAAAAANgPy/7xQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJTAFnlBEAAbIgML8egABKZpNEqkAgPh95AoCAIAhggCEoc5cH3y4P8EAx+UB8Hz4f+cg+D4OHFh/B94gMicHwfB8EAxl3y4PghiAEwffy4Ph9Z8Tg+H8Hw+7zc3NKqJDzNVd5cVE2nABM+QFQ7KN72A42g9hfRqwTrESC7EwclyNGBwcjFMAs5QlDkOWGA0l5hSKiUuFiynX2tk1tZuY+95rp+6ua+Hnb+Ka6j+yku1W+racVHqtKvla+TvKgwEmqJdan/yJaRFZCAScrRAABdvT/+zjEBgAMRXNt/PKAAXWdLj2GDPjDYqarSWHee949mOZwCD4uIic4iBFFHRHQQ5iDii6GnNJyKqipxNW7mRDKhEIYlVu9leWkiGq2nYdHWZtrMr//9OuyMU5iEZP/r1edyCjTuh0jXqD6hk5lO7CImpG2gQaxNurVfcKBrW6SFCuz2fWv82o9YtfbXkomlowHw8cp+UmSORqdhTNLeeU/M0Lbv/+yMWXDdX4TQiIofWnfNYDHHqd0fc9akTF38q4NMPIXcARhiOp5mXZ3VDlsbRIB0OktCYP/+zjEB4AMpSWP56RvcWgY7PjDDig0puJa0k0N+e+bqNe5xZjmJqRmGCQXRpRkQeCSU+w3B1MWm9hOkmEjLnwKzx+3/xGlj0oR5mLuXc84UnCYjPV5+7hFYgOFXbMvmFMB1d26jQfThEQmyJzawzKZAFKCAT0WiASWpebvp0ZGK4pqS02WK73Jx2uy1HfRQshMohp9fX7e/bvOecrtkBPfZn1rpv32kMpV+GDLo4oxbHJPHnhrrOqoe9ltqyId/9lUsONHTVVcmJZFQiqQCBJWMlgytep6xp//+zjECQAM4XtnzBhnyYOqbrzzDHmy8L2gGImEs9o/E9mUz8o6aDTCIWVYgfBR0lNS6dsmcI0rJaWaGhPp9MIXFk7QYYRRZ6enT///8p5wh7O6dzgj8zL7YhOlObzI+Zd0+gcLcwBJPJGYT6qKiXdE6yUCC8aIYz0GxKLJtmLEERxQ+DJhLpEuxMbQSxaLv9zPotRjQDOnFsKEczrEdi/9p0/NZUffsdJCdyri9v/6fPhG5vA8OvT5Ye+f/c+93enwgjjEfgAntoJH9lynrJRlRyogAAOWRDb/+zjEBoAL4V1x9MKAAZUacL8wgALdr1lzq11laln6mAyCJSisSZXLVnEi0WxSoUpUMYaKvUpS0Mv+i0M//b2UrUfQxnKHQ6gdFSm9/38q9H9H6lZehm/mZDCQecOh0plDrjdQNQ0QdniIdmdnZmVFt0kSTQaAAIx2kS+jTrdeOVqWZuWd0+t4g4WIJgTCOcHDZwmfOVhZbZuaJqJ6TGpaWlTdWMfao21h3h9+e9b/4+Xr2+exgk6ngFyI4QM1pPL/tBUAsFQ3iyRKCYVqkkkkjkkkjkbaIBL/+zjEBYALeOlxuNGAEZcs8DcKUAMIAACmcb2Hop2Wz66qsMbozCBbAwhthWJDFBj6VrjbAUQmU2yjBtS8+i/pV4UrZUV/+vZ/9NL/9UIFGZ1r1SgDEGVcFSLdLPW/LmzmEluInqNsNsNttttttdnLJZAAAUoq4Bm6VX0Yp45kUkV1ZQ+HBMqoUyqwmJTjA6ykVAq65mexhxR06IJGLojTejLYjnrWYeYzsnqUphB81BxBhBR6dKCRWTane/aNA4weLMjHY/rqHVJ8qbqXbYXbbbba2yNpIkj/+zjEBgAMPLF7uPMAEYsXrv8wgAIABN8puXJwzSSBu/+rx4vbMJRmbaBZzow9vWLWgURFv41mQjG8lwKyz8+v/rs0Jvie+fOtiW4IjH4GD4XSPOkVZeI5fVYuJZYNCGGf5RKi85khdwoONsrQ7s7szu8O727WtxJAAAJmSpqOQsikWdKtY4ZWr/ZTl2OVYgHhY6SoMoXcoTyHSFBtw8mDSKNc2IhpqrgxZB5FGgtuBdYSGx1WspvdfisyOMNvg3QPU1RzUTCX3t9alTBYlft//////99BWI3/+zjEBQALaQWBuPQAEY0nLncecAK0CAAAQL+k7Pm2M/Xxn41lLh9Bpof5Yqi1Y4FYgKq1BA48oUcFaP/NN//D48wUO3r7jv//+5R4zAaV6r6fV/f/8v9Jo5cGFq4G/6RPHnw/9mettttttFtsjcKaIRRAAKeMTaYed9Vrd5bGN0tLRpEacw+5cmdHkYcKGEBIG43o5qsz3eREgvHhb9jpm181ZcLjY8xr6zeZpz7TUcwwdT//M+fsqTGdDUOOUqjl+v+c/NNcJiSVe73eqrmv22kAHz4tqdT/+zjEBwAMuY1p/MGAAXKu6rzAjEGIISDuVX1nte1kIYeuq5vAILY+RDN6hRhIekBATp/+tJs+xXWl2FW1nLSU0ZqVwqa7MzHFLyZmy911Ln0/neyw+fez72UBzCqWx5//fLz/PpcAT21UvDGhGR4hpmI8ZIAAGztVrYYgWjHuMKZhRxapIDBww9rQILaPdvN+3/iMaoGb9v+KTNP2jdnzk8yjdL6pcu3fa1bl+XV89fM+yWz5GTS8YVVtNss2Mz4fPvatQCDTzHzKVmZ3Z4Z9rG2qArybpED/+zjEBwALzXt34Yk82U0YK7xhihiI8KsIF0yyuTjB4IJwYsIKEB2EgbE6IHFAAV37EeUOfz985CdkI//5Lo16uRfVj6CDuT/2oQ7kYinVwiv3RlpJ/ox0aslP9xQIzjL3bXh8ge03c3NbM6xsgABSSYsUeo9kRxvOLCSrNBcQ6S02qhjqkX8l9pqQZ65nbrR0c+2rMGflaZ6thjqGPHepglUBXfQRaw8VFD9zmmjdigEVLCUOKNaPVS3XLbZI2iABDJIbiKQxfT2MVoxKiiqaEKBKTca5BhT/+zjED4AKfL9RpIyvkVcTajRjDTqgSapT4sDHVZypFaYNHEm8BMRggzn1L9uYJDzUO54w0iGwmOPbp7VrW49d4UrWt66lwnzynlyWW222NEgDOs6NgbdekSSikxdWbL1pIudKrULPtpY0oFWguzU+3yY7tnApn8PuQaygmmgGNDixEAwyfUzmAJHrDY1D91gtAhp6BZX0kYqHOXFG/FiaAKcjl3ziIAAq6tBO6Gez4N+d1M6CxRchhZbkFjOGnItyjTJeels7TiBWSUhEOhSeuVt1R2V2/tr/+zjEHAAKsO09tCKAAjMy5h8SsAAisjmcpRYlu9brMVGqMKGwKSPWMxEJVDhEsFnywSAEDaibAIAAAAPwc4cMNUx5/zqcr6nq4/iOY7bfqRMpSk2jBcps/ab1iCBPBIYTgRzWLhY4rJwnmi9EtFABUdgJZKHaXmxP4eyb/bHN2gxjGKqmRsPReSUjcdltb+1vNy7v5+GFjN52r6SaShWXFq6VdviNLn7f/TOXn96zz5xi35OOkk0JxsfYNp1KTWoAbnIAGVBVlLSdjF1svW/ahW6y2Z9E3cj/+zjEDAIJ+O0o3NKAAQscpJjwjPBlZRX+2xWKERw9JRApRUlUYrrMYpiGWUCl7GTSayqUqkmMIuMftg0Hc6LXIGnXuXW2tpEi989SVI/UsAg2i8PXg2iuwRHHXP8ScOG8ZjyJg4mIJnUhiS7ptkenw12K+xmaLm4x8y1LIz3JqUokyZK3/F/UK0fEVH+13roaQEA0DVopK+HrXgYvTOfeE6DlD+Z5bdNyoRMr+cEC2F2sjCDdAjnHeFpXQOmJQnMk7DoQKGCVXV23ZT+HFjgXUqhtCH9UhWD/+zjEJAAI7L8gVPGAAiAx5ecesAEIAIANa4IAAAVjgLBBhPofkT+c6uxu4KtP6AbpHupqZ9t9PNyYqXmpUO4d3NkxZwgCW9MrGvaSUjY2f9ezBMpcmKm4fADPlxsbNr/9jOyw6CGOshSpErHsv0nNh3yj///zxUPTPn6JFG5QWRDva3cbImtO/////98KMOG7979xoc/c6W8tR+TVOBgES15nHmcauaRaqXGb+MfVU+qvGYozN1VOqq8ZiZmbVVPqqsAgImAgJtQokCgqdER4GgaiVYa9T0f/+zjEHYPKCLTuHGGAAAAANIAAAAT1A04jEp0SgqoGhgNPKuBXEsFZY8WVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",block:"data:audio/mpeg;base64,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",power:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7oANMP0rVJMACsky5mse8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEwgPKLVckPBKACAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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Aiv9pQig884sOERkRkS2i7+Icdq4fPLIY9sLZSB0tP1D/bzFTcRT6lkvq6WiIVCp2MWbnlrCASLlVqebMFXBxakOPn2RFGiQjP9BtEWXRQv/+zjE7IIM/WUiDKxtyWmR5RmjPaCzxZCzBmYY8Rft5MwmImIShQ40r9XNKNM05vlTR2ttsWbzUNy8kbxO0A5lSBOaFwYgqFShORBhcFq/gYC1EQAjkGQjtUE2SOJgML8cztgIkiiVIqofzWhHWkiZVTBX1RkQ+VciQEbEfUcEtsRyYeCVi6ogDLOANOB0cyiDtsCllhn4d93+fzIzHCOzPKJIlGCiPRo7pXMhFEwHzLY0gMK4UEaHamhoJIQwdKCH4blW0pEEqtsZkDfqFPK3zy35MpdiQrn/+zjE7INMyJsirY3uyXeXpISaLXBPts0+MzUGyldFIzM5bHIfmhi9EXQhWefIIL6szEjBKbCcVnNFYnwYMg/gTnJwlKdMqZ5pZWcwulRUIA6ayxRSg9KYN8oo6EZZ1+9yzS1RGhC3hmZFlRELaA6etyMqtYMvJLzv20LeKdL7sCfRNzYGRrpqADkBFBuXhsvJY0HhXIg5n5IPSmZjwRAQZRoyRxH4T6BkTnA11ibZiyps+okmBKPqzmtn9xqEpsrLO2aQeyiAtROykLTjnfc+w3z2yAPiAgT/+zjE64IKfI8tIb1qAbkw44DzDanDjUiwDHXPZSgahqGuvx3W7dQ7OppUKASBnEghQUSGFBhQUYMKCjASAQFAQFc0KhJ/tOhUJAUrxpYqWK1DwkFAqMHu94VCQVGDB51+Rb//3Wnv/9z6TEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE64NMjXceJLBqyXupo4DEjGmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6wIMvNEipiTOgPqFJIgxDASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="};var rh="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Te=null,Mr=!1;function al(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function ol(){al(),Mr=!0;try{if(Te||(Te=document.createElement("audio"),Te.src=rh,Te.loop=!0,Te.preload="auto",Te.setAttribute("playsinline",""),Te.setAttribute("webkit-playsinline",""),Te.setAttribute("x-webkit-airplay","deny"),Te.volume=.01,Te.addEventListener("pause",()=>{Mr&&!document.hidden&&setTimeout(()=>Mr&&Te.paused&&Te.play().catch(()=>{}),300)})),Te.paused){let i=Te.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ll(i,t){al();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Ce=i=>440*Math.pow(2,(i-69)/12),hs=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(ol(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;ll(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination);let s=Math.floor(e.sampleRate*1.7),r=e.createBuffer(2,s,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let u=0;u<s;u++)h[u]=(Math.random()*2-1)*Math.pow(1-u/s,2.6)}let a=e.createConvolver();a.buffer=r,this.rev=e.createGain(),this.rev.gain.value=.22,this.rev.connect(a).connect(this.master),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.music.connect(this.rev),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.sfx.connect(this.rev);let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+o),c.gain.exponentialRampToValueAtTime(1e-4,n+s);let h=c;if(t==="sawtooth"||t==="square"){let d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=Math.min(9e3,e*6+800),d.Q.value=.7,c.connect(d),h=d}h.connect(a);let u=t==="sine"?[0]:[-6,6];for(let d of u){let g=l.createOscillator();g.type=t,g.frequency.value=e,g.detune.value=d,g.connect(c),g.start(n),g.stop(n+s+.05)}}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",Ce(l),a,c*n*1.4,e.vol||.12,this.music,.01);e.groove!==!1&&!e.noGroove&&this._groove(e,r,a,n),this.nextBeat+=.5}}_groove(t,e,n,s){let r=Math.min(.2,(t.vol||.1)*1.3),a=c=>Math.abs(e-c)<1e-6,o=Math.abs(e-Math.round(e))<1e-6,l=e%4;o&&(l===0||l===2&&t.tempo>=100)&&(this.slide("sine",150,42,n,.17,r*1.9,this.music),this.noise(n,.02,r*.5,"lowpass",900,1,this.music)),o&&(l===1||l===3)&&t.tempo>=100&&this.noise(n,.12,r*.9,"bandpass",1800,.8,this.music),o||this.noise(n,.04,r*.45,"highpass",7e3,1,this.music),(a(0)||o&&l===0&&e%8===0)&&this.tone("sine",55,n,s*1.6,r*1.1,this.music,.02)}};var cl={hills:{tempo:132,beats:16,wave:"square",vol:.045,notes:[[0,76,.5],[.5,76,.5],[1.5,76,.5],[2.5,72,.5],[3,76,1],[4,79,1.5],[6,67,1.5],[8,72,1],[9,67,1],[10,64,1],[11,69,.5],[11.5,71,.5],[12,70,.5],[12.5,69,1],[13.5,67,.5],[14,76,.5],[14.5,79,.5],[15,81,1],[0,48,.5],[2,48,.5],[4,43,.5],[6,43,.5],[8,48,.5],[10,52,.5],[12,55,.5],[14,43,.5]]},cave:{tempo:96,beats:16,wave:"triangle",vol:.1,notes:[[0,57,1],[1,60,1],[2,64,2],[4,62,1],[5,60,1],[6,57,2],[8,55,1],[9,59,1],[10,62,2],[12,64,1],[13,62,1],[14,59,2],[0,33,2],[4,38,2],[8,31,2],[12,40,2]]},desert:{tempo:112,beats:16,wave:"triangle",vol:.1,notes:[[0,62,1],[1,63,.5],[1.5,66,.5],[2,67,1],[3,66,.5],[3.5,63,.5],[4,62,2],[6,59,1],[7,62,1],[8,63,1],[9,66,.5],[9.5,67,.5],[10,70,1],[11,67,1],[12,66,1],[13,63,1],[14,62,2],[0,38,1],[2,38,1],[4,38,1],[6,38,1],[8,39,1],[10,39,1],[12,43,1],[14,38,1]]},snow:{tempo:100,beats:16,wave:"sine",vol:.12,notes:[[0,79,1],[1,83,1],[2,86,1.5],[4,84,1],[5,83,1],[6,79,2],[8,81,1],[9,84,1],[10,88,1.5],[12,86,1],[13,83,1],[14,81,2],[0,55,2],[4,52,2],[8,57,2],[12,50,2]]}},ri=class extends hs{play(t){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"jump":this.slide("square",300,760,n,.16,.07);break;case"coin":this.tone("square",Ce(83),n,.07,.06),this.tone("square",Ce(88),n+.07,.2,.06);break;case"block":this.tone("square",Ce(55),n,.06,.08),this.tone("square",Ce(83),n+.05,.07,.06),this.tone("square",Ce(88),n+.12,.2,.06);break;case"bump":this.tone("triangle",Ce(43),n,.1,.12),this.noise(n,.06,.05,"lowpass",600);break;case"brick":this.noise(n,.22,.14,"bandpass",1400,.8,this.sfx,400),this.tone("triangle",Ce(48),n,.12,.1);break;case"stomp":this.slide("square",520,120,n,.14,.09),this.noise(n,.08,.06,"highpass",2e3);break;case"power":[0,4,7,12,16,19].forEach((s,r)=>this.tone("square",Ce(64+s),n+r*.06,.14,.06));break;case"appear":this.slide("triangle",300,900,n,.3,.09);break;case"shrink":this.slide("square",700,160,n,.4,.08);break;case"lose":[72,70,66,62,55].forEach((s,r)=>this.tone("triangle",Ce(s),n+r*.12,.2,.13));break;case"check":[72,79,84].forEach((s,r)=>this.tone("triangle",Ce(s),n+r*.07,.25,.1));break;case"win":[72,76,79,84,79,84,88,91].forEach((s,r)=>this.tone("square",Ce(s),n+r*.1,r===7?.7:.16,.06)),[48,52,55,60].forEach((s,r)=>this.tone("triangle",Ce(s),n+r*.2,.5,.1));break;case"tap":this.tone("sine",640,n,.05,.07);break;case"pause":this.tone("triangle",Ce(67),n,.08,.08),this.tone("triangle",Ce(60),n+.08,.1,.08);break;default:break}}setMode(t){if(!t){this.setBed(null),this.setTune(null);return}this.setTune(cl[t]||cl.hills)}};il(ri,rl);sl(ri);var Co="170";var ah=0,hl=1,oh=2;var mc=1,lh=2,fn=3,Pn=0,Pe=1,pn=2,nn=0,yi=1,bi=2,ul=3,fl=4,ch=5,Yn=100,hh=101,uh=102,fh=103,dh=104,ph=200,gh=201,mh=202,Ah=203,na=204,ia=205,xh=206,vh=207,Ch=208,_h=209,yh=210,Ih=211,Mh=212,Sh=213,bh=214,sa=0,ra=1,aa=2,Ei=3,oa=4,la=5,ca=6,ha=7,_o=0,Eh=1,wh=2,Vn=0,yo=1,Io=2,Mo=3,So=4,Th=5,bo=6,Eo=7;var Ac=300,wi=301,Ti=302,ua=303,fa=304,pr=306,da=1e3,jn=1001,pa=1002,Be=1003,Rh=1004;var us=1005;var tn=1006,Sr=1007;var Kn=1008;var An=1009,xc=1010,vc=1011,$i=1012,wo=1013,Jn=1014,en=1015,Ke=1016,To=1017,Ro=1018,Ri=1020,Cc=35902,_c=1021,yc=1022,Qe=1023,Ic=1024,Mc=1025,Ii=1026,Vi=1027,Vo=1028,Po=1029,Sc=1030,Uo=1031;var Lo=1033,Ns=33776,Fs=33777,Bs=33778,Os=33779,ga=35840,ma=35841,Aa=35842,xa=35843,va=36196,Ca=37492,_a=37496,ya=37808,Ia=37809,Ma=37810,Sa=37811,ba=37812,Ea=37813,wa=37814,Ta=37815,Ra=37816,Va=37817,Pa=37818,Ua=37819,La=37820,Da=37821,zs=36492,Na=36494,Fa=36495,bc=36283,Ba=36284,Oa=36285,za=36286;var ks=2300,ka=2301,br=2302,dl=2400,pl=2401,gl=2402;var Vh=3200,Ph=3201;var Ec=0,Uh=1,Rn="",me="srgb",Fi="srgb-linear",gr="linear",Kt="srgb";var ai=7680;var ml=519,Lh=512,Dh=513,Nh=514,wc=515,Fh=516,Bh=517,Oh=518,zh=519,Al=35044;var xl="300 es",gn=2e3,qs=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Er=Math.PI/180,qa=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function wr(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],g=n[5],m=n[8],A=s[0],p=s[3],f=s[6],S=s[1],M=s[4],_=s[7],L=s[2],b=s[5],E=s[8];return r[0]=a*A+o*S+l*L,r[3]=a*p+o*M+l*b,r[6]=a*f+o*_+l*E,r[1]=c*A+h*S+u*L,r[4]=c*p+h*M+u*b,r[7]=c*f+h*_+u*E,r[2]=d*A+g*S+m*L,r[5]=d*p+g*M+m*b,r[8]=d*f+g*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,g=c*r-a*l,m=e*u+n*d+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tr=new Nt;function Tc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){let i=Hs("canvas");return i.style.display="block",i}var vl={};function ji(i){i in vl||(vl[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var zt={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=mn(i.r),i.g=mn(i.g),i.b=mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cl=[.64,.33,.3,.6,.15,.06],_l=[.2126,.7152,.0722],yl=[.3127,.329],Il=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Fi]:{primaries:Cl,whitePoint:yl,transfer:gr,toXYZ:Il,fromXYZ:Ml,luminanceCoefficients:_l,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:Cl,whitePoint:yl,transfer:Kt,toXYZ:Il,fromXYZ:Ml,luminanceCoefficients:_l,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var oi,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Hs("canvas")),oi.width=t.width,oi.height=t.height;let n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xh=0,Gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rr(s[a].image)):r.push(Rr(s[a]))}else r=Rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yh=0,Ue=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=tn,a=Kn,o=Qe,l=An,c=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ss(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ac;Ue.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],g=l[5],m=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(g+1)/2,L=(f+1)/2,b=(h+d)/4,E=(u+A)/4,V=(m+p)/4;return M>_&&M>L?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=E/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=V/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=V/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-m)*(p-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(u-A)/S,this.z=(d-h)/S,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Gs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ee=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ws=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=g,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==g||h!==m){let p=1-o,f=l*d+c*g+h*m+u*A,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let L=Math.sqrt(M),b=Math.atan2(L,f*S);p=Math.sin(p*b)/L,o=Math.sin(o*b)/L}let _=o*S;if(l=l*p+d*_,c=c*p+g*_,h=h*p+m*_,u=u*p+A*_,p===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],g=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*g-c*d,t[e+1]=l*m+h*d+c*u-o*g,t[e+2]=c*m+h*g+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"YXZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"ZXY":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"ZYX":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"YZX":this._x=d*h*u+c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u-d*g*m;break;case"XZY":this._x=d*h*u-c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vr.copy(this).projectOnVector(t),this.sub(Vr)}reflect(t){return this.sub(Vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vr=new F,Sl=new sn,xn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),ds.subVectors(this.max,Gi),li.subVectors(t.a,Gi),ci.subVectors(t.b,Gi),hi.subVectors(t.c,Gi),Mn.subVectors(ci,li),Sn.subVectors(hi,ci),zn.subVectors(li,hi);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-zn.z,zn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,zn.z,0,-zn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-zn.y,zn.x,0];return!Pr(e,li,ci,hi,ds)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,li,ci,hi,ds))?!1:(ps.crossVectors(Mn,Sn),e=[ps.x,ps.y,ps.z],Pr(e,li,ci,hi,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},on=[new F,new F,new F,new F,new F,new F,new F,new F],Xe=new F,fs=new xn,li=new F,ci=new F,hi=new F,Mn=new F,Sn=new F,zn=new F,Gi=new F,ds=new F,ps=new F,kn=new F;function Pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);let o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zh=new xn,Wi=new F,Ur=new F,Ln=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);let e=Wi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Ur)),this.expandByPoint(Wi.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new F,Lr=new F,gs=new F,bn=new F,Dr=new F,ms=new F,Nr=new F,Xs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(Lr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=bn.dot(this.direction),l=-bn.dot(gs),c=bn.lengthSq(),h=Math.abs(1-a*a),u,d,g,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,g=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lr).addScaledVector(gs,d),g}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),ms.subVectors(n,t),Nr.crossVectors(Dr,ms);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);let l=o*this.direction.dot(ms.crossVectors(bn,ms));if(l<0)return null;let c=o*this.direction.dot(Dr.cross(bn));if(c<0||l+c>a)return null;let h=-o*bn.dot(Nr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=g,f[7]=m,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+g*o,e[1]=g+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-g,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=g*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=g*u-m,e[2]=m*u-g,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,jh)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),En.crossVectors(n,Ne),En.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),En.crossVectors(n,Ne)),En.normalize(),As.crossVectors(Ne,En),s[0]=En.x,s[4]=As.x,s[8]=Ne.x,s[1]=En.y,s[5]=As.y,s[9]=Ne.y,s[2]=En.z,s[6]=As.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],g=n[13],m=n[2],A=n[6],p=n[10],f=n[14],S=n[3],M=n[7],_=n[11],L=n[15],b=s[0],E=s[4],V=s[8],y=s[12],C=s[1],w=s[5],G=s[9],O=s[13],R=s[2],H=s[6],D=s[10],Y=s[14],q=s[3],$=s[7],at=s[11],pt=s[15];return r[0]=a*b+o*C+l*R+c*q,r[4]=a*E+o*w+l*H+c*$,r[8]=a*V+o*G+l*D+c*at,r[12]=a*y+o*O+l*Y+c*pt,r[1]=h*b+u*C+d*R+g*q,r[5]=h*E+u*w+d*H+g*$,r[9]=h*V+u*G+d*D+g*at,r[13]=h*y+u*O+d*Y+g*pt,r[2]=m*b+A*C+p*R+f*q,r[6]=m*E+A*w+p*H+f*$,r[10]=m*V+A*G+p*D+f*at,r[14]=m*y+A*O+p*Y+f*pt,r[3]=S*b+M*C+_*R+L*q,r[7]=S*E+M*w+_*H+L*$,r[11]=S*V+M*G+_*D+L*at,r[15]=S*y+M*O+_*Y+L*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],m=t[3],A=t[7],p=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*g-n*l*g)+A*(+e*l*g-e*c*d+r*a*d-s*a*g+s*c*h-r*l*h)+p*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],m=t[12],A=t[13],p=t[14],f=t[15],S=u*p*c-A*d*c+A*l*g-o*p*g-u*l*f+o*d*f,M=m*d*c-h*p*c-m*l*g+a*p*g+h*l*f-a*d*f,_=h*A*c-m*u*c+m*o*g-a*A*g-h*o*f+a*u*f,L=m*u*l-h*A*l-m*o*d+a*A*d+h*o*p-a*u*p,b=e*S+n*M+s*_+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=S*E,t[1]=(A*d*r-u*p*r-A*s*g+n*p*g+u*s*f-n*d*f)*E,t[2]=(o*p*r-A*l*r+A*s*c-n*p*c-o*s*f+n*l*f)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*g-n*l*g)*E,t[4]=M*E,t[5]=(h*p*r-m*d*r+m*s*g-e*p*g-h*s*f+e*d*f)*E,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*f-e*l*f)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*g+e*l*g)*E,t[8]=_*E,t[9]=(m*u*r-h*A*r-m*n*g+e*A*g+h*n*f-e*u*f)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*g-e*o*g)*E,t[12]=L*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*p+e*u*p)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,g=r*h,m=r*u,A=a*h,p=a*u,f=o*u,S=l*c,M=l*h,_=l*u,L=n.x,b=n.y,E=n.z;return s[0]=(1-(A+f))*L,s[1]=(g+_)*L,s[2]=(m-M)*L,s[3]=0,s[4]=(g-_)*b,s[5]=(1-(d+f))*b,s[6]=(p+S)*b,s[7]=0,s[8]=(m+M)*E,s[9]=(p-S)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ui.set(s[0],s[1],s[2]).length(),a=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,h=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,m;if(o===gn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===qs)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=gn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,g=(n+s)*h,m,A;if(o===gn)m=(a+r)*u,A=-2*u;else if(o===qs)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ui=new F,Ye=new $t,Qh=new F(0,0,0),jh=new F(1,1,1),En=new F,As=new F,Ne=new F,bl=new $t,El=new sn,He=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};He.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kh=0,wl=new F,fi=new sn,cn=new $t,xs=new F,Xi=new F,Jh=new F,$h=new sn,Tl=new F(1,0,0),Rl=new F(0,1,0),Vl=new F(0,0,1),Pl={type:"added"},tu={type:"removed"},di={type:"childadded",child:null},Fr={type:"childremoved",child:null},Ie=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new He,n=new sn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Nt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Xi,xs,this.up):cn.lookAt(xs,Xi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(cn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,$h,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),g=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new F(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new F,hn=new F,Br=new F,un=new F,pi=new F,gi=new F,Ul=new F,Or=new F,zr=new F,kr=new F,qr=new le,Hr=new le,Gr=new le,Zn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),hn.subVectors(n,e),Br.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(hn),l=Ze.dot(Br),c=hn.dot(hn),h=hn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,g=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-g-m,m,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return qr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),qr.fromBufferAttribute(t,e),Hr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),hn.subVectors(t,e),Ze.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;pi.subVectors(s,n),gi.subVectors(r,n),Or.subVectors(t,n);let l=pi.dot(Or),c=gi.dot(Or);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,s);let h=pi.dot(zr),u=gi.dot(zr);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(pi,a);kr.subVectors(t,r);let g=pi.dot(kr),m=gi.dot(kr);if(m>=0&&g<=m)return e.copy(r);let A=g*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(gi,o);let p=h*m-g*u;if(p<=0&&u-h>=0&&g-m>=0)return Ul.subVectors(r,s),o=(u-h)/(u-h+(g-m)),e.copy(s).addScaledVector(Ul,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(pi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=kh(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wr(a,r,t+1/3),this.g=Wr(a,r,t),this.b=Wr(a,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=Rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return zt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ve(ye.r*255,0,255))*65536+Math.round(Ve(ye.g*255,0,255))*256+Math.round(Ve(ye.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(ye.copy(this),e);let n=ye.r,s=ye.g,r=ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=me){zt.fromWorkingColorSpace(ye.copy(this),t);let e=ye.r,n=ye.g,s=ye.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(vs);let n=wr(wn.h,vs.h,e),s=wr(wn.s,vs.s,e),r=wr(wn.l,vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ye=new Tt;Tt.NAMES=Rc;var eu=0,Dn=class extends Un{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ss(),this.name="",this.blending=yi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pi=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var he=new F,Cs=new wt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}};var Zs=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qs=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},nu=0,qe=new $t,Xr=new Ie,mi=new F,Fe=new xn,Yi=new xn,ge=new F,Le=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Qs:Zs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Fe.min,Yi.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,Yi.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(Yi.min),Fe.expandByPoint(Yi.max))}Fe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),ge.add(mi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let V=0;V<n.count;V++)o[V]=new F,l[V]=new F;let c=new F,h=new F,u=new F,d=new wt,g=new wt,m=new wt,A=new F,p=new F;function f(V,y,C){c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,V),g.fromBufferAttribute(r,y),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),g.sub(d),m.sub(d);let w=1/(g.x*m.y-m.x*g.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-g.y).multiplyScalar(w),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(w),o[V].add(A),o[y].add(A),o[C].add(A),l[V].add(p),l[y].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let V=0,y=S.length;V<y;++V){let C=S[V],w=C.start,G=C.count;for(let O=w,R=w+G;O<R;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new F,_=new F,L=new F,b=new F;function E(V){L.fromBufferAttribute(s,V),b.copy(L);let y=o[V];M.copy(y),M.sub(L.multiplyScalar(L.dot(y))).normalize(),_.crossVectors(b,y);let w=_.dot(l[V])<0?-1:1;a.setXYZW(V,M.x,M.y,M.z,w)}for(let V=0,y=S.length;V<y;++V){let C=S[V],w=C.start,G=C.count;for(let O=w,R=w+G;O<R;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,g=t.count;d<g;d+=3){let m=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),g=0,m=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[g++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new $t,qn=new Xs,_s=new Ln,Dl=new F,ys=new F,Is=new F,Ms=new F,Yr=new F,Ss=new F,Nl=new F,bs=new F,xe=class extends Ie{constructor(t=new Le,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Yr.fromBufferAttribute(u,t),a?Ss.addScaledVector(Yr,h):Ss.addScaledVector(Yr.sub(e),h))}e.add(Ss)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(_s.containsPoint(qn.origin)===!1&&(qn.intersectSphere(_s,Dl)===null||qn.origin.distanceToSquared(Dl)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),qn.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],S=Math.max(p.start,g.start),M=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let _=S,L=M;_<L;_+=3){let b=o.getX(_),E=o.getX(_+1),V=o.getX(_+2);s=Es(this,f,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let S=o.getX(p),M=o.getX(p+1),_=o.getX(p+2);s=Es(this,a,t,n,c,h,u,S,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],S=Math.max(p.start,g.start),M=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let _=S,L=M;_<L;_+=3){let b=_,E=_+1,V=_+2;s=Es(this,f,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let S=p,M=p+1,_=p+2;s=Es(this,a,t,n,c,h,u,S,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function iu(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pn,o),l===null)return null;bs.copy(o),bs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:i}}function Es(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ms);let h=iu(i,t,e,n,ys,Is,Ms,Nl);if(h){let u=new F;Zn.getBarycoord(Nl,ys,Is,Ms,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,u,new wt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,u,new wt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Zn.getNormal(ys,Is,Ms,d.normal),h.face=d,h.barycoord=u}return h}var $n=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,g=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function m(A,p,f,S,M,_,L,b,E,V,y){let C=_/E,w=L/V,G=_/2,O=L/2,R=b/2,H=E+1,D=V+1,Y=0,q=0,$=new F;for(let at=0;at<D;at++){let pt=at*w-O;for(let Pt=0;Pt<H;Pt++){let Zt=Pt*C-G;$[A]=Zt*S,$[p]=pt*M,$[f]=R,c.push($.x,$.y,$.z),$[A]=0,$[p]=0,$[f]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(Pt/E),u.push(1-at/V),Y+=1}}for(let at=0;at<V;at++)for(let pt=0;pt<E;pt++){let Pt=d+pt+H*at,Zt=d+pt+H*(at+1),X=d+(pt+1)+H*(at+1),J=d+(pt+1)+H*at;l.push(Pt,Zt,J),l.push(Zt,X,J),q+=6}o.addGroup(g,q,y),g+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){let t={};for(let e=0;e<i.length;e++){let n=Ui(i[e]);for(let s in n)t[s]=n[s]}return t}function su(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Fn={clone:Ui,merge:Me},ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fe=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ru,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},js=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=new F,Fl=new wt,Bl=new wt,Se=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Fl,Bl),e.subVectors(Bl,Fl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ai=-90,xi=1,Xa=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Se(Ai,xi,t,e);s.layers=this.layers,this.add(s);let r=new Se(Ai,xi,t,e);r.layers=this.layers,this.add(r);let a=new Se(Ai,xi,t,e);a.layers=this.layers,this.add(a);let o=new Se(Ai,xi,t,e);o.layers=this.layers,this.add(o);let l=new Se(Ai,xi,t,e);l.layers=this.layers,this.add(l);let c=new Se(Ai,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ks=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ya=class extends Ee{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new fe({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:nn});r.uniforms.tEquirect.value=e;let a=new xe(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=tn),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Zr=new F,ou=new F,lu=new Nt,dn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zr.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lu.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new Ln,ws=new F,ts=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],m=s[9],A=s[10],p=s[11],f=s[12],S=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,p-g,_-f).normalize(),n[1].setComponents(l+r,d+c,p+g,_+f).normalize(),n[2].setComponents(l+a,d+h,p+m,_+S).normalize(),n[3].setComponents(l-a,d-h,p-m,_-S).normalize(),n[4].setComponents(l-o,d-u,p-A,_-M).normalize(),e===gn)n[5].setComponents(l+o,d+u,p+A,_+M).normalize();else if(e===qs)n[5].setComponents(o,u,A,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,m)=>g.start-m.start);let d=0;for(let g=1;g<u.length;g++){let m=u[d],A=u[g];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let g=0,m=u.length;g<m;g++){let A=u[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Js=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,g=[],m=[],A=[],p=[];for(let f=0;f<h;f++){let S=f*d-a;for(let M=0;M<c;M++){let _=M*u-r;m.push(_,-S,0),A.push(0,0,1),p.push(M/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let M=S+c*f,_=S+c*(f+1),L=S+1+c*(f+1),b=S+1+c*f;g.push(M,_,b),g.push(_,L,b)}this.setIndex(g),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(A,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uu=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
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
#endif`,Mu=`#ifdef USE_BUMPMAP
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
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Du=`vec3 transformedNormal = objectNormal;
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
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
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
}`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
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
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,cf=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sd=`#ifdef USE_TRANSMISSION
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
#endif`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ud=`uniform sampler2D t2D;
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`#include <common>
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
}`,Ad=`#if DEPTH_PACKING == 3200
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
}`,xd=`#define DISTANCE
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
}`,vd=`#define DISTANCE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`uniform float scale;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Md=`#include <common>
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
}`,Sd=`uniform vec3 diffuse;
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
}`,bd=`#define LAMBERT
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
}`,Ed=`#define LAMBERT
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
}`,wd=`#define MATCAP
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
}`,Td=`#define MATCAP
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
}`,Rd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Pd=`#define PHONG
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
}`,Ud=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Dd=`#define STANDARD
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
}`,Nd=`#define TOON
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
}`,Fd=`#define TOON
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
}`,Bd=`uniform float size;
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
}`,Od=`uniform vec3 diffuse;
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
}`,zd=`#include <common>
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
}`,kd=`uniform vec3 color;
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
}`,qd=`uniform float rotation;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:hu,alphahash_pars_fragment:uu,alphamap_fragment:fu,alphamap_pars_fragment:du,alphatest_fragment:pu,alphatest_pars_fragment:gu,aomap_fragment:mu,aomap_pars_fragment:Au,batching_pars_vertex:xu,batching_vertex:vu,begin_vertex:Cu,beginnormal_vertex:_u,bsdfs:yu,iridescence_fragment:Iu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:Eu,clipping_planes_vertex:wu,color_fragment:Tu,color_pars_fragment:Ru,color_pars_vertex:Vu,color_vertex:Pu,common:Uu,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Nu,displacementmap_vertex:Fu,emissivemap_fragment:Bu,emissivemap_pars_fragment:Ou,colorspace_fragment:zu,colorspace_pars_fragment:ku,envmap_fragment:qu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Gu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:nf,envmap_vertex:Xu,fog_vertex:Yu,fog_pars_vertex:Zu,fog_fragment:Qu,fog_pars_fragment:ju,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:Ju,lights_lambert_fragment:$u,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:af,lights_phong_pars_fragment:of,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:ff,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:mf,map_fragment:Af,map_pars_fragment:xf,map_particle_fragment:vf,map_particle_pars_fragment:Cf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:yf,morphinstance_vertex:If,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:bf,morphtarget_vertex:Ef,normal_fragment_begin:wf,normal_fragment_maps:Tf,normal_pars_fragment:Rf,normal_pars_vertex:Vf,normal_vertex:Pf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Ff,opaque_fragment:Bf,packing:Of,premultiplied_alpha_fragment:zf,project_vertex:kf,dithering_fragment:qf,dithering_pars_fragment:Hf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Qf,skinbase_vertex:jf,skinning_pars_vertex:Kf,skinning_vertex:Jf,skinnormal_vertex:$f,specularmap_fragment:td,specularmap_pars_fragment:ed,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:sd,transmission_pars_fragment:rd,uv_pars_fragment:ad,uv_pars_vertex:od,uv_vertex:ld,worldpos_vertex:cd,background_vert:hd,background_frag:ud,backgroundCube_vert:fd,backgroundCube_frag:dd,cube_vert:pd,cube_frag:gd,depth_vert:md,depth_frag:Ad,distanceRGBA_vert:xd,distanceRGBA_frag:vd,equirect_vert:Cd,equirect_frag:_d,linedashed_vert:yd,linedashed_frag:Id,meshbasic_vert:Md,meshbasic_frag:Sd,meshlambert_vert:bd,meshlambert_frag:Ed,meshmatcap_vert:wd,meshmatcap_frag:Td,meshnormal_vert:Rd,meshnormal_frag:Vd,meshphong_vert:Pd,meshphong_frag:Ud,meshphysical_vert:Ld,meshphysical_frag:Dd,meshtoon_vert:Nd,meshtoon_frag:Fd,points_vert:Bd,points_frag:Od,shadow_vert:zd,shadow_frag:kd,sprite_vert:qd,sprite_frag:Hd},nt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},$e={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};$e.physical={uniforms:Me([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Ts={r:0,b:0,g:0},Gn=new He,Gd=new $t;function Wd(i,t,e,n,s,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,g=null;function m(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function A(S){let M=!1,_=m(S);_===null?f(o,l):_&&_.isColor&&(f(_,1),M=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===pr)?(h===void 0&&(h=new xe(new $n(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:Ui($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gd.makeRotationFromEuler(Gn)),h.material.toneMapped=zt.getTransfer(_.colorSpace)!==Kt,(u!==_||d!==_.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,g=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xe(new Js(2,2),new fe({name:"BackgroundMaterial",uniforms:Ui($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=zt.getTransfer(_.colorSpace)!==Kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,g=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Ts,Vc(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:A,addToRenderList:p}}function Xd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,w,G,O,R){let H=!1,D=u(O,G,w);r!==D&&(r=D,c(r.object)),H=g(C,O,G,R),H&&m(C,O,G,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(C,w,G,O),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,w,G){let O=G.wireframe===!0,R=n[C.id];R===void 0&&(R={},n[C.id]=R);let H=R[w.id];H===void 0&&(H={},R[w.id]=H);let D=H[O];return D===void 0&&(D=d(l()),H[O]=D),D}function d(C){let w=[],G=[],O=[];for(let R=0;R<e;R++)w[R]=0,G[R]=0,O[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:G,attributeDivisors:O,object:C,attributes:{},index:null}}function g(C,w,G,O){let R=r.attributes,H=w.attributes,D=0,Y=G.getAttributes();for(let q in Y)if(Y[q].location>=0){let at=R[q],pt=H[q];if(pt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;D++}return r.attributesNum!==D||r.index!==O}function m(C,w,G,O){let R={},H=w.attributes,D=0,Y=G.getAttributes();for(let q in Y)if(Y[q].location>=0){let at=H[q];at===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(at=C.instanceColor));let pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),R[q]=pt,D++}r.attributes=R,r.attributesNum=D,r.index=O}function A(){let C=r.newAttributes;for(let w=0,G=C.length;w<G;w++)C[w]=0}function p(C){f(C,0)}function f(C,w){let G=r.newAttributes,O=r.enabledAttributes,R=r.attributeDivisors;G[C]=1,O[C]===0&&(i.enableVertexAttribArray(C),O[C]=1),R[C]!==w&&(i.vertexAttribDivisor(C,w),R[C]=w)}function S(){let C=r.newAttributes,w=r.enabledAttributes;for(let G=0,O=w.length;G<O;G++)w[G]!==C[G]&&(i.disableVertexAttribArray(G),w[G]=0)}function M(C,w,G,O,R,H,D){D===!0?i.vertexAttribIPointer(C,w,G,R,H):i.vertexAttribPointer(C,w,G,O,R,H)}function _(C,w,G,O){A();let R=O.attributes,H=G.getAttributes(),D=w.defaultAttributeValues;for(let Y in H){let q=H[Y];if(q.location>=0){let $=R[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),$!==void 0){let at=$.normalized,pt=$.itemSize,Pt=t.get($);if(Pt===void 0)continue;let Zt=Pt.buffer,X=Pt.type,J=Pt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||$.gpuType===wo;if($.isInterleavedBufferAttribute){let st=$.data,Et=st.stride,Ut=$.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<q.locationSize;Ot++)f(q.location+Ot,st.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Ot=0;Ot<q.locationSize;Ot++)M(q.location+Ot,pt/q.locationSize,X,at,Et*J,(Ut+pt/q.locationSize*Ot)*J,xt)}else{if($.isInstancedBufferAttribute){for(let st=0;st<q.locationSize;st++)f(q.location+st,$.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<q.locationSize;st++)p(q.location+st);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let st=0;st<q.locationSize;st++)M(q.location+st,pt/q.locationSize,X,at,pt*J,pt/q.locationSize*st*J,xt)}}else if(D!==void 0){let at=D[Y];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(q.location,at);break;case 3:i.vertexAttrib3fv(q.location,at);break;case 4:i.vertexAttrib4fv(q.location,at);break;default:i.vertexAttrib1fv(q.location,at)}}}}S()}function L(){V();for(let C in n){let w=n[C];for(let G in w){let O=w[G];for(let R in O)h(O[R].object),delete O[R];delete w[G]}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let w=n[C.id];for(let G in w){let O=w[G];for(let R in O)h(O[R].object),delete O[R];delete w[G]}delete n[C.id]}function E(C){for(let w in n){let G=n[w];if(G[C.id]===void 0)continue;let O=G[C.id];for(let R in O)h(O[R].object),delete O[R];delete G[C.id]}}function V(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:p,disableUnusedAttributes:S}}function Yd(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m];e.update(g,n,1)}function l(c,h,u,d){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Qe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let V=E===Ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==An&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==en&&!V)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:L,maxSamples:b}}function Qd(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){let m=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,M=S*4,_=f.clippingState||null;l.value=_,_=h(m,d,M,g);for(let L=0;L!==M;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,m){let A=u!==null?u.length:0,p=null;if(A!==0){if(p=l.value,m!==!0||p===null){let f=g+A*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,_=g;M!==A;++M,_+=4)a.copy(u[M]).applyMatrix4(S,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function jd(i){let t=new WeakMap;function e(a,o){return o===ua?a.mapping=wi:o===fa&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ua||o===fa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ya(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Li=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_i=4,Ol=[.125,.215,.35,.446,.526,.582],Qn=20,Qr=new Li,zl=new Tt,jr=null,Kr=0,Jr=0,$r=!1,Xn=(1+Math.sqrt(5))/2,vi=1/Xn,kl=[new F(-Xn,vi,0),new F(Xn,vi,0),new F(-vi,0,Xn),new F(vi,0,Xn),new F(0,Xn,-vi),new F(0,Xn,vi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],$s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Kr,Jr),this._renderer.xr.enabled=$r,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ke,format:Qe,colorSpace:Fi,depthBuffer:!1},s=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(r)),this._blurMaterial=Jd(r,t,e)}return s}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){let o=new Se(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zl),h.toneMapping=Vn,h.autoClear=!1;let g=new Pi({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new xe(new $n,g),A=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,A=!0):(g.color.copy(zl),A=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let M=this._cubeSize;Rs(s,S*M,f>2?M:0,M,M),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kl[(s-r-1)%kl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Qn-1),A=r/m,p=isFinite(r)?1+Math.floor(h*A):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);let f=[],S=0;for(let E=0;E<Qn;++E){let V=E/A,y=Math.exp(-V*V/2);f.push(y),E===0?S+=y:E<p&&(S+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let _=this._sizeLods[s],L=3*_*(s>M-_i?s-M+_i:0),b=4*(this._cubeSize-_);Rs(e,L,b,3*_,2*_),l.setRenderTarget(e),l.render(u,Qr)}};function Kd(i){let t=[],e=[],n=[],s=i,r=i-_i+1+Ol.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-_i?l=Ol[a-i+_i-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,m=6,A=3,p=2,f=1,S=new Float32Array(A*m*g),M=new Float32Array(p*m*g),_=new Float32Array(f*m*g);for(let b=0;b<g;b++){let E=b%3*2/3-1,V=b>2?0:-1,y=[E,V,0,E+2/3,V,0,E+2/3,V+1,0,E,V,0,E+2/3,V+1,0,E,V+1,0];S.set(y,A*m*b),M.set(d,p*m*b);let C=[b,b,b,b,b,b];_.set(C,f*m*b)}let L=new Le;L.setAttribute("position",new be(S,A)),L.setAttribute("uv",new be(M,p)),L.setAttribute("faceIndex",new be(_,f)),t.push(L),s>_i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ql(i,t,e){let n=new Ee(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jd(i,t,e){let n=new Float32Array(Qn),s=new F(0,1,0);return new fe({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Hl(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Gl(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function $d(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ua||l===fa,h=l===wi||l===Ti;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new $s(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new $s(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let p=0,f=A.length;p<f;p++)t.remove(A[p])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let m in g){let A=g[m];for(let p=0,f=A.length;p<f;p++)t.update(A[p],i.ARRAY_BUFFER)}}function c(u){let d=[],g=u.index,m=u.attributes.position,A=0;if(g!==null){let S=g.array;A=g.version;for(let M=0,_=S.length;M<_;M+=3){let L=S[M+0],b=S[M+1],E=S[M+2];d.push(L,b,b,E,E,L)}}else if(m!==void 0){let S=m.array;A=m.version;for(let M=0,_=S.length/3-1;M<_;M+=3){let L=M+0,b=M+1,E=M+2;d.push(L,b,b,E,E,L)}}else return;let p=new(Tc(d)?Qs:Zs)(d,1);p.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function np(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*a),e.update(g,n,1)}function c(d,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,d*a,m),e.update(g,n,m))}function h(d,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,m);let p=0;for(let f=0;f<m;f++)p+=g[f];e.update(p,n,1)}function u(d,g,m,A){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,g[f],A[f]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,A,0,m);let f=0;for(let S=0;S<m;S++)f+=g[S]*A[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ip(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sp(i,t,e){let n=new WeakMap,s=new le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;g===!0&&(M=1),m===!0&&(M=2),A===!0&&(M=3);let _=o.attributes.position.count*M,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*L*4*u),E=new Ws(b,_,L,u);E.type=en,E.needsUpdate=!0;let V=M*4;for(let C=0;C<u;C++){let w=p[C],G=f[C],O=S[C],R=_*L*4*C;for(let H=0;H<w.count;H++){let D=H*V;g===!0&&(s.fromBufferAttribute(w,H),b[R+D+0]=s.x,b[R+D+1]=s.y,b[R+D+2]=s.z,b[R+D+3]=0),m===!0&&(s.fromBufferAttribute(G,H),b[R+D+4]=s.x,b[R+D+5]=s.y,b[R+D+6]=s.z,b[R+D+7]=0),A===!0&&(s.fromBufferAttribute(O,H),b[R+D+8]=s.x,b[R+D+9]=s.y,b[R+D+10]=s.z,b[R+D+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new wt(_,L)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var tr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=Ii){if(h!==Ii&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=Jn),n===void 0&&h===Vi&&(n=Ri),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uc=new Ue,Wl=new tr(1,1),Lc=new Ws,Dc=new Wa,Nc=new Ks,Xl=[],Yl=[],Zl=new Float32Array(16),Ql=new Float32Array(9),jl=new Float32Array(4);function Bi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),pe(e,n)}}function up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),pe(e,n)}}function fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),pe(e,n)}}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=wc,r=Wl):r=Uc,e.setTexture2D(t||r,s)}function yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dc,s)}function Ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nc,s)}function Mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lc,s)}function Sp(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return fp;case 5124:case 35670:return dp;case 35667:case 35671:return pp;case 35668:case 35672:return gp;case 35669:case 35673:return mp;case 5125:return Ap;case 36294:return xp;case 36295:return vp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Mp}}function bp(i,t){i.uniform1fv(this.addr,t)}function Ep(i,t){let e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function wp(i,t){let e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Tp(i,t){let e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rp(i,t){let e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vp(i,t){let e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pp(i,t){let e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Lp(i,t){i.uniform2iv(this.addr,t)}function Dp(i,t){i.uniform3iv(this.addr,t)}function Np(i,t){i.uniform4iv(this.addr,t)}function Fp(i,t){i.uniform1uiv(this.addr,t)}function Bp(i,t){i.uniform2uiv(this.addr,t)}function Op(i,t){i.uniform3uiv(this.addr,t)}function zp(i,t){i.uniform4uiv(this.addr,t)}function kp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uc,r[a])}function qp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Dc,r[a])}function Hp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nc,r[a])}function Gp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lc,r[a])}function Wp(i){switch(i){case 5126:return bp;case 35664:return Ep;case 35665:return wp;case 35666:return Tp;case 35674:return Rp;case 35675:return Vp;case 35676:return Pp;case 5124:case 35670:return Up;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Bp;case 36295:return Op;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}var Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sp(e.type)}},Qa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}},ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Kl(i,t){i.seq.push(t),i.map[t.id]=t}function Xp(i,t,e){let n=i.name,s=n.length;for(ta.lastIndex=0;;){let r=ta.exec(n),a=ta.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kl(e,c===void 0?new Za(o,i,t):new Qa(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ja(o),Kl(e,u)),e=u}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Xp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Jl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yp=37297,Zp=0;function Qp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $l=new Nt;function jp(i){zt._getMatrix($l,zt.workingColorSpace,i);let t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),a)}else return s}function Kp(i,t){let e=jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jp(i,t){let e;switch(t){case yo:e="Linear";break;case Io:e="Reinhard";break;case Mo:e="Cineon";break;case So:e="ACESFilmic";break;case bo:e="AgX";break;case Eo:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vs=new F;function $p(){zt.getLuminanceCoefficients(Vs);let i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function ec(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(ig,rg)}var sg=new Map;function rg(i,t){let e=Bt[t];if(e===void 0){let n=sg.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(ag,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ti:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _o:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case wh:t="ENVMAP_BLENDING_ADD";break}return t}function fg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lg(e),c=cg(e),h=hg(e),u=ug(e),d=fg(e),g=tg(e),m=eg(r),A=s.createProgram(),p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ki).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ki).join(`
`),f.length>0&&(f+=`
`)):(p=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),f=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Jp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Kp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Ka(a),a=ec(a,e),a=nc(a,e),o=Ka(o),o=ec(o,e),o=nc(o,e),a=ic(a),o=ic(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=S+p+a,_=S+f+o,L=Jl(s,s.VERTEX_SHADER,M),b=Jl(s,s.FRAGMENT_SHADER,_);s.attachShader(A,L),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(A).trim(),O=s.getShaderInfoLog(L).trim(),R=s.getShaderInfoLog(b).trim(),H=!0,D=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,b);else{let Y=tc(s,L,"vertex"),q=tc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+Y+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||R==="")&&(D=!1);D&&(w.diagnostics={runnable:H,programLog:G,vertexShader:{log:O,prefix:p},fragmentShader:{log:R,prefix:f}})}s.deleteShader(L),s.deleteShader(b),V=new Si(s,A),y=ng(s,A)}let V;this.getUniforms=function(){return V===void 0&&E(this),V};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,Yp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=b,this}var pg=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}};function gg(i,t,e,n,s,r,a){let o=new Ys,l=new Ja,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,C,w,G,O){let R=G.fog,H=O.geometry,D=y.isMeshStandardMaterial?G.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||D),q=Y&&Y.mapping===pr?Y.image.height:null,$=m[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=at!==void 0?at.length:0,Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Zt,X,J,xt;if($){let Jt=$e[$];Zt=Jt.vertexShader,X=Jt.fragmentShader}else Zt=y.vertexShader,X=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);let st=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,ae=!!y.map,Wt=!!y.matcap,ce=!!Y,N=!!y.aoMap,ze=!!y.lightMap,qt=!!y.bumpMap,Ht=!!y.normalMap,St=!!y.displacementMap,ne=!!y.emissiveMap,Mt=!!y.metalnessMap,I=!!y.roughnessMap,x=y.anisotropy>0,B=y.clearcoat>0,Q=y.dispersion>0,K=y.iridescence>0,Z=y.sheen>0,vt=y.transmission>0,rt=x&&!!y.anisotropyMap,ht=B&&!!y.clearcoatMap,Xt=B&&!!y.clearcoatNormalMap,tt=B&&!!y.clearcoatRoughnessMap,ut=K&&!!y.iridescenceMap,bt=K&&!!y.iridescenceThicknessMap,Rt=Z&&!!y.sheenColorMap,ft=Z&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,Ft=!!y.specularColorMap,te=!!y.specularIntensityMap,T=vt&&!!y.transmissionMap,it=vt&&!!y.thicknessMap,W=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Lt=!!y.extensions,oe=Vn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(oe=i.toneMapping);let ve={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:X,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Fi,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:Wt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:ze,bumpMap:qt,normalMap:Ht,displacementMap:d&&St,emissiveMap:ne,normalMapObjectSpace:Ht&&y.normalMapType===Uh,normalMapTangentSpace:Ht&&y.normalMapType===Ec,metalnessMap:Mt,roughnessMap:I,anisotropy:x,anisotropyMap:rt,clearcoat:B,clearcoatMap:ht,clearcoatNormalMap:Xt,clearcoatRoughnessMap:tt,dispersion:Q,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:Z,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Gt,specularColorMap:Ft,specularIntensityMap:te,transmission:vt,transmissionMap:T,thicknessMap:it,gradientMap:W,opaque:y.transparent===!1&&y.blending===yi&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:ae&&A(y.map.channel),aoMapUv:N&&A(y.aoMap.channel),lightMapUv:ze&&A(y.lightMap.channel),bumpMapUv:qt&&A(y.bumpMap.channel),normalMapUv:Ht&&A(y.normalMap.channel),displacementMapUv:St&&A(y.displacementMap.channel),emissiveMapUv:ne&&A(y.emissiveMap.channel),metalnessMapUv:Mt&&A(y.metalnessMap.channel),roughnessMapUv:I&&A(y.roughnessMap.channel),anisotropyMapUv:rt&&A(y.anisotropyMap.channel),clearcoatMapUv:ht&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(y.sheenRoughnessMap.channel),specularMapUv:Gt&&A(y.specularMap.channel),specularColorMapUv:Ft&&A(y.specularColorMap.channel),specularIntensityMapUv:te&&A(y.specularIntensityMap.channel),transmissionMapUv:T&&A(y.transmissionMap.channel),thicknessMapUv:it&&A(y.thicknessMap.channel),alphaMapUv:j&&A(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ht||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ae||j),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Pt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&zt.getTransfer(y.map.colorSpace)===Kt,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&zt.getTransfer(y.emissiveMap.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function f(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)C.push(w),C.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(S(C,y),M(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function S(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){let C=m[y.type],w;if(C){let G=$e[C];w=Fn.clone(G.uniforms)}else w=y.uniforms;return w}function L(y,C){let w;for(let G=0,O=h.length;G<O;G++){let R=h[G];if(R.cacheKey===C){w=R,++w.usedTimes;break}}return w===void 0&&(w=new dg(i,C,y,r),h.push(w)),w}function b(y){if(--y.usedTimes===0){let C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:V}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ag(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ac(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,g,m,A,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:g,groupOrder:m,renderOrder:u.renderOrder,z:A,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=g,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=p),t++,f}function o(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ag),n.length>1&&n.sort(d||rc),s.length>1&&s.sort(d||rc)}function h(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ac,i.set(n,[a])):s>=r.length?(a=new ac,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Tt};break;case"SpotLight":e={position:new F,direction:new F,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Cg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _g=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ig(i){let t=new vg,e=Cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new $t,a=new $t;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,m=0,A=0,p=0,f=0,S=0,M=0,_=0,L=0,b=0,E=0;c.sort(yg);for(let y=0,C=c.length;y<C;y++){let w=c[y],G=w.color,O=w.intensity,R=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=G.r*O,u+=G.g*O,d+=G.b*O;else if(w.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(w.sh.coefficients[D],O);E++}else if(w.isDirectionalLight){let D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,q=e.get(w);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=w.shadow.matrix,S++}n.directional[g]=D,g++}else if(w.isSpotLight){let D=t.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(G).multiplyScalar(O),D.distance=R,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,n.spot[A]=D;let Y=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,Y.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[A]=Y.matrix,w.castShadow){let q=e.get(w);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=H,_++}A++}else if(w.isRectAreaLight){let D=t.get(w);D.color.copy(G).multiplyScalar(O),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=D,p++}else if(w.isPointLight){let D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){let Y=w.shadow,q=e.get(w);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=w.shadow.matrix,M++}n.point[m]=D,m++}else if(w.isHemisphereLight){let D=t.get(w);D.skyColor.copy(w.color).multiplyScalar(O),D.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[f]=D,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let V=n.hash;(V.directionalLength!==g||V.pointLength!==m||V.spotLength!==A||V.rectAreaLength!==p||V.hemiLength!==f||V.numDirectionalShadows!==S||V.numPointShadows!==M||V.numSpotShadows!==_||V.numSpotMaps!==L||V.numLightProbes!==E)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,V.directionalLength=g,V.pointLength=m,V.spotLength=A,V.rectAreaLength=p,V.hemiLength=f,V.numDirectionalShadows=S,V.numPointShadows=M,V.numSpotShadows=_,V.numSpotMaps=L,V.numLightProbes=E,n.version=_g++)}function l(c,h){let u=0,d=0,g=0,m=0,A=0,p=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let M=c[f];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(M.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function oc(i){let t=new Ig(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new oc(i),t.set(s,[o])):r>=a.length?(o=new oc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var to=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Eg(i,t,e){let n=new ts,s=new wt,r=new wt,a=new le,o=new to({depthPacking:Ph}),l=new eo,c={},h=e.maxTextureSize,u={[Pn]:Pe,[Pe]:Pn,[pn]:pn},d=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Sg,fragmentShader:bg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let m=new Le;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new xe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let f=this.type;this.render=function(b,E,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),C=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),G=i.state;G.setBlending(nn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let O=f!==fn&&this.type===fn,R=f===fn&&this.type!==fn;for(let H=0,D=b.length;H<D;H++){let Y=b[H],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let $=q.getFrameExtents();if(s.multiply($),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,q.mapSize.y=r.y)),q.map===null||O===!0||R===!0){let pt=this.type!==fn?{minFilter:Be,magFilter:Be}:{};q.map!==null&&q.map.dispose(),q.map=new Ee(s.x,s.y,pt),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let at=q.getViewportCount();for(let pt=0;pt<at;pt++){let Pt=q.getViewport(pt);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),G.viewport(a),q.updateMatrices(Y,pt),n=q.getFrustum(),_(E,V,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===fn&&S(q,V),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,C,w)};function S(b,E){let V=t.update(A);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ee(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,V,d,A,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,V,g,A,null)}function M(b,E,V,y){let C=null,w=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)C=w;else if(C=V.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let G=C.uuid,O=E.uuid,R=c[G];R===void 0&&(R={},c[G]=R);let H=R[O];H===void 0&&(H=C.clone(),R[O]=H,E.addEventListener("dispose",L)),C=H}if(C.visible=E.visible,C.wireframe=E.wireframe,y===fn?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let G=i.properties.get(C);G.light=V}return C}function _(b,E,V,y,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===fn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);let O=t.update(b),R=b.material;if(Array.isArray(R)){let H=O.groups;for(let D=0,Y=H.length;D<Y;D++){let q=H[D],$=R[q.materialIndex];if($&&$.visible){let at=M(b,$,y,C);b.onBeforeShadow(i,b,E,V,O,at,q),i.renderBufferDirect(V,null,O,at,b,q),b.onAfterShadow(i,b,E,V,O,at,q)}}}else if(R.visible){let H=M(b,R,y,C);b.onBeforeShadow(i,b,E,V,O,H,null),i.renderBufferDirect(V,null,O,H,b,null),b.onAfterShadow(i,b,E,V,O,H,null)}}let G=b.children;for(let O=0,R=G.length;O<R;O++)_(G[O],E,V,y,C)}function L(b){b.target.removeEventListener("dispose",L);for(let V in c){let y=c[V],C=b.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}var wg={[sa]:ra,[aa]:ca,[oa]:ha,[Ei]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:Ei};function Tg(i,t){function e(){let T=!1,it=new le,W=null,j=new le(0,0,0,0);return{setMask:function(ct){W!==ct&&!T&&(i.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){T=ct},setClear:function(ct,ot,Lt,oe,ve){ve===!0&&(ct*=oe,ot*=oe,Lt*=oe),it.set(ct,ot,Lt,oe),j.equals(it)===!1&&(i.clearColor(ct,ot,Lt,oe),j.copy(it))},reset:function(){T=!1,W=null,j.set(-1,0,0,0)}}}function n(){let T=!1,it=!1,W=null,j=null,ct=null;return{setReversed:function(ot){if(it!==ot){let Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let oe=ct;ct=null,this.setClear(oe)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ot){W!==ot&&!T&&(i.depthMask(ot),W=ot)},setFunc:function(ot){if(it&&(ot=wg[ot]),j!==ot){switch(ot){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ot}},setLocked:function(ot){T=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){T=!1,W=null,j=null,ct=null,it=!1}}}function s(){let T=!1,it=null,W=null,j=null,ct=null,ot=null,Lt=null,oe=null,ve=null;return{setTest:function(Jt){T||(Jt?st(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!T&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,Ge,rn){(W!==Jt||j!==Ge||ct!==rn)&&(i.stencilFunc(Jt,Ge,rn),W=Jt,j=Ge,ct=rn)},setOp:function(Jt,Ge,rn){(ot!==Jt||Lt!==Ge||oe!==rn)&&(i.stencilOp(Jt,Ge,rn),ot=Jt,Lt=Ge,oe=rn)},setLocked:function(Jt){T=Jt},setClear:function(Jt){ve!==Jt&&(i.clearStencil(Jt),ve=Jt)},reset:function(){T=!1,it=null,W=null,j=null,ct=null,ot=null,Lt=null,oe=null,ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,S=null,M=null,_=null,L=null,b=null,E=new Tt(0,0,0),V=0,y=!1,C=null,w=null,G=null,O=null,R=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Y=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=Y>=2);let $=null,at={},pt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Zt=new le().fromArray(pt),X=new le().fromArray(Pt);function J(T,it,W,j){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(T,ot),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<W;Lt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let xt={};xt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ei),qt(!1),Ht(hl),st(i.CULL_FACE),N(nn);function st(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function Et(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Ut(T,it){return u[T]!==it?(i.bindFramebuffer(T,it),u[T]=it,T===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),T===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(T,it){let W=g,j=!1;if(T){W=d.get(it),W===void 0&&(W=[],d.set(it,W));let ct=T.textures;if(W.length!==ct.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=ct.length;ot<Lt;ot++)W[ot]=i.COLOR_ATTACHMENT0+ot;W.length=ct.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function ae(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let Wt={[Yn]:i.FUNC_ADD,[hh]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};Wt[fh]=i.MIN,Wt[dh]=i.MAX;let ce={[ph]:i.ZERO,[gh]:i.ONE,[mh]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[xh]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[vh]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(T,it,W,j,ct,ot,Lt,oe,ve,Jt){if(T===nn){A===!0&&(Et(i.BLEND),A=!1);return}if(A===!1&&(st(i.BLEND),A=!0),T!==ch){if(T!==p||Jt!==y){if((f!==Yn||_!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,_=Yn),Jt)switch(T){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,M=null,L=null,b=null,E.set(0,0,0),V=0,p=T,y=Jt}return}ct=ct||it,ot=ot||W,Lt=Lt||j,(it!==f||ct!==_)&&(i.blendEquationSeparate(Wt[it],Wt[ct]),f=it,_=ct),(W!==S||j!==M||ot!==L||Lt!==b)&&(i.blendFuncSeparate(ce[W],ce[j],ce[ot],ce[Lt]),S=W,M=j,L=ot,b=Lt),(oe.equals(E)===!1||ve!==V)&&(i.blendColor(oe.r,oe.g,oe.b,ve),E.copy(oe),V=ve),p=T,y=!1}function ze(T,it){T.side===pn?Et(i.CULL_FACE):st(i.CULL_FACE);let W=T.side===Pe;it&&(W=!W),qt(W),T.blending===yi&&T.transparent===!1?N(nn):N(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let j=T.stencilWrite;o.setTest(j),j&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ne(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(T){C!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),C=T)}function Ht(T){T!==ah?(st(i.CULL_FACE),T!==w&&(T===hl?i.cullFace(i.BACK):T===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),w=T}function St(T){T!==G&&(D&&i.lineWidth(T),G=T)}function ne(T,it,W){T?(st(i.POLYGON_OFFSET_FILL),(O!==it||R!==W)&&(i.polygonOffset(it,W),O=it,R=W)):Et(i.POLYGON_OFFSET_FILL)}function Mt(T){T?st(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function I(T){T===void 0&&(T=i.TEXTURE0+H-1),$!==T&&(i.activeTexture(T),$=T)}function x(T,it,W){W===void 0&&($===null?W=i.TEXTURE0+H-1:W=$);let j=at[W];j===void 0&&(j={type:void 0,texture:void 0},at[W]=j),(j.type!==T||j.texture!==it)&&($!==W&&(i.activeTexture(W),$=W),i.bindTexture(T,it||xt[T]),j.type=T,j.texture=it)}function B(){let T=at[$];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Rt(T){Zt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Zt.copy(T))}function ft(T){X.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),X.copy(T))}function Gt(T,it){let W=c.get(it);W===void 0&&(W=new WeakMap,c.set(it,W));let j=W.get(T);j===void 0&&(j=i.getUniformBlockIndex(it,T.name),W.set(T,j))}function Ft(T,it){let j=c.get(it).get(T);l.get(it)!==j&&(i.uniformBlockBinding(it,j,T.__bindingPointIndex),l.set(it,j))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,at={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,S=null,M=null,_=null,L=null,b=null,E=new Tt(0,0,0),V=0,y=!1,C=null,w=null,G=null,O=null,R=null,Zt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Et,bindFramebuffer:Ut,drawBuffers:Ot,useProgram:ae,setBlending:N,setMaterial:ze,setFlipSided:qt,setCullFace:Ht,setLineWidth:St,setPolygonOffset:ne,setScissorTest:Mt,activeTexture:I,bindTexture:x,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:K,texImage2D:ut,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Rt,viewport:ft,reset:te}}function lc(i,t,e,n){let s=Rg(n);switch(e){case _c:return i*t;case Ic:return i*t;case Mc:return i*t*2;case Vo:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case Sc:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case yc:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ga:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case va:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bc:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(i){switch(i){case An:case xc:return{byteLength:1,components:1};case $i:case vc:case Ke:return{byteLength:2,components:1};case To:case Ro:return{byteLength:2,components:4};case Jn:case wo:case en:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,x){return g?new OffscreenCanvas(I,x):Hs("canvas")}function A(I,x,B){let Q=1,K=Mt(I);if((K.width>B||K.height>B)&&(Q=B/Math.max(K.width,K.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let Z=Math.floor(Q*K.width),vt=Math.floor(Q*K.height);u===void 0&&(u=m(Z,vt));let rt=x?m(Z,vt):u;return rt.width=Z,rt.height=vt,rt.getContext("2d").drawImage(I,0,0,Z,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+vt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function p(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,x,B,Q,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){let vt=K?gr:zt.getTransfer(Q);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=vt===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(I,x){let B;return I?x===null||x===Jn||x===Ri?B=i.DEPTH24_STENCIL8:x===en?B=i.DEPTH32F_STENCIL8:x===$i&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Ri?B=i.DEPTH_COMPONENT24:x===en?B=i.DEPTH_COMPONENT32F:x===$i&&(B=i.DEPTH_COMPONENT16),B}function L(I,x){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Be&&I.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function b(I){let x=I.target;x.removeEventListener("dispose",b),V(x),x.isVideoTexture&&h.delete(x)}function E(I){let x=I.target;x.removeEventListener("dispose",E),C(x)}function V(I){let x=n.get(I);if(x.__webglInit===void 0)return;let B=I.source,Q=d.get(B);if(Q){let K=Q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(I),Object.keys(Q).length===0&&d.delete(B)}n.remove(I)}function y(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let B=I.source,Q=d.get(B);delete Q[x.__cacheKey],a.memory.textures--}function C(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let K=0;K<x.__webglFramebuffer[Q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[Q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=I.textures;for(let Q=0,K=B.length;Q<K;Q++){let Z=n.get(B[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(I)}let w=0;function G(){w=0}function O(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function R(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function H(I,x){let B=n.get(I);if(I.isVideoTexture&&St(I),I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){let Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,I,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function D(I,x){let B=n.get(I);if(I.version>0&&B.__version!==I.version){X(B,I,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Y(I,x){let B=n.get(I);if(I.version>0&&B.__version!==I.version){X(B,I,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function q(I,x){let B=n.get(I);if(I.version>0&&B.__version!==I.version){J(B,I,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let $={[da]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},at={[Be]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},pt={[Lh]:i.NEVER,[zh]:i.ALWAYS,[Dh]:i.LESS,[wc]:i.LEQUAL,[Nh]:i.EQUAL,[Oh]:i.GEQUAL,[Fh]:i.GREATER,[Bh]:i.NOTEQUAL};function Pt(I,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Sr||x.magFilter===us||x.magFilter===Kn||x.minFilter===tn||x.minFilter===Sr||x.minFilter===us||x.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,$[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==us&&x.minFilter!==Kn||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(I,x){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",b));let Q=x.source,K=d.get(Q);K===void 0&&(K={},d.set(Q,K));let Z=R(x);if(Z!==I.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[Z].usedTimes++;let vt=K[I.__cacheKey];vt!==void 0&&(K[I.__cacheKey].usedTimes--,vt.usedTimes===0&&y(x)),I.__cacheKey=Z,I.__webglTexture=K[Z].texture}return B}function X(I,x,B){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let K=Zt(I,x),Z=x.source;e.bindTexture(Q,I.__webglTexture,i.TEXTURE0+B);let vt=n.get(Z);if(Z.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);let rt=zt.getPrimaries(zt.workingColorSpace),ht=x.colorSpace===Rn?null:zt.getPrimaries(x.colorSpace),Xt=x.colorSpace===Rn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=A(x.image,!1,s.maxTextureSize);tt=ne(x,tt);let ut=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),Rt=M(x.internalFormat,ut,bt,x.colorSpace,x.isVideoTexture);Pt(Q,x);let ft,Gt=x.mipmaps,Ft=x.isVideoTexture!==!0,te=vt.__version===void 0||K===!0,T=Z.dataReady,it=L(x,tt);if(x.isDepthTexture)Rt=_(x.format===Vi,x.type),te&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ut,bt,null));else if(x.isDataTexture)if(Gt.length>0){Ft&&te&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)ft=Gt[W],Ft?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,ut,bt,ft.data):e.texImage2D(i.TEXTURE_2D,W,Rt,ft.width,ft.height,0,ut,bt,ft.data);x.generateMipmaps=!1}else Ft?(te&&e.texStorage2D(i.TEXTURE_2D,it,Rt,tt.width,tt.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ut,bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ut,bt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,Gt[0].width,Gt[0].height,tt.depth);for(let W=0,j=Gt.length;W<j;W++)if(ft=Gt[W],x.format!==Qe)if(ut!==null)if(Ft){if(T)if(x.layerUpdates.size>0){let ct=lc(ft.width,ft.height,x.format,x.type);for(let ot of x.layerUpdates){let Lt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ot,ft.width,ft.height,1,ut,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,tt.depth,ut,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Rt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,tt.depth,ut,bt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Rt,ft.width,ft.height,tt.depth,0,ut,bt,ft.data)}else{Ft&&te&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)ft=Gt[W],x.format!==Qe?ut!==null?Ft?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,ut,bt,ft.data):e.texImage2D(i.TEXTURE_2D,W,Rt,ft.width,ft.height,0,ut,bt,ft.data)}else if(x.isDataArrayTexture)if(Ft){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,tt.width,tt.height,tt.depth),T)if(x.layerUpdates.size>0){let W=lc(tt.width,tt.height,x.format,x.type);for(let j of x.layerUpdates){let ct=tt.data.subarray(j*W/tt.data.BYTES_PER_ELEMENT,(j+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ut,bt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,ut,bt,tt.data);else if(x.isData3DTexture)Ft?(te&&e.texStorage3D(i.TEXTURE_3D,it,Rt,tt.width,tt.height,tt.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,ut,bt,tt.data);else if(x.isFramebufferTexture){if(te)if(Ft)e.texStorage2D(i.TEXTURE_2D,it,Rt,tt.width,tt.height);else{let W=tt.width,j=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,Rt,W,j,0,ut,bt,null),W>>=1,j>>=1}}else if(Gt.length>0){if(Ft&&te){let W=Mt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,it,Rt,W.width,W.height)}for(let W=0,j=Gt.length;W<j;W++)ft=Gt[W],Ft?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ut,bt,ft):e.texImage2D(i.TEXTURE_2D,W,Rt,ut,bt,ft);x.generateMipmaps=!1}else if(Ft){if(te){let W=Mt(tt);e.texStorage2D(i.TEXTURE_2D,it,Rt,W.width,W.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ut,bt,tt);p(x)&&f(Q),vt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function J(I,x,B){if(x.image.length!==6)return;let Q=Zt(I,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+B);let Z=n.get(K);if(K.version!==Z.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let vt=zt.getPrimaries(zt.workingColorSpace),rt=x.colorSpace===Rn?null:zt.getPrimaries(x.colorSpace),ht=x.colorSpace===Rn||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Xt&&!tt?ut[j]=A(x.image[j],!0,s.maxCubemapSize):ut[j]=tt?x.image[j].image:x.image[j],ut[j]=ne(x,ut[j]);let bt=ut[0],Rt=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),Gt=M(x.internalFormat,Rt,ft,x.colorSpace),Ft=x.isVideoTexture!==!0,te=Z.__version===void 0||Q===!0,T=K.dataReady,it=L(x,bt);Pt(i.TEXTURE_CUBE_MAP,x);let W;if(Xt){Ft&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,bt.width,bt.height);for(let j=0;j<6;j++){W=ut[j].mipmaps;for(let ct=0;ct<W.length;ct++){let ot=W[ct];x.format!==Qe?Rt!==null?Ft?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,Rt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Gt,ot.width,ot.height,0,Rt,ft,ot.data)}}}else{if(W=x.mipmaps,Ft&&te){W.length>0&&it++;let j=Mt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,Rt,ft,ut[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,ut[j].width,ut[j].height,0,Rt,ft,ut[j].data);for(let ct=0;ct<W.length;ct++){let Lt=W[ct].image[j].image;Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Lt.width,Lt.height,Rt,ft,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Gt,Lt.width,Lt.height,0,Rt,ft,Lt.data)}}else{Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,ft,ut[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Rt,ft,ut[j]);for(let ct=0;ct<W.length;ct++){let ot=W[ct];Ft?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Rt,ft,ot.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Gt,Rt,ft,ot.image[j])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),Z.__version=K.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function xt(I,x,B,Q,K,Z){let vt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),ht=M(B.internalFormat,vt,rt,B.colorSpace),Xt=n.get(x),tt=n.get(B);if(tt.__renderTarget=x,!Xt.__hasExternalTextures){let ut=Math.max(1,x.width>>Z),bt=Math.max(1,x.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,ht,ut,bt,x.depth,0,vt,rt,null):e.texImage2D(K,Z,ht,ut,bt,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,tt.__webglTexture,0,qt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,tt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let Q=x.depthTexture,K=Q&&Q.isDepthTexture?Q.type:null,Z=_(x.stencilBuffer,K),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=qt(x);Ht(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Z,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{let Q=x.textures;for(let K=0;K<Q.length;K++){let Z=Q[K],vt=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),ht=M(Z.internalFormat,vt,rt,Z.colorSpace),Xt=qt(x);B&&Ht(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ht,x.width,x.height):Ht(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let K=Q.__webglTexture,Z=qt(x);if(x.depthTexture.format===Ii)Ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Vi)Ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ut(I){let x=n.get(I),B=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",K)};Q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Q}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,I)}else if(B){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Q],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(I,x,B){let Q=n.get(I);x!==void 0&&xt(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(I)}function ae(I){let x=I.texture,B=n.get(I),Q=n.get(x);I.addEventListener("dispose",E);let K=I.textures,Z=I.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else B.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)B.__webglFramebuffer[rt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ht=K.length;rt<ht;rt++){let Xt=n.get(K[rt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ht(I)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let ht=K[rt];B.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);let Xt=r.convert(ht.format,ht.colorSpace),tt=r.convert(ht.type),ut=M(ht.internalFormat,Xt,tt,ht.colorSpace,I.isXRRenderTarget===!0),bt=qt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ut,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)xt(B.__webglFramebuffer[rt][ht],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else xt(B.__webglFramebuffer[rt],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ht=K.length;rt<ht;rt++){let Xt=K[rt],tt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Pt(i.TEXTURE_2D,Xt),xt(B.__webglFramebuffer,I,Xt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),Pt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)xt(B.__webglFramebuffer[ht],I,x,i.COLOR_ATTACHMENT0,rt,ht);else xt(B.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,rt,0);p(x)&&f(rt),e.unbindTexture()}I.depthBuffer&&Ut(I)}function Wt(I){let x=I.textures;for(let B=0,Q=x.length;B<Q;B++){let K=x[B];if(p(K)){let Z=S(I),vt=n.get(K).__webglTexture;e.bindTexture(Z,vt),f(Z),e.unbindTexture()}}}let ce=[],N=[];function ze(I){if(I.samples>0){if(Ht(I)===!1){let x=I.textures,B=I.width,Q=I.height,K=i.COLOR_BUFFER_BIT,Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Xt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,K,i.NEAREST),l===!0&&(ce.length=0,N.length=0,ce.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(Z),N.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Xt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(I){return Math.min(s.maxSamples,I.samples)}function Ht(I){let x=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(I){let x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function ne(I,x){let B=I.colorSpace,Q=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==Fi&&B!==Rn&&(zt.getTransfer(B)===Kt?(Q!==Qe||K!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Mt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=D,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function Pg(i,t){function e(n,s=Rn){let r,a=zt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.BYTE;if(n===vc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Ke)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===yc)return i.RGB;if(n===Qe)return i.RGBA;if(n===Ic)return i.LUMINANCE;if(n===Mc)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Bs||n===Os)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===ma||n===Aa||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ca||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===Ca)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ia||n===Ma||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Ra||n===Va||n===Pa||n===Ua||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zs)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===Ba||n===Oa||n===za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var no=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
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

}`,io=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},so=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,g=null,m=null,A=new io,p=e.getContextAttributes(),f=null,S=null,M=[],_=[],L=new wt,b=null,E=new Se;E.viewport=new le;let V=new Se;V.viewport=new le;let y=[E,V],C=new no,w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=M[X];return J===void 0&&(J=new Ji,M[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=M[X];return J===void 0&&(J=new Ji,M[X]=J),J.getGripSpace()},this.getHand=function(X){let J=M[X];return J===void 0&&(J=new Ji,M[X]=J),J.getHandSpace()};function O(X){let J=_.indexOf(X.inputSource);if(J===-1)return;let xt=M[J];xt!==void 0&&(xt.update(X.inputSource,X.frame,c||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function R(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){let J=_[X];J!==null&&(_[X]=null,M[X].disconnect(J))}w=null,G=null,A.reset(),t.setRenderTarget(f),g=null,d=null,u=null,s=null,S=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",R),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Ee(g.framebufferWidth,g.framebufferHeight,{format:Qe,type:An,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,xt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Vi:Ii,xt=p.stencil?Ri:Jn);let Et={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ee(d.textureWidth,d.textureHeight,{format:Qe,type:An,depthTexture:new tr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function H(X){for(let J=0;J<X.removed.length;J++){let xt=X.removed[J],st=_.indexOf(xt);st>=0&&(_[st]=null,M[st].disconnect(xt))}for(let J=0;J<X.added.length;J++){let xt=X.added[J],st=_.indexOf(xt);if(st===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=_.length){_.push(xt),st=Ut;break}else if(_[Ut]===null){_[Ut]=xt,st=Ut;break}if(st===-1)break}let Et=M[st];Et&&Et.connect(xt)}}let D=new F,Y=new F;function q(X,J,xt){D.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);let st=D.distanceTo(Y),Et=J.projectionMatrix.elements,Ut=xt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),ae=Et[14]/(Et[10]+1),Wt=(Et[9]+1)/Et[5],ce=(Et[9]-1)/Et[5],N=(Et[8]-1)/Et[0],ze=(Ut[8]+1)/Ut[0],qt=Ot*N,Ht=Ot*ze,St=st/(-N+ze),ne=St*-N;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Mt=Ot+St,I=ae+St,x=qt-ne,B=Ht+(st-ne),Q=Wt*ae/I*Mt,K=ce*ae/I*Mt;X.projectionMatrix.makePerspective(x,B,Q,K,Mt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(J=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),C.near=V.near=E.near=J,C.far=V.far=E.far=xt,(w!==C.near||G!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,G=C.far),E.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,C.layers.mask=E.layers.mask|V.layers.mask;let st=X.parent,Et=C.cameras;$(C,st);for(let Ut=0;Ut<Et.length;Ut++)$(Et[Ut],st);Et.length===2?q(C,E,V):C.projectionMatrix.copy(E.projectionMatrix),at(X,C,st)};function at(X,J,xt){xt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let pt=null;function Pt(X,J){if(h=J.getViewerPose(c||a),m=J,h!==null){let xt=h.views;g!==null&&(t.setRenderTargetFramebuffer(S,g.framebuffer),t.setRenderTarget(S));let st=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,st=!0);for(let Ut=0;Ut<xt.length;Ut++){let Ot=xt[Ut],ae=null;if(g!==null)ae=g.getViewport(Ot);else{let ce=u.getViewSubImage(d,Ot);ae=ce.viewport,Ut===0&&(t.setRenderTargetTextures(S,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(S))}let Wt=y[Ut];Wt===void 0&&(Wt=new Se,Wt.layers.enable(Ut),Wt.viewport=new le,y[Ut]=Wt),Wt.matrix.fromArray(Ot.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ot.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ut===0&&(C.matrix.copy(Wt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),st===!0&&C.cameras.push(Wt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Ut=u.getDepthInformation(xt[0]);Ut&&Ut.isValid&&Ut.texture&&A.init(t,Ut,s.renderState)}}for(let xt=0;xt<M.length;xt++){let st=_[xt],Et=M[xt];st!==null&&Et!==void 0&&Et.update(st,J,c||a)}pt&&pt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let Zt=new Pc;Zt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}},Wn=new He,Ng=new $t;function Fg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Vc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,_)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=t.get(f),M=S.envMap,_=S.envMapRotation;M&&(p.envMap.value=M,Wn.copy(_),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Wn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let _=M.program;n.uniformBlockBinding(S,_)}function c(S,M){let _=s[S.id];_===void 0&&(m(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",p));let L=M.program;n.updateUBOMapping(S,L);let b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){let M=u();S.__bindingPointIndex=M;let _=i.createBuffer(),L=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let M=s[S.id],_=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,E=_.length;b<E;b++){let V=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,C=V.length;y<C;y++){let w=V[y];if(g(w,b,y,L)===!0){let G=w.__offset,O=Array.isArray(w.value)?w.value:[w.value],R=0;for(let H=0;H<O.length;H++){let D=O[H],Y=A(D);typeof D=="number"||typeof D=="boolean"?(w.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,G+R,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=0,w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=0,w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=0):(D.toArray(w.__data,R),R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,M,_,L){let b=S.value,E=M+"_"+_;if(L[E]===void 0)return typeof b=="number"||typeof b=="boolean"?L[E]=b:L[E]=b.clone(),!0;{let V=L[E];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return L[E]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function m(S){let M=S.uniforms,_=0,L=16;for(let E=0,V=M.length;E<V;E++){let y=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,w=y.length;C<w;C++){let G=y[C],O=Array.isArray(G.value)?G.value:[G.value];for(let R=0,H=O.length;R<H;R++){let D=O[R],Y=A(D),q=_%L,$=q%Y.boundary,at=q+$;_+=$,at!==0&&L-at<Y.storage&&(_+=L-at),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=Y.storage}}}let b=_%L;return b>0&&(_+=L-b),S.__size=_,S.__cache={},this}function A(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var er=class{constructor(t={}){let{canvas:e=qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),A=new Int32Array(4),p=null,f=null,S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Vn,this.toneMappingExposure=1;let _=this,L=!1,b=0,E=0,V=null,y=-1,C=null,w=new le,G=new le,O=null,R=new Tt(0),H=0,D=e.width,Y=e.height,q=1,$=null,at=null,pt=new le(0,0,D,Y),Pt=new le(0,0,D,Y),Zt=!1,X=new ts,J=!1,xt=!1,st=new $t,Et=new $t,Ut=new F,Ot=new le,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ce(){return V===null?q:1}let N=n;function ze(v,P){return e.getContext(v,P)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){let P="webgl2";if(N=ze(P,v),N===null)throw ze(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let qt,Ht,St,ne,Mt,I,x,B,Q,K,Z,vt,rt,ht,Xt,tt,ut,bt,Rt,ft,Gt,Ft,te,T;function it(){qt=new tp(N),qt.init(),Ft=new Pg(N,qt),Ht=new Zd(N,qt,t,Ft),St=new Tg(N,qt),Ht.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),ne=new ip(N),Mt=new mg,I=new Vg(N,qt,St,Mt,Ht,Ft,ne),x=new jd(_),B=new $d(_),Q=new cu(N),te=new Xd(N,Q),K=new ep(N,Q,ne,te),Z=new rp(N,K,Q,ne),Rt=new sp(N,Ht,I),tt=new Qd(Mt),vt=new gg(_,x,B,qt,Ht,te,tt),rt=new Fg(_,Mt),ht=new xg,Xt=new Mg(qt),bt=new Wd(_,x,B,St,Z,g,l),ut=new Eg(_,Z,Ht),T=new Bg(N,ne,Ht,St),ft=new Yd(N,qt,ne),Gt=new np(N,qt,ne),ne.programs=vt.programs,_.capabilities=Ht,_.extensions=qt,_.properties=Mt,_.renderLists=ht,_.shadowMap=ut,_.state=St,_.info=ne}it();let W=new so(_,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=qt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(D,Y,!1))},this.getSize=function(v){return v.set(D,Y)},this.setSize=function(v,P,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=v,Y=P,e.width=Math.floor(v*q),e.height=Math.floor(P*q),z===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(D*q,Y*q).floor()},this.setDrawingBufferSize=function(v,P,z){D=v,Y=P,q=z,e.width=Math.floor(v*z),e.height=Math.floor(P*z),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(pt)},this.setViewport=function(v,P,z,k){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,P,z,k),St.viewport(w.copy(pt).multiplyScalar(q).round())},this.getScissor=function(v){return v.copy(Pt)},this.setScissor=function(v,P,z,k){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,P,z,k),St.scissor(G.copy(Pt).multiplyScalar(q).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(v){St.setScissorTest(Zt=v)},this.setOpaqueSort=function(v){$=v},this.setTransparentSort=function(v){at=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(v=!0,P=!0,z=!0){let k=0;if(v){let U=!1;if(V!==null){let et=V.texture.format;U=et===Lo||et===Uo||et===Po}if(U){let et=V.texture.type,lt=et===An||et===Jn||et===$i||et===Ri||et===To||et===Ro,gt=bt.getClearColor(),mt=bt.getClearAlpha(),Vt=gt.r,Dt=gt.g,At=gt.b;lt?(m[0]=Vt,m[1]=Dt,m[2]=At,m[3]=mt,N.clearBufferuiv(N.COLOR,0,m)):(A[0]=Vt,A[1]=Dt,A[2]=At,A[3]=mt,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}P&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Xt.dispose(),Mt.dispose(),x.dispose(),B.dispose(),Z.dispose(),te.dispose(),T.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Go),W.removeEventListener("sessionend",Wo),On.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let v=ne.autoReset,P=ut.enabled,z=ut.autoUpdate,k=ut.needsUpdate,U=ut.type;it(),ne.autoReset=v,ut.enabled=P,ut.autoUpdate=z,ut.needsUpdate=k,ut.type=U}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Lt(v){let P=v.target;P.removeEventListener("dispose",Lt),oe(P)}function oe(v){ve(v),Mt.remove(v)}function ve(v){let P=Mt.get(v).programs;P!==void 0&&(P.forEach(function(z){vt.releaseProgram(z)}),v.isShaderMaterial&&vt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,z,k,U,et){P===null&&(P=ae);let lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=Jc(v,P,z,k,U);St.setMaterial(k,lt);let mt=z.index,Vt=1;if(k.wireframe===!0){if(mt=K.getWireframeAttribute(z),mt===void 0)return;Vt=2}let Dt=z.drawRange,At=z.attributes.position,Yt=Dt.start*Vt,ee=(Dt.start+Dt.count)*Vt;et!==null&&(Yt=Math.max(Yt,et.start*Vt),ee=Math.min(ee,(et.start+et.count)*Vt)),mt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,mt.count)):At!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,At.count));let ie=ee-Yt;if(ie<0||ie===1/0)return;te.setup(U,k,gt,z,mt);let we,Qt=ft;if(mt!==null&&(we=Q.get(mt),Qt=Gt,Qt.setIndex(we)),U.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*ce()),Qt.setMode(N.LINES)):Qt.setMode(N.TRIANGLES);else if(U.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),St.setLineWidth(Ct*ce()),U.isLineSegments?Qt.setMode(N.LINES):U.isLineLoop?Qt.setMode(N.LINE_LOOP):Qt.setMode(N.LINE_STRIP)}else U.isPoints?Qt.setMode(N.POINTS):U.isSprite&&Qt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ct=U._multiDrawStarts,an=U._multiDrawCounts,jt=U._multiDrawCount,We=mt?Q.get(mt).bytesPerElement:1,ii=Mt.get(k).currentProgram.getUniforms();for(let De=0;De<jt;De++)ii.setValue(N,"_gl_DrawID",De),Qt.render(Ct[De]/We,an[De])}else if(U.isInstancedMesh)Qt.renderInstances(Yt,ie,U.count);else if(z.isInstancedBufferGeometry){let Ct=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,an=Math.min(z.instanceCount,Ct);Qt.renderInstances(Yt,ie,an)}else Qt.render(Yt,ie)};function Jt(v,P,z){v.transparent===!0&&v.side===pn&&v.forceSinglePass===!1?(v.side=Pe,v.needsUpdate=!0,cs(v,P,z),v.side=Pn,v.needsUpdate=!0,cs(v,P,z),v.side=pn):cs(v,P,z)}this.compile=function(v,P,z=null){z===null&&(z=v),f=Xt.get(z),f.init(P),M.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==z&&v.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let k=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let et=U.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){let gt=et[lt];Jt(gt,z,U),k.add(gt)}else Jt(et,z,U),k.add(et)}),M.pop(),f=null,k},this.compileAsync=function(v,P,z=null){let k=this.compile(v,P,z);return new Promise(U=>{function et(){if(k.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(v);return}setTimeout(et,10)}qt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ge=null;function rn(v){Ge&&Ge(v)}function Go(){On.stop()}function Wo(){On.start()}let On=new Pc;On.setAnimationLoop(rn),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(v){Ge=v,W.setAnimationLoop(v),v===null?On.stop():On.start()},W.addEventListener("sessionstart",Go),W.addEventListener("sessionend",Wo),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,P,V),f=Xt.get(v,M.length),f.init(P),M.push(f),Et.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(Et),xt=this.localClippingEnabled,J=tt.init(this.clippingPlanes,xt),p=ht.get(v,S.length),p.init(),S.push(p),W.enabled===!0&&W.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&Ir(et,P,-1/0,_.sortObjects)}Ir(v,P,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort($,at),Wt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Wt&&bt.addToRenderList(p,v),this.info.render.frame++,J===!0&&tt.beginShadows();let z=f.state.shadowsArray;ut.render(z,v,P),J===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=p.opaque,U=p.transmissive;if(f.setupLights(),P.isArrayCamera){let et=P.cameras;if(U.length>0)for(let lt=0,gt=et.length;lt<gt;lt++){let mt=et[lt];Yo(k,U,v,mt)}Wt&&bt.render(v);for(let lt=0,gt=et.length;lt<gt;lt++){let mt=et[lt];Xo(p,v,mt,mt.viewport)}}else U.length>0&&Yo(k,U,v,P),Wt&&bt.render(v),Xo(p,v,P);V!==null&&(I.updateMultisampleRenderTarget(V),I.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(_,v,P),te.resetDefaultState(),y=-1,C=null,M.pop(),M.length>0?(f=M[M.length-1],J===!0&&tt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ir(v,P,z,k){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){k&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Et);let lt=Z.update(v),gt=v.material;gt.visible&&p.push(v,lt,gt,z,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let lt=Z.update(v),gt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(Et)),Array.isArray(gt)){let mt=lt.groups;for(let Vt=0,Dt=mt.length;Vt<Dt;Vt++){let At=mt[Vt],Yt=gt[At.materialIndex];Yt&&Yt.visible&&p.push(v,lt,Yt,z,Ot.z,At)}}else gt.visible&&p.push(v,lt,gt,z,Ot.z,null)}}let et=v.children;for(let lt=0,gt=et.length;lt<gt;lt++)Ir(et[lt],P,z,k)}function Xo(v,P,z,k){let U=v.opaque,et=v.transmissive,lt=v.transparent;f.setupLightsView(z),J===!0&&tt.setGlobalState(_.clippingPlanes,z),k&&St.viewport(w.copy(k)),U.length>0&&ls(U,P,z),et.length>0&&ls(et,P,z),lt.length>0&&ls(lt,P,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Yo(v,P,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Ee(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Ke:An,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));let et=f.state.transmissionRenderTarget[k.id],lt=k.viewport||w;et.setSize(lt.z,lt.w);let gt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(R),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&bt.render(z);let mt=_.toneMapping;_.toneMapping=Vn;let Vt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),J===!0&&tt.setGlobalState(_.clippingPlanes,k),ls(v,z,k),I.updateMultisampleRenderTarget(et),I.updateRenderTargetMipmap(et),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let At=0,Yt=P.length;At<Yt;At++){let ee=P[At],ie=ee.object,we=ee.geometry,Qt=ee.material,Ct=ee.group;if(Qt.side===pn&&ie.layers.test(k.layers)){let an=Qt.side;Qt.side=Pe,Qt.needsUpdate=!0,Zo(ie,z,k,we,Qt,Ct),Qt.side=an,Qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(I.updateMultisampleRenderTarget(et),I.updateRenderTargetMipmap(et))}_.setRenderTarget(gt),_.setClearColor(R,H),Vt!==void 0&&(k.viewport=Vt),_.toneMapping=mt}function ls(v,P,z){let k=P.isScene===!0?P.overrideMaterial:null;for(let U=0,et=v.length;U<et;U++){let lt=v[U],gt=lt.object,mt=lt.geometry,Vt=k===null?lt.material:k,Dt=lt.group;gt.layers.test(z.layers)&&Zo(gt,P,z,mt,Vt,Dt)}}function Zo(v,P,z,k,U,et){v.onBeforeRender(_,P,z,k,U,et),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(_,P,z,k,v,et),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,_.renderBufferDirect(z,P,k,U,v,et),U.side=Pn,U.needsUpdate=!0,_.renderBufferDirect(z,P,k,U,v,et),U.side=pn):_.renderBufferDirect(z,P,k,U,v,et),v.onAfterRender(_,P,z,k,U,et)}function cs(v,P,z){P.isScene!==!0&&(P=ae);let k=Mt.get(v),U=f.state.lights,et=f.state.shadowsArray,lt=U.state.version,gt=vt.getParameters(v,U.state,et,P,z),mt=vt.getProgramCacheKey(gt),Vt=k.programs;k.environment=v.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(v.isMeshStandardMaterial?B:x).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Vt===void 0&&(v.addEventListener("dispose",Lt),Vt=new Map,k.programs=Vt);let Dt=Vt.get(mt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===lt)return jo(v,gt),Dt}else gt.uniforms=vt.getUniforms(v),v.onBeforeCompile(gt,_),Dt=vt.acquireProgram(gt,mt),Vt.set(mt,Dt),k.uniforms=gt.uniforms;let At=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=tt.uniform),jo(v,gt),k.needsLights=th(v),k.lightsStateVersion=lt,k.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Qo(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Si.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function jo(v,P){let z=Mt.get(v);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function Jc(v,P,z,k,U){P.isScene!==!0&&(P=ae),I.resetTextureUnits();let et=P.fog,lt=k.isMeshStandardMaterial?P.environment:null,gt=V===null?_.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Fi,mt=(k.isMeshStandardMaterial?B:x).get(k.envMap||lt),Vt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!z.morphAttributes.position,Yt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color,ie=Vn;k.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ie=_.toneMapping);let we=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=we!==void 0?we.length:0,Ct=Mt.get(k),an=f.state.lights;if(J===!0&&(xt===!0||v!==C)){let ke=v===C&&k.id===y;tt.setState(k,v,ke)}let jt=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==an.state.version||Ct.outputColorSpace!==gt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==mt||k.fog===!0&&Ct.fog!==et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==tt.numPlanes||Ct.numIntersection!==tt.numIntersection)||Ct.vertexAlphas!==Vt||Ct.vertexTangents!==Dt||Ct.morphTargets!==At||Ct.morphNormals!==Yt||Ct.morphColors!==ee||Ct.toneMapping!==ie||Ct.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,Ct.__version=k.version);let We=Ct.currentProgram;jt===!0&&(We=cs(k,P,U));let ii=!1,De=!1,ki=!1,se=We.getUniforms(),Je=Ct.uniforms;if(St.useProgram(We.program)&&(ii=!0,De=!0,ki=!0),k.id!==y&&(y=k.id,De=!0),ii||C!==v){St.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),Gh(st),Wh(st),se.setValue(N,"projectionMatrix",st)):se.setValue(N,"projectionMatrix",v.projectionMatrix),se.setValue(N,"viewMatrix",v.matrixWorldInverse);let Cn=se.map.cameraPosition;Cn!==void 0&&Cn.setValue(N,Ut.setFromMatrixPosition(v.matrixWorld)),Ht.logarithmicDepthBuffer&&se.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&se.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),C!==v&&(C=v,De=!0,ki=!0)}if(U.isSkinnedMesh){se.setOptional(N,U,"bindMatrix"),se.setOptional(N,U,"bindMatrixInverse");let ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),se.setValue(N,"boneTexture",ke.boneTexture,I))}U.isBatchedMesh&&(se.setOptional(N,U,"batchingTexture"),se.setValue(N,"batchingTexture",U._matricesTexture,I),se.setOptional(N,U,"batchingIdTexture"),se.setValue(N,"batchingIdTexture",U._indirectTexture,I),se.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&se.setValue(N,"batchingColorTexture",U._colorsTexture,I));let qi=z.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Rt.update(U,z,We),(De||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,se.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Je.envMap.value=mt,Je.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Je.envMapIntensity.value=P.environmentIntensity),De&&(se.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&$c(Je,ki),et&&k.fog===!0&&rt.refreshFogUniforms(Je,et),rt.refreshMaterialUniforms(Je,k,q,Y,f.state.transmissionRenderTarget[v.id]),Si.upload(N,Qo(Ct),Je,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Si.upload(N,Qo(Ct),Je,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&se.setValue(N,"center",U.center),se.setValue(N,"modelViewMatrix",U.modelViewMatrix),se.setValue(N,"normalMatrix",U.normalMatrix),se.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let ke=k.uniformsGroups;for(let Cn=0,_n=ke.length;Cn<_n;Cn++){let Ko=ke[Cn];T.update(Ko,We),T.bind(Ko,We)}}return We}function $c(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function th(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,P,z){Mt.get(v.texture).__webglTexture=P,Mt.get(v.depthTexture).__webglTexture=z;let k=Mt.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){let z=Mt.get(v);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,z=0){V=v,b=P,E=z;let k=!0,U=null,et=!1,lt=!1;if(v){let mt=Mt.get(v);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(mt.__hasExternalTextures)I.rebindTextures(v,Mt.get(v.texture).__webglTexture,Mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let At=v.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&Mt.has(At)&&(v.width!==At.image.width||v.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}let Vt=v.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(lt=!0);let Dt=Mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?U=Dt[P][z]:U=Dt[P],et=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?U=Mt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[z]:U=Dt,w.copy(v.viewport),G.copy(v.scissor),O=v.scissorTest}else w.copy(pt).multiplyScalar(q).floor(),G.copy(Pt).multiplyScalar(q).floor(),O=Zt;if(St.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&St.drawBuffers(v,U),St.viewport(w),St.scissor(G),St.setScissorTest(O),et){let mt=Mt.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,z)}else if(lt){let mt=Mt.get(v.texture),Vt=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,z||0,Vt)}y=-1},this.readRenderTargetPixels=function(v,P,z,k,U,et,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){St.bindFramebuffer(N.FRAMEBUFFER,gt);try{let mt=v.texture,Vt=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-k&&z>=0&&z<=v.height-U&&N.readPixels(P,z,k,U,Ft.convert(Vt),Ft.convert(Dt),et)}finally{let mt=V!==null?Mt.get(V).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,P,z,k,U,et,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let mt=v.texture,Vt=mt.format,Dt=mt.type;if(!Ht.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-k&&z>=0&&z<=v.height-U){St.bindFramebuffer(N.FRAMEBUFFER,gt);let At=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(P,z,k,U,Ft.convert(Vt),Ft.convert(Dt),0);let Yt=V!==null?Mt.get(V).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,Yt);let ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hh(N,ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,At),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(At),N.deleteSync(ee),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,z=0){v.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);let k=Math.pow(2,-z),U=Math.floor(v.image.width*k),et=Math.floor(v.image.height*k),lt=P!==null?P.x:0,gt=P!==null?P.y:0;I.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,lt,gt,U,et),St.unbindTexture()},this.copyTextureToTexture=function(v,P,z=null,k=null,U=0){v.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],P=arguments[2],U=arguments[3]||0,z=null);let et,lt,gt,mt,Vt,Dt,At,Yt,ee,ie=v.isCompressedTexture?v.mipmaps[U]:v.image;z!==null?(et=z.max.x-z.min.x,lt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,mt=z.min.x,Vt=z.min.y,Dt=z.isBox3?z.min.z:0):(et=ie.width,lt=ie.height,gt=ie.depth||1,mt=0,Vt=0,Dt=0),k!==null?(At=k.x,Yt=k.y,ee=k.z):(At=0,Yt=0,ee=0);let we=Ft.convert(P.format),Qt=Ft.convert(P.type),Ct;P.isData3DTexture?(I.setTexture3D(P,0),Ct=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(I.setTexture2DArray(P,0),Ct=N.TEXTURE_2D_ARRAY):(I.setTexture2D(P,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let an=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),We=N.getParameter(N.UNPACK_SKIP_PIXELS),ii=N.getParameter(N.UNPACK_SKIP_ROWS),De=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ie.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Dt);let ki=v.isDataArrayTexture||v.isData3DTexture,se=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Je=Mt.get(v),qi=Mt.get(P),ke=Mt.get(Je.__renderTarget),Cn=Mt.get(qi.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,ke.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let _n=0;_n<gt;_n++)ki&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(v).__webglTexture,U,Dt+_n),v.isDepthTexture?(se&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,U,ee+_n),N.blitFramebuffer(mt,Vt,et,lt,At,Yt,et,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):se?N.copyTexSubImage3D(Ct,U,At,Yt,ee+_n,mt,Vt,et,lt):N.copyTexSubImage2D(Ct,U,At,Yt,ee+_n,mt,Vt,et,lt);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else se?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ct,U,At,Yt,ee,et,lt,gt,we,Qt,ie.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,U,At,Yt,ee,et,lt,gt,we,ie.data):N.texSubImage3D(Ct,U,At,Yt,ee,et,lt,gt,we,Qt,ie):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,At,Yt,et,lt,we,Qt,ie.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,At,Yt,ie.width,ie.height,we,ie.data):N.texSubImage2D(N.TEXTURE_2D,U,At,Yt,et,lt,we,Qt,ie);N.pixelStorei(N.UNPACK_ROW_LENGTH,an),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,ii),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De),U===0&&P.generateMipmaps&&N.generateMipmap(Ct),St.unbindTexture()},this.copyTextureToTexture3D=function(v,P,z=null,k=null,U=0){return v.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,v=arguments[2],P=arguments[3],U=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,z,k,U)},this.initRenderTarget=function(v){Mt.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){b=0,E=0,V=null,St.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}};var nr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ro=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ci=new $t,cc=new $t,Ps=[],hc=new xn,Og=new $t,Zi=new xe,Qi=new Ln,rr=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Og)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),hc.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(hc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),Qi.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(Qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),t.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),cc.multiplyMatrices(n,Ci),Zi.matrixWorld=cc,Zi.raycast(t,Ps);for(let a=0,o=Ps.length;a<o;a++){let l=Ps[a];l.instanceId=r,l.object=this,e.push(l)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,Vo,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var es=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uc=new $t,ao=new Xs,Us=new Ln,Ls=new F,ar=class extends Ie{constructor(t=new Le,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;uc.copy(s).invert(),ao.copy(t.ray).applyMatrix4(uc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=d,A=g;m<A;m++){let p=c.getX(m);Ls.fromBufferAttribute(u,p),fc(Ls,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=d,A=g;m<A;m++)Ls.fromBufferAttribute(u,m),fc(Ls,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fc(i,t,e,n,s,r,a){let o=ao.distanceSqToPoint(i);if(o<e){let l=new F;ao.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Nn=class extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],g=[],m=0,A=[],p=n/2,f=0;S(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(g,2));function S(){let _=new F,L=new F,b=0,E=(e-t)/n;for(let V=0;V<=r;V++){let y=[],C=V/r,w=C*(e-t)+t;for(let G=0;G<=s;G++){let O=G/s,R=O*l+o,H=Math.sin(R),D=Math.cos(R);L.x=w*H,L.y=-C*n+p,L.z=w*D,u.push(L.x,L.y,L.z),_.set(H,E,D).normalize(),d.push(_.x,_.y,_.z),g.push(O,1-C),y.push(m++)}A.push(y)}for(let V=0;V<s;V++)for(let y=0;y<r;y++){let C=A[y][V],w=A[y+1][V],G=A[y+1][V+1],O=A[y][V+1];(t>0||y!==0)&&(h.push(C,w,O),b+=3),(e>0||y!==r-1)&&(h.push(w,G,O),b+=3)}c.addGroup(f,b,0),f+=b}function M(_){let L=m,b=new wt,E=new F,V=0,y=_===!0?t:e,C=_===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,p*C,0),d.push(0,C,0),g.push(.5,.5),m++;let w=m;for(let G=0;G<=s;G++){let R=G/s*l+o,H=Math.cos(R),D=Math.sin(R);E.x=y*D,E.y=p*C,E.z=y*H,u.push(E.x,E.y,E.z),d.push(0,C,0),b.x=H*.5+.5,b.y=D*.5*C+.5,g.push(b.x,b.y),m++}for(let G=0;G<s;G++){let O=L+G,R=w+G;_===!0?h.push(R,R+1,O):h.push(R+1,R,O),V+=3}c.addGroup(f,V,_===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class i extends Di{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ns=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,d=new F,g=[],m=[],A=[],p=[];for(let f=0;f<=n;f++){let S=[],M=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let b=L/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),p.push(b+_,1-M),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let M=h[f][S+1],_=h[f][S],L=h[f+1][S],b=h[f+1][S+1];(f!==0||a>0)&&g.push(M,_,b),(f!==n-1||l<Math.PI)&&g.push(_,L,b)}this.setIndex(g),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(A,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lr=class extends fe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var is=class extends Dn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ds(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dl,endingEnd:dl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pl:r=t,o=2*e-n;break;case gl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pl:a=t,l=2*n-e;break;case gl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,g=this._weightNext,m=(n-e)/(s-e),A=m*m,p=A*m,f=-d*p+2*d*A-d*m,S=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*m+1,M=(-1-g)*p+(1.5+g)*A+.5*m,_=g*p-g*A;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+S*a[c+L]+M*a[l+L]+_*a[u+L];return r}},lo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},co=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&zg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,g=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[g+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[u+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=ka;var ti=class extends je{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ks;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends je{};ho.prototype.ValueTypeName="color";var uo=class extends je{};uo.prototype.ValueTypeName="number";var fo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},cr=class extends je{InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends je{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=ks;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends je{};po.prototype.ValueTypeName="vector";var go=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let g=c[u],m=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return m}return null}}},kg=new go,mo=class{constructor(t){this.manager=t!==void 0?t:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ur=class extends hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ea=new $t,dc=new F,pc=new F,Ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xo=class extends Ao{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var dr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gc(){return performance.now()}var No="\\[\\]\\.:\\/",qg=new RegExp("["+No+"]","g"),Fo="[^"+No+"]",Hg="[^"+No.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",Fo),Wg=/(WCOD+)?/.source.replace("WCOD",Hg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),Zg=new RegExp("^"+Gg+Wg+Xg+Yg+"$"),Qg=["material","materials","bones","map"],vo=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qg,"")}static parseTrackName(t){let e=Zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=vo;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);var Ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Oe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jg=new Li(-1,1,1,-1,0,1),Bo=class extends Le{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},Kg=new Bo,Bn=class{constructor(t){this._mesh=new xe(Kg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Oi=class extends Oe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fn.clone(t.uniforms),this.material=new fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rs=class extends Oe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xr=class extends Oe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new wt);this._width=n.width,this._height=n.height,e=new Ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oi(Ar),this.copyPass.material.blending=nn,this.clock=new dr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rs!==void 0&&(a instanceof rs?n=!0:a instanceof xr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cr=class extends Oe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Bc={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zi=class i extends Oe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ee(r,a,{type:Ke}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ee(r,a,{type:Ke});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let g=new Ee(r,a,{type:Ke});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}let o=Bc;this.highPassUniforms=Fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ar;this.copyUniforms=Fn.clone(h.uniforms),this.blendMaterial=new fe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new Pi,this.fsQuad=new Bn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new fe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zi.BlurDirectionX=new wt(1,0);zi.BlurDirectionY=new wt(0,1);var Oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var _r=class extends Oe{constructor(){super();let t=Oc;this.uniforms=Fn.clone(t.uniforms),this.material=new lr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Bn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===So?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=s=>{let r=n(s);if(s&&!s.__tw&&String(s.family).replace(/["']/g,"")==="Tajawal"){let a=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});a.__tw=1,a.load().then(()=>n(a)).catch(()=>{})}return r}}catch{}}if(typeof document!="undefined"&&!document.getElementById("tw-icons")){let i=document.createElement("style");i.id="tw-icons",i.textContent=`.tw-lock{display:inline-block;position:relative;width:.85em;height:.62em;background:linear-gradient(#f2f6fc,#b8c6dc);border-radius:.12em;vertical-align:-.04em;margin:.25em .2em 0}
.tw-lock::before{content:"";position:absolute;left:18%;top:-.42em;width:64%;height:.5em;border:.13em solid #c9d6ea;border-bottom:0;border-radius:.4em .4em 0 0;box-sizing:border-box}
.tw-lock::after{content:"";position:absolute;left:44%;top:.18em;width:12%;height:.22em;background:#5a6a88;border-radius:.1em}
.tw-star{display:inline-block;width:.95em;height:.95em;background:linear-gradient(#ffe680,#ffb300);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);vertical-align:-.12em;margin:0 .08em}
.tw-coin{display:inline-block;width:.88em;height:.88em;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff1a8,#f5b400 60%,#c98400);border:.09em solid #b87400;box-sizing:border-box;vertical-align:-.12em;margin:0 .1em;position:relative}
.tw-heart{display:inline-block;width:.9em;height:.82em;background:linear-gradient(#ff8aa0,#e8284a);clip-path:path('M.45em .8em C-.3em .25 .1em -.15em .45em .2em C.8em -.15em 1.2em .25em .45em .8em');vertical-align:-.1em;margin:0 .1em;clip-path:polygon(50% 100%,8% 55%,0 30%,10% 8%,30% 0,50% 18%,70% 0,90% 8%,100% 30%,92% 55%)}
.tw-pause{display:inline-block;width:.8em;height:.8em;vertical-align:-.1em;background:linear-gradient(90deg,#fff 0 36%,transparent 36% 64%,#fff 64% 100%);border-radius:.1em;margin:0 .05em}
.tw-up{display:inline-block;width:.8em;height:.9em;background:linear-gradient(#fff,#d8e8ff);clip-path:polygon(50% 0,100% 50%,66% 50%,66% 100%,34% 100%,34% 50%,0 50%);vertical-align:-.1em;margin:0 .1em}
.tw-flag{display:inline-block;width:.85em;height:.9em;background:linear-gradient(90deg,#fff 0 12%,transparent 12%),linear-gradient(45deg,#222 25%,#fff 25% 50%,#222 50% 75%,#fff 75%);background-size:100% 100%,.3em .3em;clip-path:polygon(0 0,100% 10%,100% 60%,12% 70%,12% 100%,0 100%);vertical-align:-.1em;margin:0 .1em}
.tw-coin::after{content:"";position:absolute;inset:.17em;border:.07em solid rgba(150,90,0,.55);border-radius:50%}`,document.head.appendChild(i);let t=/(\u{1F512}|\u2B50|\u{1FA99}|\u2764|\u23F8|\u2B06|\u{1F3C1})\uFE0F?/gu,e={"\u{1F512}":"tw-lock","\u2B50":"tw-star","\u{1FA99}":"tw-coin","\u2764":"tw-heart","\u23F8":"tw-pause","\u2B06":"tw-up","\u{1F3C1}":"tw-flag"},n=()=>{if(!document.body)return;let o=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),l=[];for(let c=o.nextNode();c;c=o.nextNode()){let h=c.parentNode;h&&/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(h.nodeName)||(t.lastIndex=0,t.test(c.nodeValue)&&l.push(c))}for(let c of l){let h=document.createDocumentFragment(),u=0,d=c.nodeValue;t.lastIndex=0;let g;for(;g=t.exec(d);){g.index>u&&h.append(d.slice(u,g.index));let m=document.createElement("span");m.className=e[g[1]],h.append(m),u=g.index+g[0].length}u<d.length&&h.append(d.slice(u)),c.parentNode.replaceChild(h,c)}},s=0,r=()=>{s||(s=setTimeout(()=>{s=0,n()},30))},a=()=>{new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0,characterData:!0}),n()};document.body?a():document.addEventListener("DOMContentLoaded",a)}var zc={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Jg={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},$g={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function tm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new Le;l.setAttribute("position",new be(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Nn(c);d.colorSpace=me;let g=new es({map:d,color:$g[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:bi,fog:!1,sizeAttenuation:!0}),m=new ar(l,g);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function em(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var kc={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},nm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,im=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,sm={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},qc={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=sm[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(qc[t]||-1e9)<n||(qc[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function rm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=p=>{if(!n[p]){let f=new Audio(`${e}${p}_${t}.mp3`);f.preload="auto",f.volume=.95,n[p]=f}return n[p]},u=(p,f)=>{let S=performance.now();if(!f&&S-r<6e3||c)return;let M=p+(1+Math.floor(Math.random()*kc[p])),_=h(M);c=!0,r=S,_.currentTime=0;let L=()=>{c=!1};_.onended=L,_.onerror=L;let b=_.play();b&&b.catch&&b.catch(L),setTimeout(L,4e3)};window.__cheer=(p,f)=>{kc[p]&&(o=!0,u(p,!!f))};let d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let p=s.createOscillator(),f=s.createGain();p.type="sine",p.frequency.setValueAtTime(520,s.currentTime),p.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),p.connect(f),f.connect(s.destination),p.start(),p.stop(s.currentTime+.13)}catch{}},g=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",g,{passive:!0}),window.addEventListener("keydown",g,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let p=(i.innerText||"").slice(0,600);p!==m&&(m=p,nm.test(p)?u("win",!1):im.test(p)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let p=performance.now();!o||document.hidden||(p-a>14e3?(u("idle",!1),a=p-4e3):p-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Hc(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},zc[e.get("look")||t.preset||"warm"]||zc.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,g=0,m=0,A=0,p=!1,f=performance.now();function S(M,_){let L=i.getSize(new wt);g=L.x,m=L.y,A=i.getPixelRatio(),c=new vr(i),c.setPixelRatio(A),c.setSize(g,m),h=new Cr(M,_),c.addPass(h),s||(u=new zi(new wt(Math.max(2,g>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new _r),d=new Oi(Jg),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(M,_){if(p||i.getRenderTarget()!==null||i.autoClear===!1||!M||!_||!M.isScene)return a(M,_);try{c||S(M,_);let L=i.getSize(new wt),b=i.getPixelRatio();(L.x!==g||L.y!==m||b!==A)&&(g=L.x,m=L.y,A=b,c.setPixelRatio(b),c.setSize(g,m),u&&u.resolution.set(Math.max(2,g>>1),Math.max(2,m>>1))),h.scene=M,h.camera=_,d.uniforms.time.value=(performance.now()-f)/1e3;let E=performance.now(),V=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let y=o.get(M);y||(y=tm(M,_,e.get("look")||t.preset||"warm",r),o.set(M,y)),em(y,_,V)}p=!0,c.render(),p=!1}catch(L){p=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",L&&L.message),i.render=a,a(M,_)}},!e.has("nocheer")&&!r&&setTimeout(()=>rm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var os=Math.PI*2,Oo=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ni={hills:{sky:["#5cc8ff","#d4f4ff"],top:"#58c84a",topD:"#3a9a34",dirt:"#c07a3c",dirtD:"#9a5c2a",brick:"#e07a3a",brickD:"#a8501e",pipe:"#3ac858",pipeD:"#1e8a38",castle:"#e8d8c0"},cave:{sky:["#1c1438","#3a2a66"],top:"#9a8ae0",topD:"#6a58b8",dirt:"#5a4a8a",dirtD:"#40336a",brick:"#6a8ae0",brickD:"#3e56a8",pipe:"#26c8b8",pipeD:"#16887c",castle:"#8a7ac8"},desert:{sky:["#ffb468","#ffeabc"],top:"#f8dc8a",topD:"#e0b860",dirt:"#dca454",dirtD:"#b87c30",brick:"#f0b848",brickD:"#b87c18",pipe:"#d86a4a",pipeD:"#a03e24",castle:"#f0d090"},snow:{sky:["#a8d0f0","#f4faff"],top:"#ffffff",topD:"#c8e0f4",dirt:"#9cc4e8",dirtD:"#7aa4d0",brick:"#78d0f0",brickD:"#3a98c8",pipe:"#8ad8ff",pipeD:"#4a9ac8",castle:"#dcecfa"}};function as(i,t){let e=document.createElement("canvas");return e.width=e.height=i,t(e.getContext("2d"),i),e}function Wc(i,t){let e=ni[t]||ni.hills,n=(c,h)=>{c.fillStyle=e.dirt,c.fillRect(0,0,h,h),c.fillStyle=e.dirtD;for(let u=0;u<6;u++)c.beginPath(),c.arc(Oo(u+1)*h,Oo(u+9)*h,h*(.04+Oo(u+3)*.05),0,os),c.fill();t==="desert"&&(c.fillRect(0,h*.48,h,h*.04),c.fillRect(h*.5,0,h*.04,h*.48),c.fillRect(h*.25,h*.52,h*.04,h*.48)),t==="snow"&&(c.strokeStyle="#d8ecff",c.lineWidth=h*.04,c.beginPath(),c.moveTo(h*.2,h*.1),c.lineTo(h*.45,h*.5),c.lineTo(h*.35,h*.9),c.stroke()),t==="cave"&&(c.fillStyle="#7ae8f0",c.fillRect(h*.62,h*.3,h*.06,h*.1),c.fillRect(h*.2,h*.7,h*.05,h*.08))},s=as(i,(c,h)=>{n(c,h),c.fillStyle=e.top,c.fillRect(0,0,h,h*.26);for(let u=0;u<4;u++)c.beginPath(),c.arc(h*(.125+u*.25),h*.26,h*.125,0,Math.PI),c.fill();if(c.fillStyle=e.topD,c.fillRect(0,h*.2,h,h*.03),c.fillStyle="rgba(255,255,255,.45)",c.fillRect(0,0,h,h*.05),t==="snow"){c.fillStyle="#fff",c.fillRect(0,0,h,h*.34);for(let u=0;u<4;u++)c.beginPath(),c.arc(h*(.125+u*.25),h*.34,h*.13,0,Math.PI),c.fill();c.fillStyle=e.topD,c.fillRect(0,h*.28,h,h*.025)}t==="cave"&&(c.fillStyle="#c8f8ff",c.fillRect(h*.3,h*.06,h*.05,h*.08))}),r=as(i,n),a=as(i,(c,h)=>{c.fillStyle=e.brick,c.fillRect(0,0,h,h),c.strokeStyle=e.brickD,c.lineWidth=h*.06,c.strokeRect(h*.03,h*.03,h*.94,h*.94),c.beginPath(),c.moveTo(0,h*.5),c.lineTo(h,h*.5),c.moveTo(h*.5,0),c.lineTo(h*.5,h*.5),c.moveTo(h*.25,h*.5),c.lineTo(h*.25,h),c.moveTo(h*.75,h*.5),c.lineTo(h*.75,h),c.stroke(),c.fillStyle="rgba(255,255,255,.35)",c.fillRect(h*.06,h*.06,h*.38,h*.05)}),o=as(i,(c,h)=>{let u=c.createLinearGradient(0,0,0,h);u.addColorStop(0,"#ffe45a"),u.addColorStop(1,"#ffa81a"),c.fillStyle=u,c.beginPath(),c.roundRect(h*.02,h*.02,h*.96,h*.96,h*.1),c.fill(),c.strokeStyle="#a85a08",c.lineWidth=h*.07,c.stroke(),c.fillStyle="#a85a08";for(let[d,g]of[[.14,.14],[.86,.14],[.14,.86],[.86,.86]])c.beginPath(),c.arc(h*d,h*g,h*.05,0,os),c.fill();c.font=`900 ${h*.68}px system-ui, sans-serif`,c.textAlign="center",c.textBaseline="middle",c.lineWidth=h*.1,c.strokeStyle="#a85a08",c.strokeText("?",h*.5,h*.55),c.fillStyle="#fff",c.fillText("?",h*.5,h*.55)}),l=as(i,(c,h)=>{c.fillStyle="#b09a78",c.beginPath(),c.roundRect(h*.02,h*.02,h*.96,h*.96,h*.1),c.fill(),c.strokeStyle="#6e5a3c",c.lineWidth=h*.07,c.stroke(),c.fillStyle="#6e5a3c";for(let[u,d]of[[.14,.14],[.86,.14],[.14,.86],[.86,.86]])c.beginPath(),c.arc(h*u,h*d,h*.05,0,os),c.fill()});return{top:s,dirt:r,brick:a,q:o,used:l}}function Gc(i,t,e,n,s,r,a,o=0){i.beginPath(),i.ellipse(t,e,n,s,o,0,os),r&&(i.fillStyle=r,i.fill()),a&&i.stroke()}function Xc(i,t,e,n,s,r){let a=Math.abs(Math.cos(s*4+r))*.34+.06;i.save(),i.translate(t,e),i.scale(n,n),Gc(i,0,0,a,.34,"#ffcf1a",!1),i.lineWidth=.05,i.strokeStyle="#b87808",i.beginPath(),i.ellipse(0,0,a,.34,0,0,os),i.stroke(),a>.18&&Gc(i,0,0,a*.55,.2,"#ffe86a",!1),i.restore()}var Zc=Math.PI*2,ko=12,dt={sph:new ns(.5,16,12),hem:new ns(.5,16,8,0,Zc,0,Math.PI/2),cyl:new Di(.5,.5,1,16),box:new $n(1,1,1),cone:new or(.5,1,12),coin:new Di(.5,.5,.14,18)},zo=new Map,It=(i,t=0,e={})=>{let n=`${i}|${t}|${JSON.stringify(e)}`;return zo.has(n)||zo.set(n,new is({color:i,emissive:t,...e})),zo.get(n)},yt=(i,t,e=0,n=0,s=0,r=1,a=1,o=1)=>{let l=new xe(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l},Qc=i=>new Tt(i),vn=i=>ko-i;function Yc(i,t,e){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.strokeStyle="rgba(0,0,0,.28)",s.lineWidth=6,s.strokeRect(3,3,122,122),s.fillStyle="rgba(255,255,255,.35)",s.fillRect(6,6,116,12),i&&(s.fillStyle=e,s.font="900 86px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.strokeStyle="rgba(0,0,0,.4)",s.lineWidth=8,s.strokeText(i,64,70),s.fillText(i,64,70));for(let[a,o]of[[14,14],[114,14],[14,114],[114,114]])s.fillStyle="rgba(0,0,0,.35)",s.beginPath(),s.arc(a,o,5,0,Zc),s.fill();let r=new Nn(n);return r.colorSpace=me,r}function am(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,128,128),n.fillStyle=i;for(let r=0;r<4;r++)for(let a=-1;a<2;a++){let o=a*64+(r%2?-32:0);n.fillRect(o+3,r*32+3,58,26)}n.fillStyle="rgba(255,255,255,.25)";for(let r=0;r<4;r++)for(let a=-1;a<2;a++)n.fillRect(a*64+(r%2?-32:0)+3,r*32+3,58,5);let s=new Nn(e);return s.colorSpace=me,s}function om(i){let t=new ue,e=new ue;t.add(e);let n=It(16747050),s=It(16773336),r=It(3807754),a=It(i?16730762:3112424),o=new ue;o.position.y=.46,e.add(o),o.add(yt(dt.sph,n,0,.06,0,.5,.5,.42)),o.add(yt(dt.sph,s,0,.04,.12,.34,.38,.26)),o.add(yt(dt.cyl,a,0,.3,0,.36,.1,.32));let l=new ue;l.position.set(0,0,-.22),o.add(l);let c=yt(dt.sph,n,0,.12,-.12,.2,.2,.5);c.rotation.x=-.6,l.add(c);let h=yt(dt.sph,s,0,.3,-.3,.2,.2,.22);l.add(h);let u=new ue;u.position.y=.58,o.add(u),u.add(yt(dt.sph,n,0,0,0,.62,.52,.52)),u.add(yt(dt.sph,s,0,-.1,.17,.34,.22,.28)),u.add(yt(dt.sph,r,0,-.03,.31,.1,.07,.07));for(let f of[-1,1]){let S=yt(dt.cone,n,f*.2,.34,-.02,.2,.34,.14);S.rotation.z=-f*.25,u.add(S),u.add(yt(dt.cone,It(16756896),f*.2,.32,.03,.11,.2,.05)).children.at(-1).rotation.z=-f*.25,u.add(yt(dt.sph,It(16777215),f*.13,.07,.21,.15,.18,.09)),u.add(yt(dt.sph,It(1447454),f*.13,.065,.26,.08,.11,.05)),u.add(yt(dt.sph,It(16777215),f*.12+.02,.1,.29,.03,.03,.02)),u.add(yt(dt.sph,It(16747146),f*.24,-.07,.17,.09,.06,.04))}if(i){u.add(yt(dt.sph,It(16730762),.2,.3,.08,.12,.12,.1));for(let f of[-1,1]){let S=yt(dt.cone,It(16730762),.2+f*.11,.3,.08,.14,.2,.08);S.rotation.z=-f*1.57,u.add(S)}}else u.add(yt(dt.box,It(16765498),0,.24,.12,.5,.07,.14));let d=(f,S,M,_,L,b)=>{let E=new ue;return E.position.set(f,S,0),E.add(yt(dt.cyl,_,0,-M/2,0,.15,M,.15)),E.add(b?yt(dt.sph,L,0,-M,.05,.2,.13,.3):yt(dt.sph,L,0,-M,0,.15,.15,.15)),E},g=d(-.3,.18,.28,n,s,!1),m=d(.3,.18,.28,n,s,!1);o.add(g,m);let A=d(-.14,.46,.4,n,r,!0),p=d(.14,.46,.4,n,r,!0);return e.add(A,p),t.userData={rig:e,torso:o,head:u,aL:g,aR:m,lL:A,lR:p,tail:l},t}function lm(){let i=new ue,t=new ue;i.add(t),t.add(yt(dt.sph,It(11561530),0,.42,0,.9,.78,.78)),t.add(yt(dt.hem,It(15247450),0,.5,0,.78,.5,.7));for(let n of[-1,1]){t.add(yt(dt.sph,It(16777215),n*.18,.5,.3,.26,.3,.16)),t.add(yt(dt.sph,It(1447454),n*.18,.48,.4,.12,.16,.08));let s=yt(dt.box,It(3807754),n*.2,.7,.36,.28,.06,.06);s.rotation.z=n*-.5,t.add(s)}let e=[yt(dt.sph,It(3807754),-.25,.08,.08,.3,.2,.4),yt(dt.sph,It(3807754),.25,.08,.08,.3,.2,.4)];return e.forEach(n=>i.add(n)),i.userData={body:t,f:e},i}function cm(){let i=new ue;i.add(yt(dt.cyl,It(16773336),0,.22,0,.36,.44,.36)),i.add(yt(dt.hem,It(10767080),0,.38,0,.9,.7,.9));for(let[t,e,n]of[[0,.86,.1],[-.28,.66,.28],[.3,.66,.24]])i.add(yt(dt.sph,It(16777215),t,e-.12,n,.2,.2,.12));for(let t of[-1,1])i.add(yt(dt.sph,It(1447454),t*.1,.28,.17,.06,.1,.04));return i}function hm(i){let t=new ue,e=It(Qc(i.castle).getHex()),n=It(15220778),s=It(3811882);t.add(yt(dt.box,e,0,1.6,0,4.2,3.2,2.6));for(let r of[-1,1])t.add(yt(dt.cyl,e,r*2.3,2.2,0,1.5,4.4,1.5)),t.add(yt(dt.cone,n,r*2.3,5.2,0,1.9,1.8,1.9));t.add(yt(dt.cyl,e,0,4.3,-.2,1.7,2.2,1.7)),t.add(yt(dt.cone,n,0,6.1,-.2,2.1,1.8,2.1)),t.add(yt(dt.box,s,0,.8,1.31,1.1,1.6,.06));for(let[r,a]of[[-1.4,2.2],[1.4,2.2],[-2.3,3.6],[2.3,3.6]])t.add(yt(dt.box,It(16770442,8413200),r,a,1.3,.5,.7,.05));return t}function um(i){let t=new ue,e=[],n=(o,l)=>{let c=new ue;return c.position.z=o,t.add(c),e.push({l:c,par:l}),c},s=i==="hills"?5816410:i==="cave"?4864650:i==="desert"?15249512:13625078,r=n(-26,.35),a=n(-12,.6);for(let o=0;o<40;o++)r.add(yt(dt.sph,It(s),o*13+Math.sin(o*7)*3,-1+o%3,0,16+o%4*4,7+o%3*2.5,6));for(let o=0;o<60;o++){let l=o*8+Math.sin(o*3)*2;if(i==="hills"||i==="snow"){let c=i==="snow";a.add(yt(dt.cyl,It(6965802),l,1,0,.5,2,.5)),a.add(yt(dt.cone,It(c?15267071:2792010),l,3.2+o%2*.3,0,2.2,3.4,2.2)),c&&a.add(yt(dt.cone,It(2783834),l,2.6,0,2.4,2.2,2.4))}else if(i==="desert")o%3===0?a.add(yt(dt.cone,It(15251560),l,3,0,6,6,6)):(a.add(yt(dt.cyl,It(3842138),l,1.1,0,.55,2.2,.55)),a.add(yt(dt.cyl,It(3842138),l+.5,1.6,0,.35,1,.35)));else{let c=1.5+o%4*.8,h=yt(dt.cone,It(o%2?7006424:15231704,o%2?1067588:4853828),l,c/2+3,0,.9,c,.9);h.rotation.z=Math.sin(o)*.25,a.add(h)}}if(i!=="cave"){let o=n(-34,.18);for(let l=0;l<40;l++){let c=l*14+l%3*3,h=13+l%4*2;for(let[u,d,g]of[[0,0,3],[2.4,-.4,2.4],[-2.4,-.5,2.2],[.8,.8,2.4]])o.add(yt(dt.sph,It(16777215,8947848),c+u,h+d,0,g*1.4,g,g))}}else{let o=n(-30,.1);for(let l=0;l<120;l++)o.add(yt(dt.sph,It(16777215,16777215),l*37%600,4+l*17%20,0,.2,.2,.2))}return t.userData.layers=e,t}var yr=class{constructor(t){this.el=t,this.renderer=Hc(new er({antialias:!0,alpha:!1}),{preset:"fresh",tune:{bloom:[.14,.4,.92]}}),this.dom=this.renderer.domElement,this.dom.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",this.scene=new ir,this.camera=new Se(36,1,.5,300),this.scene.add(new ur(16777215,9083568,1.15)),this.sun=new fr(16773336,1.35),this.sun.position.set(-8,14,12),this.scene.add(this.sun),this.scene.add(this.sun.target),this.cur={},this.bugs=[],this.mush=[],this.w=1,this.h=1,this.tex={q:Yc("?","#ffc83a","#fff4c0"),u:Yc("","#a0885a","#fff")},this.shadow=yt(dt.cyl,It(0,0,{transparent:!0,opacity:.28}),0,0,0,.8,.02,.5),this.scene.add(this.shadow),this.heroes={};let e=700,n=(s,r)=>{let a=new rr(s,r,e);return a.frustumCulled=!1,a.count=0,this.scene.add(a),a};this.inst={top:n(dt.box,It(16777215)),dirt:n(dt.box,It(16777215)),brick:n(dt.box,It(16777215)),q:n(dt.box,It(16777215)),u:n(dt.box,It(16777215)),pb:n(dt.cyl,It(16777215)),pr:n(dt.cyl,It(16777215)),coin:n(dt.coin,It(16765498,6965760)),grass:n(dt.box,It(16777215))},this.chunks=[],this._m=new $t,this._q=new sn,this._e=new He,this._p=new F,this._s=new F,this._v=new F}setSize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}project(t,e){return this._v.set(t,vn(e),0).project(this.camera),[(this._v.x*.5+.5)*this.w,(-this._v.y*.5+.5)*this.h]}dispose(){this.renderer.dispose()}_setWorld(t){if(this.cur.world===t)return;this.cur={world:t},this.scen&&this.scene.remove(this.scen),this.scen=um(t),this.scene.add(this.scen),this.castle&&this.scene.remove(this.castle),this.castle=hm(ni[t]),this.scene.add(this.castle),this.flagG&&this.scene.remove(this.flagG);let e=new ue;e.add(yt(dt.cyl,It(15790320),0,3.5,0,.12,7,.12)),e.add(yt(dt.sph,It(16765498,6307840),0,7.1,0,.35,.35,.35));let n=yt(dt.box,It(16734858,4198432),.8,6.2,0,1.5,.9,.05);e.add(n),e.userData.cloth=n,this.flagG=e,this.scene.add(e);let s=ni[t],r=new Tt(s.sky[1]),a=document.createElement("canvas");a.width=4,a.height=256;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,256);l.addColorStop(0,t==="hills"?"#2a8cff":s.sky[0]),l.addColorStop(.7,t==="hills"?"#8fd6ff":s.sky[1]),l.addColorStop(1,s.sky[1]),o.fillStyle=l,o.fillRect(0,0,4,256);let c=new Nn(a);c.colorSpace=me,this.scene.background=c,this.scene.fog=new nr(r,90,200);let h=(u,d,g)=>{let m=this.inst[u];m.material=new is({color:g?16777215:d,map:g||null})};h("top",s.dirt),h("dirt",s.dirtD),h("grass",s.top),h("brick",16777215,am(s.brick,s.brickD)),h("q",16777215,this.tex.q),h("u",16777215,this.tex.u),h("pb",s.pipe),h("pr",s.pipeD)}burst(t,e,n,s=8){for(let r=0;r<s;r++){let a=yt(dt.box,It(Qc(n[r%n.length]).getHex()),t,vn(e),.4,.18,.18,.18);a.userData={vx:(Math.random()-.5)*7,vy:3+Math.random()*5,vz:Math.random()*2,life:0},this.scene.add(a),this.chunks.push(a)}}render(t,e,n,s,r,a,o,l){var O;this._setWorld(e);let c=Math.min(.05,Math.max(0,o-((O=this.lastClock)!=null?O:o)));this.lastClock=o;let h=Math.tan(this.camera.fov*Math.PI/360),u=this.h>this.w?a:8.6,d=Math.max(u*.5,r*.5/this.camera.aspect)/h*.97,g=l.inMenu?0:vn(t.p.y+t.p.h),m=n+r/2,A=this.h>this.w?vn(s+a/2):Math.max(-3,Math.min(2.8+Math.max(0,g-2.5)*.45,g+3));this.camera.position.set(m,A+d*.12,d),this.camera.lookAt(m,A-d*.012,0),this.sun.position.set(m-8,16,14),this.sun.target.position.set(m,A,0);for(let{l:R,par:H}of this.scen.userData.layers)R.position.x=m*(1-H)-8;this.scen.position.y=-.5;let p=t.grid,f=Math.max(0,Math.floor(n)-2),S=Math.min(t.len-1,Math.ceil(n+r)+2),M={top:0,dirt:0,brick:0,q:0,u:0,pb:0,pr:0,coin:0,grass:0},_=this._m,L=this._q,b=this._p,E=this._s,V=(R,H,D,Y,q,$,at,pt=0,Pt=0)=>{let Zt=this.inst[R];M[R]>=700||(L.setFromEuler(this._e.set(pt,Pt,0)),_.compose(b.set(H,D,Y),L,E.set(q,$,at)),Zt.setMatrixAt(M[R]++,_))},y=R=>R==="#"||R==="B"||R==="?"||R==="U"||R==="P";for(let R=0;R<t.H;R++)for(let H=f;H<=S;H++){let D=p[R][H];if(D===" "||D==="F")continue;let Y=vn(R+.5),q=H+.5,$=D==="B"||D==="?"||D==="U"?l.bumps.get(`${H},${R}`):void 0;if($!==void 0&&(Y+=Math.sin((o-$)/.25*Math.PI)*.3),D==="#"){let at=R>0?p[R-1][H]:" ",pt=!y(at);V(pt?"top":"dirt",q,Y,-.5,1,1,3),pt&&V("grass",q,Y+.4,-.5,1.02,.22,3.04)}else if(D==="B")V("brick",q,Y,0,.98,.98,1.4);else if(D==="?")V("q",q,Y,0,.98,.98,1.4);else if(D==="U")V("u",q,Y,0,.98,.98,1.4);else if(D==="c")V("coin",q,Y+Math.sin(o*3+H)*.05,0,.62,.62,.62,Math.PI/2,o*3+H*.7);else if(D==="P"){if(H>0&&p[R][H-1]==="P")continue;V("pb",H+1,Y,0,1.8,1,1.8),R>0&&p[R-1][H]==="P"||V("pr",H+1,Y+.36,0,2.1,.32,2.1)}}for(let R of Object.keys(this.inst))this.inst[R].count=M[R],this.inst[R].instanceMatrix.needsUpdate=!0;this.castle.position.set(t.flagX+1.7,ko,-1.2),this.flagG.position.set(t.flagX+.5,ko,.2),this.flagG.userData.cloth.rotation.y=Math.sin(o*4)*.25;for(let R of Object.keys(this.heroes))this.heroes[R].visible=!1;let C=!l.inMenu;if(C){let R=l.girl?"g":"b";this.heroes[R]||(this.heroes[R]=om(l.girl),this.scene.add(this.heroes[R]));let H=this.heroes[R],D=t.p,Y=H.userData,q=D.h;H.visible=!(D.inv>0&&Math.sin(o*40)<-.2);let $=t.state==="won",at=$?Math.abs(Math.sin(o*8))*.3:0;H.position.set(D.x+D.w/2,vn(D.y+D.h)+at,0),H.scale.setScalar(q>1.2?1.75:1.15),Y.tail.rotation.y=Math.sin(o*6)*.35;let pt=$?0:D.vx,Pt=D.ground,Zt=$?.3:D.face>0?1.1:-1.1;H.rotation.y+=(Zt-H.rotation.y)*Math.min(1,c*14);let X=Pt?Math.min(1,Math.abs(pt)/5):0,J=o*14;Pt?(Y.lL.rotation.x=Math.sin(J)*.9*X,Y.lR.rotation.x=-Math.sin(J)*.9*X,Y.aL.rotation.x=-Math.sin(J)*.8*X,Y.aR.rotation.x=Math.sin(J)*.8*X,Y.rig.position.y=Math.abs(Math.sin(J))*.07*X,Y.torso.rotation.x=.12*X):(Y.lL.rotation.x=-.9,Y.lR.rotation.x=.5,Y.aL.rotation.x=2.5,Y.aR.rotation.x=2.5,Y.rig.position.y=0,Y.torso.rotation.x=D.vy<0?-.1:.1),$&&(Y.aL.rotation.x=Y.aR.rotation.x=3+Math.sin(o*12)*.3),Y.head.rotation.z=Math.sin(o*2)*.04,this.shadow.visible=!0,this.shadow.position.set(H.position.x,this._groundY(t,D)+.02,.1)}else this.shadow.visible=!1;let w=C?t.enemies.length:0;for(;this.bugs.length<w;){let R=lm();this.scene.add(R),this.bugs.push(R)}this.bugs.forEach((R,H)=>{let D=C?t.enemies[H]:null;if(!D){R.visible=!1;return}let Y=D.dead?t.time-(D.deadAt||0):0;R.visible=!(D.dead&&Y>.6)&&D.x>n-3&&D.x<n+r+3,R.position.set(D.x+.45,vn(D.y+1),0),R.rotation.y=(Math.sign(D.vx)||1)*1.2;let q=R.userData,$=Math.sin(o*12+H)*(D.dead?0:1);q.body.scale.y=D.dead?.22:1+Math.abs($)*.04,q.body.position.y=D.dead?0:Math.abs($)*.05,q.f[0].position.z=.08+$*.12,q.f[1].position.z=.08-$*.12});let G=C?t.mush.filter(R=>!R.taken):[];for(;this.mush.length<G.length;){let R=cm();this.scene.add(R),this.mush.push(R)}this.mush.forEach((R,H)=>{let D=G[H];R.visible=!!D,D&&(R.position.set(D.x+.45,vn(D.y+1),0),R.rotation.y=Math.sin(o*3)*.4)});for(let R=this.chunks.length-1;R>=0;R--){let H=this.chunks[R],D=H.userData;D.life+=c,D.vy-=18*c,H.position.x+=D.vx*c,H.position.y+=D.vy*c,H.position.z+=D.vz*c,H.rotation.x+=c*9,H.scale.setScalar(Math.max(.01,.2*(1-D.life/.9))),D.life>.9&&(this.scene.remove(H),this.chunks.splice(R,1))}this.renderer.render(this.scene,this.camera)}_groundY(t,e){let n=Math.floor(e.x+e.w/2);for(let s=Math.max(0,Math.floor(e.y+e.h-.01));s<t.H;s++){let r=t.grid[s]&&t.grid[s][n];if(r&&r!==" "&&r!=="c"&&r!=="F")return vn(s)}return-50}};var fm={title:["\u0639\u0627\u0644\u0645 \u0627\u0644\u0642\u0641\u0632","Hop World"],sub:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u0649","Pick a level"],exit:["\u062E\u0631\u0648\u062C","Exit"],menu:["\u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A","Levels"],again:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Try again"],next:["\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062C\u0627\u064A","Next level"],resume:["\u0643\u0645\u0651\u0644","Resume"],pausedT:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],hint1:["\u0627\u062C\u0631\u064A \u064A\u0645\u064A\u0646 \u0648\u0627\u0646\u0637 \u0641\u0648\u0642 \u0627\u0644\u062D\u0641\u0631!","Run right and jump over the pits!"],hintMush:["\u062E\u062F \u0627\u0644\u0641\u0637\u0631\u0629! \u{1F49C}","Grab the mushroom! \u{1F49C}"],hintCp:["\u0639\u0644\u0627\u0645\u0629 \u062D\u0641\u0638 \u2714","Checkpoint \u2714"],hintBig:["\u0643\u0628\u0631\u062A! \u{1F4AA}","You grew! \u{1F4AA}"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],wonText:["\u0648\u0635\u0644\u062A \u0644\u0644\u0642\u0644\u0639\u0629!","You reached the castle!"],lostT:["\u062D\u0627\u0648\u0644 \u062A\u0627\u0646\u064A!","Try again!"],lostText:["\u062E\u0644\u0635\u062A \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0627\u062A\u060C \u0628\u0633 \u0645\u0641\u064A\u0634 \u0645\u0634\u0643\u0644\u0629","Out of tries, but that is fine"],w0:["\u0627\u0644\u062A\u0644\u0627\u0644","Hills"],w1:["\u0627\u0644\u0643\u0647\u0641","Cave"],w2:["\u0627\u0644\u0635\u062D\u0631\u0627\u0621","Desert"],w3:["\u0627\u0644\u062B\u0644\u062C","Snow"],jump:["\u0642\u0641\u0632","Jump"],left:["\u0634\u0645\u0627\u0644","Left"],right:["\u064A\u0645\u064A\u0646","Right"],mute:["\u0627\u0644\u0635\u0648\u062A","Sound"],coins:["\u0639\u0645\u0644\u0627\u062A","Coins"]},kt=Jo(fm),jc=["","","",""],qo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),kt.setLang(e.lang),kt.setGirl(e.gender==="girl"),this.girl=e.gender==="girl",this.easy=Number(e.age)>0&&Number(e.age)<=4,this.save=nl(e.save),this.base=e.base||"./",this.sound=new ri,this.sound.muted=!!this.save.muted,document.getElementById("hw-style")||document.head.append(_t("style",{id:"hw-style"},$o("hw","#ff9a3c","#d9601a","#ffe35a")+`
.hw-root{background:#5cc8ff;--c:80px}
.hw-pad{position:absolute;left:calc(var(--u)*2);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));display:flex;gap:calc(var(--c)*.14);direction:ltr;pointer-events:auto;touch-action:none;padding:calc(var(--c)*.1)}
.hw-cb{pointer-events:none;width:var(--c);height:var(--c);border-radius:50%;background:linear-gradient(180deg,#ffb050,#d9601a);border:calc(var(--u)*.6) solid #fff;color:#fff;font-size:calc(var(--c)*.45);display:flex;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.7) calc(var(--u)*1.6) rgba(0,20,40,.4);opacity:.88;font-weight:900}
.hw-cb.on{transform:scale(.92);background:linear-gradient(180deg,#6ae08a,#2fa85a);opacity:1}
.hw-jump{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--c)*1.3);height:calc(var(--c)*1.3);border-radius:50%;background:linear-gradient(180deg,#6ab8ff,#2a6ad8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-size:calc(var(--c)*.42);font-weight:900;font-family:inherit;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,20,40,.45);touch-action:none;opacity:.9;padding:0;pointer-events:auto}
.hw-jump.on{transform:scale(.93);background:linear-gradient(180deg,#6ae08a,#2fa85a);opacity:1}
.hw-top{gap:calc(var(--u)*1)}
.hw-top .hw-pill{font-size:calc(var(--u)*3.6);padding:calc(var(--u)*.8) calc(var(--u)*2.2)}
.hw-lv.lock{opacity:.7}
.hw-flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
`)),this.root=_t("div",{class:"hw-root",dir:kt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.cv=_t("canvas"),this.view=new yr(t),this.root.append(this.view.dom),this.root.append(this.cv),this.g=this.cv.getContext("2d"),this.layer=_t("div",{class:"hw-layer"}),this.root.append(this.layer),this.mode="menu",this.clock=0,this.acc=0,this.fx=[],this.bumps=new Map,this.keys=new Set,this.padDir=0,this.jumpBtn=!1,this.jumpKey=!1,this.timers=[],this.level=0,this.cam={x:0,y:0},this.sprites={},this.spriteKey="",this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this.demo=new si({level:0,seed:5}),this._fonts().then(()=>{this.showMenu(),this._loop()})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.cv.width=Math.round(this.cw*this.dpr),this.cv.height=Math.round(this.ch*this.dpr),this.view.setSize(this.cw,this.ch),this.portrait=this.ch>this.cw,this.u=Math.min(this.cw,this.ch)/100,this.ts=this.portrait?this.cw/9.5:this.ch/9.5,this.root.style.setProperty("--u",`${Math.min(this.u,6.2)}px`),this.root.style.setProperty("--c",`${yn(Math.min(this.cw,this.ch)*.2,62,104)}px`)}_bind(){let t=()=>this.sound.unlock();for(let e of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(e,t,{capture:!0,passive:!0});this._onKey=e=>{let n=e.key.toLowerCase();e.type==="keydown"?(["arrowleft","arrowright","arrowup"," ","a","d","w"].includes(n)&&e.preventDefault(),!e.repeat&&(n==="escape"||n==="p")&&(this.mode==="play"?this.pauseGame():this.mode==="pause"&&this.resumeGame()),this.keys.add(n)):this.keys.delete(n)},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&this.pauseGame()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){let t=this.keys,e=this.padDir;(t.has("arrowleft")||t.has("a"))&&(e-=1),(t.has("arrowright")||t.has("d"))&&(e+=1);let n=this.jumpBtn||t.has("arrowup")||t.has("w")||t.has(" ");return{dir:yn(e,-1,1),jump:n}}_soundPill(){let t=_t("button",{class:"hw-soundpill",onclick:()=>this.sound.unlock()},kt.t("sound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_toggleMute(t){this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}",this.post({type:"save",save:this.save})}_muteBtn(){let t=_t("button",{class:"hw-round","aria-label":kt.t("mute")},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.onclick=()=>this._toggleMute(t),t}stars(t){return _t("div",{class:"hw-stars"},[1,2,3].map(e=>_t("span",{class:e<=t?"":"off"},"\u2B50")))}showMenu(){this.mode="menu",this.layer.replaceChildren(),this.sound.setMode(null),this.timers=[],this.demo=new si({level:0,seed:5}),this.menuT=0;let t=_t("div",{class:"hw-lvs"});for(let e=0;e<In;e++){let n=e+1<=this.save.unlocked,s=this.save.stars[e+1]||0,r=_t("button",{class:`hw-lv${n?"":" lock"}`,"aria-label":`${kt.t("title")} ${e+1}`,onclick:()=>{n&&(this.sound.play("tap"),this.startLevel(e))}},_t("i",{},n?jc[Math.floor(e/2)%4]:"\u{1F512}"),_t("span",{},kt.num(e+1)),_t("span",{},s?"\u2B50".repeat(s):"\xB7"));t.append(r)}this.layer.append(_t("div",{class:"hw-dim"},_t("div",{class:"hw-card"},_t("div",{class:"hw-logo"},kt.t("title")),_t("div",{class:"hw-small"},kt.t("sub")),t,_t("div",{style:"display:flex;gap:8px;width:100%;align-items:center"},this._muteBtn(),_t("button",{class:"hw-btn dark",onclick:()=>this.post({type:"exit"})},kt.t("exit")))))),this._soundPill()}startLevel(t){this.level=t,this.w=new si({level:t,seed:5,easy:this.easy}),this.mode="play",this.fx=[],this.bumps.clear(),this.timers=[],this.acc=0,this.padDir=0,this.jumpBtn=!1,this._sprites(this.w.world),this.cam.x=0,this.camSnap=!0,this.layer.replaceChildren(),this.sound.setMode(this.w.world),this.coinEl=_t("span",{},""),this.lifeEl=_t("span",{},""),this.flash=_t("div",{class:"hw-flash"});let e=_t("button",{class:"hw-round","aria-label":kt.t("pausedT"),onclick:()=>this.pauseGame()},"\u23F8");this.hint=_t("div",{class:"hw-hint"},""),this.layer.append(this.flash,_t("div",{class:"hw-top"},e,_t("div",{class:"hw-pill"},"\u{1FA99} ",this.coinEl),_t("div",{class:"hw-pill"},"\u2764\uFE0F ",this.lifeEl),_t("div",{class:"hw-pill"},`${jc[Math.floor(t/2)%4]} ${kt.num(t+1)}`),this._muteBtn()),this.hint,this._pad(),this._jump()),this._soundPill(),t===0&&this._say(kt.t("hint1"),4)}_pad(){let t=_t("div",{class:"hw-cb","aria-label":kt.t("left")},"\u25C0"),e=_t("div",{class:"hw-cb","aria-label":kt.t("right")},"\u25B6"),n=_t("div",{class:"hw-pad"},t,e),s=null,r=o=>{let l=n.getBoundingClientRect(),c=o.clientX<l.left+l.width/2?-1:1;this.padDir=c,t.classList.toggle("on",c<0),e.classList.toggle("on",c>0)},a=()=>{s=null,this.padDir=0,t.classList.remove("on"),e.classList.remove("on")};n.addEventListener("pointerdown",o=>{o.preventDefault(),s=o.pointerId;try{n.setPointerCapture(s)}catch{}r(o)}),n.addEventListener("pointermove",o=>{o.pointerId===s&&r(o)});for(let o of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(o,l=>{(l.pointerId===s||o==="lostpointercapture")&&a()});return n}_jump(){let t=_t("button",{class:"hw-jump","aria-label":kt.t("jump")},"\u2912"),e=null;t.addEventListener("pointerdown",n=>{n.preventDefault(),e=n.pointerId;try{t.setPointerCapture(e)}catch{}this.jumpBtn=!0,t.classList.add("on")});for(let n of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(n,s=>{(s.pointerId===e||n==="lostpointercapture")&&(e=null,this.jumpBtn=!1,t.classList.remove("on"))});return t}_say(t,e=2.4){this.hint&&(this.hint.textContent=t,this.hint.classList.add("show"),this.view&&this.view.dispose(),clearTimeout(this._hintT),this._hintT=setTimeout(()=>this.hint&&this.hint.classList.remove("show"),e*1e3))}_later(t,e){this.timers.push({t,fn:e})}pauseGame(){this.mode==="play"&&(this.mode="pause",this.padDir=0,this.jumpBtn=!1,this.sound.play("pause"),this.sound.suspend(),this.pauseEl=_t("div",{class:"hw-dim"},_t("div",{class:"hw-card"},_t("div",{class:"hw-title"},kt.t("pausedT")),_t("button",{class:"hw-btn",onclick:()=>this.resumeGame()},kt.t("resume")),_t("button",{class:"hw-btn alt",onclick:()=>{this.pauseEl.remove(),this.sound.resume(),this.startLevel(this.level)}},kt.t("again")),_t("button",{class:"hw-btn dark",onclick:()=>{this.sound.resume(),this.showMenu()}},kt.t("menu")))),this.layer.append(this.pauseEl))}resumeGame(){this.mode==="pause"&&(this.mode="play",this.pauseEl&&this.pauseEl.remove(),this.sound.resume(),this.last=performance.now())}pause(){this.mode==="play"?this.pauseGame():this.sound.suspend()}_sprites(t){let e=Math.ceil(this.ts*this.dpr)+1,n=`${t}${e}`;n!==this.spriteKey&&(this.sprites=Wc(e,t),this.spriteKey=n)}_loop(){let t=e=>{if(!this.root.isConnected)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.clock+=n,this.mode==="play"?this._update(n):this.mode==="menu"&&(this.menuT+=n),this._draw(),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}_burst(t,e,n,s,r="spark",a=4){for(let o=0;o<n;o++){let l=Math.random()*6.283;this.fx.push({kind:r,x:t,y:e,vx:Math.cos(l)*a*(.4+Math.random()),vy:Math.sin(l)*a*(.4+Math.random())-2,t:0,life:.5+Math.random()*.4,col:s[o%s.length],r:.06+Math.random()*.06})}}_update(t){let e=this.w;this.acc+=t;let n=0;for(;this.acc>=1/60&&n<5;){this.acc-=1/60,n++;let l=e.state;for(let c of e.step(1/60,this._input()))this._event(c);if(l==="play"&&e.state!=="play")break}this.coinEl.textContent=kt.num(e.coins),this.lifeEl.textContent=kt.num(e.lives);for(let l of this.fx)l.t+=t,l.vx!==void 0&&(l.x+=l.vx*t,l.y+=l.vy*t,l.vy+=14*t);this.fx=this.fx.filter(l=>l.t<(l.life||.7));for(let[l,c]of this.bumps)this.clock-c>.25&&this.bumps.delete(l);for(let l of this.timers)l.t-=t;let s=this.timers.filter(l=>l.t<=0);this.timers=this.timers.filter(l=>l.t>0),s.forEach(l=>l.fn());let r=this.cw/this.ts,a=e.p,o=yn(a.x+.4+a.face*1.2-r*(this.portrait?.4:.38),0,Math.max(0,e.len-r));this.cam.x=this.camSnap?o:this.cam.x+(o-this.cam.x)*Math.min(1,t*7),this.camSnap=!1}_event(t){let n=this.w.p,s=this.sound;switch(t.type){case"jump":s.play("jump"),this._burst(n.x+.4,n.y+n.h,4,["#fff","#e8e0d0"],"dust",1.5);break;case"coin":s.play("coin"),this._burst(n.x+.4,n.y+.4,5,["#ffe45a","#fff"],"spark",3);break;case"block":this.bumps.set(`${t.tx},${t.ty}`,this.clock),s.play("block"),this.fx.push({kind:"coin",x:t.tx+.5,y:t.ty-.2,t:0,life:.6}),t.mush&&(s.play("appear"),this._say(kt.t("hintMush"),1.8));break;case"bump":this.bumps.set(`${t.tx},${t.ty}`,this.clock),s.play("bump");break;case"brick":s.play("brick"),this._burst(t.tx+.5,t.ty+.5,10,[Kc(this.w).brick,Kc(this.w).brickD],"chunk",5);break;case"stomp":s.play("stomp"),this._burst(t.x+.45,t.y+.6,8,["#ffe45a","#fff","#ff9ad8"],"spark",4);break;case"power":s.play("power"),this._say(kt.t("hintBig"),2),this._burst(n.x+.4,n.y+.8,14,["#ffe45a","#a05ae8","#fff"],"spark",5);break;case"shrink":s.play("shrink");break;case"lose":s.play("lose"),this.camSnap=!0,this._flash();break;case"checkpoint":s.play("check"),this._say(kt.t("hintCp"),1.6);break;case"lost":this._later(.7,()=>this._showLost());break;case"won":s.play("win"),s.setMode(null),this._burst(n.x+.4,n.y,24,["#ffe45a","#ff6a8a","#6ae0ff","#fff"],"spark",6),this._later(1.1,()=>this._showWon());break;default:break}}_flash(){this.flash&&(this.flash.style.transition="none",this.flash.style.opacity="0.7",requestAnimationFrame(()=>{this.flash.style.transition="opacity .5s",this.flash.style.opacity="0"}))}_showWon(){let t=this.w,e=this.level;this.mode="won",this.save.stars[e+1]=Math.max(this.save.stars[e+1]||0,t.stars),this.save.unlocked=Math.max(this.save.unlocked,Math.min(In,e+2)),this.save.coins+=t.coins,this.post({type:"save",save:this.save});let n=[_t("div",{class:"hw-title"},kt.t("win")),_t("div",{class:"hw-small"},kt.t("wonText")),this.stars(t.stars),_t("div",{class:"hw-pill"},`\u{1FA99} ${kt.num(t.coins)}`)];e<In-1&&n.push(_t("button",{class:"hw-btn",onclick:()=>this.startLevel(e+1)},kt.t("next"))),n.push(_t("button",{class:`hw-btn ${e<In-1?"alt":""}`,onclick:()=>this.startLevel(e)},kt.t("again")),_t("button",{class:"hw-btn dark",onclick:()=>this.showMenu()},kt.t("menu"))),this.layer.append(_t("div",{class:"hw-dim"},_t("div",{class:"hw-card"},n)))}_showLost(){this.mode="lost",this.sound.setMode(null),this.layer.append(_t("div",{class:"hw-dim"},_t("div",{class:"hw-card"},_t("div",{class:"hw-title"},kt.t("lostT")),_t("div",{class:"hw-small"},kt.t("lostText")),_t("button",{class:"hw-btn",onclick:()=>this.startLevel(this.level)},kt.t("again")),_t("button",{class:"hw-btn dark",onclick:()=>this.showMenu()},kt.t("menu")))))}_draw(){let t=this.g;t.setTransform(this.dpr,0,0,this.dpr,0,0);let e=this.cw,n=this.ch,s=this.ts,r=this.mode==="menu",a=r?this.demo:this.w;if(!a)return;let o=e/s,l=n/s,c=r?this.menuT*1.6%Math.max(1,a.len-o-2):this.cam.x,h=a.H+(this.portrait?4.2:.2)-l,u=m=>Math.round((m-c)*s),d=m=>Math.round((m-h)*s),g=a.world;if(t.clearRect(0,0,e,n),this.view.render(a,g,c,h,o,l,this.clock,{inMenu:r,bumps:this.bumps,girl:this.girl}),!r)for(let m of this.fx){if(m.kind==="chunk"||m.kind==="spark"){m.b3||(m.b3=1,this.view.burst(m.x,m.y,[m.col||"#ffd23a"],1));continue}let A=m.t/(m.life||.7);if(m.kind==="coin"){let[p,f]=this.view.project(m.x,m.y-A*1.6);t.globalAlpha=Math.max(0,1-A),Xc(t,p,f,s*1.2,this.clock*2,0),t.globalAlpha=1}}}dispose(){cancelAnimationFrame(this.raf),clearTimeout(this._hintT),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.root.remove()}};function Kc(i){return ni[i.world]}var Ho={start(i,t,e){let n=new qo(i,t||{},e);return Ho.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.HopWorld=Ho;var I0=Ho;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
