# Base template

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
  <div id="app"></div>
</body>

</html>
```
