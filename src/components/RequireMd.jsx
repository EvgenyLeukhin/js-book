import React from 'react';
import MarkdownWrapper from './MarkdownWrapper';

// imdex
import JsIndex from 'JS/index.md';
import ReactIndex from 'React/index.md';
import WebpackIndex from 'Webpack/index.md';
import NodeJsIndex from 'NodeJs/index.md';
import ReduxIndex from 'Redux/index.md';

// js


// webpack


// react


// nodejs



// main
export const JS    = () => <MarkdownWrapper mdFile={JsIndex} />;
export const ReacT = () => <MarkdownWrapper mdFile={ReactIndex} />;
export const Webpack = () => <MarkdownWrapper mdFile={WebpackIndex} />;
export const NodeJs = () => <MarkdownWrapper mdFile={NodeJsIndex} />;
export const Redux = () => <MarkdownWrapper mdFile={ReduxIndex} />;


// js


// webpack


// react


// nodejs
