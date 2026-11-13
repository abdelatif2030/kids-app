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

# sheets 46-54 (beach and farm animals, 2026-11-13)
cutw 46 542 542 0 0 b_clown; cutw 46 542 542 497 0 b_tang; cutw 46 542 542 1009 0 b_yellowfish; cutw 46 542 542 0 497 b_octopus; cutw 46 542 542 497 497 b_crab_walk; cutw 46 542 542 1009 497 b_gull_fly
cutw 47 414 371 0 0 b_shell; cutw 47 414 371 369 0 b_spiral; cutw 47 414 371 753 0 b_starfish; cutw 47 414 371 1137 0 b_crab; cutw 47 414 371 0 326 b_jelly; cutw 47 414 371 369 326 b_turtle; cutw 47 414 371 753 326 b_dolphin; cutw 47 414 371 1137 326 b_gull; cutw 47 414 371 0 667 b_gull_fly2; cutw 47 414 371 369 667 b_coral; cutw 47 414 371 753 667 b_ball; cutw 47 414 371 1137 667 b_ring
cutw 48 414 371 0 0 b_palm1; cutw 48 414 371 369 0 b_palm2; cutw 48 414 371 753 0 b_umbrella; cutw 48 414 371 1137 0 b_castle; cutw 48 414 371 0 326 b_lighthouse; cutw 48 414 371 369 326 b_boat; cutw 48 414 371 753 326 b_dock; cutw 48 414 371 1137 326 b_chair; cutw 48 414 371 0 667 b_rocks; cutw 48 414 371 369 667 b_weed; cutw 48 414 371 753 667 b_surf; cutw 48 414 371 1137 667 b_bucket
cutw 52 798 542 0 0 f_pad_stump; cutw 52 798 542 753 0 f_pad_hay; cutw 52 798 542 0 497 f_pad_nest; cutw 52 798 542 753 497 f_pad_plank
cutw 53 414 371 0 0 f_coop; cutw 53 414 371 369 0 f_eggs; cutw 53 414 371 753 0 f_milk; cutw 53 414 371 1137 0 f_barrow; cutw 53 414 371 0 326 f_water_can; cutw 53 414 371 369 326 f_sign; cutw 53 414 371 753 326 f_bucket; cutw 53 414 371 1137 326 f_stool; cutw 53 414 371 0 667 f_barrels; cutw 53 414 371 369 667 f_post; cutw 53 414 371 753 667 f_haypile; cutw 53 414 371 1137 667 f_birdhouse
cutw 54 458 470 0 0 f_cow; cutw 54 300 380 458 90 f_pig; cutw 54 430 490 770 0 f_horse; cutw 54 346 420 1190 70 f_sheep; cutw 54 340 530 20 480 f_goat; cutw 54 360 540 365 470 f_donkey; cutw 54 340 520 765 500 f_rooster; cutw 54 370 480 1150 530 f_hen

# sheets 58-60 (space, 2026-11-13)
cutw 58 798 542 0 0 s_pad_moon; cutw 58 783 542 753 0 s_pad_energy; cutw 58 798 527 0 497 s_pad_metal; cutw 58 783 527 753 497 s_pad_crystal
cutw 59 414 542 0 0 s_alien; cutw 59 414 542 369 0 s_robot; cutw 59 414 542 753 0 s_cat; cutw 59 399 542 1137 0 s_dog; cutw 59 414 527 0 497 s_shoot; cutw 59 414 527 369 497 s_rocket; cutw 59 414 527 753 497 s_helmet; cutw 59 399 527 1137 497 s_comet
cutw 60 414 371 0 0 s_launch; cutw 60 414 371 369 0 s_ufo; cutw 60 414 371 753 0 s_station; cutw 60 399 371 1137 0 s_rock; cutw 60 414 371 0 326 s_crystal; cutw 60 414 371 369 326 s_dish; cutw 60 414 371 753 326 s_rover; cutw 60 399 371 1137 326 s_ringplanet; cutw 60 414 357 0 667 s_blueplanet; cutw 60 414 357 369 667 s_pinkplanet; cutw 60 414 357 753 667 s_star; cutw 60 399 357 1137 667 s_moon

