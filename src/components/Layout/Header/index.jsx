import React from 'react';
import { NavLink } from 'react-router-dom';

import GutHubLink from './GutHubLink';

import { activeHeaderStyles } from 'Constants/activeStyles';
import links from 'Constants/links';

import './styles.scss';

const HeaderLinks = () => links.header.map(i => (
  <li key ={i.id}>
    <NavLink to={i.to} activeStyle={activeHeaderStyles}>
      {i.title}
    </NavLink>
  </li>
));

const Header = () => (
  <header>
    <nav>
      <NavLink to='/js' className="home-link"><b>My JS-book</b></NavLink>

      <ul className="main-nav">
        <HeaderLinks />
      </ul>

      <GutHubLink />
    </nav>
  </header>
);

export default Header;
