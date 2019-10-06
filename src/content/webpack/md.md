# Markdown

## raw-loader

```bash
npm i --save-dev
  github-markdown-css
  raw-loader
  react-markdown
  react-syntax-highlighter
```

### 1. Config

```js
...
  {
    test: /\.md$/,
    use: 'raw-loader'
  },
...
```

```scss
// import to global component
@import "~github-markdown-css";
```

### 2. MarkdownWrapper & SyntaxHighlighter

```js
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
```

### 3. Routes.jsx

```js
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MdWrapper from './MarkdownWrapper';

import SomeMdFile from 'content/file.md';

const Routes = () => (
  <main className='markdown-body'>
    <Switch>
      <Route path='some-path' component={() => <MdWrapper mdFile={SomeMdFile} />} />
    </Switch>
  </main>
);

export default Routes;
```

---

## markdown-with-front-matter-loader

```raw
  npm i --save-dev
  github-markdown-css
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


I LIKE TO EAT APPLES
==================

* Apples
* Oranges
* Tomatos

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
