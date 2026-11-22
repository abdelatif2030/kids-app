// Shows the game's painted picture (poster.webp, next to index.html) behind its menu panels; hidden again while playing.
(function () {
  var host = document.getElementById('game'); if (!host) return;
  var bg = document.createElement('div');
  bg.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;background:#000 url(poster.webp) center/cover no-repeat;opacity:0;transition:opacity .35s;pointer-events:none';
  function root() { return host.querySelector('[class$="-layer"],[class*="-layer "]'); }
  function menuUp() { var p = host.querySelectorAll('[class*="-panel"]'); for (var i = 0; i < p.length; i++) { if (p[i].offsetParent !== null) return true; } return false; }
  var busy = false;
  function sync() {
    if (busy) return; busy = true;
    var r = root(); if (r && bg.nextSibling !== r) r.parentNode.insertBefore(bg, r);
    bg.style.opacity = r && menuUp() ? '1' : '0';
    busy = false;
  }
  new MutationObserver(function () { sync(); }).observe(host, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
})();
