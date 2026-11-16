// The app is landscape only (owner request). On a phone or tablet browser that allows it (Android Chrome), the first
// touch opens full screen and locks the screen sideways. Browsers that refuse (iPhone Safari) simply carry on.
(function () {
  if (!window.matchMedia || !window.matchMedia('(pointer: coarse)').matches) return;
  var done = false;
  function lock() {
    if (done) return;
    done = true;
    var el = document.documentElement;
    var full = el.requestFullscreen ? el.requestFullscreen({ navigationUI: 'hide' }) : null;
    Promise.resolve(full).then(function () {
      if (screen.orientation && screen.orientation.lock) return screen.orientation.lock('landscape');
    }).catch(function () { /* not allowed here */ });
  }
  window.addEventListener('pointerup', lock, { once: true, capture: true });
})();
