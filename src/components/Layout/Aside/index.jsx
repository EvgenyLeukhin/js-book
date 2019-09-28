
import React from 'react';
import T from 'prop-types';
import cln from 'classnames';
import { Switch, Route, NavLink } from 'react-router-dom';

import { activeSidebarStyles } from 'Constants/activeStyles';
import links from 'Constants/links';

import './styles.scss';

const JSLinks = () => links.js.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeSidebarStyles}>
      {i.title}
    </NavLink>
  </li>
));

const WebpackLinks = () => links.webpack.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeSidebarStyles}>
      {i.title}
    </NavLink>
  </li>
));

const ReactLinks = () => links.react.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeSidebarStyles}>
      {i.title}
    </NavLink>
  </li>
));

const ReduxLinks = () => links.redux.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeSidebarStyles}>
      {i.title}
    </NavLink>
  </li>
));

const NodeJsLinks = () => links.nodejs.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeSidebarStyles}>
      {i.title}
    </NavLink>
  </li>
));


const Aside = ({ isShow, toggleSidebar }) => (
  <aside className={cln({ 'hide': !isShow })}>
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

Aside.propTypes = {
  isShow: T.bool,
  toggleSidebar: T.func
};

export default Aside;
