# Single reducer

Его нужно импортировать в **rootReducer.js**.

**Reducer** -  это самая главная функция в Redux, которая принимает начальный **state** и **actions**.

**Actions** - это объект, имеющий много типов (types), при проверке которых и происходит изменение state. Вся логика состояния приложения находится здесь. По умолчанию возвращает исходный(начальный) state.

## initial-state.json

```json
{
  "counter": 0
}
```

## types.js

String constants in separate file **types.js**. Лучше записывать названия actions в строковые переменные и импортировать в reducer, чтобы IDE подсвечивала ошибки (если записывать строками, то подсвечивать не будет).

```js
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export default {
  PLUS,
  MINUS
};
```

## reducer.js

```js
import initialState from './initial-state.json';

import { PLUS, MINUS } from './types';

const reducer1 = (state = initialState, action) => {
  switch (action.type) {

    // actions //
    case PLUS: return { ...state, counter: state.counter + 1 }; // ++state.counter
    case MINUS: return { ...state, counter: state.counter - 1 }; // --state.counter

    default: return state;
  }
};

export default reducer1;
```
