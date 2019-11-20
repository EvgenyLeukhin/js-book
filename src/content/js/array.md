# Array

Когда большое количество данных, вместо большого количества переменных удобнее создавать массивы. 

## Syntax

```js
const array = ['First', { name: 'John' }, true];

// or with "new Array" func syntax
const array = new Array('First', { name: 'John' }, true);
```

## Array checking

```js
Array.isArray(array); // true
```

У каждого элемента массива есть свой индекс, индексируются элементы с 0.
Индексы не обязательно могут идти друг за другом, могут быть незаполненные [[0], [1], [3], [10]]

```js
array[0];           // 'First'
array[0] = 'FIRST'; // change item
```

Длина массива. 

```js
array.length;       // 3 (length of array)
array.length[array.length - 1] = 'Some';       // Change last
```

## Array of objects

```js
const data = [{}, {}, {}];
```

## pop/push, shift/unshift

Массивы по типу объекты, поэтому синтаксис в добавлении\удалении элементов через точку. Значения массива записываются в [ ] через запятую.

```js
// add new items to the end of array
array.push('New item 1', 'New item 2', 'New item 3');


// add new items to the begining of array
array.unshift('New item 1', 'New item 2', 'New item 3');

// delete first item from array
array.shift();

// delete last item from array
array.pop();
```

## join, concat, reverse, sort, slice, splice

```js
// Объединяет все элементы массива в одну строку
// Можно вставлять в ('*') любые разделяющие символы
array.join();

// Объединяет массивы
// Метод склеит два массива в один, сохраняя порядок, не меняет исходный массив
array.concat(array2);

// Меняет порядок элемента массива на реверсивный
array.reverse();

// Cортирует элементы массива
array.sort();

// "Режет" массив, "вырежет" первые 100 элементов массива
array.slice(0, 99);
```

## Multi-level array

Array of arrays.

```js
const arr1 = [1, 2, 3],
      arr2 = [4, 5, 6],
      arr3 = [7, 8, 9];

const multiLevelArray = [arr1, arr2, arr3];

console.log(multiLevelArray[2] [0]); // 7
```
