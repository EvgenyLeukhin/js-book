# Markdown

## Install
```
  npn i --save-dev 
  markdown-with-front-matter-loader
```

## Config
```js
...
  {
    test: /\.md$/,
    use: 'markdown-with-front-matter-loader'
  },
...
```

## Usage

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
