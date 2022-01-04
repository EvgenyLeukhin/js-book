import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MdWrapper from './MarkdownWrapper';

import {
  // index
  Js, ReacT, Api, State, Webpack, Nextjs, NodeJs, Other, Test,

  // js
  JsScript, JsTypes, JsVars, JsString, JsNumber, JsNull, JsBoolean, JsFunction, JsFunction2, JsArray, JsArray2, JsObject, JsMath, JsLogic, JsCycles, JsClass, JsDom, JsForms, JsImport, JsEvents, JsStorage,

  // react
  ReactTemplate, ReactComponents, ReactProps, ReactProptypes, ReactJSX, ReactImages, ReactState, ReactOutputData, ReactMapingData, ReactEvents, ReactSwitcher, ReactForms, ReactStyling, ReactTransition, ReactRefs, ReactRouting, ReactLibs, ReactTypescript, ReactHooks, ReactGatsby,

  // api
  ApiRequest, ApiCallback, ApiPromise, ApiPromise2, ApiFetch, ApiServer, ApiFetchData,

  // state
  ReduxProviderEnhancer, ReduxRootReducer, ReduxSingleReducer, ReduxConnect, ReduxActions, ReduxLifecycle, Mobx1, Mobx2, Mobx3,

  // webpack
  WpInstall, WpConfig, WpJs, WpCss, WpImg, WpFonts, WpMd, WpHtml, WpEslint, WpPlugins, WpEditor, WpStructure, WpSpa, WpMpa, WpCreateReactApp,

  // nextjs
  NextInstall, NextjsApi, NextjsPages, NextjsRouting, NextjsSeo, NextjsStyling, NextjsExpress,

  // nodejs
  NodeJsInstall, NodeJsPackageJson, NodeJsNpmYarn, NodeJsBrowserSync, NodeJsExpress,

  // other
  OtherJquery, OtherStimulus,
} from './routesImports';

