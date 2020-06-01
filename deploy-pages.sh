#! /bin/bash


npm run generate
cd ./dist/

git init
git add .
git commit -m " deploy "
git remote add origin https://github.com/usefss/usefss.github.io.git
pwd
git remote -v
git push -f origin master

