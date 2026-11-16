// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.sp-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.sp-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sp-layer{position:absolute;inset:0;pointer-events:none}
.sp-layer button,.sp-layer .sp-card{pointer-events:auto}
.sp-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.sp-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.sp-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.sp-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.sp-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.sp-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.sp-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.sp-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.sp-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.sp-label.full{background:#ffd75e;animation:spPulse2 .5s infinite alternate}
@keyframes spPulse2{to{transform:translate(-50%,-100%) scale(1.12)}}
.sp-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.sp-toast.show{opacity:1}
.sp-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.sp-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.sp-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:spUp 1s ease-out forwards}
@keyframes spUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.sp-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.sp-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.sp-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.sp-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.sp-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.sp-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.sp-btn2:active{transform:translateY(calc(var(--u)*.5))}
.sp-btn2:focus-visible,.sp-node:focus-visible,.sp-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.sp-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.sp-land .sp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.sp-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.sp-card .ic{font-size:calc(var(--u)*8)}
.sp-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.sp-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.sp-card .pips{display:flex;gap:calc(var(--u)*.6)}
.sp-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.sp-card .pip.on{background:#f2a51e}
.sp-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.sp-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.sp-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.sp-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.sp-node.next{animation:spPulse22 .8s infinite alternate}
@keyframes spPulse22{to{transform:scale(1.08)}}
.sp-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.sp-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.sp-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.sp-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.sp-stars .off{filter:grayscale(1);opacity:.4}
.sp-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.sp-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.sp-made b{display:block;font-size:calc(var(--u)*5.4)}
.sp-made span{font-size:calc(var(--u)*2.8)}
.sp-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
export const CSS2 = `
.sp-root{background:#38c8e8;color:#0a3a5a}
.sp-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.sp-padlbl .ic{font-size:calc(var(--u)*6)}
.sp-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.sp-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.sp-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.sp-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.sp-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.sp-chefs{display:flex;gap:calc(var(--u)*3)}
.sp-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.sp-chef .f{font-size:calc(var(--u)*9)}
.sp-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.sp-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.sp-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.sp-root .sp-panel{background:rgba(236,252,255,.96);border-color:#1aa8c8;box-shadow:0 calc(var(--u)*1.2) 0 #0a6a8a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);color:#0a3a5a}
.sp-root .sp-title{color:#0a7aa8}
.sp-root .sp-logo{color:#ffd23a;-webkit-text-stroke-color:#0a5a8a;text-shadow:0 calc(var(--u)*.8) 0 #0a5a8a}
.sp-root .sp-btn2{background:linear-gradient(180deg,#ffd84a,#f0a81a);color:#5a3a00;box-shadow:0 calc(var(--u)*.8) 0 #a86a00}
.sp-root .sp-btn2.wood{background:linear-gradient(180deg,#5ad0e8,#1aa0c8);color:#fff;box-shadow:0 calc(var(--u)*.8) 0 #0a6a8a}
.sp-map{position:relative;width:calc(var(--u)*64);height:calc(var(--u)*58);margin-top:calc(var(--u)*4)}
.sp-isle{position:absolute;width:calc(var(--u)*16);height:calc(var(--u)*16);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#8ae86a,#3aa84a);box-shadow:0 0 0 calc(var(--u)*1.6) #f0d8a0,0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.3);font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.4);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #1a6a2a;transform:translate(-50%,-50%)}
.sp-isle.lock{filter:grayscale(1);opacity:.6}
.sp-isle .stars{position:absolute;bottom:calc(var(--u)*-5.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*2.6);white-space:nowrap}
.sp-isle small{position:absolute;top:calc(var(--u)*-5);left:50%;transform:translateX(-50%);white-space:nowrap;font-size:calc(var(--u)*2.6);background:#fff;color:#0a5a8a;border-radius:999px;padding:0 calc(var(--u)*1.4);text-shadow:none}
.sp-dots{position:absolute;inset:0;pointer-events:none}
.sp-hudtop{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.6);pointer-events:none}
.sp-place{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-roundbar{flex:1;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6)}
.sp-roundbar b{background:linear-gradient(180deg,#5ad8f0,#1a8ab8);color:#fff;border:calc(var(--u)*.45) solid #fff;border-radius:calc(var(--u)*1.6);padding:0 calc(var(--u)*3);font-size:calc(var(--u)*3.4)}
.sp-prog{position:relative;width:100%;height:calc(var(--u)*4.4);background:rgba(10,58,90,.55);border:calc(var(--u)*.4) solid #fff;border-radius:999px}
.sp-prog i{position:absolute;top:50%;transform:translate(-50%,-50%);font-style:normal;font-size:calc(var(--u)*3.4);transition:left .2s}
.sp-prog i.me{font-size:calc(var(--u)*4.6);z-index:2}
.sp-prog:after{content:'🏁';position:absolute;inset-inline-end:calc(var(--u)*-1);top:50%;transform:translateY(-60%);font-size:calc(var(--u)*4.6)}
.sp-qual{width:calc(var(--u)*13);height:calc(var(--u)*13);border-radius:50%;background:radial-gradient(circle at 40% 35%,#5ad8f0,#1a8ab8);border:calc(var(--u)*.7) solid #fff;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*3.8);box-shadow:0 calc(var(--u)*.6) 0 #0a5a8a;flex:none}
.sp-breath{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*16);left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.8);pointer-events:none}
.sp-breath i{width:calc(var(--u)*3.6);height:calc(var(--u)*3.6);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fe8ff 45%,#3ab8e8);display:block;transition:opacity .2s}
.sp-breath i.off{opacity:.18}
.sp-cbtn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid #fff;color:#fff;font-family:inherit;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;pointer-events:auto;font-size:calc(var(--u)*3.6);box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3);touch-action:none;user-select:none;-webkit-user-select:none}
.sp-stroke{width:calc(var(--u)*19);height:calc(var(--u)*19);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ff7a5a,#d82a2a)}
.sp-dive{width:calc(var(--u)*17);height:calc(var(--u)*17);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3);background:radial-gradient(circle at 40% 35%,#5a9aff,#1a4ad8)}
.sp-cbtn:active,.sp-cbtn.on{transform:scale(.92)}
.sp-pulse{position:absolute;inset:calc(var(--u)*-2);border-radius:50%;border:calc(var(--u)*.7) solid #ffd23a;pointer-events:none;opacity:0}
.sp-pulse.go{animation:spPulse var(--b,.6s) linear}
@keyframes spPulse{from{transform:scale(1.6);opacity:.2}to{transform:scale(1);opacity:1}}
.sp-grade{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*6.4);-webkit-text-stroke:calc(var(--u)*.45) #0a3a5a;paint-order:stroke fill;pointer-events:none;opacity:0;white-space:nowrap}
.sp-grade.show{animation:spGrade .7s ease-out}
@keyframes spGrade{0%{opacity:1;transform:translate(-50%,-50%) scale(1.4)}100%{opacity:0;transform:translate(-50%,-90%) scale(1)}}
.sp-hint{position:absolute;left:50%;bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*24);transform:translateX(-50%);background:rgba(255,255,255,.95);border:calc(var(--u)*.4) solid #1aa8c8;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.4);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s;color:#0a3a5a}
.sp-hint.show{opacity:1}
.sp-count{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*18);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #1a8ab8;paint-order:stroke fill;pointer-events:none}
`;
