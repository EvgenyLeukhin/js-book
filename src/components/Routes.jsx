import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MdWrapper from './MarkdownWrapper';

// I. Import markdown files with content
// index //
import Js      from 'JS/index.md';
import ReacT   from 'React/index.md';
import Webpack from 'Webpack/index.md';
import NodeJs  from 'NodeJs/index.md';
import Redux   from 'Redux/index.md';

import Test    from './../content/Test';

// js //
import JsScript    from 'JS/script.md';
import JsTypes     from 'JS/types.md';
import JsVars      from 'JS/vars.md';
import JsString    from 'JS/string.md';
import JsNumber    from 'JS/number.md';
import JsNull      from 'JS/null.md';
import JsBoolean   from 'JS/boolean.md';
import JsFunction  from 'JS/function.md';
import JsFunction2 from 'JS/function2.md';
import JsArray     from 'JS/array.md';
import JsObject    from 'JS/object.md';
import JsObject2   from 'JS/object2.md';
import JsMath      from 'JS/math.md';
import JsLogic     from 'JS/logic.md';
import JsCycles    from 'JS/cycles.md';
import JsClass     from 'JS/class.md';
import JsClass2    from 'JS/class2.md';
import JsDom       from 'JS/dom.md';
import JsForms     from 'JS/forms.md';
import JsImport    from 'JS/import.md';
import JsServer    from 'JS/server.md';
import JsEvents    from 'JS/events.md';
import JsStorage   from 'JS/storage.md';
import JsMethods   from 'JS/methods.md';

// webpack //
import WpInstall   from 'Webpack/install.md';
import WpConfig    from 'Webpack/config.md';
import WpJs        from 'Webpack/js.md';
import WpCss       from 'Webpack/css.md';
import WpImg       from 'Webpack/img.md';
import WpFonts     from 'Webpack/fonts.md';
import WpMd        from 'Webpack/md.md';
import WpHtml      from 'Webpack/html.md';
import WpEslint    from 'Webpack/eslint.md';
import WpPlugins   from 'Webpack/plugins.md';
import WpEditor    from 'Webpack/editor.md';
import WpStructure from 'Webpack/structure.md';

// react //
import ReactTemplate   from 'React/template.md';
import ReactComponents from 'React/components.md';
import ReactProps      from 'React/props.md';
import ReactProptypes  from 'React/proptypes.md';
import ReactJSX        from 'React/jsx.md';
import ReactImages     from 'React/images.md';
import ReactState      from 'React/state.md';
import ReactOutputData from 'React/output-data.md';
import ReactMapingData from 'React/maping-data.md';
import ReactEvents     from 'React/events.md';
import ReactSwitcher   from 'React/switcher.md';
import ReactForms      from 'React/forms.md';
import ReactStyling    from 'React/styling.md';
import ReactTransition from 'React/transition.md';
import ReactRefs       from 'React/refs.md';
import ReactRouting    from 'React/routing.md';
import ReactLifecycle  from 'React/lifecycle.md';
import ReactFetch      from 'React/fetch.md';
import ReactServer     from 'React/server.md';
import ReactRedux      from 'React/redux.md';
import ReactPlugins    from 'React/plugins.md';
import ReactGatsby     from 'React/gatsby-js.md';

// redux //
import ReduxInstall  from 'Redux/install.md';
import ReduxProvider from 'Redux/provider.md';
import ReduxEnhancer from 'Redux/enhancer.md';
import ReduxReducer  from 'Redux/root-reducer.md';
import ReduxActions  from 'Redux/actions.md';
import ReduxTypes    from 'Redux/types.md';

// nodejs //
import NodeJsInstall     from 'NodeJs/install.md';
import NodeJsPackageJson from 'NodeJs/package-json.md';
import NodeJsNpmYarn     from 'NodeJs/npm-yarn.md';
import NodeJsBrowserSync from 'NodeJs/browser-sync.md';
import NodeJsExpress     from 'NodeJs/express.md';


