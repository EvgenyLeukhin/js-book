import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Routes from '../Routes';

import './scss/styles.scss';

class Layout extends React.Component {
  state = {
    showAside: true,
    page: 'react',
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
          JsClick     = {() => this.setState({ page: 'js' })}
          WpClick     = {() => this.setState({ page: 'webpack' })}
          ReactClick  = {() => this.setState({ page: 'react' })}
          ReduxClick  = {() => this.setState({ page: 'redux' })}
          NodejsClick = {() => this.setState({ page: 'nodejs' })}
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

export default Layout;
