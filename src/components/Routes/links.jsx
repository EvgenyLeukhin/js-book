import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  fontWeight: 'bold',
  cursor: 'default',
  textShadow: '0 0 15px #000'
}

export default () => <ul className='links-list'>
  <li><NavLink to='/' exact        activeStyle={styles}>Home</NavLink></li>
  <li><NavLink to='/base-template' activeStyle={styles}>Base template</NavLink></li>
  <li><NavLink to='/configs'       activeStyle={styles}>Configs</NavLink></li>
  <li><NavLink to='/components'    activeStyle={styles}>Components</NavLink></li>
  <li><NavLink to='/props'         activeStyle={styles}>Props</NavLink></li>
  <li><NavLink to='/state'         activeStyle={styles}>State</NavLink></li>
  <li><NavLink to='/jsx'           activeStyle={styles}>JSX & Images</NavLink></li>
  <li><NavLink to='/events'        activeStyle={styles}>Events</NavLink></li>
  <li><NavLink to='/switcher'      activeStyle={styles}>Switcher</NavLink></li>
  <li><NavLink to='/forms'         activeStyle={styles}>Forms</NavLink></li>
  <li><NavLink to='/styling'       activeStyle={styles}>Styling</NavLink></li>
  <li><NavLink to='/maping'        activeStyle={styles}>Maping</NavLink></li>
  <li><NavLink to='/routing'       activeStyle={styles}>Routing</NavLink></li>
  <li><NavLink to='/lifecycle'     activeStyle={styles}>Lifecycle</NavLink></li>
  <li><NavLink to='/redux'         activeStyle={styles}>Redux</NavLink></li>
</ul>
