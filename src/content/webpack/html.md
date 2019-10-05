# HTML

## Install

```bash
npm i --save-dev html-webpack-plugin
```

## Config (dev)

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

...
  new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    favicon: 'static/img/favicon.ico'
  }),
...
```

## Config (prod)

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

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <div id="root"></div>
</body>
</html>
```

## html-loader

```bash
npm i --save-dev html-webpack-loader
```
