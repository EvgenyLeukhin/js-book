# Images
## I. Images from import
```js
import React from 'react';
import Img from './some-img.png';

export default () => (
  <div>
    <img src={Img} width='100' alt='Some alt text' />
  </div>
);
```

## II. Images from require
```js
import React from 'react';

export default () => (
  <div>
    <img src={require('./some-img.png')} width='100' alt='Some alt text' />
  </div>
);
```

## III. Images from backgroud-image
```js
  <div style={{ backgroundImage: require(`Images/icons/some.png }} />
``` 

```css
  background-image: url('~images/icons/calendar.svg');  
```
