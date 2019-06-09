import React from 'react';
import { NavLink } from 'react-router-dom';

import { styles } from 'Components/Consts';

const JSLinks = () => (
  <>
    <li><NavLink to='/js-script'    activeStyle={styles}>Script</NavLink></li>
    <li><NavLink to='/js-types'     activeStyle={styles}>Types</NavLink></li>
    <li><NavLink to='/js-vars'      activeStyle={styles}>Variables</NavLink></li>
    <li><NavLink to='/js-string'    activeStyle={styles}>String</NavLink></li>
    <li><NavLink to='/js-number'    activeStyle={styles}>Number</NavLink></li>
    <li><NavLink to='/js-bool'      activeStyle={styles}>Boolean</NavLink></li>
    <li><NavLink to='/js-func'      activeStyle={styles}>Function</NavLink></li>
    <li><NavLink to='/js-arr'       activeStyle={styles}>Arrays</NavLink></li>
    <li><NavLink to='/js-obj'       activeStyle={styles}>Object</NavLink></li>
    <li><NavLink to='/js-operators' activeStyle={styles}>Operators</NavLink></li>
    <li><NavLink to='/js-logic'     activeStyle={styles}>Logic</NavLink></li>
    <li><NavLink to='/js-cycles'    activeStyle={styles}>Cycles</NavLink></li>
    <li><NavLink to='/js-export'    activeStyle={styles}>Export</NavLink></li>
    <li><NavLink to='/js-class'     activeStyle={styles}>Class</NavLink></li>
    <li><NavLink to='/js-dom'       activeStyle={styles}>DOM</NavLink></li>
    <li><NavLink to='/js-events'    activeStyle={styles}>Events</NavLink></li>
    <li><NavLink to='/js-storage'   activeStyle={styles}>Storage</NavLink></li>
    <li><NavLink to='/js-inputs'    activeStyle={styles}>Inputs</NavLink></li>
    <li><NavLink to='/js-request'   activeStyle={styles}>Request</NavLink></li>
    <li><NavLink to='/js-methods'   activeStyle={styles}>Methods</NavLink></li>
    <li><NavLink to='/js-canvas'    activeStyle={styles}>Canvas</NavLink></li>
  </>
);

export default JSLinks;
