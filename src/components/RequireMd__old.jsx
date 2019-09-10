import React from 'react';
import T from 'prop-types';

const MdComp = ({ path }) => (
  <div dangerouslySetInnerHTML={{ __html: path.__content }} /> // need markdown-with-frontmatter loader
);

// main pages //
export const ReacT   = () => <MdComp path={require('React/index.md')} />;
export const JS      = () => <MdComp path={require('JS/index.md')} />;
export const Webpack = () => <MdComp path={require('Webpack/index.md')} />;
export const Redux   = () => <MdComp path={require('Redux/index.md')} />;
export const NodeJs  = () => <MdComp path={require('NodeJs/index.md')} />;

// js-pages //
export const JsScript    = () => <MdComp path={require('JS/script.md')} />;
export const JsTypes     = () => <MdComp path={require('JS/types.md')} />;
export const JsVars      = () => <MdComp path={require('JS/vars.md')} />;
export const JsString    = () => <MdComp path={require('JS/string.md')} />;
export const JsNumber    = () => <MdComp path={require('JS/number.md')} />;
export const JsNull      = () => <MdComp path={require('JS/null.md')} />;
export const JsBoolean   = () => <MdComp path={require('JS/boolean.md')} />;
export const JsFunction  = () => <MdComp path={require('JS/function.md')} />;
export const JsFunction2 = () => <MdComp path={require('JS/function2.md')} />;
export const JsArray     = () => <MdComp path={require('JS/array.md')} />;
export const JsObject    = () => <MdComp path={require('JS/object.md')} />;
export const JsMath      = () => <MdComp path={require('JS/math.md')} />;
export const JsLogic     = () => <MdComp path={require('JS/logic.md')} />;
export const JsCycles    = () => <MdComp path={require('JS/cycles.md')} />;
export const JsClass     = () => <MdComp path={require('JS/class.md')} />;
export const JsDom       = () => <MdComp path={require('JS/dom.md')} />;
export const JsForms     = () => <MdComp path={require('JS/forms.md')} />;

// react-pages
export const ReactTemplate   = () => <MdComp path={require('React/template.md')} />;
export const ReactComponents = () => <MdComp path={require('React/components.md')} />;
export const ReactProps      = () => <MdComp path={require('React/props.md')} />;
export const ReactProptypes  = () => <MdComp path={require('React/proptypes.md')} />;
export const ReactJSX        = () => <MdComp path={require('React/jsx.md')} />;
export const ReactImages     = () => <MdComp path={require('React/images.md')} />;
export const ReactState      = () => <MdComp path={require('React/state.md')} />;
export const ReactOutputData = () => <MdComp path={require('React/output-data.md')} />;
export const ReactMapingData = () => <MdComp path={require('React/maping-data.md')} />;
export const ReactEvents     = () => <MdComp path={require('React/events.md')} />;
export const ReactSwitcher   = () => <MdComp path={require('React/switcher.md')} />;
export const ReactForms      = () => <MdComp path={require('React/forms.md')} />;
export const ReactStyling    = () => <MdComp path={require('React/styling.md')} />;
export const ReactTransition = () => <MdComp path={require('React/transition.md')} />;
export const ReactRefs       = () => <MdComp path={require('React/refs.md')} />;
export const ReactRouting    = () => <MdComp path={require('React/routing.md')} />;
export const ReactLifecycle  = () => <MdComp path={require('React/lifecycle.md')} />;
export const ReactFetch      = () => <MdComp path={require('React/fetch.md')} />;
export const ReactServer     = () => <MdComp path={require('React/server.md')} />;
export const ReactRedux      = () => <MdComp path={require('React/redux.md')} />;
export const ReactPlugins    = () => <MdComp path={require('React/plugins.md')} />;
export const ReactGatsby     = () => <MdComp path={require('React/gatsby-js.md')} />;

// webpack-pages //
export const WpInstall   = () => <MdComp path={require('Webpack/install.md')} />;
export const WpConfig    = () => <MdComp path={require('Webpack/config.md')} />;
export const WpJs        = () => <MdComp path={require('Webpack/js.md')} />;
export const WpCss       = () => <MdComp path={require('Webpack/css.md')} />;
export const WpImg       = () => <MdComp path={require('Webpack/img.md')} />;
export const WpFonts     = () => <MdComp path={require('Webpack/fonts.md')} />;
export const WpMd        = () => <MdComp path={require('Webpack/md.md')} />;
export const WpHtml      = () => <MdComp path={require('Webpack/html.md')} />;
export const WpEslint    = () => <MdComp path={require('Webpack/eslint.md')} />;
export const WpPlugins   = () => <MdComp path={require('Webpack/plugins.md')} />;
export const WpEditor    = () => <MdComp path={require('Webpack/editor.md')} />;
export const WpStructure = () => <MdComp path={require('Webpack/structure.md')} />;

// redux-pages //

// nodejs-pages
export const NodeJsExpress = () => <MdComp path={require('NodeJs/express.md')} />;

MdComp.propTypes = { path: T.object };
