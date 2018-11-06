import React from 'react'
import { NavLink } from 'react-router-dom'
// import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';

export default props => {
  const styles = { fontWeight: 'bold' }
  return(
    <aside className={cx({'hide': props.hideAside })}>
      <ul className='content-list'>
        <li><NavLink to='/page-2' activeStyle={styles}>page-2</NavLink></li>
        <li><NavLink to='/page-3' activeStyle={styles}>page-3</NavLink></li>
      </ul>
      <i onClick={props.toggleAside}></i>
    </aside>
  )
}
