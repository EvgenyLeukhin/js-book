# Fonts

## Install

```bash
npm i --save-dev file-loader
```

## Config (common)

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

## fonts.js

```js
import '../fonts/UniNeue/500/UniNeueBook.woff2';
import '../fonts/UniNeue/500/UniNeueBook.woff';
import '../fonts/UniNeue/500/UniNeueBook.ttf';
```

## fonts.scss

```css
@font-face {
  font-family: 'Uni Neue';
  src:
    local('Uni Neue'),
    local('Uni_Neue'),
    local('Uni-Neue'),
    url('fonts/UniNeue/500/UniNeueBook.woff2') format('woff2'),
    url('fonts/UniNeue/500/UniNeueBook.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}
```
