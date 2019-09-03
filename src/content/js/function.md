# Function

Функции применяют для сокращения кода и упращения процесса программирования. Задаётся один раз и может многократно вызываться далее. Если в своём коде вы повторяете одинаковые куски кода много раз, то лучше вывести из в отдельную функцию.

Ф. не следует перегружать локигой, они должны решаться конкретные повторяющиеся задачи.

Принцип DRY - don't repeat yourself.

## Naming

Если переменная - это существительное, то переменная - это глагол, действие.
Общее правило - в НАЗВАНИИ ФУНКЦИИ должен находитьтся глагол, описывающий то, что функция делает

Функции, начинающиеся с…

> "get…" – возвращают значение <br />
> "calc…" – что-то вычисляют <br />
> "create…" – что-то создают <br />
> "check…" – что-то проверяют и возвращают логическое значение

## Function syntax

```js
alerting();

function alerting() {
  alert('Hello, World!');
}

// call function (any times you need)
// можно вызывать функции в любом месте, даже до объявления
// это работает только с function expression
alerting();
alerting();
```

## Params

Это переменные, которые объявляются при объявлении функций, не нужно добавлять им ключевые слова let, const.

```js
function summing(a, b) {
  console.log('a + b =', a + b)
}

summing(1, 2); // 3
```

Внутри фунции можно менять свойства объектов, которые находятся на глобальном уровне, лучше делать это не напрямую, а через параметры. Параметры вне функции не видны.

```js
const car = { color: 'red' };

// изменение напрямую (bad)
function changeColor() { car.color = 'green'; } changeColor();

// изменение через параметр (good)
// может даже совпадать аргумент с названием переменной
function changeColor(car) { car.color = 'green'; } changeColor(car);
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
// function declaratin (initialize)
function summing(a, b) {
  a + b;
}

summing(1, 2); // undefined


// with return
function summing(a, b) {
  return (a + b);
  console.log(a + b); // don't work (after return)
}
summing(1, 2); // 3


// linebrakes only with ()
function summing(a, b) {
  return (
    a + b
  );
}
summing(1, 2); // 3
```

## ES6 - () => syntax

Анонимные функции. Если параметр только один, то круглые скобки можно опустить.

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
