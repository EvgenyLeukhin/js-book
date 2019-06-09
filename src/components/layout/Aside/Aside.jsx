import React from 'react';
import T from 'prop-types';
import cln from 'classnames';
import ImportLinks from './ImportLinks';

const Aside = props => {
  const { isShow, toggleSidebar, page } = props;

  return (
    <aside className={cln({'hide': !isShow })}>
      <ul className='links-list'>
        <ImportLinks page={page} />
      </ul>

      <i onClick={toggleSidebar} />
    </aside>
  );
};

Aside.propTypes = {
  isShow: T.bool,
  toggleSidebar: T.func,
  page: T.string
};

export default Aside;
