// Screens and the race HUD (like the owner's video: big position "4/4", a lap chip, a timer pill, a round course map,
// the speed in the middle, a round BOOST button that fills as rings charge it).
export const CSS = `
.ar-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#8ad0f8}
.ar-root canvas{display:block;width:100%;height:100%}
.ar-layer{position:absolute;inset:0;pointer-events:none}
.ar-layer button,.ar-layer .ar-card{pointer-events:auto}
.ar-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#e8322a;background:#8ad0f8}
.ar-round{position:absolute;width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:calc(var(--u)*2.6);border:none;background:rgba(14,22,40,.78);color:#fff;font-size:calc(var(--u)*4.6);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;box-shadow:0 calc(var(--u)*.4) calc(var(--u)*1.2) rgba(0,0,0,.3)}
.ar-round:focus-visible,.ar-boost:focus-visible,.ar-cbtn:focus-visible,.ar-course:focus-visible{outline:calc(var(--u)*.7) solid #ffd21a;outline-offset:calc(var(--u)*.5)}
.ar-toast{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);background:rgba(14,22,40,.8);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none}
.ar-toast.show{opacity:1}
.ar-dim{position:absolute;inset:0;background:rgba(8,14,30,.45);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.ar-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*22);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.ar-big{font-style:italic;font-weight:900;text-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) rgba(0,0,0,.55)}
.ar-pos{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*3.4);display:flex;flex-direction:column;align-items:flex-start;gap:calc(var(--u)*.6);direction:ltr}
.ar-pos .n{font-size:calc(var(--u)*10);line-height:1}
.ar-pos .n small{font-size:calc(var(--u)*4.4)}
.ar-chip{background:rgba(14,22,40,.78);border-radius:calc(var(--u)*1.4);padding:calc(var(--u)*.4) calc(var(--u)*1.8);font-weight:900;font-size:calc(var(--u)*3);white-space:nowrap;font-style:italic}
.ar-timer{position:absolute;top:max(calc(var(--u)*2.6),env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:rgba(14,22,40,.78);border-radius:calc(var(--u)*2);padding:calc(var(--u)*.7) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*3.8);direction:ltr;font-variant-numeric:tabular-nums}
.ar-mapwrap{position:absolute;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*12);right:calc(var(--u)*3);width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;background:rgba(14,22,40,.6);overflow:hidden}
.ar-mapwrap canvas{width:100%;height:100%}
.ar-speed{position:absolute;left:50%;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));transform:translateX(-50%);text-align:center;line-height:1;direction:ltr}
.ar-speed b{display:block;font-size:calc(var(--u)*8)}
.ar-speed span{font-size:calc(var(--u)*2.6);font-weight:700;opacity:.85}
.ar-boost{position:absolute;right:calc(var(--u)*4);bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));width:calc(var(--u)*19);height:calc(var(--u)*19);border-radius:50%;border:none;padding:0;cursor:pointer;font-family:inherit;color:#fff;font-weight:900;font-style:italic;font-size:calc(var(--u)*3.2);display:flex;flex-direction:column;align-items:center;justify-content:center;--p:0;background:radial-gradient(circle,#1c2a4a 0 62%,transparent 63%),conic-gradient(#ffd21a calc(var(--p)*1%),rgba(255,255,255,.18) 0);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(0,0,0,.35);touch-action:none}
.ar-boost i{font-style:normal;font-size:calc(var(--u)*6);line-height:1}
.ar-boost.ready{background:radial-gradient(circle,#ffc21a 0 66%,#fff3b0 67%);color:#3a2a00;animation:arPulse .9s ease-in-out infinite}
.ar-boost.on{background:radial-gradient(circle,#ff7a1a 0 66%,#ffd21a 67%);color:#fff}
@keyframes arPulse{50%{transform:scale(1.07)}}
.ar-hint{position:absolute;left:50%;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*10);transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*3.6);text-shadow:0 1px 3px rgba(0,0,0,.8);white-space:nowrap;pointer-events:none;transition:opacity .4s}
.ar-count{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-size:calc(var(--u)*24);pointer-events:none}
.ar-count.pop{animation:arCount .9s ease-out forwards}
@keyframes arCount{from{transform:translate(-50%,-50%) scale(1.6);opacity:0}25%{opacity:1;transform:translate(-50%,-50%) scale(1)}to{opacity:0;transform:translate(-50%,-50%) scale(.8)}}
.ar-pop{position:absolute;font-weight:900;font-style:italic;font-size:calc(var(--u)*6);color:#ffd21a;-webkit-text-stroke:calc(var(--u)*.35) #3a2a00;paint-order:stroke fill;transform:translate(-50%,-50%);pointer-events:none;animation:arPop 0.9s ease-out forwards;white-space:nowrap}
@keyframes arPop{from{transform:translate(-50%,-50%) scale(1.5)}to{transform:translate(-50%,-160%) scale(1);opacity:0}}
.ar-card{background:rgba(14,22,40,.92);border-radius:calc(var(--u)*4);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.6);box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.45);max-width:92%;max-height:92%;overflow:auto;box-sizing:border-box}
.ar-card h2{margin:0;font-size:calc(var(--u)*5.4);font-weight:900;text-align:center}
.ar-courses{display:flex;flex-direction:column;gap:calc(var(--u)*1.4);width:calc(var(--u)*70);max-width:100%}
.ar-course{display:flex;align-items:center;gap:calc(var(--u)*2.4);background:rgba(255,255,255,.08);border:calc(var(--u)*.4) solid rgba(255,255,255,.15);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.4) calc(var(--u)*2.4);color:#fff;font-family:inherit;cursor:pointer;text-align:start}
.ar-course.next{border-color:#ffd21a;background:rgba(255,210,26,.15)}
.ar-course.lock{opacity:.45}
.ar-course .no{font-size:calc(var(--u)*6);font-weight:900;font-style:italic;direction:ltr;min-width:calc(var(--u)*9)}
.ar-course .nm{flex:1;display:flex;flex-direction:column}
.ar-course .nm b{font-size:calc(var(--u)*4);font-weight:900}
.ar-course .nm span{font-size:calc(var(--u)*2.8);color:#ffd21a;letter-spacing:.1em}
.ar-course .lp{font-size:calc(var(--u)*2.6);font-weight:900;background:rgba(255,255,255,.12);border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*1.6)}
.ar-row3{display:flex;gap:calc(var(--u)*3)}
.ar-row3 div{display:flex;flex-direction:column;align-items:center;font-weight:700;font-size:calc(var(--u)*2.8);width:calc(var(--u)*17);text-align:center}
.ar-row3 b{font-size:calc(var(--u)*9)}
.ar-row3 .off b{filter:grayscale(1);opacity:.35}
.ar-medal{font-size:calc(var(--u)*14);line-height:1}
.ar-cbtn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.2);border:none;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*5);cursor:pointer;background:#ffc21a;color:#3a2a00;box-shadow:0 calc(var(--u)*.8) 0 #c88a00}
.ar-cbtn.alt{background:#e8eef8;color:#1c2a4a;box-shadow:0 calc(var(--u)*.8) 0 #9aa8c0}
.ar-mute{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));right:calc(var(--u)*15)}
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
