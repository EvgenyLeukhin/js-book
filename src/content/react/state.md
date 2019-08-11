# State (Состояние компонента)
Only classes can have state. You should choose a place where the state will be live. It may be route component with all major components.

## State example
```js
import React from 'react';

class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default StateClass;
```

## setState method
When state is changing always calles render-method and content is re-freshing
```js
import React from 'react';

class StateClass extends React.Component {

  state = {
    name: 'John Smith',
    age: 32,
  }

  someClassMethod = () => {
    this.setState({ name: 'New Name' });
  };

  render() {

    const { name, age } = this.state;

    return (
      <div onClick={this.someClassMethod}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default StateClass;
```
