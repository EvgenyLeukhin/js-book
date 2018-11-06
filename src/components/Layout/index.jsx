import React from 'react'

import Header from './header'
import Aside from './aside'
import Routes from './../Routes'

export default class Layout extends React.Component {
  state = {

  }

  render() {
    return(
      <div className="page-wrapper">
        <Header/>
        <Aside/>
        <Routes/>
      </div>
    )
  }
}
