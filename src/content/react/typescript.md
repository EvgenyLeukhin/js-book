# Typescript in React (.tsx)

TypeScript это своего рода настройка над JavaScript, в который он преобразуется на этапе компиляции. 
Выдаёт ошибки уже на этапе разработки и написания кода, а не после компиляции. Если тип определяемых переменных не соответствует реальному - Главное преимущество TypeScript;

[YouTube-видео - TypeScript & React. Полный курс](https://www.youtube.com/watch?v=xL-a5Tox7Qw)

```
npx create-react-app react-typescript --template typescript
```

## Variables in typescript

```tsx
let some: string = 'test;
some = 123; // error
```


## Function Component with Typescript

Функция должна что-ниб возвращать, иначе будет ошибка.
A function must return something else will be error.

```tsx
// basic syntax
import React from 'react';

const Title:React.FC = () => <h1>Hello, World!</h1>

const App = () => <Title />

export default App;


// TYPES CHECKS (props check)

// 1. GENERIC TYPES METHOD (check types inside <>) - use whed we have less props
const Title:React.FC<{ title: string }> = () => <h1>{title}</h1>
const App = () => <Title title="Hello, World!" />

// 2. TYPE || INTERFACE METHOD - use whed we have many props
type Props = {
  title: string,
  someOptionalProp?: string, // optional prop
}

const Title = ({title, someOptionalProp = ''}: Props }) => <h1>{title}</h1>
const App = () => <Title title="Hello, World!" />
```

## Class component with Typescript







### Types check (1 variant)

```ts
import React from 'react';

interface Props {
  text: string
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      {Props.text}
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
      {text}
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
      {text}
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

## Component template

```tsx
// imports
import React, { useCallback } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as BackArrow } from '../../icons/backArrow.svg';

// styles
const styles = makeStyles((theme) => ({
  loginPageStyles: {
    
    // nesting
    '& p': {

    },

    // adaptivity
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px',
    },
  },
}));

// Props checking
interface Props {
  text: string;
  style?: object;
  loginPage?: boolean;
}
                                        // props with distucturing
const SomeFComponent: React.FC<Props> = ({ goto, style, text, loginPage }: Props) => {
  const classes = styles();

  // some method
  const onClick = useCallback(() => {
    // method code
  });

  return (
    <div onClick={onClick} className={classes.loginPage}>
      <BackArrow />
      <Typography className={classes.textStyle} style={style} variant="body2">
        {text}
      </Typography>
    </div>
  );
};

export default SomeFComponent;


//////// small FC ////////
// Small FC with styles
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  someStyleClass: {
    [theme.breakpoints.up('sm')]: {
      // css code
    },
  },
}));

// types checking
interface Props {
  text: string;
}

// FC
const BackButton: React.FC<Props> = ({ text }: Props) => {
  const classes = styles();
  const onClick = () => alert('Some click!');

  return (
    <div onClick={onClick} className={classes.someStyleClass}>
      // return jsx with props {text}
    </div>
  );
};

export default BackButton;
```