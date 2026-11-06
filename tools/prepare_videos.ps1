<#
 Prepares the lesson videos for Rehlaty. Run it on the laptop that has the videos (Windows PowerShell).

   1. Install ffmpeg once:        winget install ffmpeg      (then close and reopen PowerShell)
   2. Run (change the folder):    .\tools\prepare_videos.ps1 -In "$HOME\Downloads\lessons" -Out "$HOME\rehlaty_videos"

 For every .mp4 in -In it makes, in -Out:
   videos\lesson_01.mp4 ...   720p, H.264 + AAC, "fast start" (starts playing before it is fully downloaded)
   posters\lesson_01.jpg ...  a 640x360 thumbnail taken from the video
   lessons.json               a draft list: id, title (from the file name), category (guessed), duration, size, file names
 Nothing is uploaded and nothing leaves the computer. Open lessons.json afterwards and fix any title or category.
#>
param(
  [Parameter(Mandatory = $true)][string]$In,
  [Parameter(Mandatory = $true)][string]$Out,
  [int]$Crf = 26,          # lower = better quality, bigger files (24 to 28 is the useful range)
  [int]$Height = 720
)

$ErrorActionPreference = 'Stop'
foreach ($tool in 'ffmpeg', 'ffprobe') {
  if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) { throw "$tool was not found. Run: winget install ffmpeg  (then reopen PowerShell)" }
}
$files = Get-ChildItem -LiteralPath $In -Filter *.mp4 | Sort-Object Name
if (-not $files) { throw "No .mp4 files in $In" }
New-Item -ItemType Directory -Force -Path (Join-Path $Out 'videos'), (Join-Path $Out 'posters') | Out-Null

# Guess a category from the title (a first draft: fix it in lessons.json).
function Get-Category([string]$t) {
  $x = $t.ToLowerInvariant()
  if ($x -match 'حرو|alphabet|letter|ا ب|الحروف') { return 'letters' }
  if ($x -match 'أرقام|ارقام|رقم|numbers|count|العد') { return 'numbers' }
  if ($x -match 'حيوان|animal|أصوات') { return 'animals' }
  if ($x -match 'أغان|اغان|أغنية|اغنية|song|أناشيد|انشود') { return 'songs' }
  if ($x -match 'شكل|shape|ألوان|الوان|color') { return 'shapes' }
  if ($x -match 'جسم|وجه|body|face') { return 'body' }
  if ($x -match 'كلمات|كلمة|نطق|words|كلام|speak') { return 'words' }
  return 'general'
}

$items = @()
$i = 0
foreach ($f in $files) {
  $i++
  $id = 'lesson_{0:D2}' -f $i
  $video = Join-Path $Out "videos\$id.mp4"
  $poster = Join-Path $Out "posters\$id.jpg"
  Write-Host "[$i/$($files.Count)] $($f.Name)"
  $dur = [double](& ffprobe -v error -show_entries format=duration -of csv=p=0 -- $f.FullName)
  if (-not (Test-Path -LiteralPath $video)) {
    & ffmpeg -v error -y -i $f.FullName -vf "scale=-2:$Height" -c:v libx264 -preset slow -crf $Crf -pix_fmt yuv420p -profile:v main `
      -c:a aac -b:a 96k -movflags +faststart $video
  }
  $at = [math]::Min([math]::Max($dur * 0.12, 1), 8)
  & ffmpeg -v error -y -ss $at -i $video -frames:v 1 -vf "scale=640:-2" -q:v 4 $poster
  $title = [IO.Path]::GetFileNameWithoutExtension($f.Name) -replace '_', ' ' -replace '\s+', ' '
  $size = (Get-Item -LiteralPath $video).Length
  $items += [ordered]@{
    id          = $id
    title       = $title.Trim()
    category    = Get-Category $title
    minAge      = 1
    maxAge      = 6
    durationSec = [int][math]::Round($dur)
    sizeMB      = [math]::Round($size / 1MB, 1)
    video       = "videos/$id.mp4"
    poster      = "posters/$id.jpg"
  }
}
$items | ConvertTo-Json -Depth 4 | Set-Content -Encoding UTF8 (Join-Path $Out 'lessons.json')
$total = [math]::Round((($items | ForEach-Object { $_['sizeMB'] }) | Measure-Object -Sum).Sum, 1)
Write-Host "Done: $($items.Count) videos, about $total MB in $Out"
Write-Host "Next: open $Out\lessons.json, fix titles and categories, then upload the folders 'videos' and 'posters' (docs/OWN_VIDEOS.md)."
