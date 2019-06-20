import React from 'react';
import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Routes from '../Routes';

import './scss/styles.scss';

class Layout extends React.Component {
  state = {
    page: 'React',
    showAside: true,
  }

  toggleSidebar = () => {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }

  render() {
    const { showAside, page } = this.state;

    return(
      <div className="app-wrapper">
        <Header
          page={page}
          click={e => this.setState({ page: e.target.textContent })}
        />
        <Aside
          page={page}
          isShow={showAside}
          toggleSidebar={this.toggleSidebar}
        />
        <Routes />
        <Footer />
      </div>
    );
  }
}

Header.propTypes = {
  page: T.string,
  showAside: T.bool
};

export default Layout;
