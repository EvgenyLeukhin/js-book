const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: paths.SRC,

  output: {
    path: paths.DIST,
    publicPath: ''
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      JS:         path.resolve(__dirname, 'src', 'content/js'),
      Webpack:    path.resolve(__dirname, 'src', 'content/webpack'),
      React:      path.resolve(__dirname, 'src', 'content/react'),
      Redux:      path.resolve(__dirname, 'src', 'content/redux'),
      NodeJs:     path.resolve(__dirname, 'src', 'content/nodejs'),
      Links:      path.resolve(__dirname, 'src', 'components/Links'),
      Components: path.resolve(__dirname, 'src', 'components')
    }
  },

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
        use: 'raw-loader'
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'static/img/favicon.ico',
      template: __dirname + '/src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    })
  ]

};
