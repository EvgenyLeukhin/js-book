# Connect

```js
...

import { connect } from 'react-redux';


// I form
const mapStateToProps = store => {
  return { counter: store.test.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    plus:  () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
  };
};

// II form
const mapStateToProps = store => {
  const { test } = store;
  return {
    counter: test.counter
  };
};

// III form
const mapStateToProps = ({ test }) => {
  return { counter: test.counter };
};

// shortcut
const mapStateToProps = ({ test }) => (
  { counter: test.counter }
);

...
```

## Connect to container component

**index.jsx** - компонент-контейнер для подключения к Redux.

**page.jsx** - компонент с разметкой, где используются props из Redux.

```js
import { connect } from 'react-redux';
import T from 'prop-types';

import Page from './page';

const mapStateToProps = store => {
  return { counter: store.test.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    plus:  () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
  };
};

Page.propTypes = {
  counter: T.number,
  plus: T.func,
  minus: T.func,
};

// передача props из Redux компонету Page
export default connect(mapStateToProps, mapDispatchToProps)(Page);
```
