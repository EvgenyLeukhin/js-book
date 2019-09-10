import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MarkdownWrapper from './MarkdownWrapper';

import JS from 'JS/index.md';

const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/js" /> } />
      <Route path='/js'     exact component={() => <MarkdownWrapper mdFile={JS} />} />
    </Switch>
  </main>
)

export default Routes;
