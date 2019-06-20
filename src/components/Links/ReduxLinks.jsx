import React from 'react';
import { NavLink } from 'react-router-dom';

import { linkStyles } from 'Components/сonsts';

const ReduxLinks = () => (
  <>
    <li><NavLink to='/redux/install' activeStyle={linkStyles}>Install</NavLink></li>
  </>
);

export default ReduxLinks;
