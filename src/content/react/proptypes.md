# Proptypes

## Install
```
npm i --save-dev prop-types
```

## Proptypes checking 1 (prefer method)
```js
import React from 'react';
import T from 'prop-types';

const Some1 = props => {
  const { name, age } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

Some1.defaultProps = {
  name: 'Your name',
  age: 32,
};

Some1.propTypes = {
  name: T.string.isRequired,
  age: T.number,
}

export default Some1;
```

## Proptypes checking 2 (in CBC with static)
```js
import React from 'react';
import T from 'prop-types';

class Some2 extends React.Component {

  static T = {
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

Someclass.propTypes = {
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

Someclass.defaultProps = {
  someString: 'Your name',
};
```
