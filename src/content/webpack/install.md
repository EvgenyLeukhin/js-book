# Install

## Init project

`npm init -y`

## Install packages

`npm i --save-dev webpack webpack-cli webpack-dev-server`

## package.json

```json
  "scripts": {
    "start": "npm run develop",
    "develop": "webpack-dev-server --config=./webpack.dev.js --open google-chrome",
    "build": "webpack --config=./webpack.prod.js",
  },
  ...
  "devDependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
  }
  ... // for autoprefixer and @babel/preset-env // ...
   "browserslist": [
    "last 2 version",
    "iOS >= 8",
    "not dead"
  ]
```
