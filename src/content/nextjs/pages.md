# Static pages

## index.js

```jsx
const Index = () => {
  return (
    <div>
      <h1>Hello, Nextjs!!!</h1>
    </div>
  );
}

export default Index;
```


## _app.js

```jsx
import '../styles/global-styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## _document.js

```jsx
TODO
```

## 404.js

```jsx
export default function Error() {
  return (
    <h1>404 - Page not found</h1>
  )
}
```

## Dynamic pages

```pages/users/index.jsx``` - users list static page

```jsx
const Index = () => {
  return (
    <div>
      <h1>Hello, Nextjs!!!</h1>
    </div>
  );
}

export default Index;
```

```pages/users/[id].jsx``` - users detail dynamic page

## Components

### Create sepparate component

```jsx
import Link from 'next/Link';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a>{text}</a>
    </Link>
  );
}
```
