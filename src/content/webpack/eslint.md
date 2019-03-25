## install
```
npm i --save-dev 
  eslint
  eslint-loader
  eslint-plugin-react

```

## webpack-config-dev
```js
...
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'eslint-loader'
  },
...
```

## .eslintrc.js
```js
{
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },

  "plugins": [ "react" ],

  "rules": {
    "semi": [1, "always"],
    "linebreak-style": [0, "unix"],
    "no-unused-vars": 1,
    "no-console": 1,
    "prefer-const": 1,
    "react/no-access-state-in-setstate": 1,
    "react/no-array-index-key": 1,
    "react/no-unused-prop-types": 1,
    "react/no-unused-state": 1,
    "react/prefer-stateless-function": 1,
    "react/prop-types": 1,
    "react/self-closing-comp": 1,
    "react/jsx-child-element-spacing": 1
  }
}
```

## .eslintignore
```
node_modules
dist
```
