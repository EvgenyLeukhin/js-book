import React from 'react'
import cx from 'classnames'

import Links from './../Routes/links'

export default props =>
  <aside className={cx({'hide': props.hideAside })}>
    <Links/>
    <i onClick={props.toggleAside}/>
  </aside>
