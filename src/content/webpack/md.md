# Markdown

## raw-loader

```raw
npm i --save-dev raw-loader
```

### Config

```js
...
  {
    test: /\.md$/,
    use: 'raw-loader'
  },
...
```

### CodeBlock.jsx

```js
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
```

### MarkdownWrapper.jsx

```js
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
```

### RequireMd.jsx

```js
import JsIndex from 'JS/index.md';

export const JS = () => <MarkdownWrapper mdFile={JsIndex} />;
```

### Add route

```js
import { JS } from './RequireMd';
...
<Route path='/js' exact component={JS} />
```

---

## markdown-with-front-matter-loader

```raw
  npn i --save-dev
  markdown-with-front-matter-loader
```

### Config (wp)

```js
...
  {
    test: /\.md$/,
    use: 'markdown-with-front-matter-loader'
  },
...
```

### file.md

```md
---
name: Winston the Bulldog
email: dogsdontuseemail@hzdg.com
---


I LIKE TO EAT CATS
==================

* Fat cats
* Skinny cats
* Whatever

```

### blog.js

```js
import file from './content/file.md';

const MdComp = ({path}) => (
  <article >
    <h1>{path.name}</h1>
    <b>{path.email}</b>
    <div dangerouslySetInnerHTML={{__html: path.__content }} />
  </article>
);


const Comp = () => <MdComp path={file} />;
...
<Comp />

```

### MdComp (template for require)

```js
const MdComp = ({ path }) => (
  <div dangerouslySetInnerHTML={{ __html: path.__content }} />
);

export const JS = () => <MdComp path={require('JS/index.md')} />;

MdComp.propTypes = { path: T.object };
```
