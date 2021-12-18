# SEO

```jsx
import Head from 'next/head';

<Head>
  <meta keywords="keyword1, keyword2, keyword3" />
  <title>NextJs - Test</title>
</Head>
```

## MainContainer.js

```jsx
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
```

## Use MainContainer

```jsx
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

## Next SEO

```npm install --save next-seo```

```jsx
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <p>Simple Usage</p>
  </>
);

export default Page;
```
