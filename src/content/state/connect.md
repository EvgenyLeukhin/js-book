# Connect

HOC для подключения компонентов к Redux-store.

## mapStateToProps

Метод, связывающий props компоненты с данными из store.

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

## mapDispatchToProps и dispatch

Метод, связывающий props компоненты с экшенами из store.

```js
const mapDispatchToProps = dispatch => {
  return {
    plus:  () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
  };
};
```

## Connect to container-component

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

## Use inside view-component

```js
import React from 'react';
import T from 'prop-types';

// props from the store
const Test = ({ counter, plus, minus }) => (
  <>
    <h3>Data from the store: &nbsp;</h3>
    <div>{ counter }</div>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
  </>
);

Test.propTypes = {
  counter: T.number,
  plus: T.func,
  minus: T.func,
};

export default Test;
```
