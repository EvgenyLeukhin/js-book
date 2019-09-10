import React from 'react';
import T from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language}>
    {value}
  </SyntaxHighlighter>
);

CodeBlock.propTypes = {
  value: T.string.isRequired,
  language: T.string
};

CodeBlock.defaultProps = { language: null };

export default CodeBlock;
