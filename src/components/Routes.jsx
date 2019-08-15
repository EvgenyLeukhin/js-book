import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  // main pages
  ReacT, Redux, JS, Webpack, NodeJs,

  // js pages
  JsScript, JsTypes, JsVars, JsString, JsNumber, JsBoolean, JsFunction, JsArray, JsObject, JsOperators, JsLogic,JsCycles,

  // webpack-pages
  WpInstall, WpConfig, WpJs, WpCss, WpHtml, WpImg, WpFonts, WpMd, WpPlugins, WpEslint, WpEditor, WpStructure,

  // nodejs-pages
  NodeJsExpress,

  // react-pages
  ReactTemplate, ReactComponents, ReactProps, ReactProptypes, ReactJSX, ReactImages, ReactState, ReactOutputData, ReactMapingData, ReactEvents, ReactSwitcher, ReactForms, ReactStyling, ReactTransition, ReactRefs, ReactRouting, ReactLifecycle, ReactFetch, ReactServer, ReactRedux, ReactPlugins, ReactGatsby

} from './RequireMd';

import Test from 'Components/Test';

const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/js" /> } />

      {/* main pages */}
      <Route path='/js'     exact component={JS} />
      <Route path='/wp'     exact component={Webpack} />
      <Route path='/react'  exact component={ReacT} />
      <Route path='/redux'  exact component={Redux} />
      <Route path='/nodejs' exact component={NodeJs} />
      <Route path='/test'         component={Test} />

      {/* js pages */}
      <Route path='/js/script'      component={JsScript} />
      <Route path='/js/types'       component={JsTypes} />
      <Route path='/js/vars'        component={JsVars} />
      <Route path='/js/string'      component={JsString} />
      <Route path='/js/number'      component={JsNumber} />
      <Route path='/js/boolean'     component={JsBoolean} />
      <Route path='/js/function'    component={JsFunction} />
      <Route path='/js/array'       component={JsArray} />
      <Route path='/js/object'      component={JsObject} />
      <Route path='/js/operators'   component={JsOperators} />
      <Route path='/js/logic'       component={JsLogic} />
      <Route path='/js/cycles'      component={JsCycles} />

      {/* wp-pages */}
      <Route path='/wp/install'   component={WpInstall} />
      <Route path='/wp/config'    component={WpConfig} />
      <Route path='/wp/js'        component={WpJs} />
      <Route path='/wp/css'       component={WpCss} />
      <Route path='/wp/img'       component={WpImg} />
      <Route path='/wp/fonts'     component={WpFonts} />
      <Route path='/wp/md'        component={WpMd} />
      <Route path='/wp/html'      component={WpHtml} />
      <Route path='/wp/plugins'   component={WpPlugins} />
      <Route path='/wp/eslint'    component={WpEslint} />
      <Route path='/wp/editor'    component={WpEditor} />
      <Route path='/wp/structure' component={WpStructure} />

      {/* react-pages */}
      <Route path='/react/template'    component={ReactTemplate} />
      <Route path='/react/components'  component={ReactComponents} />
      <Route path='/react/props'       component={ReactProps} />
      <Route path='/react/proptypes'   component={ReactProptypes} />
      <Route path='/react/jsx'         component={ReactJSX} />
      <Route path='/react/images'      component={ReactImages} />
      <Route path='/react/state'       component={ReactState} />
      <Route path='/react/output-data' component={ReactOutputData} />
      <Route path='/react/maping-data' component={ReactMapingData} />
      <Route path='/react/events'      component={ReactEvents} />
      <Route path='/react/switcher'    component={ReactSwitcher} />
      <Route path='/react/forms'       component={ReactForms} />
      <Route path='/react/styling'     component={ReactStyling} />
      <Route path='/react/transitions' component={ReactTransition} />
      <Route path='/react/refs'        component={ReactRefs} />
      <Route path='/react/routing'     component={ReactRouting} />
      <Route path='/react/lifecycle'   component={ReactLifecycle} />
      <Route path='/react/fetch'       component={ReactFetch} />
      <Route path='/react/server'      component={ReactServer} />
      <Route path='/react/redux'       component={ReactRedux} />
      <Route path='/react/plugins'     component={ReactPlugins} />
      <Route path='/react/gatsby-js'   component={ReactGatsby} />

      {/* nodejs-pages */}
      <Route path='/nodejs/express' component={NodeJsExpress} />

      {/* 404 page */}
      <Route render={() => <h1 style={{ paddingTop: 24 }}>404 - Page not found</h1>} />
    </Switch>
  </main>
);

export default Routes;
