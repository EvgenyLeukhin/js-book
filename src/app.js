import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import ScrollToTop from 'Components/Layout/ScrollToTop';
import Layout from 'Components/Layout';

import './style.scss';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Layout />
    </ScrollToTop>
  </Router>,

  document.getElementById('app')
);
