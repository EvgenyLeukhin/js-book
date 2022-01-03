# Root Reducer

## Several reducers

В приложении может быть несколько reducers, объединяем их в один объект методом **combineReducers**.

## rootReducer.js

```js
import { combineReducers } from 'redux';

import reducer1 from 'Routes/home/store/reducer1';
import reducer2 from 'Routes/home/store/reducer2';
import reducer3 from 'Routes/home/store/reducer3';

export default combineReducers({
  reducer1, // store.reducer1.something -> mapStateToProps
  reducer2,
  reducer3,
});
```

Or like this.

```js
import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  page: pageReducer, // store.page.something -> mapStateToProps
  user: userReducer,
})
```
