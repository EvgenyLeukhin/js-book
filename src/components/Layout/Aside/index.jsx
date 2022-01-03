import React from 'react';
import T from 'prop-types';
import cln from 'classnames';
import { Switch, Route, NavLink } from 'react-router-dom';

import { activeSidebarStyles } from 'Constants/activeStyles';
import links from 'Constants/links';

import './styles.scss';


const Aside = ({ isShow, toggleSidebar, onSidebarLinkClick }) => {
  const returnLinks = (linksField) => {
    return (
      links[`${linksField}`].map(link => {
        return (
          <li key ={link.id}>
            <NavLink
              to={link.to}
              onClick={onSidebarLinkClick}
              activeStyle={activeSidebarStyles}
              className={cln({ 'divider': link.divider })}
            >
              {link.title}
            </NavLink>
          </li>
        );
      })
    );
  };

  return (
    <>
      <aside className={cln({ 'hide': !isShow })}>
        <ul className='links-list'>
          <Switch>
            <Route path='/js'     component={() => returnLinks('js')} />
            <Route path='/react'  component={() => returnLinks('react')} />
            <Route path='/api'    component={() => returnLinks('api')} />
            <Route path='/state'  component={() => returnLinks('state')} />
            <Route path='/wp'     component={() => returnLinks('webpack')} />
            <Route path='/nextjs' component={() => returnLinks('nextjs')} />
            <Route path='/nodejs' component={() => returnLinks('nodejs')} />
            <Route path='/other'  component={() => returnLinks('other')} />
          </Switch>
        </ul>
      </aside>

      <div className="sidebar-toggler" onClick={toggleSidebar} />
    </>
  );
};

Aside.propTypes = {
  isShow: T.bool,
  toggleSidebar: T.func,
  onSidebarLinkClick: T.func
};

export default Aside;
