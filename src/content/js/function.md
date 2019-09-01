# Function

Функции применяют для сокращения кода и упращения процесса программирования. Задаётся один раз и может многократно вызываться далее. Если в своём коде вы повторяете одинаковые куски кода много раз, то лучше вывести из в отдельную функцию.

## ES5 syntax

```js
function alerting() {
  alert('Hello, World!');
}

alerting();
```

## Params

```js
function summing(a, b) {
  console.log('a + b =', a + b)
}

summing(1, 2); // 3
```

## Default params

```js
function summing(a = 1, b = 2) {
  console.log('a + b =', a + b)
}

summing(); // 3
summing(10, 20); // 30
```

## Return

```js
function summing(a, b) {
  a + b;
}

summing(1, 2); // undefined


// with return
function summing(a, b) {
  return (a + b);
}

summing(1, 2); // 3
```

## Anonimus funcs by variables

```js
const summing = function(a, b) {
  return (a + b);
};

summing(1, 2); // 3
```

## Naming

Общее правило - в НАЗВАНИИ ФУНКЦИИ должен находитьтся глагол, описывающий то, что функция делает

## ES6 syntax

Если параметр только один, то круглые скобки можно опустить.

Если строка кода только одна, то фигурные скобки и return можно опустить тоже.

```js
const summing = (a, b) => {
  return (a + b);
};

summing(1, 2); // 3
```

```js
const summing = a => a + 5;

summing(5); // 10
```

## Замакания, Call-back
