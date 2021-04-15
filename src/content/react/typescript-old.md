## Class component with Typescript

### First method with generics
```tsx
import React, { Component } from 'react';

// types check generic method 1 {} - props, 2 {} - state
class SomeClass extends Component<{}, { count: number }> {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default SomeClass;
```

### Second method with type obj

```tsx
import React, { Component } from 'react';

// or interface
type ClassState = {
  count: number,
}

// or interface
type ClassProps = {
  // readonly можно не ставить, так как он стоит по умолчанию, полученное значение props и state нельзя изменять, так как будет ошибка даже в простом Реакте, так как нельзя переопределять пропсы и стейт напрямую, иммутабельность, только через setState
  readonly title?: string,
}

// types check generic method 1 {} - props, 2 {} - state
class SomeClass extends Component<ClassProps, ClassState> {
  state = {
    count: 0,
  }

  // default props
  static defaultProps: ClassProps = {
    title: 'Default title',
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default SomeClass;
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