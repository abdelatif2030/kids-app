#!/usr/bin/env bash
# Cuts the owner's PARTS sheet (24.jpg, 1376x768: boy, girl and owl taken apart) into separate transparent pictures for the
# rigged characters:  bash tools/art/cut_parts.sh <folder with 24.jpg>
# Output: assets/games/art/rig/<character>_<part>.webp (lossless, 2x) and src/kit/rig_dims.json (their sizes).
set -e
I="${1:?folder with 24.jpg}"
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/../../assets/games/art/rig"
mkdir -p "$OUT"
TMP="$(mktemp -d)"
cut() { # name w h x y
  ffmpeg -v error -y -i "$I/24.jpg" -vf "format=rgba,crop=$2:$3:$4:$5" -f rawvideo -pix_fmt rgba - \
    | node "$HERE/matte.mjs" "$2" "$3" \
    | ffmpeg -v error -y -f rawvideo -pix_fmt rgba -s "$2x$3" -i - -vf "scale=iw*2:ih*2:flags=lanczos" "$TMP/$1.png"
}
# ---- boy ----
cut boy_head 138 150 18 62; cut boy_head34 142 150 160 62; cut boy_body 118 128 328 58
cut boy_arm_down 62 70 497 62; cut boy_arm_wave 108 78 570 50; cut boy_arm_bend 66 66 497 125; cut boy_arm_up 70 70 572 150; cut boy_arm_point 82 56 628 135; cut boy_arm_point2 80 60 488 178
cut boy_leg_l 64 176 706 72; cut boy_leg_r 100 160 798 82
cut boy_brow1 50 22 940 62; cut boy_brow2 52 22 1008 62; cut boy_brow3 52 24 1075 62
cut boy_brow4 52 22 940 100; cut boy_brow5 52 22 1008 100; cut boy_brow6 52 24 1075 100
cut boy_brow7 52 26 940 135; cut boy_brow8 52 28 1008 135; cut boy_brow9 52 28 1075 135
cut boy_eye_open 50 44 940 163; cut boy_eye_open2 50 44 1010 163; cut boy_eye_closed 56 30 1073 170
cut boy_eye_left 50 44 940 212; cut boy_eye_shut2 52 36 1008 215; cut boy_eye_shut3 56 36 1072 212
cut boy_mouth_smile 62 22 1163 70; cut boy_mouth_open 72 46 1228 68; cut boy_mouth_laugh 62 40 1297 68
cut boy_mouth_o 30 36 1172 140; cut boy_mouth_oh 46 56 1232 135; cut boy_mouth_tiny 24 28 1308 142
cut boy_mouth_sad 40 24 1172 215; cut boy_mouth_flat 46 22 1238 218; cut boy_mouth_frown 56 22 1296 214
# ---- girl ----
cut girl_head 160 160 22 335; cut girl_body 130 175 296 335
cut girl_arm_down 60 66 487 340; cut girl_arm_wave 90 80 580 328; cut girl_arm_bend 60 66 490 420; cut girl_arm_point 90 62 575 430
cut girl_leg_l 62 162 716 342; cut girl_leg_r 82 160 794 345
cut girl_brow1 60 26 940 315; cut girl_brow2 60 26 1030 315
cut girl_eye_open 60 52 940 365; cut girl_eye_closed 60 40 1030 368; cut girl_eye_open2 60 52 940 425; cut girl_eye_closed2 60 40 1030 428
cut girl_mouth_smile 66 30 1155 350; cut girl_mouth_open 70 50 1220 348; cut girl_mouth_laugh 52 50 1300 345
cut girl_mouth_o 28 34 1168 435; cut girl_mouth_flat 50 24 1230 435; cut girl_mouth_frown 56 22 1294 435
# ---- owl ----
cut owl_full 128 150 55 565
cut owl_head 160 140 248 585; cut owl_body 140 125 450 585; cut owl_wing_l 120 100 618 585; cut owl_wing_r 110 105 750 585
cut owl_feet 100 90 898 595; cut owl_eye_open 66 60 1043 600; cut owl_eye_open2 66 60 1112 600; cut owl_eye_closed 66 55 1112 670
cut owl_beak 60 40 1213 608; cut owl_beak_open 70 52 1285 598
node -e "
const fs=require('fs'),path=require('path');const dir=process.argv[1];const out={};
for(const f of fs.readdirSync(dir)){if(!f.endsWith('.png'))continue;const b=fs.readFileSync(path.join(dir,f));out[f.slice(0,-4)]=[b.readUInt32BE(16),b.readUInt32BE(20)];}
fs.writeFileSync(process.argv[2],JSON.stringify(out));console.log(Object.keys(out).length+' parts');" "$TMP" "$HERE/../../game_src/learn_games/src/kit/rig_dims.json"
rm -f "$OUT"/*.webp
for f in "$TMP"/*.png; do ffmpeg -v error -y -i "$f" -c:v libwebp -lossless 1 -compression_level 6 "$OUT/$(basename "${f%.png}").webp"; done
# a contact sheet of the parts for checking
mkdir -p "$HERE/_check" && cp "$TMP"/*.png "$HERE/_check/" 2>/dev/null || true
rm -rf "$TMP"
