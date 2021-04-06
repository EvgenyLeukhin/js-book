# Typescript in React (.tsx)

Выдаёт ошибки уже на этапе разработки, а не после компиляции - Главное преимущество TypeScript

## FC with Typescript

### Types check (1 variant)

```ts
import React from 'react';

interface Props {
  text: string
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
}
```

### Types check (2 variant)

```ts
import React from 'react';

export const TextField: React.FC<{ text: string }> = () => {
  return (
    <div>
      <input />
    </div>
  );
}
```

## Types of data

```ts
interface Person {
  name: string,
  surname: string,
}

interface Props {
  name: string,
  age: number,
  alive: boolean,
  // void - anything
  fn: () => void,
  fnWithPar: (par: string) => string,
  obj: {
    f1: string,
    f2: number,
    f3: () => boolear, 
  },
  person: Person,
  unknown?: string // optional type with ?
}
```

## useState with TypeScript

```ts
import React, { useState } from 'react';

export const TextField: React.FC<{ text: string }> = () => {
  const [count, setCount] = useState(5);

  // with check
  const [count, setCount] = useState<number | null | underfined>(5);

  // with initial state (best practice) types checking and initial data
  const [count, setCount] = useState<{ name: string, age: number, }>({ name: 'John', age: 35 });

  setCount(10);
  setCount(null); // will be error if we don't check types in useState
  setCount({ name: 'Johnson' }); // change state


  return (
    <div>
      <input />
    </div>
  );
}
```

## useState and change state

```tsx
import React, { useState } from 'react';

// state, initial state of title is ''
const [title, setTitle] = useState<string>('');

// change state handler
const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTitle(event.target.value);
}

...

<input onChange={changeTitle} />
```

## useRef