# Actions

```js
// initial-state.json
{
  "counter": 0
}
```

```js
// reducer.js
import initialState from './initial-state.json';

import { PLUS, MINUS } from '../types';


const reducer = (state = initialState, action) => {
  switch (action.type) {

    // actions
    case PLUS:  return { ...state, counter: ++state.counter };
    case MINUS: return { ...state, counter: --state.counter };

    default: return state;
  }
};

export default reducer;
```
