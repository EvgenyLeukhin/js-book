# Typescript in React (.tsx)

TypeScript это своего рода настройка над JavaScript, в который он преобразуется на этапе компиляции. 
Выдаёт ошибки уже на этапе разработки и написания кода, а не после компиляции. Если тип определяемых переменных не соответствует реальному - Главное преимущество TypeScript;

[YouTube-видео - TypeScript & React. Полный курс](https://www.youtube.com/watch?v=xL-a5Tox7Qw)

```
npx create-react-app react-typescript --template typescript
```

## Func Component - I variant (many props)

A function must return something else will be error.

```tsx
import React from 'react';

interface Props {
  text: string;
}
// { text = '' } // with default pros
const SomeFC: React.FC<Props> = ({ text }: Props) => {
  const onClick = () => alert('Some click!');

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
};

export default SomeFC;
```

## Func Component - II variant (less props, generic method)

```tsx
import React from 'react';

const SomeFC: React.FC<{ text: string }> = () => {
  const onClick = () => alert('Some click!');

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
};

export default SomeFC;
```

## Class Component

## Types
```tsx
interface Props {
  prop1: string;
  prop2: number;
  readonly prop3: boolean;
  prop4?: boolean; // optional prop
  prop5?: number | null; // condition
  children: React.ReactNode,
  prop4: () => void;
}
```

## Variables in typescript
```tsx
let some: string = 'test;
some = 123; // error!
```