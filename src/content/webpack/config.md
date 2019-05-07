# Config

## base template

***Config file is a simple js-object***

```js
const plugins = require('plugins');
...

module.exports = {
  mode: ...,    // 'production' || 'development'

  entry: ...,   // where is a entry point

  output: ...,  // where to save compiled data

  resolve: ..., // common configs

  module: {
    rules: [ ... ]  // file-loaders
  },

  optimization: .., // prod configs

  plugins: ...,     // plugins configs
}
```

## Paths
```js
// in the top
const path = require('path');

const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};
```

## Entry and output
```js
...
  entry: paths.SRC,

  output: {
    path: paths.DIST,
    publicPath: '' // src="publicPath/bundle.js"
  },
...
```

## Dev-server (dev)
```js
...
  mode: 'development',
  watch: true,
  devServer: { 
    port: 8888, 
    overlay: {
      warnings: false,
      errors: true
    }
  },
  watchOptions: { ignored: /node_modules/ },
  output: { filename: 'bundle.js' },
  devtool: 'cheap-module-source-map',
...
```

## Resolve with alias (common)
```js
...
  resolve: {
      extensions: ['.js', '.jsx'], // for React
      alias: {
        Images: path.resolve(__dirname, 'src', 'img'),
        Fonts:  path.resolve(__dirname, 'src', 'fonts'),
        Routes: path.resolve(__dirname, 'src', 'js/routes'),
      }
    },
...
import Home from 'Routes/home';
```

## Mode and output filename
```js
...
  mode: 'development',
  output: { filename: 'bundle.js' },

...

  mode:    'production',
  output: { filename: 'bundle-[hash:8].js' },
```
