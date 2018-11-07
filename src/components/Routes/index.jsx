import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../../content/home'

export default () => (
  <main>
    <Switch>
      <Route path='/' component={Home} exact></Route>
    </Switch>
  </main>
)
