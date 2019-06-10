import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkStyles } from 'Components/Consts';

const NodeJsLinks = () => (
  <>
    <li><NavLink to='/nodejs-install'      activeStyle={linkStyles}>Install</NavLink></li>
    <li><NavLink to='/nodejs-npm-nvm'      activeStyle={linkStyles}>Npm & Nvm</NavLink></li>
    <li><NavLink to='/nodejs-gulp-grunt'   activeStyle={linkStyles}>Gulp & Grunt</NavLink></li>
    <li><NavLink to='/nodejs-browser-sync' activeStyle={linkStyles}>Browser-sync</NavLink></li>
    <li><NavLink to='/nodejs-express'      activeStyle={linkStyles}>Express</NavLink></li>
  </>
);

export default NodeJsLinks;
