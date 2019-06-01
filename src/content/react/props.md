# Props (Свойства компонента) - Data chanels
Props data can read only
## Props in CBC
```js
import React from 'react';

class SomeClass1 extends React.Component {
  render() {
    const { prop1, prop2 } = this.props;
    return (
      <div>
        <b>{prop1}</b>
        <b>{prop2}</b>
      </div>
    );
  }
}

class SomeClass2 extends React.Component {
  render() {
    return ( 
      <SomeClass1 prop1='value1' prop2='value2' />
    );
  }
}

export default SomeClass2;
```

## Props in FBC
```js
const Some = props => (
  <div>{props.something}</div>
);

// short way with destruct
const Some = ({ something }) => (
  <div>{something}</div>
);

// or like this
const Some = props => {
  const { something } = props;
  
  return(
    <div>{something}</div>
  );
}

```

## Props for a logic (with default params)
```js
const Some = ({ item, important = false }) => {
  const style = {
    important ? 'tomato' : 'black'
  };

  return (
    <span style={{ color: {style} }}>{item}</span>
  );
}

...

<Some item='Some text' important={true} />
```

## Connect FBC to CBC
```js
import React from 'react';
import SomeComponent from './someComponent';

export default class Someclass extends React.Component {
  state = {
    something: 'something'
  }

  render() {
    const something = 'something';

    return ( 
      <div>
        <SomeComponent someString='something' />
        <SomeComponent someValue={something} />
        <SomeComponent someData={this.state.something} />
        <SomeComponent someMethod={this.someMethod} />
      </div>
    )
  }
}
```
## Children
```js
// someComponent.jsx
import React from 'react';

export default props => <div>{props.children}</div>

// someClass.jsx
import React from 'react';
import SomeComponent from './someComponent';

class Someclass extends React.Component {
  render() {
    return ( 
      <>
        <SomeComponent>Some children text</SomeComponent>
      </>
    );
  }
}

export default Someclass;
```
