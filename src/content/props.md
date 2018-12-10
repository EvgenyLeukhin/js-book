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
## Proptypes
```js
// props in rfc
import React from 'react'
import propTypes from 'prop-types'

const Some1 = props => {
  const {name, age} = props;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

Some1.defaultProps = {
  name: 'Your name',
  age: 00,
};

Some1.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number,
}

export default Some;
{/* <Some name='John' age='32'> */}



// props in rcc
import React from 'react'
import PropTypes from 'prop-types'

class Some2 extends React.Component {

  // можно вставлять сюда или как в примере выше
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  
  render() {
    const {name, age} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
export default Some;
{/* <Some name='John' age='32'> */ }
```

