const merge                   = require('webpack-merge');
const common                  = require('./webpack.config.js');

const WebpackBar              = require('webpackbar');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const production = {
  mode:   'production',
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }), // css bundle
  ]
};

module.exports = merge(common, production);
