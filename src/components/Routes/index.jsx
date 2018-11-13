import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home       from './../../content/home'
import Components from './../../content/components'

export default () => <main>
  <Switch>
    <Route path='/' exact     component={Home}/>
    <Route path='/components' component={Components}/>
  </Switch>
</main>
