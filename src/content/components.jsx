import React from 'react'
import components from './components.md'

export default () => <div className='markdown-body'
  dangerouslySetInnerHTML={{__html: components.__content}}
/>