# sheets 68-86 (castle, snow, city, rainbow; 2026-11-13)
cutw 69 414 371 0 0 k_tower; cutw 69 414 371 369 0 k_gate; cutw 69 414 371 753 0 k_wall; cutw 69 399 371 1137 0 k_stall; cutw 69 414 371 0 326 k_well; cutw 69 414 371 369 326 k_chest; cutw 69 414 371 753 326 k_banner; cutw 69 399 371 1137 326 k_catapult; cutw 69 414 357 0 667 k_cannon; cutw 69 414 357 369 667 k_shield; cutw 69 414 357 753 667 k_cottage; cutw 69 399 357 1137 667 k_torch
cutw 68 414 542 0 0 k_knight; cutw 68 414 542 369 0 k_princess; cutw 68 414 542 753 0 k_king; cutw 68 399 542 1137 0 k_queen; cutw 68 414 527 0 497 k_dragon; cutw 68 414 527 369 497 k_horse; cutw 68 414 527 753 497 k_jester; cutw 68 399 527 1137 497 k_wizard
cutw 86 798 542 0 0 k_pad_stone; cutw 86 783 542 753 0 k_pad_velvet; cutw 86 798 527 0 497 k_pad_shield; cutw 86 783 527 753 497 k_pad_gold
cutw 74 414 371 0 0 w_pine1; cutw 74 414 371 369 0 w_pine2; cutw 74 414 371 753 0 w_snowman; cutw 74 399 371 1137 0 w_igloo; cutw 74 414 371 0 326 w_cabin; cutw 74 414 371 369 326 w_sled; cutw 74 414 371 753 326 w_snowballs; cutw 74 399 371 1137 326 w_iceblock; cutw 74 414 357 0 667 w_crystal; cutw 74 414 357 369 667 w_pond; cutw 74 414 357 753 667 w_sign; cutw 74 399 357 1137 667 w_skis
cutw 73 414 542 0 0 w_penguin; cutw 73 414 542 369 0 w_bear; cutw 73 414 542 753 0 w_fox; cutw 73 399 542 1137 0 w_rabbit; cutw 73 414 527 0 497 w_owl; cutw 73 414 527 369 497 w_reindeer; cutw 73 414 527 753 497 w_seal; cutw 73 399 527 1137 497 w_chick
cutw 72 798 542 0 0 w_pad_ice; cutw 72 783 542 753 0 w_pad_snow; cutw 72 798 527 0 497 w_pad_log; cutw 72 783 527 753 497 w_pad_crystal
cutw 77 798 542 0 0 c_pad_manhole; cutw 77 783 542 753 0 c_pad_tire; cutw 77 798 527 0 497 c_pad_round; cutw 77 783 527 753 497 c_pad_cone
cutw 78 414 371 0 0 c_schoolbus; cutw 78 414 371 369 0 c_firetruck; cutw 78 414 371 753 0 c_ambulance; cutw 78 399 371 1137 0 c_police; cutw 78 414 371 0 326 c_citybus; cutw 78 414 371 369 326 c_taxi; cutw 78 414 371 753 326 c_train; cutw 78 399 371 1137 326 c_tram; cutw 78 414 357 0 667 c_bulldozer; cutw 78 414 357 369 667 c_bike; cutw 78 414 357 753 667 c_heli; cutw 78 399 357 1137 667 c_plane
cutw 79 414 371 0 0 c_skyscraper; cutw 79 414 371 369 0 c_house; cutw 79 414 371 753 0 c_school; cutw 79 399 371 1137 0 c_hospital; cutw 79 414 371 0 326 c_firestation; cutw 79 414 371 369 326 c_light; cutw 79 414 371 753 326 c_busstop; cutw 79 399 371 1137 326 c_lamp; cutw 79 414 357 0 667 c_bench; cutw 79 414 357 369 667 c_tree; cutw 79 414 357 753 667 c_mailbox; cutw 79 399 357 1137 667 c_fountain
cutw 82 798 542 0 0 r_pad_candy; cutw 82 783 542 753 0 r_pad_cloud; cutw 82 798 527 0 497 r_pad_rainbow; cutw 82 783 527 753 497 r_pad_cookie
cutw 83 414 542 0 0 r_unicorn; cutw 83 414 542 369 0 r_butterfly; cutw 83 414 542 753 0 r_ladybug; cutw 83 399 542 1137 0 r_kite; cutw 83 414 527 0 497 r_pinwheel; cutw 83 414 527 369 497 r_star; cutw 83 414 527 753 497 r_sun; cutw 83 399 527 1137 497 r_cloud
cutw 84 414 371 0 0 r_rainbow; cutw 84 414 371 369 0 r_lolli; cutw 84 414 371 753 0 r_cotton; cutw 84 399 371 1137 0 r_carousel; cutw 84 414 371 0 326 r_slide; cutw 84 414 371 369 326 r_swing; cutw 84 414 371 753 326 r_seesaw; cutw 84 399 371 1137 326 r_balloons; cutw 84 414 357 0 667 r_icecream; cutw 84 414 357 369 667 r_candy; cutw 84 414 357 753 667 r_cupcake; cutw 84 399 357 1137 667 r_gingerhouse
# overrides (wider boxes for items that cross their cell)
cutw 74 470 374 372 650 w_pond; cutw 74 440 374 840 650 w_sign; cutw 74 440 374 1090 650 w_skis
cutw 73 410 480 830 15 w_fox; cutw 73 490 450 740 560 w_seal
cutw 83 420 350 392 85 r_butterfly; cutw 83 450 330 825 120 r_ladybug; cutw 84 440 340 0 40 r_rainbow; cutw 84 300 400 100 640 r_icecream
cutw 77 780 544 745 470 c_pad_cone

