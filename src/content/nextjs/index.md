# NextJS

Обертка над React, что-то типо GatsbyJS в плане билдинга. На выходе получается не Virtual DOM, а полноценный статичные html-файлы.

* [**NextJS** - *nextjs.org*](https://nextjs.org)
* SSR нормальный, нет таких проблем как в CRA
* SEO frendly
* Встроенный роутинг


## Install

1. ```npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"```

2. ```cd nextjs-blog```

3. ```npm run dev```

```json
  "scripts": {
    "start": "next dev",
    "build": "next build",
    "lint": "next lint"
  },
```



## Install 2 (manual)

1. ```npm init -y```

2. ```npm i --save react react-dom next```

3. ./pages/index.js``

### Index.js

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

## Users.js

Можно еще так запичывать

```jsx
export default function users() {
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

```

## Styling

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

## Routing

```jsx
import Link from 'next/Link';
import { useState } from 'react';

export default function users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Peter' },
    { id: 2, name: 'John' },
  ]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>Routing</h2>
      <ul>
        <li><Link href='/'><a>Index</a></Link></li>
      </ul>
    </div>
  )
}
```

```jsx
// users/[id].js
import { useRouter } from 'next/router';

export default function userId() {
  // const router = useRouter();
  const { query } = useRouter();
  const { id } = query;
  console.log('id', id);

  return (
    <div>
      <h1>User detail</h1>

      <div>{`User id: ${id}`}</div>
    </div>
  )
}

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

### Import styles

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

## Запросы для статичных страниц - getStaticProps

Не нужен useState или useEffect, все делается через getStaticProps

```jsx
import Link from 'next/Link';

// static props
export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}

export default function users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>Routing</h2>
      <ul>
        <li><Link href='/'><a>Index</a></Link></li>
      </ul>
    </div>
  )
}

```

## Запросы для динамических страниц - getServerSideProps

При запросах через getStaticProps или getServerSideProps данные, полученные с сервера уже отрендериваются на клиенте.

```jsx
// getServerSideProps - for dynamic pages
export async function getServerSideProps(context) {
  const { params, query } = context; // params, query можно забирать прямо из контекста этой функции
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const userData = await response.json();

  return {
    props: {userData}, // will be passed to the page component as props
  }
}

export default function userId({ userData }) {
  console.log('userData', userData);

  return (
    <div>
      <h1>User details:</h1>
      <ul>
        <li><span>Name:</span> <b>{userData.name}</b></li>
        <li><span>Phone:</span> <b>{userData.phone}</b></li>
        <li><span>Website:</span> <b>{userData.website}</b></li>
        <li><span>Id:</span> <b>{userData.id}</b></li>
      </ul>
    </div>
  )
}
```

## SEO

```jsx
import Head from 'next/head';

...
<>
  <Head>
    <meta keywords="keyword1, keyword2, keyword3" />
    <title>NextJs - Test</title>
  </Head>
  ...
</>
```

## MainContainer.js

```jsx
// MainContainer.js
import Head from 'next/head';
import LinkCustom from './LinkCustom';

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={keywords} />
        <title>NextJs - Test</title>
      </Head>

      <header>
        <ul className="navbar">
          <li>
            <LinkCustom text="Index" href="" />
          </li>
          <li>
            <LinkCustom text="Users" href="users" />
          </li>
        </ul>
      </header>

      <div>{children}</div>

      {/* inline styling */}
      <style jsx>
        {`
          .navbar {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}


...
// index.js
import MainContainer from '../components/MainContainer';

const Index = () => {
  return (
    <MainContainer keywords='index page'>
      <div>
        <h1 style={{ color: 'maroon' }}>Hello, Nextjs!!!</h1>
      </div>
    </MainContainer>
  )
}

export default Index;
```

## 404 page

pages/404.js

```jsx
export default function Error() {
  return (
    <h1>404 - Page not found</h1>
  )
}
```
