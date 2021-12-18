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
