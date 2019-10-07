# Redux

## 5.1 шаг - rootReducer.js (Создаём Reducer)

Reducer это самая главная функция в Redux, которая принимает начальный state и actions.
Actions это объект, имеющий много типов (types), при проверке которых и происходит изменение state.
Вся логика состояния приложения находится здесь. По умолчанию возвращает исходный(начальный) state.

```js
import initialState from './initial-state.json';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    // actions // 

    default: return state;
  }
};

export default rootReducer;
```

## 5.2 шаг - Создаём Actions

```js
// ... //

case 'PLUS':  return { ...state, counter: ++state.counter };
case 'MINUS': return { ...state, counter: --state.counter };

// ... //
```
Лучше записывать названия actions в переменные, чтобы IDE подсвечивала ошибки (если записывать строками, то подсвечивать не будет).

```js
const PLUS = 'PLUS';
const MINUS = 'MINUS';
```

## 5.3 шаг - Множественные Reducer-ы

```js
import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})
```

## 6.1 шаг - Подключение компонента к store

```js
import { connect } from 'react-redux';

// Вытаскивает данные из store в props компонента
const mapStateToProps = store => {
  return { counter: store.counter };
};

// Вытаскивает actions из store в props компонента
const mapDispatchToProps = dispatch => {
  return {
    plus:  () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
  };
};
  // ... //
<p>{this.props.counter}</p>
<button onClick={this.props.plus}>+</button>
<button onClick={this.props.minus}>-</button>
  // ... //

// Подключение компонента к store (connect)
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

## 6.2 шаг - bindActionCreators

Можно сократить код по внедрению actions в компонент

```js
// actions.js
export const some1 = () => ({ type: 'SOME1' });
export const some2 = () => ({ type: 'SOME2' });
export const some3 = (payload) => ({ type: 'SOME3', payload });

// component
import { bindActionCreators } from 'redux';
import * as actions from './actions';


const mapDispatchToProps = dispatch => {
  const  { some1, some2, some3 } = bindActionCreators(actions, dispatch);
  return { some1, some2, some3 }
};

// 1 shortcut (импортнуться все actions из actions.js)
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

// 2 shortcut (передавать все actions напрямую в connect)
export default connect(mapStateToProps, actions)(App);
```
