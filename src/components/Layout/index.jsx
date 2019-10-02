import React from 'react';
import T from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Routes from '../Routes';

import './scss/styles.scss';

class Layout extends React.Component {
  state = { showAside: true }

  toggleSidebar = () => {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }

  closeSidebar = () => this.setState({ showAside: false });

  render() {
    const { showAside } = this.state;

    return(
      <div className="app-wrapper">
        <Header />
        <Aside
          isShow={showAside}
          toggleSidebar={this.toggleSidebar}
          onSidebarLinkClick={this.closeSidebar}
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
