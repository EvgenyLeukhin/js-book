# Styling

## Inline styling

```jsx
const Index = () => {
  return (
    <div>
      <h1 className="title">Hello, Nextjs!!!</h1>
    </div>

    <style jsx>
      {`
        .title {
          color: maroon;
          background-color: white;
        }
      `}
    </style>
  );
}

export default Index;
```

## Styling (_app.js)

Если в pages создать файл _app.js, то он будет оберткой для всего приложения. 
Можно подключать к нему глобальные стили.

```jsx
import '../styles/global-styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## Sass

```npm i --save sass```

```jsx
import Link from 'next/Link';

import styles from '../styles/LinkCustom.module.scss';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a className={styles.LinkCustom}>{text}</a>
    </Link>
  );
}
```

### Import module local styles

```jsx
import Link from 'next/Link';

import styles from '../styles/LinkCustom.module.css';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a className={styles.LinkCustom}>{text}</a>
    </Link>
  );
}
```
