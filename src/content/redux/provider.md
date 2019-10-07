# Provider

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
