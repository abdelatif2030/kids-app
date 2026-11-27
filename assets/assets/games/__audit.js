window.__audit3 = async function(){
  const g = window.LearnLetters.last; const V = g.st.camera.position.constructor;
  const root = g.sh.root.getBoundingClientRect();
  const out = []; let n = 0, shifted = 0, minPanel = 1e9, cut = 0, maxShift = 0;
  for (const sec of g._learnData().filter(s => !window.__only || window.__only.includes(s.id))) {
    if (sec.kind === 'numbers') continue;
    for (let i = 0; i < sec.items.length; i++) {
      g._learnOpen(sec.id, i, false);
      const ex = document.querySelector('.lw-ex'); if (!ex) break;
      ex.click();
      await new Promise(r => setTimeout(r, window.__wait || 700));
      const panel = document.querySelector('.lw-expanel'); const pr = panel.getBoundingClientRect();
      if (g.st._shift && g.st._shift[0]) { shifted++; maxShift = Math.max(maxShift, g.st._shift[0]); }
      minPanel = Math.min(minPanel, pr.width);
      if (panel.scrollHeight > panel.clientHeight + 2) cut++;
      let grp = g.standItem; if (!grp) continue;
      const inner = grp.userData && grp.userData.pet && grp.userData.pet.inner; if (inner) grp = inner;
      grp.updateMatrixWorld(true);
      let minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
      grp.traverse(m => { if (!m.geometry || !m.visible) return; const geo=m.geometry; if(!geo.boundingBox) geo.computeBoundingBox(); const b=geo.boundingBox; if(!b||!isFinite(b.min.x)) return;
        for (const x of [b.min.x,b.max.x]) for (const y of [b.min.y,b.max.y]) for (const z of [b.min.z,b.max.z]) { const v=new V(x,y,z).applyMatrix4(m.matrixWorld).project(g.st.camera); const px=root.left+(v.x+1)/2*root.width, py=root.top+(1-v.y)/2*root.height; minX=Math.min(minX,px);maxX=Math.max(maxX,px);minY=Math.min(minY,py);maxY=Math.max(maxY,py);} });
      n++;
      const ox = maxX - pr.left, vert = maxY > pr.top && minY < pr.bottom;
      if (ox > 2 && vert) out.push(sec.id+'#'+i+' '+sec.items[i].label+' over '+Math.round(ox));
    }
  }
  return JSON.stringify({checked:n, bad:out.length, sample:out.slice(0,10), shifted, maxShift, minPanel:Math.round(minPanel), scrollCut:cut, W:root.width});
};
