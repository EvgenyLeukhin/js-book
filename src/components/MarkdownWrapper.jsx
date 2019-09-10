import React from 'react';
import T from 'prop-types';

import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const MarkdownWrapper = ({ mdFile }) => (
  <ReactMarkdown source={mdFile} renderers={{ code: CodeBlock }} />
);

MarkdownWrapper.propTypes = {
  mdFile: T.string.isRequired
};


export default MarkdownWrapper;
