# Typescript in React (.tsx)

**TypeScript** - это своего рода настройка над JavaScript, в который он преобразуется на этапе компиляции. 
Выдаёт ошибки уже на этапе разработки и написания кода, а не после компиляции (в чем премущество над **propTypes**). Если тип определяемых переменных не соответствует реальному - Главное преимущество TypeScript;

[YouTube-видео - TypeScript & React. Полный курс](https://www.youtube.com/watch?v=xL-a5Tox7Qw)

```
npx create-react-app react-typescript --template typescript
```

## Typing Props

### Create interface inside .tsx file

```tsx
interface Props {

  // single props
  name: string;
  id: number;
  alive: boolean;

  // object
  loginData: {
    id: number;
    name: string;
    login: boolean;
  };

  // array of objects
  players: [
    {
      name: string;
      active: boolean;
      id: number;
    }
  ];

  // actions
  someAction1: Function;
  someAction1: () => void;
  someAction2: (value: number) => void;
  someAction3: () => MouseEventHandler; // import { MouseEventHandler } from 'react';

  // combinations of types
  someField1: number | string;

  // not-nessesary props
  someField2?: number;

  // or like this
  someField: number | undefined;
}
```

### Create types sepparate .tsx file

#### types.tsx
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

### Import types

```tsx
import { Id, ISpin, GameDate } from './types';

interface Props {
  id: Id;
  iSspin: IsSpin;
  gameData: GameDate;
}

```
### Typing inside maping

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

### Create enum

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