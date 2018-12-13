import React from 'react'

import Header from './header'
import Aside from './aside'
import Routes from './../Routes'

export default class Layout extends React.Component {
  state = {
    showAside: false,
    name: 'John Smith',
  }
  toggleSidebar = () => this.setState({showAside: !this.state.showAside})

  hideAside = () => {
    if (this.state.showAside) {
      this.setState({showAside: false})
    }
  }


  render() {
    return(
      <div className="wrapper" onClick={this.hideAside}>
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
