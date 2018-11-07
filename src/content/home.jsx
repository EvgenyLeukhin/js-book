import React from 'react'
import home from './home.md'

export default () =>
<div
  className='markdown-body'
  dangerouslySetInnerHTML={{__html: home.__content}} />

