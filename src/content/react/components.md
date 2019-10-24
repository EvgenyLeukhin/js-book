# Components (Компоненты)
Components is a elements of React application. React is all about components. Component aproach. Reusable components.

## Class-based components 'CBC' (can have state and props)

```js
import React, { Component } from 'react';

class Someclass extends Component {
  state = { ... }

  classMethod = () => { ... } 

  render() {
    return (
      <div className="wrapper"> ... </div>
    );
  }
}

export default Someclass;
```

## Function-based components 'FBC', pure-function, return only JSX (can have props only)
```js
// common syntax
const SomeFunc = () => {
  return (
    <div className='wrapper'>...</div>
  );
}


// return jsx only with ()
const SomeFunc = () => (
  <div className='wrapper'>...</div>
);


// function syntax
function Footer(props) {
  return <h1>Hello, {props.name}</h1>;
}


// short way - anonimus func
export default () => <div className='wrapper'></div>
```

## Nested components

### Nested CBC

```js
import React, { Component } from 'react';

class SomeClass1 extends Component {
  render() {
    return (
      <div className="some-class1"> ... </div>
    );
  }
}

class SomeClass2 extends Component {
  render() {
    return (
      <div className="some-class2"> ... </div>
    );
  }
}

class SomeClass3 extends Component {
  render() {
    return (
      <div>
        <SomeClass1/>
        <SomeClass2/>
      </div>
    );
  }
}

export default SomeClass3;
```

### Nested FBC
```js
import React from 'react';

const SomeComponent1 = () => <div>...</div>;
const SomeComponent2 = () => <div>...</div>;

const SomeComponent3 = () => (
  <div>
    <SomeComponent1/>
    <SomeComponent2/>
  </div>
);

export default SomeClass3;
```

### Old-school classes (with constructor)
```js
class Someclass2 extends Component {
  constructor(props) {
    super(props);
    this.prop3 = 'Some property';
    this.state = {...}
  }
}
```
