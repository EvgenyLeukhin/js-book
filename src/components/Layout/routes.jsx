import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home       from './../../content/home'
import Components from './../../content/components'
import Props      from './../../content/props'

export default () => (
  <main>
    <Switch>
      <Route path='/' exact     component={Home} ></Route>
      <Route path='/props'      component={Props}></Route>
    </Switch>
  </main>
)
