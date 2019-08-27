import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkStyles } from 'Components/сonsts';

const JSLinks = () => (
  <>
    <li><NavLink to='/js/script'    activeStyle={linkStyles}>Script</NavLink></li>
    <li><NavLink to='/js/vars'      activeStyle={linkStyles}>Var/Let/Const</NavLink></li>
    <li><NavLink to='/js/string'    activeStyle={linkStyles}>String</NavLink></li>
    <li><NavLink to='/js/number'    activeStyle={linkStyles}>Number</NavLink></li>
    <li><NavLink to='/js/boolean'   activeStyle={linkStyles}>Boolean</NavLink></li>
    <li><NavLink to='/js/function'  activeStyle={linkStyles}>Function</NavLink></li>
    <li><NavLink to='/js/array'     activeStyle={linkStyles}>Array</NavLink></li>
    <li><NavLink to='/js/object'    activeStyle={linkStyles}>Object</NavLink></li>
    <li><NavLink to='/js/types'     activeStyle={linkStyles}>Types change</NavLink></li>
    <li><NavLink to='/js/operators' activeStyle={linkStyles}>Operators</NavLink></li>
    <li><NavLink to='/js/logic'     activeStyle={linkStyles}>Logic</NavLink></li>
    <li><NavLink to='/js/cycles'    activeStyle={linkStyles}>Cycles</NavLink></li>
    <li><NavLink to='/js/export'    activeStyle={linkStyles}>Import/Export</NavLink></li>
    <li><NavLink to='/js/class'     activeStyle={linkStyles}>Class</NavLink></li>
    <li><NavLink to='/js/dom'       activeStyle={linkStyles}>DOM</NavLink></li>
    <li><NavLink to='/js/events'    activeStyle={linkStyles}>Events</NavLink></li>
    <li><NavLink to='/js/storage'   activeStyle={linkStyles}>Storage</NavLink></li>
    <li><NavLink to='/js/forms'     activeStyle={linkStyles}>Forms</NavLink></li>
    <li><NavLink to='/js/request'   activeStyle={linkStyles}>Request</NavLink></li>
    <li><NavLink to='/js/methods'   activeStyle={linkStyles}>Methods</NavLink></li>
    <li><NavLink to='/js/canvas'    activeStyle={linkStyles}>Canvas</NavLink></li>
  </>
);

export default JSLinks;
