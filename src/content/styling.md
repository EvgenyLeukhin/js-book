# Styling

## Component styles in separate css-file

```js
import React from 'react'
import './style.scss'
```

## Inline styles

```js
import React from 'react'

export default () => <div>
  <p style={{color: 'red', fontSize: '16px'}}>Some text</p>
</div>


// or like this
import React from 'react'

const styles = {
  color: 'red', 
  fontSize: '16px',
}

export default () => <div>
  <p style={styles}>Some text</p>
</div>
```

## Css-modules
```js
import React from 'react'
import classes from './styles.css'

export default () => <div>
  <p className={classes.someClass}>Some text</p>
</div>

// // CSS-modules
// {
//   test: /\.css$/,
//   use: [
//     { loader: 'style-loader' },
//     {
//       loader: 'css-loader',
//       query: {
//        modules: true,
//        localIndentName: "[name]__[local]__[hash:base64:8]"
//       }
//     }
//   ]
// }
```

## Glamour - can use all css-selectors
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


export default () => 

  <div className={`${someClass1} ${someClass2}`}>
    <div className="test">Test content</div>
  </div>

```

## Change inline styling onClick

```js
class App extends Component {

  contentToogle = () => {
    if (true) {
      style.backgroundColor = 'red';
    }
  }

  render() {
    const style = {
      color: 'white',
      backgroundColor: 'black'
    };

    return (
      <button
        style={style}
        onClick={this.contentToogle}
      >Show content</button>
    );
  }
}
```
