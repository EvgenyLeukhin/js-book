import React from 'react';
import { Switch, Route } from 'react-router-dom';

import JSLinks      from 'Links/JSLinks';
import WebpackLinks from 'Links/WebpackLinks';
import ReactLinks   from 'Links/ReactLinks';
import ReduxLinks   from 'Links/ReduxLinks';
import NodeJsLinks  from 'Links/NodeJsLinks';

const Links = () => (
  <Switch>
    <Route path='/'        component={ReactLinks} />
    <Route path='/js'      component={JSLinks} />
    <Route path='/redux'   component={ReduxLinks} />
    <Route path='/webpack' component={WebpackLinks} />
    <Route path='/nodejs'  component={NodeJsLinks} />
  </Switch>
);

export default Links;
