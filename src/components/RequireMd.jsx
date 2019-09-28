import React from 'react';
import MarkdownWrapper from './MarkdownWrapper';

// imdex
import JsIndex from 'JS/index.md';
import ReactIndex from 'React/index.md';
import WebpackIndex from 'Webpack/index.md';
import NodeJsIndex from 'NodeJs/index.md';
import ReduxIndex from 'Redux/index.md';

// js
import JsScriptPage from 'JS/script.md';
import JsTypesPage from 'JS/types.md';
import JsVarsPage from 'JS/vars.md';
import JsStringPage from 'JS/string.md';
import JsNumberPage from 'JS/number.md';
import JsNullPage from 'JS/null.md';
import JsBooleanPage from 'JS/boolean.md';
import JsFunctionPage from 'JS/function.md';
import JsFunction2Page from 'JS/function2.md';
import JsArrayPage from 'JS/array.md';
import JsObjectPage from 'JS/object.md';
import JsObjectPage2 from 'JS/object2.md';
import JsMathPage from 'JS/math.md';
import JsLogicPage from 'JS/logic.md';
import JsCyclesPage from 'JS/cycles.md';
import JsClassPage from 'JS/class.md';
import JsClassPage2 from 'JS/class2.md';
import JsDomPage from 'JS/dom.md';
import JsFormsPage from 'JS/forms.md';
import JsImportPage from 'JS/import.md';
import JsServerPage from 'JS/server.md';
import JsEventsPage from 'JS/events.md';
import JsStoragePage from 'JS/storage.md';
import JsMethodsPage from 'JS/methods.md';


// webpack
import WpInstallPage from 'Webpack/install.md';
import WpConfigPage from 'Webpack/config.md';
import WpJsPage from 'Webpack/js.md';
import WpCssPage from 'Webpack/css.md';
import WpImgPage from 'Webpack/img.md';
import WpFontsPage from 'Webpack/fonts.md';
import WpMdPage from 'Webpack/md.md';
import WpHtmlPage from 'Webpack/html.md';
import WpEslintPage from 'Webpack/eslint.md';
import WpPluginsPage from 'Webpack/plugins.md';
import WpEditorPage from 'Webpack/editor.md';
import WpStructurePage from 'Webpack/structure.md';

// react
import ReactTemplatePage from 'React/template.md';
import ReactComponentsPage from 'React/components.md';
import ReactPropsPage from 'React/props.md';
import ReactProptypesPage from 'React/proptypes.md';
import ReactJSXPage from 'React/jsx.md';
import ReactImagesPage from 'React/images.md';
import ReactStatePage from 'React/state.md';
import ReactOutputDataPage from 'React/output-data.md';
import ReactMapingDataPage from 'React/maping-data.md';
import ReactEventsPage from 'React/events.md';
import ReactSwitcherPage from 'React/switcher.md';
import ReactFormsPage from 'React/forms.md';
import ReactStylingPage from 'React/styling.md';
import ReactTransitionPage from 'React/transition.md';
import ReactRefsPage from 'React/refs.md';
import ReactRoutingPage from 'React/routing.md';
import ReactLifecyclePage from 'React/lifecycle.md';
import ReactFetchPage from 'React/fetch.md';
import ReactServerPage from 'React/server.md';
import ReactReduxPage from 'React/redux.md';
import ReactPluginsPage from 'React/plugins.md';
import ReactGatsbyPage from 'React/gatsby-js.md';

// nodejs
import NodeJsPage from 'NodeJs/express.md';


// main
export const JS      = () => <MarkdownWrapper mdFile={JsIndex} />;
export const Webpack = () => <MarkdownWrapper mdFile={WebpackIndex} />;
export const ReacT   = () => <MarkdownWrapper mdFile={ReactIndex} />;
export const Redux   = () => <MarkdownWrapper mdFile={ReduxIndex} />;
export const NodeJs  = () => <MarkdownWrapper mdFile={NodeJsIndex} />;


