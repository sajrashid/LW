Generates Directory output files and folders
find src -maxdepth 6 >outfile.txt

Formats files
npx prettier . --write

shows the linter errors
npm run lint

Git force push
git push origin dev:master --force
git pull origin dev
