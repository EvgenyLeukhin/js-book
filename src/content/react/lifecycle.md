# Lifecycle
```js
// =========================== LIFECYCLE  =========================== ->
import React, { Component } from 'react';
class Life extends Component {
  // 1. get default props - ReactRouter

  // 2. set default state
  state = {some: 'Some'}

  componentWillMount() { ... } // 3. do something before render jsx

  render() { // 4. render JSX
    return( <h1>{this.state.some}</h1> );
  }

  componentDidMount() { ... } // 5. do something after render jsx
}

export default Life;
// =========================== LIFECYCLE  =========================== -<
```
