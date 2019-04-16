# JSX
JSX in React is a JS-extension which support including of all web formats (html, css, js, ...).
All in one file. JSX returns simple html-layout from a CBC or FBC.

```js
import React from 'react';

class Someclass extends React.Component {
  render() {
    return (
      <h1>Some jsx content</h1>
    )
  }
}

export default Someclass;
```

## JSX from const
```js
import React from 'react'

class Someclass extends React.Component {
  render() {
    const someJsx = <h1>Some jsx content</h1>;

    return (
      <>
        {someJsx}
      </>
    )
  }
}

export default Someclass;
```

## Images in JSX
```js
import React from 'react'
import Img from './some-img.png'


export default () => <div>

  <img src={Img} width='100' alt='Some alt text'/>

  // or with require
  <img src={require('./some-img.png')} width='100' alt='Some alt text'/>

</div>
```

## Backgound images
```js
  <div style={{ backgroundImage: require(`Images/icons/some.png }} />
``` 
```css
  background-image: url('~images/icons/calendar.svg');  
```
