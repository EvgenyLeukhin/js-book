# JSX

## JSX from const
JS-login can be as a property, before return, or js-code in {...} inside return()

```js
import React from 'react'

export default class Someclass extends React.Component {
  render() {

    // I. before return
    const someJsx = <h1>Some jsx content</h1>

    if (true) { alert('Something') }

    return(
      <React.Fragment>
      
         // II. inside return
        {someJsx}
      
      </React.Fragment>
    )
  }
}
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

// with srcSet
// <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />
```
