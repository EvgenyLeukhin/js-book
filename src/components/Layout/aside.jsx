import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  fontWeight: 'bold'
}

export default () => (
  <aside>
    <ul className="content-list">
      <li><NavLink to='/page-2' activeStyle={styles}>page-2</NavLink></li>
      <li><NavLink to='/page-3' activeStyle={styles}>page-3</NavLink></li>
    </ul>
  </aside>
)
