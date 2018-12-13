import React from 'react'
import { Switch, Route } from 'react-router-dom'

// template component (marhdown to html)
const CrComp = props => <div dangerouslySetInnerHTML={{__html: props.mdPath.__content}}/>

// create components
const Home         = () => <CrComp mdPath={ require('./../../content/home.md')          }/>
const BaseTemplate = () => <CrComp mdPath={ require('./../../content/base-template.md') }/>
const Configs      = () => <CrComp mdPath={ require('./../../content/configs.md')       }/>
const Components   = () => <CrComp mdPath={ require('./../../content/components.md')    }/>
const Props        = () => <CrComp mdPath={ require('./../../content/props.md')         }/>
const State        = () => <CrComp mdPath={ require('./../../content/state.md')         }/>
const Jsx          = () => <CrComp mdPath={ require('./../../content/jsx.md')           }/>
const Events       = () => <CrComp mdPath={ require('./../../content/events.md')        }/>
const Switcher     = () => <CrComp mdPath={ require('./../../content/switcher.md')      }/>
const Forms        = () => <CrComp mdPath={ require('./../../content/forms.md')         }/>
const Styling      = () => <CrComp mdPath={ require('./../../content/styling.md')       }/>
const OutputData   = () => <CrComp mdPath={ require('./../../content/output-data.md')   }/>
const Routing      = () => <CrComp mdPath={ require('./../../content/routing.md')       }/>
const Lifecycle    = () => <CrComp mdPath={ require('./../../content/lifecycle.md')     }/>
const Page404      = () => <CrComp mdPath={ require('./../../content/page404.md')       }/>

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
    <Route path='/output-data'   component={OutputData}/>
    <Route path='/routing'       component={Routing}/>
    <Route path='/lifecycle'     component={Lifecycle}/>
    <Route                       component={Page404} />
  </Switch>
</main>