# sheets 88-93 (underwater, jungle; 2026-11-13)
cutw 88 414 371 0 0 u_pinktube; cutw 88 414 371 369 0 u_orangecoral; cutw 88 414 371 753 0 u_brain; cutw 88 399 371 1137 0 u_weed; cutw 88 414 371 0 326 u_rocks; cutw 88 414 371 369 326 u_chest; cutw 88 414 371 753 326 u_wreck; cutw 88 399 371 1137 326 u_anchor; cutw 88 414 357 0 667 u_arch; cutw 88 414 357 369 667 u_clam; cutw 88 414 357 753 667 u_anemone; cutw 88 399 357 1137 667 u_barrel
cutw 89 414 371 0 0 u_clown; cutw 89 414 371 369 0 u_tang; cutw 89 414 371 753 0 u_yellowfish; cutw 89 399 371 1137 0 u_octopus; cutw 89 414 371 0 326 u_turtle; cutw 89 414 371 369 326 u_dolphin; cutw 89 414 371 753 326 u_seahorse; cutw 89 399 371 1137 326 u_crab; cutw 89 414 357 0 667 u_star; cutw 89 414 357 369 667 u_jelly; cutw 89 414 357 753 667 u_whale; cutw 89 399 357 1137 667 u_puffer
cutw 90 798 542 0 0 u_pad_sand; cutw 90 783 542 753 0 u_pad_shell; cutw 90 798 527 0 497 u_pad_coral; cutw 90 783 527 753 497 u_pad_pearl
cutw 93 414 371 0 0 j_tree; cutw 93 414 371 369 0 j_palm; cutw 93 414 371 753 0 j_leaf; cutw 93 399 371 1137 0 j_banana; cutw 93 414 371 0 326 j_mango; cutw 93 414 371 369 326 j_hut; cutw 93 414 371 753 326 j_bridge; cutw 93 399 371 1137 326 j_rocks; cutw 93 414 357 0 667 j_vine; cutw 93 414 357 369 667 j_flower; cutw 93 414 357 753 667 j_mushroom; cutw 93 399 357 1137 667 j_totem
cutw 89 400 359 790 665 u_whale
