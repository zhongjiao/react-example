# react-example

1. to add gh-pages;
    npm install gh-pages 或者
    yarn add gh-pages
2. to add commands in package.json;
    {
      "homepage": "http://username.github.io/repositoryName",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
3. run "npm run deploy";
