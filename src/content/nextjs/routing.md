# Routing

## Static routing

```pages/users/index.jsx || pages/users.jsx```

```jsx
import Link from 'next/Link';

export default function staticRouting() {
  return (
    <>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </>
  )
}
```

## Dynamic routing

```pages/users/index.jsx || pages/users/[id].jsx```

```jsx
import Link from 'next/Link';

export default function staticRouting() {
  return (
    <Link href={`/users/${user.id}`}>
      <a>{user.name}</a>
    </Link>
  )
}
```

## useRouter

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
