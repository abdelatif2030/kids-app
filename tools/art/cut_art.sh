#!/usr/bin/env bash
# Cuts the owner's reference sheets into one transparent picture per character / animal / thing (assets/games/art/<name>.png).
#   bash tools/art/cut_art.sh <folder with the sheets as 19.webp 20.webp 22.webp>
# Each cut: crop a box from the sheet, remove ONLY the paper connected to the edge (tools/art/matte.mjs: flood fill, soft
# edge, no white halo), enlarge 2x with a smooth filter, save as lossless WebP. Then art_dims.json (sizes) is rebuilt.
# Needs ffmpeg and node. The sheets are not part of the game: only these cuts are.
set -e
I="${1:?folder with the sheets}"
OUT="$(cd "$(dirname "$0")/../../assets/games/art" && pwd)"
TMP="$(mktemp -d)"
cut() { # sheet w h x y name
  ffmpeg -v error -y -i "$I/$1.webp" -vf "format=rgba,crop=$2:$3:$4:$5" -f rawvideo -pix_fmt rgba -     | node "$(dirname "$0")/matte.mjs" "$2" "$3"     | ffmpeg -v error -y -f rawvideo -pix_fmt rgba -s "$2x$3" -i - -vf "scale=iw*2:ih*2:flags=lanczos" "$TMP/$6.png"
}
# White animals (cow, panda...): the same cut, but only PURE paper counts as paper (brightness 246+, hardly any colour), so the white
# fur next to the paper is not eaten away. Extra: erase x,y,w,h = a neighbour that the box caught.  (2026-11-13, the cow was jagged)
cutw() { # sheet w h x y name [erase x y w h]
  ffmpeg -v error -y -i "$I/$1.webp" -vf "format=rgba,crop=$2:$3:$4:$5${7:+,drawbox=x=$7:y=$8:w=$9:h=${10}:color=white:t=fill}" -f rawvideo -pix_fmt rgba - | node "$(dirname "$0")/matte.mjs" "$2" "$3" 246 10 | ffmpeg -v error -y -f rawvideo -pix_fmt rgba -s "$2x$3" -i - -vf "scale=iw*2:ih*2:flags=lanczos" "$TMP/$6.png"
}
# the argument order below is: sheet width height x y name
# heroes (sheet 20)
cut 20 205 405 14 3 boy_idle; cut 20 215 410 8 412 girl_idle
cut 20 146 245 622 18 boy_wave; cut 20 155 245 803 18 boy_point; cut 20 120 215 960 22 boy_read
cut 20 136 245 622 272 girl_wave; cut 20 140 245 760 272 girl_stand_read; cut 20 140 235 1022 258 girl_cheer
cut 20 78 118 795 703 frog
# the owl, the crocodile and the first animals (sheet 19)
cut 19 235 256 8 3 owl; cut 19 150 235 498 12 croc; cut 19 140 190 650 40 dog; cut 19 135 195 777 38 cat
cut 19 140 240 918 8 lion; cut 19 190 230 1058 15 elephant; cutw 22 246 236 6 2 cow 218 98 40 150; cut 19 150 250 1325 4 giraffe; cut 19 105 175 1425 80 sheep
# fruit and vegetables (sheet 19)
cut 19 60 75 8 428 apple; cut 19 95 70 98 424 banana; cut 19 72 78 188 424 orange; cut 19 75 90 268 420 grapes; cut 19 62 85 350 422 strawberry
cut 19 95 72 413 428 watermelon; cut 19 65 95 518 414 pineapple; cut 19 75 80 588 424 mango; cut 19 85 95 664 418 carrot
# vehicles (sheet 19)
cut 19 100 55 792 430 car; cut 19 80 55 898 430 bus; cut 19 130 75 1003 418 train; cut 19 115 65 1140 422 plane; cut 19 105 70 735 488 firetruck
cut 19 110 65 850 495 ambulance; cut 19 120 70 962 500 police; cut 19 120 70 1080 500 helicopter; cut 19 115 65 1200 508 boat
# the animal library (sheet 22): farm, wild, sea, birds, insects, reptiles and dinosaurs
cut 22 215 225 12 5 cow2; cut 22 205 225 218 5 horse; cut 22 165 215 440 15 sheep2; cutw 22 195 205 640 25 pig; cut 22 180 220 858 5 dog2
cut 22 195 215 1032 15 cat2; cut 22 170 225 1228 5 rabbit; cutw 22 115 195 1408 25 goose
cut 22 150 215 15 240 lion2; cut 22 205 225 165 235 tiger; cut 22 235 220 350 240 cheetah; cut 22 240 235 580 235 elephant2; cut 22 145 240 782 225 giraffe2
cut 22 210 235 915 235 zebra; cut 22 190 225 1140 235 monkey; cutw 22 160 215 1372 245 panda
cut 22 200 150 10 460 dolphin; cut 22 230 145 205 460 shark; cut 22 160 115 425 475 clownfish; cut 22 225 135 570 475 turtle; cut 22 175 145 795 470 octopus
cut 22 200 145 1015 470 crab; cut 22 85 150 1240 465 seahorse; cut 22 150 150 1372 460 starfish
cut 22 165 175 20 615 penguin; cutw 22 160 170 225 615 chick; cut 22 150 180 395 610 hen; cut 22 185 165 555 625 parrot; cut 22 130 165 770 625 owlbrown
cut 22 160 170 930 620 mallard; cut 22 215 150 1115 635 peacock; cut 22 150 160 1385 630 pigeon
cut 22 140 95 45 790 ladybug; cut 22 160 100 225 795 bee; cut 22 135 115 425 785 butterfly; cut 22 200 115 565 780 grasshopper; cut 22 170 130 760 770 ant
cut 22 190 110 940 785 caterpillar; cut 22 210 120 1130 790 dragonfly; cut 22 150 115 1380 780 mantis
cut 22 220 130 10 885 croc2; cut 22 170 115 250 890 snake; cut 22 200 100 420 900 iguana; cut 22 185 105 620 905 tortoise; cut 22 185 125 800 885 triceratops
cut 22 225 115 955 890 trex; cut 22 200 140 1130 875 brachio; cut 22 230 115 1295 890 stego
# sizes of every cut for the game, then WebP (with transparency) into the game's folder
# sheet 36 (owner's ChatGPT sheet 1 for level 1, 3 x 2): fox, camel, sun / rose, pomegranate, rocket
cutw 36 520 510 0 0 fox; cutw 36 520 510 520 0 camel; cutw 36 496 510 1040 0 sun; cutw 36 520 514 0 510 rose; cutw 36 520 514 520 510 pomegranate; cutw 36 496 514 1040 510 rocket
# sheets 37-39 (owner's ChatGPT sheets 2-4 for level 1, 3 x 2 each) and 40 (scenery props)
cutw 37 520 510 0 0 ball; cutw 37 520 510 520 0 crow; cutw 37 496 510 1040 0 envelope; cutw 37 520 514 0 510 lemon; cutw 37 520 514 520 510 crescent; cutw 37 496 514 1040 510 corn
cutw 38 520 510 0 0 rabbit_n; cutw 38 520 510 520 0 duck_n; cutw 38 496 510 1040 0 banana_n; cutw 38 520 514 0 510 apple_n; cutw 38 520 514 520 510 clownfish_n; cutw 38 496 514 1040 510 butterfly_n
cutw 39 520 510 0 0 cat_n; cutw 39 520 510 520 0 horse_n; cutw 39 496 510 1040 0 sheep_n; cutw 39 520 514 0 510 hen_n; cutw 39 520 514 520 510 bee_n; cutw 39 496 514 1040 510 giraffe_n
cutw 40 400 440 10 5 windmill_p; cutw 40 540 380 400 70 house_p; cutw 40 445 440 905 5 tree_oak; cutw 40 332 390 1340 55 tree_apple
cutw 40 215 175 10 465 tuft_1; cutw 40 225 175 225 465 tuft_2; cutw 40 225 175 450 465 tuft_3; cutw 40 370 200 700 465 lotus_p; cutw 40 560 185 1100 470 fence_p
cutw 40 510 290 10 645 hay_p; cutw 40 550 125 560 735 stones_p; cutw 40 520 255 1140 665 flowers_p
# sheets 41-44 (owner's ChatGPT: last level-1 things, living things, farm props)
cutw 41 768 512 0 0 frog_n; cutw 41 768 512 768 0 plane_n; cutw 41 768 512 0 512 grapes_n; cutw 41 768 512 768 512 dove_n
cutw 42 240 190 40 25 butterfly_1; cutw 42 230 220 320 50 butterfly_2; cutw 42 215 180 135 190 butterfly_3; cutw 42 410 335 600 15 bird_blue; cutw 42 450 355 1060 15 bird_yellow; cutw 42 505 320 205 670 dragonfly; cutw 42 500 305 880 690 ladybug_leaf
cutw 44 520 385 10 10 barn_f; cutw 44 205 385 565 20 silo_f; cutw 44 245 390 815 8 pump_f; cutw 44 465 190 1060 160 gate_f; cutw 44 260 235 5 440 hayroll_f; cutw 44 250 235 265 430 haystack_f; cutw 44 300 175 525 490 trough_f
cutw 44 275 340 825 392 scarecrow_f; cutw 44 430 320 1105 395 tractor_f; cutw 44 275 245 40 725 crate_apple; cutw 44 265 255 320 715 crate_carrot; cutw 44 270 245 588 725 crate_corn; cutw 44 185 285 1005 705 sunflower_1; cutw 44 210 255 1230 735 sunflower_2
node -e "
const fs=require('fs'),path=require('path');const dir=process.argv[1];const dst=process.argv[2];const out={};
for(const f of fs.readdirSync(dir)){if(!f.endsWith('.png'))continue;const b=fs.readFileSync(path.join(dir,f));out[f.slice(0,-4)]=[b.readUInt32BE(16),b.readUInt32BE(20)];}
fs.writeFileSync(path.join(dst,'..','..','..','game_src','learn_games','src','kit','art_dims.json'),JSON.stringify(out));console.log(Object.keys(out).length+' pictures');" "$TMP" "$OUT"
rm -f "$OUT"/*.png "$OUT"/*.webp
for f in "$TMP"/*.png; do ffmpeg -v error -y -i "$f" -c:v libwebp -lossless 1 -compression_level 6 "$OUT/$(basename "${f%.png}").webp"; done
rm -rf "$TMP"
