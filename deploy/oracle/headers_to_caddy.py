#!/usr/bin/env python3
"""Turns the Cloudflare-style tool/headers_login file into Caddy `header` lines (same security headers, same cache rules).
Usage: python3 headers_to_caddy.py ../../tool/headers_login > headers.caddy"""
import sys

def q(v):
    return '"' + v.replace('\\', '\\\\').replace('"', '\\"') + '"'

blocks, path = [], None
for raw in open(sys.argv[1], encoding='utf-8'):
    line = raw.rstrip('\n')
    if not line.strip() or line.lstrip().startswith('#'):
        continue
    if not line.startswith((' ', '\t')):
        path = line.strip()
        blocks.append((path, []))
    elif ':' in line and blocks:
        k, v = line.strip().split(':', 1)
        blocks[-1][1].append((k.strip(), v.strip()))

out = []
for i, (p, hs) in enumerate(blocks):
    if p in ('/*', '*'):
        out.append('header {')
        out += ['    %s %s' % (k, q(v)) for k, v in hs]
        out.append('}')
    else:
        out.append('@p%d path %s' % (i, p))
        out.append('header @p%d {' % i)
        out += ['    %s %s' % (k, q(v)) for k, v in hs]
        out.append('}')
print('\n'.join(out))
