# CSS

## Install
```
npm i --save-dev 
  css-loader
  postcss-loader
  sass-loader
  style-loader
  autoprefixer
  cssnano
  node-sass
  mini-css-extract-plugin
  optimize-css-assets-webpack-plugin
```

## Config-dev
```js
...
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      { loader: "style-loader", 
        options: { sourceMap: true} }, 
      { loader: "css-loader", 
        options: { sourceMap: true } }, 
      { loader: "sass-loader", 
        options: { sourceMap: true } }
    ]
  },
...
```

## Config-prod
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
...
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  },
...
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}) // min css
    ]
  },

  plugins: [
    // css bundle
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }),
  ]
...
```

## postcss.config.js

```js
module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('cssnano')({
      discardComments: { removeAll: true }
    })
  ]
};
```
