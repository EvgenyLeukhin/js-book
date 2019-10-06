# Package.json

## Initialize new project

package.json will be create automaticly.

```bash
npm init -y
```

## Install all packages

```bash
npm install && npm i
yarn install && yarn
```

## "scripts": {}

List of scripts to manipulation of project.

## "dependencies": {}

List of packeges with versions, which installed with --save flag

## "devDependencies": {}

List of packeges with versions, which installed with --save-dev flag

## Example

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/flaviocopes/testing.git"
  },
  "keywords": [
    "email",
    "machine learning",
    "ai"
  ],
  "author": {
    "name": "Flavio Copes",
    "email": "flavio@flaviocopes.com",
    "url": "https://flaviocopes.com"
  },
  "bugs": "https://github.com/flaviocopes/package/issues",
  "homepage": "https://flaviocopes.com/package",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    ...
    "webpack-merge": "^4.1.0"
    ...
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0",
    "yarn": "^0.13.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```
