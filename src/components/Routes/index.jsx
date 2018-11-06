import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../../content/home'
import Page2 from './../../content/page-2'
import Page3 from './../../content/page-3'

export default () => (
  <main>
    <Switch>
      <Route path='/'       component={Home} exact></Route>
      <Route path='/page-2' component={Page2}></Route>
      <Route path='/page-3' component={Page3}></Route>
    </Switch>
  </main>
)
