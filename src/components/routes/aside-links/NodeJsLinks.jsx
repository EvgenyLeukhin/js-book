import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  fontWeight: 'bold',
  cursor: 'default',
  textShadow: '0 0 15px #000'
};

const NodeJsLinks = () => {
  return (
    <Fragment>
      <li><NavLink to='/123' exact activeStyle={styles}>NodeJsLinks</NavLink></li>
    </Fragment>
  );
};

export default NodeJsLinks;
