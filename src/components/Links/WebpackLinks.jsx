import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkStyles } from 'Components/Consts';

const WebpackLinks = () => (
  <>
    <li><NavLink to='/wp/install'   activeStyle={linkStyles}>Install</NavLink></li>
    <li><NavLink to='/wp/config'    activeStyle={linkStyles}>Config</NavLink></li>
    <li><NavLink to='/wp/js'        activeStyle={linkStyles}>JS-Babel</NavLink></li>
    <li><NavLink to='/wp/css'       activeStyle={linkStyles}>CSS</NavLink></li>
    <li><NavLink to='/wp/html'      activeStyle={linkStyles}>HTML</NavLink></li>
    <li><NavLink to='/wp/img'       activeStyle={linkStyles}>Images</NavLink></li>
    <li><NavLink to='/wp/fonts'     activeStyle={linkStyles}>Fonts</NavLink></li>
    <li><NavLink to='/wp/md'        activeStyle={linkStyles}>Markdown</NavLink></li>
    <li><NavLink to='/wp/plugins'   activeStyle={linkStyles}>Plugins</NavLink></li>
    <li><NavLink to='/wp/eslint'    activeStyle={linkStyles}>ESLint</NavLink></li>
    <li><NavLink to='/wp/editor'    activeStyle={linkStyles}>Editor</NavLink></li>
    <li><NavLink to='/wp/structure' activeStyle={linkStyles}>Structure</NavLink></li>
  </>
);

export default WebpackLinks;
