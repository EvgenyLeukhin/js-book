# State
Only classes can have state

## State example
```js
import React from 'react'

export default class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    )
  }
}
```

## JS destructuring

```js
import React from 'react'

export default class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  render() {

    const {name, age} = this.state

    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
```

## setState
```js
import React from 'react'

export default class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  someClassMethod = () => {
    this.setState({ name: 'New Name' })
  };

  render() {

    const {name, age} = this.state

    return (
      <div onClick={this.someClassMethod}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}
```
