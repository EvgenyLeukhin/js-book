import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import markdown-content
import home         from './../../content/home.md'
import baseTemplate from './../../content/base-template.md'
import configs      from './../../content/configs.md'
import components   from './../../content/components.md'
import props        from './../../content/props.md'
import state        from './../../content/state.md'
import jsx          from './../../content/jsx.md'
import events       from './../../content/events.md'
import forms        from './../../content/forms.md'
import styling      from './../../content/styling.md'
import page404      from './../../content/page404.md'

// convert mardkdown to components
const Home         = () => <div dangerouslySetInnerHTML={{__html: home.        __content}}/>
const BaseTemplate = () => <div dangerouslySetInnerHTML={{__html: baseTemplate.__content}}/>
const Configs      = () => <div dangerouslySetInnerHTML={{__html: configs.     __content}}/>
const Components   = () => <div dangerouslySetInnerHTML={{__html: components.  __content}}/>
const Props        = () => <div dangerouslySetInnerHTML={{__html: props.       __content}}/>
const State        = () => <div dangerouslySetInnerHTML={{__html: state.       __content}}/>
const Jsx          = () => <div dangerouslySetInnerHTML={{__html: jsx.         __content}}/>
const Events       = () => <div dangerouslySetInnerHTML={{__html: events.      __content}}/>
const Forms        = () => <div dangerouslySetInnerHTML={{__html: forms.       __content}}/>
const Styling      = () => <div dangerouslySetInnerHTML={{__html: styling.     __content}}/>
const Page404      = () => <div dangerouslySetInnerHTML={{__html: page404.     __content}}/>


export default () => <main className='markdown-body'>
  <Switch>
    <Route path='/'    exact     component={Home}/>
    <Route path='/base-template' component={BaseTemplate}/>
    <Route path='/configs'       component={Configs}/>
    <Route path='/components'    component={Components}/>
    <Route path='/props'         component={Props}/>
    <Route path='/state'         component={State}/>
    <Route path='/jsx'           component={Jsx}/>
    <Route path='/events'        component={Events}/>
    <Route path='/forms'         component={Forms}/>
    <Route path='/styling'       component={Styling}/>
    <Route                       component={Page404} />
  </Switch>
</main>
