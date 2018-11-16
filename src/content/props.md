# Props
## Props in classes
```js
import React from 'react'

class SomeClass1 extends React.Component {
  render() {
    return( 
      <div>

        <b>{this.props.prop1}</b>
        <b>{this.props.prop2}</b>

      </div>
    )
  }
}

export default class SomeClass2 extends React.Component {
  render() {
    return( 
      <SomeClass1 prop1='value1' prop2='value2'/>
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
import SomeComponent from './someComponent'

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
## props.children
```js
// someComponent.jsx
import React from 'react'

export default props => <div>{props.children}</div>

// someClass.jsx
import React from 'react'
import SomeComponent from './someComponent'

export default class Someclass extends React.Component {
  render() {
    return( 
      <div>
        <SomeComponent>Some children text</SomeComponent>
      </div>
    )
  }
}
```
