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

## Glamour

