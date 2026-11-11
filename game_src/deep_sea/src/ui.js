// Screens and HUD like the owner's video, made to fit a phone: dark navy glass panels, a teal Play button, the lives
// pill (little fish), the timer pill, the goal pill with a fish and a bar, white "Bait ball incoming" toasts, a gold
// "Combo x4", a red round dash button. The level card fits the screen without scrolling.
export const CSS = `
.ds-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#1a6a9a}
.ds-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ds-layer{position:absolute;inset:0;pointer-events:none}
.ds-layer button,.ds-layer .ds-card{pointer-events:auto}
.ds-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#5ae8d0;background:#0e3a5a}
.ds-glass{background:rgba(12,30,48,.78);border:calc(var(--u)*.3) solid rgba(160,220,255,.18);border-radius:calc(var(--u)*3);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*2) rgba(0,0,0,.3)}
.ds-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.6);align-items:center;direction:ltr}
.ds-lives{display:flex;gap:calc(var(--u)*.4);padding:calc(var(--u)*1.2) calc(var(--u)*2);font-size:calc(var(--u)*4)}
.ds-lives b{filter:hue-rotate(120deg) saturate(1.5)}
.ds-lives b.off{filter:grayscale(1);opacity:.3}
.ds-timer{flex:1;display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.4);padding:calc(var(--u)*1) calc(var(--u)*2);font-size:calc(var(--u)*5.4);font-weight:900;font-variant-numeric:tabular-nums}
.ds-timer.low{color:#ff8a8a}
.ds-sq{width:calc(var(--u)*11);height:calc(var(--u)*11);border:none;color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;justify-content:center;flex:none}
.ds-goal{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*14);left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*2);padding:calc(var(--u)*1.2) calc(var(--u)*3);min-width:calc(var(--u)*62);box-sizing:border-box}
.ds-goal .fish{font-size:calc(var(--u)*7)}
.ds-goal .txt{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.8)}
.ds-goal .txt span{font-size:calc(var(--u)*3.4);font-weight:700;opacity:.85}
.ds-goal .bar{height:calc(var(--u)*1.4);border-radius:9px;background:rgba(255,255,255,.18);overflow:hidden}
.ds-goal .bar i{display:block;height:100%;background:linear-gradient(90deg,#3ae8c0,#9affe8);transition:width .25s}
.ds-goal b{font-size:calc(var(--u)*5.6);font-weight:900;white-space:nowrap;direction:ltr}
.ds-toast{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:calc(var(--u)*1.6);background:#f2f8fc;color:#0e2a40;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*3.4);font-weight:900;font-size:calc(var(--u)*4);white-space:nowrap;opacity:0;transition:opacity .3s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.3)}
.ds-toast.show{opacity:1}
.ds-toast.red{background:#ffe0e4;color:#8a1a2a}
.ds-combo{position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);font-size:calc(var(--u)*8);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.4) #7a4a00;paint-order:stroke fill;pointer-events:none;opacity:0}
.ds-combo.pop{animation:dsPop .9s ease-out forwards}
@keyframes dsPop{from{transform:translate(-50%,-50%) scale(1.5);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}70%{opacity:1}to{transform:translate(-50%,-90%);opacity:0}}
.ds-plus{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*4);color:#9affe8;text-shadow:0 0 calc(var(--u)*1) #0e3a5a;pointer-events:none;animation:dsUp .8s ease-out forwards;white-space:nowrap}
@keyframes dsUp{to{transform:translate(-50%,-250%);opacity:0}}
.ds-warn{position:absolute;transform:translate(-50%,-100%);width:calc(var(--u)*7);height:calc(var(--u)*7);border-radius:50%;background:#ff3a4a;color:#fff;font-weight:900;font-size:calc(var(--u)*4.6);display:flex;align-items:center;justify-content:center;pointer-events:none;animation:dsWarn .3s ease-in-out infinite alternate;box-shadow:0 0 calc(var(--u)*2) #ff3a4a}
@keyframes dsWarn{to{transform:translate(-50%,-100%) scale(1.2)}}
.ds-dash{position:absolute;left:calc(var(--u)*5);bottom:max(calc(var(--u)*6),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.85);background:radial-gradient(circle at 40% 30%,#ff7a7a,#d8283a 70%);color:#fff;font-size:calc(var(--u)*8);cursor:pointer;padding:0;pointer-events:auto;box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.35);--cd:0;font-family:inherit}
.ds-dash::after{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(10,20,40,.6) calc(var(--cd)*1%),transparent 0)}
.ds-dash:active{transform:scale(.94)}
.ds-dim{position:absolute;inset:0;background:rgba(6,20,36,.5);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box;pointer-events:auto}
.ds-card{width:calc(var(--u)*84);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;padding:calc(var(--u)*5) calc(var(--u)*5) calc(var(--u)*4);display:flex;flex-direction:column;gap:calc(var(--u)*2.6);align-items:stretch}
.ds-card h2{margin:0;font-size:calc(var(--u)*7.4);font-weight:900;line-height:1.1}
.ds-card h3{margin:0;font-size:calc(var(--u)*4.2);font-weight:700;opacity:.8}
.ds-row{display:flex;align-items:center;gap:calc(var(--u)*3)}
.ds-pic{flex:none;width:calc(var(--u)*26);height:calc(var(--u)*18);border-radius:calc(var(--u)*3);background:radial-gradient(circle,#2a6a9a,#123a5a);display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*12)}
.ds-goaltxt{font-size:calc(var(--u)*6.4);font-weight:900;line-height:1.15}
.ds-info{display:flex;align-items:center;gap:calc(var(--u)*2);font-size:calc(var(--u)*4.4);font-weight:700}
.ds-info.star{color:#ffd23a}
.ds-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#0e2a40;border:none;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*6);min-height:calc(var(--u)*14);cursor:pointer;background:linear-gradient(180deg,#6af8d8,#2ad8b0);box-shadow:0 calc(var(--u)*.9) 0 #129a7a}
.ds-btn.ghost{background:rgba(12,30,48,.7);color:#fff;border:calc(var(--u)*.35) solid rgba(255,255,255,.3);box-shadow:none;font-size:calc(var(--u)*4.6);min-height:calc(var(--u)*11)}
.ds-btn:active{transform:translateY(calc(var(--u)*.5))}
.ds-btn:focus-visible,.ds-sq:focus-visible,.ds-dash:focus-visible,.ds-lv:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.ds-logo{position:absolute;top:calc(var(--u)*20);left:50%;transform:translateX(-50%);text-align:center;white-space:nowrap}
.ds-logo b{display:block;font-size:calc(var(--u)*13);font-weight:900;color:#fff4dc;-webkit-text-stroke:calc(var(--u)*.7) #a8421a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #6a2a0a;line-height:1}
.ds-logo span{display:inline-block;margin-top:calc(var(--u)*2.6);font-size:calc(var(--u)*4.2);font-weight:900;color:#ffd23a;letter-spacing:.04em}
.ds-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*12),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*70);display:flex;flex-direction:column;gap:calc(var(--u)*3)}
.ds-lvs{display:flex;flex-direction:column;gap:calc(var(--u)*2)}
.ds-lv{display:flex;align-items:center;gap:calc(var(--u)*3);border-radius:calc(var(--u)*3);padding:calc(var(--u)*2.2) calc(var(--u)*3);color:#fff;font-family:inherit;cursor:pointer;border:calc(var(--u)*.35) solid rgba(255,255,255,.2);text-align:start}
.ds-lv.reef{background:linear-gradient(90deg,#1a8ac8,#2ab8c8)}
.ds-lv.kelp{background:linear-gradient(90deg,#1a6a5a,#3a8a4a)}
.ds-lv.trench{background:linear-gradient(90deg,#0a1a3a,#2a1a5a)}
.ds-lv.lock{filter:grayscale(.8);opacity:.55}
.ds-lv .n{font-size:calc(var(--u)*8);font-weight:900;width:calc(var(--u)*10);text-align:center}
.ds-lv .nm{flex:1;font-weight:900;font-size:calc(var(--u)*4.6)}
.ds-lv .nm small{display:block;font-size:calc(var(--u)*3.2);opacity:.85;font-weight:700}
.ds-lv .st{font-size:calc(var(--u)*4);white-space:nowrap}
.ds-stars{font-size:calc(var(--u)*11);text-align:center;letter-spacing:calc(var(--u)*1)}
.ds-stars .off{filter:grayscale(1);opacity:.3}
.ds-stats{display:flex;justify-content:space-around;font-weight:900;font-size:calc(var(--u)*4.2)}
.ds-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*34);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.ds-land .ds-card{width:calc(var(--u)*110)}
.ds-land .ds-logo{top:calc(var(--u)*10)}
.ds-land .ds-goal{min-width:calc(var(--u)*56)}
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
