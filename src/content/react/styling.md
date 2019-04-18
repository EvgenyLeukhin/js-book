# Styling

## I. Component styles in separate css-file (My choice)

```js
import React from 'react';
import './style.scss';
...
```

## II. Inline styles

```js
import React from 'react';

export default () => (
  <div>
    <p style={{ color: 'red', fontSize: '16px' }}>Some text</p>
  </div>
);
```
or like this:
```js
import React from 'react';

const styles = {
  color: 'red',     // style.color = 'red';
  fontSize: '16px',
};

export default () => (
  <div>
    <p style={styles}>Some text</p>
  </div>
);
```

## III. Css-modules - needs to re-config Webpack
```js
import React from 'react';
import classes from './styles.css';

export default () => (
  <div>
    <p className={classes.someClass}>Some text</p>
  </div>
);
```

Webpack config for css-files:
```js
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      query: {
       modules: true,
       localIndentName: "[name]__[local]__[hash:base64:8]"
      }
    }
  ]
}
```

## III. Inline-styling with Glamour (can use all css-selectors)
``` npm i --save-dev glamour ```
```js
import React from 'react';
import { css } from 'glamor';

let someClass1 = css({
  backgroundColor: '#ffd',
  padding: 20,
  border: '1px solid #ccc',
  textAlign: 'center',
  width: '60%',
  margin: '30px auto',
});

let someClass2 = css({
  color: 'maroon',
  ':hover': {
    backgroundColor: 'pink'
  },
  '@media(max-width:500px)': {
    backgroundColor: 'cyan'
  }
});


export default () => (
  <div className={`${someClass1} ${someClass2}`}>
    <div className="test">Test content</div>
  </div>
);
```
