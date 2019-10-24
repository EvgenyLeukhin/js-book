import React, { Component } from 'react';
import T from 'prop-types';

class Test extends Component {
  state = {}

  render() {
    // prop from Redux
    const { counter, plus, minus } = this.props;

    return (
      <section>
        <h3 style={{ display: 'inline-block' }}>Data from the store: &nbsp;</h3>
        <div style={{ display: 'inline-block' }}>{ counter }&nbsp;</div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </section>
    );
  }
}

Test.propTypes = {
  counter: T.number,
  plus: T.func,
  minus: T.func,
};

export default Test;
