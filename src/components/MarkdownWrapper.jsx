import React from 'react';
import T from 'prop-types';

import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language}>
    {value}
  </SyntaxHighlighter>
);

const MarkdownWrapper = ({ mdFile }) => (
  <ReactMarkdown source={mdFile} renderers={{ code: CodeBlock }} />
);

CodeBlock.propTypes = {
  value: T.string.isRequired,
  language: T.string
};

CodeBlock.defaultProps = { language: null };

MarkdownWrapper.propTypes = {
  mdFile: T.string.isRequired
};

export default MarkdownWrapper;
