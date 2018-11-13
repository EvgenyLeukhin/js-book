# package.json
```js
{
  "name": "react-book",
  "version": "1.0.0",
  "description": "My learning react-repo",
  "main": "src/index.js",
  "scripts": {
    "start": "npm run develop",
    "develop": "webpack-dev-server --config=./webpack.dev.js --open google-chrome",
    "build": "webpack --config=./webpack.prod.js",
    "serve": "node server.js --open google-chrome",
    "build-and-serve": "npm run build && npm run serve",
    "delete-build": "rimraf public",
    "install-packages-npm": "npm install",
    "install-packages-yarn": "yarn install",
    "delete-packages": "rimraf node_modules"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/EvgenyLeukhin/react-book.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/EvgenyLeukhin/react-book/issues"
  },
  "homepage": "https://github.com/EvgenyLeukhin/react-book#readme",
  "dependencies": {
    "github-markdown-css": "^2.10.0",
    "normalize.css": "^8.0.0",
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-helmet": "^5.2.0",
    "react-loadable": "^5.5.0",
    "react-router-dom": "^4.3.1",
    "react-transition-group": "^2.5.0"
  },
  "devDependencies": {
    "autoprefixer": "^8.6.5",
    "babel-core": "^6.26.3",
    "babel-eslint": "^8.2.5",
    "babel-loader": "^7.1.4",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "chalk": "^2.4.1",
    "classnames": "^2.2.6",
    "clean-webpack-plugin": "^0.1.19",
    "compression": "^1.7.2",
    "compression-webpack-plugin": "^1.1.11",
    "css-loader": "^1.0.0",
    "cssnano": "^4.0.0",
    "eslint": "^5.0.1",
    "eslint-plugin-react": "^7.10.0",
    "express": "^4.16.3",
    "favicons-webpack-plugin": "0.0.9",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "image-webpack-loader": "^4.3.1",
    "markdown-with-front-matter-loader": "^0.1.0",
    "mini-css-extract-plugin": "^0.4.1",
    "node-sass": "^4.9.1",
    "optimize-css-assets-webpack-plugin": "^4.0.3",
    "postcss-loader": "^2.1.5",
    "prop-types": "^15.6.2",
    "rimraf": "^2.6.2",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "uglifyjs-webpack-plugin": "^1.2.7",
    "url-loader": "^1.0.1",
    "webpack": "^4.15.0",
    "webpack-bundle-analyzer": "^2.13.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4",
    "webpack-merge": "^4.1.4",
    "webpackbar": "^2.6.1"
  }
}

```

# Webpack

## Common
```js
const path = require('path');

const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: paths.SRC, 

  output: {
    path: paths.DIST,
    publicPath: '/'
  },

  resolve: { extensions: ['.js', '.jsx'] },

  module: {
    rules: [
      // JS //
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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

      // MARKDOWN //
      {
        test: /\.md$/,
        use: 'markdown-with-front-matter-loader'
      },

    ]
  },

};
```

## Development
```js
const merge             = require('webpack-merge');
const common            = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  mode:          'development',
  watch:          true,
  devServer:    { port: 8888, overlay: true },
  watchOptions: { ignored: /node_modules/ },
  output:       { filename: 'bundle.js' },
  devtool:       'cheap-module-source-map',

  module: {
    rules: [
      // CSS // with style-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      // IMG //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name]-[hash:12].[ext]'
          }
        }]
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      favicon: 'static/img/favicon.ico'
    }),
  ]
};

module.exports = merge(common, development);
```
## Production
```js
const merge                   = require('webpack-merge');
const common                  = require('./webpack.config.js');

const HtmlWebpackPlugin       = require('html-webpack-plugin');
const WebpackBar              = require('webpackbar');
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const CompressionPlugin       = require('compression-webpack-plugin');
const FaviconsWebpackPlugin   = require('favicons-webpack-plugin');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const production = {
  mode:    'production',
  output: { filename: 'bundle-[hash:8].js' },

  module: {
    rules: [
      // CSS // with extract-plugin
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // IMG //
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
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ // min js
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
      new OptimizeCSSAssetsPlugin({}) // min css
    ]
  },

  plugins: [
    new WebpackBar(),

    new CleanWebpackPlugin('public'),

    new CompressionPlugin({ algorithm: 'gzip' }),

    new FaviconsWebpackPlugin({
      logo: './static/img/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      minify: {                                 // min html
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),

    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }), // css bundle

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    }),
  ]
};

module.exports = merge(common, production);
```


# .babelrc
```js
{
  "presets": [
    ["env", {
      "targets": { "browsers": [ "last 2 versions", "> 0.5%", "not ie <= 10" ] },
      "debug": true
    }],
    "react"
  ],
  "plugins": [
    "transform-class-properties",
    "transform-object-rest-spread",
    "syntax-dynamic-import"
  ],
  "ignore": [ "/node_modules/" ]
}
```


# .editorconfig
```
# editorconfig.org

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```


# .eslint.js
```js
module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "semi": ["error", 0],
    "no-console": 0
  },
  "plugins": ["eslint-plugin-react"]
};

```


# .gitignore
```
node_modules
public 
dist 
yarn.lock
package-lock.json
.DS_Store 
```

# postcss.config.js
```js
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'iOS >= 8']
    }),
    require('cssnano')({
      discardComments: { removeAll: true }
    })
  ]
};

```

# server.js
```js
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const compression = require('compression');
const server = express();
const PORT = 8889;
const PATH = path.join(__dirname, './dist');

server.use(compression());
server.use(express.static(PATH));

server.listen(PORT, () => {
  console.log(chalk.green('Express-server is running up'));
  console.log('------------------------------------');
  console.log(`[MODE]    ` + chalk.yellow.bold('PRODUCTION'));
  console.log('[Folder]  Serving files from:' + chalk.blue('./dist'));
  console.log(`[Local]   ` + chalk.blue.underline.bold('http://localhost:' + PORT));
});

```
