# Base template

All about components. React App is a collection of Static and re-used Common components with empty props which filled some data by Route components.

Pass data -> Route component -> Content components with a transfered data by props

## Components
1. Route components (collection of Common and Static components)
2. Common components (re-used with empty props)
3. Static components (return jsx only with a minimal logic)

## src/app.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from 'Components/Layout';

// global fonts
import './js/fonts.js';
...

// global css
import './style.scss';

// global js
import './js/global.js';
...

ReactDOM.render(
  <Layout/>,
  document.getElementById('app')
);
```

## src/index.html
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
  ...
</head>

<body>
  <!-- Virtual DOM is lives here -->
  <div id="app"></div>
</body>

</html>
```
