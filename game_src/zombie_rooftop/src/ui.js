// Screens and HUD on top of the rooftop, styled like the owner's video: deep purple panels with gold titles, red and
// teal ribbons with rays, big green and purple buttons, a gold hexagon coin counter, "Wave 1/3" with hexagon dots,
// a hexagon zombie badge with the wave bar and a cyan level bar. One unit = 1% of the shorter side.
export const CSS = `
.zr-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#f7b48e}
.zr-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.zr-layer{position:absolute;inset:0;pointer-events:none}
.zr-layer button,.zr-layer .zr-panel,.zr-layer .zr-card{pointer-events:auto}
.zr-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#ffd23a;background:#3a1f4a;text-align:center}
.zr-gold{color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.35) #3a1408;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 #3a1408}
.zr-sq{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #1e0e2a;background:linear-gradient(180deg,#6a3a8a,#43215a);color:#fff;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.7) 0 #1e0e2a,inset 0 calc(var(--u)*.4) 0 rgba(255,255,255,.2);padding:0;font-family:inherit}
.zr-coins{display:inline-flex;align-items:center;gap:calc(var(--u)*1.6);background:rgba(36,16,48,.9);border:calc(var(--u)*.45) solid #1e0e2a;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*3.4) calc(var(--u)*.4) calc(var(--u)*.6);font-weight:900;font-size:calc(var(--u)*5.2);direction:ltr}
.zr-hex{display:inline-block;width:calc(var(--u)*8);height:calc(var(--u)*8);clip-path:polygon(25% 4%,75% 4%,100% 50%,75% 96%,25% 96%,0 50%);background:radial-gradient(circle at 40% 35%,#ffe58a,#f5b72c 55%,#c98a14);position:relative}
.zr-hex::after{content:'';position:absolute;inset:24%;clip-path:polygon(25% 4%,75% 4%,100% 50%,75% 96%,25% 96%,0 50%);border:calc(var(--u)*.6) solid #c98a14;box-sizing:border-box;background:transparent}
.zr-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*16);right:calc(var(--u)*16);display:flex;justify-content:center}
.zr-hudl{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*19);left:calc(var(--u)*3);display:flex;align-items:center;direction:ltr}
.zr-badge{width:calc(var(--u)*13);height:calc(var(--u)*14);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:#1e0e2a;display:flex;align-items:center;justify-content:center;flex:none;z-index:2}
.zr-badge i{width:calc(var(--u)*11);height:calc(var(--u)*12);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:linear-gradient(180deg,#8a4ad8,#5a2a9a);display:flex;align-items:center;justify-content:center}
.zr-face{width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;background:radial-gradient(circle at 34% 45%,#fff 0 13%,#1a1a1a 14% 22%,transparent 23%),radial-gradient(circle at 68% 45%,#fff 0 11%,#1a1a1a 12% 19%,transparent 20%),radial-gradient(ellipse at 50% 78%,#3a1020 0 12%,transparent 13%),#7ac86a;border:calc(var(--u)*.4) solid #2a4a2a;box-sizing:border-box}
.zr-bars{display:flex;flex-direction:column;gap:calc(var(--u)*1);margin-left:calc(var(--u)*-2)}
.zr-wavet{position:absolute;top:calc(var(--u)*-6.4);left:calc(var(--u)*11);display:flex;align-items:center;gap:calc(var(--u)*1);font-weight:900;font-size:calc(var(--u)*4);white-space:nowrap}
.zr-dots{display:flex;gap:calc(var(--u)*.6)}
.zr-dots b{width:calc(var(--u)*2.6);height:calc(var(--u)*2.8);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:#3a2a4a}
.zr-dots b.done{background:#ffc21a}
.zr-dots b.now{background:#9ae8ff}
.zr-bar{width:calc(var(--u)*40);height:calc(var(--u)*5.6);background:#1e0e2a;border-radius:0 999px 999px 0;padding:calc(var(--u)*.7) calc(var(--u)*.9) calc(var(--u)*.7) calc(var(--u)*2.6);box-sizing:border-box}
.zr-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(180deg,#8ff06a,#3fb82a);transition:width .25s;box-shadow:inset 0 calc(var(--u)*.6) 0 rgba(255,255,255,.35)}
.zr-bar i.gold{background:linear-gradient(180deg,#ffe86a,#e8b21a)}
.zr-xp{display:flex;align-items:center;gap:calc(var(--u)*1);padding-left:calc(var(--u)*2.6)}
.zr-xp span{font-weight:900;font-size:calc(var(--u)*3.2);color:#9ae8ff;-webkit-text-stroke:calc(var(--u)*.25) #1e0e2a;paint-order:stroke fill;font-style:italic}
.zr-xp div{width:calc(var(--u)*28);height:calc(var(--u)*3);background:#1e0e2a;border-radius:999px;padding:calc(var(--u)*.5);box-sizing:border-box}
.zr-xp i{display:block;height:100%;border-radius:999px;background:linear-gradient(180deg,#9ae8ff,#2ab8d8);transition:width .25s}
.zr-hp{position:absolute;width:calc(var(--u)*13);height:calc(var(--u)*3);margin-left:calc(var(--u)*-6.5);background:#1e0e2a;border-radius:999px;padding:calc(var(--u)*.5);box-sizing:border-box;pointer-events:none}
.zr-hp i{display:block;height:100%;border-radius:999px;background:linear-gradient(180deg,#8ff06a,#3fb82a);box-shadow:inset 0 calc(var(--u)*.4) 0 rgba(255,255,255,.35)}
.zr-hp i.low{background:linear-gradient(180deg,#ff8a8a,#e8322a)}
.zr-boss{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*36);left:50%;transform:translateX(-50%);display:none;text-align:center;font-weight:900;font-size:calc(var(--u)*3.6)}
.zr-boss div{width:calc(var(--u)*56);height:calc(var(--u)*3.4);background:#1e0e2a;border-radius:999px;padding:calc(var(--u)*.5);box-sizing:border-box;margin-top:calc(var(--u)*.6)}
.zr-boss i{display:block;height:100%;border-radius:999px;background:linear-gradient(180deg,#d88aff,#8a2ad8)}
.zr-banner{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%) scale(.6);opacity:0;transition:transform .25s,opacity .25s;pointer-events:none;display:flex;align-items:center;justify-content:center;width:calc(var(--u)*92)}
.zr-banner.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.zr-rays{position:absolute;width:calc(var(--u)*80);height:calc(var(--u)*80);border-radius:50%;background:repeating-conic-gradient(rgba(255,214,90,.55) 0 9deg,transparent 9deg 22deg);-webkit-mask:radial-gradient(circle,#000 18%,transparent 68%);mask:radial-gradient(circle,#000 18%,transparent 68%);animation:zrSpin 6s linear infinite}
@keyframes zrSpin{to{transform:rotate(360deg)}}
.zr-ribbon{position:relative;background:linear-gradient(180deg,#ff5a6a,#d8243a);border:calc(var(--u)*.6) solid #6a0a1a;border-radius:calc(var(--u)*2.2);padding:calc(var(--u)*1.2) calc(var(--u)*6);font-weight:900;font-size:calc(var(--u)*6.4);white-space:nowrap;box-shadow:0 calc(var(--u)*.9) 0 #6a0a1a}
.zr-ribbon::before,.zr-ribbon::after{content:'';position:absolute;top:calc(var(--u)*2);width:calc(var(--u)*7);height:calc(var(--u)*7);background:#a8142a;z-index:-1}
.zr-ribbon::before{left:calc(var(--u)*-5);clip-path:polygon(0 0,100% 0,100% 100%,0 100%,35% 50%)}
.zr-ribbon::after{right:calc(var(--u)*-5);clip-path:polygon(0 0,100% 0,65% 50%,100% 100%,0 100%)}
.zr-ribbon.teal{background:linear-gradient(180deg,#5ae8d8,#1fa8a0);border-color:#0a4a4a;box-shadow:0 calc(var(--u)*.9) 0 #0a4a4a}
.zr-ribbon.teal::before,.zr-ribbon.teal::after{background:#127a74}
.zr-toast{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);display:flex;gap:calc(var(--u)*2);align-items:center;max-width:calc(var(--u)*70);background:rgba(36,16,48,.88);border:calc(var(--u)*.5) solid #1e0e2a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*3);font-weight:700;font-size:calc(var(--u)*3.8);line-height:1.35;opacity:0;transition:opacity .3s;pointer-events:none}
.zr-toast.show{opacity:1}
.zr-toast .ic{flex:none;width:calc(var(--u)*9);height:calc(var(--u)*9);border-radius:calc(var(--u)*2.2);background:linear-gradient(180deg,#5ae8d8,#1fa8a0);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}
.zr-dim{position:absolute;inset:0;background:rgba(30,10,40,.55);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.zr-panel{background:linear-gradient(180deg,#4a2462,#2e1440);border:calc(var(--u)*.7) solid #1e0e2a;border-radius:calc(var(--u)*5);box-shadow:inset 0 calc(var(--u)*.6) 0 rgba(255,255,255,.12),0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.45);padding:calc(var(--u)*4) calc(var(--u)*4) calc(var(--u)*3.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.2);width:calc(var(--u)*84);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;position:relative}
.zr-panel h3{margin:0;font-size:calc(var(--u)*3.6);letter-spacing:.08em;color:#d8c8f0;font-weight:900;text-align:center}
.zr-portrait{width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:calc(var(--u)*4);background:radial-gradient(circle at 50% 40%,#7a5a9a,#3a1f4a);border:calc(var(--u)*.5) solid #1e0e2a;display:flex;align-items:center;justify-content:center}
.zr-portrait .zr-face{width:calc(var(--u)*15);height:calc(var(--u)*15)}
.zr-portrait .zr-face.sprinter{background-color:#9ad86a}
.zr-portrait .zr-face.brute{background-color:#8ab07a;width:calc(var(--u)*18);height:calc(var(--u)*17)}
.zr-portrait .zr-face.king{background-color:#8ab07a;box-shadow:0 calc(var(--u)*-3) 0 calc(var(--u)*-1) #ffc21a}
.zr-small{font-size:calc(var(--u)*3);font-weight:700;color:#d8c8f0}
.zr-tip{background:rgba(0,0,0,.25);border-radius:calc(var(--u)*3);padding:calc(var(--u)*2.4) calc(var(--u)*3);font-size:calc(var(--u)*3.8);font-weight:700;text-align:center;line-height:1.4;width:100%;box-sizing:border-box}
.zr-stars{display:flex;gap:calc(var(--u)*2);font-size:calc(var(--u)*5);color:#6a4a8a}
.zr-stars.big{font-size:calc(var(--u)*13)}
.zr-stars b{color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.4) #7a3a08;paint-order:stroke fill}
.zr-stars span{color:#5a3a7a;-webkit-text-stroke:calc(var(--u)*.4) #2a1238;paint-order:stroke fill}
.zr-stars.big b:nth-child(2),.zr-stars.big span:nth-child(2){transform:translateY(calc(var(--u)*-2.4)) scale(1.15)}
.zr-weapon{display:flex;align-items:center;gap:calc(var(--u)*2);width:100%;box-sizing:border-box;background:rgba(0,0,0,.25);border:calc(var(--u)*.45) solid #5ad8e8;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*2);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);cursor:pointer}
.zr-weapon .ic{width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:calc(var(--u)*2.4);background:linear-gradient(180deg,#6a3a8a,#43215a);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*6)}
.zr-weapon .ch{margin-inline-start:auto;color:#5ad8e8;letter-spacing:.06em}
.zr-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #0e3a0e;paint-order:stroke fill;border:calc(var(--u)*.6) solid #0e3a0e;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*13);cursor:pointer;background:linear-gradient(180deg,#7af05a 0,#46c82e 55%,#2fa81e);box-shadow:0 calc(var(--u)*1) 0 #0e3a0e,inset 0 calc(var(--u)*.8) 0 rgba(255,255,255,.4);letter-spacing:.04em}
.zr-btn.purple{background:linear-gradient(180deg,#b07aff,#7a3ae0 60%,#5a22b8);border-color:#2a0e5a;box-shadow:0 calc(var(--u)*1) 0 #2a0e5a,inset 0 calc(var(--u)*.8) 0 rgba(255,255,255,.35);-webkit-text-stroke-color:#2a0e5a;font-size:calc(var(--u)*5)}
.zr-btn.grey{background:linear-gradient(180deg,#e8e4ea,#b8b0bc);border-color:#4a4250;box-shadow:0 calc(var(--u)*1) 0 #4a4250,inset 0 calc(var(--u)*.8) 0 rgba(255,255,255,.5);color:#4a4250;-webkit-text-stroke:0}
.zr-btn.wide{width:100%}
.zr-btn[disabled]{filter:grayscale(1);opacity:.7}
.zr-btn:active{transform:translateY(calc(var(--u)*.6))}
.zr-btn:focus-visible,.zr-sq:focus-visible,.zr-perk:focus-visible,.zr-node:focus-visible,.zr-weapon:focus-visible{outline:calc(var(--u)*.7) solid #5ad8e8;outline-offset:calc(var(--u)*.5)}
.zr-row{display:flex;gap:calc(var(--u)*2.4);width:100%}
.zr-row>*{flex:1}
.zr-logo{position:absolute;top:calc(var(--u)*14);left:50%;transform:translateX(-50%) rotate(-6deg);text-align:center;font-weight:900;line-height:.95;white-space:nowrap}
.zr-logo .a{display:block;font-size:calc(var(--u)*10);color:#5ae8ff;-webkit-text-stroke:calc(var(--u)*.7) #1a2a6a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #1a2a6a}
.zr-logo .b{display:block;font-size:calc(var(--u)*14);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.8) #8a2a08;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #8a2a08}
.zr-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*6),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*80);display:flex;flex-direction:column;gap:calc(var(--u)*2.6);align-items:center}
.zr-menu .zr-btn.big{font-size:calc(var(--u)*9);min-height:calc(var(--u)*18)}
.zr-perk{display:flex;align-items:center;gap:calc(var(--u)*3);width:100%;box-sizing:border-box;background:linear-gradient(180deg,#5a2a78,#3a1850);border:calc(var(--u)*.6) solid #1e0e2a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*2.2) calc(var(--u)*3);color:#fff;font-family:inherit;text-align:start;cursor:pointer;box-shadow:inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.12),0 calc(var(--u)*.8) 0 #1e0e2a}
.zr-perk .ic{flex:none;width:calc(var(--u)*15);height:calc(var(--u)*15);border-radius:50%;background:radial-gradient(circle at 40% 35%,#6a4a8a,#2e1440);border:calc(var(--u)*.5) solid #1e0e2a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*7);font-weight:900;color:#5ae8ff}
.zr-perk b{display:block;font-size:calc(var(--u)*5.4);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.3) #3a1408;paint-order:stroke fill;line-height:1.05}
.zr-perk span{display:block;font-size:calc(var(--u)*3.6);font-weight:700;margin-top:calc(var(--u)*.6)}
.zr-statrow{display:flex;gap:calc(var(--u)*2);width:100%}
.zr-stat{flex:1;display:flex;align-items:center;gap:calc(var(--u)*1.6);background:rgba(0,0,0,.25);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*2);direction:ltr}
.zr-stat b{display:block;font-size:calc(var(--u)*7.4);line-height:1}
.zr-stat small{display:block;font-size:calc(var(--u)*2.8);font-weight:900;letter-spacing:.1em;color:#d8c8f0}
.zr-map{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:calc(var(--u)*2.4);width:100%}
.zr-node{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:linear-gradient(180deg,#6a3a8a,#43215a);border:calc(var(--u)*.5) solid #1e0e2a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*1);color:#fff;font-family:inherit;font-weight:900;cursor:pointer;box-shadow:0 calc(var(--u)*.7) 0 #1e0e2a}
.zr-node .n{font-size:calc(var(--u)*7);line-height:1}
.zr-node .nm{font-size:calc(var(--u)*2.8);text-align:center;line-height:1.2}
.zr-node .st{font-size:calc(var(--u)*2.8);color:#ffd23a}
.zr-node.next{background:linear-gradient(180deg,#7af05a,#2fa81e);border-color:#0e3a0e}
.zr-node.lock{filter:grayscale(.8);opacity:.6}
.zr-shop{display:flex;flex-direction:column;gap:calc(var(--u)*2);width:100%}
.zr-up{display:flex;align-items:center;gap:calc(var(--u)*2.4);background:rgba(0,0,0,.25);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*2)}
.zr-up .ic{font-size:calc(var(--u)*8)}
.zr-up .nm{flex:1;font-weight:900;font-size:calc(var(--u)*4.2)}
.zr-pips{display:flex;gap:calc(var(--u)*.6);margin-top:calc(var(--u)*.8)}
.zr-pips i{width:calc(var(--u)*3.4);height:calc(var(--u)*1.6);border-radius:9px;background:#1e0e2a}
.zr-pips i.on{background:#ffc21a}
.zr-up .zr-btn{font-size:calc(var(--u)*4);min-height:calc(var(--u)*10);padding:calc(var(--u)*1) calc(var(--u)*3)}
.zr-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.65);background:rgba(30,10,40,.18);pointer-events:none;display:none}
.zr-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.zr-padarrow{position:absolute;font-size:calc(var(--u)*8);pointer-events:none;display:none;filter:drop-shadow(0 calc(var(--u)*.5) 0 #6a0a3a);color:#ff6aa8;transform:translate(-50%,-50%)}
.zr-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*18);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.zr-land .zr-panel{width:calc(var(--u)*120)}
.zr-land .zr-perks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:calc(var(--u)*2.4)}
.zr-land .zr-perk{flex-direction:column;text-align:center}
.zr-land .zr-map{grid-template-columns:repeat(5,minmax(0,1fr))}
.zr-land .zr-logo{top:calc(var(--u)*8)}
.zr-land .zr-menu{width:calc(var(--u)*64)}
.zr-land .zr-menu .zr-btn.big{min-height:calc(var(--u)*15)}
.zr-perks{display:flex;flex-direction:column;gap:calc(var(--u)*2.4);width:100%}
`;

export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}
