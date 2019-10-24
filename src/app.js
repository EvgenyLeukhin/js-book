import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/rootReducer';
import enhancer from 'Store/enhancer';

import ScrollToTop from 'Components/Layout/ScrollToTop';
import Layout from 'Components/Layout';

import './style.scss';

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <Router>
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    </Router>
  </Provider>,

  document.getElementById('app')
);
