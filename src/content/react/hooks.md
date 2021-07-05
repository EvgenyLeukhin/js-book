# Hooks

Хуки - это функции. Функциональное программирование. Классы - плохо (ресурсы, наследование), функции - хорошо (изолированы, не наследуются, более масштабируемые, проще запись). Хуки должны начинаться с *use...*, a методы useState доджны начинаться с *set...*, это договоренность разработчиков.

## useState

Аналог старого state = {}. Работает асинхронно.

```tsx
import React, { useState } from 'react';
React.useState() - можно использовать так, без импорта

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


## Все состояние в useState

Лучше использовать useState для точечных изменений, а не для всех сразу.

```tsx
const [state, setState] = useState({
  title: 'Some title',
  date: Date.now(),
});

// перезатирает весь state (поле date исчезнет)
onClick={() => setState({ title: 'Some new title' })};

// сохраняет все поля в state
function updateTitle() {
  setState(prevState => {
    return {
      ...prevState,
      title: 'Some new title',
    }
  })
}


```

## useEffect

Можно использовать в качестве сайд-эффекта, для выполнения запросов, добавления листенеров и т.д. В useEffect не нужно менять стейт, а то возможен бесконечный цикл.

```tsx
import React, { useEffect } from 'react';
React.useEffect() - можно использовать так, без импорта

function App {
  const [type, setType] = useState('users');

  // принимает анонимную колбек-функцию
  // без второго параметра вызывается при каждом рендеринге компонента (аналог componentDidMount)
  useEffect(() => {
    console.log('render');
  });

  const [data, setData] = useState([]);

  // второй аргумент принимает массив с параментрами deps от которых будет зависить данный useEffect, будет вызываться при каждом изменении type
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type]);

  // можно использовать в качестве запросов на сервер

  return (
    <div>
      <h1>{type}</h1>
      {data.length && data.map((item, index) => {
        return (
          <div key={index}>{i.title}</div>
        )
      })}
      <button ocClick={() => setType('users')}>Users</button>
      <button ocClick={() => setType('todos')}>TODOs</button>
      <button ocClick={() => setType('posts')}>Posts</button>
    </div>
  )
}
```

## useRef
Похож на useState. 

Используется для форм, чтобы изменять. Ссылки на DOM-элементы. Программный фокусы на кнопки. Показывать значение предыдущего стейта.

При изменении рефа компонент не будет перерендориваться. Сохраняем состояние между рендерами. Может сохранять состояние стейта, но без перерендера.

```tsx
const renderCount = useRef('initial');

<input ref={renderCount} />
// возвращает не значение, а объект

// объект
renderCount

// значение
renderCount.current;
```

## useMemo

## useCallback

## useContext

## useReducer

## свои хуки

