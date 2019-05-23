import React from 'react';
import T from 'prop-types';

import Routes from './Routes';

const MdComp = ({ path }) => (
  <div dangerouslySetInnerHTML={{ __html: path.__content }} />
);

// main pages //
export const ReacT   = () => <MdComp path={ require('React/index.md') } />;
export const JS      = () => <MdComp path={ require('JS/index.md') } />;
export const Webpack = () => <MdComp path={ require('Webpack/index.md') }/>;
export const NodeJs  = () => <MdComp path={ require('NodeJs/index.md') } />;

// react-pages
export const ReactTemplate   = () => <MdComp path={ require('React/template.md') }/>;
export const ReactComponents = () => <MdComp path={ require('React/components.md') }/>;
export const ReactProps      = () => <MdComp path={ require('React/props.md') }/>;
export const ReactProptypes  = () => <MdComp path={ require('React/proptypes.md') }/>;
export const ReactJSX        = () => <MdComp path={ require('React/jsx.md') }/>;
export const ReactImages     = () => <MdComp path={ require('React/images.md') }/>;
export const ReactState      = () => <MdComp path={ require('React/state.md') }/>;
export const ReactOutputData = () => <MdComp path={ require('React/output-data.md') }/>;
export const ReactMapingData = () => <MdComp path={ require('React/maping-data.md') }/>;
export const ReactEvents     = () => <MdComp path={ require('React/events.md') }/>;
export const ReactSwitcher   = () => <MdComp path={ require('React/switcher.md') }/>;
export const ReactForms      = () => <MdComp path={ require('React/forms.md') }/>;
export const ReactStyling    = () => <MdComp path={ require('React/styling.md') }/>;
// const ReactTransitions= () => <MdComp path={ require('React/transitions.md') }/>;
export const ReactRouting    = () => <MdComp path={ require('React/routing.md') }/>;
export const ReactLifecycle  = () => <MdComp path={ require('React/lifecycle.md') }/>;
export const ReactServer     = () => <MdComp path={ require('React/server.md') }/>;
export const ReactRedux      = () => <MdComp path={ require('React/redux.md') }/>;

// webpack-pages //
export const WpInstall   = () => <MdComp path={ require('Webpack/install.md') }/>;
export const WpConfig    = () => <MdComp path={ require('Webpack/config.md') }/>;
export const WpJs        = () => <MdComp path={ require('Webpack/js.md') }/>;
export const WpCss       = () => <MdComp path={ require('Webpack/css.md') }/>;
export const WpImg       = () => <MdComp path={ require('Webpack/img.md') }/>;
export const WpFonts     = () => <MdComp path={ require('Webpack/fonts.md') }/>;
export const WpMd        = () => <MdComp path={ require('Webpack/md.md') }/>;
export const WpHtml      = () => <MdComp path={ require('Webpack/html.md') }/>;
export const WpEslint    = () => <MdComp path={ require('Webpack/eslint.md') }/>;
export const WpPlugins   = () => <MdComp path={ require('Webpack/plugins.md') }/>;
export const WpEditor    = () => <MdComp path={ require('Webpack/editor.md') }/>;
export const WpStructure = () => <MdComp path={ require('Webpack/structure.md') }/>;

// nodejs-pages
export const NodeJsExpress = () => <MdComp path={ require('NodeJs/express.md') }/>;

// js-pages //

MdComp.propTypes = { path: T.object };

export default Routes;
