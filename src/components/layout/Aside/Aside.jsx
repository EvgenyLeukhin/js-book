import React from 'react';
import cln from 'classnames';
import Links from './Links';

const Aside = props => {
  const { isShow, toggleSidebar, page } = props;

  return (
    <aside className={cln({'hide': !isShow })}>
      <ul className='links-list'>
        <Links page={page} />
      </ul>

      <i onClick={toggleSidebar} />
    </aside>
  );
};

export default Aside;
