# Redux
<img src="./../../static/img/redux.png" alt="redux" width="50%">

Суть Redux - есть глобальный state + функции actions, которые меняют этот state (state + actions = store). Это всё находится в одном месте (reducer). Доступ к store компоненту предоставляет функция connect. Все данные из store можно прикручивать к props компонентов через методы mapStateToProps и mapDispatchToProps.

**Redux** - единый глобальный state всего приложения + Reducer. 
State в Redux все компоненты могут только читать, изменять его нельзя. 

**Reducer** - (Функция) вся логика по обновлению или изменению state. Reducer обновляет state. Реагирует на actions.

**Actions** - (Объекты) События (действия), которые могут создаваться в компонентах, для передачи в Reducer, чтобы обновить state. 

**Store** - (Объект) Центральный объект Redux. Обёртка Reducer и глобального state.  Изолирование всего Redux от остального кода.

**Dispatch** - (Функция) Передача actions в Store, чтобы обновить state

**mapStateToProps** - (Функция), которая вызывается из компонента, возвращает дынные из store (пробрасывает props в компонент). Какие данные внести компоненту в props из store.

**mapDispatchToProps** - ... какие actions внести компоненту из reducers в props из store.

## 1 шаг - Устанавливаем библиотеки
```npm i --save redux react-redux```

Для Redux-dev-tools:

```npm i --save-dev redux-thunk```

## 2 шаг - Создаём Redux-обёртку всего приложения
```js
import { Provider } from 'react-redux';

<Provider>
  <Router><App/></Router>
</Provider>
```
После этого каждый React-компонент может подключаться к глобальному store, с помощью функции <b>connect</b> 

## 3 шаг - Создаём Redux-store
store это функция, которая принимает Reducer
```js
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './rootReducer.js';
import enhancer from './enhancer.js';

<Provider store={createStore(rootReducer, enhancer)}>
  <Router><App/></Router>
</Provider>
```

## 4 шаг - enhancer.js (Подключаем Redux-dev-tools)
```npm i --save-dev redux-thunk```
```js
import {compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default enhancer;
```
В режиме разработке данный store также будет доступен Redux-dev-tools в браузере

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
