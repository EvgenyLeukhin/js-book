import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import markdown-content
import home         from './../../content/home.md'
import baseTemplate from './../../content/base-template.md'
import configs      from './../../content/configs.md'
import components   from './../../content/components.md'

// convert mardkdown to components
const Home         = () => <div dangerouslySetInnerHTML={{__html: home.        __content}}/>
const BaseTemplate = () => <div dangerouslySetInnerHTML={{__html: baseTemplate.__content}}/>
const Configs      = () => <div dangerouslySetInnerHTML={{__html: configs.     __content}}/>
const Components   = () => <div dangerouslySetInnerHTML={{__html: components.  __content}}/>


export default () => <main className='markdown-body'>
  <Switch>
    <Route path='/'    exact     component={Home}/>
    <Route path='/base-template' component={BaseTemplate}/>
    <Route path='/configs'       component={Configs}/>
    <Route path='/components'    component={Components}/>
  </Switch>
</main>
