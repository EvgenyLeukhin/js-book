# Base template

## src/app.js

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout'

// global fonts
...

// global css
import './style.scss'

// global js
...

ReactDOM.render(
  <Layout/>,
  document.getElementById('app')
)
```

## src/index.html
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  ...
</head>

<body>
  <div id="app"></div>
</body>

</html>
```
