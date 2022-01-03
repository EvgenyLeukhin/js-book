Install by npm or yarn

```bash
npm i save react-redux redux
yarn add react-redux redux
```

Для Redux-dev-tools:

```bash
npm i save redux-thunk
yarn add redux-thunk
```

# Provider и enhancer

## <Provider />

Создаём Redux-обёртку **<Provider />** и глобальный **store** всего приложения.

Store это функция, которая принимает **rootReducer**.

После этого каждый React-компонент может подключаться к глобальному store, с помощью функции **connect**.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/rootReducer';
import enhancer from 'Store/enhancer';

import App from './js/App';

...

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('react-app')
);
```

## enhancer.js

В режиме разработке данные из Redux будут доступны в "Redux-dev-tools" в браузере.

```js
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default enhancer;
```

