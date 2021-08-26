# Typescript in React (.tsx)

**TypeScript** - это своего рода настройка над JavaScript, в который он преобразуется на этапе компиляции. 
Выдаёт ошибки уже на этапе разработки и написания кода, а не после компиляции (в чем премущество над **propTypes**). Если тип определяемых переменных не соответствует реальному - Главное преимущество TypeScript;

Строго типизированная js-обертка, усраняет проблему динамической типизации чистого js.

[TypeScript Official Website](https://www.typescriptlang.org/)

[YouTube-видео - TypeScript & React. Полный курс](https://www.youtube.com/watch?v=xL-a5Tox7Qw)

[TypeScript 4.0 Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)

[TypeScript Cheat Sheetс](https://devhints.io/typescript)

```
npx create-react-app react-typescript --template typescript

sudo npm i -g typescript

// TypeScript compiler
tsc some-file.ts
```

## Type and declaration

Simple typing for one parametr

```tsx
let isDone: boolean;
let isDone: boolean = false;
const user: any = 'String';
const arr: [string, number] = [ 'Name', 123 ];
const arrayOfNumbers: Array<number> = [ 123, 123 ];
const someFunc = ():void => console.log(123);
const obj: { name: string, age: number } = {
  name: 'John', 
  age: 14,
};

// create type
type IPerson = { 
  name: string, 
  age: number ,
  optional?: () => string;
};

// with type
const obj: IPerson = {
  name: 'John', 
  age: 14,
}

// create type
type ID = number;
const someId: ID = 123;

type ID = number | string;
const someId1: ID = '123';
const someId2: ID = 123;
const someId3: ID = true; // error
```

## Interface

Create types for all component, which may contains several types

```tsx
interface Props {

  // single props
  anything: any;
  someString: string;
  someNumber: number;
  someNull: null;
  somBool?: boolean; // not-nessesary props
  readonly some: undefined | null; // combinations of types, readonly

  // functins
  someFunc1: Function;
  someFunc3: () => any;
  someFunc2: () => void; // return nothing
  someFunc2: () => never; // ??? throw New Error(text)
  someFunc4: (id: number) => any;
  someFunc5: () => MouseEventHandler; // import { MouseEventHandler } from 'react';

  // arrays
  arrayOfNumbers: number[] | Array<number>; // generic type
  arrayOfStrings: string[] | Array<string>;
  arrayOfObjs: {
    id: number;
    name: string;
    login: boolean;
  }[];

  // Array of PlayerData object (some import)
  players: PlayerData[];

  // Array of functions that return strings
  (() => string)[] | { (): string; }[] | Array<() => string>;
}
```

## Create types sepparate .tsx file

### types.tsx
```tsx
export type Id = number;

export type IsSpin = boolean;

export type GameDate = {
  activeGameId: string;
  activePlayerId: string;
  leaderBoardResults: [
    {
      playerName: string;
      points: number;
      isGold: boolean;
      isSilver: boolean;
      isBronze: boolean;
    }
  ];
};
```

## Import types

```tsx
import { Id, ISpin, GameDate } from './types';

interface Props {
  id: Id;
  iSspin: IsSpin;
  gameData: GameDate;
}

```
## Typing inside maping

```tsx
...
return (
  <div>
    {items.map((item: { name: string; id: number; }, index) => {
      return <span key={item.id}>{item.name}</span>;
    })}
  </div>
...
);
```

## enum

Список значений. Смесь массива и объекта. Значения, если не присвоены будут возвращать индексы

```tsx
  // add statuses list
export enum GameState {
  READY_START_ROUND = 'READY_START_ROUND',
  IS_SPIN = 'IS_SPIN',
  START_ROUND = 'START_ROUND',
  ROUND_IN_PROGRESS = 'ROUND_IN_PROGRESS',
  ACTIVE_PLAYER_VOTED = 'ACTIVE_PLAYER_VOTED',
  SHOW_LEADER_BOARD_ROUND = 'SHOW_LEADER_BOARD_ROUND',
  SHOW_LEADER_BOARD_ALL = 'SHOW_LEADER_BOARD_ALL',
  SHOWING_RESULTS = 'SHOWING_RESULTS',
}

// equal this enum to prop
export interface IServerGameState {
  gameStatus: GameState;
}
```
Если значение **gameStatus** будет отличное от вариантов из списка **GameState**, no будет ошибка

```tsx
  gameStatus === READY_START_ROUND; // right
  gameStatus === END_START_ROUND; // wrong
```

```tsx
enum Directions {
  Up = 2,
  Down = 4,
  Left = 5,
  Right = 6,
}

Directions.Up; // 2
Directions.[6]; // 'Right'

```

## FC template

```tsx
import { IImportTypes } from './types';
import { styles } from './styles';

interface IProps {
  prop1: boolean;
  prop2: string;
  prop3: IImportTypes;
}

const SomeComp: React.FC<IProps> = ({ prop1, prop2 }) => {
  const classes = styles();

  return (
    <div className={classes.someClass}>
      {prop1 && prop2}
    </div>
  )
}

export default SomeComp;

// typing with interface
const SomeComp1: React.FC<IProps> = ({ prop1, prop2, prop3 }) => {
  return (
    <div>Some jsx-code</div>
  );
})

// typing inside generic
const SomeComp2: React.FC<{ 
  prop1: number; 
  prop2: number; 
  prop3: IImportTypes; 
}> = ({ prop1, prop2, prop3 }) => {
  return (
    <div>Some jsx-code</div>
  );
)}

export { SomeComp1, SomeComp2 };
```