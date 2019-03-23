import Routes from './Routes';

export default Routes;

// import React from 'react'
// import { Switch, Route } from 'react-router-dom'

// // template component (marhdown to html)
// const CrComp = props => <div dangerouslySetInnerHTML={{__html: props.mdPath.__content}}/>

// // create components from .md
// const Home         = () => <CrComp mdPath={ require('React/home.md')          }/>
// const BaseTemplate = () => <CrComp mdPath={ require('React/base-template.md') }/>
// const Configs      = () => <CrComp mdPath={ require('React/configs.md')       }/>
// const Components   = () => <CrComp mdPath={ require('React/components.md')    }/>
// const Props        = () => <CrComp mdPath={ require('React/props.md')         }/>
// const State        = () => <CrComp mdPath={ require('React/state.md')         }/>
// const Jsx          = () => <CrComp mdPath={ require('React/jsx.md')           }/>
// const Events       = () => <CrComp mdPath={ require('React/events.md')        }/>
// const Switcher     = () => <CrComp mdPath={ require('React/switcher.md')      }/>
// const Forms        = () => <CrComp mdPath={ require('React/forms.md')         }/>
// const Styling      = () => <CrComp mdPath={ require('React/styling.md')       }/>
// const OutputData   = () => <CrComp mdPath={ require('React/output-data.md')   }/>
// const Routing      = () => <CrComp mdPath={ require('React/routing.md')       }/>
// const Lifecycle    = () => <CrComp mdPath={ require('React/lifecycle.md')     }/>
// const ServerPage   = () => <CrComp mdPath={ require('React/server.md')        }/>
// const Redux        = () => <CrComp mdPath={ require('React/redux.md')         }/>
// const Page404      = () => <CrComp mdPath={ require('React/page404.md')       }/>

// export default () => <main className='markdown-body'>
//   <Switch>
//     <Route path='/'    exact     component={Home}/>
//     <Route path='/base-template' component={BaseTemplate}/>
//     <Route path='/configs'       component={Configs}/>
//     <Route path='/components'    component={Components}/>
//     <Route path='/props'         component={Props}/>
//     <Route path='/state'         component={State}/>
//     <Route path='/jsx'           component={Jsx}/>
//     <Route path='/events'        component={Events}/>
//     <Route path='/switcher'      component={Switcher}/>
//     <Route path='/forms'         component={Forms}/>
//     <Route path='/styling'       component={Styling}/>
//     <Route path='/output-data'   component={OutputData}/>
//     <Route path='/routing'       component={Routing}/>
//     <Route path='/lifecycle'     component={Lifecycle}/>
//     <Route path='/server'        component={ServerPage}/>
//     <Route path='/redux'         component={Redux}/>
//     <Route                       component={Page404} />
//   </Switch>
// </main>
