## Install
```
npm i --save-dev 
  @babel/core 
  @babel/plugin-proposal-class-properties
  @babel/plugin-syntax-dynamic-import
  @babel/preset-env 
  @babel/preset-react
  babel-loader
  uglifyjs-webpack-plugin
```

## Babel-loader
```js
...
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
...
```

## Config prod
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
...
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
    ]
  },
...
```

## .babelrc
```js
{
  "presets": [
    [
      "@babel/preset-env", {
        "targets": { "browsers": [ "last 2 versions", "> 0.5%", "not ie <= 10" ] },
        "debug": true
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ],
  "ignore": [ "/node_modules/" ]
}
```
