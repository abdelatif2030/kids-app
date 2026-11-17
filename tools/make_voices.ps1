# Records the missing voice clips of the learning game (voice Fatima) and uploads them to GitHub.
# Right-click this file -> "Run with PowerShell". Needs: Git and Node.js installed. The key is typed hidden, never saved.
$ErrorActionPreference = 'Continue'
$repo = Join-Path $HOME 'Documents\rehlaty'
if (-not (Test-Path $repo)) {
  git clone https://github.com/abdelatif2030/kids-app.git $repo
}
Set-Location $repo
git checkout feature/rehlaty
git pull --no-edit

$secure = Read-Host 'Paste your ElevenLabs API key and press Enter (it is hidden and not saved)' -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
$env:ELEVENLABS_API_KEY = [Runtime.InteropServices.Marshal]::PtrToStringAuto($ptr)

node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar
node tools/game_voice/generate.mjs --manifest

Remove-Item Env:\ELEVENLABS_API_KEY -ErrorAction SilentlyContinue

git add -A
git commit -m "New voice clips (voice Fatima)"
git pull --no-edit
git push

Write-Host ''
Write-Host 'Done. Tell Claude: finished.' -ForegroundColor Green
Read-Host 'Press Enter to close'
