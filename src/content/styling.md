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
```

## Classnames
``` npm i --save-dev classnames ```
```js
import React from 'react'
import cx from 'classnames'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      hightlight: false,
    };
    this.hightlightToggle = () => {
      this.setState({hightlight: !this.state.hightlight});
    };
  }
  render() {
    const { hightlight } = this.state;
    return(
      <React.Fragment>

        <button className={cx('btn', {'hightlight': hightlight })}
          onClick={this.hightlightToggle}
        >{!hightlight ? 'Click me' : 'Clicked'}</button>

      </React.Fragment>
    );
  }
}
```

## Glamour
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
