# Components
## Class-based components (can have state)

```js
import React from 'react'

export default class Someclass extends React.Component {
  state = { ... }
  someProp = () => ...

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

const SomeComponent3 = () => <div>
  <SomeComponent1/>
  <SomeComponent2/>
</div>
```
### Old-school classes
