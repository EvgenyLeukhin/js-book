## Install
```
npm i --save-dev file-loader
```

## Config
```js
...
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' }
      }
    ]
  },
...
```
