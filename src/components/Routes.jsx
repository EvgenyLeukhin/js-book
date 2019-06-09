import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  // main pages
  ReacT, JS, Webpack, NodeJs,

  // webpack-pages
  WpInstall, WpConfig, WpJs, WpCss, WpHtml, WpImg, WpFonts, WpMd, WpPlugins, WpEslint, WpEditor, WpStructure,

  // nodejs-pages
  NodeJsExpress,

  // react-pages
  ReactTemplate, ReactComponents, ReactProps, ReactProptypes, ReactJSX, ReactImages, ReactState, ReactOutputData, ReactMapingData, ReactEvents, ReactSwitcher, ReactForms, ReactStyling, ReactTransition, ReactRefs, ReactRouting, ReactLifecycle, ReactFetch, ReactServer, ReactRedux,

} from './RequireMd';

import Test from 'Components/Test';

const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      {/* main pages */}
      <Route path='/' exact  component={ReacT} />
      <Route path='/js'      component={JS} />
      <Route path='/webpack' component={Webpack} />
      <Route path='/nodejs'  component={NodeJs} />

      {/* react-pages */}
      <Route path='/react-template'    component={ReactTemplate} />
      <Route path='/react-components'  component={ReactComponents} />
      <Route path='/react-props'       component={ReactProps} />
      <Route path='/react-proptypes'   component={ReactProptypes} />
      <Route path='/react-jsx'         component={ReactJSX} />
      <Route path='/react-images'      component={ReactImages} />
      <Route path='/react-state'       component={ReactState} />
      <Route path='/react-output-data' component={ReactOutputData} />
      <Route path='/react-maping-data' component={ReactMapingData} />
      <Route path='/react-events'      component={ReactEvents} />
      <Route path='/react-switcher'    component={ReactSwitcher} />
      <Route path='/react-forms'       component={ReactForms} />
      <Route path='/react-styling'     component={ReactStyling} />
      <Route path='/react-transitions' component={ReactTransition} />
      <Route path='/react-refs'        component={ReactRefs} />
      <Route path='/react-routing'     component={ReactRouting} />
      <Route path='/react-lifecycle'   component={ReactLifecycle} />
      <Route path='/react-fetch'       component={ReactFetch} />
      <Route path='/react-server'      component={ReactServer} />
      <Route path='/react-redux'       component={ReactRedux} />

      {/* wp-pages */}
      <Route path='/wp-install'   component={WpInstall} />
      <Route path='/wp-config'    component={WpConfig} />
      <Route path='/wp-js'        component={WpJs} />
      <Route path='/wp-css'       component={WpCss} />
      <Route path='/wp-img'       component={WpImg} />
      <Route path='/wp-fonts'     component={WpFonts} />
      <Route path='/wp-md'        component={WpMd} />
      <Route path='/wp-html'      component={WpHtml} />
      <Route path='/wp-plugins'   component={WpPlugins} />
      <Route path='/wp-eslint'    component={WpEslint} />
      <Route path='/wp-editor'    component={WpEditor} />
      <Route path='/wp-structure' component={WpStructure} />

      {/* nodejs-pages */}
      <Route path='/nodejs-express' component={NodeJsExpress} />

      <Route path='/test' component={Test} />

      {/* 404 page */}
      <Route render={() => <h1 style={{ paddingTop: 24 }}>404 - Page not found</h1>} />

    </Switch>
  </main>
);

export default Routes;
