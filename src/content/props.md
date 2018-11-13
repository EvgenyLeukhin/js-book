# Props
## Props in classes
```js
import React from 'react'

export default class Someclass extends React.Component {
  someProperty = () => {
    // some js-code
  }
  render() {
    return( 
      <div>...</div>
    )
  }
}
```

## Props in funcs
```js
// someComponent.jsx

import React from 'react'

export default props => <div>{props.something}</div>
```

## Connect func-props to class
```js
import React from 'react'
import SomeComponent from './SomeComponent'

export default class Someclass extends React.Component {
  state = {
    something: 'something'
  }
  render() {
    const something = 'something'
    return( 
      <div>
        <SomeComponent something='something' />
        <SomeComponent something={something} />
        <SomeComponent something={this.state.something} />
      </div>
    )
  }
}
```
