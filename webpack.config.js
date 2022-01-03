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
      // content
      JS:         path.resolve(__dirname, 'src', 'content/js'),
      React:      path.resolve(__dirname, 'src', 'content/react'),
      Api:        path.resolve(__dirname, 'src', 'content/api'),
      State:      path.resolve(__dirname, 'src', 'content/state'),
      Webpack:    path.resolve(__dirname, 'src', 'content/webpack'),
      Nextjs:     path.resolve(__dirname, 'src', 'content/nextjs'),
      NodeJs:     path.resolve(__dirname, 'src', 'content/nodejs'),
      Other:      path.resolve(__dirname, 'src', 'content/other'),

      // application
      Links:      path.resolve(__dirname, 'src', 'components/Links'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Constants:  path.resolve(__dirname, 'src', 'constants'),
      Store:      path.resolve(__dirname, 'src', 'store')
    }
  },

  module: {
    rules: [
      // JS //
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
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
      favicon: 'src/favicon.png',
      template: __dirname + '/src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    })
  ]
};
