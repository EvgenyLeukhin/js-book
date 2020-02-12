# MPA

## package.json

```json
{
  "name": "grc-now",
  "version": "1.0.0",
  "private": true,
  "license": "UNLICENSED",
  "author": {
    "name": "Evgeny Leukhin",
    "email": "e.leukhin@gmail.com",
    "url": "https://github.com/EvgenyLeukhin"
  },
  "repository": {
    "type": "git",
    "url": "git+https://bitbucket.org/eugenyleukhin/infosec-landing-page.git"
  },
  "scripts": {
    "start": "webpack-dev-server --config=./webpack.dev.js",
    "build": "webpack --config=./webpack.prod.js",
    "serve": "npm run build",
    "deploy": "npm run build",
    "delete-build": "rimraf public",
    "delete-packages": "rimraf node_modules"
  },
  "dependencies": {
    "izimodal": "^1.5.1",
    "jquery": "^3.4.1"
  },
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "autoprefixer": "^9.7.3",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^5.0.5",
    "css-loader": "^3.2.1",
    "cssnano": "^4.1.10",
    "favicons-webpack-plugin": "^1.0.2",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^3.2.0",
    "image-webpack-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "rimraf": "^3.0.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.1",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpackbar": "^4.0.0"
  },
  "browserslist": [
    "last 2 version",
    "iOS >= 8",
    "not dead"
  ]
}
```

## webpack.dev.js

```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const jsPath = './src/js';
const htmlPath = `${__dirname}/src/html`;
const favIconPath = './src/img/icons';

module.exports = {
  mode: 'development',

  // dev server
  watch: true,
  devServer: {
    port: 8888,
    overlay: { warnings: false, errors: true }
  },
  devtool: 'cheap-module-source-map',
  watchOptions: { ignored: /node_modules/ },

  // input-output
  entry: {
    index:    `${jsPath}/index.js`,
    about:    `${jsPath}/about.js`,
    form:     `${jsPath}/form.js`,
    firebase: `${jsPath}/firebase.js`
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: ''
  },

  module: {
    rules: [
      // JS //
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',    options: { sourceMap: true } },
          { loader: 'sass-loader',   options: { sourceMap: true } }
        ]
      },

      // FONTS //
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'fonts/[name].[ext]' }
        }]
      },

      // convert small IMAGES to base-64 //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000 } },
        ]
      },
    ]
  },

  plugins: [
    // copy IMAGES //
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' }
    ]),

    // HTML - MPA //
    new HtmlWebpackPlugin({
      title: 'GRC | Home page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/index.html`,
      filename: 'index.html',
      chunks: ['index', 'form', 'firebase']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | About page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/about.html`,
      filename: 'about.html',
      chunks: ['about', 'form', 'firebase']
    }),


    // add jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
```

## webpack.prod.js

```js
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const minifyHtmlOptions = {
  removeComments: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  useShortDoctype: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeRedundantAttributes: true
};

const jsPath = './src/js';
const htmlPath = `${__dirname}/src/html`;
const favIconPath = './src/img/icons';

module.exports = {
  mode: 'production',

  // input-output MPA - import .scss 
  entry: {
    index:    `${jsPath}/index.js`,
    about:    `${jsPath}/about.js`,
    form:     `${jsPath}/form.js`,
    firebase: `${jsPath}/firebase.js`
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle-[hash:8].js',
    publicPath: ''
  },

  module: {
    rules: [
      // JS //
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // FONTS //
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'fonts/[name]-[hash:8].[ext]' }
        }]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          { loader: 'url-loader',           options: { limit: 10000 } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } }
        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      // min CSS
      new OptimizeCSSAssetsPlugin({}),

      // min js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
    ]
  },

  plugins: [
    // add progress bar
    new WebpackBar(),

    // remove 'dist/' before new build
    new CleanWebpackPlugin(),


    // HTML - MPA //
    // index.html
    new HtmlWebpackPlugin({
      title: 'GRC | Home page',
      template: `${htmlPath}/index.html`,
      filename: 'index.html',
      minify: minifyHtmlOptions,
      chunks: ['index', 'form', 'firebase']
    }),

    // about.html
    new HtmlWebpackPlugin({
      title: 'GRC | About page',
      template: `${htmlPath}/about.html`,
      filename: 'about.html',
      minify: minifyHtmlOptions,
      chunks: ['about', 'form', 'firebase']
    }),


    // css-bundle
    new MiniCssExtractPlugin({ filename: '[name].bundle-[hash:8].css' }),

    // add jQuery
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),

    // IMAGES, robot.txt
    new CopyWebpackPlugin([
      { from: 'src/img',   to: 'img' },
      { from: 'robots.txt', to: '' },
    ]),

    // add favicons
    new FaviconsWebpackPlugin({
      logo: `${favIconPath}/favicon.png`,
      publicPath: './',
      prefix: '',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
  ]
};
```
