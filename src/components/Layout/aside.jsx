import React from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames';

const links = [
  {
    path: '/',
    linkText: 'Home',
    exact: true
  },
  {
    path: 'page-2',
    linkText: 'Page 2',
  },
  {
    path: 'page-3',
    linkText: 'Page 3',
  },
]

const styles = {
  fontWeight: 'bold'
}

export default props => {
  return(
    <aside className={cx({'hide': props.hideAside })}>
      <ul className='content-list'>
        {/* {
          links.map((i, index) =>
            <li key={index}>
              <NavLink
                to={i.path}
                exact={i.exact}
                activeStyle={{ fontWeight: 'bold' }}
              >{i.linkText}</NavLink>
            </li>
          )
        } */}
        <li><NavLink to='/' exact activeStyle={styles}>Home</NavLink></li>
        <li><NavLink to='/page-2' activeStyle={styles}>page-2</NavLink></li>
        <li><NavLink to='/page-3' activeStyle={styles}>page-3</NavLink></li>
      </ul>
      <i onClick={props.toggleAside}></i>
    </aside>
  )
}
