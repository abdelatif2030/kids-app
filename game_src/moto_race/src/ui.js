// Screens on top of the 3D farm: HUD, farm map, tool shed, results. Warm wood-and-cream style; one unit = 1% of the
// shorter side of the container, so phones, tablets and big screens all look right.
export const CSS = `
.mr-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.mr-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.mr-layer{position:absolute;inset:0;pointer-events:none}
.mr-layer button,.mr-layer .mr-card{pointer-events:auto}
.mr-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.mr-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.mr-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.mr-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.mr-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.mr-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.mr-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.mr-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.mr-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.mr-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.mr-label.full{background:#ffd75e;animation:mrPulse .5s infinite alternate}
@keyframes mrPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.mr-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.mr-toast.show{opacity:1}
.mr-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.mr-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.mr-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:mrUp 1s ease-out forwards}
@keyframes mrUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.mr-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.mr-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.mr-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.mr-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.mr-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.mr-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.mr-btn2:active{transform:translateY(calc(var(--u)*.5))}
.mr-btn2:focus-visible,.mr-node:focus-visible,.mr-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.mr-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.mr-land .mr-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.mr-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.mr-card .ic{font-size:calc(var(--u)*8)}
.mr-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.mr-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.mr-card .pips{display:flex;gap:calc(var(--u)*.6)}
.mr-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.mr-card .pip.on{background:#f2a51e}
.mr-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.mr-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.mr-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.mr-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.mr-node.next{animation:mrPulse2 .8s infinite alternate}
@keyframes mrPulse2{to{transform:scale(1.08)}}
.mr-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.mr-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.mr-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.mr-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.mr-stars .off{filter:grayscale(1);opacity:.4}
.mr-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.mr-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.mr-made b{display:block;font-size:calc(var(--u)*5.4)}
.mr-made span{font-size:calc(var(--u)*2.8)}
.mr-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
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
.mr-root{background:#3aa0d8;color:#0f2a4a}
.mr-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.mr-padlbl .ic{font-size:calc(var(--u)*6)}
.mr-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.mr-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.mr-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.mr-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.mr-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.mr-chefs{display:flex;gap:calc(var(--u)*3)}
.mr-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.mr-chef .f{font-size:calc(var(--u)*9)}
.mr-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.mr-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.mr-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`;
export const CSS3 = `
.mr-root .mr-panel{background:rgba(22,24,34,.92);border-color:#ff4a3a;box-shadow:0 calc(var(--u)*1.2) 0 #8a1a10,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.45);color:#fff}
.mr-root .mr-title{color:#ffd23a}
.mr-root .mr-logo{color:#ff4a3a;-webkit-text-stroke-color:#fff;text-shadow:0 calc(var(--u)*.8) 0 #8a1a10;font-style:italic}
.mr-root .mr-node{background:radial-gradient(circle at 40% 35%,#ff6a4a,#c0201a);box-shadow:0 calc(var(--u)*.8) 0 #6a0a08}
.mr-root .mr-node.lock{background:radial-gradient(circle at 40% 35%,#6a6e7a,#3a3e4a);box-shadow:0 calc(var(--u)*.8) 0 #1a1e2a}
.mr-root .mr-map{grid-template-columns:repeat(4,calc(var(--u)*16))}
.mr-root .mr-node{width:calc(var(--u)*16);height:calc(var(--u)*16)}
.mr-root .mr-btn2{background:linear-gradient(180deg,#ff5a3a,#d0281a);box-shadow:0 calc(var(--u)*.8) 0 #7a1008}
.mr-root .mr-btn2.wood{background:linear-gradient(180deg,#4a4e5a,#2a2e3a);box-shadow:0 calc(var(--u)*.8) 0 #10121a}
.mr-colors{display:flex;gap:calc(var(--u)*2)}
.mr-col{width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.3);cursor:pointer;padding:0}
.mr-col.on{border-color:#ffd23a;box-shadow:0 0 0 calc(var(--u)*.5) #ffd23a}
.mr-pos{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*15);background:rgba(16,18,26,.82);color:#fff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.4) calc(var(--u)*2.4);font-weight:900;display:flex;align-items:baseline;gap:calc(var(--u)*.6);pointer-events:none}
.mr-pos b{font-size:calc(var(--u)*9);line-height:1}
.mr-pos span{font-size:calc(var(--u)*3.6);opacity:.8}
.mr-pos.up b{color:#5aff8a}
.mr-lap{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*12);inset-inline-start:calc(var(--u)*15);background:rgba(16,18,26,.82);color:#fff;border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.3) calc(var(--u)*2);font-weight:900;font-size:calc(var(--u)*3.4);pointer-events:none}
.mr-board{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*18.5);inset-inline-start:calc(var(--u)*15);display:flex;flex-direction:column;gap:calc(var(--u)*.4);pointer-events:none}
.mr-board div{display:flex;align-items:center;gap:calc(var(--u)*1);background:rgba(16,18,26,.75);color:#fff;font-weight:900;font-size:calc(var(--u)*2.7);padding:calc(var(--u)*.15) calc(var(--u)*1.4);border-radius:calc(var(--u)*.8);min-width:calc(var(--u)*24)}
.mr-board div.me{background:#e8342a}
.mr-board i{width:calc(var(--u)*.8);height:calc(var(--u)*2.6);display:block}
.mr-board em{margin-inline-start:auto;font-style:normal;opacity:.8;font-size:calc(var(--u)*2.4)}
.mr-time{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:rgba(16,18,26,.82);color:#fff;border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.4) calc(var(--u)*2.4);font-weight:900;font-size:calc(var(--u)*4);pointer-events:none;font-variant-numeric:tabular-nums}
.mr-mini{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*12);inset-inline-end:calc(var(--u)*3);width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:50%;background:rgba(16,18,26,.75);pointer-events:none}
.mr-speedo{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;background:radial-gradient(circle,#1a1c26 60%,#2a2e3a);border:calc(var(--u)*.8) solid #ff6a3a;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:900;pointer-events:none}
.mr-speedo b{font-size:calc(var(--u)*7);line-height:1}
.mr-speedo span{font-size:calc(var(--u)*2.4);opacity:.75}
.mr-speedo i{font-style:normal;font-size:calc(var(--u)*3);background:#ff6a3a;border-radius:999px;padding:0 calc(var(--u)*1.4);margin-top:calc(var(--u)*.4)}
.mr-speedo.boost{border-color:#5ad8ff;box-shadow:0 0 calc(var(--u)*4) #5ad8ff}
.mr-cbtn{position:absolute;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));width:calc(var(--u)*19);height:calc(var(--u)*19);border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.9);color:#fff;font-family:inherit;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0;cursor:pointer;pointer-events:auto;box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.35);user-select:none;-webkit-user-select:none;touch-action:none}
.mr-cbtn b{font-size:calc(var(--u)*7);line-height:1}
.mr-cbtn span{font-size:calc(var(--u)*2.8)}
.mr-brake{inset-inline-start:calc(var(--u)*4);background:radial-gradient(circle at 40% 35%,#ff7a6a,#c0201a)}
.mr-brake.on{transform:scale(.92);filter:brightness(1.2)}
.mr-nitro{inset-inline-end:calc(var(--u)*4);background:conic-gradient(#5ad8ff var(--n,0%),#2a3a5a 0)}
.mr-nitro.ready{animation:mrGlow .6s infinite alternate}
@keyframes mrGlow{to{box-shadow:0 0 calc(var(--u)*4) #5ad8ff}}
.mr-steer{position:absolute;bottom:calc(max(calc(var(--u)*4),env(safe-area-inset-bottom)) + var(--u)*24);left:50%;transform:translateX(-50%);width:calc(var(--u)*40);height:calc(var(--u)*2.4);border-radius:999px;background:rgba(16,18,26,.4);pointer-events:none}
.mr-steer i{position:absolute;top:50%;left:50%;width:calc(var(--u)*5);height:calc(var(--u)*5);margin:calc(var(--u)*-2.5) 0 0 calc(var(--u)*-2.5);border-radius:50%;background:#fff;box-shadow:0 0 calc(var(--u)*1) rgba(0,0,0,.4)}
.mr-lights{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);display:flex;gap:calc(var(--u)*2);background:rgba(16,18,26,.85);padding:calc(var(--u)*2) calc(var(--u)*3);border-radius:calc(var(--u)*3);pointer-events:none;direction:ltr}
.mr-lights i{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;background:#3a1010;display:block}
.mr-lights i.on{background:#ff2a2a;box-shadow:0 0 calc(var(--u)*3) #ff2a2a}
.mr-lights.go i{background:#3aff6a;box-shadow:0 0 calc(var(--u)*3) #3aff6a}
.mr-tag{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*6);color:#fff;-webkit-text-stroke:calc(var(--u)*.4) #1a1a2a;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .25s;font-style:italic}
.mr-tag.show{opacity:1}
.mr-titlecard{position:absolute;left:0;right:0;top:56%;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);pointer-events:none;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.6)}
.mr-titlecard b{font-size:calc(var(--u)*8);font-weight:900;font-style:italic;letter-spacing:.02em}
.mr-titlecard span{font-size:calc(var(--u)*3);font-weight:700;opacity:.9}
.mr-titlecard i{display:block;width:calc(var(--u)*18);height:calc(var(--u)*.8);background:#ff3a2a;border-radius:9px}
.mr-speedlines{position:absolute;inset:0;pointer-events:none;opacity:0;background:repeating-conic-gradient(from 0deg at 50% 55%,rgba(255,255,255,0) 0deg 6deg,rgba(255,255,255,.22) 6deg 7deg);-webkit-mask:radial-gradient(circle at 50% 55%,transparent 32%,#000 70%);mask:radial-gradient(circle at 50% 55%,transparent 32%,#000 70%);transition:opacity .3s}
.mr-podium{display:flex;align-items:flex-end;gap:calc(var(--u)*1.6);margin:calc(var(--u)*1) 0}
.mr-podium div{display:flex;flex-direction:column;align-items:center;font-weight:900;color:#fff;font-size:calc(var(--u)*2.8)}
.mr-podium .f{font-size:calc(var(--u)*7)}
.mr-podium .st{width:calc(var(--u)*13);border-radius:calc(var(--u)*1) calc(var(--u)*1) 0 0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*6)}
`;