// II. Add routes
const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/js" /> } />

      {/* index pages */}
      <Route path='/js'     exact component={() => <MdWrapper mdFile={Js} />} />
      <Route path='/react'  exact component={() => <MdWrapper mdFile={ReacT} />} />
      <Route path='/api'    exact component={() => <MdWrapper mdFile={Api} />} />
      <Route path='/state'  exact component={() => <MdWrapper mdFile={State} />} />
      <Route path='/wp'     exact component={() => <MdWrapper mdFile={Webpack} />} />
      <Route path='/nextjs' exact component={() => <MdWrapper mdFile={Nextjs} />} />
      <Route path='/nodejs' exact component={() => <MdWrapper mdFile={NodeJs} />} />
      <Route path='/other'  exact component={() => <MdWrapper mdFile={Other} />} />
      <Route path='/test'         component={Test} />

      {/* js pages */}
      <Route path='/js/script'    component={() => <MdWrapper mdFile={JsScript} />} />
      <Route path='/js/types'     component={() => <MdWrapper mdFile={JsTypes} />} />
      <Route path='/js/vars'      component={() => <MdWrapper mdFile={JsVars} />} />
      <Route path='/js/string'    component={() => <MdWrapper mdFile={JsString} />} />
      <Route path='/js/number'    component={() => <MdWrapper mdFile={JsNumber} />} />
      <Route path='/js/null'      component={() => <MdWrapper mdFile={JsNull} />} />
      <Route path='/js/boolean'   component={() => <MdWrapper mdFile={JsBoolean} />} />
      <Route path='/js/function'  component={() => <MdWrapper mdFile={JsFunction} />} />
      <Route path='/js/function2' component={() => <MdWrapper mdFile={JsFunction2} />} />
      <Route path='/js/array'     component={() => <MdWrapper mdFile={JsArray} />} />
      <Route path='/js/array2'    component={() => <MdWrapper mdFile={JsArray2} />} />
      <Route path='/js/object'    component={() => <MdWrapper mdFile={JsObject} />} />
      <Route path='/js/math'      component={() => <MdWrapper mdFile={JsMath} />} />
      <Route path='/js/logic'     component={() => <MdWrapper mdFile={JsLogic} />} />
      <Route path='/js/cycles'    component={() => <MdWrapper mdFile={JsCycles} />} />
      <Route path='/js/class'     component={() => <MdWrapper mdFile={JsClass} />} />
      <Route path='/js/dom'       component={() => <MdWrapper mdFile={JsDom} />} />
      <Route path='/js/forms'     component={() => <MdWrapper mdFile={JsForms} />} />
      <Route path='/js/export'    component={() => <MdWrapper mdFile={JsImport} />} />
      <Route path='/js/events'    component={() => <MdWrapper mdFile={JsEvents} />} />
      <Route path='/js/storage'   component={() => <MdWrapper mdFile={JsStorage} />} />

      {/* react-pages */}
      <Route path='/react/template'    component={() => <MdWrapper mdFile={ReactTemplate} />} />
      <Route path='/react/components'  component={() => <MdWrapper mdFile={ReactComponents} />} />
      <Route path='/react/props'       component={() => <MdWrapper mdFile={ReactProps} />} />
      <Route path='/react/proptypes'   component={() => <MdWrapper mdFile={ReactProptypes} />} />
      <Route path='/react/jsx'         component={() => <MdWrapper mdFile={ReactJSX} />} />
      <Route path='/react/images'      component={() => <MdWrapper mdFile={ReactImages} />} />
      <Route path='/react/state'       component={() => <MdWrapper mdFile={ReactState} />} />
      <Route path='/react/output-data' component={() => <MdWrapper mdFile={ReactOutputData} />} />
      <Route path='/react/maping-data' component={() => <MdWrapper mdFile={ReactMapingData} />} />
      <Route path='/react/events'      component={() => <MdWrapper mdFile={ReactEvents} />} />
      <Route path='/react/switcher'    component={() => <MdWrapper mdFile={ReactSwitcher} />} />
      <Route path='/react/forms'       component={() => <MdWrapper mdFile={ReactForms} />} />
      <Route path='/react/styling'     component={() => <MdWrapper mdFile={ReactStyling} />} />
      <Route path='/react/transitions' component={() => <MdWrapper mdFile={ReactTransition} />} />
      <Route path='/react/refs'        component={() => <MdWrapper mdFile={ReactRefs} />} />
      <Route path='/react/routing'     component={() => <MdWrapper mdFile={ReactRouting} />} />
      <Route path='/react/libs'        component={() => <MdWrapper mdFile={ReactLibs} />} />
      <Route path='/react/typescript'  component={() => <MdWrapper mdFile={ReactTypescript} />} />
      <Route path='/react/hooks'       component={() => <MdWrapper mdFile={ReactHooks} />} />
      <Route path='/react/gatsby-js'   component={() => <MdWrapper mdFile={ReactGatsby} />} />

      {/* api-pages */}
      <Route path='/api/request'           component={() => <MdWrapper mdFile={ApiRequest} />} />
      <Route path='/api/callback'           component={() => <MdWrapper mdFile={ApiCallback} />} />
      <Route path='/api/promise'            component={() => <MdWrapper mdFile={ApiPromise} />} />
      <Route path='/api/promise2'           component={() => <MdWrapper mdFile={ApiPromise2} />} />
      <Route path='/api/fetch'              component={() => <MdWrapper mdFile={ApiFetch} />} />
      <Route path='/api/server-api'         component={() => <MdWrapper mdFile={ApiServer} />} />
      <Route path='/api/fetch-data'         component={() => <MdWrapper mdFile={ApiFetchData} />} />


      {/* state-pages */}
      <Route path='/state/redux/provider-enhancer'  component={() => <MdWrapper mdFile={ReduxProviderEnhancer} />} />
      <Route path='/state/redux/root-reducer'       component={() => <MdWrapper mdFile={ReduxRootReducer} />} />
      <Route path='/state/redux/single-reducer'     component={() => <MdWrapper mdFile={ReduxSingleReducer} />} />
      <Route path='/state/redux/connect'            component={() => <MdWrapper mdFile={ReduxConnect} />} />
      <Route path='/state/redux/actions'            component={() => <MdWrapper mdFile={ReduxActions} />} />
      <Route path='/state/redux/lifecycle'          component={() => <MdWrapper mdFile={ReduxLifecycle} />} />
      <Route path='/state/mobx/mobx-1'              component={() => <MdWrapper mdFile={Mobx1} />} />
      <Route path='/state/mobx/mobx-2'              component={() => <MdWrapper mdFile={Mobx2} />} />
      <Route path='/state/mobx/mobx-3'              component={() => <MdWrapper mdFile={Mobx3} />} />

      {/* wp-pages */}
      <Route path='/wp/install'          component={() => <MdWrapper mdFile={WpInstall} />} />
      <Route path='/wp/config'           component={() => <MdWrapper mdFile={WpConfig} />} />
      <Route path='/wp/js'               component={() => <MdWrapper mdFile={WpJs} />} />
      <Route path='/wp/css'              component={() => <MdWrapper mdFile={WpCss} />} />
      <Route path='/wp/img'              component={() => <MdWrapper mdFile={WpImg} />} />
      <Route path='/wp/fonts'            component={() => <MdWrapper mdFile={WpFonts} />} />
      <Route path='/wp/md'               component={() => <MdWrapper mdFile={WpMd} />} />
      <Route path='/wp/html'             component={() => <MdWrapper mdFile={WpHtml} />} />
      <Route path='/wp/plugins'          component={() => <MdWrapper mdFile={WpPlugins} />} />
      <Route path='/wp/eslint'           component={() => <MdWrapper mdFile={WpEslint} />} />
      <Route path='/wp/editor'           component={() => <MdWrapper mdFile={WpEditor} />} />
      <Route path='/wp/structure'        component={() => <MdWrapper mdFile={WpStructure} />} />
      <Route path='/wp/spa'              component={() => <MdWrapper mdFile={WpSpa} />} />
      <Route path='/wp/mpa'              component={() => <MdWrapper mdFile={WpMpa} />} />
      <Route path='/wp/create-react-app' component={() => <MdWrapper mdFile={WpCreateReactApp} />} />

      {/* nodejs-pages */}
      <Route path='/nodejs/install'      component={() => <MdWrapper mdFile={NodeJsInstall} />} />
      <Route path='/nodejs/npm-yarn'     component={() => <MdWrapper mdFile={NodeJsNpmYarn} />} />
      <Route path='/nodejs/package-json' component={() => <MdWrapper mdFile={NodeJsPackageJson} />} />
      <Route path='/nodejs/browser-sync' component={() => <MdWrapper mdFile={NodeJsBrowserSync} />} />
      <Route path='/nodejs/express'      component={() => <MdWrapper mdFile={NodeJsExpress} />} />


      {/* nextjs-pages */}
      <Route path='/nextjs/install' component={() => <MdWrapper mdFile={NextInstall} />} />
      <Route path='/nextjs/api'     component={() => <MdWrapper mdFile={NextjsApi} />} />
      <Route path='/nextjs/pages'   component={() => <MdWrapper mdFile={NextjsPages} />} />
      <Route path='/nextjs/routing' component={() => <MdWrapper mdFile={NextjsRouting} />} />
      <Route path='/nextjs/seo'     component={() => <MdWrapper mdFile={NextjsSeo} />} />
      <Route path='/nextjs/styling' component={() => <MdWrapper mdFile={NextjsStyling} />} />
      <Route path='/nextjs/express' component={() => <MdWrapper mdFile={NextjsExpress} />} />

      {/* other-pages */}
      <Route path='/other/jquery'     component={() => <MdWrapper mdFile={OtherJquery} />} />
      <Route path='/other/stimulus'   component={() => <MdWrapper mdFile={OtherStimulus} />} />


      {/* 404 page */}
      <Route render={() => <h1 style={{ paddingTop: 24 }}>404 - Page not found</h1>} />
    </Switch>
  </main>
);

export default Routes;
