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
import Vue     from 'Vue/index.md';
import Mobx    from 'Mobx/index.md';
import Nextjs  from 'Nextjs/index.md';
import Other   from 'Other/index.md';

import Test    from './../test';

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
import JsArray2    from 'JS/array2.md';
import JsObject    from 'JS/object.md';
import JsMath      from 'JS/math.md';
import JsLogic     from 'JS/logic.md';
import JsCycles    from 'JS/cycles.md';
import JsClass     from 'JS/class.md';
import JsDom       from 'JS/dom.md';
import JsForms     from 'JS/forms.md';
import JsImport    from 'JS/import.md';
import JsCallback  from 'JS/callback.md';
import JsPromise   from 'JS/promise.md';
import JsPromise2  from 'JS/promise2.md';
import JsFetch     from 'JS/fetch.md';
import JsEvents    from 'JS/events.md';
import JsStorage   from 'JS/storage.md';

// webpack //
import WpInstall        from 'Webpack/install.md';
import WpConfig         from 'Webpack/config.md';
import WpJs             from 'Webpack/js.md';
import WpCss            from 'Webpack/css.md';
import WpImg            from 'Webpack/img.md';
import WpFonts          from 'Webpack/fonts.md';
import WpMd             from 'Webpack/md.md';
import WpHtml           from 'Webpack/html.md';
import WpEslint         from 'Webpack/eslint.md';
import WpPlugins        from 'Webpack/plugins.md';
import WpEditor         from 'Webpack/editor.md';
import WpStructure      from 'Webpack/structure.md';
import WpSpa            from 'Webpack/spa.md';
import WpMpa            from 'Webpack/mpa.md';
import WpCreateReactApp from 'Webpack/create-react-app.md';

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
import ReactLibs       from 'React/libs.md';
import ReactTypescript from 'React/typescript.md';
import ReactHooks      from 'React/hooks.md';
import ReactGatsby     from 'React/gatsby-js.md';

// redux //
import ReduxProviderEnhancer from 'Redux/provider-enhancer.md';
import ReduxRootReducer      from 'Redux/root-reducer.md';
import ReduxSingleReducer    from 'Redux/single-reducer.md';
import ReduxConnect          from 'Redux/connect.md';
import ReduxActions          from 'Redux/actions.md';
import ReduxServerApi        from 'Redux/server.md';
import ReduxFetchData        from 'Redux/fetch-data.md';
import ReduxLifecycle        from 'Redux/lifecycle.md';

// nodejs //
import NodeJsInstall     from 'NodeJs/install.md';
import NodeJsPackageJson from 'NodeJs/package-json.md';
import NodeJsNpmYarn     from 'NodeJs/npm-yarn.md';
import NodeJsBrowserSync from 'NodeJs/browser-sync.md';
import NodeJsExpress     from 'NodeJs/express.md';

// nextjs //
import Nextjs1     from 'Nextjs/nextjs-1.md';
import Nextjs2     from 'Nextjs/nextjs-2.md';
import Nextjs3     from 'Nextjs/nextjs-3.md';

// nextjs //
import Mobx1     from 'Mobx/mobx-1.md';
import Mobx2     from 'Mobx/mobx-2.md';
import Mobx3     from 'Mobx/mobx-3.md';

// mobx //

// other //
import OtherJquery   from 'Other/jquery.md';
import OtherStimulus from 'Other/stimulus.md';

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
      <Route path='/vue'    exact component={() => <MdWrapper mdFile={Vue} />} />
      <Route path='/other'  exact component={() => <MdWrapper mdFile={Other} />} />
      <Route path='/nextjs' exact component={() => <MdWrapper mdFile={Nextjs} />} />
      <Route path='/mobx'   exact component={() => <MdWrapper mdFile={Mobx} />} />
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
      <Route path='/js/callback'  component={() => <MdWrapper mdFile={JsCallback} />} />
      <Route path='/js/promise'   component={() => <MdWrapper mdFile={JsPromise} />} />
      <Route path='/js/promise2'  component={() => <MdWrapper mdFile={JsPromise2} />} />
      <Route path='/js/fetch'     component={() => <MdWrapper mdFile={JsFetch} />} />
      <Route path='/js/events'    component={() => <MdWrapper mdFile={JsEvents} />} />
      <Route path='/js/storage'   component={() => <MdWrapper mdFile={JsStorage} />} />

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

      {/* redux-pages */}
      <Route path='/redux/provider-enhancer' component={() => <MdWrapper mdFile={ReduxProviderEnhancer} />} />
      <Route path='/redux/root-reducer'      component={() => <MdWrapper mdFile={ReduxRootReducer} />} />
      <Route path='/redux/single-reducer'    component={() => <MdWrapper mdFile={ReduxSingleReducer} />} />
      <Route path='/redux/connect'           component={() => <MdWrapper mdFile={ReduxConnect} />} />
      <Route path='/redux/actions'           component={() => <MdWrapper mdFile={ReduxActions} />} />
      <Route path='/redux/server-api'        component={() => <MdWrapper mdFile={ReduxServerApi} />} />
      <Route path='/redux/fetch-data'        component={() => <MdWrapper mdFile={ReduxFetchData} />} />
      <Route path='/redux/lifecycle'         component={() => <MdWrapper mdFile={ReduxLifecycle} />} />

      {/* nodejs-pages */}
      <Route path='/nodejs/install'      component={() => <MdWrapper mdFile={NodeJsInstall} />} />
      <Route path='/nodejs/npm-yarn'     component={() => <MdWrapper mdFile={NodeJsNpmYarn} />} />
      <Route path='/nodejs/package-json' component={() => <MdWrapper mdFile={NodeJsPackageJson} />} />
      <Route path='/nodejs/browser-sync' component={() => <MdWrapper mdFile={NodeJsBrowserSync} />} />
      <Route path='/nodejs/express'      component={() => <MdWrapper mdFile={NodeJsExpress} />} />

      {/* nextjs-pages */}
      <Route path='/nextjs/nextjs-1'     component={() => <MdWrapper mdFile={Nextjs1} />} />
      <Route path='/nextjs/nextjs-2'     component={() => <MdWrapper mdFile={Nextjs2} />} />
      <Route path='/nextjs/nextjs-3'     component={() => <MdWrapper mdFile={Nextjs3} />} />

      {/* mobx-pages */}
      <Route path='/mobx/mobx-1'     component={() => <MdWrapper mdFile={Mobx1} />} />
      <Route path='/mobx/mobx-2'     component={() => <MdWrapper mdFile={Mobx2} />} />
      <Route path='/mobx/mobx-3'     component={() => <MdWrapper mdFile={Mobx3} />} />

      {/* other-pages */}
      <Route path='/other/jquery'     component={() => <MdWrapper mdFile={OtherJquery} />} />
      <Route path='/other/stimulus'   component={() => <MdWrapper mdFile={OtherStimulus} />} />


      {/* 404 page */}
      <Route render={() => <h1 style={{ paddingTop: 24 }}>404 - Page not found</h1>} />
    </Switch>
  </main>
);

export default Routes;
