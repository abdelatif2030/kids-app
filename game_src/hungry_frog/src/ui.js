// Screens and HUD like the owner's video: soft green pills with white rims, the round level badge, a drops counter,
// hearts and the "Grow to 15 to evolve!" bar, cream hint pills with a green border, the big pink LEAP button with a
// cooldown ring, pink "GULPED!" ribbon, green Retry and brown Pond map buttons, "LEVEL 1" title cards.
export const CSS = `
.hf-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#2a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#a8b8c0}
.hf-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.hf-layer{position:absolute;inset:0;pointer-events:none}
.hf-layer button,.hf-layer .hf-card{pointer-events:auto}
.hf-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#3aa83a;background:#dfeee0}
.hf-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(180deg,#8ee06a,#4cb83a);border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.6);color:#1a3a10;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.2) rgba(0,0,0,.2);direction:ltr}
.hf-pill .w{background:#fff;border-radius:999px;padding:0 calc(var(--u)*2);display:inline-flex;align-items:center;gap:calc(var(--u)*.8)}
.hf-round{position:absolute;width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#8ee06a,#3aa82a);color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.2) rgba(0,0,0,.2)}
.hf-round.lv{background:radial-gradient(circle at 40% 35%,#c8c8f8,#8a8ad8);color:#2a2a6a}
.hf-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*15);right:calc(var(--u)*15);display:flex;justify-content:center}
.hf-goal{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*11.5);left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.6);direction:ltr}
.hf-hearts{display:flex;gap:calc(var(--u)*.6);background:#fff;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*1.4);font-size:calc(var(--u)*4)}
.hf-hearts b{color:#ff3a6a}
.hf-hearts b.off{color:#c8c8c8}
.hf-bar{flex:1;position:relative;height:calc(var(--u)*6);background:#9ab890;border-radius:999px;border:calc(var(--u)*.4) solid #fff;overflow:hidden;box-shadow:0 calc(var(--u)*.4) calc(var(--u)*1) rgba(0,0,0,.15)}
.hf-bar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(180deg,#8ee06a,#3aa82a);border-radius:999px;transition:width .3s}
.hf-bar span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;text-shadow:0 0 calc(var(--u)*.6) #1a5a10,0 calc(var(--u)*.3) 0 #1a5a10;white-space:nowrap;direction:rtl}
.hf-bar.boss i{background:linear-gradient(180deg,#ff8ab0,#e8326a)}
.hf-frogicon{font-size:calc(var(--u)*5)}
.hf-hint{position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);background:#fffbe8;border:calc(var(--u)*.7) solid #6ac84a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);text-align:center;max-width:calc(var(--u)*80);opacity:0;transition:opacity .3s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.2)}
.hf-hint.show{opacity:1}
.hf-leap{position:absolute;right:calc(var(--u)*4);bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 30%,#ff8ab8,#e8327a 70%);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.3);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*9);pointer-events:auto;--cd:0}
.hf-leap::after{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(60,20,40,.55) calc(var(--cd)*1%),transparent 0)}
.hf-leap:active{transform:scale(.95)}
.hf-tag{position:absolute;transform:translate(-50%,-100%);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none;color:#1a2a10;text-shadow:0 0 calc(var(--u)*.6) #fff,0 0 calc(var(--u)*.6) #fff;display:flex;align-items:center;gap:calc(var(--u)*.6);direction:ltr}
.hf-tag.me{background:rgba(255,255,255,.85);border-radius:999px;padding:0 calc(var(--u)*1.6)}
.hf-tag.red{color:#e8203a}
.hf-tag.boss{font-size:calc(var(--u)*4.4)}
.hf-pop{position:absolute;transform:translate(-50%,-50%);font-weight:900;white-space:nowrap;pointer-events:none;animation:hfPop 1s ease-out forwards;font-size:calc(var(--u)*4);color:#2a8a1a;text-shadow:0 0 calc(var(--u)*.6) #fff,0 0 calc(var(--u)*.8) #fff}
.hf-pop.air{color:#3a6ad8;font-size:calc(var(--u)*3.4)}
.hf-pop.combo{color:#e8327a;font-size:calc(var(--u)*4.6)}
@keyframes hfPop{from{transform:translate(-50%,-50%) scale(1.5);opacity:0}15%{transform:translate(-50%,-50%) scale(1);opacity:1}75%{opacity:1}to{transform:translate(-50%,-180%);opacity:0}}
.hf-big{position:absolute;left:50%;top:26%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;opacity:0;transition:opacity .4s}
.hf-big.show{opacity:1}
.hf-big b{display:block;font-size:calc(var(--u)*10);color:#fff;-webkit-text-stroke:calc(var(--u)*.6) #2a6a1a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #2a6a1a}
.hf-big span{display:inline-block;margin-top:calc(var(--u)*1);font-size:calc(var(--u)*4.4);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.4) #6a4a0a;paint-order:stroke fill}
.hf-bossbar{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*20);left:50%;transform:translateX(-50%);display:none;align-items:center;gap:calc(var(--u)*1.6);background:#fff4f6;border:calc(var(--u)*.6) solid #e8327a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1) calc(var(--u)*2.4);font-weight:900;font-size:calc(var(--u)*3.6);color:#a81a4a;direction:ltr}
.hf-bossbar div{width:calc(var(--u)*30);height:calc(var(--u)*2.4);background:#f8d0dc;border-radius:999px;overflow:hidden}
.hf-bossbar i{display:block;height:100%;background:linear-gradient(90deg,#e8327a,#ff6aa8)}
.hf-dim{position:absolute;inset:0;background:rgba(30,40,30,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.hf-card{position:relative;background:#fffdf2;border:calc(var(--u)*.8) solid #6ac84a;border-radius:calc(var(--u)*5);padding:calc(var(--u)*7) calc(var(--u)*5) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3)}
.hf-ribbon{position:absolute;top:calc(var(--u)*-1);left:50%;transform:translateX(-50%);background:linear-gradient(180deg,#ff6aa8,#e8327a);border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*5);font-weight:900;font-size:calc(var(--u)*6);color:#fff;white-space:nowrap;box-shadow:0 calc(var(--u)*.6) 0 #a81a4a}
.hf-ribbon.green{background:linear-gradient(180deg,#8ee06a,#3aa82a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a10}
.hf-face{font-size:calc(var(--u)*16);line-height:1}
.hf-note{background:#ffe8ee;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1.4) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*3.8);text-align:center;width:100%;box-sizing:border-box}
.hf-small{font-size:calc(var(--u)*3.2);text-align:center;opacity:.85;font-weight:700;line-height:1.4}
.hf-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.25) #1a5a10;paint-order:stroke fill;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*12);cursor:pointer;background:linear-gradient(180deg,#8ee06a,#3aa82a);box-shadow:0 calc(var(--u)*.8) 0 #1a6a10;width:100%}
.hf-btn.brown{background:linear-gradient(180deg,#b8784a,#8a4a22);box-shadow:0 calc(var(--u)*.8) 0 #5a2a0a;-webkit-text-stroke-color:#5a2a0a;width:auto;font-size:calc(var(--u)*4.6)}
.hf-btn[disabled]{filter:grayscale(1);opacity:.6}
.hf-btn:active{transform:translateY(calc(var(--u)*.5))}
.hf-btn:focus-visible,.hf-round:focus-visible,.hf-leap:focus-visible,.hf-node:focus-visible{outline:calc(var(--u)*.7) solid #3a6ad8;outline-offset:calc(var(--u)*.5)}
.hf-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.hf-stars .off{filter:grayscale(1);opacity:.35}
.hf-stats{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*4)}
.hf-map{display:flex;flex-direction:column;gap:calc(var(--u)*2.4);width:100%}
.hf-node{display:flex;align-items:center;gap:calc(var(--u)*3);background:#eaf8e0;border:calc(var(--u)*.6) solid #6ac84a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*3);font-family:inherit;color:#2a3a1a;cursor:pointer;text-align:start}
.hf-node .n{width:calc(var(--u)*12);height:calc(var(--u)*12);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*6);color:#fff;background:linear-gradient(180deg,#8ee06a,#3aa82a);border:calc(var(--u)*.5) solid #fff;flex:none}
.hf-node .nm{flex:1;font-weight:900;font-size:calc(var(--u)*4.4)}
.hf-node .nm small{display:block;font-size:calc(var(--u)*3);opacity:.7}
.hf-node .st{font-size:calc(var(--u)*4);white-space:nowrap}
.hf-node.lock{opacity:.5;filter:grayscale(.8)}
.hf-node.dawn{background:linear-gradient(90deg,#eef0ff,#e0f0e0)}
.hf-node.marsh{background:linear-gradient(90deg,#e0f8e0,#f8f8d0)}
.hf-node.sunset{background:linear-gradient(90deg,#ffe0c8,#f8c8d8)}
.hf-logo{position:absolute;top:calc(var(--u)*14);left:50%;transform:translateX(-50%) rotate(-4deg);text-align:center;white-space:nowrap;font-weight:900;font-size:calc(var(--u)*10);color:#8ee06a;-webkit-text-stroke:calc(var(--u)*.8) #1a5a10;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1a5a10}
.hf-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*7),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*72);display:flex;flex-direction:column;gap:calc(var(--u)*2.6);align-items:center}
.hf-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.hf-land .hf-card{width:calc(var(--u)*100)}
.hf-land .hf-logo{top:calc(var(--u)*8)}
.hf-land .hf-goal{left:calc(var(--u)*25);right:calc(var(--u)*25)}
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
