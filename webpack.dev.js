const merge             = require('webpack-merge');
const common            = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
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

  module: {
    rules: [
      // JS //
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },

      // CSS // with style-loader
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
