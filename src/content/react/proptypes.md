# Proptypes

## Install
```
npm i --save-dev prop-types
```

## Proptypes checking
```js
import React from 'react';
import propTypes from 'prop-types';

const Some1 = props => {
  const { name, age } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

Some.defaultProps = {
  name: 'Your name',
  age: 32,
};

Some.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number,
}

export default Some1;
```

## Proptypes checking 2 (in classes with static)
```js
import React from 'react';
import propTypes from 'prop-types';

class Some2 extends React.Component {

  static propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number,
  }
  
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default Some2;
```

## Examples
```js
import T from 'prop-types';

...

SectionDetail.propTypes = {
  someString: T.string.isRequired,
  someNumber: T.number,
  someBool: T.bool,
  someFunc: T.func,
  someObject: T.objectOf(T.any),
  someArray: T.array,
  someArray2: T.arrayOf(T.number),
  some1: T.oneOfType([ T.string, T.number ]},
  some2: T.oneOf([ 'String1', 'String2' ]),
  some3: T.any.array,
};

SectionDetail.defaultProps = {
  someString: 'Your name',
};
```
