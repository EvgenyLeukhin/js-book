import React from 'react';
import T from 'prop-types';
import cln from 'classnames';
import Links from './Links';

import './styles.scss';

const Aside = ({ isShow, toggleSidebar }) => {

  return (
    <aside className={cln({'hide': !isShow })}>
      <ul className='links-list'>
        <Links />
      </ul>

      <i onClick={toggleSidebar} />
    </aside>
  );
};

Aside.propTypes = {
  isShow: T.bool,
  toggleSidebar: T.func
};

export default Aside;
