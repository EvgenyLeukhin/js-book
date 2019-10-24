import { combineReducers } from 'redux';

import testReducer from './../test/store/reducer';
// import someReducer from 'Routes/home/store/reducer2';
// import someReducer from 'Routes/home/store/reducer3';

export default combineReducers({
  test: testReducer,
});
