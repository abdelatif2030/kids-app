// Shows the game's painted picture (poster.webp, next to index.html) behind its menu panels; hidden again while playing.
(function () {
  var host = document.getElementById('game'); if (!host) return;
  var bg = document.createElement('div');
  bg.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;background:#000 url(poster.webp) center/cover no-repeat;opacity:0;pointer-events:none';
  // the game's hero (hero.webp, cut from the owner's character sheet) stands beside the menu on wide screens
  var hero = document.createElement('img'); hero.alt = ''; hero.decoding = 'async';
  hero.style.cssText = 'position:absolute;left:2%;bottom:0;height:58%;max-width:30%;object-fit:contain;object-position:left bottom;opacity:0;pointer-events:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))';
  var heroOk = false; hero.onload = function () { heroOk = true; }; hero.onerror = function () { heroOk = false; }; hero.src = 'hero.webp';
  function root() { return host.querySelector('[class$="-layer"],[class*="-layer "]'); }
  function menuUp() { var p = host.querySelectorAll('[class*="-panel"],[class*="-tracks"],.sh-card,.ar-card,.as-card,.rs-card'); for (var i = 0; i < p.length; i++) { if (p[i].offsetParent !== null) return true; } return false; }
  var busy = false;
  function sync() {
    if (busy) return; busy = true;
    var r = root(); if (r && (hero.nextSibling !== r || bg.nextSibling !== hero)) { r.parentNode.insertBefore(bg, r); r.parentNode.insertBefore(hero, r); }
    var up = r && menuUp(); bg.style.opacity = up ? '1' : '0';
    hero.style.opacity = up && heroOk && window.innerWidth / window.innerHeight > 1.5 ? '1' : '0';
    busy = false;
  }
  new MutationObserver(function () { sync(); }).observe(host, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
})();
