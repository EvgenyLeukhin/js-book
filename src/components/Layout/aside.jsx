import React from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

const styles = {
  fontWeight: 'bold',
  cusor: 'default'
}

export default props =>
  <aside className={cx({'hide': props.hideAside })}>
    <ul className='content-list'>
      <li><NavLink to='/' exact     activeStyle={styles}>Home</NavLink></li>
      <li><NavLink to='/components' activeStyle={styles}>Components</NavLink></li>
    </ul>
    <i onClick={props.toggleAside}/>
  </aside>
