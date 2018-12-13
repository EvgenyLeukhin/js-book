import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Layout from './components/Layout'

// global fonts


// global css
import './style.scss'

// global js
// import 'github-markdown-css';



ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Layout/>
    </ScrollToTop>
  </Router>,

  document.getElementById('app')
);
