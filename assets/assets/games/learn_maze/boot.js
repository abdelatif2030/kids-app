// Boot for the app's built-in browser view (Android/iOS). The app calls window.crStart(config) when the page is
// ready and listens on the "RehlatyRace" channel. Opened on its own (for checking in a browser) it starts by itself.
(function () {
  var game = null;
  function post(msg) {
    var s = JSON.stringify(msg);
    if (window.RehlatyRace && window.RehlatyRace.postMessage) window.RehlatyRace.postMessage(s);
    else {
      if (window.console) console.log('[maze]', s);
      // opened on its own (a browser check): say words with the browser's voice
      if (msg.type === 'speak' && window.speechSynthesis) { var u = new SpeechSynthesisUtterance(msg.text); u.lang = msg.lang === 'en' ? 'en-US' : 'ar-EG'; speechSynthesis.cancel(); speechSynthesis.speak(u); }
    }
  }
  window.crStart = function (config) {
    if (game) game.dispose();
    config = config || {};
    config.base = config.base || './';
    game = window.LearnMaze.start(document.getElementById('game'), config, post);
  };
  window.crPause = function () { if (game) game.pause(); };
  window.crStop = function () { if (game) game.dispose(); game = null; };
  if (!window.RehlatyRace) {
    var q = new URLSearchParams(location.search);
    window.crStart({ lang: q.get('lang') || 'ar', age: Number(q.get('age') || 5), gender: q.get("g") || "boy" });
  } else {
    post({ type: 'loaded' });
  }
})();
