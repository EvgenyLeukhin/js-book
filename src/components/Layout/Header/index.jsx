import React from 'react';
import { NavLink } from 'react-router-dom';

import GutHubLink from './GutHubLink';

import { navStyles } from 'Components/сonsts';

import './styles.scss';

const headerLinks = [
  { id: 0,
    text: 'JS',
    href: '/js' },

  { id: 1,
    text: 'Webpack',
    href: '/wp' },

  { id: 2,
    text: 'React',
    href: '/react' },

  { id: 3,
    text: 'Redux',
    href: '/redux' },

  { id: 4,
    text: 'NodeJS',
    href: '/nodejs' },
];

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/react'><b>My JS-book</b></NavLink>

        <ul className="main-nav">
          {
            headerLinks.map(i => (
              <li key ={i.id}>
                <NavLink to={i.href} activeStyle={navStyles}>
                  {i.text}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <GutHubLink />
      </nav>
    </header>
  );
};

export default Header;
