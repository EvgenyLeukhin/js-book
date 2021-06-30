# Hooks

Хуки - это функции. Функциональное программирование. Классы - плохо (ресурсы, наследование), функции - хорошо (изолированы, не наследуются, более масштабируемые, проще запись).

## useState

Аналог старого state = {}. Работает асинхронно.

```tsx
import React, { useState } from 'react';

const SomeFunc = () => {
  const counterState = useState(0); // возвращает массив [initialState, func() - которая меняет состояние]
  console.log(counterState[0]); // initialState - состояние
  console.log(counterState[1]); // func - которая меняет это состояние

  // короткая запись (деструктуризация массива)
  const [counter, setCounter] = useState(0);

  // функции - экшены
  const increment = setCounter(counter + 1);
  const decrement = setCounter(counter - 1);

  // если нужно обрабатывать не стейт, а предыдущее состояние, через колбек
  // более предпотчтительный способ
  const setPrevCounter = setCounter((prevCounter) => {
    return prevCounter + 2;
  });

  // короткая запись
  const setPrevCounter = setCounter(prevCounter => prevCounter + 2);

  if (true) {
    useState() // !!! - ТАК НЕЛЬЗЯ
  }

  return (
    <div>
      <h2>Счетчик: {counter}</h2>
      <span onClick={increment}>+</span>
      <span onClick={decrement}>-</span>
    </div>
  );
}

export default SomeFunc;
```

В useState() -> useState(() => someCalcFunction) может находиться любая функция для вычисления параметра

## useEffect