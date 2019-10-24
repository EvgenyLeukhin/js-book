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

// const mapStateToProps = store => {
//   const { test } = store;
//   return {
//     counter: test.counter
//   };
// };


// // with distructuring
// const mapStateToProps = ({ test }) => {
//   return { counter: test.counter };
// };

// // shortcut
// const mapStateToProps = ({ test }) => (
//   { counter: test.counter }
// );


export default connect(mapStateToProps, mapDispatchToProps)(Page);
