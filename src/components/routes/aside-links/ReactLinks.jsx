import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  fontWeight: 'bold',
  cursor: 'default',
  textShadow: '0 0 15px #000'
};

export const ReactLinks = () => {
  return (
    <Fragment>
      <li><NavLink to='/react-template'    activeStyle={styles}>Template</NavLink></li>
      <li><NavLink to='/react-components'  activeStyle={styles}>Components</NavLink></li>
      <li><NavLink to='/react-state'       activeStyle={styles}>State</NavLink></li>
      <li><NavLink to='/react-props'       activeStyle={styles}>Props</NavLink></li>
      <li><NavLink to='/react-proptypes'   activeStyle={styles}>PropTypes</NavLink></li>
      <li><NavLink to='/react-jsx'         activeStyle={styles}>JSX & Images</NavLink></li>
      <li><NavLink to='/react-output-data' activeStyle={styles}>Output Data</NavLink></li>
      <li><NavLink to='/react-events'      activeStyle={styles}>Events</NavLink></li>
      <li><NavLink to='/react-switcher'    activeStyle={styles}>Switcher</NavLink></li>
      <li><NavLink to='/react-forms'       activeStyle={styles}>Forms</NavLink></li>
      <li><NavLink to='/react-styling'     activeStyle={styles}>Styling</NavLink></li>
      <li><NavLink to='/react-transitions' activeStyle={styles}>Transitions</NavLink></li>
      <li><NavLink to='/react-routing'     activeStyle={styles}>Routing</NavLink></li>
      <li><NavLink to='/react-lifecycle'   activeStyle={styles}>Lifecycle</NavLink></li>
      <li><NavLink to='/react-server'      activeStyle={styles}>Server</NavLink></li>
      <li><NavLink to='/react-redux'       activeStyle={styles}>Redux</NavLink></li>
    </Fragment>
  );
};

export default ReactLinks;
