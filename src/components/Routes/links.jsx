import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  fontWeight: 'bold',
  cursor: 'default',
  textShadow: '0 0 5px #000'
}

export default () => <ul className='links-list'>
  <li><NavLink to='/' exact        activeStyle={styles}>Home</NavLink></li>
  <li><NavLink to='/base-template' activeStyle={styles}>Base template</NavLink></li>
  <li><NavLink to='/webpack'       activeStyle={styles}>Webpack</NavLink></li>
  <li><NavLink to='/components'    activeStyle={styles}>Components</NavLink></li>
</ul>
