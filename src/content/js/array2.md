# Array and cycles-helpers

В ES6 появилось много хэлперов для работы с элементами в массиве.

```js
const arr = [1, 2, 3];
```

## for ... of

Простой перебор элементов массива.

```js
for (let i of arr) {
  console.log(i); // item output
}
```

## forEach()

Специальная функция в JS для ПЕРЕБОРКИ элементов массива. Тип данных у элементов массива должен быть одинаковым. Третий параметр array возвращает сам массив.

```js
// перебор элементов
arr.forEach((item, index, thisArray) => {
  console.log(item);
});
```

## map()

Функция для создания нового массива по карте другого.
Также можно применять для вывода элементов массива.

```js
const arr = [1, 2, 3];

// создаём новый массив по карте другого
const mappedArray = arr.map((item, index, thisArray) => {
   // умножим элементы на 2
   return item * 2;
});

console.log(mappedArray); // [2, 4, 6]
```

## filter()

Функция для возвращения определённых значений массива. ФИЛЬТРАЦИЯ.

```js
const arr = [1, 2, 3];

const filteredArray = arr.filter((item, index, thisArray) => {
// выведем только нечётные
  return item%2 !== 0;
});

console.log(filteredArray); // [1, 3]
```

## some()

Проверяет элемент массива на соответствие какому-либо УСЛОВИЮ.

Возвращает true, если хотя бы один элемент true.

Когда "наткнётся" на первое true, то цикл прекращается и возвращается true.

```js
const arr = [1, 2, 3];
const checkTrue = arr.some((item, index, thisArray) => {
// проверим массив на содержание в нём нечётных элементов
  return item%2 !==0;
});
// выводим результат проверки
console.log(checkTrue); // true
```

## every()

Проверяет ВСЕ элементы массива на соответствие какому-либо УСЛОВИЮ.

Возвращает false, если хотя бы один элемент false.

Когда "наткнётся" на первый false, то цикл прекращается и возвращается false

```js
const arr = [1, 2, 3];
const checkFalse = arr.every((item, index, thisArray) => {
  // проверим массив на содержание в нём всех нечётных элементов
  return item%2 !==0;
});
// выводим результат проверки
console.log(checkFalse); // false
```

## reduce()

Функция для "СВОРАЧИВАНИЯ" массива в одно значение (суммирование). Возвращает number.

preVal - предыдущий элемент.

0 - второй аргумент функции (НАЧАЛЬНОЕ ЗНАЧЕНИЕ).

```js
const arr = [1, 2, 3];
const arrCount = arr.reduce((preVal, item) => {
  // сложение элементов
  return preVal + item;
}, 0);

// сумма элементов массива
console.log(arrCount); // 6
```

## find()

Метод для поиска элемента внутри массива. Возвращает первый найденный элемент.

```js
const data = [20, 18, 15, 10, 9];

const found = data.find((item, index, thisArray) => {
  return item < 12;
});

console.log(found);
```

## Spread/rest operator

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b]; // [1, 2, 3, 4, 5, 6]
```
