import React from 'react';
import { Switch, Route } from 'react-router-dom';

const MdComp = props => (
  <div dangerouslySetInnerHTML={{__html: props.mdPath.__content }} />
);

// main pages //
const Home    = () => <MdComp mdPath={ require('React/index.md') } />;
const JS      = () => <MdComp mdPath={ require('JS/index.md') } />;
const Webpack = () => <MdComp mdPath={ require('Webpack/index.md') }/>;
const NodeJs  = () => <MdComp mdPath={ require('NodeJs/index.md') } />;

// react-pages

// js-pages

// webpack-pages //
const WpInstall = () => <MdComp mdPath={ require('Webpack/install.md') }/>;
const WpConfig  = () => <MdComp mdPath={ require('Webpack/config.md') }/>;
const WpJs      = () => <MdComp mdPath={ require('Webpack/js.md') }/>;
const WpCss     = () => <MdComp mdPath={ require('Webpack/css.md') }/>;
const WpImg     = () => <MdComp mdPath={ require('Webpack/img.md') }/>;
const WpFonts   = () => <MdComp mdPath={ require('Webpack/fonts.md') }/>;
const WpMd      = () => <MdComp mdPath={ require('Webpack/md.md') }/>;
const WpHtml    = () => <MdComp mdPath={ require('Webpack/html.md') }/>;
const WpServer  = () => <MdComp mdPath={ require('Webpack/server.md') }/>;
const WpEslint  = () => <MdComp mdPath={ require('Webpack/eslint.md') }/>;
const WpPlugins = () => <MdComp mdPath={ require('Webpack/plugins.md') }/>;

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


        {/* wp-pages */}
        <Route path='/wp-install' component={WpInstall} />
        <Route path='/wp-config'  component={WpConfig} />
        <Route path='/wp-js'      component={WpJs} />
        <Route path='/wp-css'     component={WpCss} />
        <Route path='/wp-img'     component={WpImg} />
        <Route path='/wp-fonts'   component={WpFonts} />
        <Route path='/wp-md'      component={WpMd} />
        <Route path='/wp-html'    component={WpHtml} />
        <Route path='/wp-plugins' component={WpPlugins} />
        <Route path='/wp-eslint'  component={WpEslint} />
        <Route path='/wp-server'  component={WpServer} />

      </Switch>
    </main>
  );
};

export default Routes;