// js
export const JsScript    = () => <MarkdownWrapper mdFile={JsScriptPage} />;
export const JsTypes     = () => <MarkdownWrapper mdFile={JsTypesPage} />;
export const JsVars      = () => <MarkdownWrapper mdFile={JsVarsPage} />;
export const JsString    = () => <MarkdownWrapper mdFile={JsStringPage} />;
export const JsNumber    = () => <MarkdownWrapper mdFile={JsNumberPage} />;
export const JsNull      = () => <MarkdownWrapper mdFile={JsNullPage} />;
export const JsBoolean   = () => <MarkdownWrapper mdFile={JsBooleanPage} />;
export const JsFunction  = () => <MarkdownWrapper mdFile={JsFunctionPage} />;
export const JsFunction2 = () => <MarkdownWrapper mdFile={JsFunction2Page} />;
export const JsArray     = () => <MarkdownWrapper mdFile={JsArrayPage} />;
export const JsObject    = () => <MarkdownWrapper mdFile={JsObjectPage} />;
export const JsObject2   = () => <MarkdownWrapper mdFile={JsObjectPage2} />;
export const JsMath      = () => <MarkdownWrapper mdFile={JsMathPage} />;
export const JsLogic     = () => <MarkdownWrapper mdFile={JsLogicPage} />;
export const JsCycles    = () => <MarkdownWrapper mdFile={JsCyclesPage} />;
export const JsClass     = () => <MarkdownWrapper mdFile={JsClassPage} />;
export const JsClass2    = () => <MarkdownWrapper mdFile={JsClassPage2} />;
export const JsDom       = () => <MarkdownWrapper mdFile={JsDomPage} />;
export const JsForms     = () => <MarkdownWrapper mdFile={JsFormsPage} />;
export const JsImport    = () => <MarkdownWrapper mdFile={JsImportPage} />;
export const JsServer    = () => <MarkdownWrapper mdFile={JsServerPage} />;
export const JsEvents    = () => <MarkdownWrapper mdFile={JsEventsPage} />;
export const JsStorage   = () => <MarkdownWrapper mdFile={JsStoragePage} />;
export const JsMethods   = () => <MarkdownWrapper mdFile={JsMethodsPage} />;


// webpack
export const WpInstall   = () => <MarkdownWrapper mdFile={WpInstallPage} />;
export const WpConfig    = () => <MarkdownWrapper mdFile={WpConfigPage} />;
export const WpJs        = () => <MarkdownWrapper mdFile={WpJsPage} />;
export const WpCss       = () => <MarkdownWrapper mdFile={WpCssPage} />;
export const WpImg       = () => <MarkdownWrapper mdFile={WpImgPage} />;
export const WpFonts     = () => <MarkdownWrapper mdFile={WpFontsPage} />;
export const WpMd        = () => <MarkdownWrapper mdFile={WpMdPage} />;
export const WpHtml      = () => <MarkdownWrapper mdFile={WpHtmlPage} />;
export const WpEslint    = () => <MarkdownWrapper mdFile={WpEslintPage} />;
export const WpPlugins   = () => <MarkdownWrapper mdFile={WpPluginsPage} />;
export const WpEditor    = () => <MarkdownWrapper mdFile={WpEditorPage} />;
export const WpStructure = () => <MarkdownWrapper mdFile={WpStructurePage} />;


// react
export const ReactTemplate   = () => <MarkdownWrapper mdFile={ReactTemplatePage} />;
export const ReactComponents = () => <MarkdownWrapper mdFile={ReactComponentsPage} />;
export const ReactProps      = () => <MarkdownWrapper mdFile={ReactPropsPage} />;
export const ReactProptypes  = () => <MarkdownWrapper mdFile={ReactProptypesPage} />;
export const ReactJSX        = () => <MarkdownWrapper mdFile={ReactJSXPage} />;
export const ReactImages     = () => <MarkdownWrapper mdFile={ReactImagesPage} />;
export const ReactState      = () => <MarkdownWrapper mdFile={ReactStatePage} />;
export const ReactOutputData = () => <MarkdownWrapper mdFile={ReactOutputDataPage} />;
export const ReactMapingData = () => <MarkdownWrapper mdFile={ReactMapingDataPage} />;
export const ReactEvents     = () => <MarkdownWrapper mdFile={ReactEventsPage} />;
export const ReactSwitcher   = () => <MarkdownWrapper mdFile={ReactSwitcherPage} />;
export const ReactForms      = () => <MarkdownWrapper mdFile={ReactFormsPage} />;
export const ReactStyling    = () => <MarkdownWrapper mdFile={ReactStylingPage} />;
export const ReactTransition = () => <MarkdownWrapper mdFile={ReactTransitionPage} />;
export const ReactRefs       = () => <MarkdownWrapper mdFile={ReactRefsPage} />;
export const ReactRouting    = () => <MarkdownWrapper mdFile={ReactRoutingPage} />;
export const ReactLifecycle  = () => <MarkdownWrapper mdFile={ReactLifecyclePage} />;
export const ReactFetch      = () => <MarkdownWrapper mdFile={ReactFetchPage} />;
export const ReactServer     = () => <MarkdownWrapper mdFile={ReactServerPage} />;
export const ReactRedux      = () => <MarkdownWrapper mdFile={ReactReduxPage} />;
export const ReactPlugins    = () => <MarkdownWrapper mdFile={ReactPluginsPage} />;
export const ReactGatsby     = () => <MarkdownWrapper mdFile={ReactGatsbyPage} />;


// nodejs
export const NodeJsExpress = () => <MarkdownWrapper mdFile={NodeJsPage} />;
