import React from 'react'

import Header from './header'
import Aside from './aside'
import Routes from './../Routes'

export default class Layout extends React.Component {
  state = {
    showAside: true
  }
  toggleSidebar = () => this.setState({showAside: !this.state.showAside})

  render() {
    return(
      <div className="page-wrapper">
        <Header/>
        <Aside
          hideAside={!this.state.showAside}
          toggleAside={this.toggleSidebar}
        />
        <Routes/>
      </div>
    )
  }
}
