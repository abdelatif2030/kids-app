// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.od-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.od-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.od-layer{position:absolute;inset:0;pointer-events:none}
.od-layer button,.od-layer .od-card{pointer-events:auto}
.od-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.od-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.od-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.od-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.od-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.od-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.od-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.od-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.od-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.od-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.od-label.full{background:#ffd75e;animation:odPulse .5s infinite alternate}
@keyframes odPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.od-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.od-toast.show{opacity:1}
.od-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.od-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.od-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:odUp 1s ease-out forwards}
@keyframes odUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.od-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.od-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.od-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.od-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.od-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.od-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.od-btn2:active{transform:translateY(calc(var(--u)*.5))}
.od-btn2:focus-visible,.od-node:focus-visible,.od-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.od-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.od-land .od-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.od-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.od-card .ic{font-size:calc(var(--u)*8)}
.od-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.od-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.od-card .pips{display:flex;gap:calc(var(--u)*.6)}
.od-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.od-card .pip.on{background:#f2a51e}
.od-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.od-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.od-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.od-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.od-node.next{animation:odPulse2 .8s infinite alternate}
@keyframes odPulse2{to{transform:scale(1.08)}}
.od-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.od-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.od-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.od-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.od-stars .off{filter:grayscale(1);opacity:.4}
.od-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.od-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.od-made b{display:block;font-size:calc(var(--u)*5.4)}
.od-made span{font-size:calc(var(--u)*2.8)}
.od-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
.od-root{background:#3aa0d8;color:#0f2a4a}
.od-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.od-padlbl .ic{font-size:calc(var(--u)*6)}
.od-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.od-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.od-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.od-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.od-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.od-chefs{display:flex;gap:calc(var(--u)*3)}
.od-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.od-chef .f{font-size:calc(var(--u)*9)}
.od-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.od-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.od-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.od-root .od-panel{background:rgba(240,252,255,.95);border-color:#2a8ad8;box-shadow:0 calc(var(--u)*1.2) 0 #1a5aa8,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);color:#0f2a4a}
.od-root .od-title{color:#1a6ac8}
.od-root .od-logo{-webkit-text-stroke-color:#1a4a98;text-shadow:0 calc(var(--u)*.8) 0 #1a4a98;color:#ffd23a}
.od-root .od-node{background:radial-gradient(circle at 40% 35%,#ffb04a,#e0601a);box-shadow:0 calc(var(--u)*.8) 0 #a03a10}
.od-root .od-node.lock{background:radial-gradient(circle at 40% 35%,#b8c8d8,#7890a8);box-shadow:0 calc(var(--u)*.8) 0 #4a6078}
.od-root .od-map{grid-template-columns:repeat(5,calc(var(--u)*15))}
.od-root .od-node{width:calc(var(--u)*15);height:calc(var(--u)*15)}
.od-hudtop{position:absolute;top:max(calc(var(--u)*2.2),env(safe-area-inset-top));inset-inline:calc(var(--u)*15);display:flex;flex-direction:column;gap:calc(var(--u)*1.2);pointer-events:none}
.od-row{display:flex;align-items:center;gap:calc(var(--u)*2)}
.od-lvl{flex:1;background:linear-gradient(180deg,#1f4a8a,#123a6a);border:calc(var(--u)*.45) solid #ffd23a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*.6) calc(var(--u)*2.2);color:#fff;font-weight:900;font-size:calc(var(--u)*3.4);display:flex;justify-content:space-between;align-items:center}
.od-dots{display:flex;gap:calc(var(--u)*1)}
.od-dots i{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2);border-radius:50%;background:#4a6a9a;display:block}
.od-dots i.on{background:#5ad8ff;box-shadow:0 0 calc(var(--u)*1) #5ad8ff}
.od-xp{position:relative;height:calc(var(--u)*3.4);background:rgba(10,30,60,.6);border-radius:999px;border:calc(var(--u)*.35) solid #9fe8ff;overflow:hidden}
.od-xp i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(90deg,#5ad8ff,#a8f4ff);transition:width .2s}
.od-xp b{position:absolute;inset-inline-start:calc(var(--u)*1.5);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*2.6);color:#0f2a4a}
.od-wallbar{position:absolute;left:50%;bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));transform:translateX(-50%);width:min(78%,calc(var(--u)*95));display:flex;align-items:center;gap:calc(var(--u)*1.5);pointer-events:none}
.od-wallbar div{position:relative;flex:1;height:calc(var(--u)*4.6);background:rgba(10,30,60,.65);border:calc(var(--u)*.45) solid #fff;border-radius:999px;overflow:hidden}
.od-wallbar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#7ae86a,#3ab84a);transition:width .25s}
.od-wallbar i.low{background:linear-gradient(180deg,#ff8a6a,#e0402a)}
.od-wallbar b{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#fff;font-size:calc(var(--u)*3.2);text-shadow:0 1px 2px #000}
.od-wallbar span{font-size:calc(var(--u)*6)}
.od-bossbar{position:absolute;left:50%;top:calc(max(calc(var(--u)*2.2),env(safe-area-inset-top)) + var(--u)*14);transform:translateX(-50%);width:min(70%,calc(var(--u)*85));text-align:center;font-weight:900;color:#fff;font-size:calc(var(--u)*3.4);text-shadow:0 1px 3px #000;display:none;pointer-events:none}
.od-bossbar div{height:calc(var(--u)*3);border-radius:999px;background:rgba(30,10,40,.7);border:calc(var(--u)*.4) solid #fff;overflow:hidden;margin-top:calc(var(--u)*.5)}
.od-bossbar i{display:block;height:100%;background:linear-gradient(90deg,#c04ae8,#ff6ad8);transition:width .2s}
.od-aimhint{position:absolute;left:50%;top:62%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*6);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #0f3a6a;paint-order:stroke fill;pointer-events:none;transition:opacity .4s;white-space:nowrap}
.od-banner{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*8);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #0f3a6a;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .25s}
.od-banner.show{opacity:1}
.od-cards{display:flex;gap:calc(var(--u)*2.4);flex-wrap:wrap;justify-content:center}
.od-power{font-family:inherit;width:calc(var(--u)*26);min-height:calc(var(--u)*34);border-radius:calc(var(--u)*3);border:calc(var(--u)*.7) solid #9fe8ff;background:linear-gradient(180deg,#2a6ac8,#163a8a);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*1);cursor:pointer;padding:calc(var(--u)*1.6);box-shadow:0 calc(var(--u)*1) 0 #0f2a6a;animation:odIn .35s ease-out backwards}
.od-power:nth-child(2){animation-delay:.08s}.od-power:nth-child(3){animation-delay:.16s}
@keyframes odIn{from{transform:translateY(calc(var(--u)*8)) scale(.8);opacity:0}}
.od-power .ic{font-size:calc(var(--u)*11)}
.od-power .nm{font-weight:900;font-size:calc(var(--u)*4)}
.od-power .sb{font-size:calc(var(--u)*2.8);opacity:.85}
.od-power:active{transform:scale(.95)}
.od-num{position:absolute;font-weight:900;font-size:calc(var(--u)*4.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.3) #0f2a4a;paint-order:stroke fill;pointer-events:none;animation:odNum .7s ease-out forwards}
@keyframes odNum{to{transform:translateY(calc(var(--u)*-8));opacity:0}}
`;
