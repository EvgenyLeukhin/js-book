# Plugins

## Install

```bash
npm i --save-dev
  webpack-merge
  webpackbar
  clean-webpack-plugin
  compression-webpack-plugin
  favicons-webpack-plugin
  webpack-bundle-analyzer
  copy-webpack-plugin
```

## webpack-merge

### webpack.config.js

```js
  // common configs
```

## webpack.dev.js

```js
const merge  = require('webpack-merge');
const common = require('./webpack.config.js');

const development = {
  ...
};

module.exports = merge(common, development);
```

### webpack.prod.js

```js
const merge  = require('webpack-merge');
const common = require('./webpack.config.js');

const production = {
  ...
};

module.exports = merge(common, production);
```

***

## webpack-bar (prod)

```js
const WebpackBar = require('webpackbar');

...
  new WebpackBar(),
...
```

***

## clean-webpack-plugin (prod)

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

...
  new CleanWebpackPlugin(),
...
```

***

## compression-webpack-plugin (prod)

```js
const CompressionPlugin = require('compression-webpack-plugin');
...
  new CompressionPlugin({ algorithm: 'gzip' }),
...
```

***

## favicons-webpack-plugin (prod)

```js
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
...
  new FaviconsWebpackPlugin({
      logo: './static/img/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
...
```

***

## webpack-bundle-analyzer (prod)

```js
const BundleAnalyzerPlugin = 
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
...
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static'
  }),
...
```

***

## copy-webpack-plugin (prod)

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
...
  new CopyWebpackPlugin(
    [
      { from: 'src/scss/no-script.css', to: '' },
      { from: 'robots.txt', to: '' },
    ], {})
...
```
