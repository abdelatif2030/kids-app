// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.rh-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.rh-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.rh-layer{position:absolute;inset:0;pointer-events:none}
.rh-layer button,.rh-layer .rh-card{pointer-events:auto}
.rh-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.rh-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.rh-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.rh-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.rh-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.rh-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.rh-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.rh-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.rh-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.rh-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.rh-label.full{background:#ffd75e;animation:rhPulse .5s infinite alternate}
@keyframes rhPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.rh-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.rh-toast.show{opacity:1}
.rh-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.rh-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.rh-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:rhUp 1s ease-out forwards}
@keyframes rhUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.rh-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.rh-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.rh-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.rh-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.rh-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.rh-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.rh-btn2:active{transform:translateY(calc(var(--u)*.5))}
.rh-btn2:focus-visible,.rh-node:focus-visible,.rh-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.rh-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.rh-land .rh-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.rh-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.rh-card .ic{font-size:calc(var(--u)*8)}
.rh-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.rh-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.rh-card .pips{display:flex;gap:calc(var(--u)*.6)}
.rh-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.rh-card .pip.on{background:#f2a51e}
.rh-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.rh-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.rh-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.rh-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.rh-node.next{animation:rhPulse2 .8s infinite alternate}
@keyframes rhPulse2{to{transform:scale(1.08)}}
.rh-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.rh-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.rh-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.rh-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.rh-stars .off{filter:grayscale(1);opacity:.4}
.rh-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.rh-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.rh-made b{display:block;font-size:calc(var(--u)*5.4)}
.rh-made span{font-size:calc(var(--u)*2.8)}
.rh-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
.rh-root{background:#7ad0c8;color:#2a2a3a}
.rh-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.rh-padlbl .ic{font-size:calc(var(--u)*6)}
.rh-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.rh-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.rh-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.rh-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.rh-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.rh-chefs{display:flex;gap:calc(var(--u)*3)}
.rh-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.rh-chef .f{font-size:calc(var(--u)*9)}
.rh-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.rh-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.rh-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.rh-root .rh-panel{background:rgba(250,244,230,.97);border-color:#d8343a;box-shadow:0 calc(var(--u)*1.2) 0 #8a1a20,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);color:#2a2a3a}
.rh-root .rh-title{color:#1f3a5a}
.rh-root .rh-logo{color:#d8343a;-webkit-text-stroke-color:#fff;text-shadow:0 calc(var(--u)*.8) 0 #1f3a5a}
.rh-shelf{display:flex;flex-direction:column;gap:calc(var(--u)*2.4);width:100%}
.rh-row{display:flex;align-items:center;gap:calc(var(--u)*2);border-bottom:calc(var(--u)*.8) solid #c8b8a0;padding-bottom:calc(var(--u)*1)}
.rh-row .lbl{flex:1;background:#fff;border-radius:calc(var(--u)*1);padding:calc(var(--u)*1) calc(var(--u)*2);font-weight:900;font-size:calc(var(--u)*3.2);box-shadow:0 calc(var(--u)*.4) 0 #c8b8a0}
.rh-rec{width:calc(var(--u)*15);height:calc(var(--u)*15);border-radius:50%;border:none;cursor:pointer;background:radial-gradient(circle,#e8342a 0 22%,#ffd23a 23% 25%,#1a1a20 26% 100%);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*5);position:relative;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*1.6) rgba(0,0,0,.35)}
.rh-rec.lock{filter:grayscale(1) brightness(1.3);opacity:.6}
.rh-rec .stars{position:absolute;bottom:calc(var(--u)*-4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*2.6);white-space:nowrap;color:#2a2a3a}
.rh-hudl{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*15);display:flex;gap:calc(var(--u)*1.2);pointer-events:none}
.rh-box{background:#fff8ea;border:calc(var(--u)*.4) solid #c8b8a0;border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;font-weight:900;color:#2a2a3a;box-shadow:0 calc(var(--u)*.5) 0 #c8b8a0}
.rh-box b{font-size:calc(var(--u)*6);line-height:1}
.rh-box span{font-size:calc(var(--u)*2.3)}
.rh-faces{display:flex;flex-wrap:wrap;gap:calc(var(--u)*.3);max-width:calc(var(--u)*30);font-size:calc(var(--u)*3.6);background:#fff8ea;border:calc(var(--u)*.4) solid #c8b8a0;border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.6)}
.rh-faces i{font-style:normal}
.rh-faces i.off{filter:grayscale(1);opacity:.3}
.rh-ring{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*15);width:calc(var(--u)*12);height:calc(var(--u)*12);border-radius:50%;background:conic-gradient(#e8342a var(--p,0%),#2a2a3a 0);border:calc(var(--u)*.6) solid #fff8ea;pointer-events:none}
.rh-ring:after{content:'';position:absolute;inset:30%;border-radius:50%;background:#fff8ea}
.rh-beat{position:absolute;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*1.2);background:#fff8ea;border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*2);pointer-events:none}
.rh-beat i{width:calc(var(--u)*2.4);height:calc(var(--u)*2.4);border-radius:50%;background:#c8d8e8;display:block}
.rh-beat i.on{background:#2a8ae8;transform:scale(1.3)}
.rh-cbtn{position:absolute;border-radius:50%;border:none;cursor:pointer;pointer-events:auto;background:radial-gradient(circle,#2a2a30 0 30%,#16161a 31% 100%);color:#fff;font-size:calc(var(--u)*8);display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.35),inset 0 0 0 calc(var(--u)*.6) #3a3a44;touch-action:none;user-select:none;-webkit-user-select:none}
.rh-jump{width:calc(var(--u)*20);height:calc(var(--u)*20);bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*12);inset-inline-end:calc(var(--u)*4)}
.rh-duck{width:calc(var(--u)*15);height:calc(var(--u)*15);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*20)}
.rh-cbtn:active,.rh-cbtn.on{transform:scale(.92)}
.rh-hint{position:absolute;left:50%;bottom:calc(max(calc(var(--u)*3),env(safe-area-inset-bottom)) + var(--u)*36);transform:translateX(-50%);background:rgba(255,248,234,.95);border:calc(var(--u)*.4) solid #c8b8a0;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.4);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s;color:#2a2a3a}
.rh-hint.show{opacity:1}
.rh-pop{position:absolute;font-weight:900;font-size:calc(var(--u)*4);color:#fff;background:#d8343a;padding:0 calc(var(--u)*1.6);border-radius:calc(var(--u)*1);transform:translate(-50%,-100%);pointer-events:none;animation:rhPop .9s ease-out forwards}
@keyframes rhPop{from{transform:translate(-50%,-100%) scale(1.4)}to{transform:translate(-50%,-220%) scale(1);opacity:0}}
.rh-count{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*18);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #d8343a;paint-order:stroke fill;pointer-events:none}
.rh-hearts{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*14);inset-inline-end:calc(var(--u)*13);font-size:calc(var(--u)*4.4);pointer-events:none}
`;
