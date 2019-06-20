
import React from 'react';
import T from 'prop-types';
import cln from 'classnames';

import JSLinks from 'Links/JSLinks';
import WebpackLinks from 'Links/WebpackLinks';
import ReactLinks from 'Links/ReactLinks';
import ReduxLinks from 'Links/ReduxLinks';
import NodeJsLinks from 'Links/NodeJsLinks';

import './styles.scss';

const Aside = ({ isShow, toggleSidebar, page }) => {

  return (
    <aside className={cln({'hide': !isShow })}>
      <ul className='links-list'>
        {
          page === 'JS'      && <JSLinks />      ||
          page === 'Webpack' && <WebpackLinks /> ||
          page === 'React'   && <ReactLinks />   ||
          page === 'Redux'   && <ReduxLinks />   ||
          page === 'NodeJS'  && <NodeJsLinks />
        }
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
