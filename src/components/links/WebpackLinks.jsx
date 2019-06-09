import React from 'react';
import { NavLink } from 'react-router-dom';

import { styles } from 'Components/Consts';

const WebpackLinks = () => (
  <>
    <li><NavLink to='/wp-install'   activeStyle={styles}>Install</NavLink></li>
    <li><NavLink to='/wp-config'    activeStyle={styles}>Config</NavLink></li>
    <li><NavLink to='/wp-js'        activeStyle={styles}>JS-Babel</NavLink></li>
    <li><NavLink to='/wp-css'       activeStyle={styles}>CSS</NavLink></li>
    <li><NavLink to='/wp-html'      activeStyle={styles}>HTML</NavLink></li>
    <li><NavLink to='/wp-img'       activeStyle={styles}>Images</NavLink></li>
    <li><NavLink to='/wp-fonts'     activeStyle={styles}>Fonts</NavLink></li>
    <li><NavLink to='/wp-md'        activeStyle={styles}>Markdown</NavLink></li>
    <li><NavLink to='/wp-plugins'   activeStyle={styles}>Plugins</NavLink></li>
    <li><NavLink to='/wp-eslint'    activeStyle={styles}>ESLint</NavLink></li>
    <li><NavLink to='/wp-editor'    activeStyle={styles}>Editor</NavLink></li>
    <li><NavLink to='/wp-structure' activeStyle={styles}>Structure</NavLink></li>
  </>
);

export default WebpackLinks;
