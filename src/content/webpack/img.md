## Install
```
npm i --save-dev 
  url-loader
  image-webpack-loader
```

## Config-dev
```js
...
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
...
```

## Config-prod
```js
...
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
...
```
