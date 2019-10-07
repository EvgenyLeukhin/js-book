const merge  = require('webpack-merge');
const common = require('./webpack.config.js');

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
  }
};

module.exports = merge(common, development);
