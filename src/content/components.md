# Components
## Class-based components (can have state)

```js
import React from 'react'

export default class Someclass extends React.Component {
  state = { ... }
  someProp = () => ... // class method

  render() {
    return(
      <div className="wrapper"> ... </div>
    )
  }
}
```

## Function-based components (pure-function)
```js
import React from 'react'

export default () => <div className='wrapper'>
  ...
</div>
```

<br>
## Nested components
### Classes
```js
import React from 'react'

class SomeClass1 extends React.Component {
  render() {
    return(
      <div className="some-class1"> ... </div>
    )
  }
}

class SomeClass2 extends React.Component {
  render() {
    return(
      <div className="some-class2"> ... </div>
    )
  }
}

export default class SomeClass3 extends React.Component {
  render() {
    return(
      <div>
        <SomeClass1/>
        <SomeClass2/>
      </div>
    )
  }
}
```
### Functions
```js
import React from 'react'

const SomeComponent1 = () => <div>...</div>
const SomeComponent2 = () => <div>...</div>

export default () => <div>
  <SomeComponent1/>
  <SomeComponent2/>
</div>
```
### Old-school classes
```js
class Someclass2 extends Someclass {
  constructor(props) {
    super(props);
    this.prop3 = 'Some property';
    this.state = {...}
  }
}
```
