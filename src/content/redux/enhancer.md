# Enhancer

В режиме разработке данные из Redux будут доступны Redux-dev-tools в браузере

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
