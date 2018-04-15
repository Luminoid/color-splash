#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Error! Usage: sh deploy.sh <commit_message>"
    exit 1
fi

commit_message=$1

echo "$ yarn run deploy"
yarn run deploy

echo "$ git add"
git add -A

echo "$ git commit"
git commit -m "$commit_message"

echo "$ git push"
git push
