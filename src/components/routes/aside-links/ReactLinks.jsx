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
      <li><NavLink to='/base-template' activeStyle={styles}>Base template</NavLink></li>
      {/* <li><NavLink to='/configs'       activeStyle={styles}>Configs</NavLink></li>
      <li><NavLink to='/components'    activeStyle={styles}>Components</NavLink></li>
      <li><NavLink to='/jsx'           activeStyle={styles}>JSX & Images</NavLink></li>
      <li><NavLink to='/props'         activeStyle={styles}>Props & Proptypes</NavLink></li>
      <li><NavLink to='/state'         activeStyle={styles}>State</NavLink></li>
      <li><NavLink to='/output-data'   activeStyle={styles}>Output Data</NavLink></li>
      <li><NavLink to='/events'        activeStyle={styles}>Events</NavLink></li>
      <li><NavLink to='/switcher'      activeStyle={styles}>Switcher</NavLink></li>
      <li><NavLink to='/forms'         activeStyle={styles}>Forms</NavLink></li>
      <li><NavLink to='/styling'       activeStyle={styles}>Styling</NavLink></li>
      <li><NavLink to='/transitions'   activeStyle={styles}>Transitions</NavLink></li>
      <li><NavLink to='/routing'       activeStyle={styles}>Routing</NavLink></li>
      <li><NavLink to='/lifecycle'     activeStyle={styles}>Lifecycle</NavLink></li>
      <li><NavLink to='/server'        activeStyle={styles}>Server</NavLink></li>
      <li><NavLink to='/redux'         activeStyle={styles}>Redux</NavLink></li> */}
    </Fragment>
  );
};

export default ReactLinks;
