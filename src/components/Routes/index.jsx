import React from 'react'
import { Switch, Route } from 'react-router-dom'

// template component (marhdown to html)
const CreateComponent = props => <div dangerouslySetInnerHTML={{__html: props.mdPath.__content}}/>

// create components
const Home         = () => <CreateComponent mdPath={ require('./../../content/home.md')          }/>
const BaseTemplate = () => <CreateComponent mdPath={ require('./../../content/base-template.md') }/>
const Configs      = () => <CreateComponent mdPath={ require('./../../content/configs.md')       }/>
const Components   = () => <CreateComponent mdPath={ require('./../../content/components.md')    }/>
const Props        = () => <CreateComponent mdPath={ require('./../../content/props.md')         }/>
const State        = () => <CreateComponent mdPath={ require('./../../content/state.md')         }/>
const Jsx          = () => <CreateComponent mdPath={ require('./../../content/jsx.md')           }/>
const Events       = () => <CreateComponent mdPath={ require('./../../content/events.md')        }/>
const Switcher     = () => <CreateComponent mdPath={ require('./../../content/switcher.md')      }/>
const Forms        = () => <CreateComponent mdPath={ require('./../../content/forms.md')         }/>
const Styling      = () => <CreateComponent mdPath={ require('./../../content/styling.md')       }/>
const Maping       = () => <CreateComponent mdPath={ require('./../../content/maping.md')        }/>
const Routing      = () => <CreateComponent mdPath={ require('./../../content/routing.md')       }/>
const Lifecycle    = () => <CreateComponent mdPath={ require('./../../content/lifecycle.md')     }/>
const Page404      = () => <CreateComponent mdPath={ require('./../../content/page404.md')       }/>

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
    <Route path='/switcher'      component={Switcher}/>
    <Route path='/forms'         component={Forms}/>
    <Route path='/styling'       component={Styling}/>
    <Route path='/maping'        component={Maping}/>
    <Route path='/routing'       component={Routing}/>
    <Route path='/lifecycle'     component={Lifecycle}/>
    <Route                       component={Page404} />
  </Switch>
</main>
