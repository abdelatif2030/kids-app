// Boot for the app's built-in browser view (Android/iOS). The app calls window.crStart(config) when the page is
// ready and listens on the "RehlatyRace" channel. Opened on its own (for checking in a browser) it starts by itself.
(function () {
  var game = null;
  function post(msg) {
    var s = JSON.stringify(msg);
    if (window.RehlatyRace && window.RehlatyRace.postMessage) window.RehlatyRace.postMessage(s);
    else if (window.console) console.log('[frog]', s);
  }
  window.crStart = function (config) {
    if (game) game.dispose();
    config = config || {};
    config.base = config.base || './';
    game = window.HungryFrog.start(document.getElementById('game'), config, post);
  };
  window.crPause = function () { if (game) game.pause(); };
  window.crStop = function () { if (game) game.dispose(); game = null; };
  if (!window.RehlatyRace) {
    var q = new URLSearchParams(location.search);
    window.crStart({ lang: q.get('lang') || 'ar', age: Number(q.get('age') || 5), gender: q.get("g") || "boy", save: q.get("rich") ? { unlocked: 3, drops: 300 } : null });
  } else {
    post({ type: 'loaded' });
  }
})();
