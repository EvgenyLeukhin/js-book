# Typescript in React (.tsx)

**TypeScript** - это своего рода настройка над JavaScript, в который он преобразуется на этапе компиляции. 
Выдаёт ошибки уже на этапе разработки и написания кода, а не после компиляции (в чем премущество над **propTypes**). Если тип определяемых переменных не соответствует реальному - Главное преимущество TypeScript;

[YouTube-видео - TypeScript & React. Полный курс](https://www.youtube.com/watch?v=xL-a5Tox7Qw)

```
npx create-react-app react-typescript --template typescript
```

## Typescript in FC

```tsx
import React, { MouseEventHandler } from 'react';

// типизируем пропса-объект
interface Props {
  name: string;
  surname: string;
  age: number;
  alive: boolean;
}

// типизируем пропcы FC
interface Props {
  person: PersonProps;
  handleClose: MouseEventHandler; // event
  items: [] | null;
  readonly something: boolean; // readonly можно не ставить (стоит по ум*)
  optionalProp?: string | any;
}

const SomeFC: React.FC<Props> = ({ person, handleClose, items, something, optionalProp }) => {
  return (
    // Typescript on maping
    <div>
      {items.map((item: { name: string }, index) => {
        return <span>{item.name}</span>;
      })}
    </div>
  );
}
```

## TypeScript in CC
