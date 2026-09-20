$token = (& "C:\Program Files\GitHub CLI\gh.exe" auth token).Trim()
Write-Host "Pushing to main..."
git add .
git commit -m "feat(pitch): add Article 7 (Guy Kawasaki's 10/20/30 rule)"
git push "https://x-access-token:$token@github.com/BJISTOSK/andromeda-b2b-landing-page.git" main
Write-Host "Deploying to gh-pages..."
npx gh-pages -d dist -b gh-pages -r "https://x-access-token:$token@github.com/BJISTOSK/andromeda-b2b-landing-page.git"
Write-Host "Deployment complete!"
