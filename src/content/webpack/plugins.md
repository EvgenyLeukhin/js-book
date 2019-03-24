# webpack-merge
```
npm i --save-dev 
  webpack-merge
  webpack-bar
  clean-webpack-plugin
```
## webpack.config.js
```js
  ... // common configs
```

## webpack.dev.js
```js
const merge             = require('webpack-merge');
const common            = require('./webpack.config.js');

const development = {
  ...
};

module.exports = merge(common, development);
```

## webpack.prod.js
```js
const merge             = require('webpack-merge');
const common            = require('./webpack.config.js');

const production = {
  ...
};

module.exports = merge(common, production);
```

***

# webpack-bar
```js
const WebpackBar = require('webpackbar');

...
  new WebpackBar(),
...
```

***

# clean-webpack-plugin
```js
const CleanWebpackPlugin = require('clean-webpack-plugin');

...
  new CleanWebpackPlugin('dist'),
...
```

***

# compression-webpack-plugin
```js
  const CompressionPlugin = require('compression-webpack-plugin');
...
  new CompressionPlugin({ algorithm: 'gzip' }),
...
```

***

# favicons-webpack-plugin
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

# webpack-bundle-analyzer
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

# copy-webpack-plugin
```js
  const CopyWebpackPlugin = require('copy-webpack-plugin');
...
  new CopyWebpackPlugin([
    { from: 'src/scss/no-script.css', to: '' },
  ], {})
...
```
