# Root Reducer

## Several reducers

В приложении может быть несколько reducers, объединяем их в один объект методом **combineReducers**.

```js
import { combineReducers } from 'redux';

import reducer1 from 'Routes/home/store/reducer1';
import reducer2 from 'Routes/home/store/reducer2';
import reducer3 from 'Routes/home/store/reducer3';

export default combineReducers({ reducer1, reducer2, reducer3 });
```

Or like this.

```js
import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})
```


**Reducer** -  это самая главная функция в Redux, которая принимает начальный **state** и **actions**.

**Actions** - это объект, имеющий много типов (types), при проверке которых и происходит изменение state. Вся логика состояния приложения находится здесь. По умолчанию возвращает исходный(начальный) state.

## Single reducer

```js
import initialState from './initial-state.json';

const reducer1 = (state = initialState, action) => {
  switch (action.type) {

    // actions //

    default: return state;
  }
};

export default reducer1;
```
