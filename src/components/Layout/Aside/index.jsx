
import React from 'react';
import T from 'prop-types';
import cln from 'classnames';
import { Switch, Route } from 'react-router-dom';

import JSLinks from 'Links/JSLinks';
import WebpackLinks from 'Links/WebpackLinks';
import ReactLinks from 'Links/ReactLinks';
import ReduxLinks from 'Links/ReduxLinks';
import NodeJsLinks from 'Links/NodeJsLinks';

import './styles.scss';

const Aside = ({ isShow, toggleSidebar }) => {

  return (
    <aside className={cln({'hide': !isShow })}>
      <ul className='links-list'>
        <Switch>
          <Route path='/js'     component={JSLinks} />
          <Route path='/wp'     component={WebpackLinks} />
          <Route path='/react'  component={ReactLinks} />
          <Route path='/redux'  component={ReduxLinks} />
          <Route path='/nodejs' component={NodeJsLinks} />
        </Switch>
      </ul>

      <i onClick={toggleSidebar} />
    </aside>
  );
};

Aside.propTypes = {
  isShow: T.bool,
  toggleSidebar: T.func
};

export default Aside;
