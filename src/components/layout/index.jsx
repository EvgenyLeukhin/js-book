import React from 'react';

import Header from './Header';
import Aside from './Aside';
import Routes from './../routes';

import './scss/styles.scss';

class Layout extends React.Component {
  state = {
    showAside: true,
    page: 'react-page',
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
          JsClick      = {() => this.setState({ page: 'js-page' })}
          WebpackClick = {() => this.setState({ page: 'webpack-page' })}
          ReactClick   = {() => this.setState({ page: 'react-page' })}
          NodeJsClick  = {() => this.setState({ page: 'nodejs-page' })}
          page={page}
        />
        <Aside
          isShow={showAside}
          toggleSidebar={this.toggleSidebar}
          page={page}
        />

        <Routes />
      </div>
    );
  }
}

export default Layout;
