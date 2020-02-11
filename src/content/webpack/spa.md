# SPA

SPA by React frontend framework, dev-server, babel, scss and production optimization.

## Install packages

### Webpack
```npm i --save-dev webpack webpack-cli webpack-dev-server```

### Babel
```npm i --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react babel-loader```

### React
```npm i --save react react-dom react-router-dom```

### SCSS
```npm i --save-dev style-loader css-loader sass-loader node-sass```

### Images & Fonts
```npm i --save-dev url-loader file-loader```

### Plugins
```npm i --save-dev html-webpack-plugin```

### Test server
```npm i --save-dev express chalk compression```

### Optimization
```npm i --save-dev webpackbar uglifyjs-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin postcss-loader image-webpack-loader clean-webpack-plugin compression-webpack-plugin copy-webpack-plugin autoprefixer cssnano favicons-webpack-plugin```

### postcss.config.js
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

### package.json
```json
{
  "name": "webpack-react-spa",
  "version": "1.0.0",
  "description": "Webpack config for React SPA project",
  "main": "package.json",
  "homepage": "https://EvgenyLeukhin.github.io/webpack-react-spa",
  "repository": {
    "type": "git",
    "url": "git@github.com:EvgenyLeukhin/webpack-react-spa.git"
  },
  "scripts": {
    "start": "webpack-dev-server --config=./webpack.dev.js",
    "build": "webpack --config=./webpack.prod.js",
    "serve": "node server.js --open google-chrome",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "keywords": [
    "webpack",
    "spa",
    "react"
  ],
  "author": "EvgenyLeukhin",
  "license": "MIT",
  "dependencies": {
    "axios": "^0.19.2",
    "gh-pages": "^2.2.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-dom": "^5.1.2"
  },
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-optional-chaining": "^7.8.3",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "autoprefixer": "^9.7.4",
    "babel-loader": "^8.0.6",
    "chalk": "^3.0.0",
    "clean-webpack-plugin": "^3.0.0",
    "compression": "^1.7.4",
    "compression-webpack-plugin": "^3.1.0",
    "copy-webpack-plugin": "^5.1.1",
    "css-loader": "^3.4.2",
    "cssnano": "^4.1.10",
    "express": "^4.17.1",
    "favicons-webpack-plugin": "^3.0.1",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^4.0.0-beta.11",
    "image-webpack-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.13.1",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.1.3",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.3",
    "webpackbar": "^4.0.0"
  },
  "browserslist": [
    "last 2 version",
    "iOS >= 8",
    "not dead"
  ]
}
```

### webpack.dev.js

```js
const path = require('path'); // nodejs path
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Entry and output
const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

// nodejs module
module.exports = {
  // ENTRY point //
  entry: paths.SRC,


  // DEV-SERVER //
  mode: 'development',
  watch: true,
  devServer: {
    port: 8000,
    overlay: { warnings: false, errors: true }
  },
  watchOptions: { ignored: /node_modules/ },
  output: { filename: 'bundle.js' },
  devtool: 'cheap-module-source-map',


  // OUTPUT (where save compiled data) //
  output: {
    path: paths.DIST,
    publicPath: '' // src="publicPath/bundle.js"
  },


  // common configs + aliases
  resolve: {
    extensions: ['.js', '.jsx'], // for React
    alias: {
      Routes: path.resolve(__dirname, 'src', 'js/routes'),
      Images: path.resolve(__dirname, 'src', 'static/img'),
      Styles: path.resolve(__dirname, 'src', 'static/scss'),
      Fonts:  path.resolve(__dirname, 'src', 'static/fonts'),
    }
  },


  // CONFIGS //
  module: {
    rules:  [
      // JS //
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader' },

      // CSS // with style-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader" }
        ]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
      },

      // FONTS //
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          }
        ]
      },
    ]
  },

  // plugins configs
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/static/img/icons/favicon.png',
      template: __dirname + '/src/static/index.html'
    })
  ]
};
```

### webpack.prod.js

```js
const path = require('path'); // nodejs path
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Entry and output
const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

// nodejs module
module.exports = {
  // ENTRY point //
  entry: paths.SRC,


  // DEV-SERVER //
  mode: 'production',
  output: { filename: 'bundle.js' },


  // OUTPUT (where save compiled data) //
  output: {
    path: paths.DIST,
    publicPath: '' // src="publicPath/bundle.js"
  },


  // common configs + aliases
  resolve: {
    extensions: ['.js', '.jsx'], // for React
    alias: {
      Routes: path.resolve(__dirname, 'src', 'js/routes'),
      Images: path.resolve(__dirname, 'src', 'static/img'),
      Styles: path.resolve(__dirname, 'src', 'static/scss'),
      Fonts:  path.resolve(__dirname, 'src', 'static/fonts'),
    }
  },


  // CONFIGS //
  module: {
    rules:  [
      // JS //
      { test: /\.(js|jsx)$/,
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

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name]-[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true }
          }
        ]
      },

      // FONTS //
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          }
        ]
      },
    ]
  },


  // prod configs
  optimization: {
    minimizer: [
      new WebpackBar(),
      new CleanWebpackPlugin(),                                      // remove dist/
      new CompressionPlugin({ algorithm: 'gzip' }),                  // gzip compress
      new OptimizeCSSAssetsPlugin({}),                               // min css
      new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }), // css bundle
      new UglifyJsPlugin({                                           // min js
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
      new CopyWebpackPlugin(
        [
          { from: './src/static/robots.txt', to: '' },
        ], {})
    ]
  },

  // plugins configs
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'src/static/img/icons/favicon.png',
      template: __dirname + '/src/static/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),

    new FaviconsWebpackPlugin({
      logo: './src/static/img/icons/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
  ]
};
```


## Structure

```
dist/ - output folder
src/  - source folder
  app.js - entry point 
  api/ ...
  consts/ ...
  components/ 
    App.jsx - react entry point
    ...
  routes/ ...
  static/
    fonts/
    img/
    scss/
    index.html
.babelrc
.editorconfig
.eslintignore
.eslintrc
.gitignore
.nvmrc
LICENCE
package-lock.json
package.json
postcss.config.js
README.md
robots.txt
webpack.dev.js
webpack.prod.js
```
