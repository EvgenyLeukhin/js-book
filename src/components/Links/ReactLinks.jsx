import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkStyles } from 'Components/сonsts';

const ReactLinks = () => (
  <>
    <li><NavLink to='/react/template'    activeStyle={linkStyles}>Template</NavLink></li>
    <li><NavLink to='/react/components'  activeStyle={linkStyles}>Components</NavLink></li>
    <li><NavLink to='/react/jsx'         activeStyle={linkStyles}>JSX</NavLink></li>
    <li><NavLink to='/react/state'       activeStyle={linkStyles}>State</NavLink></li>
    <li><NavLink to='/react/props'       activeStyle={linkStyles}>Props</NavLink></li>
    <li><NavLink to='/react/proptypes'   activeStyle={linkStyles}>PropTypes</NavLink></li>
    <li><NavLink to='/react/styling'     activeStyle={linkStyles}>Styling</NavLink></li>
    <li><NavLink to='/react/images'      activeStyle={linkStyles}>Images</NavLink></li>
    <li><NavLink to='/react/output-data' activeStyle={linkStyles}>Output Data</NavLink></li>
    <li><NavLink to='/react/maping-data' activeStyle={linkStyles}>Maping Data</NavLink></li>
    <li><NavLink to='/react/routing'     activeStyle={linkStyles}>Routing</NavLink></li>
    <li><NavLink to='/react/switcher'    activeStyle={linkStyles}>Switcher</NavLink></li>
    <li><NavLink to='/react/transitions' activeStyle={linkStyles}>Transitions</NavLink></li>
    <li><NavLink to='/react/refs'        activeStyle={linkStyles}>Refs</NavLink></li>
    <li><NavLink to='/react/forms'       activeStyle={linkStyles}>Forms</NavLink></li>
    <li><NavLink to='/react/lifecycle'   activeStyle={linkStyles}>Lifecycle</NavLink></li>
    <li><NavLink to='/react/events'      activeStyle={linkStyles}>Events</NavLink></li>
    <li><NavLink to='/react/fetch'       activeStyle={linkStyles}>Fetch in CBB</NavLink></li>
    <li><NavLink to='/react/server'      activeStyle={linkStyles}>Server API X</NavLink></li>
    <li><NavLink to='/react/redux'       activeStyle={linkStyles}>Redux X</NavLink></li>
    <li><NavLink to='/react/plugins'     activeStyle={linkStyles}>Plugins X</NavLink></li>
    <li><NavLink to='/react/gatsby-js'   activeStyle={linkStyles}>GatsbyJS</NavLink></li>
  </>
);

export default ReactLinks;