// II. Add routes
const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/js" /> } />

      {/* main pages */}
      <Route path='/js'     exact component={() => <MdWrapper mdFile={Js} />} />
      <Route path='/wp'     exact component={() => <MdWrapper mdFile={Webpack} />} />
      <Route path='/react'  exact component={() => <MdWrapper mdFile={ReacT} />} />
      <Route path='/redux'  exact component={() => <MdWrapper mdFile={Redux} />} />
      <Route path='/nodejs' exact component={() => <MdWrapper mdFile={NodeJs} />} />
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
      <Route path='/js/object'    component={() => <MdWrapper mdFile={JsObject} />} />
      <Route path='/js/object2'   component={() => <MdWrapper mdFile={JsObject2} />} />
      <Route path='/js/math'      component={() => <MdWrapper mdFile={JsMath} />} />
      <Route path='/js/logic'     component={() => <MdWrapper mdFile={JsLogic} />} />
      <Route path='/js/cycles'    component={() => <MdWrapper mdFile={JsCycles} />} />
      <Route path='/js/class'     component={() => <MdWrapper mdFile={JsClass} />} />
      <Route path='/js/class2'    component={() => <MdWrapper mdFile={JsClass2} />} />
      <Route path='/js/dom'       component={() => <MdWrapper mdFile={JsDom} />} />
      <Route path='/js/forms'     component={() => <MdWrapper mdFile={JsForms} />} />
      <Route path='/js/export'    component={() => <MdWrapper mdFile={JsImport} />} />
      <Route path='/js/server'    component={() => <MdWrapper mdFile={JsServer} />} />
      <Route path='/js/events'    component={() => <MdWrapper mdFile={JsEvents} />} />
      <Route path='/js/storage'   component={() => <MdWrapper mdFile={JsStorage} />} />
      <Route path='/js/methods'   component={() => <MdWrapper mdFile={JsMethods} />} />

      {/* wp-pages */}
      <Route path='/wp/install'   component={() => <MdWrapper mdFile={WpInstall} />} />
      <Route path='/wp/config'    component={() => <MdWrapper mdFile={WpConfig} />} />
      <Route path='/wp/js'        component={() => <MdWrapper mdFile={WpJs} />} />
      <Route path='/wp/css'       component={() => <MdWrapper mdFile={WpCss} />} />
      <Route path='/wp/img'       component={() => <MdWrapper mdFile={WpImg} />} />
      <Route path='/wp/fonts'     component={() => <MdWrapper mdFile={WpFonts} />} />
      <Route path='/wp/md'        component={() => <MdWrapper mdFile={WpMd} />} />
      <Route path='/wp/html'      component={() => <MdWrapper mdFile={WpHtml} />} />
      <Route path='/wp/plugins'   component={() => <MdWrapper mdFile={WpPlugins} />} />
      <Route path='/wp/eslint'    component={() => <MdWrapper mdFile={WpEslint} />} />
      <Route path='/wp/editor'    component={() => <MdWrapper mdFile={WpEditor} />} />
      <Route path='/wp/structure' component={() => <MdWrapper mdFile={WpStructure} />} />

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
      <Route path='/react/lifecycle'   component={() => <MdWrapper mdFile={ReactLifecycle} />} />
      <Route path='/react/fetch'       component={() => <MdWrapper mdFile={ReactFetch} />} />
      <Route path='/react/server'      component={() => <MdWrapper mdFile={ReactServer} />} />
      <Route path='/react/redux'       component={() => <MdWrapper mdFile={ReactRedux} />} />
      <Route path='/react/plugins'     component={() => <MdWrapper mdFile={ReactPlugins} />} />
      <Route path='/react/gatsby-js'   component={() => <MdWrapper mdFile={ReactGatsby} />} />

      {/* redux-pages */}
      <Route path='/redux/install'  component={() => <MdWrapper mdFile={ReduxInstall} />} />
      <Route path='/redux/provider' component={() => <MdWrapper mdFile={ReduxProvider} />} />
      <Route path='/redux/enhancer' component={() => <MdWrapper mdFile={ReduxEnhancer} />} />
      <Route path='/redux/reducer'  component={() => <MdWrapper mdFile={ReduxReducer} />} />
      <Route path='/redux/actions'  component={() => <MdWrapper mdFile={ReduxActions} />} />
      <Route path='/redux/types'    component={() => <MdWrapper mdFile={ReduxTypes} />} />

      {/* nodejs-pages */}
      <Route path='/nodejs/install'      component={() => <MdWrapper mdFile={NodeJsInstall} />} />
      <Route path='/nodejs/npm-yarn'     component={() => <MdWrapper mdFile={NodeJsNpmYarn} />} />
      <Route path='/nodejs/package-json' component={() => <MdWrapper mdFile={NodeJsPackageJson} />} />
      <Route path='/nodejs/browser-sync' component={() => <MdWrapper mdFile={NodeJsBrowserSync} />} />
      <Route path='/nodejs/express'      component={() => <MdWrapper mdFile={NodeJsExpress} />} />

      {/* 404 page */}
      <Route render={() => <h1 style={{ paddingTop: 24 }}>404 - Page not found</h1>} />
    </Switch>
  </main>
);

export default Routes;
