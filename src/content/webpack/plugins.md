# Plugins

## webpack-merge

```npm i --save-dev webpack-merge```

### webpack.config.js

```js
  // common configs
```

### webpack.dev.js

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

```npm i --save-dev webpack-bar```

```js
const WebpackBar = require('webpackbar');

...
  new WebpackBar(),
...
```

***

## clean-webpack-plugin (prod)

```npm i --save-dev clean-webpack-plugin```

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

...
  new CleanWebpackPlugin(),
...
```

***

## compression-webpack-plugin (prod)

```npm i --save-dev compression-webpack-plugin```

```js
const CompressionPlugin = require('compression-webpack-plugin');
...
  new CompressionPlugin({ algorithm: 'gzip' }),
...
```

***

## favicons-webpack-plugin (prod)

```npm i --save-dev favicons-webpack-plugin```

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

```npm i --save-dev webpack-bundle-analyzer```

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

```npm i --save-dev copy-webpack-plugin```

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

## open-browser-webpack-plugin (dev)

```npm i --save-dev open-browser-webpack-plugin```

```js
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
...
  new OpenBrowserPlugin({ url: 'http://localhost:8888' }),
...
```
