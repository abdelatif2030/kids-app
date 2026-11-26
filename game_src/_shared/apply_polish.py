#!/usr/bin/env python3
# python3 _shared/apply_polish.py <game> [preset]  -> wires polishRenderer into src/main.js and aliases three in the build
import re,sys,json,os
g=sys.argv[1]; preset=sys.argv[2] if len(sys.argv)>2 else 'warm'
p=f'{g}/src/main.js'; s=open(p,encoding='utf8').read()
if 'polishRenderer' in s: print(g,'already'); sys.exit(0)
pat=re.compile(r'new THREE\.WebGLRenderer\((\{[^}]*\})?\)')
if not pat.search(s): print(g,'NO RENDERER'); sys.exit(1)
s=pat.sub(lambda m:f"polishRenderer(new THREE.WebGLRenderer({m.group(1) or ''}), {{ preset: '{preset}' }})",s,count=1)
# add import after last top-level import line
lines=s.split('\n'); idx=max(i for i,l in enumerate(lines) if l.startswith('import '))
# handle multi-line import: move to the end of the statement
j=idx
while not lines[j].rstrip().endswith(';'): j+=1
lines.insert(j+1,"import { polishRenderer } from './polish.js';")
open(p,'w',encoding='utf8').write('\n'.join(lines))
import shutil; shutil.copy('_shared/polish.js',f'{g}/src/polish.js')
print(g,'patched')
