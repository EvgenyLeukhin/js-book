import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'

// global fonts

// global css
import './style.scss'

// global js

ReactDOM.render(
  <Router><Layout/></Router>,
  document.getElementById('app')
);
