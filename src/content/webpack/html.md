## Install
```
npm i --save-dev html-webpack-plugin
```

## Config-dev  
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

...
  new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    favicon: 'static/img/favicon.ico'
  }),
...
```

## Config-prod
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

...
  new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    }
  }),
...
```
