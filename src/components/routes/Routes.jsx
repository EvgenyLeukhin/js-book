import React from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const MdComp = ({ path }) => (
  <div dangerouslySetInnerHTML={{__html: path.__content }} />
);

// main pages //
const Home    = () => <MdComp path={ require('React/index.md') } />;
const JS      = () => <MdComp path={ require('JS/index.md') } />;
const Webpack = () => <MdComp path={ require('Webpack/index.md') }/>;
const NodeJs  = () => <MdComp path={ require('NodeJs/index.md') } />;

// react-pages
const ReactTemplate   = () => <MdComp path={ require('React/template.md') }/>;
const ReactComponents = () => <MdComp path={ require('React/components.md') }/>;
const ReactProps      = () => <MdComp path={ require('React/props.md') }/>;
const ReactProptypes  = () => <MdComp path={ require('React/proptypes.md') }/>;
const ReactJSX        = () => <MdComp path={ require('React/jsx.md') }/>;
const ReactState      = () => <MdComp path={ require('React/state.md') }/>;
const ReactOutputData = () => <MdComp path={ require('React/output-data.md') }/>;
const ReactEvents     = () => <MdComp path={ require('React/events.md') }/>;
const ReactSwitcher   = () => <MdComp path={ require('React/switcher.md') }/>;
const ReactForms      = () => <MdComp path={ require('React/forms.md') }/>;
const ReactStyling    = () => <MdComp path={ require('React/styling.md') }/>;
// const ReactTransitions= () => <MdComp path={ require('React/transitions.md') }/>;
const ReactRouting    = () => <MdComp path={ require('React/routing.md') }/>;
const ReactLifecycle  = () => <MdComp path={ require('React/lifecycle.md') }/>;
const ReactServer     = () => <MdComp path={ require('React/server.md') }/>;
const ReactRedux      = () => <MdComp path={ require('React/redux.md') }/>;




{ /*
<Route path='/react-lifecycle'  component={ReactProps} />
<Route path='/react-server'     component={ReactProps} />
<Route path='/react-redux'      component={ReactProps} /> */}

// js-pages

// webpack-pages //
const WpInstall   = () => <MdComp path={ require('Webpack/install.md') }/>;
const WpConfig    = () => <MdComp path={ require('Webpack/config.md') }/>;
const WpJs        = () => <MdComp path={ require('Webpack/js.md') }/>;
const WpCss       = () => <MdComp path={ require('Webpack/css.md') }/>;
const WpImg       = () => <MdComp path={ require('Webpack/img.md') }/>;
const WpFonts     = () => <MdComp path={ require('Webpack/fonts.md') }/>;
const WpMd        = () => <MdComp path={ require('Webpack/md.md') }/>;
const WpHtml      = () => <MdComp path={ require('Webpack/html.md') }/>;
const WpServer    = () => <MdComp path={ require('Webpack/server.md') }/>;
const WpEslint    = () => <MdComp path={ require('Webpack/eslint.md') }/>;
const WpPlugins   = () => <MdComp path={ require('Webpack/plugins.md') }/>;
const WpEditor    = () => <MdComp path={ require('Webpack/editor.md') }/>;
const WpStructure = () => <MdComp path={ require('Webpack/structure.md') }/>;

// nodejs-pages


const Routes = () => {
  return (
    <main className='markdown-body'>
      <Switch>
        {/* main pages */}
        <Route path='/' exact  component={Home} />
        <Route path='/js'      component={JS} />
        <Route path='/webpack' component={Webpack} />
        <Route path='/nodejs'  component={NodeJs} />

        {/* react-pages */}
        <Route path='/react-template'   component={ReactTemplate} />
        <Route path='/react-components' component={ReactComponents} />
        <Route path='/react-props'      component={ReactProps} />
        <Route path='/react-proptypes'  component={ReactProptypes} />
        <Route path='/react-jsx'        component={ReactJSX} />
        <Route path='/react-state'      component={ReactState} />
        <Route path='/react-output-data'component={ReactOutputData} />
        <Route path='/react-events'     component={ReactEvents} />
        <Route path='/react-switcher'   component={ReactSwitcher} />
        <Route path='/react-forms'      component={ReactForms} />
        <Route path='/react-styling'    component={ReactStyling} />
        <Route path='/react-transitions'component={ReactProps} />
        <Route path='/react-routing'    component={ReactRouting} />
        <Route path='/react-lifecycle'  component={ReactLifecycle} />
        <Route path='/react-server'     component={ReactServer} />
        <Route path='/react-redux'      component={ReactRedux} />


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
        <Route path='/wp-server'    component={WpServer} />
        <Route path='/wp-editor'    component={WpEditor} />
        <Route path='/wp-structure' component={WpStructure} />

      </Switch>
    </main>
  );
};

MdComp.propTypes = {
  path: T.object,
};

export default Routes;
