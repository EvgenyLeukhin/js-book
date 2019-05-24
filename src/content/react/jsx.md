# JSX
JSX in React is a JS-extension which support including of all web formats (html, css, js, ...). JSX is an objects.
All in one file. JSX returns simple html-layout from a CBC or FBC.

```js
// JSX
import React from 'react';

class Someclass extends React.Component {
  render() {
    return (
      <h1 className="greeting">Hello, world!</h1>
    );
  }
}

export default Someclass;

// Babel compiled to:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

This object is immutable, we can't change this obejct after creation. We can cnahge their state or props. 

## JSX from const
```js
import React from 'react';

class Someclass extends React.Component {
  render() {
    const someJsx = <h1>Some jsx content</h1>;

    return (
      <>
        {someJsx}
      </>
    );
  }
}

export default Someclass;
```
